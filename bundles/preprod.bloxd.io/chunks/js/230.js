export const id = 230;
export const ids = [230, 235];
export const modules = {
  41655: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC
    });
    var QC = ZC(41590),
      wC = ZC(39803);
    let bC = !1;

    function nC() {
      bC || (bC = !0, wC.b.prototype._sphericalPolynomialTargetSize = 0, wC.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(wC.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = QC.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((CC => {
              this._texture._sphericalPolynomial = CC, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(CC) {
          this._texture && (this._texture._sphericalPolynomial = CC)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  37138: (CC, zC, ZC) => {
    ZC.d(zC, {
      Color3: () => QC.e,
      e: () => QC.g
    });
    var QC = ZC(37142);
    (0, QC.i)()
  },
  37590: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC
    });
    var QC = ZC(37596);
    class wC {
      static GetPlanes(CC) {
        const zC = [];
        for (let ZC = 0; ZC < 6; ZC++) zC.push(new QC.d(0, 0, 0, 0));
        return wC.GetPlanesToRef(CC, zC), zC
      }
      static GetNearPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] + ZC[2], zC.normal.y = ZC[7] + ZC[6], zC.normal.z = ZC[11] + ZC[10], zC.d = ZC[15] + ZC[14], zC.normalize()
      }
      static GetFarPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] - ZC[2], zC.normal.y = ZC[7] - ZC[6], zC.normal.z = ZC[11] - ZC[10], zC.d = ZC[15] - ZC[14], zC.normalize()
      }
      static GetLeftPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] + ZC[0], zC.normal.y = ZC[7] + ZC[4], zC.normal.z = ZC[11] + ZC[8], zC.d = ZC[15] + ZC[12], zC.normalize()
      }
      static GetRightPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] - ZC[0], zC.normal.y = ZC[7] - ZC[4], zC.normal.z = ZC[11] - ZC[8], zC.d = ZC[15] - ZC[12], zC.normalize()
      }
      static GetTopPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] - ZC[1], zC.normal.y = ZC[7] - ZC[5], zC.normal.z = ZC[11] - ZC[9], zC.d = ZC[15] - ZC[13], zC.normalize()
      }
      static GetBottomPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] + ZC[1], zC.normal.y = ZC[7] + ZC[5], zC.normal.z = ZC[11] + ZC[9], zC.d = ZC[15] + ZC[13], zC.normalize()
      }
      static GetPlanesToRef(CC, zC) {
        wC.GetNearPlaneToRef(CC, zC[0]), wC.GetFarPlaneToRef(CC, zC[1]), wC.GetLeftPlaneToRef(CC, zC[2]), wC.GetRightPlaneToRef(CC, zC[3]), wC.GetTopPlaneToRef(CC, zC[4]), wC.GetBottomPlaneToRef(CC, zC[5])
      }
      static IsPointInFrustum(CC, zC) {
        for (let ZC = 0; ZC < 6; ZC++)
          if (zC[ZC].dotCoordinate(CC) < 0) return !1;
        return !0
      }
    }
  },
  37596: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC
    });
    var QC = ZC(36963);
    class wC {
      constructor(CC, zC, ZC, wC) {
        this.normal = new QC.r(CC, zC, ZC), this.d = wC
      }
      VZC() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new wC(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let CC = this.normal.getHashCode();
        return CC = 397 * CC ^ this.d, CC
      }
      normalize() {
        const CC = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let zC = 0;
        return 0 !== CC && (zC = 1 / CC), this.normal.x *= zC, this.normal.y *= zC, this.normal.z *= zC, this.d *= zC, this
      }
      transform(CC) {
        const zC = wC._TmpMatrix;
        CC.invertToRef(zC);
        const ZC = zC.m,
          QC = this.normal.x,
          bC = this.normal.y,
          nC = this.normal.z,
          fC = this.d,
          oC = QC * ZC[0] + bC * ZC[1] + nC * ZC[2] + fC * ZC[3],
          qC = QC * ZC[4] + bC * ZC[5] + nC * ZC[6] + fC * ZC[7],
          FC = QC * ZC[8] + bC * ZC[9] + nC * ZC[10] + fC * ZC[11],
          WC = QC * ZC[12] + bC * ZC[13] + nC * ZC[14] + fC * ZC[15];
        return new wC(oC, qC, FC, WC)
      }
      dotCoordinate(CC) {
        return this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z + this.d
      }
      copyFromPoints(CC, zC, ZC) {
        const QC = zC.x - CC.x,
          wC = zC.y - CC.y,
          bC = zC.z - CC.z,
          nC = ZC.x - CC.x,
          fC = ZC.y - CC.y,
          oC = ZC.z - CC.z,
          qC = wC * oC - bC * fC,
          FC = bC * nC - QC * oC,
          WC = QC * fC - wC * nC,
          NC = Math.sqrt(qC * qC + FC * FC + WC * WC);
        let MC;
        return MC = 0 !== NC ? 1 / NC : 0, this.normal.x = qC * MC, this.normal.y = FC * MC, this.normal.z = WC * MC, this.d = -(this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z), this
      }
      isFrontFacingTo(CC, zC) {
        return QC.r.Dot(this.normal, CC) <= zC
      }
      signedDistanceTo(CC) {
        return QC.r.Dot(CC, this.normal) + this.d
      }
      static FromArray(CC) {
        return new wC(CC[0], CC[1], CC[2], CC[3])
      }
      static FromPoints(CC, zC, ZC) {
        const QC = new wC(0, 0, 0, 0);
        return QC.copyFromPoints(CC, zC, ZC), QC
      }
      static FromPositionAndNormal(CC, zC) {
        const ZC = new wC(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(CC, zC, ZC)
      }
      static FromPositionAndNormalToRef(CC, zC, ZC) {
        return ZC.normal.Av(zC), ZC.normal.normalize(), ZC.d = -CC.dot(ZC.normal), ZC
      }
      static SignedDistanceToPlaneFromPositionAndNormal(CC, zC, ZC) {
        const wC = -(zC.x * CC.x + zC.y * CC.y + zC.z * CC.z);
        return QC.r.Dot(ZC, zC) + wC
      }
    }
    wC._TmpMatrix = QC.b.Identity()
  },
  36961: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      Matrix: () => QC.b,
      Quaternion: () => QC.f,
      RegisterMathVector: () => QC.g,
      TmpVectors: () => QC.j,
      Vector2: () => QC.n,
      Eg: () => QC.r,
      Vector4: () => QC.u
    });
    var QC = ZC(36963);
    (0, QC.g)()
  },
  37931: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    class QC {
      constructor(CC, zC, ZC, QC) {
        this.x = CC, this.y = zC, this.width = ZC, this.height = QC
      }
      toGlobal(CC, zC) {
        return new QC(this.x * CC, this.y * zC, this.width * CC, this.height * zC)
      }
      toGlobalToRef(CC, zC, ZC) {
        return ZC.x = this.x * CC, ZC.y = this.y * zC, ZC.width = this.width * CC, ZC.height = this.height * zC, this
      }
      clone() {
        return new QC(this.x, this.y, this.width, this.height)
      }
    }
  },
  41590: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => qC
    });
    var QC = ZC(36963),
      wC = ZC(36991),
      bC = ZC(39800),
      nC = ZC(36968),
      fC = ZC(37142);
    class oC {
      constructor(CC, zC, ZC, QC) {
        this.name = CC, this.worldAxisForNormal = zC, this.worldAxisForFileX = ZC, this.worldAxisForFileY = QC
      }
    }
    class qC {
      static _NearestPow2Floor(CC) {
        return CC <= 1 ? 1 : 1 << Math.floor(Math.log2(CC))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(CC) {
        if (!CC.isCube) return null;
        CC.Km()?.mg().flushFramebuffer();
        const zC = CC.getSize().width,
          ZC = CC._sphericalPolynomialTargetSize,
          QC = ZC > 0 ? this._NearestPow2Floor(ZC) : 0,
          wC = !CC.noMipmap && !0 === CC._texture?.generateMipMaps,
          bC = QC > 0 && QC < zC && wC,
          nC = bC ? Math.max(0, Math.round(Math.log2(zC / QC))) : 0,
          fC = bC ? Math.max(1, Math.floor(zC / Math.pow(2, nC))) : zC,
          oC = CC.readPixels(0, nC, void 0, !1),
          qC = CC.readPixels(1, nC, void 0, !1);
        let FC, WC;
        CC.isRenderTarget ? (FC = CC.readPixels(3, nC, void 0, !1), WC = CC.readPixels(2, nC, void 0, !1)) : (FC = CC.readPixels(2, nC, void 0, !1), WC = CC.readPixels(3, nC, void 0, !1));
        const NC = CC.readPixels(4, nC, void 0, !1),
          MC = CC.readPixels(5, nC, void 0, !1),
          gC = CC.gammaSpace,
          SC = QC > 0 && QC < zC && !bC;
        return new Promise((CC => {
          Promise.all([qC, oC, FC, WC, NC, MC]).then((ZC => {
            let [wC, bC, nC, oC, qC, FC] = ZC, WC = fC;
            if (SC) {
              const CC = 4;
              wC = this._DownsampleFace(wC, zC, QC, CC), bC = this._DownsampleFace(bC, zC, QC, CC), nC = this._DownsampleFace(nC, zC, QC, CC), oC = this._DownsampleFace(oC, zC, QC, CC), qC = this._DownsampleFace(qC, zC, QC, CC), FC = this._DownsampleFace(FC, zC, QC, CC), WC = QC
            }
            const NC = {
              size: WC,
              right: bC,
              left: wC,
              up: nC,
              down: oC,
              front: qC,
              back: FC,
              format: 5,
              type: wC instanceof Float32Array ? 1 : 0,
              gammaSpace: gC
            };
            CC(this.ConvertCubeMapToSphericalPolynomial(NC))
          }))
        }))
      }
      static _AreaElement(CC, zC) {
        return Math.atan2(CC * zC, Math.sqrt(CC * CC + zC * zC + 1))
      }
      static _DownsampleFace(CC, zC, ZC, QC) {
        const wC = CC instanceof Float32Array ? CC : Float32Array.from(CC),
          bC = ZC * ZC * QC,
          nC = new Float32Array(bC),
          fC = zC / ZC,
          oC = 1 / (fC * fC);
        for (let FC = 0; FC < ZC; FC++) {
          const CC = Math.floor(FC * fC),
            bC = Math.floor((FC + 1) * fC);
          for (let qC = 0; qC < ZC; qC++) {
            const WC = Math.floor(qC * fC),
              NC = Math.floor((qC + 1) * fC),
              MC = (FC * ZC + qC) * QC;
            for (let ZC = 0; ZC < QC; ZC++) {
              let fC = 0;
              for (let nC = CC; nC < bC; nC++)
                for (let CC = WC; CC < NC; CC++) fC += wC[(nC * zC + CC) * QC + ZC];
              nC[MC + ZC] = fC * oC
            }
          }
        }
        if (CC instanceof Float32Array) return nC;
        const qC = new(0, CC.constructor)(bC);
        for (let FC = 0; FC < bC; FC++) qC[FC] = nC[FC] + .5 | 0;
        return qC
      }
      static ConvertCubeMapToSphericalPolynomial(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZC = zC > 0 ? this._NearestPow2Floor(zC) : 0;
        if (ZC > 0 && CC.size > ZC) {
          const zC = 5 === CC.format ? 4 : 3,
            QC = ["right", "left", "up", "down", "front", "back"],
            wC = {};
          for (const bC of QC) wC[bC] = this._DownsampleFace(CC[bC], CC.size, ZC, zC);
          CC = {
            ...CC,
            ...wC,
            size: ZC
          }
        }
        const QC = new bC.c;
        let oC = 0;
        const qC = 2 / CC.size,
          FC = qC,
          WC = .5 * qC,
          NC = WC - 1;
        for (let bC = 0; bC < 6; bC++) {
          const zC = this._FileFaces[bC],
            ZC = CC[zC.name];
          let MC = NC;
          const gC = 5 === CC.format ? 4 : 3;
          for (let bC = 0; bC < CC.size; bC++) {
            let SC = NC;
            for (let FC = 0; FC < CC.size; FC++) {
              const NC = zC.worldAxisForFileX.scale(SC).add(zC.worldAxisForFileY.scale(MC)).add(zC.worldAxisForNormal);
              NC.normalize();
              const pC = this._AreaElement(SC - WC, MC - WC) - this._AreaElement(SC - WC, MC + WC) - this._AreaElement(SC + WC, MC - WC) + this._AreaElement(SC + WC, MC + WC);
              let PC = ZC[bC * CC.size * gC + FC * gC + 0],
                GC = ZC[bC * CC.size * gC + FC * gC + 1],
                RC = ZC[bC * CC.size * gC + FC * gC + 2];
              isNaN(PC) && (PC = 0), isNaN(GC) && (GC = 0), isNaN(RC) && (RC = 0), 0 === CC.type && (PC /= 255, GC /= 255, RC /= 255), CC.gammaSpace && (PC = Math.pow((0, wC.Clamp)(PC), nC.i), GC = Math.pow((0, wC.Clamp)(GC), nC.i), RC = Math.pow((0, wC.Clamp)(RC), nC.i));
              const AC = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const CC = Math.max(PC, GC, RC);
                if (CC > AC) {
                  const zC = AC / CC;
                  PC *= zC, GC *= zC, RC *= zC
                }
              } else PC = (0, wC.Clamp)(PC, 0, AC), GC = (0, wC.Clamp)(GC, 0, AC), RC = (0, wC.Clamp)(RC, 0, AC);
              const xC = new fC.e(PC, GC, RC);
              QC.addLight(NC, xC, pC), oC += pC, SC += qC
            }
            MC += FC
          }
        }
        const MC = 6 * (4 * Math.PI) / 6 / oC;
        return QC.scaleInPlace(MC), QC.convertIncidentRadianceToIrradiance(), QC.convertIrradianceToLambertianRadiance(), bC.g.FromHarmonics(QC)
      }
    }
    qC._FileFaces = [new oC("right", new QC.r(1, 0, 0), new QC.r(0, 0, -1), new QC.r(0, -1, 0)), new oC("left", new QC.r(-1, 0, 0), new QC.r(0, 0, 1), new QC.r(0, -1, 0)), new oC("up", new QC.r(0, 1, 0), new QC.r(1, 0, 0), new QC.r(0, 0, 1)), new oC("down", new QC.r(0, -1, 0), new QC.r(1, 0, 0), new QC.r(0, 0, -1)), new oC("front", new QC.r(0, 0, 1), new QC.r(1, 0, 0), new QC.r(0, -1, 0)), new oC("back", new QC.r(0, 0, -1), new QC.r(-1, 0, 0), new QC.r(0, -1, 0))], qC.MAX_HDRI_VALUE = 4096, qC.PRESERVE_CLAMPED_COLORS = !1
  },
  41349: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC.g,
      d: () => QC.m
    });
    var QC = ZC(39865);
    (0, QC.p)()
  },
  37731: (CC, zC, ZC) => {
    function QC() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
        const zC = 16 * Math.random() | 0;
        return ("x" === CC ? zC : 3 & zC | 8).toString(16)
      }))
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  41630: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = ZC(41618),
      wC = ZC(41634);
    class bC {
      static ExpandRGBDTexture(CC) {
        const zC = CC._texture;
        if (!zC || !CC.isRGBD) return;
        const wC = zC.mg(),
          bC = wC.getCaps(),
          nC = zC.isReady;
        let fC = !1;
        bC.textureHalfFloatRender && bC.textureHalfFloatLinearFiltering ? (fC = !0, zC.type = 2) : bC.textureFloatRender && bC.textureFloatLinearFiltering && (fC = !0, zC.type = 1), fC && (zC.isReady = !1, zC._isRGBD = !1, zC.invertY = !1);
        const oC = async () => {
          const bC = wC.isWebGPU,
            nC = bC ? 1 : 0;
          zC.isReady = !1, bC ? await ZC.e(342).then((() => ZC(61040))) : await ZC.e(324).then((() => ZC(61045)));
          const fC = new QC.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, wC, !1, void 0, zC.type, void 0, null, !1, void 0, nC);
          fC.externalTextureSamplerBinding = !0;
          const oC = wC.createRenderTargetTexture(zC.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: zC.samplingMode,
            type: zC.type,
            format: 5
          });
          fC.onEffectCreatedObservable.addOnce((ZC => {
            ZC.executeWhenCompiled((() => {
              fC.onApply = CC => {
                CC._bindTexture("textureSampler", zC), CC.setFloat2("scale", 1, 1)
              }, CC.Km()?.postProcessManager.directRender([fC], oC, !0), wC.restoreDefaultFramebuffer(), wC._releaseTexture(zC), fC && fC.dispose(), oC._swapAndDie(zC), zC.isReady = !0
            }))
          }))
        };
        fC && (nC ? oC() : CC.onLoadObservable.addOnce(oC))
      }
      static async EncodeTextureToRGBD(CC, zC) {
        let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return zC.mg().isWebGPU ? await ZC.e(343).then((() => ZC(61061))) : await ZC.e(325).then((() => ZC(61056))), await (0, wC.b)("rgbdEncode", CC, zC, QC, 1, 5)
      }
    }
  },
  60923: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      AsyncLoop: () => QC.d,
      RegisterTools: () => QC.e,
      Tools: () => QC.g,
      className: () => QC.i
    });
    var QC = ZC(39913);
    (0, QC.e)()
  },
  41672: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC
    });
    class QC {
      constructor(CC) {
        this._pendingActions = new Array, this._workerInfos = CC.map((CC => ({
          workerPromise: Promise.resolve(CC),
          idle: !0
        })))
      }
      dispose() {
        for (const CC of this._workerInfos) CC.workerPromise.then((CC => {
          CC.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(CC) {
        this._executeOnIdleWorker(CC) || this._pendingActions.push(CC)
      }
      _executeOnIdleWorker(CC) {
        for (const zC of this._workerInfos)
          if (zC.idle) return this._execute(zC, CC), !0;
        return !1
      }
      _execute(CC, zC) {
        CC.idle = !1, CC.workerPromise.then((ZC => {
          zC(ZC, (() => {
            const zC = this._pendingActions.shift();
            zC ? this._execute(CC, zC) : CC.idle = !0
          }))
        }))
      }
    }
    class wC extends QC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wC.DefaultOptions;
        super([]), this._maxWorkers = CC, this._createWorkerAsync = zC, this._options = ZC
      }
      push(CC) {
        if (!this._executeOnIdleWorker(CC))
          if (this._workerInfos.length < this._maxWorkers) {
            const zC = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(zC), this._execute(zC, CC)
          } else this._pendingActions.push(CC)
      }
      _execute(CC, zC) {
        CC.timeoutId && (clearTimeout(CC.timeoutId), delete CC.timeoutId), super._execute(CC, ((ZC, QC) => {
          zC(ZC, (() => {
            QC(), CC.idle && (CC.timeoutId = setTimeout((() => {
              CC.workerPromise.then((CC => {
                CC.terminate()
              }));
              const zC = this._workerInfos.indexOf(CC); - 1 !== zC && this._workerInfos.splice(zC, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    wC.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  60950: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      AbstractThreeMfSerializer: () => kf,
      BVHExporter: () => Kn,
      ContentTypeFileName: () => Pf,
      DefaultXmlSerializerFormatOptions: () => jn,
      DefaultXmlSerializerNumberOptions: () => Dn,
      EXT_lights_area: () => pw,
      EXT_mesh_gpu_instancing: () => uQ,
      EXT_texture_avif: () => bn,
      EXT_texture_webp: () => zn,
      GLTF2Export: () => lQ,
      GLTFData: () => qC,
      GetXmlFieldMeta: () => rn,
      GetXmlName: () => sn,
      IsQualifiedName: () => Yn,
      KHR_draco_mesh_compression: () => OQ,
      KHR_interactivity: () => qw,
      KHR_lights_punctual: () => bw,
      KHR_materials_anisotropy: () => Aw,
      KHR_materials_clearcoat: () => vw,
      KHR_materials_coat: () => mw,
      KHR_materials_diffuse_roughness: () => cb,
      KHR_materials_diffuse_transmission: () => rw,
      KHR_materials_dispersion: () => tw,
      KHR_materials_emissive_strength: () => Lw,
      KHR_materials_fuzz: () => Wb,
      KHR_materials_ior: () => kw,
      KHR_materials_iridescence: () => Zb,
      KHR_materials_openpbr: () => Tb,
      KHR_materials_sheen: () => nb,
      KHR_materials_specular: () => Sb,
      KHR_materials_transmission: () => Rb,
      KHR_materials_unlit: () => ib,
      KHR_materials_volume: () => Kb,
      KHR_materials_volume_scatter: () => Hb,
      KHR_texture_basisu: () => Ob,
      KHR_texture_transform: () => jb,
      Known3mfRelationshipTypes: () => Gf,
      KnownI3mfContentType: () => Nf,
      Matrix3d: () => vf,
      MatrixFormatter: () => ef,
      ModelFileName: () => Sf,
      NumberFormatter: () => Un,
      OBJExport: () => nC,
      Object3dDirName: () => gf,
      OpenXmlContentTypesNamespace: () => Ff,
      OpenXmlRelationshipsNamespace: () => Wf,
      RegisterEXT_lights_area: () => Gw,
      RegisterEXT_mesh_gpu_instancing: () => sQ,
      RegisterEXT_texture_avif: () => fn,
      RegisterEXT_texture_webp: () => Qn,
      RegisterKHR_draco_mesh_compression: () => VQ,
      RegisterKHR_interactivity: () => Ww,
      RegisterKHR_lights_punctual: () => fw,
      RegisterKHR_materials_anisotropy: () => Jw,
      RegisterKHR_materials_clearcoat: () => hw,
      RegisterKHR_materials_coat: () => Ew,
      RegisterKHR_materials_diffuse_roughness: () => rb,
      RegisterKHR_materials_diffuse_transmission: () => Tw,
      RegisterKHR_materials_dispersion: () => jw,
      RegisterKHR_materials_emissive_strength: () => Bw,
      RegisterKHR_materials_fuzz: () => Mb,
      RegisterKHR_materials_ior: () => Cb,
      RegisterKHR_materials_iridescence: () => wb,
      RegisterKHR_materials_openpbr: () => tb,
      RegisterKHR_materials_sheen: () => ob,
      RegisterKHR_materials_specular: () => Pb,
      RegisterKHR_materials_transmission: () => xb,
      RegisterKHR_materials_unlit: () => eb,
      RegisterKHR_materials_volume: () => db,
      RegisterKHR_materials_volume_scatter: () => lb,
      RegisterKHR_texture_basisu: () => Vb,
      RegisterKHR_texture_transform: () => Lb,
      RelationshipDirName: () => Mf,
      RelationshipFileName: () => pf,
      ResolveFormatOptions: () => Ln,
      ResolveNumberOptions: () => yn,
      STLExport: () => qn,
      ST_ObjectType: () => qf,
      ST_Unit: () => of,
      StringXmlWriter: () => wf,
      ThreeDimModelNamespace: () => nf,
      ThreeMf: () => Vf,
      ThreeMfBase: () => af,
      ThreeMfBaseMaterials: () => Tf,
      ThreeMfBuild: () => tf,
      ThreeMfComponent: () => sf,
      ThreeMfComponents: () => rf,
      ThreeMfComponentsBuilder: () => yf,
      ThreeMfContentType: () => Af,
      ThreeMfContentTypes: () => Rf,
      ThreeMfDocument: () => If,
      ThreeMfDocumentBuilder: () => Of,
      ThreeMfItem: () => Df,
      ThreeMfMaterialBuilder: () => Uf,
      ThreeMfMesh: () => Hf,
      ThreeMfMeshBuilder: () => Lf,
      ThreeMfMeta: () => Kf,
      ThreeMfMetadataGroup: () => Yf,
      ThreeMfModel: () => hf,
      ThreeMfModelBuilder: () => Bf,
      ThreeMfObject: () => mf,
      ThreeMfObjectBuilder: () => jf,
      ThreeMfRelationship: () => Jf,
      ThreeMfRelationships: () => xf,
      ThreeMfResources: () => df,
      ThreeMfSerializer: () => Zo,
      ThreeMfSerializerGlobalConfiguration: () => Co,
      ThreeMfTriangle: () => uf,
      ThreeMfTriangles: () => Xf,
      ThreeMfVertex: () => lf,
      ThreeMfVertices: () => Ef,
      ToQualifiedString: () => tn,
      TokenType: () => Zf,
      TriangleSetsNamespace: () => ff,
      USDZExportAsync: () => en,
      Utf8XmlWriterToBytes: () => bf,
      XmlAttr: () => cn,
      XmlBuilder: () => Qf,
      XmlElem: () => un,
      XmlIgnore: () => Xn,
      XmlName: () => En,
      XmlNameToParts: () => an,
      XmlSerializer: () => Cf,
      _ConvertToGLTFPBRMetallicRoughness: () => vZ,
      _SolveMetallic: () => iZ,
      __IGLTFExporterExtension: () => fC
    });
    var QC = ZC(36961),
      wC = ZC(60923),
      bC = ZC(40110);
    class nC {
      static OBJ(CC, zC, ZC, nC) {
        const fC = [];
        let oC = 1,
          qC = 1;
        zC && (ZC || (ZC = "mat"), fC.push("mtllib " + ZC + ".mtl"));
        for (let FC = 0; FC < CC.length; FC++) {
          const ZC = CC[FC],
            WC = ZC.name || `mesh${FC}}`;
          fC.push(`o ${WC}`);
          let NC = null;
          if (nC) {
            const CC = ZC.computeWorldMatrix(!0);
            NC = new QC.Matrix, CC.invertToRef(NC), ZC.bakeTransformIntoVertices(CC)
          }
          if (zC) {
            const CC = ZC.material;
            CC && fC.push("usemtl " + CC.id)
          }
          const MC = ZC.geometry;
          if (!MC) {
            wC.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const gC = MC.getVerticesData("position"),
            SC = MC.getVerticesData("normal"),
            pC = MC.getVerticesData("uv"),
            PC = MC.CQC();
          let GC = 0,
            RC = 0;
          if (!gC || !PC) {
            wC.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const AC = CC[0].Km().useRightHandedSystem ? 1 : -1;
          for (let CC = 0; CC < gC.length; CC += 3) fC.push("v " + gC[CC] * AC + " " + gC[CC + 1] + " " + gC[CC + 2]), GC++;
          if (null != SC)
            for (let CC = 0; CC < SC.length; CC += 3) fC.push("vn " + SC[CC] * AC + " " + SC[CC + 1] + " " + SC[CC + 2]);
          if (null != pC)
            for (let CC = 0; CC < pC.length; CC += 2) fC.push("vt " + pC[CC] + " " + pC[CC + 1]), RC++;
          const xC = ["", "", ""],
            JC = (ZC.material || ZC.Km().defaultMaterial)._getEffectiveOrientation(ZC),
            [IC, iC] = JC === bC.d.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let CC = 0; CC < PC.length; CC += 3) {
            const zC = [String(PC[CC] + oC), String(PC[CC + IC] + oC), String(PC[CC + iC] + oC)],
              ZC = [String(PC[CC] + qC), String(PC[CC + IC] + qC), String(PC[CC + iC] + qC)],
              QC = zC,
              wC = null != pC ? ZC : xC,
              bC = null != SC ? zC : xC;
            fC.push("f " + QC[0] + "/" + wC[0] + "/" + bC[0] + " " + QC[1] + "/" + wC[1] + "/" + bC[1] + " " + QC[2] + "/" + wC[2] + "/" + bC[2])
          }
          nC && NC && ZC.bakeTransformIntoVertices(NC), oC += GC, qC += RC
        }
        return fC.join("\n")
      }
      static MTL(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const ZC = [],
          QC = CC.material;
        ZC.push("newmtl " + zC), ZC.push("  Ns " + QC.specularPower.toFixed(4)), ZC.push("  Ni 1.5000"), ZC.push("  d " + QC.alpha.toFixed(4)), ZC.push("  Tr 0.0000"), ZC.push("  Tf 1.0000 1.0000 1.0000"), ZC.push("  illum 2"), ZC.push("  Ka " + QC.ambientColor.r.toFixed(4) + " " + QC.ambientColor.g.toFixed(4) + " " + QC.ambientColor.b.toFixed(4)), ZC.push("  Kd " + QC.diffuseColor.r.toFixed(4) + " " + QC.diffuseColor.g.toFixed(4) + " " + QC.diffuseColor.b.toFixed(4)), ZC.push("  Ks " + QC.specularColor.r.toFixed(4) + " " + QC.specularColor.g.toFixed(4) + " " + QC.specularColor.b.toFixed(4)), ZC.push("  Ke " + QC.emissiveColor.r.toFixed(4) + " " + QC.emissiveColor.g.toFixed(4) + " " + QC.emissiveColor.b.toFixed(4));
        QC.ambientTexture && ZC.push("  map_Ka " + QC.ambientTexture.name), QC.diffuseTexture && ZC.push("  map_Kd " + QC.diffuseTexture.name), QC.specularTexture && ZC.push("  map_Ks " + QC.specularTexture.name), QC.bumpTexture && ZC.push("  map_bump -imfchan z " + QC.bumpTexture.name), QC.opacityTexture && ZC.push("  map_d " + QC.opacityTexture.name);
        return ZC.join("\n")
      }
    }
    var fC = 0,
      oC = ZC(41349);
    class qC {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const CC in this.files) {
          const zC = this.files[CC],
            ZC = new Blob([zC], {
              type: (0, oC.c)(CC)
            });
          wC.Tools.Download(ZC, CC)
        }
      }
    }
    var FC = ZC(40985),
      WC = ZC(40946),
      NC = ZC(41438),
      MC = ZC(40948),
      gC = ZC(39635),
      SC = ZC(36985),
      pC = ZC(37138),
      PC = ZC(36991);
    const GC = PC.HighestCommonFactor,
      RC = {
        ...PC,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: GC
      };
    var AC = ZC(41634),
      xC = ZC(40968),
      JC = ZC(41396),
      IC = ZC(41402),
      iC = ZC(41648);
    (0, iC.RegisterDumpTools)();
    var vC = ZC(39811),
      eC = ZC(39818),
      hC = ZC(38507),
      KC = ZC(39925),
      YC = ZC(40303),
      dC = ZC(41630);
    let mC = 0;
    const HC = (CC, zC, ZC, QC) => {
        if (!CC[ZC]) {
          const wC = CC.useDelayedTextureLoading;
          CC.useDelayedTextureLoading = !1;
          const bC = CC._blockEntityCollection;
          CC._blockEntityCollection = !1;
          const nC = YC.h.CreateFromBase64String(zC, QC + mC++, CC, !0, !1, YC.h.BILINEAR_SAMPLINGMODE);
          CC._blockEntityCollection = bC;
          const fC = CC.mg().getLoadedTexturesCache(),
            oC = fC.indexOf(nC.getInternalTexture()); - 1 !== oC && fC.splice(oC, 1), nC.isRGBD = !0, nC.wrapU = YC.h.CLAMP_ADDRESSMODE, nC.wrapV = YC.h.CLAMP_ADDRESSMODE, CC[ZC] = nC, CC.useDelayedTextureLoading = wC, dC.d.ExpandRGBDTexture(nC);
          const qC = CC.mg().Yg.add((() => {
            nC.isRGBD = !0;
            const zC = CC.onBeforeRenderObservable.add((() => {
              nC.isReady() && (CC.onBeforeRenderObservable.remove(zC), dC.d.ExpandRGBDTexture(nC))
            }))
          }));
          CC.Tm.add((() => {
            CC.mg().Yg.remove(qC)
          }))
        }
        return CC[ZC]
      },
      EC = CC => HC(CC, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      lC = CC => HC(CC, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      XC = CC => HC(CC, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var cC = ZC(39910),
      uC = ZC(36963),
      rC = ZC(39959),
      sC = ZC(40102),
      TC = ZC(40188);
    class aC extends sC.b {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let tC = (() => {
      var CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC;
      let FC, WC, NC, MC, gC, SC, pC, PC, GC, RC = TC.c,
        AC = [],
        xC = [],
        JC = [],
        IC = [],
        iC = [],
        hC = [],
        KC = [],
        YC = [],
        dC = [],
        mC = [],
        HC = [],
        EC = [],
        lC = [],
        XC = [],
        cC = [],
        uC = [],
        rC = [],
        sC = [];
      return CC = class extends RC {
        get useEnergyConservation() {
          return (0, vC.e)(this, zC, "f")
        }
        set useEnergyConservation(CC) {
          (0, vC.f)(this, zC, CC, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, vC.e)(this, ZC, "f")
        }
        set useSmithVisibilityHeightCorrelated(CC) {
          (0, vC.f)(this, ZC, CC, "f")
        }
        get useSphericalHarmonics() {
          return (0, vC.e)(this, QC, "f")
        }
        set useSphericalHarmonics(CC) {
          (0, vC.f)(this, QC, CC, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, vC.e)(this, wC, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(CC) {
          (0, vC.f)(this, wC, CC, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, vC.e)(this, bC, "f")
        }
        set mixIblRadianceWithIrradiance(CC) {
          (0, vC.f)(this, bC, CC, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, vC.e)(this, nC, "f")
        }
        set useLegacySpecularEnergyConservation(CC) {
          (0, vC.f)(this, nC, CC, "f")
        }
        get baseDiffuseModel() {
          return (0, vC.e)(this, fC, "f")
        }
        set baseDiffuseModel(CC) {
          (0, vC.f)(this, fC, CC, "f")
        }
        get dielectricSpecularModel() {
          return (0, vC.e)(this, oC, "f")
        }
        set dielectricSpecularModel(CC) {
          (0, vC.f)(this, oC, CC, "f")
        }
        get conductorSpecularModel() {
          return (0, vC.e)(this, qC, "f")
        }
        set conductorSpecularModel(CC) {
          (0, vC.f)(this, qC, CC, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(FC) {
          let WC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(FC, "PBRBRDF", 90, new aC, WC), this._useEnergyConservation = CC.DEFAULT_USE_ENERGY_CONSERVATION, zC.set(this, (0, vC.n)(this, AC, CC.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, vC.n)(this, xC), CC.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), ZC.set(this, (0, vC.n)(this, JC, CC.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, vC.n)(this, IC), CC.DEFAULT_USE_SPHERICAL_HARMONICS), QC.set(this, (0, vC.n)(this, iC, CC.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, vC.n)(this, hC), CC.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), wC.set(this, (0, vC.n)(this, KC, CC.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, vC.n)(this, YC), CC.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), bC.set(this, (0, vC.n)(this, dC, CC.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, vC.n)(this, mC), CC.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), nC.set(this, (0, vC.n)(this, HC, CC.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, vC.n)(this, EC), CC.DEFAULT_DIFFUSE_MODEL), fC.set(this, (0, vC.n)(this, lC, CC.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, vC.n)(this, XC), CC.DEFAULT_DIELECTRIC_SPECULAR_MODEL), oC.set(this, (0, vC.n)(this, cC, CC.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, vC.n)(this, uC), CC.DEFAULT_CONDUCTOR_SPECULAR_MODEL), qC.set(this, (0, vC.n)(this, rC, CC.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, vC.n)(this, sC), this._internalMarkAllSubMeshesAsMiscDirty = FC._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(CC) {
          CC.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, CC.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, CC.SPHERICAL_HARMONICS = this._useSphericalHarmonics, CC.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, CC.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, CC.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, CC.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, CC.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, CC.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, zC = new WeakMap, ZC = new WeakMap, QC = new WeakMap, wC = new WeakMap, bC = new WeakMap, nC = new WeakMap, fC = new WeakMap, oC = new WeakMap, qC = new WeakMap, (() => {
        const zC = "function" === typeof Symbol && Symbol.metadata ? Object.create(RC[Symbol.metadata] ?? null) : void 0;
        FC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsMiscDirty")], WC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsMiscDirty")], NC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsMiscDirty")], MC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsMiscDirty")], gC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsMiscDirty")], SC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsMiscDirty")], pC = [(0, eC.M)("baseDiffuseModel"), (0, eC.d)("_markAllSubMeshesAsMiscDirty")], PC = [(0, eC.M)("dielectricSpecularModel"), (0, eC.d)("_markAllSubMeshesAsMiscDirty")], GC = [(0, eC.M)("conductorSpecularModel"), (0, eC.d)("_markAllSubMeshesAsMiscDirty")], (0, vC.j)(CC, null, FC, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: CC => "useEnergyConservation" in CC,
            get: CC => CC.useEnergyConservation,
            set: (CC, zC) => {
              CC.useEnergyConservation = zC
            }
          },
          metadata: zC
        }, AC, xC), (0, vC.j)(CC, null, WC, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: CC => "useSmithVisibilityHeightCorrelated" in CC,
            get: CC => CC.useSmithVisibilityHeightCorrelated,
            set: (CC, zC) => {
              CC.useSmithVisibilityHeightCorrelated = zC
            }
          },
          metadata: zC
        }, JC, IC), (0, vC.j)(CC, null, NC, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: CC => "useSphericalHarmonics" in CC,
            get: CC => CC.useSphericalHarmonics,
            set: (CC, zC) => {
              CC.useSphericalHarmonics = zC
            }
          },
          metadata: zC
        }, iC, hC), (0, vC.j)(CC, null, MC, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: CC => "useSpecularGlossinessInputEnergyConservation" in CC,
            get: CC => CC.useSpecularGlossinessInputEnergyConservation,
            set: (CC, zC) => {
              CC.useSpecularGlossinessInputEnergyConservation = zC
            }
          },
          metadata: zC
        }, KC, YC), (0, vC.j)(CC, null, gC, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: CC => "mixIblRadianceWithIrradiance" in CC,
            get: CC => CC.mixIblRadianceWithIrradiance,
            set: (CC, zC) => {
              CC.mixIblRadianceWithIrradiance = zC
            }
          },
          metadata: zC
        }, dC, mC), (0, vC.j)(CC, null, SC, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: CC => "useLegacySpecularEnergyConservation" in CC,
            get: CC => CC.useLegacySpecularEnergyConservation,
            set: (CC, zC) => {
              CC.useLegacySpecularEnergyConservation = zC
            }
          },
          metadata: zC
        }, HC, EC), (0, vC.j)(CC, null, pC, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: CC => "baseDiffuseModel" in CC,
            get: CC => CC.baseDiffuseModel,
            set: (CC, zC) => {
              CC.baseDiffuseModel = zC
            }
          },
          metadata: zC
        }, lC, XC), (0, vC.j)(CC, null, PC, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: CC => "dielectricSpecularModel" in CC,
            get: CC => CC.dielectricSpecularModel,
            set: (CC, zC) => {
              CC.dielectricSpecularModel = zC
            }
          },
          metadata: zC
        }, cC, uC), (0, vC.j)(CC, null, GC, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: CC => "conductorSpecularModel" in CC,
            get: CC => CC.conductorSpecularModel,
            set: (CC, zC) => {
              CC.conductorSpecularModel = zC
            }
          },
          metadata: zC
        }, rC, sC), zC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zC
        })
      })(), CC.DEFAULT_USE_ENERGY_CONSERVATION = !0, CC.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, CC.DEFAULT_USE_SPHERICAL_HARMONICS = !0, CC.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, CC.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, CC.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, CC.DEFAULT_DIFFUSE_MODEL = 0, CC.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, CC.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, CC
    })();
    var DC = ZC(40097),
      jC = ZC(37142),
      yC = ZC(40100),
      LC = ZC(39932),
      UC = ZC(40167),
      BC = ZC(40162),
      OC = ZC(40175),
      kC = ZC(40151);
    class VC extends sC.b {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let Cz = (() => {
      var CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC;
      let FC, WC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC = TC.c,
        hC = [],
        KC = [],
        YC = [],
        dC = [],
        mC = [],
        HC = [],
        EC = [],
        lC = [],
        XC = [],
        cC = [],
        uC = [],
        rC = [],
        sC = [],
        aC = [],
        tC = [],
        DC = [],
        yC = [],
        LC = [],
        UC = [],
        OC = [],
        Cz = [],
        zz = [],
        Zz = [],
        Qz = [],
        wz = [],
        bz = [],
        nz = [],
        fz = [];
      return CC = class extends iC {
        get isEnabled() {
          return (0, vC.e)(this, zC, "f")
        }
        set isEnabled(CC) {
          (0, vC.f)(this, zC, CC, "f")
        }
        get indexOfRefraction() {
          return (0, vC.e)(this, ZC, "f")
        }
        set indexOfRefraction(CC) {
          (0, vC.f)(this, ZC, CC, "f")
        }
        get texture() {
          return (0, vC.e)(this, QC, "f")
        }
        set texture(CC) {
          (0, vC.f)(this, QC, CC, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, vC.e)(this, wC, "f")
        }
        set useRoughnessFromMainTexture(CC) {
          (0, vC.f)(this, wC, CC, "f")
        }
        get textureRoughness() {
          return (0, vC.e)(this, bC, "f")
        }
        set textureRoughness(CC) {
          (0, vC.f)(this, bC, CC, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, vC.e)(this, nC, "f")
        }
        set remapF0OnInterfaceChange(CC) {
          (0, vC.f)(this, nC, CC, "f")
        }
        get bumpTexture() {
          return (0, vC.e)(this, fC, "f")
        }
        set bumpTexture(CC) {
          (0, vC.f)(this, fC, CC, "f")
        }
        get isTintEnabled() {
          return (0, vC.e)(this, oC, "f")
        }
        set isTintEnabled(CC) {
          (0, vC.f)(this, oC, CC, "f")
        }
        get tintTexture() {
          return (0, vC.e)(this, qC, "f")
        }
        set tintTexture(CC) {
          (0, vC.f)(this, qC, CC, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(FC) {
          let WC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(FC, "PBRClearCoat", 100, new VC, WC), this._isEnabled = !1, zC.set(this, (0, vC.n)(this, hC, !1)), this.intensity = ((0, vC.n)(this, KC), (0, vC.n)(this, YC, 1)), this.roughness = ((0, vC.n)(this, dC), (0, vC.n)(this, mC, 0)), this._indexOfRefraction = ((0, vC.n)(this, HC), CC._DefaultIndexOfRefraction), ZC.set(this, (0, vC.n)(this, EC, CC._DefaultIndexOfRefraction)), this._texture = ((0, vC.n)(this, lC), null), QC.set(this, (0, vC.n)(this, XC, null)), this._useRoughnessFromMainTexture = ((0, vC.n)(this, cC), !0), wC.set(this, (0, vC.n)(this, uC, !0)), this._textureRoughness = ((0, vC.n)(this, rC), null), bC.set(this, (0, vC.n)(this, sC, null)), this._remapF0OnInterfaceChange = ((0, vC.n)(this, aC), !0), nC.set(this, (0, vC.n)(this, tC, !0)), this._bumpTexture = ((0, vC.n)(this, DC), null), fC.set(this, (0, vC.n)(this, yC, null)), this._isTintEnabled = ((0, vC.n)(this, LC), !1), oC.set(this, (0, vC.n)(this, UC, !1)), this.tintColor = ((0, vC.n)(this, OC), (0, vC.n)(this, Cz, jC.e.White())), this.tintColorAtDistance = ((0, vC.n)(this, zz), (0, vC.n)(this, Zz, 1)), this.tintThickness = ((0, vC.n)(this, Qz), (0, vC.n)(this, wz, 1)), this._tintTexture = ((0, vC.n)(this, bz), null), qC.set(this, (0, vC.n)(this, nz, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, vC.n)(this, fz), this._internalMarkAllSubMeshesAsTexturesDirty = FC._dirtyCallbacks[1]
        }
        isReadyForSubMesh(CC, zC, ZC) {
          if (!this._isEnabled) return !0;
          const QC = this._material._disableBumpMap;
          if (CC._areTexturesDirty && zC.texturesEnabled) {
            if (this._texture && BC.b.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && BC.b.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (ZC.getCaps().standardDerivatives && this._bumpTexture && BC.b.ClearCoatBumpTextureEnabled && !QC && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && BC.b.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(zC, ZC) {
          this._isEnabled ? (zC.CLEARCOAT = !0, zC.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, zC.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, zC._areTexturesDirty && ZC.texturesEnabled && (this._texture && BC.b.ClearCoatTextureEnabled ? (0, kC.gb)(this._texture, zC, "CLEARCOAT_TEXTURE") : zC.CLEARCOAT_TEXTURE = !1, this._textureRoughness && BC.b.ClearCoatTextureEnabled ? (0, kC.gb)(this._textureRoughness, zC, "CLEARCOAT_TEXTURE_ROUGHNESS") : zC.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && BC.b.ClearCoatBumpTextureEnabled ? (0, kC.gb)(this._bumpTexture, zC, "CLEARCOAT_BUMP") : zC.CLEARCOAT_BUMP = !1, zC.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === CC._DefaultIndexOfRefraction, this._isTintEnabled ? (zC.CLEARCOAT_TINT = !0, this._tintTexture && BC.b.ClearCoatTintTextureEnabled ? ((0, kC.gb)(this._tintTexture, zC, "CLEARCOAT_TINT_TEXTURE"), zC.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : zC.CLEARCOAT_TINT_TEXTURE = !1) : (zC.CLEARCOAT_TINT = !1, zC.CLEARCOAT_TINT_TEXTURE = !1))) : (zC.CLEARCOAT = !1, zC.CLEARCOAT_TEXTURE = !1, zC.CLEARCOAT_TEXTURE_ROUGHNESS = !1, zC.CLEARCOAT_BUMP = !1, zC.CLEARCOAT_TINT = !1, zC.CLEARCOAT_TINT_TEXTURE = !1, zC.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, zC.CLEARCOAT_DEFAULTIOR = !1, zC.CLEARCOAT_TEXTUREDIRECTUV = 0, zC.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, zC.CLEARCOAT_BUMPDIRECTUV = 0, zC.CLEARCOAT_REMAP_F0 = !1, zC.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, zC.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(CC, zC, ZC, QC) {
          if (!this._isEnabled) return;
          const wC = QC.materialDefines,
            bC = this._material.isFrozen,
            nC = this._material._disableBumpMap,
            fC = this._material._invertNormalMapX,
            oC = this._material._invertNormalMapY;
          if (!CC.useUbo || !bC || !CC.isSync) {
            (this._texture || this._textureRoughness) && BC.b.ClearCoatTextureEnabled && (CC.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, kC.B)(this._texture, CC, "clearCoat"), this._textureRoughness && !wC.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, kC.B)(this._textureRoughness, CC, "clearCoatRoughness")), this._bumpTexture && ZC.getCaps().standardDerivatives && BC.b.ClearCoatTextureEnabled && !nC && (CC.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, kC.B)(this._bumpTexture, CC, "clearCoatBump"), zC._mirroredCameraPosition ? CC.updateFloat2("vClearCoatTangentSpaceParams", fC ? 1 : -1, oC ? 1 : -1) : CC.updateFloat2("vClearCoatTangentSpaceParams", fC ? -1 : 1, oC ? -1 : 1)), this._tintTexture && BC.b.ClearCoatTintTextureEnabled && (CC.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, kC.B)(this._tintTexture, CC, "clearCoatTint")), CC.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const QC = 1 - this._indexOfRefraction,
              bC = 1 + this._indexOfRefraction,
              qC = Math.pow(-QC / bC, 2),
              FC = 1 / this._indexOfRefraction;
            CC.updateFloat4("vClearCoatRefractionParams", qC, FC, QC, bC), this._isTintEnabled && (CC.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), CC.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          zC.texturesEnabled && (this._texture && BC.b.ClearCoatTextureEnabled && CC.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !wC.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && BC.b.ClearCoatTextureEnabled && CC.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && ZC.getCaps().standardDerivatives && BC.b.ClearCoatBumpTextureEnabled && !nC && CC.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && BC.b.ClearCoatTintTextureEnabled && CC.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(CC) {
          return this._texture === CC || (this._textureRoughness === CC || (this._bumpTexture === CC || this._tintTexture === CC))
        }
        getActiveTextures(CC) {
          this._texture && CC.push(this._texture), this._textureRoughness && CC.push(this._textureRoughness), this._bumpTexture && CC.push(this._bumpTexture), this._tintTexture && CC.push(this._tintTexture)
        }
        getAnimatables(CC) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && CC.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && CC.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && CC.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && CC.push(this._tintTexture)
        }
        dispose(CC) {
          CC && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(CC, zC, ZC) {
          return CC.CLEARCOAT_BUMP && zC.addFallback(ZC++, "CLEARCOAT_BUMP"), CC.CLEARCOAT_TINT && zC.addFallback(ZC++, "CLEARCOAT_TINT"), CC.CLEARCOAT && zC.addFallback(ZC++, "CLEARCOAT"), ZC
        }
        getSamplers(CC) {
          CC.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, zC = new WeakMap, ZC = new WeakMap, QC = new WeakMap, wC = new WeakMap, bC = new WeakMap, nC = new WeakMap, fC = new WeakMap, oC = new WeakMap, qC = new WeakMap, (() => {
        const zC = "function" === typeof Symbol && Symbol.metadata ? Object.create(iC[Symbol.metadata] ?? null) : void 0;
        FC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], WC = [(0, eC.M)()], NC = [(0, eC.M)()], MC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], gC = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], SC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], pC = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], PC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], GC = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], RC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], AC = [(0, eC.n)()], xC = [(0, eC.M)()], JC = [(0, eC.M)()], IC = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], (0, vC.j)(CC, null, FC, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: CC => "isEnabled" in CC,
            get: CC => CC.isEnabled,
            set: (CC, zC) => {
              CC.isEnabled = zC
            }
          },
          metadata: zC
        }, hC, KC), (0, vC.j)(CC, null, MC, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: CC => "indexOfRefraction" in CC,
            get: CC => CC.indexOfRefraction,
            set: (CC, zC) => {
              CC.indexOfRefraction = zC
            }
          },
          metadata: zC
        }, EC, lC), (0, vC.j)(CC, null, gC, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: CC => "texture" in CC,
            get: CC => CC.texture,
            set: (CC, zC) => {
              CC.texture = zC
            }
          },
          metadata: zC
        }, XC, cC), (0, vC.j)(CC, null, SC, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "useRoughnessFromMainTexture" in CC,
            get: CC => CC.useRoughnessFromMainTexture,
            set: (CC, zC) => {
              CC.useRoughnessFromMainTexture = zC
            }
          },
          metadata: zC
        }, uC, rC), (0, vC.j)(CC, null, pC, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: CC => "textureRoughness" in CC,
            get: CC => CC.textureRoughness,
            set: (CC, zC) => {
              CC.textureRoughness = zC
            }
          },
          metadata: zC
        }, sC, aC), (0, vC.j)(CC, null, PC, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: CC => "remapF0OnInterfaceChange" in CC,
            get: CC => CC.remapF0OnInterfaceChange,
            set: (CC, zC) => {
              CC.remapF0OnInterfaceChange = zC
            }
          },
          metadata: zC
        }, tC, DC), (0, vC.j)(CC, null, GC, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "bumpTexture" in CC,
            get: CC => CC.bumpTexture,
            set: (CC, zC) => {
              CC.bumpTexture = zC
            }
          },
          metadata: zC
        }, yC, LC), (0, vC.j)(CC, null, RC, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: CC => "isTintEnabled" in CC,
            get: CC => CC.isTintEnabled,
            set: (CC, zC) => {
              CC.isTintEnabled = zC
            }
          },
          metadata: zC
        }, UC, OC), (0, vC.j)(CC, null, IC, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "tintTexture" in CC,
            get: CC => CC.tintTexture,
            set: (CC, zC) => {
              CC.tintTexture = zC
            }
          },
          metadata: zC
        }, nz, fz), (0, vC.j)(null, null, WC, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: CC => "intensity" in CC,
            get: CC => CC.intensity,
            set: (CC, zC) => {
              CC.intensity = zC
            }
          },
          metadata: zC
        }, YC, dC), (0, vC.j)(null, null, NC, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: CC => "roughness" in CC,
            get: CC => CC.roughness,
            set: (CC, zC) => {
              CC.roughness = zC
            }
          },
          metadata: zC
        }, mC, HC), (0, vC.j)(null, null, AC, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: CC => "tintColor" in CC,
            get: CC => CC.tintColor,
            set: (CC, zC) => {
              CC.tintColor = zC
            }
          },
          metadata: zC
        }, Cz, zz), (0, vC.j)(null, null, xC, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: CC => "tintColorAtDistance" in CC,
            get: CC => CC.tintColorAtDistance,
            set: (CC, zC) => {
              CC.tintColorAtDistance = zC
            }
          },
          metadata: zC
        }, Zz, Qz), (0, vC.j)(null, null, JC, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: CC => "tintThickness" in CC,
            get: CC => CC.tintThickness,
            set: (CC, zC) => {
              CC.tintThickness = zC
            }
          },
          metadata: zC
        }, wz, bz), zC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zC
        })
      })(), CC._DefaultIndexOfRefraction = 1.5, CC
    })();
    class zz extends sC.b {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let Zz = (() => {
      var CC, zC, ZC, QC;
      let wC, bC, nC, fC, oC, qC, FC, WC = TC.c,
        NC = [],
        MC = [],
        gC = [],
        SC = [],
        pC = [],
        PC = [],
        GC = [],
        RC = [],
        AC = [],
        xC = [],
        JC = [],
        IC = [],
        iC = [],
        hC = [];
      return CC = class extends WC {
        get isEnabled() {
          return (0, vC.e)(this, zC, "f")
        }
        set isEnabled(CC) {
          (0, vC.f)(this, zC, CC, "f")
        }
        get texture() {
          return (0, vC.e)(this, ZC, "f")
        }
        set texture(CC) {
          (0, vC.f)(this, ZC, CC, "f")
        }
        get thicknessTexture() {
          return (0, vC.e)(this, QC, "f")
        }
        set thicknessTexture(CC) {
          (0, vC.f)(this, QC, CC, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(wC) {
          let bC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(wC, "PBRIridescence", 110, new zz, bC), this._isEnabled = !1, zC.set(this, (0, vC.n)(this, NC, !1)), this.intensity = ((0, vC.n)(this, MC), (0, vC.n)(this, gC, 1)), this.minimumThickness = ((0, vC.n)(this, SC), (0, vC.n)(this, pC, CC._DefaultMinimumThickness)), this.maximumThickness = ((0, vC.n)(this, PC), (0, vC.n)(this, GC, CC._DefaultMaximumThickness)), this.indexOfRefraction = ((0, vC.n)(this, RC), (0, vC.n)(this, AC, CC._DefaultIndexOfRefraction)), this._texture = ((0, vC.n)(this, xC), null), ZC.set(this, (0, vC.n)(this, JC, null)), this._thicknessTexture = ((0, vC.n)(this, IC), null), QC.set(this, (0, vC.n)(this, iC, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, vC.n)(this, hC), this._internalMarkAllSubMeshesAsTexturesDirty = wC._dirtyCallbacks[1]
        }
        isReadyForSubMesh(CC, zC) {
          if (!this._isEnabled) return !0;
          if (CC._areTexturesDirty && zC.texturesEnabled) {
            if (this._texture && BC.b.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && BC.b.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(CC, zC) {
          this._isEnabled ? (CC.IRIDESCENCE = !0, CC._areTexturesDirty && zC.texturesEnabled && (this._texture && BC.b.IridescenceTextureEnabled ? (0, kC.gb)(this._texture, CC, "IRIDESCENCE_TEXTURE") : CC.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && BC.b.IridescenceTextureEnabled ? (0, kC.gb)(this._thicknessTexture, CC, "IRIDESCENCE_THICKNESS_TEXTURE") : CC.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (CC.IRIDESCENCE = !1, CC.IRIDESCENCE_TEXTURE = !1, CC.IRIDESCENCE_THICKNESS_TEXTURE = !1, CC.IRIDESCENCE_TEXTUREDIRECTUV = 0, CC.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(CC, zC) {
          if (!this._isEnabled) return;
          const ZC = this._material.isFrozen;
          CC.useUbo && ZC && CC.isSync || ((this._texture || this._thicknessTexture) && BC.b.IridescenceTextureEnabled && (CC.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, kC.B)(this._texture, CC, "iridescence"), this._thicknessTexture && (0, kC.B)(this._thicknessTexture, CC, "iridescenceThickness")), CC.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), zC.texturesEnabled && (this._texture && BC.b.IridescenceTextureEnabled && CC.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && BC.b.IridescenceTextureEnabled && CC.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(CC) {
          return this._texture === CC || this._thicknessTexture === CC
        }
        getActiveTextures(CC) {
          this._texture && CC.push(this._texture), this._thicknessTexture && CC.push(this._thicknessTexture)
        }
        getAnimatables(CC) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && CC.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && CC.push(this._thicknessTexture)
        }
        dispose(CC) {
          CC && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(CC, zC, ZC) {
          return CC.IRIDESCENCE && zC.addFallback(ZC++, "IRIDESCENCE"), ZC
        }
        getSamplers(CC) {
          CC.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, zC = new WeakMap, ZC = new WeakMap, QC = new WeakMap, (() => {
        const zC = "function" === typeof Symbol && Symbol.metadata ? Object.create(WC[Symbol.metadata] ?? null) : void 0;
        wC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], bC = [(0, eC.M)()], nC = [(0, eC.M)()], fC = [(0, eC.M)()], oC = [(0, eC.M)()], qC = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], FC = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], (0, vC.j)(CC, null, wC, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: CC => "isEnabled" in CC,
            get: CC => CC.isEnabled,
            set: (CC, zC) => {
              CC.isEnabled = zC
            }
          },
          metadata: zC
        }, NC, MC), (0, vC.j)(CC, null, qC, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: CC => "texture" in CC,
            get: CC => CC.texture,
            set: (CC, zC) => {
              CC.texture = zC
            }
          },
          metadata: zC
        }, JC, IC), (0, vC.j)(CC, null, FC, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "thicknessTexture" in CC,
            get: CC => CC.thicknessTexture,
            set: (CC, zC) => {
              CC.thicknessTexture = zC
            }
          },
          metadata: zC
        }, iC, hC), (0, vC.j)(null, null, bC, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: CC => "intensity" in CC,
            get: CC => CC.intensity,
            set: (CC, zC) => {
              CC.intensity = zC
            }
          },
          metadata: zC
        }, gC, SC), (0, vC.j)(null, null, nC, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: CC => "minimumThickness" in CC,
            get: CC => CC.minimumThickness,
            set: (CC, zC) => {
              CC.minimumThickness = zC
            }
          },
          metadata: zC
        }, pC, PC), (0, vC.j)(null, null, fC, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: CC => "maximumThickness" in CC,
            get: CC => CC.maximumThickness,
            set: (CC, zC) => {
              CC.maximumThickness = zC
            }
          },
          metadata: zC
        }, GC, RC), (0, vC.j)(null, null, oC, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: CC => "indexOfRefraction" in CC,
            get: CC => CC.indexOfRefraction,
            set: (CC, zC) => {
              CC.indexOfRefraction = zC
            }
          },
          metadata: zC
        }, AC, xC), zC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zC
        })
      })(), CC._DefaultMinimumThickness = 100, CC._DefaultMaximumThickness = 400, CC._DefaultIndexOfRefraction = 1.3, CC
    })();
    class Qz extends sC.b {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let wz = (() => {
      var CC, zC, ZC, QC;
      let wC, bC, nC, fC, oC, qC = TC.c,
        FC = [],
        WC = [],
        NC = [],
        MC = [],
        gC = [],
        SC = [],
        pC = [],
        PC = [],
        GC = [],
        RC = [];
      return CC = class extends qC {
        get isEnabled() {
          return (0, vC.e)(this, zC, "f")
        }
        set isEnabled(CC) {
          (0, vC.f)(this, zC, CC, "f")
        }
        set angle(CC) {
          this.direction.x = Math.cos(CC), this.direction.y = Math.sin(CC)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, vC.e)(this, ZC, "f")
        }
        set texture(CC) {
          (0, vC.f)(this, ZC, CC, "f")
        }
        get legacy() {
          return (0, vC.e)(this, QC, "f")
        }
        set legacy(CC) {
          (0, vC.f)(this, QC, CC, "f")
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
        constructor(CC) {
          let wC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(CC, "PBRAnisotropic", 110, new Qz, wC), this._isEnabled = !1, zC.set(this, (0, vC.n)(this, FC, !1)), this.intensity = ((0, vC.n)(this, WC), (0, vC.n)(this, NC, 1)), this.direction = ((0, vC.n)(this, MC), (0, vC.n)(this, gC, new uC.n(1, 0))), this._texture = ((0, vC.n)(this, SC), null), ZC.set(this, (0, vC.n)(this, pC, null)), this._legacy = ((0, vC.n)(this, PC), !1), QC.set(this, (0, vC.n)(this, GC, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, vC.n)(this, RC), this._internalMarkAllSubMeshesAsTexturesDirty = CC._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = CC._dirtyCallbacks[16]
        }
        isReadyForSubMesh(CC, zC) {
          return !this._isEnabled || !(CC._areTexturesDirty && zC.texturesEnabled && this._texture && BC.b.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(CC, zC, ZC) {
          this._isEnabled ? (CC.ANISOTROPIC = this._isEnabled, this._isEnabled && !ZC.isVerticesDataPresent(rC.k.TangentKind) && (CC._needUVs = !0, CC.MAINUV1 = !0), CC._areTexturesDirty && zC.texturesEnabled && (this._texture && BC.b.AnisotropicTextureEnabled ? (0, kC.gb)(this._texture, CC, "ANISOTROPIC_TEXTURE") : CC.ANISOTROPIC_TEXTURE = !1), CC._areMiscDirty && (CC.ANISOTROPIC_LEGACY = this._legacy)) : (CC.ANISOTROPIC = !1, CC.ANISOTROPIC_TEXTURE = !1, CC.ANISOTROPIC_TEXTUREDIRECTUV = 0, CC.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(CC, zC) {
          if (!this._isEnabled) return;
          const ZC = this._material.isFrozen;
          CC.useUbo && ZC && CC.isSync || (this._texture && BC.b.AnisotropicTextureEnabled && (CC.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, kC.B)(this._texture, CC, "anisotropy")), CC.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), zC.texturesEnabled && this._texture && BC.b.AnisotropicTextureEnabled && CC.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(CC) {
          return this._texture === CC
        }
        getActiveTextures(CC) {
          this._texture && CC.push(this._texture)
        }
        getAnimatables(CC) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && CC.push(this._texture)
        }
        dispose(CC) {
          CC && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(CC, zC, ZC) {
          return CC.ANISOTROPIC && zC.addFallback(ZC++, "ANISOTROPIC"), ZC
        }
        getSamplers(CC) {
          CC.push("anisotropySampler")
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
        parse(CC, zC, ZC) {
          super.parse(CC, zC, ZC), void 0 === CC.legacy && (this.legacy = !0)
        }
      }, zC = new WeakMap, ZC = new WeakMap, QC = new WeakMap, (() => {
        const zC = "function" === typeof Symbol && Symbol.metadata ? Object.create(qC[Symbol.metadata] ?? null) : void 0;
        wC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], bC = [(0, eC.M)()], nC = [(0, eC.F)()], fC = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], oC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsMiscDirty")], (0, vC.j)(CC, null, wC, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: CC => "isEnabled" in CC,
            get: CC => CC.isEnabled,
            set: (CC, zC) => {
              CC.isEnabled = zC
            }
          },
          metadata: zC
        }, FC, WC), (0, vC.j)(CC, null, fC, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: CC => "texture" in CC,
            get: CC => CC.texture,
            set: (CC, zC) => {
              CC.texture = zC
            }
          },
          metadata: zC
        }, pC, PC), (0, vC.j)(CC, null, oC, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: CC => "legacy" in CC,
            get: CC => CC.legacy,
            set: (CC, zC) => {
              CC.legacy = zC
            }
          },
          metadata: zC
        }, GC, RC), (0, vC.j)(null, null, bC, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: CC => "intensity" in CC,
            get: CC => CC.intensity,
            set: (CC, zC) => {
              CC.intensity = zC
            }
          },
          metadata: zC
        }, NC, MC), (0, vC.j)(null, null, nC, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: CC => "direction" in CC,
            get: CC => CC.direction,
            set: (CC, zC) => {
              CC.direction = zC
            }
          },
          metadata: zC
        }, gC, SC), zC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zC
        })
      })(), CC
    })();
    class bz extends sC.b {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let nz = (() => {
      var CC, zC, ZC, QC, wC, bC, nC, fC;
      let oC, qC, FC, WC, NC, MC, gC, SC, pC, PC = TC.c,
        GC = [],
        RC = [],
        AC = [],
        xC = [],
        JC = [],
        IC = [],
        iC = [],
        hC = [],
        KC = [],
        YC = [],
        dC = [],
        mC = [],
        HC = [],
        EC = [],
        lC = [],
        XC = [],
        cC = [],
        uC = [];
      return CC = class extends PC {
        get isEnabled() {
          return (0, vC.e)(this, zC, "f")
        }
        set isEnabled(CC) {
          (0, vC.f)(this, zC, CC, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, vC.e)(this, ZC, "f")
        }
        set linkSheenWithAlbedo(CC) {
          (0, vC.f)(this, ZC, CC, "f")
        }
        get texture() {
          return (0, vC.e)(this, QC, "f")
        }
        set texture(CC) {
          (0, vC.f)(this, QC, CC, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, vC.e)(this, wC, "f")
        }
        set useRoughnessFromMainTexture(CC) {
          (0, vC.f)(this, wC, CC, "f")
        }
        get roughness() {
          return (0, vC.e)(this, bC, "f")
        }
        set roughness(CC) {
          (0, vC.f)(this, bC, CC, "f")
        }
        get textureRoughness() {
          return (0, vC.e)(this, nC, "f")
        }
        set textureRoughness(CC) {
          (0, vC.f)(this, nC, CC, "f")
        }
        get albedoScaling() {
          return (0, vC.e)(this, fC, "f")
        }
        set albedoScaling(CC) {
          (0, vC.f)(this, fC, CC, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(CC) {
          let oC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(CC, "Sheen", 120, new bz, oC), this._isEnabled = !1, zC.set(this, (0, vC.n)(this, GC, !1)), this._linkSheenWithAlbedo = ((0, vC.n)(this, RC), !1), ZC.set(this, (0, vC.n)(this, AC, !1)), this.intensity = ((0, vC.n)(this, xC), (0, vC.n)(this, JC, 1)), this.color = ((0, vC.n)(this, IC), (0, vC.n)(this, iC, jC.e.White())), this._texture = ((0, vC.n)(this, hC), null), QC.set(this, (0, vC.n)(this, KC, null)), this._useRoughnessFromMainTexture = ((0, vC.n)(this, YC), !0), wC.set(this, (0, vC.n)(this, dC, !0)), this._roughness = ((0, vC.n)(this, mC), null), bC.set(this, (0, vC.n)(this, HC, null)), this._textureRoughness = ((0, vC.n)(this, EC), null), nC.set(this, (0, vC.n)(this, lC, null)), this._albedoScaling = ((0, vC.n)(this, XC), !1), fC.set(this, (0, vC.n)(this, cC, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, vC.n)(this, uC), this._internalMarkAllSubMeshesAsTexturesDirty = CC._dirtyCallbacks[1]
        }
        isReadyForSubMesh(CC, zC) {
          if (!this._isEnabled) return !0;
          if (CC._areTexturesDirty && zC.texturesEnabled) {
            if (this._texture && BC.b.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && BC.b.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(CC, zC) {
          this._isEnabled ? (CC.SHEEN = !0, CC.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, CC.SHEEN_ROUGHNESS = null !== this._roughness, CC.SHEEN_ALBEDOSCALING = this._albedoScaling, CC.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, CC._areTexturesDirty && zC.texturesEnabled && (this._texture && BC.b.SheenTextureEnabled ? ((0, kC.gb)(this._texture, CC, "SHEEN_TEXTURE"), CC.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : CC.SHEEN_TEXTURE = !1, this._textureRoughness && BC.b.SheenTextureEnabled ? (0, kC.gb)(this._textureRoughness, CC, "SHEEN_TEXTURE_ROUGHNESS") : CC.SHEEN_TEXTURE_ROUGHNESS = !1)) : (CC.SHEEN = !1, CC.SHEEN_TEXTURE = !1, CC.SHEEN_TEXTURE_ROUGHNESS = !1, CC.SHEEN_LINKWITHALBEDO = !1, CC.SHEEN_ROUGHNESS = !1, CC.SHEEN_ALBEDOSCALING = !1, CC.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, CC.SHEEN_GAMMATEXTURE = !1, CC.SHEEN_TEXTUREDIRECTUV = 0, CC.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(CC, zC, ZC, QC) {
          if (!this._isEnabled) return;
          const wC = QC.materialDefines,
            bC = this._material.isFrozen;
          CC.useUbo && bC && CC.isSync || ((this._texture || this._textureRoughness) && BC.b.SheenTextureEnabled && (CC.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, kC.B)(this._texture, CC, "sheen"), this._textureRoughness && !wC.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, kC.B)(this._textureRoughness, CC, "sheenRoughness")), CC.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && CC.updateFloat("vSheenRoughness", this._roughness)), zC.texturesEnabled && (this._texture && BC.b.SheenTextureEnabled && CC.setTexture("sheenSampler", this._texture), this._textureRoughness && !wC.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && BC.b.SheenTextureEnabled && CC.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(CC) {
          return this._texture === CC || this._textureRoughness === CC
        }
        getActiveTextures(CC) {
          this._texture && CC.push(this._texture), this._textureRoughness && CC.push(this._textureRoughness)
        }
        getAnimatables(CC) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && CC.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && CC.push(this._textureRoughness)
        }
        dispose(CC) {
          CC && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(CC, zC, ZC) {
          return CC.SHEEN && zC.addFallback(ZC++, "SHEEN"), ZC
        }
        getSamplers(CC) {
          CC.push("sheenSampler", "sheenRoughnessSampler")
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
      }, zC = new WeakMap, ZC = new WeakMap, QC = new WeakMap, wC = new WeakMap, bC = new WeakMap, nC = new WeakMap, fC = new WeakMap, (() => {
        const zC = "function" === typeof Symbol && Symbol.metadata ? Object.create(PC[Symbol.metadata] ?? null) : void 0;
        oC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], qC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], FC = [(0, eC.M)()], WC = [(0, eC.n)()], NC = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], MC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], gC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], SC = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], pC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], (0, vC.j)(CC, null, oC, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: CC => "isEnabled" in CC,
            get: CC => CC.isEnabled,
            set: (CC, zC) => {
              CC.isEnabled = zC
            }
          },
          metadata: zC
        }, GC, RC), (0, vC.j)(CC, null, qC, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: CC => "linkSheenWithAlbedo" in CC,
            get: CC => CC.linkSheenWithAlbedo,
            set: (CC, zC) => {
              CC.linkSheenWithAlbedo = zC
            }
          },
          metadata: zC
        }, AC, xC), (0, vC.j)(CC, null, NC, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: CC => "texture" in CC,
            get: CC => CC.texture,
            set: (CC, zC) => {
              CC.texture = zC
            }
          },
          metadata: zC
        }, KC, YC), (0, vC.j)(CC, null, MC, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "useRoughnessFromMainTexture" in CC,
            get: CC => CC.useRoughnessFromMainTexture,
            set: (CC, zC) => {
              CC.useRoughnessFromMainTexture = zC
            }
          },
          metadata: zC
        }, dC, mC), (0, vC.j)(CC, null, gC, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: CC => "roughness" in CC,
            get: CC => CC.roughness,
            set: (CC, zC) => {
              CC.roughness = zC
            }
          },
          metadata: zC
        }, HC, EC), (0, vC.j)(CC, null, SC, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: CC => "textureRoughness" in CC,
            get: CC => CC.textureRoughness,
            set: (CC, zC) => {
              CC.textureRoughness = zC
            }
          },
          metadata: zC
        }, lC, XC), (0, vC.j)(CC, null, pC, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: CC => "albedoScaling" in CC,
            get: CC => CC.albedoScaling,
            set: (CC, zC) => {
              CC.albedoScaling = zC
            }
          },
          metadata: zC
        }, cC, uC), (0, vC.j)(null, null, FC, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: CC => "intensity" in CC,
            get: CC => CC.intensity,
            set: (CC, zC) => {
              CC.intensity = zC
            }
          },
          metadata: zC
        }, JC, IC), (0, vC.j)(null, null, WC, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: CC => "color" in CC,
            get: CC => CC.color,
            set: (CC, zC) => {
              CC.color = zC
            }
          },
          metadata: zC
        }, iC, hC), zC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zC
        })
      })(), CC
    })();
    class fz extends sC.b {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let oz = (() => {
      var CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC;
      let PC, GC, RC, AC, xC, JC, IC, iC, hC, KC, YC, dC, mC, HC, EC, lC, XC, cC, rC, sC, aC, tC, DC, yC, LC, UC, OC, VC, Cz, zz, Zz = TC.c,
        Qz = [],
        wz = [],
        bz = [],
        nz = [],
        oz = [],
        qz = [],
        Fz = [],
        Wz = [],
        Nz = [],
        Mz = [],
        gz = [],
        Sz = [],
        pz = [],
        Pz = [],
        Gz = [],
        Rz = [],
        Az = [],
        xz = [],
        Jz = [],
        Iz = [],
        iz = [],
        vz = [],
        ez = [],
        hz = [],
        Kz = [],
        Yz = [],
        dz = [],
        mz = [],
        Hz = [],
        Ez = [],
        lz = [],
        Xz = [],
        cz = [],
        uz = [],
        rz = [],
        sz = [],
        Tz = [],
        az = [],
        tz = [],
        Dz = [],
        jz = [],
        yz = [],
        Lz = [],
        Uz = [],
        Bz = [],
        Oz = [],
        kz = [],
        Vz = [],
        CZ = [],
        zZ = [],
        ZZ = [],
        QZ = [],
        wZ = [],
        bZ = [],
        nZ = [],
        fZ = [],
        oZ = [],
        qZ = [],
        FZ = [],
        WZ = [];
      return CC = class extends Zz {
        get isRefractionEnabled() {
          return (0, vC.e)(this, zC, "f")
        }
        set isRefractionEnabled(CC) {
          (0, vC.f)(this, zC, CC, "f")
        }
        get isTranslucencyEnabled() {
          return (0, vC.e)(this, ZC, "f")
        }
        set isTranslucencyEnabled(CC) {
          (0, vC.f)(this, ZC, CC, "f")
        }
        get isDispersionEnabled() {
          return (0, vC.e)(this, QC, "f")
        }
        set isDispersionEnabled(CC) {
          (0, vC.f)(this, QC, CC, "f")
        }
        get isScatteringEnabled() {
          return (0, vC.e)(this, wC, "f")
        }
        set isScatteringEnabled(CC) {
          (0, vC.f)(this, wC, CC, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(CC) {
          this._scene.enableSubSurfaceForPrePass() && CC && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(CC))
        }
        get useAlbedoToTintRefraction() {
          return (0, vC.e)(this, bC, "f")
        }
        set useAlbedoToTintRefraction(CC) {
          (0, vC.f)(this, bC, CC, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, vC.e)(this, nC, "f")
        }
        set useAlbedoToTintTranslucency(CC) {
          (0, vC.f)(this, nC, CC, "f")
        }
        get thicknessTexture() {
          return (0, vC.e)(this, fC, "f")
        }
        set thicknessTexture(CC) {
          (0, vC.f)(this, fC, CC, "f")
        }
        get refractionTexture() {
          return (0, vC.e)(this, oC, "f")
        }
        set refractionTexture(CC) {
          (0, vC.f)(this, oC, CC, "f")
        }
        get indexOfRefraction() {
          return (0, vC.e)(this, qC, "f")
        }
        set indexOfRefraction(CC) {
          (0, vC.f)(this, qC, CC, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(CC) {
          const zC = CC >= 1 ? CC : -1;
          this._volumeIndexOfRefraction !== zC && (this._volumeIndexOfRefraction = zC, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, vC.e)(this, FC, "f")
        }
        set invertRefractionY(CC) {
          (0, vC.f)(this, FC, CC, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, vC.e)(this, WC, "f")
        }
        set linkRefractionWithTransparency(CC) {
          (0, vC.f)(this, WC, CC, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, vC.e)(this, NC, "f")
        }
        set useMaskFromThicknessTexture(CC) {
          (0, vC.f)(this, NC, CC, "f")
        }
        get refractionIntensityTexture() {
          return (0, vC.e)(this, MC, "f")
        }
        set refractionIntensityTexture(CC) {
          (0, vC.f)(this, MC, CC, "f")
        }
        get translucencyIntensityTexture() {
          return (0, vC.e)(this, gC, "f")
        }
        set translucencyIntensityTexture(CC) {
          (0, vC.f)(this, gC, CC, "f")
        }
        get translucencyColorTexture() {
          return (0, vC.e)(this, SC, "f")
        }
        set translucencyColorTexture(CC) {
          (0, vC.f)(this, SC, CC, "f")
        }
        get useGltfStyleTextures() {
          return (0, vC.e)(this, pC, "f")
        }
        set useGltfStyleTextures(CC) {
          (0, vC.f)(this, pC, CC, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(CC) {
          this.legacyTranslucency = CC
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
        constructor(PC) {
          let GC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(PC, "PBRSubSurface", 130, new fz, GC), this._isRefractionEnabled = !1, zC.set(this, (0, vC.n)(this, Qz, !1)), this._isTranslucencyEnabled = ((0, vC.n)(this, wz), !1), ZC.set(this, (0, vC.n)(this, bz, !1)), this._isDispersionEnabled = ((0, vC.n)(this, nz), !1), QC.set(this, (0, vC.n)(this, oz, !1)), this._isScatteringEnabled = ((0, vC.n)(this, qz), !1), wC.set(this, (0, vC.n)(this, Fz, !1)), this._scatteringDiffusionProfileIndex = ((0, vC.n)(this, Wz), (0, vC.n)(this, Nz, 0)), this.refractionIntensity = ((0, vC.n)(this, Mz), (0, vC.n)(this, gz, 1)), this.translucencyIntensity = ((0, vC.n)(this, Sz), (0, vC.n)(this, pz, 1)), this._useAlbedoToTintRefraction = ((0, vC.n)(this, Pz), !1), bC.set(this, (0, vC.n)(this, Gz, !1)), this._useAlbedoToTintTranslucency = ((0, vC.n)(this, Rz), !1), nC.set(this, (0, vC.n)(this, Az, !1)), this._thicknessTexture = ((0, vC.n)(this, xz), null), fC.set(this, (0, vC.n)(this, Jz, null)), this._refractionTexture = ((0, vC.n)(this, Iz), null), oC.set(this, (0, vC.n)(this, iz, null)), this._indexOfRefraction = ((0, vC.n)(this, vz), 1.5), qC.set(this, (0, vC.n)(this, ez, 1.5)), this._volumeIndexOfRefraction = ((0, vC.n)(this, hz), (0, vC.n)(this, Kz, -1)), this._invertRefractionY = ((0, vC.n)(this, Yz), !1), FC.set(this, (0, vC.n)(this, dz, !1)), this._linkRefractionWithTransparency = ((0, vC.n)(this, mz), !1), WC.set(this, (0, vC.n)(this, Hz, !1)), this.minimumThickness = ((0, vC.n)(this, Ez), (0, vC.n)(this, lz, 0)), this.maximumThickness = ((0, vC.n)(this, Xz), (0, vC.n)(this, cz, 1)), this.useThicknessAsDepth = ((0, vC.n)(this, uz), (0, vC.n)(this, rz, !1)), this.tintColor = ((0, vC.n)(this, sz), (0, vC.n)(this, Tz, jC.e.White())), this.tintColorAtDistance = ((0, vC.n)(this, az), (0, vC.n)(this, tz, 1)), this.dispersion = ((0, vC.n)(this, Dz), (0, vC.n)(this, jz, 0)), this.diffusionDistance = ((0, vC.n)(this, yz), (0, vC.n)(this, Lz, jC.e.White())), this._useMaskFromThicknessTexture = ((0, vC.n)(this, Uz), !1), NC.set(this, (0, vC.n)(this, Bz, !1)), this._refractionIntensityTexture = ((0, vC.n)(this, Oz), null), MC.set(this, (0, vC.n)(this, kz, null)), this._translucencyIntensityTexture = ((0, vC.n)(this, Vz), null), gC.set(this, (0, vC.n)(this, CZ, null)), this.translucencyColor = ((0, vC.n)(this, zZ), (0, vC.n)(this, ZZ, null)), this._translucencyColorTexture = ((0, vC.n)(this, QZ), null), SC.set(this, (0, vC.n)(this, wZ, null)), this._useGltfStyleTextures = ((0, vC.n)(this, bZ), !0), pC.set(this, (0, vC.n)(this, nZ, !0)), this.applyAlbedoAfterSubSurface = ((0, vC.n)(this, fZ), (0, vC.n)(this, oZ, CC.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, vC.n)(this, qZ), (0, vC.n)(this, FZ, CC.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, vC.n)(this, WZ), this._scene = PC.Km(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = PC._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = PC._dirtyCallbacks[32]
        }
        isReadyForSubMesh(CC, zC) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (CC._areTexturesDirty && zC.texturesEnabled) {
            if (this._thicknessTexture && BC.b.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && BC.b.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && BC.b.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && BC.b.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const CC = this._getRefractionTexture(zC);
            if (CC && BC.b.RefractionTextureEnabled && !CC.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(CC, zC) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return CC.SUBSURFACE = !1, CC.SS_DISPERSION = !1, CC.SS_TRANSLUCENCY = !1, CC.SS_SCATTERING = !1, CC.SS_REFRACTION = !1, CC.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, CC.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, CC.SS_THICKNESSANDMASK_TEXTURE = !1, CC.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, CC.SS_HAS_THICKNESS = !1, CC.SS_REFRACTIONINTENSITY_TEXTURE = !1, CC.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, CC.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, CC.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, CC.SS_REFRACTIONMAP_3D = !1, CC.SS_REFRACTIONMAP_OPPOSITEZ = !1, CC.SS_LODINREFRACTIONALPHA = !1, CC.SS_GAMMAREFRACTION = !1, CC.SS_RGBDREFRACTION = !1, CC.SS_LINEARSPECULARREFRACTION = !1, CC.SS_LINKREFRACTIONTOTRANSPARENCY = !1, CC.SS_ALBEDOFORREFRACTIONTINT = !1, CC.SS_ALBEDOFORTRANSLUCENCYTINT = !1, CC.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, CC.SS_USE_THICKNESS_AS_DEPTH = !1, CC.SS_USE_GLTF_TEXTURES = !1, CC.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, CC.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, CC.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(CC.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (CC._areTexturesDirty) {
            if (CC.SUBSURFACE = !0, CC.SS_DISPERSION = this._isDispersionEnabled, CC.SS_TRANSLUCENCY = this._isTranslucencyEnabled, CC.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, CC.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, CC.SS_SCATTERING = this._isScatteringEnabled, CC.SS_THICKNESSANDMASK_TEXTURE = !1, CC.SS_REFRACTIONINTENSITY_TEXTURE = !1, CC.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, CC.SS_HAS_THICKNESS = !1, CC.SS_USE_GLTF_TEXTURES = !1, CC.SS_REFRACTION = !1, CC.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, CC.SS_REFRACTIONMAP_3D = !1, CC.SS_GAMMAREFRACTION = !1, CC.SS_RGBDREFRACTION = !1, CC.SS_LINEARSPECULARREFRACTION = !1, CC.SS_REFRACTIONMAP_OPPOSITEZ = !1, CC.SS_LODINREFRACTIONALPHA = !1, CC.SS_LINKREFRACTIONTOTRANSPARENCY = !1, CC.SS_ALBEDOFORREFRACTIONTINT = !1, CC.SS_ALBEDOFORTRANSLUCENCYTINT = !1, CC.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, CC.SS_USE_THICKNESS_AS_DEPTH = !1, CC.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, CC.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, CC._areTexturesDirty && zC.texturesEnabled && (this._thicknessTexture && BC.b.ThicknessTextureEnabled && (0, kC.gb)(this._thicknessTexture, CC, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && BC.b.RefractionIntensityTextureEnabled && (0, kC.gb)(this._refractionIntensityTexture, CC, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && BC.b.TranslucencyIntensityTextureEnabled && (0, kC.gb)(this._translucencyIntensityTexture, CC, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && BC.b.TranslucencyColorTextureEnabled && ((0, kC.gb)(this._translucencyColorTexture, CC, "SS_TRANSLUCENCYCOLOR_TEXTURE"), CC.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), CC.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, CC.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, CC.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, CC.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && zC.texturesEnabled) {
              const ZC = this._getRefractionTexture(zC);
              ZC && BC.b.RefractionTextureEnabled && (CC.SS_REFRACTION = !0, CC.SS_REFRACTIONMAP_3D = ZC.isCube, CC.SS_GAMMAREFRACTION = ZC.gammaSpace, CC.SS_RGBDREFRACTION = ZC.isRGBD, CC.SS_LINEARSPECULARREFRACTION = ZC.linearSpecularLOD, CC.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && ZC.isCube ? !ZC.invertZ : ZC.invertZ, CC.SS_LODINREFRACTIONALPHA = ZC.lodLevelInAlpha, CC.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, CC.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, CC.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = ZC.isCube && ZC.boundingBoxSize, CC.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (CC.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(CC, zC, ZC, QC) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) CC.updateFloat2("vThicknessParam", 0, 0);
            else {
              QC.getRenderingMesh().getWorldMatrix().decompose(uC.j.Eg[0]);
              const zC = Math.max(Math.abs(uC.j.Eg[0].x), Math.abs(uC.j.Eg[0].y), Math.abs(uC.j.Eg[0].z));
              CC.updateFloat2("vThicknessParam", this.minimumThickness * zC, (this.maximumThickness - this.minimumThickness) * zC)
            }
        }
        bindForSubMesh(CC, zC, ZC, QC) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const wC = QC.materialDefines,
            bC = this._material.isFrozen,
            nC = this._material.realTimeFiltering,
            fC = wC.LODBASEDMICROSFURACE,
            oC = this._getRefractionTexture(zC);
          if (!CC.useUbo || !bC || !CC.isSync) {
            if (this._thicknessTexture && BC.b.ThicknessTextureEnabled && (CC.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, kC.B)(this._thicknessTexture, CC, "thickness")), this._refractionIntensityTexture && BC.b.RefractionIntensityTextureEnabled && wC.SS_REFRACTIONINTENSITY_TEXTURE && (CC.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, kC.B)(this._refractionIntensityTexture, CC, "refractionIntensity")), this._translucencyColorTexture && BC.b.TranslucencyColorTextureEnabled && wC.SS_TRANSLUCENCYCOLOR_TEXTURE && (CC.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, kC.B)(this._translucencyColorTexture, CC, "translucencyColor")), this._translucencyIntensityTexture && BC.b.TranslucencyIntensityTextureEnabled && wC.SS_TRANSLUCENCYINTENSITY_TEXTURE && (CC.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, kC.B)(this._translucencyIntensityTexture, CC, "translucencyIntensity")), oC && BC.b.RefractionTextureEnabled) {
              CC.x_("refractionMatrix", oC.getRefractionTextureMatrix());
              let zC = 1;
              oC.isCube || oC.depth && (zC = oC.depth);
              const ZC = oC.getSize().width,
                QC = this.volumeIndexOfRefraction;
              if (CC.updateFloat4("vRefractionInfos", oC.level, 1 / QC, zC, this._invertRefractionY ? -1 : 1), CC.updateFloat4("vRefractionMicrosurfaceInfos", ZC, oC.lodGenerationScale, oC.lodGenerationOffset, 1 / this.indexOfRefraction), nC && CC.updateFloat2("vRefractionFilteringInfo", ZC, Math.log2(ZC)), oC.boundingBoxSize) {
                const zC = oC;
                CC.updateVector3("vRefractionPosition", zC.boundingBoxPosition), CC.updateVector3("vRefractionSize", zC.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && CC.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), CC.updateColor3("vDiffusionDistance", this.diffusionDistance), CC.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), CC.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), CC.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), CC.updateFloat("dispersion", this.dispersion)
          }
          zC.texturesEnabled && (this._thicknessTexture && BC.b.ThicknessTextureEnabled && CC.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && BC.b.RefractionIntensityTextureEnabled && wC.SS_REFRACTIONINTENSITY_TEXTURE && CC.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && BC.b.TranslucencyIntensityTextureEnabled && wC.SS_TRANSLUCENCYINTENSITY_TEXTURE && CC.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && BC.b.TranslucencyColorTextureEnabled && wC.SS_TRANSLUCENCYCOLOR_TEXTURE && CC.setTexture("translucencyColorSampler", this._translucencyColorTexture), oC && BC.b.RefractionTextureEnabled && (fC ? CC.setTexture("refractionSampler", oC) : (CC.setTexture("refractionSampler", oC._lodTextureMid || oC), CC.setTexture("refractionSamplerLow", oC._lodTextureLow || oC), CC.setTexture("refractionSamplerHigh", oC._lodTextureHigh || oC))))
        }
        _getRefractionTexture(CC) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? CC.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(CC) {
          BC.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && CC.push(this._refractionTexture)
        }
        hasTexture(CC) {
          return this._thicknessTexture === CC || (this._refractionTexture === CC || (this._refractionIntensityTexture === CC || (this._translucencyIntensityTexture === CC || this._translucencyColorTexture === CC)))
        }
        hasRenderTargetTextures() {
          return !!(BC.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(CC) {
          this._thicknessTexture && CC.push(this._thicknessTexture), this._refractionTexture && CC.push(this._refractionTexture), this._refractionIntensityTexture && CC.push(this._refractionIntensityTexture), this._translucencyColorTexture && CC.push(this._translucencyColorTexture), this._translucencyIntensityTexture && CC.push(this._translucencyIntensityTexture)
        }
        getAnimatables(CC) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && CC.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && CC.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && CC.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && CC.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && CC.push(this._translucencyIntensityTexture)
        }
        dispose(CC) {
          CC && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(CC, zC, ZC) {
          return CC.SS_SCATTERING && zC.addFallback(ZC++, "SS_SCATTERING"), CC.SS_TRANSLUCENCY && zC.addFallback(ZC++, "SS_TRANSLUCENCY"), ZC
        }
        getSamplers(CC) {
          CC.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, zC = new WeakMap, ZC = new WeakMap, QC = new WeakMap, wC = new WeakMap, bC = new WeakMap, nC = new WeakMap, fC = new WeakMap, oC = new WeakMap, qC = new WeakMap, FC = new WeakMap, WC = new WeakMap, NC = new WeakMap, MC = new WeakMap, gC = new WeakMap, SC = new WeakMap, pC = new WeakMap, (() => {
        const zC = "function" === typeof Symbol && Symbol.metadata ? Object.create(Zz[Symbol.metadata] ?? null) : void 0;
        PC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], GC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], RC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], AC = [(0, eC.M)(), (0, eC.d)("_markScenePrePassDirty")], xC = [(0, eC.M)()], JC = [(0, eC.M)()], IC = [(0, eC.M)()], iC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], hC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], KC = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], YC = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], dC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], mC = [(0, eC.M)()], HC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], EC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], lC = [(0, eC.M)()], XC = [(0, eC.M)()], cC = [(0, eC.M)()], rC = [(0, eC.n)()], sC = [(0, eC.M)()], aC = [(0, eC.M)()], tC = [(0, eC.n)()], DC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], yC = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], LC = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], UC = [(0, eC.n)()], OC = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], VC = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Cz = [(0, eC.M)()], zz = [(0, eC.M)()], (0, vC.j)(CC, null, PC, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: CC => "isRefractionEnabled" in CC,
            get: CC => CC.isRefractionEnabled,
            set: (CC, zC) => {
              CC.isRefractionEnabled = zC
            }
          },
          metadata: zC
        }, Qz, wz), (0, vC.j)(CC, null, GC, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: CC => "isTranslucencyEnabled" in CC,
            get: CC => CC.isTranslucencyEnabled,
            set: (CC, zC) => {
              CC.isTranslucencyEnabled = zC
            }
          },
          metadata: zC
        }, bz, nz), (0, vC.j)(CC, null, RC, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: CC => "isDispersionEnabled" in CC,
            get: CC => CC.isDispersionEnabled,
            set: (CC, zC) => {
              CC.isDispersionEnabled = zC
            }
          },
          metadata: zC
        }, oz, qz), (0, vC.j)(CC, null, AC, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: CC => "isScatteringEnabled" in CC,
            get: CC => CC.isScatteringEnabled,
            set: (CC, zC) => {
              CC.isScatteringEnabled = zC
            }
          },
          metadata: zC
        }, Fz, Wz), (0, vC.j)(CC, null, iC, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: CC => "useAlbedoToTintRefraction" in CC,
            get: CC => CC.useAlbedoToTintRefraction,
            set: (CC, zC) => {
              CC.useAlbedoToTintRefraction = zC
            }
          },
          metadata: zC
        }, Gz, Rz), (0, vC.j)(CC, null, hC, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: CC => "useAlbedoToTintTranslucency" in CC,
            get: CC => CC.useAlbedoToTintTranslucency,
            set: (CC, zC) => {
              CC.useAlbedoToTintTranslucency = zC
            }
          },
          metadata: zC
        }, Az, xz), (0, vC.j)(CC, null, KC, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "thicknessTexture" in CC,
            get: CC => CC.thicknessTexture,
            set: (CC, zC) => {
              CC.thicknessTexture = zC
            }
          },
          metadata: zC
        }, Jz, Iz), (0, vC.j)(CC, null, YC, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "refractionTexture" in CC,
            get: CC => CC.refractionTexture,
            set: (CC, zC) => {
              CC.refractionTexture = zC
            }
          },
          metadata: zC
        }, iz, vz), (0, vC.j)(CC, null, dC, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: CC => "indexOfRefraction" in CC,
            get: CC => CC.indexOfRefraction,
            set: (CC, zC) => {
              CC.indexOfRefraction = zC
            }
          },
          metadata: zC
        }, ez, hz), (0, vC.j)(CC, null, HC, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: CC => "invertRefractionY" in CC,
            get: CC => CC.invertRefractionY,
            set: (CC, zC) => {
              CC.invertRefractionY = zC
            }
          },
          metadata: zC
        }, dz, mz), (0, vC.j)(CC, null, EC, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: CC => "linkRefractionWithTransparency" in CC,
            get: CC => CC.linkRefractionWithTransparency,
            set: (CC, zC) => {
              CC.linkRefractionWithTransparency = zC
            }
          },
          metadata: zC
        }, Hz, Ez), (0, vC.j)(CC, null, DC, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "useMaskFromThicknessTexture" in CC,
            get: CC => CC.useMaskFromThicknessTexture,
            set: (CC, zC) => {
              CC.useMaskFromThicknessTexture = zC
            }
          },
          metadata: zC
        }, Bz, Oz), (0, vC.j)(CC, null, yC, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "refractionIntensityTexture" in CC,
            get: CC => CC.refractionIntensityTexture,
            set: (CC, zC) => {
              CC.refractionIntensityTexture = zC
            }
          },
          metadata: zC
        }, kz, Vz), (0, vC.j)(CC, null, LC, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "translucencyIntensityTexture" in CC,
            get: CC => CC.translucencyIntensityTexture,
            set: (CC, zC) => {
              CC.translucencyIntensityTexture = zC
            }
          },
          metadata: zC
        }, CZ, zZ), (0, vC.j)(CC, null, OC, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "translucencyColorTexture" in CC,
            get: CC => CC.translucencyColorTexture,
            set: (CC, zC) => {
              CC.translucencyColorTexture = zC
            }
          },
          metadata: zC
        }, wZ, bZ), (0, vC.j)(CC, null, VC, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: CC => "useGltfStyleTextures" in CC,
            get: CC => CC.useGltfStyleTextures,
            set: (CC, zC) => {
              CC.useGltfStyleTextures = zC
            }
          },
          metadata: zC
        }, nZ, fZ), (0, vC.j)(null, null, xC, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: CC => "_scatteringDiffusionProfileIndex" in CC,
            get: CC => CC._scatteringDiffusionProfileIndex,
            set: (CC, zC) => {
              CC._scatteringDiffusionProfileIndex = zC
            }
          },
          metadata: zC
        }, Nz, Mz), (0, vC.j)(null, null, JC, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: CC => "refractionIntensity" in CC,
            get: CC => CC.refractionIntensity,
            set: (CC, zC) => {
              CC.refractionIntensity = zC
            }
          },
          metadata: zC
        }, gz, Sz), (0, vC.j)(null, null, IC, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: CC => "translucencyIntensity" in CC,
            get: CC => CC.translucencyIntensity,
            set: (CC, zC) => {
              CC.translucencyIntensity = zC
            }
          },
          metadata: zC
        }, pz, Pz), (0, vC.j)(null, null, mC, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: CC => "_volumeIndexOfRefraction" in CC,
            get: CC => CC._volumeIndexOfRefraction,
            set: (CC, zC) => {
              CC._volumeIndexOfRefraction = zC
            }
          },
          metadata: zC
        }, Kz, Yz), (0, vC.j)(null, null, lC, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: CC => "minimumThickness" in CC,
            get: CC => CC.minimumThickness,
            set: (CC, zC) => {
              CC.minimumThickness = zC
            }
          },
          metadata: zC
        }, lz, Xz), (0, vC.j)(null, null, XC, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: CC => "maximumThickness" in CC,
            get: CC => CC.maximumThickness,
            set: (CC, zC) => {
              CC.maximumThickness = zC
            }
          },
          metadata: zC
        }, cz, uz), (0, vC.j)(null, null, cC, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: CC => "useThicknessAsDepth" in CC,
            get: CC => CC.useThicknessAsDepth,
            set: (CC, zC) => {
              CC.useThicknessAsDepth = zC
            }
          },
          metadata: zC
        }, rz, sz), (0, vC.j)(null, null, rC, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: CC => "tintColor" in CC,
            get: CC => CC.tintColor,
            set: (CC, zC) => {
              CC.tintColor = zC
            }
          },
          metadata: zC
        }, Tz, az), (0, vC.j)(null, null, sC, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: CC => "tintColorAtDistance" in CC,
            get: CC => CC.tintColorAtDistance,
            set: (CC, zC) => {
              CC.tintColorAtDistance = zC
            }
          },
          metadata: zC
        }, tz, Dz), (0, vC.j)(null, null, aC, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: CC => "dispersion" in CC,
            get: CC => CC.dispersion,
            set: (CC, zC) => {
              CC.dispersion = zC
            }
          },
          metadata: zC
        }, jz, yz), (0, vC.j)(null, null, tC, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: CC => "diffusionDistance" in CC,
            get: CC => CC.diffusionDistance,
            set: (CC, zC) => {
              CC.diffusionDistance = zC
            }
          },
          metadata: zC
        }, Lz, Uz), (0, vC.j)(null, null, UC, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: CC => "translucencyColor" in CC,
            get: CC => CC.translucencyColor,
            set: (CC, zC) => {
              CC.translucencyColor = zC
            }
          },
          metadata: zC
        }, ZZ, QZ), (0, vC.j)(null, null, Cz, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: CC => "applyAlbedoAfterSubSurface" in CC,
            get: CC => CC.applyAlbedoAfterSubSurface,
            set: (CC, zC) => {
              CC.applyAlbedoAfterSubSurface = zC
            }
          },
          metadata: zC
        }, oZ, qZ), (0, vC.j)(null, null, zz, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: CC => "legacyTranslucency" in CC,
            get: CC => CC.legacyTranslucency,
            set: (CC, zC) => {
              CC.legacyTranslucency = zC
            }
          },
          metadata: zC
        }, FZ, WZ), zC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zC
        })
      })(), CC.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, CC.DEFAULT_LEGACY_TRANSLUCENCY = !1, CC
    })();
    var qz = ZC(40180),
      Fz = ZC(40157),
      Wz = ZC(40196),
      Nz = ZC(40198),
      Mz = ZC(40200),
      gz = ZC(40205),
      Sz = ZC(40211),
      pz = ZC(40216),
      Pz = ZC(39694);
    const Gz = {
      effect: null,
      subMesh: null
    };
    class Rz extends((0, Sz.d)((0, gz.e)(sC.b))) {}
    class Az extends((0, yC.e)(Rz)) {
      constructor(CC) {
        super(CC), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class xz extends((0, pz.c)(UC.e)) {}
    let Jz = (() => {
      var CC, zC;
      let QC, wC = xz,
        nC = [],
        fC = [];
      return CC = class extends wC {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(CC) {
          this._realTimeFiltering = CC, this.YzC(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(CC) {
          this._realTimeFilteringQuality = CC, this.YzC(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, vC.e)(this, zC, "f")
        }
        set debugMode(CC) {
          (0, vC.f)(this, zC, CC, "f")
        }
        constructor(ZC, QC) {
          super(ZC, QC, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || CC.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new uC.u(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = CC.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = jC.e.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new jC.e(0, 0, 0), this._albedoColor = new jC.e(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new jC.e(1, 1, 1), this._reflectionColor = new jC.e(1, 1, 1), this._emissiveColor = new jC.e(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = CC.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new KC.i(16), this._globalAmbientColor = new jC.e(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, zC.set(this, (0, vC.n)(this, nC, 0)), this.debugLimit = ((0, vC.n)(this, fC), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new tC(this), this.clearCoat = new Cz(this), this.iridescence = new Zz(this), this.anisotropy = new wz(this), this.sheen = new nz(this), this.subSurface = new oz(this), this.detailMap = new qz.b(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), BC.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = EC(this.Km()), this.prePassConfiguration = new DC.c
        }
        get hasRenderTargetTextures() {
          return !!(BC.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === CC.PBRMATERIAL_OPAQUE || this._transparencyMode === CC.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === CC.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== CC.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(CC, zC, ZC) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const QC = zC._drawWrapper;
          if (QC.effect && this.isFrozen && QC._wasPreviouslyReady && QC._wasPreviouslyUsingInstances === ZC) return !0;
          zC.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), zC.materialDefines = new Az(this._eventInfo.defineNames));
          const wC = zC.materialDefines;
          if (this._isReadyForSubMesh(zC)) return !0;
          const bC = this.Km(),
            nC = bC.mg();
          if (wC._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, bC.texturesEnabled)) {
            if (this._albedoTexture && BC.b.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && BC.b.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && BC.b.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && BC.b.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && BC.b.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const CC = this._getReflectionTexture();
            if (CC && BC.b.ReflectionTextureEnabled) {
              if (!CC.isReadyOrNotBlocking()) return !1;
              if (CC.irradianceTexture) {
                if (!CC.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!CC.sphericalPolynomial && CC.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && BC.b.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && BC.b.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (BC.b.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (nC.getCaps().standardDerivatives && this._bumpTexture && BC.b.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && BC.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = wC, this._eventInfo.subMesh = zC, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (wC._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (wC.AREALIGHTUSED || wC.CLUSTLIGHT_BATCH)
            for (let WC = 0; WC < CC.lightSources.length; WC++)
              if (!CC.lightSources[WC]._isReady()) return !1;
          if (nC.getCaps().standardDerivatives || CC.isVerticesDataPresent(rC.k.NormalKind) || (CC.createNormals(!0), hC.c.Warn("PBRMaterial: Normals have been created for the mesh: " + CC.name)), !(0, kC.d)(bC, CC, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const fC = zC.effect,
            oC = wC._areLightsDisposed,
            qC = this._prepareEffect(CC, zC.getRenderingMesh(), wC, this.onCompiled, this.onError, ZC, null);
          let FC = !1;
          if (qC)
            if (this._onEffectCreatedObservable && (Gz.effect = qC, Gz.subMesh = zC, this._onEffectCreatedObservable.notifyObservers(Gz)), this.allowShaderHotSwapping && fC && !qC.isReady()) {
              if (wC.markAsUnprocessed(), FC = this.isFrozen, oC) return wC._areLightsDisposed = !0, !1
            } else bC.resetCachedMaterial(), zC.setEffect(qC, wC, this._materialContext);
          return !(!zC.effect || !zC.effect.isReady()) && (wC._renderId = bC.getRenderId(), QC._wasPreviouslyReady = !FC, QC._wasPreviouslyUsingInstances = !!ZC, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(zC, ZC, QC) {
          let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            nC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            fC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(zC, ZC, QC, nC, fC), !QC.isDirty) return null;
          QC.markAsProcessed();
          const oC = this.Km().mg(),
            qC = new OC.c;
          let FC = 0;
          QC.USESPHERICALINVERTEX && qC.addFallback(FC++, "USESPHERICALINVERTEX"), QC.FOG && qC.addFallback(FC, "FOG"), QC.SPECULARAA && qC.addFallback(FC, "SPECULARAA"), QC.POINTSIZE && qC.addFallback(FC, "POINTSIZE"), QC.LOGARITHMICDEPTH && qC.addFallback(FC, "LOGARITHMICDEPTH"), QC.PARALLAX && qC.addFallback(FC, "PARALLAX"), QC.PARALLAX_RHS && qC.addFallback(FC, "PARALLAX_RHS"), QC.PARALLAXOCCLUSION && qC.addFallback(FC++, "PARALLAXOCCLUSION"), QC.ENVIRONMENTBRDF && qC.addFallback(FC++, "ENVIRONMENTBRDF"), QC.TANGENT && qC.addFallback(FC++, "TANGENT"), QC.BUMP && qC.addFallback(FC++, "BUMP"), FC = (0, kC.F)(QC, qC, this._maxSimultaneousLights, FC), QC.SPECULARTERM && qC.addFallback(FC++, "SPECULARTERM"), QC.USESPHERICALFROMREFLECTIONMAP && qC.addFallback(FC++, "USESPHERICALFROMREFLECTIONMAP"), QC.USEIRRADIANCEMAP && qC.addFallback(FC++, "USEIRRADIANCEMAP"), QC.LIGHTMAP && qC.addFallback(FC++, "LIGHTMAP"), QC.NORMAL && qC.addFallback(FC++, "NORMAL"), QC.AMBIENT && qC.addFallback(FC++, "AMBIENT"), QC.EMISSIVE && qC.addFallback(FC++, "EMISSIVE"), QC.VERTEXCOLOR && qC.addFallback(FC++, "VERTEXCOLOR"), QC.MORPHTARGETS && qC.addFallback(FC++, "MORPHTARGETS"), QC.MULTIVIEW && qC.addFallback(0, "MULTIVIEW");
          const WC = [rC.k.PositionKind];
          QC.NORMAL && WC.push(rC.k.NormalKind), QC.TANGENT && WC.push(rC.k.TangentKind);
          for (let CC = 1; CC <= 6; ++CC) QC["UV" + CC] && WC.push(`uv${1===CC?"":CC}`);
          QC.VERTEXCOLOR && WC.push(rC.k.ColorKind), (0, kC.K)(WC, zC, QC, qC), (0, kC.N)(WC, QC), (0, kC.Q)(WC, zC, QC), (0, kC.J)(WC, zC, QC);
          let NC = "pbr";
          const MC = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            gC = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, kC.wb)(MC, gC, !0);
          const SC = ["Material", "Scene", "Mesh"],
            pC = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: QC.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = qC, this._eventInfo.fallbackRank = FC, this._eventInfo.defines = QC, this._eventInfo.uniforms = MC, this._eventInfo.attributes = WC, this._eventInfo.samplers = gC, this._eventInfo.uniformBuffersNames = SC, this._eventInfo.customCode = void 0, this._eventInfo.mesh = zC, this._eventInfo.indexParameters = pC, this._callbackPluginEventGeneric(128, this._eventInfo), Mz.e.AddUniformsAndSamplers(MC, gC), DC.c.AddUniforms(MC), DC.c.AddSamplers(gC), (0, Fz.d)(MC), this._useVertexPulling) {
            const CC = ZC?.geometry;
            CC && (this._vertexPullingMetadata = (0, Wz.d)(CC), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((CC, zC) => {
              MC.push(`vp_${zC}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          LC.e && (LC.e.PrepareUniforms(MC, QC), LC.e.PrepareSamplers(gC, QC)), (0, kC.xb)({
            uniformsNames: MC,
            uniformBuffersNames: SC,
            samplers: gC,
            defines: QC,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const PC = {};
          this.customShaderNameResolve && (NC = this.customShaderNameResolve(NC, MC, SC, gC, QC, WC, PC));
          const GC = QC.toString(),
            RC = oC.createEffect(NC, {
              attributes: WC,
              uniformsNames: MC,
              uniformBuffersNames: SC,
              samplers: gC,
              defines: GC,
              fallbacks: qC,
              onCompiled: wC,
              onError: bC,
              indexParameters: pC,
              processFinalCode: PC.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: QC.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: CC._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, oC);
          return this._eventInfo.customCode = void 0, RC
        }
        _prepareDefines(zC, ZC, QC) {
          let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const nC = ZC.hasThinInstances,
            fC = this.Km(),
            oC = fC.mg();
          (0, kC.db)(fC, zC, QC, !0, this._maxSimultaneousLights, this._disableLighting), QC._needNormals = !0, (0, kC.lb)(fC, QC);
          const qC = this.needAlphaBlendingForMesh(zC) && this.Km().useOrderIndependentTransparency;
          if ((0, kC.qb)(fC, QC, this.canRenderToMRT && !qC), (0, kC.nb)(fC, QC, qC), Mz.e.PrepareDefines(oC.currentRenderPassId, zC, QC), QC.METALLICWORKFLOW = this.isMetallicWorkflow(), QC._areTexturesDirty) {
            QC._needUVs = !1;
            for (let CC = 1; CC <= 6; ++CC) QC["MAINUV" + CC] = !1;
            if (fC.texturesEnabled) {
              QC.ALBEDODIRECTUV = 0, QC.BASE_WEIGHTDIRECTUV = 0, QC.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, QC.AMBIENTDIRECTUV = 0, QC.OPACITYDIRECTUV = 0, QC.EMISSIVEDIRECTUV = 0, QC.REFLECTIVITYDIRECTUV = 0, QC.MICROSURFACEMAPDIRECTUV = 0, QC.METALLIC_REFLECTANCEDIRECTUV = 0, QC.REFLECTANCEDIRECTUV = 0, QC.BUMPDIRECTUV = 0, QC.LIGHTMAPDIRECTUV = 0, oC.getCaps().textureLOD && (QC.LODBASEDMICROSFURACE = !0), this._albedoTexture && BC.b.DiffuseTextureEnabled ? ((0, kC.gb)(this._albedoTexture, QC, "ALBEDO"), QC.GAMMAALBEDO = this._albedoTexture.gammaSpace) : QC.ALBEDO = !1, this._baseWeightTexture && BC.b.BaseWeightTextureEnabled ? (0, kC.gb)(this._baseWeightTexture, QC, "BASE_WEIGHT") : QC.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && BC.b.BaseDiffuseRoughnessTextureEnabled ? (0, kC.gb)(this._baseDiffuseRoughnessTexture, QC, "BASE_DIFFUSE_ROUGHNESS") : QC.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && BC.b.AmbientTextureEnabled ? ((0, kC.gb)(this._ambientTexture, QC, "AMBIENT"), QC.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : QC.AMBIENT = !1, this._opacityTexture && BC.b.OpacityTextureEnabled ? ((0, kC.gb)(this._opacityTexture, QC, "OPACITY"), QC.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : QC.OPACITY = !1;
              const CC = this._getReflectionTexture(),
                zC = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || oC.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, kC.ab)(fC, CC, QC, this.realTimeFiltering, this.realTimeFilteringQuality, !zC), this._lightmapTexture && BC.b.LightmapTextureEnabled ? ((0, kC.gb)(this._lightmapTexture, QC, "LIGHTMAP"), QC.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, QC.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, QC.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : QC.LIGHTMAP = !1, this._emissiveTexture && BC.b.EmissiveTextureEnabled ? ((0, kC.gb)(this._emissiveTexture, QC, "EMISSIVE"), QC.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : QC.EMISSIVE = !1, BC.b.SpecularTextureEnabled ? (this._metallicTexture ? ((0, kC.gb)(this._metallicTexture, QC, "REFLECTIVITY"), QC.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, QC.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, QC.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, QC.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, QC.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, kC.gb)(this._reflectivityTexture, QC, "REFLECTIVITY"), QC.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, QC.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, QC.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : QC.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (QC.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, kC.gb)(this._metallicReflectanceTexture, QC, "METALLIC_REFLECTANCE"), QC.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : QC.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, kC.gb)(this._reflectanceTexture, QC, "REFLECTANCE"), QC.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : QC.REFLECTANCE = !1) : (QC.METALLIC_REFLECTANCE = !1, QC.REFLECTANCE = !1), this._microSurfaceTexture ? (0, kC.gb)(this._microSurfaceTexture, QC, "MICROSURFACEMAP") : QC.MICROSURFACEMAP = !1) : (QC.REFLECTIVITY = !1, QC.MICROSURFACEMAP = !1), oC.getCaps().standardDerivatives && this._bumpTexture && BC.b.BumpTextureEnabled && !this._disableBumpMap ? ((0, kC.gb)(this._bumpTexture, QC, "BUMP"), this._useParallax && this._albedoTexture && BC.b.DiffuseTextureEnabled ? (QC.PARALLAX = !0, QC.PARALLAX_RHS = fC.useRightHandedSystem, QC.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : QC.PARALLAX = !1, QC.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (QC.BUMP = !1, QC.PARALLAX = !1, QC.PARALLAX_RHS = !1, QC.PARALLAXOCCLUSION = !1, QC.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && BC.b.ReflectionTextureEnabled ? (QC.ENVIRONMENTBRDF = !0, QC.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (QC.ENVIRONMENTBRDF = !1, QC.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? QC.ALPHAFROMALBEDO = !0 : QC.ALPHAFROMALBEDO = !1
            }
            QC.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === CC.LIGHTFALLOFF_STANDARD ? (QC.USEPHYSICALLIGHTFALLOFF = !1, QC.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === CC.LIGHTFALLOFF_GLTF ? (QC.USEPHYSICALLIGHTFALLOFF = !1, QC.USEGLTFLIGHTFALLOFF = !0) : (QC.USEPHYSICALLIGHTFALLOFF = !0, QC.USEGLTFLIGHTFALLOFF = !1), QC.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? QC.TWOSIDEDLIGHTING = !0 : QC.TWOSIDEDLIGHTING = !1, QC.MIRRORED = !!fC._mirroredCameraPosition, QC.SPECULARAA = oC.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(QC._areTexturesDirty || QC._areMiscDirty) && (QC.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, QC.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, QC.ALPHABLEND = this.needAlphaBlendingForMesh(zC), QC.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, QC.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), QC._areTexturesDirty && (QC.TEXTURE_REPETITION_MODE = oC.version > 1 || oC.isWebGPU ? this.textureRepetitionMode : 0), QC._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(QC), QC.FORCENORMALFORWARD = this._forceNormalForward, QC.RADIANCEOCCLUSION = this._useRadianceOcclusion, QC.HORIZONOCCLUSION = this._useHorizonOcclusion, QC._areMiscDirty && ((0, kC.ib)(zC, fC, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(zC), QC, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ZC, this._isVertexOutputInvariant), QC.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !zC.isVerticesDataPresent(rC.k.NormalKind), QC.DEBUGMODE = this._debugMode), (0, kC.Z)(fC, oC, this, QC, !!wC, bC, nC), this._eventInfo.defines = QC, this._eventInfo.mesh = zC, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, kC.X)(zC, QC, !0, !0, !0, this._transparencyMode !== CC.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(CC, zC, ZC) {
          const QC = {
            clipPlane: !1,
            useInstances: !1,
            ...ZC
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const ZC = new Az(this._eventInfo.defineNames),
              wC = this._prepareEffect(CC, CC, ZC, void 0, void 0, QC.useInstances, QC.clipPlane);
            this._onEffectCreatedObservable && (Gz.effect = wC, Gz.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Gz)), wC.isReady() ? zC && zC(this) : wC.onCompileObservable.add((() => {
              zC && zC(this)
            }))
          })()
        }
        buildUniformLayout() {
          const CC = this._uniformBuffer;
          CC.addUniform("vAlbedoInfos", 2), CC.addUniform("vBaseWeightInfos", 2), CC.addUniform("vBaseDiffuseRoughnessInfos", 2), CC.addUniform("vAmbientInfos", 4), CC.addUniform("vOpacityInfos", 2), CC.addUniform("vEmissiveInfos", 2), CC.addUniform("vLightmapInfos", 2), CC.addUniform("vReflectivityInfos", 3), CC.addUniform("vMicroSurfaceSamplerInfos", 2), CC.addUniform("vBumpInfos", 3), CC.addUniform("albedoMatrix", 16), CC.addUniform("baseWeightMatrix", 16), CC.addUniform("baseDiffuseRoughnessMatrix", 16), CC.addUniform("ambientMatrix", 16), CC.addUniform("opacityMatrix", 16), CC.addUniform("emissiveMatrix", 16), CC.addUniform("lightmapMatrix", 16), CC.addUniform("reflectivityMatrix", 16), CC.addUniform("microSurfaceSamplerMatrix", 16), CC.addUniform("bumpMatrix", 16), CC.addUniform("vTangentSpaceParams", 2), CC.addUniform("vAlbedoColor", 4), CC.addUniform("baseWeight", 1), CC.addUniform("baseDiffuseRoughness", 1), CC.addUniform("vLightingIntensity", 4), CC.addUniform("pointSize", 1), CC.addUniform("vReflectivityColor", 4), CC.addUniform("vEmissiveColor", 3), CC.addUniform("vAmbientColor", 3), CC.addUniform("vDebugMode", 2), CC.addUniform("vMetallicReflectanceFactors", 4), CC.addUniform("vMetallicReflectanceInfos", 2), CC.addUniform("metallicReflectanceMatrix", 16), CC.addUniform("vReflectanceInfos", 2), CC.addUniform("reflectanceMatrix", 16), CC.addUniform("cameraInfo", 4), CC.addUniform("vTextureRepetitionHexTilingParams", 4), (0, kC.ub)(CC, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(CC, zC, ZC) {
          const QC = this.Km(),
            wC = ZC.materialDefines;
          if (!wC) return;
          const bC = ZC.effect;
          if (!bC) return;
          this._activeEffect = bC, zC.getMeshUniformBuffer().bindToEffect(bC, "Mesh"), zC.transferToEffect(CC);
          const nC = QC.mg();
          this._uniformBuffer.bindToEffect(bC, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, QC, zC, CC, this.isFrozen), Mz.e.Bind(nC.currentRenderPassId, this._activeEffect, zC, CC, this);
          const fC = QC.activeCamera;
          fC ? this._uniformBuffer.updateFloat4("cameraInfo", fC.minZ, fC.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const oC = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", oC[0], oC[1], oC[2], oC[3]), this._eventInfo.subMesh = ZC, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), wC.OBJECTSPACE_NORMALMAP && (CC.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const qC = this._mustRebind(QC, bC, ZC, zC.visibility),
            FC = nC._features.needToAlwaysBindUniformBuffers;
          (0, kC.f)(zC, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Wz.c)(this._activeEffect, this._vertexPullingMetadata);
          let WC = null;
          const NC = this._uniformBuffer;
          if (qC) {
            if (this.bindViewProjection(bC), WC = this._getReflectionTexture(), !NC.useUbo || !this.isFrozen || !NC.isSync || ZC._drawWrapper._forceRebindOnNextCall) {
              if (QC.texturesEnabled && (this._albedoTexture && BC.b.DiffuseTextureEnabled && (NC.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, kC.B)(this._albedoTexture, NC, "albedo")), this._baseWeightTexture && BC.b.BaseWeightTextureEnabled && (NC.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, kC.B)(this._baseWeightTexture, NC, "baseWeight")), this._baseDiffuseRoughnessTexture && BC.b.BaseDiffuseRoughnessTextureEnabled && (NC.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, kC.B)(this._baseDiffuseRoughnessTexture, NC, "baseDiffuseRoughness")), this._ambientTexture && BC.b.AmbientTextureEnabled && (NC.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, kC.B)(this._ambientTexture, NC, "ambient")), this._opacityTexture && BC.b.OpacityTextureEnabled && (NC.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, kC.B)(this._opacityTexture, NC, "opacity")), this._emissiveTexture && BC.b.EmissiveTextureEnabled && (NC.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, kC.B)(this._emissiveTexture, NC, "emissive")), this._lightmapTexture && BC.b.LightmapTextureEnabled && (NC.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, kC.B)(this._lightmapTexture, NC, "lightmap")), BC.b.SpecularTextureEnabled && (this._metallicTexture ? (NC.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, kC.B)(this._metallicTexture, NC, "reflectivity")) : this._reflectivityTexture && (NC.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, kC.B)(this._reflectivityTexture, NC, "reflectivity")), this._metallicReflectanceTexture && (NC.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, kC.B)(this._metallicReflectanceTexture, NC, "metallicReflectance")), this._reflectanceTexture && wC.REFLECTANCE && (NC.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, kC.B)(this._reflectanceTexture, NC, "reflectance")), this._microSurfaceTexture && (NC.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, kC.B)(this._microSurfaceTexture, NC, "microSurfaceSampler"))), this._bumpTexture && nC.getCaps().standardDerivatives && BC.b.BumpTextureEnabled && !this._disableBumpMap && (NC.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, kC.B)(this._bumpTexture, NC, "bump"), QC._mirroredCameraPosition ? NC.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : NC.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, kC.j)(QC, wC, NC, this._reflectionColor, WC, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && NC.updateFloat("pointSize", this.pointSize), wC.METALLICWORKFLOW) {
                jC.j.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, jC.j.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const CC = this.subSurface?._indexOfRefraction ?? 1.5,
                  zC = 1;
                jC.j.Color4[0].b = CC;
                const ZC = Math.pow((CC - zC) / (CC + zC), 2);
                jC.j.Color4[0].a = ZC, NC.updateDirectColor4("vReflectivityColor", jC.j.Color4[0]), NC.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else NC.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              NC.updateColor3("vEmissiveColor", BC.b.EmissiveTextureEnabled ? this._emissiveColor : jC.e.BlackReadOnly), !wC.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? NC.updateColor4("vAlbedoColor", this._albedoColor, 1) : NC.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), NC.updateFloat("baseWeight", this._baseWeight), NC.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * QC.environmentIntensity, this._lightingInfos.w = this._specularIntensity, NC.updateVector4("vLightingIntensity", this._lightingInfos), QC.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), NC.updateColor3("vAmbientColor", this._globalAmbientColor), NC.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            QC.texturesEnabled && (this._albedoTexture && BC.b.DiffuseTextureEnabled && NC.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && BC.b.BaseWeightTextureEnabled && NC.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && BC.b.BaseDiffuseRoughnessTextureEnabled && NC.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && BC.b.AmbientTextureEnabled && NC.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && BC.b.OpacityTextureEnabled && NC.setTexture("opacitySampler", this._opacityTexture), (0, kC.n)(QC, wC, NC, WC, this.realTimeFiltering), wC.ENVIRONMENTBRDF && NC.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && BC.b.EmissiveTextureEnabled && NC.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && BC.b.LightmapTextureEnabled && NC.setTexture("lightmapSampler", this._lightmapTexture), BC.b.SpecularTextureEnabled && (this._metallicTexture ? NC.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && NC.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && NC.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && wC.REFLECTANCE && NC.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && NC.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && nC.getCaps().standardDerivatives && BC.b.BumpTextureEnabled && !this._disableBumpMap && NC.setTexture("bumpSampler", this._bumpTexture)), this.Km().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(zC) && this.Km().depthPeelingRenderer.bind(bC), this._eventInfo.subMesh = ZC, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Fz.g)(this._activeEffect, this, QC), this.bindEyePosition(bC)
          } else FC && (this._needToBindSceneUbo = !0);
          !qC && this.isFrozen && !FC || !QC.lightsEnabled || this._disableLighting || (0, kC.q)(QC, zC, this._activeEffect, wC, this._maxSimultaneousLights), !qC && this.isFrozen || ((QC.fogEnabled && zC.applyFog && QC.fogMode !== cC.g.FOGMODE_NONE || WC || this.subSurface.refractionTexture || zC.receiveShadows || wC.PREPASS || wC.CLUSTLIGHT_BATCH) && this.bindView(bC), (0, kC.h)(QC, zC, this._activeEffect, !0), wC.NUM_MORPH_INFLUENCERS && (0, kC.u)(zC, this._activeEffect), wC.BAKED_VERTEX_ANIMATION_TEXTURE && zC.bakedVertexAnimationManager?.bind(bC, wC.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, kC.t)(wC, this._activeEffect, QC)), this._afterBind(zC, this._activeEffect, ZC), NC.update()
        }
        getAnimatables() {
          const CC = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && CC.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && CC.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && CC.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && CC.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && CC.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && CC.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && CC.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? CC.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && CC.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && CC.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && CC.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && CC.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && CC.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && CC.push(this._microSurfaceTexture), CC
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.Km().environmentTexture
        }
        getActiveTextures() {
          const CC = super.getActiveTextures();
          return this._albedoTexture && CC.push(this._albedoTexture), this._baseWeightTexture && CC.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && CC.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && CC.push(this._ambientTexture), this._opacityTexture && CC.push(this._opacityTexture), this._reflectionTexture && CC.push(this._reflectionTexture), this._emissiveTexture && CC.push(this._emissiveTexture), this._reflectivityTexture && CC.push(this._reflectivityTexture), this._metallicTexture && CC.push(this._metallicTexture), this._metallicReflectanceTexture && CC.push(this._metallicReflectanceTexture), this._reflectanceTexture && CC.push(this._reflectanceTexture), this._microSurfaceTexture && CC.push(this._microSurfaceTexture), this._bumpTexture && CC.push(this._bumpTexture), this._lightmapTexture && CC.push(this._lightmapTexture), CC
        }
        hasTexture(CC) {
          return !!super.hasTexture(CC) || (this._albedoTexture === CC || (this._baseWeightTexture === CC || (this._baseDiffuseRoughnessTexture === CC || (this._ambientTexture === CC || (this._opacityTexture === CC || (this._reflectionTexture === CC || (this._emissiveTexture === CC || (this._reflectivityTexture === CC || (this._metallicTexture === CC || (this._metallicReflectanceTexture === CC || (this._reflectanceTexture === CC || (this._microSurfaceTexture === CC || (this._bumpTexture === CC || this._lightmapTexture === CC)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const CC = this.Km().enableSubSurfaceForPrePass();
          return CC && (CC.enabled = !0), !0
        }
        dispose(CC, zC) {
          this._breakShaderLoadedCheck = !0, zC && (this._environmentBRDFTexture && this.Km().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(CC, zC)
        }
      }, zC = new WeakMap, (() => {
        const zC = "function" === typeof Symbol && Symbol.metadata ? Object.create(wC[Symbol.metadata] ?? null) : void 0;
        QC = [(0, eC.d)("_markAllSubMeshesAsMiscDirty")], (0, vC.j)(CC, null, QC, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: CC => "debugMode" in CC,
            get: CC => CC.debugMode,
            set: (CC, zC) => {
              CC.debugMode = zC
            }
          },
          metadata: zC
        }, nC, fC), zC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zC
        })
      })(), CC.PBRMATERIAL_OPAQUE = bC.d.MATERIAL_OPAQUE, CC.PBRMATERIAL_ALPHATEST = bC.d.MATERIAL_ALPHATEST, CC.PBRMATERIAL_ALPHABLEND = bC.d.MATERIAL_ALPHABLEND, CC.PBRMATERIAL_ALPHATESTANDBLEND = bC.d.MATERIAL_ALPHATESTANDBLEND, CC.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, CC.LIGHTFALLOFF_PHYSICAL = 0, CC.LIGHTFALLOFF_GLTF = 1, CC.LIGHTFALLOFF_STANDARD = 2, CC.ForceGLSL = !1, CC._ShaderLoader = new Nz.c((() => [Promise.all([ZC.e(317), ZC.e(328)]).then((() => ZC(61176))), Promise.all([ZC.e(322), ZC.e(318), ZC.e(380), ZC.e(331), ZC.e(379)]).then((() => ZC(61204)))]), (() => [Promise.all([ZC.e(336), ZC.e(338), ZC.e(345)]).then((() => ZC(61277))), Promise.all([ZC.e(336), ZC.e(339), ZC.e(383), ZC.e(349), ZC.e(382)]).then((() => ZC(61308)))])), CC
    })();
    Object.getOwnPropertyDescriptor(Jz.prototype, "decalMap") || Object.defineProperty(Jz.prototype, "decalMap", (0, Pz.d)("PBRBaseMaterial", "decalMap")), (0, ZC(41655).e)();
    var Iz = ZC(39842);
    var iz = ZC(39913),
      vz = ZC(41638),
      ez = ZC(39650),
      hz = ZC(39663),
      Kz = ZC(39758);
    let Yz = !1;
    const dz = new jC.g,
      mz = new jC.g;
    class Hz extends vz.e {
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
      set wrapU(CC) {
        if (this._textures)
          for (let zC = 0; zC < this._textures.length; zC++) this._textures[zC].wrapU = CC
      }
      set wrapV(CC) {
        if (this._textures)
          for (let zC = 0; zC < this._textures.length; zC++) this._textures[zC].wrapV = CC
      }
      constructor(CC, zC, ZC, QC, wC, bC) {
        const nC = !(!wC || !wC.generateMipMaps) && wC.generateMipMaps,
          fC = !(!wC || !wC.generateDepthTexture) && wC.generateDepthTexture,
          oC = wC && wC.depthTextureFormat ? wC.depthTextureFormat : 15,
          qC = !wC || void 0 === wC.doNotChangeAspectRatio || wC.doNotChangeAspectRatio,
          FC = !(!wC || !wC.drawOnlyOnFirstAttachmentByDefault) && wC.drawOnlyOnFirstAttachmentByDefault;
        if (super(CC, zC, QC, nC, qC, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Yz || (Yz = !0, hz.ThinEngine.prototype.restoreSingleAttachment = function() {
            const CC = this._gl;
            this.bindAttachments([CC.BACK])
          }, hz.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const CC = this._gl;
            this.bindAttachments([CC.COLOR_ATTACHMENT0])
          }, hz.ThinEngine.prototype.buildTextureLayout = function(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const ZC = this._gl,
              QC = [];
            if (zC) QC.push(ZC.BACK);
            else
              for (let wC = 0; wC < CC.length; wC++) CC[wC] ? QC.push(ZC["COLOR_ATTACHMENT" + wC]) : QC.push(ZC.NONE);
            return QC
          }, hz.ThinEngine.prototype.bindAttachments = function(CC) {
            const zC = this._gl,
              ZC = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, ZC)
              for (let QC = 0; QC < CC.length; QC++) CC[QC] !== zC.NONE && ZC[QC] && (0, Kz.l)(ZC[QC].format) && (this._integerMRTAttachmentsMask |= 1 << QC);
            zC.drawBuffers(CC)
          }, hz.ThinEngine.prototype.clearAttachments = function(CC, zC, ZC, QC) {
            let wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const nC = this._currentRenderTarget?.textures;
            let fC = !1;
            if (ZC && CC && nC)
              for (let oC = 0; oC < zC.length; oC++) {
                const CC = nC[oC];
                if (zC[oC] !== this._gl.NONE && CC && (0, Kz.l)(CC.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  fC = !0;
                  break
                }
              }
            if (!fC || !CC || !nC) return this.bindAttachments(zC), void this.clear(CC, ZC, QC, wC, bC);
            this.bindAttachments(zC), this._applyColorWriteState();
            for (let oC = 0; oC < zC.length; oC++) {
              const ZC = nC[oC];
              if (zC[oC] !== this._gl.NONE && ZC) {
                let zC = CC;
                if ((0, Kz.l)(ZC.format)) {
                  const QC = (0, Kz.n)(ZC.type);
                  zC = QC ? dz : mz;
                  const wC = QC ? 255 : 1;
                  zC.r = Math.round(CC.r * wC), zC.g = Math.round(CC.g * wC), zC.b = Math.round(CC.b * wC), zC.a = Math.round(CC.a * wC)
                }
                this._clearColorAttachment(oC, zC, ZC.format, ZC.type)
              }
            }
            if (QC || wC) {
              const CC = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, QC, wC, bC)
              } finally {
                this._integerMRTAttachmentsMask = CC
              }
            }
          }, hz.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZC = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, CC.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(CC), zC || this.generateMipMapsMultiFramebuffer(CC), ZC && (CC._MSAAFramebuffer && this._bindUnboundFramebuffer(CC._framebuffer), ZC()), this._bindUnboundFramebuffer(null)
          }, hz.ThinEngine.prototype.createMultipleRenderTarget = function(CC, zC) {
            let ZC, QC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              wC = !1,
              bC = !0,
              nC = !1,
              fC = !1,
              oC = 1,
              qC = 1,
              FC = [],
              WC = [],
              NC = [],
              MC = [],
              gC = [],
              SC = [],
              pC = [],
              PC = [],
              GC = [],
              RC = !1;
            const AC = this._createHardwareRenderTargetWrapper(!0, !1, CC);
            void 0 !== zC && (wC = void 0 !== zC.generateMipMaps && zC.generateMipMaps, bC = void 0 === zC.generateDepthBuffer || zC.generateDepthBuffer, nC = void 0 !== zC.generateStencilBuffer && zC.generateStencilBuffer, fC = void 0 !== zC.generateDepthTexture && zC.generateDepthTexture, oC = zC.KnC ?? 1, qC = zC.samples ?? qC, FC = zC.types || FC, WC = zC.samplingModes || WC, NC = zC.useSRGBBuffers || NC, MC = zC.formats || MC, gC = zC.targetTypes || gC, SC = zC.faceIndex || SC, pC = zC.layerIndex || pC, PC = zC.layerCounts || PC, GC = zC.labels || GC, RC = zC.dontCreateTextures ?? !1, this.fS > 1 && (13 === zC.depthTextureFormat || 17 === zC.depthTextureFormat || 16 === zC.depthTextureFormat || 14 === zC.depthTextureFormat || 18 === zC.depthTextureFormat) && (ZC = zC.depthTextureFormat)), void 0 === ZC && (ZC = nC ? 13 : 14);
            const xC = this._gl,
              JC = this._currentFramebuffer,
              IC = xC.createFramebuffer();
            this._bindUnboundFramebuffer(IC);
            const iC = CC.width ?? CC,
              vC = CC.height ?? CC,
              eC = [],
              KC = [],
              YC = this.fS > 1 && (13 === ZC || 17 === ZC || 18 === ZC);
            AC.label = zC?.label ?? "MultiRenderTargetWrapper", AC._framebuffer = IC, AC._generateDepthBuffer = fC || bC, AC._generateStencilBuffer = fC ? YC : nC, AC._depthStencilBuffer = this._setupFramebufferDepthAttachments(AC._generateStencilBuffer, AC._generateDepthBuffer, iC, vC, 1, ZC), AC._attachments = KC;
            for (let dC = 0; dC < oC; dC++) {
              let CC = WC[dC] || 3,
                zC = FC[dC] || 0,
                ZC = NC[dC] || !1;
              const QC = MC[dC] || 5,
                bC = gC[dC] || 3553,
                nC = PC[dC] ?? 1;
              (1 !== zC || this._caps.textureFloatLinearFiltering) && (2 !== zC || this._caps.textureHalfFloatLinearFiltering) || (CC = 1);
              const fC = this._getSamplingParameters(CC, wC);
              1 !== zC || this._caps.textureFloat || (zC = 0, hC.c.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), ZC = ZC && this._caps.supportSRGBBuffers && (this.fS > 1 || this.isWebGPU);
              const oC = this.fS > 1,
                qC = xC[oC ? "COLOR_ATTACHMENT" + dC : "COLOR_ATTACHMENT" + dC + "_WEBGL"];
              if (KC.push(qC), -1 === bC || RC) continue;
              const SC = new ez.c(this, 6);
              eC[dC] = SC, xC.activeTexture(xC["TEXTURE" + dC]), xC.bindTexture(bC, SC._hardwareTexture.underlyingResource), xC.texParameteri(bC, xC.TEXTURE_MAG_FILTER, fC.mag), xC.texParameteri(bC, xC.TEXTURE_MIN_FILTER, fC.min), xC.texParameteri(bC, xC.TEXTURE_WRAP_S, xC.CLAMP_TO_EDGE), xC.texParameteri(bC, xC.TEXTURE_WRAP_T, xC.CLAMP_TO_EDGE);
              const pC = this._getRGBABufferInternalSizedFormat(zC, QC, ZC),
                JC = this._getInternalFormat(QC),
                IC = this._getWebGLTextureType(zC);
              if (!oC || 35866 !== bC && 32879 !== bC)
                if (34067 === bC) {
                  for (let CC = 0; CC < 6; CC++) xC.texImage2D(xC.TEXTURE_CUBE_MAP_POSITIVE_X + CC, 0, pC, iC, vC, 0, JC, IC, null);
                  SC.isCube = !0
                } else xC.texImage2D(xC.TEXTURE_2D, 0, pC, iC, vC, 0, JC, IC, null);
              else 35866 === bC ? SC.is2DArray = !0 : SC.is3D = !0, SC.baseDepth = SC.depth = nC, xC.texImage3D(bC, 0, pC, iC, vC, nC, 0, JC, IC, null);
              wC && xC.generateMipmap(bC), this._bindTextureDirectly(bC, null), SC.baseWidth = iC, SC.baseHeight = vC, SC.width = iC, SC.height = vC, SC.isReady = !0, SC.samples = 1, SC.generateMipMaps = wC, SC.samplingMode = CC, SC.type = zC, SC._useSRGBBuffer = ZC, SC.format = QC, SC.label = GC[dC] ?? AC.label + "-Texture" + dC, this._internalTexturesCache.push(SC)
            }
            if (fC && this._caps.depthTextureExtension && !RC) {
              const CC = new ez.c(this, 14);
              let zC = 5,
                QC = xC.DEPTH_COMPONENT16,
                bC = xC.DEPTH_COMPONENT,
                nC = xC.UNSIGNED_SHORT,
                fC = xC.DEPTH_ATTACHMENT;
              this.fS < 2 ? QC = xC.DEPTH_COMPONENT : 14 === ZC ? (zC = 1, nC = xC.FLOAT, QC = xC.DEPTH_COMPONENT32F) : 18 === ZC ? (zC = 0, nC = xC.FLOAT_32_UNSIGNED_INT_24_8_REV, QC = xC.DEPTH32F_STENCIL8, bC = xC.DEPTH_STENCIL, fC = xC.DEPTH_STENCIL_ATTACHMENT) : 16 === ZC ? (zC = 0, nC = xC.UNSIGNED_INT, QC = xC.DEPTH_COMPONENT24, fC = xC.DEPTH_ATTACHMENT) : 13 !== ZC && 17 !== ZC || (zC = 12, nC = xC.UNSIGNED_INT_24_8, QC = xC.DEPTH24_STENCIL8, bC = xC.DEPTH_STENCIL, fC = xC.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(xC.TEXTURE_2D, CC, !0), xC.texParameteri(xC.TEXTURE_2D, xC.TEXTURE_MAG_FILTER, xC.NEAREST), xC.texParameteri(xC.TEXTURE_2D, xC.TEXTURE_MIN_FILTER, xC.NEAREST), xC.texParameteri(xC.TEXTURE_2D, xC.TEXTURE_WRAP_S, xC.CLAMP_TO_EDGE), xC.texParameteri(xC.TEXTURE_2D, xC.TEXTURE_WRAP_T, xC.CLAMP_TO_EDGE), xC.texImage2D(xC.TEXTURE_2D, 0, QC, iC, vC, 0, bC, nC, null), xC.framebufferTexture2D(xC.FRAMEBUFFER, fC, xC.TEXTURE_2D, CC._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(xC.TEXTURE_2D, null), AC._depthStencilTexture = CC, AC._depthStencilTextureWithStencil = YC, CC.baseWidth = iC, CC.baseHeight = vC, CC.width = iC, CC.height = vC, CC.isReady = !0, CC.samples = 1, CC.generateMipMaps = wC, CC.samplingMode = 1, CC.format = ZC, CC.type = zC, CC.label = AC.label + "-DepthStencil", eC[oC] = CC, this._internalTexturesCache.push(CC)
            }
            if (AC.setTextures(eC), QC && xC.drawBuffers(KC), this._bindUnboundFramebuffer(JC), AC.setLayerAndFaceIndices(pC, SC), this.resetTextureCache(), RC) {
              if (qC > 1) {
                const CC = xC.createFramebuffer();
                if (!CC) throw new Error("Unable to create multi sampled framebuffer");
                AC._samples = qC, AC._MSAAFramebuffer = CC, oC > 0 && QC && (this._bindUnboundFramebuffer(CC), xC.drawBuffers(KC), this._bindUnboundFramebuffer(JC))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(AC, qC, QC);
            return AC
          }, hz.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(CC, zC) {
            let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.fS < 2 || !CC) return 1;
            if (CC.samples === zC) return zC;
            const QC = this._gl;
            zC = Math.min(zC, this.getCaps().maxMSAASamples), CC._depthStencilBuffer && (QC.deleteRenderbuffer(CC._depthStencilBuffer), CC._depthStencilBuffer = null), CC._MSAAFramebuffer && (QC.deleteFramebuffer(CC._MSAAFramebuffer), CC._MSAAFramebuffer = null);
            const wC = CC._attachments.length;
            for (let nC = 0; nC < wC; nC++) {
              const zC = CC.textures[nC]._hardwareTexture;
              zC?.releaseMSAARenderBuffers()
            }
            if (zC > 1 && "function" === typeof QC.renderbufferStorageMultisample) {
              const bC = QC.createFramebuffer();
              if (!bC) throw new Error("Unable to create multi sampled framebuffer");
              CC._MSAAFramebuffer = bC, this._bindUnboundFramebuffer(bC);
              const nC = [];
              for (let ZC = 0; ZC < wC; ZC++) {
                const wC = CC.textures[ZC],
                  bC = wC._hardwareTexture,
                  fC = QC[this.fS > 1 ? "COLOR_ATTACHMENT" + ZC : "COLOR_ATTACHMENT" + ZC + "_WEBGL"],
                  oC = this._createRenderBuffer(wC.width, wC.height, zC, -1, this._getRGBABufferInternalSizedFormat(wC.type, wC.format, wC._useSRGBBuffer), fC);
                if (!oC) throw new Error("Unable to create multi sampled framebuffer");
                bC.addMSAARenderBuffer(oC), wC.samples = zC, nC.push(fC)
              }
              ZC && QC.drawBuffers(nC)
            } else this._bindUnboundFramebuffer(CC._framebuffer);
            const bC = CC._depthStencilTexture ? CC._depthStencilTexture.format : void 0;
            return CC._depthStencilBuffer = this._setupFramebufferDepthAttachments(CC._generateStencilBuffer, CC._generateDepthBuffer, CC.width, CC.height, zC, bC), this._bindUnboundFramebuffer(null), CC._samples = zC, zC
          }, hz.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(CC) {
            const zC = CC,
              ZC = this._gl;
            if (zC.isMulti)
              for (let QC = 0; QC < zC._attachments.length; QC++) {
                const CC = zC.textures[QC];
                !CC?.generateMipMaps || CC?.isCube || CC?.is3D || (this._bindTextureDirectly(ZC.TEXTURE_2D, CC, !0), ZC.generateMipmap(ZC.TEXTURE_2D), this._bindTextureDirectly(ZC.TEXTURE_2D, null))
              }
          }, hz.ThinEngine.prototype.resolveMultiFramebuffer = function(CC) {
            const zC = CC,
              ZC = this._gl;
            if (!zC._MSAAFramebuffer || !zC.isMulti) return;
            let QC = zC.resolveMSAAColors ? ZC.COLOR_BUFFER_BIT : 0;
            QC |= zC._generateDepthBuffer && zC.resolveMSAADepth ? ZC.DEPTH_BUFFER_BIT : 0, QC |= zC._generateStencilBuffer && zC.resolveMSAAStencil ? ZC.STENCIL_BUFFER_BIT : 0;
            const wC = zC._attachments,
              bC = wC.length;
            ZC.bindFramebuffer(ZC.READ_FRAMEBUFFER, zC._MSAAFramebuffer), ZC.bindFramebuffer(ZC.DRAW_FRAMEBUFFER, zC._framebuffer);
            for (let nC = 0; nC < bC; nC++) {
              const CC = zC.textures[nC];
              for (let zC = 0; zC < bC; zC++) wC[zC] = ZC.NONE;
              wC[nC] = ZC[this.fS > 1 ? "COLOR_ATTACHMENT" + nC : "COLOR_ATTACHMENT" + nC + "_WEBGL"], ZC.readBuffer(wC[nC]), ZC.drawBuffers(wC), ZC.blitFramebuffer(0, 0, CC.width, CC.height, 0, 0, CC.width, CC.height, QC, ZC.NEAREST)
            }
            for (let nC = 0; nC < bC; nC++) wC[nC] = ZC[this.fS > 1 ? "COLOR_ATTACHMENT" + nC : "COLOR_ATTACHMENT" + nC + "_WEBGL"];
            ZC.drawBuffers(wC), ZC.bindFramebuffer(this._gl.FRAMEBUFFER, zC._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = bC;
        const WC = [],
          NC = [],
          MC = [],
          gC = [],
          SC = [],
          pC = [],
          PC = [],
          GC = [];
        this._initTypes(ZC, WC, NC, MC, gC, SC, pC, PC, GC, wC);
        const RC = !wC || void 0 === wC.generateDepthBuffer || wC.generateDepthBuffer,
          AC = !(!wC || void 0 === wC.generateStencilBuffer) && wC.generateStencilBuffer,
          xC = wC && wC.samples ? wC.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: NC,
          generateMipMaps: nC,
          generateDepthBuffer: RC,
          generateStencilBuffer: AC,
          generateDepthTexture: fC,
          depthTextureFormat: oC,
          types: WC,
          KnC: ZC,
          useSRGBBuffers: MC,
          samples: xC,
          formats: gC,
          targetTypes: SC,
          faceIndex: pC,
          layerIndex: PC,
          layerCounts: GC,
          labels: bC,
          label: CC
        }, this._count = ZC, this._drawOnlyOnFirstAttachmentByDefault = FC, ZC > 0 && (this._createInternalTextures(), this._createTextures(bC))
      }
      _initTypes(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
        for (let FC = 0; FC < CC; FC++) qC && qC.types && void 0 !== qC.types[FC] ? zC.push(qC.types[FC]) : zC.push(qC && qC.defaultType ? qC.defaultType : 0), qC && qC.samplingModes && void 0 !== qC.samplingModes[FC] ? ZC.push(qC.samplingModes[FC]) : ZC.push(YC.h.BILINEAR_SAMPLINGMODE), qC && qC.useSRGBBuffers && void 0 !== qC.useSRGBBuffers[FC] ? QC.push(qC.useSRGBBuffers[FC]) : QC.push(!1), qC && qC.formats && void 0 !== qC.formats[FC] ? wC.push(qC.formats[FC]) : wC.push(5), qC && qC.targetTypes && void 0 !== qC.targetTypes[FC] ? bC.push(qC.targetTypes[FC]) : bC.push(3553), qC && qC.faceIndex && void 0 !== qC.faceIndex[FC] ? nC.push(qC.faceIndex[FC]) : nC.push(0), qC && qC.layerIndex && void 0 !== qC.layerIndex[FC] ? fC.push(qC.layerIndex[FC]) : fC.push(0), qC && qC.layerCounts && void 0 !== qC.layerCounts[FC] ? oC.push(qC.layerCounts[FC]) : oC.push(1)
      }
      _createInternaTextureIndexMapping() {
        const CC = {},
          zC = [];
        if (!this._renderTarget) return zC;
        const ZC = this._renderTarget.textures;
        for (let QC = 0; QC < ZC.length; QC++) {
          const wC = ZC[QC];
          if (!wC) continue;
          const bC = CC[wC.uniqueId];
          void 0 !== bC ? zC[QC] = bC : CC[wC.uniqueId] = QC
        }
        return zC
      }
      _rebuild() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || CC) return;
        const QC = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), zC && (this._releaseTextures(), this._createTextures(ZC));
        const wC = this._renderTarget.textures;
        for (let bC = 0; bC < wC.length; bC++) {
          const CC = this._textures[bC];
          void 0 !== QC[bC] && this._renderTarget.setTexture(wC[QC[bC]], bC), CC._texture = wC[bC], CC._texture && (CC._noMipmap = !CC._texture.useMipMaps, CC._useSRGBBuffer = CC._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let CC = 0; CC < this._textures.length; CC++) this._textures[CC]._texture = null, this._textures[CC].dispose()
      }
      _createTextures(CC) {
        const zC = this._renderTarget.textures;
        this._textures = [];
        for (let ZC = 0; ZC < zC.length; ZC++) {
          const QC = new YC.h(null, this.Km());
          CC?.[ZC] && (QC.name = CC[ZC]), QC._texture = zC[ZC], QC._texture && (QC._noMipmap = !QC._texture.useMipMaps, QC._useSRGBBuffer = QC._texture._useSRGBBuffer), this._textures.push(QC)
        }
      }
      setInternalTexture(CC, zC) {
        let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === zC && (this._texture = CC), this.renderTarget.setTexture(CC, zC, ZC), this.textures[zC] || (this.textures[zC] = new YC.h(null, this.Km()), this.textures[zC].name = this._textureNames?.[zC] ?? this.textures[zC].name), this.textures[zC]._texture = CC, this.textures[zC]._noMipmap = !CC.useMipMaps, this.textures[zC]._useSRGBBuffer = CC._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[zC] = CC.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[zC] = CC.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[zC] = CC._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[zC])) {
          let ZC;
          ZC = CC.is2DArray ? 35866 : CC.isCube ? 34067 : CC.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[zC] = ZC
        }
      }
      setLayerAndFaceIndex(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[CC] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[CC] = zC), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[CC] = ZC), this.renderTarget.setLayerAndFaceIndex(CC, zC, ZC))
      }
      setLayerAndFaceIndices(CC, zC) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = CC, this._multiRenderTargetOptions.faceIndex = zC, this.renderTarget.setLayerAndFaceIndices(CC, zC))
      }
      get samples() {
        return this._samples
      }
      set samples(CC) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(CC) : this._samples = CC
      }
      resize(CC) {
        this._processSizeParameter(CC), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(CC, zC, ZC) {
        this._multiRenderTargetOptions.KnC = CC, this._count = CC;
        const QC = [],
          wC = [],
          bC = [],
          nC = [],
          fC = [],
          oC = [],
          qC = [],
          FC = [];
        this._textureNames = ZC, this._initTypes(CC, QC, wC, bC, nC, fC, oC, qC, FC, zC), this._multiRenderTargetOptions.types = QC, this._multiRenderTargetOptions.samplingModes = wC, this._multiRenderTargetOptions.useSRGBBuffers = bC, this._multiRenderTargetOptions.formats = nC, this._multiRenderTargetOptions.targetTypes = fC, this._multiRenderTargetOptions.faceIndex = oC, this._multiRenderTargetOptions.layerIndex = qC, this._multiRenderTargetOptions.layerCounts = FC, this._multiRenderTargetOptions.labels = ZC, this._rebuild(!1, !0, ZC)
      }
      _unbindFrameBuffer(CC, zC) {
        this._renderTarget && CC.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(zC)
        }))
      }
      dispose() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), CC ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const CC = this._renderTarget?.textures;
        if (CC) {
          for (let zC = CC.length - 1; zC >= 0; zC--) this._textures[zC]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var Ez = ZC(39990);
    class lz {
      constructor(CC) {
        this.name = Ez.b.NAME_GEOMETRYBUFFERRENDERER, this.sS = CC
      }
      register() {
        this.sS._gatherRenderTargetsStage.registerStep(Ez.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(CC) {
        this.sS._geometryBufferRenderer && CC.push(this.sS._geometryBufferRenderer.getGBuffer())
      }
    }
    let Xz = !1;
    var cz;
    ! function(CC) {
      CC[CC.Small = 0] = "Small", CC[CC.Medium = 1] = "Medium", CC[CC.Large = 2] = "Large", CC[CC.ExtraLarge = 3] = "ExtraLarge"
    }(cz || (cz = {}));
    const uz = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      rz = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class sz {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(CC) {
        if (CC && this._enableMeshBlendTag && !this._scene.mg().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = CC
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(CC) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = CC, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(CC, zC) {
        CC === sz.POSITION_TEXTURE_TYPE ? (this._positionIndex = zC, this._enablePosition = !0) : CC === sz.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = zC, this._enableVelocity = !0) : CC === sz.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = zC, this._enableVelocityLinear = !0) : CC === sz.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = zC, this._enableReflectivity = !0) : CC === sz.DEPTH_TEXTURE_TYPE ? (this._depthIndex = zC, this._enableDepth = !0) : CC === sz.NORMAL_TEXTURE_TYPE ? (this._normalIndex = zC, this._enableNormal = !0) : CC === sz.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = zC, this._enableScreenspaceDepth = !0) : CC === sz.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = zC, this._enableIrradiance = !0) : CC === sz.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = zC, this._enableObjectId = !0) : CC === sz.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = zC, this._enableMeshBlendTag = !0)
      }
      _setAttachments(CC) {
        this._attachmentsFromPrePass = CC
      }
      _linkInternalTexture(CC) {
        this._multiRenderTarget.setInternalTexture(CC, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(CC) {
        this._multiRenderTarget.renderList = CC
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(CC) {
        switch (CC) {
          case sz.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case sz.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case sz.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case sz.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case sz.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case sz.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case sz.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case sz.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case sz.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case sz.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(CC) {
        this._enableDepth = CC, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(CC) {
        this._enableNormal = CC, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(CC) {
        this._enablePosition = CC, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(CC) {
        this._enableVelocity = CC, CC || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = CC
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(CC) {
        this._enableVelocityLinear = CC, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(CC) {
        this._enableReflectivity = CC, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(CC) {
        this._enableScreenspaceDepth = CC, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(CC) {
        this._enableIrradiance = CC, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(CC) {
        if (CC && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (CC && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (CC && !this._enableObjectId && !this._linkedWithPrePass) {
          const CC = this._scene.mg(),
            zC = Math.min(CC.getCaps().maxDrawBuffers ?? 1, 8),
            ZC = this._assignRenderTargetIndices()[0] + 1;
          if (CC.getCaps().drawBuffersExtension && ZC > zC) throw new Error(`GeometryBufferRenderer: ${ZC} color attachments were requested, but this engine supports at most ${zC}`)
        }
        this._enableObjectId = CC, CC || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(CC) {
        if (this._enableMeshBlendTag !== CC) {
          if (CC) {
            const CC = this._scene.mg();
            if (! function(CC) {
                return "NATIVE" !== CC.shaderPlatformName && (CC.isWebGPU || 2 === CC.fS)
              }(CC)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !CC.isWebGPU && !CC.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const zC = Math.min(CC.getCaps().maxDrawBuffers ?? 1, 8),
                ZC = this._assignRenderTargetIndices()[0] + 1;
              if (CC.getCaps().drawBuffersExtension && ZC > zC) throw new Error(`GeometryBufferRenderer: ${ZC} color attachments were requested, but this engine supports at most ${zC}`)
            }
          }
          this._enableMeshBlendTag = CC, CC || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get sS() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          QC = arguments.length > 3 ? arguments[3] : void 0;
        var wC;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new jC.g(0, 0, 0, 0), this._clearDepthColor = new jC.g(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = CC, this._ratioOrDimensions = zC, this._useUbo = CC.mg().supportsUniformBuffers, this._depthFormat = ZC, this._textureTypesAndFormats = QC || {}, this._initShaderSourceAsync(), wC = sz, Xz || (Xz = !0, Object.defineProperty(cC.g.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(CC) {
            CC && CC.isSupported && (this._geometryBufferRenderer = CC)
          },
          enumerable: !0,
          configurable: !0
        }), cC.g.prototype.enableGeometryBufferRenderer = function() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            ZC = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new wC(this, CC, zC, ZC), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, cC.g.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, wC._SceneComponentInitialization = CC => {
          let zC = CC._getComponent(Ez.b.NAME_GEOMETRYBUFFERRENDERER);
          zC || (zC = new lz(CC), CC.sZC(zC))
        }), sz._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.mg().isWebGPU && !sz.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([ZC.e(337).then((() => ZC(61493))), Promise.all([ZC.e(336), ZC.e(348)]).then((() => ZC(61495)))])) : await Promise.all([ZC.e(320).then((() => ZC(61503))), ZC.e(319).then((() => ZC(61505)))]), this._shadersLoaded = !0
      }
      isReady(CC, zC) {
        if (!this._shadersLoaded) return !1;
        const ZC = CC.cg();
        if (ZC && ZC.disableDepthWrite) return !1;
        if (function(CC) {
            return CC._isGaussianSplatting || "GaussianSplattingMesh" === (zC = CC.getClassName()) || "GaussianSplattingStream" === zC;
            var zC
          }(CC.getMesh())) return !1;
        const QC = [],
          wC = [rC.k.PositionKind],
          bC = CC.getMesh();
        bC.isVerticesDataPresent(rC.k.NormalKind) && (QC.push("#define HAS_NORMAL_ATTRIBUTE"), wC.push(rC.k.NormalKind));
        let nC = !1,
          fC = !1;
        if (ZC) {
          let CC = !1;
          if (ZC.needAlphaTestingForMesh(bC) && ZC.getAlphaTestTexture() && (QC.push("#define ALPHATEST"), QC.push(`#define ALPHATEST_UV${ZC.getAlphaTestTexture().coordinatesIndex+1}`), CC = !0), (ZC.bumpTexture || ZC.normalTexture || ZC.geometryNormalTexture) && BC.b.BumpTextureEnabled) {
            const zC = ZC.bumpTexture || ZC.normalTexture || ZC.geometryNormalTexture;
            QC.push("#define BUMP"), QC.push(`#define BUMP_UV${zC.coordinatesIndex+1}`), CC = !0
          }
          if (this._enableReflectivity) {
            let zC = !1;
            if ("PBRMetallicRoughnessMaterial" === ZC.getClassName()) ZC.metallicRoughnessTexture && (QC.push("#define ORMTEXTURE"), QC.push(`#define REFLECTIVITY_UV${ZC.metallicRoughnessTexture.coordinatesIndex+1}`), QC.push("#define METALLICWORKFLOW"), CC = !0, zC = !0), null != ZC.metallic && (QC.push("#define METALLIC"), QC.push("#define METALLICWORKFLOW"), zC = !0), null != ZC.roughness && (QC.push("#define ROUGHNESS"), QC.push("#define METALLICWORKFLOW"), zC = !0), zC && (ZC.baseTexture && (QC.push("#define ALBEDOTEXTURE"), QC.push(`#define ALBEDO_UV${ZC.baseTexture.coordinatesIndex+1}`), ZC.baseTexture.gammaSpace && QC.push("#define GAMMAALBEDO"), CC = !0), ZC.baseColor && QC.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === ZC.getClassName()) ZC.specularGlossinessTexture ? (QC.push("#define SPECULARGLOSSINESSTEXTURE"), QC.push(`#define REFLECTIVITY_UV${ZC.specularGlossinessTexture.coordinatesIndex+1}`), CC = !0, ZC.specularGlossinessTexture.gammaSpace && QC.push("#define GAMMAREFLECTIVITYTEXTURE")) : ZC.specularColor && QC.push("#define REFLECTIVITYCOLOR"), null != ZC.glossiness && QC.push("#define GLOSSINESS");
            else if ("PBRMaterial" === ZC.getClassName()) ZC.metallicTexture && (QC.push("#define ORMTEXTURE"), QC.push(`#define REFLECTIVITY_UV${ZC.metallicTexture.coordinatesIndex+1}`), QC.push("#define METALLICWORKFLOW"), CC = !0, zC = !0), null != ZC.metallic && (QC.push("#define METALLIC"), QC.push("#define METALLICWORKFLOW"), zC = !0), null != ZC.roughness && (QC.push("#define ROUGHNESS"), QC.push("#define METALLICWORKFLOW"), zC = !0), zC ? (ZC.albedoTexture && (QC.push("#define ALBEDOTEXTURE"), QC.push(`#define ALBEDO_UV${ZC.albedoTexture.coordinatesIndex+1}`), ZC.albedoTexture.gammaSpace && QC.push("#define GAMMAALBEDO"), CC = !0), ZC.albedoColor && QC.push("#define ALBEDOCOLOR")) : (ZC.reflectivityTexture ? (QC.push("#define SPECULARGLOSSINESSTEXTURE"), QC.push(`#define REFLECTIVITY_UV${ZC.reflectivityTexture.coordinatesIndex+1}`), ZC.reflectivityTexture.gammaSpace && QC.push("#define GAMMAREFLECTIVITYTEXTURE"), CC = !0) : ZC.reflectivityColor && QC.push("#define REFLECTIVITYCOLOR"), null != ZC.microSurface && QC.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === ZC.getClassName()) ZC.specularTexture && (QC.push("#define REFLECTIVITYTEXTURE"), QC.push(`#define REFLECTIVITY_UV${ZC.specularTexture.coordinatesIndex+1}`), ZC.specularTexture.gammaSpace && QC.push("#define GAMMAREFLECTIVITYTEXTURE"), CC = !0), ZC.specularColor && QC.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === ZC.getClassName()) {
              const zC = ZC;
              QC.push("#define METALLIC"), QC.push("#define ROUGHNESS"), zC._useRoughnessFromMetallicTextureGreen && zC.baseMetalnessTexture ? (QC.push("#define ORMTEXTURE"), QC.push(`#define REFLECTIVITY_UV${zC.baseMetalnessTexture.coordinatesIndex+1}`), CC = !0) : zC.baseMetalnessTexture ? (QC.push("#define METALLIC_TEXTURE"), QC.push(`#define METALLIC_UV${zC.baseMetalnessTexture.coordinatesIndex+1}`), CC = !0) : zC.specularRoughnessTexture && (QC.push("#define ROUGHNESS_TEXTURE"), QC.push(`#define ROUGHNESS_UV${zC.specularRoughnessTexture.coordinatesIndex+1}`), CC = !0), zC.baseColorTexture && (QC.push("#define ALBEDOTEXTURE"), QC.push(`#define ALBEDO_UV${zC.baseColorTexture.coordinatesIndex+1}`), zC.baseColorTexture.gammaSpace && QC.push("#define GAMMAALBEDO"), CC = !0), zC.baseColor && QC.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (QC.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === ZC.getClassName())) {
            const zC = ZC;
            zC.subsurfaceWeight > 0 && zC.subsurfaceWeightTexture && (QC.push("#define SUBSURFACE_WEIGHT"), QC.push(`#define SUBSURFACEWEIGHT_UV${zC.subsurfaceWeightTexture.coordinatesIndex+1}`), CC = !0), zC.transmissionWeight > 0 && zC.transmissionWeightTexture && (QC.push("#define TRANSMISSION_WEIGHT"), QC.push(`#define TRANSMISSIONWEIGHT_UV${zC.transmissionWeightTexture.coordinatesIndex+1}`), CC = !0)
          }
          CC && (QC.push("#define NEED_UV"), bC.isVerticesDataPresent(rC.k.UVKind) && (wC.push(rC.k.UVKind), QC.push("#define UV1"), nC = !0), bC.isVerticesDataPresent(rC.k.UV2Kind) && (wC.push(rC.k.UV2Kind), QC.push("#define UV2"), fC = !0))
        }
        if (this._enableDepth && (QC.push("#define DEPTH"), QC.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (QC.push("#define NORMAL"), QC.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (QC.push("#define POSITION"), QC.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (QC.push("#define VELOCITY"), QC.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(bC) && QC.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (QC.push("#define VELOCITY_LINEAR"), QC.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(bC) && QC.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (QC.push("#define REFLECTIVITY"), QC.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (QC.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), QC.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          QC.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), QC.push("#define IRRADIANCE");
          const CC = this._scene;
          if (CC.environmentTexture) {
            const zC = {};
            let wC = !1,
              bC = 0;
            "OpenPBRMaterial" !== ZC.getClassName() && "StandardMaterial" !== ZC.getClassName() && "PBRMetallicRoughnessMaterial" !== ZC.getClassName() && "PBRSpecularGlossinessMaterial" !== ZC.getClassName() && "PBRMaterial" !== ZC.getClassName() || (wC = !!ZC.realtimeFiltering, bC = ZC.realtimeFilteringQuality || 0), (0, kC.ab)(CC, CC.environmentTexture, zC, wC, bC, !0);
            for (const CC in zC) zC[CC] && QC.push("#define " + CC);
            zC.USEIRRADIANCEMAP || QC.push("#define SPHERICAL_HARMONICS");
            const nC = CC.postProcessRenderPipelineManager.supportedPipelines.find((CC => "IBLShadowsRenderPipeline" === CC.getClassName()));
            if (nC) {
              const CC = nC;
              CC._getAccumulatedTexture() && (QC.push("#define IBL_SHADOW_TEXTURE"), CC.coloredShadows && QC.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (QC.push("#define OBJECT_ID"), QC.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (QC.push("#define MESH_BLEND_TAG"), QC.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && QC.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && QC.push("#define ENCODE_NORMAL"), bC.useBones && bC.computeBonesUsingShaders && bC.skeleton ? (wC.push(rC.k.MatricesIndicesKind), wC.push(rC.k.MatricesWeightsKind), bC.numBoneInfluencers > 4 && (wC.push(rC.k.MatricesIndicesExtraKind), wC.push(rC.k.MatricesWeightsExtraKind)), QC.push("#define NUM_BONE_INFLUENCERS " + bC.numBoneInfluencers), QC.push("#define BONETEXTURE " + bC.skeleton.isUsingTextureForMatrices), QC.push("#define BonesPerMesh " + (bC.skeleton.bones.length + 1))) : (QC.push("#define NUM_BONE_INFLUENCERS 0"), QC.push("#define BONETEXTURE false"), QC.push("#define BonesPerMesh 0"));
        const oC = bC.morphTargetManager ? (0, kC.T)(bC.morphTargetManager, QC, wC, bC, !0, !0, !1, nC, fC, !1) : 0;
        zC && (QC.push("#define INSTANCES"), (0, kC.Ab)(wC, this._enableVelocity || this._enableVelocityLinear), CC.getRenderingMesh().hasThinInstances && QC.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? QC.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : QC.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, Fz.l)(ZC, this._scene, QC);
        const qC = this._scene.mg(),
          FC = CC._getDrawWrapper(void 0, !0),
          WC = FC.defines,
          NC = QC.join("\n");
        return WC !== NC && FC.setEffect(qC.createEffect("geometry", {
          attributes: wC,
          uniformsNames: rz,
          samplers: uz,
          defines: NC,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: oC
          },
          shaderLanguage: this.shaderLanguage
        }, qC), NC), FC.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(CC) {
        if (this._enableObjectId && 1 !== CC) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== CC) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = CC
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.mg().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.sS.mg()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.sS.mg().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const CC = [],
          zC = [];
        let ZC = 0;
        return this._enableDepth && (this._depthIndex = ZC, ZC++, CC.push("gBuffer_Depth"), zC.push(this._textureTypesAndFormats[sz.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = ZC, ZC++, CC.push("gBuffer_Normal"), zC.push(this._textureTypesAndFormats[sz.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = ZC, ZC++, CC.push("gBuffer_Position"), zC.push(this._textureTypesAndFormats[sz.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = ZC, ZC++, CC.push("gBuffer_Velocity"), zC.push(this._textureTypesAndFormats[sz.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = ZC, ZC++, CC.push("gBuffer_VelocityLinear"), zC.push(this._textureTypesAndFormats[sz.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = ZC, ZC++, CC.push("gBuffer_Reflectivity"), zC.push(this._textureTypesAndFormats[sz.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = ZC, ZC++, CC.push("gBuffer_ScreenspaceDepth"), zC.push(this._textureTypesAndFormats[sz.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = ZC, ZC++, CC.push("gBuffer_Irradiance"), zC.push(this._textureTypesAndFormats[sz.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = ZC, ZC++, CC.push("gBuffer_ObjectId"), zC.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = ZC, ZC++, CC.push("gBuffer_MeshBlendTag"), zC.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [ZC, CC, zC]
      }
      _createRenderTargets() {
        const CC = this._scene.mg(),
          [zC, ZC, QC] = this._assignRenderTargetIndices(),
          wC = Math.min(CC.getCaps().maxDrawBuffers ?? 1, 8);
        if (CC.getCaps().drawBuffersExtension && zC > wC) throw new Error(`GeometryBufferRenderer: ${zC} color attachments were requested, but this engine supports at most ${wC}`);
        let nC = 0;
        CC._caps.textureFloat && CC._caps.textureFloatLinearFiltering ? nC = 1 : CC._caps.textureHalfFloat && CC._caps.textureHalfFloatLinearFiltering && (nC = 2);
        const fC = this._getRenderTargetDimensions(),
          oC = [],
          qC = [],
          FC = [];
        for (const bC of QC) bC ? (oC.push(bC.textureType), qC.push(bC.textureFormat), FC.push(bC.samplingMode ?? 2)) : (oC.push(nC), qC.push(5), FC.push(2));
        if (this._normalsAreUnsigned = 11 === oC[sz.NORMAL_TEXTURE_TYPE] || 13 === oC[sz.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new Hz("gBuffer", fC, zC, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: oC,
            formats: qC,
            samplingModes: FC,
            depthTextureFormat: this._depthFormat
          }, ZC.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = YC.h.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = YC.h.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const WC = [!0],
          NC = [!1],
          MC = [!0];
        for (let bC = 1; bC < zC; ++bC) WC.push(!0), MC.push(!1), NC.push(!0);
        const gC = CC.buildTextureLayout(WC),
          SC = CC.buildTextureLayout(NC),
          pC = CC.buildTextureLayout(MC);
        this._multiRenderTarget.onClearObservable.add((CC => {
          const zC = this.useSpecificClearForDepthTexture ? SC : gC;
          CC.clearAttachments(this._clearColor, zC, !0, !0, !0), this.useSpecificClearForDepthTexture && CC.clearAttachments(this._clearDepthColor, pC, !0, !1, !1), CC.bindAttachments(gC)
        })), this._resizeObserver = CC.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const PC = CC => {
          const zC = CC.getRenderingMesh(),
            ZC = CC.getEffectiveMesh(),
            QC = this._scene,
            wC = QC.mg(),
            nC = CC.cg();
          if (!nC) return;
          if (ZC._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[ZC.uniqueId] && (this._previousTransformationMatrices[ZC.uniqueId] = {
              fN: uC.b.Identity(),
              viewProjection: QC.getTransformMatrix()
            }, zC.skeleton)) {
            const CC = zC.skeleton.getTransformMatrices(zC);
            this._previousBonesTransformationMatrices[zC.uniqueId] = this._copyBonesTransformationMatrices(CC, new Float32Array(CC.length))
          }
          const fC = zC._getInstancesRenderList(CC._id, !!CC.getReplacementMesh());
          if (fC.mustReturn) return;
          const oC = wC.getCaps().instancedArrays && (null !== fC.visibleInstances[CC._id] || zC.hasThinInstances),
            qC = ZC.getWorldMatrix();
          if (this.isReady(CC, oC)) {
            const FC = CC._getDrawWrapper();
            if (!FC) return;
            const WC = FC.effect;
            let NC;
            wC.enableEffect(FC), oC || zC._bind(CC, WC, nC.fillMode), this._useUbo ? ((0, kC.x)(WC, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (WC.setMatrix("viewProjection", QC.getTransformMatrix()), WC.setMatrix("view", QC.getViewMatrix()), this._scene.bindEyePosition(WC, "vEyePosition"));
            if (zC._instanceDataStorage.isFrozen || !nC.backFaceCulling && null === nC.sideOrientation) NC = zC._effectiveSideOrientation;
            else {
              const CC = ZC._getWorldMatrixDeterminant();
              NC = nC._getEffectiveOrientation(zC), CC < 0 && (NC = NC === bC.d.ClockWiseSideOrientation ? bC.d.CounterClockWiseSideOrientation : bC.d.ClockWiseSideOrientation)
            }
            if (nC._preBind(FC, NC), nC.needAlphaTestingForMesh(ZC)) {
              const CC = nC.getAlphaTestTexture();
              CC && (WC.setTexture("diffuseSampler", CC), WC.setMatrix("diffuseMatrix", CC.getTextureMatrix()), WC.setFloat("alphaCutOff", nC.alphaCutOff ?? .4))
            }
            if ((nC.bumpTexture || nC.normalTexture || nC.geometryNormalTexture) && QC.mg().getCaps().standardDerivatives && BC.b.BumpTextureEnabled) {
              const CC = nC.bumpTexture || nC.normalTexture || nC.geometryNormalTexture;
              WC.setFloat3("vBumpInfos", CC.coordinatesIndex, 1 / CC.level, nC.parallaxScaleBias), WC.setMatrix("bumpMatrix", CC.getTextureMatrix()), WC.setTexture("bumpSampler", CC), WC.setFloat2("vTangentSpaceParams", nC.invertNormalMapX ? -1 : 1, nC.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === nC.getClassName()) null !== nC.metallicRoughnessTexture && (WC.setTexture("reflectivitySampler", nC.metallicRoughnessTexture), WC.setMatrix("reflectivityMatrix", nC.metallicRoughnessTexture.getTextureMatrix())), null !== nC.metallic && WC.setFloat("metallic", nC.metallic), null !== nC.roughness && WC.setFloat("glossiness", 1 - nC.roughness), null !== nC.baseTexture && (WC.setTexture("albedoSampler", nC.baseTexture), WC.setMatrix("albedoMatrix", nC.baseTexture.getTextureMatrix())), null !== nC.baseColor && WC.setColor3("albedoColor", nC.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === nC.getClassName()) null !== nC.specularGlossinessTexture ? (WC.setTexture("reflectivitySampler", nC.specularGlossinessTexture), WC.setMatrix("reflectivityMatrix", nC.specularGlossinessTexture.getTextureMatrix())) : null !== nC.specularColor && WC.setColor3("reflectivityColor", nC.specularColor), null !== nC.glossiness && WC.setFloat("glossiness", nC.glossiness);
            else if ("PBRMaterial" === nC.getClassName()) null !== nC.metallicTexture && (WC.setTexture("reflectivitySampler", nC.metallicTexture), WC.setMatrix("reflectivityMatrix", nC.metallicTexture.getTextureMatrix())), null !== nC.metallic && WC.setFloat("metallic", nC.metallic), null !== nC.roughness && WC.setFloat("glossiness", 1 - nC.roughness), null !== nC.roughness || null !== nC.metallic || null !== nC.metallicTexture ? (null !== nC.albedoTexture && (WC.setTexture("albedoSampler", nC.albedoTexture), WC.setMatrix("albedoMatrix", nC.albedoTexture.getTextureMatrix())), null !== nC.albedoColor && WC.setColor3("albedoColor", nC.albedoColor)) : (null !== nC.reflectivityTexture ? (WC.setTexture("reflectivitySampler", nC.reflectivityTexture), WC.setMatrix("reflectivityMatrix", nC.reflectivityTexture.getTextureMatrix())) : null !== nC.reflectivityColor && WC.setColor3("reflectivityColor", nC.reflectivityColor), null !== nC.microSurface && WC.setFloat("glossiness", nC.microSurface));
            else if ("StandardMaterial" === nC.getClassName()) null !== nC.specularTexture && (WC.setTexture("reflectivitySampler", nC.specularTexture), WC.setMatrix("reflectivityMatrix", nC.specularTexture.getTextureMatrix())), null !== nC.specularColor && WC.setColor3("reflectivityColor", nC.specularColor);
            else if ("OpenPBRMaterial" === nC.getClassName()) {
              const CC = nC;
              CC._useRoughnessFromMetallicTextureGreen && CC.baseMetalnessTexture ? (WC.setTexture("reflectivitySampler", CC.baseMetalnessTexture), WC.setMatrix("reflectivityMatrix", CC.baseMetalnessTexture.getTextureMatrix())) : CC.baseMetalnessTexture ? (WC.setTexture("metallicSampler", CC.baseMetalnessTexture), WC.setMatrix("metallicMatrix", CC.baseMetalnessTexture.getTextureMatrix())) : CC.specularRoughnessTexture && (WC.setTexture("roughnessSampler", CC.specularRoughnessTexture), WC.setMatrix("roughnessMatrix", CC.specularRoughnessTexture.getTextureMatrix())), WC.setFloat("metallic", CC.baseMetalness), WC.setFloat("glossiness", 1 - CC.specularRoughness), null !== CC.baseColorTexture && (WC.setTexture("albedoSampler", CC.baseColorTexture), WC.setMatrix("albedoMatrix", CC.baseColorTexture.getTextureMatrix())), null !== CC.baseColor && WC.setColor3("albedoColor", CC.baseColor)
            }
            if (this._enableIrradiance && QC.environmentTexture) {
              const CC = QC.environmentTexture,
                zC = QC.postProcessRenderPipelineManager.supportedPipelines.find((CC => "IBLShadowsRenderPipeline" === CC.getClassName()));
              if (zC) {
                const CC = zC._getAccumulatedTexture();
                CC && (WC.setTexture("iblShadowSampler", CC), WC.setFloat2("shadowTextureSize", CC.getSize().width, CC.getSize().height))
              }
              if (WC.setMatrix("reflectionMatrix", CC.getReflectionTextureMatrix()), WC.setFloat2("vReflectionInfos", CC.level * QC.iblIntensity, 0), WC.setTexture("reflectionSampler", CC), CC.irradianceTexture && (WC.setTexture("irradianceSampler", CC.irradianceTexture), CC.irradianceTexture._dominantDirection && WC.setVector3("vReflectionDominantDirection", CC.irradianceTexture._dominantDirection)), CC.sphericalPolynomial) {
                const zC = CC.sphericalPolynomial;
                if (zC.preScaledHarmonics) {
                  const CC = zC.preScaledHarmonics;
                  WC.setVector3("vSphericalL00", CC.l00), WC.setVector3("vSphericalL1_1", CC.l1_1), WC.setVector3("vSphericalL10", CC.l10), WC.setVector3("vSphericalL11", CC.l11), WC.setVector3("vSphericalL2_2", CC.l2_2), WC.setVector3("vSphericalL2_1", CC.l2_1), WC.setVector3("vSphericalL20", CC.l20), WC.setVector3("vSphericalL21", CC.l21), WC.setVector3("vSphericalL22", CC.l22)
                } else WC.setFloat3("vSphericalX", zC.x.x, zC.x.y, zC.x.z), WC.setFloat3("vSphericalY", zC.y.x, zC.y.y, zC.y.z), WC.setFloat3("vSphericalZ", zC.z.x, zC.z.y, zC.z.z), WC.setFloat3("vSphericalXX_ZZ", zC.xx.x - zC.zz.x, zC.xx.y - zC.zz.y, zC.xx.z - zC.zz.z), WC.setFloat3("vSphericalYY_ZZ", zC.yy.x - zC.zz.x, zC.yy.y - zC.zz.y, zC.yy.z - zC.zz.z), WC.setFloat3("vSphericalZZ", zC.zz.x, zC.zz.y, zC.zz.z), WC.setFloat3("vSphericalXY", zC.xy.x, zC.xy.y, zC.xy.z), WC.setFloat3("vSphericalYZ", zC.yz.x, zC.yz.y, zC.yz.z), WC.setFloat3("vSphericalZX", zC.zx.x, zC.zx.y, zC.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === nC.getClassName()) {
                const CC = nC;
                WC.setFloat("vSubsurfaceWeight", CC.subsurfaceWeight), CC.subsurfaceWeightTexture && (WC.setTexture("subsurfaceWeightSampler", CC.subsurfaceWeightTexture), WC.setMatrix("subsurfaceWeightMatrix", CC.subsurfaceWeightTexture.getTextureMatrix())), WC.setFloat("vTransmissionWeight", CC.transmissionWeight), CC.transmissionWeightTexture && (WC.setTexture("transmissionWeightSampler", CC.transmissionWeightTexture), WC.setMatrix("transmissionWeightMatrix", CC.transmissionWeightTexture.getTextureMatrix())), WC.setFloat("vTransmissionScatterAnisotropy", CC.transmissionScatterAnisotropy), WC.setFloat("vSubsurfaceScatterAnisotropy", CC.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, Fz.g)(WC, nC, this._scene), zC.useBones && zC.computeBonesUsingShaders && zC.skeleton) {
              const CC = zC.skeleton;
              if (CC.isUsingTextureForMatrices && WC.getUniformIndex("boneTextureInfo") > -1) {
                const ZC = CC.getTransformMatrixTexture(zC);
                WC.setTexture("boneSampler", ZC), WC.setFloat2("boneTextureInfo", CC._textureWidth, CC._textureHeight)
              } else WC.setMatrices("mBones", zC.skeleton.getTransformMatrices(zC));
              (this._enableVelocity || this._enableVelocityLinear) && WC.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[zC.uniqueId])
            }
            if ((0, kC.u)(zC, WC), zC.morphTargetManager && zC.morphTargetManager.isUsingTextureForTargets && zC.morphTargetManager._bind(WC), (this._enableVelocity || this._enableVelocityLinear) && (WC.setMatrix("previousWorld", this._previousTransformationMatrices[ZC.uniqueId].fN), WC.setMatrix("previousViewProjection", this._previousTransformationMatrices[ZC.uniqueId].viewProjection)), this._enableObjectId) {
              let CC = zC.uniqueId;
              if (this.objectIdProvider) CC = (0, Mz.i)(zC, this.objectIdProvider);
              else if (CC > 16777215) throw new Error(`Invalid geometry object ID ${CC} for mesh "${zC.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              WC.setFloat("objectId", CC)
            }
            if (this._enableMeshBlendTag) {
              const CC = this.meshBlendTagProvider ? (0, Mz.h)(zC, this.meshBlendTagProvider) : zC.meshBlendingTag;
              WC.setInt("meshBlendTag", CC)
            }
            oC && zC.hasThinInstances && WC.setMatrix("world", qC), zC._processRendering(ZC, CC, WC, nC.fillMode, fC, oC, ((CC, zC) => {
              CC || WC.setMatrix("world", zC)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[ZC.uniqueId].fN = qC.clone(), this._previousTransformationMatrices[ZC.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), zC.skeleton && this._copyBonesTransformationMatrices(zC.skeleton.getTransformMatrices(zC), this._previousBonesTransformationMatrices[ZC.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (zC, ZC, QC) => {
          if ((QC || 0 === ZC) && zC.Zx)
            for (let wC = 0; wC < zC.Zx.length; ++wC) {
              const ZC = zC.Zx[wC],
                QC = ZC.cg(),
                bC = ZC.getRenderingMesh();
              if (!QC) continue;
              const nC = bC._getInstancesRenderList(ZC._id, !!ZC.getReplacementMesh()),
                fC = CC.getCaps().instancedArrays && (null !== nC.visibleInstances[ZC._id] || bC.hasThinInstances);
              if (!this.isReady(ZC, fC)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (zC, ZC, QC, wC) => {
          let bC;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.mg().bindAttachments(this._attachmentsFromPrePass)
          }
          if (wC.length) {
            for (CC.setColorWrite(!1), bC = 0; bC < wC.length; bC++) PC(wC.data[bC]);
            CC.setColorWrite(!0)
          }
          for (bC = 0; bC < zC.length; bC++) PC(zC.data[bC]);
          for (CC.setDepthWrite(!1), bC = 0; bC < ZC.length; bC++) PC(ZC.data[bC]);
          if (this.renderTransparentMeshes)
            for (bC = 0; bC < QC.length; bC++) PC(QC.data[bC]);
          CC.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const CC = this._scene.mg();
        return {
          width: Math.max(1, Math.floor(CC.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(CC.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(CC, zC) {
        for (let ZC = 0; ZC < CC.length; ZC++) zC[ZC] = CC[ZC];
        return zC
      }
    }
    sz.ForceGLSL = !1, sz.DEPTH_TEXTURE_TYPE = 0, sz.NORMAL_TEXTURE_TYPE = 1, sz.POSITION_TEXTURE_TYPE = 2, sz.VELOCITY_TEXTURE_TYPE = 3, sz.REFLECTIVITY_TEXTURE_TYPE = 4, sz.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, sz.VELOCITY_LINEAR_TEXTURE_TYPE = 6, sz.IRRADIANCE_TEXTURE_TYPE = 7, sz.OBJECT_ID_TEXTURE_TYPE = 8, sz.MESH_BLEND_TAG_TEXTURE_TYPE = 9, sz._SceneComponentInitialization = CC => {
      throw (0, Pz.i)("GeometryBufferRendererSceneComponent")
    };
    var Tz = ZC(37002);
    const az = {
      effect: null,
      subMesh: null
    };

    function tz(CC) {
      if ("number" === typeof CC) return 1;
      if (CC instanceof uC.n) return 2;
      if (CC instanceof uC.r || CC instanceof jC.e) return 3;
      if (CC instanceof uC.u || CC instanceof jC.g) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class Dz {
      populateVectorFromLinkedProperties(CC) {
        const zC = tz(CC);
        for (const ZC in this.linkedProperties) {
          const CC = this.linkedProperties[ZC],
            QC = CC.numComponents;
          if (zC < QC || CC.targetUniformComponentOffset > zC - QC) return void(1 == QC ? hC.c.Error(`Float property ${CC.name} has an offset that is too large.`) : hC.c.Error(`Vector${QC} property ${CC.name} won't fit in Vector${zC} or has an offset that is too large.`));
          "number" === typeof CC.value ? Dz._tmpArray[CC.targetUniformComponentOffset] = CC.value : CC.value.toArray(Dz._tmpArray, CC.targetUniformComponentOffset)
        }
        CC.azC(Dz._tmpArray)
      }
      constructor(CC, zC) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = CC, this.numComponents = zC
      }
    }
    Dz._tmpArray = [0, 0, 0, 0];
    class jz {
      constructor(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          bC = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = CC, this.targetUniformName = ZC, this.defaultValue = zC, this.value = zC, this.targetUniformComponentNum = QC, this.targetUniformComponentOffset = wC, this.requiredDefine = bC
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : tz(this.defaultValue)
      }
    }
    class yz {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(CC, zC, ZC) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = CC, this.samplerPrefix = zC, this.textureDefine = ZC
      }
    }
    class Lz extends((0, Sz.d)((0, gz.e)(sC.b))) {}
    class Uz extends(function(CC) {
      return class extends CC {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(Lz)) {}
    class Bz extends((0, yC.e)(Uz)) {
      constructor(CC) {
        super(CC), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class Oz extends((0, pz.c)(UC.e)) {}
    let kz = (() => {
        var CC, zC, QC, wC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC, dC, mC, HC, EC, cC, sC, TC, aC, tC, yC, UC, VC, Cz, zz, Zz, Qz, wz, bz, nz, fz, oz, qz, gz, Sz, pz, Pz, Gz, Rz, Az, xz, Jz, vz, ez, hz, Kz, Yz, dz, mz, Hz, Ez, lz, Xz, cz, uz, rz, Tz, tz, Lz, Uz, kz, Vz, CZ, zZ, ZZ, QZ, wZ, bZ, nZ, fZ, oZ, qZ, FZ, WZ, NZ, MZ, gZ, SZ, pZ, PZ, GZ, RZ, AZ, xZ, JZ, IZ, iZ, vZ, eZ, hZ, KZ;
        let YZ, dZ, mZ, HZ, EZ, lZ, XZ, cZ, uZ, rZ, sZ, TZ, aZ, tZ, DZ, jZ, yZ, LZ, UZ, BZ, OZ, kZ, VZ, CQ, zQ, ZQ, QQ, wQ, bQ, nQ, fQ, oQ, qQ, FQ, WQ, NQ, MQ, gQ, SQ, pQ, PQ, GQ, RQ, AQ, xQ, JQ, IQ, iQ, vQ, eQ, hQ, KQ, YQ, dQ, mQ, HQ, EQ, lQ, XQ, cQ, uQ, rQ, sQ, TQ, aQ, tQ, DQ, jQ, yQ, LQ, UQ, BQ, OQ, kQ, VQ, Cw, zw, Zw, Qw, ww, bw, nw, fw, ow, qw, Fw, Ww, Nw, Mw, gw, Sw, pw, Pw, Gw, Rw, Aw, xw, Jw, Iw, iw, vw, ew, hw, Kw, Yw, dw = Oz,
          mw = [],
          Hw = [],
          Ew = [],
          lw = [],
          Xw = [],
          uw = [],
          rw = [],
          sw = [],
          Tw = [],
          aw = [],
          tw = [],
          Dw = [],
          jw = [],
          yw = [],
          Lw = [],
          Uw = [],
          Bw = [],
          Ow = [],
          kw = [],
          Vw = [],
          Cb = [],
          zb = [],
          Zb = [],
          Qb = [],
          wb = [],
          bb = [],
          nb = [],
          fb = [],
          ob = [],
          qb = [],
          Fb = [],
          Wb = [],
          Nb = [],
          Mb = [],
          gb = [],
          Sb = [],
          pb = [],
          Pb = [],
          Gb = [],
          Rb = [],
          Ab = [],
          xb = [],
          Jb = [],
          Ib = [],
          ib = [],
          vb = [],
          eb = [],
          hb = [],
          Kb = [],
          Yb = [],
          db = [],
          mb = [],
          Hb = [],
          Eb = [],
          lb = [],
          Xb = [],
          cb = [],
          ub = [],
          rb = [],
          sb = [],
          Tb = [],
          ab = [],
          tb = [],
          Db = [],
          jb = [],
          yb = [],
          Lb = [],
          Ub = [],
          Bb = [],
          Ob = [],
          kb = [],
          Vb = [],
          Cn = [],
          zn = [],
          Zn = [],
          Qn = [],
          wn = [],
          bn = [],
          nn = [],
          fn = [],
          qn = [],
          Fn = [],
          Wn = [],
          Nn = [],
          Mn = [],
          gn = [],
          Sn = [],
          pn = [],
          Pn = [],
          Gn = [],
          Rn = [],
          An = [],
          xn = [],
          Jn = [],
          In = [],
          vn = [],
          en = [],
          hn = [],
          Kn = [],
          Yn = [],
          dn = [],
          mn = [],
          Hn = [],
          En = [],
          Xn = [],
          cn = [],
          un = [],
          rn = [],
          sn = [],
          Tn = [],
          an = [],
          tn = [],
          Dn = [],
          jn = [],
          yn = [],
          Ln = [],
          Un = [],
          Bn = [],
          On = [],
          kn = [],
          Vn = [],
          Cf = [],
          zf = [],
          Zf = [],
          Qf = [],
          wf = [],
          bf = [],
          nf = [],
          ff = [],
          of = [],
          qf = [],
          Ff = [],
          Wf = [],
          Nf = [],
          Mf = [],
          gf = [],
          Sf = [],
          pf = [],
          Pf = [],
          Gf = [],
          Rf = [],
          Af = [],
          xf = [],
          Jf = [],
          If = [],
          vf = [],
          ef = [],
          hf = [],
          Kf = [],
          Yf = [],
          df = [],
          mf = [],
          Hf = [],
          Ef = [],
          lf = [],
          Xf = [],
          uf = [],
          rf = [],
          sf = [],
          Tf = [],
          af = [],
          tf = [],
          Df = [],
          jf = [],
          yf = [],
          Lf = [],
          Uf = [],
          Bf = [],
          Of = [],
          kf = [],
          Vf = [],
          Co = [],
          zo = [],
          Zo = [],
          Qo = [],
          wo = [],
          bo = [],
          no = [],
          fo = [],
          oo = [],
          qo = [],
          Fo = [],
          Wo = [],
          No = [],
          Mo = [],
          go = [],
          So = [],
          po = [],
          Po = [],
          Go = [],
          Ro = [],
          Ao = [],
          xo = [],
          Jo = [],
          Io = [],
          io = [],
          vo = [],
          eo = [],
          ho = [],
          Ko = [],
          Yo = [],
          mo = [],
          Ho = [],
          Eo = [],
          Xo = [];
        return CC = class extends dw {
          get baseWeight() {
            return (0, vC.e)(this, zC, "f")
          }
          set baseWeight(CC) {
            (0, vC.f)(this, zC, CC, "f")
          }
          get baseWeightTexture() {
            return (0, vC.e)(this, QC, "f")
          }
          set baseWeightTexture(CC) {
            (0, vC.f)(this, QC, CC, "f")
          }
          get baseColor() {
            return (0, vC.e)(this, wC, "f")
          }
          set baseColor(CC) {
            (0, vC.f)(this, wC, CC, "f")
          }
          get baseColorTexture() {
            return (0, vC.e)(this, nC, "f")
          }
          set baseColorTexture(CC) {
            (0, vC.f)(this, nC, CC, "f")
          }
          get baseDiffuseRoughness() {
            return (0, vC.e)(this, fC, "f")
          }
          set baseDiffuseRoughness(CC) {
            (0, vC.f)(this, fC, CC, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, vC.e)(this, oC, "f")
          }
          set baseDiffuseRoughnessTexture(CC) {
            (0, vC.f)(this, oC, CC, "f")
          }
          get baseMetalness() {
            return (0, vC.e)(this, qC, "f")
          }
          set baseMetalness(CC) {
            (0, vC.f)(this, qC, CC, "f")
          }
          get baseMetalnessTexture() {
            return (0, vC.e)(this, FC, "f")
          }
          set baseMetalnessTexture(CC) {
            (0, vC.f)(this, FC, CC, "f")
          }
          get specularWeight() {
            return (0, vC.e)(this, WC, "f")
          }
          set specularWeight(CC) {
            (0, vC.f)(this, WC, CC, "f")
          }
          get specularWeightTexture() {
            return (0, vC.e)(this, NC, "f")
          }
          set specularWeightTexture(CC) {
            (0, vC.f)(this, NC, CC, "f")
          }
          get specularColor() {
            return (0, vC.e)(this, MC, "f")
          }
          set specularColor(CC) {
            (0, vC.f)(this, MC, CC, "f")
          }
          get specularColorTexture() {
            return (0, vC.e)(this, gC, "f")
          }
          set specularColorTexture(CC) {
            (0, vC.f)(this, gC, CC, "f")
          }
          get specularRoughness() {
            return (0, vC.e)(this, SC, "f")
          }
          set specularRoughness(CC) {
            (0, vC.f)(this, SC, CC, "f")
          }
          get specularRoughnessTexture() {
            return (0, vC.e)(this, pC, "f")
          }
          set specularRoughnessTexture(CC) {
            (0, vC.f)(this, pC, CC, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, vC.e)(this, PC, "f")
          }
          set specularRoughnessAnisotropy(CC) {
            (0, vC.f)(this, PC, CC, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, vC.e)(this, GC, "f")
          }
          set specularRoughnessAnisotropyTexture(CC) {
            (0, vC.f)(this, GC, CC, "f")
          }
          get specularIor() {
            return (0, vC.e)(this, RC, "f")
          }
          set specularIor(CC) {
            (0, vC.f)(this, RC, CC, "f")
          }
          get transmissionWeight() {
            return (0, vC.e)(this, AC, "f")
          }
          set transmissionWeight(CC) {
            (0, vC.f)(this, AC, CC, "f")
          }
          get transmissionWeightTexture() {
            return (0, vC.e)(this, xC, "f")
          }
          set transmissionWeightTexture(CC) {
            (0, vC.f)(this, xC, CC, "f")
          }
          get transmissionColor() {
            return (0, vC.e)(this, JC, "f")
          }
          set transmissionColor(CC) {
            (0, vC.f)(this, JC, CC, "f")
          }
          get transmissionColorTexture() {
            return (0, vC.e)(this, IC, "f")
          }
          set transmissionColorTexture(CC) {
            (0, vC.f)(this, IC, CC, "f")
          }
          get transmissionDepth() {
            return (0, vC.e)(this, iC, "f")
          }
          set transmissionDepth(CC) {
            (0, vC.f)(this, iC, CC, "f")
          }
          get transmissionDepthTexture() {
            return (0, vC.e)(this, dC, "f")
          }
          set transmissionDepthTexture(CC) {
            (0, vC.f)(this, dC, CC, "f")
          }
          get transmissionScatter() {
            return (0, vC.e)(this, mC, "f")
          }
          set transmissionScatter(CC) {
            (0, vC.f)(this, mC, CC, "f")
          }
          get transmissionScatterTexture() {
            return (0, vC.e)(this, HC, "f")
          }
          set transmissionScatterTexture(CC) {
            (0, vC.f)(this, HC, CC, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, vC.e)(this, EC, "f")
          }
          set transmissionScatterAnisotropy(CC) {
            (0, vC.f)(this, EC, CC, "f")
          }
          get transmissionDispersionScale() {
            return (0, vC.e)(this, cC, "f")
          }
          set transmissionDispersionScale(CC) {
            (0, vC.f)(this, cC, CC, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, vC.e)(this, sC, "f")
          }
          set transmissionDispersionScaleTexture(CC) {
            (0, vC.f)(this, sC, CC, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, vC.e)(this, TC, "f")
          }
          set transmissionDispersionAbbeNumber(CC) {
            (0, vC.f)(this, TC, CC, "f")
          }
          get subsurfaceWeight() {
            return (0, vC.e)(this, aC, "f")
          }
          set subsurfaceWeight(CC) {
            (0, vC.f)(this, aC, CC, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, vC.e)(this, tC, "f")
          }
          set subsurfaceWeightTexture(CC) {
            (0, vC.f)(this, tC, CC, "f")
          }
          get subsurfaceColor() {
            return (0, vC.e)(this, yC, "f")
          }
          set subsurfaceColor(CC) {
            (0, vC.f)(this, yC, CC, "f")
          }
          get subsurfaceColorTexture() {
            return (0, vC.e)(this, UC, "f")
          }
          set subsurfaceColorTexture(CC) {
            (0, vC.f)(this, UC, CC, "f")
          }
          get subsurfaceRadius() {
            return (0, vC.e)(this, VC, "f")
          }
          set subsurfaceRadius(CC) {
            (0, vC.f)(this, VC, CC, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, vC.e)(this, Cz, "f")
          }
          set subsurfaceRadiusScale(CC) {
            (0, vC.f)(this, Cz, CC, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, vC.e)(this, zz, "f")
          }
          set subsurfaceRadiusScaleTexture(CC) {
            (0, vC.f)(this, zz, CC, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, vC.e)(this, Zz, "f")
          }
          set subsurfaceScatterAnisotropy(CC) {
            (0, vC.f)(this, Zz, CC, "f")
          }
          get coatWeight() {
            return (0, vC.e)(this, Qz, "f")
          }
          set coatWeight(CC) {
            (0, vC.f)(this, Qz, CC, "f")
          }
          get coatWeightTexture() {
            return (0, vC.e)(this, wz, "f")
          }
          set coatWeightTexture(CC) {
            (0, vC.f)(this, wz, CC, "f")
          }
          get coatColor() {
            return (0, vC.e)(this, bz, "f")
          }
          set coatColor(CC) {
            (0, vC.f)(this, bz, CC, "f")
          }
          get coatColorTexture() {
            return (0, vC.e)(this, nz, "f")
          }
          set coatColorTexture(CC) {
            (0, vC.f)(this, nz, CC, "f")
          }
          get coatRoughness() {
            return (0, vC.e)(this, fz, "f")
          }
          set coatRoughness(CC) {
            (0, vC.f)(this, fz, CC, "f")
          }
          get coatRoughnessTexture() {
            return (0, vC.e)(this, oz, "f")
          }
          set coatRoughnessTexture(CC) {
            (0, vC.f)(this, oz, CC, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, vC.e)(this, qz, "f")
          }
          set coatRoughnessAnisotropy(CC) {
            (0, vC.f)(this, qz, CC, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, vC.e)(this, gz, "f")
          }
          set coatRoughnessAnisotropyTexture(CC) {
            (0, vC.f)(this, gz, CC, "f")
          }
          get coatIor() {
            return (0, vC.e)(this, Sz, "f")
          }
          set coatIor(CC) {
            (0, vC.f)(this, Sz, CC, "f")
          }
          get coatDarkening() {
            return (0, vC.e)(this, pz, "f")
          }
          set coatDarkening(CC) {
            (0, vC.f)(this, pz, CC, "f")
          }
          get coatDarkeningTexture() {
            return (0, vC.e)(this, Pz, "f")
          }
          set coatDarkeningTexture(CC) {
            (0, vC.f)(this, Pz, CC, "f")
          }
          get fuzzWeight() {
            return (0, vC.e)(this, Gz, "f")
          }
          set fuzzWeight(CC) {
            (0, vC.f)(this, Gz, CC, "f")
          }
          get fuzzWeightTexture() {
            return (0, vC.e)(this, Rz, "f")
          }
          set fuzzWeightTexture(CC) {
            (0, vC.f)(this, Rz, CC, "f")
          }
          get fuzzColor() {
            return (0, vC.e)(this, Az, "f")
          }
          set fuzzColor(CC) {
            (0, vC.f)(this, Az, CC, "f")
          }
          get fuzzColorTexture() {
            return (0, vC.e)(this, xz, "f")
          }
          set fuzzColorTexture(CC) {
            (0, vC.f)(this, xz, CC, "f")
          }
          get fuzzRoughness() {
            return (0, vC.e)(this, Jz, "f")
          }
          set fuzzRoughness(CC) {
            (0, vC.f)(this, Jz, CC, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, vC.e)(this, vz, "f")
          }
          set fuzzRoughnessTexture(CC) {
            (0, vC.f)(this, vz, CC, "f")
          }
          get geometryThinWalled() {
            return (0, vC.e)(this, ez, "f")
          }
          set geometryThinWalled(CC) {
            (0, vC.f)(this, ez, CC, "f")
          }
          get geometryNormalTexture() {
            return (0, vC.e)(this, hz, "f")
          }
          set geometryNormalTexture(CC) {
            (0, vC.f)(this, hz, CC, "f")
          }
          get geometryTangent() {
            return (0, vC.e)(this, Kz, "f")
          }
          set geometryTangent(CC) {
            (0, vC.f)(this, Kz, CC, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(CC) {
            this.geometryTangent = new uC.n(Math.cos(CC), Math.sin(CC))
          }
          get geometryTangentTexture() {
            return (0, vC.e)(this, Yz, "f")
          }
          set geometryTangentTexture(CC) {
            (0, vC.f)(this, Yz, CC, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, vC.e)(this, dz, "f")
          }
          set geometryCoatNormalTexture(CC) {
            (0, vC.f)(this, dz, CC, "f")
          }
          get geometryCoatTangent() {
            return (0, vC.e)(this, mz, "f")
          }
          set geometryCoatTangent(CC) {
            (0, vC.f)(this, mz, CC, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(CC) {
            this.geometryCoatTangent = new uC.n(Math.cos(CC), Math.sin(CC))
          }
          get geometryCoatTangentTexture() {
            return (0, vC.e)(this, Hz, "f")
          }
          set geometryCoatTangentTexture(CC) {
            (0, vC.f)(this, Hz, CC, "f")
          }
          get geometryOpacity() {
            return (0, vC.e)(this, Ez, "f")
          }
          set geometryOpacity(CC) {
            (0, vC.f)(this, Ez, CC, "f")
          }
          get geometryOpacityTexture() {
            return (0, vC.e)(this, lz, "f")
          }
          set geometryOpacityTexture(CC) {
            (0, vC.f)(this, lz, CC, "f")
          }
          get geometryThickness() {
            return (0, vC.e)(this, Xz, "f")
          }
          set geometryThickness(CC) {
            (0, vC.f)(this, Xz, CC, "f")
          }
          get geometryThicknessTexture() {
            return (0, vC.e)(this, cz, "f")
          }
          set geometryThicknessTexture(CC) {
            (0, vC.f)(this, cz, CC, "f")
          }
          get emissionLuminance() {
            return (0, vC.e)(this, uz, "f")
          }
          set emissionLuminance(CC) {
            (0, vC.f)(this, uz, CC, "f")
          }
          get emissionColor() {
            return (0, vC.e)(this, rz, "f")
          }
          set emissionColor(CC) {
            (0, vC.f)(this, rz, CC, "f")
          }
          get emissionColorTexture() {
            return (0, vC.e)(this, Tz, "f")
          }
          set emissionColorTexture(CC) {
            (0, vC.f)(this, Tz, CC, "f")
          }
          get thinFilmWeight() {
            return (0, vC.e)(this, tz, "f")
          }
          set thinFilmWeight(CC) {
            (0, vC.f)(this, tz, CC, "f")
          }
          get thinFilmWeightTexture() {
            return (0, vC.e)(this, Lz, "f")
          }
          set thinFilmWeightTexture(CC) {
            (0, vC.f)(this, Lz, CC, "f")
          }
          get thinFilmThickness() {
            return (0, vC.e)(this, Uz, "f")
          }
          set thinFilmThickness(CC) {
            (0, vC.f)(this, Uz, CC, "f")
          }
          get thinFilmThicknessMin() {
            return (0, vC.e)(this, kz, "f")
          }
          set thinFilmThicknessMin(CC) {
            (0, vC.f)(this, kz, CC, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, vC.e)(this, Vz, "f")
          }
          set thinFilmThicknessTexture(CC) {
            (0, vC.f)(this, Vz, CC, "f")
          }
          get thinFilmIor() {
            return (0, vC.e)(this, CZ, "f")
          }
          set thinFilmIor(CC) {
            (0, vC.f)(this, CZ, CC, "f")
          }
          get ambientOcclusionTexture() {
            return (0, vC.e)(this, zZ, "f")
          }
          set ambientOcclusionTexture(CC) {
            (0, vC.f)(this, zZ, CC, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(CC) {
            this._sssQuality !== CC && (this._sssQuality = CC, this.YzC(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(CC) {
            this._sssIrradianceTexture !== CC && (this._sssIrradianceTexture = CC, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(CC) {
            this._sssDepthTexture !== CC && (this._sssDepthTexture = CC, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, vC.e)(this, ZZ, "f")
          }
          set directIntensity(CC) {
            (0, vC.f)(this, ZZ, CC, "f")
          }
          get environmentIntensity() {
            return (0, vC.e)(this, QZ, "f")
          }
          set environmentIntensity(CC) {
            (0, vC.f)(this, QZ, CC, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, vC.e)(this, wZ, "f")
          }
          set useSpecularWeightFromTextureAlpha(CC) {
            (0, vC.f)(this, wZ, CC, "f")
          }
          get forceAlphaTest() {
            return (0, vC.e)(this, bZ, "f")
          }
          set forceAlphaTest(CC) {
            (0, vC.f)(this, bZ, CC, "f")
          }
          get alphaCutOff() {
            return (0, vC.e)(this, nZ, "f")
          }
          set alphaCutOff(CC) {
            (0, vC.f)(this, nZ, CC, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, vC.e)(this, fZ, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(CC) {
            (0, vC.f)(this, fZ, CC, "f")
          }
          get useAmbientInGrayScale() {
            return (0, vC.e)(this, oZ, "f")
          }
          set useAmbientInGrayScale(CC) {
            (0, vC.f)(this, oZ, CC, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(jC.e.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === bC.d.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(CC) {
            CC !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = CC ? bC.d.LIGHTFALLOFF_PHYSICAL : bC.d.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === bC.d.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(CC) {
            CC !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = CC ? bC.d.LIGHTFALLOFF_GLTF : bC.d.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, vC.e)(this, qZ, "f")
          }
          set useObjectSpaceNormalMap(CC) {
            (0, vC.f)(this, qZ, CC, "f")
          }
          get useParallax() {
            return (0, vC.e)(this, FZ, "f")
          }
          set useParallax(CC) {
            (0, vC.f)(this, FZ, CC, "f")
          }
          get useParallaxOcclusion() {
            return (0, vC.e)(this, WZ, "f")
          }
          set useParallaxOcclusion(CC) {
            (0, vC.f)(this, WZ, CC, "f")
          }
          get parallaxScaleBias() {
            return (0, vC.e)(this, NZ, "f")
          }
          set parallaxScaleBias(CC) {
            (0, vC.f)(this, NZ, CC, "f")
          }
          get disableLighting() {
            return (0, vC.e)(this, MZ, "f")
          }
          set disableLighting(CC) {
            (0, vC.f)(this, MZ, CC, "f")
          }
          get forceIrradianceInFragment() {
            return (0, vC.e)(this, gZ, "f")
          }
          set forceIrradianceInFragment(CC) {
            (0, vC.f)(this, gZ, CC, "f")
          }
          get maxSimultaneousLights() {
            return (0, vC.e)(this, SZ, "f")
          }
          set maxSimultaneousLights(CC) {
            (0, vC.f)(this, SZ, CC, "f")
          }
          get invertNormalMapX() {
            return (0, vC.e)(this, pZ, "f")
          }
          set invertNormalMapX(CC) {
            (0, vC.f)(this, pZ, CC, "f")
          }
          get invertNormalMapY() {
            return (0, vC.e)(this, PZ, "f")
          }
          set invertNormalMapY(CC) {
            (0, vC.f)(this, PZ, CC, "f")
          }
          get twoSidedLighting() {
            return (0, vC.e)(this, GZ, "f")
          }
          set twoSidedLighting(CC) {
            (0, vC.f)(this, GZ, CC, "f")
          }
          get useAlphaFresnel() {
            return (0, vC.e)(this, RZ, "f")
          }
          set useAlphaFresnel(CC) {
            (0, vC.f)(this, RZ, CC, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, vC.e)(this, AZ, "f")
          }
          set useLinearAlphaFresnel(CC) {
            (0, vC.f)(this, AZ, CC, "f")
          }
          get environmentBRDFTexture() {
            return (0, vC.e)(this, xZ, "f")
          }
          set environmentBRDFTexture(CC) {
            (0, vC.f)(this, xZ, CC, "f")
          }
          get forceNormalForward() {
            return (0, vC.e)(this, JZ, "f")
          }
          set forceNormalForward(CC) {
            (0, vC.f)(this, JZ, CC, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, vC.e)(this, IZ, "f")
          }
          set enableSpecularAntiAliasing(CC) {
            (0, vC.f)(this, IZ, CC, "f")
          }
          get useHorizonOcclusion() {
            return (0, vC.e)(this, iZ, "f")
          }
          set useHorizonOcclusion(CC) {
            (0, vC.f)(this, iZ, CC, "f")
          }
          get useRadianceOcclusion() {
            return (0, vC.e)(this, vZ, "f")
          }
          set useRadianceOcclusion(CC) {
            (0, vC.f)(this, vZ, CC, "f")
          }
          get unlit() {
            return (0, vC.e)(this, eZ, "f")
          }
          set unlit(CC) {
            (0, vC.f)(this, eZ, CC, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, vC.e)(this, hZ, "f")
          }
          set applyDecalMapAfterDetailMap(CC) {
            (0, vC.f)(this, hZ, CC, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(CC) {
            this._backgroundRefractionTexture = CC, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(CC) {
            this._refractionHighQualityBlur !== CC && (this._refractionHighQualityBlur = CC, this.YzC(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(CC) {
            this._realTimeFiltering = CC, this.YzC(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(CC) {
            this._realTimeFilteringQuality = CC, this.YzC(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(CC) {
            this._fuzzSampleNumber = CC, this.YzC(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, vC.e)(this, KZ, "f")
          }
          set debugMode(CC) {
            (0, vC.f)(this, KZ, CC, "f")
          }
          constructor(ZC, eC) {
            super(ZC, eC, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || CC.ForceGLSL), zC.set(this, ((0, vC.n)(this, mw), (0, vC.n)(this, Hw, void 0))), this._baseWeight = ((0, vC.n)(this, Ew), new jz("base_weight", 1, "vBaseWeight", 1)), QC.set(this, (0, vC.n)(this, lw, void 0)), this._baseWeightTexture = ((0, vC.n)(this, Xw), new yz("base_weight", "baseWeight", "BASE_WEIGHT")), wC.set(this, (0, vC.n)(this, uw, void 0)), this._baseColor = ((0, vC.n)(this, rw), new jz("base_color", jC.e.White(), "vBaseColor", 4)), nC.set(this, (0, vC.n)(this, sw, void 0)), this._baseColorTexture = ((0, vC.n)(this, Tw), new yz("base_color", "baseColor", "BASE_COLOR")), fC.set(this, (0, vC.n)(this, aw, void 0)), this._baseDiffuseRoughness = ((0, vC.n)(this, tw), new jz("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), oC.set(this, (0, vC.n)(this, Dw, void 0)), this._baseDiffuseRoughnessTexture = ((0, vC.n)(this, jw), new yz("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), qC.set(this, (0, vC.n)(this, yw, void 0)), this._baseMetalness = ((0, vC.n)(this, Lw), new jz("base_metalness", 0, "vReflectanceInfo", 4, 0)), FC.set(this, (0, vC.n)(this, Uw, void 0)), this._baseMetalnessTexture = ((0, vC.n)(this, Bw), new yz("base_metalness", "baseMetalness", "BASE_METALNESS")), WC.set(this, (0, vC.n)(this, Ow, void 0)), this._specularWeight = ((0, vC.n)(this, kw), new jz("specular_weight", 1, "vReflectanceInfo", 4, 3)), NC.set(this, (0, vC.n)(this, Vw, void 0)), this._specularWeightTexture = ((0, vC.n)(this, Cb), new yz("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), MC.set(this, (0, vC.n)(this, zb, void 0)), this._specularColor = ((0, vC.n)(this, Zb), new jz("specular_color", jC.e.White(), "vSpecularColor", 4)), gC.set(this, (0, vC.n)(this, Qb, void 0)), this._specularColorTexture = ((0, vC.n)(this, wb), new yz("specular_color", "specularColor", "SPECULAR_COLOR")), SC.set(this, (0, vC.n)(this, bb, void 0)), this._specularRoughness = ((0, vC.n)(this, nb), new jz("specular_roughness", .3, "vReflectanceInfo", 4, 1)), pC.set(this, (0, vC.n)(this, fb, void 0)), this._specularRoughnessTexture = ((0, vC.n)(this, ob), new yz("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), PC.set(this, (0, vC.n)(this, qb, void 0)), this._specularRoughnessAnisotropy = ((0, vC.n)(this, Fb), new jz("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), GC.set(this, (0, vC.n)(this, Wb, void 0)), this._specularRoughnessAnisotropyTexture = ((0, vC.n)(this, Nb), new yz("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), RC.set(this, (0, vC.n)(this, Mb, void 0)), this._specularIor = ((0, vC.n)(this, gb), new jz("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), AC.set(this, (0, vC.n)(this, Sb, void 0)), this._transmissionWeight = ((0, vC.n)(this, pb), new jz("transmission_weight", 0, "vTransmissionWeight", 1)), xC.set(this, (0, vC.n)(this, Pb, void 0)), this._transmissionWeightTexture = ((0, vC.n)(this, Gb), new yz("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), JC.set(this, (0, vC.n)(this, Rb, void 0)), this._transmissionColor = ((0, vC.n)(this, Ab), new jz("transmission_color", jC.e.White(), "vTransmissionColor", 3, 0)), IC.set(this, (0, vC.n)(this, xb, void 0)), this._transmissionColorTexture = ((0, vC.n)(this, Jb), new yz("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), iC.set(this, (0, vC.n)(this, Ib, void 0)), this._transmissionDepth = ((0, vC.n)(this, ib), new jz("transmission_depth", 0, "vTransmissionDepth", 1, 0)), dC.set(this, (0, vC.n)(this, vb, void 0)), this._transmissionDepthTexture = ((0, vC.n)(this, eb), new yz("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), mC.set(this, (0, vC.n)(this, hb, void 0)), this._transmissionScatter = ((0, vC.n)(this, Kb), new jz("transmission_scatter", jC.e.Black(), "vTransmissionScatter", 3, 0)), HC.set(this, (0, vC.n)(this, Yb, void 0)), this._transmissionScatterTexture = ((0, vC.n)(this, db), new yz("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), EC.set(this, (0, vC.n)(this, mb, void 0)), this._transmissionScatterAnisotropy = ((0, vC.n)(this, Hb), new jz("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), cC.set(this, (0, vC.n)(this, Eb, void 0)), this._transmissionDispersionScale = ((0, vC.n)(this, lb), new jz("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), sC.set(this, (0, vC.n)(this, Xb, void 0)), this._transmissionDispersionScaleTexture = ((0, vC.n)(this, cb), new yz("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), TC.set(this, (0, vC.n)(this, ub, void 0)), this._transmissionDispersionAbbeNumber = ((0, vC.n)(this, rb), new jz("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), aC.set(this, (0, vC.n)(this, sb, void 0)), this._subsurfaceWeight = ((0, vC.n)(this, Tb), new jz("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), tC.set(this, (0, vC.n)(this, ab, void 0)), this._subsurfaceWeightTexture = ((0, vC.n)(this, tb), new yz("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), yC.set(this, (0, vC.n)(this, Db, void 0)), this._subsurfaceColor = ((0, vC.n)(this, jb), new jz("subsurface_color", new jC.e(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), UC.set(this, (0, vC.n)(this, yb, void 0)), this._subsurfaceColorTexture = ((0, vC.n)(this, Lb), new yz("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), VC.set(this, (0, vC.n)(this, Ub, void 0)), this._subsurfaceRadius = ((0, vC.n)(this, Bb), new jz("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), Cz.set(this, (0, vC.n)(this, Ob, void 0)), this._subsurfaceRadiusScale = ((0, vC.n)(this, kb), new jz("subsurface_radius_scale", new jC.e(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), zz.set(this, (0, vC.n)(this, Vb, void 0)), this._subsurfaceRadiusScaleTexture = ((0, vC.n)(this, Cn), new yz("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), Zz.set(this, (0, vC.n)(this, zn, void 0)), this._subsurfaceScatterAnisotropy = ((0, vC.n)(this, Zn), new jz("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), Qz.set(this, (0, vC.n)(this, Qn, void 0)), this._coatWeight = ((0, vC.n)(this, wn), new jz("coat_weight", 0, "vCoatWeight", 1, 0)), wz.set(this, (0, vC.n)(this, bn, void 0)), this._coatWeightTexture = ((0, vC.n)(this, nn), new yz("coat_weight", "coatWeight", "COAT_WEIGHT")), bz.set(this, (0, vC.n)(this, fn, void 0)), this._coatColor = ((0, vC.n)(this, qn), new jz("coat_color", jC.e.White(), "vCoatColor", 3, 0)), nz.set(this, (0, vC.n)(this, Fn, void 0)), this._coatColorTexture = ((0, vC.n)(this, Wn), new yz("coat_color", "coatColor", "COAT_COLOR")), fz.set(this, (0, vC.n)(this, Nn, void 0)), this._coatRoughness = ((0, vC.n)(this, Mn), new jz("coat_roughness", 0, "vCoatRoughness", 1, 0)), oz.set(this, (0, vC.n)(this, gn, void 0)), this._coatRoughnessTexture = ((0, vC.n)(this, Sn), new yz("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), qz.set(this, (0, vC.n)(this, pn, void 0)), this._coatRoughnessAnisotropy = ((0, vC.n)(this, Pn), new jz("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), gz.set(this, (0, vC.n)(this, Gn, void 0)), this._coatRoughnessAnisotropyTexture = ((0, vC.n)(this, Rn), new yz("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), Sz.set(this, (0, vC.n)(this, An, void 0)), this._coatIor = ((0, vC.n)(this, xn), new jz("coat_ior", 1.5, "vCoatIor", 1, 0)), pz.set(this, (0, vC.n)(this, Jn, void 0)), this._coatDarkening = ((0, vC.n)(this, In), new jz("coat_darkening", 1, "vCoatDarkening", 1, 0)), Pz.set(this, (0, vC.n)(this, vn, void 0)), this._coatDarkeningTexture = ((0, vC.n)(this, en), new yz("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, Gz.set(this, (0, vC.n)(this, hn, void 0)), this._fuzzWeight = ((0, vC.n)(this, Kn), new jz("fuzz_weight", 0, "vFuzzWeight", 1, 0)), Rz.set(this, (0, vC.n)(this, Yn, void 0)), this._fuzzWeightTexture = ((0, vC.n)(this, dn), new yz("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), Az.set(this, (0, vC.n)(this, mn, void 0)), this._fuzzColor = ((0, vC.n)(this, Hn), new jz("fuzz_color", jC.e.White(), "vFuzzColor", 3, 0)), xz.set(this, (0, vC.n)(this, En, void 0)), this._fuzzColorTexture = ((0, vC.n)(this, Xn), new yz("fuzz_color", "fuzzColor", "FUZZ_COLOR")), Jz.set(this, (0, vC.n)(this, cn, void 0)), this._fuzzRoughness = ((0, vC.n)(this, un), new jz("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), vz.set(this, (0, vC.n)(this, rn, void 0)), this._fuzzRoughnessTexture = ((0, vC.n)(this, sn), new yz("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), ez.set(this, (0, vC.n)(this, Tn, void 0)), this._geometryThinWalled = ((0, vC.n)(this, an), new jz("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), hz.set(this, (0, vC.n)(this, tn, void 0)), this._geometryNormalTexture = ((0, vC.n)(this, Dn), new yz("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), Kz.set(this, (0, vC.n)(this, jn, void 0)), this._geometryTangent = ((0, vC.n)(this, yn), new jz("geometry_tangent", new uC.n(1, 0), "vSpecularAnisotropy", 3, 0)), Yz.set(this, (0, vC.n)(this, Ln, void 0)), this._geometryTangentTexture = ((0, vC.n)(this, Un), new yz("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), dz.set(this, (0, vC.n)(this, Bn, void 0)), this._geometryCoatNormalTexture = ((0, vC.n)(this, On), new yz("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), mz.set(this, (0, vC.n)(this, kn, void 0)), this._geometryCoatTangent = ((0, vC.n)(this, Vn), new jz("geometry_coat_tangent", new uC.n(1, 0), "vGeometryCoatTangent", 2, 0)), Hz.set(this, (0, vC.n)(this, Cf, void 0)), this._geometryCoatTangentTexture = ((0, vC.n)(this, zf), new yz("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), Ez.set(this, (0, vC.n)(this, Zf, void 0)), this._geometryOpacity = ((0, vC.n)(this, Qf), new jz("geometry_opacity", 1, "vBaseColor", 4, 3)), lz.set(this, (0, vC.n)(this, wf, void 0)), this._geometryOpacityTexture = ((0, vC.n)(this, bf), new yz("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), Xz.set(this, (0, vC.n)(this, nf, void 0)), this._geometryThickness = ((0, vC.n)(this, ff), new jz("geometry_thickness", 0, "vGeometryThickness", 1, 0)), cz.set(this, (0, vC.n)(this, of, void 0)), this._geometryThicknessTexture = ((0, vC.n)(this, qf), new yz("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), uz.set(this, (0, vC.n)(this, Ff, void 0)), this._emissionLuminance = ((0, vC.n)(this, Wf), new jz("emission_luminance", 1, "vLightingIntensity", 4, 1)), rz.set(this, (0, vC.n)(this, Nf, void 0)), this._emissionColor = ((0, vC.n)(this, Mf), new jz("emission_color", jC.e.Black(), "vEmissionColor", 3)), Tz.set(this, (0, vC.n)(this, gf, void 0)), this._emissionColorTexture = ((0, vC.n)(this, Sf), new yz("emission_color", "emissionColor", "EMISSION_COLOR")), tz.set(this, (0, vC.n)(this, pf, void 0)), this._thinFilmWeight = ((0, vC.n)(this, Pf), new jz("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), Lz.set(this, (0, vC.n)(this, Gf, void 0)), this._thinFilmWeightTexture = ((0, vC.n)(this, Rf), new yz("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), Uz.set(this, (0, vC.n)(this, Af, void 0)), this._thinFilmThickness = ((0, vC.n)(this, xf), new jz("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), kz.set(this, (0, vC.n)(this, Jf, void 0)), this._thinFilmThicknessMin = ((0, vC.n)(this, If), new jz("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), Vz.set(this, (0, vC.n)(this, vf, void 0)), this._thinFilmThicknessTexture = ((0, vC.n)(this, ef), new yz("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), CZ.set(this, (0, vC.n)(this, hf, void 0)), this._thinFilmIor = ((0, vC.n)(this, Kf), new jz("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), zZ.set(this, (0, vC.n)(this, Yf, void 0)), this._ambientOcclusionTexture = ((0, vC.n)(this, df), new yz("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = CC.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, ZZ.set(this, (0, vC.n)(this, mf, 1)), QZ.set(this, ((0, vC.n)(this, Hf), (0, vC.n)(this, Ef, 1))), wZ.set(this, ((0, vC.n)(this, lf), (0, vC.n)(this, Xf, !1))), bZ.set(this, ((0, vC.n)(this, uf), (0, vC.n)(this, rf, !1))), nZ.set(this, ((0, vC.n)(this, sf), (0, vC.n)(this, Tf, .4))), fZ.set(this, ((0, vC.n)(this, af), (0, vC.n)(this, tf, !1))), oZ.set(this, ((0, vC.n)(this, Df), (0, vC.n)(this, jf, !1))), qZ.set(this, ((0, vC.n)(this, yf), (0, vC.n)(this, Lf, !1))), FZ.set(this, ((0, vC.n)(this, Uf), (0, vC.n)(this, Bf, !1))), WZ.set(this, ((0, vC.n)(this, Of), (0, vC.n)(this, kf, !1))), NZ.set(this, ((0, vC.n)(this, Vf), (0, vC.n)(this, Co, .05))), MZ.set(this, ((0, vC.n)(this, zo), (0, vC.n)(this, Zo, !1))), gZ.set(this, ((0, vC.n)(this, Qo), (0, vC.n)(this, wo, !1))), SZ.set(this, ((0, vC.n)(this, bo), (0, vC.n)(this, no, 4))), pZ.set(this, ((0, vC.n)(this, fo), (0, vC.n)(this, oo, !1))), PZ.set(this, ((0, vC.n)(this, qo), (0, vC.n)(this, Fo, !1))), GZ.set(this, ((0, vC.n)(this, Wo), (0, vC.n)(this, No, !1))), RZ.set(this, ((0, vC.n)(this, Mo), (0, vC.n)(this, go, !1))), AZ.set(this, ((0, vC.n)(this, So), (0, vC.n)(this, po, !1))), xZ.set(this, ((0, vC.n)(this, Po), (0, vC.n)(this, Go, null))), JZ.set(this, ((0, vC.n)(this, Ro), (0, vC.n)(this, Ao, !1))), IZ.set(this, ((0, vC.n)(this, xo), (0, vC.n)(this, Jo, !1))), iZ.set(this, ((0, vC.n)(this, Io), (0, vC.n)(this, io, !0))), vZ.set(this, ((0, vC.n)(this, vo), (0, vC.n)(this, eo, !0))), eZ.set(this, ((0, vC.n)(this, ho), (0, vC.n)(this, Ko, !1))), hZ.set(this, ((0, vC.n)(this, Yo), (0, vC.n)(this, mo, !1))), this._lightingInfos = ((0, vC.n)(this, Ho), new uC.u(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = bC.d.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new KC.i(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, KZ.set(this, (0, vC.n)(this, Eo, 0)), this.debugLimit = ((0, vC.n)(this, Xo), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = bC.d.MATERIAL_OPAQUE, this.Km() && !this.Km()?.mg().isWebGPU && this.Km().mg().fS < 2 && hC.c.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), CC._noiseTextures[this.Km().uniqueId] || (CC._noiseTextures[this.Km().uniqueId] = new YC.h(iz.g.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.Km(), !1, !0, 1), this.Km().Tm.addOnce((() => {
              CC._noiseTextures[this.Km().uniqueId]?.dispose(), delete CC._noiseTextures[this.Km().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), BC.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), BC.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = XC(this.Km()), this._environmentFuzzBRDFTexture = lC(this.Km()), this.prePassConfiguration = new DC.c, this._propertyList = {};
            for (const CC of Object.getOwnPropertyNames(this)) {
              const zC = this[CC];
              zC instanceof jz && (this._propertyList[CC] = zC)
            }
            Object.keys(this._propertyList).forEach((CC => {
              const zC = this._propertyList[CC];
              let ZC = this._uniformsList[zC.targetUniformName];
              ZC ? ZC.numComponents !== zC.targetUniformComponentNum ? hC.c.Error(`Uniform ${zC.targetUniformName} already exists of size ${ZC.numComponents}, but trying to set it to ${zC.targetUniformComponentNum}.`) : ZC.requiredDefine !== zC.requiredDefine && (ZC.requiredDefine = void 0) : (ZC = new Dz(zC.targetUniformName, zC.targetUniformComponentNum), ZC.requiredDefine = zC.requiredDefine, this._uniformsList[zC.targetUniformName] = ZC), "" === ZC.firstLinkedKey && (ZC.firstLinkedKey = zC.name), ZC.linkedProperties[zC.name] = zC
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const CC of Object.getOwnPropertyNames(this)) {
              const zC = this[CC];
              zC instanceof yz && (this._samplersList[CC] = zC)
            }
            for (const CC in this._samplersList) {
              const zC = this._samplersList[CC].textureDefine;
              this._samplerDefines[zC] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[zC + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[zC + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(BC.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(BC.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(CC) {
            this._transparencyMode !== CC && (this._transparencyMode = CC, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== bC.d.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(CC) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(CC)
          }
          clone(zC) {
            let ZC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const wC = Iz.d.Clone((() => new CC(zC, this.Km())), this, {
              cloneTexturesOnlyOnce: ZC
            });
            return wC.id = zC, wC.name = zC, this.stencil.copyTo(wC.stencil), this._clonePlugins(wC, QC), wC
          }
          serialize() {
            const CC = super.serialize();
            return CC.customType = "BABYLON.OpenPBRMaterial", CC
          }
          static Parse(zC, ZC, QC) {
            const wC = Iz.d.Parse((() => new CC(zC.name, ZC)), zC, ZC, QC);
            return zC.stencil && wC.stencil.parse(zC.stencil, ZC, QC), bC.d._ParsePlugins(zC, wC, ZC, QC), wC
          }
          forceCompilation(CC, zC, ZC) {
            const QC = {
              clipPlane: !1,
              useInstances: !1,
              ...ZC
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const ZC = new Bz({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                wC = this._prepareEffect(CC, CC, ZC, void 0, void 0, QC.useInstances, QC.clipPlane);
              this._onEffectCreatedObservable && (az.effect = wC, az.subMesh = null, this._onEffectCreatedObservable.notifyObservers(az)), wC.isReady() ? zC && zC(this) : wC.onCompileObservable.add((() => {
                zC && zC(this)
              }))
            })()
          }
          isReadyForSubMesh(zC, ZC, QC) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const wC = ZC._drawWrapper;
            if (wC.effect && this.isFrozen && wC._wasPreviouslyReady && wC._wasPreviouslyUsingInstances === QC) return !0;
            ZC.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ZC.materialDefines = new Bz({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const bC = ZC.materialDefines;
            if (this._isReadyForSubMesh(ZC)) return !0;
            const nC = this.Km(),
              fC = nC.mg();
            if (bC._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, nC.texturesEnabled)) {
              for (const CC in this._samplersList) {
                const zC = this._samplersList[CC];
                if (zC.value && !zC.value.isReadyOrNotBlocking()) return !1
              }
              const zC = this._getRadianceTexture();
              if (zC && BC.b.ReflectionTextureEnabled) {
                if (!zC.isReadyOrNotBlocking()) return !1;
                if (zC.irradianceTexture) {
                  if (!zC.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!zC.sphericalPolynomial && zC.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && BC.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && BC.b.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && BC.b.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (CC._noiseTextures[nC.uniqueId] && !CC._noiseTextures[nC.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = bC, this._eventInfo.subMesh = ZC, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (bC._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (bC.AREALIGHTUSED)
              for (let CC = 0; CC < zC.lightSources.length; CC++)
                if (!zC.lightSources[CC]._isReady()) return !1;
            if (fC.getCaps().standardDerivatives || zC.isVerticesDataPresent(rC.k.NormalKind) || (zC.createNormals(!0), hC.c.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + zC.name)), !(0, kC.d)(nC, zC, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const oC = ZC.effect,
              qC = bC._areLightsDisposed,
              FC = this._prepareEffect(zC, ZC.getRenderingMesh(), bC, this.onCompiled, this.onError, QC, null);
            let WC = !1;
            if (FC)
              if (this._onEffectCreatedObservable && (az.effect = FC, az.subMesh = ZC, this._onEffectCreatedObservable.notifyObservers(az)), this.allowShaderHotSwapping && oC && !FC.isReady()) {
                if (bC.markAsUnprocessed(), WC = this.isFrozen, qC) return bC._areLightsDisposed = !0, !1
              } else nC.resetCachedMaterial(), ZC.setEffect(FC, bC, this._materialContext);
            return !(!ZC.effect || !ZC.effect.isReady()) && (bC._renderId = nC.getRenderId(), wC._wasPreviouslyReady = !WC, wC._wasPreviouslyUsingInstances = !!QC, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const CC = this._uniformBuffer;
            CC.addUniform("vTangentSpaceParams", 2), CC.addUniform("vLightingIntensity", 4), CC.addUniform("pointSize", 1), CC.addUniform("vDebugMode", 2), CC.addUniform("renderTargetSize", 2), CC.addUniform("cameraInfo", 4), CC.addUniform("vTextureRepetitionHexTilingParams", 4), CC.addUniform("backgroundRefractionMatrix", 16), CC.addUniform("vBackgroundRefractionInfos", 3), (0, kC.ub)(CC, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((zC => {
              CC.addUniform(zC.name, zC.numComponents)
            })), Object.values(this._samplersList).forEach((zC => {
              CC.addUniform(zC.samplerInfoName, 2), CC.addUniform(zC.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(CC, zC, ZC, QC) {
            if (0 === this.geometryThickness) CC.updateFloat("vGeometryThickness", 0);
            else {
              QC.getRenderingMesh().getWorldMatrix().decompose(uC.j.Eg[0]);
              const zC = Math.max(Math.abs(uC.j.Eg[0].x), Math.abs(uC.j.Eg[0].y), Math.abs(uC.j.Eg[0].z));
              CC.updateFloat("vGeometryThickness", this.geometryThickness * zC)
            }
          }
          bindForSubMesh(zC, ZC, QC) {
            const wC = this.Km(),
              bC = QC.materialDefines;
            if (!bC) return;
            const nC = QC.effect;
            if (!nC) return;
            this._activeEffect = nC, ZC.getMeshUniformBuffer().bindToEffect(nC, "Mesh"), ZC.transferToEffect(zC);
            const fC = wC.mg();
            this._uniformBuffer.bindToEffect(nC, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, wC, ZC, zC, this.isFrozen), Mz.e.Bind(fC.currentRenderPassId, this._activeEffect, ZC, zC, this);
            const oC = wC.activeCamera;
            oC ? this._uniformBuffer.updateFloat4("cameraInfo", oC.minZ, oC.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const qC = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", qC[0], qC[1], qC[2], qC[3]), this._eventInfo.subMesh = QC, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), bC.OBJECTSPACE_NORMALMAP && (zC.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const FC = this._mustRebind(wC, nC, QC, ZC.visibility),
              WC = fC._features.needToAlwaysBindUniformBuffers;
            (0, kC.f)(ZC, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Wz.c)(this._activeEffect, this._vertexPullingMetadata);
            const NC = this._uniformBuffer;
            if (FC) {
              this.bindViewProjection(nC);
              const zC = this._getRadianceTexture();
              if (!NC.useUbo || !this.isFrozen || !NC.isSync || QC._drawWrapper._forceRebindOnNextCall) {
                if (wC.texturesEnabled) {
                  for (const CC in this._samplersList) {
                    const zC = this._samplersList[CC];
                    zC.value && (NC.updateFloat2(zC.samplerInfoName, zC.value.coordinatesIndex, zC.value.level), (0, kC.B)(zC.value, NC, zC.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (wC._mirroredCameraPosition ? NC.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : NC.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, kC.j)(wC, bC, NC, jC.e.White(), zC, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && NC.updateFloat("pointSize", this.pointSize);
                const CC = this._uniformsArray;
                for (let zC = 0, ZC = CC.length; zC < ZC; zC++) {
                  const ZC = CC[zC];
                  (void 0 === ZC.requiredDefine || bC[ZC.requiredDefine]) && (4 === ZC.numComponents ? (ZC.populateVectorFromLinkedProperties(uC.j.Vector4[0]), NC.updateVector4(ZC.name, uC.j.Vector4[0])) : 3 === ZC.numComponents ? (ZC.populateVectorFromLinkedProperties(uC.j.Eg[0]), NC.updateVector3(ZC.name, uC.j.Eg[0])) : 2 === ZC.numComponents ? (ZC.populateVectorFromLinkedProperties(uC.j.Vector2[0]), NC.updateFloat2(ZC.name, uC.j.Vector2[0].x, uC.j.Vector2[0].y)) : 1 === ZC.numComponents && NC.updateFloat(ZC.name, ZC.linkedProperties[ZC.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * wC.environmentIntensity, this._lightingInfos.w = 1, NC.updateVector4("vLightingIntensity", this._lightingInfos), NC.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (wC.texturesEnabled) {
                for (const CC in this._samplersList) {
                  const zC = this._samplersList[CC];
                  zC.value && NC.setTexture(zC.samplerName, zC.value)
                }
                if ((0, kC.n)(wC, bC, NC, zC, this.realTimeFiltering), bC.ENVIRONMENTBRDF && NC.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), bC.FUZZENVIRONMENTBRDF && NC.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), bC.REFRACTED_BACKGROUND && (NC.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), NC.x_("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), uC.j.Eg[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), NC.updateVector3("vBackgroundRefractionInfos", uC.j.Eg[1])), (bC.ANISOTROPIC || bC.FUZZ || bC.REFRACTED_BACKGROUND || bC.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && NC.setTexture("blueNoiseSampler", CC._noiseTextures[this.Km().uniqueId]), bC.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const CC = this.sssIrradianceTexture.getSize().width,
                    zC = this.sssIrradianceTexture.getSize().height;
                  NC.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), NC.setTexture("sceneDepthSampler", this.sssDepthTexture), NC.updateFloat2("renderTargetSize", CC, zC)
                }
              }
              this.Km().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ZC) && this.Km().depthPeelingRenderer.bind(nC), this._eventInfo.subMesh = QC, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Fz.g)(this._activeEffect, this, wC), this.bindEyePosition(nC)
            } else WC && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, wC, wC.mg(), QC), !FC && this.isFrozen && !WC || !wC.lightsEnabled || this._disableLighting || (0, kC.q)(wC, ZC, this._activeEffect, bC, this._maxSimultaneousLights), !FC && this.isFrozen || (this.bindView(nC), (0, kC.h)(wC, ZC, this._activeEffect, !0), bC.NUM_MORPH_INFLUENCERS && (0, kC.u)(ZC, this._activeEffect), bC.BAKED_VERTEX_ANIMATION_TEXTURE && ZC.bakedVertexAnimationManager?.bind(nC, bC.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, kC.t)(bC, this._activeEffect, wC)), this._afterBind(ZC, this._activeEffect, QC), NC.update()
          }
          getAnimatables() {
            const CC = super.getAnimatables();
            for (const zC in this._samplersList) {
              const ZC = this._samplersList[zC];
              ZC.value && ZC.value.animations && ZC.value.animations.length > 0 && CC.push(ZC.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && CC.push(this._radianceTexture), CC
          }
          getActiveTextures() {
            const CC = super.getActiveTextures();
            for (const zC in this._samplersList) {
              const ZC = this._samplersList[zC];
              ZC.value && CC.push(ZC.value)
            }
            return this._radianceTexture && CC.push(this._radianceTexture), CC
          }
          hasTexture(CC) {
            if (super.hasTexture(CC)) return !0;
            for (const zC in this._samplersList) {
              if (this._samplersList[zC].value === CC) return !0
            }
            return this._radianceTexture === CC
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(CC, zC) {
            if (this._breakShaderLoadedCheck = !0, zC) {
              this._environmentBRDFTexture && this.Km().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.Km().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const CC in this._samplersList) {
                const zC = this._samplersList[CC];
                zC.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(CC, zC)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.Km().environmentTexture
          }
          _prepareEffect(zC, ZC, QC) {
            let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              nC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              fC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(zC, ZC, QC, nC, fC), !QC.isDirty) return null;
            QC.markAsProcessed();
            const oC = this.Km().mg(),
              qC = new OC.c;
            let FC = 0;
            QC.USESPHERICALINVERTEX && qC.addFallback(FC++, "USESPHERICALINVERTEX"), QC.FOG && qC.addFallback(FC, "FOG"), QC.SPECULARAA && qC.addFallback(FC, "SPECULARAA"), QC.POINTSIZE && qC.addFallback(FC, "POINTSIZE"), QC.LOGARITHMICDEPTH && qC.addFallback(FC, "LOGARITHMICDEPTH"), QC.PARALLAX && qC.addFallback(FC, "PARALLAX"), QC.PARALLAX_RHS && qC.addFallback(FC, "PARALLAX_RHS"), QC.PARALLAXOCCLUSION && qC.addFallback(FC++, "PARALLAXOCCLUSION"), QC.ENVIRONMENTBRDF && qC.addFallback(FC++, "ENVIRONMENTBRDF"), QC.TANGENT && qC.addFallback(FC++, "TANGENT"), FC = (0, kC.F)(QC, qC, this._maxSimultaneousLights, FC), QC.SPECULARTERM && qC.addFallback(FC++, "SPECULARTERM"), QC.USESPHERICALFROMREFLECTIONMAP && qC.addFallback(FC++, "USESPHERICALFROMREFLECTIONMAP"), QC.USEIRRADIANCEMAP && qC.addFallback(FC++, "USEIRRADIANCEMAP"), QC.NORMAL && qC.addFallback(FC++, "NORMAL"), QC.VERTEXCOLOR && qC.addFallback(FC++, "VERTEXCOLOR"), QC.MORPHTARGETS && qC.addFallback(FC++, "MORPHTARGETS"), QC.MULTIVIEW && qC.addFallback(0, "MULTIVIEW");
            const WC = [rC.k.PositionKind];
            QC.NORMAL && WC.push(rC.k.NormalKind), QC.TANGENT && WC.push(rC.k.TangentKind);
            for (let CC = 1; CC <= 6; ++CC) QC["UV" + CC] && WC.push(`uv${1===CC?"":CC}`);
            QC.VERTEXCOLOR && WC.push(rC.k.ColorKind), (0, kC.K)(WC, zC, QC, qC), (0, kC.N)(WC, QC), (0, kC.Q)(WC, zC, QC), (0, kC.J)(WC, zC, QC);
            let NC = "openpbr";
            const MC = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const CC in this._uniformsList) MC.push(CC);
            const gC = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            QC.FUZZENVIRONMENTBRDF && gC.push("environmentFuzzBrdfSampler"), QC.REFRACTED_BACKGROUND && gC.push("backgroundRefractionSampler"), (QC.ANISOTROPIC || QC.FUZZ || QC.REFRACTED_BACKGROUND || QC.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && gC.push("blueNoiseSampler"), QC.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (gC.push("sceneIrradianceSampler"), gC.push("sceneDepthSampler"));
            for (const CC in this._samplersList) {
              const zC = this._samplersList[CC];
              gC.push(zC.samplerName), MC.push(zC.samplerInfoName), MC.push(zC.samplerMatrixName)
            }(0, kC.wb)(MC, gC, !0);
            const SC = ["Material", "Scene", "Mesh"],
              pC = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: QC.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = qC, this._eventInfo.fallbackRank = FC, this._eventInfo.defines = QC, this._eventInfo.uniforms = MC, this._eventInfo.attributes = WC, this._eventInfo.samplers = gC, this._eventInfo.uniformBuffersNames = SC, this._eventInfo.customCode = void 0, this._eventInfo.mesh = zC, this._eventInfo.indexParameters = pC, this._callbackPluginEventGeneric(128, this._eventInfo), Mz.e.AddUniformsAndSamplers(MC, gC), DC.c.AddUniforms(MC), DC.c.AddSamplers(gC), (0, Fz.d)(MC), this._useVertexPulling) {
              const CC = ZC?.geometry;
              CC && (this._vertexPullingMetadata = (0, Wz.d)(CC), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((CC, zC) => {
                MC.push(`vp_${zC}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            LC.e && (LC.e.PrepareUniforms(MC, QC), LC.e.PrepareSamplers(gC, QC)), (0, kC.xb)({
              uniformsNames: MC,
              uniformBuffersNames: SC,
              samplers: gC,
              defines: QC,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const PC = {};
            this.customShaderNameResolve && (NC = this.customShaderNameResolve(NC, MC, SC, gC, QC, WC, PC));
            const GC = QC.toString(),
              RC = oC.createEffect(NC, {
                attributes: WC,
                uniformsNames: MC,
                uniformBuffersNames: SC,
                samplers: gC,
                defines: GC,
                fallbacks: qC,
                onCompiled: wC,
                onError: bC,
                indexParameters: pC,
                processFinalCode: PC.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: QC.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: CC._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, oC);
            return this._eventInfo.customCode = void 0, RC
          }
          _prepareDefines(zC, ZC, QC) {
            let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              nC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const fC = ZC.hasThinInstances,
              oC = this.Km(),
              qC = oC.mg();
            (0, kC.db)(oC, zC, QC, !0, this._maxSimultaneousLights, this._disableLighting), QC._needNormals = !0, (0, kC.lb)(oC, QC);
            const FC = this.needAlphaBlendingForMesh(zC) && this.Km().useOrderIndependentTransparency;
            if ((0, kC.qb)(oC, QC, this.canRenderToMRT && !FC), (0, kC.nb)(oC, QC, FC), Mz.e.PrepareDefines(qC.currentRenderPassId, zC, QC), QC._areTexturesDirty) {
              QC._needUVs = !1;
              for (let CC = 1; CC <= 6; ++CC) QC["MAINUV" + CC] = !1;
              if (oC.texturesEnabled) {
                for (const ZC in this._samplersList) {
                  const CC = this._samplersList[ZC];
                  CC.value ? ((0, kC.gb)(CC.value, QC, CC.textureDefine), QC[CC.textureDefine + "_GAMMA"] = CC.value.gammaSpace) : QC[CC.textureDefine] = !1
                }
                const CC = this._getRadianceTexture(),
                  zC = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || qC.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, kC.ab)(oC, CC, QC, this.realTimeFiltering, this.realTimeFilteringQuality, !zC), this._baseMetalnessTexture && (QC.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), QC.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, QC.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, QC.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, QC.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, QC.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, QC.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, QC.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, QC.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, QC.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, QC.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, QC.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && BC.b.DiffuseTextureEnabled ? (QC.PARALLAX = !0, QC.PARALLAX_RHS = oC.useRightHandedSystem, QC.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : QC.PARALLAX = !1, QC.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (QC.PARALLAX = !1, QC.PARALLAX_RHS = !1, QC.PARALLAXOCCLUSION = !1, QC.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && BC.b.ReflectionTextureEnabled ? (QC.ENVIRONMENTBRDF = !0, QC.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (QC.ENVIRONMENTBRDF = !1, QC.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? QC.FUZZENVIRONMENTBRDF = !0 : QC.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  QC.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && BC.b.RefractionTextureEnabled, QC.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, QC.REFRACTED_LIGHTS = !0;
                  const CC = this._getRadianceTexture();
                  CC ? (QC.REFRACTED_ENVIRONMENT = BC.b.RefractionTextureEnabled, QC.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.Km().useRightHandedSystem ? !CC.invertZ : CC.invertZ, QC.REFRACTED_ENVIRONMENT_LOCAL_CUBE = CC.isCube && CC.boundingBoxSize) : QC.REFRACTED_ENVIRONMENT = !1
                } else QC.REFRACTED_BACKGROUND = !1, QC.REFRACTED_LIGHTS = !1, QC.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? QC.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : QC.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === bC.d.LIGHTFALLOFF_STANDARD ? (QC.USEPHYSICALLIGHTFALLOFF = !1, QC.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === bC.d.LIGHTFALLOFF_GLTF ? (QC.USEPHYSICALLIGHTFALLOFF = !1, QC.USEGLTFLIGHTFALLOFF = !0) : (QC.USEPHYSICALLIGHTFALLOFF = !0, QC.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? QC.TWOSIDEDLIGHTING = !0 : QC.TWOSIDEDLIGHTING = !1, QC.MIRRORED = !!oC._mirroredCameraPosition, QC.SPECULARAA = qC.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(QC._areTexturesDirty || QC._areMiscDirty) && (QC.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, QC.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, QC.ALPHABLEND = this.needAlphaBlendingForMesh(zC)), QC._areTexturesDirty && (QC.TEXTURE_REPETITION_MODE = qC.version > 1 || qC.isWebGPU ? this.textureRepetitionMode : 0), QC._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(QC), QC.FORCENORMALFORWARD = this._forceNormalForward, QC.RADIANCEOCCLUSION = this._useRadianceOcclusion, QC.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && CC._noiseTextures[oC.uniqueId] && BC.b.ReflectionTextureEnabled ? (QC.ANISOTROPIC = !0, zC.isVerticesDataPresent(rC.k.TangentKind) || (QC._needUVs = !0, QC.MAINUV1 = !0), this._useGltfStyleAnisotropy && (QC.USE_GLTF_STYLE_ANISOTROPY = !0), QC.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, QC.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (QC.ANISOTROPIC = !1, QC.USE_GLTF_STYLE_ANISOTROPY = !1, QC.ANISOTROPIC_BASE = !1, QC.ANISOTROPIC_COAT = !1), QC.THIN_FILM = this.thinFilmWeight > 0, QC.IRIDESCENCE = this.thinFilmWeight > 0, QC.DISPERSION = this.transmissionDispersionScale > 0, QC.SCATTERING = this.hasScattering;
            if (QC.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, QC.TRANSMISSION_SLAB = this.transmissionWeight > 0, QC.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, QC.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !QC.PREPASS && (QC.SUBSURFACE_SLAB || QC.TRANSMISSION_SLAB_VOLUME)) {
              let CC = !1;
              if (!this.sssIrradianceTexture && oC.geometryBufferRenderer) {
                const zC = oC.geometryBufferRenderer.getTextureIndex(sz.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = oC.geometryBufferRenderer.getGBuffer().textures[zC], CC = !0
              }
              if (!this.sssDepthTexture && oC.geometryBufferRenderer) {
                const zC = oC.geometryBufferRenderer.getTextureIndex(sz.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = oC.geometryBufferRenderer.getGBuffer().textures[zC], CC = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (QC.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, CC && (QC.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            QC.FUZZ = this.fuzzWeight > 0 && BC.b.ReflectionTextureEnabled, QC.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, QC.FUZZ ? (zC.isVerticesDataPresent(rC.k.TangentKind) || (QC._needUVs = !0, QC.MAINUV1 = !0), this._environmentFuzzBRDFTexture = lC(this.Km()), QC.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, QC.FUZZENVIRONMENTBRDF = !1, QC.FUZZ_IBL_SAMPLES = 0), QC._areMiscDirty && ((0, kC.ib)(zC, oC, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(zC), QC, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ZC, this._isVertexOutputInvariant), QC.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !zC.isVerticesDataPresent(rC.k.NormalKind), QC.DEBUGMODE = this._debugMode), (0, kC.Z)(oC, qC, this, QC, !!wC, nC, fC), this._eventInfo.defines = QC, this._eventInfo.mesh = zC, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, kC.X)(zC, QC, !0, !0, !0, this._transparencyMode !== bC.d.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, zC = new WeakMap, QC = new WeakMap, wC = new WeakMap, nC = new WeakMap, fC = new WeakMap, oC = new WeakMap, qC = new WeakMap, FC = new WeakMap, WC = new WeakMap, NC = new WeakMap, MC = new WeakMap, gC = new WeakMap, SC = new WeakMap, pC = new WeakMap, PC = new WeakMap, GC = new WeakMap, RC = new WeakMap, AC = new WeakMap, xC = new WeakMap, JC = new WeakMap, IC = new WeakMap, iC = new WeakMap, dC = new WeakMap, mC = new WeakMap, HC = new WeakMap, EC = new WeakMap, cC = new WeakMap, sC = new WeakMap, TC = new WeakMap, aC = new WeakMap, tC = new WeakMap, yC = new WeakMap, UC = new WeakMap, VC = new WeakMap, Cz = new WeakMap, zz = new WeakMap, Zz = new WeakMap, Qz = new WeakMap, wz = new WeakMap, bz = new WeakMap, nz = new WeakMap, fz = new WeakMap, oz = new WeakMap, qz = new WeakMap, gz = new WeakMap, Sz = new WeakMap, pz = new WeakMap, Pz = new WeakMap, Gz = new WeakMap, Rz = new WeakMap, Az = new WeakMap, xz = new WeakMap, Jz = new WeakMap, vz = new WeakMap, ez = new WeakMap, hz = new WeakMap, Kz = new WeakMap, Yz = new WeakMap, dz = new WeakMap, mz = new WeakMap, Hz = new WeakMap, Ez = new WeakMap, lz = new WeakMap, Xz = new WeakMap, cz = new WeakMap, uz = new WeakMap, rz = new WeakMap, Tz = new WeakMap, tz = new WeakMap, Lz = new WeakMap, Uz = new WeakMap, kz = new WeakMap, Vz = new WeakMap, CZ = new WeakMap, zZ = new WeakMap, ZZ = new WeakMap, QZ = new WeakMap, wZ = new WeakMap, bZ = new WeakMap, nZ = new WeakMap, fZ = new WeakMap, oZ = new WeakMap, qZ = new WeakMap, FZ = new WeakMap, WZ = new WeakMap, NZ = new WeakMap, MZ = new WeakMap, gZ = new WeakMap, SZ = new WeakMap, pZ = new WeakMap, PZ = new WeakMap, GZ = new WeakMap, RZ = new WeakMap, AZ = new WeakMap, xZ = new WeakMap, JZ = new WeakMap, IZ = new WeakMap, iZ = new WeakMap, vZ = new WeakMap, eZ = new WeakMap, hZ = new WeakMap, KZ = new WeakMap, (() => {
          const zC = "function" === typeof Symbol && Symbol.metadata ? Object.create(dw[Symbol.metadata] ?? null) : void 0;
          YZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], dZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], mZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], HZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], EZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], lZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], XZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], cZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], uZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], rZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], sZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], TZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], aZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], tZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], DZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], jZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], yZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], LZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], UZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], BZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], OZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], kZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], VZ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], CQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], zQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], ZQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], QQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], wQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], bQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], nQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], fQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], oQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], qQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], FQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], WQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], NQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], MQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], gQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], SQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], pQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], PQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], GQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], RQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], AQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], xQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], JQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], IQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], iQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], vQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], eQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], hQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], KQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], YQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], dQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], mQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], HQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], EQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], lQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], XQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], cQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], uQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], rQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], sQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], TQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], aQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], tQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], DQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], jQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], yQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], LQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], UQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], BQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], OQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], kQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], VQ = [(0, eC.c)("_markAllSubMeshesAsTexturesDirty")], Cw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], zw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Zw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Qw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], ww = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], bw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], nw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], fw = [(0, eC.M)()], ow = [(0, eC.M)()], qw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Fw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Ww = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Nw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Mw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsLightsDirty")], gw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Sw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsLightsDirty")], pw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Pw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Gw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Rw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Aw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], xw = [(0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Jw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Iw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], iw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], vw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], ew = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsMiscDirty")], hw = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsMiscDirty")], Kw = [(0, eC.d)("_markAllSubMeshesAsMiscDirty")], Yw = [(0, eC.M)()], (0, vC.j)(CC, null, YZ, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: CC => "baseWeight" in CC,
              get: CC => CC.baseWeight,
              set: (CC, zC) => {
                CC.baseWeight = zC
              }
            },
            metadata: zC
          }, Hw, Ew), (0, vC.j)(CC, null, dZ, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "baseWeightTexture" in CC,
              get: CC => CC.baseWeightTexture,
              set: (CC, zC) => {
                CC.baseWeightTexture = zC
              }
            },
            metadata: zC
          }, lw, Xw), (0, vC.j)(CC, null, mZ, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: CC => "baseColor" in CC,
              get: CC => CC.baseColor,
              set: (CC, zC) => {
                CC.baseColor = zC
              }
            },
            metadata: zC
          }, uw, rw), (0, vC.j)(CC, null, HZ, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "baseColorTexture" in CC,
              get: CC => CC.baseColorTexture,
              set: (CC, zC) => {
                CC.baseColorTexture = zC
              }
            },
            metadata: zC
          }, sw, Tw), (0, vC.j)(CC, null, EZ, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: CC => "baseDiffuseRoughness" in CC,
              get: CC => CC.baseDiffuseRoughness,
              set: (CC, zC) => {
                CC.baseDiffuseRoughness = zC
              }
            },
            metadata: zC
          }, aw, tw), (0, vC.j)(CC, null, lZ, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "baseDiffuseRoughnessTexture" in CC,
              get: CC => CC.baseDiffuseRoughnessTexture,
              set: (CC, zC) => {
                CC.baseDiffuseRoughnessTexture = zC
              }
            },
            metadata: zC
          }, Dw, jw), (0, vC.j)(CC, null, XZ, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: CC => "baseMetalness" in CC,
              get: CC => CC.baseMetalness,
              set: (CC, zC) => {
                CC.baseMetalness = zC
              }
            },
            metadata: zC
          }, yw, Lw), (0, vC.j)(CC, null, cZ, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "baseMetalnessTexture" in CC,
              get: CC => CC.baseMetalnessTexture,
              set: (CC, zC) => {
                CC.baseMetalnessTexture = zC
              }
            },
            metadata: zC
          }, Uw, Bw), (0, vC.j)(CC, null, uZ, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: CC => "specularWeight" in CC,
              get: CC => CC.specularWeight,
              set: (CC, zC) => {
                CC.specularWeight = zC
              }
            },
            metadata: zC
          }, Ow, kw), (0, vC.j)(CC, null, rZ, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "specularWeightTexture" in CC,
              get: CC => CC.specularWeightTexture,
              set: (CC, zC) => {
                CC.specularWeightTexture = zC
              }
            },
            metadata: zC
          }, Vw, Cb), (0, vC.j)(CC, null, sZ, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: CC => "specularColor" in CC,
              get: CC => CC.specularColor,
              set: (CC, zC) => {
                CC.specularColor = zC
              }
            },
            metadata: zC
          }, zb, Zb), (0, vC.j)(CC, null, TZ, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "specularColorTexture" in CC,
              get: CC => CC.specularColorTexture,
              set: (CC, zC) => {
                CC.specularColorTexture = zC
              }
            },
            metadata: zC
          }, Qb, wb), (0, vC.j)(CC, null, aZ, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: CC => "specularRoughness" in CC,
              get: CC => CC.specularRoughness,
              set: (CC, zC) => {
                CC.specularRoughness = zC
              }
            },
            metadata: zC
          }, bb, nb), (0, vC.j)(CC, null, tZ, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "specularRoughnessTexture" in CC,
              get: CC => CC.specularRoughnessTexture,
              set: (CC, zC) => {
                CC.specularRoughnessTexture = zC
              }
            },
            metadata: zC
          }, fb, ob), (0, vC.j)(CC, null, DZ, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: CC => "specularRoughnessAnisotropy" in CC,
              get: CC => CC.specularRoughnessAnisotropy,
              set: (CC, zC) => {
                CC.specularRoughnessAnisotropy = zC
              }
            },
            metadata: zC
          }, qb, Fb), (0, vC.j)(CC, null, jZ, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "specularRoughnessAnisotropyTexture" in CC,
              get: CC => CC.specularRoughnessAnisotropyTexture,
              set: (CC, zC) => {
                CC.specularRoughnessAnisotropyTexture = zC
              }
            },
            metadata: zC
          }, Wb, Nb), (0, vC.j)(CC, null, yZ, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: CC => "specularIor" in CC,
              get: CC => CC.specularIor,
              set: (CC, zC) => {
                CC.specularIor = zC
              }
            },
            metadata: zC
          }, Mb, gb), (0, vC.j)(CC, null, LZ, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: CC => "transmissionWeight" in CC,
              get: CC => CC.transmissionWeight,
              set: (CC, zC) => {
                CC.transmissionWeight = zC
              }
            },
            metadata: zC
          }, Sb, pb), (0, vC.j)(CC, null, UZ, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "transmissionWeightTexture" in CC,
              get: CC => CC.transmissionWeightTexture,
              set: (CC, zC) => {
                CC.transmissionWeightTexture = zC
              }
            },
            metadata: zC
          }, Pb, Gb), (0, vC.j)(CC, null, BZ, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: CC => "transmissionColor" in CC,
              get: CC => CC.transmissionColor,
              set: (CC, zC) => {
                CC.transmissionColor = zC
              }
            },
            metadata: zC
          }, Rb, Ab), (0, vC.j)(CC, null, OZ, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "transmissionColorTexture" in CC,
              get: CC => CC.transmissionColorTexture,
              set: (CC, zC) => {
                CC.transmissionColorTexture = zC
              }
            },
            metadata: zC
          }, xb, Jb), (0, vC.j)(CC, null, kZ, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: CC => "transmissionDepth" in CC,
              get: CC => CC.transmissionDepth,
              set: (CC, zC) => {
                CC.transmissionDepth = zC
              }
            },
            metadata: zC
          }, Ib, ib), (0, vC.j)(CC, null, VZ, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "transmissionDepthTexture" in CC,
              get: CC => CC.transmissionDepthTexture,
              set: (CC, zC) => {
                CC.transmissionDepthTexture = zC
              }
            },
            metadata: zC
          }, vb, eb), (0, vC.j)(CC, null, CQ, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: CC => "transmissionScatter" in CC,
              get: CC => CC.transmissionScatter,
              set: (CC, zC) => {
                CC.transmissionScatter = zC
              }
            },
            metadata: zC
          }, hb, Kb), (0, vC.j)(CC, null, zQ, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "transmissionScatterTexture" in CC,
              get: CC => CC.transmissionScatterTexture,
              set: (CC, zC) => {
                CC.transmissionScatterTexture = zC
              }
            },
            metadata: zC
          }, Yb, db), (0, vC.j)(CC, null, ZQ, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: CC => "transmissionScatterAnisotropy" in CC,
              get: CC => CC.transmissionScatterAnisotropy,
              set: (CC, zC) => {
                CC.transmissionScatterAnisotropy = zC
              }
            },
            metadata: zC
          }, mb, Hb), (0, vC.j)(CC, null, QQ, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: CC => "transmissionDispersionScale" in CC,
              get: CC => CC.transmissionDispersionScale,
              set: (CC, zC) => {
                CC.transmissionDispersionScale = zC
              }
            },
            metadata: zC
          }, Eb, lb), (0, vC.j)(CC, null, wQ, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "transmissionDispersionScaleTexture" in CC,
              get: CC => CC.transmissionDispersionScaleTexture,
              set: (CC, zC) => {
                CC.transmissionDispersionScaleTexture = zC
              }
            },
            metadata: zC
          }, Xb, cb), (0, vC.j)(CC, null, bQ, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: CC => "transmissionDispersionAbbeNumber" in CC,
              get: CC => CC.transmissionDispersionAbbeNumber,
              set: (CC, zC) => {
                CC.transmissionDispersionAbbeNumber = zC
              }
            },
            metadata: zC
          }, ub, rb), (0, vC.j)(CC, null, nQ, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: CC => "subsurfaceWeight" in CC,
              get: CC => CC.subsurfaceWeight,
              set: (CC, zC) => {
                CC.subsurfaceWeight = zC
              }
            },
            metadata: zC
          }, sb, Tb), (0, vC.j)(CC, null, fQ, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "subsurfaceWeightTexture" in CC,
              get: CC => CC.subsurfaceWeightTexture,
              set: (CC, zC) => {
                CC.subsurfaceWeightTexture = zC
              }
            },
            metadata: zC
          }, ab, tb), (0, vC.j)(CC, null, oQ, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: CC => "subsurfaceColor" in CC,
              get: CC => CC.subsurfaceColor,
              set: (CC, zC) => {
                CC.subsurfaceColor = zC
              }
            },
            metadata: zC
          }, Db, jb), (0, vC.j)(CC, null, qQ, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "subsurfaceColorTexture" in CC,
              get: CC => CC.subsurfaceColorTexture,
              set: (CC, zC) => {
                CC.subsurfaceColorTexture = zC
              }
            },
            metadata: zC
          }, yb, Lb), (0, vC.j)(CC, null, FQ, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: CC => "subsurfaceRadius" in CC,
              get: CC => CC.subsurfaceRadius,
              set: (CC, zC) => {
                CC.subsurfaceRadius = zC
              }
            },
            metadata: zC
          }, Ub, Bb), (0, vC.j)(CC, null, WQ, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: CC => "subsurfaceRadiusScale" in CC,
              get: CC => CC.subsurfaceRadiusScale,
              set: (CC, zC) => {
                CC.subsurfaceRadiusScale = zC
              }
            },
            metadata: zC
          }, Ob, kb), (0, vC.j)(CC, null, NQ, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "subsurfaceRadiusScaleTexture" in CC,
              get: CC => CC.subsurfaceRadiusScaleTexture,
              set: (CC, zC) => {
                CC.subsurfaceRadiusScaleTexture = zC
              }
            },
            metadata: zC
          }, Vb, Cn), (0, vC.j)(CC, null, MQ, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: CC => "subsurfaceScatterAnisotropy" in CC,
              get: CC => CC.subsurfaceScatterAnisotropy,
              set: (CC, zC) => {
                CC.subsurfaceScatterAnisotropy = zC
              }
            },
            metadata: zC
          }, zn, Zn), (0, vC.j)(CC, null, gQ, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: CC => "coatWeight" in CC,
              get: CC => CC.coatWeight,
              set: (CC, zC) => {
                CC.coatWeight = zC
              }
            },
            metadata: zC
          }, Qn, wn), (0, vC.j)(CC, null, SQ, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "coatWeightTexture" in CC,
              get: CC => CC.coatWeightTexture,
              set: (CC, zC) => {
                CC.coatWeightTexture = zC
              }
            },
            metadata: zC
          }, bn, nn), (0, vC.j)(CC, null, pQ, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: CC => "coatColor" in CC,
              get: CC => CC.coatColor,
              set: (CC, zC) => {
                CC.coatColor = zC
              }
            },
            metadata: zC
          }, fn, qn), (0, vC.j)(CC, null, PQ, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "coatColorTexture" in CC,
              get: CC => CC.coatColorTexture,
              set: (CC, zC) => {
                CC.coatColorTexture = zC
              }
            },
            metadata: zC
          }, Fn, Wn), (0, vC.j)(CC, null, GQ, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: CC => "coatRoughness" in CC,
              get: CC => CC.coatRoughness,
              set: (CC, zC) => {
                CC.coatRoughness = zC
              }
            },
            metadata: zC
          }, Nn, Mn), (0, vC.j)(CC, null, RQ, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "coatRoughnessTexture" in CC,
              get: CC => CC.coatRoughnessTexture,
              set: (CC, zC) => {
                CC.coatRoughnessTexture = zC
              }
            },
            metadata: zC
          }, gn, Sn), (0, vC.j)(CC, null, AQ, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: CC => "coatRoughnessAnisotropy" in CC,
              get: CC => CC.coatRoughnessAnisotropy,
              set: (CC, zC) => {
                CC.coatRoughnessAnisotropy = zC
              }
            },
            metadata: zC
          }, pn, Pn), (0, vC.j)(CC, null, xQ, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "coatRoughnessAnisotropyTexture" in CC,
              get: CC => CC.coatRoughnessAnisotropyTexture,
              set: (CC, zC) => {
                CC.coatRoughnessAnisotropyTexture = zC
              }
            },
            metadata: zC
          }, Gn, Rn), (0, vC.j)(CC, null, JQ, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: CC => "coatIor" in CC,
              get: CC => CC.coatIor,
              set: (CC, zC) => {
                CC.coatIor = zC
              }
            },
            metadata: zC
          }, An, xn), (0, vC.j)(CC, null, IQ, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: CC => "coatDarkening" in CC,
              get: CC => CC.coatDarkening,
              set: (CC, zC) => {
                CC.coatDarkening = zC
              }
            },
            metadata: zC
          }, Jn, In), (0, vC.j)(CC, null, iQ, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "coatDarkeningTexture" in CC,
              get: CC => CC.coatDarkeningTexture,
              set: (CC, zC) => {
                CC.coatDarkeningTexture = zC
              }
            },
            metadata: zC
          }, vn, en), (0, vC.j)(CC, null, vQ, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: CC => "fuzzWeight" in CC,
              get: CC => CC.fuzzWeight,
              set: (CC, zC) => {
                CC.fuzzWeight = zC
              }
            },
            metadata: zC
          }, hn, Kn), (0, vC.j)(CC, null, eQ, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "fuzzWeightTexture" in CC,
              get: CC => CC.fuzzWeightTexture,
              set: (CC, zC) => {
                CC.fuzzWeightTexture = zC
              }
            },
            metadata: zC
          }, Yn, dn), (0, vC.j)(CC, null, hQ, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: CC => "fuzzColor" in CC,
              get: CC => CC.fuzzColor,
              set: (CC, zC) => {
                CC.fuzzColor = zC
              }
            },
            metadata: zC
          }, mn, Hn), (0, vC.j)(CC, null, KQ, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "fuzzColorTexture" in CC,
              get: CC => CC.fuzzColorTexture,
              set: (CC, zC) => {
                CC.fuzzColorTexture = zC
              }
            },
            metadata: zC
          }, En, Xn), (0, vC.j)(CC, null, YQ, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: CC => "fuzzRoughness" in CC,
              get: CC => CC.fuzzRoughness,
              set: (CC, zC) => {
                CC.fuzzRoughness = zC
              }
            },
            metadata: zC
          }, cn, un), (0, vC.j)(CC, null, dQ, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "fuzzRoughnessTexture" in CC,
              get: CC => CC.fuzzRoughnessTexture,
              set: (CC, zC) => {
                CC.fuzzRoughnessTexture = zC
              }
            },
            metadata: zC
          }, rn, sn), (0, vC.j)(CC, null, mQ, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: CC => "geometryThinWalled" in CC,
              get: CC => CC.geometryThinWalled,
              set: (CC, zC) => {
                CC.geometryThinWalled = zC
              }
            },
            metadata: zC
          }, Tn, an), (0, vC.j)(CC, null, HQ, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "geometryNormalTexture" in CC,
              get: CC => CC.geometryNormalTexture,
              set: (CC, zC) => {
                CC.geometryNormalTexture = zC
              }
            },
            metadata: zC
          }, tn, Dn), (0, vC.j)(CC, null, EQ, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: CC => "geometryTangent" in CC,
              get: CC => CC.geometryTangent,
              set: (CC, zC) => {
                CC.geometryTangent = zC
              }
            },
            metadata: zC
          }, jn, yn), (0, vC.j)(CC, null, lQ, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "geometryTangentTexture" in CC,
              get: CC => CC.geometryTangentTexture,
              set: (CC, zC) => {
                CC.geometryTangentTexture = zC
              }
            },
            metadata: zC
          }, Ln, Un), (0, vC.j)(CC, null, XQ, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "geometryCoatNormalTexture" in CC,
              get: CC => CC.geometryCoatNormalTexture,
              set: (CC, zC) => {
                CC.geometryCoatNormalTexture = zC
              }
            },
            metadata: zC
          }, Bn, On), (0, vC.j)(CC, null, cQ, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: CC => "geometryCoatTangent" in CC,
              get: CC => CC.geometryCoatTangent,
              set: (CC, zC) => {
                CC.geometryCoatTangent = zC
              }
            },
            metadata: zC
          }, kn, Vn), (0, vC.j)(CC, null, uQ, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "geometryCoatTangentTexture" in CC,
              get: CC => CC.geometryCoatTangentTexture,
              set: (CC, zC) => {
                CC.geometryCoatTangentTexture = zC
              }
            },
            metadata: zC
          }, Cf, zf), (0, vC.j)(CC, null, rQ, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: CC => "geometryOpacity" in CC,
              get: CC => CC.geometryOpacity,
              set: (CC, zC) => {
                CC.geometryOpacity = zC
              }
            },
            metadata: zC
          }, Zf, Qf), (0, vC.j)(CC, null, sQ, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "geometryOpacityTexture" in CC,
              get: CC => CC.geometryOpacityTexture,
              set: (CC, zC) => {
                CC.geometryOpacityTexture = zC
              }
            },
            metadata: zC
          }, wf, bf), (0, vC.j)(CC, null, TQ, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: CC => "geometryThickness" in CC,
              get: CC => CC.geometryThickness,
              set: (CC, zC) => {
                CC.geometryThickness = zC
              }
            },
            metadata: zC
          }, nf, ff), (0, vC.j)(CC, null, aQ, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "geometryThicknessTexture" in CC,
              get: CC => CC.geometryThicknessTexture,
              set: (CC, zC) => {
                CC.geometryThicknessTexture = zC
              }
            },
            metadata: zC
          }, of, qf), (0, vC.j)(CC, null, tQ, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: CC => "emissionLuminance" in CC,
              get: CC => CC.emissionLuminance,
              set: (CC, zC) => {
                CC.emissionLuminance = zC
              }
            },
            metadata: zC
          }, Ff, Wf), (0, vC.j)(CC, null, DQ, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: CC => "emissionColor" in CC,
              get: CC => CC.emissionColor,
              set: (CC, zC) => {
                CC.emissionColor = zC
              }
            },
            metadata: zC
          }, Nf, Mf), (0, vC.j)(CC, null, jQ, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "emissionColorTexture" in CC,
              get: CC => CC.emissionColorTexture,
              set: (CC, zC) => {
                CC.emissionColorTexture = zC
              }
            },
            metadata: zC
          }, gf, Sf), (0, vC.j)(CC, null, yQ, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: CC => "thinFilmWeight" in CC,
              get: CC => CC.thinFilmWeight,
              set: (CC, zC) => {
                CC.thinFilmWeight = zC
              }
            },
            metadata: zC
          }, pf, Pf), (0, vC.j)(CC, null, LQ, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "thinFilmWeightTexture" in CC,
              get: CC => CC.thinFilmWeightTexture,
              set: (CC, zC) => {
                CC.thinFilmWeightTexture = zC
              }
            },
            metadata: zC
          }, Gf, Rf), (0, vC.j)(CC, null, UQ, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: CC => "thinFilmThickness" in CC,
              get: CC => CC.thinFilmThickness,
              set: (CC, zC) => {
                CC.thinFilmThickness = zC
              }
            },
            metadata: zC
          }, Af, xf), (0, vC.j)(CC, null, BQ, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: CC => "thinFilmThicknessMin" in CC,
              get: CC => CC.thinFilmThicknessMin,
              set: (CC, zC) => {
                CC.thinFilmThicknessMin = zC
              }
            },
            metadata: zC
          }, Jf, If), (0, vC.j)(CC, null, OQ, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "thinFilmThicknessTexture" in CC,
              get: CC => CC.thinFilmThicknessTexture,
              set: (CC, zC) => {
                CC.thinFilmThicknessTexture = zC
              }
            },
            metadata: zC
          }, vf, ef), (0, vC.j)(CC, null, kQ, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: CC => "thinFilmIor" in CC,
              get: CC => CC.thinFilmIor,
              set: (CC, zC) => {
                CC.thinFilmIor = zC
              }
            },
            metadata: zC
          }, hf, Kf), (0, vC.j)(CC, null, VQ, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "ambientOcclusionTexture" in CC,
              get: CC => CC.ambientOcclusionTexture,
              set: (CC, zC) => {
                CC.ambientOcclusionTexture = zC
              }
            },
            metadata: zC
          }, Yf, df), (0, vC.j)(CC, null, Cw, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: CC => "directIntensity" in CC,
              get: CC => CC.directIntensity,
              set: (CC, zC) => {
                CC.directIntensity = zC
              }
            },
            metadata: zC
          }, mf, Hf), (0, vC.j)(CC, null, zw, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: CC => "environmentIntensity" in CC,
              get: CC => CC.environmentIntensity,
              set: (CC, zC) => {
                CC.environmentIntensity = zC
              }
            },
            metadata: zC
          }, Ef, lf), (0, vC.j)(CC, null, Zw, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: CC => "useSpecularWeightFromTextureAlpha" in CC,
              get: CC => CC.useSpecularWeightFromTextureAlpha,
              set: (CC, zC) => {
                CC.useSpecularWeightFromTextureAlpha = zC
              }
            },
            metadata: zC
          }, Xf, uf), (0, vC.j)(CC, null, Qw, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: CC => "forceAlphaTest" in CC,
              get: CC => CC.forceAlphaTest,
              set: (CC, zC) => {
                CC.forceAlphaTest = zC
              }
            },
            metadata: zC
          }, rf, sf), (0, vC.j)(CC, null, ww, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: CC => "alphaCutOff" in CC,
              get: CC => CC.alphaCutOff,
              set: (CC, zC) => {
                CC.alphaCutOff = zC
              }
            },
            metadata: zC
          }, Tf, af), (0, vC.j)(CC, null, bw, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: CC => "useAmbientOcclusionFromMetallicTextureRed" in CC,
              get: CC => CC.useAmbientOcclusionFromMetallicTextureRed,
              set: (CC, zC) => {
                CC.useAmbientOcclusionFromMetallicTextureRed = zC
              }
            },
            metadata: zC
          }, tf, Df), (0, vC.j)(CC, null, nw, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: CC => "useAmbientInGrayScale" in CC,
              get: CC => CC.useAmbientInGrayScale,
              set: (CC, zC) => {
                CC.useAmbientInGrayScale = zC
              }
            },
            metadata: zC
          }, jf, yf), (0, vC.j)(CC, null, fw, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: CC => "usePhysicalLightFalloff" in CC,
              get: CC => CC.usePhysicalLightFalloff
            },
            metadata: zC
          }, null, mw), (0, vC.j)(CC, null, ow, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: CC => "useGLTFLightFalloff" in CC,
              get: CC => CC.useGLTFLightFalloff
            },
            metadata: zC
          }, null, mw), (0, vC.j)(CC, null, qw, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: CC => "useObjectSpaceNormalMap" in CC,
              get: CC => CC.useObjectSpaceNormalMap,
              set: (CC, zC) => {
                CC.useObjectSpaceNormalMap = zC
              }
            },
            metadata: zC
          }, Lf, Uf), (0, vC.j)(CC, null, Fw, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: CC => "useParallax" in CC,
              get: CC => CC.useParallax,
              set: (CC, zC) => {
                CC.useParallax = zC
              }
            },
            metadata: zC
          }, Bf, Of), (0, vC.j)(CC, null, Ww, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: CC => "useParallaxOcclusion" in CC,
              get: CC => CC.useParallaxOcclusion,
              set: (CC, zC) => {
                CC.useParallaxOcclusion = zC
              }
            },
            metadata: zC
          }, kf, Vf), (0, vC.j)(CC, null, Nw, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: CC => "parallaxScaleBias" in CC,
              get: CC => CC.parallaxScaleBias,
              set: (CC, zC) => {
                CC.parallaxScaleBias = zC
              }
            },
            metadata: zC
          }, Co, zo), (0, vC.j)(CC, null, Mw, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: CC => "disableLighting" in CC,
              get: CC => CC.disableLighting,
              set: (CC, zC) => {
                CC.disableLighting = zC
              }
            },
            metadata: zC
          }, Zo, Qo), (0, vC.j)(CC, null, gw, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: CC => "forceIrradianceInFragment" in CC,
              get: CC => CC.forceIrradianceInFragment,
              set: (CC, zC) => {
                CC.forceIrradianceInFragment = zC
              }
            },
            metadata: zC
          }, wo, bo), (0, vC.j)(CC, null, Sw, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: CC => "maxSimultaneousLights" in CC,
              get: CC => CC.maxSimultaneousLights,
              set: (CC, zC) => {
                CC.maxSimultaneousLights = zC
              }
            },
            metadata: zC
          }, no, fo), (0, vC.j)(CC, null, pw, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: CC => "invertNormalMapX" in CC,
              get: CC => CC.invertNormalMapX,
              set: (CC, zC) => {
                CC.invertNormalMapX = zC
              }
            },
            metadata: zC
          }, oo, qo), (0, vC.j)(CC, null, Pw, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: CC => "invertNormalMapY" in CC,
              get: CC => CC.invertNormalMapY,
              set: (CC, zC) => {
                CC.invertNormalMapY = zC
              }
            },
            metadata: zC
          }, Fo, Wo), (0, vC.j)(CC, null, Gw, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: CC => "twoSidedLighting" in CC,
              get: CC => CC.twoSidedLighting,
              set: (CC, zC) => {
                CC.twoSidedLighting = zC
              }
            },
            metadata: zC
          }, No, Mo), (0, vC.j)(CC, null, Rw, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: CC => "useAlphaFresnel" in CC,
              get: CC => CC.useAlphaFresnel,
              set: (CC, zC) => {
                CC.useAlphaFresnel = zC
              }
            },
            metadata: zC
          }, go, So), (0, vC.j)(CC, null, Aw, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: CC => "useLinearAlphaFresnel" in CC,
              get: CC => CC.useLinearAlphaFresnel,
              set: (CC, zC) => {
                CC.useLinearAlphaFresnel = zC
              }
            },
            metadata: zC
          }, po, Po), (0, vC.j)(CC, null, xw, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "environmentBRDFTexture" in CC,
              get: CC => CC.environmentBRDFTexture,
              set: (CC, zC) => {
                CC.environmentBRDFTexture = zC
              }
            },
            metadata: zC
          }, Go, Ro), (0, vC.j)(CC, null, Jw, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: CC => "forceNormalForward" in CC,
              get: CC => CC.forceNormalForward,
              set: (CC, zC) => {
                CC.forceNormalForward = zC
              }
            },
            metadata: zC
          }, Ao, xo), (0, vC.j)(CC, null, Iw, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: CC => "enableSpecularAntiAliasing" in CC,
              get: CC => CC.enableSpecularAntiAliasing,
              set: (CC, zC) => {
                CC.enableSpecularAntiAliasing = zC
              }
            },
            metadata: zC
          }, Jo, Io), (0, vC.j)(CC, null, iw, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: CC => "useHorizonOcclusion" in CC,
              get: CC => CC.useHorizonOcclusion,
              set: (CC, zC) => {
                CC.useHorizonOcclusion = zC
              }
            },
            metadata: zC
          }, io, vo), (0, vC.j)(CC, null, vw, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: CC => "useRadianceOcclusion" in CC,
              get: CC => CC.useRadianceOcclusion,
              set: (CC, zC) => {
                CC.useRadianceOcclusion = zC
              }
            },
            metadata: zC
          }, eo, ho), (0, vC.j)(CC, null, ew, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: CC => "unlit" in CC,
              get: CC => CC.unlit,
              set: (CC, zC) => {
                CC.unlit = zC
              }
            },
            metadata: zC
          }, Ko, Yo), (0, vC.j)(CC, null, hw, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: CC => "applyDecalMapAfterDetailMap" in CC,
              get: CC => CC.applyDecalMapAfterDetailMap,
              set: (CC, zC) => {
                CC.applyDecalMapAfterDetailMap = zC
              }
            },
            metadata: zC
          }, mo, Ho), (0, vC.j)(CC, null, Kw, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: CC => "debugMode" in CC,
              get: CC => CC.debugMode,
              set: (CC, zC) => {
                CC.debugMode = zC
              }
            },
            metadata: zC
          }, Eo, Xo), (0, vC.j)(CC, null, Yw, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: CC => "transparencyMode" in CC,
              get: CC => CC.transparencyMode
            },
            metadata: zC
          }, null, mw), zC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zC
          })
        })(), CC.SSS_QUALITY_LOW = 0, CC.SSS_QUALITY_MEDIUM = 1, CC.SSS_QUALITY_HIGH = 2, CC._noiseTextures = {}, CC.ForceGLSL = !1, CC._ShaderLoader = new Nz.c((() => [Promise.all([ZC.e(317), ZC.e(381)]).then((() => ZC(61395))), Promise.all([ZC.e(322), ZC.e(318), ZC.e(380), ZC.e(385)]).then((() => ZC(61406)))]), (() => [Promise.all([ZC.e(336), ZC.e(338), ZC.e(384)]).then((() => ZC(61447))), Promise.all([ZC.e(336), ZC.e(339), ZC.e(383), ZC.e(386)]).then((() => ZC(61462)))])), CC
      })(),
      Vz = !1;
    Vz || (Vz = !0, (0, LC.f)(), (0, Tz.d)("BABYLON.OpenPBRMaterial", kz));
    var CZ = ZC(36987);
    class zZ {
      constructor(CC) {
        this.name = Ez.b.NAME_PROCEDURALTEXTURE, this.sS = CC
      }
      register() {
        this.sS._beforeClearStage.registerStep(Ez.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.sS.proceduralTexturesEnabled) {
          iz.g.StartPerformanceCounter("Procedural textures", this.sS.proceduralTextures.length > 0);
          for (let CC = 0; CC < this.sS.proceduralTextures.length; CC++) {
            const zC = this.sS.proceduralTextures[CC];
            zC._shouldRender() && zC.render()
          }
          iz.g.EndPerformanceCounter("Procedural textures", this.sS.proceduralTextures.length > 0)
        }
      }
    }
    var ZZ = ZC(40148);
    let QZ = (() => {
      var CC;
      let zC, QC, wC, nC, fC, oC = YC.h,
        qC = [],
        FC = [],
        WC = [],
        NC = [],
        MC = [],
        gC = [],
        pC = [],
        PC = [],
        GC = [];
      return CC = class extends oC {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(CC, zC, ZC, QC) {
          let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, QC, !bC), this.isEnabled = ((0, vC.n)(this, qC), (0, vC.n)(this, FC, !0)), this.autoClear = ((0, vC.n)(this, WC), (0, vC.n)(this, NC, !0)), this.onGenerated = (0, vC.n)(this, MC), this.onGeneratedObservable = new CZ.d, this.onBeforeGenerationObservable = new CZ.d, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, vC.n)(this, gC, void 0), this._drawWrapper = (0, vC.n)(this, pC), this._textures = {}, this._size = (0, vC.n)(this, PC, void 0), this._textureType = (0, vC.n)(this, GC), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === wC || wC instanceof YC.h ? (this._options = {}, this._fallbackTexture = wC) : (this._options = wC, this._fallbackTexture = wC.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let oC = (QC = this.Km() || SC.c.LastCreatedScene)._getComponent(Ez.b.NAME_PROCEDURALTEXTURE);
          oC || (oC = new zZ(QC), QC.sZC(oC)), this._options.skipSceneRegistration || QC.proceduralTextures.push(this), this._fullEngine = QC.mg(), this.name = CC, this.isRenderTarget = !0, this._size = zC, this._textureType = fC, this._generateMipMaps = bC, this._drawWrapper = new ZZ.d(this._fullEngine), this.setFragment(ZC);
          const RC = this._createRtWrapper(nC, zC, bC, fC);
          this._texture = RC.texture;
          const AC = [];
          AC.push(1, 1), AC.push(-1, 1), AC.push(-1, -1), AC.push(1, -1), this._vertexBuffers[rC.k.PositionKind] = new rC.k(this._fullEngine, AC, rC.k.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(CC, zC, ZC, QC) {
          return CC ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(zC, {
            generateMipMaps: ZC,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: QC,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(zC, {
            generateMipMaps: ZC,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: QC,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(CC) {
          this._drawWrapper.effect = CC
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((CC => {
            this._contentData = this.readPixels(0, 0, CC), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const CC = this._fullEngine,
            zC = [];
          zC.push(0), zC.push(1), zC.push(2), zC.push(0), zC.push(2), zC.push(3), this._indexBuffer = CC.createIndexBuffer(zC)
        }
        _rebuild() {
          const CC = this._vertexBuffers[rC.k.PositionKind];
          CC && CC._rebuild(), this._createIndexBuffer(), this.refreshRate === vz.e.REFRESHRATE_RENDER_ONCE && (this.refreshRate = vz.e.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(CC) {
          if (this.isReady()) return void CC(this);
          const zC = this.getEffect();
          zC && zC.executeWhenCompiled((() => {
            CC(this)
          }))
        }
        isReady() {
          const CC = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const zC = this._getDefines();
          if (this._drawWrapper.effect && zC === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const QC = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== zC && (this._cachedDefines = zC, this._drawWrapper.effect = CC.createEffect(QC, [rC.k.PositionKind], this._uniforms, this._samplers, zC, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([ZC.e(389).then((() => ZC(61521))), this._options.extraInitializationsAsync()]) : await Promise.all([ZC.e(390).then((() => ZC(61526))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await ZC.e(389).then((() => ZC(61521))) : await ZC.e(390).then((() => ZC(61526)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(CC) {
          this._fragment = CC
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(CC) {
          this._refreshRate = CC, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(CC, zC) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const ZC = this._texture.isCube;
          this._rtWrapper.dispose();
          const QC = this._createRtWrapper(ZC, CC, zC, this._textureType);
          this._texture = QC.texture, this._size = CC, this._generateMipMaps = zC
        }
        _checkUniform(CC) {
          -1 === this._uniforms.indexOf(CC) && this._uniforms.push(CC)
        }
        setTexture(CC, zC) {
          return -1 === this._samplers.indexOf(CC) && this._samplers.push(CC), this._textures[CC] = zC, this
        }
        setFloat(CC, zC) {
          return this._checkUniform(CC), this._floats[CC] = zC, this
        }
        setInt(CC, zC) {
          return this._checkUniform(CC), this._ints[CC] = zC, this
        }
        setFloats(CC, zC) {
          return this._checkUniform(CC), this._floatsArrays[CC] = zC, this
        }
        setColor3(CC, zC) {
          return this._checkUniform(CC), this._colors3[CC] = zC, this
        }
        setColor4(CC, zC) {
          return this._checkUniform(CC), this._colors4[CC] = zC, this
        }
        setVector2(CC, zC) {
          return this._checkUniform(CC), this._vectors2[CC] = zC, this
        }
        setVector3(CC, zC) {
          return this._checkUniform(CC), this._vectors3[CC] = zC, this
        }
        setVector4(CC, zC) {
          return this._checkUniform(CC), this._vectors4[CC] = zC, this
        }
        setMatrix(CC, zC) {
          return this._checkUniform(CC), this._matrices[CC] = zC, this
        }
        render(CC) {
          const zC = this.Km();
          if (!zC) return;
          const ZC = this._fullEngine;
          if (ZC.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), ZC.setState(!1), !this.nodeMaterialSource) {
            for (const CC in this._textures) this._drawWrapper.effect.setTexture(CC, this._textures[CC]);
            for (const CC in this._ints) this._drawWrapper.effect.setInt(CC, this._ints[CC]);
            for (const CC in this._floats) this._drawWrapper.effect.setFloat(CC, this._floats[CC]);
            for (const CC in this._floatsArrays) this._drawWrapper.effect.setArray(CC, this._floatsArrays[CC]);
            for (const CC in this._colors3) this._drawWrapper.effect.setColor3(CC, this._colors3[CC]);
            for (const CC in this._colors4) {
              const zC = this._colors4[CC];
              this._drawWrapper.effect.setFloat4(CC, zC.r, zC.g, zC.b, zC.a)
            }
            for (const CC in this._vectors2) this._drawWrapper.effect.setVector2(CC, this._vectors2[CC]);
            for (const CC in this._vectors3) this._drawWrapper.effect.setVector3(CC, this._vectors3[CC]);
            for (const CC in this._vectors4) this._drawWrapper.effect.setVector4(CC, this._vectors4[CC]);
            for (const CC in this._matrices) this._drawWrapper.effect.setMatrix(CC, this._matrices[CC])
          }
          if (!this._texture || !this._rtWrapper) return;
          ZC._enableGPUDebugMarkers && ZC._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const QC = ZC.currentViewport;
          if (this.isCube)
            for (let wC = 0; wC < 6; wC++) ZC.bindFramebuffer(this._rtWrapper, wC, void 0, void 0, !0), ZC.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", wC), this.autoClear && ZC.clear(zC.clearColor, !0, !1, !1), ZC.drawElementsType(bC.d.TriangleFillMode, 0, 6), ZC.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let CC = 1;
            this._rtWrapper.is3D ? CC = this._rtWrapper.depth : this._rtWrapper.is2DArray && (CC = this._rtWrapper.layers);
            for (let QC = 0; QC < CC; QC++) {
              if (ZC.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, QC), ZC.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== CC ? QC / (CC - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", QC);
                for (const CC in this._textures) this._drawWrapper.effect.setTexture(CC, this._textures[CC])
              }
              this.autoClear && ZC.clear(zC.clearColor, !0, !1, !1), ZC.drawElementsType(bC.d.TriangleFillMode, 0, 6), ZC.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          QC && ZC.setViewport(QC), this.isCube && ZC.generateMipMapsForCubemap(this._texture, !0), ZC._enableGPUDebugMarkers && ZC._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const zC = this.getSize(),
            ZC = new CC(this.name, zC.width, this._fragment, this.Km(), this._fallbackTexture, this._generateMipMaps);
          return ZC.hasAlpha = this.hasAlpha, ZC.level = this.level, ZC.coordinatesMode = this.coordinatesMode, ZC
        }
        dispose() {
          const CC = this.Km();
          if (!CC) return;
          const zC = CC.proceduralTextures.indexOf(this);
          zC >= 0 && CC.proceduralTextures.splice(zC, 1);
          const ZC = this._vertexBuffers[rC.k.PositionKind];
          ZC && (ZC.dispose(), this._vertexBuffers[rC.k.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const ZC = "function" === typeof Symbol && Symbol.metadata ? Object.create(oC[Symbol.metadata] ?? null) : void 0;
        zC = [(0, eC.M)()], QC = [(0, eC.M)()], wC = [(0, eC.M)()], nC = [(0, eC.M)()], fC = [(0, eC.M)()], (0, vC.j)(CC, null, fC, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: CC => "refreshRate" in CC,
            get: CC => CC.refreshRate
          },
          metadata: ZC
        }, null, qC), (0, vC.j)(null, null, zC, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: CC => "isEnabled" in CC,
            get: CC => CC.isEnabled,
            set: (CC, zC) => {
              CC.isEnabled = zC
            }
          },
          metadata: ZC
        }, FC, WC), (0, vC.j)(null, null, QC, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: CC => "autoClear" in CC,
            get: CC => CC.autoClear,
            set: (CC, zC) => {
              CC.autoClear = zC
            }
          },
          metadata: ZC
        }, NC, MC), (0, vC.j)(null, null, wC, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: CC => "_generateMipMaps" in CC,
            get: CC => CC._generateMipMaps,
            set: (CC, zC) => {
              CC._generateMipMaps = zC
            }
          },
          metadata: ZC
        }, gC, pC), (0, vC.j)(null, null, nC, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: CC => "_size" in CC,
            get: CC => CC._size,
            set: (CC, zC) => {
              CC._size = zC
            }
          },
          metadata: ZC
        }, PC, GC), ZC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ZC
        })
      })(), CC
    })();

    function wZ(CC) {
      return "texture" in CC
    }

    function bZ(CC) {
      return "value" in CC
    }
    async function nZ(CC, zC, QC) {
      const wC = [zC.red, zC.green, zC.blue, zC.alpha],
        bC = [],
        nC = [];
      for (let ZC = 0; ZC < 4; ZC++) {
        const CC = wC[ZC];
        if (CC)
          if (wZ(CC)) {
            if (CC.sourceChannel < 0 || CC.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let zC = bC.indexOf(CC.texture); - 1 === zC && (zC = bC.length, bC.push(CC.texture)), nC[ZC] = zC
          } else {
            if (!bZ(CC)) throw new Error("Invalid channel input configuration");
            if (CC.value < 0 || CC.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            nC[ZC] = -1
          }
        else nC[ZC] = -1
      }
      let fC = zC.outputSize;
      if (!fC && bC.length > 0) {
        let CC = 0;
        for (const zC of bC) {
          const ZC = zC.getSize(),
            QC = Math.max(ZC.width, ZC.height);
          QC > CC && (CC = QC, fC = ZC.width === ZC.height ? CC : ZC)
        }
      }
      fC = fC || 512;
      const oC = [],
        qC = new Set;
      for (let ZC = 0; ZC < 4; ZC++) {
        const CC = wC[ZC],
          zC = ["RED", "GREEN", "BLUE", "ALPHA"][ZC];
        if (CC && wZ(CC)) {
          oC.push(`${zC}_FROM_TEXTURE`);
          const CC = nC[ZC];
          qC.add(CC)
        }
      }
      qC.forEach((CC => {
        oC.push(`USE_TEXTURE${CC}`)
      }));
      const FC = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: QC.mg().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            QC.mg().isWebGPU ? await Promise.all([ZC.e(387).then((() => ZC(61514)))]) : await Promise.all([ZC.e(388).then((() => ZC(61518)))])
          },
          skipSceneRegistration: !0
        },
        WC = new QZ(CC, fC, "textureMerger", QC, FC);
      WC.refreshRate = -1, WC.defines = oC.length > 0 ? "#define " + oC.join("\n#define ") + "\n" : "";
      for (let ZC = 0; ZC < bC.length; ZC++) NC = bC[ZC], (MC = WC).uOffset = NC.uOffset, MC.vOffset = NC.vOffset, MC.uScale = NC.uScale, MC.vScale = NC.vScale, MC.uAng = NC.uAng, MC.vAng = NC.vAng, MC.wAng = NC.wAng, MC.uRotationCenter = NC.uRotationCenter, MC.vRotationCenter = NC.vRotationCenter, WC.setTexture(`inputTexture${ZC}`, bC[ZC]);
      var NC, MC;
      for (let ZC = 0; ZC < 4; ZC++) {
        const CC = wC[ZC],
          zC = ["red", "green", "blue", "alpha"][ZC];
        if (CC && wZ(CC)) {
          const QC = nC[ZC];
          WC.setInt(`${zC}TextureIndex`, QC), WC.setInt(`${zC}SourceChannel`, CC.sourceChannel)
        } else {
          let QC;
          QC = CC && bZ(CC) ? CC.value : 3 === ZC ? 1 : 0, WC.setFloat(`${zC}ConstantValue`, QC)
        }
      }
      return await new Promise(((CC, zC) => {
        WC.executeWhenReady((() => {
          try {
            WC.render(), CC(WC)
          } catch (ZC) {
            zC(ZC instanceof Error ? ZC : new Error(String(ZC)))
          }
        }))
      }))
    }

    function fZ(CC, zC) {
      return {
        texture: CC,
        sourceChannel: zC
      }
    }

    function oZ(CC) {
      return {
        value: CC
      }
    }

    function qZ(CC, zC, ZC, QC) {
      return {
        red: CC,
        green: zC,
        blue: ZC,
        alpha: QC
      }
    }
    var FZ = ZC(39641),
      WZ = ZC(39742),
      NZ = ZC(36977),
      MZ = ZC(39794),
      gZ = ZC(39738);
    class SZ {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class pZ extends FZ.d {
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
        return !!this._options?.enableMultiview || this.fS > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new SZ;
        super(null), void 0 === CC.deterministicLockstep && (CC.deterministicLockstep = !1), void 0 !== CC.timeStep && (this._timeStep = CC.timeStep), void 0 === CC.lockstepMaxSteps && (CC.lockstepMaxSteps = 4), this._options = CC, NZ.c.SetMatrixPrecision(!!CC.useHighPrecisionMatrix), this._caps = {
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
        }, CC.enableMultiview && (this._caps.multiview = {
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
        }, CC.renderingCanvas && (this._renderingCanvas = CC.renderingCanvas), hC.c.Log(`Babylon.js v${FZ.d.Version} - Null engine`);
        const zC = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (zC.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (zC.Blob = function() {})
      }
      createVertexBuffer(CC) {
        const zC = new WZ.d;
        return zC.references = 1, zC
      }
      createIndexBuffer(CC) {
        const zC = new WZ.d;
        return zC.references = 1, zC
      }
      clear(CC, zC, ZC) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(CC, zC, ZC) {
        this._cachedViewport = CC
      }
      createUniformBuffer(CC) {
        const zC = new WZ.d;
        return zC.references = 1, zC.HW = CC instanceof Array ? CC.length * Float32Array.BYTES_PER_ELEMENT : CC.byteLength, zC
      }
      createDynamicUniformBuffer(CC) {
        return this.createUniformBuffer(CC)
      }
      updateUniformBuffer(CC, zC, ZC, QC) {}
      bindUniformBufferBase(CC, zC, ZC) {}
      bindUniformBlock(CC, zC, ZC) {}
      createShaderProgram(CC, zC, ZC, QC, wC) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(CC, zC) {
        return []
      }
      getAttributes(CC, zC) {
        return []
      }
      bindSamplers(CC) {
        this._currentEffect = null
      }
      enableEffect(CC) {
        CC = null !== CC && (0, gZ.c)(CC) ? CC.effect : CC, this._currentEffect = CC, CC && (CC.onBind && CC.onBind(CC), CC._onBindObservable && CC._onBindObservable.notifyObservers(CC))
      }
      setStateCullFaceType(CC, zC) {}
      setState(CC) {}
      setIntArray(CC, zC) {
        return !0
      }
      setIntArray2(CC, zC) {
        return !0
      }
      setIntArray3(CC, zC) {
        return !0
      }
      setIntArray4(CC, zC) {
        return !0
      }
      setFloatArray(CC, zC) {
        return !0
      }
      setFloatArray2(CC, zC) {
        return !0
      }
      setFloatArray3(CC, zC) {
        return !0
      }
      setFloatArray4(CC, zC) {
        return !0
      }
      setArray(CC, zC) {
        return !0
      }
      setArray2(CC, zC) {
        return !0
      }
      setArray3(CC, zC) {
        return !0
      }
      setArray4(CC, zC) {
        return !0
      }
      setMatrices(CC, zC) {
        return !0
      }
      setMatrix3x3(CC, zC) {
        return !0
      }
      setMatrix2x2(CC, zC) {
        return !0
      }
      setFloat(CC, zC) {
        return !0
      }
      setFloat2(CC, zC, ZC) {
        return !0
      }
      setFloat3(CC, zC, ZC, QC) {
        return !0
      }
      setBool(CC, zC) {
        return !0
      }
      setFloat4(CC, zC, ZC, QC, wC) {
        return !0
      }
      setAlphaMode(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[ZC] !== CC && (this.alphaState.setAlphaBlend(0 !== CC, 0), zC || this.setDepthWrite(0 === CC), this._alphaMode[ZC] = CC)
      }
      bindBuffers(CC, zC, ZC) {}
      wipeCaches(CC) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, CC && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(CC, zC, ZC, QC) {}
      drawElementsType(CC, zC, ZC, QC) {}
      drawArraysType(CC, zC, ZC, QC) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(CC) {}
      createTexture(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          nC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          fC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const oC = new ez.c(this, 1),
          qC = String(CC);
        return oC.url = qC, oC.generateMipMaps = !zC, oC.samplingMode = wC, oC.invertY = ZC, oC.baseWidth = this._options.textureSize, oC.baseHeight = this._options.textureSize, oC.width = this._options.textureSize, oC.height = this._options.textureSize, fC && (oC.format = fC), nC && (oC._buffer = nC), oC.isReady = !0, bC && setTimeout((() => {
          bC(oC)
        })), this._internalTexturesCache.push(oC), oC
      }
      _createHardwareRenderTargetWrapper(CC, zC, ZC) {
        const QC = new MZ.b(CC, zC, ZC, this);
        return this._renderTargetWrapperCache.push(QC), QC
      }
      createRenderTargetTexture(CC, zC) {
        const ZC = this._createHardwareRenderTargetWrapper(!1, !1, CC),
          QC = {};
        void 0 !== zC && "object" === typeof zC ? (QC.generateMipMaps = zC.generateMipMaps, QC.generateDepthBuffer = void 0 === zC.generateDepthBuffer || zC.generateDepthBuffer, QC.generateStencilBuffer = QC.generateDepthBuffer && zC.generateStencilBuffer, QC.type = void 0 === zC.type ? 0 : zC.type, QC.samplingMode = void 0 === zC.samplingMode ? 3 : zC.samplingMode) : (QC.generateMipMaps = zC, QC.generateDepthBuffer = !0, QC.generateStencilBuffer = !1, QC.type = 0, QC.samplingMode = 3);
        const wC = new ez.c(this, 5);
        ZC.setTexture(wC);
        const bC = CC.width || CC,
          nC = CC.height || CC;
        return ZC._generateDepthBuffer = QC.generateDepthBuffer, ZC._generateStencilBuffer = !!QC.generateStencilBuffer, wC.baseWidth = bC, wC.baseHeight = nC, wC.width = bC, wC.height = nC, wC.isReady = !0, wC.samples = 1, wC.generateMipMaps = !!QC.generateMipMaps, wC.samplingMode = QC.samplingMode, wC.type = QC.type, this._internalTexturesCache.push(wC), ZC
      }
      createMultiviewRenderTargetTexture(CC, zC) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const ZC = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: CC,
            height: zC
          }),
          QC = new ez.c(this, 5, !0);
        return QC.baseWidth = CC, QC.baseHeight = zC, QC.width = CC, QC.height = zC, QC.isMultiview = !0, QC.isReady = !0, QC.format = 5, QC.samples = 1, ZC.setTextures(QC), ZC
      }
      bindMultiviewFramebuffer(CC) {
        this.bindFramebuffer(CC, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(CC, zC) {
        const ZC = this._createHardwareRenderTargetWrapper(!1, !0, CC),
          QC = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...zC
          };
        QC.generateStencilBuffer = QC.generateDepthBuffer && QC.generateStencilBuffer, (1 !== QC.type || this._caps.textureFloatLinearFiltering) && (2 !== QC.type || this._caps.textureHalfFloatLinearFiltering) || (QC.samplingMode = 1), ZC._generateDepthBuffer = QC.generateDepthBuffer, ZC._generateStencilBuffer = !!QC.generateStencilBuffer;
        const wC = new ez.c(this, 5);
        return wC.baseWidth = CC, wC.baseHeight = CC, wC.width = CC, wC.height = CC, wC.isReady = !0, wC.isCube = !0, wC.samples = 1, wC.generateMipMaps = !!QC.generateMipMaps, wC.samplingMode = QC.samplingMode, wC.type = QC.type, this._internalTexturesCache.push(wC), ZC
      }
      updateTextureSamplingMode(CC, zC) {
        zC.samplingMode = CC
      }
      createRawTexture(CC, zC, ZC, QC, wC, bC, nC) {
        let fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          oC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          qC = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const FC = new ez.c(this, 3);
        return FC.baseWidth = zC, FC.baseHeight = ZC, FC.width = zC, FC.height = ZC, FC.format = QC, FC.generateMipMaps = wC, FC.samplingMode = nC, FC.invertY = bC, FC._compression = fC, FC.type = oC, FC._useSRGBBuffer = qC, this._doNotHandleContextLost || (FC._bufferView = CC), FC
      }
      updateRawTexture(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        CC && (CC._bufferView = zC, CC.format = ZC, CC.invertY = QC, CC._compression = wC, CC.type = bC, CC._useSRGBBuffer = nC)
      }
      bindFramebuffer(CC, zC, ZC, QC, wC) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = CC, this._currentFramebuffer = null, this._cachedViewport && !wC && this.setViewport(this._cachedViewport, ZC, QC)
      }
      unBindFramebuffer(CC) {
        let zC = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, zC && zC(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(CC) {
        const zC = new WZ.d;
        return zC.references = 1, zC.HW = 1, zC
      }
      updateDynamicTexture(CC, zC, ZC) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(CC) {}
      updateDynamicIndexBuffer(CC, zC) {}
      updateDynamicVertexBuffer(CC, zC, ZC, QC) {}
      _bindTextureDirectly(CC, zC) {
        return this._boundTexturesCache[this._activeChannel] !== zC && (this._boundTexturesCache[this._activeChannel] = zC, !0)
      }
      _bindTexture(CC, zC) {
        CC < 0 || this._bindTextureDirectly(0, zC)
      }
      _deleteBuffer(CC) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(CC) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(CC, zC, ZC, QC, wC) {}
      _uploadDataToTextureDirectly(CC, zC) {}
      _uploadArrayBufferViewToTexture(CC, zC) {}
      _uploadImageToTexture(CC, zC) {}
    }
    ZC(39860), ZC(39891), ZC(39858);
    async function PZ(CC) {
      const zC = CC.getInternalTexture();
      if (!zC || 1 !== zC.source) return null;
      if (zC.invertY) {
        const zC = CC.Km()?.mg();
        if (!(zC instanceof pZ)) return null
      }
      const ZC = zC._buffer;
      let QC, bC = CC.mimeType;
      try {
        ZC ? ArrayBuffer.isView(ZC) ? QC = ZC.buffer.slice(ZC.byteOffset, ZC.byteOffset + ZC.byteLength) : ZC instanceof ArrayBuffer ? QC = ZC : ZC instanceof Blob ? (QC = await ZC.arrayBuffer(), bC = ZC.type || bC) : "string" === typeof ZC ? (QC = await wC.Tools.LoadFileAsync(ZC), bC = (0, oC.c)(ZC) || bC) : "undefined" !== typeof HTMLImageElement && ZC instanceof HTMLImageElement && (QC = await wC.Tools.LoadFileAsync(ZC.src), bC = (0, oC.c)(ZC.src) || bC) : (QC = await wC.Tools.LoadFileAsync(zC.url), bC = (0, oC.c)(zC.url) || bC)
      } catch {
        return null
      }
      if (QC && !bC && zC.url) {
        const CC = zC.url.match(/^data:([^;,]+)/);
        bC = CC ? CC[1] : (0, oC.c)(zC.url)
      }
      return QC && bC ? {
        data: QC,
        mimeType: bC
      } : null
    }
    const GZ = 1e-6,
      RZ = new pC.Color3(.04, .04, .04),
      AZ = 1024,
      xZ = pC.Color3.White(),
      JZ = pC.Color3.BlackReadOnly;

    function IZ(CC) {
      switch (CC) {
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

    function iZ(CC, zC, ZC) {
      if (zC < RZ.r) return 0;
      const QC = RZ.r,
        wC = CC * ZC / (1 - RZ.r) + zC - 2 * RZ.r,
        bC = wC * wC - 4 * QC * (RZ.r - zC);
      return RC.Clamp((-wC + Math.sqrt(bC)) / (2 * QC), 0, 1)
    }

    function vZ(CC) {
      const zC = CC.diffuseColor.toLinearSpace(CC.Km().mg().useExactSrgbConversions).scale(.5),
        ZC = CC.alpha,
        QC = function(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new uC.n(0, 1),
            ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new uC.n(0, .1),
            QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new uC.n(0, .1),
            wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new uC.n(1300, .1);
          return function(CC, zC, ZC, QC, wC) {
            return (1 - CC) * (1 - CC) * (1 - CC) * zC + 3 * (1 - CC) * (1 - CC) * CC * ZC + 3 * (1 - CC) * CC * CC * QC + CC * CC * CC * wC
          }(Math.pow(CC / wC.x, .333333), zC.y, ZC.y, QC.y, wC.y)
        }(RC.Clamp(CC.specularPower, 0, AZ));
      return {
        baseColorFactor: [zC.r, zC.g, zC.b, ZC],
        metallicFactor: 0,
        roughnessFactor: QC
      }
    }

    function eZ(CC, zC) {
      zC.needAlphaBlending() ? CC.alphaMode = "BLEND" : zC.needAlphaTesting() && (CC.alphaMode = "MASK", CC.alphaCutoff = zC.alphaCutOff)
    }

    function hZ(CC, zC, ZC) {
      const QC = new Uint8Array(CC * zC * 4);
      for (let wC = 0; wC < QC.length; wC += 4) QC[wC] = QC[wC + 1] = QC[wC + 2] = QC[wC + 3] = 255;
      return JC.b.CreateRGBATexture(QC, CC, zC, ZC)
    }

    function KZ(CC) {
      if (CC instanceof Uint8Array) {
        const zC = CC.length,
          ZC = new Float32Array(CC.length);
        for (let QC = 0; QC < zC; ++QC) ZC[QC] = CC[QC] / 255;
        return ZC
      }
      if (CC instanceof Float32Array) return CC;
      throw new Error("Unsupported pixel format!")
    }
    class YZ {
      constructor(CC) {
        this._exporter = CC, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(CC) {
        return CC ? this._textureMap.get(CC.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(CC, zC) {
        const ZC = vZ(CC),
          QC = {
            name: CC.name
          };
        if (null == CC.backFaceCulling || CC.backFaceCulling || (CC.twoSidedLighting || wC.Tools.Warn(CC.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), QC.doubleSided = !0), zC) {
          const zC = [],
            wC = CC.diffuseTexture;
          wC && zC.push(this.exportTextureAsync(wC).then((CC => {
            CC && (ZC.baseColorTexture = CC)
          })));
          const bC = CC.bumpTexture;
          bC && zC.push(this.exportTextureAsync(bC).then((CC => {
            CC && (QC.normalTexture = CC, 1 !== bC.level && (QC.normalTexture.scale = bC.level))
          })));
          const nC = CC.emissiveTexture;
          nC && (QC.emissiveFactor = [1, 1, 1], zC.push(this.exportTextureAsync(nC).then((CC => {
            CC && (QC.emissiveTexture = CC)
          }))));
          const fC = CC.ambientTexture;
          fC && zC.push(this.exportTextureAsync(fC).then((CC => {
            if (CC) {
              const zC = {
                index: CC.index
              };
              QC.occlusionTexture = zC
            }
          }))), zC.length > 0 && (this._exporter._materialNeedsUVsSet.add(CC), await Promise.all(zC))
        }(CC.alpha < 1 || CC.opacityTexture) && (CC.alphaMode === IC.d.ALPHA_COMBINE ? QC.alphaMode = "BLEND" : wC.Tools.Warn(CC.name + ": glTF 2.0 does not support alpha mode: " + CC.alphaMode.toString())), CC.emissiveColor && !CC.emissiveColor.equalsWithEpsilon(JZ, GZ) && (QC.emissiveFactor = CC.emissiveColor.VZC()), QC.pbrMetallicRoughness = ZC, eZ(QC, CC), await this._finishMaterialAsync(QC, CC);
        const bC = this._exporter._materials;
        return bC.push(QC), bC.length - 1
      }
      async _finishMaterialAsync(CC, zC) {
        const ZC = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", CC, zC),
          QC = [];
        for (const wC of ZC) QC.push(this.exportTextureAsync(wC));
        await Promise.all(QC), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", CC, zC)
      }
      _resizeTexturesToSameDimensions(CC, zC, ZC) {
        const QC = CC ? CC.getSize() : {
            width: 0,
            height: 0
          },
          wC = zC ? zC.getSize() : {
            width: 0,
            height: 0
          };
        let bC, nC;
        return QC.width < wC.width ? (bC = CC && CC instanceof xC.e ? AC.f.CreateResizedCopy(CC, wC.width, wC.height, !0) : hZ(wC.width, wC.height, ZC), nC = zC) : QC.width > wC.width ? (nC = zC && zC instanceof xC.e ? AC.f.CreateResizedCopy(zC, QC.width, QC.height, !0) : hZ(QC.width, QC.height, ZC), bC = CC) : (bC = CC, nC = zC), {
          texture1: bC,
          texture2: nC
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(CC, zC, ZC) {
        const QC = new Array;
        if (!CC && !zC) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const wC = CC ? CC.Km() : zC ? zC.Km() : null;
        if (wC) {
          const bC = this._resizeTexturesToSameDimensions(CC, zC, wC),
            nC = bC.texture1?.getSize();
          let fC, oC;
          const qC = nC.width,
            FC = nC.height,
            WC = await bC.texture1.readPixels(),
            NC = await bC.texture2.readPixels();
          if (!WC) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (fC = KZ(WC), !NC) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          oC = KZ(NC);
          const MC = oC.byteLength,
            gC = new Uint8Array(MC),
            SC = new Uint8Array(MC),
            PC = 4,
            GC = new pC.Color3(0, 0, 0);
          let RC = 0,
            AC = 0;
          for (let CC = 0; CC < FC; ++CC)
            for (let zC = 0; zC < qC; ++zC) {
              const QC = (qC * CC + zC) * PC,
                nC = {
                  diffuseColor: new pC.Color3(fC[QC], fC[QC + 1], fC[QC + 2]).toLinearSpace(wC.mg().useExactSrgbConversions).multiply(ZC.diffuseColor),
                  specularColor: new pC.Color3(oC[QC], oC[QC + 1], oC[QC + 2]).toLinearSpace(wC.mg().useExactSrgbConversions).multiply(ZC.specularColor),
                  glossiness: oC[QC + 3] * ZC.glossiness
                },
                FC = this._convertSpecularGlossinessToMetallicRoughness(nC);
              GC.r = Math.max(GC.r, FC.baseColor.r), GC.g = Math.max(GC.g, FC.baseColor.g), GC.b = Math.max(GC.b, FC.baseColor.b), RC = Math.max(RC, FC.metallic), AC = Math.max(AC, FC.roughness), SC[QC] = 255 * FC.baseColor.r, SC[QC + 1] = 255 * FC.baseColor.g, SC[QC + 2] = 255 * FC.baseColor.b, SC[QC + 3] = bC.texture1.hasAlpha ? 255 * fC[QC + 3] : 255, gC[QC] = 0, gC[QC + 1] = 255 * FC.roughness, gC[QC + 2] = 255 * FC.metallic, gC[QC + 3] = 255
            }
          const xC = {
            baseColor: GC,
            metallic: RC,
            roughness: AC
          };
          let JC = !1,
            IC = !1;
          for (let CC = 0; CC < FC; ++CC)
            for (let zC = 0; zC < qC; ++zC) {
              const ZC = (qC * CC + zC) * PC;
              SC[ZC] /= xC.baseColor.r > GZ ? xC.baseColor.r : 1, SC[ZC + 1] /= xC.baseColor.g > GZ ? xC.baseColor.g : 1, SC[ZC + 2] /= xC.baseColor.b > GZ ? xC.baseColor.b : 1;
              const QC = pC.Color3.FromInts(SC[ZC], SC[ZC + 1], SC[ZC + 2]).toGammaSpace(wC.mg().useExactSrgbConversions);
              SC[ZC] = 255 * QC.r, SC[ZC + 1] = 255 * QC.g, SC[ZC + 2] = 255 * QC.b, QC.equalsWithEpsilon(xZ, GZ) || (IC = !0), gC[ZC + 1] /= xC.roughness > GZ ? xC.roughness : 1, gC[ZC + 2] /= xC.metallic > GZ ? xC.metallic : 1;
              pC.Color3.FromInts(255, gC[ZC + 1], gC[ZC + 2]).equalsWithEpsilon(xZ, GZ) || (JC = !0)
            }
          return JC && QC.push((0, iC.EncodeImageAsync)(gC, qC, FC).then((CC => {
            xC.metallicRoughnessTextureData = CC
          }))), IC && QC.push((0, iC.EncodeImageAsync)(SC, qC, FC).then((CC => {
            xC.baseColorTextureData = CC
          }))), await Promise.all(QC).then((() => xC))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(CC) {
        const zC = this._getPerceivedBrightness(CC.diffuseColor),
          ZC = this._getPerceivedBrightness(CC.specularColor),
          QC = 1 - this._getMaxComponent(CC.specularColor),
          wC = iZ(zC, ZC, QC),
          bC = CC.diffuseColor.scale(QC / (1 - RZ.r) / Math.max(1 - wC, GZ)),
          nC = CC.specularColor.subtract(RZ.scale(1 - wC)).scale(1 / Math.max(wC, GZ));
        let fC = pC.Color3.Lerp(bC, nC, wC * wC);
        fC = fC.clampToRef(0, 1, fC);
        return {
          baseColor: fC,
          metallic: wC,
          roughness: 1 - CC.glossiness
        }
      }
      _getPerceivedBrightness(CC) {
        return Math.sqrt(.299 * CC.r * CC.r + .587 * CC.g * CC.g + .114 * CC.b * CC.b)
      }
      _getMaxComponent(CC) {
        return Math.max(CC.r, Math.max(CC.g, CC.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
        const qC = [],
          FC = {
            baseColor: CC,
            metallic: zC,
            roughness: ZC
          };
        if (oC)
          if (nC instanceof kz) {
            if (nC.geometryOpacityTexture) {
              const CC = QC && QC.getInternalTexture() ? QC.getInternalTexture().uniqueId : 0,
                zC = nC.geometryOpacityTexture && nC.geometryOpacityTexture.getInternalTexture() ? nC.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                ZC = Number(`${CC}${zC}`),
                wC = this._textureMap.get(ZC);
              wC ? fC.baseColorTexture = wC : qC.push(nZ("baseColorOpacityTexture", qZ(QC ? fZ(QC, 0) : oZ(1), QC ? fZ(QC, 1) : oZ(1), QC ? fZ(QC, 2) : oZ(1), fZ(nC.geometryOpacityTexture, 0)), nC.Km()).then((async CC => {
                const zC = await this.exportTextureAsync(CC, ZC);
                zC && (fC.baseColorTexture = zC)
              })))
            } else QC && qC.push(this.exportTextureAsync(QC).then((CC => {
              CC && (fC.baseColorTexture = CC)
            })));
            if (nC._useMetallicFromMetallicTextureBlue && wC) qC.push(this.exportTextureAsync(wC).then((CC => {
              CC && (fC.metallicRoughnessTexture = CC)
            })));
            else if (bC || wC) {
              const CC = wC && wC.getInternalTexture() ? wC.getInternalTexture().uniqueId : 0,
                zC = bC && bC.getInternalTexture() ? bC.getInternalTexture().uniqueId : 0,
                ZC = Number(`${CC}${zC}`),
                QC = this._textureMap.get(ZC);
              QC ? fC.metallicRoughnessTexture = QC : qC.push(nZ("MetalRoughTexture", qZ(nC.ambientOcclusionTexture ? fZ(nC.ambientOcclusionTexture, 0) : oZ(1), bC ? fZ(bC, 0) : oZ(1), wC ? fZ(wC, 0) : oZ(1)), nC.Km()).then((async CC => {
                const zC = await this.exportTextureAsync(CC, ZC);
                zC && (fC.metallicRoughnessTexture = zC)
              })))
            }
          } else QC && qC.push(this.exportTextureAsync(QC).then((CC => {
            CC && (fC.baseColorTexture = CC)
          }))), wC && qC.push(this.exportTextureAsync(wC).then((CC => {
            CC && (fC.metallicRoughnessTexture = CC)
          })));
        return qC.length > 0 && (this._exporter._materialNeedsUVsSet.add(nC), await Promise.all(qC)), FC
      }
      _getTextureSampler(CC) {
        const zC = {};
        if (!CC || !(CC instanceof xC.e)) return zC;
        const ZC = this._getGLTFTextureWrapMode(CC.wrapU);
        10497 !== ZC && (zC.wrapS = ZC);
        const QC = this._getGLTFTextureWrapMode(CC.wrapV);
        switch (10497 !== QC && (zC.wrapT = QC), CC.samplingMode) {
          case xC.e.LINEAR_LINEAR:
            zC.magFilter = 9729, zC.minFilter = 9729;
            break;
          case xC.e.LINEAR_NEAREST:
            zC.magFilter = 9729, zC.minFilter = 9728;
            break;
          case xC.e.NEAREST_LINEAR:
            zC.magFilter = 9728, zC.minFilter = 9729;
            break;
          case xC.e.NEAREST_LINEAR_MIPLINEAR:
            zC.magFilter = 9728, zC.minFilter = 9987;
            break;
          case xC.e.NEAREST_NEAREST:
            zC.magFilter = 9728, zC.minFilter = 9728;
            break;
          case xC.e.NEAREST_LINEAR_MIPNEAREST:
            zC.magFilter = 9728, zC.minFilter = 9985;
            break;
          case xC.e.LINEAR_NEAREST_MIPNEAREST:
            zC.magFilter = 9729, zC.minFilter = 9984;
            break;
          case xC.e.LINEAR_NEAREST_MIPLINEAR:
            zC.magFilter = 9729, zC.minFilter = 9986;
            break;
          case xC.e.NEAREST_NEAREST_MIPLINEAR:
            zC.magFilter = 9728, zC.minFilter = 9986;
            break;
          case xC.e.LINEAR_LINEAR_MIPLINEAR:
            zC.magFilter = 9729, zC.minFilter = 9987;
            break;
          case xC.e.LINEAR_LINEAR_MIPNEAREST:
            zC.magFilter = 9729, zC.minFilter = 9985;
            break;
          case xC.e.NEAREST_NEAREST_MIPNEAREST:
            zC.magFilter = 9728, zC.minFilter = 9984
        }
        return zC
      }
      _getGLTFTextureWrapMode(CC) {
        switch (CC) {
          case xC.e.WRAP_ADDRESSMODE:
            return 10497;
          case xC.e.CLAMP_ADDRESSMODE:
            return 33071;
          case xC.e.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return wC.Tools.Error(`Unsupported Texture Wrap Mode ${CC}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(CC, zC, ZC) {
        const QC = {
            diffuseColor: CC._albedoColor,
            specularColor: CC._reflectivityColor,
            glossiness: CC._microSurface
          },
          wC = CC._albedoTexture,
          bC = CC._reflectivityTexture,
          nC = CC._useMicroSurfaceFromReflectivityMapAlpha;
        if (bC && !nC) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((wC || bC) && ZC) {
          this._exporter._materialNeedsUVsSet.add(CC);
          const ZC = this._exportTextureSampler(wC || bC),
            nC = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(wC, bC, QC),
            fC = this._exporter._textures;
          if (nC.baseColorTextureData) {
            const CC = await this._exportImageAsync(`baseColor${fC.length}`, nC.baseColorTextureData);
            zC.baseColorTexture = this._exportTextureInfo(CC, ZC, wC?.coordinatesIndex)
          }
          if (nC.metallicRoughnessTextureData) {
            const CC = await this._exportImageAsync(`metallicRoughness${fC.length}`, nC.metallicRoughnessTextureData);
            zC.metallicRoughnessTexture = this._exportTextureInfo(CC, ZC, bC?.coordinatesIndex)
          }
          return nC
        }
        return this._convertSpecularGlossinessToMetallicRoughness(QC)
      }
      async exportPBRMaterialAsync(CC, zC) {
        const ZC = {},
          QC = {
            name: CC.name
          },
          wC = CC.isMetallicWorkflow();
        if (wC) {
          const zC = CC._albedoColor,
            QC = CC.alpha;
          zC && (ZC.baseColorFactor = [zC.r, zC.g, zC.b, QC])
        }
        const bC = wC ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(CC._albedoColor, CC._metallic, CC._roughness, CC._albedoTexture, CC._metallicTexture, CC._metallicTexture, CC, ZC, zC) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(CC, ZC, zC);
        await this._setMetallicRoughnessPbrMaterialAsync(bC, CC, QC, ZC, zC), await this._finishMaterialAsync(QC, CC);
        const nC = this._exporter._materials;
        return nC.push(QC), nC.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(CC, zC, ZC, QC, bC) {
        if (eZ(ZC, zC), CC.baseColor.equalsWithEpsilon(xZ, GZ) && RC.WithinEpsilon(zC.alpha, 1, GZ) || (QC.baseColorFactor = [CC.baseColor.r, CC.baseColor.g, CC.baseColor.b, zC.alpha]), null != CC.metallic && 1 !== CC.metallic && (QC.metallicFactor = CC.metallic), null != CC.roughness && 1 !== CC.roughness && (QC.roughnessFactor = CC.roughness), null == zC.backFaceCulling || zC.backFaceCulling || (zC._twoSidedLighting || wC.Tools.Warn(zC.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), ZC.doubleSided = !0), bC) {
          const CC = [],
            wC = zC instanceof Jz ? zC._bumpTexture : zC.geometryNormalTexture;
          wC && CC.push(this.exportTextureAsync(wC).then((CC => {
            CC && (ZC.normalTexture = CC, 1 !== wC.level && (ZC.normalTexture.scale = wC.level))
          })));
          const bC = zC instanceof Jz ? zC._ambientTexture : zC.ambientOcclusionTexture;
          bC && CC.push(new Promise((async CC => {
            if (zC instanceof kz && QC.metallicRoughnessTexture) {
              const zC = this._exportTextureSampler(bC),
                ZC = this._exporter._textures[QC.metallicRoughnessTexture.index].source,
                wC = this._exportTextureInfo(ZC, zC, bC.coordinatesIndex);
              return this._textureMap.set(bC.uniqueId, wC), this._exporter._extensionsPostExportTextures("exporter", wC, bC), CC(wC)
            }
            return CC(await this.exportTextureAsync(bC))
          })).then((async CC => {
            if (CC) {
              const QC = {
                index: CC.index,
                texCoord: CC.texCoord,
                extensions: CC.extensions
              };
              ZC.occlusionTexture = QC, QC.strength = zC instanceof Jz ? zC._ambientTextureStrength : zC.ambientOcclusionTexture.level
            }
          })));
          const nC = zC instanceof Jz ? zC._emissiveTexture : zC.emissionColorTexture;
          nC && CC.push(this.exportTextureAsync(nC).then((CC => {
            CC && (ZC.emissiveTexture = CC)
          }))), CC.length > 0 && (this._exporter._materialNeedsUVsSet.add(zC), await Promise.all(CC))
        }
        const nC = zC instanceof Jz ? zC._emissiveColor : zC.emissionColor;
        nC.equalsWithEpsilon(JZ, GZ) || (ZC.emissiveFactor = nC.VZC()), ZC.pbrMetallicRoughness = QC
      }
      async exportOpenPBRMaterialAsync(CC, zC) {
        const ZC = {},
          QC = {
            name: CC.name
          },
          wC = CC.baseColor,
          bC = CC.geometryOpacity;
        wC && (ZC.baseColorFactor = [wC.r, wC.g, wC.b, bC]);
        const nC = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(CC.baseColor, CC.baseMetalness, CC.specularRoughness, CC.baseColorTexture, CC.baseMetalnessTexture, CC.specularRoughnessTexture, CC, ZC, zC);
        await this._setMetallicRoughnessPbrMaterialAsync(nC, CC, QC, ZC, zC), await this._finishMaterialAsync(QC, CC);
        const fC = this._exporter._materials;
        return fC.push(QC), fC.length - 1
      }
      async exportTextureAsync(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = this._textureMap.get(zC ?? CC.uniqueId);
        if (ZC) return ZC;
        const QC = this._exportTextureSampler(CC),
          wC = await this._exportTextureImageAsync(CC);
        return ZC = this._exportTextureInfo(wC, QC, CC.coordinatesIndex), this._textureMap.set(zC ?? CC.uniqueId, ZC), this._exporter._extensionsPostExportTextures("exporter", ZC, CC), ZC
      }
      async _exportTextureImageAsync(CC) {
        const zC = CC.mimeType ?? "none",
          ZC = this._internalTextureToImage,
          QC = CC.getInternalTexture().uniqueId;
        ZC[QC] = ZC[QC] || {};
        let bC = ZC[QC][zC];
        return void 0 === bC && (bC = (async () => {
          const ZC = await PZ(CC);
          if (ZC && IZ(ZC.mimeType) && ("none" === zC || ZC.mimeType === zC)) return await this._exportImageAsync(CC.name, new Blob([ZC.data], {
            type: ZC.mimeType
          }));
          let QC = "image/png";
          "none" !== zC && (IZ(zC) ? QC = zC : (QC = "image/png", wC.Tools.Warn(`Unsupported media type: ${zC}. Exporting texture as PNG.`)));
          const bC = CC.getSize(),
            nC = await (0, AC.d)(CC),
            fC = await (0, iC.EncodeImageAsync)(nC, bC.width, bC.height, QC);
          return await this._exportImageAsync(CC.name, fC)
        })(), ZC[QC][zC] = bC), await bC
      }
      async _exportImageAsync(CC, zC) {
        const ZC = this._exporter._images;
        let QC;
        if (this._exporter._shouldUseGlb) {
          QC = {
            name: CC,
            mimeType: zC.type,
            bufferView: void 0
          };
          const ZC = await zC.arrayBuffer(),
            wC = this._exporter._bufferManager.createBufferView(new Uint8Array(ZC));
          this._exporter._bufferManager.setBufferView(QC, wC)
        } else {
          const bC = CC.replace(/\.\/|\/|\.\\|\\/g, "_"),
            nC = function(CC) {
              switch (CC) {
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
            }(zC.type);
          let fC = bC + nC;
          ZC.some((CC => CC.uri === fC)) && (fC = `${bC}_${wC.Tools.RandomId()}${nC}`), QC = {
            name: CC,
            uri: fC
          }, this._exporter._imageData[fC] = zC
        }
        return ZC.push(QC), ZC.length - 1
      }
      _exportTextureInfo(CC, zC, ZC) {
        const QC = this._exporter._textures;
        let wC = QC.findIndex((ZC => ZC.sampler == zC && ZC.source === CC)); - 1 === wC && (wC = QC.length, QC.push({
          source: CC,
          sampler: zC
        }));
        const bC = {
          index: wC
        };
        return ZC && (bC.texCoord = ZC), bC
      }
      _exportTextureSampler(CC) {
        const zC = this._getTextureSampler(CC),
          ZC = this._exporter._samplers,
          QC = ZC.findIndex((CC => CC.minFilter === zC.minFilter && CC.magFilter === zC.magFilter && CC.wrapS === zC.wrapS && CC.wrapT === zC.wrapT));
        return -1 !== QC ? QC : (ZC.push(zC), ZC.length - 1)
      }
    }
    var dZ = ZC(39882),
      mZ = ZC(40035);
    (0, mZ.e)();
    var HZ = ZC(36968);
    const EZ = QC.Matrix.Compose(new QC.Eg(-1, 1, 1), QC.Quaternion.Identity(), QC.Eg.Zero());

    function lZ(CC, zC) {
      if (!(CC instanceof WC.c)) return !1;
      if (zC) {
        if (!CC.getWorldMatrix().equalsWithEpsilon(QC.Matrix.IdentityReadOnly, HZ.e)) return !1
      } else {
        if (!CC.getWorldMatrix().multiplyToRef(EZ, QC.TmpVectors.Matrix[0]).equalsWithEpsilon(QC.Matrix.IdentityReadOnly, HZ.e)) return !1
      }
      return !(CC instanceof NC.c && CC.geometry)
    }
    const XZ = QC.Eg.ZeroReadOnly,
      cZ = QC.Quaternion.Identity(),
      uZ = QC.Eg.OneReadOnly,
      rZ = new QC.Eg(-1, 1, 1);

    function sZ(CC, zC) {
      const {
        byteOffset: ZC,
        byteStride: QC,
        type: wC,
        normalized: bC
      } = CC, nC = CC.getSize(), fC = zC.reduce(((CC, zC) => zC.getTotalVertices() > CC ? zC.getTotalVertices() : CC), -Number.MAX_VALUE);
      return {
        byteOffset: ZC,
        byteStride: QC,
        componentCount: nC,
        type: wC,
        count: fC * nC,
        normalized: bC,
        totalVertices: fC,
        kind: CC.getKind()
      }
    }

    function TZ(CC) {
      switch (CC) {
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

    function aZ(CC) {
      switch (CC) {
        case FC.f.PositionKind:
        case FC.f.NormalKind:
        case FC.f.TangentKind:
        case FC.f.ColorKind:
        case FC.f.MatricesIndicesKind:
        case FC.f.MatricesIndicesExtraKind:
        case FC.f.MatricesWeightsKind:
        case FC.f.MatricesWeightsExtraKind:
        case FC.f.UVKind:
        case FC.f.UV2Kind:
        case FC.f.UV3Kind:
        case FC.f.UV4Kind:
        case FC.f.UV5Kind:
        case FC.f.UV6Kind:
          return !0
      }
      return !1
    }

    function tZ(CC) {
      const zC = Math.sqrt(CC.x * CC.x + CC.y * CC.y + CC.z * CC.z);
      zC > 0 && (CC.x /= zC, CC.y /= zC, CC.z /= zC)
    }

    function DZ(CC) {
      return CC.x *= -1, CC
    }

    function jZ(CC) {
      if (CC.x * CC.x + CC.y * CC.y > .5) {
        const zC = Math.abs(CC.x),
          ZC = Math.abs(CC.y);
        if (zC > ZC) {
          const ZC = Math.sign(CC.x);
          CC.x = zC, CC.y *= -ZC, CC.z *= -ZC, CC.w *= ZC
        } else {
          const zC = Math.sign(CC.y);
          CC.x *= -zC, CC.y = ZC, CC.z *= zC, CC.w *= -zC
        }
      } else {
        const zC = Math.abs(CC.z),
          ZC = Math.abs(CC.w);
        if (zC > ZC) {
          const ZC = Math.sign(CC.z);
          CC.x *= -ZC, CC.y *= ZC, CC.z = zC, CC.w *= -ZC
        } else {
          const zC = Math.sign(CC.w);
          CC.x *= zC, CC.y *= -zC, CC.z *= -zC, CC.w = ZC
        }
      }
      return CC
    }

    function yZ(CC) {
      CC.L_(-CC.z, CC.w, CC.x, -CC.y)
    }

    function LZ(CC, zC) {
      const ZC = QC.Eg.FromArrayToRef(zC.translation || [0, 0, 0], 0, QC.TmpVectors.Eg[0]),
        wC = QC.Quaternion.FromArrayToRef(zC.rotation || [0, 0, 0, 1], 0, QC.TmpVectors.Quaternion[0]),
        bC = QC.Matrix.ComposeToRef(uZ, wC, ZC, QC.TmpVectors.Matrix[0]),
        nC = QC.Eg.FromArrayToRef(CC.translation || [0, 0, 0], 0, QC.TmpVectors.Eg[2]),
        fC = QC.Quaternion.FromArrayToRef(CC.rotation || [0, 0, 0, 1], 0, QC.TmpVectors.Quaternion[1]),
        oC = QC.Matrix.ComposeToRef(uZ, fC, nC, QC.TmpVectors.Matrix[1]);
      bC.multiplyToRef(oC, oC), oC.decompose(void 0, wC, ZC), ZC.equalsWithEpsilon(XZ, HZ.e) ? delete zC.translation : zC.translation = ZC.VZC(), wC.equalsWithEpsilon(cZ, HZ.e) ? delete zC.rotation : zC.rotation = wC.VZC(), zC.scale && delete zC.scale
    }

    function UZ(CC, zC) {
      if (!(zC instanceof WC.c)) return !1;
      if (!(1 === zC.getChildren().length && 0 === CC.getChildren().length && CC.parent === zC)) return !1;
      const ZC = CC.Km(),
        QC = CC instanceof mZ.h && !ZC.useRightHandedSystem ? rZ : uZ;
      return !!zC.sq.equalsWithEpsilon(QC, HZ.e) || (hC.c.Warn(`Cannot collapse node ${CC.name} into parent node ${zC.name} with modified scaling.`), !1)
    }

    function BZ(CC) {
      if (CC instanceof Array) {
        const zC = new Float32Array(CC);
        return new Uint8Array(zC.buffer, zC.byteOffset, zC.byteLength)
      }
      return ArrayBuffer.isView(CC) ? new Uint8Array(CC.buffer, CC.byteOffset, CC.byteLength) : new Uint8Array(CC)
    }

    function OZ(CC, zC) {
      for (const [ZC, QC] of Object.entries(CC)) {
        const wC = zC[ZC];
        (Array.isArray(QC) && Array.isArray(wC) && kZ(QC, wC) || QC === wC) && delete CC[ZC]
      }
      return CC
    }

    function kZ(CC, zC) {
      return CC.length === zC.length && CC.every(((CC, ZC) => CC === zC[ZC]))
    }
    const VZ = new Map([
      [Int8Array, (CC, zC, ZC) => CC.setInt8(zC, ZC)],
      [Uint8Array, (CC, zC, ZC) => CC.setUint8(zC, ZC)],
      [Uint8ClampedArray, (CC, zC, ZC) => CC.setUint8(zC, ZC)],
      [Int16Array, (CC, zC, ZC) => CC.setInt16(zC, ZC, !0)],
      [Uint16Array, (CC, zC, ZC) => CC.setUint16(zC, ZC, !0)],
      [Int32Array, (CC, zC, ZC) => CC.setInt32(zC, ZC, !0)],
      [Uint32Array, (CC, zC, ZC) => CC.setUint32(zC, ZC, !0)],
      [Float32Array, (CC, zC, ZC) => CC.setFloat32(zC, ZC, !0)],
      [Float64Array, (CC, zC, ZC) => CC.setFloat64(zC, ZC, !0)]
    ]);
    class CQ {
      writeTypedArray(CC) {
        this._checkGrowBuffer(CC.byteLength);
        const zC = VZ.get(CC.constructor);
        for (let ZC = 0; ZC < CC.length; ZC++) zC(this._dataView, this._byteOffset, CC[ZC]), this._byteOffset += CC.BYTES_PER_ELEMENT
      }
      constructor(CC) {
        this._data = new Uint8Array(CC), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(CC) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, CC), this._byteOffset++
      }
      writeInt8(CC) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, CC), this._byteOffset++
      }
      writeInt16(CC) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, CC, !0), this._byteOffset += 2
      }
      writeUInt16(CC) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, CC, !0), this._byteOffset += 2
      }
      writeInt32(CC) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, CC, !0), this._byteOffset += 4
      }
      writeUInt32(CC) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, CC, !0), this._byteOffset += 4
      }
      writeFloat32(CC) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, CC, !0), this._byteOffset += 4
      }
      writeFloat64(CC) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, CC, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(CC) {
        const zC = this.byteOffset + CC;
        if (zC > this._data.byteLength) {
          const CC = new Uint8Array(2 * zC);
          CC.set(this._data), this._data = CC, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function zQ(CC) {
      return CC % 4 === 0 ? 4 : CC % 2 === 0 ? 2 : 1
    }
    class ZQ {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(CC) {
        let zC = 0;
        this._bufferViewToData.forEach((CC => {
          zC += CC.byteLength
        }));
        const ZC = new CQ(zC),
          QC = Array.from(this._bufferViewToData.keys()).sort(((CC, zC) => zQ(zC.byteLength) - zQ(CC.byteLength)));
        for (const wC of QC) {
          wC.byteOffset = ZC.byteOffset, CC.push(wC);
          const zC = CC.length - 1,
            QC = this.getPropertiesWithBufferView(wC);
          for (const CC of QC) CC.bufferView = zC;
          ZC.writeTypedArray(this._bufferViewToData.get(wC)), this._bufferViewToData.delete(wC)
        }
        return ZC.getOutputData()
      }
      createBufferView(CC, zC) {
        const ZC = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: CC.byteLength,
          byteStride: zC
        };
        return this._bufferViewToData.set(ZC, CC), ZC
      }
      createAccessor(CC, zC, ZC, QC, wC, bC, nC) {
        this._verifyBufferView(CC);
        const fC = {
          bufferView: void 0,
          componentType: ZC,
          count: QC,
          type: zC,
          min: bC?.min,
          max: bC?.max,
          normalized: nC,
          byteOffset: wC
        };
        return this.setBufferView(fC, CC), this._accessorToBufferView.set(fC, CC), fC
      }
      setBufferView(CC, zC) {
        this._verifyBufferView(zC);
        this.getPropertiesWithBufferView(zC).push(CC)
      }
      removeBufferView(CC) {
        const zC = this.getPropertiesWithBufferView(CC);
        for (const ZC of zC) void 0 !== ZC.bufferView && delete ZC.bufferView;
        this._bufferViewToData.delete(CC), this._bufferViewToProperties.delete(CC), this._accessorToBufferView.forEach(((zC, ZC) => {
          zC === CC && (void 0 !== ZC.byteOffset && delete ZC.byteOffset, this._accessorToBufferView.delete(ZC))
        }))
      }
      getBufferView(CC) {
        const zC = this._accessorToBufferView.get(CC);
        return this._verifyBufferView(zC), zC
      }
      getPropertiesWithBufferView(CC) {
        return this._verifyBufferView(CC), this._bufferViewToProperties.set(CC, this._bufferViewToProperties.get(CC) ?? []), this._bufferViewToProperties.get(CC)
      }
      getData(CC) {
        return this._verifyBufferView(CC), this._bufferViewToData.get(CC)
      }
      _verifyBufferView(CC) {
        if (void 0 === CC || !this._bufferViewToData.has(CC)) throw new Error(`BufferView ${CC} not found in BufferManager.`)
      }
    }
    var QQ = ZC(40042);
    (0, QQ.h)();
    var wQ = ZC(40274);
    (0, wQ.g)();
    var bQ = ZC(40092),
      nQ = ZC(40934);
    (0, nQ.e)();
    let fQ = (() => {
      var CC;
      let zC, ZC, QC = [],
        wC = [],
        bC = [],
        nC = [];
      return CC = class {
        get influence() {
          return this._influence
        }
        set influence(CC) {
          if (this._influence === CC) return;
          const zC = this._influence;
          this._influence = CC, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === zC || 0 === CC)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(CC) {
          this._animationPropertiesOverride = CC
        }
        constructor(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            fC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = CC, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new CZ.d, this._onDataLayoutChanged = new CZ.d, this.id = (0, vC.n)(this, QC, void 0), this.morphTargetManager = ((0, vC.n)(this, wC), (0, vC.n)(this, bC, null)), this._animationPropertiesOverride = ((0, vC.n)(this, nC), null), this.id = CC, this.morphTargetManager = fC, this._scene = ZC || SC.c.LastCreatedScene, this.influence = zC, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        YnC(CC) {
          const zC = this.hasPositions;
          this._positions = CC, zC !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(CC) {
          const zC = this.hasNormals;
          this._normals = CC, zC !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(CC) {
          const zC = this.hasTangents;
          this._tangents = CC, zC !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(CC) {
          const zC = this.hasUVs;
          this._uvs = CC, zC !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(CC) {
          const zC = this.hasUV2s;
          this._uv2s = CC, zC !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(CC) {
          const zC = this.hasColors;
          this._colors = CC, zC !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const zC = Iz.d.Clone((() => new CC(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return zC._positions = this._positions, zC._normals = this._normals, zC._tangents = this._tangents, zC._uvs = this._uvs, zC._uv2s = this._uv2s, zC._colors = this._colors, zC
        }
        serialize() {
          const CC = {};
          return CC.name = this.name, CC.influence = this.influence, null != this.id && (CC.id = this.id), CC.uniqueId = this.uniqueId, CC.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (CC.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (CC.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (CC.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (CC.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (CC.colors = Array.prototype.slice.call(this.getColors())), Iz.d.AppendSerializedAnimations(this, CC), CC
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(zC, ZC) {
          let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const wC = new CC(zC.name, zC.influence, ZC, QC);
          if (wC.YnC(zC.positions), null != zC.id && (wC.id = zC.id), zC.normals && wC.setNormals(zC.normals), zC.tangents && wC.setTangents(zC.tangents), zC.uvs && wC.setUVs(zC.uvs), zC.uv2s && wC.setUV2s(zC.uv2s), zC.colors && wC.setColors(zC.colors), zC.animations) {
            for (let CC = 0; CC < zC.animations.length; CC++) {
              const ZC = zC.animations[CC],
                QC = (0, Tz.c)("BABYLON.Animation");
              QC && wC.animations.push(QC.Parse(ZC))
            }
            zC.autoAnimate && ZC && ZC.beginAnimation(wC, zC.autoAnimateFrom, zC.autoAnimateTo, zC.autoAnimateLoop, zC.autoAnimateSpeed || 1)
          }
          return wC
        }
        static FromMesh(zC, ZC, QC) {
          ZC || (ZC = zC.name);
          const wC = new CC(ZC, QC, zC.Km(), zC.morphTargetManager);
          return wC.YnC(zC.getVerticesData(rC.k.PositionKind)), zC.isVerticesDataPresent(rC.k.NormalKind) && wC.setNormals(zC.getVerticesData(rC.k.NormalKind)), zC.isVerticesDataPresent(rC.k.TangentKind) && wC.setTangents(zC.getVerticesData(rC.k.TangentKind)), zC.isVerticesDataPresent(rC.k.UVKind) && wC.setUVs(zC.getVerticesData(rC.k.UVKind)), zC.isVerticesDataPresent(rC.k.UV2Kind) && wC.setUV2s(zC.getVerticesData(rC.k.UV2Kind)), zC.isVerticesDataPresent(rC.k.ColorKind) && wC.setColors(zC.getVerticesData(rC.k.ColorKind)), wC
        }
      }, (() => {
        const fC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zC = [(0, eC.M)()], ZC = [(0, eC.M)()], (0, vC.j)(null, null, zC, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: CC => "id" in CC,
            get: CC => CC.id,
            set: (CC, zC) => {
              CC.id = zC
            }
          },
          metadata: fC
        }, QC, wC), (0, vC.j)(null, null, ZC, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: CC => "morphTargetManager" in CC,
            get: CC => CC.morphTargetManager,
            set: (CC, zC) => {
              CC.morphTargetManager = zC
            }
          },
          metadata: fC
        }, bC, nC), fC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fC
        })
      })(), CC
    })();
    var oQ, qQ = ZC(40988),
      FQ = ZC(40084);
    ! function(CC) {
      CC[CC.INTANGENT = 0] = "INTANGENT", CC[CC.OUTTANGENT = 1] = "OUTTANGENT"
    }(oQ || (oQ = {}));
    class WQ {
      static _IsTransformable(CC) {
        return CC && (CC instanceof WC.c || CC instanceof QQ.d || CC instanceof FQ.c)
      }
      static _CreateNodeAnimation(CC, zC, ZC, QC, bC) {
        if (this._IsTransformable(CC)) {
          const nC = [],
            fC = [],
            oC = zC.getKeys(),
            qC = WQ._CalculateMinMaxKeyFrames(oC),
            FC = WQ._DeduceInterpolation(oC, ZC, QC),
            WC = FC.interpolationType,
            NC = FC.shouldBakeAnimation;
          if (NC ? WQ._CreateBakedAnimation(CC, zC, ZC, qC.min, qC.max, zC.framePerSecond, bC, nC, fC, qC, QC) : "LINEAR" === WC || "STEP" === WC ? WQ._CreateLinearOrStepAnimation(CC, zC, ZC, nC, fC, QC) : "CUBICSPLINE" === WC ? WQ._CreateCubicSplineAnimation(CC, zC, ZC, nC, fC, QC) : WQ._CreateBakedAnimation(CC, zC, ZC, qC.min, qC.max, zC.framePerSecond, bC, nC, fC, qC, QC), nC.length && fC.length) {
            return {
              inputs: nC,
              outputs: fC,
              samplerInterpolation: WC,
              inputsMin: NC ? qC.min : wC.Tools.FloatRound(qC.min / zC.framePerSecond),
              inputsMax: NC ? qC.max : wC.Tools.FloatRound(qC.max / zC.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(CC) {
        let zC = null,
          ZC = "VEC3",
          QC = !1;
        const bC = CC.targetProperty.split(".");
        switch (bC[0]) {
          case "sq":
            zC = "scale";
            break;
          case "position":
            zC = "translation";
            break;
          case "rotation":
            ZC = "VEC4", zC = "rotation";
            break;
          case "rotationQuaternion":
            ZC = "VEC4", QC = !0, zC = "rotation";
            break;
          case "influence":
            ZC = "SCALAR", zC = "weights";
            break;
          default:
            wC.Tools.Error(`Unsupported animatable property ${bC[0]}`)
        }
        return zC ? {
          animationChannelTargetPath: zC,
          dataAccessorType: ZC,
          useQuaternion: QC
        } : (wC.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
        let WC;
        if (WQ._IsTransformable(CC) && CC.animations)
          for (const NC of CC.animations) {
            if (FC && !FC(NC)) continue;
            const wC = WQ._DeduceAnimationInfo(NC);
            wC && (WC = {
              name: NC.name,
              samplers: [],
              channels: []
            }, WQ._AddAnimation(`${NC.name}`, NC.hasRunningRuntimeAnimations ? zC : WC, CC, NC, wC.dataAccessorType, wC.animationChannelTargetPath, QC, bC, nC, fC, wC.useQuaternion, oC, qC), WC.samplers.length && WC.channels.length && ZC.push(WC))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
        let WC;
        if (CC instanceof qQ.e) {
          const wC = CC.morphTargetManager;
          if (wC)
            for (let NC = 0; NC < wC.numTargets; ++NC) {
              const MC = wC.getTarget(NC);
              for (const gC of MC.animations) {
                if (FC && !FC(gC)) continue;
                const MC = new nQ.b(`${gC.name}`, "influence", gC.framePerSecond, gC.dataType, gC.zb, gC.enableBlending),
                  SC = [],
                  pC = gC.getKeys();
                for (let CC = 0; CC < pC.length; ++CC) {
                  const zC = pC[CC];
                  for (let CC = 0; CC < wC.numTargets; ++CC) CC == NC ? SC.push(zC) : SC.push({
                    frame: zC.frame,
                    value: 0
                  })
                }
                MC.setKeys(SC, !0);
                const PC = WQ._DeduceAnimationInfo(MC);
                PC && (WC = {
                  name: MC.name,
                  samplers: [],
                  channels: []
                }, WQ._AddAnimation(gC.name, gC.hasRunningRuntimeAnimations ? zC : WC, CC, MC, PC.dataAccessorType, PC.animationChannelTargetPath, QC, bC, nC, fC, PC.useQuaternion, oC, qC, wC.numTargets), WC.samplers.length && WC.channels.length && ZC.push(WC))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
        let FC;
        if (CC.animationGroups) {
          const WC = CC.animationGroups;
          for (const NC of WC) {
            const WC = new Map,
              MC = new Map,
              gC = new Set,
              SC = NC.to - NC.from;
            FC = {
              name: NC.name,
              channels: [],
              samplers: []
            };
            for (let zC = 0; zC < NC.targetedAnimations.length; ++zC) {
              const qC = NC.targetedAnimations[zC],
                SC = qC.target,
                pC = qC.animation;
              if (oC && !oC(pC)) continue;
              const PC = fC.has(SC);
              if (this._IsTransformable(SC) || 1 === SC.length && this._IsTransformable(SC[0])) {
                const CC = WQ._DeduceAnimationInfo(qC.animation);
                if (CC) {
                  const zC = this._IsTransformable(SC) ? SC : this._IsTransformable(SC[0]) ? SC[0] : null;
                  zC && WQ._AddAnimation(`${pC.name}`, FC, zC, pC, CC.dataAccessorType, CC.animationChannelTargetPath, ZC, QC, wC, bC, CC.useQuaternion, nC, PC)
                }
              } else if (SC instanceof fQ || 1 === SC.length && SC[0] instanceof fQ) {
                if (WQ._DeduceAnimationInfo(qC.animation)) {
                  const zC = SC instanceof fQ ? SC : SC[0];
                  if (zC) {
                    const ZC = CC.morphTargetManagers.find((CC => {
                      for (let ZC = 0; ZC < CC.numTargets; ++ZC)
                        if (CC.getTarget(ZC) === zC) return !0;
                      return !1
                    }));
                    if (ZC) {
                      const QC = CC.meshes.find((CC => CC.morphTargetManager === ZC));
                      QC && (WC.has(QC) || WC.set(QC, new Map), WC.get(QC)?.set(zC, pC), gC.add(QC), MC.set(QC, pC))
                    }
                  }
                }
              }
            }
            gC.forEach((CC => {
              const zC = CC.morphTargetManager;
              let fC = null;
              const oC = [],
                qC = MC.get(CC).getKeys(),
                gC = qC.length;
              for (let ZC = 0; ZC < gC; ++ZC)
                for (let QC = 0; QC < zC.numTargets; ++QC) {
                  const wC = zC.getTarget(QC),
                    bC = WC.get(CC);
                  if (bC) {
                    const zC = bC.get(wC);
                    zC ? (fC || (fC = new nQ.b(`${NC.name}_${CC.name}_MorphWeightAnimation`, "influence", zC.framePerSecond, nQ.b.ANIMATIONTYPE_FLOAT, zC.zb, zC.enableBlending)), oC.push(zC.getKeys()[ZC])) : oC.push({
                      frame: NC.from + SC / gC * ZC,
                      value: wC.influence,
                      inTangent: qC[0].inTangent ? 0 : void 0,
                      outTangent: qC[0].outTangent ? 0 : void 0
                    })
                  }
                }
              fC.setKeys(oC, !0);
              const pC = WQ._DeduceAnimationInfo(fC);
              pC && WQ._AddAnimation(`${NC.name}_${CC.name}_MorphWeightAnimation`, FC, CC, fC, pC.dataAccessorType, pC.animationChannelTargetPath, ZC, QC, wC, bC, pC.useQuaternion, nC, !1, zC?.numTargets)
            })), FC.channels.length && FC.samplers.length && (qC?.set(NC, zC.length), zC.push(FC))
          }
        }
      }
      static _AddAnimation(CC, zC, ZC, wC, bC, nC, fC, oC, qC, FC, WC, NC, MC, gC) {
        const SC = WQ._CreateNodeAnimation(ZC, wC, nC, WC, NC);
        let pC, PC, GC, RC, AC, xC;
        if (SC) {
          if (gC) {
            let CC, zC = 0;
            const ZC = [];
            for (; SC.inputs.length > 0;) CC = SC.inputs.shift(), zC % gC == 0 && ZC.push(CC), zC++;
            SC.inputs = ZC
          }
          const CC = fC.get(ZC),
            wC = new Float32Array(SC.inputs);
          pC = oC.createBufferView(wC), PC = oC.createAccessor(pC, "SCALAR", 5126, SC.inputs.length, void 0, {
            min: [SC.inputsMin],
            max: [SC.inputsMax]
          }), FC.push(PC), GC = FC.length - 1;
          const qC = new QC.Quaternion,
            WC = new QC.Eg,
            NC = new QC.Eg,
            JC = ZC instanceof QQ.d,
            IC = TZ(bC),
            iC = new Float32Array(SC.outputs.length * IC);
          SC.outputs.forEach((function(CC, zC) {
            let ZC = CC;
            switch (nC) {
              case "translation":
                MC && (QC.Eg.FromArrayToRef(CC, 0, NC), DZ(NC), NC.toArray(ZC));
                break;
              case "rotation":
                4 === CC.length ? QC.Quaternion.FromArrayToRef(CC, 0, qC) : (ZC = new Array(4), QC.Eg.FromArrayToRef(CC, 0, WC), QC.Quaternion.FromEulerVectorToRef(WC, qC)), MC && (jZ(qC), JC && yZ(qC)), qC.toArray(ZC)
            }
            iC.set(ZC, zC * IC)
          })), pC = oC.createBufferView(iC), PC = oC.createAccessor(pC, bC, 5126, SC.outputs.length), FC.push(PC), RC = FC.length - 1, AC = {
            interpolation: SC.samplerInterpolation,
            input: GC,
            output: RC
          }, zC.samplers.push(AC), xC = {
            sampler: zC.samplers.length - 1,
            target: {
              node: CC,
              path: nC
            }
          }, zC.channels.push(xC)
        }
      }
      static _CreateBakedAnimation(CC, zC, ZC, bC, nC, fC, oC, qC, FC, WC, NC) {
        let MC;
        const gC = QC.Quaternion.Identity();
        let SC, pC, PC, GC, RC, AC = null,
          xC = null;
        WC.min = wC.Tools.FloatRound(bC / fC);
        const JC = zC.getKeys();
        for (let QC = 0, IC = JC.length; QC < IC; ++QC) {
          if (pC = JC[QC], QC + 1 < IC)
            if (PC = JC[QC + 1], pC.value.equals && pC.value.equals(PC.value) || pC.value === PC.value) {
              if (0 !== QC) continue;
              RC = pC.frame
            } else RC = PC.frame;
          else {
            if (GC = JC[QC - 1], pC.value.equals && pC.value.equals(GC.value) || pC.value === GC.value) continue;
            RC = nC
          }
          if (RC)
            for (let QC = pC.frame; QC <= RC; QC += oC) {
              if (SC = wC.Tools.FloatRound(QC / fC), SC === AC) continue;
              AC = SC, xC = SC;
              const bC = {
                key: 0,
                repeatCount: 0,
                zb: zC.zb
              };
              MC = zC._interpolate(QC, bC), WQ._SetInterpolatedValue(CC, MC, SC, zC, ZC, gC, qC, FC, NC)
            }
        }
        xC && (WC.max = xC)
      }
      static _ConvertFactorToVector3OrQuaternion(CC, zC, ZC, bC, nC) {
        const fC = WQ._GetBasePositionRotationOrScale(zC, bC, nC),
          oC = ZC.targetProperty.split("."),
          qC = oC ? oC[1] : "",
          FC = nC ? QC.Quaternion.FromArray(fC).normalize() : QC.Eg.FromArray(fC);
        switch (qC) {
          case "x":
          case "y":
          case "z":
            FC[qC] = CC;
            break;
          case "w":
            FC.w = CC;
            break;
          default:
            wC.Tools.Error(`glTFAnimation: Unsupported component name "${qC}"!`)
        }
        return FC
      }
      static _SetInterpolatedValue(CC, zC, ZC, wC, bC, nC, fC, oC, qC) {
        let FC;
        fC.push(ZC), "weights" !== bC ? (wC.dataType === nQ.b.ANIMATIONTYPE_FLOAT && (zC = this._ConvertFactorToVector3OrQuaternion(zC, CC, wC, bC, qC)), "rotation" === bC ? (qC ? nC = zC : (FC = zC, QC.Quaternion.RotationYawPitchRollToRef(FC.y, FC.x, FC.z, nC)), oC.push(nC.VZC())) : (FC = zC, oC.push(FC.VZC()))) : oC.push([zC])
      }
      static _CreateLinearOrStepAnimation(CC, zC, ZC, QC, wC, bC) {
        for (const nC of zC.getKeys()) QC.push(nC.frame / zC.framePerSecond), WQ._AddKeyframeValue(nC, zC, wC, ZC, CC, bC)
      }
      static _CreateCubicSplineAnimation(CC, zC, ZC, QC, wC, bC) {
        zC.getKeys().forEach((function(nC) {
          QC.push(nC.frame / zC.framePerSecond), WQ._AddSplineTangent(oQ.INTANGENT, wC, ZC, "CUBICSPLINE", nC, bC), WQ._AddKeyframeValue(nC, zC, wC, ZC, CC, bC), WQ._AddSplineTangent(oQ.OUTTANGENT, wC, ZC, "CUBICSPLINE", nC, bC)
        }))
      }
      static _GetBasePositionRotationOrScale(CC, zC, ZC) {
        let wC;
        if ("rotation" === zC)
          if (ZC) {
            wC = (CC.rotationQuaternion ?? QC.Quaternion.Identity()).VZC()
          } else {
            wC = (CC.rotation ?? QC.Eg.Zero()).VZC()
          }
        else if ("translation" === zC) {
          wC = (CC.position ?? QC.Eg.Zero()).VZC()
        } else {
          wC = (CC.sq ?? QC.Eg.One()).VZC()
        }
        return wC
      }
      static _AddKeyframeValue(CC, zC, ZC, bC, nC, fC) {
        let oC;
        const qC = zC.dataType;
        if (qC === nQ.b.ANIMATIONTYPE_VECTOR3) {
          let zC = CC.value.VZC();
          if ("rotation" === bC) {
            const CC = QC.Eg.FromArray(zC);
            zC = QC.Quaternion.RotationYawPitchRoll(CC.y, CC.x, CC.z).VZC()
          }
          ZC.push(zC)
        } else if (qC === nQ.b.ANIMATIONTYPE_FLOAT) {
          if ("weights" === bC) ZC.push([CC.value]);
          else if (oC = this._ConvertFactorToVector3OrQuaternion(CC.value, nC, zC, bC, fC), oC) {
            if ("rotation" === bC) {
              const CC = fC ? oC : QC.Quaternion.RotationYawPitchRoll(oC.y, oC.x, oC.z).normalize();
              ZC.push(CC.VZC())
            }
            ZC.push(oC.VZC())
          }
        } else qC === nQ.b.ANIMATIONTYPE_QUATERNION ? ZC.push(CC.value.normalize().VZC()) : wC.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(CC, zC, ZC) {
        let QC, wC, bC = !1;
        if ("rotation" === zC && !ZC) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let nC = 0, fC = CC.length; nC < fC; ++nC)
          if (wC = CC[nC], wC.inTangent || wC.outTangent)
            if (QC) {
              if ("CUBICSPLINE" !== QC) {
                QC = "LINEAR", bC = !0;
                break
              }
            } else QC = "CUBICSPLINE";
        else if (QC) {
          if ("CUBICSPLINE" === QC || wC.interpolation && 1 === wC.interpolation && "STEP" !== QC) {
            QC = "LINEAR", bC = !0;
            break
          }
        } else QC = wC.interpolation && 1 === wC.interpolation ? "STEP" : "LINEAR";
        return QC || (QC = "LINEAR"), {
          interpolationType: QC,
          shouldBakeAnimation: bC
        }
      }
      static _AddSplineTangent(CC, zC, ZC, wC, bC, nC) {
        let fC;
        const oC = CC === oQ.INTANGENT ? bC.inTangent : bC.outTangent;
        if ("CUBICSPLINE" === wC) {
          if ("rotation" === ZC)
            if (oC)
              if (nC) fC = oC.VZC();
              else {
                const CC = oC;
                fC = QC.Quaternion.RotationYawPitchRoll(CC.y, CC.x, CC.z).VZC()
              }
          else fC = [0, 0, 0, 0];
          else fC = "weights" === ZC ? oC ? [oC] : [0] : oC ? oC.VZC() : [0, 0, 0];
          zC.push(fC)
        }
      }
      static _CalculateMinMaxKeyFrames(CC) {
        let zC = 1 / 0,
          ZC = -1 / 0;
        return CC.forEach((function(CC) {
          zC = Math.min(zC, CC.frame), ZC = Math.max(ZC, CC.frame)
        })), {
          min: zC,
          max: ZC
        }
      }
    }

    function NQ(CC, zC, ZC, bC, nC, fC) {
      const oC = {
          attributes: {},
          influence: CC.influence,
          name: CC.name
        },
        qC = zC.geometry;
      if (!qC) return wC.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), oC;
      const WC = fC ? -1 : 1,
        NC = QC.Eg.Zero();
      let MC, gC;
      if (CC.hasPositions) {
        const bC = CC.getPositions(),
          fC = qC.getVerticesData(FC.f.PositionKind);
        if (fC) {
          const CC = new Float32Array(fC.length),
            zC = [1 / 0, 1 / 0, 1 / 0],
            wC = [-1 / 0, -1 / 0, -1 / 0];
          gC = fC.length / 3, MC = 0;
          for (let ZC = MC; ZC < gC; ++ZC) {
            const nC = QC.Eg.FromArray(fC, 3 * ZC);
            QC.Eg.FromArray(bC, 3 * ZC).subtractToRef(nC, NC), NC.x *= WC, zC[0] = Math.min(zC[0], NC.x), wC[0] = Math.max(wC[0], NC.x), zC[1] = Math.min(zC[1], NC.y), wC[1] = Math.max(wC[1], NC.y), zC[2] = Math.min(zC[2], NC.z), wC[2] = Math.max(wC[2], NC.z), CC[3 * ZC] = NC.x, CC[3 * ZC + 1] = NC.y, CC[3 * ZC + 2] = NC.z
          }
          const qC = ZC.createBufferView(CC, 12),
            FC = ZC.createAccessor(qC, "VEC3", 5126, bC.length / 3, 0, {
              min: zC,
              max: wC
            });
          nC.push(FC), oC.attributes.POSITION = nC.length - 1
        } else wC.Tools.Warn(`Morph target positions for mesh ${zC.name} were not exported. Mesh does not have position vertex data`)
      }
      if (CC.hasNormals) {
        const bC = CC.getNormals(),
          fC = qC.getVerticesData(FC.f.NormalKind);
        if (fC) {
          const CC = new Float32Array(fC.length);
          gC = fC.length / 3, MC = 0;
          for (let ZC = MC; ZC < gC; ++ZC) {
            const zC = QC.Eg.FromArray(fC, 3 * ZC).normalize();
            QC.Eg.FromArray(bC, 3 * ZC).normalize().subtractToRef(zC, NC), CC[3 * ZC] = NC.x * WC, CC[3 * ZC + 1] = NC.y, CC[3 * ZC + 2] = NC.z
          }
          const zC = ZC.createBufferView(CC, 12),
            wC = ZC.createAccessor(zC, "VEC3", 5126, bC.length / 3, 0);
          nC.push(wC), oC.attributes.NORMAL = nC.length - 1
        } else wC.Tools.Warn(`Morph target normals for mesh ${zC.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (CC.hasTangents) {
        const bC = CC.getTangents(),
          fC = qC.getVerticesData(FC.f.TangentKind);
        if (fC) {
          gC = fC.length / 4;
          const CC = new Float32Array(3 * gC);
          MC = 0;
          for (let ZC = MC; ZC < gC; ++ZC) {
            const zC = QC.Eg.FromArray(fC, 4 * ZC);
            tZ(zC);
            const wC = QC.Eg.FromArray(bC, 3 * ZC);
            tZ(wC), wC.subtractToRef(zC, NC), CC[3 * ZC] = NC.x * WC, CC[3 * ZC + 1] = NC.y, CC[3 * ZC + 2] = NC.z
          }
          const zC = ZC.createBufferView(CC, 12),
            wC = ZC.createAccessor(zC, "VEC3", 5126, gC, 0);
          nC.push(wC), oC.attributes.TANGENT = nC.length - 1
        } else wC.Tools.Warn(`Morph target tangents for mesh ${zC.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (CC.hasColors) {
        const bC = CC.getColors(),
          fC = qC.getVerticesData(FC.f.ColorKind),
          WC = qC.getVertexBuffer(FC.f.ColorKind);
        if (fC && WC) {
          const CC = WC.getSize();
          gC = fC.length / CC;
          const zC = new Float32Array(gC * CC);
          MC = 0;
          for (let ZC = MC; ZC < gC; ++ZC)
            if (3 === CC) {
              const wC = QC.Eg.FromArray(fC, ZC * CC);
              QC.Eg.FromArray(bC, ZC * CC).subtractToRef(wC, NC), zC[3 * ZC] = NC.x, zC[3 * ZC + 1] = NC.y, zC[3 * ZC + 2] = NC.z
            } else if (4 === CC) {
            const wC = new QC.Vector4,
              nC = QC.Vector4.FromArray(fC, ZC * CC);
            QC.Vector4.FromArray(bC, ZC * CC).subtractToRef(nC, wC), zC[4 * ZC] = wC.x, zC[4 * ZC + 1] = wC.y, zC[4 * ZC + 2] = wC.z, zC[4 * ZC + 3] = wC.w
          } else wC.Tools.Warn(`Unsupported number of components for color attribute: ${CC}`);
          const qC = ZC.createBufferView(zC, 4 * CC),
            FC = ZC.createAccessor(qC, 3 === CC ? "VEC3" : "VEC4", 5126, gC, 0);
          nC.push(FC), oC.attributes.COLOR_0 = nC.length - 1
        } else wC.Tools.Warn(`Morph target colors for mesh ${zC.name} were not exported. Mesh does not have colors vertex data`)
      }
      return oC
    }
    var MQ = ZC(41392);
    class gQ {}
    gQ.DEFAULT_COLOR = jC.e.White(), gQ.DEFAULT_WIDTH_ATTENUATED = 1, gQ.DEFAULT_WIDTH = .1;
    var SQ = ZC(40930);
    class pQ {
      constructor(CC) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = CC
      }
      moveTo(CC, zC) {
        this._currentPath = new SQ.g(CC, zC), this._tempPaths.push(this._currentPath)
      }
      lineTo(CC, zC) {
        this._currentPath.addLineTo(CC, zC)
      }
      quadraticCurveTo(CC, zC, ZC, QC) {
        this._currentPath.addQuadraticCurveTo(CC, zC, ZC, QC, this._resolution)
      }
      bezierCurveTo(CC, zC, ZC, QC, wC, bC) {
        this._currentPath.addBezierCurveTo(CC, zC, ZC, QC, wC, bC, this._resolution)
      }
      extractHoles() {
        for (const CC of this._tempPaths) CC.area() > 0 ? this._holes.push(CC) : this._paths.push(CC);
        if (!this._paths.length && this._holes.length) {
          const CC = this._holes;
          this._holes = this._paths, this._paths = CC
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

    function PQ(CC, zC, ZC, QC, wC, bC) {
      const nC = bC.glyphs[CC] || bC.glyphs["?"];
      if (!nC) return null;
      const fC = new pQ(wC);
      if (nC.o) {
        const CC = nC.o.split(" ");
        for (let wC = 0, bC = CC.length; wC < bC;) {
          switch (CC[wC++]) {
            case "m": {
              const bC = parseInt(CC[wC++]) * zC + ZC,
                nC = parseInt(CC[wC++]) * zC + QC;
              fC.moveTo(bC, nC);
              break
            }
            case "l": {
              const bC = parseInt(CC[wC++]) * zC + ZC,
                nC = parseInt(CC[wC++]) * zC + QC;
              fC.lineTo(bC, nC);
              break
            }
            case "q": {
              const bC = parseInt(CC[wC++]) * zC + ZC,
                nC = parseInt(CC[wC++]) * zC + QC,
                oC = parseInt(CC[wC++]) * zC + ZC,
                qC = parseInt(CC[wC++]) * zC + QC;
              fC.quadraticCurveTo(oC, qC, bC, nC);
              break
            }
            case "b": {
              const bC = parseInt(CC[wC++]) * zC + ZC,
                nC = parseInt(CC[wC++]) * zC + QC,
                oC = parseInt(CC[wC++]) * zC + ZC,
                qC = parseInt(CC[wC++]) * zC + QC,
                FC = parseInt(CC[wC++]) * zC + ZC,
                WC = parseInt(CC[wC++]) * zC + QC;
              fC.bezierCurveTo(oC, qC, FC, WC, bC, nC);
              break
            }
          }
        }
      }
      return fC.extractHoles(), {
        offsetX: nC.ha * zC,
        shapePath: fC
      }
    }

    function GQ(CC, zC, ZC, QC) {
      const wC = Array.from(CC),
        bC = zC / QC.resolution,
        nC = (QC.boundingBox.yMax - QC.boundingBox.yMin + QC.underlineThickness) * bC,
        fC = [];
      let oC = 0,
        qC = 0;
      for (let FC = 0; FC < wC.length; FC++) {
        const CC = wC[FC];
        if ("\n" === CC) oC = 0, qC -= nC;
        else {
          const zC = PQ(CC, bC, oC, qC, ZC, QC);
          zC && (oC += zC.offsetX, fC.push(zC.shapePath))
        }
      }
      return fC
    }
    class RQ {
      static ConvertPoints(CC, zC) {
        if (CC.length && Array.isArray(CC) && "number" === typeof CC[0]) return [CC];
        if (CC.length && Array.isArray(CC[0]) && "number" === typeof CC[0][0]) return CC;
        if (CC.length && !Array.isArray(CC[0]) && CC[0] instanceof uC.r) {
          const zC = [];
          for (let ZC = 0; ZC < CC.length; ZC++) {
            const QC = CC[ZC];
            zC.push(QC.x, QC.y, QC.z)
          }
          return [zC]
        }
        if (CC.length > 0 && Array.isArray(CC[0]) && CC[0].length > 0 && CC[0][0] instanceof uC.r) {
          const zC = [],
            ZC = CC;
          for (const CC of ZC) zC.push(CC.flatMap((CC => [CC.x, CC.y, CC.z])));
          return zC
        }
        if (CC instanceof Float32Array) {
          if (zC?.floatArrayStride) {
            const ZC = [],
              QC = 3 * zC.floatArrayStride;
            for (let zC = 0; zC < CC.length; zC += QC) {
              const wC = new Array(QC);
              for (let ZC = 0; ZC < QC; ZC++) wC[ZC] = CC[zC + ZC];
              ZC.push(wC)
            }
            return ZC
          }
          return [Array.from(CC)]
        }
        if (CC.length && CC[0] instanceof Float32Array) {
          const zC = [];
          for (const ZC of CC) zC.push(Array.from(ZC));
          return zC
        }
        return []
      }
      static OmitZeroLengthPredicate(CC, zC, ZC) {
        const QC = [];
        return zC.subtract(CC).lengthSquared() > 0 && QC.push([CC, zC]), ZC.subtract(zC).lengthSquared() > 0 && QC.push([zC, ZC]), CC.subtract(ZC).lengthSquared() > 0 && QC.push([ZC, CC]), 0 === QC.length ? null : QC
      }
      static OmitDuplicatesPredicate(CC, zC, ZC, QC) {
        const wC = [];
        return RQ._SearchInPoints(CC, zC, QC) || wC.push([CC, zC]), RQ._SearchInPoints(zC, ZC, QC) || wC.push([zC, ZC]), RQ._SearchInPoints(ZC, CC, QC) || wC.push([ZC, CC]), 0 === wC.length ? null : wC
      }
      static _SearchInPoints(CC, zC, ZC) {
        for (const QC of ZC)
          for (let ZC = 0; ZC < QC.length; ZC++)
            if (QC[ZC]?.equals(CC) && (QC[ZC + 1]?.equals(zC) || QC[ZC - 1]?.equals(zC))) return !0;
        return !1
      }
      static MeshesToLines(CC, zC) {
        const ZC = [];
        for (let QC = 0; QC < CC.length; QC++) {
          const wC = CC[QC],
            bC = wC.getVerticesData(rC.k.PositionKind),
            nC = wC.CQC();
          if (bC && nC)
            for (let CC = 0, fC = 0; CC < nC.length; CC++) {
              const oC = 3 * nC[fC++],
                qC = 3 * nC[fC++],
                FC = 3 * nC[fC++],
                WC = new uC.r(bC[oC], bC[oC + 1], bC[oC + 2]),
                NC = new uC.r(bC[qC], bC[qC + 1], bC[qC + 2]),
                MC = new uC.r(bC[FC], bC[FC + 1], bC[FC + 2]);
              if (zC) {
                const fC = zC(WC, NC, MC, ZC, CC, oC, wC, QC, bC, nC);
                if (fC)
                  for (const CC of fC) ZC.push(CC)
              } else ZC.push([WC, NC], [NC, MC], [MC, WC])
            }
        }
        return ZC
      }
      static ToVector3Array(CC) {
        if (Array.isArray(CC[0])) {
          const zC = [],
            ZC = CC;
          for (const CC of ZC) {
            const ZC = [];
            for (let zC = 0; zC < CC.length; zC += 3) ZC.push(new uC.r(CC[zC], CC[zC + 1], CC[zC + 2]));
            zC.push(ZC)
          }
          return zC
        }
        const zC = CC,
          ZC = [];
        for (let QC = 0; QC < zC.length; QC += 3) ZC.push(new uC.r(zC[QC], zC[QC + 1], zC[QC + 2]));
        return ZC
      }
      static ToNumberArray(CC) {
        return CC.flatMap((CC => [CC.x, CC.y, CC.z]))
      }
      static GetPointsCountInfo(CC) {
        const zC = new Array(CC.length);
        let ZC = 0;
        for (let QC = CC.length; QC--;) zC[QC] = CC[QC].length / 3, ZC += zC[QC];
        return {
          total: ZC,
          counts: zC
        }
      }
      static GetLineLength(CC) {
        if (0 === CC.length) return 0;
        let zC;
        zC = "number" === typeof CC[0] ? RQ.ToVector3Array(CC) : CC;
        const ZC = uC.j.Eg[0];
        let QC = 0;
        for (let wC = 0; wC < zC.length - 1; wC++) {
          const CC = zC[wC];
          QC += zC[wC + 1].subtractToRef(CC, ZC).length()
        }
        return QC
      }
      static GetLineLengthArray(CC, zC) {
        const ZC = zC ? new Float32Array(zC, 0, CC.length / 3) : new Float32Array(CC.length / 3);
        let QC = 0;
        for (let wC = 0, bC = CC.length / 3 - 1; wC < bC; wC++) {
          let zC = CC[3 * wC + 0],
            bC = CC[3 * wC + 1],
            nC = CC[3 * wC + 2];
          zC -= CC[3 * wC + 3], bC -= CC[3 * wC + 4], nC -= CC[3 * wC + 5];
          QC += Math.sqrt(zC * zC + bC * bC + nC * nC), ZC[wC + 1] = QC
        }
        return ZC
      }
      static SegmentizeSegmentByCount(CC, zC, ZC) {
        const QC = [],
          wC = zC.subtract(CC),
          bC = uC.j.Eg[0];
        bC.Q_(ZC);
        const nC = uC.j.Eg[1];
        wC.divideToRef(bC, nC);
        let fC = CC.clone();
        QC.push(fC);
        for (let oC = 0; oC < ZC; oC++) fC = fC.clone(), QC.push(fC.addInPlace(nC));
        return QC
      }
      static SegmentizeLineBySegmentLength(CC, zC) {
        const ZC = CC[0] instanceof uC.r ? RQ.GetLineSegments(CC) : "number" === typeof CC[0] ? RQ.GetLineSegments(RQ.ToVector3Array(CC)) : CC,
          QC = [];
        for (const wC of ZC)
          if (wC.length > zC) {
            const CC = RQ.SegmentizeSegmentByCount(wC.point1, wC.point2, Math.ceil(wC.length / zC));
            for (const zC of CC) QC.push(zC)
          } else QC.push(wC.point1), QC.push(wC.point2);
        return QC
      }
      static SegmentizeLineBySegmentCount(CC, zC) {
        const ZC = "number" === typeof CC[0] ? RQ.ToVector3Array(CC) : CC,
          QC = RQ.GetLineLength(ZC) / zC;
        return RQ.SegmentizeLineBySegmentLength(ZC, QC)
      }
      static GetLineSegments(CC) {
        const zC = [];
        for (let ZC = 0; ZC < CC.length - 1; ZC++) {
          const QC = CC[ZC],
            wC = CC[ZC + 1],
            bC = wC.subtract(QC).length();
          zC.push({
            point1: QC,
            point2: wC,
            length: bC
          })
        }
        return zC
      }
      static GetMinMaxSegmentLength(CC) {
        const zC = RQ.GetLineSegments(CC).sort((CC => CC.length));
        return {
          min: zC[0].length,
          max: zC[zC.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const wC = zC * ZC;
        let bC = 0,
          nC = 0;
        const fC = CC.length;
        for (let qC = 0; qC < fC; qC++) {
          if (wC <= bC + CC[qC].length) {
            nC = qC;
            break
          }
          bC += CC[qC].length
        }
        const oC = (wC - bC) / CC[nC].length;
        return CC[nC].point2.subtractToRef(CC[nC].point1, uC.j.Eg[0]), uC.j.Eg[0].scaleToRef(oC, uC.j.Eg[1]), QC || uC.j.Eg[1].addInPlace(CC[nC].point1), uC.j.Eg[1].clone()
      }
      static GetCircleLinePoints(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CC,
          wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / zC;
        const bC = [];
        for (let nC = 0; nC <= zC; nC++) bC.push(new uC.r(Math.cos(nC * wC) * CC, Math.sin(nC * wC) * QC, ZC));
        return bC
      }
      static GetBezierLinePoints(CC, zC, ZC, QC) {
        return SQ.d.CreateQuadraticBezier(CC, zC, ZC, QC).getPoints().flatMap((CC => [CC.x, CC.y, CC.z]))
      }
      static GetArrowCap(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [CC.clone(), CC.add(zC.multiplyByFloats(ZC, ZC, ZC))],
          widths: [QC, wC, bC, nC]
        }
      }
      static GetPointsFromText(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const nC = [],
          fC = GQ(CC, zC, ZC, QC);
        for (const oC of fC) {
          for (const CC of oC.paths) {
            const zC = [],
              ZC = CC.getPoints();
            for (const CC of ZC) zC.push(CC.x, CC.y, wC);
            nC.push(zC)
          }
          if (bC)
            for (const CC of oC.holes) {
              const zC = [],
                ZC = CC.getPoints();
              for (const CC of ZC) zC.push(CC.x, CC.y, wC);
              nC.push(zC)
            }
        }
        return nC
      }
      static Color3toRGBAUint8(CC) {
        const zC = new Uint8Array(4 * CC.length);
        for (let ZC = 0, QC = 0; ZC < CC.length; ZC++) zC[QC++] = 255 * CC[ZC].r, zC[QC++] = 255 * CC[ZC].g, zC[QC++] = 255 * CC[ZC].b, zC[QC++] = 255;
        return zC
      }
      static CreateColorsTexture(CC, zC, ZC, QC) {
        const wC = QC.mg().getCaps().maxTextureSize ?? 1,
          bC = zC.length > wC ? wC : zC.length,
          nC = Math.ceil(zC.length / wC);
        nC > 1 && (zC = [...zC, ...Array(bC * nC - zC.length).fill(zC[0])]);
        const fC = RQ.Color3toRGBAUint8(zC),
          oC = new JC.b(fC, bC, nC, FZ.d.TEXTUREFORMAT_RGBA, QC, !1, !0, ZC);
        return oC.name = CC, oC
      }
      static PrepareEmptyColorsTexture(CC) {
        if (!gQ.EmptyColorsTexture) {
          const zC = new Uint8Array(4);
          gQ.EmptyColorsTexture = new JC.b(zC, 1, 1, FZ.d.TEXTUREFORMAT_RGBA, CC, !1, !1, JC.b.NEAREST_NEAREST), gQ.EmptyColorsTexture.name = "grlEmptyColorsTexture", gQ.EmptyColorsTexture.Tm.addOnce((() => {
            gQ.EmptyColorsTexture = null
          }))
        }
        return gQ.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        gQ.EmptyColorsTexture?.dispose(), gQ.EmptyColorsTexture = null
      }
      static BooleanToNumber(CC) {
        return CC ? 1 : 0
      }
    }
    class AQ extends sC.b {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class xQ extends TC.c {
      isCompatible(CC) {
        return !0
      }
      constructor(CC, zC, ZC) {
        ZC = ZC || {
          color: gQ.DEFAULT_COLOR
        };
        const QC = new AQ;
        QC.GREASED_LINE_HAS_COLOR = !!ZC.color && !ZC.useColors, QC.GREASED_LINE_SIZE_ATTENUATION = ZC.sizeAttenuation ?? !1, QC.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === ZC.colorDistributionType, QC.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (zC ?? CC.Km()).useRightHandedSystem, QC.GREASED_LINE_CAMERA_FACING = ZC.cameraFacing ?? !0, super(CC, xQ.GREASED_LINE_MATERIAL_NAME, 200, QC, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = ZC?.forceGLSL || xQ.ForceGLSL, this._scene = zC ?? CC.Km(), this._engine = this._scene.mg(), this._cameraFacing = ZC.cameraFacing ?? !0, this.visibility = ZC.visibility ?? 1, this.useDash = ZC.useDash ?? !1, this.dashRatio = ZC.dashRatio ?? .5, this.dashOffset = ZC.dashOffset ?? 0, this.width = ZC.width ? ZC.width : ZC.sizeAttenuation ? gQ.DEFAULT_WIDTH_ATTENUATED : gQ.DEFAULT_WIDTH, this._sizeAttenuation = ZC.sizeAttenuation ?? !1, this.colorMode = ZC.colorMode ?? 0, this._color = ZC.color ?? null, this.useColors = ZC.useColors ?? !1, this._colorsDistributionType = ZC.colorDistributionType ?? 0, this.colorsSampling = ZC.colorsSampling ?? JC.b.NEAREST_NEAREST, this._colors = ZC.colors ?? null, this.dashCount = ZC.dashCount ?? 1, this.resolution = ZC.resolution ?? new uC.n(this._engine.getRenderWidth(), this._engine.getRenderHeight()), ZC.colorsTexture ? this.colorsTexture = ZC.colorsTexture : this._colors ? this.colorsTexture = RQ.CreateColorsTexture(`${CC.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? gQ.DEFAULT_COLOR, RQ.PrepareEmptyColorsTexture(this._scene)), this._engine.Tm.add((() => {
          RQ.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(CC) {
        CC.push("grl_offsets"), CC.push("grl_widths"), CC.push("grl_colorPointers"), CC.push("grl_counters"), this._cameraFacing ? (CC.push("grl_previousAndSide"), CC.push("grl_nextAndCounters")) : CC.push("grl_slopes")
      }
      getSamplers(CC) {
        CC.push("grl_colors")
      }
      getActiveTextures(CC) {
        this.colorsTexture && CC.push(this.colorsTexture)
      }
      getUniforms() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const zC = [{
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
        return this._cameraFacing && zC.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === CC && zC.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: zC,
          vertex: this._cameraFacing && this._isGLSL(CC) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(CC) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(CC) {
        if (this._cameraFacing) {
          CC.x_("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || CC.x_("viewProjection", this._scene.getTransformMatrix());
          const zC = uC.j.Vector4[0];
          zC.x = this._aspect, zC.y = this._resolution.x, zC.z = this._resolution.y, zC.w = this.width, CC.updateVector4("grl_aspect_resolution_lineWidth", zC)
        }
        const zC = uC.j.Vector4[0];
        zC.x = RQ.BooleanToNumber(this.useDash), zC.y = this._dashArray, zC.z = this.dashOffset, zC.w = this.dashRatio, CC.updateVector4("grl_dashOptions", zC);
        const ZC = uC.j.Vector4[1];
        ZC.x = this.colorMode, ZC.y = this.visibility, ZC.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, ZC.w = RQ.BooleanToNumber(this.useColors), CC.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", ZC), this._color && CC.updateColor3("grl_singleColor", this._color);
        const QC = this.colorsTexture ?? gQ.EmptyColorsTexture;
        CC.setTexture("grl_colors", QC), CC.updateFloat2("grl_textureSize", QC?.getSize().width ?? 1, QC?.getSize().height ?? 1)
      }
      prepareDefines(CC, zC, ZC) {
        CC.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, CC.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, CC.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, CC.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = zC.useRightHandedSystem, CC.GREASED_LINE_CAMERA_FACING = this._cameraFacing, CC.GREASED_LINE_USE_OFFSETS = !!ZC.offsets
      }
      getClassName() {
        return xQ.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(zC) ? function(CC, zC) {
          if ("vertex" === CC) {
            const CC = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return zC && (CC["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), CC
          }
          return "fragment" === CC ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(CC, this._cameraFacing) : function(CC, zC) {
          if ("vertex" === CC) {
            const CC = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return zC && (CC["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), CC
          }
          return "fragment" === CC ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(CC, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(CC) {
        this.setColors(CC)
      }
      setColors(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QC = this._colors?.length ?? 0;
        if (this._colors = CC, null !== CC && 0 !== CC.length) {
          if (!zC || ZC)
            if (this.colorsTexture && QC === CC.length && !ZC) {
              const zC = RQ.Color3toRGBAUint8(CC);
              this.colorsTexture.update(zC)
            } else this.colorsTexture?.dispose(), this.colorsTexture = RQ.CreateColorsTexture(`${this._material.name}-colors-texture`, CC, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(CC) {
        this._dashCount = CC, this._dashArray = 1 / CC
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(CC) {
        this._sizeAttenuation = CC, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(CC) {
        this.setColor(CC)
      }
      setColor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== CC || null !== this._color && null === CC ? (this._color = CC, zC || this.markAllDefinesAsDirty()) : this._color = CC
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(CC) {
        this._colorsDistributionType = CC, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(CC) {
        this._aspect = CC.x / CC.y, this._resolution = CC
      }
      serialize() {
        const CC = super.serialize(),
          zC = {
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
        return this._colors && (zC.colors = this._colors), this._color && (zC.color = this._color), CC.greasedLineMaterialOptions = zC, CC
      }
      parse(CC, zC, ZC) {
        super.parse(CC, zC, ZC);
        const QC = CC.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), QC.color && this.setColor(QC.color, !0), QC.colorDistributionType && (this.colorsDistributionType = QC.colorDistributionType), QC.colors && (this.colors = QC.colors), QC.colorsSampling && (this.colorsSampling = QC.colorsSampling), QC.colorMode && (this.colorMode = QC.colorMode), QC.useColors && (this.useColors = QC.useColors), QC.visibility && (this.visibility = QC.visibility), QC.useDash && (this.useDash = QC.useDash), QC.dashCount && (this.dashCount = QC.dashCount), QC.dashRatio && (this.dashRatio = QC.dashRatio), QC.dashOffset && (this.dashOffset = QC.dashOffset), QC.width && (this.width = QC.width), QC.sizeAttenuation && (this.sizeAttenuation = QC.sizeAttenuation), QC.resolution && (this.resolution = QC.resolution), this.colors ? this.colorsTexture = RQ.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, zC) : RQ.PrepareEmptyColorsTexture(zC), this.markAllDefinesAsDirty()
      }
      copyTo(CC) {
        const zC = CC;
        zC.colorsTexture?.dispose(), this._colors && (zC.colorsTexture = RQ.CreateColorsTexture(`${zC._material.name}-colors-texture`, this._colors, zC.colorsSampling, this._scene)), zC.setColor(this.color, !0), zC.colorsDistributionType = this.colorsDistributionType, zC.colorsSampling = this.colorsSampling, zC.colorMode = this.colorMode, zC.useColors = this.useColors, zC.visibility = this.visibility, zC.useDash = this.useDash, zC.dashCount = this.dashCount, zC.dashRatio = this.dashRatio, zC.dashOffset = this.dashOffset, zC.width = this.width, zC.sizeAttenuation = this.sizeAttenuation, zC.resolution = this.resolution, zC.markAllDefinesAsDirty()
      }
      _isGLSL(CC) {
        return 0 === CC || this._forceGLSL
      }
    }
    xQ.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", xQ.ForceGLSL = !1;
    var JQ = ZC(40224),
      IQ = ZC(40235),
      iQ = ZC(38501),
      vQ = ZC(40297),
      eQ = ZC(39657);
    class hQ extends vQ.r {
      constructor(CC, zC, QC) {
        const wC = zC.mg(),
          bC = wC.isWebGPU && !(QC.forceGLSL || hQ.ForceGLSL),
          nC = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        zC.useRightHandedSystem && nC.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const fC = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        QC.cameraFacing ? (nC.push("GREASED_LINE_CAMERA_FACING"), fC.push("grl_previousAndSide", "grl_nextAndCounters")) : (fC.push("grl_slopes"), fC.push("grl_counters"));
        const oC = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (bC || oC.push("world", "viewProjection", "view", "projection"), super(CC, zC, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: bC ? ["Scene", "Mesh"] : void 0,
            attributes: fC,
            uniforms: oC,
            samplers: bC ? [] : ["grlColors"],
            defines: nC,
            extraInitializationsAsync: async () => {
              bC ? await Promise.all([ZC.e(334).then((() => ZC(61532))), ZC.e(391).then((() => ZC(61539)))]) : await Promise.all([ZC.e(327).then((() => ZC(61546))), ZC.e(392).then((() => ZC(61553)))])
            },
            shaderLanguage: bC ? 1 : 0
          }), this._color = jC.e.White(), this._colorsDistributionType = 0, this._colorsTexture = null, QC = QC || {
            color: gQ.DEFAULT_COLOR
          }, this.visibility = QC.visibility ?? 1, this.useDash = QC.useDash ?? !1, this.dashRatio = QC.dashRatio ?? .5, this.dashOffset = QC.dashOffset ?? 0, this.dashCount = QC.dashCount ?? 1, this.width = QC.width ? QC.width : QC.sizeAttenuation && QC.cameraFacing ? gQ.DEFAULT_WIDTH_ATTENUATED : gQ.DEFAULT_WIDTH, this.sizeAttenuation = QC.sizeAttenuation ?? !1, this.color = QC.color ?? jC.e.White(), this.useColors = QC.useColors ?? !1, this.colorsDistributionType = QC.colorDistributionType ?? 0, this.colorsSampling = QC.colorsSampling ?? JC.b.NEAREST_NEAREST, this.colorMode = QC.colorMode ?? 0, this._colors = QC.colors ?? null, this._cameraFacing = QC.cameraFacing ?? !0, this.resolution = QC.resolution ?? new uC.n(wC.getRenderWidth(), wC.getRenderHeight()), QC.colorsTexture ? this.colorsTexture = QC.colorsTexture : this._colors ? this.colorsTexture = RQ.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, zC) : (this._color = this._color ?? gQ.DEFAULT_COLOR, this.colorsTexture = RQ.PrepareEmptyColorsTexture(zC)), bC) {
          const CC = new eQ.b;
          CC.setParameters(), CC.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", CC)
        }
        wC.Tm.add((() => {
          RQ.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== gQ.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new uC.n(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(CC) {
        this.setColors(CC)
      }
      setColors(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QC = this._colors?.length ?? 0;
        if (this._colors = CC, null !== CC && 0 !== CC.length) {
          if (!zC || ZC)
            if (this._colorsTexture && QC === CC.length && !ZC) {
              const zC = RQ.Color3toRGBAUint8(CC);
              this._colorsTexture.update(zC)
            } else this._colorsTexture && this._colorsTexture !== gQ.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = RQ.CreateColorsTexture(`${this.name}-colors-texture`, CC, this.colorsSampling, this.Km())
        } else {
          this._colorsTexture && this._colorsTexture !== gQ.EmptyColorsTexture && this._colorsTexture.dispose();
          const CC = this.Km();
          CC && (this.colorsTexture = RQ.PrepareEmptyColorsTexture(CC))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(CC) {
        this._colorsTexture = CC, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(CC) {
        this._width = CC, this.setFloat("grlWidth", CC)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(CC) {
        this._useColors = CC, this.setFloat("grlUseColors", RQ.BooleanToNumber(CC))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(CC) {
        this._colorsSampling = CC
      }
      get visibility() {
        return this._visibility
      }
      set visibility(CC) {
        this._visibility = CC, this.setFloat("grlVisibility", CC)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(CC) {
        this._useDash = CC, this.setFloat("grlUseDash", RQ.BooleanToNumber(CC))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(CC) {
        this._dashOffset = CC, this.setFloat("grlDashOffset", CC)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(CC) {
        this._dashRatio = CC, this.setFloat("grlDashRatio", CC)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(CC) {
        this._dashCount = CC, this._dashArray = 1 / CC, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(CC) {
        this._sizeAttenuation = CC, this.setFloat("grlSizeAttenuation", RQ.BooleanToNumber(CC))
      }
      get color() {
        return this._color
      }
      set color(CC) {
        this.setColor(CC)
      }
      setColor(CC) {
        CC = CC ?? gQ.DEFAULT_COLOR, this._color = CC, this.setColor3("grlColor", CC)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(CC) {
        this._colorsDistributionType = CC, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(CC) {
        this._colorMode = CC, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(CC) {
        this._resolution = CC, this.setVector2("grlResolution", CC), this.setFloat("grlAspect", CC.x / CC.y)
      }
      serialize() {
        const CC = super.serialize(),
          zC = {
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
        return this._colors && (zC.colors = this._colors), CC.greasedLineMaterialOptions = zC, CC
      }
      parse(CC, zC, ZC) {
        const QC = CC.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), QC.color && (this.color = QC.color), QC.colorDistributionType && (this.colorsDistributionType = QC.colorDistributionType), QC.colorsSampling && (this.colorsSampling = QC.colorsSampling), QC.colorMode && (this.colorMode = QC.colorMode), QC.useColors && (this.useColors = QC.useColors), QC.visibility && (this.visibility = QC.visibility), QC.useDash && (this.useDash = QC.useDash), QC.dashCount && (this.dashCount = QC.dashCount), QC.dashRatio && (this.dashRatio = QC.dashRatio), QC.dashOffset && (this.dashOffset = QC.dashOffset), QC.width && (this.width = QC.width), QC.sizeAttenuation && (this.sizeAttenuation = QC.sizeAttenuation), QC.resolution && (this.resolution = QC.resolution), QC.colors ? this.colorsTexture = RQ.CreateColorsTexture(`${this.name}-colors-texture`, QC.colors, this.colorsSampling, this.Km()) : this.colorsTexture = RQ.PrepareEmptyColorsTexture(zC), this._cameraFacing = QC.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var KQ, YQ, dQ;
    hQ.ForceGLSL = !1,
      function(CC) {
        CC[CC.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", CC[CC.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(KQ || (KQ = {})),
      function(CC) {
        CC[CC.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", CC[CC.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", CC[CC.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(YQ || (YQ = {})),
      function(CC) {
        CC[CC.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", CC[CC.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", CC[CC.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", CC[CC.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", CC[CC.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(dQ || (dQ = {}));
    class mQ extends JQ.b {
      constructor(CC, zC, ZC) {
        super(CC, zC, null, null, !1, !1), this.name = CC, this._options = ZC, this._lazy = !1, this._updatable = !1, this._engine = zC.mg(), this._lazy = ZC.lazy ?? !1, this._updatable = ZC.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = ZC.colorPointers ?? [], this._widths = ZC.widths ?? new Array(ZC.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(CC) {
        let zC = 0;
        for (const QC of this._points) zC += QC.length;
        const ZC = zC / 3 * 2 - this._widths.length;
        for (let QC = 0; QC < ZC; QC++) this._widths.push(CC)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.Xg && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(CC, zC) {
        for (const ZC of CC) this._points.push(ZC);
        this._lazy || this.setPoints(this._points, zC)
      }
      dispose(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(CC, zC)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(CC) {
        this._uvs = CC instanceof Float32Array ? CC : new Float32Array(CC), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(CC) {
        this.material instanceof hQ && this.material.setDefine("GREASED_LINE_USE_OFFSETS", CC?.length > 0), this._offsets = CC, this._offsetsBuffer ? this._offsetsBuffer.update(CC) : this._createOffsetsBuffer(CC)
      }
      get widths() {
        return this._widths
      }
      set widths(CC) {
        this._widths = CC, this._lazy || this._widthsBuffer && this._widthsBuffer.update(CC)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(CC) {
        this._colorPointers = CC, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(CC)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof hQ) return this.material;
        const CC = this.material?.pluginManager?.getPlugin(xQ.GREASED_LINE_MATERIAL_NAME);
        return CC || void 0
      }
      get points() {
        const CC = [];
        return iQ.e.DeepCopy(this._points, CC), CC
      }
      setPoints(CC, zC) {
        this._points = RQ.ConvertPoints(CC, zC?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), zC?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, zC)
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
      serialize(CC) {
        super.serialize(CC), CC.type = this.getClassName(), CC.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zC = new IQ.e;
        return zC.positions = this._vertexPositions, zC.indices = this._indices, zC.uvs = this._uvs, CC && (zC.normals = [], IQ.e.ComputeNormals(this._vertexPositions, this._indices, zC.normals)), zC.applyToMesh(this, this._options.updatable), zC
      }
      _createOffsetsBuffer(CC) {
        const zC = this._scene.mg(),
          ZC = new rC.c(zC, CC, this._updatable, 3);
        this.setVerticesBuffer(ZC.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = ZC
      }
    }
    class HQ {
      constructor(CC, zC) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = CC, this.wasAddedByNoopNode = zC
      }
      getIndicesAccessor(CC, zC, ZC, QC, wC) {
        return this._indicesAccessorMap.get(CC)?.get(zC)?.get(ZC)?.get(QC)?.get(wC)
      }
      setIndicesAccessor(CC, zC, ZC, QC, wC, bC) {
        let nC = this._indicesAccessorMap.get(CC);
        nC || (nC = new Map, this._indicesAccessorMap.set(CC, nC));
        let fC = nC.get(zC);
        fC || (fC = new Map, nC.set(zC, fC));
        let oC = fC.get(ZC);
        oC || (oC = new Map, fC.set(ZC, oC));
        let qC = oC.get(QC);
        qC || (qC = new Map, oC.set(QC, qC)), qC.set(wC, bC)
      }
      pushExportedNode(CC) {
        this._exportedNodes.has(CC) || this._exportedNodes.add(CC)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(CC) {
        return this._vertexBufferViewMap.get(CC)
      }
      setVertexBufferView(CC, zC) {
        this._vertexBufferViewMap.set(CC, zC)
      }
      setRemappedBufferView(CC, zC, ZC) {
        this._remappedBufferView.set(CC, new Map), this._remappedBufferView.get(CC).set(zC, ZC)
      }
      getRemappedBufferView(CC, zC) {
        return this._remappedBufferView.get(CC)?.get(zC)
      }
      getVertexAccessor(CC, zC, ZC) {
        return this._vertexAccessorMap.get(CC)?.get(zC)?.get(ZC)
      }
      setVertexAccessor(CC, zC, ZC, QC) {
        let wC = this._vertexAccessorMap.get(CC);
        wC || (wC = new Map, this._vertexAccessorMap.set(CC, wC));
        let bC = wC.get(zC);
        bC || (bC = new Map, wC.set(zC, bC)), bC.set(ZC, QC)
      }
      hasVertexColorAlpha(CC) {
        return this._vertexMapColorAlpha.get(CC) || !1
      }
      setHasVertexColorAlpha(CC, zC) {
        return this._vertexMapColorAlpha.set(CC, zC)
      }
      getMesh(CC) {
        return this._meshMap.get(CC)
      }
      setMesh(CC, zC) {
        this._meshMap.set(CC, zC)
      }
      bindMorphDataToMesh(CC, zC) {
        const ZC = this._meshMorphTargetMap.get(CC) || [];
        this._meshMorphTargetMap.set(CC, ZC), -1 === ZC.indexOf(zC) && ZC.push(zC)
      }
      getMorphTargetsFromMesh(CC) {
        return this._meshMorphTargetMap.get(CC)
      }
    }
    class EQ {
      _ApplyExtension(CC, zC, ZC, QC) {
        if (ZC >= zC.length) return Promise.resolve(CC);
        const wC = QC(zC[ZC], CC);
        return wC ? wC.then((async CC => CC ? await this._ApplyExtension(CC, zC, ZC + 1, QC) : null)) : this._ApplyExtension(CC, zC, ZC + 1, QC)
      }
      _ApplyExtensions(CC, zC) {
        const ZC = [];
        for (const QC of EQ._ExtensionNames) ZC.push(this._extensions[QC]);
        return this._ApplyExtension(CC, ZC, 0, zC)
      }
      _extensionsPostExportNodeAsync(CC, zC, ZC, QC, wC) {
        return this._ApplyExtensions(zC, ((zC, bC) => zC.postExportNodeAsync && zC.postExportNodeAsync(CC, bC, ZC, QC, wC, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(CC, zC, ZC) {
        return this._ApplyExtensions(zC, ((zC, QC) => zC.postExportMaterialAsync && zC.postExportMaterialAsync(CC, QC, ZC)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(CC, zC, ZC) {
        const QC = [];
        return await Promise.all(EQ._ExtensionNames.map((async wC => {
          const bC = this._extensions[wC];
          if (bC.postExportMaterialAdditionalTexturesAsync) {
            const wC = await bC.postExportMaterialAdditionalTexturesAsync(CC, zC, ZC);
            QC.push(...wC)
          }
        }))), QC
      }
      _extensionsPostExportTextures(CC, zC, ZC) {
        for (const QC of EQ._ExtensionNames) {
          const wC = this._extensions[QC];
          wC.postExportTexture && wC.postExportTexture(CC, zC, ZC)
        }
      }
      _extensionsPostExportMeshPrimitive(CC) {
        for (const zC of EQ._ExtensionNames) {
          const ZC = this._extensions[zC];
          ZC.postExportMeshPrimitive && ZC.postExportMeshPrimitive(CC, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const CC of EQ._ExtensionNames) {
          const zC = this._extensions[CC];
          zC.preGenerateBinaryAsync && await zC.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(CC) {
        for (const zC of EQ._ExtensionNames) {
          const ZC = this._extensions[zC];
          ZC.enabled && CC(ZC)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((CC => {
          var zC, ZC, QC;
          CC.wasUsed && ((zC = this._glTF).extensionsUsed || (zC.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(CC.name) && this._glTF.extensionsUsed.push(CC.name), CC.required && ((ZC = this._glTF).extensionsRequired || (ZC.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(CC.name) && this._glTF.extensionsRequired.push(CC.name)), (QC = this._glTF).extensions || (QC.extensions = {}), CC.onExporting && CC.onExporting())
        }))
      }
      _loadExtensions() {
        for (const CC of EQ._ExtensionNames) {
          const zC = EQ._ExtensionFactories[CC](this);
          this._extensions[CC] = zC
        }
      }
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SC.c.LastCreatedScene,
          zC = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${gC.d.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new YZ(this), this._extensions = {}, this._bufferManager = new ZQ, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !CC) throw new Error("No scene available to export");
        this._babylonScene = CC, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: CC => CC?.Wm?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...zC
        }, this._loadExtensions()
      }
      dispose() {
        for (const CC in this._extensions) {
          this._extensions[CC].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        EQ.UnregisterExtension(CC) && wC.Tools.Warn(`Extension with the name ${CC} already exists`), EQ._ExtensionFactories[CC] = zC;
        const QC = ZC ?? 0;
        EQ._ExtensionOrders[CC] = QC;
        let bC = EQ._ExtensionNames.length;
        for (let wC = 0; wC < EQ._ExtensionNames.length; wC++) {
          const CC = EQ._ExtensionNames[wC];
          if (QC < EQ._ExtensionOrders[CC]) {
            bC = wC;
            break
          }
        }
        EQ._ExtensionNames.splice(bC, 0, CC)
      }
      static UnregisterExtension(CC) {
        if (!EQ._ExtensionFactories[CC]) return !1;
        delete EQ._ExtensionFactories[CC], delete EQ._ExtensionOrders[CC];
        const zC = EQ._ExtensionNames.indexOf(CC);
        return -1 !== zC && EQ._ExtensionNames.splice(zC, 1), !0
      }
      _generateJSON(CC, zC, ZC) {
        const QC = {
          byteLength: CC
        };
        return QC.byteLength && (this._glTF.buffers = [QC]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.sS = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (QC.uri = zC + ".bin"), ZC ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(CC) {
        const zC = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const ZC = this._generateJSON(zC.byteLength, CC, !0),
          QC = new Blob([zC], {
            type: "application/octet-stream"
          }),
          wC = CC + ".gltf",
          bC = CC + ".bin",
          nC = new qC;
        if (nC.files[wC] = ZC, nC.files[bC] = QC, this._imageData)
          for (const fC in this._imageData) nC.files[fC] = this._imageData[fC];
        return nC
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(CC) {
        const zC = CC % 4;
        return 0 === zC ? zC : 4 - zC
      }
      async generateGLBAsync(CC) {
        this._shouldUseGlb = !0;
        const zC = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const ZC = this._generateJSON(zC.byteLength),
          QC = CC + ".glb";
        let wC, bC = ZC.length;
        if ("undefined" !== typeof TextEncoder) {
          wC = (new TextEncoder).encode(ZC), bC = wC.length
        }
        const nC = this._getPadding(bC),
          fC = this._getPadding(zC.byteLength),
          oC = 28 + bC + nC + zC.byteLength + fC,
          FC = new CQ(oC);
        if (FC.writeUInt32(1179937895), FC.writeUInt32(2), FC.writeUInt32(oC), FC.writeUInt32(bC + nC), FC.writeUInt32(1313821514), wC) FC.writeTypedArray(wC);
        else {
          const CC = "_".charCodeAt(0);
          for (let zC = 0; zC < bC; ++zC) {
            const QC = ZC.charCodeAt(zC);
            QC != ZC.codePointAt(zC) ? FC.writeUInt8(CC) : FC.writeUInt8(QC)
          }
        }
        for (let qC = 0; qC < nC; ++qC) FC.writeUInt8(32);
        FC.writeUInt32(zC.byteLength + fC), FC.writeUInt32(5130562), FC.writeTypedArray(zC);
        for (let qC = 0; qC < fC; ++qC) FC.writeUInt8(0);
        const WC = new qC;
        return WC.files[QC] = new Blob([FC.getOutputData()], {
          type: "application/octet-stream"
        }), WC
      }
      _setNodeTransformation(CC, zC, ZC) {
        if (zC.getPivotPoint().equalsWithEpsilon(XZ, HZ.e) || wC.Tools.Warn("Pivot points are not supported in the glTF serializer"), !zC.position.equalsWithEpsilon(XZ, HZ.e)) {
          const wC = QC.TmpVectors.Eg[0].Av(zC.position);
          ZC && DZ(wC), CC.translation = wC.VZC()
        }
        zC.sq.equalsWithEpsilon(uZ, HZ.e) || (CC.scale = zC.sq.VZC());
        const bC = zC.rotationQuaternion?.clone() || QC.Quaternion.FromEulerAngles(zC.rotation.x, zC.rotation.y, zC.rotation.z);
        bC.equalsWithEpsilon(cZ, HZ.e) || (ZC && jZ(bC), CC.rotation = bC.normalize().VZC())
      }
      _setCameraTransformation(CC, zC, ZC) {
        const wC = QC.TmpVectors.Eg[0],
          bC = QC.TmpVectors.Quaternion[0],
          nC = zC.getWorldMatrix();
        if (zC.parent) {
          const CC = zC.parent.getWorldMatrix().invertToRef(QC.TmpVectors.Matrix[0]);
          nC.multiplyToRef(CC, QC.TmpVectors.Matrix[1]).decompose(void 0, bC, wC)
        } else nC.decompose(void 0, bC, wC);
        wC.equalsWithEpsilon(XZ, HZ.e) || (ZC && DZ(wC), CC.translation = wC.VZC()), ZC && jZ(bC), this._babylonScene.useRightHandedSystem || yZ(bC), bC.equalsWithEpsilon(cZ, HZ.e) || (CC.rotation = bC.VZC())
      }
      _listAvailableCameras() {
        for (const CC of this._babylonScene.cameras) {
          const zC = {
            type: CC.mode === QQ.d.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (CC.name && (zC.name = CC.name), "perspective" === zC.type) zC.perspective = {
            aspectRatio: CC.mg().getAspectRatio(CC),
            yfov: CC.fovMode === QQ.d.FOVMODE_VERTICAL_FIXED ? CC.fov : CC.fov * CC.mg().getAspectRatio(CC),
            znear: CC.minZ,
            zfar: CC.maxZ
          };
          else if ("orthographic" === zC.type) {
            const ZC = CC.orthoLeft && CC.orthoRight ? .5 * (CC.orthoRight - CC.orthoLeft) : .5 * CC.mg().getRenderWidth(),
              QC = CC.orthoBottom && CC.orthoTop ? .5 * (CC.orthoTop - CC.orthoBottom) : .5 * CC.mg().getRenderHeight();
            zC.orthographic = {
              xmag: ZC,
              ymag: QC,
              znear: CC.minZ,
              zfar: CC.maxZ
            }
          }
          this._camerasMap.set(CC, zC)
        }
      }
      _exportAndAssignCameras() {
        const CC = Array.from(this._camerasMap.values());
        for (const zC of CC) {
          const CC = this._nodesCameraMap.get(zC);
          if (void 0 !== CC) {
            this._cameras.push(zC);
            for (const zC of CC) zC.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const CC of this._babylonScene.skeletons) {
          if (CC.bones.length <= 0) continue;
          const zC = {
            joints: []
          };
          this._skinMap.set(CC, zC)
        }
      }
      _exportAndAssignSkeletons(CC) {
        for (const ZC of this._babylonScene.skeletons) {
          if (ZC.bones.length <= 0) continue;
          const bC = this._skinMap.get(ZC);
          if (void 0 == bC) continue;
          const nC = {};
          let fC = -1;
          for (let CC = 0; CC < ZC.bones.length; ++CC) {
            const zC = ZC.bones[CC],
              QC = zC.getIndex() ?? CC; - 1 !== QC && (nC[QC] = zC, QC > fC && (fC = QC))
          }
          const oC = [];
          for (let ZC = 0; ZC <= fC; ++ZC) {
            const fC = nC[ZC],
              qC = fC.getTransformNode(),
              FC = qC ? this._nodeMap.get(qC) : void 0;
            if (void 0 === FC) {
              wC.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            bC.joints.push(FC);
            const WC = fC.getAbsoluteInverseBindMatrix().clone();
            CC.has(qC) && (zC = WC, EZ.invertToRef(QC.TmpVectors.Matrix[0]).multiplyToRef(zC, zC).multiplyToRef(EZ, zC)), oC.push(WC)
          }
          const qC = this._nodesSkinMap.get(bC);
          if (bC.joints.length > 0 && void 0 !== qC) {
            const CC = new Float32Array(16 * oC.length);
            oC.forEach(((zC, ZC) => {
              CC.set(zC.m, 16 * ZC)
            }));
            const zC = this._bufferManager.createBufferView(CC);
            this._accessors.push(this._bufferManager.createAccessor(zC, "MAT4", 5126, oC.length)), bC.inverseBindMatrices = this._accessors.length - 1, this._skins.push(bC);
            const ZC = this._skins.length - 1;
            for (const QC of qC) QC.skin = ZC
          }
        }
        var zC
      }
      async _exportSceneAsync() {
        const CC = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const zC = this._options.metadataSelector(this._babylonScene.metadata);
          zC && (CC.extras = zC)
        }
        const zC = new Array,
          ZC = new Array,
          QC = new Array,
          wC = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let bC;
        if (wC && !this._options.includeCoordinateSystemConversionNodes)
          for (const qC of this._babylonScene.animationGroups)
            for (const CC of qC.targetedAnimations) {
              const zC = CC.target;
              zC instanceof WC.c && !zC.parent && (bC ?? (bC = new Set)).add(zC)
            }
        for (const qC of this._babylonScene.rootNodes) {
          const CC = qC.animations,
            nC = !!CC && CC.length > 0 || bC?.has(qC);
          wC && !this._options.includeCoordinateSystemConversionNodes && lZ(qC, this._babylonScene.useRightHandedSystem) && !nC ? QC.push(...qC.getChildren()) : this._babylonScene.useRightHandedSystem ? zC.push(qC) : ZC.push(qC)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const nC = new HQ(!0, !1);
        CC.nodes.push(...await this._exportNodesAsync(ZC, nC));
        const fC = new HQ(!1, !1);
        CC.nodes.push(...await this._exportNodesAsync(zC, fC));
        const oC = new HQ(!1, !0);
        CC.nodes.push(...await this._exportNodesAsync(QC, oC)), CC.nodes.length && this._scenes.push(CC), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(nC.getNodesSet()), this._babylonScene.animationGroups.length && WQ._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, nC.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(CC) {
        return this._nodeMap.get(CC)
      }
      _getAnimationIndex(CC) {
        return this._animationGroupMap.get(CC)
      }
      _getCameraIndex(CC) {
        const zC = this._camerasMap.get(CC);
        if (!zC) return;
        const ZC = this._cameras.indexOf(zC);
        return ZC >= 0 ? ZC : void 0
      }
      _getMaterialIndex(CC) {
        return this._materialMap.get(CC)
      }
      _getRootIndex(CC, zC) {
        switch (CC) {
          case "nodes":
            return this._getNodeIndex(zC);
          case "animations":
            return this._getAnimationIndex(zC);
          case "cameras":
            return this._getCameraIndex(zC);
          case "materials":
            return this._getMaterialIndex(zC);
          case "meshes": {
            const CC = this._getNodeIndex(zC);
            return void 0 === CC ? void 0 : this._nodes[CC]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(zC)?.index;
          case "images": {
            const CC = this._materialExporter.getTextureInfo(zC)?.index;
            if (void 0 === CC) return;
            const ZC = this._textures[CC];
            for (const zC of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const CC = ZC?.extensions?.[zC]?.source;
              if ("number" === typeof CC) return CC
            }
            return ZC?.source
          }
          case "samplers": {
            const CC = this._materialExporter.getTextureInfo(zC)?.index;
            return void 0 === CC ? void 0 : this._textures[CC]?.sampler
          }
          case "skins": {
            const CC = this._skinMap.get(zC),
              ZC = CC ? this._skins.indexOf(CC) : -1;
            return ZC >= 0 ? ZC : void 0
          }
          case "scenes":
            return zC === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(CC, zC, ZC) {
        const QC = this._nodes[CC];
        if (!QC) throw new Error(`Cannot write ${zC}: glTF node ${CC} does not exist.`);
        QC.extensions || (QC.extensions = {}), QC.extensions[zC] = ZC
      }
      _shouldExportNode(CC) {
        let zC = this._shouldExportNodeMap.get(CC);
        return void 0 === zC && (zC = this._options.shouldExportNode(CC), this._shouldExportNodeMap.set(CC, zC)), zC
      }
      async _exportNodesAsync(CC, zC) {
        const ZC = new Array;
        this._exportBuffers(CC, zC);
        for (const QC of CC) await this._exportNodeAsync(QC, ZC, zC);
        return ZC
      }
      _collectBuffers(CC, zC, ZC, QC, wC) {
        if (this._shouldExportNode(CC) && CC instanceof NC.c && CC.geometry) {
          const bC = CC.geometry.getVertexBuffers();
          if (bC)
            for (const QC in bC) {
              if (!aZ(QC)) continue;
              const nC = bC[QC];
              wC.setHasVertexColorAlpha(nC, CC.hasVertexAlpha);
              const fC = nC._buffer,
                oC = zC.get(fC) || [];
              zC.set(fC, oC), -1 === oC.indexOf(nC) && oC.push(nC);
              const qC = ZC.get(nC) || [];
              ZC.set(nC, qC), -1 === qC.indexOf(CC) && qC.push(CC)
            }
          const nC = CC.morphTargetManager;
          if (nC)
            for (let zC = 0; zC < nC.numTargets; zC++) {
              const ZC = nC.getTarget(zC),
                wC = QC.get(ZC) || [];
              QC.set(ZC, wC), -1 === wC.indexOf(CC) && wC.push(CC)
            }
        }
        for (const bC of CC.getChildren()) this._collectBuffers(bC, zC, ZC, QC, wC)
      }
      _exportBuffers(CC, zC) {
        const ZC = new Map,
          QC = new Map,
          wC = new Map;
        for (const fC of CC) this._collectBuffers(fC, ZC, QC, wC, zC);
        const bC = Array.from(ZC.keys());
        for (const fC of bC) {
          const CC = fC.getData();
          if (!CC) throw new Error("Buffer data is not available");
          const wC = ZC.get(fC);
          if (!wC) continue;
          const bC = wC[0].byteStride;
          if (wC.some((CC => CC.byteStride !== bC))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const nC = BZ(CC).slice();
          for (const zC of wC) {
            const CC = QC.get(zC),
              {
                byteOffset: ZC,
                byteStride: wC,
                componentCount: bC,
                type: fC,
                count: oC,
                normalized: qC,
                kind: WC
              } = sZ(zC, CC);
            switch (WC) {
              case FC.f.NormalKind:
              case FC.f.TangentKind:
                (0, dZ.h)(nC, ZC, wC, bC, fC, oC, qC, (CC => {
                  const zC = Math.sqrt(CC[0] * CC[0] + CC[1] * CC[1] + CC[2] * CC[2]);
                  if (zC > 0) {
                    const ZC = 1 / zC;
                    CC[0] *= ZC, CC[1] *= ZC, CC[2] *= ZC
                  }
                }));
                break;
              case FC.f.ColorKind: {
                const zC = CC.filter((CC => CC.material instanceof bQ.StandardMaterial || null == CC.material)).length;
                if (0 == zC) break;
                if (zC != CC.length) {
                  hC.c.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                fC == FC.f.UNSIGNED_BYTE && hC.c.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const QC = new pC.Color3,
                  WC = new pC.e,
                  NC = this._babylonScene.mg().useExactSrgbConversions;
                (0, dZ.h)(nC, ZC, wC, bC, fC, oC, qC, (CC => {
                  3 === CC.length ? (QC.azC(CC, 0), QC.toLinearSpaceToRef(QC, NC), QC.toArray(CC, 0)) : (WC.azC(CC, 0), WC.toLinearSpaceToRef(WC, NC), WC.toArray(CC, 0))
                }))
              }
            }
          }
          if (zC.convertToRightHanded) {
            for (const CC of wC) {
              const zC = QC.get(CC),
                {
                  byteOffset: ZC,
                  byteStride: wC,
                  componentCount: bC,
                  type: fC,
                  count: oC,
                  normalized: qC,
                  kind: WC
                } = sZ(CC, zC);
              switch (WC) {
                case FC.f.PositionKind:
                case FC.f.NormalKind:
                case FC.f.TangentKind:
                  (0, dZ.h)(nC, ZC, wC, bC, fC, oC, qC, (CC => {
                    CC[0] = -CC[0]
                  }))
              }
            }
            zC.convertedToRightHandedBuffers.set(fC, nC)
          }
          const oC = this._bufferManager.createBufferView(nC, bC);
          zC.setVertexBufferView(fC, oC);
          const qC = new Map;
          for (const zC of wC) {
            const CC = QC.get(zC),
              {
                kind: ZC,
                totalVertices: wC
              } = sZ(zC, CC);
            switch (ZC) {
              case FC.f.MatricesIndicesKind:
              case FC.f.MatricesIndicesExtraKind:
                if (zC.type == FC.f.FLOAT) {
                  const CC = zC.getFloatData(wC);
                  null !== CC && qC.set(zC, CC)
                }
            }
          }
          0 !== qC.size && hC.c.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const WC = Array.from(qC.keys());
          for (const ZC of WC) {
            const CC = qC.get(ZC);
            if (!CC) continue;
            const QC = CC.some((CC => CC >= 256)),
              wC = new(QC ? Uint16Array : Uint8Array)(CC.length);
            for (let zC = 0; zC < CC.length; zC++) wC[zC] = CC[zC];
            const bC = this._bufferManager.createBufferView(wC, 4 * (QC ? 2 : 1));
            zC.setRemappedBufferView(fC, ZC, bC)
          }
        }
        const nC = Array.from(wC.keys());
        for (const fC of nC) {
          const CC = wC.get(fC);
          if (!CC) continue;
          const ZC = NQ(fC, CC[0], this._bufferManager, this._bufferViews, this._accessors, zC.convertToRightHanded);
          for (const QC of CC) zC.bindMorphDataToMesh(QC, ZC)
        }
      }
      async _exportNodeAsync(CC, zC, ZC) {
        let QC = this._nodeMap.get(CC);
        if (void 0 !== QC) return void(zC.includes(QC) || zC.push(QC));
        const wC = await this._createNodeAsync(CC, ZC);
        if (wC) {
          QC = this._nodes.length, this._nodes.push(wC), this._nodeMap.set(CC, QC), ZC.pushExportedNode(CC), zC.push(QC);
          const bC = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            nC = [];
          this._babylonScene.animationGroups.length || (WQ._CreateMorphTargetAnimationFromMorphTargetAnimations(CC, bC, nC, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, ZC.convertToRightHanded, this._options.shouldExportAnimation), CC.animations.length && WQ._CreateNodeAnimationFromNodeAnimations(CC, bC, nC, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, ZC.convertToRightHanded, this._options.shouldExportAnimation)), bC.channels.length && bC.samplers.length && this._animations.push(bC), nC.forEach((CC => {
            CC.channels.length && CC.samplers.length && this._animations.push(CC)
          }))
        }
        const bC = wC ? [] : zC;
        for (const nC of CC.getChildren()) await this._exportNodeAsync(nC, bC, ZC);
        wC && bC.length && (wC.children = bC)
      }
      async _createNodeAsync(CC, zC) {
        if (!this._shouldExportNode(CC)) return null;
        const ZC = {};
        if (CC.name && (ZC.name = CC.name), CC.metadata) {
          const zC = this._options.metadataSelector(CC.metadata);
          zC && (ZC.extras = zC)
        }
        if (CC instanceof WC.c && (this._setNodeTransformation(ZC, CC, zC.convertToRightHanded), CC instanceof NC.c)) {
          const QC = CC instanceof MC.b ? CC.LQC : CC;
          if (QC.Zx && QC.Zx.length > 0 && (ZC.mesh = await this._exportMeshAsync(QC, zC)), CC.skeleton) {
            const zC = this._skinMap.get(CC.skeleton);
            void 0 !== zC && (void 0 === this._nodesSkinMap.get(zC) && this._nodesSkinMap.set(zC, []), this._nodesSkinMap.get(zC)?.push(ZC))
          }
        }
        if (CC instanceof mZ.h) {
          const QC = this._camerasMap.get(CC);
          if (QC) {
            void 0 === this._nodesCameraMap.get(QC) && this._nodesCameraMap.set(QC, []), this._setCameraTransformation(ZC, CC, zC.convertToRightHanded);
            const wC = CC.parent;
            if (null !== wC && UZ(CC, wC)) {
              const CC = this._nodeMap.get(wC);
              if (void 0 !== CC) {
                const zC = this._nodes[CC];
                return LZ(ZC, zC), this._nodesCameraMap.get(QC)?.push(zC), null
              }
            }
            this._nodesCameraMap.get(QC)?.push(ZC)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", ZC, CC, this._nodeMap, zC.convertToRightHanded) ? ZC : (hC.c.Warn(`Not exporting node ${CC.name}`), null)
      }
      _exportIndices(CC, zC, ZC, QC, wC, nC, fC, oC, qC) {
        let FC = null;
        qC.mode = function(CC) {
          switch (CC) {
            case bC.d.TriangleFillMode:
              return 4;
            case bC.d.TriangleStripDrawMode:
              return 5;
            case bC.d.TriangleFanDrawMode:
              return 6;
            case bC.d.PointListDrawMode:
            case bC.d.PointFillMode:
              return 0;
            case bC.d.LineLoopDrawMode:
              return 2;
            case bC.d.LineListDrawMode:
              return 1;
            case bC.d.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${CC}`)
        }(nC);
        const WC = fC !== bC.d.CounterClockWiseSideOrientation && function(CC) {
          switch (CC) {
            case bC.d.TriangleFillMode:
            case bC.d.TriangleStripDrawMode:
            case bC.d.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(nC);
        if (WC) {
          if (nC === bC.d.TriangleStripDrawMode || nC === bC.d.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const fC = zC ? new Uint32Array(QC) : new Uint16Array(QC);
          if (CC)
            for (let zC = 0; zC + 2 < QC; zC += 3) fC[zC] = CC[ZC + zC] + wC, fC[zC + 1] = CC[ZC + zC + 2] + wC, fC[zC + 2] = CC[ZC + zC + 1] + wC;
          else
            for (let CC = 0; CC + 2 < QC; CC += 3) fC[CC] = CC, fC[CC + 1] = CC + 2, fC[CC + 2] = CC + 1;
          FC = fC
        } else if (CC && 0 !== wC) {
          const bC = zC ? new Uint32Array(QC) : new Uint16Array(QC);
          for (let zC = 0; zC < QC; zC++) bC[zC] = CC[ZC + zC] + wC;
          FC = bC
        } else CC && (FC = function(CC, zC, ZC, QC) {
          let wC = CC;
          return 0 === zC && ZC === CC.length || (wC = Array.isArray(CC) ? CC.slice(zC, zC + ZC) : CC.subarray(zC, zC + ZC)), wC instanceof Int32Array ? new Uint32Array(wC.buffer, wC.byteOffset, wC.length) : Array.isArray(wC) ? QC ? new Uint32Array(wC) : new Uint16Array(wC) : wC
        }(CC, ZC, QC, zC));
        if (FC) {
          let bC = oC.getIndicesAccessor(CC, ZC, QC, wC, WC);
          if (void 0 === bC) {
            const nC = this._bufferManager.createBufferView(FC),
              fC = zC ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(nC, "SCALAR", fC, QC, 0)), bC = this._accessors.length - 1, oC.setIndicesAccessor(CC, ZC, QC, wC, WC, bC)
          }
          qC.indices = bC
        }
      }
      _exportVertexBuffer(CC, zC, ZC, QC, wC, bC) {
        const nC = CC.getKind();
        if (!aZ(nC)) return;
        if (nC.startsWith("uv") && !this._options.exportUnusedUVs && (!zC || !this._materialNeedsUVsSet.has(zC))) return;
        let fC = wC.getVertexAccessor(CC, ZC, QC);
        if (void 0 === fC) {
          const zC = wC.convertedToRightHandedBuffers.get(CC._buffer) || CC._buffer.getData(),
            bC = nC === FC.f.PositionKind ? function(CC, zC, ZC, QC) {
              const {
                byteOffset: wC,
                byteStride: bC,
                type: nC,
                normalized: fC
              } = zC, oC = zC.getSize(), qC = new Array(oC).fill(1 / 0), FC = new Array(oC).fill(-1 / 0);
              return (0, dZ.h)(CC, wC + ZC * bC, bC, oC, nC, QC * oC, fC, (CC => {
                for (let zC = 0; zC < oC; zC++) qC[zC] = Math.min(qC[zC], CC[zC]), FC[zC] = Math.max(FC[zC], CC[zC])
              })), {
                min: qC,
                max: FC
              }
            }(zC, CC, ZC, QC) : void 0,
            oC = (nC === FC.f.MatricesIndicesKind || nC === FC.f.MatricesIndicesExtraKind) && CC.type === FC.f.FLOAT,
            qC = oC ? FC.f.UNSIGNED_BYTE : CC.type,
            WC = oC ? void 0 : CC.normalized,
            NC = oC ? wC.getRemappedBufferView(CC._buffer, CC) : wC.getVertexBufferView(CC._buffer),
            MC = CC.byteOffset + ZC * CC.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(NC, function(CC, zC) {
            if (CC == FC.f.ColorKind) return zC ? "VEC4" : "VEC3";
            switch (CC) {
              case FC.f.PositionKind:
              case FC.f.NormalKind:
                return "VEC3";
              case FC.f.TangentKind:
              case FC.f.MatricesIndicesKind:
              case FC.f.MatricesIndicesExtraKind:
              case FC.f.MatricesWeightsKind:
              case FC.f.MatricesWeightsExtraKind:
                return "VEC4";
              case FC.f.UVKind:
              case FC.f.UV2Kind:
              case FC.f.UV3Kind:
              case FC.f.UV4Kind:
              case FC.f.UV5Kind:
              case FC.f.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${CC}`)
          }(nC, wC.hasVertexColorAlpha(CC)), qC, QC, MC, bC, WC)), fC = this._accessors.length - 1, wC.setVertexAccessor(CC, ZC, QC, fC)
        }
        bC.attributes[function(CC) {
          switch (CC) {
            case FC.f.PositionKind:
              return "POSITION";
            case FC.f.NormalKind:
              return "NORMAL";
            case FC.f.TangentKind:
              return "TANGENT";
            case FC.f.ColorKind:
              return "COLOR_0";
            case FC.f.UVKind:
              return "TEXCOORD_0";
            case FC.f.UV2Kind:
              return "TEXCOORD_1";
            case FC.f.UV3Kind:
              return "TEXCOORD_2";
            case FC.f.UV4Kind:
              return "TEXCOORD_3";
            case FC.f.UV5Kind:
              return "TEXCOORD_4";
            case FC.f.UV6Kind:
              return "TEXCOORD_5";
            case FC.f.MatricesIndicesKind:
              return "JOINTS_0";
            case FC.f.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case FC.f.MatricesWeightsKind:
              return "WEIGHTS_0";
            case FC.f.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${CC}`)
        }(nC)] = fC
      }
      async _exportMaterialAsync(CC, zC, ZC, QC) {
        let wC = this._materialMap.get(CC);
        if (void 0 === wC) {
          const QC = zC && Object.keys(zC).some((CC => CC.startsWith("uv")));
          if ((CC = CC instanceof wQ.c ? CC.r_[ZC.materialIndex] : CC) instanceof Jz) wC = await this._materialExporter.exportPBRMaterialAsync(CC, QC);
          else if (CC instanceof bQ.StandardMaterial) wC = await this._materialExporter.exportStandardMaterialAsync(CC, QC);
          else {
            if (!(CC instanceof kz)) return void hC.c.Warn(`Unsupported material '${CC.name}' with type ${CC.getClassName()}`);
            wC = await this._materialExporter.exportOpenPBRMaterialAsync(CC, QC)
          }
          this._materialMap.set(CC, wC)
        }
        QC.material = wC
      }
      async _exportMeshAsync(CC, zC) {
        let ZC = zC.getMesh(CC);
        if (void 0 !== ZC) return ZC;
        const QC = {
          primitives: []
        };
        ZC = this._meshes.length, this._meshes.push(QC), zC.setMesh(CC, ZC);
        const wC = CC.isUnIndexed ? null : CC.CQC(),
          nC = CC.geometry?.getVertexBuffers(),
          fC = zC.getMorphTargetsFromMesh(CC),
          oC = CC instanceof MQ.d,
          qC = CC instanceof mQ,
          FC = CC.Zx;
        if (nC && FC && FC.length > 0)
          for (const WC of FC) {
            const ZC = {
                attributes: {}
              },
              FC = WC.cg() || this._babylonScene.defaultMaterial;
            if (qC) {
              const zC = {
                  name: FC.name
                },
                QC = CC,
                wC = pC.Color3.White(),
                bC = QC.material?.alpha ?? 1,
                nC = QC.greasedLineMaterial?.color ?? wC;
              (!nC.equalsWithEpsilon(wC, HZ.e) || bC < 1) && (zC.pbrMetallicRoughness = {
                baseColorFactor: [...nC.VZC(), bC]
              }), this._materials.push(zC), ZC.material = this._materials.length - 1
            } else if (oC) {
              const zC = {
                  name: FC.name
                },
                QC = CC;
              (!QC.color.equalsWithEpsilon(pC.Color3.White(), HZ.e) || QC.alpha < 1) && (zC.pbrMetallicRoughness = {
                baseColorFactor: [...QC.color.VZC(), QC.alpha]
              }), this._materials.push(zC), ZC.material = this._materials.length - 1
            } else await this._exportMaterialAsync(FC, nC, WC, ZC);
            const NC = oC || qC ? bC.d.LineListDrawMode : CC.overrideRenderingFillMode ?? FC.fillMode;
            let MC = FC._getEffectiveOrientation(CC);
            zC.wasAddedByNoopNode && !CC.Km().useRightHandedSystem && (MC = MC === bC.d.ClockWiseSideOrientation ? bC.d.CounterClockWiseSideOrientation : bC.d.ClockWiseSideOrientation), this._exportIndices(wC, wC ? (0, dZ.c)(wC, WC.indexCount, WC.indexStart, WC.verticesStart) : WC.verticesCount > 65535, wC ? WC.indexStart : WC.verticesStart, wC ? WC.indexCount : WC.verticesCount, -WC.verticesStart, NC, MC, zC, ZC);
            for (const CC of Object.values(nC)) this._exportVertexBuffer(CC, FC, WC.verticesStart, WC.verticesCount, zC, ZC);
            if (fC) {
              ZC.targets = [];
              for (const CC of fC) ZC.targets.push(CC.attributes)
            }
            QC.primitives.push(ZC), this._extensionsPostExportMeshPrimitive(ZC)
          }
        if (fC) {
          QC.weights = [], QC.extras || (QC.extras = {}), QC.extras.targetNames = [];
          for (const CC of fC) QC.weights.push(CC.influence), QC.extras.targetNames.push(CC.name)
        }
        return ZC
      }
    }
    EQ._ExtensionNames = new Array, EQ._ExtensionFactories = {}, EQ._ExtensionOrders = {};
    class lQ {
      static async GLTFAsync(CC, zC, ZC) {
        ZC && ZC.exportWithoutWaitingForScene || await CC.whenReadyAsync();
        const QC = new EQ(CC, ZC),
          wC = await QC.generateGLTFAsync(zC.replace(/\.[^/.]+$/, ""));
        return QC.dispose(), wC
      }
      static async GLBAsync(CC, zC, ZC) {
        ZC && ZC.exportWithoutWaitingForScene || await CC.whenReadyAsync();
        const QC = new EQ(CC, ZC),
          wC = await QC.generateGLBAsync(zC.replace(/\.[^/.]+$/, ""));
        return QC.dispose(), wC
      }
    }
    const XQ = "EXT_mesh_gpu_instancing";

    function cQ(CC, zC) {
      const ZC = new Float32Array(3 * zC);
      for (let QC = 0; QC < zC; QC++) ZC[3 * QC + 0] = CC[4 * QC + 0], ZC[3 * QC + 1] = CC[4 * QC + 1], ZC[3 * QC + 2] = CC[4 * QC + 2];
      return ZC
    }
    class uQ {
      constructor(CC) {
        this.name = XQ, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = CC
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(CC, zC, ZC, QC, wC, bC) {
        return await new Promise((CC => {
          if (zC && ZC instanceof JQ.b && ZC.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const CC = uC.r.Zero(),
              QC = uC.f.Identity(),
              nC = uC.r.One(),
              fC = ZC.thinInstanceGetWorldMatrices(),
              oC = uC.j.Eg[2],
              qC = uC.j.Quaternion[1],
              FC = uC.j.Eg[3];
            let WC = !1,
              NC = !1,
              MC = !1;
            const gC = new Float32Array(3 * ZC.N_),
              SC = new Float32Array(4 * ZC.N_),
              pC = new Float32Array(3 * ZC.N_);
            let PC = 0;
            for (const zC of fC) zC.decompose(FC, qC, oC), wC && (DZ(oC), jZ(qC)), gC.set(oC.VZC(), 3 * PC), SC.set(qC.normalize().VZC(), 4 * PC), pC.set(FC.VZC(), 3 * PC), WC = WC || !oC.equalsWithEpsilon(CC), NC = NC || !qC.equalsWithEpsilon(QC), MC = MC || !FC.equalsWithEpsilon(nC), PC++;
            const GC = {
              attributes: {}
            };
            WC && (GC.attributes.TRANSLATION = this._buildAccessor(gC, "VEC3", ZC.N_, bC)), NC && (GC.attributes.ROTATION = this._buildAccessor(SC, "VEC4", ZC.N_, bC)), MC && (GC.attributes.SCALE = this._buildAccessor(pC, "VEC3", ZC.N_, bC));
            let RC = ZC._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (RC) {
              const CC = ZC.N_,
                zC = "VEC3";
              ZC.hasVertexAlpha && RC.length === 4 * CC ? (this._instanceColorWarned || (hC.c.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), RC = cQ(RC, CC)) : RC.length === 4 * CC && (RC = cQ(RC, CC)), RC.length === 3 * CC && (GC.attributes._COLOR_0 = this._buildAccessor(RC, zC, CC, bC))
            }
            zC.extensions = zC.extensions || {}, zC.extensions[XQ] = GC
          }
          CC(zC)
        }))
      }
      _buildAccessor(CC, zC, ZC, QC) {
        const wC = QC.createBufferView(CC),
          bC = QC.createAccessor(wC, zC, 5126, ZC);
        return this._exporter._accessors.push(bC), this._exporter._accessors.length - 1
      }
    }
    let rQ = !1;

    function sQ() {
      rQ || (rQ = !0, EQ.RegisterExtension(XQ, (CC => new uQ(CC))))
    }
    ZC(40308);
    sQ();
    var TQ = ZC(41672);

    function aQ(CC, zC, ZC, QC) {
      const wC = CC;
      let bC = null,
        nC = null,
        fC = null,
        oC = null;
      const qC = {},
        FC = zC.find((CC => "POSITION" === CC.dracoName));
      if (!FC) throw new Error("Draco: Missing position attribute for encoding.");
      if (!ZC) {
        const CC = FC.data.length / FC.size;
        ZC = new(CC > 65535 ? Uint32Array : Uint16Array)(CC);
        for (let zC = 0; zC < CC; zC++) ZC[zC] = zC
      }
      try {
        bC = new wC.Encoder, nC = new wC.MeshBuilder, fC = new wC.Mesh, nC.AddFacesToMesh(fC, ZC.length / 3, ZC);
        const CC = new Map([
          [Float32Array, (CC, zC, ZC, QC, wC, bC) => CC.AddFloatAttribute(zC, ZC, QC, wC, bC)],
          [Uint32Array, (CC, zC, ZC, QC, wC, bC) => CC.AddUInt32Attribute(zC, ZC, QC, wC, bC)],
          [Uint16Array, (CC, zC, ZC, QC, wC, bC) => CC.AddUInt16Attribute(zC, ZC, QC, wC, bC)],
          [Uint8Array, (CC, zC, ZC, QC, wC, bC) => CC.AddUInt8Attribute(zC, ZC, QC, wC, bC)],
          [Int32Array, (CC, zC, ZC, QC, wC, bC) => CC.AddInt32Attribute(zC, ZC, QC, wC, bC)],
          [Int16Array, (CC, zC, ZC, QC, wC, bC) => CC.AddInt16Attribute(zC, ZC, QC, wC, bC)],
          [Int8Array, (CC, zC, ZC, QC, wC, bC) => CC.AddInt8Attribute(zC, ZC, QC, wC, bC)]
        ]);
        for (const ZC of zC) {
          ZC.data instanceof Uint8ClampedArray && (ZC.data = new Uint8Array(ZC.data));
          const zC = CC.get(ZC.data.constructor),
            oC = ZC.data.length / ZC.size;
          qC[ZC.kind] = zC(nC, fC, wC[ZC.dracoName], oC, ZC.size, ZC.data), QC.quantizationBits && QC.quantizationBits[ZC.dracoName] && bC.SetAttributeQuantization(wC[ZC.dracoName], QC.quantizationBits[ZC.dracoName])
        }
        QC.method && bC.SetEncodingMethod(wC[QC.method]), void 0 !== QC.encodeSpeed && void 0 !== QC.decodeSpeed && bC.SetSpeedOptions(QC.encodeSpeed, QC.decodeSpeed), oC = new wC.DracoInt8Array;
        const FC = bC.EncodeMeshToDracoBuffer(fC, oC);
        if (FC <= 0) throw new Error("Draco: Failed to encode.");
        const WC = new Int8Array(FC);
        for (let zC = 0; zC < FC; zC++) WC[zC] = oC.GetValue(zC);
        return {
          data: WC,
          attributeIds: qC
        }
      } finally {
        fC && wC.destroy(fC), nC && wC.destroy(nC), bC && wC.destroy(bC), oC && wC.destroy(oC)
      }
    }

    function tQ() {
      let CC;
      onmessage = zC => {
        const ZC = zC.data;
        switch (ZC.id) {
          case "init": {
            ZC.url && importScripts(ZC.url);
            const zC = ZC.wasmBinary ? {
              wasmBinary: ZC.wasmBinary
            } : {};
            CC = DracoEncoderModule(zC), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!CC) throw new Error("Draco: Encoder module is not available.");
            CC.then((CC => {
              const zC = aQ(CC, ZC.attributes, ZC.indices, ZC.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: zC
              }, zC ? [zC.data.buffer] : void 0)
            })).catch((CC => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: CC.message
              })
            }))
        }
      }
    }
    class DQ {
      constructor(CC) {
        if (CC.workerPool) return void(this._workerPoolPromise = Promise.resolve(CC.workerPool));
        const zC = CC.wasmBinary,
          ZC = CC.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          QC = ZC && "function" === typeof Worker && "function" === typeof URL,
          wC = QC || !CC.jsModule,
          bC = CC.wasmUrl && CC.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: wC ? iz.g.GetBabylonScriptURL(CC.wasmUrl, !0) : "",
            wasmBinaryPromise: zC ? Promise.resolve(zC) : iz.g.LoadFileAsync(iz.g.GetBabylonScriptURL(CC.wasmBinaryUrl, !0))
          } : {
            url: wC ? iz.g.GetBabylonScriptURL(CC.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        QC ? this._workerPoolPromise = bC.wasmBinaryPromise.then((CC => {
          const zC = this._getWorkerContent(),
            QC = URL.createObjectURL(new Blob([zC], {
              type: "application/javascript"
            }));
          return new TQ.e(ZC, (() => async function(CC, zC, ZC) {
            return await new Promise(((QC, wC) => {
              const bC = zC => {
                  CC.removeEventListener("error", bC), CC.removeEventListener("message", nC), wC(zC)
                },
                nC = zC => {
                  "initDone" === zC.data.id && (CC.removeEventListener("error", bC), CC.removeEventListener("message", nC), QC(CC))
                };
              if (CC.addEventListener("error", bC), CC.addEventListener("message", nC), zC) {
                const QC = zC.slice(0);
                CC.postMessage({
                  id: "init",
                  url: ZC,
                  wasmBinary: QC
                }, [QC])
              } else CC.postMessage({
                id: "init",
                url: ZC
              })
            }))
          }(new Worker(QC), CC, bC.url)))
        })) : this._modulePromise = bC.wasmBinaryPromise.then((async zC => {
          if (!this._isModuleAvailable() && !CC.jsModule) {
            if (!bC.url) throw new Error("Draco codec module is not available");
            await iz.g.LoadBabylonScriptAsync(bC.url)
          }
          return await this._createModuleAsync(zC, CC.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((CC => {
          CC.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function jQ() {
      const CC = CC => !!CC && "object" === typeof CC;
      for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
      return ZC.reduce(((zC, ZC) => {
        const QC = Object.keys(ZC);
        for (const wC of QC) {
          const QC = zC[wC],
            bC = ZC[wC];
          Array.isArray(QC) && Array.isArray(bC) ? zC[wC] = QC.concat(bC) : CC(QC) && CC(bC) ? zC[wC] = jQ(QC, bC) : zC[wC] = bC
        }
        return zC
      }), {})
    }

    function yQ(CC) {
      return CC === rC.k.PositionKind ? "POSITION" : CC === rC.k.NormalKind ? "NORMAL" : CC === rC.k.ColorKind ? "COLOR" : CC.startsWith(rC.k.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const LQ = {
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
    class UQ extends DQ {
      static get DefaultAvailable() {
        return !!((CC = UQ.DefaultConfiguration).wasmUrl && (CC.wasmBinary || CC.wasmBinaryUrl) && "object" === typeof WebAssembly || CC.fallbackUrl);
        var CC
      }
      static get Default() {
        return UQ._Default ?? (UQ._Default = new UQ), UQ._Default
      }
      static ResetDefault(CC) {
        UQ._Default && (CC || UQ._Default.dispose(), UQ._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(CC, zC) {
        return {
          module: await (zC || DracoEncoderModule)({
            wasmBinary: CC
          })
        }
      }
      _getWorkerContent() {
        return `${aQ}(${tQ})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UQ.DefaultConfiguration)
      }
      async _encodeAsync(CC, zC, ZC) {
        const QC = ZC ? jQ(LQ, ZC) : LQ;
        if (this._workerPoolPromise) {
          const ZC = await this._workerPoolPromise;
          return await new Promise(((wC, bC) => {
            ZC.push(((ZC, nC) => {
              const fC = CC => {
                  ZC.removeEventListener("error", fC), ZC.removeEventListener("message", oC), bC(CC), nC()
                },
                oC = CC => {
                  "encodeMeshSuccess" === CC.data.id ? (ZC.removeEventListener("error", fC), ZC.removeEventListener("message", oC), wC(CC.data.encodedMeshData), nC()) : "encodeMeshError" === CC.data.id && (ZC.removeEventListener("error", fC), ZC.removeEventListener("message", oC), bC(new Error(CC.data.errorMessage)), nC())
                };
              ZC.addEventListener("error", fC), ZC.addEventListener("message", oC);
              const qC = [];
              for (const zC of CC) qC.push(zC.data.buffer);
              zC && qC.push(zC.buffer), ZC.postMessage({
                id: "encodeMesh",
                attributes: CC,
                indices: zC,
                options: QC
              }, qC)
            }))
          }))
        }
        if (this._modulePromise) {
          return aQ((await this._modulePromise).module, CC, zC, QC)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(CC, zC) {
        if (0 == CC.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        CC instanceof JQ.b && CC.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === zC?.method && (hC.c.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), zC.method = "MESH_SEQUENTIAL_ENCODING");
        const ZC = function(CC) {
            let zC = CC.CQC(void 0, !0);
            return !zC || zC instanceof Uint32Array || zC instanceof Uint16Array || (zC = ((0, dZ.c)(zC, zC.length) ? Uint32Array : Uint16Array).from(zC)), zC
          }(CC),
          QC = function(CC, zC) {
            const ZC = [];
            for (const QC of CC.getVerticesDataKinds()) {
              if (zC?.includes(QC)) {
                if (QC === rC.k.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const wC = CC.getVertexBuffer(QC),
                bC = wC.getSize(),
                nC = (0, dZ.o)(wC.getData(), bC, wC.type, wC.byteOffset, wC.byteStride, CC.getTotalVertices(), !0);
              ZC.push({
                kind: QC,
                dracoName: yQ(QC),
                size: bC,
                data: nC
              })
            }
            return ZC
          }(CC, zC?.excludedAttributes);
        return await this._encodeAsync(QC, ZC, zC)
      }
    }
    UQ.DefaultConfiguration = {
      wasmUrl: `${iz.g._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${iz.g._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${iz.g._DefaultCdnUrl}/draco_encoder.js`
    }, UQ._Default = null;
    const BQ = "KHR_draco_mesh_compression";
    class OQ {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(CC) {
        this.name = BQ, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === CC.options.meshCompressionMethod && UQ.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(CC, zC, ZC) {
        if (!this.enabled) return;
        if (4 !== CC.mode && 5 !== CC.mode) return void hC.c.Warn("Cannot compress primitive with mode " + CC.mode + ".");
        const QC = [],
          wC = [];
        let bC = null;
        if (void 0 !== CC.indices) {
          const nC = ZC[CC.indices],
            fC = zC.getBufferView(nC);
          bC = zC.getData(fC).slice(), QC.push(fC), wC.push(nC)
        }
        const nC = [];
        for (const [FC, WC] of Object.entries(CC.attributes)) {
          const CC = ZC[WC],
            bC = zC.getBufferView(CC),
            oC = TZ(CC.type),
            qC = (0, dZ.o)(zC.getData(bC), oC, CC.componentType, CC.byteOffset || 0, bC.byteStride || (0, dZ.m)(CC.componentType) * oC, CC.count, !0);
          nC.push({
            kind: FC,
            dracoName: (fC = FC, "POSITION" === fC ? "POSITION" : "NORMAL" === fC ? "NORMAL" : fC.startsWith("COLOR") ? "COLOR" : fC.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: TZ(CC.type),
            data: qC
          }), QC.push(bC), wC.push(CC)
        }
        var fC;
        const oC = {
            method: CC.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          qC = UQ.Default._encodeAsync(nC, bC, oC).then((ZC => {
            const bC = {
                bufferView: -1,
                attributes: ZC.attributeIds
              },
              nC = zC.createBufferView(ZC.data);
            zC.setBufferView(bC, nC);
            for (const CC of QC) this._bufferViewsUsed.add(CC);
            for (const CC of wC) this._accessorsUsed.add(CC);
            CC.extensions || (CC.extensions = {}), CC.extensions[BQ] = bC
          })).catch((CC => {
            hC.c.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + CC.message)
          }));
        this._encodePromises.push(qC), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(CC) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((zC => {
          CC.getPropertiesWithBufferView(zC).every((CC => this._accessorsUsed.has(CC))) && CC.removeBufferView(zC)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let kQ = !1;

    function VQ() {
      kQ || (kQ = !0, EQ.RegisterExtension(BQ, (CC => new OQ(CC))))
    }
    VQ();
    var Cw = ZC(41384);
    const zw = "KHR_lights_punctual",
      Zw = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      Qw = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      ww = uC.r.Backward();
    class bw {
      constructor(CC) {
        this.name = zw, this.enabled = !0, this.required = !1, this._exporter = CC
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[zw] = this._lights
      }
      async postExportNodeAsync(CC, zC, ZC, QC, wC) {
        return await new Promise((bC => {
          if (!(ZC instanceof FQ.c)) return void bC(zC);
          const nC = ZC.getTypeID() == FQ.c.LIGHTTYPEID_POINTLIGHT ? "point" : ZC.getTypeID() == FQ.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : ZC.getTypeID() == FQ.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!nC || !(ZC instanceof Cw.d)) return hC.c.Warn(`${CC}: Light ${ZC.name} is not supported in ${zw}`), void bC(zC);
          if (ZC.falloffType !== FQ.c.FALLOFF_GLTF && hC.c.Warn(`${CC}: Light falloff for ${ZC.name} does not match the ${zw} specification!`), !ZC.position.dnC(0, 0, 0)) {
            const CC = uC.j.Eg[0].Av(ZC.position);
            wC && DZ(CC), zC.translation = CC.VZC()
          }
          if ("point" !== nC) {
            const CC = ZC.direction.normalizeToRef(uC.j.Eg[0]);
            wC && DZ(CC);
            const QC = uC.f.FromUnitVectorsToRef(ww, CC, uC.j.Quaternion[0]);
            uC.f.IsIdentity(QC) || (zC.rotation = QC.VZC())
          }
          const fC = {
            type: nC,
            name: ZC.name,
            color: ZC.diffuse.VZC(),
            intensity: ZC.intensity,
            range: ZC.range
          };
          if (OZ(fC, Zw), "spot" === nC) {
            const CC = ZC;
            fC.spot = {
              innerConeAngle: CC.innerAngle / 2,
              outerConeAngle: CC.angle / 2
            }, OZ(fC.spot, Qw)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(fC);
          const oC = {
              light: this._lights.lights.length - 1
            },
            qC = ZC.parent;
          if (qC && UZ(ZC, qC)) {
            const CC = QC.get(qC);
            if (CC) {
              const ZC = this._exporter._nodes[CC];
              return LZ(zC, ZC), ZC.extensions || (ZC.extensions = {}), ZC.extensions[zw] = oC, void bC(null)
            }
          }
          zC.extensions || (zC.extensions = {}), zC.extensions[zw] = oC, bC(zC)
        }))
      }
    }
    let nw = !1;

    function fw() {
      nw || (nw = !0, EQ.RegisterExtension(zw, (CC => new bw(CC))))
    }
    fw();
    const ow = "KHR_interactivity";
    class qw {
      constructor(CC) {
        this._exporter = CC, this.name = ow, this.enabled = !!CC.options.khrInteractivity, this.required = CC.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var CC, zC, ZC;
        const QC = this._exporter.options.khrInteractivity;
        if (!QC) return;
        const wC = QC.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: CC => this._exporter._getNodeIndex(CC),
          getAnimationIndex: CC => this._exporter._getAnimationIndex(CC),
          getCameraIndex: CC => this._exporter._getCameraIndex(CC),
          getMaterialIndex: CC => this._exporter._getMaterialIndex(CC),
          getRootIndex: (CC, zC) => this._exporter._getRootIndex(CC, zC),
          setNodeExtension: (CC, zC, ZC) => this._exporter._setNodeExtension(CC, zC, ZC)
        });
        this._exporter._glTF.extensions[ow] = wC;
        for (const bC of QC.additionalExtensionsUsed)(CC = this._exporter._glTF).extensionsUsed || (CC.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(bC) && this._exporter._glTF.extensionsUsed.push(bC);
        for (const bC of QC.additionalExtensionsRequired)(zC = this._exporter._glTF).extensionsUsed || (zC.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(bC) && this._exporter._glTF.extensionsUsed.push(bC), (ZC = this._exporter._glTF).extensionsRequired || (ZC.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(bC) && this._exporter._glTF.extensionsRequired.push(bC)
      }
    }
    let Fw = !1;

    function Ww() {
      Fw || (Fw = !0, EQ.RegisterExtension(ow, (CC => new qw(CC)), 200))
    }
    Ww();
    const Nw = "EXT_lights_area",
      Mw = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      gw = {
        aspect: 1
      },
      Sw = uC.r.Backward();
    class pw {
      constructor(CC) {
        this.name = Nw, this.enabled = !0, this.required = !1, this._exporter = CC
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Nw] = this._lights
      }
      async postExportNodeAsync(CC, zC, ZC, QC, wC) {
        return await new Promise((bC => {
          if (!(ZC instanceof FQ.c)) return void bC(zC);
          const nC = ZC.getTypeID() == FQ.c.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!nC) return hC.c.Warn(`${CC}: Light ${ZC.name} is not supported in ${Nw}`), void bC(zC);
          const fC = ZC;
          if (fC.falloffType !== FQ.c.FALLOFF_GLTF && hC.c.Warn(`${CC}: Light falloff for ${ZC.name} does not match the ${Nw} specification!`), !fC.position.dnC(0, 0, 0)) {
            const CC = uC.j.Eg[0].Av(fC.position);
            wC && DZ(CC), zC.translation = CC.VZC()
          }
          const oC = uC.r.Forward();
          wC && DZ(oC);
          const qC = uC.f.FromUnitVectorsToRef(Sw, oC, uC.j.Quaternion[0]);
          uC.f.IsIdentity(qC) || (zC.rotation = qC.VZC());
          const FC = {
            type: nC,
            name: fC.name,
            color: fC.diffuse.VZC(),
            intensity: fC.intensity,
            size: fC.height,
            rect: {
              aspect: fC.width / fC.height
            }
          };
          OZ(FC, Mw), FC.rect && OZ(FC.rect, gw), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(FC);
          const WC = {
              light: this._lights.lights.length - 1
            },
            NC = ZC.parent;
          if (NC && UZ(fC, NC)) {
            const CC = QC.get(NC);
            if (CC) {
              const ZC = this._exporter._nodes[CC];
              return LZ(zC, ZC), ZC.extensions || (ZC.extensions = {}), ZC.extensions[Nw] = WC, void bC(null)
            }
          }
          zC.extensions || (zC.extensions = {}), zC.extensions[Nw] = WC, bC(zC)
        }))
      }
    }
    let Pw = !1;

    function Gw() {
      Pw || (Pw = !0, EQ.RegisterExtension(Nw, (CC => new pw(CC))))
    }
    Gw();
    const Rw = "KHR_materials_anisotropy";
    class Aw {
      constructor(CC) {
        this.name = Rw, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = CC
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(CC, zC, ZC) {
        const QC = [];
        if (ZC instanceof Jz) {
          if (ZC.anisotropy.isEnabled && !ZC.anisotropy.legacy) return ZC.anisotropy.texture && QC.push(ZC.anisotropy.texture), QC
        } else if (ZC instanceof kz && ZC.specularRoughnessAnisotropy > 0) {
          const CC = function(CC) {
            const zC = CC.specularRoughnessAnisotropyTexture,
              ZC = CC.geometryTangentTexture;
            return `${zC&&zC.getInternalTexture()?zC.getInternalTexture().uniqueId:"NoStrength"}_${ZC&&ZC.getInternalTexture()?ZC.getInternalTexture().uniqueId:"NoTangent"}`
          }(ZC);
          if (this._anisoTexturesMap[CC]) QC.push(this._anisoTexturesMap[CC]);
          else {
            const zC = await async function(CC) {
              const zC = CC.Km(),
                ZC = CC.specularRoughnessAnisotropyTexture,
                QC = CC.geometryTangentTexture;
              return ZC || QC ? await nZ("AnisotropyTexture", qZ(QC ? fZ(QC, 0) : oZ(1), QC ? fZ(QC, 1) : oZ(0), ZC ? fZ(ZC, 0) : oZ(1)), zC) : null
            }(ZC);
            zC && (QC.push(zC), this._anisoTexturesMap[CC] = zC)
          }
          return QC
        }
        return []
      }
      postExportMaterialAsync(CC, zC, ZC) {
        return new Promise((CC => {
          var QC;
          if (ZC instanceof Jz) {
            if (!ZC.anisotropy.isEnabled || ZC.anisotropy.legacy) return void CC(zC);
            this._wasUsed = !0, zC.extensions = zC.extensions || {};
            const QC = this._exporter._materialExporter.getTextureInfo(ZC.anisotropy.texture),
              wC = {
                anisotropyStrength: ZC.anisotropy.intensity,
                anisotropyRotation: ZC.anisotropy.angle,
                anisotropyTexture: QC ?? void 0
              };
            null !== wC.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(ZC), zC.extensions[Rw] = wC
          } else if (ZC instanceof kz && ZC.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, zC.extensions = zC.extensions || {};
            let wC = ZC.specularRoughnessTexture;
            ZC._useRoughnessFromMetallicTextureGreen && (wC = ZC.baseMetalnessTexture);
            const bC = this._anisoTexturesMap[ZC.id];
            if (!wC && !bC) {
              let QC = ZC.specularRoughness,
                wC = ZC.specularRoughnessAnisotropy;
              if (!ZC._useGltfStyleAnisotropy) {
                const CC = function(CC, zC) {
                  const ZC = CC * CC,
                    QC = ZC * Math.sqrt(2 / (1 + (1 - zC) * (1 - zC))),
                    wC = (1 - zC) * QC;
                  return {
                    newBaseRoughness: Math.sqrt(wC),
                    newAnisotropyStrength: Math.min(Math.sqrt((QC - ZC) / Math.max(1 - ZC, 1e-4)), 1)
                  }
                }(ZC.specularRoughness, ZC.specularRoughnessAnisotropy);
                QC = CC.newBaseRoughness, wC = CC.newAnisotropyStrength
              }
              zC.pbrMetallicRoughness && (zC.pbrMetallicRoughness.roughnessFactor = QC);
              const bC = {
                anisotropyStrength: wC,
                anisotropyRotation: ZC.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return zC.extensions[Rw] = bC, CC(zC)
            }
            const nC = bC ? this._exporter._materialExporter.getTextureInfo(bC) : null,
              fC = {
                anisotropyStrength: ZC.specularRoughnessAnisotropy,
                anisotropyRotation: ZC.geometryTangentAngle,
                anisotropyTexture: nC || void 0,
                extensions: {}
              };
            ZC._useGltfStyleAnisotropy || (zC.extensions.KHR_materials_openpbr = {}, (QC = this._exporter._glTF).extensionsUsed || (QC.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(ZC), zC.extensions[Rw] = fC
          }
          CC(zC)
        }))
      }
    }
    let xw = !1;

    function Jw() {
      xw || (xw = !0, EQ.RegisterExtension(Rw, (CC => new Aw(CC))))
    }
    Jw();
    const Iw = "KHR_materials_clearcoat";

    function iw(CC, zC) {
      const ZC = new YC.h(zC.name, zC.Km());
      return ZC._texture = CC, ZC.coordinatesIndex = zC.coordinatesIndex, zC instanceof YC.h && (ZC.uOffset = zC.uOffset, ZC.vOffset = zC.vOffset, ZC.uScale = zC.uScale, ZC.vScale = zC.vScale, ZC.wAng = zC.wAng), ZC.wrapU = zC.wrapU, ZC.wrapV = zC.wrapV, ZC
    }
    class vw {
      constructor(CC) {
        this.name = Iw, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = CC
      }
      dispose() {
        for (const CC of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[CC].dispose()
        }
        this._mergedTexturesMap = {};
        for (const CC of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[CC].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(CC, zC, ZC) {
        const QC = [];
        if (ZC instanceof Jz) {
          if (ZC.clearCoat.isEnabled) return ZC.clearCoat.texture && QC.push(ZC.clearCoat.texture), !ZC.clearCoat.useRoughnessFromMainTexture && ZC.clearCoat.textureRoughness && QC.push(ZC.clearCoat.textureRoughness), ZC.clearCoat.bumpTexture && QC.push(ZC.clearCoat.bumpTexture), QC
        } else if (ZC instanceof kz && ZC.coatWeight > 0) {
          let CC = !1;
          if (ZC.coatWeightTexture ? ZC.coatRoughnessTexture ? ZC._useCoatRoughnessFromGreenChannel && ZC.coatWeightTexture.getInternalTexture() === ZC.coatRoughnessTexture.getInternalTexture() ? (QC.push(ZC.coatWeightTexture), QC.push(ZC.coatRoughnessTexture)) : CC = !0 : QC.push(ZC.coatWeightTexture) : ZC.coatRoughnessTexture && (ZC._useCoatRoughnessFromGreenChannel ? QC.push(ZC.coatRoughnessTexture) : CC = !0), CC) {
            const CC = function(CC) {
              const zC = CC.coatWeightTexture,
                ZC = zC && zC.getInternalTexture() ? zC.getInternalTexture().uniqueId : "NoCoat",
                QC = CC.coatRoughnessTexture;
              return `${ZC}_${QC&&QC.getInternalTexture()?QC.getInternalTexture().uniqueId:"NoRoughness"}`
            }(ZC);
            if (!this._cachedInternalTexturesMap[CC]) {
              const zC = await async function(CC) {
                const zC = CC.Km(),
                  ZC = CC.coatWeightTexture,
                  QC = CC.coatRoughnessTexture;
                return ZC || QC ? (await nZ("CoatTexture", qZ(ZC ? fZ(ZC, 0) : oZ(1), QC ? fZ(QC, CC._useCoatRoughnessFromGreenChannel ? 1 : 0) : oZ(1)), zC)).getInternalTexture() : null
              }(ZC);
              zC && (this._cachedInternalTexturesMap[CC] = zC)
            }
            this._cachedInternalTexturesMap[CC] && (ZC.coatWeightTexture && (this._mergedTexturesMap[ZC.coatWeightTexture.uniqueId] = iw(this._cachedInternalTexturesMap[CC], ZC.coatWeightTexture), QC.push(this._mergedTexturesMap[ZC.coatWeightTexture.uniqueId])), ZC.coatRoughnessTexture && (this._mergedTexturesMap[ZC.coatRoughnessTexture.uniqueId] = iw(this._cachedInternalTexturesMap[CC], ZC.coatRoughnessTexture), QC.push(this._mergedTexturesMap[ZC.coatRoughnessTexture.uniqueId])))
          }
          return ZC.geometryCoatNormalTexture && QC.push(ZC.geometryCoatNormalTexture), QC
        }
        return []
      }
      postExportMaterialAsync(CC, zC, ZC) {
        return new Promise((CC => {
          if (ZC instanceof Jz) {
            if (!ZC.clearCoat.isEnabled) return void CC(zC);
            this._wasUsed = !0, zC.extensions = zC.extensions || {};
            const QC = this._exporter._materialExporter.getTextureInfo(ZC.clearCoat.texture);
            let wC;
            wC = ZC.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(ZC.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(ZC.clearCoat.textureRoughness), ZC.clearCoat.isTintEnabled && iz.g.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${ZC.name}`), ZC.clearCoat.remapF0OnInterfaceChange && iz.g.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${ZC.name}`);
            const bC = this._exporter._materialExporter.getTextureInfo(ZC.clearCoat.bumpTexture),
              nC = {
                clearcoatFactor: ZC.clearCoat.intensity,
                clearcoatTexture: QC ?? void 0,
                clearcoatRoughnessFactor: ZC.clearCoat.roughness,
                clearcoatRoughnessTexture: wC ?? void 0,
                clearcoatNormalTexture: bC ?? void 0
              };
            null === nC.clearcoatTexture && null === nC.clearcoatRoughnessTexture && null === nC.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ZC), zC.extensions[Iw] = nC
          } else if (ZC instanceof kz) {
            if (0 == ZC.coatWeight) return void CC(zC);
            let QC, wC, bC, nC;
            this._wasUsed = !0, zC.extensions = zC.extensions || {}, ZC.coatWeightTexture && (QC = this._mergedTexturesMap[ZC.coatWeightTexture.uniqueId], wC = this._exporter._materialExporter.getTextureInfo(QC)), ZC.coatRoughnessTexture && (bC = this._mergedTexturesMap[ZC.coatRoughnessTexture.uniqueId], nC = this._exporter._materialExporter.getTextureInfo(bC)), ZC.coatColorTexture && iz.g.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${ZC.name}`);
            const fC = this._exporter._materialExporter.getTextureInfo(ZC.geometryCoatNormalTexture),
              oC = {
                clearcoatFactor: ZC.coatWeight,
                clearcoatTexture: wC ?? void 0,
                clearcoatRoughnessFactor: ZC.coatRoughness,
                clearcoatRoughnessTexture: nC ?? void 0,
                clearcoatNormalTexture: fC ?? void 0
              };
            null === oC.clearcoatTexture && null === oC.clearcoatRoughnessTexture && null === oC.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ZC), zC.extensions[Iw] = oC
          }
          CC(zC)
        }))
      }
    }
    let ew = !1;

    function hw() {
      ew || (ew = !0, EQ.RegisterExtension(Iw, (CC => new vw(CC))))
    }
    hw();
    const Kw = "KHR_materials_coat";

    function Yw(CC) {
      const zC = CC.coatRoughnessAnisotropyTexture,
        ZC = CC.geometryCoatTangentTexture;
      return `${zC&&zC.getInternalTexture()?zC.getInternalTexture().uniqueId:"NoStrength"}_${ZC&&ZC.getInternalTexture()?ZC.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function dw(CC, zC) {
      const ZC = new YC.h(zC.name, zC.Km());
      return ZC._texture = CC, ZC.coordinatesIndex = zC.coordinatesIndex, zC instanceof YC.h && (ZC.uOffset = zC.uOffset, ZC.vOffset = zC.vOffset, ZC.uScale = zC.uScale, ZC.vScale = zC.vScale, ZC.wAng = zC.wAng), ZC.wrapU = zC.wrapU, ZC.wrapV = zC.wrapV, ZC
    }
    class mw {
      constructor(CC) {
        this.name = Kw, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = CC
      }
      dispose() {
        for (const CC of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[CC].dispose()
        }
        this._mergedTexturesMap = {};
        for (const CC of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[CC].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(CC, zC, ZC) {
        const QC = [];
        if (ZC instanceof Jz) {
          if (ZC.clearCoat.isEnabled) return ZC.clearCoat.texture && QC.push(ZC.clearCoat.texture), !ZC.clearCoat.useRoughnessFromMainTexture && ZC.clearCoat.textureRoughness && QC.push(ZC.clearCoat.textureRoughness), ZC.clearCoat.bumpTexture && QC.push(ZC.clearCoat.bumpTexture), ZC.clearCoat.tintTexture && QC.push(ZC.clearCoat.tintTexture), QC
        } else if (ZC instanceof kz && ZC.coatWeight > 0) {
          let CC = !1;
          if (ZC.coatWeightTexture ? ZC.coatRoughnessTexture ? ZC._useCoatRoughnessFromGreenChannel && ZC.coatWeightTexture.getInternalTexture() === ZC.coatRoughnessTexture.getInternalTexture() ? (QC.push(ZC.coatWeightTexture), QC.push(ZC.coatRoughnessTexture)) : CC = !0 : QC.push(ZC.coatWeightTexture) : ZC.coatRoughnessTexture && (ZC._useCoatRoughnessFromGreenChannel ? QC.push(ZC.coatRoughnessTexture) : CC = !0), CC) {
            const CC = function(CC) {
              const zC = CC.coatWeightTexture,
                ZC = zC && zC.getInternalTexture() ? zC.getInternalTexture().uniqueId : "NoCoat",
                QC = CC.coatRoughnessTexture;
              return `${ZC}_${QC&&QC.getInternalTexture()?QC.getInternalTexture().uniqueId:"NoRoughness"}`
            }(ZC);
            if (!this._cachedInternalTexturesMap[CC]) {
              const zC = await async function(CC) {
                const zC = CC.Km(),
                  ZC = CC.coatWeightTexture,
                  QC = CC.coatRoughnessTexture;
                return ZC || QC ? (await nZ("CoatTexture", qZ(ZC ? fZ(ZC, 0) : oZ(1), QC ? fZ(QC, CC._useCoatRoughnessFromGreenChannel ? 1 : 0) : oZ(1)), zC)).getInternalTexture() : null
              }(ZC);
              zC && (this._cachedInternalTexturesMap[CC] = zC)
            }
            this._cachedInternalTexturesMap[CC] && (ZC.coatWeightTexture && (this._mergedTexturesMap[ZC.coatWeightTexture.uniqueId] = dw(this._cachedInternalTexturesMap[CC], ZC.coatWeightTexture), QC.push(this._mergedTexturesMap[ZC.coatWeightTexture.uniqueId])), ZC.coatRoughnessTexture && (this._mergedTexturesMap[ZC.coatRoughnessTexture.uniqueId] = dw(this._cachedInternalTexturesMap[CC], ZC.coatRoughnessTexture), QC.push(this._mergedTexturesMap[ZC.coatRoughnessTexture.uniqueId])))
          }
          if (ZC.geometryCoatNormalTexture && QC.push(ZC.geometryCoatNormalTexture), ZC.coatColorTexture && QC.push(ZC.coatColorTexture), ZC.coatRoughnessAnisotropy > 0) {
            const CC = Yw(ZC);
            if (this._mergedTexturesMap[CC]) QC.push(this._mergedTexturesMap[CC]);
            else {
              const zC = await async function(CC) {
                const zC = CC.Km(),
                  ZC = CC.coatRoughnessAnisotropyTexture,
                  QC = CC.geometryCoatTangentTexture;
                return ZC || QC ? await nZ("AnisotropyTexture", qZ(QC ? fZ(QC, 0) : oZ(1), QC ? fZ(QC, 1) : oZ(0), ZC ? fZ(ZC, 0) : oZ(1)), zC) : null
              }(ZC);
              zC && (QC.push(zC), this._mergedTexturesMap[CC] = zC)
            }
            return QC
          }
          return QC
        }
        return []
      }
      postExportMaterialAsync(CC, zC, ZC) {
        return new Promise((CC => {
          var QC;
          if (ZC instanceof Jz) {
            if (!ZC.clearCoat.isEnabled) return void CC(zC);
            this._wasUsed = !0, zC.extensions = zC.extensions || {};
            const QC = this._exporter._materialExporter.getTextureInfo(ZC.clearCoat.texture);
            let wC, bC;
            wC = ZC.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(ZC.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(ZC.clearCoat.textureRoughness), ZC.clearCoat.isTintEnabled && (bC = this._exporter._materialExporter.getTextureInfo(ZC.clearCoat.tintTexture));
            const nC = this._exporter._materialExporter.getTextureInfo(ZC.clearCoat.bumpTexture),
              fC = ZC.clearCoat.indexOfRefraction,
              oC = {
                coatFactor: ZC.clearCoat.intensity,
                coatTexture: QC ?? void 0,
                coatRoughnessFactor: ZC.clearCoat.roughness,
                coatRoughnessTexture: wC ?? void 0,
                coatNormalTexture: nC ?? void 0,
                coatColorFactor: ZC.clearCoat.tintColor.VZC(),
                coatColorTexture: bC ?? void 0,
                coatIor: 1.5 !== fC ? fC : void 0
              };
            null === oC.coatTexture && null === oC.coatRoughnessTexture && null === oC.coatRoughnessTexture && null === oC.coatColorTexture || this._exporter._materialNeedsUVsSet.add(ZC), zC.extensions[Kw] = oC
          } else if (ZC instanceof kz) {
            if (0 == ZC.coatWeight) return void CC(zC);
            let wC, bC, nC, fC;
            this._wasUsed = !0, zC.extensions = zC.extensions || {}, ZC.coatWeightTexture && (wC = this._mergedTexturesMap[ZC.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[ZC.coatWeightTexture.uniqueId] : ZC.coatWeightTexture, bC = this._exporter._materialExporter.getTextureInfo(wC)), ZC.coatRoughnessTexture && (nC = this._mergedTexturesMap[ZC.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[ZC.coatRoughnessTexture.uniqueId] : ZC.coatRoughnessTexture, fC = this._exporter._materialExporter.getTextureInfo(nC));
            const oC = this._exporter._materialExporter.getTextureInfo(ZC.geometryCoatNormalTexture),
              qC = this._exporter._materialExporter.getTextureInfo(ZC.coatColorTexture),
              FC = ZC.coatIor,
              WC = ZC.coatDarkening,
              NC = ZC.coatRoughnessTexture,
              MC = Yw(ZC),
              gC = this._mergedTexturesMap[MC];
            let SC, pC = 0,
              PC = 0;
            if (ZC.coatRoughnessAnisotropy > 0) {
              if (NC || gC) {
                const CC = gC ? this._exporter._materialExporter.getTextureInfo(gC) : null;
                pC = ZC.coatRoughnessAnisotropy, PC = ZC.geometryCoatTangentAngle, SC = CC || void 0
              } else {
                let CC = ZC.coatRoughness,
                  QC = ZC.coatRoughnessAnisotropy;
                if (!ZC._useGltfStyleAnisotropy) {
                  const zC = function(CC, zC) {
                    const ZC = CC * CC,
                      QC = ZC * Math.sqrt(2 / (1 + (1 - zC) * (1 - zC))),
                      wC = (1 - zC) * QC;
                    return {
                      newBaseRoughness: Math.sqrt(wC),
                      newAnisotropyStrength: Math.min(Math.sqrt((QC - ZC) / Math.max(1 - ZC, 1e-4)), 1)
                    }
                  }(ZC.coatRoughness, ZC.coatRoughnessAnisotropy);
                  CC = zC.newBaseRoughness, QC = zC.newAnisotropyStrength
                }
                zC.pbrMetallicRoughness && (zC.pbrMetallicRoughness.roughnessFactor = CC), pC = QC, PC = ZC.geometryCoatTangentAngle + .5 * Math.PI, SC = void 0
              }
              ZC._useGltfStyleAnisotropy || (zC.extensions.KHR_materials_openpbr = {}, (QC = this._exporter._glTF).extensionsUsed || (QC.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const GC = {
              coatFactor: ZC.coatWeight,
              coatTexture: bC ?? void 0,
              coatRoughnessFactor: ZC.coatRoughness,
              coatRoughnessTexture: fC ?? void 0,
              coatNormalTexture: oC ?? void 0,
              coatColorFactor: ZC.coatColor.VZC(),
              coatColorTexture: qC ?? void 0,
              coatIor: 1.5 !== FC ? FC : void 0,
              coatDarkeningFactor: 1 !== WC ? WC : void 0,
              coatAnisotropyRotation: PC,
              coatAnisotropyStrength: pC,
              coatAnisotropyTexture: SC
            };
            null === GC.coatTexture && null === GC.coatRoughnessTexture && null === GC.coatRoughnessTexture && null === GC.coatAnisotropyTexture && null === GC.coatColorTexture || this._exporter._materialNeedsUVsSet.add(ZC), zC.extensions[Kw] = GC
          }
          CC(zC)
        }))
      }
    }
    let Hw = !1;

    function Ew() {
      Hw || (Hw = !0, EQ.RegisterExtension(Kw, (CC => new mw(CC))))
    }
    Ew();
    let lw = (() => {
      var CC, zC, ZC, QC, wC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC, hC, KC, YC, dC, mC, HC, lC, XC, cC, uC, rC, sC, TC, aC, tC, DC, yC, LC, UC, BC, OC, kC, VC, Cz, zz, Zz, Qz, wz, bz, nz, fz, oz, qz, Fz, Wz, Nz, Mz, gz, Sz, pz, Pz, Gz, Rz;
      let Az, xz, iz, vz, ez, hz, Kz, Yz, dz, mz, Hz, Ez, lz, Xz, cz, uz, rz, sz, Tz, az, tz, Dz, jz, yz, Lz, Uz, Bz, Oz, kz, Vz, CZ, zZ, ZZ, QZ, wZ, bZ, nZ, fZ, oZ, qZ, FZ, WZ, NZ, MZ, gZ, SZ, pZ, PZ, GZ, RZ, AZ, xZ, JZ, IZ, iZ, vZ, eZ, hZ, KZ, YZ, dZ, mZ, HZ, EZ, lZ, XZ, cZ, uZ, rZ = Jz,
        sZ = [],
        TZ = [],
        aZ = [],
        tZ = [],
        DZ = [],
        jZ = [],
        yZ = [],
        LZ = [],
        UZ = [],
        BZ = [],
        OZ = [],
        kZ = [],
        VZ = [],
        CQ = [],
        zQ = [],
        ZQ = [],
        QQ = [],
        wQ = [],
        bQ = [],
        nQ = [],
        fQ = [],
        oQ = [],
        qQ = [],
        FQ = [],
        WQ = [],
        NQ = [],
        MQ = [],
        gQ = [],
        SQ = [],
        pQ = [],
        PQ = [],
        GQ = [],
        RQ = [],
        AQ = [],
        xQ = [],
        JQ = [],
        IQ = [],
        iQ = [],
        vQ = [],
        eQ = [],
        hQ = [],
        KQ = [],
        YQ = [],
        dQ = [],
        mQ = [],
        HQ = [],
        EQ = [],
        lQ = [],
        XQ = [],
        cQ = [],
        uQ = [],
        rQ = [],
        sQ = [],
        TQ = [],
        aQ = [],
        tQ = [],
        DQ = [],
        jQ = [],
        yQ = [],
        LQ = [],
        UQ = [],
        BQ = [],
        OQ = [],
        kQ = [],
        VQ = [],
        Cw = [],
        zw = [],
        Zw = [],
        Qw = [],
        ww = [],
        bw = [],
        nw = [],
        fw = [],
        ow = [],
        qw = [],
        Fw = [],
        Ww = [],
        Nw = [],
        Mw = [],
        gw = [],
        Sw = [],
        pw = [],
        Pw = [],
        Gw = [],
        Rw = [],
        Aw = [],
        xw = [],
        Jw = [],
        Iw = [],
        iw = [],
        vw = [],
        ew = [],
        hw = [],
        Kw = [],
        Yw = [],
        dw = [],
        mw = [],
        Hw = [],
        Ew = [],
        lw = [],
        Xw = [],
        uw = [],
        rw = [],
        sw = [],
        Tw = [],
        aw = [],
        tw = [],
        Dw = [],
        jw = [],
        yw = [],
        Lw = [],
        Uw = [],
        Bw = [],
        Ow = [],
        kw = [],
        Vw = [],
        Cb = [],
        zb = [],
        Zb = [],
        Qb = [],
        wb = [],
        bb = [],
        nb = [],
        fb = [],
        ob = [],
        qb = [],
        Fb = [],
        Wb = [],
        Nb = [],
        Mb = [],
        gb = [],
        Sb = [],
        pb = [];
      return CC = class extends rZ {
        get directIntensity() {
          return (0, vC.e)(this, zC, "f")
        }
        set directIntensity(CC) {
          (0, vC.f)(this, zC, CC, "f")
        }
        get emissiveIntensity() {
          return (0, vC.e)(this, ZC, "f")
        }
        set emissiveIntensity(CC) {
          (0, vC.f)(this, ZC, CC, "f")
        }
        get environmentIntensity() {
          return (0, vC.e)(this, QC, "f")
        }
        set environmentIntensity(CC) {
          (0, vC.f)(this, QC, CC, "f")
        }
        get specularIntensity() {
          return (0, vC.e)(this, wC, "f")
        }
        set specularIntensity(CC) {
          (0, vC.f)(this, wC, CC, "f")
        }
        get disableBumpMap() {
          return (0, vC.e)(this, nC, "f")
        }
        set disableBumpMap(CC) {
          (0, vC.f)(this, nC, CC, "f")
        }
        get albedoTexture() {
          return (0, vC.e)(this, fC, "f")
        }
        set albedoTexture(CC) {
          (0, vC.f)(this, fC, CC, "f")
        }
        get baseWeightTexture() {
          return (0, vC.e)(this, oC, "f")
        }
        set baseWeightTexture(CC) {
          (0, vC.f)(this, oC, CC, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, vC.e)(this, qC, "f")
        }
        set baseDiffuseRoughnessTexture(CC) {
          (0, vC.f)(this, qC, CC, "f")
        }
        get ambientTexture() {
          return (0, vC.e)(this, FC, "f")
        }
        set ambientTexture(CC) {
          (0, vC.f)(this, FC, CC, "f")
        }
        get ambientTextureStrength() {
          return (0, vC.e)(this, WC, "f")
        }
        set ambientTextureStrength(CC) {
          (0, vC.f)(this, WC, CC, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, vC.e)(this, NC, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(CC) {
          (0, vC.f)(this, NC, CC, "f")
        }
        get opacityTexture() {
          return (0, vC.e)(this, MC, "f")
        }
        set opacityTexture(CC) {
          (0, vC.f)(this, MC, CC, "f")
        }
        get reflectionTexture() {
          return (0, vC.e)(this, gC, "f")
        }
        set reflectionTexture(CC) {
          (0, vC.f)(this, gC, CC, "f")
        }
        get emissiveTexture() {
          return (0, vC.e)(this, SC, "f")
        }
        set emissiveTexture(CC) {
          (0, vC.f)(this, SC, CC, "f")
        }
        get reflectivityTexture() {
          return (0, vC.e)(this, pC, "f")
        }
        set reflectivityTexture(CC) {
          (0, vC.f)(this, pC, CC, "f")
        }
        get metallicTexture() {
          return (0, vC.e)(this, PC, "f")
        }
        set metallicTexture(CC) {
          (0, vC.f)(this, PC, CC, "f")
        }
        get metallic() {
          return (0, vC.e)(this, GC, "f")
        }
        set metallic(CC) {
          (0, vC.f)(this, GC, CC, "f")
        }
        get roughness() {
          return (0, vC.e)(this, RC, "f")
        }
        set roughness(CC) {
          (0, vC.f)(this, RC, CC, "f")
        }
        get metallicF0Factor() {
          return (0, vC.e)(this, AC, "f")
        }
        set metallicF0Factor(CC) {
          (0, vC.f)(this, AC, CC, "f")
        }
        get metallicReflectanceColor() {
          return (0, vC.e)(this, xC, "f")
        }
        set metallicReflectanceColor(CC) {
          (0, vC.f)(this, xC, CC, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, vC.e)(this, JC, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(CC) {
          (0, vC.f)(this, JC, CC, "f")
        }
        get metallicReflectanceTexture() {
          return (0, vC.e)(this, IC, "f")
        }
        set metallicReflectanceTexture(CC) {
          (0, vC.f)(this, IC, CC, "f")
        }
        get reflectanceTexture() {
          return (0, vC.e)(this, iC, "f")
        }
        set reflectanceTexture(CC) {
          (0, vC.f)(this, iC, CC, "f")
        }
        get microSurfaceTexture() {
          return (0, vC.e)(this, hC, "f")
        }
        set microSurfaceTexture(CC) {
          (0, vC.f)(this, hC, CC, "f")
        }
        get bumpTexture() {
          return (0, vC.e)(this, KC, "f")
        }
        set bumpTexture(CC) {
          (0, vC.f)(this, KC, CC, "f")
        }
        get lightmapTexture() {
          return (0, vC.e)(this, YC, "f")
        }
        set lightmapTexture(CC) {
          (0, vC.f)(this, YC, CC, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(CC) {
          this.subSurface.refractionTexture = CC, CC ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, vC.e)(this, dC, "f")
        }
        set ambientColor(CC) {
          (0, vC.f)(this, dC, CC, "f")
        }
        get albedoColor() {
          return (0, vC.e)(this, mC, "f")
        }
        set albedoColor(CC) {
          (0, vC.f)(this, mC, CC, "f")
        }
        get baseWeight() {
          return (0, vC.e)(this, HC, "f")
        }
        set baseWeight(CC) {
          (0, vC.f)(this, HC, CC, "f")
        }
        get baseDiffuseRoughness() {
          return (0, vC.e)(this, lC, "f")
        }
        set baseDiffuseRoughness(CC) {
          (0, vC.f)(this, lC, CC, "f")
        }
        get reflectivityColor() {
          return (0, vC.e)(this, XC, "f")
        }
        set reflectivityColor(CC) {
          (0, vC.f)(this, XC, CC, "f")
        }
        get reflectionColor() {
          return (0, vC.e)(this, cC, "f")
        }
        set reflectionColor(CC) {
          (0, vC.f)(this, cC, CC, "f")
        }
        get emissiveColor() {
          return (0, vC.e)(this, uC, "f")
        }
        set emissiveColor(CC) {
          (0, vC.f)(this, uC, CC, "f")
        }
        get microSurface() {
          return (0, vC.e)(this, rC, "f")
        }
        set microSurface(CC) {
          (0, vC.f)(this, rC, CC, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(CC) {
          this.subSurface.indexOfRefraction = CC
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(CC) {
          this.subSurface.invertRefractionY = CC
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(CC) {
          this.subSurface.linkRefractionWithTransparency = CC, CC && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, vC.e)(this, sC, "f")
        }
        set useLightmapAsShadowmap(CC) {
          (0, vC.f)(this, sC, CC, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, vC.e)(this, TC, "f")
        }
        set useAlphaFromAlbedoTexture(CC) {
          (0, vC.f)(this, TC, CC, "f")
        }
        get forceAlphaTest() {
          return (0, vC.e)(this, aC, "f")
        }
        set forceAlphaTest(CC) {
          (0, vC.f)(this, aC, CC, "f")
        }
        get alphaCutOff() {
          return (0, vC.e)(this, tC, "f")
        }
        set alphaCutOff(CC) {
          (0, vC.f)(this, tC, CC, "f")
        }
        get useSpecularOverAlpha() {
          return (0, vC.e)(this, DC, "f")
        }
        set useSpecularOverAlpha(CC) {
          (0, vC.f)(this, DC, CC, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, vC.e)(this, yC, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(CC) {
          (0, vC.f)(this, yC, CC, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, vC.e)(this, LC, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(CC) {
          (0, vC.f)(this, LC, CC, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, vC.e)(this, UC, "f")
        }
        set useRoughnessFromMetallicTextureGreen(CC) {
          (0, vC.f)(this, UC, CC, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, vC.e)(this, BC, "f")
        }
        set useMetallnessFromMetallicTextureBlue(CC) {
          (0, vC.f)(this, BC, CC, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, vC.e)(this, OC, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(CC) {
          (0, vC.f)(this, OC, CC, "f")
        }
        get useAmbientInGrayScale() {
          return (0, vC.e)(this, kC, "f")
        }
        set useAmbientInGrayScale(CC) {
          (0, vC.f)(this, kC, CC, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, vC.e)(this, VC, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(CC) {
          (0, vC.f)(this, VC, CC, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === Jz.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(CC) {
          CC !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = CC ? Jz.LIGHTFALLOFF_PHYSICAL : Jz.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === Jz.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(CC) {
          CC !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = CC ? Jz.LIGHTFALLOFF_GLTF : Jz.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, vC.e)(this, Cz, "f")
        }
        set useRadianceOverAlpha(CC) {
          (0, vC.f)(this, Cz, CC, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, vC.e)(this, zz, "f")
        }
        set useObjectSpaceNormalMap(CC) {
          (0, vC.f)(this, zz, CC, "f")
        }
        get useParallax() {
          return (0, vC.e)(this, Zz, "f")
        }
        set useParallax(CC) {
          (0, vC.f)(this, Zz, CC, "f")
        }
        get useParallaxOcclusion() {
          return (0, vC.e)(this, Qz, "f")
        }
        set useParallaxOcclusion(CC) {
          (0, vC.f)(this, Qz, CC, "f")
        }
        get parallaxScaleBias() {
          return (0, vC.e)(this, wz, "f")
        }
        set parallaxScaleBias(CC) {
          (0, vC.f)(this, wz, CC, "f")
        }
        get disableLighting() {
          return (0, vC.e)(this, bz, "f")
        }
        set disableLighting(CC) {
          (0, vC.f)(this, bz, CC, "f")
        }
        get forceIrradianceInFragment() {
          return (0, vC.e)(this, nz, "f")
        }
        set forceIrradianceInFragment(CC) {
          (0, vC.f)(this, nz, CC, "f")
        }
        get maxSimultaneousLights() {
          return (0, vC.e)(this, fz, "f")
        }
        set maxSimultaneousLights(CC) {
          (0, vC.f)(this, fz, CC, "f")
        }
        get invertNormalMapX() {
          return (0, vC.e)(this, oz, "f")
        }
        set invertNormalMapX(CC) {
          (0, vC.f)(this, oz, CC, "f")
        }
        get invertNormalMapY() {
          return (0, vC.e)(this, qz, "f")
        }
        set invertNormalMapY(CC) {
          (0, vC.f)(this, qz, CC, "f")
        }
        get twoSidedLighting() {
          return (0, vC.e)(this, Fz, "f")
        }
        set twoSidedLighting(CC) {
          (0, vC.f)(this, Fz, CC, "f")
        }
        get useAlphaFresnel() {
          return (0, vC.e)(this, Wz, "f")
        }
        set useAlphaFresnel(CC) {
          (0, vC.f)(this, Wz, CC, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, vC.e)(this, Nz, "f")
        }
        set useLinearAlphaFresnel(CC) {
          (0, vC.f)(this, Nz, CC, "f")
        }
        get environmentBRDFTexture() {
          return (0, vC.e)(this, Mz, "f")
        }
        set environmentBRDFTexture(CC) {
          (0, vC.f)(this, Mz, CC, "f")
        }
        get forceNormalForward() {
          return (0, vC.e)(this, gz, "f")
        }
        set forceNormalForward(CC) {
          (0, vC.f)(this, gz, CC, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, vC.e)(this, Sz, "f")
        }
        set enableSpecularAntiAliasing(CC) {
          (0, vC.f)(this, Sz, CC, "f")
        }
        get useHorizonOcclusion() {
          return (0, vC.e)(this, pz, "f")
        }
        set useHorizonOcclusion(CC) {
          (0, vC.f)(this, pz, CC, "f")
        }
        get useRadianceOcclusion() {
          return (0, vC.e)(this, Pz, "f")
        }
        set useRadianceOcclusion(CC) {
          (0, vC.f)(this, Pz, CC, "f")
        }
        get unlit() {
          return (0, vC.e)(this, Gz, "f")
        }
        set unlit(CC) {
          (0, vC.f)(this, Gz, CC, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, vC.e)(this, Rz, "f")
        }
        set applyDecalMapAfterDetailMap(CC) {
          (0, vC.f)(this, Rz, CC, "f")
        }
        constructor(bC, eC) {
          super(bC, eC, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), zC.set(this, ((0, vC.n)(this, sZ), (0, vC.n)(this, TZ, 1))), ZC.set(this, ((0, vC.n)(this, aZ), (0, vC.n)(this, tZ, 1))), QC.set(this, ((0, vC.n)(this, DZ), (0, vC.n)(this, jZ, 1))), wC.set(this, ((0, vC.n)(this, yZ), (0, vC.n)(this, LZ, 1))), nC.set(this, ((0, vC.n)(this, UZ), (0, vC.n)(this, BZ, !1))), fC.set(this, ((0, vC.n)(this, OZ), (0, vC.n)(this, kZ, void 0))), oC.set(this, ((0, vC.n)(this, VZ), (0, vC.n)(this, CQ, void 0))), qC.set(this, ((0, vC.n)(this, zQ), (0, vC.n)(this, ZQ, void 0))), FC.set(this, ((0, vC.n)(this, QQ), (0, vC.n)(this, wQ, void 0))), WC.set(this, ((0, vC.n)(this, bQ), (0, vC.n)(this, nQ, 1))), NC.set(this, ((0, vC.n)(this, fQ), (0, vC.n)(this, oQ, CC.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), MC.set(this, ((0, vC.n)(this, qQ), (0, vC.n)(this, FQ, void 0))), gC.set(this, ((0, vC.n)(this, WQ), (0, vC.n)(this, NQ, void 0))), SC.set(this, ((0, vC.n)(this, MQ), (0, vC.n)(this, gQ, void 0))), pC.set(this, ((0, vC.n)(this, SQ), (0, vC.n)(this, pQ, void 0))), PC.set(this, ((0, vC.n)(this, PQ), (0, vC.n)(this, GQ, void 0))), GC.set(this, ((0, vC.n)(this, RQ), (0, vC.n)(this, AQ, void 0))), RC.set(this, ((0, vC.n)(this, xQ), (0, vC.n)(this, JQ, void 0))), AC.set(this, ((0, vC.n)(this, IQ), (0, vC.n)(this, iQ, 1))), xC.set(this, ((0, vC.n)(this, vQ), (0, vC.n)(this, eQ, jC.e.White()))), JC.set(this, ((0, vC.n)(this, hQ), (0, vC.n)(this, KQ, !1))), IC.set(this, ((0, vC.n)(this, YQ), (0, vC.n)(this, dQ, void 0))), iC.set(this, ((0, vC.n)(this, mQ), (0, vC.n)(this, HQ, void 0))), hC.set(this, ((0, vC.n)(this, EQ), (0, vC.n)(this, lQ, void 0))), KC.set(this, ((0, vC.n)(this, XQ), (0, vC.n)(this, cQ, void 0))), YC.set(this, ((0, vC.n)(this, uQ), (0, vC.n)(this, rQ, void 0))), dC.set(this, ((0, vC.n)(this, sQ), (0, vC.n)(this, TQ, new jC.e(0, 0, 0)))), mC.set(this, ((0, vC.n)(this, aQ), (0, vC.n)(this, tQ, new jC.e(1, 1, 1)))), HC.set(this, ((0, vC.n)(this, DQ), (0, vC.n)(this, jQ, 1))), lC.set(this, ((0, vC.n)(this, yQ), (0, vC.n)(this, LQ, void 0))), XC.set(this, ((0, vC.n)(this, UQ), (0, vC.n)(this, BQ, new jC.e(1, 1, 1)))), cC.set(this, ((0, vC.n)(this, OQ), (0, vC.n)(this, kQ, new jC.e(1, 1, 1)))), uC.set(this, ((0, vC.n)(this, VQ), (0, vC.n)(this, Cw, new jC.e(0, 0, 0)))), rC.set(this, ((0, vC.n)(this, zw), (0, vC.n)(this, Zw, 1))), sC.set(this, ((0, vC.n)(this, Qw), (0, vC.n)(this, ww, !1))), TC.set(this, ((0, vC.n)(this, bw), (0, vC.n)(this, nw, !1))), aC.set(this, ((0, vC.n)(this, fw), (0, vC.n)(this, ow, !1))), tC.set(this, ((0, vC.n)(this, qw), (0, vC.n)(this, Fw, .4))), DC.set(this, ((0, vC.n)(this, Ww), (0, vC.n)(this, Nw, !0))), yC.set(this, ((0, vC.n)(this, Mw), (0, vC.n)(this, gw, !1))), LC.set(this, ((0, vC.n)(this, Sw), (0, vC.n)(this, pw, !0))), UC.set(this, ((0, vC.n)(this, Pw), (0, vC.n)(this, Gw, !1))), BC.set(this, ((0, vC.n)(this, Rw), (0, vC.n)(this, Aw, !1))), OC.set(this, ((0, vC.n)(this, xw), (0, vC.n)(this, Jw, !1))), kC.set(this, ((0, vC.n)(this, Iw), (0, vC.n)(this, iw, !1))), VC.set(this, ((0, vC.n)(this, vw), (0, vC.n)(this, ew, !1))), Cz.set(this, ((0, vC.n)(this, hw), (0, vC.n)(this, Kw, !0))), zz.set(this, ((0, vC.n)(this, Yw), (0, vC.n)(this, dw, !1))), Zz.set(this, ((0, vC.n)(this, mw), (0, vC.n)(this, Hw, !1))), Qz.set(this, ((0, vC.n)(this, Ew), (0, vC.n)(this, lw, !1))), wz.set(this, ((0, vC.n)(this, Xw), (0, vC.n)(this, uw, .05))), bz.set(this, ((0, vC.n)(this, rw), (0, vC.n)(this, sw, !1))), nz.set(this, ((0, vC.n)(this, Tw), (0, vC.n)(this, aw, !1))), fz.set(this, ((0, vC.n)(this, tw), (0, vC.n)(this, Dw, 4))), oz.set(this, ((0, vC.n)(this, jw), (0, vC.n)(this, yw, !1))), qz.set(this, ((0, vC.n)(this, Lw), (0, vC.n)(this, Uw, !1))), Fz.set(this, ((0, vC.n)(this, Bw), (0, vC.n)(this, Ow, !1))), Wz.set(this, ((0, vC.n)(this, kw), (0, vC.n)(this, Vw, !1))), Nz.set(this, ((0, vC.n)(this, Cb), (0, vC.n)(this, zb, !1))), Mz.set(this, ((0, vC.n)(this, Zb), (0, vC.n)(this, Qb, null))), gz.set(this, ((0, vC.n)(this, wb), (0, vC.n)(this, bb, !1))), Sz.set(this, ((0, vC.n)(this, nb), (0, vC.n)(this, fb, !1))), pz.set(this, ((0, vC.n)(this, ob), (0, vC.n)(this, qb, !0))), Pz.set(this, ((0, vC.n)(this, Fb), (0, vC.n)(this, Wb, !0))), Gz.set(this, ((0, vC.n)(this, Nb), (0, vC.n)(this, Mb, !1))), Rz.set(this, ((0, vC.n)(this, gb), (0, vC.n)(this, Sb, !1))), (0, vC.n)(this, pb), this._environmentBRDFTexture = EC(this.Km())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(zC) {
          let ZC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const wC = Iz.d.Clone((() => new CC(zC, this.Km())), this, {
            cloneTexturesOnlyOnce: ZC
          });
          return wC.id = zC, wC.name = zC, this.stencil.copyTo(wC.stencil), this._clonePlugins(wC, QC), wC
        }
        serialize() {
          const CC = super.serialize();
          return CC.customType = "BABYLON.PBRMaterial", CC
        }
        static Parse(zC, ZC, QC) {
          const wC = Iz.d.Parse((() => new CC(zC.name, ZC)), zC, ZC, QC);
          return zC.stencil && wC.stencil.parse(zC.stencil, ZC, QC), bC.d._ParsePlugins(zC, wC, ZC, QC), zC.clearCoat && wC.clearCoat.parse(zC.clearCoat, ZC, QC), zC.anisotropy && wC.anisotropy.parse(zC.anisotropy, ZC, QC), zC.brdf && wC.brdf.parse(zC.brdf, ZC, QC), zC.sheen && wC.sheen.parse(zC.sheen, ZC, QC), zC.subSurface && wC.subSurface.parse(zC.subSurface, ZC, QC), zC.iridescence && wC.iridescence.parse(zC.iridescence, ZC, QC), wC
        }
      }, zC = new WeakMap, ZC = new WeakMap, QC = new WeakMap, wC = new WeakMap, nC = new WeakMap, fC = new WeakMap, oC = new WeakMap, qC = new WeakMap, FC = new WeakMap, WC = new WeakMap, NC = new WeakMap, MC = new WeakMap, gC = new WeakMap, SC = new WeakMap, pC = new WeakMap, PC = new WeakMap, GC = new WeakMap, RC = new WeakMap, AC = new WeakMap, xC = new WeakMap, JC = new WeakMap, IC = new WeakMap, iC = new WeakMap, hC = new WeakMap, KC = new WeakMap, YC = new WeakMap, dC = new WeakMap, mC = new WeakMap, HC = new WeakMap, lC = new WeakMap, XC = new WeakMap, cC = new WeakMap, uC = new WeakMap, rC = new WeakMap, sC = new WeakMap, TC = new WeakMap, aC = new WeakMap, tC = new WeakMap, DC = new WeakMap, yC = new WeakMap, LC = new WeakMap, UC = new WeakMap, BC = new WeakMap, OC = new WeakMap, kC = new WeakMap, VC = new WeakMap, Cz = new WeakMap, zz = new WeakMap, Zz = new WeakMap, Qz = new WeakMap, wz = new WeakMap, bz = new WeakMap, nz = new WeakMap, fz = new WeakMap, oz = new WeakMap, qz = new WeakMap, Fz = new WeakMap, Wz = new WeakMap, Nz = new WeakMap, Mz = new WeakMap, gz = new WeakMap, Sz = new WeakMap, pz = new WeakMap, Pz = new WeakMap, Gz = new WeakMap, Rz = new WeakMap, (() => {
        const zC = "function" === typeof Symbol && Symbol.metadata ? Object.create(rZ[Symbol.metadata] ?? null) : void 0;
        Az = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], xz = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], iz = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], vz = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], ez = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], hz = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Kz = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Yz = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], dz = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], mz = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Hz = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Ez = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], lz = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Xz = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], cz = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], uz = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], rz = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], sz = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Tz = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], az = [(0, eC.n)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], tz = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Dz = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], jz = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], yz = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Lz = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Uz = [(0, eC.B)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty", null)], Bz = [(0, eC.n)("ambient"), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Oz = [(0, eC.n)("albedo"), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], kz = [(0, eC.M)("baseWeight"), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], Vz = [(0, eC.M)("baseDiffuseRoughness"), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], CZ = [(0, eC.n)("reflectivity"), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], zZ = [(0, eC.n)("reflection"), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], ZZ = [(0, eC.n)("emissive"), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], QZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], wZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], bZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], nZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], fZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], oZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], qZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], FZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], WZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], NZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], MZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], gZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], SZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], pZ = [(0, eC.M)()], PZ = [(0, eC.M)()], GZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], RZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], AZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], xZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], JZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], IZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsLightsDirty")], iZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], vZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsLightsDirty")], eZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], hZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], KZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], YZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], dZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], mZ = [(0, eC.d)("_markAllSubMeshesAsTexturesDirty")], HZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], EZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], lZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], XZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsTexturesDirty")], cZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsMiscDirty")], uZ = [(0, eC.M)(), (0, eC.d)("_markAllSubMeshesAsMiscDirty")], (0, vC.j)(CC, null, Az, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: CC => "directIntensity" in CC,
            get: CC => CC.directIntensity,
            set: (CC, zC) => {
              CC.directIntensity = zC
            }
          },
          metadata: zC
        }, TZ, aZ), (0, vC.j)(CC, null, xz, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: CC => "emissiveIntensity" in CC,
            get: CC => CC.emissiveIntensity,
            set: (CC, zC) => {
              CC.emissiveIntensity = zC
            }
          },
          metadata: zC
        }, tZ, DZ), (0, vC.j)(CC, null, iz, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: CC => "environmentIntensity" in CC,
            get: CC => CC.environmentIntensity,
            set: (CC, zC) => {
              CC.environmentIntensity = zC
            }
          },
          metadata: zC
        }, jZ, yZ), (0, vC.j)(CC, null, vz, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: CC => "specularIntensity" in CC,
            get: CC => CC.specularIntensity,
            set: (CC, zC) => {
              CC.specularIntensity = zC
            }
          },
          metadata: zC
        }, LZ, UZ), (0, vC.j)(CC, null, ez, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: CC => "disableBumpMap" in CC,
            get: CC => CC.disableBumpMap,
            set: (CC, zC) => {
              CC.disableBumpMap = zC
            }
          },
          metadata: zC
        }, BZ, OZ), (0, vC.j)(CC, null, hz, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "albedoTexture" in CC,
            get: CC => CC.albedoTexture,
            set: (CC, zC) => {
              CC.albedoTexture = zC
            }
          },
          metadata: zC
        }, kZ, VZ), (0, vC.j)(CC, null, Kz, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "baseWeightTexture" in CC,
            get: CC => CC.baseWeightTexture,
            set: (CC, zC) => {
              CC.baseWeightTexture = zC
            }
          },
          metadata: zC
        }, CQ, zQ), (0, vC.j)(CC, null, Yz, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "baseDiffuseRoughnessTexture" in CC,
            get: CC => CC.baseDiffuseRoughnessTexture,
            set: (CC, zC) => {
              CC.baseDiffuseRoughnessTexture = zC
            }
          },
          metadata: zC
        }, ZQ, QQ), (0, vC.j)(CC, null, dz, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "ambientTexture" in CC,
            get: CC => CC.ambientTexture,
            set: (CC, zC) => {
              CC.ambientTexture = zC
            }
          },
          metadata: zC
        }, wQ, bQ), (0, vC.j)(CC, null, mz, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: CC => "ambientTextureStrength" in CC,
            get: CC => CC.ambientTextureStrength,
            set: (CC, zC) => {
              CC.ambientTextureStrength = zC
            }
          },
          metadata: zC
        }, nQ, fQ), (0, vC.j)(CC, null, Hz, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: CC => "ambientTextureImpactOnAnalyticalLights" in CC,
            get: CC => CC.ambientTextureImpactOnAnalyticalLights,
            set: (CC, zC) => {
              CC.ambientTextureImpactOnAnalyticalLights = zC
            }
          },
          metadata: zC
        }, oQ, qQ), (0, vC.j)(CC, null, Ez, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "opacityTexture" in CC,
            get: CC => CC.opacityTexture,
            set: (CC, zC) => {
              CC.opacityTexture = zC
            }
          },
          metadata: zC
        }, FQ, WQ), (0, vC.j)(CC, null, lz, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "reflectionTexture" in CC,
            get: CC => CC.reflectionTexture,
            set: (CC, zC) => {
              CC.reflectionTexture = zC
            }
          },
          metadata: zC
        }, NQ, MQ), (0, vC.j)(CC, null, Xz, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "emissiveTexture" in CC,
            get: CC => CC.emissiveTexture,
            set: (CC, zC) => {
              CC.emissiveTexture = zC
            }
          },
          metadata: zC
        }, gQ, SQ), (0, vC.j)(CC, null, cz, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "reflectivityTexture" in CC,
            get: CC => CC.reflectivityTexture,
            set: (CC, zC) => {
              CC.reflectivityTexture = zC
            }
          },
          metadata: zC
        }, pQ, PQ), (0, vC.j)(CC, null, uz, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "metallicTexture" in CC,
            get: CC => CC.metallicTexture,
            set: (CC, zC) => {
              CC.metallicTexture = zC
            }
          },
          metadata: zC
        }, GQ, RQ), (0, vC.j)(CC, null, rz, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: CC => "metallic" in CC,
            get: CC => CC.metallic,
            set: (CC, zC) => {
              CC.metallic = zC
            }
          },
          metadata: zC
        }, AQ, xQ), (0, vC.j)(CC, null, sz, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: CC => "roughness" in CC,
            get: CC => CC.roughness,
            set: (CC, zC) => {
              CC.roughness = zC
            }
          },
          metadata: zC
        }, JQ, IQ), (0, vC.j)(CC, null, Tz, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: CC => "metallicF0Factor" in CC,
            get: CC => CC.metallicF0Factor,
            set: (CC, zC) => {
              CC.metallicF0Factor = zC
            }
          },
          metadata: zC
        }, iQ, vQ), (0, vC.j)(CC, null, az, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: CC => "metallicReflectanceColor" in CC,
            get: CC => CC.metallicReflectanceColor,
            set: (CC, zC) => {
              CC.metallicReflectanceColor = zC
            }
          },
          metadata: zC
        }, eQ, hQ), (0, vC.j)(CC, null, tz, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "useOnlyMetallicFromMetallicReflectanceTexture" in CC,
            get: CC => CC.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (CC, zC) => {
              CC.useOnlyMetallicFromMetallicReflectanceTexture = zC
            }
          },
          metadata: zC
        }, KQ, YQ), (0, vC.j)(CC, null, Dz, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "metallicReflectanceTexture" in CC,
            get: CC => CC.metallicReflectanceTexture,
            set: (CC, zC) => {
              CC.metallicReflectanceTexture = zC
            }
          },
          metadata: zC
        }, dQ, mQ), (0, vC.j)(CC, null, jz, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "reflectanceTexture" in CC,
            get: CC => CC.reflectanceTexture,
            set: (CC, zC) => {
              CC.reflectanceTexture = zC
            }
          },
          metadata: zC
        }, HQ, EQ), (0, vC.j)(CC, null, yz, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "microSurfaceTexture" in CC,
            get: CC => CC.microSurfaceTexture,
            set: (CC, zC) => {
              CC.microSurfaceTexture = zC
            }
          },
          metadata: zC
        }, lQ, XQ), (0, vC.j)(CC, null, Lz, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "bumpTexture" in CC,
            get: CC => CC.bumpTexture,
            set: (CC, zC) => {
              CC.bumpTexture = zC
            }
          },
          metadata: zC
        }, cQ, uQ), (0, vC.j)(CC, null, Uz, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "lightmapTexture" in CC,
            get: CC => CC.lightmapTexture,
            set: (CC, zC) => {
              CC.lightmapTexture = zC
            }
          },
          metadata: zC
        }, rQ, sQ), (0, vC.j)(CC, null, Bz, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: CC => "ambientColor" in CC,
            get: CC => CC.ambientColor,
            set: (CC, zC) => {
              CC.ambientColor = zC
            }
          },
          metadata: zC
        }, TQ, aQ), (0, vC.j)(CC, null, Oz, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: CC => "albedoColor" in CC,
            get: CC => CC.albedoColor,
            set: (CC, zC) => {
              CC.albedoColor = zC
            }
          },
          metadata: zC
        }, tQ, DQ), (0, vC.j)(CC, null, kz, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: CC => "baseWeight" in CC,
            get: CC => CC.baseWeight,
            set: (CC, zC) => {
              CC.baseWeight = zC
            }
          },
          metadata: zC
        }, jQ, yQ), (0, vC.j)(CC, null, Vz, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: CC => "baseDiffuseRoughness" in CC,
            get: CC => CC.baseDiffuseRoughness,
            set: (CC, zC) => {
              CC.baseDiffuseRoughness = zC
            }
          },
          metadata: zC
        }, LQ, UQ), (0, vC.j)(CC, null, CZ, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: CC => "reflectivityColor" in CC,
            get: CC => CC.reflectivityColor,
            set: (CC, zC) => {
              CC.reflectivityColor = zC
            }
          },
          metadata: zC
        }, BQ, OQ), (0, vC.j)(CC, null, zZ, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: CC => "reflectionColor" in CC,
            get: CC => CC.reflectionColor,
            set: (CC, zC) => {
              CC.reflectionColor = zC
            }
          },
          metadata: zC
        }, kQ, VQ), (0, vC.j)(CC, null, ZZ, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: CC => "emissiveColor" in CC,
            get: CC => CC.emissiveColor,
            set: (CC, zC) => {
              CC.emissiveColor = zC
            }
          },
          metadata: zC
        }, Cw, zw), (0, vC.j)(CC, null, QZ, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: CC => "microSurface" in CC,
            get: CC => CC.microSurface,
            set: (CC, zC) => {
              CC.microSurface = zC
            }
          },
          metadata: zC
        }, Zw, Qw), (0, vC.j)(CC, null, wZ, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: CC => "useLightmapAsShadowmap" in CC,
            get: CC => CC.useLightmapAsShadowmap,
            set: (CC, zC) => {
              CC.useLightmapAsShadowmap = zC
            }
          },
          metadata: zC
        }, ww, bw), (0, vC.j)(CC, null, bZ, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "useAlphaFromAlbedoTexture" in CC,
            get: CC => CC.useAlphaFromAlbedoTexture,
            set: (CC, zC) => {
              CC.useAlphaFromAlbedoTexture = zC
            }
          },
          metadata: zC
        }, nw, fw), (0, vC.j)(CC, null, nZ, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: CC => "forceAlphaTest" in CC,
            get: CC => CC.forceAlphaTest,
            set: (CC, zC) => {
              CC.forceAlphaTest = zC
            }
          },
          metadata: zC
        }, ow, qw), (0, vC.j)(CC, null, fZ, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: CC => "alphaCutOff" in CC,
            get: CC => CC.alphaCutOff,
            set: (CC, zC) => {
              CC.alphaCutOff = zC
            }
          },
          metadata: zC
        }, Fw, Ww), (0, vC.j)(CC, null, oZ, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: CC => "useSpecularOverAlpha" in CC,
            get: CC => CC.useSpecularOverAlpha,
            set: (CC, zC) => {
              CC.useSpecularOverAlpha = zC
            }
          },
          metadata: zC
        }, Nw, Mw), (0, vC.j)(CC, null, qZ, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: CC => "useMicroSurfaceFromReflectivityMapAlpha" in CC,
            get: CC => CC.useMicroSurfaceFromReflectivityMapAlpha,
            set: (CC, zC) => {
              CC.useMicroSurfaceFromReflectivityMapAlpha = zC
            }
          },
          metadata: zC
        }, gw, Sw), (0, vC.j)(CC, null, FZ, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: CC => "useRoughnessFromMetallicTextureAlpha" in CC,
            get: CC => CC.useRoughnessFromMetallicTextureAlpha,
            set: (CC, zC) => {
              CC.useRoughnessFromMetallicTextureAlpha = zC
            }
          },
          metadata: zC
        }, pw, Pw), (0, vC.j)(CC, null, WZ, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: CC => "useRoughnessFromMetallicTextureGreen" in CC,
            get: CC => CC.useRoughnessFromMetallicTextureGreen,
            set: (CC, zC) => {
              CC.useRoughnessFromMetallicTextureGreen = zC
            }
          },
          metadata: zC
        }, Gw, Rw), (0, vC.j)(CC, null, NZ, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: CC => "useMetallnessFromMetallicTextureBlue" in CC,
            get: CC => CC.useMetallnessFromMetallicTextureBlue,
            set: (CC, zC) => {
              CC.useMetallnessFromMetallicTextureBlue = zC
            }
          },
          metadata: zC
        }, Aw, xw), (0, vC.j)(CC, null, MZ, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: CC => "useAmbientOcclusionFromMetallicTextureRed" in CC,
            get: CC => CC.useAmbientOcclusionFromMetallicTextureRed,
            set: (CC, zC) => {
              CC.useAmbientOcclusionFromMetallicTextureRed = zC
            }
          },
          metadata: zC
        }, Jw, Iw), (0, vC.j)(CC, null, gZ, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: CC => "useAmbientInGrayScale" in CC,
            get: CC => CC.useAmbientInGrayScale,
            set: (CC, zC) => {
              CC.useAmbientInGrayScale = zC
            }
          },
          metadata: zC
        }, iw, vw), (0, vC.j)(CC, null, SZ, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: CC => "useAutoMicroSurfaceFromReflectivityMap" in CC,
            get: CC => CC.useAutoMicroSurfaceFromReflectivityMap,
            set: (CC, zC) => {
              CC.useAutoMicroSurfaceFromReflectivityMap = zC
            }
          },
          metadata: zC
        }, ew, hw), (0, vC.j)(CC, null, pZ, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: CC => "usePhysicalLightFalloff" in CC,
            get: CC => CC.usePhysicalLightFalloff
          },
          metadata: zC
        }, null, sZ), (0, vC.j)(CC, null, PZ, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: CC => "useGLTFLightFalloff" in CC,
            get: CC => CC.useGLTFLightFalloff
          },
          metadata: zC
        }, null, sZ), (0, vC.j)(CC, null, GZ, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: CC => "useRadianceOverAlpha" in CC,
            get: CC => CC.useRadianceOverAlpha,
            set: (CC, zC) => {
              CC.useRadianceOverAlpha = zC
            }
          },
          metadata: zC
        }, Kw, Yw), (0, vC.j)(CC, null, RZ, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: CC => "useObjectSpaceNormalMap" in CC,
            get: CC => CC.useObjectSpaceNormalMap,
            set: (CC, zC) => {
              CC.useObjectSpaceNormalMap = zC
            }
          },
          metadata: zC
        }, dw, mw), (0, vC.j)(CC, null, AZ, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: CC => "useParallax" in CC,
            get: CC => CC.useParallax,
            set: (CC, zC) => {
              CC.useParallax = zC
            }
          },
          metadata: zC
        }, Hw, Ew), (0, vC.j)(CC, null, xZ, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: CC => "useParallaxOcclusion" in CC,
            get: CC => CC.useParallaxOcclusion,
            set: (CC, zC) => {
              CC.useParallaxOcclusion = zC
            }
          },
          metadata: zC
        }, lw, Xw), (0, vC.j)(CC, null, JZ, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: CC => "parallaxScaleBias" in CC,
            get: CC => CC.parallaxScaleBias,
            set: (CC, zC) => {
              CC.parallaxScaleBias = zC
            }
          },
          metadata: zC
        }, uw, rw), (0, vC.j)(CC, null, IZ, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: CC => "disableLighting" in CC,
            get: CC => CC.disableLighting,
            set: (CC, zC) => {
              CC.disableLighting = zC
            }
          },
          metadata: zC
        }, sw, Tw), (0, vC.j)(CC, null, iZ, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: CC => "forceIrradianceInFragment" in CC,
            get: CC => CC.forceIrradianceInFragment,
            set: (CC, zC) => {
              CC.forceIrradianceInFragment = zC
            }
          },
          metadata: zC
        }, aw, tw), (0, vC.j)(CC, null, vZ, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: CC => "maxSimultaneousLights" in CC,
            get: CC => CC.maxSimultaneousLights,
            set: (CC, zC) => {
              CC.maxSimultaneousLights = zC
            }
          },
          metadata: zC
        }, Dw, jw), (0, vC.j)(CC, null, eZ, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: CC => "invertNormalMapX" in CC,
            get: CC => CC.invertNormalMapX,
            set: (CC, zC) => {
              CC.invertNormalMapX = zC
            }
          },
          metadata: zC
        }, yw, Lw), (0, vC.j)(CC, null, hZ, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: CC => "invertNormalMapY" in CC,
            get: CC => CC.invertNormalMapY,
            set: (CC, zC) => {
              CC.invertNormalMapY = zC
            }
          },
          metadata: zC
        }, Uw, Bw), (0, vC.j)(CC, null, KZ, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: CC => "twoSidedLighting" in CC,
            get: CC => CC.twoSidedLighting,
            set: (CC, zC) => {
              CC.twoSidedLighting = zC
            }
          },
          metadata: zC
        }, Ow, kw), (0, vC.j)(CC, null, YZ, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: CC => "useAlphaFresnel" in CC,
            get: CC => CC.useAlphaFresnel,
            set: (CC, zC) => {
              CC.useAlphaFresnel = zC
            }
          },
          metadata: zC
        }, Vw, Cb), (0, vC.j)(CC, null, dZ, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: CC => "useLinearAlphaFresnel" in CC,
            get: CC => CC.useLinearAlphaFresnel,
            set: (CC, zC) => {
              CC.useLinearAlphaFresnel = zC
            }
          },
          metadata: zC
        }, zb, Zb), (0, vC.j)(CC, null, mZ, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: CC => "environmentBRDFTexture" in CC,
            get: CC => CC.environmentBRDFTexture,
            set: (CC, zC) => {
              CC.environmentBRDFTexture = zC
            }
          },
          metadata: zC
        }, Qb, wb), (0, vC.j)(CC, null, HZ, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: CC => "forceNormalForward" in CC,
            get: CC => CC.forceNormalForward,
            set: (CC, zC) => {
              CC.forceNormalForward = zC
            }
          },
          metadata: zC
        }, bb, nb), (0, vC.j)(CC, null, EZ, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: CC => "enableSpecularAntiAliasing" in CC,
            get: CC => CC.enableSpecularAntiAliasing,
            set: (CC, zC) => {
              CC.enableSpecularAntiAliasing = zC
            }
          },
          metadata: zC
        }, fb, ob), (0, vC.j)(CC, null, lZ, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: CC => "useHorizonOcclusion" in CC,
            get: CC => CC.useHorizonOcclusion,
            set: (CC, zC) => {
              CC.useHorizonOcclusion = zC
            }
          },
          metadata: zC
        }, qb, Fb), (0, vC.j)(CC, null, XZ, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: CC => "useRadianceOcclusion" in CC,
            get: CC => CC.useRadianceOcclusion,
            set: (CC, zC) => {
              CC.useRadianceOcclusion = zC
            }
          },
          metadata: zC
        }, Wb, Nb), (0, vC.j)(CC, null, cZ, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: CC => "unlit" in CC,
            get: CC => CC.unlit,
            set: (CC, zC) => {
              CC.unlit = zC
            }
          },
          metadata: zC
        }, Mb, gb), (0, vC.j)(CC, null, uZ, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: CC => "applyDecalMapAfterDetailMap" in CC,
            get: CC => CC.applyDecalMapAfterDetailMap,
            set: (CC, zC) => {
              CC.applyDecalMapAfterDetailMap = zC
            }
          },
          metadata: zC
        }, Sb, pb), zC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zC
        })
      })(), CC.PBRMATERIAL_OPAQUE = Jz.PBRMATERIAL_OPAQUE, CC.PBRMATERIAL_ALPHATEST = Jz.PBRMATERIAL_ALPHATEST, CC.PBRMATERIAL_ALPHABLEND = Jz.PBRMATERIAL_ALPHABLEND, CC.PBRMATERIAL_ALPHATESTANDBLEND = Jz.PBRMATERIAL_ALPHATESTANDBLEND, CC.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = Jz.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, CC
    })();
    const Xw = "KHR_materials_diffuse_transmission";

    function uw(CC, zC) {
      const ZC = zC.subSurface;
      let QC = null;
      return ZC.translucencyIntensityTexture ? QC = ZC.translucencyIntensityTexture : ZC.thicknessTexture && ZC.useMaskFromThicknessTexture && (QC = ZC.thicknessTexture), QC && !ZC.useGltfStyleTextures ? (hC.c.Warn(`${CC}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${zC.name}`, 1), null) : QC
    }
    class rw {
      constructor(CC) {
        this.name = Xw, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = CC
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(CC, zC, ZC) {
        const QC = [];
        if (ZC instanceof lw && this._isExtensionEnabled(ZC)) {
          const zC = uw(CC, ZC);
          return zC && QC.push(zC), ZC.subSurface.translucencyColorTexture && QC.push(ZC.subSurface.translucencyColorTexture), QC
        }
        return QC
      }
      _isExtensionEnabled(CC) {
        if (CC.unlit) return !1;
        const zC = CC.subSurface;
        return !!zC.isTranslucencyEnabled && (!CC.unlit && !zC.useAlbedoToTintTranslucency && zC.useGltfStyleTextures && 1 === zC.volumeIndexOfRefraction && 0 === zC.minimumThickness && 0 === zC.maximumThickness)
      }
      postExportMaterialAsync(CC, zC, ZC) {
        return new Promise((QC => {
          if (ZC instanceof lw && this._isExtensionEnabled(ZC)) {
            this._wasUsed = !0;
            const QC = ZC.subSurface,
              wC = uw(CC, ZC),
              bC = 0 == QC.translucencyIntensity ? void 0 : QC.translucencyIntensity,
              nC = this._exporter._materialExporter.getTextureInfo(wC) ?? void 0,
              fC = !QC.translucencyColor || QC.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : QC.translucencyColor.VZC(),
              oC = this._exporter._materialExporter.getTextureInfo(QC.translucencyColorTexture) ?? void 0,
              qC = {
                diffuseTransmissionFactor: bC,
                diffuseTransmissionTexture: nC,
                diffuseTransmissionColorFactor: fC,
                diffuseTransmissionColorTexture: oC
              };
            (nC || oC) && this._exporter._materialNeedsUVsSet.add(ZC), zC.extensions = zC.extensions || {}, zC.extensions[Xw] = qC
          }
          QC(zC)
        }))
      }
    }
    let sw = !1;

    function Tw() {
      sw || (sw = !0, EQ.RegisterExtension(Xw, (CC => new rw(CC))))
    }
    Tw();
    const aw = "KHR_materials_dispersion";
    class tw {
      constructor() {
        this.name = aw, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(CC) {
        if (CC.unlit) return !1;
        const zC = CC.subSurface;
        return !(!zC.isRefractionEnabled && !zC.isDispersionEnabled)
      }
      postExportMaterialAsync(CC, zC, ZC) {
        return new Promise((CC => {
          if (ZC instanceof lw && this._isExtensionEnabled(ZC)) {
            this._wasUsed = !0;
            const CC = {
              dispersion: ZC.subSurface.dispersion
            };
            zC.extensions = zC.extensions || {}, zC.extensions[aw] = CC
          }
          CC(zC)
        }))
      }
    }
    let Dw = !1;

    function jw() {
      Dw || (Dw = !0, EQ.RegisterExtension(aw, (() => new tw)))
    }
    jw();
    const yw = "KHR_materials_emissive_strength";
    class Lw {
      constructor() {
        this.name = yw, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(CC, zC, ZC) {
        return await new Promise((CC => {
          if (!(ZC instanceof lw)) return CC(zC);
          const QC = ZC.emissiveColor.scale(ZC.emissiveIntensity),
            wC = Math.max(...QC.VZC());
          if (wC > 1) {
            zC.emissiveFactor = QC.scale(1 / wC).VZC(), this._wasUsed = !0;
            const CC = {
              emissiveStrength: wC
            };
            zC.extensions || (zC.extensions = {}), zC.extensions[yw] = CC
          } else zC.emissiveFactor = QC.VZC();
          return CC(zC)
        }))
      }
    }
    let Uw = !1;

    function Bw() {
      Uw || (Uw = !0, EQ.RegisterExtension(yw, (() => new Lw)))
    }
    Bw();
    const Ow = "KHR_materials_ior";
    class kw {
      constructor() {
        this.name = Ow, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(CC) {
        return !CC.unlit && (CC instanceof kz ? 1.5 != CC.specularIor : CC instanceof lw && (void 0 != CC.indexOfRefraction && 1.5 != CC.indexOfRefraction))
      }
      postExportMaterialAsync(CC, zC, ZC) {
        return new Promise((CC => {
          if (ZC instanceof lw && this._isExtensionEnabled(ZC)) {
            this._wasUsed = !0;
            const CC = {
              ior: ZC.indexOfRefraction
            };
            zC.extensions = zC.extensions || {}, zC.extensions[Ow] = CC
          } else if (ZC instanceof kz && this._isExtensionEnabled(ZC)) {
            this._wasUsed = !0;
            const CC = {
              ior: ZC.specularIor
            };
            zC.extensions = zC.extensions || {}, zC.extensions[Ow] = CC
          }
          CC(zC)
        }))
      }
    }
    let Vw = !1;

    function Cb() {
      Vw || (Vw = !0, EQ.RegisterExtension(Ow, (() => new kw)))
    }
    Cb();
    const zb = "KHR_materials_iridescence";
    class Zb {
      constructor(CC) {
        this.name = zb, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = CC
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(CC, zC, ZC) {
        const QC = [];
        if (ZC instanceof Jz) {
          if (ZC.iridescence.isEnabled) return ZC.iridescence.texture && QC.push(ZC.iridescence.texture), ZC.iridescence.thicknessTexture && ZC.iridescence.thicknessTexture !== ZC.iridescence.texture && QC.push(ZC.iridescence.thicknessTexture), QC
        } else if (ZC instanceof kz && ZC.thinFilmWeight > 0) return ZC.thinFilmWeightTexture && QC.push(ZC.thinFilmWeightTexture), ZC.thinFilmThicknessTexture && ZC.thinFilmThicknessTexture !== ZC.thinFilmWeightTexture && QC.push(ZC.thinFilmThicknessTexture), QC;
        return []
      }
      postExportMaterialAsync(CC, zC, ZC) {
        return new Promise((CC => {
          if (ZC instanceof Jz) {
            if (!ZC.iridescence.isEnabled) return void CC(zC);
            this._wasUsed = !0, zC.extensions = zC.extensions || {};
            const QC = this._exporter._materialExporter.getTextureInfo(ZC.iridescence.texture),
              wC = this._exporter._materialExporter.getTextureInfo(ZC.iridescence.thicknessTexture),
              bC = {
                iridescenceFactor: ZC.iridescence.intensity,
                iridescenceIor: ZC.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: ZC.iridescence.minimumThickness,
                iridescenceThicknessMaximum: ZC.iridescence.maximumThickness,
                iridescenceTexture: QC ?? void 0,
                iridescenceThicknessTexture: wC ?? void 0
              };
            null === bC.iridescenceTexture && null === bC.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(ZC), zC.extensions[zb] = bC
          } else if (ZC instanceof kz) {
            if (ZC.thinFilmWeight <= 0) return void CC(zC);
            this._wasUsed = !0, zC.extensions = zC.extensions || {};
            const QC = this._exporter._materialExporter.getTextureInfo(ZC.thinFilmWeightTexture),
              wC = this._exporter._materialExporter.getTextureInfo(ZC.thinFilmThicknessTexture),
              bC = {
                iridescenceFactor: ZC.thinFilmWeight,
                iridescenceIor: ZC.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * ZC.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * ZC.thinFilmThickness,
                iridescenceTexture: QC ?? void 0,
                iridescenceThicknessTexture: wC ?? void 0
              };
            null === bC.iridescenceTexture && null === bC.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(ZC), zC.extensions[zb] = bC
          }
          CC(zC)
        }))
      }
    }
    let Qb = !1;

    function wb() {
      Qb || (Qb = !0, EQ.RegisterExtension(zb, (CC => new Zb(CC))))
    }
    wb();
    const bb = "KHR_materials_sheen";
    class nb {
      constructor(CC) {
        this.name = bb, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = CC
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(CC, zC, ZC) {
        return ZC instanceof lw && ZC.sheen.isEnabled && ZC.sheen.texture ? [ZC.sheen.texture] : []
      }
      async postExportMaterialAsync(CC, zC, ZC) {
        return await new Promise((CC => {
          if (ZC instanceof lw) {
            if (!ZC.sheen.isEnabled) return void CC(zC);
            this._wasUsed = !0, null == zC.extensions && (zC.extensions = {});
            const QC = {
              sheenColorFactor: ZC.sheen.color.VZC(),
              sheenRoughnessFactor: ZC.sheen.roughness ?? 0
            };
            null === QC.sheenColorTexture && null === QC.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ZC), ZC.sheen.texture && (QC.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(ZC.sheen.texture) ?? void 0), ZC.sheen.textureRoughness && !ZC.sheen.useRoughnessFromMainTexture ? QC.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ZC.sheen.textureRoughness) ?? void 0 : ZC.sheen.texture && ZC.sheen.useRoughnessFromMainTexture && (QC.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ZC.sheen.texture) ?? void 0), zC.extensions[bb] = QC
          }
          CC(zC)
        }))
      }
    }
    let fb = !1;

    function ob() {
      fb || (fb = !0, EQ.RegisterExtension(bb, (CC => new nb(CC))))
    }
    ob();
    const qb = "KHR_materials_fuzz";

    function Fb(CC, zC) {
      const ZC = new YC.h(zC.name, zC.Km());
      return ZC._texture = CC, ZC.coordinatesIndex = zC.coordinatesIndex, zC instanceof YC.h && (ZC.uOffset = zC.uOffset, ZC.vOffset = zC.vOffset, ZC.uScale = zC.uScale, ZC.vScale = zC.vScale, ZC.wAng = zC.wAng), ZC.wrapU = zC.wrapU, ZC.wrapV = zC.wrapV, ZC
    }
    class Wb {
      constructor(CC) {
        this.name = qb, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = CC
      }
      dispose() {
        for (const CC of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[CC].dispose()
        }
        this._mergedTexturesMap = {};
        for (const CC of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[CC].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(CC, zC, ZC) {
        if (ZC instanceof kz) {
          const CC = [];
          if (ZC.fuzzWeight > 0) {
            ZC.fuzzWeightTexture && CC.push(ZC.fuzzWeightTexture);
            let zC = !1;
            if (ZC.fuzzRoughnessTexture && (ZC._useFuzzRoughnessFromTextureAlpha ? CC.push(ZC.fuzzRoughnessTexture) : zC = !0), ZC.fuzzColorTexture && !zC && CC.push(ZC.fuzzColorTexture), zC) {
              const zC = function(CC) {
                const zC = CC.fuzzColorTexture,
                  ZC = zC && zC.getInternalTexture() ? zC.getInternalTexture().uniqueId : "NoFuzzColor",
                  QC = CC.fuzzRoughnessTexture;
                return `FuzzColor_${ZC}_FuzzRoughness_${QC&&QC.getInternalTexture()?QC.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(ZC);
              if (!this._cachedInternalTexturesMap[zC]) {
                const CC = await async function(CC) {
                  const zC = CC.Km(),
                    ZC = CC.fuzzColorTexture,
                    QC = CC.fuzzRoughnessTexture;
                  return ZC || QC ? (await nZ("FuzzTexture", qZ(ZC ? fZ(ZC, 0) : oZ(1), ZC ? fZ(ZC, 1) : oZ(1), ZC ? fZ(ZC, 2) : oZ(1), QC ? fZ(QC, CC._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : oZ(1)), zC)).getInternalTexture() : null
                }(ZC);
                CC && (this._cachedInternalTexturesMap[zC] = CC)
              }
              this._cachedInternalTexturesMap[zC] && (ZC.fuzzColorTexture && (this._mergedTexturesMap[ZC.fuzzColorTexture.uniqueId] = Fb(this._cachedInternalTexturesMap[zC], ZC.fuzzColorTexture), CC.push(this._mergedTexturesMap[ZC.fuzzColorTexture.uniqueId])), ZC.fuzzRoughnessTexture && (this._mergedTexturesMap[ZC.fuzzRoughnessTexture.uniqueId] = Fb(this._cachedInternalTexturesMap[zC], ZC.fuzzRoughnessTexture), CC.push(this._mergedTexturesMap[ZC.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return CC
        }
        return []
      }
      async postExportMaterialAsync(CC, zC, ZC) {
        return await new Promise((CC => {
          if (ZC instanceof kz) {
            if (0 == ZC.fuzzWeight) return void CC(zC);
            this._wasUsed = !0, null == zC.extensions && (zC.extensions = {});
            const QC = {
              fuzzFactor: ZC.fuzzWeight,
              fuzzColorFactor: ZC.fuzzColor.VZC(),
              fuzzRoughnessFactor: ZC.fuzzRoughness
            };
            let wC, bC;
            ZC.fuzzWeightTexture && (QC.fuzzTexture = this._exporter._materialExporter.getTextureInfo(ZC.fuzzWeightTexture) ?? void 0), ZC.fuzzColorTexture && (wC = this._mergedTexturesMap[ZC.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[ZC.fuzzColorTexture.uniqueId] : ZC.fuzzColorTexture, QC.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(wC) ?? void 0), ZC.fuzzRoughnessTexture && (bC = this._mergedTexturesMap[ZC.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[ZC.fuzzRoughnessTexture.uniqueId] : ZC.fuzzRoughnessTexture, QC.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(bC) ?? void 0), null === QC.fuzzColorTexture && null === QC.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ZC), zC.extensions[qb] = QC
          }
          CC(zC)
        }))
      }
    }
    let Nb = !1;

    function Mb() {
      Nb || (Nb = !0, EQ.RegisterExtension(qb, (CC => new Wb(CC))))
    }
    Mb();
    const gb = "KHR_materials_specular";
    class Sb {
      constructor(CC) {
        this.name = gb, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = CC
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(CC, zC, ZC) {
        const QC = [];
        return ZC instanceof lw && this._isExtensionEnabled(ZC) ? (ZC.metallicReflectanceTexture && QC.push(ZC.metallicReflectanceTexture), ZC.reflectanceTexture && QC.push(ZC.reflectanceTexture), QC) : QC
      }
      _isExtensionEnabled(CC) {
        return !CC.unlit && (void 0 != CC.metallicF0Factor && 1 != CC.metallicF0Factor || void 0 != CC.metallicReflectanceColor && !CC.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(CC))
      }
      _hasTexturesExtension(CC) {
        return null != CC.metallicReflectanceTexture || null != CC.reflectanceTexture
      }
      postExportMaterialAsync(CC, zC, ZC) {
        return new Promise((CC => {
          var QC;
          if (ZC instanceof lw && this._isExtensionEnabled(ZC)) {
            this._wasUsed = !0, zC.extensions = zC.extensions || {};
            const CC = this._exporter._materialExporter.getTextureInfo(ZC.metallicReflectanceTexture) ?? void 0,
              QC = this._exporter._materialExporter.getTextureInfo(ZC.reflectanceTexture) ?? void 0,
              wC = {
                specularFactor: 1 == ZC.metallicF0Factor ? void 0 : ZC.metallicF0Factor,
                specularTexture: CC,
                specularColorFactor: ZC.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : ZC.metallicReflectanceColor.VZC(),
                specularColorTexture: QC
              };
            this._hasTexturesExtension(ZC) && this._exporter._materialNeedsUVsSet.add(ZC), zC.extensions[gb] = wC
          } else if (ZC instanceof kz) {
            zC.extensions = zC.extensions || {};
            const wC = this._exporter._materialExporter.getTextureInfo(ZC.specularWeightTexture) ?? void 0,
              bC = this._exporter._materialExporter.getTextureInfo(ZC.specularColorTexture) ?? void 0,
              nC = 1 == ZC.specularWeight ? void 0 : ZC.specularWeight,
              fC = ZC.specularColor.equalsFloats(1, 1, 1) ? void 0 : ZC.specularColor.VZC();
            if (!bC && !wC && void 0 === nC && void 0 === fC) return CC(zC);
            this._wasUsed = !0;
            const oC = {
                specularEdgeColorEnabled: !0
              },
              qC = {
                specularFactor: nC,
                specularTexture: wC,
                specularColorFactor: fC,
                specularColorTexture: bC,
                extensions: {}
              };
            qC.extensions.EXT_materials_specular_edge_color = oC, (QC = this._exporter._glTF).extensionsUsed || (QC.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (wC || bC) && this._exporter._materialNeedsUVsSet.add(ZC), zC.extensions[gb] = qC
          }
          CC(zC)
        }))
      }
    }
    let pb = !1;

    function Pb() {
      pb || (pb = !0, EQ.RegisterExtension(gb, (CC => new Sb(CC))))
    }
    Pb();
    const Gb = "KHR_materials_transmission";
    class Rb {
      constructor(CC) {
        this.name = Gb, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = CC
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(CC, zC, ZC) {
        const QC = [];
        if (ZC instanceof lw) {
          if (this._isExtensionEnabled(ZC)) return ZC.subSurface.refractionIntensityTexture && ZC.subSurface.useGltfStyleTextures && QC.push(ZC.subSurface.refractionIntensityTexture), QC
        } else ZC instanceof kz && (ZC.transmissionWeight > 0 && ZC.transmissionWeightTexture && (QC.push(ZC.transmissionWeightTexture), ZC.transmissionColorTexture && QC.push(ZC.transmissionColorTexture)), ZC.subsurfaceWeight > 0 && ZC.subsurfaceWeightTexture && QC.push(ZC.subsurfaceWeightTexture));
        return QC
      }
      _isExtensionEnabled(CC) {
        if (CC instanceof kz && !CC.unlit) return CC.transmissionWeight > 0 || CC.subsurfaceWeight > 0;
        if (CC instanceof lw && !CC.unlit) {
          const zC = CC.subSurface;
          return zC.isRefractionEnabled && void 0 != zC.refractionIntensity && 0 != zC.refractionIntensity || null != zC.refractionIntensityTexture && zC.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(CC, zC, ZC) {
        if (!this._isExtensionEnabled(ZC)) return zC;
        if (ZC instanceof lw) {
          this._wasUsed = !0;
          const QC = ZC.subSurface,
            wC = {
              transmissionFactor: 0 === QC.refractionIntensity ? void 0 : QC.refractionIntensity
            };
          if (QC.refractionIntensityTexture)
            if (QC.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(ZC);
              const CC = this._exporter._materialExporter.getTextureInfo(QC.refractionIntensityTexture);
              CC && (wC.transmissionTexture = CC)
            } else hC.c.Warn(`${CC}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          zC.extensions || (zC.extensions = {}), zC.extensions[Gb] = wC
        } else if (ZC instanceof kz) {
          this._wasUsed = !0;
          const CC = {
            transmissionFactor: (1 - ZC.transmissionWeight) * ZC.subsurfaceWeight + ZC.transmissionWeight
          };
          if (ZC.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(ZC);
            const zC = this._exporter._materialExporter.getTextureInfo(ZC.transmissionWeightTexture);
            zC && (CC.transmissionTexture = zC)
          } else if (ZC.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(ZC);
            const zC = this._exporter._materialExporter.getTextureInfo(ZC.subsurfaceWeightTexture);
            zC && (CC.transmissionTexture = zC)
          }
          if (0 == ZC.transmissionDepth && (!ZC.transmissionColor.equals(jC.e.White()) || ZC.transmissionColorTexture) && zC.pbrMetallicRoughness && (zC.pbrMetallicRoughness.baseColorFactor || (zC.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), zC.pbrMetallicRoughness.baseColorFactor[0] *= ZC.transmissionColor.r, zC.pbrMetallicRoughness.baseColorFactor[1] *= ZC.transmissionColor.g, zC.pbrMetallicRoughness.baseColorFactor[2] *= ZC.transmissionColor.b, ZC.transmissionColorTexture && !zC.pbrMetallicRoughness.baseColorTexture)) {
            const CC = this._exporter._materialExporter.getTextureInfo(ZC.transmissionColorTexture);
            CC && (zC.pbrMetallicRoughness.baseColorTexture = CC, this._exporter._materialNeedsUVsSet.add(ZC))
          }
          zC.extensions || (zC.extensions = {}), zC.extensions[Gb] = CC
        }
        return zC
      }
    }
    let Ab = !1;

    function xb() {
      Ab || (Ab = !0, EQ.RegisterExtension(Gb, (CC => new Rb(CC))))
    }
    xb();
    var Jb = ZC(40095);
    const Ib = "KHR_materials_unlit";
    class ib {
      constructor() {
        this.name = Ib, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(CC, zC, ZC) {
        return new Promise((CC => {
          let QC = !1;
          ZC instanceof lw ? QC = ZC.unlit : ZC instanceof Jb.d && (QC = ZC.disableLighting), QC && (this._wasUsed = !0, null == zC.extensions && (zC.extensions = {}), zC.extensions[Ib] = {}), CC(zC)
        }))
      }
    }
    let vb = !1;

    function eb() {
      vb || (vb = !0, EQ.RegisterExtension(Ib, (() => new ib)))
    }
    eb();
    const hb = "KHR_materials_volume";
    class Kb {
      constructor(CC) {
        this.name = hb, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = CC
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(CC, zC, ZC) {
        const QC = [];
        if (ZC instanceof lw) {
          if (this._isExtensionEnabled(ZC)) return ZC.subSurface.thicknessTexture && QC.push(ZC.subSurface.thicknessTexture), QC
        } else ZC instanceof kz && (ZC.transmissionWeight > 0 || ZC.subsurfaceWeight > 0) && ZC.geometryThicknessTexture && QC.push(ZC.geometryThicknessTexture);
        return QC
      }
      _isExtensionEnabled(CC) {
        if (CC.unlit) return !1;
        const zC = CC.subSurface;
        return !(!zC.isRefractionEnabled && !zC.isTranslucencyEnabled) && (void 0 != zC.maximumThickness && 0 != zC.maximumThickness || void 0 != zC.tintColorAtDistance && zC.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != zC.tintColor && zC.tintColor != jC.e.White() || this._hasTexturesExtension(CC))
      }
      _hasTexturesExtension(CC) {
        return null != CC.subSurface.thicknessTexture
      }
      postExportMaterialAsync(CC, zC, ZC) {
        return new Promise((CC => {
          if (ZC instanceof lw && this._isExtensionEnabled(ZC)) {
            this._wasUsed = !0;
            const CC = ZC.subSurface,
              QC = {
                thicknessFactor: 0 == CC.maximumThickness ? void 0 : CC.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(CC.thicknessTexture) ?? void 0,
                attenuationDistance: CC.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : CC.tintColorAtDistance,
                attenuationColor: CC.tintColor.equalsFloats(1, 1, 1) ? void 0 : CC.tintColor.VZC()
              };
            this._hasTexturesExtension(ZC) && this._exporter._materialNeedsUVsSet.add(ZC), zC.extensions = zC.extensions || {}, zC.extensions[hb] = QC
          } else if (ZC instanceof kz) {
            const CC = ZC.transmissionWeight > 0 && !ZC.geometryThinWalled,
              QC = ZC.subsurfaceWeight > 0 && !ZC.geometryThinWalled;
            if (CC || QC) {
              this._wasUsed = !0;
              const wC = ZC.geometryThickness,
                bC = this._exporter._materialExporter.getTextureInfo(ZC.geometryThicknessTexture) ?? void 0;
              let nC;
              bC && this._exporter._materialNeedsUVsSet.add(ZC);
              const fC = jC.e.White().VZC();
              if (CC && ZC.transmissionDepth > 0) {
                const CC = 1 / ZC.transmissionDepth;
                let zC = new uC.r(-Math.log(ZC.transmissionColor.r) * CC, -Math.log(ZC.transmissionColor.g) * CC, -Math.log(ZC.transmissionColor.b) * CC);
                const QC = new uC.r(ZC.transmissionScatter.r * CC, ZC.transmissionScatter.g * CC, ZC.transmissionScatter.b * CC),
                  wC = zC.subtract(QC),
                  bC = Math.min(wC.x, wC.y, wC.z);
                bC < 0 && (wC.x = wC.x - bC, wC.y = wC.y - bC, wC.z = wC.z - bC), zC = wC.add(QC);
                nC = 1 / Math.max(zC.x, zC.y, zC.z), fC[0] = Math.exp(-zC.x * nC), fC[1] = Math.exp(-zC.y * nC), fC[2] = Math.exp(-zC.z * nC)
              } else nC = Number.MAX_VALUE, fC[0] = 1, fC[1] = 1, fC[2] = 1;
              let oC = 1;
              const qC = jC.e.White().VZC();
              if (QC) {
                const CC = ZC.subsurfaceRadius,
                  zC = ZC.subsurfaceRadiusScale,
                  QC = new uC.r(zC.r, zC.g, zC.b).multiplyByFloats(CC, CC, CC),
                  wC = new uC.r(1 / Math.max(QC.x, 1e-6), 1 / Math.max(QC.y, 1e-6), 1 / Math.max(QC.z, 1e-6));
                oC = 1 / Math.max(wC.x, wC.y, wC.z), qC[0] = Math.exp(-wC.x * oC), qC[1] = Math.exp(-wC.y * oC), qC[2] = Math.exp(-wC.z * oC)
              }
              const FC = (1 - ZC.transmissionWeight) * ZC.subsurfaceWeight,
                WC = FC + ZC.transmissionWeight,
                NC = 1 / Math.max(WC, 1e-6),
                MC = ZC.transmissionWeight * NC,
                gC = FC * NC,
                SC = fC.map(((CC, zC) => CC * MC + qC[zC] * gC)),
                pC = {
                  thicknessFactor: wC,
                  thicknessTexture: bC,
                  attenuationDistance: nC * MC + oC * gC,
                  attenuationColor: SC
                };
              zC.extensions = zC.extensions || {}, zC.extensions[hb] = pC
            }
          }
          CC(zC)
        }))
      }
    }
    let Yb = !1;

    function db() {
      Yb || (Yb = !0, EQ.RegisterExtension(hb, (CC => new Kb(CC))))
    }
    db();
    const mb = "KHR_materials_volume_scatter";
    class Hb {
      constructor(CC) {
        this.name = mb, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = CC
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(CC, zC, ZC) {
        const QC = [];
        return ZC instanceof kz && (ZC.transmissionWeight > 0 && ZC.transmissionScatterTexture && QC.push(ZC.transmissionScatterTexture), ZC.subsurfaceWeight > 0 && ZC.subsurfaceColorTexture && QC.push(ZC.subsurfaceColorTexture)), QC
      }
      _isExtensionEnabled(CC) {
        if (CC.unlit) return !1;
        const zC = CC.transmissionWeight > 0 && !CC.geometryThinWalled && CC.transmissionDepth > 0 && !CC.transmissionScatter.equals(jC.e.Black()),
          ZC = CC.subsurfaceWeight > 0 && !CC.geometryThinWalled;
        return !(!zC && !ZC)
      }
      postExportMaterialAsync(CC, zC, ZC) {
        return new Promise((CC => {
          if (ZC instanceof kz && this._isExtensionEnabled(ZC)) {
            this._wasUsed = !0;
            let CC = uC.r.Zero(),
              QC = 0;
            if (ZC.transmissionWeight > 0) {
              CC = function(CC) {
                const zC = new uC.r(Math.sqrt(1 - CC.x), Math.sqrt(1 - CC.y), Math.sqrt(1 - CC.z)),
                  ZC = new uC.r(1, 1, 1),
                  QC = ZC.subtract(zC),
                  wC = ZC.subtract(new uC.r(.139, .139, .139).multiplyInPlace(zC)),
                  bC = ZC.add(new uC.r(1.17, 1.17, 1.17).multiplyInPlace(zC));
                return QC.multiplyInPlace(wC).divideInPlace(bC)
              }(new uC.r(ZC.transmissionScatter.r, ZC.transmissionScatter.g, ZC.transmissionScatter.b)), QC = ZC.transmissionScatterAnisotropy
            }
            const wC = uC.r.Zero();
            let bC = 0;
            ZC.subsurfaceWeight > 0 && (wC.set(ZC.subsurfaceColor.r, ZC.subsurfaceColor.g, ZC.subsurfaceColor.b), bC = ZC.subsurfaceScatterAnisotropy);
            const nC = (1 - ZC.transmissionWeight) * ZC.subsurfaceWeight,
              fC = nC + ZC.transmissionWeight,
              oC = 1 / Math.max(fC, 1e-6),
              qC = ZC.transmissionWeight * oC,
              FC = nC * oC,
              WC = {
                multiscatterColorFactor: CC.multiplyByFloats(qC, qC, qC).addInPlace(wC.multiplyByFloats(FC, FC, FC)).VZC(),
                scatterAnisotropy: QC * qC + bC * FC
              };
            if (ZC.subsurfaceWeight > 0 && ZC.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(ZC);
              const CC = this._exporter._materialExporter.getTextureInfo(ZC.subsurfaceColorTexture);
              CC && (WC.multiscatterColorTexture = CC)
            } else if (ZC.transmissionWeight > 0 && ZC.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(ZC);
              const CC = this._exporter._materialExporter.getTextureInfo(ZC.transmissionScatterTexture);
              CC && (WC.multiscatterColorTexture = CC)
            }
            zC.extensions = zC.extensions || {}, zC.extensions[mb] = WC
          }
          CC(zC)
        }))
      }
    }
    let Eb = !1;

    function lb() {
      Eb || (Eb = !0, EQ.RegisterExtension(mb, (CC => new Hb(CC)), 101))
    }
    lb();
    const Xb = "KHR_materials_diffuse_roughness";
    class cb {
      constructor(CC) {
        this.name = Xb, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = CC
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(CC, zC, ZC) {
        const QC = [];
        if (ZC instanceof Jz) {
          if (ZC._baseDiffuseRoughness) return ZC._baseDiffuseRoughnessTexture && QC.push(ZC._baseDiffuseRoughnessTexture), QC
        } else if (ZC instanceof kz && ZC.baseDiffuseRoughness) return ZC.baseDiffuseRoughnessTexture && QC.push(ZC.baseDiffuseRoughnessTexture), QC;
        return []
      }
      postExportMaterialAsync(CC, zC, ZC) {
        return new Promise((CC => {
          let QC = null,
            wC = null;
          if (ZC instanceof Jz ? (QC = ZC._baseDiffuseRoughness, wC = ZC._baseDiffuseRoughnessTexture) : ZC instanceof kz && (QC = ZC.baseDiffuseRoughness, wC = ZC.baseDiffuseRoughnessTexture), !QC) return void CC(zC);
          this._wasUsed = !0, zC.extensions = zC.extensions || {};
          const bC = {
            diffuseRoughnessFactor: QC,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(wC) ?? void 0
          };
          null !== bC.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(ZC), zC.extensions[Xb] = bC, CC(zC)
        }))
      }
    }
    let ub = !1;

    function rb() {
      ub || (ub = !0, EQ.RegisterExtension(Xb, (CC => new cb(CC))))
    }
    rb();
    const sb = "KHR_materials_openpbr";
    class Tb {
      constructor() {
        this.name = sb, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(CC, zC, ZC) {
        return new Promise((CC => {
          ZC instanceof kz && (this._wasUsed = !0, zC.extensions = zC.extensions || {}, zC.extensions[sb] = {}), CC(zC)
        }))
      }
    }
    let ab = !1;

    function tb() {
      ab || (ab = !0, EQ.RegisterExtension(sb, (() => new Tb)))
    }
    tb();
    const Db = "KHR_texture_transform";
    class jb {
      constructor() {
        this.name = Db, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(CC, zC, ZC) {
        if (ZC.Km() || iz.g.Warn(`${CC}: "scene" is not defined for Babylon texture ${ZC.name}!`), (0 !== ZC.uAng || 0 !== ZC.vAng) && (iz.g.Warn(`${CC}: Texture ${ZC.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== ZC.uRotationCenter || 0 !== ZC.vRotationCenter)) return;
        const QC = {};
        let wC = !1;
        if (0 === ZC.uOffset && 0 === ZC.vOffset || (QC.offset = [ZC.uOffset, ZC.vOffset], wC = !0), 1 === ZC.uScale && 1 === ZC.vScale || (QC.scale = [ZC.uScale, ZC.vScale], wC = !0), 0 !== ZC.wAng) {
          if (0 !== ZC.uRotationCenter || 0 !== ZC.vRotationCenter) {
            if (ZC.homogeneousRotationInUVTransform && ZC.uScale !== ZC.vScale) return void iz.g.Warn(`${CC}: Texture ${ZC.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${Db}.`);
            iz.g.Warn(`${CC}: Texture ${ZC.name} with non-origin rotation center will be exported using an adjusted offset with ${Db}.`), QC.offset = function(CC) {
              const {
                uOffset: zC,
                vOffset: ZC,
                uRotationCenter: QC,
                vRotationCenter: wC,
                uScale: bC,
                vScale: nC,
                wAng: fC
              } = CC, oC = Math.cos(fC), qC = Math.sin(fC), FC = QC * bC, WC = wC * nC;
              return [zC + (FC * (1 - oC) + WC * qC), ZC + (WC * (1 - oC) - FC * qC)]
            }(ZC)
          }
          QC.rotation = -ZC.wAng, wC = !0
        }
        0 !== ZC.coordinatesIndex && (QC.texCoord = ZC.coordinatesIndex, wC = !0), wC && (this._wasUsed = !0, zC.extensions || (zC.extensions = {}), zC.extensions[Db] = QC)
      }
    }
    let yb = !1;

    function Lb() {
      yb || (yb = !0, EQ.RegisterExtension(Db, (() => new jb)))
    }
    Lb();
    var Ub = ZC(39865);
    const Bb = "KHR_texture_basisu";
    class Ob {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(CC) {
        this.name = Bb, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = CC
      }
      dispose() {}
      postExportTexture(CC, zC) {
        const ZC = this._exporter._textures[zC.index],
          QC = ZC.source;
        if (void 0 === QC) return;
        const wC = this._exporter._images[QC];
        "image/ktx2" === (wC.mimeType || (0, Ub.g)(wC.uri)) && (ZC.source = void 0, ZC.extensions || (ZC.extensions = {}), ZC.extensions[Bb] = {
          source: QC
        }, this._wasUsed = !0)
      }
    }
    let kb = !1;

    function Vb() {
      kb || (kb = !0, EQ.RegisterExtension(Bb, (CC => new Ob(CC))))
    }
    Vb();
    const Cn = "EXT_texture_webp";
    class zn {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(CC) {
        this.name = Cn, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = CC
      }
      dispose() {}
      postExportTexture(CC, zC) {
        const ZC = this._exporter._textures[zC.index],
          QC = ZC.source;
        if (void 0 === QC) return;
        const wC = this._exporter._images[QC];
        "image/webp" === (wC.mimeType || (0, Ub.g)(wC.uri)) && (ZC.source = void 0, ZC.extensions || (ZC.extensions = {}), ZC.extensions[Cn] = {
          source: QC
        }, this._wasUsed = !0)
      }
    }
    let Zn = !1;

    function Qn() {
      Zn || (Zn = !0, EQ.RegisterExtension(Cn, (CC => new zn(CC))))
    }
    Qn();
    const wn = "EXT_texture_avif";
    class bn {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(CC) {
        this.name = wn, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = CC
      }
      dispose() {}
      postExportTexture(CC, zC) {
        const ZC = this._exporter._textures[zC.index],
          QC = ZC.source;
        if (void 0 === QC) return;
        const wC = this._exporter._images[QC];
        "image/avif" === (wC.mimeType || (0, Ub.g)(wC.uri)) && (ZC.source = void 0, ZC.extensions || (ZC.extensions = {}), ZC.extensions[wn] = {
          source: QC
        }, this._wasUsed = !0)
      }
    }
    let nn = !1;

    function fn() {
      nn || (nn = !0, EQ.RegisterExtension(wn, (CC => new bn(CC))))
    }
    fn();
    class qn {
      static CreateSTL(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          wC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          bC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          nC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          fC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          oC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const qC = function(CC, zC, ZC) {
            const wC = [3 * CC[ZC], 3 * CC[ZC + 1], 3 * CC[ZC + 2]],
              bC = [new QC.Eg(zC[wC[0]], zC[wC[0] + 2], zC[wC[0] + 1]), new QC.Eg(zC[wC[1]], zC[wC[1] + 2], zC[wC[1] + 1]), new QC.Eg(zC[wC[2]], zC[wC[2] + 2], zC[wC[2] + 1])],
              nC = bC[0].subtract(bC[1]),
              fC = bC[2].subtract(bC[1]);
            return {
              v: bC,
              n: QC.Eg.Cross(fC, nC).normalize()
            }
          },
          WC = function(CC, zC, ZC, QC) {
            return zC = NC(CC, zC, ZC.x, QC), zC = NC(CC, zC, ZC.y, QC), NC(CC, zC, ZC.z, QC)
          },
          NC = function(CC, zC, ZC, QC) {
            return CC.setFloat32(zC, ZC, QC), zC + 4
          },
          gC = function(CC) {
            if (fC) {
              let zC = CC;
              CC instanceof MC.b && (zC = CC.LQC);
              const ZC = zC.getVerticesData(FC.f.PositionKind, !0, !0);
              if (!ZC) return [];
              const wC = QC.Eg.Zero();
              let bC;
              for (bC = 0; bC < ZC.length; bC += 3) QC.Eg.TransformCoordinatesFromFloatsToRef(ZC[bC], ZC[bC + 1], ZC[bC + 2], CC.computeWorldMatrix(!0), wC).toArray(ZC, bC);
              return ZC
            }
            return CC.getVerticesData(FC.f.PositionKind) || []
          };
        fC && (nC = !0);
        let SC = "",
          pC = 0,
          PC = 0;
        if (wC) {
          for (let ZC = 0; ZC < CC.length; ZC++) {
            const zC = CC[ZC].CQC();
            pC += zC ? zC.length / 3 : 0
          }
          const zC = new ArrayBuffer(84 + 50 * pC);
          SC = new DataView(zC), PC += 80, SC.setUint32(PC, pC, bC), PC += 4
        } else oC || (SC = "solid stlmesh\r\n");
        for (let QC = 0; QC < CC.length; QC++) {
          const zC = CC[QC];
          !wC && oC && (SC += "solid " + zC.name + "\r\n"), !nC && zC instanceof qQ.e && zC.bakeCurrentTransformIntoVertices();
          const ZC = gC(zC),
            fC = zC.CQC() || [];
          for (let CC = 0; CC < fC.length; CC += 3) {
            const zC = qC(fC, ZC, CC);
            wC ? (PC = WC(SC, PC, zC.n, bC), PC = WC(SC, PC, zC.v[0], bC), PC = WC(SC, PC, zC.v[1], bC), PC = WC(SC, PC, zC.v[2], bC), PC += 2) : (SC += "\tfacet normal " + zC.n.x + " " + zC.n.y + " " + zC.n.z + "\r\n", SC += "\t\touter loop\r\n", SC += "\t\t\tvertex " + zC.v[0].x + " " + zC.v[0].y + " " + zC.v[0].z + "\r\n", SC += "\t\t\tvertex " + zC.v[1].x + " " + zC.v[1].y + " " + zC.v[1].z + "\r\n", SC += "\t\t\tvertex " + zC.v[2].x + " " + zC.v[2].y + " " + zC.v[2].z + "\r\n", SC += "\t\tendloop\r\n", SC += "\tendfacet\r\n")
          }!wC && oC && (SC += "endsolid " + name + "\r\n")
        }
        if (wC || oC || (SC += "endsolid stlmesh"), zC) {
          const CC = document.createElement("a"),
            zC = new Blob([SC], {
              type: "application/octet-stream"
            });
          CC.href = window.URL.createObjectURL(zC), CC.download = ZC + ".stl", CC.click()
        }
        return SC
      }
    }

    function Fn(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const wC = [];
      for (let bC = 0; bC < CC.length / ZC; bC++) {
        const nC = CC[bC * ZC] * (QC ? -1 : 1),
          fC = CC[bC * ZC + 1],
          oC = CC[bC * ZC + 2];
        wC.push(`(${nC.toPrecision(zC.precision)}, ${fC.toPrecision(zC.precision)}, ${oC.toPrecision(zC.precision)})`)
      }
      return wC.join(", ")
    }

    function Wn(CC, zC) {
      const ZC = [];
      for (let QC = 0; QC < CC.length / 2; QC++) {
        const wC = CC[2 * QC],
          bC = CC[2 * QC + 1];
        ZC.push(`(${wC.toPrecision(zC.precision)}, ${(1-bC).toPrecision(zC.precision)})`)
      }
      return ZC.join(", ")
    }

    function Nn(CC, zC, ZC, QC) {
      const wC = CC.getVerticesData(FC.f.PositionKind),
        bC = CC.getVerticesData(FC.f.NormalKind);
      if (wC && bC) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${ZC}"\n\t\tint[] faceVertexCounts = [${function(CC){const zC=CC.CQC()?.length?CC.getTotalIndices():CC.getTotalVertices();return Array(zC/3).fill(3).join(", ")}(CC)}]\n\t\tint[] faceVertexIndices = [${function(CC){const zC=CC.CQC(),ZC=zC?.length??CC.getTotalVertices(),QC=[];if(null!==zC)for(let wC=0;wC<ZC;wC++)QC.push(zC[wC]);else for(let wC=0;wC<ZC;wC++)QC.push(wC);return QC.join(", ")}(CC)}]\n\t\tnormal3f[] normals = [${Fn(bC,zC,void 0,QC)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${Fn(wC,zC,void 0,QC)}]\n        ${function(CC,zC){let ZC="";for(let wC=0;wC<4;wC++){const QC=wC>0?wC:"",bC=CC.getVerticesData(FC.f.UVKind+(QC?QC+1:""));bC&&(ZC+=`\n\t\ttexCoord2f[] primvars:st${QC} = [${Wn(bC,zC)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const QC=CC.getVerticesData(FC.f.ColorKind);return QC&&(ZC+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        Fn(QC, zC, QC.length / CC.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),ZC}(CC,zC)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function Mn(CC, zC, ZC, QC) {
      return `\n        def "Geometry"\n        {\n        ${Nn(CC,zC,ZC,QC)}\n        }\n        `
    }

    function gn(CC) {
      let zC = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return zC += CC, fflate.strToU8(zC)
    }

    function Sn(CC) {
      const zC = CC.m;
      return `( ${pn(zC,0)}, ${pn(zC,4)}, ${pn(zC,8)}, ${pn(zC,12)} )`
    }

    function pn(CC, zC) {
      return `(${CC[zC+0]}, ${CC[zC+1]}, ${CC[zC+2]}, ${CC[zC+3]})`
    }

    function Pn(CC, zC) {
      const ZC = "Object_" + CC.uniqueId,
        QC = Sn(zC);
      return `def Xform "${ZC}" (\n\tprepend references = @./geometries/Geometry_${CC.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${QC}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${CC.material.uniqueId}>\n}\n\n`
    }

    function Gn(CC) {
      switch (CC) {
        case IC.d.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case IC.d.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case IC.d.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function Rn(CC) {
      return `(${CC.x}, ${CC.y})`
    }

    function An(CC) {
      return `(${CC.r}, ${CC.g}, ${CC.b})`
    }

    function xn(CC) {
      return "image/jpeg" === CC || "image/png" === CC
    }

    function Jn(CC, zC, ZC, wC, bC, nC) {
      const fC = CC.getInternalTexture().uniqueId + "_" + CC.invertY,
        qC = CC.mimeType || (0, oC.c)(CC.getInternalTexture()?.url ?? ""),
        FC = xn(qC) ? qC : "image/png",
        WC = "image/jpeg" === FC ? "jpg" : "png";
      bC[fC] = {
        texture: CC,
        mimeType: FC,
        ext: WC
      };
      const NC = CC.coordinatesIndex > 0 ? "st" + CC.coordinatesIndex : "st",
        MC = new QC.Vector2(CC.uScale, CC.vScale),
        gC = new QC.Vector2(CC.uOffset, CC.vOffset),
        SC = CC.wAng,
        pC = Math.sin(SC),
        PC = Math.cos(SC);
      return gC.y = 1 - gC.y - MC.y, gC.x += pC * MC.x, gC.y += (1 - PC) * MC.y, `\n    def Shader "PrimvarReader_${ZC}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${NC}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${ZC}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${zC.uniqueId}/PrimvarReader_${ZC}.outputs:result>\n        float inputs:rotation = ${(SC*(180/Math.PI)).toFixed(nC.precision)}\n        float2 inputs:scale = ${Rn(MC)}\n        float2 inputs:translation = ${Rn(gC)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${CC.uniqueId}_${ZC}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${fC}.${WC}@\n        float2 inputs:st.connect = </Root/Materials/Material_${zC.uniqueId}/Transform2d_${ZC}.outputs:result>\n        ${wC?"float4 inputs:scale = "+function(CC){return`(${CC.r}, ${CC.g}, ${CC.b}, 1.0)`}(wC):""}\n        token inputs:sourceColorSpace = "${CC.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${Gn(CC.wrapU)}"\n        token inputs:wrapT = "${Gn(CC.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${zC.needAlphaBlending()||zC.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function In(CC, zC, ZC) {
      const QC = "\t\t\t",
        wC = [],
        bC = [],
        {
          diffuseMap: nC,
          diffuse: fC,
          alphaCutOff: oC,
          emissiveMap: qC,
          emissive: FC,
          normalMap: WC,
          roughnessMap: NC,
          roughnessChannel: MC,
          roughness: gC,
          metalnessMap: SC,
          metalnessChannel: PC,
          metalness: GC,
          aoMap: RC,
          aoMapChannel: AC,
          aoMapIntensity: xC,
          alphaMap: JC,
          ior: IC,
          clearCoatEnabled: iC,
          clearCoat: vC,
          clearCoatMap: eC,
          clearCoatRoughness: hC,
          clearCoatRoughnessMap: KC
        } = function(CC) {
          const zC = {
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
          return CC instanceof bQ.StandardMaterial ? {
            ...zC,
            diffuseMap: CC.diffuseTexture,
            diffuse: CC.diffuseColor,
            alphaCutOff: CC.alphaCutOff,
            emissiveMap: CC.emissiveTexture,
            emissive: CC.emissiveColor,
            roughness: 1,
            alphaMap: CC.opacityTexture
          } : CC instanceof Jz ? {
            ...zC,
            diffuseMap: CC._albedoTexture,
            diffuse: CC._albedoColor,
            alphaCutOff: CC._alphaCutOff,
            emissiveMap: CC._emissiveTexture,
            emissive: CC._emissiveColor,
            normalMap: CC._bumpTexture,
            roughnessMap: CC._metallicTexture,
            roughnessChannel: CC._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: CC._roughness ?? 1,
            metalnessMap: CC._metallicTexture,
            metalnessChannel: CC._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: CC._metallic ?? 0,
            aoMap: CC._ambientTexture,
            aoMapChannel: CC._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: CC._ambientTextureStrength,
            alphaMap: CC._opacityTexture,
            ior: CC.subSurface.indexOfRefraction,
            clearCoatEnabled: CC.clearCoat.isEnabled,
            clearCoat: CC.clearCoat.intensity,
            clearCoatMap: CC.clearCoat.texture,
            clearCoatRoughness: CC.clearCoat.roughness,
            clearCoatRoughnessMap: CC.clearCoat.useRoughnessFromMainTexture ? CC.clearCoat.texture : CC.clearCoat.textureRoughness
          } : zC
        }(CC);
      return null !== nC ? (wC.push(`${QC}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${CC.uniqueId}/Texture_${nC.uniqueId}_diffuse.outputs:rgb>`), CC.needAlphaBlending() ? wC.push(`${QC}float inputs:opacity.connect = </Root/Materials/Material_${CC.uniqueId}/Texture_${nC.uniqueId}_diffuse.outputs:a>`) : CC.needAlphaTesting() && (wC.push(`${QC}float inputs:opacity.connect = </Root/Materials/Material_${CC.uniqueId}/Texture_${nC.uniqueId}_diffuse.outputs:a>`), wC.push(`${QC}float inputs:opacityThreshold = ${oC}`)), bC.push(Jn(nC, CC, "diffuse", fC, zC, ZC))) : wC.push(`${QC}color3f inputs:diffuseColor = ${An(fC||pC.Color3.White())}`), null !== qC ? (wC.push(`${QC}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${CC.uniqueId}/Texture_${qC.uniqueId}_emissive.outputs:rgb>`), bC.push(Jn(qC, CC, "emissive", FC, zC, ZC))) : FC && FC.toLuminance() > 0 && wC.push(`${QC}color3f inputs:emissiveColor = ${An(FC)}`), null !== WC && (wC.push(`${QC}normal3f inputs:normal.connect = </Root/Materials/Material_${CC.uniqueId}/Texture_${WC.uniqueId}_normal.outputs:rgb>`), bC.push(Jn(WC, CC, "normal", null, zC, ZC))), null !== RC && (wC.push(`${QC}float inputs:occlusion.connect = </Root/Materials/Material_${CC.uniqueId}/Texture_${RC.uniqueId}_occlusion.outputs:${AC}>`), bC.push(Jn(RC, CC, "occlusion", new pC.Color3(xC, xC, xC), zC, ZC))), null !== NC ? (wC.push(`${QC}float inputs:roughness.connect = </Root/Materials/Material_${CC.uniqueId}/Texture_${NC.uniqueId}_roughness.outputs:${MC}>`), bC.push(Jn(NC, CC, "roughness", new pC.Color3(gC, gC, gC), zC, ZC))) : wC.push(`${QC}float inputs:roughness = ${gC}`), null !== SC ? (wC.push(`${QC}float inputs:metallic.connect = </Root/Materials/Material_${CC.uniqueId}/Texture_${SC.uniqueId}_metallic.outputs:${PC}>`), bC.push(Jn(SC, CC, "metallic", new pC.Color3(GC, GC, GC), zC, ZC))) : wC.push(`${QC}float inputs:metallic = ${GC}`), null !== JC ? (wC.push(`${QC}float inputs:opacity.connect = </Root/Materials/Material_${CC.uniqueId}/Texture_${JC.uniqueId}_opacity.outputs:r>`), wC.push(`${QC}float inputs:opacityThreshold = 0.0001`), bC.push(Jn(JC, CC, "opacity", null, zC, ZC))) : wC.push(`${QC}float inputs:opacity = ${CC.alpha}`), iC && (null !== eC ? (wC.push(`${QC}float inputs:clearcoat.connect = </Root/Materials/Material_${CC.uniqueId}/Texture_${eC.uniqueId}_clearcoat.outputs:r>`), bC.push(Jn(eC, CC, "clearcoat", new pC.Color3(vC, vC, vC), zC, ZC))) : wC.push(`${QC}float inputs:clearcoat = ${vC}`), null !== KC ? (wC.push(`${QC}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${CC.uniqueId}/Texture_${KC.uniqueId}_clearcoatRoughness.outputs:g>`), bC.push(Jn(KC, CC, "clearcoatRoughness", new pC.Color3(hC, hC, hC), zC, ZC))) : wC.push(`${QC}float inputs:clearcoatRoughness = ${hC}`)), wC.push(`${QC}float inputs:ior = ${IC}`), `\n\tdef Material "Material_${CC.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${wC.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${CC.uniqueId}/PreviewSurface.outputs:surface>\n\n${bC.join("\n")}\n\n\t}\n`
    }

    function vn(CC) {
      CC.computeWorldMatrix(!0);
      const zC = CC.getWorldMatrix().clone(),
        ZC = CC.Km().useRightHandedSystem;
      let QC = CC.material?._getEffectiveOrientation(CC) ?? CC.sideOrientation,
        nC = !ZC,
        fC = CC.parent;
      for (; fC;) {
        if (lZ(fC, ZC) && null === fC.parent) {
          ZC || (zC.multiplyToRef(fC.getWorldMatrix().invert(), zC), QC = QC === bC.d.ClockWiseSideOrientation ? bC.d.CounterClockWiseSideOrientation : bC.d.ClockWiseSideOrientation), nC = !1;
          break
        }
        fC = fC.parent
      }
      return zC.determinant() < 0 && wC.Tools.Warn(`Mesh ${CC.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: zC,
        windingOrder: QC === bC.d.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: nC
      }
    }
    async function en(CC, zC, ZC) {
      const bC = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...zC
      };
      "undefined" === typeof fflate && await wC.Tools.LoadScriptAsync(bC.fflateUrl);
      const nC = {};
      nC[bC.modelFileName] = null;
      let fC = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      fC += function(CC) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===CC.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${CC.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${CC.planeAnchoringAlignment}"`:""}\n            `
      }(bC);
      const oC = {};
      for (const QC of CC.meshes) {
        if (0 === QC.getTotalVertices()) continue;
        const CC = QC,
          zC = CC.geometry,
          qC = CC.material;
        if (!qC || !zC || ZC && !ZC(CC)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(qC.getClassName())) {
          const ZC = "geometries/Geometry_" + zC.uniqueId + ".usda",
            {
              matrix: QC,
              windingOrder: wC,
              convertToRightHanded: FC
            } = vn(CC);
          if (!(ZC in nC)) {
            const CC = Mn(zC, bC, wC, FC);
            nC[ZC] = gn(CC)
          }
          qC.uniqueId in oC || (oC[qC.uniqueId] = qC), fC += Pn(CC, QC)
        } else wC.Tools.Warn("USDZExportAsync does not support this material type: " + qC.getClassName())
      }
      CC.activeCamera && bC.exportCamera && (fC += function(CC, zC) {
        const ZC = "Camera_" + CC.uniqueId,
          wC = Sn(QC.Matrix.RotationY(Math.PI).multiply(CC.getWorldMatrix()));
        if (CC.mode === IC.d.ORTHOGRAPHIC_CAMERA) return `def Camera "${ZC}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${wC}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${CC.minZ.toPrecision(zC.precision)}, ${CC.maxZ.toPrecision(zC.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(CC.orthoLeft||1)+Math.abs(CC.orthoRight||1))).toPrecision(zC.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(CC.orthoTop||1)+Math.abs(CC.orthoBottom||1))).toPrecision(zC.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const QC = CC.mg().getAspectRatio(CC),
            bC = zC.cameraSensorWidth || 35;
          return `def Camera "${ZC}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${wC}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${CC.minZ.toPrecision(zC.precision)}, ${CC.maxZ.toPrecision(zC.precision)})\n\t\t\tfloat focalLength = ${(bC/(2*Math.tan(.5*CC.fov))).toPrecision(zC.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(bC*QC).toPrecision(zC.precision)}\n\t\t\tfloat verticalAperture = ${(bC/QC).toPrecision(zC.precision)}            \n\t\t}\n\t\n\t`
        }
      }(CC.activeCamera, bC)), fC += "\n            }\n        }";
      const qC = {};
      fC += function(CC, zC, ZC) {
        const QC = [];
        for (const wC in CC) {
          const bC = CC[wC];
          QC.push(In(bC, zC, ZC))
        }
        return `\n    def "Materials"\n{\n${QC.join("")}\n}\n\n`
      }(oC, qC, bC), fC += "\n    }", nC[bC.modelFileName] = fflate.strToU8(fC);
      for (const QC in qC) {
        const {
          texture: CC,
          ext: zC,
          mimeType: ZC
        } = qC[QC], wC = await PZ(CC);
        if (wC && xn(wC.mimeType) && wC.mimeType === ZC) nC[`textures/Texture_${QC}.${zC}`] = new Uint8Array(wC.data);
        else {
          const wC = CC.getSize(),
            bC = await (0, AC.d)(CC),
            fC = await iC.DumpTools.DumpDataAsync(wC.width, wC.height, bC, ZC, void 0, !1, !0);
          nC[`textures/Texture_${QC}.${zC}`] = new Uint8Array(fC).slice()
        }
      }
      let FC = 0;
      for (const QC in nC) {
        const CC = nC[QC];
        if (!CC) continue;
        FC += 34 + QC.length;
        const zC = 63 & FC;
        if (4 !== zC) {
          const ZC = new Uint8Array(64 - zC);
          nC[QC] = [CC, {
            extra: {
              12345: ZC
            }
          }]
        }
        FC = CC.length
      }
      return fflate.zipSync(nC, {
        level: 0
      })
    }
    var hn = ZC(40941);
    class Kn {
      static Export(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        if (!CC || 0 === CC.bones.length) throw new Error("Invalid or empty skeleton provided");
        let QC = zC;
        zC && 0 !== zC.length || (QC = CC.animations.map((CC => CC.name)));
        let wC = null;
        for (const qC of QC) {
          const zC = CC.getAnimationRange(qC);
          zC && (wC = wC ? new hn.e("animation-range", Math.min(wC.from, zC.from), Math.max(wC.to, zC.to)) : zC)
        }
        if (!wC && (CC.animations.length > 0 && (wC = CC.getAnimationRange(CC.animations[0].name)), !wC)) throw new Error("No animation range found in skeleton");
        const bC = ZC || 1 / (CC.animations[0]?.framePerSecond || 30),
          nC = this._BuildBoneHierarchy(CC, QC);
        let fC = 0;
        for (const qC of nC) qC.positionKeys.length > 0 && (fC = Math.max(fC, qC.positionKeys.length)), qC.rotationKeys.length > 0 && (fC = Math.max(fC, qC.rotationKeys.length));
        0 === fC && (fC = Math.floor((wC.to - wC.from) / bC) + 1);
        let oC = "";
        return oC += "HIERARCHY\n", oC += this._ExportHierarchy(nC, 0), oC += "MOTION\n", oC += `Frames: ${fC}\n`, oC += `Frame Time: ${bC.toFixed(6)}\n`, oC += this._ExportMotionData(nC, fC, 0, QC), oC
      }
      static _BuildBoneHierarchy(CC, zC) {
        const ZC = new Map,
          QC = [];
        for (const wC of CC.bones) {
          const CC = {
            bone: wC,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          ZC.set(wC, CC)
        }
        for (const wC of CC.bones) {
          const CC = ZC.get(wC);
          if (wC.animations.length > 0)
            for (const ZC of wC.animations) zC.includes(ZC.name) && ("position" === ZC.targetProperty ? (CC.hasPositionChannels = !0, CC.positionKeys.push(...ZC.getKeys())) : "rotationQuaternion" === ZC.targetProperty && (CC.hasRotationChannels = !0, CC.rotationKeys.push(...ZC.getKeys())));
          if (wC.getParent()) {
            const zC = ZC.get(wC.getParent());
            zC && zC.children.push(CC)
          } else QC.push(CC)
        }
        return QC
      }
      static _ExportHierarchy(CC, zC) {
        let ZC = "";
        const QC = "    ".repeat(zC);
        for (const wC of CC) {
          const CC = wC.bone;
          if (this._IsEndSite(wC)) {
            ZC += `${QC}End Site\n`, ZC += `${QC}{\n`;
            const zC = this._GetBoneOffset(CC);
            ZC += `${QC}    OFFSET ${zC.x.toFixed(6)} ${zC.y.toFixed(6)} ${zC.z.toFixed(6)}\n`, ZC += `${QC}}\n`
          } else {
            ZC += `${0===zC?"ROOT":`${QC}JOINT`} ${CC.name}\n`, ZC += `${QC}{\n`;
            const bC = this._GetBoneOffset(CC);
            ZC += `${QC}    OFFSET ${bC.x.toFixed(6)} ${bC.y.toFixed(6)} ${bC.z.toFixed(6)}\n`;
            const nC = [];
            wC.hasPositionChannels && nC.push("Xposition", "Yposition", "Zposition"), wC.hasRotationChannels && nC.push("Zrotation", "Xrotation", "Yrotation"), nC.length > 0 && (ZC += `${QC}    CHANNELS ${nC.length} ${nC.join(" ")}\n`), wC.children.length > 0 && (ZC += this._ExportHierarchy(wC.children, zC + 1)), ZC += `${QC}}\n`
          }
        }
        return ZC
      }
      static _IsEndSite(CC) {
        return 0 === CC.children.length
      }
      static _GetBoneOffset(CC) {
        try {
          if (!CC.getParent()) return CC.getRestMatrix().getTranslation();
          return CC.getLocalMatrix().getTranslation()
        } catch (zC) {
          return QC.Eg.Zero()
        }
      }
      static _ExportMotionData(CC, zC, ZC, QC) {
        let wC = "";
        for (let bC = 0; bC < zC; bC++) {
          const zC = [];
          this._CollectFrameValues(CC, bC + ZC, zC, QC), wC += zC.map((CC => CC.toFixed(6))).join(" ") + "\n"
        }
        return wC
      }
      static _CollectFrameValues(CC, zC, ZC, QC) {
        for (const wC of CC)
          if (!this._IsEndSite(wC)) {
            if (wC.hasPositionChannels) {
              const CC = this._GetPositionAtFrameIndex(wC.positionKeys, zC);
              ZC.push(CC.x, CC.y, CC.z)
            }
            if (wC.hasRotationChannels) {
              const CC = this._GetRotationAtFrameIndex(wC.rotationKeys, zC),
                QC = this._QuaternionToEuler(CC);
              ZC.push(QC.z, QC.x, QC.y)
            }
            wC.children.length > 0 && this._CollectFrameValues(wC.children, zC, ZC, QC)
          }
      }
      static _GetPositionAtFrameIndex(CC, zC) {
        if (0 === CC.length) return QC.Eg.Zero();
        return CC[Math.max(0, Math.min(zC, CC.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(CC, zC) {
        if (0 === CC.length) return QC.Quaternion.Identity();
        return CC[Math.max(0, Math.min(zC, CC.length - 1))].value.clone()
      }
      static _QuaternionToEuler(CC) {
        const zC = new QC.Matrix;
        CC.toRotationMatrix(zC);
        const ZC = zC.m;
        let bC, nC, fC;
        const oC = Math.sqrt(ZC[0] * ZC[0] + ZC[1] * ZC[1]);
        return oC > HZ.e ? (bC = Math.atan2(ZC[6], ZC[10]), nC = Math.atan2(-ZC[2], oC), fC = Math.atan2(ZC[1], ZC[0])) : (bC = Math.atan2(-ZC[9], ZC[5]), nC = Math.atan2(-ZC[2], oC), fC = 0), new QC.Eg(wC.Tools.ToDegrees(bC), wC.Tools.ToDegrees(nC), wC.Tools.ToDegrees(fC))
      }
    }

    function Yn(CC) {
      return "string" === typeof CC?.name
    }
    const dn = Symbol("__xml:meta$__"),
      mn = Symbol("__xml:name$__");

    function Hn(CC, zC) {
      Object.prototype.hasOwnProperty.call(CC.metadata, dn) || (CC.metadata[dn] = []), CC.metadata[dn].push(zC)
    }

    function En(CC) {
      return (zC, ZC) => {
        zC[mn] = CC
      }
    }

    function Xn() {
      return (CC, zC) => Hn(zC, {
        kind: "none",
        prop: String(zC.name),
        ignore: !0
      })
    }

    function cn(CC) {
      return (zC, ZC) => Hn(ZC, {
        kind: "attr",
        prop: String(ZC.name),
        ...CC
      })
    }

    function un(CC) {
      return (zC, ZC) => Hn(ZC, {
        kind: "elem",
        prop: String(ZC.name),
        ...CC
      })
    }

    function rn(CC) {
      const zC = "function" === typeof CC ? CC : CC?.constructor,
        ZC = zC?.[Symbol.metadata];
      if (!ZC) return [];
      const QC = [];
      let wC = ZC;
      for (; wC;) Object.prototype.hasOwnProperty.call(wC, dn) && QC.push(...wC[dn]), wC = Object.getPrototypeOf(wC);
      return QC
    }

    function sn(CC) {
      const zC = CC?.constructor?.[mn];
      return zC || void 0
    }

    function Tn(CC) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(CC)
    }

    function an(CC) {
      if (Yn(CC)) return CC;
      const zC = (CC ?? "").trim();
      if (!zC) return {
        name: ""
      };
      const ZC = zC.indexOf(":");
      if (-1 === ZC) return {
        name: zC
      };
      if (-1 !== zC.indexOf(":", ZC + 1)) return {
        name: zC
      };
      const QC = zC.slice(0, ZC),
        wC = zC.slice(ZC + 1);
      return Tn(QC) && Tn(wC) ? {
        ns: QC,
        name: wC
      } : {
        name: zC
      }
    }

    function tn(CC, zC) {
      return zC ? `${zC}:${CC}` : CC
    }
    const Dn = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      jn = Object.freeze({
        number: Dn
      });

    function yn(CC) {
      const zC = CC?.eps ?? Dn.eps;
      return {
        eps: zC,
        maxDecimalsCap: CC?.maxDecimalsCap ?? Dn.maxDecimalsCap,
        trimTrailingZeros: CC?.trimTrailingZeros ?? Dn.trimTrailingZeros,
        fixedDecimals: CC?.fixedDecimals,
        allowScientific: CC?.allowScientific ?? Dn.allowScientific,
        snapNearZero: CC?.snapNearZero ?? Dn.snapNearZero,
        zeroThreshold: CC?.zeroThreshold ?? zC,
        perAttributeEps: CC?.perAttributeEps
      }
    }

    function Ln(CC) {
      return {
        number: yn(CC?.number)
      }
    }
    class Un {
      constructor(CC) {
        if (this.o = CC, this._o = CC.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(CC) {
        if (!Number.isFinite(CC)) throw new Error(`Cannot format non-finite number: ${CC}`);
        const zC = this._o,
          ZC = this._clampInt(zC.maxDecimalsCap ?? 15, 0, 20),
          QC = zC.trimTrailingZeros ?? !0,
          wC = zC.snapNearZero ?? !0,
          bC = zC.zeroThreshold ?? zC.eps,
          nC = 1 / zC.eps;
        let fC, oC = Math.round(CC * nC) / nC;
        if (Object.is(oC, -0) && (oC = 0), wC && Math.abs(oC) <= bC && (oC = 0), fC = void 0 !== zC.fixedDecimals ? this._clampInt(zC.fixedDecimals, 0, ZC) : this._clampInt(Math.ceil(-Math.log10(zC.eps)), 0, ZC), zC.allowScientific, 0 === fC) return String(Math.trunc(oC));
        let qC = oC.toFixed(fC);
        if (QC && void 0 === zC.fixedDecimals && (qC = qC.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(qC)) throw new Error(`Scientific notation not allowed in XML output: ${qC}`);
        return qC
      }
      _clampInt(CC, zC, ZC) {
        return Number.isFinite(CC) ? (CC = Math.trunc(CC), Math.max(zC, Math.min(ZC, CC))) : zC
      }
    }

    function Bn(CC) {
      return CC instanceof Date
    }

    function On(CC) {
      return "string" === typeof CC
    }

    function kn(CC) {
      return "string" === typeof CC || "number" === typeof CC || "boolean" === typeof CC || "bigint" === typeof CC || Bn(CC)
    }

    function Vn(CC) {
      return "number" === typeof CC || "boolean" === typeof CC || "bigint" === typeof CC || Bn(CC)
    }
    class Cf {
      constructor(CC, zC) {
        this._ns = new Map, this._prefixCount = 0, this._builder = CC, this._format = Ln(zC), this._nFmt = new Un(this._format)
      }
      withNamespace() {
        for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
        for (const QC of zC) this._assignNamespace(QC);
        return this
      }
      serialize(CC, zC) {
        if (!(zC = zC ?? sn(CC))) throw new Error("can not find name for given object");
        const ZC = an(zC);
        ZC.ns && this._assignNamespace(ZC.ns, "xmlns"), this._gatherNamespaces(CC, new WeakSet);
        const QC = this._builder.ele(null, ZC.name);
        for (const [wC, bC] of Array.from(this._ns.entries())) QC.att("xmlns", bC, wC);
        this._writeObjectContent(QC, CC, (new WeakSet).add(CC)), this._builder.end()
      }
      _writeObject(CC, zC, ZC) {
        if (ZC.has(zC)) return;
        if (ZC.add(zC), Array.isArray(zC)) {
          for (const QC of zC) Vn(QC) || (On(QC) ? this._builder.text(QC) : this._writeObject(CC, QC, ZC));
          return
        }
        const QC = sn(zC);
        if (!QC) return;
        const wC = an(QC),
          bC = this._getPrefix(wC),
          nC = tn(wC.name, bC);
        CC.ele(null, nC), this._writeObjectContent(CC, zC, ZC), this._builder.end()
      }
      _getPrefix(CC) {
        if (CC.ns) {
          const zC = this._ns.get(CC.ns.toLowerCase());
          if ("xmlns" !== zC) return zC
        }
      }
      _writeObjectContent(CC, zC, ZC) {
        const QC = rn(zC) ?? [],
          wC = new Map;
        for (const nC of QC) {
          const CC = wC.get(nC.prop) ?? [];
          CC.push(nC), wC.set(nC.prop, CC)
        }
        const bC = Object.keys(zC).sort(((CC, zC) => {
          const ZC = (wC.get(CC) ?? []).some((CC => "attr" === CC.kind));
          return ZC === (wC.get(zC) ?? []).some((CC => "attr" === CC.kind)) ? 0 : ZC ? -1 : 1
        }));
        for (const nC of bC) {
          const QC = zC[nC];
          if (null === QC || void 0 === QC) continue;
          const bC = wC.get(nC);
          if (bC) {
            if (bC.some((CC => !0 === CC.ignore || "none" === CC.kind))) continue;
            for (const zC of bC) {
              const ZC = zC.name ?? zC.prop.toLowerCase();
              if (ZC) switch (zC.kind) {
                case "attr": {
                  let wC = null;
                  if ("number" === typeof QC && this._nFmt && (wC = this._nFmt.toString(QC)), zC.formatter) {
                    wC = new zC.formatter(this._format).toString(QC)
                  }
                  if (wC = wC ?? QC.toString(), wC) {
                    const zC = an(ZC),
                      QC = this._getPrefix(zC),
                      bC = tn(zC.name, QC);
                    CC.att(null, bC, wC)
                  }
                  break
                }
              }
            }
          } else Vn(QC) || (On(QC) ? this._builder.text(QC) : this._writeObject(CC, QC, ZC))
        }
      }
      _gatherNamespaces(CC, zC) {
        if (zC.has(CC)) return;
        if (zC.add(CC), Array.isArray(CC)) {
          for (const ZC of CC) kn(ZC) || this._gatherNamespaces(ZC, zC);
          return
        }
        const ZC = sn(CC);
        ZC && this._assignNamespace(ZC);
        const QC = rn(CC) ?? [],
          wC = new Map;
        for (const nC of QC) {
          const CC = wC.get(nC.prop) ?? [];
          CC.push(nC), wC.set(nC.prop, CC)
        }
        const bC = [];
        for (const nC of Object.keys(CC)) {
          const zC = CC[nC];
          if (null === zC || void 0 === zC) continue;
          const ZC = wC.get(nC);
          if (ZC) {
            if (ZC.some((CC => !0 === CC.ignore || "none" === CC.kind))) continue;
            for (const CC of ZC) CC.name && this._assignNamespace(CC.name)
          }
          bC.push(zC)
        }
        for (const nC of bC) kn(nC) || this._gatherNamespaces(nC, zC)
      }
      _assignNamespace(CC, zC) {
        const ZC = an(CC);
        if (ZC?.ns) {
          const CC = ZC.ns.toLowerCase();
          this._ns.get(CC) || this._ns.set(CC, zC ?? this._buildNsPrefix(CC))
        } else if ("xmlns" === zC) {
          const CC = ZC.name.toLowerCase();
          this._ns.get(CC) || this._ns.set(CC, zC ?? this._buildNsPrefix(CC))
        }
      }
      _buildNsPrefix(CC) {
        let zC, ZC = !1;
        do {
          zC = "ns" + this._prefixCount++;
          for (const CC of Array.from(this._ns.values()))
            if (CC === zC) {
              ZC = !0;
              break
            }
        } while (ZC);
        return zC
      }
    }
    class zf {}
    var Zf;
    zf.OpenTag = "<", zf.CloseTag = ">", zf.Slash = "/", zf.Question = "?", zf.Quote = '"', zf.Equal = "=", zf.Space = " ", zf.Semicolon = ":", zf.Dec = "<?xml", zf.Xml = "xml", zf.Xmlns = "xmlns", zf.Xsi = "xsi", zf.VersionKeyword = "version", zf.EncodingKeyword = "encoding", zf.StandaloneKeyword = "standalone",
      function(CC) {
        CC[CC.Declaration = 0] = "Declaration", CC[CC.Tag = 1] = "Tag", CC[CC.Attribute = 2] = "Attribute", CC[CC.Text = 3] = "Text"
      }(Zf || (Zf = {}));
    class Qf {
      constructor(CC) {
        this._ctxStack = [], this._d = 0, this._w = CC
      }
      dec(CC, zC, ZC) {
        return this._w.write(zf.Dec), this._writeAttStr(zf.VersionKeyword, CC), zC && this._writeAttStr(zf.EncodingKeyword, zC), void 0 !== ZC && this._writeAttStr(zf.StandaloneKeyword, ZC ? "yes" : "no"), this._w.write(zf.Question, zf.CloseTag), this
      }
      att(CC, zC, ZC) {
        const QC = this._peekContext();
        if (!QC) throw new Error("att() without open element");
        if (QC.closed) throw new Error(`att() after start tag closed for <${QC.name}>`);
        if (this._isXmlnsDecl(CC, zC)) {
          if (zC === zf.Xmlns) QC.defaultNs = ZC, this._registerNamespace(QC, "", ZC), this._writeAttStr(zf.Xmlns, ZC);
          else if (CC) this._registerNamespace(QC, zC, ZC), this._writeAttStr(`${CC}:${zC}`, ZC);
          else {
            const CC = zC.slice(6);
            this._registerNamespace(QC, CC, ZC), this._writeAttStr(zC, ZC)
          }
          return QC.lastToken = Zf.Attribute, this
        }
        let wC = zC;
        if (CC) {
          wC = `${this._ensurePrefixDeclared(QC,CC)}:${zC}`
        }
        return QC.lastToken = Zf.Attribute, this._writeAttStr(wC, ZC), this
      }
      ele(CC, zC) {
        const ZC = this._peekContext();
        ZC && this._closeOpenTagIfNeeded(ZC);
        let QC = zC;
        if (CC) {
          QC = `${this._lookupPrefix(CC)??CC}:${zC}`
        }
        return this._pushContext(QC, ++this._d), this._w.write(zf.OpenTag, QC), this
      }
      text(CC) {
        const zC = this._peekContext();
        if (!zC) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(zC), zC.lastToken = Zf.Text, this._w.write(this._escText(CC)), this
      }
      end() {
        const CC = this._popContext();
        return CC && (this._d--, CC.closed ? this._w.write(zf.OpenTag, zf.Slash, CC.name, zf.CloseTag) : this._w.write(zf.Slash, zf.CloseTag)), this
      }
      _pushContext(CC, zC) {
        const ZC = new Qf.Context(CC, zC);
        return this._ctxStack.push(ZC), ZC
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
      _writeAttStr(CC, zC) {
        this._w.write(zf.Space, CC, zf.Equal, zf.Quote, this._escAttr(zC), zf.Quote)
      }
      _lookupPrefix(CC) {
        let zC = this._ctxStack.length - 1;
        if (zC >= 0)
          do {
            const ZC = this._ctxStack[zC--],
              QC = ZC.ns2prefix?.get(CC);
            if (QC) return QC
          } while (zC >= 0)
      }
      _escText(CC) {
        return CC.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(CC) {
        return this._escText(CC).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(CC, zC) {
        if (CC) return CC === zf.Xmlns;
        const ZC = zC.length,
          QC = zf.Xmlns.length;
        return ZC >= QC && (zC.startsWith(zf.Xmlns) && (zC.length == QC || zC[QC] == zf.Semicolon))
      }
      _registerNamespace(CC, zC, ZC) {
        if (zC === zf.Xml || zC === zf.Xmlns) throw new Error(`reserved prefix '${zC}'`);
        const QC = CC.prefix2ns.get(zC);
        if (QC && QC !== ZC) throw new Error(`prefix '${zC}' already bound to a different namespace`);
        CC.ns2prefix.get(ZC) || CC.ns2prefix.set(ZC, zC), CC.prefix2ns.set(zC, ZC)
      }
      _allocPrefix(CC) {
        let zC = 1;
        for (;;) {
          const ZC = "ns" + zC++;
          if (!CC.prefix2ns.has(ZC)) return ZC
        }
      }
      _ensurePrefixDeclared(CC, zC) {
        const ZC = this._lookupPrefix(zC);
        if (ZC) return ZC;
        if (CC.closed) throw new Error(`can not declare namespace after start tag closed for <${CC.name}>`);
        const QC = this._allocPrefix(CC);
        return this._writeAttStr(`${zf.Xmlns}:${QC}`, zC), this._registerNamespace(CC, QC, zC), QC
      }
      _closeOpenTagIfNeeded(CC) {
        CC.closed || (this._w.write(zf.CloseTag), CC.closed = !0)
      }
    }
    Qf.Context = class {
      constructor(CC, zC) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = CC, this.depth = zC
      }
    };
    class wf {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
        if (0 === zC.length) return this;
        const QC = zC.join("");
        return this._chunks.push(QC), this.count += QC.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class bf {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = CC, this._opts = zC, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
        if (0 === zC.length) return this;
        const QC = zC.join("");
        if (0 === QC.length) return this;
        this._pending += QC, this._pendingChars += QC.length;
        const wC = this._opts.flushChars ?? 65536;
        return this._pendingChars >= wC && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const CC = this._encoder.encode(this._pending);
        return this._sink.push(CC), this.count += CC.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const nf = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      ff = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var of, qf;
    ! function(CC) {
      CC.micron = "micron", CC.millimeter = "millimeter", CC.centimeter = "centimeter", CC.inch = "inch", CC.foot = "foot", CC.meter = "meter"
    }(of || (of = {})),
    function(CC) {
      CC.model = "model", CC.solidsupport = "solidsupport", CC.support = "support", CC.surface = "surface", CC.other = "other"
    }(qf || (qf = {}));
    const Ff = "http://schemas.openxmlformats.org/package/2006/content-types",
      Wf = "http://schemas.openxmlformats.org/package/2006/relationships";
    var Nf;
    ! function(CC) {
      CC.Relationships = "application/vnd.openxmlformats-package.relationships+xml", CC.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", CC.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", CC.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", CC.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", CC.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", CC.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", CC.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", CC.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", CC.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", CC.Png = "image/png", CC.Jpeg = "image/jpeg", CC.Tiff = "image/tiff", CC.Xml = "application/xml"
    }(Nf || (Nf = {}));
    const Mf = "_rels/",
      gf = "3D/",
      Sf = "3dmodel.model",
      pf = ".rels",
      Pf = "[Content_Types].xml";
    class Gf {
      static IsKnown(CC) {
        return Gf.Known.has(CC)
      }
      static IsThreeDimModel(CC) {
        return CC === Gf.ThreeDimModel
      }
    }
    Gf.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", Gf.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", Gf.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", Gf.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", Gf.Known = new Set([Gf.ThreeDimModel, Gf.Thumbnail, Gf.PrintTicket, Gf.MustPreserve]);
    let Rf = (() => {
        let CC, zC, ZC = [En({
            ns: Ff,
            name: "Types"
          })],
          QC = [];
        zC = class {
          constructor() {
            this.items = []
          }
        };
        return (0, vC.o)(zC, "ThreeMfContentTypes"), (() => {
          const wC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vC.j)(null, CC = {
            value: zC
          }, ZC, {
            kind: "class",
            name: zC.name,
            metadata: wC
          }, null, QC), zC = CC.value, wC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wC
          }), (0, vC.n)(zC, QC)
        })(), zC
      })(),
      Af = (() => {
        let CC, zC, ZC, QC, wC = [En({
            ns: Ff,
            name: "Default"
          })],
          bC = [],
          nC = [],
          fC = [],
          oC = [],
          qC = [];
        zC = class {
          constructor(CC, zC) {
            this.ext = (0, vC.n)(this, nC, void 0), this.ct = ((0, vC.n)(this, fC), (0, vC.n)(this, oC, void 0)), (0, vC.n)(this, qC), this.ext = CC, this.ct = zC
          }
        };
        return (0, vC.o)(zC, "ThreeMfContentType"), (() => {
          const FC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZC = [cn({
            name: {
              ns: Ff,
              name: "Extension"
            }
          })], QC = [cn({
            name: {
              ns: Ff,
              name: "ContentType"
            }
          })], (0, vC.j)(null, null, ZC, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: CC => "ext" in CC,
              get: CC => CC.ext,
              set: (CC, zC) => {
                CC.ext = zC
              }
            },
            metadata: FC
          }, nC, fC), (0, vC.j)(null, null, QC, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: CC => "ct" in CC,
              get: CC => CC.ct,
              set: (CC, zC) => {
                CC.ct = zC
              }
            },
            metadata: FC
          }, oC, qC), (0, vC.j)(null, CC = {
            value: zC
          }, wC, {
            kind: "class",
            name: zC.name,
            metadata: FC
          }, null, bC), zC = CC.value, FC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: FC
          }), (0, vC.n)(zC, bC)
        })(), zC
      })(),
      xf = (() => {
        let CC, zC, ZC = [En({
            ns: Wf,
            name: "Relationships"
          })],
          QC = [];
        zC = class {
          constructor() {
            this.items = []
          }
        };
        return (0, vC.o)(zC, "ThreeMfRelationships"), (() => {
          const wC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vC.j)(null, CC = {
            value: zC
          }, ZC, {
            kind: "class",
            name: zC.name,
            metadata: wC
          }, null, QC), zC = CC.value, wC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wC
          }), (0, vC.n)(zC, QC)
        })(), zC
      })(),
      Jf = (() => {
        let CC, zC, ZC, QC, wC, bC = [En({
            ns: Wf,
            name: "Relationship"
          })],
          nC = [],
          fC = [],
          oC = [],
          qC = [],
          FC = [],
          WC = [],
          NC = [];
        zC = class {
          constructor(CC, zC, ZC) {
            this.id = (0, vC.n)(this, fC, void 0), this.type = ((0, vC.n)(this, oC), (0, vC.n)(this, qC, void 0)), this.target = ((0, vC.n)(this, FC), (0, vC.n)(this, WC, void 0)), (0, vC.n)(this, NC), this.id = CC, this.type = zC, this.target = ZC
          }
        };
        return (0, vC.o)(zC, "ThreeMfRelationship"), (() => {
          const MC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZC = [cn({
            name: "Id"
          })], QC = [cn({
            name: "Type"
          })], wC = [cn({
            name: "Target"
          })], (0, vC.j)(null, null, ZC, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: CC => "id" in CC,
              get: CC => CC.id,
              set: (CC, zC) => {
                CC.id = zC
              }
            },
            metadata: MC
          }, fC, oC), (0, vC.j)(null, null, QC, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: CC => "type" in CC,
              get: CC => CC.type,
              set: (CC, zC) => {
                CC.type = zC
              }
            },
            metadata: MC
          }, qC, FC), (0, vC.j)(null, null, wC, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: CC => "target" in CC,
              get: CC => CC.target,
              set: (CC, zC) => {
                CC.target = zC
              }
            },
            metadata: MC
          }, WC, NC), (0, vC.j)(null, CC = {
            value: zC
          }, bC, {
            kind: "class",
            name: zC.name,
            metadata: MC
          }, null, nC), zC = CC.value, MC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MC
          }), (0, vC.n)(zC, nC)
        })(), zC
      })();
    class If {
      constructor(CC, zC, ZC) {
        this.contentTypes = CC, this.relationships = zC, this.model = ZC
      }
    }
    class vf {
      static Zero() {
        return new vf([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(CC) {
        this.values = CC
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class ef {
      constructor(CC) {
        this.o = CC, this._f = new Un(CC)
      }
      toString(CC) {
        return CC.values.map((CC => this._f.toString(CC))).join(" ")
      }
    }
    let hf = (() => {
        let CC, zC, ZC, QC, wC, bC = [En({
            ns: nf,
            name: "model"
          })],
          nC = [],
          fC = [],
          oC = [],
          qC = [],
          FC = [],
          WC = [],
          NC = [];
        zC = class {
          constructor() {
            this.unit = (0, vC.n)(this, fC, of.millimeter), this.requiredextensions = ((0, vC.n)(this, oC), (0, vC.n)(this, qC, void 0)), this.recommendedextensions = ((0, vC.n)(this, FC), (0, vC.n)(this, WC, void 0)), this.metadata = (0, vC.n)(this, NC)
          }
        };
        return (0, vC.o)(zC, "ThreeMfModel"), (() => {
          const MC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZC = [cn({
            name: "unit"
          })], QC = [cn({
            name: "requiredextensions"
          })], wC = [cn({
            name: "recommendedextensions"
          })], (0, vC.j)(null, null, ZC, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: CC => "unit" in CC,
              get: CC => CC.unit,
              set: (CC, zC) => {
                CC.unit = zC
              }
            },
            metadata: MC
          }, fC, oC), (0, vC.j)(null, null, QC, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: CC => "requiredextensions" in CC,
              get: CC => CC.requiredextensions,
              set: (CC, zC) => {
                CC.requiredextensions = zC
              }
            },
            metadata: MC
          }, qC, FC), (0, vC.j)(null, null, wC, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: CC => "recommendedextensions" in CC,
              get: CC => CC.recommendedextensions,
              set: (CC, zC) => {
                CC.recommendedextensions = zC
              }
            },
            metadata: MC
          }, WC, NC), (0, vC.j)(null, CC = {
            value: zC
          }, bC, {
            kind: "class",
            name: zC.name,
            metadata: MC
          }, null, nC), zC = CC.value, MC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MC
          })
        })(), zC.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, vC.n)(zC, nC), zC
      })(),
      Kf = (() => {
        let CC, zC, ZC, QC, wC, bC = [En({
            ns: nf,
            name: "meta"
          })],
          nC = [],
          fC = [],
          oC = [],
          qC = [],
          FC = [],
          WC = [],
          NC = [];
        zC = class {
          constructor(CC, zC, ZC, QC) {
            this.name = (0, vC.n)(this, fC, void 0), this.preserve = ((0, vC.n)(this, oC), (0, vC.n)(this, qC, void 0)), this.type = ((0, vC.n)(this, FC), (0, vC.n)(this, WC, void 0)), this.value = (0, vC.n)(this, NC), this.name = CC, this.value = zC, this.preserve = ZC, this.type = QC
          }
        };
        return (0, vC.o)(zC, "ThreeMfMeta"), (() => {
          const MC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZC = [cn({
            name: "name"
          })], QC = [cn({
            name: "preserve"
          })], wC = [cn({
            name: "type"
          })], (0, vC.j)(null, null, ZC, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: CC => "name" in CC,
              get: CC => CC.name,
              set: (CC, zC) => {
                CC.name = zC
              }
            },
            metadata: MC
          }, fC, oC), (0, vC.j)(null, null, QC, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: CC => "preserve" in CC,
              get: CC => CC.preserve,
              set: (CC, zC) => {
                CC.preserve = zC
              }
            },
            metadata: MC
          }, qC, FC), (0, vC.j)(null, null, wC, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: CC => "type" in CC,
              get: CC => CC.type,
              set: (CC, zC) => {
                CC.type = zC
              }
            },
            metadata: MC
          }, WC, NC), (0, vC.j)(null, CC = {
            value: zC
          }, bC, {
            kind: "class",
            name: zC.name,
            metadata: MC
          }, null, nC), zC = CC.value, MC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MC
          }), (0, vC.n)(zC, nC)
        })(), zC
      })(),
      Yf = (() => {
        let CC, zC, ZC = [En({
            ns: nf,
            name: "metadatagroup"
          })],
          QC = [];
        zC = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, vC.o)(zC, "ThreeMfMetadataGroup"), (() => {
          const wC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vC.j)(null, CC = {
            value: zC
          }, ZC, {
            kind: "class",
            name: zC.name,
            metadata: wC
          }, null, QC), zC = CC.value, wC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wC
          }), (0, vC.n)(zC, QC)
        })(), zC
      })(),
      df = (() => {
        let CC, zC, ZC = [En({
            ns: nf,
            name: "resources"
          })],
          QC = [];
        zC = class {
          constructor() {
            this.object = []
          }
        };
        return (0, vC.o)(zC, "ThreeMfResources"), (() => {
          const wC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vC.j)(null, CC = {
            value: zC
          }, ZC, {
            kind: "class",
            name: zC.name,
            metadata: wC
          }, null, QC), zC = CC.value, wC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wC
          }), (0, vC.n)(zC, QC)
        })(), zC
      })(),
      mf = (() => {
        let CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC = [En({
            ns: nf,
            name: "object"
          })],
          FC = [],
          WC = [],
          NC = [],
          MC = [],
          gC = [],
          SC = [],
          pC = [],
          PC = [],
          GC = [],
          RC = [],
          AC = [],
          xC = [],
          JC = [],
          IC = [],
          iC = [];
        zC = class {
          constructor(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qf.model;
            this.id = (0, vC.n)(this, WC, void 0), this.type = ((0, vC.n)(this, NC), (0, vC.n)(this, MC, void 0)), this.thumbnail = ((0, vC.n)(this, gC), (0, vC.n)(this, SC, void 0)), this.partnumber = ((0, vC.n)(this, pC), (0, vC.n)(this, PC, void 0)), this.name = ((0, vC.n)(this, GC), (0, vC.n)(this, RC, void 0)), this.pid = ((0, vC.n)(this, AC), (0, vC.n)(this, xC, void 0)), this.pindex = ((0, vC.n)(this, JC), (0, vC.n)(this, IC, void 0)), this.metadatagroup = (0, vC.n)(this, iC), this.id = CC, this.type = zC
          }
        };
        return (0, vC.o)(zC, "ThreeMfObject"), (() => {
          const eC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZC = [cn({
            name: "id"
          })], QC = [cn({
            name: "type"
          })], wC = [cn({
            name: "thumbnail"
          })], bC = [cn({
            name: "partnumber"
          })], nC = [cn({
            name: "name"
          })], fC = [cn({
            name: "pid"
          })], oC = [cn({
            name: "pindex"
          })], (0, vC.j)(null, null, ZC, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: CC => "id" in CC,
              get: CC => CC.id,
              set: (CC, zC) => {
                CC.id = zC
              }
            },
            metadata: eC
          }, WC, NC), (0, vC.j)(null, null, QC, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: CC => "type" in CC,
              get: CC => CC.type,
              set: (CC, zC) => {
                CC.type = zC
              }
            },
            metadata: eC
          }, MC, gC), (0, vC.j)(null, null, wC, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: CC => "thumbnail" in CC,
              get: CC => CC.thumbnail,
              set: (CC, zC) => {
                CC.thumbnail = zC
              }
            },
            metadata: eC
          }, SC, pC), (0, vC.j)(null, null, bC, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: CC => "partnumber" in CC,
              get: CC => CC.partnumber,
              set: (CC, zC) => {
                CC.partnumber = zC
              }
            },
            metadata: eC
          }, PC, GC), (0, vC.j)(null, null, nC, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: CC => "name" in CC,
              get: CC => CC.name,
              set: (CC, zC) => {
                CC.name = zC
              }
            },
            metadata: eC
          }, RC, AC), (0, vC.j)(null, null, fC, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: CC => "pid" in CC,
              get: CC => CC.pid,
              set: (CC, zC) => {
                CC.pid = zC
              }
            },
            metadata: eC
          }, xC, JC), (0, vC.j)(null, null, oC, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: CC => "pindex" in CC,
              get: CC => CC.pindex,
              set: (CC, zC) => {
                CC.pindex = zC
              }
            },
            metadata: eC
          }, IC, iC), (0, vC.j)(null, CC = {
            value: zC
          }, qC, {
            kind: "class",
            name: zC.name,
            metadata: eC
          }, null, FC), zC = CC.value, eC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eC
          }), (0, vC.n)(zC, FC)
        })(), zC
      })(),
      Hf = (() => {
        let CC, zC, ZC = [En({
            ns: nf,
            name: "mesh"
          })],
          QC = [];
        zC = class {
          constructor(CC, zC) {
            this.vertices = CC ?? new Ef, this.triangles = zC ?? new Xf
          }
        };
        return (0, vC.o)(zC, "ThreeMfMesh"), (() => {
          const wC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vC.j)(null, CC = {
            value: zC
          }, ZC, {
            kind: "class",
            name: zC.name,
            metadata: wC
          }, null, QC), zC = CC.value, wC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wC
          }), (0, vC.n)(zC, QC)
        })(), zC
      })(),
      Ef = (() => {
        let CC, zC, ZC = [En({
            ns: nf,
            name: "vertices"
          })],
          QC = [];
        zC = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, vC.o)(zC, "ThreeMfVertices"), (() => {
          const wC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vC.j)(null, CC = {
            value: zC
          }, ZC, {
            kind: "class",
            name: zC.name,
            metadata: wC
          }, null, QC), zC = CC.value, wC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wC
          }), (0, vC.n)(zC, QC)
        })(), zC
      })(),
      lf = (() => {
        let CC, zC, ZC, QC, wC, bC = [En({
            ns: nf,
            name: "vertex"
          })],
          nC = [],
          fC = [],
          oC = [],
          qC = [],
          FC = [],
          WC = [],
          NC = [];
        zC = class {
          constructor() {
            let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, vC.n)(this, fC, void 0), this.y = ((0, vC.n)(this, oC), (0, vC.n)(this, qC, void 0)), this.z = ((0, vC.n)(this, FC), (0, vC.n)(this, WC, void 0)), (0, vC.n)(this, NC), this.x = CC, this.y = zC, this.z = ZC
          }
        };
        return (0, vC.o)(zC, "ThreeMfVertex"), (() => {
          const MC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZC = [cn({
            name: "x"
          })], QC = [cn({
            name: "y"
          })], wC = [cn({
            name: "z"
          })], (0, vC.j)(null, null, ZC, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: CC => "x" in CC,
              get: CC => CC.x,
              set: (CC, zC) => {
                CC.x = zC
              }
            },
            metadata: MC
          }, fC, oC), (0, vC.j)(null, null, QC, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: CC => "y" in CC,
              get: CC => CC.y,
              set: (CC, zC) => {
                CC.y = zC
              }
            },
            metadata: MC
          }, qC, FC), (0, vC.j)(null, null, wC, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: CC => "z" in CC,
              get: CC => CC.z,
              set: (CC, zC) => {
                CC.z = zC
              }
            },
            metadata: MC
          }, WC, NC), (0, vC.j)(null, CC = {
            value: zC
          }, bC, {
            kind: "class",
            name: zC.name,
            metadata: MC
          }, null, nC), zC = CC.value, MC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MC
          }), (0, vC.n)(zC, nC)
        })(), zC
      })(),
      Xf = (() => {
        let CC, zC, ZC = [En({
            ns: nf,
            name: "triangles"
          })],
          QC = [];
        zC = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, vC.o)(zC, "ThreeMfTriangles"), (() => {
          const wC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vC.j)(null, CC = {
            value: zC
          }, ZC, {
            kind: "class",
            name: zC.name,
            metadata: wC
          }, null, QC), zC = CC.value, wC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wC
          }), (0, vC.n)(zC, QC)
        })(), zC
      })(),
      uf = (() => {
        let CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC = [En({
            ns: nf,
            name: "triangle"
          })],
          FC = [],
          WC = [],
          NC = [],
          MC = [],
          gC = [],
          SC = [],
          pC = [],
          PC = [],
          GC = [],
          RC = [],
          AC = [],
          xC = [],
          JC = [],
          IC = [],
          iC = [];
        zC = class {
          constructor(CC, zC, ZC) {
            this.v1 = (0, vC.n)(this, WC, void 0), this.v2 = ((0, vC.n)(this, NC), (0, vC.n)(this, MC, void 0)), this.v3 = ((0, vC.n)(this, gC), (0, vC.n)(this, SC, void 0)), this.p1 = ((0, vC.n)(this, pC), (0, vC.n)(this, PC, void 0)), this.p2 = ((0, vC.n)(this, GC), (0, vC.n)(this, RC, void 0)), this.p3 = ((0, vC.n)(this, AC), (0, vC.n)(this, xC, void 0)), this.pid = ((0, vC.n)(this, JC), (0, vC.n)(this, IC, void 0)), (0, vC.n)(this, iC), this.v1 = CC, this.v2 = zC, this.v3 = ZC
          }
        };
        return (0, vC.o)(zC, "ThreeMfTriangle"), (() => {
          const eC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZC = [cn({
            name: "v1"
          })], QC = [cn({
            name: "v2"
          })], wC = [cn({
            name: "v3"
          })], bC = [cn({
            name: "p1"
          })], nC = [cn({
            name: "p2"
          })], fC = [cn({
            name: "p3"
          })], oC = [cn({
            name: "pid"
          })], (0, vC.j)(null, null, ZC, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: CC => "v1" in CC,
              get: CC => CC.v1,
              set: (CC, zC) => {
                CC.v1 = zC
              }
            },
            metadata: eC
          }, WC, NC), (0, vC.j)(null, null, QC, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: CC => "v2" in CC,
              get: CC => CC.v2,
              set: (CC, zC) => {
                CC.v2 = zC
              }
            },
            metadata: eC
          }, MC, gC), (0, vC.j)(null, null, wC, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: CC => "v3" in CC,
              get: CC => CC.v3,
              set: (CC, zC) => {
                CC.v3 = zC
              }
            },
            metadata: eC
          }, SC, pC), (0, vC.j)(null, null, bC, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: CC => "p1" in CC,
              get: CC => CC.p1,
              set: (CC, zC) => {
                CC.p1 = zC
              }
            },
            metadata: eC
          }, PC, GC), (0, vC.j)(null, null, nC, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: CC => "p2" in CC,
              get: CC => CC.p2,
              set: (CC, zC) => {
                CC.p2 = zC
              }
            },
            metadata: eC
          }, RC, AC), (0, vC.j)(null, null, fC, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: CC => "p3" in CC,
              get: CC => CC.p3,
              set: (CC, zC) => {
                CC.p3 = zC
              }
            },
            metadata: eC
          }, xC, JC), (0, vC.j)(null, null, oC, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: CC => "pid" in CC,
              get: CC => CC.pid,
              set: (CC, zC) => {
                CC.pid = zC
              }
            },
            metadata: eC
          }, IC, iC), (0, vC.j)(null, CC = {
            value: zC
          }, qC, {
            kind: "class",
            name: zC.name,
            metadata: eC
          }, null, FC), zC = CC.value, eC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eC
          }), (0, vC.n)(zC, FC)
        })(), zC
      })(),
      rf = (() => {
        let CC, zC, ZC = [En({
            ns: nf,
            name: "components"
          })],
          QC = [];
        zC = class {
          constructor() {
            this.component = []
          }
        };
        return (0, vC.o)(zC, "ThreeMfComponents"), (() => {
          const wC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vC.j)(null, CC = {
            value: zC
          }, ZC, {
            kind: "class",
            name: zC.name,
            metadata: wC
          }, null, QC), zC = CC.value, wC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wC
          }), (0, vC.n)(zC, QC)
        })(), zC
      })(),
      sf = (() => {
        let CC, zC, ZC, QC, wC = [En({
            ns: nf,
            name: "component"
          })],
          bC = [],
          nC = [],
          fC = [],
          oC = [],
          qC = [];
        zC = class {
          constructor(CC, zC) {
            this.objectid = (0, vC.n)(this, nC, void 0), this.transform = ((0, vC.n)(this, fC), (0, vC.n)(this, oC, void 0)), (0, vC.n)(this, qC), this.objectid = CC, this.transform = zC
          }
        };
        return (0, vC.o)(zC, "ThreeMfComponent"), (() => {
          const FC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZC = [cn({
            name: "objectid"
          })], QC = [cn({
            name: "transform",
            formatter: ef
          })], (0, vC.j)(null, null, ZC, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: CC => "objectid" in CC,
              get: CC => CC.objectid,
              set: (CC, zC) => {
                CC.objectid = zC
              }
            },
            metadata: FC
          }, nC, fC), (0, vC.j)(null, null, QC, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: CC => "transform" in CC,
              get: CC => CC.transform,
              set: (CC, zC) => {
                CC.transform = zC
              }
            },
            metadata: FC
          }, oC, qC), (0, vC.j)(null, CC = {
            value: zC
          }, wC, {
            kind: "class",
            name: zC.name,
            metadata: FC
          }, null, bC), zC = CC.value, FC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: FC
          }), (0, vC.n)(zC, bC)
        })(), zC
      })(),
      Tf = (() => {
        let CC, zC, ZC, QC = [En({
            ns: nf,
            name: "basematerials"
          })],
          wC = [],
          bC = [],
          nC = [];
        zC = class {
          constructor(CC) {
            this.id = (0, vC.n)(this, bC, void 0), this.base = ((0, vC.n)(this, nC), []), this.id = CC
          }
        };
        return (0, vC.o)(zC, "ThreeMfBaseMaterials"), (() => {
          const fC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZC = [cn({
            name: "id"
          })], (0, vC.j)(null, null, ZC, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: CC => "id" in CC,
              get: CC => CC.id,
              set: (CC, zC) => {
                CC.id = zC
              }
            },
            metadata: fC
          }, bC, nC), (0, vC.j)(null, CC = {
            value: zC
          }, QC, {
            kind: "class",
            name: zC.name,
            metadata: fC
          }, null, wC), zC = CC.value, fC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fC
          }), (0, vC.n)(zC, wC)
        })(), zC
      })(),
      af = (() => {
        let CC, zC, ZC, QC, wC = [En({
            ns: nf,
            name: "base"
          })],
          bC = [],
          nC = [],
          fC = [],
          oC = [],
          qC = [];
        zC = class {
          constructor(CC, zC) {
            this.name = (0, vC.n)(this, nC, void 0), this.displaycolor = ((0, vC.n)(this, fC), (0, vC.n)(this, oC, void 0)), (0, vC.n)(this, qC), this.name = CC, this.displaycolor = zC
          }
        };
        return (0, vC.o)(zC, "ThreeMfBase"), (() => {
          const FC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZC = [cn({
            name: "name"
          })], QC = [cn({
            name: "displaycolor"
          })], (0, vC.j)(null, null, ZC, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: CC => "name" in CC,
              get: CC => CC.name,
              set: (CC, zC) => {
                CC.name = zC
              }
            },
            metadata: FC
          }, nC, fC), (0, vC.j)(null, null, QC, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: CC => "displaycolor" in CC,
              get: CC => CC.displaycolor,
              set: (CC, zC) => {
                CC.displaycolor = zC
              }
            },
            metadata: FC
          }, oC, qC), (0, vC.j)(null, CC = {
            value: zC
          }, wC, {
            kind: "class",
            name: zC.name,
            metadata: FC
          }, null, bC), zC = CC.value, FC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: FC
          }), (0, vC.n)(zC, bC)
        })(), zC
      })(),
      tf = (() => {
        let CC, zC, ZC = [En({
            ns: nf,
            name: "build"
          })],
          QC = [];
        zC = class {
          constructor() {
            this.item = []
          }
        };
        return (0, vC.o)(zC, "ThreeMfBuild"), (() => {
          const wC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vC.j)(null, CC = {
            value: zC
          }, ZC, {
            kind: "class",
            name: zC.name,
            metadata: wC
          }, null, QC), zC = CC.value, wC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wC
          }), (0, vC.n)(zC, QC)
        })(), zC
      })(),
      Df = (() => {
        let CC, zC, ZC, QC, wC, bC = [En({
            ns: nf,
            name: "item"
          })],
          nC = [],
          fC = [],
          oC = [],
          qC = [],
          FC = [],
          WC = [],
          NC = [];
        zC = class {
          constructor(CC, zC, ZC) {
            this.objectid = (0, vC.n)(this, fC, void 0), this.transform = ((0, vC.n)(this, oC), (0, vC.n)(this, qC, void 0)), this.partnumber = ((0, vC.n)(this, FC), (0, vC.n)(this, WC, void 0)), this.metadatagroup = (0, vC.n)(this, NC), this.objectid = CC, this.transform = zC, this.partnumber = ZC
          }
        };
        return (0, vC.o)(zC, "ThreeMfItem"), (() => {
          const MC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZC = [cn({
            name: "objectid"
          })], QC = [cn({
            name: "transform",
            formatter: ef
          })], wC = [cn({
            name: "partnumber"
          })], (0, vC.j)(null, null, ZC, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: CC => "objectid" in CC,
              get: CC => CC.objectid,
              set: (CC, zC) => {
                CC.objectid = zC
              }
            },
            metadata: MC
          }, fC, oC), (0, vC.j)(null, null, QC, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: CC => "transform" in CC,
              get: CC => CC.transform,
              set: (CC, zC) => {
                CC.transform = zC
              }
            },
            metadata: MC
          }, qC, FC), (0, vC.j)(null, null, wC, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: CC => "partnumber" in CC,
              get: CC => CC.partnumber,
              set: (CC, zC) => {
                CC.partnumber = zC
              }
            },
            metadata: MC
          }, WC, NC), (0, vC.j)(null, CC = {
            value: zC
          }, bC, {
            kind: "class",
            name: zC.name,
            metadata: MC
          }, null, nC), zC = CC.value, MC && Object.defineProperty(zC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MC
          }), (0, vC.n)(zC, nC)
        })(), zC
      })();
    class jf {
      constructor(CC, zC) {
        this._object = new mf(CC, zC)
      }
      withName(CC) {
        return this._object.name = CC, this
      }
      withThumbnail(CC) {
        return this._object.thumbnail = CC, this
      }
      withProperty(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = CC, this._object.id = zC, this
      }
      build() {
        return this._object
      }
      reset(CC, zC) {
        this._object = new mf(CC, zC)
      }
    }
    class yf extends jf {
      constructor(CC) {
        super(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qf.model), this._object.content = new rf
      }
      withComponent(CC, zC) {
        return this._object.content.component.push(new sf(CC, zC)), this
      }
    }
    class Lf extends jf {
      constructor(CC) {
        super(CC, qf.model)
      }
      withPostProcessHandlers(CC, zC) {
        return this._vh = CC, this._th = zC, this
      }
      withData(CC) {
        return this._object.content = this._buildMesh(CC), this
      }
      withMaterial(CC, zC) {
        return this._object.pid = CC, this._object.pindex = zC, this
      }
      _buildMesh(CC) {
        const zC = this._buildVertices(CC.positions),
          ZC = this._buildTriangle(CC.indices);
        return new Hf(zC, ZC)
      }
      _buildVertices(CC) {
        const zC = new Ef;
        if (CC)
          for (let ZC = 0; ZC < CC.length;) {
            const QC = CC[ZC++],
              wC = CC[ZC++],
              bC = CC[ZC++];
            let nC = new lf(QC, wC, bC);
            this._vh && (nC = this._vh(nC)), zC.vertex.push(nC)
          }
        return zC
      }
      _buildTriangle(CC) {
        const zC = new Xf;
        if (CC)
          for (let ZC = 0; ZC < CC.length;) {
            const QC = CC[ZC++],
              wC = CC[ZC++],
              bC = CC[ZC++];
            let nC = new uf(QC, wC, bC);
            this._th && (nC = this._th(nC)), zC.triangle.push(nC)
          }
        return zC
      }
    }
    class Uf {
      constructor(CC) {
        this._m = new Tf(CC)
      }
      withColor(CC, zC) {
        this._m.base = this._m.base ?? [];
        let ZC = this._m.base.find((zC => zC.name.toLowerCase() === CC.toLowerCase()));
        return ZC ? (ZC.displaycolor = this._rgbaToHex(zC), this) : (ZC = new af(CC, this._rgbaToHex(zC)), this._m.base.push(ZC), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(CC) {
        const zC = CC => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(CC, 1 / 2.2)))),
          ZC = zC(CC.r).toString(16).padStart(2, "0").toUpperCase(),
          QC = zC(CC.g).toString(16).padStart(2, "0").toUpperCase(),
          wC = zC(CC.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof CC.a) {
          return `#${ZC}${QC}${wC}${Math.round(Math.min(255,Math.max(0,255*CC.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${ZC}${QC}${wC}`
      }
    }
    class Bf {
      constructor() {
        this._model = new hf, this._objects = new Map
      }
      withMetaData(CC, zC, ZC, QC) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Kf(CC, zC, ZC, QC)), this
      }
      withMaterial(CC) {
        return CC instanceof Uf && (CC = CC.build()), CC && (this._model.resources = this._model.resources ?? new df, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(CC)), this
      }
      withMesh(CC) {
        return CC instanceof Lf && (CC = CC.build()), this._model.resources = this._model.resources ?? new df, this._model.resources.object.push(CC), this
      }
      withComponents(CC) {
        return CC instanceof yf && (CC = CC.build()), this._model.resources = this._model.resources ?? new df, this._model.resources.object.push(CC), this
      }
      withBuild(CC, zC, ZC) {
        return this._model.build = this._model.build ?? new tf, this._model.build.item?.push(new Df(CC, zC, ZC)), this
      }
      withUnit(CC) {
        return this._model.unit = CC, this
      }
      reset() {
        return this._model = new hf, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    Bf.KnownMetaSet = new Set(hf.KnownMeta.map((CC => CC.toLowerCase())));
    class Of {
      withContentType(CC) {
        this._cts || (this._cts = new Rf);
        const zC = this._cts.items;
        return zC.some((zC => zC.ext === CC.ext && zC.ct === CC.ct)) || zC.push(CC), this
      }
      withRelationship(CC) {
        this._rs || (this._rs = new xf);
        const zC = this._rs.items;
        return zC.some((zC => zC.id === CC.id)) || zC.push(CC), this.withContentType(new Af("rels", Nf.Relationships)), this
      }
      withModel(CC) {
        return CC instanceof Bf && (CC = CC.build()), this._m = CC, this.withContentType(new Af("model", Nf.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const CC = `${gf}${Sf}`;
        if (!this._rs) {
          const zC = `/${CC}`;
          this.withRelationship(new Jf("rel0", Gf.ThreeDimModel, zC))
        }
        return new If(this._cts, this._rs, this._m)
      }
    }
    class kf {
      constructor(CC) {
        this._o = CC
      }
      get options() {
        return this._o
      }
      async serializeAsync(CC) {
        const zC = await this.ensureZipLibReadyAsync();
        if (!zC) return;
        const ZC = zC.Zip,
          QC = zC.ZipDeflate;
        if (!ZC || !QC) throw new Error("fflate Zip / ZipDeflate not available");
        const wC = function(CC, zC, ZC) {
          const wC = new QC(zC, {
            level: 6
          });
          CC.add(wC);
          const bC = function(CC) {
              return {
                push: (zC, ZC) => CC.push(zC, ZC)
              }
            }(wC),
            nC = new bf(bC),
            fC = new Qf(nC).dec("1.0", "UTF-8");
          new Cf(fC).serialize(ZC), nC.finish()
        };
        for (var bC = arguments.length, nC = new Array(bC > 1 ? bC - 1 : 0), fC = 1; fC < bC; fC++) nC[fC - 1] = arguments[fC];
        const oC = this.toDocument(...nC);
        if (!oC) return;
        const qC = new ZC(CC);
        wC(qC, Pf, oC.contentTypes), wC(qC, `${Mf}${pf}`, oC.relationships), wC(qC, `${gf}${Sf}`, oC.model), qC.end()
      }
      toDocument() {
        const CC = (new Bf).withUnit(this._o?.unit ?? of.millimeter);
        if (this.options.metadata)
          for (const wC in this.options.metadata) CC.withMetaData(wC, this.options.metadata[wC]);
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        return (new Of).withModel(this.toModel(CC, ...ZC)).build()
      }
    }
    class Vf {
      static async SerializeToMemoryAsync(CC) {
        const zC = new Array;
        let ZC = 0;
        for (var QC = arguments.length, wC = new Array(QC > 1 ? QC - 1 : 0), bC = 1; bC < QC; bC++) wC[bC - 1] = arguments[bC];
        if (await CC.serializeAsync((function(CC, QC, wC) {
            zC.push(QC), ZC += QC.length
          }), ...wC), !ZC) return;
        const nC = new Uint8Array(ZC);
        let fC = 0;
        for (const oC of zC) nC.set(oC, fC), fC += oC.length;
        return nC
      }
    }
    class Co {}
    Co.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class zo {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = CC, this._to = zC, this._step = ZC, this._i = CC
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const CC = this._i;
        return this._i += this._step, CC
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class Zo extends kf {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...Zo.DefaultOptions,
          ...CC
        })
      }
      toModel(CC) {
        for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
        ZC = ZC.filter((CC => CC instanceof qQ.e || CC instanceof MC.b));
        const wC = new zo,
          bC = CC,
          nC = new Map,
          fC = this.options.exportInstances ? [] : null;
        for (let oC = 0; oC < ZC.length; oC++) {
          const CC = ZC[oC];
          if (CC instanceof MC.b) {
            fC?.push(CC);
            continue
          }
          const zC = CC.name || `mesh${oC}`,
            QC = CC.getWorldMatrix(),
            qC = this._handleBabylonTo3mfMatrixTransformToRef(QC, vf.Zero()),
            FC = CC.Zx;
          if (void 0 === FC) continue;
          const WC = 1 == FC.length;
          for (let ZC = 0; ZC < FC.length; ZC++) {
            const QC = FC[ZC],
              fC = this._extractSubMesh(CC, QC);
            if (fC) {
              const CC = WC ? `${zC}` : `${zC}_${ZC}`,
                oC = new Lf(wC.next()).withData(fC).withName(CC).build();
              bC.withMesh(oC), bC.withBuild(oC.id, qC), nC.set(QC, oC)
            }
          }
        }
        if (fC && fC.length) {
          const CC = this._groupBy(fC, (CC => CC.LQC));
          for (const [zC, ZC] of Array.from(CC.entries()))
            if (ZC && ZC.length)
              for (let CC = 0; CC < ZC.length; CC++) {
                const QC = ZC[CC].getWorldMatrix(),
                  wC = zC.Zx;
                for (let CC = 0; CC < wC.length; CC++) {
                  const zC = wC[CC],
                    ZC = nC.get(zC);
                  ZC && bC.withBuild(ZC.id, this._handleBabylonTo3mfMatrixTransformToRef(QC, vf.Zero()))
                }
              }
        }
        return bC.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const CC = globalThis;
          return CC.fflate || await wC.Tools.LoadScriptAsync(Co.FFLATEUrl), CC.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(CC, zC) {
        const ZC = CC.CQC();
        if (!ZC) return;
        const QC = CC.getVerticesData(Zo._PositionKind);
        if (!QC) return;
        if (0 == zC.indexStart && zC.indexCount == ZC.length) return {
          positions: QC,
          indices: ZC
        };
        const wC = zC.indexStart,
          bC = new Map,
          nC = [],
          fC = new Uint32Array(zC.indexCount);
        for (let oC = 0; oC < zC.indexCount; oC++) {
          const CC = ZC[wC + oC];
          let zC = bC.get(CC);
          if (void 0 === zC) {
            zC = bC.size, bC.set(CC, zC);
            const ZC = 3 * CC;
            nC.push(QC[ZC], QC[ZC + 1], QC[ZC + 2])
          }
          fC[oC] = zC
        }
        return {
          positions: new Float32Array(nC),
          indices: fC
        }
      }
      _groupBy(CC, zC) {
        const ZC = new Map;
        for (const QC of CC) {
          const CC = zC(QC),
            wC = ZC.get(CC);
          wC ? wC.push(QC) : ZC.set(CC, [QC])
        }
        return ZC
      }
      _handleBabylonTo3mfMatrixTransformToRef(CC, zC) {
        const ZC = CC.multiplyToRef(Zo._R_BJS_TO_3MF, uC.b.Zero()).m;
        return zC.values = [ZC[0], ZC[1], ZC[2], ZC[4], ZC[5], ZC[6], ZC[8], ZC[9], ZC[10], ZC[12], ZC[13], ZC[14]], zC
      }
    }
    Zo.DefaultOptions = {
      unit: of.meter,
      exportInstances: !1
    }, Zo._PositionKind = "position", Zo._R_BJS_TO_3MF = uC.b.RotationX(Math.PI / 2).multiply(uC.b.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);