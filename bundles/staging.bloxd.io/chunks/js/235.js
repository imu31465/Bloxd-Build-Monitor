export const id = 235;
export const ids = [235, 241];
export const modules = {
  41869: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB
    });
    var TB = ZB(41794),
      JB = ZB(40052);
    let oB = !1;

    function GB() {
      oB || (oB = !0, JB.e.prototype._sphericalPolynomialTargetSize = 0, JB.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(JB.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = TB.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((BB => {
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
  37304: (BB, IB, ZB) => {
    ZB.d(IB, {
      Color3: () => TB.c,
      e: () => TB.g
    });
    var TB = ZB(37311);
    (0, TB.j)()
  },
  37819: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB
    });
    var TB = ZB(37824);
    class JB {
      static GetPlanes(BB) {
        const IB = [];
        for (let ZB = 0; ZB < 6; ZB++) IB.push(new TB.c(0, 0, 0, 0));
        return JB.GetPlanesToRef(BB, IB), IB
      }
      static GetNearPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] + ZB[2], IB.normal.y = ZB[7] + ZB[6], IB.normal.z = ZB[11] + ZB[10], IB.d = ZB[15] + ZB[14], IB.normalize()
      }
      static GetFarPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] - ZB[2], IB.normal.y = ZB[7] - ZB[6], IB.normal.z = ZB[11] - ZB[10], IB.d = ZB[15] - ZB[14], IB.normalize()
      }
      static GetLeftPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] + ZB[0], IB.normal.y = ZB[7] + ZB[4], IB.normal.z = ZB[11] + ZB[8], IB.d = ZB[15] + ZB[12], IB.normalize()
      }
      static GetRightPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] - ZB[0], IB.normal.y = ZB[7] - ZB[4], IB.normal.z = ZB[11] - ZB[8], IB.d = ZB[15] - ZB[12], IB.normalize()
      }
      static GetTopPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] - ZB[1], IB.normal.y = ZB[7] - ZB[5], IB.normal.z = ZB[11] - ZB[9], IB.d = ZB[15] - ZB[13], IB.normalize()
      }
      static GetBottomPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] + ZB[1], IB.normal.y = ZB[7] + ZB[5], IB.normal.z = ZB[11] + ZB[9], IB.d = ZB[15] + ZB[13], IB.normalize()
      }
      static GetPlanesToRef(BB, IB) {
        JB.GetNearPlaneToRef(BB, IB[0]), JB.GetFarPlaneToRef(BB, IB[1]), JB.GetLeftPlaneToRef(BB, IB[2]), JB.GetRightPlaneToRef(BB, IB[3]), JB.GetTopPlaneToRef(BB, IB[4]), JB.GetBottomPlaneToRef(BB, IB[5])
      }
      static IsPointInFrustum(BB, IB) {
        for (let ZB = 0; ZB < 6; ZB++)
          if (IB[ZB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  37824: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB
    });
    var TB = ZB(37120);
    class JB {
      constructor(BB, IB, ZB, JB) {
        this.normal = new TB.s(BB, IB, ZB), this.d = JB
      }
      HTB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new JB(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let IB = 0;
        return 0 !== BB && (IB = 1 / BB), this.normal.x *= IB, this.normal.y *= IB, this.normal.z *= IB, this.d *= IB, this
      }
      transform(BB) {
        const IB = JB._TmpMatrix;
        BB.invertToRef(IB);
        const ZB = IB.m,
          TB = this.normal.x,
          oB = this.normal.y,
          GB = this.normal.z,
          vB = this.d,
          kB = TB * ZB[0] + oB * ZB[1] + GB * ZB[2] + vB * ZB[3],
          cB = TB * ZB[4] + oB * ZB[5] + GB * ZB[6] + vB * ZB[7],
          nB = TB * ZB[8] + oB * ZB[9] + GB * ZB[10] + vB * ZB[11],
          hB = TB * ZB[12] + oB * ZB[13] + GB * ZB[14] + vB * ZB[15];
        return new JB(kB, cB, nB, hB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, IB, ZB) {
        const TB = IB.x - BB.x,
          JB = IB.y - BB.y,
          oB = IB.z - BB.z,
          GB = ZB.x - BB.x,
          vB = ZB.y - BB.y,
          kB = ZB.z - BB.z,
          cB = JB * kB - oB * vB,
          nB = oB * GB - TB * kB,
          hB = TB * vB - JB * GB,
          zB = Math.sqrt(cB * cB + nB * nB + hB * hB);
        let FB;
        return FB = 0 !== zB ? 1 / zB : 0, this.normal.x = cB * FB, this.normal.y = nB * FB, this.normal.z = hB * FB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, IB) {
        return TB.s.Dot(this.normal, BB) <= IB
      }
      signedDistanceTo(BB) {
        return TB.s.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new JB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, IB, ZB) {
        const TB = new JB(0, 0, 0, 0);
        return TB.copyFromPoints(BB, IB, ZB), TB
      }
      static FromPositionAndNormal(BB, IB) {
        const ZB = new JB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, IB, ZB)
      }
      static FromPositionAndNormalToRef(BB, IB, ZB) {
        return ZB.normal.TY(IB), ZB.normal.normalize(), ZB.d = -BB.dot(ZB.normal), ZB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, IB, ZB) {
        const JB = -(IB.x * BB.x + IB.y * BB.y + IB.z * BB.z);
        return TB.s.Dot(ZB, IB) + JB
      }
    }
    JB._TmpMatrix = TB.b.Identity()
  },
  37113: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      Matrix: () => TB.b,
      Quaternion: () => TB.f,
      RegisterMathVector: () => TB.j,
      TmpVectors: () => TB.m,
      Vector2: () => TB.p,
      rN: () => TB.s,
      Vector4: () => TB.t
    });
    var TB = ZB(37120);
    (0, TB.j)()
  },
  38151: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    class TB {
      constructor(BB, IB, ZB, TB) {
        this.x = BB, this.y = IB, this.width = ZB, this.height = TB
      }
      toGlobal(BB, IB) {
        return new TB(this.x * BB, this.y * IB, this.width * BB, this.height * IB)
      }
      toGlobalToRef(BB, IB, ZB) {
        return ZB.x = this.x * BB, ZB.y = this.y * IB, ZB.width = this.width * BB, ZB.height = this.height * IB, this
      }
      clone() {
        return new TB(this.x, this.y, this.width, this.height)
      }
    }
  },
  41794: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => cB
    });
    var TB = ZB(37120),
      JB = ZB(37158),
      oB = ZB(40044),
      GB = ZB(37129),
      vB = ZB(37311);
    class kB {
      constructor(BB, IB, ZB, TB) {
        this.name = BB, this.worldAxisForNormal = IB, this.worldAxisForFileX = ZB, this.worldAxisForFileY = TB
      }
    }
    class cB {
      static _NearestPow2Floor(BB) {
        return BB <= 1 ? 1 : 1 << Math.floor(Math.log2(BB))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(BB) {
        if (!BB.isCube) return null;
        BB.JR()?.PN().flushFramebuffer();
        const IB = BB.getSize().width,
          ZB = BB._sphericalPolynomialTargetSize,
          TB = ZB > 0 ? this._NearestPow2Floor(ZB) : 0,
          JB = !BB.noMipmap && !0 === BB._texture?.generateMipMaps,
          oB = TB > 0 && TB < IB && JB,
          GB = oB ? Math.max(0, Math.round(Math.log2(IB / TB))) : 0,
          vB = oB ? Math.max(1, Math.floor(IB / Math.pow(2, GB))) : IB,
          kB = BB.readPixels(0, GB, void 0, !1),
          cB = BB.readPixels(1, GB, void 0, !1);
        let nB, hB;
        BB.isRenderTarget ? (nB = BB.readPixels(3, GB, void 0, !1), hB = BB.readPixels(2, GB, void 0, !1)) : (nB = BB.readPixels(2, GB, void 0, !1), hB = BB.readPixels(3, GB, void 0, !1));
        const zB = BB.readPixels(4, GB, void 0, !1),
          FB = BB.readPixels(5, GB, void 0, !1),
          NB = BB.gammaSpace,
          gB = TB > 0 && TB < IB && !oB;
        return new Promise((BB => {
          Promise.all([cB, kB, nB, hB, zB, FB]).then((ZB => {
            let [JB, oB, GB, kB, cB, nB] = ZB, hB = vB;
            if (gB) {
              const BB = 4;
              JB = this._DownsampleFace(JB, IB, TB, BB), oB = this._DownsampleFace(oB, IB, TB, BB), GB = this._DownsampleFace(GB, IB, TB, BB), kB = this._DownsampleFace(kB, IB, TB, BB), cB = this._DownsampleFace(cB, IB, TB, BB), nB = this._DownsampleFace(nB, IB, TB, BB), hB = TB
            }
            const zB = {
              size: hB,
              right: oB,
              left: JB,
              up: GB,
              down: kB,
              front: cB,
              back: nB,
              format: 5,
              type: JB instanceof Float32Array ? 1 : 0,
              gammaSpace: NB
            };
            BB(this.ConvertCubeMapToSphericalPolynomial(zB))
          }))
        }))
      }
      static _AreaElement(BB, IB) {
        return Math.atan2(BB * IB, Math.sqrt(BB * BB + IB * IB + 1))
      }
      static _DownsampleFace(BB, IB, ZB, TB) {
        const JB = BB instanceof Float32Array ? BB : Float32Array.from(BB),
          oB = ZB * ZB * TB,
          GB = new Float32Array(oB),
          vB = IB / ZB,
          kB = 1 / (vB * vB);
        for (let nB = 0; nB < ZB; nB++) {
          const BB = Math.floor(nB * vB),
            oB = Math.floor((nB + 1) * vB);
          for (let cB = 0; cB < ZB; cB++) {
            const hB = Math.floor(cB * vB),
              zB = Math.floor((cB + 1) * vB),
              FB = (nB * ZB + cB) * TB;
            for (let ZB = 0; ZB < TB; ZB++) {
              let vB = 0;
              for (let GB = BB; GB < oB; GB++)
                for (let BB = hB; BB < zB; BB++) vB += JB[(GB * IB + BB) * TB + ZB];
              GB[FB + ZB] = vB * kB
            }
          }
        }
        if (BB instanceof Float32Array) return GB;
        const cB = new(0, BB.constructor)(oB);
        for (let nB = 0; nB < oB; nB++) cB[nB] = GB[nB] + .5 | 0;
        return cB
      }
      static ConvertCubeMapToSphericalPolynomial(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZB = IB > 0 ? this._NearestPow2Floor(IB) : 0;
        if (ZB > 0 && BB.size > ZB) {
          const IB = 5 === BB.format ? 4 : 3,
            TB = ["right", "left", "up", "down", "front", "back"],
            JB = {};
          for (const oB of TB) JB[oB] = this._DownsampleFace(BB[oB], BB.size, ZB, IB);
          BB = {
            ...BB,
            ...JB,
            size: ZB
          }
        }
        const TB = new oB.c;
        let kB = 0;
        const cB = 2 / BB.size,
          nB = cB,
          hB = .5 * cB,
          zB = hB - 1;
        for (let oB = 0; oB < 6; oB++) {
          const IB = this._FileFaces[oB],
            ZB = BB[IB.name];
          let FB = zB;
          const NB = 5 === BB.format ? 4 : 3;
          for (let oB = 0; oB < BB.size; oB++) {
            let gB = zB;
            for (let nB = 0; nB < BB.size; nB++) {
              const zB = IB.worldAxisForFileX.scale(gB).add(IB.worldAxisForFileY.scale(FB)).add(IB.worldAxisForNormal);
              zB.normalize();
              const qB = this._AreaElement(gB - hB, FB - hB) - this._AreaElement(gB - hB, FB + hB) - this._AreaElement(gB + hB, FB - hB) + this._AreaElement(gB + hB, FB + hB);
              let yB = ZB[oB * BB.size * NB + nB * NB + 0],
                UB = ZB[oB * BB.size * NB + nB * NB + 1],
                WB = ZB[oB * BB.size * NB + nB * NB + 2];
              isNaN(yB) && (yB = 0), isNaN(UB) && (UB = 0), isNaN(WB) && (WB = 0), 0 === BB.type && (yB /= 255, UB /= 255, WB /= 255), BB.gammaSpace && (yB = Math.pow((0, JB.Clamp)(yB), GB.g), UB = Math.pow((0, JB.Clamp)(UB), GB.g), WB = Math.pow((0, JB.Clamp)(WB), GB.g));
              const dB = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const BB = Math.max(yB, UB, WB);
                if (BB > dB) {
                  const IB = dB / BB;
                  yB *= IB, UB *= IB, WB *= IB
                }
              } else yB = (0, JB.Clamp)(yB, 0, dB), UB = (0, JB.Clamp)(UB, 0, dB), WB = (0, JB.Clamp)(WB, 0, dB);
              const CB = new vB.c(yB, UB, WB);
              TB.addLight(zB, CB, qB), kB += qB, gB += cB
            }
            FB += nB
          }
        }
        const FB = 6 * (4 * Math.PI) / 6 / kB;
        return TB.scaleInPlace(FB), TB.convertIncidentRadianceToIrradiance(), TB.convertIrradianceToLambertianRadiance(), oB.f.FromHarmonics(TB)
      }
    }
    cB._FileFaces = [new kB("right", new TB.s(1, 0, 0), new TB.s(0, 0, -1), new TB.s(0, -1, 0)), new kB("left", new TB.s(-1, 0, 0), new TB.s(0, 0, 1), new TB.s(0, -1, 0)), new kB("up", new TB.s(0, 1, 0), new TB.s(1, 0, 0), new TB.s(0, 0, 1)), new kB("down", new TB.s(0, -1, 0), new TB.s(1, 0, 0), new TB.s(0, 0, -1)), new kB("front", new TB.s(0, 0, 1), new TB.s(1, 0, 0), new TB.s(0, -1, 0)), new kB("back", new TB.s(0, 0, -1), new TB.s(-1, 0, 0), new TB.s(0, -1, 0))], cB.MAX_HDRI_VALUE = 4096, cB.PRESERVE_CLAMPED_COLORS = !1
  },
  41575: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB.f,
      c: () => TB.l
    });
    var TB = ZB(40110);
    (0, TB.q)()
  },
  37964: (BB, IB, ZB) => {
    function TB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const IB = 16 * Math.random() | 0;
        return ("x" === BB ? IB : 3 & IB | 8).toString(16)
      }))
    }
    ZB.d(IB, {
      d: () => TB
    })
  },
  41833: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB
    });
    var TB = ZB(41821),
      JB = ZB(41842);
    class oB {
      static ExpandRGBDTexture(BB) {
        const IB = BB._texture;
        if (!IB || !BB.isRGBD) return;
        const JB = IB.PN(),
          oB = JB.getCaps(),
          GB = IB.isReady;
        let vB = !1;
        oB.textureHalfFloatRender && oB.textureHalfFloatLinearFiltering ? (vB = !0, IB.type = 2) : oB.textureFloatRender && oB.textureFloatLinearFiltering && (vB = !0, IB.type = 1), vB && (IB.isReady = !1, IB._isRGBD = !1, IB.invertY = !1);
        const kB = async () => {
          const oB = JB.isWebGPU,
            GB = oB ? 1 : 0;
          IB.isReady = !1, oB ? await ZB.e(347).then((() => ZB(61428))) : await ZB.e(329).then((() => ZB(61430)));
          const vB = new TB.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, JB, !1, void 0, IB.type, void 0, null, !1, void 0, GB);
          vB.externalTextureSamplerBinding = !0;
          const kB = JB.createRenderTargetTexture(IB.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: IB.samplingMode,
            type: IB.type,
            format: 5
          });
          vB.onEffectCreatedObservable.addOnce((ZB => {
            ZB.executeWhenCompiled((() => {
              vB.onApply = BB => {
                BB._bindTexture("textureSampler", IB), BB.setFloat2("scale", 1, 1)
              }, BB.JR()?.postProcessManager.directRender([vB], kB, !0), JB.restoreDefaultFramebuffer(), JB._releaseTexture(IB), vB && vB.dispose(), kB._swapAndDie(IB), IB.isReady = !0
            }))
          }))
        };
        vB && (GB ? kB() : BB.onLoadObservable.addOnce(kB))
      }
      static async EncodeTextureToRGBD(BB, IB) {
        let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return IB.PN().isWebGPU ? await ZB.e(348).then((() => ZB(61440))) : await ZB.e(330).then((() => ZB(61438))), await (0, JB.b)("rgbdEncode", BB, IB, TB, 1, 5)
      }
    }
  },
  61291: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      AsyncLoop: () => TB.d,
      RegisterTools: () => TB.f,
      Tools: () => TB.j,
      className: () => TB.k
    });
    var TB = ZB(40152);
    (0, TB.f)()
  },
  41881: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB
    });
    class TB {
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
        for (const IB of this._workerInfos)
          if (IB.idle) return this._execute(IB, BB), !0;
        return !1
      }
      _execute(BB, IB) {
        BB.idle = !1, BB.workerPromise.then((ZB => {
          IB(ZB, (() => {
            const IB = this._pendingActions.shift();
            IB ? this._execute(BB, IB) : BB.idle = !0
          }))
        }))
      }
    }
    class JB extends TB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JB.DefaultOptions;
        super([]), this._maxWorkers = BB, this._createWorkerAsync = IB, this._options = ZB
      }
      push(BB) {
        if (!this._executeOnIdleWorker(BB))
          if (this._workerInfos.length < this._maxWorkers) {
            const IB = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(IB), this._execute(IB, BB)
          } else this._pendingActions.push(BB)
      }
      _execute(BB, IB) {
        BB.timeoutId && (clearTimeout(BB.timeoutId), delete BB.timeoutId), super._execute(BB, ((ZB, TB) => {
          IB(ZB, (() => {
            TB(), BB.idle && (BB.timeoutId = setTimeout((() => {
              BB.workerPromise.then((BB => {
                BB.terminate()
              }));
              const IB = this._workerInfos.indexOf(BB); - 1 !== IB && this._workerInfos.splice(IB, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    JB.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  61321: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      AbstractThreeMfSerializer: () => xv,
      BVHExporter: () => iG,
      ContentTypeFileName: () => gv,
      DefaultXmlSerializerFormatOptions: () => lG,
      DefaultXmlSerializerNumberOptions: () => fG,
      EXT_lights_area: () => qJ,
      EXT_mesh_gpu_instancing: () => XT,
      EXT_texture_avif: () => GG,
      EXT_texture_webp: () => ZG,
      GLTF2Export: () => RT,
      GLTFData: () => cB,
      GetXmlFieldMeta: () => mG,
      GetXmlName: () => XG,
      IsQualifiedName: () => pG,
      KHR_draco_mesh_compression: () => KT,
      KHR_interactivity: () => cJ,
      KHR_lights_punctual: () => oJ,
      KHR_materials_anisotropy: () => dJ,
      KHR_materials_clearcoat: () => OJ,
      KHR_materials_coat: () => MJ,
      KHR_materials_diffuse_roughness: () => mo,
      KHR_materials_diffuse_transmission: () => XJ,
      KHR_materials_dispersion: () => fJ,
      KHR_materials_emissive_strength: () => bJ,
      KHR_materials_fuzz: () => no,
      KHR_materials_ior: () => KJ,
      KHR_materials_iridescence: () => Io,
      KHR_materials_openpbr: () => uo,
      KHR_materials_sheen: () => oo,
      KHR_materials_specular: () => No,
      KHR_materials_transmission: () => Uo,
      KHR_materials_unlit: () => wo,
      KHR_materials_volume: () => po,
      KHR_materials_volume_scatter: () => jo,
      KHR_texture_basisu: () => Vo,
      KHR_texture_transform: () => bo,
      Known3mfRelationshipTypes: () => qv,
      KnownI3mfContentType: () => nv,
      Matrix3d: () => Qv,
      MatrixFormatter: () => sv,
      ModelFileName: () => Fv,
      NumberFormatter: () => bG,
      OBJExport: () => GB,
      Object3dDirName: () => zv,
      OpenXmlContentTypesNamespace: () => kv,
      OpenXmlRelationshipsNamespace: () => cv,
      RegisterEXT_lights_area: () => UJ,
      RegisterEXT_mesh_gpu_instancing: () => eT,
      RegisterEXT_texture_avif: () => kG,
      RegisterEXT_texture_webp: () => JG,
      RegisterKHR_draco_mesh_compression: () => ST,
      RegisterKHR_interactivity: () => hJ,
      RegisterKHR_lights_punctual: () => vJ,
      RegisterKHR_materials_anisotropy: () => QJ,
      RegisterKHR_materials_clearcoat: () => iJ,
      RegisterKHR_materials_coat: () => PJ,
      RegisterKHR_materials_diffuse_roughness: () => Lo,
      RegisterKHR_materials_diffuse_transmission: () => eJ,
      RegisterKHR_materials_dispersion: () => AJ,
      RegisterKHR_materials_emissive_strength: () => EJ,
      RegisterKHR_materials_fuzz: () => zo,
      RegisterKHR_materials_ior: () => SJ,
      RegisterKHR_materials_iridescence: () => To,
      RegisterKHR_materials_openpbr: () => Ao,
      RegisterKHR_materials_sheen: () => vo,
      RegisterKHR_materials_specular: () => qo,
      RegisterKHR_materials_transmission: () => Co,
      RegisterKHR_materials_unlit: () => Yo,
      RegisterKHR_materials_volume: () => Ho,
      RegisterKHR_materials_volume_scatter: () => Ro,
      RegisterKHR_texture_basisu: () => BG,
      RegisterKHR_texture_transform: () => Eo,
      RelationshipDirName: () => hv,
      RelationshipFileName: () => Nv,
      ResolveFormatOptions: () => tG,
      ResolveNumberOptions: () => AG,
      STLExport: () => cG,
      ST_ObjectType: () => vv,
      ST_Unit: () => Gv,
      StringXmlWriter: () => Zv,
      ThreeDimModelNamespace: () => Jv,
      ThreeMf: () => Ev,
      ThreeMfBase: () => Xv,
      ThreeMfBaseMaterials: () => mv,
      ThreeMfBuild: () => Lv,
      ThreeMfComponent: () => rv,
      ThreeMfComponents: () => Rv,
      ThreeMfComponentsBuilder: () => fv,
      ThreeMfContentType: () => Uv,
      ThreeMfContentTypes: () => yv,
      ThreeMfDocument: () => Cv,
      ThreeMfDocumentBuilder: () => bv,
      ThreeMfItem: () => ev,
      ThreeMfMaterialBuilder: () => Av,
      ThreeMfMesh: () => av,
      ThreeMfMeshBuilder: () => lv,
      ThreeMfMeta: () => Ov,
      ThreeMfMetadataGroup: () => Yv,
      ThreeMfModel: () => wv,
      ThreeMfModelBuilder: () => tv,
      ThreeMfObject: () => pv,
      ThreeMfObjectBuilder: () => uv,
      ThreeMfRelationship: () => dv,
      ThreeMfRelationships: () => Wv,
      ThreeMfResources: () => iv,
      ThreeMfSerializer: () => Vv,
      ThreeMfSerializerGlobalConfiguration: () => Dv,
      ThreeMfTriangle: () => Pv,
      ThreeMfTriangles: () => jv,
      ThreeMfVertex: () => Mv,
      ThreeMfVertices: () => Hv,
      ToQualifiedString: () => uG,
      TokenType: () => Bv,
      TriangleSetsNamespace: () => ov,
      USDZExportAsync: () => OG,
      Utf8XmlWriterToBytes: () => Tv,
      XmlAttr: () => RG,
      XmlBuilder: () => Iv,
      XmlElem: () => rG,
      XmlIgnore: () => PG,
      XmlName: () => jG,
      XmlNameToParts: () => eG,
      XmlSerializer: () => VG,
      _ConvertToGLTFPBRMetallicRoughness: () => OZ,
      _SolveMetallic: () => wZ,
      __IGLTFExporterExtension: () => vB
    });
    var TB = ZB(37113),
      JB = ZB(61291),
      oB = ZB(40339);
    class GB {
      static OBJ(BB, IB, ZB, GB) {
        const vB = [];
        let kB = 1,
          cB = 1;
        IB && (ZB || (ZB = "mat"), vB.push("mtllib " + ZB + ".mtl"));
        for (let nB = 0; nB < BB.length; nB++) {
          const ZB = BB[nB],
            hB = ZB.name || `mesh${nB}}`;
          vB.push(`o ${hB}`);
          let zB = null;
          if (GB) {
            const BB = ZB.computeWorldMatrix(!0);
            zB = new TB.Matrix, BB.invertToRef(zB), ZB.bakeTransformIntoVertices(BB)
          }
          if (IB) {
            const BB = ZB.material;
            BB && vB.push("usemtl " + BB.id)
          }
          const FB = ZB.geometry;
          if (!FB) {
            JB.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const NB = FB.getVerticesData("position"),
            gB = FB.getVerticesData("normal"),
            qB = FB.getVerticesData("uv"),
            yB = FB.MTB();
          let UB = 0,
            WB = 0;
          if (!NB || !yB) {
            JB.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const dB = BB[0].JR().useRightHandedSystem ? 1 : -1;
          for (let BB = 0; BB < NB.length; BB += 3) vB.push("v " + NB[BB] * dB + " " + NB[BB + 1] + " " + NB[BB + 2]), UB++;
          if (null != gB)
            for (let BB = 0; BB < gB.length; BB += 3) vB.push("vn " + gB[BB] * dB + " " + gB[BB + 1] + " " + gB[BB + 2]);
          if (null != qB)
            for (let BB = 0; BB < qB.length; BB += 2) vB.push("vt " + qB[BB] + " " + qB[BB + 1]), WB++;
          const CB = ["", "", ""],
            QB = (ZB.material || ZB.JR().defaultMaterial)._getEffectiveOrientation(ZB),
            [sB, wB] = QB === oB.e.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let BB = 0; BB < yB.length; BB += 3) {
            const IB = [String(yB[BB] + kB), String(yB[BB + sB] + kB), String(yB[BB + wB] + kB)],
              ZB = [String(yB[BB] + cB), String(yB[BB + sB] + cB), String(yB[BB + wB] + cB)],
              TB = IB,
              JB = null != qB ? ZB : CB,
              oB = null != gB ? IB : CB;
            vB.push("f " + TB[0] + "/" + JB[0] + "/" + oB[0] + " " + TB[1] + "/" + JB[1] + "/" + oB[1] + " " + TB[2] + "/" + JB[2] + "/" + oB[2])
          }
          GB && zB && ZB.bakeTransformIntoVertices(zB), kB += UB, cB += WB
        }
        return vB.join("\n")
      }
      static MTL(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const ZB = [],
          TB = BB.material;
        ZB.push("newmtl " + IB), ZB.push("  Ns " + TB.specularPower.toFixed(4)), ZB.push("  Ni 1.5000"), ZB.push("  d " + TB.alpha.toFixed(4)), ZB.push("  Tr 0.0000"), ZB.push("  Tf 1.0000 1.0000 1.0000"), ZB.push("  illum 2"), ZB.push("  Ka " + TB.ambientColor.r.toFixed(4) + " " + TB.ambientColor.g.toFixed(4) + " " + TB.ambientColor.b.toFixed(4)), ZB.push("  Kd " + TB.diffuseColor.r.toFixed(4) + " " + TB.diffuseColor.g.toFixed(4) + " " + TB.diffuseColor.b.toFixed(4)), ZB.push("  Ks " + TB.specularColor.r.toFixed(4) + " " + TB.specularColor.g.toFixed(4) + " " + TB.specularColor.b.toFixed(4)), ZB.push("  Ke " + TB.emissiveColor.r.toFixed(4) + " " + TB.emissiveColor.g.toFixed(4) + " " + TB.emissiveColor.b.toFixed(4));
        TB.ambientTexture && ZB.push("  map_Ka " + TB.ambientTexture.name), TB.diffuseTexture && ZB.push("  map_Kd " + TB.diffuseTexture.name), TB.specularTexture && ZB.push("  map_Ks " + TB.specularTexture.name), TB.bumpTexture && ZB.push("  map_bump -imfchan z " + TB.bumpTexture.name), TB.opacityTexture && ZB.push("  map_d " + TB.opacityTexture.name);
        return ZB.join("\n")
      }
    }
    var vB = 0,
      kB = ZB(41575);
    class cB {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const BB in this.files) {
          const IB = this.files[BB],
            ZB = new Blob([IB], {
              type: (0, kB.b)(BB)
            });
          JB.Tools.Download(ZB, BB)
        }
      }
    }
    var nB = ZB(41192),
      hB = ZB(41140),
      zB = ZB(41647),
      FB = ZB(41144),
      NB = ZB(39872),
      gB = ZB(37147),
      qB = ZB(37304),
      yB = ZB(37158);
    const UB = yB.HighestCommonFactor,
      WB = {
        ...yB,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: UB
      };
    var dB = ZB(41842),
      CB = ZB(41170),
      QB = ZB(41610),
      sB = ZB(41617),
      wB = ZB(41862);
    (0, wB.RegisterDumpTools)();
    var OB = ZB(40061),
      YB = ZB(40065),
      iB = ZB(38718),
      pB = ZB(40163),
      aB = ZB(40521),
      HB = ZB(41833);
    let MB = 0;
    const jB = (BB, IB, ZB, TB) => {
        if (!BB[ZB]) {
          const JB = BB.useDelayedTextureLoading;
          BB.useDelayedTextureLoading = !1;
          const oB = BB._blockEntityCollection;
          BB._blockEntityCollection = !1;
          const GB = aB.e.CreateFromBase64String(IB, TB + MB++, BB, !0, !1, aB.e.BILINEAR_SAMPLINGMODE);
          BB._blockEntityCollection = oB;
          const vB = BB.PN().getLoadedTexturesCache(),
            kB = vB.indexOf(GB.getInternalTexture()); - 1 !== kB && vB.splice(kB, 1), GB.isRGBD = !0, GB.wrapU = aB.e.CLAMP_ADDRESSMODE, GB.wrapV = aB.e.CLAMP_ADDRESSMODE, BB[ZB] = GB, BB.useDelayedTextureLoading = JB, HB.d.ExpandRGBDTexture(GB);
          const cB = BB.PN().jN.add((() => {
            GB.isRGBD = !0;
            const IB = BB.onBeforeRenderObservable.add((() => {
              GB.isReady() && (BB.onBeforeRenderObservable.remove(IB), HB.d.ExpandRGBDTexture(GB))
            }))
          }));
          BB.oR.add((() => {
            BB.PN().jN.remove(cB)
          }))
        }
        return BB[ZB]
      },
      PB = BB => jB(BB, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      RB = BB => jB(BB, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      rB = BB => jB(BB, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var mB = ZB(40148),
      XB = ZB(37120),
      LB = ZB(40188),
      eB = ZB(40335),
      uB = ZB(40408);
    class fB extends eB.e {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let lB = (() => {
      var BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB;
      let nB, hB, zB, FB, NB, gB, qB, yB, UB, WB = uB.e,
        dB = [],
        CB = [],
        QB = [],
        sB = [],
        wB = [],
        iB = [],
        pB = [],
        aB = [],
        HB = [],
        MB = [],
        jB = [],
        PB = [],
        RB = [],
        rB = [],
        mB = [],
        XB = [],
        LB = [],
        eB = [];
      return BB = class extends WB {
        get useEnergyConservation() {
          return (0, OB.b)(this, IB, "f")
        }
        set useEnergyConservation(BB) {
          (0, OB.f)(this, IB, BB, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, OB.b)(this, ZB, "f")
        }
        set useSmithVisibilityHeightCorrelated(BB) {
          (0, OB.f)(this, ZB, BB, "f")
        }
        get useSphericalHarmonics() {
          return (0, OB.b)(this, TB, "f")
        }
        set useSphericalHarmonics(BB) {
          (0, OB.f)(this, TB, BB, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, OB.b)(this, JB, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(BB) {
          (0, OB.f)(this, JB, BB, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, OB.b)(this, oB, "f")
        }
        set mixIblRadianceWithIrradiance(BB) {
          (0, OB.f)(this, oB, BB, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, OB.b)(this, GB, "f")
        }
        set useLegacySpecularEnergyConservation(BB) {
          (0, OB.f)(this, GB, BB, "f")
        }
        get baseDiffuseModel() {
          return (0, OB.b)(this, vB, "f")
        }
        set baseDiffuseModel(BB) {
          (0, OB.f)(this, vB, BB, "f")
        }
        get dielectricSpecularModel() {
          return (0, OB.b)(this, kB, "f")
        }
        set dielectricSpecularModel(BB) {
          (0, OB.f)(this, kB, BB, "f")
        }
        get conductorSpecularModel() {
          return (0, OB.b)(this, cB, "f")
        }
        set conductorSpecularModel(BB) {
          (0, OB.f)(this, cB, BB, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(nB) {
          let hB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(nB, "PBRBRDF", 90, new fB, hB), this._useEnergyConservation = BB.DEFAULT_USE_ENERGY_CONSERVATION, IB.set(this, (0, OB.l)(this, dB, BB.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, OB.l)(this, CB), BB.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), ZB.set(this, (0, OB.l)(this, QB, BB.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, OB.l)(this, sB), BB.DEFAULT_USE_SPHERICAL_HARMONICS), TB.set(this, (0, OB.l)(this, wB, BB.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, OB.l)(this, iB), BB.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), JB.set(this, (0, OB.l)(this, pB, BB.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, OB.l)(this, aB), BB.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), oB.set(this, (0, OB.l)(this, HB, BB.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, OB.l)(this, MB), BB.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), GB.set(this, (0, OB.l)(this, jB, BB.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, OB.l)(this, PB), BB.DEFAULT_DIFFUSE_MODEL), vB.set(this, (0, OB.l)(this, RB, BB.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, OB.l)(this, rB), BB.DEFAULT_DIELECTRIC_SPECULAR_MODEL), kB.set(this, (0, OB.l)(this, mB, BB.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, OB.l)(this, XB), BB.DEFAULT_CONDUCTOR_SPECULAR_MODEL), cB.set(this, (0, OB.l)(this, LB, BB.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, OB.l)(this, eB), this._internalMarkAllSubMeshesAsMiscDirty = nB._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(BB) {
          BB.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, BB.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, BB.SPHERICAL_HARMONICS = this._useSphericalHarmonics, BB.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, BB.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, BB.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, BB.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, BB.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, BB.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, IB = new WeakMap, ZB = new WeakMap, TB = new WeakMap, JB = new WeakMap, oB = new WeakMap, GB = new WeakMap, vB = new WeakMap, kB = new WeakMap, cB = new WeakMap, (() => {
        const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(WB[Symbol.metadata] ?? null) : void 0;
        nB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsMiscDirty")], hB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsMiscDirty")], zB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsMiscDirty")], FB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsMiscDirty")], NB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsMiscDirty")], gB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsMiscDirty")], qB = [(0, YB.C)("baseDiffuseModel"), (0, YB.e)("_markAllSubMeshesAsMiscDirty")], yB = [(0, YB.C)("dielectricSpecularModel"), (0, YB.e)("_markAllSubMeshesAsMiscDirty")], UB = [(0, YB.C)("conductorSpecularModel"), (0, YB.e)("_markAllSubMeshesAsMiscDirty")], (0, OB.j)(BB, null, nB, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: BB => "useEnergyConservation" in BB,
            get: BB => BB.useEnergyConservation,
            set: (BB, IB) => {
              BB.useEnergyConservation = IB
            }
          },
          metadata: IB
        }, dB, CB), (0, OB.j)(BB, null, hB, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSmithVisibilityHeightCorrelated" in BB,
            get: BB => BB.useSmithVisibilityHeightCorrelated,
            set: (BB, IB) => {
              BB.useSmithVisibilityHeightCorrelated = IB
            }
          },
          metadata: IB
        }, QB, sB), (0, OB.j)(BB, null, zB, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSphericalHarmonics" in BB,
            get: BB => BB.useSphericalHarmonics,
            set: (BB, IB) => {
              BB.useSphericalHarmonics = IB
            }
          },
          metadata: IB
        }, wB, iB), (0, OB.j)(BB, null, FB, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSpecularGlossinessInputEnergyConservation" in BB,
            get: BB => BB.useSpecularGlossinessInputEnergyConservation,
            set: (BB, IB) => {
              BB.useSpecularGlossinessInputEnergyConservation = IB
            }
          },
          metadata: IB
        }, pB, aB), (0, OB.j)(BB, null, NB, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: BB => "mixIblRadianceWithIrradiance" in BB,
            get: BB => BB.mixIblRadianceWithIrradiance,
            set: (BB, IB) => {
              BB.mixIblRadianceWithIrradiance = IB
            }
          },
          metadata: IB
        }, HB, MB), (0, OB.j)(BB, null, gB, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: BB => "useLegacySpecularEnergyConservation" in BB,
            get: BB => BB.useLegacySpecularEnergyConservation,
            set: (BB, IB) => {
              BB.useLegacySpecularEnergyConservation = IB
            }
          },
          metadata: IB
        }, jB, PB), (0, OB.j)(BB, null, qB, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseDiffuseModel" in BB,
            get: BB => BB.baseDiffuseModel,
            set: (BB, IB) => {
              BB.baseDiffuseModel = IB
            }
          },
          metadata: IB
        }, RB, rB), (0, OB.j)(BB, null, yB, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: BB => "dielectricSpecularModel" in BB,
            get: BB => BB.dielectricSpecularModel,
            set: (BB, IB) => {
              BB.dielectricSpecularModel = IB
            }
          },
          metadata: IB
        }, mB, XB), (0, OB.j)(BB, null, UB, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: BB => "conductorSpecularModel" in BB,
            get: BB => BB.conductorSpecularModel,
            set: (BB, IB) => {
              BB.conductorSpecularModel = IB
            }
          },
          metadata: IB
        }, LB, eB), IB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IB
        })
      })(), BB.DEFAULT_USE_ENERGY_CONSERVATION = !0, BB.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, BB.DEFAULT_USE_SPHERICAL_HARMONICS = !0, BB.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, BB.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, BB.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, BB.DEFAULT_DIFFUSE_MODEL = 0, BB.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, BB.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, BB
    })();
    var AB = ZB(40330),
      tB = ZB(37311),
      bB = ZB(40333),
      xB = ZB(40166),
      EB = ZB(40390),
      DB = ZB(40383),
      KB = ZB(40395),
      VB = ZB(40371);
    class SB extends eB.e {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let BI = (() => {
      var BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB;
      let nB, hB, zB, FB, NB, gB, qB, yB, UB, WB, dB, CB, QB, sB, wB = uB.e,
        iB = [],
        pB = [],
        aB = [],
        HB = [],
        MB = [],
        jB = [],
        PB = [],
        RB = [],
        rB = [],
        mB = [],
        XB = [],
        LB = [],
        eB = [],
        fB = [],
        lB = [],
        AB = [],
        bB = [],
        xB = [],
        EB = [],
        KB = [],
        BI = [],
        II = [],
        ZI = [],
        TI = [],
        JI = [],
        oI = [],
        GI = [],
        vI = [];
      return BB = class extends wB {
        get isEnabled() {
          return (0, OB.b)(this, IB, "f")
        }
        set isEnabled(BB) {
          (0, OB.f)(this, IB, BB, "f")
        }
        get indexOfRefraction() {
          return (0, OB.b)(this, ZB, "f")
        }
        set indexOfRefraction(BB) {
          (0, OB.f)(this, ZB, BB, "f")
        }
        get texture() {
          return (0, OB.b)(this, TB, "f")
        }
        set texture(BB) {
          (0, OB.f)(this, TB, BB, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, OB.b)(this, JB, "f")
        }
        set useRoughnessFromMainTexture(BB) {
          (0, OB.f)(this, JB, BB, "f")
        }
        get textureRoughness() {
          return (0, OB.b)(this, oB, "f")
        }
        set textureRoughness(BB) {
          (0, OB.f)(this, oB, BB, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, OB.b)(this, GB, "f")
        }
        set remapF0OnInterfaceChange(BB) {
          (0, OB.f)(this, GB, BB, "f")
        }
        get bumpTexture() {
          return (0, OB.b)(this, vB, "f")
        }
        set bumpTexture(BB) {
          (0, OB.f)(this, vB, BB, "f")
        }
        get isTintEnabled() {
          return (0, OB.b)(this, kB, "f")
        }
        set isTintEnabled(BB) {
          (0, OB.f)(this, kB, BB, "f")
        }
        get tintTexture() {
          return (0, OB.b)(this, cB, "f")
        }
        set tintTexture(BB) {
          (0, OB.f)(this, cB, BB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(nB) {
          let hB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(nB, "PBRClearCoat", 100, new SB, hB), this._isEnabled = !1, IB.set(this, (0, OB.l)(this, iB, !1)), this.intensity = ((0, OB.l)(this, pB), (0, OB.l)(this, aB, 1)), this.roughness = ((0, OB.l)(this, HB), (0, OB.l)(this, MB, 0)), this._indexOfRefraction = ((0, OB.l)(this, jB), BB._DefaultIndexOfRefraction), ZB.set(this, (0, OB.l)(this, PB, BB._DefaultIndexOfRefraction)), this._texture = ((0, OB.l)(this, RB), null), TB.set(this, (0, OB.l)(this, rB, null)), this._useRoughnessFromMainTexture = ((0, OB.l)(this, mB), !0), JB.set(this, (0, OB.l)(this, XB, !0)), this._textureRoughness = ((0, OB.l)(this, LB), null), oB.set(this, (0, OB.l)(this, eB, null)), this._remapF0OnInterfaceChange = ((0, OB.l)(this, fB), !0), GB.set(this, (0, OB.l)(this, lB, !0)), this._bumpTexture = ((0, OB.l)(this, AB), null), vB.set(this, (0, OB.l)(this, bB, null)), this._isTintEnabled = ((0, OB.l)(this, xB), !1), kB.set(this, (0, OB.l)(this, EB, !1)), this.tintColor = ((0, OB.l)(this, KB), (0, OB.l)(this, BI, tB.c.White())), this.tintColorAtDistance = ((0, OB.l)(this, II), (0, OB.l)(this, ZI, 1)), this.tintThickness = ((0, OB.l)(this, TI), (0, OB.l)(this, JI, 1)), this._tintTexture = ((0, OB.l)(this, oI), null), cB.set(this, (0, OB.l)(this, GI, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, OB.l)(this, vI), this._internalMarkAllSubMeshesAsTexturesDirty = nB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(BB, IB, ZB) {
          if (!this._isEnabled) return !0;
          const TB = this._material._disableBumpMap;
          if (BB._areTexturesDirty && IB.texturesEnabled) {
            if (this._texture && DB.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && DB.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (ZB.getCaps().standardDerivatives && this._bumpTexture && DB.e.ClearCoatBumpTextureEnabled && !TB && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && DB.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(IB, ZB) {
          this._isEnabled ? (IB.CLEARCOAT = !0, IB.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, IB.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, IB._areTexturesDirty && ZB.texturesEnabled && (this._texture && DB.e.ClearCoatTextureEnabled ? (0, VB.ab)(this._texture, IB, "CLEARCOAT_TEXTURE") : IB.CLEARCOAT_TEXTURE = !1, this._textureRoughness && DB.e.ClearCoatTextureEnabled ? (0, VB.ab)(this._textureRoughness, IB, "CLEARCOAT_TEXTURE_ROUGHNESS") : IB.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && DB.e.ClearCoatBumpTextureEnabled ? (0, VB.ab)(this._bumpTexture, IB, "CLEARCOAT_BUMP") : IB.CLEARCOAT_BUMP = !1, IB.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === BB._DefaultIndexOfRefraction, this._isTintEnabled ? (IB.CLEARCOAT_TINT = !0, this._tintTexture && DB.e.ClearCoatTintTextureEnabled ? ((0, VB.ab)(this._tintTexture, IB, "CLEARCOAT_TINT_TEXTURE"), IB.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : IB.CLEARCOAT_TINT_TEXTURE = !1) : (IB.CLEARCOAT_TINT = !1, IB.CLEARCOAT_TINT_TEXTURE = !1))) : (IB.CLEARCOAT = !1, IB.CLEARCOAT_TEXTURE = !1, IB.CLEARCOAT_TEXTURE_ROUGHNESS = !1, IB.CLEARCOAT_BUMP = !1, IB.CLEARCOAT_TINT = !1, IB.CLEARCOAT_TINT_TEXTURE = !1, IB.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, IB.CLEARCOAT_DEFAULTIOR = !1, IB.CLEARCOAT_TEXTUREDIRECTUV = 0, IB.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, IB.CLEARCOAT_BUMPDIRECTUV = 0, IB.CLEARCOAT_REMAP_F0 = !1, IB.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, IB.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(BB, IB, ZB, TB) {
          if (!this._isEnabled) return;
          const JB = TB.materialDefines,
            oB = this._material.isFrozen,
            GB = this._material._disableBumpMap,
            vB = this._material._invertNormalMapX,
            kB = this._material._invertNormalMapY;
          if (!BB.useUbo || !oB || !BB.isSync) {
            (this._texture || this._textureRoughness) && DB.e.ClearCoatTextureEnabled && (BB.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, VB.y)(this._texture, BB, "clearCoat"), this._textureRoughness && !JB.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, VB.y)(this._textureRoughness, BB, "clearCoatRoughness")), this._bumpTexture && ZB.getCaps().standardDerivatives && DB.e.ClearCoatTextureEnabled && !GB && (BB.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, VB.y)(this._bumpTexture, BB, "clearCoatBump"), IB._mirroredCameraPosition ? BB.updateFloat2("vClearCoatTangentSpaceParams", vB ? 1 : -1, kB ? 1 : -1) : BB.updateFloat2("vClearCoatTangentSpaceParams", vB ? -1 : 1, kB ? -1 : 1)), this._tintTexture && DB.e.ClearCoatTintTextureEnabled && (BB.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, VB.y)(this._tintTexture, BB, "clearCoatTint")), BB.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const TB = 1 - this._indexOfRefraction,
              oB = 1 + this._indexOfRefraction,
              cB = Math.pow(-TB / oB, 2),
              nB = 1 / this._indexOfRefraction;
            BB.updateFloat4("vClearCoatRefractionParams", cB, nB, TB, oB), this._isTintEnabled && (BB.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), BB.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          IB.texturesEnabled && (this._texture && DB.e.ClearCoatTextureEnabled && BB.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !JB.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && DB.e.ClearCoatTextureEnabled && BB.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && ZB.getCaps().standardDerivatives && DB.e.ClearCoatBumpTextureEnabled && !GB && BB.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && DB.e.ClearCoatTintTextureEnabled && BB.setTexture("clearCoatTintSampler", this._tintTexture))
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
        addFallbacks(BB, IB, ZB) {
          return BB.CLEARCOAT_BUMP && IB.addFallback(ZB++, "CLEARCOAT_BUMP"), BB.CLEARCOAT_TINT && IB.addFallback(ZB++, "CLEARCOAT_TINT"), BB.CLEARCOAT && IB.addFallback(ZB++, "CLEARCOAT"), ZB
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
      }, IB = new WeakMap, ZB = new WeakMap, TB = new WeakMap, JB = new WeakMap, oB = new WeakMap, GB = new WeakMap, vB = new WeakMap, kB = new WeakMap, cB = new WeakMap, (() => {
        const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(wB[Symbol.metadata] ?? null) : void 0;
        nB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], hB = [(0, YB.C)()], zB = [(0, YB.C)()], FB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], NB = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], gB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], qB = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], yB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], UB = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], WB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], dB = [(0, YB.l)()], CB = [(0, YB.C)()], QB = [(0, YB.C)()], sB = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], (0, OB.j)(BB, null, nB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, IB) => {
              BB.isEnabled = IB
            }
          },
          metadata: IB
        }, iB, pB), (0, OB.j)(BB, null, FB, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "indexOfRefraction" in BB,
            get: BB => BB.indexOfRefraction,
            set: (BB, IB) => {
              BB.indexOfRefraction = IB
            }
          },
          metadata: IB
        }, PB, RB), (0, OB.j)(BB, null, NB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, IB) => {
              BB.texture = IB
            }
          },
          metadata: IB
        }, rB, mB), (0, OB.j)(BB, null, gB, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRoughnessFromMainTexture" in BB,
            get: BB => BB.useRoughnessFromMainTexture,
            set: (BB, IB) => {
              BB.useRoughnessFromMainTexture = IB
            }
          },
          metadata: IB
        }, XB, LB), (0, OB.j)(BB, null, qB, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "textureRoughness" in BB,
            get: BB => BB.textureRoughness,
            set: (BB, IB) => {
              BB.textureRoughness = IB
            }
          },
          metadata: IB
        }, eB, fB), (0, OB.j)(BB, null, yB, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: BB => "remapF0OnInterfaceChange" in BB,
            get: BB => BB.remapF0OnInterfaceChange,
            set: (BB, IB) => {
              BB.remapF0OnInterfaceChange = IB
            }
          },
          metadata: IB
        }, lB, AB), (0, OB.j)(BB, null, UB, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "bumpTexture" in BB,
            get: BB => BB.bumpTexture,
            set: (BB, IB) => {
              BB.bumpTexture = IB
            }
          },
          metadata: IB
        }, bB, xB), (0, OB.j)(BB, null, WB, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isTintEnabled" in BB,
            get: BB => BB.isTintEnabled,
            set: (BB, IB) => {
              BB.isTintEnabled = IB
            }
          },
          metadata: IB
        }, EB, KB), (0, OB.j)(BB, null, sB, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintTexture" in BB,
            get: BB => BB.tintTexture,
            set: (BB, IB) => {
              BB.tintTexture = IB
            }
          },
          metadata: IB
        }, GI, vI), (0, OB.j)(null, null, hB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, IB) => {
              BB.intensity = IB
            }
          },
          metadata: IB
        }, aB, HB), (0, OB.j)(null, null, zB, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "roughness" in BB,
            get: BB => BB.roughness,
            set: (BB, IB) => {
              BB.roughness = IB
            }
          },
          metadata: IB
        }, MB, jB), (0, OB.j)(null, null, dB, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintColor" in BB,
            get: BB => BB.tintColor,
            set: (BB, IB) => {
              BB.tintColor = IB
            }
          },
          metadata: IB
        }, BI, II), (0, OB.j)(null, null, CB, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintColorAtDistance" in BB,
            get: BB => BB.tintColorAtDistance,
            set: (BB, IB) => {
              BB.tintColorAtDistance = IB
            }
          },
          metadata: IB
        }, ZI, TI), (0, OB.j)(null, null, QB, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintThickness" in BB,
            get: BB => BB.tintThickness,
            set: (BB, IB) => {
              BB.tintThickness = IB
            }
          },
          metadata: IB
        }, JI, oI), IB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IB
        })
      })(), BB._DefaultIndexOfRefraction = 1.5, BB
    })();
    class II extends eB.e {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let ZI = (() => {
      var BB, IB, ZB, TB;
      let JB, oB, GB, vB, kB, cB, nB, hB = uB.e,
        zB = [],
        FB = [],
        NB = [],
        gB = [],
        qB = [],
        yB = [],
        UB = [],
        WB = [],
        dB = [],
        CB = [],
        QB = [],
        sB = [],
        wB = [],
        iB = [];
      return BB = class extends hB {
        get isEnabled() {
          return (0, OB.b)(this, IB, "f")
        }
        set isEnabled(BB) {
          (0, OB.f)(this, IB, BB, "f")
        }
        get texture() {
          return (0, OB.b)(this, ZB, "f")
        }
        set texture(BB) {
          (0, OB.f)(this, ZB, BB, "f")
        }
        get thicknessTexture() {
          return (0, OB.b)(this, TB, "f")
        }
        set thicknessTexture(BB) {
          (0, OB.f)(this, TB, BB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(JB) {
          let oB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(JB, "PBRIridescence", 110, new II, oB), this._isEnabled = !1, IB.set(this, (0, OB.l)(this, zB, !1)), this.intensity = ((0, OB.l)(this, FB), (0, OB.l)(this, NB, 1)), this.minimumThickness = ((0, OB.l)(this, gB), (0, OB.l)(this, qB, BB._DefaultMinimumThickness)), this.maximumThickness = ((0, OB.l)(this, yB), (0, OB.l)(this, UB, BB._DefaultMaximumThickness)), this.indexOfRefraction = ((0, OB.l)(this, WB), (0, OB.l)(this, dB, BB._DefaultIndexOfRefraction)), this._texture = ((0, OB.l)(this, CB), null), ZB.set(this, (0, OB.l)(this, QB, null)), this._thicknessTexture = ((0, OB.l)(this, sB), null), TB.set(this, (0, OB.l)(this, wB, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, OB.l)(this, iB), this._internalMarkAllSubMeshesAsTexturesDirty = JB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(BB, IB) {
          if (!this._isEnabled) return !0;
          if (BB._areTexturesDirty && IB.texturesEnabled) {
            if (this._texture && DB.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && DB.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(BB, IB) {
          this._isEnabled ? (BB.IRIDESCENCE = !0, BB._areTexturesDirty && IB.texturesEnabled && (this._texture && DB.e.IridescenceTextureEnabled ? (0, VB.ab)(this._texture, BB, "IRIDESCENCE_TEXTURE") : BB.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && DB.e.IridescenceTextureEnabled ? (0, VB.ab)(this._thicknessTexture, BB, "IRIDESCENCE_THICKNESS_TEXTURE") : BB.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (BB.IRIDESCENCE = !1, BB.IRIDESCENCE_TEXTURE = !1, BB.IRIDESCENCE_THICKNESS_TEXTURE = !1, BB.IRIDESCENCE_TEXTUREDIRECTUV = 0, BB.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(BB, IB) {
          if (!this._isEnabled) return;
          const ZB = this._material.isFrozen;
          BB.useUbo && ZB && BB.isSync || ((this._texture || this._thicknessTexture) && DB.e.IridescenceTextureEnabled && (BB.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, VB.y)(this._texture, BB, "iridescence"), this._thicknessTexture && (0, VB.y)(this._thicknessTexture, BB, "iridescenceThickness")), BB.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), IB.texturesEnabled && (this._texture && DB.e.IridescenceTextureEnabled && BB.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && DB.e.IridescenceTextureEnabled && BB.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
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
        addFallbacks(BB, IB, ZB) {
          return BB.IRIDESCENCE && IB.addFallback(ZB++, "IRIDESCENCE"), ZB
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
      }, IB = new WeakMap, ZB = new WeakMap, TB = new WeakMap, (() => {
        const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(hB[Symbol.metadata] ?? null) : void 0;
        JB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], oB = [(0, YB.C)()], GB = [(0, YB.C)()], vB = [(0, YB.C)()], kB = [(0, YB.C)()], cB = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], nB = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], (0, OB.j)(BB, null, JB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, IB) => {
              BB.isEnabled = IB
            }
          },
          metadata: IB
        }, zB, FB), (0, OB.j)(BB, null, cB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, IB) => {
              BB.texture = IB
            }
          },
          metadata: IB
        }, QB, sB), (0, OB.j)(BB, null, nB, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "thicknessTexture" in BB,
            get: BB => BB.thicknessTexture,
            set: (BB, IB) => {
              BB.thicknessTexture = IB
            }
          },
          metadata: IB
        }, wB, iB), (0, OB.j)(null, null, oB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, IB) => {
              BB.intensity = IB
            }
          },
          metadata: IB
        }, NB, gB), (0, OB.j)(null, null, GB, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "minimumThickness" in BB,
            get: BB => BB.minimumThickness,
            set: (BB, IB) => {
              BB.minimumThickness = IB
            }
          },
          metadata: IB
        }, qB, yB), (0, OB.j)(null, null, vB, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "maximumThickness" in BB,
            get: BB => BB.maximumThickness,
            set: (BB, IB) => {
              BB.maximumThickness = IB
            }
          },
          metadata: IB
        }, UB, WB), (0, OB.j)(null, null, kB, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "indexOfRefraction" in BB,
            get: BB => BB.indexOfRefraction,
            set: (BB, IB) => {
              BB.indexOfRefraction = IB
            }
          },
          metadata: IB
        }, dB, CB), IB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IB
        })
      })(), BB._DefaultMinimumThickness = 100, BB._DefaultMaximumThickness = 400, BB._DefaultIndexOfRefraction = 1.3, BB
    })();
    class TI extends eB.e {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let JI = (() => {
      var BB, IB, ZB, TB;
      let JB, oB, GB, vB, kB, cB = uB.e,
        nB = [],
        hB = [],
        zB = [],
        FB = [],
        NB = [],
        gB = [],
        qB = [],
        yB = [],
        UB = [],
        WB = [];
      return BB = class extends cB {
        get isEnabled() {
          return (0, OB.b)(this, IB, "f")
        }
        set isEnabled(BB) {
          (0, OB.f)(this, IB, BB, "f")
        }
        set angle(BB) {
          this.direction.x = Math.cos(BB), this.direction.y = Math.sin(BB)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, OB.b)(this, ZB, "f")
        }
        set texture(BB) {
          (0, OB.f)(this, ZB, BB, "f")
        }
        get legacy() {
          return (0, OB.b)(this, TB, "f")
        }
        set legacy(BB) {
          (0, OB.f)(this, TB, BB, "f")
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
          let JB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(BB, "PBRAnisotropic", 110, new TI, JB), this._isEnabled = !1, IB.set(this, (0, OB.l)(this, nB, !1)), this.intensity = ((0, OB.l)(this, hB), (0, OB.l)(this, zB, 1)), this.direction = ((0, OB.l)(this, FB), (0, OB.l)(this, NB, new XB.p(1, 0))), this._texture = ((0, OB.l)(this, gB), null), ZB.set(this, (0, OB.l)(this, qB, null)), this._legacy = ((0, OB.l)(this, yB), !1), TB.set(this, (0, OB.l)(this, UB, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, OB.l)(this, WB), this._internalMarkAllSubMeshesAsTexturesDirty = BB._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = BB._dirtyCallbacks[16]
        }
        isReadyForSubMesh(BB, IB) {
          return !this._isEnabled || !(BB._areTexturesDirty && IB.texturesEnabled && this._texture && DB.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(BB, IB, ZB) {
          this._isEnabled ? (BB.ANISOTROPIC = this._isEnabled, this._isEnabled && !ZB.isVerticesDataPresent(LB.i.TangentKind) && (BB._needUVs = !0, BB.MAINUV1 = !0), BB._areTexturesDirty && IB.texturesEnabled && (this._texture && DB.e.AnisotropicTextureEnabled ? (0, VB.ab)(this._texture, BB, "ANISOTROPIC_TEXTURE") : BB.ANISOTROPIC_TEXTURE = !1), BB._areMiscDirty && (BB.ANISOTROPIC_LEGACY = this._legacy)) : (BB.ANISOTROPIC = !1, BB.ANISOTROPIC_TEXTURE = !1, BB.ANISOTROPIC_TEXTUREDIRECTUV = 0, BB.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(BB, IB) {
          if (!this._isEnabled) return;
          const ZB = this._material.isFrozen;
          BB.useUbo && ZB && BB.isSync || (this._texture && DB.e.AnisotropicTextureEnabled && (BB.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, VB.y)(this._texture, BB, "anisotropy")), BB.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), IB.texturesEnabled && this._texture && DB.e.AnisotropicTextureEnabled && BB.setTexture("anisotropySampler", this._texture)
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
        addFallbacks(BB, IB, ZB) {
          return BB.ANISOTROPIC && IB.addFallback(ZB++, "ANISOTROPIC"), ZB
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
        parse(BB, IB, ZB) {
          super.parse(BB, IB, ZB), void 0 === BB.legacy && (this.legacy = !0)
        }
      }, IB = new WeakMap, ZB = new WeakMap, TB = new WeakMap, (() => {
        const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(cB[Symbol.metadata] ?? null) : void 0;
        JB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], oB = [(0, YB.C)()], GB = [(0, YB.x)()], vB = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], kB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsMiscDirty")], (0, OB.j)(BB, null, JB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, IB) => {
              BB.isEnabled = IB
            }
          },
          metadata: IB
        }, nB, hB), (0, OB.j)(BB, null, vB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, IB) => {
              BB.texture = IB
            }
          },
          metadata: IB
        }, qB, yB), (0, OB.j)(BB, null, kB, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: BB => "legacy" in BB,
            get: BB => BB.legacy,
            set: (BB, IB) => {
              BB.legacy = IB
            }
          },
          metadata: IB
        }, UB, WB), (0, OB.j)(null, null, oB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, IB) => {
              BB.intensity = IB
            }
          },
          metadata: IB
        }, zB, FB), (0, OB.j)(null, null, GB, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: BB => "direction" in BB,
            get: BB => BB.direction,
            set: (BB, IB) => {
              BB.direction = IB
            }
          },
          metadata: IB
        }, NB, gB), IB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IB
        })
      })(), BB
    })();
    class oI extends eB.e {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let GI = (() => {
      var BB, IB, ZB, TB, JB, oB, GB, vB;
      let kB, cB, nB, hB, zB, FB, NB, gB, qB, yB = uB.e,
        UB = [],
        WB = [],
        dB = [],
        CB = [],
        QB = [],
        sB = [],
        wB = [],
        iB = [],
        pB = [],
        aB = [],
        HB = [],
        MB = [],
        jB = [],
        PB = [],
        RB = [],
        rB = [],
        mB = [],
        XB = [];
      return BB = class extends yB {
        get isEnabled() {
          return (0, OB.b)(this, IB, "f")
        }
        set isEnabled(BB) {
          (0, OB.f)(this, IB, BB, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, OB.b)(this, ZB, "f")
        }
        set linkSheenWithAlbedo(BB) {
          (0, OB.f)(this, ZB, BB, "f")
        }
        get texture() {
          return (0, OB.b)(this, TB, "f")
        }
        set texture(BB) {
          (0, OB.f)(this, TB, BB, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, OB.b)(this, JB, "f")
        }
        set useRoughnessFromMainTexture(BB) {
          (0, OB.f)(this, JB, BB, "f")
        }
        get roughness() {
          return (0, OB.b)(this, oB, "f")
        }
        set roughness(BB) {
          (0, OB.f)(this, oB, BB, "f")
        }
        get textureRoughness() {
          return (0, OB.b)(this, GB, "f")
        }
        set textureRoughness(BB) {
          (0, OB.f)(this, GB, BB, "f")
        }
        get albedoScaling() {
          return (0, OB.b)(this, vB, "f")
        }
        set albedoScaling(BB) {
          (0, OB.f)(this, vB, BB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(BB) {
          let kB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(BB, "Sheen", 120, new oI, kB), this._isEnabled = !1, IB.set(this, (0, OB.l)(this, UB, !1)), this._linkSheenWithAlbedo = ((0, OB.l)(this, WB), !1), ZB.set(this, (0, OB.l)(this, dB, !1)), this.intensity = ((0, OB.l)(this, CB), (0, OB.l)(this, QB, 1)), this.color = ((0, OB.l)(this, sB), (0, OB.l)(this, wB, tB.c.White())), this._texture = ((0, OB.l)(this, iB), null), TB.set(this, (0, OB.l)(this, pB, null)), this._useRoughnessFromMainTexture = ((0, OB.l)(this, aB), !0), JB.set(this, (0, OB.l)(this, HB, !0)), this._roughness = ((0, OB.l)(this, MB), null), oB.set(this, (0, OB.l)(this, jB, null)), this._textureRoughness = ((0, OB.l)(this, PB), null), GB.set(this, (0, OB.l)(this, RB, null)), this._albedoScaling = ((0, OB.l)(this, rB), !1), vB.set(this, (0, OB.l)(this, mB, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, OB.l)(this, XB), this._internalMarkAllSubMeshesAsTexturesDirty = BB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(BB, IB) {
          if (!this._isEnabled) return !0;
          if (BB._areTexturesDirty && IB.texturesEnabled) {
            if (this._texture && DB.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && DB.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(BB, IB) {
          this._isEnabled ? (BB.SHEEN = !0, BB.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, BB.SHEEN_ROUGHNESS = null !== this._roughness, BB.SHEEN_ALBEDOSCALING = this._albedoScaling, BB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, BB._areTexturesDirty && IB.texturesEnabled && (this._texture && DB.e.SheenTextureEnabled ? ((0, VB.ab)(this._texture, BB, "SHEEN_TEXTURE"), BB.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : BB.SHEEN_TEXTURE = !1, this._textureRoughness && DB.e.SheenTextureEnabled ? (0, VB.ab)(this._textureRoughness, BB, "SHEEN_TEXTURE_ROUGHNESS") : BB.SHEEN_TEXTURE_ROUGHNESS = !1)) : (BB.SHEEN = !1, BB.SHEEN_TEXTURE = !1, BB.SHEEN_TEXTURE_ROUGHNESS = !1, BB.SHEEN_LINKWITHALBEDO = !1, BB.SHEEN_ROUGHNESS = !1, BB.SHEEN_ALBEDOSCALING = !1, BB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, BB.SHEEN_GAMMATEXTURE = !1, BB.SHEEN_TEXTUREDIRECTUV = 0, BB.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(BB, IB, ZB, TB) {
          if (!this._isEnabled) return;
          const JB = TB.materialDefines,
            oB = this._material.isFrozen;
          BB.useUbo && oB && BB.isSync || ((this._texture || this._textureRoughness) && DB.e.SheenTextureEnabled && (BB.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, VB.y)(this._texture, BB, "sheen"), this._textureRoughness && !JB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, VB.y)(this._textureRoughness, BB, "sheenRoughness")), BB.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && BB.updateFloat("vSheenRoughness", this._roughness)), IB.texturesEnabled && (this._texture && DB.e.SheenTextureEnabled && BB.setTexture("sheenSampler", this._texture), this._textureRoughness && !JB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && DB.e.SheenTextureEnabled && BB.setTexture("sheenRoughnessSampler", this._textureRoughness))
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
        addFallbacks(BB, IB, ZB) {
          return BB.SHEEN && IB.addFallback(ZB++, "SHEEN"), ZB
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
      }, IB = new WeakMap, ZB = new WeakMap, TB = new WeakMap, JB = new WeakMap, oB = new WeakMap, GB = new WeakMap, vB = new WeakMap, (() => {
        const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(yB[Symbol.metadata] ?? null) : void 0;
        kB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], cB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], nB = [(0, YB.C)()], hB = [(0, YB.l)()], zB = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], FB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], NB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], gB = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], qB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], (0, OB.j)(BB, null, kB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, IB) => {
              BB.isEnabled = IB
            }
          },
          metadata: IB
        }, UB, WB), (0, OB.j)(BB, null, cB, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: BB => "linkSheenWithAlbedo" in BB,
            get: BB => BB.linkSheenWithAlbedo,
            set: (BB, IB) => {
              BB.linkSheenWithAlbedo = IB
            }
          },
          metadata: IB
        }, dB, CB), (0, OB.j)(BB, null, zB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, IB) => {
              BB.texture = IB
            }
          },
          metadata: IB
        }, pB, aB), (0, OB.j)(BB, null, FB, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRoughnessFromMainTexture" in BB,
            get: BB => BB.useRoughnessFromMainTexture,
            set: (BB, IB) => {
              BB.useRoughnessFromMainTexture = IB
            }
          },
          metadata: IB
        }, HB, MB), (0, OB.j)(BB, null, NB, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "roughness" in BB,
            get: BB => BB.roughness,
            set: (BB, IB) => {
              BB.roughness = IB
            }
          },
          metadata: IB
        }, jB, PB), (0, OB.j)(BB, null, gB, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "textureRoughness" in BB,
            get: BB => BB.textureRoughness,
            set: (BB, IB) => {
              BB.textureRoughness = IB
            }
          },
          metadata: IB
        }, RB, rB), (0, OB.j)(BB, null, qB, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: BB => "albedoScaling" in BB,
            get: BB => BB.albedoScaling,
            set: (BB, IB) => {
              BB.albedoScaling = IB
            }
          },
          metadata: IB
        }, mB, XB), (0, OB.j)(null, null, nB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, IB) => {
              BB.intensity = IB
            }
          },
          metadata: IB
        }, QB, sB), (0, OB.j)(null, null, hB, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: BB => "color" in BB,
            get: BB => BB.color,
            set: (BB, IB) => {
              BB.color = IB
            }
          },
          metadata: IB
        }, wB, iB), IB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IB
        })
      })(), BB
    })();
    class vI extends eB.e {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let kI = (() => {
      var BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB;
      let yB, UB, WB, dB, CB, QB, sB, wB, iB, pB, aB, HB, MB, jB, PB, RB, rB, mB, LB, eB, fB, lB, AB, bB, xB, EB, KB, SB, BI, II, ZI = uB.e,
        TI = [],
        JI = [],
        oI = [],
        GI = [],
        kI = [],
        cI = [],
        nI = [],
        hI = [],
        zI = [],
        FI = [],
        NI = [],
        gI = [],
        qI = [],
        yI = [],
        UI = [],
        WI = [],
        dI = [],
        CI = [],
        QI = [],
        sI = [],
        wI = [],
        OI = [],
        YI = [],
        iI = [],
        pI = [],
        aI = [],
        HI = [],
        MI = [],
        jI = [],
        PI = [],
        RI = [],
        rI = [],
        mI = [],
        XI = [],
        LI = [],
        eI = [],
        uI = [],
        fI = [],
        lI = [],
        AI = [],
        tI = [],
        bI = [],
        xI = [],
        EI = [],
        DI = [],
        KI = [],
        VI = [],
        SI = [],
        BZ = [],
        IZ = [],
        ZZ = [],
        TZ = [],
        JZ = [],
        oZ = [],
        GZ = [],
        vZ = [],
        kZ = [],
        cZ = [],
        nZ = [],
        hZ = [];
      return BB = class extends ZI {
        get isRefractionEnabled() {
          return (0, OB.b)(this, IB, "f")
        }
        set isRefractionEnabled(BB) {
          (0, OB.f)(this, IB, BB, "f")
        }
        get isTranslucencyEnabled() {
          return (0, OB.b)(this, ZB, "f")
        }
        set isTranslucencyEnabled(BB) {
          (0, OB.f)(this, ZB, BB, "f")
        }
        get isDispersionEnabled() {
          return (0, OB.b)(this, TB, "f")
        }
        set isDispersionEnabled(BB) {
          (0, OB.f)(this, TB, BB, "f")
        }
        get isScatteringEnabled() {
          return (0, OB.b)(this, JB, "f")
        }
        set isScatteringEnabled(BB) {
          (0, OB.f)(this, JB, BB, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(BB) {
          this._scene.enableSubSurfaceForPrePass() && BB && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(BB))
        }
        get useAlbedoToTintRefraction() {
          return (0, OB.b)(this, oB, "f")
        }
        set useAlbedoToTintRefraction(BB) {
          (0, OB.f)(this, oB, BB, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, OB.b)(this, GB, "f")
        }
        set useAlbedoToTintTranslucency(BB) {
          (0, OB.f)(this, GB, BB, "f")
        }
        get thicknessTexture() {
          return (0, OB.b)(this, vB, "f")
        }
        set thicknessTexture(BB) {
          (0, OB.f)(this, vB, BB, "f")
        }
        get refractionTexture() {
          return (0, OB.b)(this, kB, "f")
        }
        set refractionTexture(BB) {
          (0, OB.f)(this, kB, BB, "f")
        }
        get indexOfRefraction() {
          return (0, OB.b)(this, cB, "f")
        }
        set indexOfRefraction(BB) {
          (0, OB.f)(this, cB, BB, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(BB) {
          const IB = BB >= 1 ? BB : -1;
          this._volumeIndexOfRefraction !== IB && (this._volumeIndexOfRefraction = IB, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, OB.b)(this, nB, "f")
        }
        set invertRefractionY(BB) {
          (0, OB.f)(this, nB, BB, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, OB.b)(this, hB, "f")
        }
        set linkRefractionWithTransparency(BB) {
          (0, OB.f)(this, hB, BB, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, OB.b)(this, zB, "f")
        }
        set useMaskFromThicknessTexture(BB) {
          (0, OB.f)(this, zB, BB, "f")
        }
        get refractionIntensityTexture() {
          return (0, OB.b)(this, FB, "f")
        }
        set refractionIntensityTexture(BB) {
          (0, OB.f)(this, FB, BB, "f")
        }
        get translucencyIntensityTexture() {
          return (0, OB.b)(this, NB, "f")
        }
        set translucencyIntensityTexture(BB) {
          (0, OB.f)(this, NB, BB, "f")
        }
        get translucencyColorTexture() {
          return (0, OB.b)(this, gB, "f")
        }
        set translucencyColorTexture(BB) {
          (0, OB.f)(this, gB, BB, "f")
        }
        get useGltfStyleTextures() {
          return (0, OB.b)(this, qB, "f")
        }
        set useGltfStyleTextures(BB) {
          (0, OB.f)(this, qB, BB, "f")
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
        constructor(yB) {
          let UB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(yB, "PBRSubSurface", 130, new vI, UB), this._isRefractionEnabled = !1, IB.set(this, (0, OB.l)(this, TI, !1)), this._isTranslucencyEnabled = ((0, OB.l)(this, JI), !1), ZB.set(this, (0, OB.l)(this, oI, !1)), this._isDispersionEnabled = ((0, OB.l)(this, GI), !1), TB.set(this, (0, OB.l)(this, kI, !1)), this._isScatteringEnabled = ((0, OB.l)(this, cI), !1), JB.set(this, (0, OB.l)(this, nI, !1)), this._scatteringDiffusionProfileIndex = ((0, OB.l)(this, hI), (0, OB.l)(this, zI, 0)), this.refractionIntensity = ((0, OB.l)(this, FI), (0, OB.l)(this, NI, 1)), this.translucencyIntensity = ((0, OB.l)(this, gI), (0, OB.l)(this, qI, 1)), this._useAlbedoToTintRefraction = ((0, OB.l)(this, yI), !1), oB.set(this, (0, OB.l)(this, UI, !1)), this._useAlbedoToTintTranslucency = ((0, OB.l)(this, WI), !1), GB.set(this, (0, OB.l)(this, dI, !1)), this._thicknessTexture = ((0, OB.l)(this, CI), null), vB.set(this, (0, OB.l)(this, QI, null)), this._refractionTexture = ((0, OB.l)(this, sI), null), kB.set(this, (0, OB.l)(this, wI, null)), this._indexOfRefraction = ((0, OB.l)(this, OI), 1.5), cB.set(this, (0, OB.l)(this, YI, 1.5)), this._volumeIndexOfRefraction = ((0, OB.l)(this, iI), (0, OB.l)(this, pI, -1)), this._invertRefractionY = ((0, OB.l)(this, aI), !1), nB.set(this, (0, OB.l)(this, HI, !1)), this._linkRefractionWithTransparency = ((0, OB.l)(this, MI), !1), hB.set(this, (0, OB.l)(this, jI, !1)), this.minimumThickness = ((0, OB.l)(this, PI), (0, OB.l)(this, RI, 0)), this.maximumThickness = ((0, OB.l)(this, rI), (0, OB.l)(this, mI, 1)), this.useThicknessAsDepth = ((0, OB.l)(this, XI), (0, OB.l)(this, LI, !1)), this.tintColor = ((0, OB.l)(this, eI), (0, OB.l)(this, uI, tB.c.White())), this.tintColorAtDistance = ((0, OB.l)(this, fI), (0, OB.l)(this, lI, 1)), this.dispersion = ((0, OB.l)(this, AI), (0, OB.l)(this, tI, 0)), this.diffusionDistance = ((0, OB.l)(this, bI), (0, OB.l)(this, xI, tB.c.White())), this._useMaskFromThicknessTexture = ((0, OB.l)(this, EI), !1), zB.set(this, (0, OB.l)(this, DI, !1)), this._refractionIntensityTexture = ((0, OB.l)(this, KI), null), FB.set(this, (0, OB.l)(this, VI, null)), this._translucencyIntensityTexture = ((0, OB.l)(this, SI), null), NB.set(this, (0, OB.l)(this, BZ, null)), this.translucencyColor = ((0, OB.l)(this, IZ), (0, OB.l)(this, ZZ, null)), this._translucencyColorTexture = ((0, OB.l)(this, TZ), null), gB.set(this, (0, OB.l)(this, JZ, null)), this._useGltfStyleTextures = ((0, OB.l)(this, oZ), !0), qB.set(this, (0, OB.l)(this, GZ, !0)), this.applyAlbedoAfterSubSurface = ((0, OB.l)(this, vZ), (0, OB.l)(this, kZ, BB.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, OB.l)(this, cZ), (0, OB.l)(this, nZ, BB.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, OB.l)(this, hZ), this._scene = yB.JR(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = yB._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = yB._dirtyCallbacks[32]
        }
        isReadyForSubMesh(BB, IB) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (BB._areTexturesDirty && IB.texturesEnabled) {
            if (this._thicknessTexture && DB.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && DB.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && DB.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && DB.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const BB = this._getRefractionTexture(IB);
            if (BB && DB.e.RefractionTextureEnabled && !BB.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(BB, IB) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return BB.SUBSURFACE = !1, BB.SS_DISPERSION = !1, BB.SS_TRANSLUCENCY = !1, BB.SS_SCATTERING = !1, BB.SS_REFRACTION = !1, BB.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, BB.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, BB.SS_THICKNESSANDMASK_TEXTURE = !1, BB.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, BB.SS_HAS_THICKNESS = !1, BB.SS_REFRACTIONINTENSITY_TEXTURE = !1, BB.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, BB.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, BB.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, BB.SS_REFRACTIONMAP_3D = !1, BB.SS_REFRACTIONMAP_OPPOSITEZ = !1, BB.SS_LODINREFRACTIONALPHA = !1, BB.SS_GAMMAREFRACTION = !1, BB.SS_RGBDREFRACTION = !1, BB.SS_LINEARSPECULARREFRACTION = !1, BB.SS_LINKREFRACTIONTOTRANSPARENCY = !1, BB.SS_ALBEDOFORREFRACTIONTINT = !1, BB.SS_ALBEDOFORTRANSLUCENCYTINT = !1, BB.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, BB.SS_USE_THICKNESS_AS_DEPTH = !1, BB.SS_USE_GLTF_TEXTURES = !1, BB.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, BB.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, BB.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(BB.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (BB._areTexturesDirty) {
            if (BB.SUBSURFACE = !0, BB.SS_DISPERSION = this._isDispersionEnabled, BB.SS_TRANSLUCENCY = this._isTranslucencyEnabled, BB.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, BB.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, BB.SS_SCATTERING = this._isScatteringEnabled, BB.SS_THICKNESSANDMASK_TEXTURE = !1, BB.SS_REFRACTIONINTENSITY_TEXTURE = !1, BB.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, BB.SS_HAS_THICKNESS = !1, BB.SS_USE_GLTF_TEXTURES = !1, BB.SS_REFRACTION = !1, BB.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, BB.SS_REFRACTIONMAP_3D = !1, BB.SS_GAMMAREFRACTION = !1, BB.SS_RGBDREFRACTION = !1, BB.SS_LINEARSPECULARREFRACTION = !1, BB.SS_REFRACTIONMAP_OPPOSITEZ = !1, BB.SS_LODINREFRACTIONALPHA = !1, BB.SS_LINKREFRACTIONTOTRANSPARENCY = !1, BB.SS_ALBEDOFORREFRACTIONTINT = !1, BB.SS_ALBEDOFORTRANSLUCENCYTINT = !1, BB.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, BB.SS_USE_THICKNESS_AS_DEPTH = !1, BB.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, BB.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, BB._areTexturesDirty && IB.texturesEnabled && (this._thicknessTexture && DB.e.ThicknessTextureEnabled && (0, VB.ab)(this._thicknessTexture, BB, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && DB.e.RefractionIntensityTextureEnabled && (0, VB.ab)(this._refractionIntensityTexture, BB, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && DB.e.TranslucencyIntensityTextureEnabled && (0, VB.ab)(this._translucencyIntensityTexture, BB, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && DB.e.TranslucencyColorTextureEnabled && ((0, VB.ab)(this._translucencyColorTexture, BB, "SS_TRANSLUCENCYCOLOR_TEXTURE"), BB.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), BB.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, BB.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, BB.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, BB.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && IB.texturesEnabled) {
              const ZB = this._getRefractionTexture(IB);
              ZB && DB.e.RefractionTextureEnabled && (BB.SS_REFRACTION = !0, BB.SS_REFRACTIONMAP_3D = ZB.isCube, BB.SS_GAMMAREFRACTION = ZB.gammaSpace, BB.SS_RGBDREFRACTION = ZB.isRGBD, BB.SS_LINEARSPECULARREFRACTION = ZB.linearSpecularLOD, BB.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && ZB.isCube ? !ZB.invertZ : ZB.invertZ, BB.SS_LODINREFRACTIONALPHA = ZB.lodLevelInAlpha, BB.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, BB.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, BB.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = ZB.isCube && ZB.boundingBoxSize, BB.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (BB.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(BB, IB, ZB, TB) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) BB.updateFloat2("vThicknessParam", 0, 0);
            else {
              TB.getRenderingMesh().getWorldMatrix().decompose(XB.m.rN[0]);
              const IB = Math.max(Math.abs(XB.m.rN[0].x), Math.abs(XB.m.rN[0].y), Math.abs(XB.m.rN[0].z));
              BB.updateFloat2("vThicknessParam", this.minimumThickness * IB, (this.maximumThickness - this.minimumThickness) * IB)
            }
        }
        bindForSubMesh(BB, IB, ZB, TB) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const JB = TB.materialDefines,
            oB = this._material.isFrozen,
            GB = this._material.realTimeFiltering,
            vB = JB.LODBASEDMICROSFURACE,
            kB = this._getRefractionTexture(IB);
          if (!BB.useUbo || !oB || !BB.isSync) {
            if (this._thicknessTexture && DB.e.ThicknessTextureEnabled && (BB.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, VB.y)(this._thicknessTexture, BB, "thickness")), this._refractionIntensityTexture && DB.e.RefractionIntensityTextureEnabled && JB.SS_REFRACTIONINTENSITY_TEXTURE && (BB.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, VB.y)(this._refractionIntensityTexture, BB, "refractionIntensity")), this._translucencyColorTexture && DB.e.TranslucencyColorTextureEnabled && JB.SS_TRANSLUCENCYCOLOR_TEXTURE && (BB.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, VB.y)(this._translucencyColorTexture, BB, "translucencyColor")), this._translucencyIntensityTexture && DB.e.TranslucencyIntensityTextureEnabled && JB.SS_TRANSLUCENCYINTENSITY_TEXTURE && (BB.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, VB.y)(this._translucencyIntensityTexture, BB, "translucencyIntensity")), kB && DB.e.RefractionTextureEnabled) {
              BB.T6("refractionMatrix", kB.getRefractionTextureMatrix());
              let IB = 1;
              kB.isCube || kB.depth && (IB = kB.depth);
              const ZB = kB.getSize().width,
                TB = this.volumeIndexOfRefraction;
              if (BB.updateFloat4("vRefractionInfos", kB.level, 1 / TB, IB, this._invertRefractionY ? -1 : 1), BB.updateFloat4("vRefractionMicrosurfaceInfos", ZB, kB.lodGenerationScale, kB.lodGenerationOffset, 1 / this.indexOfRefraction), GB && BB.updateFloat2("vRefractionFilteringInfo", ZB, Math.log2(ZB)), kB.boundingBoxSize) {
                const IB = kB;
                BB.updateVector3("vRefractionPosition", IB.boundingBoxPosition), BB.updateVector3("vRefractionSize", IB.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && BB.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), BB.updateColor3("vDiffusionDistance", this.diffusionDistance), BB.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), BB.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), BB.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), BB.updateFloat("dispersion", this.dispersion)
          }
          IB.texturesEnabled && (this._thicknessTexture && DB.e.ThicknessTextureEnabled && BB.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && DB.e.RefractionIntensityTextureEnabled && JB.SS_REFRACTIONINTENSITY_TEXTURE && BB.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && DB.e.TranslucencyIntensityTextureEnabled && JB.SS_TRANSLUCENCYINTENSITY_TEXTURE && BB.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && DB.e.TranslucencyColorTextureEnabled && JB.SS_TRANSLUCENCYCOLOR_TEXTURE && BB.setTexture("translucencyColorSampler", this._translucencyColorTexture), kB && DB.e.RefractionTextureEnabled && (vB ? BB.setTexture("refractionSampler", kB) : (BB.setTexture("refractionSampler", kB._lodTextureMid || kB), BB.setTexture("refractionSamplerLow", kB._lodTextureLow || kB), BB.setTexture("refractionSamplerHigh", kB._lodTextureHigh || kB))))
        }
        _getRefractionTexture(BB) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? BB.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(BB) {
          DB.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && BB.push(this._refractionTexture)
        }
        hasTexture(BB) {
          return this._thicknessTexture === BB || (this._refractionTexture === BB || (this._refractionIntensityTexture === BB || (this._translucencyIntensityTexture === BB || this._translucencyColorTexture === BB)))
        }
        hasRenderTargetTextures() {
          return !!(DB.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
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
        addFallbacks(BB, IB, ZB) {
          return BB.SS_SCATTERING && IB.addFallback(ZB++, "SS_SCATTERING"), BB.SS_TRANSLUCENCY && IB.addFallback(ZB++, "SS_TRANSLUCENCY"), ZB
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
      }, IB = new WeakMap, ZB = new WeakMap, TB = new WeakMap, JB = new WeakMap, oB = new WeakMap, GB = new WeakMap, vB = new WeakMap, kB = new WeakMap, cB = new WeakMap, nB = new WeakMap, hB = new WeakMap, zB = new WeakMap, FB = new WeakMap, NB = new WeakMap, gB = new WeakMap, qB = new WeakMap, (() => {
        const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZI[Symbol.metadata] ?? null) : void 0;
        yB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], UB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], WB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], dB = [(0, YB.C)(), (0, YB.e)("_markScenePrePassDirty")], CB = [(0, YB.C)()], QB = [(0, YB.C)()], sB = [(0, YB.C)()], wB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], iB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], pB = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], aB = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], HB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], MB = [(0, YB.C)()], jB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], PB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], RB = [(0, YB.C)()], rB = [(0, YB.C)()], mB = [(0, YB.C)()], LB = [(0, YB.l)()], eB = [(0, YB.C)()], fB = [(0, YB.C)()], lB = [(0, YB.l)()], AB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], bB = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], xB = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], EB = [(0, YB.l)()], KB = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], SB = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], BI = [(0, YB.C)()], II = [(0, YB.C)()], (0, OB.j)(BB, null, yB, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isRefractionEnabled" in BB,
            get: BB => BB.isRefractionEnabled,
            set: (BB, IB) => {
              BB.isRefractionEnabled = IB
            }
          },
          metadata: IB
        }, TI, JI), (0, OB.j)(BB, null, UB, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isTranslucencyEnabled" in BB,
            get: BB => BB.isTranslucencyEnabled,
            set: (BB, IB) => {
              BB.isTranslucencyEnabled = IB
            }
          },
          metadata: IB
        }, oI, GI), (0, OB.j)(BB, null, WB, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isDispersionEnabled" in BB,
            get: BB => BB.isDispersionEnabled,
            set: (BB, IB) => {
              BB.isDispersionEnabled = IB
            }
          },
          metadata: IB
        }, kI, cI), (0, OB.j)(BB, null, dB, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isScatteringEnabled" in BB,
            get: BB => BB.isScatteringEnabled,
            set: (BB, IB) => {
              BB.isScatteringEnabled = IB
            }
          },
          metadata: IB
        }, nI, hI), (0, OB.j)(BB, null, wB, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAlbedoToTintRefraction" in BB,
            get: BB => BB.useAlbedoToTintRefraction,
            set: (BB, IB) => {
              BB.useAlbedoToTintRefraction = IB
            }
          },
          metadata: IB
        }, UI, WI), (0, OB.j)(BB, null, iB, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAlbedoToTintTranslucency" in BB,
            get: BB => BB.useAlbedoToTintTranslucency,
            set: (BB, IB) => {
              BB.useAlbedoToTintTranslucency = IB
            }
          },
          metadata: IB
        }, dI, CI), (0, OB.j)(BB, null, pB, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "thicknessTexture" in BB,
            get: BB => BB.thicknessTexture,
            set: (BB, IB) => {
              BB.thicknessTexture = IB
            }
          },
          metadata: IB
        }, QI, sI), (0, OB.j)(BB, null, aB, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "refractionTexture" in BB,
            get: BB => BB.refractionTexture,
            set: (BB, IB) => {
              BB.refractionTexture = IB
            }
          },
          metadata: IB
        }, wI, OI), (0, OB.j)(BB, null, HB, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "indexOfRefraction" in BB,
            get: BB => BB.indexOfRefraction,
            set: (BB, IB) => {
              BB.indexOfRefraction = IB
            }
          },
          metadata: IB
        }, YI, iI), (0, OB.j)(BB, null, jB, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: BB => "invertRefractionY" in BB,
            get: BB => BB.invertRefractionY,
            set: (BB, IB) => {
              BB.invertRefractionY = IB
            }
          },
          metadata: IB
        }, HI, MI), (0, OB.j)(BB, null, PB, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: BB => "linkRefractionWithTransparency" in BB,
            get: BB => BB.linkRefractionWithTransparency,
            set: (BB, IB) => {
              BB.linkRefractionWithTransparency = IB
            }
          },
          metadata: IB
        }, jI, PI), (0, OB.j)(BB, null, AB, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useMaskFromThicknessTexture" in BB,
            get: BB => BB.useMaskFromThicknessTexture,
            set: (BB, IB) => {
              BB.useMaskFromThicknessTexture = IB
            }
          },
          metadata: IB
        }, DI, KI), (0, OB.j)(BB, null, bB, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "refractionIntensityTexture" in BB,
            get: BB => BB.refractionIntensityTexture,
            set: (BB, IB) => {
              BB.refractionIntensityTexture = IB
            }
          },
          metadata: IB
        }, VI, SI), (0, OB.j)(BB, null, xB, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "translucencyIntensityTexture" in BB,
            get: BB => BB.translucencyIntensityTexture,
            set: (BB, IB) => {
              BB.translucencyIntensityTexture = IB
            }
          },
          metadata: IB
        }, BZ, IZ), (0, OB.j)(BB, null, KB, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "translucencyColorTexture" in BB,
            get: BB => BB.translucencyColorTexture,
            set: (BB, IB) => {
              BB.translucencyColorTexture = IB
            }
          },
          metadata: IB
        }, JZ, oZ), (0, OB.j)(BB, null, SB, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: BB => "useGltfStyleTextures" in BB,
            get: BB => BB.useGltfStyleTextures,
            set: (BB, IB) => {
              BB.useGltfStyleTextures = IB
            }
          },
          metadata: IB
        }, GZ, vZ), (0, OB.j)(null, null, CB, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: BB => "_scatteringDiffusionProfileIndex" in BB,
            get: BB => BB._scatteringDiffusionProfileIndex,
            set: (BB, IB) => {
              BB._scatteringDiffusionProfileIndex = IB
            }
          },
          metadata: IB
        }, zI, FI), (0, OB.j)(null, null, QB, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "refractionIntensity" in BB,
            get: BB => BB.refractionIntensity,
            set: (BB, IB) => {
              BB.refractionIntensity = IB
            }
          },
          metadata: IB
        }, NI, gI), (0, OB.j)(null, null, sB, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "translucencyIntensity" in BB,
            get: BB => BB.translucencyIntensity,
            set: (BB, IB) => {
              BB.translucencyIntensity = IB
            }
          },
          metadata: IB
        }, qI, yI), (0, OB.j)(null, null, MB, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "_volumeIndexOfRefraction" in BB,
            get: BB => BB._volumeIndexOfRefraction,
            set: (BB, IB) => {
              BB._volumeIndexOfRefraction = IB
            }
          },
          metadata: IB
        }, pI, aI), (0, OB.j)(null, null, RB, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "minimumThickness" in BB,
            get: BB => BB.minimumThickness,
            set: (BB, IB) => {
              BB.minimumThickness = IB
            }
          },
          metadata: IB
        }, RI, rI), (0, OB.j)(null, null, rB, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "maximumThickness" in BB,
            get: BB => BB.maximumThickness,
            set: (BB, IB) => {
              BB.maximumThickness = IB
            }
          },
          metadata: IB
        }, mI, XI), (0, OB.j)(null, null, mB, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: BB => "useThicknessAsDepth" in BB,
            get: BB => BB.useThicknessAsDepth,
            set: (BB, IB) => {
              BB.useThicknessAsDepth = IB
            }
          },
          metadata: IB
        }, LI, eI), (0, OB.j)(null, null, LB, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintColor" in BB,
            get: BB => BB.tintColor,
            set: (BB, IB) => {
              BB.tintColor = IB
            }
          },
          metadata: IB
        }, uI, fI), (0, OB.j)(null, null, eB, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintColorAtDistance" in BB,
            get: BB => BB.tintColorAtDistance,
            set: (BB, IB) => {
              BB.tintColorAtDistance = IB
            }
          },
          metadata: IB
        }, lI, AI), (0, OB.j)(null, null, fB, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: BB => "dispersion" in BB,
            get: BB => BB.dispersion,
            set: (BB, IB) => {
              BB.dispersion = IB
            }
          },
          metadata: IB
        }, tI, bI), (0, OB.j)(null, null, lB, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "diffusionDistance" in BB,
            get: BB => BB.diffusionDistance,
            set: (BB, IB) => {
              BB.diffusionDistance = IB
            }
          },
          metadata: IB
        }, xI, EI), (0, OB.j)(null, null, EB, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "translucencyColor" in BB,
            get: BB => BB.translucencyColor,
            set: (BB, IB) => {
              BB.translucencyColor = IB
            }
          },
          metadata: IB
        }, ZZ, TZ), (0, OB.j)(null, null, BI, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: BB => "applyAlbedoAfterSubSurface" in BB,
            get: BB => BB.applyAlbedoAfterSubSurface,
            set: (BB, IB) => {
              BB.applyAlbedoAfterSubSurface = IB
            }
          },
          metadata: IB
        }, kZ, cZ), (0, OB.j)(null, null, II, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: BB => "legacyTranslucency" in BB,
            get: BB => BB.legacyTranslucency,
            set: (BB, IB) => {
              BB.legacyTranslucency = IB
            }
          },
          metadata: IB
        }, nZ, hZ), IB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IB
        })
      })(), BB.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, BB.DEFAULT_LEGACY_TRANSLUCENCY = !1, BB
    })();
    var cI = ZB(40400),
      nI = ZB(40380),
      hI = ZB(40416),
      zI = ZB(40425),
      FI = ZB(40431),
      NI = ZB(40433),
      gI = ZB(40437),
      qI = ZB(40443),
      yI = ZB(39931);
    const UI = {
      effect: null,
      subMesh: null
    };
    class WI extends((0, gI.b)((0, NI.b)(eB.e))) {}
    class dI extends((0, bB.c)(WI)) {
      constructor(BB) {
        super(BB), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class CI extends((0, qI.b)(EB.b)) {}
    let QI = (() => {
      var BB, IB;
      let TB, JB = CI,
        GB = [],
        vB = [];
      return BB = class extends JB {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(BB) {
          this._realTimeFiltering = BB, this.GZB(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(BB) {
          this._realTimeFilteringQuality = BB, this.GZB(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, OB.b)(this, IB, "f")
        }
        set debugMode(BB) {
          (0, OB.f)(this, IB, BB, "f")
        }
        constructor(ZB, TB) {
          super(ZB, TB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || BB.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new XB.t(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = BB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = tB.c.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new tB.c(0, 0, 0), this._albedoColor = new tB.c(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new tB.c(1, 1, 1), this._reflectionColor = new tB.c(1, 1, 1), this._emissiveColor = new tB.c(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = BB.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new pB.g(16), this._globalAmbientColor = new tB.c(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, IB.set(this, (0, OB.l)(this, GB, 0)), this.debugLimit = ((0, OB.l)(this, vB), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new lB(this), this.clearCoat = new BI(this), this.iridescence = new ZI(this), this.anisotropy = new JI(this), this.sheen = new GI(this), this.subSurface = new kI(this), this.detailMap = new cI.e(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), DB.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = PB(this.JR()), this.prePassConfiguration = new AB.e
        }
        get hasRenderTargetTextures() {
          return !!(DB.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
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
        isReadyForSubMesh(BB, IB, ZB) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const TB = IB._drawWrapper;
          if (TB.effect && this.isFrozen && TB._wasPreviouslyReady && TB._wasPreviouslyUsingInstances === ZB) return !0;
          IB.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), IB.materialDefines = new dI(this._eventInfo.defineNames));
          const JB = IB.materialDefines;
          if (this._isReadyForSubMesh(IB)) return !0;
          const oB = this.JR(),
            GB = oB.PN();
          if (JB._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, oB.texturesEnabled)) {
            if (this._albedoTexture && DB.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && DB.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && DB.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && DB.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && DB.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const BB = this._getReflectionTexture();
            if (BB && DB.e.ReflectionTextureEnabled) {
              if (!BB.isReadyOrNotBlocking()) return !1;
              if (BB.irradianceTexture) {
                if (!BB.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!BB.sphericalPolynomial && BB.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && DB.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && DB.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (DB.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (GB.getCaps().standardDerivatives && this._bumpTexture && DB.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && DB.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = JB, this._eventInfo.subMesh = IB, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (JB._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (JB.AREALIGHTUSED || JB.CLUSTLIGHT_BATCH)
            for (let hB = 0; hB < BB.lightSources.length; hB++)
              if (!BB.lightSources[hB]._isReady()) return !1;
          if (GB.getCaps().standardDerivatives || BB.isVerticesDataPresent(LB.i.NormalKind) || (BB.createNormals(!0), iB.d.Warn("PBRMaterial: Normals have been created for the mesh: " + BB.name)), !(0, VB.c)(oB, BB, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const vB = IB.effect,
            kB = JB._areLightsDisposed,
            cB = this._prepareEffect(BB, IB.getRenderingMesh(), JB, this.onCompiled, this.onError, ZB, null);
          let nB = !1;
          if (cB)
            if (this._onEffectCreatedObservable && (UI.effect = cB, UI.subMesh = IB, this._onEffectCreatedObservable.notifyObservers(UI)), this.allowShaderHotSwapping && vB && !cB.isReady()) {
              if (JB.markAsUnprocessed(), nB = this.isFrozen, kB) return JB._areLightsDisposed = !0, !1
            } else oB.resetCachedMaterial(), IB.setEffect(cB, JB, this._materialContext);
          return !(!IB.effect || !IB.effect.isReady()) && (JB._renderId = oB.getRenderId(), TB._wasPreviouslyReady = !nB, TB._wasPreviouslyUsingInstances = !!ZB, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(IB, ZB, TB) {
          let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            GB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            vB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(IB, ZB, TB, GB, vB), !TB.isDirty) return null;
          TB.markAsProcessed();
          const kB = this.JR().PN(),
            cB = new KB.e;
          let nB = 0;
          TB.USESPHERICALINVERTEX && cB.addFallback(nB++, "USESPHERICALINVERTEX"), TB.FOG && cB.addFallback(nB, "FOG"), TB.SPECULARAA && cB.addFallback(nB, "SPECULARAA"), TB.POINTSIZE && cB.addFallback(nB, "POINTSIZE"), TB.LOGARITHMICDEPTH && cB.addFallback(nB, "LOGARITHMICDEPTH"), TB.PARALLAX && cB.addFallback(nB, "PARALLAX"), TB.PARALLAX_RHS && cB.addFallback(nB, "PARALLAX_RHS"), TB.PARALLAXOCCLUSION && cB.addFallback(nB++, "PARALLAXOCCLUSION"), TB.ENVIRONMENTBRDF && cB.addFallback(nB++, "ENVIRONMENTBRDF"), TB.TANGENT && cB.addFallback(nB++, "TANGENT"), TB.BUMP && cB.addFallback(nB++, "BUMP"), nB = (0, VB.C)(TB, cB, this._maxSimultaneousLights, nB), TB.SPECULARTERM && cB.addFallback(nB++, "SPECULARTERM"), TB.USESPHERICALFROMREFLECTIONMAP && cB.addFallback(nB++, "USESPHERICALFROMREFLECTIONMAP"), TB.USEIRRADIANCEMAP && cB.addFallback(nB++, "USEIRRADIANCEMAP"), TB.LIGHTMAP && cB.addFallback(nB++, "LIGHTMAP"), TB.NORMAL && cB.addFallback(nB++, "NORMAL"), TB.AMBIENT && cB.addFallback(nB++, "AMBIENT"), TB.EMISSIVE && cB.addFallback(nB++, "EMISSIVE"), TB.VERTEXCOLOR && cB.addFallback(nB++, "VERTEXCOLOR"), TB.MORPHTARGETS && cB.addFallback(nB++, "MORPHTARGETS"), TB.MULTIVIEW && cB.addFallback(0, "MULTIVIEW");
          const hB = [LB.i.PositionKind];
          TB.NORMAL && hB.push(LB.i.NormalKind), TB.TANGENT && hB.push(LB.i.TangentKind);
          for (let BB = 1; BB <= 6; ++BB) TB["UV" + BB] && hB.push(`uv${1===BB?"":BB}`);
          TB.VERTEXCOLOR && hB.push(LB.i.ColorKind), (0, VB.I)(hB, IB, TB, cB), (0, VB.L)(hB, TB), (0, VB.M)(hB, IB, TB), (0, VB.F)(hB, IB, TB);
          let zB = "pbr";
          const FB = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            NB = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, VB.rb)(FB, NB, !0);
          const gB = ["Material", "Scene", "Mesh"],
            qB = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: TB.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = cB, this._eventInfo.fallbackRank = nB, this._eventInfo.defines = TB, this._eventInfo.uniforms = FB, this._eventInfo.attributes = hB, this._eventInfo.samplers = NB, this._eventInfo.uniformBuffersNames = gB, this._eventInfo.customCode = void 0, this._eventInfo.mesh = IB, this._eventInfo.indexParameters = qB, this._callbackPluginEventGeneric(128, this._eventInfo), FI.b.AddUniformsAndSamplers(FB, NB), AB.e.AddUniforms(FB), AB.e.AddSamplers(NB), (0, nI.c)(FB), this._useVertexPulling) {
            const BB = ZB?.geometry;
            BB && (this._vertexPullingMetadata = (0, hI.d)(BB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, IB) => {
              FB.push(`vp_${IB}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          xB.b && (xB.b.PrepareUniforms(FB, TB), xB.b.PrepareSamplers(NB, TB)), (0, VB.vb)({
            uniformsNames: FB,
            uniformBuffersNames: gB,
            samplers: NB,
            defines: TB,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const yB = {};
          this.customShaderNameResolve && (zB = this.customShaderNameResolve(zB, FB, gB, NB, TB, hB, yB));
          const UB = TB.toString(),
            WB = kB.createEffect(zB, {
              attributes: hB,
              uniformsNames: FB,
              uniformBuffersNames: gB,
              samplers: NB,
              defines: UB,
              fallbacks: cB,
              onCompiled: JB,
              onError: oB,
              indexParameters: qB,
              processFinalCode: yB.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: TB.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: BB._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, kB);
          return this._eventInfo.customCode = void 0, WB
        }
        _prepareDefines(IB, ZB, TB) {
          let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const GB = ZB.hasThinInstances,
            vB = this.JR(),
            kB = vB.PN();
          (0, VB.Y)(vB, IB, TB, !0, this._maxSimultaneousLights, this._disableLighting), TB._needNormals = !0, (0, VB.fb)(vB, TB);
          const cB = this.needAlphaBlendingForMesh(IB) && this.JR().useOrderIndependentTransparency;
          if ((0, VB.kb)(vB, TB, this.canRenderToMRT && !cB), (0, VB.gb)(vB, TB, cB), FI.b.PrepareDefines(kB.currentRenderPassId, IB, TB), TB.METALLICWORKFLOW = this.isMetallicWorkflow(), TB._areTexturesDirty) {
            TB._needUVs = !1;
            for (let BB = 1; BB <= 6; ++BB) TB["MAINUV" + BB] = !1;
            if (vB.texturesEnabled) {
              TB.ALBEDODIRECTUV = 0, TB.BASE_WEIGHTDIRECTUV = 0, TB.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, TB.AMBIENTDIRECTUV = 0, TB.OPACITYDIRECTUV = 0, TB.EMISSIVEDIRECTUV = 0, TB.REFLECTIVITYDIRECTUV = 0, TB.MICROSURFACEMAPDIRECTUV = 0, TB.METALLIC_REFLECTANCEDIRECTUV = 0, TB.REFLECTANCEDIRECTUV = 0, TB.BUMPDIRECTUV = 0, TB.LIGHTMAPDIRECTUV = 0, kB.getCaps().textureLOD && (TB.LODBASEDMICROSFURACE = !0), this._albedoTexture && DB.e.DiffuseTextureEnabled ? ((0, VB.ab)(this._albedoTexture, TB, "ALBEDO"), TB.GAMMAALBEDO = this._albedoTexture.gammaSpace) : TB.ALBEDO = !1, this._baseWeightTexture && DB.e.BaseWeightTextureEnabled ? (0, VB.ab)(this._baseWeightTexture, TB, "BASE_WEIGHT") : TB.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && DB.e.BaseDiffuseRoughnessTextureEnabled ? (0, VB.ab)(this._baseDiffuseRoughnessTexture, TB, "BASE_DIFFUSE_ROUGHNESS") : TB.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && DB.e.AmbientTextureEnabled ? ((0, VB.ab)(this._ambientTexture, TB, "AMBIENT"), TB.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : TB.AMBIENT = !1, this._opacityTexture && DB.e.OpacityTextureEnabled ? ((0, VB.ab)(this._opacityTexture, TB, "OPACITY"), TB.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : TB.OPACITY = !1;
              const BB = this._getReflectionTexture(),
                IB = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || kB.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, VB.W)(vB, BB, TB, this.realTimeFiltering, this.realTimeFilteringQuality, !IB), this._lightmapTexture && DB.e.LightmapTextureEnabled ? ((0, VB.ab)(this._lightmapTexture, TB, "LIGHTMAP"), TB.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, TB.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, TB.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : TB.LIGHTMAP = !1, this._emissiveTexture && DB.e.EmissiveTextureEnabled ? ((0, VB.ab)(this._emissiveTexture, TB, "EMISSIVE"), TB.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : TB.EMISSIVE = !1, DB.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, VB.ab)(this._metallicTexture, TB, "REFLECTIVITY"), TB.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, TB.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, TB.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, TB.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, TB.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, VB.ab)(this._reflectivityTexture, TB, "REFLECTIVITY"), TB.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, TB.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, TB.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : TB.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (TB.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, VB.ab)(this._metallicReflectanceTexture, TB, "METALLIC_REFLECTANCE"), TB.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : TB.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, VB.ab)(this._reflectanceTexture, TB, "REFLECTANCE"), TB.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : TB.REFLECTANCE = !1) : (TB.METALLIC_REFLECTANCE = !1, TB.REFLECTANCE = !1), this._microSurfaceTexture ? (0, VB.ab)(this._microSurfaceTexture, TB, "MICROSURFACEMAP") : TB.MICROSURFACEMAP = !1) : (TB.REFLECTIVITY = !1, TB.MICROSURFACEMAP = !1), kB.getCaps().standardDerivatives && this._bumpTexture && DB.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, VB.ab)(this._bumpTexture, TB, "BUMP"), this._useParallax && this._albedoTexture && DB.e.DiffuseTextureEnabled ? (TB.PARALLAX = !0, TB.PARALLAX_RHS = vB.useRightHandedSystem, TB.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : TB.PARALLAX = !1, TB.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (TB.BUMP = !1, TB.PARALLAX = !1, TB.PARALLAX_RHS = !1, TB.PARALLAXOCCLUSION = !1, TB.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && DB.e.ReflectionTextureEnabled ? (TB.ENVIRONMENTBRDF = !0, TB.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (TB.ENVIRONMENTBRDF = !1, TB.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? TB.ALPHAFROMALBEDO = !0 : TB.ALPHAFROMALBEDO = !1
            }
            TB.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === BB.LIGHTFALLOFF_STANDARD ? (TB.USEPHYSICALLIGHTFALLOFF = !1, TB.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === BB.LIGHTFALLOFF_GLTF ? (TB.USEPHYSICALLIGHTFALLOFF = !1, TB.USEGLTFLIGHTFALLOFF = !0) : (TB.USEPHYSICALLIGHTFALLOFF = !0, TB.USEGLTFLIGHTFALLOFF = !1), TB.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? TB.TWOSIDEDLIGHTING = !0 : TB.TWOSIDEDLIGHTING = !1, TB.MIRRORED = !!vB._mirroredCameraPosition, TB.SPECULARAA = kB.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(TB._areTexturesDirty || TB._areMiscDirty) && (TB.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, TB.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, TB.ALPHABLEND = this.needAlphaBlendingForMesh(IB), TB.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, TB.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), TB._areTexturesDirty && (TB.TEXTURE_REPETITION_MODE = kB.version > 1 || kB.isWebGPU ? this.textureRepetitionMode : 0), TB._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(TB), TB.FORCENORMALFORWARD = this._forceNormalForward, TB.RADIANCEOCCLUSION = this._useRadianceOcclusion, TB.HORIZONOCCLUSION = this._useHorizonOcclusion, TB._areMiscDirty && ((0, VB.eb)(IB, vB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(IB), TB, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ZB, this._isVertexOutputInvariant), TB.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !IB.isVerticesDataPresent(LB.i.NormalKind), TB.DEBUGMODE = this._debugMode), (0, VB.V)(vB, kB, this, TB, !!JB, oB, GB), this._eventInfo.defines = TB, this._eventInfo.mesh = IB, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, VB.R)(IB, TB, !0, !0, !0, this._transparencyMode !== BB.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(BB, IB, ZB) {
          const TB = {
            clipPlane: !1,
            useInstances: !1,
            ...ZB
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const ZB = new dI(this._eventInfo.defineNames),
              JB = this._prepareEffect(BB, BB, ZB, void 0, void 0, TB.useInstances, TB.clipPlane);
            this._onEffectCreatedObservable && (UI.effect = JB, UI.subMesh = null, this._onEffectCreatedObservable.notifyObservers(UI)), JB.isReady() ? IB && IB(this) : JB.onCompileObservable.add((() => {
              IB && IB(this)
            }))
          })()
        }
        buildUniformLayout() {
          const BB = this._uniformBuffer;
          BB.addUniform("vAlbedoInfos", 2), BB.addUniform("vBaseWeightInfos", 2), BB.addUniform("vBaseDiffuseRoughnessInfos", 2), BB.addUniform("vAmbientInfos", 4), BB.addUniform("vOpacityInfos", 2), BB.addUniform("vEmissiveInfos", 2), BB.addUniform("vLightmapInfos", 2), BB.addUniform("vReflectivityInfos", 3), BB.addUniform("vMicroSurfaceSamplerInfos", 2), BB.addUniform("vBumpInfos", 3), BB.addUniform("albedoMatrix", 16), BB.addUniform("baseWeightMatrix", 16), BB.addUniform("baseDiffuseRoughnessMatrix", 16), BB.addUniform("ambientMatrix", 16), BB.addUniform("opacityMatrix", 16), BB.addUniform("emissiveMatrix", 16), BB.addUniform("lightmapMatrix", 16), BB.addUniform("reflectivityMatrix", 16), BB.addUniform("microSurfaceSamplerMatrix", 16), BB.addUniform("bumpMatrix", 16), BB.addUniform("vTangentSpaceParams", 2), BB.addUniform("vAlbedoColor", 4), BB.addUniform("baseWeight", 1), BB.addUniform("baseDiffuseRoughness", 1), BB.addUniform("vLightingIntensity", 4), BB.addUniform("pointSize", 1), BB.addUniform("vReflectivityColor", 4), BB.addUniform("vEmissiveColor", 3), BB.addUniform("vAmbientColor", 3), BB.addUniform("vDebugMode", 2), BB.addUniform("vMetallicReflectanceFactors", 4), BB.addUniform("vMetallicReflectanceInfos", 2), BB.addUniform("metallicReflectanceMatrix", 16), BB.addUniform("vReflectanceInfos", 2), BB.addUniform("reflectanceMatrix", 16), BB.addUniform("cameraInfo", 4), BB.addUniform("vTextureRepetitionHexTilingParams", 4), (0, VB.ob)(BB, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(BB, IB, ZB) {
          const TB = this.JR(),
            JB = ZB.materialDefines;
          if (!JB) return;
          const oB = ZB.effect;
          if (!oB) return;
          this._activeEffect = oB, IB.getMeshUniformBuffer().bindToEffect(oB, "Mesh"), IB.transferToEffect(BB);
          const GB = TB.PN();
          this._uniformBuffer.bindToEffect(oB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, TB, IB, BB, this.isFrozen), FI.b.Bind(GB.currentRenderPassId, this._activeEffect, IB, BB, this);
          const vB = TB.activeCamera;
          vB ? this._uniformBuffer.updateFloat4("cameraInfo", vB.minZ, vB.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const kB = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", kB[0], kB[1], kB[2], kB[3]), this._eventInfo.subMesh = ZB, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), JB.OBJECTSPACE_NORMALMAP && (BB.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const cB = this._mustRebind(TB, oB, ZB, IB.visibility),
            nB = GB._features.needToAlwaysBindUniformBuffers;
          (0, VB.e)(IB, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, hI.c)(this._activeEffect, this._vertexPullingMetadata);
          let hB = null;
          const zB = this._uniformBuffer;
          if (cB) {
            if (this.bindViewProjection(oB), hB = this._getReflectionTexture(), !zB.useUbo || !this.isFrozen || !zB.isSync || ZB._drawWrapper._forceRebindOnNextCall) {
              if (TB.texturesEnabled && (this._albedoTexture && DB.e.DiffuseTextureEnabled && (zB.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, VB.y)(this._albedoTexture, zB, "albedo")), this._baseWeightTexture && DB.e.BaseWeightTextureEnabled && (zB.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, VB.y)(this._baseWeightTexture, zB, "baseWeight")), this._baseDiffuseRoughnessTexture && DB.e.BaseDiffuseRoughnessTextureEnabled && (zB.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, VB.y)(this._baseDiffuseRoughnessTexture, zB, "baseDiffuseRoughness")), this._ambientTexture && DB.e.AmbientTextureEnabled && (zB.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, VB.y)(this._ambientTexture, zB, "ambient")), this._opacityTexture && DB.e.OpacityTextureEnabled && (zB.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, VB.y)(this._opacityTexture, zB, "opacity")), this._emissiveTexture && DB.e.EmissiveTextureEnabled && (zB.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, VB.y)(this._emissiveTexture, zB, "emissive")), this._lightmapTexture && DB.e.LightmapTextureEnabled && (zB.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, VB.y)(this._lightmapTexture, zB, "lightmap")), DB.e.SpecularTextureEnabled && (this._metallicTexture ? (zB.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, VB.y)(this._metallicTexture, zB, "reflectivity")) : this._reflectivityTexture && (zB.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, VB.y)(this._reflectivityTexture, zB, "reflectivity")), this._metallicReflectanceTexture && (zB.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, VB.y)(this._metallicReflectanceTexture, zB, "metallicReflectance")), this._reflectanceTexture && JB.REFLECTANCE && (zB.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, VB.y)(this._reflectanceTexture, zB, "reflectance")), this._microSurfaceTexture && (zB.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, VB.y)(this._microSurfaceTexture, zB, "microSurfaceSampler"))), this._bumpTexture && GB.getCaps().standardDerivatives && DB.e.BumpTextureEnabled && !this._disableBumpMap && (zB.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, VB.y)(this._bumpTexture, zB, "bump"), TB._mirroredCameraPosition ? zB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : zB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, VB.j)(TB, JB, zB, this._reflectionColor, hB, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && zB.updateFloat("pointSize", this.pointSize), JB.METALLICWORKFLOW) {
                tB.k.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, tB.k.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const BB = this.subSurface?._indexOfRefraction ?? 1.5,
                  IB = 1;
                tB.k.Color4[0].b = BB;
                const ZB = Math.pow((BB - IB) / (BB + IB), 2);
                tB.k.Color4[0].a = ZB, zB.updateDirectColor4("vReflectivityColor", tB.k.Color4[0]), zB.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else zB.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              zB.updateColor3("vEmissiveColor", DB.e.EmissiveTextureEnabled ? this._emissiveColor : tB.c.BlackReadOnly), !JB.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? zB.updateColor4("vAlbedoColor", this._albedoColor, 1) : zB.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), zB.updateFloat("baseWeight", this._baseWeight), zB.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * TB.environmentIntensity, this._lightingInfos.w = this._specularIntensity, zB.updateVector4("vLightingIntensity", this._lightingInfos), TB.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), zB.updateColor3("vAmbientColor", this._globalAmbientColor), zB.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            TB.texturesEnabled && (this._albedoTexture && DB.e.DiffuseTextureEnabled && zB.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && DB.e.BaseWeightTextureEnabled && zB.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && DB.e.BaseDiffuseRoughnessTextureEnabled && zB.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && DB.e.AmbientTextureEnabled && zB.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && DB.e.OpacityTextureEnabled && zB.setTexture("opacitySampler", this._opacityTexture), (0, VB.n)(TB, JB, zB, hB, this.realTimeFiltering), JB.ENVIRONMENTBRDF && zB.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && DB.e.EmissiveTextureEnabled && zB.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && DB.e.LightmapTextureEnabled && zB.setTexture("lightmapSampler", this._lightmapTexture), DB.e.SpecularTextureEnabled && (this._metallicTexture ? zB.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && zB.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && zB.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && JB.REFLECTANCE && zB.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && zB.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && GB.getCaps().standardDerivatives && DB.e.BumpTextureEnabled && !this._disableBumpMap && zB.setTexture("bumpSampler", this._bumpTexture)), this.JR().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(IB) && this.JR().depthPeelingRenderer.bind(oB), this._eventInfo.subMesh = ZB, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, nI.d)(this._activeEffect, this, TB), this.bindEyePosition(oB)
          } else nB && (this._needToBindSceneUbo = !0);
          !cB && this.isFrozen && !nB || !TB.lightsEnabled || this._disableLighting || (0, VB.p)(TB, IB, this._activeEffect, JB, this._maxSimultaneousLights), !cB && this.isFrozen || ((TB.fogEnabled && IB.applyFog && TB.fogMode !== mB.e.FOGMODE_NONE || hB || this.subSurface.refractionTexture || IB.receiveShadows || JB.PREPASS || JB.CLUSTLIGHT_BATCH) && this.bindView(oB), (0, VB.h)(TB, IB, this._activeEffect, !0), JB.NUM_MORPH_INFLUENCERS && (0, VB.t)(IB, this._activeEffect), JB.BAKED_VERTEX_ANIMATION_TEXTURE && IB.bakedVertexAnimationManager?.bind(oB, JB.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, VB.s)(JB, this._activeEffect, TB)), this._afterBind(IB, this._activeEffect, ZB), zB.update()
        }
        getAnimatables() {
          const BB = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && BB.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && BB.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && BB.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && BB.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && BB.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && BB.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && BB.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? BB.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && BB.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && BB.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && BB.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && BB.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && BB.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && BB.push(this._microSurfaceTexture), BB
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.JR().environmentTexture
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
          const BB = this.JR().enableSubSurfaceForPrePass();
          return BB && (BB.enabled = !0), !0
        }
        dispose(BB, IB) {
          this._breakShaderLoadedCheck = !0, IB && (this._environmentBRDFTexture && this.JR().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(BB, IB)
        }
      }, IB = new WeakMap, (() => {
        const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(JB[Symbol.metadata] ?? null) : void 0;
        TB = [(0, YB.e)("_markAllSubMeshesAsMiscDirty")], (0, OB.j)(BB, null, TB, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "debugMode" in BB,
            get: BB => BB.debugMode,
            set: (BB, IB) => {
              BB.debugMode = IB
            }
          },
          metadata: IB
        }, GB, vB), IB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IB
        })
      })(), BB.PBRMATERIAL_OPAQUE = oB.e.MATERIAL_OPAQUE, BB.PBRMATERIAL_ALPHATEST = oB.e.MATERIAL_ALPHATEST, BB.PBRMATERIAL_ALPHABLEND = oB.e.MATERIAL_ALPHABLEND, BB.PBRMATERIAL_ALPHATESTANDBLEND = oB.e.MATERIAL_ALPHATESTANDBLEND, BB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, BB.LIGHTFALLOFF_PHYSICAL = 0, BB.LIGHTFALLOFF_GLTF = 1, BB.LIGHTFALLOFF_STANDARD = 2, BB.ForceGLSL = !1, BB._ShaderLoader = new zI.d((() => [Promise.all([ZB.e(322), ZB.e(333)]).then((() => ZB(61545))), Promise.all([ZB.e(327), ZB.e(323), ZB.e(384), ZB.e(336), ZB.e(383)]).then((() => ZB(61566)))]), (() => [Promise.all([ZB.e(341), ZB.e(343), ZB.e(350)]).then((() => ZB(61644))), Promise.all([ZB.e(341), ZB.e(344), ZB.e(387), ZB.e(354), ZB.e(386)]).then((() => ZB(61668)))])), BB
    })();
    Object.getOwnPropertyDescriptor(QI.prototype, "decalMap") || Object.defineProperty(QI.prototype, "decalMap", (0, yI.g)("PBRBaseMaterial", "decalMap")), (0, ZB(41869).d)();
    var sI = ZB(40085);
    var wI = ZB(40152),
      OI = ZB(41851),
      YI = ZB(39885),
      iI = ZB(39895),
      pI = ZB(40003);
    let aI = !1;
    const HI = new tB.g,
      MI = new tB.g;
    class jI extends OI.c {
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
          for (let IB = 0; IB < this._textures.length; IB++) this._textures[IB].wrapU = BB
      }
      set wrapV(BB) {
        if (this._textures)
          for (let IB = 0; IB < this._textures.length; IB++) this._textures[IB].wrapV = BB
      }
      constructor(BB, IB, ZB, TB, JB, oB) {
        const GB = !(!JB || !JB.generateMipMaps) && JB.generateMipMaps,
          vB = !(!JB || !JB.generateDepthTexture) && JB.generateDepthTexture,
          kB = JB && JB.depthTextureFormat ? JB.depthTextureFormat : 15,
          cB = !JB || void 0 === JB.doNotChangeAspectRatio || JB.doNotChangeAspectRatio,
          nB = !(!JB || !JB.drawOnlyOnFirstAttachmentByDefault) && JB.drawOnlyOnFirstAttachmentByDefault;
        if (super(BB, IB, TB, GB, cB, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), aI || (aI = !0, iI.ThinEngine.prototype.restoreSingleAttachment = function() {
            const BB = this._gl;
            this.bindAttachments([BB.BACK])
          }, iI.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const BB = this._gl;
            this.bindAttachments([BB.COLOR_ATTACHMENT0])
          }, iI.ThinEngine.prototype.buildTextureLayout = function(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const ZB = this._gl,
              TB = [];
            if (IB) TB.push(ZB.BACK);
            else
              for (let JB = 0; JB < BB.length; JB++) BB[JB] ? TB.push(ZB["COLOR_ATTACHMENT" + JB]) : TB.push(ZB.NONE);
            return TB
          }, iI.ThinEngine.prototype.bindAttachments = function(BB) {
            const IB = this._gl,
              ZB = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, ZB)
              for (let TB = 0; TB < BB.length; TB++) BB[TB] !== IB.NONE && ZB[TB] && (0, pI.g)(ZB[TB].format) && (this._integerMRTAttachmentsMask |= 1 << TB);
            IB.drawBuffers(BB)
          }, iI.ThinEngine.prototype.clearAttachments = function(BB, IB, ZB, TB) {
            let JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const GB = this._currentRenderTarget?.textures;
            let vB = !1;
            if (ZB && BB && GB)
              for (let kB = 0; kB < IB.length; kB++) {
                const BB = GB[kB];
                if (IB[kB] !== this._gl.NONE && BB && (0, pI.g)(BB.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  vB = !0;
                  break
                }
              }
            if (!vB || !BB || !GB) return this.bindAttachments(IB), void this.clear(BB, ZB, TB, JB, oB);
            this.bindAttachments(IB), this._applyColorWriteState();
            for (let kB = 0; kB < IB.length; kB++) {
              const ZB = GB[kB];
              if (IB[kB] !== this._gl.NONE && ZB) {
                let IB = BB;
                if ((0, pI.g)(ZB.format)) {
                  const TB = (0, pI.i)(ZB.type);
                  IB = TB ? HI : MI;
                  const JB = TB ? 255 : 1;
                  IB.r = Math.round(BB.r * JB), IB.g = Math.round(BB.g * JB), IB.b = Math.round(BB.b * JB), IB.a = Math.round(BB.a * JB)
                }
                this._clearColorAttachment(kB, IB, ZB.format, ZB.type)
              }
            }
            if (TB || JB) {
              const BB = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, TB, JB, oB)
              } finally {
                this._integerMRTAttachmentsMask = BB
              }
            }
          }, iI.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZB = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, BB.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(BB), IB || this.generateMipMapsMultiFramebuffer(BB), ZB && (BB._MSAAFramebuffer && this._bindUnboundFramebuffer(BB._framebuffer), ZB()), this._bindUnboundFramebuffer(null)
          }, iI.ThinEngine.prototype.createMultipleRenderTarget = function(BB, IB) {
            let ZB, TB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              JB = !1,
              oB = !0,
              GB = !1,
              vB = !1,
              kB = 1,
              cB = 1,
              nB = [],
              hB = [],
              zB = [],
              FB = [],
              NB = [],
              gB = [],
              qB = [],
              yB = [],
              UB = [],
              WB = !1;
            const dB = this._createHardwareRenderTargetWrapper(!0, !1, BB);
            void 0 !== IB && (JB = void 0 !== IB.generateMipMaps && IB.generateMipMaps, oB = void 0 === IB.generateDepthBuffer || IB.generateDepthBuffer, GB = void 0 !== IB.generateStencilBuffer && IB.generateStencilBuffer, vB = void 0 !== IB.generateDepthTexture && IB.generateDepthTexture, kB = IB.GvB ?? 1, cB = IB.samples ?? cB, nB = IB.types || nB, hB = IB.samplingModes || hB, zB = IB.useSRGBBuffers || zB, FB = IB.formats || FB, NB = IB.targetTypes || NB, gB = IB.faceIndex || gB, qB = IB.layerIndex || qB, yB = IB.layerCounts || yB, UB = IB.labels || UB, WB = IB.dontCreateTextures ?? !1, this.cg > 1 && (13 === IB.depthTextureFormat || 17 === IB.depthTextureFormat || 16 === IB.depthTextureFormat || 14 === IB.depthTextureFormat || 18 === IB.depthTextureFormat) && (ZB = IB.depthTextureFormat)), void 0 === ZB && (ZB = GB ? 13 : 14);
            const CB = this._gl,
              QB = this._currentFramebuffer,
              sB = CB.createFramebuffer();
            this._bindUnboundFramebuffer(sB);
            const wB = BB.width ?? BB,
              OB = BB.height ?? BB,
              YB = [],
              pB = [],
              aB = this.cg > 1 && (13 === ZB || 17 === ZB || 18 === ZB);
            dB.label = IB?.label ?? "MultiRenderTargetWrapper", dB._framebuffer = sB, dB._generateDepthBuffer = vB || oB, dB._generateStencilBuffer = vB ? aB : GB, dB._depthStencilBuffer = this._setupFramebufferDepthAttachments(dB._generateStencilBuffer, dB._generateDepthBuffer, wB, OB, 1, ZB), dB._attachments = pB;
            for (let HB = 0; HB < kB; HB++) {
              let BB = hB[HB] || 3,
                IB = nB[HB] || 0,
                ZB = zB[HB] || !1;
              const TB = FB[HB] || 5,
                oB = NB[HB] || 3553,
                GB = yB[HB] ?? 1;
              (1 !== IB || this._caps.textureFloatLinearFiltering) && (2 !== IB || this._caps.textureHalfFloatLinearFiltering) || (BB = 1);
              const vB = this._getSamplingParameters(BB, JB);
              1 !== IB || this._caps.textureFloat || (IB = 0, iB.d.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), ZB = ZB && this._caps.supportSRGBBuffers && (this.cg > 1 || this.isWebGPU);
              const kB = this.cg > 1,
                cB = CB[kB ? "COLOR_ATTACHMENT" + HB : "COLOR_ATTACHMENT" + HB + "_WEBGL"];
              if (pB.push(cB), -1 === oB || WB) continue;
              const gB = new YI.b(this, 6);
              YB[HB] = gB, CB.activeTexture(CB["TEXTURE" + HB]), CB.bindTexture(oB, gB._hardwareTexture.underlyingResource), CB.texParameteri(oB, CB.TEXTURE_MAG_FILTER, vB.mag), CB.texParameteri(oB, CB.TEXTURE_MIN_FILTER, vB.min), CB.texParameteri(oB, CB.TEXTURE_WRAP_S, CB.CLAMP_TO_EDGE), CB.texParameteri(oB, CB.TEXTURE_WRAP_T, CB.CLAMP_TO_EDGE);
              const qB = this._getRGBABufferInternalSizedFormat(IB, TB, ZB),
                QB = this._getInternalFormat(TB),
                sB = this._getWebGLTextureType(IB);
              if (!kB || 35866 !== oB && 32879 !== oB)
                if (34067 === oB) {
                  for (let BB = 0; BB < 6; BB++) CB.texImage2D(CB.TEXTURE_CUBE_MAP_POSITIVE_X + BB, 0, qB, wB, OB, 0, QB, sB, null);
                  gB.isCube = !0
                } else CB.texImage2D(CB.TEXTURE_2D, 0, qB, wB, OB, 0, QB, sB, null);
              else 35866 === oB ? gB.is2DArray = !0 : gB.is3D = !0, gB.baseDepth = gB.depth = GB, CB.texImage3D(oB, 0, qB, wB, OB, GB, 0, QB, sB, null);
              JB && CB.generateMipmap(oB), this._bindTextureDirectly(oB, null), gB.baseWidth = wB, gB.baseHeight = OB, gB.width = wB, gB.height = OB, gB.isReady = !0, gB.samples = 1, gB.generateMipMaps = JB, gB.samplingMode = BB, gB.type = IB, gB._useSRGBBuffer = ZB, gB.format = TB, gB.label = UB[HB] ?? dB.label + "-Texture" + HB, this._internalTexturesCache.push(gB)
            }
            if (vB && this._caps.depthTextureExtension && !WB) {
              const BB = new YI.b(this, 14);
              let IB = 5,
                TB = CB.DEPTH_COMPONENT16,
                oB = CB.DEPTH_COMPONENT,
                GB = CB.UNSIGNED_SHORT,
                vB = CB.DEPTH_ATTACHMENT;
              this.cg < 2 ? TB = CB.DEPTH_COMPONENT : 14 === ZB ? (IB = 1, GB = CB.FLOAT, TB = CB.DEPTH_COMPONENT32F) : 18 === ZB ? (IB = 0, GB = CB.FLOAT_32_UNSIGNED_INT_24_8_REV, TB = CB.DEPTH32F_STENCIL8, oB = CB.DEPTH_STENCIL, vB = CB.DEPTH_STENCIL_ATTACHMENT) : 16 === ZB ? (IB = 0, GB = CB.UNSIGNED_INT, TB = CB.DEPTH_COMPONENT24, vB = CB.DEPTH_ATTACHMENT) : 13 !== ZB && 17 !== ZB || (IB = 12, GB = CB.UNSIGNED_INT_24_8, TB = CB.DEPTH24_STENCIL8, oB = CB.DEPTH_STENCIL, vB = CB.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(CB.TEXTURE_2D, BB, !0), CB.texParameteri(CB.TEXTURE_2D, CB.TEXTURE_MAG_FILTER, CB.NEAREST), CB.texParameteri(CB.TEXTURE_2D, CB.TEXTURE_MIN_FILTER, CB.NEAREST), CB.texParameteri(CB.TEXTURE_2D, CB.TEXTURE_WRAP_S, CB.CLAMP_TO_EDGE), CB.texParameteri(CB.TEXTURE_2D, CB.TEXTURE_WRAP_T, CB.CLAMP_TO_EDGE), CB.texImage2D(CB.TEXTURE_2D, 0, TB, wB, OB, 0, oB, GB, null), CB.framebufferTexture2D(CB.FRAMEBUFFER, vB, CB.TEXTURE_2D, BB._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(CB.TEXTURE_2D, null), dB._depthStencilTexture = BB, dB._depthStencilTextureWithStencil = aB, BB.baseWidth = wB, BB.baseHeight = OB, BB.width = wB, BB.height = OB, BB.isReady = !0, BB.samples = 1, BB.generateMipMaps = JB, BB.samplingMode = 1, BB.format = ZB, BB.type = IB, BB.label = dB.label + "-DepthStencil", YB[kB] = BB, this._internalTexturesCache.push(BB)
            }
            if (dB.setTextures(YB), TB && CB.drawBuffers(pB), this._bindUnboundFramebuffer(QB), dB.setLayerAndFaceIndices(qB, gB), this.resetTextureCache(), WB) {
              if (cB > 1) {
                const BB = CB.createFramebuffer();
                if (!BB) throw new Error("Unable to create multi sampled framebuffer");
                dB._samples = cB, dB._MSAAFramebuffer = BB, kB > 0 && TB && (this._bindUnboundFramebuffer(BB), CB.drawBuffers(pB), this._bindUnboundFramebuffer(QB))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(dB, cB, TB);
            return dB
          }, iI.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(BB, IB) {
            let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.cg < 2 || !BB) return 1;
            if (BB.samples === IB) return IB;
            const TB = this._gl;
            IB = Math.min(IB, this.getCaps().maxMSAASamples), BB._depthStencilBuffer && (TB.deleteRenderbuffer(BB._depthStencilBuffer), BB._depthStencilBuffer = null), BB._MSAAFramebuffer && (TB.deleteFramebuffer(BB._MSAAFramebuffer), BB._MSAAFramebuffer = null);
            const JB = BB._attachments.length;
            for (let GB = 0; GB < JB; GB++) {
              const IB = BB.textures[GB]._hardwareTexture;
              IB?.releaseMSAARenderBuffers()
            }
            if (IB > 1 && "function" === typeof TB.renderbufferStorageMultisample) {
              const oB = TB.createFramebuffer();
              if (!oB) throw new Error("Unable to create multi sampled framebuffer");
              BB._MSAAFramebuffer = oB, this._bindUnboundFramebuffer(oB);
              const GB = [];
              for (let ZB = 0; ZB < JB; ZB++) {
                const JB = BB.textures[ZB],
                  oB = JB._hardwareTexture,
                  vB = TB[this.cg > 1 ? "COLOR_ATTACHMENT" + ZB : "COLOR_ATTACHMENT" + ZB + "_WEBGL"],
                  kB = this._createRenderBuffer(JB.width, JB.height, IB, -1, this._getRGBABufferInternalSizedFormat(JB.type, JB.format, JB._useSRGBBuffer), vB);
                if (!kB) throw new Error("Unable to create multi sampled framebuffer");
                oB.addMSAARenderBuffer(kB), JB.samples = IB, GB.push(vB)
              }
              ZB && TB.drawBuffers(GB)
            } else this._bindUnboundFramebuffer(BB._framebuffer);
            const oB = BB._depthStencilTexture ? BB._depthStencilTexture.format : void 0;
            return BB._depthStencilBuffer = this._setupFramebufferDepthAttachments(BB._generateStencilBuffer, BB._generateDepthBuffer, BB.width, BB.height, IB, oB), this._bindUnboundFramebuffer(null), BB._samples = IB, IB
          }, iI.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(BB) {
            const IB = BB,
              ZB = this._gl;
            if (IB.isMulti)
              for (let TB = 0; TB < IB._attachments.length; TB++) {
                const BB = IB.textures[TB];
                !BB?.generateMipMaps || BB?.isCube || BB?.is3D || (this._bindTextureDirectly(ZB.TEXTURE_2D, BB, !0), ZB.generateMipmap(ZB.TEXTURE_2D), this._bindTextureDirectly(ZB.TEXTURE_2D, null))
              }
          }, iI.ThinEngine.prototype.resolveMultiFramebuffer = function(BB) {
            const IB = BB,
              ZB = this._gl;
            if (!IB._MSAAFramebuffer || !IB.isMulti) return;
            let TB = IB.resolveMSAAColors ? ZB.COLOR_BUFFER_BIT : 0;
            TB |= IB._generateDepthBuffer && IB.resolveMSAADepth ? ZB.DEPTH_BUFFER_BIT : 0, TB |= IB._generateStencilBuffer && IB.resolveMSAAStencil ? ZB.STENCIL_BUFFER_BIT : 0;
            const JB = IB._attachments,
              oB = JB.length;
            ZB.bindFramebuffer(ZB.READ_FRAMEBUFFER, IB._MSAAFramebuffer), ZB.bindFramebuffer(ZB.DRAW_FRAMEBUFFER, IB._framebuffer);
            for (let GB = 0; GB < oB; GB++) {
              const BB = IB.textures[GB];
              for (let IB = 0; IB < oB; IB++) JB[IB] = ZB.NONE;
              JB[GB] = ZB[this.cg > 1 ? "COLOR_ATTACHMENT" + GB : "COLOR_ATTACHMENT" + GB + "_WEBGL"], ZB.readBuffer(JB[GB]), ZB.drawBuffers(JB), ZB.blitFramebuffer(0, 0, BB.width, BB.height, 0, 0, BB.width, BB.height, TB, ZB.NEAREST)
            }
            for (let GB = 0; GB < oB; GB++) JB[GB] = ZB[this.cg > 1 ? "COLOR_ATTACHMENT" + GB : "COLOR_ATTACHMENT" + GB + "_WEBGL"];
            ZB.drawBuffers(JB), ZB.bindFramebuffer(this._gl.FRAMEBUFFER, IB._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = oB;
        const hB = [],
          zB = [],
          FB = [],
          NB = [],
          gB = [],
          qB = [],
          yB = [],
          UB = [];
        this._initTypes(ZB, hB, zB, FB, NB, gB, qB, yB, UB, JB);
        const WB = !JB || void 0 === JB.generateDepthBuffer || JB.generateDepthBuffer,
          dB = !(!JB || void 0 === JB.generateStencilBuffer) && JB.generateStencilBuffer,
          CB = JB && JB.samples ? JB.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: zB,
          generateMipMaps: GB,
          generateDepthBuffer: WB,
          generateStencilBuffer: dB,
          generateDepthTexture: vB,
          depthTextureFormat: kB,
          types: hB,
          GvB: ZB,
          useSRGBBuffers: FB,
          samples: CB,
          formats: NB,
          targetTypes: gB,
          faceIndex: qB,
          layerIndex: yB,
          layerCounts: UB,
          labels: oB,
          label: BB
        }, this._count = ZB, this._drawOnlyOnFirstAttachmentByDefault = nB, ZB > 0 && (this._createInternalTextures(), this._createTextures(oB))
      }
      _initTypes(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB) {
        for (let nB = 0; nB < BB; nB++) cB && cB.types && void 0 !== cB.types[nB] ? IB.push(cB.types[nB]) : IB.push(cB && cB.defaultType ? cB.defaultType : 0), cB && cB.samplingModes && void 0 !== cB.samplingModes[nB] ? ZB.push(cB.samplingModes[nB]) : ZB.push(aB.e.BILINEAR_SAMPLINGMODE), cB && cB.useSRGBBuffers && void 0 !== cB.useSRGBBuffers[nB] ? TB.push(cB.useSRGBBuffers[nB]) : TB.push(!1), cB && cB.formats && void 0 !== cB.formats[nB] ? JB.push(cB.formats[nB]) : JB.push(5), cB && cB.targetTypes && void 0 !== cB.targetTypes[nB] ? oB.push(cB.targetTypes[nB]) : oB.push(3553), cB && cB.faceIndex && void 0 !== cB.faceIndex[nB] ? GB.push(cB.faceIndex[nB]) : GB.push(0), cB && cB.layerIndex && void 0 !== cB.layerIndex[nB] ? vB.push(cB.layerIndex[nB]) : vB.push(0), cB && cB.layerCounts && void 0 !== cB.layerCounts[nB] ? kB.push(cB.layerCounts[nB]) : kB.push(1)
      }
      _createInternaTextureIndexMapping() {
        const BB = {},
          IB = [];
        if (!this._renderTarget) return IB;
        const ZB = this._renderTarget.textures;
        for (let TB = 0; TB < ZB.length; TB++) {
          const JB = ZB[TB];
          if (!JB) continue;
          const oB = BB[JB.uniqueId];
          void 0 !== oB ? IB[TB] = oB : BB[JB.uniqueId] = TB
        }
        return IB
      }
      _rebuild() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || BB) return;
        const TB = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), IB && (this._releaseTextures(), this._createTextures(ZB));
        const JB = this._renderTarget.textures;
        for (let oB = 0; oB < JB.length; oB++) {
          const BB = this._textures[oB];
          void 0 !== TB[oB] && this._renderTarget.setTexture(JB[TB[oB]], oB), BB._texture = JB[oB], BB._texture && (BB._noMipmap = !BB._texture.useMipMaps, BB._useSRGBBuffer = BB._texture._useSRGBBuffer)
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
        const IB = this._renderTarget.textures;
        this._textures = [];
        for (let ZB = 0; ZB < IB.length; ZB++) {
          const TB = new aB.e(null, this.JR());
          BB?.[ZB] && (TB.name = BB[ZB]), TB._texture = IB[ZB], TB._texture && (TB._noMipmap = !TB._texture.useMipMaps, TB._useSRGBBuffer = TB._texture._useSRGBBuffer), this._textures.push(TB)
        }
      }
      setInternalTexture(BB, IB) {
        let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === IB && (this._texture = BB), this.renderTarget.setTexture(BB, IB, ZB), this.textures[IB] || (this.textures[IB] = new aB.e(null, this.JR()), this.textures[IB].name = this._textureNames?.[IB] ?? this.textures[IB].name), this.textures[IB]._texture = BB, this.textures[IB]._noMipmap = !BB.useMipMaps, this.textures[IB]._useSRGBBuffer = BB._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[IB] = BB.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[IB] = BB.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[IB] = BB._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[IB])) {
          let ZB;
          ZB = BB.is2DArray ? 35866 : BB.isCube ? 34067 : BB.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[IB] = ZB
        }
      }
      setLayerAndFaceIndex(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[BB] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[BB] = IB), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[BB] = ZB), this.renderTarget.setLayerAndFaceIndex(BB, IB, ZB))
      }
      setLayerAndFaceIndices(BB, IB) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = BB, this._multiRenderTargetOptions.faceIndex = IB, this.renderTarget.setLayerAndFaceIndices(BB, IB))
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
      updateCount(BB, IB, ZB) {
        this._multiRenderTargetOptions.GvB = BB, this._count = BB;
        const TB = [],
          JB = [],
          oB = [],
          GB = [],
          vB = [],
          kB = [],
          cB = [],
          nB = [];
        this._textureNames = ZB, this._initTypes(BB, TB, JB, oB, GB, vB, kB, cB, nB, IB), this._multiRenderTargetOptions.types = TB, this._multiRenderTargetOptions.samplingModes = JB, this._multiRenderTargetOptions.useSRGBBuffers = oB, this._multiRenderTargetOptions.formats = GB, this._multiRenderTargetOptions.targetTypes = vB, this._multiRenderTargetOptions.faceIndex = kB, this._multiRenderTargetOptions.layerIndex = cB, this._multiRenderTargetOptions.layerCounts = nB, this._multiRenderTargetOptions.labels = ZB, this._rebuild(!1, !0, ZB)
      }
      _unbindFrameBuffer(BB, IB) {
        this._renderTarget && BB.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(IB)
        }))
      }
      dispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), BB ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const BB = this._renderTarget?.textures;
        if (BB) {
          for (let IB = BB.length - 1; IB >= 0; IB--) this._textures[IB]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var PI = ZB(40215);
    class RI {
      constructor(BB) {
        this.name = PI.c.NAME_GEOMETRYBUFFERRENDERER, this.lg = BB
      }
      register() {
        this.lg._gatherRenderTargetsStage.registerStep(PI.c.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(BB) {
        this.lg._geometryBufferRenderer && BB.push(this.lg._geometryBufferRenderer.getGBuffer())
      }
    }
    let rI = !1;
    var mI;
    ! function(BB) {
      BB[BB.Small = 0] = "Small", BB[BB.Medium = 1] = "Medium", BB[BB.Large = 2] = "Large", BB[BB.ExtraLarge = 3] = "ExtraLarge"
    }(mI || (mI = {}));
    const XI = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      LI = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class eI {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(BB) {
        if (BB && this._enableMeshBlendTag && !this._scene.PN().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
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
      _forceTextureType(BB, IB) {
        BB === eI.POSITION_TEXTURE_TYPE ? (this._positionIndex = IB, this._enablePosition = !0) : BB === eI.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = IB, this._enableVelocity = !0) : BB === eI.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = IB, this._enableVelocityLinear = !0) : BB === eI.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = IB, this._enableReflectivity = !0) : BB === eI.DEPTH_TEXTURE_TYPE ? (this._depthIndex = IB, this._enableDepth = !0) : BB === eI.NORMAL_TEXTURE_TYPE ? (this._normalIndex = IB, this._enableNormal = !0) : BB === eI.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = IB, this._enableScreenspaceDepth = !0) : BB === eI.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = IB, this._enableIrradiance = !0) : BB === eI.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = IB, this._enableObjectId = !0) : BB === eI.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = IB, this._enableMeshBlendTag = !0)
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
          case eI.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case eI.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case eI.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case eI.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case eI.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case eI.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case eI.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case eI.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case eI.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case eI.MESH_BLEND_TAG_TEXTURE_TYPE:
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
          const BB = this._scene.PN(),
            IB = Math.min(BB.getCaps().maxDrawBuffers ?? 1, 8),
            ZB = this._assignRenderTargetIndices()[0] + 1;
          if (BB.getCaps().drawBuffersExtension && ZB > IB) throw new Error(`GeometryBufferRenderer: ${ZB} color attachments were requested, but this engine supports at most ${IB}`)
        }
        this._enableObjectId = BB, BB || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(BB) {
        if (this._enableMeshBlendTag !== BB) {
          if (BB) {
            const BB = this._scene.PN();
            if (! function(BB) {
                return "NATIVE" !== BB.shaderPlatformName && (BB.isWebGPU || 2 === BB.cg)
              }(BB)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !BB.isWebGPU && !BB.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const IB = Math.min(BB.getCaps().maxDrawBuffers ?? 1, 8),
                ZB = this._assignRenderTargetIndices()[0] + 1;
              if (BB.getCaps().drawBuffersExtension && ZB > IB) throw new Error(`GeometryBufferRenderer: ${ZB} color attachments were requested, but this engine supports at most ${IB}`)
            }
          }
          this._enableMeshBlendTag = BB, BB || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get lg() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          TB = arguments.length > 3 ? arguments[3] : void 0;
        var JB;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new tB.g(0, 0, 0, 0), this._clearDepthColor = new tB.g(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = BB, this._ratioOrDimensions = IB, this._useUbo = BB.PN().supportsUniformBuffers, this._depthFormat = ZB, this._textureTypesAndFormats = TB || {}, this._initShaderSourceAsync(), JB = eI, rI || (rI = !0, Object.defineProperty(mB.e.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(BB) {
            BB && BB.isSupported && (this._geometryBufferRenderer = BB)
          },
          enumerable: !0,
          configurable: !0
        }), mB.e.prototype.enableGeometryBufferRenderer = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            ZB = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new JB(this, BB, IB, ZB), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, mB.e.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, JB._SceneComponentInitialization = BB => {
          let IB = BB._getComponent(PI.c.NAME_GEOMETRYBUFFERRENDERER);
          IB || (IB = new RI(BB), BB.yTB(IB))
        }), eI._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.PN().isWebGPU && !eI.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([ZB.e(342).then((() => ZB(61849))), Promise.all([ZB.e(341), ZB.e(353)]).then((() => ZB(61852)))])) : await Promise.all([ZB.e(325).then((() => ZB(61854))), ZB.e(324).then((() => ZB(61857)))]), this._shadersLoaded = !0
      }
      isReady(BB, IB) {
        if (!this._shadersLoaded) return !1;
        const ZB = BB.LN();
        if (ZB && ZB.disableDepthWrite) return !1;
        if (function(BB) {
            return BB._isGaussianSplatting || "GaussianSplattingMesh" === (IB = BB.getClassName()) || "GaussianSplattingStream" === IB;
            var IB
          }(BB.getMesh())) return !1;
        const TB = [],
          JB = [LB.i.PositionKind],
          oB = BB.getMesh();
        oB.isVerticesDataPresent(LB.i.NormalKind) && (TB.push("#define HAS_NORMAL_ATTRIBUTE"), JB.push(LB.i.NormalKind));
        let GB = !1,
          vB = !1;
        if (ZB) {
          let BB = !1;
          if (ZB.needAlphaTestingForMesh(oB) && ZB.getAlphaTestTexture() && (TB.push("#define ALPHATEST"), TB.push(`#define ALPHATEST_UV${ZB.getAlphaTestTexture().coordinatesIndex+1}`), BB = !0), (ZB.bumpTexture || ZB.normalTexture || ZB.geometryNormalTexture) && DB.e.BumpTextureEnabled) {
            const IB = ZB.bumpTexture || ZB.normalTexture || ZB.geometryNormalTexture;
            TB.push("#define BUMP"), TB.push(`#define BUMP_UV${IB.coordinatesIndex+1}`), BB = !0
          }
          if (this._enableReflectivity) {
            let IB = !1;
            if ("PBRMetallicRoughnessMaterial" === ZB.getClassName()) ZB.metallicRoughnessTexture && (TB.push("#define ORMTEXTURE"), TB.push(`#define REFLECTIVITY_UV${ZB.metallicRoughnessTexture.coordinatesIndex+1}`), TB.push("#define METALLICWORKFLOW"), BB = !0, IB = !0), null != ZB.metallic && (TB.push("#define METALLIC"), TB.push("#define METALLICWORKFLOW"), IB = !0), null != ZB.roughness && (TB.push("#define ROUGHNESS"), TB.push("#define METALLICWORKFLOW"), IB = !0), IB && (ZB.baseTexture && (TB.push("#define ALBEDOTEXTURE"), TB.push(`#define ALBEDO_UV${ZB.baseTexture.coordinatesIndex+1}`), ZB.baseTexture.gammaSpace && TB.push("#define GAMMAALBEDO"), BB = !0), ZB.baseColor && TB.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === ZB.getClassName()) ZB.specularGlossinessTexture ? (TB.push("#define SPECULARGLOSSINESSTEXTURE"), TB.push(`#define REFLECTIVITY_UV${ZB.specularGlossinessTexture.coordinatesIndex+1}`), BB = !0, ZB.specularGlossinessTexture.gammaSpace && TB.push("#define GAMMAREFLECTIVITYTEXTURE")) : ZB.specularColor && TB.push("#define REFLECTIVITYCOLOR"), null != ZB.glossiness && TB.push("#define GLOSSINESS");
            else if ("PBRMaterial" === ZB.getClassName()) ZB.metallicTexture && (TB.push("#define ORMTEXTURE"), TB.push(`#define REFLECTIVITY_UV${ZB.metallicTexture.coordinatesIndex+1}`), TB.push("#define METALLICWORKFLOW"), BB = !0, IB = !0), null != ZB.metallic && (TB.push("#define METALLIC"), TB.push("#define METALLICWORKFLOW"), IB = !0), null != ZB.roughness && (TB.push("#define ROUGHNESS"), TB.push("#define METALLICWORKFLOW"), IB = !0), IB ? (ZB.albedoTexture && (TB.push("#define ALBEDOTEXTURE"), TB.push(`#define ALBEDO_UV${ZB.albedoTexture.coordinatesIndex+1}`), ZB.albedoTexture.gammaSpace && TB.push("#define GAMMAALBEDO"), BB = !0), ZB.albedoColor && TB.push("#define ALBEDOCOLOR")) : (ZB.reflectivityTexture ? (TB.push("#define SPECULARGLOSSINESSTEXTURE"), TB.push(`#define REFLECTIVITY_UV${ZB.reflectivityTexture.coordinatesIndex+1}`), ZB.reflectivityTexture.gammaSpace && TB.push("#define GAMMAREFLECTIVITYTEXTURE"), BB = !0) : ZB.reflectivityColor && TB.push("#define REFLECTIVITYCOLOR"), null != ZB.microSurface && TB.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === ZB.getClassName()) ZB.specularTexture && (TB.push("#define REFLECTIVITYTEXTURE"), TB.push(`#define REFLECTIVITY_UV${ZB.specularTexture.coordinatesIndex+1}`), ZB.specularTexture.gammaSpace && TB.push("#define GAMMAREFLECTIVITYTEXTURE"), BB = !0), ZB.specularColor && TB.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === ZB.getClassName()) {
              const IB = ZB;
              TB.push("#define METALLIC"), TB.push("#define ROUGHNESS"), IB._useRoughnessFromMetallicTextureGreen && IB.baseMetalnessTexture ? (TB.push("#define ORMTEXTURE"), TB.push(`#define REFLECTIVITY_UV${IB.baseMetalnessTexture.coordinatesIndex+1}`), BB = !0) : IB.baseMetalnessTexture ? (TB.push("#define METALLIC_TEXTURE"), TB.push(`#define METALLIC_UV${IB.baseMetalnessTexture.coordinatesIndex+1}`), BB = !0) : IB.specularRoughnessTexture && (TB.push("#define ROUGHNESS_TEXTURE"), TB.push(`#define ROUGHNESS_UV${IB.specularRoughnessTexture.coordinatesIndex+1}`), BB = !0), IB.baseColorTexture && (TB.push("#define ALBEDOTEXTURE"), TB.push(`#define ALBEDO_UV${IB.baseColorTexture.coordinatesIndex+1}`), IB.baseColorTexture.gammaSpace && TB.push("#define GAMMAALBEDO"), BB = !0), IB.baseColor && TB.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (TB.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === ZB.getClassName())) {
            const IB = ZB;
            IB.subsurfaceWeight > 0 && IB.subsurfaceWeightTexture && (TB.push("#define SUBSURFACE_WEIGHT"), TB.push(`#define SUBSURFACEWEIGHT_UV${IB.subsurfaceWeightTexture.coordinatesIndex+1}`), BB = !0), IB.transmissionWeight > 0 && IB.transmissionWeightTexture && (TB.push("#define TRANSMISSION_WEIGHT"), TB.push(`#define TRANSMISSIONWEIGHT_UV${IB.transmissionWeightTexture.coordinatesIndex+1}`), BB = !0)
          }
          BB && (TB.push("#define NEED_UV"), oB.isVerticesDataPresent(LB.i.UVKind) && (JB.push(LB.i.UVKind), TB.push("#define UV1"), GB = !0), oB.isVerticesDataPresent(LB.i.UV2Kind) && (JB.push(LB.i.UV2Kind), TB.push("#define UV2"), vB = !0))
        }
        if (this._enableDepth && (TB.push("#define DEPTH"), TB.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (TB.push("#define NORMAL"), TB.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (TB.push("#define POSITION"), TB.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (TB.push("#define VELOCITY"), TB.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(oB) && TB.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (TB.push("#define VELOCITY_LINEAR"), TB.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(oB) && TB.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (TB.push("#define REFLECTIVITY"), TB.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (TB.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), TB.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          TB.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), TB.push("#define IRRADIANCE");
          const BB = this._scene;
          if (BB.environmentTexture) {
            const IB = {};
            let JB = !1,
              oB = 0;
            "OpenPBRMaterial" !== ZB.getClassName() && "StandardMaterial" !== ZB.getClassName() && "PBRMetallicRoughnessMaterial" !== ZB.getClassName() && "PBRSpecularGlossinessMaterial" !== ZB.getClassName() && "PBRMaterial" !== ZB.getClassName() || (JB = !!ZB.realtimeFiltering, oB = ZB.realtimeFilteringQuality || 0), (0, VB.W)(BB, BB.environmentTexture, IB, JB, oB, !0);
            for (const BB in IB) IB[BB] && TB.push("#define " + BB);
            IB.USEIRRADIANCEMAP || TB.push("#define SPHERICAL_HARMONICS");
            const GB = BB.postProcessRenderPipelineManager.supportedPipelines.find((BB => "IBLShadowsRenderPipeline" === BB.getClassName()));
            if (GB) {
              const BB = GB;
              BB._getAccumulatedTexture() && (TB.push("#define IBL_SHADOW_TEXTURE"), BB.coloredShadows && TB.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (TB.push("#define OBJECT_ID"), TB.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (TB.push("#define MESH_BLEND_TAG"), TB.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && TB.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && TB.push("#define ENCODE_NORMAL"), oB.useBones && oB.computeBonesUsingShaders && oB.skeleton ? (JB.push(LB.i.MatricesIndicesKind), JB.push(LB.i.MatricesWeightsKind), oB.numBoneInfluencers > 4 && (JB.push(LB.i.MatricesIndicesExtraKind), JB.push(LB.i.MatricesWeightsExtraKind)), TB.push("#define NUM_BONE_INFLUENCERS " + oB.numBoneInfluencers), TB.push("#define BONETEXTURE " + oB.skeleton.isUsingTextureForMatrices), TB.push("#define BonesPerMesh " + (oB.skeleton.bones.length + 1))) : (TB.push("#define NUM_BONE_INFLUENCERS 0"), TB.push("#define BONETEXTURE false"), TB.push("#define BonesPerMesh 0"));
        const kB = oB.morphTargetManager ? (0, VB.Q)(oB.morphTargetManager, TB, JB, oB, !0, !0, !1, GB, vB, !1) : 0;
        IB && (TB.push("#define INSTANCES"), (0, VB.wb)(JB, this._enableVelocity || this._enableVelocityLinear), BB.getRenderingMesh().hasThinInstances && TB.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? TB.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : TB.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, nI.i)(ZB, this._scene, TB);
        const cB = this._scene.PN(),
          nB = BB._getDrawWrapper(void 0, !0),
          hB = nB.defines,
          zB = TB.join("\n");
        return hB !== zB && nB.setEffect(cB.createEffect("geometry", {
          attributes: JB,
          uniformsNames: LI,
          samplers: XI,
          defines: zB,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: kB
          },
          shaderLanguage: this.shaderLanguage
        }, cB), zB), nB.effect.isReady()
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
          this._scene.PN().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.lg.PN()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.lg.PN().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const BB = [],
          IB = [];
        let ZB = 0;
        return this._enableDepth && (this._depthIndex = ZB, ZB++, BB.push("gBuffer_Depth"), IB.push(this._textureTypesAndFormats[eI.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = ZB, ZB++, BB.push("gBuffer_Normal"), IB.push(this._textureTypesAndFormats[eI.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = ZB, ZB++, BB.push("gBuffer_Position"), IB.push(this._textureTypesAndFormats[eI.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = ZB, ZB++, BB.push("gBuffer_Velocity"), IB.push(this._textureTypesAndFormats[eI.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = ZB, ZB++, BB.push("gBuffer_VelocityLinear"), IB.push(this._textureTypesAndFormats[eI.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = ZB, ZB++, BB.push("gBuffer_Reflectivity"), IB.push(this._textureTypesAndFormats[eI.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = ZB, ZB++, BB.push("gBuffer_ScreenspaceDepth"), IB.push(this._textureTypesAndFormats[eI.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = ZB, ZB++, BB.push("gBuffer_Irradiance"), IB.push(this._textureTypesAndFormats[eI.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = ZB, ZB++, BB.push("gBuffer_ObjectId"), IB.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = ZB, ZB++, BB.push("gBuffer_MeshBlendTag"), IB.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [ZB, BB, IB]
      }
      _createRenderTargets() {
        const BB = this._scene.PN(),
          [IB, ZB, TB] = this._assignRenderTargetIndices(),
          JB = Math.min(BB.getCaps().maxDrawBuffers ?? 1, 8);
        if (BB.getCaps().drawBuffersExtension && IB > JB) throw new Error(`GeometryBufferRenderer: ${IB} color attachments were requested, but this engine supports at most ${JB}`);
        let GB = 0;
        BB._caps.textureFloat && BB._caps.textureFloatLinearFiltering ? GB = 1 : BB._caps.textureHalfFloat && BB._caps.textureHalfFloatLinearFiltering && (GB = 2);
        const vB = this._getRenderTargetDimensions(),
          kB = [],
          cB = [],
          nB = [];
        for (const oB of TB) oB ? (kB.push(oB.textureType), cB.push(oB.textureFormat), nB.push(oB.samplingMode ?? 2)) : (kB.push(GB), cB.push(5), nB.push(2));
        if (this._normalsAreUnsigned = 11 === kB[eI.NORMAL_TEXTURE_TYPE] || 13 === kB[eI.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new jI("gBuffer", vB, IB, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: kB,
            formats: cB,
            samplingModes: nB,
            depthTextureFormat: this._depthFormat
          }, ZB.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = aB.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = aB.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const hB = [!0],
          zB = [!1],
          FB = [!0];
        for (let oB = 1; oB < IB; ++oB) hB.push(!0), FB.push(!1), zB.push(!0);
        const NB = BB.buildTextureLayout(hB),
          gB = BB.buildTextureLayout(zB),
          qB = BB.buildTextureLayout(FB);
        this._multiRenderTarget.onClearObservable.add((BB => {
          const IB = this.useSpecificClearForDepthTexture ? gB : NB;
          BB.clearAttachments(this._clearColor, IB, !0, !0, !0), this.useSpecificClearForDepthTexture && BB.clearAttachments(this._clearDepthColor, qB, !0, !1, !1), BB.bindAttachments(NB)
        })), this._resizeObserver = BB.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const yB = BB => {
          const IB = BB.getRenderingMesh(),
            ZB = BB.getEffectiveMesh(),
            TB = this._scene,
            JB = TB.PN(),
            GB = BB.LN();
          if (!GB) return;
          if (ZB._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[ZB.uniqueId] && (this._previousTransformationMatrices[ZB.uniqueId] = {
              vz: XB.b.Identity(),
              viewProjection: TB.getTransformMatrix()
            }, IB.skeleton)) {
            const BB = IB.skeleton.getTransformMatrices(IB);
            this._previousBonesTransformationMatrices[IB.uniqueId] = this._copyBonesTransformationMatrices(BB, new Float32Array(BB.length))
          }
          const vB = IB._getInstancesRenderList(BB._id, !!BB.getReplacementMesh());
          if (vB.mustReturn) return;
          const kB = JB.getCaps().instancedArrays && (null !== vB.visibleInstances[BB._id] || IB.hasThinInstances),
            cB = ZB.getWorldMatrix();
          if (this.isReady(BB, kB)) {
            const nB = BB._getDrawWrapper();
            if (!nB) return;
            const hB = nB.effect;
            let zB;
            JB.enableEffect(nB), kB || IB._bind(BB, hB, GB.fillMode), this._useUbo ? ((0, VB.v)(hB, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (hB.setMatrix("viewProjection", TB.getTransformMatrix()), hB.setMatrix("view", TB.getViewMatrix()), this._scene.bindEyePosition(hB, "vEyePosition"));
            if (IB._instanceDataStorage.isFrozen || !GB.backFaceCulling && null === GB.sideOrientation) zB = IB._effectiveSideOrientation;
            else {
              const BB = ZB._getWorldMatrixDeterminant();
              zB = GB._getEffectiveOrientation(IB), BB < 0 && (zB = zB === oB.e.ClockWiseSideOrientation ? oB.e.CounterClockWiseSideOrientation : oB.e.ClockWiseSideOrientation)
            }
            if (GB._preBind(nB, zB), GB.needAlphaTestingForMesh(ZB)) {
              const BB = GB.getAlphaTestTexture();
              BB && (hB.setTexture("diffuseSampler", BB), hB.setMatrix("diffuseMatrix", BB.getTextureMatrix()), hB.setFloat("alphaCutOff", GB.alphaCutOff ?? .4))
            }
            if ((GB.bumpTexture || GB.normalTexture || GB.geometryNormalTexture) && TB.PN().getCaps().standardDerivatives && DB.e.BumpTextureEnabled) {
              const BB = GB.bumpTexture || GB.normalTexture || GB.geometryNormalTexture;
              hB.setFloat3("vBumpInfos", BB.coordinatesIndex, 1 / BB.level, GB.parallaxScaleBias), hB.setMatrix("bumpMatrix", BB.getTextureMatrix()), hB.setTexture("bumpSampler", BB), hB.setFloat2("vTangentSpaceParams", GB.invertNormalMapX ? -1 : 1, GB.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === GB.getClassName()) null !== GB.metallicRoughnessTexture && (hB.setTexture("reflectivitySampler", GB.metallicRoughnessTexture), hB.setMatrix("reflectivityMatrix", GB.metallicRoughnessTexture.getTextureMatrix())), null !== GB.metallic && hB.setFloat("metallic", GB.metallic), null !== GB.roughness && hB.setFloat("glossiness", 1 - GB.roughness), null !== GB.baseTexture && (hB.setTexture("albedoSampler", GB.baseTexture), hB.setMatrix("albedoMatrix", GB.baseTexture.getTextureMatrix())), null !== GB.baseColor && hB.setColor3("albedoColor", GB.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === GB.getClassName()) null !== GB.specularGlossinessTexture ? (hB.setTexture("reflectivitySampler", GB.specularGlossinessTexture), hB.setMatrix("reflectivityMatrix", GB.specularGlossinessTexture.getTextureMatrix())) : null !== GB.specularColor && hB.setColor3("reflectivityColor", GB.specularColor), null !== GB.glossiness && hB.setFloat("glossiness", GB.glossiness);
            else if ("PBRMaterial" === GB.getClassName()) null !== GB.metallicTexture && (hB.setTexture("reflectivitySampler", GB.metallicTexture), hB.setMatrix("reflectivityMatrix", GB.metallicTexture.getTextureMatrix())), null !== GB.metallic && hB.setFloat("metallic", GB.metallic), null !== GB.roughness && hB.setFloat("glossiness", 1 - GB.roughness), null !== GB.roughness || null !== GB.metallic || null !== GB.metallicTexture ? (null !== GB.albedoTexture && (hB.setTexture("albedoSampler", GB.albedoTexture), hB.setMatrix("albedoMatrix", GB.albedoTexture.getTextureMatrix())), null !== GB.albedoColor && hB.setColor3("albedoColor", GB.albedoColor)) : (null !== GB.reflectivityTexture ? (hB.setTexture("reflectivitySampler", GB.reflectivityTexture), hB.setMatrix("reflectivityMatrix", GB.reflectivityTexture.getTextureMatrix())) : null !== GB.reflectivityColor && hB.setColor3("reflectivityColor", GB.reflectivityColor), null !== GB.microSurface && hB.setFloat("glossiness", GB.microSurface));
            else if ("StandardMaterial" === GB.getClassName()) null !== GB.specularTexture && (hB.setTexture("reflectivitySampler", GB.specularTexture), hB.setMatrix("reflectivityMatrix", GB.specularTexture.getTextureMatrix())), null !== GB.specularColor && hB.setColor3("reflectivityColor", GB.specularColor);
            else if ("OpenPBRMaterial" === GB.getClassName()) {
              const BB = GB;
              BB._useRoughnessFromMetallicTextureGreen && BB.baseMetalnessTexture ? (hB.setTexture("reflectivitySampler", BB.baseMetalnessTexture), hB.setMatrix("reflectivityMatrix", BB.baseMetalnessTexture.getTextureMatrix())) : BB.baseMetalnessTexture ? (hB.setTexture("metallicSampler", BB.baseMetalnessTexture), hB.setMatrix("metallicMatrix", BB.baseMetalnessTexture.getTextureMatrix())) : BB.specularRoughnessTexture && (hB.setTexture("roughnessSampler", BB.specularRoughnessTexture), hB.setMatrix("roughnessMatrix", BB.specularRoughnessTexture.getTextureMatrix())), hB.setFloat("metallic", BB.baseMetalness), hB.setFloat("glossiness", 1 - BB.specularRoughness), null !== BB.baseColorTexture && (hB.setTexture("albedoSampler", BB.baseColorTexture), hB.setMatrix("albedoMatrix", BB.baseColorTexture.getTextureMatrix())), null !== BB.baseColor && hB.setColor3("albedoColor", BB.baseColor)
            }
            if (this._enableIrradiance && TB.environmentTexture) {
              const BB = TB.environmentTexture,
                IB = TB.postProcessRenderPipelineManager.supportedPipelines.find((BB => "IBLShadowsRenderPipeline" === BB.getClassName()));
              if (IB) {
                const BB = IB._getAccumulatedTexture();
                BB && (hB.setTexture("iblShadowSampler", BB), hB.setFloat2("shadowTextureSize", BB.getSize().width, BB.getSize().height))
              }
              if (hB.setMatrix("reflectionMatrix", BB.getReflectionTextureMatrix()), hB.setFloat2("vReflectionInfos", BB.level * TB.iblIntensity, 0), hB.setTexture("reflectionSampler", BB), BB.irradianceTexture && (hB.setTexture("irradianceSampler", BB.irradianceTexture), BB.irradianceTexture._dominantDirection && hB.setVector3("vReflectionDominantDirection", BB.irradianceTexture._dominantDirection)), BB.sphericalPolynomial) {
                const IB = BB.sphericalPolynomial;
                if (IB.preScaledHarmonics) {
                  const BB = IB.preScaledHarmonics;
                  hB.setVector3("vSphericalL00", BB.l00), hB.setVector3("vSphericalL1_1", BB.l1_1), hB.setVector3("vSphericalL10", BB.l10), hB.setVector3("vSphericalL11", BB.l11), hB.setVector3("vSphericalL2_2", BB.l2_2), hB.setVector3("vSphericalL2_1", BB.l2_1), hB.setVector3("vSphericalL20", BB.l20), hB.setVector3("vSphericalL21", BB.l21), hB.setVector3("vSphericalL22", BB.l22)
                } else hB.setFloat3("vSphericalX", IB.x.x, IB.x.y, IB.x.z), hB.setFloat3("vSphericalY", IB.y.x, IB.y.y, IB.y.z), hB.setFloat3("vSphericalZ", IB.z.x, IB.z.y, IB.z.z), hB.setFloat3("vSphericalXX_ZZ", IB.xx.x - IB.zz.x, IB.xx.y - IB.zz.y, IB.xx.z - IB.zz.z), hB.setFloat3("vSphericalYY_ZZ", IB.yy.x - IB.zz.x, IB.yy.y - IB.zz.y, IB.yy.z - IB.zz.z), hB.setFloat3("vSphericalZZ", IB.zz.x, IB.zz.y, IB.zz.z), hB.setFloat3("vSphericalXY", IB.xy.x, IB.xy.y, IB.xy.z), hB.setFloat3("vSphericalYZ", IB.yz.x, IB.yz.y, IB.yz.z), hB.setFloat3("vSphericalZX", IB.zx.x, IB.zx.y, IB.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === GB.getClassName()) {
                const BB = GB;
                hB.setFloat("vSubsurfaceWeight", BB.subsurfaceWeight), BB.subsurfaceWeightTexture && (hB.setTexture("subsurfaceWeightSampler", BB.subsurfaceWeightTexture), hB.setMatrix("subsurfaceWeightMatrix", BB.subsurfaceWeightTexture.getTextureMatrix())), hB.setFloat("vTransmissionWeight", BB.transmissionWeight), BB.transmissionWeightTexture && (hB.setTexture("transmissionWeightSampler", BB.transmissionWeightTexture), hB.setMatrix("transmissionWeightMatrix", BB.transmissionWeightTexture.getTextureMatrix())), hB.setFloat("vTransmissionScatterAnisotropy", BB.transmissionScatterAnisotropy), hB.setFloat("vSubsurfaceScatterAnisotropy", BB.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, nI.d)(hB, GB, this._scene), IB.useBones && IB.computeBonesUsingShaders && IB.skeleton) {
              const BB = IB.skeleton;
              if (BB.isUsingTextureForMatrices && hB.getUniformIndex("boneTextureInfo") > -1) {
                const ZB = BB.getTransformMatrixTexture(IB);
                hB.setTexture("boneSampler", ZB), hB.setFloat2("boneTextureInfo", BB._textureWidth, BB._textureHeight)
              } else hB.setMatrices("mBones", IB.skeleton.getTransformMatrices(IB));
              (this._enableVelocity || this._enableVelocityLinear) && hB.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[IB.uniqueId])
            }
            if ((0, VB.t)(IB, hB), IB.morphTargetManager && IB.morphTargetManager.isUsingTextureForTargets && IB.morphTargetManager._bind(hB), (this._enableVelocity || this._enableVelocityLinear) && (hB.setMatrix("previousWorld", this._previousTransformationMatrices[ZB.uniqueId].vz), hB.setMatrix("previousViewProjection", this._previousTransformationMatrices[ZB.uniqueId].viewProjection)), this._enableObjectId) {
              let BB = IB.uniqueId;
              if (this.objectIdProvider) BB = (0, FI.h)(IB, this.objectIdProvider);
              else if (BB > 16777215) throw new Error(`Invalid geometry object ID ${BB} for mesh "${IB.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              hB.setFloat("objectId", BB)
            }
            if (this._enableMeshBlendTag) {
              const BB = this.meshBlendTagProvider ? (0, FI.e)(IB, this.meshBlendTagProvider) : IB.meshBlendingTag;
              hB.setInt("meshBlendTag", BB)
            }
            kB && IB.hasThinInstances && hB.setMatrix("world", cB), IB._processRendering(ZB, BB, hB, GB.fillMode, vB, kB, ((BB, IB) => {
              BB || hB.setMatrix("world", IB)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[ZB.uniqueId].vz = cB.clone(), this._previousTransformationMatrices[ZB.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), IB.skeleton && this._copyBonesTransformationMatrices(IB.skeleton.getTransformMatrices(IB), this._previousBonesTransformationMatrices[ZB.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (IB, ZB, TB) => {
          if ((TB || 0 === ZB) && IB.EW)
            for (let JB = 0; JB < IB.EW.length; ++JB) {
              const ZB = IB.EW[JB],
                TB = ZB.LN(),
                oB = ZB.getRenderingMesh();
              if (!TB) continue;
              const GB = oB._getInstancesRenderList(ZB._id, !!ZB.getReplacementMesh()),
                vB = BB.getCaps().instancedArrays && (null !== GB.visibleInstances[ZB._id] || oB.hasThinInstances);
              if (!this.isReady(ZB, vB)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (IB, ZB, TB, JB) => {
          let oB;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.PN().bindAttachments(this._attachmentsFromPrePass)
          }
          if (JB.length) {
            for (BB.setColorWrite(!1), oB = 0; oB < JB.length; oB++) yB(JB.data[oB]);
            BB.setColorWrite(!0)
          }
          for (oB = 0; oB < IB.length; oB++) yB(IB.data[oB]);
          for (BB.setDepthWrite(!1), oB = 0; oB < ZB.length; oB++) yB(ZB.data[oB]);
          if (this.renderTransparentMeshes)
            for (oB = 0; oB < TB.length; oB++) yB(TB.data[oB]);
          BB.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const BB = this._scene.PN();
        return {
          width: Math.max(1, Math.floor(BB.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(BB.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(BB, IB) {
        for (let ZB = 0; ZB < BB.length; ZB++) IB[ZB] = BB[ZB];
        return IB
      }
    }
    eI.ForceGLSL = !1, eI.DEPTH_TEXTURE_TYPE = 0, eI.NORMAL_TEXTURE_TYPE = 1, eI.POSITION_TEXTURE_TYPE = 2, eI.VELOCITY_TEXTURE_TYPE = 3, eI.REFLECTIVITY_TEXTURE_TYPE = 4, eI.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, eI.VELOCITY_LINEAR_TEXTURE_TYPE = 6, eI.IRRADIANCE_TEXTURE_TYPE = 7, eI.OBJECT_ID_TEXTURE_TYPE = 8, eI.MESH_BLEND_TAG_TEXTURE_TYPE = 9, eI._SceneComponentInitialization = BB => {
      throw (0, yI.m)("GeometryBufferRendererSceneComponent")
    };
    var uI = ZB(37170);
    const fI = {
      effect: null,
      subMesh: null
    };

    function lI(BB) {
      if ("number" === typeof BB) return 1;
      if (BB instanceof XB.p) return 2;
      if (BB instanceof XB.s || BB instanceof tB.c) return 3;
      if (BB instanceof XB.t || BB instanceof tB.g) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class AI {
      populateVectorFromLinkedProperties(BB) {
        const IB = lI(BB);
        for (const ZB in this.linkedProperties) {
          const BB = this.linkedProperties[ZB],
            TB = BB.numComponents;
          if (IB < TB || BB.targetUniformComponentOffset > IB - TB) return void(1 == TB ? iB.d.Error(`Float property ${BB.name} has an offset that is too large.`) : iB.d.Error(`Vector${TB} property ${BB.name} won't fit in Vector${IB} or has an offset that is too large.`));
          "number" === typeof BB.value ? AI._tmpArray[BB.targetUniformComponentOffset] = BB.value : BB.value.toArray(AI._tmpArray, BB.targetUniformComponentOffset)
        }
        BB.WZB(AI._tmpArray)
      }
      constructor(BB, IB) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = BB, this.numComponents = IB
      }
    }
    AI._tmpArray = [0, 0, 0, 0];
    class tI {
      constructor(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          oB = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = BB, this.targetUniformName = ZB, this.defaultValue = IB, this.value = IB, this.targetUniformComponentNum = TB, this.targetUniformComponentOffset = JB, this.requiredDefine = oB
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : lI(this.defaultValue)
      }
    }
    class bI {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(BB, IB, ZB) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = BB, this.samplerPrefix = IB, this.textureDefine = ZB
      }
    }
    class xI extends((0, gI.b)((0, NI.b)(eB.e))) {}
    class EI extends(function(BB) {
      return class extends BB {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(xI)) {}
    class DI extends((0, bB.c)(EI)) {
      constructor(BB) {
        super(BB), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class KI extends((0, qI.b)(EB.b)) {}
    let VI = (() => {
        var BB, IB, TB, JB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB, yB, UB, WB, dB, CB, QB, sB, wB, HB, MB, jB, PB, mB, eB, uB, fB, lB, bB, EB, SB, BI, II, ZI, TI, JI, oI, GI, vI, kI, cI, NI, gI, qI, yI, UI, WI, dI, CI, QI, OI, YI, iI, pI, aI, HI, MI, jI, PI, RI, rI, mI, XI, LI, uI, lI, xI, EI, VI, SI, BZ, IZ, ZZ, TZ, JZ, oZ, GZ, vZ, kZ, cZ, nZ, hZ, zZ, FZ, NZ, gZ, qZ, yZ, UZ, WZ, dZ, CZ, QZ, sZ, wZ, OZ, YZ, iZ, pZ;
        let aZ, HZ, MZ, jZ, PZ, RZ, rZ, mZ, XZ, LZ, eZ, uZ, fZ, lZ, AZ, tZ, bZ, xZ, EZ, DZ, KZ, VZ, SZ, BT, IT, ZT, TT, JT, oT, GT, vT, kT, cT, nT, hT, zT, FT, NT, gT, qT, yT, UT, WT, dT, CT, QT, sT, wT, OT, YT, iT, pT, aT, HT, MT, jT, PT, RT, rT, mT, XT, LT, eT, uT, fT, lT, AT, tT, bT, xT, ET, DT, KT, VT, ST, BJ, IJ, ZJ, TJ, JJ, oJ, GJ, vJ, kJ, cJ, nJ, hJ, zJ, FJ, NJ, gJ, qJ, yJ, UJ, WJ, dJ, CJ, QJ, sJ, wJ, OJ, YJ, iJ, pJ, aJ, HJ = KI,
          MJ = [],
          jJ = [],
          PJ = [],
          RJ = [],
          rJ = [],
          mJ = [],
          XJ = [],
          LJ = [],
          eJ = [],
          uJ = [],
          fJ = [],
          lJ = [],
          AJ = [],
          tJ = [],
          bJ = [],
          xJ = [],
          EJ = [],
          DJ = [],
          KJ = [],
          VJ = [],
          SJ = [],
          Bo = [],
          Io = [],
          Zo = [],
          To = [],
          Jo = [],
          oo = [],
          Go = [],
          vo = [],
          ko = [],
          co = [],
          no = [],
          ho = [],
          zo = [],
          Fo = [],
          No = [],
          go = [],
          qo = [],
          yo = [],
          Uo = [],
          Wo = [],
          Co = [],
          Qo = [],
          so = [],
          wo = [],
          Oo = [],
          Yo = [],
          io = [],
          po = [],
          ao = [],
          Ho = [],
          Mo = [],
          jo = [],
          Po = [],
          Ro = [],
          ro = [],
          mo = [],
          Xo = [],
          Lo = [],
          eo = [],
          uo = [],
          fo = [],
          Ao = [],
          to = [],
          bo = [],
          xo = [],
          Eo = [],
          Do = [],
          Ko = [],
          Vo = [],
          So = [],
          BG = [],
          IG = [],
          ZG = [],
          TG = [],
          JG = [],
          oG = [],
          GG = [],
          vG = [],
          kG = [],
          cG = [],
          nG = [],
          hG = [],
          zG = [],
          FG = [],
          NG = [],
          gG = [],
          qG = [],
          yG = [],
          UG = [],
          WG = [],
          dG = [],
          CG = [],
          QG = [],
          sG = [],
          wG = [],
          OG = [],
          YG = [],
          iG = [],
          pG = [],
          aG = [],
          HG = [],
          MG = [],
          jG = [],
          PG = [],
          RG = [],
          rG = [],
          mG = [],
          XG = [],
          LG = [],
          eG = [],
          uG = [],
          fG = [],
          lG = [],
          AG = [],
          tG = [],
          bG = [],
          xG = [],
          EG = [],
          DG = [],
          KG = [],
          VG = [],
          SG = [],
          Bv = [],
          Iv = [],
          Zv = [],
          Tv = [],
          Jv = [],
          ov = [],
          Gv = [],
          vv = [],
          kv = [],
          cv = [],
          nv = [],
          hv = [],
          zv = [],
          Fv = [],
          Nv = [],
          gv = [],
          qv = [],
          yv = [],
          Uv = [],
          Wv = [],
          dv = [],
          Cv = [],
          Qv = [],
          sv = [],
          wv = [],
          Ov = [],
          Yv = [],
          iv = [],
          pv = [],
          av = [],
          Hv = [],
          Mv = [],
          jv = [],
          Pv = [],
          Rv = [],
          rv = [],
          mv = [],
          Xv = [],
          Lv = [],
          ev = [],
          uv = [],
          fv = [],
          lv = [],
          Av = [],
          tv = [],
          bv = [],
          xv = [],
          Ev = [],
          Dv = [],
          Kv = [],
          Vv = [],
          Sv = [],
          Bk = [],
          Ik = [],
          Zk = [],
          Tk = [],
          Jk = [],
          Gk = [],
          vk = [],
          kk = [],
          ck = [],
          nk = [],
          hk = [],
          zk = [],
          Fk = [],
          Nk = [],
          gk = [],
          qk = [],
          yk = [],
          Uk = [],
          Wk = [],
          dk = [],
          Ck = [],
          Qk = [],
          sk = [],
          wk = [],
          Ok = [],
          Yk = [],
          ik = [],
          pk = [],
          ak = [],
          Hk = [];
        return BB = class extends HJ {
          get baseWeight() {
            return (0, OB.b)(this, IB, "f")
          }
          set baseWeight(BB) {
            (0, OB.f)(this, IB, BB, "f")
          }
          get baseWeightTexture() {
            return (0, OB.b)(this, TB, "f")
          }
          set baseWeightTexture(BB) {
            (0, OB.f)(this, TB, BB, "f")
          }
          get baseColor() {
            return (0, OB.b)(this, JB, "f")
          }
          set baseColor(BB) {
            (0, OB.f)(this, JB, BB, "f")
          }
          get baseColorTexture() {
            return (0, OB.b)(this, GB, "f")
          }
          set baseColorTexture(BB) {
            (0, OB.f)(this, GB, BB, "f")
          }
          get baseDiffuseRoughness() {
            return (0, OB.b)(this, vB, "f")
          }
          set baseDiffuseRoughness(BB) {
            (0, OB.f)(this, vB, BB, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, OB.b)(this, kB, "f")
          }
          set baseDiffuseRoughnessTexture(BB) {
            (0, OB.f)(this, kB, BB, "f")
          }
          get baseMetalness() {
            return (0, OB.b)(this, cB, "f")
          }
          set baseMetalness(BB) {
            (0, OB.f)(this, cB, BB, "f")
          }
          get baseMetalnessTexture() {
            return (0, OB.b)(this, nB, "f")
          }
          set baseMetalnessTexture(BB) {
            (0, OB.f)(this, nB, BB, "f")
          }
          get specularWeight() {
            return (0, OB.b)(this, hB, "f")
          }
          set specularWeight(BB) {
            (0, OB.f)(this, hB, BB, "f")
          }
          get specularWeightTexture() {
            return (0, OB.b)(this, zB, "f")
          }
          set specularWeightTexture(BB) {
            (0, OB.f)(this, zB, BB, "f")
          }
          get specularColor() {
            return (0, OB.b)(this, FB, "f")
          }
          set specularColor(BB) {
            (0, OB.f)(this, FB, BB, "f")
          }
          get specularColorTexture() {
            return (0, OB.b)(this, NB, "f")
          }
          set specularColorTexture(BB) {
            (0, OB.f)(this, NB, BB, "f")
          }
          get specularRoughness() {
            return (0, OB.b)(this, gB, "f")
          }
          set specularRoughness(BB) {
            (0, OB.f)(this, gB, BB, "f")
          }
          get specularRoughnessTexture() {
            return (0, OB.b)(this, qB, "f")
          }
          set specularRoughnessTexture(BB) {
            (0, OB.f)(this, qB, BB, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, OB.b)(this, yB, "f")
          }
          set specularRoughnessAnisotropy(BB) {
            (0, OB.f)(this, yB, BB, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, OB.b)(this, UB, "f")
          }
          set specularRoughnessAnisotropyTexture(BB) {
            (0, OB.f)(this, UB, BB, "f")
          }
          get specularIor() {
            return (0, OB.b)(this, WB, "f")
          }
          set specularIor(BB) {
            (0, OB.f)(this, WB, BB, "f")
          }
          get transmissionWeight() {
            return (0, OB.b)(this, dB, "f")
          }
          set transmissionWeight(BB) {
            (0, OB.f)(this, dB, BB, "f")
          }
          get transmissionWeightTexture() {
            return (0, OB.b)(this, CB, "f")
          }
          set transmissionWeightTexture(BB) {
            (0, OB.f)(this, CB, BB, "f")
          }
          get transmissionColor() {
            return (0, OB.b)(this, QB, "f")
          }
          set transmissionColor(BB) {
            (0, OB.f)(this, QB, BB, "f")
          }
          get transmissionColorTexture() {
            return (0, OB.b)(this, sB, "f")
          }
          set transmissionColorTexture(BB) {
            (0, OB.f)(this, sB, BB, "f")
          }
          get transmissionDepth() {
            return (0, OB.b)(this, wB, "f")
          }
          set transmissionDepth(BB) {
            (0, OB.f)(this, wB, BB, "f")
          }
          get transmissionDepthTexture() {
            return (0, OB.b)(this, HB, "f")
          }
          set transmissionDepthTexture(BB) {
            (0, OB.f)(this, HB, BB, "f")
          }
          get transmissionScatter() {
            return (0, OB.b)(this, MB, "f")
          }
          set transmissionScatter(BB) {
            (0, OB.f)(this, MB, BB, "f")
          }
          get transmissionScatterTexture() {
            return (0, OB.b)(this, jB, "f")
          }
          set transmissionScatterTexture(BB) {
            (0, OB.f)(this, jB, BB, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, OB.b)(this, PB, "f")
          }
          set transmissionScatterAnisotropy(BB) {
            (0, OB.f)(this, PB, BB, "f")
          }
          get transmissionDispersionScale() {
            return (0, OB.b)(this, mB, "f")
          }
          set transmissionDispersionScale(BB) {
            (0, OB.f)(this, mB, BB, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, OB.b)(this, eB, "f")
          }
          set transmissionDispersionScaleTexture(BB) {
            (0, OB.f)(this, eB, BB, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, OB.b)(this, uB, "f")
          }
          set transmissionDispersionAbbeNumber(BB) {
            (0, OB.f)(this, uB, BB, "f")
          }
          get subsurfaceWeight() {
            return (0, OB.b)(this, fB, "f")
          }
          set subsurfaceWeight(BB) {
            (0, OB.f)(this, fB, BB, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, OB.b)(this, lB, "f")
          }
          set subsurfaceWeightTexture(BB) {
            (0, OB.f)(this, lB, BB, "f")
          }
          get subsurfaceColor() {
            return (0, OB.b)(this, bB, "f")
          }
          set subsurfaceColor(BB) {
            (0, OB.f)(this, bB, BB, "f")
          }
          get subsurfaceColorTexture() {
            return (0, OB.b)(this, EB, "f")
          }
          set subsurfaceColorTexture(BB) {
            (0, OB.f)(this, EB, BB, "f")
          }
          get subsurfaceRadius() {
            return (0, OB.b)(this, SB, "f")
          }
          set subsurfaceRadius(BB) {
            (0, OB.f)(this, SB, BB, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, OB.b)(this, BI, "f")
          }
          set subsurfaceRadiusScale(BB) {
            (0, OB.f)(this, BI, BB, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, OB.b)(this, II, "f")
          }
          set subsurfaceRadiusScaleTexture(BB) {
            (0, OB.f)(this, II, BB, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, OB.b)(this, ZI, "f")
          }
          set subsurfaceScatterAnisotropy(BB) {
            (0, OB.f)(this, ZI, BB, "f")
          }
          get coatWeight() {
            return (0, OB.b)(this, TI, "f")
          }
          set coatWeight(BB) {
            (0, OB.f)(this, TI, BB, "f")
          }
          get coatWeightTexture() {
            return (0, OB.b)(this, JI, "f")
          }
          set coatWeightTexture(BB) {
            (0, OB.f)(this, JI, BB, "f")
          }
          get coatColor() {
            return (0, OB.b)(this, oI, "f")
          }
          set coatColor(BB) {
            (0, OB.f)(this, oI, BB, "f")
          }
          get coatColorTexture() {
            return (0, OB.b)(this, GI, "f")
          }
          set coatColorTexture(BB) {
            (0, OB.f)(this, GI, BB, "f")
          }
          get coatRoughness() {
            return (0, OB.b)(this, vI, "f")
          }
          set coatRoughness(BB) {
            (0, OB.f)(this, vI, BB, "f")
          }
          get coatRoughnessTexture() {
            return (0, OB.b)(this, kI, "f")
          }
          set coatRoughnessTexture(BB) {
            (0, OB.f)(this, kI, BB, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, OB.b)(this, cI, "f")
          }
          set coatRoughnessAnisotropy(BB) {
            (0, OB.f)(this, cI, BB, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, OB.b)(this, NI, "f")
          }
          set coatRoughnessAnisotropyTexture(BB) {
            (0, OB.f)(this, NI, BB, "f")
          }
          get coatIor() {
            return (0, OB.b)(this, gI, "f")
          }
          set coatIor(BB) {
            (0, OB.f)(this, gI, BB, "f")
          }
          get coatDarkening() {
            return (0, OB.b)(this, qI, "f")
          }
          set coatDarkening(BB) {
            (0, OB.f)(this, qI, BB, "f")
          }
          get coatDarkeningTexture() {
            return (0, OB.b)(this, yI, "f")
          }
          set coatDarkeningTexture(BB) {
            (0, OB.f)(this, yI, BB, "f")
          }
          get fuzzWeight() {
            return (0, OB.b)(this, UI, "f")
          }
          set fuzzWeight(BB) {
            (0, OB.f)(this, UI, BB, "f")
          }
          get fuzzWeightTexture() {
            return (0, OB.b)(this, WI, "f")
          }
          set fuzzWeightTexture(BB) {
            (0, OB.f)(this, WI, BB, "f")
          }
          get fuzzColor() {
            return (0, OB.b)(this, dI, "f")
          }
          set fuzzColor(BB) {
            (0, OB.f)(this, dI, BB, "f")
          }
          get fuzzColorTexture() {
            return (0, OB.b)(this, CI, "f")
          }
          set fuzzColorTexture(BB) {
            (0, OB.f)(this, CI, BB, "f")
          }
          get fuzzRoughness() {
            return (0, OB.b)(this, QI, "f")
          }
          set fuzzRoughness(BB) {
            (0, OB.f)(this, QI, BB, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, OB.b)(this, OI, "f")
          }
          set fuzzRoughnessTexture(BB) {
            (0, OB.f)(this, OI, BB, "f")
          }
          get geometryThinWalled() {
            return (0, OB.b)(this, YI, "f")
          }
          set geometryThinWalled(BB) {
            (0, OB.f)(this, YI, BB, "f")
          }
          get geometryNormalTexture() {
            return (0, OB.b)(this, iI, "f")
          }
          set geometryNormalTexture(BB) {
            (0, OB.f)(this, iI, BB, "f")
          }
          get geometryTangent() {
            return (0, OB.b)(this, pI, "f")
          }
          set geometryTangent(BB) {
            (0, OB.f)(this, pI, BB, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(BB) {
            this.geometryTangent = new XB.p(Math.cos(BB), Math.sin(BB))
          }
          get geometryTangentTexture() {
            return (0, OB.b)(this, aI, "f")
          }
          set geometryTangentTexture(BB) {
            (0, OB.f)(this, aI, BB, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, OB.b)(this, HI, "f")
          }
          set geometryCoatNormalTexture(BB) {
            (0, OB.f)(this, HI, BB, "f")
          }
          get geometryCoatTangent() {
            return (0, OB.b)(this, MI, "f")
          }
          set geometryCoatTangent(BB) {
            (0, OB.f)(this, MI, BB, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(BB) {
            this.geometryCoatTangent = new XB.p(Math.cos(BB), Math.sin(BB))
          }
          get geometryCoatTangentTexture() {
            return (0, OB.b)(this, jI, "f")
          }
          set geometryCoatTangentTexture(BB) {
            (0, OB.f)(this, jI, BB, "f")
          }
          get geometryOpacity() {
            return (0, OB.b)(this, PI, "f")
          }
          set geometryOpacity(BB) {
            (0, OB.f)(this, PI, BB, "f")
          }
          get geometryOpacityTexture() {
            return (0, OB.b)(this, RI, "f")
          }
          set geometryOpacityTexture(BB) {
            (0, OB.f)(this, RI, BB, "f")
          }
          get geometryThickness() {
            return (0, OB.b)(this, rI, "f")
          }
          set geometryThickness(BB) {
            (0, OB.f)(this, rI, BB, "f")
          }
          get geometryThicknessTexture() {
            return (0, OB.b)(this, mI, "f")
          }
          set geometryThicknessTexture(BB) {
            (0, OB.f)(this, mI, BB, "f")
          }
          get emissionLuminance() {
            return (0, OB.b)(this, XI, "f")
          }
          set emissionLuminance(BB) {
            (0, OB.f)(this, XI, BB, "f")
          }
          get emissionColor() {
            return (0, OB.b)(this, LI, "f")
          }
          set emissionColor(BB) {
            (0, OB.f)(this, LI, BB, "f")
          }
          get emissionColorTexture() {
            return (0, OB.b)(this, uI, "f")
          }
          set emissionColorTexture(BB) {
            (0, OB.f)(this, uI, BB, "f")
          }
          get thinFilmWeight() {
            return (0, OB.b)(this, lI, "f")
          }
          set thinFilmWeight(BB) {
            (0, OB.f)(this, lI, BB, "f")
          }
          get thinFilmWeightTexture() {
            return (0, OB.b)(this, xI, "f")
          }
          set thinFilmWeightTexture(BB) {
            (0, OB.f)(this, xI, BB, "f")
          }
          get thinFilmThickness() {
            return (0, OB.b)(this, EI, "f")
          }
          set thinFilmThickness(BB) {
            (0, OB.f)(this, EI, BB, "f")
          }
          get thinFilmThicknessMin() {
            return (0, OB.b)(this, VI, "f")
          }
          set thinFilmThicknessMin(BB) {
            (0, OB.f)(this, VI, BB, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, OB.b)(this, SI, "f")
          }
          set thinFilmThicknessTexture(BB) {
            (0, OB.f)(this, SI, BB, "f")
          }
          get thinFilmIor() {
            return (0, OB.b)(this, BZ, "f")
          }
          set thinFilmIor(BB) {
            (0, OB.f)(this, BZ, BB, "f")
          }
          get ambientOcclusionTexture() {
            return (0, OB.b)(this, IZ, "f")
          }
          set ambientOcclusionTexture(BB) {
            (0, OB.f)(this, IZ, BB, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(BB) {
            this._sssQuality !== BB && (this._sssQuality = BB, this.GZB(1))
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
            return (0, OB.b)(this, ZZ, "f")
          }
          set directIntensity(BB) {
            (0, OB.f)(this, ZZ, BB, "f")
          }
          get environmentIntensity() {
            return (0, OB.b)(this, TZ, "f")
          }
          set environmentIntensity(BB) {
            (0, OB.f)(this, TZ, BB, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, OB.b)(this, JZ, "f")
          }
          set useSpecularWeightFromTextureAlpha(BB) {
            (0, OB.f)(this, JZ, BB, "f")
          }
          get forceAlphaTest() {
            return (0, OB.b)(this, oZ, "f")
          }
          set forceAlphaTest(BB) {
            (0, OB.f)(this, oZ, BB, "f")
          }
          get alphaCutOff() {
            return (0, OB.b)(this, GZ, "f")
          }
          set alphaCutOff(BB) {
            (0, OB.f)(this, GZ, BB, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, OB.b)(this, vZ, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(BB) {
            (0, OB.f)(this, vZ, BB, "f")
          }
          get useAmbientInGrayScale() {
            return (0, OB.b)(this, kZ, "f")
          }
          set useAmbientInGrayScale(BB) {
            (0, OB.f)(this, kZ, BB, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(tB.c.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === oB.e.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(BB) {
            BB !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = BB ? oB.e.LIGHTFALLOFF_PHYSICAL : oB.e.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === oB.e.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(BB) {
            BB !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = BB ? oB.e.LIGHTFALLOFF_GLTF : oB.e.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, OB.b)(this, cZ, "f")
          }
          set useObjectSpaceNormalMap(BB) {
            (0, OB.f)(this, cZ, BB, "f")
          }
          get useParallax() {
            return (0, OB.b)(this, nZ, "f")
          }
          set useParallax(BB) {
            (0, OB.f)(this, nZ, BB, "f")
          }
          get useParallaxOcclusion() {
            return (0, OB.b)(this, hZ, "f")
          }
          set useParallaxOcclusion(BB) {
            (0, OB.f)(this, hZ, BB, "f")
          }
          get parallaxScaleBias() {
            return (0, OB.b)(this, zZ, "f")
          }
          set parallaxScaleBias(BB) {
            (0, OB.f)(this, zZ, BB, "f")
          }
          get disableLighting() {
            return (0, OB.b)(this, FZ, "f")
          }
          set disableLighting(BB) {
            (0, OB.f)(this, FZ, BB, "f")
          }
          get forceIrradianceInFragment() {
            return (0, OB.b)(this, NZ, "f")
          }
          set forceIrradianceInFragment(BB) {
            (0, OB.f)(this, NZ, BB, "f")
          }
          get maxSimultaneousLights() {
            return (0, OB.b)(this, gZ, "f")
          }
          set maxSimultaneousLights(BB) {
            (0, OB.f)(this, gZ, BB, "f")
          }
          get invertNormalMapX() {
            return (0, OB.b)(this, qZ, "f")
          }
          set invertNormalMapX(BB) {
            (0, OB.f)(this, qZ, BB, "f")
          }
          get invertNormalMapY() {
            return (0, OB.b)(this, yZ, "f")
          }
          set invertNormalMapY(BB) {
            (0, OB.f)(this, yZ, BB, "f")
          }
          get twoSidedLighting() {
            return (0, OB.b)(this, UZ, "f")
          }
          set twoSidedLighting(BB) {
            (0, OB.f)(this, UZ, BB, "f")
          }
          get useAlphaFresnel() {
            return (0, OB.b)(this, WZ, "f")
          }
          set useAlphaFresnel(BB) {
            (0, OB.f)(this, WZ, BB, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, OB.b)(this, dZ, "f")
          }
          set useLinearAlphaFresnel(BB) {
            (0, OB.f)(this, dZ, BB, "f")
          }
          get environmentBRDFTexture() {
            return (0, OB.b)(this, CZ, "f")
          }
          set environmentBRDFTexture(BB) {
            (0, OB.f)(this, CZ, BB, "f")
          }
          get forceNormalForward() {
            return (0, OB.b)(this, QZ, "f")
          }
          set forceNormalForward(BB) {
            (0, OB.f)(this, QZ, BB, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, OB.b)(this, sZ, "f")
          }
          set enableSpecularAntiAliasing(BB) {
            (0, OB.f)(this, sZ, BB, "f")
          }
          get useHorizonOcclusion() {
            return (0, OB.b)(this, wZ, "f")
          }
          set useHorizonOcclusion(BB) {
            (0, OB.f)(this, wZ, BB, "f")
          }
          get useRadianceOcclusion() {
            return (0, OB.b)(this, OZ, "f")
          }
          set useRadianceOcclusion(BB) {
            (0, OB.f)(this, OZ, BB, "f")
          }
          get unlit() {
            return (0, OB.b)(this, YZ, "f")
          }
          set unlit(BB) {
            (0, OB.f)(this, YZ, BB, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, OB.b)(this, iZ, "f")
          }
          set applyDecalMapAfterDetailMap(BB) {
            (0, OB.f)(this, iZ, BB, "f")
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
            this._refractionHighQualityBlur !== BB && (this._refractionHighQualityBlur = BB, this.GZB(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(BB) {
            this._realTimeFiltering = BB, this.GZB(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(BB) {
            this._realTimeFilteringQuality = BB, this.GZB(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(BB) {
            this._fuzzSampleNumber = BB, this.GZB(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, OB.b)(this, pZ, "f")
          }
          set debugMode(BB) {
            (0, OB.f)(this, pZ, BB, "f")
          }
          constructor(ZB, YB) {
            super(ZB, YB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || BB.ForceGLSL), IB.set(this, ((0, OB.l)(this, MJ), (0, OB.l)(this, jJ, void 0))), this._baseWeight = ((0, OB.l)(this, PJ), new tI("base_weight", 1, "vBaseWeight", 1)), TB.set(this, (0, OB.l)(this, RJ, void 0)), this._baseWeightTexture = ((0, OB.l)(this, rJ), new bI("base_weight", "baseWeight", "BASE_WEIGHT")), JB.set(this, (0, OB.l)(this, mJ, void 0)), this._baseColor = ((0, OB.l)(this, XJ), new tI("base_color", tB.c.White(), "vBaseColor", 4)), GB.set(this, (0, OB.l)(this, LJ, void 0)), this._baseColorTexture = ((0, OB.l)(this, eJ), new bI("base_color", "baseColor", "BASE_COLOR")), vB.set(this, (0, OB.l)(this, uJ, void 0)), this._baseDiffuseRoughness = ((0, OB.l)(this, fJ), new tI("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), kB.set(this, (0, OB.l)(this, lJ, void 0)), this._baseDiffuseRoughnessTexture = ((0, OB.l)(this, AJ), new bI("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), cB.set(this, (0, OB.l)(this, tJ, void 0)), this._baseMetalness = ((0, OB.l)(this, bJ), new tI("base_metalness", 0, "vReflectanceInfo", 4, 0)), nB.set(this, (0, OB.l)(this, xJ, void 0)), this._baseMetalnessTexture = ((0, OB.l)(this, EJ), new bI("base_metalness", "baseMetalness", "BASE_METALNESS")), hB.set(this, (0, OB.l)(this, DJ, void 0)), this._specularWeight = ((0, OB.l)(this, KJ), new tI("specular_weight", 1, "vReflectanceInfo", 4, 3)), zB.set(this, (0, OB.l)(this, VJ, void 0)), this._specularWeightTexture = ((0, OB.l)(this, SJ), new bI("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), FB.set(this, (0, OB.l)(this, Bo, void 0)), this._specularColor = ((0, OB.l)(this, Io), new tI("specular_color", tB.c.White(), "vSpecularColor", 4)), NB.set(this, (0, OB.l)(this, Zo, void 0)), this._specularColorTexture = ((0, OB.l)(this, To), new bI("specular_color", "specularColor", "SPECULAR_COLOR")), gB.set(this, (0, OB.l)(this, Jo, void 0)), this._specularRoughness = ((0, OB.l)(this, oo), new tI("specular_roughness", .3, "vReflectanceInfo", 4, 1)), qB.set(this, (0, OB.l)(this, Go, void 0)), this._specularRoughnessTexture = ((0, OB.l)(this, vo), new bI("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), yB.set(this, (0, OB.l)(this, ko, void 0)), this._specularRoughnessAnisotropy = ((0, OB.l)(this, co), new tI("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), UB.set(this, (0, OB.l)(this, no, void 0)), this._specularRoughnessAnisotropyTexture = ((0, OB.l)(this, ho), new bI("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), WB.set(this, (0, OB.l)(this, zo, void 0)), this._specularIor = ((0, OB.l)(this, Fo), new tI("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), dB.set(this, (0, OB.l)(this, No, void 0)), this._transmissionWeight = ((0, OB.l)(this, go), new tI("transmission_weight", 0, "vTransmissionWeight", 1)), CB.set(this, (0, OB.l)(this, qo, void 0)), this._transmissionWeightTexture = ((0, OB.l)(this, yo), new bI("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), QB.set(this, (0, OB.l)(this, Uo, void 0)), this._transmissionColor = ((0, OB.l)(this, Wo), new tI("transmission_color", tB.c.White(), "vTransmissionColor", 3, 0)), sB.set(this, (0, OB.l)(this, Co, void 0)), this._transmissionColorTexture = ((0, OB.l)(this, Qo), new bI("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), wB.set(this, (0, OB.l)(this, so, void 0)), this._transmissionDepth = ((0, OB.l)(this, wo), new tI("transmission_depth", 0, "vTransmissionDepth", 1, 0)), HB.set(this, (0, OB.l)(this, Oo, void 0)), this._transmissionDepthTexture = ((0, OB.l)(this, Yo), new bI("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), MB.set(this, (0, OB.l)(this, io, void 0)), this._transmissionScatter = ((0, OB.l)(this, po), new tI("transmission_scatter", tB.c.Black(), "vTransmissionScatter", 3, 0)), jB.set(this, (0, OB.l)(this, ao, void 0)), this._transmissionScatterTexture = ((0, OB.l)(this, Ho), new bI("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), PB.set(this, (0, OB.l)(this, Mo, void 0)), this._transmissionScatterAnisotropy = ((0, OB.l)(this, jo), new tI("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), mB.set(this, (0, OB.l)(this, Po, void 0)), this._transmissionDispersionScale = ((0, OB.l)(this, Ro), new tI("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), eB.set(this, (0, OB.l)(this, ro, void 0)), this._transmissionDispersionScaleTexture = ((0, OB.l)(this, mo), new bI("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), uB.set(this, (0, OB.l)(this, Xo, void 0)), this._transmissionDispersionAbbeNumber = ((0, OB.l)(this, Lo), new tI("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), fB.set(this, (0, OB.l)(this, eo, void 0)), this._subsurfaceWeight = ((0, OB.l)(this, uo), new tI("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), lB.set(this, (0, OB.l)(this, fo, void 0)), this._subsurfaceWeightTexture = ((0, OB.l)(this, Ao), new bI("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), bB.set(this, (0, OB.l)(this, to, void 0)), this._subsurfaceColor = ((0, OB.l)(this, bo), new tI("subsurface_color", new tB.c(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), EB.set(this, (0, OB.l)(this, xo, void 0)), this._subsurfaceColorTexture = ((0, OB.l)(this, Eo), new bI("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), SB.set(this, (0, OB.l)(this, Do, void 0)), this._subsurfaceRadius = ((0, OB.l)(this, Ko), new tI("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), BI.set(this, (0, OB.l)(this, Vo, void 0)), this._subsurfaceRadiusScale = ((0, OB.l)(this, So), new tI("subsurface_radius_scale", new tB.c(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), II.set(this, (0, OB.l)(this, BG, void 0)), this._subsurfaceRadiusScaleTexture = ((0, OB.l)(this, IG), new bI("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), ZI.set(this, (0, OB.l)(this, ZG, void 0)), this._subsurfaceScatterAnisotropy = ((0, OB.l)(this, TG), new tI("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), TI.set(this, (0, OB.l)(this, JG, void 0)), this._coatWeight = ((0, OB.l)(this, oG), new tI("coat_weight", 0, "vCoatWeight", 1, 0)), JI.set(this, (0, OB.l)(this, GG, void 0)), this._coatWeightTexture = ((0, OB.l)(this, vG), new bI("coat_weight", "coatWeight", "COAT_WEIGHT")), oI.set(this, (0, OB.l)(this, kG, void 0)), this._coatColor = ((0, OB.l)(this, cG), new tI("coat_color", tB.c.White(), "vCoatColor", 3, 0)), GI.set(this, (0, OB.l)(this, nG, void 0)), this._coatColorTexture = ((0, OB.l)(this, hG), new bI("coat_color", "coatColor", "COAT_COLOR")), vI.set(this, (0, OB.l)(this, zG, void 0)), this._coatRoughness = ((0, OB.l)(this, FG), new tI("coat_roughness", 0, "vCoatRoughness", 1, 0)), kI.set(this, (0, OB.l)(this, NG, void 0)), this._coatRoughnessTexture = ((0, OB.l)(this, gG), new bI("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), cI.set(this, (0, OB.l)(this, qG, void 0)), this._coatRoughnessAnisotropy = ((0, OB.l)(this, yG), new tI("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), NI.set(this, (0, OB.l)(this, UG, void 0)), this._coatRoughnessAnisotropyTexture = ((0, OB.l)(this, WG), new bI("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), gI.set(this, (0, OB.l)(this, dG, void 0)), this._coatIor = ((0, OB.l)(this, CG), new tI("coat_ior", 1.5, "vCoatIor", 1, 0)), qI.set(this, (0, OB.l)(this, QG, void 0)), this._coatDarkening = ((0, OB.l)(this, sG), new tI("coat_darkening", 1, "vCoatDarkening", 1, 0)), yI.set(this, (0, OB.l)(this, wG, void 0)), this._coatDarkeningTexture = ((0, OB.l)(this, OG), new bI("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, UI.set(this, (0, OB.l)(this, YG, void 0)), this._fuzzWeight = ((0, OB.l)(this, iG), new tI("fuzz_weight", 0, "vFuzzWeight", 1, 0)), WI.set(this, (0, OB.l)(this, pG, void 0)), this._fuzzWeightTexture = ((0, OB.l)(this, aG), new bI("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), dI.set(this, (0, OB.l)(this, HG, void 0)), this._fuzzColor = ((0, OB.l)(this, MG), new tI("fuzz_color", tB.c.White(), "vFuzzColor", 3, 0)), CI.set(this, (0, OB.l)(this, jG, void 0)), this._fuzzColorTexture = ((0, OB.l)(this, PG), new bI("fuzz_color", "fuzzColor", "FUZZ_COLOR")), QI.set(this, (0, OB.l)(this, RG, void 0)), this._fuzzRoughness = ((0, OB.l)(this, rG), new tI("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), OI.set(this, (0, OB.l)(this, mG, void 0)), this._fuzzRoughnessTexture = ((0, OB.l)(this, XG), new bI("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), YI.set(this, (0, OB.l)(this, LG, void 0)), this._geometryThinWalled = ((0, OB.l)(this, eG), new tI("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), iI.set(this, (0, OB.l)(this, uG, void 0)), this._geometryNormalTexture = ((0, OB.l)(this, fG), new bI("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), pI.set(this, (0, OB.l)(this, lG, void 0)), this._geometryTangent = ((0, OB.l)(this, AG), new tI("geometry_tangent", new XB.p(1, 0), "vSpecularAnisotropy", 3, 0)), aI.set(this, (0, OB.l)(this, tG, void 0)), this._geometryTangentTexture = ((0, OB.l)(this, bG), new bI("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), HI.set(this, (0, OB.l)(this, xG, void 0)), this._geometryCoatNormalTexture = ((0, OB.l)(this, EG), new bI("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), MI.set(this, (0, OB.l)(this, DG, void 0)), this._geometryCoatTangent = ((0, OB.l)(this, KG), new tI("geometry_coat_tangent", new XB.p(1, 0), "vGeometryCoatTangent", 2, 0)), jI.set(this, (0, OB.l)(this, VG, void 0)), this._geometryCoatTangentTexture = ((0, OB.l)(this, SG), new bI("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), PI.set(this, (0, OB.l)(this, Bv, void 0)), this._geometryOpacity = ((0, OB.l)(this, Iv), new tI("geometry_opacity", 1, "vBaseColor", 4, 3)), RI.set(this, (0, OB.l)(this, Zv, void 0)), this._geometryOpacityTexture = ((0, OB.l)(this, Tv), new bI("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), rI.set(this, (0, OB.l)(this, Jv, void 0)), this._geometryThickness = ((0, OB.l)(this, ov), new tI("geometry_thickness", 0, "vGeometryThickness", 1, 0)), mI.set(this, (0, OB.l)(this, Gv, void 0)), this._geometryThicknessTexture = ((0, OB.l)(this, vv), new bI("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), XI.set(this, (0, OB.l)(this, kv, void 0)), this._emissionLuminance = ((0, OB.l)(this, cv), new tI("emission_luminance", 1, "vLightingIntensity", 4, 1)), LI.set(this, (0, OB.l)(this, nv, void 0)), this._emissionColor = ((0, OB.l)(this, hv), new tI("emission_color", tB.c.Black(), "vEmissionColor", 3)), uI.set(this, (0, OB.l)(this, zv, void 0)), this._emissionColorTexture = ((0, OB.l)(this, Fv), new bI("emission_color", "emissionColor", "EMISSION_COLOR")), lI.set(this, (0, OB.l)(this, Nv, void 0)), this._thinFilmWeight = ((0, OB.l)(this, gv), new tI("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), xI.set(this, (0, OB.l)(this, qv, void 0)), this._thinFilmWeightTexture = ((0, OB.l)(this, yv), new bI("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), EI.set(this, (0, OB.l)(this, Uv, void 0)), this._thinFilmThickness = ((0, OB.l)(this, Wv), new tI("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), VI.set(this, (0, OB.l)(this, dv, void 0)), this._thinFilmThicknessMin = ((0, OB.l)(this, Cv), new tI("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), SI.set(this, (0, OB.l)(this, Qv, void 0)), this._thinFilmThicknessTexture = ((0, OB.l)(this, sv), new bI("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), BZ.set(this, (0, OB.l)(this, wv, void 0)), this._thinFilmIor = ((0, OB.l)(this, Ov), new tI("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), IZ.set(this, (0, OB.l)(this, Yv, void 0)), this._ambientOcclusionTexture = ((0, OB.l)(this, iv), new bI("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = BB.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, ZZ.set(this, (0, OB.l)(this, pv, 1)), TZ.set(this, ((0, OB.l)(this, av), (0, OB.l)(this, Hv, 1))), JZ.set(this, ((0, OB.l)(this, Mv), (0, OB.l)(this, jv, !1))), oZ.set(this, ((0, OB.l)(this, Pv), (0, OB.l)(this, Rv, !1))), GZ.set(this, ((0, OB.l)(this, rv), (0, OB.l)(this, mv, .4))), vZ.set(this, ((0, OB.l)(this, Xv), (0, OB.l)(this, Lv, !1))), kZ.set(this, ((0, OB.l)(this, ev), (0, OB.l)(this, uv, !1))), cZ.set(this, ((0, OB.l)(this, fv), (0, OB.l)(this, lv, !1))), nZ.set(this, ((0, OB.l)(this, Av), (0, OB.l)(this, tv, !1))), hZ.set(this, ((0, OB.l)(this, bv), (0, OB.l)(this, xv, !1))), zZ.set(this, ((0, OB.l)(this, Ev), (0, OB.l)(this, Dv, .05))), FZ.set(this, ((0, OB.l)(this, Kv), (0, OB.l)(this, Vv, !1))), NZ.set(this, ((0, OB.l)(this, Sv), (0, OB.l)(this, Bk, !1))), gZ.set(this, ((0, OB.l)(this, Ik), (0, OB.l)(this, Zk, 4))), qZ.set(this, ((0, OB.l)(this, Tk), (0, OB.l)(this, Jk, !1))), yZ.set(this, ((0, OB.l)(this, Gk), (0, OB.l)(this, vk, !1))), UZ.set(this, ((0, OB.l)(this, kk), (0, OB.l)(this, ck, !1))), WZ.set(this, ((0, OB.l)(this, nk), (0, OB.l)(this, hk, !1))), dZ.set(this, ((0, OB.l)(this, zk), (0, OB.l)(this, Fk, !1))), CZ.set(this, ((0, OB.l)(this, Nk), (0, OB.l)(this, gk, null))), QZ.set(this, ((0, OB.l)(this, qk), (0, OB.l)(this, yk, !1))), sZ.set(this, ((0, OB.l)(this, Uk), (0, OB.l)(this, Wk, !1))), wZ.set(this, ((0, OB.l)(this, dk), (0, OB.l)(this, Ck, !0))), OZ.set(this, ((0, OB.l)(this, Qk), (0, OB.l)(this, sk, !0))), YZ.set(this, ((0, OB.l)(this, wk), (0, OB.l)(this, Ok, !1))), iZ.set(this, ((0, OB.l)(this, Yk), (0, OB.l)(this, ik, !1))), this._lightingInfos = ((0, OB.l)(this, pk), new XB.t(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = oB.e.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new pB.g(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, pZ.set(this, (0, OB.l)(this, ak, 0)), this.debugLimit = ((0, OB.l)(this, Hk), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = oB.e.MATERIAL_OPAQUE, this.JR() && !this.JR()?.PN().isWebGPU && this.JR().PN().cg < 2 && iB.d.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), BB._noiseTextures[this.JR().uniqueId] || (BB._noiseTextures[this.JR().uniqueId] = new aB.e(wI.j.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.JR(), !1, !0, 1), this.JR().oR.addOnce((() => {
              BB._noiseTextures[this.JR().uniqueId]?.dispose(), delete BB._noiseTextures[this.JR().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), DB.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), DB.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = rB(this.JR()), this._environmentFuzzBRDFTexture = RB(this.JR()), this.prePassConfiguration = new AB.e, this._propertyList = {};
            for (const BB of Object.getOwnPropertyNames(this)) {
              const IB = this[BB];
              IB instanceof tI && (this._propertyList[BB] = IB)
            }
            Object.keys(this._propertyList).forEach((BB => {
              const IB = this._propertyList[BB];
              let ZB = this._uniformsList[IB.targetUniformName];
              ZB ? ZB.numComponents !== IB.targetUniformComponentNum ? iB.d.Error(`Uniform ${IB.targetUniformName} already exists of size ${ZB.numComponents}, but trying to set it to ${IB.targetUniformComponentNum}.`) : ZB.requiredDefine !== IB.requiredDefine && (ZB.requiredDefine = void 0) : (ZB = new AI(IB.targetUniformName, IB.targetUniformComponentNum), ZB.requiredDefine = IB.requiredDefine, this._uniformsList[IB.targetUniformName] = ZB), "" === ZB.firstLinkedKey && (ZB.firstLinkedKey = IB.name), ZB.linkedProperties[IB.name] = IB
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const BB of Object.getOwnPropertyNames(this)) {
              const IB = this[BB];
              IB instanceof bI && (this._samplersList[BB] = IB)
            }
            for (const BB in this._samplersList) {
              const IB = this._samplersList[BB].textureDefine;
              this._samplerDefines[IB] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[IB + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[IB + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(DB.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(DB.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
            return this._hasAlphaChannel() && this._transparencyMode !== oB.e.MATERIAL_OPAQUE && !this.geometryOpacityTexture
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
          clone(IB) {
            let ZB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const JB = sI.b.Clone((() => new BB(IB, this.JR())), this, {
              cloneTexturesOnlyOnce: ZB
            });
            return JB.id = IB, JB.name = IB, this.stencil.copyTo(JB.stencil), this._clonePlugins(JB, TB), JB
          }
          serialize() {
            const BB = super.serialize();
            return BB.customType = "BABYLON.OpenPBRMaterial", BB
          }
          static Parse(IB, ZB, TB) {
            const JB = sI.b.Parse((() => new BB(IB.name, ZB)), IB, ZB, TB);
            return IB.stencil && JB.stencil.parse(IB.stencil, ZB, TB), oB.e._ParsePlugins(IB, JB, ZB, TB), JB
          }
          forceCompilation(BB, IB, ZB) {
            const TB = {
              clipPlane: !1,
              useInstances: !1,
              ...ZB
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const ZB = new DI({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                JB = this._prepareEffect(BB, BB, ZB, void 0, void 0, TB.useInstances, TB.clipPlane);
              this._onEffectCreatedObservable && (fI.effect = JB, fI.subMesh = null, this._onEffectCreatedObservable.notifyObservers(fI)), JB.isReady() ? IB && IB(this) : JB.onCompileObservable.add((() => {
                IB && IB(this)
              }))
            })()
          }
          isReadyForSubMesh(IB, ZB, TB) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const JB = ZB._drawWrapper;
            if (JB.effect && this.isFrozen && JB._wasPreviouslyReady && JB._wasPreviouslyUsingInstances === TB) return !0;
            ZB.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ZB.materialDefines = new DI({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const oB = ZB.materialDefines;
            if (this._isReadyForSubMesh(ZB)) return !0;
            const GB = this.JR(),
              vB = GB.PN();
            if (oB._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, GB.texturesEnabled)) {
              for (const BB in this._samplersList) {
                const IB = this._samplersList[BB];
                if (IB.value && !IB.value.isReadyOrNotBlocking()) return !1
              }
              const IB = this._getRadianceTexture();
              if (IB && DB.e.ReflectionTextureEnabled) {
                if (!IB.isReadyOrNotBlocking()) return !1;
                if (IB.irradianceTexture) {
                  if (!IB.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!IB.sphericalPolynomial && IB.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && DB.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && DB.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && DB.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (BB._noiseTextures[GB.uniqueId] && !BB._noiseTextures[GB.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = oB, this._eventInfo.subMesh = ZB, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (oB._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (oB.AREALIGHTUSED)
              for (let BB = 0; BB < IB.lightSources.length; BB++)
                if (!IB.lightSources[BB]._isReady()) return !1;
            if (vB.getCaps().standardDerivatives || IB.isVerticesDataPresent(LB.i.NormalKind) || (IB.createNormals(!0), iB.d.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + IB.name)), !(0, VB.c)(GB, IB, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const kB = ZB.effect,
              cB = oB._areLightsDisposed,
              nB = this._prepareEffect(IB, ZB.getRenderingMesh(), oB, this.onCompiled, this.onError, TB, null);
            let hB = !1;
            if (nB)
              if (this._onEffectCreatedObservable && (fI.effect = nB, fI.subMesh = ZB, this._onEffectCreatedObservable.notifyObservers(fI)), this.allowShaderHotSwapping && kB && !nB.isReady()) {
                if (oB.markAsUnprocessed(), hB = this.isFrozen, cB) return oB._areLightsDisposed = !0, !1
              } else GB.resetCachedMaterial(), ZB.setEffect(nB, oB, this._materialContext);
            return !(!ZB.effect || !ZB.effect.isReady()) && (oB._renderId = GB.getRenderId(), JB._wasPreviouslyReady = !hB, JB._wasPreviouslyUsingInstances = !!TB, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const BB = this._uniformBuffer;
            BB.addUniform("vTangentSpaceParams", 2), BB.addUniform("vLightingIntensity", 4), BB.addUniform("pointSize", 1), BB.addUniform("vDebugMode", 2), BB.addUniform("renderTargetSize", 2), BB.addUniform("cameraInfo", 4), BB.addUniform("vTextureRepetitionHexTilingParams", 4), BB.addUniform("backgroundRefractionMatrix", 16), BB.addUniform("vBackgroundRefractionInfos", 3), (0, VB.ob)(BB, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((IB => {
              BB.addUniform(IB.name, IB.numComponents)
            })), Object.values(this._samplersList).forEach((IB => {
              BB.addUniform(IB.samplerInfoName, 2), BB.addUniform(IB.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(BB, IB, ZB, TB) {
            if (0 === this.geometryThickness) BB.updateFloat("vGeometryThickness", 0);
            else {
              TB.getRenderingMesh().getWorldMatrix().decompose(XB.m.rN[0]);
              const IB = Math.max(Math.abs(XB.m.rN[0].x), Math.abs(XB.m.rN[0].y), Math.abs(XB.m.rN[0].z));
              BB.updateFloat("vGeometryThickness", this.geometryThickness * IB)
            }
          }
          bindForSubMesh(IB, ZB, TB) {
            const JB = this.JR(),
              oB = TB.materialDefines;
            if (!oB) return;
            const GB = TB.effect;
            if (!GB) return;
            this._activeEffect = GB, ZB.getMeshUniformBuffer().bindToEffect(GB, "Mesh"), ZB.transferToEffect(IB);
            const vB = JB.PN();
            this._uniformBuffer.bindToEffect(GB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, JB, ZB, IB, this.isFrozen), FI.b.Bind(vB.currentRenderPassId, this._activeEffect, ZB, IB, this);
            const kB = JB.activeCamera;
            kB ? this._uniformBuffer.updateFloat4("cameraInfo", kB.minZ, kB.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const cB = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", cB[0], cB[1], cB[2], cB[3]), this._eventInfo.subMesh = TB, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), oB.OBJECTSPACE_NORMALMAP && (IB.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const nB = this._mustRebind(JB, GB, TB, ZB.visibility),
              hB = vB._features.needToAlwaysBindUniformBuffers;
            (0, VB.e)(ZB, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, hI.c)(this._activeEffect, this._vertexPullingMetadata);
            const zB = this._uniformBuffer;
            if (nB) {
              this.bindViewProjection(GB);
              const IB = this._getRadianceTexture();
              if (!zB.useUbo || !this.isFrozen || !zB.isSync || TB._drawWrapper._forceRebindOnNextCall) {
                if (JB.texturesEnabled) {
                  for (const BB in this._samplersList) {
                    const IB = this._samplersList[BB];
                    IB.value && (zB.updateFloat2(IB.samplerInfoName, IB.value.coordinatesIndex, IB.value.level), (0, VB.y)(IB.value, zB, IB.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (JB._mirroredCameraPosition ? zB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : zB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, VB.j)(JB, oB, zB, tB.c.White(), IB, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && zB.updateFloat("pointSize", this.pointSize);
                const BB = this._uniformsArray;
                for (let IB = 0, ZB = BB.length; IB < ZB; IB++) {
                  const ZB = BB[IB];
                  (void 0 === ZB.requiredDefine || oB[ZB.requiredDefine]) && (4 === ZB.numComponents ? (ZB.populateVectorFromLinkedProperties(XB.m.Vector4[0]), zB.updateVector4(ZB.name, XB.m.Vector4[0])) : 3 === ZB.numComponents ? (ZB.populateVectorFromLinkedProperties(XB.m.rN[0]), zB.updateVector3(ZB.name, XB.m.rN[0])) : 2 === ZB.numComponents ? (ZB.populateVectorFromLinkedProperties(XB.m.Vector2[0]), zB.updateFloat2(ZB.name, XB.m.Vector2[0].x, XB.m.Vector2[0].y)) : 1 === ZB.numComponents && zB.updateFloat(ZB.name, ZB.linkedProperties[ZB.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * JB.environmentIntensity, this._lightingInfos.w = 1, zB.updateVector4("vLightingIntensity", this._lightingInfos), zB.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (JB.texturesEnabled) {
                for (const BB in this._samplersList) {
                  const IB = this._samplersList[BB];
                  IB.value && zB.setTexture(IB.samplerName, IB.value)
                }
                if ((0, VB.n)(JB, oB, zB, IB, this.realTimeFiltering), oB.ENVIRONMENTBRDF && zB.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), oB.FUZZENVIRONMENTBRDF && zB.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), oB.REFRACTED_BACKGROUND && (zB.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), zB.T6("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), XB.m.rN[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), zB.updateVector3("vBackgroundRefractionInfos", XB.m.rN[1])), (oB.ANISOTROPIC || oB.FUZZ || oB.REFRACTED_BACKGROUND || oB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && zB.setTexture("blueNoiseSampler", BB._noiseTextures[this.JR().uniqueId]), oB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const BB = this.sssIrradianceTexture.getSize().width,
                    IB = this.sssIrradianceTexture.getSize().height;
                  zB.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), zB.setTexture("sceneDepthSampler", this.sssDepthTexture), zB.updateFloat2("renderTargetSize", BB, IB)
                }
              }
              this.JR().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ZB) && this.JR().depthPeelingRenderer.bind(GB), this._eventInfo.subMesh = TB, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, nI.d)(this._activeEffect, this, JB), this.bindEyePosition(GB)
            } else hB && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, JB, JB.PN(), TB), !nB && this.isFrozen && !hB || !JB.lightsEnabled || this._disableLighting || (0, VB.p)(JB, ZB, this._activeEffect, oB, this._maxSimultaneousLights), !nB && this.isFrozen || (this.bindView(GB), (0, VB.h)(JB, ZB, this._activeEffect, !0), oB.NUM_MORPH_INFLUENCERS && (0, VB.t)(ZB, this._activeEffect), oB.BAKED_VERTEX_ANIMATION_TEXTURE && ZB.bakedVertexAnimationManager?.bind(GB, oB.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, VB.s)(oB, this._activeEffect, JB)), this._afterBind(ZB, this._activeEffect, TB), zB.update()
          }
          getAnimatables() {
            const BB = super.getAnimatables();
            for (const IB in this._samplersList) {
              const ZB = this._samplersList[IB];
              ZB.value && ZB.value.animations && ZB.value.animations.length > 0 && BB.push(ZB.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && BB.push(this._radianceTexture), BB
          }
          getActiveTextures() {
            const BB = super.getActiveTextures();
            for (const IB in this._samplersList) {
              const ZB = this._samplersList[IB];
              ZB.value && BB.push(ZB.value)
            }
            return this._radianceTexture && BB.push(this._radianceTexture), BB
          }
          hasTexture(BB) {
            if (super.hasTexture(BB)) return !0;
            for (const IB in this._samplersList) {
              if (this._samplersList[IB].value === BB) return !0
            }
            return this._radianceTexture === BB
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(BB, IB) {
            if (this._breakShaderLoadedCheck = !0, IB) {
              this._environmentBRDFTexture && this.JR().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.JR().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const BB in this._samplersList) {
                const IB = this._samplersList[BB];
                IB.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(BB, IB)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.JR().environmentTexture
          }
          _prepareEffect(IB, ZB, TB) {
            let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              GB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              vB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(IB, ZB, TB, GB, vB), !TB.isDirty) return null;
            TB.markAsProcessed();
            const kB = this.JR().PN(),
              cB = new KB.e;
            let nB = 0;
            TB.USESPHERICALINVERTEX && cB.addFallback(nB++, "USESPHERICALINVERTEX"), TB.FOG && cB.addFallback(nB, "FOG"), TB.SPECULARAA && cB.addFallback(nB, "SPECULARAA"), TB.POINTSIZE && cB.addFallback(nB, "POINTSIZE"), TB.LOGARITHMICDEPTH && cB.addFallback(nB, "LOGARITHMICDEPTH"), TB.PARALLAX && cB.addFallback(nB, "PARALLAX"), TB.PARALLAX_RHS && cB.addFallback(nB, "PARALLAX_RHS"), TB.PARALLAXOCCLUSION && cB.addFallback(nB++, "PARALLAXOCCLUSION"), TB.ENVIRONMENTBRDF && cB.addFallback(nB++, "ENVIRONMENTBRDF"), TB.TANGENT && cB.addFallback(nB++, "TANGENT"), nB = (0, VB.C)(TB, cB, this._maxSimultaneousLights, nB), TB.SPECULARTERM && cB.addFallback(nB++, "SPECULARTERM"), TB.USESPHERICALFROMREFLECTIONMAP && cB.addFallback(nB++, "USESPHERICALFROMREFLECTIONMAP"), TB.USEIRRADIANCEMAP && cB.addFallback(nB++, "USEIRRADIANCEMAP"), TB.NORMAL && cB.addFallback(nB++, "NORMAL"), TB.VERTEXCOLOR && cB.addFallback(nB++, "VERTEXCOLOR"), TB.MORPHTARGETS && cB.addFallback(nB++, "MORPHTARGETS"), TB.MULTIVIEW && cB.addFallback(0, "MULTIVIEW");
            const hB = [LB.i.PositionKind];
            TB.NORMAL && hB.push(LB.i.NormalKind), TB.TANGENT && hB.push(LB.i.TangentKind);
            for (let BB = 1; BB <= 6; ++BB) TB["UV" + BB] && hB.push(`uv${1===BB?"":BB}`);
            TB.VERTEXCOLOR && hB.push(LB.i.ColorKind), (0, VB.I)(hB, IB, TB, cB), (0, VB.L)(hB, TB), (0, VB.M)(hB, IB, TB), (0, VB.F)(hB, IB, TB);
            let zB = "openpbr";
            const FB = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const BB in this._uniformsList) FB.push(BB);
            const NB = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            TB.FUZZENVIRONMENTBRDF && NB.push("environmentFuzzBrdfSampler"), TB.REFRACTED_BACKGROUND && NB.push("backgroundRefractionSampler"), (TB.ANISOTROPIC || TB.FUZZ || TB.REFRACTED_BACKGROUND || TB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && NB.push("blueNoiseSampler"), TB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (NB.push("sceneIrradianceSampler"), NB.push("sceneDepthSampler"));
            for (const BB in this._samplersList) {
              const IB = this._samplersList[BB];
              NB.push(IB.samplerName), FB.push(IB.samplerInfoName), FB.push(IB.samplerMatrixName)
            }(0, VB.rb)(FB, NB, !0);
            const gB = ["Material", "Scene", "Mesh"],
              qB = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: TB.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = cB, this._eventInfo.fallbackRank = nB, this._eventInfo.defines = TB, this._eventInfo.uniforms = FB, this._eventInfo.attributes = hB, this._eventInfo.samplers = NB, this._eventInfo.uniformBuffersNames = gB, this._eventInfo.customCode = void 0, this._eventInfo.mesh = IB, this._eventInfo.indexParameters = qB, this._callbackPluginEventGeneric(128, this._eventInfo), FI.b.AddUniformsAndSamplers(FB, NB), AB.e.AddUniforms(FB), AB.e.AddSamplers(NB), (0, nI.c)(FB), this._useVertexPulling) {
              const BB = ZB?.geometry;
              BB && (this._vertexPullingMetadata = (0, hI.d)(BB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, IB) => {
                FB.push(`vp_${IB}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            xB.b && (xB.b.PrepareUniforms(FB, TB), xB.b.PrepareSamplers(NB, TB)), (0, VB.vb)({
              uniformsNames: FB,
              uniformBuffersNames: gB,
              samplers: NB,
              defines: TB,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const yB = {};
            this.customShaderNameResolve && (zB = this.customShaderNameResolve(zB, FB, gB, NB, TB, hB, yB));
            const UB = TB.toString(),
              WB = kB.createEffect(zB, {
                attributes: hB,
                uniformsNames: FB,
                uniformBuffersNames: gB,
                samplers: NB,
                defines: UB,
                fallbacks: cB,
                onCompiled: JB,
                onError: oB,
                indexParameters: qB,
                processFinalCode: yB.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: TB.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: BB._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, kB);
            return this._eventInfo.customCode = void 0, WB
          }
          _prepareDefines(IB, ZB, TB) {
            let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              GB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const vB = ZB.hasThinInstances,
              kB = this.JR(),
              cB = kB.PN();
            (0, VB.Y)(kB, IB, TB, !0, this._maxSimultaneousLights, this._disableLighting), TB._needNormals = !0, (0, VB.fb)(kB, TB);
            const nB = this.needAlphaBlendingForMesh(IB) && this.JR().useOrderIndependentTransparency;
            if ((0, VB.kb)(kB, TB, this.canRenderToMRT && !nB), (0, VB.gb)(kB, TB, nB), FI.b.PrepareDefines(cB.currentRenderPassId, IB, TB), TB._areTexturesDirty) {
              TB._needUVs = !1;
              for (let BB = 1; BB <= 6; ++BB) TB["MAINUV" + BB] = !1;
              if (kB.texturesEnabled) {
                for (const ZB in this._samplersList) {
                  const BB = this._samplersList[ZB];
                  BB.value ? ((0, VB.ab)(BB.value, TB, BB.textureDefine), TB[BB.textureDefine + "_GAMMA"] = BB.value.gammaSpace) : TB[BB.textureDefine] = !1
                }
                const BB = this._getRadianceTexture(),
                  IB = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || cB.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, VB.W)(kB, BB, TB, this.realTimeFiltering, this.realTimeFilteringQuality, !IB), this._baseMetalnessTexture && (TB.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), TB.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, TB.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, TB.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, TB.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, TB.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, TB.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, TB.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, TB.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, TB.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, TB.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, TB.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && DB.e.DiffuseTextureEnabled ? (TB.PARALLAX = !0, TB.PARALLAX_RHS = kB.useRightHandedSystem, TB.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : TB.PARALLAX = !1, TB.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (TB.PARALLAX = !1, TB.PARALLAX_RHS = !1, TB.PARALLAXOCCLUSION = !1, TB.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && DB.e.ReflectionTextureEnabled ? (TB.ENVIRONMENTBRDF = !0, TB.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (TB.ENVIRONMENTBRDF = !1, TB.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? TB.FUZZENVIRONMENTBRDF = !0 : TB.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  TB.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && DB.e.RefractionTextureEnabled, TB.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, TB.REFRACTED_LIGHTS = !0;
                  const BB = this._getRadianceTexture();
                  BB ? (TB.REFRACTED_ENVIRONMENT = DB.e.RefractionTextureEnabled, TB.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.JR().useRightHandedSystem ? !BB.invertZ : BB.invertZ, TB.REFRACTED_ENVIRONMENT_LOCAL_CUBE = BB.isCube && BB.boundingBoxSize) : TB.REFRACTED_ENVIRONMENT = !1
                } else TB.REFRACTED_BACKGROUND = !1, TB.REFRACTED_LIGHTS = !1, TB.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? TB.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : TB.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === oB.e.LIGHTFALLOFF_STANDARD ? (TB.USEPHYSICALLIGHTFALLOFF = !1, TB.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === oB.e.LIGHTFALLOFF_GLTF ? (TB.USEPHYSICALLIGHTFALLOFF = !1, TB.USEGLTFLIGHTFALLOFF = !0) : (TB.USEPHYSICALLIGHTFALLOFF = !0, TB.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? TB.TWOSIDEDLIGHTING = !0 : TB.TWOSIDEDLIGHTING = !1, TB.MIRRORED = !!kB._mirroredCameraPosition, TB.SPECULARAA = cB.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(TB._areTexturesDirty || TB._areMiscDirty) && (TB.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, TB.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, TB.ALPHABLEND = this.needAlphaBlendingForMesh(IB)), TB._areTexturesDirty && (TB.TEXTURE_REPETITION_MODE = cB.version > 1 || cB.isWebGPU ? this.textureRepetitionMode : 0), TB._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(TB), TB.FORCENORMALFORWARD = this._forceNormalForward, TB.RADIANCEOCCLUSION = this._useRadianceOcclusion, TB.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && BB._noiseTextures[kB.uniqueId] && DB.e.ReflectionTextureEnabled ? (TB.ANISOTROPIC = !0, IB.isVerticesDataPresent(LB.i.TangentKind) || (TB._needUVs = !0, TB.MAINUV1 = !0), this._useGltfStyleAnisotropy && (TB.USE_GLTF_STYLE_ANISOTROPY = !0), TB.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, TB.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (TB.ANISOTROPIC = !1, TB.USE_GLTF_STYLE_ANISOTROPY = !1, TB.ANISOTROPIC_BASE = !1, TB.ANISOTROPIC_COAT = !1), TB.THIN_FILM = this.thinFilmWeight > 0, TB.IRIDESCENCE = this.thinFilmWeight > 0, TB.DISPERSION = this.transmissionDispersionScale > 0, TB.SCATTERING = this.hasScattering;
            if (TB.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, TB.TRANSMISSION_SLAB = this.transmissionWeight > 0, TB.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, TB.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !TB.PREPASS && (TB.SUBSURFACE_SLAB || TB.TRANSMISSION_SLAB_VOLUME)) {
              let BB = !1;
              if (!this.sssIrradianceTexture && kB.geometryBufferRenderer) {
                const IB = kB.geometryBufferRenderer.getTextureIndex(eI.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = kB.geometryBufferRenderer.getGBuffer().textures[IB], BB = !0
              }
              if (!this.sssDepthTexture && kB.geometryBufferRenderer) {
                const IB = kB.geometryBufferRenderer.getTextureIndex(eI.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = kB.geometryBufferRenderer.getGBuffer().textures[IB], BB = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (TB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, BB && (TB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            TB.FUZZ = this.fuzzWeight > 0 && DB.e.ReflectionTextureEnabled, TB.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, TB.FUZZ ? (IB.isVerticesDataPresent(LB.i.TangentKind) || (TB._needUVs = !0, TB.MAINUV1 = !0), this._environmentFuzzBRDFTexture = RB(this.JR()), TB.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, TB.FUZZENVIRONMENTBRDF = !1, TB.FUZZ_IBL_SAMPLES = 0), TB._areMiscDirty && ((0, VB.eb)(IB, kB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(IB), TB, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ZB, this._isVertexOutputInvariant), TB.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !IB.isVerticesDataPresent(LB.i.NormalKind), TB.DEBUGMODE = this._debugMode), (0, VB.V)(kB, cB, this, TB, !!JB, GB, vB), this._eventInfo.defines = TB, this._eventInfo.mesh = IB, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, VB.R)(IB, TB, !0, !0, !0, this._transparencyMode !== oB.e.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, IB = new WeakMap, TB = new WeakMap, JB = new WeakMap, GB = new WeakMap, vB = new WeakMap, kB = new WeakMap, cB = new WeakMap, nB = new WeakMap, hB = new WeakMap, zB = new WeakMap, FB = new WeakMap, NB = new WeakMap, gB = new WeakMap, qB = new WeakMap, yB = new WeakMap, UB = new WeakMap, WB = new WeakMap, dB = new WeakMap, CB = new WeakMap, QB = new WeakMap, sB = new WeakMap, wB = new WeakMap, HB = new WeakMap, MB = new WeakMap, jB = new WeakMap, PB = new WeakMap, mB = new WeakMap, eB = new WeakMap, uB = new WeakMap, fB = new WeakMap, lB = new WeakMap, bB = new WeakMap, EB = new WeakMap, SB = new WeakMap, BI = new WeakMap, II = new WeakMap, ZI = new WeakMap, TI = new WeakMap, JI = new WeakMap, oI = new WeakMap, GI = new WeakMap, vI = new WeakMap, kI = new WeakMap, cI = new WeakMap, NI = new WeakMap, gI = new WeakMap, qI = new WeakMap, yI = new WeakMap, UI = new WeakMap, WI = new WeakMap, dI = new WeakMap, CI = new WeakMap, QI = new WeakMap, OI = new WeakMap, YI = new WeakMap, iI = new WeakMap, pI = new WeakMap, aI = new WeakMap, HI = new WeakMap, MI = new WeakMap, jI = new WeakMap, PI = new WeakMap, RI = new WeakMap, rI = new WeakMap, mI = new WeakMap, XI = new WeakMap, LI = new WeakMap, uI = new WeakMap, lI = new WeakMap, xI = new WeakMap, EI = new WeakMap, VI = new WeakMap, SI = new WeakMap, BZ = new WeakMap, IZ = new WeakMap, ZZ = new WeakMap, TZ = new WeakMap, JZ = new WeakMap, oZ = new WeakMap, GZ = new WeakMap, vZ = new WeakMap, kZ = new WeakMap, cZ = new WeakMap, nZ = new WeakMap, hZ = new WeakMap, zZ = new WeakMap, FZ = new WeakMap, NZ = new WeakMap, gZ = new WeakMap, qZ = new WeakMap, yZ = new WeakMap, UZ = new WeakMap, WZ = new WeakMap, dZ = new WeakMap, CZ = new WeakMap, QZ = new WeakMap, sZ = new WeakMap, wZ = new WeakMap, OZ = new WeakMap, YZ = new WeakMap, iZ = new WeakMap, pZ = new WeakMap, (() => {
          const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(HJ[Symbol.metadata] ?? null) : void 0;
          aZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], HZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], MZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], jZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], PZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], RZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], rZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], mZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], XZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], LZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], eZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], uZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], fZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], lZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], AZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], tZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], bZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], xZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], EZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], DZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], KZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], VZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], SZ = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], BT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], IT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], ZT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], TT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], JT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], oT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], GT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], vT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], kT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], cT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], nT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], hT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], zT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], FT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], NT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], gT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], qT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], yT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], UT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], WT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], dT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], CT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], QT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], sT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], wT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], OT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], YT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], iT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], pT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], aT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], HT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], MT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], jT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], PT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], RT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], rT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], mT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], XT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], LT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], eT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], uT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], fT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], lT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], AT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], tT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], bT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], xT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], ET = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], DT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], KT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], VT = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], ST = [(0, YB.d)("_markAllSubMeshesAsTexturesDirty")], BJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], IJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], ZJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], TJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], JJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], oJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], GJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], vJ = [(0, YB.C)()], kJ = [(0, YB.C)()], cJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], nJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], hJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], zJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], FJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsLightsDirty")], NJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], gJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsLightsDirty")], qJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], yJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], UJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], WJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], dJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], CJ = [(0, YB.e)("_markAllSubMeshesAsTexturesDirty")], QJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], sJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], wJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], OJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], YJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsMiscDirty")], iJ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsMiscDirty")], pJ = [(0, YB.e)("_markAllSubMeshesAsMiscDirty")], aJ = [(0, YB.C)()], (0, OB.j)(BB, null, aZ, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseWeight" in BB,
              get: BB => BB.baseWeight,
              set: (BB, IB) => {
                BB.baseWeight = IB
              }
            },
            metadata: IB
          }, jJ, PJ), (0, OB.j)(BB, null, HZ, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseWeightTexture" in BB,
              get: BB => BB.baseWeightTexture,
              set: (BB, IB) => {
                BB.baseWeightTexture = IB
              }
            },
            metadata: IB
          }, RJ, rJ), (0, OB.j)(BB, null, MZ, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseColor" in BB,
              get: BB => BB.baseColor,
              set: (BB, IB) => {
                BB.baseColor = IB
              }
            },
            metadata: IB
          }, mJ, XJ), (0, OB.j)(BB, null, jZ, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseColorTexture" in BB,
              get: BB => BB.baseColorTexture,
              set: (BB, IB) => {
                BB.baseColorTexture = IB
              }
            },
            metadata: IB
          }, LJ, eJ), (0, OB.j)(BB, null, PZ, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseDiffuseRoughness" in BB,
              get: BB => BB.baseDiffuseRoughness,
              set: (BB, IB) => {
                BB.baseDiffuseRoughness = IB
              }
            },
            metadata: IB
          }, uJ, fJ), (0, OB.j)(BB, null, RZ, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseDiffuseRoughnessTexture" in BB,
              get: BB => BB.baseDiffuseRoughnessTexture,
              set: (BB, IB) => {
                BB.baseDiffuseRoughnessTexture = IB
              }
            },
            metadata: IB
          }, lJ, AJ), (0, OB.j)(BB, null, rZ, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseMetalness" in BB,
              get: BB => BB.baseMetalness,
              set: (BB, IB) => {
                BB.baseMetalness = IB
              }
            },
            metadata: IB
          }, tJ, bJ), (0, OB.j)(BB, null, mZ, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseMetalnessTexture" in BB,
              get: BB => BB.baseMetalnessTexture,
              set: (BB, IB) => {
                BB.baseMetalnessTexture = IB
              }
            },
            metadata: IB
          }, xJ, EJ), (0, OB.j)(BB, null, XZ, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularWeight" in BB,
              get: BB => BB.specularWeight,
              set: (BB, IB) => {
                BB.specularWeight = IB
              }
            },
            metadata: IB
          }, DJ, KJ), (0, OB.j)(BB, null, LZ, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularWeightTexture" in BB,
              get: BB => BB.specularWeightTexture,
              set: (BB, IB) => {
                BB.specularWeightTexture = IB
              }
            },
            metadata: IB
          }, VJ, SJ), (0, OB.j)(BB, null, eZ, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularColor" in BB,
              get: BB => BB.specularColor,
              set: (BB, IB) => {
                BB.specularColor = IB
              }
            },
            metadata: IB
          }, Bo, Io), (0, OB.j)(BB, null, uZ, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularColorTexture" in BB,
              get: BB => BB.specularColorTexture,
              set: (BB, IB) => {
                BB.specularColorTexture = IB
              }
            },
            metadata: IB
          }, Zo, To), (0, OB.j)(BB, null, fZ, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularRoughness" in BB,
              get: BB => BB.specularRoughness,
              set: (BB, IB) => {
                BB.specularRoughness = IB
              }
            },
            metadata: IB
          }, Jo, oo), (0, OB.j)(BB, null, lZ, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularRoughnessTexture" in BB,
              get: BB => BB.specularRoughnessTexture,
              set: (BB, IB) => {
                BB.specularRoughnessTexture = IB
              }
            },
            metadata: IB
          }, Go, vo), (0, OB.j)(BB, null, AZ, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularRoughnessAnisotropy" in BB,
              get: BB => BB.specularRoughnessAnisotropy,
              set: (BB, IB) => {
                BB.specularRoughnessAnisotropy = IB
              }
            },
            metadata: IB
          }, ko, co), (0, OB.j)(BB, null, tZ, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularRoughnessAnisotropyTexture" in BB,
              get: BB => BB.specularRoughnessAnisotropyTexture,
              set: (BB, IB) => {
                BB.specularRoughnessAnisotropyTexture = IB
              }
            },
            metadata: IB
          }, no, ho), (0, OB.j)(BB, null, bZ, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularIor" in BB,
              get: BB => BB.specularIor,
              set: (BB, IB) => {
                BB.specularIor = IB
              }
            },
            metadata: IB
          }, zo, Fo), (0, OB.j)(BB, null, xZ, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionWeight" in BB,
              get: BB => BB.transmissionWeight,
              set: (BB, IB) => {
                BB.transmissionWeight = IB
              }
            },
            metadata: IB
          }, No, go), (0, OB.j)(BB, null, EZ, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionWeightTexture" in BB,
              get: BB => BB.transmissionWeightTexture,
              set: (BB, IB) => {
                BB.transmissionWeightTexture = IB
              }
            },
            metadata: IB
          }, qo, yo), (0, OB.j)(BB, null, DZ, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionColor" in BB,
              get: BB => BB.transmissionColor,
              set: (BB, IB) => {
                BB.transmissionColor = IB
              }
            },
            metadata: IB
          }, Uo, Wo), (0, OB.j)(BB, null, KZ, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionColorTexture" in BB,
              get: BB => BB.transmissionColorTexture,
              set: (BB, IB) => {
                BB.transmissionColorTexture = IB
              }
            },
            metadata: IB
          }, Co, Qo), (0, OB.j)(BB, null, VZ, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDepth" in BB,
              get: BB => BB.transmissionDepth,
              set: (BB, IB) => {
                BB.transmissionDepth = IB
              }
            },
            metadata: IB
          }, so, wo), (0, OB.j)(BB, null, SZ, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDepthTexture" in BB,
              get: BB => BB.transmissionDepthTexture,
              set: (BB, IB) => {
                BB.transmissionDepthTexture = IB
              }
            },
            metadata: IB
          }, Oo, Yo), (0, OB.j)(BB, null, BT, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionScatter" in BB,
              get: BB => BB.transmissionScatter,
              set: (BB, IB) => {
                BB.transmissionScatter = IB
              }
            },
            metadata: IB
          }, io, po), (0, OB.j)(BB, null, IT, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionScatterTexture" in BB,
              get: BB => BB.transmissionScatterTexture,
              set: (BB, IB) => {
                BB.transmissionScatterTexture = IB
              }
            },
            metadata: IB
          }, ao, Ho), (0, OB.j)(BB, null, ZT, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionScatterAnisotropy" in BB,
              get: BB => BB.transmissionScatterAnisotropy,
              set: (BB, IB) => {
                BB.transmissionScatterAnisotropy = IB
              }
            },
            metadata: IB
          }, Mo, jo), (0, OB.j)(BB, null, TT, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDispersionScale" in BB,
              get: BB => BB.transmissionDispersionScale,
              set: (BB, IB) => {
                BB.transmissionDispersionScale = IB
              }
            },
            metadata: IB
          }, Po, Ro), (0, OB.j)(BB, null, JT, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDispersionScaleTexture" in BB,
              get: BB => BB.transmissionDispersionScaleTexture,
              set: (BB, IB) => {
                BB.transmissionDispersionScaleTexture = IB
              }
            },
            metadata: IB
          }, ro, mo), (0, OB.j)(BB, null, oT, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDispersionAbbeNumber" in BB,
              get: BB => BB.transmissionDispersionAbbeNumber,
              set: (BB, IB) => {
                BB.transmissionDispersionAbbeNumber = IB
              }
            },
            metadata: IB
          }, Xo, Lo), (0, OB.j)(BB, null, GT, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceWeight" in BB,
              get: BB => BB.subsurfaceWeight,
              set: (BB, IB) => {
                BB.subsurfaceWeight = IB
              }
            },
            metadata: IB
          }, eo, uo), (0, OB.j)(BB, null, vT, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceWeightTexture" in BB,
              get: BB => BB.subsurfaceWeightTexture,
              set: (BB, IB) => {
                BB.subsurfaceWeightTexture = IB
              }
            },
            metadata: IB
          }, fo, Ao), (0, OB.j)(BB, null, kT, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceColor" in BB,
              get: BB => BB.subsurfaceColor,
              set: (BB, IB) => {
                BB.subsurfaceColor = IB
              }
            },
            metadata: IB
          }, to, bo), (0, OB.j)(BB, null, cT, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceColorTexture" in BB,
              get: BB => BB.subsurfaceColorTexture,
              set: (BB, IB) => {
                BB.subsurfaceColorTexture = IB
              }
            },
            metadata: IB
          }, xo, Eo), (0, OB.j)(BB, null, nT, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceRadius" in BB,
              get: BB => BB.subsurfaceRadius,
              set: (BB, IB) => {
                BB.subsurfaceRadius = IB
              }
            },
            metadata: IB
          }, Do, Ko), (0, OB.j)(BB, null, hT, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceRadiusScale" in BB,
              get: BB => BB.subsurfaceRadiusScale,
              set: (BB, IB) => {
                BB.subsurfaceRadiusScale = IB
              }
            },
            metadata: IB
          }, Vo, So), (0, OB.j)(BB, null, zT, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceRadiusScaleTexture" in BB,
              get: BB => BB.subsurfaceRadiusScaleTexture,
              set: (BB, IB) => {
                BB.subsurfaceRadiusScaleTexture = IB
              }
            },
            metadata: IB
          }, BG, IG), (0, OB.j)(BB, null, FT, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceScatterAnisotropy" in BB,
              get: BB => BB.subsurfaceScatterAnisotropy,
              set: (BB, IB) => {
                BB.subsurfaceScatterAnisotropy = IB
              }
            },
            metadata: IB
          }, ZG, TG), (0, OB.j)(BB, null, NT, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatWeight" in BB,
              get: BB => BB.coatWeight,
              set: (BB, IB) => {
                BB.coatWeight = IB
              }
            },
            metadata: IB
          }, JG, oG), (0, OB.j)(BB, null, gT, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatWeightTexture" in BB,
              get: BB => BB.coatWeightTexture,
              set: (BB, IB) => {
                BB.coatWeightTexture = IB
              }
            },
            metadata: IB
          }, GG, vG), (0, OB.j)(BB, null, qT, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatColor" in BB,
              get: BB => BB.coatColor,
              set: (BB, IB) => {
                BB.coatColor = IB
              }
            },
            metadata: IB
          }, kG, cG), (0, OB.j)(BB, null, yT, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatColorTexture" in BB,
              get: BB => BB.coatColorTexture,
              set: (BB, IB) => {
                BB.coatColorTexture = IB
              }
            },
            metadata: IB
          }, nG, hG), (0, OB.j)(BB, null, UT, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatRoughness" in BB,
              get: BB => BB.coatRoughness,
              set: (BB, IB) => {
                BB.coatRoughness = IB
              }
            },
            metadata: IB
          }, zG, FG), (0, OB.j)(BB, null, WT, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatRoughnessTexture" in BB,
              get: BB => BB.coatRoughnessTexture,
              set: (BB, IB) => {
                BB.coatRoughnessTexture = IB
              }
            },
            metadata: IB
          }, NG, gG), (0, OB.j)(BB, null, dT, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatRoughnessAnisotropy" in BB,
              get: BB => BB.coatRoughnessAnisotropy,
              set: (BB, IB) => {
                BB.coatRoughnessAnisotropy = IB
              }
            },
            metadata: IB
          }, qG, yG), (0, OB.j)(BB, null, CT, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatRoughnessAnisotropyTexture" in BB,
              get: BB => BB.coatRoughnessAnisotropyTexture,
              set: (BB, IB) => {
                BB.coatRoughnessAnisotropyTexture = IB
              }
            },
            metadata: IB
          }, UG, WG), (0, OB.j)(BB, null, QT, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatIor" in BB,
              get: BB => BB.coatIor,
              set: (BB, IB) => {
                BB.coatIor = IB
              }
            },
            metadata: IB
          }, dG, CG), (0, OB.j)(BB, null, sT, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatDarkening" in BB,
              get: BB => BB.coatDarkening,
              set: (BB, IB) => {
                BB.coatDarkening = IB
              }
            },
            metadata: IB
          }, QG, sG), (0, OB.j)(BB, null, wT, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatDarkeningTexture" in BB,
              get: BB => BB.coatDarkeningTexture,
              set: (BB, IB) => {
                BB.coatDarkeningTexture = IB
              }
            },
            metadata: IB
          }, wG, OG), (0, OB.j)(BB, null, OT, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzWeight" in BB,
              get: BB => BB.fuzzWeight,
              set: (BB, IB) => {
                BB.fuzzWeight = IB
              }
            },
            metadata: IB
          }, YG, iG), (0, OB.j)(BB, null, YT, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzWeightTexture" in BB,
              get: BB => BB.fuzzWeightTexture,
              set: (BB, IB) => {
                BB.fuzzWeightTexture = IB
              }
            },
            metadata: IB
          }, pG, aG), (0, OB.j)(BB, null, iT, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzColor" in BB,
              get: BB => BB.fuzzColor,
              set: (BB, IB) => {
                BB.fuzzColor = IB
              }
            },
            metadata: IB
          }, HG, MG), (0, OB.j)(BB, null, pT, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzColorTexture" in BB,
              get: BB => BB.fuzzColorTexture,
              set: (BB, IB) => {
                BB.fuzzColorTexture = IB
              }
            },
            metadata: IB
          }, jG, PG), (0, OB.j)(BB, null, aT, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzRoughness" in BB,
              get: BB => BB.fuzzRoughness,
              set: (BB, IB) => {
                BB.fuzzRoughness = IB
              }
            },
            metadata: IB
          }, RG, rG), (0, OB.j)(BB, null, HT, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzRoughnessTexture" in BB,
              get: BB => BB.fuzzRoughnessTexture,
              set: (BB, IB) => {
                BB.fuzzRoughnessTexture = IB
              }
            },
            metadata: IB
          }, mG, XG), (0, OB.j)(BB, null, MT, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryThinWalled" in BB,
              get: BB => BB.geometryThinWalled,
              set: (BB, IB) => {
                BB.geometryThinWalled = IB
              }
            },
            metadata: IB
          }, LG, eG), (0, OB.j)(BB, null, jT, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryNormalTexture" in BB,
              get: BB => BB.geometryNormalTexture,
              set: (BB, IB) => {
                BB.geometryNormalTexture = IB
              }
            },
            metadata: IB
          }, uG, fG), (0, OB.j)(BB, null, PT, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryTangent" in BB,
              get: BB => BB.geometryTangent,
              set: (BB, IB) => {
                BB.geometryTangent = IB
              }
            },
            metadata: IB
          }, lG, AG), (0, OB.j)(BB, null, RT, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryTangentTexture" in BB,
              get: BB => BB.geometryTangentTexture,
              set: (BB, IB) => {
                BB.geometryTangentTexture = IB
              }
            },
            metadata: IB
          }, tG, bG), (0, OB.j)(BB, null, rT, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryCoatNormalTexture" in BB,
              get: BB => BB.geometryCoatNormalTexture,
              set: (BB, IB) => {
                BB.geometryCoatNormalTexture = IB
              }
            },
            metadata: IB
          }, xG, EG), (0, OB.j)(BB, null, mT, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryCoatTangent" in BB,
              get: BB => BB.geometryCoatTangent,
              set: (BB, IB) => {
                BB.geometryCoatTangent = IB
              }
            },
            metadata: IB
          }, DG, KG), (0, OB.j)(BB, null, XT, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryCoatTangentTexture" in BB,
              get: BB => BB.geometryCoatTangentTexture,
              set: (BB, IB) => {
                BB.geometryCoatTangentTexture = IB
              }
            },
            metadata: IB
          }, VG, SG), (0, OB.j)(BB, null, LT, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryOpacity" in BB,
              get: BB => BB.geometryOpacity,
              set: (BB, IB) => {
                BB.geometryOpacity = IB
              }
            },
            metadata: IB
          }, Bv, Iv), (0, OB.j)(BB, null, eT, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryOpacityTexture" in BB,
              get: BB => BB.geometryOpacityTexture,
              set: (BB, IB) => {
                BB.geometryOpacityTexture = IB
              }
            },
            metadata: IB
          }, Zv, Tv), (0, OB.j)(BB, null, uT, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryThickness" in BB,
              get: BB => BB.geometryThickness,
              set: (BB, IB) => {
                BB.geometryThickness = IB
              }
            },
            metadata: IB
          }, Jv, ov), (0, OB.j)(BB, null, fT, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryThicknessTexture" in BB,
              get: BB => BB.geometryThicknessTexture,
              set: (BB, IB) => {
                BB.geometryThicknessTexture = IB
              }
            },
            metadata: IB
          }, Gv, vv), (0, OB.j)(BB, null, lT, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissionLuminance" in BB,
              get: BB => BB.emissionLuminance,
              set: (BB, IB) => {
                BB.emissionLuminance = IB
              }
            },
            metadata: IB
          }, kv, cv), (0, OB.j)(BB, null, AT, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissionColor" in BB,
              get: BB => BB.emissionColor,
              set: (BB, IB) => {
                BB.emissionColor = IB
              }
            },
            metadata: IB
          }, nv, hv), (0, OB.j)(BB, null, tT, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissionColorTexture" in BB,
              get: BB => BB.emissionColorTexture,
              set: (BB, IB) => {
                BB.emissionColorTexture = IB
              }
            },
            metadata: IB
          }, zv, Fv), (0, OB.j)(BB, null, bT, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmWeight" in BB,
              get: BB => BB.thinFilmWeight,
              set: (BB, IB) => {
                BB.thinFilmWeight = IB
              }
            },
            metadata: IB
          }, Nv, gv), (0, OB.j)(BB, null, xT, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmWeightTexture" in BB,
              get: BB => BB.thinFilmWeightTexture,
              set: (BB, IB) => {
                BB.thinFilmWeightTexture = IB
              }
            },
            metadata: IB
          }, qv, yv), (0, OB.j)(BB, null, ET, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmThickness" in BB,
              get: BB => BB.thinFilmThickness,
              set: (BB, IB) => {
                BB.thinFilmThickness = IB
              }
            },
            metadata: IB
          }, Uv, Wv), (0, OB.j)(BB, null, DT, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmThicknessMin" in BB,
              get: BB => BB.thinFilmThicknessMin,
              set: (BB, IB) => {
                BB.thinFilmThicknessMin = IB
              }
            },
            metadata: IB
          }, dv, Cv), (0, OB.j)(BB, null, KT, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmThicknessTexture" in BB,
              get: BB => BB.thinFilmThicknessTexture,
              set: (BB, IB) => {
                BB.thinFilmThicknessTexture = IB
              }
            },
            metadata: IB
          }, Qv, sv), (0, OB.j)(BB, null, VT, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmIor" in BB,
              get: BB => BB.thinFilmIor,
              set: (BB, IB) => {
                BB.thinFilmIor = IB
              }
            },
            metadata: IB
          }, wv, Ov), (0, OB.j)(BB, null, ST, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "ambientOcclusionTexture" in BB,
              get: BB => BB.ambientOcclusionTexture,
              set: (BB, IB) => {
                BB.ambientOcclusionTexture = IB
              }
            },
            metadata: IB
          }, Yv, iv), (0, OB.j)(BB, null, BJ, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: BB => "directIntensity" in BB,
              get: BB => BB.directIntensity,
              set: (BB, IB) => {
                BB.directIntensity = IB
              }
            },
            metadata: IB
          }, pv, av), (0, OB.j)(BB, null, IJ, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: BB => "environmentIntensity" in BB,
              get: BB => BB.environmentIntensity,
              set: (BB, IB) => {
                BB.environmentIntensity = IB
              }
            },
            metadata: IB
          }, Hv, Mv), (0, OB.j)(BB, null, ZJ, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "useSpecularWeightFromTextureAlpha" in BB,
              get: BB => BB.useSpecularWeightFromTextureAlpha,
              set: (BB, IB) => {
                BB.useSpecularWeightFromTextureAlpha = IB
              }
            },
            metadata: IB
          }, jv, Pv), (0, OB.j)(BB, null, TJ, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceAlphaTest" in BB,
              get: BB => BB.forceAlphaTest,
              set: (BB, IB) => {
                BB.forceAlphaTest = IB
              }
            },
            metadata: IB
          }, Rv, rv), (0, OB.j)(BB, null, JJ, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: BB => "alphaCutOff" in BB,
              get: BB => BB.alphaCutOff,
              set: (BB, IB) => {
                BB.alphaCutOff = IB
              }
            },
            metadata: IB
          }, mv, Xv), (0, OB.j)(BB, null, oJ, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: BB => "useAmbientOcclusionFromMetallicTextureRed" in BB,
              get: BB => BB.useAmbientOcclusionFromMetallicTextureRed,
              set: (BB, IB) => {
                BB.useAmbientOcclusionFromMetallicTextureRed = IB
              }
            },
            metadata: IB
          }, Lv, ev), (0, OB.j)(BB, null, GJ, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "useAmbientInGrayScale" in BB,
              get: BB => BB.useAmbientInGrayScale,
              set: (BB, IB) => {
                BB.useAmbientInGrayScale = IB
              }
            },
            metadata: IB
          }, uv, fv), (0, OB.j)(BB, null, vJ, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: BB => "usePhysicalLightFalloff" in BB,
              get: BB => BB.usePhysicalLightFalloff
            },
            metadata: IB
          }, null, MJ), (0, OB.j)(BB, null, kJ, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: BB => "useGLTFLightFalloff" in BB,
              get: BB => BB.useGLTFLightFalloff
            },
            metadata: IB
          }, null, MJ), (0, OB.j)(BB, null, cJ, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "useObjectSpaceNormalMap" in BB,
              get: BB => BB.useObjectSpaceNormalMap,
              set: (BB, IB) => {
                BB.useObjectSpaceNormalMap = IB
              }
            },
            metadata: IB
          }, lv, Av), (0, OB.j)(BB, null, nJ, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: BB => "useParallax" in BB,
              get: BB => BB.useParallax,
              set: (BB, IB) => {
                BB.useParallax = IB
              }
            },
            metadata: IB
          }, tv, bv), (0, OB.j)(BB, null, hJ, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "useParallaxOcclusion" in BB,
              get: BB => BB.useParallaxOcclusion,
              set: (BB, IB) => {
                BB.useParallaxOcclusion = IB
              }
            },
            metadata: IB
          }, xv, Ev), (0, OB.j)(BB, null, zJ, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: BB => "parallaxScaleBias" in BB,
              get: BB => BB.parallaxScaleBias,
              set: (BB, IB) => {
                BB.parallaxScaleBias = IB
              }
            },
            metadata: IB
          }, Dv, Kv), (0, OB.j)(BB, null, FJ, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "disableLighting" in BB,
              get: BB => BB.disableLighting,
              set: (BB, IB) => {
                BB.disableLighting = IB
              }
            },
            metadata: IB
          }, Vv, Sv), (0, OB.j)(BB, null, NJ, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceIrradianceInFragment" in BB,
              get: BB => BB.forceIrradianceInFragment,
              set: (BB, IB) => {
                BB.forceIrradianceInFragment = IB
              }
            },
            metadata: IB
          }, Bk, Ik), (0, OB.j)(BB, null, gJ, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: BB => "maxSimultaneousLights" in BB,
              get: BB => BB.maxSimultaneousLights,
              set: (BB, IB) => {
                BB.maxSimultaneousLights = IB
              }
            },
            metadata: IB
          }, Zk, Tk), (0, OB.j)(BB, null, qJ, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertNormalMapX" in BB,
              get: BB => BB.invertNormalMapX,
              set: (BB, IB) => {
                BB.invertNormalMapX = IB
              }
            },
            metadata: IB
          }, Jk, Gk), (0, OB.j)(BB, null, yJ, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertNormalMapY" in BB,
              get: BB => BB.invertNormalMapY,
              set: (BB, IB) => {
                BB.invertNormalMapY = IB
              }
            },
            metadata: IB
          }, vk, kk), (0, OB.j)(BB, null, UJ, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "twoSidedLighting" in BB,
              get: BB => BB.twoSidedLighting,
              set: (BB, IB) => {
                BB.twoSidedLighting = IB
              }
            },
            metadata: IB
          }, ck, nk), (0, OB.j)(BB, null, WJ, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: BB => "useAlphaFresnel" in BB,
              get: BB => BB.useAlphaFresnel,
              set: (BB, IB) => {
                BB.useAlphaFresnel = IB
              }
            },
            metadata: IB
          }, hk, zk), (0, OB.j)(BB, null, dJ, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: BB => "useLinearAlphaFresnel" in BB,
              get: BB => BB.useLinearAlphaFresnel,
              set: (BB, IB) => {
                BB.useLinearAlphaFresnel = IB
              }
            },
            metadata: IB
          }, Fk, Nk), (0, OB.j)(BB, null, CJ, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "environmentBRDFTexture" in BB,
              get: BB => BB.environmentBRDFTexture,
              set: (BB, IB) => {
                BB.environmentBRDFTexture = IB
              }
            },
            metadata: IB
          }, gk, qk), (0, OB.j)(BB, null, QJ, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceNormalForward" in BB,
              get: BB => BB.forceNormalForward,
              set: (BB, IB) => {
                BB.forceNormalForward = IB
              }
            },
            metadata: IB
          }, yk, Uk), (0, OB.j)(BB, null, sJ, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: BB => "enableSpecularAntiAliasing" in BB,
              get: BB => BB.enableSpecularAntiAliasing,
              set: (BB, IB) => {
                BB.enableSpecularAntiAliasing = IB
              }
            },
            metadata: IB
          }, Wk, dk), (0, OB.j)(BB, null, wJ, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "useHorizonOcclusion" in BB,
              get: BB => BB.useHorizonOcclusion,
              set: (BB, IB) => {
                BB.useHorizonOcclusion = IB
              }
            },
            metadata: IB
          }, Ck, Qk), (0, OB.j)(BB, null, OJ, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "useRadianceOcclusion" in BB,
              get: BB => BB.useRadianceOcclusion,
              set: (BB, IB) => {
                BB.useRadianceOcclusion = IB
              }
            },
            metadata: IB
          }, sk, wk), (0, OB.j)(BB, null, YJ, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: BB => "unlit" in BB,
              get: BB => BB.unlit,
              set: (BB, IB) => {
                BB.unlit = IB
              }
            },
            metadata: IB
          }, Ok, Yk), (0, OB.j)(BB, null, iJ, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "applyDecalMapAfterDetailMap" in BB,
              get: BB => BB.applyDecalMapAfterDetailMap,
              set: (BB, IB) => {
                BB.applyDecalMapAfterDetailMap = IB
              }
            },
            metadata: IB
          }, ik, pk), (0, OB.j)(BB, null, pJ, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "debugMode" in BB,
              get: BB => BB.debugMode,
              set: (BB, IB) => {
                BB.debugMode = IB
              }
            },
            metadata: IB
          }, ak, Hk), (0, OB.j)(BB, null, aJ, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "transparencyMode" in BB,
              get: BB => BB.transparencyMode
            },
            metadata: IB
          }, null, MJ), IB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IB
          })
        })(), BB.SSS_QUALITY_LOW = 0, BB.SSS_QUALITY_MEDIUM = 1, BB.SSS_QUALITY_HIGH = 2, BB._noiseTextures = {}, BB.ForceGLSL = !1, BB._ShaderLoader = new zI.d((() => [Promise.all([ZB.e(322), ZB.e(385)]).then((() => ZB(61758))), Promise.all([ZB.e(327), ZB.e(323), ZB.e(384), ZB.e(389)]).then((() => ZB(61766)))]), (() => [Promise.all([ZB.e(341), ZB.e(343), ZB.e(388)]).then((() => ZB(61803))), Promise.all([ZB.e(341), ZB.e(344), ZB.e(387), ZB.e(390)]).then((() => ZB(61818)))])), BB
      })(),
      SI = !1;
    SI || (SI = !0, (0, xB.d)(), (0, uI.i)("BABYLON.OpenPBRMaterial", VI));
    var BZ = ZB(37153);
    class IZ {
      constructor(BB) {
        this.name = PI.c.NAME_PROCEDURALTEXTURE, this.lg = BB
      }
      register() {
        this.lg._beforeClearStage.registerStep(PI.c.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.lg.proceduralTexturesEnabled) {
          wI.j.StartPerformanceCounter("Procedural textures", this.lg.proceduralTextures.length > 0);
          for (let BB = 0; BB < this.lg.proceduralTextures.length; BB++) {
            const IB = this.lg.proceduralTextures[BB];
            IB._shouldRender() && IB.render()
          }
          wI.j.EndPerformanceCounter("Procedural textures", this.lg.proceduralTextures.length > 0)
        }
      }
    }
    var ZZ = ZB(40369);
    let TZ = (() => {
      var BB;
      let IB, TB, JB, GB, vB, kB = aB.e,
        cB = [],
        nB = [],
        hB = [],
        zB = [],
        FB = [],
        NB = [],
        qB = [],
        yB = [],
        UB = [];
      return BB = class extends kB {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(BB, IB, ZB, TB) {
          let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            GB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            vB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, TB, !oB), this.isEnabled = ((0, OB.l)(this, cB), (0, OB.l)(this, nB, !0)), this.autoClear = ((0, OB.l)(this, hB), (0, OB.l)(this, zB, !0)), this.onGenerated = (0, OB.l)(this, FB), this.onGeneratedObservable = new BZ.b, this.onBeforeGenerationObservable = new BZ.b, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, OB.l)(this, NB, void 0), this._drawWrapper = (0, OB.l)(this, qB), this._textures = {}, this._size = (0, OB.l)(this, yB, void 0), this._textureType = (0, OB.l)(this, UB), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === JB || JB instanceof aB.e ? (this._options = {}, this._fallbackTexture = JB) : (this._options = JB, this._fallbackTexture = JB.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let kB = (TB = this.JR() || gB.e.LastCreatedScene)._getComponent(PI.c.NAME_PROCEDURALTEXTURE);
          kB || (kB = new IZ(TB), TB.yTB(kB)), this._options.skipSceneRegistration || TB.proceduralTextures.push(this), this._fullEngine = TB.PN(), this.name = BB, this.isRenderTarget = !0, this._size = IB, this._textureType = vB, this._generateMipMaps = oB, this._drawWrapper = new ZZ.c(this._fullEngine), this.setFragment(ZB);
          const WB = this._createRtWrapper(GB, IB, oB, vB);
          this._texture = WB.texture;
          const dB = [];
          dB.push(1, 1), dB.push(-1, 1), dB.push(-1, -1), dB.push(1, -1), this._vertexBuffers[LB.i.PositionKind] = new LB.i(this._fullEngine, dB, LB.i.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(BB, IB, ZB, TB) {
          return BB ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(IB, {
            generateMipMaps: ZB,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: TB,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(IB, {
            generateMipMaps: ZB,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: TB,
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
            IB = [];
          IB.push(0), IB.push(1), IB.push(2), IB.push(0), IB.push(2), IB.push(3), this._indexBuffer = BB.createIndexBuffer(IB)
        }
        _rebuild() {
          const BB = this._vertexBuffers[LB.i.PositionKind];
          BB && BB._rebuild(), this._createIndexBuffer(), this.refreshRate === OI.c.REFRESHRATE_RENDER_ONCE && (this.refreshRate = OI.c.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(BB) {
          if (this.isReady()) return void BB(this);
          const IB = this.getEffect();
          IB && IB.executeWhenCompiled((() => {
            BB(this)
          }))
        }
        isReady() {
          const BB = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const IB = this._getDefines();
          if (this._drawWrapper.effect && IB === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const TB = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== IB && (this._cachedDefines = IB, this._drawWrapper.effect = BB.createEffect(TB, [LB.i.PositionKind], this._uniforms, this._samplers, IB, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([ZB.e(393).then((() => ZB(61867))), this._options.extraInitializationsAsync()]) : await Promise.all([ZB.e(394).then((() => ZB(61876))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await ZB.e(393).then((() => ZB(61867))) : await ZB.e(394).then((() => ZB(61876)))
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
        resize(BB, IB) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const ZB = this._texture.isCube;
          this._rtWrapper.dispose();
          const TB = this._createRtWrapper(ZB, BB, IB, this._textureType);
          this._texture = TB.texture, this._size = BB, this._generateMipMaps = IB
        }
        _checkUniform(BB) {
          -1 === this._uniforms.indexOf(BB) && this._uniforms.push(BB)
        }
        setTexture(BB, IB) {
          return -1 === this._samplers.indexOf(BB) && this._samplers.push(BB), this._textures[BB] = IB, this
        }
        setFloat(BB, IB) {
          return this._checkUniform(BB), this._floats[BB] = IB, this
        }
        setInt(BB, IB) {
          return this._checkUniform(BB), this._ints[BB] = IB, this
        }
        setFloats(BB, IB) {
          return this._checkUniform(BB), this._floatsArrays[BB] = IB, this
        }
        setColor3(BB, IB) {
          return this._checkUniform(BB), this._colors3[BB] = IB, this
        }
        setColor4(BB, IB) {
          return this._checkUniform(BB), this._colors4[BB] = IB, this
        }
        setVector2(BB, IB) {
          return this._checkUniform(BB), this._vectors2[BB] = IB, this
        }
        setVector3(BB, IB) {
          return this._checkUniform(BB), this._vectors3[BB] = IB, this
        }
        setVector4(BB, IB) {
          return this._checkUniform(BB), this._vectors4[BB] = IB, this
        }
        setMatrix(BB, IB) {
          return this._checkUniform(BB), this._matrices[BB] = IB, this
        }
        render(BB) {
          const IB = this.JR();
          if (!IB) return;
          const ZB = this._fullEngine;
          if (ZB.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), ZB.setState(!1), !this.nodeMaterialSource) {
            for (const BB in this._textures) this._drawWrapper.effect.setTexture(BB, this._textures[BB]);
            for (const BB in this._ints) this._drawWrapper.effect.setInt(BB, this._ints[BB]);
            for (const BB in this._floats) this._drawWrapper.effect.setFloat(BB, this._floats[BB]);
            for (const BB in this._floatsArrays) this._drawWrapper.effect.setArray(BB, this._floatsArrays[BB]);
            for (const BB in this._colors3) this._drawWrapper.effect.setColor3(BB, this._colors3[BB]);
            for (const BB in this._colors4) {
              const IB = this._colors4[BB];
              this._drawWrapper.effect.setFloat4(BB, IB.r, IB.g, IB.b, IB.a)
            }
            for (const BB in this._vectors2) this._drawWrapper.effect.setVector2(BB, this._vectors2[BB]);
            for (const BB in this._vectors3) this._drawWrapper.effect.setVector3(BB, this._vectors3[BB]);
            for (const BB in this._vectors4) this._drawWrapper.effect.setVector4(BB, this._vectors4[BB]);
            for (const BB in this._matrices) this._drawWrapper.effect.setMatrix(BB, this._matrices[BB])
          }
          if (!this._texture || !this._rtWrapper) return;
          ZB._enableGPUDebugMarkers && ZB._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const TB = ZB.currentViewport;
          if (this.isCube)
            for (let JB = 0; JB < 6; JB++) ZB.bindFramebuffer(this._rtWrapper, JB, void 0, void 0, !0), ZB.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", JB), this.autoClear && ZB.clear(IB.clearColor, !0, !1, !1), ZB.drawElementsType(oB.e.TriangleFillMode, 0, 6), ZB.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let BB = 1;
            this._rtWrapper.is3D ? BB = this._rtWrapper.depth : this._rtWrapper.is2DArray && (BB = this._rtWrapper.layers);
            for (let TB = 0; TB < BB; TB++) {
              if (ZB.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, TB), ZB.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== BB ? TB / (BB - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", TB);
                for (const BB in this._textures) this._drawWrapper.effect.setTexture(BB, this._textures[BB])
              }
              this.autoClear && ZB.clear(IB.clearColor, !0, !1, !1), ZB.drawElementsType(oB.e.TriangleFillMode, 0, 6), ZB.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          TB && ZB.setViewport(TB), this.isCube && ZB.generateMipMapsForCubemap(this._texture, !0), ZB._enableGPUDebugMarkers && ZB._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const IB = this.getSize(),
            ZB = new BB(this.name, IB.width, this._fragment, this.JR(), this._fallbackTexture, this._generateMipMaps);
          return ZB.hasAlpha = this.hasAlpha, ZB.level = this.level, ZB.coordinatesMode = this.coordinatesMode, ZB
        }
        dispose() {
          const BB = this.JR();
          if (!BB) return;
          const IB = BB.proceduralTextures.indexOf(this);
          IB >= 0 && BB.proceduralTextures.splice(IB, 1);
          const ZB = this._vertexBuffers[LB.i.PositionKind];
          ZB && (ZB.dispose(), this._vertexBuffers[LB.i.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const ZB = "function" === typeof Symbol && Symbol.metadata ? Object.create(kB[Symbol.metadata] ?? null) : void 0;
        IB = [(0, YB.C)()], TB = [(0, YB.C)()], JB = [(0, YB.C)()], GB = [(0, YB.C)()], vB = [(0, YB.C)()], (0, OB.j)(BB, null, vB, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: BB => "refreshRate" in BB,
            get: BB => BB.refreshRate
          },
          metadata: ZB
        }, null, cB), (0, OB.j)(null, null, IB, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, IB) => {
              BB.isEnabled = IB
            }
          },
          metadata: ZB
        }, nB, hB), (0, OB.j)(null, null, TB, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: BB => "autoClear" in BB,
            get: BB => BB.autoClear,
            set: (BB, IB) => {
              BB.autoClear = IB
            }
          },
          metadata: ZB
        }, zB, FB), (0, OB.j)(null, null, JB, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: BB => "_generateMipMaps" in BB,
            get: BB => BB._generateMipMaps,
            set: (BB, IB) => {
              BB._generateMipMaps = IB
            }
          },
          metadata: ZB
        }, NB, qB), (0, OB.j)(null, null, GB, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: BB => "_size" in BB,
            get: BB => BB._size,
            set: (BB, IB) => {
              BB._size = IB
            }
          },
          metadata: ZB
        }, yB, UB), ZB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ZB
        })
      })(), BB
    })();

    function JZ(BB) {
      return "texture" in BB
    }

    function oZ(BB) {
      return "value" in BB
    }
    async function GZ(BB, IB, TB) {
      const JB = [IB.red, IB.green, IB.blue, IB.alpha],
        oB = [],
        GB = [];
      for (let ZB = 0; ZB < 4; ZB++) {
        const BB = JB[ZB];
        if (BB)
          if (JZ(BB)) {
            if (BB.sourceChannel < 0 || BB.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let IB = oB.indexOf(BB.texture); - 1 === IB && (IB = oB.length, oB.push(BB.texture)), GB[ZB] = IB
          } else {
            if (!oZ(BB)) throw new Error("Invalid channel input configuration");
            if (BB.value < 0 || BB.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            GB[ZB] = -1
          }
        else GB[ZB] = -1
      }
      let vB = IB.outputSize;
      if (!vB && oB.length > 0) {
        let BB = 0;
        for (const IB of oB) {
          const ZB = IB.getSize(),
            TB = Math.max(ZB.width, ZB.height);
          TB > BB && (BB = TB, vB = ZB.width === ZB.height ? BB : ZB)
        }
      }
      vB = vB || 512;
      const kB = [],
        cB = new Set;
      for (let ZB = 0; ZB < 4; ZB++) {
        const BB = JB[ZB],
          IB = ["RED", "GREEN", "BLUE", "ALPHA"][ZB];
        if (BB && JZ(BB)) {
          kB.push(`${IB}_FROM_TEXTURE`);
          const BB = GB[ZB];
          cB.add(BB)
        }
      }
      cB.forEach((BB => {
        kB.push(`USE_TEXTURE${BB}`)
      }));
      const nB = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: TB.PN().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            TB.PN().isWebGPU ? await Promise.all([ZB.e(391).then((() => ZB(61862)))]) : await Promise.all([ZB.e(392).then((() => ZB(61864)))])
          },
          skipSceneRegistration: !0
        },
        hB = new TZ(BB, vB, "textureMerger", TB, nB);
      hB.refreshRate = -1, hB.defines = kB.length > 0 ? "#define " + kB.join("\n#define ") + "\n" : "";
      for (let ZB = 0; ZB < oB.length; ZB++) zB = oB[ZB], (FB = hB).uOffset = zB.uOffset, FB.vOffset = zB.vOffset, FB.uScale = zB.uScale, FB.vScale = zB.vScale, FB.uAng = zB.uAng, FB.vAng = zB.vAng, FB.wAng = zB.wAng, FB.uRotationCenter = zB.uRotationCenter, FB.vRotationCenter = zB.vRotationCenter, hB.setTexture(`inputTexture${ZB}`, oB[ZB]);
      var zB, FB;
      for (let ZB = 0; ZB < 4; ZB++) {
        const BB = JB[ZB],
          IB = ["red", "green", "blue", "alpha"][ZB];
        if (BB && JZ(BB)) {
          const TB = GB[ZB];
          hB.setInt(`${IB}TextureIndex`, TB), hB.setInt(`${IB}SourceChannel`, BB.sourceChannel)
        } else {
          let TB;
          TB = BB && oZ(BB) ? BB.value : 3 === ZB ? 1 : 0, hB.setFloat(`${IB}ConstantValue`, TB)
        }
      }
      return await new Promise(((BB, IB) => {
        hB.executeWhenReady((() => {
          try {
            hB.render(), BB(hB)
          } catch (ZB) {
            IB(ZB instanceof Error ? ZB : new Error(String(ZB)))
          }
        }))
      }))
    }

    function vZ(BB, IB) {
      return {
        texture: BB,
        sourceChannel: IB
      }
    }

    function kZ(BB) {
      return {
        value: BB
      }
    }

    function cZ(BB, IB, ZB, TB) {
      return {
        red: BB,
        green: IB,
        blue: ZB,
        alpha: TB
      }
    }
    var nZ = ZB(39876),
      hZ = ZB(39984),
      zZ = ZB(37138),
      FZ = ZB(40042),
      NZ = ZB(39973);
    class gZ {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class qZ extends nZ.e {
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
        return !!this._options?.enableMultiview || this.cg > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new gZ;
        super(null), void 0 === BB.deterministicLockstep && (BB.deterministicLockstep = !1), void 0 !== BB.timeStep && (this._timeStep = BB.timeStep), void 0 === BB.lockstepMaxSteps && (BB.lockstepMaxSteps = 4), this._options = BB, zZ.b.SetMatrixPrecision(!!BB.useHighPrecisionMatrix), this._caps = {
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
        }, BB.renderingCanvas && (this._renderingCanvas = BB.renderingCanvas), iB.d.Log(`Babylon.js v${nZ.e.Version} - Null engine`);
        const IB = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (IB.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (IB.Blob = function() {})
      }
      createVertexBuffer(BB) {
        const IB = new hZ.d;
        return IB.references = 1, IB
      }
      createIndexBuffer(BB) {
        const IB = new hZ.d;
        return IB.references = 1, IB
      }
      clear(BB, IB, ZB) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(BB, IB, ZB) {
        this._cachedViewport = BB
      }
      createUniformBuffer(BB) {
        const IB = new hZ.d;
        return IB.references = 1, IB.ah = BB instanceof Array ? BB.length * Float32Array.BYTES_PER_ELEMENT : BB.byteLength, IB
      }
      createDynamicUniformBuffer(BB) {
        return this.createUniformBuffer(BB)
      }
      updateUniformBuffer(BB, IB, ZB, TB) {}
      bindUniformBufferBase(BB, IB, ZB) {}
      bindUniformBlock(BB, IB, ZB) {}
      createShaderProgram(BB, IB, ZB, TB, JB) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(BB, IB) {
        return []
      }
      getAttributes(BB, IB) {
        return []
      }
      bindSamplers(BB) {
        this._currentEffect = null
      }
      enableEffect(BB) {
        BB = null !== BB && (0, NZ.b)(BB) ? BB.effect : BB, this._currentEffect = BB, BB && (BB.onBind && BB.onBind(BB), BB._onBindObservable && BB._onBindObservable.notifyObservers(BB))
      }
      setStateCullFaceType(BB, IB) {}
      setState(BB) {}
      setIntArray(BB, IB) {
        return !0
      }
      setIntArray2(BB, IB) {
        return !0
      }
      setIntArray3(BB, IB) {
        return !0
      }
      setIntArray4(BB, IB) {
        return !0
      }
      setFloatArray(BB, IB) {
        return !0
      }
      setFloatArray2(BB, IB) {
        return !0
      }
      setFloatArray3(BB, IB) {
        return !0
      }
      setFloatArray4(BB, IB) {
        return !0
      }
      setArray(BB, IB) {
        return !0
      }
      setArray2(BB, IB) {
        return !0
      }
      setArray3(BB, IB) {
        return !0
      }
      setArray4(BB, IB) {
        return !0
      }
      setMatrices(BB, IB) {
        return !0
      }
      setMatrix3x3(BB, IB) {
        return !0
      }
      setMatrix2x2(BB, IB) {
        return !0
      }
      setFloat(BB, IB) {
        return !0
      }
      setFloat2(BB, IB, ZB) {
        return !0
      }
      setFloat3(BB, IB, ZB, TB) {
        return !0
      }
      setBool(BB, IB) {
        return !0
      }
      setFloat4(BB, IB, ZB, TB, JB) {
        return !0
      }
      setAlphaMode(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[ZB] !== BB && (this.alphaState.setAlphaBlend(0 !== BB, 0), IB || this.setDepthWrite(0 === BB), this._alphaMode[ZB] = BB)
      }
      bindBuffers(BB, IB, ZB) {}
      wipeCaches(BB) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, BB && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(BB, IB, ZB, TB) {}
      drawElementsType(BB, IB, ZB, TB) {}
      drawArraysType(BB, IB, ZB, TB) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(BB) {}
      createTexture(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          GB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          vB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const kB = new YI.b(this, 1),
          cB = String(BB);
        return kB.url = cB, kB.generateMipMaps = !IB, kB.samplingMode = JB, kB.invertY = ZB, kB.baseWidth = this._options.textureSize, kB.baseHeight = this._options.textureSize, kB.width = this._options.textureSize, kB.height = this._options.textureSize, vB && (kB.format = vB), GB && (kB._buffer = GB), kB.isReady = !0, oB && setTimeout((() => {
          oB(kB)
        })), this._internalTexturesCache.push(kB), kB
      }
      _createHardwareRenderTargetWrapper(BB, IB, ZB) {
        const TB = new FZ.c(BB, IB, ZB, this);
        return this._renderTargetWrapperCache.push(TB), TB
      }
      createRenderTargetTexture(BB, IB) {
        const ZB = this._createHardwareRenderTargetWrapper(!1, !1, BB),
          TB = {};
        void 0 !== IB && "object" === typeof IB ? (TB.generateMipMaps = IB.generateMipMaps, TB.generateDepthBuffer = void 0 === IB.generateDepthBuffer || IB.generateDepthBuffer, TB.generateStencilBuffer = TB.generateDepthBuffer && IB.generateStencilBuffer, TB.type = void 0 === IB.type ? 0 : IB.type, TB.samplingMode = void 0 === IB.samplingMode ? 3 : IB.samplingMode) : (TB.generateMipMaps = IB, TB.generateDepthBuffer = !0, TB.generateStencilBuffer = !1, TB.type = 0, TB.samplingMode = 3);
        const JB = new YI.b(this, 5);
        ZB.setTexture(JB);
        const oB = BB.width || BB,
          GB = BB.height || BB;
        return ZB._generateDepthBuffer = TB.generateDepthBuffer, ZB._generateStencilBuffer = !!TB.generateStencilBuffer, JB.baseWidth = oB, JB.baseHeight = GB, JB.width = oB, JB.height = GB, JB.isReady = !0, JB.samples = 1, JB.generateMipMaps = !!TB.generateMipMaps, JB.samplingMode = TB.samplingMode, JB.type = TB.type, this._internalTexturesCache.push(JB), ZB
      }
      createMultiviewRenderTargetTexture(BB, IB) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const ZB = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: BB,
            height: IB
          }),
          TB = new YI.b(this, 5, !0);
        return TB.baseWidth = BB, TB.baseHeight = IB, TB.width = BB, TB.height = IB, TB.isMultiview = !0, TB.isReady = !0, TB.format = 5, TB.samples = 1, ZB.setTextures(TB), ZB
      }
      bindMultiviewFramebuffer(BB) {
        this.bindFramebuffer(BB, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(BB, IB) {
        const ZB = this._createHardwareRenderTargetWrapper(!1, !0, BB),
          TB = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...IB
          };
        TB.generateStencilBuffer = TB.generateDepthBuffer && TB.generateStencilBuffer, (1 !== TB.type || this._caps.textureFloatLinearFiltering) && (2 !== TB.type || this._caps.textureHalfFloatLinearFiltering) || (TB.samplingMode = 1), ZB._generateDepthBuffer = TB.generateDepthBuffer, ZB._generateStencilBuffer = !!TB.generateStencilBuffer;
        const JB = new YI.b(this, 5);
        return JB.baseWidth = BB, JB.baseHeight = BB, JB.width = BB, JB.height = BB, JB.isReady = !0, JB.isCube = !0, JB.samples = 1, JB.generateMipMaps = !!TB.generateMipMaps, JB.samplingMode = TB.samplingMode, JB.type = TB.type, this._internalTexturesCache.push(JB), ZB
      }
      updateTextureSamplingMode(BB, IB) {
        IB.samplingMode = BB
      }
      createRawTexture(BB, IB, ZB, TB, JB, oB, GB) {
        let vB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          kB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          cB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const nB = new YI.b(this, 3);
        return nB.baseWidth = IB, nB.baseHeight = ZB, nB.width = IB, nB.height = ZB, nB.format = TB, nB.generateMipMaps = JB, nB.samplingMode = GB, nB.invertY = oB, nB._compression = vB, nB.type = kB, nB._useSRGBBuffer = cB, this._doNotHandleContextLost || (nB._bufferView = BB), nB
      }
      updateRawTexture(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          GB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        BB && (BB._bufferView = IB, BB.format = ZB, BB.invertY = TB, BB._compression = JB, BB.type = oB, BB._useSRGBBuffer = GB)
      }
      bindFramebuffer(BB, IB, ZB, TB, JB) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = BB, this._currentFramebuffer = null, this._cachedViewport && !JB && this.setViewport(this._cachedViewport, ZB, TB)
      }
      unBindFramebuffer(BB) {
        let IB = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, IB && IB(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(BB) {
        const IB = new hZ.d;
        return IB.references = 1, IB.ah = 1, IB
      }
      updateDynamicTexture(BB, IB, ZB) {}
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
      updateDynamicIndexBuffer(BB, IB) {}
      updateDynamicVertexBuffer(BB, IB, ZB, TB) {}
      _bindTextureDirectly(BB, IB) {
        return this._boundTexturesCache[this._activeChannel] !== IB && (this._boundTexturesCache[this._activeChannel] = IB, !0)
      }
      _bindTexture(BB, IB) {
        BB < 0 || this._bindTextureDirectly(0, IB)
      }
      _deleteBuffer(BB) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(BB) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(BB, IB, ZB, TB, JB) {}
      _uploadDataToTextureDirectly(BB, IB) {}
      _uploadArrayBufferViewToTexture(BB, IB) {}
      _uploadImageToTexture(BB, IB) {}
    }
    ZB(40103), ZB(40137), ZB(40094);
    async function yZ(BB) {
      const IB = BB.getInternalTexture();
      if (!IB || 1 !== IB.source) return null;
      if (IB.invertY) {
        const IB = BB.JR()?.PN();
        if (!(IB instanceof qZ)) return null
      }
      const ZB = IB._buffer;
      let TB, oB = BB.mimeType;
      try {
        ZB ? ArrayBuffer.isView(ZB) ? TB = ZB.buffer.slice(ZB.byteOffset, ZB.byteOffset + ZB.byteLength) : ZB instanceof ArrayBuffer ? TB = ZB : ZB instanceof Blob ? (TB = await ZB.arrayBuffer(), oB = ZB.type || oB) : "string" === typeof ZB ? (TB = await JB.Tools.LoadFileAsync(ZB), oB = (0, kB.b)(ZB) || oB) : "undefined" !== typeof HTMLImageElement && ZB instanceof HTMLImageElement && (TB = await JB.Tools.LoadFileAsync(ZB.src), oB = (0, kB.b)(ZB.src) || oB) : (TB = await JB.Tools.LoadFileAsync(IB.url), oB = (0, kB.b)(IB.url) || oB)
      } catch {
        return null
      }
      if (TB && !oB && IB.url) {
        const BB = IB.url.match(/^data:([^;,]+)/);
        oB = BB ? BB[1] : (0, kB.b)(IB.url)
      }
      return TB && oB ? {
        data: TB,
        mimeType: oB
      } : null
    }
    const UZ = 1e-6,
      WZ = new qB.Color3(.04, .04, .04),
      dZ = 1024,
      CZ = qB.Color3.White(),
      QZ = qB.Color3.BlackReadOnly;

    function sZ(BB) {
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

    function wZ(BB, IB, ZB) {
      if (IB < WZ.r) return 0;
      const TB = WZ.r,
        JB = BB * ZB / (1 - WZ.r) + IB - 2 * WZ.r,
        oB = JB * JB - 4 * TB * (WZ.r - IB);
      return WB.Clamp((-JB + Math.sqrt(oB)) / (2 * TB), 0, 1)
    }

    function OZ(BB) {
      const IB = BB.diffuseColor.toLinearSpace(BB.JR().PN().useExactSrgbConversions).scale(.5),
        ZB = BB.alpha,
        TB = function(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new XB.p(0, 1),
            ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new XB.p(0, .1),
            TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new XB.p(0, .1),
            JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new XB.p(1300, .1);
          return function(BB, IB, ZB, TB, JB) {
            return (1 - BB) * (1 - BB) * (1 - BB) * IB + 3 * (1 - BB) * (1 - BB) * BB * ZB + 3 * (1 - BB) * BB * BB * TB + BB * BB * BB * JB
          }(Math.pow(BB / JB.x, .333333), IB.y, ZB.y, TB.y, JB.y)
        }(WB.Clamp(BB.specularPower, 0, dZ));
      return {
        baseColorFactor: [IB.r, IB.g, IB.b, ZB],
        metallicFactor: 0,
        roughnessFactor: TB
      }
    }

    function YZ(BB, IB) {
      IB.needAlphaBlending() ? BB.alphaMode = "BLEND" : IB.needAlphaTesting() && (BB.alphaMode = "MASK", BB.alphaCutoff = IB.alphaCutOff)
    }

    function iZ(BB, IB, ZB) {
      const TB = new Uint8Array(BB * IB * 4);
      for (let JB = 0; JB < TB.length; JB += 4) TB[JB] = TB[JB + 1] = TB[JB + 2] = TB[JB + 3] = 255;
      return QB.d.CreateRGBATexture(TB, BB, IB, ZB)
    }

    function pZ(BB) {
      if (BB instanceof Uint8Array) {
        const IB = BB.length,
          ZB = new Float32Array(BB.length);
        for (let TB = 0; TB < IB; ++TB) ZB[TB] = BB[TB] / 255;
        return ZB
      }
      if (BB instanceof Float32Array) return BB;
      throw new Error("Unsupported pixel format!")
    }
    class aZ {
      constructor(BB) {
        this._exporter = BB, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(BB) {
        return BB ? this._textureMap.get(BB.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(BB, IB) {
        const ZB = OZ(BB),
          TB = {
            name: BB.name
          };
        if (null == BB.backFaceCulling || BB.backFaceCulling || (BB.twoSidedLighting || JB.Tools.Warn(BB.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), TB.doubleSided = !0), IB) {
          const IB = [],
            JB = BB.diffuseTexture;
          JB && IB.push(this.exportTextureAsync(JB).then((BB => {
            BB && (ZB.baseColorTexture = BB)
          })));
          const oB = BB.bumpTexture;
          oB && IB.push(this.exportTextureAsync(oB).then((BB => {
            BB && (TB.normalTexture = BB, 1 !== oB.level && (TB.normalTexture.scale = oB.level))
          })));
          const GB = BB.emissiveTexture;
          GB && (TB.emissiveFactor = [1, 1, 1], IB.push(this.exportTextureAsync(GB).then((BB => {
            BB && (TB.emissiveTexture = BB)
          }))));
          const vB = BB.ambientTexture;
          vB && IB.push(this.exportTextureAsync(vB).then((BB => {
            if (BB) {
              const IB = {
                index: BB.index
              };
              TB.occlusionTexture = IB
            }
          }))), IB.length > 0 && (this._exporter._materialNeedsUVsSet.add(BB), await Promise.all(IB))
        }(BB.alpha < 1 || BB.opacityTexture) && (BB.alphaMode === sB.b.ALPHA_COMBINE ? TB.alphaMode = "BLEND" : JB.Tools.Warn(BB.name + ": glTF 2.0 does not support alpha mode: " + BB.alphaMode.toString())), BB.emissiveColor && !BB.emissiveColor.equalsWithEpsilon(QZ, UZ) && (TB.emissiveFactor = BB.emissiveColor.HTB()), TB.pbrMetallicRoughness = ZB, YZ(TB, BB), await this._finishMaterialAsync(TB, BB);
        const oB = this._exporter._materials;
        return oB.push(TB), oB.length - 1
      }
      async _finishMaterialAsync(BB, IB) {
        const ZB = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", BB, IB),
          TB = [];
        for (const JB of ZB) TB.push(this.exportTextureAsync(JB));
        await Promise.all(TB), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", BB, IB)
      }
      _resizeTexturesToSameDimensions(BB, IB, ZB) {
        const TB = BB ? BB.getSize() : {
            width: 0,
            height: 0
          },
          JB = IB ? IB.getSize() : {
            width: 0,
            height: 0
          };
        let oB, GB;
        return TB.width < JB.width ? (oB = BB && BB instanceof CB.e ? dB.h.CreateResizedCopy(BB, JB.width, JB.height, !0) : iZ(JB.width, JB.height, ZB), GB = IB) : TB.width > JB.width ? (GB = IB && IB instanceof CB.e ? dB.h.CreateResizedCopy(IB, TB.width, TB.height, !0) : iZ(TB.width, TB.height, ZB), oB = BB) : (oB = BB, GB = IB), {
          texture1: oB,
          texture2: GB
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(BB, IB, ZB) {
        const TB = new Array;
        if (!BB && !IB) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const JB = BB ? BB.JR() : IB ? IB.JR() : null;
        if (JB) {
          const oB = this._resizeTexturesToSameDimensions(BB, IB, JB),
            GB = oB.texture1?.getSize();
          let vB, kB;
          const cB = GB.width,
            nB = GB.height,
            hB = await oB.texture1.readPixels(),
            zB = await oB.texture2.readPixels();
          if (!hB) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (vB = pZ(hB), !zB) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          kB = pZ(zB);
          const FB = kB.byteLength,
            NB = new Uint8Array(FB),
            gB = new Uint8Array(FB),
            yB = 4,
            UB = new qB.Color3(0, 0, 0);
          let WB = 0,
            dB = 0;
          for (let BB = 0; BB < nB; ++BB)
            for (let IB = 0; IB < cB; ++IB) {
              const TB = (cB * BB + IB) * yB,
                GB = {
                  diffuseColor: new qB.Color3(vB[TB], vB[TB + 1], vB[TB + 2]).toLinearSpace(JB.PN().useExactSrgbConversions).multiply(ZB.diffuseColor),
                  specularColor: new qB.Color3(kB[TB], kB[TB + 1], kB[TB + 2]).toLinearSpace(JB.PN().useExactSrgbConversions).multiply(ZB.specularColor),
                  glossiness: kB[TB + 3] * ZB.glossiness
                },
                nB = this._convertSpecularGlossinessToMetallicRoughness(GB);
              UB.r = Math.max(UB.r, nB.baseColor.r), UB.g = Math.max(UB.g, nB.baseColor.g), UB.b = Math.max(UB.b, nB.baseColor.b), WB = Math.max(WB, nB.metallic), dB = Math.max(dB, nB.roughness), gB[TB] = 255 * nB.baseColor.r, gB[TB + 1] = 255 * nB.baseColor.g, gB[TB + 2] = 255 * nB.baseColor.b, gB[TB + 3] = oB.texture1.hasAlpha ? 255 * vB[TB + 3] : 255, NB[TB] = 0, NB[TB + 1] = 255 * nB.roughness, NB[TB + 2] = 255 * nB.metallic, NB[TB + 3] = 255
            }
          const CB = {
            baseColor: UB,
            metallic: WB,
            roughness: dB
          };
          let QB = !1,
            sB = !1;
          for (let BB = 0; BB < nB; ++BB)
            for (let IB = 0; IB < cB; ++IB) {
              const ZB = (cB * BB + IB) * yB;
              gB[ZB] /= CB.baseColor.r > UZ ? CB.baseColor.r : 1, gB[ZB + 1] /= CB.baseColor.g > UZ ? CB.baseColor.g : 1, gB[ZB + 2] /= CB.baseColor.b > UZ ? CB.baseColor.b : 1;
              const TB = qB.Color3.FromInts(gB[ZB], gB[ZB + 1], gB[ZB + 2]).toGammaSpace(JB.PN().useExactSrgbConversions);
              gB[ZB] = 255 * TB.r, gB[ZB + 1] = 255 * TB.g, gB[ZB + 2] = 255 * TB.b, TB.equalsWithEpsilon(CZ, UZ) || (sB = !0), NB[ZB + 1] /= CB.roughness > UZ ? CB.roughness : 1, NB[ZB + 2] /= CB.metallic > UZ ? CB.metallic : 1;
              qB.Color3.FromInts(255, NB[ZB + 1], NB[ZB + 2]).equalsWithEpsilon(CZ, UZ) || (QB = !0)
            }
          return QB && TB.push((0, wB.EncodeImageAsync)(NB, cB, nB).then((BB => {
            CB.metallicRoughnessTextureData = BB
          }))), sB && TB.push((0, wB.EncodeImageAsync)(gB, cB, nB).then((BB => {
            CB.baseColorTextureData = BB
          }))), await Promise.all(TB).then((() => CB))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(BB) {
        const IB = this._getPerceivedBrightness(BB.diffuseColor),
          ZB = this._getPerceivedBrightness(BB.specularColor),
          TB = 1 - this._getMaxComponent(BB.specularColor),
          JB = wZ(IB, ZB, TB),
          oB = BB.diffuseColor.scale(TB / (1 - WZ.r) / Math.max(1 - JB, UZ)),
          GB = BB.specularColor.subtract(WZ.scale(1 - JB)).scale(1 / Math.max(JB, UZ));
        let vB = qB.Color3.Lerp(oB, GB, JB * JB);
        vB = vB.clampToRef(0, 1, vB);
        return {
          baseColor: vB,
          metallic: JB,
          roughness: 1 - BB.glossiness
        }
      }
      _getPerceivedBrightness(BB) {
        return Math.sqrt(.299 * BB.r * BB.r + .587 * BB.g * BB.g + .114 * BB.b * BB.b)
      }
      _getMaxComponent(BB) {
        return Math.max(BB.r, Math.max(BB.g, BB.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
        const cB = [],
          nB = {
            baseColor: BB,
            metallic: IB,
            roughness: ZB
          };
        if (kB)
          if (GB instanceof VI) {
            if (GB.geometryOpacityTexture) {
              const BB = TB && TB.getInternalTexture() ? TB.getInternalTexture().uniqueId : 0,
                IB = GB.geometryOpacityTexture && GB.geometryOpacityTexture.getInternalTexture() ? GB.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                ZB = Number(`${BB}${IB}`),
                JB = this._textureMap.get(ZB);
              JB ? vB.baseColorTexture = JB : cB.push(GZ("baseColorOpacityTexture", cZ(TB ? vZ(TB, 0) : kZ(1), TB ? vZ(TB, 1) : kZ(1), TB ? vZ(TB, 2) : kZ(1), vZ(GB.geometryOpacityTexture, 0)), GB.JR()).then((async BB => {
                const IB = await this.exportTextureAsync(BB, ZB);
                IB && (vB.baseColorTexture = IB)
              })))
            } else TB && cB.push(this.exportTextureAsync(TB).then((BB => {
              BB && (vB.baseColorTexture = BB)
            })));
            if (GB._useMetallicFromMetallicTextureBlue && JB) cB.push(this.exportTextureAsync(JB).then((BB => {
              BB && (vB.metallicRoughnessTexture = BB)
            })));
            else if (oB || JB) {
              const BB = JB && JB.getInternalTexture() ? JB.getInternalTexture().uniqueId : 0,
                IB = oB && oB.getInternalTexture() ? oB.getInternalTexture().uniqueId : 0,
                ZB = Number(`${BB}${IB}`),
                TB = this._textureMap.get(ZB);
              TB ? vB.metallicRoughnessTexture = TB : cB.push(GZ("MetalRoughTexture", cZ(GB.ambientOcclusionTexture ? vZ(GB.ambientOcclusionTexture, 0) : kZ(1), oB ? vZ(oB, 0) : kZ(1), JB ? vZ(JB, 0) : kZ(1)), GB.JR()).then((async BB => {
                const IB = await this.exportTextureAsync(BB, ZB);
                IB && (vB.metallicRoughnessTexture = IB)
              })))
            }
          } else TB && cB.push(this.exportTextureAsync(TB).then((BB => {
            BB && (vB.baseColorTexture = BB)
          }))), JB && cB.push(this.exportTextureAsync(JB).then((BB => {
            BB && (vB.metallicRoughnessTexture = BB)
          })));
        return cB.length > 0 && (this._exporter._materialNeedsUVsSet.add(GB), await Promise.all(cB)), nB
      }
      _getTextureSampler(BB) {
        const IB = {};
        if (!BB || !(BB instanceof CB.e)) return IB;
        const ZB = this._getGLTFTextureWrapMode(BB.wrapU);
        10497 !== ZB && (IB.wrapS = ZB);
        const TB = this._getGLTFTextureWrapMode(BB.wrapV);
        switch (10497 !== TB && (IB.wrapT = TB), BB.samplingMode) {
          case CB.e.LINEAR_LINEAR:
            IB.magFilter = 9729, IB.minFilter = 9729;
            break;
          case CB.e.LINEAR_NEAREST:
            IB.magFilter = 9729, IB.minFilter = 9728;
            break;
          case CB.e.NEAREST_LINEAR:
            IB.magFilter = 9728, IB.minFilter = 9729;
            break;
          case CB.e.NEAREST_LINEAR_MIPLINEAR:
            IB.magFilter = 9728, IB.minFilter = 9987;
            break;
          case CB.e.NEAREST_NEAREST:
            IB.magFilter = 9728, IB.minFilter = 9728;
            break;
          case CB.e.NEAREST_LINEAR_MIPNEAREST:
            IB.magFilter = 9728, IB.minFilter = 9985;
            break;
          case CB.e.LINEAR_NEAREST_MIPNEAREST:
            IB.magFilter = 9729, IB.minFilter = 9984;
            break;
          case CB.e.LINEAR_NEAREST_MIPLINEAR:
            IB.magFilter = 9729, IB.minFilter = 9986;
            break;
          case CB.e.NEAREST_NEAREST_MIPLINEAR:
            IB.magFilter = 9728, IB.minFilter = 9986;
            break;
          case CB.e.LINEAR_LINEAR_MIPLINEAR:
            IB.magFilter = 9729, IB.minFilter = 9987;
            break;
          case CB.e.LINEAR_LINEAR_MIPNEAREST:
            IB.magFilter = 9729, IB.minFilter = 9985;
            break;
          case CB.e.NEAREST_NEAREST_MIPNEAREST:
            IB.magFilter = 9728, IB.minFilter = 9984
        }
        return IB
      }
      _getGLTFTextureWrapMode(BB) {
        switch (BB) {
          case CB.e.WRAP_ADDRESSMODE:
            return 10497;
          case CB.e.CLAMP_ADDRESSMODE:
            return 33071;
          case CB.e.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return JB.Tools.Error(`Unsupported Texture Wrap Mode ${BB}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(BB, IB, ZB) {
        const TB = {
            diffuseColor: BB._albedoColor,
            specularColor: BB._reflectivityColor,
            glossiness: BB._microSurface
          },
          JB = BB._albedoTexture,
          oB = BB._reflectivityTexture,
          GB = BB._useMicroSurfaceFromReflectivityMapAlpha;
        if (oB && !GB) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((JB || oB) && ZB) {
          this._exporter._materialNeedsUVsSet.add(BB);
          const ZB = this._exportTextureSampler(JB || oB),
            GB = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(JB, oB, TB),
            vB = this._exporter._textures;
          if (GB.baseColorTextureData) {
            const BB = await this._exportImageAsync(`baseColor${vB.length}`, GB.baseColorTextureData);
            IB.baseColorTexture = this._exportTextureInfo(BB, ZB, JB?.coordinatesIndex)
          }
          if (GB.metallicRoughnessTextureData) {
            const BB = await this._exportImageAsync(`metallicRoughness${vB.length}`, GB.metallicRoughnessTextureData);
            IB.metallicRoughnessTexture = this._exportTextureInfo(BB, ZB, oB?.coordinatesIndex)
          }
          return GB
        }
        return this._convertSpecularGlossinessToMetallicRoughness(TB)
      }
      async exportPBRMaterialAsync(BB, IB) {
        const ZB = {},
          TB = {
            name: BB.name
          },
          JB = BB.isMetallicWorkflow();
        if (JB) {
          const IB = BB._albedoColor,
            TB = BB.alpha;
          IB && (ZB.baseColorFactor = [IB.r, IB.g, IB.b, TB])
        }
        const oB = JB ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(BB._albedoColor, BB._metallic, BB._roughness, BB._albedoTexture, BB._metallicTexture, BB._metallicTexture, BB, ZB, IB) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(BB, ZB, IB);
        await this._setMetallicRoughnessPbrMaterialAsync(oB, BB, TB, ZB, IB), await this._finishMaterialAsync(TB, BB);
        const GB = this._exporter._materials;
        return GB.push(TB), GB.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(BB, IB, ZB, TB, oB) {
        if (YZ(ZB, IB), BB.baseColor.equalsWithEpsilon(CZ, UZ) && WB.WithinEpsilon(IB.alpha, 1, UZ) || (TB.baseColorFactor = [BB.baseColor.r, BB.baseColor.g, BB.baseColor.b, IB.alpha]), null != BB.metallic && 1 !== BB.metallic && (TB.metallicFactor = BB.metallic), null != BB.roughness && 1 !== BB.roughness && (TB.roughnessFactor = BB.roughness), null == IB.backFaceCulling || IB.backFaceCulling || (IB._twoSidedLighting || JB.Tools.Warn(IB.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), ZB.doubleSided = !0), oB) {
          const BB = [],
            JB = IB instanceof QI ? IB._bumpTexture : IB.geometryNormalTexture;
          JB && BB.push(this.exportTextureAsync(JB).then((BB => {
            BB && (ZB.normalTexture = BB, 1 !== JB.level && (ZB.normalTexture.scale = JB.level))
          })));
          const oB = IB instanceof QI ? IB._ambientTexture : IB.ambientOcclusionTexture;
          oB && BB.push(new Promise((async BB => {
            if (IB instanceof VI && TB.metallicRoughnessTexture) {
              const IB = this._exportTextureSampler(oB),
                ZB = this._exporter._textures[TB.metallicRoughnessTexture.index].source,
                JB = this._exportTextureInfo(ZB, IB, oB.coordinatesIndex);
              return this._textureMap.set(oB.uniqueId, JB), this._exporter._extensionsPostExportTextures("exporter", JB, oB), BB(JB)
            }
            return BB(await this.exportTextureAsync(oB))
          })).then((async BB => {
            if (BB) {
              const TB = {
                index: BB.index,
                texCoord: BB.texCoord,
                extensions: BB.extensions
              };
              ZB.occlusionTexture = TB, TB.strength = IB instanceof QI ? IB._ambientTextureStrength : IB.ambientOcclusionTexture.level
            }
          })));
          const GB = IB instanceof QI ? IB._emissiveTexture : IB.emissionColorTexture;
          GB && BB.push(this.exportTextureAsync(GB).then((BB => {
            BB && (ZB.emissiveTexture = BB)
          }))), BB.length > 0 && (this._exporter._materialNeedsUVsSet.add(IB), await Promise.all(BB))
        }
        const GB = IB instanceof QI ? IB._emissiveColor : IB.emissionColor;
        GB.equalsWithEpsilon(QZ, UZ) || (ZB.emissiveFactor = GB.HTB()), ZB.pbrMetallicRoughness = TB
      }
      async exportOpenPBRMaterialAsync(BB, IB) {
        const ZB = {},
          TB = {
            name: BB.name
          },
          JB = BB.baseColor,
          oB = BB.geometryOpacity;
        JB && (ZB.baseColorFactor = [JB.r, JB.g, JB.b, oB]);
        const GB = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(BB.baseColor, BB.baseMetalness, BB.specularRoughness, BB.baseColorTexture, BB.baseMetalnessTexture, BB.specularRoughnessTexture, BB, ZB, IB);
        await this._setMetallicRoughnessPbrMaterialAsync(GB, BB, TB, ZB, IB), await this._finishMaterialAsync(TB, BB);
        const vB = this._exporter._materials;
        return vB.push(TB), vB.length - 1
      }
      async exportTextureAsync(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = this._textureMap.get(IB ?? BB.uniqueId);
        if (ZB) return ZB;
        const TB = this._exportTextureSampler(BB),
          JB = await this._exportTextureImageAsync(BB);
        return ZB = this._exportTextureInfo(JB, TB, BB.coordinatesIndex), this._textureMap.set(IB ?? BB.uniqueId, ZB), this._exporter._extensionsPostExportTextures("exporter", ZB, BB), ZB
      }
      async _exportTextureImageAsync(BB) {
        const IB = BB.mimeType ?? "none",
          ZB = this._internalTextureToImage,
          TB = BB.getInternalTexture().uniqueId;
        ZB[TB] = ZB[TB] || {};
        let oB = ZB[TB][IB];
        return void 0 === oB && (oB = (async () => {
          const ZB = await yZ(BB);
          if (ZB && sZ(ZB.mimeType) && ("none" === IB || ZB.mimeType === IB)) return await this._exportImageAsync(BB.name, new Blob([ZB.data], {
            type: ZB.mimeType
          }));
          let TB = "image/png";
          "none" !== IB && (sZ(IB) ? TB = IB : (TB = "image/png", JB.Tools.Warn(`Unsupported media type: ${IB}. Exporting texture as PNG.`)));
          const oB = BB.getSize(),
            GB = await (0, dB.d)(BB),
            vB = await (0, wB.EncodeImageAsync)(GB, oB.width, oB.height, TB);
          return await this._exportImageAsync(BB.name, vB)
        })(), ZB[TB][IB] = oB), await oB
      }
      async _exportImageAsync(BB, IB) {
        const ZB = this._exporter._images;
        let TB;
        if (this._exporter._shouldUseGlb) {
          TB = {
            name: BB,
            mimeType: IB.type,
            bufferView: void 0
          };
          const ZB = await IB.arrayBuffer(),
            JB = this._exporter._bufferManager.createBufferView(new Uint8Array(ZB));
          this._exporter._bufferManager.setBufferView(TB, JB)
        } else {
          const oB = BB.replace(/\.\/|\/|\.\\|\\/g, "_"),
            GB = function(BB) {
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
            }(IB.type);
          let vB = oB + GB;
          ZB.some((BB => BB.uri === vB)) && (vB = `${oB}_${JB.Tools.RandomId()}${GB}`), TB = {
            name: BB,
            uri: vB
          }, this._exporter._imageData[vB] = IB
        }
        return ZB.push(TB), ZB.length - 1
      }
      _exportTextureInfo(BB, IB, ZB) {
        const TB = this._exporter._textures;
        let JB = TB.findIndex((ZB => ZB.sampler == IB && ZB.source === BB)); - 1 === JB && (JB = TB.length, TB.push({
          source: BB,
          sampler: IB
        }));
        const oB = {
          index: JB
        };
        return ZB && (oB.texCoord = ZB), oB
      }
      _exportTextureSampler(BB) {
        const IB = this._getTextureSampler(BB),
          ZB = this._exporter._samplers,
          TB = ZB.findIndex((BB => BB.minFilter === IB.minFilter && BB.magFilter === IB.magFilter && BB.wrapS === IB.wrapS && BB.wrapT === IB.wrapT));
        return -1 !== TB ? TB : (ZB.push(IB), ZB.length - 1)
      }
    }
    var HZ = ZB(40129),
      MZ = ZB(40261);
    (0, MZ.c)();
    var jZ = ZB(37129);
    const PZ = TB.Matrix.Compose(new TB.rN(-1, 1, 1), TB.Quaternion.Identity(), TB.rN.Zero());

    function RZ(BB, IB) {
      if (!(BB instanceof hB.c)) return !1;
      if (IB) {
        if (!BB.getWorldMatrix().equalsWithEpsilon(TB.Matrix.IdentityReadOnly, jZ.d)) return !1
      } else {
        if (!BB.getWorldMatrix().multiplyToRef(PZ, TB.TmpVectors.Matrix[0]).equalsWithEpsilon(TB.Matrix.IdentityReadOnly, jZ.d)) return !1
      }
      return !(BB instanceof zB.b && BB.geometry)
    }
    const rZ = TB.rN.ZeroReadOnly,
      mZ = TB.Quaternion.Identity(),
      XZ = TB.rN.OneReadOnly,
      LZ = new TB.rN(-1, 1, 1);

    function eZ(BB, IB) {
      const {
        byteOffset: ZB,
        byteStride: TB,
        type: JB,
        normalized: oB
      } = BB, GB = BB.getSize(), vB = IB.reduce(((BB, IB) => IB.getTotalVertices() > BB ? IB.getTotalVertices() : BB), -Number.MAX_VALUE);
      return {
        byteOffset: ZB,
        byteStride: TB,
        componentCount: GB,
        type: JB,
        count: vB * GB,
        normalized: oB,
        totalVertices: vB,
        kind: BB.getKind()
      }
    }

    function uZ(BB) {
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

    function fZ(BB) {
      switch (BB) {
        case nB.e.PositionKind:
        case nB.e.NormalKind:
        case nB.e.TangentKind:
        case nB.e.ColorKind:
        case nB.e.MatricesIndicesKind:
        case nB.e.MatricesIndicesExtraKind:
        case nB.e.MatricesWeightsKind:
        case nB.e.MatricesWeightsExtraKind:
        case nB.e.UVKind:
        case nB.e.UV2Kind:
        case nB.e.UV3Kind:
        case nB.e.UV4Kind:
        case nB.e.UV5Kind:
        case nB.e.UV6Kind:
          return !0
      }
      return !1
    }

    function lZ(BB) {
      const IB = Math.sqrt(BB.x * BB.x + BB.y * BB.y + BB.z * BB.z);
      IB > 0 && (BB.x /= IB, BB.y /= IB, BB.z /= IB)
    }

    function AZ(BB) {
      return BB.x *= -1, BB
    }

    function tZ(BB) {
      if (BB.x * BB.x + BB.y * BB.y > .5) {
        const IB = Math.abs(BB.x),
          ZB = Math.abs(BB.y);
        if (IB > ZB) {
          const ZB = Math.sign(BB.x);
          BB.x = IB, BB.y *= -ZB, BB.z *= -ZB, BB.w *= ZB
        } else {
          const IB = Math.sign(BB.y);
          BB.x *= -IB, BB.y = ZB, BB.z *= IB, BB.w *= -IB
        }
      } else {
        const IB = Math.abs(BB.z),
          ZB = Math.abs(BB.w);
        if (IB > ZB) {
          const ZB = Math.sign(BB.z);
          BB.x *= -ZB, BB.y *= ZB, BB.z = IB, BB.w *= -ZB
        } else {
          const IB = Math.sign(BB.w);
          BB.x *= IB, BB.y *= -IB, BB.z *= -IB, BB.w = ZB
        }
      }
      return BB
    }

    function bZ(BB) {
      BB.cBB(-BB.z, BB.w, BB.x, -BB.y)
    }

    function xZ(BB, IB) {
      const ZB = TB.rN.FromArrayToRef(IB.translation || [0, 0, 0], 0, TB.TmpVectors.rN[0]),
        JB = TB.Quaternion.FromArrayToRef(IB.rotation || [0, 0, 0, 1], 0, TB.TmpVectors.Quaternion[0]),
        oB = TB.Matrix.ComposeToRef(XZ, JB, ZB, TB.TmpVectors.Matrix[0]),
        GB = TB.rN.FromArrayToRef(BB.translation || [0, 0, 0], 0, TB.TmpVectors.rN[2]),
        vB = TB.Quaternion.FromArrayToRef(BB.rotation || [0, 0, 0, 1], 0, TB.TmpVectors.Quaternion[1]),
        kB = TB.Matrix.ComposeToRef(XZ, vB, GB, TB.TmpVectors.Matrix[1]);
      oB.multiplyToRef(kB, kB), kB.decompose(void 0, JB, ZB), ZB.equalsWithEpsilon(rZ, jZ.d) ? delete IB.translation : IB.translation = ZB.HTB(), JB.equalsWithEpsilon(mZ, jZ.d) ? delete IB.rotation : IB.rotation = JB.HTB(), IB.scale && delete IB.scale
    }

    function EZ(BB, IB) {
      if (!(IB instanceof hB.c)) return !1;
      if (!(1 === IB.getChildren().length && 0 === BB.getChildren().length && BB.parent === IB)) return !1;
      const ZB = BB.JR(),
        TB = BB instanceof MZ.d && !ZB.useRightHandedSystem ? LZ : XZ;
      return !!IB.ek.equalsWithEpsilon(TB, jZ.d) || (iB.d.Warn(`Cannot collapse node ${BB.name} into parent node ${IB.name} with modified scaling.`), !1)
    }

    function DZ(BB) {
      if (BB instanceof Array) {
        const IB = new Float32Array(BB);
        return new Uint8Array(IB.buffer, IB.byteOffset, IB.byteLength)
      }
      return ArrayBuffer.isView(BB) ? new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength) : new Uint8Array(BB)
    }

    function KZ(BB, IB) {
      for (const [ZB, TB] of Object.entries(BB)) {
        const JB = IB[ZB];
        (Array.isArray(TB) && Array.isArray(JB) && VZ(TB, JB) || TB === JB) && delete BB[ZB]
      }
      return BB
    }

    function VZ(BB, IB) {
      return BB.length === IB.length && BB.every(((BB, ZB) => BB === IB[ZB]))
    }
    const SZ = new Map([
      [Int8Array, (BB, IB, ZB) => BB.setInt8(IB, ZB)],
      [Uint8Array, (BB, IB, ZB) => BB.setUint8(IB, ZB)],
      [Uint8ClampedArray, (BB, IB, ZB) => BB.setUint8(IB, ZB)],
      [Int16Array, (BB, IB, ZB) => BB.setInt16(IB, ZB, !0)],
      [Uint16Array, (BB, IB, ZB) => BB.setUint16(IB, ZB, !0)],
      [Int32Array, (BB, IB, ZB) => BB.setInt32(IB, ZB, !0)],
      [Uint32Array, (BB, IB, ZB) => BB.setUint32(IB, ZB, !0)],
      [Float32Array, (BB, IB, ZB) => BB.setFloat32(IB, ZB, !0)],
      [Float64Array, (BB, IB, ZB) => BB.setFloat64(IB, ZB, !0)]
    ]);
    class BT {
      writeTypedArray(BB) {
        this._checkGrowBuffer(BB.byteLength);
        const IB = SZ.get(BB.constructor);
        for (let ZB = 0; ZB < BB.length; ZB++) IB(this._dataView, this._byteOffset, BB[ZB]), this._byteOffset += BB.BYTES_PER_ELEMENT
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
        const IB = this.byteOffset + BB;
        if (IB > this._data.byteLength) {
          const BB = new Uint8Array(2 * IB);
          BB.set(this._data), this._data = BB, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function IT(BB) {
      return BB % 4 === 0 ? 4 : BB % 2 === 0 ? 2 : 1
    }
    class ZT {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(BB) {
        let IB = 0;
        this._bufferViewToData.forEach((BB => {
          IB += BB.byteLength
        }));
        const ZB = new BT(IB),
          TB = Array.from(this._bufferViewToData.keys()).sort(((BB, IB) => IT(IB.byteLength) - IT(BB.byteLength)));
        for (const JB of TB) {
          JB.byteOffset = ZB.byteOffset, BB.push(JB);
          const IB = BB.length - 1,
            TB = this.getPropertiesWithBufferView(JB);
          for (const BB of TB) BB.bufferView = IB;
          ZB.writeTypedArray(this._bufferViewToData.get(JB)), this._bufferViewToData.delete(JB)
        }
        return ZB.getOutputData()
      }
      createBufferView(BB, IB) {
        const ZB = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: BB.byteLength,
          byteStride: IB
        };
        return this._bufferViewToData.set(ZB, BB), ZB
      }
      createAccessor(BB, IB, ZB, TB, JB, oB, GB) {
        this._verifyBufferView(BB);
        const vB = {
          bufferView: void 0,
          componentType: ZB,
          count: TB,
          type: IB,
          min: oB?.min,
          max: oB?.max,
          normalized: GB,
          byteOffset: JB
        };
        return this.setBufferView(vB, BB), this._accessorToBufferView.set(vB, BB), vB
      }
      setBufferView(BB, IB) {
        this._verifyBufferView(IB);
        this.getPropertiesWithBufferView(IB).push(BB)
      }
      removeBufferView(BB) {
        const IB = this.getPropertiesWithBufferView(BB);
        for (const ZB of IB) void 0 !== ZB.bufferView && delete ZB.bufferView;
        this._bufferViewToData.delete(BB), this._bufferViewToProperties.delete(BB), this._accessorToBufferView.forEach(((IB, ZB) => {
          IB === BB && (void 0 !== ZB.byteOffset && delete ZB.byteOffset, this._accessorToBufferView.delete(ZB))
        }))
      }
      getBufferView(BB) {
        const IB = this._accessorToBufferView.get(BB);
        return this._verifyBufferView(IB), IB
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
    var TT = ZB(40269);
    (0, TT.e)();
    var JT = ZB(40498);
    (0, JT.d)();
    var oT = ZB(40318),
      GT = ZB(41124);
    (0, GT.d)();
    let vT = (() => {
      var BB;
      let IB, ZB, TB = [],
        JB = [],
        oB = [],
        GB = [];
      return BB = class {
        get influence() {
          return this._influence
        }
        set influence(BB) {
          if (this._influence === BB) return;
          const IB = this._influence;
          this._influence = BB, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === IB || 0 === BB)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(BB) {
          this._animationPropertiesOverride = BB
        }
        constructor(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            vB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = BB, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new BZ.b, this._onDataLayoutChanged = new BZ.b, this.id = (0, OB.l)(this, TB, void 0), this.morphTargetManager = ((0, OB.l)(this, JB), (0, OB.l)(this, oB, null)), this._animationPropertiesOverride = ((0, OB.l)(this, GB), null), this.id = BB, this.morphTargetManager = vB, this._scene = ZB || gB.e.LastCreatedScene, this.influence = IB, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        vvB(BB) {
          const IB = this.hasPositions;
          this._positions = BB, IB !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(BB) {
          const IB = this.hasNormals;
          this._normals = BB, IB !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(BB) {
          const IB = this.hasTangents;
          this._tangents = BB, IB !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(BB) {
          const IB = this.hasUVs;
          this._uvs = BB, IB !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(BB) {
          const IB = this.hasUV2s;
          this._uv2s = BB, IB !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(BB) {
          const IB = this.hasColors;
          this._colors = BB, IB !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const IB = sI.b.Clone((() => new BB(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return IB._positions = this._positions, IB._normals = this._normals, IB._tangents = this._tangents, IB._uvs = this._uvs, IB._uv2s = this._uv2s, IB._colors = this._colors, IB
        }
        serialize() {
          const BB = {};
          return BB.name = this.name, BB.influence = this.influence, null != this.id && (BB.id = this.id), BB.uniqueId = this.uniqueId, BB.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (BB.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (BB.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (BB.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (BB.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (BB.colors = Array.prototype.slice.call(this.getColors())), sI.b.AppendSerializedAnimations(this, BB), BB
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(IB, ZB) {
          let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const JB = new BB(IB.name, IB.influence, ZB, TB);
          if (JB.vvB(IB.positions), null != IB.id && (JB.id = IB.id), IB.normals && JB.setNormals(IB.normals), IB.tangents && JB.setTangents(IB.tangents), IB.uvs && JB.setUVs(IB.uvs), IB.uv2s && JB.setUV2s(IB.uv2s), IB.colors && JB.setColors(IB.colors), IB.animations) {
            for (let BB = 0; BB < IB.animations.length; BB++) {
              const ZB = IB.animations[BB],
                TB = (0, uI.e)("BABYLON.Animation");
              TB && JB.animations.push(TB.Parse(ZB))
            }
            IB.autoAnimate && ZB && ZB.beginAnimation(JB, IB.autoAnimateFrom, IB.autoAnimateTo, IB.autoAnimateLoop, IB.autoAnimateSpeed || 1)
          }
          return JB
        }
        static FromMesh(IB, ZB, TB) {
          ZB || (ZB = IB.name);
          const JB = new BB(ZB, TB, IB.JR(), IB.morphTargetManager);
          return JB.vvB(IB.getVerticesData(LB.i.PositionKind)), IB.isVerticesDataPresent(LB.i.NormalKind) && JB.setNormals(IB.getVerticesData(LB.i.NormalKind)), IB.isVerticesDataPresent(LB.i.TangentKind) && JB.setTangents(IB.getVerticesData(LB.i.TangentKind)), IB.isVerticesDataPresent(LB.i.UVKind) && JB.setUVs(IB.getVerticesData(LB.i.UVKind)), IB.isVerticesDataPresent(LB.i.UV2Kind) && JB.setUV2s(IB.getVerticesData(LB.i.UV2Kind)), IB.isVerticesDataPresent(LB.i.ColorKind) && JB.setColors(IB.getVerticesData(LB.i.ColorKind)), JB
        }
      }, (() => {
        const vB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IB = [(0, YB.C)()], ZB = [(0, YB.C)()], (0, OB.j)(null, null, IB, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: BB => "id" in BB,
            get: BB => BB.id,
            set: (BB, IB) => {
              BB.id = IB
            }
          },
          metadata: vB
        }, TB, JB), (0, OB.j)(null, null, ZB, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: BB => "morphTargetManager" in BB,
            get: BB => BB.morphTargetManager,
            set: (BB, IB) => {
              BB.morphTargetManager = IB
            }
          },
          metadata: vB
        }, oB, GB), vB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: vB
        })
      })(), BB
    })();
    var kT, cT = ZB(41197),
      nT = ZB(40310);
    ! function(BB) {
      BB[BB.INTANGENT = 0] = "INTANGENT", BB[BB.OUTTANGENT = 1] = "OUTTANGENT"
    }(kT || (kT = {}));
    class hT {
      static _IsTransformable(BB) {
        return BB && (BB instanceof hB.c || BB instanceof TT.c || BB instanceof nT.b)
      }
      static _CreateNodeAnimation(BB, IB, ZB, TB, oB) {
        if (this._IsTransformable(BB)) {
          const GB = [],
            vB = [],
            kB = IB.getKeys(),
            cB = hT._CalculateMinMaxKeyFrames(kB),
            nB = hT._DeduceInterpolation(kB, ZB, TB),
            hB = nB.interpolationType,
            zB = nB.shouldBakeAnimation;
          if (zB ? hT._CreateBakedAnimation(BB, IB, ZB, cB.min, cB.max, IB.framePerSecond, oB, GB, vB, cB, TB) : "LINEAR" === hB || "STEP" === hB ? hT._CreateLinearOrStepAnimation(BB, IB, ZB, GB, vB, TB) : "CUBICSPLINE" === hB ? hT._CreateCubicSplineAnimation(BB, IB, ZB, GB, vB, TB) : hT._CreateBakedAnimation(BB, IB, ZB, cB.min, cB.max, IB.framePerSecond, oB, GB, vB, cB, TB), GB.length && vB.length) {
            return {
              inputs: GB,
              outputs: vB,
              samplerInterpolation: hB,
              inputsMin: zB ? cB.min : JB.Tools.FloatRound(cB.min / IB.framePerSecond),
              inputsMax: zB ? cB.max : JB.Tools.FloatRound(cB.max / IB.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(BB) {
        let IB = null,
          ZB = "VEC3",
          TB = !1;
        const oB = BB.targetProperty.split(".");
        switch (oB[0]) {
          case "ek":
            IB = "scale";
            break;
          case "position":
            IB = "translation";
            break;
          case "rotation":
            ZB = "VEC4", IB = "rotation";
            break;
          case "rotationQuaternion":
            ZB = "VEC4", TB = !0, IB = "rotation";
            break;
          case "influence":
            ZB = "SCALAR", IB = "weights";
            break;
          default:
            JB.Tools.Error(`Unsupported animatable property ${oB[0]}`)
        }
        return IB ? {
          animationChannelTargetPath: IB,
          dataAccessorType: ZB,
          useQuaternion: TB
        } : (JB.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB) {
        let hB;
        if (hT._IsTransformable(BB) && BB.animations)
          for (const zB of BB.animations) {
            if (nB && !nB(zB)) continue;
            const JB = hT._DeduceAnimationInfo(zB);
            JB && (hB = {
              name: zB.name,
              samplers: [],
              channels: []
            }, hT._AddAnimation(`${zB.name}`, zB.hasRunningRuntimeAnimations ? IB : hB, BB, zB, JB.dataAccessorType, JB.animationChannelTargetPath, TB, oB, GB, vB, JB.useQuaternion, kB, cB), hB.samplers.length && hB.channels.length && ZB.push(hB))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB) {
        let hB;
        if (BB instanceof cT.c) {
          const JB = BB.morphTargetManager;
          if (JB)
            for (let zB = 0; zB < JB.numTargets; ++zB) {
              const FB = JB.getTarget(zB);
              for (const NB of FB.animations) {
                if (nB && !nB(NB)) continue;
                const FB = new GT.b(`${NB.name}`, "influence", NB.framePerSecond, NB.dataType, NB.AT, NB.enableBlending),
                  gB = [],
                  qB = NB.getKeys();
                for (let BB = 0; BB < qB.length; ++BB) {
                  const IB = qB[BB];
                  for (let BB = 0; BB < JB.numTargets; ++BB) BB == zB ? gB.push(IB) : gB.push({
                    frame: IB.frame,
                    value: 0
                  })
                }
                FB.setKeys(gB, !0);
                const yB = hT._DeduceAnimationInfo(FB);
                yB && (hB = {
                  name: FB.name,
                  samplers: [],
                  channels: []
                }, hT._AddAnimation(NB.name, NB.hasRunningRuntimeAnimations ? IB : hB, BB, FB, yB.dataAccessorType, yB.animationChannelTargetPath, TB, oB, GB, vB, yB.useQuaternion, kB, cB, JB.numTargets), hB.samplers.length && hB.channels.length && ZB.push(hB))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB) {
        let nB;
        if (BB.animationGroups) {
          const hB = BB.animationGroups;
          for (const zB of hB) {
            const hB = new Map,
              FB = new Map,
              NB = new Set,
              gB = zB.to - zB.from;
            nB = {
              name: zB.name,
              channels: [],
              samplers: []
            };
            for (let IB = 0; IB < zB.targetedAnimations.length; ++IB) {
              const cB = zB.targetedAnimations[IB],
                gB = cB.target,
                qB = cB.animation;
              if (kB && !kB(qB)) continue;
              const yB = vB.has(gB);
              if (this._IsTransformable(gB) || 1 === gB.length && this._IsTransformable(gB[0])) {
                const BB = hT._DeduceAnimationInfo(cB.animation);
                if (BB) {
                  const IB = this._IsTransformable(gB) ? gB : this._IsTransformable(gB[0]) ? gB[0] : null;
                  IB && hT._AddAnimation(`${qB.name}`, nB, IB, qB, BB.dataAccessorType, BB.animationChannelTargetPath, ZB, TB, JB, oB, BB.useQuaternion, GB, yB)
                }
              } else if (gB instanceof vT || 1 === gB.length && gB[0] instanceof vT) {
                if (hT._DeduceAnimationInfo(cB.animation)) {
                  const IB = gB instanceof vT ? gB : gB[0];
                  if (IB) {
                    const ZB = BB.morphTargetManagers.find((BB => {
                      for (let ZB = 0; ZB < BB.numTargets; ++ZB)
                        if (BB.getTarget(ZB) === IB) return !0;
                      return !1
                    }));
                    if (ZB) {
                      const TB = BB.meshes.find((BB => BB.morphTargetManager === ZB));
                      TB && (hB.has(TB) || hB.set(TB, new Map), hB.get(TB)?.set(IB, qB), NB.add(TB), FB.set(TB, qB))
                    }
                  }
                }
              }
            }
            NB.forEach((BB => {
              const IB = BB.morphTargetManager;
              let vB = null;
              const kB = [],
                cB = FB.get(BB).getKeys(),
                NB = cB.length;
              for (let ZB = 0; ZB < NB; ++ZB)
                for (let TB = 0; TB < IB.numTargets; ++TB) {
                  const JB = IB.getTarget(TB),
                    oB = hB.get(BB);
                  if (oB) {
                    const IB = oB.get(JB);
                    IB ? (vB || (vB = new GT.b(`${zB.name}_${BB.name}_MorphWeightAnimation`, "influence", IB.framePerSecond, GT.b.ANIMATIONTYPE_FLOAT, IB.AT, IB.enableBlending)), kB.push(IB.getKeys()[ZB])) : kB.push({
                      frame: zB.from + gB / NB * ZB,
                      value: JB.influence,
                      inTangent: cB[0].inTangent ? 0 : void 0,
                      outTangent: cB[0].outTangent ? 0 : void 0
                    })
                  }
                }
              vB.setKeys(kB, !0);
              const qB = hT._DeduceAnimationInfo(vB);
              qB && hT._AddAnimation(`${zB.name}_${BB.name}_MorphWeightAnimation`, nB, BB, vB, qB.dataAccessorType, qB.animationChannelTargetPath, ZB, TB, JB, oB, qB.useQuaternion, GB, !1, IB?.numTargets)
            })), nB.channels.length && nB.samplers.length && (cB?.set(zB, IB.length), IB.push(nB))
          }
        }
      }
      static _AddAnimation(BB, IB, ZB, JB, oB, GB, vB, kB, cB, nB, hB, zB, FB, NB) {
        const gB = hT._CreateNodeAnimation(ZB, JB, GB, hB, zB);
        let qB, yB, UB, WB, dB, CB;
        if (gB) {
          if (NB) {
            let BB, IB = 0;
            const ZB = [];
            for (; gB.inputs.length > 0;) BB = gB.inputs.shift(), IB % NB == 0 && ZB.push(BB), IB++;
            gB.inputs = ZB
          }
          const BB = vB.get(ZB),
            JB = new Float32Array(gB.inputs);
          qB = kB.createBufferView(JB), yB = kB.createAccessor(qB, "SCALAR", 5126, gB.inputs.length, void 0, {
            min: [gB.inputsMin],
            max: [gB.inputsMax]
          }), nB.push(yB), UB = nB.length - 1;
          const cB = new TB.Quaternion,
            hB = new TB.rN,
            zB = new TB.rN,
            QB = ZB instanceof TT.c,
            sB = uZ(oB),
            wB = new Float32Array(gB.outputs.length * sB);
          gB.outputs.forEach((function(BB, IB) {
            let ZB = BB;
            switch (GB) {
              case "translation":
                FB && (TB.rN.FromArrayToRef(BB, 0, zB), AZ(zB), zB.toArray(ZB));
                break;
              case "rotation":
                4 === BB.length ? TB.Quaternion.FromArrayToRef(BB, 0, cB) : (ZB = new Array(4), TB.rN.FromArrayToRef(BB, 0, hB), TB.Quaternion.FromEulerVectorToRef(hB, cB)), FB && (tZ(cB), QB && bZ(cB)), cB.toArray(ZB)
            }
            wB.set(ZB, IB * sB)
          })), qB = kB.createBufferView(wB), yB = kB.createAccessor(qB, oB, 5126, gB.outputs.length), nB.push(yB), WB = nB.length - 1, dB = {
            interpolation: gB.samplerInterpolation,
            input: UB,
            output: WB
          }, IB.samplers.push(dB), CB = {
            sampler: IB.samplers.length - 1,
            target: {
              node: BB,
              path: GB
            }
          }, IB.channels.push(CB)
        }
      }
      static _CreateBakedAnimation(BB, IB, ZB, oB, GB, vB, kB, cB, nB, hB, zB) {
        let FB;
        const NB = TB.Quaternion.Identity();
        let gB, qB, yB, UB, WB, dB = null,
          CB = null;
        hB.min = JB.Tools.FloatRound(oB / vB);
        const QB = IB.getKeys();
        for (let TB = 0, sB = QB.length; TB < sB; ++TB) {
          if (qB = QB[TB], TB + 1 < sB)
            if (yB = QB[TB + 1], qB.value.equals && qB.value.equals(yB.value) || qB.value === yB.value) {
              if (0 !== TB) continue;
              WB = qB.frame
            } else WB = yB.frame;
          else {
            if (UB = QB[TB - 1], qB.value.equals && qB.value.equals(UB.value) || qB.value === UB.value) continue;
            WB = GB
          }
          if (WB)
            for (let TB = qB.frame; TB <= WB; TB += kB) {
              if (gB = JB.Tools.FloatRound(TB / vB), gB === dB) continue;
              dB = gB, CB = gB;
              const oB = {
                key: 0,
                repeatCount: 0,
                AT: IB.AT
              };
              FB = IB._interpolate(TB, oB), hT._SetInterpolatedValue(BB, FB, gB, IB, ZB, NB, cB, nB, zB)
            }
        }
        CB && (hB.max = CB)
      }
      static _ConvertFactorToVector3OrQuaternion(BB, IB, ZB, oB, GB) {
        const vB = hT._GetBasePositionRotationOrScale(IB, oB, GB),
          kB = ZB.targetProperty.split("."),
          cB = kB ? kB[1] : "",
          nB = GB ? TB.Quaternion.FromArray(vB).normalize() : TB.rN.FromArray(vB);
        switch (cB) {
          case "x":
          case "y":
          case "z":
            nB[cB] = BB;
            break;
          case "w":
            nB.w = BB;
            break;
          default:
            JB.Tools.Error(`glTFAnimation: Unsupported component name "${cB}"!`)
        }
        return nB
      }
      static _SetInterpolatedValue(BB, IB, ZB, JB, oB, GB, vB, kB, cB) {
        let nB;
        vB.push(ZB), "weights" !== oB ? (JB.dataType === GT.b.ANIMATIONTYPE_FLOAT && (IB = this._ConvertFactorToVector3OrQuaternion(IB, BB, JB, oB, cB)), "rotation" === oB ? (cB ? GB = IB : (nB = IB, TB.Quaternion.RotationYawPitchRollToRef(nB.y, nB.x, nB.z, GB)), kB.push(GB.HTB())) : (nB = IB, kB.push(nB.HTB()))) : kB.push([IB])
      }
      static _CreateLinearOrStepAnimation(BB, IB, ZB, TB, JB, oB) {
        for (const GB of IB.getKeys()) TB.push(GB.frame / IB.framePerSecond), hT._AddKeyframeValue(GB, IB, JB, ZB, BB, oB)
      }
      static _CreateCubicSplineAnimation(BB, IB, ZB, TB, JB, oB) {
        IB.getKeys().forEach((function(GB) {
          TB.push(GB.frame / IB.framePerSecond), hT._AddSplineTangent(kT.INTANGENT, JB, ZB, "CUBICSPLINE", GB, oB), hT._AddKeyframeValue(GB, IB, JB, ZB, BB, oB), hT._AddSplineTangent(kT.OUTTANGENT, JB, ZB, "CUBICSPLINE", GB, oB)
        }))
      }
      static _GetBasePositionRotationOrScale(BB, IB, ZB) {
        let JB;
        if ("rotation" === IB)
          if (ZB) {
            JB = (BB.rotationQuaternion ?? TB.Quaternion.Identity()).HTB()
          } else {
            JB = (BB.rotation ?? TB.rN.Zero()).HTB()
          }
        else if ("translation" === IB) {
          JB = (BB.position ?? TB.rN.Zero()).HTB()
        } else {
          JB = (BB.ek ?? TB.rN.One()).HTB()
        }
        return JB
      }
      static _AddKeyframeValue(BB, IB, ZB, oB, GB, vB) {
        let kB;
        const cB = IB.dataType;
        if (cB === GT.b.ANIMATIONTYPE_VECTOR3) {
          let IB = BB.value.HTB();
          if ("rotation" === oB) {
            const BB = TB.rN.FromArray(IB);
            IB = TB.Quaternion.RotationYawPitchRoll(BB.y, BB.x, BB.z).HTB()
          }
          ZB.push(IB)
        } else if (cB === GT.b.ANIMATIONTYPE_FLOAT) {
          if ("weights" === oB) ZB.push([BB.value]);
          else if (kB = this._ConvertFactorToVector3OrQuaternion(BB.value, GB, IB, oB, vB), kB) {
            if ("rotation" === oB) {
              const BB = vB ? kB : TB.Quaternion.RotationYawPitchRoll(kB.y, kB.x, kB.z).normalize();
              ZB.push(BB.HTB())
            }
            ZB.push(kB.HTB())
          }
        } else cB === GT.b.ANIMATIONTYPE_QUATERNION ? ZB.push(BB.value.normalize().HTB()) : JB.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(BB, IB, ZB) {
        let TB, JB, oB = !1;
        if ("rotation" === IB && !ZB) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let GB = 0, vB = BB.length; GB < vB; ++GB)
          if (JB = BB[GB], JB.inTangent || JB.outTangent)
            if (TB) {
              if ("CUBICSPLINE" !== TB) {
                TB = "LINEAR", oB = !0;
                break
              }
            } else TB = "CUBICSPLINE";
        else if (TB) {
          if ("CUBICSPLINE" === TB || JB.interpolation && 1 === JB.interpolation && "STEP" !== TB) {
            TB = "LINEAR", oB = !0;
            break
          }
        } else TB = JB.interpolation && 1 === JB.interpolation ? "STEP" : "LINEAR";
        return TB || (TB = "LINEAR"), {
          interpolationType: TB,
          shouldBakeAnimation: oB
        }
      }
      static _AddSplineTangent(BB, IB, ZB, JB, oB, GB) {
        let vB;
        const kB = BB === kT.INTANGENT ? oB.inTangent : oB.outTangent;
        if ("CUBICSPLINE" === JB) {
          if ("rotation" === ZB)
            if (kB)
              if (GB) vB = kB.HTB();
              else {
                const BB = kB;
                vB = TB.Quaternion.RotationYawPitchRoll(BB.y, BB.x, BB.z).HTB()
              }
          else vB = [0, 0, 0, 0];
          else vB = "weights" === ZB ? kB ? [kB] : [0] : kB ? kB.HTB() : [0, 0, 0];
          IB.push(vB)
        }
      }
      static _CalculateMinMaxKeyFrames(BB) {
        let IB = 1 / 0,
          ZB = -1 / 0;
        return BB.forEach((function(BB) {
          IB = Math.min(IB, BB.frame), ZB = Math.max(ZB, BB.frame)
        })), {
          min: IB,
          max: ZB
        }
      }
    }

    function zT(BB, IB, ZB, oB, GB, vB) {
      const kB = {
          attributes: {},
          influence: BB.influence,
          name: BB.name
        },
        cB = IB.geometry;
      if (!cB) return JB.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), kB;
      const hB = vB ? -1 : 1,
        zB = TB.rN.Zero();
      let FB, NB;
      if (BB.hasPositions) {
        const oB = BB.getPositions(),
          vB = cB.getVerticesData(nB.e.PositionKind);
        if (vB) {
          const BB = new Float32Array(vB.length),
            IB = [1 / 0, 1 / 0, 1 / 0],
            JB = [-1 / 0, -1 / 0, -1 / 0];
          NB = vB.length / 3, FB = 0;
          for (let ZB = FB; ZB < NB; ++ZB) {
            const GB = TB.rN.FromArray(vB, 3 * ZB);
            TB.rN.FromArray(oB, 3 * ZB).subtractToRef(GB, zB), zB.x *= hB, IB[0] = Math.min(IB[0], zB.x), JB[0] = Math.max(JB[0], zB.x), IB[1] = Math.min(IB[1], zB.y), JB[1] = Math.max(JB[1], zB.y), IB[2] = Math.min(IB[2], zB.z), JB[2] = Math.max(JB[2], zB.z), BB[3 * ZB] = zB.x, BB[3 * ZB + 1] = zB.y, BB[3 * ZB + 2] = zB.z
          }
          const cB = ZB.createBufferView(BB, 12),
            nB = ZB.createAccessor(cB, "VEC3", 5126, oB.length / 3, 0, {
              min: IB,
              max: JB
            });
          GB.push(nB), kB.attributes.POSITION = GB.length - 1
        } else JB.Tools.Warn(`Morph target positions for mesh ${IB.name} were not exported. Mesh does not have position vertex data`)
      }
      if (BB.hasNormals) {
        const oB = BB.getNormals(),
          vB = cB.getVerticesData(nB.e.NormalKind);
        if (vB) {
          const BB = new Float32Array(vB.length);
          NB = vB.length / 3, FB = 0;
          for (let ZB = FB; ZB < NB; ++ZB) {
            const IB = TB.rN.FromArray(vB, 3 * ZB).normalize();
            TB.rN.FromArray(oB, 3 * ZB).normalize().subtractToRef(IB, zB), BB[3 * ZB] = zB.x * hB, BB[3 * ZB + 1] = zB.y, BB[3 * ZB + 2] = zB.z
          }
          const IB = ZB.createBufferView(BB, 12),
            JB = ZB.createAccessor(IB, "VEC3", 5126, oB.length / 3, 0);
          GB.push(JB), kB.attributes.NORMAL = GB.length - 1
        } else JB.Tools.Warn(`Morph target normals for mesh ${IB.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (BB.hasTangents) {
        const oB = BB.getTangents(),
          vB = cB.getVerticesData(nB.e.TangentKind);
        if (vB) {
          NB = vB.length / 4;
          const BB = new Float32Array(3 * NB);
          FB = 0;
          for (let ZB = FB; ZB < NB; ++ZB) {
            const IB = TB.rN.FromArray(vB, 4 * ZB);
            lZ(IB);
            const JB = TB.rN.FromArray(oB, 3 * ZB);
            lZ(JB), JB.subtractToRef(IB, zB), BB[3 * ZB] = zB.x * hB, BB[3 * ZB + 1] = zB.y, BB[3 * ZB + 2] = zB.z
          }
          const IB = ZB.createBufferView(BB, 12),
            JB = ZB.createAccessor(IB, "VEC3", 5126, NB, 0);
          GB.push(JB), kB.attributes.TANGENT = GB.length - 1
        } else JB.Tools.Warn(`Morph target tangents for mesh ${IB.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (BB.hasColors) {
        const oB = BB.getColors(),
          vB = cB.getVerticesData(nB.e.ColorKind),
          hB = cB.getVertexBuffer(nB.e.ColorKind);
        if (vB && hB) {
          const BB = hB.getSize();
          NB = vB.length / BB;
          const IB = new Float32Array(NB * BB);
          FB = 0;
          for (let ZB = FB; ZB < NB; ++ZB)
            if (3 === BB) {
              const JB = TB.rN.FromArray(vB, ZB * BB);
              TB.rN.FromArray(oB, ZB * BB).subtractToRef(JB, zB), IB[3 * ZB] = zB.x, IB[3 * ZB + 1] = zB.y, IB[3 * ZB + 2] = zB.z
            } else if (4 === BB) {
            const JB = new TB.Vector4,
              GB = TB.Vector4.FromArray(vB, ZB * BB);
            TB.Vector4.FromArray(oB, ZB * BB).subtractToRef(GB, JB), IB[4 * ZB] = JB.x, IB[4 * ZB + 1] = JB.y, IB[4 * ZB + 2] = JB.z, IB[4 * ZB + 3] = JB.w
          } else JB.Tools.Warn(`Unsupported number of components for color attribute: ${BB}`);
          const cB = ZB.createBufferView(IB, 4 * BB),
            nB = ZB.createAccessor(cB, 3 === BB ? "VEC3" : "VEC4", 5126, NB, 0);
          GB.push(nB), kB.attributes.COLOR_0 = GB.length - 1
        } else JB.Tools.Warn(`Morph target colors for mesh ${IB.name} were not exported. Mesh does not have colors vertex data`)
      }
      return kB
    }
    var FT = ZB(41605);
    class NT {}
    NT.DEFAULT_COLOR = tB.c.White(), NT.DEFAULT_WIDTH_ATTENUATED = 1, NT.DEFAULT_WIDTH = .1;
    var gT = ZB(41115);
    class qT {
      constructor(BB) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = BB
      }
      moveTo(BB, IB) {
        this._currentPath = new gT.h(BB, IB), this._tempPaths.push(this._currentPath)
      }
      lineTo(BB, IB) {
        this._currentPath.addLineTo(BB, IB)
      }
      quadraticCurveTo(BB, IB, ZB, TB) {
        this._currentPath.addQuadraticCurveTo(BB, IB, ZB, TB, this._resolution)
      }
      bezierCurveTo(BB, IB, ZB, TB, JB, oB) {
        this._currentPath.addBezierCurveTo(BB, IB, ZB, TB, JB, oB, this._resolution)
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

    function yT(BB, IB, ZB, TB, JB, oB) {
      const GB = oB.glyphs[BB] || oB.glyphs["?"];
      if (!GB) return null;
      const vB = new qT(JB);
      if (GB.o) {
        const BB = GB.o.split(" ");
        for (let JB = 0, oB = BB.length; JB < oB;) {
          switch (BB[JB++]) {
            case "m": {
              const oB = parseInt(BB[JB++]) * IB + ZB,
                GB = parseInt(BB[JB++]) * IB + TB;
              vB.moveTo(oB, GB);
              break
            }
            case "l": {
              const oB = parseInt(BB[JB++]) * IB + ZB,
                GB = parseInt(BB[JB++]) * IB + TB;
              vB.lineTo(oB, GB);
              break
            }
            case "q": {
              const oB = parseInt(BB[JB++]) * IB + ZB,
                GB = parseInt(BB[JB++]) * IB + TB,
                kB = parseInt(BB[JB++]) * IB + ZB,
                cB = parseInt(BB[JB++]) * IB + TB;
              vB.quadraticCurveTo(kB, cB, oB, GB);
              break
            }
            case "b": {
              const oB = parseInt(BB[JB++]) * IB + ZB,
                GB = parseInt(BB[JB++]) * IB + TB,
                kB = parseInt(BB[JB++]) * IB + ZB,
                cB = parseInt(BB[JB++]) * IB + TB,
                nB = parseInt(BB[JB++]) * IB + ZB,
                hB = parseInt(BB[JB++]) * IB + TB;
              vB.bezierCurveTo(kB, cB, nB, hB, oB, GB);
              break
            }
          }
        }
      }
      return vB.extractHoles(), {
        offsetX: GB.ha * IB,
        shapePath: vB
      }
    }

    function UT(BB, IB, ZB, TB) {
      const JB = Array.from(BB),
        oB = IB / TB.resolution,
        GB = (TB.boundingBox.yMax - TB.boundingBox.yMin + TB.underlineThickness) * oB,
        vB = [];
      let kB = 0,
        cB = 0;
      for (let nB = 0; nB < JB.length; nB++) {
        const BB = JB[nB];
        if ("\n" === BB) kB = 0, cB -= GB;
        else {
          const IB = yT(BB, oB, kB, cB, ZB, TB);
          IB && (kB += IB.offsetX, vB.push(IB.shapePath))
        }
      }
      return vB
    }
    class WT {
      static ConvertPoints(BB, IB) {
        if (BB.length && Array.isArray(BB) && "number" === typeof BB[0]) return [BB];
        if (BB.length && Array.isArray(BB[0]) && "number" === typeof BB[0][0]) return BB;
        if (BB.length && !Array.isArray(BB[0]) && BB[0] instanceof XB.s) {
          const IB = [];
          for (let ZB = 0; ZB < BB.length; ZB++) {
            const TB = BB[ZB];
            IB.push(TB.x, TB.y, TB.z)
          }
          return [IB]
        }
        if (BB.length > 0 && Array.isArray(BB[0]) && BB[0].length > 0 && BB[0][0] instanceof XB.s) {
          const IB = [],
            ZB = BB;
          for (const BB of ZB) IB.push(BB.flatMap((BB => [BB.x, BB.y, BB.z])));
          return IB
        }
        if (BB instanceof Float32Array) {
          if (IB?.floatArrayStride) {
            const ZB = [],
              TB = 3 * IB.floatArrayStride;
            for (let IB = 0; IB < BB.length; IB += TB) {
              const JB = new Array(TB);
              for (let ZB = 0; ZB < TB; ZB++) JB[ZB] = BB[IB + ZB];
              ZB.push(JB)
            }
            return ZB
          }
          return [Array.from(BB)]
        }
        if (BB.length && BB[0] instanceof Float32Array) {
          const IB = [];
          for (const ZB of BB) IB.push(Array.from(ZB));
          return IB
        }
        return []
      }
      static OmitZeroLengthPredicate(BB, IB, ZB) {
        const TB = [];
        return IB.subtract(BB).lengthSquared() > 0 && TB.push([BB, IB]), ZB.subtract(IB).lengthSquared() > 0 && TB.push([IB, ZB]), BB.subtract(ZB).lengthSquared() > 0 && TB.push([ZB, BB]), 0 === TB.length ? null : TB
      }
      static OmitDuplicatesPredicate(BB, IB, ZB, TB) {
        const JB = [];
        return WT._SearchInPoints(BB, IB, TB) || JB.push([BB, IB]), WT._SearchInPoints(IB, ZB, TB) || JB.push([IB, ZB]), WT._SearchInPoints(ZB, BB, TB) || JB.push([ZB, BB]), 0 === JB.length ? null : JB
      }
      static _SearchInPoints(BB, IB, ZB) {
        for (const TB of ZB)
          for (let ZB = 0; ZB < TB.length; ZB++)
            if (TB[ZB]?.equals(BB) && (TB[ZB + 1]?.equals(IB) || TB[ZB - 1]?.equals(IB))) return !0;
        return !1
      }
      static MeshesToLines(BB, IB) {
        const ZB = [];
        for (let TB = 0; TB < BB.length; TB++) {
          const JB = BB[TB],
            oB = JB.getVerticesData(LB.i.PositionKind),
            GB = JB.MTB();
          if (oB && GB)
            for (let BB = 0, vB = 0; BB < GB.length; BB++) {
              const kB = 3 * GB[vB++],
                cB = 3 * GB[vB++],
                nB = 3 * GB[vB++],
                hB = new XB.s(oB[kB], oB[kB + 1], oB[kB + 2]),
                zB = new XB.s(oB[cB], oB[cB + 1], oB[cB + 2]),
                FB = new XB.s(oB[nB], oB[nB + 1], oB[nB + 2]);
              if (IB) {
                const vB = IB(hB, zB, FB, ZB, BB, kB, JB, TB, oB, GB);
                if (vB)
                  for (const BB of vB) ZB.push(BB)
              } else ZB.push([hB, zB], [zB, FB], [FB, hB])
            }
        }
        return ZB
      }
      static ToVector3Array(BB) {
        if (Array.isArray(BB[0])) {
          const IB = [],
            ZB = BB;
          for (const BB of ZB) {
            const ZB = [];
            for (let IB = 0; IB < BB.length; IB += 3) ZB.push(new XB.s(BB[IB], BB[IB + 1], BB[IB + 2]));
            IB.push(ZB)
          }
          return IB
        }
        const IB = BB,
          ZB = [];
        for (let TB = 0; TB < IB.length; TB += 3) ZB.push(new XB.s(IB[TB], IB[TB + 1], IB[TB + 2]));
        return ZB
      }
      static ToNumberArray(BB) {
        return BB.flatMap((BB => [BB.x, BB.y, BB.z]))
      }
      static GetPointsCountInfo(BB) {
        const IB = new Array(BB.length);
        let ZB = 0;
        for (let TB = BB.length; TB--;) IB[TB] = BB[TB].length / 3, ZB += IB[TB];
        return {
          total: ZB,
          counts: IB
        }
      }
      static GetLineLength(BB) {
        if (0 === BB.length) return 0;
        let IB;
        IB = "number" === typeof BB[0] ? WT.ToVector3Array(BB) : BB;
        const ZB = XB.m.rN[0];
        let TB = 0;
        for (let JB = 0; JB < IB.length - 1; JB++) {
          const BB = IB[JB];
          TB += IB[JB + 1].subtractToRef(BB, ZB).length()
        }
        return TB
      }
      static GetLineLengthArray(BB, IB) {
        const ZB = IB ? new Float32Array(IB, 0, BB.length / 3) : new Float32Array(BB.length / 3);
        let TB = 0;
        for (let JB = 0, oB = BB.length / 3 - 1; JB < oB; JB++) {
          let IB = BB[3 * JB + 0],
            oB = BB[3 * JB + 1],
            GB = BB[3 * JB + 2];
          IB -= BB[3 * JB + 3], oB -= BB[3 * JB + 4], GB -= BB[3 * JB + 5];
          TB += Math.sqrt(IB * IB + oB * oB + GB * GB), ZB[JB + 1] = TB
        }
        return ZB
      }
      static SegmentizeSegmentByCount(BB, IB, ZB) {
        const TB = [],
          JB = IB.subtract(BB),
          oB = XB.m.rN[0];
        oB.K9(ZB);
        const GB = XB.m.rN[1];
        JB.divideToRef(oB, GB);
        let vB = BB.clone();
        TB.push(vB);
        for (let kB = 0; kB < ZB; kB++) vB = vB.clone(), TB.push(vB.addInPlace(GB));
        return TB
      }
      static SegmentizeLineBySegmentLength(BB, IB) {
        const ZB = BB[0] instanceof XB.s ? WT.GetLineSegments(BB) : "number" === typeof BB[0] ? WT.GetLineSegments(WT.ToVector3Array(BB)) : BB,
          TB = [];
        for (const JB of ZB)
          if (JB.length > IB) {
            const BB = WT.SegmentizeSegmentByCount(JB.point1, JB.point2, Math.ceil(JB.length / IB));
            for (const IB of BB) TB.push(IB)
          } else TB.push(JB.point1), TB.push(JB.point2);
        return TB
      }
      static SegmentizeLineBySegmentCount(BB, IB) {
        const ZB = "number" === typeof BB[0] ? WT.ToVector3Array(BB) : BB,
          TB = WT.GetLineLength(ZB) / IB;
        return WT.SegmentizeLineBySegmentLength(ZB, TB)
      }
      static GetLineSegments(BB) {
        const IB = [];
        for (let ZB = 0; ZB < BB.length - 1; ZB++) {
          const TB = BB[ZB],
            JB = BB[ZB + 1],
            oB = JB.subtract(TB).length();
          IB.push({
            point1: TB,
            point2: JB,
            length: oB
          })
        }
        return IB
      }
      static GetMinMaxSegmentLength(BB) {
        const IB = WT.GetLineSegments(BB).sort((BB => BB.length));
        return {
          min: IB[0].length,
          max: IB[IB.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const JB = IB * ZB;
        let oB = 0,
          GB = 0;
        const vB = BB.length;
        for (let cB = 0; cB < vB; cB++) {
          if (JB <= oB + BB[cB].length) {
            GB = cB;
            break
          }
          oB += BB[cB].length
        }
        const kB = (JB - oB) / BB[GB].length;
        return BB[GB].point2.subtractToRef(BB[GB].point1, XB.m.rN[0]), XB.m.rN[0].scaleToRef(kB, XB.m.rN[1]), TB || XB.m.rN[1].addInPlace(BB[GB].point1), XB.m.rN[1].clone()
      }
      static GetCircleLinePoints(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB,
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / IB;
        const oB = [];
        for (let GB = 0; GB <= IB; GB++) oB.push(new XB.s(Math.cos(GB * JB) * BB, Math.sin(GB * JB) * TB, ZB));
        return oB
      }
      static GetBezierLinePoints(BB, IB, ZB, TB) {
        return gT.e.CreateQuadraticBezier(BB, IB, ZB, TB).getPoints().flatMap((BB => [BB.x, BB.y, BB.z]))
      }
      static GetArrowCap(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          GB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [BB.clone(), BB.add(IB.multiplyByFloats(ZB, ZB, ZB))],
          widths: [TB, JB, oB, GB]
        }
      }
      static GetPointsFromText(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const GB = [],
          vB = UT(BB, IB, ZB, TB);
        for (const kB of vB) {
          for (const BB of kB.paths) {
            const IB = [],
              ZB = BB.getPoints();
            for (const BB of ZB) IB.push(BB.x, BB.y, JB);
            GB.push(IB)
          }
          if (oB)
            for (const BB of kB.holes) {
              const IB = [],
                ZB = BB.getPoints();
              for (const BB of ZB) IB.push(BB.x, BB.y, JB);
              GB.push(IB)
            }
        }
        return GB
      }
      static Color3toRGBAUint8(BB) {
        const IB = new Uint8Array(4 * BB.length);
        for (let ZB = 0, TB = 0; ZB < BB.length; ZB++) IB[TB++] = 255 * BB[ZB].r, IB[TB++] = 255 * BB[ZB].g, IB[TB++] = 255 * BB[ZB].b, IB[TB++] = 255;
        return IB
      }
      static CreateColorsTexture(BB, IB, ZB, TB) {
        const JB = TB.PN().getCaps().maxTextureSize ?? 1,
          oB = IB.length > JB ? JB : IB.length,
          GB = Math.ceil(IB.length / JB);
        GB > 1 && (IB = [...IB, ...Array(oB * GB - IB.length).fill(IB[0])]);
        const vB = WT.Color3toRGBAUint8(IB),
          kB = new QB.d(vB, oB, GB, nZ.e.TEXTUREFORMAT_RGBA, TB, !1, !0, ZB);
        return kB.name = BB, kB
      }
      static PrepareEmptyColorsTexture(BB) {
        if (!NT.EmptyColorsTexture) {
          const IB = new Uint8Array(4);
          NT.EmptyColorsTexture = new QB.d(IB, 1, 1, nZ.e.TEXTUREFORMAT_RGBA, BB, !1, !1, QB.d.NEAREST_NEAREST), NT.EmptyColorsTexture.name = "grlEmptyColorsTexture", NT.EmptyColorsTexture.oR.addOnce((() => {
            NT.EmptyColorsTexture = null
          }))
        }
        return NT.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        NT.EmptyColorsTexture?.dispose(), NT.EmptyColorsTexture = null
      }
      static BooleanToNumber(BB) {
        return BB ? 1 : 0
      }
    }
    class dT extends eB.e {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class CT extends uB.e {
      isCompatible(BB) {
        return !0
      }
      constructor(BB, IB, ZB) {
        ZB = ZB || {
          color: NT.DEFAULT_COLOR
        };
        const TB = new dT;
        TB.GREASED_LINE_HAS_COLOR = !!ZB.color && !ZB.useColors, TB.GREASED_LINE_SIZE_ATTENUATION = ZB.sizeAttenuation ?? !1, TB.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === ZB.colorDistributionType, TB.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (IB ?? BB.JR()).useRightHandedSystem, TB.GREASED_LINE_CAMERA_FACING = ZB.cameraFacing ?? !0, super(BB, CT.GREASED_LINE_MATERIAL_NAME, 200, TB, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = ZB?.forceGLSL || CT.ForceGLSL, this._scene = IB ?? BB.JR(), this._engine = this._scene.PN(), this._cameraFacing = ZB.cameraFacing ?? !0, this.visibility = ZB.visibility ?? 1, this.useDash = ZB.useDash ?? !1, this.dashRatio = ZB.dashRatio ?? .5, this.dashOffset = ZB.dashOffset ?? 0, this.width = ZB.width ? ZB.width : ZB.sizeAttenuation ? NT.DEFAULT_WIDTH_ATTENUATED : NT.DEFAULT_WIDTH, this._sizeAttenuation = ZB.sizeAttenuation ?? !1, this.colorMode = ZB.colorMode ?? 0, this._color = ZB.color ?? null, this.useColors = ZB.useColors ?? !1, this._colorsDistributionType = ZB.colorDistributionType ?? 0, this.colorsSampling = ZB.colorsSampling ?? QB.d.NEAREST_NEAREST, this._colors = ZB.colors ?? null, this.dashCount = ZB.dashCount ?? 1, this.resolution = ZB.resolution ?? new XB.p(this._engine.getRenderWidth(), this._engine.getRenderHeight()), ZB.colorsTexture ? this.colorsTexture = ZB.colorsTexture : this._colors ? this.colorsTexture = WT.CreateColorsTexture(`${BB.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? NT.DEFAULT_COLOR, WT.PrepareEmptyColorsTexture(this._scene)), this._engine.oR.add((() => {
          WT.DisposeEmptyColorsTexture()
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
        const IB = [{
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
        return this._cameraFacing && IB.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === BB && IB.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: IB,
          vertex: this._cameraFacing && this._isGLSL(BB) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(BB) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(BB) {
        if (this._cameraFacing) {
          BB.T6("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || BB.T6("viewProjection", this._scene.getTransformMatrix());
          const IB = XB.m.Vector4[0];
          IB.x = this._aspect, IB.y = this._resolution.x, IB.z = this._resolution.y, IB.w = this.width, BB.updateVector4("grl_aspect_resolution_lineWidth", IB)
        }
        const IB = XB.m.Vector4[0];
        IB.x = WT.BooleanToNumber(this.useDash), IB.y = this._dashArray, IB.z = this.dashOffset, IB.w = this.dashRatio, BB.updateVector4("grl_dashOptions", IB);
        const ZB = XB.m.Vector4[1];
        ZB.x = this.colorMode, ZB.y = this.visibility, ZB.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, ZB.w = WT.BooleanToNumber(this.useColors), BB.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", ZB), this._color && BB.updateColor3("grl_singleColor", this._color);
        const TB = this.colorsTexture ?? NT.EmptyColorsTexture;
        BB.setTexture("grl_colors", TB), BB.updateFloat2("grl_textureSize", TB?.getSize().width ?? 1, TB?.getSize().height ?? 1)
      }
      prepareDefines(BB, IB, ZB) {
        BB.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, BB.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, BB.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, BB.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = IB.useRightHandedSystem, BB.GREASED_LINE_CAMERA_FACING = this._cameraFacing, BB.GREASED_LINE_USE_OFFSETS = !!ZB.offsets
      }
      getClassName() {
        return CT.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(IB) ? function(BB, IB) {
          if ("vertex" === BB) {
            const BB = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return IB && (BB["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), BB
          }
          return "fragment" === BB ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(BB, this._cameraFacing) : function(BB, IB) {
          if ("vertex" === BB) {
            const BB = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return IB && (BB["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), BB
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
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const TB = this._colors?.length ?? 0;
        if (this._colors = BB, null !== BB && 0 !== BB.length) {
          if (!IB || ZB)
            if (this.colorsTexture && TB === BB.length && !ZB) {
              const IB = WT.Color3toRGBAUint8(BB);
              this.colorsTexture.update(IB)
            } else this.colorsTexture?.dispose(), this.colorsTexture = WT.CreateColorsTexture(`${this._material.name}-colors-texture`, BB, this.colorsSampling, this._scene)
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
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== BB || null !== this._color && null === BB ? (this._color = BB, IB || this.markAllDefinesAsDirty()) : this._color = BB
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
          IB = {
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
        return this._colors && (IB.colors = this._colors), this._color && (IB.color = this._color), BB.greasedLineMaterialOptions = IB, BB
      }
      parse(BB, IB, ZB) {
        super.parse(BB, IB, ZB);
        const TB = BB.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), TB.color && this.setColor(TB.color, !0), TB.colorDistributionType && (this.colorsDistributionType = TB.colorDistributionType), TB.colors && (this.colors = TB.colors), TB.colorsSampling && (this.colorsSampling = TB.colorsSampling), TB.colorMode && (this.colorMode = TB.colorMode), TB.useColors && (this.useColors = TB.useColors), TB.visibility && (this.visibility = TB.visibility), TB.useDash && (this.useDash = TB.useDash), TB.dashCount && (this.dashCount = TB.dashCount), TB.dashRatio && (this.dashRatio = TB.dashRatio), TB.dashOffset && (this.dashOffset = TB.dashOffset), TB.width && (this.width = TB.width), TB.sizeAttenuation && (this.sizeAttenuation = TB.sizeAttenuation), TB.resolution && (this.resolution = TB.resolution), this.colors ? this.colorsTexture = WT.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, IB) : WT.PrepareEmptyColorsTexture(IB), this.markAllDefinesAsDirty()
      }
      copyTo(BB) {
        const IB = BB;
        IB.colorsTexture?.dispose(), this._colors && (IB.colorsTexture = WT.CreateColorsTexture(`${IB._material.name}-colors-texture`, this._colors, IB.colorsSampling, this._scene)), IB.setColor(this.color, !0), IB.colorsDistributionType = this.colorsDistributionType, IB.colorsSampling = this.colorsSampling, IB.colorMode = this.colorMode, IB.useColors = this.useColors, IB.visibility = this.visibility, IB.useDash = this.useDash, IB.dashCount = this.dashCount, IB.dashRatio = this.dashRatio, IB.dashOffset = this.dashOffset, IB.width = this.width, IB.sizeAttenuation = this.sizeAttenuation, IB.resolution = this.resolution, IB.markAllDefinesAsDirty()
      }
      _isGLSL(BB) {
        return 0 === BB || this._forceGLSL
      }
    }
    CT.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", CT.ForceGLSL = !1;
    var QT = ZB(40448),
      sT = ZB(40463),
      wT = ZB(38714),
      OT = ZB(40514),
      YT = ZB(39887);
    class iT extends OT.n {
      constructor(BB, IB, TB) {
        const JB = IB.PN(),
          oB = JB.isWebGPU && !(TB.forceGLSL || iT.ForceGLSL),
          GB = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        IB.useRightHandedSystem && GB.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const vB = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        TB.cameraFacing ? (GB.push("GREASED_LINE_CAMERA_FACING"), vB.push("grl_previousAndSide", "grl_nextAndCounters")) : (vB.push("grl_slopes"), vB.push("grl_counters"));
        const kB = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (oB || kB.push("world", "viewProjection", "view", "projection"), super(BB, IB, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: oB ? ["Scene", "Mesh"] : void 0,
            attributes: vB,
            uniforms: kB,
            samplers: oB ? [] : ["grlColors"],
            defines: GB,
            extraInitializationsAsync: async () => {
              oB ? await Promise.all([ZB.e(339).then((() => ZB(61881))), ZB.e(395).then((() => ZB(61886)))]) : await Promise.all([ZB.e(332).then((() => ZB(61893))), ZB.e(396).then((() => ZB(61902)))])
            },
            shaderLanguage: oB ? 1 : 0
          }), this._color = tB.c.White(), this._colorsDistributionType = 0, this._colorsTexture = null, TB = TB || {
            color: NT.DEFAULT_COLOR
          }, this.visibility = TB.visibility ?? 1, this.useDash = TB.useDash ?? !1, this.dashRatio = TB.dashRatio ?? .5, this.dashOffset = TB.dashOffset ?? 0, this.dashCount = TB.dashCount ?? 1, this.width = TB.width ? TB.width : TB.sizeAttenuation && TB.cameraFacing ? NT.DEFAULT_WIDTH_ATTENUATED : NT.DEFAULT_WIDTH, this.sizeAttenuation = TB.sizeAttenuation ?? !1, this.color = TB.color ?? tB.c.White(), this.useColors = TB.useColors ?? !1, this.colorsDistributionType = TB.colorDistributionType ?? 0, this.colorsSampling = TB.colorsSampling ?? QB.d.NEAREST_NEAREST, this.colorMode = TB.colorMode ?? 0, this._colors = TB.colors ?? null, this._cameraFacing = TB.cameraFacing ?? !0, this.resolution = TB.resolution ?? new XB.p(JB.getRenderWidth(), JB.getRenderHeight()), TB.colorsTexture ? this.colorsTexture = TB.colorsTexture : this._colors ? this.colorsTexture = WT.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, IB) : (this._color = this._color ?? NT.DEFAULT_COLOR, this.colorsTexture = WT.PrepareEmptyColorsTexture(IB)), oB) {
          const BB = new YT.b;
          BB.setParameters(), BB.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", BB)
        }
        JB.oR.add((() => {
          WT.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== NT.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new XB.p(this._colorMode, this._colorsDistributionType))
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
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const TB = this._colors?.length ?? 0;
        if (this._colors = BB, null !== BB && 0 !== BB.length) {
          if (!IB || ZB)
            if (this._colorsTexture && TB === BB.length && !ZB) {
              const IB = WT.Color3toRGBAUint8(BB);
              this._colorsTexture.update(IB)
            } else this._colorsTexture && this._colorsTexture !== NT.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = WT.CreateColorsTexture(`${this.name}-colors-texture`, BB, this.colorsSampling, this.JR())
        } else {
          this._colorsTexture && this._colorsTexture !== NT.EmptyColorsTexture && this._colorsTexture.dispose();
          const BB = this.JR();
          BB && (this.colorsTexture = WT.PrepareEmptyColorsTexture(BB))
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
        this._useColors = BB, this.setFloat("grlUseColors", WT.BooleanToNumber(BB))
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
        this._useDash = BB, this.setFloat("grlUseDash", WT.BooleanToNumber(BB))
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
        this._sizeAttenuation = BB, this.setFloat("grlSizeAttenuation", WT.BooleanToNumber(BB))
      }
      get color() {
        return this._color
      }
      set color(BB) {
        this.setColor(BB)
      }
      setColor(BB) {
        BB = BB ?? NT.DEFAULT_COLOR, this._color = BB, this.setColor3("grlColor", BB)
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
          IB = {
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
        return this._colors && (IB.colors = this._colors), BB.greasedLineMaterialOptions = IB, BB
      }
      parse(BB, IB, ZB) {
        const TB = BB.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), TB.color && (this.color = TB.color), TB.colorDistributionType && (this.colorsDistributionType = TB.colorDistributionType), TB.colorsSampling && (this.colorsSampling = TB.colorsSampling), TB.colorMode && (this.colorMode = TB.colorMode), TB.useColors && (this.useColors = TB.useColors), TB.visibility && (this.visibility = TB.visibility), TB.useDash && (this.useDash = TB.useDash), TB.dashCount && (this.dashCount = TB.dashCount), TB.dashRatio && (this.dashRatio = TB.dashRatio), TB.dashOffset && (this.dashOffset = TB.dashOffset), TB.width && (this.width = TB.width), TB.sizeAttenuation && (this.sizeAttenuation = TB.sizeAttenuation), TB.resolution && (this.resolution = TB.resolution), TB.colors ? this.colorsTexture = WT.CreateColorsTexture(`${this.name}-colors-texture`, TB.colors, this.colorsSampling, this.JR()) : this.colorsTexture = WT.PrepareEmptyColorsTexture(IB), this._cameraFacing = TB.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var pT, aT, HT;
    iT.ForceGLSL = !1,
      function(BB) {
        BB[BB.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", BB[BB.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(pT || (pT = {})),
      function(BB) {
        BB[BB.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", BB[BB.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", BB[BB.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(aT || (aT = {})),
      function(BB) {
        BB[BB.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", BB[BB.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", BB[BB.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", BB[BB.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", BB[BB.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(HT || (HT = {}));
    class MT extends QT.c {
      constructor(BB, IB, ZB) {
        super(BB, IB, null, null, !1, !1), this.name = BB, this._options = ZB, this._lazy = !1, this._updatable = !1, this._engine = IB.PN(), this._lazy = ZB.lazy ?? !1, this._updatable = ZB.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = ZB.colorPointers ?? [], this._widths = ZB.widths ?? new Array(ZB.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(BB) {
        let IB = 0;
        for (const TB of this._points) IB += TB.length;
        const ZB = IB / 3 * 2 - this._widths.length;
        for (let TB = 0; TB < ZB; TB++) this._widths.push(BB)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.XN && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(BB, IB) {
        for (const ZB of BB) this._points.push(ZB);
        this._lazy || this.setPoints(this._points, IB)
      }
      dispose(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(BB, IB)
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
        this.material instanceof iT && this.material.setDefine("GREASED_LINE_USE_OFFSETS", BB?.length > 0), this._offsets = BB, this._offsetsBuffer ? this._offsetsBuffer.update(BB) : this._createOffsetsBuffer(BB)
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
        if (this.material && this.material instanceof iT) return this.material;
        const BB = this.material?.pluginManager?.getPlugin(CT.GREASED_LINE_MATERIAL_NAME);
        return BB || void 0
      }
      get points() {
        const BB = [];
        return wT.b.DeepCopy(this._points, BB), BB
      }
      setPoints(BB, IB) {
        this._points = WT.ConvertPoints(BB, IB?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), IB?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, IB)
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
        const IB = new sT.c;
        return IB.positions = this._vertexPositions, IB.indices = this._indices, IB.uvs = this._uvs, BB && (IB.normals = [], sT.c.ComputeNormals(this._vertexPositions, this._indices, IB.normals)), IB.applyToMesh(this, this._options.updatable), IB
      }
      _createOffsetsBuffer(BB) {
        const IB = this._scene.PN(),
          ZB = new LB.e(IB, BB, this._updatable, 3);
        this.setVerticesBuffer(ZB.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = ZB
      }
    }
    class jT {
      constructor(BB, IB) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = BB, this.wasAddedByNoopNode = IB
      }
      getIndicesAccessor(BB, IB, ZB, TB, JB) {
        return this._indicesAccessorMap.get(BB)?.get(IB)?.get(ZB)?.get(TB)?.get(JB)
      }
      setIndicesAccessor(BB, IB, ZB, TB, JB, oB) {
        let GB = this._indicesAccessorMap.get(BB);
        GB || (GB = new Map, this._indicesAccessorMap.set(BB, GB));
        let vB = GB.get(IB);
        vB || (vB = new Map, GB.set(IB, vB));
        let kB = vB.get(ZB);
        kB || (kB = new Map, vB.set(ZB, kB));
        let cB = kB.get(TB);
        cB || (cB = new Map, kB.set(TB, cB)), cB.set(JB, oB)
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
      setVertexBufferView(BB, IB) {
        this._vertexBufferViewMap.set(BB, IB)
      }
      setRemappedBufferView(BB, IB, ZB) {
        this._remappedBufferView.set(BB, new Map), this._remappedBufferView.get(BB).set(IB, ZB)
      }
      getRemappedBufferView(BB, IB) {
        return this._remappedBufferView.get(BB)?.get(IB)
      }
      getVertexAccessor(BB, IB, ZB) {
        return this._vertexAccessorMap.get(BB)?.get(IB)?.get(ZB)
      }
      setVertexAccessor(BB, IB, ZB, TB) {
        let JB = this._vertexAccessorMap.get(BB);
        JB || (JB = new Map, this._vertexAccessorMap.set(BB, JB));
        let oB = JB.get(IB);
        oB || (oB = new Map, JB.set(IB, oB)), oB.set(ZB, TB)
      }
      hasVertexColorAlpha(BB) {
        return this._vertexMapColorAlpha.get(BB) || !1
      }
      setHasVertexColorAlpha(BB, IB) {
        return this._vertexMapColorAlpha.set(BB, IB)
      }
      getMesh(BB) {
        return this._meshMap.get(BB)
      }
      setMesh(BB, IB) {
        this._meshMap.set(BB, IB)
      }
      bindMorphDataToMesh(BB, IB) {
        const ZB = this._meshMorphTargetMap.get(BB) || [];
        this._meshMorphTargetMap.set(BB, ZB), -1 === ZB.indexOf(IB) && ZB.push(IB)
      }
      getMorphTargetsFromMesh(BB) {
        return this._meshMorphTargetMap.get(BB)
      }
    }
    class PT {
      _ApplyExtension(BB, IB, ZB, TB) {
        if (ZB >= IB.length) return Promise.resolve(BB);
        const JB = TB(IB[ZB], BB);
        return JB ? JB.then((async BB => BB ? await this._ApplyExtension(BB, IB, ZB + 1, TB) : null)) : this._ApplyExtension(BB, IB, ZB + 1, TB)
      }
      _ApplyExtensions(BB, IB) {
        const ZB = [];
        for (const TB of PT._ExtensionNames) ZB.push(this._extensions[TB]);
        return this._ApplyExtension(BB, ZB, 0, IB)
      }
      _extensionsPostExportNodeAsync(BB, IB, ZB, TB, JB) {
        return this._ApplyExtensions(IB, ((IB, oB) => IB.postExportNodeAsync && IB.postExportNodeAsync(BB, oB, ZB, TB, JB, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(BB, IB, ZB) {
        return this._ApplyExtensions(IB, ((IB, TB) => IB.postExportMaterialAsync && IB.postExportMaterialAsync(BB, TB, ZB)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(BB, IB, ZB) {
        const TB = [];
        return await Promise.all(PT._ExtensionNames.map((async JB => {
          const oB = this._extensions[JB];
          if (oB.postExportMaterialAdditionalTexturesAsync) {
            const JB = await oB.postExportMaterialAdditionalTexturesAsync(BB, IB, ZB);
            TB.push(...JB)
          }
        }))), TB
      }
      _extensionsPostExportTextures(BB, IB, ZB) {
        for (const TB of PT._ExtensionNames) {
          const JB = this._extensions[TB];
          JB.postExportTexture && JB.postExportTexture(BB, IB, ZB)
        }
      }
      _extensionsPostExportMeshPrimitive(BB) {
        for (const IB of PT._ExtensionNames) {
          const ZB = this._extensions[IB];
          ZB.postExportMeshPrimitive && ZB.postExportMeshPrimitive(BB, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const BB of PT._ExtensionNames) {
          const IB = this._extensions[BB];
          IB.preGenerateBinaryAsync && await IB.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(BB) {
        for (const IB of PT._ExtensionNames) {
          const ZB = this._extensions[IB];
          ZB.enabled && BB(ZB)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((BB => {
          var IB, ZB, TB;
          BB.wasUsed && ((IB = this._glTF).extensionsUsed || (IB.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(BB.name) && this._glTF.extensionsUsed.push(BB.name), BB.required && ((ZB = this._glTF).extensionsRequired || (ZB.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(BB.name) && this._glTF.extensionsRequired.push(BB.name)), (TB = this._glTF).extensions || (TB.extensions = {}), BB.onExporting && BB.onExporting())
        }))
      }
      _loadExtensions() {
        for (const BB of PT._ExtensionNames) {
          const IB = PT._ExtensionFactories[BB](this);
          this._extensions[BB] = IB
        }
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gB.e.LastCreatedScene,
          IB = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${NB.e.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new aZ(this), this._extensions = {}, this._bufferManager = new ZT, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !BB) throw new Error("No scene available to export");
        this._babylonScene = BB, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: BB => BB?.uH?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...IB
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
      static RegisterExtension(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        PT.UnregisterExtension(BB) && JB.Tools.Warn(`Extension with the name ${BB} already exists`), PT._ExtensionFactories[BB] = IB;
        const TB = ZB ?? 0;
        PT._ExtensionOrders[BB] = TB;
        let oB = PT._ExtensionNames.length;
        for (let JB = 0; JB < PT._ExtensionNames.length; JB++) {
          const BB = PT._ExtensionNames[JB];
          if (TB < PT._ExtensionOrders[BB]) {
            oB = JB;
            break
          }
        }
        PT._ExtensionNames.splice(oB, 0, BB)
      }
      static UnregisterExtension(BB) {
        if (!PT._ExtensionFactories[BB]) return !1;
        delete PT._ExtensionFactories[BB], delete PT._ExtensionOrders[BB];
        const IB = PT._ExtensionNames.indexOf(BB);
        return -1 !== IB && PT._ExtensionNames.splice(IB, 1), !0
      }
      _generateJSON(BB, IB, ZB) {
        const TB = {
          byteLength: BB
        };
        return TB.byteLength && (this._glTF.buffers = [TB]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.lg = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (TB.uri = IB + ".bin"), ZB ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(BB) {
        const IB = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const ZB = this._generateJSON(IB.byteLength, BB, !0),
          TB = new Blob([IB], {
            type: "application/octet-stream"
          }),
          JB = BB + ".gltf",
          oB = BB + ".bin",
          GB = new cB;
        if (GB.files[JB] = ZB, GB.files[oB] = TB, this._imageData)
          for (const vB in this._imageData) GB.files[vB] = this._imageData[vB];
        return GB
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(BB) {
        const IB = BB % 4;
        return 0 === IB ? IB : 4 - IB
      }
      async generateGLBAsync(BB) {
        this._shouldUseGlb = !0;
        const IB = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const ZB = this._generateJSON(IB.byteLength),
          TB = BB + ".glb";
        let JB, oB = ZB.length;
        if ("undefined" !== typeof TextEncoder) {
          JB = (new TextEncoder).encode(ZB), oB = JB.length
        }
        const GB = this._getPadding(oB),
          vB = this._getPadding(IB.byteLength),
          kB = 28 + oB + GB + IB.byteLength + vB,
          nB = new BT(kB);
        if (nB.writeUInt32(1179937895), nB.writeUInt32(2), nB.writeUInt32(kB), nB.writeUInt32(oB + GB), nB.writeUInt32(1313821514), JB) nB.writeTypedArray(JB);
        else {
          const BB = "_".charCodeAt(0);
          for (let IB = 0; IB < oB; ++IB) {
            const TB = ZB.charCodeAt(IB);
            TB != ZB.codePointAt(IB) ? nB.writeUInt8(BB) : nB.writeUInt8(TB)
          }
        }
        for (let cB = 0; cB < GB; ++cB) nB.writeUInt8(32);
        nB.writeUInt32(IB.byteLength + vB), nB.writeUInt32(5130562), nB.writeTypedArray(IB);
        for (let cB = 0; cB < vB; ++cB) nB.writeUInt8(0);
        const hB = new cB;
        return hB.files[TB] = new Blob([nB.getOutputData()], {
          type: "application/octet-stream"
        }), hB
      }
      _setNodeTransformation(BB, IB, ZB) {
        if (IB.getPivotPoint().equalsWithEpsilon(rZ, jZ.d) || JB.Tools.Warn("Pivot points are not supported in the glTF serializer"), !IB.position.equalsWithEpsilon(rZ, jZ.d)) {
          const JB = TB.TmpVectors.rN[0].TY(IB.position);
          ZB && AZ(JB), BB.translation = JB.HTB()
        }
        IB.ek.equalsWithEpsilon(XZ, jZ.d) || (BB.scale = IB.ek.HTB());
        const oB = IB.rotationQuaternion?.clone() || TB.Quaternion.FromEulerAngles(IB.rotation.x, IB.rotation.y, IB.rotation.z);
        oB.equalsWithEpsilon(mZ, jZ.d) || (ZB && tZ(oB), BB.rotation = oB.normalize().HTB())
      }
      _setCameraTransformation(BB, IB, ZB) {
        const JB = TB.TmpVectors.rN[0],
          oB = TB.TmpVectors.Quaternion[0],
          GB = IB.getWorldMatrix();
        if (IB.parent) {
          const BB = IB.parent.getWorldMatrix().invertToRef(TB.TmpVectors.Matrix[0]);
          GB.multiplyToRef(BB, TB.TmpVectors.Matrix[1]).decompose(void 0, oB, JB)
        } else GB.decompose(void 0, oB, JB);
        JB.equalsWithEpsilon(rZ, jZ.d) || (ZB && AZ(JB), BB.translation = JB.HTB()), ZB && tZ(oB), this._babylonScene.useRightHandedSystem || bZ(oB), oB.equalsWithEpsilon(mZ, jZ.d) || (BB.rotation = oB.HTB())
      }
      _listAvailableCameras() {
        for (const BB of this._babylonScene.cameras) {
          const IB = {
            type: BB.mode === TT.c.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (BB.name && (IB.name = BB.name), "perspective" === IB.type) IB.perspective = {
            aspectRatio: BB.PN().getAspectRatio(BB),
            yfov: BB.fovMode === TT.c.FOVMODE_VERTICAL_FIXED ? BB.fov : BB.fov * BB.PN().getAspectRatio(BB),
            znear: BB.minZ,
            zfar: BB.maxZ
          };
          else if ("orthographic" === IB.type) {
            const ZB = BB.orthoLeft && BB.orthoRight ? .5 * (BB.orthoRight - BB.orthoLeft) : .5 * BB.PN().getRenderWidth(),
              TB = BB.orthoBottom && BB.orthoTop ? .5 * (BB.orthoTop - BB.orthoBottom) : .5 * BB.PN().getRenderHeight();
            IB.orthographic = {
              xmag: ZB,
              ymag: TB,
              znear: BB.minZ,
              zfar: BB.maxZ
            }
          }
          this._camerasMap.set(BB, IB)
        }
      }
      _exportAndAssignCameras() {
        const BB = Array.from(this._camerasMap.values());
        for (const IB of BB) {
          const BB = this._nodesCameraMap.get(IB);
          if (void 0 !== BB) {
            this._cameras.push(IB);
            for (const IB of BB) IB.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const BB of this._babylonScene.skeletons) {
          if (BB.bones.length <= 0) continue;
          const IB = {
            joints: []
          };
          this._skinMap.set(BB, IB)
        }
      }
      _exportAndAssignSkeletons(BB) {
        for (const ZB of this._babylonScene.skeletons) {
          if (ZB.bones.length <= 0) continue;
          const oB = this._skinMap.get(ZB);
          if (void 0 == oB) continue;
          const GB = {};
          let vB = -1;
          for (let BB = 0; BB < ZB.bones.length; ++BB) {
            const IB = ZB.bones[BB],
              TB = IB.getIndex() ?? BB; - 1 !== TB && (GB[TB] = IB, TB > vB && (vB = TB))
          }
          const kB = [];
          for (let ZB = 0; ZB <= vB; ++ZB) {
            const vB = GB[ZB],
              cB = vB.getTransformNode(),
              nB = cB ? this._nodeMap.get(cB) : void 0;
            if (void 0 === nB) {
              JB.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            oB.joints.push(nB);
            const hB = vB.getAbsoluteInverseBindMatrix().clone();
            BB.has(cB) && (IB = hB, PZ.invertToRef(TB.TmpVectors.Matrix[0]).multiplyToRef(IB, IB).multiplyToRef(PZ, IB)), kB.push(hB)
          }
          const cB = this._nodesSkinMap.get(oB);
          if (oB.joints.length > 0 && void 0 !== cB) {
            const BB = new Float32Array(16 * kB.length);
            kB.forEach(((IB, ZB) => {
              BB.set(IB.m, 16 * ZB)
            }));
            const IB = this._bufferManager.createBufferView(BB);
            this._accessors.push(this._bufferManager.createAccessor(IB, "MAT4", 5126, kB.length)), oB.inverseBindMatrices = this._accessors.length - 1, this._skins.push(oB);
            const ZB = this._skins.length - 1;
            for (const TB of cB) TB.skin = ZB
          }
        }
        var IB
      }
      async _exportSceneAsync() {
        const BB = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const IB = this._options.metadataSelector(this._babylonScene.metadata);
          IB && (BB.extras = IB)
        }
        const IB = new Array,
          ZB = new Array,
          TB = new Array,
          JB = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let oB;
        if (JB && !this._options.includeCoordinateSystemConversionNodes)
          for (const cB of this._babylonScene.animationGroups)
            for (const BB of cB.targetedAnimations) {
              const IB = BB.target;
              IB instanceof hB.c && !IB.parent && (oB ?? (oB = new Set)).add(IB)
            }
        for (const cB of this._babylonScene.rootNodes) {
          const BB = cB.animations,
            GB = !!BB && BB.length > 0 || oB?.has(cB);
          JB && !this._options.includeCoordinateSystemConversionNodes && RZ(cB, this._babylonScene.useRightHandedSystem) && !GB ? TB.push(...cB.getChildren()) : this._babylonScene.useRightHandedSystem ? IB.push(cB) : ZB.push(cB)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const GB = new jT(!0, !1);
        BB.nodes.push(...await this._exportNodesAsync(ZB, GB));
        const vB = new jT(!1, !1);
        BB.nodes.push(...await this._exportNodesAsync(IB, vB));
        const kB = new jT(!1, !0);
        BB.nodes.push(...await this._exportNodesAsync(TB, kB)), BB.nodes.length && this._scenes.push(BB), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(GB.getNodesSet()), this._babylonScene.animationGroups.length && hT._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, GB.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(BB) {
        return this._nodeMap.get(BB)
      }
      _getAnimationIndex(BB) {
        return this._animationGroupMap.get(BB)
      }
      _getCameraIndex(BB) {
        const IB = this._camerasMap.get(BB);
        if (!IB) return;
        const ZB = this._cameras.indexOf(IB);
        return ZB >= 0 ? ZB : void 0
      }
      _getMaterialIndex(BB) {
        return this._materialMap.get(BB)
      }
      _getRootIndex(BB, IB) {
        switch (BB) {
          case "nodes":
            return this._getNodeIndex(IB);
          case "animations":
            return this._getAnimationIndex(IB);
          case "cameras":
            return this._getCameraIndex(IB);
          case "materials":
            return this._getMaterialIndex(IB);
          case "meshes": {
            const BB = this._getNodeIndex(IB);
            return void 0 === BB ? void 0 : this._nodes[BB]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(IB)?.index;
          case "images": {
            const BB = this._materialExporter.getTextureInfo(IB)?.index;
            if (void 0 === BB) return;
            const ZB = this._textures[BB];
            for (const IB of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const BB = ZB?.extensions?.[IB]?.source;
              if ("number" === typeof BB) return BB
            }
            return ZB?.source
          }
          case "samplers": {
            const BB = this._materialExporter.getTextureInfo(IB)?.index;
            return void 0 === BB ? void 0 : this._textures[BB]?.sampler
          }
          case "skins": {
            const BB = this._skinMap.get(IB),
              ZB = BB ? this._skins.indexOf(BB) : -1;
            return ZB >= 0 ? ZB : void 0
          }
          case "scenes":
            return IB === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(BB, IB, ZB) {
        const TB = this._nodes[BB];
        if (!TB) throw new Error(`Cannot write ${IB}: glTF node ${BB} does not exist.`);
        TB.extensions || (TB.extensions = {}), TB.extensions[IB] = ZB
      }
      _shouldExportNode(BB) {
        let IB = this._shouldExportNodeMap.get(BB);
        return void 0 === IB && (IB = this._options.shouldExportNode(BB), this._shouldExportNodeMap.set(BB, IB)), IB
      }
      async _exportNodesAsync(BB, IB) {
        const ZB = new Array;
        this._exportBuffers(BB, IB);
        for (const TB of BB) await this._exportNodeAsync(TB, ZB, IB);
        return ZB
      }
      _collectBuffers(BB, IB, ZB, TB, JB) {
        if (this._shouldExportNode(BB) && BB instanceof zB.b && BB.geometry) {
          const oB = BB.geometry.getVertexBuffers();
          if (oB)
            for (const TB in oB) {
              if (!fZ(TB)) continue;
              const GB = oB[TB];
              JB.setHasVertexColorAlpha(GB, BB.hasVertexAlpha);
              const vB = GB._buffer,
                kB = IB.get(vB) || [];
              IB.set(vB, kB), -1 === kB.indexOf(GB) && kB.push(GB);
              const cB = ZB.get(GB) || [];
              ZB.set(GB, cB), -1 === cB.indexOf(BB) && cB.push(BB)
            }
          const GB = BB.morphTargetManager;
          if (GB)
            for (let IB = 0; IB < GB.numTargets; IB++) {
              const ZB = GB.getTarget(IB),
                JB = TB.get(ZB) || [];
              TB.set(ZB, JB), -1 === JB.indexOf(BB) && JB.push(BB)
            }
        }
        for (const oB of BB.getChildren()) this._collectBuffers(oB, IB, ZB, TB, JB)
      }
      _exportBuffers(BB, IB) {
        const ZB = new Map,
          TB = new Map,
          JB = new Map;
        for (const vB of BB) this._collectBuffers(vB, ZB, TB, JB, IB);
        const oB = Array.from(ZB.keys());
        for (const vB of oB) {
          const BB = vB.getData();
          if (!BB) throw new Error("Buffer data is not available");
          const JB = ZB.get(vB);
          if (!JB) continue;
          const oB = JB[0].byteStride;
          if (JB.some((BB => BB.byteStride !== oB))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const GB = DZ(BB).slice();
          for (const IB of JB) {
            const BB = TB.get(IB),
              {
                byteOffset: ZB,
                byteStride: JB,
                componentCount: oB,
                type: vB,
                count: kB,
                normalized: cB,
                kind: hB
              } = eZ(IB, BB);
            switch (hB) {
              case nB.e.NormalKind:
              case nB.e.TangentKind:
                (0, HZ.j)(GB, ZB, JB, oB, vB, kB, cB, (BB => {
                  const IB = Math.sqrt(BB[0] * BB[0] + BB[1] * BB[1] + BB[2] * BB[2]);
                  if (IB > 0) {
                    const ZB = 1 / IB;
                    BB[0] *= ZB, BB[1] *= ZB, BB[2] *= ZB
                  }
                }));
                break;
              case nB.e.ColorKind: {
                const IB = BB.filter((BB => BB.material instanceof oT.StandardMaterial || null == BB.material)).length;
                if (0 == IB) break;
                if (IB != BB.length) {
                  iB.d.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                vB == nB.e.UNSIGNED_BYTE && iB.d.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const TB = new qB.Color3,
                  hB = new qB.e,
                  zB = this._babylonScene.PN().useExactSrgbConversions;
                (0, HZ.j)(GB, ZB, JB, oB, vB, kB, cB, (BB => {
                  3 === BB.length ? (TB.WZB(BB, 0), TB.toLinearSpaceToRef(TB, zB), TB.toArray(BB, 0)) : (hB.WZB(BB, 0), hB.toLinearSpaceToRef(hB, zB), hB.toArray(BB, 0))
                }))
              }
            }
          }
          if (IB.convertToRightHanded) {
            for (const BB of JB) {
              const IB = TB.get(BB),
                {
                  byteOffset: ZB,
                  byteStride: JB,
                  componentCount: oB,
                  type: vB,
                  count: kB,
                  normalized: cB,
                  kind: hB
                } = eZ(BB, IB);
              switch (hB) {
                case nB.e.PositionKind:
                case nB.e.NormalKind:
                case nB.e.TangentKind:
                  (0, HZ.j)(GB, ZB, JB, oB, vB, kB, cB, (BB => {
                    BB[0] = -BB[0]
                  }))
              }
            }
            IB.convertedToRightHandedBuffers.set(vB, GB)
          }
          const kB = this._bufferManager.createBufferView(GB, oB);
          IB.setVertexBufferView(vB, kB);
          const cB = new Map;
          for (const IB of JB) {
            const BB = TB.get(IB),
              {
                kind: ZB,
                totalVertices: JB
              } = eZ(IB, BB);
            switch (ZB) {
              case nB.e.MatricesIndicesKind:
              case nB.e.MatricesIndicesExtraKind:
                if (IB.type == nB.e.FLOAT) {
                  const BB = IB.getFloatData(JB);
                  null !== BB && cB.set(IB, BB)
                }
            }
          }
          0 !== cB.size && iB.d.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const hB = Array.from(cB.keys());
          for (const ZB of hB) {
            const BB = cB.get(ZB);
            if (!BB) continue;
            const TB = BB.some((BB => BB >= 256)),
              JB = new(TB ? Uint16Array : Uint8Array)(BB.length);
            for (let IB = 0; IB < BB.length; IB++) JB[IB] = BB[IB];
            const oB = this._bufferManager.createBufferView(JB, 4 * (TB ? 2 : 1));
            IB.setRemappedBufferView(vB, ZB, oB)
          }
        }
        const GB = Array.from(JB.keys());
        for (const vB of GB) {
          const BB = JB.get(vB);
          if (!BB) continue;
          const ZB = zT(vB, BB[0], this._bufferManager, this._bufferViews, this._accessors, IB.convertToRightHanded);
          for (const TB of BB) IB.bindMorphDataToMesh(TB, ZB)
        }
      }
      async _exportNodeAsync(BB, IB, ZB) {
        let TB = this._nodeMap.get(BB);
        if (void 0 !== TB) return void(IB.includes(TB) || IB.push(TB));
        const JB = await this._createNodeAsync(BB, ZB);
        if (JB) {
          TB = this._nodes.length, this._nodes.push(JB), this._nodeMap.set(BB, TB), ZB.pushExportedNode(BB), IB.push(TB);
          const oB = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            GB = [];
          this._babylonScene.animationGroups.length || (hT._CreateMorphTargetAnimationFromMorphTargetAnimations(BB, oB, GB, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, ZB.convertToRightHanded, this._options.shouldExportAnimation), BB.animations.length && hT._CreateNodeAnimationFromNodeAnimations(BB, oB, GB, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, ZB.convertToRightHanded, this._options.shouldExportAnimation)), oB.channels.length && oB.samplers.length && this._animations.push(oB), GB.forEach((BB => {
            BB.channels.length && BB.samplers.length && this._animations.push(BB)
          }))
        }
        const oB = JB ? [] : IB;
        for (const GB of BB.getChildren()) await this._exportNodeAsync(GB, oB, ZB);
        JB && oB.length && (JB.children = oB)
      }
      async _createNodeAsync(BB, IB) {
        if (!this._shouldExportNode(BB)) return null;
        const ZB = {};
        if (BB.name && (ZB.name = BB.name), BB.metadata) {
          const IB = this._options.metadataSelector(BB.metadata);
          IB && (ZB.extras = IB)
        }
        if (BB instanceof hB.c && (this._setNodeTransformation(ZB, BB, IB.convertToRightHanded), BB instanceof zB.b)) {
          const TB = BB instanceof FB.e ? BB.wJB : BB;
          if (TB.EW && TB.EW.length > 0 && (ZB.mesh = await this._exportMeshAsync(TB, IB)), BB.skeleton) {
            const IB = this._skinMap.get(BB.skeleton);
            void 0 !== IB && (void 0 === this._nodesSkinMap.get(IB) && this._nodesSkinMap.set(IB, []), this._nodesSkinMap.get(IB)?.push(ZB))
          }
        }
        if (BB instanceof MZ.d) {
          const TB = this._camerasMap.get(BB);
          if (TB) {
            void 0 === this._nodesCameraMap.get(TB) && this._nodesCameraMap.set(TB, []), this._setCameraTransformation(ZB, BB, IB.convertToRightHanded);
            const JB = BB.parent;
            if (null !== JB && EZ(BB, JB)) {
              const BB = this._nodeMap.get(JB);
              if (void 0 !== BB) {
                const IB = this._nodes[BB];
                return xZ(ZB, IB), this._nodesCameraMap.get(TB)?.push(IB), null
              }
            }
            this._nodesCameraMap.get(TB)?.push(ZB)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", ZB, BB, this._nodeMap, IB.convertToRightHanded) ? ZB : (iB.d.Warn(`Not exporting node ${BB.name}`), null)
      }
      _exportIndices(BB, IB, ZB, TB, JB, GB, vB, kB, cB) {
        let nB = null;
        cB.mode = function(BB) {
          switch (BB) {
            case oB.e.TriangleFillMode:
              return 4;
            case oB.e.TriangleStripDrawMode:
              return 5;
            case oB.e.TriangleFanDrawMode:
              return 6;
            case oB.e.PointListDrawMode:
            case oB.e.PointFillMode:
              return 0;
            case oB.e.LineLoopDrawMode:
              return 2;
            case oB.e.LineListDrawMode:
              return 1;
            case oB.e.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${BB}`)
        }(GB);
        const hB = vB !== oB.e.CounterClockWiseSideOrientation && function(BB) {
          switch (BB) {
            case oB.e.TriangleFillMode:
            case oB.e.TriangleStripDrawMode:
            case oB.e.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(GB);
        if (hB) {
          if (GB === oB.e.TriangleStripDrawMode || GB === oB.e.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const vB = IB ? new Uint32Array(TB) : new Uint16Array(TB);
          if (BB)
            for (let IB = 0; IB + 2 < TB; IB += 3) vB[IB] = BB[ZB + IB] + JB, vB[IB + 1] = BB[ZB + IB + 2] + JB, vB[IB + 2] = BB[ZB + IB + 1] + JB;
          else
            for (let BB = 0; BB + 2 < TB; BB += 3) vB[BB] = BB, vB[BB + 1] = BB + 2, vB[BB + 2] = BB + 1;
          nB = vB
        } else if (BB && 0 !== JB) {
          const oB = IB ? new Uint32Array(TB) : new Uint16Array(TB);
          for (let IB = 0; IB < TB; IB++) oB[IB] = BB[ZB + IB] + JB;
          nB = oB
        } else BB && (nB = function(BB, IB, ZB, TB) {
          let JB = BB;
          return 0 === IB && ZB === BB.length || (JB = Array.isArray(BB) ? BB.slice(IB, IB + ZB) : BB.subarray(IB, IB + ZB)), JB instanceof Int32Array ? new Uint32Array(JB.buffer, JB.byteOffset, JB.length) : Array.isArray(JB) ? TB ? new Uint32Array(JB) : new Uint16Array(JB) : JB
        }(BB, ZB, TB, IB));
        if (nB) {
          let oB = kB.getIndicesAccessor(BB, ZB, TB, JB, hB);
          if (void 0 === oB) {
            const GB = this._bufferManager.createBufferView(nB),
              vB = IB ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(GB, "SCALAR", vB, TB, 0)), oB = this._accessors.length - 1, kB.setIndicesAccessor(BB, ZB, TB, JB, hB, oB)
          }
          cB.indices = oB
        }
      }
      _exportVertexBuffer(BB, IB, ZB, TB, JB, oB) {
        const GB = BB.getKind();
        if (!fZ(GB)) return;
        if (GB.startsWith("uv") && !this._options.exportUnusedUVs && (!IB || !this._materialNeedsUVsSet.has(IB))) return;
        let vB = JB.getVertexAccessor(BB, ZB, TB);
        if (void 0 === vB) {
          const IB = JB.convertedToRightHandedBuffers.get(BB._buffer) || BB._buffer.getData(),
            oB = GB === nB.e.PositionKind ? function(BB, IB, ZB, TB) {
              const {
                byteOffset: JB,
                byteStride: oB,
                type: GB,
                normalized: vB
              } = IB, kB = IB.getSize(), cB = new Array(kB).fill(1 / 0), nB = new Array(kB).fill(-1 / 0);
              return (0, HZ.j)(BB, JB + ZB * oB, oB, kB, GB, TB * kB, vB, (BB => {
                for (let IB = 0; IB < kB; IB++) cB[IB] = Math.min(cB[IB], BB[IB]), nB[IB] = Math.max(nB[IB], BB[IB])
              })), {
                min: cB,
                max: nB
              }
            }(IB, BB, ZB, TB) : void 0,
            kB = (GB === nB.e.MatricesIndicesKind || GB === nB.e.MatricesIndicesExtraKind) && BB.type === nB.e.FLOAT,
            cB = kB ? nB.e.UNSIGNED_BYTE : BB.type,
            hB = kB ? void 0 : BB.normalized,
            zB = kB ? JB.getRemappedBufferView(BB._buffer, BB) : JB.getVertexBufferView(BB._buffer),
            FB = BB.byteOffset + ZB * BB.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(zB, function(BB, IB) {
            if (BB == nB.e.ColorKind) return IB ? "VEC4" : "VEC3";
            switch (BB) {
              case nB.e.PositionKind:
              case nB.e.NormalKind:
                return "VEC3";
              case nB.e.TangentKind:
              case nB.e.MatricesIndicesKind:
              case nB.e.MatricesIndicesExtraKind:
              case nB.e.MatricesWeightsKind:
              case nB.e.MatricesWeightsExtraKind:
                return "VEC4";
              case nB.e.UVKind:
              case nB.e.UV2Kind:
              case nB.e.UV3Kind:
              case nB.e.UV4Kind:
              case nB.e.UV5Kind:
              case nB.e.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${BB}`)
          }(GB, JB.hasVertexColorAlpha(BB)), cB, TB, FB, oB, hB)), vB = this._accessors.length - 1, JB.setVertexAccessor(BB, ZB, TB, vB)
        }
        oB.attributes[function(BB) {
          switch (BB) {
            case nB.e.PositionKind:
              return "POSITION";
            case nB.e.NormalKind:
              return "NORMAL";
            case nB.e.TangentKind:
              return "TANGENT";
            case nB.e.ColorKind:
              return "COLOR_0";
            case nB.e.UVKind:
              return "TEXCOORD_0";
            case nB.e.UV2Kind:
              return "TEXCOORD_1";
            case nB.e.UV3Kind:
              return "TEXCOORD_2";
            case nB.e.UV4Kind:
              return "TEXCOORD_3";
            case nB.e.UV5Kind:
              return "TEXCOORD_4";
            case nB.e.UV6Kind:
              return "TEXCOORD_5";
            case nB.e.MatricesIndicesKind:
              return "JOINTS_0";
            case nB.e.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case nB.e.MatricesWeightsKind:
              return "WEIGHTS_0";
            case nB.e.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${BB}`)
        }(GB)] = vB
      }
      async _exportMaterialAsync(BB, IB, ZB, TB) {
        let JB = this._materialMap.get(BB);
        if (void 0 === JB) {
          const TB = IB && Object.keys(IB).some((BB => BB.startsWith("uv")));
          if ((BB = BB instanceof JT.c ? BB.JBB[ZB.materialIndex] : BB) instanceof QI) JB = await this._materialExporter.exportPBRMaterialAsync(BB, TB);
          else if (BB instanceof oT.StandardMaterial) JB = await this._materialExporter.exportStandardMaterialAsync(BB, TB);
          else {
            if (!(BB instanceof VI)) return void iB.d.Warn(`Unsupported material '${BB.name}' with type ${BB.getClassName()}`);
            JB = await this._materialExporter.exportOpenPBRMaterialAsync(BB, TB)
          }
          this._materialMap.set(BB, JB)
        }
        TB.material = JB
      }
      async _exportMeshAsync(BB, IB) {
        let ZB = IB.getMesh(BB);
        if (void 0 !== ZB) return ZB;
        const TB = {
          primitives: []
        };
        ZB = this._meshes.length, this._meshes.push(TB), IB.setMesh(BB, ZB);
        const JB = BB.isUnIndexed ? null : BB.MTB(),
          GB = BB.geometry?.getVertexBuffers(),
          vB = IB.getMorphTargetsFromMesh(BB),
          kB = BB instanceof FT.c,
          cB = BB instanceof MT,
          nB = BB.EW;
        if (GB && nB && nB.length > 0)
          for (const hB of nB) {
            const ZB = {
                attributes: {}
              },
              nB = hB.LN() || this._babylonScene.defaultMaterial;
            if (cB) {
              const IB = {
                  name: nB.name
                },
                TB = BB,
                JB = qB.Color3.White(),
                oB = TB.material?.alpha ?? 1,
                GB = TB.greasedLineMaterial?.color ?? JB;
              (!GB.equalsWithEpsilon(JB, jZ.d) || oB < 1) && (IB.pbrMetallicRoughness = {
                baseColorFactor: [...GB.HTB(), oB]
              }), this._materials.push(IB), ZB.material = this._materials.length - 1
            } else if (kB) {
              const IB = {
                  name: nB.name
                },
                TB = BB;
              (!TB.color.equalsWithEpsilon(qB.Color3.White(), jZ.d) || TB.alpha < 1) && (IB.pbrMetallicRoughness = {
                baseColorFactor: [...TB.color.HTB(), TB.alpha]
              }), this._materials.push(IB), ZB.material = this._materials.length - 1
            } else await this._exportMaterialAsync(nB, GB, hB, ZB);
            const zB = kB || cB ? oB.e.LineListDrawMode : BB.overrideRenderingFillMode ?? nB.fillMode;
            let FB = nB._getEffectiveOrientation(BB);
            IB.wasAddedByNoopNode && !BB.JR().useRightHandedSystem && (FB = FB === oB.e.ClockWiseSideOrientation ? oB.e.CounterClockWiseSideOrientation : oB.e.ClockWiseSideOrientation), this._exportIndices(JB, JB ? (0, HZ.e)(JB, hB.indexCount, hB.indexStart, hB.verticesStart) : hB.verticesCount > 65535, JB ? hB.indexStart : hB.verticesStart, JB ? hB.indexCount : hB.verticesCount, -hB.verticesStart, zB, FB, IB, ZB);
            for (const BB of Object.values(GB)) this._exportVertexBuffer(BB, nB, hB.verticesStart, hB.verticesCount, IB, ZB);
            if (vB) {
              ZB.targets = [];
              for (const BB of vB) ZB.targets.push(BB.attributes)
            }
            TB.primitives.push(ZB), this._extensionsPostExportMeshPrimitive(ZB)
          }
        if (vB) {
          TB.weights = [], TB.extras || (TB.extras = {}), TB.extras.targetNames = [];
          for (const BB of vB) TB.weights.push(BB.influence), TB.extras.targetNames.push(BB.name)
        }
        return ZB
      }
    }
    PT._ExtensionNames = new Array, PT._ExtensionFactories = {}, PT._ExtensionOrders = {};
    class RT {
      static async GLTFAsync(BB, IB, ZB) {
        ZB && ZB.exportWithoutWaitingForScene || await BB.whenReadyAsync();
        const TB = new PT(BB, ZB),
          JB = await TB.generateGLTFAsync(IB.replace(/\.[^/.]+$/, ""));
        return TB.dispose(), JB
      }
      static async GLBAsync(BB, IB, ZB) {
        ZB && ZB.exportWithoutWaitingForScene || await BB.whenReadyAsync();
        const TB = new PT(BB, ZB),
          JB = await TB.generateGLBAsync(IB.replace(/\.[^/.]+$/, ""));
        return TB.dispose(), JB
      }
    }
    const rT = "EXT_mesh_gpu_instancing";

    function mT(BB, IB) {
      const ZB = new Float32Array(3 * IB);
      for (let TB = 0; TB < IB; TB++) ZB[3 * TB + 0] = BB[4 * TB + 0], ZB[3 * TB + 1] = BB[4 * TB + 1], ZB[3 * TB + 2] = BB[4 * TB + 2];
      return ZB
    }
    class XT {
      constructor(BB) {
        this.name = rT, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(BB, IB, ZB, TB, JB, oB) {
        return await new Promise((BB => {
          if (IB && ZB instanceof QT.c && ZB.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const BB = XB.s.Zero(),
              TB = XB.f.Identity(),
              GB = XB.s.One(),
              vB = ZB.thinInstanceGetWorldMatrices(),
              kB = XB.m.rN[2],
              cB = XB.m.Quaternion[1],
              nB = XB.m.rN[3];
            let hB = !1,
              zB = !1,
              FB = !1;
            const NB = new Float32Array(3 * ZB.B3),
              gB = new Float32Array(4 * ZB.B3),
              qB = new Float32Array(3 * ZB.B3);
            let yB = 0;
            for (const IB of vB) IB.decompose(nB, cB, kB), JB && (AZ(kB), tZ(cB)), NB.set(kB.HTB(), 3 * yB), gB.set(cB.normalize().HTB(), 4 * yB), qB.set(nB.HTB(), 3 * yB), hB = hB || !kB.equalsWithEpsilon(BB), zB = zB || !cB.equalsWithEpsilon(TB), FB = FB || !nB.equalsWithEpsilon(GB), yB++;
            const UB = {
              attributes: {}
            };
            hB && (UB.attributes.TRANSLATION = this._buildAccessor(NB, "VEC3", ZB.B3, oB)), zB && (UB.attributes.ROTATION = this._buildAccessor(gB, "VEC4", ZB.B3, oB)), FB && (UB.attributes.SCALE = this._buildAccessor(qB, "VEC3", ZB.B3, oB));
            let WB = ZB._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (WB) {
              const BB = ZB.B3,
                IB = "VEC3";
              ZB.hasVertexAlpha && WB.length === 4 * BB ? (this._instanceColorWarned || (iB.d.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), WB = mT(WB, BB)) : WB.length === 4 * BB && (WB = mT(WB, BB)), WB.length === 3 * BB && (UB.attributes._COLOR_0 = this._buildAccessor(WB, IB, BB, oB))
            }
            IB.extensions = IB.extensions || {}, IB.extensions[rT] = UB
          }
          BB(IB)
        }))
      }
      _buildAccessor(BB, IB, ZB, TB) {
        const JB = TB.createBufferView(BB),
          oB = TB.createAccessor(JB, IB, 5126, ZB);
        return this._exporter._accessors.push(oB), this._exporter._accessors.length - 1
      }
    }
    let LT = !1;

    function eT() {
      LT || (LT = !0, PT.RegisterExtension(rT, (BB => new XT(BB))))
    }
    ZB(40528);
    eT();
    var uT = ZB(41881);

    function fT(BB, IB, ZB, TB) {
      const JB = BB;
      let oB = null,
        GB = null,
        vB = null,
        kB = null;
      const cB = {},
        nB = IB.find((BB => "POSITION" === BB.dracoName));
      if (!nB) throw new Error("Draco: Missing position attribute for encoding.");
      if (!ZB) {
        const BB = nB.data.length / nB.size;
        ZB = new(BB > 65535 ? Uint32Array : Uint16Array)(BB);
        for (let IB = 0; IB < BB; IB++) ZB[IB] = IB
      }
      try {
        oB = new JB.Encoder, GB = new JB.MeshBuilder, vB = new JB.Mesh, GB.AddFacesToMesh(vB, ZB.length / 3, ZB);
        const BB = new Map([
          [Float32Array, (BB, IB, ZB, TB, JB, oB) => BB.AddFloatAttribute(IB, ZB, TB, JB, oB)],
          [Uint32Array, (BB, IB, ZB, TB, JB, oB) => BB.AddUInt32Attribute(IB, ZB, TB, JB, oB)],
          [Uint16Array, (BB, IB, ZB, TB, JB, oB) => BB.AddUInt16Attribute(IB, ZB, TB, JB, oB)],
          [Uint8Array, (BB, IB, ZB, TB, JB, oB) => BB.AddUInt8Attribute(IB, ZB, TB, JB, oB)],
          [Int32Array, (BB, IB, ZB, TB, JB, oB) => BB.AddInt32Attribute(IB, ZB, TB, JB, oB)],
          [Int16Array, (BB, IB, ZB, TB, JB, oB) => BB.AddInt16Attribute(IB, ZB, TB, JB, oB)],
          [Int8Array, (BB, IB, ZB, TB, JB, oB) => BB.AddInt8Attribute(IB, ZB, TB, JB, oB)]
        ]);
        for (const ZB of IB) {
          ZB.data instanceof Uint8ClampedArray && (ZB.data = new Uint8Array(ZB.data));
          const IB = BB.get(ZB.data.constructor),
            kB = ZB.data.length / ZB.size;
          cB[ZB.kind] = IB(GB, vB, JB[ZB.dracoName], kB, ZB.size, ZB.data), TB.quantizationBits && TB.quantizationBits[ZB.dracoName] && oB.SetAttributeQuantization(JB[ZB.dracoName], TB.quantizationBits[ZB.dracoName])
        }
        TB.method && oB.SetEncodingMethod(JB[TB.method]), void 0 !== TB.encodeSpeed && void 0 !== TB.decodeSpeed && oB.SetSpeedOptions(TB.encodeSpeed, TB.decodeSpeed), kB = new JB.DracoInt8Array;
        const nB = oB.EncodeMeshToDracoBuffer(vB, kB);
        if (nB <= 0) throw new Error("Draco: Failed to encode.");
        const hB = new Int8Array(nB);
        for (let IB = 0; IB < nB; IB++) hB[IB] = kB.GetValue(IB);
        return {
          data: hB,
          attributeIds: cB
        }
      } finally {
        vB && JB.destroy(vB), GB && JB.destroy(GB), oB && JB.destroy(oB), kB && JB.destroy(kB)
      }
    }

    function lT() {
      let BB;
      onmessage = IB => {
        const ZB = IB.data;
        switch (ZB.id) {
          case "init": {
            ZB.url && importScripts(ZB.url);
            const IB = ZB.wasmBinary ? {
              wasmBinary: ZB.wasmBinary
            } : {};
            BB = DracoEncoderModule(IB), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!BB) throw new Error("Draco: Encoder module is not available.");
            BB.then((BB => {
              const IB = fT(BB, ZB.attributes, ZB.indices, ZB.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: IB
              }, IB ? [IB.data.buffer] : void 0)
            })).catch((BB => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: BB.message
              })
            }))
        }
      }
    }
    class AT {
      constructor(BB) {
        if (BB.workerPool) return void(this._workerPoolPromise = Promise.resolve(BB.workerPool));
        const IB = BB.wasmBinary,
          ZB = BB.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          TB = ZB && "function" === typeof Worker && "function" === typeof URL,
          JB = TB || !BB.jsModule,
          oB = BB.wasmUrl && BB.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: JB ? wI.j.GetBabylonScriptURL(BB.wasmUrl, !0) : "",
            wasmBinaryPromise: IB ? Promise.resolve(IB) : wI.j.LoadFileAsync(wI.j.GetBabylonScriptURL(BB.wasmBinaryUrl, !0))
          } : {
            url: JB ? wI.j.GetBabylonScriptURL(BB.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        TB ? this._workerPoolPromise = oB.wasmBinaryPromise.then((BB => {
          const IB = this._getWorkerContent(),
            TB = URL.createObjectURL(new Blob([IB], {
              type: "application/javascript"
            }));
          return new uT.b(ZB, (() => async function(BB, IB, ZB) {
            return await new Promise(((TB, JB) => {
              const oB = IB => {
                  BB.removeEventListener("error", oB), BB.removeEventListener("message", GB), JB(IB)
                },
                GB = IB => {
                  "initDone" === IB.data.id && (BB.removeEventListener("error", oB), BB.removeEventListener("message", GB), TB(BB))
                };
              if (BB.addEventListener("error", oB), BB.addEventListener("message", GB), IB) {
                const TB = IB.slice(0);
                BB.postMessage({
                  id: "init",
                  url: ZB,
                  wasmBinary: TB
                }, [TB])
              } else BB.postMessage({
                id: "init",
                url: ZB
              })
            }))
          }(new Worker(TB), BB, oB.url)))
        })) : this._modulePromise = oB.wasmBinaryPromise.then((async IB => {
          if (!this._isModuleAvailable() && !BB.jsModule) {
            if (!oB.url) throw new Error("Draco codec module is not available");
            await wI.j.LoadBabylonScriptAsync(oB.url)
          }
          return await this._createModuleAsync(IB, BB.jsModule)
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

    function tT() {
      const BB = BB => !!BB && "object" === typeof BB;
      for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
      return ZB.reduce(((IB, ZB) => {
        const TB = Object.keys(ZB);
        for (const JB of TB) {
          const TB = IB[JB],
            oB = ZB[JB];
          Array.isArray(TB) && Array.isArray(oB) ? IB[JB] = TB.concat(oB) : BB(TB) && BB(oB) ? IB[JB] = tT(TB, oB) : IB[JB] = oB
        }
        return IB
      }), {})
    }

    function bT(BB) {
      return BB === LB.i.PositionKind ? "POSITION" : BB === LB.i.NormalKind ? "NORMAL" : BB === LB.i.ColorKind ? "COLOR" : BB.startsWith(LB.i.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const xT = {
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
    class ET extends AT {
      static get DefaultAvailable() {
        return !!((BB = ET.DefaultConfiguration).wasmUrl && (BB.wasmBinary || BB.wasmBinaryUrl) && "object" === typeof WebAssembly || BB.fallbackUrl);
        var BB
      }
      static get Default() {
        return ET._Default ?? (ET._Default = new ET), ET._Default
      }
      static ResetDefault(BB) {
        ET._Default && (BB || ET._Default.dispose(), ET._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(BB, IB) {
        return {
          module: await (IB || DracoEncoderModule)({
            wasmBinary: BB
          })
        }
      }
      _getWorkerContent() {
        return `${fT}(${lT})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ET.DefaultConfiguration)
      }
      async _encodeAsync(BB, IB, ZB) {
        const TB = ZB ? tT(xT, ZB) : xT;
        if (this._workerPoolPromise) {
          const ZB = await this._workerPoolPromise;
          return await new Promise(((JB, oB) => {
            ZB.push(((ZB, GB) => {
              const vB = BB => {
                  ZB.removeEventListener("error", vB), ZB.removeEventListener("message", kB), oB(BB), GB()
                },
                kB = BB => {
                  "encodeMeshSuccess" === BB.data.id ? (ZB.removeEventListener("error", vB), ZB.removeEventListener("message", kB), JB(BB.data.encodedMeshData), GB()) : "encodeMeshError" === BB.data.id && (ZB.removeEventListener("error", vB), ZB.removeEventListener("message", kB), oB(new Error(BB.data.errorMessage)), GB())
                };
              ZB.addEventListener("error", vB), ZB.addEventListener("message", kB);
              const cB = [];
              for (const IB of BB) cB.push(IB.data.buffer);
              IB && cB.push(IB.buffer), ZB.postMessage({
                id: "encodeMesh",
                attributes: BB,
                indices: IB,
                options: TB
              }, cB)
            }))
          }))
        }
        if (this._modulePromise) {
          return fT((await this._modulePromise).module, BB, IB, TB)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(BB, IB) {
        if (0 == BB.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        BB instanceof QT.c && BB.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === IB?.method && (iB.d.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), IB.method = "MESH_SEQUENTIAL_ENCODING");
        const ZB = function(BB) {
            let IB = BB.MTB(void 0, !0);
            return !IB || IB instanceof Uint32Array || IB instanceof Uint16Array || (IB = ((0, HZ.e)(IB, IB.length) ? Uint32Array : Uint16Array).from(IB)), IB
          }(BB),
          TB = function(BB, IB) {
            const ZB = [];
            for (const TB of BB.getVerticesDataKinds()) {
              if (IB?.includes(TB)) {
                if (TB === LB.i.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const JB = BB.getVertexBuffer(TB),
                oB = JB.getSize(),
                GB = (0, HZ.s)(JB.getData(), oB, JB.type, JB.byteOffset, JB.byteStride, BB.getTotalVertices(), !0);
              ZB.push({
                kind: TB,
                dracoName: bT(TB),
                size: oB,
                data: GB
              })
            }
            return ZB
          }(BB, IB?.excludedAttributes);
        return await this._encodeAsync(TB, ZB, IB)
      }
    }
    ET.DefaultConfiguration = {
      wasmUrl: `${wI.j._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${wI.j._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${wI.j._DefaultCdnUrl}/draco_encoder.js`
    }, ET._Default = null;
    const DT = "KHR_draco_mesh_compression";
    class KT {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(BB) {
        this.name = DT, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === BB.options.meshCompressionMethod && ET.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(BB, IB, ZB) {
        if (!this.enabled) return;
        if (4 !== BB.mode && 5 !== BB.mode) return void iB.d.Warn("Cannot compress primitive with mode " + BB.mode + ".");
        const TB = [],
          JB = [];
        let oB = null;
        if (void 0 !== BB.indices) {
          const GB = ZB[BB.indices],
            vB = IB.getBufferView(GB);
          oB = IB.getData(vB).slice(), TB.push(vB), JB.push(GB)
        }
        const GB = [];
        for (const [nB, hB] of Object.entries(BB.attributes)) {
          const BB = ZB[hB],
            oB = IB.getBufferView(BB),
            kB = uZ(BB.type),
            cB = (0, HZ.s)(IB.getData(oB), kB, BB.componentType, BB.byteOffset || 0, oB.byteStride || (0, HZ.q)(BB.componentType) * kB, BB.count, !0);
          GB.push({
            kind: nB,
            dracoName: (vB = nB, "POSITION" === vB ? "POSITION" : "NORMAL" === vB ? "NORMAL" : vB.startsWith("COLOR") ? "COLOR" : vB.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: uZ(BB.type),
            data: cB
          }), TB.push(oB), JB.push(BB)
        }
        var vB;
        const kB = {
            method: BB.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          cB = ET.Default._encodeAsync(GB, oB, kB).then((ZB => {
            const oB = {
                bufferView: -1,
                attributes: ZB.attributeIds
              },
              GB = IB.createBufferView(ZB.data);
            IB.setBufferView(oB, GB);
            for (const BB of TB) this._bufferViewsUsed.add(BB);
            for (const BB of JB) this._accessorsUsed.add(BB);
            BB.extensions || (BB.extensions = {}), BB.extensions[DT] = oB
          })).catch((BB => {
            iB.d.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + BB.message)
          }));
        this._encodePromises.push(cB), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(BB) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((IB => {
          BB.getPropertiesWithBufferView(IB).every((BB => this._accessorsUsed.has(BB))) && BB.removeBufferView(IB)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let VT = !1;

    function ST() {
      VT || (VT = !0, PT.RegisterExtension(DT, (BB => new KT(BB))))
    }
    ST();
    var BJ = ZB(41597);
    const IJ = "KHR_lights_punctual",
      ZJ = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      TJ = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      JJ = XB.s.Backward();
    class oJ {
      constructor(BB) {
        this.name = IJ, this.enabled = !0, this.required = !1, this._exporter = BB
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[IJ] = this._lights
      }
      async postExportNodeAsync(BB, IB, ZB, TB, JB) {
        return await new Promise((oB => {
          if (!(ZB instanceof nT.b)) return void oB(IB);
          const GB = ZB.getTypeID() == nT.b.LIGHTTYPEID_POINTLIGHT ? "point" : ZB.getTypeID() == nT.b.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : ZB.getTypeID() == nT.b.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!GB || !(ZB instanceof BJ.d)) return iB.d.Warn(`${BB}: Light ${ZB.name} is not supported in ${IJ}`), void oB(IB);
          if (ZB.falloffType !== nT.b.FALLOFF_GLTF && iB.d.Warn(`${BB}: Light falloff for ${ZB.name} does not match the ${IJ} specification!`), !ZB.position.kvB(0, 0, 0)) {
            const BB = XB.m.rN[0].TY(ZB.position);
            JB && AZ(BB), IB.translation = BB.HTB()
          }
          if ("point" !== GB) {
            const BB = ZB.direction.normalizeToRef(XB.m.rN[0]);
            JB && AZ(BB);
            const TB = XB.f.FromUnitVectorsToRef(JJ, BB, XB.m.Quaternion[0]);
            XB.f.IsIdentity(TB) || (IB.rotation = TB.HTB())
          }
          const vB = {
            type: GB,
            name: ZB.name,
            color: ZB.diffuse.HTB(),
            intensity: ZB.intensity,
            range: ZB.range
          };
          if (KZ(vB, ZJ), "spot" === GB) {
            const BB = ZB;
            vB.spot = {
              innerConeAngle: BB.innerAngle / 2,
              outerConeAngle: BB.angle / 2
            }, KZ(vB.spot, TJ)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(vB);
          const kB = {
              light: this._lights.lights.length - 1
            },
            cB = ZB.parent;
          if (cB && EZ(ZB, cB)) {
            const BB = TB.get(cB);
            if (BB) {
              const ZB = this._exporter._nodes[BB];
              return xZ(IB, ZB), ZB.extensions || (ZB.extensions = {}), ZB.extensions[IJ] = kB, void oB(null)
            }
          }
          IB.extensions || (IB.extensions = {}), IB.extensions[IJ] = kB, oB(IB)
        }))
      }
    }
    let GJ = !1;

    function vJ() {
      GJ || (GJ = !0, PT.RegisterExtension(IJ, (BB => new oJ(BB))))
    }
    vJ();
    const kJ = "KHR_interactivity";
    class cJ {
      constructor(BB) {
        this._exporter = BB, this.name = kJ, this.enabled = !!BB.options.khrInteractivity, this.required = BB.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var BB, IB, ZB;
        const TB = this._exporter.options.khrInteractivity;
        if (!TB) return;
        const JB = TB.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: BB => this._exporter._getNodeIndex(BB),
          getAnimationIndex: BB => this._exporter._getAnimationIndex(BB),
          getCameraIndex: BB => this._exporter._getCameraIndex(BB),
          getMaterialIndex: BB => this._exporter._getMaterialIndex(BB),
          getRootIndex: (BB, IB) => this._exporter._getRootIndex(BB, IB),
          setNodeExtension: (BB, IB, ZB) => this._exporter._setNodeExtension(BB, IB, ZB)
        });
        this._exporter._glTF.extensions[kJ] = JB;
        for (const oB of TB.additionalExtensionsUsed)(BB = this._exporter._glTF).extensionsUsed || (BB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(oB) && this._exporter._glTF.extensionsUsed.push(oB);
        for (const oB of TB.additionalExtensionsRequired)(IB = this._exporter._glTF).extensionsUsed || (IB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(oB) && this._exporter._glTF.extensionsUsed.push(oB), (ZB = this._exporter._glTF).extensionsRequired || (ZB.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(oB) && this._exporter._glTF.extensionsRequired.push(oB)
      }
    }
    let nJ = !1;

    function hJ() {
      nJ || (nJ = !0, PT.RegisterExtension(kJ, (BB => new cJ(BB)), 200))
    }
    hJ();
    const zJ = "EXT_lights_area",
      FJ = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      NJ = {
        aspect: 1
      },
      gJ = XB.s.Backward();
    class qJ {
      constructor(BB) {
        this.name = zJ, this.enabled = !0, this.required = !1, this._exporter = BB
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[zJ] = this._lights
      }
      async postExportNodeAsync(BB, IB, ZB, TB, JB) {
        return await new Promise((oB => {
          if (!(ZB instanceof nT.b)) return void oB(IB);
          const GB = ZB.getTypeID() == nT.b.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!GB) return iB.d.Warn(`${BB}: Light ${ZB.name} is not supported in ${zJ}`), void oB(IB);
          const vB = ZB;
          if (vB.falloffType !== nT.b.FALLOFF_GLTF && iB.d.Warn(`${BB}: Light falloff for ${ZB.name} does not match the ${zJ} specification!`), !vB.position.kvB(0, 0, 0)) {
            const BB = XB.m.rN[0].TY(vB.position);
            JB && AZ(BB), IB.translation = BB.HTB()
          }
          const kB = XB.s.Forward();
          JB && AZ(kB);
          const cB = XB.f.FromUnitVectorsToRef(gJ, kB, XB.m.Quaternion[0]);
          XB.f.IsIdentity(cB) || (IB.rotation = cB.HTB());
          const nB = {
            type: GB,
            name: vB.name,
            color: vB.diffuse.HTB(),
            intensity: vB.intensity,
            size: vB.height,
            rect: {
              aspect: vB.width / vB.height
            }
          };
          KZ(nB, FJ), nB.rect && KZ(nB.rect, NJ), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(nB);
          const hB = {
              light: this._lights.lights.length - 1
            },
            zB = ZB.parent;
          if (zB && EZ(vB, zB)) {
            const BB = TB.get(zB);
            if (BB) {
              const ZB = this._exporter._nodes[BB];
              return xZ(IB, ZB), ZB.extensions || (ZB.extensions = {}), ZB.extensions[zJ] = hB, void oB(null)
            }
          }
          IB.extensions || (IB.extensions = {}), IB.extensions[zJ] = hB, oB(IB)
        }))
      }
    }
    let yJ = !1;

    function UJ() {
      yJ || (yJ = !0, PT.RegisterExtension(zJ, (BB => new qJ(BB))))
    }
    UJ();
    const WJ = "KHR_materials_anisotropy";
    class dJ {
      constructor(BB) {
        this.name = WJ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, IB, ZB) {
        const TB = [];
        if (ZB instanceof QI) {
          if (ZB.anisotropy.isEnabled && !ZB.anisotropy.legacy) return ZB.anisotropy.texture && TB.push(ZB.anisotropy.texture), TB
        } else if (ZB instanceof VI && ZB.specularRoughnessAnisotropy > 0) {
          const BB = function(BB) {
            const IB = BB.specularRoughnessAnisotropyTexture,
              ZB = BB.geometryTangentTexture;
            return `${IB&&IB.getInternalTexture()?IB.getInternalTexture().uniqueId:"NoStrength"}_${ZB&&ZB.getInternalTexture()?ZB.getInternalTexture().uniqueId:"NoTangent"}`
          }(ZB);
          if (this._anisoTexturesMap[BB]) TB.push(this._anisoTexturesMap[BB]);
          else {
            const IB = await async function(BB) {
              const IB = BB.JR(),
                ZB = BB.specularRoughnessAnisotropyTexture,
                TB = BB.geometryTangentTexture;
              return ZB || TB ? await GZ("AnisotropyTexture", cZ(TB ? vZ(TB, 0) : kZ(1), TB ? vZ(TB, 1) : kZ(0), ZB ? vZ(ZB, 0) : kZ(1)), IB) : null
            }(ZB);
            IB && (TB.push(IB), this._anisoTexturesMap[BB] = IB)
          }
          return TB
        }
        return []
      }
      postExportMaterialAsync(BB, IB, ZB) {
        return new Promise((BB => {
          var TB;
          if (ZB instanceof QI) {
            if (!ZB.anisotropy.isEnabled || ZB.anisotropy.legacy) return void BB(IB);
            this._wasUsed = !0, IB.extensions = IB.extensions || {};
            const TB = this._exporter._materialExporter.getTextureInfo(ZB.anisotropy.texture),
              JB = {
                anisotropyStrength: ZB.anisotropy.intensity,
                anisotropyRotation: ZB.anisotropy.angle,
                anisotropyTexture: TB ?? void 0
              };
            null !== JB.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(ZB), IB.extensions[WJ] = JB
          } else if (ZB instanceof VI && ZB.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, IB.extensions = IB.extensions || {};
            let JB = ZB.specularRoughnessTexture;
            ZB._useRoughnessFromMetallicTextureGreen && (JB = ZB.baseMetalnessTexture);
            const oB = this._anisoTexturesMap[ZB.id];
            if (!JB && !oB) {
              let TB = ZB.specularRoughness,
                JB = ZB.specularRoughnessAnisotropy;
              if (!ZB._useGltfStyleAnisotropy) {
                const BB = function(BB, IB) {
                  const ZB = BB * BB,
                    TB = ZB * Math.sqrt(2 / (1 + (1 - IB) * (1 - IB))),
                    JB = (1 - IB) * TB;
                  return {
                    newBaseRoughness: Math.sqrt(JB),
                    newAnisotropyStrength: Math.min(Math.sqrt((TB - ZB) / Math.max(1 - ZB, 1e-4)), 1)
                  }
                }(ZB.specularRoughness, ZB.specularRoughnessAnisotropy);
                TB = BB.newBaseRoughness, JB = BB.newAnisotropyStrength
              }
              IB.pbrMetallicRoughness && (IB.pbrMetallicRoughness.roughnessFactor = TB);
              const oB = {
                anisotropyStrength: JB,
                anisotropyRotation: ZB.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return IB.extensions[WJ] = oB, BB(IB)
            }
            const GB = oB ? this._exporter._materialExporter.getTextureInfo(oB) : null,
              vB = {
                anisotropyStrength: ZB.specularRoughnessAnisotropy,
                anisotropyRotation: ZB.geometryTangentAngle,
                anisotropyTexture: GB || void 0,
                extensions: {}
              };
            ZB._useGltfStyleAnisotropy || (IB.extensions.KHR_materials_openpbr = {}, (TB = this._exporter._glTF).extensionsUsed || (TB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(ZB), IB.extensions[WJ] = vB
          }
          BB(IB)
        }))
      }
    }
    let CJ = !1;

    function QJ() {
      CJ || (CJ = !0, PT.RegisterExtension(WJ, (BB => new dJ(BB))))
    }
    QJ();
    const sJ = "KHR_materials_clearcoat";

    function wJ(BB, IB) {
      const ZB = new aB.e(IB.name, IB.JR());
      return ZB._texture = BB, ZB.coordinatesIndex = IB.coordinatesIndex, IB instanceof aB.e && (ZB.uOffset = IB.uOffset, ZB.vOffset = IB.vOffset, ZB.uScale = IB.uScale, ZB.vScale = IB.vScale, ZB.wAng = IB.wAng), ZB.wrapU = IB.wrapU, ZB.wrapV = IB.wrapV, ZB
    }
    class OJ {
      constructor(BB) {
        this.name = sJ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = BB
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
      async postExportMaterialAdditionalTexturesAsync(BB, IB, ZB) {
        const TB = [];
        if (ZB instanceof QI) {
          if (ZB.clearCoat.isEnabled) return ZB.clearCoat.texture && TB.push(ZB.clearCoat.texture), !ZB.clearCoat.useRoughnessFromMainTexture && ZB.clearCoat.textureRoughness && TB.push(ZB.clearCoat.textureRoughness), ZB.clearCoat.bumpTexture && TB.push(ZB.clearCoat.bumpTexture), TB
        } else if (ZB instanceof VI && ZB.coatWeight > 0) {
          let BB = !1;
          if (ZB.coatWeightTexture ? ZB.coatRoughnessTexture ? ZB._useCoatRoughnessFromGreenChannel && ZB.coatWeightTexture.getInternalTexture() === ZB.coatRoughnessTexture.getInternalTexture() ? (TB.push(ZB.coatWeightTexture), TB.push(ZB.coatRoughnessTexture)) : BB = !0 : TB.push(ZB.coatWeightTexture) : ZB.coatRoughnessTexture && (ZB._useCoatRoughnessFromGreenChannel ? TB.push(ZB.coatRoughnessTexture) : BB = !0), BB) {
            const BB = function(BB) {
              const IB = BB.coatWeightTexture,
                ZB = IB && IB.getInternalTexture() ? IB.getInternalTexture().uniqueId : "NoCoat",
                TB = BB.coatRoughnessTexture;
              return `${ZB}_${TB&&TB.getInternalTexture()?TB.getInternalTexture().uniqueId:"NoRoughness"}`
            }(ZB);
            if (!this._cachedInternalTexturesMap[BB]) {
              const IB = await async function(BB) {
                const IB = BB.JR(),
                  ZB = BB.coatWeightTexture,
                  TB = BB.coatRoughnessTexture;
                return ZB || TB ? (await GZ("CoatTexture", cZ(ZB ? vZ(ZB, 0) : kZ(1), TB ? vZ(TB, BB._useCoatRoughnessFromGreenChannel ? 1 : 0) : kZ(1)), IB)).getInternalTexture() : null
              }(ZB);
              IB && (this._cachedInternalTexturesMap[BB] = IB)
            }
            this._cachedInternalTexturesMap[BB] && (ZB.coatWeightTexture && (this._mergedTexturesMap[ZB.coatWeightTexture.uniqueId] = wJ(this._cachedInternalTexturesMap[BB], ZB.coatWeightTexture), TB.push(this._mergedTexturesMap[ZB.coatWeightTexture.uniqueId])), ZB.coatRoughnessTexture && (this._mergedTexturesMap[ZB.coatRoughnessTexture.uniqueId] = wJ(this._cachedInternalTexturesMap[BB], ZB.coatRoughnessTexture), TB.push(this._mergedTexturesMap[ZB.coatRoughnessTexture.uniqueId])))
          }
          return ZB.geometryCoatNormalTexture && TB.push(ZB.geometryCoatNormalTexture), TB
        }
        return []
      }
      postExportMaterialAsync(BB, IB, ZB) {
        return new Promise((BB => {
          if (ZB instanceof QI) {
            if (!ZB.clearCoat.isEnabled) return void BB(IB);
            this._wasUsed = !0, IB.extensions = IB.extensions || {};
            const TB = this._exporter._materialExporter.getTextureInfo(ZB.clearCoat.texture);
            let JB;
            JB = ZB.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(ZB.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(ZB.clearCoat.textureRoughness), ZB.clearCoat.isTintEnabled && wI.j.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${ZB.name}`), ZB.clearCoat.remapF0OnInterfaceChange && wI.j.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${ZB.name}`);
            const oB = this._exporter._materialExporter.getTextureInfo(ZB.clearCoat.bumpTexture),
              GB = {
                clearcoatFactor: ZB.clearCoat.intensity,
                clearcoatTexture: TB ?? void 0,
                clearcoatRoughnessFactor: ZB.clearCoat.roughness,
                clearcoatRoughnessTexture: JB ?? void 0,
                clearcoatNormalTexture: oB ?? void 0
              };
            null === GB.clearcoatTexture && null === GB.clearcoatRoughnessTexture && null === GB.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ZB), IB.extensions[sJ] = GB
          } else if (ZB instanceof VI) {
            if (0 == ZB.coatWeight) return void BB(IB);
            let TB, JB, oB, GB;
            this._wasUsed = !0, IB.extensions = IB.extensions || {}, ZB.coatWeightTexture && (TB = this._mergedTexturesMap[ZB.coatWeightTexture.uniqueId], JB = this._exporter._materialExporter.getTextureInfo(TB)), ZB.coatRoughnessTexture && (oB = this._mergedTexturesMap[ZB.coatRoughnessTexture.uniqueId], GB = this._exporter._materialExporter.getTextureInfo(oB)), ZB.coatColorTexture && wI.j.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${ZB.name}`);
            const vB = this._exporter._materialExporter.getTextureInfo(ZB.geometryCoatNormalTexture),
              kB = {
                clearcoatFactor: ZB.coatWeight,
                clearcoatTexture: JB ?? void 0,
                clearcoatRoughnessFactor: ZB.coatRoughness,
                clearcoatRoughnessTexture: GB ?? void 0,
                clearcoatNormalTexture: vB ?? void 0
              };
            null === kB.clearcoatTexture && null === kB.clearcoatRoughnessTexture && null === kB.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ZB), IB.extensions[sJ] = kB
          }
          BB(IB)
        }))
      }
    }
    let YJ = !1;

    function iJ() {
      YJ || (YJ = !0, PT.RegisterExtension(sJ, (BB => new OJ(BB))))
    }
    iJ();
    const pJ = "KHR_materials_coat";

    function aJ(BB) {
      const IB = BB.coatRoughnessAnisotropyTexture,
        ZB = BB.geometryCoatTangentTexture;
      return `${IB&&IB.getInternalTexture()?IB.getInternalTexture().uniqueId:"NoStrength"}_${ZB&&ZB.getInternalTexture()?ZB.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function HJ(BB, IB) {
      const ZB = new aB.e(IB.name, IB.JR());
      return ZB._texture = BB, ZB.coordinatesIndex = IB.coordinatesIndex, IB instanceof aB.e && (ZB.uOffset = IB.uOffset, ZB.vOffset = IB.vOffset, ZB.uScale = IB.uScale, ZB.vScale = IB.vScale, ZB.wAng = IB.wAng), ZB.wrapU = IB.wrapU, ZB.wrapV = IB.wrapV, ZB
    }
    class MJ {
      constructor(BB) {
        this.name = pJ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = BB
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
      async postExportMaterialAdditionalTexturesAsync(BB, IB, ZB) {
        const TB = [];
        if (ZB instanceof QI) {
          if (ZB.clearCoat.isEnabled) return ZB.clearCoat.texture && TB.push(ZB.clearCoat.texture), !ZB.clearCoat.useRoughnessFromMainTexture && ZB.clearCoat.textureRoughness && TB.push(ZB.clearCoat.textureRoughness), ZB.clearCoat.bumpTexture && TB.push(ZB.clearCoat.bumpTexture), ZB.clearCoat.tintTexture && TB.push(ZB.clearCoat.tintTexture), TB
        } else if (ZB instanceof VI && ZB.coatWeight > 0) {
          let BB = !1;
          if (ZB.coatWeightTexture ? ZB.coatRoughnessTexture ? ZB._useCoatRoughnessFromGreenChannel && ZB.coatWeightTexture.getInternalTexture() === ZB.coatRoughnessTexture.getInternalTexture() ? (TB.push(ZB.coatWeightTexture), TB.push(ZB.coatRoughnessTexture)) : BB = !0 : TB.push(ZB.coatWeightTexture) : ZB.coatRoughnessTexture && (ZB._useCoatRoughnessFromGreenChannel ? TB.push(ZB.coatRoughnessTexture) : BB = !0), BB) {
            const BB = function(BB) {
              const IB = BB.coatWeightTexture,
                ZB = IB && IB.getInternalTexture() ? IB.getInternalTexture().uniqueId : "NoCoat",
                TB = BB.coatRoughnessTexture;
              return `${ZB}_${TB&&TB.getInternalTexture()?TB.getInternalTexture().uniqueId:"NoRoughness"}`
            }(ZB);
            if (!this._cachedInternalTexturesMap[BB]) {
              const IB = await async function(BB) {
                const IB = BB.JR(),
                  ZB = BB.coatWeightTexture,
                  TB = BB.coatRoughnessTexture;
                return ZB || TB ? (await GZ("CoatTexture", cZ(ZB ? vZ(ZB, 0) : kZ(1), TB ? vZ(TB, BB._useCoatRoughnessFromGreenChannel ? 1 : 0) : kZ(1)), IB)).getInternalTexture() : null
              }(ZB);
              IB && (this._cachedInternalTexturesMap[BB] = IB)
            }
            this._cachedInternalTexturesMap[BB] && (ZB.coatWeightTexture && (this._mergedTexturesMap[ZB.coatWeightTexture.uniqueId] = HJ(this._cachedInternalTexturesMap[BB], ZB.coatWeightTexture), TB.push(this._mergedTexturesMap[ZB.coatWeightTexture.uniqueId])), ZB.coatRoughnessTexture && (this._mergedTexturesMap[ZB.coatRoughnessTexture.uniqueId] = HJ(this._cachedInternalTexturesMap[BB], ZB.coatRoughnessTexture), TB.push(this._mergedTexturesMap[ZB.coatRoughnessTexture.uniqueId])))
          }
          if (ZB.geometryCoatNormalTexture && TB.push(ZB.geometryCoatNormalTexture), ZB.coatColorTexture && TB.push(ZB.coatColorTexture), ZB.coatRoughnessAnisotropy > 0) {
            const BB = aJ(ZB);
            if (this._mergedTexturesMap[BB]) TB.push(this._mergedTexturesMap[BB]);
            else {
              const IB = await async function(BB) {
                const IB = BB.JR(),
                  ZB = BB.coatRoughnessAnisotropyTexture,
                  TB = BB.geometryCoatTangentTexture;
                return ZB || TB ? await GZ("AnisotropyTexture", cZ(TB ? vZ(TB, 0) : kZ(1), TB ? vZ(TB, 1) : kZ(0), ZB ? vZ(ZB, 0) : kZ(1)), IB) : null
              }(ZB);
              IB && (TB.push(IB), this._mergedTexturesMap[BB] = IB)
            }
            return TB
          }
          return TB
        }
        return []
      }
      postExportMaterialAsync(BB, IB, ZB) {
        return new Promise((BB => {
          var TB;
          if (ZB instanceof QI) {
            if (!ZB.clearCoat.isEnabled) return void BB(IB);
            this._wasUsed = !0, IB.extensions = IB.extensions || {};
            const TB = this._exporter._materialExporter.getTextureInfo(ZB.clearCoat.texture);
            let JB, oB;
            JB = ZB.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(ZB.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(ZB.clearCoat.textureRoughness), ZB.clearCoat.isTintEnabled && (oB = this._exporter._materialExporter.getTextureInfo(ZB.clearCoat.tintTexture));
            const GB = this._exporter._materialExporter.getTextureInfo(ZB.clearCoat.bumpTexture),
              vB = ZB.clearCoat.indexOfRefraction,
              kB = {
                coatFactor: ZB.clearCoat.intensity,
                coatTexture: TB ?? void 0,
                coatRoughnessFactor: ZB.clearCoat.roughness,
                coatRoughnessTexture: JB ?? void 0,
                coatNormalTexture: GB ?? void 0,
                coatColorFactor: ZB.clearCoat.tintColor.HTB(),
                coatColorTexture: oB ?? void 0,
                coatIor: 1.5 !== vB ? vB : void 0
              };
            null === kB.coatTexture && null === kB.coatRoughnessTexture && null === kB.coatRoughnessTexture && null === kB.coatColorTexture || this._exporter._materialNeedsUVsSet.add(ZB), IB.extensions[pJ] = kB
          } else if (ZB instanceof VI) {
            if (0 == ZB.coatWeight) return void BB(IB);
            let JB, oB, GB, vB;
            this._wasUsed = !0, IB.extensions = IB.extensions || {}, ZB.coatWeightTexture && (JB = this._mergedTexturesMap[ZB.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[ZB.coatWeightTexture.uniqueId] : ZB.coatWeightTexture, oB = this._exporter._materialExporter.getTextureInfo(JB)), ZB.coatRoughnessTexture && (GB = this._mergedTexturesMap[ZB.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[ZB.coatRoughnessTexture.uniqueId] : ZB.coatRoughnessTexture, vB = this._exporter._materialExporter.getTextureInfo(GB));
            const kB = this._exporter._materialExporter.getTextureInfo(ZB.geometryCoatNormalTexture),
              cB = this._exporter._materialExporter.getTextureInfo(ZB.coatColorTexture),
              nB = ZB.coatIor,
              hB = ZB.coatDarkening,
              zB = ZB.coatRoughnessTexture,
              FB = aJ(ZB),
              NB = this._mergedTexturesMap[FB];
            let gB, qB = 0,
              yB = 0;
            if (ZB.coatRoughnessAnisotropy > 0) {
              if (zB || NB) {
                const BB = NB ? this._exporter._materialExporter.getTextureInfo(NB) : null;
                qB = ZB.coatRoughnessAnisotropy, yB = ZB.geometryCoatTangentAngle, gB = BB || void 0
              } else {
                let BB = ZB.coatRoughness,
                  TB = ZB.coatRoughnessAnisotropy;
                if (!ZB._useGltfStyleAnisotropy) {
                  const IB = function(BB, IB) {
                    const ZB = BB * BB,
                      TB = ZB * Math.sqrt(2 / (1 + (1 - IB) * (1 - IB))),
                      JB = (1 - IB) * TB;
                    return {
                      newBaseRoughness: Math.sqrt(JB),
                      newAnisotropyStrength: Math.min(Math.sqrt((TB - ZB) / Math.max(1 - ZB, 1e-4)), 1)
                    }
                  }(ZB.coatRoughness, ZB.coatRoughnessAnisotropy);
                  BB = IB.newBaseRoughness, TB = IB.newAnisotropyStrength
                }
                IB.pbrMetallicRoughness && (IB.pbrMetallicRoughness.roughnessFactor = BB), qB = TB, yB = ZB.geometryCoatTangentAngle + .5 * Math.PI, gB = void 0
              }
              ZB._useGltfStyleAnisotropy || (IB.extensions.KHR_materials_openpbr = {}, (TB = this._exporter._glTF).extensionsUsed || (TB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const UB = {
              coatFactor: ZB.coatWeight,
              coatTexture: oB ?? void 0,
              coatRoughnessFactor: ZB.coatRoughness,
              coatRoughnessTexture: vB ?? void 0,
              coatNormalTexture: kB ?? void 0,
              coatColorFactor: ZB.coatColor.HTB(),
              coatColorTexture: cB ?? void 0,
              coatIor: 1.5 !== nB ? nB : void 0,
              coatDarkeningFactor: 1 !== hB ? hB : void 0,
              coatAnisotropyRotation: yB,
              coatAnisotropyStrength: qB,
              coatAnisotropyTexture: gB
            };
            null === UB.coatTexture && null === UB.coatRoughnessTexture && null === UB.coatRoughnessTexture && null === UB.coatAnisotropyTexture && null === UB.coatColorTexture || this._exporter._materialNeedsUVsSet.add(ZB), IB.extensions[pJ] = UB
          }
          BB(IB)
        }))
      }
    }
    let jJ = !1;

    function PJ() {
      jJ || (jJ = !0, PT.RegisterExtension(pJ, (BB => new MJ(BB))))
    }
    PJ();
    let RJ = (() => {
      var BB, IB, ZB, TB, JB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB, yB, UB, WB, dB, CB, QB, sB, wB, iB, pB, aB, HB, MB, jB, RB, rB, mB, XB, LB, eB, uB, fB, lB, AB, bB, xB, EB, DB, KB, VB, SB, BI, II, ZI, TI, JI, oI, GI, vI, kI, cI, nI, hI, zI, FI, NI, gI, qI, yI, UI, WI;
      let dI, CI, wI, OI, YI, iI, pI, aI, HI, MI, jI, PI, RI, rI, mI, XI, LI, eI, uI, fI, lI, AI, tI, bI, xI, EI, DI, KI, VI, SI, BZ, IZ, ZZ, TZ, JZ, oZ, GZ, vZ, kZ, cZ, nZ, hZ, zZ, FZ, NZ, gZ, qZ, yZ, UZ, WZ, dZ, CZ, QZ, sZ, wZ, OZ, YZ, iZ, pZ, aZ, HZ, MZ, jZ, PZ, RZ, rZ, mZ, XZ, LZ = QI,
        eZ = [],
        uZ = [],
        fZ = [],
        lZ = [],
        AZ = [],
        tZ = [],
        bZ = [],
        xZ = [],
        EZ = [],
        DZ = [],
        KZ = [],
        VZ = [],
        SZ = [],
        BT = [],
        IT = [],
        ZT = [],
        TT = [],
        JT = [],
        oT = [],
        GT = [],
        vT = [],
        kT = [],
        cT = [],
        nT = [],
        hT = [],
        zT = [],
        FT = [],
        NT = [],
        gT = [],
        qT = [],
        yT = [],
        UT = [],
        WT = [],
        dT = [],
        CT = [],
        QT = [],
        sT = [],
        wT = [],
        OT = [],
        YT = [],
        iT = [],
        pT = [],
        aT = [],
        HT = [],
        MT = [],
        jT = [],
        PT = [],
        RT = [],
        rT = [],
        mT = [],
        XT = [],
        LT = [],
        eT = [],
        uT = [],
        fT = [],
        lT = [],
        AT = [],
        tT = [],
        bT = [],
        xT = [],
        ET = [],
        DT = [],
        KT = [],
        VT = [],
        ST = [],
        BJ = [],
        IJ = [],
        ZJ = [],
        TJ = [],
        JJ = [],
        oJ = [],
        GJ = [],
        vJ = [],
        kJ = [],
        cJ = [],
        nJ = [],
        hJ = [],
        zJ = [],
        FJ = [],
        NJ = [],
        gJ = [],
        qJ = [],
        yJ = [],
        UJ = [],
        WJ = [],
        dJ = [],
        CJ = [],
        QJ = [],
        sJ = [],
        wJ = [],
        OJ = [],
        YJ = [],
        iJ = [],
        pJ = [],
        aJ = [],
        HJ = [],
        MJ = [],
        jJ = [],
        PJ = [],
        RJ = [],
        rJ = [],
        mJ = [],
        XJ = [],
        LJ = [],
        eJ = [],
        uJ = [],
        fJ = [],
        lJ = [],
        AJ = [],
        tJ = [],
        bJ = [],
        xJ = [],
        EJ = [],
        DJ = [],
        KJ = [],
        VJ = [],
        SJ = [],
        Bo = [],
        Io = [],
        Zo = [],
        To = [],
        Jo = [],
        oo = [],
        Go = [],
        vo = [],
        ko = [],
        co = [],
        no = [],
        ho = [],
        zo = [],
        Fo = [],
        No = [],
        go = [];
      return BB = class extends LZ {
        get directIntensity() {
          return (0, OB.b)(this, IB, "f")
        }
        set directIntensity(BB) {
          (0, OB.f)(this, IB, BB, "f")
        }
        get emissiveIntensity() {
          return (0, OB.b)(this, ZB, "f")
        }
        set emissiveIntensity(BB) {
          (0, OB.f)(this, ZB, BB, "f")
        }
        get environmentIntensity() {
          return (0, OB.b)(this, TB, "f")
        }
        set environmentIntensity(BB) {
          (0, OB.f)(this, TB, BB, "f")
        }
        get specularIntensity() {
          return (0, OB.b)(this, JB, "f")
        }
        set specularIntensity(BB) {
          (0, OB.f)(this, JB, BB, "f")
        }
        get disableBumpMap() {
          return (0, OB.b)(this, GB, "f")
        }
        set disableBumpMap(BB) {
          (0, OB.f)(this, GB, BB, "f")
        }
        get albedoTexture() {
          return (0, OB.b)(this, vB, "f")
        }
        set albedoTexture(BB) {
          (0, OB.f)(this, vB, BB, "f")
        }
        get baseWeightTexture() {
          return (0, OB.b)(this, kB, "f")
        }
        set baseWeightTexture(BB) {
          (0, OB.f)(this, kB, BB, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, OB.b)(this, cB, "f")
        }
        set baseDiffuseRoughnessTexture(BB) {
          (0, OB.f)(this, cB, BB, "f")
        }
        get ambientTexture() {
          return (0, OB.b)(this, nB, "f")
        }
        set ambientTexture(BB) {
          (0, OB.f)(this, nB, BB, "f")
        }
        get ambientTextureStrength() {
          return (0, OB.b)(this, hB, "f")
        }
        set ambientTextureStrength(BB) {
          (0, OB.f)(this, hB, BB, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, OB.b)(this, zB, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(BB) {
          (0, OB.f)(this, zB, BB, "f")
        }
        get opacityTexture() {
          return (0, OB.b)(this, FB, "f")
        }
        set opacityTexture(BB) {
          (0, OB.f)(this, FB, BB, "f")
        }
        get reflectionTexture() {
          return (0, OB.b)(this, NB, "f")
        }
        set reflectionTexture(BB) {
          (0, OB.f)(this, NB, BB, "f")
        }
        get emissiveTexture() {
          return (0, OB.b)(this, gB, "f")
        }
        set emissiveTexture(BB) {
          (0, OB.f)(this, gB, BB, "f")
        }
        get reflectivityTexture() {
          return (0, OB.b)(this, qB, "f")
        }
        set reflectivityTexture(BB) {
          (0, OB.f)(this, qB, BB, "f")
        }
        get metallicTexture() {
          return (0, OB.b)(this, yB, "f")
        }
        set metallicTexture(BB) {
          (0, OB.f)(this, yB, BB, "f")
        }
        get metallic() {
          return (0, OB.b)(this, UB, "f")
        }
        set metallic(BB) {
          (0, OB.f)(this, UB, BB, "f")
        }
        get roughness() {
          return (0, OB.b)(this, WB, "f")
        }
        set roughness(BB) {
          (0, OB.f)(this, WB, BB, "f")
        }
        get metallicF0Factor() {
          return (0, OB.b)(this, dB, "f")
        }
        set metallicF0Factor(BB) {
          (0, OB.f)(this, dB, BB, "f")
        }
        get metallicReflectanceColor() {
          return (0, OB.b)(this, CB, "f")
        }
        set metallicReflectanceColor(BB) {
          (0, OB.f)(this, CB, BB, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, OB.b)(this, QB, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(BB) {
          (0, OB.f)(this, QB, BB, "f")
        }
        get metallicReflectanceTexture() {
          return (0, OB.b)(this, sB, "f")
        }
        set metallicReflectanceTexture(BB) {
          (0, OB.f)(this, sB, BB, "f")
        }
        get reflectanceTexture() {
          return (0, OB.b)(this, wB, "f")
        }
        set reflectanceTexture(BB) {
          (0, OB.f)(this, wB, BB, "f")
        }
        get microSurfaceTexture() {
          return (0, OB.b)(this, iB, "f")
        }
        set microSurfaceTexture(BB) {
          (0, OB.f)(this, iB, BB, "f")
        }
        get bumpTexture() {
          return (0, OB.b)(this, pB, "f")
        }
        set bumpTexture(BB) {
          (0, OB.f)(this, pB, BB, "f")
        }
        get lightmapTexture() {
          return (0, OB.b)(this, aB, "f")
        }
        set lightmapTexture(BB) {
          (0, OB.f)(this, aB, BB, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(BB) {
          this.subSurface.refractionTexture = BB, BB ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, OB.b)(this, HB, "f")
        }
        set ambientColor(BB) {
          (0, OB.f)(this, HB, BB, "f")
        }
        get albedoColor() {
          return (0, OB.b)(this, MB, "f")
        }
        set albedoColor(BB) {
          (0, OB.f)(this, MB, BB, "f")
        }
        get baseWeight() {
          return (0, OB.b)(this, jB, "f")
        }
        set baseWeight(BB) {
          (0, OB.f)(this, jB, BB, "f")
        }
        get baseDiffuseRoughness() {
          return (0, OB.b)(this, RB, "f")
        }
        set baseDiffuseRoughness(BB) {
          (0, OB.f)(this, RB, BB, "f")
        }
        get reflectivityColor() {
          return (0, OB.b)(this, rB, "f")
        }
        set reflectivityColor(BB) {
          (0, OB.f)(this, rB, BB, "f")
        }
        get reflectionColor() {
          return (0, OB.b)(this, mB, "f")
        }
        set reflectionColor(BB) {
          (0, OB.f)(this, mB, BB, "f")
        }
        get emissiveColor() {
          return (0, OB.b)(this, XB, "f")
        }
        set emissiveColor(BB) {
          (0, OB.f)(this, XB, BB, "f")
        }
        get microSurface() {
          return (0, OB.b)(this, LB, "f")
        }
        set microSurface(BB) {
          (0, OB.f)(this, LB, BB, "f")
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
          return (0, OB.b)(this, eB, "f")
        }
        set useLightmapAsShadowmap(BB) {
          (0, OB.f)(this, eB, BB, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, OB.b)(this, uB, "f")
        }
        set useAlphaFromAlbedoTexture(BB) {
          (0, OB.f)(this, uB, BB, "f")
        }
        get forceAlphaTest() {
          return (0, OB.b)(this, fB, "f")
        }
        set forceAlphaTest(BB) {
          (0, OB.f)(this, fB, BB, "f")
        }
        get alphaCutOff() {
          return (0, OB.b)(this, lB, "f")
        }
        set alphaCutOff(BB) {
          (0, OB.f)(this, lB, BB, "f")
        }
        get useSpecularOverAlpha() {
          return (0, OB.b)(this, AB, "f")
        }
        set useSpecularOverAlpha(BB) {
          (0, OB.f)(this, AB, BB, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, OB.b)(this, bB, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(BB) {
          (0, OB.f)(this, bB, BB, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, OB.b)(this, xB, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(BB) {
          (0, OB.f)(this, xB, BB, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, OB.b)(this, EB, "f")
        }
        set useRoughnessFromMetallicTextureGreen(BB) {
          (0, OB.f)(this, EB, BB, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, OB.b)(this, DB, "f")
        }
        set useMetallnessFromMetallicTextureBlue(BB) {
          (0, OB.f)(this, DB, BB, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, OB.b)(this, KB, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(BB) {
          (0, OB.f)(this, KB, BB, "f")
        }
        get useAmbientInGrayScale() {
          return (0, OB.b)(this, VB, "f")
        }
        set useAmbientInGrayScale(BB) {
          (0, OB.f)(this, VB, BB, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, OB.b)(this, SB, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(BB) {
          (0, OB.f)(this, SB, BB, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === QI.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(BB) {
          BB !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = BB ? QI.LIGHTFALLOFF_PHYSICAL : QI.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === QI.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(BB) {
          BB !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = BB ? QI.LIGHTFALLOFF_GLTF : QI.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, OB.b)(this, BI, "f")
        }
        set useRadianceOverAlpha(BB) {
          (0, OB.f)(this, BI, BB, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, OB.b)(this, II, "f")
        }
        set useObjectSpaceNormalMap(BB) {
          (0, OB.f)(this, II, BB, "f")
        }
        get useParallax() {
          return (0, OB.b)(this, ZI, "f")
        }
        set useParallax(BB) {
          (0, OB.f)(this, ZI, BB, "f")
        }
        get useParallaxOcclusion() {
          return (0, OB.b)(this, TI, "f")
        }
        set useParallaxOcclusion(BB) {
          (0, OB.f)(this, TI, BB, "f")
        }
        get parallaxScaleBias() {
          return (0, OB.b)(this, JI, "f")
        }
        set parallaxScaleBias(BB) {
          (0, OB.f)(this, JI, BB, "f")
        }
        get disableLighting() {
          return (0, OB.b)(this, oI, "f")
        }
        set disableLighting(BB) {
          (0, OB.f)(this, oI, BB, "f")
        }
        get forceIrradianceInFragment() {
          return (0, OB.b)(this, GI, "f")
        }
        set forceIrradianceInFragment(BB) {
          (0, OB.f)(this, GI, BB, "f")
        }
        get maxSimultaneousLights() {
          return (0, OB.b)(this, vI, "f")
        }
        set maxSimultaneousLights(BB) {
          (0, OB.f)(this, vI, BB, "f")
        }
        get invertNormalMapX() {
          return (0, OB.b)(this, kI, "f")
        }
        set invertNormalMapX(BB) {
          (0, OB.f)(this, kI, BB, "f")
        }
        get invertNormalMapY() {
          return (0, OB.b)(this, cI, "f")
        }
        set invertNormalMapY(BB) {
          (0, OB.f)(this, cI, BB, "f")
        }
        get twoSidedLighting() {
          return (0, OB.b)(this, nI, "f")
        }
        set twoSidedLighting(BB) {
          (0, OB.f)(this, nI, BB, "f")
        }
        get useAlphaFresnel() {
          return (0, OB.b)(this, hI, "f")
        }
        set useAlphaFresnel(BB) {
          (0, OB.f)(this, hI, BB, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, OB.b)(this, zI, "f")
        }
        set useLinearAlphaFresnel(BB) {
          (0, OB.f)(this, zI, BB, "f")
        }
        get environmentBRDFTexture() {
          return (0, OB.b)(this, FI, "f")
        }
        set environmentBRDFTexture(BB) {
          (0, OB.f)(this, FI, BB, "f")
        }
        get forceNormalForward() {
          return (0, OB.b)(this, NI, "f")
        }
        set forceNormalForward(BB) {
          (0, OB.f)(this, NI, BB, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, OB.b)(this, gI, "f")
        }
        set enableSpecularAntiAliasing(BB) {
          (0, OB.f)(this, gI, BB, "f")
        }
        get useHorizonOcclusion() {
          return (0, OB.b)(this, qI, "f")
        }
        set useHorizonOcclusion(BB) {
          (0, OB.f)(this, qI, BB, "f")
        }
        get useRadianceOcclusion() {
          return (0, OB.b)(this, yI, "f")
        }
        set useRadianceOcclusion(BB) {
          (0, OB.f)(this, yI, BB, "f")
        }
        get unlit() {
          return (0, OB.b)(this, UI, "f")
        }
        set unlit(BB) {
          (0, OB.f)(this, UI, BB, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, OB.b)(this, WI, "f")
        }
        set applyDecalMapAfterDetailMap(BB) {
          (0, OB.f)(this, WI, BB, "f")
        }
        constructor(oB, YB) {
          super(oB, YB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), IB.set(this, ((0, OB.l)(this, eZ), (0, OB.l)(this, uZ, 1))), ZB.set(this, ((0, OB.l)(this, fZ), (0, OB.l)(this, lZ, 1))), TB.set(this, ((0, OB.l)(this, AZ), (0, OB.l)(this, tZ, 1))), JB.set(this, ((0, OB.l)(this, bZ), (0, OB.l)(this, xZ, 1))), GB.set(this, ((0, OB.l)(this, EZ), (0, OB.l)(this, DZ, !1))), vB.set(this, ((0, OB.l)(this, KZ), (0, OB.l)(this, VZ, void 0))), kB.set(this, ((0, OB.l)(this, SZ), (0, OB.l)(this, BT, void 0))), cB.set(this, ((0, OB.l)(this, IT), (0, OB.l)(this, ZT, void 0))), nB.set(this, ((0, OB.l)(this, TT), (0, OB.l)(this, JT, void 0))), hB.set(this, ((0, OB.l)(this, oT), (0, OB.l)(this, GT, 1))), zB.set(this, ((0, OB.l)(this, vT), (0, OB.l)(this, kT, BB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), FB.set(this, ((0, OB.l)(this, cT), (0, OB.l)(this, nT, void 0))), NB.set(this, ((0, OB.l)(this, hT), (0, OB.l)(this, zT, void 0))), gB.set(this, ((0, OB.l)(this, FT), (0, OB.l)(this, NT, void 0))), qB.set(this, ((0, OB.l)(this, gT), (0, OB.l)(this, qT, void 0))), yB.set(this, ((0, OB.l)(this, yT), (0, OB.l)(this, UT, void 0))), UB.set(this, ((0, OB.l)(this, WT), (0, OB.l)(this, dT, void 0))), WB.set(this, ((0, OB.l)(this, CT), (0, OB.l)(this, QT, void 0))), dB.set(this, ((0, OB.l)(this, sT), (0, OB.l)(this, wT, 1))), CB.set(this, ((0, OB.l)(this, OT), (0, OB.l)(this, YT, tB.c.White()))), QB.set(this, ((0, OB.l)(this, iT), (0, OB.l)(this, pT, !1))), sB.set(this, ((0, OB.l)(this, aT), (0, OB.l)(this, HT, void 0))), wB.set(this, ((0, OB.l)(this, MT), (0, OB.l)(this, jT, void 0))), iB.set(this, ((0, OB.l)(this, PT), (0, OB.l)(this, RT, void 0))), pB.set(this, ((0, OB.l)(this, rT), (0, OB.l)(this, mT, void 0))), aB.set(this, ((0, OB.l)(this, XT), (0, OB.l)(this, LT, void 0))), HB.set(this, ((0, OB.l)(this, eT), (0, OB.l)(this, uT, new tB.c(0, 0, 0)))), MB.set(this, ((0, OB.l)(this, fT), (0, OB.l)(this, lT, new tB.c(1, 1, 1)))), jB.set(this, ((0, OB.l)(this, AT), (0, OB.l)(this, tT, 1))), RB.set(this, ((0, OB.l)(this, bT), (0, OB.l)(this, xT, void 0))), rB.set(this, ((0, OB.l)(this, ET), (0, OB.l)(this, DT, new tB.c(1, 1, 1)))), mB.set(this, ((0, OB.l)(this, KT), (0, OB.l)(this, VT, new tB.c(1, 1, 1)))), XB.set(this, ((0, OB.l)(this, ST), (0, OB.l)(this, BJ, new tB.c(0, 0, 0)))), LB.set(this, ((0, OB.l)(this, IJ), (0, OB.l)(this, ZJ, 1))), eB.set(this, ((0, OB.l)(this, TJ), (0, OB.l)(this, JJ, !1))), uB.set(this, ((0, OB.l)(this, oJ), (0, OB.l)(this, GJ, !1))), fB.set(this, ((0, OB.l)(this, vJ), (0, OB.l)(this, kJ, !1))), lB.set(this, ((0, OB.l)(this, cJ), (0, OB.l)(this, nJ, .4))), AB.set(this, ((0, OB.l)(this, hJ), (0, OB.l)(this, zJ, !0))), bB.set(this, ((0, OB.l)(this, FJ), (0, OB.l)(this, NJ, !1))), xB.set(this, ((0, OB.l)(this, gJ), (0, OB.l)(this, qJ, !0))), EB.set(this, ((0, OB.l)(this, yJ), (0, OB.l)(this, UJ, !1))), DB.set(this, ((0, OB.l)(this, WJ), (0, OB.l)(this, dJ, !1))), KB.set(this, ((0, OB.l)(this, CJ), (0, OB.l)(this, QJ, !1))), VB.set(this, ((0, OB.l)(this, sJ), (0, OB.l)(this, wJ, !1))), SB.set(this, ((0, OB.l)(this, OJ), (0, OB.l)(this, YJ, !1))), BI.set(this, ((0, OB.l)(this, iJ), (0, OB.l)(this, pJ, !0))), II.set(this, ((0, OB.l)(this, aJ), (0, OB.l)(this, HJ, !1))), ZI.set(this, ((0, OB.l)(this, MJ), (0, OB.l)(this, jJ, !1))), TI.set(this, ((0, OB.l)(this, PJ), (0, OB.l)(this, RJ, !1))), JI.set(this, ((0, OB.l)(this, rJ), (0, OB.l)(this, mJ, .05))), oI.set(this, ((0, OB.l)(this, XJ), (0, OB.l)(this, LJ, !1))), GI.set(this, ((0, OB.l)(this, eJ), (0, OB.l)(this, uJ, !1))), vI.set(this, ((0, OB.l)(this, fJ), (0, OB.l)(this, lJ, 4))), kI.set(this, ((0, OB.l)(this, AJ), (0, OB.l)(this, tJ, !1))), cI.set(this, ((0, OB.l)(this, bJ), (0, OB.l)(this, xJ, !1))), nI.set(this, ((0, OB.l)(this, EJ), (0, OB.l)(this, DJ, !1))), hI.set(this, ((0, OB.l)(this, KJ), (0, OB.l)(this, VJ, !1))), zI.set(this, ((0, OB.l)(this, SJ), (0, OB.l)(this, Bo, !1))), FI.set(this, ((0, OB.l)(this, Io), (0, OB.l)(this, Zo, null))), NI.set(this, ((0, OB.l)(this, To), (0, OB.l)(this, Jo, !1))), gI.set(this, ((0, OB.l)(this, oo), (0, OB.l)(this, Go, !1))), qI.set(this, ((0, OB.l)(this, vo), (0, OB.l)(this, ko, !0))), yI.set(this, ((0, OB.l)(this, co), (0, OB.l)(this, no, !0))), UI.set(this, ((0, OB.l)(this, ho), (0, OB.l)(this, zo, !1))), WI.set(this, ((0, OB.l)(this, Fo), (0, OB.l)(this, No, !1))), (0, OB.l)(this, go), this._environmentBRDFTexture = PB(this.JR())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(IB) {
          let ZB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const JB = sI.b.Clone((() => new BB(IB, this.JR())), this, {
            cloneTexturesOnlyOnce: ZB
          });
          return JB.id = IB, JB.name = IB, this.stencil.copyTo(JB.stencil), this._clonePlugins(JB, TB), JB
        }
        serialize() {
          const BB = super.serialize();
          return BB.customType = "BABYLON.PBRMaterial", BB
        }
        static Parse(IB, ZB, TB) {
          const JB = sI.b.Parse((() => new BB(IB.name, ZB)), IB, ZB, TB);
          return IB.stencil && JB.stencil.parse(IB.stencil, ZB, TB), oB.e._ParsePlugins(IB, JB, ZB, TB), IB.clearCoat && JB.clearCoat.parse(IB.clearCoat, ZB, TB), IB.anisotropy && JB.anisotropy.parse(IB.anisotropy, ZB, TB), IB.brdf && JB.brdf.parse(IB.brdf, ZB, TB), IB.sheen && JB.sheen.parse(IB.sheen, ZB, TB), IB.subSurface && JB.subSurface.parse(IB.subSurface, ZB, TB), IB.iridescence && JB.iridescence.parse(IB.iridescence, ZB, TB), JB
        }
      }, IB = new WeakMap, ZB = new WeakMap, TB = new WeakMap, JB = new WeakMap, GB = new WeakMap, vB = new WeakMap, kB = new WeakMap, cB = new WeakMap, nB = new WeakMap, hB = new WeakMap, zB = new WeakMap, FB = new WeakMap, NB = new WeakMap, gB = new WeakMap, qB = new WeakMap, yB = new WeakMap, UB = new WeakMap, WB = new WeakMap, dB = new WeakMap, CB = new WeakMap, QB = new WeakMap, sB = new WeakMap, wB = new WeakMap, iB = new WeakMap, pB = new WeakMap, aB = new WeakMap, HB = new WeakMap, MB = new WeakMap, jB = new WeakMap, RB = new WeakMap, rB = new WeakMap, mB = new WeakMap, XB = new WeakMap, LB = new WeakMap, eB = new WeakMap, uB = new WeakMap, fB = new WeakMap, lB = new WeakMap, AB = new WeakMap, bB = new WeakMap, xB = new WeakMap, EB = new WeakMap, DB = new WeakMap, KB = new WeakMap, VB = new WeakMap, SB = new WeakMap, BI = new WeakMap, II = new WeakMap, ZI = new WeakMap, TI = new WeakMap, JI = new WeakMap, oI = new WeakMap, GI = new WeakMap, vI = new WeakMap, kI = new WeakMap, cI = new WeakMap, nI = new WeakMap, hI = new WeakMap, zI = new WeakMap, FI = new WeakMap, NI = new WeakMap, gI = new WeakMap, qI = new WeakMap, yI = new WeakMap, UI = new WeakMap, WI = new WeakMap, (() => {
        const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(LZ[Symbol.metadata] ?? null) : void 0;
        dI = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], CI = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], wI = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], OI = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], YI = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], iI = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], pI = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], aI = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], HI = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], MI = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], jI = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], PI = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], RI = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], rI = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], mI = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], XI = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], LI = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], eI = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], uI = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], fI = [(0, YB.l)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], lI = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], AI = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], tI = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], bI = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], xI = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], EI = [(0, YB.v)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty", null)], DI = [(0, YB.l)("ambient"), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], KI = [(0, YB.l)("albedo"), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], VI = [(0, YB.C)("baseWeight"), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], SI = [(0, YB.C)("baseDiffuseRoughness"), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], BZ = [(0, YB.l)("reflectivity"), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], IZ = [(0, YB.l)("reflection"), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], ZZ = [(0, YB.l)("emissive"), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], TZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], JZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], oZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], GZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], vZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], kZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], cZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], nZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], hZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], zZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], FZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], NZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], gZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], qZ = [(0, YB.C)()], yZ = [(0, YB.C)()], UZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], WZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], dZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], CZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], QZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], sZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsLightsDirty")], wZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], OZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsLightsDirty")], YZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], iZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], pZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], aZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], HZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], MZ = [(0, YB.e)("_markAllSubMeshesAsTexturesDirty")], jZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], PZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], RZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], rZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsTexturesDirty")], mZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsMiscDirty")], XZ = [(0, YB.C)(), (0, YB.e)("_markAllSubMeshesAsMiscDirty")], (0, OB.j)(BB, null, dI, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "directIntensity" in BB,
            get: BB => BB.directIntensity,
            set: (BB, IB) => {
              BB.directIntensity = IB
            }
          },
          metadata: IB
        }, uZ, fZ), (0, OB.j)(BB, null, CI, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "emissiveIntensity" in BB,
            get: BB => BB.emissiveIntensity,
            set: (BB, IB) => {
              BB.emissiveIntensity = IB
            }
          },
          metadata: IB
        }, lZ, AZ), (0, OB.j)(BB, null, wI, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "environmentIntensity" in BB,
            get: BB => BB.environmentIntensity,
            set: (BB, IB) => {
              BB.environmentIntensity = IB
            }
          },
          metadata: IB
        }, tZ, bZ), (0, OB.j)(BB, null, OI, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "specularIntensity" in BB,
            get: BB => BB.specularIntensity,
            set: (BB, IB) => {
              BB.specularIntensity = IB
            }
          },
          metadata: IB
        }, xZ, EZ), (0, OB.j)(BB, null, YI, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: BB => "disableBumpMap" in BB,
            get: BB => BB.disableBumpMap,
            set: (BB, IB) => {
              BB.disableBumpMap = IB
            }
          },
          metadata: IB
        }, DZ, KZ), (0, OB.j)(BB, null, iI, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "albedoTexture" in BB,
            get: BB => BB.albedoTexture,
            set: (BB, IB) => {
              BB.albedoTexture = IB
            }
          },
          metadata: IB
        }, VZ, SZ), (0, OB.j)(BB, null, pI, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseWeightTexture" in BB,
            get: BB => BB.baseWeightTexture,
            set: (BB, IB) => {
              BB.baseWeightTexture = IB
            }
          },
          metadata: IB
        }, BT, IT), (0, OB.j)(BB, null, aI, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseDiffuseRoughnessTexture" in BB,
            get: BB => BB.baseDiffuseRoughnessTexture,
            set: (BB, IB) => {
              BB.baseDiffuseRoughnessTexture = IB
            }
          },
          metadata: IB
        }, ZT, TT), (0, OB.j)(BB, null, HI, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "ambientTexture" in BB,
            get: BB => BB.ambientTexture,
            set: (BB, IB) => {
              BB.ambientTexture = IB
            }
          },
          metadata: IB
        }, JT, oT), (0, OB.j)(BB, null, MI, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: BB => "ambientTextureStrength" in BB,
            get: BB => BB.ambientTextureStrength,
            set: (BB, IB) => {
              BB.ambientTextureStrength = IB
            }
          },
          metadata: IB
        }, GT, vT), (0, OB.j)(BB, null, jI, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: BB => "ambientTextureImpactOnAnalyticalLights" in BB,
            get: BB => BB.ambientTextureImpactOnAnalyticalLights,
            set: (BB, IB) => {
              BB.ambientTextureImpactOnAnalyticalLights = IB
            }
          },
          metadata: IB
        }, kT, cT), (0, OB.j)(BB, null, PI, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "opacityTexture" in BB,
            get: BB => BB.opacityTexture,
            set: (BB, IB) => {
              BB.opacityTexture = IB
            }
          },
          metadata: IB
        }, nT, hT), (0, OB.j)(BB, null, RI, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectionTexture" in BB,
            get: BB => BB.reflectionTexture,
            set: (BB, IB) => {
              BB.reflectionTexture = IB
            }
          },
          metadata: IB
        }, zT, FT), (0, OB.j)(BB, null, rI, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "emissiveTexture" in BB,
            get: BB => BB.emissiveTexture,
            set: (BB, IB) => {
              BB.emissiveTexture = IB
            }
          },
          metadata: IB
        }, NT, gT), (0, OB.j)(BB, null, mI, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectivityTexture" in BB,
            get: BB => BB.reflectivityTexture,
            set: (BB, IB) => {
              BB.reflectivityTexture = IB
            }
          },
          metadata: IB
        }, qT, yT), (0, OB.j)(BB, null, XI, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallicTexture" in BB,
            get: BB => BB.metallicTexture,
            set: (BB, IB) => {
              BB.metallicTexture = IB
            }
          },
          metadata: IB
        }, UT, WT), (0, OB.j)(BB, null, LI, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallic" in BB,
            get: BB => BB.metallic,
            set: (BB, IB) => {
              BB.metallic = IB
            }
          },
          metadata: IB
        }, dT, CT), (0, OB.j)(BB, null, eI, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "roughness" in BB,
            get: BB => BB.roughness,
            set: (BB, IB) => {
              BB.roughness = IB
            }
          },
          metadata: IB
        }, QT, sT), (0, OB.j)(BB, null, uI, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallicF0Factor" in BB,
            get: BB => BB.metallicF0Factor,
            set: (BB, IB) => {
              BB.metallicF0Factor = IB
            }
          },
          metadata: IB
        }, wT, OT), (0, OB.j)(BB, null, fI, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallicReflectanceColor" in BB,
            get: BB => BB.metallicReflectanceColor,
            set: (BB, IB) => {
              BB.metallicReflectanceColor = IB
            }
          },
          metadata: IB
        }, YT, iT), (0, OB.j)(BB, null, lI, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useOnlyMetallicFromMetallicReflectanceTexture" in BB,
            get: BB => BB.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (BB, IB) => {
              BB.useOnlyMetallicFromMetallicReflectanceTexture = IB
            }
          },
          metadata: IB
        }, pT, aT), (0, OB.j)(BB, null, AI, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallicReflectanceTexture" in BB,
            get: BB => BB.metallicReflectanceTexture,
            set: (BB, IB) => {
              BB.metallicReflectanceTexture = IB
            }
          },
          metadata: IB
        }, HT, MT), (0, OB.j)(BB, null, tI, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectanceTexture" in BB,
            get: BB => BB.reflectanceTexture,
            set: (BB, IB) => {
              BB.reflectanceTexture = IB
            }
          },
          metadata: IB
        }, jT, PT), (0, OB.j)(BB, null, bI, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "microSurfaceTexture" in BB,
            get: BB => BB.microSurfaceTexture,
            set: (BB, IB) => {
              BB.microSurfaceTexture = IB
            }
          },
          metadata: IB
        }, RT, rT), (0, OB.j)(BB, null, xI, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "bumpTexture" in BB,
            get: BB => BB.bumpTexture,
            set: (BB, IB) => {
              BB.bumpTexture = IB
            }
          },
          metadata: IB
        }, mT, XT), (0, OB.j)(BB, null, EI, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "lightmapTexture" in BB,
            get: BB => BB.lightmapTexture,
            set: (BB, IB) => {
              BB.lightmapTexture = IB
            }
          },
          metadata: IB
        }, LT, eT), (0, OB.j)(BB, null, DI, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "ambientColor" in BB,
            get: BB => BB.ambientColor,
            set: (BB, IB) => {
              BB.ambientColor = IB
            }
          },
          metadata: IB
        }, uT, fT), (0, OB.j)(BB, null, KI, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "albedoColor" in BB,
            get: BB => BB.albedoColor,
            set: (BB, IB) => {
              BB.albedoColor = IB
            }
          },
          metadata: IB
        }, lT, AT), (0, OB.j)(BB, null, VI, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseWeight" in BB,
            get: BB => BB.baseWeight,
            set: (BB, IB) => {
              BB.baseWeight = IB
            }
          },
          metadata: IB
        }, tT, bT), (0, OB.j)(BB, null, SI, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseDiffuseRoughness" in BB,
            get: BB => BB.baseDiffuseRoughness,
            set: (BB, IB) => {
              BB.baseDiffuseRoughness = IB
            }
          },
          metadata: IB
        }, xT, ET), (0, OB.j)(BB, null, BZ, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectivityColor" in BB,
            get: BB => BB.reflectivityColor,
            set: (BB, IB) => {
              BB.reflectivityColor = IB
            }
          },
          metadata: IB
        }, DT, KT), (0, OB.j)(BB, null, IZ, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectionColor" in BB,
            get: BB => BB.reflectionColor,
            set: (BB, IB) => {
              BB.reflectionColor = IB
            }
          },
          metadata: IB
        }, VT, ST), (0, OB.j)(BB, null, ZZ, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "emissiveColor" in BB,
            get: BB => BB.emissiveColor,
            set: (BB, IB) => {
              BB.emissiveColor = IB
            }
          },
          metadata: IB
        }, BJ, IJ), (0, OB.j)(BB, null, TZ, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: BB => "microSurface" in BB,
            get: BB => BB.microSurface,
            set: (BB, IB) => {
              BB.microSurface = IB
            }
          },
          metadata: IB
        }, ZJ, TJ), (0, OB.j)(BB, null, JZ, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: BB => "useLightmapAsShadowmap" in BB,
            get: BB => BB.useLightmapAsShadowmap,
            set: (BB, IB) => {
              BB.useLightmapAsShadowmap = IB
            }
          },
          metadata: IB
        }, JJ, oJ), (0, OB.j)(BB, null, oZ, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAlphaFromAlbedoTexture" in BB,
            get: BB => BB.useAlphaFromAlbedoTexture,
            set: (BB, IB) => {
              BB.useAlphaFromAlbedoTexture = IB
            }
          },
          metadata: IB
        }, GJ, vJ), (0, OB.j)(BB, null, GZ, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: BB => "forceAlphaTest" in BB,
            get: BB => BB.forceAlphaTest,
            set: (BB, IB) => {
              BB.forceAlphaTest = IB
            }
          },
          metadata: IB
        }, kJ, cJ), (0, OB.j)(BB, null, vZ, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: BB => "alphaCutOff" in BB,
            get: BB => BB.alphaCutOff,
            set: (BB, IB) => {
              BB.alphaCutOff = IB
            }
          },
          metadata: IB
        }, nJ, hJ), (0, OB.j)(BB, null, kZ, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSpecularOverAlpha" in BB,
            get: BB => BB.useSpecularOverAlpha,
            set: (BB, IB) => {
              BB.useSpecularOverAlpha = IB
            }
          },
          metadata: IB
        }, zJ, FJ), (0, OB.j)(BB, null, cZ, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "useMicroSurfaceFromReflectivityMapAlpha" in BB,
            get: BB => BB.useMicroSurfaceFromReflectivityMapAlpha,
            set: (BB, IB) => {
              BB.useMicroSurfaceFromReflectivityMapAlpha = IB
            }
          },
          metadata: IB
        }, NJ, gJ), (0, OB.j)(BB, null, nZ, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRoughnessFromMetallicTextureAlpha" in BB,
            get: BB => BB.useRoughnessFromMetallicTextureAlpha,
            set: (BB, IB) => {
              BB.useRoughnessFromMetallicTextureAlpha = IB
            }
          },
          metadata: IB
        }, qJ, yJ), (0, OB.j)(BB, null, hZ, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRoughnessFromMetallicTextureGreen" in BB,
            get: BB => BB.useRoughnessFromMetallicTextureGreen,
            set: (BB, IB) => {
              BB.useRoughnessFromMetallicTextureGreen = IB
            }
          },
          metadata: IB
        }, UJ, WJ), (0, OB.j)(BB, null, zZ, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: BB => "useMetallnessFromMetallicTextureBlue" in BB,
            get: BB => BB.useMetallnessFromMetallicTextureBlue,
            set: (BB, IB) => {
              BB.useMetallnessFromMetallicTextureBlue = IB
            }
          },
          metadata: IB
        }, dJ, CJ), (0, OB.j)(BB, null, FZ, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAmbientOcclusionFromMetallicTextureRed" in BB,
            get: BB => BB.useAmbientOcclusionFromMetallicTextureRed,
            set: (BB, IB) => {
              BB.useAmbientOcclusionFromMetallicTextureRed = IB
            }
          },
          metadata: IB
        }, QJ, sJ), (0, OB.j)(BB, null, NZ, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAmbientInGrayScale" in BB,
            get: BB => BB.useAmbientInGrayScale,
            set: (BB, IB) => {
              BB.useAmbientInGrayScale = IB
            }
          },
          metadata: IB
        }, wJ, OJ), (0, OB.j)(BB, null, gZ, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAutoMicroSurfaceFromReflectivityMap" in BB,
            get: BB => BB.useAutoMicroSurfaceFromReflectivityMap,
            set: (BB, IB) => {
              BB.useAutoMicroSurfaceFromReflectivityMap = IB
            }
          },
          metadata: IB
        }, YJ, iJ), (0, OB.j)(BB, null, qZ, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: BB => "usePhysicalLightFalloff" in BB,
            get: BB => BB.usePhysicalLightFalloff
          },
          metadata: IB
        }, null, eZ), (0, OB.j)(BB, null, yZ, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: BB => "useGLTFLightFalloff" in BB,
            get: BB => BB.useGLTFLightFalloff
          },
          metadata: IB
        }, null, eZ), (0, OB.j)(BB, null, UZ, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRadianceOverAlpha" in BB,
            get: BB => BB.useRadianceOverAlpha,
            set: (BB, IB) => {
              BB.useRadianceOverAlpha = IB
            }
          },
          metadata: IB
        }, pJ, aJ), (0, OB.j)(BB, null, WZ, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: BB => "useObjectSpaceNormalMap" in BB,
            get: BB => BB.useObjectSpaceNormalMap,
            set: (BB, IB) => {
              BB.useObjectSpaceNormalMap = IB
            }
          },
          metadata: IB
        }, HJ, MJ), (0, OB.j)(BB, null, dZ, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: BB => "useParallax" in BB,
            get: BB => BB.useParallax,
            set: (BB, IB) => {
              BB.useParallax = IB
            }
          },
          metadata: IB
        }, jJ, PJ), (0, OB.j)(BB, null, CZ, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: BB => "useParallaxOcclusion" in BB,
            get: BB => BB.useParallaxOcclusion,
            set: (BB, IB) => {
              BB.useParallaxOcclusion = IB
            }
          },
          metadata: IB
        }, RJ, rJ), (0, OB.j)(BB, null, QZ, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: BB => "parallaxScaleBias" in BB,
            get: BB => BB.parallaxScaleBias,
            set: (BB, IB) => {
              BB.parallaxScaleBias = IB
            }
          },
          metadata: IB
        }, mJ, XJ), (0, OB.j)(BB, null, sZ, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: BB => "disableLighting" in BB,
            get: BB => BB.disableLighting,
            set: (BB, IB) => {
              BB.disableLighting = IB
            }
          },
          metadata: IB
        }, LJ, eJ), (0, OB.j)(BB, null, wZ, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: BB => "forceIrradianceInFragment" in BB,
            get: BB => BB.forceIrradianceInFragment,
            set: (BB, IB) => {
              BB.forceIrradianceInFragment = IB
            }
          },
          metadata: IB
        }, uJ, fJ), (0, OB.j)(BB, null, OZ, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: BB => "maxSimultaneousLights" in BB,
            get: BB => BB.maxSimultaneousLights,
            set: (BB, IB) => {
              BB.maxSimultaneousLights = IB
            }
          },
          metadata: IB
        }, lJ, AJ), (0, OB.j)(BB, null, YZ, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: BB => "invertNormalMapX" in BB,
            get: BB => BB.invertNormalMapX,
            set: (BB, IB) => {
              BB.invertNormalMapX = IB
            }
          },
          metadata: IB
        }, tJ, bJ), (0, OB.j)(BB, null, iZ, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: BB => "invertNormalMapY" in BB,
            get: BB => BB.invertNormalMapY,
            set: (BB, IB) => {
              BB.invertNormalMapY = IB
            }
          },
          metadata: IB
        }, xJ, EJ), (0, OB.j)(BB, null, pZ, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: BB => "twoSidedLighting" in BB,
            get: BB => BB.twoSidedLighting,
            set: (BB, IB) => {
              BB.twoSidedLighting = IB
            }
          },
          metadata: IB
        }, DJ, KJ), (0, OB.j)(BB, null, aZ, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAlphaFresnel" in BB,
            get: BB => BB.useAlphaFresnel,
            set: (BB, IB) => {
              BB.useAlphaFresnel = IB
            }
          },
          metadata: IB
        }, VJ, SJ), (0, OB.j)(BB, null, HZ, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: BB => "useLinearAlphaFresnel" in BB,
            get: BB => BB.useLinearAlphaFresnel,
            set: (BB, IB) => {
              BB.useLinearAlphaFresnel = IB
            }
          },
          metadata: IB
        }, Bo, Io), (0, OB.j)(BB, null, MZ, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "environmentBRDFTexture" in BB,
            get: BB => BB.environmentBRDFTexture,
            set: (BB, IB) => {
              BB.environmentBRDFTexture = IB
            }
          },
          metadata: IB
        }, Zo, To), (0, OB.j)(BB, null, jZ, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: BB => "forceNormalForward" in BB,
            get: BB => BB.forceNormalForward,
            set: (BB, IB) => {
              BB.forceNormalForward = IB
            }
          },
          metadata: IB
        }, Jo, oo), (0, OB.j)(BB, null, PZ, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: BB => "enableSpecularAntiAliasing" in BB,
            get: BB => BB.enableSpecularAntiAliasing,
            set: (BB, IB) => {
              BB.enableSpecularAntiAliasing = IB
            }
          },
          metadata: IB
        }, Go, vo), (0, OB.j)(BB, null, RZ, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: BB => "useHorizonOcclusion" in BB,
            get: BB => BB.useHorizonOcclusion,
            set: (BB, IB) => {
              BB.useHorizonOcclusion = IB
            }
          },
          metadata: IB
        }, ko, co), (0, OB.j)(BB, null, rZ, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRadianceOcclusion" in BB,
            get: BB => BB.useRadianceOcclusion,
            set: (BB, IB) => {
              BB.useRadianceOcclusion = IB
            }
          },
          metadata: IB
        }, no, ho), (0, OB.j)(BB, null, mZ, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: BB => "unlit" in BB,
            get: BB => BB.unlit,
            set: (BB, IB) => {
              BB.unlit = IB
            }
          },
          metadata: IB
        }, zo, Fo), (0, OB.j)(BB, null, XZ, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: BB => "applyDecalMapAfterDetailMap" in BB,
            get: BB => BB.applyDecalMapAfterDetailMap,
            set: (BB, IB) => {
              BB.applyDecalMapAfterDetailMap = IB
            }
          },
          metadata: IB
        }, No, go), IB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IB
        })
      })(), BB.PBRMATERIAL_OPAQUE = QI.PBRMATERIAL_OPAQUE, BB.PBRMATERIAL_ALPHATEST = QI.PBRMATERIAL_ALPHATEST, BB.PBRMATERIAL_ALPHABLEND = QI.PBRMATERIAL_ALPHABLEND, BB.PBRMATERIAL_ALPHATESTANDBLEND = QI.PBRMATERIAL_ALPHATESTANDBLEND, BB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = QI.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, BB
    })();
    const rJ = "KHR_materials_diffuse_transmission";

    function mJ(BB, IB) {
      const ZB = IB.subSurface;
      let TB = null;
      return ZB.translucencyIntensityTexture ? TB = ZB.translucencyIntensityTexture : ZB.thicknessTexture && ZB.useMaskFromThicknessTexture && (TB = ZB.thicknessTexture), TB && !ZB.useGltfStyleTextures ? (iB.d.Warn(`${BB}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${IB.name}`, 1), null) : TB
    }
    class XJ {
      constructor(BB) {
        this.name = rJ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, IB, ZB) {
        const TB = [];
        if (ZB instanceof RJ && this._isExtensionEnabled(ZB)) {
          const IB = mJ(BB, ZB);
          return IB && TB.push(IB), ZB.subSurface.translucencyColorTexture && TB.push(ZB.subSurface.translucencyColorTexture), TB
        }
        return TB
      }
      _isExtensionEnabled(BB) {
        if (BB.unlit) return !1;
        const IB = BB.subSurface;
        return !!IB.isTranslucencyEnabled && (!BB.unlit && !IB.useAlbedoToTintTranslucency && IB.useGltfStyleTextures && 1 === IB.volumeIndexOfRefraction && 0 === IB.minimumThickness && 0 === IB.maximumThickness)
      }
      postExportMaterialAsync(BB, IB, ZB) {
        return new Promise((TB => {
          if (ZB instanceof RJ && this._isExtensionEnabled(ZB)) {
            this._wasUsed = !0;
            const TB = ZB.subSurface,
              JB = mJ(BB, ZB),
              oB = 0 == TB.translucencyIntensity ? void 0 : TB.translucencyIntensity,
              GB = this._exporter._materialExporter.getTextureInfo(JB) ?? void 0,
              vB = !TB.translucencyColor || TB.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : TB.translucencyColor.HTB(),
              kB = this._exporter._materialExporter.getTextureInfo(TB.translucencyColorTexture) ?? void 0,
              cB = {
                diffuseTransmissionFactor: oB,
                diffuseTransmissionTexture: GB,
                diffuseTransmissionColorFactor: vB,
                diffuseTransmissionColorTexture: kB
              };
            (GB || kB) && this._exporter._materialNeedsUVsSet.add(ZB), IB.extensions = IB.extensions || {}, IB.extensions[rJ] = cB
          }
          TB(IB)
        }))
      }
    }
    let LJ = !1;

    function eJ() {
      LJ || (LJ = !0, PT.RegisterExtension(rJ, (BB => new XJ(BB))))
    }
    eJ();
    const uJ = "KHR_materials_dispersion";
    class fJ {
      constructor() {
        this.name = uJ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(BB) {
        if (BB.unlit) return !1;
        const IB = BB.subSurface;
        return !(!IB.isRefractionEnabled && !IB.isDispersionEnabled)
      }
      postExportMaterialAsync(BB, IB, ZB) {
        return new Promise((BB => {
          if (ZB instanceof RJ && this._isExtensionEnabled(ZB)) {
            this._wasUsed = !0;
            const BB = {
              dispersion: ZB.subSurface.dispersion
            };
            IB.extensions = IB.extensions || {}, IB.extensions[uJ] = BB
          }
          BB(IB)
        }))
      }
    }
    let lJ = !1;

    function AJ() {
      lJ || (lJ = !0, PT.RegisterExtension(uJ, (() => new fJ)))
    }
    AJ();
    const tJ = "KHR_materials_emissive_strength";
    class bJ {
      constructor() {
        this.name = tJ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(BB, IB, ZB) {
        return await new Promise((BB => {
          if (!(ZB instanceof RJ)) return BB(IB);
          const TB = ZB.emissiveColor.scale(ZB.emissiveIntensity),
            JB = Math.max(...TB.HTB());
          if (JB > 1) {
            IB.emissiveFactor = TB.scale(1 / JB).HTB(), this._wasUsed = !0;
            const BB = {
              emissiveStrength: JB
            };
            IB.extensions || (IB.extensions = {}), IB.extensions[tJ] = BB
          } else IB.emissiveFactor = TB.HTB();
          return BB(IB)
        }))
      }
    }
    let xJ = !1;

    function EJ() {
      xJ || (xJ = !0, PT.RegisterExtension(tJ, (() => new bJ)))
    }
    EJ();
    const DJ = "KHR_materials_ior";
    class KJ {
      constructor() {
        this.name = DJ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(BB) {
        return !BB.unlit && (BB instanceof VI ? 1.5 != BB.specularIor : BB instanceof RJ && (void 0 != BB.indexOfRefraction && 1.5 != BB.indexOfRefraction))
      }
      postExportMaterialAsync(BB, IB, ZB) {
        return new Promise((BB => {
          if (ZB instanceof RJ && this._isExtensionEnabled(ZB)) {
            this._wasUsed = !0;
            const BB = {
              ior: ZB.indexOfRefraction
            };
            IB.extensions = IB.extensions || {}, IB.extensions[DJ] = BB
          } else if (ZB instanceof VI && this._isExtensionEnabled(ZB)) {
            this._wasUsed = !0;
            const BB = {
              ior: ZB.specularIor
            };
            IB.extensions = IB.extensions || {}, IB.extensions[DJ] = BB
          }
          BB(IB)
        }))
      }
    }
    let VJ = !1;

    function SJ() {
      VJ || (VJ = !0, PT.RegisterExtension(DJ, (() => new KJ)))
    }
    SJ();
    const Bo = "KHR_materials_iridescence";
    class Io {
      constructor(BB) {
        this.name = Bo, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, IB, ZB) {
        const TB = [];
        if (ZB instanceof QI) {
          if (ZB.iridescence.isEnabled) return ZB.iridescence.texture && TB.push(ZB.iridescence.texture), ZB.iridescence.thicknessTexture && ZB.iridescence.thicknessTexture !== ZB.iridescence.texture && TB.push(ZB.iridescence.thicknessTexture), TB
        } else if (ZB instanceof VI && ZB.thinFilmWeight > 0) return ZB.thinFilmWeightTexture && TB.push(ZB.thinFilmWeightTexture), ZB.thinFilmThicknessTexture && ZB.thinFilmThicknessTexture !== ZB.thinFilmWeightTexture && TB.push(ZB.thinFilmThicknessTexture), TB;
        return []
      }
      postExportMaterialAsync(BB, IB, ZB) {
        return new Promise((BB => {
          if (ZB instanceof QI) {
            if (!ZB.iridescence.isEnabled) return void BB(IB);
            this._wasUsed = !0, IB.extensions = IB.extensions || {};
            const TB = this._exporter._materialExporter.getTextureInfo(ZB.iridescence.texture),
              JB = this._exporter._materialExporter.getTextureInfo(ZB.iridescence.thicknessTexture),
              oB = {
                iridescenceFactor: ZB.iridescence.intensity,
                iridescenceIor: ZB.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: ZB.iridescence.minimumThickness,
                iridescenceThicknessMaximum: ZB.iridescence.maximumThickness,
                iridescenceTexture: TB ?? void 0,
                iridescenceThicknessTexture: JB ?? void 0
              };
            null === oB.iridescenceTexture && null === oB.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(ZB), IB.extensions[Bo] = oB
          } else if (ZB instanceof VI) {
            if (ZB.thinFilmWeight <= 0) return void BB(IB);
            this._wasUsed = !0, IB.extensions = IB.extensions || {};
            const TB = this._exporter._materialExporter.getTextureInfo(ZB.thinFilmWeightTexture),
              JB = this._exporter._materialExporter.getTextureInfo(ZB.thinFilmThicknessTexture),
              oB = {
                iridescenceFactor: ZB.thinFilmWeight,
                iridescenceIor: ZB.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * ZB.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * ZB.thinFilmThickness,
                iridescenceTexture: TB ?? void 0,
                iridescenceThicknessTexture: JB ?? void 0
              };
            null === oB.iridescenceTexture && null === oB.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(ZB), IB.extensions[Bo] = oB
          }
          BB(IB)
        }))
      }
    }
    let Zo = !1;

    function To() {
      Zo || (Zo = !0, PT.RegisterExtension(Bo, (BB => new Io(BB))))
    }
    To();
    const Jo = "KHR_materials_sheen";
    class oo {
      constructor(BB) {
        this.name = Jo, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, IB, ZB) {
        return ZB instanceof RJ && ZB.sheen.isEnabled && ZB.sheen.texture ? [ZB.sheen.texture] : []
      }
      async postExportMaterialAsync(BB, IB, ZB) {
        return await new Promise((BB => {
          if (ZB instanceof RJ) {
            if (!ZB.sheen.isEnabled) return void BB(IB);
            this._wasUsed = !0, null == IB.extensions && (IB.extensions = {});
            const TB = {
              sheenColorFactor: ZB.sheen.color.HTB(),
              sheenRoughnessFactor: ZB.sheen.roughness ?? 0
            };
            null === TB.sheenColorTexture && null === TB.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ZB), ZB.sheen.texture && (TB.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(ZB.sheen.texture) ?? void 0), ZB.sheen.textureRoughness && !ZB.sheen.useRoughnessFromMainTexture ? TB.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ZB.sheen.textureRoughness) ?? void 0 : ZB.sheen.texture && ZB.sheen.useRoughnessFromMainTexture && (TB.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ZB.sheen.texture) ?? void 0), IB.extensions[Jo] = TB
          }
          BB(IB)
        }))
      }
    }
    let Go = !1;

    function vo() {
      Go || (Go = !0, PT.RegisterExtension(Jo, (BB => new oo(BB))))
    }
    vo();
    const ko = "KHR_materials_fuzz";

    function co(BB, IB) {
      const ZB = new aB.e(IB.name, IB.JR());
      return ZB._texture = BB, ZB.coordinatesIndex = IB.coordinatesIndex, IB instanceof aB.e && (ZB.uOffset = IB.uOffset, ZB.vOffset = IB.vOffset, ZB.uScale = IB.uScale, ZB.vScale = IB.vScale, ZB.wAng = IB.wAng), ZB.wrapU = IB.wrapU, ZB.wrapV = IB.wrapV, ZB
    }
    class no {
      constructor(BB) {
        this.name = ko, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = BB
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
      async postExportMaterialAdditionalTexturesAsync(BB, IB, ZB) {
        if (ZB instanceof VI) {
          const BB = [];
          if (ZB.fuzzWeight > 0) {
            ZB.fuzzWeightTexture && BB.push(ZB.fuzzWeightTexture);
            let IB = !1;
            if (ZB.fuzzRoughnessTexture && (ZB._useFuzzRoughnessFromTextureAlpha ? BB.push(ZB.fuzzRoughnessTexture) : IB = !0), ZB.fuzzColorTexture && !IB && BB.push(ZB.fuzzColorTexture), IB) {
              const IB = function(BB) {
                const IB = BB.fuzzColorTexture,
                  ZB = IB && IB.getInternalTexture() ? IB.getInternalTexture().uniqueId : "NoFuzzColor",
                  TB = BB.fuzzRoughnessTexture;
                return `FuzzColor_${ZB}_FuzzRoughness_${TB&&TB.getInternalTexture()?TB.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(ZB);
              if (!this._cachedInternalTexturesMap[IB]) {
                const BB = await async function(BB) {
                  const IB = BB.JR(),
                    ZB = BB.fuzzColorTexture,
                    TB = BB.fuzzRoughnessTexture;
                  return ZB || TB ? (await GZ("FuzzTexture", cZ(ZB ? vZ(ZB, 0) : kZ(1), ZB ? vZ(ZB, 1) : kZ(1), ZB ? vZ(ZB, 2) : kZ(1), TB ? vZ(TB, BB._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : kZ(1)), IB)).getInternalTexture() : null
                }(ZB);
                BB && (this._cachedInternalTexturesMap[IB] = BB)
              }
              this._cachedInternalTexturesMap[IB] && (ZB.fuzzColorTexture && (this._mergedTexturesMap[ZB.fuzzColorTexture.uniqueId] = co(this._cachedInternalTexturesMap[IB], ZB.fuzzColorTexture), BB.push(this._mergedTexturesMap[ZB.fuzzColorTexture.uniqueId])), ZB.fuzzRoughnessTexture && (this._mergedTexturesMap[ZB.fuzzRoughnessTexture.uniqueId] = co(this._cachedInternalTexturesMap[IB], ZB.fuzzRoughnessTexture), BB.push(this._mergedTexturesMap[ZB.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return BB
        }
        return []
      }
      async postExportMaterialAsync(BB, IB, ZB) {
        return await new Promise((BB => {
          if (ZB instanceof VI) {
            if (0 == ZB.fuzzWeight) return void BB(IB);
            this._wasUsed = !0, null == IB.extensions && (IB.extensions = {});
            const TB = {
              fuzzFactor: ZB.fuzzWeight,
              fuzzColorFactor: ZB.fuzzColor.HTB(),
              fuzzRoughnessFactor: ZB.fuzzRoughness
            };
            let JB, oB;
            ZB.fuzzWeightTexture && (TB.fuzzTexture = this._exporter._materialExporter.getTextureInfo(ZB.fuzzWeightTexture) ?? void 0), ZB.fuzzColorTexture && (JB = this._mergedTexturesMap[ZB.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[ZB.fuzzColorTexture.uniqueId] : ZB.fuzzColorTexture, TB.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(JB) ?? void 0), ZB.fuzzRoughnessTexture && (oB = this._mergedTexturesMap[ZB.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[ZB.fuzzRoughnessTexture.uniqueId] : ZB.fuzzRoughnessTexture, TB.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(oB) ?? void 0), null === TB.fuzzColorTexture && null === TB.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ZB), IB.extensions[ko] = TB
          }
          BB(IB)
        }))
      }
    }
    let ho = !1;

    function zo() {
      ho || (ho = !0, PT.RegisterExtension(ko, (BB => new no(BB))))
    }
    zo();
    const Fo = "KHR_materials_specular";
    class No {
      constructor(BB) {
        this.name = Fo, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, IB, ZB) {
        const TB = [];
        return ZB instanceof RJ && this._isExtensionEnabled(ZB) ? (ZB.metallicReflectanceTexture && TB.push(ZB.metallicReflectanceTexture), ZB.reflectanceTexture && TB.push(ZB.reflectanceTexture), TB) : TB
      }
      _isExtensionEnabled(BB) {
        return !BB.unlit && (void 0 != BB.metallicF0Factor && 1 != BB.metallicF0Factor || void 0 != BB.metallicReflectanceColor && !BB.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(BB))
      }
      _hasTexturesExtension(BB) {
        return null != BB.metallicReflectanceTexture || null != BB.reflectanceTexture
      }
      postExportMaterialAsync(BB, IB, ZB) {
        return new Promise((BB => {
          var TB;
          if (ZB instanceof RJ && this._isExtensionEnabled(ZB)) {
            this._wasUsed = !0, IB.extensions = IB.extensions || {};
            const BB = this._exporter._materialExporter.getTextureInfo(ZB.metallicReflectanceTexture) ?? void 0,
              TB = this._exporter._materialExporter.getTextureInfo(ZB.reflectanceTexture) ?? void 0,
              JB = {
                specularFactor: 1 == ZB.metallicF0Factor ? void 0 : ZB.metallicF0Factor,
                specularTexture: BB,
                specularColorFactor: ZB.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : ZB.metallicReflectanceColor.HTB(),
                specularColorTexture: TB
              };
            this._hasTexturesExtension(ZB) && this._exporter._materialNeedsUVsSet.add(ZB), IB.extensions[Fo] = JB
          } else if (ZB instanceof VI) {
            IB.extensions = IB.extensions || {};
            const JB = this._exporter._materialExporter.getTextureInfo(ZB.specularWeightTexture) ?? void 0,
              oB = this._exporter._materialExporter.getTextureInfo(ZB.specularColorTexture) ?? void 0,
              GB = 1 == ZB.specularWeight ? void 0 : ZB.specularWeight,
              vB = ZB.specularColor.equalsFloats(1, 1, 1) ? void 0 : ZB.specularColor.HTB();
            if (!oB && !JB && void 0 === GB && void 0 === vB) return BB(IB);
            this._wasUsed = !0;
            const kB = {
                specularEdgeColorEnabled: !0
              },
              cB = {
                specularFactor: GB,
                specularTexture: JB,
                specularColorFactor: vB,
                specularColorTexture: oB,
                extensions: {}
              };
            cB.extensions.EXT_materials_specular_edge_color = kB, (TB = this._exporter._glTF).extensionsUsed || (TB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (JB || oB) && this._exporter._materialNeedsUVsSet.add(ZB), IB.extensions[Fo] = cB
          }
          BB(IB)
        }))
      }
    }
    let go = !1;

    function qo() {
      go || (go = !0, PT.RegisterExtension(Fo, (BB => new No(BB))))
    }
    qo();
    const yo = "KHR_materials_transmission";
    class Uo {
      constructor(BB) {
        this.name = yo, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, IB, ZB) {
        const TB = [];
        if (ZB instanceof RJ) {
          if (this._isExtensionEnabled(ZB)) return ZB.subSurface.refractionIntensityTexture && ZB.subSurface.useGltfStyleTextures && TB.push(ZB.subSurface.refractionIntensityTexture), TB
        } else ZB instanceof VI && (ZB.transmissionWeight > 0 && ZB.transmissionWeightTexture && (TB.push(ZB.transmissionWeightTexture), ZB.transmissionColorTexture && TB.push(ZB.transmissionColorTexture)), ZB.subsurfaceWeight > 0 && ZB.subsurfaceWeightTexture && TB.push(ZB.subsurfaceWeightTexture));
        return TB
      }
      _isExtensionEnabled(BB) {
        if (BB instanceof VI && !BB.unlit) return BB.transmissionWeight > 0 || BB.subsurfaceWeight > 0;
        if (BB instanceof RJ && !BB.unlit) {
          const IB = BB.subSurface;
          return IB.isRefractionEnabled && void 0 != IB.refractionIntensity && 0 != IB.refractionIntensity || null != IB.refractionIntensityTexture && IB.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(BB, IB, ZB) {
        if (!this._isExtensionEnabled(ZB)) return IB;
        if (ZB instanceof RJ) {
          this._wasUsed = !0;
          const TB = ZB.subSurface,
            JB = {
              transmissionFactor: 0 === TB.refractionIntensity ? void 0 : TB.refractionIntensity
            };
          if (TB.refractionIntensityTexture)
            if (TB.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(ZB);
              const BB = this._exporter._materialExporter.getTextureInfo(TB.refractionIntensityTexture);
              BB && (JB.transmissionTexture = BB)
            } else iB.d.Warn(`${BB}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          IB.extensions || (IB.extensions = {}), IB.extensions[yo] = JB
        } else if (ZB instanceof VI) {
          this._wasUsed = !0;
          const BB = {
            transmissionFactor: (1 - ZB.transmissionWeight) * ZB.subsurfaceWeight + ZB.transmissionWeight
          };
          if (ZB.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(ZB);
            const IB = this._exporter._materialExporter.getTextureInfo(ZB.transmissionWeightTexture);
            IB && (BB.transmissionTexture = IB)
          } else if (ZB.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(ZB);
            const IB = this._exporter._materialExporter.getTextureInfo(ZB.subsurfaceWeightTexture);
            IB && (BB.transmissionTexture = IB)
          }
          if (0 == ZB.transmissionDepth && (!ZB.transmissionColor.equals(tB.c.White()) || ZB.transmissionColorTexture) && IB.pbrMetallicRoughness && (IB.pbrMetallicRoughness.baseColorFactor || (IB.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), IB.pbrMetallicRoughness.baseColorFactor[0] *= ZB.transmissionColor.r, IB.pbrMetallicRoughness.baseColorFactor[1] *= ZB.transmissionColor.g, IB.pbrMetallicRoughness.baseColorFactor[2] *= ZB.transmissionColor.b, ZB.transmissionColorTexture && !IB.pbrMetallicRoughness.baseColorTexture)) {
            const BB = this._exporter._materialExporter.getTextureInfo(ZB.transmissionColorTexture);
            BB && (IB.pbrMetallicRoughness.baseColorTexture = BB, this._exporter._materialNeedsUVsSet.add(ZB))
          }
          IB.extensions || (IB.extensions = {}), IB.extensions[yo] = BB
        }
        return IB
      }
    }
    let Wo = !1;

    function Co() {
      Wo || (Wo = !0, PT.RegisterExtension(yo, (BB => new Uo(BB))))
    }
    Co();
    var Qo = ZB(40322);
    const so = "KHR_materials_unlit";
    class wo {
      constructor() {
        this.name = so, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(BB, IB, ZB) {
        return new Promise((BB => {
          let TB = !1;
          ZB instanceof RJ ? TB = ZB.unlit : ZB instanceof Qo.f && (TB = ZB.disableLighting), TB && (this._wasUsed = !0, null == IB.extensions && (IB.extensions = {}), IB.extensions[so] = {}), BB(IB)
        }))
      }
    }
    let Oo = !1;

    function Yo() {
      Oo || (Oo = !0, PT.RegisterExtension(so, (() => new wo)))
    }
    Yo();
    const io = "KHR_materials_volume";
    class po {
      constructor(BB) {
        this.name = io, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, IB, ZB) {
        const TB = [];
        if (ZB instanceof RJ) {
          if (this._isExtensionEnabled(ZB)) return ZB.subSurface.thicknessTexture && TB.push(ZB.subSurface.thicknessTexture), TB
        } else ZB instanceof VI && (ZB.transmissionWeight > 0 || ZB.subsurfaceWeight > 0) && ZB.geometryThicknessTexture && TB.push(ZB.geometryThicknessTexture);
        return TB
      }
      _isExtensionEnabled(BB) {
        if (BB.unlit) return !1;
        const IB = BB.subSurface;
        return !(!IB.isRefractionEnabled && !IB.isTranslucencyEnabled) && (void 0 != IB.maximumThickness && 0 != IB.maximumThickness || void 0 != IB.tintColorAtDistance && IB.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != IB.tintColor && IB.tintColor != tB.c.White() || this._hasTexturesExtension(BB))
      }
      _hasTexturesExtension(BB) {
        return null != BB.subSurface.thicknessTexture
      }
      postExportMaterialAsync(BB, IB, ZB) {
        return new Promise((BB => {
          if (ZB instanceof RJ && this._isExtensionEnabled(ZB)) {
            this._wasUsed = !0;
            const BB = ZB.subSurface,
              TB = {
                thicknessFactor: 0 == BB.maximumThickness ? void 0 : BB.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(BB.thicknessTexture) ?? void 0,
                attenuationDistance: BB.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : BB.tintColorAtDistance,
                attenuationColor: BB.tintColor.equalsFloats(1, 1, 1) ? void 0 : BB.tintColor.HTB()
              };
            this._hasTexturesExtension(ZB) && this._exporter._materialNeedsUVsSet.add(ZB), IB.extensions = IB.extensions || {}, IB.extensions[io] = TB
          } else if (ZB instanceof VI) {
            const BB = ZB.transmissionWeight > 0 && !ZB.geometryThinWalled,
              TB = ZB.subsurfaceWeight > 0 && !ZB.geometryThinWalled;
            if (BB || TB) {
              this._wasUsed = !0;
              const JB = ZB.geometryThickness,
                oB = this._exporter._materialExporter.getTextureInfo(ZB.geometryThicknessTexture) ?? void 0;
              let GB;
              oB && this._exporter._materialNeedsUVsSet.add(ZB);
              const vB = tB.c.White().HTB();
              if (BB && ZB.transmissionDepth > 0) {
                const BB = 1 / ZB.transmissionDepth;
                let IB = new XB.s(-Math.log(ZB.transmissionColor.r) * BB, -Math.log(ZB.transmissionColor.g) * BB, -Math.log(ZB.transmissionColor.b) * BB);
                const TB = new XB.s(ZB.transmissionScatter.r * BB, ZB.transmissionScatter.g * BB, ZB.transmissionScatter.b * BB),
                  JB = IB.subtract(TB),
                  oB = Math.min(JB.x, JB.y, JB.z);
                oB < 0 && (JB.x = JB.x - oB, JB.y = JB.y - oB, JB.z = JB.z - oB), IB = JB.add(TB);
                GB = 1 / Math.max(IB.x, IB.y, IB.z), vB[0] = Math.exp(-IB.x * GB), vB[1] = Math.exp(-IB.y * GB), vB[2] = Math.exp(-IB.z * GB)
              } else GB = Number.MAX_VALUE, vB[0] = 1, vB[1] = 1, vB[2] = 1;
              let kB = 1;
              const cB = tB.c.White().HTB();
              if (TB) {
                const BB = ZB.subsurfaceRadius,
                  IB = ZB.subsurfaceRadiusScale,
                  TB = new XB.s(IB.r, IB.g, IB.b).multiplyByFloats(BB, BB, BB),
                  JB = new XB.s(1 / Math.max(TB.x, 1e-6), 1 / Math.max(TB.y, 1e-6), 1 / Math.max(TB.z, 1e-6));
                kB = 1 / Math.max(JB.x, JB.y, JB.z), cB[0] = Math.exp(-JB.x * kB), cB[1] = Math.exp(-JB.y * kB), cB[2] = Math.exp(-JB.z * kB)
              }
              const nB = (1 - ZB.transmissionWeight) * ZB.subsurfaceWeight,
                hB = nB + ZB.transmissionWeight,
                zB = 1 / Math.max(hB, 1e-6),
                FB = ZB.transmissionWeight * zB,
                NB = nB * zB,
                gB = vB.map(((BB, IB) => BB * FB + cB[IB] * NB)),
                qB = {
                  thicknessFactor: JB,
                  thicknessTexture: oB,
                  attenuationDistance: GB * FB + kB * NB,
                  attenuationColor: gB
                };
              IB.extensions = IB.extensions || {}, IB.extensions[io] = qB
            }
          }
          BB(IB)
        }))
      }
    }
    let ao = !1;

    function Ho() {
      ao || (ao = !0, PT.RegisterExtension(io, (BB => new po(BB))))
    }
    Ho();
    const Mo = "KHR_materials_volume_scatter";
    class jo {
      constructor(BB) {
        this.name = Mo, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, IB, ZB) {
        const TB = [];
        return ZB instanceof VI && (ZB.transmissionWeight > 0 && ZB.transmissionScatterTexture && TB.push(ZB.transmissionScatterTexture), ZB.subsurfaceWeight > 0 && ZB.subsurfaceColorTexture && TB.push(ZB.subsurfaceColorTexture)), TB
      }
      _isExtensionEnabled(BB) {
        if (BB.unlit) return !1;
        const IB = BB.transmissionWeight > 0 && !BB.geometryThinWalled && BB.transmissionDepth > 0 && !BB.transmissionScatter.equals(tB.c.Black()),
          ZB = BB.subsurfaceWeight > 0 && !BB.geometryThinWalled;
        return !(!IB && !ZB)
      }
      postExportMaterialAsync(BB, IB, ZB) {
        return new Promise((BB => {
          if (ZB instanceof VI && this._isExtensionEnabled(ZB)) {
            this._wasUsed = !0;
            let BB = XB.s.Zero(),
              TB = 0;
            if (ZB.transmissionWeight > 0) {
              BB = function(BB) {
                const IB = new XB.s(Math.sqrt(1 - BB.x), Math.sqrt(1 - BB.y), Math.sqrt(1 - BB.z)),
                  ZB = new XB.s(1, 1, 1),
                  TB = ZB.subtract(IB),
                  JB = ZB.subtract(new XB.s(.139, .139, .139).multiplyInPlace(IB)),
                  oB = ZB.add(new XB.s(1.17, 1.17, 1.17).multiplyInPlace(IB));
                return TB.multiplyInPlace(JB).divideInPlace(oB)
              }(new XB.s(ZB.transmissionScatter.r, ZB.transmissionScatter.g, ZB.transmissionScatter.b)), TB = ZB.transmissionScatterAnisotropy
            }
            const JB = XB.s.Zero();
            let oB = 0;
            ZB.subsurfaceWeight > 0 && (JB.set(ZB.subsurfaceColor.r, ZB.subsurfaceColor.g, ZB.subsurfaceColor.b), oB = ZB.subsurfaceScatterAnisotropy);
            const GB = (1 - ZB.transmissionWeight) * ZB.subsurfaceWeight,
              vB = GB + ZB.transmissionWeight,
              kB = 1 / Math.max(vB, 1e-6),
              cB = ZB.transmissionWeight * kB,
              nB = GB * kB,
              hB = {
                multiscatterColorFactor: BB.multiplyByFloats(cB, cB, cB).addInPlace(JB.multiplyByFloats(nB, nB, nB)).HTB(),
                scatterAnisotropy: TB * cB + oB * nB
              };
            if (ZB.subsurfaceWeight > 0 && ZB.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(ZB);
              const BB = this._exporter._materialExporter.getTextureInfo(ZB.subsurfaceColorTexture);
              BB && (hB.multiscatterColorTexture = BB)
            } else if (ZB.transmissionWeight > 0 && ZB.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(ZB);
              const BB = this._exporter._materialExporter.getTextureInfo(ZB.transmissionScatterTexture);
              BB && (hB.multiscatterColorTexture = BB)
            }
            IB.extensions = IB.extensions || {}, IB.extensions[Mo] = hB
          }
          BB(IB)
        }))
      }
    }
    let Po = !1;

    function Ro() {
      Po || (Po = !0, PT.RegisterExtension(Mo, (BB => new jo(BB)), 101))
    }
    Ro();
    const ro = "KHR_materials_diffuse_roughness";
    class mo {
      constructor(BB) {
        this.name = ro, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, IB, ZB) {
        const TB = [];
        if (ZB instanceof QI) {
          if (ZB._baseDiffuseRoughness) return ZB._baseDiffuseRoughnessTexture && TB.push(ZB._baseDiffuseRoughnessTexture), TB
        } else if (ZB instanceof VI && ZB.baseDiffuseRoughness) return ZB.baseDiffuseRoughnessTexture && TB.push(ZB.baseDiffuseRoughnessTexture), TB;
        return []
      }
      postExportMaterialAsync(BB, IB, ZB) {
        return new Promise((BB => {
          let TB = null,
            JB = null;
          if (ZB instanceof QI ? (TB = ZB._baseDiffuseRoughness, JB = ZB._baseDiffuseRoughnessTexture) : ZB instanceof VI && (TB = ZB.baseDiffuseRoughness, JB = ZB.baseDiffuseRoughnessTexture), !TB) return void BB(IB);
          this._wasUsed = !0, IB.extensions = IB.extensions || {};
          const oB = {
            diffuseRoughnessFactor: TB,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(JB) ?? void 0
          };
          null !== oB.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(ZB), IB.extensions[ro] = oB, BB(IB)
        }))
      }
    }
    let Xo = !1;

    function Lo() {
      Xo || (Xo = !0, PT.RegisterExtension(ro, (BB => new mo(BB))))
    }
    Lo();
    const eo = "KHR_materials_openpbr";
    class uo {
      constructor() {
        this.name = eo, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(BB, IB, ZB) {
        return new Promise((BB => {
          ZB instanceof VI && (this._wasUsed = !0, IB.extensions = IB.extensions || {}, IB.extensions[eo] = {}), BB(IB)
        }))
      }
    }
    let fo = !1;

    function Ao() {
      fo || (fo = !0, PT.RegisterExtension(eo, (() => new uo)))
    }
    Ao();
    const to = "KHR_texture_transform";
    class bo {
      constructor() {
        this.name = to, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(BB, IB, ZB) {
        if (ZB.JR() || wI.j.Warn(`${BB}: "scene" is not defined for Babylon texture ${ZB.name}!`), (0 !== ZB.uAng || 0 !== ZB.vAng) && (wI.j.Warn(`${BB}: Texture ${ZB.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== ZB.uRotationCenter || 0 !== ZB.vRotationCenter)) return;
        const TB = {};
        let JB = !1;
        if (0 === ZB.uOffset && 0 === ZB.vOffset || (TB.offset = [ZB.uOffset, ZB.vOffset], JB = !0), 1 === ZB.uScale && 1 === ZB.vScale || (TB.scale = [ZB.uScale, ZB.vScale], JB = !0), 0 !== ZB.wAng) {
          if (0 !== ZB.uRotationCenter || 0 !== ZB.vRotationCenter) {
            if (ZB.homogeneousRotationInUVTransform && ZB.uScale !== ZB.vScale) return void wI.j.Warn(`${BB}: Texture ${ZB.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${to}.`);
            wI.j.Warn(`${BB}: Texture ${ZB.name} with non-origin rotation center will be exported using an adjusted offset with ${to}.`), TB.offset = function(BB) {
              const {
                uOffset: IB,
                vOffset: ZB,
                uRotationCenter: TB,
                vRotationCenter: JB,
                uScale: oB,
                vScale: GB,
                wAng: vB
              } = BB, kB = Math.cos(vB), cB = Math.sin(vB), nB = TB * oB, hB = JB * GB;
              return [IB + (nB * (1 - kB) + hB * cB), ZB + (hB * (1 - kB) - nB * cB)]
            }(ZB)
          }
          TB.rotation = -ZB.wAng, JB = !0
        }
        0 !== ZB.coordinatesIndex && (TB.texCoord = ZB.coordinatesIndex, JB = !0), JB && (this._wasUsed = !0, IB.extensions || (IB.extensions = {}), IB.extensions[to] = TB)
      }
    }
    let xo = !1;

    function Eo() {
      xo || (xo = !0, PT.RegisterExtension(to, (() => new bo)))
    }
    Eo();
    var Do = ZB(40110);
    const Ko = "KHR_texture_basisu";
    class Vo {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(BB) {
        this.name = Ko, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      postExportTexture(BB, IB) {
        const ZB = this._exporter._textures[IB.index],
          TB = ZB.source;
        if (void 0 === TB) return;
        const JB = this._exporter._images[TB];
        "image/ktx2" === (JB.mimeType || (0, Do.f)(JB.uri)) && (ZB.source = void 0, ZB.extensions || (ZB.extensions = {}), ZB.extensions[Ko] = {
          source: TB
        }, this._wasUsed = !0)
      }
    }
    let So = !1;

    function BG() {
      So || (So = !0, PT.RegisterExtension(Ko, (BB => new Vo(BB))))
    }
    BG();
    const IG = "EXT_texture_webp";
    class ZG {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(BB) {
        this.name = IG, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      postExportTexture(BB, IB) {
        const ZB = this._exporter._textures[IB.index],
          TB = ZB.source;
        if (void 0 === TB) return;
        const JB = this._exporter._images[TB];
        "image/webp" === (JB.mimeType || (0, Do.f)(JB.uri)) && (ZB.source = void 0, ZB.extensions || (ZB.extensions = {}), ZB.extensions[IG] = {
          source: TB
        }, this._wasUsed = !0)
      }
    }
    let TG = !1;

    function JG() {
      TG || (TG = !0, PT.RegisterExtension(IG, (BB => new ZG(BB))))
    }
    JG();
    const oG = "EXT_texture_avif";
    class GG {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(BB) {
        this.name = oG, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      postExportTexture(BB, IB) {
        const ZB = this._exporter._textures[IB.index],
          TB = ZB.source;
        if (void 0 === TB) return;
        const JB = this._exporter._images[TB];
        "image/avif" === (JB.mimeType || (0, Do.f)(JB.uri)) && (ZB.source = void 0, ZB.extensions || (ZB.extensions = {}), ZB.extensions[oG] = {
          source: TB
        }, this._wasUsed = !0)
      }
    }
    let vG = !1;

    function kG() {
      vG || (vG = !0, PT.RegisterExtension(oG, (BB => new GG(BB))))
    }
    kG();
    class cG {
      static CreateSTL(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          JB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          oB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          GB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          vB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          kB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const cB = function(BB, IB, ZB) {
            const JB = [3 * BB[ZB], 3 * BB[ZB + 1], 3 * BB[ZB + 2]],
              oB = [new TB.rN(IB[JB[0]], IB[JB[0] + 2], IB[JB[0] + 1]), new TB.rN(IB[JB[1]], IB[JB[1] + 2], IB[JB[1] + 1]), new TB.rN(IB[JB[2]], IB[JB[2] + 2], IB[JB[2] + 1])],
              GB = oB[0].subtract(oB[1]),
              vB = oB[2].subtract(oB[1]);
            return {
              v: oB,
              n: TB.rN.Cross(vB, GB).normalize()
            }
          },
          hB = function(BB, IB, ZB, TB) {
            return IB = zB(BB, IB, ZB.x, TB), IB = zB(BB, IB, ZB.y, TB), zB(BB, IB, ZB.z, TB)
          },
          zB = function(BB, IB, ZB, TB) {
            return BB.setFloat32(IB, ZB, TB), IB + 4
          },
          NB = function(BB) {
            if (vB) {
              let IB = BB;
              BB instanceof FB.e && (IB = BB.wJB);
              const ZB = IB.getVerticesData(nB.e.PositionKind, !0, !0);
              if (!ZB) return [];
              const JB = TB.rN.Zero();
              let oB;
              for (oB = 0; oB < ZB.length; oB += 3) TB.rN.TransformCoordinatesFromFloatsToRef(ZB[oB], ZB[oB + 1], ZB[oB + 2], BB.computeWorldMatrix(!0), JB).toArray(ZB, oB);
              return ZB
            }
            return BB.getVerticesData(nB.e.PositionKind) || []
          };
        vB && (GB = !0);
        let gB = "",
          qB = 0,
          yB = 0;
        if (JB) {
          for (let ZB = 0; ZB < BB.length; ZB++) {
            const IB = BB[ZB].MTB();
            qB += IB ? IB.length / 3 : 0
          }
          const IB = new ArrayBuffer(84 + 50 * qB);
          gB = new DataView(IB), yB += 80, gB.setUint32(yB, qB, oB), yB += 4
        } else kB || (gB = "solid stlmesh\r\n");
        for (let TB = 0; TB < BB.length; TB++) {
          const IB = BB[TB];
          !JB && kB && (gB += "solid " + IB.name + "\r\n"), !GB && IB instanceof cT.c && IB.bakeCurrentTransformIntoVertices();
          const ZB = NB(IB),
            vB = IB.MTB() || [];
          for (let BB = 0; BB < vB.length; BB += 3) {
            const IB = cB(vB, ZB, BB);
            JB ? (yB = hB(gB, yB, IB.n, oB), yB = hB(gB, yB, IB.v[0], oB), yB = hB(gB, yB, IB.v[1], oB), yB = hB(gB, yB, IB.v[2], oB), yB += 2) : (gB += "\tfacet normal " + IB.n.x + " " + IB.n.y + " " + IB.n.z + "\r\n", gB += "\t\touter loop\r\n", gB += "\t\t\tvertex " + IB.v[0].x + " " + IB.v[0].y + " " + IB.v[0].z + "\r\n", gB += "\t\t\tvertex " + IB.v[1].x + " " + IB.v[1].y + " " + IB.v[1].z + "\r\n", gB += "\t\t\tvertex " + IB.v[2].x + " " + IB.v[2].y + " " + IB.v[2].z + "\r\n", gB += "\t\tendloop\r\n", gB += "\tendfacet\r\n")
          }!JB && kB && (gB += "endsolid " + name + "\r\n")
        }
        if (JB || kB || (gB += "endsolid stlmesh"), IB) {
          const BB = document.createElement("a"),
            IB = new Blob([gB], {
              type: "application/octet-stream"
            });
          BB.href = window.URL.createObjectURL(IB), BB.download = ZB + ".stl", BB.click()
        }
        return gB
      }
    }

    function nG(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const JB = [];
      for (let oB = 0; oB < BB.length / ZB; oB++) {
        const GB = BB[oB * ZB] * (TB ? -1 : 1),
          vB = BB[oB * ZB + 1],
          kB = BB[oB * ZB + 2];
        JB.push(`(${GB.toPrecision(IB.precision)}, ${vB.toPrecision(IB.precision)}, ${kB.toPrecision(IB.precision)})`)
      }
      return JB.join(", ")
    }

    function hG(BB, IB) {
      const ZB = [];
      for (let TB = 0; TB < BB.length / 2; TB++) {
        const JB = BB[2 * TB],
          oB = BB[2 * TB + 1];
        ZB.push(`(${JB.toPrecision(IB.precision)}, ${(1-oB).toPrecision(IB.precision)})`)
      }
      return ZB.join(", ")
    }

    function zG(BB, IB, ZB, TB) {
      const JB = BB.getVerticesData(nB.e.PositionKind),
        oB = BB.getVerticesData(nB.e.NormalKind);
      if (JB && oB) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${ZB}"\n\t\tint[] faceVertexCounts = [${function(BB){const IB=BB.MTB()?.length?BB.getTotalIndices():BB.getTotalVertices();return Array(IB/3).fill(3).join(", ")}(BB)}]\n\t\tint[] faceVertexIndices = [${function(BB){const IB=BB.MTB(),ZB=IB?.length??BB.getTotalVertices(),TB=[];if(null!==IB)for(let JB=0;JB<ZB;JB++)TB.push(IB[JB]);else for(let JB=0;JB<ZB;JB++)TB.push(JB);return TB.join(", ")}(BB)}]\n\t\tnormal3f[] normals = [${nG(oB,IB,void 0,TB)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${nG(JB,IB,void 0,TB)}]\n        ${function(BB,IB){let ZB="";for(let JB=0;JB<4;JB++){const TB=JB>0?JB:"",oB=BB.getVerticesData(nB.e.UVKind+(TB?TB+1:""));oB&&(ZB+=`\n\t\ttexCoord2f[] primvars:st${TB} = [${hG(oB,IB)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const TB=BB.getVerticesData(nB.e.ColorKind);return TB&&(ZB+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        nG(TB, IB, TB.length / BB.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),ZB}(BB,IB)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function FG(BB, IB, ZB, TB) {
      return `\n        def "Geometry"\n        {\n        ${zG(BB,IB,ZB,TB)}\n        }\n        `
    }

    function NG(BB) {
      let IB = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return IB += BB, fflate.strToU8(IB)
    }

    function gG(BB) {
      const IB = BB.m;
      return `( ${qG(IB,0)}, ${qG(IB,4)}, ${qG(IB,8)}, ${qG(IB,12)} )`
    }

    function qG(BB, IB) {
      return `(${BB[IB+0]}, ${BB[IB+1]}, ${BB[IB+2]}, ${BB[IB+3]})`
    }

    function yG(BB, IB) {
      const ZB = "Object_" + BB.uniqueId,
        TB = gG(IB);
      return `def Xform "${ZB}" (\n\tprepend references = @./geometries/Geometry_${BB.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${TB}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${BB.material.uniqueId}>\n}\n\n`
    }

    function UG(BB) {
      switch (BB) {
        case sB.b.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case sB.b.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case sB.b.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function WG(BB) {
      return `(${BB.x}, ${BB.y})`
    }

    function dG(BB) {
      return `(${BB.r}, ${BB.g}, ${BB.b})`
    }

    function CG(BB) {
      return "image/jpeg" === BB || "image/png" === BB
    }

    function QG(BB, IB, ZB, JB, oB, GB) {
      const vB = BB.getInternalTexture().uniqueId + "_" + BB.invertY,
        cB = BB.mimeType || (0, kB.b)(BB.getInternalTexture()?.url ?? ""),
        nB = CG(cB) ? cB : "image/png",
        hB = "image/jpeg" === nB ? "jpg" : "png";
      oB[vB] = {
        texture: BB,
        mimeType: nB,
        ext: hB
      };
      const zB = BB.coordinatesIndex > 0 ? "st" + BB.coordinatesIndex : "st",
        FB = new TB.Vector2(BB.uScale, BB.vScale),
        NB = new TB.Vector2(BB.uOffset, BB.vOffset),
        gB = BB.wAng,
        qB = Math.sin(gB),
        yB = Math.cos(gB);
      return NB.y = 1 - NB.y - FB.y, NB.x += qB * FB.x, NB.y += (1 - yB) * FB.y, `\n    def Shader "PrimvarReader_${ZB}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${zB}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${ZB}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${IB.uniqueId}/PrimvarReader_${ZB}.outputs:result>\n        float inputs:rotation = ${(gB*(180/Math.PI)).toFixed(GB.precision)}\n        float2 inputs:scale = ${WG(FB)}\n        float2 inputs:translation = ${WG(NB)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${BB.uniqueId}_${ZB}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${vB}.${hB}@\n        float2 inputs:st.connect = </Root/Materials/Material_${IB.uniqueId}/Transform2d_${ZB}.outputs:result>\n        ${JB?"float4 inputs:scale = "+function(BB){return`(${BB.r}, ${BB.g}, ${BB.b}, 1.0)`}(JB):""}\n        token inputs:sourceColorSpace = "${BB.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${UG(BB.wrapU)}"\n        token inputs:wrapT = "${UG(BB.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${IB.needAlphaBlending()||IB.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function sG(BB, IB, ZB) {
      const TB = "\t\t\t",
        JB = [],
        oB = [],
        {
          diffuseMap: GB,
          diffuse: vB,
          alphaCutOff: kB,
          emissiveMap: cB,
          emissive: nB,
          normalMap: hB,
          roughnessMap: zB,
          roughnessChannel: FB,
          roughness: NB,
          metalnessMap: gB,
          metalnessChannel: yB,
          metalness: UB,
          aoMap: WB,
          aoMapChannel: dB,
          aoMapIntensity: CB,
          alphaMap: QB,
          ior: sB,
          clearCoatEnabled: wB,
          clearCoat: OB,
          clearCoatMap: YB,
          clearCoatRoughness: iB,
          clearCoatRoughnessMap: pB
        } = function(BB) {
          const IB = {
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
          return BB instanceof oT.StandardMaterial ? {
            ...IB,
            diffuseMap: BB.diffuseTexture,
            diffuse: BB.diffuseColor,
            alphaCutOff: BB.alphaCutOff,
            emissiveMap: BB.emissiveTexture,
            emissive: BB.emissiveColor,
            roughness: 1,
            alphaMap: BB.opacityTexture
          } : BB instanceof QI ? {
            ...IB,
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
          } : IB
        }(BB);
      return null !== GB ? (JB.push(`${TB}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${GB.uniqueId}_diffuse.outputs:rgb>`), BB.needAlphaBlending() ? JB.push(`${TB}float inputs:opacity.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${GB.uniqueId}_diffuse.outputs:a>`) : BB.needAlphaTesting() && (JB.push(`${TB}float inputs:opacity.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${GB.uniqueId}_diffuse.outputs:a>`), JB.push(`${TB}float inputs:opacityThreshold = ${kB}`)), oB.push(QG(GB, BB, "diffuse", vB, IB, ZB))) : JB.push(`${TB}color3f inputs:diffuseColor = ${dG(vB||qB.Color3.White())}`), null !== cB ? (JB.push(`${TB}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${cB.uniqueId}_emissive.outputs:rgb>`), oB.push(QG(cB, BB, "emissive", nB, IB, ZB))) : nB && nB.toLuminance() > 0 && JB.push(`${TB}color3f inputs:emissiveColor = ${dG(nB)}`), null !== hB && (JB.push(`${TB}normal3f inputs:normal.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${hB.uniqueId}_normal.outputs:rgb>`), oB.push(QG(hB, BB, "normal", null, IB, ZB))), null !== WB && (JB.push(`${TB}float inputs:occlusion.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${WB.uniqueId}_occlusion.outputs:${dB}>`), oB.push(QG(WB, BB, "occlusion", new qB.Color3(CB, CB, CB), IB, ZB))), null !== zB ? (JB.push(`${TB}float inputs:roughness.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${zB.uniqueId}_roughness.outputs:${FB}>`), oB.push(QG(zB, BB, "roughness", new qB.Color3(NB, NB, NB), IB, ZB))) : JB.push(`${TB}float inputs:roughness = ${NB}`), null !== gB ? (JB.push(`${TB}float inputs:metallic.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${gB.uniqueId}_metallic.outputs:${yB}>`), oB.push(QG(gB, BB, "metallic", new qB.Color3(UB, UB, UB), IB, ZB))) : JB.push(`${TB}float inputs:metallic = ${UB}`), null !== QB ? (JB.push(`${TB}float inputs:opacity.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${QB.uniqueId}_opacity.outputs:r>`), JB.push(`${TB}float inputs:opacityThreshold = 0.0001`), oB.push(QG(QB, BB, "opacity", null, IB, ZB))) : JB.push(`${TB}float inputs:opacity = ${BB.alpha}`), wB && (null !== YB ? (JB.push(`${TB}float inputs:clearcoat.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${YB.uniqueId}_clearcoat.outputs:r>`), oB.push(QG(YB, BB, "clearcoat", new qB.Color3(OB, OB, OB), IB, ZB))) : JB.push(`${TB}float inputs:clearcoat = ${OB}`), null !== pB ? (JB.push(`${TB}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${pB.uniqueId}_clearcoatRoughness.outputs:g>`), oB.push(QG(pB, BB, "clearcoatRoughness", new qB.Color3(iB, iB, iB), IB, ZB))) : JB.push(`${TB}float inputs:clearcoatRoughness = ${iB}`)), JB.push(`${TB}float inputs:ior = ${sB}`), `\n\tdef Material "Material_${BB.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${JB.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${BB.uniqueId}/PreviewSurface.outputs:surface>\n\n${oB.join("\n")}\n\n\t}\n`
    }

    function wG(BB) {
      BB.computeWorldMatrix(!0);
      const IB = BB.getWorldMatrix().clone(),
        ZB = BB.JR().useRightHandedSystem;
      let TB = BB.material?._getEffectiveOrientation(BB) ?? BB.sideOrientation,
        GB = !ZB,
        vB = BB.parent;
      for (; vB;) {
        if (RZ(vB, ZB) && null === vB.parent) {
          ZB || (IB.multiplyToRef(vB.getWorldMatrix().invert(), IB), TB = TB === oB.e.ClockWiseSideOrientation ? oB.e.CounterClockWiseSideOrientation : oB.e.ClockWiseSideOrientation), GB = !1;
          break
        }
        vB = vB.parent
      }
      return IB.determinant() < 0 && JB.Tools.Warn(`Mesh ${BB.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: IB,
        windingOrder: TB === oB.e.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: GB
      }
    }
    async function OG(BB, IB, ZB) {
      const oB = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...IB
      };
      "undefined" === typeof fflate && await JB.Tools.LoadScriptAsync(oB.fflateUrl);
      const GB = {};
      GB[oB.modelFileName] = null;
      let vB = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      vB += function(BB) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===BB.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${BB.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${BB.planeAnchoringAlignment}"`:""}\n            `
      }(oB);
      const kB = {};
      for (const TB of BB.meshes) {
        if (0 === TB.getTotalVertices()) continue;
        const BB = TB,
          IB = BB.geometry,
          cB = BB.material;
        if (!cB || !IB || ZB && !ZB(BB)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(cB.getClassName())) {
          const ZB = "geometries/Geometry_" + IB.uniqueId + ".usda",
            {
              matrix: TB,
              windingOrder: JB,
              convertToRightHanded: nB
            } = wG(BB);
          if (!(ZB in GB)) {
            const BB = FG(IB, oB, JB, nB);
            GB[ZB] = NG(BB)
          }
          cB.uniqueId in kB || (kB[cB.uniqueId] = cB), vB += yG(BB, TB)
        } else JB.Tools.Warn("USDZExportAsync does not support this material type: " + cB.getClassName())
      }
      BB.activeCamera && oB.exportCamera && (vB += function(BB, IB) {
        const ZB = "Camera_" + BB.uniqueId,
          JB = gG(TB.Matrix.RotationY(Math.PI).multiply(BB.getWorldMatrix()));
        if (BB.mode === sB.b.ORTHOGRAPHIC_CAMERA) return `def Camera "${ZB}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${JB}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${BB.minZ.toPrecision(IB.precision)}, ${BB.maxZ.toPrecision(IB.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(BB.orthoLeft||1)+Math.abs(BB.orthoRight||1))).toPrecision(IB.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(BB.orthoTop||1)+Math.abs(BB.orthoBottom||1))).toPrecision(IB.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const TB = BB.PN().getAspectRatio(BB),
            oB = IB.cameraSensorWidth || 35;
          return `def Camera "${ZB}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${JB}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${BB.minZ.toPrecision(IB.precision)}, ${BB.maxZ.toPrecision(IB.precision)})\n\t\t\tfloat focalLength = ${(oB/(2*Math.tan(.5*BB.fov))).toPrecision(IB.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(oB*TB).toPrecision(IB.precision)}\n\t\t\tfloat verticalAperture = ${(oB/TB).toPrecision(IB.precision)}            \n\t\t}\n\t\n\t`
        }
      }(BB.activeCamera, oB)), vB += "\n            }\n        }";
      const cB = {};
      vB += function(BB, IB, ZB) {
        const TB = [];
        for (const JB in BB) {
          const oB = BB[JB];
          TB.push(sG(oB, IB, ZB))
        }
        return `\n    def "Materials"\n{\n${TB.join("")}\n}\n\n`
      }(kB, cB, oB), vB += "\n    }", GB[oB.modelFileName] = fflate.strToU8(vB);
      for (const TB in cB) {
        const {
          texture: BB,
          ext: IB,
          mimeType: ZB
        } = cB[TB], JB = await yZ(BB);
        if (JB && CG(JB.mimeType) && JB.mimeType === ZB) GB[`textures/Texture_${TB}.${IB}`] = new Uint8Array(JB.data);
        else {
          const JB = BB.getSize(),
            oB = await (0, dB.d)(BB),
            vB = await wB.DumpTools.DumpDataAsync(JB.width, JB.height, oB, ZB, void 0, !1, !0);
          GB[`textures/Texture_${TB}.${IB}`] = new Uint8Array(vB).slice()
        }
      }
      let nB = 0;
      for (const TB in GB) {
        const BB = GB[TB];
        if (!BB) continue;
        nB += 34 + TB.length;
        const IB = 63 & nB;
        if (4 !== IB) {
          const ZB = new Uint8Array(64 - IB);
          GB[TB] = [BB, {
            extra: {
              12345: ZB
            }
          }]
        }
        nB = BB.length
      }
      return fflate.zipSync(GB, {
        level: 0
      })
    }
    var YG = ZB(41133);
    class iG {
      static Export(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        if (!BB || 0 === BB.bones.length) throw new Error("Invalid or empty skeleton provided");
        let TB = IB;
        IB && 0 !== IB.length || (TB = BB.animations.map((BB => BB.name)));
        let JB = null;
        for (const cB of TB) {
          const IB = BB.getAnimationRange(cB);
          IB && (JB = JB ? new YG.b("animation-range", Math.min(JB.from, IB.from), Math.max(JB.to, IB.to)) : IB)
        }
        if (!JB && (BB.animations.length > 0 && (JB = BB.getAnimationRange(BB.animations[0].name)), !JB)) throw new Error("No animation range found in skeleton");
        const oB = ZB || 1 / (BB.animations[0]?.framePerSecond || 30),
          GB = this._BuildBoneHierarchy(BB, TB);
        let vB = 0;
        for (const cB of GB) cB.positionKeys.length > 0 && (vB = Math.max(vB, cB.positionKeys.length)), cB.rotationKeys.length > 0 && (vB = Math.max(vB, cB.rotationKeys.length));
        0 === vB && (vB = Math.floor((JB.to - JB.from) / oB) + 1);
        let kB = "";
        return kB += "HIERARCHY\n", kB += this._ExportHierarchy(GB, 0), kB += "MOTION\n", kB += `Frames: ${vB}\n`, kB += `Frame Time: ${oB.toFixed(6)}\n`, kB += this._ExportMotionData(GB, vB, 0, TB), kB
      }
      static _BuildBoneHierarchy(BB, IB) {
        const ZB = new Map,
          TB = [];
        for (const JB of BB.bones) {
          const BB = {
            bone: JB,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          ZB.set(JB, BB)
        }
        for (const JB of BB.bones) {
          const BB = ZB.get(JB);
          if (JB.animations.length > 0)
            for (const ZB of JB.animations) IB.includes(ZB.name) && ("position" === ZB.targetProperty ? (BB.hasPositionChannels = !0, BB.positionKeys.push(...ZB.getKeys())) : "rotationQuaternion" === ZB.targetProperty && (BB.hasRotationChannels = !0, BB.rotationKeys.push(...ZB.getKeys())));
          if (JB.getParent()) {
            const IB = ZB.get(JB.getParent());
            IB && IB.children.push(BB)
          } else TB.push(BB)
        }
        return TB
      }
      static _ExportHierarchy(BB, IB) {
        let ZB = "";
        const TB = "    ".repeat(IB);
        for (const JB of BB) {
          const BB = JB.bone;
          if (this._IsEndSite(JB)) {
            ZB += `${TB}End Site\n`, ZB += `${TB}{\n`;
            const IB = this._GetBoneOffset(BB);
            ZB += `${TB}    OFFSET ${IB.x.toFixed(6)} ${IB.y.toFixed(6)} ${IB.z.toFixed(6)}\n`, ZB += `${TB}}\n`
          } else {
            ZB += `${0===IB?"ROOT":`${TB}JOINT`} ${BB.name}\n`, ZB += `${TB}{\n`;
            const oB = this._GetBoneOffset(BB);
            ZB += `${TB}    OFFSET ${oB.x.toFixed(6)} ${oB.y.toFixed(6)} ${oB.z.toFixed(6)}\n`;
            const GB = [];
            JB.hasPositionChannels && GB.push("Xposition", "Yposition", "Zposition"), JB.hasRotationChannels && GB.push("Zrotation", "Xrotation", "Yrotation"), GB.length > 0 && (ZB += `${TB}    CHANNELS ${GB.length} ${GB.join(" ")}\n`), JB.children.length > 0 && (ZB += this._ExportHierarchy(JB.children, IB + 1)), ZB += `${TB}}\n`
          }
        }
        return ZB
      }
      static _IsEndSite(BB) {
        return 0 === BB.children.length
      }
      static _GetBoneOffset(BB) {
        try {
          if (!BB.getParent()) return BB.getRestMatrix().getTranslation();
          return BB.getLocalMatrix().getTranslation()
        } catch (IB) {
          return TB.rN.Zero()
        }
      }
      static _ExportMotionData(BB, IB, ZB, TB) {
        let JB = "";
        for (let oB = 0; oB < IB; oB++) {
          const IB = [];
          this._CollectFrameValues(BB, oB + ZB, IB, TB), JB += IB.map((BB => BB.toFixed(6))).join(" ") + "\n"
        }
        return JB
      }
      static _CollectFrameValues(BB, IB, ZB, TB) {
        for (const JB of BB)
          if (!this._IsEndSite(JB)) {
            if (JB.hasPositionChannels) {
              const BB = this._GetPositionAtFrameIndex(JB.positionKeys, IB);
              ZB.push(BB.x, BB.y, BB.z)
            }
            if (JB.hasRotationChannels) {
              const BB = this._GetRotationAtFrameIndex(JB.rotationKeys, IB),
                TB = this._QuaternionToEuler(BB);
              ZB.push(TB.z, TB.x, TB.y)
            }
            JB.children.length > 0 && this._CollectFrameValues(JB.children, IB, ZB, TB)
          }
      }
      static _GetPositionAtFrameIndex(BB, IB) {
        if (0 === BB.length) return TB.rN.Zero();
        return BB[Math.max(0, Math.min(IB, BB.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(BB, IB) {
        if (0 === BB.length) return TB.Quaternion.Identity();
        return BB[Math.max(0, Math.min(IB, BB.length - 1))].value.clone()
      }
      static _QuaternionToEuler(BB) {
        const IB = new TB.Matrix;
        BB.toRotationMatrix(IB);
        const ZB = IB.m;
        let oB, GB, vB;
        const kB = Math.sqrt(ZB[0] * ZB[0] + ZB[1] * ZB[1]);
        return kB > jZ.d ? (oB = Math.atan2(ZB[6], ZB[10]), GB = Math.atan2(-ZB[2], kB), vB = Math.atan2(ZB[1], ZB[0])) : (oB = Math.atan2(-ZB[9], ZB[5]), GB = Math.atan2(-ZB[2], kB), vB = 0), new TB.rN(JB.Tools.ToDegrees(oB), JB.Tools.ToDegrees(GB), JB.Tools.ToDegrees(vB))
      }
    }

    function pG(BB) {
      return "string" === typeof BB?.name
    }
    const aG = Symbol("__xml:meta$__"),
      HG = Symbol("__xml:name$__");

    function MG(BB, IB) {
      Object.prototype.hasOwnProperty.call(BB.metadata, aG) || (BB.metadata[aG] = []), BB.metadata[aG].push(IB)
    }

    function jG(BB) {
      return (IB, ZB) => {
        IB[HG] = BB
      }
    }

    function PG() {
      return (BB, IB) => MG(IB, {
        kind: "none",
        prop: String(IB.name),
        ignore: !0
      })
    }

    function RG(BB) {
      return (IB, ZB) => MG(ZB, {
        kind: "attr",
        prop: String(ZB.name),
        ...BB
      })
    }

    function rG(BB) {
      return (IB, ZB) => MG(ZB, {
        kind: "elem",
        prop: String(ZB.name),
        ...BB
      })
    }

    function mG(BB) {
      const IB = "function" === typeof BB ? BB : BB?.constructor,
        ZB = IB?.[Symbol.metadata];
      if (!ZB) return [];
      const TB = [];
      let JB = ZB;
      for (; JB;) Object.prototype.hasOwnProperty.call(JB, aG) && TB.push(...JB[aG]), JB = Object.getPrototypeOf(JB);
      return TB
    }

    function XG(BB) {
      const IB = BB?.constructor?.[HG];
      return IB || void 0
    }

    function LG(BB) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(BB)
    }

    function eG(BB) {
      if (pG(BB)) return BB;
      const IB = (BB ?? "").trim();
      if (!IB) return {
        name: ""
      };
      const ZB = IB.indexOf(":");
      if (-1 === ZB) return {
        name: IB
      };
      if (-1 !== IB.indexOf(":", ZB + 1)) return {
        name: IB
      };
      const TB = IB.slice(0, ZB),
        JB = IB.slice(ZB + 1);
      return LG(TB) && LG(JB) ? {
        ns: TB,
        name: JB
      } : {
        name: IB
      }
    }

    function uG(BB, IB) {
      return IB ? `${IB}:${BB}` : BB
    }
    const fG = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      lG = Object.freeze({
        number: fG
      });

    function AG(BB) {
      const IB = BB?.eps ?? fG.eps;
      return {
        eps: IB,
        maxDecimalsCap: BB?.maxDecimalsCap ?? fG.maxDecimalsCap,
        trimTrailingZeros: BB?.trimTrailingZeros ?? fG.trimTrailingZeros,
        fixedDecimals: BB?.fixedDecimals,
        allowScientific: BB?.allowScientific ?? fG.allowScientific,
        snapNearZero: BB?.snapNearZero ?? fG.snapNearZero,
        zeroThreshold: BB?.zeroThreshold ?? IB,
        perAttributeEps: BB?.perAttributeEps
      }
    }

    function tG(BB) {
      return {
        number: AG(BB?.number)
      }
    }
    class bG {
      constructor(BB) {
        if (this.o = BB, this._o = BB.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(BB) {
        if (!Number.isFinite(BB)) throw new Error(`Cannot format non-finite number: ${BB}`);
        const IB = this._o,
          ZB = this._clampInt(IB.maxDecimalsCap ?? 15, 0, 20),
          TB = IB.trimTrailingZeros ?? !0,
          JB = IB.snapNearZero ?? !0,
          oB = IB.zeroThreshold ?? IB.eps,
          GB = 1 / IB.eps;
        let vB, kB = Math.round(BB * GB) / GB;
        if (Object.is(kB, -0) && (kB = 0), JB && Math.abs(kB) <= oB && (kB = 0), vB = void 0 !== IB.fixedDecimals ? this._clampInt(IB.fixedDecimals, 0, ZB) : this._clampInt(Math.ceil(-Math.log10(IB.eps)), 0, ZB), IB.allowScientific, 0 === vB) return String(Math.trunc(kB));
        let cB = kB.toFixed(vB);
        if (TB && void 0 === IB.fixedDecimals && (cB = cB.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(cB)) throw new Error(`Scientific notation not allowed in XML output: ${cB}`);
        return cB
      }
      _clampInt(BB, IB, ZB) {
        return Number.isFinite(BB) ? (BB = Math.trunc(BB), Math.max(IB, Math.min(ZB, BB))) : IB
      }
    }

    function xG(BB) {
      return BB instanceof Date
    }

    function EG(BB) {
      return "string" === typeof BB
    }

    function DG(BB) {
      return "string" === typeof BB || "number" === typeof BB || "boolean" === typeof BB || "bigint" === typeof BB || xG(BB)
    }

    function KG(BB) {
      return "number" === typeof BB || "boolean" === typeof BB || "bigint" === typeof BB || xG(BB)
    }
    class VG {
      constructor(BB, IB) {
        this._ns = new Map, this._prefixCount = 0, this._builder = BB, this._format = tG(IB), this._nFmt = new bG(this._format)
      }
      withNamespace() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        for (const TB of IB) this._assignNamespace(TB);
        return this
      }
      serialize(BB, IB) {
        if (!(IB = IB ?? XG(BB))) throw new Error("can not find name for given object");
        const ZB = eG(IB);
        ZB.ns && this._assignNamespace(ZB.ns, "xmlns"), this._gatherNamespaces(BB, new WeakSet);
        const TB = this._builder.ele(null, ZB.name);
        for (const [JB, oB] of Array.from(this._ns.entries())) TB.att("xmlns", oB, JB);
        this._writeObjectContent(TB, BB, (new WeakSet).add(BB)), this._builder.end()
      }
      _writeObject(BB, IB, ZB) {
        if (ZB.has(IB)) return;
        if (ZB.add(IB), Array.isArray(IB)) {
          for (const TB of IB) KG(TB) || (EG(TB) ? this._builder.text(TB) : this._writeObject(BB, TB, ZB));
          return
        }
        const TB = XG(IB);
        if (!TB) return;
        const JB = eG(TB),
          oB = this._getPrefix(JB),
          GB = uG(JB.name, oB);
        BB.ele(null, GB), this._writeObjectContent(BB, IB, ZB), this._builder.end()
      }
      _getPrefix(BB) {
        if (BB.ns) {
          const IB = this._ns.get(BB.ns.toLowerCase());
          if ("xmlns" !== IB) return IB
        }
      }
      _writeObjectContent(BB, IB, ZB) {
        const TB = mG(IB) ?? [],
          JB = new Map;
        for (const GB of TB) {
          const BB = JB.get(GB.prop) ?? [];
          BB.push(GB), JB.set(GB.prop, BB)
        }
        const oB = Object.keys(IB).sort(((BB, IB) => {
          const ZB = (JB.get(BB) ?? []).some((BB => "attr" === BB.kind));
          return ZB === (JB.get(IB) ?? []).some((BB => "attr" === BB.kind)) ? 0 : ZB ? -1 : 1
        }));
        for (const GB of oB) {
          const TB = IB[GB];
          if (null === TB || void 0 === TB) continue;
          const oB = JB.get(GB);
          if (oB) {
            if (oB.some((BB => !0 === BB.ignore || "none" === BB.kind))) continue;
            for (const IB of oB) {
              const ZB = IB.name ?? IB.prop.toLowerCase();
              if (ZB) switch (IB.kind) {
                case "attr": {
                  let JB = null;
                  if ("number" === typeof TB && this._nFmt && (JB = this._nFmt.toString(TB)), IB.formatter) {
                    JB = new IB.formatter(this._format).toString(TB)
                  }
                  if (JB = JB ?? TB.toString(), JB) {
                    const IB = eG(ZB),
                      TB = this._getPrefix(IB),
                      oB = uG(IB.name, TB);
                    BB.att(null, oB, JB)
                  }
                  break
                }
              }
            }
          } else KG(TB) || (EG(TB) ? this._builder.text(TB) : this._writeObject(BB, TB, ZB))
        }
      }
      _gatherNamespaces(BB, IB) {
        if (IB.has(BB)) return;
        if (IB.add(BB), Array.isArray(BB)) {
          for (const ZB of BB) DG(ZB) || this._gatherNamespaces(ZB, IB);
          return
        }
        const ZB = XG(BB);
        ZB && this._assignNamespace(ZB);
        const TB = mG(BB) ?? [],
          JB = new Map;
        for (const GB of TB) {
          const BB = JB.get(GB.prop) ?? [];
          BB.push(GB), JB.set(GB.prop, BB)
        }
        const oB = [];
        for (const GB of Object.keys(BB)) {
          const IB = BB[GB];
          if (null === IB || void 0 === IB) continue;
          const ZB = JB.get(GB);
          if (ZB) {
            if (ZB.some((BB => !0 === BB.ignore || "none" === BB.kind))) continue;
            for (const BB of ZB) BB.name && this._assignNamespace(BB.name)
          }
          oB.push(IB)
        }
        for (const GB of oB) DG(GB) || this._gatherNamespaces(GB, IB)
      }
      _assignNamespace(BB, IB) {
        const ZB = eG(BB);
        if (ZB?.ns) {
          const BB = ZB.ns.toLowerCase();
          this._ns.get(BB) || this._ns.set(BB, IB ?? this._buildNsPrefix(BB))
        } else if ("xmlns" === IB) {
          const BB = ZB.name.toLowerCase();
          this._ns.get(BB) || this._ns.set(BB, IB ?? this._buildNsPrefix(BB))
        }
      }
      _buildNsPrefix(BB) {
        let IB, ZB = !1;
        do {
          IB = "ns" + this._prefixCount++;
          for (const BB of Array.from(this._ns.values()))
            if (BB === IB) {
              ZB = !0;
              break
            }
        } while (ZB);
        return IB
      }
    }
    class SG {}
    var Bv;
    SG.OpenTag = "<", SG.CloseTag = ">", SG.Slash = "/", SG.Question = "?", SG.Quote = '"', SG.Equal = "=", SG.Space = " ", SG.Semicolon = ":", SG.Dec = "<?xml", SG.Xml = "xml", SG.Xmlns = "xmlns", SG.Xsi = "xsi", SG.VersionKeyword = "version", SG.EncodingKeyword = "encoding", SG.StandaloneKeyword = "standalone",
      function(BB) {
        BB[BB.Declaration = 0] = "Declaration", BB[BB.Tag = 1] = "Tag", BB[BB.Attribute = 2] = "Attribute", BB[BB.Text = 3] = "Text"
      }(Bv || (Bv = {}));
    class Iv {
      constructor(BB) {
        this._ctxStack = [], this._d = 0, this._w = BB
      }
      dec(BB, IB, ZB) {
        return this._w.write(SG.Dec), this._writeAttStr(SG.VersionKeyword, BB), IB && this._writeAttStr(SG.EncodingKeyword, IB), void 0 !== ZB && this._writeAttStr(SG.StandaloneKeyword, ZB ? "yes" : "no"), this._w.write(SG.Question, SG.CloseTag), this
      }
      att(BB, IB, ZB) {
        const TB = this._peekContext();
        if (!TB) throw new Error("att() without open element");
        if (TB.closed) throw new Error(`att() after start tag closed for <${TB.name}>`);
        if (this._isXmlnsDecl(BB, IB)) {
          if (IB === SG.Xmlns) TB.defaultNs = ZB, this._registerNamespace(TB, "", ZB), this._writeAttStr(SG.Xmlns, ZB);
          else if (BB) this._registerNamespace(TB, IB, ZB), this._writeAttStr(`${BB}:${IB}`, ZB);
          else {
            const BB = IB.slice(6);
            this._registerNamespace(TB, BB, ZB), this._writeAttStr(IB, ZB)
          }
          return TB.lastToken = Bv.Attribute, this
        }
        let JB = IB;
        if (BB) {
          JB = `${this._ensurePrefixDeclared(TB,BB)}:${IB}`
        }
        return TB.lastToken = Bv.Attribute, this._writeAttStr(JB, ZB), this
      }
      ele(BB, IB) {
        const ZB = this._peekContext();
        ZB && this._closeOpenTagIfNeeded(ZB);
        let TB = IB;
        if (BB) {
          TB = `${this._lookupPrefix(BB)??BB}:${IB}`
        }
        return this._pushContext(TB, ++this._d), this._w.write(SG.OpenTag, TB), this
      }
      text(BB) {
        const IB = this._peekContext();
        if (!IB) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(IB), IB.lastToken = Bv.Text, this._w.write(this._escText(BB)), this
      }
      end() {
        const BB = this._popContext();
        return BB && (this._d--, BB.closed ? this._w.write(SG.OpenTag, SG.Slash, BB.name, SG.CloseTag) : this._w.write(SG.Slash, SG.CloseTag)), this
      }
      _pushContext(BB, IB) {
        const ZB = new Iv.Context(BB, IB);
        return this._ctxStack.push(ZB), ZB
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
      _writeAttStr(BB, IB) {
        this._w.write(SG.Space, BB, SG.Equal, SG.Quote, this._escAttr(IB), SG.Quote)
      }
      _lookupPrefix(BB) {
        let IB = this._ctxStack.length - 1;
        if (IB >= 0)
          do {
            const ZB = this._ctxStack[IB--],
              TB = ZB.ns2prefix?.get(BB);
            if (TB) return TB
          } while (IB >= 0)
      }
      _escText(BB) {
        return BB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(BB) {
        return this._escText(BB).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(BB, IB) {
        if (BB) return BB === SG.Xmlns;
        const ZB = IB.length,
          TB = SG.Xmlns.length;
        return ZB >= TB && (IB.startsWith(SG.Xmlns) && (IB.length == TB || IB[TB] == SG.Semicolon))
      }
      _registerNamespace(BB, IB, ZB) {
        if (IB === SG.Xml || IB === SG.Xmlns) throw new Error(`reserved prefix '${IB}'`);
        const TB = BB.prefix2ns.get(IB);
        if (TB && TB !== ZB) throw new Error(`prefix '${IB}' already bound to a different namespace`);
        BB.ns2prefix.get(ZB) || BB.ns2prefix.set(ZB, IB), BB.prefix2ns.set(IB, ZB)
      }
      _allocPrefix(BB) {
        let IB = 1;
        for (;;) {
          const ZB = "ns" + IB++;
          if (!BB.prefix2ns.has(ZB)) return ZB
        }
      }
      _ensurePrefixDeclared(BB, IB) {
        const ZB = this._lookupPrefix(IB);
        if (ZB) return ZB;
        if (BB.closed) throw new Error(`can not declare namespace after start tag closed for <${BB.name}>`);
        const TB = this._allocPrefix(BB);
        return this._writeAttStr(`${SG.Xmlns}:${TB}`, IB), this._registerNamespace(BB, TB, IB), TB
      }
      _closeOpenTagIfNeeded(BB) {
        BB.closed || (this._w.write(SG.CloseTag), BB.closed = !0)
      }
    }
    Iv.Context = class {
      constructor(BB, IB) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = BB, this.depth = IB
      }
    };
    class Zv {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        if (0 === IB.length) return this;
        const TB = IB.join("");
        return this._chunks.push(TB), this.count += TB.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class Tv {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = BB, this._opts = IB, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        if (0 === IB.length) return this;
        const TB = IB.join("");
        if (0 === TB.length) return this;
        this._pending += TB, this._pendingChars += TB.length;
        const JB = this._opts.flushChars ?? 65536;
        return this._pendingChars >= JB && this.flush(), this
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
    const Jv = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      ov = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var Gv, vv;
    ! function(BB) {
      BB.micron = "micron", BB.millimeter = "millimeter", BB.centimeter = "centimeter", BB.inch = "inch", BB.foot = "foot", BB.meter = "meter"
    }(Gv || (Gv = {})),
    function(BB) {
      BB.model = "model", BB.solidsupport = "solidsupport", BB.support = "support", BB.surface = "surface", BB.other = "other"
    }(vv || (vv = {}));
    const kv = "http://schemas.openxmlformats.org/package/2006/content-types",
      cv = "http://schemas.openxmlformats.org/package/2006/relationships";
    var nv;
    ! function(BB) {
      BB.Relationships = "application/vnd.openxmlformats-package.relationships+xml", BB.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", BB.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", BB.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", BB.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", BB.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", BB.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", BB.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", BB.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", BB.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", BB.Png = "image/png", BB.Jpeg = "image/jpeg", BB.Tiff = "image/tiff", BB.Xml = "application/xml"
    }(nv || (nv = {}));
    const hv = "_rels/",
      zv = "3D/",
      Fv = "3dmodel.model",
      Nv = ".rels",
      gv = "[Content_Types].xml";
    class qv {
      static IsKnown(BB) {
        return qv.Known.has(BB)
      }
      static IsThreeDimModel(BB) {
        return BB === qv.ThreeDimModel
      }
    }
    qv.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", qv.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", qv.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", qv.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", qv.Known = new Set([qv.ThreeDimModel, qv.Thumbnail, qv.PrintTicket, qv.MustPreserve]);
    let yv = (() => {
        let BB, IB, ZB = [jG({
            ns: kv,
            name: "Types"
          })],
          TB = [];
        IB = class {
          constructor() {
            this.items = []
          }
        };
        return (0, OB.p)(IB, "ThreeMfContentTypes"), (() => {
          const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, OB.j)(null, BB = {
            value: IB
          }, ZB, {
            kind: "class",
            name: IB.name,
            metadata: JB
          }, null, TB), IB = BB.value, JB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: JB
          }), (0, OB.l)(IB, TB)
        })(), IB
      })(),
      Uv = (() => {
        let BB, IB, ZB, TB, JB = [jG({
            ns: kv,
            name: "Default"
          })],
          oB = [],
          GB = [],
          vB = [],
          kB = [],
          cB = [];
        IB = class {
          constructor(BB, IB) {
            this.ext = (0, OB.l)(this, GB, void 0), this.ct = ((0, OB.l)(this, vB), (0, OB.l)(this, kB, void 0)), (0, OB.l)(this, cB), this.ext = BB, this.ct = IB
          }
        };
        return (0, OB.p)(IB, "ThreeMfContentType"), (() => {
          const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZB = [RG({
            name: {
              ns: kv,
              name: "Extension"
            }
          })], TB = [RG({
            name: {
              ns: kv,
              name: "ContentType"
            }
          })], (0, OB.j)(null, null, ZB, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: BB => "ext" in BB,
              get: BB => BB.ext,
              set: (BB, IB) => {
                BB.ext = IB
              }
            },
            metadata: nB
          }, GB, vB), (0, OB.j)(null, null, TB, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: BB => "ct" in BB,
              get: BB => BB.ct,
              set: (BB, IB) => {
                BB.ct = IB
              }
            },
            metadata: nB
          }, kB, cB), (0, OB.j)(null, BB = {
            value: IB
          }, JB, {
            kind: "class",
            name: IB.name,
            metadata: nB
          }, null, oB), IB = BB.value, nB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nB
          }), (0, OB.l)(IB, oB)
        })(), IB
      })(),
      Wv = (() => {
        let BB, IB, ZB = [jG({
            ns: cv,
            name: "Relationships"
          })],
          TB = [];
        IB = class {
          constructor() {
            this.items = []
          }
        };
        return (0, OB.p)(IB, "ThreeMfRelationships"), (() => {
          const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, OB.j)(null, BB = {
            value: IB
          }, ZB, {
            kind: "class",
            name: IB.name,
            metadata: JB
          }, null, TB), IB = BB.value, JB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: JB
          }), (0, OB.l)(IB, TB)
        })(), IB
      })(),
      dv = (() => {
        let BB, IB, ZB, TB, JB, oB = [jG({
            ns: cv,
            name: "Relationship"
          })],
          GB = [],
          vB = [],
          kB = [],
          cB = [],
          nB = [],
          hB = [],
          zB = [];
        IB = class {
          constructor(BB, IB, ZB) {
            this.id = (0, OB.l)(this, vB, void 0), this.type = ((0, OB.l)(this, kB), (0, OB.l)(this, cB, void 0)), this.target = ((0, OB.l)(this, nB), (0, OB.l)(this, hB, void 0)), (0, OB.l)(this, zB), this.id = BB, this.type = IB, this.target = ZB
          }
        };
        return (0, OB.p)(IB, "ThreeMfRelationship"), (() => {
          const FB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZB = [RG({
            name: "Id"
          })], TB = [RG({
            name: "Type"
          })], JB = [RG({
            name: "Target"
          })], (0, OB.j)(null, null, ZB, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: BB => "id" in BB,
              get: BB => BB.id,
              set: (BB, IB) => {
                BB.id = IB
              }
            },
            metadata: FB
          }, vB, kB), (0, OB.j)(null, null, TB, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: BB => "type" in BB,
              get: BB => BB.type,
              set: (BB, IB) => {
                BB.type = IB
              }
            },
            metadata: FB
          }, cB, nB), (0, OB.j)(null, null, JB, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: BB => "target" in BB,
              get: BB => BB.target,
              set: (BB, IB) => {
                BB.target = IB
              }
            },
            metadata: FB
          }, hB, zB), (0, OB.j)(null, BB = {
            value: IB
          }, oB, {
            kind: "class",
            name: IB.name,
            metadata: FB
          }, null, GB), IB = BB.value, FB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: FB
          }), (0, OB.l)(IB, GB)
        })(), IB
      })();
    class Cv {
      constructor(BB, IB, ZB) {
        this.contentTypes = BB, this.relationships = IB, this.model = ZB
      }
    }
    class Qv {
      static Zero() {
        return new Qv([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(BB) {
        this.values = BB
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class sv {
      constructor(BB) {
        this.o = BB, this._f = new bG(BB)
      }
      toString(BB) {
        return BB.values.map((BB => this._f.toString(BB))).join(" ")
      }
    }
    let wv = (() => {
        let BB, IB, ZB, TB, JB, oB = [jG({
            ns: Jv,
            name: "model"
          })],
          GB = [],
          vB = [],
          kB = [],
          cB = [],
          nB = [],
          hB = [],
          zB = [];
        IB = class {
          constructor() {
            this.unit = (0, OB.l)(this, vB, Gv.millimeter), this.requiredextensions = ((0, OB.l)(this, kB), (0, OB.l)(this, cB, void 0)), this.recommendedextensions = ((0, OB.l)(this, nB), (0, OB.l)(this, hB, void 0)), this.metadata = (0, OB.l)(this, zB)
          }
        };
        return (0, OB.p)(IB, "ThreeMfModel"), (() => {
          const FB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZB = [RG({
            name: "unit"
          })], TB = [RG({
            name: "requiredextensions"
          })], JB = [RG({
            name: "recommendedextensions"
          })], (0, OB.j)(null, null, ZB, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: BB => "unit" in BB,
              get: BB => BB.unit,
              set: (BB, IB) => {
                BB.unit = IB
              }
            },
            metadata: FB
          }, vB, kB), (0, OB.j)(null, null, TB, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: BB => "requiredextensions" in BB,
              get: BB => BB.requiredextensions,
              set: (BB, IB) => {
                BB.requiredextensions = IB
              }
            },
            metadata: FB
          }, cB, nB), (0, OB.j)(null, null, JB, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: BB => "recommendedextensions" in BB,
              get: BB => BB.recommendedextensions,
              set: (BB, IB) => {
                BB.recommendedextensions = IB
              }
            },
            metadata: FB
          }, hB, zB), (0, OB.j)(null, BB = {
            value: IB
          }, oB, {
            kind: "class",
            name: IB.name,
            metadata: FB
          }, null, GB), IB = BB.value, FB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: FB
          })
        })(), IB.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, OB.l)(IB, GB), IB
      })(),
      Ov = (() => {
        let BB, IB, ZB, TB, JB, oB = [jG({
            ns: Jv,
            name: "meta"
          })],
          GB = [],
          vB = [],
          kB = [],
          cB = [],
          nB = [],
          hB = [],
          zB = [];
        IB = class {
          constructor(BB, IB, ZB, TB) {
            this.name = (0, OB.l)(this, vB, void 0), this.preserve = ((0, OB.l)(this, kB), (0, OB.l)(this, cB, void 0)), this.type = ((0, OB.l)(this, nB), (0, OB.l)(this, hB, void 0)), this.value = (0, OB.l)(this, zB), this.name = BB, this.value = IB, this.preserve = ZB, this.type = TB
          }
        };
        return (0, OB.p)(IB, "ThreeMfMeta"), (() => {
          const FB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZB = [RG({
            name: "name"
          })], TB = [RG({
            name: "preserve"
          })], JB = [RG({
            name: "type"
          })], (0, OB.j)(null, null, ZB, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name,
              set: (BB, IB) => {
                BB.name = IB
              }
            },
            metadata: FB
          }, vB, kB), (0, OB.j)(null, null, TB, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: BB => "preserve" in BB,
              get: BB => BB.preserve,
              set: (BB, IB) => {
                BB.preserve = IB
              }
            },
            metadata: FB
          }, cB, nB), (0, OB.j)(null, null, JB, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: BB => "type" in BB,
              get: BB => BB.type,
              set: (BB, IB) => {
                BB.type = IB
              }
            },
            metadata: FB
          }, hB, zB), (0, OB.j)(null, BB = {
            value: IB
          }, oB, {
            kind: "class",
            name: IB.name,
            metadata: FB
          }, null, GB), IB = BB.value, FB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: FB
          }), (0, OB.l)(IB, GB)
        })(), IB
      })(),
      Yv = (() => {
        let BB, IB, ZB = [jG({
            ns: Jv,
            name: "metadatagroup"
          })],
          TB = [];
        IB = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, OB.p)(IB, "ThreeMfMetadataGroup"), (() => {
          const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, OB.j)(null, BB = {
            value: IB
          }, ZB, {
            kind: "class",
            name: IB.name,
            metadata: JB
          }, null, TB), IB = BB.value, JB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: JB
          }), (0, OB.l)(IB, TB)
        })(), IB
      })(),
      iv = (() => {
        let BB, IB, ZB = [jG({
            ns: Jv,
            name: "resources"
          })],
          TB = [];
        IB = class {
          constructor() {
            this.object = []
          }
        };
        return (0, OB.p)(IB, "ThreeMfResources"), (() => {
          const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, OB.j)(null, BB = {
            value: IB
          }, ZB, {
            kind: "class",
            name: IB.name,
            metadata: JB
          }, null, TB), IB = BB.value, JB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: JB
          }), (0, OB.l)(IB, TB)
        })(), IB
      })(),
      pv = (() => {
        let BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB = [jG({
            ns: Jv,
            name: "object"
          })],
          nB = [],
          hB = [],
          zB = [],
          FB = [],
          NB = [],
          gB = [],
          qB = [],
          yB = [],
          UB = [],
          WB = [],
          dB = [],
          CB = [],
          QB = [],
          sB = [],
          wB = [];
        IB = class {
          constructor(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv.model;
            this.id = (0, OB.l)(this, hB, void 0), this.type = ((0, OB.l)(this, zB), (0, OB.l)(this, FB, void 0)), this.thumbnail = ((0, OB.l)(this, NB), (0, OB.l)(this, gB, void 0)), this.partnumber = ((0, OB.l)(this, qB), (0, OB.l)(this, yB, void 0)), this.name = ((0, OB.l)(this, UB), (0, OB.l)(this, WB, void 0)), this.pid = ((0, OB.l)(this, dB), (0, OB.l)(this, CB, void 0)), this.pindex = ((0, OB.l)(this, QB), (0, OB.l)(this, sB, void 0)), this.metadatagroup = (0, OB.l)(this, wB), this.id = BB, this.type = IB
          }
        };
        return (0, OB.p)(IB, "ThreeMfObject"), (() => {
          const YB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZB = [RG({
            name: "id"
          })], TB = [RG({
            name: "type"
          })], JB = [RG({
            name: "thumbnail"
          })], oB = [RG({
            name: "partnumber"
          })], GB = [RG({
            name: "name"
          })], vB = [RG({
            name: "pid"
          })], kB = [RG({
            name: "pindex"
          })], (0, OB.j)(null, null, ZB, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: BB => "id" in BB,
              get: BB => BB.id,
              set: (BB, IB) => {
                BB.id = IB
              }
            },
            metadata: YB
          }, hB, zB), (0, OB.j)(null, null, TB, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: BB => "type" in BB,
              get: BB => BB.type,
              set: (BB, IB) => {
                BB.type = IB
              }
            },
            metadata: YB
          }, FB, NB), (0, OB.j)(null, null, JB, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: BB => "thumbnail" in BB,
              get: BB => BB.thumbnail,
              set: (BB, IB) => {
                BB.thumbnail = IB
              }
            },
            metadata: YB
          }, gB, qB), (0, OB.j)(null, null, oB, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: BB => "partnumber" in BB,
              get: BB => BB.partnumber,
              set: (BB, IB) => {
                BB.partnumber = IB
              }
            },
            metadata: YB
          }, yB, UB), (0, OB.j)(null, null, GB, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name,
              set: (BB, IB) => {
                BB.name = IB
              }
            },
            metadata: YB
          }, WB, dB), (0, OB.j)(null, null, vB, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: BB => "pid" in BB,
              get: BB => BB.pid,
              set: (BB, IB) => {
                BB.pid = IB
              }
            },
            metadata: YB
          }, CB, QB), (0, OB.j)(null, null, kB, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: BB => "pindex" in BB,
              get: BB => BB.pindex,
              set: (BB, IB) => {
                BB.pindex = IB
              }
            },
            metadata: YB
          }, sB, wB), (0, OB.j)(null, BB = {
            value: IB
          }, cB, {
            kind: "class",
            name: IB.name,
            metadata: YB
          }, null, nB), IB = BB.value, YB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YB
          }), (0, OB.l)(IB, nB)
        })(), IB
      })(),
      av = (() => {
        let BB, IB, ZB = [jG({
            ns: Jv,
            name: "mesh"
          })],
          TB = [];
        IB = class {
          constructor(BB, IB) {
            this.vertices = BB ?? new Hv, this.triangles = IB ?? new jv
          }
        };
        return (0, OB.p)(IB, "ThreeMfMesh"), (() => {
          const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, OB.j)(null, BB = {
            value: IB
          }, ZB, {
            kind: "class",
            name: IB.name,
            metadata: JB
          }, null, TB), IB = BB.value, JB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: JB
          }), (0, OB.l)(IB, TB)
        })(), IB
      })(),
      Hv = (() => {
        let BB, IB, ZB = [jG({
            ns: Jv,
            name: "vertices"
          })],
          TB = [];
        IB = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, OB.p)(IB, "ThreeMfVertices"), (() => {
          const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, OB.j)(null, BB = {
            value: IB
          }, ZB, {
            kind: "class",
            name: IB.name,
            metadata: JB
          }, null, TB), IB = BB.value, JB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: JB
          }), (0, OB.l)(IB, TB)
        })(), IB
      })(),
      Mv = (() => {
        let BB, IB, ZB, TB, JB, oB = [jG({
            ns: Jv,
            name: "vertex"
          })],
          GB = [],
          vB = [],
          kB = [],
          cB = [],
          nB = [],
          hB = [],
          zB = [];
        IB = class {
          constructor() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, OB.l)(this, vB, void 0), this.y = ((0, OB.l)(this, kB), (0, OB.l)(this, cB, void 0)), this.z = ((0, OB.l)(this, nB), (0, OB.l)(this, hB, void 0)), (0, OB.l)(this, zB), this.x = BB, this.y = IB, this.z = ZB
          }
        };
        return (0, OB.p)(IB, "ThreeMfVertex"), (() => {
          const FB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZB = [RG({
            name: "x"
          })], TB = [RG({
            name: "y"
          })], JB = [RG({
            name: "z"
          })], (0, OB.j)(null, null, ZB, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: BB => "x" in BB,
              get: BB => BB.x,
              set: (BB, IB) => {
                BB.x = IB
              }
            },
            metadata: FB
          }, vB, kB), (0, OB.j)(null, null, TB, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: BB => "y" in BB,
              get: BB => BB.y,
              set: (BB, IB) => {
                BB.y = IB
              }
            },
            metadata: FB
          }, cB, nB), (0, OB.j)(null, null, JB, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: BB => "z" in BB,
              get: BB => BB.z,
              set: (BB, IB) => {
                BB.z = IB
              }
            },
            metadata: FB
          }, hB, zB), (0, OB.j)(null, BB = {
            value: IB
          }, oB, {
            kind: "class",
            name: IB.name,
            metadata: FB
          }, null, GB), IB = BB.value, FB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: FB
          }), (0, OB.l)(IB, GB)
        })(), IB
      })(),
      jv = (() => {
        let BB, IB, ZB = [jG({
            ns: Jv,
            name: "triangles"
          })],
          TB = [];
        IB = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, OB.p)(IB, "ThreeMfTriangles"), (() => {
          const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, OB.j)(null, BB = {
            value: IB
          }, ZB, {
            kind: "class",
            name: IB.name,
            metadata: JB
          }, null, TB), IB = BB.value, JB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: JB
          }), (0, OB.l)(IB, TB)
        })(), IB
      })(),
      Pv = (() => {
        let BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB = [jG({
            ns: Jv,
            name: "triangle"
          })],
          nB = [],
          hB = [],
          zB = [],
          FB = [],
          NB = [],
          gB = [],
          qB = [],
          yB = [],
          UB = [],
          WB = [],
          dB = [],
          CB = [],
          QB = [],
          sB = [],
          wB = [];
        IB = class {
          constructor(BB, IB, ZB) {
            this.v1 = (0, OB.l)(this, hB, void 0), this.v2 = ((0, OB.l)(this, zB), (0, OB.l)(this, FB, void 0)), this.v3 = ((0, OB.l)(this, NB), (0, OB.l)(this, gB, void 0)), this.p1 = ((0, OB.l)(this, qB), (0, OB.l)(this, yB, void 0)), this.p2 = ((0, OB.l)(this, UB), (0, OB.l)(this, WB, void 0)), this.p3 = ((0, OB.l)(this, dB), (0, OB.l)(this, CB, void 0)), this.pid = ((0, OB.l)(this, QB), (0, OB.l)(this, sB, void 0)), (0, OB.l)(this, wB), this.v1 = BB, this.v2 = IB, this.v3 = ZB
          }
        };
        return (0, OB.p)(IB, "ThreeMfTriangle"), (() => {
          const YB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZB = [RG({
            name: "v1"
          })], TB = [RG({
            name: "v2"
          })], JB = [RG({
            name: "v3"
          })], oB = [RG({
            name: "p1"
          })], GB = [RG({
            name: "p2"
          })], vB = [RG({
            name: "p3"
          })], kB = [RG({
            name: "pid"
          })], (0, OB.j)(null, null, ZB, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: BB => "v1" in BB,
              get: BB => BB.v1,
              set: (BB, IB) => {
                BB.v1 = IB
              }
            },
            metadata: YB
          }, hB, zB), (0, OB.j)(null, null, TB, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: BB => "v2" in BB,
              get: BB => BB.v2,
              set: (BB, IB) => {
                BB.v2 = IB
              }
            },
            metadata: YB
          }, FB, NB), (0, OB.j)(null, null, JB, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: BB => "v3" in BB,
              get: BB => BB.v3,
              set: (BB, IB) => {
                BB.v3 = IB
              }
            },
            metadata: YB
          }, gB, qB), (0, OB.j)(null, null, oB, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: BB => "p1" in BB,
              get: BB => BB.p1,
              set: (BB, IB) => {
                BB.p1 = IB
              }
            },
            metadata: YB
          }, yB, UB), (0, OB.j)(null, null, GB, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: BB => "p2" in BB,
              get: BB => BB.p2,
              set: (BB, IB) => {
                BB.p2 = IB
              }
            },
            metadata: YB
          }, WB, dB), (0, OB.j)(null, null, vB, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: BB => "p3" in BB,
              get: BB => BB.p3,
              set: (BB, IB) => {
                BB.p3 = IB
              }
            },
            metadata: YB
          }, CB, QB), (0, OB.j)(null, null, kB, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: BB => "pid" in BB,
              get: BB => BB.pid,
              set: (BB, IB) => {
                BB.pid = IB
              }
            },
            metadata: YB
          }, sB, wB), (0, OB.j)(null, BB = {
            value: IB
          }, cB, {
            kind: "class",
            name: IB.name,
            metadata: YB
          }, null, nB), IB = BB.value, YB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YB
          }), (0, OB.l)(IB, nB)
        })(), IB
      })(),
      Rv = (() => {
        let BB, IB, ZB = [jG({
            ns: Jv,
            name: "components"
          })],
          TB = [];
        IB = class {
          constructor() {
            this.component = []
          }
        };
        return (0, OB.p)(IB, "ThreeMfComponents"), (() => {
          const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, OB.j)(null, BB = {
            value: IB
          }, ZB, {
            kind: "class",
            name: IB.name,
            metadata: JB
          }, null, TB), IB = BB.value, JB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: JB
          }), (0, OB.l)(IB, TB)
        })(), IB
      })(),
      rv = (() => {
        let BB, IB, ZB, TB, JB = [jG({
            ns: Jv,
            name: "component"
          })],
          oB = [],
          GB = [],
          vB = [],
          kB = [],
          cB = [];
        IB = class {
          constructor(BB, IB) {
            this.objectid = (0, OB.l)(this, GB, void 0), this.transform = ((0, OB.l)(this, vB), (0, OB.l)(this, kB, void 0)), (0, OB.l)(this, cB), this.objectid = BB, this.transform = IB
          }
        };
        return (0, OB.p)(IB, "ThreeMfComponent"), (() => {
          const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZB = [RG({
            name: "objectid"
          })], TB = [RG({
            name: "transform",
            formatter: sv
          })], (0, OB.j)(null, null, ZB, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: BB => "objectid" in BB,
              get: BB => BB.objectid,
              set: (BB, IB) => {
                BB.objectid = IB
              }
            },
            metadata: nB
          }, GB, vB), (0, OB.j)(null, null, TB, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: BB => "transform" in BB,
              get: BB => BB.transform,
              set: (BB, IB) => {
                BB.transform = IB
              }
            },
            metadata: nB
          }, kB, cB), (0, OB.j)(null, BB = {
            value: IB
          }, JB, {
            kind: "class",
            name: IB.name,
            metadata: nB
          }, null, oB), IB = BB.value, nB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nB
          }), (0, OB.l)(IB, oB)
        })(), IB
      })(),
      mv = (() => {
        let BB, IB, ZB, TB = [jG({
            ns: Jv,
            name: "basematerials"
          })],
          JB = [],
          oB = [],
          GB = [];
        IB = class {
          constructor(BB) {
            this.id = (0, OB.l)(this, oB, void 0), this.base = ((0, OB.l)(this, GB), []), this.id = BB
          }
        };
        return (0, OB.p)(IB, "ThreeMfBaseMaterials"), (() => {
          const vB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZB = [RG({
            name: "id"
          })], (0, OB.j)(null, null, ZB, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: BB => "id" in BB,
              get: BB => BB.id,
              set: (BB, IB) => {
                BB.id = IB
              }
            },
            metadata: vB
          }, oB, GB), (0, OB.j)(null, BB = {
            value: IB
          }, TB, {
            kind: "class",
            name: IB.name,
            metadata: vB
          }, null, JB), IB = BB.value, vB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: vB
          }), (0, OB.l)(IB, JB)
        })(), IB
      })(),
      Xv = (() => {
        let BB, IB, ZB, TB, JB = [jG({
            ns: Jv,
            name: "base"
          })],
          oB = [],
          GB = [],
          vB = [],
          kB = [],
          cB = [];
        IB = class {
          constructor(BB, IB) {
            this.name = (0, OB.l)(this, GB, void 0), this.displaycolor = ((0, OB.l)(this, vB), (0, OB.l)(this, kB, void 0)), (0, OB.l)(this, cB), this.name = BB, this.displaycolor = IB
          }
        };
        return (0, OB.p)(IB, "ThreeMfBase"), (() => {
          const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZB = [RG({
            name: "name"
          })], TB = [RG({
            name: "displaycolor"
          })], (0, OB.j)(null, null, ZB, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name,
              set: (BB, IB) => {
                BB.name = IB
              }
            },
            metadata: nB
          }, GB, vB), (0, OB.j)(null, null, TB, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: BB => "displaycolor" in BB,
              get: BB => BB.displaycolor,
              set: (BB, IB) => {
                BB.displaycolor = IB
              }
            },
            metadata: nB
          }, kB, cB), (0, OB.j)(null, BB = {
            value: IB
          }, JB, {
            kind: "class",
            name: IB.name,
            metadata: nB
          }, null, oB), IB = BB.value, nB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nB
          }), (0, OB.l)(IB, oB)
        })(), IB
      })(),
      Lv = (() => {
        let BB, IB, ZB = [jG({
            ns: Jv,
            name: "build"
          })],
          TB = [];
        IB = class {
          constructor() {
            this.item = []
          }
        };
        return (0, OB.p)(IB, "ThreeMfBuild"), (() => {
          const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, OB.j)(null, BB = {
            value: IB
          }, ZB, {
            kind: "class",
            name: IB.name,
            metadata: JB
          }, null, TB), IB = BB.value, JB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: JB
          }), (0, OB.l)(IB, TB)
        })(), IB
      })(),
      ev = (() => {
        let BB, IB, ZB, TB, JB, oB = [jG({
            ns: Jv,
            name: "item"
          })],
          GB = [],
          vB = [],
          kB = [],
          cB = [],
          nB = [],
          hB = [],
          zB = [];
        IB = class {
          constructor(BB, IB, ZB) {
            this.objectid = (0, OB.l)(this, vB, void 0), this.transform = ((0, OB.l)(this, kB), (0, OB.l)(this, cB, void 0)), this.partnumber = ((0, OB.l)(this, nB), (0, OB.l)(this, hB, void 0)), this.metadatagroup = (0, OB.l)(this, zB), this.objectid = BB, this.transform = IB, this.partnumber = ZB
          }
        };
        return (0, OB.p)(IB, "ThreeMfItem"), (() => {
          const FB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZB = [RG({
            name: "objectid"
          })], TB = [RG({
            name: "transform",
            formatter: sv
          })], JB = [RG({
            name: "partnumber"
          })], (0, OB.j)(null, null, ZB, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: BB => "objectid" in BB,
              get: BB => BB.objectid,
              set: (BB, IB) => {
                BB.objectid = IB
              }
            },
            metadata: FB
          }, vB, kB), (0, OB.j)(null, null, TB, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: BB => "transform" in BB,
              get: BB => BB.transform,
              set: (BB, IB) => {
                BB.transform = IB
              }
            },
            metadata: FB
          }, cB, nB), (0, OB.j)(null, null, JB, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: BB => "partnumber" in BB,
              get: BB => BB.partnumber,
              set: (BB, IB) => {
                BB.partnumber = IB
              }
            },
            metadata: FB
          }, hB, zB), (0, OB.j)(null, BB = {
            value: IB
          }, oB, {
            kind: "class",
            name: IB.name,
            metadata: FB
          }, null, GB), IB = BB.value, FB && Object.defineProperty(IB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: FB
          }), (0, OB.l)(IB, GB)
        })(), IB
      })();
    class uv {
      constructor(BB, IB) {
        this._object = new pv(BB, IB)
      }
      withName(BB) {
        return this._object.name = BB, this
      }
      withThumbnail(BB) {
        return this._object.thumbnail = BB, this
      }
      withProperty(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = BB, this._object.id = IB, this
      }
      build() {
        return this._object
      }
      reset(BB, IB) {
        this._object = new pv(BB, IB)
      }
    }
    class fv extends uv {
      constructor(BB) {
        super(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv.model), this._object.content = new Rv
      }
      withComponent(BB, IB) {
        return this._object.content.component.push(new rv(BB, IB)), this
      }
    }
    class lv extends uv {
      constructor(BB) {
        super(BB, vv.model)
      }
      withPostProcessHandlers(BB, IB) {
        return this._vh = BB, this._th = IB, this
      }
      withData(BB) {
        return this._object.content = this._buildMesh(BB), this
      }
      withMaterial(BB, IB) {
        return this._object.pid = BB, this._object.pindex = IB, this
      }
      _buildMesh(BB) {
        const IB = this._buildVertices(BB.positions),
          ZB = this._buildTriangle(BB.indices);
        return new av(IB, ZB)
      }
      _buildVertices(BB) {
        const IB = new Hv;
        if (BB)
          for (let ZB = 0; ZB < BB.length;) {
            const TB = BB[ZB++],
              JB = BB[ZB++],
              oB = BB[ZB++];
            let GB = new Mv(TB, JB, oB);
            this._vh && (GB = this._vh(GB)), IB.vertex.push(GB)
          }
        return IB
      }
      _buildTriangle(BB) {
        const IB = new jv;
        if (BB)
          for (let ZB = 0; ZB < BB.length;) {
            const TB = BB[ZB++],
              JB = BB[ZB++],
              oB = BB[ZB++];
            let GB = new Pv(TB, JB, oB);
            this._th && (GB = this._th(GB)), IB.triangle.push(GB)
          }
        return IB
      }
    }
    class Av {
      constructor(BB) {
        this._m = new mv(BB)
      }
      withColor(BB, IB) {
        this._m.base = this._m.base ?? [];
        let ZB = this._m.base.find((IB => IB.name.toLowerCase() === BB.toLowerCase()));
        return ZB ? (ZB.displaycolor = this._rgbaToHex(IB), this) : (ZB = new Xv(BB, this._rgbaToHex(IB)), this._m.base.push(ZB), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(BB) {
        const IB = BB => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(BB, 1 / 2.2)))),
          ZB = IB(BB.r).toString(16).padStart(2, "0").toUpperCase(),
          TB = IB(BB.g).toString(16).padStart(2, "0").toUpperCase(),
          JB = IB(BB.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof BB.a) {
          return `#${ZB}${TB}${JB}${Math.round(Math.min(255,Math.max(0,255*BB.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${ZB}${TB}${JB}`
      }
    }
    class tv {
      constructor() {
        this._model = new wv, this._objects = new Map
      }
      withMetaData(BB, IB, ZB, TB) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Ov(BB, IB, ZB, TB)), this
      }
      withMaterial(BB) {
        return BB instanceof Av && (BB = BB.build()), BB && (this._model.resources = this._model.resources ?? new iv, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(BB)), this
      }
      withMesh(BB) {
        return BB instanceof lv && (BB = BB.build()), this._model.resources = this._model.resources ?? new iv, this._model.resources.object.push(BB), this
      }
      withComponents(BB) {
        return BB instanceof fv && (BB = BB.build()), this._model.resources = this._model.resources ?? new iv, this._model.resources.object.push(BB), this
      }
      withBuild(BB, IB, ZB) {
        return this._model.build = this._model.build ?? new Lv, this._model.build.item?.push(new ev(BB, IB, ZB)), this
      }
      withUnit(BB) {
        return this._model.unit = BB, this
      }
      reset() {
        return this._model = new wv, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    tv.KnownMetaSet = new Set(wv.KnownMeta.map((BB => BB.toLowerCase())));
    class bv {
      withContentType(BB) {
        this._cts || (this._cts = new yv);
        const IB = this._cts.items;
        return IB.some((IB => IB.ext === BB.ext && IB.ct === BB.ct)) || IB.push(BB), this
      }
      withRelationship(BB) {
        this._rs || (this._rs = new Wv);
        const IB = this._rs.items;
        return IB.some((IB => IB.id === BB.id)) || IB.push(BB), this.withContentType(new Uv("rels", nv.Relationships)), this
      }
      withModel(BB) {
        return BB instanceof tv && (BB = BB.build()), this._m = BB, this.withContentType(new Uv("model", nv.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const BB = `${zv}${Fv}`;
        if (!this._rs) {
          const IB = `/${BB}`;
          this.withRelationship(new dv("rel0", qv.ThreeDimModel, IB))
        }
        return new Cv(this._cts, this._rs, this._m)
      }
    }
    class xv {
      constructor(BB) {
        this._o = BB
      }
      get options() {
        return this._o
      }
      async serializeAsync(BB) {
        const IB = await this.ensureZipLibReadyAsync();
        if (!IB) return;
        const ZB = IB.Zip,
          TB = IB.ZipDeflate;
        if (!ZB || !TB) throw new Error("fflate Zip / ZipDeflate not available");
        const JB = function(BB, IB, ZB) {
          const JB = new TB(IB, {
            level: 6
          });
          BB.add(JB);
          const oB = function(BB) {
              return {
                push: (IB, ZB) => BB.push(IB, ZB)
              }
            }(JB),
            GB = new Tv(oB),
            vB = new Iv(GB).dec("1.0", "UTF-8");
          new VG(vB).serialize(ZB), GB.finish()
        };
        for (var oB = arguments.length, GB = new Array(oB > 1 ? oB - 1 : 0), vB = 1; vB < oB; vB++) GB[vB - 1] = arguments[vB];
        const kB = this.toDocument(...GB);
        if (!kB) return;
        const cB = new ZB(BB);
        JB(cB, gv, kB.contentTypes), JB(cB, `${hv}${Nv}`, kB.relationships), JB(cB, `${zv}${Fv}`, kB.model), cB.end()
      }
      toDocument() {
        const BB = (new tv).withUnit(this._o?.unit ?? Gv.millimeter);
        if (this.options.metadata)
          for (const JB in this.options.metadata) BB.withMetaData(JB, this.options.metadata[JB]);
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        return (new bv).withModel(this.toModel(BB, ...ZB)).build()
      }
    }
    class Ev {
      static async SerializeToMemoryAsync(BB) {
        const IB = new Array;
        let ZB = 0;
        for (var TB = arguments.length, JB = new Array(TB > 1 ? TB - 1 : 0), oB = 1; oB < TB; oB++) JB[oB - 1] = arguments[oB];
        if (await BB.serializeAsync((function(BB, TB, JB) {
            IB.push(TB), ZB += TB.length
          }), ...JB), !ZB) return;
        const GB = new Uint8Array(ZB);
        let vB = 0;
        for (const kB of IB) GB.set(kB, vB), vB += kB.length;
        return GB
      }
    }
    class Dv {}
    Dv.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Kv {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = BB, this._to = IB, this._step = ZB, this._i = BB
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
    class Vv extends xv {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...Vv.DefaultOptions,
          ...BB
        })
      }
      toModel(BB) {
        for (var IB = arguments.length, ZB = new Array(IB > 1 ? IB - 1 : 0), TB = 1; TB < IB; TB++) ZB[TB - 1] = arguments[TB];
        ZB = ZB.filter((BB => BB instanceof cT.c || BB instanceof FB.e));
        const JB = new Kv,
          oB = BB,
          GB = new Map,
          vB = this.options.exportInstances ? [] : null;
        for (let kB = 0; kB < ZB.length; kB++) {
          const BB = ZB[kB];
          if (BB instanceof FB.e) {
            vB?.push(BB);
            continue
          }
          const IB = BB.name || `mesh${kB}`,
            TB = BB.getWorldMatrix(),
            cB = this._handleBabylonTo3mfMatrixTransformToRef(TB, Qv.Zero()),
            nB = BB.EW;
          if (void 0 === nB) continue;
          const hB = 1 == nB.length;
          for (let ZB = 0; ZB < nB.length; ZB++) {
            const TB = nB[ZB],
              vB = this._extractSubMesh(BB, TB);
            if (vB) {
              const BB = hB ? `${IB}` : `${IB}_${ZB}`,
                kB = new lv(JB.next()).withData(vB).withName(BB).build();
              oB.withMesh(kB), oB.withBuild(kB.id, cB), GB.set(TB, kB)
            }
          }
        }
        if (vB && vB.length) {
          const BB = this._groupBy(vB, (BB => BB.wJB));
          for (const [IB, ZB] of Array.from(BB.entries()))
            if (ZB && ZB.length)
              for (let BB = 0; BB < ZB.length; BB++) {
                const TB = ZB[BB].getWorldMatrix(),
                  JB = IB.EW;
                for (let BB = 0; BB < JB.length; BB++) {
                  const IB = JB[BB],
                    ZB = GB.get(IB);
                  ZB && oB.withBuild(ZB.id, this._handleBabylonTo3mfMatrixTransformToRef(TB, Qv.Zero()))
                }
              }
        }
        return oB.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const BB = globalThis;
          return BB.fflate || await JB.Tools.LoadScriptAsync(Dv.FFLATEUrl), BB.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(BB, IB) {
        const ZB = BB.MTB();
        if (!ZB) return;
        const TB = BB.getVerticesData(Vv._PositionKind);
        if (!TB) return;
        if (0 == IB.indexStart && IB.indexCount == ZB.length) return {
          positions: TB,
          indices: ZB
        };
        const JB = IB.indexStart,
          oB = new Map,
          GB = [],
          vB = new Uint32Array(IB.indexCount);
        for (let kB = 0; kB < IB.indexCount; kB++) {
          const BB = ZB[JB + kB];
          let IB = oB.get(BB);
          if (void 0 === IB) {
            IB = oB.size, oB.set(BB, IB);
            const ZB = 3 * BB;
            GB.push(TB[ZB], TB[ZB + 1], TB[ZB + 2])
          }
          vB[kB] = IB
        }
        return {
          positions: new Float32Array(GB),
          indices: vB
        }
      }
      _groupBy(BB, IB) {
        const ZB = new Map;
        for (const TB of BB) {
          const BB = IB(TB),
            JB = ZB.get(BB);
          JB ? JB.push(TB) : ZB.set(BB, [TB])
        }
        return ZB
      }
      _handleBabylonTo3mfMatrixTransformToRef(BB, IB) {
        const ZB = BB.multiplyToRef(Vv._R_BJS_TO_3MF, XB.b.Zero()).m;
        return IB.values = [ZB[0], ZB[1], ZB[2], ZB[4], ZB[5], ZB[6], ZB[8], ZB[9], ZB[10], ZB[12], ZB[13], ZB[14]], IB
      }
    }
    Vv.DefaultOptions = {
      unit: Gv.meter,
      exportInstances: !1
    }, Vv._PositionKind = "position", Vv._R_BJS_TO_3MF = XB.b.RotationX(Math.PI / 2).multiply(XB.b.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);