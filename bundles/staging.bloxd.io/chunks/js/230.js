export const id = 230;
export const ids = [230, 235];
export const modules = {
  41867: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS
    });
    var tS = gS(41785),
      bS = gS(40038);
    let XS = !1;

    function xS() {
      XS || (XS = !0, bS.e.prototype._sphericalPolynomialTargetSize = 0, bS.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(bS.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = tS.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((SS => {
              this._texture._sphericalPolynomial = SS, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(SS) {
          this._texture && (this._texture._sphericalPolynomial = SS)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  37294: (SS, HS, gS) => {
    gS.d(HS, {
      Color3: () => tS.b,
      b: () => tS.c
    });
    var tS = gS(37300);
    (0, tS.e)()
  },
  37783: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS
    });
    var tS = gS(37791);
    class bS {
      static GetPlanes(SS) {
        const HS = [];
        for (let gS = 0; gS < 6; gS++) HS.push(new tS.e(0, 0, 0, 0));
        return bS.GetPlanesToRef(SS, HS), HS
      }
      static GetNearPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] + gS[2], HS.normal.y = gS[7] + gS[6], HS.normal.z = gS[11] + gS[10], HS.d = gS[15] + gS[14], HS.normalize()
      }
      static GetFarPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] - gS[2], HS.normal.y = gS[7] - gS[6], HS.normal.z = gS[11] - gS[10], HS.d = gS[15] - gS[14], HS.normalize()
      }
      static GetLeftPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] + gS[0], HS.normal.y = gS[7] + gS[4], HS.normal.z = gS[11] + gS[8], HS.d = gS[15] + gS[12], HS.normalize()
      }
      static GetRightPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] - gS[0], HS.normal.y = gS[7] - gS[4], HS.normal.z = gS[11] - gS[8], HS.d = gS[15] - gS[12], HS.normalize()
      }
      static GetTopPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] - gS[1], HS.normal.y = gS[7] - gS[5], HS.normal.z = gS[11] - gS[9], HS.d = gS[15] - gS[13], HS.normalize()
      }
      static GetBottomPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] + gS[1], HS.normal.y = gS[7] + gS[5], HS.normal.z = gS[11] + gS[9], HS.d = gS[15] + gS[13], HS.normalize()
      }
      static GetPlanesToRef(SS, HS) {
        bS.GetNearPlaneToRef(SS, HS[0]), bS.GetFarPlaneToRef(SS, HS[1]), bS.GetLeftPlaneToRef(SS, HS[2]), bS.GetRightPlaneToRef(SS, HS[3]), bS.GetTopPlaneToRef(SS, HS[4]), bS.GetBottomPlaneToRef(SS, HS[5])
      }
      static IsPointInFrustum(SS, HS) {
        for (let gS = 0; gS < 6; gS++)
          if (HS[gS].dotCoordinate(SS) < 0) return !1;
        return !0
      }
    }
  },
  37791: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS
    });
    var tS = gS(37117);
    class bS {
      constructor(SS, HS, gS, bS) {
        this.normal = new tS.n(SS, HS, gS), this.d = bS
      }
      lgS() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new bS(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let SS = this.normal.getHashCode();
        return SS = 397 * SS ^ this.d, SS
      }
      normalize() {
        const SS = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let HS = 0;
        return 0 !== SS && (HS = 1 / SS), this.normal.x *= HS, this.normal.y *= HS, this.normal.z *= HS, this.d *= HS, this
      }
      transform(SS) {
        const HS = bS._TmpMatrix;
        SS.invertToRef(HS);
        const gS = HS.m,
          tS = this.normal.x,
          XS = this.normal.y,
          xS = this.normal.z,
          NS = this.d,
          qS = tS * gS[0] + XS * gS[1] + xS * gS[2] + NS * gS[3],
          uS = tS * gS[4] + XS * gS[5] + xS * gS[6] + NS * gS[7],
          IS = tS * gS[8] + XS * gS[9] + xS * gS[10] + NS * gS[11],
          fS = tS * gS[12] + XS * gS[13] + xS * gS[14] + NS * gS[15];
        return new bS(qS, uS, IS, fS)
      }
      dotCoordinate(SS) {
        return this.normal.x * SS.x + this.normal.y * SS.y + this.normal.z * SS.z + this.d
      }
      copyFromPoints(SS, HS, gS) {
        const tS = HS.x - SS.x,
          bS = HS.y - SS.y,
          XS = HS.z - SS.z,
          xS = gS.x - SS.x,
          NS = gS.y - SS.y,
          qS = gS.z - SS.z,
          uS = bS * qS - XS * NS,
          IS = XS * xS - tS * qS,
          fS = tS * NS - bS * xS,
          kS = Math.sqrt(uS * uS + IS * IS + fS * fS);
        let aS;
        return aS = 0 !== kS ? 1 / kS : 0, this.normal.x = uS * aS, this.normal.y = IS * aS, this.normal.z = fS * aS, this.d = -(this.normal.x * SS.x + this.normal.y * SS.y + this.normal.z * SS.z), this
      }
      isFrontFacingTo(SS, HS) {
        return tS.n.Dot(this.normal, SS) <= HS
      }
      signedDistanceTo(SS) {
        return tS.n.Dot(SS, this.normal) + this.d
      }
      static FromArray(SS) {
        return new bS(SS[0], SS[1], SS[2], SS[3])
      }
      static FromPoints(SS, HS, gS) {
        const tS = new bS(0, 0, 0, 0);
        return tS.copyFromPoints(SS, HS, gS), tS
      }
      static FromPositionAndNormal(SS, HS) {
        const gS = new bS(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(SS, HS, gS)
      }
      static FromPositionAndNormalToRef(SS, HS, gS) {
        return gS.normal.dJ(HS), gS.normal.normalize(), gS.d = -SS.dot(gS.normal), gS
      }
      static SignedDistanceToPlaneFromPositionAndNormal(SS, HS, gS) {
        const bS = -(HS.x * SS.x + HS.y * SS.y + HS.z * SS.z);
        return tS.n.Dot(gS, HS) + bS
      }
    }
    bS._TmpMatrix = tS.e.Identity()
  },
  37113: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      Matrix: () => tS.e,
      Quaternion: () => tS.i,
      RegisterMathVector: () => tS.k,
      TmpVectors: () => tS.l,
      Vector2: () => tS.m,
      VK: () => tS.n,
      Vector4: () => tS.r
    });
    var tS = gS(37117);
    (0, tS.k)()
  },
  38134: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    class tS {
      constructor(SS, HS, gS, tS) {
        this.x = SS, this.y = HS, this.width = gS, this.height = tS
      }
      toGlobal(SS, HS) {
        return new tS(this.x * SS, this.y * HS, this.width * SS, this.height * HS)
      }
      toGlobalToRef(SS, HS, gS) {
        return gS.x = this.x * SS, gS.y = this.y * HS, gS.width = this.width * SS, gS.height = this.height * HS, this
      }
      clone() {
        return new tS(this.x, this.y, this.width, this.height)
      }
    }
  },
  41785: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => uS
    });
    var tS = gS(37117),
      bS = gS(37149),
      XS = gS(40032),
      xS = gS(37123),
      NS = gS(37300);
    class qS {
      constructor(SS, HS, gS, tS) {
        this.name = SS, this.worldAxisForNormal = HS, this.worldAxisForFileX = gS, this.worldAxisForFileY = tS
      }
    }
    class uS {
      static _NearestPow2Floor(SS) {
        return SS <= 1 ? 1 : 1 << Math.floor(Math.log2(SS))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(SS) {
        if (!SS.isCube) return null;
        SS.lL()?.AK().flushFramebuffer();
        const HS = SS.getSize().width,
          gS = SS._sphericalPolynomialTargetSize,
          tS = gS > 0 ? this._NearestPow2Floor(gS) : 0,
          bS = !SS.noMipmap && !0 === SS._texture?.generateMipMaps,
          XS = tS > 0 && tS < HS && bS,
          xS = XS ? Math.max(0, Math.round(Math.log2(HS / tS))) : 0,
          NS = XS ? Math.max(1, Math.floor(HS / Math.pow(2, xS))) : HS,
          qS = SS.readPixels(0, xS, void 0, !1),
          uS = SS.readPixels(1, xS, void 0, !1);
        let IS, fS;
        SS.isRenderTarget ? (IS = SS.readPixels(3, xS, void 0, !1), fS = SS.readPixels(2, xS, void 0, !1)) : (IS = SS.readPixels(2, xS, void 0, !1), fS = SS.readPixels(3, xS, void 0, !1));
        const kS = SS.readPixels(4, xS, void 0, !1),
          aS = SS.readPixels(5, xS, void 0, !1),
          KS = SS.gammaSpace,
          jS = tS > 0 && tS < HS && !XS;
        return new Promise((SS => {
          Promise.all([uS, qS, IS, fS, kS, aS]).then((gS => {
            let [bS, XS, xS, qS, uS, IS] = gS, fS = NS;
            if (jS) {
              const SS = 4;
              bS = this._DownsampleFace(bS, HS, tS, SS), XS = this._DownsampleFace(XS, HS, tS, SS), xS = this._DownsampleFace(xS, HS, tS, SS), qS = this._DownsampleFace(qS, HS, tS, SS), uS = this._DownsampleFace(uS, HS, tS, SS), IS = this._DownsampleFace(IS, HS, tS, SS), fS = tS
            }
            const kS = {
              size: fS,
              right: XS,
              left: bS,
              up: xS,
              down: qS,
              front: uS,
              back: IS,
              format: 5,
              type: bS instanceof Float32Array ? 1 : 0,
              gammaSpace: KS
            };
            SS(this.ConvertCubeMapToSphericalPolynomial(kS))
          }))
        }))
      }
      static _AreaElement(SS, HS) {
        return Math.atan2(SS * HS, Math.sqrt(SS * SS + HS * HS + 1))
      }
      static _DownsampleFace(SS, HS, gS, tS) {
        const bS = SS instanceof Float32Array ? SS : Float32Array.from(SS),
          XS = gS * gS * tS,
          xS = new Float32Array(XS),
          NS = HS / gS,
          qS = 1 / (NS * NS);
        for (let IS = 0; IS < gS; IS++) {
          const SS = Math.floor(IS * NS),
            XS = Math.floor((IS + 1) * NS);
          for (let uS = 0; uS < gS; uS++) {
            const fS = Math.floor(uS * NS),
              kS = Math.floor((uS + 1) * NS),
              aS = (IS * gS + uS) * tS;
            for (let gS = 0; gS < tS; gS++) {
              let NS = 0;
              for (let xS = SS; xS < XS; xS++)
                for (let SS = fS; SS < kS; SS++) NS += bS[(xS * HS + SS) * tS + gS];
              xS[aS + gS] = NS * qS
            }
          }
        }
        if (SS instanceof Float32Array) return xS;
        const uS = new(0, SS.constructor)(XS);
        for (let IS = 0; IS < XS; IS++) uS[IS] = xS[IS] + .5 | 0;
        return uS
      }
      static ConvertCubeMapToSphericalPolynomial(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gS = HS > 0 ? this._NearestPow2Floor(HS) : 0;
        if (gS > 0 && SS.size > gS) {
          const HS = 5 === SS.format ? 4 : 3,
            tS = ["right", "left", "up", "down", "front", "back"],
            bS = {};
          for (const XS of tS) bS[XS] = this._DownsampleFace(SS[XS], SS.size, gS, HS);
          SS = {
            ...SS,
            ...bS,
            size: gS
          }
        }
        const tS = new XS.e;
        let qS = 0;
        const uS = 2 / SS.size,
          IS = uS,
          fS = .5 * uS,
          kS = fS - 1;
        for (let XS = 0; XS < 6; XS++) {
          const HS = this._FileFaces[XS],
            gS = SS[HS.name];
          let aS = kS;
          const KS = 5 === SS.format ? 4 : 3;
          for (let XS = 0; XS < SS.size; XS++) {
            let jS = kS;
            for (let IS = 0; IS < SS.size; IS++) {
              const kS = HS.worldAxisForFileX.scale(jS).add(HS.worldAxisForFileY.scale(aS)).add(HS.worldAxisForNormal);
              kS.normalize();
              const GS = this._AreaElement(jS - fS, aS - fS) - this._AreaElement(jS - fS, aS + fS) - this._AreaElement(jS + fS, aS - fS) + this._AreaElement(jS + fS, aS + fS);
              let CS = gS[XS * SS.size * KS + IS * KS + 0],
                nS = gS[XS * SS.size * KS + IS * KS + 1],
                PS = gS[XS * SS.size * KS + IS * KS + 2];
              isNaN(CS) && (CS = 0), isNaN(nS) && (nS = 0), isNaN(PS) && (PS = 0), 0 === SS.type && (CS /= 255, nS /= 255, PS /= 255), SS.gammaSpace && (CS = Math.pow((0, bS.Clamp)(CS), xS.l), nS = Math.pow((0, bS.Clamp)(nS), xS.l), PS = Math.pow((0, bS.Clamp)(PS), xS.l));
              const QS = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const SS = Math.max(CS, nS, PS);
                if (SS > QS) {
                  const HS = QS / SS;
                  CS *= HS, nS *= HS, PS *= HS
                }
              } else CS = (0, bS.Clamp)(CS, 0, QS), nS = (0, bS.Clamp)(nS, 0, QS), PS = (0, bS.Clamp)(PS, 0, QS);
              const DS = new NS.b(CS, nS, PS);
              tS.addLight(kS, DS, GS), qS += GS, jS += uS
            }
            aS += IS
          }
        }
        const aS = 6 * (4 * Math.PI) / 6 / qS;
        return tS.scaleInPlace(aS), tS.convertIncidentRadianceToIrradiance(), tS.convertIrradianceToLambertianRadiance(), XS.f.FromHarmonics(tS)
      }
    }
    uS._FileFaces = [new qS("right", new tS.n(1, 0, 0), new tS.n(0, 0, -1), new tS.n(0, -1, 0)), new qS("left", new tS.n(-1, 0, 0), new tS.n(0, 0, 1), new tS.n(0, -1, 0)), new qS("up", new tS.n(0, 1, 0), new tS.n(1, 0, 0), new tS.n(0, 0, 1)), new qS("down", new tS.n(0, -1, 0), new tS.n(1, 0, 0), new tS.n(0, 0, -1)), new qS("front", new tS.n(0, 0, 1), new tS.n(1, 0, 0), new tS.n(0, -1, 0)), new qS("back", new tS.n(0, 0, -1), new tS.n(-1, 0, 0), new tS.n(0, -1, 0))], uS.MAX_HDRI_VALUE = 4096, uS.PRESERVE_CLAMPED_COLORS = !1
  },
  41564: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS.g,
      g: () => tS.n
    });
    var tS = gS(40087);
    (0, tS.v)()
  },
  37933: (SS, HS, gS) => {
    function tS() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (SS => {
        const HS = 16 * Math.random() | 0;
        return ("x" === SS ? HS : 3 & HS | 8).toString(16)
      }))
    }
    gS.d(HS, {
      c: () => tS
    })
  },
  41831: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS
    });
    var tS = gS(41822),
      bS = gS(41838);
    class XS {
      static ExpandRGBDTexture(SS) {
        const HS = SS._texture;
        if (!HS || !SS.isRGBD) return;
        const bS = HS.AK(),
          XS = bS.getCaps(),
          xS = HS.isReady;
        let NS = !1;
        XS.textureHalfFloatRender && XS.textureHalfFloatLinearFiltering ? (NS = !0, HS.type = 2) : XS.textureFloatRender && XS.textureFloatLinearFiltering && (NS = !0, HS.type = 1), NS && (HS.isReady = !1, HS._isRGBD = !1, HS.invertY = !1);
        const qS = async () => {
          const XS = bS.isWebGPU,
            xS = XS ? 1 : 0;
          HS.isReady = !1, XS ? await gS.e(342).then((() => gS(61445))) : await gS.e(324).then((() => gS(61452)));
          const NS = new tS.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, bS, !1, void 0, HS.type, void 0, null, !1, void 0, xS);
          NS.externalTextureSamplerBinding = !0;
          const qS = bS.createRenderTargetTexture(HS.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: HS.samplingMode,
            type: HS.type,
            format: 5
          });
          NS.onEffectCreatedObservable.addOnce((gS => {
            gS.executeWhenCompiled((() => {
              NS.onApply = SS => {
                SS._bindTexture("textureSampler", HS), SS.setFloat2("scale", 1, 1)
              }, SS.lL()?.postProcessManager.directRender([NS], qS, !0), bS.restoreDefaultFramebuffer(), bS._releaseTexture(HS), NS && NS.dispose(), qS._swapAndDie(HS), HS.isReady = !0
            }))
          }))
        };
        NS && (xS ? qS() : SS.onLoadObservable.addOnce(qS))
      }
      static async EncodeTextureToRGBD(SS, HS) {
        let tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return HS.AK().isWebGPU ? await gS.e(343).then((() => gS(61465))) : await gS.e(325).then((() => gS(61462))), await (0, bS.d)("rgbdEncode", SS, HS, tS, 1, 5)
      }
    }
  },
  61307: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      AsyncLoop: () => tS.e,
      RegisterTools: () => tS.i,
      Tools: () => tS.k,
      className: () => tS.m
    });
    var tS = gS(40133);
    (0, tS.i)()
  },
  41887: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS
    });
    class tS {
      constructor(SS) {
        this._pendingActions = new Array, this._workerInfos = SS.map((SS => ({
          workerPromise: Promise.resolve(SS),
          idle: !0
        })))
      }
      dispose() {
        for (const SS of this._workerInfos) SS.workerPromise.then((SS => {
          SS.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(SS) {
        this._executeOnIdleWorker(SS) || this._pendingActions.push(SS)
      }
      _executeOnIdleWorker(SS) {
        for (const HS of this._workerInfos)
          if (HS.idle) return this._execute(HS, SS), !0;
        return !1
      }
      _execute(SS, HS) {
        SS.idle = !1, SS.workerPromise.then((gS => {
          HS(gS, (() => {
            const HS = this._pendingActions.shift();
            HS ? this._execute(SS, HS) : SS.idle = !0
          }))
        }))
      }
    }
    class bS extends tS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bS.DefaultOptions;
        super([]), this._maxWorkers = SS, this._createWorkerAsync = HS, this._options = gS
      }
      push(SS) {
        if (!this._executeOnIdleWorker(SS))
          if (this._workerInfos.length < this._maxWorkers) {
            const HS = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(HS), this._execute(HS, SS)
          } else this._pendingActions.push(SS)
      }
      _execute(SS, HS) {
        SS.timeoutId && (clearTimeout(SS.timeoutId), delete SS.timeoutId), super._execute(SS, ((gS, tS) => {
          HS(gS, (() => {
            tS(), SS.idle && (SS.timeoutId = setTimeout((() => {
              SS.workerPromise.then((SS => {
                SS.terminate()
              }));
              const HS = this._workerInfos.indexOf(SS); - 1 !== HS && this._workerInfos.splice(HS, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    bS.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  61338: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      AbstractThreeMfSerializer: () => RN,
      BVHExporter: () => Ox,
      ContentTypeFileName: () => KN,
      DefaultXmlSerializerFormatOptions: () => sx,
      DefaultXmlSerializerNumberOptions: () => px,
      EXT_lights_area: () => Cb,
      EXT_mesh_gpu_instancing: () => zt,
      EXT_texture_avif: () => Xx,
      EXT_texture_webp: () => Hx,
      GLTF2Export: () => Vt,
      GLTFData: () => uS,
      GetXmlFieldMeta: () => Vx,
      GetXmlName: () => ix,
      IsQualifiedName: () => dx,
      KHR_draco_mesh_compression: () => et,
      KHR_interactivity: () => Ib,
      KHR_lights_punctual: () => xb,
      KHR_materials_anisotropy: () => Db,
      KHR_materials_clearcoat: () => Ob,
      KHR_materials_coat: () => Yb,
      KHR_materials_diffuse_roughness: () => iX,
      KHR_materials_diffuse_transmission: () => zb,
      KHR_materials_dispersion: () => Bb,
      KHR_materials_emissive_strength: () => Tb,
      KHR_materials_fuzz: () => fX,
      KHR_materials_ior: () => eb,
      KHR_materials_iridescence: () => gX,
      KHR_materials_openpbr: () => pX,
      KHR_materials_sheen: () => xX,
      KHR_materials_specular: () => jX,
      KHR_materials_transmission: () => PX,
      KHR_materials_unlit: () => ZX,
      KHR_materials_volume: () => cX,
      KHR_materials_volume_scatter: () => YX,
      KHR_texture_basisu: () => mX,
      KHR_texture_transform: () => FX,
      Known3mfRelationshipTypes: () => jN,
      KnownI3mfContentType: () => uN,
      Matrix3d: () => DN,
      MatrixFormatter: () => wN,
      ModelFileName: () => kN,
      NumberFormatter: () => Fx,
      OBJExport: () => xS,
      Object3dDirName: () => fN,
      OpenXmlContentTypesNamespace: () => NN,
      OpenXmlRelationshipsNamespace: () => qN,
      RegisterEXT_lights_area: () => Pb,
      RegisterEXT_mesh_gpu_instancing: () => pt,
      RegisterEXT_texture_avif: () => Nx,
      RegisterEXT_texture_webp: () => tx,
      RegisterKHR_draco_mesh_compression: () => Sb,
      RegisterKHR_interactivity: () => kb,
      RegisterKHR_lights_punctual: () => qb,
      RegisterKHR_materials_anisotropy: () => hb,
      RegisterKHR_materials_clearcoat: () => cb,
      RegisterKHR_materials_coat: () => yb,
      RegisterKHR_materials_diffuse_roughness: () => zX,
      RegisterKHR_materials_diffuse_transmission: () => pb,
      RegisterKHR_materials_dispersion: () => Fb,
      RegisterKHR_materials_emissive_strength: () => lb,
      RegisterKHR_materials_fuzz: () => aX,
      RegisterKHR_materials_ior: () => SX,
      RegisterKHR_materials_iridescence: () => bX,
      RegisterKHR_materials_openpbr: () => BX,
      RegisterKHR_materials_sheen: () => qX,
      RegisterKHR_materials_specular: () => CX,
      RegisterKHR_materials_transmission: () => DX,
      RegisterKHR_materials_unlit: () => OX,
      RegisterKHR_materials_volume: () => EX,
      RegisterKHR_materials_volume_scatter: () => yX,
      RegisterKHR_texture_basisu: () => rX,
      RegisterKHR_texture_transform: () => TX,
      RelationshipDirName: () => IN,
      RelationshipFileName: () => aN,
      ResolveFormatOptions: () => Mx,
      ResolveNumberOptions: () => Bx,
      STLExport: () => qx,
      ST_ObjectType: () => xN,
      ST_Unit: () => XN,
      StringXmlWriter: () => HN,
      ThreeDimModelNamespace: () => tN,
      ThreeMf: () => TN,
      ThreeMfBase: () => iN,
      ThreeMfBaseMaterials: () => VN,
      ThreeMfBuild: () => WN,
      ThreeMfComponent: () => yN,
      ThreeMfComponents: () => AN,
      ThreeMfComponentsBuilder: () => pN,
      ThreeMfContentType: () => CN,
      ThreeMfContentTypes: () => GN,
      ThreeMfDocument: () => QN,
      ThreeMfDocumentBuilder: () => FN,
      ThreeMfItem: () => zN,
      ThreeMfMaterialBuilder: () => BN,
      ThreeMfMesh: () => cN,
      ThreeMfMeshBuilder: () => sN,
      ThreeMfMeta: () => ZN,
      ThreeMfMetadataGroup: () => JN,
      ThreeMfModel: () => hN,
      ThreeMfModelBuilder: () => MN,
      ThreeMfObject: () => dN,
      ThreeMfObjectBuilder: () => UN,
      ThreeMfRelationship: () => PN,
      ThreeMfRelationships: () => nN,
      ThreeMfResources: () => ON,
      ThreeMfSerializer: () => mN,
      ThreeMfSerializerGlobalConfiguration: () => oN,
      ThreeMfTriangle: () => YN,
      ThreeMfTriangles: () => LN,
      ThreeMfVertex: () => EN,
      ThreeMfVertices: () => vN,
      ToQualifiedString: () => Ux,
      TokenType: () => rx,
      TriangleSetsNamespace: () => bN,
      USDZExportAsync: () => Zx,
      Utf8XmlWriterToBytes: () => gN,
      XmlAttr: () => Ax,
      XmlBuilder: () => SN,
      XmlElem: () => yx,
      XmlIgnore: () => Yx,
      XmlName: () => Lx,
      XmlNameToParts: () => zx,
      XmlSerializer: () => mx,
      _ConvertToGLTFPBRMetallicRoughness: () => Jg,
      _SolveMetallic: () => Zg,
      __IGLTFExporterExtension: () => NS
    });
    var tS = gS(37113),
      bS = gS(61307),
      XS = gS(40331);
    class xS {
      static OBJ(SS, HS, gS, xS) {
        const NS = [];
        let qS = 1,
          uS = 1;
        HS && (gS || (gS = "mat"), NS.push("mtllib " + gS + ".mtl"));
        for (let IS = 0; IS < SS.length; IS++) {
          const gS = SS[IS],
            fS = gS.name || `mesh${IS}}`;
          NS.push(`o ${fS}`);
          let kS = null;
          if (xS) {
            const SS = gS.computeWorldMatrix(!0);
            kS = new tS.Matrix, SS.invertToRef(kS), gS.bakeTransformIntoVertices(SS)
          }
          if (HS) {
            const SS = gS.material;
            SS && NS.push("usemtl " + SS.id)
          }
          const aS = gS.geometry;
          if (!aS) {
            bS.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const KS = aS.getVerticesData("position"),
            jS = aS.getVerticesData("normal"),
            GS = aS.getVerticesData("uv"),
            CS = aS.mgS();
          let nS = 0,
            PS = 0;
          if (!KS || !CS) {
            bS.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const QS = SS[0].lL().useRightHandedSystem ? 1 : -1;
          for (let SS = 0; SS < KS.length; SS += 3) NS.push("v " + KS[SS] * QS + " " + KS[SS + 1] + " " + KS[SS + 2]), nS++;
          if (null != jS)
            for (let SS = 0; SS < jS.length; SS += 3) NS.push("vn " + jS[SS] * QS + " " + jS[SS + 1] + " " + jS[SS + 2]);
          if (null != GS)
            for (let SS = 0; SS < GS.length; SS += 2) NS.push("vt " + GS[SS] + " " + GS[SS + 1]), PS++;
          const DS = ["", "", ""],
            wS = (gS.material || gS.lL().defaultMaterial)._getEffectiveOrientation(gS),
            [hS, ZS] = wS === XS.d.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let SS = 0; SS < CS.length; SS += 3) {
            const HS = [String(CS[SS] + qS), String(CS[SS + hS] + qS), String(CS[SS + ZS] + qS)],
              gS = [String(CS[SS] + uS), String(CS[SS + hS] + uS), String(CS[SS + ZS] + uS)],
              tS = HS,
              bS = null != GS ? gS : DS,
              XS = null != jS ? HS : DS;
            NS.push("f " + tS[0] + "/" + bS[0] + "/" + XS[0] + " " + tS[1] + "/" + bS[1] + "/" + XS[1] + " " + tS[2] + "/" + bS[2] + "/" + XS[2])
          }
          xS && kS && gS.bakeTransformIntoVertices(kS), qS += nS, uS += PS
        }
        return NS.join("\n")
      }
      static MTL(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const gS = [],
          tS = SS.material;
        gS.push("newmtl " + HS), gS.push("  Ns " + tS.specularPower.toFixed(4)), gS.push("  Ni 1.5000"), gS.push("  d " + tS.alpha.toFixed(4)), gS.push("  Tr 0.0000"), gS.push("  Tf 1.0000 1.0000 1.0000"), gS.push("  illum 2"), gS.push("  Ka " + tS.ambientColor.r.toFixed(4) + " " + tS.ambientColor.g.toFixed(4) + " " + tS.ambientColor.b.toFixed(4)), gS.push("  Kd " + tS.diffuseColor.r.toFixed(4) + " " + tS.diffuseColor.g.toFixed(4) + " " + tS.diffuseColor.b.toFixed(4)), gS.push("  Ks " + tS.specularColor.r.toFixed(4) + " " + tS.specularColor.g.toFixed(4) + " " + tS.specularColor.b.toFixed(4)), gS.push("  Ke " + tS.emissiveColor.r.toFixed(4) + " " + tS.emissiveColor.g.toFixed(4) + " " + tS.emissiveColor.b.toFixed(4));
        tS.ambientTexture && gS.push("  map_Ka " + tS.ambientTexture.name), tS.diffuseTexture && gS.push("  map_Kd " + tS.diffuseTexture.name), tS.specularTexture && gS.push("  map_Ks " + tS.specularTexture.name), tS.bumpTexture && gS.push("  map_bump -imfchan z " + tS.bumpTexture.name), tS.opacityTexture && gS.push("  map_d " + tS.opacityTexture.name);
        return gS.join("\n")
      }
    }
    var NS = 0,
      qS = gS(41564);
    class uS {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const SS in this.files) {
          const HS = this.files[SS],
            gS = new Blob([HS], {
              type: (0, qS.d)(SS)
            });
          bS.Tools.Download(gS, SS)
        }
      }
    }
    var IS = gS(41157),
      fS = gS(41123),
      kS = gS(41650),
      aS = gS(41125),
      KS = gS(39867),
      jS = gS(37138),
      GS = gS(37294),
      CS = gS(37149);
    const nS = CS.HighestCommonFactor,
      PS = {
        ...CS,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: nS
      };
    var QS = gS(41838),
      DS = gS(41142),
      wS = gS(41613),
      hS = gS(41617),
      ZS = gS(41859);
    (0, ZS.RegisterDumpTools)();
    var JS = gS(40041),
      OS = gS(40048),
      dS = gS(38687),
      cS = gS(40144),
      vS = gS(40510),
      ES = gS(41831);
    let LS = 0;
    const YS = (SS, HS, gS, tS) => {
        if (!SS[gS]) {
          const bS = SS.useDelayedTextureLoading;
          SS.useDelayedTextureLoading = !1;
          const XS = SS._blockEntityCollection;
          SS._blockEntityCollection = !1;
          const xS = vS.i.CreateFromBase64String(HS, tS + LS++, SS, !0, !1, vS.i.BILINEAR_SAMPLINGMODE);
          SS._blockEntityCollection = XS;
          const NS = SS.AK().getLoadedTexturesCache(),
            qS = NS.indexOf(xS.getInternalTexture()); - 1 !== qS && NS.splice(qS, 1), xS.isRGBD = !0, xS.wrapU = vS.i.CLAMP_ADDRESSMODE, xS.wrapV = vS.i.CLAMP_ADDRESSMODE, SS[gS] = xS, SS.useDelayedTextureLoading = bS, ES.e.ExpandRGBDTexture(xS);
          const uS = SS.AK().YK.add((() => {
            xS.isRGBD = !0;
            const HS = SS.onBeforeRenderObservable.add((() => {
              xS.isReady() && (SS.onBeforeRenderObservable.remove(HS), ES.e.ExpandRGBDTexture(xS))
            }))
          }));
          SS.bY.add((() => {
            SS.AK().YK.remove(uS)
          }))
        }
        return SS[gS]
      },
      AS = SS => YS(SS, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      yS = SS => YS(SS, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      VS = SS => YS(SS, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var iS = gS(40131),
      WS = gS(37117),
      zS = gS(40183),
      US = gS(40324),
      pS = gS(40400);
    class sS extends US.c {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let BS = (() => {
      var SS, HS, gS, tS, bS, XS, xS, NS, qS, uS;
      let IS, fS, kS, aS, KS, jS, GS, CS, nS, PS = pS.e,
        QS = [],
        DS = [],
        wS = [],
        hS = [],
        ZS = [],
        dS = [],
        cS = [],
        vS = [],
        ES = [],
        LS = [],
        YS = [],
        AS = [],
        yS = [],
        VS = [],
        iS = [],
        WS = [],
        zS = [],
        US = [];
      return SS = class extends PS {
        get useEnergyConservation() {
          return (0, JS.e)(this, HS, "f")
        }
        set useEnergyConservation(SS) {
          (0, JS.h)(this, HS, SS, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, JS.e)(this, gS, "f")
        }
        set useSmithVisibilityHeightCorrelated(SS) {
          (0, JS.h)(this, gS, SS, "f")
        }
        get useSphericalHarmonics() {
          return (0, JS.e)(this, tS, "f")
        }
        set useSphericalHarmonics(SS) {
          (0, JS.h)(this, tS, SS, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, JS.e)(this, bS, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(SS) {
          (0, JS.h)(this, bS, SS, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, JS.e)(this, XS, "f")
        }
        set mixIblRadianceWithIrradiance(SS) {
          (0, JS.h)(this, XS, SS, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, JS.e)(this, xS, "f")
        }
        set useLegacySpecularEnergyConservation(SS) {
          (0, JS.h)(this, xS, SS, "f")
        }
        get baseDiffuseModel() {
          return (0, JS.e)(this, NS, "f")
        }
        set baseDiffuseModel(SS) {
          (0, JS.h)(this, NS, SS, "f")
        }
        get dielectricSpecularModel() {
          return (0, JS.e)(this, qS, "f")
        }
        set dielectricSpecularModel(SS) {
          (0, JS.h)(this, qS, SS, "f")
        }
        get conductorSpecularModel() {
          return (0, JS.e)(this, uS, "f")
        }
        set conductorSpecularModel(SS) {
          (0, JS.h)(this, uS, SS, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(IS) {
          let fS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(IS, "PBRBRDF", 90, new sS, fS), this._useEnergyConservation = SS.DEFAULT_USE_ENERGY_CONSERVATION, HS.set(this, (0, JS.k)(this, QS, SS.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, JS.k)(this, DS), SS.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), gS.set(this, (0, JS.k)(this, wS, SS.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, JS.k)(this, hS), SS.DEFAULT_USE_SPHERICAL_HARMONICS), tS.set(this, (0, JS.k)(this, ZS, SS.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, JS.k)(this, dS), SS.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), bS.set(this, (0, JS.k)(this, cS, SS.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, JS.k)(this, vS), SS.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), XS.set(this, (0, JS.k)(this, ES, SS.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, JS.k)(this, LS), SS.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), xS.set(this, (0, JS.k)(this, YS, SS.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, JS.k)(this, AS), SS.DEFAULT_DIFFUSE_MODEL), NS.set(this, (0, JS.k)(this, yS, SS.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, JS.k)(this, VS), SS.DEFAULT_DIELECTRIC_SPECULAR_MODEL), qS.set(this, (0, JS.k)(this, iS, SS.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, JS.k)(this, WS), SS.DEFAULT_CONDUCTOR_SPECULAR_MODEL), uS.set(this, (0, JS.k)(this, zS, SS.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, JS.k)(this, US), this._internalMarkAllSubMeshesAsMiscDirty = IS._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(SS) {
          SS.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, SS.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, SS.SPHERICAL_HARMONICS = this._useSphericalHarmonics, SS.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, SS.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, SS.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, SS.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, SS.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, SS.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, HS = new WeakMap, gS = new WeakMap, tS = new WeakMap, bS = new WeakMap, XS = new WeakMap, xS = new WeakMap, NS = new WeakMap, qS = new WeakMap, uS = new WeakMap, (() => {
        const HS = "function" === typeof Symbol && Symbol.metadata ? Object.create(PS[Symbol.metadata] ?? null) : void 0;
        IS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], fS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], kS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], aS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], KS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], jS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], GS = [(0, OS.M)("baseDiffuseModel"), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], CS = [(0, OS.M)("dielectricSpecularModel"), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], nS = [(0, OS.M)("conductorSpecularModel"), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], (0, JS.j)(SS, null, IS, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: SS => "useEnergyConservation" in SS,
            get: SS => SS.useEnergyConservation,
            set: (SS, HS) => {
              SS.useEnergyConservation = HS
            }
          },
          metadata: HS
        }, QS, DS), (0, JS.j)(SS, null, fS, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: SS => "useSmithVisibilityHeightCorrelated" in SS,
            get: SS => SS.useSmithVisibilityHeightCorrelated,
            set: (SS, HS) => {
              SS.useSmithVisibilityHeightCorrelated = HS
            }
          },
          metadata: HS
        }, wS, hS), (0, JS.j)(SS, null, kS, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: SS => "useSphericalHarmonics" in SS,
            get: SS => SS.useSphericalHarmonics,
            set: (SS, HS) => {
              SS.useSphericalHarmonics = HS
            }
          },
          metadata: HS
        }, ZS, dS), (0, JS.j)(SS, null, aS, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: SS => "useSpecularGlossinessInputEnergyConservation" in SS,
            get: SS => SS.useSpecularGlossinessInputEnergyConservation,
            set: (SS, HS) => {
              SS.useSpecularGlossinessInputEnergyConservation = HS
            }
          },
          metadata: HS
        }, cS, vS), (0, JS.j)(SS, null, KS, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: SS => "mixIblRadianceWithIrradiance" in SS,
            get: SS => SS.mixIblRadianceWithIrradiance,
            set: (SS, HS) => {
              SS.mixIblRadianceWithIrradiance = HS
            }
          },
          metadata: HS
        }, ES, LS), (0, JS.j)(SS, null, jS, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: SS => "useLegacySpecularEnergyConservation" in SS,
            get: SS => SS.useLegacySpecularEnergyConservation,
            set: (SS, HS) => {
              SS.useLegacySpecularEnergyConservation = HS
            }
          },
          metadata: HS
        }, YS, AS), (0, JS.j)(SS, null, GS, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: SS => "baseDiffuseModel" in SS,
            get: SS => SS.baseDiffuseModel,
            set: (SS, HS) => {
              SS.baseDiffuseModel = HS
            }
          },
          metadata: HS
        }, yS, VS), (0, JS.j)(SS, null, CS, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: SS => "dielectricSpecularModel" in SS,
            get: SS => SS.dielectricSpecularModel,
            set: (SS, HS) => {
              SS.dielectricSpecularModel = HS
            }
          },
          metadata: HS
        }, iS, WS), (0, JS.j)(SS, null, nS, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: SS => "conductorSpecularModel" in SS,
            get: SS => SS.conductorSpecularModel,
            set: (SS, HS) => {
              SS.conductorSpecularModel = HS
            }
          },
          metadata: HS
        }, zS, US), HS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: HS
        })
      })(), SS.DEFAULT_USE_ENERGY_CONSERVATION = !0, SS.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, SS.DEFAULT_USE_SPHERICAL_HARMONICS = !0, SS.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, SS.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, SS.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, SS.DEFAULT_DIFFUSE_MODEL = 0, SS.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, SS.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, SS
    })();
    var MS = gS(40313),
      FS = gS(37300),
      RS = gS(40320),
      TS = gS(40152),
      oS = gS(40386),
      lS = gS(40378),
      mS = gS(40392),
      eS = gS(40367);
    class rS extends US.c {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let SH = (() => {
      var SS, HS, gS, tS, bS, XS, xS, NS, qS, uS;
      let IS, fS, kS, aS, KS, jS, GS, CS, nS, PS, QS, DS, wS, hS, ZS = pS.e,
        dS = [],
        cS = [],
        vS = [],
        ES = [],
        LS = [],
        YS = [],
        AS = [],
        yS = [],
        VS = [],
        iS = [],
        WS = [],
        zS = [],
        US = [],
        sS = [],
        BS = [],
        MS = [],
        RS = [],
        TS = [],
        oS = [],
        mS = [],
        SH = [],
        HH = [],
        gH = [],
        tH = [],
        bH = [],
        XH = [],
        xH = [],
        NH = [];
      return SS = class extends ZS {
        get isEnabled() {
          return (0, JS.e)(this, HS, "f")
        }
        set isEnabled(SS) {
          (0, JS.h)(this, HS, SS, "f")
        }
        get indexOfRefraction() {
          return (0, JS.e)(this, gS, "f")
        }
        set indexOfRefraction(SS) {
          (0, JS.h)(this, gS, SS, "f")
        }
        get texture() {
          return (0, JS.e)(this, tS, "f")
        }
        set texture(SS) {
          (0, JS.h)(this, tS, SS, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, JS.e)(this, bS, "f")
        }
        set useRoughnessFromMainTexture(SS) {
          (0, JS.h)(this, bS, SS, "f")
        }
        get textureRoughness() {
          return (0, JS.e)(this, XS, "f")
        }
        set textureRoughness(SS) {
          (0, JS.h)(this, XS, SS, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, JS.e)(this, xS, "f")
        }
        set remapF0OnInterfaceChange(SS) {
          (0, JS.h)(this, xS, SS, "f")
        }
        get bumpTexture() {
          return (0, JS.e)(this, NS, "f")
        }
        set bumpTexture(SS) {
          (0, JS.h)(this, NS, SS, "f")
        }
        get isTintEnabled() {
          return (0, JS.e)(this, qS, "f")
        }
        set isTintEnabled(SS) {
          (0, JS.h)(this, qS, SS, "f")
        }
        get tintTexture() {
          return (0, JS.e)(this, uS, "f")
        }
        set tintTexture(SS) {
          (0, JS.h)(this, uS, SS, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(IS) {
          let fS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(IS, "PBRClearCoat", 100, new rS, fS), this._isEnabled = !1, HS.set(this, (0, JS.k)(this, dS, !1)), this.intensity = ((0, JS.k)(this, cS), (0, JS.k)(this, vS, 1)), this.roughness = ((0, JS.k)(this, ES), (0, JS.k)(this, LS, 0)), this._indexOfRefraction = ((0, JS.k)(this, YS), SS._DefaultIndexOfRefraction), gS.set(this, (0, JS.k)(this, AS, SS._DefaultIndexOfRefraction)), this._texture = ((0, JS.k)(this, yS), null), tS.set(this, (0, JS.k)(this, VS, null)), this._useRoughnessFromMainTexture = ((0, JS.k)(this, iS), !0), bS.set(this, (0, JS.k)(this, WS, !0)), this._textureRoughness = ((0, JS.k)(this, zS), null), XS.set(this, (0, JS.k)(this, US, null)), this._remapF0OnInterfaceChange = ((0, JS.k)(this, sS), !0), xS.set(this, (0, JS.k)(this, BS, !0)), this._bumpTexture = ((0, JS.k)(this, MS), null), NS.set(this, (0, JS.k)(this, RS, null)), this._isTintEnabled = ((0, JS.k)(this, TS), !1), qS.set(this, (0, JS.k)(this, oS, !1)), this.tintColor = ((0, JS.k)(this, mS), (0, JS.k)(this, SH, FS.b.White())), this.tintColorAtDistance = ((0, JS.k)(this, HH), (0, JS.k)(this, gH, 1)), this.tintThickness = ((0, JS.k)(this, tH), (0, JS.k)(this, bH, 1)), this._tintTexture = ((0, JS.k)(this, XH), null), uS.set(this, (0, JS.k)(this, xH, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, JS.k)(this, NH), this._internalMarkAllSubMeshesAsTexturesDirty = IS._dirtyCallbacks[1]
        }
        isReadyForSubMesh(SS, HS, gS) {
          if (!this._isEnabled) return !0;
          const tS = this._material._disableBumpMap;
          if (SS._areTexturesDirty && HS.texturesEnabled) {
            if (this._texture && lS.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && lS.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (gS.getCaps().standardDerivatives && this._bumpTexture && lS.e.ClearCoatBumpTextureEnabled && !tS && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && lS.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(HS, gS) {
          this._isEnabled ? (HS.CLEARCOAT = !0, HS.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, HS.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, HS._areTexturesDirty && gS.texturesEnabled && (this._texture && lS.e.ClearCoatTextureEnabled ? (0, eS.X)(this._texture, HS, "CLEARCOAT_TEXTURE") : HS.CLEARCOAT_TEXTURE = !1, this._textureRoughness && lS.e.ClearCoatTextureEnabled ? (0, eS.X)(this._textureRoughness, HS, "CLEARCOAT_TEXTURE_ROUGHNESS") : HS.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && lS.e.ClearCoatBumpTextureEnabled ? (0, eS.X)(this._bumpTexture, HS, "CLEARCOAT_BUMP") : HS.CLEARCOAT_BUMP = !1, HS.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === SS._DefaultIndexOfRefraction, this._isTintEnabled ? (HS.CLEARCOAT_TINT = !0, this._tintTexture && lS.e.ClearCoatTintTextureEnabled ? ((0, eS.X)(this._tintTexture, HS, "CLEARCOAT_TINT_TEXTURE"), HS.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : HS.CLEARCOAT_TINT_TEXTURE = !1) : (HS.CLEARCOAT_TINT = !1, HS.CLEARCOAT_TINT_TEXTURE = !1))) : (HS.CLEARCOAT = !1, HS.CLEARCOAT_TEXTURE = !1, HS.CLEARCOAT_TEXTURE_ROUGHNESS = !1, HS.CLEARCOAT_BUMP = !1, HS.CLEARCOAT_TINT = !1, HS.CLEARCOAT_TINT_TEXTURE = !1, HS.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, HS.CLEARCOAT_DEFAULTIOR = !1, HS.CLEARCOAT_TEXTUREDIRECTUV = 0, HS.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, HS.CLEARCOAT_BUMPDIRECTUV = 0, HS.CLEARCOAT_REMAP_F0 = !1, HS.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, HS.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(SS, HS, gS, tS) {
          if (!this._isEnabled) return;
          const bS = tS.materialDefines,
            XS = this._material.isFrozen,
            xS = this._material._disableBumpMap,
            NS = this._material._invertNormalMapX,
            qS = this._material._invertNormalMapY;
          if (!SS.useUbo || !XS || !SS.isSync) {
            (this._texture || this._textureRoughness) && lS.e.ClearCoatTextureEnabled && (SS.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, eS.y)(this._texture, SS, "clearCoat"), this._textureRoughness && !bS.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, eS.y)(this._textureRoughness, SS, "clearCoatRoughness")), this._bumpTexture && gS.getCaps().standardDerivatives && lS.e.ClearCoatTextureEnabled && !xS && (SS.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, eS.y)(this._bumpTexture, SS, "clearCoatBump"), HS._mirroredCameraPosition ? SS.updateFloat2("vClearCoatTangentSpaceParams", NS ? 1 : -1, qS ? 1 : -1) : SS.updateFloat2("vClearCoatTangentSpaceParams", NS ? -1 : 1, qS ? -1 : 1)), this._tintTexture && lS.e.ClearCoatTintTextureEnabled && (SS.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, eS.y)(this._tintTexture, SS, "clearCoatTint")), SS.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const tS = 1 - this._indexOfRefraction,
              XS = 1 + this._indexOfRefraction,
              uS = Math.pow(-tS / XS, 2),
              IS = 1 / this._indexOfRefraction;
            SS.updateFloat4("vClearCoatRefractionParams", uS, IS, tS, XS), this._isTintEnabled && (SS.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), SS.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          HS.texturesEnabled && (this._texture && lS.e.ClearCoatTextureEnabled && SS.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !bS.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && lS.e.ClearCoatTextureEnabled && SS.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && gS.getCaps().standardDerivatives && lS.e.ClearCoatBumpTextureEnabled && !xS && SS.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && lS.e.ClearCoatTintTextureEnabled && SS.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(SS) {
          return this._texture === SS || (this._textureRoughness === SS || (this._bumpTexture === SS || this._tintTexture === SS))
        }
        getActiveTextures(SS) {
          this._texture && SS.push(this._texture), this._textureRoughness && SS.push(this._textureRoughness), this._bumpTexture && SS.push(this._bumpTexture), this._tintTexture && SS.push(this._tintTexture)
        }
        getAnimatables(SS) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && SS.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && SS.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && SS.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && SS.push(this._tintTexture)
        }
        dispose(SS) {
          SS && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(SS, HS, gS) {
          return SS.CLEARCOAT_BUMP && HS.addFallback(gS++, "CLEARCOAT_BUMP"), SS.CLEARCOAT_TINT && HS.addFallback(gS++, "CLEARCOAT_TINT"), SS.CLEARCOAT && HS.addFallback(gS++, "CLEARCOAT"), gS
        }
        getSamplers(SS) {
          SS.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, HS = new WeakMap, gS = new WeakMap, tS = new WeakMap, bS = new WeakMap, XS = new WeakMap, xS = new WeakMap, NS = new WeakMap, qS = new WeakMap, uS = new WeakMap, (() => {
        const HS = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZS[Symbol.metadata] ?? null) : void 0;
        IS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], fS = [(0, OS.M)()], kS = [(0, OS.M)()], aS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], KS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], jS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], GS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], CS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], nS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], PS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], QS = [(0, OS.k)()], DS = [(0, OS.M)()], wS = [(0, OS.M)()], hS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], (0, JS.j)(SS, null, IS, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: SS => "isEnabled" in SS,
            get: SS => SS.isEnabled,
            set: (SS, HS) => {
              SS.isEnabled = HS
            }
          },
          metadata: HS
        }, dS, cS), (0, JS.j)(SS, null, aS, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: SS => "indexOfRefraction" in SS,
            get: SS => SS.indexOfRefraction,
            set: (SS, HS) => {
              SS.indexOfRefraction = HS
            }
          },
          metadata: HS
        }, AS, yS), (0, JS.j)(SS, null, KS, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: SS => "texture" in SS,
            get: SS => SS.texture,
            set: (SS, HS) => {
              SS.texture = HS
            }
          },
          metadata: HS
        }, VS, iS), (0, JS.j)(SS, null, jS, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "useRoughnessFromMainTexture" in SS,
            get: SS => SS.useRoughnessFromMainTexture,
            set: (SS, HS) => {
              SS.useRoughnessFromMainTexture = HS
            }
          },
          metadata: HS
        }, WS, zS), (0, JS.j)(SS, null, GS, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: SS => "textureRoughness" in SS,
            get: SS => SS.textureRoughness,
            set: (SS, HS) => {
              SS.textureRoughness = HS
            }
          },
          metadata: HS
        }, US, sS), (0, JS.j)(SS, null, CS, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: SS => "remapF0OnInterfaceChange" in SS,
            get: SS => SS.remapF0OnInterfaceChange,
            set: (SS, HS) => {
              SS.remapF0OnInterfaceChange = HS
            }
          },
          metadata: HS
        }, BS, MS), (0, JS.j)(SS, null, nS, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "bumpTexture" in SS,
            get: SS => SS.bumpTexture,
            set: (SS, HS) => {
              SS.bumpTexture = HS
            }
          },
          metadata: HS
        }, RS, TS), (0, JS.j)(SS, null, PS, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: SS => "isTintEnabled" in SS,
            get: SS => SS.isTintEnabled,
            set: (SS, HS) => {
              SS.isTintEnabled = HS
            }
          },
          metadata: HS
        }, oS, mS), (0, JS.j)(SS, null, hS, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "tintTexture" in SS,
            get: SS => SS.tintTexture,
            set: (SS, HS) => {
              SS.tintTexture = HS
            }
          },
          metadata: HS
        }, xH, NH), (0, JS.j)(null, null, fS, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: SS => "intensity" in SS,
            get: SS => SS.intensity,
            set: (SS, HS) => {
              SS.intensity = HS
            }
          },
          metadata: HS
        }, vS, ES), (0, JS.j)(null, null, kS, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: SS => "roughness" in SS,
            get: SS => SS.roughness,
            set: (SS, HS) => {
              SS.roughness = HS
            }
          },
          metadata: HS
        }, LS, YS), (0, JS.j)(null, null, QS, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: SS => "tintColor" in SS,
            get: SS => SS.tintColor,
            set: (SS, HS) => {
              SS.tintColor = HS
            }
          },
          metadata: HS
        }, SH, HH), (0, JS.j)(null, null, DS, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: SS => "tintColorAtDistance" in SS,
            get: SS => SS.tintColorAtDistance,
            set: (SS, HS) => {
              SS.tintColorAtDistance = HS
            }
          },
          metadata: HS
        }, gH, tH), (0, JS.j)(null, null, wS, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: SS => "tintThickness" in SS,
            get: SS => SS.tintThickness,
            set: (SS, HS) => {
              SS.tintThickness = HS
            }
          },
          metadata: HS
        }, bH, XH), HS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: HS
        })
      })(), SS._DefaultIndexOfRefraction = 1.5, SS
    })();
    class HH extends US.c {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let gH = (() => {
      var SS, HS, gS, tS;
      let bS, XS, xS, NS, qS, uS, IS, fS = pS.e,
        kS = [],
        aS = [],
        KS = [],
        jS = [],
        GS = [],
        CS = [],
        nS = [],
        PS = [],
        QS = [],
        DS = [],
        wS = [],
        hS = [],
        ZS = [],
        dS = [];
      return SS = class extends fS {
        get isEnabled() {
          return (0, JS.e)(this, HS, "f")
        }
        set isEnabled(SS) {
          (0, JS.h)(this, HS, SS, "f")
        }
        get texture() {
          return (0, JS.e)(this, gS, "f")
        }
        set texture(SS) {
          (0, JS.h)(this, gS, SS, "f")
        }
        get thicknessTexture() {
          return (0, JS.e)(this, tS, "f")
        }
        set thicknessTexture(SS) {
          (0, JS.h)(this, tS, SS, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(bS) {
          let XS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(bS, "PBRIridescence", 110, new HH, XS), this._isEnabled = !1, HS.set(this, (0, JS.k)(this, kS, !1)), this.intensity = ((0, JS.k)(this, aS), (0, JS.k)(this, KS, 1)), this.minimumThickness = ((0, JS.k)(this, jS), (0, JS.k)(this, GS, SS._DefaultMinimumThickness)), this.maximumThickness = ((0, JS.k)(this, CS), (0, JS.k)(this, nS, SS._DefaultMaximumThickness)), this.indexOfRefraction = ((0, JS.k)(this, PS), (0, JS.k)(this, QS, SS._DefaultIndexOfRefraction)), this._texture = ((0, JS.k)(this, DS), null), gS.set(this, (0, JS.k)(this, wS, null)), this._thicknessTexture = ((0, JS.k)(this, hS), null), tS.set(this, (0, JS.k)(this, ZS, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, JS.k)(this, dS), this._internalMarkAllSubMeshesAsTexturesDirty = bS._dirtyCallbacks[1]
        }
        isReadyForSubMesh(SS, HS) {
          if (!this._isEnabled) return !0;
          if (SS._areTexturesDirty && HS.texturesEnabled) {
            if (this._texture && lS.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && lS.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(SS, HS) {
          this._isEnabled ? (SS.IRIDESCENCE = !0, SS._areTexturesDirty && HS.texturesEnabled && (this._texture && lS.e.IridescenceTextureEnabled ? (0, eS.X)(this._texture, SS, "IRIDESCENCE_TEXTURE") : SS.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && lS.e.IridescenceTextureEnabled ? (0, eS.X)(this._thicknessTexture, SS, "IRIDESCENCE_THICKNESS_TEXTURE") : SS.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (SS.IRIDESCENCE = !1, SS.IRIDESCENCE_TEXTURE = !1, SS.IRIDESCENCE_THICKNESS_TEXTURE = !1, SS.IRIDESCENCE_TEXTUREDIRECTUV = 0, SS.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(SS, HS) {
          if (!this._isEnabled) return;
          const gS = this._material.isFrozen;
          SS.useUbo && gS && SS.isSync || ((this._texture || this._thicknessTexture) && lS.e.IridescenceTextureEnabled && (SS.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, eS.y)(this._texture, SS, "iridescence"), this._thicknessTexture && (0, eS.y)(this._thicknessTexture, SS, "iridescenceThickness")), SS.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), HS.texturesEnabled && (this._texture && lS.e.IridescenceTextureEnabled && SS.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && lS.e.IridescenceTextureEnabled && SS.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(SS) {
          return this._texture === SS || this._thicknessTexture === SS
        }
        getActiveTextures(SS) {
          this._texture && SS.push(this._texture), this._thicknessTexture && SS.push(this._thicknessTexture)
        }
        getAnimatables(SS) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && SS.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && SS.push(this._thicknessTexture)
        }
        dispose(SS) {
          SS && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(SS, HS, gS) {
          return SS.IRIDESCENCE && HS.addFallback(gS++, "IRIDESCENCE"), gS
        }
        getSamplers(SS) {
          SS.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, HS = new WeakMap, gS = new WeakMap, tS = new WeakMap, (() => {
        const HS = "function" === typeof Symbol && Symbol.metadata ? Object.create(fS[Symbol.metadata] ?? null) : void 0;
        bS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], XS = [(0, OS.M)()], xS = [(0, OS.M)()], NS = [(0, OS.M)()], qS = [(0, OS.M)()], uS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], IS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], (0, JS.j)(SS, null, bS, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: SS => "isEnabled" in SS,
            get: SS => SS.isEnabled,
            set: (SS, HS) => {
              SS.isEnabled = HS
            }
          },
          metadata: HS
        }, kS, aS), (0, JS.j)(SS, null, uS, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: SS => "texture" in SS,
            get: SS => SS.texture,
            set: (SS, HS) => {
              SS.texture = HS
            }
          },
          metadata: HS
        }, wS, hS), (0, JS.j)(SS, null, IS, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "thicknessTexture" in SS,
            get: SS => SS.thicknessTexture,
            set: (SS, HS) => {
              SS.thicknessTexture = HS
            }
          },
          metadata: HS
        }, ZS, dS), (0, JS.j)(null, null, XS, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: SS => "intensity" in SS,
            get: SS => SS.intensity,
            set: (SS, HS) => {
              SS.intensity = HS
            }
          },
          metadata: HS
        }, KS, jS), (0, JS.j)(null, null, xS, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: SS => "minimumThickness" in SS,
            get: SS => SS.minimumThickness,
            set: (SS, HS) => {
              SS.minimumThickness = HS
            }
          },
          metadata: HS
        }, GS, CS), (0, JS.j)(null, null, NS, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: SS => "maximumThickness" in SS,
            get: SS => SS.maximumThickness,
            set: (SS, HS) => {
              SS.maximumThickness = HS
            }
          },
          metadata: HS
        }, nS, PS), (0, JS.j)(null, null, qS, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: SS => "indexOfRefraction" in SS,
            get: SS => SS.indexOfRefraction,
            set: (SS, HS) => {
              SS.indexOfRefraction = HS
            }
          },
          metadata: HS
        }, QS, DS), HS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: HS
        })
      })(), SS._DefaultMinimumThickness = 100, SS._DefaultMaximumThickness = 400, SS._DefaultIndexOfRefraction = 1.3, SS
    })();
    class tH extends US.c {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let bH = (() => {
      var SS, HS, gS, tS;
      let bS, XS, xS, NS, qS, uS = pS.e,
        IS = [],
        fS = [],
        kS = [],
        aS = [],
        KS = [],
        jS = [],
        GS = [],
        CS = [],
        nS = [],
        PS = [];
      return SS = class extends uS {
        get isEnabled() {
          return (0, JS.e)(this, HS, "f")
        }
        set isEnabled(SS) {
          (0, JS.h)(this, HS, SS, "f")
        }
        set angle(SS) {
          this.direction.x = Math.cos(SS), this.direction.y = Math.sin(SS)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, JS.e)(this, gS, "f")
        }
        set texture(SS) {
          (0, JS.h)(this, gS, SS, "f")
        }
        get legacy() {
          return (0, JS.e)(this, tS, "f")
        }
        set legacy(SS) {
          (0, JS.h)(this, tS, SS, "f")
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
        constructor(SS) {
          let bS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(SS, "PBRAnisotropic", 110, new tH, bS), this._isEnabled = !1, HS.set(this, (0, JS.k)(this, IS, !1)), this.intensity = ((0, JS.k)(this, fS), (0, JS.k)(this, kS, 1)), this.direction = ((0, JS.k)(this, aS), (0, JS.k)(this, KS, new WS.m(1, 0))), this._texture = ((0, JS.k)(this, jS), null), gS.set(this, (0, JS.k)(this, GS, null)), this._legacy = ((0, JS.k)(this, CS), !1), tS.set(this, (0, JS.k)(this, nS, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, JS.k)(this, PS), this._internalMarkAllSubMeshesAsTexturesDirty = SS._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = SS._dirtyCallbacks[16]
        }
        isReadyForSubMesh(SS, HS) {
          return !this._isEnabled || !(SS._areTexturesDirty && HS.texturesEnabled && this._texture && lS.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(SS, HS, gS) {
          this._isEnabled ? (SS.ANISOTROPIC = this._isEnabled, this._isEnabled && !gS.isVerticesDataPresent(zS.h.TangentKind) && (SS._needUVs = !0, SS.MAINUV1 = !0), SS._areTexturesDirty && HS.texturesEnabled && (this._texture && lS.e.AnisotropicTextureEnabled ? (0, eS.X)(this._texture, SS, "ANISOTROPIC_TEXTURE") : SS.ANISOTROPIC_TEXTURE = !1), SS._areMiscDirty && (SS.ANISOTROPIC_LEGACY = this._legacy)) : (SS.ANISOTROPIC = !1, SS.ANISOTROPIC_TEXTURE = !1, SS.ANISOTROPIC_TEXTUREDIRECTUV = 0, SS.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(SS, HS) {
          if (!this._isEnabled) return;
          const gS = this._material.isFrozen;
          SS.useUbo && gS && SS.isSync || (this._texture && lS.e.AnisotropicTextureEnabled && (SS.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, eS.y)(this._texture, SS, "anisotropy")), SS.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), HS.texturesEnabled && this._texture && lS.e.AnisotropicTextureEnabled && SS.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(SS) {
          return this._texture === SS
        }
        getActiveTextures(SS) {
          this._texture && SS.push(this._texture)
        }
        getAnimatables(SS) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && SS.push(this._texture)
        }
        dispose(SS) {
          SS && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(SS, HS, gS) {
          return SS.ANISOTROPIC && HS.addFallback(gS++, "ANISOTROPIC"), gS
        }
        getSamplers(SS) {
          SS.push("anisotropySampler")
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
        parse(SS, HS, gS) {
          super.parse(SS, HS, gS), void 0 === SS.legacy && (this.legacy = !0)
        }
      }, HS = new WeakMap, gS = new WeakMap, tS = new WeakMap, (() => {
        const HS = "function" === typeof Symbol && Symbol.metadata ? Object.create(uS[Symbol.metadata] ?? null) : void 0;
        bS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], XS = [(0, OS.M)()], xS = [(0, OS.E)()], NS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], qS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], (0, JS.j)(SS, null, bS, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: SS => "isEnabled" in SS,
            get: SS => SS.isEnabled,
            set: (SS, HS) => {
              SS.isEnabled = HS
            }
          },
          metadata: HS
        }, IS, fS), (0, JS.j)(SS, null, NS, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: SS => "texture" in SS,
            get: SS => SS.texture,
            set: (SS, HS) => {
              SS.texture = HS
            }
          },
          metadata: HS
        }, GS, CS), (0, JS.j)(SS, null, qS, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: SS => "legacy" in SS,
            get: SS => SS.legacy,
            set: (SS, HS) => {
              SS.legacy = HS
            }
          },
          metadata: HS
        }, nS, PS), (0, JS.j)(null, null, XS, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: SS => "intensity" in SS,
            get: SS => SS.intensity,
            set: (SS, HS) => {
              SS.intensity = HS
            }
          },
          metadata: HS
        }, kS, aS), (0, JS.j)(null, null, xS, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: SS => "direction" in SS,
            get: SS => SS.direction,
            set: (SS, HS) => {
              SS.direction = HS
            }
          },
          metadata: HS
        }, KS, jS), HS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: HS
        })
      })(), SS
    })();
    class XH extends US.c {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let xH = (() => {
      var SS, HS, gS, tS, bS, XS, xS, NS;
      let qS, uS, IS, fS, kS, aS, KS, jS, GS, CS = pS.e,
        nS = [],
        PS = [],
        QS = [],
        DS = [],
        wS = [],
        hS = [],
        ZS = [],
        dS = [],
        cS = [],
        vS = [],
        ES = [],
        LS = [],
        YS = [],
        AS = [],
        yS = [],
        VS = [],
        iS = [],
        WS = [];
      return SS = class extends CS {
        get isEnabled() {
          return (0, JS.e)(this, HS, "f")
        }
        set isEnabled(SS) {
          (0, JS.h)(this, HS, SS, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, JS.e)(this, gS, "f")
        }
        set linkSheenWithAlbedo(SS) {
          (0, JS.h)(this, gS, SS, "f")
        }
        get texture() {
          return (0, JS.e)(this, tS, "f")
        }
        set texture(SS) {
          (0, JS.h)(this, tS, SS, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, JS.e)(this, bS, "f")
        }
        set useRoughnessFromMainTexture(SS) {
          (0, JS.h)(this, bS, SS, "f")
        }
        get roughness() {
          return (0, JS.e)(this, XS, "f")
        }
        set roughness(SS) {
          (0, JS.h)(this, XS, SS, "f")
        }
        get textureRoughness() {
          return (0, JS.e)(this, xS, "f")
        }
        set textureRoughness(SS) {
          (0, JS.h)(this, xS, SS, "f")
        }
        get albedoScaling() {
          return (0, JS.e)(this, NS, "f")
        }
        set albedoScaling(SS) {
          (0, JS.h)(this, NS, SS, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(SS) {
          let qS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(SS, "Sheen", 120, new XH, qS), this._isEnabled = !1, HS.set(this, (0, JS.k)(this, nS, !1)), this._linkSheenWithAlbedo = ((0, JS.k)(this, PS), !1), gS.set(this, (0, JS.k)(this, QS, !1)), this.intensity = ((0, JS.k)(this, DS), (0, JS.k)(this, wS, 1)), this.color = ((0, JS.k)(this, hS), (0, JS.k)(this, ZS, FS.b.White())), this._texture = ((0, JS.k)(this, dS), null), tS.set(this, (0, JS.k)(this, cS, null)), this._useRoughnessFromMainTexture = ((0, JS.k)(this, vS), !0), bS.set(this, (0, JS.k)(this, ES, !0)), this._roughness = ((0, JS.k)(this, LS), null), XS.set(this, (0, JS.k)(this, YS, null)), this._textureRoughness = ((0, JS.k)(this, AS), null), xS.set(this, (0, JS.k)(this, yS, null)), this._albedoScaling = ((0, JS.k)(this, VS), !1), NS.set(this, (0, JS.k)(this, iS, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, JS.k)(this, WS), this._internalMarkAllSubMeshesAsTexturesDirty = SS._dirtyCallbacks[1]
        }
        isReadyForSubMesh(SS, HS) {
          if (!this._isEnabled) return !0;
          if (SS._areTexturesDirty && HS.texturesEnabled) {
            if (this._texture && lS.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && lS.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(SS, HS) {
          this._isEnabled ? (SS.SHEEN = !0, SS.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, SS.SHEEN_ROUGHNESS = null !== this._roughness, SS.SHEEN_ALBEDOSCALING = this._albedoScaling, SS.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, SS._areTexturesDirty && HS.texturesEnabled && (this._texture && lS.e.SheenTextureEnabled ? ((0, eS.X)(this._texture, SS, "SHEEN_TEXTURE"), SS.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : SS.SHEEN_TEXTURE = !1, this._textureRoughness && lS.e.SheenTextureEnabled ? (0, eS.X)(this._textureRoughness, SS, "SHEEN_TEXTURE_ROUGHNESS") : SS.SHEEN_TEXTURE_ROUGHNESS = !1)) : (SS.SHEEN = !1, SS.SHEEN_TEXTURE = !1, SS.SHEEN_TEXTURE_ROUGHNESS = !1, SS.SHEEN_LINKWITHALBEDO = !1, SS.SHEEN_ROUGHNESS = !1, SS.SHEEN_ALBEDOSCALING = !1, SS.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, SS.SHEEN_GAMMATEXTURE = !1, SS.SHEEN_TEXTUREDIRECTUV = 0, SS.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(SS, HS, gS, tS) {
          if (!this._isEnabled) return;
          const bS = tS.materialDefines,
            XS = this._material.isFrozen;
          SS.useUbo && XS && SS.isSync || ((this._texture || this._textureRoughness) && lS.e.SheenTextureEnabled && (SS.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, eS.y)(this._texture, SS, "sheen"), this._textureRoughness && !bS.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, eS.y)(this._textureRoughness, SS, "sheenRoughness")), SS.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && SS.updateFloat("vSheenRoughness", this._roughness)), HS.texturesEnabled && (this._texture && lS.e.SheenTextureEnabled && SS.setTexture("sheenSampler", this._texture), this._textureRoughness && !bS.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && lS.e.SheenTextureEnabled && SS.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(SS) {
          return this._texture === SS || this._textureRoughness === SS
        }
        getActiveTextures(SS) {
          this._texture && SS.push(this._texture), this._textureRoughness && SS.push(this._textureRoughness)
        }
        getAnimatables(SS) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && SS.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && SS.push(this._textureRoughness)
        }
        dispose(SS) {
          SS && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(SS, HS, gS) {
          return SS.SHEEN && HS.addFallback(gS++, "SHEEN"), gS
        }
        getSamplers(SS) {
          SS.push("sheenSampler", "sheenRoughnessSampler")
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
      }, HS = new WeakMap, gS = new WeakMap, tS = new WeakMap, bS = new WeakMap, XS = new WeakMap, xS = new WeakMap, NS = new WeakMap, (() => {
        const HS = "function" === typeof Symbol && Symbol.metadata ? Object.create(CS[Symbol.metadata] ?? null) : void 0;
        qS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], uS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], IS = [(0, OS.M)()], fS = [(0, OS.k)()], kS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], aS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], KS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], jS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], GS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], (0, JS.j)(SS, null, qS, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: SS => "isEnabled" in SS,
            get: SS => SS.isEnabled,
            set: (SS, HS) => {
              SS.isEnabled = HS
            }
          },
          metadata: HS
        }, nS, PS), (0, JS.j)(SS, null, uS, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: SS => "linkSheenWithAlbedo" in SS,
            get: SS => SS.linkSheenWithAlbedo,
            set: (SS, HS) => {
              SS.linkSheenWithAlbedo = HS
            }
          },
          metadata: HS
        }, QS, DS), (0, JS.j)(SS, null, kS, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: SS => "texture" in SS,
            get: SS => SS.texture,
            set: (SS, HS) => {
              SS.texture = HS
            }
          },
          metadata: HS
        }, cS, vS), (0, JS.j)(SS, null, aS, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "useRoughnessFromMainTexture" in SS,
            get: SS => SS.useRoughnessFromMainTexture,
            set: (SS, HS) => {
              SS.useRoughnessFromMainTexture = HS
            }
          },
          metadata: HS
        }, ES, LS), (0, JS.j)(SS, null, KS, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: SS => "roughness" in SS,
            get: SS => SS.roughness,
            set: (SS, HS) => {
              SS.roughness = HS
            }
          },
          metadata: HS
        }, YS, AS), (0, JS.j)(SS, null, jS, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: SS => "textureRoughness" in SS,
            get: SS => SS.textureRoughness,
            set: (SS, HS) => {
              SS.textureRoughness = HS
            }
          },
          metadata: HS
        }, yS, VS), (0, JS.j)(SS, null, GS, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: SS => "albedoScaling" in SS,
            get: SS => SS.albedoScaling,
            set: (SS, HS) => {
              SS.albedoScaling = HS
            }
          },
          metadata: HS
        }, iS, WS), (0, JS.j)(null, null, IS, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: SS => "intensity" in SS,
            get: SS => SS.intensity,
            set: (SS, HS) => {
              SS.intensity = HS
            }
          },
          metadata: HS
        }, wS, hS), (0, JS.j)(null, null, fS, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: SS => "color" in SS,
            get: SS => SS.color,
            set: (SS, HS) => {
              SS.color = HS
            }
          },
          metadata: HS
        }, ZS, dS), HS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: HS
        })
      })(), SS
    })();
    class NH extends US.c {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let qH = (() => {
      var SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS, fS, kS, aS, KS, jS, GS;
      let CS, nS, PS, QS, DS, wS, hS, ZS, dS, cS, vS, ES, LS, YS, AS, yS, VS, iS, zS, US, sS, BS, MS, RS, TS, oS, mS, rS, SH, HH, gH = pS.e,
        tH = [],
        bH = [],
        XH = [],
        xH = [],
        qH = [],
        uH = [],
        IH = [],
        fH = [],
        kH = [],
        aH = [],
        KH = [],
        jH = [],
        GH = [],
        CH = [],
        nH = [],
        PH = [],
        QH = [],
        DH = [],
        wH = [],
        hH = [],
        ZH = [],
        JH = [],
        OH = [],
        dH = [],
        cH = [],
        vH = [],
        EH = [],
        LH = [],
        YH = [],
        AH = [],
        yH = [],
        VH = [],
        iH = [],
        WH = [],
        zH = [],
        UH = [],
        pH = [],
        sH = [],
        BH = [],
        MH = [],
        FH = [],
        RH = [],
        TH = [],
        oH = [],
        lH = [],
        mH = [],
        eH = [],
        rH = [],
        Sg = [],
        Hg = [],
        gg = [],
        tg = [],
        bg = [],
        Xg = [],
        xg = [],
        Ng = [],
        qg = [],
        ug = [],
        Ig = [],
        fg = [];
      return SS = class extends gH {
        get isRefractionEnabled() {
          return (0, JS.e)(this, HS, "f")
        }
        set isRefractionEnabled(SS) {
          (0, JS.h)(this, HS, SS, "f")
        }
        get isTranslucencyEnabled() {
          return (0, JS.e)(this, gS, "f")
        }
        set isTranslucencyEnabled(SS) {
          (0, JS.h)(this, gS, SS, "f")
        }
        get isDispersionEnabled() {
          return (0, JS.e)(this, tS, "f")
        }
        set isDispersionEnabled(SS) {
          (0, JS.h)(this, tS, SS, "f")
        }
        get isScatteringEnabled() {
          return (0, JS.e)(this, bS, "f")
        }
        set isScatteringEnabled(SS) {
          (0, JS.h)(this, bS, SS, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(SS) {
          this._scene.enableSubSurfaceForPrePass() && SS && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(SS))
        }
        get useAlbedoToTintRefraction() {
          return (0, JS.e)(this, XS, "f")
        }
        set useAlbedoToTintRefraction(SS) {
          (0, JS.h)(this, XS, SS, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, JS.e)(this, xS, "f")
        }
        set useAlbedoToTintTranslucency(SS) {
          (0, JS.h)(this, xS, SS, "f")
        }
        get thicknessTexture() {
          return (0, JS.e)(this, NS, "f")
        }
        set thicknessTexture(SS) {
          (0, JS.h)(this, NS, SS, "f")
        }
        get refractionTexture() {
          return (0, JS.e)(this, qS, "f")
        }
        set refractionTexture(SS) {
          (0, JS.h)(this, qS, SS, "f")
        }
        get indexOfRefraction() {
          return (0, JS.e)(this, uS, "f")
        }
        set indexOfRefraction(SS) {
          (0, JS.h)(this, uS, SS, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(SS) {
          const HS = SS >= 1 ? SS : -1;
          this._volumeIndexOfRefraction !== HS && (this._volumeIndexOfRefraction = HS, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, JS.e)(this, IS, "f")
        }
        set invertRefractionY(SS) {
          (0, JS.h)(this, IS, SS, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, JS.e)(this, fS, "f")
        }
        set linkRefractionWithTransparency(SS) {
          (0, JS.h)(this, fS, SS, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, JS.e)(this, kS, "f")
        }
        set useMaskFromThicknessTexture(SS) {
          (0, JS.h)(this, kS, SS, "f")
        }
        get refractionIntensityTexture() {
          return (0, JS.e)(this, aS, "f")
        }
        set refractionIntensityTexture(SS) {
          (0, JS.h)(this, aS, SS, "f")
        }
        get translucencyIntensityTexture() {
          return (0, JS.e)(this, KS, "f")
        }
        set translucencyIntensityTexture(SS) {
          (0, JS.h)(this, KS, SS, "f")
        }
        get translucencyColorTexture() {
          return (0, JS.e)(this, jS, "f")
        }
        set translucencyColorTexture(SS) {
          (0, JS.h)(this, jS, SS, "f")
        }
        get useGltfStyleTextures() {
          return (0, JS.e)(this, GS, "f")
        }
        set useGltfStyleTextures(SS) {
          (0, JS.h)(this, GS, SS, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(SS) {
          this.legacyTranslucency = SS
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
        constructor(CS) {
          let nS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(CS, "PBRSubSurface", 130, new NH, nS), this._isRefractionEnabled = !1, HS.set(this, (0, JS.k)(this, tH, !1)), this._isTranslucencyEnabled = ((0, JS.k)(this, bH), !1), gS.set(this, (0, JS.k)(this, XH, !1)), this._isDispersionEnabled = ((0, JS.k)(this, xH), !1), tS.set(this, (0, JS.k)(this, qH, !1)), this._isScatteringEnabled = ((0, JS.k)(this, uH), !1), bS.set(this, (0, JS.k)(this, IH, !1)), this._scatteringDiffusionProfileIndex = ((0, JS.k)(this, fH), (0, JS.k)(this, kH, 0)), this.refractionIntensity = ((0, JS.k)(this, aH), (0, JS.k)(this, KH, 1)), this.translucencyIntensity = ((0, JS.k)(this, jH), (0, JS.k)(this, GH, 1)), this._useAlbedoToTintRefraction = ((0, JS.k)(this, CH), !1), XS.set(this, (0, JS.k)(this, nH, !1)), this._useAlbedoToTintTranslucency = ((0, JS.k)(this, PH), !1), xS.set(this, (0, JS.k)(this, QH, !1)), this._thicknessTexture = ((0, JS.k)(this, DH), null), NS.set(this, (0, JS.k)(this, wH, null)), this._refractionTexture = ((0, JS.k)(this, hH), null), qS.set(this, (0, JS.k)(this, ZH, null)), this._indexOfRefraction = ((0, JS.k)(this, JH), 1.5), uS.set(this, (0, JS.k)(this, OH, 1.5)), this._volumeIndexOfRefraction = ((0, JS.k)(this, dH), (0, JS.k)(this, cH, -1)), this._invertRefractionY = ((0, JS.k)(this, vH), !1), IS.set(this, (0, JS.k)(this, EH, !1)), this._linkRefractionWithTransparency = ((0, JS.k)(this, LH), !1), fS.set(this, (0, JS.k)(this, YH, !1)), this.minimumThickness = ((0, JS.k)(this, AH), (0, JS.k)(this, yH, 0)), this.maximumThickness = ((0, JS.k)(this, VH), (0, JS.k)(this, iH, 1)), this.useThicknessAsDepth = ((0, JS.k)(this, WH), (0, JS.k)(this, zH, !1)), this.tintColor = ((0, JS.k)(this, UH), (0, JS.k)(this, pH, FS.b.White())), this.tintColorAtDistance = ((0, JS.k)(this, sH), (0, JS.k)(this, BH, 1)), this.dispersion = ((0, JS.k)(this, MH), (0, JS.k)(this, FH, 0)), this.diffusionDistance = ((0, JS.k)(this, RH), (0, JS.k)(this, TH, FS.b.White())), this._useMaskFromThicknessTexture = ((0, JS.k)(this, oH), !1), kS.set(this, (0, JS.k)(this, lH, !1)), this._refractionIntensityTexture = ((0, JS.k)(this, mH), null), aS.set(this, (0, JS.k)(this, eH, null)), this._translucencyIntensityTexture = ((0, JS.k)(this, rH), null), KS.set(this, (0, JS.k)(this, Sg, null)), this.translucencyColor = ((0, JS.k)(this, Hg), (0, JS.k)(this, gg, null)), this._translucencyColorTexture = ((0, JS.k)(this, tg), null), jS.set(this, (0, JS.k)(this, bg, null)), this._useGltfStyleTextures = ((0, JS.k)(this, Xg), !0), GS.set(this, (0, JS.k)(this, xg, !0)), this.applyAlbedoAfterSubSurface = ((0, JS.k)(this, Ng), (0, JS.k)(this, qg, SS.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, JS.k)(this, ug), (0, JS.k)(this, Ig, SS.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, JS.k)(this, fg), this._scene = CS.lL(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = CS._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = CS._dirtyCallbacks[32]
        }
        isReadyForSubMesh(SS, HS) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (SS._areTexturesDirty && HS.texturesEnabled) {
            if (this._thicknessTexture && lS.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && lS.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && lS.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && lS.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const SS = this._getRefractionTexture(HS);
            if (SS && lS.e.RefractionTextureEnabled && !SS.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(SS, HS) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return SS.SUBSURFACE = !1, SS.SS_DISPERSION = !1, SS.SS_TRANSLUCENCY = !1, SS.SS_SCATTERING = !1, SS.SS_REFRACTION = !1, SS.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, SS.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, SS.SS_THICKNESSANDMASK_TEXTURE = !1, SS.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, SS.SS_HAS_THICKNESS = !1, SS.SS_REFRACTIONINTENSITY_TEXTURE = !1, SS.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, SS.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, SS.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, SS.SS_REFRACTIONMAP_3D = !1, SS.SS_REFRACTIONMAP_OPPOSITEZ = !1, SS.SS_LODINREFRACTIONALPHA = !1, SS.SS_GAMMAREFRACTION = !1, SS.SS_RGBDREFRACTION = !1, SS.SS_LINEARSPECULARREFRACTION = !1, SS.SS_LINKREFRACTIONTOTRANSPARENCY = !1, SS.SS_ALBEDOFORREFRACTIONTINT = !1, SS.SS_ALBEDOFORTRANSLUCENCYTINT = !1, SS.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, SS.SS_USE_THICKNESS_AS_DEPTH = !1, SS.SS_USE_GLTF_TEXTURES = !1, SS.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, SS.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, SS.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(SS.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (SS._areTexturesDirty) {
            if (SS.SUBSURFACE = !0, SS.SS_DISPERSION = this._isDispersionEnabled, SS.SS_TRANSLUCENCY = this._isTranslucencyEnabled, SS.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, SS.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, SS.SS_SCATTERING = this._isScatteringEnabled, SS.SS_THICKNESSANDMASK_TEXTURE = !1, SS.SS_REFRACTIONINTENSITY_TEXTURE = !1, SS.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, SS.SS_HAS_THICKNESS = !1, SS.SS_USE_GLTF_TEXTURES = !1, SS.SS_REFRACTION = !1, SS.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, SS.SS_REFRACTIONMAP_3D = !1, SS.SS_GAMMAREFRACTION = !1, SS.SS_RGBDREFRACTION = !1, SS.SS_LINEARSPECULARREFRACTION = !1, SS.SS_REFRACTIONMAP_OPPOSITEZ = !1, SS.SS_LODINREFRACTIONALPHA = !1, SS.SS_LINKREFRACTIONTOTRANSPARENCY = !1, SS.SS_ALBEDOFORREFRACTIONTINT = !1, SS.SS_ALBEDOFORTRANSLUCENCYTINT = !1, SS.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, SS.SS_USE_THICKNESS_AS_DEPTH = !1, SS.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, SS.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, SS._areTexturesDirty && HS.texturesEnabled && (this._thicknessTexture && lS.e.ThicknessTextureEnabled && (0, eS.X)(this._thicknessTexture, SS, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && lS.e.RefractionIntensityTextureEnabled && (0, eS.X)(this._refractionIntensityTexture, SS, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && lS.e.TranslucencyIntensityTextureEnabled && (0, eS.X)(this._translucencyIntensityTexture, SS, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && lS.e.TranslucencyColorTextureEnabled && ((0, eS.X)(this._translucencyColorTexture, SS, "SS_TRANSLUCENCYCOLOR_TEXTURE"), SS.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), SS.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, SS.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, SS.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, SS.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && HS.texturesEnabled) {
              const gS = this._getRefractionTexture(HS);
              gS && lS.e.RefractionTextureEnabled && (SS.SS_REFRACTION = !0, SS.SS_REFRACTIONMAP_3D = gS.isCube, SS.SS_GAMMAREFRACTION = gS.gammaSpace, SS.SS_RGBDREFRACTION = gS.isRGBD, SS.SS_LINEARSPECULARREFRACTION = gS.linearSpecularLOD, SS.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && gS.isCube ? !gS.invertZ : gS.invertZ, SS.SS_LODINREFRACTIONALPHA = gS.lodLevelInAlpha, SS.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, SS.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, SS.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = gS.isCube && gS.boundingBoxSize, SS.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (SS.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(SS, HS, gS, tS) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) SS.updateFloat2("vThicknessParam", 0, 0);
            else {
              tS.getRenderingMesh().getWorldMatrix().decompose(WS.l.VK[0]);
              const HS = Math.max(Math.abs(WS.l.VK[0].x), Math.abs(WS.l.VK[0].y), Math.abs(WS.l.VK[0].z));
              SS.updateFloat2("vThicknessParam", this.minimumThickness * HS, (this.maximumThickness - this.minimumThickness) * HS)
            }
        }
        bindForSubMesh(SS, HS, gS, tS) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const bS = tS.materialDefines,
            XS = this._material.isFrozen,
            xS = this._material.realTimeFiltering,
            NS = bS.LODBASEDMICROSFURACE,
            qS = this._getRefractionTexture(HS);
          if (!SS.useUbo || !XS || !SS.isSync) {
            if (this._thicknessTexture && lS.e.ThicknessTextureEnabled && (SS.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, eS.y)(this._thicknessTexture, SS, "thickness")), this._refractionIntensityTexture && lS.e.RefractionIntensityTextureEnabled && bS.SS_REFRACTIONINTENSITY_TEXTURE && (SS.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, eS.y)(this._refractionIntensityTexture, SS, "refractionIntensity")), this._translucencyColorTexture && lS.e.TranslucencyColorTextureEnabled && bS.SS_TRANSLUCENCYCOLOR_TEXTURE && (SS.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, eS.y)(this._translucencyColorTexture, SS, "translucencyColor")), this._translucencyIntensityTexture && lS.e.TranslucencyIntensityTextureEnabled && bS.SS_TRANSLUCENCYINTENSITY_TEXTURE && (SS.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, eS.y)(this._translucencyIntensityTexture, SS, "translucencyIntensity")), qS && lS.e.RefractionTextureEnabled) {
              SS.J7("refractionMatrix", qS.getRefractionTextureMatrix());
              let HS = 1;
              qS.isCube || qS.depth && (HS = qS.depth);
              const gS = qS.getSize().width,
                tS = this.volumeIndexOfRefraction;
              if (SS.updateFloat4("vRefractionInfos", qS.level, 1 / tS, HS, this._invertRefractionY ? -1 : 1), SS.updateFloat4("vRefractionMicrosurfaceInfos", gS, qS.lodGenerationScale, qS.lodGenerationOffset, 1 / this.indexOfRefraction), xS && SS.updateFloat2("vRefractionFilteringInfo", gS, Math.log2(gS)), qS.boundingBoxSize) {
                const HS = qS;
                SS.updateVector3("vRefractionPosition", HS.boundingBoxPosition), SS.updateVector3("vRefractionSize", HS.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && SS.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), SS.updateColor3("vDiffusionDistance", this.diffusionDistance), SS.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), SS.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), SS.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), SS.updateFloat("dispersion", this.dispersion)
          }
          HS.texturesEnabled && (this._thicknessTexture && lS.e.ThicknessTextureEnabled && SS.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && lS.e.RefractionIntensityTextureEnabled && bS.SS_REFRACTIONINTENSITY_TEXTURE && SS.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && lS.e.TranslucencyIntensityTextureEnabled && bS.SS_TRANSLUCENCYINTENSITY_TEXTURE && SS.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && lS.e.TranslucencyColorTextureEnabled && bS.SS_TRANSLUCENCYCOLOR_TEXTURE && SS.setTexture("translucencyColorSampler", this._translucencyColorTexture), qS && lS.e.RefractionTextureEnabled && (NS ? SS.setTexture("refractionSampler", qS) : (SS.setTexture("refractionSampler", qS._lodTextureMid || qS), SS.setTexture("refractionSamplerLow", qS._lodTextureLow || qS), SS.setTexture("refractionSamplerHigh", qS._lodTextureHigh || qS))))
        }
        _getRefractionTexture(SS) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? SS.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(SS) {
          lS.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && SS.push(this._refractionTexture)
        }
        hasTexture(SS) {
          return this._thicknessTexture === SS || (this._refractionTexture === SS || (this._refractionIntensityTexture === SS || (this._translucencyIntensityTexture === SS || this._translucencyColorTexture === SS)))
        }
        hasRenderTargetTextures() {
          return !!(lS.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(SS) {
          this._thicknessTexture && SS.push(this._thicknessTexture), this._refractionTexture && SS.push(this._refractionTexture), this._refractionIntensityTexture && SS.push(this._refractionIntensityTexture), this._translucencyColorTexture && SS.push(this._translucencyColorTexture), this._translucencyIntensityTexture && SS.push(this._translucencyIntensityTexture)
        }
        getAnimatables(SS) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && SS.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && SS.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && SS.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && SS.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && SS.push(this._translucencyIntensityTexture)
        }
        dispose(SS) {
          SS && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(SS, HS, gS) {
          return SS.SS_SCATTERING && HS.addFallback(gS++, "SS_SCATTERING"), SS.SS_TRANSLUCENCY && HS.addFallback(gS++, "SS_TRANSLUCENCY"), gS
        }
        getSamplers(SS) {
          SS.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, HS = new WeakMap, gS = new WeakMap, tS = new WeakMap, bS = new WeakMap, XS = new WeakMap, xS = new WeakMap, NS = new WeakMap, qS = new WeakMap, uS = new WeakMap, IS = new WeakMap, fS = new WeakMap, kS = new WeakMap, aS = new WeakMap, KS = new WeakMap, jS = new WeakMap, GS = new WeakMap, (() => {
        const HS = "function" === typeof Symbol && Symbol.metadata ? Object.create(gH[Symbol.metadata] ?? null) : void 0;
        CS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], nS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], PS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], QS = [(0, OS.M)(), (0, OS.d)("_markScenePrePassDirty")], DS = [(0, OS.M)()], wS = [(0, OS.M)()], hS = [(0, OS.M)()], ZS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], dS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], cS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], vS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], ES = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], LS = [(0, OS.M)()], YS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], AS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], yS = [(0, OS.M)()], VS = [(0, OS.M)()], iS = [(0, OS.M)()], zS = [(0, OS.k)()], US = [(0, OS.M)()], sS = [(0, OS.M)()], BS = [(0, OS.k)()], MS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], RS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], TS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], oS = [(0, OS.k)()], mS = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], rS = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], SH = [(0, OS.M)()], HH = [(0, OS.M)()], (0, JS.j)(SS, null, CS, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: SS => "isRefractionEnabled" in SS,
            get: SS => SS.isRefractionEnabled,
            set: (SS, HS) => {
              SS.isRefractionEnabled = HS
            }
          },
          metadata: HS
        }, tH, bH), (0, JS.j)(SS, null, nS, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: SS => "isTranslucencyEnabled" in SS,
            get: SS => SS.isTranslucencyEnabled,
            set: (SS, HS) => {
              SS.isTranslucencyEnabled = HS
            }
          },
          metadata: HS
        }, XH, xH), (0, JS.j)(SS, null, PS, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: SS => "isDispersionEnabled" in SS,
            get: SS => SS.isDispersionEnabled,
            set: (SS, HS) => {
              SS.isDispersionEnabled = HS
            }
          },
          metadata: HS
        }, qH, uH), (0, JS.j)(SS, null, QS, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: SS => "isScatteringEnabled" in SS,
            get: SS => SS.isScatteringEnabled,
            set: (SS, HS) => {
              SS.isScatteringEnabled = HS
            }
          },
          metadata: HS
        }, IH, fH), (0, JS.j)(SS, null, ZS, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: SS => "useAlbedoToTintRefraction" in SS,
            get: SS => SS.useAlbedoToTintRefraction,
            set: (SS, HS) => {
              SS.useAlbedoToTintRefraction = HS
            }
          },
          metadata: HS
        }, nH, PH), (0, JS.j)(SS, null, dS, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: SS => "useAlbedoToTintTranslucency" in SS,
            get: SS => SS.useAlbedoToTintTranslucency,
            set: (SS, HS) => {
              SS.useAlbedoToTintTranslucency = HS
            }
          },
          metadata: HS
        }, QH, DH), (0, JS.j)(SS, null, cS, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "thicknessTexture" in SS,
            get: SS => SS.thicknessTexture,
            set: (SS, HS) => {
              SS.thicknessTexture = HS
            }
          },
          metadata: HS
        }, wH, hH), (0, JS.j)(SS, null, vS, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "refractionTexture" in SS,
            get: SS => SS.refractionTexture,
            set: (SS, HS) => {
              SS.refractionTexture = HS
            }
          },
          metadata: HS
        }, ZH, JH), (0, JS.j)(SS, null, ES, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: SS => "indexOfRefraction" in SS,
            get: SS => SS.indexOfRefraction,
            set: (SS, HS) => {
              SS.indexOfRefraction = HS
            }
          },
          metadata: HS
        }, OH, dH), (0, JS.j)(SS, null, YS, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: SS => "invertRefractionY" in SS,
            get: SS => SS.invertRefractionY,
            set: (SS, HS) => {
              SS.invertRefractionY = HS
            }
          },
          metadata: HS
        }, EH, LH), (0, JS.j)(SS, null, AS, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: SS => "linkRefractionWithTransparency" in SS,
            get: SS => SS.linkRefractionWithTransparency,
            set: (SS, HS) => {
              SS.linkRefractionWithTransparency = HS
            }
          },
          metadata: HS
        }, YH, AH), (0, JS.j)(SS, null, MS, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "useMaskFromThicknessTexture" in SS,
            get: SS => SS.useMaskFromThicknessTexture,
            set: (SS, HS) => {
              SS.useMaskFromThicknessTexture = HS
            }
          },
          metadata: HS
        }, lH, mH), (0, JS.j)(SS, null, RS, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "refractionIntensityTexture" in SS,
            get: SS => SS.refractionIntensityTexture,
            set: (SS, HS) => {
              SS.refractionIntensityTexture = HS
            }
          },
          metadata: HS
        }, eH, rH), (0, JS.j)(SS, null, TS, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "translucencyIntensityTexture" in SS,
            get: SS => SS.translucencyIntensityTexture,
            set: (SS, HS) => {
              SS.translucencyIntensityTexture = HS
            }
          },
          metadata: HS
        }, Sg, Hg), (0, JS.j)(SS, null, mS, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "translucencyColorTexture" in SS,
            get: SS => SS.translucencyColorTexture,
            set: (SS, HS) => {
              SS.translucencyColorTexture = HS
            }
          },
          metadata: HS
        }, bg, Xg), (0, JS.j)(SS, null, rS, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: SS => "useGltfStyleTextures" in SS,
            get: SS => SS.useGltfStyleTextures,
            set: (SS, HS) => {
              SS.useGltfStyleTextures = HS
            }
          },
          metadata: HS
        }, xg, Ng), (0, JS.j)(null, null, DS, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: SS => "_scatteringDiffusionProfileIndex" in SS,
            get: SS => SS._scatteringDiffusionProfileIndex,
            set: (SS, HS) => {
              SS._scatteringDiffusionProfileIndex = HS
            }
          },
          metadata: HS
        }, kH, aH), (0, JS.j)(null, null, wS, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: SS => "refractionIntensity" in SS,
            get: SS => SS.refractionIntensity,
            set: (SS, HS) => {
              SS.refractionIntensity = HS
            }
          },
          metadata: HS
        }, KH, jH), (0, JS.j)(null, null, hS, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: SS => "translucencyIntensity" in SS,
            get: SS => SS.translucencyIntensity,
            set: (SS, HS) => {
              SS.translucencyIntensity = HS
            }
          },
          metadata: HS
        }, GH, CH), (0, JS.j)(null, null, LS, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: SS => "_volumeIndexOfRefraction" in SS,
            get: SS => SS._volumeIndexOfRefraction,
            set: (SS, HS) => {
              SS._volumeIndexOfRefraction = HS
            }
          },
          metadata: HS
        }, cH, vH), (0, JS.j)(null, null, yS, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: SS => "minimumThickness" in SS,
            get: SS => SS.minimumThickness,
            set: (SS, HS) => {
              SS.minimumThickness = HS
            }
          },
          metadata: HS
        }, yH, VH), (0, JS.j)(null, null, VS, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: SS => "maximumThickness" in SS,
            get: SS => SS.maximumThickness,
            set: (SS, HS) => {
              SS.maximumThickness = HS
            }
          },
          metadata: HS
        }, iH, WH), (0, JS.j)(null, null, iS, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: SS => "useThicknessAsDepth" in SS,
            get: SS => SS.useThicknessAsDepth,
            set: (SS, HS) => {
              SS.useThicknessAsDepth = HS
            }
          },
          metadata: HS
        }, zH, UH), (0, JS.j)(null, null, zS, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: SS => "tintColor" in SS,
            get: SS => SS.tintColor,
            set: (SS, HS) => {
              SS.tintColor = HS
            }
          },
          metadata: HS
        }, pH, sH), (0, JS.j)(null, null, US, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: SS => "tintColorAtDistance" in SS,
            get: SS => SS.tintColorAtDistance,
            set: (SS, HS) => {
              SS.tintColorAtDistance = HS
            }
          },
          metadata: HS
        }, BH, MH), (0, JS.j)(null, null, sS, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: SS => "dispersion" in SS,
            get: SS => SS.dispersion,
            set: (SS, HS) => {
              SS.dispersion = HS
            }
          },
          metadata: HS
        }, FH, RH), (0, JS.j)(null, null, BS, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: SS => "diffusionDistance" in SS,
            get: SS => SS.diffusionDistance,
            set: (SS, HS) => {
              SS.diffusionDistance = HS
            }
          },
          metadata: HS
        }, TH, oH), (0, JS.j)(null, null, oS, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: SS => "translucencyColor" in SS,
            get: SS => SS.translucencyColor,
            set: (SS, HS) => {
              SS.translucencyColor = HS
            }
          },
          metadata: HS
        }, gg, tg), (0, JS.j)(null, null, SH, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: SS => "applyAlbedoAfterSubSurface" in SS,
            get: SS => SS.applyAlbedoAfterSubSurface,
            set: (SS, HS) => {
              SS.applyAlbedoAfterSubSurface = HS
            }
          },
          metadata: HS
        }, qg, ug), (0, JS.j)(null, null, HH, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: SS => "legacyTranslucency" in SS,
            get: SS => SS.legacyTranslucency,
            set: (SS, HS) => {
              SS.legacyTranslucency = HS
            }
          },
          metadata: HS
        }, Ig, fg), HS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: HS
        })
      })(), SS.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, SS.DEFAULT_LEGACY_TRANSLUCENCY = !1, SS
    })();
    var uH = gS(40396),
      IH = gS(40375),
      fH = gS(40405),
      kH = gS(40412),
      aH = gS(40414),
      KH = gS(40418),
      jH = gS(40421),
      GH = gS(40428),
      CH = gS(39926);
    const nH = {
      effect: null,
      subMesh: null
    };
    class PH extends((0, jH.c)((0, KH.c)(US.c))) {}
    class QH extends((0, RS.e)(PH)) {
      constructor(SS) {
        super(SS), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class DH extends((0, GH.b)(oS.d)) {}
    let wH = (() => {
      var SS, HS;
      let tS, bS = DH,
        xS = [],
        NS = [];
      return SS = class extends bS {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(SS) {
          this._realTimeFiltering = SS, this.OHS(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(SS) {
          this._realTimeFilteringQuality = SS, this.OHS(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, JS.e)(this, HS, "f")
        }
        set debugMode(SS) {
          (0, JS.h)(this, HS, SS, "f")
        }
        constructor(gS, tS) {
          super(gS, tS, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || SS.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new WS.r(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = SS.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = FS.b.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new FS.b(0, 0, 0), this._albedoColor = new FS.b(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new FS.b(1, 1, 1), this._reflectionColor = new FS.b(1, 1, 1), this._emissiveColor = new FS.b(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = SS.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new cS.f(16), this._globalAmbientColor = new FS.b(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, HS.set(this, (0, JS.k)(this, xS, 0)), this.debugLimit = ((0, JS.k)(this, NS), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new BS(this), this.clearCoat = new SH(this), this.iridescence = new gH(this), this.anisotropy = new bH(this), this.sheen = new xH(this), this.subSurface = new qH(this), this.detailMap = new uH.e(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), lS.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = AS(this.lL()), this.prePassConfiguration = new MS.d
        }
        get hasRenderTargetTextures() {
          return !!(lS.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === SS.PBRMATERIAL_OPAQUE || this._transparencyMode === SS.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === SS.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== SS.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(SS, HS, gS) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const tS = HS._drawWrapper;
          if (tS.effect && this.isFrozen && tS._wasPreviouslyReady && tS._wasPreviouslyUsingInstances === gS) return !0;
          HS.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), HS.materialDefines = new QH(this._eventInfo.defineNames));
          const bS = HS.materialDefines;
          if (this._isReadyForSubMesh(HS)) return !0;
          const XS = this.lL(),
            xS = XS.AK();
          if (bS._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, XS.texturesEnabled)) {
            if (this._albedoTexture && lS.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && lS.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && lS.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && lS.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && lS.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const SS = this._getReflectionTexture();
            if (SS && lS.e.ReflectionTextureEnabled) {
              if (!SS.isReadyOrNotBlocking()) return !1;
              if (SS.irradianceTexture) {
                if (!SS.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!SS.sphericalPolynomial && SS.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && lS.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && lS.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (lS.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (xS.getCaps().standardDerivatives && this._bumpTexture && lS.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && lS.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = bS, this._eventInfo.subMesh = HS, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (bS._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (bS.AREALIGHTUSED || bS.CLUSTLIGHT_BATCH)
            for (let fS = 0; fS < SS.lightSources.length; fS++)
              if (!SS.lightSources[fS]._isReady()) return !1;
          if (xS.getCaps().standardDerivatives || SS.isVerticesDataPresent(zS.h.NormalKind) || (SS.createNormals(!0), dS.b.Warn("PBRMaterial: Normals have been created for the mesh: " + SS.name)), !(0, eS.c)(XS, SS, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const NS = HS.effect,
            qS = bS._areLightsDisposed,
            uS = this._prepareEffect(SS, HS.getRenderingMesh(), bS, this.onCompiled, this.onError, gS, null);
          let IS = !1;
          if (uS)
            if (this._onEffectCreatedObservable && (nH.effect = uS, nH.subMesh = HS, this._onEffectCreatedObservable.notifyObservers(nH)), this.allowShaderHotSwapping && NS && !uS.isReady()) {
              if (bS.markAsUnprocessed(), IS = this.isFrozen, qS) return bS._areLightsDisposed = !0, !1
            } else XS.resetCachedMaterial(), HS.setEffect(uS, bS, this._materialContext);
          return !(!HS.effect || !HS.effect.isReady()) && (bS._renderId = XS.getRenderId(), tS._wasPreviouslyReady = !IS, tS._wasPreviouslyUsingInstances = !!gS, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(HS, gS, tS) {
          let bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            xS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            NS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(HS, gS, tS, xS, NS), !tS.isDirty) return null;
          tS.markAsProcessed();
          const qS = this.lL().AK(),
            uS = new mS.c;
          let IS = 0;
          tS.USESPHERICALINVERTEX && uS.addFallback(IS++, "USESPHERICALINVERTEX"), tS.FOG && uS.addFallback(IS, "FOG"), tS.SPECULARAA && uS.addFallback(IS, "SPECULARAA"), tS.POINTSIZE && uS.addFallback(IS, "POINTSIZE"), tS.LOGARITHMICDEPTH && uS.addFallback(IS, "LOGARITHMICDEPTH"), tS.PARALLAX && uS.addFallback(IS, "PARALLAX"), tS.PARALLAX_RHS && uS.addFallback(IS, "PARALLAX_RHS"), tS.PARALLAXOCCLUSION && uS.addFallback(IS++, "PARALLAXOCCLUSION"), tS.ENVIRONMENTBRDF && uS.addFallback(IS++, "ENVIRONMENTBRDF"), tS.TANGENT && uS.addFallback(IS++, "TANGENT"), tS.BUMP && uS.addFallback(IS++, "BUMP"), IS = (0, eS.z)(tS, uS, this._maxSimultaneousLights, IS), tS.SPECULARTERM && uS.addFallback(IS++, "SPECULARTERM"), tS.USESPHERICALFROMREFLECTIONMAP && uS.addFallback(IS++, "USESPHERICALFROMREFLECTIONMAP"), tS.USEIRRADIANCEMAP && uS.addFallback(IS++, "USEIRRADIANCEMAP"), tS.LIGHTMAP && uS.addFallback(IS++, "LIGHTMAP"), tS.NORMAL && uS.addFallback(IS++, "NORMAL"), tS.AMBIENT && uS.addFallback(IS++, "AMBIENT"), tS.EMISSIVE && uS.addFallback(IS++, "EMISSIVE"), tS.VERTEXCOLOR && uS.addFallback(IS++, "VERTEXCOLOR"), tS.MORPHTARGETS && uS.addFallback(IS++, "MORPHTARGETS"), tS.MULTIVIEW && uS.addFallback(0, "MULTIVIEW");
          const fS = [zS.h.PositionKind];
          tS.NORMAL && fS.push(zS.h.NormalKind), tS.TANGENT && fS.push(zS.h.TangentKind);
          for (let SS = 1; SS <= 6; ++SS) tS["UV" + SS] && fS.push(`uv${1===SS?"":SS}`);
          tS.VERTEXCOLOR && fS.push(zS.h.ColorKind), (0, eS.F)(fS, HS, tS, uS), (0, eS.H)(fS, tS), (0, eS.K)(fS, HS, tS), (0, eS.D)(fS, HS, tS);
          let kS = "pbr";
          const aS = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            KS = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, eS.lb)(aS, KS, !0);
          const jS = ["Material", "Scene", "Mesh"],
            GS = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: tS.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = uS, this._eventInfo.fallbackRank = IS, this._eventInfo.defines = tS, this._eventInfo.uniforms = aS, this._eventInfo.attributes = fS, this._eventInfo.samplers = KS, this._eventInfo.uniformBuffersNames = jS, this._eventInfo.customCode = void 0, this._eventInfo.mesh = HS, this._eventInfo.indexParameters = GS, this._callbackPluginEventGeneric(128, this._eventInfo), aH.d.AddUniformsAndSamplers(aS, KS), MS.d.AddUniforms(aS), MS.d.AddSamplers(KS), (0, IH.e)(aS), this._useVertexPulling) {
            const SS = gS?.geometry;
            SS && (this._vertexPullingMetadata = (0, fH.e)(SS), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((SS, HS) => {
              aS.push(`vp_${HS}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          TS.d && (TS.d.PrepareUniforms(aS, tS), TS.d.PrepareSamplers(KS, tS)), (0, eS.ob)({
            uniformsNames: aS,
            uniformBuffersNames: jS,
            samplers: KS,
            defines: tS,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const CS = {};
          this.customShaderNameResolve && (kS = this.customShaderNameResolve(kS, aS, jS, KS, tS, fS, CS));
          const nS = tS.toString(),
            PS = qS.createEffect(kS, {
              attributes: fS,
              uniformsNames: aS,
              uniformBuffersNames: jS,
              samplers: KS,
              defines: nS,
              fallbacks: uS,
              onCompiled: bS,
              onError: XS,
              indexParameters: GS,
              processFinalCode: CS.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: tS.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: SS._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, qS);
          return this._eventInfo.customCode = void 0, PS
        }
        _prepareDefines(HS, gS, tS) {
          let bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const xS = gS.hasThinInstances,
            NS = this.lL(),
            qS = NS.AK();
          (0, eS.T)(NS, HS, tS, !0, this._maxSimultaneousLights, this._disableLighting), tS._needNormals = !0, (0, eS.bb)(NS, tS);
          const uS = this.needAlphaBlendingForMesh(HS) && this.lL().useOrderIndependentTransparency;
          if ((0, eS.eb)(NS, tS, this.canRenderToMRT && !uS), (0, eS.db)(NS, tS, uS), aH.d.PrepareDefines(qS.currentRenderPassId, HS, tS), tS.METALLICWORKFLOW = this.isMetallicWorkflow(), tS._areTexturesDirty) {
            tS._needUVs = !1;
            for (let SS = 1; SS <= 6; ++SS) tS["MAINUV" + SS] = !1;
            if (NS.texturesEnabled) {
              tS.ALBEDODIRECTUV = 0, tS.BASE_WEIGHTDIRECTUV = 0, tS.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, tS.AMBIENTDIRECTUV = 0, tS.OPACITYDIRECTUV = 0, tS.EMISSIVEDIRECTUV = 0, tS.REFLECTIVITYDIRECTUV = 0, tS.MICROSURFACEMAPDIRECTUV = 0, tS.METALLIC_REFLECTANCEDIRECTUV = 0, tS.REFLECTANCEDIRECTUV = 0, tS.BUMPDIRECTUV = 0, tS.LIGHTMAPDIRECTUV = 0, qS.getCaps().textureLOD && (tS.LODBASEDMICROSFURACE = !0), this._albedoTexture && lS.e.DiffuseTextureEnabled ? ((0, eS.X)(this._albedoTexture, tS, "ALBEDO"), tS.GAMMAALBEDO = this._albedoTexture.gammaSpace) : tS.ALBEDO = !1, this._baseWeightTexture && lS.e.BaseWeightTextureEnabled ? (0, eS.X)(this._baseWeightTexture, tS, "BASE_WEIGHT") : tS.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && lS.e.BaseDiffuseRoughnessTextureEnabled ? (0, eS.X)(this._baseDiffuseRoughnessTexture, tS, "BASE_DIFFUSE_ROUGHNESS") : tS.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && lS.e.AmbientTextureEnabled ? ((0, eS.X)(this._ambientTexture, tS, "AMBIENT"), tS.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : tS.AMBIENT = !1, this._opacityTexture && lS.e.OpacityTextureEnabled ? ((0, eS.X)(this._opacityTexture, tS, "OPACITY"), tS.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : tS.OPACITY = !1;
              const SS = this._getReflectionTexture(),
                HS = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || qS.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, eS.S)(NS, SS, tS, this.realTimeFiltering, this.realTimeFilteringQuality, !HS), this._lightmapTexture && lS.e.LightmapTextureEnabled ? ((0, eS.X)(this._lightmapTexture, tS, "LIGHTMAP"), tS.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, tS.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, tS.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : tS.LIGHTMAP = !1, this._emissiveTexture && lS.e.EmissiveTextureEnabled ? ((0, eS.X)(this._emissiveTexture, tS, "EMISSIVE"), tS.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : tS.EMISSIVE = !1, lS.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, eS.X)(this._metallicTexture, tS, "REFLECTIVITY"), tS.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, tS.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, tS.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, tS.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, tS.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, eS.X)(this._reflectivityTexture, tS, "REFLECTIVITY"), tS.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, tS.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, tS.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : tS.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (tS.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, eS.X)(this._metallicReflectanceTexture, tS, "METALLIC_REFLECTANCE"), tS.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : tS.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, eS.X)(this._reflectanceTexture, tS, "REFLECTANCE"), tS.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : tS.REFLECTANCE = !1) : (tS.METALLIC_REFLECTANCE = !1, tS.REFLECTANCE = !1), this._microSurfaceTexture ? (0, eS.X)(this._microSurfaceTexture, tS, "MICROSURFACEMAP") : tS.MICROSURFACEMAP = !1) : (tS.REFLECTIVITY = !1, tS.MICROSURFACEMAP = !1), qS.getCaps().standardDerivatives && this._bumpTexture && lS.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, eS.X)(this._bumpTexture, tS, "BUMP"), this._useParallax && this._albedoTexture && lS.e.DiffuseTextureEnabled ? (tS.PARALLAX = !0, tS.PARALLAX_RHS = NS.useRightHandedSystem, tS.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : tS.PARALLAX = !1, tS.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (tS.BUMP = !1, tS.PARALLAX = !1, tS.PARALLAX_RHS = !1, tS.PARALLAXOCCLUSION = !1, tS.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && lS.e.ReflectionTextureEnabled ? (tS.ENVIRONMENTBRDF = !0, tS.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (tS.ENVIRONMENTBRDF = !1, tS.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? tS.ALPHAFROMALBEDO = !0 : tS.ALPHAFROMALBEDO = !1
            }
            tS.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === SS.LIGHTFALLOFF_STANDARD ? (tS.USEPHYSICALLIGHTFALLOFF = !1, tS.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === SS.LIGHTFALLOFF_GLTF ? (tS.USEPHYSICALLIGHTFALLOFF = !1, tS.USEGLTFLIGHTFALLOFF = !0) : (tS.USEPHYSICALLIGHTFALLOFF = !0, tS.USEGLTFLIGHTFALLOFF = !1), tS.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? tS.TWOSIDEDLIGHTING = !0 : tS.TWOSIDEDLIGHTING = !1, tS.MIRRORED = !!NS._mirroredCameraPosition, tS.SPECULARAA = qS.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(tS._areTexturesDirty || tS._areMiscDirty) && (tS.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, tS.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, tS.ALPHABLEND = this.needAlphaBlendingForMesh(HS), tS.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, tS.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), tS._areTexturesDirty && (tS.TEXTURE_REPETITION_MODE = qS.version > 1 || qS.isWebGPU ? this.textureRepetitionMode : 0), tS._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(tS), tS.FORCENORMALFORWARD = this._forceNormalForward, tS.RADIANCEOCCLUSION = this._useRadianceOcclusion, tS.HORIZONOCCLUSION = this._useHorizonOcclusion, tS._areMiscDirty && ((0, eS.Z)(HS, NS, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(HS), tS, this._applyDecalMapAfterDetailMap, this._useVertexPulling, gS, this._isVertexOutputInvariant), tS.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !HS.isVerticesDataPresent(zS.h.NormalKind), tS.DEBUGMODE = this._debugMode), (0, eS.R)(NS, qS, this, tS, !!bS, XS, xS), this._eventInfo.defines = tS, this._eventInfo.mesh = HS, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, eS.O)(HS, tS, !0, !0, !0, this._transparencyMode !== SS.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(SS, HS, gS) {
          const tS = {
            clipPlane: !1,
            useInstances: !1,
            ...gS
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const gS = new QH(this._eventInfo.defineNames),
              bS = this._prepareEffect(SS, SS, gS, void 0, void 0, tS.useInstances, tS.clipPlane);
            this._onEffectCreatedObservable && (nH.effect = bS, nH.subMesh = null, this._onEffectCreatedObservable.notifyObservers(nH)), bS.isReady() ? HS && HS(this) : bS.onCompileObservable.add((() => {
              HS && HS(this)
            }))
          })()
        }
        buildUniformLayout() {
          const SS = this._uniformBuffer;
          SS.addUniform("vAlbedoInfos", 2), SS.addUniform("vBaseWeightInfos", 2), SS.addUniform("vBaseDiffuseRoughnessInfos", 2), SS.addUniform("vAmbientInfos", 4), SS.addUniform("vOpacityInfos", 2), SS.addUniform("vEmissiveInfos", 2), SS.addUniform("vLightmapInfos", 2), SS.addUniform("vReflectivityInfos", 3), SS.addUniform("vMicroSurfaceSamplerInfos", 2), SS.addUniform("vBumpInfos", 3), SS.addUniform("albedoMatrix", 16), SS.addUniform("baseWeightMatrix", 16), SS.addUniform("baseDiffuseRoughnessMatrix", 16), SS.addUniform("ambientMatrix", 16), SS.addUniform("opacityMatrix", 16), SS.addUniform("emissiveMatrix", 16), SS.addUniform("lightmapMatrix", 16), SS.addUniform("reflectivityMatrix", 16), SS.addUniform("microSurfaceSamplerMatrix", 16), SS.addUniform("bumpMatrix", 16), SS.addUniform("vTangentSpaceParams", 2), SS.addUniform("vAlbedoColor", 4), SS.addUniform("baseWeight", 1), SS.addUniform("baseDiffuseRoughness", 1), SS.addUniform("vLightingIntensity", 4), SS.addUniform("pointSize", 1), SS.addUniform("vReflectivityColor", 4), SS.addUniform("vEmissiveColor", 3), SS.addUniform("vAmbientColor", 3), SS.addUniform("vDebugMode", 2), SS.addUniform("vMetallicReflectanceFactors", 4), SS.addUniform("vMetallicReflectanceInfos", 2), SS.addUniform("metallicReflectanceMatrix", 16), SS.addUniform("vReflectanceInfos", 2), SS.addUniform("reflectanceMatrix", 16), SS.addUniform("cameraInfo", 4), SS.addUniform("vTextureRepetitionHexTilingParams", 4), (0, eS.ib)(SS, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(SS, HS, gS) {
          const tS = this.lL(),
            bS = gS.materialDefines;
          if (!bS) return;
          const XS = gS.effect;
          if (!XS) return;
          this._activeEffect = XS, HS.getMeshUniformBuffer().bindToEffect(XS, "Mesh"), HS.transferToEffect(SS);
          const xS = tS.AK();
          this._uniformBuffer.bindToEffect(XS, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, tS, HS, SS, this.isFrozen), aH.d.Bind(xS.currentRenderPassId, this._activeEffect, HS, SS, this);
          const NS = tS.activeCamera;
          NS ? this._uniformBuffer.updateFloat4("cameraInfo", NS.minZ, NS.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const qS = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", qS[0], qS[1], qS[2], qS[3]), this._eventInfo.subMesh = gS, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), bS.OBJECTSPACE_NORMALMAP && (SS.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const uS = this._mustRebind(tS, XS, gS, HS.visibility),
            IS = xS._features.needToAlwaysBindUniformBuffers;
          (0, eS.f)(HS, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, fH.b)(this._activeEffect, this._vertexPullingMetadata);
          let fS = null;
          const kS = this._uniformBuffer;
          if (uS) {
            if (this.bindViewProjection(XS), fS = this._getReflectionTexture(), !kS.useUbo || !this.isFrozen || !kS.isSync || gS._drawWrapper._forceRebindOnNextCall) {
              if (tS.texturesEnabled && (this._albedoTexture && lS.e.DiffuseTextureEnabled && (kS.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, eS.y)(this._albedoTexture, kS, "albedo")), this._baseWeightTexture && lS.e.BaseWeightTextureEnabled && (kS.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, eS.y)(this._baseWeightTexture, kS, "baseWeight")), this._baseDiffuseRoughnessTexture && lS.e.BaseDiffuseRoughnessTextureEnabled && (kS.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, eS.y)(this._baseDiffuseRoughnessTexture, kS, "baseDiffuseRoughness")), this._ambientTexture && lS.e.AmbientTextureEnabled && (kS.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, eS.y)(this._ambientTexture, kS, "ambient")), this._opacityTexture && lS.e.OpacityTextureEnabled && (kS.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, eS.y)(this._opacityTexture, kS, "opacity")), this._emissiveTexture && lS.e.EmissiveTextureEnabled && (kS.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, eS.y)(this._emissiveTexture, kS, "emissive")), this._lightmapTexture && lS.e.LightmapTextureEnabled && (kS.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, eS.y)(this._lightmapTexture, kS, "lightmap")), lS.e.SpecularTextureEnabled && (this._metallicTexture ? (kS.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, eS.y)(this._metallicTexture, kS, "reflectivity")) : this._reflectivityTexture && (kS.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, eS.y)(this._reflectivityTexture, kS, "reflectivity")), this._metallicReflectanceTexture && (kS.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, eS.y)(this._metallicReflectanceTexture, kS, "metallicReflectance")), this._reflectanceTexture && bS.REFLECTANCE && (kS.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, eS.y)(this._reflectanceTexture, kS, "reflectance")), this._microSurfaceTexture && (kS.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, eS.y)(this._microSurfaceTexture, kS, "microSurfaceSampler"))), this._bumpTexture && xS.getCaps().standardDerivatives && lS.e.BumpTextureEnabled && !this._disableBumpMap && (kS.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, eS.y)(this._bumpTexture, kS, "bump"), tS._mirroredCameraPosition ? kS.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : kS.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, eS.k)(tS, bS, kS, this._reflectionColor, fS, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && kS.updateFloat("pointSize", this.pointSize), bS.METALLICWORKFLOW) {
                FS.i.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, FS.i.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const SS = this.subSurface?._indexOfRefraction ?? 1.5,
                  HS = 1;
                FS.i.Color4[0].b = SS;
                const gS = Math.pow((SS - HS) / (SS + HS), 2);
                FS.i.Color4[0].a = gS, kS.updateDirectColor4("vReflectivityColor", FS.i.Color4[0]), kS.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else kS.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              kS.updateColor3("vEmissiveColor", lS.e.EmissiveTextureEnabled ? this._emissiveColor : FS.b.BlackReadOnly), !bS.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? kS.updateColor4("vAlbedoColor", this._albedoColor, 1) : kS.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), kS.updateFloat("baseWeight", this._baseWeight), kS.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * tS.environmentIntensity, this._lightingInfos.w = this._specularIntensity, kS.updateVector4("vLightingIntensity", this._lightingInfos), tS.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), kS.updateColor3("vAmbientColor", this._globalAmbientColor), kS.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            tS.texturesEnabled && (this._albedoTexture && lS.e.DiffuseTextureEnabled && kS.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && lS.e.BaseWeightTextureEnabled && kS.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && lS.e.BaseDiffuseRoughnessTextureEnabled && kS.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && lS.e.AmbientTextureEnabled && kS.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && lS.e.OpacityTextureEnabled && kS.setTexture("opacitySampler", this._opacityTexture), (0, eS.l)(tS, bS, kS, fS, this.realTimeFiltering), bS.ENVIRONMENTBRDF && kS.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && lS.e.EmissiveTextureEnabled && kS.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && lS.e.LightmapTextureEnabled && kS.setTexture("lightmapSampler", this._lightmapTexture), lS.e.SpecularTextureEnabled && (this._metallicTexture ? kS.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && kS.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && kS.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && bS.REFLECTANCE && kS.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && kS.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && xS.getCaps().standardDerivatives && lS.e.BumpTextureEnabled && !this._disableBumpMap && kS.setTexture("bumpSampler", this._bumpTexture)), this.lL().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(HS) && this.lL().depthPeelingRenderer.bind(XS), this._eventInfo.subMesh = gS, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, IH.f)(this._activeEffect, this, tS), this.bindEyePosition(XS)
          } else IS && (this._needToBindSceneUbo = !0);
          !uS && this.isFrozen && !IS || !tS.lightsEnabled || this._disableLighting || (0, eS.n)(tS, HS, this._activeEffect, bS, this._maxSimultaneousLights), !uS && this.isFrozen || ((tS.fogEnabled && HS.applyFog && tS.fogMode !== iS.i.FOGMODE_NONE || fS || this.subSurface.refractionTexture || HS.receiveShadows || bS.PREPASS || bS.CLUSTLIGHT_BATCH) && this.bindView(XS), (0, eS.i)(tS, HS, this._activeEffect, !0), bS.NUM_MORPH_INFLUENCERS && (0, eS.t)(HS, this._activeEffect), bS.BAKED_VERTEX_ANIMATION_TEXTURE && HS.bakedVertexAnimationManager?.bind(XS, bS.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, eS.q)(bS, this._activeEffect, tS)), this._afterBind(HS, this._activeEffect, gS), kS.update()
        }
        getAnimatables() {
          const SS = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && SS.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && SS.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && SS.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && SS.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && SS.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && SS.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && SS.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? SS.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && SS.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && SS.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && SS.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && SS.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && SS.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && SS.push(this._microSurfaceTexture), SS
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.lL().environmentTexture
        }
        getActiveTextures() {
          const SS = super.getActiveTextures();
          return this._albedoTexture && SS.push(this._albedoTexture), this._baseWeightTexture && SS.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && SS.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && SS.push(this._ambientTexture), this._opacityTexture && SS.push(this._opacityTexture), this._reflectionTexture && SS.push(this._reflectionTexture), this._emissiveTexture && SS.push(this._emissiveTexture), this._reflectivityTexture && SS.push(this._reflectivityTexture), this._metallicTexture && SS.push(this._metallicTexture), this._metallicReflectanceTexture && SS.push(this._metallicReflectanceTexture), this._reflectanceTexture && SS.push(this._reflectanceTexture), this._microSurfaceTexture && SS.push(this._microSurfaceTexture), this._bumpTexture && SS.push(this._bumpTexture), this._lightmapTexture && SS.push(this._lightmapTexture), SS
        }
        hasTexture(SS) {
          return !!super.hasTexture(SS) || (this._albedoTexture === SS || (this._baseWeightTexture === SS || (this._baseDiffuseRoughnessTexture === SS || (this._ambientTexture === SS || (this._opacityTexture === SS || (this._reflectionTexture === SS || (this._emissiveTexture === SS || (this._reflectivityTexture === SS || (this._metallicTexture === SS || (this._metallicReflectanceTexture === SS || (this._reflectanceTexture === SS || (this._microSurfaceTexture === SS || (this._bumpTexture === SS || this._lightmapTexture === SS)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const SS = this.lL().enableSubSurfaceForPrePass();
          return SS && (SS.enabled = !0), !0
        }
        dispose(SS, HS) {
          this._breakShaderLoadedCheck = !0, HS && (this._environmentBRDFTexture && this.lL().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(SS, HS)
        }
      }, HS = new WeakMap, (() => {
        const HS = "function" === typeof Symbol && Symbol.metadata ? Object.create(bS[Symbol.metadata] ?? null) : void 0;
        tS = [(0, OS.d)("_markAllSubMeshesAsMiscDirty")], (0, JS.j)(SS, null, tS, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: SS => "debugMode" in SS,
            get: SS => SS.debugMode,
            set: (SS, HS) => {
              SS.debugMode = HS
            }
          },
          metadata: HS
        }, xS, NS), HS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: HS
        })
      })(), SS.PBRMATERIAL_OPAQUE = XS.d.MATERIAL_OPAQUE, SS.PBRMATERIAL_ALPHATEST = XS.d.MATERIAL_ALPHATEST, SS.PBRMATERIAL_ALPHABLEND = XS.d.MATERIAL_ALPHABLEND, SS.PBRMATERIAL_ALPHATESTANDBLEND = XS.d.MATERIAL_ALPHATESTANDBLEND, SS.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, SS.LIGHTFALLOFF_PHYSICAL = 0, SS.LIGHTFALLOFF_GLTF = 1, SS.LIGHTFALLOFF_STANDARD = 2, SS.ForceGLSL = !1, SS._ShaderLoader = new kH.e((() => [Promise.all([gS.e(317), gS.e(328)]).then((() => gS(61598))), Promise.all([gS.e(322), gS.e(318), gS.e(380), gS.e(331), gS.e(379)]).then((() => gS(61621)))]), (() => [Promise.all([gS.e(336), gS.e(338), gS.e(345)]).then((() => gS(61696))), Promise.all([gS.e(336), gS.e(339), gS.e(383), gS.e(349), gS.e(382)]).then((() => gS(61717)))])), SS
    })();
    Object.getOwnPropertyDescriptor(wH.prototype, "decalMap") || Object.defineProperty(wH.prototype, "decalMap", (0, CH.f)("PBRBaseMaterial", "decalMap")), (0, gS(41867).c)();
    var hH = gS(40068);
    var ZH = gS(40133),
      JH = gS(41844),
      OH = gS(39877),
      dH = gS(39888),
      cH = gS(39978);
    let vH = !1;
    const EH = new FS.c,
      LH = new FS.c;
    class YH extends JH.c {
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
      set wrapU(SS) {
        if (this._textures)
          for (let HS = 0; HS < this._textures.length; HS++) this._textures[HS].wrapU = SS
      }
      set wrapV(SS) {
        if (this._textures)
          for (let HS = 0; HS < this._textures.length; HS++) this._textures[HS].wrapV = SS
      }
      constructor(SS, HS, gS, tS, bS, XS) {
        const xS = !(!bS || !bS.generateMipMaps) && bS.generateMipMaps,
          NS = !(!bS || !bS.generateDepthTexture) && bS.generateDepthTexture,
          qS = bS && bS.depthTextureFormat ? bS.depthTextureFormat : 15,
          uS = !bS || void 0 === bS.doNotChangeAspectRatio || bS.doNotChangeAspectRatio,
          IS = !(!bS || !bS.drawOnlyOnFirstAttachmentByDefault) && bS.drawOnlyOnFirstAttachmentByDefault;
        if (super(SS, HS, tS, xS, uS, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), vH || (vH = !0, dH.ThinEngine.prototype.restoreSingleAttachment = function() {
            const SS = this._gl;
            this.bindAttachments([SS.BACK])
          }, dH.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const SS = this._gl;
            this.bindAttachments([SS.COLOR_ATTACHMENT0])
          }, dH.ThinEngine.prototype.buildTextureLayout = function(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const gS = this._gl,
              tS = [];
            if (HS) tS.push(gS.BACK);
            else
              for (let bS = 0; bS < SS.length; bS++) SS[bS] ? tS.push(gS["COLOR_ATTACHMENT" + bS]) : tS.push(gS.NONE);
            return tS
          }, dH.ThinEngine.prototype.bindAttachments = function(SS) {
            const HS = this._gl,
              gS = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, gS)
              for (let tS = 0; tS < SS.length; tS++) SS[tS] !== HS.NONE && gS[tS] && (0, cH.g)(gS[tS].format) && (this._integerMRTAttachmentsMask |= 1 << tS);
            HS.drawBuffers(SS)
          }, dH.ThinEngine.prototype.clearAttachments = function(SS, HS, gS, tS) {
            let bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const xS = this._currentRenderTarget?.textures;
            let NS = !1;
            if (gS && SS && xS)
              for (let qS = 0; qS < HS.length; qS++) {
                const SS = xS[qS];
                if (HS[qS] !== this._gl.NONE && SS && (0, cH.g)(SS.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  NS = !0;
                  break
                }
              }
            if (!NS || !SS || !xS) return this.bindAttachments(HS), void this.clear(SS, gS, tS, bS, XS);
            this.bindAttachments(HS), this._applyColorWriteState();
            for (let qS = 0; qS < HS.length; qS++) {
              const gS = xS[qS];
              if (HS[qS] !== this._gl.NONE && gS) {
                let HS = SS;
                if ((0, cH.g)(gS.format)) {
                  const tS = (0, cH.j)(gS.type);
                  HS = tS ? EH : LH;
                  const bS = tS ? 255 : 1;
                  HS.r = Math.round(SS.r * bS), HS.g = Math.round(SS.g * bS), HS.b = Math.round(SS.b * bS), HS.a = Math.round(SS.a * bS)
                }
                this._clearColorAttachment(qS, HS, gS.format, gS.type)
              }
            }
            if (tS || bS) {
              const SS = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, tS, bS, XS)
              } finally {
                this._integerMRTAttachmentsMask = SS
              }
            }
          }, dH.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gS = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, SS.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(SS), HS || this.generateMipMapsMultiFramebuffer(SS), gS && (SS._MSAAFramebuffer && this._bindUnboundFramebuffer(SS._framebuffer), gS()), this._bindUnboundFramebuffer(null)
          }, dH.ThinEngine.prototype.createMultipleRenderTarget = function(SS, HS) {
            let gS, tS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              bS = !1,
              XS = !0,
              xS = !1,
              NS = !1,
              qS = 1,
              uS = 1,
              IS = [],
              fS = [],
              kS = [],
              aS = [],
              KS = [],
              jS = [],
              GS = [],
              CS = [],
              nS = [],
              PS = !1;
            const QS = this._createHardwareRenderTargetWrapper(!0, !1, SS);
            void 0 !== HS && (bS = void 0 !== HS.generateMipMaps && HS.generateMipMaps, XS = void 0 === HS.generateDepthBuffer || HS.generateDepthBuffer, xS = void 0 !== HS.generateStencilBuffer && HS.generateStencilBuffer, NS = void 0 !== HS.generateDepthTexture && HS.generateDepthTexture, qS = HS.wxS ?? 1, uS = HS.samples ?? uS, IS = HS.types || IS, fS = HS.samplingModes || fS, kS = HS.useSRGBBuffers || kS, aS = HS.formats || aS, KS = HS.targetTypes || KS, jS = HS.faceIndex || jS, GS = HS.layerIndex || GS, CS = HS.layerCounts || CS, nS = HS.labels || nS, PS = HS.dontCreateTextures ?? !1, this.uj > 1 && (13 === HS.depthTextureFormat || 17 === HS.depthTextureFormat || 16 === HS.depthTextureFormat || 14 === HS.depthTextureFormat || 18 === HS.depthTextureFormat) && (gS = HS.depthTextureFormat)), void 0 === gS && (gS = xS ? 13 : 14);
            const DS = this._gl,
              wS = this._currentFramebuffer,
              hS = DS.createFramebuffer();
            this._bindUnboundFramebuffer(hS);
            const ZS = SS.width ?? SS,
              JS = SS.height ?? SS,
              OS = [],
              cS = [],
              vS = this.uj > 1 && (13 === gS || 17 === gS || 18 === gS);
            QS.label = HS?.label ?? "MultiRenderTargetWrapper", QS._framebuffer = hS, QS._generateDepthBuffer = NS || XS, QS._generateStencilBuffer = NS ? vS : xS, QS._depthStencilBuffer = this._setupFramebufferDepthAttachments(QS._generateStencilBuffer, QS._generateDepthBuffer, ZS, JS, 1, gS), QS._attachments = cS;
            for (let ES = 0; ES < qS; ES++) {
              let SS = fS[ES] || 3,
                HS = IS[ES] || 0,
                gS = kS[ES] || !1;
              const tS = aS[ES] || 5,
                XS = KS[ES] || 3553,
                xS = CS[ES] ?? 1;
              (1 !== HS || this._caps.textureFloatLinearFiltering) && (2 !== HS || this._caps.textureHalfFloatLinearFiltering) || (SS = 1);
              const NS = this._getSamplingParameters(SS, bS);
              1 !== HS || this._caps.textureFloat || (HS = 0, dS.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), gS = gS && this._caps.supportSRGBBuffers && (this.uj > 1 || this.isWebGPU);
              const qS = this.uj > 1,
                uS = DS[qS ? "COLOR_ATTACHMENT" + ES : "COLOR_ATTACHMENT" + ES + "_WEBGL"];
              if (cS.push(uS), -1 === XS || PS) continue;
              const jS = new OH.e(this, 6);
              OS[ES] = jS, DS.activeTexture(DS["TEXTURE" + ES]), DS.bindTexture(XS, jS._hardwareTexture.underlyingResource), DS.texParameteri(XS, DS.TEXTURE_MAG_FILTER, NS.mag), DS.texParameteri(XS, DS.TEXTURE_MIN_FILTER, NS.min), DS.texParameteri(XS, DS.TEXTURE_WRAP_S, DS.CLAMP_TO_EDGE), DS.texParameteri(XS, DS.TEXTURE_WRAP_T, DS.CLAMP_TO_EDGE);
              const GS = this._getRGBABufferInternalSizedFormat(HS, tS, gS),
                wS = this._getInternalFormat(tS),
                hS = this._getWebGLTextureType(HS);
              if (!qS || 35866 !== XS && 32879 !== XS)
                if (34067 === XS) {
                  for (let SS = 0; SS < 6; SS++) DS.texImage2D(DS.TEXTURE_CUBE_MAP_POSITIVE_X + SS, 0, GS, ZS, JS, 0, wS, hS, null);
                  jS.isCube = !0
                } else DS.texImage2D(DS.TEXTURE_2D, 0, GS, ZS, JS, 0, wS, hS, null);
              else 35866 === XS ? jS.is2DArray = !0 : jS.is3D = !0, jS.baseDepth = jS.depth = xS, DS.texImage3D(XS, 0, GS, ZS, JS, xS, 0, wS, hS, null);
              bS && DS.generateMipmap(XS), this._bindTextureDirectly(XS, null), jS.baseWidth = ZS, jS.baseHeight = JS, jS.width = ZS, jS.height = JS, jS.isReady = !0, jS.samples = 1, jS.generateMipMaps = bS, jS.samplingMode = SS, jS.type = HS, jS._useSRGBBuffer = gS, jS.format = tS, jS.label = nS[ES] ?? QS.label + "-Texture" + ES, this._internalTexturesCache.push(jS)
            }
            if (NS && this._caps.depthTextureExtension && !PS) {
              const SS = new OH.e(this, 14);
              let HS = 5,
                tS = DS.DEPTH_COMPONENT16,
                XS = DS.DEPTH_COMPONENT,
                xS = DS.UNSIGNED_SHORT,
                NS = DS.DEPTH_ATTACHMENT;
              this.uj < 2 ? tS = DS.DEPTH_COMPONENT : 14 === gS ? (HS = 1, xS = DS.FLOAT, tS = DS.DEPTH_COMPONENT32F) : 18 === gS ? (HS = 0, xS = DS.FLOAT_32_UNSIGNED_INT_24_8_REV, tS = DS.DEPTH32F_STENCIL8, XS = DS.DEPTH_STENCIL, NS = DS.DEPTH_STENCIL_ATTACHMENT) : 16 === gS ? (HS = 0, xS = DS.UNSIGNED_INT, tS = DS.DEPTH_COMPONENT24, NS = DS.DEPTH_ATTACHMENT) : 13 !== gS && 17 !== gS || (HS = 12, xS = DS.UNSIGNED_INT_24_8, tS = DS.DEPTH24_STENCIL8, XS = DS.DEPTH_STENCIL, NS = DS.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(DS.TEXTURE_2D, SS, !0), DS.texParameteri(DS.TEXTURE_2D, DS.TEXTURE_MAG_FILTER, DS.NEAREST), DS.texParameteri(DS.TEXTURE_2D, DS.TEXTURE_MIN_FILTER, DS.NEAREST), DS.texParameteri(DS.TEXTURE_2D, DS.TEXTURE_WRAP_S, DS.CLAMP_TO_EDGE), DS.texParameteri(DS.TEXTURE_2D, DS.TEXTURE_WRAP_T, DS.CLAMP_TO_EDGE), DS.texImage2D(DS.TEXTURE_2D, 0, tS, ZS, JS, 0, XS, xS, null), DS.framebufferTexture2D(DS.FRAMEBUFFER, NS, DS.TEXTURE_2D, SS._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(DS.TEXTURE_2D, null), QS._depthStencilTexture = SS, QS._depthStencilTextureWithStencil = vS, SS.baseWidth = ZS, SS.baseHeight = JS, SS.width = ZS, SS.height = JS, SS.isReady = !0, SS.samples = 1, SS.generateMipMaps = bS, SS.samplingMode = 1, SS.format = gS, SS.type = HS, SS.label = QS.label + "-DepthStencil", OS[qS] = SS, this._internalTexturesCache.push(SS)
            }
            if (QS.setTextures(OS), tS && DS.drawBuffers(cS), this._bindUnboundFramebuffer(wS), QS.setLayerAndFaceIndices(GS, jS), this.resetTextureCache(), PS) {
              if (uS > 1) {
                const SS = DS.createFramebuffer();
                if (!SS) throw new Error("Unable to create multi sampled framebuffer");
                QS._samples = uS, QS._MSAAFramebuffer = SS, qS > 0 && tS && (this._bindUnboundFramebuffer(SS), DS.drawBuffers(cS), this._bindUnboundFramebuffer(wS))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(QS, uS, tS);
            return QS
          }, dH.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(SS, HS) {
            let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.uj < 2 || !SS) return 1;
            if (SS.samples === HS) return HS;
            const tS = this._gl;
            HS = Math.min(HS, this.getCaps().maxMSAASamples), SS._depthStencilBuffer && (tS.deleteRenderbuffer(SS._depthStencilBuffer), SS._depthStencilBuffer = null), SS._MSAAFramebuffer && (tS.deleteFramebuffer(SS._MSAAFramebuffer), SS._MSAAFramebuffer = null);
            const bS = SS._attachments.length;
            for (let xS = 0; xS < bS; xS++) {
              const HS = SS.textures[xS]._hardwareTexture;
              HS?.releaseMSAARenderBuffers()
            }
            if (HS > 1 && "function" === typeof tS.renderbufferStorageMultisample) {
              const XS = tS.createFramebuffer();
              if (!XS) throw new Error("Unable to create multi sampled framebuffer");
              SS._MSAAFramebuffer = XS, this._bindUnboundFramebuffer(XS);
              const xS = [];
              for (let gS = 0; gS < bS; gS++) {
                const bS = SS.textures[gS],
                  XS = bS._hardwareTexture,
                  NS = tS[this.uj > 1 ? "COLOR_ATTACHMENT" + gS : "COLOR_ATTACHMENT" + gS + "_WEBGL"],
                  qS = this._createRenderBuffer(bS.width, bS.height, HS, -1, this._getRGBABufferInternalSizedFormat(bS.type, bS.format, bS._useSRGBBuffer), NS);
                if (!qS) throw new Error("Unable to create multi sampled framebuffer");
                XS.addMSAARenderBuffer(qS), bS.samples = HS, xS.push(NS)
              }
              gS && tS.drawBuffers(xS)
            } else this._bindUnboundFramebuffer(SS._framebuffer);
            const XS = SS._depthStencilTexture ? SS._depthStencilTexture.format : void 0;
            return SS._depthStencilBuffer = this._setupFramebufferDepthAttachments(SS._generateStencilBuffer, SS._generateDepthBuffer, SS.width, SS.height, HS, XS), this._bindUnboundFramebuffer(null), SS._samples = HS, HS
          }, dH.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(SS) {
            const HS = SS,
              gS = this._gl;
            if (HS.isMulti)
              for (let tS = 0; tS < HS._attachments.length; tS++) {
                const SS = HS.textures[tS];
                !SS?.generateMipMaps || SS?.isCube || SS?.is3D || (this._bindTextureDirectly(gS.TEXTURE_2D, SS, !0), gS.generateMipmap(gS.TEXTURE_2D), this._bindTextureDirectly(gS.TEXTURE_2D, null))
              }
          }, dH.ThinEngine.prototype.resolveMultiFramebuffer = function(SS) {
            const HS = SS,
              gS = this._gl;
            if (!HS._MSAAFramebuffer || !HS.isMulti) return;
            let tS = HS.resolveMSAAColors ? gS.COLOR_BUFFER_BIT : 0;
            tS |= HS._generateDepthBuffer && HS.resolveMSAADepth ? gS.DEPTH_BUFFER_BIT : 0, tS |= HS._generateStencilBuffer && HS.resolveMSAAStencil ? gS.STENCIL_BUFFER_BIT : 0;
            const bS = HS._attachments,
              XS = bS.length;
            gS.bindFramebuffer(gS.READ_FRAMEBUFFER, HS._MSAAFramebuffer), gS.bindFramebuffer(gS.DRAW_FRAMEBUFFER, HS._framebuffer);
            for (let xS = 0; xS < XS; xS++) {
              const SS = HS.textures[xS];
              for (let HS = 0; HS < XS; HS++) bS[HS] = gS.NONE;
              bS[xS] = gS[this.uj > 1 ? "COLOR_ATTACHMENT" + xS : "COLOR_ATTACHMENT" + xS + "_WEBGL"], gS.readBuffer(bS[xS]), gS.drawBuffers(bS), gS.blitFramebuffer(0, 0, SS.width, SS.height, 0, 0, SS.width, SS.height, tS, gS.NEAREST)
            }
            for (let xS = 0; xS < XS; xS++) bS[xS] = gS[this.uj > 1 ? "COLOR_ATTACHMENT" + xS : "COLOR_ATTACHMENT" + xS + "_WEBGL"];
            gS.drawBuffers(bS), gS.bindFramebuffer(this._gl.FRAMEBUFFER, HS._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = XS;
        const fS = [],
          kS = [],
          aS = [],
          KS = [],
          jS = [],
          GS = [],
          CS = [],
          nS = [];
        this._initTypes(gS, fS, kS, aS, KS, jS, GS, CS, nS, bS);
        const PS = !bS || void 0 === bS.generateDepthBuffer || bS.generateDepthBuffer,
          QS = !(!bS || void 0 === bS.generateStencilBuffer) && bS.generateStencilBuffer,
          DS = bS && bS.samples ? bS.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: kS,
          generateMipMaps: xS,
          generateDepthBuffer: PS,
          generateStencilBuffer: QS,
          generateDepthTexture: NS,
          depthTextureFormat: qS,
          types: fS,
          wxS: gS,
          useSRGBBuffers: aS,
          samples: DS,
          formats: KS,
          targetTypes: jS,
          faceIndex: GS,
          layerIndex: CS,
          layerCounts: nS,
          labels: XS,
          label: SS
        }, this._count = gS, this._drawOnlyOnFirstAttachmentByDefault = IS, gS > 0 && (this._createInternalTextures(), this._createTextures(XS))
      }
      _initTypes(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS) {
        for (let IS = 0; IS < SS; IS++) uS && uS.types && void 0 !== uS.types[IS] ? HS.push(uS.types[IS]) : HS.push(uS && uS.defaultType ? uS.defaultType : 0), uS && uS.samplingModes && void 0 !== uS.samplingModes[IS] ? gS.push(uS.samplingModes[IS]) : gS.push(vS.i.BILINEAR_SAMPLINGMODE), uS && uS.useSRGBBuffers && void 0 !== uS.useSRGBBuffers[IS] ? tS.push(uS.useSRGBBuffers[IS]) : tS.push(!1), uS && uS.formats && void 0 !== uS.formats[IS] ? bS.push(uS.formats[IS]) : bS.push(5), uS && uS.targetTypes && void 0 !== uS.targetTypes[IS] ? XS.push(uS.targetTypes[IS]) : XS.push(3553), uS && uS.faceIndex && void 0 !== uS.faceIndex[IS] ? xS.push(uS.faceIndex[IS]) : xS.push(0), uS && uS.layerIndex && void 0 !== uS.layerIndex[IS] ? NS.push(uS.layerIndex[IS]) : NS.push(0), uS && uS.layerCounts && void 0 !== uS.layerCounts[IS] ? qS.push(uS.layerCounts[IS]) : qS.push(1)
      }
      _createInternaTextureIndexMapping() {
        const SS = {},
          HS = [];
        if (!this._renderTarget) return HS;
        const gS = this._renderTarget.textures;
        for (let tS = 0; tS < gS.length; tS++) {
          const bS = gS[tS];
          if (!bS) continue;
          const XS = SS[bS.uniqueId];
          void 0 !== XS ? HS[tS] = XS : SS[bS.uniqueId] = tS
        }
        return HS
      }
      _rebuild() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || SS) return;
        const tS = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), HS && (this._releaseTextures(), this._createTextures(gS));
        const bS = this._renderTarget.textures;
        for (let XS = 0; XS < bS.length; XS++) {
          const SS = this._textures[XS];
          void 0 !== tS[XS] && this._renderTarget.setTexture(bS[tS[XS]], XS), SS._texture = bS[XS], SS._texture && (SS._noMipmap = !SS._texture.useMipMaps, SS._useSRGBBuffer = SS._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let SS = 0; SS < this._textures.length; SS++) this._textures[SS]._texture = null, this._textures[SS].dispose()
      }
      _createTextures(SS) {
        const HS = this._renderTarget.textures;
        this._textures = [];
        for (let gS = 0; gS < HS.length; gS++) {
          const tS = new vS.i(null, this.lL());
          SS?.[gS] && (tS.name = SS[gS]), tS._texture = HS[gS], tS._texture && (tS._noMipmap = !tS._texture.useMipMaps, tS._useSRGBBuffer = tS._texture._useSRGBBuffer), this._textures.push(tS)
        }
      }
      setInternalTexture(SS, HS) {
        let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === HS && (this._texture = SS), this.renderTarget.setTexture(SS, HS, gS), this.textures[HS] || (this.textures[HS] = new vS.i(null, this.lL()), this.textures[HS].name = this._textureNames?.[HS] ?? this.textures[HS].name), this.textures[HS]._texture = SS, this.textures[HS]._noMipmap = !SS.useMipMaps, this.textures[HS]._useSRGBBuffer = SS._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[HS] = SS.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[HS] = SS.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[HS] = SS._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[HS])) {
          let gS;
          gS = SS.is2DArray ? 35866 : SS.isCube ? 34067 : SS.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[HS] = gS
        }
      }
      setLayerAndFaceIndex(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[SS] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[SS] = HS), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[SS] = gS), this.renderTarget.setLayerAndFaceIndex(SS, HS, gS))
      }
      setLayerAndFaceIndices(SS, HS) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = SS, this._multiRenderTargetOptions.faceIndex = HS, this.renderTarget.setLayerAndFaceIndices(SS, HS))
      }
      get samples() {
        return this._samples
      }
      set samples(SS) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(SS) : this._samples = SS
      }
      resize(SS) {
        this._processSizeParameter(SS), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(SS, HS, gS) {
        this._multiRenderTargetOptions.wxS = SS, this._count = SS;
        const tS = [],
          bS = [],
          XS = [],
          xS = [],
          NS = [],
          qS = [],
          uS = [],
          IS = [];
        this._textureNames = gS, this._initTypes(SS, tS, bS, XS, xS, NS, qS, uS, IS, HS), this._multiRenderTargetOptions.types = tS, this._multiRenderTargetOptions.samplingModes = bS, this._multiRenderTargetOptions.useSRGBBuffers = XS, this._multiRenderTargetOptions.formats = xS, this._multiRenderTargetOptions.targetTypes = NS, this._multiRenderTargetOptions.faceIndex = qS, this._multiRenderTargetOptions.layerIndex = uS, this._multiRenderTargetOptions.layerCounts = IS, this._multiRenderTargetOptions.labels = gS, this._rebuild(!1, !0, gS)
      }
      _unbindFrameBuffer(SS, HS) {
        this._renderTarget && SS.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(HS)
        }))
      }
      dispose() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), SS ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const SS = this._renderTarget?.textures;
        if (SS) {
          for (let HS = SS.length - 1; HS >= 0; HS--) this._textures[HS]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var AH = gS(40213);
    class yH {
      constructor(SS) {
        this.name = AH.e.NAME_GEOMETRYBUFFERRENDERER, this.Bj = SS
      }
      register() {
        this.Bj._gatherRenderTargetsStage.registerStep(AH.e.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(SS) {
        this.Bj._geometryBufferRenderer && SS.push(this.Bj._geometryBufferRenderer.getGBuffer())
      }
    }
    let VH = !1;
    var iH;
    ! function(SS) {
      SS[SS.Small = 0] = "Small", SS[SS.Medium = 1] = "Medium", SS[SS.Large = 2] = "Large", SS[SS.ExtraLarge = 3] = "ExtraLarge"
    }(iH || (iH = {}));
    const WH = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      zH = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class UH {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(SS) {
        if (SS && this._enableMeshBlendTag && !this._scene.AK().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = SS
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(SS) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = SS, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(SS, HS) {
        SS === UH.POSITION_TEXTURE_TYPE ? (this._positionIndex = HS, this._enablePosition = !0) : SS === UH.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = HS, this._enableVelocity = !0) : SS === UH.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = HS, this._enableVelocityLinear = !0) : SS === UH.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = HS, this._enableReflectivity = !0) : SS === UH.DEPTH_TEXTURE_TYPE ? (this._depthIndex = HS, this._enableDepth = !0) : SS === UH.NORMAL_TEXTURE_TYPE ? (this._normalIndex = HS, this._enableNormal = !0) : SS === UH.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = HS, this._enableScreenspaceDepth = !0) : SS === UH.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = HS, this._enableIrradiance = !0) : SS === UH.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = HS, this._enableObjectId = !0) : SS === UH.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = HS, this._enableMeshBlendTag = !0)
      }
      _setAttachments(SS) {
        this._attachmentsFromPrePass = SS
      }
      _linkInternalTexture(SS) {
        this._multiRenderTarget.setInternalTexture(SS, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(SS) {
        this._multiRenderTarget.renderList = SS
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(SS) {
        switch (SS) {
          case UH.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case UH.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case UH.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case UH.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case UH.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case UH.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case UH.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case UH.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case UH.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case UH.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(SS) {
        this._enableDepth = SS, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(SS) {
        this._enableNormal = SS, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(SS) {
        this._enablePosition = SS, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(SS) {
        this._enableVelocity = SS, SS || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = SS
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(SS) {
        this._enableVelocityLinear = SS, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(SS) {
        this._enableReflectivity = SS, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(SS) {
        this._enableScreenspaceDepth = SS, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(SS) {
        this._enableIrradiance = SS, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(SS) {
        if (SS && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (SS && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (SS && !this._enableObjectId && !this._linkedWithPrePass) {
          const SS = this._scene.AK(),
            HS = Math.min(SS.getCaps().maxDrawBuffers ?? 1, 8),
            gS = this._assignRenderTargetIndices()[0] + 1;
          if (SS.getCaps().drawBuffersExtension && gS > HS) throw new Error(`GeometryBufferRenderer: ${gS} color attachments were requested, but this engine supports at most ${HS}`)
        }
        this._enableObjectId = SS, SS || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(SS) {
        if (this._enableMeshBlendTag !== SS) {
          if (SS) {
            const SS = this._scene.AK();
            if (! function(SS) {
                return "NATIVE" !== SS.shaderPlatformName && (SS.isWebGPU || 2 === SS.uj)
              }(SS)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !SS.isWebGPU && !SS.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const HS = Math.min(SS.getCaps().maxDrawBuffers ?? 1, 8),
                gS = this._assignRenderTargetIndices()[0] + 1;
              if (SS.getCaps().drawBuffersExtension && gS > HS) throw new Error(`GeometryBufferRenderer: ${gS} color attachments were requested, but this engine supports at most ${HS}`)
            }
          }
          this._enableMeshBlendTag = SS, SS || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get Bj() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          tS = arguments.length > 3 ? arguments[3] : void 0;
        var bS;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new FS.c(0, 0, 0, 0), this._clearDepthColor = new FS.c(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = SS, this._ratioOrDimensions = HS, this._useUbo = SS.AK().supportsUniformBuffers, this._depthFormat = gS, this._textureTypesAndFormats = tS || {}, this._initShaderSourceAsync(), bS = UH, VH || (VH = !0, Object.defineProperty(iS.i.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(SS) {
            SS && SS.isSupported && (this._geometryBufferRenderer = SS)
          },
          enumerable: !0,
          configurable: !0
        }), iS.i.prototype.enableGeometryBufferRenderer = function() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            gS = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new bS(this, SS, HS, gS), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, iS.i.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, bS._SceneComponentInitialization = SS => {
          let HS = SS._getComponent(AH.e.NAME_GEOMETRYBUFFERRENDERER);
          HS || (HS = new yH(SS), SS.igS(HS))
        }), UH._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.AK().isWebGPU && !UH.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([gS.e(337).then((() => gS(61919))), Promise.all([gS.e(336), gS.e(348)]).then((() => gS(61921)))])) : await Promise.all([gS.e(320).then((() => gS(61926))), gS.e(319).then((() => gS(61931)))]), this._shadersLoaded = !0
      }
      isReady(SS, HS) {
        if (!this._shadersLoaded) return !1;
        const gS = SS.zK();
        if (gS && gS.disableDepthWrite) return !1;
        if (function(SS) {
            return SS._isGaussianSplatting || "GaussianSplattingMesh" === (HS = SS.getClassName()) || "GaussianSplattingStream" === HS;
            var HS
          }(SS.getMesh())) return !1;
        const tS = [],
          bS = [zS.h.PositionKind],
          XS = SS.getMesh();
        XS.isVerticesDataPresent(zS.h.NormalKind) && (tS.push("#define HAS_NORMAL_ATTRIBUTE"), bS.push(zS.h.NormalKind));
        let xS = !1,
          NS = !1;
        if (gS) {
          let SS = !1;
          if (gS.needAlphaTestingForMesh(XS) && gS.getAlphaTestTexture() && (tS.push("#define ALPHATEST"), tS.push(`#define ALPHATEST_UV${gS.getAlphaTestTexture().coordinatesIndex+1}`), SS = !0), (gS.bumpTexture || gS.normalTexture || gS.geometryNormalTexture) && lS.e.BumpTextureEnabled) {
            const HS = gS.bumpTexture || gS.normalTexture || gS.geometryNormalTexture;
            tS.push("#define BUMP"), tS.push(`#define BUMP_UV${HS.coordinatesIndex+1}`), SS = !0
          }
          if (this._enableReflectivity) {
            let HS = !1;
            if ("PBRMetallicRoughnessMaterial" === gS.getClassName()) gS.metallicRoughnessTexture && (tS.push("#define ORMTEXTURE"), tS.push(`#define REFLECTIVITY_UV${gS.metallicRoughnessTexture.coordinatesIndex+1}`), tS.push("#define METALLICWORKFLOW"), SS = !0, HS = !0), null != gS.metallic && (tS.push("#define METALLIC"), tS.push("#define METALLICWORKFLOW"), HS = !0), null != gS.roughness && (tS.push("#define ROUGHNESS"), tS.push("#define METALLICWORKFLOW"), HS = !0), HS && (gS.baseTexture && (tS.push("#define ALBEDOTEXTURE"), tS.push(`#define ALBEDO_UV${gS.baseTexture.coordinatesIndex+1}`), gS.baseTexture.gammaSpace && tS.push("#define GAMMAALBEDO"), SS = !0), gS.baseColor && tS.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === gS.getClassName()) gS.specularGlossinessTexture ? (tS.push("#define SPECULARGLOSSINESSTEXTURE"), tS.push(`#define REFLECTIVITY_UV${gS.specularGlossinessTexture.coordinatesIndex+1}`), SS = !0, gS.specularGlossinessTexture.gammaSpace && tS.push("#define GAMMAREFLECTIVITYTEXTURE")) : gS.specularColor && tS.push("#define REFLECTIVITYCOLOR"), null != gS.glossiness && tS.push("#define GLOSSINESS");
            else if ("PBRMaterial" === gS.getClassName()) gS.metallicTexture && (tS.push("#define ORMTEXTURE"), tS.push(`#define REFLECTIVITY_UV${gS.metallicTexture.coordinatesIndex+1}`), tS.push("#define METALLICWORKFLOW"), SS = !0, HS = !0), null != gS.metallic && (tS.push("#define METALLIC"), tS.push("#define METALLICWORKFLOW"), HS = !0), null != gS.roughness && (tS.push("#define ROUGHNESS"), tS.push("#define METALLICWORKFLOW"), HS = !0), HS ? (gS.albedoTexture && (tS.push("#define ALBEDOTEXTURE"), tS.push(`#define ALBEDO_UV${gS.albedoTexture.coordinatesIndex+1}`), gS.albedoTexture.gammaSpace && tS.push("#define GAMMAALBEDO"), SS = !0), gS.albedoColor && tS.push("#define ALBEDOCOLOR")) : (gS.reflectivityTexture ? (tS.push("#define SPECULARGLOSSINESSTEXTURE"), tS.push(`#define REFLECTIVITY_UV${gS.reflectivityTexture.coordinatesIndex+1}`), gS.reflectivityTexture.gammaSpace && tS.push("#define GAMMAREFLECTIVITYTEXTURE"), SS = !0) : gS.reflectivityColor && tS.push("#define REFLECTIVITYCOLOR"), null != gS.microSurface && tS.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === gS.getClassName()) gS.specularTexture && (tS.push("#define REFLECTIVITYTEXTURE"), tS.push(`#define REFLECTIVITY_UV${gS.specularTexture.coordinatesIndex+1}`), gS.specularTexture.gammaSpace && tS.push("#define GAMMAREFLECTIVITYTEXTURE"), SS = !0), gS.specularColor && tS.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === gS.getClassName()) {
              const HS = gS;
              tS.push("#define METALLIC"), tS.push("#define ROUGHNESS"), HS._useRoughnessFromMetallicTextureGreen && HS.baseMetalnessTexture ? (tS.push("#define ORMTEXTURE"), tS.push(`#define REFLECTIVITY_UV${HS.baseMetalnessTexture.coordinatesIndex+1}`), SS = !0) : HS.baseMetalnessTexture ? (tS.push("#define METALLIC_TEXTURE"), tS.push(`#define METALLIC_UV${HS.baseMetalnessTexture.coordinatesIndex+1}`), SS = !0) : HS.specularRoughnessTexture && (tS.push("#define ROUGHNESS_TEXTURE"), tS.push(`#define ROUGHNESS_UV${HS.specularRoughnessTexture.coordinatesIndex+1}`), SS = !0), HS.baseColorTexture && (tS.push("#define ALBEDOTEXTURE"), tS.push(`#define ALBEDO_UV${HS.baseColorTexture.coordinatesIndex+1}`), HS.baseColorTexture.gammaSpace && tS.push("#define GAMMAALBEDO"), SS = !0), HS.baseColor && tS.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (tS.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === gS.getClassName())) {
            const HS = gS;
            HS.subsurfaceWeight > 0 && HS.subsurfaceWeightTexture && (tS.push("#define SUBSURFACE_WEIGHT"), tS.push(`#define SUBSURFACEWEIGHT_UV${HS.subsurfaceWeightTexture.coordinatesIndex+1}`), SS = !0), HS.transmissionWeight > 0 && HS.transmissionWeightTexture && (tS.push("#define TRANSMISSION_WEIGHT"), tS.push(`#define TRANSMISSIONWEIGHT_UV${HS.transmissionWeightTexture.coordinatesIndex+1}`), SS = !0)
          }
          SS && (tS.push("#define NEED_UV"), XS.isVerticesDataPresent(zS.h.UVKind) && (bS.push(zS.h.UVKind), tS.push("#define UV1"), xS = !0), XS.isVerticesDataPresent(zS.h.UV2Kind) && (bS.push(zS.h.UV2Kind), tS.push("#define UV2"), NS = !0))
        }
        if (this._enableDepth && (tS.push("#define DEPTH"), tS.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (tS.push("#define NORMAL"), tS.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (tS.push("#define POSITION"), tS.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (tS.push("#define VELOCITY"), tS.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(XS) && tS.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (tS.push("#define VELOCITY_LINEAR"), tS.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(XS) && tS.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (tS.push("#define REFLECTIVITY"), tS.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (tS.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), tS.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          tS.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), tS.push("#define IRRADIANCE");
          const SS = this._scene;
          if (SS.environmentTexture) {
            const HS = {};
            let bS = !1,
              XS = 0;
            "OpenPBRMaterial" !== gS.getClassName() && "StandardMaterial" !== gS.getClassName() && "PBRMetallicRoughnessMaterial" !== gS.getClassName() && "PBRSpecularGlossinessMaterial" !== gS.getClassName() && "PBRMaterial" !== gS.getClassName() || (bS = !!gS.realtimeFiltering, XS = gS.realtimeFilteringQuality || 0), (0, eS.S)(SS, SS.environmentTexture, HS, bS, XS, !0);
            for (const SS in HS) HS[SS] && tS.push("#define " + SS);
            HS.USEIRRADIANCEMAP || tS.push("#define SPHERICAL_HARMONICS");
            const xS = SS.postProcessRenderPipelineManager.supportedPipelines.find((SS => "IBLShadowsRenderPipeline" === SS.getClassName()));
            if (xS) {
              const SS = xS;
              SS._getAccumulatedTexture() && (tS.push("#define IBL_SHADOW_TEXTURE"), SS.coloredShadows && tS.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (tS.push("#define OBJECT_ID"), tS.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (tS.push("#define MESH_BLEND_TAG"), tS.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && tS.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && tS.push("#define ENCODE_NORMAL"), XS.useBones && XS.computeBonesUsingShaders && XS.skeleton ? (bS.push(zS.h.MatricesIndicesKind), bS.push(zS.h.MatricesWeightsKind), XS.numBoneInfluencers > 4 && (bS.push(zS.h.MatricesIndicesExtraKind), bS.push(zS.h.MatricesWeightsExtraKind)), tS.push("#define NUM_BONE_INFLUENCERS " + XS.numBoneInfluencers), tS.push("#define BONETEXTURE " + XS.skeleton.isUsingTextureForMatrices), tS.push("#define BonesPerMesh " + (XS.skeleton.bones.length + 1))) : (tS.push("#define NUM_BONE_INFLUENCERS 0"), tS.push("#define BONETEXTURE false"), tS.push("#define BonesPerMesh 0"));
        const qS = XS.morphTargetManager ? (0, eS.L)(XS.morphTargetManager, tS, bS, XS, !0, !0, !1, xS, NS, !1) : 0;
        HS && (tS.push("#define INSTANCES"), (0, eS.sb)(bS, this._enableVelocity || this._enableVelocityLinear), SS.getRenderingMesh().hasThinInstances && tS.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? tS.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : tS.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, IH.j)(gS, this._scene, tS);
        const uS = this._scene.AK(),
          IS = SS._getDrawWrapper(void 0, !0),
          fS = IS.defines,
          kS = tS.join("\n");
        return fS !== kS && IS.setEffect(uS.createEffect("geometry", {
          attributes: bS,
          uniformsNames: zH,
          samplers: WH,
          defines: kS,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: qS
          },
          shaderLanguage: this.shaderLanguage
        }, uS), kS), IS.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(SS) {
        if (this._enableObjectId && 1 !== SS) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== SS) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = SS
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.AK().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.Bj.AK()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.Bj.AK().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const SS = [],
          HS = [];
        let gS = 0;
        return this._enableDepth && (this._depthIndex = gS, gS++, SS.push("gBuffer_Depth"), HS.push(this._textureTypesAndFormats[UH.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = gS, gS++, SS.push("gBuffer_Normal"), HS.push(this._textureTypesAndFormats[UH.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = gS, gS++, SS.push("gBuffer_Position"), HS.push(this._textureTypesAndFormats[UH.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = gS, gS++, SS.push("gBuffer_Velocity"), HS.push(this._textureTypesAndFormats[UH.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = gS, gS++, SS.push("gBuffer_VelocityLinear"), HS.push(this._textureTypesAndFormats[UH.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = gS, gS++, SS.push("gBuffer_Reflectivity"), HS.push(this._textureTypesAndFormats[UH.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = gS, gS++, SS.push("gBuffer_ScreenspaceDepth"), HS.push(this._textureTypesAndFormats[UH.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = gS, gS++, SS.push("gBuffer_Irradiance"), HS.push(this._textureTypesAndFormats[UH.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = gS, gS++, SS.push("gBuffer_ObjectId"), HS.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = gS, gS++, SS.push("gBuffer_MeshBlendTag"), HS.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [gS, SS, HS]
      }
      _createRenderTargets() {
        const SS = this._scene.AK(),
          [HS, gS, tS] = this._assignRenderTargetIndices(),
          bS = Math.min(SS.getCaps().maxDrawBuffers ?? 1, 8);
        if (SS.getCaps().drawBuffersExtension && HS > bS) throw new Error(`GeometryBufferRenderer: ${HS} color attachments were requested, but this engine supports at most ${bS}`);
        let xS = 0;
        SS._caps.textureFloat && SS._caps.textureFloatLinearFiltering ? xS = 1 : SS._caps.textureHalfFloat && SS._caps.textureHalfFloatLinearFiltering && (xS = 2);
        const NS = this._getRenderTargetDimensions(),
          qS = [],
          uS = [],
          IS = [];
        for (const XS of tS) XS ? (qS.push(XS.textureType), uS.push(XS.textureFormat), IS.push(XS.samplingMode ?? 2)) : (qS.push(xS), uS.push(5), IS.push(2));
        if (this._normalsAreUnsigned = 11 === qS[UH.NORMAL_TEXTURE_TYPE] || 13 === qS[UH.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new YH("gBuffer", NS, HS, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: qS,
            formats: uS,
            samplingModes: IS,
            depthTextureFormat: this._depthFormat
          }, gS.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = vS.i.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = vS.i.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const fS = [!0],
          kS = [!1],
          aS = [!0];
        for (let XS = 1; XS < HS; ++XS) fS.push(!0), aS.push(!1), kS.push(!0);
        const KS = SS.buildTextureLayout(fS),
          jS = SS.buildTextureLayout(kS),
          GS = SS.buildTextureLayout(aS);
        this._multiRenderTarget.onClearObservable.add((SS => {
          const HS = this.useSpecificClearForDepthTexture ? jS : KS;
          SS.clearAttachments(this._clearColor, HS, !0, !0, !0), this.useSpecificClearForDepthTexture && SS.clearAttachments(this._clearDepthColor, GS, !0, !1, !1), SS.bindAttachments(KS)
        })), this._resizeObserver = SS.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const CS = SS => {
          const HS = SS.getRenderingMesh(),
            gS = SS.getEffectiveMesh(),
            tS = this._scene,
            bS = tS.AK(),
            xS = SS.zK();
          if (!xS) return;
          if (gS._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[gS.uniqueId] && (this._previousTransformationMatrices[gS.uniqueId] = {
              gk: WS.e.Identity(),
              viewProjection: tS.getTransformMatrix()
            }, HS.skeleton)) {
            const SS = HS.skeleton.getTransformMatrices(HS);
            this._previousBonesTransformationMatrices[HS.uniqueId] = this._copyBonesTransformationMatrices(SS, new Float32Array(SS.length))
          }
          const NS = HS._getInstancesRenderList(SS._id, !!SS.getReplacementMesh());
          if (NS.mustReturn) return;
          const qS = bS.getCaps().instancedArrays && (null !== NS.visibleInstances[SS._id] || HS.hasThinInstances),
            uS = gS.getWorldMatrix();
          if (this.isReady(SS, qS)) {
            const IS = SS._getDrawWrapper();
            if (!IS) return;
            const fS = IS.effect;
            let kS;
            bS.enableEffect(IS), qS || HS._bind(SS, fS, xS.fillMode), this._useUbo ? ((0, eS.v)(fS, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (fS.setMatrix("viewProjection", tS.getTransformMatrix()), fS.setMatrix("view", tS.getViewMatrix()), this._scene.bindEyePosition(fS, "vEyePosition"));
            if (HS._instanceDataStorage.isFrozen || !xS.backFaceCulling && null === xS.sideOrientation) kS = HS._effectiveSideOrientation;
            else {
              const SS = gS._getWorldMatrixDeterminant();
              kS = xS._getEffectiveOrientation(HS), SS < 0 && (kS = kS === XS.d.ClockWiseSideOrientation ? XS.d.CounterClockWiseSideOrientation : XS.d.ClockWiseSideOrientation)
            }
            if (xS._preBind(IS, kS), xS.needAlphaTestingForMesh(gS)) {
              const SS = xS.getAlphaTestTexture();
              SS && (fS.setTexture("diffuseSampler", SS), fS.setMatrix("diffuseMatrix", SS.getTextureMatrix()), fS.setFloat("alphaCutOff", xS.alphaCutOff ?? .4))
            }
            if ((xS.bumpTexture || xS.normalTexture || xS.geometryNormalTexture) && tS.AK().getCaps().standardDerivatives && lS.e.BumpTextureEnabled) {
              const SS = xS.bumpTexture || xS.normalTexture || xS.geometryNormalTexture;
              fS.setFloat3("vBumpInfos", SS.coordinatesIndex, 1 / SS.level, xS.parallaxScaleBias), fS.setMatrix("bumpMatrix", SS.getTextureMatrix()), fS.setTexture("bumpSampler", SS), fS.setFloat2("vTangentSpaceParams", xS.invertNormalMapX ? -1 : 1, xS.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === xS.getClassName()) null !== xS.metallicRoughnessTexture && (fS.setTexture("reflectivitySampler", xS.metallicRoughnessTexture), fS.setMatrix("reflectivityMatrix", xS.metallicRoughnessTexture.getTextureMatrix())), null !== xS.metallic && fS.setFloat("metallic", xS.metallic), null !== xS.roughness && fS.setFloat("glossiness", 1 - xS.roughness), null !== xS.baseTexture && (fS.setTexture("albedoSampler", xS.baseTexture), fS.setMatrix("albedoMatrix", xS.baseTexture.getTextureMatrix())), null !== xS.baseColor && fS.setColor3("albedoColor", xS.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === xS.getClassName()) null !== xS.specularGlossinessTexture ? (fS.setTexture("reflectivitySampler", xS.specularGlossinessTexture), fS.setMatrix("reflectivityMatrix", xS.specularGlossinessTexture.getTextureMatrix())) : null !== xS.specularColor && fS.setColor3("reflectivityColor", xS.specularColor), null !== xS.glossiness && fS.setFloat("glossiness", xS.glossiness);
            else if ("PBRMaterial" === xS.getClassName()) null !== xS.metallicTexture && (fS.setTexture("reflectivitySampler", xS.metallicTexture), fS.setMatrix("reflectivityMatrix", xS.metallicTexture.getTextureMatrix())), null !== xS.metallic && fS.setFloat("metallic", xS.metallic), null !== xS.roughness && fS.setFloat("glossiness", 1 - xS.roughness), null !== xS.roughness || null !== xS.metallic || null !== xS.metallicTexture ? (null !== xS.albedoTexture && (fS.setTexture("albedoSampler", xS.albedoTexture), fS.setMatrix("albedoMatrix", xS.albedoTexture.getTextureMatrix())), null !== xS.albedoColor && fS.setColor3("albedoColor", xS.albedoColor)) : (null !== xS.reflectivityTexture ? (fS.setTexture("reflectivitySampler", xS.reflectivityTexture), fS.setMatrix("reflectivityMatrix", xS.reflectivityTexture.getTextureMatrix())) : null !== xS.reflectivityColor && fS.setColor3("reflectivityColor", xS.reflectivityColor), null !== xS.microSurface && fS.setFloat("glossiness", xS.microSurface));
            else if ("StandardMaterial" === xS.getClassName()) null !== xS.specularTexture && (fS.setTexture("reflectivitySampler", xS.specularTexture), fS.setMatrix("reflectivityMatrix", xS.specularTexture.getTextureMatrix())), null !== xS.specularColor && fS.setColor3("reflectivityColor", xS.specularColor);
            else if ("OpenPBRMaterial" === xS.getClassName()) {
              const SS = xS;
              SS._useRoughnessFromMetallicTextureGreen && SS.baseMetalnessTexture ? (fS.setTexture("reflectivitySampler", SS.baseMetalnessTexture), fS.setMatrix("reflectivityMatrix", SS.baseMetalnessTexture.getTextureMatrix())) : SS.baseMetalnessTexture ? (fS.setTexture("metallicSampler", SS.baseMetalnessTexture), fS.setMatrix("metallicMatrix", SS.baseMetalnessTexture.getTextureMatrix())) : SS.specularRoughnessTexture && (fS.setTexture("roughnessSampler", SS.specularRoughnessTexture), fS.setMatrix("roughnessMatrix", SS.specularRoughnessTexture.getTextureMatrix())), fS.setFloat("metallic", SS.baseMetalness), fS.setFloat("glossiness", 1 - SS.specularRoughness), null !== SS.baseColorTexture && (fS.setTexture("albedoSampler", SS.baseColorTexture), fS.setMatrix("albedoMatrix", SS.baseColorTexture.getTextureMatrix())), null !== SS.baseColor && fS.setColor3("albedoColor", SS.baseColor)
            }
            if (this._enableIrradiance && tS.environmentTexture) {
              const SS = tS.environmentTexture,
                HS = tS.postProcessRenderPipelineManager.supportedPipelines.find((SS => "IBLShadowsRenderPipeline" === SS.getClassName()));
              if (HS) {
                const SS = HS._getAccumulatedTexture();
                SS && (fS.setTexture("iblShadowSampler", SS), fS.setFloat2("shadowTextureSize", SS.getSize().width, SS.getSize().height))
              }
              if (fS.setMatrix("reflectionMatrix", SS.getReflectionTextureMatrix()), fS.setFloat2("vReflectionInfos", SS.level * tS.iblIntensity, 0), fS.setTexture("reflectionSampler", SS), SS.irradianceTexture && (fS.setTexture("irradianceSampler", SS.irradianceTexture), SS.irradianceTexture._dominantDirection && fS.setVector3("vReflectionDominantDirection", SS.irradianceTexture._dominantDirection)), SS.sphericalPolynomial) {
                const HS = SS.sphericalPolynomial;
                if (HS.preScaledHarmonics) {
                  const SS = HS.preScaledHarmonics;
                  fS.setVector3("vSphericalL00", SS.l00), fS.setVector3("vSphericalL1_1", SS.l1_1), fS.setVector3("vSphericalL10", SS.l10), fS.setVector3("vSphericalL11", SS.l11), fS.setVector3("vSphericalL2_2", SS.l2_2), fS.setVector3("vSphericalL2_1", SS.l2_1), fS.setVector3("vSphericalL20", SS.l20), fS.setVector3("vSphericalL21", SS.l21), fS.setVector3("vSphericalL22", SS.l22)
                } else fS.setFloat3("vSphericalX", HS.x.x, HS.x.y, HS.x.z), fS.setFloat3("vSphericalY", HS.y.x, HS.y.y, HS.y.z), fS.setFloat3("vSphericalZ", HS.z.x, HS.z.y, HS.z.z), fS.setFloat3("vSphericalXX_ZZ", HS.xx.x - HS.zz.x, HS.xx.y - HS.zz.y, HS.xx.z - HS.zz.z), fS.setFloat3("vSphericalYY_ZZ", HS.yy.x - HS.zz.x, HS.yy.y - HS.zz.y, HS.yy.z - HS.zz.z), fS.setFloat3("vSphericalZZ", HS.zz.x, HS.zz.y, HS.zz.z), fS.setFloat3("vSphericalXY", HS.xy.x, HS.xy.y, HS.xy.z), fS.setFloat3("vSphericalYZ", HS.yz.x, HS.yz.y, HS.yz.z), fS.setFloat3("vSphericalZX", HS.zx.x, HS.zx.y, HS.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === xS.getClassName()) {
                const SS = xS;
                fS.setFloat("vSubsurfaceWeight", SS.subsurfaceWeight), SS.subsurfaceWeightTexture && (fS.setTexture("subsurfaceWeightSampler", SS.subsurfaceWeightTexture), fS.setMatrix("subsurfaceWeightMatrix", SS.subsurfaceWeightTexture.getTextureMatrix())), fS.setFloat("vTransmissionWeight", SS.transmissionWeight), SS.transmissionWeightTexture && (fS.setTexture("transmissionWeightSampler", SS.transmissionWeightTexture), fS.setMatrix("transmissionWeightMatrix", SS.transmissionWeightTexture.getTextureMatrix())), fS.setFloat("vTransmissionScatterAnisotropy", SS.transmissionScatterAnisotropy), fS.setFloat("vSubsurfaceScatterAnisotropy", SS.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, IH.f)(fS, xS, this._scene), HS.useBones && HS.computeBonesUsingShaders && HS.skeleton) {
              const SS = HS.skeleton;
              if (SS.isUsingTextureForMatrices && fS.getUniformIndex("boneTextureInfo") > -1) {
                const gS = SS.getTransformMatrixTexture(HS);
                fS.setTexture("boneSampler", gS), fS.setFloat2("boneTextureInfo", SS._textureWidth, SS._textureHeight)
              } else fS.setMatrices("mBones", HS.skeleton.getTransformMatrices(HS));
              (this._enableVelocity || this._enableVelocityLinear) && fS.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[HS.uniqueId])
            }
            if ((0, eS.t)(HS, fS), HS.morphTargetManager && HS.morphTargetManager.isUsingTextureForTargets && HS.morphTargetManager._bind(fS), (this._enableVelocity || this._enableVelocityLinear) && (fS.setMatrix("previousWorld", this._previousTransformationMatrices[gS.uniqueId].gk), fS.setMatrix("previousViewProjection", this._previousTransformationMatrices[gS.uniqueId].viewProjection)), this._enableObjectId) {
              let SS = HS.uniqueId;
              if (this.objectIdProvider) SS = (0, aH.i)(HS, this.objectIdProvider);
              else if (SS > 16777215) throw new Error(`Invalid geometry object ID ${SS} for mesh "${HS.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              fS.setFloat("objectId", SS)
            }
            if (this._enableMeshBlendTag) {
              const SS = this.meshBlendTagProvider ? (0, aH.e)(HS, this.meshBlendTagProvider) : HS.meshBlendingTag;
              fS.setInt("meshBlendTag", SS)
            }
            qS && HS.hasThinInstances && fS.setMatrix("world", uS), HS._processRendering(gS, SS, fS, xS.fillMode, NS, qS, ((SS, HS) => {
              SS || fS.setMatrix("world", HS)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[gS.uniqueId].gk = uS.clone(), this._previousTransformationMatrices[gS.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), HS.skeleton && this._copyBonesTransformationMatrices(HS.skeleton.getTransformMatrices(HS), this._previousBonesTransformationMatrices[gS.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (HS, gS, tS) => {
          if ((tS || 0 === gS) && HS.dD)
            for (let bS = 0; bS < HS.dD.length; ++bS) {
              const gS = HS.dD[bS],
                tS = gS.zK(),
                XS = gS.getRenderingMesh();
              if (!tS) continue;
              const xS = XS._getInstancesRenderList(gS._id, !!gS.getReplacementMesh()),
                NS = SS.getCaps().instancedArrays && (null !== xS.visibleInstances[gS._id] || XS.hasThinInstances);
              if (!this.isReady(gS, NS)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (HS, gS, tS, bS) => {
          let XS;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.AK().bindAttachments(this._attachmentsFromPrePass)
          }
          if (bS.length) {
            for (SS.setColorWrite(!1), XS = 0; XS < bS.length; XS++) CS(bS.data[XS]);
            SS.setColorWrite(!0)
          }
          for (XS = 0; XS < HS.length; XS++) CS(HS.data[XS]);
          for (SS.setDepthWrite(!1), XS = 0; XS < gS.length; XS++) CS(gS.data[XS]);
          if (this.renderTransparentMeshes)
            for (XS = 0; XS < tS.length; XS++) CS(tS.data[XS]);
          SS.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const SS = this._scene.AK();
        return {
          width: Math.max(1, Math.floor(SS.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(SS.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(SS, HS) {
        for (let gS = 0; gS < SS.length; gS++) HS[gS] = SS[gS];
        return HS
      }
    }
    UH.ForceGLSL = !1, UH.DEPTH_TEXTURE_TYPE = 0, UH.NORMAL_TEXTURE_TYPE = 1, UH.POSITION_TEXTURE_TYPE = 2, UH.VELOCITY_TEXTURE_TYPE = 3, UH.REFLECTIVITY_TEXTURE_TYPE = 4, UH.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, UH.VELOCITY_LINEAR_TEXTURE_TYPE = 6, UH.IRRADIANCE_TEXTURE_TYPE = 7, UH.OBJECT_ID_TEXTURE_TYPE = 8, UH.MESH_BLEND_TAG_TEXTURE_TYPE = 9, UH._SceneComponentInitialization = SS => {
      throw (0, CH.l)("GeometryBufferRendererSceneComponent")
    };
    var pH = gS(37164);
    const sH = {
      effect: null,
      subMesh: null
    };

    function BH(SS) {
      if ("number" === typeof SS) return 1;
      if (SS instanceof WS.m) return 2;
      if (SS instanceof WS.n || SS instanceof FS.b) return 3;
      if (SS instanceof WS.r || SS instanceof FS.c) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class MH {
      populateVectorFromLinkedProperties(SS) {
        const HS = BH(SS);
        for (const gS in this.linkedProperties) {
          const SS = this.linkedProperties[gS],
            tS = SS.numComponents;
          if (HS < tS || SS.targetUniformComponentOffset > HS - tS) return void(1 == tS ? dS.b.Error(`Float property ${SS.name} has an offset that is too large.`) : dS.b.Error(`Vector${tS} property ${SS.name} won't fit in Vector${HS} or has an offset that is too large.`));
          "number" === typeof SS.value ? MH._tmpArray[SS.targetUniformComponentOffset] = SS.value : SS.value.toArray(MH._tmpArray, SS.targetUniformComponentOffset)
        }
        SS.UHS(MH._tmpArray)
      }
      constructor(SS, HS) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = SS, this.numComponents = HS
      }
    }
    MH._tmpArray = [0, 0, 0, 0];
    class FH {
      constructor(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          XS = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = SS, this.targetUniformName = gS, this.defaultValue = HS, this.value = HS, this.targetUniformComponentNum = tS, this.targetUniformComponentOffset = bS, this.requiredDefine = XS
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : BH(this.defaultValue)
      }
    }
    class RH {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(SS, HS, gS) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = SS, this.samplerPrefix = HS, this.textureDefine = gS
      }
    }
    class TH extends((0, jH.c)((0, KH.c)(US.c))) {}
    class oH extends(function(SS) {
      return class extends SS {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(TH)) {}
    class lH extends((0, RS.e)(oH)) {
      constructor(SS) {
        super(SS), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class mH extends((0, GH.b)(oS.d)) {}
    let eH = (() => {
        var SS, HS, tS, bS, xS, NS, qS, uS, IS, fS, kS, aS, KS, jS, GS, CS, nS, PS, QS, DS, wS, hS, ZS, ES, LS, YS, AS, iS, US, pS, sS, BS, RS, oS, rS, SH, HH, gH, tH, bH, XH, xH, NH, qH, uH, KH, jH, GH, CH, nH, PH, QH, DH, wH, JH, OH, dH, cH, vH, EH, LH, YH, AH, yH, VH, iH, WH, zH, pH, BH, TH, oH, eH, rH, Sg, Hg, gg, tg, bg, Xg, xg, Ng, qg, ug, Ig, fg, kg, ag, Kg, jg, Gg, Cg, ng, Pg, Qg, Dg, wg, hg, Zg, Jg, Og, dg, cg;
        let vg, Eg, Lg, Yg, Ag, yg, Vg, ig, Wg, zg, Ug, pg, sg, Bg, Mg, Fg, Rg, Tg, og, lg, mg, eg, rg, St, Ht, gt, tt, bt, Xt, xt, Nt, qt, ut, It, ft, kt, Kt, jt, Gt, Ct, nt, Pt, Qt, Dt, wt, ht, Zt, Jt, Ot, dt, ct, vt, Et, Lt, Yt, At, yt, Vt, it, Wt, zt, Ut, pt, st, Bt, Mt, Ft, Rt, Tt, ot, lt, mt, et, rt, Sb, Hb, gb, tb, bb, Xb, xb, Nb, qb, ub, Ib, fb, kb, ab, Kb, jb, Gb, Cb, nb, Pb, Qb, Db, wb, hb, Zb, Jb, Ob, db, cb, vb, Eb, Lb = mH,
          Yb = [],
          Ab = [],
          yb = [],
          Vb = [],
          ib = [],
          Wb = [],
          zb = [],
          Ub = [],
          pb = [],
          sb = [],
          Bb = [],
          Mb = [],
          Fb = [],
          Rb = [],
          Tb = [],
          ob = [],
          lb = [],
          mb = [],
          eb = [],
          rb = [],
          SX = [],
          HX = [],
          gX = [],
          tX = [],
          bX = [],
          XX = [],
          xX = [],
          NX = [],
          qX = [],
          uX = [],
          IX = [],
          fX = [],
          kX = [],
          aX = [],
          KX = [],
          jX = [],
          GX = [],
          CX = [],
          nX = [],
          PX = [],
          QX = [],
          DX = [],
          wX = [],
          hX = [],
          ZX = [],
          JX = [],
          OX = [],
          dX = [],
          cX = [],
          vX = [],
          EX = [],
          LX = [],
          YX = [],
          AX = [],
          yX = [],
          VX = [],
          iX = [],
          WX = [],
          zX = [],
          UX = [],
          pX = [],
          sX = [],
          BX = [],
          MX = [],
          FX = [],
          RX = [],
          TX = [],
          oX = [],
          lX = [],
          mX = [],
          eX = [],
          rX = [],
          Sx = [],
          Hx = [],
          gx = [],
          tx = [],
          bx = [],
          Xx = [],
          xx = [],
          Nx = [],
          qx = [],
          ux = [],
          Ix = [],
          fx = [],
          kx = [],
          ax = [],
          Kx = [],
          jx = [],
          Gx = [],
          Cx = [],
          nx = [],
          Px = [],
          Qx = [],
          Dx = [],
          wx = [],
          hx = [],
          Zx = [],
          Jx = [],
          Ox = [],
          dx = [],
          cx = [],
          vx = [],
          Ex = [],
          Lx = [],
          Yx = [],
          Ax = [],
          yx = [],
          Vx = [],
          ix = [],
          Wx = [],
          zx = [],
          Ux = [],
          px = [],
          sx = [],
          Bx = [],
          Mx = [],
          Fx = [],
          Rx = [],
          Tx = [],
          ox = [],
          lx = [],
          mx = [],
          ex = [],
          rx = [],
          SN = [],
          HN = [],
          gN = [],
          tN = [],
          bN = [],
          XN = [],
          xN = [],
          NN = [],
          qN = [],
          uN = [],
          IN = [],
          fN = [],
          kN = [],
          aN = [],
          KN = [],
          jN = [],
          GN = [],
          CN = [],
          nN = [],
          PN = [],
          QN = [],
          DN = [],
          wN = [],
          hN = [],
          ZN = [],
          JN = [],
          ON = [],
          dN = [],
          cN = [],
          vN = [],
          EN = [],
          LN = [],
          YN = [],
          AN = [],
          yN = [],
          VN = [],
          iN = [],
          WN = [],
          zN = [],
          UN = [],
          pN = [],
          sN = [],
          BN = [],
          MN = [],
          FN = [],
          RN = [],
          TN = [],
          oN = [],
          lN = [],
          mN = [],
          eN = [],
          rN = [],
          Sq = [],
          Hq = [],
          gq = [],
          tq = [],
          bq = [],
          Xq = [],
          xq = [],
          Nq = [],
          qq = [],
          uq = [],
          Iq = [],
          fq = [],
          kq = [],
          aq = [],
          Kq = [],
          jq = [],
          Gq = [],
          Cq = [],
          nq = [],
          Pq = [],
          Qq = [],
          Dq = [],
          wq = [],
          hq = [],
          Zq = [],
          Jq = [],
          Oq = [],
          dq = [],
          cq = [];
        return SS = class extends Lb {
          get baseWeight() {
            return (0, JS.e)(this, HS, "f")
          }
          set baseWeight(SS) {
            (0, JS.h)(this, HS, SS, "f")
          }
          get baseWeightTexture() {
            return (0, JS.e)(this, tS, "f")
          }
          set baseWeightTexture(SS) {
            (0, JS.h)(this, tS, SS, "f")
          }
          get baseColor() {
            return (0, JS.e)(this, bS, "f")
          }
          set baseColor(SS) {
            (0, JS.h)(this, bS, SS, "f")
          }
          get baseColorTexture() {
            return (0, JS.e)(this, xS, "f")
          }
          set baseColorTexture(SS) {
            (0, JS.h)(this, xS, SS, "f")
          }
          get baseDiffuseRoughness() {
            return (0, JS.e)(this, NS, "f")
          }
          set baseDiffuseRoughness(SS) {
            (0, JS.h)(this, NS, SS, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, JS.e)(this, qS, "f")
          }
          set baseDiffuseRoughnessTexture(SS) {
            (0, JS.h)(this, qS, SS, "f")
          }
          get baseMetalness() {
            return (0, JS.e)(this, uS, "f")
          }
          set baseMetalness(SS) {
            (0, JS.h)(this, uS, SS, "f")
          }
          get baseMetalnessTexture() {
            return (0, JS.e)(this, IS, "f")
          }
          set baseMetalnessTexture(SS) {
            (0, JS.h)(this, IS, SS, "f")
          }
          get specularWeight() {
            return (0, JS.e)(this, fS, "f")
          }
          set specularWeight(SS) {
            (0, JS.h)(this, fS, SS, "f")
          }
          get specularWeightTexture() {
            return (0, JS.e)(this, kS, "f")
          }
          set specularWeightTexture(SS) {
            (0, JS.h)(this, kS, SS, "f")
          }
          get specularColor() {
            return (0, JS.e)(this, aS, "f")
          }
          set specularColor(SS) {
            (0, JS.h)(this, aS, SS, "f")
          }
          get specularColorTexture() {
            return (0, JS.e)(this, KS, "f")
          }
          set specularColorTexture(SS) {
            (0, JS.h)(this, KS, SS, "f")
          }
          get specularRoughness() {
            return (0, JS.e)(this, jS, "f")
          }
          set specularRoughness(SS) {
            (0, JS.h)(this, jS, SS, "f")
          }
          get specularRoughnessTexture() {
            return (0, JS.e)(this, GS, "f")
          }
          set specularRoughnessTexture(SS) {
            (0, JS.h)(this, GS, SS, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, JS.e)(this, CS, "f")
          }
          set specularRoughnessAnisotropy(SS) {
            (0, JS.h)(this, CS, SS, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, JS.e)(this, nS, "f")
          }
          set specularRoughnessAnisotropyTexture(SS) {
            (0, JS.h)(this, nS, SS, "f")
          }
          get specularIor() {
            return (0, JS.e)(this, PS, "f")
          }
          set specularIor(SS) {
            (0, JS.h)(this, PS, SS, "f")
          }
          get transmissionWeight() {
            return (0, JS.e)(this, QS, "f")
          }
          set transmissionWeight(SS) {
            (0, JS.h)(this, QS, SS, "f")
          }
          get transmissionWeightTexture() {
            return (0, JS.e)(this, DS, "f")
          }
          set transmissionWeightTexture(SS) {
            (0, JS.h)(this, DS, SS, "f")
          }
          get transmissionColor() {
            return (0, JS.e)(this, wS, "f")
          }
          set transmissionColor(SS) {
            (0, JS.h)(this, wS, SS, "f")
          }
          get transmissionColorTexture() {
            return (0, JS.e)(this, hS, "f")
          }
          set transmissionColorTexture(SS) {
            (0, JS.h)(this, hS, SS, "f")
          }
          get transmissionDepth() {
            return (0, JS.e)(this, ZS, "f")
          }
          set transmissionDepth(SS) {
            (0, JS.h)(this, ZS, SS, "f")
          }
          get transmissionDepthTexture() {
            return (0, JS.e)(this, ES, "f")
          }
          set transmissionDepthTexture(SS) {
            (0, JS.h)(this, ES, SS, "f")
          }
          get transmissionScatter() {
            return (0, JS.e)(this, LS, "f")
          }
          set transmissionScatter(SS) {
            (0, JS.h)(this, LS, SS, "f")
          }
          get transmissionScatterTexture() {
            return (0, JS.e)(this, YS, "f")
          }
          set transmissionScatterTexture(SS) {
            (0, JS.h)(this, YS, SS, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, JS.e)(this, AS, "f")
          }
          set transmissionScatterAnisotropy(SS) {
            (0, JS.h)(this, AS, SS, "f")
          }
          get transmissionDispersionScale() {
            return (0, JS.e)(this, iS, "f")
          }
          set transmissionDispersionScale(SS) {
            (0, JS.h)(this, iS, SS, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, JS.e)(this, US, "f")
          }
          set transmissionDispersionScaleTexture(SS) {
            (0, JS.h)(this, US, SS, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, JS.e)(this, pS, "f")
          }
          set transmissionDispersionAbbeNumber(SS) {
            (0, JS.h)(this, pS, SS, "f")
          }
          get subsurfaceWeight() {
            return (0, JS.e)(this, sS, "f")
          }
          set subsurfaceWeight(SS) {
            (0, JS.h)(this, sS, SS, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, JS.e)(this, BS, "f")
          }
          set subsurfaceWeightTexture(SS) {
            (0, JS.h)(this, BS, SS, "f")
          }
          get subsurfaceColor() {
            return (0, JS.e)(this, RS, "f")
          }
          set subsurfaceColor(SS) {
            (0, JS.h)(this, RS, SS, "f")
          }
          get subsurfaceColorTexture() {
            return (0, JS.e)(this, oS, "f")
          }
          set subsurfaceColorTexture(SS) {
            (0, JS.h)(this, oS, SS, "f")
          }
          get subsurfaceRadius() {
            return (0, JS.e)(this, rS, "f")
          }
          set subsurfaceRadius(SS) {
            (0, JS.h)(this, rS, SS, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, JS.e)(this, SH, "f")
          }
          set subsurfaceRadiusScale(SS) {
            (0, JS.h)(this, SH, SS, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, JS.e)(this, HH, "f")
          }
          set subsurfaceRadiusScaleTexture(SS) {
            (0, JS.h)(this, HH, SS, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, JS.e)(this, gH, "f")
          }
          set subsurfaceScatterAnisotropy(SS) {
            (0, JS.h)(this, gH, SS, "f")
          }
          get coatWeight() {
            return (0, JS.e)(this, tH, "f")
          }
          set coatWeight(SS) {
            (0, JS.h)(this, tH, SS, "f")
          }
          get coatWeightTexture() {
            return (0, JS.e)(this, bH, "f")
          }
          set coatWeightTexture(SS) {
            (0, JS.h)(this, bH, SS, "f")
          }
          get coatColor() {
            return (0, JS.e)(this, XH, "f")
          }
          set coatColor(SS) {
            (0, JS.h)(this, XH, SS, "f")
          }
          get coatColorTexture() {
            return (0, JS.e)(this, xH, "f")
          }
          set coatColorTexture(SS) {
            (0, JS.h)(this, xH, SS, "f")
          }
          get coatRoughness() {
            return (0, JS.e)(this, NH, "f")
          }
          set coatRoughness(SS) {
            (0, JS.h)(this, NH, SS, "f")
          }
          get coatRoughnessTexture() {
            return (0, JS.e)(this, qH, "f")
          }
          set coatRoughnessTexture(SS) {
            (0, JS.h)(this, qH, SS, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, JS.e)(this, uH, "f")
          }
          set coatRoughnessAnisotropy(SS) {
            (0, JS.h)(this, uH, SS, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, JS.e)(this, KH, "f")
          }
          set coatRoughnessAnisotropyTexture(SS) {
            (0, JS.h)(this, KH, SS, "f")
          }
          get coatIor() {
            return (0, JS.e)(this, jH, "f")
          }
          set coatIor(SS) {
            (0, JS.h)(this, jH, SS, "f")
          }
          get coatDarkening() {
            return (0, JS.e)(this, GH, "f")
          }
          set coatDarkening(SS) {
            (0, JS.h)(this, GH, SS, "f")
          }
          get coatDarkeningTexture() {
            return (0, JS.e)(this, CH, "f")
          }
          set coatDarkeningTexture(SS) {
            (0, JS.h)(this, CH, SS, "f")
          }
          get fuzzWeight() {
            return (0, JS.e)(this, nH, "f")
          }
          set fuzzWeight(SS) {
            (0, JS.h)(this, nH, SS, "f")
          }
          get fuzzWeightTexture() {
            return (0, JS.e)(this, PH, "f")
          }
          set fuzzWeightTexture(SS) {
            (0, JS.h)(this, PH, SS, "f")
          }
          get fuzzColor() {
            return (0, JS.e)(this, QH, "f")
          }
          set fuzzColor(SS) {
            (0, JS.h)(this, QH, SS, "f")
          }
          get fuzzColorTexture() {
            return (0, JS.e)(this, DH, "f")
          }
          set fuzzColorTexture(SS) {
            (0, JS.h)(this, DH, SS, "f")
          }
          get fuzzRoughness() {
            return (0, JS.e)(this, wH, "f")
          }
          set fuzzRoughness(SS) {
            (0, JS.h)(this, wH, SS, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, JS.e)(this, JH, "f")
          }
          set fuzzRoughnessTexture(SS) {
            (0, JS.h)(this, JH, SS, "f")
          }
          get geometryThinWalled() {
            return (0, JS.e)(this, OH, "f")
          }
          set geometryThinWalled(SS) {
            (0, JS.h)(this, OH, SS, "f")
          }
          get geometryNormalTexture() {
            return (0, JS.e)(this, dH, "f")
          }
          set geometryNormalTexture(SS) {
            (0, JS.h)(this, dH, SS, "f")
          }
          get geometryTangent() {
            return (0, JS.e)(this, cH, "f")
          }
          set geometryTangent(SS) {
            (0, JS.h)(this, cH, SS, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(SS) {
            this.geometryTangent = new WS.m(Math.cos(SS), Math.sin(SS))
          }
          get geometryTangentTexture() {
            return (0, JS.e)(this, vH, "f")
          }
          set geometryTangentTexture(SS) {
            (0, JS.h)(this, vH, SS, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, JS.e)(this, EH, "f")
          }
          set geometryCoatNormalTexture(SS) {
            (0, JS.h)(this, EH, SS, "f")
          }
          get geometryCoatTangent() {
            return (0, JS.e)(this, LH, "f")
          }
          set geometryCoatTangent(SS) {
            (0, JS.h)(this, LH, SS, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(SS) {
            this.geometryCoatTangent = new WS.m(Math.cos(SS), Math.sin(SS))
          }
          get geometryCoatTangentTexture() {
            return (0, JS.e)(this, YH, "f")
          }
          set geometryCoatTangentTexture(SS) {
            (0, JS.h)(this, YH, SS, "f")
          }
          get geometryOpacity() {
            return (0, JS.e)(this, AH, "f")
          }
          set geometryOpacity(SS) {
            (0, JS.h)(this, AH, SS, "f")
          }
          get geometryOpacityTexture() {
            return (0, JS.e)(this, yH, "f")
          }
          set geometryOpacityTexture(SS) {
            (0, JS.h)(this, yH, SS, "f")
          }
          get geometryThickness() {
            return (0, JS.e)(this, VH, "f")
          }
          set geometryThickness(SS) {
            (0, JS.h)(this, VH, SS, "f")
          }
          get geometryThicknessTexture() {
            return (0, JS.e)(this, iH, "f")
          }
          set geometryThicknessTexture(SS) {
            (0, JS.h)(this, iH, SS, "f")
          }
          get emissionLuminance() {
            return (0, JS.e)(this, WH, "f")
          }
          set emissionLuminance(SS) {
            (0, JS.h)(this, WH, SS, "f")
          }
          get emissionColor() {
            return (0, JS.e)(this, zH, "f")
          }
          set emissionColor(SS) {
            (0, JS.h)(this, zH, SS, "f")
          }
          get emissionColorTexture() {
            return (0, JS.e)(this, pH, "f")
          }
          set emissionColorTexture(SS) {
            (0, JS.h)(this, pH, SS, "f")
          }
          get thinFilmWeight() {
            return (0, JS.e)(this, BH, "f")
          }
          set thinFilmWeight(SS) {
            (0, JS.h)(this, BH, SS, "f")
          }
          get thinFilmWeightTexture() {
            return (0, JS.e)(this, TH, "f")
          }
          set thinFilmWeightTexture(SS) {
            (0, JS.h)(this, TH, SS, "f")
          }
          get thinFilmThickness() {
            return (0, JS.e)(this, oH, "f")
          }
          set thinFilmThickness(SS) {
            (0, JS.h)(this, oH, SS, "f")
          }
          get thinFilmThicknessMin() {
            return (0, JS.e)(this, eH, "f")
          }
          set thinFilmThicknessMin(SS) {
            (0, JS.h)(this, eH, SS, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, JS.e)(this, rH, "f")
          }
          set thinFilmThicknessTexture(SS) {
            (0, JS.h)(this, rH, SS, "f")
          }
          get thinFilmIor() {
            return (0, JS.e)(this, Sg, "f")
          }
          set thinFilmIor(SS) {
            (0, JS.h)(this, Sg, SS, "f")
          }
          get ambientOcclusionTexture() {
            return (0, JS.e)(this, Hg, "f")
          }
          set ambientOcclusionTexture(SS) {
            (0, JS.h)(this, Hg, SS, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(SS) {
            this._sssQuality !== SS && (this._sssQuality = SS, this.OHS(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(SS) {
            this._sssIrradianceTexture !== SS && (this._sssIrradianceTexture = SS, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(SS) {
            this._sssDepthTexture !== SS && (this._sssDepthTexture = SS, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, JS.e)(this, gg, "f")
          }
          set directIntensity(SS) {
            (0, JS.h)(this, gg, SS, "f")
          }
          get environmentIntensity() {
            return (0, JS.e)(this, tg, "f")
          }
          set environmentIntensity(SS) {
            (0, JS.h)(this, tg, SS, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, JS.e)(this, bg, "f")
          }
          set useSpecularWeightFromTextureAlpha(SS) {
            (0, JS.h)(this, bg, SS, "f")
          }
          get forceAlphaTest() {
            return (0, JS.e)(this, Xg, "f")
          }
          set forceAlphaTest(SS) {
            (0, JS.h)(this, Xg, SS, "f")
          }
          get alphaCutOff() {
            return (0, JS.e)(this, xg, "f")
          }
          set alphaCutOff(SS) {
            (0, JS.h)(this, xg, SS, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, JS.e)(this, Ng, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(SS) {
            (0, JS.h)(this, Ng, SS, "f")
          }
          get useAmbientInGrayScale() {
            return (0, JS.e)(this, qg, "f")
          }
          set useAmbientInGrayScale(SS) {
            (0, JS.h)(this, qg, SS, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(FS.b.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === XS.d.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(SS) {
            SS !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = SS ? XS.d.LIGHTFALLOFF_PHYSICAL : XS.d.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === XS.d.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(SS) {
            SS !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = SS ? XS.d.LIGHTFALLOFF_GLTF : XS.d.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, JS.e)(this, ug, "f")
          }
          set useObjectSpaceNormalMap(SS) {
            (0, JS.h)(this, ug, SS, "f")
          }
          get useParallax() {
            return (0, JS.e)(this, Ig, "f")
          }
          set useParallax(SS) {
            (0, JS.h)(this, Ig, SS, "f")
          }
          get useParallaxOcclusion() {
            return (0, JS.e)(this, fg, "f")
          }
          set useParallaxOcclusion(SS) {
            (0, JS.h)(this, fg, SS, "f")
          }
          get parallaxScaleBias() {
            return (0, JS.e)(this, kg, "f")
          }
          set parallaxScaleBias(SS) {
            (0, JS.h)(this, kg, SS, "f")
          }
          get disableLighting() {
            return (0, JS.e)(this, ag, "f")
          }
          set disableLighting(SS) {
            (0, JS.h)(this, ag, SS, "f")
          }
          get forceIrradianceInFragment() {
            return (0, JS.e)(this, Kg, "f")
          }
          set forceIrradianceInFragment(SS) {
            (0, JS.h)(this, Kg, SS, "f")
          }
          get maxSimultaneousLights() {
            return (0, JS.e)(this, jg, "f")
          }
          set maxSimultaneousLights(SS) {
            (0, JS.h)(this, jg, SS, "f")
          }
          get invertNormalMapX() {
            return (0, JS.e)(this, Gg, "f")
          }
          set invertNormalMapX(SS) {
            (0, JS.h)(this, Gg, SS, "f")
          }
          get invertNormalMapY() {
            return (0, JS.e)(this, Cg, "f")
          }
          set invertNormalMapY(SS) {
            (0, JS.h)(this, Cg, SS, "f")
          }
          get twoSidedLighting() {
            return (0, JS.e)(this, ng, "f")
          }
          set twoSidedLighting(SS) {
            (0, JS.h)(this, ng, SS, "f")
          }
          get useAlphaFresnel() {
            return (0, JS.e)(this, Pg, "f")
          }
          set useAlphaFresnel(SS) {
            (0, JS.h)(this, Pg, SS, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, JS.e)(this, Qg, "f")
          }
          set useLinearAlphaFresnel(SS) {
            (0, JS.h)(this, Qg, SS, "f")
          }
          get environmentBRDFTexture() {
            return (0, JS.e)(this, Dg, "f")
          }
          set environmentBRDFTexture(SS) {
            (0, JS.h)(this, Dg, SS, "f")
          }
          get forceNormalForward() {
            return (0, JS.e)(this, wg, "f")
          }
          set forceNormalForward(SS) {
            (0, JS.h)(this, wg, SS, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, JS.e)(this, hg, "f")
          }
          set enableSpecularAntiAliasing(SS) {
            (0, JS.h)(this, hg, SS, "f")
          }
          get useHorizonOcclusion() {
            return (0, JS.e)(this, Zg, "f")
          }
          set useHorizonOcclusion(SS) {
            (0, JS.h)(this, Zg, SS, "f")
          }
          get useRadianceOcclusion() {
            return (0, JS.e)(this, Jg, "f")
          }
          set useRadianceOcclusion(SS) {
            (0, JS.h)(this, Jg, SS, "f")
          }
          get unlit() {
            return (0, JS.e)(this, Og, "f")
          }
          set unlit(SS) {
            (0, JS.h)(this, Og, SS, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, JS.e)(this, dg, "f")
          }
          set applyDecalMapAfterDetailMap(SS) {
            (0, JS.h)(this, dg, SS, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(SS) {
            this._backgroundRefractionTexture = SS, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(SS) {
            this._refractionHighQualityBlur !== SS && (this._refractionHighQualityBlur = SS, this.OHS(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(SS) {
            this._realTimeFiltering = SS, this.OHS(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(SS) {
            this._realTimeFilteringQuality = SS, this.OHS(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(SS) {
            this._fuzzSampleNumber = SS, this.OHS(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, JS.e)(this, cg, "f")
          }
          set debugMode(SS) {
            (0, JS.h)(this, cg, SS, "f")
          }
          constructor(gS, OS) {
            super(gS, OS, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || SS.ForceGLSL), HS.set(this, ((0, JS.k)(this, Yb), (0, JS.k)(this, Ab, void 0))), this._baseWeight = ((0, JS.k)(this, yb), new FH("base_weight", 1, "vBaseWeight", 1)), tS.set(this, (0, JS.k)(this, Vb, void 0)), this._baseWeightTexture = ((0, JS.k)(this, ib), new RH("base_weight", "baseWeight", "BASE_WEIGHT")), bS.set(this, (0, JS.k)(this, Wb, void 0)), this._baseColor = ((0, JS.k)(this, zb), new FH("base_color", FS.b.White(), "vBaseColor", 4)), xS.set(this, (0, JS.k)(this, Ub, void 0)), this._baseColorTexture = ((0, JS.k)(this, pb), new RH("base_color", "baseColor", "BASE_COLOR")), NS.set(this, (0, JS.k)(this, sb, void 0)), this._baseDiffuseRoughness = ((0, JS.k)(this, Bb), new FH("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), qS.set(this, (0, JS.k)(this, Mb, void 0)), this._baseDiffuseRoughnessTexture = ((0, JS.k)(this, Fb), new RH("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), uS.set(this, (0, JS.k)(this, Rb, void 0)), this._baseMetalness = ((0, JS.k)(this, Tb), new FH("base_metalness", 0, "vReflectanceInfo", 4, 0)), IS.set(this, (0, JS.k)(this, ob, void 0)), this._baseMetalnessTexture = ((0, JS.k)(this, lb), new RH("base_metalness", "baseMetalness", "BASE_METALNESS")), fS.set(this, (0, JS.k)(this, mb, void 0)), this._specularWeight = ((0, JS.k)(this, eb), new FH("specular_weight", 1, "vReflectanceInfo", 4, 3)), kS.set(this, (0, JS.k)(this, rb, void 0)), this._specularWeightTexture = ((0, JS.k)(this, SX), new RH("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), aS.set(this, (0, JS.k)(this, HX, void 0)), this._specularColor = ((0, JS.k)(this, gX), new FH("specular_color", FS.b.White(), "vSpecularColor", 4)), KS.set(this, (0, JS.k)(this, tX, void 0)), this._specularColorTexture = ((0, JS.k)(this, bX), new RH("specular_color", "specularColor", "SPECULAR_COLOR")), jS.set(this, (0, JS.k)(this, XX, void 0)), this._specularRoughness = ((0, JS.k)(this, xX), new FH("specular_roughness", .3, "vReflectanceInfo", 4, 1)), GS.set(this, (0, JS.k)(this, NX, void 0)), this._specularRoughnessTexture = ((0, JS.k)(this, qX), new RH("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), CS.set(this, (0, JS.k)(this, uX, void 0)), this._specularRoughnessAnisotropy = ((0, JS.k)(this, IX), new FH("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), nS.set(this, (0, JS.k)(this, fX, void 0)), this._specularRoughnessAnisotropyTexture = ((0, JS.k)(this, kX), new RH("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), PS.set(this, (0, JS.k)(this, aX, void 0)), this._specularIor = ((0, JS.k)(this, KX), new FH("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), QS.set(this, (0, JS.k)(this, jX, void 0)), this._transmissionWeight = ((0, JS.k)(this, GX), new FH("transmission_weight", 0, "vTransmissionWeight", 1)), DS.set(this, (0, JS.k)(this, CX, void 0)), this._transmissionWeightTexture = ((0, JS.k)(this, nX), new RH("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), wS.set(this, (0, JS.k)(this, PX, void 0)), this._transmissionColor = ((0, JS.k)(this, QX), new FH("transmission_color", FS.b.White(), "vTransmissionColor", 3, 0)), hS.set(this, (0, JS.k)(this, DX, void 0)), this._transmissionColorTexture = ((0, JS.k)(this, wX), new RH("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), ZS.set(this, (0, JS.k)(this, hX, void 0)), this._transmissionDepth = ((0, JS.k)(this, ZX), new FH("transmission_depth", 0, "vTransmissionDepth", 1, 0)), ES.set(this, (0, JS.k)(this, JX, void 0)), this._transmissionDepthTexture = ((0, JS.k)(this, OX), new RH("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), LS.set(this, (0, JS.k)(this, dX, void 0)), this._transmissionScatter = ((0, JS.k)(this, cX), new FH("transmission_scatter", FS.b.Black(), "vTransmissionScatter", 3, 0)), YS.set(this, (0, JS.k)(this, vX, void 0)), this._transmissionScatterTexture = ((0, JS.k)(this, EX), new RH("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), AS.set(this, (0, JS.k)(this, LX, void 0)), this._transmissionScatterAnisotropy = ((0, JS.k)(this, YX), new FH("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), iS.set(this, (0, JS.k)(this, AX, void 0)), this._transmissionDispersionScale = ((0, JS.k)(this, yX), new FH("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), US.set(this, (0, JS.k)(this, VX, void 0)), this._transmissionDispersionScaleTexture = ((0, JS.k)(this, iX), new RH("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), pS.set(this, (0, JS.k)(this, WX, void 0)), this._transmissionDispersionAbbeNumber = ((0, JS.k)(this, zX), new FH("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), sS.set(this, (0, JS.k)(this, UX, void 0)), this._subsurfaceWeight = ((0, JS.k)(this, pX), new FH("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), BS.set(this, (0, JS.k)(this, sX, void 0)), this._subsurfaceWeightTexture = ((0, JS.k)(this, BX), new RH("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), RS.set(this, (0, JS.k)(this, MX, void 0)), this._subsurfaceColor = ((0, JS.k)(this, FX), new FH("subsurface_color", new FS.b(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), oS.set(this, (0, JS.k)(this, RX, void 0)), this._subsurfaceColorTexture = ((0, JS.k)(this, TX), new RH("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), rS.set(this, (0, JS.k)(this, oX, void 0)), this._subsurfaceRadius = ((0, JS.k)(this, lX), new FH("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), SH.set(this, (0, JS.k)(this, mX, void 0)), this._subsurfaceRadiusScale = ((0, JS.k)(this, eX), new FH("subsurface_radius_scale", new FS.b(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), HH.set(this, (0, JS.k)(this, rX, void 0)), this._subsurfaceRadiusScaleTexture = ((0, JS.k)(this, Sx), new RH("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), gH.set(this, (0, JS.k)(this, Hx, void 0)), this._subsurfaceScatterAnisotropy = ((0, JS.k)(this, gx), new FH("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), tH.set(this, (0, JS.k)(this, tx, void 0)), this._coatWeight = ((0, JS.k)(this, bx), new FH("coat_weight", 0, "vCoatWeight", 1, 0)), bH.set(this, (0, JS.k)(this, Xx, void 0)), this._coatWeightTexture = ((0, JS.k)(this, xx), new RH("coat_weight", "coatWeight", "COAT_WEIGHT")), XH.set(this, (0, JS.k)(this, Nx, void 0)), this._coatColor = ((0, JS.k)(this, qx), new FH("coat_color", FS.b.White(), "vCoatColor", 3, 0)), xH.set(this, (0, JS.k)(this, ux, void 0)), this._coatColorTexture = ((0, JS.k)(this, Ix), new RH("coat_color", "coatColor", "COAT_COLOR")), NH.set(this, (0, JS.k)(this, fx, void 0)), this._coatRoughness = ((0, JS.k)(this, kx), new FH("coat_roughness", 0, "vCoatRoughness", 1, 0)), qH.set(this, (0, JS.k)(this, ax, void 0)), this._coatRoughnessTexture = ((0, JS.k)(this, Kx), new RH("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), uH.set(this, (0, JS.k)(this, jx, void 0)), this._coatRoughnessAnisotropy = ((0, JS.k)(this, Gx), new FH("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), KH.set(this, (0, JS.k)(this, Cx, void 0)), this._coatRoughnessAnisotropyTexture = ((0, JS.k)(this, nx), new RH("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), jH.set(this, (0, JS.k)(this, Px, void 0)), this._coatIor = ((0, JS.k)(this, Qx), new FH("coat_ior", 1.5, "vCoatIor", 1, 0)), GH.set(this, (0, JS.k)(this, Dx, void 0)), this._coatDarkening = ((0, JS.k)(this, wx), new FH("coat_darkening", 1, "vCoatDarkening", 1, 0)), CH.set(this, (0, JS.k)(this, hx, void 0)), this._coatDarkeningTexture = ((0, JS.k)(this, Zx), new RH("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, nH.set(this, (0, JS.k)(this, Jx, void 0)), this._fuzzWeight = ((0, JS.k)(this, Ox), new FH("fuzz_weight", 0, "vFuzzWeight", 1, 0)), PH.set(this, (0, JS.k)(this, dx, void 0)), this._fuzzWeightTexture = ((0, JS.k)(this, cx), new RH("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), QH.set(this, (0, JS.k)(this, vx, void 0)), this._fuzzColor = ((0, JS.k)(this, Ex), new FH("fuzz_color", FS.b.White(), "vFuzzColor", 3, 0)), DH.set(this, (0, JS.k)(this, Lx, void 0)), this._fuzzColorTexture = ((0, JS.k)(this, Yx), new RH("fuzz_color", "fuzzColor", "FUZZ_COLOR")), wH.set(this, (0, JS.k)(this, Ax, void 0)), this._fuzzRoughness = ((0, JS.k)(this, yx), new FH("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), JH.set(this, (0, JS.k)(this, Vx, void 0)), this._fuzzRoughnessTexture = ((0, JS.k)(this, ix), new RH("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), OH.set(this, (0, JS.k)(this, Wx, void 0)), this._geometryThinWalled = ((0, JS.k)(this, zx), new FH("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), dH.set(this, (0, JS.k)(this, Ux, void 0)), this._geometryNormalTexture = ((0, JS.k)(this, px), new RH("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), cH.set(this, (0, JS.k)(this, sx, void 0)), this._geometryTangent = ((0, JS.k)(this, Bx), new FH("geometry_tangent", new WS.m(1, 0), "vSpecularAnisotropy", 3, 0)), vH.set(this, (0, JS.k)(this, Mx, void 0)), this._geometryTangentTexture = ((0, JS.k)(this, Fx), new RH("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), EH.set(this, (0, JS.k)(this, Rx, void 0)), this._geometryCoatNormalTexture = ((0, JS.k)(this, Tx), new RH("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), LH.set(this, (0, JS.k)(this, ox, void 0)), this._geometryCoatTangent = ((0, JS.k)(this, lx), new FH("geometry_coat_tangent", new WS.m(1, 0), "vGeometryCoatTangent", 2, 0)), YH.set(this, (0, JS.k)(this, mx, void 0)), this._geometryCoatTangentTexture = ((0, JS.k)(this, ex), new RH("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), AH.set(this, (0, JS.k)(this, rx, void 0)), this._geometryOpacity = ((0, JS.k)(this, SN), new FH("geometry_opacity", 1, "vBaseColor", 4, 3)), yH.set(this, (0, JS.k)(this, HN, void 0)), this._geometryOpacityTexture = ((0, JS.k)(this, gN), new RH("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), VH.set(this, (0, JS.k)(this, tN, void 0)), this._geometryThickness = ((0, JS.k)(this, bN), new FH("geometry_thickness", 0, "vGeometryThickness", 1, 0)), iH.set(this, (0, JS.k)(this, XN, void 0)), this._geometryThicknessTexture = ((0, JS.k)(this, xN), new RH("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), WH.set(this, (0, JS.k)(this, NN, void 0)), this._emissionLuminance = ((0, JS.k)(this, qN), new FH("emission_luminance", 1, "vLightingIntensity", 4, 1)), zH.set(this, (0, JS.k)(this, uN, void 0)), this._emissionColor = ((0, JS.k)(this, IN), new FH("emission_color", FS.b.Black(), "vEmissionColor", 3)), pH.set(this, (0, JS.k)(this, fN, void 0)), this._emissionColorTexture = ((0, JS.k)(this, kN), new RH("emission_color", "emissionColor", "EMISSION_COLOR")), BH.set(this, (0, JS.k)(this, aN, void 0)), this._thinFilmWeight = ((0, JS.k)(this, KN), new FH("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), TH.set(this, (0, JS.k)(this, jN, void 0)), this._thinFilmWeightTexture = ((0, JS.k)(this, GN), new RH("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), oH.set(this, (0, JS.k)(this, CN, void 0)), this._thinFilmThickness = ((0, JS.k)(this, nN), new FH("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), eH.set(this, (0, JS.k)(this, PN, void 0)), this._thinFilmThicknessMin = ((0, JS.k)(this, QN), new FH("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), rH.set(this, (0, JS.k)(this, DN, void 0)), this._thinFilmThicknessTexture = ((0, JS.k)(this, wN), new RH("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), Sg.set(this, (0, JS.k)(this, hN, void 0)), this._thinFilmIor = ((0, JS.k)(this, ZN), new FH("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), Hg.set(this, (0, JS.k)(this, JN, void 0)), this._ambientOcclusionTexture = ((0, JS.k)(this, ON), new RH("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = SS.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, gg.set(this, (0, JS.k)(this, dN, 1)), tg.set(this, ((0, JS.k)(this, cN), (0, JS.k)(this, vN, 1))), bg.set(this, ((0, JS.k)(this, EN), (0, JS.k)(this, LN, !1))), Xg.set(this, ((0, JS.k)(this, YN), (0, JS.k)(this, AN, !1))), xg.set(this, ((0, JS.k)(this, yN), (0, JS.k)(this, VN, .4))), Ng.set(this, ((0, JS.k)(this, iN), (0, JS.k)(this, WN, !1))), qg.set(this, ((0, JS.k)(this, zN), (0, JS.k)(this, UN, !1))), ug.set(this, ((0, JS.k)(this, pN), (0, JS.k)(this, sN, !1))), Ig.set(this, ((0, JS.k)(this, BN), (0, JS.k)(this, MN, !1))), fg.set(this, ((0, JS.k)(this, FN), (0, JS.k)(this, RN, !1))), kg.set(this, ((0, JS.k)(this, TN), (0, JS.k)(this, oN, .05))), ag.set(this, ((0, JS.k)(this, lN), (0, JS.k)(this, mN, !1))), Kg.set(this, ((0, JS.k)(this, eN), (0, JS.k)(this, rN, !1))), jg.set(this, ((0, JS.k)(this, Sq), (0, JS.k)(this, Hq, 4))), Gg.set(this, ((0, JS.k)(this, gq), (0, JS.k)(this, tq, !1))), Cg.set(this, ((0, JS.k)(this, bq), (0, JS.k)(this, Xq, !1))), ng.set(this, ((0, JS.k)(this, xq), (0, JS.k)(this, Nq, !1))), Pg.set(this, ((0, JS.k)(this, qq), (0, JS.k)(this, uq, !1))), Qg.set(this, ((0, JS.k)(this, Iq), (0, JS.k)(this, fq, !1))), Dg.set(this, ((0, JS.k)(this, kq), (0, JS.k)(this, aq, null))), wg.set(this, ((0, JS.k)(this, Kq), (0, JS.k)(this, jq, !1))), hg.set(this, ((0, JS.k)(this, Gq), (0, JS.k)(this, Cq, !1))), Zg.set(this, ((0, JS.k)(this, nq), (0, JS.k)(this, Pq, !0))), Jg.set(this, ((0, JS.k)(this, Qq), (0, JS.k)(this, Dq, !0))), Og.set(this, ((0, JS.k)(this, wq), (0, JS.k)(this, hq, !1))), dg.set(this, ((0, JS.k)(this, Zq), (0, JS.k)(this, Jq, !1))), this._lightingInfos = ((0, JS.k)(this, Oq), new WS.r(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = XS.d.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new cS.f(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, cg.set(this, (0, JS.k)(this, dq, 0)), this.debugLimit = ((0, JS.k)(this, cq), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = XS.d.MATERIAL_OPAQUE, this.lL() && !this.lL()?.AK().isWebGPU && this.lL().AK().uj < 2 && dS.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), SS._noiseTextures[this.lL().uniqueId] || (SS._noiseTextures[this.lL().uniqueId] = new vS.i(ZH.k.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.lL(), !1, !0, 1), this.lL().bY.addOnce((() => {
              SS._noiseTextures[this.lL().uniqueId]?.dispose(), delete SS._noiseTextures[this.lL().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), lS.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), lS.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = VS(this.lL()), this._environmentFuzzBRDFTexture = yS(this.lL()), this.prePassConfiguration = new MS.d, this._propertyList = {};
            for (const SS of Object.getOwnPropertyNames(this)) {
              const HS = this[SS];
              HS instanceof FH && (this._propertyList[SS] = HS)
            }
            Object.keys(this._propertyList).forEach((SS => {
              const HS = this._propertyList[SS];
              let gS = this._uniformsList[HS.targetUniformName];
              gS ? gS.numComponents !== HS.targetUniformComponentNum ? dS.b.Error(`Uniform ${HS.targetUniformName} already exists of size ${gS.numComponents}, but trying to set it to ${HS.targetUniformComponentNum}.`) : gS.requiredDefine !== HS.requiredDefine && (gS.requiredDefine = void 0) : (gS = new MH(HS.targetUniformName, HS.targetUniformComponentNum), gS.requiredDefine = HS.requiredDefine, this._uniformsList[HS.targetUniformName] = gS), "" === gS.firstLinkedKey && (gS.firstLinkedKey = HS.name), gS.linkedProperties[HS.name] = HS
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const SS of Object.getOwnPropertyNames(this)) {
              const HS = this[SS];
              HS instanceof RH && (this._samplersList[SS] = HS)
            }
            for (const SS in this._samplersList) {
              const HS = this._samplersList[SS].textureDefine;
              this._samplerDefines[HS] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[HS + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[HS + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(lS.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(lS.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(SS) {
            this._transparencyMode !== SS && (this._transparencyMode = SS, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== XS.d.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(SS) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(SS)
          }
          clone(HS) {
            let gS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const bS = hH.b.Clone((() => new SS(HS, this.lL())), this, {
              cloneTexturesOnlyOnce: gS
            });
            return bS.id = HS, bS.name = HS, this.stencil.copyTo(bS.stencil), this._clonePlugins(bS, tS), bS
          }
          serialize() {
            const SS = super.serialize();
            return SS.customType = "BABYLON.OpenPBRMaterial", SS
          }
          static Parse(HS, gS, tS) {
            const bS = hH.b.Parse((() => new SS(HS.name, gS)), HS, gS, tS);
            return HS.stencil && bS.stencil.parse(HS.stencil, gS, tS), XS.d._ParsePlugins(HS, bS, gS, tS), bS
          }
          forceCompilation(SS, HS, gS) {
            const tS = {
              clipPlane: !1,
              useInstances: !1,
              ...gS
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const gS = new lH({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                bS = this._prepareEffect(SS, SS, gS, void 0, void 0, tS.useInstances, tS.clipPlane);
              this._onEffectCreatedObservable && (sH.effect = bS, sH.subMesh = null, this._onEffectCreatedObservable.notifyObservers(sH)), bS.isReady() ? HS && HS(this) : bS.onCompileObservable.add((() => {
                HS && HS(this)
              }))
            })()
          }
          isReadyForSubMesh(HS, gS, tS) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const bS = gS._drawWrapper;
            if (bS.effect && this.isFrozen && bS._wasPreviouslyReady && bS._wasPreviouslyUsingInstances === tS) return !0;
            gS.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), gS.materialDefines = new lH({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const XS = gS.materialDefines;
            if (this._isReadyForSubMesh(gS)) return !0;
            const xS = this.lL(),
              NS = xS.AK();
            if (XS._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, xS.texturesEnabled)) {
              for (const SS in this._samplersList) {
                const HS = this._samplersList[SS];
                if (HS.value && !HS.value.isReadyOrNotBlocking()) return !1
              }
              const HS = this._getRadianceTexture();
              if (HS && lS.e.ReflectionTextureEnabled) {
                if (!HS.isReadyOrNotBlocking()) return !1;
                if (HS.irradianceTexture) {
                  if (!HS.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!HS.sphericalPolynomial && HS.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && lS.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && lS.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && lS.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (SS._noiseTextures[xS.uniqueId] && !SS._noiseTextures[xS.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = XS, this._eventInfo.subMesh = gS, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (XS._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (XS.AREALIGHTUSED)
              for (let SS = 0; SS < HS.lightSources.length; SS++)
                if (!HS.lightSources[SS]._isReady()) return !1;
            if (NS.getCaps().standardDerivatives || HS.isVerticesDataPresent(zS.h.NormalKind) || (HS.createNormals(!0), dS.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + HS.name)), !(0, eS.c)(xS, HS, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const qS = gS.effect,
              uS = XS._areLightsDisposed,
              IS = this._prepareEffect(HS, gS.getRenderingMesh(), XS, this.onCompiled, this.onError, tS, null);
            let fS = !1;
            if (IS)
              if (this._onEffectCreatedObservable && (sH.effect = IS, sH.subMesh = gS, this._onEffectCreatedObservable.notifyObservers(sH)), this.allowShaderHotSwapping && qS && !IS.isReady()) {
                if (XS.markAsUnprocessed(), fS = this.isFrozen, uS) return XS._areLightsDisposed = !0, !1
              } else xS.resetCachedMaterial(), gS.setEffect(IS, XS, this._materialContext);
            return !(!gS.effect || !gS.effect.isReady()) && (XS._renderId = xS.getRenderId(), bS._wasPreviouslyReady = !fS, bS._wasPreviouslyUsingInstances = !!tS, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const SS = this._uniformBuffer;
            SS.addUniform("vTangentSpaceParams", 2), SS.addUniform("vLightingIntensity", 4), SS.addUniform("pointSize", 1), SS.addUniform("vDebugMode", 2), SS.addUniform("renderTargetSize", 2), SS.addUniform("cameraInfo", 4), SS.addUniform("vTextureRepetitionHexTilingParams", 4), SS.addUniform("backgroundRefractionMatrix", 16), SS.addUniform("vBackgroundRefractionInfos", 3), (0, eS.ib)(SS, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((HS => {
              SS.addUniform(HS.name, HS.numComponents)
            })), Object.values(this._samplersList).forEach((HS => {
              SS.addUniform(HS.samplerInfoName, 2), SS.addUniform(HS.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(SS, HS, gS, tS) {
            if (0 === this.geometryThickness) SS.updateFloat("vGeometryThickness", 0);
            else {
              tS.getRenderingMesh().getWorldMatrix().decompose(WS.l.VK[0]);
              const HS = Math.max(Math.abs(WS.l.VK[0].x), Math.abs(WS.l.VK[0].y), Math.abs(WS.l.VK[0].z));
              SS.updateFloat("vGeometryThickness", this.geometryThickness * HS)
            }
          }
          bindForSubMesh(HS, gS, tS) {
            const bS = this.lL(),
              XS = tS.materialDefines;
            if (!XS) return;
            const xS = tS.effect;
            if (!xS) return;
            this._activeEffect = xS, gS.getMeshUniformBuffer().bindToEffect(xS, "Mesh"), gS.transferToEffect(HS);
            const NS = bS.AK();
            this._uniformBuffer.bindToEffect(xS, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, bS, gS, HS, this.isFrozen), aH.d.Bind(NS.currentRenderPassId, this._activeEffect, gS, HS, this);
            const qS = bS.activeCamera;
            qS ? this._uniformBuffer.updateFloat4("cameraInfo", qS.minZ, qS.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const uS = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", uS[0], uS[1], uS[2], uS[3]), this._eventInfo.subMesh = tS, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), XS.OBJECTSPACE_NORMALMAP && (HS.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const IS = this._mustRebind(bS, xS, tS, gS.visibility),
              fS = NS._features.needToAlwaysBindUniformBuffers;
            (0, eS.f)(gS, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, fH.b)(this._activeEffect, this._vertexPullingMetadata);
            const kS = this._uniformBuffer;
            if (IS) {
              this.bindViewProjection(xS);
              const HS = this._getRadianceTexture();
              if (!kS.useUbo || !this.isFrozen || !kS.isSync || tS._drawWrapper._forceRebindOnNextCall) {
                if (bS.texturesEnabled) {
                  for (const SS in this._samplersList) {
                    const HS = this._samplersList[SS];
                    HS.value && (kS.updateFloat2(HS.samplerInfoName, HS.value.coordinatesIndex, HS.value.level), (0, eS.y)(HS.value, kS, HS.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (bS._mirroredCameraPosition ? kS.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : kS.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, eS.k)(bS, XS, kS, FS.b.White(), HS, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && kS.updateFloat("pointSize", this.pointSize);
                const SS = this._uniformsArray;
                for (let HS = 0, gS = SS.length; HS < gS; HS++) {
                  const gS = SS[HS];
                  (void 0 === gS.requiredDefine || XS[gS.requiredDefine]) && (4 === gS.numComponents ? (gS.populateVectorFromLinkedProperties(WS.l.Vector4[0]), kS.updateVector4(gS.name, WS.l.Vector4[0])) : 3 === gS.numComponents ? (gS.populateVectorFromLinkedProperties(WS.l.VK[0]), kS.updateVector3(gS.name, WS.l.VK[0])) : 2 === gS.numComponents ? (gS.populateVectorFromLinkedProperties(WS.l.Vector2[0]), kS.updateFloat2(gS.name, WS.l.Vector2[0].x, WS.l.Vector2[0].y)) : 1 === gS.numComponents && kS.updateFloat(gS.name, gS.linkedProperties[gS.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * bS.environmentIntensity, this._lightingInfos.w = 1, kS.updateVector4("vLightingIntensity", this._lightingInfos), kS.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (bS.texturesEnabled) {
                for (const SS in this._samplersList) {
                  const HS = this._samplersList[SS];
                  HS.value && kS.setTexture(HS.samplerName, HS.value)
                }
                if ((0, eS.l)(bS, XS, kS, HS, this.realTimeFiltering), XS.ENVIRONMENTBRDF && kS.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), XS.FUZZENVIRONMENTBRDF && kS.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), XS.REFRACTED_BACKGROUND && (kS.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), kS.J7("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), WS.l.VK[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), kS.updateVector3("vBackgroundRefractionInfos", WS.l.VK[1])), (XS.ANISOTROPIC || XS.FUZZ || XS.REFRACTED_BACKGROUND || XS.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && kS.setTexture("blueNoiseSampler", SS._noiseTextures[this.lL().uniqueId]), XS.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const SS = this.sssIrradianceTexture.getSize().width,
                    HS = this.sssIrradianceTexture.getSize().height;
                  kS.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), kS.setTexture("sceneDepthSampler", this.sssDepthTexture), kS.updateFloat2("renderTargetSize", SS, HS)
                }
              }
              this.lL().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(gS) && this.lL().depthPeelingRenderer.bind(xS), this._eventInfo.subMesh = tS, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, IH.f)(this._activeEffect, this, bS), this.bindEyePosition(xS)
            } else fS && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, bS, bS.AK(), tS), !IS && this.isFrozen && !fS || !bS.lightsEnabled || this._disableLighting || (0, eS.n)(bS, gS, this._activeEffect, XS, this._maxSimultaneousLights), !IS && this.isFrozen || (this.bindView(xS), (0, eS.i)(bS, gS, this._activeEffect, !0), XS.NUM_MORPH_INFLUENCERS && (0, eS.t)(gS, this._activeEffect), XS.BAKED_VERTEX_ANIMATION_TEXTURE && gS.bakedVertexAnimationManager?.bind(xS, XS.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, eS.q)(XS, this._activeEffect, bS)), this._afterBind(gS, this._activeEffect, tS), kS.update()
          }
          getAnimatables() {
            const SS = super.getAnimatables();
            for (const HS in this._samplersList) {
              const gS = this._samplersList[HS];
              gS.value && gS.value.animations && gS.value.animations.length > 0 && SS.push(gS.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && SS.push(this._radianceTexture), SS
          }
          getActiveTextures() {
            const SS = super.getActiveTextures();
            for (const HS in this._samplersList) {
              const gS = this._samplersList[HS];
              gS.value && SS.push(gS.value)
            }
            return this._radianceTexture && SS.push(this._radianceTexture), SS
          }
          hasTexture(SS) {
            if (super.hasTexture(SS)) return !0;
            for (const HS in this._samplersList) {
              if (this._samplersList[HS].value === SS) return !0
            }
            return this._radianceTexture === SS
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(SS, HS) {
            if (this._breakShaderLoadedCheck = !0, HS) {
              this._environmentBRDFTexture && this.lL().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.lL().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const SS in this._samplersList) {
                const HS = this._samplersList[SS];
                HS.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(SS, HS)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.lL().environmentTexture
          }
          _prepareEffect(HS, gS, tS) {
            let bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              xS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              NS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(HS, gS, tS, xS, NS), !tS.isDirty) return null;
            tS.markAsProcessed();
            const qS = this.lL().AK(),
              uS = new mS.c;
            let IS = 0;
            tS.USESPHERICALINVERTEX && uS.addFallback(IS++, "USESPHERICALINVERTEX"), tS.FOG && uS.addFallback(IS, "FOG"), tS.SPECULARAA && uS.addFallback(IS, "SPECULARAA"), tS.POINTSIZE && uS.addFallback(IS, "POINTSIZE"), tS.LOGARITHMICDEPTH && uS.addFallback(IS, "LOGARITHMICDEPTH"), tS.PARALLAX && uS.addFallback(IS, "PARALLAX"), tS.PARALLAX_RHS && uS.addFallback(IS, "PARALLAX_RHS"), tS.PARALLAXOCCLUSION && uS.addFallback(IS++, "PARALLAXOCCLUSION"), tS.ENVIRONMENTBRDF && uS.addFallback(IS++, "ENVIRONMENTBRDF"), tS.TANGENT && uS.addFallback(IS++, "TANGENT"), IS = (0, eS.z)(tS, uS, this._maxSimultaneousLights, IS), tS.SPECULARTERM && uS.addFallback(IS++, "SPECULARTERM"), tS.USESPHERICALFROMREFLECTIONMAP && uS.addFallback(IS++, "USESPHERICALFROMREFLECTIONMAP"), tS.USEIRRADIANCEMAP && uS.addFallback(IS++, "USEIRRADIANCEMAP"), tS.NORMAL && uS.addFallback(IS++, "NORMAL"), tS.VERTEXCOLOR && uS.addFallback(IS++, "VERTEXCOLOR"), tS.MORPHTARGETS && uS.addFallback(IS++, "MORPHTARGETS"), tS.MULTIVIEW && uS.addFallback(0, "MULTIVIEW");
            const fS = [zS.h.PositionKind];
            tS.NORMAL && fS.push(zS.h.NormalKind), tS.TANGENT && fS.push(zS.h.TangentKind);
            for (let SS = 1; SS <= 6; ++SS) tS["UV" + SS] && fS.push(`uv${1===SS?"":SS}`);
            tS.VERTEXCOLOR && fS.push(zS.h.ColorKind), (0, eS.F)(fS, HS, tS, uS), (0, eS.H)(fS, tS), (0, eS.K)(fS, HS, tS), (0, eS.D)(fS, HS, tS);
            let kS = "openpbr";
            const aS = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const SS in this._uniformsList) aS.push(SS);
            const KS = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            tS.FUZZENVIRONMENTBRDF && KS.push("environmentFuzzBrdfSampler"), tS.REFRACTED_BACKGROUND && KS.push("backgroundRefractionSampler"), (tS.ANISOTROPIC || tS.FUZZ || tS.REFRACTED_BACKGROUND || tS.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && KS.push("blueNoiseSampler"), tS.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (KS.push("sceneIrradianceSampler"), KS.push("sceneDepthSampler"));
            for (const SS in this._samplersList) {
              const HS = this._samplersList[SS];
              KS.push(HS.samplerName), aS.push(HS.samplerInfoName), aS.push(HS.samplerMatrixName)
            }(0, eS.lb)(aS, KS, !0);
            const jS = ["Material", "Scene", "Mesh"],
              GS = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: tS.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = uS, this._eventInfo.fallbackRank = IS, this._eventInfo.defines = tS, this._eventInfo.uniforms = aS, this._eventInfo.attributes = fS, this._eventInfo.samplers = KS, this._eventInfo.uniformBuffersNames = jS, this._eventInfo.customCode = void 0, this._eventInfo.mesh = HS, this._eventInfo.indexParameters = GS, this._callbackPluginEventGeneric(128, this._eventInfo), aH.d.AddUniformsAndSamplers(aS, KS), MS.d.AddUniforms(aS), MS.d.AddSamplers(KS), (0, IH.e)(aS), this._useVertexPulling) {
              const SS = gS?.geometry;
              SS && (this._vertexPullingMetadata = (0, fH.e)(SS), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((SS, HS) => {
                aS.push(`vp_${HS}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            TS.d && (TS.d.PrepareUniforms(aS, tS), TS.d.PrepareSamplers(KS, tS)), (0, eS.ob)({
              uniformsNames: aS,
              uniformBuffersNames: jS,
              samplers: KS,
              defines: tS,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const CS = {};
            this.customShaderNameResolve && (kS = this.customShaderNameResolve(kS, aS, jS, KS, tS, fS, CS));
            const nS = tS.toString(),
              PS = qS.createEffect(kS, {
                attributes: fS,
                uniformsNames: aS,
                uniformBuffersNames: jS,
                samplers: KS,
                defines: nS,
                fallbacks: uS,
                onCompiled: bS,
                onError: XS,
                indexParameters: GS,
                processFinalCode: CS.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: tS.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: SS._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, qS);
            return this._eventInfo.customCode = void 0, PS
          }
          _prepareDefines(HS, gS, tS) {
            let bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              xS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const NS = gS.hasThinInstances,
              qS = this.lL(),
              uS = qS.AK();
            (0, eS.T)(qS, HS, tS, !0, this._maxSimultaneousLights, this._disableLighting), tS._needNormals = !0, (0, eS.bb)(qS, tS);
            const IS = this.needAlphaBlendingForMesh(HS) && this.lL().useOrderIndependentTransparency;
            if ((0, eS.eb)(qS, tS, this.canRenderToMRT && !IS), (0, eS.db)(qS, tS, IS), aH.d.PrepareDefines(uS.currentRenderPassId, HS, tS), tS._areTexturesDirty) {
              tS._needUVs = !1;
              for (let SS = 1; SS <= 6; ++SS) tS["MAINUV" + SS] = !1;
              if (qS.texturesEnabled) {
                for (const gS in this._samplersList) {
                  const SS = this._samplersList[gS];
                  SS.value ? ((0, eS.X)(SS.value, tS, SS.textureDefine), tS[SS.textureDefine + "_GAMMA"] = SS.value.gammaSpace) : tS[SS.textureDefine] = !1
                }
                const SS = this._getRadianceTexture(),
                  HS = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || uS.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, eS.S)(qS, SS, tS, this.realTimeFiltering, this.realTimeFilteringQuality, !HS), this._baseMetalnessTexture && (tS.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), tS.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, tS.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, tS.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, tS.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, tS.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, tS.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, tS.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, tS.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, tS.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, tS.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, tS.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && lS.e.DiffuseTextureEnabled ? (tS.PARALLAX = !0, tS.PARALLAX_RHS = qS.useRightHandedSystem, tS.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : tS.PARALLAX = !1, tS.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (tS.PARALLAX = !1, tS.PARALLAX_RHS = !1, tS.PARALLAXOCCLUSION = !1, tS.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && lS.e.ReflectionTextureEnabled ? (tS.ENVIRONMENTBRDF = !0, tS.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (tS.ENVIRONMENTBRDF = !1, tS.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? tS.FUZZENVIRONMENTBRDF = !0 : tS.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  tS.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && lS.e.RefractionTextureEnabled, tS.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, tS.REFRACTED_LIGHTS = !0;
                  const SS = this._getRadianceTexture();
                  SS ? (tS.REFRACTED_ENVIRONMENT = lS.e.RefractionTextureEnabled, tS.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.lL().useRightHandedSystem ? !SS.invertZ : SS.invertZ, tS.REFRACTED_ENVIRONMENT_LOCAL_CUBE = SS.isCube && SS.boundingBoxSize) : tS.REFRACTED_ENVIRONMENT = !1
                } else tS.REFRACTED_BACKGROUND = !1, tS.REFRACTED_LIGHTS = !1, tS.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? tS.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : tS.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === XS.d.LIGHTFALLOFF_STANDARD ? (tS.USEPHYSICALLIGHTFALLOFF = !1, tS.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === XS.d.LIGHTFALLOFF_GLTF ? (tS.USEPHYSICALLIGHTFALLOFF = !1, tS.USEGLTFLIGHTFALLOFF = !0) : (tS.USEPHYSICALLIGHTFALLOFF = !0, tS.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? tS.TWOSIDEDLIGHTING = !0 : tS.TWOSIDEDLIGHTING = !1, tS.MIRRORED = !!qS._mirroredCameraPosition, tS.SPECULARAA = uS.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(tS._areTexturesDirty || tS._areMiscDirty) && (tS.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, tS.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, tS.ALPHABLEND = this.needAlphaBlendingForMesh(HS)), tS._areTexturesDirty && (tS.TEXTURE_REPETITION_MODE = uS.version > 1 || uS.isWebGPU ? this.textureRepetitionMode : 0), tS._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(tS), tS.FORCENORMALFORWARD = this._forceNormalForward, tS.RADIANCEOCCLUSION = this._useRadianceOcclusion, tS.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && SS._noiseTextures[qS.uniqueId] && lS.e.ReflectionTextureEnabled ? (tS.ANISOTROPIC = !0, HS.isVerticesDataPresent(zS.h.TangentKind) || (tS._needUVs = !0, tS.MAINUV1 = !0), this._useGltfStyleAnisotropy && (tS.USE_GLTF_STYLE_ANISOTROPY = !0), tS.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, tS.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (tS.ANISOTROPIC = !1, tS.USE_GLTF_STYLE_ANISOTROPY = !1, tS.ANISOTROPIC_BASE = !1, tS.ANISOTROPIC_COAT = !1), tS.THIN_FILM = this.thinFilmWeight > 0, tS.IRIDESCENCE = this.thinFilmWeight > 0, tS.DISPERSION = this.transmissionDispersionScale > 0, tS.SCATTERING = this.hasScattering;
            if (tS.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, tS.TRANSMISSION_SLAB = this.transmissionWeight > 0, tS.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, tS.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !tS.PREPASS && (tS.SUBSURFACE_SLAB || tS.TRANSMISSION_SLAB_VOLUME)) {
              let SS = !1;
              if (!this.sssIrradianceTexture && qS.geometryBufferRenderer) {
                const HS = qS.geometryBufferRenderer.getTextureIndex(UH.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = qS.geometryBufferRenderer.getGBuffer().textures[HS], SS = !0
              }
              if (!this.sssDepthTexture && qS.geometryBufferRenderer) {
                const HS = qS.geometryBufferRenderer.getTextureIndex(UH.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = qS.geometryBufferRenderer.getGBuffer().textures[HS], SS = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (tS.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, SS && (tS.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            tS.FUZZ = this.fuzzWeight > 0 && lS.e.ReflectionTextureEnabled, tS.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, tS.FUZZ ? (HS.isVerticesDataPresent(zS.h.TangentKind) || (tS._needUVs = !0, tS.MAINUV1 = !0), this._environmentFuzzBRDFTexture = yS(this.lL()), tS.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, tS.FUZZENVIRONMENTBRDF = !1, tS.FUZZ_IBL_SAMPLES = 0), tS._areMiscDirty && ((0, eS.Z)(HS, qS, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(HS), tS, this._applyDecalMapAfterDetailMap, this._useVertexPulling, gS, this._isVertexOutputInvariant), tS.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !HS.isVerticesDataPresent(zS.h.NormalKind), tS.DEBUGMODE = this._debugMode), (0, eS.R)(qS, uS, this, tS, !!bS, xS, NS), this._eventInfo.defines = tS, this._eventInfo.mesh = HS, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, eS.O)(HS, tS, !0, !0, !0, this._transparencyMode !== XS.d.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, HS = new WeakMap, tS = new WeakMap, bS = new WeakMap, xS = new WeakMap, NS = new WeakMap, qS = new WeakMap, uS = new WeakMap, IS = new WeakMap, fS = new WeakMap, kS = new WeakMap, aS = new WeakMap, KS = new WeakMap, jS = new WeakMap, GS = new WeakMap, CS = new WeakMap, nS = new WeakMap, PS = new WeakMap, QS = new WeakMap, DS = new WeakMap, wS = new WeakMap, hS = new WeakMap, ZS = new WeakMap, ES = new WeakMap, LS = new WeakMap, YS = new WeakMap, AS = new WeakMap, iS = new WeakMap, US = new WeakMap, pS = new WeakMap, sS = new WeakMap, BS = new WeakMap, RS = new WeakMap, oS = new WeakMap, rS = new WeakMap, SH = new WeakMap, HH = new WeakMap, gH = new WeakMap, tH = new WeakMap, bH = new WeakMap, XH = new WeakMap, xH = new WeakMap, NH = new WeakMap, qH = new WeakMap, uH = new WeakMap, KH = new WeakMap, jH = new WeakMap, GH = new WeakMap, CH = new WeakMap, nH = new WeakMap, PH = new WeakMap, QH = new WeakMap, DH = new WeakMap, wH = new WeakMap, JH = new WeakMap, OH = new WeakMap, dH = new WeakMap, cH = new WeakMap, vH = new WeakMap, EH = new WeakMap, LH = new WeakMap, YH = new WeakMap, AH = new WeakMap, yH = new WeakMap, VH = new WeakMap, iH = new WeakMap, WH = new WeakMap, zH = new WeakMap, pH = new WeakMap, BH = new WeakMap, TH = new WeakMap, oH = new WeakMap, eH = new WeakMap, rH = new WeakMap, Sg = new WeakMap, Hg = new WeakMap, gg = new WeakMap, tg = new WeakMap, bg = new WeakMap, Xg = new WeakMap, xg = new WeakMap, Ng = new WeakMap, qg = new WeakMap, ug = new WeakMap, Ig = new WeakMap, fg = new WeakMap, kg = new WeakMap, ag = new WeakMap, Kg = new WeakMap, jg = new WeakMap, Gg = new WeakMap, Cg = new WeakMap, ng = new WeakMap, Pg = new WeakMap, Qg = new WeakMap, Dg = new WeakMap, wg = new WeakMap, hg = new WeakMap, Zg = new WeakMap, Jg = new WeakMap, Og = new WeakMap, dg = new WeakMap, cg = new WeakMap, (() => {
          const HS = "function" === typeof Symbol && Symbol.metadata ? Object.create(Lb[Symbol.metadata] ?? null) : void 0;
          vg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Eg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Lg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Yg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Ag = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], yg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Vg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], ig = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Wg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], zg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Ug = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], pg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], sg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Bg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Mg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Fg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Rg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Tg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], og = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], lg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], mg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], eg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], rg = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], St = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Ht = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], gt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], tt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], bt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Xt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], xt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Nt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], qt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], ut = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], It = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], ft = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], kt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Kt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], jt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Gt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Ct = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], nt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Pt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Qt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Dt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], wt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], ht = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Zt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Jt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Ot = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], dt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], ct = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], vt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Et = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Lt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Yt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], At = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], yt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Vt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], it = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Wt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], zt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Ut = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], pt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], st = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Bt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Mt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Ft = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Rt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Tt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], ot = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], lt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], mt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], et = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], rt = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Sb = [(0, OS.b)("_markAllSubMeshesAsTexturesDirty")], Hb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], gb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], tb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], bb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], Xb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], xb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Nb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], qb = [(0, OS.M)()], ub = [(0, OS.M)()], Ib = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], fb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], kb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], ab = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Kb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsLightsDirty")], jb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Gb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsLightsDirty")], Cb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], nb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Pb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Qb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Db = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], wb = [(0, OS.d)("_markAllSubMeshesAsTexturesDirty")], hb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Zb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Jb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Ob = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], db = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], cb = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], vb = [(0, OS.d)("_markAllSubMeshesAsMiscDirty")], Eb = [(0, OS.M)()], (0, JS.j)(SS, null, vg, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: SS => "baseWeight" in SS,
              get: SS => SS.baseWeight,
              set: (SS, HS) => {
                SS.baseWeight = HS
              }
            },
            metadata: HS
          }, Ab, yb), (0, JS.j)(SS, null, Eg, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "baseWeightTexture" in SS,
              get: SS => SS.baseWeightTexture,
              set: (SS, HS) => {
                SS.baseWeightTexture = HS
              }
            },
            metadata: HS
          }, Vb, ib), (0, JS.j)(SS, null, Lg, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: SS => "baseColor" in SS,
              get: SS => SS.baseColor,
              set: (SS, HS) => {
                SS.baseColor = HS
              }
            },
            metadata: HS
          }, Wb, zb), (0, JS.j)(SS, null, Yg, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "baseColorTexture" in SS,
              get: SS => SS.baseColorTexture,
              set: (SS, HS) => {
                SS.baseColorTexture = HS
              }
            },
            metadata: HS
          }, Ub, pb), (0, JS.j)(SS, null, Ag, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: SS => "baseDiffuseRoughness" in SS,
              get: SS => SS.baseDiffuseRoughness,
              set: (SS, HS) => {
                SS.baseDiffuseRoughness = HS
              }
            },
            metadata: HS
          }, sb, Bb), (0, JS.j)(SS, null, yg, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "baseDiffuseRoughnessTexture" in SS,
              get: SS => SS.baseDiffuseRoughnessTexture,
              set: (SS, HS) => {
                SS.baseDiffuseRoughnessTexture = HS
              }
            },
            metadata: HS
          }, Mb, Fb), (0, JS.j)(SS, null, Vg, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: SS => "baseMetalness" in SS,
              get: SS => SS.baseMetalness,
              set: (SS, HS) => {
                SS.baseMetalness = HS
              }
            },
            metadata: HS
          }, Rb, Tb), (0, JS.j)(SS, null, ig, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "baseMetalnessTexture" in SS,
              get: SS => SS.baseMetalnessTexture,
              set: (SS, HS) => {
                SS.baseMetalnessTexture = HS
              }
            },
            metadata: HS
          }, ob, lb), (0, JS.j)(SS, null, Wg, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: SS => "specularWeight" in SS,
              get: SS => SS.specularWeight,
              set: (SS, HS) => {
                SS.specularWeight = HS
              }
            },
            metadata: HS
          }, mb, eb), (0, JS.j)(SS, null, zg, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "specularWeightTexture" in SS,
              get: SS => SS.specularWeightTexture,
              set: (SS, HS) => {
                SS.specularWeightTexture = HS
              }
            },
            metadata: HS
          }, rb, SX), (0, JS.j)(SS, null, Ug, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: SS => "specularColor" in SS,
              get: SS => SS.specularColor,
              set: (SS, HS) => {
                SS.specularColor = HS
              }
            },
            metadata: HS
          }, HX, gX), (0, JS.j)(SS, null, pg, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "specularColorTexture" in SS,
              get: SS => SS.specularColorTexture,
              set: (SS, HS) => {
                SS.specularColorTexture = HS
              }
            },
            metadata: HS
          }, tX, bX), (0, JS.j)(SS, null, sg, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: SS => "specularRoughness" in SS,
              get: SS => SS.specularRoughness,
              set: (SS, HS) => {
                SS.specularRoughness = HS
              }
            },
            metadata: HS
          }, XX, xX), (0, JS.j)(SS, null, Bg, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "specularRoughnessTexture" in SS,
              get: SS => SS.specularRoughnessTexture,
              set: (SS, HS) => {
                SS.specularRoughnessTexture = HS
              }
            },
            metadata: HS
          }, NX, qX), (0, JS.j)(SS, null, Mg, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: SS => "specularRoughnessAnisotropy" in SS,
              get: SS => SS.specularRoughnessAnisotropy,
              set: (SS, HS) => {
                SS.specularRoughnessAnisotropy = HS
              }
            },
            metadata: HS
          }, uX, IX), (0, JS.j)(SS, null, Fg, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "specularRoughnessAnisotropyTexture" in SS,
              get: SS => SS.specularRoughnessAnisotropyTexture,
              set: (SS, HS) => {
                SS.specularRoughnessAnisotropyTexture = HS
              }
            },
            metadata: HS
          }, fX, kX), (0, JS.j)(SS, null, Rg, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: SS => "specularIor" in SS,
              get: SS => SS.specularIor,
              set: (SS, HS) => {
                SS.specularIor = HS
              }
            },
            metadata: HS
          }, aX, KX), (0, JS.j)(SS, null, Tg, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: SS => "transmissionWeight" in SS,
              get: SS => SS.transmissionWeight,
              set: (SS, HS) => {
                SS.transmissionWeight = HS
              }
            },
            metadata: HS
          }, jX, GX), (0, JS.j)(SS, null, og, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "transmissionWeightTexture" in SS,
              get: SS => SS.transmissionWeightTexture,
              set: (SS, HS) => {
                SS.transmissionWeightTexture = HS
              }
            },
            metadata: HS
          }, CX, nX), (0, JS.j)(SS, null, lg, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: SS => "transmissionColor" in SS,
              get: SS => SS.transmissionColor,
              set: (SS, HS) => {
                SS.transmissionColor = HS
              }
            },
            metadata: HS
          }, PX, QX), (0, JS.j)(SS, null, mg, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "transmissionColorTexture" in SS,
              get: SS => SS.transmissionColorTexture,
              set: (SS, HS) => {
                SS.transmissionColorTexture = HS
              }
            },
            metadata: HS
          }, DX, wX), (0, JS.j)(SS, null, eg, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: SS => "transmissionDepth" in SS,
              get: SS => SS.transmissionDepth,
              set: (SS, HS) => {
                SS.transmissionDepth = HS
              }
            },
            metadata: HS
          }, hX, ZX), (0, JS.j)(SS, null, rg, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "transmissionDepthTexture" in SS,
              get: SS => SS.transmissionDepthTexture,
              set: (SS, HS) => {
                SS.transmissionDepthTexture = HS
              }
            },
            metadata: HS
          }, JX, OX), (0, JS.j)(SS, null, St, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: SS => "transmissionScatter" in SS,
              get: SS => SS.transmissionScatter,
              set: (SS, HS) => {
                SS.transmissionScatter = HS
              }
            },
            metadata: HS
          }, dX, cX), (0, JS.j)(SS, null, Ht, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "transmissionScatterTexture" in SS,
              get: SS => SS.transmissionScatterTexture,
              set: (SS, HS) => {
                SS.transmissionScatterTexture = HS
              }
            },
            metadata: HS
          }, vX, EX), (0, JS.j)(SS, null, gt, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: SS => "transmissionScatterAnisotropy" in SS,
              get: SS => SS.transmissionScatterAnisotropy,
              set: (SS, HS) => {
                SS.transmissionScatterAnisotropy = HS
              }
            },
            metadata: HS
          }, LX, YX), (0, JS.j)(SS, null, tt, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: SS => "transmissionDispersionScale" in SS,
              get: SS => SS.transmissionDispersionScale,
              set: (SS, HS) => {
                SS.transmissionDispersionScale = HS
              }
            },
            metadata: HS
          }, AX, yX), (0, JS.j)(SS, null, bt, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "transmissionDispersionScaleTexture" in SS,
              get: SS => SS.transmissionDispersionScaleTexture,
              set: (SS, HS) => {
                SS.transmissionDispersionScaleTexture = HS
              }
            },
            metadata: HS
          }, VX, iX), (0, JS.j)(SS, null, Xt, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: SS => "transmissionDispersionAbbeNumber" in SS,
              get: SS => SS.transmissionDispersionAbbeNumber,
              set: (SS, HS) => {
                SS.transmissionDispersionAbbeNumber = HS
              }
            },
            metadata: HS
          }, WX, zX), (0, JS.j)(SS, null, xt, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: SS => "subsurfaceWeight" in SS,
              get: SS => SS.subsurfaceWeight,
              set: (SS, HS) => {
                SS.subsurfaceWeight = HS
              }
            },
            metadata: HS
          }, UX, pX), (0, JS.j)(SS, null, Nt, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "subsurfaceWeightTexture" in SS,
              get: SS => SS.subsurfaceWeightTexture,
              set: (SS, HS) => {
                SS.subsurfaceWeightTexture = HS
              }
            },
            metadata: HS
          }, sX, BX), (0, JS.j)(SS, null, qt, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: SS => "subsurfaceColor" in SS,
              get: SS => SS.subsurfaceColor,
              set: (SS, HS) => {
                SS.subsurfaceColor = HS
              }
            },
            metadata: HS
          }, MX, FX), (0, JS.j)(SS, null, ut, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "subsurfaceColorTexture" in SS,
              get: SS => SS.subsurfaceColorTexture,
              set: (SS, HS) => {
                SS.subsurfaceColorTexture = HS
              }
            },
            metadata: HS
          }, RX, TX), (0, JS.j)(SS, null, It, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: SS => "subsurfaceRadius" in SS,
              get: SS => SS.subsurfaceRadius,
              set: (SS, HS) => {
                SS.subsurfaceRadius = HS
              }
            },
            metadata: HS
          }, oX, lX), (0, JS.j)(SS, null, ft, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: SS => "subsurfaceRadiusScale" in SS,
              get: SS => SS.subsurfaceRadiusScale,
              set: (SS, HS) => {
                SS.subsurfaceRadiusScale = HS
              }
            },
            metadata: HS
          }, mX, eX), (0, JS.j)(SS, null, kt, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "subsurfaceRadiusScaleTexture" in SS,
              get: SS => SS.subsurfaceRadiusScaleTexture,
              set: (SS, HS) => {
                SS.subsurfaceRadiusScaleTexture = HS
              }
            },
            metadata: HS
          }, rX, Sx), (0, JS.j)(SS, null, Kt, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: SS => "subsurfaceScatterAnisotropy" in SS,
              get: SS => SS.subsurfaceScatterAnisotropy,
              set: (SS, HS) => {
                SS.subsurfaceScatterAnisotropy = HS
              }
            },
            metadata: HS
          }, Hx, gx), (0, JS.j)(SS, null, jt, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: SS => "coatWeight" in SS,
              get: SS => SS.coatWeight,
              set: (SS, HS) => {
                SS.coatWeight = HS
              }
            },
            metadata: HS
          }, tx, bx), (0, JS.j)(SS, null, Gt, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "coatWeightTexture" in SS,
              get: SS => SS.coatWeightTexture,
              set: (SS, HS) => {
                SS.coatWeightTexture = HS
              }
            },
            metadata: HS
          }, Xx, xx), (0, JS.j)(SS, null, Ct, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: SS => "coatColor" in SS,
              get: SS => SS.coatColor,
              set: (SS, HS) => {
                SS.coatColor = HS
              }
            },
            metadata: HS
          }, Nx, qx), (0, JS.j)(SS, null, nt, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "coatColorTexture" in SS,
              get: SS => SS.coatColorTexture,
              set: (SS, HS) => {
                SS.coatColorTexture = HS
              }
            },
            metadata: HS
          }, ux, Ix), (0, JS.j)(SS, null, Pt, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: SS => "coatRoughness" in SS,
              get: SS => SS.coatRoughness,
              set: (SS, HS) => {
                SS.coatRoughness = HS
              }
            },
            metadata: HS
          }, fx, kx), (0, JS.j)(SS, null, Qt, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "coatRoughnessTexture" in SS,
              get: SS => SS.coatRoughnessTexture,
              set: (SS, HS) => {
                SS.coatRoughnessTexture = HS
              }
            },
            metadata: HS
          }, ax, Kx), (0, JS.j)(SS, null, Dt, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: SS => "coatRoughnessAnisotropy" in SS,
              get: SS => SS.coatRoughnessAnisotropy,
              set: (SS, HS) => {
                SS.coatRoughnessAnisotropy = HS
              }
            },
            metadata: HS
          }, jx, Gx), (0, JS.j)(SS, null, wt, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "coatRoughnessAnisotropyTexture" in SS,
              get: SS => SS.coatRoughnessAnisotropyTexture,
              set: (SS, HS) => {
                SS.coatRoughnessAnisotropyTexture = HS
              }
            },
            metadata: HS
          }, Cx, nx), (0, JS.j)(SS, null, ht, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: SS => "coatIor" in SS,
              get: SS => SS.coatIor,
              set: (SS, HS) => {
                SS.coatIor = HS
              }
            },
            metadata: HS
          }, Px, Qx), (0, JS.j)(SS, null, Zt, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: SS => "coatDarkening" in SS,
              get: SS => SS.coatDarkening,
              set: (SS, HS) => {
                SS.coatDarkening = HS
              }
            },
            metadata: HS
          }, Dx, wx), (0, JS.j)(SS, null, Jt, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "coatDarkeningTexture" in SS,
              get: SS => SS.coatDarkeningTexture,
              set: (SS, HS) => {
                SS.coatDarkeningTexture = HS
              }
            },
            metadata: HS
          }, hx, Zx), (0, JS.j)(SS, null, Ot, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: SS => "fuzzWeight" in SS,
              get: SS => SS.fuzzWeight,
              set: (SS, HS) => {
                SS.fuzzWeight = HS
              }
            },
            metadata: HS
          }, Jx, Ox), (0, JS.j)(SS, null, dt, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "fuzzWeightTexture" in SS,
              get: SS => SS.fuzzWeightTexture,
              set: (SS, HS) => {
                SS.fuzzWeightTexture = HS
              }
            },
            metadata: HS
          }, dx, cx), (0, JS.j)(SS, null, ct, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: SS => "fuzzColor" in SS,
              get: SS => SS.fuzzColor,
              set: (SS, HS) => {
                SS.fuzzColor = HS
              }
            },
            metadata: HS
          }, vx, Ex), (0, JS.j)(SS, null, vt, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "fuzzColorTexture" in SS,
              get: SS => SS.fuzzColorTexture,
              set: (SS, HS) => {
                SS.fuzzColorTexture = HS
              }
            },
            metadata: HS
          }, Lx, Yx), (0, JS.j)(SS, null, Et, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: SS => "fuzzRoughness" in SS,
              get: SS => SS.fuzzRoughness,
              set: (SS, HS) => {
                SS.fuzzRoughness = HS
              }
            },
            metadata: HS
          }, Ax, yx), (0, JS.j)(SS, null, Lt, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "fuzzRoughnessTexture" in SS,
              get: SS => SS.fuzzRoughnessTexture,
              set: (SS, HS) => {
                SS.fuzzRoughnessTexture = HS
              }
            },
            metadata: HS
          }, Vx, ix), (0, JS.j)(SS, null, Yt, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: SS => "geometryThinWalled" in SS,
              get: SS => SS.geometryThinWalled,
              set: (SS, HS) => {
                SS.geometryThinWalled = HS
              }
            },
            metadata: HS
          }, Wx, zx), (0, JS.j)(SS, null, At, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "geometryNormalTexture" in SS,
              get: SS => SS.geometryNormalTexture,
              set: (SS, HS) => {
                SS.geometryNormalTexture = HS
              }
            },
            metadata: HS
          }, Ux, px), (0, JS.j)(SS, null, yt, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: SS => "geometryTangent" in SS,
              get: SS => SS.geometryTangent,
              set: (SS, HS) => {
                SS.geometryTangent = HS
              }
            },
            metadata: HS
          }, sx, Bx), (0, JS.j)(SS, null, Vt, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "geometryTangentTexture" in SS,
              get: SS => SS.geometryTangentTexture,
              set: (SS, HS) => {
                SS.geometryTangentTexture = HS
              }
            },
            metadata: HS
          }, Mx, Fx), (0, JS.j)(SS, null, it, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "geometryCoatNormalTexture" in SS,
              get: SS => SS.geometryCoatNormalTexture,
              set: (SS, HS) => {
                SS.geometryCoatNormalTexture = HS
              }
            },
            metadata: HS
          }, Rx, Tx), (0, JS.j)(SS, null, Wt, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: SS => "geometryCoatTangent" in SS,
              get: SS => SS.geometryCoatTangent,
              set: (SS, HS) => {
                SS.geometryCoatTangent = HS
              }
            },
            metadata: HS
          }, ox, lx), (0, JS.j)(SS, null, zt, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "geometryCoatTangentTexture" in SS,
              get: SS => SS.geometryCoatTangentTexture,
              set: (SS, HS) => {
                SS.geometryCoatTangentTexture = HS
              }
            },
            metadata: HS
          }, mx, ex), (0, JS.j)(SS, null, Ut, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: SS => "geometryOpacity" in SS,
              get: SS => SS.geometryOpacity,
              set: (SS, HS) => {
                SS.geometryOpacity = HS
              }
            },
            metadata: HS
          }, rx, SN), (0, JS.j)(SS, null, pt, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "geometryOpacityTexture" in SS,
              get: SS => SS.geometryOpacityTexture,
              set: (SS, HS) => {
                SS.geometryOpacityTexture = HS
              }
            },
            metadata: HS
          }, HN, gN), (0, JS.j)(SS, null, st, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: SS => "geometryThickness" in SS,
              get: SS => SS.geometryThickness,
              set: (SS, HS) => {
                SS.geometryThickness = HS
              }
            },
            metadata: HS
          }, tN, bN), (0, JS.j)(SS, null, Bt, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "geometryThicknessTexture" in SS,
              get: SS => SS.geometryThicknessTexture,
              set: (SS, HS) => {
                SS.geometryThicknessTexture = HS
              }
            },
            metadata: HS
          }, XN, xN), (0, JS.j)(SS, null, Mt, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: SS => "emissionLuminance" in SS,
              get: SS => SS.emissionLuminance,
              set: (SS, HS) => {
                SS.emissionLuminance = HS
              }
            },
            metadata: HS
          }, NN, qN), (0, JS.j)(SS, null, Ft, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: SS => "emissionColor" in SS,
              get: SS => SS.emissionColor,
              set: (SS, HS) => {
                SS.emissionColor = HS
              }
            },
            metadata: HS
          }, uN, IN), (0, JS.j)(SS, null, Rt, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "emissionColorTexture" in SS,
              get: SS => SS.emissionColorTexture,
              set: (SS, HS) => {
                SS.emissionColorTexture = HS
              }
            },
            metadata: HS
          }, fN, kN), (0, JS.j)(SS, null, Tt, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: SS => "thinFilmWeight" in SS,
              get: SS => SS.thinFilmWeight,
              set: (SS, HS) => {
                SS.thinFilmWeight = HS
              }
            },
            metadata: HS
          }, aN, KN), (0, JS.j)(SS, null, ot, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "thinFilmWeightTexture" in SS,
              get: SS => SS.thinFilmWeightTexture,
              set: (SS, HS) => {
                SS.thinFilmWeightTexture = HS
              }
            },
            metadata: HS
          }, jN, GN), (0, JS.j)(SS, null, lt, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: SS => "thinFilmThickness" in SS,
              get: SS => SS.thinFilmThickness,
              set: (SS, HS) => {
                SS.thinFilmThickness = HS
              }
            },
            metadata: HS
          }, CN, nN), (0, JS.j)(SS, null, mt, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: SS => "thinFilmThicknessMin" in SS,
              get: SS => SS.thinFilmThicknessMin,
              set: (SS, HS) => {
                SS.thinFilmThicknessMin = HS
              }
            },
            metadata: HS
          }, PN, QN), (0, JS.j)(SS, null, et, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "thinFilmThicknessTexture" in SS,
              get: SS => SS.thinFilmThicknessTexture,
              set: (SS, HS) => {
                SS.thinFilmThicknessTexture = HS
              }
            },
            metadata: HS
          }, DN, wN), (0, JS.j)(SS, null, rt, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: SS => "thinFilmIor" in SS,
              get: SS => SS.thinFilmIor,
              set: (SS, HS) => {
                SS.thinFilmIor = HS
              }
            },
            metadata: HS
          }, hN, ZN), (0, JS.j)(SS, null, Sb, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "ambientOcclusionTexture" in SS,
              get: SS => SS.ambientOcclusionTexture,
              set: (SS, HS) => {
                SS.ambientOcclusionTexture = HS
              }
            },
            metadata: HS
          }, JN, ON), (0, JS.j)(SS, null, Hb, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: SS => "directIntensity" in SS,
              get: SS => SS.directIntensity,
              set: (SS, HS) => {
                SS.directIntensity = HS
              }
            },
            metadata: HS
          }, dN, cN), (0, JS.j)(SS, null, gb, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: SS => "environmentIntensity" in SS,
              get: SS => SS.environmentIntensity,
              set: (SS, HS) => {
                SS.environmentIntensity = HS
              }
            },
            metadata: HS
          }, vN, EN), (0, JS.j)(SS, null, tb, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: SS => "useSpecularWeightFromTextureAlpha" in SS,
              get: SS => SS.useSpecularWeightFromTextureAlpha,
              set: (SS, HS) => {
                SS.useSpecularWeightFromTextureAlpha = HS
              }
            },
            metadata: HS
          }, LN, YN), (0, JS.j)(SS, null, bb, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: SS => "forceAlphaTest" in SS,
              get: SS => SS.forceAlphaTest,
              set: (SS, HS) => {
                SS.forceAlphaTest = HS
              }
            },
            metadata: HS
          }, AN, yN), (0, JS.j)(SS, null, Xb, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: SS => "alphaCutOff" in SS,
              get: SS => SS.alphaCutOff,
              set: (SS, HS) => {
                SS.alphaCutOff = HS
              }
            },
            metadata: HS
          }, VN, iN), (0, JS.j)(SS, null, xb, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: SS => "useAmbientOcclusionFromMetallicTextureRed" in SS,
              get: SS => SS.useAmbientOcclusionFromMetallicTextureRed,
              set: (SS, HS) => {
                SS.useAmbientOcclusionFromMetallicTextureRed = HS
              }
            },
            metadata: HS
          }, WN, zN), (0, JS.j)(SS, null, Nb, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: SS => "useAmbientInGrayScale" in SS,
              get: SS => SS.useAmbientInGrayScale,
              set: (SS, HS) => {
                SS.useAmbientInGrayScale = HS
              }
            },
            metadata: HS
          }, UN, pN), (0, JS.j)(SS, null, qb, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: SS => "usePhysicalLightFalloff" in SS,
              get: SS => SS.usePhysicalLightFalloff
            },
            metadata: HS
          }, null, Yb), (0, JS.j)(SS, null, ub, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: SS => "useGLTFLightFalloff" in SS,
              get: SS => SS.useGLTFLightFalloff
            },
            metadata: HS
          }, null, Yb), (0, JS.j)(SS, null, Ib, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: SS => "useObjectSpaceNormalMap" in SS,
              get: SS => SS.useObjectSpaceNormalMap,
              set: (SS, HS) => {
                SS.useObjectSpaceNormalMap = HS
              }
            },
            metadata: HS
          }, sN, BN), (0, JS.j)(SS, null, fb, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: SS => "useParallax" in SS,
              get: SS => SS.useParallax,
              set: (SS, HS) => {
                SS.useParallax = HS
              }
            },
            metadata: HS
          }, MN, FN), (0, JS.j)(SS, null, kb, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: SS => "useParallaxOcclusion" in SS,
              get: SS => SS.useParallaxOcclusion,
              set: (SS, HS) => {
                SS.useParallaxOcclusion = HS
              }
            },
            metadata: HS
          }, RN, TN), (0, JS.j)(SS, null, ab, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: SS => "parallaxScaleBias" in SS,
              get: SS => SS.parallaxScaleBias,
              set: (SS, HS) => {
                SS.parallaxScaleBias = HS
              }
            },
            metadata: HS
          }, oN, lN), (0, JS.j)(SS, null, Kb, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: SS => "disableLighting" in SS,
              get: SS => SS.disableLighting,
              set: (SS, HS) => {
                SS.disableLighting = HS
              }
            },
            metadata: HS
          }, mN, eN), (0, JS.j)(SS, null, jb, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: SS => "forceIrradianceInFragment" in SS,
              get: SS => SS.forceIrradianceInFragment,
              set: (SS, HS) => {
                SS.forceIrradianceInFragment = HS
              }
            },
            metadata: HS
          }, rN, Sq), (0, JS.j)(SS, null, Gb, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: SS => "maxSimultaneousLights" in SS,
              get: SS => SS.maxSimultaneousLights,
              set: (SS, HS) => {
                SS.maxSimultaneousLights = HS
              }
            },
            metadata: HS
          }, Hq, gq), (0, JS.j)(SS, null, Cb, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: SS => "invertNormalMapX" in SS,
              get: SS => SS.invertNormalMapX,
              set: (SS, HS) => {
                SS.invertNormalMapX = HS
              }
            },
            metadata: HS
          }, tq, bq), (0, JS.j)(SS, null, nb, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: SS => "invertNormalMapY" in SS,
              get: SS => SS.invertNormalMapY,
              set: (SS, HS) => {
                SS.invertNormalMapY = HS
              }
            },
            metadata: HS
          }, Xq, xq), (0, JS.j)(SS, null, Pb, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: SS => "twoSidedLighting" in SS,
              get: SS => SS.twoSidedLighting,
              set: (SS, HS) => {
                SS.twoSidedLighting = HS
              }
            },
            metadata: HS
          }, Nq, qq), (0, JS.j)(SS, null, Qb, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: SS => "useAlphaFresnel" in SS,
              get: SS => SS.useAlphaFresnel,
              set: (SS, HS) => {
                SS.useAlphaFresnel = HS
              }
            },
            metadata: HS
          }, uq, Iq), (0, JS.j)(SS, null, Db, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: SS => "useLinearAlphaFresnel" in SS,
              get: SS => SS.useLinearAlphaFresnel,
              set: (SS, HS) => {
                SS.useLinearAlphaFresnel = HS
              }
            },
            metadata: HS
          }, fq, kq), (0, JS.j)(SS, null, wb, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "environmentBRDFTexture" in SS,
              get: SS => SS.environmentBRDFTexture,
              set: (SS, HS) => {
                SS.environmentBRDFTexture = HS
              }
            },
            metadata: HS
          }, aq, Kq), (0, JS.j)(SS, null, hb, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: SS => "forceNormalForward" in SS,
              get: SS => SS.forceNormalForward,
              set: (SS, HS) => {
                SS.forceNormalForward = HS
              }
            },
            metadata: HS
          }, jq, Gq), (0, JS.j)(SS, null, Zb, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: SS => "enableSpecularAntiAliasing" in SS,
              get: SS => SS.enableSpecularAntiAliasing,
              set: (SS, HS) => {
                SS.enableSpecularAntiAliasing = HS
              }
            },
            metadata: HS
          }, Cq, nq), (0, JS.j)(SS, null, Jb, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: SS => "useHorizonOcclusion" in SS,
              get: SS => SS.useHorizonOcclusion,
              set: (SS, HS) => {
                SS.useHorizonOcclusion = HS
              }
            },
            metadata: HS
          }, Pq, Qq), (0, JS.j)(SS, null, Ob, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: SS => "useRadianceOcclusion" in SS,
              get: SS => SS.useRadianceOcclusion,
              set: (SS, HS) => {
                SS.useRadianceOcclusion = HS
              }
            },
            metadata: HS
          }, Dq, wq), (0, JS.j)(SS, null, db, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: SS => "unlit" in SS,
              get: SS => SS.unlit,
              set: (SS, HS) => {
                SS.unlit = HS
              }
            },
            metadata: HS
          }, hq, Zq), (0, JS.j)(SS, null, cb, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: SS => "applyDecalMapAfterDetailMap" in SS,
              get: SS => SS.applyDecalMapAfterDetailMap,
              set: (SS, HS) => {
                SS.applyDecalMapAfterDetailMap = HS
              }
            },
            metadata: HS
          }, Jq, Oq), (0, JS.j)(SS, null, vb, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: SS => "debugMode" in SS,
              get: SS => SS.debugMode,
              set: (SS, HS) => {
                SS.debugMode = HS
              }
            },
            metadata: HS
          }, dq, cq), (0, JS.j)(SS, null, Eb, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: SS => "transparencyMode" in SS,
              get: SS => SS.transparencyMode
            },
            metadata: HS
          }, null, Yb), HS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: HS
          })
        })(), SS.SSS_QUALITY_LOW = 0, SS.SSS_QUALITY_MEDIUM = 1, SS.SSS_QUALITY_HIGH = 2, SS._noiseTextures = {}, SS.ForceGLSL = !1, SS._ShaderLoader = new kH.e((() => [Promise.all([gS.e(317), gS.e(381)]).then((() => gS(61812))), Promise.all([gS.e(322), gS.e(318), gS.e(380), gS.e(385)]).then((() => gS(61827)))]), (() => [Promise.all([gS.e(336), gS.e(338), gS.e(384)]).then((() => gS(61873))), Promise.all([gS.e(336), gS.e(339), gS.e(383), gS.e(386)]).then((() => gS(61887)))])), SS
      })(),
      rH = !1;
    rH || (rH = !0, (0, TS.h)(), (0, pH.f)("BABYLON.OpenPBRMaterial", eH));
    var Sg = gS(37144);
    class Hg {
      constructor(SS) {
        this.name = AH.e.NAME_PROCEDURALTEXTURE, this.Bj = SS
      }
      register() {
        this.Bj._beforeClearStage.registerStep(AH.e.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.Bj.proceduralTexturesEnabled) {
          ZH.k.StartPerformanceCounter("Procedural textures", this.Bj.proceduralTextures.length > 0);
          for (let SS = 0; SS < this.Bj.proceduralTextures.length; SS++) {
            const HS = this.Bj.proceduralTextures[SS];
            HS._shouldRender() && HS.render()
          }
          ZH.k.EndPerformanceCounter("Procedural textures", this.Bj.proceduralTextures.length > 0)
        }
      }
    }
    var gg = gS(40364);
    let tg = (() => {
      var SS;
      let HS, tS, bS, xS, NS, qS = vS.i,
        uS = [],
        IS = [],
        fS = [],
        kS = [],
        aS = [],
        KS = [],
        GS = [],
        CS = [],
        nS = [];
      return SS = class extends qS {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(SS, HS, gS, tS) {
          let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            XS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            xS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            NS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, tS, !XS), this.isEnabled = ((0, JS.k)(this, uS), (0, JS.k)(this, IS, !0)), this.autoClear = ((0, JS.k)(this, fS), (0, JS.k)(this, kS, !0)), this.onGenerated = (0, JS.k)(this, aS), this.onGeneratedObservable = new Sg.e, this.onBeforeGenerationObservable = new Sg.e, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, JS.k)(this, KS, void 0), this._drawWrapper = (0, JS.k)(this, GS), this._textures = {}, this._size = (0, JS.k)(this, CS, void 0), this._textureType = (0, JS.k)(this, nS), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === bS || bS instanceof vS.i ? (this._options = {}, this._fallbackTexture = bS) : (this._options = bS, this._fallbackTexture = bS.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let qS = (tS = this.lL() || jS.d.LastCreatedScene)._getComponent(AH.e.NAME_PROCEDURALTEXTURE);
          qS || (qS = new Hg(tS), tS.igS(qS)), this._options.skipSceneRegistration || tS.proceduralTextures.push(this), this._fullEngine = tS.AK(), this.name = SS, this.isRenderTarget = !0, this._size = HS, this._textureType = NS, this._generateMipMaps = XS, this._drawWrapper = new gg.d(this._fullEngine), this.setFragment(gS);
          const PS = this._createRtWrapper(xS, HS, XS, NS);
          this._texture = PS.texture;
          const QS = [];
          QS.push(1, 1), QS.push(-1, 1), QS.push(-1, -1), QS.push(1, -1), this._vertexBuffers[zS.h.PositionKind] = new zS.h(this._fullEngine, QS, zS.h.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(SS, HS, gS, tS) {
          return SS ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(HS, {
            generateMipMaps: gS,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: tS,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(HS, {
            generateMipMaps: gS,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: tS,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(SS) {
          this._drawWrapper.effect = SS
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((SS => {
            this._contentData = this.readPixels(0, 0, SS), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const SS = this._fullEngine,
            HS = [];
          HS.push(0), HS.push(1), HS.push(2), HS.push(0), HS.push(2), HS.push(3), this._indexBuffer = SS.createIndexBuffer(HS)
        }
        _rebuild() {
          const SS = this._vertexBuffers[zS.h.PositionKind];
          SS && SS._rebuild(), this._createIndexBuffer(), this.refreshRate === JH.c.REFRESHRATE_RENDER_ONCE && (this.refreshRate = JH.c.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(SS) {
          if (this.isReady()) return void SS(this);
          const HS = this.getEffect();
          HS && HS.executeWhenCompiled((() => {
            SS(this)
          }))
        }
        isReady() {
          const SS = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const HS = this._getDefines();
          if (this._drawWrapper.effect && HS === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const tS = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== HS && (this._cachedDefines = HS, this._drawWrapper.effect = SS.createEffect(tS, [zS.h.PositionKind], this._uniforms, this._samplers, HS, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([gS.e(389).then((() => gS(61949))), this._options.extraInitializationsAsync()]) : await Promise.all([gS.e(390).then((() => gS(61952))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await gS.e(389).then((() => gS(61949))) : await gS.e(390).then((() => gS(61952)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(SS) {
          this._fragment = SS
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(SS) {
          this._refreshRate = SS, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(SS, HS) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const gS = this._texture.isCube;
          this._rtWrapper.dispose();
          const tS = this._createRtWrapper(gS, SS, HS, this._textureType);
          this._texture = tS.texture, this._size = SS, this._generateMipMaps = HS
        }
        _checkUniform(SS) {
          -1 === this._uniforms.indexOf(SS) && this._uniforms.push(SS)
        }
        setTexture(SS, HS) {
          return -1 === this._samplers.indexOf(SS) && this._samplers.push(SS), this._textures[SS] = HS, this
        }
        setFloat(SS, HS) {
          return this._checkUniform(SS), this._floats[SS] = HS, this
        }
        setInt(SS, HS) {
          return this._checkUniform(SS), this._ints[SS] = HS, this
        }
        setFloats(SS, HS) {
          return this._checkUniform(SS), this._floatsArrays[SS] = HS, this
        }
        setColor3(SS, HS) {
          return this._checkUniform(SS), this._colors3[SS] = HS, this
        }
        setColor4(SS, HS) {
          return this._checkUniform(SS), this._colors4[SS] = HS, this
        }
        setVector2(SS, HS) {
          return this._checkUniform(SS), this._vectors2[SS] = HS, this
        }
        setVector3(SS, HS) {
          return this._checkUniform(SS), this._vectors3[SS] = HS, this
        }
        setVector4(SS, HS) {
          return this._checkUniform(SS), this._vectors4[SS] = HS, this
        }
        setMatrix(SS, HS) {
          return this._checkUniform(SS), this._matrices[SS] = HS, this
        }
        render(SS) {
          const HS = this.lL();
          if (!HS) return;
          const gS = this._fullEngine;
          if (gS.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), gS.setState(!1), !this.nodeMaterialSource) {
            for (const SS in this._textures) this._drawWrapper.effect.setTexture(SS, this._textures[SS]);
            for (const SS in this._ints) this._drawWrapper.effect.setInt(SS, this._ints[SS]);
            for (const SS in this._floats) this._drawWrapper.effect.setFloat(SS, this._floats[SS]);
            for (const SS in this._floatsArrays) this._drawWrapper.effect.setArray(SS, this._floatsArrays[SS]);
            for (const SS in this._colors3) this._drawWrapper.effect.setColor3(SS, this._colors3[SS]);
            for (const SS in this._colors4) {
              const HS = this._colors4[SS];
              this._drawWrapper.effect.setFloat4(SS, HS.r, HS.g, HS.b, HS.a)
            }
            for (const SS in this._vectors2) this._drawWrapper.effect.setVector2(SS, this._vectors2[SS]);
            for (const SS in this._vectors3) this._drawWrapper.effect.setVector3(SS, this._vectors3[SS]);
            for (const SS in this._vectors4) this._drawWrapper.effect.setVector4(SS, this._vectors4[SS]);
            for (const SS in this._matrices) this._drawWrapper.effect.setMatrix(SS, this._matrices[SS])
          }
          if (!this._texture || !this._rtWrapper) return;
          gS._enableGPUDebugMarkers && gS._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const tS = gS.currentViewport;
          if (this.isCube)
            for (let bS = 0; bS < 6; bS++) gS.bindFramebuffer(this._rtWrapper, bS, void 0, void 0, !0), gS.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", bS), this.autoClear && gS.clear(HS.clearColor, !0, !1, !1), gS.drawElementsType(XS.d.TriangleFillMode, 0, 6), gS.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let SS = 1;
            this._rtWrapper.is3D ? SS = this._rtWrapper.depth : this._rtWrapper.is2DArray && (SS = this._rtWrapper.layers);
            for (let tS = 0; tS < SS; tS++) {
              if (gS.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, tS), gS.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== SS ? tS / (SS - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", tS);
                for (const SS in this._textures) this._drawWrapper.effect.setTexture(SS, this._textures[SS])
              }
              this.autoClear && gS.clear(HS.clearColor, !0, !1, !1), gS.drawElementsType(XS.d.TriangleFillMode, 0, 6), gS.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          tS && gS.setViewport(tS), this.isCube && gS.generateMipMapsForCubemap(this._texture, !0), gS._enableGPUDebugMarkers && gS._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const HS = this.getSize(),
            gS = new SS(this.name, HS.width, this._fragment, this.lL(), this._fallbackTexture, this._generateMipMaps);
          return gS.hasAlpha = this.hasAlpha, gS.level = this.level, gS.coordinatesMode = this.coordinatesMode, gS
        }
        dispose() {
          const SS = this.lL();
          if (!SS) return;
          const HS = SS.proceduralTextures.indexOf(this);
          HS >= 0 && SS.proceduralTextures.splice(HS, 1);
          const gS = this._vertexBuffers[zS.h.PositionKind];
          gS && (gS.dispose(), this._vertexBuffers[zS.h.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const gS = "function" === typeof Symbol && Symbol.metadata ? Object.create(qS[Symbol.metadata] ?? null) : void 0;
        HS = [(0, OS.M)()], tS = [(0, OS.M)()], bS = [(0, OS.M)()], xS = [(0, OS.M)()], NS = [(0, OS.M)()], (0, JS.j)(SS, null, NS, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: SS => "refreshRate" in SS,
            get: SS => SS.refreshRate
          },
          metadata: gS
        }, null, uS), (0, JS.j)(null, null, HS, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: SS => "isEnabled" in SS,
            get: SS => SS.isEnabled,
            set: (SS, HS) => {
              SS.isEnabled = HS
            }
          },
          metadata: gS
        }, IS, fS), (0, JS.j)(null, null, tS, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: SS => "autoClear" in SS,
            get: SS => SS.autoClear,
            set: (SS, HS) => {
              SS.autoClear = HS
            }
          },
          metadata: gS
        }, kS, aS), (0, JS.j)(null, null, bS, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: SS => "_generateMipMaps" in SS,
            get: SS => SS._generateMipMaps,
            set: (SS, HS) => {
              SS._generateMipMaps = HS
            }
          },
          metadata: gS
        }, KS, GS), (0, JS.j)(null, null, xS, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: SS => "_size" in SS,
            get: SS => SS._size,
            set: (SS, HS) => {
              SS._size = HS
            }
          },
          metadata: gS
        }, CS, nS), gS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gS
        })
      })(), SS
    })();

    function bg(SS) {
      return "texture" in SS
    }

    function Xg(SS) {
      return "value" in SS
    }
    async function xg(SS, HS, tS) {
      const bS = [HS.red, HS.green, HS.blue, HS.alpha],
        XS = [],
        xS = [];
      for (let gS = 0; gS < 4; gS++) {
        const SS = bS[gS];
        if (SS)
          if (bg(SS)) {
            if (SS.sourceChannel < 0 || SS.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let HS = XS.indexOf(SS.texture); - 1 === HS && (HS = XS.length, XS.push(SS.texture)), xS[gS] = HS
          } else {
            if (!Xg(SS)) throw new Error("Invalid channel input configuration");
            if (SS.value < 0 || SS.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            xS[gS] = -1
          }
        else xS[gS] = -1
      }
      let NS = HS.outputSize;
      if (!NS && XS.length > 0) {
        let SS = 0;
        for (const HS of XS) {
          const gS = HS.getSize(),
            tS = Math.max(gS.width, gS.height);
          tS > SS && (SS = tS, NS = gS.width === gS.height ? SS : gS)
        }
      }
      NS = NS || 512;
      const qS = [],
        uS = new Set;
      for (let gS = 0; gS < 4; gS++) {
        const SS = bS[gS],
          HS = ["RED", "GREEN", "BLUE", "ALPHA"][gS];
        if (SS && bg(SS)) {
          qS.push(`${HS}_FROM_TEXTURE`);
          const SS = xS[gS];
          uS.add(SS)
        }
      }
      uS.forEach((SS => {
        qS.push(`USE_TEXTURE${SS}`)
      }));
      const IS = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: tS.AK().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            tS.AK().isWebGPU ? await Promise.all([gS.e(387).then((() => gS(61937)))]) : await Promise.all([gS.e(388).then((() => gS(61942)))])
          },
          skipSceneRegistration: !0
        },
        fS = new tg(SS, NS, "textureMerger", tS, IS);
      fS.refreshRate = -1, fS.defines = qS.length > 0 ? "#define " + qS.join("\n#define ") + "\n" : "";
      for (let gS = 0; gS < XS.length; gS++) kS = XS[gS], (aS = fS).uOffset = kS.uOffset, aS.vOffset = kS.vOffset, aS.uScale = kS.uScale, aS.vScale = kS.vScale, aS.uAng = kS.uAng, aS.vAng = kS.vAng, aS.wAng = kS.wAng, aS.uRotationCenter = kS.uRotationCenter, aS.vRotationCenter = kS.vRotationCenter, fS.setTexture(`inputTexture${gS}`, XS[gS]);
      var kS, aS;
      for (let gS = 0; gS < 4; gS++) {
        const SS = bS[gS],
          HS = ["red", "green", "blue", "alpha"][gS];
        if (SS && bg(SS)) {
          const tS = xS[gS];
          fS.setInt(`${HS}TextureIndex`, tS), fS.setInt(`${HS}SourceChannel`, SS.sourceChannel)
        } else {
          let tS;
          tS = SS && Xg(SS) ? SS.value : 3 === gS ? 1 : 0, fS.setFloat(`${HS}ConstantValue`, tS)
        }
      }
      return await new Promise(((SS, HS) => {
        fS.executeWhenReady((() => {
          try {
            fS.render(), SS(fS)
          } catch (gS) {
            HS(gS instanceof Error ? gS : new Error(String(gS)))
          }
        }))
      }))
    }

    function Ng(SS, HS) {
      return {
        texture: SS,
        sourceChannel: HS
      }
    }

    function qg(SS) {
      return {
        value: SS
      }
    }

    function ug(SS, HS, gS, tS) {
      return {
        red: SS,
        green: HS,
        blue: gS,
        alpha: tS
      }
    }
    var Ig = gS(39872),
      fg = gS(39959),
      kg = gS(37134),
      ag = gS(40023),
      Kg = gS(39950);
    class jg {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class Gg extends Ig.c {
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
        return !!this._options?.enableMultiview || this.uj > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new jg;
        super(null), void 0 === SS.deterministicLockstep && (SS.deterministicLockstep = !1), void 0 !== SS.timeStep && (this._timeStep = SS.timeStep), void 0 === SS.lockstepMaxSteps && (SS.lockstepMaxSteps = 4), this._options = SS, kg.d.SetMatrixPrecision(!!SS.useHighPrecisionMatrix), this._caps = {
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
        }, SS.enableMultiview && (this._caps.multiview = {
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
        }, SS.renderingCanvas && (this._renderingCanvas = SS.renderingCanvas), dS.b.Log(`Babylon.js v${Ig.c.Version} - Null engine`);
        const HS = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (HS.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (HS.Blob = function() {})
      }
      createVertexBuffer(SS) {
        const HS = new fg.b;
        return HS.references = 1, HS
      }
      createIndexBuffer(SS) {
        const HS = new fg.b;
        return HS.references = 1, HS
      }
      clear(SS, HS, gS) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(SS, HS, gS) {
        this._cachedViewport = SS
      }
      createUniformBuffer(SS) {
        const HS = new fg.b;
        return HS.references = 1, HS.hf = SS instanceof Array ? SS.length * Float32Array.BYTES_PER_ELEMENT : SS.byteLength, HS
      }
      createDynamicUniformBuffer(SS) {
        return this.createUniformBuffer(SS)
      }
      updateUniformBuffer(SS, HS, gS, tS) {}
      bindUniformBufferBase(SS, HS, gS) {}
      bindUniformBlock(SS, HS, gS) {}
      createShaderProgram(SS, HS, gS, tS, bS) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(SS, HS) {
        return []
      }
      getAttributes(SS, HS) {
        return []
      }
      bindSamplers(SS) {
        this._currentEffect = null
      }
      enableEffect(SS) {
        SS = null !== SS && (0, Kg.b)(SS) ? SS.effect : SS, this._currentEffect = SS, SS && (SS.onBind && SS.onBind(SS), SS._onBindObservable && SS._onBindObservable.notifyObservers(SS))
      }
      setStateCullFaceType(SS, HS) {}
      setState(SS) {}
      setIntArray(SS, HS) {
        return !0
      }
      setIntArray2(SS, HS) {
        return !0
      }
      setIntArray3(SS, HS) {
        return !0
      }
      setIntArray4(SS, HS) {
        return !0
      }
      setFloatArray(SS, HS) {
        return !0
      }
      setFloatArray2(SS, HS) {
        return !0
      }
      setFloatArray3(SS, HS) {
        return !0
      }
      setFloatArray4(SS, HS) {
        return !0
      }
      setArray(SS, HS) {
        return !0
      }
      setArray2(SS, HS) {
        return !0
      }
      setArray3(SS, HS) {
        return !0
      }
      setArray4(SS, HS) {
        return !0
      }
      setMatrices(SS, HS) {
        return !0
      }
      setMatrix3x3(SS, HS) {
        return !0
      }
      setMatrix2x2(SS, HS) {
        return !0
      }
      setFloat(SS, HS) {
        return !0
      }
      setFloat2(SS, HS, gS) {
        return !0
      }
      setFloat3(SS, HS, gS, tS) {
        return !0
      }
      setBool(SS, HS) {
        return !0
      }
      setFloat4(SS, HS, gS, tS, bS) {
        return !0
      }
      setAlphaMode(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[gS] !== SS && (this.alphaState.setAlphaBlend(0 !== SS, 0), HS || this.setDepthWrite(0 === SS), this._alphaMode[gS] = SS)
      }
      bindBuffers(SS, HS, gS) {}
      wipeCaches(SS) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, SS && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(SS, HS, gS, tS) {}
      drawElementsType(SS, HS, gS, tS) {}
      drawArraysType(SS, HS, gS, tS) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(SS) {}
      createTexture(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          xS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          NS = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const qS = new OH.e(this, 1),
          uS = String(SS);
        return qS.url = uS, qS.generateMipMaps = !HS, qS.samplingMode = bS, qS.invertY = gS, qS.baseWidth = this._options.textureSize, qS.baseHeight = this._options.textureSize, qS.width = this._options.textureSize, qS.height = this._options.textureSize, NS && (qS.format = NS), xS && (qS._buffer = xS), qS.isReady = !0, XS && setTimeout((() => {
          XS(qS)
        })), this._internalTexturesCache.push(qS), qS
      }
      _createHardwareRenderTargetWrapper(SS, HS, gS) {
        const tS = new ag.c(SS, HS, gS, this);
        return this._renderTargetWrapperCache.push(tS), tS
      }
      createRenderTargetTexture(SS, HS) {
        const gS = this._createHardwareRenderTargetWrapper(!1, !1, SS),
          tS = {};
        void 0 !== HS && "object" === typeof HS ? (tS.generateMipMaps = HS.generateMipMaps, tS.generateDepthBuffer = void 0 === HS.generateDepthBuffer || HS.generateDepthBuffer, tS.generateStencilBuffer = tS.generateDepthBuffer && HS.generateStencilBuffer, tS.type = void 0 === HS.type ? 0 : HS.type, tS.samplingMode = void 0 === HS.samplingMode ? 3 : HS.samplingMode) : (tS.generateMipMaps = HS, tS.generateDepthBuffer = !0, tS.generateStencilBuffer = !1, tS.type = 0, tS.samplingMode = 3);
        const bS = new OH.e(this, 5);
        gS.setTexture(bS);
        const XS = SS.width || SS,
          xS = SS.height || SS;
        return gS._generateDepthBuffer = tS.generateDepthBuffer, gS._generateStencilBuffer = !!tS.generateStencilBuffer, bS.baseWidth = XS, bS.baseHeight = xS, bS.width = XS, bS.height = xS, bS.isReady = !0, bS.samples = 1, bS.generateMipMaps = !!tS.generateMipMaps, bS.samplingMode = tS.samplingMode, bS.type = tS.type, this._internalTexturesCache.push(bS), gS
      }
      createMultiviewRenderTargetTexture(SS, HS) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const gS = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: SS,
            height: HS
          }),
          tS = new OH.e(this, 5, !0);
        return tS.baseWidth = SS, tS.baseHeight = HS, tS.width = SS, tS.height = HS, tS.isMultiview = !0, tS.isReady = !0, tS.format = 5, tS.samples = 1, gS.setTextures(tS), gS
      }
      bindMultiviewFramebuffer(SS) {
        this.bindFramebuffer(SS, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(SS, HS) {
        const gS = this._createHardwareRenderTargetWrapper(!1, !0, SS),
          tS = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...HS
          };
        tS.generateStencilBuffer = tS.generateDepthBuffer && tS.generateStencilBuffer, (1 !== tS.type || this._caps.textureFloatLinearFiltering) && (2 !== tS.type || this._caps.textureHalfFloatLinearFiltering) || (tS.samplingMode = 1), gS._generateDepthBuffer = tS.generateDepthBuffer, gS._generateStencilBuffer = !!tS.generateStencilBuffer;
        const bS = new OH.e(this, 5);
        return bS.baseWidth = SS, bS.baseHeight = SS, bS.width = SS, bS.height = SS, bS.isReady = !0, bS.isCube = !0, bS.samples = 1, bS.generateMipMaps = !!tS.generateMipMaps, bS.samplingMode = tS.samplingMode, bS.type = tS.type, this._internalTexturesCache.push(bS), gS
      }
      updateTextureSamplingMode(SS, HS) {
        HS.samplingMode = SS
      }
      createRawTexture(SS, HS, gS, tS, bS, XS, xS) {
        let NS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          qS = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          uS = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const IS = new OH.e(this, 3);
        return IS.baseWidth = HS, IS.baseHeight = gS, IS.width = HS, IS.height = gS, IS.format = tS, IS.generateMipMaps = bS, IS.samplingMode = xS, IS.invertY = XS, IS._compression = NS, IS.type = qS, IS._useSRGBBuffer = uS, this._doNotHandleContextLost || (IS._bufferView = SS), IS
      }
      updateRawTexture(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          xS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        SS && (SS._bufferView = HS, SS.format = gS, SS.invertY = tS, SS._compression = bS, SS.type = XS, SS._useSRGBBuffer = xS)
      }
      bindFramebuffer(SS, HS, gS, tS, bS) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = SS, this._currentFramebuffer = null, this._cachedViewport && !bS && this.setViewport(this._cachedViewport, gS, tS)
      }
      unBindFramebuffer(SS) {
        let HS = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, HS && HS(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(SS) {
        const HS = new fg.b;
        return HS.references = 1, HS.hf = 1, HS
      }
      updateDynamicTexture(SS, HS, gS) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(SS) {}
      updateDynamicIndexBuffer(SS, HS) {}
      updateDynamicVertexBuffer(SS, HS, gS, tS) {}
      _bindTextureDirectly(SS, HS) {
        return this._boundTexturesCache[this._activeChannel] !== HS && (this._boundTexturesCache[this._activeChannel] = HS, !0)
      }
      _bindTexture(SS, HS) {
        SS < 0 || this._bindTextureDirectly(0, HS)
      }
      _deleteBuffer(SS) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(SS) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(SS, HS, gS, tS, bS) {}
      _uploadDataToTextureDirectly(SS, HS) {}
      _uploadArrayBufferViewToTexture(SS, HS) {}
      _uploadImageToTexture(SS, HS) {}
    }
    gS(40082), gS(40119), gS(40079);
    async function Cg(SS) {
      const HS = SS.getInternalTexture();
      if (!HS || 1 !== HS.source) return null;
      if (HS.invertY) {
        const HS = SS.lL()?.AK();
        if (!(HS instanceof Gg)) return null
      }
      const gS = HS._buffer;
      let tS, XS = SS.mimeType;
      try {
        gS ? ArrayBuffer.isView(gS) ? tS = gS.buffer.slice(gS.byteOffset, gS.byteOffset + gS.byteLength) : gS instanceof ArrayBuffer ? tS = gS : gS instanceof Blob ? (tS = await gS.arrayBuffer(), XS = gS.type || XS) : "string" === typeof gS ? (tS = await bS.Tools.LoadFileAsync(gS), XS = (0, qS.d)(gS) || XS) : "undefined" !== typeof HTMLImageElement && gS instanceof HTMLImageElement && (tS = await bS.Tools.LoadFileAsync(gS.src), XS = (0, qS.d)(gS.src) || XS) : (tS = await bS.Tools.LoadFileAsync(HS.url), XS = (0, qS.d)(HS.url) || XS)
      } catch {
        return null
      }
      if (tS && !XS && HS.url) {
        const SS = HS.url.match(/^data:([^;,]+)/);
        XS = SS ? SS[1] : (0, qS.d)(HS.url)
      }
      return tS && XS ? {
        data: tS,
        mimeType: XS
      } : null
    }
    const ng = 1e-6,
      Pg = new GS.Color3(.04, .04, .04),
      Qg = 1024,
      Dg = GS.Color3.White(),
      wg = GS.Color3.BlackReadOnly;

    function hg(SS) {
      switch (SS) {
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

    function Zg(SS, HS, gS) {
      if (HS < Pg.r) return 0;
      const tS = Pg.r,
        bS = SS * gS / (1 - Pg.r) + HS - 2 * Pg.r,
        XS = bS * bS - 4 * tS * (Pg.r - HS);
      return PS.Clamp((-bS + Math.sqrt(XS)) / (2 * tS), 0, 1)
    }

    function Jg(SS) {
      const HS = SS.diffuseColor.toLinearSpace(SS.lL().AK().useExactSrgbConversions).scale(.5),
        gS = SS.alpha,
        tS = function(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new WS.m(0, 1),
            gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new WS.m(0, .1),
            tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new WS.m(0, .1),
            bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new WS.m(1300, .1);
          return function(SS, HS, gS, tS, bS) {
            return (1 - SS) * (1 - SS) * (1 - SS) * HS + 3 * (1 - SS) * (1 - SS) * SS * gS + 3 * (1 - SS) * SS * SS * tS + SS * SS * SS * bS
          }(Math.pow(SS / bS.x, .333333), HS.y, gS.y, tS.y, bS.y)
        }(PS.Clamp(SS.specularPower, 0, Qg));
      return {
        baseColorFactor: [HS.r, HS.g, HS.b, gS],
        metallicFactor: 0,
        roughnessFactor: tS
      }
    }

    function Og(SS, HS) {
      HS.needAlphaBlending() ? SS.alphaMode = "BLEND" : HS.needAlphaTesting() && (SS.alphaMode = "MASK", SS.alphaCutoff = HS.alphaCutOff)
    }

    function dg(SS, HS, gS) {
      const tS = new Uint8Array(SS * HS * 4);
      for (let bS = 0; bS < tS.length; bS += 4) tS[bS] = tS[bS + 1] = tS[bS + 2] = tS[bS + 3] = 255;
      return wS.d.CreateRGBATexture(tS, SS, HS, gS)
    }

    function cg(SS) {
      if (SS instanceof Uint8Array) {
        const HS = SS.length,
          gS = new Float32Array(SS.length);
        for (let tS = 0; tS < HS; ++tS) gS[tS] = SS[tS] / 255;
        return gS
      }
      if (SS instanceof Float32Array) return SS;
      throw new Error("Unsupported pixel format!")
    }
    class vg {
      constructor(SS) {
        this._exporter = SS, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(SS) {
        return SS ? this._textureMap.get(SS.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(SS, HS) {
        const gS = Jg(SS),
          tS = {
            name: SS.name
          };
        if (null == SS.backFaceCulling || SS.backFaceCulling || (SS.twoSidedLighting || bS.Tools.Warn(SS.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), tS.doubleSided = !0), HS) {
          const HS = [],
            bS = SS.diffuseTexture;
          bS && HS.push(this.exportTextureAsync(bS).then((SS => {
            SS && (gS.baseColorTexture = SS)
          })));
          const XS = SS.bumpTexture;
          XS && HS.push(this.exportTextureAsync(XS).then((SS => {
            SS && (tS.normalTexture = SS, 1 !== XS.level && (tS.normalTexture.scale = XS.level))
          })));
          const xS = SS.emissiveTexture;
          xS && (tS.emissiveFactor = [1, 1, 1], HS.push(this.exportTextureAsync(xS).then((SS => {
            SS && (tS.emissiveTexture = SS)
          }))));
          const NS = SS.ambientTexture;
          NS && HS.push(this.exportTextureAsync(NS).then((SS => {
            if (SS) {
              const HS = {
                index: SS.index
              };
              tS.occlusionTexture = HS
            }
          }))), HS.length > 0 && (this._exporter._materialNeedsUVsSet.add(SS), await Promise.all(HS))
        }(SS.alpha < 1 || SS.opacityTexture) && (SS.alphaMode === hS.e.ALPHA_COMBINE ? tS.alphaMode = "BLEND" : bS.Tools.Warn(SS.name + ": glTF 2.0 does not support alpha mode: " + SS.alphaMode.toString())), SS.emissiveColor && !SS.emissiveColor.equalsWithEpsilon(wg, ng) && (tS.emissiveFactor = SS.emissiveColor.lgS()), tS.pbrMetallicRoughness = gS, Og(tS, SS), await this._finishMaterialAsync(tS, SS);
        const XS = this._exporter._materials;
        return XS.push(tS), XS.length - 1
      }
      async _finishMaterialAsync(SS, HS) {
        const gS = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", SS, HS),
          tS = [];
        for (const bS of gS) tS.push(this.exportTextureAsync(bS));
        await Promise.all(tS), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", SS, HS)
      }
      _resizeTexturesToSameDimensions(SS, HS, gS) {
        const tS = SS ? SS.getSize() : {
            width: 0,
            height: 0
          },
          bS = HS ? HS.getSize() : {
            width: 0,
            height: 0
          };
        let XS, xS;
        return tS.width < bS.width ? (XS = SS && SS instanceof DS.c ? QS.i.CreateResizedCopy(SS, bS.width, bS.height, !0) : dg(bS.width, bS.height, gS), xS = HS) : tS.width > bS.width ? (xS = HS && HS instanceof DS.c ? QS.i.CreateResizedCopy(HS, tS.width, tS.height, !0) : dg(tS.width, tS.height, gS), XS = SS) : (XS = SS, xS = HS), {
          texture1: XS,
          texture2: xS
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(SS, HS, gS) {
        const tS = new Array;
        if (!SS && !HS) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const bS = SS ? SS.lL() : HS ? HS.lL() : null;
        if (bS) {
          const XS = this._resizeTexturesToSameDimensions(SS, HS, bS),
            xS = XS.texture1?.getSize();
          let NS, qS;
          const uS = xS.width,
            IS = xS.height,
            fS = await XS.texture1.readPixels(),
            kS = await XS.texture2.readPixels();
          if (!fS) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (NS = cg(fS), !kS) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          qS = cg(kS);
          const aS = qS.byteLength,
            KS = new Uint8Array(aS),
            jS = new Uint8Array(aS),
            CS = 4,
            nS = new GS.Color3(0, 0, 0);
          let PS = 0,
            QS = 0;
          for (let SS = 0; SS < IS; ++SS)
            for (let HS = 0; HS < uS; ++HS) {
              const tS = (uS * SS + HS) * CS,
                xS = {
                  diffuseColor: new GS.Color3(NS[tS], NS[tS + 1], NS[tS + 2]).toLinearSpace(bS.AK().useExactSrgbConversions).multiply(gS.diffuseColor),
                  specularColor: new GS.Color3(qS[tS], qS[tS + 1], qS[tS + 2]).toLinearSpace(bS.AK().useExactSrgbConversions).multiply(gS.specularColor),
                  glossiness: qS[tS + 3] * gS.glossiness
                },
                IS = this._convertSpecularGlossinessToMetallicRoughness(xS);
              nS.r = Math.max(nS.r, IS.baseColor.r), nS.g = Math.max(nS.g, IS.baseColor.g), nS.b = Math.max(nS.b, IS.baseColor.b), PS = Math.max(PS, IS.metallic), QS = Math.max(QS, IS.roughness), jS[tS] = 255 * IS.baseColor.r, jS[tS + 1] = 255 * IS.baseColor.g, jS[tS + 2] = 255 * IS.baseColor.b, jS[tS + 3] = XS.texture1.hasAlpha ? 255 * NS[tS + 3] : 255, KS[tS] = 0, KS[tS + 1] = 255 * IS.roughness, KS[tS + 2] = 255 * IS.metallic, KS[tS + 3] = 255
            }
          const DS = {
            baseColor: nS,
            metallic: PS,
            roughness: QS
          };
          let wS = !1,
            hS = !1;
          for (let SS = 0; SS < IS; ++SS)
            for (let HS = 0; HS < uS; ++HS) {
              const gS = (uS * SS + HS) * CS;
              jS[gS] /= DS.baseColor.r > ng ? DS.baseColor.r : 1, jS[gS + 1] /= DS.baseColor.g > ng ? DS.baseColor.g : 1, jS[gS + 2] /= DS.baseColor.b > ng ? DS.baseColor.b : 1;
              const tS = GS.Color3.FromInts(jS[gS], jS[gS + 1], jS[gS + 2]).toGammaSpace(bS.AK().useExactSrgbConversions);
              jS[gS] = 255 * tS.r, jS[gS + 1] = 255 * tS.g, jS[gS + 2] = 255 * tS.b, tS.equalsWithEpsilon(Dg, ng) || (hS = !0), KS[gS + 1] /= DS.roughness > ng ? DS.roughness : 1, KS[gS + 2] /= DS.metallic > ng ? DS.metallic : 1;
              GS.Color3.FromInts(255, KS[gS + 1], KS[gS + 2]).equalsWithEpsilon(Dg, ng) || (wS = !0)
            }
          return wS && tS.push((0, ZS.EncodeImageAsync)(KS, uS, IS).then((SS => {
            DS.metallicRoughnessTextureData = SS
          }))), hS && tS.push((0, ZS.EncodeImageAsync)(jS, uS, IS).then((SS => {
            DS.baseColorTextureData = SS
          }))), await Promise.all(tS).then((() => DS))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(SS) {
        const HS = this._getPerceivedBrightness(SS.diffuseColor),
          gS = this._getPerceivedBrightness(SS.specularColor),
          tS = 1 - this._getMaxComponent(SS.specularColor),
          bS = Zg(HS, gS, tS),
          XS = SS.diffuseColor.scale(tS / (1 - Pg.r) / Math.max(1 - bS, ng)),
          xS = SS.specularColor.subtract(Pg.scale(1 - bS)).scale(1 / Math.max(bS, ng));
        let NS = GS.Color3.Lerp(XS, xS, bS * bS);
        NS = NS.clampToRef(0, 1, NS);
        return {
          baseColor: NS,
          metallic: bS,
          roughness: 1 - SS.glossiness
        }
      }
      _getPerceivedBrightness(SS) {
        return Math.sqrt(.299 * SS.r * SS.r + .587 * SS.g * SS.g + .114 * SS.b * SS.b)
      }
      _getMaxComponent(SS) {
        return Math.max(SS.r, Math.max(SS.g, SS.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
        const uS = [],
          IS = {
            baseColor: SS,
            metallic: HS,
            roughness: gS
          };
        if (qS)
          if (xS instanceof eH) {
            if (xS.geometryOpacityTexture) {
              const SS = tS && tS.getInternalTexture() ? tS.getInternalTexture().uniqueId : 0,
                HS = xS.geometryOpacityTexture && xS.geometryOpacityTexture.getInternalTexture() ? xS.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                gS = Number(`${SS}${HS}`),
                bS = this._textureMap.get(gS);
              bS ? NS.baseColorTexture = bS : uS.push(xg("baseColorOpacityTexture", ug(tS ? Ng(tS, 0) : qg(1), tS ? Ng(tS, 1) : qg(1), tS ? Ng(tS, 2) : qg(1), Ng(xS.geometryOpacityTexture, 0)), xS.lL()).then((async SS => {
                const HS = await this.exportTextureAsync(SS, gS);
                HS && (NS.baseColorTexture = HS)
              })))
            } else tS && uS.push(this.exportTextureAsync(tS).then((SS => {
              SS && (NS.baseColorTexture = SS)
            })));
            if (xS._useMetallicFromMetallicTextureBlue && bS) uS.push(this.exportTextureAsync(bS).then((SS => {
              SS && (NS.metallicRoughnessTexture = SS)
            })));
            else if (XS || bS) {
              const SS = bS && bS.getInternalTexture() ? bS.getInternalTexture().uniqueId : 0,
                HS = XS && XS.getInternalTexture() ? XS.getInternalTexture().uniqueId : 0,
                gS = Number(`${SS}${HS}`),
                tS = this._textureMap.get(gS);
              tS ? NS.metallicRoughnessTexture = tS : uS.push(xg("MetalRoughTexture", ug(xS.ambientOcclusionTexture ? Ng(xS.ambientOcclusionTexture, 0) : qg(1), XS ? Ng(XS, 0) : qg(1), bS ? Ng(bS, 0) : qg(1)), xS.lL()).then((async SS => {
                const HS = await this.exportTextureAsync(SS, gS);
                HS && (NS.metallicRoughnessTexture = HS)
              })))
            }
          } else tS && uS.push(this.exportTextureAsync(tS).then((SS => {
            SS && (NS.baseColorTexture = SS)
          }))), bS && uS.push(this.exportTextureAsync(bS).then((SS => {
            SS && (NS.metallicRoughnessTexture = SS)
          })));
        return uS.length > 0 && (this._exporter._materialNeedsUVsSet.add(xS), await Promise.all(uS)), IS
      }
      _getTextureSampler(SS) {
        const HS = {};
        if (!SS || !(SS instanceof DS.c)) return HS;
        const gS = this._getGLTFTextureWrapMode(SS.wrapU);
        10497 !== gS && (HS.wrapS = gS);
        const tS = this._getGLTFTextureWrapMode(SS.wrapV);
        switch (10497 !== tS && (HS.wrapT = tS), SS.samplingMode) {
          case DS.c.LINEAR_LINEAR:
            HS.magFilter = 9729, HS.minFilter = 9729;
            break;
          case DS.c.LINEAR_NEAREST:
            HS.magFilter = 9729, HS.minFilter = 9728;
            break;
          case DS.c.NEAREST_LINEAR:
            HS.magFilter = 9728, HS.minFilter = 9729;
            break;
          case DS.c.NEAREST_LINEAR_MIPLINEAR:
            HS.magFilter = 9728, HS.minFilter = 9987;
            break;
          case DS.c.NEAREST_NEAREST:
            HS.magFilter = 9728, HS.minFilter = 9728;
            break;
          case DS.c.NEAREST_LINEAR_MIPNEAREST:
            HS.magFilter = 9728, HS.minFilter = 9985;
            break;
          case DS.c.LINEAR_NEAREST_MIPNEAREST:
            HS.magFilter = 9729, HS.minFilter = 9984;
            break;
          case DS.c.LINEAR_NEAREST_MIPLINEAR:
            HS.magFilter = 9729, HS.minFilter = 9986;
            break;
          case DS.c.NEAREST_NEAREST_MIPLINEAR:
            HS.magFilter = 9728, HS.minFilter = 9986;
            break;
          case DS.c.LINEAR_LINEAR_MIPLINEAR:
            HS.magFilter = 9729, HS.minFilter = 9987;
            break;
          case DS.c.LINEAR_LINEAR_MIPNEAREST:
            HS.magFilter = 9729, HS.minFilter = 9985;
            break;
          case DS.c.NEAREST_NEAREST_MIPNEAREST:
            HS.magFilter = 9728, HS.minFilter = 9984
        }
        return HS
      }
      _getGLTFTextureWrapMode(SS) {
        switch (SS) {
          case DS.c.WRAP_ADDRESSMODE:
            return 10497;
          case DS.c.CLAMP_ADDRESSMODE:
            return 33071;
          case DS.c.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return bS.Tools.Error(`Unsupported Texture Wrap Mode ${SS}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(SS, HS, gS) {
        const tS = {
            diffuseColor: SS._albedoColor,
            specularColor: SS._reflectivityColor,
            glossiness: SS._microSurface
          },
          bS = SS._albedoTexture,
          XS = SS._reflectivityTexture,
          xS = SS._useMicroSurfaceFromReflectivityMapAlpha;
        if (XS && !xS) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((bS || XS) && gS) {
          this._exporter._materialNeedsUVsSet.add(SS);
          const gS = this._exportTextureSampler(bS || XS),
            xS = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(bS, XS, tS),
            NS = this._exporter._textures;
          if (xS.baseColorTextureData) {
            const SS = await this._exportImageAsync(`baseColor${NS.length}`, xS.baseColorTextureData);
            HS.baseColorTexture = this._exportTextureInfo(SS, gS, bS?.coordinatesIndex)
          }
          if (xS.metallicRoughnessTextureData) {
            const SS = await this._exportImageAsync(`metallicRoughness${NS.length}`, xS.metallicRoughnessTextureData);
            HS.metallicRoughnessTexture = this._exportTextureInfo(SS, gS, XS?.coordinatesIndex)
          }
          return xS
        }
        return this._convertSpecularGlossinessToMetallicRoughness(tS)
      }
      async exportPBRMaterialAsync(SS, HS) {
        const gS = {},
          tS = {
            name: SS.name
          },
          bS = SS.isMetallicWorkflow();
        if (bS) {
          const HS = SS._albedoColor,
            tS = SS.alpha;
          HS && (gS.baseColorFactor = [HS.r, HS.g, HS.b, tS])
        }
        const XS = bS ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(SS._albedoColor, SS._metallic, SS._roughness, SS._albedoTexture, SS._metallicTexture, SS._metallicTexture, SS, gS, HS) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(SS, gS, HS);
        await this._setMetallicRoughnessPbrMaterialAsync(XS, SS, tS, gS, HS), await this._finishMaterialAsync(tS, SS);
        const xS = this._exporter._materials;
        return xS.push(tS), xS.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(SS, HS, gS, tS, XS) {
        if (Og(gS, HS), SS.baseColor.equalsWithEpsilon(Dg, ng) && PS.WithinEpsilon(HS.alpha, 1, ng) || (tS.baseColorFactor = [SS.baseColor.r, SS.baseColor.g, SS.baseColor.b, HS.alpha]), null != SS.metallic && 1 !== SS.metallic && (tS.metallicFactor = SS.metallic), null != SS.roughness && 1 !== SS.roughness && (tS.roughnessFactor = SS.roughness), null == HS.backFaceCulling || HS.backFaceCulling || (HS._twoSidedLighting || bS.Tools.Warn(HS.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), gS.doubleSided = !0), XS) {
          const SS = [],
            bS = HS instanceof wH ? HS._bumpTexture : HS.geometryNormalTexture;
          bS && SS.push(this.exportTextureAsync(bS).then((SS => {
            SS && (gS.normalTexture = SS, 1 !== bS.level && (gS.normalTexture.scale = bS.level))
          })));
          const XS = HS instanceof wH ? HS._ambientTexture : HS.ambientOcclusionTexture;
          XS && SS.push(new Promise((async SS => {
            if (HS instanceof eH && tS.metallicRoughnessTexture) {
              const HS = this._exportTextureSampler(XS),
                gS = this._exporter._textures[tS.metallicRoughnessTexture.index].source,
                bS = this._exportTextureInfo(gS, HS, XS.coordinatesIndex);
              return this._textureMap.set(XS.uniqueId, bS), this._exporter._extensionsPostExportTextures("exporter", bS, XS), SS(bS)
            }
            return SS(await this.exportTextureAsync(XS))
          })).then((async SS => {
            if (SS) {
              const tS = {
                index: SS.index,
                texCoord: SS.texCoord,
                extensions: SS.extensions
              };
              gS.occlusionTexture = tS, tS.strength = HS instanceof wH ? HS._ambientTextureStrength : HS.ambientOcclusionTexture.level
            }
          })));
          const xS = HS instanceof wH ? HS._emissiveTexture : HS.emissionColorTexture;
          xS && SS.push(this.exportTextureAsync(xS).then((SS => {
            SS && (gS.emissiveTexture = SS)
          }))), SS.length > 0 && (this._exporter._materialNeedsUVsSet.add(HS), await Promise.all(SS))
        }
        const xS = HS instanceof wH ? HS._emissiveColor : HS.emissionColor;
        xS.equalsWithEpsilon(wg, ng) || (gS.emissiveFactor = xS.lgS()), gS.pbrMetallicRoughness = tS
      }
      async exportOpenPBRMaterialAsync(SS, HS) {
        const gS = {},
          tS = {
            name: SS.name
          },
          bS = SS.baseColor,
          XS = SS.geometryOpacity;
        bS && (gS.baseColorFactor = [bS.r, bS.g, bS.b, XS]);
        const xS = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(SS.baseColor, SS.baseMetalness, SS.specularRoughness, SS.baseColorTexture, SS.baseMetalnessTexture, SS.specularRoughnessTexture, SS, gS, HS);
        await this._setMetallicRoughnessPbrMaterialAsync(xS, SS, tS, gS, HS), await this._finishMaterialAsync(tS, SS);
        const NS = this._exporter._materials;
        return NS.push(tS), NS.length - 1
      }
      async exportTextureAsync(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = this._textureMap.get(HS ?? SS.uniqueId);
        if (gS) return gS;
        const tS = this._exportTextureSampler(SS),
          bS = await this._exportTextureImageAsync(SS);
        return gS = this._exportTextureInfo(bS, tS, SS.coordinatesIndex), this._textureMap.set(HS ?? SS.uniqueId, gS), this._exporter._extensionsPostExportTextures("exporter", gS, SS), gS
      }
      async _exportTextureImageAsync(SS) {
        const HS = SS.mimeType ?? "none",
          gS = this._internalTextureToImage,
          tS = SS.getInternalTexture().uniqueId;
        gS[tS] = gS[tS] || {};
        let XS = gS[tS][HS];
        return void 0 === XS && (XS = (async () => {
          const gS = await Cg(SS);
          if (gS && hg(gS.mimeType) && ("none" === HS || gS.mimeType === HS)) return await this._exportImageAsync(SS.name, new Blob([gS.data], {
            type: gS.mimeType
          }));
          let tS = "image/png";
          "none" !== HS && (hg(HS) ? tS = HS : (tS = "image/png", bS.Tools.Warn(`Unsupported media type: ${HS}. Exporting texture as PNG.`)));
          const XS = SS.getSize(),
            xS = await (0, QS.h)(SS),
            NS = await (0, ZS.EncodeImageAsync)(xS, XS.width, XS.height, tS);
          return await this._exportImageAsync(SS.name, NS)
        })(), gS[tS][HS] = XS), await XS
      }
      async _exportImageAsync(SS, HS) {
        const gS = this._exporter._images;
        let tS;
        if (this._exporter._shouldUseGlb) {
          tS = {
            name: SS,
            mimeType: HS.type,
            bufferView: void 0
          };
          const gS = await HS.arrayBuffer(),
            bS = this._exporter._bufferManager.createBufferView(new Uint8Array(gS));
          this._exporter._bufferManager.setBufferView(tS, bS)
        } else {
          const XS = SS.replace(/\.\/|\/|\.\\|\\/g, "_"),
            xS = function(SS) {
              switch (SS) {
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
            }(HS.type);
          let NS = XS + xS;
          gS.some((SS => SS.uri === NS)) && (NS = `${XS}_${bS.Tools.RandomId()}${xS}`), tS = {
            name: SS,
            uri: NS
          }, this._exporter._imageData[NS] = HS
        }
        return gS.push(tS), gS.length - 1
      }
      _exportTextureInfo(SS, HS, gS) {
        const tS = this._exporter._textures;
        let bS = tS.findIndex((gS => gS.sampler == HS && gS.source === SS)); - 1 === bS && (bS = tS.length, tS.push({
          source: SS,
          sampler: HS
        }));
        const XS = {
          index: bS
        };
        return gS && (XS.texCoord = gS), XS
      }
      _exportTextureSampler(SS) {
        const HS = this._getTextureSampler(SS),
          gS = this._exporter._samplers,
          tS = gS.findIndex((SS => SS.minFilter === HS.minFilter && SS.magFilter === HS.magFilter && SS.wrapS === HS.wrapS && SS.wrapT === HS.wrapT));
        return -1 !== tS ? tS : (gS.push(HS), gS.length - 1)
      }
    }
    var Eg = gS(40113),
      Lg = gS(40242);
    (0, Lg.e)();
    var Yg = gS(37123);
    const Ag = tS.Matrix.Compose(new tS.VK(-1, 1, 1), tS.Quaternion.Identity(), tS.VK.Zero());

    function yg(SS, HS) {
      if (!(SS instanceof fS.d)) return !1;
      if (HS) {
        if (!SS.getWorldMatrix().equalsWithEpsilon(tS.Matrix.IdentityReadOnly, Yg.d)) return !1
      } else {
        if (!SS.getWorldMatrix().multiplyToRef(Ag, tS.TmpVectors.Matrix[0]).equalsWithEpsilon(tS.Matrix.IdentityReadOnly, Yg.d)) return !1
      }
      return !(SS instanceof kS.e && SS.geometry)
    }
    const Vg = tS.VK.ZeroReadOnly,
      ig = tS.Quaternion.Identity(),
      Wg = tS.VK.OneReadOnly,
      zg = new tS.VK(-1, 1, 1);

    function Ug(SS, HS) {
      const {
        byteOffset: gS,
        byteStride: tS,
        type: bS,
        normalized: XS
      } = SS, xS = SS.getSize(), NS = HS.reduce(((SS, HS) => HS.getTotalVertices() > SS ? HS.getTotalVertices() : SS), -Number.MAX_VALUE);
      return {
        byteOffset: gS,
        byteStride: tS,
        componentCount: xS,
        type: bS,
        count: NS * xS,
        normalized: XS,
        totalVertices: NS,
        kind: SS.getKind()
      }
    }

    function pg(SS) {
      switch (SS) {
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

    function sg(SS) {
      switch (SS) {
        case IS.f.PositionKind:
        case IS.f.NormalKind:
        case IS.f.TangentKind:
        case IS.f.ColorKind:
        case IS.f.MatricesIndicesKind:
        case IS.f.MatricesIndicesExtraKind:
        case IS.f.MatricesWeightsKind:
        case IS.f.MatricesWeightsExtraKind:
        case IS.f.UVKind:
        case IS.f.UV2Kind:
        case IS.f.UV3Kind:
        case IS.f.UV4Kind:
        case IS.f.UV5Kind:
        case IS.f.UV6Kind:
          return !0
      }
      return !1
    }

    function Bg(SS) {
      const HS = Math.sqrt(SS.x * SS.x + SS.y * SS.y + SS.z * SS.z);
      HS > 0 && (SS.x /= HS, SS.y /= HS, SS.z /= HS)
    }

    function Mg(SS) {
      return SS.x *= -1, SS
    }

    function Fg(SS) {
      if (SS.x * SS.x + SS.y * SS.y > .5) {
        const HS = Math.abs(SS.x),
          gS = Math.abs(SS.y);
        if (HS > gS) {
          const gS = Math.sign(SS.x);
          SS.x = HS, SS.y *= -gS, SS.z *= -gS, SS.w *= gS
        } else {
          const HS = Math.sign(SS.y);
          SS.x *= -HS, SS.y = gS, SS.z *= HS, SS.w *= -HS
        }
      } else {
        const HS = Math.abs(SS.z),
          gS = Math.abs(SS.w);
        if (HS > gS) {
          const gS = Math.sign(SS.z);
          SS.x *= -gS, SS.y *= gS, SS.z = HS, SS.w *= -gS
        } else {
          const HS = Math.sign(SS.w);
          SS.x *= HS, SS.y *= -HS, SS.z *= -HS, SS.w = gS
        }
      }
      return SS
    }

    function Rg(SS) {
      SS.I5(-SS.z, SS.w, SS.x, -SS.y)
    }

    function Tg(SS, HS) {
      const gS = tS.VK.FromArrayToRef(HS.translation || [0, 0, 0], 0, tS.TmpVectors.VK[0]),
        bS = tS.Quaternion.FromArrayToRef(HS.rotation || [0, 0, 0, 1], 0, tS.TmpVectors.Quaternion[0]),
        XS = tS.Matrix.ComposeToRef(Wg, bS, gS, tS.TmpVectors.Matrix[0]),
        xS = tS.VK.FromArrayToRef(SS.translation || [0, 0, 0], 0, tS.TmpVectors.VK[2]),
        NS = tS.Quaternion.FromArrayToRef(SS.rotation || [0, 0, 0, 1], 0, tS.TmpVectors.Quaternion[1]),
        qS = tS.Matrix.ComposeToRef(Wg, NS, xS, tS.TmpVectors.Matrix[1]);
      XS.multiplyToRef(qS, qS), qS.decompose(void 0, bS, gS), gS.equalsWithEpsilon(Vg, Yg.d) ? delete HS.translation : HS.translation = gS.lgS(), bS.equalsWithEpsilon(ig, Yg.d) ? delete HS.rotation : HS.rotation = bS.lgS(), HS.scale && delete HS.scale
    }

    function og(SS, HS) {
      if (!(HS instanceof fS.d)) return !1;
      if (!(1 === HS.getChildren().length && 0 === SS.getChildren().length && SS.parent === HS)) return !1;
      const gS = SS.lL(),
        tS = SS instanceof Lg.h && !gS.useRightHandedSystem ? zg : Wg;
      return !!HS.nf.equalsWithEpsilon(tS, Yg.d) || (dS.b.Warn(`Cannot collapse node ${SS.name} into parent node ${HS.name} with modified scaling.`), !1)
    }

    function lg(SS) {
      if (SS instanceof Array) {
        const HS = new Float32Array(SS);
        return new Uint8Array(HS.buffer, HS.byteOffset, HS.byteLength)
      }
      return ArrayBuffer.isView(SS) ? new Uint8Array(SS.buffer, SS.byteOffset, SS.byteLength) : new Uint8Array(SS)
    }

    function mg(SS, HS) {
      for (const [gS, tS] of Object.entries(SS)) {
        const bS = HS[gS];
        (Array.isArray(tS) && Array.isArray(bS) && eg(tS, bS) || tS === bS) && delete SS[gS]
      }
      return SS
    }

    function eg(SS, HS) {
      return SS.length === HS.length && SS.every(((SS, gS) => SS === HS[gS]))
    }
    const rg = new Map([
      [Int8Array, (SS, HS, gS) => SS.setInt8(HS, gS)],
      [Uint8Array, (SS, HS, gS) => SS.setUint8(HS, gS)],
      [Uint8ClampedArray, (SS, HS, gS) => SS.setUint8(HS, gS)],
      [Int16Array, (SS, HS, gS) => SS.setInt16(HS, gS, !0)],
      [Uint16Array, (SS, HS, gS) => SS.setUint16(HS, gS, !0)],
      [Int32Array, (SS, HS, gS) => SS.setInt32(HS, gS, !0)],
      [Uint32Array, (SS, HS, gS) => SS.setUint32(HS, gS, !0)],
      [Float32Array, (SS, HS, gS) => SS.setFloat32(HS, gS, !0)],
      [Float64Array, (SS, HS, gS) => SS.setFloat64(HS, gS, !0)]
    ]);
    class St {
      writeTypedArray(SS) {
        this._checkGrowBuffer(SS.byteLength);
        const HS = rg.get(SS.constructor);
        for (let gS = 0; gS < SS.length; gS++) HS(this._dataView, this._byteOffset, SS[gS]), this._byteOffset += SS.BYTES_PER_ELEMENT
      }
      constructor(SS) {
        this._data = new Uint8Array(SS), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(SS) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, SS), this._byteOffset++
      }
      writeInt8(SS) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, SS), this._byteOffset++
      }
      writeInt16(SS) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, SS, !0), this._byteOffset += 2
      }
      writeUInt16(SS) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, SS, !0), this._byteOffset += 2
      }
      writeInt32(SS) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, SS, !0), this._byteOffset += 4
      }
      writeUInt32(SS) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, SS, !0), this._byteOffset += 4
      }
      writeFloat32(SS) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, SS, !0), this._byteOffset += 4
      }
      writeFloat64(SS) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, SS, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(SS) {
        const HS = this.byteOffset + SS;
        if (HS > this._data.byteLength) {
          const SS = new Uint8Array(2 * HS);
          SS.set(this._data), this._data = SS, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function Ht(SS) {
      return SS % 4 === 0 ? 4 : SS % 2 === 0 ? 2 : 1
    }
    class gt {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(SS) {
        let HS = 0;
        this._bufferViewToData.forEach((SS => {
          HS += SS.byteLength
        }));
        const gS = new St(HS),
          tS = Array.from(this._bufferViewToData.keys()).sort(((SS, HS) => Ht(HS.byteLength) - Ht(SS.byteLength)));
        for (const bS of tS) {
          bS.byteOffset = gS.byteOffset, SS.push(bS);
          const HS = SS.length - 1,
            tS = this.getPropertiesWithBufferView(bS);
          for (const SS of tS) SS.bufferView = HS;
          gS.writeTypedArray(this._bufferViewToData.get(bS)), this._bufferViewToData.delete(bS)
        }
        return gS.getOutputData()
      }
      createBufferView(SS, HS) {
        const gS = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: SS.byteLength,
          byteStride: HS
        };
        return this._bufferViewToData.set(gS, SS), gS
      }
      createAccessor(SS, HS, gS, tS, bS, XS, xS) {
        this._verifyBufferView(SS);
        const NS = {
          bufferView: void 0,
          componentType: gS,
          count: tS,
          type: HS,
          min: XS?.min,
          max: XS?.max,
          normalized: xS,
          byteOffset: bS
        };
        return this.setBufferView(NS, SS), this._accessorToBufferView.set(NS, SS), NS
      }
      setBufferView(SS, HS) {
        this._verifyBufferView(HS);
        this.getPropertiesWithBufferView(HS).push(SS)
      }
      removeBufferView(SS) {
        const HS = this.getPropertiesWithBufferView(SS);
        for (const gS of HS) void 0 !== gS.bufferView && delete gS.bufferView;
        this._bufferViewToData.delete(SS), this._bufferViewToProperties.delete(SS), this._accessorToBufferView.forEach(((HS, gS) => {
          HS === SS && (void 0 !== gS.byteOffset && delete gS.byteOffset, this._accessorToBufferView.delete(gS))
        }))
      }
      getBufferView(SS) {
        const HS = this._accessorToBufferView.get(SS);
        return this._verifyBufferView(HS), HS
      }
      getPropertiesWithBufferView(SS) {
        return this._verifyBufferView(SS), this._bufferViewToProperties.set(SS, this._bufferViewToProperties.get(SS) ?? []), this._bufferViewToProperties.get(SS)
      }
      getData(SS) {
        return this._verifyBufferView(SS), this._bufferViewToData.get(SS)
      }
      _verifyBufferView(SS) {
        if (void 0 === SS || !this._bufferViewToData.has(SS)) throw new Error(`BufferView ${SS} not found in BufferManager.`)
      }
    }
    var tt = gS(40248);
    (0, tt.d)();
    var bt = gS(40477);
    (0, bt.d)();
    var Xt = gS(40306),
      xt = gS(41111);
    (0, xt.f)();
    let Nt = (() => {
      var SS;
      let HS, gS, tS = [],
        bS = [],
        XS = [],
        xS = [];
      return SS = class {
        get influence() {
          return this._influence
        }
        set influence(SS) {
          if (this._influence === SS) return;
          const HS = this._influence;
          this._influence = SS, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === HS || 0 === SS)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(SS) {
          this._animationPropertiesOverride = SS
        }
        constructor(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            NS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = SS, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new Sg.e, this._onDataLayoutChanged = new Sg.e, this.id = (0, JS.k)(this, tS, void 0), this.morphTargetManager = ((0, JS.k)(this, bS), (0, JS.k)(this, XS, null)), this._animationPropertiesOverride = ((0, JS.k)(this, xS), null), this.id = SS, this.morphTargetManager = NS, this._scene = gS || jS.d.LastCreatedScene, this.influence = HS, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        hxS(SS) {
          const HS = this.hasPositions;
          this._positions = SS, HS !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(SS) {
          const HS = this.hasNormals;
          this._normals = SS, HS !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(SS) {
          const HS = this.hasTangents;
          this._tangents = SS, HS !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(SS) {
          const HS = this.hasUVs;
          this._uvs = SS, HS !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(SS) {
          const HS = this.hasUV2s;
          this._uv2s = SS, HS !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(SS) {
          const HS = this.hasColors;
          this._colors = SS, HS !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const HS = hH.b.Clone((() => new SS(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return HS._positions = this._positions, HS._normals = this._normals, HS._tangents = this._tangents, HS._uvs = this._uvs, HS._uv2s = this._uv2s, HS._colors = this._colors, HS
        }
        serialize() {
          const SS = {};
          return SS.name = this.name, SS.influence = this.influence, null != this.id && (SS.id = this.id), SS.uniqueId = this.uniqueId, SS.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (SS.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (SS.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (SS.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (SS.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (SS.colors = Array.prototype.slice.call(this.getColors())), hH.b.AppendSerializedAnimations(this, SS), SS
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(HS, gS) {
          let tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const bS = new SS(HS.name, HS.influence, gS, tS);
          if (bS.hxS(HS.positions), null != HS.id && (bS.id = HS.id), HS.normals && bS.setNormals(HS.normals), HS.tangents && bS.setTangents(HS.tangents), HS.uvs && bS.setUVs(HS.uvs), HS.uv2s && bS.setUV2s(HS.uv2s), HS.colors && bS.setColors(HS.colors), HS.animations) {
            for (let SS = 0; SS < HS.animations.length; SS++) {
              const gS = HS.animations[SS],
                tS = (0, pH.d)("BABYLON.Animation");
              tS && bS.animations.push(tS.Parse(gS))
            }
            HS.autoAnimate && gS && gS.beginAnimation(bS, HS.autoAnimateFrom, HS.autoAnimateTo, HS.autoAnimateLoop, HS.autoAnimateSpeed || 1)
          }
          return bS
        }
        static FromMesh(HS, gS, tS) {
          gS || (gS = HS.name);
          const bS = new SS(gS, tS, HS.lL(), HS.morphTargetManager);
          return bS.hxS(HS.getVerticesData(zS.h.PositionKind)), HS.isVerticesDataPresent(zS.h.NormalKind) && bS.setNormals(HS.getVerticesData(zS.h.NormalKind)), HS.isVerticesDataPresent(zS.h.TangentKind) && bS.setTangents(HS.getVerticesData(zS.h.TangentKind)), HS.isVerticesDataPresent(zS.h.UVKind) && bS.setUVs(HS.getVerticesData(zS.h.UVKind)), HS.isVerticesDataPresent(zS.h.UV2Kind) && bS.setUV2s(HS.getVerticesData(zS.h.UV2Kind)), HS.isVerticesDataPresent(zS.h.ColorKind) && bS.setColors(HS.getVerticesData(zS.h.ColorKind)), bS
        }
      }, (() => {
        const NS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        HS = [(0, OS.M)()], gS = [(0, OS.M)()], (0, JS.j)(null, null, HS, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: SS => "id" in SS,
            get: SS => SS.id,
            set: (SS, HS) => {
              SS.id = HS
            }
          },
          metadata: NS
        }, tS, bS), (0, JS.j)(null, null, gS, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: SS => "morphTargetManager" in SS,
            get: SS => SS.morphTargetManager,
            set: (SS, HS) => {
              SS.morphTargetManager = HS
            }
          },
          metadata: NS
        }, XS, xS), NS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: NS
        })
      })(), SS
    })();
    var qt, ut = gS(41166),
      It = gS(40304);
    ! function(SS) {
      SS[SS.INTANGENT = 0] = "INTANGENT", SS[SS.OUTTANGENT = 1] = "OUTTANGENT"
    }(qt || (qt = {}));
    class ft {
      static _IsTransformable(SS) {
        return SS && (SS instanceof fS.d || SS instanceof tt.b || SS instanceof It.e)
      }
      static _CreateNodeAnimation(SS, HS, gS, tS, XS) {
        if (this._IsTransformable(SS)) {
          const xS = [],
            NS = [],
            qS = HS.getKeys(),
            uS = ft._CalculateMinMaxKeyFrames(qS),
            IS = ft._DeduceInterpolation(qS, gS, tS),
            fS = IS.interpolationType,
            kS = IS.shouldBakeAnimation;
          if (kS ? ft._CreateBakedAnimation(SS, HS, gS, uS.min, uS.max, HS.framePerSecond, XS, xS, NS, uS, tS) : "LINEAR" === fS || "STEP" === fS ? ft._CreateLinearOrStepAnimation(SS, HS, gS, xS, NS, tS) : "CUBICSPLINE" === fS ? ft._CreateCubicSplineAnimation(SS, HS, gS, xS, NS, tS) : ft._CreateBakedAnimation(SS, HS, gS, uS.min, uS.max, HS.framePerSecond, XS, xS, NS, uS, tS), xS.length && NS.length) {
            return {
              inputs: xS,
              outputs: NS,
              samplerInterpolation: fS,
              inputsMin: kS ? uS.min : bS.Tools.FloatRound(uS.min / HS.framePerSecond),
              inputsMax: kS ? uS.max : bS.Tools.FloatRound(uS.max / HS.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(SS) {
        let HS = null,
          gS = "VEC3",
          tS = !1;
        const XS = SS.targetProperty.split(".");
        switch (XS[0]) {
          case "nf":
            HS = "scale";
            break;
          case "position":
            HS = "translation";
            break;
          case "rotation":
            gS = "VEC4", HS = "rotation";
            break;
          case "rotationQuaternion":
            gS = "VEC4", tS = !0, HS = "rotation";
            break;
          case "influence":
            gS = "SCALAR", HS = "weights";
            break;
          default:
            bS.Tools.Error(`Unsupported animatable property ${XS[0]}`)
        }
        return HS ? {
          animationChannelTargetPath: HS,
          dataAccessorType: gS,
          useQuaternion: tS
        } : (bS.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS) {
        let fS;
        if (ft._IsTransformable(SS) && SS.animations)
          for (const kS of SS.animations) {
            if (IS && !IS(kS)) continue;
            const bS = ft._DeduceAnimationInfo(kS);
            bS && (fS = {
              name: kS.name,
              samplers: [],
              channels: []
            }, ft._AddAnimation(`${kS.name}`, kS.hasRunningRuntimeAnimations ? HS : fS, SS, kS, bS.dataAccessorType, bS.animationChannelTargetPath, tS, XS, xS, NS, bS.useQuaternion, qS, uS), fS.samplers.length && fS.channels.length && gS.push(fS))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS) {
        let fS;
        if (SS instanceof ut.e) {
          const bS = SS.morphTargetManager;
          if (bS)
            for (let kS = 0; kS < bS.numTargets; ++kS) {
              const aS = bS.getTarget(kS);
              for (const KS of aS.animations) {
                if (IS && !IS(KS)) continue;
                const aS = new xt.d(`${KS.name}`, "influence", KS.framePerSecond, KS.dataType, KS.qX, KS.enableBlending),
                  jS = [],
                  GS = KS.getKeys();
                for (let SS = 0; SS < GS.length; ++SS) {
                  const HS = GS[SS];
                  for (let SS = 0; SS < bS.numTargets; ++SS) SS == kS ? jS.push(HS) : jS.push({
                    frame: HS.frame,
                    value: 0
                  })
                }
                aS.setKeys(jS, !0);
                const CS = ft._DeduceAnimationInfo(aS);
                CS && (fS = {
                  name: aS.name,
                  samplers: [],
                  channels: []
                }, ft._AddAnimation(KS.name, KS.hasRunningRuntimeAnimations ? HS : fS, SS, aS, CS.dataAccessorType, CS.animationChannelTargetPath, tS, XS, xS, NS, CS.useQuaternion, qS, uS, bS.numTargets), fS.samplers.length && fS.channels.length && gS.push(fS))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS) {
        let IS;
        if (SS.animationGroups) {
          const fS = SS.animationGroups;
          for (const kS of fS) {
            const fS = new Map,
              aS = new Map,
              KS = new Set,
              jS = kS.to - kS.from;
            IS = {
              name: kS.name,
              channels: [],
              samplers: []
            };
            for (let HS = 0; HS < kS.targetedAnimations.length; ++HS) {
              const uS = kS.targetedAnimations[HS],
                jS = uS.target,
                GS = uS.animation;
              if (qS && !qS(GS)) continue;
              const CS = NS.has(jS);
              if (this._IsTransformable(jS) || 1 === jS.length && this._IsTransformable(jS[0])) {
                const SS = ft._DeduceAnimationInfo(uS.animation);
                if (SS) {
                  const HS = this._IsTransformable(jS) ? jS : this._IsTransformable(jS[0]) ? jS[0] : null;
                  HS && ft._AddAnimation(`${GS.name}`, IS, HS, GS, SS.dataAccessorType, SS.animationChannelTargetPath, gS, tS, bS, XS, SS.useQuaternion, xS, CS)
                }
              } else if (jS instanceof Nt || 1 === jS.length && jS[0] instanceof Nt) {
                if (ft._DeduceAnimationInfo(uS.animation)) {
                  const HS = jS instanceof Nt ? jS : jS[0];
                  if (HS) {
                    const gS = SS.morphTargetManagers.find((SS => {
                      for (let gS = 0; gS < SS.numTargets; ++gS)
                        if (SS.getTarget(gS) === HS) return !0;
                      return !1
                    }));
                    if (gS) {
                      const tS = SS.meshes.find((SS => SS.morphTargetManager === gS));
                      tS && (fS.has(tS) || fS.set(tS, new Map), fS.get(tS)?.set(HS, GS), KS.add(tS), aS.set(tS, GS))
                    }
                  }
                }
              }
            }
            KS.forEach((SS => {
              const HS = SS.morphTargetManager;
              let NS = null;
              const qS = [],
                uS = aS.get(SS).getKeys(),
                KS = uS.length;
              for (let gS = 0; gS < KS; ++gS)
                for (let tS = 0; tS < HS.numTargets; ++tS) {
                  const bS = HS.getTarget(tS),
                    XS = fS.get(SS);
                  if (XS) {
                    const HS = XS.get(bS);
                    HS ? (NS || (NS = new xt.d(`${kS.name}_${SS.name}_MorphWeightAnimation`, "influence", HS.framePerSecond, xt.d.ANIMATIONTYPE_FLOAT, HS.qX, HS.enableBlending)), qS.push(HS.getKeys()[gS])) : qS.push({
                      frame: kS.from + jS / KS * gS,
                      value: bS.influence,
                      inTangent: uS[0].inTangent ? 0 : void 0,
                      outTangent: uS[0].outTangent ? 0 : void 0
                    })
                  }
                }
              NS.setKeys(qS, !0);
              const GS = ft._DeduceAnimationInfo(NS);
              GS && ft._AddAnimation(`${kS.name}_${SS.name}_MorphWeightAnimation`, IS, SS, NS, GS.dataAccessorType, GS.animationChannelTargetPath, gS, tS, bS, XS, GS.useQuaternion, xS, !1, HS?.numTargets)
            })), IS.channels.length && IS.samplers.length && (uS?.set(kS, HS.length), HS.push(IS))
          }
        }
      }
      static _AddAnimation(SS, HS, gS, bS, XS, xS, NS, qS, uS, IS, fS, kS, aS, KS) {
        const jS = ft._CreateNodeAnimation(gS, bS, xS, fS, kS);
        let GS, CS, nS, PS, QS, DS;
        if (jS) {
          if (KS) {
            let SS, HS = 0;
            const gS = [];
            for (; jS.inputs.length > 0;) SS = jS.inputs.shift(), HS % KS == 0 && gS.push(SS), HS++;
            jS.inputs = gS
          }
          const SS = NS.get(gS),
            bS = new Float32Array(jS.inputs);
          GS = qS.createBufferView(bS), CS = qS.createAccessor(GS, "SCALAR", 5126, jS.inputs.length, void 0, {
            min: [jS.inputsMin],
            max: [jS.inputsMax]
          }), IS.push(CS), nS = IS.length - 1;
          const uS = new tS.Quaternion,
            fS = new tS.VK,
            kS = new tS.VK,
            wS = gS instanceof tt.b,
            hS = pg(XS),
            ZS = new Float32Array(jS.outputs.length * hS);
          jS.outputs.forEach((function(SS, HS) {
            let gS = SS;
            switch (xS) {
              case "translation":
                aS && (tS.VK.FromArrayToRef(SS, 0, kS), Mg(kS), kS.toArray(gS));
                break;
              case "rotation":
                4 === SS.length ? tS.Quaternion.FromArrayToRef(SS, 0, uS) : (gS = new Array(4), tS.VK.FromArrayToRef(SS, 0, fS), tS.Quaternion.FromEulerVectorToRef(fS, uS)), aS && (Fg(uS), wS && Rg(uS)), uS.toArray(gS)
            }
            ZS.set(gS, HS * hS)
          })), GS = qS.createBufferView(ZS), CS = qS.createAccessor(GS, XS, 5126, jS.outputs.length), IS.push(CS), PS = IS.length - 1, QS = {
            interpolation: jS.samplerInterpolation,
            input: nS,
            output: PS
          }, HS.samplers.push(QS), DS = {
            sampler: HS.samplers.length - 1,
            target: {
              node: SS,
              path: xS
            }
          }, HS.channels.push(DS)
        }
      }
      static _CreateBakedAnimation(SS, HS, gS, XS, xS, NS, qS, uS, IS, fS, kS) {
        let aS;
        const KS = tS.Quaternion.Identity();
        let jS, GS, CS, nS, PS, QS = null,
          DS = null;
        fS.min = bS.Tools.FloatRound(XS / NS);
        const wS = HS.getKeys();
        for (let tS = 0, hS = wS.length; tS < hS; ++tS) {
          if (GS = wS[tS], tS + 1 < hS)
            if (CS = wS[tS + 1], GS.value.equals && GS.value.equals(CS.value) || GS.value === CS.value) {
              if (0 !== tS) continue;
              PS = GS.frame
            } else PS = CS.frame;
          else {
            if (nS = wS[tS - 1], GS.value.equals && GS.value.equals(nS.value) || GS.value === nS.value) continue;
            PS = xS
          }
          if (PS)
            for (let tS = GS.frame; tS <= PS; tS += qS) {
              if (jS = bS.Tools.FloatRound(tS / NS), jS === QS) continue;
              QS = jS, DS = jS;
              const XS = {
                key: 0,
                repeatCount: 0,
                qX: HS.qX
              };
              aS = HS._interpolate(tS, XS), ft._SetInterpolatedValue(SS, aS, jS, HS, gS, KS, uS, IS, kS)
            }
        }
        DS && (fS.max = DS)
      }
      static _ConvertFactorToVector3OrQuaternion(SS, HS, gS, XS, xS) {
        const NS = ft._GetBasePositionRotationOrScale(HS, XS, xS),
          qS = gS.targetProperty.split("."),
          uS = qS ? qS[1] : "",
          IS = xS ? tS.Quaternion.FromArray(NS).normalize() : tS.VK.FromArray(NS);
        switch (uS) {
          case "x":
          case "y":
          case "z":
            IS[uS] = SS;
            break;
          case "w":
            IS.w = SS;
            break;
          default:
            bS.Tools.Error(`glTFAnimation: Unsupported component name "${uS}"!`)
        }
        return IS
      }
      static _SetInterpolatedValue(SS, HS, gS, bS, XS, xS, NS, qS, uS) {
        let IS;
        NS.push(gS), "weights" !== XS ? (bS.dataType === xt.d.ANIMATIONTYPE_FLOAT && (HS = this._ConvertFactorToVector3OrQuaternion(HS, SS, bS, XS, uS)), "rotation" === XS ? (uS ? xS = HS : (IS = HS, tS.Quaternion.RotationYawPitchRollToRef(IS.y, IS.x, IS.z, xS)), qS.push(xS.lgS())) : (IS = HS, qS.push(IS.lgS()))) : qS.push([HS])
      }
      static _CreateLinearOrStepAnimation(SS, HS, gS, tS, bS, XS) {
        for (const xS of HS.getKeys()) tS.push(xS.frame / HS.framePerSecond), ft._AddKeyframeValue(xS, HS, bS, gS, SS, XS)
      }
      static _CreateCubicSplineAnimation(SS, HS, gS, tS, bS, XS) {
        HS.getKeys().forEach((function(xS) {
          tS.push(xS.frame / HS.framePerSecond), ft._AddSplineTangent(qt.INTANGENT, bS, gS, "CUBICSPLINE", xS, XS), ft._AddKeyframeValue(xS, HS, bS, gS, SS, XS), ft._AddSplineTangent(qt.OUTTANGENT, bS, gS, "CUBICSPLINE", xS, XS)
        }))
      }
      static _GetBasePositionRotationOrScale(SS, HS, gS) {
        let bS;
        if ("rotation" === HS)
          if (gS) {
            bS = (SS.rotationQuaternion ?? tS.Quaternion.Identity()).lgS()
          } else {
            bS = (SS.rotation ?? tS.VK.Zero()).lgS()
          }
        else if ("translation" === HS) {
          bS = (SS.position ?? tS.VK.Zero()).lgS()
        } else {
          bS = (SS.nf ?? tS.VK.One()).lgS()
        }
        return bS
      }
      static _AddKeyframeValue(SS, HS, gS, XS, xS, NS) {
        let qS;
        const uS = HS.dataType;
        if (uS === xt.d.ANIMATIONTYPE_VECTOR3) {
          let HS = SS.value.lgS();
          if ("rotation" === XS) {
            const SS = tS.VK.FromArray(HS);
            HS = tS.Quaternion.RotationYawPitchRoll(SS.y, SS.x, SS.z).lgS()
          }
          gS.push(HS)
        } else if (uS === xt.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === XS) gS.push([SS.value]);
          else if (qS = this._ConvertFactorToVector3OrQuaternion(SS.value, xS, HS, XS, NS), qS) {
            if ("rotation" === XS) {
              const SS = NS ? qS : tS.Quaternion.RotationYawPitchRoll(qS.y, qS.x, qS.z).normalize();
              gS.push(SS.lgS())
            }
            gS.push(qS.lgS())
          }
        } else uS === xt.d.ANIMATIONTYPE_QUATERNION ? gS.push(SS.value.normalize().lgS()) : bS.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(SS, HS, gS) {
        let tS, bS, XS = !1;
        if ("rotation" === HS && !gS) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let xS = 0, NS = SS.length; xS < NS; ++xS)
          if (bS = SS[xS], bS.inTangent || bS.outTangent)
            if (tS) {
              if ("CUBICSPLINE" !== tS) {
                tS = "LINEAR", XS = !0;
                break
              }
            } else tS = "CUBICSPLINE";
        else if (tS) {
          if ("CUBICSPLINE" === tS || bS.interpolation && 1 === bS.interpolation && "STEP" !== tS) {
            tS = "LINEAR", XS = !0;
            break
          }
        } else tS = bS.interpolation && 1 === bS.interpolation ? "STEP" : "LINEAR";
        return tS || (tS = "LINEAR"), {
          interpolationType: tS,
          shouldBakeAnimation: XS
        }
      }
      static _AddSplineTangent(SS, HS, gS, bS, XS, xS) {
        let NS;
        const qS = SS === qt.INTANGENT ? XS.inTangent : XS.outTangent;
        if ("CUBICSPLINE" === bS) {
          if ("rotation" === gS)
            if (qS)
              if (xS) NS = qS.lgS();
              else {
                const SS = qS;
                NS = tS.Quaternion.RotationYawPitchRoll(SS.y, SS.x, SS.z).lgS()
              }
          else NS = [0, 0, 0, 0];
          else NS = "weights" === gS ? qS ? [qS] : [0] : qS ? qS.lgS() : [0, 0, 0];
          HS.push(NS)
        }
      }
      static _CalculateMinMaxKeyFrames(SS) {
        let HS = 1 / 0,
          gS = -1 / 0;
        return SS.forEach((function(SS) {
          HS = Math.min(HS, SS.frame), gS = Math.max(gS, SS.frame)
        })), {
          min: HS,
          max: gS
        }
      }
    }

    function kt(SS, HS, gS, XS, xS, NS) {
      const qS = {
          attributes: {},
          influence: SS.influence,
          name: SS.name
        },
        uS = HS.geometry;
      if (!uS) return bS.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), qS;
      const fS = NS ? -1 : 1,
        kS = tS.VK.Zero();
      let aS, KS;
      if (SS.hasPositions) {
        const XS = SS.getPositions(),
          NS = uS.getVerticesData(IS.f.PositionKind);
        if (NS) {
          const SS = new Float32Array(NS.length),
            HS = [1 / 0, 1 / 0, 1 / 0],
            bS = [-1 / 0, -1 / 0, -1 / 0];
          KS = NS.length / 3, aS = 0;
          for (let gS = aS; gS < KS; ++gS) {
            const xS = tS.VK.FromArray(NS, 3 * gS);
            tS.VK.FromArray(XS, 3 * gS).subtractToRef(xS, kS), kS.x *= fS, HS[0] = Math.min(HS[0], kS.x), bS[0] = Math.max(bS[0], kS.x), HS[1] = Math.min(HS[1], kS.y), bS[1] = Math.max(bS[1], kS.y), HS[2] = Math.min(HS[2], kS.z), bS[2] = Math.max(bS[2], kS.z), SS[3 * gS] = kS.x, SS[3 * gS + 1] = kS.y, SS[3 * gS + 2] = kS.z
          }
          const uS = gS.createBufferView(SS, 12),
            IS = gS.createAccessor(uS, "VEC3", 5126, XS.length / 3, 0, {
              min: HS,
              max: bS
            });
          xS.push(IS), qS.attributes.POSITION = xS.length - 1
        } else bS.Tools.Warn(`Morph target positions for mesh ${HS.name} were not exported. Mesh does not have position vertex data`)
      }
      if (SS.hasNormals) {
        const XS = SS.getNormals(),
          NS = uS.getVerticesData(IS.f.NormalKind);
        if (NS) {
          const SS = new Float32Array(NS.length);
          KS = NS.length / 3, aS = 0;
          for (let gS = aS; gS < KS; ++gS) {
            const HS = tS.VK.FromArray(NS, 3 * gS).normalize();
            tS.VK.FromArray(XS, 3 * gS).normalize().subtractToRef(HS, kS), SS[3 * gS] = kS.x * fS, SS[3 * gS + 1] = kS.y, SS[3 * gS + 2] = kS.z
          }
          const HS = gS.createBufferView(SS, 12),
            bS = gS.createAccessor(HS, "VEC3", 5126, XS.length / 3, 0);
          xS.push(bS), qS.attributes.NORMAL = xS.length - 1
        } else bS.Tools.Warn(`Morph target normals for mesh ${HS.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (SS.hasTangents) {
        const XS = SS.getTangents(),
          NS = uS.getVerticesData(IS.f.TangentKind);
        if (NS) {
          KS = NS.length / 4;
          const SS = new Float32Array(3 * KS);
          aS = 0;
          for (let gS = aS; gS < KS; ++gS) {
            const HS = tS.VK.FromArray(NS, 4 * gS);
            Bg(HS);
            const bS = tS.VK.FromArray(XS, 3 * gS);
            Bg(bS), bS.subtractToRef(HS, kS), SS[3 * gS] = kS.x * fS, SS[3 * gS + 1] = kS.y, SS[3 * gS + 2] = kS.z
          }
          const HS = gS.createBufferView(SS, 12),
            bS = gS.createAccessor(HS, "VEC3", 5126, KS, 0);
          xS.push(bS), qS.attributes.TANGENT = xS.length - 1
        } else bS.Tools.Warn(`Morph target tangents for mesh ${HS.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (SS.hasColors) {
        const XS = SS.getColors(),
          NS = uS.getVerticesData(IS.f.ColorKind),
          fS = uS.getVertexBuffer(IS.f.ColorKind);
        if (NS && fS) {
          const SS = fS.getSize();
          KS = NS.length / SS;
          const HS = new Float32Array(KS * SS);
          aS = 0;
          for (let gS = aS; gS < KS; ++gS)
            if (3 === SS) {
              const bS = tS.VK.FromArray(NS, gS * SS);
              tS.VK.FromArray(XS, gS * SS).subtractToRef(bS, kS), HS[3 * gS] = kS.x, HS[3 * gS + 1] = kS.y, HS[3 * gS + 2] = kS.z
            } else if (4 === SS) {
            const bS = new tS.Vector4,
              xS = tS.Vector4.FromArray(NS, gS * SS);
            tS.Vector4.FromArray(XS, gS * SS).subtractToRef(xS, bS), HS[4 * gS] = bS.x, HS[4 * gS + 1] = bS.y, HS[4 * gS + 2] = bS.z, HS[4 * gS + 3] = bS.w
          } else bS.Tools.Warn(`Unsupported number of components for color attribute: ${SS}`);
          const uS = gS.createBufferView(HS, 4 * SS),
            IS = gS.createAccessor(uS, 3 === SS ? "VEC3" : "VEC4", 5126, KS, 0);
          xS.push(IS), qS.attributes.COLOR_0 = xS.length - 1
        } else bS.Tools.Warn(`Morph target colors for mesh ${HS.name} were not exported. Mesh does not have colors vertex data`)
      }
      return qS
    }
    var Kt = gS(41598);
    class jt {}
    jt.DEFAULT_COLOR = FS.b.White(), jt.DEFAULT_WIDTH_ATTENUATED = 1, jt.DEFAULT_WIDTH = .1;
    var Gt = gS(41102);
    class Ct {
      constructor(SS) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = SS
      }
      moveTo(SS, HS) {
        this._currentPath = new Gt.j(SS, HS), this._tempPaths.push(this._currentPath)
      }
      lineTo(SS, HS) {
        this._currentPath.addLineTo(SS, HS)
      }
      quadraticCurveTo(SS, HS, gS, tS) {
        this._currentPath.addQuadraticCurveTo(SS, HS, gS, tS, this._resolution)
      }
      bezierCurveTo(SS, HS, gS, tS, bS, XS) {
        this._currentPath.addBezierCurveTo(SS, HS, gS, tS, bS, XS, this._resolution)
      }
      extractHoles() {
        for (const SS of this._tempPaths) SS.area() > 0 ? this._holes.push(SS) : this._paths.push(SS);
        if (!this._paths.length && this._holes.length) {
          const SS = this._holes;
          this._holes = this._paths, this._paths = SS
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

    function nt(SS, HS, gS, tS, bS, XS) {
      const xS = XS.glyphs[SS] || XS.glyphs["?"];
      if (!xS) return null;
      const NS = new Ct(bS);
      if (xS.o) {
        const SS = xS.o.split(" ");
        for (let bS = 0, XS = SS.length; bS < XS;) {
          switch (SS[bS++]) {
            case "m": {
              const XS = parseInt(SS[bS++]) * HS + gS,
                xS = parseInt(SS[bS++]) * HS + tS;
              NS.moveTo(XS, xS);
              break
            }
            case "l": {
              const XS = parseInt(SS[bS++]) * HS + gS,
                xS = parseInt(SS[bS++]) * HS + tS;
              NS.lineTo(XS, xS);
              break
            }
            case "q": {
              const XS = parseInt(SS[bS++]) * HS + gS,
                xS = parseInt(SS[bS++]) * HS + tS,
                qS = parseInt(SS[bS++]) * HS + gS,
                uS = parseInt(SS[bS++]) * HS + tS;
              NS.quadraticCurveTo(qS, uS, XS, xS);
              break
            }
            case "b": {
              const XS = parseInt(SS[bS++]) * HS + gS,
                xS = parseInt(SS[bS++]) * HS + tS,
                qS = parseInt(SS[bS++]) * HS + gS,
                uS = parseInt(SS[bS++]) * HS + tS,
                IS = parseInt(SS[bS++]) * HS + gS,
                fS = parseInt(SS[bS++]) * HS + tS;
              NS.bezierCurveTo(qS, uS, IS, fS, XS, xS);
              break
            }
          }
        }
      }
      return NS.extractHoles(), {
        offsetX: xS.ha * HS,
        shapePath: NS
      }
    }

    function Pt(SS, HS, gS, tS) {
      const bS = Array.from(SS),
        XS = HS / tS.resolution,
        xS = (tS.boundingBox.yMax - tS.boundingBox.yMin + tS.underlineThickness) * XS,
        NS = [];
      let qS = 0,
        uS = 0;
      for (let IS = 0; IS < bS.length; IS++) {
        const SS = bS[IS];
        if ("\n" === SS) qS = 0, uS -= xS;
        else {
          const HS = nt(SS, XS, qS, uS, gS, tS);
          HS && (qS += HS.offsetX, NS.push(HS.shapePath))
        }
      }
      return NS
    }
    class Qt {
      static ConvertPoints(SS, HS) {
        if (SS.length && Array.isArray(SS) && "number" === typeof SS[0]) return [SS];
        if (SS.length && Array.isArray(SS[0]) && "number" === typeof SS[0][0]) return SS;
        if (SS.length && !Array.isArray(SS[0]) && SS[0] instanceof WS.n) {
          const HS = [];
          for (let gS = 0; gS < SS.length; gS++) {
            const tS = SS[gS];
            HS.push(tS.x, tS.y, tS.z)
          }
          return [HS]
        }
        if (SS.length > 0 && Array.isArray(SS[0]) && SS[0].length > 0 && SS[0][0] instanceof WS.n) {
          const HS = [],
            gS = SS;
          for (const SS of gS) HS.push(SS.flatMap((SS => [SS.x, SS.y, SS.z])));
          return HS
        }
        if (SS instanceof Float32Array) {
          if (HS?.floatArrayStride) {
            const gS = [],
              tS = 3 * HS.floatArrayStride;
            for (let HS = 0; HS < SS.length; HS += tS) {
              const bS = new Array(tS);
              for (let gS = 0; gS < tS; gS++) bS[gS] = SS[HS + gS];
              gS.push(bS)
            }
            return gS
          }
          return [Array.from(SS)]
        }
        if (SS.length && SS[0] instanceof Float32Array) {
          const HS = [];
          for (const gS of SS) HS.push(Array.from(gS));
          return HS
        }
        return []
      }
      static OmitZeroLengthPredicate(SS, HS, gS) {
        const tS = [];
        return HS.subtract(SS).lengthSquared() > 0 && tS.push([SS, HS]), gS.subtract(HS).lengthSquared() > 0 && tS.push([HS, gS]), SS.subtract(gS).lengthSquared() > 0 && tS.push([gS, SS]), 0 === tS.length ? null : tS
      }
      static OmitDuplicatesPredicate(SS, HS, gS, tS) {
        const bS = [];
        return Qt._SearchInPoints(SS, HS, tS) || bS.push([SS, HS]), Qt._SearchInPoints(HS, gS, tS) || bS.push([HS, gS]), Qt._SearchInPoints(gS, SS, tS) || bS.push([gS, SS]), 0 === bS.length ? null : bS
      }
      static _SearchInPoints(SS, HS, gS) {
        for (const tS of gS)
          for (let gS = 0; gS < tS.length; gS++)
            if (tS[gS]?.equals(SS) && (tS[gS + 1]?.equals(HS) || tS[gS - 1]?.equals(HS))) return !0;
        return !1
      }
      static MeshesToLines(SS, HS) {
        const gS = [];
        for (let tS = 0; tS < SS.length; tS++) {
          const bS = SS[tS],
            XS = bS.getVerticesData(zS.h.PositionKind),
            xS = bS.mgS();
          if (XS && xS)
            for (let SS = 0, NS = 0; SS < xS.length; SS++) {
              const qS = 3 * xS[NS++],
                uS = 3 * xS[NS++],
                IS = 3 * xS[NS++],
                fS = new WS.n(XS[qS], XS[qS + 1], XS[qS + 2]),
                kS = new WS.n(XS[uS], XS[uS + 1], XS[uS + 2]),
                aS = new WS.n(XS[IS], XS[IS + 1], XS[IS + 2]);
              if (HS) {
                const NS = HS(fS, kS, aS, gS, SS, qS, bS, tS, XS, xS);
                if (NS)
                  for (const SS of NS) gS.push(SS)
              } else gS.push([fS, kS], [kS, aS], [aS, fS])
            }
        }
        return gS
      }
      static ToVector3Array(SS) {
        if (Array.isArray(SS[0])) {
          const HS = [],
            gS = SS;
          for (const SS of gS) {
            const gS = [];
            for (let HS = 0; HS < SS.length; HS += 3) gS.push(new WS.n(SS[HS], SS[HS + 1], SS[HS + 2]));
            HS.push(gS)
          }
          return HS
        }
        const HS = SS,
          gS = [];
        for (let tS = 0; tS < HS.length; tS += 3) gS.push(new WS.n(HS[tS], HS[tS + 1], HS[tS + 2]));
        return gS
      }
      static ToNumberArray(SS) {
        return SS.flatMap((SS => [SS.x, SS.y, SS.z]))
      }
      static GetPointsCountInfo(SS) {
        const HS = new Array(SS.length);
        let gS = 0;
        for (let tS = SS.length; tS--;) HS[tS] = SS[tS].length / 3, gS += HS[tS];
        return {
          total: gS,
          counts: HS
        }
      }
      static GetLineLength(SS) {
        if (0 === SS.length) return 0;
        let HS;
        HS = "number" === typeof SS[0] ? Qt.ToVector3Array(SS) : SS;
        const gS = WS.l.VK[0];
        let tS = 0;
        for (let bS = 0; bS < HS.length - 1; bS++) {
          const SS = HS[bS];
          tS += HS[bS + 1].subtractToRef(SS, gS).length()
        }
        return tS
      }
      static GetLineLengthArray(SS, HS) {
        const gS = HS ? new Float32Array(HS, 0, SS.length / 3) : new Float32Array(SS.length / 3);
        let tS = 0;
        for (let bS = 0, XS = SS.length / 3 - 1; bS < XS; bS++) {
          let HS = SS[3 * bS + 0],
            XS = SS[3 * bS + 1],
            xS = SS[3 * bS + 2];
          HS -= SS[3 * bS + 3], XS -= SS[3 * bS + 4], xS -= SS[3 * bS + 5];
          tS += Math.sqrt(HS * HS + XS * XS + xS * xS), gS[bS + 1] = tS
        }
        return gS
      }
      static SegmentizeSegmentByCount(SS, HS, gS) {
        const tS = [],
          bS = HS.subtract(SS),
          XS = WS.l.VK[0];
        XS.o_(gS);
        const xS = WS.l.VK[1];
        bS.divideToRef(XS, xS);
        let NS = SS.clone();
        tS.push(NS);
        for (let qS = 0; qS < gS; qS++) NS = NS.clone(), tS.push(NS.addInPlace(xS));
        return tS
      }
      static SegmentizeLineBySegmentLength(SS, HS) {
        const gS = SS[0] instanceof WS.n ? Qt.GetLineSegments(SS) : "number" === typeof SS[0] ? Qt.GetLineSegments(Qt.ToVector3Array(SS)) : SS,
          tS = [];
        for (const bS of gS)
          if (bS.length > HS) {
            const SS = Qt.SegmentizeSegmentByCount(bS.point1, bS.point2, Math.ceil(bS.length / HS));
            for (const HS of SS) tS.push(HS)
          } else tS.push(bS.point1), tS.push(bS.point2);
        return tS
      }
      static SegmentizeLineBySegmentCount(SS, HS) {
        const gS = "number" === typeof SS[0] ? Qt.ToVector3Array(SS) : SS,
          tS = Qt.GetLineLength(gS) / HS;
        return Qt.SegmentizeLineBySegmentLength(gS, tS)
      }
      static GetLineSegments(SS) {
        const HS = [];
        for (let gS = 0; gS < SS.length - 1; gS++) {
          const tS = SS[gS],
            bS = SS[gS + 1],
            XS = bS.subtract(tS).length();
          HS.push({
            point1: tS,
            point2: bS,
            length: XS
          })
        }
        return HS
      }
      static GetMinMaxSegmentLength(SS) {
        const HS = Qt.GetLineSegments(SS).sort((SS => SS.length));
        return {
          min: HS[0].length,
          max: HS[HS.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const bS = HS * gS;
        let XS = 0,
          xS = 0;
        const NS = SS.length;
        for (let uS = 0; uS < NS; uS++) {
          if (bS <= XS + SS[uS].length) {
            xS = uS;
            break
          }
          XS += SS[uS].length
        }
        const qS = (bS - XS) / SS[xS].length;
        return SS[xS].point2.subtractToRef(SS[xS].point1, WS.l.VK[0]), WS.l.VK[0].scaleToRef(qS, WS.l.VK[1]), tS || WS.l.VK[1].addInPlace(SS[xS].point1), WS.l.VK[1].clone()
      }
      static GetCircleLinePoints(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SS,
          bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / HS;
        const XS = [];
        for (let xS = 0; xS <= HS; xS++) XS.push(new WS.n(Math.cos(xS * bS) * SS, Math.sin(xS * bS) * tS, gS));
        return XS
      }
      static GetBezierLinePoints(SS, HS, gS, tS) {
        return Gt.f.CreateQuadraticBezier(SS, HS, gS, tS).getPoints().flatMap((SS => [SS.x, SS.y, SS.z]))
      }
      static GetArrowCap(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          xS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [SS.clone(), SS.add(HS.multiplyByFloats(gS, gS, gS))],
          widths: [tS, bS, XS, xS]
        }
      }
      static GetPointsFromText(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          XS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const xS = [],
          NS = Pt(SS, HS, gS, tS);
        for (const qS of NS) {
          for (const SS of qS.paths) {
            const HS = [],
              gS = SS.getPoints();
            for (const SS of gS) HS.push(SS.x, SS.y, bS);
            xS.push(HS)
          }
          if (XS)
            for (const SS of qS.holes) {
              const HS = [],
                gS = SS.getPoints();
              for (const SS of gS) HS.push(SS.x, SS.y, bS);
              xS.push(HS)
            }
        }
        return xS
      }
      static Color3toRGBAUint8(SS) {
        const HS = new Uint8Array(4 * SS.length);
        for (let gS = 0, tS = 0; gS < SS.length; gS++) HS[tS++] = 255 * SS[gS].r, HS[tS++] = 255 * SS[gS].g, HS[tS++] = 255 * SS[gS].b, HS[tS++] = 255;
        return HS
      }
      static CreateColorsTexture(SS, HS, gS, tS) {
        const bS = tS.AK().getCaps().maxTextureSize ?? 1,
          XS = HS.length > bS ? bS : HS.length,
          xS = Math.ceil(HS.length / bS);
        xS > 1 && (HS = [...HS, ...Array(XS * xS - HS.length).fill(HS[0])]);
        const NS = Qt.Color3toRGBAUint8(HS),
          qS = new wS.d(NS, XS, xS, Ig.c.TEXTUREFORMAT_RGBA, tS, !1, !0, gS);
        return qS.name = SS, qS
      }
      static PrepareEmptyColorsTexture(SS) {
        if (!jt.EmptyColorsTexture) {
          const HS = new Uint8Array(4);
          jt.EmptyColorsTexture = new wS.d(HS, 1, 1, Ig.c.TEXTUREFORMAT_RGBA, SS, !1, !1, wS.d.NEAREST_NEAREST), jt.EmptyColorsTexture.name = "grlEmptyColorsTexture", jt.EmptyColorsTexture.bY.addOnce((() => {
            jt.EmptyColorsTexture = null
          }))
        }
        return jt.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        jt.EmptyColorsTexture?.dispose(), jt.EmptyColorsTexture = null
      }
      static BooleanToNumber(SS) {
        return SS ? 1 : 0
      }
    }
    class Dt extends US.c {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class wt extends pS.e {
      isCompatible(SS) {
        return !0
      }
      constructor(SS, HS, gS) {
        gS = gS || {
          color: jt.DEFAULT_COLOR
        };
        const tS = new Dt;
        tS.GREASED_LINE_HAS_COLOR = !!gS.color && !gS.useColors, tS.GREASED_LINE_SIZE_ATTENUATION = gS.sizeAttenuation ?? !1, tS.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === gS.colorDistributionType, tS.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (HS ?? SS.lL()).useRightHandedSystem, tS.GREASED_LINE_CAMERA_FACING = gS.cameraFacing ?? !0, super(SS, wt.GREASED_LINE_MATERIAL_NAME, 200, tS, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = gS?.forceGLSL || wt.ForceGLSL, this._scene = HS ?? SS.lL(), this._engine = this._scene.AK(), this._cameraFacing = gS.cameraFacing ?? !0, this.visibility = gS.visibility ?? 1, this.useDash = gS.useDash ?? !1, this.dashRatio = gS.dashRatio ?? .5, this.dashOffset = gS.dashOffset ?? 0, this.width = gS.width ? gS.width : gS.sizeAttenuation ? jt.DEFAULT_WIDTH_ATTENUATED : jt.DEFAULT_WIDTH, this._sizeAttenuation = gS.sizeAttenuation ?? !1, this.colorMode = gS.colorMode ?? 0, this._color = gS.color ?? null, this.useColors = gS.useColors ?? !1, this._colorsDistributionType = gS.colorDistributionType ?? 0, this.colorsSampling = gS.colorsSampling ?? wS.d.NEAREST_NEAREST, this._colors = gS.colors ?? null, this.dashCount = gS.dashCount ?? 1, this.resolution = gS.resolution ?? new WS.m(this._engine.getRenderWidth(), this._engine.getRenderHeight()), gS.colorsTexture ? this.colorsTexture = gS.colorsTexture : this._colors ? this.colorsTexture = Qt.CreateColorsTexture(`${SS.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? jt.DEFAULT_COLOR, Qt.PrepareEmptyColorsTexture(this._scene)), this._engine.bY.add((() => {
          Qt.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(SS) {
        SS.push("grl_offsets"), SS.push("grl_widths"), SS.push("grl_colorPointers"), SS.push("grl_counters"), this._cameraFacing ? (SS.push("grl_previousAndSide"), SS.push("grl_nextAndCounters")) : SS.push("grl_slopes")
      }
      getSamplers(SS) {
        SS.push("grl_colors")
      }
      getActiveTextures(SS) {
        this.colorsTexture && SS.push(this.colorsTexture)
      }
      getUniforms() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const HS = [{
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
        return this._cameraFacing && HS.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === SS && HS.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: HS,
          vertex: this._cameraFacing && this._isGLSL(SS) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(SS) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(SS) {
        if (this._cameraFacing) {
          SS.J7("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || SS.J7("viewProjection", this._scene.getTransformMatrix());
          const HS = WS.l.Vector4[0];
          HS.x = this._aspect, HS.y = this._resolution.x, HS.z = this._resolution.y, HS.w = this.width, SS.updateVector4("grl_aspect_resolution_lineWidth", HS)
        }
        const HS = WS.l.Vector4[0];
        HS.x = Qt.BooleanToNumber(this.useDash), HS.y = this._dashArray, HS.z = this.dashOffset, HS.w = this.dashRatio, SS.updateVector4("grl_dashOptions", HS);
        const gS = WS.l.Vector4[1];
        gS.x = this.colorMode, gS.y = this.visibility, gS.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, gS.w = Qt.BooleanToNumber(this.useColors), SS.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", gS), this._color && SS.updateColor3("grl_singleColor", this._color);
        const tS = this.colorsTexture ?? jt.EmptyColorsTexture;
        SS.setTexture("grl_colors", tS), SS.updateFloat2("grl_textureSize", tS?.getSize().width ?? 1, tS?.getSize().height ?? 1)
      }
      prepareDefines(SS, HS, gS) {
        SS.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, SS.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, SS.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, SS.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = HS.useRightHandedSystem, SS.GREASED_LINE_CAMERA_FACING = this._cameraFacing, SS.GREASED_LINE_USE_OFFSETS = !!gS.offsets
      }
      getClassName() {
        return wt.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(HS) ? function(SS, HS) {
          if ("vertex" === SS) {
            const SS = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return HS && (SS["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), SS
          }
          return "fragment" === SS ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(SS, this._cameraFacing) : function(SS, HS) {
          if ("vertex" === SS) {
            const SS = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return HS && (SS["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), SS
          }
          return "fragment" === SS ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(SS, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(SS) {
        this.setColors(SS)
      }
      setColors(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tS = this._colors?.length ?? 0;
        if (this._colors = SS, null !== SS && 0 !== SS.length) {
          if (!HS || gS)
            if (this.colorsTexture && tS === SS.length && !gS) {
              const HS = Qt.Color3toRGBAUint8(SS);
              this.colorsTexture.update(HS)
            } else this.colorsTexture?.dispose(), this.colorsTexture = Qt.CreateColorsTexture(`${this._material.name}-colors-texture`, SS, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(SS) {
        this._dashCount = SS, this._dashArray = 1 / SS
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(SS) {
        this._sizeAttenuation = SS, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(SS) {
        this.setColor(SS)
      }
      setColor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== SS || null !== this._color && null === SS ? (this._color = SS, HS || this.markAllDefinesAsDirty()) : this._color = SS
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(SS) {
        this._colorsDistributionType = SS, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(SS) {
        this._aspect = SS.x / SS.y, this._resolution = SS
      }
      serialize() {
        const SS = super.serialize(),
          HS = {
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
        return this._colors && (HS.colors = this._colors), this._color && (HS.color = this._color), SS.greasedLineMaterialOptions = HS, SS
      }
      parse(SS, HS, gS) {
        super.parse(SS, HS, gS);
        const tS = SS.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), tS.color && this.setColor(tS.color, !0), tS.colorDistributionType && (this.colorsDistributionType = tS.colorDistributionType), tS.colors && (this.colors = tS.colors), tS.colorsSampling && (this.colorsSampling = tS.colorsSampling), tS.colorMode && (this.colorMode = tS.colorMode), tS.useColors && (this.useColors = tS.useColors), tS.visibility && (this.visibility = tS.visibility), tS.useDash && (this.useDash = tS.useDash), tS.dashCount && (this.dashCount = tS.dashCount), tS.dashRatio && (this.dashRatio = tS.dashRatio), tS.dashOffset && (this.dashOffset = tS.dashOffset), tS.width && (this.width = tS.width), tS.sizeAttenuation && (this.sizeAttenuation = tS.sizeAttenuation), tS.resolution && (this.resolution = tS.resolution), this.colors ? this.colorsTexture = Qt.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, HS) : Qt.PrepareEmptyColorsTexture(HS), this.markAllDefinesAsDirty()
      }
      copyTo(SS) {
        const HS = SS;
        HS.colorsTexture?.dispose(), this._colors && (HS.colorsTexture = Qt.CreateColorsTexture(`${HS._material.name}-colors-texture`, this._colors, HS.colorsSampling, this._scene)), HS.setColor(this.color, !0), HS.colorsDistributionType = this.colorsDistributionType, HS.colorsSampling = this.colorsSampling, HS.colorMode = this.colorMode, HS.useColors = this.useColors, HS.visibility = this.visibility, HS.useDash = this.useDash, HS.dashCount = this.dashCount, HS.dashRatio = this.dashRatio, HS.dashOffset = this.dashOffset, HS.width = this.width, HS.sizeAttenuation = this.sizeAttenuation, HS.resolution = this.resolution, HS.markAllDefinesAsDirty()
      }
      _isGLSL(SS) {
        return 0 === SS || this._forceGLSL
      }
    }
    wt.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", wt.ForceGLSL = !1;
    var ht = gS(40439),
      Zt = gS(40449),
      Jt = gS(38683),
      Ot = gS(40504),
      dt = gS(39881);
    class ct extends Ot.o {
      constructor(SS, HS, tS) {
        const bS = HS.AK(),
          XS = bS.isWebGPU && !(tS.forceGLSL || ct.ForceGLSL),
          xS = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        HS.useRightHandedSystem && xS.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const NS = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        tS.cameraFacing ? (xS.push("GREASED_LINE_CAMERA_FACING"), NS.push("grl_previousAndSide", "grl_nextAndCounters")) : (NS.push("grl_slopes"), NS.push("grl_counters"));
        const qS = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (XS || qS.push("world", "viewProjection", "view", "projection"), super(SS, HS, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: XS ? ["Scene", "Mesh"] : void 0,
            attributes: NS,
            uniforms: qS,
            samplers: XS ? [] : ["grlColors"],
            defines: xS,
            extraInitializationsAsync: async () => {
              XS ? await Promise.all([gS.e(334).then((() => gS(61959))), gS.e(391).then((() => gS(61963)))]) : await Promise.all([gS.e(327).then((() => gS(61967))), gS.e(392).then((() => gS(61975)))])
            },
            shaderLanguage: XS ? 1 : 0
          }), this._color = FS.b.White(), this._colorsDistributionType = 0, this._colorsTexture = null, tS = tS || {
            color: jt.DEFAULT_COLOR
          }, this.visibility = tS.visibility ?? 1, this.useDash = tS.useDash ?? !1, this.dashRatio = tS.dashRatio ?? .5, this.dashOffset = tS.dashOffset ?? 0, this.dashCount = tS.dashCount ?? 1, this.width = tS.width ? tS.width : tS.sizeAttenuation && tS.cameraFacing ? jt.DEFAULT_WIDTH_ATTENUATED : jt.DEFAULT_WIDTH, this.sizeAttenuation = tS.sizeAttenuation ?? !1, this.color = tS.color ?? FS.b.White(), this.useColors = tS.useColors ?? !1, this.colorsDistributionType = tS.colorDistributionType ?? 0, this.colorsSampling = tS.colorsSampling ?? wS.d.NEAREST_NEAREST, this.colorMode = tS.colorMode ?? 0, this._colors = tS.colors ?? null, this._cameraFacing = tS.cameraFacing ?? !0, this.resolution = tS.resolution ?? new WS.m(bS.getRenderWidth(), bS.getRenderHeight()), tS.colorsTexture ? this.colorsTexture = tS.colorsTexture : this._colors ? this.colorsTexture = Qt.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, HS) : (this._color = this._color ?? jt.DEFAULT_COLOR, this.colorsTexture = Qt.PrepareEmptyColorsTexture(HS)), XS) {
          const SS = new dt.d;
          SS.setParameters(), SS.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", SS)
        }
        bS.bY.add((() => {
          Qt.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== jt.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new WS.m(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(SS) {
        this.setColors(SS)
      }
      setColors(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tS = this._colors?.length ?? 0;
        if (this._colors = SS, null !== SS && 0 !== SS.length) {
          if (!HS || gS)
            if (this._colorsTexture && tS === SS.length && !gS) {
              const HS = Qt.Color3toRGBAUint8(SS);
              this._colorsTexture.update(HS)
            } else this._colorsTexture && this._colorsTexture !== jt.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = Qt.CreateColorsTexture(`${this.name}-colors-texture`, SS, this.colorsSampling, this.lL())
        } else {
          this._colorsTexture && this._colorsTexture !== jt.EmptyColorsTexture && this._colorsTexture.dispose();
          const SS = this.lL();
          SS && (this.colorsTexture = Qt.PrepareEmptyColorsTexture(SS))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(SS) {
        this._colorsTexture = SS, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(SS) {
        this._width = SS, this.setFloat("grlWidth", SS)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(SS) {
        this._useColors = SS, this.setFloat("grlUseColors", Qt.BooleanToNumber(SS))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(SS) {
        this._colorsSampling = SS
      }
      get visibility() {
        return this._visibility
      }
      set visibility(SS) {
        this._visibility = SS, this.setFloat("grlVisibility", SS)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(SS) {
        this._useDash = SS, this.setFloat("grlUseDash", Qt.BooleanToNumber(SS))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(SS) {
        this._dashOffset = SS, this.setFloat("grlDashOffset", SS)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(SS) {
        this._dashRatio = SS, this.setFloat("grlDashRatio", SS)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(SS) {
        this._dashCount = SS, this._dashArray = 1 / SS, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(SS) {
        this._sizeAttenuation = SS, this.setFloat("grlSizeAttenuation", Qt.BooleanToNumber(SS))
      }
      get color() {
        return this._color
      }
      set color(SS) {
        this.setColor(SS)
      }
      setColor(SS) {
        SS = SS ?? jt.DEFAULT_COLOR, this._color = SS, this.setColor3("grlColor", SS)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(SS) {
        this._colorsDistributionType = SS, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(SS) {
        this._colorMode = SS, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(SS) {
        this._resolution = SS, this.setVector2("grlResolution", SS), this.setFloat("grlAspect", SS.x / SS.y)
      }
      serialize() {
        const SS = super.serialize(),
          HS = {
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
        return this._colors && (HS.colors = this._colors), SS.greasedLineMaterialOptions = HS, SS
      }
      parse(SS, HS, gS) {
        const tS = SS.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), tS.color && (this.color = tS.color), tS.colorDistributionType && (this.colorsDistributionType = tS.colorDistributionType), tS.colorsSampling && (this.colorsSampling = tS.colorsSampling), tS.colorMode && (this.colorMode = tS.colorMode), tS.useColors && (this.useColors = tS.useColors), tS.visibility && (this.visibility = tS.visibility), tS.useDash && (this.useDash = tS.useDash), tS.dashCount && (this.dashCount = tS.dashCount), tS.dashRatio && (this.dashRatio = tS.dashRatio), tS.dashOffset && (this.dashOffset = tS.dashOffset), tS.width && (this.width = tS.width), tS.sizeAttenuation && (this.sizeAttenuation = tS.sizeAttenuation), tS.resolution && (this.resolution = tS.resolution), tS.colors ? this.colorsTexture = Qt.CreateColorsTexture(`${this.name}-colors-texture`, tS.colors, this.colorsSampling, this.lL()) : this.colorsTexture = Qt.PrepareEmptyColorsTexture(HS), this._cameraFacing = tS.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var vt, Et, Lt;
    ct.ForceGLSL = !1,
      function(SS) {
        SS[SS.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", SS[SS.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(vt || (vt = {})),
      function(SS) {
        SS[SS.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", SS[SS.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", SS[SS.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(Et || (Et = {})),
      function(SS) {
        SS[SS.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", SS[SS.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", SS[SS.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", SS[SS.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", SS[SS.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(Lt || (Lt = {}));
    class Yt extends ht.e {
      constructor(SS, HS, gS) {
        super(SS, HS, null, null, !1, !1), this.name = SS, this._options = gS, this._lazy = !1, this._updatable = !1, this._engine = HS.AK(), this._lazy = gS.lazy ?? !1, this._updatable = gS.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = gS.colorPointers ?? [], this._widths = gS.widths ?? new Array(gS.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(SS) {
        let HS = 0;
        for (const tS of this._points) HS += tS.length;
        const gS = HS / 3 * 2 - this._widths.length;
        for (let tS = 0; tS < gS; tS++) this._widths.push(SS)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.WK && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(SS, HS) {
        for (const gS of SS) this._points.push(gS);
        this._lazy || this.setPoints(this._points, HS)
      }
      dispose(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(SS, HS)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(SS) {
        this._uvs = SS instanceof Float32Array ? SS : new Float32Array(SS), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(SS) {
        this.material instanceof ct && this.material.setDefine("GREASED_LINE_USE_OFFSETS", SS?.length > 0), this._offsets = SS, this._offsetsBuffer ? this._offsetsBuffer.update(SS) : this._createOffsetsBuffer(SS)
      }
      get widths() {
        return this._widths
      }
      set widths(SS) {
        this._widths = SS, this._lazy || this._widthsBuffer && this._widthsBuffer.update(SS)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(SS) {
        this._colorPointers = SS, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(SS)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof ct) return this.material;
        const SS = this.material?.pluginManager?.getPlugin(wt.GREASED_LINE_MATERIAL_NAME);
        return SS || void 0
      }
      get points() {
        const SS = [];
        return Jt.d.DeepCopy(this._points, SS), SS
      }
      setPoints(SS, HS) {
        this._points = Qt.ConvertPoints(SS, HS?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), HS?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, HS)
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
      serialize(SS) {
        super.serialize(SS), SS.type = this.getClassName(), SS.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const HS = new Zt.e;
        return HS.positions = this._vertexPositions, HS.indices = this._indices, HS.uvs = this._uvs, SS && (HS.normals = [], Zt.e.ComputeNormals(this._vertexPositions, this._indices, HS.normals)), HS.applyToMesh(this, this._options.updatable), HS
      }
      _createOffsetsBuffer(SS) {
        const HS = this._scene.AK(),
          gS = new zS.b(HS, SS, this._updatable, 3);
        this.setVerticesBuffer(gS.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = gS
      }
    }
    class At {
      constructor(SS, HS) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = SS, this.wasAddedByNoopNode = HS
      }
      getIndicesAccessor(SS, HS, gS, tS, bS) {
        return this._indicesAccessorMap.get(SS)?.get(HS)?.get(gS)?.get(tS)?.get(bS)
      }
      setIndicesAccessor(SS, HS, gS, tS, bS, XS) {
        let xS = this._indicesAccessorMap.get(SS);
        xS || (xS = new Map, this._indicesAccessorMap.set(SS, xS));
        let NS = xS.get(HS);
        NS || (NS = new Map, xS.set(HS, NS));
        let qS = NS.get(gS);
        qS || (qS = new Map, NS.set(gS, qS));
        let uS = qS.get(tS);
        uS || (uS = new Map, qS.set(tS, uS)), uS.set(bS, XS)
      }
      pushExportedNode(SS) {
        this._exportedNodes.has(SS) || this._exportedNodes.add(SS)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(SS) {
        return this._vertexBufferViewMap.get(SS)
      }
      setVertexBufferView(SS, HS) {
        this._vertexBufferViewMap.set(SS, HS)
      }
      setRemappedBufferView(SS, HS, gS) {
        this._remappedBufferView.set(SS, new Map), this._remappedBufferView.get(SS).set(HS, gS)
      }
      getRemappedBufferView(SS, HS) {
        return this._remappedBufferView.get(SS)?.get(HS)
      }
      getVertexAccessor(SS, HS, gS) {
        return this._vertexAccessorMap.get(SS)?.get(HS)?.get(gS)
      }
      setVertexAccessor(SS, HS, gS, tS) {
        let bS = this._vertexAccessorMap.get(SS);
        bS || (bS = new Map, this._vertexAccessorMap.set(SS, bS));
        let XS = bS.get(HS);
        XS || (XS = new Map, bS.set(HS, XS)), XS.set(gS, tS)
      }
      hasVertexColorAlpha(SS) {
        return this._vertexMapColorAlpha.get(SS) || !1
      }
      setHasVertexColorAlpha(SS, HS) {
        return this._vertexMapColorAlpha.set(SS, HS)
      }
      getMesh(SS) {
        return this._meshMap.get(SS)
      }
      setMesh(SS, HS) {
        this._meshMap.set(SS, HS)
      }
      bindMorphDataToMesh(SS, HS) {
        const gS = this._meshMorphTargetMap.get(SS) || [];
        this._meshMorphTargetMap.set(SS, gS), -1 === gS.indexOf(HS) && gS.push(HS)
      }
      getMorphTargetsFromMesh(SS) {
        return this._meshMorphTargetMap.get(SS)
      }
    }
    class yt {
      _ApplyExtension(SS, HS, gS, tS) {
        if (gS >= HS.length) return Promise.resolve(SS);
        const bS = tS(HS[gS], SS);
        return bS ? bS.then((async SS => SS ? await this._ApplyExtension(SS, HS, gS + 1, tS) : null)) : this._ApplyExtension(SS, HS, gS + 1, tS)
      }
      _ApplyExtensions(SS, HS) {
        const gS = [];
        for (const tS of yt._ExtensionNames) gS.push(this._extensions[tS]);
        return this._ApplyExtension(SS, gS, 0, HS)
      }
      _extensionsPostExportNodeAsync(SS, HS, gS, tS, bS) {
        return this._ApplyExtensions(HS, ((HS, XS) => HS.postExportNodeAsync && HS.postExportNodeAsync(SS, XS, gS, tS, bS, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(SS, HS, gS) {
        return this._ApplyExtensions(HS, ((HS, tS) => HS.postExportMaterialAsync && HS.postExportMaterialAsync(SS, tS, gS)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(SS, HS, gS) {
        const tS = [];
        return await Promise.all(yt._ExtensionNames.map((async bS => {
          const XS = this._extensions[bS];
          if (XS.postExportMaterialAdditionalTexturesAsync) {
            const bS = await XS.postExportMaterialAdditionalTexturesAsync(SS, HS, gS);
            tS.push(...bS)
          }
        }))), tS
      }
      _extensionsPostExportTextures(SS, HS, gS) {
        for (const tS of yt._ExtensionNames) {
          const bS = this._extensions[tS];
          bS.postExportTexture && bS.postExportTexture(SS, HS, gS)
        }
      }
      _extensionsPostExportMeshPrimitive(SS) {
        for (const HS of yt._ExtensionNames) {
          const gS = this._extensions[HS];
          gS.postExportMeshPrimitive && gS.postExportMeshPrimitive(SS, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const SS of yt._ExtensionNames) {
          const HS = this._extensions[SS];
          HS.preGenerateBinaryAsync && await HS.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(SS) {
        for (const HS of yt._ExtensionNames) {
          const gS = this._extensions[HS];
          gS.enabled && SS(gS)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((SS => {
          var HS, gS, tS;
          SS.wasUsed && ((HS = this._glTF).extensionsUsed || (HS.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(SS.name) && this._glTF.extensionsUsed.push(SS.name), SS.required && ((gS = this._glTF).extensionsRequired || (gS.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(SS.name) && this._glTF.extensionsRequired.push(SS.name)), (tS = this._glTF).extensions || (tS.extensions = {}), SS.onExporting && SS.onExporting())
        }))
      }
      _loadExtensions() {
        for (const SS of yt._ExtensionNames) {
          const HS = yt._ExtensionFactories[SS](this);
          this._extensions[SS] = HS
        }
      }
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jS.d.LastCreatedScene,
          HS = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${KS.b.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new vg(this), this._extensions = {}, this._bufferManager = new gt, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !SS) throw new Error("No scene available to export");
        this._babylonScene = SS, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: SS => SS?.wL?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...HS
        }, this._loadExtensions()
      }
      dispose() {
        for (const SS in this._extensions) {
          this._extensions[SS].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        yt.UnregisterExtension(SS) && bS.Tools.Warn(`Extension with the name ${SS} already exists`), yt._ExtensionFactories[SS] = HS;
        const tS = gS ?? 0;
        yt._ExtensionOrders[SS] = tS;
        let XS = yt._ExtensionNames.length;
        for (let bS = 0; bS < yt._ExtensionNames.length; bS++) {
          const SS = yt._ExtensionNames[bS];
          if (tS < yt._ExtensionOrders[SS]) {
            XS = bS;
            break
          }
        }
        yt._ExtensionNames.splice(XS, 0, SS)
      }
      static UnregisterExtension(SS) {
        if (!yt._ExtensionFactories[SS]) return !1;
        delete yt._ExtensionFactories[SS], delete yt._ExtensionOrders[SS];
        const HS = yt._ExtensionNames.indexOf(SS);
        return -1 !== HS && yt._ExtensionNames.splice(HS, 1), !0
      }
      _generateJSON(SS, HS, gS) {
        const tS = {
          byteLength: SS
        };
        return tS.byteLength && (this._glTF.buffers = [tS]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.Bj = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (tS.uri = HS + ".bin"), gS ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(SS) {
        const HS = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const gS = this._generateJSON(HS.byteLength, SS, !0),
          tS = new Blob([HS], {
            type: "application/octet-stream"
          }),
          bS = SS + ".gltf",
          XS = SS + ".bin",
          xS = new uS;
        if (xS.files[bS] = gS, xS.files[XS] = tS, this._imageData)
          for (const NS in this._imageData) xS.files[NS] = this._imageData[NS];
        return xS
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(SS) {
        const HS = SS % 4;
        return 0 === HS ? HS : 4 - HS
      }
      async generateGLBAsync(SS) {
        this._shouldUseGlb = !0;
        const HS = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const gS = this._generateJSON(HS.byteLength),
          tS = SS + ".glb";
        let bS, XS = gS.length;
        if ("undefined" !== typeof TextEncoder) {
          bS = (new TextEncoder).encode(gS), XS = bS.length
        }
        const xS = this._getPadding(XS),
          NS = this._getPadding(HS.byteLength),
          qS = 28 + XS + xS + HS.byteLength + NS,
          IS = new St(qS);
        if (IS.writeUInt32(1179937895), IS.writeUInt32(2), IS.writeUInt32(qS), IS.writeUInt32(XS + xS), IS.writeUInt32(1313821514), bS) IS.writeTypedArray(bS);
        else {
          const SS = "_".charCodeAt(0);
          for (let HS = 0; HS < XS; ++HS) {
            const tS = gS.charCodeAt(HS);
            tS != gS.codePointAt(HS) ? IS.writeUInt8(SS) : IS.writeUInt8(tS)
          }
        }
        for (let uS = 0; uS < xS; ++uS) IS.writeUInt8(32);
        IS.writeUInt32(HS.byteLength + NS), IS.writeUInt32(5130562), IS.writeTypedArray(HS);
        for (let uS = 0; uS < NS; ++uS) IS.writeUInt8(0);
        const fS = new uS;
        return fS.files[tS] = new Blob([IS.getOutputData()], {
          type: "application/octet-stream"
        }), fS
      }
      _setNodeTransformation(SS, HS, gS) {
        if (HS.getPivotPoint().equalsWithEpsilon(Vg, Yg.d) || bS.Tools.Warn("Pivot points are not supported in the glTF serializer"), !HS.position.equalsWithEpsilon(Vg, Yg.d)) {
          const bS = tS.TmpVectors.VK[0].dJ(HS.position);
          gS && Mg(bS), SS.translation = bS.lgS()
        }
        HS.nf.equalsWithEpsilon(Wg, Yg.d) || (SS.scale = HS.nf.lgS());
        const XS = HS.rotationQuaternion?.clone() || tS.Quaternion.FromEulerAngles(HS.rotation.x, HS.rotation.y, HS.rotation.z);
        XS.equalsWithEpsilon(ig, Yg.d) || (gS && Fg(XS), SS.rotation = XS.normalize().lgS())
      }
      _setCameraTransformation(SS, HS, gS) {
        const bS = tS.TmpVectors.VK[0],
          XS = tS.TmpVectors.Quaternion[0],
          xS = HS.getWorldMatrix();
        if (HS.parent) {
          const SS = HS.parent.getWorldMatrix().invertToRef(tS.TmpVectors.Matrix[0]);
          xS.multiplyToRef(SS, tS.TmpVectors.Matrix[1]).decompose(void 0, XS, bS)
        } else xS.decompose(void 0, XS, bS);
        bS.equalsWithEpsilon(Vg, Yg.d) || (gS && Mg(bS), SS.translation = bS.lgS()), gS && Fg(XS), this._babylonScene.useRightHandedSystem || Rg(XS), XS.equalsWithEpsilon(ig, Yg.d) || (SS.rotation = XS.lgS())
      }
      _listAvailableCameras() {
        for (const SS of this._babylonScene.cameras) {
          const HS = {
            type: SS.mode === tt.b.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (SS.name && (HS.name = SS.name), "perspective" === HS.type) HS.perspective = {
            aspectRatio: SS.AK().getAspectRatio(SS),
            yfov: SS.fovMode === tt.b.FOVMODE_VERTICAL_FIXED ? SS.fov : SS.fov * SS.AK().getAspectRatio(SS),
            znear: SS.minZ,
            zfar: SS.maxZ
          };
          else if ("orthographic" === HS.type) {
            const gS = SS.orthoLeft && SS.orthoRight ? .5 * (SS.orthoRight - SS.orthoLeft) : .5 * SS.AK().getRenderWidth(),
              tS = SS.orthoBottom && SS.orthoTop ? .5 * (SS.orthoTop - SS.orthoBottom) : .5 * SS.AK().getRenderHeight();
            HS.orthographic = {
              xmag: gS,
              ymag: tS,
              znear: SS.minZ,
              zfar: SS.maxZ
            }
          }
          this._camerasMap.set(SS, HS)
        }
      }
      _exportAndAssignCameras() {
        const SS = Array.from(this._camerasMap.values());
        for (const HS of SS) {
          const SS = this._nodesCameraMap.get(HS);
          if (void 0 !== SS) {
            this._cameras.push(HS);
            for (const HS of SS) HS.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const SS of this._babylonScene.skeletons) {
          if (SS.bones.length <= 0) continue;
          const HS = {
            joints: []
          };
          this._skinMap.set(SS, HS)
        }
      }
      _exportAndAssignSkeletons(SS) {
        for (const gS of this._babylonScene.skeletons) {
          if (gS.bones.length <= 0) continue;
          const XS = this._skinMap.get(gS);
          if (void 0 == XS) continue;
          const xS = {};
          let NS = -1;
          for (let SS = 0; SS < gS.bones.length; ++SS) {
            const HS = gS.bones[SS],
              tS = HS.getIndex() ?? SS; - 1 !== tS && (xS[tS] = HS, tS > NS && (NS = tS))
          }
          const qS = [];
          for (let gS = 0; gS <= NS; ++gS) {
            const NS = xS[gS],
              uS = NS.getTransformNode(),
              IS = uS ? this._nodeMap.get(uS) : void 0;
            if (void 0 === IS) {
              bS.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            XS.joints.push(IS);
            const fS = NS.getAbsoluteInverseBindMatrix().clone();
            SS.has(uS) && (HS = fS, Ag.invertToRef(tS.TmpVectors.Matrix[0]).multiplyToRef(HS, HS).multiplyToRef(Ag, HS)), qS.push(fS)
          }
          const uS = this._nodesSkinMap.get(XS);
          if (XS.joints.length > 0 && void 0 !== uS) {
            const SS = new Float32Array(16 * qS.length);
            qS.forEach(((HS, gS) => {
              SS.set(HS.m, 16 * gS)
            }));
            const HS = this._bufferManager.createBufferView(SS);
            this._accessors.push(this._bufferManager.createAccessor(HS, "MAT4", 5126, qS.length)), XS.inverseBindMatrices = this._accessors.length - 1, this._skins.push(XS);
            const gS = this._skins.length - 1;
            for (const tS of uS) tS.skin = gS
          }
        }
        var HS
      }
      async _exportSceneAsync() {
        const SS = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const HS = this._options.metadataSelector(this._babylonScene.metadata);
          HS && (SS.extras = HS)
        }
        const HS = new Array,
          gS = new Array,
          tS = new Array,
          bS = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let XS;
        if (bS && !this._options.includeCoordinateSystemConversionNodes)
          for (const uS of this._babylonScene.animationGroups)
            for (const SS of uS.targetedAnimations) {
              const HS = SS.target;
              HS instanceof fS.d && !HS.parent && (XS ?? (XS = new Set)).add(HS)
            }
        for (const uS of this._babylonScene.rootNodes) {
          const SS = uS.animations,
            xS = !!SS && SS.length > 0 || XS?.has(uS);
          bS && !this._options.includeCoordinateSystemConversionNodes && yg(uS, this._babylonScene.useRightHandedSystem) && !xS ? tS.push(...uS.getChildren()) : this._babylonScene.useRightHandedSystem ? HS.push(uS) : gS.push(uS)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const xS = new At(!0, !1);
        SS.nodes.push(...await this._exportNodesAsync(gS, xS));
        const NS = new At(!1, !1);
        SS.nodes.push(...await this._exportNodesAsync(HS, NS));
        const qS = new At(!1, !0);
        SS.nodes.push(...await this._exportNodesAsync(tS, qS)), SS.nodes.length && this._scenes.push(SS), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(xS.getNodesSet()), this._babylonScene.animationGroups.length && ft._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, xS.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(SS) {
        return this._nodeMap.get(SS)
      }
      _getAnimationIndex(SS) {
        return this._animationGroupMap.get(SS)
      }
      _getCameraIndex(SS) {
        const HS = this._camerasMap.get(SS);
        if (!HS) return;
        const gS = this._cameras.indexOf(HS);
        return gS >= 0 ? gS : void 0
      }
      _getMaterialIndex(SS) {
        return this._materialMap.get(SS)
      }
      _getRootIndex(SS, HS) {
        switch (SS) {
          case "nodes":
            return this._getNodeIndex(HS);
          case "animations":
            return this._getAnimationIndex(HS);
          case "cameras":
            return this._getCameraIndex(HS);
          case "materials":
            return this._getMaterialIndex(HS);
          case "meshes": {
            const SS = this._getNodeIndex(HS);
            return void 0 === SS ? void 0 : this._nodes[SS]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(HS)?.index;
          case "images": {
            const SS = this._materialExporter.getTextureInfo(HS)?.index;
            if (void 0 === SS) return;
            const gS = this._textures[SS];
            for (const HS of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const SS = gS?.extensions?.[HS]?.source;
              if ("number" === typeof SS) return SS
            }
            return gS?.source
          }
          case "samplers": {
            const SS = this._materialExporter.getTextureInfo(HS)?.index;
            return void 0 === SS ? void 0 : this._textures[SS]?.sampler
          }
          case "skins": {
            const SS = this._skinMap.get(HS),
              gS = SS ? this._skins.indexOf(SS) : -1;
            return gS >= 0 ? gS : void 0
          }
          case "scenes":
            return HS === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(SS, HS, gS) {
        const tS = this._nodes[SS];
        if (!tS) throw new Error(`Cannot write ${HS}: glTF node ${SS} does not exist.`);
        tS.extensions || (tS.extensions = {}), tS.extensions[HS] = gS
      }
      _shouldExportNode(SS) {
        let HS = this._shouldExportNodeMap.get(SS);
        return void 0 === HS && (HS = this._options.shouldExportNode(SS), this._shouldExportNodeMap.set(SS, HS)), HS
      }
      async _exportNodesAsync(SS, HS) {
        const gS = new Array;
        this._exportBuffers(SS, HS);
        for (const tS of SS) await this._exportNodeAsync(tS, gS, HS);
        return gS
      }
      _collectBuffers(SS, HS, gS, tS, bS) {
        if (this._shouldExportNode(SS) && SS instanceof kS.e && SS.geometry) {
          const XS = SS.geometry.getVertexBuffers();
          if (XS)
            for (const tS in XS) {
              if (!sg(tS)) continue;
              const xS = XS[tS];
              bS.setHasVertexColorAlpha(xS, SS.hasVertexAlpha);
              const NS = xS._buffer,
                qS = HS.get(NS) || [];
              HS.set(NS, qS), -1 === qS.indexOf(xS) && qS.push(xS);
              const uS = gS.get(xS) || [];
              gS.set(xS, uS), -1 === uS.indexOf(SS) && uS.push(SS)
            }
          const xS = SS.morphTargetManager;
          if (xS)
            for (let HS = 0; HS < xS.numTargets; HS++) {
              const gS = xS.getTarget(HS),
                bS = tS.get(gS) || [];
              tS.set(gS, bS), -1 === bS.indexOf(SS) && bS.push(SS)
            }
        }
        for (const XS of SS.getChildren()) this._collectBuffers(XS, HS, gS, tS, bS)
      }
      _exportBuffers(SS, HS) {
        const gS = new Map,
          tS = new Map,
          bS = new Map;
        for (const NS of SS) this._collectBuffers(NS, gS, tS, bS, HS);
        const XS = Array.from(gS.keys());
        for (const NS of XS) {
          const SS = NS.getData();
          if (!SS) throw new Error("Buffer data is not available");
          const bS = gS.get(NS);
          if (!bS) continue;
          const XS = bS[0].byteStride;
          if (bS.some((SS => SS.byteStride !== XS))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const xS = lg(SS).slice();
          for (const HS of bS) {
            const SS = tS.get(HS),
              {
                byteOffset: gS,
                byteStride: bS,
                componentCount: XS,
                type: NS,
                count: qS,
                normalized: uS,
                kind: fS
              } = Ug(HS, SS);
            switch (fS) {
              case IS.f.NormalKind:
              case IS.f.TangentKind:
                (0, Eg.g)(xS, gS, bS, XS, NS, qS, uS, (SS => {
                  const HS = Math.sqrt(SS[0] * SS[0] + SS[1] * SS[1] + SS[2] * SS[2]);
                  if (HS > 0) {
                    const gS = 1 / HS;
                    SS[0] *= gS, SS[1] *= gS, SS[2] *= gS
                  }
                }));
                break;
              case IS.f.ColorKind: {
                const HS = SS.filter((SS => SS.material instanceof Xt.StandardMaterial || null == SS.material)).length;
                if (0 == HS) break;
                if (HS != SS.length) {
                  dS.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                NS == IS.f.UNSIGNED_BYTE && dS.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const tS = new GS.Color3,
                  fS = new GS.b,
                  kS = this._babylonScene.AK().useExactSrgbConversions;
                (0, Eg.g)(xS, gS, bS, XS, NS, qS, uS, (SS => {
                  3 === SS.length ? (tS.UHS(SS, 0), tS.toLinearSpaceToRef(tS, kS), tS.toArray(SS, 0)) : (fS.UHS(SS, 0), fS.toLinearSpaceToRef(fS, kS), fS.toArray(SS, 0))
                }))
              }
            }
          }
          if (HS.convertToRightHanded) {
            for (const SS of bS) {
              const HS = tS.get(SS),
                {
                  byteOffset: gS,
                  byteStride: bS,
                  componentCount: XS,
                  type: NS,
                  count: qS,
                  normalized: uS,
                  kind: fS
                } = Ug(SS, HS);
              switch (fS) {
                case IS.f.PositionKind:
                case IS.f.NormalKind:
                case IS.f.TangentKind:
                  (0, Eg.g)(xS, gS, bS, XS, NS, qS, uS, (SS => {
                    SS[0] = -SS[0]
                  }))
              }
            }
            HS.convertedToRightHandedBuffers.set(NS, xS)
          }
          const qS = this._bufferManager.createBufferView(xS, XS);
          HS.setVertexBufferView(NS, qS);
          const uS = new Map;
          for (const HS of bS) {
            const SS = tS.get(HS),
              {
                kind: gS,
                totalVertices: bS
              } = Ug(HS, SS);
            switch (gS) {
              case IS.f.MatricesIndicesKind:
              case IS.f.MatricesIndicesExtraKind:
                if (HS.type == IS.f.FLOAT) {
                  const SS = HS.getFloatData(bS);
                  null !== SS && uS.set(HS, SS)
                }
            }
          }
          0 !== uS.size && dS.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const fS = Array.from(uS.keys());
          for (const gS of fS) {
            const SS = uS.get(gS);
            if (!SS) continue;
            const tS = SS.some((SS => SS >= 256)),
              bS = new(tS ? Uint16Array : Uint8Array)(SS.length);
            for (let HS = 0; HS < SS.length; HS++) bS[HS] = SS[HS];
            const XS = this._bufferManager.createBufferView(bS, 4 * (tS ? 2 : 1));
            HS.setRemappedBufferView(NS, gS, XS)
          }
        }
        const xS = Array.from(bS.keys());
        for (const NS of xS) {
          const SS = bS.get(NS);
          if (!SS) continue;
          const gS = kt(NS, SS[0], this._bufferManager, this._bufferViews, this._accessors, HS.convertToRightHanded);
          for (const tS of SS) HS.bindMorphDataToMesh(tS, gS)
        }
      }
      async _exportNodeAsync(SS, HS, gS) {
        let tS = this._nodeMap.get(SS);
        if (void 0 !== tS) return void(HS.includes(tS) || HS.push(tS));
        const bS = await this._createNodeAsync(SS, gS);
        if (bS) {
          tS = this._nodes.length, this._nodes.push(bS), this._nodeMap.set(SS, tS), gS.pushExportedNode(SS), HS.push(tS);
          const XS = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            xS = [];
          this._babylonScene.animationGroups.length || (ft._CreateMorphTargetAnimationFromMorphTargetAnimations(SS, XS, xS, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, gS.convertToRightHanded, this._options.shouldExportAnimation), SS.animations.length && ft._CreateNodeAnimationFromNodeAnimations(SS, XS, xS, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, gS.convertToRightHanded, this._options.shouldExportAnimation)), XS.channels.length && XS.samplers.length && this._animations.push(XS), xS.forEach((SS => {
            SS.channels.length && SS.samplers.length && this._animations.push(SS)
          }))
        }
        const XS = bS ? [] : HS;
        for (const xS of SS.getChildren()) await this._exportNodeAsync(xS, XS, gS);
        bS && XS.length && (bS.children = XS)
      }
      async _createNodeAsync(SS, HS) {
        if (!this._shouldExportNode(SS)) return null;
        const gS = {};
        if (SS.name && (gS.name = SS.name), SS.metadata) {
          const HS = this._options.metadataSelector(SS.metadata);
          HS && (gS.extras = HS)
        }
        if (SS instanceof fS.d && (this._setNodeTransformation(gS, SS, HS.convertToRightHanded), SS instanceof kS.e)) {
          const tS = SS instanceof aS.c ? SS.MtS : SS;
          if (tS.dD && tS.dD.length > 0 && (gS.mesh = await this._exportMeshAsync(tS, HS)), SS.skeleton) {
            const HS = this._skinMap.get(SS.skeleton);
            void 0 !== HS && (void 0 === this._nodesSkinMap.get(HS) && this._nodesSkinMap.set(HS, []), this._nodesSkinMap.get(HS)?.push(gS))
          }
        }
        if (SS instanceof Lg.h) {
          const tS = this._camerasMap.get(SS);
          if (tS) {
            void 0 === this._nodesCameraMap.get(tS) && this._nodesCameraMap.set(tS, []), this._setCameraTransformation(gS, SS, HS.convertToRightHanded);
            const bS = SS.parent;
            if (null !== bS && og(SS, bS)) {
              const SS = this._nodeMap.get(bS);
              if (void 0 !== SS) {
                const HS = this._nodes[SS];
                return Tg(gS, HS), this._nodesCameraMap.get(tS)?.push(HS), null
              }
            }
            this._nodesCameraMap.get(tS)?.push(gS)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", gS, SS, this._nodeMap, HS.convertToRightHanded) ? gS : (dS.b.Warn(`Not exporting node ${SS.name}`), null)
      }
      _exportIndices(SS, HS, gS, tS, bS, xS, NS, qS, uS) {
        let IS = null;
        uS.mode = function(SS) {
          switch (SS) {
            case XS.d.TriangleFillMode:
              return 4;
            case XS.d.TriangleStripDrawMode:
              return 5;
            case XS.d.TriangleFanDrawMode:
              return 6;
            case XS.d.PointListDrawMode:
            case XS.d.PointFillMode:
              return 0;
            case XS.d.LineLoopDrawMode:
              return 2;
            case XS.d.LineListDrawMode:
              return 1;
            case XS.d.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${SS}`)
        }(xS);
        const fS = NS !== XS.d.CounterClockWiseSideOrientation && function(SS) {
          switch (SS) {
            case XS.d.TriangleFillMode:
            case XS.d.TriangleStripDrawMode:
            case XS.d.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(xS);
        if (fS) {
          if (xS === XS.d.TriangleStripDrawMode || xS === XS.d.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const NS = HS ? new Uint32Array(tS) : new Uint16Array(tS);
          if (SS)
            for (let HS = 0; HS + 2 < tS; HS += 3) NS[HS] = SS[gS + HS] + bS, NS[HS + 1] = SS[gS + HS + 2] + bS, NS[HS + 2] = SS[gS + HS + 1] + bS;
          else
            for (let SS = 0; SS + 2 < tS; SS += 3) NS[SS] = SS, NS[SS + 1] = SS + 2, NS[SS + 2] = SS + 1;
          IS = NS
        } else if (SS && 0 !== bS) {
          const XS = HS ? new Uint32Array(tS) : new Uint16Array(tS);
          for (let HS = 0; HS < tS; HS++) XS[HS] = SS[gS + HS] + bS;
          IS = XS
        } else SS && (IS = function(SS, HS, gS, tS) {
          let bS = SS;
          return 0 === HS && gS === SS.length || (bS = Array.isArray(SS) ? SS.slice(HS, HS + gS) : SS.subarray(HS, HS + gS)), bS instanceof Int32Array ? new Uint32Array(bS.buffer, bS.byteOffset, bS.length) : Array.isArray(bS) ? tS ? new Uint32Array(bS) : new Uint16Array(bS) : bS
        }(SS, gS, tS, HS));
        if (IS) {
          let XS = qS.getIndicesAccessor(SS, gS, tS, bS, fS);
          if (void 0 === XS) {
            const xS = this._bufferManager.createBufferView(IS),
              NS = HS ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(xS, "SCALAR", NS, tS, 0)), XS = this._accessors.length - 1, qS.setIndicesAccessor(SS, gS, tS, bS, fS, XS)
          }
          uS.indices = XS
        }
      }
      _exportVertexBuffer(SS, HS, gS, tS, bS, XS) {
        const xS = SS.getKind();
        if (!sg(xS)) return;
        if (xS.startsWith("uv") && !this._options.exportUnusedUVs && (!HS || !this._materialNeedsUVsSet.has(HS))) return;
        let NS = bS.getVertexAccessor(SS, gS, tS);
        if (void 0 === NS) {
          const HS = bS.convertedToRightHandedBuffers.get(SS._buffer) || SS._buffer.getData(),
            XS = xS === IS.f.PositionKind ? function(SS, HS, gS, tS) {
              const {
                byteOffset: bS,
                byteStride: XS,
                type: xS,
                normalized: NS
              } = HS, qS = HS.getSize(), uS = new Array(qS).fill(1 / 0), IS = new Array(qS).fill(-1 / 0);
              return (0, Eg.g)(SS, bS + gS * XS, XS, qS, xS, tS * qS, NS, (SS => {
                for (let HS = 0; HS < qS; HS++) uS[HS] = Math.min(uS[HS], SS[HS]), IS[HS] = Math.max(IS[HS], SS[HS])
              })), {
                min: uS,
                max: IS
              }
            }(HS, SS, gS, tS) : void 0,
            qS = (xS === IS.f.MatricesIndicesKind || xS === IS.f.MatricesIndicesExtraKind) && SS.type === IS.f.FLOAT,
            uS = qS ? IS.f.UNSIGNED_BYTE : SS.type,
            fS = qS ? void 0 : SS.normalized,
            kS = qS ? bS.getRemappedBufferView(SS._buffer, SS) : bS.getVertexBufferView(SS._buffer),
            aS = SS.byteOffset + gS * SS.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(kS, function(SS, HS) {
            if (SS == IS.f.ColorKind) return HS ? "VEC4" : "VEC3";
            switch (SS) {
              case IS.f.PositionKind:
              case IS.f.NormalKind:
                return "VEC3";
              case IS.f.TangentKind:
              case IS.f.MatricesIndicesKind:
              case IS.f.MatricesIndicesExtraKind:
              case IS.f.MatricesWeightsKind:
              case IS.f.MatricesWeightsExtraKind:
                return "VEC4";
              case IS.f.UVKind:
              case IS.f.UV2Kind:
              case IS.f.UV3Kind:
              case IS.f.UV4Kind:
              case IS.f.UV5Kind:
              case IS.f.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${SS}`)
          }(xS, bS.hasVertexColorAlpha(SS)), uS, tS, aS, XS, fS)), NS = this._accessors.length - 1, bS.setVertexAccessor(SS, gS, tS, NS)
        }
        XS.attributes[function(SS) {
          switch (SS) {
            case IS.f.PositionKind:
              return "POSITION";
            case IS.f.NormalKind:
              return "NORMAL";
            case IS.f.TangentKind:
              return "TANGENT";
            case IS.f.ColorKind:
              return "COLOR_0";
            case IS.f.UVKind:
              return "TEXCOORD_0";
            case IS.f.UV2Kind:
              return "TEXCOORD_1";
            case IS.f.UV3Kind:
              return "TEXCOORD_2";
            case IS.f.UV4Kind:
              return "TEXCOORD_3";
            case IS.f.UV5Kind:
              return "TEXCOORD_4";
            case IS.f.UV6Kind:
              return "TEXCOORD_5";
            case IS.f.MatricesIndicesKind:
              return "JOINTS_0";
            case IS.f.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case IS.f.MatricesWeightsKind:
              return "WEIGHTS_0";
            case IS.f.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${SS}`)
        }(xS)] = NS
      }
      async _exportMaterialAsync(SS, HS, gS, tS) {
        let bS = this._materialMap.get(SS);
        if (void 0 === bS) {
          const tS = HS && Object.keys(HS).some((SS => SS.startsWith("uv")));
          if ((SS = SS instanceof bt.c ? SS.Q8[gS.materialIndex] : SS) instanceof wH) bS = await this._materialExporter.exportPBRMaterialAsync(SS, tS);
          else if (SS instanceof Xt.StandardMaterial) bS = await this._materialExporter.exportStandardMaterialAsync(SS, tS);
          else {
            if (!(SS instanceof eH)) return void dS.b.Warn(`Unsupported material '${SS.name}' with type ${SS.getClassName()}`);
            bS = await this._materialExporter.exportOpenPBRMaterialAsync(SS, tS)
          }
          this._materialMap.set(SS, bS)
        }
        tS.material = bS
      }
      async _exportMeshAsync(SS, HS) {
        let gS = HS.getMesh(SS);
        if (void 0 !== gS) return gS;
        const tS = {
          primitives: []
        };
        gS = this._meshes.length, this._meshes.push(tS), HS.setMesh(SS, gS);
        const bS = SS.isUnIndexed ? null : SS.mgS(),
          xS = SS.geometry?.getVertexBuffers(),
          NS = HS.getMorphTargetsFromMesh(SS),
          qS = SS instanceof Kt.e,
          uS = SS instanceof Yt,
          IS = SS.dD;
        if (xS && IS && IS.length > 0)
          for (const fS of IS) {
            const gS = {
                attributes: {}
              },
              IS = fS.zK() || this._babylonScene.defaultMaterial;
            if (uS) {
              const HS = {
                  name: IS.name
                },
                tS = SS,
                bS = GS.Color3.White(),
                XS = tS.material?.alpha ?? 1,
                xS = tS.greasedLineMaterial?.color ?? bS;
              (!xS.equalsWithEpsilon(bS, Yg.d) || XS < 1) && (HS.pbrMetallicRoughness = {
                baseColorFactor: [...xS.lgS(), XS]
              }), this._materials.push(HS), gS.material = this._materials.length - 1
            } else if (qS) {
              const HS = {
                  name: IS.name
                },
                tS = SS;
              (!tS.color.equalsWithEpsilon(GS.Color3.White(), Yg.d) || tS.alpha < 1) && (HS.pbrMetallicRoughness = {
                baseColorFactor: [...tS.color.lgS(), tS.alpha]
              }), this._materials.push(HS), gS.material = this._materials.length - 1
            } else await this._exportMaterialAsync(IS, xS, fS, gS);
            const kS = qS || uS ? XS.d.LineListDrawMode : SS.overrideRenderingFillMode ?? IS.fillMode;
            let aS = IS._getEffectiveOrientation(SS);
            HS.wasAddedByNoopNode && !SS.lL().useRightHandedSystem && (aS = aS === XS.d.ClockWiseSideOrientation ? XS.d.CounterClockWiseSideOrientation : XS.d.ClockWiseSideOrientation), this._exportIndices(bS, bS ? (0, Eg.d)(bS, fS.indexCount, fS.indexStart, fS.verticesStart) : fS.verticesCount > 65535, bS ? fS.indexStart : fS.verticesStart, bS ? fS.indexCount : fS.verticesCount, -fS.verticesStart, kS, aS, HS, gS);
            for (const SS of Object.values(xS)) this._exportVertexBuffer(SS, IS, fS.verticesStart, fS.verticesCount, HS, gS);
            if (NS) {
              gS.targets = [];
              for (const SS of NS) gS.targets.push(SS.attributes)
            }
            tS.primitives.push(gS), this._extensionsPostExportMeshPrimitive(gS)
          }
        if (NS) {
          tS.weights = [], tS.extras || (tS.extras = {}), tS.extras.targetNames = [];
          for (const SS of NS) tS.weights.push(SS.influence), tS.extras.targetNames.push(SS.name)
        }
        return gS
      }
    }
    yt._ExtensionNames = new Array, yt._ExtensionFactories = {}, yt._ExtensionOrders = {};
    class Vt {
      static async GLTFAsync(SS, HS, gS) {
        gS && gS.exportWithoutWaitingForScene || await SS.whenReadyAsync();
        const tS = new yt(SS, gS),
          bS = await tS.generateGLTFAsync(HS.replace(/\.[^/.]+$/, ""));
        return tS.dispose(), bS
      }
      static async GLBAsync(SS, HS, gS) {
        gS && gS.exportWithoutWaitingForScene || await SS.whenReadyAsync();
        const tS = new yt(SS, gS),
          bS = await tS.generateGLBAsync(HS.replace(/\.[^/.]+$/, ""));
        return tS.dispose(), bS
      }
    }
    const it = "EXT_mesh_gpu_instancing";

    function Wt(SS, HS) {
      const gS = new Float32Array(3 * HS);
      for (let tS = 0; tS < HS; tS++) gS[3 * tS + 0] = SS[4 * tS + 0], gS[3 * tS + 1] = SS[4 * tS + 1], gS[3 * tS + 2] = SS[4 * tS + 2];
      return gS
    }
    class zt {
      constructor(SS) {
        this.name = it, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = SS
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(SS, HS, gS, tS, bS, XS) {
        return await new Promise((SS => {
          if (HS && gS instanceof ht.e && gS.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const SS = WS.n.Zero(),
              tS = WS.i.Identity(),
              xS = WS.n.One(),
              NS = gS.thinInstanceGetWorldMatrices(),
              qS = WS.l.VK[2],
              uS = WS.l.Quaternion[1],
              IS = WS.l.VK[3];
            let fS = !1,
              kS = !1,
              aS = !1;
            const KS = new Float32Array(3 * gS.O4),
              jS = new Float32Array(4 * gS.O4),
              GS = new Float32Array(3 * gS.O4);
            let CS = 0;
            for (const HS of NS) HS.decompose(IS, uS, qS), bS && (Mg(qS), Fg(uS)), KS.set(qS.lgS(), 3 * CS), jS.set(uS.normalize().lgS(), 4 * CS), GS.set(IS.lgS(), 3 * CS), fS = fS || !qS.equalsWithEpsilon(SS), kS = kS || !uS.equalsWithEpsilon(tS), aS = aS || !IS.equalsWithEpsilon(xS), CS++;
            const nS = {
              attributes: {}
            };
            fS && (nS.attributes.TRANSLATION = this._buildAccessor(KS, "VEC3", gS.O4, XS)), kS && (nS.attributes.ROTATION = this._buildAccessor(jS, "VEC4", gS.O4, XS)), aS && (nS.attributes.SCALE = this._buildAccessor(GS, "VEC3", gS.O4, XS));
            let PS = gS._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (PS) {
              const SS = gS.O4,
                HS = "VEC3";
              gS.hasVertexAlpha && PS.length === 4 * SS ? (this._instanceColorWarned || (dS.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), PS = Wt(PS, SS)) : PS.length === 4 * SS && (PS = Wt(PS, SS)), PS.length === 3 * SS && (nS.attributes._COLOR_0 = this._buildAccessor(PS, HS, SS, XS))
            }
            HS.extensions = HS.extensions || {}, HS.extensions[it] = nS
          }
          SS(HS)
        }))
      }
      _buildAccessor(SS, HS, gS, tS) {
        const bS = tS.createBufferView(SS),
          XS = tS.createAccessor(bS, HS, 5126, gS);
        return this._exporter._accessors.push(XS), this._exporter._accessors.length - 1
      }
    }
    let Ut = !1;

    function pt() {
      Ut || (Ut = !0, yt.RegisterExtension(it, (SS => new zt(SS))))
    }
    gS(40519);
    pt();
    var st = gS(41887);

    function Bt(SS, HS, gS, tS) {
      const bS = SS;
      let XS = null,
        xS = null,
        NS = null,
        qS = null;
      const uS = {},
        IS = HS.find((SS => "POSITION" === SS.dracoName));
      if (!IS) throw new Error("Draco: Missing position attribute for encoding.");
      if (!gS) {
        const SS = IS.data.length / IS.size;
        gS = new(SS > 65535 ? Uint32Array : Uint16Array)(SS);
        for (let HS = 0; HS < SS; HS++) gS[HS] = HS
      }
      try {
        XS = new bS.Encoder, xS = new bS.MeshBuilder, NS = new bS.Mesh, xS.AddFacesToMesh(NS, gS.length / 3, gS);
        const SS = new Map([
          [Float32Array, (SS, HS, gS, tS, bS, XS) => SS.AddFloatAttribute(HS, gS, tS, bS, XS)],
          [Uint32Array, (SS, HS, gS, tS, bS, XS) => SS.AddUInt32Attribute(HS, gS, tS, bS, XS)],
          [Uint16Array, (SS, HS, gS, tS, bS, XS) => SS.AddUInt16Attribute(HS, gS, tS, bS, XS)],
          [Uint8Array, (SS, HS, gS, tS, bS, XS) => SS.AddUInt8Attribute(HS, gS, tS, bS, XS)],
          [Int32Array, (SS, HS, gS, tS, bS, XS) => SS.AddInt32Attribute(HS, gS, tS, bS, XS)],
          [Int16Array, (SS, HS, gS, tS, bS, XS) => SS.AddInt16Attribute(HS, gS, tS, bS, XS)],
          [Int8Array, (SS, HS, gS, tS, bS, XS) => SS.AddInt8Attribute(HS, gS, tS, bS, XS)]
        ]);
        for (const gS of HS) {
          gS.data instanceof Uint8ClampedArray && (gS.data = new Uint8Array(gS.data));
          const HS = SS.get(gS.data.constructor),
            qS = gS.data.length / gS.size;
          uS[gS.kind] = HS(xS, NS, bS[gS.dracoName], qS, gS.size, gS.data), tS.quantizationBits && tS.quantizationBits[gS.dracoName] && XS.SetAttributeQuantization(bS[gS.dracoName], tS.quantizationBits[gS.dracoName])
        }
        tS.method && XS.SetEncodingMethod(bS[tS.method]), void 0 !== tS.encodeSpeed && void 0 !== tS.decodeSpeed && XS.SetSpeedOptions(tS.encodeSpeed, tS.decodeSpeed), qS = new bS.DracoInt8Array;
        const IS = XS.EncodeMeshToDracoBuffer(NS, qS);
        if (IS <= 0) throw new Error("Draco: Failed to encode.");
        const fS = new Int8Array(IS);
        for (let HS = 0; HS < IS; HS++) fS[HS] = qS.GetValue(HS);
        return {
          data: fS,
          attributeIds: uS
        }
      } finally {
        NS && bS.destroy(NS), xS && bS.destroy(xS), XS && bS.destroy(XS), qS && bS.destroy(qS)
      }
    }

    function Mt() {
      let SS;
      onmessage = HS => {
        const gS = HS.data;
        switch (gS.id) {
          case "init": {
            gS.url && importScripts(gS.url);
            const HS = gS.wasmBinary ? {
              wasmBinary: gS.wasmBinary
            } : {};
            SS = DracoEncoderModule(HS), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!SS) throw new Error("Draco: Encoder module is not available.");
            SS.then((SS => {
              const HS = Bt(SS, gS.attributes, gS.indices, gS.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: HS
              }, HS ? [HS.data.buffer] : void 0)
            })).catch((SS => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: SS.message
              })
            }))
        }
      }
    }
    class Ft {
      constructor(SS) {
        if (SS.workerPool) return void(this._workerPoolPromise = Promise.resolve(SS.workerPool));
        const HS = SS.wasmBinary,
          gS = SS.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          tS = gS && "function" === typeof Worker && "function" === typeof URL,
          bS = tS || !SS.jsModule,
          XS = SS.wasmUrl && SS.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: bS ? ZH.k.GetBabylonScriptURL(SS.wasmUrl, !0) : "",
            wasmBinaryPromise: HS ? Promise.resolve(HS) : ZH.k.LoadFileAsync(ZH.k.GetBabylonScriptURL(SS.wasmBinaryUrl, !0))
          } : {
            url: bS ? ZH.k.GetBabylonScriptURL(SS.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        tS ? this._workerPoolPromise = XS.wasmBinaryPromise.then((SS => {
          const HS = this._getWorkerContent(),
            tS = URL.createObjectURL(new Blob([HS], {
              type: "application/javascript"
            }));
          return new st.e(gS, (() => async function(SS, HS, gS) {
            return await new Promise(((tS, bS) => {
              const XS = HS => {
                  SS.removeEventListener("error", XS), SS.removeEventListener("message", xS), bS(HS)
                },
                xS = HS => {
                  "initDone" === HS.data.id && (SS.removeEventListener("error", XS), SS.removeEventListener("message", xS), tS(SS))
                };
              if (SS.addEventListener("error", XS), SS.addEventListener("message", xS), HS) {
                const tS = HS.slice(0);
                SS.postMessage({
                  id: "init",
                  url: gS,
                  wasmBinary: tS
                }, [tS])
              } else SS.postMessage({
                id: "init",
                url: gS
              })
            }))
          }(new Worker(tS), SS, XS.url)))
        })) : this._modulePromise = XS.wasmBinaryPromise.then((async HS => {
          if (!this._isModuleAvailable() && !SS.jsModule) {
            if (!XS.url) throw new Error("Draco codec module is not available");
            await ZH.k.LoadBabylonScriptAsync(XS.url)
          }
          return await this._createModuleAsync(HS, SS.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((SS => {
          SS.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function Rt() {
      const SS = SS => !!SS && "object" === typeof SS;
      for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
      return gS.reduce(((HS, gS) => {
        const tS = Object.keys(gS);
        for (const bS of tS) {
          const tS = HS[bS],
            XS = gS[bS];
          Array.isArray(tS) && Array.isArray(XS) ? HS[bS] = tS.concat(XS) : SS(tS) && SS(XS) ? HS[bS] = Rt(tS, XS) : HS[bS] = XS
        }
        return HS
      }), {})
    }

    function Tt(SS) {
      return SS === zS.h.PositionKind ? "POSITION" : SS === zS.h.NormalKind ? "NORMAL" : SS === zS.h.ColorKind ? "COLOR" : SS.startsWith(zS.h.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const ot = {
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
    class lt extends Ft {
      static get DefaultAvailable() {
        return !!((SS = lt.DefaultConfiguration).wasmUrl && (SS.wasmBinary || SS.wasmBinaryUrl) && "object" === typeof WebAssembly || SS.fallbackUrl);
        var SS
      }
      static get Default() {
        return lt._Default ?? (lt._Default = new lt), lt._Default
      }
      static ResetDefault(SS) {
        lt._Default && (SS || lt._Default.dispose(), lt._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(SS, HS) {
        return {
          module: await (HS || DracoEncoderModule)({
            wasmBinary: SS
          })
        }
      }
      _getWorkerContent() {
        return `${Bt}(${Mt})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lt.DefaultConfiguration)
      }
      async _encodeAsync(SS, HS, gS) {
        const tS = gS ? Rt(ot, gS) : ot;
        if (this._workerPoolPromise) {
          const gS = await this._workerPoolPromise;
          return await new Promise(((bS, XS) => {
            gS.push(((gS, xS) => {
              const NS = SS => {
                  gS.removeEventListener("error", NS), gS.removeEventListener("message", qS), XS(SS), xS()
                },
                qS = SS => {
                  "encodeMeshSuccess" === SS.data.id ? (gS.removeEventListener("error", NS), gS.removeEventListener("message", qS), bS(SS.data.encodedMeshData), xS()) : "encodeMeshError" === SS.data.id && (gS.removeEventListener("error", NS), gS.removeEventListener("message", qS), XS(new Error(SS.data.errorMessage)), xS())
                };
              gS.addEventListener("error", NS), gS.addEventListener("message", qS);
              const uS = [];
              for (const HS of SS) uS.push(HS.data.buffer);
              HS && uS.push(HS.buffer), gS.postMessage({
                id: "encodeMesh",
                attributes: SS,
                indices: HS,
                options: tS
              }, uS)
            }))
          }))
        }
        if (this._modulePromise) {
          return Bt((await this._modulePromise).module, SS, HS, tS)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(SS, HS) {
        if (0 == SS.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        SS instanceof ht.e && SS.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === HS?.method && (dS.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), HS.method = "MESH_SEQUENTIAL_ENCODING");
        const gS = function(SS) {
            let HS = SS.mgS(void 0, !0);
            return !HS || HS instanceof Uint32Array || HS instanceof Uint16Array || (HS = ((0, Eg.d)(HS, HS.length) ? Uint32Array : Uint16Array).from(HS)), HS
          }(SS),
          tS = function(SS, HS) {
            const gS = [];
            for (const tS of SS.getVerticesDataKinds()) {
              if (HS?.includes(tS)) {
                if (tS === zS.h.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const bS = SS.getVertexBuffer(tS),
                XS = bS.getSize(),
                xS = (0, Eg.p)(bS.getData(), XS, bS.type, bS.byteOffset, bS.byteStride, SS.getTotalVertices(), !0);
              gS.push({
                kind: tS,
                dracoName: Tt(tS),
                size: XS,
                data: xS
              })
            }
            return gS
          }(SS, HS?.excludedAttributes);
        return await this._encodeAsync(tS, gS, HS)
      }
    }
    lt.DefaultConfiguration = {
      wasmUrl: `${ZH.k._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${ZH.k._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${ZH.k._DefaultCdnUrl}/draco_encoder.js`
    }, lt._Default = null;
    const mt = "KHR_draco_mesh_compression";
    class et {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(SS) {
        this.name = mt, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === SS.options.meshCompressionMethod && lt.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(SS, HS, gS) {
        if (!this.enabled) return;
        if (4 !== SS.mode && 5 !== SS.mode) return void dS.b.Warn("Cannot compress primitive with mode " + SS.mode + ".");
        const tS = [],
          bS = [];
        let XS = null;
        if (void 0 !== SS.indices) {
          const xS = gS[SS.indices],
            NS = HS.getBufferView(xS);
          XS = HS.getData(NS).slice(), tS.push(NS), bS.push(xS)
        }
        const xS = [];
        for (const [IS, fS] of Object.entries(SS.attributes)) {
          const SS = gS[fS],
            XS = HS.getBufferView(SS),
            qS = pg(SS.type),
            uS = (0, Eg.p)(HS.getData(XS), qS, SS.componentType, SS.byteOffset || 0, XS.byteStride || (0, Eg.m)(SS.componentType) * qS, SS.count, !0);
          xS.push({
            kind: IS,
            dracoName: (NS = IS, "POSITION" === NS ? "POSITION" : "NORMAL" === NS ? "NORMAL" : NS.startsWith("COLOR") ? "COLOR" : NS.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: pg(SS.type),
            data: uS
          }), tS.push(XS), bS.push(SS)
        }
        var NS;
        const qS = {
            method: SS.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          uS = lt.Default._encodeAsync(xS, XS, qS).then((gS => {
            const XS = {
                bufferView: -1,
                attributes: gS.attributeIds
              },
              xS = HS.createBufferView(gS.data);
            HS.setBufferView(XS, xS);
            for (const SS of tS) this._bufferViewsUsed.add(SS);
            for (const SS of bS) this._accessorsUsed.add(SS);
            SS.extensions || (SS.extensions = {}), SS.extensions[mt] = XS
          })).catch((SS => {
            dS.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + SS.message)
          }));
        this._encodePromises.push(uS), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(SS) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((HS => {
          SS.getPropertiesWithBufferView(HS).every((SS => this._accessorsUsed.has(SS))) && SS.removeBufferView(HS)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let rt = !1;

    function Sb() {
      rt || (rt = !0, yt.RegisterExtension(mt, (SS => new et(SS))))
    }
    Sb();
    var Hb = gS(41591);
    const gb = "KHR_lights_punctual",
      tb = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      bb = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      Xb = WS.n.Backward();
    class xb {
      constructor(SS) {
        this.name = gb, this.enabled = !0, this.required = !1, this._exporter = SS
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[gb] = this._lights
      }
      async postExportNodeAsync(SS, HS, gS, tS, bS) {
        return await new Promise((XS => {
          if (!(gS instanceof It.e)) return void XS(HS);
          const xS = gS.getTypeID() == It.e.LIGHTTYPEID_POINTLIGHT ? "point" : gS.getTypeID() == It.e.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : gS.getTypeID() == It.e.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!xS || !(gS instanceof Hb.b)) return dS.b.Warn(`${SS}: Light ${gS.name} is not supported in ${gb}`), void XS(HS);
          if (gS.falloffType !== It.e.FALLOFF_GLTF && dS.b.Warn(`${SS}: Light falloff for ${gS.name} does not match the ${gb} specification!`), !gS.position.ZxS(0, 0, 0)) {
            const SS = WS.l.VK[0].dJ(gS.position);
            bS && Mg(SS), HS.translation = SS.lgS()
          }
          if ("point" !== xS) {
            const SS = gS.direction.normalizeToRef(WS.l.VK[0]);
            bS && Mg(SS);
            const tS = WS.i.FromUnitVectorsToRef(Xb, SS, WS.l.Quaternion[0]);
            WS.i.IsIdentity(tS) || (HS.rotation = tS.lgS())
          }
          const NS = {
            type: xS,
            name: gS.name,
            color: gS.diffuse.lgS(),
            intensity: gS.intensity,
            range: gS.range
          };
          if (mg(NS, tb), "spot" === xS) {
            const SS = gS;
            NS.spot = {
              innerConeAngle: SS.innerAngle / 2,
              outerConeAngle: SS.angle / 2
            }, mg(NS.spot, bb)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(NS);
          const qS = {
              light: this._lights.lights.length - 1
            },
            uS = gS.parent;
          if (uS && og(gS, uS)) {
            const SS = tS.get(uS);
            if (SS) {
              const gS = this._exporter._nodes[SS];
              return Tg(HS, gS), gS.extensions || (gS.extensions = {}), gS.extensions[gb] = qS, void XS(null)
            }
          }
          HS.extensions || (HS.extensions = {}), HS.extensions[gb] = qS, XS(HS)
        }))
      }
    }
    let Nb = !1;

    function qb() {
      Nb || (Nb = !0, yt.RegisterExtension(gb, (SS => new xb(SS))))
    }
    qb();
    const ub = "KHR_interactivity";
    class Ib {
      constructor(SS) {
        this._exporter = SS, this.name = ub, this.enabled = !!SS.options.khrInteractivity, this.required = SS.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var SS, HS, gS;
        const tS = this._exporter.options.khrInteractivity;
        if (!tS) return;
        const bS = tS.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: SS => this._exporter._getNodeIndex(SS),
          getAnimationIndex: SS => this._exporter._getAnimationIndex(SS),
          getCameraIndex: SS => this._exporter._getCameraIndex(SS),
          getMaterialIndex: SS => this._exporter._getMaterialIndex(SS),
          getRootIndex: (SS, HS) => this._exporter._getRootIndex(SS, HS),
          setNodeExtension: (SS, HS, gS) => this._exporter._setNodeExtension(SS, HS, gS)
        });
        this._exporter._glTF.extensions[ub] = bS;
        for (const XS of tS.additionalExtensionsUsed)(SS = this._exporter._glTF).extensionsUsed || (SS.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(XS) && this._exporter._glTF.extensionsUsed.push(XS);
        for (const XS of tS.additionalExtensionsRequired)(HS = this._exporter._glTF).extensionsUsed || (HS.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(XS) && this._exporter._glTF.extensionsUsed.push(XS), (gS = this._exporter._glTF).extensionsRequired || (gS.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(XS) && this._exporter._glTF.extensionsRequired.push(XS)
      }
    }
    let fb = !1;

    function kb() {
      fb || (fb = !0, yt.RegisterExtension(ub, (SS => new Ib(SS)), 200))
    }
    kb();
    const ab = "EXT_lights_area",
      Kb = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      jb = {
        aspect: 1
      },
      Gb = WS.n.Backward();
    class Cb {
      constructor(SS) {
        this.name = ab, this.enabled = !0, this.required = !1, this._exporter = SS
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[ab] = this._lights
      }
      async postExportNodeAsync(SS, HS, gS, tS, bS) {
        return await new Promise((XS => {
          if (!(gS instanceof It.e)) return void XS(HS);
          const xS = gS.getTypeID() == It.e.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!xS) return dS.b.Warn(`${SS}: Light ${gS.name} is not supported in ${ab}`), void XS(HS);
          const NS = gS;
          if (NS.falloffType !== It.e.FALLOFF_GLTF && dS.b.Warn(`${SS}: Light falloff for ${gS.name} does not match the ${ab} specification!`), !NS.position.ZxS(0, 0, 0)) {
            const SS = WS.l.VK[0].dJ(NS.position);
            bS && Mg(SS), HS.translation = SS.lgS()
          }
          const qS = WS.n.Forward();
          bS && Mg(qS);
          const uS = WS.i.FromUnitVectorsToRef(Gb, qS, WS.l.Quaternion[0]);
          WS.i.IsIdentity(uS) || (HS.rotation = uS.lgS());
          const IS = {
            type: xS,
            name: NS.name,
            color: NS.diffuse.lgS(),
            intensity: NS.intensity,
            size: NS.height,
            rect: {
              aspect: NS.width / NS.height
            }
          };
          mg(IS, Kb), IS.rect && mg(IS.rect, jb), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(IS);
          const fS = {
              light: this._lights.lights.length - 1
            },
            kS = gS.parent;
          if (kS && og(NS, kS)) {
            const SS = tS.get(kS);
            if (SS) {
              const gS = this._exporter._nodes[SS];
              return Tg(HS, gS), gS.extensions || (gS.extensions = {}), gS.extensions[ab] = fS, void XS(null)
            }
          }
          HS.extensions || (HS.extensions = {}), HS.extensions[ab] = fS, XS(HS)
        }))
      }
    }
    let nb = !1;

    function Pb() {
      nb || (nb = !0, yt.RegisterExtension(ab, (SS => new Cb(SS))))
    }
    Pb();
    const Qb = "KHR_materials_anisotropy";
    class Db {
      constructor(SS) {
        this.name = Qb, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = SS
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(SS, HS, gS) {
        const tS = [];
        if (gS instanceof wH) {
          if (gS.anisotropy.isEnabled && !gS.anisotropy.legacy) return gS.anisotropy.texture && tS.push(gS.anisotropy.texture), tS
        } else if (gS instanceof eH && gS.specularRoughnessAnisotropy > 0) {
          const SS = function(SS) {
            const HS = SS.specularRoughnessAnisotropyTexture,
              gS = SS.geometryTangentTexture;
            return `${HS&&HS.getInternalTexture()?HS.getInternalTexture().uniqueId:"NoStrength"}_${gS&&gS.getInternalTexture()?gS.getInternalTexture().uniqueId:"NoTangent"}`
          }(gS);
          if (this._anisoTexturesMap[SS]) tS.push(this._anisoTexturesMap[SS]);
          else {
            const HS = await async function(SS) {
              const HS = SS.lL(),
                gS = SS.specularRoughnessAnisotropyTexture,
                tS = SS.geometryTangentTexture;
              return gS || tS ? await xg("AnisotropyTexture", ug(tS ? Ng(tS, 0) : qg(1), tS ? Ng(tS, 1) : qg(0), gS ? Ng(gS, 0) : qg(1)), HS) : null
            }(gS);
            HS && (tS.push(HS), this._anisoTexturesMap[SS] = HS)
          }
          return tS
        }
        return []
      }
      postExportMaterialAsync(SS, HS, gS) {
        return new Promise((SS => {
          var tS;
          if (gS instanceof wH) {
            if (!gS.anisotropy.isEnabled || gS.anisotropy.legacy) return void SS(HS);
            this._wasUsed = !0, HS.extensions = HS.extensions || {};
            const tS = this._exporter._materialExporter.getTextureInfo(gS.anisotropy.texture),
              bS = {
                anisotropyStrength: gS.anisotropy.intensity,
                anisotropyRotation: gS.anisotropy.angle,
                anisotropyTexture: tS ?? void 0
              };
            null !== bS.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(gS), HS.extensions[Qb] = bS
          } else if (gS instanceof eH && gS.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, HS.extensions = HS.extensions || {};
            let bS = gS.specularRoughnessTexture;
            gS._useRoughnessFromMetallicTextureGreen && (bS = gS.baseMetalnessTexture);
            const XS = this._anisoTexturesMap[gS.id];
            if (!bS && !XS) {
              let tS = gS.specularRoughness,
                bS = gS.specularRoughnessAnisotropy;
              if (!gS._useGltfStyleAnisotropy) {
                const SS = function(SS, HS) {
                  const gS = SS * SS,
                    tS = gS * Math.sqrt(2 / (1 + (1 - HS) * (1 - HS))),
                    bS = (1 - HS) * tS;
                  return {
                    newBaseRoughness: Math.sqrt(bS),
                    newAnisotropyStrength: Math.min(Math.sqrt((tS - gS) / Math.max(1 - gS, 1e-4)), 1)
                  }
                }(gS.specularRoughness, gS.specularRoughnessAnisotropy);
                tS = SS.newBaseRoughness, bS = SS.newAnisotropyStrength
              }
              HS.pbrMetallicRoughness && (HS.pbrMetallicRoughness.roughnessFactor = tS);
              const XS = {
                anisotropyStrength: bS,
                anisotropyRotation: gS.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return HS.extensions[Qb] = XS, SS(HS)
            }
            const xS = XS ? this._exporter._materialExporter.getTextureInfo(XS) : null,
              NS = {
                anisotropyStrength: gS.specularRoughnessAnisotropy,
                anisotropyRotation: gS.geometryTangentAngle,
                anisotropyTexture: xS || void 0,
                extensions: {}
              };
            gS._useGltfStyleAnisotropy || (HS.extensions.KHR_materials_openpbr = {}, (tS = this._exporter._glTF).extensionsUsed || (tS.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(gS), HS.extensions[Qb] = NS
          }
          SS(HS)
        }))
      }
    }
    let wb = !1;

    function hb() {
      wb || (wb = !0, yt.RegisterExtension(Qb, (SS => new Db(SS))))
    }
    hb();
    const Zb = "KHR_materials_clearcoat";

    function Jb(SS, HS) {
      const gS = new vS.i(HS.name, HS.lL());
      return gS._texture = SS, gS.coordinatesIndex = HS.coordinatesIndex, HS instanceof vS.i && (gS.uOffset = HS.uOffset, gS.vOffset = HS.vOffset, gS.uScale = HS.uScale, gS.vScale = HS.vScale, gS.wAng = HS.wAng), gS.wrapU = HS.wrapU, gS.wrapV = HS.wrapV, gS
    }
    class Ob {
      constructor(SS) {
        this.name = Zb, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = SS
      }
      dispose() {
        for (const SS of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[SS].dispose()
        }
        this._mergedTexturesMap = {};
        for (const SS of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[SS].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(SS, HS, gS) {
        const tS = [];
        if (gS instanceof wH) {
          if (gS.clearCoat.isEnabled) return gS.clearCoat.texture && tS.push(gS.clearCoat.texture), !gS.clearCoat.useRoughnessFromMainTexture && gS.clearCoat.textureRoughness && tS.push(gS.clearCoat.textureRoughness), gS.clearCoat.bumpTexture && tS.push(gS.clearCoat.bumpTexture), tS
        } else if (gS instanceof eH && gS.coatWeight > 0) {
          let SS = !1;
          if (gS.coatWeightTexture ? gS.coatRoughnessTexture ? gS._useCoatRoughnessFromGreenChannel && gS.coatWeightTexture.getInternalTexture() === gS.coatRoughnessTexture.getInternalTexture() ? (tS.push(gS.coatWeightTexture), tS.push(gS.coatRoughnessTexture)) : SS = !0 : tS.push(gS.coatWeightTexture) : gS.coatRoughnessTexture && (gS._useCoatRoughnessFromGreenChannel ? tS.push(gS.coatRoughnessTexture) : SS = !0), SS) {
            const SS = function(SS) {
              const HS = SS.coatWeightTexture,
                gS = HS && HS.getInternalTexture() ? HS.getInternalTexture().uniqueId : "NoCoat",
                tS = SS.coatRoughnessTexture;
              return `${gS}_${tS&&tS.getInternalTexture()?tS.getInternalTexture().uniqueId:"NoRoughness"}`
            }(gS);
            if (!this._cachedInternalTexturesMap[SS]) {
              const HS = await async function(SS) {
                const HS = SS.lL(),
                  gS = SS.coatWeightTexture,
                  tS = SS.coatRoughnessTexture;
                return gS || tS ? (await xg("CoatTexture", ug(gS ? Ng(gS, 0) : qg(1), tS ? Ng(tS, SS._useCoatRoughnessFromGreenChannel ? 1 : 0) : qg(1)), HS)).getInternalTexture() : null
              }(gS);
              HS && (this._cachedInternalTexturesMap[SS] = HS)
            }
            this._cachedInternalTexturesMap[SS] && (gS.coatWeightTexture && (this._mergedTexturesMap[gS.coatWeightTexture.uniqueId] = Jb(this._cachedInternalTexturesMap[SS], gS.coatWeightTexture), tS.push(this._mergedTexturesMap[gS.coatWeightTexture.uniqueId])), gS.coatRoughnessTexture && (this._mergedTexturesMap[gS.coatRoughnessTexture.uniqueId] = Jb(this._cachedInternalTexturesMap[SS], gS.coatRoughnessTexture), tS.push(this._mergedTexturesMap[gS.coatRoughnessTexture.uniqueId])))
          }
          return gS.geometryCoatNormalTexture && tS.push(gS.geometryCoatNormalTexture), tS
        }
        return []
      }
      postExportMaterialAsync(SS, HS, gS) {
        return new Promise((SS => {
          if (gS instanceof wH) {
            if (!gS.clearCoat.isEnabled) return void SS(HS);
            this._wasUsed = !0, HS.extensions = HS.extensions || {};
            const tS = this._exporter._materialExporter.getTextureInfo(gS.clearCoat.texture);
            let bS;
            bS = gS.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(gS.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(gS.clearCoat.textureRoughness), gS.clearCoat.isTintEnabled && ZH.k.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${gS.name}`), gS.clearCoat.remapF0OnInterfaceChange && ZH.k.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${gS.name}`);
            const XS = this._exporter._materialExporter.getTextureInfo(gS.clearCoat.bumpTexture),
              xS = {
                clearcoatFactor: gS.clearCoat.intensity,
                clearcoatTexture: tS ?? void 0,
                clearcoatRoughnessFactor: gS.clearCoat.roughness,
                clearcoatRoughnessTexture: bS ?? void 0,
                clearcoatNormalTexture: XS ?? void 0
              };
            null === xS.clearcoatTexture && null === xS.clearcoatRoughnessTexture && null === xS.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(gS), HS.extensions[Zb] = xS
          } else if (gS instanceof eH) {
            if (0 == gS.coatWeight) return void SS(HS);
            let tS, bS, XS, xS;
            this._wasUsed = !0, HS.extensions = HS.extensions || {}, gS.coatWeightTexture && (tS = this._mergedTexturesMap[gS.coatWeightTexture.uniqueId], bS = this._exporter._materialExporter.getTextureInfo(tS)), gS.coatRoughnessTexture && (XS = this._mergedTexturesMap[gS.coatRoughnessTexture.uniqueId], xS = this._exporter._materialExporter.getTextureInfo(XS)), gS.coatColorTexture && ZH.k.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${gS.name}`);
            const NS = this._exporter._materialExporter.getTextureInfo(gS.geometryCoatNormalTexture),
              qS = {
                clearcoatFactor: gS.coatWeight,
                clearcoatTexture: bS ?? void 0,
                clearcoatRoughnessFactor: gS.coatRoughness,
                clearcoatRoughnessTexture: xS ?? void 0,
                clearcoatNormalTexture: NS ?? void 0
              };
            null === qS.clearcoatTexture && null === qS.clearcoatRoughnessTexture && null === qS.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(gS), HS.extensions[Zb] = qS
          }
          SS(HS)
        }))
      }
    }
    let db = !1;

    function cb() {
      db || (db = !0, yt.RegisterExtension(Zb, (SS => new Ob(SS))))
    }
    cb();
    const vb = "KHR_materials_coat";

    function Eb(SS) {
      const HS = SS.coatRoughnessAnisotropyTexture,
        gS = SS.geometryCoatTangentTexture;
      return `${HS&&HS.getInternalTexture()?HS.getInternalTexture().uniqueId:"NoStrength"}_${gS&&gS.getInternalTexture()?gS.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function Lb(SS, HS) {
      const gS = new vS.i(HS.name, HS.lL());
      return gS._texture = SS, gS.coordinatesIndex = HS.coordinatesIndex, HS instanceof vS.i && (gS.uOffset = HS.uOffset, gS.vOffset = HS.vOffset, gS.uScale = HS.uScale, gS.vScale = HS.vScale, gS.wAng = HS.wAng), gS.wrapU = HS.wrapU, gS.wrapV = HS.wrapV, gS
    }
    class Yb {
      constructor(SS) {
        this.name = vb, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = SS
      }
      dispose() {
        for (const SS of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[SS].dispose()
        }
        this._mergedTexturesMap = {};
        for (const SS of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[SS].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(SS, HS, gS) {
        const tS = [];
        if (gS instanceof wH) {
          if (gS.clearCoat.isEnabled) return gS.clearCoat.texture && tS.push(gS.clearCoat.texture), !gS.clearCoat.useRoughnessFromMainTexture && gS.clearCoat.textureRoughness && tS.push(gS.clearCoat.textureRoughness), gS.clearCoat.bumpTexture && tS.push(gS.clearCoat.bumpTexture), gS.clearCoat.tintTexture && tS.push(gS.clearCoat.tintTexture), tS
        } else if (gS instanceof eH && gS.coatWeight > 0) {
          let SS = !1;
          if (gS.coatWeightTexture ? gS.coatRoughnessTexture ? gS._useCoatRoughnessFromGreenChannel && gS.coatWeightTexture.getInternalTexture() === gS.coatRoughnessTexture.getInternalTexture() ? (tS.push(gS.coatWeightTexture), tS.push(gS.coatRoughnessTexture)) : SS = !0 : tS.push(gS.coatWeightTexture) : gS.coatRoughnessTexture && (gS._useCoatRoughnessFromGreenChannel ? tS.push(gS.coatRoughnessTexture) : SS = !0), SS) {
            const SS = function(SS) {
              const HS = SS.coatWeightTexture,
                gS = HS && HS.getInternalTexture() ? HS.getInternalTexture().uniqueId : "NoCoat",
                tS = SS.coatRoughnessTexture;
              return `${gS}_${tS&&tS.getInternalTexture()?tS.getInternalTexture().uniqueId:"NoRoughness"}`
            }(gS);
            if (!this._cachedInternalTexturesMap[SS]) {
              const HS = await async function(SS) {
                const HS = SS.lL(),
                  gS = SS.coatWeightTexture,
                  tS = SS.coatRoughnessTexture;
                return gS || tS ? (await xg("CoatTexture", ug(gS ? Ng(gS, 0) : qg(1), tS ? Ng(tS, SS._useCoatRoughnessFromGreenChannel ? 1 : 0) : qg(1)), HS)).getInternalTexture() : null
              }(gS);
              HS && (this._cachedInternalTexturesMap[SS] = HS)
            }
            this._cachedInternalTexturesMap[SS] && (gS.coatWeightTexture && (this._mergedTexturesMap[gS.coatWeightTexture.uniqueId] = Lb(this._cachedInternalTexturesMap[SS], gS.coatWeightTexture), tS.push(this._mergedTexturesMap[gS.coatWeightTexture.uniqueId])), gS.coatRoughnessTexture && (this._mergedTexturesMap[gS.coatRoughnessTexture.uniqueId] = Lb(this._cachedInternalTexturesMap[SS], gS.coatRoughnessTexture), tS.push(this._mergedTexturesMap[gS.coatRoughnessTexture.uniqueId])))
          }
          if (gS.geometryCoatNormalTexture && tS.push(gS.geometryCoatNormalTexture), gS.coatColorTexture && tS.push(gS.coatColorTexture), gS.coatRoughnessAnisotropy > 0) {
            const SS = Eb(gS);
            if (this._mergedTexturesMap[SS]) tS.push(this._mergedTexturesMap[SS]);
            else {
              const HS = await async function(SS) {
                const HS = SS.lL(),
                  gS = SS.coatRoughnessAnisotropyTexture,
                  tS = SS.geometryCoatTangentTexture;
                return gS || tS ? await xg("AnisotropyTexture", ug(tS ? Ng(tS, 0) : qg(1), tS ? Ng(tS, 1) : qg(0), gS ? Ng(gS, 0) : qg(1)), HS) : null
              }(gS);
              HS && (tS.push(HS), this._mergedTexturesMap[SS] = HS)
            }
            return tS
          }
          return tS
        }
        return []
      }
      postExportMaterialAsync(SS, HS, gS) {
        return new Promise((SS => {
          var tS;
          if (gS instanceof wH) {
            if (!gS.clearCoat.isEnabled) return void SS(HS);
            this._wasUsed = !0, HS.extensions = HS.extensions || {};
            const tS = this._exporter._materialExporter.getTextureInfo(gS.clearCoat.texture);
            let bS, XS;
            bS = gS.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(gS.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(gS.clearCoat.textureRoughness), gS.clearCoat.isTintEnabled && (XS = this._exporter._materialExporter.getTextureInfo(gS.clearCoat.tintTexture));
            const xS = this._exporter._materialExporter.getTextureInfo(gS.clearCoat.bumpTexture),
              NS = gS.clearCoat.indexOfRefraction,
              qS = {
                coatFactor: gS.clearCoat.intensity,
                coatTexture: tS ?? void 0,
                coatRoughnessFactor: gS.clearCoat.roughness,
                coatRoughnessTexture: bS ?? void 0,
                coatNormalTexture: xS ?? void 0,
                coatColorFactor: gS.clearCoat.tintColor.lgS(),
                coatColorTexture: XS ?? void 0,
                coatIor: 1.5 !== NS ? NS : void 0
              };
            null === qS.coatTexture && null === qS.coatRoughnessTexture && null === qS.coatRoughnessTexture && null === qS.coatColorTexture || this._exporter._materialNeedsUVsSet.add(gS), HS.extensions[vb] = qS
          } else if (gS instanceof eH) {
            if (0 == gS.coatWeight) return void SS(HS);
            let bS, XS, xS, NS;
            this._wasUsed = !0, HS.extensions = HS.extensions || {}, gS.coatWeightTexture && (bS = this._mergedTexturesMap[gS.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[gS.coatWeightTexture.uniqueId] : gS.coatWeightTexture, XS = this._exporter._materialExporter.getTextureInfo(bS)), gS.coatRoughnessTexture && (xS = this._mergedTexturesMap[gS.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[gS.coatRoughnessTexture.uniqueId] : gS.coatRoughnessTexture, NS = this._exporter._materialExporter.getTextureInfo(xS));
            const qS = this._exporter._materialExporter.getTextureInfo(gS.geometryCoatNormalTexture),
              uS = this._exporter._materialExporter.getTextureInfo(gS.coatColorTexture),
              IS = gS.coatIor,
              fS = gS.coatDarkening,
              kS = gS.coatRoughnessTexture,
              aS = Eb(gS),
              KS = this._mergedTexturesMap[aS];
            let jS, GS = 0,
              CS = 0;
            if (gS.coatRoughnessAnisotropy > 0) {
              if (kS || KS) {
                const SS = KS ? this._exporter._materialExporter.getTextureInfo(KS) : null;
                GS = gS.coatRoughnessAnisotropy, CS = gS.geometryCoatTangentAngle, jS = SS || void 0
              } else {
                let SS = gS.coatRoughness,
                  tS = gS.coatRoughnessAnisotropy;
                if (!gS._useGltfStyleAnisotropy) {
                  const HS = function(SS, HS) {
                    const gS = SS * SS,
                      tS = gS * Math.sqrt(2 / (1 + (1 - HS) * (1 - HS))),
                      bS = (1 - HS) * tS;
                    return {
                      newBaseRoughness: Math.sqrt(bS),
                      newAnisotropyStrength: Math.min(Math.sqrt((tS - gS) / Math.max(1 - gS, 1e-4)), 1)
                    }
                  }(gS.coatRoughness, gS.coatRoughnessAnisotropy);
                  SS = HS.newBaseRoughness, tS = HS.newAnisotropyStrength
                }
                HS.pbrMetallicRoughness && (HS.pbrMetallicRoughness.roughnessFactor = SS), GS = tS, CS = gS.geometryCoatTangentAngle + .5 * Math.PI, jS = void 0
              }
              gS._useGltfStyleAnisotropy || (HS.extensions.KHR_materials_openpbr = {}, (tS = this._exporter._glTF).extensionsUsed || (tS.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const nS = {
              coatFactor: gS.coatWeight,
              coatTexture: XS ?? void 0,
              coatRoughnessFactor: gS.coatRoughness,
              coatRoughnessTexture: NS ?? void 0,
              coatNormalTexture: qS ?? void 0,
              coatColorFactor: gS.coatColor.lgS(),
              coatColorTexture: uS ?? void 0,
              coatIor: 1.5 !== IS ? IS : void 0,
              coatDarkeningFactor: 1 !== fS ? fS : void 0,
              coatAnisotropyRotation: CS,
              coatAnisotropyStrength: GS,
              coatAnisotropyTexture: jS
            };
            null === nS.coatTexture && null === nS.coatRoughnessTexture && null === nS.coatRoughnessTexture && null === nS.coatAnisotropyTexture && null === nS.coatColorTexture || this._exporter._materialNeedsUVsSet.add(gS), HS.extensions[vb] = nS
          }
          SS(HS)
        }))
      }
    }
    let Ab = !1;

    function yb() {
      Ab || (Ab = !0, yt.RegisterExtension(vb, (SS => new Yb(SS))))
    }
    yb();
    let Vb = (() => {
      var SS, HS, gS, tS, bS, xS, NS, qS, uS, IS, fS, kS, aS, KS, jS, GS, CS, nS, PS, QS, DS, wS, hS, ZS, dS, cS, vS, ES, LS, YS, yS, VS, iS, WS, zS, US, pS, sS, BS, MS, RS, TS, oS, lS, mS, eS, rS, SH, HH, gH, tH, bH, XH, xH, NH, qH, uH, IH, fH, kH, aH, KH, jH, GH, CH, nH, PH;
      let QH, DH, ZH, JH, OH, dH, cH, vH, EH, LH, YH, AH, yH, VH, iH, WH, zH, UH, pH, sH, BH, MH, FH, RH, TH, oH, lH, mH, eH, rH, Sg, Hg, gg, tg, bg, Xg, xg, Ng, qg, ug, Ig, fg, kg, ag, Kg, jg, Gg, Cg, ng, Pg, Qg, Dg, wg, hg, Zg, Jg, Og, dg, cg, vg, Eg, Lg, Yg, Ag, yg, Vg, ig, Wg, zg = wH,
        Ug = [],
        pg = [],
        sg = [],
        Bg = [],
        Mg = [],
        Fg = [],
        Rg = [],
        Tg = [],
        og = [],
        lg = [],
        mg = [],
        eg = [],
        rg = [],
        St = [],
        Ht = [],
        gt = [],
        tt = [],
        bt = [],
        Xt = [],
        xt = [],
        Nt = [],
        qt = [],
        ut = [],
        It = [],
        ft = [],
        kt = [],
        Kt = [],
        jt = [],
        Gt = [],
        Ct = [],
        nt = [],
        Pt = [],
        Qt = [],
        Dt = [],
        wt = [],
        ht = [],
        Zt = [],
        Jt = [],
        Ot = [],
        dt = [],
        ct = [],
        vt = [],
        Et = [],
        Lt = [],
        Yt = [],
        At = [],
        yt = [],
        Vt = [],
        it = [],
        Wt = [],
        zt = [],
        Ut = [],
        pt = [],
        st = [],
        Bt = [],
        Mt = [],
        Ft = [],
        Rt = [],
        Tt = [],
        ot = [],
        lt = [],
        mt = [],
        et = [],
        rt = [],
        Sb = [],
        Hb = [],
        gb = [],
        tb = [],
        bb = [],
        Xb = [],
        xb = [],
        Nb = [],
        qb = [],
        ub = [],
        Ib = [],
        fb = [],
        kb = [],
        ab = [],
        Kb = [],
        jb = [],
        Gb = [],
        Cb = [],
        nb = [],
        Pb = [],
        Qb = [],
        Db = [],
        wb = [],
        hb = [],
        Zb = [],
        Jb = [],
        Ob = [],
        db = [],
        cb = [],
        vb = [],
        Eb = [],
        Lb = [],
        Yb = [],
        Ab = [],
        yb = [],
        Vb = [],
        ib = [],
        Wb = [],
        zb = [],
        Ub = [],
        pb = [],
        sb = [],
        Bb = [],
        Mb = [],
        Fb = [],
        Rb = [],
        Tb = [],
        ob = [],
        lb = [],
        mb = [],
        eb = [],
        rb = [],
        SX = [],
        HX = [],
        gX = [],
        tX = [],
        bX = [],
        XX = [],
        xX = [],
        NX = [],
        qX = [],
        uX = [],
        IX = [],
        fX = [],
        kX = [],
        aX = [],
        KX = [],
        jX = [],
        GX = [];
      return SS = class extends zg {
        get directIntensity() {
          return (0, JS.e)(this, HS, "f")
        }
        set directIntensity(SS) {
          (0, JS.h)(this, HS, SS, "f")
        }
        get emissiveIntensity() {
          return (0, JS.e)(this, gS, "f")
        }
        set emissiveIntensity(SS) {
          (0, JS.h)(this, gS, SS, "f")
        }
        get environmentIntensity() {
          return (0, JS.e)(this, tS, "f")
        }
        set environmentIntensity(SS) {
          (0, JS.h)(this, tS, SS, "f")
        }
        get specularIntensity() {
          return (0, JS.e)(this, bS, "f")
        }
        set specularIntensity(SS) {
          (0, JS.h)(this, bS, SS, "f")
        }
        get disableBumpMap() {
          return (0, JS.e)(this, xS, "f")
        }
        set disableBumpMap(SS) {
          (0, JS.h)(this, xS, SS, "f")
        }
        get albedoTexture() {
          return (0, JS.e)(this, NS, "f")
        }
        set albedoTexture(SS) {
          (0, JS.h)(this, NS, SS, "f")
        }
        get baseWeightTexture() {
          return (0, JS.e)(this, qS, "f")
        }
        set baseWeightTexture(SS) {
          (0, JS.h)(this, qS, SS, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, JS.e)(this, uS, "f")
        }
        set baseDiffuseRoughnessTexture(SS) {
          (0, JS.h)(this, uS, SS, "f")
        }
        get ambientTexture() {
          return (0, JS.e)(this, IS, "f")
        }
        set ambientTexture(SS) {
          (0, JS.h)(this, IS, SS, "f")
        }
        get ambientTextureStrength() {
          return (0, JS.e)(this, fS, "f")
        }
        set ambientTextureStrength(SS) {
          (0, JS.h)(this, fS, SS, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, JS.e)(this, kS, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(SS) {
          (0, JS.h)(this, kS, SS, "f")
        }
        get opacityTexture() {
          return (0, JS.e)(this, aS, "f")
        }
        set opacityTexture(SS) {
          (0, JS.h)(this, aS, SS, "f")
        }
        get reflectionTexture() {
          return (0, JS.e)(this, KS, "f")
        }
        set reflectionTexture(SS) {
          (0, JS.h)(this, KS, SS, "f")
        }
        get emissiveTexture() {
          return (0, JS.e)(this, jS, "f")
        }
        set emissiveTexture(SS) {
          (0, JS.h)(this, jS, SS, "f")
        }
        get reflectivityTexture() {
          return (0, JS.e)(this, GS, "f")
        }
        set reflectivityTexture(SS) {
          (0, JS.h)(this, GS, SS, "f")
        }
        get metallicTexture() {
          return (0, JS.e)(this, CS, "f")
        }
        set metallicTexture(SS) {
          (0, JS.h)(this, CS, SS, "f")
        }
        get metallic() {
          return (0, JS.e)(this, nS, "f")
        }
        set metallic(SS) {
          (0, JS.h)(this, nS, SS, "f")
        }
        get roughness() {
          return (0, JS.e)(this, PS, "f")
        }
        set roughness(SS) {
          (0, JS.h)(this, PS, SS, "f")
        }
        get metallicF0Factor() {
          return (0, JS.e)(this, QS, "f")
        }
        set metallicF0Factor(SS) {
          (0, JS.h)(this, QS, SS, "f")
        }
        get metallicReflectanceColor() {
          return (0, JS.e)(this, DS, "f")
        }
        set metallicReflectanceColor(SS) {
          (0, JS.h)(this, DS, SS, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, JS.e)(this, wS, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(SS) {
          (0, JS.h)(this, wS, SS, "f")
        }
        get metallicReflectanceTexture() {
          return (0, JS.e)(this, hS, "f")
        }
        set metallicReflectanceTexture(SS) {
          (0, JS.h)(this, hS, SS, "f")
        }
        get reflectanceTexture() {
          return (0, JS.e)(this, ZS, "f")
        }
        set reflectanceTexture(SS) {
          (0, JS.h)(this, ZS, SS, "f")
        }
        get microSurfaceTexture() {
          return (0, JS.e)(this, dS, "f")
        }
        set microSurfaceTexture(SS) {
          (0, JS.h)(this, dS, SS, "f")
        }
        get bumpTexture() {
          return (0, JS.e)(this, cS, "f")
        }
        set bumpTexture(SS) {
          (0, JS.h)(this, cS, SS, "f")
        }
        get lightmapTexture() {
          return (0, JS.e)(this, vS, "f")
        }
        set lightmapTexture(SS) {
          (0, JS.h)(this, vS, SS, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(SS) {
          this.subSurface.refractionTexture = SS, SS ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, JS.e)(this, ES, "f")
        }
        set ambientColor(SS) {
          (0, JS.h)(this, ES, SS, "f")
        }
        get albedoColor() {
          return (0, JS.e)(this, LS, "f")
        }
        set albedoColor(SS) {
          (0, JS.h)(this, LS, SS, "f")
        }
        get baseWeight() {
          return (0, JS.e)(this, YS, "f")
        }
        set baseWeight(SS) {
          (0, JS.h)(this, YS, SS, "f")
        }
        get baseDiffuseRoughness() {
          return (0, JS.e)(this, yS, "f")
        }
        set baseDiffuseRoughness(SS) {
          (0, JS.h)(this, yS, SS, "f")
        }
        get reflectivityColor() {
          return (0, JS.e)(this, VS, "f")
        }
        set reflectivityColor(SS) {
          (0, JS.h)(this, VS, SS, "f")
        }
        get reflectionColor() {
          return (0, JS.e)(this, iS, "f")
        }
        set reflectionColor(SS) {
          (0, JS.h)(this, iS, SS, "f")
        }
        get emissiveColor() {
          return (0, JS.e)(this, WS, "f")
        }
        set emissiveColor(SS) {
          (0, JS.h)(this, WS, SS, "f")
        }
        get microSurface() {
          return (0, JS.e)(this, zS, "f")
        }
        set microSurface(SS) {
          (0, JS.h)(this, zS, SS, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(SS) {
          this.subSurface.indexOfRefraction = SS
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(SS) {
          this.subSurface.invertRefractionY = SS
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(SS) {
          this.subSurface.linkRefractionWithTransparency = SS, SS && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, JS.e)(this, US, "f")
        }
        set useLightmapAsShadowmap(SS) {
          (0, JS.h)(this, US, SS, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, JS.e)(this, pS, "f")
        }
        set useAlphaFromAlbedoTexture(SS) {
          (0, JS.h)(this, pS, SS, "f")
        }
        get forceAlphaTest() {
          return (0, JS.e)(this, sS, "f")
        }
        set forceAlphaTest(SS) {
          (0, JS.h)(this, sS, SS, "f")
        }
        get alphaCutOff() {
          return (0, JS.e)(this, BS, "f")
        }
        set alphaCutOff(SS) {
          (0, JS.h)(this, BS, SS, "f")
        }
        get useSpecularOverAlpha() {
          return (0, JS.e)(this, MS, "f")
        }
        set useSpecularOverAlpha(SS) {
          (0, JS.h)(this, MS, SS, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, JS.e)(this, RS, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(SS) {
          (0, JS.h)(this, RS, SS, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, JS.e)(this, TS, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(SS) {
          (0, JS.h)(this, TS, SS, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, JS.e)(this, oS, "f")
        }
        set useRoughnessFromMetallicTextureGreen(SS) {
          (0, JS.h)(this, oS, SS, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, JS.e)(this, lS, "f")
        }
        set useMetallnessFromMetallicTextureBlue(SS) {
          (0, JS.h)(this, lS, SS, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, JS.e)(this, mS, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(SS) {
          (0, JS.h)(this, mS, SS, "f")
        }
        get useAmbientInGrayScale() {
          return (0, JS.e)(this, eS, "f")
        }
        set useAmbientInGrayScale(SS) {
          (0, JS.h)(this, eS, SS, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, JS.e)(this, rS, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(SS) {
          (0, JS.h)(this, rS, SS, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === wH.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(SS) {
          SS !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = SS ? wH.LIGHTFALLOFF_PHYSICAL : wH.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === wH.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(SS) {
          SS !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = SS ? wH.LIGHTFALLOFF_GLTF : wH.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, JS.e)(this, SH, "f")
        }
        set useRadianceOverAlpha(SS) {
          (0, JS.h)(this, SH, SS, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, JS.e)(this, HH, "f")
        }
        set useObjectSpaceNormalMap(SS) {
          (0, JS.h)(this, HH, SS, "f")
        }
        get useParallax() {
          return (0, JS.e)(this, gH, "f")
        }
        set useParallax(SS) {
          (0, JS.h)(this, gH, SS, "f")
        }
        get useParallaxOcclusion() {
          return (0, JS.e)(this, tH, "f")
        }
        set useParallaxOcclusion(SS) {
          (0, JS.h)(this, tH, SS, "f")
        }
        get parallaxScaleBias() {
          return (0, JS.e)(this, bH, "f")
        }
        set parallaxScaleBias(SS) {
          (0, JS.h)(this, bH, SS, "f")
        }
        get disableLighting() {
          return (0, JS.e)(this, XH, "f")
        }
        set disableLighting(SS) {
          (0, JS.h)(this, XH, SS, "f")
        }
        get forceIrradianceInFragment() {
          return (0, JS.e)(this, xH, "f")
        }
        set forceIrradianceInFragment(SS) {
          (0, JS.h)(this, xH, SS, "f")
        }
        get maxSimultaneousLights() {
          return (0, JS.e)(this, NH, "f")
        }
        set maxSimultaneousLights(SS) {
          (0, JS.h)(this, NH, SS, "f")
        }
        get invertNormalMapX() {
          return (0, JS.e)(this, qH, "f")
        }
        set invertNormalMapX(SS) {
          (0, JS.h)(this, qH, SS, "f")
        }
        get invertNormalMapY() {
          return (0, JS.e)(this, uH, "f")
        }
        set invertNormalMapY(SS) {
          (0, JS.h)(this, uH, SS, "f")
        }
        get twoSidedLighting() {
          return (0, JS.e)(this, IH, "f")
        }
        set twoSidedLighting(SS) {
          (0, JS.h)(this, IH, SS, "f")
        }
        get useAlphaFresnel() {
          return (0, JS.e)(this, fH, "f")
        }
        set useAlphaFresnel(SS) {
          (0, JS.h)(this, fH, SS, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, JS.e)(this, kH, "f")
        }
        set useLinearAlphaFresnel(SS) {
          (0, JS.h)(this, kH, SS, "f")
        }
        get environmentBRDFTexture() {
          return (0, JS.e)(this, aH, "f")
        }
        set environmentBRDFTexture(SS) {
          (0, JS.h)(this, aH, SS, "f")
        }
        get forceNormalForward() {
          return (0, JS.e)(this, KH, "f")
        }
        set forceNormalForward(SS) {
          (0, JS.h)(this, KH, SS, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, JS.e)(this, jH, "f")
        }
        set enableSpecularAntiAliasing(SS) {
          (0, JS.h)(this, jH, SS, "f")
        }
        get useHorizonOcclusion() {
          return (0, JS.e)(this, GH, "f")
        }
        set useHorizonOcclusion(SS) {
          (0, JS.h)(this, GH, SS, "f")
        }
        get useRadianceOcclusion() {
          return (0, JS.e)(this, CH, "f")
        }
        set useRadianceOcclusion(SS) {
          (0, JS.h)(this, CH, SS, "f")
        }
        get unlit() {
          return (0, JS.e)(this, nH, "f")
        }
        set unlit(SS) {
          (0, JS.h)(this, nH, SS, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, JS.e)(this, PH, "f")
        }
        set applyDecalMapAfterDetailMap(SS) {
          (0, JS.h)(this, PH, SS, "f")
        }
        constructor(XS, OS) {
          super(XS, OS, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), HS.set(this, ((0, JS.k)(this, Ug), (0, JS.k)(this, pg, 1))), gS.set(this, ((0, JS.k)(this, sg), (0, JS.k)(this, Bg, 1))), tS.set(this, ((0, JS.k)(this, Mg), (0, JS.k)(this, Fg, 1))), bS.set(this, ((0, JS.k)(this, Rg), (0, JS.k)(this, Tg, 1))), xS.set(this, ((0, JS.k)(this, og), (0, JS.k)(this, lg, !1))), NS.set(this, ((0, JS.k)(this, mg), (0, JS.k)(this, eg, void 0))), qS.set(this, ((0, JS.k)(this, rg), (0, JS.k)(this, St, void 0))), uS.set(this, ((0, JS.k)(this, Ht), (0, JS.k)(this, gt, void 0))), IS.set(this, ((0, JS.k)(this, tt), (0, JS.k)(this, bt, void 0))), fS.set(this, ((0, JS.k)(this, Xt), (0, JS.k)(this, xt, 1))), kS.set(this, ((0, JS.k)(this, Nt), (0, JS.k)(this, qt, SS.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), aS.set(this, ((0, JS.k)(this, ut), (0, JS.k)(this, It, void 0))), KS.set(this, ((0, JS.k)(this, ft), (0, JS.k)(this, kt, void 0))), jS.set(this, ((0, JS.k)(this, Kt), (0, JS.k)(this, jt, void 0))), GS.set(this, ((0, JS.k)(this, Gt), (0, JS.k)(this, Ct, void 0))), CS.set(this, ((0, JS.k)(this, nt), (0, JS.k)(this, Pt, void 0))), nS.set(this, ((0, JS.k)(this, Qt), (0, JS.k)(this, Dt, void 0))), PS.set(this, ((0, JS.k)(this, wt), (0, JS.k)(this, ht, void 0))), QS.set(this, ((0, JS.k)(this, Zt), (0, JS.k)(this, Jt, 1))), DS.set(this, ((0, JS.k)(this, Ot), (0, JS.k)(this, dt, FS.b.White()))), wS.set(this, ((0, JS.k)(this, ct), (0, JS.k)(this, vt, !1))), hS.set(this, ((0, JS.k)(this, Et), (0, JS.k)(this, Lt, void 0))), ZS.set(this, ((0, JS.k)(this, Yt), (0, JS.k)(this, At, void 0))), dS.set(this, ((0, JS.k)(this, yt), (0, JS.k)(this, Vt, void 0))), cS.set(this, ((0, JS.k)(this, it), (0, JS.k)(this, Wt, void 0))), vS.set(this, ((0, JS.k)(this, zt), (0, JS.k)(this, Ut, void 0))), ES.set(this, ((0, JS.k)(this, pt), (0, JS.k)(this, st, new FS.b(0, 0, 0)))), LS.set(this, ((0, JS.k)(this, Bt), (0, JS.k)(this, Mt, new FS.b(1, 1, 1)))), YS.set(this, ((0, JS.k)(this, Ft), (0, JS.k)(this, Rt, 1))), yS.set(this, ((0, JS.k)(this, Tt), (0, JS.k)(this, ot, void 0))), VS.set(this, ((0, JS.k)(this, lt), (0, JS.k)(this, mt, new FS.b(1, 1, 1)))), iS.set(this, ((0, JS.k)(this, et), (0, JS.k)(this, rt, new FS.b(1, 1, 1)))), WS.set(this, ((0, JS.k)(this, Sb), (0, JS.k)(this, Hb, new FS.b(0, 0, 0)))), zS.set(this, ((0, JS.k)(this, gb), (0, JS.k)(this, tb, 1))), US.set(this, ((0, JS.k)(this, bb), (0, JS.k)(this, Xb, !1))), pS.set(this, ((0, JS.k)(this, xb), (0, JS.k)(this, Nb, !1))), sS.set(this, ((0, JS.k)(this, qb), (0, JS.k)(this, ub, !1))), BS.set(this, ((0, JS.k)(this, Ib), (0, JS.k)(this, fb, .4))), MS.set(this, ((0, JS.k)(this, kb), (0, JS.k)(this, ab, !0))), RS.set(this, ((0, JS.k)(this, Kb), (0, JS.k)(this, jb, !1))), TS.set(this, ((0, JS.k)(this, Gb), (0, JS.k)(this, Cb, !0))), oS.set(this, ((0, JS.k)(this, nb), (0, JS.k)(this, Pb, !1))), lS.set(this, ((0, JS.k)(this, Qb), (0, JS.k)(this, Db, !1))), mS.set(this, ((0, JS.k)(this, wb), (0, JS.k)(this, hb, !1))), eS.set(this, ((0, JS.k)(this, Zb), (0, JS.k)(this, Jb, !1))), rS.set(this, ((0, JS.k)(this, Ob), (0, JS.k)(this, db, !1))), SH.set(this, ((0, JS.k)(this, cb), (0, JS.k)(this, vb, !0))), HH.set(this, ((0, JS.k)(this, Eb), (0, JS.k)(this, Lb, !1))), gH.set(this, ((0, JS.k)(this, Yb), (0, JS.k)(this, Ab, !1))), tH.set(this, ((0, JS.k)(this, yb), (0, JS.k)(this, Vb, !1))), bH.set(this, ((0, JS.k)(this, ib), (0, JS.k)(this, Wb, .05))), XH.set(this, ((0, JS.k)(this, zb), (0, JS.k)(this, Ub, !1))), xH.set(this, ((0, JS.k)(this, pb), (0, JS.k)(this, sb, !1))), NH.set(this, ((0, JS.k)(this, Bb), (0, JS.k)(this, Mb, 4))), qH.set(this, ((0, JS.k)(this, Fb), (0, JS.k)(this, Rb, !1))), uH.set(this, ((0, JS.k)(this, Tb), (0, JS.k)(this, ob, !1))), IH.set(this, ((0, JS.k)(this, lb), (0, JS.k)(this, mb, !1))), fH.set(this, ((0, JS.k)(this, eb), (0, JS.k)(this, rb, !1))), kH.set(this, ((0, JS.k)(this, SX), (0, JS.k)(this, HX, !1))), aH.set(this, ((0, JS.k)(this, gX), (0, JS.k)(this, tX, null))), KH.set(this, ((0, JS.k)(this, bX), (0, JS.k)(this, XX, !1))), jH.set(this, ((0, JS.k)(this, xX), (0, JS.k)(this, NX, !1))), GH.set(this, ((0, JS.k)(this, qX), (0, JS.k)(this, uX, !0))), CH.set(this, ((0, JS.k)(this, IX), (0, JS.k)(this, fX, !0))), nH.set(this, ((0, JS.k)(this, kX), (0, JS.k)(this, aX, !1))), PH.set(this, ((0, JS.k)(this, KX), (0, JS.k)(this, jX, !1))), (0, JS.k)(this, GX), this._environmentBRDFTexture = AS(this.lL())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(HS) {
          let gS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const bS = hH.b.Clone((() => new SS(HS, this.lL())), this, {
            cloneTexturesOnlyOnce: gS
          });
          return bS.id = HS, bS.name = HS, this.stencil.copyTo(bS.stencil), this._clonePlugins(bS, tS), bS
        }
        serialize() {
          const SS = super.serialize();
          return SS.customType = "BABYLON.PBRMaterial", SS
        }
        static Parse(HS, gS, tS) {
          const bS = hH.b.Parse((() => new SS(HS.name, gS)), HS, gS, tS);
          return HS.stencil && bS.stencil.parse(HS.stencil, gS, tS), XS.d._ParsePlugins(HS, bS, gS, tS), HS.clearCoat && bS.clearCoat.parse(HS.clearCoat, gS, tS), HS.anisotropy && bS.anisotropy.parse(HS.anisotropy, gS, tS), HS.brdf && bS.brdf.parse(HS.brdf, gS, tS), HS.sheen && bS.sheen.parse(HS.sheen, gS, tS), HS.subSurface && bS.subSurface.parse(HS.subSurface, gS, tS), HS.iridescence && bS.iridescence.parse(HS.iridescence, gS, tS), bS
        }
      }, HS = new WeakMap, gS = new WeakMap, tS = new WeakMap, bS = new WeakMap, xS = new WeakMap, NS = new WeakMap, qS = new WeakMap, uS = new WeakMap, IS = new WeakMap, fS = new WeakMap, kS = new WeakMap, aS = new WeakMap, KS = new WeakMap, jS = new WeakMap, GS = new WeakMap, CS = new WeakMap, nS = new WeakMap, PS = new WeakMap, QS = new WeakMap, DS = new WeakMap, wS = new WeakMap, hS = new WeakMap, ZS = new WeakMap, dS = new WeakMap, cS = new WeakMap, vS = new WeakMap, ES = new WeakMap, LS = new WeakMap, YS = new WeakMap, yS = new WeakMap, VS = new WeakMap, iS = new WeakMap, WS = new WeakMap, zS = new WeakMap, US = new WeakMap, pS = new WeakMap, sS = new WeakMap, BS = new WeakMap, MS = new WeakMap, RS = new WeakMap, TS = new WeakMap, oS = new WeakMap, lS = new WeakMap, mS = new WeakMap, eS = new WeakMap, rS = new WeakMap, SH = new WeakMap, HH = new WeakMap, gH = new WeakMap, tH = new WeakMap, bH = new WeakMap, XH = new WeakMap, xH = new WeakMap, NH = new WeakMap, qH = new WeakMap, uH = new WeakMap, IH = new WeakMap, fH = new WeakMap, kH = new WeakMap, aH = new WeakMap, KH = new WeakMap, jH = new WeakMap, GH = new WeakMap, CH = new WeakMap, nH = new WeakMap, PH = new WeakMap, (() => {
        const HS = "function" === typeof Symbol && Symbol.metadata ? Object.create(zg[Symbol.metadata] ?? null) : void 0;
        QH = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], DH = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], ZH = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], JH = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], OH = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], dH = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], cH = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], vH = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], EH = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], LH = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], YH = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], AH = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], yH = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], VH = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], iH = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], WH = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], zH = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], UH = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], pH = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], sH = [(0, OS.k)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], BH = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], MH = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], FH = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], RH = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], TH = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], oH = [(0, OS.B)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty", null)], lH = [(0, OS.k)("ambient"), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], mH = [(0, OS.k)("albedo"), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], eH = [(0, OS.M)("baseWeight"), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], rH = [(0, OS.M)("baseDiffuseRoughness"), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Sg = [(0, OS.k)("reflectivity"), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Hg = [(0, OS.k)("reflection"), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], gg = [(0, OS.k)("emissive"), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], tg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], bg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Xg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], xg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ng = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], qg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], ug = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Ig = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], fg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], kg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], ag = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Kg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], jg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Gg = [(0, OS.M)()], Cg = [(0, OS.M)()], ng = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Pg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Qg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Dg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], wg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], hg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsLightsDirty")], Zg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Jg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsLightsDirty")], Og = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], dg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], cg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], vg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Eg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Lg = [(0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Yg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Ag = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], yg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], Vg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsTexturesDirty")], ig = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], Wg = [(0, OS.M)(), (0, OS.d)("_markAllSubMeshesAsMiscDirty")], (0, JS.j)(SS, null, QH, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: SS => "directIntensity" in SS,
            get: SS => SS.directIntensity,
            set: (SS, HS) => {
              SS.directIntensity = HS
            }
          },
          metadata: HS
        }, pg, sg), (0, JS.j)(SS, null, DH, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: SS => "emissiveIntensity" in SS,
            get: SS => SS.emissiveIntensity,
            set: (SS, HS) => {
              SS.emissiveIntensity = HS
            }
          },
          metadata: HS
        }, Bg, Mg), (0, JS.j)(SS, null, ZH, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: SS => "environmentIntensity" in SS,
            get: SS => SS.environmentIntensity,
            set: (SS, HS) => {
              SS.environmentIntensity = HS
            }
          },
          metadata: HS
        }, Fg, Rg), (0, JS.j)(SS, null, JH, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: SS => "specularIntensity" in SS,
            get: SS => SS.specularIntensity,
            set: (SS, HS) => {
              SS.specularIntensity = HS
            }
          },
          metadata: HS
        }, Tg, og), (0, JS.j)(SS, null, OH, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: SS => "disableBumpMap" in SS,
            get: SS => SS.disableBumpMap,
            set: (SS, HS) => {
              SS.disableBumpMap = HS
            }
          },
          metadata: HS
        }, lg, mg), (0, JS.j)(SS, null, dH, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "albedoTexture" in SS,
            get: SS => SS.albedoTexture,
            set: (SS, HS) => {
              SS.albedoTexture = HS
            }
          },
          metadata: HS
        }, eg, rg), (0, JS.j)(SS, null, cH, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "baseWeightTexture" in SS,
            get: SS => SS.baseWeightTexture,
            set: (SS, HS) => {
              SS.baseWeightTexture = HS
            }
          },
          metadata: HS
        }, St, Ht), (0, JS.j)(SS, null, vH, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "baseDiffuseRoughnessTexture" in SS,
            get: SS => SS.baseDiffuseRoughnessTexture,
            set: (SS, HS) => {
              SS.baseDiffuseRoughnessTexture = HS
            }
          },
          metadata: HS
        }, gt, tt), (0, JS.j)(SS, null, EH, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "ambientTexture" in SS,
            get: SS => SS.ambientTexture,
            set: (SS, HS) => {
              SS.ambientTexture = HS
            }
          },
          metadata: HS
        }, bt, Xt), (0, JS.j)(SS, null, LH, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: SS => "ambientTextureStrength" in SS,
            get: SS => SS.ambientTextureStrength,
            set: (SS, HS) => {
              SS.ambientTextureStrength = HS
            }
          },
          metadata: HS
        }, xt, Nt), (0, JS.j)(SS, null, YH, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: SS => "ambientTextureImpactOnAnalyticalLights" in SS,
            get: SS => SS.ambientTextureImpactOnAnalyticalLights,
            set: (SS, HS) => {
              SS.ambientTextureImpactOnAnalyticalLights = HS
            }
          },
          metadata: HS
        }, qt, ut), (0, JS.j)(SS, null, AH, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "opacityTexture" in SS,
            get: SS => SS.opacityTexture,
            set: (SS, HS) => {
              SS.opacityTexture = HS
            }
          },
          metadata: HS
        }, It, ft), (0, JS.j)(SS, null, yH, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "reflectionTexture" in SS,
            get: SS => SS.reflectionTexture,
            set: (SS, HS) => {
              SS.reflectionTexture = HS
            }
          },
          metadata: HS
        }, kt, Kt), (0, JS.j)(SS, null, VH, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "emissiveTexture" in SS,
            get: SS => SS.emissiveTexture,
            set: (SS, HS) => {
              SS.emissiveTexture = HS
            }
          },
          metadata: HS
        }, jt, Gt), (0, JS.j)(SS, null, iH, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "reflectivityTexture" in SS,
            get: SS => SS.reflectivityTexture,
            set: (SS, HS) => {
              SS.reflectivityTexture = HS
            }
          },
          metadata: HS
        }, Ct, nt), (0, JS.j)(SS, null, WH, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "metallicTexture" in SS,
            get: SS => SS.metallicTexture,
            set: (SS, HS) => {
              SS.metallicTexture = HS
            }
          },
          metadata: HS
        }, Pt, Qt), (0, JS.j)(SS, null, zH, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: SS => "metallic" in SS,
            get: SS => SS.metallic,
            set: (SS, HS) => {
              SS.metallic = HS
            }
          },
          metadata: HS
        }, Dt, wt), (0, JS.j)(SS, null, UH, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: SS => "roughness" in SS,
            get: SS => SS.roughness,
            set: (SS, HS) => {
              SS.roughness = HS
            }
          },
          metadata: HS
        }, ht, Zt), (0, JS.j)(SS, null, pH, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: SS => "metallicF0Factor" in SS,
            get: SS => SS.metallicF0Factor,
            set: (SS, HS) => {
              SS.metallicF0Factor = HS
            }
          },
          metadata: HS
        }, Jt, Ot), (0, JS.j)(SS, null, sH, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: SS => "metallicReflectanceColor" in SS,
            get: SS => SS.metallicReflectanceColor,
            set: (SS, HS) => {
              SS.metallicReflectanceColor = HS
            }
          },
          metadata: HS
        }, dt, ct), (0, JS.j)(SS, null, BH, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "useOnlyMetallicFromMetallicReflectanceTexture" in SS,
            get: SS => SS.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (SS, HS) => {
              SS.useOnlyMetallicFromMetallicReflectanceTexture = HS
            }
          },
          metadata: HS
        }, vt, Et), (0, JS.j)(SS, null, MH, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "metallicReflectanceTexture" in SS,
            get: SS => SS.metallicReflectanceTexture,
            set: (SS, HS) => {
              SS.metallicReflectanceTexture = HS
            }
          },
          metadata: HS
        }, Lt, Yt), (0, JS.j)(SS, null, FH, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "reflectanceTexture" in SS,
            get: SS => SS.reflectanceTexture,
            set: (SS, HS) => {
              SS.reflectanceTexture = HS
            }
          },
          metadata: HS
        }, At, yt), (0, JS.j)(SS, null, RH, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "microSurfaceTexture" in SS,
            get: SS => SS.microSurfaceTexture,
            set: (SS, HS) => {
              SS.microSurfaceTexture = HS
            }
          },
          metadata: HS
        }, Vt, it), (0, JS.j)(SS, null, TH, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "bumpTexture" in SS,
            get: SS => SS.bumpTexture,
            set: (SS, HS) => {
              SS.bumpTexture = HS
            }
          },
          metadata: HS
        }, Wt, zt), (0, JS.j)(SS, null, oH, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "lightmapTexture" in SS,
            get: SS => SS.lightmapTexture,
            set: (SS, HS) => {
              SS.lightmapTexture = HS
            }
          },
          metadata: HS
        }, Ut, pt), (0, JS.j)(SS, null, lH, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: SS => "ambientColor" in SS,
            get: SS => SS.ambientColor,
            set: (SS, HS) => {
              SS.ambientColor = HS
            }
          },
          metadata: HS
        }, st, Bt), (0, JS.j)(SS, null, mH, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: SS => "albedoColor" in SS,
            get: SS => SS.albedoColor,
            set: (SS, HS) => {
              SS.albedoColor = HS
            }
          },
          metadata: HS
        }, Mt, Ft), (0, JS.j)(SS, null, eH, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: SS => "baseWeight" in SS,
            get: SS => SS.baseWeight,
            set: (SS, HS) => {
              SS.baseWeight = HS
            }
          },
          metadata: HS
        }, Rt, Tt), (0, JS.j)(SS, null, rH, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: SS => "baseDiffuseRoughness" in SS,
            get: SS => SS.baseDiffuseRoughness,
            set: (SS, HS) => {
              SS.baseDiffuseRoughness = HS
            }
          },
          metadata: HS
        }, ot, lt), (0, JS.j)(SS, null, Sg, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: SS => "reflectivityColor" in SS,
            get: SS => SS.reflectivityColor,
            set: (SS, HS) => {
              SS.reflectivityColor = HS
            }
          },
          metadata: HS
        }, mt, et), (0, JS.j)(SS, null, Hg, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: SS => "reflectionColor" in SS,
            get: SS => SS.reflectionColor,
            set: (SS, HS) => {
              SS.reflectionColor = HS
            }
          },
          metadata: HS
        }, rt, Sb), (0, JS.j)(SS, null, gg, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: SS => "emissiveColor" in SS,
            get: SS => SS.emissiveColor,
            set: (SS, HS) => {
              SS.emissiveColor = HS
            }
          },
          metadata: HS
        }, Hb, gb), (0, JS.j)(SS, null, tg, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: SS => "microSurface" in SS,
            get: SS => SS.microSurface,
            set: (SS, HS) => {
              SS.microSurface = HS
            }
          },
          metadata: HS
        }, tb, bb), (0, JS.j)(SS, null, bg, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: SS => "useLightmapAsShadowmap" in SS,
            get: SS => SS.useLightmapAsShadowmap,
            set: (SS, HS) => {
              SS.useLightmapAsShadowmap = HS
            }
          },
          metadata: HS
        }, Xb, xb), (0, JS.j)(SS, null, Xg, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "useAlphaFromAlbedoTexture" in SS,
            get: SS => SS.useAlphaFromAlbedoTexture,
            set: (SS, HS) => {
              SS.useAlphaFromAlbedoTexture = HS
            }
          },
          metadata: HS
        }, Nb, qb), (0, JS.j)(SS, null, xg, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: SS => "forceAlphaTest" in SS,
            get: SS => SS.forceAlphaTest,
            set: (SS, HS) => {
              SS.forceAlphaTest = HS
            }
          },
          metadata: HS
        }, ub, Ib), (0, JS.j)(SS, null, Ng, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: SS => "alphaCutOff" in SS,
            get: SS => SS.alphaCutOff,
            set: (SS, HS) => {
              SS.alphaCutOff = HS
            }
          },
          metadata: HS
        }, fb, kb), (0, JS.j)(SS, null, qg, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: SS => "useSpecularOverAlpha" in SS,
            get: SS => SS.useSpecularOverAlpha,
            set: (SS, HS) => {
              SS.useSpecularOverAlpha = HS
            }
          },
          metadata: HS
        }, ab, Kb), (0, JS.j)(SS, null, ug, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: SS => "useMicroSurfaceFromReflectivityMapAlpha" in SS,
            get: SS => SS.useMicroSurfaceFromReflectivityMapAlpha,
            set: (SS, HS) => {
              SS.useMicroSurfaceFromReflectivityMapAlpha = HS
            }
          },
          metadata: HS
        }, jb, Gb), (0, JS.j)(SS, null, Ig, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: SS => "useRoughnessFromMetallicTextureAlpha" in SS,
            get: SS => SS.useRoughnessFromMetallicTextureAlpha,
            set: (SS, HS) => {
              SS.useRoughnessFromMetallicTextureAlpha = HS
            }
          },
          metadata: HS
        }, Cb, nb), (0, JS.j)(SS, null, fg, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: SS => "useRoughnessFromMetallicTextureGreen" in SS,
            get: SS => SS.useRoughnessFromMetallicTextureGreen,
            set: (SS, HS) => {
              SS.useRoughnessFromMetallicTextureGreen = HS
            }
          },
          metadata: HS
        }, Pb, Qb), (0, JS.j)(SS, null, kg, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: SS => "useMetallnessFromMetallicTextureBlue" in SS,
            get: SS => SS.useMetallnessFromMetallicTextureBlue,
            set: (SS, HS) => {
              SS.useMetallnessFromMetallicTextureBlue = HS
            }
          },
          metadata: HS
        }, Db, wb), (0, JS.j)(SS, null, ag, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: SS => "useAmbientOcclusionFromMetallicTextureRed" in SS,
            get: SS => SS.useAmbientOcclusionFromMetallicTextureRed,
            set: (SS, HS) => {
              SS.useAmbientOcclusionFromMetallicTextureRed = HS
            }
          },
          metadata: HS
        }, hb, Zb), (0, JS.j)(SS, null, Kg, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: SS => "useAmbientInGrayScale" in SS,
            get: SS => SS.useAmbientInGrayScale,
            set: (SS, HS) => {
              SS.useAmbientInGrayScale = HS
            }
          },
          metadata: HS
        }, Jb, Ob), (0, JS.j)(SS, null, jg, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: SS => "useAutoMicroSurfaceFromReflectivityMap" in SS,
            get: SS => SS.useAutoMicroSurfaceFromReflectivityMap,
            set: (SS, HS) => {
              SS.useAutoMicroSurfaceFromReflectivityMap = HS
            }
          },
          metadata: HS
        }, db, cb), (0, JS.j)(SS, null, Gg, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: SS => "usePhysicalLightFalloff" in SS,
            get: SS => SS.usePhysicalLightFalloff
          },
          metadata: HS
        }, null, Ug), (0, JS.j)(SS, null, Cg, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: SS => "useGLTFLightFalloff" in SS,
            get: SS => SS.useGLTFLightFalloff
          },
          metadata: HS
        }, null, Ug), (0, JS.j)(SS, null, ng, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: SS => "useRadianceOverAlpha" in SS,
            get: SS => SS.useRadianceOverAlpha,
            set: (SS, HS) => {
              SS.useRadianceOverAlpha = HS
            }
          },
          metadata: HS
        }, vb, Eb), (0, JS.j)(SS, null, Pg, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: SS => "useObjectSpaceNormalMap" in SS,
            get: SS => SS.useObjectSpaceNormalMap,
            set: (SS, HS) => {
              SS.useObjectSpaceNormalMap = HS
            }
          },
          metadata: HS
        }, Lb, Yb), (0, JS.j)(SS, null, Qg, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: SS => "useParallax" in SS,
            get: SS => SS.useParallax,
            set: (SS, HS) => {
              SS.useParallax = HS
            }
          },
          metadata: HS
        }, Ab, yb), (0, JS.j)(SS, null, Dg, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: SS => "useParallaxOcclusion" in SS,
            get: SS => SS.useParallaxOcclusion,
            set: (SS, HS) => {
              SS.useParallaxOcclusion = HS
            }
          },
          metadata: HS
        }, Vb, ib), (0, JS.j)(SS, null, wg, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: SS => "parallaxScaleBias" in SS,
            get: SS => SS.parallaxScaleBias,
            set: (SS, HS) => {
              SS.parallaxScaleBias = HS
            }
          },
          metadata: HS
        }, Wb, zb), (0, JS.j)(SS, null, hg, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: SS => "disableLighting" in SS,
            get: SS => SS.disableLighting,
            set: (SS, HS) => {
              SS.disableLighting = HS
            }
          },
          metadata: HS
        }, Ub, pb), (0, JS.j)(SS, null, Zg, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: SS => "forceIrradianceInFragment" in SS,
            get: SS => SS.forceIrradianceInFragment,
            set: (SS, HS) => {
              SS.forceIrradianceInFragment = HS
            }
          },
          metadata: HS
        }, sb, Bb), (0, JS.j)(SS, null, Jg, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: SS => "maxSimultaneousLights" in SS,
            get: SS => SS.maxSimultaneousLights,
            set: (SS, HS) => {
              SS.maxSimultaneousLights = HS
            }
          },
          metadata: HS
        }, Mb, Fb), (0, JS.j)(SS, null, Og, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: SS => "invertNormalMapX" in SS,
            get: SS => SS.invertNormalMapX,
            set: (SS, HS) => {
              SS.invertNormalMapX = HS
            }
          },
          metadata: HS
        }, Rb, Tb), (0, JS.j)(SS, null, dg, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: SS => "invertNormalMapY" in SS,
            get: SS => SS.invertNormalMapY,
            set: (SS, HS) => {
              SS.invertNormalMapY = HS
            }
          },
          metadata: HS
        }, ob, lb), (0, JS.j)(SS, null, cg, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: SS => "twoSidedLighting" in SS,
            get: SS => SS.twoSidedLighting,
            set: (SS, HS) => {
              SS.twoSidedLighting = HS
            }
          },
          metadata: HS
        }, mb, eb), (0, JS.j)(SS, null, vg, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: SS => "useAlphaFresnel" in SS,
            get: SS => SS.useAlphaFresnel,
            set: (SS, HS) => {
              SS.useAlphaFresnel = HS
            }
          },
          metadata: HS
        }, rb, SX), (0, JS.j)(SS, null, Eg, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: SS => "useLinearAlphaFresnel" in SS,
            get: SS => SS.useLinearAlphaFresnel,
            set: (SS, HS) => {
              SS.useLinearAlphaFresnel = HS
            }
          },
          metadata: HS
        }, HX, gX), (0, JS.j)(SS, null, Lg, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: SS => "environmentBRDFTexture" in SS,
            get: SS => SS.environmentBRDFTexture,
            set: (SS, HS) => {
              SS.environmentBRDFTexture = HS
            }
          },
          metadata: HS
        }, tX, bX), (0, JS.j)(SS, null, Yg, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: SS => "forceNormalForward" in SS,
            get: SS => SS.forceNormalForward,
            set: (SS, HS) => {
              SS.forceNormalForward = HS
            }
          },
          metadata: HS
        }, XX, xX), (0, JS.j)(SS, null, Ag, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: SS => "enableSpecularAntiAliasing" in SS,
            get: SS => SS.enableSpecularAntiAliasing,
            set: (SS, HS) => {
              SS.enableSpecularAntiAliasing = HS
            }
          },
          metadata: HS
        }, NX, qX), (0, JS.j)(SS, null, yg, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: SS => "useHorizonOcclusion" in SS,
            get: SS => SS.useHorizonOcclusion,
            set: (SS, HS) => {
              SS.useHorizonOcclusion = HS
            }
          },
          metadata: HS
        }, uX, IX), (0, JS.j)(SS, null, Vg, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: SS => "useRadianceOcclusion" in SS,
            get: SS => SS.useRadianceOcclusion,
            set: (SS, HS) => {
              SS.useRadianceOcclusion = HS
            }
          },
          metadata: HS
        }, fX, kX), (0, JS.j)(SS, null, ig, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: SS => "unlit" in SS,
            get: SS => SS.unlit,
            set: (SS, HS) => {
              SS.unlit = HS
            }
          },
          metadata: HS
        }, aX, KX), (0, JS.j)(SS, null, Wg, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: SS => "applyDecalMapAfterDetailMap" in SS,
            get: SS => SS.applyDecalMapAfterDetailMap,
            set: (SS, HS) => {
              SS.applyDecalMapAfterDetailMap = HS
            }
          },
          metadata: HS
        }, jX, GX), HS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: HS
        })
      })(), SS.PBRMATERIAL_OPAQUE = wH.PBRMATERIAL_OPAQUE, SS.PBRMATERIAL_ALPHATEST = wH.PBRMATERIAL_ALPHATEST, SS.PBRMATERIAL_ALPHABLEND = wH.PBRMATERIAL_ALPHABLEND, SS.PBRMATERIAL_ALPHATESTANDBLEND = wH.PBRMATERIAL_ALPHATESTANDBLEND, SS.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = wH.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, SS
    })();
    const ib = "KHR_materials_diffuse_transmission";

    function Wb(SS, HS) {
      const gS = HS.subSurface;
      let tS = null;
      return gS.translucencyIntensityTexture ? tS = gS.translucencyIntensityTexture : gS.thicknessTexture && gS.useMaskFromThicknessTexture && (tS = gS.thicknessTexture), tS && !gS.useGltfStyleTextures ? (dS.b.Warn(`${SS}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${HS.name}`, 1), null) : tS
    }
    class zb {
      constructor(SS) {
        this.name = ib, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = SS
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(SS, HS, gS) {
        const tS = [];
        if (gS instanceof Vb && this._isExtensionEnabled(gS)) {
          const HS = Wb(SS, gS);
          return HS && tS.push(HS), gS.subSurface.translucencyColorTexture && tS.push(gS.subSurface.translucencyColorTexture), tS
        }
        return tS
      }
      _isExtensionEnabled(SS) {
        if (SS.unlit) return !1;
        const HS = SS.subSurface;
        return !!HS.isTranslucencyEnabled && (!SS.unlit && !HS.useAlbedoToTintTranslucency && HS.useGltfStyleTextures && 1 === HS.volumeIndexOfRefraction && 0 === HS.minimumThickness && 0 === HS.maximumThickness)
      }
      postExportMaterialAsync(SS, HS, gS) {
        return new Promise((tS => {
          if (gS instanceof Vb && this._isExtensionEnabled(gS)) {
            this._wasUsed = !0;
            const tS = gS.subSurface,
              bS = Wb(SS, gS),
              XS = 0 == tS.translucencyIntensity ? void 0 : tS.translucencyIntensity,
              xS = this._exporter._materialExporter.getTextureInfo(bS) ?? void 0,
              NS = !tS.translucencyColor || tS.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : tS.translucencyColor.lgS(),
              qS = this._exporter._materialExporter.getTextureInfo(tS.translucencyColorTexture) ?? void 0,
              uS = {
                diffuseTransmissionFactor: XS,
                diffuseTransmissionTexture: xS,
                diffuseTransmissionColorFactor: NS,
                diffuseTransmissionColorTexture: qS
              };
            (xS || qS) && this._exporter._materialNeedsUVsSet.add(gS), HS.extensions = HS.extensions || {}, HS.extensions[ib] = uS
          }
          tS(HS)
        }))
      }
    }
    let Ub = !1;

    function pb() {
      Ub || (Ub = !0, yt.RegisterExtension(ib, (SS => new zb(SS))))
    }
    pb();
    const sb = "KHR_materials_dispersion";
    class Bb {
      constructor() {
        this.name = sb, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(SS) {
        if (SS.unlit) return !1;
        const HS = SS.subSurface;
        return !(!HS.isRefractionEnabled && !HS.isDispersionEnabled)
      }
      postExportMaterialAsync(SS, HS, gS) {
        return new Promise((SS => {
          if (gS instanceof Vb && this._isExtensionEnabled(gS)) {
            this._wasUsed = !0;
            const SS = {
              dispersion: gS.subSurface.dispersion
            };
            HS.extensions = HS.extensions || {}, HS.extensions[sb] = SS
          }
          SS(HS)
        }))
      }
    }
    let Mb = !1;

    function Fb() {
      Mb || (Mb = !0, yt.RegisterExtension(sb, (() => new Bb)))
    }
    Fb();
    const Rb = "KHR_materials_emissive_strength";
    class Tb {
      constructor() {
        this.name = Rb, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(SS, HS, gS) {
        return await new Promise((SS => {
          if (!(gS instanceof Vb)) return SS(HS);
          const tS = gS.emissiveColor.scale(gS.emissiveIntensity),
            bS = Math.max(...tS.lgS());
          if (bS > 1) {
            HS.emissiveFactor = tS.scale(1 / bS).lgS(), this._wasUsed = !0;
            const SS = {
              emissiveStrength: bS
            };
            HS.extensions || (HS.extensions = {}), HS.extensions[Rb] = SS
          } else HS.emissiveFactor = tS.lgS();
          return SS(HS)
        }))
      }
    }
    let ob = !1;

    function lb() {
      ob || (ob = !0, yt.RegisterExtension(Rb, (() => new Tb)))
    }
    lb();
    const mb = "KHR_materials_ior";
    class eb {
      constructor() {
        this.name = mb, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(SS) {
        return !SS.unlit && (SS instanceof eH ? 1.5 != SS.specularIor : SS instanceof Vb && (void 0 != SS.indexOfRefraction && 1.5 != SS.indexOfRefraction))
      }
      postExportMaterialAsync(SS, HS, gS) {
        return new Promise((SS => {
          if (gS instanceof Vb && this._isExtensionEnabled(gS)) {
            this._wasUsed = !0;
            const SS = {
              ior: gS.indexOfRefraction
            };
            HS.extensions = HS.extensions || {}, HS.extensions[mb] = SS
          } else if (gS instanceof eH && this._isExtensionEnabled(gS)) {
            this._wasUsed = !0;
            const SS = {
              ior: gS.specularIor
            };
            HS.extensions = HS.extensions || {}, HS.extensions[mb] = SS
          }
          SS(HS)
        }))
      }
    }
    let rb = !1;

    function SX() {
      rb || (rb = !0, yt.RegisterExtension(mb, (() => new eb)))
    }
    SX();
    const HX = "KHR_materials_iridescence";
    class gX {
      constructor(SS) {
        this.name = HX, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = SS
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(SS, HS, gS) {
        const tS = [];
        if (gS instanceof wH) {
          if (gS.iridescence.isEnabled) return gS.iridescence.texture && tS.push(gS.iridescence.texture), gS.iridescence.thicknessTexture && gS.iridescence.thicknessTexture !== gS.iridescence.texture && tS.push(gS.iridescence.thicknessTexture), tS
        } else if (gS instanceof eH && gS.thinFilmWeight > 0) return gS.thinFilmWeightTexture && tS.push(gS.thinFilmWeightTexture), gS.thinFilmThicknessTexture && gS.thinFilmThicknessTexture !== gS.thinFilmWeightTexture && tS.push(gS.thinFilmThicknessTexture), tS;
        return []
      }
      postExportMaterialAsync(SS, HS, gS) {
        return new Promise((SS => {
          if (gS instanceof wH) {
            if (!gS.iridescence.isEnabled) return void SS(HS);
            this._wasUsed = !0, HS.extensions = HS.extensions || {};
            const tS = this._exporter._materialExporter.getTextureInfo(gS.iridescence.texture),
              bS = this._exporter._materialExporter.getTextureInfo(gS.iridescence.thicknessTexture),
              XS = {
                iridescenceFactor: gS.iridescence.intensity,
                iridescenceIor: gS.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: gS.iridescence.minimumThickness,
                iridescenceThicknessMaximum: gS.iridescence.maximumThickness,
                iridescenceTexture: tS ?? void 0,
                iridescenceThicknessTexture: bS ?? void 0
              };
            null === XS.iridescenceTexture && null === XS.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(gS), HS.extensions[HX] = XS
          } else if (gS instanceof eH) {
            if (gS.thinFilmWeight <= 0) return void SS(HS);
            this._wasUsed = !0, HS.extensions = HS.extensions || {};
            const tS = this._exporter._materialExporter.getTextureInfo(gS.thinFilmWeightTexture),
              bS = this._exporter._materialExporter.getTextureInfo(gS.thinFilmThicknessTexture),
              XS = {
                iridescenceFactor: gS.thinFilmWeight,
                iridescenceIor: gS.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * gS.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * gS.thinFilmThickness,
                iridescenceTexture: tS ?? void 0,
                iridescenceThicknessTexture: bS ?? void 0
              };
            null === XS.iridescenceTexture && null === XS.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(gS), HS.extensions[HX] = XS
          }
          SS(HS)
        }))
      }
    }
    let tX = !1;

    function bX() {
      tX || (tX = !0, yt.RegisterExtension(HX, (SS => new gX(SS))))
    }
    bX();
    const XX = "KHR_materials_sheen";
    class xX {
      constructor(SS) {
        this.name = XX, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = SS
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(SS, HS, gS) {
        return gS instanceof Vb && gS.sheen.isEnabled && gS.sheen.texture ? [gS.sheen.texture] : []
      }
      async postExportMaterialAsync(SS, HS, gS) {
        return await new Promise((SS => {
          if (gS instanceof Vb) {
            if (!gS.sheen.isEnabled) return void SS(HS);
            this._wasUsed = !0, null == HS.extensions && (HS.extensions = {});
            const tS = {
              sheenColorFactor: gS.sheen.color.lgS(),
              sheenRoughnessFactor: gS.sheen.roughness ?? 0
            };
            null === tS.sheenColorTexture && null === tS.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(gS), gS.sheen.texture && (tS.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(gS.sheen.texture) ?? void 0), gS.sheen.textureRoughness && !gS.sheen.useRoughnessFromMainTexture ? tS.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(gS.sheen.textureRoughness) ?? void 0 : gS.sheen.texture && gS.sheen.useRoughnessFromMainTexture && (tS.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(gS.sheen.texture) ?? void 0), HS.extensions[XX] = tS
          }
          SS(HS)
        }))
      }
    }
    let NX = !1;

    function qX() {
      NX || (NX = !0, yt.RegisterExtension(XX, (SS => new xX(SS))))
    }
    qX();
    const uX = "KHR_materials_fuzz";

    function IX(SS, HS) {
      const gS = new vS.i(HS.name, HS.lL());
      return gS._texture = SS, gS.coordinatesIndex = HS.coordinatesIndex, HS instanceof vS.i && (gS.uOffset = HS.uOffset, gS.vOffset = HS.vOffset, gS.uScale = HS.uScale, gS.vScale = HS.vScale, gS.wAng = HS.wAng), gS.wrapU = HS.wrapU, gS.wrapV = HS.wrapV, gS
    }
    class fX {
      constructor(SS) {
        this.name = uX, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = SS
      }
      dispose() {
        for (const SS of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[SS].dispose()
        }
        this._mergedTexturesMap = {};
        for (const SS of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[SS].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(SS, HS, gS) {
        if (gS instanceof eH) {
          const SS = [];
          if (gS.fuzzWeight > 0) {
            gS.fuzzWeightTexture && SS.push(gS.fuzzWeightTexture);
            let HS = !1;
            if (gS.fuzzRoughnessTexture && (gS._useFuzzRoughnessFromTextureAlpha ? SS.push(gS.fuzzRoughnessTexture) : HS = !0), gS.fuzzColorTexture && !HS && SS.push(gS.fuzzColorTexture), HS) {
              const HS = function(SS) {
                const HS = SS.fuzzColorTexture,
                  gS = HS && HS.getInternalTexture() ? HS.getInternalTexture().uniqueId : "NoFuzzColor",
                  tS = SS.fuzzRoughnessTexture;
                return `FuzzColor_${gS}_FuzzRoughness_${tS&&tS.getInternalTexture()?tS.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(gS);
              if (!this._cachedInternalTexturesMap[HS]) {
                const SS = await async function(SS) {
                  const HS = SS.lL(),
                    gS = SS.fuzzColorTexture,
                    tS = SS.fuzzRoughnessTexture;
                  return gS || tS ? (await xg("FuzzTexture", ug(gS ? Ng(gS, 0) : qg(1), gS ? Ng(gS, 1) : qg(1), gS ? Ng(gS, 2) : qg(1), tS ? Ng(tS, SS._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : qg(1)), HS)).getInternalTexture() : null
                }(gS);
                SS && (this._cachedInternalTexturesMap[HS] = SS)
              }
              this._cachedInternalTexturesMap[HS] && (gS.fuzzColorTexture && (this._mergedTexturesMap[gS.fuzzColorTexture.uniqueId] = IX(this._cachedInternalTexturesMap[HS], gS.fuzzColorTexture), SS.push(this._mergedTexturesMap[gS.fuzzColorTexture.uniqueId])), gS.fuzzRoughnessTexture && (this._mergedTexturesMap[gS.fuzzRoughnessTexture.uniqueId] = IX(this._cachedInternalTexturesMap[HS], gS.fuzzRoughnessTexture), SS.push(this._mergedTexturesMap[gS.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return SS
        }
        return []
      }
      async postExportMaterialAsync(SS, HS, gS) {
        return await new Promise((SS => {
          if (gS instanceof eH) {
            if (0 == gS.fuzzWeight) return void SS(HS);
            this._wasUsed = !0, null == HS.extensions && (HS.extensions = {});
            const tS = {
              fuzzFactor: gS.fuzzWeight,
              fuzzColorFactor: gS.fuzzColor.lgS(),
              fuzzRoughnessFactor: gS.fuzzRoughness
            };
            let bS, XS;
            gS.fuzzWeightTexture && (tS.fuzzTexture = this._exporter._materialExporter.getTextureInfo(gS.fuzzWeightTexture) ?? void 0), gS.fuzzColorTexture && (bS = this._mergedTexturesMap[gS.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[gS.fuzzColorTexture.uniqueId] : gS.fuzzColorTexture, tS.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(bS) ?? void 0), gS.fuzzRoughnessTexture && (XS = this._mergedTexturesMap[gS.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[gS.fuzzRoughnessTexture.uniqueId] : gS.fuzzRoughnessTexture, tS.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(XS) ?? void 0), null === tS.fuzzColorTexture && null === tS.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(gS), HS.extensions[uX] = tS
          }
          SS(HS)
        }))
      }
    }
    let kX = !1;

    function aX() {
      kX || (kX = !0, yt.RegisterExtension(uX, (SS => new fX(SS))))
    }
    aX();
    const KX = "KHR_materials_specular";
    class jX {
      constructor(SS) {
        this.name = KX, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = SS
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(SS, HS, gS) {
        const tS = [];
        return gS instanceof Vb && this._isExtensionEnabled(gS) ? (gS.metallicReflectanceTexture && tS.push(gS.metallicReflectanceTexture), gS.reflectanceTexture && tS.push(gS.reflectanceTexture), tS) : tS
      }
      _isExtensionEnabled(SS) {
        return !SS.unlit && (void 0 != SS.metallicF0Factor && 1 != SS.metallicF0Factor || void 0 != SS.metallicReflectanceColor && !SS.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(SS))
      }
      _hasTexturesExtension(SS) {
        return null != SS.metallicReflectanceTexture || null != SS.reflectanceTexture
      }
      postExportMaterialAsync(SS, HS, gS) {
        return new Promise((SS => {
          var tS;
          if (gS instanceof Vb && this._isExtensionEnabled(gS)) {
            this._wasUsed = !0, HS.extensions = HS.extensions || {};
            const SS = this._exporter._materialExporter.getTextureInfo(gS.metallicReflectanceTexture) ?? void 0,
              tS = this._exporter._materialExporter.getTextureInfo(gS.reflectanceTexture) ?? void 0,
              bS = {
                specularFactor: 1 == gS.metallicF0Factor ? void 0 : gS.metallicF0Factor,
                specularTexture: SS,
                specularColorFactor: gS.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : gS.metallicReflectanceColor.lgS(),
                specularColorTexture: tS
              };
            this._hasTexturesExtension(gS) && this._exporter._materialNeedsUVsSet.add(gS), HS.extensions[KX] = bS
          } else if (gS instanceof eH) {
            HS.extensions = HS.extensions || {};
            const bS = this._exporter._materialExporter.getTextureInfo(gS.specularWeightTexture) ?? void 0,
              XS = this._exporter._materialExporter.getTextureInfo(gS.specularColorTexture) ?? void 0,
              xS = 1 == gS.specularWeight ? void 0 : gS.specularWeight,
              NS = gS.specularColor.equalsFloats(1, 1, 1) ? void 0 : gS.specularColor.lgS();
            if (!XS && !bS && void 0 === xS && void 0 === NS) return SS(HS);
            this._wasUsed = !0;
            const qS = {
                specularEdgeColorEnabled: !0
              },
              uS = {
                specularFactor: xS,
                specularTexture: bS,
                specularColorFactor: NS,
                specularColorTexture: XS,
                extensions: {}
              };
            uS.extensions.EXT_materials_specular_edge_color = qS, (tS = this._exporter._glTF).extensionsUsed || (tS.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (bS || XS) && this._exporter._materialNeedsUVsSet.add(gS), HS.extensions[KX] = uS
          }
          SS(HS)
        }))
      }
    }
    let GX = !1;

    function CX() {
      GX || (GX = !0, yt.RegisterExtension(KX, (SS => new jX(SS))))
    }
    CX();
    const nX = "KHR_materials_transmission";
    class PX {
      constructor(SS) {
        this.name = nX, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = SS
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(SS, HS, gS) {
        const tS = [];
        if (gS instanceof Vb) {
          if (this._isExtensionEnabled(gS)) return gS.subSurface.refractionIntensityTexture && gS.subSurface.useGltfStyleTextures && tS.push(gS.subSurface.refractionIntensityTexture), tS
        } else gS instanceof eH && (gS.transmissionWeight > 0 && gS.transmissionWeightTexture && (tS.push(gS.transmissionWeightTexture), gS.transmissionColorTexture && tS.push(gS.transmissionColorTexture)), gS.subsurfaceWeight > 0 && gS.subsurfaceWeightTexture && tS.push(gS.subsurfaceWeightTexture));
        return tS
      }
      _isExtensionEnabled(SS) {
        if (SS instanceof eH && !SS.unlit) return SS.transmissionWeight > 0 || SS.subsurfaceWeight > 0;
        if (SS instanceof Vb && !SS.unlit) {
          const HS = SS.subSurface;
          return HS.isRefractionEnabled && void 0 != HS.refractionIntensity && 0 != HS.refractionIntensity || null != HS.refractionIntensityTexture && HS.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(SS, HS, gS) {
        if (!this._isExtensionEnabled(gS)) return HS;
        if (gS instanceof Vb) {
          this._wasUsed = !0;
          const tS = gS.subSurface,
            bS = {
              transmissionFactor: 0 === tS.refractionIntensity ? void 0 : tS.refractionIntensity
            };
          if (tS.refractionIntensityTexture)
            if (tS.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(gS);
              const SS = this._exporter._materialExporter.getTextureInfo(tS.refractionIntensityTexture);
              SS && (bS.transmissionTexture = SS)
            } else dS.b.Warn(`${SS}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          HS.extensions || (HS.extensions = {}), HS.extensions[nX] = bS
        } else if (gS instanceof eH) {
          this._wasUsed = !0;
          const SS = {
            transmissionFactor: (1 - gS.transmissionWeight) * gS.subsurfaceWeight + gS.transmissionWeight
          };
          if (gS.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(gS);
            const HS = this._exporter._materialExporter.getTextureInfo(gS.transmissionWeightTexture);
            HS && (SS.transmissionTexture = HS)
          } else if (gS.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(gS);
            const HS = this._exporter._materialExporter.getTextureInfo(gS.subsurfaceWeightTexture);
            HS && (SS.transmissionTexture = HS)
          }
          if (0 == gS.transmissionDepth && (!gS.transmissionColor.equals(FS.b.White()) || gS.transmissionColorTexture) && HS.pbrMetallicRoughness && (HS.pbrMetallicRoughness.baseColorFactor || (HS.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), HS.pbrMetallicRoughness.baseColorFactor[0] *= gS.transmissionColor.r, HS.pbrMetallicRoughness.baseColorFactor[1] *= gS.transmissionColor.g, HS.pbrMetallicRoughness.baseColorFactor[2] *= gS.transmissionColor.b, gS.transmissionColorTexture && !HS.pbrMetallicRoughness.baseColorTexture)) {
            const SS = this._exporter._materialExporter.getTextureInfo(gS.transmissionColorTexture);
            SS && (HS.pbrMetallicRoughness.baseColorTexture = SS, this._exporter._materialNeedsUVsSet.add(gS))
          }
          HS.extensions || (HS.extensions = {}), HS.extensions[nX] = SS
        }
        return HS
      }
    }
    let QX = !1;

    function DX() {
      QX || (QX = !0, yt.RegisterExtension(nX, (SS => new PX(SS))))
    }
    DX();
    var wX = gS(40310);
    const hX = "KHR_materials_unlit";
    class ZX {
      constructor() {
        this.name = hX, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(SS, HS, gS) {
        return new Promise((SS => {
          let tS = !1;
          gS instanceof Vb ? tS = gS.unlit : gS instanceof wX.i && (tS = gS.disableLighting), tS && (this._wasUsed = !0, null == HS.extensions && (HS.extensions = {}), HS.extensions[hX] = {}), SS(HS)
        }))
      }
    }
    let JX = !1;

    function OX() {
      JX || (JX = !0, yt.RegisterExtension(hX, (() => new ZX)))
    }
    OX();
    const dX = "KHR_materials_volume";
    class cX {
      constructor(SS) {
        this.name = dX, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = SS
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(SS, HS, gS) {
        const tS = [];
        if (gS instanceof Vb) {
          if (this._isExtensionEnabled(gS)) return gS.subSurface.thicknessTexture && tS.push(gS.subSurface.thicknessTexture), tS
        } else gS instanceof eH && (gS.transmissionWeight > 0 || gS.subsurfaceWeight > 0) && gS.geometryThicknessTexture && tS.push(gS.geometryThicknessTexture);
        return tS
      }
      _isExtensionEnabled(SS) {
        if (SS.unlit) return !1;
        const HS = SS.subSurface;
        return !(!HS.isRefractionEnabled && !HS.isTranslucencyEnabled) && (void 0 != HS.maximumThickness && 0 != HS.maximumThickness || void 0 != HS.tintColorAtDistance && HS.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != HS.tintColor && HS.tintColor != FS.b.White() || this._hasTexturesExtension(SS))
      }
      _hasTexturesExtension(SS) {
        return null != SS.subSurface.thicknessTexture
      }
      postExportMaterialAsync(SS, HS, gS) {
        return new Promise((SS => {
          if (gS instanceof Vb && this._isExtensionEnabled(gS)) {
            this._wasUsed = !0;
            const SS = gS.subSurface,
              tS = {
                thicknessFactor: 0 == SS.maximumThickness ? void 0 : SS.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(SS.thicknessTexture) ?? void 0,
                attenuationDistance: SS.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : SS.tintColorAtDistance,
                attenuationColor: SS.tintColor.equalsFloats(1, 1, 1) ? void 0 : SS.tintColor.lgS()
              };
            this._hasTexturesExtension(gS) && this._exporter._materialNeedsUVsSet.add(gS), HS.extensions = HS.extensions || {}, HS.extensions[dX] = tS
          } else if (gS instanceof eH) {
            const SS = gS.transmissionWeight > 0 && !gS.geometryThinWalled,
              tS = gS.subsurfaceWeight > 0 && !gS.geometryThinWalled;
            if (SS || tS) {
              this._wasUsed = !0;
              const bS = gS.geometryThickness,
                XS = this._exporter._materialExporter.getTextureInfo(gS.geometryThicknessTexture) ?? void 0;
              let xS;
              XS && this._exporter._materialNeedsUVsSet.add(gS);
              const NS = FS.b.White().lgS();
              if (SS && gS.transmissionDepth > 0) {
                const SS = 1 / gS.transmissionDepth;
                let HS = new WS.n(-Math.log(gS.transmissionColor.r) * SS, -Math.log(gS.transmissionColor.g) * SS, -Math.log(gS.transmissionColor.b) * SS);
                const tS = new WS.n(gS.transmissionScatter.r * SS, gS.transmissionScatter.g * SS, gS.transmissionScatter.b * SS),
                  bS = HS.subtract(tS),
                  XS = Math.min(bS.x, bS.y, bS.z);
                XS < 0 && (bS.x = bS.x - XS, bS.y = bS.y - XS, bS.z = bS.z - XS), HS = bS.add(tS);
                xS = 1 / Math.max(HS.x, HS.y, HS.z), NS[0] = Math.exp(-HS.x * xS), NS[1] = Math.exp(-HS.y * xS), NS[2] = Math.exp(-HS.z * xS)
              } else xS = Number.MAX_VALUE, NS[0] = 1, NS[1] = 1, NS[2] = 1;
              let qS = 1;
              const uS = FS.b.White().lgS();
              if (tS) {
                const SS = gS.subsurfaceRadius,
                  HS = gS.subsurfaceRadiusScale,
                  tS = new WS.n(HS.r, HS.g, HS.b).multiplyByFloats(SS, SS, SS),
                  bS = new WS.n(1 / Math.max(tS.x, 1e-6), 1 / Math.max(tS.y, 1e-6), 1 / Math.max(tS.z, 1e-6));
                qS = 1 / Math.max(bS.x, bS.y, bS.z), uS[0] = Math.exp(-bS.x * qS), uS[1] = Math.exp(-bS.y * qS), uS[2] = Math.exp(-bS.z * qS)
              }
              const IS = (1 - gS.transmissionWeight) * gS.subsurfaceWeight,
                fS = IS + gS.transmissionWeight,
                kS = 1 / Math.max(fS, 1e-6),
                aS = gS.transmissionWeight * kS,
                KS = IS * kS,
                jS = NS.map(((SS, HS) => SS * aS + uS[HS] * KS)),
                GS = {
                  thicknessFactor: bS,
                  thicknessTexture: XS,
                  attenuationDistance: xS * aS + qS * KS,
                  attenuationColor: jS
                };
              HS.extensions = HS.extensions || {}, HS.extensions[dX] = GS
            }
          }
          SS(HS)
        }))
      }
    }
    let vX = !1;

    function EX() {
      vX || (vX = !0, yt.RegisterExtension(dX, (SS => new cX(SS))))
    }
    EX();
    const LX = "KHR_materials_volume_scatter";
    class YX {
      constructor(SS) {
        this.name = LX, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = SS
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(SS, HS, gS) {
        const tS = [];
        return gS instanceof eH && (gS.transmissionWeight > 0 && gS.transmissionScatterTexture && tS.push(gS.transmissionScatterTexture), gS.subsurfaceWeight > 0 && gS.subsurfaceColorTexture && tS.push(gS.subsurfaceColorTexture)), tS
      }
      _isExtensionEnabled(SS) {
        if (SS.unlit) return !1;
        const HS = SS.transmissionWeight > 0 && !SS.geometryThinWalled && SS.transmissionDepth > 0 && !SS.transmissionScatter.equals(FS.b.Black()),
          gS = SS.subsurfaceWeight > 0 && !SS.geometryThinWalled;
        return !(!HS && !gS)
      }
      postExportMaterialAsync(SS, HS, gS) {
        return new Promise((SS => {
          if (gS instanceof eH && this._isExtensionEnabled(gS)) {
            this._wasUsed = !0;
            let SS = WS.n.Zero(),
              tS = 0;
            if (gS.transmissionWeight > 0) {
              SS = function(SS) {
                const HS = new WS.n(Math.sqrt(1 - SS.x), Math.sqrt(1 - SS.y), Math.sqrt(1 - SS.z)),
                  gS = new WS.n(1, 1, 1),
                  tS = gS.subtract(HS),
                  bS = gS.subtract(new WS.n(.139, .139, .139).multiplyInPlace(HS)),
                  XS = gS.add(new WS.n(1.17, 1.17, 1.17).multiplyInPlace(HS));
                return tS.multiplyInPlace(bS).divideInPlace(XS)
              }(new WS.n(gS.transmissionScatter.r, gS.transmissionScatter.g, gS.transmissionScatter.b)), tS = gS.transmissionScatterAnisotropy
            }
            const bS = WS.n.Zero();
            let XS = 0;
            gS.subsurfaceWeight > 0 && (bS.set(gS.subsurfaceColor.r, gS.subsurfaceColor.g, gS.subsurfaceColor.b), XS = gS.subsurfaceScatterAnisotropy);
            const xS = (1 - gS.transmissionWeight) * gS.subsurfaceWeight,
              NS = xS + gS.transmissionWeight,
              qS = 1 / Math.max(NS, 1e-6),
              uS = gS.transmissionWeight * qS,
              IS = xS * qS,
              fS = {
                multiscatterColorFactor: SS.multiplyByFloats(uS, uS, uS).addInPlace(bS.multiplyByFloats(IS, IS, IS)).lgS(),
                scatterAnisotropy: tS * uS + XS * IS
              };
            if (gS.subsurfaceWeight > 0 && gS.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(gS);
              const SS = this._exporter._materialExporter.getTextureInfo(gS.subsurfaceColorTexture);
              SS && (fS.multiscatterColorTexture = SS)
            } else if (gS.transmissionWeight > 0 && gS.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(gS);
              const SS = this._exporter._materialExporter.getTextureInfo(gS.transmissionScatterTexture);
              SS && (fS.multiscatterColorTexture = SS)
            }
            HS.extensions = HS.extensions || {}, HS.extensions[LX] = fS
          }
          SS(HS)
        }))
      }
    }
    let AX = !1;

    function yX() {
      AX || (AX = !0, yt.RegisterExtension(LX, (SS => new YX(SS)), 101))
    }
    yX();
    const VX = "KHR_materials_diffuse_roughness";
    class iX {
      constructor(SS) {
        this.name = VX, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = SS
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(SS, HS, gS) {
        const tS = [];
        if (gS instanceof wH) {
          if (gS._baseDiffuseRoughness) return gS._baseDiffuseRoughnessTexture && tS.push(gS._baseDiffuseRoughnessTexture), tS
        } else if (gS instanceof eH && gS.baseDiffuseRoughness) return gS.baseDiffuseRoughnessTexture && tS.push(gS.baseDiffuseRoughnessTexture), tS;
        return []
      }
      postExportMaterialAsync(SS, HS, gS) {
        return new Promise((SS => {
          let tS = null,
            bS = null;
          if (gS instanceof wH ? (tS = gS._baseDiffuseRoughness, bS = gS._baseDiffuseRoughnessTexture) : gS instanceof eH && (tS = gS.baseDiffuseRoughness, bS = gS.baseDiffuseRoughnessTexture), !tS) return void SS(HS);
          this._wasUsed = !0, HS.extensions = HS.extensions || {};
          const XS = {
            diffuseRoughnessFactor: tS,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(bS) ?? void 0
          };
          null !== XS.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(gS), HS.extensions[VX] = XS, SS(HS)
        }))
      }
    }
    let WX = !1;

    function zX() {
      WX || (WX = !0, yt.RegisterExtension(VX, (SS => new iX(SS))))
    }
    zX();
    const UX = "KHR_materials_openpbr";
    class pX {
      constructor() {
        this.name = UX, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(SS, HS, gS) {
        return new Promise((SS => {
          gS instanceof eH && (this._wasUsed = !0, HS.extensions = HS.extensions || {}, HS.extensions[UX] = {}), SS(HS)
        }))
      }
    }
    let sX = !1;

    function BX() {
      sX || (sX = !0, yt.RegisterExtension(UX, (() => new pX)))
    }
    BX();
    const MX = "KHR_texture_transform";
    class FX {
      constructor() {
        this.name = MX, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(SS, HS, gS) {
        if (gS.lL() || ZH.k.Warn(`${SS}: "scene" is not defined for Babylon texture ${gS.name}!`), (0 !== gS.uAng || 0 !== gS.vAng) && (ZH.k.Warn(`${SS}: Texture ${gS.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== gS.uRotationCenter || 0 !== gS.vRotationCenter)) return;
        const tS = {};
        let bS = !1;
        if (0 === gS.uOffset && 0 === gS.vOffset || (tS.offset = [gS.uOffset, gS.vOffset], bS = !0), 1 === gS.uScale && 1 === gS.vScale || (tS.scale = [gS.uScale, gS.vScale], bS = !0), 0 !== gS.wAng) {
          if (0 !== gS.uRotationCenter || 0 !== gS.vRotationCenter) {
            if (gS.homogeneousRotationInUVTransform && gS.uScale !== gS.vScale) return void ZH.k.Warn(`${SS}: Texture ${gS.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${MX}.`);
            ZH.k.Warn(`${SS}: Texture ${gS.name} with non-origin rotation center will be exported using an adjusted offset with ${MX}.`), tS.offset = function(SS) {
              const {
                uOffset: HS,
                vOffset: gS,
                uRotationCenter: tS,
                vRotationCenter: bS,
                uScale: XS,
                vScale: xS,
                wAng: NS
              } = SS, qS = Math.cos(NS), uS = Math.sin(NS), IS = tS * XS, fS = bS * xS;
              return [HS + (IS * (1 - qS) + fS * uS), gS + (fS * (1 - qS) - IS * uS)]
            }(gS)
          }
          tS.rotation = -gS.wAng, bS = !0
        }
        0 !== gS.coordinatesIndex && (tS.texCoord = gS.coordinatesIndex, bS = !0), bS && (this._wasUsed = !0, HS.extensions || (HS.extensions = {}), HS.extensions[MX] = tS)
      }
    }
    let RX = !1;

    function TX() {
      RX || (RX = !0, yt.RegisterExtension(MX, (() => new FX)))
    }
    TX();
    var oX = gS(40087);
    const lX = "KHR_texture_basisu";
    class mX {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(SS) {
        this.name = lX, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = SS
      }
      dispose() {}
      postExportTexture(SS, HS) {
        const gS = this._exporter._textures[HS.index],
          tS = gS.source;
        if (void 0 === tS) return;
        const bS = this._exporter._images[tS];
        "image/ktx2" === (bS.mimeType || (0, oX.g)(bS.uri)) && (gS.source = void 0, gS.extensions || (gS.extensions = {}), gS.extensions[lX] = {
          source: tS
        }, this._wasUsed = !0)
      }
    }
    let eX = !1;

    function rX() {
      eX || (eX = !0, yt.RegisterExtension(lX, (SS => new mX(SS))))
    }
    rX();
    const Sx = "EXT_texture_webp";
    class Hx {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(SS) {
        this.name = Sx, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = SS
      }
      dispose() {}
      postExportTexture(SS, HS) {
        const gS = this._exporter._textures[HS.index],
          tS = gS.source;
        if (void 0 === tS) return;
        const bS = this._exporter._images[tS];
        "image/webp" === (bS.mimeType || (0, oX.g)(bS.uri)) && (gS.source = void 0, gS.extensions || (gS.extensions = {}), gS.extensions[Sx] = {
          source: tS
        }, this._wasUsed = !0)
      }
    }
    let gx = !1;

    function tx() {
      gx || (gx = !0, yt.RegisterExtension(Sx, (SS => new Hx(SS))))
    }
    tx();
    const bx = "EXT_texture_avif";
    class Xx {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(SS) {
        this.name = bx, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = SS
      }
      dispose() {}
      postExportTexture(SS, HS) {
        const gS = this._exporter._textures[HS.index],
          tS = gS.source;
        if (void 0 === tS) return;
        const bS = this._exporter._images[tS];
        "image/avif" === (bS.mimeType || (0, oX.g)(bS.uri)) && (gS.source = void 0, gS.extensions || (gS.extensions = {}), gS.extensions[bx] = {
          source: tS
        }, this._wasUsed = !0)
      }
    }
    let xx = !1;

    function Nx() {
      xx || (xx = !0, yt.RegisterExtension(bx, (SS => new Xx(SS))))
    }
    Nx();
    class qx {
      static CreateSTL(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          bS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          XS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          xS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          NS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          qS = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const uS = function(SS, HS, gS) {
            const bS = [3 * SS[gS], 3 * SS[gS + 1], 3 * SS[gS + 2]],
              XS = [new tS.VK(HS[bS[0]], HS[bS[0] + 2], HS[bS[0] + 1]), new tS.VK(HS[bS[1]], HS[bS[1] + 2], HS[bS[1] + 1]), new tS.VK(HS[bS[2]], HS[bS[2] + 2], HS[bS[2] + 1])],
              xS = XS[0].subtract(XS[1]),
              NS = XS[2].subtract(XS[1]);
            return {
              v: XS,
              n: tS.VK.Cross(NS, xS).normalize()
            }
          },
          fS = function(SS, HS, gS, tS) {
            return HS = kS(SS, HS, gS.x, tS), HS = kS(SS, HS, gS.y, tS), kS(SS, HS, gS.z, tS)
          },
          kS = function(SS, HS, gS, tS) {
            return SS.setFloat32(HS, gS, tS), HS + 4
          },
          KS = function(SS) {
            if (NS) {
              let HS = SS;
              SS instanceof aS.c && (HS = SS.MtS);
              const gS = HS.getVerticesData(IS.f.PositionKind, !0, !0);
              if (!gS) return [];
              const bS = tS.VK.Zero();
              let XS;
              for (XS = 0; XS < gS.length; XS += 3) tS.VK.TransformCoordinatesFromFloatsToRef(gS[XS], gS[XS + 1], gS[XS + 2], SS.computeWorldMatrix(!0), bS).toArray(gS, XS);
              return gS
            }
            return SS.getVerticesData(IS.f.PositionKind) || []
          };
        NS && (xS = !0);
        let jS = "",
          GS = 0,
          CS = 0;
        if (bS) {
          for (let gS = 0; gS < SS.length; gS++) {
            const HS = SS[gS].mgS();
            GS += HS ? HS.length / 3 : 0
          }
          const HS = new ArrayBuffer(84 + 50 * GS);
          jS = new DataView(HS), CS += 80, jS.setUint32(CS, GS, XS), CS += 4
        } else qS || (jS = "solid stlmesh\r\n");
        for (let tS = 0; tS < SS.length; tS++) {
          const HS = SS[tS];
          !bS && qS && (jS += "solid " + HS.name + "\r\n"), !xS && HS instanceof ut.e && HS.bakeCurrentTransformIntoVertices();
          const gS = KS(HS),
            NS = HS.mgS() || [];
          for (let SS = 0; SS < NS.length; SS += 3) {
            const HS = uS(NS, gS, SS);
            bS ? (CS = fS(jS, CS, HS.n, XS), CS = fS(jS, CS, HS.v[0], XS), CS = fS(jS, CS, HS.v[1], XS), CS = fS(jS, CS, HS.v[2], XS), CS += 2) : (jS += "\tfacet normal " + HS.n.x + " " + HS.n.y + " " + HS.n.z + "\r\n", jS += "\t\touter loop\r\n", jS += "\t\t\tvertex " + HS.v[0].x + " " + HS.v[0].y + " " + HS.v[0].z + "\r\n", jS += "\t\t\tvertex " + HS.v[1].x + " " + HS.v[1].y + " " + HS.v[1].z + "\r\n", jS += "\t\t\tvertex " + HS.v[2].x + " " + HS.v[2].y + " " + HS.v[2].z + "\r\n", jS += "\t\tendloop\r\n", jS += "\tendfacet\r\n")
          }!bS && qS && (jS += "endsolid " + name + "\r\n")
        }
        if (bS || qS || (jS += "endsolid stlmesh"), HS) {
          const SS = document.createElement("a"),
            HS = new Blob([jS], {
              type: "application/octet-stream"
            });
          SS.href = window.URL.createObjectURL(HS), SS.download = gS + ".stl", SS.click()
        }
        return jS
      }
    }

    function ux(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const bS = [];
      for (let XS = 0; XS < SS.length / gS; XS++) {
        const xS = SS[XS * gS] * (tS ? -1 : 1),
          NS = SS[XS * gS + 1],
          qS = SS[XS * gS + 2];
        bS.push(`(${xS.toPrecision(HS.precision)}, ${NS.toPrecision(HS.precision)}, ${qS.toPrecision(HS.precision)})`)
      }
      return bS.join(", ")
    }

    function Ix(SS, HS) {
      const gS = [];
      for (let tS = 0; tS < SS.length / 2; tS++) {
        const bS = SS[2 * tS],
          XS = SS[2 * tS + 1];
        gS.push(`(${bS.toPrecision(HS.precision)}, ${(1-XS).toPrecision(HS.precision)})`)
      }
      return gS.join(", ")
    }

    function fx(SS, HS, gS, tS) {
      const bS = SS.getVerticesData(IS.f.PositionKind),
        XS = SS.getVerticesData(IS.f.NormalKind);
      if (bS && XS) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${gS}"\n\t\tint[] faceVertexCounts = [${function(SS){const HS=SS.mgS()?.length?SS.getTotalIndices():SS.getTotalVertices();return Array(HS/3).fill(3).join(", ")}(SS)}]\n\t\tint[] faceVertexIndices = [${function(SS){const HS=SS.mgS(),gS=HS?.length??SS.getTotalVertices(),tS=[];if(null!==HS)for(let bS=0;bS<gS;bS++)tS.push(HS[bS]);else for(let bS=0;bS<gS;bS++)tS.push(bS);return tS.join(", ")}(SS)}]\n\t\tnormal3f[] normals = [${ux(XS,HS,void 0,tS)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${ux(bS,HS,void 0,tS)}]\n        ${function(SS,HS){let gS="";for(let bS=0;bS<4;bS++){const tS=bS>0?bS:"",XS=SS.getVerticesData(IS.f.UVKind+(tS?tS+1:""));XS&&(gS+=`\n\t\ttexCoord2f[] primvars:st${tS} = [${Ix(XS,HS)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const tS=SS.getVerticesData(IS.f.ColorKind);return tS&&(gS+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        ux(tS, HS, tS.length / SS.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),gS}(SS,HS)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function kx(SS, HS, gS, tS) {
      return `\n        def "Geometry"\n        {\n        ${fx(SS,HS,gS,tS)}\n        }\n        `
    }

    function ax(SS) {
      let HS = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return HS += SS, fflate.strToU8(HS)
    }

    function Kx(SS) {
      const HS = SS.m;
      return `( ${jx(HS,0)}, ${jx(HS,4)}, ${jx(HS,8)}, ${jx(HS,12)} )`
    }

    function jx(SS, HS) {
      return `(${SS[HS+0]}, ${SS[HS+1]}, ${SS[HS+2]}, ${SS[HS+3]})`
    }

    function Gx(SS, HS) {
      const gS = "Object_" + SS.uniqueId,
        tS = Kx(HS);
      return `def Xform "${gS}" (\n\tprepend references = @./geometries/Geometry_${SS.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${tS}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${SS.material.uniqueId}>\n}\n\n`
    }

    function Cx(SS) {
      switch (SS) {
        case hS.e.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case hS.e.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case hS.e.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function nx(SS) {
      return `(${SS.x}, ${SS.y})`
    }

    function Px(SS) {
      return `(${SS.r}, ${SS.g}, ${SS.b})`
    }

    function Qx(SS) {
      return "image/jpeg" === SS || "image/png" === SS
    }

    function Dx(SS, HS, gS, bS, XS, xS) {
      const NS = SS.getInternalTexture().uniqueId + "_" + SS.invertY,
        uS = SS.mimeType || (0, qS.d)(SS.getInternalTexture()?.url ?? ""),
        IS = Qx(uS) ? uS : "image/png",
        fS = "image/jpeg" === IS ? "jpg" : "png";
      XS[NS] = {
        texture: SS,
        mimeType: IS,
        ext: fS
      };
      const kS = SS.coordinatesIndex > 0 ? "st" + SS.coordinatesIndex : "st",
        aS = new tS.Vector2(SS.uScale, SS.vScale),
        KS = new tS.Vector2(SS.uOffset, SS.vOffset),
        jS = SS.wAng,
        GS = Math.sin(jS),
        CS = Math.cos(jS);
      return KS.y = 1 - KS.y - aS.y, KS.x += GS * aS.x, KS.y += (1 - CS) * aS.y, `\n    def Shader "PrimvarReader_${gS}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${kS}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${gS}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${HS.uniqueId}/PrimvarReader_${gS}.outputs:result>\n        float inputs:rotation = ${(jS*(180/Math.PI)).toFixed(xS.precision)}\n        float2 inputs:scale = ${nx(aS)}\n        float2 inputs:translation = ${nx(KS)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${SS.uniqueId}_${gS}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${NS}.${fS}@\n        float2 inputs:st.connect = </Root/Materials/Material_${HS.uniqueId}/Transform2d_${gS}.outputs:result>\n        ${bS?"float4 inputs:scale = "+function(SS){return`(${SS.r}, ${SS.g}, ${SS.b}, 1.0)`}(bS):""}\n        token inputs:sourceColorSpace = "${SS.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${Cx(SS.wrapU)}"\n        token inputs:wrapT = "${Cx(SS.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${HS.needAlphaBlending()||HS.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function wx(SS, HS, gS) {
      const tS = "\t\t\t",
        bS = [],
        XS = [],
        {
          diffuseMap: xS,
          diffuse: NS,
          alphaCutOff: qS,
          emissiveMap: uS,
          emissive: IS,
          normalMap: fS,
          roughnessMap: kS,
          roughnessChannel: aS,
          roughness: KS,
          metalnessMap: jS,
          metalnessChannel: CS,
          metalness: nS,
          aoMap: PS,
          aoMapChannel: QS,
          aoMapIntensity: DS,
          alphaMap: wS,
          ior: hS,
          clearCoatEnabled: ZS,
          clearCoat: JS,
          clearCoatMap: OS,
          clearCoatRoughness: dS,
          clearCoatRoughnessMap: cS
        } = function(SS) {
          const HS = {
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
          return SS instanceof Xt.StandardMaterial ? {
            ...HS,
            diffuseMap: SS.diffuseTexture,
            diffuse: SS.diffuseColor,
            alphaCutOff: SS.alphaCutOff,
            emissiveMap: SS.emissiveTexture,
            emissive: SS.emissiveColor,
            roughness: 1,
            alphaMap: SS.opacityTexture
          } : SS instanceof wH ? {
            ...HS,
            diffuseMap: SS._albedoTexture,
            diffuse: SS._albedoColor,
            alphaCutOff: SS._alphaCutOff,
            emissiveMap: SS._emissiveTexture,
            emissive: SS._emissiveColor,
            normalMap: SS._bumpTexture,
            roughnessMap: SS._metallicTexture,
            roughnessChannel: SS._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: SS._roughness ?? 1,
            metalnessMap: SS._metallicTexture,
            metalnessChannel: SS._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: SS._metallic ?? 0,
            aoMap: SS._ambientTexture,
            aoMapChannel: SS._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: SS._ambientTextureStrength,
            alphaMap: SS._opacityTexture,
            ior: SS.subSurface.indexOfRefraction,
            clearCoatEnabled: SS.clearCoat.isEnabled,
            clearCoat: SS.clearCoat.intensity,
            clearCoatMap: SS.clearCoat.texture,
            clearCoatRoughness: SS.clearCoat.roughness,
            clearCoatRoughnessMap: SS.clearCoat.useRoughnessFromMainTexture ? SS.clearCoat.texture : SS.clearCoat.textureRoughness
          } : HS
        }(SS);
      return null !== xS ? (bS.push(`${tS}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${SS.uniqueId}/Texture_${xS.uniqueId}_diffuse.outputs:rgb>`), SS.needAlphaBlending() ? bS.push(`${tS}float inputs:opacity.connect = </Root/Materials/Material_${SS.uniqueId}/Texture_${xS.uniqueId}_diffuse.outputs:a>`) : SS.needAlphaTesting() && (bS.push(`${tS}float inputs:opacity.connect = </Root/Materials/Material_${SS.uniqueId}/Texture_${xS.uniqueId}_diffuse.outputs:a>`), bS.push(`${tS}float inputs:opacityThreshold = ${qS}`)), XS.push(Dx(xS, SS, "diffuse", NS, HS, gS))) : bS.push(`${tS}color3f inputs:diffuseColor = ${Px(NS||GS.Color3.White())}`), null !== uS ? (bS.push(`${tS}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${SS.uniqueId}/Texture_${uS.uniqueId}_emissive.outputs:rgb>`), XS.push(Dx(uS, SS, "emissive", IS, HS, gS))) : IS && IS.toLuminance() > 0 && bS.push(`${tS}color3f inputs:emissiveColor = ${Px(IS)}`), null !== fS && (bS.push(`${tS}normal3f inputs:normal.connect = </Root/Materials/Material_${SS.uniqueId}/Texture_${fS.uniqueId}_normal.outputs:rgb>`), XS.push(Dx(fS, SS, "normal", null, HS, gS))), null !== PS && (bS.push(`${tS}float inputs:occlusion.connect = </Root/Materials/Material_${SS.uniqueId}/Texture_${PS.uniqueId}_occlusion.outputs:${QS}>`), XS.push(Dx(PS, SS, "occlusion", new GS.Color3(DS, DS, DS), HS, gS))), null !== kS ? (bS.push(`${tS}float inputs:roughness.connect = </Root/Materials/Material_${SS.uniqueId}/Texture_${kS.uniqueId}_roughness.outputs:${aS}>`), XS.push(Dx(kS, SS, "roughness", new GS.Color3(KS, KS, KS), HS, gS))) : bS.push(`${tS}float inputs:roughness = ${KS}`), null !== jS ? (bS.push(`${tS}float inputs:metallic.connect = </Root/Materials/Material_${SS.uniqueId}/Texture_${jS.uniqueId}_metallic.outputs:${CS}>`), XS.push(Dx(jS, SS, "metallic", new GS.Color3(nS, nS, nS), HS, gS))) : bS.push(`${tS}float inputs:metallic = ${nS}`), null !== wS ? (bS.push(`${tS}float inputs:opacity.connect = </Root/Materials/Material_${SS.uniqueId}/Texture_${wS.uniqueId}_opacity.outputs:r>`), bS.push(`${tS}float inputs:opacityThreshold = 0.0001`), XS.push(Dx(wS, SS, "opacity", null, HS, gS))) : bS.push(`${tS}float inputs:opacity = ${SS.alpha}`), ZS && (null !== OS ? (bS.push(`${tS}float inputs:clearcoat.connect = </Root/Materials/Material_${SS.uniqueId}/Texture_${OS.uniqueId}_clearcoat.outputs:r>`), XS.push(Dx(OS, SS, "clearcoat", new GS.Color3(JS, JS, JS), HS, gS))) : bS.push(`${tS}float inputs:clearcoat = ${JS}`), null !== cS ? (bS.push(`${tS}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${SS.uniqueId}/Texture_${cS.uniqueId}_clearcoatRoughness.outputs:g>`), XS.push(Dx(cS, SS, "clearcoatRoughness", new GS.Color3(dS, dS, dS), HS, gS))) : bS.push(`${tS}float inputs:clearcoatRoughness = ${dS}`)), bS.push(`${tS}float inputs:ior = ${hS}`), `\n\tdef Material "Material_${SS.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${bS.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${SS.uniqueId}/PreviewSurface.outputs:surface>\n\n${XS.join("\n")}\n\n\t}\n`
    }

    function hx(SS) {
      SS.computeWorldMatrix(!0);
      const HS = SS.getWorldMatrix().clone(),
        gS = SS.lL().useRightHandedSystem;
      let tS = SS.material?._getEffectiveOrientation(SS) ?? SS.sideOrientation,
        xS = !gS,
        NS = SS.parent;
      for (; NS;) {
        if (yg(NS, gS) && null === NS.parent) {
          gS || (HS.multiplyToRef(NS.getWorldMatrix().invert(), HS), tS = tS === XS.d.ClockWiseSideOrientation ? XS.d.CounterClockWiseSideOrientation : XS.d.ClockWiseSideOrientation), xS = !1;
          break
        }
        NS = NS.parent
      }
      return HS.determinant() < 0 && bS.Tools.Warn(`Mesh ${SS.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: HS,
        windingOrder: tS === XS.d.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: xS
      }
    }
    async function Zx(SS, HS, gS) {
      const XS = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...HS
      };
      "undefined" === typeof fflate && await bS.Tools.LoadScriptAsync(XS.fflateUrl);
      const xS = {};
      xS[XS.modelFileName] = null;
      let NS = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      NS += function(SS) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===SS.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${SS.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${SS.planeAnchoringAlignment}"`:""}\n            `
      }(XS);
      const qS = {};
      for (const tS of SS.meshes) {
        if (0 === tS.getTotalVertices()) continue;
        const SS = tS,
          HS = SS.geometry,
          uS = SS.material;
        if (!uS || !HS || gS && !gS(SS)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(uS.getClassName())) {
          const gS = "geometries/Geometry_" + HS.uniqueId + ".usda",
            {
              matrix: tS,
              windingOrder: bS,
              convertToRightHanded: IS
            } = hx(SS);
          if (!(gS in xS)) {
            const SS = kx(HS, XS, bS, IS);
            xS[gS] = ax(SS)
          }
          uS.uniqueId in qS || (qS[uS.uniqueId] = uS), NS += Gx(SS, tS)
        } else bS.Tools.Warn("USDZExportAsync does not support this material type: " + uS.getClassName())
      }
      SS.activeCamera && XS.exportCamera && (NS += function(SS, HS) {
        const gS = "Camera_" + SS.uniqueId,
          bS = Kx(tS.Matrix.RotationY(Math.PI).multiply(SS.getWorldMatrix()));
        if (SS.mode === hS.e.ORTHOGRAPHIC_CAMERA) return `def Camera "${gS}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${bS}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${SS.minZ.toPrecision(HS.precision)}, ${SS.maxZ.toPrecision(HS.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(SS.orthoLeft||1)+Math.abs(SS.orthoRight||1))).toPrecision(HS.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(SS.orthoTop||1)+Math.abs(SS.orthoBottom||1))).toPrecision(HS.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const tS = SS.AK().getAspectRatio(SS),
            XS = HS.cameraSensorWidth || 35;
          return `def Camera "${gS}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${bS}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${SS.minZ.toPrecision(HS.precision)}, ${SS.maxZ.toPrecision(HS.precision)})\n\t\t\tfloat focalLength = ${(XS/(2*Math.tan(.5*SS.fov))).toPrecision(HS.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(XS*tS).toPrecision(HS.precision)}\n\t\t\tfloat verticalAperture = ${(XS/tS).toPrecision(HS.precision)}            \n\t\t}\n\t\n\t`
        }
      }(SS.activeCamera, XS)), NS += "\n            }\n        }";
      const uS = {};
      NS += function(SS, HS, gS) {
        const tS = [];
        for (const bS in SS) {
          const XS = SS[bS];
          tS.push(wx(XS, HS, gS))
        }
        return `\n    def "Materials"\n{\n${tS.join("")}\n}\n\n`
      }(qS, uS, XS), NS += "\n    }", xS[XS.modelFileName] = fflate.strToU8(NS);
      for (const tS in uS) {
        const {
          texture: SS,
          ext: HS,
          mimeType: gS
        } = uS[tS], bS = await Cg(SS);
        if (bS && Qx(bS.mimeType) && bS.mimeType === gS) xS[`textures/Texture_${tS}.${HS}`] = new Uint8Array(bS.data);
        else {
          const bS = SS.getSize(),
            XS = await (0, QS.h)(SS),
            NS = await ZS.DumpTools.DumpDataAsync(bS.width, bS.height, XS, gS, void 0, !1, !0);
          xS[`textures/Texture_${tS}.${HS}`] = new Uint8Array(NS).slice()
        }
      }
      let IS = 0;
      for (const tS in xS) {
        const SS = xS[tS];
        if (!SS) continue;
        IS += 34 + tS.length;
        const HS = 63 & IS;
        if (4 !== HS) {
          const gS = new Uint8Array(64 - HS);
          xS[tS] = [SS, {
            extra: {
              12345: gS
            }
          }]
        }
        IS = SS.length
      }
      return fflate.zipSync(xS, {
        level: 0
      })
    }
    var Jx = gS(41117);
    class Ox {
      static Export(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          gS = arguments.length > 2 ? arguments[2] : void 0;
        if (!SS || 0 === SS.bones.length) throw new Error("Invalid or empty skeleton provided");
        let tS = HS;
        HS && 0 !== HS.length || (tS = SS.animations.map((SS => SS.name)));
        let bS = null;
        for (const uS of tS) {
          const HS = SS.getAnimationRange(uS);
          HS && (bS = bS ? new Jx.c("animation-range", Math.min(bS.from, HS.from), Math.max(bS.to, HS.to)) : HS)
        }
        if (!bS && (SS.animations.length > 0 && (bS = SS.getAnimationRange(SS.animations[0].name)), !bS)) throw new Error("No animation range found in skeleton");
        const XS = gS || 1 / (SS.animations[0]?.framePerSecond || 30),
          xS = this._BuildBoneHierarchy(SS, tS);
        let NS = 0;
        for (const uS of xS) uS.positionKeys.length > 0 && (NS = Math.max(NS, uS.positionKeys.length)), uS.rotationKeys.length > 0 && (NS = Math.max(NS, uS.rotationKeys.length));
        0 === NS && (NS = Math.floor((bS.to - bS.from) / XS) + 1);
        let qS = "";
        return qS += "HIERARCHY\n", qS += this._ExportHierarchy(xS, 0), qS += "MOTION\n", qS += `Frames: ${NS}\n`, qS += `Frame Time: ${XS.toFixed(6)}\n`, qS += this._ExportMotionData(xS, NS, 0, tS), qS
      }
      static _BuildBoneHierarchy(SS, HS) {
        const gS = new Map,
          tS = [];
        for (const bS of SS.bones) {
          const SS = {
            bone: bS,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          gS.set(bS, SS)
        }
        for (const bS of SS.bones) {
          const SS = gS.get(bS);
          if (bS.animations.length > 0)
            for (const gS of bS.animations) HS.includes(gS.name) && ("position" === gS.targetProperty ? (SS.hasPositionChannels = !0, SS.positionKeys.push(...gS.getKeys())) : "rotationQuaternion" === gS.targetProperty && (SS.hasRotationChannels = !0, SS.rotationKeys.push(...gS.getKeys())));
          if (bS.getParent()) {
            const HS = gS.get(bS.getParent());
            HS && HS.children.push(SS)
          } else tS.push(SS)
        }
        return tS
      }
      static _ExportHierarchy(SS, HS) {
        let gS = "";
        const tS = "    ".repeat(HS);
        for (const bS of SS) {
          const SS = bS.bone;
          if (this._IsEndSite(bS)) {
            gS += `${tS}End Site\n`, gS += `${tS}{\n`;
            const HS = this._GetBoneOffset(SS);
            gS += `${tS}    OFFSET ${HS.x.toFixed(6)} ${HS.y.toFixed(6)} ${HS.z.toFixed(6)}\n`, gS += `${tS}}\n`
          } else {
            gS += `${0===HS?"ROOT":`${tS}JOINT`} ${SS.name}\n`, gS += `${tS}{\n`;
            const XS = this._GetBoneOffset(SS);
            gS += `${tS}    OFFSET ${XS.x.toFixed(6)} ${XS.y.toFixed(6)} ${XS.z.toFixed(6)}\n`;
            const xS = [];
            bS.hasPositionChannels && xS.push("Xposition", "Yposition", "Zposition"), bS.hasRotationChannels && xS.push("Zrotation", "Xrotation", "Yrotation"), xS.length > 0 && (gS += `${tS}    CHANNELS ${xS.length} ${xS.join(" ")}\n`), bS.children.length > 0 && (gS += this._ExportHierarchy(bS.children, HS + 1)), gS += `${tS}}\n`
          }
        }
        return gS
      }
      static _IsEndSite(SS) {
        return 0 === SS.children.length
      }
      static _GetBoneOffset(SS) {
        try {
          if (!SS.getParent()) return SS.getRestMatrix().getTranslation();
          return SS.getLocalMatrix().getTranslation()
        } catch (HS) {
          return tS.VK.Zero()
        }
      }
      static _ExportMotionData(SS, HS, gS, tS) {
        let bS = "";
        for (let XS = 0; XS < HS; XS++) {
          const HS = [];
          this._CollectFrameValues(SS, XS + gS, HS, tS), bS += HS.map((SS => SS.toFixed(6))).join(" ") + "\n"
        }
        return bS
      }
      static _CollectFrameValues(SS, HS, gS, tS) {
        for (const bS of SS)
          if (!this._IsEndSite(bS)) {
            if (bS.hasPositionChannels) {
              const SS = this._GetPositionAtFrameIndex(bS.positionKeys, HS);
              gS.push(SS.x, SS.y, SS.z)
            }
            if (bS.hasRotationChannels) {
              const SS = this._GetRotationAtFrameIndex(bS.rotationKeys, HS),
                tS = this._QuaternionToEuler(SS);
              gS.push(tS.z, tS.x, tS.y)
            }
            bS.children.length > 0 && this._CollectFrameValues(bS.children, HS, gS, tS)
          }
      }
      static _GetPositionAtFrameIndex(SS, HS) {
        if (0 === SS.length) return tS.VK.Zero();
        return SS[Math.max(0, Math.min(HS, SS.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(SS, HS) {
        if (0 === SS.length) return tS.Quaternion.Identity();
        return SS[Math.max(0, Math.min(HS, SS.length - 1))].value.clone()
      }
      static _QuaternionToEuler(SS) {
        const HS = new tS.Matrix;
        SS.toRotationMatrix(HS);
        const gS = HS.m;
        let XS, xS, NS;
        const qS = Math.sqrt(gS[0] * gS[0] + gS[1] * gS[1]);
        return qS > Yg.d ? (XS = Math.atan2(gS[6], gS[10]), xS = Math.atan2(-gS[2], qS), NS = Math.atan2(gS[1], gS[0])) : (XS = Math.atan2(-gS[9], gS[5]), xS = Math.atan2(-gS[2], qS), NS = 0), new tS.VK(bS.Tools.ToDegrees(XS), bS.Tools.ToDegrees(xS), bS.Tools.ToDegrees(NS))
      }
    }

    function dx(SS) {
      return "string" === typeof SS?.name
    }
    const cx = Symbol("__xml:meta$__"),
      vx = Symbol("__xml:name$__");

    function Ex(SS, HS) {
      Object.prototype.hasOwnProperty.call(SS.metadata, cx) || (SS.metadata[cx] = []), SS.metadata[cx].push(HS)
    }

    function Lx(SS) {
      return (HS, gS) => {
        HS[vx] = SS
      }
    }

    function Yx() {
      return (SS, HS) => Ex(HS, {
        kind: "none",
        prop: String(HS.name),
        ignore: !0
      })
    }

    function Ax(SS) {
      return (HS, gS) => Ex(gS, {
        kind: "attr",
        prop: String(gS.name),
        ...SS
      })
    }

    function yx(SS) {
      return (HS, gS) => Ex(gS, {
        kind: "elem",
        prop: String(gS.name),
        ...SS
      })
    }

    function Vx(SS) {
      const HS = "function" === typeof SS ? SS : SS?.constructor,
        gS = HS?.[Symbol.metadata];
      if (!gS) return [];
      const tS = [];
      let bS = gS;
      for (; bS;) Object.prototype.hasOwnProperty.call(bS, cx) && tS.push(...bS[cx]), bS = Object.getPrototypeOf(bS);
      return tS
    }

    function ix(SS) {
      const HS = SS?.constructor?.[vx];
      return HS || void 0
    }

    function Wx(SS) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(SS)
    }

    function zx(SS) {
      if (dx(SS)) return SS;
      const HS = (SS ?? "").trim();
      if (!HS) return {
        name: ""
      };
      const gS = HS.indexOf(":");
      if (-1 === gS) return {
        name: HS
      };
      if (-1 !== HS.indexOf(":", gS + 1)) return {
        name: HS
      };
      const tS = HS.slice(0, gS),
        bS = HS.slice(gS + 1);
      return Wx(tS) && Wx(bS) ? {
        ns: tS,
        name: bS
      } : {
        name: HS
      }
    }

    function Ux(SS, HS) {
      return HS ? `${HS}:${SS}` : SS
    }
    const px = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      sx = Object.freeze({
        number: px
      });

    function Bx(SS) {
      const HS = SS?.eps ?? px.eps;
      return {
        eps: HS,
        maxDecimalsCap: SS?.maxDecimalsCap ?? px.maxDecimalsCap,
        trimTrailingZeros: SS?.trimTrailingZeros ?? px.trimTrailingZeros,
        fixedDecimals: SS?.fixedDecimals,
        allowScientific: SS?.allowScientific ?? px.allowScientific,
        snapNearZero: SS?.snapNearZero ?? px.snapNearZero,
        zeroThreshold: SS?.zeroThreshold ?? HS,
        perAttributeEps: SS?.perAttributeEps
      }
    }

    function Mx(SS) {
      return {
        number: Bx(SS?.number)
      }
    }
    class Fx {
      constructor(SS) {
        if (this.o = SS, this._o = SS.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(SS) {
        if (!Number.isFinite(SS)) throw new Error(`Cannot format non-finite number: ${SS}`);
        const HS = this._o,
          gS = this._clampInt(HS.maxDecimalsCap ?? 15, 0, 20),
          tS = HS.trimTrailingZeros ?? !0,
          bS = HS.snapNearZero ?? !0,
          XS = HS.zeroThreshold ?? HS.eps,
          xS = 1 / HS.eps;
        let NS, qS = Math.round(SS * xS) / xS;
        if (Object.is(qS, -0) && (qS = 0), bS && Math.abs(qS) <= XS && (qS = 0), NS = void 0 !== HS.fixedDecimals ? this._clampInt(HS.fixedDecimals, 0, gS) : this._clampInt(Math.ceil(-Math.log10(HS.eps)), 0, gS), HS.allowScientific, 0 === NS) return String(Math.trunc(qS));
        let uS = qS.toFixed(NS);
        if (tS && void 0 === HS.fixedDecimals && (uS = uS.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(uS)) throw new Error(`Scientific notation not allowed in XML output: ${uS}`);
        return uS
      }
      _clampInt(SS, HS, gS) {
        return Number.isFinite(SS) ? (SS = Math.trunc(SS), Math.max(HS, Math.min(gS, SS))) : HS
      }
    }

    function Rx(SS) {
      return SS instanceof Date
    }

    function Tx(SS) {
      return "string" === typeof SS
    }

    function ox(SS) {
      return "string" === typeof SS || "number" === typeof SS || "boolean" === typeof SS || "bigint" === typeof SS || Rx(SS)
    }

    function lx(SS) {
      return "number" === typeof SS || "boolean" === typeof SS || "bigint" === typeof SS || Rx(SS)
    }
    class mx {
      constructor(SS, HS) {
        this._ns = new Map, this._prefixCount = 0, this._builder = SS, this._format = Mx(HS), this._nFmt = new Fx(this._format)
      }
      withNamespace() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        for (const tS of HS) this._assignNamespace(tS);
        return this
      }
      serialize(SS, HS) {
        if (!(HS = HS ?? ix(SS))) throw new Error("can not find name for given object");
        const gS = zx(HS);
        gS.ns && this._assignNamespace(gS.ns, "xmlns"), this._gatherNamespaces(SS, new WeakSet);
        const tS = this._builder.ele(null, gS.name);
        for (const [bS, XS] of Array.from(this._ns.entries())) tS.att("xmlns", XS, bS);
        this._writeObjectContent(tS, SS, (new WeakSet).add(SS)), this._builder.end()
      }
      _writeObject(SS, HS, gS) {
        if (gS.has(HS)) return;
        if (gS.add(HS), Array.isArray(HS)) {
          for (const tS of HS) lx(tS) || (Tx(tS) ? this._builder.text(tS) : this._writeObject(SS, tS, gS));
          return
        }
        const tS = ix(HS);
        if (!tS) return;
        const bS = zx(tS),
          XS = this._getPrefix(bS),
          xS = Ux(bS.name, XS);
        SS.ele(null, xS), this._writeObjectContent(SS, HS, gS), this._builder.end()
      }
      _getPrefix(SS) {
        if (SS.ns) {
          const HS = this._ns.get(SS.ns.toLowerCase());
          if ("xmlns" !== HS) return HS
        }
      }
      _writeObjectContent(SS, HS, gS) {
        const tS = Vx(HS) ?? [],
          bS = new Map;
        for (const xS of tS) {
          const SS = bS.get(xS.prop) ?? [];
          SS.push(xS), bS.set(xS.prop, SS)
        }
        const XS = Object.keys(HS).sort(((SS, HS) => {
          const gS = (bS.get(SS) ?? []).some((SS => "attr" === SS.kind));
          return gS === (bS.get(HS) ?? []).some((SS => "attr" === SS.kind)) ? 0 : gS ? -1 : 1
        }));
        for (const xS of XS) {
          const tS = HS[xS];
          if (null === tS || void 0 === tS) continue;
          const XS = bS.get(xS);
          if (XS) {
            if (XS.some((SS => !0 === SS.ignore || "none" === SS.kind))) continue;
            for (const HS of XS) {
              const gS = HS.name ?? HS.prop.toLowerCase();
              if (gS) switch (HS.kind) {
                case "attr": {
                  let bS = null;
                  if ("number" === typeof tS && this._nFmt && (bS = this._nFmt.toString(tS)), HS.formatter) {
                    bS = new HS.formatter(this._format).toString(tS)
                  }
                  if (bS = bS ?? tS.toString(), bS) {
                    const HS = zx(gS),
                      tS = this._getPrefix(HS),
                      XS = Ux(HS.name, tS);
                    SS.att(null, XS, bS)
                  }
                  break
                }
              }
            }
          } else lx(tS) || (Tx(tS) ? this._builder.text(tS) : this._writeObject(SS, tS, gS))
        }
      }
      _gatherNamespaces(SS, HS) {
        if (HS.has(SS)) return;
        if (HS.add(SS), Array.isArray(SS)) {
          for (const gS of SS) ox(gS) || this._gatherNamespaces(gS, HS);
          return
        }
        const gS = ix(SS);
        gS && this._assignNamespace(gS);
        const tS = Vx(SS) ?? [],
          bS = new Map;
        for (const xS of tS) {
          const SS = bS.get(xS.prop) ?? [];
          SS.push(xS), bS.set(xS.prop, SS)
        }
        const XS = [];
        for (const xS of Object.keys(SS)) {
          const HS = SS[xS];
          if (null === HS || void 0 === HS) continue;
          const gS = bS.get(xS);
          if (gS) {
            if (gS.some((SS => !0 === SS.ignore || "none" === SS.kind))) continue;
            for (const SS of gS) SS.name && this._assignNamespace(SS.name)
          }
          XS.push(HS)
        }
        for (const xS of XS) ox(xS) || this._gatherNamespaces(xS, HS)
      }
      _assignNamespace(SS, HS) {
        const gS = zx(SS);
        if (gS?.ns) {
          const SS = gS.ns.toLowerCase();
          this._ns.get(SS) || this._ns.set(SS, HS ?? this._buildNsPrefix(SS))
        } else if ("xmlns" === HS) {
          const SS = gS.name.toLowerCase();
          this._ns.get(SS) || this._ns.set(SS, HS ?? this._buildNsPrefix(SS))
        }
      }
      _buildNsPrefix(SS) {
        let HS, gS = !1;
        do {
          HS = "ns" + this._prefixCount++;
          for (const SS of Array.from(this._ns.values()))
            if (SS === HS) {
              gS = !0;
              break
            }
        } while (gS);
        return HS
      }
    }
    class ex {}
    var rx;
    ex.OpenTag = "<", ex.CloseTag = ">", ex.Slash = "/", ex.Question = "?", ex.Quote = '"', ex.Equal = "=", ex.Space = " ", ex.Semicolon = ":", ex.Dec = "<?xml", ex.Xml = "xml", ex.Xmlns = "xmlns", ex.Xsi = "xsi", ex.VersionKeyword = "version", ex.EncodingKeyword = "encoding", ex.StandaloneKeyword = "standalone",
      function(SS) {
        SS[SS.Declaration = 0] = "Declaration", SS[SS.Tag = 1] = "Tag", SS[SS.Attribute = 2] = "Attribute", SS[SS.Text = 3] = "Text"
      }(rx || (rx = {}));
    class SN {
      constructor(SS) {
        this._ctxStack = [], this._d = 0, this._w = SS
      }
      dec(SS, HS, gS) {
        return this._w.write(ex.Dec), this._writeAttStr(ex.VersionKeyword, SS), HS && this._writeAttStr(ex.EncodingKeyword, HS), void 0 !== gS && this._writeAttStr(ex.StandaloneKeyword, gS ? "yes" : "no"), this._w.write(ex.Question, ex.CloseTag), this
      }
      att(SS, HS, gS) {
        const tS = this._peekContext();
        if (!tS) throw new Error("att() without open element");
        if (tS.closed) throw new Error(`att() after start tag closed for <${tS.name}>`);
        if (this._isXmlnsDecl(SS, HS)) {
          if (HS === ex.Xmlns) tS.defaultNs = gS, this._registerNamespace(tS, "", gS), this._writeAttStr(ex.Xmlns, gS);
          else if (SS) this._registerNamespace(tS, HS, gS), this._writeAttStr(`${SS}:${HS}`, gS);
          else {
            const SS = HS.slice(6);
            this._registerNamespace(tS, SS, gS), this._writeAttStr(HS, gS)
          }
          return tS.lastToken = rx.Attribute, this
        }
        let bS = HS;
        if (SS) {
          bS = `${this._ensurePrefixDeclared(tS,SS)}:${HS}`
        }
        return tS.lastToken = rx.Attribute, this._writeAttStr(bS, gS), this
      }
      ele(SS, HS) {
        const gS = this._peekContext();
        gS && this._closeOpenTagIfNeeded(gS);
        let tS = HS;
        if (SS) {
          tS = `${this._lookupPrefix(SS)??SS}:${HS}`
        }
        return this._pushContext(tS, ++this._d), this._w.write(ex.OpenTag, tS), this
      }
      text(SS) {
        const HS = this._peekContext();
        if (!HS) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(HS), HS.lastToken = rx.Text, this._w.write(this._escText(SS)), this
      }
      end() {
        const SS = this._popContext();
        return SS && (this._d--, SS.closed ? this._w.write(ex.OpenTag, ex.Slash, SS.name, ex.CloseTag) : this._w.write(ex.Slash, ex.CloseTag)), this
      }
      _pushContext(SS, HS) {
        const gS = new SN.Context(SS, HS);
        return this._ctxStack.push(gS), gS
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
      _writeAttStr(SS, HS) {
        this._w.write(ex.Space, SS, ex.Equal, ex.Quote, this._escAttr(HS), ex.Quote)
      }
      _lookupPrefix(SS) {
        let HS = this._ctxStack.length - 1;
        if (HS >= 0)
          do {
            const gS = this._ctxStack[HS--],
              tS = gS.ns2prefix?.get(SS);
            if (tS) return tS
          } while (HS >= 0)
      }
      _escText(SS) {
        return SS.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(SS) {
        return this._escText(SS).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(SS, HS) {
        if (SS) return SS === ex.Xmlns;
        const gS = HS.length,
          tS = ex.Xmlns.length;
        return gS >= tS && (HS.startsWith(ex.Xmlns) && (HS.length == tS || HS[tS] == ex.Semicolon))
      }
      _registerNamespace(SS, HS, gS) {
        if (HS === ex.Xml || HS === ex.Xmlns) throw new Error(`reserved prefix '${HS}'`);
        const tS = SS.prefix2ns.get(HS);
        if (tS && tS !== gS) throw new Error(`prefix '${HS}' already bound to a different namespace`);
        SS.ns2prefix.get(gS) || SS.ns2prefix.set(gS, HS), SS.prefix2ns.set(HS, gS)
      }
      _allocPrefix(SS) {
        let HS = 1;
        for (;;) {
          const gS = "ns" + HS++;
          if (!SS.prefix2ns.has(gS)) return gS
        }
      }
      _ensurePrefixDeclared(SS, HS) {
        const gS = this._lookupPrefix(HS);
        if (gS) return gS;
        if (SS.closed) throw new Error(`can not declare namespace after start tag closed for <${SS.name}>`);
        const tS = this._allocPrefix(SS);
        return this._writeAttStr(`${ex.Xmlns}:${tS}`, HS), this._registerNamespace(SS, tS, HS), tS
      }
      _closeOpenTagIfNeeded(SS) {
        SS.closed || (this._w.write(ex.CloseTag), SS.closed = !0)
      }
    }
    SN.Context = class {
      constructor(SS, HS) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = SS, this.depth = HS
      }
    };
    class HN {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        if (0 === HS.length) return this;
        const tS = HS.join("");
        return this._chunks.push(tS), this.count += tS.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class gN {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = SS, this._opts = HS, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        if (0 === HS.length) return this;
        const tS = HS.join("");
        if (0 === tS.length) return this;
        this._pending += tS, this._pendingChars += tS.length;
        const bS = this._opts.flushChars ?? 65536;
        return this._pendingChars >= bS && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const SS = this._encoder.encode(this._pending);
        return this._sink.push(SS), this.count += SS.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const tN = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      bN = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var XN, xN;
    ! function(SS) {
      SS.micron = "micron", SS.millimeter = "millimeter", SS.centimeter = "centimeter", SS.inch = "inch", SS.foot = "foot", SS.meter = "meter"
    }(XN || (XN = {})),
    function(SS) {
      SS.model = "model", SS.solidsupport = "solidsupport", SS.support = "support", SS.surface = "surface", SS.other = "other"
    }(xN || (xN = {}));
    const NN = "http://schemas.openxmlformats.org/package/2006/content-types",
      qN = "http://schemas.openxmlformats.org/package/2006/relationships";
    var uN;
    ! function(SS) {
      SS.Relationships = "application/vnd.openxmlformats-package.relationships+xml", SS.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", SS.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", SS.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", SS.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", SS.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", SS.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", SS.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", SS.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", SS.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", SS.Png = "image/png", SS.Jpeg = "image/jpeg", SS.Tiff = "image/tiff", SS.Xml = "application/xml"
    }(uN || (uN = {}));
    const IN = "_rels/",
      fN = "3D/",
      kN = "3dmodel.model",
      aN = ".rels",
      KN = "[Content_Types].xml";
    class jN {
      static IsKnown(SS) {
        return jN.Known.has(SS)
      }
      static IsThreeDimModel(SS) {
        return SS === jN.ThreeDimModel
      }
    }
    jN.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", jN.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", jN.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", jN.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", jN.Known = new Set([jN.ThreeDimModel, jN.Thumbnail, jN.PrintTicket, jN.MustPreserve]);
    let GN = (() => {
        let SS, HS, gS = [Lx({
            ns: NN,
            name: "Types"
          })],
          tS = [];
        HS = class {
          constructor() {
            this.items = []
          }
        };
        return (0, JS.l)(HS, "ThreeMfContentTypes"), (() => {
          const bS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JS.j)(null, SS = {
            value: HS
          }, gS, {
            kind: "class",
            name: HS.name,
            metadata: bS
          }, null, tS), HS = SS.value, bS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bS
          }), (0, JS.k)(HS, tS)
        })(), HS
      })(),
      CN = (() => {
        let SS, HS, gS, tS, bS = [Lx({
            ns: NN,
            name: "Default"
          })],
          XS = [],
          xS = [],
          NS = [],
          qS = [],
          uS = [];
        HS = class {
          constructor(SS, HS) {
            this.ext = (0, JS.k)(this, xS, void 0), this.ct = ((0, JS.k)(this, NS), (0, JS.k)(this, qS, void 0)), (0, JS.k)(this, uS), this.ext = SS, this.ct = HS
          }
        };
        return (0, JS.l)(HS, "ThreeMfContentType"), (() => {
          const IS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gS = [Ax({
            name: {
              ns: NN,
              name: "Extension"
            }
          })], tS = [Ax({
            name: {
              ns: NN,
              name: "ContentType"
            }
          })], (0, JS.j)(null, null, gS, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: SS => "ext" in SS,
              get: SS => SS.ext,
              set: (SS, HS) => {
                SS.ext = HS
              }
            },
            metadata: IS
          }, xS, NS), (0, JS.j)(null, null, tS, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: SS => "ct" in SS,
              get: SS => SS.ct,
              set: (SS, HS) => {
                SS.ct = HS
              }
            },
            metadata: IS
          }, qS, uS), (0, JS.j)(null, SS = {
            value: HS
          }, bS, {
            kind: "class",
            name: HS.name,
            metadata: IS
          }, null, XS), HS = SS.value, IS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IS
          }), (0, JS.k)(HS, XS)
        })(), HS
      })(),
      nN = (() => {
        let SS, HS, gS = [Lx({
            ns: qN,
            name: "Relationships"
          })],
          tS = [];
        HS = class {
          constructor() {
            this.items = []
          }
        };
        return (0, JS.l)(HS, "ThreeMfRelationships"), (() => {
          const bS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JS.j)(null, SS = {
            value: HS
          }, gS, {
            kind: "class",
            name: HS.name,
            metadata: bS
          }, null, tS), HS = SS.value, bS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bS
          }), (0, JS.k)(HS, tS)
        })(), HS
      })(),
      PN = (() => {
        let SS, HS, gS, tS, bS, XS = [Lx({
            ns: qN,
            name: "Relationship"
          })],
          xS = [],
          NS = [],
          qS = [],
          uS = [],
          IS = [],
          fS = [],
          kS = [];
        HS = class {
          constructor(SS, HS, gS) {
            this.id = (0, JS.k)(this, NS, void 0), this.type = ((0, JS.k)(this, qS), (0, JS.k)(this, uS, void 0)), this.target = ((0, JS.k)(this, IS), (0, JS.k)(this, fS, void 0)), (0, JS.k)(this, kS), this.id = SS, this.type = HS, this.target = gS
          }
        };
        return (0, JS.l)(HS, "ThreeMfRelationship"), (() => {
          const aS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gS = [Ax({
            name: "Id"
          })], tS = [Ax({
            name: "Type"
          })], bS = [Ax({
            name: "Target"
          })], (0, JS.j)(null, null, gS, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: SS => "id" in SS,
              get: SS => SS.id,
              set: (SS, HS) => {
                SS.id = HS
              }
            },
            metadata: aS
          }, NS, qS), (0, JS.j)(null, null, tS, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: SS => "type" in SS,
              get: SS => SS.type,
              set: (SS, HS) => {
                SS.type = HS
              }
            },
            metadata: aS
          }, uS, IS), (0, JS.j)(null, null, bS, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: SS => "target" in SS,
              get: SS => SS.target,
              set: (SS, HS) => {
                SS.target = HS
              }
            },
            metadata: aS
          }, fS, kS), (0, JS.j)(null, SS = {
            value: HS
          }, XS, {
            kind: "class",
            name: HS.name,
            metadata: aS
          }, null, xS), HS = SS.value, aS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: aS
          }), (0, JS.k)(HS, xS)
        })(), HS
      })();
    class QN {
      constructor(SS, HS, gS) {
        this.contentTypes = SS, this.relationships = HS, this.model = gS
      }
    }
    class DN {
      static Zero() {
        return new DN([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(SS) {
        this.values = SS
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class wN {
      constructor(SS) {
        this.o = SS, this._f = new Fx(SS)
      }
      toString(SS) {
        return SS.values.map((SS => this._f.toString(SS))).join(" ")
      }
    }
    let hN = (() => {
        let SS, HS, gS, tS, bS, XS = [Lx({
            ns: tN,
            name: "model"
          })],
          xS = [],
          NS = [],
          qS = [],
          uS = [],
          IS = [],
          fS = [],
          kS = [];
        HS = class {
          constructor() {
            this.unit = (0, JS.k)(this, NS, XN.millimeter), this.requiredextensions = ((0, JS.k)(this, qS), (0, JS.k)(this, uS, void 0)), this.recommendedextensions = ((0, JS.k)(this, IS), (0, JS.k)(this, fS, void 0)), this.metadata = (0, JS.k)(this, kS)
          }
        };
        return (0, JS.l)(HS, "ThreeMfModel"), (() => {
          const aS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gS = [Ax({
            name: "unit"
          })], tS = [Ax({
            name: "requiredextensions"
          })], bS = [Ax({
            name: "recommendedextensions"
          })], (0, JS.j)(null, null, gS, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: SS => "unit" in SS,
              get: SS => SS.unit,
              set: (SS, HS) => {
                SS.unit = HS
              }
            },
            metadata: aS
          }, NS, qS), (0, JS.j)(null, null, tS, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: SS => "requiredextensions" in SS,
              get: SS => SS.requiredextensions,
              set: (SS, HS) => {
                SS.requiredextensions = HS
              }
            },
            metadata: aS
          }, uS, IS), (0, JS.j)(null, null, bS, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: SS => "recommendedextensions" in SS,
              get: SS => SS.recommendedextensions,
              set: (SS, HS) => {
                SS.recommendedextensions = HS
              }
            },
            metadata: aS
          }, fS, kS), (0, JS.j)(null, SS = {
            value: HS
          }, XS, {
            kind: "class",
            name: HS.name,
            metadata: aS
          }, null, xS), HS = SS.value, aS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: aS
          })
        })(), HS.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, JS.k)(HS, xS), HS
      })(),
      ZN = (() => {
        let SS, HS, gS, tS, bS, XS = [Lx({
            ns: tN,
            name: "meta"
          })],
          xS = [],
          NS = [],
          qS = [],
          uS = [],
          IS = [],
          fS = [],
          kS = [];
        HS = class {
          constructor(SS, HS, gS, tS) {
            this.name = (0, JS.k)(this, NS, void 0), this.preserve = ((0, JS.k)(this, qS), (0, JS.k)(this, uS, void 0)), this.type = ((0, JS.k)(this, IS), (0, JS.k)(this, fS, void 0)), this.value = (0, JS.k)(this, kS), this.name = SS, this.value = HS, this.preserve = gS, this.type = tS
          }
        };
        return (0, JS.l)(HS, "ThreeMfMeta"), (() => {
          const aS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gS = [Ax({
            name: "name"
          })], tS = [Ax({
            name: "preserve"
          })], bS = [Ax({
            name: "type"
          })], (0, JS.j)(null, null, gS, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: SS => "name" in SS,
              get: SS => SS.name,
              set: (SS, HS) => {
                SS.name = HS
              }
            },
            metadata: aS
          }, NS, qS), (0, JS.j)(null, null, tS, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: SS => "preserve" in SS,
              get: SS => SS.preserve,
              set: (SS, HS) => {
                SS.preserve = HS
              }
            },
            metadata: aS
          }, uS, IS), (0, JS.j)(null, null, bS, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: SS => "type" in SS,
              get: SS => SS.type,
              set: (SS, HS) => {
                SS.type = HS
              }
            },
            metadata: aS
          }, fS, kS), (0, JS.j)(null, SS = {
            value: HS
          }, XS, {
            kind: "class",
            name: HS.name,
            metadata: aS
          }, null, xS), HS = SS.value, aS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: aS
          }), (0, JS.k)(HS, xS)
        })(), HS
      })(),
      JN = (() => {
        let SS, HS, gS = [Lx({
            ns: tN,
            name: "metadatagroup"
          })],
          tS = [];
        HS = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, JS.l)(HS, "ThreeMfMetadataGroup"), (() => {
          const bS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JS.j)(null, SS = {
            value: HS
          }, gS, {
            kind: "class",
            name: HS.name,
            metadata: bS
          }, null, tS), HS = SS.value, bS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bS
          }), (0, JS.k)(HS, tS)
        })(), HS
      })(),
      ON = (() => {
        let SS, HS, gS = [Lx({
            ns: tN,
            name: "resources"
          })],
          tS = [];
        HS = class {
          constructor() {
            this.object = []
          }
        };
        return (0, JS.l)(HS, "ThreeMfResources"), (() => {
          const bS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JS.j)(null, SS = {
            value: HS
          }, gS, {
            kind: "class",
            name: HS.name,
            metadata: bS
          }, null, tS), HS = SS.value, bS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bS
          }), (0, JS.k)(HS, tS)
        })(), HS
      })(),
      dN = (() => {
        let SS, HS, gS, tS, bS, XS, xS, NS, qS, uS = [Lx({
            ns: tN,
            name: "object"
          })],
          IS = [],
          fS = [],
          kS = [],
          aS = [],
          KS = [],
          jS = [],
          GS = [],
          CS = [],
          nS = [],
          PS = [],
          QS = [],
          DS = [],
          wS = [],
          hS = [],
          ZS = [];
        HS = class {
          constructor(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xN.model;
            this.id = (0, JS.k)(this, fS, void 0), this.type = ((0, JS.k)(this, kS), (0, JS.k)(this, aS, void 0)), this.thumbnail = ((0, JS.k)(this, KS), (0, JS.k)(this, jS, void 0)), this.partnumber = ((0, JS.k)(this, GS), (0, JS.k)(this, CS, void 0)), this.name = ((0, JS.k)(this, nS), (0, JS.k)(this, PS, void 0)), this.pid = ((0, JS.k)(this, QS), (0, JS.k)(this, DS, void 0)), this.pindex = ((0, JS.k)(this, wS), (0, JS.k)(this, hS, void 0)), this.metadatagroup = (0, JS.k)(this, ZS), this.id = SS, this.type = HS
          }
        };
        return (0, JS.l)(HS, "ThreeMfObject"), (() => {
          const OS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gS = [Ax({
            name: "id"
          })], tS = [Ax({
            name: "type"
          })], bS = [Ax({
            name: "thumbnail"
          })], XS = [Ax({
            name: "partnumber"
          })], xS = [Ax({
            name: "name"
          })], NS = [Ax({
            name: "pid"
          })], qS = [Ax({
            name: "pindex"
          })], (0, JS.j)(null, null, gS, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: SS => "id" in SS,
              get: SS => SS.id,
              set: (SS, HS) => {
                SS.id = HS
              }
            },
            metadata: OS
          }, fS, kS), (0, JS.j)(null, null, tS, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: SS => "type" in SS,
              get: SS => SS.type,
              set: (SS, HS) => {
                SS.type = HS
              }
            },
            metadata: OS
          }, aS, KS), (0, JS.j)(null, null, bS, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: SS => "thumbnail" in SS,
              get: SS => SS.thumbnail,
              set: (SS, HS) => {
                SS.thumbnail = HS
              }
            },
            metadata: OS
          }, jS, GS), (0, JS.j)(null, null, XS, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: SS => "partnumber" in SS,
              get: SS => SS.partnumber,
              set: (SS, HS) => {
                SS.partnumber = HS
              }
            },
            metadata: OS
          }, CS, nS), (0, JS.j)(null, null, xS, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: SS => "name" in SS,
              get: SS => SS.name,
              set: (SS, HS) => {
                SS.name = HS
              }
            },
            metadata: OS
          }, PS, QS), (0, JS.j)(null, null, NS, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: SS => "pid" in SS,
              get: SS => SS.pid,
              set: (SS, HS) => {
                SS.pid = HS
              }
            },
            metadata: OS
          }, DS, wS), (0, JS.j)(null, null, qS, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: SS => "pindex" in SS,
              get: SS => SS.pindex,
              set: (SS, HS) => {
                SS.pindex = HS
              }
            },
            metadata: OS
          }, hS, ZS), (0, JS.j)(null, SS = {
            value: HS
          }, uS, {
            kind: "class",
            name: HS.name,
            metadata: OS
          }, null, IS), HS = SS.value, OS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: OS
          }), (0, JS.k)(HS, IS)
        })(), HS
      })(),
      cN = (() => {
        let SS, HS, gS = [Lx({
            ns: tN,
            name: "mesh"
          })],
          tS = [];
        HS = class {
          constructor(SS, HS) {
            this.vertices = SS ?? new vN, this.triangles = HS ?? new LN
          }
        };
        return (0, JS.l)(HS, "ThreeMfMesh"), (() => {
          const bS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JS.j)(null, SS = {
            value: HS
          }, gS, {
            kind: "class",
            name: HS.name,
            metadata: bS
          }, null, tS), HS = SS.value, bS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bS
          }), (0, JS.k)(HS, tS)
        })(), HS
      })(),
      vN = (() => {
        let SS, HS, gS = [Lx({
            ns: tN,
            name: "vertices"
          })],
          tS = [];
        HS = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, JS.l)(HS, "ThreeMfVertices"), (() => {
          const bS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JS.j)(null, SS = {
            value: HS
          }, gS, {
            kind: "class",
            name: HS.name,
            metadata: bS
          }, null, tS), HS = SS.value, bS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bS
          }), (0, JS.k)(HS, tS)
        })(), HS
      })(),
      EN = (() => {
        let SS, HS, gS, tS, bS, XS = [Lx({
            ns: tN,
            name: "vertex"
          })],
          xS = [],
          NS = [],
          qS = [],
          uS = [],
          IS = [],
          fS = [],
          kS = [];
        HS = class {
          constructor() {
            let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, JS.k)(this, NS, void 0), this.y = ((0, JS.k)(this, qS), (0, JS.k)(this, uS, void 0)), this.z = ((0, JS.k)(this, IS), (0, JS.k)(this, fS, void 0)), (0, JS.k)(this, kS), this.x = SS, this.y = HS, this.z = gS
          }
        };
        return (0, JS.l)(HS, "ThreeMfVertex"), (() => {
          const aS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gS = [Ax({
            name: "x"
          })], tS = [Ax({
            name: "y"
          })], bS = [Ax({
            name: "z"
          })], (0, JS.j)(null, null, gS, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: SS => "x" in SS,
              get: SS => SS.x,
              set: (SS, HS) => {
                SS.x = HS
              }
            },
            metadata: aS
          }, NS, qS), (0, JS.j)(null, null, tS, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: SS => "y" in SS,
              get: SS => SS.y,
              set: (SS, HS) => {
                SS.y = HS
              }
            },
            metadata: aS
          }, uS, IS), (0, JS.j)(null, null, bS, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: SS => "z" in SS,
              get: SS => SS.z,
              set: (SS, HS) => {
                SS.z = HS
              }
            },
            metadata: aS
          }, fS, kS), (0, JS.j)(null, SS = {
            value: HS
          }, XS, {
            kind: "class",
            name: HS.name,
            metadata: aS
          }, null, xS), HS = SS.value, aS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: aS
          }), (0, JS.k)(HS, xS)
        })(), HS
      })(),
      LN = (() => {
        let SS, HS, gS = [Lx({
            ns: tN,
            name: "triangles"
          })],
          tS = [];
        HS = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, JS.l)(HS, "ThreeMfTriangles"), (() => {
          const bS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JS.j)(null, SS = {
            value: HS
          }, gS, {
            kind: "class",
            name: HS.name,
            metadata: bS
          }, null, tS), HS = SS.value, bS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bS
          }), (0, JS.k)(HS, tS)
        })(), HS
      })(),
      YN = (() => {
        let SS, HS, gS, tS, bS, XS, xS, NS, qS, uS = [Lx({
            ns: tN,
            name: "triangle"
          })],
          IS = [],
          fS = [],
          kS = [],
          aS = [],
          KS = [],
          jS = [],
          GS = [],
          CS = [],
          nS = [],
          PS = [],
          QS = [],
          DS = [],
          wS = [],
          hS = [],
          ZS = [];
        HS = class {
          constructor(SS, HS, gS) {
            this.v1 = (0, JS.k)(this, fS, void 0), this.v2 = ((0, JS.k)(this, kS), (0, JS.k)(this, aS, void 0)), this.v3 = ((0, JS.k)(this, KS), (0, JS.k)(this, jS, void 0)), this.p1 = ((0, JS.k)(this, GS), (0, JS.k)(this, CS, void 0)), this.p2 = ((0, JS.k)(this, nS), (0, JS.k)(this, PS, void 0)), this.p3 = ((0, JS.k)(this, QS), (0, JS.k)(this, DS, void 0)), this.pid = ((0, JS.k)(this, wS), (0, JS.k)(this, hS, void 0)), (0, JS.k)(this, ZS), this.v1 = SS, this.v2 = HS, this.v3 = gS
          }
        };
        return (0, JS.l)(HS, "ThreeMfTriangle"), (() => {
          const OS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gS = [Ax({
            name: "v1"
          })], tS = [Ax({
            name: "v2"
          })], bS = [Ax({
            name: "v3"
          })], XS = [Ax({
            name: "p1"
          })], xS = [Ax({
            name: "p2"
          })], NS = [Ax({
            name: "p3"
          })], qS = [Ax({
            name: "pid"
          })], (0, JS.j)(null, null, gS, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: SS => "v1" in SS,
              get: SS => SS.v1,
              set: (SS, HS) => {
                SS.v1 = HS
              }
            },
            metadata: OS
          }, fS, kS), (0, JS.j)(null, null, tS, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: SS => "v2" in SS,
              get: SS => SS.v2,
              set: (SS, HS) => {
                SS.v2 = HS
              }
            },
            metadata: OS
          }, aS, KS), (0, JS.j)(null, null, bS, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: SS => "v3" in SS,
              get: SS => SS.v3,
              set: (SS, HS) => {
                SS.v3 = HS
              }
            },
            metadata: OS
          }, jS, GS), (0, JS.j)(null, null, XS, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: SS => "p1" in SS,
              get: SS => SS.p1,
              set: (SS, HS) => {
                SS.p1 = HS
              }
            },
            metadata: OS
          }, CS, nS), (0, JS.j)(null, null, xS, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: SS => "p2" in SS,
              get: SS => SS.p2,
              set: (SS, HS) => {
                SS.p2 = HS
              }
            },
            metadata: OS
          }, PS, QS), (0, JS.j)(null, null, NS, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: SS => "p3" in SS,
              get: SS => SS.p3,
              set: (SS, HS) => {
                SS.p3 = HS
              }
            },
            metadata: OS
          }, DS, wS), (0, JS.j)(null, null, qS, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: SS => "pid" in SS,
              get: SS => SS.pid,
              set: (SS, HS) => {
                SS.pid = HS
              }
            },
            metadata: OS
          }, hS, ZS), (0, JS.j)(null, SS = {
            value: HS
          }, uS, {
            kind: "class",
            name: HS.name,
            metadata: OS
          }, null, IS), HS = SS.value, OS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: OS
          }), (0, JS.k)(HS, IS)
        })(), HS
      })(),
      AN = (() => {
        let SS, HS, gS = [Lx({
            ns: tN,
            name: "components"
          })],
          tS = [];
        HS = class {
          constructor() {
            this.component = []
          }
        };
        return (0, JS.l)(HS, "ThreeMfComponents"), (() => {
          const bS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JS.j)(null, SS = {
            value: HS
          }, gS, {
            kind: "class",
            name: HS.name,
            metadata: bS
          }, null, tS), HS = SS.value, bS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bS
          }), (0, JS.k)(HS, tS)
        })(), HS
      })(),
      yN = (() => {
        let SS, HS, gS, tS, bS = [Lx({
            ns: tN,
            name: "component"
          })],
          XS = [],
          xS = [],
          NS = [],
          qS = [],
          uS = [];
        HS = class {
          constructor(SS, HS) {
            this.objectid = (0, JS.k)(this, xS, void 0), this.transform = ((0, JS.k)(this, NS), (0, JS.k)(this, qS, void 0)), (0, JS.k)(this, uS), this.objectid = SS, this.transform = HS
          }
        };
        return (0, JS.l)(HS, "ThreeMfComponent"), (() => {
          const IS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gS = [Ax({
            name: "objectid"
          })], tS = [Ax({
            name: "transform",
            formatter: wN
          })], (0, JS.j)(null, null, gS, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: SS => "objectid" in SS,
              get: SS => SS.objectid,
              set: (SS, HS) => {
                SS.objectid = HS
              }
            },
            metadata: IS
          }, xS, NS), (0, JS.j)(null, null, tS, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: SS => "transform" in SS,
              get: SS => SS.transform,
              set: (SS, HS) => {
                SS.transform = HS
              }
            },
            metadata: IS
          }, qS, uS), (0, JS.j)(null, SS = {
            value: HS
          }, bS, {
            kind: "class",
            name: HS.name,
            metadata: IS
          }, null, XS), HS = SS.value, IS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IS
          }), (0, JS.k)(HS, XS)
        })(), HS
      })(),
      VN = (() => {
        let SS, HS, gS, tS = [Lx({
            ns: tN,
            name: "basematerials"
          })],
          bS = [],
          XS = [],
          xS = [];
        HS = class {
          constructor(SS) {
            this.id = (0, JS.k)(this, XS, void 0), this.base = ((0, JS.k)(this, xS), []), this.id = SS
          }
        };
        return (0, JS.l)(HS, "ThreeMfBaseMaterials"), (() => {
          const NS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gS = [Ax({
            name: "id"
          })], (0, JS.j)(null, null, gS, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: SS => "id" in SS,
              get: SS => SS.id,
              set: (SS, HS) => {
                SS.id = HS
              }
            },
            metadata: NS
          }, XS, xS), (0, JS.j)(null, SS = {
            value: HS
          }, tS, {
            kind: "class",
            name: HS.name,
            metadata: NS
          }, null, bS), HS = SS.value, NS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: NS
          }), (0, JS.k)(HS, bS)
        })(), HS
      })(),
      iN = (() => {
        let SS, HS, gS, tS, bS = [Lx({
            ns: tN,
            name: "base"
          })],
          XS = [],
          xS = [],
          NS = [],
          qS = [],
          uS = [];
        HS = class {
          constructor(SS, HS) {
            this.name = (0, JS.k)(this, xS, void 0), this.displaycolor = ((0, JS.k)(this, NS), (0, JS.k)(this, qS, void 0)), (0, JS.k)(this, uS), this.name = SS, this.displaycolor = HS
          }
        };
        return (0, JS.l)(HS, "ThreeMfBase"), (() => {
          const IS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gS = [Ax({
            name: "name"
          })], tS = [Ax({
            name: "displaycolor"
          })], (0, JS.j)(null, null, gS, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: SS => "name" in SS,
              get: SS => SS.name,
              set: (SS, HS) => {
                SS.name = HS
              }
            },
            metadata: IS
          }, xS, NS), (0, JS.j)(null, null, tS, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: SS => "displaycolor" in SS,
              get: SS => SS.displaycolor,
              set: (SS, HS) => {
                SS.displaycolor = HS
              }
            },
            metadata: IS
          }, qS, uS), (0, JS.j)(null, SS = {
            value: HS
          }, bS, {
            kind: "class",
            name: HS.name,
            metadata: IS
          }, null, XS), HS = SS.value, IS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IS
          }), (0, JS.k)(HS, XS)
        })(), HS
      })(),
      WN = (() => {
        let SS, HS, gS = [Lx({
            ns: tN,
            name: "build"
          })],
          tS = [];
        HS = class {
          constructor() {
            this.item = []
          }
        };
        return (0, JS.l)(HS, "ThreeMfBuild"), (() => {
          const bS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JS.j)(null, SS = {
            value: HS
          }, gS, {
            kind: "class",
            name: HS.name,
            metadata: bS
          }, null, tS), HS = SS.value, bS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bS
          }), (0, JS.k)(HS, tS)
        })(), HS
      })(),
      zN = (() => {
        let SS, HS, gS, tS, bS, XS = [Lx({
            ns: tN,
            name: "item"
          })],
          xS = [],
          NS = [],
          qS = [],
          uS = [],
          IS = [],
          fS = [],
          kS = [];
        HS = class {
          constructor(SS, HS, gS) {
            this.objectid = (0, JS.k)(this, NS, void 0), this.transform = ((0, JS.k)(this, qS), (0, JS.k)(this, uS, void 0)), this.partnumber = ((0, JS.k)(this, IS), (0, JS.k)(this, fS, void 0)), this.metadatagroup = (0, JS.k)(this, kS), this.objectid = SS, this.transform = HS, this.partnumber = gS
          }
        };
        return (0, JS.l)(HS, "ThreeMfItem"), (() => {
          const aS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gS = [Ax({
            name: "objectid"
          })], tS = [Ax({
            name: "transform",
            formatter: wN
          })], bS = [Ax({
            name: "partnumber"
          })], (0, JS.j)(null, null, gS, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: SS => "objectid" in SS,
              get: SS => SS.objectid,
              set: (SS, HS) => {
                SS.objectid = HS
              }
            },
            metadata: aS
          }, NS, qS), (0, JS.j)(null, null, tS, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: SS => "transform" in SS,
              get: SS => SS.transform,
              set: (SS, HS) => {
                SS.transform = HS
              }
            },
            metadata: aS
          }, uS, IS), (0, JS.j)(null, null, bS, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: SS => "partnumber" in SS,
              get: SS => SS.partnumber,
              set: (SS, HS) => {
                SS.partnumber = HS
              }
            },
            metadata: aS
          }, fS, kS), (0, JS.j)(null, SS = {
            value: HS
          }, XS, {
            kind: "class",
            name: HS.name,
            metadata: aS
          }, null, xS), HS = SS.value, aS && Object.defineProperty(HS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: aS
          }), (0, JS.k)(HS, xS)
        })(), HS
      })();
    class UN {
      constructor(SS, HS) {
        this._object = new dN(SS, HS)
      }
      withName(SS) {
        return this._object.name = SS, this
      }
      withThumbnail(SS) {
        return this._object.thumbnail = SS, this
      }
      withProperty(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = SS, this._object.id = HS, this
      }
      build() {
        return this._object
      }
      reset(SS, HS) {
        this._object = new dN(SS, HS)
      }
    }
    class pN extends UN {
      constructor(SS) {
        super(SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xN.model), this._object.content = new AN
      }
      withComponent(SS, HS) {
        return this._object.content.component.push(new yN(SS, HS)), this
      }
    }
    class sN extends UN {
      constructor(SS) {
        super(SS, xN.model)
      }
      withPostProcessHandlers(SS, HS) {
        return this._vh = SS, this._th = HS, this
      }
      withData(SS) {
        return this._object.content = this._buildMesh(SS), this
      }
      withMaterial(SS, HS) {
        return this._object.pid = SS, this._object.pindex = HS, this
      }
      _buildMesh(SS) {
        const HS = this._buildVertices(SS.positions),
          gS = this._buildTriangle(SS.indices);
        return new cN(HS, gS)
      }
      _buildVertices(SS) {
        const HS = new vN;
        if (SS)
          for (let gS = 0; gS < SS.length;) {
            const tS = SS[gS++],
              bS = SS[gS++],
              XS = SS[gS++];
            let xS = new EN(tS, bS, XS);
            this._vh && (xS = this._vh(xS)), HS.vertex.push(xS)
          }
        return HS
      }
      _buildTriangle(SS) {
        const HS = new LN;
        if (SS)
          for (let gS = 0; gS < SS.length;) {
            const tS = SS[gS++],
              bS = SS[gS++],
              XS = SS[gS++];
            let xS = new YN(tS, bS, XS);
            this._th && (xS = this._th(xS)), HS.triangle.push(xS)
          }
        return HS
      }
    }
    class BN {
      constructor(SS) {
        this._m = new VN(SS)
      }
      withColor(SS, HS) {
        this._m.base = this._m.base ?? [];
        let gS = this._m.base.find((HS => HS.name.toLowerCase() === SS.toLowerCase()));
        return gS ? (gS.displaycolor = this._rgbaToHex(HS), this) : (gS = new iN(SS, this._rgbaToHex(HS)), this._m.base.push(gS), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(SS) {
        const HS = SS => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(SS, 1 / 2.2)))),
          gS = HS(SS.r).toString(16).padStart(2, "0").toUpperCase(),
          tS = HS(SS.g).toString(16).padStart(2, "0").toUpperCase(),
          bS = HS(SS.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof SS.a) {
          return `#${gS}${tS}${bS}${Math.round(Math.min(255,Math.max(0,255*SS.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${gS}${tS}${bS}`
      }
    }
    class MN {
      constructor() {
        this._model = new hN, this._objects = new Map
      }
      withMetaData(SS, HS, gS, tS) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new ZN(SS, HS, gS, tS)), this
      }
      withMaterial(SS) {
        return SS instanceof BN && (SS = SS.build()), SS && (this._model.resources = this._model.resources ?? new ON, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(SS)), this
      }
      withMesh(SS) {
        return SS instanceof sN && (SS = SS.build()), this._model.resources = this._model.resources ?? new ON, this._model.resources.object.push(SS), this
      }
      withComponents(SS) {
        return SS instanceof pN && (SS = SS.build()), this._model.resources = this._model.resources ?? new ON, this._model.resources.object.push(SS), this
      }
      withBuild(SS, HS, gS) {
        return this._model.build = this._model.build ?? new WN, this._model.build.item?.push(new zN(SS, HS, gS)), this
      }
      withUnit(SS) {
        return this._model.unit = SS, this
      }
      reset() {
        return this._model = new hN, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    MN.KnownMetaSet = new Set(hN.KnownMeta.map((SS => SS.toLowerCase())));
    class FN {
      withContentType(SS) {
        this._cts || (this._cts = new GN);
        const HS = this._cts.items;
        return HS.some((HS => HS.ext === SS.ext && HS.ct === SS.ct)) || HS.push(SS), this
      }
      withRelationship(SS) {
        this._rs || (this._rs = new nN);
        const HS = this._rs.items;
        return HS.some((HS => HS.id === SS.id)) || HS.push(SS), this.withContentType(new CN("rels", uN.Relationships)), this
      }
      withModel(SS) {
        return SS instanceof MN && (SS = SS.build()), this._m = SS, this.withContentType(new CN("model", uN.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const SS = `${fN}${kN}`;
        if (!this._rs) {
          const HS = `/${SS}`;
          this.withRelationship(new PN("rel0", jN.ThreeDimModel, HS))
        }
        return new QN(this._cts, this._rs, this._m)
      }
    }
    class RN {
      constructor(SS) {
        this._o = SS
      }
      get options() {
        return this._o
      }
      async serializeAsync(SS) {
        const HS = await this.ensureZipLibReadyAsync();
        if (!HS) return;
        const gS = HS.Zip,
          tS = HS.ZipDeflate;
        if (!gS || !tS) throw new Error("fflate Zip / ZipDeflate not available");
        const bS = function(SS, HS, gS) {
          const bS = new tS(HS, {
            level: 6
          });
          SS.add(bS);
          const XS = function(SS) {
              return {
                push: (HS, gS) => SS.push(HS, gS)
              }
            }(bS),
            xS = new gN(XS),
            NS = new SN(xS).dec("1.0", "UTF-8");
          new mx(NS).serialize(gS), xS.finish()
        };
        for (var XS = arguments.length, xS = new Array(XS > 1 ? XS - 1 : 0), NS = 1; NS < XS; NS++) xS[NS - 1] = arguments[NS];
        const qS = this.toDocument(...xS);
        if (!qS) return;
        const uS = new gS(SS);
        bS(uS, KN, qS.contentTypes), bS(uS, `${IN}${aN}`, qS.relationships), bS(uS, `${fN}${kN}`, qS.model), uS.end()
      }
      toDocument() {
        const SS = (new MN).withUnit(this._o?.unit ?? XN.millimeter);
        if (this.options.metadata)
          for (const bS in this.options.metadata) SS.withMetaData(bS, this.options.metadata[bS]);
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        return (new FN).withModel(this.toModel(SS, ...gS)).build()
      }
    }
    class TN {
      static async SerializeToMemoryAsync(SS) {
        const HS = new Array;
        let gS = 0;
        for (var tS = arguments.length, bS = new Array(tS > 1 ? tS - 1 : 0), XS = 1; XS < tS; XS++) bS[XS - 1] = arguments[XS];
        if (await SS.serializeAsync((function(SS, tS, bS) {
            HS.push(tS), gS += tS.length
          }), ...bS), !gS) return;
        const xS = new Uint8Array(gS);
        let NS = 0;
        for (const qS of HS) xS.set(qS, NS), NS += qS.length;
        return xS
      }
    }
    class oN {}
    oN.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class lN {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = SS, this._to = HS, this._step = gS, this._i = SS
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const SS = this._i;
        return this._i += this._step, SS
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class mN extends RN {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...mN.DefaultOptions,
          ...SS
        })
      }
      toModel(SS) {
        for (var HS = arguments.length, gS = new Array(HS > 1 ? HS - 1 : 0), tS = 1; tS < HS; tS++) gS[tS - 1] = arguments[tS];
        gS = gS.filter((SS => SS instanceof ut.e || SS instanceof aS.c));
        const bS = new lN,
          XS = SS,
          xS = new Map,
          NS = this.options.exportInstances ? [] : null;
        for (let qS = 0; qS < gS.length; qS++) {
          const SS = gS[qS];
          if (SS instanceof aS.c) {
            NS?.push(SS);
            continue
          }
          const HS = SS.name || `mesh${qS}`,
            tS = SS.getWorldMatrix(),
            uS = this._handleBabylonTo3mfMatrixTransformToRef(tS, DN.Zero()),
            IS = SS.dD;
          if (void 0 === IS) continue;
          const fS = 1 == IS.length;
          for (let gS = 0; gS < IS.length; gS++) {
            const tS = IS[gS],
              NS = this._extractSubMesh(SS, tS);
            if (NS) {
              const SS = fS ? `${HS}` : `${HS}_${gS}`,
                qS = new sN(bS.next()).withData(NS).withName(SS).build();
              XS.withMesh(qS), XS.withBuild(qS.id, uS), xS.set(tS, qS)
            }
          }
        }
        if (NS && NS.length) {
          const SS = this._groupBy(NS, (SS => SS.MtS));
          for (const [HS, gS] of Array.from(SS.entries()))
            if (gS && gS.length)
              for (let SS = 0; SS < gS.length; SS++) {
                const tS = gS[SS].getWorldMatrix(),
                  bS = HS.dD;
                for (let SS = 0; SS < bS.length; SS++) {
                  const HS = bS[SS],
                    gS = xS.get(HS);
                  gS && XS.withBuild(gS.id, this._handleBabylonTo3mfMatrixTransformToRef(tS, DN.Zero()))
                }
              }
        }
        return XS.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const SS = globalThis;
          return SS.fflate || await bS.Tools.LoadScriptAsync(oN.FFLATEUrl), SS.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(SS, HS) {
        const gS = SS.mgS();
        if (!gS) return;
        const tS = SS.getVerticesData(mN._PositionKind);
        if (!tS) return;
        if (0 == HS.indexStart && HS.indexCount == gS.length) return {
          positions: tS,
          indices: gS
        };
        const bS = HS.indexStart,
          XS = new Map,
          xS = [],
          NS = new Uint32Array(HS.indexCount);
        for (let qS = 0; qS < HS.indexCount; qS++) {
          const SS = gS[bS + qS];
          let HS = XS.get(SS);
          if (void 0 === HS) {
            HS = XS.size, XS.set(SS, HS);
            const gS = 3 * SS;
            xS.push(tS[gS], tS[gS + 1], tS[gS + 2])
          }
          NS[qS] = HS
        }
        return {
          positions: new Float32Array(xS),
          indices: NS
        }
      }
      _groupBy(SS, HS) {
        const gS = new Map;
        for (const tS of SS) {
          const SS = HS(tS),
            bS = gS.get(SS);
          bS ? bS.push(tS) : gS.set(SS, [tS])
        }
        return gS
      }
      _handleBabylonTo3mfMatrixTransformToRef(SS, HS) {
        const gS = SS.multiplyToRef(mN._R_BJS_TO_3MF, WS.e.Zero()).m;
        return HS.values = [gS[0], gS[1], gS[2], gS[4], gS[5], gS[6], gS[8], gS[9], gS[10], gS[12], gS[13], gS[14]], HS
      }
    }
    mN.DefaultOptions = {
      unit: XN.meter,
      exportInstances: !1
    }, mN._PositionKind = "position", mN._R_BJS_TO_3MF = WS.e.RotationX(Math.PI / 2).multiply(WS.e.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);