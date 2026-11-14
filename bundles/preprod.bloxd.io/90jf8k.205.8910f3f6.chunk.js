export const id = 205;
export const ids = [205, 209];
export const modules = {
  39675: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF
    });
    var CF = SF(39619),
      AF = SF(37963);
    let uF = !1;

    function hF() {
      uF || (uF = !0, AF.d.prototype._sphericalPolynomialTargetSize = 0, AF.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(AF.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = CF.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((FF => {
              this._texture._sphericalPolynomial = FF, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(FF) {
          this._texture && (this._texture._sphericalPolynomial = FF)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  35671: (FF, WF, SF) => {
    SF.d(WF, {
      Color3: () => CF.e,
      d: () => CF.i
    });
    var CF = SF(35678);
    (0, CF.k)()
  },
  36173: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF
    });
    var CF = SF(36181);
    class AF {
      static GetPlanes(FF) {
        const WF = [];
        for (let SF = 0; SF < 6; SF++) WF.push(new CF.d(0, 0, 0, 0));
        return AF.GetPlanesToRef(FF, WF), WF
      }
      static GetNearPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] + SF[2], WF.normal.y = SF[7] + SF[6], WF.normal.z = SF[11] + SF[10], WF.d = SF[15] + SF[14], WF.normalize()
      }
      static GetFarPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] - SF[2], WF.normal.y = SF[7] - SF[6], WF.normal.z = SF[11] - SF[10], WF.d = SF[15] - SF[14], WF.normalize()
      }
      static GetLeftPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] + SF[0], WF.normal.y = SF[7] + SF[4], WF.normal.z = SF[11] + SF[8], WF.d = SF[15] + SF[12], WF.normalize()
      }
      static GetRightPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] - SF[0], WF.normal.y = SF[7] - SF[4], WF.normal.z = SF[11] - SF[8], WF.d = SF[15] - SF[12], WF.normalize()
      }
      static GetTopPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] - SF[1], WF.normal.y = SF[7] - SF[5], WF.normal.z = SF[11] - SF[9], WF.d = SF[15] - SF[13], WF.normalize()
      }
      static GetBottomPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] + SF[1], WF.normal.y = SF[7] + SF[5], WF.normal.z = SF[11] + SF[9], WF.d = SF[15] + SF[13], WF.normalize()
      }
      static GetPlanesToRef(FF, WF) {
        AF.GetNearPlaneToRef(FF, WF[0]), AF.GetFarPlaneToRef(FF, WF[1]), AF.GetLeftPlaneToRef(FF, WF[2]), AF.GetRightPlaneToRef(FF, WF[3]), AF.GetTopPlaneToRef(FF, WF[4]), AF.GetBottomPlaneToRef(FF, WF[5])
      }
      static IsPointInFrustum(FF, WF) {
        for (let SF = 0; SF < 6; SF++)
          if (WF[SF].dotCoordinate(FF) < 0) return !1;
        return !0
      }
    }
  },
  36181: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF
    });
    var CF = SF(35623);
    class AF {
      constructor(FF, WF, SF, AF) {
        this.normal = new CF.r(FF, WF, SF), this.d = AF
      }
      kRF() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new AF(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let FF = this.normal.getHashCode();
        return FF = 397 * FF ^ this.d, FF
      }
      normalize() {
        const FF = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let WF = 0;
        return 0 !== FF && (WF = 1 / FF), this.normal.x *= WF, this.normal.y *= WF, this.normal.z *= WF, this.d *= WF, this
      }
      transform(FF) {
        const WF = AF._TmpMatrix;
        FF.invertToRef(WF);
        const SF = WF.m,
          CF = this.normal.x,
          uF = this.normal.y,
          hF = this.normal.z,
          bW = this.d,
          dF = CF * SF[0] + uF * SF[1] + hF * SF[2] + bW * SF[3],
          PF = CF * SF[4] + uF * SF[5] + hF * SF[6] + bW * SF[7],
          RF = CF * SF[8] + uF * SF[9] + hF * SF[10] + bW * SF[11],
          iW = CF * SF[12] + uF * SF[13] + hF * SF[14] + bW * SF[15];
        return new AF(dF, PF, RF, iW)
      }
      dotCoordinate(FF) {
        return this.normal.x * FF.x + this.normal.y * FF.y + this.normal.z * FF.z + this.d
      }
      copyFromPoints(FF, WF, SF) {
        const CF = WF.x - FF.x,
          AF = WF.y - FF.y,
          uF = WF.z - FF.z,
          hF = SF.x - FF.x,
          bW = SF.y - FF.y,
          dF = SF.z - FF.z,
          PF = AF * dF - uF * bW,
          RF = uF * hF - CF * dF,
          iW = CF * bW - AF * hF,
          eF = Math.sqrt(PF * PF + RF * RF + iW * iW);
        let EF;
        return EF = 0 !== eF ? 1 / eF : 0, this.normal.x = PF * EF, this.normal.y = RF * EF, this.normal.z = iW * EF, this.d = -(this.normal.x * FF.x + this.normal.y * FF.y + this.normal.z * FF.z), this
      }
      isFrontFacingTo(FF, WF) {
        return CF.r.Dot(this.normal, FF) <= WF
      }
      signedDistanceTo(FF) {
        return CF.r.Dot(FF, this.normal) + this.d
      }
      static FromArray(FF) {
        return new AF(FF[0], FF[1], FF[2], FF[3])
      }
      static FromPoints(FF, WF, SF) {
        const CF = new AF(0, 0, 0, 0);
        return CF.copyFromPoints(FF, WF, SF), CF
      }
      static FromPositionAndNormal(FF, WF) {
        const SF = new AF(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(FF, WF, SF)
      }
      static FromPositionAndNormalToRef(FF, WF, SF) {
        return SF.normal.fdF(WF), SF.normal.normalize(), SF.d = -FF.dot(SF.normal), SF
      }
      static SignedDistanceToPlaneFromPositionAndNormal(FF, WF, SF) {
        const AF = -(WF.x * FF.x + WF.y * FF.y + WF.z * FF.z);
        return CF.r.Dot(SF, WF) + AF
      }
    }
    AF._TmpMatrix = CF.b.Identity()
  },
  35617: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      Matrix: () => CF.b,
      Quaternion: () => CF.e,
      RegisterMathVector: () => CF.g,
      TmpVectors: () => CF.j,
      Vector2: () => CF.n,
      HC: () => CF.r,
      Vector4: () => CF.v
    });
    var CF = SF(35623);
    (0, CF.g)()
  },
  36545: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF
    });
    class CF {
      constructor(FF, WF, SF, CF) {
        this.x = FF, this.y = WF, this.width = SF, this.height = CF
      }
      toGlobal(FF, WF) {
        return new CF(this.x * FF, this.y * WF, this.width * FF, this.height * WF)
      }
      toGlobalToRef(FF, WF, SF) {
        return SF.x = this.x * FF, SF.y = this.y * WF, SF.width = this.width * FF, SF.height = this.height * WF, this
      }
      clone() {
        return new CF(this.x, this.y, this.width, this.height)
      }
    }
  },
  39619: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => PF
    });
    var CF = SF(35623),
      AF = SF(35650),
      uF = SF(37960),
      hF = SF(35625),
      bW = SF(35678);
    class dF {
      constructor(FF, WF, SF, CF) {
        this.name = FF, this.worldAxisForNormal = WF, this.worldAxisForFileX = SF, this.worldAxisForFileY = CF
      }
    }
    class PF {
      static _NearestPow2Floor(FF) {
        return FF <= 1 ? 1 : 1 << Math.floor(Math.log2(FF))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(FF) {
        if (!FF.isCube) return null;
        FF.OWF()?.sC().flushFramebuffer();
        const WF = FF.getSize().width,
          SF = FF._sphericalPolynomialTargetSize,
          CF = SF > 0 ? this._NearestPow2Floor(SF) : 0,
          AF = !FF.noMipmap && !0 === FF._texture?.generateMipMaps,
          uF = CF > 0 && CF < WF && AF,
          hF = uF ? Math.max(0, Math.round(Math.log2(WF / CF))) : 0,
          bW = uF ? Math.max(1, Math.floor(WF / Math.pow(2, hF))) : WF,
          dF = FF.readPixels(0, hF, void 0, !1),
          PF = FF.readPixels(1, hF, void 0, !1);
        let RF, iW;
        FF.isRenderTarget ? (RF = FF.readPixels(3, hF, void 0, !1), iW = FF.readPixels(2, hF, void 0, !1)) : (RF = FF.readPixels(2, hF, void 0, !1), iW = FF.readPixels(3, hF, void 0, !1));
        const eF = FF.readPixels(4, hF, void 0, !1),
          EF = FF.readPixels(5, hF, void 0, !1),
          QF = FF.gammaSpace,
          rW = CF > 0 && CF < WF && !uF;
        return new Promise((FF => {
          Promise.all([PF, dF, RF, iW, eF, EF]).then((SF => {
            let [AF, uF, hF, dF, PF, RF] = SF, iW = bW;
            if (rW) {
              const FF = 4;
              AF = this._DownsampleFace(AF, WF, CF, FF), uF = this._DownsampleFace(uF, WF, CF, FF), hF = this._DownsampleFace(hF, WF, CF, FF), dF = this._DownsampleFace(dF, WF, CF, FF), PF = this._DownsampleFace(PF, WF, CF, FF), RF = this._DownsampleFace(RF, WF, CF, FF), iW = CF
            }
            const eF = {
              size: iW,
              right: uF,
              left: AF,
              up: hF,
              down: dF,
              front: PF,
              back: RF,
              format: 5,
              type: AF instanceof Float32Array ? 1 : 0,
              gammaSpace: QF
            };
            FF(this.ConvertCubeMapToSphericalPolynomial(eF))
          }))
        }))
      }
      static _AreaElement(FF, WF) {
        return Math.atan2(FF * WF, Math.sqrt(FF * FF + WF * WF + 1))
      }
      static _DownsampleFace(FF, WF, SF, CF) {
        const AF = FF instanceof Float32Array ? FF : Float32Array.from(FF),
          uF = SF * SF * CF,
          hF = new Float32Array(uF),
          bW = WF / SF,
          dF = 1 / (bW * bW);
        for (let RF = 0; RF < SF; RF++) {
          const FF = Math.floor(RF * bW),
            uF = Math.floor((RF + 1) * bW);
          for (let PF = 0; PF < SF; PF++) {
            const iW = Math.floor(PF * bW),
              eF = Math.floor((PF + 1) * bW),
              EF = (RF * SF + PF) * CF;
            for (let SF = 0; SF < CF; SF++) {
              let bW = 0;
              for (let hF = FF; hF < uF; hF++)
                for (let FF = iW; FF < eF; FF++) bW += AF[(hF * WF + FF) * CF + SF];
              hF[EF + SF] = bW * dF
            }
          }
        }
        if (FF instanceof Float32Array) return hF;
        const PF = new(0, FF.constructor)(uF);
        for (let RF = 0; RF < uF; RF++) PF[RF] = hF[RF] + .5 | 0;
        return PF
      }
      static ConvertCubeMapToSphericalPolynomial(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const SF = WF > 0 ? this._NearestPow2Floor(WF) : 0;
        if (SF > 0 && FF.size > SF) {
          const WF = 5 === FF.format ? 4 : 3,
            CF = ["right", "left", "up", "down", "front", "back"],
            AF = {};
          for (const uF of CF) AF[uF] = this._DownsampleFace(FF[uF], FF.size, SF, WF);
          FF = {
            ...FF,
            ...AF,
            size: SF
          }
        }
        const CF = new uF.d;
        let dF = 0;
        const PF = 2 / FF.size,
          RF = PF,
          iW = .5 * PF,
          eF = iW - 1;
        for (let uF = 0; uF < 6; uF++) {
          const WF = this._FileFaces[uF],
            SF = FF[WF.name];
          let EF = eF;
          const QF = 5 === FF.format ? 4 : 3;
          for (let uF = 0; uF < FF.size; uF++) {
            let rW = eF;
            for (let RF = 0; RF < FF.size; RF++) {
              const eF = WF.worldAxisForFileX.scale(rW).add(WF.worldAxisForFileY.scale(EF)).add(WF.worldAxisForNormal);
              eF.normalize();
              const gW = this._AreaElement(rW - iW, EF - iW) - this._AreaElement(rW - iW, EF + iW) - this._AreaElement(rW + iW, EF - iW) + this._AreaElement(rW + iW, EF + iW);
              let tW = SF[uF * FF.size * QF + RF * QF + 0],
                TF = SF[uF * FF.size * QF + RF * QF + 1],
                aW = SF[uF * FF.size * QF + RF * QF + 2];
              isNaN(tW) && (tW = 0), isNaN(TF) && (TF = 0), isNaN(aW) && (aW = 0), 0 === FF.type && (tW /= 255, TF /= 255, aW /= 255), FF.gammaSpace && (tW = Math.pow((0, AF.Clamp)(tW), hF.f), TF = Math.pow((0, AF.Clamp)(TF), hF.f), aW = Math.pow((0, AF.Clamp)(aW), hF.f));
              const kW = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const FF = Math.max(tW, TF, aW);
                if (FF > kW) {
                  const WF = kW / FF;
                  tW *= WF, TF *= WF, aW *= WF
                }
              } else tW = (0, AF.Clamp)(tW, 0, kW), TF = (0, AF.Clamp)(TF, 0, kW), aW = (0, AF.Clamp)(aW, 0, kW);
              const qW = new bW.e(tW, TF, aW);
              CF.addLight(eF, qW, gW), dF += gW, rW += PF
            }
            EF += RF
          }
        }
        const EF = 6 * (4 * Math.PI) / 6 / dF;
        return CF.scaleInPlace(EF), CF.convertIncidentRadianceToIrradiance(), CF.convertIrradianceToLambertianRadiance(), uF.g.FromHarmonics(CF)
      }
    }
    PF._FileFaces = [new dF("right", new CF.r(1, 0, 0), new CF.r(0, 0, -1), new CF.r(0, -1, 0)), new dF("left", new CF.r(-1, 0, 0), new CF.r(0, 0, 1), new CF.r(0, -1, 0)), new dF("up", new CF.r(0, 1, 0), new CF.r(1, 0, 0), new CF.r(0, 0, 1)), new dF("down", new CF.r(0, -1, 0), new CF.r(1, 0, 0), new CF.r(0, 0, -1)), new dF("front", new CF.r(0, 0, 1), new CF.r(1, 0, 0), new CF.r(0, -1, 0)), new dF("back", new CF.r(0, 0, -1), new CF.r(-1, 0, 0), new CF.r(0, -1, 0))], PF.MAX_HDRI_VALUE = 4096, PF.PRESERVE_CLAMPED_COLORS = !1
  },
  39403: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF.i,
      d: () => CF.m
    });
    var CF = SF(38010);
    (0, CF.o)()
  },
  36308: (FF, WF, SF) => {
    function CF() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (FF => {
        const WF = 16 * Math.random() | 0;
        return ("x" === FF ? WF : 3 & WF | 8).toString(16)
      }))
    }
    SF.d(WF, {
      b: () => CF
    })
  },
  39651: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF
    });
    var CF = SF(39636),
      AF = SF(39657);
    class uF {
      static ExpandRGBDTexture(FF) {
        const WF = FF._texture;
        if (!WF || !FF.isRGBD) return;
        const AF = WF.sC(),
          uF = AF.getCaps(),
          hF = WF.isReady;
        let bW = !1;
        uF.textureHalfFloatRender && uF.textureHalfFloatLinearFiltering ? (bW = !0, WF.type = 2) : uF.textureFloatRender && uF.textureFloatLinearFiltering && (bW = !0, WF.type = 1), bW && (WF.isReady = !1, WF._isRGBD = !1, WF.invertY = !1);
        const dF = async () => {
          const uF = AF.isWebGPU,
            hF = uF ? 1 : 0;
          WF.isReady = !1, uF ? await SF.e(312).then((() => SF(59128))) : await SF.e(294).then((() => SF(59136)));
          const bW = new CF.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, AF, !1, void 0, WF.type, void 0, null, !1, void 0, hF);
          bW.externalTextureSamplerBinding = !0;
          const dF = AF.createRenderTargetTexture(WF.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: WF.samplingMode,
            type: WF.type,
            format: 5
          });
          bW.onEffectCreatedObservable.addOnce((SF => {
            SF.executeWhenCompiled((() => {
              bW.onApply = FF => {
                FF._bindTexture("textureSampler", WF), FF.setFloat2("scale", 1, 1)
              }, FF.OWF()?.postProcessManager.directRender([bW], dF, !0), AF.restoreDefaultFramebuffer(), AF._releaseTexture(WF), bW && bW.dispose(), dF._swapAndDie(WF), WF.isReady = !0
            }))
          }))
        };
        bW && (hF ? dF() : FF.onLoadObservable.addOnce(dF))
      }
      static async EncodeTextureToRGBD(FF, WF) {
        let CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return WF.sC().isWebGPU ? await SF.e(313).then((() => SF(59155))) : await SF.e(295).then((() => SF(59150))), await (0, AF.d)("rgbdEncode", FF, WF, CF, 1, 5)
      }
    }
  },
  58883: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      AsyncLoop: () => CF.c,
      RegisterTools: () => CF.g,
      Tools: () => CF.h,
      className: () => CF.l
    });
    var CF = SF(38065);
    (0, CF.g)()
  },
  39690: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => AF
    });
    class CF {
      constructor(FF) {
        this._pendingActions = new Array, this._workerInfos = FF.map((FF => ({
          workerPromise: Promise.resolve(FF),
          idle: !0
        })))
      }
      dispose() {
        for (const FF of this._workerInfos) FF.workerPromise.then((FF => {
          FF.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(FF) {
        this._executeOnIdleWorker(FF) || this._pendingActions.push(FF)
      }
      _executeOnIdleWorker(FF) {
        for (const WF of this._workerInfos)
          if (WF.idle) return this._execute(WF, FF), !0;
        return !1
      }
      _execute(FF, WF) {
        FF.idle = !1, FF.workerPromise.then((SF => {
          WF(SF, (() => {
            const WF = this._pendingActions.shift();
            WF ? this._execute(FF, WF) : FF.idle = !0
          }))
        }))
      }
    }
    class AF extends CF {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AF.DefaultOptions;
        super([]), this._maxWorkers = FF, this._createWorkerAsync = WF, this._options = SF
      }
      push(FF) {
        if (!this._executeOnIdleWorker(FF))
          if (this._workerInfos.length < this._maxWorkers) {
            const WF = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(WF), this._execute(WF, FF)
          } else this._pendingActions.push(FF)
      }
      _execute(FF, WF) {
        FF.timeoutId && (clearTimeout(FF.timeoutId), delete FF.timeoutId), super._execute(FF, ((SF, CF) => {
          WF(SF, (() => {
            CF(), FF.idle && (FF.timeoutId = setTimeout((() => {
              FF.workerPromise.then((FF => {
                FF.terminate()
              }));
              const WF = this._workerInfos.indexOf(FF); - 1 !== WF && this._workerInfos.splice(WF, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    AF.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  58915: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      AbstractThreeMfSerializer: () => Ub,
      BVHExporter: () => Lh,
      ContentTypeFileName: () => Qb,
      DefaultXmlSerializerFormatOptions: () => nh,
      DefaultXmlSerializerNumberOptions: () => sh,
      EXT_lights_area: () => gu,
      EXT_mesh_gpu_instancing: () => fC,
      EXT_texture_avif: () => Ah,
      EXT_texture_webp: () => Fh,
      GLTF2Export: () => GC,
      GLTFData: () => PF,
      GetXmlFieldMeta: () => Gh,
      GetXmlName: () => zb,
      IsQualifiedName: () => mb,
      KHR_draco_mesh_compression: () => JC,
      KHR_interactivity: () => PA,
      KHR_lights_punctual: () => uA,
      KHR_materials_anisotropy: () => ku,
      KHR_materials_clearcoat: () => LA,
      KHR_materials_coat: () => YA,
      KHR_materials_diffuse_roughness: () => zh,
      KHR_materials_diffuse_transmission: () => fA,
      KHR_materials_dispersion: () => HA,
      KHR_materials_emissive_strength: () => UA,
      KHR_materials_fuzz: () => Ru,
      KHR_materials_ior: () => JA,
      KHR_materials_iridescence: () => Wu,
      KHR_materials_openpbr: () => su,
      KHR_materials_sheen: () => uu,
      KHR_materials_specular: () => Qu,
      KHR_materials_transmission: () => Tu,
      KHR_materials_unlit: () => Nu,
      KHR_materials_volume: () => Ou,
      KHR_materials_volume_scatter: () => Yu,
      KHR_texture_basisu: () => vh,
      KHR_texture_transform: () => wu,
      Known3mfRelationshipTypes: () => rd,
      KnownI3mfContentType: () => db,
      Matrix3d: () => qd,
      MatrixFormatter: () => Vb,
      ModelFileName: () => eb,
      NumberFormatter: () => wh,
      OBJExport: () => hF,
      Object3dDirName: () => Rb,
      OpenXmlContentTypesNamespace: () => hb,
      OpenXmlRelationshipsNamespace: () => bd,
      RegisterEXT_lights_area: () => TA,
      RegisterEXT_mesh_gpu_instancing: () => sC,
      RegisterEXT_texture_avif: () => hh,
      RegisterEXT_texture_webp: () => Sh,
      RegisterKHR_draco_mesh_compression: () => lC,
      RegisterKHR_interactivity: () => iu,
      RegisterKHR_lights_punctual: () => bu,
      RegisterKHR_materials_anisotropy: () => VA,
      RegisterKHR_materials_clearcoat: () => OA,
      RegisterKHR_materials_coat: () => cu,
      RegisterKHR_materials_diffuse_roughness: () => fu,
      RegisterKHR_materials_diffuse_transmission: () => sA,
      RegisterKHR_materials_dispersion: () => wA,
      RegisterKHR_materials_emissive_strength: () => ju,
      RegisterKHR_materials_fuzz: () => eu,
      RegisterKHR_materials_ior: () => lA,
      RegisterKHR_materials_iridescence: () => Cu,
      RegisterKHR_materials_openpbr: () => Hu,
      RegisterKHR_materials_sheen: () => bh,
      RegisterKHR_materials_specular: () => gh,
      RegisterKHR_materials_transmission: () => kh,
      RegisterKHR_materials_unlit: () => Lu,
      RegisterKHR_materials_volume: () => Zu,
      RegisterKHR_materials_volume_scatter: () => ch,
      RegisterKHR_texture_basisu: () => pu,
      RegisterKHR_texture_transform: () => Uu,
      RelationshipDirName: () => Pb,
      RelationshipFileName: () => Eb,
      ResolveFormatOptions: () => Kh,
      ResolveNumberOptions: () => Hh,
      STLExport: () => bb,
      ST_ObjectType: () => ub,
      ST_Unit: () => Ab,
      StringXmlWriter: () => Fb,
      ThreeDimModelNamespace: () => Sb,
      ThreeMf: () => Bb,
      ThreeMfBase: () => Ib,
      ThreeMfBaseMaterials: () => zd,
      ThreeMfBuild: () => fb,
      ThreeMfComponent: () => Gb,
      ThreeMfComponents: () => cd,
      ThreeMfComponentsBuilder: () => nb,
      ThreeMfContentType: () => td,
      ThreeMfContentTypes: () => gd,
      ThreeMfDocument: () => kd,
      ThreeMfDocumentBuilder: () => Xb,
      ThreeMfItem: () => yd,
      ThreeMfMaterialBuilder: () => Kb,
      ThreeMfMesh: () => xd,
      ThreeMfMeshBuilder: () => Hb,
      ThreeMfMeta: () => Db,
      ThreeMfMetadataGroup: () => Lb,
      ThreeMfModel: () => Nb,
      ThreeMfModelBuilder: () => wb,
      ThreeMfObject: () => Ob,
      ThreeMfObjectBuilder: () => sb,
      ThreeMfRelationship: () => ad,
      ThreeMfRelationships: () => Tb,
      ThreeMfResources: () => md,
      ThreeMfSerializer: () => Jb,
      ThreeMfSerializerGlobalConfiguration: () => jd,
      ThreeMfTriangle: () => Mb,
      ThreeMfTriangles: () => Yb,
      ThreeMfVertex: () => ob,
      ThreeMfVertices: () => Zb,
      ToQualifiedString: () => yb,
      TokenType: () => ph,
      TriangleSetsNamespace: () => Cb,
      USDZExportAsync: () => Nh,
      Utf8XmlWriterToBytes: () => Wb,
      XmlAttr: () => Mh,
      XmlBuilder: () => lh,
      XmlElem: () => cb,
      XmlIgnore: () => Yh,
      XmlName: () => oh,
      XmlNameToParts: () => fh,
      XmlSerializer: () => vb,
      _ConvertToGLTFPBRMetallicRoughness: () => LS,
      _SolveMetallic: () => DS,
      __IGLTFExporterExtension: () => bW
    });
    var CF = SF(35617),
      AF = SF(58883),
      uF = SF(38267);
    class hF {
      static OBJ(FF, WF, SF, hF) {
        const bW = [];
        let dF = 1,
          PF = 1;
        WF && (SF || (SF = "mat"), bW.push("mtllib " + SF + ".mtl"));
        for (let RF = 0; RF < FF.length; RF++) {
          const SF = FF[RF],
            iW = SF.name || `mesh${RF}}`;
          bW.push(`o ${iW}`);
          let eF = null;
          if (hF) {
            const FF = SF.computeWorldMatrix(!0);
            eF = new CF.Matrix, FF.invertToRef(eF), SF.bakeTransformIntoVertices(FF)
          }
          if (WF) {
            const FF = SF.material;
            FF && bW.push("usemtl " + FF.id)
          }
          const EF = SF.geometry;
          if (!EF) {
            AF.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const QF = EF.getVerticesData("position"),
            rW = EF.getVerticesData("normal"),
            gW = EF.getVerticesData("uv"),
            tW = EF.yEF();
          let TF = 0,
            aW = 0;
          if (!QF || !tW) {
            AF.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const kW = FF[0].OWF().useRightHandedSystem ? 1 : -1;
          for (let FF = 0; FF < QF.length; FF += 3) bW.push("v " + QF[FF] * kW + " " + QF[FF + 1] + " " + QF[FF + 2]), TF++;
          if (null != rW)
            for (let FF = 0; FF < rW.length; FF += 3) bW.push("vn " + rW[FF] * kW + " " + rW[FF + 1] + " " + rW[FF + 2]);
          if (null != gW)
            for (let FF = 0; FF < gW.length; FF += 2) bW.push("vt " + gW[FF] + " " + gW[FF + 1]), aW++;
          const qW = ["", "", ""],
            VF = (SF.material || SF.OWF().defaultMaterial)._getEffectiveOrientation(SF),
            [NF, DF] = VF === uF.c.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let FF = 0; FF < tW.length; FF += 3) {
            const WF = [String(tW[FF] + dF), String(tW[FF + NF] + dF), String(tW[FF + DF] + dF)],
              SF = [String(tW[FF] + PF), String(tW[FF + NF] + PF), String(tW[FF + DF] + PF)],
              CF = WF,
              AF = null != gW ? SF : qW,
              uF = null != rW ? WF : qW;
            bW.push("f " + CF[0] + "/" + AF[0] + "/" + uF[0] + " " + CF[1] + "/" + AF[1] + "/" + uF[1] + " " + CF[2] + "/" + AF[2] + "/" + uF[2])
          }
          hF && eF && SF.bakeTransformIntoVertices(eF), dF += TF, PF += aW
        }
        return bW.join("\n")
      }
      static MTL(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const SF = [],
          CF = FF.material;
        SF.push("newmtl " + WF), SF.push("  Ns " + CF.specularPower.toFixed(4)), SF.push("  Ni 1.5000"), SF.push("  d " + CF.alpha.toFixed(4)), SF.push("  Tr 0.0000"), SF.push("  Tf 1.0000 1.0000 1.0000"), SF.push("  illum 2"), SF.push("  Ka " + CF.ambientColor.r.toFixed(4) + " " + CF.ambientColor.g.toFixed(4) + " " + CF.ambientColor.b.toFixed(4)), SF.push("  Kd " + CF.diffuseColor.r.toFixed(4) + " " + CF.diffuseColor.g.toFixed(4) + " " + CF.diffuseColor.b.toFixed(4)), SF.push("  Ks " + CF.specularColor.r.toFixed(4) + " " + CF.specularColor.g.toFixed(4) + " " + CF.specularColor.b.toFixed(4)), SF.push("  Ke " + CF.emissiveColor.r.toFixed(4) + " " + CF.emissiveColor.g.toFixed(4) + " " + CF.emissiveColor.b.toFixed(4));
        CF.ambientTexture && SF.push("  map_Ka " + CF.ambientTexture.name), CF.diffuseTexture && SF.push("  map_Kd " + CF.diffuseTexture.name), CF.specularTexture && SF.push("  map_Ks " + CF.specularTexture.name), CF.bumpTexture && SF.push("  map_bump -imfchan z " + CF.bumpTexture.name), CF.opacityTexture && SF.push("  map_d " + CF.opacityTexture.name);
        return SF.join("\n")
      }
    }
    var bW = 0,
      dF = SF(39403);
    class PF {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const FF in this.files) {
          const WF = this.files[FF],
            SF = new Blob([WF], {
              type: (0, dF.b)(FF)
            });
          AF.Tools.Download(SF, FF)
        }
      }
    }
    var RF = SF(39116),
      iW = SF(39075),
      eF = SF(39486),
      EF = SF(39079),
      QF = SF(37783),
      rW = SF(35639),
      gW = SF(35671),
      tW = SF(35650);
    const TF = tW.HighestCommonFactor,
      aW = {
        ...tW,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: TF
      };
    var kW = SF(39657),
      qW = SF(39102),
      VF = SF(39450),
      NF = SF(39455),
      DF = SF(39669);
    (0, DF.RegisterDumpTools)();
    var LF = SF(37972),
      mW = SF(37974),
      OF = SF(37076),
      xW = SF(38081),
      ZF = SF(38448),
      oF = SF(39651);
    let YF = 0;
    const MF = (FF, WF, SF, CF) => {
        if (!FF[SF]) {
          const AF = FF.useDelayedTextureLoading;
          FF.useDelayedTextureLoading = !1;
          const uF = FF._blockEntityCollection;
          FF._blockEntityCollection = !1;
          const hF = ZF.i.CreateFromBase64String(WF, CF + YF++, FF, !0, !1, ZF.i.BILINEAR_SAMPLINGMODE);
          FF._blockEntityCollection = uF;
          const bW = FF.sC().getLoadedTexturesCache(),
            dF = bW.indexOf(hF.getInternalTexture()); - 1 !== dF && bW.splice(dF, 1), hF.isRGBD = !0, hF.wrapU = ZF.i.CLAMP_ADDRESSMODE, hF.wrapV = ZF.i.CLAMP_ADDRESSMODE, FF[SF] = hF, FF.useDelayedTextureLoading = AF, oF.c.ExpandRGBDTexture(hF);
          const PF = FF.sC().onContextRestoredObservable.add((() => {
            hF.isRGBD = !0;
            const WF = FF.onBeforeRenderObservable.add((() => {
              hF.isReady() && (FF.onBeforeRenderObservable.remove(WF), oF.c.ExpandRGBDTexture(hF))
            }))
          }));
          FF.xSF.add((() => {
            FF.sC().onContextRestoredObservable.remove(PF)
          }))
        }
        return FF[SF]
      },
      cW = FF => MF(FF, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      GF = FF => MF(FF, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      zW = FF => MF(FF, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var IF = SF(38057),
      fF = SF(35623),
      yW = SF(38109),
      sF = SF(38258),
      nF = SF(38333);
    class HF extends sF.e {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let KF = (() => {
      var FF, WF, SF, CF, AF, uF, hF, bW, dF, PF;
      let RF, iW, eF, EF, QF, rW, gW, tW, TF, aW = nF.e,
        kW = [],
        qW = [],
        VF = [],
        NF = [],
        DF = [],
        OF = [],
        xW = [],
        ZF = [],
        oF = [],
        YF = [],
        MF = [],
        cW = [],
        GF = [],
        zW = [],
        IF = [],
        fF = [],
        yW = [],
        sF = [];
      return FF = class extends aW {
        get useEnergyConservation() {
          return (0, LF.d)(this, WF, "f")
        }
        set useEnergyConservation(FF) {
          (0, LF.h)(this, WF, FF, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, LF.d)(this, SF, "f")
        }
        set useSmithVisibilityHeightCorrelated(FF) {
          (0, LF.h)(this, SF, FF, "f")
        }
        get useSphericalHarmonics() {
          return (0, LF.d)(this, CF, "f")
        }
        set useSphericalHarmonics(FF) {
          (0, LF.h)(this, CF, FF, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, LF.d)(this, AF, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(FF) {
          (0, LF.h)(this, AF, FF, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, LF.d)(this, uF, "f")
        }
        set mixIblRadianceWithIrradiance(FF) {
          (0, LF.h)(this, uF, FF, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, LF.d)(this, hF, "f")
        }
        set useLegacySpecularEnergyConservation(FF) {
          (0, LF.h)(this, hF, FF, "f")
        }
        get baseDiffuseModel() {
          return (0, LF.d)(this, bW, "f")
        }
        set baseDiffuseModel(FF) {
          (0, LF.h)(this, bW, FF, "f")
        }
        get dielectricSpecularModel() {
          return (0, LF.d)(this, dF, "f")
        }
        set dielectricSpecularModel(FF) {
          (0, LF.h)(this, dF, FF, "f")
        }
        get conductorSpecularModel() {
          return (0, LF.d)(this, PF, "f")
        }
        set conductorSpecularModel(FF) {
          (0, LF.h)(this, PF, FF, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(RF) {
          let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(RF, "PBRBRDF", 90, new HF, iW), this._useEnergyConservation = FF.DEFAULT_USE_ENERGY_CONSERVATION, WF.set(this, (0, LF.k)(this, kW, FF.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, LF.k)(this, qW), FF.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), SF.set(this, (0, LF.k)(this, VF, FF.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, LF.k)(this, NF), FF.DEFAULT_USE_SPHERICAL_HARMONICS), CF.set(this, (0, LF.k)(this, DF, FF.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, LF.k)(this, OF), FF.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), AF.set(this, (0, LF.k)(this, xW, FF.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, LF.k)(this, ZF), FF.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), uF.set(this, (0, LF.k)(this, oF, FF.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, LF.k)(this, YF), FF.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), hF.set(this, (0, LF.k)(this, MF, FF.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, LF.k)(this, cW), FF.DEFAULT_DIFFUSE_MODEL), bW.set(this, (0, LF.k)(this, GF, FF.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, LF.k)(this, zW), FF.DEFAULT_DIELECTRIC_SPECULAR_MODEL), dF.set(this, (0, LF.k)(this, IF, FF.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, LF.k)(this, fF), FF.DEFAULT_CONDUCTOR_SPECULAR_MODEL), PF.set(this, (0, LF.k)(this, yW, FF.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, LF.k)(this, sF), this._internalMarkAllSubMeshesAsMiscDirty = RF._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(FF) {
          FF.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, FF.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, FF.SPHERICAL_HARMONICS = this._useSphericalHarmonics, FF.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, FF.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, FF.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, FF.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, FF.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, FF.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, WF = new WeakMap, SF = new WeakMap, CF = new WeakMap, AF = new WeakMap, uF = new WeakMap, hF = new WeakMap, bW = new WeakMap, dF = new WeakMap, PF = new WeakMap, (() => {
        const WF = "function" === typeof Symbol && Symbol.metadata ? Object.create(aW[Symbol.metadata] ?? null) : void 0;
        RF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsMiscDirty")], iW = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsMiscDirty")], eF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsMiscDirty")], EF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsMiscDirty")], QF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsMiscDirty")], rW = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsMiscDirty")], gW = [(0, mW.H)("baseDiffuseModel"), (0, mW.i)("_markAllSubMeshesAsMiscDirty")], tW = [(0, mW.H)("dielectricSpecularModel"), (0, mW.i)("_markAllSubMeshesAsMiscDirty")], TF = [(0, mW.H)("conductorSpecularModel"), (0, mW.i)("_markAllSubMeshesAsMiscDirty")], (0, LF.j)(FF, null, RF, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: FF => "useEnergyConservation" in FF,
            get: FF => FF.useEnergyConservation,
            set: (FF, WF) => {
              FF.useEnergyConservation = WF
            }
          },
          metadata: WF
        }, kW, qW), (0, LF.j)(FF, null, iW, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: FF => "useSmithVisibilityHeightCorrelated" in FF,
            get: FF => FF.useSmithVisibilityHeightCorrelated,
            set: (FF, WF) => {
              FF.useSmithVisibilityHeightCorrelated = WF
            }
          },
          metadata: WF
        }, VF, NF), (0, LF.j)(FF, null, eF, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: FF => "useSphericalHarmonics" in FF,
            get: FF => FF.useSphericalHarmonics,
            set: (FF, WF) => {
              FF.useSphericalHarmonics = WF
            }
          },
          metadata: WF
        }, DF, OF), (0, LF.j)(FF, null, EF, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: FF => "useSpecularGlossinessInputEnergyConservation" in FF,
            get: FF => FF.useSpecularGlossinessInputEnergyConservation,
            set: (FF, WF) => {
              FF.useSpecularGlossinessInputEnergyConservation = WF
            }
          },
          metadata: WF
        }, xW, ZF), (0, LF.j)(FF, null, QF, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: FF => "mixIblRadianceWithIrradiance" in FF,
            get: FF => FF.mixIblRadianceWithIrradiance,
            set: (FF, WF) => {
              FF.mixIblRadianceWithIrradiance = WF
            }
          },
          metadata: WF
        }, oF, YF), (0, LF.j)(FF, null, rW, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: FF => "useLegacySpecularEnergyConservation" in FF,
            get: FF => FF.useLegacySpecularEnergyConservation,
            set: (FF, WF) => {
              FF.useLegacySpecularEnergyConservation = WF
            }
          },
          metadata: WF
        }, MF, cW), (0, LF.j)(FF, null, gW, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: FF => "baseDiffuseModel" in FF,
            get: FF => FF.baseDiffuseModel,
            set: (FF, WF) => {
              FF.baseDiffuseModel = WF
            }
          },
          metadata: WF
        }, GF, zW), (0, LF.j)(FF, null, tW, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: FF => "dielectricSpecularModel" in FF,
            get: FF => FF.dielectricSpecularModel,
            set: (FF, WF) => {
              FF.dielectricSpecularModel = WF
            }
          },
          metadata: WF
        }, IF, fF), (0, LF.j)(FF, null, TF, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: FF => "conductorSpecularModel" in FF,
            get: FF => FF.conductorSpecularModel,
            set: (FF, WF) => {
              FF.conductorSpecularModel = WF
            }
          },
          metadata: WF
        }, yW, sF), WF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WF
        })
      })(), FF.DEFAULT_USE_ENERGY_CONSERVATION = !0, FF.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, FF.DEFAULT_USE_SPHERICAL_HARMONICS = !0, FF.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, FF.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, FF.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, FF.DEFAULT_DIFFUSE_MODEL = 0, FF.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, FF.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, FF
    })();
    var wF = SF(38242),
      XF = SF(35678),
      UF = SF(38249),
      BF = SF(38088),
      jW = SF(38320),
      vW = SF(38317),
      JF = SF(38323),
      pF = SF(38303);
    class lF extends sF.e {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let FW = (() => {
      var FF, WF, SF, CF, AF, uF, hF, bW, dF, PF;
      let RF, iW, eF, EF, QF, rW, gW, tW, TF, aW, kW, qW, VF, NF, DF = nF.e,
        OF = [],
        xW = [],
        ZF = [],
        oF = [],
        YF = [],
        MF = [],
        cW = [],
        GF = [],
        zW = [],
        IF = [],
        fF = [],
        yW = [],
        sF = [],
        HF = [],
        KF = [],
        wF = [],
        UF = [],
        BF = [],
        jW = [],
        JF = [],
        FW = [],
        WW = [],
        SW = [],
        CW = [],
        AW = [],
        uW = [],
        hW = [],
        bS = [];
      return FF = class extends DF {
        get isEnabled() {
          return (0, LF.d)(this, WF, "f")
        }
        set isEnabled(FF) {
          (0, LF.h)(this, WF, FF, "f")
        }
        get indexOfRefraction() {
          return (0, LF.d)(this, SF, "f")
        }
        set indexOfRefraction(FF) {
          (0, LF.h)(this, SF, FF, "f")
        }
        get texture() {
          return (0, LF.d)(this, CF, "f")
        }
        set texture(FF) {
          (0, LF.h)(this, CF, FF, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, LF.d)(this, AF, "f")
        }
        set useRoughnessFromMainTexture(FF) {
          (0, LF.h)(this, AF, FF, "f")
        }
        get textureRoughness() {
          return (0, LF.d)(this, uF, "f")
        }
        set textureRoughness(FF) {
          (0, LF.h)(this, uF, FF, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, LF.d)(this, hF, "f")
        }
        set remapF0OnInterfaceChange(FF) {
          (0, LF.h)(this, hF, FF, "f")
        }
        get bumpTexture() {
          return (0, LF.d)(this, bW, "f")
        }
        set bumpTexture(FF) {
          (0, LF.h)(this, bW, FF, "f")
        }
        get isTintEnabled() {
          return (0, LF.d)(this, dF, "f")
        }
        set isTintEnabled(FF) {
          (0, LF.h)(this, dF, FF, "f")
        }
        get tintTexture() {
          return (0, LF.d)(this, PF, "f")
        }
        set tintTexture(FF) {
          (0, LF.h)(this, PF, FF, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(RF) {
          let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(RF, "PBRClearCoat", 100, new lF, iW), this._isEnabled = !1, WF.set(this, (0, LF.k)(this, OF, !1)), this.intensity = ((0, LF.k)(this, xW), (0, LF.k)(this, ZF, 1)), this.roughness = ((0, LF.k)(this, oF), (0, LF.k)(this, YF, 0)), this._indexOfRefraction = ((0, LF.k)(this, MF), FF._DefaultIndexOfRefraction), SF.set(this, (0, LF.k)(this, cW, FF._DefaultIndexOfRefraction)), this._texture = ((0, LF.k)(this, GF), null), CF.set(this, (0, LF.k)(this, zW, null)), this._useRoughnessFromMainTexture = ((0, LF.k)(this, IF), !0), AF.set(this, (0, LF.k)(this, fF, !0)), this._textureRoughness = ((0, LF.k)(this, yW), null), uF.set(this, (0, LF.k)(this, sF, null)), this._remapF0OnInterfaceChange = ((0, LF.k)(this, HF), !0), hF.set(this, (0, LF.k)(this, KF, !0)), this._bumpTexture = ((0, LF.k)(this, wF), null), bW.set(this, (0, LF.k)(this, UF, null)), this._isTintEnabled = ((0, LF.k)(this, BF), !1), dF.set(this, (0, LF.k)(this, jW, !1)), this.tintColor = ((0, LF.k)(this, JF), (0, LF.k)(this, FW, XF.e.White())), this.tintColorAtDistance = ((0, LF.k)(this, WW), (0, LF.k)(this, SW, 1)), this.tintThickness = ((0, LF.k)(this, CW), (0, LF.k)(this, AW, 1)), this._tintTexture = ((0, LF.k)(this, uW), null), PF.set(this, (0, LF.k)(this, hW, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, LF.k)(this, bS), this._internalMarkAllSubMeshesAsTexturesDirty = RF._dirtyCallbacks[1]
        }
        isReadyForSubMesh(FF, WF, SF) {
          if (!this._isEnabled) return !0;
          const CF = this._material._disableBumpMap;
          if (FF._areTexturesDirty && WF.texturesEnabled) {
            if (this._texture && vW.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && vW.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (SF.getCaps().standardDerivatives && this._bumpTexture && vW.e.ClearCoatBumpTextureEnabled && !CF && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && vW.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(WF, SF) {
          this._isEnabled ? (WF.CLEARCOAT = !0, WF.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, WF.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, WF._areTexturesDirty && SF.texturesEnabled && (this._texture && vW.e.ClearCoatTextureEnabled ? (0, pF.eb)(this._texture, WF, "CLEARCOAT_TEXTURE") : WF.CLEARCOAT_TEXTURE = !1, this._textureRoughness && vW.e.ClearCoatTextureEnabled ? (0, pF.eb)(this._textureRoughness, WF, "CLEARCOAT_TEXTURE_ROUGHNESS") : WF.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && vW.e.ClearCoatBumpTextureEnabled ? (0, pF.eb)(this._bumpTexture, WF, "CLEARCOAT_BUMP") : WF.CLEARCOAT_BUMP = !1, WF.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === FF._DefaultIndexOfRefraction, this._isTintEnabled ? (WF.CLEARCOAT_TINT = !0, this._tintTexture && vW.e.ClearCoatTintTextureEnabled ? ((0, pF.eb)(this._tintTexture, WF, "CLEARCOAT_TINT_TEXTURE"), WF.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : WF.CLEARCOAT_TINT_TEXTURE = !1) : (WF.CLEARCOAT_TINT = !1, WF.CLEARCOAT_TINT_TEXTURE = !1))) : (WF.CLEARCOAT = !1, WF.CLEARCOAT_TEXTURE = !1, WF.CLEARCOAT_TEXTURE_ROUGHNESS = !1, WF.CLEARCOAT_BUMP = !1, WF.CLEARCOAT_TINT = !1, WF.CLEARCOAT_TINT_TEXTURE = !1, WF.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, WF.CLEARCOAT_DEFAULTIOR = !1, WF.CLEARCOAT_TEXTUREDIRECTUV = 0, WF.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, WF.CLEARCOAT_BUMPDIRECTUV = 0, WF.CLEARCOAT_REMAP_F0 = !1, WF.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, WF.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(FF, WF, SF, CF) {
          if (!this._isEnabled) return;
          const AF = CF.materialDefines,
            uF = this._material.isFrozen,
            hF = this._material._disableBumpMap,
            bW = this._material._invertNormalMapX,
            dF = this._material._invertNormalMapY;
          if (!FF.useUbo || !uF || !FF.isSync) {
            (this._texture || this._textureRoughness) && vW.e.ClearCoatTextureEnabled && (FF.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, pF.A)(this._texture, FF, "clearCoat"), this._textureRoughness && !AF.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, pF.A)(this._textureRoughness, FF, "clearCoatRoughness")), this._bumpTexture && SF.getCaps().standardDerivatives && vW.e.ClearCoatTextureEnabled && !hF && (FF.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, pF.A)(this._bumpTexture, FF, "clearCoatBump"), WF._mirroredCameraPosition ? FF.updateFloat2("vClearCoatTangentSpaceParams", bW ? 1 : -1, dF ? 1 : -1) : FF.updateFloat2("vClearCoatTangentSpaceParams", bW ? -1 : 1, dF ? -1 : 1)), this._tintTexture && vW.e.ClearCoatTintTextureEnabled && (FF.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, pF.A)(this._tintTexture, FF, "clearCoatTint")), FF.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const CF = 1 - this._indexOfRefraction,
              uF = 1 + this._indexOfRefraction,
              PF = Math.pow(-CF / uF, 2),
              RF = 1 / this._indexOfRefraction;
            FF.updateFloat4("vClearCoatRefractionParams", PF, RF, CF, uF), this._isTintEnabled && (FF.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), FF.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          WF.texturesEnabled && (this._texture && vW.e.ClearCoatTextureEnabled && FF.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !AF.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && vW.e.ClearCoatTextureEnabled && FF.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && SF.getCaps().standardDerivatives && vW.e.ClearCoatBumpTextureEnabled && !hF && FF.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && vW.e.ClearCoatTintTextureEnabled && FF.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(FF) {
          return this._texture === FF || (this._textureRoughness === FF || (this._bumpTexture === FF || this._tintTexture === FF))
        }
        getActiveTextures(FF) {
          this._texture && FF.push(this._texture), this._textureRoughness && FF.push(this._textureRoughness), this._bumpTexture && FF.push(this._bumpTexture), this._tintTexture && FF.push(this._tintTexture)
        }
        getAnimatables(FF) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && FF.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && FF.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && FF.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && FF.push(this._tintTexture)
        }
        dispose(FF) {
          FF && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(FF, WF, SF) {
          return FF.CLEARCOAT_BUMP && WF.addFallback(SF++, "CLEARCOAT_BUMP"), FF.CLEARCOAT_TINT && WF.addFallback(SF++, "CLEARCOAT_TINT"), FF.CLEARCOAT && WF.addFallback(SF++, "CLEARCOAT"), SF
        }
        getSamplers(FF) {
          FF.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, WF = new WeakMap, SF = new WeakMap, CF = new WeakMap, AF = new WeakMap, uF = new WeakMap, hF = new WeakMap, bW = new WeakMap, dF = new WeakMap, PF = new WeakMap, (() => {
        const WF = "function" === typeof Symbol && Symbol.metadata ? Object.create(DF[Symbol.metadata] ?? null) : void 0;
        RF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], iW = [(0, mW.H)()], eF = [(0, mW.H)()], EF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], QF = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], rW = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], gW = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], tW = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], TF = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], aW = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], kW = [(0, mW.o)()], qW = [(0, mW.H)()], VF = [(0, mW.H)()], NF = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], (0, LF.j)(FF, null, RF, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: FF => "isEnabled" in FF,
            get: FF => FF.isEnabled,
            set: (FF, WF) => {
              FF.isEnabled = WF
            }
          },
          metadata: WF
        }, OF, xW), (0, LF.j)(FF, null, EF, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: FF => "indexOfRefraction" in FF,
            get: FF => FF.indexOfRefraction,
            set: (FF, WF) => {
              FF.indexOfRefraction = WF
            }
          },
          metadata: WF
        }, cW, GF), (0, LF.j)(FF, null, QF, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: FF => "texture" in FF,
            get: FF => FF.texture,
            set: (FF, WF) => {
              FF.texture = WF
            }
          },
          metadata: WF
        }, zW, IF), (0, LF.j)(FF, null, rW, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "useRoughnessFromMainTexture" in FF,
            get: FF => FF.useRoughnessFromMainTexture,
            set: (FF, WF) => {
              FF.useRoughnessFromMainTexture = WF
            }
          },
          metadata: WF
        }, fF, yW), (0, LF.j)(FF, null, gW, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: FF => "textureRoughness" in FF,
            get: FF => FF.textureRoughness,
            set: (FF, WF) => {
              FF.textureRoughness = WF
            }
          },
          metadata: WF
        }, sF, HF), (0, LF.j)(FF, null, tW, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: FF => "remapF0OnInterfaceChange" in FF,
            get: FF => FF.remapF0OnInterfaceChange,
            set: (FF, WF) => {
              FF.remapF0OnInterfaceChange = WF
            }
          },
          metadata: WF
        }, KF, wF), (0, LF.j)(FF, null, TF, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "bumpTexture" in FF,
            get: FF => FF.bumpTexture,
            set: (FF, WF) => {
              FF.bumpTexture = WF
            }
          },
          metadata: WF
        }, UF, BF), (0, LF.j)(FF, null, aW, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: FF => "isTintEnabled" in FF,
            get: FF => FF.isTintEnabled,
            set: (FF, WF) => {
              FF.isTintEnabled = WF
            }
          },
          metadata: WF
        }, jW, JF), (0, LF.j)(FF, null, NF, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "tintTexture" in FF,
            get: FF => FF.tintTexture,
            set: (FF, WF) => {
              FF.tintTexture = WF
            }
          },
          metadata: WF
        }, hW, bS), (0, LF.j)(null, null, iW, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: FF => "intensity" in FF,
            get: FF => FF.intensity,
            set: (FF, WF) => {
              FF.intensity = WF
            }
          },
          metadata: WF
        }, ZF, oF), (0, LF.j)(null, null, eF, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: FF => "roughness" in FF,
            get: FF => FF.roughness,
            set: (FF, WF) => {
              FF.roughness = WF
            }
          },
          metadata: WF
        }, YF, MF), (0, LF.j)(null, null, kW, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: FF => "tintColor" in FF,
            get: FF => FF.tintColor,
            set: (FF, WF) => {
              FF.tintColor = WF
            }
          },
          metadata: WF
        }, FW, WW), (0, LF.j)(null, null, qW, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: FF => "tintColorAtDistance" in FF,
            get: FF => FF.tintColorAtDistance,
            set: (FF, WF) => {
              FF.tintColorAtDistance = WF
            }
          },
          metadata: WF
        }, SW, CW), (0, LF.j)(null, null, VF, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: FF => "tintThickness" in FF,
            get: FF => FF.tintThickness,
            set: (FF, WF) => {
              FF.tintThickness = WF
            }
          },
          metadata: WF
        }, AW, uW), WF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WF
        })
      })(), FF._DefaultIndexOfRefraction = 1.5, FF
    })();
    class WW extends sF.e {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let SW = (() => {
      var FF, WF, SF, CF;
      let AF, uF, hF, bW, dF, PF, RF, iW = nF.e,
        eF = [],
        EF = [],
        QF = [],
        rW = [],
        gW = [],
        tW = [],
        TF = [],
        aW = [],
        kW = [],
        qW = [],
        VF = [],
        NF = [],
        DF = [],
        OF = [];
      return FF = class extends iW {
        get isEnabled() {
          return (0, LF.d)(this, WF, "f")
        }
        set isEnabled(FF) {
          (0, LF.h)(this, WF, FF, "f")
        }
        get texture() {
          return (0, LF.d)(this, SF, "f")
        }
        set texture(FF) {
          (0, LF.h)(this, SF, FF, "f")
        }
        get thicknessTexture() {
          return (0, LF.d)(this, CF, "f")
        }
        set thicknessTexture(FF) {
          (0, LF.h)(this, CF, FF, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(AF) {
          let uF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(AF, "PBRIridescence", 110, new WW, uF), this._isEnabled = !1, WF.set(this, (0, LF.k)(this, eF, !1)), this.intensity = ((0, LF.k)(this, EF), (0, LF.k)(this, QF, 1)), this.minimumThickness = ((0, LF.k)(this, rW), (0, LF.k)(this, gW, FF._DefaultMinimumThickness)), this.maximumThickness = ((0, LF.k)(this, tW), (0, LF.k)(this, TF, FF._DefaultMaximumThickness)), this.indexOfRefraction = ((0, LF.k)(this, aW), (0, LF.k)(this, kW, FF._DefaultIndexOfRefraction)), this._texture = ((0, LF.k)(this, qW), null), SF.set(this, (0, LF.k)(this, VF, null)), this._thicknessTexture = ((0, LF.k)(this, NF), null), CF.set(this, (0, LF.k)(this, DF, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, LF.k)(this, OF), this._internalMarkAllSubMeshesAsTexturesDirty = AF._dirtyCallbacks[1]
        }
        isReadyForSubMesh(FF, WF) {
          if (!this._isEnabled) return !0;
          if (FF._areTexturesDirty && WF.texturesEnabled) {
            if (this._texture && vW.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && vW.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(FF, WF) {
          this._isEnabled ? (FF.IRIDESCENCE = !0, FF._areTexturesDirty && WF.texturesEnabled && (this._texture && vW.e.IridescenceTextureEnabled ? (0, pF.eb)(this._texture, FF, "IRIDESCENCE_TEXTURE") : FF.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && vW.e.IridescenceTextureEnabled ? (0, pF.eb)(this._thicknessTexture, FF, "IRIDESCENCE_THICKNESS_TEXTURE") : FF.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (FF.IRIDESCENCE = !1, FF.IRIDESCENCE_TEXTURE = !1, FF.IRIDESCENCE_THICKNESS_TEXTURE = !1, FF.IRIDESCENCE_TEXTUREDIRECTUV = 0, FF.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(FF, WF) {
          if (!this._isEnabled) return;
          const SF = this._material.isFrozen;
          FF.useUbo && SF && FF.isSync || ((this._texture || this._thicknessTexture) && vW.e.IridescenceTextureEnabled && (FF.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, pF.A)(this._texture, FF, "iridescence"), this._thicknessTexture && (0, pF.A)(this._thicknessTexture, FF, "iridescenceThickness")), FF.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), WF.texturesEnabled && (this._texture && vW.e.IridescenceTextureEnabled && FF.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && vW.e.IridescenceTextureEnabled && FF.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(FF) {
          return this._texture === FF || this._thicknessTexture === FF
        }
        getActiveTextures(FF) {
          this._texture && FF.push(this._texture), this._thicknessTexture && FF.push(this._thicknessTexture)
        }
        getAnimatables(FF) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && FF.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && FF.push(this._thicknessTexture)
        }
        dispose(FF) {
          FF && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(FF, WF, SF) {
          return FF.IRIDESCENCE && WF.addFallback(SF++, "IRIDESCENCE"), SF
        }
        getSamplers(FF) {
          FF.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, WF = new WeakMap, SF = new WeakMap, CF = new WeakMap, (() => {
        const WF = "function" === typeof Symbol && Symbol.metadata ? Object.create(iW[Symbol.metadata] ?? null) : void 0;
        AF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], uF = [(0, mW.H)()], hF = [(0, mW.H)()], bW = [(0, mW.H)()], dF = [(0, mW.H)()], PF = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], RF = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], (0, LF.j)(FF, null, AF, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: FF => "isEnabled" in FF,
            get: FF => FF.isEnabled,
            set: (FF, WF) => {
              FF.isEnabled = WF
            }
          },
          metadata: WF
        }, eF, EF), (0, LF.j)(FF, null, PF, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: FF => "texture" in FF,
            get: FF => FF.texture,
            set: (FF, WF) => {
              FF.texture = WF
            }
          },
          metadata: WF
        }, VF, NF), (0, LF.j)(FF, null, RF, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "thicknessTexture" in FF,
            get: FF => FF.thicknessTexture,
            set: (FF, WF) => {
              FF.thicknessTexture = WF
            }
          },
          metadata: WF
        }, DF, OF), (0, LF.j)(null, null, uF, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: FF => "intensity" in FF,
            get: FF => FF.intensity,
            set: (FF, WF) => {
              FF.intensity = WF
            }
          },
          metadata: WF
        }, QF, rW), (0, LF.j)(null, null, hF, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: FF => "minimumThickness" in FF,
            get: FF => FF.minimumThickness,
            set: (FF, WF) => {
              FF.minimumThickness = WF
            }
          },
          metadata: WF
        }, gW, tW), (0, LF.j)(null, null, bW, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: FF => "maximumThickness" in FF,
            get: FF => FF.maximumThickness,
            set: (FF, WF) => {
              FF.maximumThickness = WF
            }
          },
          metadata: WF
        }, TF, aW), (0, LF.j)(null, null, dF, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: FF => "indexOfRefraction" in FF,
            get: FF => FF.indexOfRefraction,
            set: (FF, WF) => {
              FF.indexOfRefraction = WF
            }
          },
          metadata: WF
        }, kW, qW), WF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WF
        })
      })(), FF._DefaultMinimumThickness = 100, FF._DefaultMaximumThickness = 400, FF._DefaultIndexOfRefraction = 1.3, FF
    })();
    class CW extends sF.e {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let AW = (() => {
      var FF, WF, SF, CF;
      let AF, uF, hF, bW, dF, PF = nF.e,
        RF = [],
        iW = [],
        eF = [],
        EF = [],
        QF = [],
        rW = [],
        gW = [],
        tW = [],
        TF = [],
        aW = [];
      return FF = class extends PF {
        get isEnabled() {
          return (0, LF.d)(this, WF, "f")
        }
        set isEnabled(FF) {
          (0, LF.h)(this, WF, FF, "f")
        }
        set angle(FF) {
          this.direction.x = Math.cos(FF), this.direction.y = Math.sin(FF)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, LF.d)(this, SF, "f")
        }
        set texture(FF) {
          (0, LF.h)(this, SF, FF, "f")
        }
        get legacy() {
          return (0, LF.d)(this, CF, "f")
        }
        set legacy(FF) {
          (0, LF.h)(this, CF, FF, "f")
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
        constructor(FF) {
          let AF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(FF, "PBRAnisotropic", 110, new CW, AF), this._isEnabled = !1, WF.set(this, (0, LF.k)(this, RF, !1)), this.intensity = ((0, LF.k)(this, iW), (0, LF.k)(this, eF, 1)), this.direction = ((0, LF.k)(this, EF), (0, LF.k)(this, QF, new fF.n(1, 0))), this._texture = ((0, LF.k)(this, rW), null), SF.set(this, (0, LF.k)(this, gW, null)), this._legacy = ((0, LF.k)(this, tW), !1), CF.set(this, (0, LF.k)(this, TF, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, LF.k)(this, aW), this._internalMarkAllSubMeshesAsTexturesDirty = FF._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = FF._dirtyCallbacks[16]
        }
        isReadyForSubMesh(FF, WF) {
          return !this._isEnabled || !(FF._areTexturesDirty && WF.texturesEnabled && this._texture && vW.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(FF, WF, SF) {
          this._isEnabled ? (FF.ANISOTROPIC = this._isEnabled, this._isEnabled && !SF.isVerticesDataPresent(yW.k.TangentKind) && (FF._needUVs = !0, FF.MAINUV1 = !0), FF._areTexturesDirty && WF.texturesEnabled && (this._texture && vW.e.AnisotropicTextureEnabled ? (0, pF.eb)(this._texture, FF, "ANISOTROPIC_TEXTURE") : FF.ANISOTROPIC_TEXTURE = !1), FF._areMiscDirty && (FF.ANISOTROPIC_LEGACY = this._legacy)) : (FF.ANISOTROPIC = !1, FF.ANISOTROPIC_TEXTURE = !1, FF.ANISOTROPIC_TEXTUREDIRECTUV = 0, FF.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(FF, WF) {
          if (!this._isEnabled) return;
          const SF = this._material.isFrozen;
          FF.useUbo && SF && FF.isSync || (this._texture && vW.e.AnisotropicTextureEnabled && (FF.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, pF.A)(this._texture, FF, "anisotropy")), FF.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), WF.texturesEnabled && this._texture && vW.e.AnisotropicTextureEnabled && FF.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(FF) {
          return this._texture === FF
        }
        getActiveTextures(FF) {
          this._texture && FF.push(this._texture)
        }
        getAnimatables(FF) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && FF.push(this._texture)
        }
        dispose(FF) {
          FF && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(FF, WF, SF) {
          return FF.ANISOTROPIC && WF.addFallback(SF++, "ANISOTROPIC"), SF
        }
        getSamplers(FF) {
          FF.push("anisotropySampler")
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
        parse(FF, WF, SF) {
          super.parse(FF, WF, SF), void 0 === FF.legacy && (this.legacy = !0)
        }
      }, WF = new WeakMap, SF = new WeakMap, CF = new WeakMap, (() => {
        const WF = "function" === typeof Symbol && Symbol.metadata ? Object.create(PF[Symbol.metadata] ?? null) : void 0;
        AF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], uF = [(0, mW.H)()], hF = [(0, mW.E)()], bW = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], dF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsMiscDirty")], (0, LF.j)(FF, null, AF, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: FF => "isEnabled" in FF,
            get: FF => FF.isEnabled,
            set: (FF, WF) => {
              FF.isEnabled = WF
            }
          },
          metadata: WF
        }, RF, iW), (0, LF.j)(FF, null, bW, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: FF => "texture" in FF,
            get: FF => FF.texture,
            set: (FF, WF) => {
              FF.texture = WF
            }
          },
          metadata: WF
        }, gW, tW), (0, LF.j)(FF, null, dF, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: FF => "legacy" in FF,
            get: FF => FF.legacy,
            set: (FF, WF) => {
              FF.legacy = WF
            }
          },
          metadata: WF
        }, TF, aW), (0, LF.j)(null, null, uF, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: FF => "intensity" in FF,
            get: FF => FF.intensity,
            set: (FF, WF) => {
              FF.intensity = WF
            }
          },
          metadata: WF
        }, eF, EF), (0, LF.j)(null, null, hF, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: FF => "direction" in FF,
            get: FF => FF.direction,
            set: (FF, WF) => {
              FF.direction = WF
            }
          },
          metadata: WF
        }, QF, rW), WF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WF
        })
      })(), FF
    })();
    class uW extends sF.e {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let hW = (() => {
      var FF, WF, SF, CF, AF, uF, hF, bW;
      let dF, PF, RF, iW, eF, EF, QF, rW, gW, tW = nF.e,
        TF = [],
        aW = [],
        kW = [],
        qW = [],
        VF = [],
        NF = [],
        DF = [],
        OF = [],
        xW = [],
        ZF = [],
        oF = [],
        YF = [],
        MF = [],
        cW = [],
        GF = [],
        zW = [],
        IF = [],
        fF = [];
      return FF = class extends tW {
        get isEnabled() {
          return (0, LF.d)(this, WF, "f")
        }
        set isEnabled(FF) {
          (0, LF.h)(this, WF, FF, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, LF.d)(this, SF, "f")
        }
        set linkSheenWithAlbedo(FF) {
          (0, LF.h)(this, SF, FF, "f")
        }
        get texture() {
          return (0, LF.d)(this, CF, "f")
        }
        set texture(FF) {
          (0, LF.h)(this, CF, FF, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, LF.d)(this, AF, "f")
        }
        set useRoughnessFromMainTexture(FF) {
          (0, LF.h)(this, AF, FF, "f")
        }
        get roughness() {
          return (0, LF.d)(this, uF, "f")
        }
        set roughness(FF) {
          (0, LF.h)(this, uF, FF, "f")
        }
        get textureRoughness() {
          return (0, LF.d)(this, hF, "f")
        }
        set textureRoughness(FF) {
          (0, LF.h)(this, hF, FF, "f")
        }
        get albedoScaling() {
          return (0, LF.d)(this, bW, "f")
        }
        set albedoScaling(FF) {
          (0, LF.h)(this, bW, FF, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(FF) {
          let dF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(FF, "Sheen", 120, new uW, dF), this._isEnabled = !1, WF.set(this, (0, LF.k)(this, TF, !1)), this._linkSheenWithAlbedo = ((0, LF.k)(this, aW), !1), SF.set(this, (0, LF.k)(this, kW, !1)), this.intensity = ((0, LF.k)(this, qW), (0, LF.k)(this, VF, 1)), this.color = ((0, LF.k)(this, NF), (0, LF.k)(this, DF, XF.e.White())), this._texture = ((0, LF.k)(this, OF), null), CF.set(this, (0, LF.k)(this, xW, null)), this._useRoughnessFromMainTexture = ((0, LF.k)(this, ZF), !0), AF.set(this, (0, LF.k)(this, oF, !0)), this._roughness = ((0, LF.k)(this, YF), null), uF.set(this, (0, LF.k)(this, MF, null)), this._textureRoughness = ((0, LF.k)(this, cW), null), hF.set(this, (0, LF.k)(this, GF, null)), this._albedoScaling = ((0, LF.k)(this, zW), !1), bW.set(this, (0, LF.k)(this, IF, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, LF.k)(this, fF), this._internalMarkAllSubMeshesAsTexturesDirty = FF._dirtyCallbacks[1]
        }
        isReadyForSubMesh(FF, WF) {
          if (!this._isEnabled) return !0;
          if (FF._areTexturesDirty && WF.texturesEnabled) {
            if (this._texture && vW.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && vW.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(FF, WF) {
          this._isEnabled ? (FF.SHEEN = !0, FF.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, FF.SHEEN_ROUGHNESS = null !== this._roughness, FF.SHEEN_ALBEDOSCALING = this._albedoScaling, FF.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, FF._areTexturesDirty && WF.texturesEnabled && (this._texture && vW.e.SheenTextureEnabled ? ((0, pF.eb)(this._texture, FF, "SHEEN_TEXTURE"), FF.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : FF.SHEEN_TEXTURE = !1, this._textureRoughness && vW.e.SheenTextureEnabled ? (0, pF.eb)(this._textureRoughness, FF, "SHEEN_TEXTURE_ROUGHNESS") : FF.SHEEN_TEXTURE_ROUGHNESS = !1)) : (FF.SHEEN = !1, FF.SHEEN_TEXTURE = !1, FF.SHEEN_TEXTURE_ROUGHNESS = !1, FF.SHEEN_LINKWITHALBEDO = !1, FF.SHEEN_ROUGHNESS = !1, FF.SHEEN_ALBEDOSCALING = !1, FF.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, FF.SHEEN_GAMMATEXTURE = !1, FF.SHEEN_TEXTUREDIRECTUV = 0, FF.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(FF, WF, SF, CF) {
          if (!this._isEnabled) return;
          const AF = CF.materialDefines,
            uF = this._material.isFrozen;
          FF.useUbo && uF && FF.isSync || ((this._texture || this._textureRoughness) && vW.e.SheenTextureEnabled && (FF.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, pF.A)(this._texture, FF, "sheen"), this._textureRoughness && !AF.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, pF.A)(this._textureRoughness, FF, "sheenRoughness")), FF.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && FF.updateFloat("vSheenRoughness", this._roughness)), WF.texturesEnabled && (this._texture && vW.e.SheenTextureEnabled && FF.setTexture("sheenSampler", this._texture), this._textureRoughness && !AF.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && vW.e.SheenTextureEnabled && FF.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(FF) {
          return this._texture === FF || this._textureRoughness === FF
        }
        getActiveTextures(FF) {
          this._texture && FF.push(this._texture), this._textureRoughness && FF.push(this._textureRoughness)
        }
        getAnimatables(FF) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && FF.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && FF.push(this._textureRoughness)
        }
        dispose(FF) {
          FF && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(FF, WF, SF) {
          return FF.SHEEN && WF.addFallback(SF++, "SHEEN"), SF
        }
        getSamplers(FF) {
          FF.push("sheenSampler", "sheenRoughnessSampler")
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
      }, WF = new WeakMap, SF = new WeakMap, CF = new WeakMap, AF = new WeakMap, uF = new WeakMap, hF = new WeakMap, bW = new WeakMap, (() => {
        const WF = "function" === typeof Symbol && Symbol.metadata ? Object.create(tW[Symbol.metadata] ?? null) : void 0;
        dF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], PF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], RF = [(0, mW.H)()], iW = [(0, mW.o)()], eF = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], EF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], QF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], rW = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], gW = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], (0, LF.j)(FF, null, dF, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: FF => "isEnabled" in FF,
            get: FF => FF.isEnabled,
            set: (FF, WF) => {
              FF.isEnabled = WF
            }
          },
          metadata: WF
        }, TF, aW), (0, LF.j)(FF, null, PF, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: FF => "linkSheenWithAlbedo" in FF,
            get: FF => FF.linkSheenWithAlbedo,
            set: (FF, WF) => {
              FF.linkSheenWithAlbedo = WF
            }
          },
          metadata: WF
        }, kW, qW), (0, LF.j)(FF, null, eF, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: FF => "texture" in FF,
            get: FF => FF.texture,
            set: (FF, WF) => {
              FF.texture = WF
            }
          },
          metadata: WF
        }, xW, ZF), (0, LF.j)(FF, null, EF, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "useRoughnessFromMainTexture" in FF,
            get: FF => FF.useRoughnessFromMainTexture,
            set: (FF, WF) => {
              FF.useRoughnessFromMainTexture = WF
            }
          },
          metadata: WF
        }, oF, YF), (0, LF.j)(FF, null, QF, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: FF => "roughness" in FF,
            get: FF => FF.roughness,
            set: (FF, WF) => {
              FF.roughness = WF
            }
          },
          metadata: WF
        }, MF, cW), (0, LF.j)(FF, null, rW, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: FF => "textureRoughness" in FF,
            get: FF => FF.textureRoughness,
            set: (FF, WF) => {
              FF.textureRoughness = WF
            }
          },
          metadata: WF
        }, GF, zW), (0, LF.j)(FF, null, gW, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: FF => "albedoScaling" in FF,
            get: FF => FF.albedoScaling,
            set: (FF, WF) => {
              FF.albedoScaling = WF
            }
          },
          metadata: WF
        }, IF, fF), (0, LF.j)(null, null, RF, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: FF => "intensity" in FF,
            get: FF => FF.intensity,
            set: (FF, WF) => {
              FF.intensity = WF
            }
          },
          metadata: WF
        }, VF, NF), (0, LF.j)(null, null, iW, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: FF => "color" in FF,
            get: FF => FF.color,
            set: (FF, WF) => {
              FF.color = WF
            }
          },
          metadata: WF
        }, DF, OF), WF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WF
        })
      })(), FF
    })();
    class bS extends sF.e {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let dW = (() => {
      var FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF, iW, eF, EF, QF, rW, gW;
      let tW, TF, aW, kW, qW, VF, NF, DF, OF, xW, ZF, oF, YF, MF, cW, GF, zW, IF, yW, sF, HF, KF, wF, UF, BF, jW, JF, lF, FW, WW, SW = nF.e,
        CW = [],
        AW = [],
        uW = [],
        hW = [],
        dW = [],
        PW = [],
        RW = [],
        iS = [],
        eW = [],
        EW = [],
        QW = [],
        rS = [],
        gS = [],
        tS = [],
        TW = [],
        aS = [],
        kS = [],
        qS = [],
        VW = [],
        NW = [],
        DW = [],
        LW = [],
        mS = [],
        OW = [],
        xS = [],
        ZW = [],
        oW = [],
        YW = [],
        MW = [],
        cS = [],
        GW = [],
        zS = [],
        IW = [],
        fW = [],
        yS = [],
        sW = [],
        nW = [],
        HW = [],
        KW = [],
        wW = [],
        XW = [],
        UW = [],
        BW = [],
        jS = [],
        vS = [],
        JW = [],
        pW = [],
        lW = [],
        FS = [],
        WS = [],
        SS = [],
        CS = [],
        AS = [],
        uS = [],
        hS = [],
        bC = [],
        dS = [],
        PS = [],
        RS = [],
        iC = [];
      return FF = class extends SW {
        get isRefractionEnabled() {
          return (0, LF.d)(this, WF, "f")
        }
        set isRefractionEnabled(FF) {
          (0, LF.h)(this, WF, FF, "f")
        }
        get isTranslucencyEnabled() {
          return (0, LF.d)(this, SF, "f")
        }
        set isTranslucencyEnabled(FF) {
          (0, LF.h)(this, SF, FF, "f")
        }
        get isDispersionEnabled() {
          return (0, LF.d)(this, CF, "f")
        }
        set isDispersionEnabled(FF) {
          (0, LF.h)(this, CF, FF, "f")
        }
        get isScatteringEnabled() {
          return (0, LF.d)(this, AF, "f")
        }
        set isScatteringEnabled(FF) {
          (0, LF.h)(this, AF, FF, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(FF) {
          this._scene.enableSubSurfaceForPrePass() && FF && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(FF))
        }
        get useAlbedoToTintRefraction() {
          return (0, LF.d)(this, uF, "f")
        }
        set useAlbedoToTintRefraction(FF) {
          (0, LF.h)(this, uF, FF, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, LF.d)(this, hF, "f")
        }
        set useAlbedoToTintTranslucency(FF) {
          (0, LF.h)(this, hF, FF, "f")
        }
        get thicknessTexture() {
          return (0, LF.d)(this, bW, "f")
        }
        set thicknessTexture(FF) {
          (0, LF.h)(this, bW, FF, "f")
        }
        get refractionTexture() {
          return (0, LF.d)(this, dF, "f")
        }
        set refractionTexture(FF) {
          (0, LF.h)(this, dF, FF, "f")
        }
        get indexOfRefraction() {
          return (0, LF.d)(this, PF, "f")
        }
        set indexOfRefraction(FF) {
          (0, LF.h)(this, PF, FF, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(FF) {
          const WF = FF >= 1 ? FF : -1;
          this._volumeIndexOfRefraction !== WF && (this._volumeIndexOfRefraction = WF, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, LF.d)(this, RF, "f")
        }
        set invertRefractionY(FF) {
          (0, LF.h)(this, RF, FF, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, LF.d)(this, iW, "f")
        }
        set linkRefractionWithTransparency(FF) {
          (0, LF.h)(this, iW, FF, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, LF.d)(this, eF, "f")
        }
        set useMaskFromThicknessTexture(FF) {
          (0, LF.h)(this, eF, FF, "f")
        }
        get refractionIntensityTexture() {
          return (0, LF.d)(this, EF, "f")
        }
        set refractionIntensityTexture(FF) {
          (0, LF.h)(this, EF, FF, "f")
        }
        get translucencyIntensityTexture() {
          return (0, LF.d)(this, QF, "f")
        }
        set translucencyIntensityTexture(FF) {
          (0, LF.h)(this, QF, FF, "f")
        }
        get translucencyColorTexture() {
          return (0, LF.d)(this, rW, "f")
        }
        set translucencyColorTexture(FF) {
          (0, LF.h)(this, rW, FF, "f")
        }
        get useGltfStyleTextures() {
          return (0, LF.d)(this, gW, "f")
        }
        set useGltfStyleTextures(FF) {
          (0, LF.h)(this, gW, FF, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(FF) {
          this.legacyTranslucency = FF
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
        constructor(tW) {
          let TF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(tW, "PBRSubSurface", 130, new bS, TF), this._isRefractionEnabled = !1, WF.set(this, (0, LF.k)(this, CW, !1)), this._isTranslucencyEnabled = ((0, LF.k)(this, AW), !1), SF.set(this, (0, LF.k)(this, uW, !1)), this._isDispersionEnabled = ((0, LF.k)(this, hW), !1), CF.set(this, (0, LF.k)(this, dW, !1)), this._isScatteringEnabled = ((0, LF.k)(this, PW), !1), AF.set(this, (0, LF.k)(this, RW, !1)), this._scatteringDiffusionProfileIndex = ((0, LF.k)(this, iS), (0, LF.k)(this, eW, 0)), this.refractionIntensity = ((0, LF.k)(this, EW), (0, LF.k)(this, QW, 1)), this.translucencyIntensity = ((0, LF.k)(this, rS), (0, LF.k)(this, gS, 1)), this._useAlbedoToTintRefraction = ((0, LF.k)(this, tS), !1), uF.set(this, (0, LF.k)(this, TW, !1)), this._useAlbedoToTintTranslucency = ((0, LF.k)(this, aS), !1), hF.set(this, (0, LF.k)(this, kS, !1)), this._thicknessTexture = ((0, LF.k)(this, qS), null), bW.set(this, (0, LF.k)(this, VW, null)), this._refractionTexture = ((0, LF.k)(this, NW), null), dF.set(this, (0, LF.k)(this, DW, null)), this._indexOfRefraction = ((0, LF.k)(this, LW), 1.5), PF.set(this, (0, LF.k)(this, mS, 1.5)), this._volumeIndexOfRefraction = ((0, LF.k)(this, OW), (0, LF.k)(this, xS, -1)), this._invertRefractionY = ((0, LF.k)(this, ZW), !1), RF.set(this, (0, LF.k)(this, oW, !1)), this._linkRefractionWithTransparency = ((0, LF.k)(this, YW), !1), iW.set(this, (0, LF.k)(this, MW, !1)), this.minimumThickness = ((0, LF.k)(this, cS), (0, LF.k)(this, GW, 0)), this.maximumThickness = ((0, LF.k)(this, zS), (0, LF.k)(this, IW, 1)), this.useThicknessAsDepth = ((0, LF.k)(this, fW), (0, LF.k)(this, yS, !1)), this.tintColor = ((0, LF.k)(this, sW), (0, LF.k)(this, nW, XF.e.White())), this.tintColorAtDistance = ((0, LF.k)(this, HW), (0, LF.k)(this, KW, 1)), this.dispersion = ((0, LF.k)(this, wW), (0, LF.k)(this, XW, 0)), this.diffusionDistance = ((0, LF.k)(this, UW), (0, LF.k)(this, BW, XF.e.White())), this._useMaskFromThicknessTexture = ((0, LF.k)(this, jS), !1), eF.set(this, (0, LF.k)(this, vS, !1)), this._refractionIntensityTexture = ((0, LF.k)(this, JW), null), EF.set(this, (0, LF.k)(this, pW, null)), this._translucencyIntensityTexture = ((0, LF.k)(this, lW), null), QF.set(this, (0, LF.k)(this, FS, null)), this.translucencyColor = ((0, LF.k)(this, WS), (0, LF.k)(this, SS, null)), this._translucencyColorTexture = ((0, LF.k)(this, CS), null), rW.set(this, (0, LF.k)(this, AS, null)), this._useGltfStyleTextures = ((0, LF.k)(this, uS), !0), gW.set(this, (0, LF.k)(this, hS, !0)), this.applyAlbedoAfterSubSurface = ((0, LF.k)(this, bC), (0, LF.k)(this, dS, FF.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, LF.k)(this, PS), (0, LF.k)(this, RS, FF.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, LF.k)(this, iC), this._scene = tW.OWF(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = tW._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = tW._dirtyCallbacks[32]
        }
        isReadyForSubMesh(FF, WF) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (FF._areTexturesDirty && WF.texturesEnabled) {
            if (this._thicknessTexture && vW.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && vW.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && vW.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && vW.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const FF = this._getRefractionTexture(WF);
            if (FF && vW.e.RefractionTextureEnabled && !FF.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(FF, WF) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return FF.SUBSURFACE = !1, FF.SS_DISPERSION = !1, FF.SS_TRANSLUCENCY = !1, FF.SS_SCATTERING = !1, FF.SS_REFRACTION = !1, FF.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, FF.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, FF.SS_THICKNESSANDMASK_TEXTURE = !1, FF.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, FF.SS_HAS_THICKNESS = !1, FF.SS_REFRACTIONINTENSITY_TEXTURE = !1, FF.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, FF.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, FF.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, FF.SS_REFRACTIONMAP_3D = !1, FF.SS_REFRACTIONMAP_OPPOSITEZ = !1, FF.SS_LODINREFRACTIONALPHA = !1, FF.SS_GAMMAREFRACTION = !1, FF.SS_RGBDREFRACTION = !1, FF.SS_LINEARSPECULARREFRACTION = !1, FF.SS_LINKREFRACTIONTOTRANSPARENCY = !1, FF.SS_ALBEDOFORREFRACTIONTINT = !1, FF.SS_ALBEDOFORTRANSLUCENCYTINT = !1, FF.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, FF.SS_USE_THICKNESS_AS_DEPTH = !1, FF.SS_USE_GLTF_TEXTURES = !1, FF.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, FF.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, FF.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(FF.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (FF._areTexturesDirty) {
            if (FF.SUBSURFACE = !0, FF.SS_DISPERSION = this._isDispersionEnabled, FF.SS_TRANSLUCENCY = this._isTranslucencyEnabled, FF.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, FF.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, FF.SS_SCATTERING = this._isScatteringEnabled, FF.SS_THICKNESSANDMASK_TEXTURE = !1, FF.SS_REFRACTIONINTENSITY_TEXTURE = !1, FF.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, FF.SS_HAS_THICKNESS = !1, FF.SS_USE_GLTF_TEXTURES = !1, FF.SS_REFRACTION = !1, FF.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, FF.SS_REFRACTIONMAP_3D = !1, FF.SS_GAMMAREFRACTION = !1, FF.SS_RGBDREFRACTION = !1, FF.SS_LINEARSPECULARREFRACTION = !1, FF.SS_REFRACTIONMAP_OPPOSITEZ = !1, FF.SS_LODINREFRACTIONALPHA = !1, FF.SS_LINKREFRACTIONTOTRANSPARENCY = !1, FF.SS_ALBEDOFORREFRACTIONTINT = !1, FF.SS_ALBEDOFORTRANSLUCENCYTINT = !1, FF.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, FF.SS_USE_THICKNESS_AS_DEPTH = !1, FF.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, FF.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, FF._areTexturesDirty && WF.texturesEnabled && (this._thicknessTexture && vW.e.ThicknessTextureEnabled && (0, pF.eb)(this._thicknessTexture, FF, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && vW.e.RefractionIntensityTextureEnabled && (0, pF.eb)(this._refractionIntensityTexture, FF, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && vW.e.TranslucencyIntensityTextureEnabled && (0, pF.eb)(this._translucencyIntensityTexture, FF, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && vW.e.TranslucencyColorTextureEnabled && ((0, pF.eb)(this._translucencyColorTexture, FF, "SS_TRANSLUCENCYCOLOR_TEXTURE"), FF.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), FF.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, FF.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, FF.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, FF.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && WF.texturesEnabled) {
              const SF = this._getRefractionTexture(WF);
              SF && vW.e.RefractionTextureEnabled && (FF.SS_REFRACTION = !0, FF.SS_REFRACTIONMAP_3D = SF.isCube, FF.SS_GAMMAREFRACTION = SF.gammaSpace, FF.SS_RGBDREFRACTION = SF.isRGBD, FF.SS_LINEARSPECULARREFRACTION = SF.linearSpecularLOD, FF.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && SF.isCube ? !SF.invertZ : SF.invertZ, FF.SS_LODINREFRACTIONALPHA = SF.lodLevelInAlpha, FF.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, FF.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, FF.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = SF.isCube && SF.boundingBoxSize, FF.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (FF.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(FF, WF, SF, CF) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) FF.updateFloat2("vThicknessParam", 0, 0);
            else {
              CF.getRenderingMesh().getWorldMatrix().decompose(fF.j.HC[0]);
              const WF = Math.max(Math.abs(fF.j.HC[0].x), Math.abs(fF.j.HC[0].y), Math.abs(fF.j.HC[0].z));
              FF.updateFloat2("vThicknessParam", this.minimumThickness * WF, (this.maximumThickness - this.minimumThickness) * WF)
            }
        }
        bindForSubMesh(FF, WF, SF, CF) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const AF = CF.materialDefines,
            uF = this._material.isFrozen,
            hF = this._material.realTimeFiltering,
            bW = AF.LODBASEDMICROSFURACE,
            dF = this._getRefractionTexture(WF);
          if (!FF.useUbo || !uF || !FF.isSync) {
            if (this._thicknessTexture && vW.e.ThicknessTextureEnabled && (FF.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, pF.A)(this._thicknessTexture, FF, "thickness")), this._refractionIntensityTexture && vW.e.RefractionIntensityTextureEnabled && AF.SS_REFRACTIONINTENSITY_TEXTURE && (FF.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, pF.A)(this._refractionIntensityTexture, FF, "refractionIntensity")), this._translucencyColorTexture && vW.e.TranslucencyColorTextureEnabled && AF.SS_TRANSLUCENCYCOLOR_TEXTURE && (FF.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, pF.A)(this._translucencyColorTexture, FF, "translucencyColor")), this._translucencyIntensityTexture && vW.e.TranslucencyIntensityTextureEnabled && AF.SS_TRANSLUCENCYINTENSITY_TEXTURE && (FF.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, pF.A)(this._translucencyIntensityTexture, FF, "translucencyIntensity")), dF && vW.e.RefractionTextureEnabled) {
              FF.yhF("refractionMatrix", dF.getRefractionTextureMatrix());
              let WF = 1;
              dF.isCube || dF.depth && (WF = dF.depth);
              const SF = dF.getSize().width,
                CF = this.volumeIndexOfRefraction;
              if (FF.updateFloat4("vRefractionInfos", dF.level, 1 / CF, WF, this._invertRefractionY ? -1 : 1), FF.updateFloat4("vRefractionMicrosurfaceInfos", SF, dF.lodGenerationScale, dF.lodGenerationOffset, 1 / this.indexOfRefraction), hF && FF.updateFloat2("vRefractionFilteringInfo", SF, Math.log2(SF)), dF.boundingBoxSize) {
                const WF = dF;
                FF.updateVector3("vRefractionPosition", WF.boundingBoxPosition), FF.updateVector3("vRefractionSize", WF.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && FF.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), FF.updateColor3("vDiffusionDistance", this.diffusionDistance), FF.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), FF.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), FF.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), FF.updateFloat("dispersion", this.dispersion)
          }
          WF.texturesEnabled && (this._thicknessTexture && vW.e.ThicknessTextureEnabled && FF.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && vW.e.RefractionIntensityTextureEnabled && AF.SS_REFRACTIONINTENSITY_TEXTURE && FF.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && vW.e.TranslucencyIntensityTextureEnabled && AF.SS_TRANSLUCENCYINTENSITY_TEXTURE && FF.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && vW.e.TranslucencyColorTextureEnabled && AF.SS_TRANSLUCENCYCOLOR_TEXTURE && FF.setTexture("translucencyColorSampler", this._translucencyColorTexture), dF && vW.e.RefractionTextureEnabled && (bW ? FF.setTexture("refractionSampler", dF) : (FF.setTexture("refractionSampler", dF._lodTextureMid || dF), FF.setTexture("refractionSamplerLow", dF._lodTextureLow || dF), FF.setTexture("refractionSamplerHigh", dF._lodTextureHigh || dF))))
        }
        _getRefractionTexture(FF) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? FF.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(FF) {
          vW.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && FF.push(this._refractionTexture)
        }
        hasTexture(FF) {
          return this._thicknessTexture === FF || (this._refractionTexture === FF || (this._refractionIntensityTexture === FF || (this._translucencyIntensityTexture === FF || this._translucencyColorTexture === FF)))
        }
        hasRenderTargetTextures() {
          return !!(vW.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(FF) {
          this._thicknessTexture && FF.push(this._thicknessTexture), this._refractionTexture && FF.push(this._refractionTexture), this._refractionIntensityTexture && FF.push(this._refractionIntensityTexture), this._translucencyColorTexture && FF.push(this._translucencyColorTexture), this._translucencyIntensityTexture && FF.push(this._translucencyIntensityTexture)
        }
        getAnimatables(FF) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && FF.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && FF.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && FF.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && FF.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && FF.push(this._translucencyIntensityTexture)
        }
        dispose(FF) {
          FF && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(FF, WF, SF) {
          return FF.SS_SCATTERING && WF.addFallback(SF++, "SS_SCATTERING"), FF.SS_TRANSLUCENCY && WF.addFallback(SF++, "SS_TRANSLUCENCY"), SF
        }
        getSamplers(FF) {
          FF.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, WF = new WeakMap, SF = new WeakMap, CF = new WeakMap, AF = new WeakMap, uF = new WeakMap, hF = new WeakMap, bW = new WeakMap, dF = new WeakMap, PF = new WeakMap, RF = new WeakMap, iW = new WeakMap, eF = new WeakMap, EF = new WeakMap, QF = new WeakMap, rW = new WeakMap, gW = new WeakMap, (() => {
        const WF = "function" === typeof Symbol && Symbol.metadata ? Object.create(SW[Symbol.metadata] ?? null) : void 0;
        tW = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], TF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], aW = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], kW = [(0, mW.H)(), (0, mW.i)("_markScenePrePassDirty")], qW = [(0, mW.H)()], VF = [(0, mW.H)()], NF = [(0, mW.H)()], DF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], OF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], xW = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], ZF = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], oF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], YF = [(0, mW.H)()], MF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], cW = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], GF = [(0, mW.H)()], zW = [(0, mW.H)()], IF = [(0, mW.H)()], yW = [(0, mW.o)()], sF = [(0, mW.H)()], HF = [(0, mW.H)()], KF = [(0, mW.o)()], wF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], UF = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], BF = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], jW = [(0, mW.o)()], JF = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], lF = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], FW = [(0, mW.H)()], WW = [(0, mW.H)()], (0, LF.j)(FF, null, tW, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: FF => "isRefractionEnabled" in FF,
            get: FF => FF.isRefractionEnabled,
            set: (FF, WF) => {
              FF.isRefractionEnabled = WF
            }
          },
          metadata: WF
        }, CW, AW), (0, LF.j)(FF, null, TF, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: FF => "isTranslucencyEnabled" in FF,
            get: FF => FF.isTranslucencyEnabled,
            set: (FF, WF) => {
              FF.isTranslucencyEnabled = WF
            }
          },
          metadata: WF
        }, uW, hW), (0, LF.j)(FF, null, aW, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: FF => "isDispersionEnabled" in FF,
            get: FF => FF.isDispersionEnabled,
            set: (FF, WF) => {
              FF.isDispersionEnabled = WF
            }
          },
          metadata: WF
        }, dW, PW), (0, LF.j)(FF, null, kW, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: FF => "isScatteringEnabled" in FF,
            get: FF => FF.isScatteringEnabled,
            set: (FF, WF) => {
              FF.isScatteringEnabled = WF
            }
          },
          metadata: WF
        }, RW, iS), (0, LF.j)(FF, null, DF, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: FF => "useAlbedoToTintRefraction" in FF,
            get: FF => FF.useAlbedoToTintRefraction,
            set: (FF, WF) => {
              FF.useAlbedoToTintRefraction = WF
            }
          },
          metadata: WF
        }, TW, aS), (0, LF.j)(FF, null, OF, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: FF => "useAlbedoToTintTranslucency" in FF,
            get: FF => FF.useAlbedoToTintTranslucency,
            set: (FF, WF) => {
              FF.useAlbedoToTintTranslucency = WF
            }
          },
          metadata: WF
        }, kS, qS), (0, LF.j)(FF, null, xW, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "thicknessTexture" in FF,
            get: FF => FF.thicknessTexture,
            set: (FF, WF) => {
              FF.thicknessTexture = WF
            }
          },
          metadata: WF
        }, VW, NW), (0, LF.j)(FF, null, ZF, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "refractionTexture" in FF,
            get: FF => FF.refractionTexture,
            set: (FF, WF) => {
              FF.refractionTexture = WF
            }
          },
          metadata: WF
        }, DW, LW), (0, LF.j)(FF, null, oF, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: FF => "indexOfRefraction" in FF,
            get: FF => FF.indexOfRefraction,
            set: (FF, WF) => {
              FF.indexOfRefraction = WF
            }
          },
          metadata: WF
        }, mS, OW), (0, LF.j)(FF, null, MF, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: FF => "invertRefractionY" in FF,
            get: FF => FF.invertRefractionY,
            set: (FF, WF) => {
              FF.invertRefractionY = WF
            }
          },
          metadata: WF
        }, oW, YW), (0, LF.j)(FF, null, cW, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: FF => "linkRefractionWithTransparency" in FF,
            get: FF => FF.linkRefractionWithTransparency,
            set: (FF, WF) => {
              FF.linkRefractionWithTransparency = WF
            }
          },
          metadata: WF
        }, MW, cS), (0, LF.j)(FF, null, wF, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "useMaskFromThicknessTexture" in FF,
            get: FF => FF.useMaskFromThicknessTexture,
            set: (FF, WF) => {
              FF.useMaskFromThicknessTexture = WF
            }
          },
          metadata: WF
        }, vS, JW), (0, LF.j)(FF, null, UF, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "refractionIntensityTexture" in FF,
            get: FF => FF.refractionIntensityTexture,
            set: (FF, WF) => {
              FF.refractionIntensityTexture = WF
            }
          },
          metadata: WF
        }, pW, lW), (0, LF.j)(FF, null, BF, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "translucencyIntensityTexture" in FF,
            get: FF => FF.translucencyIntensityTexture,
            set: (FF, WF) => {
              FF.translucencyIntensityTexture = WF
            }
          },
          metadata: WF
        }, FS, WS), (0, LF.j)(FF, null, JF, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "translucencyColorTexture" in FF,
            get: FF => FF.translucencyColorTexture,
            set: (FF, WF) => {
              FF.translucencyColorTexture = WF
            }
          },
          metadata: WF
        }, AS, uS), (0, LF.j)(FF, null, lF, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: FF => "useGltfStyleTextures" in FF,
            get: FF => FF.useGltfStyleTextures,
            set: (FF, WF) => {
              FF.useGltfStyleTextures = WF
            }
          },
          metadata: WF
        }, hS, bC), (0, LF.j)(null, null, qW, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: FF => "_scatteringDiffusionProfileIndex" in FF,
            get: FF => FF._scatteringDiffusionProfileIndex,
            set: (FF, WF) => {
              FF._scatteringDiffusionProfileIndex = WF
            }
          },
          metadata: WF
        }, eW, EW), (0, LF.j)(null, null, VF, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: FF => "refractionIntensity" in FF,
            get: FF => FF.refractionIntensity,
            set: (FF, WF) => {
              FF.refractionIntensity = WF
            }
          },
          metadata: WF
        }, QW, rS), (0, LF.j)(null, null, NF, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: FF => "translucencyIntensity" in FF,
            get: FF => FF.translucencyIntensity,
            set: (FF, WF) => {
              FF.translucencyIntensity = WF
            }
          },
          metadata: WF
        }, gS, tS), (0, LF.j)(null, null, YF, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: FF => "_volumeIndexOfRefraction" in FF,
            get: FF => FF._volumeIndexOfRefraction,
            set: (FF, WF) => {
              FF._volumeIndexOfRefraction = WF
            }
          },
          metadata: WF
        }, xS, ZW), (0, LF.j)(null, null, GF, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: FF => "minimumThickness" in FF,
            get: FF => FF.minimumThickness,
            set: (FF, WF) => {
              FF.minimumThickness = WF
            }
          },
          metadata: WF
        }, GW, zS), (0, LF.j)(null, null, zW, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: FF => "maximumThickness" in FF,
            get: FF => FF.maximumThickness,
            set: (FF, WF) => {
              FF.maximumThickness = WF
            }
          },
          metadata: WF
        }, IW, fW), (0, LF.j)(null, null, IF, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: FF => "useThicknessAsDepth" in FF,
            get: FF => FF.useThicknessAsDepth,
            set: (FF, WF) => {
              FF.useThicknessAsDepth = WF
            }
          },
          metadata: WF
        }, yS, sW), (0, LF.j)(null, null, yW, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: FF => "tintColor" in FF,
            get: FF => FF.tintColor,
            set: (FF, WF) => {
              FF.tintColor = WF
            }
          },
          metadata: WF
        }, nW, HW), (0, LF.j)(null, null, sF, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: FF => "tintColorAtDistance" in FF,
            get: FF => FF.tintColorAtDistance,
            set: (FF, WF) => {
              FF.tintColorAtDistance = WF
            }
          },
          metadata: WF
        }, KW, wW), (0, LF.j)(null, null, HF, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: FF => "dispersion" in FF,
            get: FF => FF.dispersion,
            set: (FF, WF) => {
              FF.dispersion = WF
            }
          },
          metadata: WF
        }, XW, UW), (0, LF.j)(null, null, KF, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: FF => "diffusionDistance" in FF,
            get: FF => FF.diffusionDistance,
            set: (FF, WF) => {
              FF.diffusionDistance = WF
            }
          },
          metadata: WF
        }, BW, jS), (0, LF.j)(null, null, jW, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: FF => "translucencyColor" in FF,
            get: FF => FF.translucencyColor,
            set: (FF, WF) => {
              FF.translucencyColor = WF
            }
          },
          metadata: WF
        }, SS, CS), (0, LF.j)(null, null, FW, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: FF => "applyAlbedoAfterSubSurface" in FF,
            get: FF => FF.applyAlbedoAfterSubSurface,
            set: (FF, WF) => {
              FF.applyAlbedoAfterSubSurface = WF
            }
          },
          metadata: WF
        }, dS, PS), (0, LF.j)(null, null, WW, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: FF => "legacyTranslucency" in FF,
            get: FF => FF.legacyTranslucency,
            set: (FF, WF) => {
              FF.legacyTranslucency = WF
            }
          },
          metadata: WF
        }, RS, iC), WF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WF
        })
      })(), FF.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, FF.DEFAULT_LEGACY_TRANSLUCENCY = !1, FF
    })();
    var PW = SF(38327),
      RW = SF(38312),
      iS = SF(38341),
      eW = SF(38350),
      EW = SF(38354),
      QW = SF(38363),
      rS = SF(38369),
      gS = SF(38378),
      tS = SF(37855);
    const TW = {
      effect: null,
      subMesh: null
    };
    class aS extends((0, rS.b)((0, QW.c)(sF.e))) {}
    class kS extends((0, UF.g)(aS)) {
      constructor(FF) {
        super(FF), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class qS extends((0, gS.d)(jW.e)) {}
    let VW = (() => {
      var FF, WF;
      let CF, AF = qS,
        hF = [],
        bW = [];
      return FF = class extends AF {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(FF) {
          this._realTimeFiltering = FF, this.XbF(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(FF) {
          this._realTimeFilteringQuality = FF, this.XbF(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, LF.d)(this, WF, "f")
        }
        set debugMode(FF) {
          (0, LF.h)(this, WF, FF, "f")
        }
        constructor(SF, CF) {
          super(SF, CF, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || FF.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new fF.v(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = FF.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = XF.e.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new XF.e(0, 0, 0), this._albedoColor = new XF.e(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new XF.e(1, 1, 1), this._reflectionColor = new XF.e(1, 1, 1), this._emissiveColor = new XF.e(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = FF.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new xW.f(16), this._globalAmbientColor = new XF.e(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, WF.set(this, (0, LF.k)(this, hF, 0)), this.debugLimit = ((0, LF.k)(this, bW), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new KF(this), this.clearCoat = new FW(this), this.iridescence = new SW(this), this.anisotropy = new AW(this), this.sheen = new hW(this), this.subSurface = new dW(this), this.detailMap = new PW.c(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), vW.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = cW(this.OWF()), this.prePassConfiguration = new wF.b
        }
        get hasRenderTargetTextures() {
          return !!(vW.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === FF.PBRMATERIAL_OPAQUE || this._transparencyMode === FF.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === FF.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== FF.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(FF, WF, SF) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const CF = WF._drawWrapper;
          if (CF.effect && this.isFrozen && CF._wasPreviouslyReady && CF._wasPreviouslyUsingInstances === SF) return !0;
          WF.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), WF.materialDefines = new kS(this._eventInfo.defineNames));
          const AF = WF.materialDefines;
          if (this._isReadyForSubMesh(WF)) return !0;
          const uF = this.OWF(),
            hF = uF.sC();
          if (AF._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, uF.texturesEnabled)) {
            if (this._albedoTexture && vW.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && vW.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && vW.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && vW.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && vW.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const FF = this._getReflectionTexture();
            if (FF && vW.e.ReflectionTextureEnabled) {
              if (!FF.isReadyOrNotBlocking()) return !1;
              if (FF.irradianceTexture) {
                if (!FF.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!FF.sphericalPolynomial && FF.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && vW.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && vW.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (vW.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (hF.getCaps().standardDerivatives && this._bumpTexture && vW.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && vW.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = AF, this._eventInfo.subMesh = WF, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (AF._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (AF.AREALIGHTUSED || AF.CLUSTLIGHT_BATCH)
            for (let iW = 0; iW < FF.lightSources.length; iW++)
              if (!FF.lightSources[iW]._isReady()) return !1;
          if (hF.getCaps().standardDerivatives || FF.isVerticesDataPresent(yW.k.NormalKind) || (FF.createNormals(!0), OF.b.Warn("PBRMaterial: Normals have been created for the mesh: " + FF.name)), !(0, pF.e)(uF, FF, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const bW = WF.effect,
            dF = AF._areLightsDisposed,
            PF = this._prepareEffect(FF, WF.getRenderingMesh(), AF, this.onCompiled, this.onError, SF, null);
          let RF = !1;
          if (PF)
            if (this._onEffectCreatedObservable && (TW.effect = PF, TW.subMesh = WF, this._onEffectCreatedObservable.notifyObservers(TW)), this.allowShaderHotSwapping && bW && !PF.isReady()) {
              if (AF.markAsUnprocessed(), RF = this.isFrozen, dF) return AF._areLightsDisposed = !0, !1
            } else uF.resetCachedMaterial(), WF.setEffect(PF, AF, this._materialContext);
          return !(!WF.effect || !WF.effect.isReady()) && (AF._renderId = uF.getRenderId(), CF._wasPreviouslyReady = !RF, CF._wasPreviouslyUsingInstances = !!SF, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(WF, SF, CF) {
          let AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            hF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            bW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(WF, SF, CF, hF, bW), !CF.isDirty) return null;
          CF.markAsProcessed();
          const dF = this.OWF().sC(),
            PF = new JF.b;
          let RF = 0;
          CF.USESPHERICALINVERTEX && PF.addFallback(RF++, "USESPHERICALINVERTEX"), CF.FOG && PF.addFallback(RF, "FOG"), CF.SPECULARAA && PF.addFallback(RF, "SPECULARAA"), CF.POINTSIZE && PF.addFallback(RF, "POINTSIZE"), CF.LOGARITHMICDEPTH && PF.addFallback(RF, "LOGARITHMICDEPTH"), CF.PARALLAX && PF.addFallback(RF, "PARALLAX"), CF.PARALLAX_RHS && PF.addFallback(RF, "PARALLAX_RHS"), CF.PARALLAXOCCLUSION && PF.addFallback(RF++, "PARALLAXOCCLUSION"), CF.ENVIRONMENTBRDF && PF.addFallback(RF++, "ENVIRONMENTBRDF"), CF.TANGENT && PF.addFallback(RF++, "TANGENT"), CF.BUMP && PF.addFallback(RF++, "BUMP"), RF = (0, pF.E)(CF, PF, this._maxSimultaneousLights, RF), CF.SPECULARTERM && PF.addFallback(RF++, "SPECULARTERM"), CF.USESPHERICALFROMREFLECTIONMAP && PF.addFallback(RF++, "USESPHERICALFROMREFLECTIONMAP"), CF.USEIRRADIANCEMAP && PF.addFallback(RF++, "USEIRRADIANCEMAP"), CF.LIGHTMAP && PF.addFallback(RF++, "LIGHTMAP"), CF.NORMAL && PF.addFallback(RF++, "NORMAL"), CF.AMBIENT && PF.addFallback(RF++, "AMBIENT"), CF.EMISSIVE && PF.addFallback(RF++, "EMISSIVE"), CF.VERTEXCOLOR && PF.addFallback(RF++, "VERTEXCOLOR"), CF.MORPHTARGETS && PF.addFallback(RF++, "MORPHTARGETS"), CF.MULTIVIEW && PF.addFallback(0, "MULTIVIEW");
          const iW = [yW.k.PositionKind];
          CF.NORMAL && iW.push(yW.k.NormalKind), CF.TANGENT && iW.push(yW.k.TangentKind);
          for (let FF = 1; FF <= 6; ++FF) CF["UV" + FF] && iW.push(`uv${1===FF?"":FF}`);
          CF.VERTEXCOLOR && iW.push(yW.k.ColorKind), (0, pF.J)(iW, WF, CF, PF), (0, pF.L)(iW, CF), (0, pF.P)(iW, WF, CF), (0, pF.G)(iW, WF, CF);
          let eF = "pbr";
          const EF = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            QF = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, pF.qb)(EF, QF, !0);
          const rW = ["Material", "Scene", "Mesh"],
            gW = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: CF.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = PF, this._eventInfo.fallbackRank = RF, this._eventInfo.defines = CF, this._eventInfo.uniforms = EF, this._eventInfo.attributes = iW, this._eventInfo.samplers = QF, this._eventInfo.uniformBuffersNames = rW, this._eventInfo.customCode = void 0, this._eventInfo.mesh = WF, this._eventInfo.indexParameters = gW, this._callbackPluginEventGeneric(128, this._eventInfo), EW.e.AddUniformsAndSamplers(EF, QF), wF.b.AddUniforms(EF), wF.b.AddSamplers(QF), (0, RW.e)(EF), this._useVertexPulling) {
            const FF = SF?.geometry;
            FF && (this._vertexPullingMetadata = (0, iS.f)(FF), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((FF, WF) => {
              EF.push(`vp_${WF}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          BF.d && (BF.d.PrepareUniforms(EF, CF), BF.d.PrepareSamplers(QF, CF)), (0, pF.rb)({
            uniformsNames: EF,
            uniformBuffersNames: rW,
            samplers: QF,
            defines: CF,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const tW = {};
          this.customShaderNameResolve && (eF = this.customShaderNameResolve(eF, EF, rW, QF, CF, iW, tW));
          const TF = CF.toString(),
            aW = dF.createEffect(eF, {
              attributes: iW,
              uniformsNames: EF,
              uniformBuffersNames: rW,
              samplers: QF,
              defines: TF,
              fallbacks: PF,
              onCompiled: AF,
              onError: uF,
              indexParameters: gW,
              processFinalCode: tW.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: CF.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: FF._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, dF);
          return this._eventInfo.customCode = void 0, aW
        }
        _prepareDefines(WF, SF, CF) {
          let AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const hF = SF.hasThinInstances,
            bW = this.OWF(),
            dF = bW.sC();
          (0, pF.cb)(bW, WF, CF, !0, this._maxSimultaneousLights, this._disableLighting), CF._needNormals = !0, (0, pF.hb)(bW, CF);
          const PF = this.needAlphaBlendingForMesh(WF) && this.OWF().useOrderIndependentTransparency;
          if ((0, pF.kb)(bW, CF, this.canRenderToMRT && !PF), (0, pF.ib)(bW, CF, PF), EW.e.PrepareDefines(dF.currentRenderPassId, WF, CF), CF.METALLICWORKFLOW = this.isMetallicWorkflow(), CF._areTexturesDirty) {
            CF._needUVs = !1;
            for (let FF = 1; FF <= 6; ++FF) CF["MAINUV" + FF] = !1;
            if (bW.texturesEnabled) {
              CF.ALBEDODIRECTUV = 0, CF.BASE_WEIGHTDIRECTUV = 0, CF.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, CF.AMBIENTDIRECTUV = 0, CF.OPACITYDIRECTUV = 0, CF.EMISSIVEDIRECTUV = 0, CF.REFLECTIVITYDIRECTUV = 0, CF.MICROSURFACEMAPDIRECTUV = 0, CF.METALLIC_REFLECTANCEDIRECTUV = 0, CF.REFLECTANCEDIRECTUV = 0, CF.BUMPDIRECTUV = 0, CF.LIGHTMAPDIRECTUV = 0, dF.getCaps().textureLOD && (CF.LODBASEDMICROSFURACE = !0), this._albedoTexture && vW.e.DiffuseTextureEnabled ? ((0, pF.eb)(this._albedoTexture, CF, "ALBEDO"), CF.GAMMAALBEDO = this._albedoTexture.gammaSpace) : CF.ALBEDO = !1, this._baseWeightTexture && vW.e.BaseWeightTextureEnabled ? (0, pF.eb)(this._baseWeightTexture, CF, "BASE_WEIGHT") : CF.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && vW.e.BaseDiffuseRoughnessTextureEnabled ? (0, pF.eb)(this._baseDiffuseRoughnessTexture, CF, "BASE_DIFFUSE_ROUGHNESS") : CF.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && vW.e.AmbientTextureEnabled ? ((0, pF.eb)(this._ambientTexture, CF, "AMBIENT"), CF.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : CF.AMBIENT = !1, this._opacityTexture && vW.e.OpacityTextureEnabled ? ((0, pF.eb)(this._opacityTexture, CF, "OPACITY"), CF.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : CF.OPACITY = !1;
              const FF = this._getReflectionTexture(),
                WF = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || dF.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, pF._)(bW, FF, CF, this.realTimeFiltering, this.realTimeFilteringQuality, !WF), this._lightmapTexture && vW.e.LightmapTextureEnabled ? ((0, pF.eb)(this._lightmapTexture, CF, "LIGHTMAP"), CF.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, CF.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, CF.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : CF.LIGHTMAP = !1, this._emissiveTexture && vW.e.EmissiveTextureEnabled ? ((0, pF.eb)(this._emissiveTexture, CF, "EMISSIVE"), CF.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : CF.EMISSIVE = !1, vW.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, pF.eb)(this._metallicTexture, CF, "REFLECTIVITY"), CF.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, CF.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, CF.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, CF.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, CF.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, pF.eb)(this._reflectivityTexture, CF, "REFLECTIVITY"), CF.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, CF.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, CF.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : CF.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (CF.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, pF.eb)(this._metallicReflectanceTexture, CF, "METALLIC_REFLECTANCE"), CF.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : CF.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, pF.eb)(this._reflectanceTexture, CF, "REFLECTANCE"), CF.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : CF.REFLECTANCE = !1) : (CF.METALLIC_REFLECTANCE = !1, CF.REFLECTANCE = !1), this._microSurfaceTexture ? (0, pF.eb)(this._microSurfaceTexture, CF, "MICROSURFACEMAP") : CF.MICROSURFACEMAP = !1) : (CF.REFLECTIVITY = !1, CF.MICROSURFACEMAP = !1), dF.getCaps().standardDerivatives && this._bumpTexture && vW.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, pF.eb)(this._bumpTexture, CF, "BUMP"), this._useParallax && this._albedoTexture && vW.e.DiffuseTextureEnabled ? (CF.PARALLAX = !0, CF.PARALLAX_RHS = bW.useRightHandedSystem, CF.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : CF.PARALLAX = !1, CF.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (CF.BUMP = !1, CF.PARALLAX = !1, CF.PARALLAX_RHS = !1, CF.PARALLAXOCCLUSION = !1, CF.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && vW.e.ReflectionTextureEnabled ? (CF.ENVIRONMENTBRDF = !0, CF.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (CF.ENVIRONMENTBRDF = !1, CF.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? CF.ALPHAFROMALBEDO = !0 : CF.ALPHAFROMALBEDO = !1
            }
            CF.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === FF.LIGHTFALLOFF_STANDARD ? (CF.USEPHYSICALLIGHTFALLOFF = !1, CF.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === FF.LIGHTFALLOFF_GLTF ? (CF.USEPHYSICALLIGHTFALLOFF = !1, CF.USEGLTFLIGHTFALLOFF = !0) : (CF.USEPHYSICALLIGHTFALLOFF = !0, CF.USEGLTFLIGHTFALLOFF = !1), CF.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? CF.TWOSIDEDLIGHTING = !0 : CF.TWOSIDEDLIGHTING = !1, CF.MIRRORED = !!bW._mirroredCameraPosition, CF.SPECULARAA = dF.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(CF._areTexturesDirty || CF._areMiscDirty) && (CF.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, CF.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, CF.ALPHABLEND = this.needAlphaBlendingForMesh(WF), CF.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, CF.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), CF._areTexturesDirty && (CF.TEXTURE_REPETITION_MODE = dF.version > 1 || dF.isWebGPU ? this.textureRepetitionMode : 0), CF._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(CF), CF.FORCENORMALFORWARD = this._forceNormalForward, CF.RADIANCEOCCLUSION = this._useRadianceOcclusion, CF.HORIZONOCCLUSION = this._useHorizonOcclusion, CF._areMiscDirty && ((0, pF.fb)(WF, bW, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(WF), CF, this._applyDecalMapAfterDetailMap, this._useVertexPulling, SF, this._isVertexOutputInvariant), CF.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !WF.isVerticesDataPresent(yW.k.NormalKind), CF.DEBUGMODE = this._debugMode), (0, pF.X)(bW, dF, this, CF, !!AF, uF, hF), this._eventInfo.defines = CF, this._eventInfo.mesh = WF, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, pF.W)(WF, CF, !0, !0, !0, this._transparencyMode !== FF.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(FF, WF, SF) {
          const CF = {
            clipPlane: !1,
            useInstances: !1,
            ...SF
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const SF = new kS(this._eventInfo.defineNames),
              AF = this._prepareEffect(FF, FF, SF, void 0, void 0, CF.useInstances, CF.clipPlane);
            this._onEffectCreatedObservable && (TW.effect = AF, TW.subMesh = null, this._onEffectCreatedObservable.notifyObservers(TW)), AF.isReady() ? WF && WF(this) : AF.onCompileObservable.add((() => {
              WF && WF(this)
            }))
          })()
        }
        buildUniformLayout() {
          const FF = this._uniformBuffer;
          FF.addUniform("vAlbedoInfos", 2), FF.addUniform("vBaseWeightInfos", 2), FF.addUniform("vBaseDiffuseRoughnessInfos", 2), FF.addUniform("vAmbientInfos", 4), FF.addUniform("vOpacityInfos", 2), FF.addUniform("vEmissiveInfos", 2), FF.addUniform("vLightmapInfos", 2), FF.addUniform("vReflectivityInfos", 3), FF.addUniform("vMicroSurfaceSamplerInfos", 2), FF.addUniform("vBumpInfos", 3), FF.addUniform("albedoMatrix", 16), FF.addUniform("baseWeightMatrix", 16), FF.addUniform("baseDiffuseRoughnessMatrix", 16), FF.addUniform("ambientMatrix", 16), FF.addUniform("opacityMatrix", 16), FF.addUniform("emissiveMatrix", 16), FF.addUniform("lightmapMatrix", 16), FF.addUniform("reflectivityMatrix", 16), FF.addUniform("microSurfaceSamplerMatrix", 16), FF.addUniform("bumpMatrix", 16), FF.addUniform("vTangentSpaceParams", 2), FF.addUniform("vAlbedoColor", 4), FF.addUniform("baseWeight", 1), FF.addUniform("baseDiffuseRoughness", 1), FF.addUniform("vLightingIntensity", 4), FF.addUniform("pointSize", 1), FF.addUniform("vReflectivityColor", 4), FF.addUniform("vEmissiveColor", 3), FF.addUniform("vAmbientColor", 3), FF.addUniform("vDebugMode", 2), FF.addUniform("vMetallicReflectanceFactors", 4), FF.addUniform("vMetallicReflectanceInfos", 2), FF.addUniform("metallicReflectanceMatrix", 16), FF.addUniform("vReflectanceInfos", 2), FF.addUniform("reflectanceMatrix", 16), FF.addUniform("cameraInfo", 4), FF.addUniform("vTextureRepetitionHexTilingParams", 4), (0, pF.mb)(FF, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(FF, WF, SF) {
          const CF = this.OWF(),
            AF = SF.materialDefines;
          if (!AF) return;
          const uF = SF.effect;
          if (!uF) return;
          this._activeEffect = uF, WF.getMeshUniformBuffer().bindToEffect(uF, "Mesh"), WF.transferToEffect(FF);
          const hF = CF.sC();
          this._uniformBuffer.bindToEffect(uF, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, CF, WF, FF, this.isFrozen), EW.e.Bind(hF.currentRenderPassId, this._activeEffect, WF, FF, this);
          const bW = CF.activeCamera;
          bW ? this._uniformBuffer.updateFloat4("cameraInfo", bW.minZ, bW.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const dF = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", dF[0], dF[1], dF[2], dF[3]), this._eventInfo.subMesh = SF, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), AF.OBJECTSPACE_NORMALMAP && (FF.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const PF = this._mustRebind(CF, uF, SF, WF.visibility),
            RF = hF._features.needToAlwaysBindUniformBuffers;
          (0, pF.f)(WF, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, iS.c)(this._activeEffect, this._vertexPullingMetadata);
          let iW = null;
          const eF = this._uniformBuffer;
          if (PF) {
            if (this.bindViewProjection(uF), iW = this._getReflectionTexture(), !eF.useUbo || !this.isFrozen || !eF.isSync || SF._drawWrapper._forceRebindOnNextCall) {
              if (CF.texturesEnabled && (this._albedoTexture && vW.e.DiffuseTextureEnabled && (eF.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, pF.A)(this._albedoTexture, eF, "albedo")), this._baseWeightTexture && vW.e.BaseWeightTextureEnabled && (eF.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, pF.A)(this._baseWeightTexture, eF, "baseWeight")), this._baseDiffuseRoughnessTexture && vW.e.BaseDiffuseRoughnessTextureEnabled && (eF.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, pF.A)(this._baseDiffuseRoughnessTexture, eF, "baseDiffuseRoughness")), this._ambientTexture && vW.e.AmbientTextureEnabled && (eF.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, pF.A)(this._ambientTexture, eF, "ambient")), this._opacityTexture && vW.e.OpacityTextureEnabled && (eF.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, pF.A)(this._opacityTexture, eF, "opacity")), this._emissiveTexture && vW.e.EmissiveTextureEnabled && (eF.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, pF.A)(this._emissiveTexture, eF, "emissive")), this._lightmapTexture && vW.e.LightmapTextureEnabled && (eF.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, pF.A)(this._lightmapTexture, eF, "lightmap")), vW.e.SpecularTextureEnabled && (this._metallicTexture ? (eF.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, pF.A)(this._metallicTexture, eF, "reflectivity")) : this._reflectivityTexture && (eF.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, pF.A)(this._reflectivityTexture, eF, "reflectivity")), this._metallicReflectanceTexture && (eF.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, pF.A)(this._metallicReflectanceTexture, eF, "metallicReflectance")), this._reflectanceTexture && AF.REFLECTANCE && (eF.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, pF.A)(this._reflectanceTexture, eF, "reflectance")), this._microSurfaceTexture && (eF.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, pF.A)(this._microSurfaceTexture, eF, "microSurfaceSampler"))), this._bumpTexture && hF.getCaps().standardDerivatives && vW.e.BumpTextureEnabled && !this._disableBumpMap && (eF.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, pF.A)(this._bumpTexture, eF, "bump"), CF._mirroredCameraPosition ? eF.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : eF.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, pF.m)(CF, AF, eF, this._reflectionColor, iW, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && eF.updateFloat("pointSize", this.pointSize), AF.METALLICWORKFLOW) {
                XF.l.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, XF.l.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const FF = this.subSurface?._indexOfRefraction ?? 1.5,
                  WF = 1;
                XF.l.Color4[0].b = FF;
                const SF = Math.pow((FF - WF) / (FF + WF), 2);
                XF.l.Color4[0].a = SF, eF.updateDirectColor4("vReflectivityColor", XF.l.Color4[0]), eF.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else eF.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              eF.updateColor3("vEmissiveColor", vW.e.EmissiveTextureEnabled ? this._emissiveColor : XF.e.BlackReadOnly), !AF.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? eF.updateColor4("vAlbedoColor", this._albedoColor, 1) : eF.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), eF.updateFloat("baseWeight", this._baseWeight), eF.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * CF.environmentIntensity, this._lightingInfos.w = this._specularIntensity, eF.updateVector4("vLightingIntensity", this._lightingInfos), CF.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), eF.updateColor3("vAmbientColor", this._globalAmbientColor), eF.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            CF.texturesEnabled && (this._albedoTexture && vW.e.DiffuseTextureEnabled && eF.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && vW.e.BaseWeightTextureEnabled && eF.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && vW.e.BaseDiffuseRoughnessTextureEnabled && eF.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && vW.e.AmbientTextureEnabled && eF.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && vW.e.OpacityTextureEnabled && eF.setTexture("opacitySampler", this._opacityTexture), (0, pF.o)(CF, AF, eF, iW, this.realTimeFiltering), AF.ENVIRONMENTBRDF && eF.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && vW.e.EmissiveTextureEnabled && eF.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && vW.e.LightmapTextureEnabled && eF.setTexture("lightmapSampler", this._lightmapTexture), vW.e.SpecularTextureEnabled && (this._metallicTexture ? eF.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && eF.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && eF.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && AF.REFLECTANCE && eF.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && eF.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && hF.getCaps().standardDerivatives && vW.e.BumpTextureEnabled && !this._disableBumpMap && eF.setTexture("bumpSampler", this._bumpTexture)), this.OWF().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(WF) && this.OWF().depthPeelingRenderer.bind(uF), this._eventInfo.subMesh = SF, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, RW.h)(this._activeEffect, this, CF), this.bindEyePosition(uF)
          } else RF && (this._needToBindSceneUbo = !0);
          !PF && this.isFrozen && !RF || !CF.lightsEnabled || this._disableLighting || (0, pF.q)(CF, WF, this._activeEffect, AF, this._maxSimultaneousLights), !PF && this.isFrozen || ((CF.fogEnabled && WF.applyFog && CF.fogMode !== IF.f.FOGMODE_NONE || iW || this.subSurface.refractionTexture || WF.receiveShadows || AF.PREPASS || AF.CLUSTLIGHT_BATCH) && this.bindView(uF), (0, pF.i)(CF, WF, this._activeEffect, !0), AF.NUM_MORPH_INFLUENCERS && (0, pF.t)(WF, this._activeEffect), AF.BAKED_VERTEX_ANIMATION_TEXTURE && WF.bakedVertexAnimationManager?.bind(uF, AF.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, pF.r)(AF, this._activeEffect, CF)), this._afterBind(WF, this._activeEffect, SF), eF.update()
        }
        getAnimatables() {
          const FF = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && FF.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && FF.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && FF.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && FF.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && FF.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && FF.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && FF.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? FF.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && FF.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && FF.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && FF.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && FF.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && FF.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && FF.push(this._microSurfaceTexture), FF
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.OWF().environmentTexture
        }
        getActiveTextures() {
          const FF = super.getActiveTextures();
          return this._albedoTexture && FF.push(this._albedoTexture), this._baseWeightTexture && FF.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && FF.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && FF.push(this._ambientTexture), this._opacityTexture && FF.push(this._opacityTexture), this._reflectionTexture && FF.push(this._reflectionTexture), this._emissiveTexture && FF.push(this._emissiveTexture), this._reflectivityTexture && FF.push(this._reflectivityTexture), this._metallicTexture && FF.push(this._metallicTexture), this._metallicReflectanceTexture && FF.push(this._metallicReflectanceTexture), this._reflectanceTexture && FF.push(this._reflectanceTexture), this._microSurfaceTexture && FF.push(this._microSurfaceTexture), this._bumpTexture && FF.push(this._bumpTexture), this._lightmapTexture && FF.push(this._lightmapTexture), FF
        }
        hasTexture(FF) {
          return !!super.hasTexture(FF) || (this._albedoTexture === FF || (this._baseWeightTexture === FF || (this._baseDiffuseRoughnessTexture === FF || (this._ambientTexture === FF || (this._opacityTexture === FF || (this._reflectionTexture === FF || (this._emissiveTexture === FF || (this._reflectivityTexture === FF || (this._metallicTexture === FF || (this._metallicReflectanceTexture === FF || (this._reflectanceTexture === FF || (this._microSurfaceTexture === FF || (this._bumpTexture === FF || this._lightmapTexture === FF)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const FF = this.OWF().enableSubSurfaceForPrePass();
          return FF && (FF.enabled = !0), !0
        }
        dispose(FF, WF) {
          this._breakShaderLoadedCheck = !0, WF && (this._environmentBRDFTexture && this.OWF().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(FF, WF)
        }
      }, WF = new WeakMap, (() => {
        const WF = "function" === typeof Symbol && Symbol.metadata ? Object.create(AF[Symbol.metadata] ?? null) : void 0;
        CF = [(0, mW.i)("_markAllSubMeshesAsMiscDirty")], (0, LF.j)(FF, null, CF, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: FF => "debugMode" in FF,
            get: FF => FF.debugMode,
            set: (FF, WF) => {
              FF.debugMode = WF
            }
          },
          metadata: WF
        }, hF, bW), WF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WF
        })
      })(), FF.PBRMATERIAL_OPAQUE = uF.c.MATERIAL_OPAQUE, FF.PBRMATERIAL_ALPHATEST = uF.c.MATERIAL_ALPHATEST, FF.PBRMATERIAL_ALPHABLEND = uF.c.MATERIAL_ALPHABLEND, FF.PBRMATERIAL_ALPHATESTANDBLEND = uF.c.MATERIAL_ALPHATESTANDBLEND, FF.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, FF.LIGHTFALLOFF_PHYSICAL = 0, FF.LIGHTFALLOFF_GLTF = 1, FF.LIGHTFALLOFF_STANDARD = 2, FF.ForceGLSL = !1, FF._ShaderLoader = new eW.b((() => [Promise.all([SF.e(287), SF.e(298)]).then((() => SF(59258))), Promise.all([SF.e(292), SF.e(288), SF.e(352), SF.e(301), SF.e(351)]).then((() => SF(59285)))]), (() => [Promise.all([SF.e(306), SF.e(308), SF.e(315)]).then((() => SF(59346))), Promise.all([SF.e(306), SF.e(309), SF.e(355), SF.e(319), SF.e(354)]).then((() => SF(59366)))])), FF
    })();
    Object.getOwnPropertyDescriptor(VW.prototype, "decalMap") || Object.defineProperty(VW.prototype, "decalMap", (0, tS.f)("PBRBaseMaterial", "decalMap")), (0, SF(39675).c)();
    var NW = SF(37994);
    var DW = SF(38065),
      LW = SF(39659),
      mS = SF(37796),
      OW = SF(37809),
      xS = SF(37908);
    let ZW = !1;
    const oW = new XF.i,
      YW = new XF.i;
    class MW extends LW.c {
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
      set wrapU(FF) {
        if (this._textures)
          for (let WF = 0; WF < this._textures.length; WF++) this._textures[WF].wrapU = FF
      }
      set wrapV(FF) {
        if (this._textures)
          for (let WF = 0; WF < this._textures.length; WF++) this._textures[WF].wrapV = FF
      }
      constructor(FF, WF, SF, CF, AF, uF) {
        const hF = !(!AF || !AF.generateMipMaps) && AF.generateMipMaps,
          bW = !(!AF || !AF.generateDepthTexture) && AF.generateDepthTexture,
          dF = AF && AF.depthTextureFormat ? AF.depthTextureFormat : 15,
          PF = !AF || void 0 === AF.doNotChangeAspectRatio || AF.doNotChangeAspectRatio,
          RF = !(!AF || !AF.drawOnlyOnFirstAttachmentByDefault) && AF.drawOnlyOnFirstAttachmentByDefault;
        if (super(FF, WF, CF, hF, PF, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), ZW || (ZW = !0, OW.ThinEngine.prototype.restoreSingleAttachment = function() {
            const FF = this._gl;
            this.bindAttachments([FF.BACK])
          }, OW.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const FF = this._gl;
            this.bindAttachments([FF.COLOR_ATTACHMENT0])
          }, OW.ThinEngine.prototype.buildTextureLayout = function(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const SF = this._gl,
              CF = [];
            if (WF) CF.push(SF.BACK);
            else
              for (let AF = 0; AF < FF.length; AF++) FF[AF] ? CF.push(SF["COLOR_ATTACHMENT" + AF]) : CF.push(SF.NONE);
            return CF
          }, OW.ThinEngine.prototype.bindAttachments = function(FF) {
            const WF = this._gl,
              SF = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, SF)
              for (let CF = 0; CF < FF.length; CF++) FF[CF] !== WF.NONE && SF[CF] && (0, xS.i)(SF[CF].format) && (this._integerMRTAttachmentsMask |= 1 << CF);
            WF.drawBuffers(FF)
          }, OW.ThinEngine.prototype.clearAttachments = function(FF, WF, SF, CF) {
            let AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const hF = this._currentRenderTarget?.textures;
            let bW = !1;
            if (SF && FF && hF)
              for (let dF = 0; dF < WF.length; dF++) {
                const FF = hF[dF];
                if (WF[dF] !== this._gl.NONE && FF && (0, xS.i)(FF.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  bW = !0;
                  break
                }
              }
            if (!bW || !FF || !hF) return this.bindAttachments(WF), void this.clear(FF, SF, CF, AF, uF);
            this.bindAttachments(WF), this._applyColorWriteState();
            for (let dF = 0; dF < WF.length; dF++) {
              const SF = hF[dF];
              if (WF[dF] !== this._gl.NONE && SF) {
                let WF = FF;
                if ((0, xS.i)(SF.format)) {
                  const CF = (0, xS.j)(SF.type);
                  WF = CF ? oW : YW;
                  const AF = CF ? 255 : 1;
                  WF.r = Math.round(FF.r * AF), WF.g = Math.round(FF.g * AF), WF.b = Math.round(FF.b * AF), WF.a = Math.round(FF.a * AF)
                }
                this._clearColorAttachment(dF, WF, SF.format, SF.type)
              }
            }
            if (CF || AF) {
              const FF = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, CF, AF, uF)
              } finally {
                this._integerMRTAttachmentsMask = FF
              }
            }
          }, OW.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              SF = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, FF.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(FF), WF || this.generateMipMapsMultiFramebuffer(FF), SF && (FF._MSAAFramebuffer && this._bindUnboundFramebuffer(FF._framebuffer), SF()), this._bindUnboundFramebuffer(null)
          }, OW.ThinEngine.prototype.createMultipleRenderTarget = function(FF, WF) {
            let SF, CF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              AF = !1,
              uF = !0,
              hF = !1,
              bW = !1,
              dF = 1,
              PF = 1,
              RF = [],
              iW = [],
              eF = [],
              EF = [],
              QF = [],
              rW = [],
              gW = [],
              tW = [],
              TF = [],
              aW = !1;
            const kW = this._createHardwareRenderTargetWrapper(!0, !1, FF);
            void 0 !== WF && (AF = void 0 !== WF.generateMipMaps && WF.generateMipMaps, uF = void 0 === WF.generateDepthBuffer || WF.generateDepthBuffer, hF = void 0 !== WF.generateStencilBuffer && WF.generateStencilBuffer, bW = void 0 !== WF.generateDepthTexture && WF.generateDepthTexture, dF = WF.seF ?? 1, PF = WF.samples ?? PF, RF = WF.types || RF, iW = WF.samplingModes || iW, eF = WF.useSRGBBuffers || eF, EF = WF.formats || EF, QF = WF.targetTypes || QF, rW = WF.faceIndex || rW, gW = WF.layerIndex || gW, tW = WF.layerCounts || tW, TF = WF.labels || TF, aW = WF.dontCreateTextures ?? !1, this.Im > 1 && (13 === WF.depthTextureFormat || 17 === WF.depthTextureFormat || 16 === WF.depthTextureFormat || 14 === WF.depthTextureFormat || 18 === WF.depthTextureFormat) && (SF = WF.depthTextureFormat)), void 0 === SF && (SF = hF ? 13 : 14);
            const qW = this._gl,
              VF = this._currentFramebuffer,
              NF = qW.createFramebuffer();
            this._bindUnboundFramebuffer(NF);
            const DF = FF.width ?? FF,
              LF = FF.height ?? FF,
              mW = [],
              xW = [],
              ZF = this.Im > 1 && (13 === SF || 17 === SF || 18 === SF);
            kW.label = WF?.label ?? "MultiRenderTargetWrapper", kW._framebuffer = NF, kW._generateDepthBuffer = bW || uF, kW._generateStencilBuffer = bW ? ZF : hF, kW._depthStencilBuffer = this._setupFramebufferDepthAttachments(kW._generateStencilBuffer, kW._generateDepthBuffer, DF, LF, 1, SF), kW._attachments = xW;
            for (let oF = 0; oF < dF; oF++) {
              let FF = iW[oF] || 3,
                WF = RF[oF] || 0,
                SF = eF[oF] || !1;
              const CF = EF[oF] || 5,
                uF = QF[oF] || 3553,
                hF = tW[oF] ?? 1;
              (1 !== WF || this._caps.textureFloatLinearFiltering) && (2 !== WF || this._caps.textureHalfFloatLinearFiltering) || (FF = 1);
              const bW = this._getSamplingParameters(FF, AF);
              1 !== WF || this._caps.textureFloat || (WF = 0, OF.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), SF = SF && this._caps.supportSRGBBuffers && (this.Im > 1 || this.isWebGPU);
              const dF = this.Im > 1,
                PF = qW[dF ? "COLOR_ATTACHMENT" + oF : "COLOR_ATTACHMENT" + oF + "_WEBGL"];
              if (xW.push(PF), -1 === uF || aW) continue;
              const rW = new mS.b(this, 6);
              mW[oF] = rW, qW.activeTexture(qW["TEXTURE" + oF]), qW.bindTexture(uF, rW._hardwareTexture.underlyingResource), qW.texParameteri(uF, qW.TEXTURE_MAG_FILTER, bW.mag), qW.texParameteri(uF, qW.TEXTURE_MIN_FILTER, bW.min), qW.texParameteri(uF, qW.TEXTURE_WRAP_S, qW.CLAMP_TO_EDGE), qW.texParameteri(uF, qW.TEXTURE_WRAP_T, qW.CLAMP_TO_EDGE);
              const gW = this._getRGBABufferInternalSizedFormat(WF, CF, SF),
                VF = this._getInternalFormat(CF),
                NF = this._getWebGLTextureType(WF);
              if (!dF || 35866 !== uF && 32879 !== uF)
                if (34067 === uF) {
                  for (let FF = 0; FF < 6; FF++) qW.texImage2D(qW.TEXTURE_CUBE_MAP_POSITIVE_X + FF, 0, gW, DF, LF, 0, VF, NF, null);
                  rW.isCube = !0
                } else qW.texImage2D(qW.TEXTURE_2D, 0, gW, DF, LF, 0, VF, NF, null);
              else 35866 === uF ? rW.is2DArray = !0 : rW.is3D = !0, rW.baseDepth = rW.depth = hF, qW.texImage3D(uF, 0, gW, DF, LF, hF, 0, VF, NF, null);
              AF && qW.generateMipmap(uF), this._bindTextureDirectly(uF, null), rW.baseWidth = DF, rW.baseHeight = LF, rW.width = DF, rW.height = LF, rW.isReady = !0, rW.samples = 1, rW.generateMipMaps = AF, rW.samplingMode = FF, rW.type = WF, rW._useSRGBBuffer = SF, rW.format = CF, rW.label = TF[oF] ?? kW.label + "-Texture" + oF, this._internalTexturesCache.push(rW)
            }
            if (bW && this._caps.depthTextureExtension && !aW) {
              const FF = new mS.b(this, 14);
              let WF = 5,
                CF = qW.DEPTH_COMPONENT16,
                uF = qW.DEPTH_COMPONENT,
                hF = qW.UNSIGNED_SHORT,
                bW = qW.DEPTH_ATTACHMENT;
              this.Im < 2 ? CF = qW.DEPTH_COMPONENT : 14 === SF ? (WF = 1, hF = qW.FLOAT, CF = qW.DEPTH_COMPONENT32F) : 18 === SF ? (WF = 0, hF = qW.FLOAT_32_UNSIGNED_INT_24_8_REV, CF = qW.DEPTH32F_STENCIL8, uF = qW.DEPTH_STENCIL, bW = qW.DEPTH_STENCIL_ATTACHMENT) : 16 === SF ? (WF = 0, hF = qW.UNSIGNED_INT, CF = qW.DEPTH_COMPONENT24, bW = qW.DEPTH_ATTACHMENT) : 13 !== SF && 17 !== SF || (WF = 12, hF = qW.UNSIGNED_INT_24_8, CF = qW.DEPTH24_STENCIL8, uF = qW.DEPTH_STENCIL, bW = qW.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(qW.TEXTURE_2D, FF, !0), qW.texParameteri(qW.TEXTURE_2D, qW.TEXTURE_MAG_FILTER, qW.NEAREST), qW.texParameteri(qW.TEXTURE_2D, qW.TEXTURE_MIN_FILTER, qW.NEAREST), qW.texParameteri(qW.TEXTURE_2D, qW.TEXTURE_WRAP_S, qW.CLAMP_TO_EDGE), qW.texParameteri(qW.TEXTURE_2D, qW.TEXTURE_WRAP_T, qW.CLAMP_TO_EDGE), qW.texImage2D(qW.TEXTURE_2D, 0, CF, DF, LF, 0, uF, hF, null), qW.framebufferTexture2D(qW.FRAMEBUFFER, bW, qW.TEXTURE_2D, FF._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(qW.TEXTURE_2D, null), kW._depthStencilTexture = FF, kW._depthStencilTextureWithStencil = ZF, FF.baseWidth = DF, FF.baseHeight = LF, FF.width = DF, FF.height = LF, FF.isReady = !0, FF.samples = 1, FF.generateMipMaps = AF, FF.samplingMode = 1, FF.format = SF, FF.type = WF, FF.label = kW.label + "-DepthStencil", mW[dF] = FF, this._internalTexturesCache.push(FF)
            }
            if (kW.setTextures(mW), CF && qW.drawBuffers(xW), this._bindUnboundFramebuffer(VF), kW.setLayerAndFaceIndices(gW, rW), this.resetTextureCache(), aW) {
              if (PF > 1) {
                const FF = qW.createFramebuffer();
                if (!FF) throw new Error("Unable to create multi sampled framebuffer");
                kW._samples = PF, kW._MSAAFramebuffer = FF, dF > 0 && CF && (this._bindUnboundFramebuffer(FF), qW.drawBuffers(xW), this._bindUnboundFramebuffer(VF))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(kW, PF, CF);
            return kW
          }, OW.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(FF, WF) {
            let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.Im < 2 || !FF) return 1;
            if (FF.samples === WF) return WF;
            const CF = this._gl;
            WF = Math.min(WF, this.getCaps().maxMSAASamples), FF._depthStencilBuffer && (CF.deleteRenderbuffer(FF._depthStencilBuffer), FF._depthStencilBuffer = null), FF._MSAAFramebuffer && (CF.deleteFramebuffer(FF._MSAAFramebuffer), FF._MSAAFramebuffer = null);
            const AF = FF._attachments.length;
            for (let hF = 0; hF < AF; hF++) {
              const WF = FF.textures[hF]._hardwareTexture;
              WF?.releaseMSAARenderBuffers()
            }
            if (WF > 1 && "function" === typeof CF.renderbufferStorageMultisample) {
              const uF = CF.createFramebuffer();
              if (!uF) throw new Error("Unable to create multi sampled framebuffer");
              FF._MSAAFramebuffer = uF, this._bindUnboundFramebuffer(uF);
              const hF = [];
              for (let SF = 0; SF < AF; SF++) {
                const AF = FF.textures[SF],
                  uF = AF._hardwareTexture,
                  bW = CF[this.Im > 1 ? "COLOR_ATTACHMENT" + SF : "COLOR_ATTACHMENT" + SF + "_WEBGL"],
                  dF = this._createRenderBuffer(AF.width, AF.height, WF, -1, this._getRGBABufferInternalSizedFormat(AF.type, AF.format, AF._useSRGBBuffer), bW);
                if (!dF) throw new Error("Unable to create multi sampled framebuffer");
                uF.addMSAARenderBuffer(dF), AF.samples = WF, hF.push(bW)
              }
              SF && CF.drawBuffers(hF)
            } else this._bindUnboundFramebuffer(FF._framebuffer);
            const uF = FF._depthStencilTexture ? FF._depthStencilTexture.format : void 0;
            return FF._depthStencilBuffer = this._setupFramebufferDepthAttachments(FF._generateStencilBuffer, FF._generateDepthBuffer, FF.width, FF.height, WF, uF), this._bindUnboundFramebuffer(null), FF._samples = WF, WF
          }, OW.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(FF) {
            const WF = FF,
              SF = this._gl;
            if (WF.isMulti)
              for (let CF = 0; CF < WF._attachments.length; CF++) {
                const FF = WF.textures[CF];
                !FF?.generateMipMaps || FF?.isCube || FF?.is3D || (this._bindTextureDirectly(SF.TEXTURE_2D, FF, !0), SF.generateMipmap(SF.TEXTURE_2D), this._bindTextureDirectly(SF.TEXTURE_2D, null))
              }
          }, OW.ThinEngine.prototype.resolveMultiFramebuffer = function(FF) {
            const WF = FF,
              SF = this._gl;
            if (!WF._MSAAFramebuffer || !WF.isMulti) return;
            let CF = WF.resolveMSAAColors ? SF.COLOR_BUFFER_BIT : 0;
            CF |= WF._generateDepthBuffer && WF.resolveMSAADepth ? SF.DEPTH_BUFFER_BIT : 0, CF |= WF._generateStencilBuffer && WF.resolveMSAAStencil ? SF.STENCIL_BUFFER_BIT : 0;
            const AF = WF._attachments,
              uF = AF.length;
            SF.bindFramebuffer(SF.READ_FRAMEBUFFER, WF._MSAAFramebuffer), SF.bindFramebuffer(SF.DRAW_FRAMEBUFFER, WF._framebuffer);
            for (let hF = 0; hF < uF; hF++) {
              const FF = WF.textures[hF];
              for (let WF = 0; WF < uF; WF++) AF[WF] = SF.NONE;
              AF[hF] = SF[this.Im > 1 ? "COLOR_ATTACHMENT" + hF : "COLOR_ATTACHMENT" + hF + "_WEBGL"], SF.readBuffer(AF[hF]), SF.drawBuffers(AF), SF.blitFramebuffer(0, 0, FF.width, FF.height, 0, 0, FF.width, FF.height, CF, SF.NEAREST)
            }
            for (let hF = 0; hF < uF; hF++) AF[hF] = SF[this.Im > 1 ? "COLOR_ATTACHMENT" + hF : "COLOR_ATTACHMENT" + hF + "_WEBGL"];
            SF.drawBuffers(AF), SF.bindFramebuffer(this._gl.FRAMEBUFFER, WF._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = uF;
        const iW = [],
          eF = [],
          EF = [],
          QF = [],
          rW = [],
          gW = [],
          tW = [],
          TF = [];
        this._initTypes(SF, iW, eF, EF, QF, rW, gW, tW, TF, AF);
        const aW = !AF || void 0 === AF.generateDepthBuffer || AF.generateDepthBuffer,
          kW = !(!AF || void 0 === AF.generateStencilBuffer) && AF.generateStencilBuffer,
          qW = AF && AF.samples ? AF.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: eF,
          generateMipMaps: hF,
          generateDepthBuffer: aW,
          generateStencilBuffer: kW,
          generateDepthTexture: bW,
          depthTextureFormat: dF,
          types: iW,
          seF: SF,
          useSRGBBuffers: EF,
          samples: qW,
          formats: QF,
          targetTypes: rW,
          faceIndex: gW,
          layerIndex: tW,
          layerCounts: TF,
          labels: uF,
          label: FF
        }, this._count = SF, this._drawOnlyOnFirstAttachmentByDefault = RF, SF > 0 && (this._createInternalTextures(), this._createTextures(uF))
      }
      _initTypes(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF) {
        for (let RF = 0; RF < FF; RF++) PF && PF.types && void 0 !== PF.types[RF] ? WF.push(PF.types[RF]) : WF.push(PF && PF.defaultType ? PF.defaultType : 0), PF && PF.samplingModes && void 0 !== PF.samplingModes[RF] ? SF.push(PF.samplingModes[RF]) : SF.push(ZF.i.BILINEAR_SAMPLINGMODE), PF && PF.useSRGBBuffers && void 0 !== PF.useSRGBBuffers[RF] ? CF.push(PF.useSRGBBuffers[RF]) : CF.push(!1), PF && PF.formats && void 0 !== PF.formats[RF] ? AF.push(PF.formats[RF]) : AF.push(5), PF && PF.targetTypes && void 0 !== PF.targetTypes[RF] ? uF.push(PF.targetTypes[RF]) : uF.push(3553), PF && PF.faceIndex && void 0 !== PF.faceIndex[RF] ? hF.push(PF.faceIndex[RF]) : hF.push(0), PF && PF.layerIndex && void 0 !== PF.layerIndex[RF] ? bW.push(PF.layerIndex[RF]) : bW.push(0), PF && PF.layerCounts && void 0 !== PF.layerCounts[RF] ? dF.push(PF.layerCounts[RF]) : dF.push(1)
      }
      _createInternaTextureIndexMapping() {
        const FF = {},
          WF = [];
        if (!this._renderTarget) return WF;
        const SF = this._renderTarget.textures;
        for (let CF = 0; CF < SF.length; CF++) {
          const AF = SF[CF];
          if (!AF) continue;
          const uF = FF[AF.uniqueId];
          void 0 !== uF ? WF[CF] = uF : FF[AF.uniqueId] = CF
        }
        return WF
      }
      _rebuild() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || FF) return;
        const CF = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), WF && (this._releaseTextures(), this._createTextures(SF));
        const AF = this._renderTarget.textures;
        for (let uF = 0; uF < AF.length; uF++) {
          const FF = this._textures[uF];
          void 0 !== CF[uF] && this._renderTarget.setTexture(AF[CF[uF]], uF), FF._texture = AF[uF], FF._texture && (FF._noMipmap = !FF._texture.useMipMaps, FF._useSRGBBuffer = FF._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let FF = 0; FF < this._textures.length; FF++) this._textures[FF]._texture = null, this._textures[FF].dispose()
      }
      _createTextures(FF) {
        const WF = this._renderTarget.textures;
        this._textures = [];
        for (let SF = 0; SF < WF.length; SF++) {
          const CF = new ZF.i(null, this.OWF());
          FF?.[SF] && (CF.name = FF[SF]), CF._texture = WF[SF], CF._texture && (CF._noMipmap = !CF._texture.useMipMaps, CF._useSRGBBuffer = CF._texture._useSRGBBuffer), this._textures.push(CF)
        }
      }
      setInternalTexture(FF, WF) {
        let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === WF && (this._texture = FF), this.renderTarget.setTexture(FF, WF, SF), this.textures[WF] || (this.textures[WF] = new ZF.i(null, this.OWF()), this.textures[WF].name = this._textureNames?.[WF] ?? this.textures[WF].name), this.textures[WF]._texture = FF, this.textures[WF]._noMipmap = !FF.useMipMaps, this.textures[WF]._useSRGBBuffer = FF._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[WF] = FF.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[WF] = FF.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[WF] = FF._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[WF])) {
          let SF;
          SF = FF.is2DArray ? 35866 : FF.isCube ? 34067 : FF.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[WF] = SF
        }
      }
      setLayerAndFaceIndex(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[FF] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[FF] = WF), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[FF] = SF), this.renderTarget.setLayerAndFaceIndex(FF, WF, SF))
      }
      setLayerAndFaceIndices(FF, WF) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = FF, this._multiRenderTargetOptions.faceIndex = WF, this.renderTarget.setLayerAndFaceIndices(FF, WF))
      }
      get samples() {
        return this._samples
      }
      set samples(FF) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(FF) : this._samples = FF
      }
      resize(FF) {
        this._processSizeParameter(FF), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(FF, WF, SF) {
        this._multiRenderTargetOptions.seF = FF, this._count = FF;
        const CF = [],
          AF = [],
          uF = [],
          hF = [],
          bW = [],
          dF = [],
          PF = [],
          RF = [];
        this._textureNames = SF, this._initTypes(FF, CF, AF, uF, hF, bW, dF, PF, RF, WF), this._multiRenderTargetOptions.types = CF, this._multiRenderTargetOptions.samplingModes = AF, this._multiRenderTargetOptions.useSRGBBuffers = uF, this._multiRenderTargetOptions.formats = hF, this._multiRenderTargetOptions.targetTypes = bW, this._multiRenderTargetOptions.faceIndex = dF, this._multiRenderTargetOptions.layerIndex = PF, this._multiRenderTargetOptions.layerCounts = RF, this._multiRenderTargetOptions.labels = SF, this._rebuild(!1, !0, SF)
      }
      _unbindFrameBuffer(FF, WF) {
        this._renderTarget && FF.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(WF)
        }))
      }
      dispose() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), FF ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const FF = this._renderTarget?.textures;
        if (FF) {
          for (let WF = FF.length - 1; WF >= 0; WF--) this._textures[WF]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var cS = SF(38136);
    class GW {
      constructor(FF) {
        this.name = cS.d.NAME_GEOMETRYBUFFERRENDERER, this.ju = FF
      }
      register() {
        this.ju._gatherRenderTargetsStage.registerStep(cS.d.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(FF) {
        this.ju._geometryBufferRenderer && FF.push(this.ju._geometryBufferRenderer.getGBuffer())
      }
    }
    let zS = !1;
    var IW;
    ! function(FF) {
      FF[FF.Small = 0] = "Small", FF[FF.Medium = 1] = "Medium", FF[FF.Large = 2] = "Large", FF[FF.ExtraLarge = 3] = "ExtraLarge"
    }(IW || (IW = {}));
    const fW = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      yS = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class sW {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(FF) {
        if (FF && this._enableMeshBlendTag && !this._scene.sC().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = FF
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(FF) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = FF, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(FF, WF) {
        FF === sW.POSITION_TEXTURE_TYPE ? (this._positionIndex = WF, this._enablePosition = !0) : FF === sW.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = WF, this._enableVelocity = !0) : FF === sW.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = WF, this._enableVelocityLinear = !0) : FF === sW.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = WF, this._enableReflectivity = !0) : FF === sW.DEPTH_TEXTURE_TYPE ? (this._depthIndex = WF, this._enableDepth = !0) : FF === sW.NORMAL_TEXTURE_TYPE ? (this._normalIndex = WF, this._enableNormal = !0) : FF === sW.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = WF, this._enableScreenspaceDepth = !0) : FF === sW.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = WF, this._enableIrradiance = !0) : FF === sW.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = WF, this._enableObjectId = !0) : FF === sW.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = WF, this._enableMeshBlendTag = !0)
      }
      _setAttachments(FF) {
        this._attachmentsFromPrePass = FF
      }
      _linkInternalTexture(FF) {
        this._multiRenderTarget.setInternalTexture(FF, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(FF) {
        this._multiRenderTarget.renderList = FF
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(FF) {
        switch (FF) {
          case sW.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case sW.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case sW.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case sW.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case sW.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case sW.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case sW.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case sW.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case sW.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case sW.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(FF) {
        this._enableDepth = FF, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(FF) {
        this._enableNormal = FF, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(FF) {
        this._enablePosition = FF, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(FF) {
        this._enableVelocity = FF, FF || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = FF
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(FF) {
        this._enableVelocityLinear = FF, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(FF) {
        this._enableReflectivity = FF, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(FF) {
        this._enableScreenspaceDepth = FF, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(FF) {
        this._enableIrradiance = FF, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(FF) {
        if (FF && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (FF && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (FF && !this._enableObjectId && !this._linkedWithPrePass) {
          const FF = this._scene.sC(),
            WF = Math.min(FF.getCaps().maxDrawBuffers ?? 1, 8),
            SF = this._assignRenderTargetIndices()[0] + 1;
          if (FF.getCaps().drawBuffersExtension && SF > WF) throw new Error(`GeometryBufferRenderer: ${SF} color attachments were requested, but this engine supports at most ${WF}`)
        }
        this._enableObjectId = FF, FF || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(FF) {
        if (this._enableMeshBlendTag !== FF) {
          if (FF) {
            const FF = this._scene.sC();
            if (! function(FF) {
                return "NATIVE" !== FF.shaderPlatformName && (FF.isWebGPU || 2 === FF.Im)
              }(FF)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !FF.isWebGPU && !FF.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const WF = Math.min(FF.getCaps().maxDrawBuffers ?? 1, 8),
                SF = this._assignRenderTargetIndices()[0] + 1;
              if (FF.getCaps().drawBuffersExtension && SF > WF) throw new Error(`GeometryBufferRenderer: ${SF} color attachments were requested, but this engine supports at most ${WF}`)
            }
          }
          this._enableMeshBlendTag = FF, FF || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get ju() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          CF = arguments.length > 3 ? arguments[3] : void 0;
        var AF;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new XF.i(0, 0, 0, 0), this._clearDepthColor = new XF.i(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = FF, this._ratioOrDimensions = WF, this._useUbo = FF.sC().supportsUniformBuffers, this._depthFormat = SF, this._textureTypesAndFormats = CF || {}, this._initShaderSourceAsync(), AF = sW, zS || (zS = !0, Object.defineProperty(IF.f.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(FF) {
            FF && FF.isSupported && (this._geometryBufferRenderer = FF)
          },
          enumerable: !0,
          configurable: !0
        }), IF.f.prototype.enableGeometryBufferRenderer = function() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            SF = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new AF(this, FF, WF, SF), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, IF.f.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, AF._SceneComponentInitialization = FF => {
          let WF = FF._getComponent(cS.d.NAME_GEOMETRYBUFFERRENDERER);
          WF || (WF = new GW(FF), FF.SPF(WF))
        }), sW._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.sC().isWebGPU && !sW.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([SF.e(307).then((() => SF(59524))), Promise.all([SF.e(306), SF.e(318)]).then((() => SF(59526)))])) : await Promise.all([SF.e(290).then((() => SF(59534))), SF.e(289).then((() => SF(59541)))]), this._shadersLoaded = !0
      }
      isReady(FF, WF) {
        if (!this._shadersLoaded) return !1;
        const SF = FF.XC();
        if (SF && SF.disableDepthWrite) return !1;
        if (function(FF) {
            return FF._isGaussianSplatting || "GaussianSplattingMesh" === (WF = FF.getClassName()) || "GaussianSplattingStream" === WF;
            var WF
          }(FF.getMesh())) return !1;
        const CF = [],
          AF = [yW.k.PositionKind],
          uF = FF.getMesh();
        uF.isVerticesDataPresent(yW.k.NormalKind) && (CF.push("#define HAS_NORMAL_ATTRIBUTE"), AF.push(yW.k.NormalKind));
        let hF = !1,
          bW = !1;
        if (SF) {
          let FF = !1;
          if (SF.needAlphaTestingForMesh(uF) && SF.getAlphaTestTexture() && (CF.push("#define ALPHATEST"), CF.push(`#define ALPHATEST_UV${SF.getAlphaTestTexture().coordinatesIndex+1}`), FF = !0), (SF.bumpTexture || SF.normalTexture || SF.geometryNormalTexture) && vW.e.BumpTextureEnabled) {
            const WF = SF.bumpTexture || SF.normalTexture || SF.geometryNormalTexture;
            CF.push("#define BUMP"), CF.push(`#define BUMP_UV${WF.coordinatesIndex+1}`), FF = !0
          }
          if (this._enableReflectivity) {
            let WF = !1;
            if ("PBRMetallicRoughnessMaterial" === SF.getClassName()) SF.metallicRoughnessTexture && (CF.push("#define ORMTEXTURE"), CF.push(`#define REFLECTIVITY_UV${SF.metallicRoughnessTexture.coordinatesIndex+1}`), CF.push("#define METALLICWORKFLOW"), FF = !0, WF = !0), null != SF.metallic && (CF.push("#define METALLIC"), CF.push("#define METALLICWORKFLOW"), WF = !0), null != SF.roughness && (CF.push("#define ROUGHNESS"), CF.push("#define METALLICWORKFLOW"), WF = !0), WF && (SF.baseTexture && (CF.push("#define ALBEDOTEXTURE"), CF.push(`#define ALBEDO_UV${SF.baseTexture.coordinatesIndex+1}`), SF.baseTexture.gammaSpace && CF.push("#define GAMMAALBEDO"), FF = !0), SF.baseColor && CF.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === SF.getClassName()) SF.specularGlossinessTexture ? (CF.push("#define SPECULARGLOSSINESSTEXTURE"), CF.push(`#define REFLECTIVITY_UV${SF.specularGlossinessTexture.coordinatesIndex+1}`), FF = !0, SF.specularGlossinessTexture.gammaSpace && CF.push("#define GAMMAREFLECTIVITYTEXTURE")) : SF.specularColor && CF.push("#define REFLECTIVITYCOLOR"), null != SF.glossiness && CF.push("#define GLOSSINESS");
            else if ("PBRMaterial" === SF.getClassName()) SF.metallicTexture && (CF.push("#define ORMTEXTURE"), CF.push(`#define REFLECTIVITY_UV${SF.metallicTexture.coordinatesIndex+1}`), CF.push("#define METALLICWORKFLOW"), FF = !0, WF = !0), null != SF.metallic && (CF.push("#define METALLIC"), CF.push("#define METALLICWORKFLOW"), WF = !0), null != SF.roughness && (CF.push("#define ROUGHNESS"), CF.push("#define METALLICWORKFLOW"), WF = !0), WF ? (SF.albedoTexture && (CF.push("#define ALBEDOTEXTURE"), CF.push(`#define ALBEDO_UV${SF.albedoTexture.coordinatesIndex+1}`), SF.albedoTexture.gammaSpace && CF.push("#define GAMMAALBEDO"), FF = !0), SF.albedoColor && CF.push("#define ALBEDOCOLOR")) : (SF.reflectivityTexture ? (CF.push("#define SPECULARGLOSSINESSTEXTURE"), CF.push(`#define REFLECTIVITY_UV${SF.reflectivityTexture.coordinatesIndex+1}`), SF.reflectivityTexture.gammaSpace && CF.push("#define GAMMAREFLECTIVITYTEXTURE"), FF = !0) : SF.reflectivityColor && CF.push("#define REFLECTIVITYCOLOR"), null != SF.microSurface && CF.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === SF.getClassName()) SF.specularTexture && (CF.push("#define REFLECTIVITYTEXTURE"), CF.push(`#define REFLECTIVITY_UV${SF.specularTexture.coordinatesIndex+1}`), SF.specularTexture.gammaSpace && CF.push("#define GAMMAREFLECTIVITYTEXTURE"), FF = !0), SF.specularColor && CF.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === SF.getClassName()) {
              const WF = SF;
              CF.push("#define METALLIC"), CF.push("#define ROUGHNESS"), WF._useRoughnessFromMetallicTextureGreen && WF.baseMetalnessTexture ? (CF.push("#define ORMTEXTURE"), CF.push(`#define REFLECTIVITY_UV${WF.baseMetalnessTexture.coordinatesIndex+1}`), FF = !0) : WF.baseMetalnessTexture ? (CF.push("#define METALLIC_TEXTURE"), CF.push(`#define METALLIC_UV${WF.baseMetalnessTexture.coordinatesIndex+1}`), FF = !0) : WF.specularRoughnessTexture && (CF.push("#define ROUGHNESS_TEXTURE"), CF.push(`#define ROUGHNESS_UV${WF.specularRoughnessTexture.coordinatesIndex+1}`), FF = !0), WF.baseColorTexture && (CF.push("#define ALBEDOTEXTURE"), CF.push(`#define ALBEDO_UV${WF.baseColorTexture.coordinatesIndex+1}`), WF.baseColorTexture.gammaSpace && CF.push("#define GAMMAALBEDO"), FF = !0), WF.baseColor && CF.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (CF.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === SF.getClassName())) {
            const WF = SF;
            WF.subsurfaceWeight > 0 && WF.subsurfaceWeightTexture && (CF.push("#define SUBSURFACE_WEIGHT"), CF.push(`#define SUBSURFACEWEIGHT_UV${WF.subsurfaceWeightTexture.coordinatesIndex+1}`), FF = !0), WF.transmissionWeight > 0 && WF.transmissionWeightTexture && (CF.push("#define TRANSMISSION_WEIGHT"), CF.push(`#define TRANSMISSIONWEIGHT_UV${WF.transmissionWeightTexture.coordinatesIndex+1}`), FF = !0)
          }
          FF && (CF.push("#define NEED_UV"), uF.isVerticesDataPresent(yW.k.UVKind) && (AF.push(yW.k.UVKind), CF.push("#define UV1"), hF = !0), uF.isVerticesDataPresent(yW.k.UV2Kind) && (AF.push(yW.k.UV2Kind), CF.push("#define UV2"), bW = !0))
        }
        if (this._enableDepth && (CF.push("#define DEPTH"), CF.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (CF.push("#define NORMAL"), CF.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (CF.push("#define POSITION"), CF.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (CF.push("#define VELOCITY"), CF.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(uF) && CF.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (CF.push("#define VELOCITY_LINEAR"), CF.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(uF) && CF.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (CF.push("#define REFLECTIVITY"), CF.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (CF.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), CF.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          CF.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), CF.push("#define IRRADIANCE");
          const FF = this._scene;
          if (FF.environmentTexture) {
            const WF = {};
            let AF = !1,
              uF = 0;
            "OpenPBRMaterial" !== SF.getClassName() && "StandardMaterial" !== SF.getClassName() && "PBRMetallicRoughnessMaterial" !== SF.getClassName() && "PBRSpecularGlossinessMaterial" !== SF.getClassName() && "PBRMaterial" !== SF.getClassName() || (AF = !!SF.realtimeFiltering, uF = SF.realtimeFilteringQuality || 0), (0, pF._)(FF, FF.environmentTexture, WF, AF, uF, !0);
            for (const FF in WF) WF[FF] && CF.push("#define " + FF);
            WF.USEIRRADIANCEMAP || CF.push("#define SPHERICAL_HARMONICS");
            const hF = FF.postProcessRenderPipelineManager.supportedPipelines.find((FF => "IBLShadowsRenderPipeline" === FF.getClassName()));
            if (hF) {
              const FF = hF;
              FF._getAccumulatedTexture() && (CF.push("#define IBL_SHADOW_TEXTURE"), FF.coloredShadows && CF.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (CF.push("#define OBJECT_ID"), CF.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (CF.push("#define MESH_BLEND_TAG"), CF.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && CF.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && CF.push("#define ENCODE_NORMAL"), uF.useBones && uF.computeBonesUsingShaders && uF.skeleton ? (AF.push(yW.k.MatricesIndicesKind), AF.push(yW.k.MatricesWeightsKind), uF.numBoneInfluencers > 4 && (AF.push(yW.k.MatricesIndicesExtraKind), AF.push(yW.k.MatricesWeightsExtraKind)), CF.push("#define NUM_BONE_INFLUENCERS " + uF.numBoneInfluencers), CF.push("#define BONETEXTURE " + uF.skeleton.isUsingTextureForMatrices), CF.push("#define BonesPerMesh " + (uF.skeleton.bones.length + 1))) : (CF.push("#define NUM_BONE_INFLUENCERS 0"), CF.push("#define BONETEXTURE false"), CF.push("#define BonesPerMesh 0"));
        const dF = uF.morphTargetManager ? (0, pF.S)(uF.morphTargetManager, CF, AF, uF, !0, !0, !1, hF, bW, !1) : 0;
        WF && (CF.push("#define INSTANCES"), (0, pF.tb)(AF, this._enableVelocity || this._enableVelocityLinear), FF.getRenderingMesh().hasThinInstances && CF.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? CF.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : CF.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, RW.o)(SF, this._scene, CF);
        const PF = this._scene.sC(),
          RF = FF._getDrawWrapper(void 0, !0),
          iW = RF.defines,
          eF = CF.join("\n");
        return iW !== eF && RF.setEffect(PF.createEffect("geometry", {
          attributes: AF,
          uniformsNames: yS,
          samplers: fW,
          defines: eF,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: dF
          },
          shaderLanguage: this.shaderLanguage
        }, PF), eF), RF.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(FF) {
        if (this._enableObjectId && 1 !== FF) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== FF) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = FF
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.sC().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.ju.sC()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.ju.sC().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const FF = [],
          WF = [];
        let SF = 0;
        return this._enableDepth && (this._depthIndex = SF, SF++, FF.push("gBuffer_Depth"), WF.push(this._textureTypesAndFormats[sW.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = SF, SF++, FF.push("gBuffer_Normal"), WF.push(this._textureTypesAndFormats[sW.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = SF, SF++, FF.push("gBuffer_Position"), WF.push(this._textureTypesAndFormats[sW.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = SF, SF++, FF.push("gBuffer_Velocity"), WF.push(this._textureTypesAndFormats[sW.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = SF, SF++, FF.push("gBuffer_VelocityLinear"), WF.push(this._textureTypesAndFormats[sW.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = SF, SF++, FF.push("gBuffer_Reflectivity"), WF.push(this._textureTypesAndFormats[sW.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = SF, SF++, FF.push("gBuffer_ScreenspaceDepth"), WF.push(this._textureTypesAndFormats[sW.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = SF, SF++, FF.push("gBuffer_Irradiance"), WF.push(this._textureTypesAndFormats[sW.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = SF, SF++, FF.push("gBuffer_ObjectId"), WF.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = SF, SF++, FF.push("gBuffer_MeshBlendTag"), WF.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [SF, FF, WF]
      }
      _createRenderTargets() {
        const FF = this._scene.sC(),
          [WF, SF, CF] = this._assignRenderTargetIndices(),
          AF = Math.min(FF.getCaps().maxDrawBuffers ?? 1, 8);
        if (FF.getCaps().drawBuffersExtension && WF > AF) throw new Error(`GeometryBufferRenderer: ${WF} color attachments were requested, but this engine supports at most ${AF}`);
        let hF = 0;
        FF._caps.textureFloat && FF._caps.textureFloatLinearFiltering ? hF = 1 : FF._caps.textureHalfFloat && FF._caps.textureHalfFloatLinearFiltering && (hF = 2);
        const bW = this._getRenderTargetDimensions(),
          dF = [],
          PF = [],
          RF = [];
        for (const uF of CF) uF ? (dF.push(uF.textureType), PF.push(uF.textureFormat), RF.push(uF.samplingMode ?? 2)) : (dF.push(hF), PF.push(5), RF.push(2));
        if (this._normalsAreUnsigned = 11 === dF[sW.NORMAL_TEXTURE_TYPE] || 13 === dF[sW.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new MW("gBuffer", bW, WF, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: dF,
            formats: PF,
            samplingModes: RF,
            depthTextureFormat: this._depthFormat
          }, SF.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = ZF.i.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = ZF.i.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const iW = [!0],
          eF = [!1],
          EF = [!0];
        for (let uF = 1; uF < WF; ++uF) iW.push(!0), EF.push(!1), eF.push(!0);
        const QF = FF.buildTextureLayout(iW),
          rW = FF.buildTextureLayout(eF),
          gW = FF.buildTextureLayout(EF);
        this._multiRenderTarget.onClearObservable.add((FF => {
          const WF = this.useSpecificClearForDepthTexture ? rW : QF;
          FF.clearAttachments(this._clearColor, WF, !0, !0, !0), this.useSpecificClearForDepthTexture && FF.clearAttachments(this._clearDepthColor, gW, !0, !1, !1), FF.bindAttachments(QF)
        })), this._resizeObserver = FF.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const tW = FF => {
          const WF = FF.getRenderingMesh(),
            SF = FF.getEffectiveMesh(),
            CF = this._scene,
            AF = CF.sC(),
            hF = FF.XC();
          if (!hF) return;
          if (SF._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[SF.uniqueId] && (this._previousTransformationMatrices[SF.uniqueId] = {
              uW: fF.b.Identity(),
              viewProjection: CF.getTransformMatrix()
            }, WF.skeleton)) {
            const FF = WF.skeleton.getTransformMatrices(WF);
            this._previousBonesTransformationMatrices[WF.uniqueId] = this._copyBonesTransformationMatrices(FF, new Float32Array(FF.length))
          }
          const bW = WF._getInstancesRenderList(FF._id, !!FF.getReplacementMesh());
          if (bW.mustReturn) return;
          const dF = AF.getCaps().instancedArrays && (null !== bW.visibleInstances[FF._id] || WF.hasThinInstances),
            PF = SF.getWorldMatrix();
          if (this.isReady(FF, dF)) {
            const RF = FF._getDrawWrapper();
            if (!RF) return;
            const iW = RF.effect;
            let eF;
            AF.enableEffect(RF), dF || WF._bind(FF, iW, hF.fillMode), this._useUbo ? ((0, pF.w)(iW, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (iW.setMatrix("viewProjection", CF.getTransformMatrix()), iW.setMatrix("view", CF.getViewMatrix()), this._scene.bindEyePosition(iW, "vEyePosition"));
            if (WF._instanceDataStorage.isFrozen || !hF.backFaceCulling && null === hF.sideOrientation) eF = WF._effectiveSideOrientation;
            else {
              const FF = SF._getWorldMatrixDeterminant();
              eF = hF._getEffectiveOrientation(WF), FF < 0 && (eF = eF === uF.c.ClockWiseSideOrientation ? uF.c.CounterClockWiseSideOrientation : uF.c.ClockWiseSideOrientation)
            }
            if (hF._preBind(RF, eF), hF.needAlphaTestingForMesh(SF)) {
              const FF = hF.getAlphaTestTexture();
              FF && (iW.setTexture("diffuseSampler", FF), iW.setMatrix("diffuseMatrix", FF.getTextureMatrix()), iW.setFloat("alphaCutOff", hF.alphaCutOff ?? .4))
            }
            if ((hF.bumpTexture || hF.normalTexture || hF.geometryNormalTexture) && CF.sC().getCaps().standardDerivatives && vW.e.BumpTextureEnabled) {
              const FF = hF.bumpTexture || hF.normalTexture || hF.geometryNormalTexture;
              iW.setFloat3("vBumpInfos", FF.coordinatesIndex, 1 / FF.level, hF.parallaxScaleBias), iW.setMatrix("bumpMatrix", FF.getTextureMatrix()), iW.setTexture("bumpSampler", FF), iW.setFloat2("vTangentSpaceParams", hF.invertNormalMapX ? -1 : 1, hF.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === hF.getClassName()) null !== hF.metallicRoughnessTexture && (iW.setTexture("reflectivitySampler", hF.metallicRoughnessTexture), iW.setMatrix("reflectivityMatrix", hF.metallicRoughnessTexture.getTextureMatrix())), null !== hF.metallic && iW.setFloat("metallic", hF.metallic), null !== hF.roughness && iW.setFloat("glossiness", 1 - hF.roughness), null !== hF.baseTexture && (iW.setTexture("albedoSampler", hF.baseTexture), iW.setMatrix("albedoMatrix", hF.baseTexture.getTextureMatrix())), null !== hF.baseColor && iW.setColor3("albedoColor", hF.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === hF.getClassName()) null !== hF.specularGlossinessTexture ? (iW.setTexture("reflectivitySampler", hF.specularGlossinessTexture), iW.setMatrix("reflectivityMatrix", hF.specularGlossinessTexture.getTextureMatrix())) : null !== hF.specularColor && iW.setColor3("reflectivityColor", hF.specularColor), null !== hF.glossiness && iW.setFloat("glossiness", hF.glossiness);
            else if ("PBRMaterial" === hF.getClassName()) null !== hF.metallicTexture && (iW.setTexture("reflectivitySampler", hF.metallicTexture), iW.setMatrix("reflectivityMatrix", hF.metallicTexture.getTextureMatrix())), null !== hF.metallic && iW.setFloat("metallic", hF.metallic), null !== hF.roughness && iW.setFloat("glossiness", 1 - hF.roughness), null !== hF.roughness || null !== hF.metallic || null !== hF.metallicTexture ? (null !== hF.albedoTexture && (iW.setTexture("albedoSampler", hF.albedoTexture), iW.setMatrix("albedoMatrix", hF.albedoTexture.getTextureMatrix())), null !== hF.albedoColor && iW.setColor3("albedoColor", hF.albedoColor)) : (null !== hF.reflectivityTexture ? (iW.setTexture("reflectivitySampler", hF.reflectivityTexture), iW.setMatrix("reflectivityMatrix", hF.reflectivityTexture.getTextureMatrix())) : null !== hF.reflectivityColor && iW.setColor3("reflectivityColor", hF.reflectivityColor), null !== hF.microSurface && iW.setFloat("glossiness", hF.microSurface));
            else if ("StandardMaterial" === hF.getClassName()) null !== hF.specularTexture && (iW.setTexture("reflectivitySampler", hF.specularTexture), iW.setMatrix("reflectivityMatrix", hF.specularTexture.getTextureMatrix())), null !== hF.specularColor && iW.setColor3("reflectivityColor", hF.specularColor);
            else if ("OpenPBRMaterial" === hF.getClassName()) {
              const FF = hF;
              FF._useRoughnessFromMetallicTextureGreen && FF.baseMetalnessTexture ? (iW.setTexture("reflectivitySampler", FF.baseMetalnessTexture), iW.setMatrix("reflectivityMatrix", FF.baseMetalnessTexture.getTextureMatrix())) : FF.baseMetalnessTexture ? (iW.setTexture("metallicSampler", FF.baseMetalnessTexture), iW.setMatrix("metallicMatrix", FF.baseMetalnessTexture.getTextureMatrix())) : FF.specularRoughnessTexture && (iW.setTexture("roughnessSampler", FF.specularRoughnessTexture), iW.setMatrix("roughnessMatrix", FF.specularRoughnessTexture.getTextureMatrix())), iW.setFloat("metallic", FF.baseMetalness), iW.setFloat("glossiness", 1 - FF.specularRoughness), null !== FF.baseColorTexture && (iW.setTexture("albedoSampler", FF.baseColorTexture), iW.setMatrix("albedoMatrix", FF.baseColorTexture.getTextureMatrix())), null !== FF.baseColor && iW.setColor3("albedoColor", FF.baseColor)
            }
            if (this._enableIrradiance && CF.environmentTexture) {
              const FF = CF.environmentTexture,
                WF = CF.postProcessRenderPipelineManager.supportedPipelines.find((FF => "IBLShadowsRenderPipeline" === FF.getClassName()));
              if (WF) {
                const FF = WF._getAccumulatedTexture();
                FF && (iW.setTexture("iblShadowSampler", FF), iW.setFloat2("shadowTextureSize", FF.getSize().width, FF.getSize().height))
              }
              if (iW.setMatrix("reflectionMatrix", FF.getReflectionTextureMatrix()), iW.setFloat2("vReflectionInfos", FF.level * CF.iblIntensity, 0), iW.setTexture("reflectionSampler", FF), FF.irradianceTexture && (iW.setTexture("irradianceSampler", FF.irradianceTexture), FF.irradianceTexture._dominantDirection && iW.setVector3("vReflectionDominantDirection", FF.irradianceTexture._dominantDirection)), FF.sphericalPolynomial) {
                const WF = FF.sphericalPolynomial;
                if (WF.preScaledHarmonics) {
                  const FF = WF.preScaledHarmonics;
                  iW.setVector3("vSphericalL00", FF.l00), iW.setVector3("vSphericalL1_1", FF.l1_1), iW.setVector3("vSphericalL10", FF.l10), iW.setVector3("vSphericalL11", FF.l11), iW.setVector3("vSphericalL2_2", FF.l2_2), iW.setVector3("vSphericalL2_1", FF.l2_1), iW.setVector3("vSphericalL20", FF.l20), iW.setVector3("vSphericalL21", FF.l21), iW.setVector3("vSphericalL22", FF.l22)
                } else iW.setFloat3("vSphericalX", WF.x.x, WF.x.y, WF.x.z), iW.setFloat3("vSphericalY", WF.y.x, WF.y.y, WF.y.z), iW.setFloat3("vSphericalZ", WF.z.x, WF.z.y, WF.z.z), iW.setFloat3("vSphericalXX_ZZ", WF.xx.x - WF.zz.x, WF.xx.y - WF.zz.y, WF.xx.z - WF.zz.z), iW.setFloat3("vSphericalYY_ZZ", WF.yy.x - WF.zz.x, WF.yy.y - WF.zz.y, WF.yy.z - WF.zz.z), iW.setFloat3("vSphericalZZ", WF.zz.x, WF.zz.y, WF.zz.z), iW.setFloat3("vSphericalXY", WF.xy.x, WF.xy.y, WF.xy.z), iW.setFloat3("vSphericalYZ", WF.yz.x, WF.yz.y, WF.yz.z), iW.setFloat3("vSphericalZX", WF.zx.x, WF.zx.y, WF.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === hF.getClassName()) {
                const FF = hF;
                iW.setFloat("vSubsurfaceWeight", FF.subsurfaceWeight), FF.subsurfaceWeightTexture && (iW.setTexture("subsurfaceWeightSampler", FF.subsurfaceWeightTexture), iW.setMatrix("subsurfaceWeightMatrix", FF.subsurfaceWeightTexture.getTextureMatrix())), iW.setFloat("vTransmissionWeight", FF.transmissionWeight), FF.transmissionWeightTexture && (iW.setTexture("transmissionWeightSampler", FF.transmissionWeightTexture), iW.setMatrix("transmissionWeightMatrix", FF.transmissionWeightTexture.getTextureMatrix())), iW.setFloat("vTransmissionScatterAnisotropy", FF.transmissionScatterAnisotropy), iW.setFloat("vSubsurfaceScatterAnisotropy", FF.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, RW.h)(iW, hF, this._scene), WF.useBones && WF.computeBonesUsingShaders && WF.skeleton) {
              const FF = WF.skeleton;
              if (FF.isUsingTextureForMatrices && iW.getUniformIndex("boneTextureInfo") > -1) {
                const SF = FF.getTransformMatrixTexture(WF);
                iW.setTexture("boneSampler", SF), iW.setFloat2("boneTextureInfo", FF._textureWidth, FF._textureHeight)
              } else iW.setMatrices("mBones", WF.skeleton.getTransformMatrices(WF));
              (this._enableVelocity || this._enableVelocityLinear) && iW.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[WF.uniqueId])
            }
            if ((0, pF.t)(WF, iW), WF.morphTargetManager && WF.morphTargetManager.isUsingTextureForTargets && WF.morphTargetManager._bind(iW), (this._enableVelocity || this._enableVelocityLinear) && (iW.setMatrix("previousWorld", this._previousTransformationMatrices[SF.uniqueId].uW), iW.setMatrix("previousViewProjection", this._previousTransformationMatrices[SF.uniqueId].viewProjection)), this._enableObjectId) {
              let FF = WF.uniqueId;
              if (this.objectIdProvider) FF = (0, EW.i)(WF, this.objectIdProvider);
              else if (FF > 16777215) throw new Error(`Invalid geometry object ID ${FF} for mesh "${WF.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              iW.setFloat("objectId", FF)
            }
            if (this._enableMeshBlendTag) {
              const FF = this.meshBlendTagProvider ? (0, EW.f)(WF, this.meshBlendTagProvider) : WF.meshBlendingTag;
              iW.setInt("meshBlendTag", FF)
            }
            dF && WF.hasThinInstances && iW.setMatrix("world", PF), WF._processRendering(SF, FF, iW, hF.fillMode, bW, dF, ((FF, WF) => {
              FF || iW.setMatrix("world", WF)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[SF.uniqueId].uW = PF.clone(), this._previousTransformationMatrices[SF.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), WF.skeleton && this._copyBonesTransformationMatrices(WF.skeleton.getTransformMatrices(WF), this._previousBonesTransformationMatrices[SF.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (WF, SF, CF) => {
          if ((CF || 0 === SF) && WF.Om)
            for (let AF = 0; AF < WF.Om.length; ++AF) {
              const SF = WF.Om[AF],
                CF = SF.XC(),
                uF = SF.getRenderingMesh();
              if (!CF) continue;
              const hF = uF._getInstancesRenderList(SF._id, !!SF.getReplacementMesh()),
                bW = FF.getCaps().instancedArrays && (null !== hF.visibleInstances[SF._id] || uF.hasThinInstances);
              if (!this.isReady(SF, bW)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (WF, SF, CF, AF) => {
          let uF;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.sC().bindAttachments(this._attachmentsFromPrePass)
          }
          if (AF.length) {
            for (FF.setColorWrite(!1), uF = 0; uF < AF.length; uF++) tW(AF.data[uF]);
            FF.setColorWrite(!0)
          }
          for (uF = 0; uF < WF.length; uF++) tW(WF.data[uF]);
          for (FF.setDepthWrite(!1), uF = 0; uF < SF.length; uF++) tW(SF.data[uF]);
          if (this.renderTransparentMeshes)
            for (uF = 0; uF < CF.length; uF++) tW(CF.data[uF]);
          FF.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const FF = this._scene.sC();
        return {
          width: Math.max(1, Math.floor(FF.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(FF.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(FF, WF) {
        for (let SF = 0; SF < FF.length; SF++) WF[SF] = FF[SF];
        return WF
      }
    }
    sW.ForceGLSL = !1, sW.DEPTH_TEXTURE_TYPE = 0, sW.NORMAL_TEXTURE_TYPE = 1, sW.POSITION_TEXTURE_TYPE = 2, sW.VELOCITY_TEXTURE_TYPE = 3, sW.REFLECTIVITY_TEXTURE_TYPE = 4, sW.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, sW.VELOCITY_LINEAR_TEXTURE_TYPE = 6, sW.IRRADIANCE_TEXTURE_TYPE = 7, sW.OBJECT_ID_TEXTURE_TYPE = 8, sW.MESH_BLEND_TAG_TEXTURE_TYPE = 9, sW._SceneComponentInitialization = FF => {
      throw (0, tS.l)("GeometryBufferRendererSceneComponent")
    };
    var nW = SF(35660);
    const HW = {
      effect: null,
      subMesh: null
    };

    function KW(FF) {
      if ("number" === typeof FF) return 1;
      if (FF instanceof fF.n) return 2;
      if (FF instanceof fF.r || FF instanceof XF.e) return 3;
      if (FF instanceof fF.v || FF instanceof XF.i) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class wW {
      populateVectorFromLinkedProperties(FF) {
        const WF = KW(FF);
        for (const SF in this.linkedProperties) {
          const FF = this.linkedProperties[SF],
            CF = FF.numComponents;
          if (WF < CF || FF.targetUniformComponentOffset > WF - CF) return void(1 == CF ? OF.b.Error(`Float property ${FF.name} has an offset that is too large.`) : OF.b.Error(`Vector${CF} property ${FF.name} won't fit in Vector${WF} or has an offset that is too large.`));
          "number" === typeof FF.value ? wW._tmpArray[FF.targetUniformComponentOffset] = FF.value : FF.value.toArray(wW._tmpArray, FF.targetUniformComponentOffset)
        }
        FF.udF(wW._tmpArray)
      }
      constructor(FF, WF) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = FF, this.numComponents = WF
      }
    }
    wW._tmpArray = [0, 0, 0, 0];
    class XW {
      constructor(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          uF = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = FF, this.targetUniformName = SF, this.defaultValue = WF, this.value = WF, this.targetUniformComponentNum = CF, this.targetUniformComponentOffset = AF, this.requiredDefine = uF
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : KW(this.defaultValue)
      }
    }
    class UW {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(FF, WF, SF) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = FF, this.samplerPrefix = WF, this.textureDefine = SF
      }
    }
    class BW extends((0, rS.b)((0, QW.c)(sF.e))) {}
    class jS extends(function(FF) {
      return class extends FF {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(BW)) {}
    class vS extends((0, UF.g)(jS)) {
      constructor(FF) {
        super(FF), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class JW extends((0, gS.d)(jW.e)) {}
    let pW = (() => {
        var FF, WF, CF, AF, hF, bW, dF, PF, RF, iW, eF, EF, QF, rW, gW, tW, TF, aW, kW, qW, VF, NF, DF, oF, YF, MF, cW, IF, sF, nF, HF, KF, UF, jW, lF, FW, WW, SW, CW, AW, uW, hW, bS, dW, PW, QW, rS, gS, tS, TW, aS, kS, qS, VW, LW, mS, OW, xS, ZW, oW, YW, MW, cS, GW, zS, IW, fW, yS, nW, KW, BW, jS, pW, lW, FS, WS, SS, CS, AS, uS, hS, bC, dS, PS, RS, iC, eS, ES, QS, rC, gC, tC, TS, aC, kC, qC, VS, NS, DS, LS, mC, OS, xC;
        let ZS, oS, YS, MS, cC, GS, zC, IS, fS, yC, sS, nS, HS, KS, wS, XS, US, BS, jC, vC, JS, pS, lS, FC, WC, SC, CC, AC, uC, hC, bA, dC, PC, RC, iA, eC, EC, QC, rA, gA, tA, TC, aA, kA, qA, VC, NC, DC, LC, mA, OC, xA, ZC, oC, YC, MC, cA, GC, zA, IC, fC, yA, sC, nC, HC, KC, wC, XC, UC, BC, jA, vA, JC, pC, lC, FA, WA, SA, CA, AA, uA, hA, bu, dA, PA, RA, iu, eA, EA, QA, ru, gu, tu, TA, au, ku, qu, VA, NA, DA, LA, mu, OA, xu, ZA, oA = JW,
          YA = [],
          MA = [],
          cu = [],
          GA = [],
          zu = [],
          IA = [],
          fA = [],
          yu = [],
          sA = [],
          nA = [],
          HA = [],
          KA = [],
          wA = [],
          XA = [],
          UA = [],
          BA = [],
          ju = [],
          vu = [],
          JA = [],
          pA = [],
          lA = [],
          Fu = [],
          Wu = [],
          Su = [],
          Cu = [],
          Au = [],
          uu = [],
          hu = [],
          bh = [],
          du = [],
          Pu = [],
          Ru = [],
          ih = [],
          eu = [],
          Eu = [],
          Qu = [],
          rh = [],
          gh = [],
          th = [],
          Tu = [],
          ah = [],
          kh = [],
          qh = [],
          Vu = [],
          Nu = [],
          Du = [],
          Lu = [],
          mh = [],
          Ou = [],
          xh = [],
          Zu = [],
          ou = [],
          Yu = [],
          Mu = [],
          ch = [],
          Gu = [],
          zh = [],
          Iu = [],
          fu = [],
          yh = [],
          su = [],
          nu = [],
          Hu = [],
          Ku = [],
          wu = [],
          Xu = [],
          Uu = [],
          Bu = [],
          jh = [],
          vh = [],
          Ju = [],
          pu = [],
          lu = [],
          Fh = [],
          Wh = [],
          Sh = [],
          Ch = [],
          Ah = [],
          uh = [],
          hh = [],
          bb = [],
          dh = [],
          Ph = [],
          Rh = [],
          ib = [],
          eh = [],
          Eh = [],
          Qh = [],
          rb = [],
          gb = [],
          tb = [],
          Th = [],
          ab = [],
          kb = [],
          qb = [],
          Vh = [],
          Nh = [],
          Dh = [],
          Lh = [],
          mb = [],
          Oh = [],
          xb = [],
          Zh = [],
          oh = [],
          Yh = [],
          Mh = [],
          cb = [],
          Gh = [],
          zb = [],
          Ih = [],
          fh = [],
          yb = [],
          sh = [],
          nh = [],
          Hh = [],
          Kh = [],
          wh = [],
          Xh = [],
          Uh = [],
          Bh = [],
          jb = [],
          vb = [],
          Jh = [],
          ph = [],
          lh = [],
          Fb = [],
          Wb = [],
          Sb = [],
          Cb = [],
          Ab = [],
          ub = [],
          hb = [],
          bd = [],
          db = [],
          Pb = [],
          Rb = [],
          eb = [],
          Eb = [],
          Qb = [],
          rd = [],
          gd = [],
          td = [],
          Tb = [],
          ad = [],
          kd = [],
          qd = [],
          Vb = [],
          Nb = [],
          Db = [],
          Lb = [],
          md = [],
          Ob = [],
          xd = [],
          Zb = [],
          ob = [],
          Yb = [],
          Mb = [],
          cd = [],
          Gb = [],
          zd = [],
          Ib = [],
          fb = [],
          yd = [],
          sb = [],
          nb = [],
          Hb = [],
          Kb = [],
          wb = [],
          Xb = [],
          Ub = [],
          Bb = [],
          jd = [],
          vd = [],
          Jb = [],
          pb = [],
          lb = [],
          Fd = [],
          Wd = [],
          Sd = [],
          Cd = [],
          Ad = [],
          ud = [],
          hd = [],
          bP = [],
          dd = [],
          Pd = [],
          Rd = [],
          iP = [],
          ed = [],
          Ed = [],
          Qd = [],
          rP = [],
          gP = [],
          tP = [],
          Td = [],
          aP = [],
          kP = [],
          qP = [],
          Vd = [],
          Nd = [],
          Dd = [],
          Ld = [],
          mP = [],
          Od = [],
          xP = [];
        return FF = class extends oA {
          get baseWeight() {
            return (0, LF.d)(this, WF, "f")
          }
          set baseWeight(FF) {
            (0, LF.h)(this, WF, FF, "f")
          }
          get baseWeightTexture() {
            return (0, LF.d)(this, CF, "f")
          }
          set baseWeightTexture(FF) {
            (0, LF.h)(this, CF, FF, "f")
          }
          get baseColor() {
            return (0, LF.d)(this, AF, "f")
          }
          set baseColor(FF) {
            (0, LF.h)(this, AF, FF, "f")
          }
          get baseColorTexture() {
            return (0, LF.d)(this, hF, "f")
          }
          set baseColorTexture(FF) {
            (0, LF.h)(this, hF, FF, "f")
          }
          get baseDiffuseRoughness() {
            return (0, LF.d)(this, bW, "f")
          }
          set baseDiffuseRoughness(FF) {
            (0, LF.h)(this, bW, FF, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, LF.d)(this, dF, "f")
          }
          set baseDiffuseRoughnessTexture(FF) {
            (0, LF.h)(this, dF, FF, "f")
          }
          get baseMetalness() {
            return (0, LF.d)(this, PF, "f")
          }
          set baseMetalness(FF) {
            (0, LF.h)(this, PF, FF, "f")
          }
          get baseMetalnessTexture() {
            return (0, LF.d)(this, RF, "f")
          }
          set baseMetalnessTexture(FF) {
            (0, LF.h)(this, RF, FF, "f")
          }
          get specularWeight() {
            return (0, LF.d)(this, iW, "f")
          }
          set specularWeight(FF) {
            (0, LF.h)(this, iW, FF, "f")
          }
          get specularWeightTexture() {
            return (0, LF.d)(this, eF, "f")
          }
          set specularWeightTexture(FF) {
            (0, LF.h)(this, eF, FF, "f")
          }
          get specularColor() {
            return (0, LF.d)(this, EF, "f")
          }
          set specularColor(FF) {
            (0, LF.h)(this, EF, FF, "f")
          }
          get specularColorTexture() {
            return (0, LF.d)(this, QF, "f")
          }
          set specularColorTexture(FF) {
            (0, LF.h)(this, QF, FF, "f")
          }
          get specularRoughness() {
            return (0, LF.d)(this, rW, "f")
          }
          set specularRoughness(FF) {
            (0, LF.h)(this, rW, FF, "f")
          }
          get specularRoughnessTexture() {
            return (0, LF.d)(this, gW, "f")
          }
          set specularRoughnessTexture(FF) {
            (0, LF.h)(this, gW, FF, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, LF.d)(this, tW, "f")
          }
          set specularRoughnessAnisotropy(FF) {
            (0, LF.h)(this, tW, FF, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, LF.d)(this, TF, "f")
          }
          set specularRoughnessAnisotropyTexture(FF) {
            (0, LF.h)(this, TF, FF, "f")
          }
          get specularIor() {
            return (0, LF.d)(this, aW, "f")
          }
          set specularIor(FF) {
            (0, LF.h)(this, aW, FF, "f")
          }
          get transmissionWeight() {
            return (0, LF.d)(this, kW, "f")
          }
          set transmissionWeight(FF) {
            (0, LF.h)(this, kW, FF, "f")
          }
          get transmissionWeightTexture() {
            return (0, LF.d)(this, qW, "f")
          }
          set transmissionWeightTexture(FF) {
            (0, LF.h)(this, qW, FF, "f")
          }
          get transmissionColor() {
            return (0, LF.d)(this, VF, "f")
          }
          set transmissionColor(FF) {
            (0, LF.h)(this, VF, FF, "f")
          }
          get transmissionColorTexture() {
            return (0, LF.d)(this, NF, "f")
          }
          set transmissionColorTexture(FF) {
            (0, LF.h)(this, NF, FF, "f")
          }
          get transmissionDepth() {
            return (0, LF.d)(this, DF, "f")
          }
          set transmissionDepth(FF) {
            (0, LF.h)(this, DF, FF, "f")
          }
          get transmissionDepthTexture() {
            return (0, LF.d)(this, oF, "f")
          }
          set transmissionDepthTexture(FF) {
            (0, LF.h)(this, oF, FF, "f")
          }
          get transmissionScatter() {
            return (0, LF.d)(this, YF, "f")
          }
          set transmissionScatter(FF) {
            (0, LF.h)(this, YF, FF, "f")
          }
          get transmissionScatterTexture() {
            return (0, LF.d)(this, MF, "f")
          }
          set transmissionScatterTexture(FF) {
            (0, LF.h)(this, MF, FF, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, LF.d)(this, cW, "f")
          }
          set transmissionScatterAnisotropy(FF) {
            (0, LF.h)(this, cW, FF, "f")
          }
          get transmissionDispersionScale() {
            return (0, LF.d)(this, IF, "f")
          }
          set transmissionDispersionScale(FF) {
            (0, LF.h)(this, IF, FF, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, LF.d)(this, sF, "f")
          }
          set transmissionDispersionScaleTexture(FF) {
            (0, LF.h)(this, sF, FF, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, LF.d)(this, nF, "f")
          }
          set transmissionDispersionAbbeNumber(FF) {
            (0, LF.h)(this, nF, FF, "f")
          }
          get subsurfaceWeight() {
            return (0, LF.d)(this, HF, "f")
          }
          set subsurfaceWeight(FF) {
            (0, LF.h)(this, HF, FF, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, LF.d)(this, KF, "f")
          }
          set subsurfaceWeightTexture(FF) {
            (0, LF.h)(this, KF, FF, "f")
          }
          get subsurfaceColor() {
            return (0, LF.d)(this, UF, "f")
          }
          set subsurfaceColor(FF) {
            (0, LF.h)(this, UF, FF, "f")
          }
          get subsurfaceColorTexture() {
            return (0, LF.d)(this, jW, "f")
          }
          set subsurfaceColorTexture(FF) {
            (0, LF.h)(this, jW, FF, "f")
          }
          get subsurfaceRadius() {
            return (0, LF.d)(this, lF, "f")
          }
          set subsurfaceRadius(FF) {
            (0, LF.h)(this, lF, FF, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, LF.d)(this, FW, "f")
          }
          set subsurfaceRadiusScale(FF) {
            (0, LF.h)(this, FW, FF, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, LF.d)(this, WW, "f")
          }
          set subsurfaceRadiusScaleTexture(FF) {
            (0, LF.h)(this, WW, FF, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, LF.d)(this, SW, "f")
          }
          set subsurfaceScatterAnisotropy(FF) {
            (0, LF.h)(this, SW, FF, "f")
          }
          get coatWeight() {
            return (0, LF.d)(this, CW, "f")
          }
          set coatWeight(FF) {
            (0, LF.h)(this, CW, FF, "f")
          }
          get coatWeightTexture() {
            return (0, LF.d)(this, AW, "f")
          }
          set coatWeightTexture(FF) {
            (0, LF.h)(this, AW, FF, "f")
          }
          get coatColor() {
            return (0, LF.d)(this, uW, "f")
          }
          set coatColor(FF) {
            (0, LF.h)(this, uW, FF, "f")
          }
          get coatColorTexture() {
            return (0, LF.d)(this, hW, "f")
          }
          set coatColorTexture(FF) {
            (0, LF.h)(this, hW, FF, "f")
          }
          get coatRoughness() {
            return (0, LF.d)(this, bS, "f")
          }
          set coatRoughness(FF) {
            (0, LF.h)(this, bS, FF, "f")
          }
          get coatRoughnessTexture() {
            return (0, LF.d)(this, dW, "f")
          }
          set coatRoughnessTexture(FF) {
            (0, LF.h)(this, dW, FF, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, LF.d)(this, PW, "f")
          }
          set coatRoughnessAnisotropy(FF) {
            (0, LF.h)(this, PW, FF, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, LF.d)(this, QW, "f")
          }
          set coatRoughnessAnisotropyTexture(FF) {
            (0, LF.h)(this, QW, FF, "f")
          }
          get coatIor() {
            return (0, LF.d)(this, rS, "f")
          }
          set coatIor(FF) {
            (0, LF.h)(this, rS, FF, "f")
          }
          get coatDarkening() {
            return (0, LF.d)(this, gS, "f")
          }
          set coatDarkening(FF) {
            (0, LF.h)(this, gS, FF, "f")
          }
          get coatDarkeningTexture() {
            return (0, LF.d)(this, tS, "f")
          }
          set coatDarkeningTexture(FF) {
            (0, LF.h)(this, tS, FF, "f")
          }
          get fuzzWeight() {
            return (0, LF.d)(this, TW, "f")
          }
          set fuzzWeight(FF) {
            (0, LF.h)(this, TW, FF, "f")
          }
          get fuzzWeightTexture() {
            return (0, LF.d)(this, aS, "f")
          }
          set fuzzWeightTexture(FF) {
            (0, LF.h)(this, aS, FF, "f")
          }
          get fuzzColor() {
            return (0, LF.d)(this, kS, "f")
          }
          set fuzzColor(FF) {
            (0, LF.h)(this, kS, FF, "f")
          }
          get fuzzColorTexture() {
            return (0, LF.d)(this, qS, "f")
          }
          set fuzzColorTexture(FF) {
            (0, LF.h)(this, qS, FF, "f")
          }
          get fuzzRoughness() {
            return (0, LF.d)(this, VW, "f")
          }
          set fuzzRoughness(FF) {
            (0, LF.h)(this, VW, FF, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, LF.d)(this, LW, "f")
          }
          set fuzzRoughnessTexture(FF) {
            (0, LF.h)(this, LW, FF, "f")
          }
          get geometryThinWalled() {
            return (0, LF.d)(this, mS, "f")
          }
          set geometryThinWalled(FF) {
            (0, LF.h)(this, mS, FF, "f")
          }
          get geometryNormalTexture() {
            return (0, LF.d)(this, OW, "f")
          }
          set geometryNormalTexture(FF) {
            (0, LF.h)(this, OW, FF, "f")
          }
          get geometryTangent() {
            return (0, LF.d)(this, xS, "f")
          }
          set geometryTangent(FF) {
            (0, LF.h)(this, xS, FF, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(FF) {
            this.geometryTangent = new fF.n(Math.cos(FF), Math.sin(FF))
          }
          get geometryTangentTexture() {
            return (0, LF.d)(this, ZW, "f")
          }
          set geometryTangentTexture(FF) {
            (0, LF.h)(this, ZW, FF, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, LF.d)(this, oW, "f")
          }
          set geometryCoatNormalTexture(FF) {
            (0, LF.h)(this, oW, FF, "f")
          }
          get geometryCoatTangent() {
            return (0, LF.d)(this, YW, "f")
          }
          set geometryCoatTangent(FF) {
            (0, LF.h)(this, YW, FF, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(FF) {
            this.geometryCoatTangent = new fF.n(Math.cos(FF), Math.sin(FF))
          }
          get geometryCoatTangentTexture() {
            return (0, LF.d)(this, MW, "f")
          }
          set geometryCoatTangentTexture(FF) {
            (0, LF.h)(this, MW, FF, "f")
          }
          get geometryOpacity() {
            return (0, LF.d)(this, cS, "f")
          }
          set geometryOpacity(FF) {
            (0, LF.h)(this, cS, FF, "f")
          }
          get geometryOpacityTexture() {
            return (0, LF.d)(this, GW, "f")
          }
          set geometryOpacityTexture(FF) {
            (0, LF.h)(this, GW, FF, "f")
          }
          get geometryThickness() {
            return (0, LF.d)(this, zS, "f")
          }
          set geometryThickness(FF) {
            (0, LF.h)(this, zS, FF, "f")
          }
          get geometryThicknessTexture() {
            return (0, LF.d)(this, IW, "f")
          }
          set geometryThicknessTexture(FF) {
            (0, LF.h)(this, IW, FF, "f")
          }
          get emissionLuminance() {
            return (0, LF.d)(this, fW, "f")
          }
          set emissionLuminance(FF) {
            (0, LF.h)(this, fW, FF, "f")
          }
          get emissionColor() {
            return (0, LF.d)(this, yS, "f")
          }
          set emissionColor(FF) {
            (0, LF.h)(this, yS, FF, "f")
          }
          get emissionColorTexture() {
            return (0, LF.d)(this, nW, "f")
          }
          set emissionColorTexture(FF) {
            (0, LF.h)(this, nW, FF, "f")
          }
          get thinFilmWeight() {
            return (0, LF.d)(this, KW, "f")
          }
          set thinFilmWeight(FF) {
            (0, LF.h)(this, KW, FF, "f")
          }
          get thinFilmWeightTexture() {
            return (0, LF.d)(this, BW, "f")
          }
          set thinFilmWeightTexture(FF) {
            (0, LF.h)(this, BW, FF, "f")
          }
          get thinFilmThickness() {
            return (0, LF.d)(this, jS, "f")
          }
          set thinFilmThickness(FF) {
            (0, LF.h)(this, jS, FF, "f")
          }
          get thinFilmThicknessMin() {
            return (0, LF.d)(this, pW, "f")
          }
          set thinFilmThicknessMin(FF) {
            (0, LF.h)(this, pW, FF, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, LF.d)(this, lW, "f")
          }
          set thinFilmThicknessTexture(FF) {
            (0, LF.h)(this, lW, FF, "f")
          }
          get thinFilmIor() {
            return (0, LF.d)(this, FS, "f")
          }
          set thinFilmIor(FF) {
            (0, LF.h)(this, FS, FF, "f")
          }
          get ambientOcclusionTexture() {
            return (0, LF.d)(this, WS, "f")
          }
          set ambientOcclusionTexture(FF) {
            (0, LF.h)(this, WS, FF, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(FF) {
            this._sssQuality !== FF && (this._sssQuality = FF, this.XbF(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(FF) {
            this._sssIrradianceTexture !== FF && (this._sssIrradianceTexture = FF, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(FF) {
            this._sssDepthTexture !== FF && (this._sssDepthTexture = FF, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, LF.d)(this, SS, "f")
          }
          set directIntensity(FF) {
            (0, LF.h)(this, SS, FF, "f")
          }
          get environmentIntensity() {
            return (0, LF.d)(this, CS, "f")
          }
          set environmentIntensity(FF) {
            (0, LF.h)(this, CS, FF, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, LF.d)(this, AS, "f")
          }
          set useSpecularWeightFromTextureAlpha(FF) {
            (0, LF.h)(this, AS, FF, "f")
          }
          get forceAlphaTest() {
            return (0, LF.d)(this, uS, "f")
          }
          set forceAlphaTest(FF) {
            (0, LF.h)(this, uS, FF, "f")
          }
          get alphaCutOff() {
            return (0, LF.d)(this, hS, "f")
          }
          set alphaCutOff(FF) {
            (0, LF.h)(this, hS, FF, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, LF.d)(this, bC, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(FF) {
            (0, LF.h)(this, bC, FF, "f")
          }
          get useAmbientInGrayScale() {
            return (0, LF.d)(this, dS, "f")
          }
          set useAmbientInGrayScale(FF) {
            (0, LF.h)(this, dS, FF, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(XF.e.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === uF.c.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(FF) {
            FF !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = FF ? uF.c.LIGHTFALLOFF_PHYSICAL : uF.c.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === uF.c.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(FF) {
            FF !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = FF ? uF.c.LIGHTFALLOFF_GLTF : uF.c.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, LF.d)(this, PS, "f")
          }
          set useObjectSpaceNormalMap(FF) {
            (0, LF.h)(this, PS, FF, "f")
          }
          get useParallax() {
            return (0, LF.d)(this, RS, "f")
          }
          set useParallax(FF) {
            (0, LF.h)(this, RS, FF, "f")
          }
          get useParallaxOcclusion() {
            return (0, LF.d)(this, iC, "f")
          }
          set useParallaxOcclusion(FF) {
            (0, LF.h)(this, iC, FF, "f")
          }
          get parallaxScaleBias() {
            return (0, LF.d)(this, eS, "f")
          }
          set parallaxScaleBias(FF) {
            (0, LF.h)(this, eS, FF, "f")
          }
          get disableLighting() {
            return (0, LF.d)(this, ES, "f")
          }
          set disableLighting(FF) {
            (0, LF.h)(this, ES, FF, "f")
          }
          get forceIrradianceInFragment() {
            return (0, LF.d)(this, QS, "f")
          }
          set forceIrradianceInFragment(FF) {
            (0, LF.h)(this, QS, FF, "f")
          }
          get maxSimultaneousLights() {
            return (0, LF.d)(this, rC, "f")
          }
          set maxSimultaneousLights(FF) {
            (0, LF.h)(this, rC, FF, "f")
          }
          get invertNormalMapX() {
            return (0, LF.d)(this, gC, "f")
          }
          set invertNormalMapX(FF) {
            (0, LF.h)(this, gC, FF, "f")
          }
          get invertNormalMapY() {
            return (0, LF.d)(this, tC, "f")
          }
          set invertNormalMapY(FF) {
            (0, LF.h)(this, tC, FF, "f")
          }
          get twoSidedLighting() {
            return (0, LF.d)(this, TS, "f")
          }
          set twoSidedLighting(FF) {
            (0, LF.h)(this, TS, FF, "f")
          }
          get useAlphaFresnel() {
            return (0, LF.d)(this, aC, "f")
          }
          set useAlphaFresnel(FF) {
            (0, LF.h)(this, aC, FF, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, LF.d)(this, kC, "f")
          }
          set useLinearAlphaFresnel(FF) {
            (0, LF.h)(this, kC, FF, "f")
          }
          get environmentBRDFTexture() {
            return (0, LF.d)(this, qC, "f")
          }
          set environmentBRDFTexture(FF) {
            (0, LF.h)(this, qC, FF, "f")
          }
          get forceNormalForward() {
            return (0, LF.d)(this, VS, "f")
          }
          set forceNormalForward(FF) {
            (0, LF.h)(this, VS, FF, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, LF.d)(this, NS, "f")
          }
          set enableSpecularAntiAliasing(FF) {
            (0, LF.h)(this, NS, FF, "f")
          }
          get useHorizonOcclusion() {
            return (0, LF.d)(this, DS, "f")
          }
          set useHorizonOcclusion(FF) {
            (0, LF.h)(this, DS, FF, "f")
          }
          get useRadianceOcclusion() {
            return (0, LF.d)(this, LS, "f")
          }
          set useRadianceOcclusion(FF) {
            (0, LF.h)(this, LS, FF, "f")
          }
          get unlit() {
            return (0, LF.d)(this, mC, "f")
          }
          set unlit(FF) {
            (0, LF.h)(this, mC, FF, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, LF.d)(this, OS, "f")
          }
          set applyDecalMapAfterDetailMap(FF) {
            (0, LF.h)(this, OS, FF, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(FF) {
            this._backgroundRefractionTexture = FF, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(FF) {
            this._refractionHighQualityBlur !== FF && (this._refractionHighQualityBlur = FF, this.XbF(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(FF) {
            this._realTimeFiltering = FF, this.XbF(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(FF) {
            this._realTimeFilteringQuality = FF, this.XbF(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(FF) {
            this._fuzzSampleNumber = FF, this.XbF(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, LF.d)(this, xC, "f")
          }
          set debugMode(FF) {
            (0, LF.h)(this, xC, FF, "f")
          }
          constructor(SF, mW) {
            super(SF, mW, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || FF.ForceGLSL), WF.set(this, ((0, LF.k)(this, YA), (0, LF.k)(this, MA, void 0))), this._baseWeight = ((0, LF.k)(this, cu), new XW("base_weight", 1, "vBaseWeight", 1)), CF.set(this, (0, LF.k)(this, GA, void 0)), this._baseWeightTexture = ((0, LF.k)(this, zu), new UW("base_weight", "baseWeight", "BASE_WEIGHT")), AF.set(this, (0, LF.k)(this, IA, void 0)), this._baseColor = ((0, LF.k)(this, fA), new XW("base_color", XF.e.White(), "vBaseColor", 4)), hF.set(this, (0, LF.k)(this, yu, void 0)), this._baseColorTexture = ((0, LF.k)(this, sA), new UW("base_color", "baseColor", "BASE_COLOR")), bW.set(this, (0, LF.k)(this, nA, void 0)), this._baseDiffuseRoughness = ((0, LF.k)(this, HA), new XW("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), dF.set(this, (0, LF.k)(this, KA, void 0)), this._baseDiffuseRoughnessTexture = ((0, LF.k)(this, wA), new UW("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), PF.set(this, (0, LF.k)(this, XA, void 0)), this._baseMetalness = ((0, LF.k)(this, UA), new XW("base_metalness", 0, "vReflectanceInfo", 4, 0)), RF.set(this, (0, LF.k)(this, BA, void 0)), this._baseMetalnessTexture = ((0, LF.k)(this, ju), new UW("base_metalness", "baseMetalness", "BASE_METALNESS")), iW.set(this, (0, LF.k)(this, vu, void 0)), this._specularWeight = ((0, LF.k)(this, JA), new XW("specular_weight", 1, "vReflectanceInfo", 4, 3)), eF.set(this, (0, LF.k)(this, pA, void 0)), this._specularWeightTexture = ((0, LF.k)(this, lA), new UW("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), EF.set(this, (0, LF.k)(this, Fu, void 0)), this._specularColor = ((0, LF.k)(this, Wu), new XW("specular_color", XF.e.White(), "vSpecularColor", 4)), QF.set(this, (0, LF.k)(this, Su, void 0)), this._specularColorTexture = ((0, LF.k)(this, Cu), new UW("specular_color", "specularColor", "SPECULAR_COLOR")), rW.set(this, (0, LF.k)(this, Au, void 0)), this._specularRoughness = ((0, LF.k)(this, uu), new XW("specular_roughness", .3, "vReflectanceInfo", 4, 1)), gW.set(this, (0, LF.k)(this, hu, void 0)), this._specularRoughnessTexture = ((0, LF.k)(this, bh), new UW("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), tW.set(this, (0, LF.k)(this, du, void 0)), this._specularRoughnessAnisotropy = ((0, LF.k)(this, Pu), new XW("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), TF.set(this, (0, LF.k)(this, Ru, void 0)), this._specularRoughnessAnisotropyTexture = ((0, LF.k)(this, ih), new UW("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), aW.set(this, (0, LF.k)(this, eu, void 0)), this._specularIor = ((0, LF.k)(this, Eu), new XW("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), kW.set(this, (0, LF.k)(this, Qu, void 0)), this._transmissionWeight = ((0, LF.k)(this, rh), new XW("transmission_weight", 0, "vTransmissionWeight", 1)), qW.set(this, (0, LF.k)(this, gh, void 0)), this._transmissionWeightTexture = ((0, LF.k)(this, th), new UW("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), VF.set(this, (0, LF.k)(this, Tu, void 0)), this._transmissionColor = ((0, LF.k)(this, ah), new XW("transmission_color", XF.e.White(), "vTransmissionColor", 3, 0)), NF.set(this, (0, LF.k)(this, kh, void 0)), this._transmissionColorTexture = ((0, LF.k)(this, qh), new UW("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), DF.set(this, (0, LF.k)(this, Vu, void 0)), this._transmissionDepth = ((0, LF.k)(this, Nu), new XW("transmission_depth", 0, "vTransmissionDepth", 1, 0)), oF.set(this, (0, LF.k)(this, Du, void 0)), this._transmissionDepthTexture = ((0, LF.k)(this, Lu), new UW("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), YF.set(this, (0, LF.k)(this, mh, void 0)), this._transmissionScatter = ((0, LF.k)(this, Ou), new XW("transmission_scatter", XF.e.Black(), "vTransmissionScatter", 3, 0)), MF.set(this, (0, LF.k)(this, xh, void 0)), this._transmissionScatterTexture = ((0, LF.k)(this, Zu), new UW("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), cW.set(this, (0, LF.k)(this, ou, void 0)), this._transmissionScatterAnisotropy = ((0, LF.k)(this, Yu), new XW("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), IF.set(this, (0, LF.k)(this, Mu, void 0)), this._transmissionDispersionScale = ((0, LF.k)(this, ch), new XW("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), sF.set(this, (0, LF.k)(this, Gu, void 0)), this._transmissionDispersionScaleTexture = ((0, LF.k)(this, zh), new UW("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), nF.set(this, (0, LF.k)(this, Iu, void 0)), this._transmissionDispersionAbbeNumber = ((0, LF.k)(this, fu), new XW("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), HF.set(this, (0, LF.k)(this, yh, void 0)), this._subsurfaceWeight = ((0, LF.k)(this, su), new XW("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), KF.set(this, (0, LF.k)(this, nu, void 0)), this._subsurfaceWeightTexture = ((0, LF.k)(this, Hu), new UW("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), UF.set(this, (0, LF.k)(this, Ku, void 0)), this._subsurfaceColor = ((0, LF.k)(this, wu), new XW("subsurface_color", new XF.e(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), jW.set(this, (0, LF.k)(this, Xu, void 0)), this._subsurfaceColorTexture = ((0, LF.k)(this, Uu), new UW("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), lF.set(this, (0, LF.k)(this, Bu, void 0)), this._subsurfaceRadius = ((0, LF.k)(this, jh), new XW("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), FW.set(this, (0, LF.k)(this, vh, void 0)), this._subsurfaceRadiusScale = ((0, LF.k)(this, Ju), new XW("subsurface_radius_scale", new XF.e(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), WW.set(this, (0, LF.k)(this, pu, void 0)), this._subsurfaceRadiusScaleTexture = ((0, LF.k)(this, lu), new UW("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), SW.set(this, (0, LF.k)(this, Fh, void 0)), this._subsurfaceScatterAnisotropy = ((0, LF.k)(this, Wh), new XW("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), CW.set(this, (0, LF.k)(this, Sh, void 0)), this._coatWeight = ((0, LF.k)(this, Ch), new XW("coat_weight", 0, "vCoatWeight", 1, 0)), AW.set(this, (0, LF.k)(this, Ah, void 0)), this._coatWeightTexture = ((0, LF.k)(this, uh), new UW("coat_weight", "coatWeight", "COAT_WEIGHT")), uW.set(this, (0, LF.k)(this, hh, void 0)), this._coatColor = ((0, LF.k)(this, bb), new XW("coat_color", XF.e.White(), "vCoatColor", 3, 0)), hW.set(this, (0, LF.k)(this, dh, void 0)), this._coatColorTexture = ((0, LF.k)(this, Ph), new UW("coat_color", "coatColor", "COAT_COLOR")), bS.set(this, (0, LF.k)(this, Rh, void 0)), this._coatRoughness = ((0, LF.k)(this, ib), new XW("coat_roughness", 0, "vCoatRoughness", 1, 0)), dW.set(this, (0, LF.k)(this, eh, void 0)), this._coatRoughnessTexture = ((0, LF.k)(this, Eh), new UW("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), PW.set(this, (0, LF.k)(this, Qh, void 0)), this._coatRoughnessAnisotropy = ((0, LF.k)(this, rb), new XW("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), QW.set(this, (0, LF.k)(this, gb, void 0)), this._coatRoughnessAnisotropyTexture = ((0, LF.k)(this, tb), new UW("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), rS.set(this, (0, LF.k)(this, Th, void 0)), this._coatIor = ((0, LF.k)(this, ab), new XW("coat_ior", 1.5, "vCoatIor", 1, 0)), gS.set(this, (0, LF.k)(this, kb, void 0)), this._coatDarkening = ((0, LF.k)(this, qb), new XW("coat_darkening", 1, "vCoatDarkening", 1, 0)), tS.set(this, (0, LF.k)(this, Vh, void 0)), this._coatDarkeningTexture = ((0, LF.k)(this, Nh), new UW("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, TW.set(this, (0, LF.k)(this, Dh, void 0)), this._fuzzWeight = ((0, LF.k)(this, Lh), new XW("fuzz_weight", 0, "vFuzzWeight", 1, 0)), aS.set(this, (0, LF.k)(this, mb, void 0)), this._fuzzWeightTexture = ((0, LF.k)(this, Oh), new UW("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), kS.set(this, (0, LF.k)(this, xb, void 0)), this._fuzzColor = ((0, LF.k)(this, Zh), new XW("fuzz_color", XF.e.White(), "vFuzzColor", 3, 0)), qS.set(this, (0, LF.k)(this, oh, void 0)), this._fuzzColorTexture = ((0, LF.k)(this, Yh), new UW("fuzz_color", "fuzzColor", "FUZZ_COLOR")), VW.set(this, (0, LF.k)(this, Mh, void 0)), this._fuzzRoughness = ((0, LF.k)(this, cb), new XW("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), LW.set(this, (0, LF.k)(this, Gh, void 0)), this._fuzzRoughnessTexture = ((0, LF.k)(this, zb), new UW("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), mS.set(this, (0, LF.k)(this, Ih, void 0)), this._geometryThinWalled = ((0, LF.k)(this, fh), new XW("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), OW.set(this, (0, LF.k)(this, yb, void 0)), this._geometryNormalTexture = ((0, LF.k)(this, sh), new UW("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), xS.set(this, (0, LF.k)(this, nh, void 0)), this._geometryTangent = ((0, LF.k)(this, Hh), new XW("geometry_tangent", new fF.n(1, 0), "vSpecularAnisotropy", 3, 0)), ZW.set(this, (0, LF.k)(this, Kh, void 0)), this._geometryTangentTexture = ((0, LF.k)(this, wh), new UW("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), oW.set(this, (0, LF.k)(this, Xh, void 0)), this._geometryCoatNormalTexture = ((0, LF.k)(this, Uh), new UW("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), YW.set(this, (0, LF.k)(this, Bh, void 0)), this._geometryCoatTangent = ((0, LF.k)(this, jb), new XW("geometry_coat_tangent", new fF.n(1, 0), "vGeometryCoatTangent", 2, 0)), MW.set(this, (0, LF.k)(this, vb, void 0)), this._geometryCoatTangentTexture = ((0, LF.k)(this, Jh), new UW("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), cS.set(this, (0, LF.k)(this, ph, void 0)), this._geometryOpacity = ((0, LF.k)(this, lh), new XW("geometry_opacity", 1, "vBaseColor", 4, 3)), GW.set(this, (0, LF.k)(this, Fb, void 0)), this._geometryOpacityTexture = ((0, LF.k)(this, Wb), new UW("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), zS.set(this, (0, LF.k)(this, Sb, void 0)), this._geometryThickness = ((0, LF.k)(this, Cb), new XW("geometry_thickness", 0, "vGeometryThickness", 1, 0)), IW.set(this, (0, LF.k)(this, Ab, void 0)), this._geometryThicknessTexture = ((0, LF.k)(this, ub), new UW("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), fW.set(this, (0, LF.k)(this, hb, void 0)), this._emissionLuminance = ((0, LF.k)(this, bd), new XW("emission_luminance", 1, "vLightingIntensity", 4, 1)), yS.set(this, (0, LF.k)(this, db, void 0)), this._emissionColor = ((0, LF.k)(this, Pb), new XW("emission_color", XF.e.Black(), "vEmissionColor", 3)), nW.set(this, (0, LF.k)(this, Rb, void 0)), this._emissionColorTexture = ((0, LF.k)(this, eb), new UW("emission_color", "emissionColor", "EMISSION_COLOR")), KW.set(this, (0, LF.k)(this, Eb, void 0)), this._thinFilmWeight = ((0, LF.k)(this, Qb), new XW("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), BW.set(this, (0, LF.k)(this, rd, void 0)), this._thinFilmWeightTexture = ((0, LF.k)(this, gd), new UW("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), jS.set(this, (0, LF.k)(this, td, void 0)), this._thinFilmThickness = ((0, LF.k)(this, Tb), new XW("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), pW.set(this, (0, LF.k)(this, ad, void 0)), this._thinFilmThicknessMin = ((0, LF.k)(this, kd), new XW("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), lW.set(this, (0, LF.k)(this, qd, void 0)), this._thinFilmThicknessTexture = ((0, LF.k)(this, Vb), new UW("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), FS.set(this, (0, LF.k)(this, Nb, void 0)), this._thinFilmIor = ((0, LF.k)(this, Db), new XW("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), WS.set(this, (0, LF.k)(this, Lb, void 0)), this._ambientOcclusionTexture = ((0, LF.k)(this, md), new UW("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = FF.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, SS.set(this, (0, LF.k)(this, Ob, 1)), CS.set(this, ((0, LF.k)(this, xd), (0, LF.k)(this, Zb, 1))), AS.set(this, ((0, LF.k)(this, ob), (0, LF.k)(this, Yb, !1))), uS.set(this, ((0, LF.k)(this, Mb), (0, LF.k)(this, cd, !1))), hS.set(this, ((0, LF.k)(this, Gb), (0, LF.k)(this, zd, .4))), bC.set(this, ((0, LF.k)(this, Ib), (0, LF.k)(this, fb, !1))), dS.set(this, ((0, LF.k)(this, yd), (0, LF.k)(this, sb, !1))), PS.set(this, ((0, LF.k)(this, nb), (0, LF.k)(this, Hb, !1))), RS.set(this, ((0, LF.k)(this, Kb), (0, LF.k)(this, wb, !1))), iC.set(this, ((0, LF.k)(this, Xb), (0, LF.k)(this, Ub, !1))), eS.set(this, ((0, LF.k)(this, Bb), (0, LF.k)(this, jd, .05))), ES.set(this, ((0, LF.k)(this, vd), (0, LF.k)(this, Jb, !1))), QS.set(this, ((0, LF.k)(this, pb), (0, LF.k)(this, lb, !1))), rC.set(this, ((0, LF.k)(this, Fd), (0, LF.k)(this, Wd, 4))), gC.set(this, ((0, LF.k)(this, Sd), (0, LF.k)(this, Cd, !1))), tC.set(this, ((0, LF.k)(this, Ad), (0, LF.k)(this, ud, !1))), TS.set(this, ((0, LF.k)(this, hd), (0, LF.k)(this, bP, !1))), aC.set(this, ((0, LF.k)(this, dd), (0, LF.k)(this, Pd, !1))), kC.set(this, ((0, LF.k)(this, Rd), (0, LF.k)(this, iP, !1))), qC.set(this, ((0, LF.k)(this, ed), (0, LF.k)(this, Ed, null))), VS.set(this, ((0, LF.k)(this, Qd), (0, LF.k)(this, rP, !1))), NS.set(this, ((0, LF.k)(this, gP), (0, LF.k)(this, tP, !1))), DS.set(this, ((0, LF.k)(this, Td), (0, LF.k)(this, aP, !0))), LS.set(this, ((0, LF.k)(this, kP), (0, LF.k)(this, qP, !0))), mC.set(this, ((0, LF.k)(this, Vd), (0, LF.k)(this, Nd, !1))), OS.set(this, ((0, LF.k)(this, Dd), (0, LF.k)(this, Ld, !1))), this._lightingInfos = ((0, LF.k)(this, mP), new fF.v(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = uF.c.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new xW.f(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, xC.set(this, (0, LF.k)(this, Od, 0)), this.debugLimit = ((0, LF.k)(this, xP), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = uF.c.MATERIAL_OPAQUE, this.OWF() && !this.OWF()?.sC().isWebGPU && this.OWF().sC().Im < 2 && OF.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), FF._noiseTextures[this.OWF().uniqueId] || (FF._noiseTextures[this.OWF().uniqueId] = new ZF.i(DW.h.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.OWF(), !1, !0, 1), this.OWF().xSF.addOnce((() => {
              FF._noiseTextures[this.OWF().uniqueId]?.dispose(), delete FF._noiseTextures[this.OWF().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), vW.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), vW.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = zW(this.OWF()), this._environmentFuzzBRDFTexture = GF(this.OWF()), this.prePassConfiguration = new wF.b, this._propertyList = {};
            for (const FF of Object.getOwnPropertyNames(this)) {
              const WF = this[FF];
              WF instanceof XW && (this._propertyList[FF] = WF)
            }
            Object.keys(this._propertyList).forEach((FF => {
              const WF = this._propertyList[FF];
              let SF = this._uniformsList[WF.targetUniformName];
              SF ? SF.numComponents !== WF.targetUniformComponentNum ? OF.b.Error(`Uniform ${WF.targetUniformName} already exists of size ${SF.numComponents}, but trying to set it to ${WF.targetUniformComponentNum}.`) : SF.requiredDefine !== WF.requiredDefine && (SF.requiredDefine = void 0) : (SF = new wW(WF.targetUniformName, WF.targetUniformComponentNum), SF.requiredDefine = WF.requiredDefine, this._uniformsList[WF.targetUniformName] = SF), "" === SF.firstLinkedKey && (SF.firstLinkedKey = WF.name), SF.linkedProperties[WF.name] = WF
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const FF of Object.getOwnPropertyNames(this)) {
              const WF = this[FF];
              WF instanceof UW && (this._samplersList[FF] = WF)
            }
            for (const FF in this._samplersList) {
              const WF = this._samplersList[FF].textureDefine;
              this._samplerDefines[WF] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[WF + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[WF + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(vW.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(vW.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(FF) {
            this._transparencyMode !== FF && (this._transparencyMode = FF, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== uF.c.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(FF) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(FF)
          }
          clone(WF) {
            let SF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const AF = NW.e.Clone((() => new FF(WF, this.OWF())), this, {
              cloneTexturesOnlyOnce: SF
            });
            return AF.id = WF, AF.name = WF, this.stencil.copyTo(AF.stencil), this._clonePlugins(AF, CF), AF
          }
          serialize() {
            const FF = super.serialize();
            return FF.customType = "BABYLON.OpenPBRMaterial", FF
          }
          static Parse(WF, SF, CF) {
            const AF = NW.e.Parse((() => new FF(WF.name, SF)), WF, SF, CF);
            return WF.stencil && AF.stencil.parse(WF.stencil, SF, CF), uF.c._ParsePlugins(WF, AF, SF, CF), AF
          }
          forceCompilation(FF, WF, SF) {
            const CF = {
              clipPlane: !1,
              useInstances: !1,
              ...SF
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const SF = new vS({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                AF = this._prepareEffect(FF, FF, SF, void 0, void 0, CF.useInstances, CF.clipPlane);
              this._onEffectCreatedObservable && (HW.effect = AF, HW.subMesh = null, this._onEffectCreatedObservable.notifyObservers(HW)), AF.isReady() ? WF && WF(this) : AF.onCompileObservable.add((() => {
                WF && WF(this)
              }))
            })()
          }
          isReadyForSubMesh(WF, SF, CF) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const AF = SF._drawWrapper;
            if (AF.effect && this.isFrozen && AF._wasPreviouslyReady && AF._wasPreviouslyUsingInstances === CF) return !0;
            SF.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), SF.materialDefines = new vS({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const uF = SF.materialDefines;
            if (this._isReadyForSubMesh(SF)) return !0;
            const hF = this.OWF(),
              bW = hF.sC();
            if (uF._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, hF.texturesEnabled)) {
              for (const FF in this._samplersList) {
                const WF = this._samplersList[FF];
                if (WF.value && !WF.value.isReadyOrNotBlocking()) return !1
              }
              const WF = this._getRadianceTexture();
              if (WF && vW.e.ReflectionTextureEnabled) {
                if (!WF.isReadyOrNotBlocking()) return !1;
                if (WF.irradianceTexture) {
                  if (!WF.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!WF.sphericalPolynomial && WF.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && vW.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && vW.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && vW.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (FF._noiseTextures[hF.uniqueId] && !FF._noiseTextures[hF.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = uF, this._eventInfo.subMesh = SF, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (uF._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (uF.AREALIGHTUSED)
              for (let FF = 0; FF < WF.lightSources.length; FF++)
                if (!WF.lightSources[FF]._isReady()) return !1;
            if (bW.getCaps().standardDerivatives || WF.isVerticesDataPresent(yW.k.NormalKind) || (WF.createNormals(!0), OF.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + WF.name)), !(0, pF.e)(hF, WF, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const dF = SF.effect,
              PF = uF._areLightsDisposed,
              RF = this._prepareEffect(WF, SF.getRenderingMesh(), uF, this.onCompiled, this.onError, CF, null);
            let iW = !1;
            if (RF)
              if (this._onEffectCreatedObservable && (HW.effect = RF, HW.subMesh = SF, this._onEffectCreatedObservable.notifyObservers(HW)), this.allowShaderHotSwapping && dF && !RF.isReady()) {
                if (uF.markAsUnprocessed(), iW = this.isFrozen, PF) return uF._areLightsDisposed = !0, !1
              } else hF.resetCachedMaterial(), SF.setEffect(RF, uF, this._materialContext);
            return !(!SF.effect || !SF.effect.isReady()) && (uF._renderId = hF.getRenderId(), AF._wasPreviouslyReady = !iW, AF._wasPreviouslyUsingInstances = !!CF, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const FF = this._uniformBuffer;
            FF.addUniform("vTangentSpaceParams", 2), FF.addUniform("vLightingIntensity", 4), FF.addUniform("pointSize", 1), FF.addUniform("vDebugMode", 2), FF.addUniform("renderTargetSize", 2), FF.addUniform("cameraInfo", 4), FF.addUniform("vTextureRepetitionHexTilingParams", 4), FF.addUniform("backgroundRefractionMatrix", 16), FF.addUniform("vBackgroundRefractionInfos", 3), (0, pF.mb)(FF, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((WF => {
              FF.addUniform(WF.name, WF.numComponents)
            })), Object.values(this._samplersList).forEach((WF => {
              FF.addUniform(WF.samplerInfoName, 2), FF.addUniform(WF.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(FF, WF, SF, CF) {
            if (0 === this.geometryThickness) FF.updateFloat("vGeometryThickness", 0);
            else {
              CF.getRenderingMesh().getWorldMatrix().decompose(fF.j.HC[0]);
              const WF = Math.max(Math.abs(fF.j.HC[0].x), Math.abs(fF.j.HC[0].y), Math.abs(fF.j.HC[0].z));
              FF.updateFloat("vGeometryThickness", this.geometryThickness * WF)
            }
          }
          bindForSubMesh(WF, SF, CF) {
            const AF = this.OWF(),
              uF = CF.materialDefines;
            if (!uF) return;
            const hF = CF.effect;
            if (!hF) return;
            this._activeEffect = hF, SF.getMeshUniformBuffer().bindToEffect(hF, "Mesh"), SF.transferToEffect(WF);
            const bW = AF.sC();
            this._uniformBuffer.bindToEffect(hF, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, AF, SF, WF, this.isFrozen), EW.e.Bind(bW.currentRenderPassId, this._activeEffect, SF, WF, this);
            const dF = AF.activeCamera;
            dF ? this._uniformBuffer.updateFloat4("cameraInfo", dF.minZ, dF.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const PF = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", PF[0], PF[1], PF[2], PF[3]), this._eventInfo.subMesh = CF, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), uF.OBJECTSPACE_NORMALMAP && (WF.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const RF = this._mustRebind(AF, hF, CF, SF.visibility),
              iW = bW._features.needToAlwaysBindUniformBuffers;
            (0, pF.f)(SF, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, iS.c)(this._activeEffect, this._vertexPullingMetadata);
            const eF = this._uniformBuffer;
            if (RF) {
              this.bindViewProjection(hF);
              const WF = this._getRadianceTexture();
              if (!eF.useUbo || !this.isFrozen || !eF.isSync || CF._drawWrapper._forceRebindOnNextCall) {
                if (AF.texturesEnabled) {
                  for (const FF in this._samplersList) {
                    const WF = this._samplersList[FF];
                    WF.value && (eF.updateFloat2(WF.samplerInfoName, WF.value.coordinatesIndex, WF.value.level), (0, pF.A)(WF.value, eF, WF.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (AF._mirroredCameraPosition ? eF.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : eF.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, pF.m)(AF, uF, eF, XF.e.White(), WF, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && eF.updateFloat("pointSize", this.pointSize);
                const FF = this._uniformsArray;
                for (let WF = 0, SF = FF.length; WF < SF; WF++) {
                  const SF = FF[WF];
                  (void 0 === SF.requiredDefine || uF[SF.requiredDefine]) && (4 === SF.numComponents ? (SF.populateVectorFromLinkedProperties(fF.j.Vector4[0]), eF.updateVector4(SF.name, fF.j.Vector4[0])) : 3 === SF.numComponents ? (SF.populateVectorFromLinkedProperties(fF.j.HC[0]), eF.updateVector3(SF.name, fF.j.HC[0])) : 2 === SF.numComponents ? (SF.populateVectorFromLinkedProperties(fF.j.Vector2[0]), eF.updateFloat2(SF.name, fF.j.Vector2[0].x, fF.j.Vector2[0].y)) : 1 === SF.numComponents && eF.updateFloat(SF.name, SF.linkedProperties[SF.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * AF.environmentIntensity, this._lightingInfos.w = 1, eF.updateVector4("vLightingIntensity", this._lightingInfos), eF.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (AF.texturesEnabled) {
                for (const FF in this._samplersList) {
                  const WF = this._samplersList[FF];
                  WF.value && eF.setTexture(WF.samplerName, WF.value)
                }
                if ((0, pF.o)(AF, uF, eF, WF, this.realTimeFiltering), uF.ENVIRONMENTBRDF && eF.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), uF.FUZZENVIRONMENTBRDF && eF.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), uF.REFRACTED_BACKGROUND && (eF.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), eF.yhF("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), fF.j.HC[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), eF.updateVector3("vBackgroundRefractionInfos", fF.j.HC[1])), (uF.ANISOTROPIC || uF.FUZZ || uF.REFRACTED_BACKGROUND || uF.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && eF.setTexture("blueNoiseSampler", FF._noiseTextures[this.OWF().uniqueId]), uF.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const FF = this.sssIrradianceTexture.getSize().width,
                    WF = this.sssIrradianceTexture.getSize().height;
                  eF.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), eF.setTexture("sceneDepthSampler", this.sssDepthTexture), eF.updateFloat2("renderTargetSize", FF, WF)
                }
              }
              this.OWF().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(SF) && this.OWF().depthPeelingRenderer.bind(hF), this._eventInfo.subMesh = CF, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, RW.h)(this._activeEffect, this, AF), this.bindEyePosition(hF)
            } else iW && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, AF, AF.sC(), CF), !RF && this.isFrozen && !iW || !AF.lightsEnabled || this._disableLighting || (0, pF.q)(AF, SF, this._activeEffect, uF, this._maxSimultaneousLights), !RF && this.isFrozen || (this.bindView(hF), (0, pF.i)(AF, SF, this._activeEffect, !0), uF.NUM_MORPH_INFLUENCERS && (0, pF.t)(SF, this._activeEffect), uF.BAKED_VERTEX_ANIMATION_TEXTURE && SF.bakedVertexAnimationManager?.bind(hF, uF.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, pF.r)(uF, this._activeEffect, AF)), this._afterBind(SF, this._activeEffect, CF), eF.update()
          }
          getAnimatables() {
            const FF = super.getAnimatables();
            for (const WF in this._samplersList) {
              const SF = this._samplersList[WF];
              SF.value && SF.value.animations && SF.value.animations.length > 0 && FF.push(SF.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && FF.push(this._radianceTexture), FF
          }
          getActiveTextures() {
            const FF = super.getActiveTextures();
            for (const WF in this._samplersList) {
              const SF = this._samplersList[WF];
              SF.value && FF.push(SF.value)
            }
            return this._radianceTexture && FF.push(this._radianceTexture), FF
          }
          hasTexture(FF) {
            if (super.hasTexture(FF)) return !0;
            for (const WF in this._samplersList) {
              if (this._samplersList[WF].value === FF) return !0
            }
            return this._radianceTexture === FF
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(FF, WF) {
            if (this._breakShaderLoadedCheck = !0, WF) {
              this._environmentBRDFTexture && this.OWF().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.OWF().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const FF in this._samplersList) {
                const WF = this._samplersList[FF];
                WF.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(FF, WF)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.OWF().environmentTexture
          }
          _prepareEffect(WF, SF, CF) {
            let AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              hF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              bW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(WF, SF, CF, hF, bW), !CF.isDirty) return null;
            CF.markAsProcessed();
            const dF = this.OWF().sC(),
              PF = new JF.b;
            let RF = 0;
            CF.USESPHERICALINVERTEX && PF.addFallback(RF++, "USESPHERICALINVERTEX"), CF.FOG && PF.addFallback(RF, "FOG"), CF.SPECULARAA && PF.addFallback(RF, "SPECULARAA"), CF.POINTSIZE && PF.addFallback(RF, "POINTSIZE"), CF.LOGARITHMICDEPTH && PF.addFallback(RF, "LOGARITHMICDEPTH"), CF.PARALLAX && PF.addFallback(RF, "PARALLAX"), CF.PARALLAX_RHS && PF.addFallback(RF, "PARALLAX_RHS"), CF.PARALLAXOCCLUSION && PF.addFallback(RF++, "PARALLAXOCCLUSION"), CF.ENVIRONMENTBRDF && PF.addFallback(RF++, "ENVIRONMENTBRDF"), CF.TANGENT && PF.addFallback(RF++, "TANGENT"), RF = (0, pF.E)(CF, PF, this._maxSimultaneousLights, RF), CF.SPECULARTERM && PF.addFallback(RF++, "SPECULARTERM"), CF.USESPHERICALFROMREFLECTIONMAP && PF.addFallback(RF++, "USESPHERICALFROMREFLECTIONMAP"), CF.USEIRRADIANCEMAP && PF.addFallback(RF++, "USEIRRADIANCEMAP"), CF.NORMAL && PF.addFallback(RF++, "NORMAL"), CF.VERTEXCOLOR && PF.addFallback(RF++, "VERTEXCOLOR"), CF.MORPHTARGETS && PF.addFallback(RF++, "MORPHTARGETS"), CF.MULTIVIEW && PF.addFallback(0, "MULTIVIEW");
            const iW = [yW.k.PositionKind];
            CF.NORMAL && iW.push(yW.k.NormalKind), CF.TANGENT && iW.push(yW.k.TangentKind);
            for (let FF = 1; FF <= 6; ++FF) CF["UV" + FF] && iW.push(`uv${1===FF?"":FF}`);
            CF.VERTEXCOLOR && iW.push(yW.k.ColorKind), (0, pF.J)(iW, WF, CF, PF), (0, pF.L)(iW, CF), (0, pF.P)(iW, WF, CF), (0, pF.G)(iW, WF, CF);
            let eF = "openpbr";
            const EF = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const FF in this._uniformsList) EF.push(FF);
            const QF = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            CF.FUZZENVIRONMENTBRDF && QF.push("environmentFuzzBrdfSampler"), CF.REFRACTED_BACKGROUND && QF.push("backgroundRefractionSampler"), (CF.ANISOTROPIC || CF.FUZZ || CF.REFRACTED_BACKGROUND || CF.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && QF.push("blueNoiseSampler"), CF.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (QF.push("sceneIrradianceSampler"), QF.push("sceneDepthSampler"));
            for (const FF in this._samplersList) {
              const WF = this._samplersList[FF];
              QF.push(WF.samplerName), EF.push(WF.samplerInfoName), EF.push(WF.samplerMatrixName)
            }(0, pF.qb)(EF, QF, !0);
            const rW = ["Material", "Scene", "Mesh"],
              gW = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: CF.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = PF, this._eventInfo.fallbackRank = RF, this._eventInfo.defines = CF, this._eventInfo.uniforms = EF, this._eventInfo.attributes = iW, this._eventInfo.samplers = QF, this._eventInfo.uniformBuffersNames = rW, this._eventInfo.customCode = void 0, this._eventInfo.mesh = WF, this._eventInfo.indexParameters = gW, this._callbackPluginEventGeneric(128, this._eventInfo), EW.e.AddUniformsAndSamplers(EF, QF), wF.b.AddUniforms(EF), wF.b.AddSamplers(QF), (0, RW.e)(EF), this._useVertexPulling) {
              const FF = SF?.geometry;
              FF && (this._vertexPullingMetadata = (0, iS.f)(FF), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((FF, WF) => {
                EF.push(`vp_${WF}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            BF.d && (BF.d.PrepareUniforms(EF, CF), BF.d.PrepareSamplers(QF, CF)), (0, pF.rb)({
              uniformsNames: EF,
              uniformBuffersNames: rW,
              samplers: QF,
              defines: CF,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const tW = {};
            this.customShaderNameResolve && (eF = this.customShaderNameResolve(eF, EF, rW, QF, CF, iW, tW));
            const TF = CF.toString(),
              aW = dF.createEffect(eF, {
                attributes: iW,
                uniformsNames: EF,
                uniformBuffersNames: rW,
                samplers: QF,
                defines: TF,
                fallbacks: PF,
                onCompiled: AF,
                onError: uF,
                indexParameters: gW,
                processFinalCode: tW.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: CF.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: FF._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, dF);
            return this._eventInfo.customCode = void 0, aW
          }
          _prepareDefines(WF, SF, CF) {
            let AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              hF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const bW = SF.hasThinInstances,
              dF = this.OWF(),
              PF = dF.sC();
            (0, pF.cb)(dF, WF, CF, !0, this._maxSimultaneousLights, this._disableLighting), CF._needNormals = !0, (0, pF.hb)(dF, CF);
            const RF = this.needAlphaBlendingForMesh(WF) && this.OWF().useOrderIndependentTransparency;
            if ((0, pF.kb)(dF, CF, this.canRenderToMRT && !RF), (0, pF.ib)(dF, CF, RF), EW.e.PrepareDefines(PF.currentRenderPassId, WF, CF), CF._areTexturesDirty) {
              CF._needUVs = !1;
              for (let FF = 1; FF <= 6; ++FF) CF["MAINUV" + FF] = !1;
              if (dF.texturesEnabled) {
                for (const SF in this._samplersList) {
                  const FF = this._samplersList[SF];
                  FF.value ? ((0, pF.eb)(FF.value, CF, FF.textureDefine), CF[FF.textureDefine + "_GAMMA"] = FF.value.gammaSpace) : CF[FF.textureDefine] = !1
                }
                const FF = this._getRadianceTexture(),
                  WF = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || PF.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, pF._)(dF, FF, CF, this.realTimeFiltering, this.realTimeFilteringQuality, !WF), this._baseMetalnessTexture && (CF.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), CF.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, CF.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, CF.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, CF.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, CF.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, CF.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, CF.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, CF.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, CF.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, CF.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, CF.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && vW.e.DiffuseTextureEnabled ? (CF.PARALLAX = !0, CF.PARALLAX_RHS = dF.useRightHandedSystem, CF.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : CF.PARALLAX = !1, CF.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (CF.PARALLAX = !1, CF.PARALLAX_RHS = !1, CF.PARALLAXOCCLUSION = !1, CF.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && vW.e.ReflectionTextureEnabled ? (CF.ENVIRONMENTBRDF = !0, CF.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (CF.ENVIRONMENTBRDF = !1, CF.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? CF.FUZZENVIRONMENTBRDF = !0 : CF.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  CF.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && vW.e.RefractionTextureEnabled, CF.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, CF.REFRACTED_LIGHTS = !0;
                  const FF = this._getRadianceTexture();
                  FF ? (CF.REFRACTED_ENVIRONMENT = vW.e.RefractionTextureEnabled, CF.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.OWF().useRightHandedSystem ? !FF.invertZ : FF.invertZ, CF.REFRACTED_ENVIRONMENT_LOCAL_CUBE = FF.isCube && FF.boundingBoxSize) : CF.REFRACTED_ENVIRONMENT = !1
                } else CF.REFRACTED_BACKGROUND = !1, CF.REFRACTED_LIGHTS = !1, CF.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? CF.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : CF.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === uF.c.LIGHTFALLOFF_STANDARD ? (CF.USEPHYSICALLIGHTFALLOFF = !1, CF.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === uF.c.LIGHTFALLOFF_GLTF ? (CF.USEPHYSICALLIGHTFALLOFF = !1, CF.USEGLTFLIGHTFALLOFF = !0) : (CF.USEPHYSICALLIGHTFALLOFF = !0, CF.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? CF.TWOSIDEDLIGHTING = !0 : CF.TWOSIDEDLIGHTING = !1, CF.MIRRORED = !!dF._mirroredCameraPosition, CF.SPECULARAA = PF.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(CF._areTexturesDirty || CF._areMiscDirty) && (CF.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, CF.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, CF.ALPHABLEND = this.needAlphaBlendingForMesh(WF)), CF._areTexturesDirty && (CF.TEXTURE_REPETITION_MODE = PF.version > 1 || PF.isWebGPU ? this.textureRepetitionMode : 0), CF._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(CF), CF.FORCENORMALFORWARD = this._forceNormalForward, CF.RADIANCEOCCLUSION = this._useRadianceOcclusion, CF.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && FF._noiseTextures[dF.uniqueId] && vW.e.ReflectionTextureEnabled ? (CF.ANISOTROPIC = !0, WF.isVerticesDataPresent(yW.k.TangentKind) || (CF._needUVs = !0, CF.MAINUV1 = !0), this._useGltfStyleAnisotropy && (CF.USE_GLTF_STYLE_ANISOTROPY = !0), CF.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, CF.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (CF.ANISOTROPIC = !1, CF.USE_GLTF_STYLE_ANISOTROPY = !1, CF.ANISOTROPIC_BASE = !1, CF.ANISOTROPIC_COAT = !1), CF.THIN_FILM = this.thinFilmWeight > 0, CF.IRIDESCENCE = this.thinFilmWeight > 0, CF.DISPERSION = this.transmissionDispersionScale > 0, CF.SCATTERING = this.hasScattering;
            if (CF.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, CF.TRANSMISSION_SLAB = this.transmissionWeight > 0, CF.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, CF.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !CF.PREPASS && (CF.SUBSURFACE_SLAB || CF.TRANSMISSION_SLAB_VOLUME)) {
              let FF = !1;
              if (!this.sssIrradianceTexture && dF.geometryBufferRenderer) {
                const WF = dF.geometryBufferRenderer.getTextureIndex(sW.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = dF.geometryBufferRenderer.getGBuffer().textures[WF], FF = !0
              }
              if (!this.sssDepthTexture && dF.geometryBufferRenderer) {
                const WF = dF.geometryBufferRenderer.getTextureIndex(sW.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = dF.geometryBufferRenderer.getGBuffer().textures[WF], FF = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (CF.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, FF && (CF.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            CF.FUZZ = this.fuzzWeight > 0 && vW.e.ReflectionTextureEnabled, CF.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, CF.FUZZ ? (WF.isVerticesDataPresent(yW.k.TangentKind) || (CF._needUVs = !0, CF.MAINUV1 = !0), this._environmentFuzzBRDFTexture = GF(this.OWF()), CF.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, CF.FUZZENVIRONMENTBRDF = !1, CF.FUZZ_IBL_SAMPLES = 0), CF._areMiscDirty && ((0, pF.fb)(WF, dF, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(WF), CF, this._applyDecalMapAfterDetailMap, this._useVertexPulling, SF, this._isVertexOutputInvariant), CF.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !WF.isVerticesDataPresent(yW.k.NormalKind), CF.DEBUGMODE = this._debugMode), (0, pF.X)(dF, PF, this, CF, !!AF, hF, bW), this._eventInfo.defines = CF, this._eventInfo.mesh = WF, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, pF.W)(WF, CF, !0, !0, !0, this._transparencyMode !== uF.c.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, WF = new WeakMap, CF = new WeakMap, AF = new WeakMap, hF = new WeakMap, bW = new WeakMap, dF = new WeakMap, PF = new WeakMap, RF = new WeakMap, iW = new WeakMap, eF = new WeakMap, EF = new WeakMap, QF = new WeakMap, rW = new WeakMap, gW = new WeakMap, tW = new WeakMap, TF = new WeakMap, aW = new WeakMap, kW = new WeakMap, qW = new WeakMap, VF = new WeakMap, NF = new WeakMap, DF = new WeakMap, oF = new WeakMap, YF = new WeakMap, MF = new WeakMap, cW = new WeakMap, IF = new WeakMap, sF = new WeakMap, nF = new WeakMap, HF = new WeakMap, KF = new WeakMap, UF = new WeakMap, jW = new WeakMap, lF = new WeakMap, FW = new WeakMap, WW = new WeakMap, SW = new WeakMap, CW = new WeakMap, AW = new WeakMap, uW = new WeakMap, hW = new WeakMap, bS = new WeakMap, dW = new WeakMap, PW = new WeakMap, QW = new WeakMap, rS = new WeakMap, gS = new WeakMap, tS = new WeakMap, TW = new WeakMap, aS = new WeakMap, kS = new WeakMap, qS = new WeakMap, VW = new WeakMap, LW = new WeakMap, mS = new WeakMap, OW = new WeakMap, xS = new WeakMap, ZW = new WeakMap, oW = new WeakMap, YW = new WeakMap, MW = new WeakMap, cS = new WeakMap, GW = new WeakMap, zS = new WeakMap, IW = new WeakMap, fW = new WeakMap, yS = new WeakMap, nW = new WeakMap, KW = new WeakMap, BW = new WeakMap, jS = new WeakMap, pW = new WeakMap, lW = new WeakMap, FS = new WeakMap, WS = new WeakMap, SS = new WeakMap, CS = new WeakMap, AS = new WeakMap, uS = new WeakMap, hS = new WeakMap, bC = new WeakMap, dS = new WeakMap, PS = new WeakMap, RS = new WeakMap, iC = new WeakMap, eS = new WeakMap, ES = new WeakMap, QS = new WeakMap, rC = new WeakMap, gC = new WeakMap, tC = new WeakMap, TS = new WeakMap, aC = new WeakMap, kC = new WeakMap, qC = new WeakMap, VS = new WeakMap, NS = new WeakMap, DS = new WeakMap, LS = new WeakMap, mC = new WeakMap, OS = new WeakMap, xC = new WeakMap, (() => {
          const WF = "function" === typeof Symbol && Symbol.metadata ? Object.create(oA[Symbol.metadata] ?? null) : void 0;
          ZS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], oS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], YS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], MS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], cC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], GS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], zC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], IS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], fS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], yC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], sS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], nS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], HS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], KS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], wS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], XS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], US = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], BS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], jC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], vC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], JS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], pS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], lS = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], FC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], WC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], SC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], CC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], AC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], uC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], hC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], bA = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], dC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], PC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], RC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], iA = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], eC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], EC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], QC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], rA = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], gA = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], tA = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], TC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], aA = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], kA = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], qA = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], VC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], NC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], DC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], LC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], mA = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], OC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], xA = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], ZC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], oC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], YC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], MC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], cA = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], GC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], zA = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], IC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], fC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], yA = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], sC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], nC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], HC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], KC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], wC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], XC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], UC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], BC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], jA = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], vA = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], JC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], pC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], lC = [(0, mW.e)("_markAllSubMeshesAsTexturesDirty")], FA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], WA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], SA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], CA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], AA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], uA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], hA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], bu = [(0, mW.H)()], dA = [(0, mW.H)()], PA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], RA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], iu = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], eA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], EA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsLightsDirty")], QA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], ru = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsLightsDirty")], gu = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], tu = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], TA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], au = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], ku = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], qu = [(0, mW.i)("_markAllSubMeshesAsTexturesDirty")], VA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], NA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], DA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], LA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], mu = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsMiscDirty")], OA = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsMiscDirty")], xu = [(0, mW.i)("_markAllSubMeshesAsMiscDirty")], ZA = [(0, mW.H)()], (0, LF.j)(FF, null, ZS, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: FF => "baseWeight" in FF,
              get: FF => FF.baseWeight,
              set: (FF, WF) => {
                FF.baseWeight = WF
              }
            },
            metadata: WF
          }, MA, cu), (0, LF.j)(FF, null, oS, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "baseWeightTexture" in FF,
              get: FF => FF.baseWeightTexture,
              set: (FF, WF) => {
                FF.baseWeightTexture = WF
              }
            },
            metadata: WF
          }, GA, zu), (0, LF.j)(FF, null, YS, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: FF => "baseColor" in FF,
              get: FF => FF.baseColor,
              set: (FF, WF) => {
                FF.baseColor = WF
              }
            },
            metadata: WF
          }, IA, fA), (0, LF.j)(FF, null, MS, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "baseColorTexture" in FF,
              get: FF => FF.baseColorTexture,
              set: (FF, WF) => {
                FF.baseColorTexture = WF
              }
            },
            metadata: WF
          }, yu, sA), (0, LF.j)(FF, null, cC, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: FF => "baseDiffuseRoughness" in FF,
              get: FF => FF.baseDiffuseRoughness,
              set: (FF, WF) => {
                FF.baseDiffuseRoughness = WF
              }
            },
            metadata: WF
          }, nA, HA), (0, LF.j)(FF, null, GS, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "baseDiffuseRoughnessTexture" in FF,
              get: FF => FF.baseDiffuseRoughnessTexture,
              set: (FF, WF) => {
                FF.baseDiffuseRoughnessTexture = WF
              }
            },
            metadata: WF
          }, KA, wA), (0, LF.j)(FF, null, zC, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: FF => "baseMetalness" in FF,
              get: FF => FF.baseMetalness,
              set: (FF, WF) => {
                FF.baseMetalness = WF
              }
            },
            metadata: WF
          }, XA, UA), (0, LF.j)(FF, null, IS, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "baseMetalnessTexture" in FF,
              get: FF => FF.baseMetalnessTexture,
              set: (FF, WF) => {
                FF.baseMetalnessTexture = WF
              }
            },
            metadata: WF
          }, BA, ju), (0, LF.j)(FF, null, fS, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: FF => "specularWeight" in FF,
              get: FF => FF.specularWeight,
              set: (FF, WF) => {
                FF.specularWeight = WF
              }
            },
            metadata: WF
          }, vu, JA), (0, LF.j)(FF, null, yC, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "specularWeightTexture" in FF,
              get: FF => FF.specularWeightTexture,
              set: (FF, WF) => {
                FF.specularWeightTexture = WF
              }
            },
            metadata: WF
          }, pA, lA), (0, LF.j)(FF, null, sS, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: FF => "specularColor" in FF,
              get: FF => FF.specularColor,
              set: (FF, WF) => {
                FF.specularColor = WF
              }
            },
            metadata: WF
          }, Fu, Wu), (0, LF.j)(FF, null, nS, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "specularColorTexture" in FF,
              get: FF => FF.specularColorTexture,
              set: (FF, WF) => {
                FF.specularColorTexture = WF
              }
            },
            metadata: WF
          }, Su, Cu), (0, LF.j)(FF, null, HS, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: FF => "specularRoughness" in FF,
              get: FF => FF.specularRoughness,
              set: (FF, WF) => {
                FF.specularRoughness = WF
              }
            },
            metadata: WF
          }, Au, uu), (0, LF.j)(FF, null, KS, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "specularRoughnessTexture" in FF,
              get: FF => FF.specularRoughnessTexture,
              set: (FF, WF) => {
                FF.specularRoughnessTexture = WF
              }
            },
            metadata: WF
          }, hu, bh), (0, LF.j)(FF, null, wS, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: FF => "specularRoughnessAnisotropy" in FF,
              get: FF => FF.specularRoughnessAnisotropy,
              set: (FF, WF) => {
                FF.specularRoughnessAnisotropy = WF
              }
            },
            metadata: WF
          }, du, Pu), (0, LF.j)(FF, null, XS, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "specularRoughnessAnisotropyTexture" in FF,
              get: FF => FF.specularRoughnessAnisotropyTexture,
              set: (FF, WF) => {
                FF.specularRoughnessAnisotropyTexture = WF
              }
            },
            metadata: WF
          }, Ru, ih), (0, LF.j)(FF, null, US, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: FF => "specularIor" in FF,
              get: FF => FF.specularIor,
              set: (FF, WF) => {
                FF.specularIor = WF
              }
            },
            metadata: WF
          }, eu, Eu), (0, LF.j)(FF, null, BS, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: FF => "transmissionWeight" in FF,
              get: FF => FF.transmissionWeight,
              set: (FF, WF) => {
                FF.transmissionWeight = WF
              }
            },
            metadata: WF
          }, Qu, rh), (0, LF.j)(FF, null, jC, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "transmissionWeightTexture" in FF,
              get: FF => FF.transmissionWeightTexture,
              set: (FF, WF) => {
                FF.transmissionWeightTexture = WF
              }
            },
            metadata: WF
          }, gh, th), (0, LF.j)(FF, null, vC, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: FF => "transmissionColor" in FF,
              get: FF => FF.transmissionColor,
              set: (FF, WF) => {
                FF.transmissionColor = WF
              }
            },
            metadata: WF
          }, Tu, ah), (0, LF.j)(FF, null, JS, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "transmissionColorTexture" in FF,
              get: FF => FF.transmissionColorTexture,
              set: (FF, WF) => {
                FF.transmissionColorTexture = WF
              }
            },
            metadata: WF
          }, kh, qh), (0, LF.j)(FF, null, pS, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: FF => "transmissionDepth" in FF,
              get: FF => FF.transmissionDepth,
              set: (FF, WF) => {
                FF.transmissionDepth = WF
              }
            },
            metadata: WF
          }, Vu, Nu), (0, LF.j)(FF, null, lS, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "transmissionDepthTexture" in FF,
              get: FF => FF.transmissionDepthTexture,
              set: (FF, WF) => {
                FF.transmissionDepthTexture = WF
              }
            },
            metadata: WF
          }, Du, Lu), (0, LF.j)(FF, null, FC, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: FF => "transmissionScatter" in FF,
              get: FF => FF.transmissionScatter,
              set: (FF, WF) => {
                FF.transmissionScatter = WF
              }
            },
            metadata: WF
          }, mh, Ou), (0, LF.j)(FF, null, WC, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "transmissionScatterTexture" in FF,
              get: FF => FF.transmissionScatterTexture,
              set: (FF, WF) => {
                FF.transmissionScatterTexture = WF
              }
            },
            metadata: WF
          }, xh, Zu), (0, LF.j)(FF, null, SC, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: FF => "transmissionScatterAnisotropy" in FF,
              get: FF => FF.transmissionScatterAnisotropy,
              set: (FF, WF) => {
                FF.transmissionScatterAnisotropy = WF
              }
            },
            metadata: WF
          }, ou, Yu), (0, LF.j)(FF, null, CC, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: FF => "transmissionDispersionScale" in FF,
              get: FF => FF.transmissionDispersionScale,
              set: (FF, WF) => {
                FF.transmissionDispersionScale = WF
              }
            },
            metadata: WF
          }, Mu, ch), (0, LF.j)(FF, null, AC, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "transmissionDispersionScaleTexture" in FF,
              get: FF => FF.transmissionDispersionScaleTexture,
              set: (FF, WF) => {
                FF.transmissionDispersionScaleTexture = WF
              }
            },
            metadata: WF
          }, Gu, zh), (0, LF.j)(FF, null, uC, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: FF => "transmissionDispersionAbbeNumber" in FF,
              get: FF => FF.transmissionDispersionAbbeNumber,
              set: (FF, WF) => {
                FF.transmissionDispersionAbbeNumber = WF
              }
            },
            metadata: WF
          }, Iu, fu), (0, LF.j)(FF, null, hC, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: FF => "subsurfaceWeight" in FF,
              get: FF => FF.subsurfaceWeight,
              set: (FF, WF) => {
                FF.subsurfaceWeight = WF
              }
            },
            metadata: WF
          }, yh, su), (0, LF.j)(FF, null, bA, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "subsurfaceWeightTexture" in FF,
              get: FF => FF.subsurfaceWeightTexture,
              set: (FF, WF) => {
                FF.subsurfaceWeightTexture = WF
              }
            },
            metadata: WF
          }, nu, Hu), (0, LF.j)(FF, null, dC, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: FF => "subsurfaceColor" in FF,
              get: FF => FF.subsurfaceColor,
              set: (FF, WF) => {
                FF.subsurfaceColor = WF
              }
            },
            metadata: WF
          }, Ku, wu), (0, LF.j)(FF, null, PC, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "subsurfaceColorTexture" in FF,
              get: FF => FF.subsurfaceColorTexture,
              set: (FF, WF) => {
                FF.subsurfaceColorTexture = WF
              }
            },
            metadata: WF
          }, Xu, Uu), (0, LF.j)(FF, null, RC, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: FF => "subsurfaceRadius" in FF,
              get: FF => FF.subsurfaceRadius,
              set: (FF, WF) => {
                FF.subsurfaceRadius = WF
              }
            },
            metadata: WF
          }, Bu, jh), (0, LF.j)(FF, null, iA, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: FF => "subsurfaceRadiusScale" in FF,
              get: FF => FF.subsurfaceRadiusScale,
              set: (FF, WF) => {
                FF.subsurfaceRadiusScale = WF
              }
            },
            metadata: WF
          }, vh, Ju), (0, LF.j)(FF, null, eC, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "subsurfaceRadiusScaleTexture" in FF,
              get: FF => FF.subsurfaceRadiusScaleTexture,
              set: (FF, WF) => {
                FF.subsurfaceRadiusScaleTexture = WF
              }
            },
            metadata: WF
          }, pu, lu), (0, LF.j)(FF, null, EC, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: FF => "subsurfaceScatterAnisotropy" in FF,
              get: FF => FF.subsurfaceScatterAnisotropy,
              set: (FF, WF) => {
                FF.subsurfaceScatterAnisotropy = WF
              }
            },
            metadata: WF
          }, Fh, Wh), (0, LF.j)(FF, null, QC, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: FF => "coatWeight" in FF,
              get: FF => FF.coatWeight,
              set: (FF, WF) => {
                FF.coatWeight = WF
              }
            },
            metadata: WF
          }, Sh, Ch), (0, LF.j)(FF, null, rA, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "coatWeightTexture" in FF,
              get: FF => FF.coatWeightTexture,
              set: (FF, WF) => {
                FF.coatWeightTexture = WF
              }
            },
            metadata: WF
          }, Ah, uh), (0, LF.j)(FF, null, gA, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: FF => "coatColor" in FF,
              get: FF => FF.coatColor,
              set: (FF, WF) => {
                FF.coatColor = WF
              }
            },
            metadata: WF
          }, hh, bb), (0, LF.j)(FF, null, tA, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "coatColorTexture" in FF,
              get: FF => FF.coatColorTexture,
              set: (FF, WF) => {
                FF.coatColorTexture = WF
              }
            },
            metadata: WF
          }, dh, Ph), (0, LF.j)(FF, null, TC, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: FF => "coatRoughness" in FF,
              get: FF => FF.coatRoughness,
              set: (FF, WF) => {
                FF.coatRoughness = WF
              }
            },
            metadata: WF
          }, Rh, ib), (0, LF.j)(FF, null, aA, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "coatRoughnessTexture" in FF,
              get: FF => FF.coatRoughnessTexture,
              set: (FF, WF) => {
                FF.coatRoughnessTexture = WF
              }
            },
            metadata: WF
          }, eh, Eh), (0, LF.j)(FF, null, kA, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: FF => "coatRoughnessAnisotropy" in FF,
              get: FF => FF.coatRoughnessAnisotropy,
              set: (FF, WF) => {
                FF.coatRoughnessAnisotropy = WF
              }
            },
            metadata: WF
          }, Qh, rb), (0, LF.j)(FF, null, qA, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "coatRoughnessAnisotropyTexture" in FF,
              get: FF => FF.coatRoughnessAnisotropyTexture,
              set: (FF, WF) => {
                FF.coatRoughnessAnisotropyTexture = WF
              }
            },
            metadata: WF
          }, gb, tb), (0, LF.j)(FF, null, VC, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: FF => "coatIor" in FF,
              get: FF => FF.coatIor,
              set: (FF, WF) => {
                FF.coatIor = WF
              }
            },
            metadata: WF
          }, Th, ab), (0, LF.j)(FF, null, NC, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: FF => "coatDarkening" in FF,
              get: FF => FF.coatDarkening,
              set: (FF, WF) => {
                FF.coatDarkening = WF
              }
            },
            metadata: WF
          }, kb, qb), (0, LF.j)(FF, null, DC, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "coatDarkeningTexture" in FF,
              get: FF => FF.coatDarkeningTexture,
              set: (FF, WF) => {
                FF.coatDarkeningTexture = WF
              }
            },
            metadata: WF
          }, Vh, Nh), (0, LF.j)(FF, null, LC, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: FF => "fuzzWeight" in FF,
              get: FF => FF.fuzzWeight,
              set: (FF, WF) => {
                FF.fuzzWeight = WF
              }
            },
            metadata: WF
          }, Dh, Lh), (0, LF.j)(FF, null, mA, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "fuzzWeightTexture" in FF,
              get: FF => FF.fuzzWeightTexture,
              set: (FF, WF) => {
                FF.fuzzWeightTexture = WF
              }
            },
            metadata: WF
          }, mb, Oh), (0, LF.j)(FF, null, OC, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: FF => "fuzzColor" in FF,
              get: FF => FF.fuzzColor,
              set: (FF, WF) => {
                FF.fuzzColor = WF
              }
            },
            metadata: WF
          }, xb, Zh), (0, LF.j)(FF, null, xA, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "fuzzColorTexture" in FF,
              get: FF => FF.fuzzColorTexture,
              set: (FF, WF) => {
                FF.fuzzColorTexture = WF
              }
            },
            metadata: WF
          }, oh, Yh), (0, LF.j)(FF, null, ZC, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: FF => "fuzzRoughness" in FF,
              get: FF => FF.fuzzRoughness,
              set: (FF, WF) => {
                FF.fuzzRoughness = WF
              }
            },
            metadata: WF
          }, Mh, cb), (0, LF.j)(FF, null, oC, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "fuzzRoughnessTexture" in FF,
              get: FF => FF.fuzzRoughnessTexture,
              set: (FF, WF) => {
                FF.fuzzRoughnessTexture = WF
              }
            },
            metadata: WF
          }, Gh, zb), (0, LF.j)(FF, null, YC, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: FF => "geometryThinWalled" in FF,
              get: FF => FF.geometryThinWalled,
              set: (FF, WF) => {
                FF.geometryThinWalled = WF
              }
            },
            metadata: WF
          }, Ih, fh), (0, LF.j)(FF, null, MC, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "geometryNormalTexture" in FF,
              get: FF => FF.geometryNormalTexture,
              set: (FF, WF) => {
                FF.geometryNormalTexture = WF
              }
            },
            metadata: WF
          }, yb, sh), (0, LF.j)(FF, null, cA, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: FF => "geometryTangent" in FF,
              get: FF => FF.geometryTangent,
              set: (FF, WF) => {
                FF.geometryTangent = WF
              }
            },
            metadata: WF
          }, nh, Hh), (0, LF.j)(FF, null, GC, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "geometryTangentTexture" in FF,
              get: FF => FF.geometryTangentTexture,
              set: (FF, WF) => {
                FF.geometryTangentTexture = WF
              }
            },
            metadata: WF
          }, Kh, wh), (0, LF.j)(FF, null, zA, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "geometryCoatNormalTexture" in FF,
              get: FF => FF.geometryCoatNormalTexture,
              set: (FF, WF) => {
                FF.geometryCoatNormalTexture = WF
              }
            },
            metadata: WF
          }, Xh, Uh), (0, LF.j)(FF, null, IC, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: FF => "geometryCoatTangent" in FF,
              get: FF => FF.geometryCoatTangent,
              set: (FF, WF) => {
                FF.geometryCoatTangent = WF
              }
            },
            metadata: WF
          }, Bh, jb), (0, LF.j)(FF, null, fC, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "geometryCoatTangentTexture" in FF,
              get: FF => FF.geometryCoatTangentTexture,
              set: (FF, WF) => {
                FF.geometryCoatTangentTexture = WF
              }
            },
            metadata: WF
          }, vb, Jh), (0, LF.j)(FF, null, yA, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: FF => "geometryOpacity" in FF,
              get: FF => FF.geometryOpacity,
              set: (FF, WF) => {
                FF.geometryOpacity = WF
              }
            },
            metadata: WF
          }, ph, lh), (0, LF.j)(FF, null, sC, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "geometryOpacityTexture" in FF,
              get: FF => FF.geometryOpacityTexture,
              set: (FF, WF) => {
                FF.geometryOpacityTexture = WF
              }
            },
            metadata: WF
          }, Fb, Wb), (0, LF.j)(FF, null, nC, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: FF => "geometryThickness" in FF,
              get: FF => FF.geometryThickness,
              set: (FF, WF) => {
                FF.geometryThickness = WF
              }
            },
            metadata: WF
          }, Sb, Cb), (0, LF.j)(FF, null, HC, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "geometryThicknessTexture" in FF,
              get: FF => FF.geometryThicknessTexture,
              set: (FF, WF) => {
                FF.geometryThicknessTexture = WF
              }
            },
            metadata: WF
          }, Ab, ub), (0, LF.j)(FF, null, KC, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: FF => "emissionLuminance" in FF,
              get: FF => FF.emissionLuminance,
              set: (FF, WF) => {
                FF.emissionLuminance = WF
              }
            },
            metadata: WF
          }, hb, bd), (0, LF.j)(FF, null, wC, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: FF => "emissionColor" in FF,
              get: FF => FF.emissionColor,
              set: (FF, WF) => {
                FF.emissionColor = WF
              }
            },
            metadata: WF
          }, db, Pb), (0, LF.j)(FF, null, XC, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "emissionColorTexture" in FF,
              get: FF => FF.emissionColorTexture,
              set: (FF, WF) => {
                FF.emissionColorTexture = WF
              }
            },
            metadata: WF
          }, Rb, eb), (0, LF.j)(FF, null, UC, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: FF => "thinFilmWeight" in FF,
              get: FF => FF.thinFilmWeight,
              set: (FF, WF) => {
                FF.thinFilmWeight = WF
              }
            },
            metadata: WF
          }, Eb, Qb), (0, LF.j)(FF, null, BC, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "thinFilmWeightTexture" in FF,
              get: FF => FF.thinFilmWeightTexture,
              set: (FF, WF) => {
                FF.thinFilmWeightTexture = WF
              }
            },
            metadata: WF
          }, rd, gd), (0, LF.j)(FF, null, jA, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: FF => "thinFilmThickness" in FF,
              get: FF => FF.thinFilmThickness,
              set: (FF, WF) => {
                FF.thinFilmThickness = WF
              }
            },
            metadata: WF
          }, td, Tb), (0, LF.j)(FF, null, vA, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: FF => "thinFilmThicknessMin" in FF,
              get: FF => FF.thinFilmThicknessMin,
              set: (FF, WF) => {
                FF.thinFilmThicknessMin = WF
              }
            },
            metadata: WF
          }, ad, kd), (0, LF.j)(FF, null, JC, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "thinFilmThicknessTexture" in FF,
              get: FF => FF.thinFilmThicknessTexture,
              set: (FF, WF) => {
                FF.thinFilmThicknessTexture = WF
              }
            },
            metadata: WF
          }, qd, Vb), (0, LF.j)(FF, null, pC, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: FF => "thinFilmIor" in FF,
              get: FF => FF.thinFilmIor,
              set: (FF, WF) => {
                FF.thinFilmIor = WF
              }
            },
            metadata: WF
          }, Nb, Db), (0, LF.j)(FF, null, lC, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "ambientOcclusionTexture" in FF,
              get: FF => FF.ambientOcclusionTexture,
              set: (FF, WF) => {
                FF.ambientOcclusionTexture = WF
              }
            },
            metadata: WF
          }, Lb, md), (0, LF.j)(FF, null, FA, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: FF => "directIntensity" in FF,
              get: FF => FF.directIntensity,
              set: (FF, WF) => {
                FF.directIntensity = WF
              }
            },
            metadata: WF
          }, Ob, xd), (0, LF.j)(FF, null, WA, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: FF => "environmentIntensity" in FF,
              get: FF => FF.environmentIntensity,
              set: (FF, WF) => {
                FF.environmentIntensity = WF
              }
            },
            metadata: WF
          }, Zb, ob), (0, LF.j)(FF, null, SA, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: FF => "useSpecularWeightFromTextureAlpha" in FF,
              get: FF => FF.useSpecularWeightFromTextureAlpha,
              set: (FF, WF) => {
                FF.useSpecularWeightFromTextureAlpha = WF
              }
            },
            metadata: WF
          }, Yb, Mb), (0, LF.j)(FF, null, CA, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: FF => "forceAlphaTest" in FF,
              get: FF => FF.forceAlphaTest,
              set: (FF, WF) => {
                FF.forceAlphaTest = WF
              }
            },
            metadata: WF
          }, cd, Gb), (0, LF.j)(FF, null, AA, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: FF => "alphaCutOff" in FF,
              get: FF => FF.alphaCutOff,
              set: (FF, WF) => {
                FF.alphaCutOff = WF
              }
            },
            metadata: WF
          }, zd, Ib), (0, LF.j)(FF, null, uA, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: FF => "useAmbientOcclusionFromMetallicTextureRed" in FF,
              get: FF => FF.useAmbientOcclusionFromMetallicTextureRed,
              set: (FF, WF) => {
                FF.useAmbientOcclusionFromMetallicTextureRed = WF
              }
            },
            metadata: WF
          }, fb, yd), (0, LF.j)(FF, null, hA, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: FF => "useAmbientInGrayScale" in FF,
              get: FF => FF.useAmbientInGrayScale,
              set: (FF, WF) => {
                FF.useAmbientInGrayScale = WF
              }
            },
            metadata: WF
          }, sb, nb), (0, LF.j)(FF, null, bu, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: FF => "usePhysicalLightFalloff" in FF,
              get: FF => FF.usePhysicalLightFalloff
            },
            metadata: WF
          }, null, YA), (0, LF.j)(FF, null, dA, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: FF => "useGLTFLightFalloff" in FF,
              get: FF => FF.useGLTFLightFalloff
            },
            metadata: WF
          }, null, YA), (0, LF.j)(FF, null, PA, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: FF => "useObjectSpaceNormalMap" in FF,
              get: FF => FF.useObjectSpaceNormalMap,
              set: (FF, WF) => {
                FF.useObjectSpaceNormalMap = WF
              }
            },
            metadata: WF
          }, Hb, Kb), (0, LF.j)(FF, null, RA, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: FF => "useParallax" in FF,
              get: FF => FF.useParallax,
              set: (FF, WF) => {
                FF.useParallax = WF
              }
            },
            metadata: WF
          }, wb, Xb), (0, LF.j)(FF, null, iu, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: FF => "useParallaxOcclusion" in FF,
              get: FF => FF.useParallaxOcclusion,
              set: (FF, WF) => {
                FF.useParallaxOcclusion = WF
              }
            },
            metadata: WF
          }, Ub, Bb), (0, LF.j)(FF, null, eA, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: FF => "parallaxScaleBias" in FF,
              get: FF => FF.parallaxScaleBias,
              set: (FF, WF) => {
                FF.parallaxScaleBias = WF
              }
            },
            metadata: WF
          }, jd, vd), (0, LF.j)(FF, null, EA, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: FF => "disableLighting" in FF,
              get: FF => FF.disableLighting,
              set: (FF, WF) => {
                FF.disableLighting = WF
              }
            },
            metadata: WF
          }, Jb, pb), (0, LF.j)(FF, null, QA, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: FF => "forceIrradianceInFragment" in FF,
              get: FF => FF.forceIrradianceInFragment,
              set: (FF, WF) => {
                FF.forceIrradianceInFragment = WF
              }
            },
            metadata: WF
          }, lb, Fd), (0, LF.j)(FF, null, ru, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: FF => "maxSimultaneousLights" in FF,
              get: FF => FF.maxSimultaneousLights,
              set: (FF, WF) => {
                FF.maxSimultaneousLights = WF
              }
            },
            metadata: WF
          }, Wd, Sd), (0, LF.j)(FF, null, gu, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: FF => "invertNormalMapX" in FF,
              get: FF => FF.invertNormalMapX,
              set: (FF, WF) => {
                FF.invertNormalMapX = WF
              }
            },
            metadata: WF
          }, Cd, Ad), (0, LF.j)(FF, null, tu, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: FF => "invertNormalMapY" in FF,
              get: FF => FF.invertNormalMapY,
              set: (FF, WF) => {
                FF.invertNormalMapY = WF
              }
            },
            metadata: WF
          }, ud, hd), (0, LF.j)(FF, null, TA, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: FF => "twoSidedLighting" in FF,
              get: FF => FF.twoSidedLighting,
              set: (FF, WF) => {
                FF.twoSidedLighting = WF
              }
            },
            metadata: WF
          }, bP, dd), (0, LF.j)(FF, null, au, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: FF => "useAlphaFresnel" in FF,
              get: FF => FF.useAlphaFresnel,
              set: (FF, WF) => {
                FF.useAlphaFresnel = WF
              }
            },
            metadata: WF
          }, Pd, Rd), (0, LF.j)(FF, null, ku, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: FF => "useLinearAlphaFresnel" in FF,
              get: FF => FF.useLinearAlphaFresnel,
              set: (FF, WF) => {
                FF.useLinearAlphaFresnel = WF
              }
            },
            metadata: WF
          }, iP, ed), (0, LF.j)(FF, null, qu, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "environmentBRDFTexture" in FF,
              get: FF => FF.environmentBRDFTexture,
              set: (FF, WF) => {
                FF.environmentBRDFTexture = WF
              }
            },
            metadata: WF
          }, Ed, Qd), (0, LF.j)(FF, null, VA, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: FF => "forceNormalForward" in FF,
              get: FF => FF.forceNormalForward,
              set: (FF, WF) => {
                FF.forceNormalForward = WF
              }
            },
            metadata: WF
          }, rP, gP), (0, LF.j)(FF, null, NA, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: FF => "enableSpecularAntiAliasing" in FF,
              get: FF => FF.enableSpecularAntiAliasing,
              set: (FF, WF) => {
                FF.enableSpecularAntiAliasing = WF
              }
            },
            metadata: WF
          }, tP, Td), (0, LF.j)(FF, null, DA, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: FF => "useHorizonOcclusion" in FF,
              get: FF => FF.useHorizonOcclusion,
              set: (FF, WF) => {
                FF.useHorizonOcclusion = WF
              }
            },
            metadata: WF
          }, aP, kP), (0, LF.j)(FF, null, LA, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: FF => "useRadianceOcclusion" in FF,
              get: FF => FF.useRadianceOcclusion,
              set: (FF, WF) => {
                FF.useRadianceOcclusion = WF
              }
            },
            metadata: WF
          }, qP, Vd), (0, LF.j)(FF, null, mu, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: FF => "unlit" in FF,
              get: FF => FF.unlit,
              set: (FF, WF) => {
                FF.unlit = WF
              }
            },
            metadata: WF
          }, Nd, Dd), (0, LF.j)(FF, null, OA, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: FF => "applyDecalMapAfterDetailMap" in FF,
              get: FF => FF.applyDecalMapAfterDetailMap,
              set: (FF, WF) => {
                FF.applyDecalMapAfterDetailMap = WF
              }
            },
            metadata: WF
          }, Ld, mP), (0, LF.j)(FF, null, xu, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: FF => "debugMode" in FF,
              get: FF => FF.debugMode,
              set: (FF, WF) => {
                FF.debugMode = WF
              }
            },
            metadata: WF
          }, Od, xP), (0, LF.j)(FF, null, ZA, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: FF => "transparencyMode" in FF,
              get: FF => FF.transparencyMode
            },
            metadata: WF
          }, null, YA), WF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: WF
          })
        })(), FF.SSS_QUALITY_LOW = 0, FF.SSS_QUALITY_MEDIUM = 1, FF.SSS_QUALITY_HIGH = 2, FF._noiseTextures = {}, FF.ForceGLSL = !1, FF._ShaderLoader = new eW.b((() => [Promise.all([SF.e(287), SF.e(353)]).then((() => SF(59439))), Promise.all([SF.e(292), SF.e(288), SF.e(352), SF.e(357)]).then((() => SF(59446)))]), (() => [Promise.all([SF.e(306), SF.e(308), SF.e(356)]).then((() => SF(59479))), Promise.all([SF.e(306), SF.e(309), SF.e(355), SF.e(358)]).then((() => SF(59489)))])), FF
      })(),
      lW = !1;
    lW || (lW = !0, (0, BF.h)(), (0, nW.f)("BABYLON.OpenPBRMaterial", pW));
    var FS = SF(35647);
    class WS {
      constructor(FF) {
        this.name = cS.d.NAME_PROCEDURALTEXTURE, this.ju = FF
      }
      register() {
        this.ju._beforeClearStage.registerStep(cS.d.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.ju.proceduralTexturesEnabled) {
          DW.h.StartPerformanceCounter("Procedural textures", this.ju.proceduralTextures.length > 0);
          for (let FF = 0; FF < this.ju.proceduralTextures.length; FF++) {
            const WF = this.ju.proceduralTextures[FF];
            WF._shouldRender() && WF.render()
          }
          DW.h.EndPerformanceCounter("Procedural textures", this.ju.proceduralTextures.length > 0)
        }
      }
    }
    var SS = SF(38301);
    let CS = (() => {
      var FF;
      let WF, CF, AF, hF, bW, dF = ZF.i,
        PF = [],
        RF = [],
        iW = [],
        eF = [],
        EF = [],
        QF = [],
        gW = [],
        tW = [],
        TF = [];
      return FF = class extends dF {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(FF, WF, SF, CF) {
          let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            uF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            hF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            bW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, CF, !uF), this.isEnabled = ((0, LF.k)(this, PF), (0, LF.k)(this, RF, !0)), this.autoClear = ((0, LF.k)(this, iW), (0, LF.k)(this, eF, !0)), this.onGenerated = (0, LF.k)(this, EF), this.onGeneratedObservable = new FS.b, this.onBeforeGenerationObservable = new FS.b, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, LF.k)(this, QF, void 0), this._drawWrapper = (0, LF.k)(this, gW), this._textures = {}, this._size = (0, LF.k)(this, tW, void 0), this._textureType = (0, LF.k)(this, TF), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === AF || AF instanceof ZF.i ? (this._options = {}, this._fallbackTexture = AF) : (this._options = AF, this._fallbackTexture = AF.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let dF = (CF = this.OWF() || rW.e.LastCreatedScene)._getComponent(cS.d.NAME_PROCEDURALTEXTURE);
          dF || (dF = new WS(CF), CF.SPF(dF)), this._options.skipSceneRegistration || CF.proceduralTextures.push(this), this._fullEngine = CF.sC(), this.name = FF, this.isRenderTarget = !0, this._size = WF, this._textureType = bW, this._generateMipMaps = uF, this._drawWrapper = new SS.e(this._fullEngine), this.setFragment(SF);
          const aW = this._createRtWrapper(hF, WF, uF, bW);
          this._texture = aW.texture;
          const kW = [];
          kW.push(1, 1), kW.push(-1, 1), kW.push(-1, -1), kW.push(1, -1), this._vertexBuffers[yW.k.PositionKind] = new yW.k(this._fullEngine, kW, yW.k.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(FF, WF, SF, CF) {
          return FF ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(WF, {
            generateMipMaps: SF,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: CF,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(WF, {
            generateMipMaps: SF,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: CF,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(FF) {
          this._drawWrapper.effect = FF
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((FF => {
            this._contentData = this.readPixels(0, 0, FF), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const FF = this._fullEngine,
            WF = [];
          WF.push(0), WF.push(1), WF.push(2), WF.push(0), WF.push(2), WF.push(3), this._indexBuffer = FF.createIndexBuffer(WF)
        }
        _rebuild() {
          const FF = this._vertexBuffers[yW.k.PositionKind];
          FF && FF._rebuild(), this._createIndexBuffer(), this.refreshRate === LW.c.REFRESHRATE_RENDER_ONCE && (this.refreshRate = LW.c.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(FF) {
          if (this.isReady()) return void FF(this);
          const WF = this.getEffect();
          WF && WF.executeWhenCompiled((() => {
            FF(this)
          }))
        }
        isReady() {
          const FF = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const WF = this._getDefines();
          if (this._drawWrapper.effect && WF === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const CF = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== WF && (this._cachedDefines = WF, this._drawWrapper.effect = FF.createEffect(CF, [yW.k.PositionKind], this._uniforms, this._samplers, WF, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([SF.e(361).then((() => SF(59550))), this._options.extraInitializationsAsync()]) : await Promise.all([SF.e(362).then((() => SF(59558))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await SF.e(361).then((() => SF(59550))) : await SF.e(362).then((() => SF(59558)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(FF) {
          this._fragment = FF
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(FF) {
          this._refreshRate = FF, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(FF, WF) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const SF = this._texture.isCube;
          this._rtWrapper.dispose();
          const CF = this._createRtWrapper(SF, FF, WF, this._textureType);
          this._texture = CF.texture, this._size = FF, this._generateMipMaps = WF
        }
        _checkUniform(FF) {
          -1 === this._uniforms.indexOf(FF) && this._uniforms.push(FF)
        }
        setTexture(FF, WF) {
          return -1 === this._samplers.indexOf(FF) && this._samplers.push(FF), this._textures[FF] = WF, this
        }
        setFloat(FF, WF) {
          return this._checkUniform(FF), this._floats[FF] = WF, this
        }
        setInt(FF, WF) {
          return this._checkUniform(FF), this._ints[FF] = WF, this
        }
        setFloats(FF, WF) {
          return this._checkUniform(FF), this._floatsArrays[FF] = WF, this
        }
        setColor3(FF, WF) {
          return this._checkUniform(FF), this._colors3[FF] = WF, this
        }
        setColor4(FF, WF) {
          return this._checkUniform(FF), this._colors4[FF] = WF, this
        }
        setVector2(FF, WF) {
          return this._checkUniform(FF), this._vectors2[FF] = WF, this
        }
        setVector3(FF, WF) {
          return this._checkUniform(FF), this._vectors3[FF] = WF, this
        }
        setVector4(FF, WF) {
          return this._checkUniform(FF), this._vectors4[FF] = WF, this
        }
        setMatrix(FF, WF) {
          return this._checkUniform(FF), this._matrices[FF] = WF, this
        }
        render(FF) {
          const WF = this.OWF();
          if (!WF) return;
          const SF = this._fullEngine;
          if (SF.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), SF.setState(!1), !this.nodeMaterialSource) {
            for (const FF in this._textures) this._drawWrapper.effect.setTexture(FF, this._textures[FF]);
            for (const FF in this._ints) this._drawWrapper.effect.setInt(FF, this._ints[FF]);
            for (const FF in this._floats) this._drawWrapper.effect.setFloat(FF, this._floats[FF]);
            for (const FF in this._floatsArrays) this._drawWrapper.effect.setArray(FF, this._floatsArrays[FF]);
            for (const FF in this._colors3) this._drawWrapper.effect.setColor3(FF, this._colors3[FF]);
            for (const FF in this._colors4) {
              const WF = this._colors4[FF];
              this._drawWrapper.effect.setFloat4(FF, WF.r, WF.g, WF.b, WF.a)
            }
            for (const FF in this._vectors2) this._drawWrapper.effect.setVector2(FF, this._vectors2[FF]);
            for (const FF in this._vectors3) this._drawWrapper.effect.setVector3(FF, this._vectors3[FF]);
            for (const FF in this._vectors4) this._drawWrapper.effect.setVector4(FF, this._vectors4[FF]);
            for (const FF in this._matrices) this._drawWrapper.effect.setMatrix(FF, this._matrices[FF])
          }
          if (!this._texture || !this._rtWrapper) return;
          SF._enableGPUDebugMarkers && SF._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const CF = SF.currentViewport;
          if (this.isCube)
            for (let AF = 0; AF < 6; AF++) SF.bindFramebuffer(this._rtWrapper, AF, void 0, void 0, !0), SF.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", AF), this.autoClear && SF.clear(WF.clearColor, !0, !1, !1), SF.drawElementsType(uF.c.TriangleFillMode, 0, 6), SF.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let FF = 1;
            this._rtWrapper.is3D ? FF = this._rtWrapper.depth : this._rtWrapper.is2DArray && (FF = this._rtWrapper.layers);
            for (let CF = 0; CF < FF; CF++) {
              if (SF.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, CF), SF.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== FF ? CF / (FF - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", CF);
                for (const FF in this._textures) this._drawWrapper.effect.setTexture(FF, this._textures[FF])
              }
              this.autoClear && SF.clear(WF.clearColor, !0, !1, !1), SF.drawElementsType(uF.c.TriangleFillMode, 0, 6), SF.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          CF && SF.setViewport(CF), this.isCube && SF.generateMipMapsForCubemap(this._texture, !0), SF._enableGPUDebugMarkers && SF._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const WF = this.getSize(),
            SF = new FF(this.name, WF.width, this._fragment, this.OWF(), this._fallbackTexture, this._generateMipMaps);
          return SF.hasAlpha = this.hasAlpha, SF.level = this.level, SF.coordinatesMode = this.coordinatesMode, SF
        }
        dispose() {
          const FF = this.OWF();
          if (!FF) return;
          const WF = FF.proceduralTextures.indexOf(this);
          WF >= 0 && FF.proceduralTextures.splice(WF, 1);
          const SF = this._vertexBuffers[yW.k.PositionKind];
          SF && (SF.dispose(), this._vertexBuffers[yW.k.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const SF = "function" === typeof Symbol && Symbol.metadata ? Object.create(dF[Symbol.metadata] ?? null) : void 0;
        WF = [(0, mW.H)()], CF = [(0, mW.H)()], AF = [(0, mW.H)()], hF = [(0, mW.H)()], bW = [(0, mW.H)()], (0, LF.j)(FF, null, bW, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: FF => "refreshRate" in FF,
            get: FF => FF.refreshRate
          },
          metadata: SF
        }, null, PF), (0, LF.j)(null, null, WF, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: FF => "isEnabled" in FF,
            get: FF => FF.isEnabled,
            set: (FF, WF) => {
              FF.isEnabled = WF
            }
          },
          metadata: SF
        }, RF, iW), (0, LF.j)(null, null, CF, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: FF => "autoClear" in FF,
            get: FF => FF.autoClear,
            set: (FF, WF) => {
              FF.autoClear = WF
            }
          },
          metadata: SF
        }, eF, EF), (0, LF.j)(null, null, AF, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: FF => "_generateMipMaps" in FF,
            get: FF => FF._generateMipMaps,
            set: (FF, WF) => {
              FF._generateMipMaps = WF
            }
          },
          metadata: SF
        }, QF, gW), (0, LF.j)(null, null, hF, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: FF => "_size" in FF,
            get: FF => FF._size,
            set: (FF, WF) => {
              FF._size = WF
            }
          },
          metadata: SF
        }, tW, TF), SF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SF
        })
      })(), FF
    })();

    function AS(FF) {
      return "texture" in FF
    }

    function uS(FF) {
      return "value" in FF
    }
    async function hS(FF, WF, CF) {
      const AF = [WF.red, WF.green, WF.blue, WF.alpha],
        uF = [],
        hF = [];
      for (let SF = 0; SF < 4; SF++) {
        const FF = AF[SF];
        if (FF)
          if (AS(FF)) {
            if (FF.sourceChannel < 0 || FF.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let WF = uF.indexOf(FF.texture); - 1 === WF && (WF = uF.length, uF.push(FF.texture)), hF[SF] = WF
          } else {
            if (!uS(FF)) throw new Error("Invalid channel input configuration");
            if (FF.value < 0 || FF.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            hF[SF] = -1
          }
        else hF[SF] = -1
      }
      let bW = WF.outputSize;
      if (!bW && uF.length > 0) {
        let FF = 0;
        for (const WF of uF) {
          const SF = WF.getSize(),
            CF = Math.max(SF.width, SF.height);
          CF > FF && (FF = CF, bW = SF.width === SF.height ? FF : SF)
        }
      }
      bW = bW || 512;
      const dF = [],
        PF = new Set;
      for (let SF = 0; SF < 4; SF++) {
        const FF = AF[SF],
          WF = ["RED", "GREEN", "BLUE", "ALPHA"][SF];
        if (FF && AS(FF)) {
          dF.push(`${WF}_FROM_TEXTURE`);
          const FF = hF[SF];
          PF.add(FF)
        }
      }
      PF.forEach((FF => {
        dF.push(`USE_TEXTURE${FF}`)
      }));
      const RF = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: CF.sC().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            CF.sC().isWebGPU ? await Promise.all([SF.e(359).then((() => SF(59545)))]) : await Promise.all([SF.e(360).then((() => SF(59548)))])
          },
          skipSceneRegistration: !0
        },
        iW = new CS(FF, bW, "textureMerger", CF, RF);
      iW.refreshRate = -1, iW.defines = dF.length > 0 ? "#define " + dF.join("\n#define ") + "\n" : "";
      for (let SF = 0; SF < uF.length; SF++) eF = uF[SF], (EF = iW).uOffset = eF.uOffset, EF.vOffset = eF.vOffset, EF.uScale = eF.uScale, EF.vScale = eF.vScale, EF.uAng = eF.uAng, EF.vAng = eF.vAng, EF.wAng = eF.wAng, EF.uRotationCenter = eF.uRotationCenter, EF.vRotationCenter = eF.vRotationCenter, iW.setTexture(`inputTexture${SF}`, uF[SF]);
      var eF, EF;
      for (let SF = 0; SF < 4; SF++) {
        const FF = AF[SF],
          WF = ["red", "green", "blue", "alpha"][SF];
        if (FF && AS(FF)) {
          const CF = hF[SF];
          iW.setInt(`${WF}TextureIndex`, CF), iW.setInt(`${WF}SourceChannel`, FF.sourceChannel)
        } else {
          let CF;
          CF = FF && uS(FF) ? FF.value : 3 === SF ? 1 : 0, iW.setFloat(`${WF}ConstantValue`, CF)
        }
      }
      return await new Promise(((FF, WF) => {
        iW.executeWhenReady((() => {
          try {
            iW.render(), FF(iW)
          } catch (SF) {
            WF(SF instanceof Error ? SF : new Error(String(SF)))
          }
        }))
      }))
    }

    function bC(FF, WF) {
      return {
        texture: FF,
        sourceChannel: WF
      }
    }

    function dS(FF) {
      return {
        value: FF
      }
    }

    function PS(FF, WF, SF, CF) {
      return {
        red: FF,
        green: WF,
        blue: SF,
        alpha: CF
      }
    }
    var RS = SF(37790),
      iC = SF(37893),
      eS = SF(35634),
      ES = SF(37953),
      QS = SF(37886);
    class rC {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class gC extends RS.d {
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
        return !!this._options?.enableMultiview || this.Im > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new rC;
        super(null), void 0 === FF.deterministicLockstep && (FF.deterministicLockstep = !1), void 0 !== FF.timeStep && (this._timeStep = FF.timeStep), void 0 === FF.lockstepMaxSteps && (FF.lockstepMaxSteps = 4), this._options = FF, eS.c.SetMatrixPrecision(!!FF.useHighPrecisionMatrix), this._caps = {
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
        }, FF.enableMultiview && (this._caps.multiview = {
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
        }, FF.renderingCanvas && (this._renderingCanvas = FF.renderingCanvas), OF.b.Log(`Babylon.js v${RS.d.Version} - Null engine`);
        const WF = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (WF.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (WF.Blob = function() {})
      }
      createVertexBuffer(FF) {
        const WF = new iC.d;
        return WF.references = 1, WF
      }
      createIndexBuffer(FF) {
        const WF = new iC.d;
        return WF.references = 1, WF
      }
      clear(FF, WF, SF) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(FF, WF, SF) {
        this._cachedViewport = FF
      }
      createUniformBuffer(FF) {
        const WF = new iC.d;
        return WF.references = 1, WF.ZF = FF instanceof Array ? FF.length * Float32Array.BYTES_PER_ELEMENT : FF.byteLength, WF
      }
      createDynamicUniformBuffer(FF) {
        return this.createUniformBuffer(FF)
      }
      updateUniformBuffer(FF, WF, SF, CF) {}
      bindUniformBufferBase(FF, WF, SF) {}
      bindUniformBlock(FF, WF, SF) {}
      createShaderProgram(FF, WF, SF, CF, AF) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(FF, WF) {
        return []
      }
      getAttributes(FF, WF) {
        return []
      }
      bindSamplers(FF) {
        this._currentEffect = null
      }
      enableEffect(FF) {
        FF = null !== FF && (0, QS.e)(FF) ? FF.effect : FF, this._currentEffect = FF, FF && (FF.onBind && FF.onBind(FF), FF._onBindObservable && FF._onBindObservable.notifyObservers(FF))
      }
      setStateCullFaceType(FF, WF) {}
      setState(FF) {}
      setIntArray(FF, WF) {
        return !0
      }
      setIntArray2(FF, WF) {
        return !0
      }
      setIntArray3(FF, WF) {
        return !0
      }
      setIntArray4(FF, WF) {
        return !0
      }
      setFloatArray(FF, WF) {
        return !0
      }
      setFloatArray2(FF, WF) {
        return !0
      }
      setFloatArray3(FF, WF) {
        return !0
      }
      setFloatArray4(FF, WF) {
        return !0
      }
      setArray(FF, WF) {
        return !0
      }
      setArray2(FF, WF) {
        return !0
      }
      setArray3(FF, WF) {
        return !0
      }
      setArray4(FF, WF) {
        return !0
      }
      setMatrices(FF, WF) {
        return !0
      }
      setMatrix3x3(FF, WF) {
        return !0
      }
      setMatrix2x2(FF, WF) {
        return !0
      }
      setFloat(FF, WF) {
        return !0
      }
      setFloat2(FF, WF, SF) {
        return !0
      }
      setFloat3(FF, WF, SF, CF) {
        return !0
      }
      setBool(FF, WF) {
        return !0
      }
      setFloat4(FF, WF, SF, CF, AF) {
        return !0
      }
      setAlphaMode(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[SF] !== FF && (this.alphaState.setAlphaBlend(0 !== FF, 0), WF || this.setDepthWrite(0 === FF), this._alphaMode[SF] = FF)
      }
      bindBuffers(FF, WF, SF) {}
      wipeCaches(FF) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, FF && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(FF, WF, SF, CF) {}
      drawElementsType(FF, WF, SF, CF) {}
      drawArraysType(FF, WF, SF, CF) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(FF) {}
      createTexture(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          hF = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          bW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const dF = new mS.b(this, 1),
          PF = String(FF);
        return dF.url = PF, dF.generateMipMaps = !WF, dF.samplingMode = AF, dF.invertY = SF, dF.baseWidth = this._options.textureSize, dF.baseHeight = this._options.textureSize, dF.width = this._options.textureSize, dF.height = this._options.textureSize, bW && (dF.format = bW), hF && (dF._buffer = hF), dF.isReady = !0, uF && setTimeout((() => {
          uF(dF)
        })), this._internalTexturesCache.push(dF), dF
      }
      _createHardwareRenderTargetWrapper(FF, WF, SF) {
        const CF = new ES.d(FF, WF, SF, this);
        return this._renderTargetWrapperCache.push(CF), CF
      }
      createRenderTargetTexture(FF, WF) {
        const SF = this._createHardwareRenderTargetWrapper(!1, !1, FF),
          CF = {};
        void 0 !== WF && "object" === typeof WF ? (CF.generateMipMaps = WF.generateMipMaps, CF.generateDepthBuffer = void 0 === WF.generateDepthBuffer || WF.generateDepthBuffer, CF.generateStencilBuffer = CF.generateDepthBuffer && WF.generateStencilBuffer, CF.type = void 0 === WF.type ? 0 : WF.type, CF.samplingMode = void 0 === WF.samplingMode ? 3 : WF.samplingMode) : (CF.generateMipMaps = WF, CF.generateDepthBuffer = !0, CF.generateStencilBuffer = !1, CF.type = 0, CF.samplingMode = 3);
        const AF = new mS.b(this, 5);
        SF.setTexture(AF);
        const uF = FF.width || FF,
          hF = FF.height || FF;
        return SF._generateDepthBuffer = CF.generateDepthBuffer, SF._generateStencilBuffer = !!CF.generateStencilBuffer, AF.baseWidth = uF, AF.baseHeight = hF, AF.width = uF, AF.height = hF, AF.isReady = !0, AF.samples = 1, AF.generateMipMaps = !!CF.generateMipMaps, AF.samplingMode = CF.samplingMode, AF.type = CF.type, this._internalTexturesCache.push(AF), SF
      }
      createMultiviewRenderTargetTexture(FF, WF) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const SF = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: FF,
            height: WF
          }),
          CF = new mS.b(this, 5, !0);
        return CF.baseWidth = FF, CF.baseHeight = WF, CF.width = FF, CF.height = WF, CF.isMultiview = !0, CF.isReady = !0, CF.format = 5, CF.samples = 1, SF.setTextures(CF), SF
      }
      bindMultiviewFramebuffer(FF) {
        this.bindFramebuffer(FF, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(FF, WF) {
        const SF = this._createHardwareRenderTargetWrapper(!1, !0, FF),
          CF = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...WF
          };
        CF.generateStencilBuffer = CF.generateDepthBuffer && CF.generateStencilBuffer, (1 !== CF.type || this._caps.textureFloatLinearFiltering) && (2 !== CF.type || this._caps.textureHalfFloatLinearFiltering) || (CF.samplingMode = 1), SF._generateDepthBuffer = CF.generateDepthBuffer, SF._generateStencilBuffer = !!CF.generateStencilBuffer;
        const AF = new mS.b(this, 5);
        return AF.baseWidth = FF, AF.baseHeight = FF, AF.width = FF, AF.height = FF, AF.isReady = !0, AF.isCube = !0, AF.samples = 1, AF.generateMipMaps = !!CF.generateMipMaps, AF.samplingMode = CF.samplingMode, AF.type = CF.type, this._internalTexturesCache.push(AF), SF
      }
      updateTextureSamplingMode(FF, WF) {
        WF.samplingMode = FF
      }
      createRawTexture(FF, WF, SF, CF, AF, uF, hF) {
        let bW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          dF = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          PF = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const RF = new mS.b(this, 3);
        return RF.baseWidth = WF, RF.baseHeight = SF, RF.width = WF, RF.height = SF, RF.format = CF, RF.generateMipMaps = AF, RF.samplingMode = hF, RF.invertY = uF, RF._compression = bW, RF.type = dF, RF._useSRGBBuffer = PF, this._doNotHandleContextLost || (RF._bufferView = FF), RF
      }
      updateRawTexture(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          hF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        FF && (FF._bufferView = WF, FF.format = SF, FF.invertY = CF, FF._compression = AF, FF.type = uF, FF._useSRGBBuffer = hF)
      }
      bindFramebuffer(FF, WF, SF, CF, AF) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = FF, this._currentFramebuffer = null, this._cachedViewport && !AF && this.setViewport(this._cachedViewport, SF, CF)
      }
      unBindFramebuffer(FF) {
        let WF = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, WF && WF(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(FF) {
        const WF = new iC.d;
        return WF.references = 1, WF.ZF = 1, WF
      }
      updateDynamicTexture(FF, WF, SF) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(FF) {}
      updateDynamicIndexBuffer(FF, WF) {}
      updateDynamicVertexBuffer(FF, WF, SF, CF) {}
      _bindTextureDirectly(FF, WF) {
        return this._boundTexturesCache[this._activeChannel] !== WF && (this._boundTexturesCache[this._activeChannel] = WF, !0)
      }
      _bindTexture(FF, WF) {
        FF < 0 || this._bindTextureDirectly(0, WF)
      }
      _deleteBuffer(FF) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(FF) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(FF, WF, SF, CF, AF) {}
      _uploadDataToTextureDirectly(FF, WF) {}
      _uploadArrayBufferViewToTexture(FF, WF) {}
      _uploadImageToTexture(FF, WF) {}
    }
    SF(38006), SF(38043), SF(38004);
    async function tC(FF) {
      const WF = FF.getInternalTexture();
      if (!WF || 1 !== WF.source) return null;
      if (WF.invertY) {
        const WF = FF.OWF()?.sC();
        if (!(WF instanceof gC)) return null
      }
      const SF = WF._buffer;
      let CF, uF = FF.mimeType;
      try {
        SF ? ArrayBuffer.isView(SF) ? CF = SF.buffer.slice(SF.byteOffset, SF.byteOffset + SF.byteLength) : SF instanceof ArrayBuffer ? CF = SF : SF instanceof Blob ? (CF = await SF.arrayBuffer(), uF = SF.type || uF) : "string" === typeof SF ? (CF = await AF.Tools.LoadFileAsync(SF), uF = (0, dF.b)(SF) || uF) : "undefined" !== typeof HTMLImageElement && SF instanceof HTMLImageElement && (CF = await AF.Tools.LoadFileAsync(SF.src), uF = (0, dF.b)(SF.src) || uF) : (CF = await AF.Tools.LoadFileAsync(WF.url), uF = (0, dF.b)(WF.url) || uF)
      } catch {
        return null
      }
      if (CF && !uF && WF.url) {
        const FF = WF.url.match(/^data:([^;,]+)/);
        uF = FF ? FF[1] : (0, dF.b)(WF.url)
      }
      return CF && uF ? {
        data: CF,
        mimeType: uF
      } : null
    }
    const TS = 1e-6,
      aC = new gW.Color3(.04, .04, .04),
      kC = 1024,
      qC = gW.Color3.White(),
      VS = gW.Color3.BlackReadOnly;

    function NS(FF) {
      switch (FF) {
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

    function DS(FF, WF, SF) {
      if (WF < aC.r) return 0;
      const CF = aC.r,
        AF = FF * SF / (1 - aC.r) + WF - 2 * aC.r,
        uF = AF * AF - 4 * CF * (aC.r - WF);
      return aW.Clamp((-AF + Math.sqrt(uF)) / (2 * CF), 0, 1)
    }

    function LS(FF) {
      const WF = FF.diffuseColor.toLinearSpace(FF.OWF().sC().useExactSrgbConversions).scale(.5),
        SF = FF.alpha,
        CF = function(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new fF.n(0, 1),
            SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new fF.n(0, .1),
            CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new fF.n(0, .1),
            AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new fF.n(1300, .1);
          return function(FF, WF, SF, CF, AF) {
            return (1 - FF) * (1 - FF) * (1 - FF) * WF + 3 * (1 - FF) * (1 - FF) * FF * SF + 3 * (1 - FF) * FF * FF * CF + FF * FF * FF * AF
          }(Math.pow(FF / AF.x, .333333), WF.y, SF.y, CF.y, AF.y)
        }(aW.Clamp(FF.specularPower, 0, kC));
      return {
        baseColorFactor: [WF.r, WF.g, WF.b, SF],
        metallicFactor: 0,
        roughnessFactor: CF
      }
    }

    function mC(FF, WF) {
      WF.needAlphaBlending() ? FF.alphaMode = "BLEND" : WF.needAlphaTesting() && (FF.alphaMode = "MASK", FF.alphaCutoff = WF.alphaCutOff)
    }

    function OS(FF, WF, SF) {
      const CF = new Uint8Array(FF * WF * 4);
      for (let AF = 0; AF < CF.length; AF += 4) CF[AF] = CF[AF + 1] = CF[AF + 2] = CF[AF + 3] = 255;
      return VF.b.CreateRGBATexture(CF, FF, WF, SF)
    }

    function xC(FF) {
      if (FF instanceof Uint8Array) {
        const WF = FF.length,
          SF = new Float32Array(FF.length);
        for (let CF = 0; CF < WF; ++CF) SF[CF] = FF[CF] / 255;
        return SF
      }
      if (FF instanceof Float32Array) return FF;
      throw new Error("Unsupported pixel format!")
    }
    class ZS {
      constructor(FF) {
        this._exporter = FF, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(FF) {
        return FF ? this._textureMap.get(FF.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(FF, WF) {
        const SF = LS(FF),
          CF = {
            name: FF.name
          };
        if (null == FF.backFaceCulling || FF.backFaceCulling || (FF.twoSidedLighting || AF.Tools.Warn(FF.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), CF.doubleSided = !0), WF) {
          const WF = [],
            AF = FF.diffuseTexture;
          AF && WF.push(this.exportTextureAsync(AF).then((FF => {
            FF && (SF.baseColorTexture = FF)
          })));
          const uF = FF.bumpTexture;
          uF && WF.push(this.exportTextureAsync(uF).then((FF => {
            FF && (CF.normalTexture = FF, 1 !== uF.level && (CF.normalTexture.scale = uF.level))
          })));
          const hF = FF.emissiveTexture;
          hF && (CF.emissiveFactor = [1, 1, 1], WF.push(this.exportTextureAsync(hF).then((FF => {
            FF && (CF.emissiveTexture = FF)
          }))));
          const bW = FF.ambientTexture;
          bW && WF.push(this.exportTextureAsync(bW).then((FF => {
            if (FF) {
              const WF = {
                index: FF.index
              };
              CF.occlusionTexture = WF
            }
          }))), WF.length > 0 && (this._exporter._materialNeedsUVsSet.add(FF), await Promise.all(WF))
        }(FF.alpha < 1 || FF.opacityTexture) && (FF.alphaMode === NF.c.ALPHA_COMBINE ? CF.alphaMode = "BLEND" : AF.Tools.Warn(FF.name + ": glTF 2.0 does not support alpha mode: " + FF.alphaMode.toString())), FF.emissiveColor && !FF.emissiveColor.equalsWithEpsilon(VS, TS) && (CF.emissiveFactor = FF.emissiveColor.kRF()), CF.pbrMetallicRoughness = SF, mC(CF, FF), await this._finishMaterialAsync(CF, FF);
        const uF = this._exporter._materials;
        return uF.push(CF), uF.length - 1
      }
      async _finishMaterialAsync(FF, WF) {
        const SF = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", FF, WF),
          CF = [];
        for (const AF of SF) CF.push(this.exportTextureAsync(AF));
        await Promise.all(CF), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", FF, WF)
      }
      _resizeTexturesToSameDimensions(FF, WF, SF) {
        const CF = FF ? FF.getSize() : {
            width: 0,
            height: 0
          },
          AF = WF ? WF.getSize() : {
            width: 0,
            height: 0
          };
        let uF, hF;
        return CF.width < AF.width ? (uF = FF && FF instanceof qW.d ? kW.j.CreateResizedCopy(FF, AF.width, AF.height, !0) : OS(AF.width, AF.height, SF), hF = WF) : CF.width > AF.width ? (hF = WF && WF instanceof qW.d ? kW.j.CreateResizedCopy(WF, CF.width, CF.height, !0) : OS(CF.width, CF.height, SF), uF = FF) : (uF = FF, hF = WF), {
          texture1: uF,
          texture2: hF
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(FF, WF, SF) {
        const CF = new Array;
        if (!FF && !WF) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const AF = FF ? FF.OWF() : WF ? WF.OWF() : null;
        if (AF) {
          const uF = this._resizeTexturesToSameDimensions(FF, WF, AF),
            hF = uF.texture1?.getSize();
          let bW, dF;
          const PF = hF.width,
            RF = hF.height,
            iW = await uF.texture1.readPixels(),
            eF = await uF.texture2.readPixels();
          if (!iW) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (bW = xC(iW), !eF) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          dF = xC(eF);
          const EF = dF.byteLength,
            QF = new Uint8Array(EF),
            rW = new Uint8Array(EF),
            tW = 4,
            TF = new gW.Color3(0, 0, 0);
          let aW = 0,
            kW = 0;
          for (let FF = 0; FF < RF; ++FF)
            for (let WF = 0; WF < PF; ++WF) {
              const CF = (PF * FF + WF) * tW,
                hF = {
                  diffuseColor: new gW.Color3(bW[CF], bW[CF + 1], bW[CF + 2]).toLinearSpace(AF.sC().useExactSrgbConversions).multiply(SF.diffuseColor),
                  specularColor: new gW.Color3(dF[CF], dF[CF + 1], dF[CF + 2]).toLinearSpace(AF.sC().useExactSrgbConversions).multiply(SF.specularColor),
                  glossiness: dF[CF + 3] * SF.glossiness
                },
                RF = this._convertSpecularGlossinessToMetallicRoughness(hF);
              TF.r = Math.max(TF.r, RF.baseColor.r), TF.g = Math.max(TF.g, RF.baseColor.g), TF.b = Math.max(TF.b, RF.baseColor.b), aW = Math.max(aW, RF.metallic), kW = Math.max(kW, RF.roughness), rW[CF] = 255 * RF.baseColor.r, rW[CF + 1] = 255 * RF.baseColor.g, rW[CF + 2] = 255 * RF.baseColor.b, rW[CF + 3] = uF.texture1.hasAlpha ? 255 * bW[CF + 3] : 255, QF[CF] = 0, QF[CF + 1] = 255 * RF.roughness, QF[CF + 2] = 255 * RF.metallic, QF[CF + 3] = 255
            }
          const qW = {
            baseColor: TF,
            metallic: aW,
            roughness: kW
          };
          let VF = !1,
            NF = !1;
          for (let FF = 0; FF < RF; ++FF)
            for (let WF = 0; WF < PF; ++WF) {
              const SF = (PF * FF + WF) * tW;
              rW[SF] /= qW.baseColor.r > TS ? qW.baseColor.r : 1, rW[SF + 1] /= qW.baseColor.g > TS ? qW.baseColor.g : 1, rW[SF + 2] /= qW.baseColor.b > TS ? qW.baseColor.b : 1;
              const CF = gW.Color3.FromInts(rW[SF], rW[SF + 1], rW[SF + 2]).toGammaSpace(AF.sC().useExactSrgbConversions);
              rW[SF] = 255 * CF.r, rW[SF + 1] = 255 * CF.g, rW[SF + 2] = 255 * CF.b, CF.equalsWithEpsilon(qC, TS) || (NF = !0), QF[SF + 1] /= qW.roughness > TS ? qW.roughness : 1, QF[SF + 2] /= qW.metallic > TS ? qW.metallic : 1;
              gW.Color3.FromInts(255, QF[SF + 1], QF[SF + 2]).equalsWithEpsilon(qC, TS) || (VF = !0)
            }
          return VF && CF.push((0, DF.EncodeImageAsync)(QF, PF, RF).then((FF => {
            qW.metallicRoughnessTextureData = FF
          }))), NF && CF.push((0, DF.EncodeImageAsync)(rW, PF, RF).then((FF => {
            qW.baseColorTextureData = FF
          }))), await Promise.all(CF).then((() => qW))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(FF) {
        const WF = this._getPerceivedBrightness(FF.diffuseColor),
          SF = this._getPerceivedBrightness(FF.specularColor),
          CF = 1 - this._getMaxComponent(FF.specularColor),
          AF = DS(WF, SF, CF),
          uF = FF.diffuseColor.scale(CF / (1 - aC.r) / Math.max(1 - AF, TS)),
          hF = FF.specularColor.subtract(aC.scale(1 - AF)).scale(1 / Math.max(AF, TS));
        let bW = gW.Color3.Lerp(uF, hF, AF * AF);
        bW = bW.clampToRef(0, 1, bW);
        return {
          baseColor: bW,
          metallic: AF,
          roughness: 1 - FF.glossiness
        }
      }
      _getPerceivedBrightness(FF) {
        return Math.sqrt(.299 * FF.r * FF.r + .587 * FF.g * FF.g + .114 * FF.b * FF.b)
      }
      _getMaxComponent(FF) {
        return Math.max(FF.r, Math.max(FF.g, FF.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
        const PF = [],
          RF = {
            baseColor: FF,
            metallic: WF,
            roughness: SF
          };
        if (dF)
          if (hF instanceof pW) {
            if (hF.geometryOpacityTexture) {
              const FF = CF && CF.getInternalTexture() ? CF.getInternalTexture().uniqueId : 0,
                WF = hF.geometryOpacityTexture && hF.geometryOpacityTexture.getInternalTexture() ? hF.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                SF = Number(`${FF}${WF}`),
                AF = this._textureMap.get(SF);
              AF ? bW.baseColorTexture = AF : PF.push(hS("baseColorOpacityTexture", PS(CF ? bC(CF, 0) : dS(1), CF ? bC(CF, 1) : dS(1), CF ? bC(CF, 2) : dS(1), bC(hF.geometryOpacityTexture, 0)), hF.OWF()).then((async FF => {
                const WF = await this.exportTextureAsync(FF, SF);
                WF && (bW.baseColorTexture = WF)
              })))
            } else CF && PF.push(this.exportTextureAsync(CF).then((FF => {
              FF && (bW.baseColorTexture = FF)
            })));
            if (hF._useMetallicFromMetallicTextureBlue && AF) PF.push(this.exportTextureAsync(AF).then((FF => {
              FF && (bW.metallicRoughnessTexture = FF)
            })));
            else if (uF || AF) {
              const FF = AF && AF.getInternalTexture() ? AF.getInternalTexture().uniqueId : 0,
                WF = uF && uF.getInternalTexture() ? uF.getInternalTexture().uniqueId : 0,
                SF = Number(`${FF}${WF}`),
                CF = this._textureMap.get(SF);
              CF ? bW.metallicRoughnessTexture = CF : PF.push(hS("MetalRoughTexture", PS(hF.ambientOcclusionTexture ? bC(hF.ambientOcclusionTexture, 0) : dS(1), uF ? bC(uF, 0) : dS(1), AF ? bC(AF, 0) : dS(1)), hF.OWF()).then((async FF => {
                const WF = await this.exportTextureAsync(FF, SF);
                WF && (bW.metallicRoughnessTexture = WF)
              })))
            }
          } else CF && PF.push(this.exportTextureAsync(CF).then((FF => {
            FF && (bW.baseColorTexture = FF)
          }))), AF && PF.push(this.exportTextureAsync(AF).then((FF => {
            FF && (bW.metallicRoughnessTexture = FF)
          })));
        return PF.length > 0 && (this._exporter._materialNeedsUVsSet.add(hF), await Promise.all(PF)), RF
      }
      _getTextureSampler(FF) {
        const WF = {};
        if (!FF || !(FF instanceof qW.d)) return WF;
        const SF = this._getGLTFTextureWrapMode(FF.wrapU);
        10497 !== SF && (WF.wrapS = SF);
        const CF = this._getGLTFTextureWrapMode(FF.wrapV);
        switch (10497 !== CF && (WF.wrapT = CF), FF.samplingMode) {
          case qW.d.LINEAR_LINEAR:
            WF.magFilter = 9729, WF.minFilter = 9729;
            break;
          case qW.d.LINEAR_NEAREST:
            WF.magFilter = 9729, WF.minFilter = 9728;
            break;
          case qW.d.NEAREST_LINEAR:
            WF.magFilter = 9728, WF.minFilter = 9729;
            break;
          case qW.d.NEAREST_LINEAR_MIPLINEAR:
            WF.magFilter = 9728, WF.minFilter = 9987;
            break;
          case qW.d.NEAREST_NEAREST:
            WF.magFilter = 9728, WF.minFilter = 9728;
            break;
          case qW.d.NEAREST_LINEAR_MIPNEAREST:
            WF.magFilter = 9728, WF.minFilter = 9985;
            break;
          case qW.d.LINEAR_NEAREST_MIPNEAREST:
            WF.magFilter = 9729, WF.minFilter = 9984;
            break;
          case qW.d.LINEAR_NEAREST_MIPLINEAR:
            WF.magFilter = 9729, WF.minFilter = 9986;
            break;
          case qW.d.NEAREST_NEAREST_MIPLINEAR:
            WF.magFilter = 9728, WF.minFilter = 9986;
            break;
          case qW.d.LINEAR_LINEAR_MIPLINEAR:
            WF.magFilter = 9729, WF.minFilter = 9987;
            break;
          case qW.d.LINEAR_LINEAR_MIPNEAREST:
            WF.magFilter = 9729, WF.minFilter = 9985;
            break;
          case qW.d.NEAREST_NEAREST_MIPNEAREST:
            WF.magFilter = 9728, WF.minFilter = 9984
        }
        return WF
      }
      _getGLTFTextureWrapMode(FF) {
        switch (FF) {
          case qW.d.WRAP_ADDRESSMODE:
            return 10497;
          case qW.d.CLAMP_ADDRESSMODE:
            return 33071;
          case qW.d.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return AF.Tools.Error(`Unsupported Texture Wrap Mode ${FF}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(FF, WF, SF) {
        const CF = {
            diffuseColor: FF._albedoColor,
            specularColor: FF._reflectivityColor,
            glossiness: FF._microSurface
          },
          AF = FF._albedoTexture,
          uF = FF._reflectivityTexture,
          hF = FF._useMicroSurfaceFromReflectivityMapAlpha;
        if (uF && !hF) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((AF || uF) && SF) {
          this._exporter._materialNeedsUVsSet.add(FF);
          const SF = this._exportTextureSampler(AF || uF),
            hF = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(AF, uF, CF),
            bW = this._exporter._textures;
          if (hF.baseColorTextureData) {
            const FF = await this._exportImageAsync(`baseColor${bW.length}`, hF.baseColorTextureData);
            WF.baseColorTexture = this._exportTextureInfo(FF, SF, AF?.coordinatesIndex)
          }
          if (hF.metallicRoughnessTextureData) {
            const FF = await this._exportImageAsync(`metallicRoughness${bW.length}`, hF.metallicRoughnessTextureData);
            WF.metallicRoughnessTexture = this._exportTextureInfo(FF, SF, uF?.coordinatesIndex)
          }
          return hF
        }
        return this._convertSpecularGlossinessToMetallicRoughness(CF)
      }
      async exportPBRMaterialAsync(FF, WF) {
        const SF = {},
          CF = {
            name: FF.name
          },
          AF = FF.isMetallicWorkflow();
        if (AF) {
          const WF = FF._albedoColor,
            CF = FF.alpha;
          WF && (SF.baseColorFactor = [WF.r, WF.g, WF.b, CF])
        }
        const uF = AF ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(FF._albedoColor, FF._metallic, FF._roughness, FF._albedoTexture, FF._metallicTexture, FF._metallicTexture, FF, SF, WF) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(FF, SF, WF);
        await this._setMetallicRoughnessPbrMaterialAsync(uF, FF, CF, SF, WF), await this._finishMaterialAsync(CF, FF);
        const hF = this._exporter._materials;
        return hF.push(CF), hF.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(FF, WF, SF, CF, uF) {
        if (mC(SF, WF), FF.baseColor.equalsWithEpsilon(qC, TS) && aW.WithinEpsilon(WF.alpha, 1, TS) || (CF.baseColorFactor = [FF.baseColor.r, FF.baseColor.g, FF.baseColor.b, WF.alpha]), null != FF.metallic && 1 !== FF.metallic && (CF.metallicFactor = FF.metallic), null != FF.roughness && 1 !== FF.roughness && (CF.roughnessFactor = FF.roughness), null == WF.backFaceCulling || WF.backFaceCulling || (WF._twoSidedLighting || AF.Tools.Warn(WF.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), SF.doubleSided = !0), uF) {
          const FF = [],
            AF = WF instanceof VW ? WF._bumpTexture : WF.geometryNormalTexture;
          AF && FF.push(this.exportTextureAsync(AF).then((FF => {
            FF && (SF.normalTexture = FF, 1 !== AF.level && (SF.normalTexture.scale = AF.level))
          })));
          const uF = WF instanceof VW ? WF._ambientTexture : WF.ambientOcclusionTexture;
          uF && FF.push(new Promise((async FF => {
            if (WF instanceof pW && CF.metallicRoughnessTexture) {
              const WF = this._exportTextureSampler(uF),
                SF = this._exporter._textures[CF.metallicRoughnessTexture.index].source,
                AF = this._exportTextureInfo(SF, WF, uF.coordinatesIndex);
              return this._textureMap.set(uF.uniqueId, AF), this._exporter._extensionsPostExportTextures("exporter", AF, uF), FF(AF)
            }
            return FF(await this.exportTextureAsync(uF))
          })).then((async FF => {
            if (FF) {
              const CF = {
                index: FF.index,
                texCoord: FF.texCoord,
                extensions: FF.extensions
              };
              SF.occlusionTexture = CF, CF.strength = WF instanceof VW ? WF._ambientTextureStrength : WF.ambientOcclusionTexture.level
            }
          })));
          const hF = WF instanceof VW ? WF._emissiveTexture : WF.emissionColorTexture;
          hF && FF.push(this.exportTextureAsync(hF).then((FF => {
            FF && (SF.emissiveTexture = FF)
          }))), FF.length > 0 && (this._exporter._materialNeedsUVsSet.add(WF), await Promise.all(FF))
        }
        const hF = WF instanceof VW ? WF._emissiveColor : WF.emissionColor;
        hF.equalsWithEpsilon(VS, TS) || (SF.emissiveFactor = hF.kRF()), SF.pbrMetallicRoughness = CF
      }
      async exportOpenPBRMaterialAsync(FF, WF) {
        const SF = {},
          CF = {
            name: FF.name
          },
          AF = FF.baseColor,
          uF = FF.geometryOpacity;
        AF && (SF.baseColorFactor = [AF.r, AF.g, AF.b, uF]);
        const hF = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(FF.baseColor, FF.baseMetalness, FF.specularRoughness, FF.baseColorTexture, FF.baseMetalnessTexture, FF.specularRoughnessTexture, FF, SF, WF);
        await this._setMetallicRoughnessPbrMaterialAsync(hF, FF, CF, SF, WF), await this._finishMaterialAsync(CF, FF);
        const bW = this._exporter._materials;
        return bW.push(CF), bW.length - 1
      }
      async exportTextureAsync(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = this._textureMap.get(WF ?? FF.uniqueId);
        if (SF) return SF;
        const CF = this._exportTextureSampler(FF),
          AF = await this._exportTextureImageAsync(FF);
        return SF = this._exportTextureInfo(AF, CF, FF.coordinatesIndex), this._textureMap.set(WF ?? FF.uniqueId, SF), this._exporter._extensionsPostExportTextures("exporter", SF, FF), SF
      }
      async _exportTextureImageAsync(FF) {
        const WF = FF.mimeType ?? "none",
          SF = this._internalTextureToImage,
          CF = FF.getInternalTexture().uniqueId;
        SF[CF] = SF[CF] || {};
        let uF = SF[CF][WF];
        return void 0 === uF && (uF = (async () => {
          const SF = await tC(FF);
          if (SF && NS(SF.mimeType) && ("none" === WF || SF.mimeType === WF)) return await this._exportImageAsync(FF.name, new Blob([SF.data], {
            type: SF.mimeType
          }));
          let CF = "image/png";
          "none" !== WF && (NS(WF) ? CF = WF : (CF = "image/png", AF.Tools.Warn(`Unsupported media type: ${WF}. Exporting texture as PNG.`)));
          const uF = FF.getSize(),
            hF = await (0, kW.h)(FF),
            bW = await (0, DF.EncodeImageAsync)(hF, uF.width, uF.height, CF);
          return await this._exportImageAsync(FF.name, bW)
        })(), SF[CF][WF] = uF), await uF
      }
      async _exportImageAsync(FF, WF) {
        const SF = this._exporter._images;
        let CF;
        if (this._exporter._shouldUseGlb) {
          CF = {
            name: FF,
            mimeType: WF.type,
            bufferView: void 0
          };
          const SF = await WF.arrayBuffer(),
            AF = this._exporter._bufferManager.createBufferView(new Uint8Array(SF));
          this._exporter._bufferManager.setBufferView(CF, AF)
        } else {
          const uF = FF.replace(/\.\/|\/|\.\\|\\/g, "_"),
            hF = function(FF) {
              switch (FF) {
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
            }(WF.type);
          let bW = uF + hF;
          SF.some((FF => FF.uri === bW)) && (bW = `${uF}_${AF.Tools.RandomId()}${hF}`), CF = {
            name: FF,
            uri: bW
          }, this._exporter._imageData[bW] = WF
        }
        return SF.push(CF), SF.length - 1
      }
      _exportTextureInfo(FF, WF, SF) {
        const CF = this._exporter._textures;
        let AF = CF.findIndex((SF => SF.sampler == WF && SF.source === FF)); - 1 === AF && (AF = CF.length, CF.push({
          source: FF,
          sampler: WF
        }));
        const uF = {
          index: AF
        };
        return SF && (uF.texCoord = SF), uF
      }
      _exportTextureSampler(FF) {
        const WF = this._getTextureSampler(FF),
          SF = this._exporter._samplers,
          CF = SF.findIndex((FF => FF.minFilter === WF.minFilter && FF.magFilter === WF.magFilter && FF.wrapS === WF.wrapS && FF.wrapT === WF.wrapT));
        return -1 !== CF ? CF : (SF.push(WF), SF.length - 1)
      }
    }
    var oS = SF(38031),
      YS = SF(38176);
    (0, YS.d)();
    var MS = SF(35625);
    const cC = CF.Matrix.Compose(new CF.HC(-1, 1, 1), CF.Quaternion.Identity(), CF.HC.Zero());

    function GS(FF, WF) {
      if (!(FF instanceof iW.c)) return !1;
      if (WF) {
        if (!FF.getWorldMatrix().equalsWithEpsilon(CF.Matrix.IdentityReadOnly, MS.c)) return !1
      } else {
        if (!FF.getWorldMatrix().multiplyToRef(cC, CF.TmpVectors.Matrix[0]).equalsWithEpsilon(CF.Matrix.IdentityReadOnly, MS.c)) return !1
      }
      return !(FF instanceof eF.b && FF.geometry)
    }
    const zC = CF.HC.ZeroReadOnly,
      IS = CF.Quaternion.Identity(),
      fS = CF.HC.OneReadOnly,
      yC = new CF.HC(-1, 1, 1);

    function sS(FF, WF) {
      const {
        byteOffset: SF,
        byteStride: CF,
        type: AF,
        normalized: uF
      } = FF, hF = FF.getSize(), bW = WF.reduce(((FF, WF) => WF.getTotalVertices() > FF ? WF.getTotalVertices() : FF), -Number.MAX_VALUE);
      return {
        byteOffset: SF,
        byteStride: CF,
        componentCount: hF,
        type: AF,
        count: bW * hF,
        normalized: uF,
        totalVertices: bW,
        kind: FF.getKind()
      }
    }

    function nS(FF) {
      switch (FF) {
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

    function HS(FF) {
      switch (FF) {
        case RF.h.PositionKind:
        case RF.h.NormalKind:
        case RF.h.TangentKind:
        case RF.h.ColorKind:
        case RF.h.MatricesIndicesKind:
        case RF.h.MatricesIndicesExtraKind:
        case RF.h.MatricesWeightsKind:
        case RF.h.MatricesWeightsExtraKind:
        case RF.h.UVKind:
        case RF.h.UV2Kind:
        case RF.h.UV3Kind:
        case RF.h.UV4Kind:
        case RF.h.UV5Kind:
        case RF.h.UV6Kind:
          return !0
      }
      return !1
    }

    function KS(FF) {
      const WF = Math.sqrt(FF.x * FF.x + FF.y * FF.y + FF.z * FF.z);
      WF > 0 && (FF.x /= WF, FF.y /= WF, FF.z /= WF)
    }

    function wS(FF) {
      return FF.x *= -1, FF
    }

    function XS(FF) {
      if (FF.x * FF.x + FF.y * FF.y > .5) {
        const WF = Math.abs(FF.x),
          SF = Math.abs(FF.y);
        if (WF > SF) {
          const SF = Math.sign(FF.x);
          FF.x = WF, FF.y *= -SF, FF.z *= -SF, FF.w *= SF
        } else {
          const WF = Math.sign(FF.y);
          FF.x *= -WF, FF.y = SF, FF.z *= WF, FF.w *= -WF
        }
      } else {
        const WF = Math.abs(FF.z),
          SF = Math.abs(FF.w);
        if (WF > SF) {
          const SF = Math.sign(FF.z);
          FF.x *= -SF, FF.y *= SF, FF.z = WF, FF.w *= -SF
        } else {
          const WF = Math.sign(FF.w);
          FF.x *= WF, FF.y *= -WF, FF.z *= -WF, FF.w = SF
        }
      }
      return FF
    }

    function US(FF) {
      FF.FhF(-FF.z, FF.w, FF.x, -FF.y)
    }

    function BS(FF, WF) {
      const SF = CF.HC.FromArrayToRef(WF.translation || [0, 0, 0], 0, CF.TmpVectors.HC[0]),
        AF = CF.Quaternion.FromArrayToRef(WF.rotation || [0, 0, 0, 1], 0, CF.TmpVectors.Quaternion[0]),
        uF = CF.Matrix.ComposeToRef(fS, AF, SF, CF.TmpVectors.Matrix[0]),
        hF = CF.HC.FromArrayToRef(FF.translation || [0, 0, 0], 0, CF.TmpVectors.HC[2]),
        bW = CF.Quaternion.FromArrayToRef(FF.rotation || [0, 0, 0, 1], 0, CF.TmpVectors.Quaternion[1]),
        dF = CF.Matrix.ComposeToRef(fS, bW, hF, CF.TmpVectors.Matrix[1]);
      uF.multiplyToRef(dF, dF), dF.decompose(void 0, AF, SF), SF.equalsWithEpsilon(zC, MS.c) ? delete WF.translation : WF.translation = SF.kRF(), AF.equalsWithEpsilon(IS, MS.c) ? delete WF.rotation : WF.rotation = AF.kRF(), WF.scale && delete WF.scale
    }

    function jC(FF, WF) {
      if (!(WF instanceof iW.c)) return !1;
      if (!(1 === WF.getChildren().length && 0 === FF.getChildren().length && FF.parent === WF)) return !1;
      const SF = FF.OWF(),
        CF = FF instanceof YS.h && !SF.useRightHandedSystem ? yC : fS;
      return !!WF.Ah.equalsWithEpsilon(CF, MS.c) || (OF.b.Warn(`Cannot collapse node ${FF.name} into parent node ${WF.name} with modified scaling.`), !1)
    }

    function vC(FF) {
      if (FF instanceof Array) {
        const WF = new Float32Array(FF);
        return new Uint8Array(WF.buffer, WF.byteOffset, WF.byteLength)
      }
      return ArrayBuffer.isView(FF) ? new Uint8Array(FF.buffer, FF.byteOffset, FF.byteLength) : new Uint8Array(FF)
    }

    function JS(FF, WF) {
      for (const [SF, CF] of Object.entries(FF)) {
        const AF = WF[SF];
        (Array.isArray(CF) && Array.isArray(AF) && pS(CF, AF) || CF === AF) && delete FF[SF]
      }
      return FF
    }

    function pS(FF, WF) {
      return FF.length === WF.length && FF.every(((FF, SF) => FF === WF[SF]))
    }
    const lS = new Map([
      [Int8Array, (FF, WF, SF) => FF.setInt8(WF, SF)],
      [Uint8Array, (FF, WF, SF) => FF.setUint8(WF, SF)],
      [Uint8ClampedArray, (FF, WF, SF) => FF.setUint8(WF, SF)],
      [Int16Array, (FF, WF, SF) => FF.setInt16(WF, SF, !0)],
      [Uint16Array, (FF, WF, SF) => FF.setUint16(WF, SF, !0)],
      [Int32Array, (FF, WF, SF) => FF.setInt32(WF, SF, !0)],
      [Uint32Array, (FF, WF, SF) => FF.setUint32(WF, SF, !0)],
      [Float32Array, (FF, WF, SF) => FF.setFloat32(WF, SF, !0)],
      [Float64Array, (FF, WF, SF) => FF.setFloat64(WF, SF, !0)]
    ]);
    class FC {
      writeTypedArray(FF) {
        this._checkGrowBuffer(FF.byteLength);
        const WF = lS.get(FF.constructor);
        for (let SF = 0; SF < FF.length; SF++) WF(this._dataView, this._byteOffset, FF[SF]), this._byteOffset += FF.BYTES_PER_ELEMENT
      }
      constructor(FF) {
        this._data = new Uint8Array(FF), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(FF) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, FF), this._byteOffset++
      }
      writeInt8(FF) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, FF), this._byteOffset++
      }
      writeInt16(FF) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, FF, !0), this._byteOffset += 2
      }
      writeUInt16(FF) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, FF, !0), this._byteOffset += 2
      }
      writeInt32(FF) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, FF, !0), this._byteOffset += 4
      }
      writeUInt32(FF) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, FF, !0), this._byteOffset += 4
      }
      writeFloat32(FF) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, FF, !0), this._byteOffset += 4
      }
      writeFloat64(FF) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, FF, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(FF) {
        const WF = this.byteOffset + FF;
        if (WF > this._data.byteLength) {
          const FF = new Uint8Array(2 * WF);
          FF.set(this._data), this._data = FF, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function WC(FF) {
      return FF % 4 === 0 ? 4 : FF % 2 === 0 ? 2 : 1
    }
    class SC {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(FF) {
        let WF = 0;
        this._bufferViewToData.forEach((FF => {
          WF += FF.byteLength
        }));
        const SF = new FC(WF),
          CF = Array.from(this._bufferViewToData.keys()).sort(((FF, WF) => WC(WF.byteLength) - WC(FF.byteLength)));
        for (const AF of CF) {
          AF.byteOffset = SF.byteOffset, FF.push(AF);
          const WF = FF.length - 1,
            CF = this.getPropertiesWithBufferView(AF);
          for (const FF of CF) FF.bufferView = WF;
          SF.writeTypedArray(this._bufferViewToData.get(AF)), this._bufferViewToData.delete(AF)
        }
        return SF.getOutputData()
      }
      createBufferView(FF, WF) {
        const SF = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: FF.byteLength,
          byteStride: WF
        };
        return this._bufferViewToData.set(SF, FF), SF
      }
      createAccessor(FF, WF, SF, CF, AF, uF, hF) {
        this._verifyBufferView(FF);
        const bW = {
          bufferView: void 0,
          componentType: SF,
          count: CF,
          type: WF,
          min: uF?.min,
          max: uF?.max,
          normalized: hF,
          byteOffset: AF
        };
        return this.setBufferView(bW, FF), this._accessorToBufferView.set(bW, FF), bW
      }
      setBufferView(FF, WF) {
        this._verifyBufferView(WF);
        this.getPropertiesWithBufferView(WF).push(FF)
      }
      removeBufferView(FF) {
        const WF = this.getPropertiesWithBufferView(FF);
        for (const SF of WF) void 0 !== SF.bufferView && delete SF.bufferView;
        this._bufferViewToData.delete(FF), this._bufferViewToProperties.delete(FF), this._accessorToBufferView.forEach(((WF, SF) => {
          WF === FF && (void 0 !== SF.byteOffset && delete SF.byteOffset, this._accessorToBufferView.delete(SF))
        }))
      }
      getBufferView(FF) {
        const WF = this._accessorToBufferView.get(FF);
        return this._verifyBufferView(WF), WF
      }
      getPropertiesWithBufferView(FF) {
        return this._verifyBufferView(FF), this._bufferViewToProperties.set(FF, this._bufferViewToProperties.get(FF) ?? []), this._bufferViewToProperties.get(FF)
      }
      getData(FF) {
        return this._verifyBufferView(FF), this._bufferViewToData.get(FF)
      }
      _verifyBufferView(FF) {
        if (void 0 === FF || !this._bufferViewToData.has(FF)) throw new Error(`BufferView ${FF} not found in BufferManager.`)
      }
    }
    var CC = SF(38183);
    (0, CC.e)();
    var AC = SF(38420);
    (0, AC.g)();
    var uC = SF(38233),
      hC = SF(39067);
    (0, hC.d)();
    let bA = (() => {
      var FF;
      let WF, SF, CF = [],
        AF = [],
        uF = [],
        hF = [];
      return FF = class {
        get influence() {
          return this._influence
        }
        set influence(FF) {
          if (this._influence === FF) return;
          const WF = this._influence;
          this._influence = FF, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === WF || 0 === FF)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(FF) {
          this._animationPropertiesOverride = FF
        }
        constructor(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            bW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = FF, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new FS.b, this._onDataLayoutChanged = new FS.b, this.id = (0, LF.k)(this, CF, void 0), this.morphTargetManager = ((0, LF.k)(this, AF), (0, LF.k)(this, uF, null)), this._animationPropertiesOverride = ((0, LF.k)(this, hF), null), this.id = FF, this.morphTargetManager = bW, this._scene = SF || rW.e.LastCreatedScene, this.influence = WF, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        neF(FF) {
          const WF = this.hasPositions;
          this._positions = FF, WF !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(FF) {
          const WF = this.hasNormals;
          this._normals = FF, WF !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(FF) {
          const WF = this.hasTangents;
          this._tangents = FF, WF !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(FF) {
          const WF = this.hasUVs;
          this._uvs = FF, WF !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(FF) {
          const WF = this.hasUV2s;
          this._uv2s = FF, WF !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(FF) {
          const WF = this.hasColors;
          this._colors = FF, WF !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const WF = NW.e.Clone((() => new FF(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return WF._positions = this._positions, WF._normals = this._normals, WF._tangents = this._tangents, WF._uvs = this._uvs, WF._uv2s = this._uv2s, WF._colors = this._colors, WF
        }
        serialize() {
          const FF = {};
          return FF.name = this.name, FF.influence = this.influence, null != this.id && (FF.id = this.id), FF.uniqueId = this.uniqueId, FF.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (FF.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (FF.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (FF.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (FF.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (FF.colors = Array.prototype.slice.call(this.getColors())), NW.e.AppendSerializedAnimations(this, FF), FF
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(WF, SF) {
          let CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const AF = new FF(WF.name, WF.influence, SF, CF);
          if (AF.neF(WF.positions), null != WF.id && (AF.id = WF.id), WF.normals && AF.setNormals(WF.normals), WF.tangents && AF.setTangents(WF.tangents), WF.uvs && AF.setUVs(WF.uvs), WF.uv2s && AF.setUV2s(WF.uv2s), WF.colors && AF.setColors(WF.colors), WF.animations) {
            for (let FF = 0; FF < WF.animations.length; FF++) {
              const SF = WF.animations[FF],
                CF = (0, nW.c)("BABYLON.Animation");
              CF && AF.animations.push(CF.Parse(SF))
            }
            WF.autoAnimate && SF && SF.beginAnimation(AF, WF.autoAnimateFrom, WF.autoAnimateTo, WF.autoAnimateLoop, WF.autoAnimateSpeed || 1)
          }
          return AF
        }
        static FromMesh(WF, SF, CF) {
          SF || (SF = WF.name);
          const AF = new FF(SF, CF, WF.OWF(), WF.morphTargetManager);
          return AF.neF(WF.getVerticesData(yW.k.PositionKind)), WF.isVerticesDataPresent(yW.k.NormalKind) && AF.setNormals(WF.getVerticesData(yW.k.NormalKind)), WF.isVerticesDataPresent(yW.k.TangentKind) && AF.setTangents(WF.getVerticesData(yW.k.TangentKind)), WF.isVerticesDataPresent(yW.k.UVKind) && AF.setUVs(WF.getVerticesData(yW.k.UVKind)), WF.isVerticesDataPresent(yW.k.UV2Kind) && AF.setUV2s(WF.getVerticesData(yW.k.UV2Kind)), WF.isVerticesDataPresent(yW.k.ColorKind) && AF.setColors(WF.getVerticesData(yW.k.ColorKind)), AF
        }
      }, (() => {
        const bW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WF = [(0, mW.H)()], SF = [(0, mW.H)()], (0, LF.j)(null, null, WF, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: FF => "id" in FF,
            get: FF => FF.id,
            set: (FF, WF) => {
              FF.id = WF
            }
          },
          metadata: bW
        }, CF, AF), (0, LF.j)(null, null, SF, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: FF => "morphTargetManager" in FF,
            get: FF => FF.morphTargetManager,
            set: (FF, WF) => {
              FF.morphTargetManager = WF
            }
          },
          metadata: bW
        }, uF, hF), bW && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bW
        })
      })(), FF
    })();
    var dC, PC = SF(39121),
      RC = SF(38230);
    ! function(FF) {
      FF[FF.INTANGENT = 0] = "INTANGENT", FF[FF.OUTTANGENT = 1] = "OUTTANGENT"
    }(dC || (dC = {}));
    class iA {
      static _IsTransformable(FF) {
        return FF && (FF instanceof iW.c || FF instanceof CC.c || FF instanceof RC.c)
      }
      static _CreateNodeAnimation(FF, WF, SF, CF, uF) {
        if (this._IsTransformable(FF)) {
          const hF = [],
            bW = [],
            dF = WF.getKeys(),
            PF = iA._CalculateMinMaxKeyFrames(dF),
            RF = iA._DeduceInterpolation(dF, SF, CF),
            iW = RF.interpolationType,
            eF = RF.shouldBakeAnimation;
          if (eF ? iA._CreateBakedAnimation(FF, WF, SF, PF.min, PF.max, WF.framePerSecond, uF, hF, bW, PF, CF) : "LINEAR" === iW || "STEP" === iW ? iA._CreateLinearOrStepAnimation(FF, WF, SF, hF, bW, CF) : "CUBICSPLINE" === iW ? iA._CreateCubicSplineAnimation(FF, WF, SF, hF, bW, CF) : iA._CreateBakedAnimation(FF, WF, SF, PF.min, PF.max, WF.framePerSecond, uF, hF, bW, PF, CF), hF.length && bW.length) {
            return {
              inputs: hF,
              outputs: bW,
              samplerInterpolation: iW,
              inputsMin: eF ? PF.min : AF.Tools.FloatRound(PF.min / WF.framePerSecond),
              inputsMax: eF ? PF.max : AF.Tools.FloatRound(PF.max / WF.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(FF) {
        let WF = null,
          SF = "VEC3",
          CF = !1;
        const uF = FF.targetProperty.split(".");
        switch (uF[0]) {
          case "Ah":
            WF = "scale";
            break;
          case "position":
            WF = "translation";
            break;
          case "rotation":
            SF = "VEC4", WF = "rotation";
            break;
          case "rotationQuaternion":
            SF = "VEC4", CF = !0, WF = "rotation";
            break;
          case "influence":
            SF = "SCALAR", WF = "weights";
            break;
          default:
            AF.Tools.Error(`Unsupported animatable property ${uF[0]}`)
        }
        return WF ? {
          animationChannelTargetPath: WF,
          dataAccessorType: SF,
          useQuaternion: CF
        } : (AF.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF) {
        let iW;
        if (iA._IsTransformable(FF) && FF.animations)
          for (const eF of FF.animations) {
            if (RF && !RF(eF)) continue;
            const AF = iA._DeduceAnimationInfo(eF);
            AF && (iW = {
              name: eF.name,
              samplers: [],
              channels: []
            }, iA._AddAnimation(`${eF.name}`, eF.hasRunningRuntimeAnimations ? WF : iW, FF, eF, AF.dataAccessorType, AF.animationChannelTargetPath, CF, uF, hF, bW, AF.useQuaternion, dF, PF), iW.samplers.length && iW.channels.length && SF.push(iW))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF) {
        let iW;
        if (FF instanceof PC.c) {
          const AF = FF.morphTargetManager;
          if (AF)
            for (let eF = 0; eF < AF.numTargets; ++eF) {
              const EF = AF.getTarget(eF);
              for (const QF of EF.animations) {
                if (RF && !RF(QF)) continue;
                const EF = new hC.c(`${QF.name}`, "influence", QF.framePerSecond, QF.dataType, QF.ZFF, QF.enableBlending),
                  rW = [],
                  gW = QF.getKeys();
                for (let FF = 0; FF < gW.length; ++FF) {
                  const WF = gW[FF];
                  for (let FF = 0; FF < AF.numTargets; ++FF) FF == eF ? rW.push(WF) : rW.push({
                    frame: WF.frame,
                    value: 0
                  })
                }
                EF.setKeys(rW, !0);
                const tW = iA._DeduceAnimationInfo(EF);
                tW && (iW = {
                  name: EF.name,
                  samplers: [],
                  channels: []
                }, iA._AddAnimation(QF.name, QF.hasRunningRuntimeAnimations ? WF : iW, FF, EF, tW.dataAccessorType, tW.animationChannelTargetPath, CF, uF, hF, bW, tW.useQuaternion, dF, PF, AF.numTargets), iW.samplers.length && iW.channels.length && SF.push(iW))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF) {
        let RF;
        if (FF.animationGroups) {
          const iW = FF.animationGroups;
          for (const eF of iW) {
            const iW = new Map,
              EF = new Map,
              QF = new Set,
              rW = eF.to - eF.from;
            RF = {
              name: eF.name,
              channels: [],
              samplers: []
            };
            for (let WF = 0; WF < eF.targetedAnimations.length; ++WF) {
              const PF = eF.targetedAnimations[WF],
                rW = PF.target,
                gW = PF.animation;
              if (dF && !dF(gW)) continue;
              const tW = bW.has(rW);
              if (this._IsTransformable(rW) || 1 === rW.length && this._IsTransformable(rW[0])) {
                const FF = iA._DeduceAnimationInfo(PF.animation);
                if (FF) {
                  const WF = this._IsTransformable(rW) ? rW : this._IsTransformable(rW[0]) ? rW[0] : null;
                  WF && iA._AddAnimation(`${gW.name}`, RF, WF, gW, FF.dataAccessorType, FF.animationChannelTargetPath, SF, CF, AF, uF, FF.useQuaternion, hF, tW)
                }
              } else if (rW instanceof bA || 1 === rW.length && rW[0] instanceof bA) {
                if (iA._DeduceAnimationInfo(PF.animation)) {
                  const WF = rW instanceof bA ? rW : rW[0];
                  if (WF) {
                    const SF = FF.morphTargetManagers.find((FF => {
                      for (let SF = 0; SF < FF.numTargets; ++SF)
                        if (FF.getTarget(SF) === WF) return !0;
                      return !1
                    }));
                    if (SF) {
                      const CF = FF.meshes.find((FF => FF.morphTargetManager === SF));
                      CF && (iW.has(CF) || iW.set(CF, new Map), iW.get(CF)?.set(WF, gW), QF.add(CF), EF.set(CF, gW))
                    }
                  }
                }
              }
            }
            QF.forEach((FF => {
              const WF = FF.morphTargetManager;
              let bW = null;
              const dF = [],
                PF = EF.get(FF).getKeys(),
                QF = PF.length;
              for (let SF = 0; SF < QF; ++SF)
                for (let CF = 0; CF < WF.numTargets; ++CF) {
                  const AF = WF.getTarget(CF),
                    uF = iW.get(FF);
                  if (uF) {
                    const WF = uF.get(AF);
                    WF ? (bW || (bW = new hC.c(`${eF.name}_${FF.name}_MorphWeightAnimation`, "influence", WF.framePerSecond, hC.c.ANIMATIONTYPE_FLOAT, WF.ZFF, WF.enableBlending)), dF.push(WF.getKeys()[SF])) : dF.push({
                      frame: eF.from + rW / QF * SF,
                      value: AF.influence,
                      inTangent: PF[0].inTangent ? 0 : void 0,
                      outTangent: PF[0].outTangent ? 0 : void 0
                    })
                  }
                }
              bW.setKeys(dF, !0);
              const gW = iA._DeduceAnimationInfo(bW);
              gW && iA._AddAnimation(`${eF.name}_${FF.name}_MorphWeightAnimation`, RF, FF, bW, gW.dataAccessorType, gW.animationChannelTargetPath, SF, CF, AF, uF, gW.useQuaternion, hF, !1, WF?.numTargets)
            })), RF.channels.length && RF.samplers.length && (PF?.set(eF, WF.length), WF.push(RF))
          }
        }
      }
      static _AddAnimation(FF, WF, SF, AF, uF, hF, bW, dF, PF, RF, iW, eF, EF, QF) {
        const rW = iA._CreateNodeAnimation(SF, AF, hF, iW, eF);
        let gW, tW, TF, aW, kW, qW;
        if (rW) {
          if (QF) {
            let FF, WF = 0;
            const SF = [];
            for (; rW.inputs.length > 0;) FF = rW.inputs.shift(), WF % QF == 0 && SF.push(FF), WF++;
            rW.inputs = SF
          }
          const FF = bW.get(SF),
            AF = new Float32Array(rW.inputs);
          gW = dF.createBufferView(AF), tW = dF.createAccessor(gW, "SCALAR", 5126, rW.inputs.length, void 0, {
            min: [rW.inputsMin],
            max: [rW.inputsMax]
          }), RF.push(tW), TF = RF.length - 1;
          const PF = new CF.Quaternion,
            iW = new CF.HC,
            eF = new CF.HC,
            VF = SF instanceof CC.c,
            NF = nS(uF),
            DF = new Float32Array(rW.outputs.length * NF);
          rW.outputs.forEach((function(FF, WF) {
            let SF = FF;
            switch (hF) {
              case "translation":
                EF && (CF.HC.FromArrayToRef(FF, 0, eF), wS(eF), eF.toArray(SF));
                break;
              case "rotation":
                4 === FF.length ? CF.Quaternion.FromArrayToRef(FF, 0, PF) : (SF = new Array(4), CF.HC.FromArrayToRef(FF, 0, iW), CF.Quaternion.FromEulerVectorToRef(iW, PF)), EF && (XS(PF), VF && US(PF)), PF.toArray(SF)
            }
            DF.set(SF, WF * NF)
          })), gW = dF.createBufferView(DF), tW = dF.createAccessor(gW, uF, 5126, rW.outputs.length), RF.push(tW), aW = RF.length - 1, kW = {
            interpolation: rW.samplerInterpolation,
            input: TF,
            output: aW
          }, WF.samplers.push(kW), qW = {
            sampler: WF.samplers.length - 1,
            target: {
              node: FF,
              path: hF
            }
          }, WF.channels.push(qW)
        }
      }
      static _CreateBakedAnimation(FF, WF, SF, uF, hF, bW, dF, PF, RF, iW, eF) {
        let EF;
        const QF = CF.Quaternion.Identity();
        let rW, gW, tW, TF, aW, kW = null,
          qW = null;
        iW.min = AF.Tools.FloatRound(uF / bW);
        const VF = WF.getKeys();
        for (let CF = 0, NF = VF.length; CF < NF; ++CF) {
          if (gW = VF[CF], CF + 1 < NF)
            if (tW = VF[CF + 1], gW.value.equals && gW.value.equals(tW.value) || gW.value === tW.value) {
              if (0 !== CF) continue;
              aW = gW.frame
            } else aW = tW.frame;
          else {
            if (TF = VF[CF - 1], gW.value.equals && gW.value.equals(TF.value) || gW.value === TF.value) continue;
            aW = hF
          }
          if (aW)
            for (let CF = gW.frame; CF <= aW; CF += dF) {
              if (rW = AF.Tools.FloatRound(CF / bW), rW === kW) continue;
              kW = rW, qW = rW;
              const uF = {
                key: 0,
                repeatCount: 0,
                ZFF: WF.ZFF
              };
              EF = WF._interpolate(CF, uF), iA._SetInterpolatedValue(FF, EF, rW, WF, SF, QF, PF, RF, eF)
            }
        }
        qW && (iW.max = qW)
      }
      static _ConvertFactorToVector3OrQuaternion(FF, WF, SF, uF, hF) {
        const bW = iA._GetBasePositionRotationOrScale(WF, uF, hF),
          dF = SF.targetProperty.split("."),
          PF = dF ? dF[1] : "",
          RF = hF ? CF.Quaternion.FromArray(bW).normalize() : CF.HC.FromArray(bW);
        switch (PF) {
          case "x":
          case "y":
          case "z":
            RF[PF] = FF;
            break;
          case "w":
            RF.w = FF;
            break;
          default:
            AF.Tools.Error(`glTFAnimation: Unsupported component name "${PF}"!`)
        }
        return RF
      }
      static _SetInterpolatedValue(FF, WF, SF, AF, uF, hF, bW, dF, PF) {
        let RF;
        bW.push(SF), "weights" !== uF ? (AF.dataType === hC.c.ANIMATIONTYPE_FLOAT && (WF = this._ConvertFactorToVector3OrQuaternion(WF, FF, AF, uF, PF)), "rotation" === uF ? (PF ? hF = WF : (RF = WF, CF.Quaternion.RotationYawPitchRollToRef(RF.y, RF.x, RF.z, hF)), dF.push(hF.kRF())) : (RF = WF, dF.push(RF.kRF()))) : dF.push([WF])
      }
      static _CreateLinearOrStepAnimation(FF, WF, SF, CF, AF, uF) {
        for (const hF of WF.getKeys()) CF.push(hF.frame / WF.framePerSecond), iA._AddKeyframeValue(hF, WF, AF, SF, FF, uF)
      }
      static _CreateCubicSplineAnimation(FF, WF, SF, CF, AF, uF) {
        WF.getKeys().forEach((function(hF) {
          CF.push(hF.frame / WF.framePerSecond), iA._AddSplineTangent(dC.INTANGENT, AF, SF, "CUBICSPLINE", hF, uF), iA._AddKeyframeValue(hF, WF, AF, SF, FF, uF), iA._AddSplineTangent(dC.OUTTANGENT, AF, SF, "CUBICSPLINE", hF, uF)
        }))
      }
      static _GetBasePositionRotationOrScale(FF, WF, SF) {
        let AF;
        if ("rotation" === WF)
          if (SF) {
            AF = (FF.rotationQuaternion ?? CF.Quaternion.Identity()).kRF()
          } else {
            AF = (FF.rotation ?? CF.HC.Zero()).kRF()
          }
        else if ("translation" === WF) {
          AF = (FF.position ?? CF.HC.Zero()).kRF()
        } else {
          AF = (FF.Ah ?? CF.HC.One()).kRF()
        }
        return AF
      }
      static _AddKeyframeValue(FF, WF, SF, uF, hF, bW) {
        let dF;
        const PF = WF.dataType;
        if (PF === hC.c.ANIMATIONTYPE_VECTOR3) {
          let WF = FF.value.kRF();
          if ("rotation" === uF) {
            const FF = CF.HC.FromArray(WF);
            WF = CF.Quaternion.RotationYawPitchRoll(FF.y, FF.x, FF.z).kRF()
          }
          SF.push(WF)
        } else if (PF === hC.c.ANIMATIONTYPE_FLOAT) {
          if ("weights" === uF) SF.push([FF.value]);
          else if (dF = this._ConvertFactorToVector3OrQuaternion(FF.value, hF, WF, uF, bW), dF) {
            if ("rotation" === uF) {
              const FF = bW ? dF : CF.Quaternion.RotationYawPitchRoll(dF.y, dF.x, dF.z).normalize();
              SF.push(FF.kRF())
            }
            SF.push(dF.kRF())
          }
        } else PF === hC.c.ANIMATIONTYPE_QUATERNION ? SF.push(FF.value.normalize().kRF()) : AF.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(FF, WF, SF) {
        let CF, AF, uF = !1;
        if ("rotation" === WF && !SF) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let hF = 0, bW = FF.length; hF < bW; ++hF)
          if (AF = FF[hF], AF.inTangent || AF.outTangent)
            if (CF) {
              if ("CUBICSPLINE" !== CF) {
                CF = "LINEAR", uF = !0;
                break
              }
            } else CF = "CUBICSPLINE";
        else if (CF) {
          if ("CUBICSPLINE" === CF || AF.interpolation && 1 === AF.interpolation && "STEP" !== CF) {
            CF = "LINEAR", uF = !0;
            break
          }
        } else CF = AF.interpolation && 1 === AF.interpolation ? "STEP" : "LINEAR";
        return CF || (CF = "LINEAR"), {
          interpolationType: CF,
          shouldBakeAnimation: uF
        }
      }
      static _AddSplineTangent(FF, WF, SF, AF, uF, hF) {
        let bW;
        const dF = FF === dC.INTANGENT ? uF.inTangent : uF.outTangent;
        if ("CUBICSPLINE" === AF) {
          if ("rotation" === SF)
            if (dF)
              if (hF) bW = dF.kRF();
              else {
                const FF = dF;
                bW = CF.Quaternion.RotationYawPitchRoll(FF.y, FF.x, FF.z).kRF()
              }
          else bW = [0, 0, 0, 0];
          else bW = "weights" === SF ? dF ? [dF] : [0] : dF ? dF.kRF() : [0, 0, 0];
          WF.push(bW)
        }
      }
      static _CalculateMinMaxKeyFrames(FF) {
        let WF = 1 / 0,
          SF = -1 / 0;
        return FF.forEach((function(FF) {
          WF = Math.min(WF, FF.frame), SF = Math.max(SF, FF.frame)
        })), {
          min: WF,
          max: SF
        }
      }
    }

    function eC(FF, WF, SF, uF, hF, bW) {
      const dF = {
          attributes: {},
          influence: FF.influence,
          name: FF.name
        },
        PF = WF.geometry;
      if (!PF) return AF.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), dF;
      const iW = bW ? -1 : 1,
        eF = CF.HC.Zero();
      let EF, QF;
      if (FF.hasPositions) {
        const uF = FF.getPositions(),
          bW = PF.getVerticesData(RF.h.PositionKind);
        if (bW) {
          const FF = new Float32Array(bW.length),
            WF = [1 / 0, 1 / 0, 1 / 0],
            AF = [-1 / 0, -1 / 0, -1 / 0];
          QF = bW.length / 3, EF = 0;
          for (let SF = EF; SF < QF; ++SF) {
            const hF = CF.HC.FromArray(bW, 3 * SF);
            CF.HC.FromArray(uF, 3 * SF).subtractToRef(hF, eF), eF.x *= iW, WF[0] = Math.min(WF[0], eF.x), AF[0] = Math.max(AF[0], eF.x), WF[1] = Math.min(WF[1], eF.y), AF[1] = Math.max(AF[1], eF.y), WF[2] = Math.min(WF[2], eF.z), AF[2] = Math.max(AF[2], eF.z), FF[3 * SF] = eF.x, FF[3 * SF + 1] = eF.y, FF[3 * SF + 2] = eF.z
          }
          const PF = SF.createBufferView(FF, 12),
            RF = SF.createAccessor(PF, "VEC3", 5126, uF.length / 3, 0, {
              min: WF,
              max: AF
            });
          hF.push(RF), dF.attributes.POSITION = hF.length - 1
        } else AF.Tools.Warn(`Morph target positions for mesh ${WF.name} were not exported. Mesh does not have position vertex data`)
      }
      if (FF.hasNormals) {
        const uF = FF.getNormals(),
          bW = PF.getVerticesData(RF.h.NormalKind);
        if (bW) {
          const FF = new Float32Array(bW.length);
          QF = bW.length / 3, EF = 0;
          for (let SF = EF; SF < QF; ++SF) {
            const WF = CF.HC.FromArray(bW, 3 * SF).normalize();
            CF.HC.FromArray(uF, 3 * SF).normalize().subtractToRef(WF, eF), FF[3 * SF] = eF.x * iW, FF[3 * SF + 1] = eF.y, FF[3 * SF + 2] = eF.z
          }
          const WF = SF.createBufferView(FF, 12),
            AF = SF.createAccessor(WF, "VEC3", 5126, uF.length / 3, 0);
          hF.push(AF), dF.attributes.NORMAL = hF.length - 1
        } else AF.Tools.Warn(`Morph target normals for mesh ${WF.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (FF.hasTangents) {
        const uF = FF.getTangents(),
          bW = PF.getVerticesData(RF.h.TangentKind);
        if (bW) {
          QF = bW.length / 4;
          const FF = new Float32Array(3 * QF);
          EF = 0;
          for (let SF = EF; SF < QF; ++SF) {
            const WF = CF.HC.FromArray(bW, 4 * SF);
            KS(WF);
            const AF = CF.HC.FromArray(uF, 3 * SF);
            KS(AF), AF.subtractToRef(WF, eF), FF[3 * SF] = eF.x * iW, FF[3 * SF + 1] = eF.y, FF[3 * SF + 2] = eF.z
          }
          const WF = SF.createBufferView(FF, 12),
            AF = SF.createAccessor(WF, "VEC3", 5126, QF, 0);
          hF.push(AF), dF.attributes.TANGENT = hF.length - 1
        } else AF.Tools.Warn(`Morph target tangents for mesh ${WF.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (FF.hasColors) {
        const uF = FF.getColors(),
          bW = PF.getVerticesData(RF.h.ColorKind),
          iW = PF.getVertexBuffer(RF.h.ColorKind);
        if (bW && iW) {
          const FF = iW.getSize();
          QF = bW.length / FF;
          const WF = new Float32Array(QF * FF);
          EF = 0;
          for (let SF = EF; SF < QF; ++SF)
            if (3 === FF) {
              const AF = CF.HC.FromArray(bW, SF * FF);
              CF.HC.FromArray(uF, SF * FF).subtractToRef(AF, eF), WF[3 * SF] = eF.x, WF[3 * SF + 1] = eF.y, WF[3 * SF + 2] = eF.z
            } else if (4 === FF) {
            const AF = new CF.Vector4,
              hF = CF.Vector4.FromArray(bW, SF * FF);
            CF.Vector4.FromArray(uF, SF * FF).subtractToRef(hF, AF), WF[4 * SF] = AF.x, WF[4 * SF + 1] = AF.y, WF[4 * SF + 2] = AF.z, WF[4 * SF + 3] = AF.w
          } else AF.Tools.Warn(`Unsupported number of components for color attribute: ${FF}`);
          const PF = SF.createBufferView(WF, 4 * FF),
            RF = SF.createAccessor(PF, 3 === FF ? "VEC3" : "VEC4", 5126, QF, 0);
          hF.push(RF), dF.attributes.COLOR_0 = hF.length - 1
        } else AF.Tools.Warn(`Morph target colors for mesh ${WF.name} were not exported. Mesh does not have colors vertex data`)
      }
      return dF
    }
    var EC = SF(39437);
    class QC {}
    QC.DEFAULT_COLOR = XF.e.White(), QC.DEFAULT_WIDTH_ATTENUATED = 1, QC.DEFAULT_WIDTH = .1;
    var rA = SF(39061);
    class gA {
      constructor(FF) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = FF
      }
      moveTo(FF, WF) {
        this._currentPath = new rA.g(FF, WF), this._tempPaths.push(this._currentPath)
      }
      lineTo(FF, WF) {
        this._currentPath.addLineTo(FF, WF)
      }
      quadraticCurveTo(FF, WF, SF, CF) {
        this._currentPath.addQuadraticCurveTo(FF, WF, SF, CF, this._resolution)
      }
      bezierCurveTo(FF, WF, SF, CF, AF, uF) {
        this._currentPath.addBezierCurveTo(FF, WF, SF, CF, AF, uF, this._resolution)
      }
      extractHoles() {
        for (const FF of this._tempPaths) FF.area() > 0 ? this._holes.push(FF) : this._paths.push(FF);
        if (!this._paths.length && this._holes.length) {
          const FF = this._holes;
          this._holes = this._paths, this._paths = FF
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

    function tA(FF, WF, SF, CF, AF, uF) {
      const hF = uF.glyphs[FF] || uF.glyphs["?"];
      if (!hF) return null;
      const bW = new gA(AF);
      if (hF.o) {
        const FF = hF.o.split(" ");
        for (let AF = 0, uF = FF.length; AF < uF;) {
          switch (FF[AF++]) {
            case "m": {
              const uF = parseInt(FF[AF++]) * WF + SF,
                hF = parseInt(FF[AF++]) * WF + CF;
              bW.moveTo(uF, hF);
              break
            }
            case "l": {
              const uF = parseInt(FF[AF++]) * WF + SF,
                hF = parseInt(FF[AF++]) * WF + CF;
              bW.lineTo(uF, hF);
              break
            }
            case "q": {
              const uF = parseInt(FF[AF++]) * WF + SF,
                hF = parseInt(FF[AF++]) * WF + CF,
                dF = parseInt(FF[AF++]) * WF + SF,
                PF = parseInt(FF[AF++]) * WF + CF;
              bW.quadraticCurveTo(dF, PF, uF, hF);
              break
            }
            case "b": {
              const uF = parseInt(FF[AF++]) * WF + SF,
                hF = parseInt(FF[AF++]) * WF + CF,
                dF = parseInt(FF[AF++]) * WF + SF,
                PF = parseInt(FF[AF++]) * WF + CF,
                RF = parseInt(FF[AF++]) * WF + SF,
                iW = parseInt(FF[AF++]) * WF + CF;
              bW.bezierCurveTo(dF, PF, RF, iW, uF, hF);
              break
            }
          }
        }
      }
      return bW.extractHoles(), {
        offsetX: hF.ha * WF,
        shapePath: bW
      }
    }

    function TC(FF, WF, SF, CF) {
      const AF = Array.from(FF),
        uF = WF / CF.resolution,
        hF = (CF.boundingBox.yMax - CF.boundingBox.yMin + CF.underlineThickness) * uF,
        bW = [];
      let dF = 0,
        PF = 0;
      for (let RF = 0; RF < AF.length; RF++) {
        const FF = AF[RF];
        if ("\n" === FF) dF = 0, PF -= hF;
        else {
          const WF = tA(FF, uF, dF, PF, SF, CF);
          WF && (dF += WF.offsetX, bW.push(WF.shapePath))
        }
      }
      return bW
    }
    class aA {
      static ConvertPoints(FF, WF) {
        if (FF.length && Array.isArray(FF) && "number" === typeof FF[0]) return [FF];
        if (FF.length && Array.isArray(FF[0]) && "number" === typeof FF[0][0]) return FF;
        if (FF.length && !Array.isArray(FF[0]) && FF[0] instanceof fF.r) {
          const WF = [];
          for (let SF = 0; SF < FF.length; SF++) {
            const CF = FF[SF];
            WF.push(CF.x, CF.y, CF.z)
          }
          return [WF]
        }
        if (FF.length > 0 && Array.isArray(FF[0]) && FF[0].length > 0 && FF[0][0] instanceof fF.r) {
          const WF = [],
            SF = FF;
          for (const FF of SF) WF.push(FF.flatMap((FF => [FF.x, FF.y, FF.z])));
          return WF
        }
        if (FF instanceof Float32Array) {
          if (WF?.floatArrayStride) {
            const SF = [],
              CF = 3 * WF.floatArrayStride;
            for (let WF = 0; WF < FF.length; WF += CF) {
              const AF = new Array(CF);
              for (let SF = 0; SF < CF; SF++) AF[SF] = FF[WF + SF];
              SF.push(AF)
            }
            return SF
          }
          return [Array.from(FF)]
        }
        if (FF.length && FF[0] instanceof Float32Array) {
          const WF = [];
          for (const SF of FF) WF.push(Array.from(SF));
          return WF
        }
        return []
      }
      static OmitZeroLengthPredicate(FF, WF, SF) {
        const CF = [];
        return WF.subtract(FF).lengthSquared() > 0 && CF.push([FF, WF]), SF.subtract(WF).lengthSquared() > 0 && CF.push([WF, SF]), FF.subtract(SF).lengthSquared() > 0 && CF.push([SF, FF]), 0 === CF.length ? null : CF
      }
      static OmitDuplicatesPredicate(FF, WF, SF, CF) {
        const AF = [];
        return aA._SearchInPoints(FF, WF, CF) || AF.push([FF, WF]), aA._SearchInPoints(WF, SF, CF) || AF.push([WF, SF]), aA._SearchInPoints(SF, FF, CF) || AF.push([SF, FF]), 0 === AF.length ? null : AF
      }
      static _SearchInPoints(FF, WF, SF) {
        for (const CF of SF)
          for (let SF = 0; SF < CF.length; SF++)
            if (CF[SF]?.equals(FF) && (CF[SF + 1]?.equals(WF) || CF[SF - 1]?.equals(WF))) return !0;
        return !1
      }
      static MeshesToLines(FF, WF) {
        const SF = [];
        for (let CF = 0; CF < FF.length; CF++) {
          const AF = FF[CF],
            uF = AF.getVerticesData(yW.k.PositionKind),
            hF = AF.yEF();
          if (uF && hF)
            for (let FF = 0, bW = 0; FF < hF.length; FF++) {
              const dF = 3 * hF[bW++],
                PF = 3 * hF[bW++],
                RF = 3 * hF[bW++],
                iW = new fF.r(uF[dF], uF[dF + 1], uF[dF + 2]),
                eF = new fF.r(uF[PF], uF[PF + 1], uF[PF + 2]),
                EF = new fF.r(uF[RF], uF[RF + 1], uF[RF + 2]);
              if (WF) {
                const bW = WF(iW, eF, EF, SF, FF, dF, AF, CF, uF, hF);
                if (bW)
                  for (const FF of bW) SF.push(FF)
              } else SF.push([iW, eF], [eF, EF], [EF, iW])
            }
        }
        return SF
      }
      static ToVector3Array(FF) {
        if (Array.isArray(FF[0])) {
          const WF = [],
            SF = FF;
          for (const FF of SF) {
            const SF = [];
            for (let WF = 0; WF < FF.length; WF += 3) SF.push(new fF.r(FF[WF], FF[WF + 1], FF[WF + 2]));
            WF.push(SF)
          }
          return WF
        }
        const WF = FF,
          SF = [];
        for (let CF = 0; CF < WF.length; CF += 3) SF.push(new fF.r(WF[CF], WF[CF + 1], WF[CF + 2]));
        return SF
      }
      static ToNumberArray(FF) {
        return FF.flatMap((FF => [FF.x, FF.y, FF.z]))
      }
      static GetPointsCountInfo(FF) {
        const WF = new Array(FF.length);
        let SF = 0;
        for (let CF = FF.length; CF--;) WF[CF] = FF[CF].length / 3, SF += WF[CF];
        return {
          total: SF,
          counts: WF
        }
      }
      static GetLineLength(FF) {
        if (0 === FF.length) return 0;
        let WF;
        WF = "number" === typeof FF[0] ? aA.ToVector3Array(FF) : FF;
        const SF = fF.j.HC[0];
        let CF = 0;
        for (let AF = 0; AF < WF.length - 1; AF++) {
          const FF = WF[AF];
          CF += WF[AF + 1].subtractToRef(FF, SF).length()
        }
        return CF
      }
      static GetLineLengthArray(FF, WF) {
        const SF = WF ? new Float32Array(WF, 0, FF.length / 3) : new Float32Array(FF.length / 3);
        let CF = 0;
        for (let AF = 0, uF = FF.length / 3 - 1; AF < uF; AF++) {
          let WF = FF[3 * AF + 0],
            uF = FF[3 * AF + 1],
            hF = FF[3 * AF + 2];
          WF -= FF[3 * AF + 3], uF -= FF[3 * AF + 4], hF -= FF[3 * AF + 5];
          CF += Math.sqrt(WF * WF + uF * uF + hF * hF), SF[AF + 1] = CF
        }
        return SF
      }
      static SegmentizeSegmentByCount(FF, WF, SF) {
        const CF = [],
          AF = WF.subtract(FF),
          uF = fF.j.HC[0];
        uF.DuF(SF);
        const hF = fF.j.HC[1];
        AF.divideToRef(uF, hF);
        let bW = FF.clone();
        CF.push(bW);
        for (let dF = 0; dF < SF; dF++) bW = bW.clone(), CF.push(bW.addInPlace(hF));
        return CF
      }
      static SegmentizeLineBySegmentLength(FF, WF) {
        const SF = FF[0] instanceof fF.r ? aA.GetLineSegments(FF) : "number" === typeof FF[0] ? aA.GetLineSegments(aA.ToVector3Array(FF)) : FF,
          CF = [];
        for (const AF of SF)
          if (AF.length > WF) {
            const FF = aA.SegmentizeSegmentByCount(AF.point1, AF.point2, Math.ceil(AF.length / WF));
            for (const WF of FF) CF.push(WF)
          } else CF.push(AF.point1), CF.push(AF.point2);
        return CF
      }
      static SegmentizeLineBySegmentCount(FF, WF) {
        const SF = "number" === typeof FF[0] ? aA.ToVector3Array(FF) : FF,
          CF = aA.GetLineLength(SF) / WF;
        return aA.SegmentizeLineBySegmentLength(SF, CF)
      }
      static GetLineSegments(FF) {
        const WF = [];
        for (let SF = 0; SF < FF.length - 1; SF++) {
          const CF = FF[SF],
            AF = FF[SF + 1],
            uF = AF.subtract(CF).length();
          WF.push({
            point1: CF,
            point2: AF,
            length: uF
          })
        }
        return WF
      }
      static GetMinMaxSegmentLength(FF) {
        const WF = aA.GetLineSegments(FF).sort((FF => FF.length));
        return {
          min: WF[0].length,
          max: WF[WF.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const AF = WF * SF;
        let uF = 0,
          hF = 0;
        const bW = FF.length;
        for (let PF = 0; PF < bW; PF++) {
          if (AF <= uF + FF[PF].length) {
            hF = PF;
            break
          }
          uF += FF[PF].length
        }
        const dF = (AF - uF) / FF[hF].length;
        return FF[hF].point2.subtractToRef(FF[hF].point1, fF.j.HC[0]), fF.j.HC[0].scaleToRef(dF, fF.j.HC[1]), CF || fF.j.HC[1].addInPlace(FF[hF].point1), fF.j.HC[1].clone()
      }
      static GetCircleLinePoints(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FF,
          AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / WF;
        const uF = [];
        for (let hF = 0; hF <= WF; hF++) uF.push(new fF.r(Math.cos(hF * AF) * FF, Math.sin(hF * AF) * CF, SF));
        return uF
      }
      static GetBezierLinePoints(FF, WF, SF, CF) {
        return rA.d.CreateQuadraticBezier(FF, WF, SF, CF).getPoints().flatMap((FF => [FF.x, FF.y, FF.z]))
      }
      static GetArrowCap(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          hF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [FF.clone(), FF.add(WF.multiplyByFloats(SF, SF, SF))],
          widths: [CF, AF, uF, hF]
        }
      }
      static GetPointsFromText(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          uF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const hF = [],
          bW = TC(FF, WF, SF, CF);
        for (const dF of bW) {
          for (const FF of dF.paths) {
            const WF = [],
              SF = FF.getPoints();
            for (const FF of SF) WF.push(FF.x, FF.y, AF);
            hF.push(WF)
          }
          if (uF)
            for (const FF of dF.holes) {
              const WF = [],
                SF = FF.getPoints();
              for (const FF of SF) WF.push(FF.x, FF.y, AF);
              hF.push(WF)
            }
        }
        return hF
      }
      static Color3toRGBAUint8(FF) {
        const WF = new Uint8Array(4 * FF.length);
        for (let SF = 0, CF = 0; SF < FF.length; SF++) WF[CF++] = 255 * FF[SF].r, WF[CF++] = 255 * FF[SF].g, WF[CF++] = 255 * FF[SF].b, WF[CF++] = 255;
        return WF
      }
      static CreateColorsTexture(FF, WF, SF, CF) {
        const AF = CF.sC().getCaps().maxTextureSize ?? 1,
          uF = WF.length > AF ? AF : WF.length,
          hF = Math.ceil(WF.length / AF);
        hF > 1 && (WF = [...WF, ...Array(uF * hF - WF.length).fill(WF[0])]);
        const bW = aA.Color3toRGBAUint8(WF),
          dF = new VF.b(bW, uF, hF, RS.d.TEXTUREFORMAT_RGBA, CF, !1, !0, SF);
        return dF.name = FF, dF
      }
      static PrepareEmptyColorsTexture(FF) {
        if (!QC.EmptyColorsTexture) {
          const WF = new Uint8Array(4);
          QC.EmptyColorsTexture = new VF.b(WF, 1, 1, RS.d.TEXTUREFORMAT_RGBA, FF, !1, !1, VF.b.NEAREST_NEAREST), QC.EmptyColorsTexture.name = "grlEmptyColorsTexture", QC.EmptyColorsTexture.xSF.addOnce((() => {
            QC.EmptyColorsTexture = null
          }))
        }
        return QC.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        QC.EmptyColorsTexture?.dispose(), QC.EmptyColorsTexture = null
      }
      static BooleanToNumber(FF) {
        return FF ? 1 : 0
      }
    }
    class kA extends sF.e {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class qA extends nF.e {
      isCompatible(FF) {
        return !0
      }
      constructor(FF, WF, SF) {
        SF = SF || {
          color: QC.DEFAULT_COLOR
        };
        const CF = new kA;
        CF.GREASED_LINE_HAS_COLOR = !!SF.color && !SF.useColors, CF.GREASED_LINE_SIZE_ATTENUATION = SF.sizeAttenuation ?? !1, CF.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === SF.colorDistributionType, CF.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (WF ?? FF.OWF()).useRightHandedSystem, CF.GREASED_LINE_CAMERA_FACING = SF.cameraFacing ?? !0, super(FF, qA.GREASED_LINE_MATERIAL_NAME, 200, CF, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = SF?.forceGLSL || qA.ForceGLSL, this._scene = WF ?? FF.OWF(), this._engine = this._scene.sC(), this._cameraFacing = SF.cameraFacing ?? !0, this.visibility = SF.visibility ?? 1, this.useDash = SF.useDash ?? !1, this.dashRatio = SF.dashRatio ?? .5, this.dashOffset = SF.dashOffset ?? 0, this.width = SF.width ? SF.width : SF.sizeAttenuation ? QC.DEFAULT_WIDTH_ATTENUATED : QC.DEFAULT_WIDTH, this._sizeAttenuation = SF.sizeAttenuation ?? !1, this.colorMode = SF.colorMode ?? 0, this._color = SF.color ?? null, this.useColors = SF.useColors ?? !1, this._colorsDistributionType = SF.colorDistributionType ?? 0, this.colorsSampling = SF.colorsSampling ?? VF.b.NEAREST_NEAREST, this._colors = SF.colors ?? null, this.dashCount = SF.dashCount ?? 1, this.resolution = SF.resolution ?? new fF.n(this._engine.getRenderWidth(), this._engine.getRenderHeight()), SF.colorsTexture ? this.colorsTexture = SF.colorsTexture : this._colors ? this.colorsTexture = aA.CreateColorsTexture(`${FF.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? QC.DEFAULT_COLOR, aA.PrepareEmptyColorsTexture(this._scene)), this._engine.xSF.add((() => {
          aA.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(FF) {
        FF.push("grl_offsets"), FF.push("grl_widths"), FF.push("grl_colorPointers"), FF.push("grl_counters"), this._cameraFacing ? (FF.push("grl_previousAndSide"), FF.push("grl_nextAndCounters")) : FF.push("grl_slopes")
      }
      getSamplers(FF) {
        FF.push("grl_colors")
      }
      getActiveTextures(FF) {
        this.colorsTexture && FF.push(this.colorsTexture)
      }
      getUniforms() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const WF = [{
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
        return this._cameraFacing && WF.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === FF && WF.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: WF,
          vertex: this._cameraFacing && this._isGLSL(FF) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(FF) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(FF) {
        if (this._cameraFacing) {
          FF.yhF("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || FF.yhF("viewProjection", this._scene.getTransformMatrix());
          const WF = fF.j.Vector4[0];
          WF.x = this._aspect, WF.y = this._resolution.x, WF.z = this._resolution.y, WF.w = this.width, FF.updateVector4("grl_aspect_resolution_lineWidth", WF)
        }
        const WF = fF.j.Vector4[0];
        WF.x = aA.BooleanToNumber(this.useDash), WF.y = this._dashArray, WF.z = this.dashOffset, WF.w = this.dashRatio, FF.updateVector4("grl_dashOptions", WF);
        const SF = fF.j.Vector4[1];
        SF.x = this.colorMode, SF.y = this.visibility, SF.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, SF.w = aA.BooleanToNumber(this.useColors), FF.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", SF), this._color && FF.updateColor3("grl_singleColor", this._color);
        const CF = this.colorsTexture ?? QC.EmptyColorsTexture;
        FF.setTexture("grl_colors", CF), FF.updateFloat2("grl_textureSize", CF?.getSize().width ?? 1, CF?.getSize().height ?? 1)
      }
      prepareDefines(FF, WF, SF) {
        FF.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, FF.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, FF.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, FF.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = WF.useRightHandedSystem, FF.GREASED_LINE_CAMERA_FACING = this._cameraFacing, FF.GREASED_LINE_USE_OFFSETS = !!SF.offsets
      }
      getClassName() {
        return qA.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(WF) ? function(FF, WF) {
          if ("vertex" === FF) {
            const FF = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return WF && (FF["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), FF
          }
          return "fragment" === FF ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(FF, this._cameraFacing) : function(FF, WF) {
          if ("vertex" === FF) {
            const FF = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return WF && (FF["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), FF
          }
          return "fragment" === FF ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(FF, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(FF) {
        this.setColors(FF)
      }
      setColors(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const CF = this._colors?.length ?? 0;
        if (this._colors = FF, null !== FF && 0 !== FF.length) {
          if (!WF || SF)
            if (this.colorsTexture && CF === FF.length && !SF) {
              const WF = aA.Color3toRGBAUint8(FF);
              this.colorsTexture.update(WF)
            } else this.colorsTexture?.dispose(), this.colorsTexture = aA.CreateColorsTexture(`${this._material.name}-colors-texture`, FF, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(FF) {
        this._dashCount = FF, this._dashArray = 1 / FF
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(FF) {
        this._sizeAttenuation = FF, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(FF) {
        this.setColor(FF)
      }
      setColor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== FF || null !== this._color && null === FF ? (this._color = FF, WF || this.markAllDefinesAsDirty()) : this._color = FF
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(FF) {
        this._colorsDistributionType = FF, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(FF) {
        this._aspect = FF.x / FF.y, this._resolution = FF
      }
      serialize() {
        const FF = super.serialize(),
          WF = {
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
        return this._colors && (WF.colors = this._colors), this._color && (WF.color = this._color), FF.greasedLineMaterialOptions = WF, FF
      }
      parse(FF, WF, SF) {
        super.parse(FF, WF, SF);
        const CF = FF.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), CF.color && this.setColor(CF.color, !0), CF.colorDistributionType && (this.colorsDistributionType = CF.colorDistributionType), CF.colors && (this.colors = CF.colors), CF.colorsSampling && (this.colorsSampling = CF.colorsSampling), CF.colorMode && (this.colorMode = CF.colorMode), CF.useColors && (this.useColors = CF.useColors), CF.visibility && (this.visibility = CF.visibility), CF.useDash && (this.useDash = CF.useDash), CF.dashCount && (this.dashCount = CF.dashCount), CF.dashRatio && (this.dashRatio = CF.dashRatio), CF.dashOffset && (this.dashOffset = CF.dashOffset), CF.width && (this.width = CF.width), CF.sizeAttenuation && (this.sizeAttenuation = CF.sizeAttenuation), CF.resolution && (this.resolution = CF.resolution), this.colors ? this.colorsTexture = aA.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, WF) : aA.PrepareEmptyColorsTexture(WF), this.markAllDefinesAsDirty()
      }
      copyTo(FF) {
        const WF = FF;
        WF.colorsTexture?.dispose(), this._colors && (WF.colorsTexture = aA.CreateColorsTexture(`${WF._material.name}-colors-texture`, this._colors, WF.colorsSampling, this._scene)), WF.setColor(this.color, !0), WF.colorsDistributionType = this.colorsDistributionType, WF.colorsSampling = this.colorsSampling, WF.colorMode = this.colorMode, WF.useColors = this.useColors, WF.visibility = this.visibility, WF.useDash = this.useDash, WF.dashCount = this.dashCount, WF.dashRatio = this.dashRatio, WF.dashOffset = this.dashOffset, WF.width = this.width, WF.sizeAttenuation = this.sizeAttenuation, WF.resolution = this.resolution, WF.markAllDefinesAsDirty()
      }
      _isGLSL(FF) {
        return 0 === FF || this._forceGLSL
      }
    }
    qA.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", qA.ForceGLSL = !1;
    var VC = SF(38386),
      NC = SF(38393),
      DC = SF(37069),
      LC = SF(38440),
      mA = SF(37800);
    class OC extends LC.p {
      constructor(FF, WF, CF) {
        const AF = WF.sC(),
          uF = AF.isWebGPU && !(CF.forceGLSL || OC.ForceGLSL),
          hF = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        WF.useRightHandedSystem && hF.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const bW = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        CF.cameraFacing ? (hF.push("GREASED_LINE_CAMERA_FACING"), bW.push("grl_previousAndSide", "grl_nextAndCounters")) : (bW.push("grl_slopes"), bW.push("grl_counters"));
        const dF = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (uF || dF.push("world", "viewProjection", "view", "projection"), super(FF, WF, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: uF ? ["Scene", "Mesh"] : void 0,
            attributes: bW,
            uniforms: dF,
            samplers: uF ? [] : ["grlColors"],
            defines: hF,
            extraInitializationsAsync: async () => {
              uF ? await Promise.all([SF.e(304).then((() => SF(59563))), SF.e(363).then((() => SF(59570)))]) : await Promise.all([SF.e(297).then((() => SF(59578))), SF.e(364).then((() => SF(59580)))])
            },
            shaderLanguage: uF ? 1 : 0
          }), this._color = XF.e.White(), this._colorsDistributionType = 0, this._colorsTexture = null, CF = CF || {
            color: QC.DEFAULT_COLOR
          }, this.visibility = CF.visibility ?? 1, this.useDash = CF.useDash ?? !1, this.dashRatio = CF.dashRatio ?? .5, this.dashOffset = CF.dashOffset ?? 0, this.dashCount = CF.dashCount ?? 1, this.width = CF.width ? CF.width : CF.sizeAttenuation && CF.cameraFacing ? QC.DEFAULT_WIDTH_ATTENUATED : QC.DEFAULT_WIDTH, this.sizeAttenuation = CF.sizeAttenuation ?? !1, this.color = CF.color ?? XF.e.White(), this.useColors = CF.useColors ?? !1, this.colorsDistributionType = CF.colorDistributionType ?? 0, this.colorsSampling = CF.colorsSampling ?? VF.b.NEAREST_NEAREST, this.colorMode = CF.colorMode ?? 0, this._colors = CF.colors ?? null, this._cameraFacing = CF.cameraFacing ?? !0, this.resolution = CF.resolution ?? new fF.n(AF.getRenderWidth(), AF.getRenderHeight()), CF.colorsTexture ? this.colorsTexture = CF.colorsTexture : this._colors ? this.colorsTexture = aA.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, WF) : (this._color = this._color ?? QC.DEFAULT_COLOR, this.colorsTexture = aA.PrepareEmptyColorsTexture(WF)), uF) {
          const FF = new mA.b;
          FF.setParameters(), FF.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", FF)
        }
        AF.xSF.add((() => {
          aA.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== QC.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new fF.n(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(FF) {
        this.setColors(FF)
      }
      setColors(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const CF = this._colors?.length ?? 0;
        if (this._colors = FF, null !== FF && 0 !== FF.length) {
          if (!WF || SF)
            if (this._colorsTexture && CF === FF.length && !SF) {
              const WF = aA.Color3toRGBAUint8(FF);
              this._colorsTexture.update(WF)
            } else this._colorsTexture && this._colorsTexture !== QC.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = aA.CreateColorsTexture(`${this.name}-colors-texture`, FF, this.colorsSampling, this.OWF())
        } else {
          this._colorsTexture && this._colorsTexture !== QC.EmptyColorsTexture && this._colorsTexture.dispose();
          const FF = this.OWF();
          FF && (this.colorsTexture = aA.PrepareEmptyColorsTexture(FF))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(FF) {
        this._colorsTexture = FF, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(FF) {
        this._width = FF, this.setFloat("grlWidth", FF)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(FF) {
        this._useColors = FF, this.setFloat("grlUseColors", aA.BooleanToNumber(FF))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(FF) {
        this._colorsSampling = FF
      }
      get visibility() {
        return this._visibility
      }
      set visibility(FF) {
        this._visibility = FF, this.setFloat("grlVisibility", FF)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(FF) {
        this._useDash = FF, this.setFloat("grlUseDash", aA.BooleanToNumber(FF))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(FF) {
        this._dashOffset = FF, this.setFloat("grlDashOffset", FF)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(FF) {
        this._dashRatio = FF, this.setFloat("grlDashRatio", FF)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(FF) {
        this._dashCount = FF, this._dashArray = 1 / FF, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(FF) {
        this._sizeAttenuation = FF, this.setFloat("grlSizeAttenuation", aA.BooleanToNumber(FF))
      }
      get color() {
        return this._color
      }
      set color(FF) {
        this.setColor(FF)
      }
      setColor(FF) {
        FF = FF ?? QC.DEFAULT_COLOR, this._color = FF, this.setColor3("grlColor", FF)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(FF) {
        this._colorsDistributionType = FF, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(FF) {
        this._colorMode = FF, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(FF) {
        this._resolution = FF, this.setVector2("grlResolution", FF), this.setFloat("grlAspect", FF.x / FF.y)
      }
      serialize() {
        const FF = super.serialize(),
          WF = {
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
        return this._colors && (WF.colors = this._colors), FF.greasedLineMaterialOptions = WF, FF
      }
      parse(FF, WF, SF) {
        const CF = FF.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), CF.color && (this.color = CF.color), CF.colorDistributionType && (this.colorsDistributionType = CF.colorDistributionType), CF.colorsSampling && (this.colorsSampling = CF.colorsSampling), CF.colorMode && (this.colorMode = CF.colorMode), CF.useColors && (this.useColors = CF.useColors), CF.visibility && (this.visibility = CF.visibility), CF.useDash && (this.useDash = CF.useDash), CF.dashCount && (this.dashCount = CF.dashCount), CF.dashRatio && (this.dashRatio = CF.dashRatio), CF.dashOffset && (this.dashOffset = CF.dashOffset), CF.width && (this.width = CF.width), CF.sizeAttenuation && (this.sizeAttenuation = CF.sizeAttenuation), CF.resolution && (this.resolution = CF.resolution), CF.colors ? this.colorsTexture = aA.CreateColorsTexture(`${this.name}-colors-texture`, CF.colors, this.colorsSampling, this.OWF()) : this.colorsTexture = aA.PrepareEmptyColorsTexture(WF), this._cameraFacing = CF.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var xA, ZC, oC;
    OC.ForceGLSL = !1,
      function(FF) {
        FF[FF.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", FF[FF.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(xA || (xA = {})),
      function(FF) {
        FF[FF.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", FF[FF.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", FF[FF.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(ZC || (ZC = {})),
      function(FF) {
        FF[FF.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", FF[FF.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", FF[FF.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", FF[FF.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", FF[FF.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(oC || (oC = {}));
    class YC extends VC.d {
      constructor(FF, WF, SF) {
        super(FF, WF, null, null, !1, !1), this.name = FF, this._options = SF, this._lazy = !1, this._updatable = !1, this._engine = WF.sC(), this._lazy = SF.lazy ?? !1, this._updatable = SF.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = SF.colorPointers ?? [], this._widths = SF.widths ?? new Array(SF.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(FF) {
        let WF = 0;
        for (const CF of this._points) WF += CF.length;
        const SF = WF / 3 * 2 - this._widths.length;
        for (let CF = 0; CF < SF; CF++) this._widths.push(FF)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.wC && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(FF, WF) {
        for (const SF of FF) this._points.push(SF);
        this._lazy || this.setPoints(this._points, WF)
      }
      dispose(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(FF, WF)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(FF) {
        this._uvs = FF instanceof Float32Array ? FF : new Float32Array(FF), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(FF) {
        this.material instanceof OC && this.material.setDefine("GREASED_LINE_USE_OFFSETS", FF?.length > 0), this._offsets = FF, this._offsetsBuffer ? this._offsetsBuffer.update(FF) : this._createOffsetsBuffer(FF)
      }
      get widths() {
        return this._widths
      }
      set widths(FF) {
        this._widths = FF, this._lazy || this._widthsBuffer && this._widthsBuffer.update(FF)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(FF) {
        this._colorPointers = FF, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(FF)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof OC) return this.material;
        const FF = this.material?.pluginManager?.getPlugin(qA.GREASED_LINE_MATERIAL_NAME);
        return FF || void 0
      }
      get points() {
        const FF = [];
        return DC.d.DeepCopy(this._points, FF), FF
      }
      setPoints(FF, WF) {
        this._points = aA.ConvertPoints(FF, WF?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), WF?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, WF)
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
      serialize(FF) {
        super.serialize(FF), FF.type = this.getClassName(), FF.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WF = new NC.b;
        return WF.positions = this._vertexPositions, WF.indices = this._indices, WF.uvs = this._uvs, FF && (WF.normals = [], NC.b.ComputeNormals(this._vertexPositions, this._indices, WF.normals)), WF.applyToMesh(this, this._options.updatable), WF
      }
      _createOffsetsBuffer(FF) {
        const WF = this._scene.sC(),
          SF = new yW.c(WF, FF, this._updatable, 3);
        this.setVerticesBuffer(SF.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = SF
      }
    }
    class MC {
      constructor(FF, WF) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = FF, this.wasAddedByNoopNode = WF
      }
      getIndicesAccessor(FF, WF, SF, CF, AF) {
        return this._indicesAccessorMap.get(FF)?.get(WF)?.get(SF)?.get(CF)?.get(AF)
      }
      setIndicesAccessor(FF, WF, SF, CF, AF, uF) {
        let hF = this._indicesAccessorMap.get(FF);
        hF || (hF = new Map, this._indicesAccessorMap.set(FF, hF));
        let bW = hF.get(WF);
        bW || (bW = new Map, hF.set(WF, bW));
        let dF = bW.get(SF);
        dF || (dF = new Map, bW.set(SF, dF));
        let PF = dF.get(CF);
        PF || (PF = new Map, dF.set(CF, PF)), PF.set(AF, uF)
      }
      pushExportedNode(FF) {
        this._exportedNodes.has(FF) || this._exportedNodes.add(FF)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(FF) {
        return this._vertexBufferViewMap.get(FF)
      }
      setVertexBufferView(FF, WF) {
        this._vertexBufferViewMap.set(FF, WF)
      }
      setRemappedBufferView(FF, WF, SF) {
        this._remappedBufferView.set(FF, new Map), this._remappedBufferView.get(FF).set(WF, SF)
      }
      getRemappedBufferView(FF, WF) {
        return this._remappedBufferView.get(FF)?.get(WF)
      }
      getVertexAccessor(FF, WF, SF) {
        return this._vertexAccessorMap.get(FF)?.get(WF)?.get(SF)
      }
      setVertexAccessor(FF, WF, SF, CF) {
        let AF = this._vertexAccessorMap.get(FF);
        AF || (AF = new Map, this._vertexAccessorMap.set(FF, AF));
        let uF = AF.get(WF);
        uF || (uF = new Map, AF.set(WF, uF)), uF.set(SF, CF)
      }
      hasVertexColorAlpha(FF) {
        return this._vertexMapColorAlpha.get(FF) || !1
      }
      setHasVertexColorAlpha(FF, WF) {
        return this._vertexMapColorAlpha.set(FF, WF)
      }
      getMesh(FF) {
        return this._meshMap.get(FF)
      }
      setMesh(FF, WF) {
        this._meshMap.set(FF, WF)
      }
      bindMorphDataToMesh(FF, WF) {
        const SF = this._meshMorphTargetMap.get(FF) || [];
        this._meshMorphTargetMap.set(FF, SF), -1 === SF.indexOf(WF) && SF.push(WF)
      }
      getMorphTargetsFromMesh(FF) {
        return this._meshMorphTargetMap.get(FF)
      }
    }
    class cA {
      _ApplyExtension(FF, WF, SF, CF) {
        if (SF >= WF.length) return Promise.resolve(FF);
        const AF = CF(WF[SF], FF);
        return AF ? AF.then((async FF => FF ? await this._ApplyExtension(FF, WF, SF + 1, CF) : null)) : this._ApplyExtension(FF, WF, SF + 1, CF)
      }
      _ApplyExtensions(FF, WF) {
        const SF = [];
        for (const CF of cA._ExtensionNames) SF.push(this._extensions[CF]);
        return this._ApplyExtension(FF, SF, 0, WF)
      }
      _extensionsPostExportNodeAsync(FF, WF, SF, CF, AF) {
        return this._ApplyExtensions(WF, ((WF, uF) => WF.postExportNodeAsync && WF.postExportNodeAsync(FF, uF, SF, CF, AF, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(FF, WF, SF) {
        return this._ApplyExtensions(WF, ((WF, CF) => WF.postExportMaterialAsync && WF.postExportMaterialAsync(FF, CF, SF)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(FF, WF, SF) {
        const CF = [];
        return await Promise.all(cA._ExtensionNames.map((async AF => {
          const uF = this._extensions[AF];
          if (uF.postExportMaterialAdditionalTexturesAsync) {
            const AF = await uF.postExportMaterialAdditionalTexturesAsync(FF, WF, SF);
            CF.push(...AF)
          }
        }))), CF
      }
      _extensionsPostExportTextures(FF, WF, SF) {
        for (const CF of cA._ExtensionNames) {
          const AF = this._extensions[CF];
          AF.postExportTexture && AF.postExportTexture(FF, WF, SF)
        }
      }
      _extensionsPostExportMeshPrimitive(FF) {
        for (const WF of cA._ExtensionNames) {
          const SF = this._extensions[WF];
          SF.postExportMeshPrimitive && SF.postExportMeshPrimitive(FF, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const FF of cA._ExtensionNames) {
          const WF = this._extensions[FF];
          WF.preGenerateBinaryAsync && await WF.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(FF) {
        for (const WF of cA._ExtensionNames) {
          const SF = this._extensions[WF];
          SF.enabled && FF(SF)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((FF => {
          var WF, SF, CF;
          FF.wasUsed && ((WF = this._glTF).extensionsUsed || (WF.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(FF.name) && this._glTF.extensionsUsed.push(FF.name), FF.required && ((SF = this._glTF).extensionsRequired || (SF.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(FF.name) && this._glTF.extensionsRequired.push(FF.name)), (CF = this._glTF).extensions || (CF.extensions = {}), FF.onExporting && FF.onExporting())
        }))
      }
      _loadExtensions() {
        for (const FF of cA._ExtensionNames) {
          const WF = cA._ExtensionFactories[FF](this);
          this._extensions[FF] = WF
        }
      }
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rW.e.LastCreatedScene,
          WF = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${QF.d.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new ZS(this), this._extensions = {}, this._bufferManager = new SC, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !FF) throw new Error("No scene available to export");
        this._babylonScene = FF, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: FF => FF?.bRF?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...WF
        }, this._loadExtensions()
      }
      dispose() {
        for (const FF in this._extensions) {
          this._extensions[FF].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        cA.UnregisterExtension(FF) && AF.Tools.Warn(`Extension with the name ${FF} already exists`), cA._ExtensionFactories[FF] = WF;
        const CF = SF ?? 0;
        cA._ExtensionOrders[FF] = CF;
        let uF = cA._ExtensionNames.length;
        for (let AF = 0; AF < cA._ExtensionNames.length; AF++) {
          const FF = cA._ExtensionNames[AF];
          if (CF < cA._ExtensionOrders[FF]) {
            uF = AF;
            break
          }
        }
        cA._ExtensionNames.splice(uF, 0, FF)
      }
      static UnregisterExtension(FF) {
        if (!cA._ExtensionFactories[FF]) return !1;
        delete cA._ExtensionFactories[FF], delete cA._ExtensionOrders[FF];
        const WF = cA._ExtensionNames.indexOf(FF);
        return -1 !== WF && cA._ExtensionNames.splice(WF, 1), !0
      }
      _generateJSON(FF, WF, SF) {
        const CF = {
          byteLength: FF
        };
        return CF.byteLength && (this._glTF.buffers = [CF]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.ju = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (CF.uri = WF + ".bin"), SF ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(FF) {
        const WF = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const SF = this._generateJSON(WF.byteLength, FF, !0),
          CF = new Blob([WF], {
            type: "application/octet-stream"
          }),
          AF = FF + ".gltf",
          uF = FF + ".bin",
          hF = new PF;
        if (hF.files[AF] = SF, hF.files[uF] = CF, this._imageData)
          for (const bW in this._imageData) hF.files[bW] = this._imageData[bW];
        return hF
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(FF) {
        const WF = FF % 4;
        return 0 === WF ? WF : 4 - WF
      }
      async generateGLBAsync(FF) {
        this._shouldUseGlb = !0;
        const WF = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const SF = this._generateJSON(WF.byteLength),
          CF = FF + ".glb";
        let AF, uF = SF.length;
        if ("undefined" !== typeof TextEncoder) {
          AF = (new TextEncoder).encode(SF), uF = AF.length
        }
        const hF = this._getPadding(uF),
          bW = this._getPadding(WF.byteLength),
          dF = 28 + uF + hF + WF.byteLength + bW,
          RF = new FC(dF);
        if (RF.writeUInt32(1179937895), RF.writeUInt32(2), RF.writeUInt32(dF), RF.writeUInt32(uF + hF), RF.writeUInt32(1313821514), AF) RF.writeTypedArray(AF);
        else {
          const FF = "_".charCodeAt(0);
          for (let WF = 0; WF < uF; ++WF) {
            const CF = SF.charCodeAt(WF);
            CF != SF.codePointAt(WF) ? RF.writeUInt8(FF) : RF.writeUInt8(CF)
          }
        }
        for (let PF = 0; PF < hF; ++PF) RF.writeUInt8(32);
        RF.writeUInt32(WF.byteLength + bW), RF.writeUInt32(5130562), RF.writeTypedArray(WF);
        for (let PF = 0; PF < bW; ++PF) RF.writeUInt8(0);
        const iW = new PF;
        return iW.files[CF] = new Blob([RF.getOutputData()], {
          type: "application/octet-stream"
        }), iW
      }
      _setNodeTransformation(FF, WF, SF) {
        if (WF.getPivotPoint().equalsWithEpsilon(zC, MS.c) || AF.Tools.Warn("Pivot points are not supported in the glTF serializer"), !WF.position.equalsWithEpsilon(zC, MS.c)) {
          const AF = CF.TmpVectors.HC[0].fdF(WF.position);
          SF && wS(AF), FF.translation = AF.kRF()
        }
        WF.Ah.equalsWithEpsilon(fS, MS.c) || (FF.scale = WF.Ah.kRF());
        const uF = WF.rotationQuaternion?.clone() || CF.Quaternion.FromEulerAngles(WF.rotation.x, WF.rotation.y, WF.rotation.z);
        uF.equalsWithEpsilon(IS, MS.c) || (SF && XS(uF), FF.rotation = uF.normalize().kRF())
      }
      _setCameraTransformation(FF, WF, SF) {
        const AF = CF.TmpVectors.HC[0],
          uF = CF.TmpVectors.Quaternion[0],
          hF = WF.getWorldMatrix();
        if (WF.parent) {
          const FF = WF.parent.getWorldMatrix().invertToRef(CF.TmpVectors.Matrix[0]);
          hF.multiplyToRef(FF, CF.TmpVectors.Matrix[1]).decompose(void 0, uF, AF)
        } else hF.decompose(void 0, uF, AF);
        AF.equalsWithEpsilon(zC, MS.c) || (SF && wS(AF), FF.translation = AF.kRF()), SF && XS(uF), this._babylonScene.useRightHandedSystem || US(uF), uF.equalsWithEpsilon(IS, MS.c) || (FF.rotation = uF.kRF())
      }
      _listAvailableCameras() {
        for (const FF of this._babylonScene.cameras) {
          const WF = {
            type: FF.mode === CC.c.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (FF.name && (WF.name = FF.name), "perspective" === WF.type) WF.perspective = {
            aspectRatio: FF.sC().getAspectRatio(FF),
            yfov: FF.fovMode === CC.c.FOVMODE_VERTICAL_FIXED ? FF.fov : FF.fov * FF.sC().getAspectRatio(FF),
            znear: FF.minZ,
            zfar: FF.maxZ
          };
          else if ("orthographic" === WF.type) {
            const SF = FF.orthoLeft && FF.orthoRight ? .5 * (FF.orthoRight - FF.orthoLeft) : .5 * FF.sC().getRenderWidth(),
              CF = FF.orthoBottom && FF.orthoTop ? .5 * (FF.orthoTop - FF.orthoBottom) : .5 * FF.sC().getRenderHeight();
            WF.orthographic = {
              xmag: SF,
              ymag: CF,
              znear: FF.minZ,
              zfar: FF.maxZ
            }
          }
          this._camerasMap.set(FF, WF)
        }
      }
      _exportAndAssignCameras() {
        const FF = Array.from(this._camerasMap.values());
        for (const WF of FF) {
          const FF = this._nodesCameraMap.get(WF);
          if (void 0 !== FF) {
            this._cameras.push(WF);
            for (const WF of FF) WF.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const FF of this._babylonScene.skeletons) {
          if (FF.bones.length <= 0) continue;
          const WF = {
            joints: []
          };
          this._skinMap.set(FF, WF)
        }
      }
      _exportAndAssignSkeletons(FF) {
        for (const SF of this._babylonScene.skeletons) {
          if (SF.bones.length <= 0) continue;
          const uF = this._skinMap.get(SF);
          if (void 0 == uF) continue;
          const hF = {};
          let bW = -1;
          for (let FF = 0; FF < SF.bones.length; ++FF) {
            const WF = SF.bones[FF],
              CF = WF.getIndex() ?? FF; - 1 !== CF && (hF[CF] = WF, CF > bW && (bW = CF))
          }
          const dF = [];
          for (let SF = 0; SF <= bW; ++SF) {
            const bW = hF[SF],
              PF = bW.getTransformNode(),
              RF = PF ? this._nodeMap.get(PF) : void 0;
            if (void 0 === RF) {
              AF.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            uF.joints.push(RF);
            const iW = bW.getAbsoluteInverseBindMatrix().clone();
            FF.has(PF) && (WF = iW, cC.invertToRef(CF.TmpVectors.Matrix[0]).multiplyToRef(WF, WF).multiplyToRef(cC, WF)), dF.push(iW)
          }
          const PF = this._nodesSkinMap.get(uF);
          if (uF.joints.length > 0 && void 0 !== PF) {
            const FF = new Float32Array(16 * dF.length);
            dF.forEach(((WF, SF) => {
              FF.set(WF.m, 16 * SF)
            }));
            const WF = this._bufferManager.createBufferView(FF);
            this._accessors.push(this._bufferManager.createAccessor(WF, "MAT4", 5126, dF.length)), uF.inverseBindMatrices = this._accessors.length - 1, this._skins.push(uF);
            const SF = this._skins.length - 1;
            for (const CF of PF) CF.skin = SF
          }
        }
        var WF
      }
      async _exportSceneAsync() {
        const FF = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const WF = this._options.metadataSelector(this._babylonScene.metadata);
          WF && (FF.extras = WF)
        }
        const WF = new Array,
          SF = new Array,
          CF = new Array,
          AF = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let uF;
        if (AF && !this._options.includeCoordinateSystemConversionNodes)
          for (const PF of this._babylonScene.animationGroups)
            for (const FF of PF.targetedAnimations) {
              const WF = FF.target;
              WF instanceof iW.c && !WF.parent && (uF ?? (uF = new Set)).add(WF)
            }
        for (const PF of this._babylonScene.rootNodes) {
          const FF = PF.animations,
            hF = !!FF && FF.length > 0 || uF?.has(PF);
          AF && !this._options.includeCoordinateSystemConversionNodes && GS(PF, this._babylonScene.useRightHandedSystem) && !hF ? CF.push(...PF.getChildren()) : this._babylonScene.useRightHandedSystem ? WF.push(PF) : SF.push(PF)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const hF = new MC(!0, !1);
        FF.nodes.push(...await this._exportNodesAsync(SF, hF));
        const bW = new MC(!1, !1);
        FF.nodes.push(...await this._exportNodesAsync(WF, bW));
        const dF = new MC(!1, !0);
        FF.nodes.push(...await this._exportNodesAsync(CF, dF)), FF.nodes.length && this._scenes.push(FF), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(hF.getNodesSet()), this._babylonScene.animationGroups.length && iA._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, hF.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(FF) {
        return this._nodeMap.get(FF)
      }
      _getAnimationIndex(FF) {
        return this._animationGroupMap.get(FF)
      }
      _getCameraIndex(FF) {
        const WF = this._camerasMap.get(FF);
        if (!WF) return;
        const SF = this._cameras.indexOf(WF);
        return SF >= 0 ? SF : void 0
      }
      _getMaterialIndex(FF) {
        return this._materialMap.get(FF)
      }
      _getRootIndex(FF, WF) {
        switch (FF) {
          case "nodes":
            return this._getNodeIndex(WF);
          case "animations":
            return this._getAnimationIndex(WF);
          case "cameras":
            return this._getCameraIndex(WF);
          case "materials":
            return this._getMaterialIndex(WF);
          case "meshes": {
            const FF = this._getNodeIndex(WF);
            return void 0 === FF ? void 0 : this._nodes[FF]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(WF)?.index;
          case "images": {
            const FF = this._materialExporter.getTextureInfo(WF)?.index;
            if (void 0 === FF) return;
            const SF = this._textures[FF];
            for (const WF of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const FF = SF?.extensions?.[WF]?.source;
              if ("number" === typeof FF) return FF
            }
            return SF?.source
          }
          case "samplers": {
            const FF = this._materialExporter.getTextureInfo(WF)?.index;
            return void 0 === FF ? void 0 : this._textures[FF]?.sampler
          }
          case "skins": {
            const FF = this._skinMap.get(WF),
              SF = FF ? this._skins.indexOf(FF) : -1;
            return SF >= 0 ? SF : void 0
          }
          case "scenes":
            return WF === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(FF, WF, SF) {
        const CF = this._nodes[FF];
        if (!CF) throw new Error(`Cannot write ${WF}: glTF node ${FF} does not exist.`);
        CF.extensions || (CF.extensions = {}), CF.extensions[WF] = SF
      }
      _shouldExportNode(FF) {
        let WF = this._shouldExportNodeMap.get(FF);
        return void 0 === WF && (WF = this._options.shouldExportNode(FF), this._shouldExportNodeMap.set(FF, WF)), WF
      }
      async _exportNodesAsync(FF, WF) {
        const SF = new Array;
        this._exportBuffers(FF, WF);
        for (const CF of FF) await this._exportNodeAsync(CF, SF, WF);
        return SF
      }
      _collectBuffers(FF, WF, SF, CF, AF) {
        if (this._shouldExportNode(FF) && FF instanceof eF.b && FF.geometry) {
          const uF = FF.geometry.getVertexBuffers();
          if (uF)
            for (const CF in uF) {
              if (!HS(CF)) continue;
              const hF = uF[CF];
              AF.setHasVertexColorAlpha(hF, FF.hasVertexAlpha);
              const bW = hF._buffer,
                dF = WF.get(bW) || [];
              WF.set(bW, dF), -1 === dF.indexOf(hF) && dF.push(hF);
              const PF = SF.get(hF) || [];
              SF.set(hF, PF), -1 === PF.indexOf(FF) && PF.push(FF)
            }
          const hF = FF.morphTargetManager;
          if (hF)
            for (let WF = 0; WF < hF.numTargets; WF++) {
              const SF = hF.getTarget(WF),
                AF = CF.get(SF) || [];
              CF.set(SF, AF), -1 === AF.indexOf(FF) && AF.push(FF)
            }
        }
        for (const uF of FF.getChildren()) this._collectBuffers(uF, WF, SF, CF, AF)
      }
      _exportBuffers(FF, WF) {
        const SF = new Map,
          CF = new Map,
          AF = new Map;
        for (const bW of FF) this._collectBuffers(bW, SF, CF, AF, WF);
        const uF = Array.from(SF.keys());
        for (const bW of uF) {
          const FF = bW.getData();
          if (!FF) throw new Error("Buffer data is not available");
          const AF = SF.get(bW);
          if (!AF) continue;
          const uF = AF[0].byteStride;
          if (AF.some((FF => FF.byteStride !== uF))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const hF = vC(FF).slice();
          for (const WF of AF) {
            const FF = CF.get(WF),
              {
                byteOffset: SF,
                byteStride: AF,
                componentCount: uF,
                type: bW,
                count: dF,
                normalized: PF,
                kind: iW
              } = sS(WF, FF);
            switch (iW) {
              case RF.h.NormalKind:
              case RF.h.TangentKind:
                (0, oS.m)(hF, SF, AF, uF, bW, dF, PF, (FF => {
                  const WF = Math.sqrt(FF[0] * FF[0] + FF[1] * FF[1] + FF[2] * FF[2]);
                  if (WF > 0) {
                    const SF = 1 / WF;
                    FF[0] *= SF, FF[1] *= SF, FF[2] *= SF
                  }
                }));
                break;
              case RF.h.ColorKind: {
                const WF = FF.filter((FF => FF.material instanceof uC.StandardMaterial || null == FF.material)).length;
                if (0 == WF) break;
                if (WF != FF.length) {
                  OF.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                bW == RF.h.UNSIGNED_BYTE && OF.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const CF = new gW.Color3,
                  iW = new gW.d,
                  eF = this._babylonScene.sC().useExactSrgbConversions;
                (0, oS.m)(hF, SF, AF, uF, bW, dF, PF, (FF => {
                  3 === FF.length ? (CF.udF(FF, 0), CF.toLinearSpaceToRef(CF, eF), CF.toArray(FF, 0)) : (iW.udF(FF, 0), iW.toLinearSpaceToRef(iW, eF), iW.toArray(FF, 0))
                }))
              }
            }
          }
          if (WF.convertToRightHanded) {
            for (const FF of AF) {
              const WF = CF.get(FF),
                {
                  byteOffset: SF,
                  byteStride: AF,
                  componentCount: uF,
                  type: bW,
                  count: dF,
                  normalized: PF,
                  kind: iW
                } = sS(FF, WF);
              switch (iW) {
                case RF.h.PositionKind:
                case RF.h.NormalKind:
                case RF.h.TangentKind:
                  (0, oS.m)(hF, SF, AF, uF, bW, dF, PF, (FF => {
                    FF[0] = -FF[0]
                  }))
              }
            }
            WF.convertedToRightHandedBuffers.set(bW, hF)
          }
          const dF = this._bufferManager.createBufferView(hF, uF);
          WF.setVertexBufferView(bW, dF);
          const PF = new Map;
          for (const WF of AF) {
            const FF = CF.get(WF),
              {
                kind: SF,
                totalVertices: AF
              } = sS(WF, FF);
            switch (SF) {
              case RF.h.MatricesIndicesKind:
              case RF.h.MatricesIndicesExtraKind:
                if (WF.type == RF.h.FLOAT) {
                  const FF = WF.getFloatData(AF);
                  null !== FF && PF.set(WF, FF)
                }
            }
          }
          0 !== PF.size && OF.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const iW = Array.from(PF.keys());
          for (const SF of iW) {
            const FF = PF.get(SF);
            if (!FF) continue;
            const CF = FF.some((FF => FF >= 256)),
              AF = new(CF ? Uint16Array : Uint8Array)(FF.length);
            for (let WF = 0; WF < FF.length; WF++) AF[WF] = FF[WF];
            const uF = this._bufferManager.createBufferView(AF, 4 * (CF ? 2 : 1));
            WF.setRemappedBufferView(bW, SF, uF)
          }
        }
        const hF = Array.from(AF.keys());
        for (const bW of hF) {
          const FF = AF.get(bW);
          if (!FF) continue;
          const SF = eC(bW, FF[0], this._bufferManager, this._bufferViews, this._accessors, WF.convertToRightHanded);
          for (const CF of FF) WF.bindMorphDataToMesh(CF, SF)
        }
      }
      async _exportNodeAsync(FF, WF, SF) {
        let CF = this._nodeMap.get(FF);
        if (void 0 !== CF) return void(WF.includes(CF) || WF.push(CF));
        const AF = await this._createNodeAsync(FF, SF);
        if (AF) {
          CF = this._nodes.length, this._nodes.push(AF), this._nodeMap.set(FF, CF), SF.pushExportedNode(FF), WF.push(CF);
          const uF = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            hF = [];
          this._babylonScene.animationGroups.length || (iA._CreateMorphTargetAnimationFromMorphTargetAnimations(FF, uF, hF, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, SF.convertToRightHanded, this._options.shouldExportAnimation), FF.animations.length && iA._CreateNodeAnimationFromNodeAnimations(FF, uF, hF, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, SF.convertToRightHanded, this._options.shouldExportAnimation)), uF.channels.length && uF.samplers.length && this._animations.push(uF), hF.forEach((FF => {
            FF.channels.length && FF.samplers.length && this._animations.push(FF)
          }))
        }
        const uF = AF ? [] : WF;
        for (const hF of FF.getChildren()) await this._exportNodeAsync(hF, uF, SF);
        AF && uF.length && (AF.children = uF)
      }
      async _createNodeAsync(FF, WF) {
        if (!this._shouldExportNode(FF)) return null;
        const SF = {};
        if (FF.name && (SF.name = FF.name), FF.metadata) {
          const WF = this._options.metadataSelector(FF.metadata);
          WF && (SF.extras = WF)
        }
        if (FF instanceof iW.c && (this._setNodeTransformation(SF, FF, WF.convertToRightHanded), FF instanceof eF.b)) {
          const CF = FF instanceof EF.d ? FF.iiF : FF;
          if (CF.Om && CF.Om.length > 0 && (SF.mesh = await this._exportMeshAsync(CF, WF)), FF.skeleton) {
            const WF = this._skinMap.get(FF.skeleton);
            void 0 !== WF && (void 0 === this._nodesSkinMap.get(WF) && this._nodesSkinMap.set(WF, []), this._nodesSkinMap.get(WF)?.push(SF))
          }
        }
        if (FF instanceof YS.h) {
          const CF = this._camerasMap.get(FF);
          if (CF) {
            void 0 === this._nodesCameraMap.get(CF) && this._nodesCameraMap.set(CF, []), this._setCameraTransformation(SF, FF, WF.convertToRightHanded);
            const AF = FF.parent;
            if (null !== AF && jC(FF, AF)) {
              const FF = this._nodeMap.get(AF);
              if (void 0 !== FF) {
                const WF = this._nodes[FF];
                return BS(SF, WF), this._nodesCameraMap.get(CF)?.push(WF), null
              }
            }
            this._nodesCameraMap.get(CF)?.push(SF)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", SF, FF, this._nodeMap, WF.convertToRightHanded) ? SF : (OF.b.Warn(`Not exporting node ${FF.name}`), null)
      }
      _exportIndices(FF, WF, SF, CF, AF, hF, bW, dF, PF) {
        let RF = null;
        PF.mode = function(FF) {
          switch (FF) {
            case uF.c.TriangleFillMode:
              return 4;
            case uF.c.TriangleStripDrawMode:
              return 5;
            case uF.c.TriangleFanDrawMode:
              return 6;
            case uF.c.PointListDrawMode:
            case uF.c.PointFillMode:
              return 0;
            case uF.c.LineLoopDrawMode:
              return 2;
            case uF.c.LineListDrawMode:
              return 1;
            case uF.c.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${FF}`)
        }(hF);
        const iW = bW !== uF.c.CounterClockWiseSideOrientation && function(FF) {
          switch (FF) {
            case uF.c.TriangleFillMode:
            case uF.c.TriangleStripDrawMode:
            case uF.c.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(hF);
        if (iW) {
          if (hF === uF.c.TriangleStripDrawMode || hF === uF.c.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const bW = WF ? new Uint32Array(CF) : new Uint16Array(CF);
          if (FF)
            for (let WF = 0; WF + 2 < CF; WF += 3) bW[WF] = FF[SF + WF] + AF, bW[WF + 1] = FF[SF + WF + 2] + AF, bW[WF + 2] = FF[SF + WF + 1] + AF;
          else
            for (let FF = 0; FF + 2 < CF; FF += 3) bW[FF] = FF, bW[FF + 1] = FF + 2, bW[FF + 2] = FF + 1;
          RF = bW
        } else if (FF && 0 !== AF) {
          const uF = WF ? new Uint32Array(CF) : new Uint16Array(CF);
          for (let WF = 0; WF < CF; WF++) uF[WF] = FF[SF + WF] + AF;
          RF = uF
        } else FF && (RF = function(FF, WF, SF, CF) {
          let AF = FF;
          return 0 === WF && SF === FF.length || (AF = Array.isArray(FF) ? FF.slice(WF, WF + SF) : FF.subarray(WF, WF + SF)), AF instanceof Int32Array ? new Uint32Array(AF.buffer, AF.byteOffset, AF.length) : Array.isArray(AF) ? CF ? new Uint32Array(AF) : new Uint16Array(AF) : AF
        }(FF, SF, CF, WF));
        if (RF) {
          let uF = dF.getIndicesAccessor(FF, SF, CF, AF, iW);
          if (void 0 === uF) {
            const hF = this._bufferManager.createBufferView(RF),
              bW = WF ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(hF, "SCALAR", bW, CF, 0)), uF = this._accessors.length - 1, dF.setIndicesAccessor(FF, SF, CF, AF, iW, uF)
          }
          PF.indices = uF
        }
      }
      _exportVertexBuffer(FF, WF, SF, CF, AF, uF) {
        const hF = FF.getKind();
        if (!HS(hF)) return;
        if (hF.startsWith("uv") && !this._options.exportUnusedUVs && (!WF || !this._materialNeedsUVsSet.has(WF))) return;
        let bW = AF.getVertexAccessor(FF, SF, CF);
        if (void 0 === bW) {
          const WF = AF.convertedToRightHandedBuffers.get(FF._buffer) || FF._buffer.getData(),
            uF = hF === RF.h.PositionKind ? function(FF, WF, SF, CF) {
              const {
                byteOffset: AF,
                byteStride: uF,
                type: hF,
                normalized: bW
              } = WF, dF = WF.getSize(), PF = new Array(dF).fill(1 / 0), RF = new Array(dF).fill(-1 / 0);
              return (0, oS.m)(FF, AF + SF * uF, uF, dF, hF, CF * dF, bW, (FF => {
                for (let WF = 0; WF < dF; WF++) PF[WF] = Math.min(PF[WF], FF[WF]), RF[WF] = Math.max(RF[WF], FF[WF])
              })), {
                min: PF,
                max: RF
              }
            }(WF, FF, SF, CF) : void 0,
            dF = (hF === RF.h.MatricesIndicesKind || hF === RF.h.MatricesIndicesExtraKind) && FF.type === RF.h.FLOAT,
            PF = dF ? RF.h.UNSIGNED_BYTE : FF.type,
            iW = dF ? void 0 : FF.normalized,
            eF = dF ? AF.getRemappedBufferView(FF._buffer, FF) : AF.getVertexBufferView(FF._buffer),
            EF = FF.byteOffset + SF * FF.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(eF, function(FF, WF) {
            if (FF == RF.h.ColorKind) return WF ? "VEC4" : "VEC3";
            switch (FF) {
              case RF.h.PositionKind:
              case RF.h.NormalKind:
                return "VEC3";
              case RF.h.TangentKind:
              case RF.h.MatricesIndicesKind:
              case RF.h.MatricesIndicesExtraKind:
              case RF.h.MatricesWeightsKind:
              case RF.h.MatricesWeightsExtraKind:
                return "VEC4";
              case RF.h.UVKind:
              case RF.h.UV2Kind:
              case RF.h.UV3Kind:
              case RF.h.UV4Kind:
              case RF.h.UV5Kind:
              case RF.h.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${FF}`)
          }(hF, AF.hasVertexColorAlpha(FF)), PF, CF, EF, uF, iW)), bW = this._accessors.length - 1, AF.setVertexAccessor(FF, SF, CF, bW)
        }
        uF.attributes[function(FF) {
          switch (FF) {
            case RF.h.PositionKind:
              return "POSITION";
            case RF.h.NormalKind:
              return "NORMAL";
            case RF.h.TangentKind:
              return "TANGENT";
            case RF.h.ColorKind:
              return "COLOR_0";
            case RF.h.UVKind:
              return "TEXCOORD_0";
            case RF.h.UV2Kind:
              return "TEXCOORD_1";
            case RF.h.UV3Kind:
              return "TEXCOORD_2";
            case RF.h.UV4Kind:
              return "TEXCOORD_3";
            case RF.h.UV5Kind:
              return "TEXCOORD_4";
            case RF.h.UV6Kind:
              return "TEXCOORD_5";
            case RF.h.MatricesIndicesKind:
              return "JOINTS_0";
            case RF.h.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case RF.h.MatricesWeightsKind:
              return "WEIGHTS_0";
            case RF.h.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${FF}`)
        }(hF)] = bW
      }
      async _exportMaterialAsync(FF, WF, SF, CF) {
        let AF = this._materialMap.get(FF);
        if (void 0 === AF) {
          const CF = WF && Object.keys(WF).some((FF => FF.startsWith("uv")));
          if ((FF = FF instanceof AC.e ? FF.vhF[SF.materialIndex] : FF) instanceof VW) AF = await this._materialExporter.exportPBRMaterialAsync(FF, CF);
          else if (FF instanceof uC.StandardMaterial) AF = await this._materialExporter.exportStandardMaterialAsync(FF, CF);
          else {
            if (!(FF instanceof pW)) return void OF.b.Warn(`Unsupported material '${FF.name}' with type ${FF.getClassName()}`);
            AF = await this._materialExporter.exportOpenPBRMaterialAsync(FF, CF)
          }
          this._materialMap.set(FF, AF)
        }
        CF.material = AF
      }
      async _exportMeshAsync(FF, WF) {
        let SF = WF.getMesh(FF);
        if (void 0 !== SF) return SF;
        const CF = {
          primitives: []
        };
        SF = this._meshes.length, this._meshes.push(CF), WF.setMesh(FF, SF);
        const AF = FF.isUnIndexed ? null : FF.yEF(),
          hF = FF.geometry?.getVertexBuffers(),
          bW = WF.getMorphTargetsFromMesh(FF),
          dF = FF instanceof EC.e,
          PF = FF instanceof YC,
          RF = FF.Om;
        if (hF && RF && RF.length > 0)
          for (const iW of RF) {
            const SF = {
                attributes: {}
              },
              RF = iW.XC() || this._babylonScene.defaultMaterial;
            if (PF) {
              const WF = {
                  name: RF.name
                },
                CF = FF,
                AF = gW.Color3.White(),
                uF = CF.material?.alpha ?? 1,
                hF = CF.greasedLineMaterial?.color ?? AF;
              (!hF.equalsWithEpsilon(AF, MS.c) || uF < 1) && (WF.pbrMetallicRoughness = {
                baseColorFactor: [...hF.kRF(), uF]
              }), this._materials.push(WF), SF.material = this._materials.length - 1
            } else if (dF) {
              const WF = {
                  name: RF.name
                },
                CF = FF;
              (!CF.color.equalsWithEpsilon(gW.Color3.White(), MS.c) || CF.alpha < 1) && (WF.pbrMetallicRoughness = {
                baseColorFactor: [...CF.color.kRF(), CF.alpha]
              }), this._materials.push(WF), SF.material = this._materials.length - 1
            } else await this._exportMaterialAsync(RF, hF, iW, SF);
            const eF = dF || PF ? uF.c.LineListDrawMode : FF.overrideRenderingFillMode ?? RF.fillMode;
            let EF = RF._getEffectiveOrientation(FF);
            WF.wasAddedByNoopNode && !FF.OWF().useRightHandedSystem && (EF = EF === uF.c.ClockWiseSideOrientation ? uF.c.CounterClockWiseSideOrientation : uF.c.ClockWiseSideOrientation), this._exportIndices(AF, AF ? (0, oS.e)(AF, iW.indexCount, iW.indexStart, iW.verticesStart) : iW.verticesCount > 65535, AF ? iW.indexStart : iW.verticesStart, AF ? iW.indexCount : iW.verticesCount, -iW.verticesStart, eF, EF, WF, SF);
            for (const FF of Object.values(hF)) this._exportVertexBuffer(FF, RF, iW.verticesStart, iW.verticesCount, WF, SF);
            if (bW) {
              SF.targets = [];
              for (const FF of bW) SF.targets.push(FF.attributes)
            }
            CF.primitives.push(SF), this._extensionsPostExportMeshPrimitive(SF)
          }
        if (bW) {
          CF.weights = [], CF.extras || (CF.extras = {}), CF.extras.targetNames = [];
          for (const FF of bW) CF.weights.push(FF.influence), CF.extras.targetNames.push(FF.name)
        }
        return SF
      }
    }
    cA._ExtensionNames = new Array, cA._ExtensionFactories = {}, cA._ExtensionOrders = {};
    class GC {
      static async GLTFAsync(FF, WF, SF) {
        SF && SF.exportWithoutWaitingForScene || await FF.whenReadyAsync();
        const CF = new cA(FF, SF),
          AF = await CF.generateGLTFAsync(WF.replace(/\.[^/.]+$/, ""));
        return CF.dispose(), AF
      }
      static async GLBAsync(FF, WF, SF) {
        SF && SF.exportWithoutWaitingForScene || await FF.whenReadyAsync();
        const CF = new cA(FF, SF),
          AF = await CF.generateGLBAsync(WF.replace(/\.[^/.]+$/, ""));
        return CF.dispose(), AF
      }
    }
    const zA = "EXT_mesh_gpu_instancing";

    function IC(FF, WF) {
      const SF = new Float32Array(3 * WF);
      for (let CF = 0; CF < WF; CF++) SF[3 * CF + 0] = FF[4 * CF + 0], SF[3 * CF + 1] = FF[4 * CF + 1], SF[3 * CF + 2] = FF[4 * CF + 2];
      return SF
    }
    class fC {
      constructor(FF) {
        this.name = zA, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = FF
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(FF, WF, SF, CF, AF, uF) {
        return await new Promise((FF => {
          if (WF && SF instanceof VC.d && SF.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const FF = fF.r.Zero(),
              CF = fF.e.Identity(),
              hF = fF.r.One(),
              bW = SF.thinInstanceGetWorldMatrices(),
              dF = fF.j.HC[2],
              PF = fF.j.Quaternion[1],
              RF = fF.j.HC[3];
            let iW = !1,
              eF = !1,
              EF = !1;
            const QF = new Float32Array(3 * SF.YuF),
              rW = new Float32Array(4 * SF.YuF),
              gW = new Float32Array(3 * SF.YuF);
            let tW = 0;
            for (const WF of bW) WF.decompose(RF, PF, dF), AF && (wS(dF), XS(PF)), QF.set(dF.kRF(), 3 * tW), rW.set(PF.normalize().kRF(), 4 * tW), gW.set(RF.kRF(), 3 * tW), iW = iW || !dF.equalsWithEpsilon(FF), eF = eF || !PF.equalsWithEpsilon(CF), EF = EF || !RF.equalsWithEpsilon(hF), tW++;
            const TF = {
              attributes: {}
            };
            iW && (TF.attributes.TRANSLATION = this._buildAccessor(QF, "VEC3", SF.YuF, uF)), eF && (TF.attributes.ROTATION = this._buildAccessor(rW, "VEC4", SF.YuF, uF)), EF && (TF.attributes.SCALE = this._buildAccessor(gW, "VEC3", SF.YuF, uF));
            let aW = SF._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (aW) {
              const FF = SF.YuF,
                WF = "VEC3";
              SF.hasVertexAlpha && aW.length === 4 * FF ? (this._instanceColorWarned || (OF.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), aW = IC(aW, FF)) : aW.length === 4 * FF && (aW = IC(aW, FF)), aW.length === 3 * FF && (TF.attributes._COLOR_0 = this._buildAccessor(aW, WF, FF, uF))
            }
            WF.extensions = WF.extensions || {}, WF.extensions[zA] = TF
          }
          FF(WF)
        }))
      }
      _buildAccessor(FF, WF, SF, CF) {
        const AF = CF.createBufferView(FF),
          uF = CF.createAccessor(AF, WF, 5126, SF);
        return this._exporter._accessors.push(uF), this._exporter._accessors.length - 1
      }
    }
    let yA = !1;

    function sC() {
      yA || (yA = !0, cA.RegisterExtension(zA, (FF => new fC(FF))))
    }
    SF(38456);
    sC();
    var nC = SF(39690);

    function HC(FF, WF, SF, CF) {
      const AF = FF;
      let uF = null,
        hF = null,
        bW = null,
        dF = null;
      const PF = {},
        RF = WF.find((FF => "POSITION" === FF.dracoName));
      if (!RF) throw new Error("Draco: Missing position attribute for encoding.");
      if (!SF) {
        const FF = RF.data.length / RF.size;
        SF = new(FF > 65535 ? Uint32Array : Uint16Array)(FF);
        for (let WF = 0; WF < FF; WF++) SF[WF] = WF
      }
      try {
        uF = new AF.Encoder, hF = new AF.MeshBuilder, bW = new AF.Mesh, hF.AddFacesToMesh(bW, SF.length / 3, SF);
        const FF = new Map([
          [Float32Array, (FF, WF, SF, CF, AF, uF) => FF.AddFloatAttribute(WF, SF, CF, AF, uF)],
          [Uint32Array, (FF, WF, SF, CF, AF, uF) => FF.AddUInt32Attribute(WF, SF, CF, AF, uF)],
          [Uint16Array, (FF, WF, SF, CF, AF, uF) => FF.AddUInt16Attribute(WF, SF, CF, AF, uF)],
          [Uint8Array, (FF, WF, SF, CF, AF, uF) => FF.AddUInt8Attribute(WF, SF, CF, AF, uF)],
          [Int32Array, (FF, WF, SF, CF, AF, uF) => FF.AddInt32Attribute(WF, SF, CF, AF, uF)],
          [Int16Array, (FF, WF, SF, CF, AF, uF) => FF.AddInt16Attribute(WF, SF, CF, AF, uF)],
          [Int8Array, (FF, WF, SF, CF, AF, uF) => FF.AddInt8Attribute(WF, SF, CF, AF, uF)]
        ]);
        for (const SF of WF) {
          SF.data instanceof Uint8ClampedArray && (SF.data = new Uint8Array(SF.data));
          const WF = FF.get(SF.data.constructor),
            dF = SF.data.length / SF.size;
          PF[SF.kind] = WF(hF, bW, AF[SF.dracoName], dF, SF.size, SF.data), CF.quantizationBits && CF.quantizationBits[SF.dracoName] && uF.SetAttributeQuantization(AF[SF.dracoName], CF.quantizationBits[SF.dracoName])
        }
        CF.method && uF.SetEncodingMethod(AF[CF.method]), void 0 !== CF.encodeSpeed && void 0 !== CF.decodeSpeed && uF.SetSpeedOptions(CF.encodeSpeed, CF.decodeSpeed), dF = new AF.DracoInt8Array;
        const RF = uF.EncodeMeshToDracoBuffer(bW, dF);
        if (RF <= 0) throw new Error("Draco: Failed to encode.");
        const iW = new Int8Array(RF);
        for (let WF = 0; WF < RF; WF++) iW[WF] = dF.GetValue(WF);
        return {
          data: iW,
          attributeIds: PF
        }
      } finally {
        bW && AF.destroy(bW), hF && AF.destroy(hF), uF && AF.destroy(uF), dF && AF.destroy(dF)
      }
    }

    function KC() {
      let FF;
      onmessage = WF => {
        const SF = WF.data;
        switch (SF.id) {
          case "init": {
            SF.url && importScripts(SF.url);
            const WF = SF.wasmBinary ? {
              wasmBinary: SF.wasmBinary
            } : {};
            FF = DracoEncoderModule(WF), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!FF) throw new Error("Draco: Encoder module is not available.");
            FF.then((FF => {
              const WF = HC(FF, SF.attributes, SF.indices, SF.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: WF
              }, WF ? [WF.data.buffer] : void 0)
            })).catch((FF => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: FF.message
              })
            }))
        }
      }
    }
    class wC {
      constructor(FF) {
        if (FF.workerPool) return void(this._workerPoolPromise = Promise.resolve(FF.workerPool));
        const WF = FF.wasmBinary,
          SF = FF.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          CF = SF && "function" === typeof Worker && "function" === typeof URL,
          AF = CF || !FF.jsModule,
          uF = FF.wasmUrl && FF.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: AF ? DW.h.GetBabylonScriptURL(FF.wasmUrl, !0) : "",
            wasmBinaryPromise: WF ? Promise.resolve(WF) : DW.h.LoadFileAsync(DW.h.GetBabylonScriptURL(FF.wasmBinaryUrl, !0))
          } : {
            url: AF ? DW.h.GetBabylonScriptURL(FF.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        CF ? this._workerPoolPromise = uF.wasmBinaryPromise.then((FF => {
          const WF = this._getWorkerContent(),
            CF = URL.createObjectURL(new Blob([WF], {
              type: "application/javascript"
            }));
          return new nC.b(SF, (() => async function(FF, WF, SF) {
            return await new Promise(((CF, AF) => {
              const uF = WF => {
                  FF.removeEventListener("error", uF), FF.removeEventListener("message", hF), AF(WF)
                },
                hF = WF => {
                  "initDone" === WF.data.id && (FF.removeEventListener("error", uF), FF.removeEventListener("message", hF), CF(FF))
                };
              if (FF.addEventListener("error", uF), FF.addEventListener("message", hF), WF) {
                const CF = WF.slice(0);
                FF.postMessage({
                  id: "init",
                  url: SF,
                  wasmBinary: CF
                }, [CF])
              } else FF.postMessage({
                id: "init",
                url: SF
              })
            }))
          }(new Worker(CF), FF, uF.url)))
        })) : this._modulePromise = uF.wasmBinaryPromise.then((async WF => {
          if (!this._isModuleAvailable() && !FF.jsModule) {
            if (!uF.url) throw new Error("Draco codec module is not available");
            await DW.h.LoadBabylonScriptAsync(uF.url)
          }
          return await this._createModuleAsync(WF, FF.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((FF => {
          FF.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function XC() {
      const FF = FF => !!FF && "object" === typeof FF;
      for (var WF = arguments.length, SF = new Array(WF), CF = 0; CF < WF; CF++) SF[CF] = arguments[CF];
      return SF.reduce(((WF, SF) => {
        const CF = Object.keys(SF);
        for (const AF of CF) {
          const CF = WF[AF],
            uF = SF[AF];
          Array.isArray(CF) && Array.isArray(uF) ? WF[AF] = CF.concat(uF) : FF(CF) && FF(uF) ? WF[AF] = XC(CF, uF) : WF[AF] = uF
        }
        return WF
      }), {})
    }

    function UC(FF) {
      return FF === yW.k.PositionKind ? "POSITION" : FF === yW.k.NormalKind ? "NORMAL" : FF === yW.k.ColorKind ? "COLOR" : FF.startsWith(yW.k.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const BC = {
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
    class jA extends wC {
      static get DefaultAvailable() {
        return !!((FF = jA.DefaultConfiguration).wasmUrl && (FF.wasmBinary || FF.wasmBinaryUrl) && "object" === typeof WebAssembly || FF.fallbackUrl);
        var FF
      }
      static get Default() {
        return jA._Default ?? (jA._Default = new jA), jA._Default
      }
      static ResetDefault(FF) {
        jA._Default && (FF || jA._Default.dispose(), jA._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(FF, WF) {
        return {
          module: await (WF || DracoEncoderModule)({
            wasmBinary: FF
          })
        }
      }
      _getWorkerContent() {
        return `${HC}(${KC})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jA.DefaultConfiguration)
      }
      async _encodeAsync(FF, WF, SF) {
        const CF = SF ? XC(BC, SF) : BC;
        if (this._workerPoolPromise) {
          const SF = await this._workerPoolPromise;
          return await new Promise(((AF, uF) => {
            SF.push(((SF, hF) => {
              const bW = FF => {
                  SF.removeEventListener("error", bW), SF.removeEventListener("message", dF), uF(FF), hF()
                },
                dF = FF => {
                  "encodeMeshSuccess" === FF.data.id ? (SF.removeEventListener("error", bW), SF.removeEventListener("message", dF), AF(FF.data.encodedMeshData), hF()) : "encodeMeshError" === FF.data.id && (SF.removeEventListener("error", bW), SF.removeEventListener("message", dF), uF(new Error(FF.data.errorMessage)), hF())
                };
              SF.addEventListener("error", bW), SF.addEventListener("message", dF);
              const PF = [];
              for (const WF of FF) PF.push(WF.data.buffer);
              WF && PF.push(WF.buffer), SF.postMessage({
                id: "encodeMesh",
                attributes: FF,
                indices: WF,
                options: CF
              }, PF)
            }))
          }))
        }
        if (this._modulePromise) {
          return HC((await this._modulePromise).module, FF, WF, CF)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(FF, WF) {
        if (0 == FF.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        FF instanceof VC.d && FF.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === WF?.method && (OF.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), WF.method = "MESH_SEQUENTIAL_ENCODING");
        const SF = function(FF) {
            let WF = FF.yEF(void 0, !0);
            return !WF || WF instanceof Uint32Array || WF instanceof Uint16Array || (WF = ((0, oS.e)(WF, WF.length) ? Uint32Array : Uint16Array).from(WF)), WF
          }(FF),
          CF = function(FF, WF) {
            const SF = [];
            for (const CF of FF.getVerticesDataKinds()) {
              if (WF?.includes(CF)) {
                if (CF === yW.k.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const AF = FF.getVertexBuffer(CF),
                uF = AF.getSize(),
                hF = (0, oS.x)(AF.getData(), uF, AF.type, AF.byteOffset, AF.byteStride, FF.getTotalVertices(), !0);
              SF.push({
                kind: CF,
                dracoName: UC(CF),
                size: uF,
                data: hF
              })
            }
            return SF
          }(FF, WF?.excludedAttributes);
        return await this._encodeAsync(CF, SF, WF)
      }
    }
    jA.DefaultConfiguration = {
      wasmUrl: `${DW.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${DW.h._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${DW.h._DefaultCdnUrl}/draco_encoder.js`
    }, jA._Default = null;
    const vA = "KHR_draco_mesh_compression";
    class JC {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(FF) {
        this.name = vA, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === FF.options.meshCompressionMethod && jA.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(FF, WF, SF) {
        if (!this.enabled) return;
        if (4 !== FF.mode && 5 !== FF.mode) return void OF.b.Warn("Cannot compress primitive with mode " + FF.mode + ".");
        const CF = [],
          AF = [];
        let uF = null;
        if (void 0 !== FF.indices) {
          const hF = SF[FF.indices],
            bW = WF.getBufferView(hF);
          uF = WF.getData(bW).slice(), CF.push(bW), AF.push(hF)
        }
        const hF = [];
        for (const [RF, iW] of Object.entries(FF.attributes)) {
          const FF = SF[iW],
            uF = WF.getBufferView(FF),
            dF = nS(FF.type),
            PF = (0, oS.x)(WF.getData(uF), dF, FF.componentType, FF.byteOffset || 0, uF.byteStride || (0, oS.t)(FF.componentType) * dF, FF.count, !0);
          hF.push({
            kind: RF,
            dracoName: (bW = RF, "POSITION" === bW ? "POSITION" : "NORMAL" === bW ? "NORMAL" : bW.startsWith("COLOR") ? "COLOR" : bW.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: nS(FF.type),
            data: PF
          }), CF.push(uF), AF.push(FF)
        }
        var bW;
        const dF = {
            method: FF.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          PF = jA.Default._encodeAsync(hF, uF, dF).then((SF => {
            const uF = {
                bufferView: -1,
                attributes: SF.attributeIds
              },
              hF = WF.createBufferView(SF.data);
            WF.setBufferView(uF, hF);
            for (const FF of CF) this._bufferViewsUsed.add(FF);
            for (const FF of AF) this._accessorsUsed.add(FF);
            FF.extensions || (FF.extensions = {}), FF.extensions[vA] = uF
          })).catch((FF => {
            OF.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + FF.message)
          }));
        this._encodePromises.push(PF), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(FF) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((WF => {
          FF.getPropertiesWithBufferView(WF).every((FF => this._accessorsUsed.has(FF))) && FF.removeBufferView(WF)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let pC = !1;

    function lC() {
      pC || (pC = !0, cA.RegisterExtension(vA, (FF => new JC(FF))))
    }
    lC();
    var FA = SF(39432);
    const WA = "KHR_lights_punctual",
      SA = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      CA = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      AA = fF.r.Backward();
    class uA {
      constructor(FF) {
        this.name = WA, this.enabled = !0, this.required = !1, this._exporter = FF
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[WA] = this._lights
      }
      async postExportNodeAsync(FF, WF, SF, CF, AF) {
        return await new Promise((uF => {
          if (!(SF instanceof RC.c)) return void uF(WF);
          const hF = SF.getTypeID() == RC.c.LIGHTTYPEID_POINTLIGHT ? "point" : SF.getTypeID() == RC.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : SF.getTypeID() == RC.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!hF || !(SF instanceof FA.d)) return OF.b.Warn(`${FF}: Light ${SF.name} is not supported in ${WA}`), void uF(WF);
          if (SF.falloffType !== RC.c.FALLOFF_GLTF && OF.b.Warn(`${FF}: Light falloff for ${SF.name} does not match the ${WA} specification!`), !SF.position.HeF(0, 0, 0)) {
            const FF = fF.j.HC[0].fdF(SF.position);
            AF && wS(FF), WF.translation = FF.kRF()
          }
          if ("point" !== hF) {
            const FF = SF.direction.normalizeToRef(fF.j.HC[0]);
            AF && wS(FF);
            const CF = fF.e.FromUnitVectorsToRef(AA, FF, fF.j.Quaternion[0]);
            fF.e.IsIdentity(CF) || (WF.rotation = CF.kRF())
          }
          const bW = {
            type: hF,
            name: SF.name,
            color: SF.diffuse.kRF(),
            intensity: SF.intensity,
            range: SF.range
          };
          if (JS(bW, SA), "spot" === hF) {
            const FF = SF;
            bW.spot = {
              innerConeAngle: FF.innerAngle / 2,
              outerConeAngle: FF.angle / 2
            }, JS(bW.spot, CA)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(bW);
          const dF = {
              light: this._lights.lights.length - 1
            },
            PF = SF.parent;
          if (PF && jC(SF, PF)) {
            const FF = CF.get(PF);
            if (FF) {
              const SF = this._exporter._nodes[FF];
              return BS(WF, SF), SF.extensions || (SF.extensions = {}), SF.extensions[WA] = dF, void uF(null)
            }
          }
          WF.extensions || (WF.extensions = {}), WF.extensions[WA] = dF, uF(WF)
        }))
      }
    }
    let hA = !1;

    function bu() {
      hA || (hA = !0, cA.RegisterExtension(WA, (FF => new uA(FF))))
    }
    bu();
    const dA = "KHR_interactivity";
    class PA {
      constructor(FF) {
        this._exporter = FF, this.name = dA, this.enabled = !!FF.options.khrInteractivity, this.required = FF.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var FF, WF, SF;
        const CF = this._exporter.options.khrInteractivity;
        if (!CF) return;
        const AF = CF.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: FF => this._exporter._getNodeIndex(FF),
          getAnimationIndex: FF => this._exporter._getAnimationIndex(FF),
          getCameraIndex: FF => this._exporter._getCameraIndex(FF),
          getMaterialIndex: FF => this._exporter._getMaterialIndex(FF),
          getRootIndex: (FF, WF) => this._exporter._getRootIndex(FF, WF),
          setNodeExtension: (FF, WF, SF) => this._exporter._setNodeExtension(FF, WF, SF)
        });
        this._exporter._glTF.extensions[dA] = AF;
        for (const uF of CF.additionalExtensionsUsed)(FF = this._exporter._glTF).extensionsUsed || (FF.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(uF) && this._exporter._glTF.extensionsUsed.push(uF);
        for (const uF of CF.additionalExtensionsRequired)(WF = this._exporter._glTF).extensionsUsed || (WF.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(uF) && this._exporter._glTF.extensionsUsed.push(uF), (SF = this._exporter._glTF).extensionsRequired || (SF.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(uF) && this._exporter._glTF.extensionsRequired.push(uF)
      }
    }
    let RA = !1;

    function iu() {
      RA || (RA = !0, cA.RegisterExtension(dA, (FF => new PA(FF)), 200))
    }
    iu();
    const eA = "EXT_lights_area",
      EA = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      QA = {
        aspect: 1
      },
      ru = fF.r.Backward();
    class gu {
      constructor(FF) {
        this.name = eA, this.enabled = !0, this.required = !1, this._exporter = FF
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[eA] = this._lights
      }
      async postExportNodeAsync(FF, WF, SF, CF, AF) {
        return await new Promise((uF => {
          if (!(SF instanceof RC.c)) return void uF(WF);
          const hF = SF.getTypeID() == RC.c.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!hF) return OF.b.Warn(`${FF}: Light ${SF.name} is not supported in ${eA}`), void uF(WF);
          const bW = SF;
          if (bW.falloffType !== RC.c.FALLOFF_GLTF && OF.b.Warn(`${FF}: Light falloff for ${SF.name} does not match the ${eA} specification!`), !bW.position.HeF(0, 0, 0)) {
            const FF = fF.j.HC[0].fdF(bW.position);
            AF && wS(FF), WF.translation = FF.kRF()
          }
          const dF = fF.r.Forward();
          AF && wS(dF);
          const PF = fF.e.FromUnitVectorsToRef(ru, dF, fF.j.Quaternion[0]);
          fF.e.IsIdentity(PF) || (WF.rotation = PF.kRF());
          const RF = {
            type: hF,
            name: bW.name,
            color: bW.diffuse.kRF(),
            intensity: bW.intensity,
            size: bW.height,
            rect: {
              aspect: bW.width / bW.height
            }
          };
          JS(RF, EA), RF.rect && JS(RF.rect, QA), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(RF);
          const iW = {
              light: this._lights.lights.length - 1
            },
            eF = SF.parent;
          if (eF && jC(bW, eF)) {
            const FF = CF.get(eF);
            if (FF) {
              const SF = this._exporter._nodes[FF];
              return BS(WF, SF), SF.extensions || (SF.extensions = {}), SF.extensions[eA] = iW, void uF(null)
            }
          }
          WF.extensions || (WF.extensions = {}), WF.extensions[eA] = iW, uF(WF)
        }))
      }
    }
    let tu = !1;

    function TA() {
      tu || (tu = !0, cA.RegisterExtension(eA, (FF => new gu(FF))))
    }
    TA();
    const au = "KHR_materials_anisotropy";
    class ku {
      constructor(FF) {
        this.name = au, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = FF
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(FF, WF, SF) {
        const CF = [];
        if (SF instanceof VW) {
          if (SF.anisotropy.isEnabled && !SF.anisotropy.legacy) return SF.anisotropy.texture && CF.push(SF.anisotropy.texture), CF
        } else if (SF instanceof pW && SF.specularRoughnessAnisotropy > 0) {
          const FF = function(FF) {
            const WF = FF.specularRoughnessAnisotropyTexture,
              SF = FF.geometryTangentTexture;
            return `${WF&&WF.getInternalTexture()?WF.getInternalTexture().uniqueId:"NoStrength"}_${SF&&SF.getInternalTexture()?SF.getInternalTexture().uniqueId:"NoTangent"}`
          }(SF);
          if (this._anisoTexturesMap[FF]) CF.push(this._anisoTexturesMap[FF]);
          else {
            const WF = await async function(FF) {
              const WF = FF.OWF(),
                SF = FF.specularRoughnessAnisotropyTexture,
                CF = FF.geometryTangentTexture;
              return SF || CF ? await hS("AnisotropyTexture", PS(CF ? bC(CF, 0) : dS(1), CF ? bC(CF, 1) : dS(0), SF ? bC(SF, 0) : dS(1)), WF) : null
            }(SF);
            WF && (CF.push(WF), this._anisoTexturesMap[FF] = WF)
          }
          return CF
        }
        return []
      }
      postExportMaterialAsync(FF, WF, SF) {
        return new Promise((FF => {
          var CF;
          if (SF instanceof VW) {
            if (!SF.anisotropy.isEnabled || SF.anisotropy.legacy) return void FF(WF);
            this._wasUsed = !0, WF.extensions = WF.extensions || {};
            const CF = this._exporter._materialExporter.getTextureInfo(SF.anisotropy.texture),
              AF = {
                anisotropyStrength: SF.anisotropy.intensity,
                anisotropyRotation: SF.anisotropy.angle,
                anisotropyTexture: CF ?? void 0
              };
            null !== AF.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(SF), WF.extensions[au] = AF
          } else if (SF instanceof pW && SF.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, WF.extensions = WF.extensions || {};
            let AF = SF.specularRoughnessTexture;
            SF._useRoughnessFromMetallicTextureGreen && (AF = SF.baseMetalnessTexture);
            const uF = this._anisoTexturesMap[SF.id];
            if (!AF && !uF) {
              let CF = SF.specularRoughness,
                AF = SF.specularRoughnessAnisotropy;
              if (!SF._useGltfStyleAnisotropy) {
                const FF = function(FF, WF) {
                  const SF = FF * FF,
                    CF = SF * Math.sqrt(2 / (1 + (1 - WF) * (1 - WF))),
                    AF = (1 - WF) * CF;
                  return {
                    newBaseRoughness: Math.sqrt(AF),
                    newAnisotropyStrength: Math.min(Math.sqrt((CF - SF) / Math.max(1 - SF, 1e-4)), 1)
                  }
                }(SF.specularRoughness, SF.specularRoughnessAnisotropy);
                CF = FF.newBaseRoughness, AF = FF.newAnisotropyStrength
              }
              WF.pbrMetallicRoughness && (WF.pbrMetallicRoughness.roughnessFactor = CF);
              const uF = {
                anisotropyStrength: AF,
                anisotropyRotation: SF.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return WF.extensions[au] = uF, FF(WF)
            }
            const hF = uF ? this._exporter._materialExporter.getTextureInfo(uF) : null,
              bW = {
                anisotropyStrength: SF.specularRoughnessAnisotropy,
                anisotropyRotation: SF.geometryTangentAngle,
                anisotropyTexture: hF || void 0,
                extensions: {}
              };
            SF._useGltfStyleAnisotropy || (WF.extensions.KHR_materials_openpbr = {}, (CF = this._exporter._glTF).extensionsUsed || (CF.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(SF), WF.extensions[au] = bW
          }
          FF(WF)
        }))
      }
    }
    let qu = !1;

    function VA() {
      qu || (qu = !0, cA.RegisterExtension(au, (FF => new ku(FF))))
    }
    VA();
    const NA = "KHR_materials_clearcoat";

    function DA(FF, WF) {
      const SF = new ZF.i(WF.name, WF.OWF());
      return SF._texture = FF, SF.coordinatesIndex = WF.coordinatesIndex, WF instanceof ZF.i && (SF.uOffset = WF.uOffset, SF.vOffset = WF.vOffset, SF.uScale = WF.uScale, SF.vScale = WF.vScale, SF.wAng = WF.wAng), SF.wrapU = WF.wrapU, SF.wrapV = WF.wrapV, SF
    }
    class LA {
      constructor(FF) {
        this.name = NA, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = FF
      }
      dispose() {
        for (const FF of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[FF].dispose()
        }
        this._mergedTexturesMap = {};
        for (const FF of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[FF].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(FF, WF, SF) {
        const CF = [];
        if (SF instanceof VW) {
          if (SF.clearCoat.isEnabled) return SF.clearCoat.texture && CF.push(SF.clearCoat.texture), !SF.clearCoat.useRoughnessFromMainTexture && SF.clearCoat.textureRoughness && CF.push(SF.clearCoat.textureRoughness), SF.clearCoat.bumpTexture && CF.push(SF.clearCoat.bumpTexture), CF
        } else if (SF instanceof pW && SF.coatWeight > 0) {
          let FF = !1;
          if (SF.coatWeightTexture ? SF.coatRoughnessTexture ? SF._useCoatRoughnessFromGreenChannel && SF.coatWeightTexture.getInternalTexture() === SF.coatRoughnessTexture.getInternalTexture() ? (CF.push(SF.coatWeightTexture), CF.push(SF.coatRoughnessTexture)) : FF = !0 : CF.push(SF.coatWeightTexture) : SF.coatRoughnessTexture && (SF._useCoatRoughnessFromGreenChannel ? CF.push(SF.coatRoughnessTexture) : FF = !0), FF) {
            const FF = function(FF) {
              const WF = FF.coatWeightTexture,
                SF = WF && WF.getInternalTexture() ? WF.getInternalTexture().uniqueId : "NoCoat",
                CF = FF.coatRoughnessTexture;
              return `${SF}_${CF&&CF.getInternalTexture()?CF.getInternalTexture().uniqueId:"NoRoughness"}`
            }(SF);
            if (!this._cachedInternalTexturesMap[FF]) {
              const WF = await async function(FF) {
                const WF = FF.OWF(),
                  SF = FF.coatWeightTexture,
                  CF = FF.coatRoughnessTexture;
                return SF || CF ? (await hS("CoatTexture", PS(SF ? bC(SF, 0) : dS(1), CF ? bC(CF, FF._useCoatRoughnessFromGreenChannel ? 1 : 0) : dS(1)), WF)).getInternalTexture() : null
              }(SF);
              WF && (this._cachedInternalTexturesMap[FF] = WF)
            }
            this._cachedInternalTexturesMap[FF] && (SF.coatWeightTexture && (this._mergedTexturesMap[SF.coatWeightTexture.uniqueId] = DA(this._cachedInternalTexturesMap[FF], SF.coatWeightTexture), CF.push(this._mergedTexturesMap[SF.coatWeightTexture.uniqueId])), SF.coatRoughnessTexture && (this._mergedTexturesMap[SF.coatRoughnessTexture.uniqueId] = DA(this._cachedInternalTexturesMap[FF], SF.coatRoughnessTexture), CF.push(this._mergedTexturesMap[SF.coatRoughnessTexture.uniqueId])))
          }
          return SF.geometryCoatNormalTexture && CF.push(SF.geometryCoatNormalTexture), CF
        }
        return []
      }
      postExportMaterialAsync(FF, WF, SF) {
        return new Promise((FF => {
          if (SF instanceof VW) {
            if (!SF.clearCoat.isEnabled) return void FF(WF);
            this._wasUsed = !0, WF.extensions = WF.extensions || {};
            const CF = this._exporter._materialExporter.getTextureInfo(SF.clearCoat.texture);
            let AF;
            AF = SF.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(SF.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(SF.clearCoat.textureRoughness), SF.clearCoat.isTintEnabled && DW.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${SF.name}`), SF.clearCoat.remapF0OnInterfaceChange && DW.h.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${SF.name}`);
            const uF = this._exporter._materialExporter.getTextureInfo(SF.clearCoat.bumpTexture),
              hF = {
                clearcoatFactor: SF.clearCoat.intensity,
                clearcoatTexture: CF ?? void 0,
                clearcoatRoughnessFactor: SF.clearCoat.roughness,
                clearcoatRoughnessTexture: AF ?? void 0,
                clearcoatNormalTexture: uF ?? void 0
              };
            null === hF.clearcoatTexture && null === hF.clearcoatRoughnessTexture && null === hF.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(SF), WF.extensions[NA] = hF
          } else if (SF instanceof pW) {
            if (0 == SF.coatWeight) return void FF(WF);
            let CF, AF, uF, hF;
            this._wasUsed = !0, WF.extensions = WF.extensions || {}, SF.coatWeightTexture && (CF = this._mergedTexturesMap[SF.coatWeightTexture.uniqueId], AF = this._exporter._materialExporter.getTextureInfo(CF)), SF.coatRoughnessTexture && (uF = this._mergedTexturesMap[SF.coatRoughnessTexture.uniqueId], hF = this._exporter._materialExporter.getTextureInfo(uF)), SF.coatColorTexture && DW.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${SF.name}`);
            const bW = this._exporter._materialExporter.getTextureInfo(SF.geometryCoatNormalTexture),
              dF = {
                clearcoatFactor: SF.coatWeight,
                clearcoatTexture: AF ?? void 0,
                clearcoatRoughnessFactor: SF.coatRoughness,
                clearcoatRoughnessTexture: hF ?? void 0,
                clearcoatNormalTexture: bW ?? void 0
              };
            null === dF.clearcoatTexture && null === dF.clearcoatRoughnessTexture && null === dF.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(SF), WF.extensions[NA] = dF
          }
          FF(WF)
        }))
      }
    }
    let mu = !1;

    function OA() {
      mu || (mu = !0, cA.RegisterExtension(NA, (FF => new LA(FF))))
    }
    OA();
    const xu = "KHR_materials_coat";

    function ZA(FF) {
      const WF = FF.coatRoughnessAnisotropyTexture,
        SF = FF.geometryCoatTangentTexture;
      return `${WF&&WF.getInternalTexture()?WF.getInternalTexture().uniqueId:"NoStrength"}_${SF&&SF.getInternalTexture()?SF.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function oA(FF, WF) {
      const SF = new ZF.i(WF.name, WF.OWF());
      return SF._texture = FF, SF.coordinatesIndex = WF.coordinatesIndex, WF instanceof ZF.i && (SF.uOffset = WF.uOffset, SF.vOffset = WF.vOffset, SF.uScale = WF.uScale, SF.vScale = WF.vScale, SF.wAng = WF.wAng), SF.wrapU = WF.wrapU, SF.wrapV = WF.wrapV, SF
    }
    class YA {
      constructor(FF) {
        this.name = xu, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = FF
      }
      dispose() {
        for (const FF of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[FF].dispose()
        }
        this._mergedTexturesMap = {};
        for (const FF of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[FF].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(FF, WF, SF) {
        const CF = [];
        if (SF instanceof VW) {
          if (SF.clearCoat.isEnabled) return SF.clearCoat.texture && CF.push(SF.clearCoat.texture), !SF.clearCoat.useRoughnessFromMainTexture && SF.clearCoat.textureRoughness && CF.push(SF.clearCoat.textureRoughness), SF.clearCoat.bumpTexture && CF.push(SF.clearCoat.bumpTexture), SF.clearCoat.tintTexture && CF.push(SF.clearCoat.tintTexture), CF
        } else if (SF instanceof pW && SF.coatWeight > 0) {
          let FF = !1;
          if (SF.coatWeightTexture ? SF.coatRoughnessTexture ? SF._useCoatRoughnessFromGreenChannel && SF.coatWeightTexture.getInternalTexture() === SF.coatRoughnessTexture.getInternalTexture() ? (CF.push(SF.coatWeightTexture), CF.push(SF.coatRoughnessTexture)) : FF = !0 : CF.push(SF.coatWeightTexture) : SF.coatRoughnessTexture && (SF._useCoatRoughnessFromGreenChannel ? CF.push(SF.coatRoughnessTexture) : FF = !0), FF) {
            const FF = function(FF) {
              const WF = FF.coatWeightTexture,
                SF = WF && WF.getInternalTexture() ? WF.getInternalTexture().uniqueId : "NoCoat",
                CF = FF.coatRoughnessTexture;
              return `${SF}_${CF&&CF.getInternalTexture()?CF.getInternalTexture().uniqueId:"NoRoughness"}`
            }(SF);
            if (!this._cachedInternalTexturesMap[FF]) {
              const WF = await async function(FF) {
                const WF = FF.OWF(),
                  SF = FF.coatWeightTexture,
                  CF = FF.coatRoughnessTexture;
                return SF || CF ? (await hS("CoatTexture", PS(SF ? bC(SF, 0) : dS(1), CF ? bC(CF, FF._useCoatRoughnessFromGreenChannel ? 1 : 0) : dS(1)), WF)).getInternalTexture() : null
              }(SF);
              WF && (this._cachedInternalTexturesMap[FF] = WF)
            }
            this._cachedInternalTexturesMap[FF] && (SF.coatWeightTexture && (this._mergedTexturesMap[SF.coatWeightTexture.uniqueId] = oA(this._cachedInternalTexturesMap[FF], SF.coatWeightTexture), CF.push(this._mergedTexturesMap[SF.coatWeightTexture.uniqueId])), SF.coatRoughnessTexture && (this._mergedTexturesMap[SF.coatRoughnessTexture.uniqueId] = oA(this._cachedInternalTexturesMap[FF], SF.coatRoughnessTexture), CF.push(this._mergedTexturesMap[SF.coatRoughnessTexture.uniqueId])))
          }
          if (SF.geometryCoatNormalTexture && CF.push(SF.geometryCoatNormalTexture), SF.coatColorTexture && CF.push(SF.coatColorTexture), SF.coatRoughnessAnisotropy > 0) {
            const FF = ZA(SF);
            if (this._mergedTexturesMap[FF]) CF.push(this._mergedTexturesMap[FF]);
            else {
              const WF = await async function(FF) {
                const WF = FF.OWF(),
                  SF = FF.coatRoughnessAnisotropyTexture,
                  CF = FF.geometryCoatTangentTexture;
                return SF || CF ? await hS("AnisotropyTexture", PS(CF ? bC(CF, 0) : dS(1), CF ? bC(CF, 1) : dS(0), SF ? bC(SF, 0) : dS(1)), WF) : null
              }(SF);
              WF && (CF.push(WF), this._mergedTexturesMap[FF] = WF)
            }
            return CF
          }
          return CF
        }
        return []
      }
      postExportMaterialAsync(FF, WF, SF) {
        return new Promise((FF => {
          var CF;
          if (SF instanceof VW) {
            if (!SF.clearCoat.isEnabled) return void FF(WF);
            this._wasUsed = !0, WF.extensions = WF.extensions || {};
            const CF = this._exporter._materialExporter.getTextureInfo(SF.clearCoat.texture);
            let AF, uF;
            AF = SF.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(SF.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(SF.clearCoat.textureRoughness), SF.clearCoat.isTintEnabled && (uF = this._exporter._materialExporter.getTextureInfo(SF.clearCoat.tintTexture));
            const hF = this._exporter._materialExporter.getTextureInfo(SF.clearCoat.bumpTexture),
              bW = SF.clearCoat.indexOfRefraction,
              dF = {
                coatFactor: SF.clearCoat.intensity,
                coatTexture: CF ?? void 0,
                coatRoughnessFactor: SF.clearCoat.roughness,
                coatRoughnessTexture: AF ?? void 0,
                coatNormalTexture: hF ?? void 0,
                coatColorFactor: SF.clearCoat.tintColor.kRF(),
                coatColorTexture: uF ?? void 0,
                coatIor: 1.5 !== bW ? bW : void 0
              };
            null === dF.coatTexture && null === dF.coatRoughnessTexture && null === dF.coatRoughnessTexture && null === dF.coatColorTexture || this._exporter._materialNeedsUVsSet.add(SF), WF.extensions[xu] = dF
          } else if (SF instanceof pW) {
            if (0 == SF.coatWeight) return void FF(WF);
            let AF, uF, hF, bW;
            this._wasUsed = !0, WF.extensions = WF.extensions || {}, SF.coatWeightTexture && (AF = this._mergedTexturesMap[SF.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[SF.coatWeightTexture.uniqueId] : SF.coatWeightTexture, uF = this._exporter._materialExporter.getTextureInfo(AF)), SF.coatRoughnessTexture && (hF = this._mergedTexturesMap[SF.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[SF.coatRoughnessTexture.uniqueId] : SF.coatRoughnessTexture, bW = this._exporter._materialExporter.getTextureInfo(hF));
            const dF = this._exporter._materialExporter.getTextureInfo(SF.geometryCoatNormalTexture),
              PF = this._exporter._materialExporter.getTextureInfo(SF.coatColorTexture),
              RF = SF.coatIor,
              iW = SF.coatDarkening,
              eF = SF.coatRoughnessTexture,
              EF = ZA(SF),
              QF = this._mergedTexturesMap[EF];
            let rW, gW = 0,
              tW = 0;
            if (SF.coatRoughnessAnisotropy > 0) {
              if (eF || QF) {
                const FF = QF ? this._exporter._materialExporter.getTextureInfo(QF) : null;
                gW = SF.coatRoughnessAnisotropy, tW = SF.geometryCoatTangentAngle, rW = FF || void 0
              } else {
                let FF = SF.coatRoughness,
                  CF = SF.coatRoughnessAnisotropy;
                if (!SF._useGltfStyleAnisotropy) {
                  const WF = function(FF, WF) {
                    const SF = FF * FF,
                      CF = SF * Math.sqrt(2 / (1 + (1 - WF) * (1 - WF))),
                      AF = (1 - WF) * CF;
                    return {
                      newBaseRoughness: Math.sqrt(AF),
                      newAnisotropyStrength: Math.min(Math.sqrt((CF - SF) / Math.max(1 - SF, 1e-4)), 1)
                    }
                  }(SF.coatRoughness, SF.coatRoughnessAnisotropy);
                  FF = WF.newBaseRoughness, CF = WF.newAnisotropyStrength
                }
                WF.pbrMetallicRoughness && (WF.pbrMetallicRoughness.roughnessFactor = FF), gW = CF, tW = SF.geometryCoatTangentAngle + .5 * Math.PI, rW = void 0
              }
              SF._useGltfStyleAnisotropy || (WF.extensions.KHR_materials_openpbr = {}, (CF = this._exporter._glTF).extensionsUsed || (CF.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const TF = {
              coatFactor: SF.coatWeight,
              coatTexture: uF ?? void 0,
              coatRoughnessFactor: SF.coatRoughness,
              coatRoughnessTexture: bW ?? void 0,
              coatNormalTexture: dF ?? void 0,
              coatColorFactor: SF.coatColor.kRF(),
              coatColorTexture: PF ?? void 0,
              coatIor: 1.5 !== RF ? RF : void 0,
              coatDarkeningFactor: 1 !== iW ? iW : void 0,
              coatAnisotropyRotation: tW,
              coatAnisotropyStrength: gW,
              coatAnisotropyTexture: rW
            };
            null === TF.coatTexture && null === TF.coatRoughnessTexture && null === TF.coatRoughnessTexture && null === TF.coatAnisotropyTexture && null === TF.coatColorTexture || this._exporter._materialNeedsUVsSet.add(SF), WF.extensions[xu] = TF
          }
          FF(WF)
        }))
      }
    }
    let MA = !1;

    function cu() {
      MA || (MA = !0, cA.RegisterExtension(xu, (FF => new YA(FF))))
    }
    cu();
    let GA = (() => {
      var FF, WF, SF, CF, AF, hF, bW, dF, PF, RF, iW, eF, EF, QF, rW, gW, tW, TF, aW, kW, qW, VF, NF, DF, OF, xW, ZF, oF, YF, MF, GF, zW, IF, fF, yW, sF, nF, HF, KF, wF, UF, BF, jW, vW, JF, pF, lF, FW, WW, SW, CW, AW, uW, hW, bS, dW, PW, RW, iS, eW, EW, QW, rS, gS, tS, TW, aS;
      let kS, qS, DW, LW, mS, OW, xS, ZW, oW, YW, MW, cS, GW, zS, IW, fW, yS, sW, nW, HW, KW, wW, XW, UW, BW, jS, vS, JW, pW, lW, FS, WS, SS, CS, AS, uS, hS, bC, dS, PS, RS, iC, eS, ES, QS, rC, gC, tC, TS, aC, kC, qC, VS, NS, DS, LS, mC, OS, xC, ZS, oS, YS, MS, cC, GS, zC, IS, fS, yC = VW,
        sS = [],
        nS = [],
        HS = [],
        KS = [],
        wS = [],
        XS = [],
        US = [],
        BS = [],
        jC = [],
        vC = [],
        JS = [],
        pS = [],
        lS = [],
        FC = [],
        WC = [],
        SC = [],
        CC = [],
        AC = [],
        uC = [],
        hC = [],
        bA = [],
        dC = [],
        PC = [],
        RC = [],
        iA = [],
        eC = [],
        EC = [],
        QC = [],
        rA = [],
        gA = [],
        tA = [],
        TC = [],
        aA = [],
        kA = [],
        qA = [],
        VC = [],
        NC = [],
        DC = [],
        LC = [],
        mA = [],
        OC = [],
        xA = [],
        ZC = [],
        oC = [],
        YC = [],
        MC = [],
        cA = [],
        GC = [],
        zA = [],
        IC = [],
        fC = [],
        yA = [],
        sC = [],
        nC = [],
        HC = [],
        KC = [],
        wC = [],
        XC = [],
        UC = [],
        BC = [],
        jA = [],
        vA = [],
        JC = [],
        pC = [],
        lC = [],
        FA = [],
        WA = [],
        SA = [],
        CA = [],
        AA = [],
        uA = [],
        hA = [],
        bu = [],
        dA = [],
        PA = [],
        RA = [],
        iu = [],
        eA = [],
        EA = [],
        QA = [],
        ru = [],
        gu = [],
        tu = [],
        TA = [],
        au = [],
        ku = [],
        qu = [],
        VA = [],
        NA = [],
        DA = [],
        LA = [],
        mu = [],
        OA = [],
        xu = [],
        ZA = [],
        oA = [],
        YA = [],
        MA = [],
        cu = [],
        GA = [],
        zu = [],
        IA = [],
        fA = [],
        yu = [],
        sA = [],
        nA = [],
        HA = [],
        KA = [],
        wA = [],
        XA = [],
        UA = [],
        BA = [],
        ju = [],
        vu = [],
        JA = [],
        pA = [],
        lA = [],
        Fu = [],
        Wu = [],
        Su = [],
        Cu = [],
        Au = [],
        uu = [],
        hu = [],
        bh = [],
        du = [],
        Pu = [],
        Ru = [],
        ih = [],
        eu = [],
        Eu = [],
        Qu = [],
        rh = [];
      return FF = class extends yC {
        get directIntensity() {
          return (0, LF.d)(this, WF, "f")
        }
        set directIntensity(FF) {
          (0, LF.h)(this, WF, FF, "f")
        }
        get emissiveIntensity() {
          return (0, LF.d)(this, SF, "f")
        }
        set emissiveIntensity(FF) {
          (0, LF.h)(this, SF, FF, "f")
        }
        get environmentIntensity() {
          return (0, LF.d)(this, CF, "f")
        }
        set environmentIntensity(FF) {
          (0, LF.h)(this, CF, FF, "f")
        }
        get specularIntensity() {
          return (0, LF.d)(this, AF, "f")
        }
        set specularIntensity(FF) {
          (0, LF.h)(this, AF, FF, "f")
        }
        get disableBumpMap() {
          return (0, LF.d)(this, hF, "f")
        }
        set disableBumpMap(FF) {
          (0, LF.h)(this, hF, FF, "f")
        }
        get albedoTexture() {
          return (0, LF.d)(this, bW, "f")
        }
        set albedoTexture(FF) {
          (0, LF.h)(this, bW, FF, "f")
        }
        get baseWeightTexture() {
          return (0, LF.d)(this, dF, "f")
        }
        set baseWeightTexture(FF) {
          (0, LF.h)(this, dF, FF, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, LF.d)(this, PF, "f")
        }
        set baseDiffuseRoughnessTexture(FF) {
          (0, LF.h)(this, PF, FF, "f")
        }
        get ambientTexture() {
          return (0, LF.d)(this, RF, "f")
        }
        set ambientTexture(FF) {
          (0, LF.h)(this, RF, FF, "f")
        }
        get ambientTextureStrength() {
          return (0, LF.d)(this, iW, "f")
        }
        set ambientTextureStrength(FF) {
          (0, LF.h)(this, iW, FF, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, LF.d)(this, eF, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(FF) {
          (0, LF.h)(this, eF, FF, "f")
        }
        get opacityTexture() {
          return (0, LF.d)(this, EF, "f")
        }
        set opacityTexture(FF) {
          (0, LF.h)(this, EF, FF, "f")
        }
        get reflectionTexture() {
          return (0, LF.d)(this, QF, "f")
        }
        set reflectionTexture(FF) {
          (0, LF.h)(this, QF, FF, "f")
        }
        get emissiveTexture() {
          return (0, LF.d)(this, rW, "f")
        }
        set emissiveTexture(FF) {
          (0, LF.h)(this, rW, FF, "f")
        }
        get reflectivityTexture() {
          return (0, LF.d)(this, gW, "f")
        }
        set reflectivityTexture(FF) {
          (0, LF.h)(this, gW, FF, "f")
        }
        get metallicTexture() {
          return (0, LF.d)(this, tW, "f")
        }
        set metallicTexture(FF) {
          (0, LF.h)(this, tW, FF, "f")
        }
        get metallic() {
          return (0, LF.d)(this, TF, "f")
        }
        set metallic(FF) {
          (0, LF.h)(this, TF, FF, "f")
        }
        get roughness() {
          return (0, LF.d)(this, aW, "f")
        }
        set roughness(FF) {
          (0, LF.h)(this, aW, FF, "f")
        }
        get metallicF0Factor() {
          return (0, LF.d)(this, kW, "f")
        }
        set metallicF0Factor(FF) {
          (0, LF.h)(this, kW, FF, "f")
        }
        get metallicReflectanceColor() {
          return (0, LF.d)(this, qW, "f")
        }
        set metallicReflectanceColor(FF) {
          (0, LF.h)(this, qW, FF, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, LF.d)(this, VF, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(FF) {
          (0, LF.h)(this, VF, FF, "f")
        }
        get metallicReflectanceTexture() {
          return (0, LF.d)(this, NF, "f")
        }
        set metallicReflectanceTexture(FF) {
          (0, LF.h)(this, NF, FF, "f")
        }
        get reflectanceTexture() {
          return (0, LF.d)(this, DF, "f")
        }
        set reflectanceTexture(FF) {
          (0, LF.h)(this, DF, FF, "f")
        }
        get microSurfaceTexture() {
          return (0, LF.d)(this, OF, "f")
        }
        set microSurfaceTexture(FF) {
          (0, LF.h)(this, OF, FF, "f")
        }
        get bumpTexture() {
          return (0, LF.d)(this, xW, "f")
        }
        set bumpTexture(FF) {
          (0, LF.h)(this, xW, FF, "f")
        }
        get lightmapTexture() {
          return (0, LF.d)(this, ZF, "f")
        }
        set lightmapTexture(FF) {
          (0, LF.h)(this, ZF, FF, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(FF) {
          this.subSurface.refractionTexture = FF, FF ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, LF.d)(this, oF, "f")
        }
        set ambientColor(FF) {
          (0, LF.h)(this, oF, FF, "f")
        }
        get albedoColor() {
          return (0, LF.d)(this, YF, "f")
        }
        set albedoColor(FF) {
          (0, LF.h)(this, YF, FF, "f")
        }
        get baseWeight() {
          return (0, LF.d)(this, MF, "f")
        }
        set baseWeight(FF) {
          (0, LF.h)(this, MF, FF, "f")
        }
        get baseDiffuseRoughness() {
          return (0, LF.d)(this, GF, "f")
        }
        set baseDiffuseRoughness(FF) {
          (0, LF.h)(this, GF, FF, "f")
        }
        get reflectivityColor() {
          return (0, LF.d)(this, zW, "f")
        }
        set reflectivityColor(FF) {
          (0, LF.h)(this, zW, FF, "f")
        }
        get reflectionColor() {
          return (0, LF.d)(this, IF, "f")
        }
        set reflectionColor(FF) {
          (0, LF.h)(this, IF, FF, "f")
        }
        get emissiveColor() {
          return (0, LF.d)(this, fF, "f")
        }
        set emissiveColor(FF) {
          (0, LF.h)(this, fF, FF, "f")
        }
        get microSurface() {
          return (0, LF.d)(this, yW, "f")
        }
        set microSurface(FF) {
          (0, LF.h)(this, yW, FF, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(FF) {
          this.subSurface.indexOfRefraction = FF
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(FF) {
          this.subSurface.invertRefractionY = FF
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(FF) {
          this.subSurface.linkRefractionWithTransparency = FF, FF && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, LF.d)(this, sF, "f")
        }
        set useLightmapAsShadowmap(FF) {
          (0, LF.h)(this, sF, FF, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, LF.d)(this, nF, "f")
        }
        set useAlphaFromAlbedoTexture(FF) {
          (0, LF.h)(this, nF, FF, "f")
        }
        get forceAlphaTest() {
          return (0, LF.d)(this, HF, "f")
        }
        set forceAlphaTest(FF) {
          (0, LF.h)(this, HF, FF, "f")
        }
        get alphaCutOff() {
          return (0, LF.d)(this, KF, "f")
        }
        set alphaCutOff(FF) {
          (0, LF.h)(this, KF, FF, "f")
        }
        get useSpecularOverAlpha() {
          return (0, LF.d)(this, wF, "f")
        }
        set useSpecularOverAlpha(FF) {
          (0, LF.h)(this, wF, FF, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, LF.d)(this, UF, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(FF) {
          (0, LF.h)(this, UF, FF, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, LF.d)(this, BF, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(FF) {
          (0, LF.h)(this, BF, FF, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, LF.d)(this, jW, "f")
        }
        set useRoughnessFromMetallicTextureGreen(FF) {
          (0, LF.h)(this, jW, FF, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, LF.d)(this, vW, "f")
        }
        set useMetallnessFromMetallicTextureBlue(FF) {
          (0, LF.h)(this, vW, FF, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, LF.d)(this, JF, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(FF) {
          (0, LF.h)(this, JF, FF, "f")
        }
        get useAmbientInGrayScale() {
          return (0, LF.d)(this, pF, "f")
        }
        set useAmbientInGrayScale(FF) {
          (0, LF.h)(this, pF, FF, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, LF.d)(this, lF, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(FF) {
          (0, LF.h)(this, lF, FF, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === VW.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(FF) {
          FF !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = FF ? VW.LIGHTFALLOFF_PHYSICAL : VW.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === VW.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(FF) {
          FF !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = FF ? VW.LIGHTFALLOFF_GLTF : VW.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, LF.d)(this, FW, "f")
        }
        set useRadianceOverAlpha(FF) {
          (0, LF.h)(this, FW, FF, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, LF.d)(this, WW, "f")
        }
        set useObjectSpaceNormalMap(FF) {
          (0, LF.h)(this, WW, FF, "f")
        }
        get useParallax() {
          return (0, LF.d)(this, SW, "f")
        }
        set useParallax(FF) {
          (0, LF.h)(this, SW, FF, "f")
        }
        get useParallaxOcclusion() {
          return (0, LF.d)(this, CW, "f")
        }
        set useParallaxOcclusion(FF) {
          (0, LF.h)(this, CW, FF, "f")
        }
        get parallaxScaleBias() {
          return (0, LF.d)(this, AW, "f")
        }
        set parallaxScaleBias(FF) {
          (0, LF.h)(this, AW, FF, "f")
        }
        get disableLighting() {
          return (0, LF.d)(this, uW, "f")
        }
        set disableLighting(FF) {
          (0, LF.h)(this, uW, FF, "f")
        }
        get forceIrradianceInFragment() {
          return (0, LF.d)(this, hW, "f")
        }
        set forceIrradianceInFragment(FF) {
          (0, LF.h)(this, hW, FF, "f")
        }
        get maxSimultaneousLights() {
          return (0, LF.d)(this, bS, "f")
        }
        set maxSimultaneousLights(FF) {
          (0, LF.h)(this, bS, FF, "f")
        }
        get invertNormalMapX() {
          return (0, LF.d)(this, dW, "f")
        }
        set invertNormalMapX(FF) {
          (0, LF.h)(this, dW, FF, "f")
        }
        get invertNormalMapY() {
          return (0, LF.d)(this, PW, "f")
        }
        set invertNormalMapY(FF) {
          (0, LF.h)(this, PW, FF, "f")
        }
        get twoSidedLighting() {
          return (0, LF.d)(this, RW, "f")
        }
        set twoSidedLighting(FF) {
          (0, LF.h)(this, RW, FF, "f")
        }
        get useAlphaFresnel() {
          return (0, LF.d)(this, iS, "f")
        }
        set useAlphaFresnel(FF) {
          (0, LF.h)(this, iS, FF, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, LF.d)(this, eW, "f")
        }
        set useLinearAlphaFresnel(FF) {
          (0, LF.h)(this, eW, FF, "f")
        }
        get environmentBRDFTexture() {
          return (0, LF.d)(this, EW, "f")
        }
        set environmentBRDFTexture(FF) {
          (0, LF.h)(this, EW, FF, "f")
        }
        get forceNormalForward() {
          return (0, LF.d)(this, QW, "f")
        }
        set forceNormalForward(FF) {
          (0, LF.h)(this, QW, FF, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, LF.d)(this, rS, "f")
        }
        set enableSpecularAntiAliasing(FF) {
          (0, LF.h)(this, rS, FF, "f")
        }
        get useHorizonOcclusion() {
          return (0, LF.d)(this, gS, "f")
        }
        set useHorizonOcclusion(FF) {
          (0, LF.h)(this, gS, FF, "f")
        }
        get useRadianceOcclusion() {
          return (0, LF.d)(this, tS, "f")
        }
        set useRadianceOcclusion(FF) {
          (0, LF.h)(this, tS, FF, "f")
        }
        get unlit() {
          return (0, LF.d)(this, TW, "f")
        }
        set unlit(FF) {
          (0, LF.h)(this, TW, FF, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, LF.d)(this, aS, "f")
        }
        set applyDecalMapAfterDetailMap(FF) {
          (0, LF.h)(this, aS, FF, "f")
        }
        constructor(uF, mW) {
          super(uF, mW, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), WF.set(this, ((0, LF.k)(this, sS), (0, LF.k)(this, nS, 1))), SF.set(this, ((0, LF.k)(this, HS), (0, LF.k)(this, KS, 1))), CF.set(this, ((0, LF.k)(this, wS), (0, LF.k)(this, XS, 1))), AF.set(this, ((0, LF.k)(this, US), (0, LF.k)(this, BS, 1))), hF.set(this, ((0, LF.k)(this, jC), (0, LF.k)(this, vC, !1))), bW.set(this, ((0, LF.k)(this, JS), (0, LF.k)(this, pS, void 0))), dF.set(this, ((0, LF.k)(this, lS), (0, LF.k)(this, FC, void 0))), PF.set(this, ((0, LF.k)(this, WC), (0, LF.k)(this, SC, void 0))), RF.set(this, ((0, LF.k)(this, CC), (0, LF.k)(this, AC, void 0))), iW.set(this, ((0, LF.k)(this, uC), (0, LF.k)(this, hC, 1))), eF.set(this, ((0, LF.k)(this, bA), (0, LF.k)(this, dC, FF.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), EF.set(this, ((0, LF.k)(this, PC), (0, LF.k)(this, RC, void 0))), QF.set(this, ((0, LF.k)(this, iA), (0, LF.k)(this, eC, void 0))), rW.set(this, ((0, LF.k)(this, EC), (0, LF.k)(this, QC, void 0))), gW.set(this, ((0, LF.k)(this, rA), (0, LF.k)(this, gA, void 0))), tW.set(this, ((0, LF.k)(this, tA), (0, LF.k)(this, TC, void 0))), TF.set(this, ((0, LF.k)(this, aA), (0, LF.k)(this, kA, void 0))), aW.set(this, ((0, LF.k)(this, qA), (0, LF.k)(this, VC, void 0))), kW.set(this, ((0, LF.k)(this, NC), (0, LF.k)(this, DC, 1))), qW.set(this, ((0, LF.k)(this, LC), (0, LF.k)(this, mA, XF.e.White()))), VF.set(this, ((0, LF.k)(this, OC), (0, LF.k)(this, xA, !1))), NF.set(this, ((0, LF.k)(this, ZC), (0, LF.k)(this, oC, void 0))), DF.set(this, ((0, LF.k)(this, YC), (0, LF.k)(this, MC, void 0))), OF.set(this, ((0, LF.k)(this, cA), (0, LF.k)(this, GC, void 0))), xW.set(this, ((0, LF.k)(this, zA), (0, LF.k)(this, IC, void 0))), ZF.set(this, ((0, LF.k)(this, fC), (0, LF.k)(this, yA, void 0))), oF.set(this, ((0, LF.k)(this, sC), (0, LF.k)(this, nC, new XF.e(0, 0, 0)))), YF.set(this, ((0, LF.k)(this, HC), (0, LF.k)(this, KC, new XF.e(1, 1, 1)))), MF.set(this, ((0, LF.k)(this, wC), (0, LF.k)(this, XC, 1))), GF.set(this, ((0, LF.k)(this, UC), (0, LF.k)(this, BC, void 0))), zW.set(this, ((0, LF.k)(this, jA), (0, LF.k)(this, vA, new XF.e(1, 1, 1)))), IF.set(this, ((0, LF.k)(this, JC), (0, LF.k)(this, pC, new XF.e(1, 1, 1)))), fF.set(this, ((0, LF.k)(this, lC), (0, LF.k)(this, FA, new XF.e(0, 0, 0)))), yW.set(this, ((0, LF.k)(this, WA), (0, LF.k)(this, SA, 1))), sF.set(this, ((0, LF.k)(this, CA), (0, LF.k)(this, AA, !1))), nF.set(this, ((0, LF.k)(this, uA), (0, LF.k)(this, hA, !1))), HF.set(this, ((0, LF.k)(this, bu), (0, LF.k)(this, dA, !1))), KF.set(this, ((0, LF.k)(this, PA), (0, LF.k)(this, RA, .4))), wF.set(this, ((0, LF.k)(this, iu), (0, LF.k)(this, eA, !0))), UF.set(this, ((0, LF.k)(this, EA), (0, LF.k)(this, QA, !1))), BF.set(this, ((0, LF.k)(this, ru), (0, LF.k)(this, gu, !0))), jW.set(this, ((0, LF.k)(this, tu), (0, LF.k)(this, TA, !1))), vW.set(this, ((0, LF.k)(this, au), (0, LF.k)(this, ku, !1))), JF.set(this, ((0, LF.k)(this, qu), (0, LF.k)(this, VA, !1))), pF.set(this, ((0, LF.k)(this, NA), (0, LF.k)(this, DA, !1))), lF.set(this, ((0, LF.k)(this, LA), (0, LF.k)(this, mu, !1))), FW.set(this, ((0, LF.k)(this, OA), (0, LF.k)(this, xu, !0))), WW.set(this, ((0, LF.k)(this, ZA), (0, LF.k)(this, oA, !1))), SW.set(this, ((0, LF.k)(this, YA), (0, LF.k)(this, MA, !1))), CW.set(this, ((0, LF.k)(this, cu), (0, LF.k)(this, GA, !1))), AW.set(this, ((0, LF.k)(this, zu), (0, LF.k)(this, IA, .05))), uW.set(this, ((0, LF.k)(this, fA), (0, LF.k)(this, yu, !1))), hW.set(this, ((0, LF.k)(this, sA), (0, LF.k)(this, nA, !1))), bS.set(this, ((0, LF.k)(this, HA), (0, LF.k)(this, KA, 4))), dW.set(this, ((0, LF.k)(this, wA), (0, LF.k)(this, XA, !1))), PW.set(this, ((0, LF.k)(this, UA), (0, LF.k)(this, BA, !1))), RW.set(this, ((0, LF.k)(this, ju), (0, LF.k)(this, vu, !1))), iS.set(this, ((0, LF.k)(this, JA), (0, LF.k)(this, pA, !1))), eW.set(this, ((0, LF.k)(this, lA), (0, LF.k)(this, Fu, !1))), EW.set(this, ((0, LF.k)(this, Wu), (0, LF.k)(this, Su, null))), QW.set(this, ((0, LF.k)(this, Cu), (0, LF.k)(this, Au, !1))), rS.set(this, ((0, LF.k)(this, uu), (0, LF.k)(this, hu, !1))), gS.set(this, ((0, LF.k)(this, bh), (0, LF.k)(this, du, !0))), tS.set(this, ((0, LF.k)(this, Pu), (0, LF.k)(this, Ru, !0))), TW.set(this, ((0, LF.k)(this, ih), (0, LF.k)(this, eu, !1))), aS.set(this, ((0, LF.k)(this, Eu), (0, LF.k)(this, Qu, !1))), (0, LF.k)(this, rh), this._environmentBRDFTexture = cW(this.OWF())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(WF) {
          let SF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const AF = NW.e.Clone((() => new FF(WF, this.OWF())), this, {
            cloneTexturesOnlyOnce: SF
          });
          return AF.id = WF, AF.name = WF, this.stencil.copyTo(AF.stencil), this._clonePlugins(AF, CF), AF
        }
        serialize() {
          const FF = super.serialize();
          return FF.customType = "BABYLON.PBRMaterial", FF
        }
        static Parse(WF, SF, CF) {
          const AF = NW.e.Parse((() => new FF(WF.name, SF)), WF, SF, CF);
          return WF.stencil && AF.stencil.parse(WF.stencil, SF, CF), uF.c._ParsePlugins(WF, AF, SF, CF), WF.clearCoat && AF.clearCoat.parse(WF.clearCoat, SF, CF), WF.anisotropy && AF.anisotropy.parse(WF.anisotropy, SF, CF), WF.brdf && AF.brdf.parse(WF.brdf, SF, CF), WF.sheen && AF.sheen.parse(WF.sheen, SF, CF), WF.subSurface && AF.subSurface.parse(WF.subSurface, SF, CF), WF.iridescence && AF.iridescence.parse(WF.iridescence, SF, CF), AF
        }
      }, WF = new WeakMap, SF = new WeakMap, CF = new WeakMap, AF = new WeakMap, hF = new WeakMap, bW = new WeakMap, dF = new WeakMap, PF = new WeakMap, RF = new WeakMap, iW = new WeakMap, eF = new WeakMap, EF = new WeakMap, QF = new WeakMap, rW = new WeakMap, gW = new WeakMap, tW = new WeakMap, TF = new WeakMap, aW = new WeakMap, kW = new WeakMap, qW = new WeakMap, VF = new WeakMap, NF = new WeakMap, DF = new WeakMap, OF = new WeakMap, xW = new WeakMap, ZF = new WeakMap, oF = new WeakMap, YF = new WeakMap, MF = new WeakMap, GF = new WeakMap, zW = new WeakMap, IF = new WeakMap, fF = new WeakMap, yW = new WeakMap, sF = new WeakMap, nF = new WeakMap, HF = new WeakMap, KF = new WeakMap, wF = new WeakMap, UF = new WeakMap, BF = new WeakMap, jW = new WeakMap, vW = new WeakMap, JF = new WeakMap, pF = new WeakMap, lF = new WeakMap, FW = new WeakMap, WW = new WeakMap, SW = new WeakMap, CW = new WeakMap, AW = new WeakMap, uW = new WeakMap, hW = new WeakMap, bS = new WeakMap, dW = new WeakMap, PW = new WeakMap, RW = new WeakMap, iS = new WeakMap, eW = new WeakMap, EW = new WeakMap, QW = new WeakMap, rS = new WeakMap, gS = new WeakMap, tS = new WeakMap, TW = new WeakMap, aS = new WeakMap, (() => {
        const WF = "function" === typeof Symbol && Symbol.metadata ? Object.create(yC[Symbol.metadata] ?? null) : void 0;
        kS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], qS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], DW = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], LW = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], mS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], OW = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], xS = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], ZW = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], oW = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], YW = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], MW = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], cS = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], GW = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], zS = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], IW = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], fW = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], yS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], sW = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], nW = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], HW = [(0, mW.o)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], KW = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], wW = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], XW = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], UW = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], BW = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], jS = [(0, mW.C)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty", null)], vS = [(0, mW.o)("ambient"), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], JW = [(0, mW.o)("albedo"), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], pW = [(0, mW.H)("baseWeight"), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], lW = [(0, mW.H)("baseDiffuseRoughness"), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], FS = [(0, mW.o)("reflectivity"), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], WS = [(0, mW.o)("reflection"), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], SS = [(0, mW.o)("emissive"), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], CS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], AS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], uS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], hS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], bC = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], dS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], PS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], RS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], iC = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], eS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], ES = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], QS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], rC = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], gC = [(0, mW.H)()], tC = [(0, mW.H)()], TS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], aC = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], kC = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], qC = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], VS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], NS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsLightsDirty")], DS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], LS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsLightsDirty")], mC = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], OS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], xC = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], ZS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], oS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], YS = [(0, mW.i)("_markAllSubMeshesAsTexturesDirty")], MS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], cC = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], GS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], zC = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsTexturesDirty")], IS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsMiscDirty")], fS = [(0, mW.H)(), (0, mW.i)("_markAllSubMeshesAsMiscDirty")], (0, LF.j)(FF, null, kS, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: FF => "directIntensity" in FF,
            get: FF => FF.directIntensity,
            set: (FF, WF) => {
              FF.directIntensity = WF
            }
          },
          metadata: WF
        }, nS, HS), (0, LF.j)(FF, null, qS, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: FF => "emissiveIntensity" in FF,
            get: FF => FF.emissiveIntensity,
            set: (FF, WF) => {
              FF.emissiveIntensity = WF
            }
          },
          metadata: WF
        }, KS, wS), (0, LF.j)(FF, null, DW, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: FF => "environmentIntensity" in FF,
            get: FF => FF.environmentIntensity,
            set: (FF, WF) => {
              FF.environmentIntensity = WF
            }
          },
          metadata: WF
        }, XS, US), (0, LF.j)(FF, null, LW, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: FF => "specularIntensity" in FF,
            get: FF => FF.specularIntensity,
            set: (FF, WF) => {
              FF.specularIntensity = WF
            }
          },
          metadata: WF
        }, BS, jC), (0, LF.j)(FF, null, mS, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: FF => "disableBumpMap" in FF,
            get: FF => FF.disableBumpMap,
            set: (FF, WF) => {
              FF.disableBumpMap = WF
            }
          },
          metadata: WF
        }, vC, JS), (0, LF.j)(FF, null, OW, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "albedoTexture" in FF,
            get: FF => FF.albedoTexture,
            set: (FF, WF) => {
              FF.albedoTexture = WF
            }
          },
          metadata: WF
        }, pS, lS), (0, LF.j)(FF, null, xS, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "baseWeightTexture" in FF,
            get: FF => FF.baseWeightTexture,
            set: (FF, WF) => {
              FF.baseWeightTexture = WF
            }
          },
          metadata: WF
        }, FC, WC), (0, LF.j)(FF, null, ZW, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "baseDiffuseRoughnessTexture" in FF,
            get: FF => FF.baseDiffuseRoughnessTexture,
            set: (FF, WF) => {
              FF.baseDiffuseRoughnessTexture = WF
            }
          },
          metadata: WF
        }, SC, CC), (0, LF.j)(FF, null, oW, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "ambientTexture" in FF,
            get: FF => FF.ambientTexture,
            set: (FF, WF) => {
              FF.ambientTexture = WF
            }
          },
          metadata: WF
        }, AC, uC), (0, LF.j)(FF, null, YW, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: FF => "ambientTextureStrength" in FF,
            get: FF => FF.ambientTextureStrength,
            set: (FF, WF) => {
              FF.ambientTextureStrength = WF
            }
          },
          metadata: WF
        }, hC, bA), (0, LF.j)(FF, null, MW, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: FF => "ambientTextureImpactOnAnalyticalLights" in FF,
            get: FF => FF.ambientTextureImpactOnAnalyticalLights,
            set: (FF, WF) => {
              FF.ambientTextureImpactOnAnalyticalLights = WF
            }
          },
          metadata: WF
        }, dC, PC), (0, LF.j)(FF, null, cS, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "opacityTexture" in FF,
            get: FF => FF.opacityTexture,
            set: (FF, WF) => {
              FF.opacityTexture = WF
            }
          },
          metadata: WF
        }, RC, iA), (0, LF.j)(FF, null, GW, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "reflectionTexture" in FF,
            get: FF => FF.reflectionTexture,
            set: (FF, WF) => {
              FF.reflectionTexture = WF
            }
          },
          metadata: WF
        }, eC, EC), (0, LF.j)(FF, null, zS, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "emissiveTexture" in FF,
            get: FF => FF.emissiveTexture,
            set: (FF, WF) => {
              FF.emissiveTexture = WF
            }
          },
          metadata: WF
        }, QC, rA), (0, LF.j)(FF, null, IW, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "reflectivityTexture" in FF,
            get: FF => FF.reflectivityTexture,
            set: (FF, WF) => {
              FF.reflectivityTexture = WF
            }
          },
          metadata: WF
        }, gA, tA), (0, LF.j)(FF, null, fW, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "metallicTexture" in FF,
            get: FF => FF.metallicTexture,
            set: (FF, WF) => {
              FF.metallicTexture = WF
            }
          },
          metadata: WF
        }, TC, aA), (0, LF.j)(FF, null, yS, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: FF => "metallic" in FF,
            get: FF => FF.metallic,
            set: (FF, WF) => {
              FF.metallic = WF
            }
          },
          metadata: WF
        }, kA, qA), (0, LF.j)(FF, null, sW, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: FF => "roughness" in FF,
            get: FF => FF.roughness,
            set: (FF, WF) => {
              FF.roughness = WF
            }
          },
          metadata: WF
        }, VC, NC), (0, LF.j)(FF, null, nW, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: FF => "metallicF0Factor" in FF,
            get: FF => FF.metallicF0Factor,
            set: (FF, WF) => {
              FF.metallicF0Factor = WF
            }
          },
          metadata: WF
        }, DC, LC), (0, LF.j)(FF, null, HW, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: FF => "metallicReflectanceColor" in FF,
            get: FF => FF.metallicReflectanceColor,
            set: (FF, WF) => {
              FF.metallicReflectanceColor = WF
            }
          },
          metadata: WF
        }, mA, OC), (0, LF.j)(FF, null, KW, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "useOnlyMetallicFromMetallicReflectanceTexture" in FF,
            get: FF => FF.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (FF, WF) => {
              FF.useOnlyMetallicFromMetallicReflectanceTexture = WF
            }
          },
          metadata: WF
        }, xA, ZC), (0, LF.j)(FF, null, wW, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "metallicReflectanceTexture" in FF,
            get: FF => FF.metallicReflectanceTexture,
            set: (FF, WF) => {
              FF.metallicReflectanceTexture = WF
            }
          },
          metadata: WF
        }, oC, YC), (0, LF.j)(FF, null, XW, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "reflectanceTexture" in FF,
            get: FF => FF.reflectanceTexture,
            set: (FF, WF) => {
              FF.reflectanceTexture = WF
            }
          },
          metadata: WF
        }, MC, cA), (0, LF.j)(FF, null, UW, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "microSurfaceTexture" in FF,
            get: FF => FF.microSurfaceTexture,
            set: (FF, WF) => {
              FF.microSurfaceTexture = WF
            }
          },
          metadata: WF
        }, GC, zA), (0, LF.j)(FF, null, BW, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "bumpTexture" in FF,
            get: FF => FF.bumpTexture,
            set: (FF, WF) => {
              FF.bumpTexture = WF
            }
          },
          metadata: WF
        }, IC, fC), (0, LF.j)(FF, null, jS, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "lightmapTexture" in FF,
            get: FF => FF.lightmapTexture,
            set: (FF, WF) => {
              FF.lightmapTexture = WF
            }
          },
          metadata: WF
        }, yA, sC), (0, LF.j)(FF, null, vS, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: FF => "ambientColor" in FF,
            get: FF => FF.ambientColor,
            set: (FF, WF) => {
              FF.ambientColor = WF
            }
          },
          metadata: WF
        }, nC, HC), (0, LF.j)(FF, null, JW, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: FF => "albedoColor" in FF,
            get: FF => FF.albedoColor,
            set: (FF, WF) => {
              FF.albedoColor = WF
            }
          },
          metadata: WF
        }, KC, wC), (0, LF.j)(FF, null, pW, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: FF => "baseWeight" in FF,
            get: FF => FF.baseWeight,
            set: (FF, WF) => {
              FF.baseWeight = WF
            }
          },
          metadata: WF
        }, XC, UC), (0, LF.j)(FF, null, lW, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: FF => "baseDiffuseRoughness" in FF,
            get: FF => FF.baseDiffuseRoughness,
            set: (FF, WF) => {
              FF.baseDiffuseRoughness = WF
            }
          },
          metadata: WF
        }, BC, jA), (0, LF.j)(FF, null, FS, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: FF => "reflectivityColor" in FF,
            get: FF => FF.reflectivityColor,
            set: (FF, WF) => {
              FF.reflectivityColor = WF
            }
          },
          metadata: WF
        }, vA, JC), (0, LF.j)(FF, null, WS, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: FF => "reflectionColor" in FF,
            get: FF => FF.reflectionColor,
            set: (FF, WF) => {
              FF.reflectionColor = WF
            }
          },
          metadata: WF
        }, pC, lC), (0, LF.j)(FF, null, SS, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: FF => "emissiveColor" in FF,
            get: FF => FF.emissiveColor,
            set: (FF, WF) => {
              FF.emissiveColor = WF
            }
          },
          metadata: WF
        }, FA, WA), (0, LF.j)(FF, null, CS, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: FF => "microSurface" in FF,
            get: FF => FF.microSurface,
            set: (FF, WF) => {
              FF.microSurface = WF
            }
          },
          metadata: WF
        }, SA, CA), (0, LF.j)(FF, null, AS, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: FF => "useLightmapAsShadowmap" in FF,
            get: FF => FF.useLightmapAsShadowmap,
            set: (FF, WF) => {
              FF.useLightmapAsShadowmap = WF
            }
          },
          metadata: WF
        }, AA, uA), (0, LF.j)(FF, null, uS, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "useAlphaFromAlbedoTexture" in FF,
            get: FF => FF.useAlphaFromAlbedoTexture,
            set: (FF, WF) => {
              FF.useAlphaFromAlbedoTexture = WF
            }
          },
          metadata: WF
        }, hA, bu), (0, LF.j)(FF, null, hS, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: FF => "forceAlphaTest" in FF,
            get: FF => FF.forceAlphaTest,
            set: (FF, WF) => {
              FF.forceAlphaTest = WF
            }
          },
          metadata: WF
        }, dA, PA), (0, LF.j)(FF, null, bC, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: FF => "alphaCutOff" in FF,
            get: FF => FF.alphaCutOff,
            set: (FF, WF) => {
              FF.alphaCutOff = WF
            }
          },
          metadata: WF
        }, RA, iu), (0, LF.j)(FF, null, dS, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: FF => "useSpecularOverAlpha" in FF,
            get: FF => FF.useSpecularOverAlpha,
            set: (FF, WF) => {
              FF.useSpecularOverAlpha = WF
            }
          },
          metadata: WF
        }, eA, EA), (0, LF.j)(FF, null, PS, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: FF => "useMicroSurfaceFromReflectivityMapAlpha" in FF,
            get: FF => FF.useMicroSurfaceFromReflectivityMapAlpha,
            set: (FF, WF) => {
              FF.useMicroSurfaceFromReflectivityMapAlpha = WF
            }
          },
          metadata: WF
        }, QA, ru), (0, LF.j)(FF, null, RS, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: FF => "useRoughnessFromMetallicTextureAlpha" in FF,
            get: FF => FF.useRoughnessFromMetallicTextureAlpha,
            set: (FF, WF) => {
              FF.useRoughnessFromMetallicTextureAlpha = WF
            }
          },
          metadata: WF
        }, gu, tu), (0, LF.j)(FF, null, iC, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: FF => "useRoughnessFromMetallicTextureGreen" in FF,
            get: FF => FF.useRoughnessFromMetallicTextureGreen,
            set: (FF, WF) => {
              FF.useRoughnessFromMetallicTextureGreen = WF
            }
          },
          metadata: WF
        }, TA, au), (0, LF.j)(FF, null, eS, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: FF => "useMetallnessFromMetallicTextureBlue" in FF,
            get: FF => FF.useMetallnessFromMetallicTextureBlue,
            set: (FF, WF) => {
              FF.useMetallnessFromMetallicTextureBlue = WF
            }
          },
          metadata: WF
        }, ku, qu), (0, LF.j)(FF, null, ES, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: FF => "useAmbientOcclusionFromMetallicTextureRed" in FF,
            get: FF => FF.useAmbientOcclusionFromMetallicTextureRed,
            set: (FF, WF) => {
              FF.useAmbientOcclusionFromMetallicTextureRed = WF
            }
          },
          metadata: WF
        }, VA, NA), (0, LF.j)(FF, null, QS, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: FF => "useAmbientInGrayScale" in FF,
            get: FF => FF.useAmbientInGrayScale,
            set: (FF, WF) => {
              FF.useAmbientInGrayScale = WF
            }
          },
          metadata: WF
        }, DA, LA), (0, LF.j)(FF, null, rC, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: FF => "useAutoMicroSurfaceFromReflectivityMap" in FF,
            get: FF => FF.useAutoMicroSurfaceFromReflectivityMap,
            set: (FF, WF) => {
              FF.useAutoMicroSurfaceFromReflectivityMap = WF
            }
          },
          metadata: WF
        }, mu, OA), (0, LF.j)(FF, null, gC, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: FF => "usePhysicalLightFalloff" in FF,
            get: FF => FF.usePhysicalLightFalloff
          },
          metadata: WF
        }, null, sS), (0, LF.j)(FF, null, tC, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: FF => "useGLTFLightFalloff" in FF,
            get: FF => FF.useGLTFLightFalloff
          },
          metadata: WF
        }, null, sS), (0, LF.j)(FF, null, TS, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: FF => "useRadianceOverAlpha" in FF,
            get: FF => FF.useRadianceOverAlpha,
            set: (FF, WF) => {
              FF.useRadianceOverAlpha = WF
            }
          },
          metadata: WF
        }, xu, ZA), (0, LF.j)(FF, null, aC, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: FF => "useObjectSpaceNormalMap" in FF,
            get: FF => FF.useObjectSpaceNormalMap,
            set: (FF, WF) => {
              FF.useObjectSpaceNormalMap = WF
            }
          },
          metadata: WF
        }, oA, YA), (0, LF.j)(FF, null, kC, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: FF => "useParallax" in FF,
            get: FF => FF.useParallax,
            set: (FF, WF) => {
              FF.useParallax = WF
            }
          },
          metadata: WF
        }, MA, cu), (0, LF.j)(FF, null, qC, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: FF => "useParallaxOcclusion" in FF,
            get: FF => FF.useParallaxOcclusion,
            set: (FF, WF) => {
              FF.useParallaxOcclusion = WF
            }
          },
          metadata: WF
        }, GA, zu), (0, LF.j)(FF, null, VS, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: FF => "parallaxScaleBias" in FF,
            get: FF => FF.parallaxScaleBias,
            set: (FF, WF) => {
              FF.parallaxScaleBias = WF
            }
          },
          metadata: WF
        }, IA, fA), (0, LF.j)(FF, null, NS, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: FF => "disableLighting" in FF,
            get: FF => FF.disableLighting,
            set: (FF, WF) => {
              FF.disableLighting = WF
            }
          },
          metadata: WF
        }, yu, sA), (0, LF.j)(FF, null, DS, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: FF => "forceIrradianceInFragment" in FF,
            get: FF => FF.forceIrradianceInFragment,
            set: (FF, WF) => {
              FF.forceIrradianceInFragment = WF
            }
          },
          metadata: WF
        }, nA, HA), (0, LF.j)(FF, null, LS, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: FF => "maxSimultaneousLights" in FF,
            get: FF => FF.maxSimultaneousLights,
            set: (FF, WF) => {
              FF.maxSimultaneousLights = WF
            }
          },
          metadata: WF
        }, KA, wA), (0, LF.j)(FF, null, mC, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: FF => "invertNormalMapX" in FF,
            get: FF => FF.invertNormalMapX,
            set: (FF, WF) => {
              FF.invertNormalMapX = WF
            }
          },
          metadata: WF
        }, XA, UA), (0, LF.j)(FF, null, OS, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: FF => "invertNormalMapY" in FF,
            get: FF => FF.invertNormalMapY,
            set: (FF, WF) => {
              FF.invertNormalMapY = WF
            }
          },
          metadata: WF
        }, BA, ju), (0, LF.j)(FF, null, xC, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: FF => "twoSidedLighting" in FF,
            get: FF => FF.twoSidedLighting,
            set: (FF, WF) => {
              FF.twoSidedLighting = WF
            }
          },
          metadata: WF
        }, vu, JA), (0, LF.j)(FF, null, ZS, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: FF => "useAlphaFresnel" in FF,
            get: FF => FF.useAlphaFresnel,
            set: (FF, WF) => {
              FF.useAlphaFresnel = WF
            }
          },
          metadata: WF
        }, pA, lA), (0, LF.j)(FF, null, oS, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: FF => "useLinearAlphaFresnel" in FF,
            get: FF => FF.useLinearAlphaFresnel,
            set: (FF, WF) => {
              FF.useLinearAlphaFresnel = WF
            }
          },
          metadata: WF
        }, Fu, Wu), (0, LF.j)(FF, null, YS, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: FF => "environmentBRDFTexture" in FF,
            get: FF => FF.environmentBRDFTexture,
            set: (FF, WF) => {
              FF.environmentBRDFTexture = WF
            }
          },
          metadata: WF
        }, Su, Cu), (0, LF.j)(FF, null, MS, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: FF => "forceNormalForward" in FF,
            get: FF => FF.forceNormalForward,
            set: (FF, WF) => {
              FF.forceNormalForward = WF
            }
          },
          metadata: WF
        }, Au, uu), (0, LF.j)(FF, null, cC, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: FF => "enableSpecularAntiAliasing" in FF,
            get: FF => FF.enableSpecularAntiAliasing,
            set: (FF, WF) => {
              FF.enableSpecularAntiAliasing = WF
            }
          },
          metadata: WF
        }, hu, bh), (0, LF.j)(FF, null, GS, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: FF => "useHorizonOcclusion" in FF,
            get: FF => FF.useHorizonOcclusion,
            set: (FF, WF) => {
              FF.useHorizonOcclusion = WF
            }
          },
          metadata: WF
        }, du, Pu), (0, LF.j)(FF, null, zC, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: FF => "useRadianceOcclusion" in FF,
            get: FF => FF.useRadianceOcclusion,
            set: (FF, WF) => {
              FF.useRadianceOcclusion = WF
            }
          },
          metadata: WF
        }, Ru, ih), (0, LF.j)(FF, null, IS, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: FF => "unlit" in FF,
            get: FF => FF.unlit,
            set: (FF, WF) => {
              FF.unlit = WF
            }
          },
          metadata: WF
        }, eu, Eu), (0, LF.j)(FF, null, fS, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: FF => "applyDecalMapAfterDetailMap" in FF,
            get: FF => FF.applyDecalMapAfterDetailMap,
            set: (FF, WF) => {
              FF.applyDecalMapAfterDetailMap = WF
            }
          },
          metadata: WF
        }, Qu, rh), WF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WF
        })
      })(), FF.PBRMATERIAL_OPAQUE = VW.PBRMATERIAL_OPAQUE, FF.PBRMATERIAL_ALPHATEST = VW.PBRMATERIAL_ALPHATEST, FF.PBRMATERIAL_ALPHABLEND = VW.PBRMATERIAL_ALPHABLEND, FF.PBRMATERIAL_ALPHATESTANDBLEND = VW.PBRMATERIAL_ALPHATESTANDBLEND, FF.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = VW.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, FF
    })();
    const zu = "KHR_materials_diffuse_transmission";

    function IA(FF, WF) {
      const SF = WF.subSurface;
      let CF = null;
      return SF.translucencyIntensityTexture ? CF = SF.translucencyIntensityTexture : SF.thicknessTexture && SF.useMaskFromThicknessTexture && (CF = SF.thicknessTexture), CF && !SF.useGltfStyleTextures ? (OF.b.Warn(`${FF}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${WF.name}`, 1), null) : CF
    }
    class fA {
      constructor(FF) {
        this.name = zu, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = FF
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(FF, WF, SF) {
        const CF = [];
        if (SF instanceof GA && this._isExtensionEnabled(SF)) {
          const WF = IA(FF, SF);
          return WF && CF.push(WF), SF.subSurface.translucencyColorTexture && CF.push(SF.subSurface.translucencyColorTexture), CF
        }
        return CF
      }
      _isExtensionEnabled(FF) {
        if (FF.unlit) return !1;
        const WF = FF.subSurface;
        return !!WF.isTranslucencyEnabled && (!FF.unlit && !WF.useAlbedoToTintTranslucency && WF.useGltfStyleTextures && 1 === WF.volumeIndexOfRefraction && 0 === WF.minimumThickness && 0 === WF.maximumThickness)
      }
      postExportMaterialAsync(FF, WF, SF) {
        return new Promise((CF => {
          if (SF instanceof GA && this._isExtensionEnabled(SF)) {
            this._wasUsed = !0;
            const CF = SF.subSurface,
              AF = IA(FF, SF),
              uF = 0 == CF.translucencyIntensity ? void 0 : CF.translucencyIntensity,
              hF = this._exporter._materialExporter.getTextureInfo(AF) ?? void 0,
              bW = !CF.translucencyColor || CF.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : CF.translucencyColor.kRF(),
              dF = this._exporter._materialExporter.getTextureInfo(CF.translucencyColorTexture) ?? void 0,
              PF = {
                diffuseTransmissionFactor: uF,
                diffuseTransmissionTexture: hF,
                diffuseTransmissionColorFactor: bW,
                diffuseTransmissionColorTexture: dF
              };
            (hF || dF) && this._exporter._materialNeedsUVsSet.add(SF), WF.extensions = WF.extensions || {}, WF.extensions[zu] = PF
          }
          CF(WF)
        }))
      }
    }
    let yu = !1;

    function sA() {
      yu || (yu = !0, cA.RegisterExtension(zu, (FF => new fA(FF))))
    }
    sA();
    const nA = "KHR_materials_dispersion";
    class HA {
      constructor() {
        this.name = nA, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(FF) {
        if (FF.unlit) return !1;
        const WF = FF.subSurface;
        return !(!WF.isRefractionEnabled && !WF.isDispersionEnabled)
      }
      postExportMaterialAsync(FF, WF, SF) {
        return new Promise((FF => {
          if (SF instanceof GA && this._isExtensionEnabled(SF)) {
            this._wasUsed = !0;
            const FF = {
              dispersion: SF.subSurface.dispersion
            };
            WF.extensions = WF.extensions || {}, WF.extensions[nA] = FF
          }
          FF(WF)
        }))
      }
    }
    let KA = !1;

    function wA() {
      KA || (KA = !0, cA.RegisterExtension(nA, (() => new HA)))
    }
    wA();
    const XA = "KHR_materials_emissive_strength";
    class UA {
      constructor() {
        this.name = XA, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(FF, WF, SF) {
        return await new Promise((FF => {
          if (!(SF instanceof GA)) return FF(WF);
          const CF = SF.emissiveColor.scale(SF.emissiveIntensity),
            AF = Math.max(...CF.kRF());
          if (AF > 1) {
            WF.emissiveFactor = CF.scale(1 / AF).kRF(), this._wasUsed = !0;
            const FF = {
              emissiveStrength: AF
            };
            WF.extensions || (WF.extensions = {}), WF.extensions[XA] = FF
          } else WF.emissiveFactor = CF.kRF();
          return FF(WF)
        }))
      }
    }
    let BA = !1;

    function ju() {
      BA || (BA = !0, cA.RegisterExtension(XA, (() => new UA)))
    }
    ju();
    const vu = "KHR_materials_ior";
    class JA {
      constructor() {
        this.name = vu, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(FF) {
        return !FF.unlit && (FF instanceof pW ? 1.5 != FF.specularIor : FF instanceof GA && (void 0 != FF.indexOfRefraction && 1.5 != FF.indexOfRefraction))
      }
      postExportMaterialAsync(FF, WF, SF) {
        return new Promise((FF => {
          if (SF instanceof GA && this._isExtensionEnabled(SF)) {
            this._wasUsed = !0;
            const FF = {
              ior: SF.indexOfRefraction
            };
            WF.extensions = WF.extensions || {}, WF.extensions[vu] = FF
          } else if (SF instanceof pW && this._isExtensionEnabled(SF)) {
            this._wasUsed = !0;
            const FF = {
              ior: SF.specularIor
            };
            WF.extensions = WF.extensions || {}, WF.extensions[vu] = FF
          }
          FF(WF)
        }))
      }
    }
    let pA = !1;

    function lA() {
      pA || (pA = !0, cA.RegisterExtension(vu, (() => new JA)))
    }
    lA();
    const Fu = "KHR_materials_iridescence";
    class Wu {
      constructor(FF) {
        this.name = Fu, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = FF
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(FF, WF, SF) {
        const CF = [];
        if (SF instanceof VW) {
          if (SF.iridescence.isEnabled) return SF.iridescence.texture && CF.push(SF.iridescence.texture), SF.iridescence.thicknessTexture && SF.iridescence.thicknessTexture !== SF.iridescence.texture && CF.push(SF.iridescence.thicknessTexture), CF
        } else if (SF instanceof pW && SF.thinFilmWeight > 0) return SF.thinFilmWeightTexture && CF.push(SF.thinFilmWeightTexture), SF.thinFilmThicknessTexture && SF.thinFilmThicknessTexture !== SF.thinFilmWeightTexture && CF.push(SF.thinFilmThicknessTexture), CF;
        return []
      }
      postExportMaterialAsync(FF, WF, SF) {
        return new Promise((FF => {
          if (SF instanceof VW) {
            if (!SF.iridescence.isEnabled) return void FF(WF);
            this._wasUsed = !0, WF.extensions = WF.extensions || {};
            const CF = this._exporter._materialExporter.getTextureInfo(SF.iridescence.texture),
              AF = this._exporter._materialExporter.getTextureInfo(SF.iridescence.thicknessTexture),
              uF = {
                iridescenceFactor: SF.iridescence.intensity,
                iridescenceIor: SF.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: SF.iridescence.minimumThickness,
                iridescenceThicknessMaximum: SF.iridescence.maximumThickness,
                iridescenceTexture: CF ?? void 0,
                iridescenceThicknessTexture: AF ?? void 0
              };
            null === uF.iridescenceTexture && null === uF.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(SF), WF.extensions[Fu] = uF
          } else if (SF instanceof pW) {
            if (SF.thinFilmWeight <= 0) return void FF(WF);
            this._wasUsed = !0, WF.extensions = WF.extensions || {};
            const CF = this._exporter._materialExporter.getTextureInfo(SF.thinFilmWeightTexture),
              AF = this._exporter._materialExporter.getTextureInfo(SF.thinFilmThicknessTexture),
              uF = {
                iridescenceFactor: SF.thinFilmWeight,
                iridescenceIor: SF.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * SF.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * SF.thinFilmThickness,
                iridescenceTexture: CF ?? void 0,
                iridescenceThicknessTexture: AF ?? void 0
              };
            null === uF.iridescenceTexture && null === uF.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(SF), WF.extensions[Fu] = uF
          }
          FF(WF)
        }))
      }
    }
    let Su = !1;

    function Cu() {
      Su || (Su = !0, cA.RegisterExtension(Fu, (FF => new Wu(FF))))
    }
    Cu();
    const Au = "KHR_materials_sheen";
    class uu {
      constructor(FF) {
        this.name = Au, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = FF
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(FF, WF, SF) {
        return SF instanceof GA && SF.sheen.isEnabled && SF.sheen.texture ? [SF.sheen.texture] : []
      }
      async postExportMaterialAsync(FF, WF, SF) {
        return await new Promise((FF => {
          if (SF instanceof GA) {
            if (!SF.sheen.isEnabled) return void FF(WF);
            this._wasUsed = !0, null == WF.extensions && (WF.extensions = {});
            const CF = {
              sheenColorFactor: SF.sheen.color.kRF(),
              sheenRoughnessFactor: SF.sheen.roughness ?? 0
            };
            null === CF.sheenColorTexture && null === CF.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(SF), SF.sheen.texture && (CF.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(SF.sheen.texture) ?? void 0), SF.sheen.textureRoughness && !SF.sheen.useRoughnessFromMainTexture ? CF.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(SF.sheen.textureRoughness) ?? void 0 : SF.sheen.texture && SF.sheen.useRoughnessFromMainTexture && (CF.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(SF.sheen.texture) ?? void 0), WF.extensions[Au] = CF
          }
          FF(WF)
        }))
      }
    }
    let hu = !1;

    function bh() {
      hu || (hu = !0, cA.RegisterExtension(Au, (FF => new uu(FF))))
    }
    bh();
    const du = "KHR_materials_fuzz";

    function Pu(FF, WF) {
      const SF = new ZF.i(WF.name, WF.OWF());
      return SF._texture = FF, SF.coordinatesIndex = WF.coordinatesIndex, WF instanceof ZF.i && (SF.uOffset = WF.uOffset, SF.vOffset = WF.vOffset, SF.uScale = WF.uScale, SF.vScale = WF.vScale, SF.wAng = WF.wAng), SF.wrapU = WF.wrapU, SF.wrapV = WF.wrapV, SF
    }
    class Ru {
      constructor(FF) {
        this.name = du, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = FF
      }
      dispose() {
        for (const FF of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[FF].dispose()
        }
        this._mergedTexturesMap = {};
        for (const FF of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[FF].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(FF, WF, SF) {
        if (SF instanceof pW) {
          const FF = [];
          if (SF.fuzzWeight > 0) {
            SF.fuzzWeightTexture && FF.push(SF.fuzzWeightTexture);
            let WF = !1;
            if (SF.fuzzRoughnessTexture && (SF._useFuzzRoughnessFromTextureAlpha ? FF.push(SF.fuzzRoughnessTexture) : WF = !0), SF.fuzzColorTexture && !WF && FF.push(SF.fuzzColorTexture), WF) {
              const WF = function(FF) {
                const WF = FF.fuzzColorTexture,
                  SF = WF && WF.getInternalTexture() ? WF.getInternalTexture().uniqueId : "NoFuzzColor",
                  CF = FF.fuzzRoughnessTexture;
                return `FuzzColor_${SF}_FuzzRoughness_${CF&&CF.getInternalTexture()?CF.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(SF);
              if (!this._cachedInternalTexturesMap[WF]) {
                const FF = await async function(FF) {
                  const WF = FF.OWF(),
                    SF = FF.fuzzColorTexture,
                    CF = FF.fuzzRoughnessTexture;
                  return SF || CF ? (await hS("FuzzTexture", PS(SF ? bC(SF, 0) : dS(1), SF ? bC(SF, 1) : dS(1), SF ? bC(SF, 2) : dS(1), CF ? bC(CF, FF._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : dS(1)), WF)).getInternalTexture() : null
                }(SF);
                FF && (this._cachedInternalTexturesMap[WF] = FF)
              }
              this._cachedInternalTexturesMap[WF] && (SF.fuzzColorTexture && (this._mergedTexturesMap[SF.fuzzColorTexture.uniqueId] = Pu(this._cachedInternalTexturesMap[WF], SF.fuzzColorTexture), FF.push(this._mergedTexturesMap[SF.fuzzColorTexture.uniqueId])), SF.fuzzRoughnessTexture && (this._mergedTexturesMap[SF.fuzzRoughnessTexture.uniqueId] = Pu(this._cachedInternalTexturesMap[WF], SF.fuzzRoughnessTexture), FF.push(this._mergedTexturesMap[SF.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return FF
        }
        return []
      }
      async postExportMaterialAsync(FF, WF, SF) {
        return await new Promise((FF => {
          if (SF instanceof pW) {
            if (0 == SF.fuzzWeight) return void FF(WF);
            this._wasUsed = !0, null == WF.extensions && (WF.extensions = {});
            const CF = {
              fuzzFactor: SF.fuzzWeight,
              fuzzColorFactor: SF.fuzzColor.kRF(),
              fuzzRoughnessFactor: SF.fuzzRoughness
            };
            let AF, uF;
            SF.fuzzWeightTexture && (CF.fuzzTexture = this._exporter._materialExporter.getTextureInfo(SF.fuzzWeightTexture) ?? void 0), SF.fuzzColorTexture && (AF = this._mergedTexturesMap[SF.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[SF.fuzzColorTexture.uniqueId] : SF.fuzzColorTexture, CF.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(AF) ?? void 0), SF.fuzzRoughnessTexture && (uF = this._mergedTexturesMap[SF.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[SF.fuzzRoughnessTexture.uniqueId] : SF.fuzzRoughnessTexture, CF.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(uF) ?? void 0), null === CF.fuzzColorTexture && null === CF.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(SF), WF.extensions[du] = CF
          }
          FF(WF)
        }))
      }
    }
    let ih = !1;

    function eu() {
      ih || (ih = !0, cA.RegisterExtension(du, (FF => new Ru(FF))))
    }
    eu();
    const Eu = "KHR_materials_specular";
    class Qu {
      constructor(FF) {
        this.name = Eu, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = FF
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(FF, WF, SF) {
        const CF = [];
        return SF instanceof GA && this._isExtensionEnabled(SF) ? (SF.metallicReflectanceTexture && CF.push(SF.metallicReflectanceTexture), SF.reflectanceTexture && CF.push(SF.reflectanceTexture), CF) : CF
      }
      _isExtensionEnabled(FF) {
        return !FF.unlit && (void 0 != FF.metallicF0Factor && 1 != FF.metallicF0Factor || void 0 != FF.metallicReflectanceColor && !FF.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(FF))
      }
      _hasTexturesExtension(FF) {
        return null != FF.metallicReflectanceTexture || null != FF.reflectanceTexture
      }
      postExportMaterialAsync(FF, WF, SF) {
        return new Promise((FF => {
          var CF;
          if (SF instanceof GA && this._isExtensionEnabled(SF)) {
            this._wasUsed = !0, WF.extensions = WF.extensions || {};
            const FF = this._exporter._materialExporter.getTextureInfo(SF.metallicReflectanceTexture) ?? void 0,
              CF = this._exporter._materialExporter.getTextureInfo(SF.reflectanceTexture) ?? void 0,
              AF = {
                specularFactor: 1 == SF.metallicF0Factor ? void 0 : SF.metallicF0Factor,
                specularTexture: FF,
                specularColorFactor: SF.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : SF.metallicReflectanceColor.kRF(),
                specularColorTexture: CF
              };
            this._hasTexturesExtension(SF) && this._exporter._materialNeedsUVsSet.add(SF), WF.extensions[Eu] = AF
          } else if (SF instanceof pW) {
            WF.extensions = WF.extensions || {};
            const AF = this._exporter._materialExporter.getTextureInfo(SF.specularWeightTexture) ?? void 0,
              uF = this._exporter._materialExporter.getTextureInfo(SF.specularColorTexture) ?? void 0,
              hF = 1 == SF.specularWeight ? void 0 : SF.specularWeight,
              bW = SF.specularColor.equalsFloats(1, 1, 1) ? void 0 : SF.specularColor.kRF();
            if (!uF && !AF && void 0 === hF && void 0 === bW) return FF(WF);
            this._wasUsed = !0;
            const dF = {
                specularEdgeColorEnabled: !0
              },
              PF = {
                specularFactor: hF,
                specularTexture: AF,
                specularColorFactor: bW,
                specularColorTexture: uF,
                extensions: {}
              };
            PF.extensions.EXT_materials_specular_edge_color = dF, (CF = this._exporter._glTF).extensionsUsed || (CF.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (AF || uF) && this._exporter._materialNeedsUVsSet.add(SF), WF.extensions[Eu] = PF
          }
          FF(WF)
        }))
      }
    }
    let rh = !1;

    function gh() {
      rh || (rh = !0, cA.RegisterExtension(Eu, (FF => new Qu(FF))))
    }
    gh();
    const th = "KHR_materials_transmission";
    class Tu {
      constructor(FF) {
        this.name = th, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = FF
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(FF, WF, SF) {
        const CF = [];
        if (SF instanceof GA) {
          if (this._isExtensionEnabled(SF)) return SF.subSurface.refractionIntensityTexture && SF.subSurface.useGltfStyleTextures && CF.push(SF.subSurface.refractionIntensityTexture), CF
        } else SF instanceof pW && (SF.transmissionWeight > 0 && SF.transmissionWeightTexture && (CF.push(SF.transmissionWeightTexture), SF.transmissionColorTexture && CF.push(SF.transmissionColorTexture)), SF.subsurfaceWeight > 0 && SF.subsurfaceWeightTexture && CF.push(SF.subsurfaceWeightTexture));
        return CF
      }
      _isExtensionEnabled(FF) {
        if (FF instanceof pW && !FF.unlit) return FF.transmissionWeight > 0 || FF.subsurfaceWeight > 0;
        if (FF instanceof GA && !FF.unlit) {
          const WF = FF.subSurface;
          return WF.isRefractionEnabled && void 0 != WF.refractionIntensity && 0 != WF.refractionIntensity || null != WF.refractionIntensityTexture && WF.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(FF, WF, SF) {
        if (!this._isExtensionEnabled(SF)) return WF;
        if (SF instanceof GA) {
          this._wasUsed = !0;
          const CF = SF.subSurface,
            AF = {
              transmissionFactor: 0 === CF.refractionIntensity ? void 0 : CF.refractionIntensity
            };
          if (CF.refractionIntensityTexture)
            if (CF.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(SF);
              const FF = this._exporter._materialExporter.getTextureInfo(CF.refractionIntensityTexture);
              FF && (AF.transmissionTexture = FF)
            } else OF.b.Warn(`${FF}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          WF.extensions || (WF.extensions = {}), WF.extensions[th] = AF
        } else if (SF instanceof pW) {
          this._wasUsed = !0;
          const FF = {
            transmissionFactor: (1 - SF.transmissionWeight) * SF.subsurfaceWeight + SF.transmissionWeight
          };
          if (SF.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(SF);
            const WF = this._exporter._materialExporter.getTextureInfo(SF.transmissionWeightTexture);
            WF && (FF.transmissionTexture = WF)
          } else if (SF.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(SF);
            const WF = this._exporter._materialExporter.getTextureInfo(SF.subsurfaceWeightTexture);
            WF && (FF.transmissionTexture = WF)
          }
          if (0 == SF.transmissionDepth && (!SF.transmissionColor.equals(XF.e.White()) || SF.transmissionColorTexture) && WF.pbrMetallicRoughness && (WF.pbrMetallicRoughness.baseColorFactor || (WF.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), WF.pbrMetallicRoughness.baseColorFactor[0] *= SF.transmissionColor.r, WF.pbrMetallicRoughness.baseColorFactor[1] *= SF.transmissionColor.g, WF.pbrMetallicRoughness.baseColorFactor[2] *= SF.transmissionColor.b, SF.transmissionColorTexture && !WF.pbrMetallicRoughness.baseColorTexture)) {
            const FF = this._exporter._materialExporter.getTextureInfo(SF.transmissionColorTexture);
            FF && (WF.pbrMetallicRoughness.baseColorTexture = FF, this._exporter._materialNeedsUVsSet.add(SF))
          }
          WF.extensions || (WF.extensions = {}), WF.extensions[th] = FF
        }
        return WF
      }
    }
    let ah = !1;

    function kh() {
      ah || (ah = !0, cA.RegisterExtension(th, (FF => new Tu(FF))))
    }
    kh();
    var qh = SF(38236);
    const Vu = "KHR_materials_unlit";
    class Nu {
      constructor() {
        this.name = Vu, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(FF, WF, SF) {
        return new Promise((FF => {
          let CF = !1;
          SF instanceof GA ? CF = SF.unlit : SF instanceof qh.h && (CF = SF.disableLighting), CF && (this._wasUsed = !0, null == WF.extensions && (WF.extensions = {}), WF.extensions[Vu] = {}), FF(WF)
        }))
      }
    }
    let Du = !1;

    function Lu() {
      Du || (Du = !0, cA.RegisterExtension(Vu, (() => new Nu)))
    }
    Lu();
    const mh = "KHR_materials_volume";
    class Ou {
      constructor(FF) {
        this.name = mh, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = FF
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(FF, WF, SF) {
        const CF = [];
        if (SF instanceof GA) {
          if (this._isExtensionEnabled(SF)) return SF.subSurface.thicknessTexture && CF.push(SF.subSurface.thicknessTexture), CF
        } else SF instanceof pW && (SF.transmissionWeight > 0 || SF.subsurfaceWeight > 0) && SF.geometryThicknessTexture && CF.push(SF.geometryThicknessTexture);
        return CF
      }
      _isExtensionEnabled(FF) {
        if (FF.unlit) return !1;
        const WF = FF.subSurface;
        return !(!WF.isRefractionEnabled && !WF.isTranslucencyEnabled) && (void 0 != WF.maximumThickness && 0 != WF.maximumThickness || void 0 != WF.tintColorAtDistance && WF.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != WF.tintColor && WF.tintColor != XF.e.White() || this._hasTexturesExtension(FF))
      }
      _hasTexturesExtension(FF) {
        return null != FF.subSurface.thicknessTexture
      }
      postExportMaterialAsync(FF, WF, SF) {
        return new Promise((FF => {
          if (SF instanceof GA && this._isExtensionEnabled(SF)) {
            this._wasUsed = !0;
            const FF = SF.subSurface,
              CF = {
                thicknessFactor: 0 == FF.maximumThickness ? void 0 : FF.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(FF.thicknessTexture) ?? void 0,
                attenuationDistance: FF.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : FF.tintColorAtDistance,
                attenuationColor: FF.tintColor.equalsFloats(1, 1, 1) ? void 0 : FF.tintColor.kRF()
              };
            this._hasTexturesExtension(SF) && this._exporter._materialNeedsUVsSet.add(SF), WF.extensions = WF.extensions || {}, WF.extensions[mh] = CF
          } else if (SF instanceof pW) {
            const FF = SF.transmissionWeight > 0 && !SF.geometryThinWalled,
              CF = SF.subsurfaceWeight > 0 && !SF.geometryThinWalled;
            if (FF || CF) {
              this._wasUsed = !0;
              const AF = SF.geometryThickness,
                uF = this._exporter._materialExporter.getTextureInfo(SF.geometryThicknessTexture) ?? void 0;
              let hF;
              uF && this._exporter._materialNeedsUVsSet.add(SF);
              const bW = XF.e.White().kRF();
              if (FF && SF.transmissionDepth > 0) {
                const FF = 1 / SF.transmissionDepth;
                let WF = new fF.r(-Math.log(SF.transmissionColor.r) * FF, -Math.log(SF.transmissionColor.g) * FF, -Math.log(SF.transmissionColor.b) * FF);
                const CF = new fF.r(SF.transmissionScatter.r * FF, SF.transmissionScatter.g * FF, SF.transmissionScatter.b * FF),
                  AF = WF.subtract(CF),
                  uF = Math.min(AF.x, AF.y, AF.z);
                uF < 0 && (AF.x = AF.x - uF, AF.y = AF.y - uF, AF.z = AF.z - uF), WF = AF.add(CF);
                hF = 1 / Math.max(WF.x, WF.y, WF.z), bW[0] = Math.exp(-WF.x * hF), bW[1] = Math.exp(-WF.y * hF), bW[2] = Math.exp(-WF.z * hF)
              } else hF = Number.MAX_VALUE, bW[0] = 1, bW[1] = 1, bW[2] = 1;
              let dF = 1;
              const PF = XF.e.White().kRF();
              if (CF) {
                const FF = SF.subsurfaceRadius,
                  WF = SF.subsurfaceRadiusScale,
                  CF = new fF.r(WF.r, WF.g, WF.b).multiplyByFloats(FF, FF, FF),
                  AF = new fF.r(1 / Math.max(CF.x, 1e-6), 1 / Math.max(CF.y, 1e-6), 1 / Math.max(CF.z, 1e-6));
                dF = 1 / Math.max(AF.x, AF.y, AF.z), PF[0] = Math.exp(-AF.x * dF), PF[1] = Math.exp(-AF.y * dF), PF[2] = Math.exp(-AF.z * dF)
              }
              const RF = (1 - SF.transmissionWeight) * SF.subsurfaceWeight,
                iW = RF + SF.transmissionWeight,
                eF = 1 / Math.max(iW, 1e-6),
                EF = SF.transmissionWeight * eF,
                QF = RF * eF,
                rW = bW.map(((FF, WF) => FF * EF + PF[WF] * QF)),
                gW = {
                  thicknessFactor: AF,
                  thicknessTexture: uF,
                  attenuationDistance: hF * EF + dF * QF,
                  attenuationColor: rW
                };
              WF.extensions = WF.extensions || {}, WF.extensions[mh] = gW
            }
          }
          FF(WF)
        }))
      }
    }
    let xh = !1;

    function Zu() {
      xh || (xh = !0, cA.RegisterExtension(mh, (FF => new Ou(FF))))
    }
    Zu();
    const ou = "KHR_materials_volume_scatter";
    class Yu {
      constructor(FF) {
        this.name = ou, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = FF
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(FF, WF, SF) {
        const CF = [];
        return SF instanceof pW && (SF.transmissionWeight > 0 && SF.transmissionScatterTexture && CF.push(SF.transmissionScatterTexture), SF.subsurfaceWeight > 0 && SF.subsurfaceColorTexture && CF.push(SF.subsurfaceColorTexture)), CF
      }
      _isExtensionEnabled(FF) {
        if (FF.unlit) return !1;
        const WF = FF.transmissionWeight > 0 && !FF.geometryThinWalled && FF.transmissionDepth > 0 && !FF.transmissionScatter.equals(XF.e.Black()),
          SF = FF.subsurfaceWeight > 0 && !FF.geometryThinWalled;
        return !(!WF && !SF)
      }
      postExportMaterialAsync(FF, WF, SF) {
        return new Promise((FF => {
          if (SF instanceof pW && this._isExtensionEnabled(SF)) {
            this._wasUsed = !0;
            let FF = fF.r.Zero(),
              CF = 0;
            if (SF.transmissionWeight > 0) {
              FF = function(FF) {
                const WF = new fF.r(Math.sqrt(1 - FF.x), Math.sqrt(1 - FF.y), Math.sqrt(1 - FF.z)),
                  SF = new fF.r(1, 1, 1),
                  CF = SF.subtract(WF),
                  AF = SF.subtract(new fF.r(.139, .139, .139).multiplyInPlace(WF)),
                  uF = SF.add(new fF.r(1.17, 1.17, 1.17).multiplyInPlace(WF));
                return CF.multiplyInPlace(AF).divideInPlace(uF)
              }(new fF.r(SF.transmissionScatter.r, SF.transmissionScatter.g, SF.transmissionScatter.b)), CF = SF.transmissionScatterAnisotropy
            }
            const AF = fF.r.Zero();
            let uF = 0;
            SF.subsurfaceWeight > 0 && (AF.set(SF.subsurfaceColor.r, SF.subsurfaceColor.g, SF.subsurfaceColor.b), uF = SF.subsurfaceScatterAnisotropy);
            const hF = (1 - SF.transmissionWeight) * SF.subsurfaceWeight,
              bW = hF + SF.transmissionWeight,
              dF = 1 / Math.max(bW, 1e-6),
              PF = SF.transmissionWeight * dF,
              RF = hF * dF,
              iW = {
                multiscatterColorFactor: FF.multiplyByFloats(PF, PF, PF).addInPlace(AF.multiplyByFloats(RF, RF, RF)).kRF(),
                scatterAnisotropy: CF * PF + uF * RF
              };
            if (SF.subsurfaceWeight > 0 && SF.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(SF);
              const FF = this._exporter._materialExporter.getTextureInfo(SF.subsurfaceColorTexture);
              FF && (iW.multiscatterColorTexture = FF)
            } else if (SF.transmissionWeight > 0 && SF.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(SF);
              const FF = this._exporter._materialExporter.getTextureInfo(SF.transmissionScatterTexture);
              FF && (iW.multiscatterColorTexture = FF)
            }
            WF.extensions = WF.extensions || {}, WF.extensions[ou] = iW
          }
          FF(WF)
        }))
      }
    }
    let Mu = !1;

    function ch() {
      Mu || (Mu = !0, cA.RegisterExtension(ou, (FF => new Yu(FF)), 101))
    }
    ch();
    const Gu = "KHR_materials_diffuse_roughness";
    class zh {
      constructor(FF) {
        this.name = Gu, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = FF
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(FF, WF, SF) {
        const CF = [];
        if (SF instanceof VW) {
          if (SF._baseDiffuseRoughness) return SF._baseDiffuseRoughnessTexture && CF.push(SF._baseDiffuseRoughnessTexture), CF
        } else if (SF instanceof pW && SF.baseDiffuseRoughness) return SF.baseDiffuseRoughnessTexture && CF.push(SF.baseDiffuseRoughnessTexture), CF;
        return []
      }
      postExportMaterialAsync(FF, WF, SF) {
        return new Promise((FF => {
          let CF = null,
            AF = null;
          if (SF instanceof VW ? (CF = SF._baseDiffuseRoughness, AF = SF._baseDiffuseRoughnessTexture) : SF instanceof pW && (CF = SF.baseDiffuseRoughness, AF = SF.baseDiffuseRoughnessTexture), !CF) return void FF(WF);
          this._wasUsed = !0, WF.extensions = WF.extensions || {};
          const uF = {
            diffuseRoughnessFactor: CF,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(AF) ?? void 0
          };
          null !== uF.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(SF), WF.extensions[Gu] = uF, FF(WF)
        }))
      }
    }
    let Iu = !1;

    function fu() {
      Iu || (Iu = !0, cA.RegisterExtension(Gu, (FF => new zh(FF))))
    }
    fu();
    const yh = "KHR_materials_openpbr";
    class su {
      constructor() {
        this.name = yh, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(FF, WF, SF) {
        return new Promise((FF => {
          SF instanceof pW && (this._wasUsed = !0, WF.extensions = WF.extensions || {}, WF.extensions[yh] = {}), FF(WF)
        }))
      }
    }
    let nu = !1;

    function Hu() {
      nu || (nu = !0, cA.RegisterExtension(yh, (() => new su)))
    }
    Hu();
    const Ku = "KHR_texture_transform";
    class wu {
      constructor() {
        this.name = Ku, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(FF, WF, SF) {
        if (SF.OWF() || DW.h.Warn(`${FF}: "scene" is not defined for Babylon texture ${SF.name}!`), (0 !== SF.uAng || 0 !== SF.vAng) && (DW.h.Warn(`${FF}: Texture ${SF.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== SF.uRotationCenter || 0 !== SF.vRotationCenter)) return;
        const CF = {};
        let AF = !1;
        if (0 === SF.uOffset && 0 === SF.vOffset || (CF.offset = [SF.uOffset, SF.vOffset], AF = !0), 1 === SF.uScale && 1 === SF.vScale || (CF.scale = [SF.uScale, SF.vScale], AF = !0), 0 !== SF.wAng) {
          if (0 !== SF.uRotationCenter || 0 !== SF.vRotationCenter) {
            if (SF.homogeneousRotationInUVTransform && SF.uScale !== SF.vScale) return void DW.h.Warn(`${FF}: Texture ${SF.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${Ku}.`);
            DW.h.Warn(`${FF}: Texture ${SF.name} with non-origin rotation center will be exported using an adjusted offset with ${Ku}.`), CF.offset = function(FF) {
              const {
                uOffset: WF,
                vOffset: SF,
                uRotationCenter: CF,
                vRotationCenter: AF,
                uScale: uF,
                vScale: hF,
                wAng: bW
              } = FF, dF = Math.cos(bW), PF = Math.sin(bW), RF = CF * uF, iW = AF * hF;
              return [WF + (RF * (1 - dF) + iW * PF), SF + (iW * (1 - dF) - RF * PF)]
            }(SF)
          }
          CF.rotation = -SF.wAng, AF = !0
        }
        0 !== SF.coordinatesIndex && (CF.texCoord = SF.coordinatesIndex, AF = !0), AF && (this._wasUsed = !0, WF.extensions || (WF.extensions = {}), WF.extensions[Ku] = CF)
      }
    }
    let Xu = !1;

    function Uu() {
      Xu || (Xu = !0, cA.RegisterExtension(Ku, (() => new wu)))
    }
    Uu();
    var Bu = SF(38010);
    const jh = "KHR_texture_basisu";
    class vh {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(FF) {
        this.name = jh, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = FF
      }
      dispose() {}
      postExportTexture(FF, WF) {
        const SF = this._exporter._textures[WF.index],
          CF = SF.source;
        if (void 0 === CF) return;
        const AF = this._exporter._images[CF];
        "image/ktx2" === (AF.mimeType || (0, Bu.i)(AF.uri)) && (SF.source = void 0, SF.extensions || (SF.extensions = {}), SF.extensions[jh] = {
          source: CF
        }, this._wasUsed = !0)
      }
    }
    let Ju = !1;

    function pu() {
      Ju || (Ju = !0, cA.RegisterExtension(jh, (FF => new vh(FF))))
    }
    pu();
    const lu = "EXT_texture_webp";
    class Fh {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(FF) {
        this.name = lu, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = FF
      }
      dispose() {}
      postExportTexture(FF, WF) {
        const SF = this._exporter._textures[WF.index],
          CF = SF.source;
        if (void 0 === CF) return;
        const AF = this._exporter._images[CF];
        "image/webp" === (AF.mimeType || (0, Bu.i)(AF.uri)) && (SF.source = void 0, SF.extensions || (SF.extensions = {}), SF.extensions[lu] = {
          source: CF
        }, this._wasUsed = !0)
      }
    }
    let Wh = !1;

    function Sh() {
      Wh || (Wh = !0, cA.RegisterExtension(lu, (FF => new Fh(FF))))
    }
    Sh();
    const Ch = "EXT_texture_avif";
    class Ah {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(FF) {
        this.name = Ch, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = FF
      }
      dispose() {}
      postExportTexture(FF, WF) {
        const SF = this._exporter._textures[WF.index],
          CF = SF.source;
        if (void 0 === CF) return;
        const AF = this._exporter._images[CF];
        "image/avif" === (AF.mimeType || (0, Bu.i)(AF.uri)) && (SF.source = void 0, SF.extensions || (SF.extensions = {}), SF.extensions[Ch] = {
          source: CF
        }, this._wasUsed = !0)
      }
    }
    let uh = !1;

    function hh() {
      uh || (uh = !0, cA.RegisterExtension(Ch, (FF => new Ah(FF))))
    }
    hh();
    class bb {
      static CreateSTL(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          AF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          uF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          hF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          bW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          dF = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const PF = function(FF, WF, SF) {
            const AF = [3 * FF[SF], 3 * FF[SF + 1], 3 * FF[SF + 2]],
              uF = [new CF.HC(WF[AF[0]], WF[AF[0] + 2], WF[AF[0] + 1]), new CF.HC(WF[AF[1]], WF[AF[1] + 2], WF[AF[1] + 1]), new CF.HC(WF[AF[2]], WF[AF[2] + 2], WF[AF[2] + 1])],
              hF = uF[0].subtract(uF[1]),
              bW = uF[2].subtract(uF[1]);
            return {
              v: uF,
              n: CF.HC.Cross(bW, hF).normalize()
            }
          },
          iW = function(FF, WF, SF, CF) {
            return WF = eF(FF, WF, SF.x, CF), WF = eF(FF, WF, SF.y, CF), eF(FF, WF, SF.z, CF)
          },
          eF = function(FF, WF, SF, CF) {
            return FF.setFloat32(WF, SF, CF), WF + 4
          },
          QF = function(FF) {
            if (bW) {
              let WF = FF;
              FF instanceof EF.d && (WF = FF.iiF);
              const SF = WF.getVerticesData(RF.h.PositionKind, !0, !0);
              if (!SF) return [];
              const AF = CF.HC.Zero();
              let uF;
              for (uF = 0; uF < SF.length; uF += 3) CF.HC.TransformCoordinatesFromFloatsToRef(SF[uF], SF[uF + 1], SF[uF + 2], FF.computeWorldMatrix(!0), AF).toArray(SF, uF);
              return SF
            }
            return FF.getVerticesData(RF.h.PositionKind) || []
          };
        bW && (hF = !0);
        let rW = "",
          gW = 0,
          tW = 0;
        if (AF) {
          for (let SF = 0; SF < FF.length; SF++) {
            const WF = FF[SF].yEF();
            gW += WF ? WF.length / 3 : 0
          }
          const WF = new ArrayBuffer(84 + 50 * gW);
          rW = new DataView(WF), tW += 80, rW.setUint32(tW, gW, uF), tW += 4
        } else dF || (rW = "solid stlmesh\r\n");
        for (let CF = 0; CF < FF.length; CF++) {
          const WF = FF[CF];
          !AF && dF && (rW += "solid " + WF.name + "\r\n"), !hF && WF instanceof PC.c && WF.bakeCurrentTransformIntoVertices();
          const SF = QF(WF),
            bW = WF.yEF() || [];
          for (let FF = 0; FF < bW.length; FF += 3) {
            const WF = PF(bW, SF, FF);
            AF ? (tW = iW(rW, tW, WF.n, uF), tW = iW(rW, tW, WF.v[0], uF), tW = iW(rW, tW, WF.v[1], uF), tW = iW(rW, tW, WF.v[2], uF), tW += 2) : (rW += "\tfacet normal " + WF.n.x + " " + WF.n.y + " " + WF.n.z + "\r\n", rW += "\t\touter loop\r\n", rW += "\t\t\tvertex " + WF.v[0].x + " " + WF.v[0].y + " " + WF.v[0].z + "\r\n", rW += "\t\t\tvertex " + WF.v[1].x + " " + WF.v[1].y + " " + WF.v[1].z + "\r\n", rW += "\t\t\tvertex " + WF.v[2].x + " " + WF.v[2].y + " " + WF.v[2].z + "\r\n", rW += "\t\tendloop\r\n", rW += "\tendfacet\r\n")
          }!AF && dF && (rW += "endsolid " + name + "\r\n")
        }
        if (AF || dF || (rW += "endsolid stlmesh"), WF) {
          const FF = document.createElement("a"),
            WF = new Blob([rW], {
              type: "application/octet-stream"
            });
          FF.href = window.URL.createObjectURL(WF), FF.download = SF + ".stl", FF.click()
        }
        return rW
      }
    }

    function dh(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const AF = [];
      for (let uF = 0; uF < FF.length / SF; uF++) {
        const hF = FF[uF * SF] * (CF ? -1 : 1),
          bW = FF[uF * SF + 1],
          dF = FF[uF * SF + 2];
        AF.push(`(${hF.toPrecision(WF.precision)}, ${bW.toPrecision(WF.precision)}, ${dF.toPrecision(WF.precision)})`)
      }
      return AF.join(", ")
    }

    function Ph(FF, WF) {
      const SF = [];
      for (let CF = 0; CF < FF.length / 2; CF++) {
        const AF = FF[2 * CF],
          uF = FF[2 * CF + 1];
        SF.push(`(${AF.toPrecision(WF.precision)}, ${(1-uF).toPrecision(WF.precision)})`)
      }
      return SF.join(", ")
    }

    function Rh(FF, WF, SF, CF) {
      const AF = FF.getVerticesData(RF.h.PositionKind),
        uF = FF.getVerticesData(RF.h.NormalKind);
      if (AF && uF) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${SF}"\n\t\tint[] faceVertexCounts = [${function(FF){const WF=FF.yEF()?.length?FF.getTotalIndices():FF.getTotalVertices();return Array(WF/3).fill(3).join(", ")}(FF)}]\n\t\tint[] faceVertexIndices = [${function(FF){const WF=FF.yEF(),SF=WF?.length??FF.getTotalVertices(),CF=[];if(null!==WF)for(let AF=0;AF<SF;AF++)CF.push(WF[AF]);else for(let AF=0;AF<SF;AF++)CF.push(AF);return CF.join(", ")}(FF)}]\n\t\tnormal3f[] normals = [${dh(uF,WF,void 0,CF)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${dh(AF,WF,void 0,CF)}]\n        ${function(FF,WF){let SF="";for(let AF=0;AF<4;AF++){const CF=AF>0?AF:"",uF=FF.getVerticesData(RF.h.UVKind+(CF?CF+1:""));uF&&(SF+=`\n\t\ttexCoord2f[] primvars:st${CF} = [${Ph(uF,WF)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const CF=FF.getVerticesData(RF.h.ColorKind);return CF&&(SF+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        dh(CF, WF, CF.length / FF.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),SF}(FF,WF)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function ib(FF, WF, SF, CF) {
      return `\n        def "Geometry"\n        {\n        ${Rh(FF,WF,SF,CF)}\n        }\n        `
    }

    function eh(FF) {
      let WF = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return WF += FF, fflate.strToU8(WF)
    }

    function Eh(FF) {
      const WF = FF.m;
      return `( ${Qh(WF,0)}, ${Qh(WF,4)}, ${Qh(WF,8)}, ${Qh(WF,12)} )`
    }

    function Qh(FF, WF) {
      return `(${FF[WF+0]}, ${FF[WF+1]}, ${FF[WF+2]}, ${FF[WF+3]})`
    }

    function rb(FF, WF) {
      const SF = "Object_" + FF.uniqueId,
        CF = Eh(WF);
      return `def Xform "${SF}" (\n\tprepend references = @./geometries/Geometry_${FF.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${CF}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${FF.material.uniqueId}>\n}\n\n`
    }

    function gb(FF) {
      switch (FF) {
        case NF.c.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case NF.c.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case NF.c.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function tb(FF) {
      return `(${FF.x}, ${FF.y})`
    }

    function Th(FF) {
      return `(${FF.r}, ${FF.g}, ${FF.b})`
    }

    function ab(FF) {
      return "image/jpeg" === FF || "image/png" === FF
    }

    function kb(FF, WF, SF, AF, uF, hF) {
      const bW = FF.getInternalTexture().uniqueId + "_" + FF.invertY,
        PF = FF.mimeType || (0, dF.b)(FF.getInternalTexture()?.url ?? ""),
        RF = ab(PF) ? PF : "image/png",
        iW = "image/jpeg" === RF ? "jpg" : "png";
      uF[bW] = {
        texture: FF,
        mimeType: RF,
        ext: iW
      };
      const eF = FF.coordinatesIndex > 0 ? "st" + FF.coordinatesIndex : "st",
        EF = new CF.Vector2(FF.uScale, FF.vScale),
        QF = new CF.Vector2(FF.uOffset, FF.vOffset),
        rW = FF.wAng,
        gW = Math.sin(rW),
        tW = Math.cos(rW);
      return QF.y = 1 - QF.y - EF.y, QF.x += gW * EF.x, QF.y += (1 - tW) * EF.y, `\n    def Shader "PrimvarReader_${SF}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${eF}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${SF}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${WF.uniqueId}/PrimvarReader_${SF}.outputs:result>\n        float inputs:rotation = ${(rW*(180/Math.PI)).toFixed(hF.precision)}\n        float2 inputs:scale = ${tb(EF)}\n        float2 inputs:translation = ${tb(QF)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${FF.uniqueId}_${SF}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${bW}.${iW}@\n        float2 inputs:st.connect = </Root/Materials/Material_${WF.uniqueId}/Transform2d_${SF}.outputs:result>\n        ${AF?"float4 inputs:scale = "+function(FF){return`(${FF.r}, ${FF.g}, ${FF.b}, 1.0)`}(AF):""}\n        token inputs:sourceColorSpace = "${FF.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${gb(FF.wrapU)}"\n        token inputs:wrapT = "${gb(FF.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${WF.needAlphaBlending()||WF.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function qb(FF, WF, SF) {
      const CF = "\t\t\t",
        AF = [],
        uF = [],
        {
          diffuseMap: hF,
          diffuse: bW,
          alphaCutOff: dF,
          emissiveMap: PF,
          emissive: RF,
          normalMap: iW,
          roughnessMap: eF,
          roughnessChannel: EF,
          roughness: QF,
          metalnessMap: rW,
          metalnessChannel: tW,
          metalness: TF,
          aoMap: aW,
          aoMapChannel: kW,
          aoMapIntensity: qW,
          alphaMap: VF,
          ior: NF,
          clearCoatEnabled: DF,
          clearCoat: LF,
          clearCoatMap: mW,
          clearCoatRoughness: OF,
          clearCoatRoughnessMap: xW
        } = function(FF) {
          const WF = {
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
          return FF instanceof uC.StandardMaterial ? {
            ...WF,
            diffuseMap: FF.diffuseTexture,
            diffuse: FF.diffuseColor,
            alphaCutOff: FF.alphaCutOff,
            emissiveMap: FF.emissiveTexture,
            emissive: FF.emissiveColor,
            roughness: 1,
            alphaMap: FF.opacityTexture
          } : FF instanceof VW ? {
            ...WF,
            diffuseMap: FF._albedoTexture,
            diffuse: FF._albedoColor,
            alphaCutOff: FF._alphaCutOff,
            emissiveMap: FF._emissiveTexture,
            emissive: FF._emissiveColor,
            normalMap: FF._bumpTexture,
            roughnessMap: FF._metallicTexture,
            roughnessChannel: FF._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: FF._roughness ?? 1,
            metalnessMap: FF._metallicTexture,
            metalnessChannel: FF._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: FF._metallic ?? 0,
            aoMap: FF._ambientTexture,
            aoMapChannel: FF._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: FF._ambientTextureStrength,
            alphaMap: FF._opacityTexture,
            ior: FF.subSurface.indexOfRefraction,
            clearCoatEnabled: FF.clearCoat.isEnabled,
            clearCoat: FF.clearCoat.intensity,
            clearCoatMap: FF.clearCoat.texture,
            clearCoatRoughness: FF.clearCoat.roughness,
            clearCoatRoughnessMap: FF.clearCoat.useRoughnessFromMainTexture ? FF.clearCoat.texture : FF.clearCoat.textureRoughness
          } : WF
        }(FF);
      return null !== hF ? (AF.push(`${CF}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${FF.uniqueId}/Texture_${hF.uniqueId}_diffuse.outputs:rgb>`), FF.needAlphaBlending() ? AF.push(`${CF}float inputs:opacity.connect = </Root/Materials/Material_${FF.uniqueId}/Texture_${hF.uniqueId}_diffuse.outputs:a>`) : FF.needAlphaTesting() && (AF.push(`${CF}float inputs:opacity.connect = </Root/Materials/Material_${FF.uniqueId}/Texture_${hF.uniqueId}_diffuse.outputs:a>`), AF.push(`${CF}float inputs:opacityThreshold = ${dF}`)), uF.push(kb(hF, FF, "diffuse", bW, WF, SF))) : AF.push(`${CF}color3f inputs:diffuseColor = ${Th(bW||gW.Color3.White())}`), null !== PF ? (AF.push(`${CF}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${FF.uniqueId}/Texture_${PF.uniqueId}_emissive.outputs:rgb>`), uF.push(kb(PF, FF, "emissive", RF, WF, SF))) : RF && RF.toLuminance() > 0 && AF.push(`${CF}color3f inputs:emissiveColor = ${Th(RF)}`), null !== iW && (AF.push(`${CF}normal3f inputs:normal.connect = </Root/Materials/Material_${FF.uniqueId}/Texture_${iW.uniqueId}_normal.outputs:rgb>`), uF.push(kb(iW, FF, "normal", null, WF, SF))), null !== aW && (AF.push(`${CF}float inputs:occlusion.connect = </Root/Materials/Material_${FF.uniqueId}/Texture_${aW.uniqueId}_occlusion.outputs:${kW}>`), uF.push(kb(aW, FF, "occlusion", new gW.Color3(qW, qW, qW), WF, SF))), null !== eF ? (AF.push(`${CF}float inputs:roughness.connect = </Root/Materials/Material_${FF.uniqueId}/Texture_${eF.uniqueId}_roughness.outputs:${EF}>`), uF.push(kb(eF, FF, "roughness", new gW.Color3(QF, QF, QF), WF, SF))) : AF.push(`${CF}float inputs:roughness = ${QF}`), null !== rW ? (AF.push(`${CF}float inputs:metallic.connect = </Root/Materials/Material_${FF.uniqueId}/Texture_${rW.uniqueId}_metallic.outputs:${tW}>`), uF.push(kb(rW, FF, "metallic", new gW.Color3(TF, TF, TF), WF, SF))) : AF.push(`${CF}float inputs:metallic = ${TF}`), null !== VF ? (AF.push(`${CF}float inputs:opacity.connect = </Root/Materials/Material_${FF.uniqueId}/Texture_${VF.uniqueId}_opacity.outputs:r>`), AF.push(`${CF}float inputs:opacityThreshold = 0.0001`), uF.push(kb(VF, FF, "opacity", null, WF, SF))) : AF.push(`${CF}float inputs:opacity = ${FF.alpha}`), DF && (null !== mW ? (AF.push(`${CF}float inputs:clearcoat.connect = </Root/Materials/Material_${FF.uniqueId}/Texture_${mW.uniqueId}_clearcoat.outputs:r>`), uF.push(kb(mW, FF, "clearcoat", new gW.Color3(LF, LF, LF), WF, SF))) : AF.push(`${CF}float inputs:clearcoat = ${LF}`), null !== xW ? (AF.push(`${CF}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${FF.uniqueId}/Texture_${xW.uniqueId}_clearcoatRoughness.outputs:g>`), uF.push(kb(xW, FF, "clearcoatRoughness", new gW.Color3(OF, OF, OF), WF, SF))) : AF.push(`${CF}float inputs:clearcoatRoughness = ${OF}`)), AF.push(`${CF}float inputs:ior = ${NF}`), `\n\tdef Material "Material_${FF.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${AF.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${FF.uniqueId}/PreviewSurface.outputs:surface>\n\n${uF.join("\n")}\n\n\t}\n`
    }

    function Vh(FF) {
      FF.computeWorldMatrix(!0);
      const WF = FF.getWorldMatrix().clone(),
        SF = FF.OWF().useRightHandedSystem;
      let CF = FF.material?._getEffectiveOrientation(FF) ?? FF.sideOrientation,
        hF = !SF,
        bW = FF.parent;
      for (; bW;) {
        if (GS(bW, SF) && null === bW.parent) {
          SF || (WF.multiplyToRef(bW.getWorldMatrix().invert(), WF), CF = CF === uF.c.ClockWiseSideOrientation ? uF.c.CounterClockWiseSideOrientation : uF.c.ClockWiseSideOrientation), hF = !1;
          break
        }
        bW = bW.parent
      }
      return WF.determinant() < 0 && AF.Tools.Warn(`Mesh ${FF.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: WF,
        windingOrder: CF === uF.c.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: hF
      }
    }
    async function Nh(FF, WF, SF) {
      const uF = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...WF
      };
      "undefined" === typeof fflate && await AF.Tools.LoadScriptAsync(uF.fflateUrl);
      const hF = {};
      hF[uF.modelFileName] = null;
      let bW = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      bW += function(FF) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===FF.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${FF.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${FF.planeAnchoringAlignment}"`:""}\n            `
      }(uF);
      const dF = {};
      for (const CF of FF.meshes) {
        if (0 === CF.getTotalVertices()) continue;
        const FF = CF,
          WF = FF.geometry,
          PF = FF.material;
        if (!PF || !WF || SF && !SF(FF)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(PF.getClassName())) {
          const SF = "geometries/Geometry_" + WF.uniqueId + ".usda",
            {
              matrix: CF,
              windingOrder: AF,
              convertToRightHanded: RF
            } = Vh(FF);
          if (!(SF in hF)) {
            const FF = ib(WF, uF, AF, RF);
            hF[SF] = eh(FF)
          }
          PF.uniqueId in dF || (dF[PF.uniqueId] = PF), bW += rb(FF, CF)
        } else AF.Tools.Warn("USDZExportAsync does not support this material type: " + PF.getClassName())
      }
      FF.activeCamera && uF.exportCamera && (bW += function(FF, WF) {
        const SF = "Camera_" + FF.uniqueId,
          AF = Eh(CF.Matrix.RotationY(Math.PI).multiply(FF.getWorldMatrix()));
        if (FF.mode === NF.c.ORTHOGRAPHIC_CAMERA) return `def Camera "${SF}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${AF}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${FF.minZ.toPrecision(WF.precision)}, ${FF.maxZ.toPrecision(WF.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(FF.orthoLeft||1)+Math.abs(FF.orthoRight||1))).toPrecision(WF.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(FF.orthoTop||1)+Math.abs(FF.orthoBottom||1))).toPrecision(WF.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const CF = FF.sC().getAspectRatio(FF),
            uF = WF.cameraSensorWidth || 35;
          return `def Camera "${SF}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${AF}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${FF.minZ.toPrecision(WF.precision)}, ${FF.maxZ.toPrecision(WF.precision)})\n\t\t\tfloat focalLength = ${(uF/(2*Math.tan(.5*FF.fov))).toPrecision(WF.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(uF*CF).toPrecision(WF.precision)}\n\t\t\tfloat verticalAperture = ${(uF/CF).toPrecision(WF.precision)}            \n\t\t}\n\t\n\t`
        }
      }(FF.activeCamera, uF)), bW += "\n            }\n        }";
      const PF = {};
      bW += function(FF, WF, SF) {
        const CF = [];
        for (const AF in FF) {
          const uF = FF[AF];
          CF.push(qb(uF, WF, SF))
        }
        return `\n    def "Materials"\n{\n${CF.join("")}\n}\n\n`
      }(dF, PF, uF), bW += "\n    }", hF[uF.modelFileName] = fflate.strToU8(bW);
      for (const CF in PF) {
        const {
          texture: FF,
          ext: WF,
          mimeType: SF
        } = PF[CF], AF = await tC(FF);
        if (AF && ab(AF.mimeType) && AF.mimeType === SF) hF[`textures/Texture_${CF}.${WF}`] = new Uint8Array(AF.data);
        else {
          const AF = FF.getSize(),
            uF = await (0, kW.h)(FF),
            bW = await DF.DumpTools.DumpDataAsync(AF.width, AF.height, uF, SF, void 0, !1, !0);
          hF[`textures/Texture_${CF}.${WF}`] = new Uint8Array(bW).slice()
        }
      }
      let RF = 0;
      for (const CF in hF) {
        const FF = hF[CF];
        if (!FF) continue;
        RF += 34 + CF.length;
        const WF = 63 & RF;
        if (4 !== WF) {
          const SF = new Uint8Array(64 - WF);
          hF[CF] = [FF, {
            extra: {
              12345: SF
            }
          }]
        }
        RF = FF.length
      }
      return fflate.zipSync(hF, {
        level: 0
      })
    }
    var Dh = SF(39071);
    class Lh {
      static Export(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          SF = arguments.length > 2 ? arguments[2] : void 0;
        if (!FF || 0 === FF.bones.length) throw new Error("Invalid or empty skeleton provided");
        let CF = WF;
        WF && 0 !== WF.length || (CF = FF.animations.map((FF => FF.name)));
        let AF = null;
        for (const PF of CF) {
          const WF = FF.getAnimationRange(PF);
          WF && (AF = AF ? new Dh.c("animation-range", Math.min(AF.from, WF.from), Math.max(AF.to, WF.to)) : WF)
        }
        if (!AF && (FF.animations.length > 0 && (AF = FF.getAnimationRange(FF.animations[0].name)), !AF)) throw new Error("No animation range found in skeleton");
        const uF = SF || 1 / (FF.animations[0]?.framePerSecond || 30),
          hF = this._BuildBoneHierarchy(FF, CF);
        let bW = 0;
        for (const PF of hF) PF.positionKeys.length > 0 && (bW = Math.max(bW, PF.positionKeys.length)), PF.rotationKeys.length > 0 && (bW = Math.max(bW, PF.rotationKeys.length));
        0 === bW && (bW = Math.floor((AF.to - AF.from) / uF) + 1);
        let dF = "";
        return dF += "HIERARCHY\n", dF += this._ExportHierarchy(hF, 0), dF += "MOTION\n", dF += `Frames: ${bW}\n`, dF += `Frame Time: ${uF.toFixed(6)}\n`, dF += this._ExportMotionData(hF, bW, 0, CF), dF
      }
      static _BuildBoneHierarchy(FF, WF) {
        const SF = new Map,
          CF = [];
        for (const AF of FF.bones) {
          const FF = {
            bone: AF,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          SF.set(AF, FF)
        }
        for (const AF of FF.bones) {
          const FF = SF.get(AF);
          if (AF.animations.length > 0)
            for (const SF of AF.animations) WF.includes(SF.name) && ("position" === SF.targetProperty ? (FF.hasPositionChannels = !0, FF.positionKeys.push(...SF.getKeys())) : "rotationQuaternion" === SF.targetProperty && (FF.hasRotationChannels = !0, FF.rotationKeys.push(...SF.getKeys())));
          if (AF.getParent()) {
            const WF = SF.get(AF.getParent());
            WF && WF.children.push(FF)
          } else CF.push(FF)
        }
        return CF
      }
      static _ExportHierarchy(FF, WF) {
        let SF = "";
        const CF = "    ".repeat(WF);
        for (const AF of FF) {
          const FF = AF.bone;
          if (this._IsEndSite(AF)) {
            SF += `${CF}End Site\n`, SF += `${CF}{\n`;
            const WF = this._GetBoneOffset(FF);
            SF += `${CF}    OFFSET ${WF.x.toFixed(6)} ${WF.y.toFixed(6)} ${WF.z.toFixed(6)}\n`, SF += `${CF}}\n`
          } else {
            SF += `${0===WF?"ROOT":`${CF}JOINT`} ${FF.name}\n`, SF += `${CF}{\n`;
            const uF = this._GetBoneOffset(FF);
            SF += `${CF}    OFFSET ${uF.x.toFixed(6)} ${uF.y.toFixed(6)} ${uF.z.toFixed(6)}\n`;
            const hF = [];
            AF.hasPositionChannels && hF.push("Xposition", "Yposition", "Zposition"), AF.hasRotationChannels && hF.push("Zrotation", "Xrotation", "Yrotation"), hF.length > 0 && (SF += `${CF}    CHANNELS ${hF.length} ${hF.join(" ")}\n`), AF.children.length > 0 && (SF += this._ExportHierarchy(AF.children, WF + 1)), SF += `${CF}}\n`
          }
        }
        return SF
      }
      static _IsEndSite(FF) {
        return 0 === FF.children.length
      }
      static _GetBoneOffset(FF) {
        try {
          if (!FF.getParent()) return FF.getRestMatrix().getTranslation();
          return FF.getLocalMatrix().getTranslation()
        } catch (WF) {
          return CF.HC.Zero()
        }
      }
      static _ExportMotionData(FF, WF, SF, CF) {
        let AF = "";
        for (let uF = 0; uF < WF; uF++) {
          const WF = [];
          this._CollectFrameValues(FF, uF + SF, WF, CF), AF += WF.map((FF => FF.toFixed(6))).join(" ") + "\n"
        }
        return AF
      }
      static _CollectFrameValues(FF, WF, SF, CF) {
        for (const AF of FF)
          if (!this._IsEndSite(AF)) {
            if (AF.hasPositionChannels) {
              const FF = this._GetPositionAtFrameIndex(AF.positionKeys, WF);
              SF.push(FF.x, FF.y, FF.z)
            }
            if (AF.hasRotationChannels) {
              const FF = this._GetRotationAtFrameIndex(AF.rotationKeys, WF),
                CF = this._QuaternionToEuler(FF);
              SF.push(CF.z, CF.x, CF.y)
            }
            AF.children.length > 0 && this._CollectFrameValues(AF.children, WF, SF, CF)
          }
      }
      static _GetPositionAtFrameIndex(FF, WF) {
        if (0 === FF.length) return CF.HC.Zero();
        return FF[Math.max(0, Math.min(WF, FF.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(FF, WF) {
        if (0 === FF.length) return CF.Quaternion.Identity();
        return FF[Math.max(0, Math.min(WF, FF.length - 1))].value.clone()
      }
      static _QuaternionToEuler(FF) {
        const WF = new CF.Matrix;
        FF.toRotationMatrix(WF);
        const SF = WF.m;
        let uF, hF, bW;
        const dF = Math.sqrt(SF[0] * SF[0] + SF[1] * SF[1]);
        return dF > MS.c ? (uF = Math.atan2(SF[6], SF[10]), hF = Math.atan2(-SF[2], dF), bW = Math.atan2(SF[1], SF[0])) : (uF = Math.atan2(-SF[9], SF[5]), hF = Math.atan2(-SF[2], dF), bW = 0), new CF.HC(AF.Tools.ToDegrees(uF), AF.Tools.ToDegrees(hF), AF.Tools.ToDegrees(bW))
      }
    }

    function mb(FF) {
      return "string" === typeof FF?.name
    }
    const Oh = Symbol("__xml:meta$__"),
      xb = Symbol("__xml:name$__");

    function Zh(FF, WF) {
      Object.prototype.hasOwnProperty.call(FF.metadata, Oh) || (FF.metadata[Oh] = []), FF.metadata[Oh].push(WF)
    }

    function oh(FF) {
      return (WF, SF) => {
        WF[xb] = FF
      }
    }

    function Yh() {
      return (FF, WF) => Zh(WF, {
        kind: "none",
        prop: String(WF.name),
        ignore: !0
      })
    }

    function Mh(FF) {
      return (WF, SF) => Zh(SF, {
        kind: "attr",
        prop: String(SF.name),
        ...FF
      })
    }

    function cb(FF) {
      return (WF, SF) => Zh(SF, {
        kind: "elem",
        prop: String(SF.name),
        ...FF
      })
    }

    function Gh(FF) {
      const WF = "function" === typeof FF ? FF : FF?.constructor,
        SF = WF?.[Symbol.metadata];
      if (!SF) return [];
      const CF = [];
      let AF = SF;
      for (; AF;) Object.prototype.hasOwnProperty.call(AF, Oh) && CF.push(...AF[Oh]), AF = Object.getPrototypeOf(AF);
      return CF
    }

    function zb(FF) {
      const WF = FF?.constructor?.[xb];
      return WF || void 0
    }

    function Ih(FF) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(FF)
    }

    function fh(FF) {
      if (mb(FF)) return FF;
      const WF = (FF ?? "").trim();
      if (!WF) return {
        name: ""
      };
      const SF = WF.indexOf(":");
      if (-1 === SF) return {
        name: WF
      };
      if (-1 !== WF.indexOf(":", SF + 1)) return {
        name: WF
      };
      const CF = WF.slice(0, SF),
        AF = WF.slice(SF + 1);
      return Ih(CF) && Ih(AF) ? {
        ns: CF,
        name: AF
      } : {
        name: WF
      }
    }

    function yb(FF, WF) {
      return WF ? `${WF}:${FF}` : FF
    }
    const sh = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      nh = Object.freeze({
        number: sh
      });

    function Hh(FF) {
      const WF = FF?.eps ?? sh.eps;
      return {
        eps: WF,
        maxDecimalsCap: FF?.maxDecimalsCap ?? sh.maxDecimalsCap,
        trimTrailingZeros: FF?.trimTrailingZeros ?? sh.trimTrailingZeros,
        fixedDecimals: FF?.fixedDecimals,
        allowScientific: FF?.allowScientific ?? sh.allowScientific,
        snapNearZero: FF?.snapNearZero ?? sh.snapNearZero,
        zeroThreshold: FF?.zeroThreshold ?? WF,
        perAttributeEps: FF?.perAttributeEps
      }
    }

    function Kh(FF) {
      return {
        number: Hh(FF?.number)
      }
    }
    class wh {
      constructor(FF) {
        if (this.o = FF, this._o = FF.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(FF) {
        if (!Number.isFinite(FF)) throw new Error(`Cannot format non-finite number: ${FF}`);
        const WF = this._o,
          SF = this._clampInt(WF.maxDecimalsCap ?? 15, 0, 20),
          CF = WF.trimTrailingZeros ?? !0,
          AF = WF.snapNearZero ?? !0,
          uF = WF.zeroThreshold ?? WF.eps,
          hF = 1 / WF.eps;
        let bW, dF = Math.round(FF * hF) / hF;
        if (Object.is(dF, -0) && (dF = 0), AF && Math.abs(dF) <= uF && (dF = 0), bW = void 0 !== WF.fixedDecimals ? this._clampInt(WF.fixedDecimals, 0, SF) : this._clampInt(Math.ceil(-Math.log10(WF.eps)), 0, SF), WF.allowScientific, 0 === bW) return String(Math.trunc(dF));
        let PF = dF.toFixed(bW);
        if (CF && void 0 === WF.fixedDecimals && (PF = PF.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(PF)) throw new Error(`Scientific notation not allowed in XML output: ${PF}`);
        return PF
      }
      _clampInt(FF, WF, SF) {
        return Number.isFinite(FF) ? (FF = Math.trunc(FF), Math.max(WF, Math.min(SF, FF))) : WF
      }
    }

    function Xh(FF) {
      return FF instanceof Date
    }

    function Uh(FF) {
      return "string" === typeof FF
    }

    function Bh(FF) {
      return "string" === typeof FF || "number" === typeof FF || "boolean" === typeof FF || "bigint" === typeof FF || Xh(FF)
    }

    function jb(FF) {
      return "number" === typeof FF || "boolean" === typeof FF || "bigint" === typeof FF || Xh(FF)
    }
    class vb {
      constructor(FF, WF) {
        this._ns = new Map, this._prefixCount = 0, this._builder = FF, this._format = Kh(WF), this._nFmt = new wh(this._format)
      }
      withNamespace() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        for (const CF of WF) this._assignNamespace(CF);
        return this
      }
      serialize(FF, WF) {
        if (!(WF = WF ?? zb(FF))) throw new Error("can not find name for given object");
        const SF = fh(WF);
        SF.ns && this._assignNamespace(SF.ns, "xmlns"), this._gatherNamespaces(FF, new WeakSet);
        const CF = this._builder.ele(null, SF.name);
        for (const [AF, uF] of Array.from(this._ns.entries())) CF.att("xmlns", uF, AF);
        this._writeObjectContent(CF, FF, (new WeakSet).add(FF)), this._builder.end()
      }
      _writeObject(FF, WF, SF) {
        if (SF.has(WF)) return;
        if (SF.add(WF), Array.isArray(WF)) {
          for (const CF of WF) jb(CF) || (Uh(CF) ? this._builder.text(CF) : this._writeObject(FF, CF, SF));
          return
        }
        const CF = zb(WF);
        if (!CF) return;
        const AF = fh(CF),
          uF = this._getPrefix(AF),
          hF = yb(AF.name, uF);
        FF.ele(null, hF), this._writeObjectContent(FF, WF, SF), this._builder.end()
      }
      _getPrefix(FF) {
        if (FF.ns) {
          const WF = this._ns.get(FF.ns.toLowerCase());
          if ("xmlns" !== WF) return WF
        }
      }
      _writeObjectContent(FF, WF, SF) {
        const CF = Gh(WF) ?? [],
          AF = new Map;
        for (const hF of CF) {
          const FF = AF.get(hF.prop) ?? [];
          FF.push(hF), AF.set(hF.prop, FF)
        }
        const uF = Object.keys(WF).sort(((FF, WF) => {
          const SF = (AF.get(FF) ?? []).some((FF => "attr" === FF.kind));
          return SF === (AF.get(WF) ?? []).some((FF => "attr" === FF.kind)) ? 0 : SF ? -1 : 1
        }));
        for (const hF of uF) {
          const CF = WF[hF];
          if (null === CF || void 0 === CF) continue;
          const uF = AF.get(hF);
          if (uF) {
            if (uF.some((FF => !0 === FF.ignore || "none" === FF.kind))) continue;
            for (const WF of uF) {
              const SF = WF.name ?? WF.prop.toLowerCase();
              if (SF) switch (WF.kind) {
                case "attr": {
                  let AF = null;
                  if ("number" === typeof CF && this._nFmt && (AF = this._nFmt.toString(CF)), WF.formatter) {
                    AF = new WF.formatter(this._format).toString(CF)
                  }
                  if (AF = AF ?? CF.toString(), AF) {
                    const WF = fh(SF),
                      CF = this._getPrefix(WF),
                      uF = yb(WF.name, CF);
                    FF.att(null, uF, AF)
                  }
                  break
                }
              }
            }
          } else jb(CF) || (Uh(CF) ? this._builder.text(CF) : this._writeObject(FF, CF, SF))
        }
      }
      _gatherNamespaces(FF, WF) {
        if (WF.has(FF)) return;
        if (WF.add(FF), Array.isArray(FF)) {
          for (const SF of FF) Bh(SF) || this._gatherNamespaces(SF, WF);
          return
        }
        const SF = zb(FF);
        SF && this._assignNamespace(SF);
        const CF = Gh(FF) ?? [],
          AF = new Map;
        for (const hF of CF) {
          const FF = AF.get(hF.prop) ?? [];
          FF.push(hF), AF.set(hF.prop, FF)
        }
        const uF = [];
        for (const hF of Object.keys(FF)) {
          const WF = FF[hF];
          if (null === WF || void 0 === WF) continue;
          const SF = AF.get(hF);
          if (SF) {
            if (SF.some((FF => !0 === FF.ignore || "none" === FF.kind))) continue;
            for (const FF of SF) FF.name && this._assignNamespace(FF.name)
          }
          uF.push(WF)
        }
        for (const hF of uF) Bh(hF) || this._gatherNamespaces(hF, WF)
      }
      _assignNamespace(FF, WF) {
        const SF = fh(FF);
        if (SF?.ns) {
          const FF = SF.ns.toLowerCase();
          this._ns.get(FF) || this._ns.set(FF, WF ?? this._buildNsPrefix(FF))
        } else if ("xmlns" === WF) {
          const FF = SF.name.toLowerCase();
          this._ns.get(FF) || this._ns.set(FF, WF ?? this._buildNsPrefix(FF))
        }
      }
      _buildNsPrefix(FF) {
        let WF, SF = !1;
        do {
          WF = "ns" + this._prefixCount++;
          for (const FF of Array.from(this._ns.values()))
            if (FF === WF) {
              SF = !0;
              break
            }
        } while (SF);
        return WF
      }
    }
    class Jh {}
    var ph;
    Jh.OpenTag = "<", Jh.CloseTag = ">", Jh.Slash = "/", Jh.Question = "?", Jh.Quote = '"', Jh.Equal = "=", Jh.Space = " ", Jh.Semicolon = ":", Jh.Dec = "<?xml", Jh.Xml = "xml", Jh.Xmlns = "xmlns", Jh.Xsi = "xsi", Jh.VersionKeyword = "version", Jh.EncodingKeyword = "encoding", Jh.StandaloneKeyword = "standalone",
      function(FF) {
        FF[FF.Declaration = 0] = "Declaration", FF[FF.Tag = 1] = "Tag", FF[FF.Attribute = 2] = "Attribute", FF[FF.Text = 3] = "Text"
      }(ph || (ph = {}));
    class lh {
      constructor(FF) {
        this._ctxStack = [], this._d = 0, this._w = FF
      }
      dec(FF, WF, SF) {
        return this._w.write(Jh.Dec), this._writeAttStr(Jh.VersionKeyword, FF), WF && this._writeAttStr(Jh.EncodingKeyword, WF), void 0 !== SF && this._writeAttStr(Jh.StandaloneKeyword, SF ? "yes" : "no"), this._w.write(Jh.Question, Jh.CloseTag), this
      }
      att(FF, WF, SF) {
        const CF = this._peekContext();
        if (!CF) throw new Error("att() without open element");
        if (CF.closed) throw new Error(`att() after start tag closed for <${CF.name}>`);
        if (this._isXmlnsDecl(FF, WF)) {
          if (WF === Jh.Xmlns) CF.defaultNs = SF, this._registerNamespace(CF, "", SF), this._writeAttStr(Jh.Xmlns, SF);
          else if (FF) this._registerNamespace(CF, WF, SF), this._writeAttStr(`${FF}:${WF}`, SF);
          else {
            const FF = WF.slice(6);
            this._registerNamespace(CF, FF, SF), this._writeAttStr(WF, SF)
          }
          return CF.lastToken = ph.Attribute, this
        }
        let AF = WF;
        if (FF) {
          AF = `${this._ensurePrefixDeclared(CF,FF)}:${WF}`
        }
        return CF.lastToken = ph.Attribute, this._writeAttStr(AF, SF), this
      }
      ele(FF, WF) {
        const SF = this._peekContext();
        SF && this._closeOpenTagIfNeeded(SF);
        let CF = WF;
        if (FF) {
          CF = `${this._lookupPrefix(FF)??FF}:${WF}`
        }
        return this._pushContext(CF, ++this._d), this._w.write(Jh.OpenTag, CF), this
      }
      text(FF) {
        const WF = this._peekContext();
        if (!WF) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(WF), WF.lastToken = ph.Text, this._w.write(this._escText(FF)), this
      }
      end() {
        const FF = this._popContext();
        return FF && (this._d--, FF.closed ? this._w.write(Jh.OpenTag, Jh.Slash, FF.name, Jh.CloseTag) : this._w.write(Jh.Slash, Jh.CloseTag)), this
      }
      _pushContext(FF, WF) {
        const SF = new lh.Context(FF, WF);
        return this._ctxStack.push(SF), SF
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
      _writeAttStr(FF, WF) {
        this._w.write(Jh.Space, FF, Jh.Equal, Jh.Quote, this._escAttr(WF), Jh.Quote)
      }
      _lookupPrefix(FF) {
        let WF = this._ctxStack.length - 1;
        if (WF >= 0)
          do {
            const SF = this._ctxStack[WF--],
              CF = SF.ns2prefix?.get(FF);
            if (CF) return CF
          } while (WF >= 0)
      }
      _escText(FF) {
        return FF.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(FF) {
        return this._escText(FF).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(FF, WF) {
        if (FF) return FF === Jh.Xmlns;
        const SF = WF.length,
          CF = Jh.Xmlns.length;
        return SF >= CF && (WF.startsWith(Jh.Xmlns) && (WF.length == CF || WF[CF] == Jh.Semicolon))
      }
      _registerNamespace(FF, WF, SF) {
        if (WF === Jh.Xml || WF === Jh.Xmlns) throw new Error(`reserved prefix '${WF}'`);
        const CF = FF.prefix2ns.get(WF);
        if (CF && CF !== SF) throw new Error(`prefix '${WF}' already bound to a different namespace`);
        FF.ns2prefix.get(SF) || FF.ns2prefix.set(SF, WF), FF.prefix2ns.set(WF, SF)
      }
      _allocPrefix(FF) {
        let WF = 1;
        for (;;) {
          const SF = "ns" + WF++;
          if (!FF.prefix2ns.has(SF)) return SF
        }
      }
      _ensurePrefixDeclared(FF, WF) {
        const SF = this._lookupPrefix(WF);
        if (SF) return SF;
        if (FF.closed) throw new Error(`can not declare namespace after start tag closed for <${FF.name}>`);
        const CF = this._allocPrefix(FF);
        return this._writeAttStr(`${Jh.Xmlns}:${CF}`, WF), this._registerNamespace(FF, CF, WF), CF
      }
      _closeOpenTagIfNeeded(FF) {
        FF.closed || (this._w.write(Jh.CloseTag), FF.closed = !0)
      }
    }
    lh.Context = class {
      constructor(FF, WF) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = FF, this.depth = WF
      }
    };
    class Fb {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        if (0 === WF.length) return this;
        const CF = WF.join("");
        return this._chunks.push(CF), this.count += CF.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class Wb {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = FF, this._opts = WF, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        if (0 === WF.length) return this;
        const CF = WF.join("");
        if (0 === CF.length) return this;
        this._pending += CF, this._pendingChars += CF.length;
        const AF = this._opts.flushChars ?? 65536;
        return this._pendingChars >= AF && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const FF = this._encoder.encode(this._pending);
        return this._sink.push(FF), this.count += FF.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const Sb = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      Cb = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var Ab, ub;
    ! function(FF) {
      FF.micron = "micron", FF.millimeter = "millimeter", FF.centimeter = "centimeter", FF.inch = "inch", FF.foot = "foot", FF.meter = "meter"
    }(Ab || (Ab = {})),
    function(FF) {
      FF.model = "model", FF.solidsupport = "solidsupport", FF.support = "support", FF.surface = "surface", FF.other = "other"
    }(ub || (ub = {}));
    const hb = "http://schemas.openxmlformats.org/package/2006/content-types",
      bd = "http://schemas.openxmlformats.org/package/2006/relationships";
    var db;
    ! function(FF) {
      FF.Relationships = "application/vnd.openxmlformats-package.relationships+xml", FF.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", FF.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", FF.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", FF.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", FF.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", FF.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", FF.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", FF.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", FF.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", FF.Png = "image/png", FF.Jpeg = "image/jpeg", FF.Tiff = "image/tiff", FF.Xml = "application/xml"
    }(db || (db = {}));
    const Pb = "_rels/",
      Rb = "3D/",
      eb = "3dmodel.model",
      Eb = ".rels",
      Qb = "[Content_Types].xml";
    class rd {
      static IsKnown(FF) {
        return rd.Known.has(FF)
      }
      static IsThreeDimModel(FF) {
        return FF === rd.ThreeDimModel
      }
    }
    rd.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", rd.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", rd.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", rd.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", rd.Known = new Set([rd.ThreeDimModel, rd.Thumbnail, rd.PrintTicket, rd.MustPreserve]);
    let gd = (() => {
        let FF, WF, SF = [oh({
            ns: hb,
            name: "Types"
          })],
          CF = [];
        WF = class {
          constructor() {
            this.items = []
          }
        };
        return (0, LF.l)(WF, "ThreeMfContentTypes"), (() => {
          const AF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, LF.j)(null, FF = {
            value: WF
          }, SF, {
            kind: "class",
            name: WF.name,
            metadata: AF
          }, null, CF), WF = FF.value, AF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AF
          }), (0, LF.k)(WF, CF)
        })(), WF
      })(),
      td = (() => {
        let FF, WF, SF, CF, AF = [oh({
            ns: hb,
            name: "Default"
          })],
          uF = [],
          hF = [],
          bW = [],
          dF = [],
          PF = [];
        WF = class {
          constructor(FF, WF) {
            this.ext = (0, LF.k)(this, hF, void 0), this.ct = ((0, LF.k)(this, bW), (0, LF.k)(this, dF, void 0)), (0, LF.k)(this, PF), this.ext = FF, this.ct = WF
          }
        };
        return (0, LF.l)(WF, "ThreeMfContentType"), (() => {
          const RF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          SF = [Mh({
            name: {
              ns: hb,
              name: "Extension"
            }
          })], CF = [Mh({
            name: {
              ns: hb,
              name: "ContentType"
            }
          })], (0, LF.j)(null, null, SF, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: FF => "ext" in FF,
              get: FF => FF.ext,
              set: (FF, WF) => {
                FF.ext = WF
              }
            },
            metadata: RF
          }, hF, bW), (0, LF.j)(null, null, CF, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: FF => "ct" in FF,
              get: FF => FF.ct,
              set: (FF, WF) => {
                FF.ct = WF
              }
            },
            metadata: RF
          }, dF, PF), (0, LF.j)(null, FF = {
            value: WF
          }, AF, {
            kind: "class",
            name: WF.name,
            metadata: RF
          }, null, uF), WF = FF.value, RF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: RF
          }), (0, LF.k)(WF, uF)
        })(), WF
      })(),
      Tb = (() => {
        let FF, WF, SF = [oh({
            ns: bd,
            name: "Relationships"
          })],
          CF = [];
        WF = class {
          constructor() {
            this.items = []
          }
        };
        return (0, LF.l)(WF, "ThreeMfRelationships"), (() => {
          const AF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, LF.j)(null, FF = {
            value: WF
          }, SF, {
            kind: "class",
            name: WF.name,
            metadata: AF
          }, null, CF), WF = FF.value, AF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AF
          }), (0, LF.k)(WF, CF)
        })(), WF
      })(),
      ad = (() => {
        let FF, WF, SF, CF, AF, uF = [oh({
            ns: bd,
            name: "Relationship"
          })],
          hF = [],
          bW = [],
          dF = [],
          PF = [],
          RF = [],
          iW = [],
          eF = [];
        WF = class {
          constructor(FF, WF, SF) {
            this.id = (0, LF.k)(this, bW, void 0), this.type = ((0, LF.k)(this, dF), (0, LF.k)(this, PF, void 0)), this.target = ((0, LF.k)(this, RF), (0, LF.k)(this, iW, void 0)), (0, LF.k)(this, eF), this.id = FF, this.type = WF, this.target = SF
          }
        };
        return (0, LF.l)(WF, "ThreeMfRelationship"), (() => {
          const EF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          SF = [Mh({
            name: "Id"
          })], CF = [Mh({
            name: "Type"
          })], AF = [Mh({
            name: "Target"
          })], (0, LF.j)(null, null, SF, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: FF => "id" in FF,
              get: FF => FF.id,
              set: (FF, WF) => {
                FF.id = WF
              }
            },
            metadata: EF
          }, bW, dF), (0, LF.j)(null, null, CF, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: FF => "type" in FF,
              get: FF => FF.type,
              set: (FF, WF) => {
                FF.type = WF
              }
            },
            metadata: EF
          }, PF, RF), (0, LF.j)(null, null, AF, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: FF => "target" in FF,
              get: FF => FF.target,
              set: (FF, WF) => {
                FF.target = WF
              }
            },
            metadata: EF
          }, iW, eF), (0, LF.j)(null, FF = {
            value: WF
          }, uF, {
            kind: "class",
            name: WF.name,
            metadata: EF
          }, null, hF), WF = FF.value, EF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EF
          }), (0, LF.k)(WF, hF)
        })(), WF
      })();
    class kd {
      constructor(FF, WF, SF) {
        this.contentTypes = FF, this.relationships = WF, this.model = SF
      }
    }
    class qd {
      static Zero() {
        return new qd([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(FF) {
        this.values = FF
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class Vb {
      constructor(FF) {
        this.o = FF, this._f = new wh(FF)
      }
      toString(FF) {
        return FF.values.map((FF => this._f.toString(FF))).join(" ")
      }
    }
    let Nb = (() => {
        let FF, WF, SF, CF, AF, uF = [oh({
            ns: Sb,
            name: "model"
          })],
          hF = [],
          bW = [],
          dF = [],
          PF = [],
          RF = [],
          iW = [],
          eF = [];
        WF = class {
          constructor() {
            this.unit = (0, LF.k)(this, bW, Ab.millimeter), this.requiredextensions = ((0, LF.k)(this, dF), (0, LF.k)(this, PF, void 0)), this.recommendedextensions = ((0, LF.k)(this, RF), (0, LF.k)(this, iW, void 0)), this.metadata = (0, LF.k)(this, eF)
          }
        };
        return (0, LF.l)(WF, "ThreeMfModel"), (() => {
          const EF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          SF = [Mh({
            name: "unit"
          })], CF = [Mh({
            name: "requiredextensions"
          })], AF = [Mh({
            name: "recommendedextensions"
          })], (0, LF.j)(null, null, SF, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: FF => "unit" in FF,
              get: FF => FF.unit,
              set: (FF, WF) => {
                FF.unit = WF
              }
            },
            metadata: EF
          }, bW, dF), (0, LF.j)(null, null, CF, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: FF => "requiredextensions" in FF,
              get: FF => FF.requiredextensions,
              set: (FF, WF) => {
                FF.requiredextensions = WF
              }
            },
            metadata: EF
          }, PF, RF), (0, LF.j)(null, null, AF, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: FF => "recommendedextensions" in FF,
              get: FF => FF.recommendedextensions,
              set: (FF, WF) => {
                FF.recommendedextensions = WF
              }
            },
            metadata: EF
          }, iW, eF), (0, LF.j)(null, FF = {
            value: WF
          }, uF, {
            kind: "class",
            name: WF.name,
            metadata: EF
          }, null, hF), WF = FF.value, EF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EF
          })
        })(), WF.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, LF.k)(WF, hF), WF
      })(),
      Db = (() => {
        let FF, WF, SF, CF, AF, uF = [oh({
            ns: Sb,
            name: "meta"
          })],
          hF = [],
          bW = [],
          dF = [],
          PF = [],
          RF = [],
          iW = [],
          eF = [];
        WF = class {
          constructor(FF, WF, SF, CF) {
            this.name = (0, LF.k)(this, bW, void 0), this.preserve = ((0, LF.k)(this, dF), (0, LF.k)(this, PF, void 0)), this.type = ((0, LF.k)(this, RF), (0, LF.k)(this, iW, void 0)), this.value = (0, LF.k)(this, eF), this.name = FF, this.value = WF, this.preserve = SF, this.type = CF
          }
        };
        return (0, LF.l)(WF, "ThreeMfMeta"), (() => {
          const EF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          SF = [Mh({
            name: "name"
          })], CF = [Mh({
            name: "preserve"
          })], AF = [Mh({
            name: "type"
          })], (0, LF.j)(null, null, SF, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: FF => "name" in FF,
              get: FF => FF.name,
              set: (FF, WF) => {
                FF.name = WF
              }
            },
            metadata: EF
          }, bW, dF), (0, LF.j)(null, null, CF, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: FF => "preserve" in FF,
              get: FF => FF.preserve,
              set: (FF, WF) => {
                FF.preserve = WF
              }
            },
            metadata: EF
          }, PF, RF), (0, LF.j)(null, null, AF, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: FF => "type" in FF,
              get: FF => FF.type,
              set: (FF, WF) => {
                FF.type = WF
              }
            },
            metadata: EF
          }, iW, eF), (0, LF.j)(null, FF = {
            value: WF
          }, uF, {
            kind: "class",
            name: WF.name,
            metadata: EF
          }, null, hF), WF = FF.value, EF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EF
          }), (0, LF.k)(WF, hF)
        })(), WF
      })(),
      Lb = (() => {
        let FF, WF, SF = [oh({
            ns: Sb,
            name: "metadatagroup"
          })],
          CF = [];
        WF = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, LF.l)(WF, "ThreeMfMetadataGroup"), (() => {
          const AF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, LF.j)(null, FF = {
            value: WF
          }, SF, {
            kind: "class",
            name: WF.name,
            metadata: AF
          }, null, CF), WF = FF.value, AF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AF
          }), (0, LF.k)(WF, CF)
        })(), WF
      })(),
      md = (() => {
        let FF, WF, SF = [oh({
            ns: Sb,
            name: "resources"
          })],
          CF = [];
        WF = class {
          constructor() {
            this.object = []
          }
        };
        return (0, LF.l)(WF, "ThreeMfResources"), (() => {
          const AF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, LF.j)(null, FF = {
            value: WF
          }, SF, {
            kind: "class",
            name: WF.name,
            metadata: AF
          }, null, CF), WF = FF.value, AF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AF
          }), (0, LF.k)(WF, CF)
        })(), WF
      })(),
      Ob = (() => {
        let FF, WF, SF, CF, AF, uF, hF, bW, dF, PF = [oh({
            ns: Sb,
            name: "object"
          })],
          RF = [],
          iW = [],
          eF = [],
          EF = [],
          QF = [],
          rW = [],
          gW = [],
          tW = [],
          TF = [],
          aW = [],
          kW = [],
          qW = [],
          VF = [],
          NF = [],
          DF = [];
        WF = class {
          constructor(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ub.model;
            this.id = (0, LF.k)(this, iW, void 0), this.type = ((0, LF.k)(this, eF), (0, LF.k)(this, EF, void 0)), this.thumbnail = ((0, LF.k)(this, QF), (0, LF.k)(this, rW, void 0)), this.partnumber = ((0, LF.k)(this, gW), (0, LF.k)(this, tW, void 0)), this.name = ((0, LF.k)(this, TF), (0, LF.k)(this, aW, void 0)), this.pid = ((0, LF.k)(this, kW), (0, LF.k)(this, qW, void 0)), this.pindex = ((0, LF.k)(this, VF), (0, LF.k)(this, NF, void 0)), this.metadatagroup = (0, LF.k)(this, DF), this.id = FF, this.type = WF
          }
        };
        return (0, LF.l)(WF, "ThreeMfObject"), (() => {
          const mW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          SF = [Mh({
            name: "id"
          })], CF = [Mh({
            name: "type"
          })], AF = [Mh({
            name: "thumbnail"
          })], uF = [Mh({
            name: "partnumber"
          })], hF = [Mh({
            name: "name"
          })], bW = [Mh({
            name: "pid"
          })], dF = [Mh({
            name: "pindex"
          })], (0, LF.j)(null, null, SF, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: FF => "id" in FF,
              get: FF => FF.id,
              set: (FF, WF) => {
                FF.id = WF
              }
            },
            metadata: mW
          }, iW, eF), (0, LF.j)(null, null, CF, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: FF => "type" in FF,
              get: FF => FF.type,
              set: (FF, WF) => {
                FF.type = WF
              }
            },
            metadata: mW
          }, EF, QF), (0, LF.j)(null, null, AF, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: FF => "thumbnail" in FF,
              get: FF => FF.thumbnail,
              set: (FF, WF) => {
                FF.thumbnail = WF
              }
            },
            metadata: mW
          }, rW, gW), (0, LF.j)(null, null, uF, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: FF => "partnumber" in FF,
              get: FF => FF.partnumber,
              set: (FF, WF) => {
                FF.partnumber = WF
              }
            },
            metadata: mW
          }, tW, TF), (0, LF.j)(null, null, hF, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: FF => "name" in FF,
              get: FF => FF.name,
              set: (FF, WF) => {
                FF.name = WF
              }
            },
            metadata: mW
          }, aW, kW), (0, LF.j)(null, null, bW, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: FF => "pid" in FF,
              get: FF => FF.pid,
              set: (FF, WF) => {
                FF.pid = WF
              }
            },
            metadata: mW
          }, qW, VF), (0, LF.j)(null, null, dF, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: FF => "pindex" in FF,
              get: FF => FF.pindex,
              set: (FF, WF) => {
                FF.pindex = WF
              }
            },
            metadata: mW
          }, NF, DF), (0, LF.j)(null, FF = {
            value: WF
          }, PF, {
            kind: "class",
            name: WF.name,
            metadata: mW
          }, null, RF), WF = FF.value, mW && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: mW
          }), (0, LF.k)(WF, RF)
        })(), WF
      })(),
      xd = (() => {
        let FF, WF, SF = [oh({
            ns: Sb,
            name: "mesh"
          })],
          CF = [];
        WF = class {
          constructor(FF, WF) {
            this.vertices = FF ?? new Zb, this.triangles = WF ?? new Yb
          }
        };
        return (0, LF.l)(WF, "ThreeMfMesh"), (() => {
          const AF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, LF.j)(null, FF = {
            value: WF
          }, SF, {
            kind: "class",
            name: WF.name,
            metadata: AF
          }, null, CF), WF = FF.value, AF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AF
          }), (0, LF.k)(WF, CF)
        })(), WF
      })(),
      Zb = (() => {
        let FF, WF, SF = [oh({
            ns: Sb,
            name: "vertices"
          })],
          CF = [];
        WF = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, LF.l)(WF, "ThreeMfVertices"), (() => {
          const AF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, LF.j)(null, FF = {
            value: WF
          }, SF, {
            kind: "class",
            name: WF.name,
            metadata: AF
          }, null, CF), WF = FF.value, AF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AF
          }), (0, LF.k)(WF, CF)
        })(), WF
      })(),
      ob = (() => {
        let FF, WF, SF, CF, AF, uF = [oh({
            ns: Sb,
            name: "vertex"
          })],
          hF = [],
          bW = [],
          dF = [],
          PF = [],
          RF = [],
          iW = [],
          eF = [];
        WF = class {
          constructor() {
            let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, LF.k)(this, bW, void 0), this.y = ((0, LF.k)(this, dF), (0, LF.k)(this, PF, void 0)), this.z = ((0, LF.k)(this, RF), (0, LF.k)(this, iW, void 0)), (0, LF.k)(this, eF), this.x = FF, this.y = WF, this.z = SF
          }
        };
        return (0, LF.l)(WF, "ThreeMfVertex"), (() => {
          const EF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          SF = [Mh({
            name: "x"
          })], CF = [Mh({
            name: "y"
          })], AF = [Mh({
            name: "z"
          })], (0, LF.j)(null, null, SF, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: FF => "x" in FF,
              get: FF => FF.x,
              set: (FF, WF) => {
                FF.x = WF
              }
            },
            metadata: EF
          }, bW, dF), (0, LF.j)(null, null, CF, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: FF => "y" in FF,
              get: FF => FF.y,
              set: (FF, WF) => {
                FF.y = WF
              }
            },
            metadata: EF
          }, PF, RF), (0, LF.j)(null, null, AF, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: FF => "z" in FF,
              get: FF => FF.z,
              set: (FF, WF) => {
                FF.z = WF
              }
            },
            metadata: EF
          }, iW, eF), (0, LF.j)(null, FF = {
            value: WF
          }, uF, {
            kind: "class",
            name: WF.name,
            metadata: EF
          }, null, hF), WF = FF.value, EF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EF
          }), (0, LF.k)(WF, hF)
        })(), WF
      })(),
      Yb = (() => {
        let FF, WF, SF = [oh({
            ns: Sb,
            name: "triangles"
          })],
          CF = [];
        WF = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, LF.l)(WF, "ThreeMfTriangles"), (() => {
          const AF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, LF.j)(null, FF = {
            value: WF
          }, SF, {
            kind: "class",
            name: WF.name,
            metadata: AF
          }, null, CF), WF = FF.value, AF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AF
          }), (0, LF.k)(WF, CF)
        })(), WF
      })(),
      Mb = (() => {
        let FF, WF, SF, CF, AF, uF, hF, bW, dF, PF = [oh({
            ns: Sb,
            name: "triangle"
          })],
          RF = [],
          iW = [],
          eF = [],
          EF = [],
          QF = [],
          rW = [],
          gW = [],
          tW = [],
          TF = [],
          aW = [],
          kW = [],
          qW = [],
          VF = [],
          NF = [],
          DF = [];
        WF = class {
          constructor(FF, WF, SF) {
            this.v1 = (0, LF.k)(this, iW, void 0), this.v2 = ((0, LF.k)(this, eF), (0, LF.k)(this, EF, void 0)), this.v3 = ((0, LF.k)(this, QF), (0, LF.k)(this, rW, void 0)), this.p1 = ((0, LF.k)(this, gW), (0, LF.k)(this, tW, void 0)), this.p2 = ((0, LF.k)(this, TF), (0, LF.k)(this, aW, void 0)), this.p3 = ((0, LF.k)(this, kW), (0, LF.k)(this, qW, void 0)), this.pid = ((0, LF.k)(this, VF), (0, LF.k)(this, NF, void 0)), (0, LF.k)(this, DF), this.v1 = FF, this.v2 = WF, this.v3 = SF
          }
        };
        return (0, LF.l)(WF, "ThreeMfTriangle"), (() => {
          const mW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          SF = [Mh({
            name: "v1"
          })], CF = [Mh({
            name: "v2"
          })], AF = [Mh({
            name: "v3"
          })], uF = [Mh({
            name: "p1"
          })], hF = [Mh({
            name: "p2"
          })], bW = [Mh({
            name: "p3"
          })], dF = [Mh({
            name: "pid"
          })], (0, LF.j)(null, null, SF, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: FF => "v1" in FF,
              get: FF => FF.v1,
              set: (FF, WF) => {
                FF.v1 = WF
              }
            },
            metadata: mW
          }, iW, eF), (0, LF.j)(null, null, CF, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: FF => "v2" in FF,
              get: FF => FF.v2,
              set: (FF, WF) => {
                FF.v2 = WF
              }
            },
            metadata: mW
          }, EF, QF), (0, LF.j)(null, null, AF, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: FF => "v3" in FF,
              get: FF => FF.v3,
              set: (FF, WF) => {
                FF.v3 = WF
              }
            },
            metadata: mW
          }, rW, gW), (0, LF.j)(null, null, uF, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: FF => "p1" in FF,
              get: FF => FF.p1,
              set: (FF, WF) => {
                FF.p1 = WF
              }
            },
            metadata: mW
          }, tW, TF), (0, LF.j)(null, null, hF, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: FF => "p2" in FF,
              get: FF => FF.p2,
              set: (FF, WF) => {
                FF.p2 = WF
              }
            },
            metadata: mW
          }, aW, kW), (0, LF.j)(null, null, bW, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: FF => "p3" in FF,
              get: FF => FF.p3,
              set: (FF, WF) => {
                FF.p3 = WF
              }
            },
            metadata: mW
          }, qW, VF), (0, LF.j)(null, null, dF, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: FF => "pid" in FF,
              get: FF => FF.pid,
              set: (FF, WF) => {
                FF.pid = WF
              }
            },
            metadata: mW
          }, NF, DF), (0, LF.j)(null, FF = {
            value: WF
          }, PF, {
            kind: "class",
            name: WF.name,
            metadata: mW
          }, null, RF), WF = FF.value, mW && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: mW
          }), (0, LF.k)(WF, RF)
        })(), WF
      })(),
      cd = (() => {
        let FF, WF, SF = [oh({
            ns: Sb,
            name: "components"
          })],
          CF = [];
        WF = class {
          constructor() {
            this.component = []
          }
        };
        return (0, LF.l)(WF, "ThreeMfComponents"), (() => {
          const AF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, LF.j)(null, FF = {
            value: WF
          }, SF, {
            kind: "class",
            name: WF.name,
            metadata: AF
          }, null, CF), WF = FF.value, AF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AF
          }), (0, LF.k)(WF, CF)
        })(), WF
      })(),
      Gb = (() => {
        let FF, WF, SF, CF, AF = [oh({
            ns: Sb,
            name: "component"
          })],
          uF = [],
          hF = [],
          bW = [],
          dF = [],
          PF = [];
        WF = class {
          constructor(FF, WF) {
            this.objectid = (0, LF.k)(this, hF, void 0), this.transform = ((0, LF.k)(this, bW), (0, LF.k)(this, dF, void 0)), (0, LF.k)(this, PF), this.objectid = FF, this.transform = WF
          }
        };
        return (0, LF.l)(WF, "ThreeMfComponent"), (() => {
          const RF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          SF = [Mh({
            name: "objectid"
          })], CF = [Mh({
            name: "transform",
            formatter: Vb
          })], (0, LF.j)(null, null, SF, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: FF => "objectid" in FF,
              get: FF => FF.objectid,
              set: (FF, WF) => {
                FF.objectid = WF
              }
            },
            metadata: RF
          }, hF, bW), (0, LF.j)(null, null, CF, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: FF => "transform" in FF,
              get: FF => FF.transform,
              set: (FF, WF) => {
                FF.transform = WF
              }
            },
            metadata: RF
          }, dF, PF), (0, LF.j)(null, FF = {
            value: WF
          }, AF, {
            kind: "class",
            name: WF.name,
            metadata: RF
          }, null, uF), WF = FF.value, RF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: RF
          }), (0, LF.k)(WF, uF)
        })(), WF
      })(),
      zd = (() => {
        let FF, WF, SF, CF = [oh({
            ns: Sb,
            name: "basematerials"
          })],
          AF = [],
          uF = [],
          hF = [];
        WF = class {
          constructor(FF) {
            this.id = (0, LF.k)(this, uF, void 0), this.base = ((0, LF.k)(this, hF), []), this.id = FF
          }
        };
        return (0, LF.l)(WF, "ThreeMfBaseMaterials"), (() => {
          const bW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          SF = [Mh({
            name: "id"
          })], (0, LF.j)(null, null, SF, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: FF => "id" in FF,
              get: FF => FF.id,
              set: (FF, WF) => {
                FF.id = WF
              }
            },
            metadata: bW
          }, uF, hF), (0, LF.j)(null, FF = {
            value: WF
          }, CF, {
            kind: "class",
            name: WF.name,
            metadata: bW
          }, null, AF), WF = FF.value, bW && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bW
          }), (0, LF.k)(WF, AF)
        })(), WF
      })(),
      Ib = (() => {
        let FF, WF, SF, CF, AF = [oh({
            ns: Sb,
            name: "base"
          })],
          uF = [],
          hF = [],
          bW = [],
          dF = [],
          PF = [];
        WF = class {
          constructor(FF, WF) {
            this.name = (0, LF.k)(this, hF, void 0), this.displaycolor = ((0, LF.k)(this, bW), (0, LF.k)(this, dF, void 0)), (0, LF.k)(this, PF), this.name = FF, this.displaycolor = WF
          }
        };
        return (0, LF.l)(WF, "ThreeMfBase"), (() => {
          const RF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          SF = [Mh({
            name: "name"
          })], CF = [Mh({
            name: "displaycolor"
          })], (0, LF.j)(null, null, SF, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: FF => "name" in FF,
              get: FF => FF.name,
              set: (FF, WF) => {
                FF.name = WF
              }
            },
            metadata: RF
          }, hF, bW), (0, LF.j)(null, null, CF, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: FF => "displaycolor" in FF,
              get: FF => FF.displaycolor,
              set: (FF, WF) => {
                FF.displaycolor = WF
              }
            },
            metadata: RF
          }, dF, PF), (0, LF.j)(null, FF = {
            value: WF
          }, AF, {
            kind: "class",
            name: WF.name,
            metadata: RF
          }, null, uF), WF = FF.value, RF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: RF
          }), (0, LF.k)(WF, uF)
        })(), WF
      })(),
      fb = (() => {
        let FF, WF, SF = [oh({
            ns: Sb,
            name: "build"
          })],
          CF = [];
        WF = class {
          constructor() {
            this.item = []
          }
        };
        return (0, LF.l)(WF, "ThreeMfBuild"), (() => {
          const AF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, LF.j)(null, FF = {
            value: WF
          }, SF, {
            kind: "class",
            name: WF.name,
            metadata: AF
          }, null, CF), WF = FF.value, AF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AF
          }), (0, LF.k)(WF, CF)
        })(), WF
      })(),
      yd = (() => {
        let FF, WF, SF, CF, AF, uF = [oh({
            ns: Sb,
            name: "item"
          })],
          hF = [],
          bW = [],
          dF = [],
          PF = [],
          RF = [],
          iW = [],
          eF = [];
        WF = class {
          constructor(FF, WF, SF) {
            this.objectid = (0, LF.k)(this, bW, void 0), this.transform = ((0, LF.k)(this, dF), (0, LF.k)(this, PF, void 0)), this.partnumber = ((0, LF.k)(this, RF), (0, LF.k)(this, iW, void 0)), this.metadatagroup = (0, LF.k)(this, eF), this.objectid = FF, this.transform = WF, this.partnumber = SF
          }
        };
        return (0, LF.l)(WF, "ThreeMfItem"), (() => {
          const EF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          SF = [Mh({
            name: "objectid"
          })], CF = [Mh({
            name: "transform",
            formatter: Vb
          })], AF = [Mh({
            name: "partnumber"
          })], (0, LF.j)(null, null, SF, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: FF => "objectid" in FF,
              get: FF => FF.objectid,
              set: (FF, WF) => {
                FF.objectid = WF
              }
            },
            metadata: EF
          }, bW, dF), (0, LF.j)(null, null, CF, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: FF => "transform" in FF,
              get: FF => FF.transform,
              set: (FF, WF) => {
                FF.transform = WF
              }
            },
            metadata: EF
          }, PF, RF), (0, LF.j)(null, null, AF, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: FF => "partnumber" in FF,
              get: FF => FF.partnumber,
              set: (FF, WF) => {
                FF.partnumber = WF
              }
            },
            metadata: EF
          }, iW, eF), (0, LF.j)(null, FF = {
            value: WF
          }, uF, {
            kind: "class",
            name: WF.name,
            metadata: EF
          }, null, hF), WF = FF.value, EF && Object.defineProperty(WF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EF
          }), (0, LF.k)(WF, hF)
        })(), WF
      })();
    class sb {
      constructor(FF, WF) {
        this._object = new Ob(FF, WF)
      }
      withName(FF) {
        return this._object.name = FF, this
      }
      withThumbnail(FF) {
        return this._object.thumbnail = FF, this
      }
      withProperty(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = FF, this._object.id = WF, this
      }
      build() {
        return this._object
      }
      reset(FF, WF) {
        this._object = new Ob(FF, WF)
      }
    }
    class nb extends sb {
      constructor(FF) {
        super(FF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ub.model), this._object.content = new cd
      }
      withComponent(FF, WF) {
        return this._object.content.component.push(new Gb(FF, WF)), this
      }
    }
    class Hb extends sb {
      constructor(FF) {
        super(FF, ub.model)
      }
      withPostProcessHandlers(FF, WF) {
        return this._vh = FF, this._th = WF, this
      }
      withData(FF) {
        return this._object.content = this._buildMesh(FF), this
      }
      withMaterial(FF, WF) {
        return this._object.pid = FF, this._object.pindex = WF, this
      }
      _buildMesh(FF) {
        const WF = this._buildVertices(FF.positions),
          SF = this._buildTriangle(FF.indices);
        return new xd(WF, SF)
      }
      _buildVertices(FF) {
        const WF = new Zb;
        if (FF)
          for (let SF = 0; SF < FF.length;) {
            const CF = FF[SF++],
              AF = FF[SF++],
              uF = FF[SF++];
            let hF = new ob(CF, AF, uF);
            this._vh && (hF = this._vh(hF)), WF.vertex.push(hF)
          }
        return WF
      }
      _buildTriangle(FF) {
        const WF = new Yb;
        if (FF)
          for (let SF = 0; SF < FF.length;) {
            const CF = FF[SF++],
              AF = FF[SF++],
              uF = FF[SF++];
            let hF = new Mb(CF, AF, uF);
            this._th && (hF = this._th(hF)), WF.triangle.push(hF)
          }
        return WF
      }
    }
    class Kb {
      constructor(FF) {
        this._m = new zd(FF)
      }
      withColor(FF, WF) {
        this._m.base = this._m.base ?? [];
        let SF = this._m.base.find((WF => WF.name.toLowerCase() === FF.toLowerCase()));
        return SF ? (SF.displaycolor = this._rgbaToHex(WF), this) : (SF = new Ib(FF, this._rgbaToHex(WF)), this._m.base.push(SF), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(FF) {
        const WF = FF => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(FF, 1 / 2.2)))),
          SF = WF(FF.r).toString(16).padStart(2, "0").toUpperCase(),
          CF = WF(FF.g).toString(16).padStart(2, "0").toUpperCase(),
          AF = WF(FF.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof FF.a) {
          return `#${SF}${CF}${AF}${Math.round(Math.min(255,Math.max(0,255*FF.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${SF}${CF}${AF}`
      }
    }
    class wb {
      constructor() {
        this._model = new Nb, this._objects = new Map
      }
      withMetaData(FF, WF, SF, CF) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Db(FF, WF, SF, CF)), this
      }
      withMaterial(FF) {
        return FF instanceof Kb && (FF = FF.build()), FF && (this._model.resources = this._model.resources ?? new md, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(FF)), this
      }
      withMesh(FF) {
        return FF instanceof Hb && (FF = FF.build()), this._model.resources = this._model.resources ?? new md, this._model.resources.object.push(FF), this
      }
      withComponents(FF) {
        return FF instanceof nb && (FF = FF.build()), this._model.resources = this._model.resources ?? new md, this._model.resources.object.push(FF), this
      }
      withBuild(FF, WF, SF) {
        return this._model.build = this._model.build ?? new fb, this._model.build.item?.push(new yd(FF, WF, SF)), this
      }
      withUnit(FF) {
        return this._model.unit = FF, this
      }
      reset() {
        return this._model = new Nb, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    wb.KnownMetaSet = new Set(Nb.KnownMeta.map((FF => FF.toLowerCase())));
    class Xb {
      withContentType(FF) {
        this._cts || (this._cts = new gd);
        const WF = this._cts.items;
        return WF.some((WF => WF.ext === FF.ext && WF.ct === FF.ct)) || WF.push(FF), this
      }
      withRelationship(FF) {
        this._rs || (this._rs = new Tb);
        const WF = this._rs.items;
        return WF.some((WF => WF.id === FF.id)) || WF.push(FF), this.withContentType(new td("rels", db.Relationships)), this
      }
      withModel(FF) {
        return FF instanceof wb && (FF = FF.build()), this._m = FF, this.withContentType(new td("model", db.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const FF = `${Rb}${eb}`;
        if (!this._rs) {
          const WF = `/${FF}`;
          this.withRelationship(new ad("rel0", rd.ThreeDimModel, WF))
        }
        return new kd(this._cts, this._rs, this._m)
      }
    }
    class Ub {
      constructor(FF) {
        this._o = FF
      }
      get options() {
        return this._o
      }
      async serializeAsync(FF) {
        const WF = await this.ensureZipLibReadyAsync();
        if (!WF) return;
        const SF = WF.Zip,
          CF = WF.ZipDeflate;
        if (!SF || !CF) throw new Error("fflate Zip / ZipDeflate not available");
        const AF = function(FF, WF, SF) {
          const AF = new CF(WF, {
            level: 6
          });
          FF.add(AF);
          const uF = function(FF) {
              return {
                push: (WF, SF) => FF.push(WF, SF)
              }
            }(AF),
            hF = new Wb(uF),
            bW = new lh(hF).dec("1.0", "UTF-8");
          new vb(bW).serialize(SF), hF.finish()
        };
        for (var uF = arguments.length, hF = new Array(uF > 1 ? uF - 1 : 0), bW = 1; bW < uF; bW++) hF[bW - 1] = arguments[bW];
        const dF = this.toDocument(...hF);
        if (!dF) return;
        const PF = new SF(FF);
        AF(PF, Qb, dF.contentTypes), AF(PF, `${Pb}${Eb}`, dF.relationships), AF(PF, `${Rb}${eb}`, dF.model), PF.end()
      }
      toDocument() {
        const FF = (new wb).withUnit(this._o?.unit ?? Ab.millimeter);
        if (this.options.metadata)
          for (const AF in this.options.metadata) FF.withMetaData(AF, this.options.metadata[AF]);
        for (var WF = arguments.length, SF = new Array(WF), CF = 0; CF < WF; CF++) SF[CF] = arguments[CF];
        return (new Xb).withModel(this.toModel(FF, ...SF)).build()
      }
    }
    class Bb {
      static async SerializeToMemoryAsync(FF) {
        const WF = new Array;
        let SF = 0;
        for (var CF = arguments.length, AF = new Array(CF > 1 ? CF - 1 : 0), uF = 1; uF < CF; uF++) AF[uF - 1] = arguments[uF];
        if (await FF.serializeAsync((function(FF, CF, AF) {
            WF.push(CF), SF += CF.length
          }), ...AF), !SF) return;
        const hF = new Uint8Array(SF);
        let bW = 0;
        for (const dF of WF) hF.set(dF, bW), bW += dF.length;
        return hF
      }
    }
    class jd {}
    jd.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class vd {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = FF, this._to = WF, this._step = SF, this._i = FF
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const FF = this._i;
        return this._i += this._step, FF
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class Jb extends Ub {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...Jb.DefaultOptions,
          ...FF
        })
      }
      toModel(FF) {
        for (var WF = arguments.length, SF = new Array(WF > 1 ? WF - 1 : 0), CF = 1; CF < WF; CF++) SF[CF - 1] = arguments[CF];
        SF = SF.filter((FF => FF instanceof PC.c || FF instanceof EF.d));
        const AF = new vd,
          uF = FF,
          hF = new Map,
          bW = this.options.exportInstances ? [] : null;
        for (let dF = 0; dF < SF.length; dF++) {
          const FF = SF[dF];
          if (FF instanceof EF.d) {
            bW?.push(FF);
            continue
          }
          const WF = FF.name || `mesh${dF}`,
            CF = FF.getWorldMatrix(),
            PF = this._handleBabylonTo3mfMatrixTransformToRef(CF, qd.Zero()),
            RF = FF.Om;
          if (void 0 === RF) continue;
          const iW = 1 == RF.length;
          for (let SF = 0; SF < RF.length; SF++) {
            const CF = RF[SF],
              bW = this._extractSubMesh(FF, CF);
            if (bW) {
              const FF = iW ? `${WF}` : `${WF}_${SF}`,
                dF = new Hb(AF.next()).withData(bW).withName(FF).build();
              uF.withMesh(dF), uF.withBuild(dF.id, PF), hF.set(CF, dF)
            }
          }
        }
        if (bW && bW.length) {
          const FF = this._groupBy(bW, (FF => FF.iiF));
          for (const [WF, SF] of Array.from(FF.entries()))
            if (SF && SF.length)
              for (let FF = 0; FF < SF.length; FF++) {
                const CF = SF[FF].getWorldMatrix(),
                  AF = WF.Om;
                for (let FF = 0; FF < AF.length; FF++) {
                  const WF = AF[FF],
                    SF = hF.get(WF);
                  SF && uF.withBuild(SF.id, this._handleBabylonTo3mfMatrixTransformToRef(CF, qd.Zero()))
                }
              }
        }
        return uF.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const FF = globalThis;
          return FF.fflate || await AF.Tools.LoadScriptAsync(jd.FFLATEUrl), FF.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(FF, WF) {
        const SF = FF.yEF();
        if (!SF) return;
        const CF = FF.getVerticesData(Jb._PositionKind);
        if (!CF) return;
        if (0 == WF.indexStart && WF.indexCount == SF.length) return {
          positions: CF,
          indices: SF
        };
        const AF = WF.indexStart,
          uF = new Map,
          hF = [],
          bW = new Uint32Array(WF.indexCount);
        for (let dF = 0; dF < WF.indexCount; dF++) {
          const FF = SF[AF + dF];
          let WF = uF.get(FF);
          if (void 0 === WF) {
            WF = uF.size, uF.set(FF, WF);
            const SF = 3 * FF;
            hF.push(CF[SF], CF[SF + 1], CF[SF + 2])
          }
          bW[dF] = WF
        }
        return {
          positions: new Float32Array(hF),
          indices: bW
        }
      }
      _groupBy(FF, WF) {
        const SF = new Map;
        for (const CF of FF) {
          const FF = WF(CF),
            AF = SF.get(FF);
          AF ? AF.push(CF) : SF.set(FF, [CF])
        }
        return SF
      }
      _handleBabylonTo3mfMatrixTransformToRef(FF, WF) {
        const SF = FF.multiplyToRef(Jb._R_BJS_TO_3MF, fF.b.Zero()).m;
        return WF.values = [SF[0], SF[1], SF[2], SF[4], SF[5], SF[6], SF[8], SF[9], SF[10], SF[12], SF[13], SF[14]], WF
      }
    }
    Jb.DefaultOptions = {
      unit: Ab.meter,
      exportInstances: !1
    }, Jb._PositionKind = "position", Jb._R_BJS_TO_3MF = fF.b.RotationX(Math.PI / 2).multiply(fF.b.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);