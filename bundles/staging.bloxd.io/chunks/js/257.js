export const id = 257;
export const ids = [257, 262];
export const modules = {
  44978: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB
    });
    var YB = GB(44909),
      DB = GB(40992);
    let QB = !1;

    function oB() {
      QB || (QB = !0, DB.d.prototype._sphericalPolynomialTargetSize = 0, DB.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(DB.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = YB.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((BB => {
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
  37885: (BB, OB, GB) => {
    GB.d(OB, {
      Color3: () => YB.c,
      e: () => YB.g
    });
    var YB = GB(37894);
    (0, YB.k)()
  },
  38424: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    var YB = GB(38432);
    class DB {
      static GetPlanes(BB) {
        const OB = [];
        for (let GB = 0; GB < 6; GB++) OB.push(new YB.c(0, 0, 0, 0));
        return DB.GetPlanesToRef(BB, OB), OB
      }
      static GetNearPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] + GB[2], OB.normal.y = GB[7] + GB[6], OB.normal.z = GB[11] + GB[10], OB.d = GB[15] + GB[14], OB.normalize()
      }
      static GetFarPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] - GB[2], OB.normal.y = GB[7] - GB[6], OB.normal.z = GB[11] - GB[10], OB.d = GB[15] - GB[14], OB.normalize()
      }
      static GetLeftPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] + GB[0], OB.normal.y = GB[7] + GB[4], OB.normal.z = GB[11] + GB[8], OB.d = GB[15] + GB[12], OB.normalize()
      }
      static GetRightPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] - GB[0], OB.normal.y = GB[7] - GB[4], OB.normal.z = GB[11] - GB[8], OB.d = GB[15] - GB[12], OB.normalize()
      }
      static GetTopPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] - GB[1], OB.normal.y = GB[7] - GB[5], OB.normal.z = GB[11] - GB[9], OB.d = GB[15] - GB[13], OB.normalize()
      }
      static GetBottomPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] + GB[1], OB.normal.y = GB[7] + GB[5], OB.normal.z = GB[11] + GB[9], OB.d = GB[15] + GB[13], OB.normalize()
      }
      static GetPlanesToRef(BB, OB) {
        DB.GetNearPlaneToRef(BB, OB[0]), DB.GetFarPlaneToRef(BB, OB[1]), DB.GetLeftPlaneToRef(BB, OB[2]), DB.GetRightPlaneToRef(BB, OB[3]), DB.GetTopPlaneToRef(BB, OB[4]), DB.GetBottomPlaneToRef(BB, OB[5])
      }
      static IsPointInFrustum(BB, OB) {
        for (let GB = 0; GB < 6; GB++)
          if (OB[GB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  38432: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB
    });
    var YB = GB(37778);
    class DB {
      constructor(BB, OB, GB, DB) {
        this.normal = new YB.r(BB, OB, GB), this.d = DB
      }
      dDB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new DB(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let OB = 0;
        return 0 !== BB && (OB = 1 / BB), this.normal.x *= OB, this.normal.y *= OB, this.normal.z *= OB, this.d *= OB, this
      }
      transform(BB) {
        const OB = DB._TmpMatrix;
        BB.invertToRef(OB);
        const GB = OB.m,
          YB = this.normal.x,
          QB = this.normal.y,
          oB = this.normal.z,
          jB = this.d,
          yB = YB * GB[0] + QB * GB[1] + oB * GB[2] + jB * GB[3],
          JB = YB * GB[4] + QB * GB[5] + oB * GB[6] + jB * GB[7],
          MB = YB * GB[8] + QB * GB[9] + oB * GB[10] + jB * GB[11],
          PB = YB * GB[12] + QB * GB[13] + oB * GB[14] + jB * GB[15];
        return new DB(yB, JB, MB, PB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, OB, GB) {
        const YB = OB.x - BB.x,
          DB = OB.y - BB.y,
          QB = OB.z - BB.z,
          oB = GB.x - BB.x,
          jB = GB.y - BB.y,
          yB = GB.z - BB.z,
          JB = DB * yB - QB * jB,
          MB = QB * oB - YB * yB,
          PB = YB * jB - DB * oB,
          zB = Math.sqrt(JB * JB + MB * MB + PB * PB);
        let lB;
        return lB = 0 !== zB ? 1 / zB : 0, this.normal.x = JB * lB, this.normal.y = MB * lB, this.normal.z = PB * lB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, OB) {
        return YB.r.Dot(this.normal, BB) <= OB
      }
      signedDistanceTo(BB) {
        return YB.r.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new DB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, OB, GB) {
        const YB = new DB(0, 0, 0, 0);
        return YB.copyFromPoints(BB, OB, GB), YB
      }
      static FromPositionAndNormal(BB, OB) {
        const GB = new DB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, OB, GB)
      }
      static FromPositionAndNormalToRef(BB, OB, GB) {
        return GB.normal.IU(OB), GB.normal.normalize(), GB.d = -BB.dot(GB.normal), GB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, OB, GB) {
        const DB = -(OB.x * BB.x + OB.y * BB.y + OB.z * BB.z);
        return YB.r.Dot(GB, OB) + DB
      }
    }
    DB._TmpMatrix = YB.d.Identity()
  },
  37771: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      Matrix: () => YB.d,
      Quaternion: () => YB.f,
      RegisterMathVector: () => YB.j,
      TmpVectors: () => YB.k,
      Vector2: () => YB.o,
      Xp: () => YB.r,
      Vector4: () => YB.t
    });
    var YB = GB(37778);
    (0, YB.j)()
  },
  38769: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {
      constructor(BB, OB, GB, YB) {
        this.x = BB, this.y = OB, this.width = GB, this.height = YB
      }
      toGlobal(BB, OB) {
        return new YB(this.x * BB, this.y * OB, this.width * BB, this.height * OB)
      }
      toGlobalToRef(BB, OB, GB) {
        return GB.x = this.x * BB, GB.y = this.y * OB, GB.width = this.width * BB, GB.height = this.height * OB, this
      }
      clone() {
        return new YB(this.x, this.y, this.width, this.height)
      }
    }
  },
  44909: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => JB
    });
    var YB = GB(37778),
      DB = GB(37807),
      QB = GB(40985),
      oB = GB(37782),
      jB = GB(37894);
    class yB {
      constructor(BB, OB, GB, YB) {
        this.name = BB, this.worldAxisForNormal = OB, this.worldAxisForFileX = GB, this.worldAxisForFileY = YB
      }
    }
    class JB {
      static _NearestPow2Floor(BB) {
        return BB <= 1 ? 1 : 1 << Math.floor(Math.log2(BB))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(BB) {
        if (!BB.isCube) return null;
        BB.JF()?.Lp().flushFramebuffer();
        const OB = BB.getSize().width,
          GB = BB._sphericalPolynomialTargetSize,
          YB = GB > 0 ? this._NearestPow2Floor(GB) : 0,
          DB = !BB.noMipmap && !0 === BB._texture?.generateMipMaps,
          QB = YB > 0 && YB < OB && DB,
          oB = QB ? Math.max(0, Math.round(Math.log2(OB / YB))) : 0,
          jB = QB ? Math.max(1, Math.floor(OB / Math.pow(2, oB))) : OB,
          yB = BB.readPixels(0, oB, void 0, !1),
          JB = BB.readPixels(1, oB, void 0, !1);
        let MB, PB;
        BB.isRenderTarget ? (MB = BB.readPixels(3, oB, void 0, !1), PB = BB.readPixels(2, oB, void 0, !1)) : (MB = BB.readPixels(2, oB, void 0, !1), PB = BB.readPixels(3, oB, void 0, !1));
        const zB = BB.readPixels(4, oB, void 0, !1),
          lB = BB.readPixels(5, oB, void 0, !1),
          pB = BB.gammaSpace,
          qB = YB > 0 && YB < OB && !QB;
        return new Promise((BB => {
          Promise.all([JB, yB, MB, PB, zB, lB]).then((GB => {
            let [DB, QB, oB, yB, JB, MB] = GB, PB = jB;
            if (qB) {
              const BB = 4;
              DB = this._DownsampleFace(DB, OB, YB, BB), QB = this._DownsampleFace(QB, OB, YB, BB), oB = this._DownsampleFace(oB, OB, YB, BB), yB = this._DownsampleFace(yB, OB, YB, BB), JB = this._DownsampleFace(JB, OB, YB, BB), MB = this._DownsampleFace(MB, OB, YB, BB), PB = YB
            }
            const zB = {
              size: PB,
              right: QB,
              left: DB,
              up: oB,
              down: yB,
              front: JB,
              back: MB,
              format: 5,
              type: DB instanceof Float32Array ? 1 : 0,
              gammaSpace: pB
            };
            BB(this.ConvertCubeMapToSphericalPolynomial(zB))
          }))
        }))
      }
      static _AreaElement(BB, OB) {
        return Math.atan2(BB * OB, Math.sqrt(BB * BB + OB * OB + 1))
      }
      static _DownsampleFace(BB, OB, GB, YB) {
        const DB = BB instanceof Float32Array ? BB : Float32Array.from(BB),
          QB = GB * GB * YB,
          oB = new Float32Array(QB),
          jB = OB / GB,
          yB = 1 / (jB * jB);
        for (let MB = 0; MB < GB; MB++) {
          const BB = Math.floor(MB * jB),
            QB = Math.floor((MB + 1) * jB);
          for (let JB = 0; JB < GB; JB++) {
            const PB = Math.floor(JB * jB),
              zB = Math.floor((JB + 1) * jB),
              lB = (MB * GB + JB) * YB;
            for (let GB = 0; GB < YB; GB++) {
              let jB = 0;
              for (let oB = BB; oB < QB; oB++)
                for (let BB = PB; BB < zB; BB++) jB += DB[(oB * OB + BB) * YB + GB];
              oB[lB + GB] = jB * yB
            }
          }
        }
        if (BB instanceof Float32Array) return oB;
        const JB = new(0, BB.constructor)(QB);
        for (let MB = 0; MB < QB; MB++) JB[MB] = oB[MB] + .5 | 0;
        return JB
      }
      static ConvertCubeMapToSphericalPolynomial(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GB = OB > 0 ? this._NearestPow2Floor(OB) : 0;
        if (GB > 0 && BB.size > GB) {
          const OB = 5 === BB.format ? 4 : 3,
            YB = ["right", "left", "up", "down", "front", "back"],
            DB = {};
          for (const QB of YB) DB[QB] = this._DownsampleFace(BB[QB], BB.size, GB, OB);
          BB = {
            ...BB,
            ...DB,
            size: GB
          }
        }
        const YB = new QB.c;
        let yB = 0;
        const JB = 2 / BB.size,
          MB = JB,
          PB = .5 * JB,
          zB = PB - 1;
        for (let QB = 0; QB < 6; QB++) {
          const OB = this._FileFaces[QB],
            GB = BB[OB.name];
          let lB = zB;
          const pB = 5 === BB.format ? 4 : 3;
          for (let QB = 0; QB < BB.size; QB++) {
            let qB = zB;
            for (let MB = 0; MB < BB.size; MB++) {
              const zB = OB.worldAxisForFileX.scale(qB).add(OB.worldAxisForFileY.scale(lB)).add(OB.worldAxisForNormal);
              zB.normalize();
              const ZB = this._AreaElement(qB - PB, lB - PB) - this._AreaElement(qB - PB, lB + PB) - this._AreaElement(qB + PB, lB - PB) + this._AreaElement(qB + PB, lB + PB);
              let NB = GB[QB * BB.size * pB + MB * pB + 0],
                RB = GB[QB * BB.size * pB + MB * pB + 1],
                WB = GB[QB * BB.size * pB + MB * pB + 2];
              isNaN(NB) && (NB = 0), isNaN(RB) && (RB = 0), isNaN(WB) && (WB = 0), 0 === BB.type && (NB /= 255, RB /= 255, WB /= 255), BB.gammaSpace && (NB = Math.pow((0, DB.Clamp)(NB), oB.d), RB = Math.pow((0, DB.Clamp)(RB), oB.d), WB = Math.pow((0, DB.Clamp)(WB), oB.d));
              const AB = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const BB = Math.max(NB, RB, WB);
                if (BB > AB) {
                  const OB = AB / BB;
                  NB *= OB, RB *= OB, WB *= OB
                }
              } else NB = (0, DB.Clamp)(NB, 0, AB), RB = (0, DB.Clamp)(RB, 0, AB), WB = (0, DB.Clamp)(WB, 0, AB);
              const VB = new jB.c(NB, RB, WB);
              YB.addLight(zB, VB, ZB), yB += ZB, qB += JB
            }
            lB += MB
          }
        }
        const lB = 6 * (4 * Math.PI) / 6 / yB;
        return YB.scaleInPlace(lB), YB.convertIncidentRadianceToIrradiance(), YB.convertIrradianceToLambertianRadiance(), QB.f.FromHarmonics(YB)
      }
    }
    JB._FileFaces = [new yB("right", new YB.r(1, 0, 0), new YB.r(0, 0, -1), new YB.r(0, -1, 0)), new yB("left", new YB.r(-1, 0, 0), new YB.r(0, 0, 1), new YB.r(0, -1, 0)), new yB("up", new YB.r(0, 1, 0), new YB.r(1, 0, 0), new YB.r(0, 0, 1)), new yB("down", new YB.r(0, -1, 0), new YB.r(1, 0, 0), new YB.r(0, 0, -1)), new yB("front", new YB.r(0, 0, 1), new YB.r(1, 0, 0), new YB.r(0, -1, 0)), new yB("back", new YB.r(0, 0, -1), new YB.r(-1, 0, 0), new YB.r(0, -1, 0))], JB.MAX_HDRI_VALUE = 4096, JB.PRESERVE_CLAMPED_COLORS = !1
  },
  44762: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB.g,
      d: () => YB.n
    });
    var YB = GB(41035);
    (0, YB.p)()
  },
  38589: (BB, OB, GB) => {
    function YB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const OB = 16 * Math.random() | 0;
        return ("x" === BB ? OB : 3 & OB | 8).toString(16)
      }))
    }
    GB.d(OB, {
      e: () => YB
    })
  },
  44941: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB
    });
    var YB = GB(44931),
      DB = GB(44947);
    class QB {
      static ExpandRGBDTexture(BB) {
        const OB = BB._texture;
        if (!OB || !BB.isRGBD) return;
        const DB = OB.Lp(),
          QB = DB.getCaps(),
          oB = OB.isReady;
        let jB = !1;
        QB.textureHalfFloatRender && QB.textureHalfFloatLinearFiltering ? (jB = !0, OB.type = 2) : QB.textureFloatRender && QB.textureFloatLinearFiltering && (jB = !0, OB.type = 1), jB && (OB.isReady = !1, OB._isRGBD = !1, OB.invertY = !1);
        const yB = async () => {
          const QB = DB.isWebGPU,
            oB = QB ? 1 : 0;
          OB.isReady = !1, QB ? await GB.e(651).then((() => GB(63997))) : await GB.e(633).then((() => GB(64005)));
          const jB = new YB.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, DB, !1, void 0, OB.type, void 0, null, !1, void 0, oB);
          jB.externalTextureSamplerBinding = !0;
          const yB = DB.createRenderTargetTexture(OB.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: OB.samplingMode,
            type: OB.type,
            format: 5
          });
          jB.onEffectCreatedObservable.addOnce((GB => {
            GB.executeWhenCompiled((() => {
              jB.onApply = BB => {
                BB._bindTexture("textureSampler", OB), BB.setFloat2("scale", 1, 1)
              }, BB.JF()?.postProcessManager.directRender([jB], yB, !0), DB.restoreDefaultFramebuffer(), DB._releaseTexture(OB), jB && jB.dispose(), yB._swapAndDie(OB), OB.isReady = !0
            }))
          }))
        };
        jB && (oB ? yB() : BB.onLoadObservable.addOnce(yB))
      }
      static async EncodeTextureToRGBD(BB, OB) {
        let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return OB.Lp().isWebGPU ? await GB.e(652).then((() => GB(64017))) : await GB.e(634).then((() => GB(64015))), await (0, DB.d)("rgbdEncode", BB, OB, YB, 1, 5)
      }
    }
  },
  63864: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      AsyncLoop: () => YB.b,
      RegisterTools: () => YB.f,
      Tools: () => YB.j,
      className: () => YB.k
    });
    var YB = GB(41097);
    (0, YB.f)()
  },
  44999: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB
    });
    class YB {
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
        for (const OB of this._workerInfos)
          if (OB.idle) return this._execute(OB, BB), !0;
        return !1
      }
      _execute(BB, OB) {
        BB.idle = !1, BB.workerPromise.then((GB => {
          OB(GB, (() => {
            const OB = this._pendingActions.shift();
            OB ? this._execute(BB, OB) : BB.idle = !0
          }))
        }))
      }
    }
    class DB extends YB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DB.DefaultOptions;
        super([]), this._maxWorkers = BB, this._createWorkerAsync = OB, this._options = GB
      }
      push(BB) {
        if (!this._executeOnIdleWorker(BB))
          if (this._workerInfos.length < this._maxWorkers) {
            const OB = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(OB), this._execute(OB, BB)
          } else this._pendingActions.push(BB)
      }
      _execute(BB, OB) {
        BB.timeoutId && (clearTimeout(BB.timeoutId), delete BB.timeoutId), super._execute(BB, ((GB, YB) => {
          OB(GB, (() => {
            YB(), BB.idle && (BB.timeoutId = setTimeout((() => {
              BB.workerPromise.then((BB => {
                BB.terminate()
              }));
              const OB = this._workerInfos.indexOf(BB); - 1 !== OB && this._workerInfos.splice(OB, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    DB.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  63902: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      AbstractThreeMfSerializer: () => Cj,
      BVHExporter: () => ko,
      ContentTypeFileName: () => qj,
      DefaultXmlSerializerFormatOptions: () => ao,
      DefaultXmlSerializerNumberOptions: () => ho,
      EXT_lights_area: () => ZD,
      EXT_mesh_gpu_instancing: () => XY,
      EXT_texture_avif: () => Do,
      EXT_texture_webp: () => Bo,
      GLTF2Export: () => LY,
      GLTFData: () => JB,
      GetXmlFieldMeta: () => ro,
      GetXmlName: () => Xo,
      IsQualifiedName: () => Ko,
      KHR_draco_mesh_compression: () => sY,
      KHR_interactivity: () => JD,
      KHR_lights_punctual: () => QD,
      KHR_materials_anisotropy: () => AD,
      KHR_materials_clearcoat: () => fD,
      KHR_materials_coat: () => ID,
      KHR_materials_diffuse_roughness: () => gQ,
      KHR_materials_diffuse_transmission: () => XD,
      KHR_materials_dispersion: () => hD,
      KHR_materials_emissive_strength: () => bD,
      KHR_materials_fuzz: () => MQ,
      KHR_materials_ior: () => sD,
      KHR_materials_iridescence: () => OQ,
      KHR_materials_openpbr: () => EQ,
      KHR_materials_sheen: () => QQ,
      KHR_materials_specular: () => pQ,
      KHR_materials_transmission: () => RQ,
      KHR_materials_unlit: () => nQ,
      KHR_materials_volume: () => dQ,
      KHR_materials_volume_scatter: () => IQ,
      KHR_texture_basisu: () => vQ,
      KHR_texture_transform: () => eQ,
      Known3mfRelationshipTypes: () => Zj,
      KnownI3mfContentType: () => Mj,
      Matrix3d: () => Sj,
      MatrixFormatter: () => nj,
      ModelFileName: () => lj,
      NumberFormatter: () => bo,
      OBJExport: () => oB,
      Object3dDirName: () => zj,
      OpenXmlContentTypesNamespace: () => yj,
      OpenXmlRelationshipsNamespace: () => Jj,
      RegisterEXT_lights_area: () => RD,
      RegisterEXT_mesh_gpu_instancing: () => EY,
      RegisterEXT_texture_avif: () => oo,
      RegisterEXT_texture_webp: () => Go,
      RegisterKHR_draco_mesh_compression: () => tY,
      RegisterKHR_interactivity: () => PD,
      RegisterKHR_lights_punctual: () => jD,
      RegisterKHR_materials_anisotropy: () => SD,
      RegisterKHR_materials_clearcoat: () => dD,
      RegisterKHR_materials_coat: () => iD,
      RegisterKHR_materials_diffuse_roughness: () => XQ,
      RegisterKHR_materials_diffuse_transmission: () => ED,
      RegisterKHR_materials_dispersion: () => eD,
      RegisterKHR_materials_emissive_strength: () => HD,
      RegisterKHR_materials_fuzz: () => zQ,
      RegisterKHR_materials_ior: () => tD,
      RegisterKHR_materials_iridescence: () => YQ,
      RegisterKHR_materials_openpbr: () => hQ,
      RegisterKHR_materials_sheen: () => jQ,
      RegisterKHR_materials_specular: () => ZQ,
      RegisterKHR_materials_transmission: () => AQ,
      RegisterKHR_materials_unlit: () => fQ,
      RegisterKHR_materials_volume: () => uQ,
      RegisterKHR_materials_volume_scatter: () => iQ,
      RegisterKHR_texture_basisu: () => xQ,
      RegisterKHR_texture_transform: () => bQ,
      RelationshipDirName: () => Pj,
      RelationshipFileName: () => pj,
      ResolveFormatOptions: () => To,
      ResolveNumberOptions: () => eo,
      STLExport: () => jo,
      ST_ObjectType: () => jj,
      ST_Unit: () => oj,
      StringXmlWriter: () => Gj,
      ThreeDimModelNamespace: () => Dj,
      ThreeMf: () => Hj,
      ThreeMfBase: () => Xj,
      ThreeMfBaseMaterials: () => rj,
      ThreeMfBuild: () => wj,
      ThreeMfComponent: () => gj,
      ThreeMfComponents: () => Lj,
      ThreeMfComponentsBuilder: () => hj,
      ThreeMfContentType: () => Rj,
      ThreeMfContentTypes: () => Nj,
      ThreeMfDocument: () => Vj,
      ThreeMfDocumentBuilder: () => bj,
      ThreeMfItem: () => Ej,
      ThreeMfMaterialBuilder: () => ej,
      ThreeMfMesh: () => uj,
      ThreeMfMeshBuilder: () => aj,
      ThreeMfMeta: () => fj,
      ThreeMfMetadataGroup: () => kj,
      ThreeMfModel: () => Uj,
      ThreeMfModelBuilder: () => Tj,
      ThreeMfObject: () => Kj,
      ThreeMfObjectBuilder: () => cj,
      ThreeMfRelationship: () => Aj,
      ThreeMfRelationships: () => Wj,
      ThreeMfResources: () => dj,
      ThreeMfSerializer: () => xj,
      ThreeMfSerializerGlobalConfiguration: () => vj,
      ThreeMfTriangle: () => ij,
      ThreeMfTriangles: () => Fj,
      ThreeMfVertex: () => Ij,
      ThreeMfVertices: () => mj,
      ToQualifiedString: () => co,
      TokenType: () => Bj,
      TriangleSetsNamespace: () => Qj,
      USDZExportAsync: () => Uo,
      Utf8XmlWriterToBytes: () => Yj,
      XmlAttr: () => Lo,
      XmlBuilder: () => Oj,
      XmlElem: () => go,
      XmlIgnore: () => io,
      XmlName: () => Fo,
      XmlNameToParts: () => Eo,
      XmlSerializer: () => xo,
      _ConvertToGLTFPBRMetallicRoughness: () => fG,
      _SolveMetallic: () => UG,
      __IGLTFExporterExtension: () => jB
    });
    var YB = GB(37771),
      DB = GB(63864),
      QB = GB(41283);
    class oB {
      static OBJ(BB, OB, GB, oB) {
        const jB = [];
        let yB = 1,
          JB = 1;
        OB && (GB || (GB = "mat"), jB.push("mtllib " + GB + ".mtl"));
        for (let MB = 0; MB < BB.length; MB++) {
          const GB = BB[MB],
            PB = GB.name || `mesh${MB}}`;
          jB.push(`o ${PB}`);
          let zB = null;
          if (oB) {
            const BB = GB.computeWorldMatrix(!0);
            zB = new YB.Matrix, BB.invertToRef(zB), GB.bakeTransformIntoVertices(BB)
          }
          if (OB) {
            const BB = GB.material;
            BB && jB.push("usemtl " + BB.id)
          }
          const lB = GB.geometry;
          if (!lB) {
            DB.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const pB = lB.getVerticesData("position"),
            qB = lB.getVerticesData("normal"),
            ZB = lB.getVerticesData("uv"),
            NB = lB.KDB();
          let RB = 0,
            WB = 0;
          if (!pB || !NB) {
            DB.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const AB = BB[0].JF().useRightHandedSystem ? 1 : -1;
          for (let BB = 0; BB < pB.length; BB += 3) jB.push("v " + pB[BB] * AB + " " + pB[BB + 1] + " " + pB[BB + 2]), RB++;
          if (null != qB)
            for (let BB = 0; BB < qB.length; BB += 3) jB.push("vn " + qB[BB] * AB + " " + qB[BB + 1] + " " + qB[BB + 2]);
          if (null != ZB)
            for (let BB = 0; BB < ZB.length; BB += 2) jB.push("vt " + ZB[BB] + " " + ZB[BB + 1]), WB++;
          const VB = ["", "", ""],
            SB = (GB.material || GB.JF().defaultMaterial)._getEffectiveOrientation(GB),
            [nB, UB] = SB === QB.b.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let BB = 0; BB < NB.length; BB += 3) {
            const OB = [String(NB[BB] + yB), String(NB[BB + nB] + yB), String(NB[BB + UB] + yB)],
              GB = [String(NB[BB] + JB), String(NB[BB + nB] + JB), String(NB[BB + UB] + JB)],
              YB = OB,
              DB = null != ZB ? GB : VB,
              QB = null != qB ? OB : VB;
            jB.push("f " + YB[0] + "/" + DB[0] + "/" + QB[0] + " " + YB[1] + "/" + DB[1] + "/" + QB[1] + " " + YB[2] + "/" + DB[2] + "/" + QB[2])
          }
          oB && zB && GB.bakeTransformIntoVertices(zB), yB += RB, JB += WB
        }
        return jB.join("\n")
      }
      static MTL(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const GB = [],
          YB = BB.material;
        GB.push("newmtl " + OB), GB.push("  Ns " + YB.specularPower.toFixed(4)), GB.push("  Ni 1.5000"), GB.push("  d " + YB.alpha.toFixed(4)), GB.push("  Tr 0.0000"), GB.push("  Tf 1.0000 1.0000 1.0000"), GB.push("  illum 2"), GB.push("  Ka " + YB.ambientColor.r.toFixed(4) + " " + YB.ambientColor.g.toFixed(4) + " " + YB.ambientColor.b.toFixed(4)), GB.push("  Kd " + YB.diffuseColor.r.toFixed(4) + " " + YB.diffuseColor.g.toFixed(4) + " " + YB.diffuseColor.b.toFixed(4)), GB.push("  Ks " + YB.specularColor.r.toFixed(4) + " " + YB.specularColor.g.toFixed(4) + " " + YB.specularColor.b.toFixed(4)), GB.push("  Ke " + YB.emissiveColor.r.toFixed(4) + " " + YB.emissiveColor.g.toFixed(4) + " " + YB.emissiveColor.b.toFixed(4));
        YB.ambientTexture && GB.push("  map_Ka " + YB.ambientTexture.name), YB.diffuseTexture && GB.push("  map_Kd " + YB.diffuseTexture.name), YB.specularTexture && GB.push("  map_Ks " + YB.specularTexture.name), YB.bumpTexture && GB.push("  map_bump -imfchan z " + YB.bumpTexture.name), YB.opacityTexture && GB.push("  map_d " + YB.opacityTexture.name);
        return GB.join("\n")
      }
    }
    var jB = 0,
      yB = GB(44762);
    class JB {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const BB in this.files) {
          const OB = this.files[BB],
            GB = new Blob([OB], {
              type: (0, yB.b)(BB)
            });
          DB.Tools.Download(GB, BB)
        }
      }
    }
    var MB = GB(42160),
      PB = GB(42111),
      zB = GB(44751),
      lB = GB(42118),
      pB = GB(40825),
      qB = GB(37796),
      ZB = GB(37885),
      NB = GB(37807);
    const RB = NB.HighestCommonFactor,
      WB = {
        ...NB,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: RB
      };
    var AB = GB(44947),
      VB = GB(42133),
      SB = GB(44718),
      nB = GB(44726),
      UB = GB(44969);
    (0, UB.RegisterDumpTools)();
    var fB = GB(40998),
      kB = GB(41004),
      dB = GB(39366),
      KB = GB(41112),
      uB = GB(41470),
      mB = GB(44941);
    let IB = 0;
    const FB = (BB, OB, GB, YB) => {
        if (!BB[GB]) {
          const DB = BB.useDelayedTextureLoading;
          BB.useDelayedTextureLoading = !1;
          const QB = BB._blockEntityCollection;
          BB._blockEntityCollection = !1;
          const oB = uB.e.CreateFromBase64String(OB, YB + IB++, BB, !0, !1, uB.e.BILINEAR_SAMPLINGMODE);
          BB._blockEntityCollection = QB;
          const jB = BB.Lp().getLoadedTexturesCache(),
            yB = jB.indexOf(oB.getInternalTexture()); - 1 !== yB && jB.splice(yB, 1), oB.isRGBD = !0, oB.wrapU = uB.e.CLAMP_ADDRESSMODE, oB.wrapV = uB.e.CLAMP_ADDRESSMODE, BB[GB] = oB, BB.useDelayedTextureLoading = DB, mB.c.ExpandRGBDTexture(oB);
          const JB = BB.Lp().ip.add((() => {
            oB.isRGBD = !0;
            const OB = BB.onBeforeRenderObservable.add((() => {
              oB.isReady() && (BB.onBeforeRenderObservable.remove(OB), mB.c.ExpandRGBDTexture(oB))
            }))
          }));
          BB.lF.add((() => {
            BB.Lp().ip.remove(JB)
          }))
        }
        return BB[GB]
      },
      iB = BB => FB(BB, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      LB = BB => FB(BB, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAF9UlEQVR4nGWVy64eVxGF16X27u7/HMcyuZGYAINwmTBigngBXoc34El4B0ZMGDJjFCExQUIKiRKZYBITHdvn/L1rF4P+c+yEUqmH9WmtrrWLkdB4C1/91h/9yn947D8+8CfdlBeGGAMtqwNd6K7VWAJrw9qwLtw2nDaernh6wKuHPD3S1Vs6vaPT97W9r/Wx1seKUWj7Uzz6vX79T//wF/Gbx/7rw/jsFB/39nlrX7q99LKrp5bJZXAtrqW1uJIncbNOXafBU+o0tZW28got0AJ3KACsE4OfYvmzfvDMb/+4//Td9snD9rfr9vHWnyz9361/1fpNLLde0mt5pTZ7a9pCm32SrqQTfZI3aqNXHAwvcAB4BPwnk/oMEcqX8eaz1t9cHjxs7133f5z6p2v/Ylme9eWmLbexjlhnrPBirz3WxWv30rw0L/Yi96PpDrcDcPMEfq+qvQCfsFF1blcv2js3vb2xLNd9O/XT1p8u/Vlfnvd+25bResXC6BFLj2WJpUdv7uEe0exGByPoOAC//BH+cgNqUjfkU4mOEetde+O2vf+y8br71Nva+9q/XpYXvZ97z9ardUXrra3RerQWrUU4myLk4AzYiADwJ+NRQ41i7MSNEBIcM5YR1+f21rnlXcPWtbVYW1/a7dL21mZvbK211lv01lpEtIi0MxTmFGzMAABAN6gF1CTPxI1gkXa5Z5xGPNrbfo6xB/bQubW9nXvkHtXDPfqIJd2bI+1mpZjmNK17QFuxDzhBJued8Fy0KLvcp7fpNzJuM3JE7daIWGKMqAylW0bLiHQ0e1ppTXEK8Qrwkzv8fUIua6oG553wQpRIme7lbfpBxm3GnoEMZ+wZlYGMlu6pNh1pT3nqALCEugCeAB2ohKqYk9hZd4JFS5ThDm/lB9N305nGtKfnNKZiqk23qZhySZOcYhHFewXfI54UMCBDOYlU3TMkSaYWaCtdwXu5yprOKUxrqk9FyUWXNKXiBfCNgucGboGAUBwUJzFYO3G+MCwFtdAn6K6UZZSyXCXBAUVdGCoS5IVxAcQNujAHKCiLLHJqDtWZh1GHV0Et8EYNqOABTUhglKJoyKBBgSwCBC6Ajz7Azz+GiJbwhFTkZCXnEM6EJcuHDmmlztCkBE2IkMGAAhQoSCBBvgYA0G6xN4DgLE5IU5iqZA1hJ8zDqCY2qktJHfEnZSpIk6bE++kEXwHUEBMCmBBBFzE5UzNZuyBRshlSSF0aEg6MaDHIgyFCPAqvA/YdIjTgQ3WBLNZkpWoQPnRIUljdGiIkHd9jumgeO0ESEI97cNTPJj6Z4ISOZh1JUSVLwiAs7pRp02aTypRUhwIzjvhfPCKF1wH/BTqwA5pQlnYyipgs6dDBQVncZatZaZUlsUxZYVq0jyfm8kNeBzz/Gu0ETrjABAURAoTJOVVJpDAoM3ZOc5olfmMK42CYMrRTAr6tIK6QiSA84VtIIEosslSTNYUkUxyS5aEDQ6tMmQ7YDMOmjziYx8E56oPEl8DdDgM2/BLeIJVw9CRSTClZg97ZrDl0BF6m49V0GTIZQL4CvNuxFj47w4ASmqUkAalYU+DBoIbK8hAG506aZTLonWFG0IMa1AAHXlegW9wFGuAJG97hhFkqiuCxUZyqSSWR5GCZHKxB7nSwDcZADHiACQ4eJ/Oot9+BvsaLQD2Hby9RUEEs1cUlcdKpmWKSQ2VyqAY56J0RiEEPOqHxXYv2W4yJuANWxBkBOKEGFcwyjlhMYdLJSjLJpA8FAxqMwXZRQA0wgdQ94Hcf4nqDFnQhBDcY5YJUIqSSpnxpRqone6ol+2Af7Il2MJJxnN/8lgIA8yWQUKItaBMRsGEdDIrQoYNTnGSyBqdZQSY16IEYaANOOKn/A+htXH+OdgLOiB1BBOEGCz5ejmO6JpGEeexVJTmohJNORqIlnVDyO4CvvsT2AGm0BVEHo0IMHeEooeQipzDFY5eSNcigLgwoGYlIKHF/ky9Z+xD/WrCfoQUuRCGAKBhlwIBRQvmSuykkMYHkqx7EAPK+/wdqEbWmfB0bfwAAAABJRU5ErkJggg==", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      gB = BB => FB(BB, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var rB = GB(41091),
      XB = GB(37778),
      wB = GB(41150),
      EB = GB(41275),
      cB = GB(41361);
    class hB extends EB.c {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let aB = (() => {
      var BB, OB, GB, YB, DB, QB, oB, jB, yB, JB;
      let MB, PB, zB, lB, pB, qB, ZB, NB, RB, WB = cB.c,
        AB = [],
        VB = [],
        SB = [],
        nB = [],
        UB = [],
        dB = [],
        KB = [],
        uB = [],
        mB = [],
        IB = [],
        FB = [],
        iB = [],
        LB = [],
        gB = [],
        rB = [],
        XB = [],
        wB = [],
        EB = [];
      return BB = class extends WB {
        get useEnergyConservation() {
          return (0, fB.c)(this, OB, "f")
        }
        set useEnergyConservation(BB) {
          (0, fB.d)(this, OB, BB, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, fB.c)(this, GB, "f")
        }
        set useSmithVisibilityHeightCorrelated(BB) {
          (0, fB.d)(this, GB, BB, "f")
        }
        get useSphericalHarmonics() {
          return (0, fB.c)(this, YB, "f")
        }
        set useSphericalHarmonics(BB) {
          (0, fB.d)(this, YB, BB, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, fB.c)(this, DB, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(BB) {
          (0, fB.d)(this, DB, BB, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, fB.c)(this, QB, "f")
        }
        set mixIblRadianceWithIrradiance(BB) {
          (0, fB.d)(this, QB, BB, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, fB.c)(this, oB, "f")
        }
        set useLegacySpecularEnergyConservation(BB) {
          (0, fB.d)(this, oB, BB, "f")
        }
        get baseDiffuseModel() {
          return (0, fB.c)(this, jB, "f")
        }
        set baseDiffuseModel(BB) {
          (0, fB.d)(this, jB, BB, "f")
        }
        get dielectricSpecularModel() {
          return (0, fB.c)(this, yB, "f")
        }
        set dielectricSpecularModel(BB) {
          (0, fB.d)(this, yB, BB, "f")
        }
        get conductorSpecularModel() {
          return (0, fB.c)(this, JB, "f")
        }
        set conductorSpecularModel(BB) {
          (0, fB.d)(this, JB, BB, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(MB) {
          let PB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(MB, "PBRBRDF", 90, new hB, PB), this._useEnergyConservation = BB.DEFAULT_USE_ENERGY_CONSERVATION, OB.set(this, (0, fB.j)(this, AB, BB.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, fB.j)(this, VB), BB.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), GB.set(this, (0, fB.j)(this, SB, BB.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, fB.j)(this, nB), BB.DEFAULT_USE_SPHERICAL_HARMONICS), YB.set(this, (0, fB.j)(this, UB, BB.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, fB.j)(this, dB), BB.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), DB.set(this, (0, fB.j)(this, KB, BB.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, fB.j)(this, uB), BB.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), QB.set(this, (0, fB.j)(this, mB, BB.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, fB.j)(this, IB), BB.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), oB.set(this, (0, fB.j)(this, FB, BB.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, fB.j)(this, iB), BB.DEFAULT_DIFFUSE_MODEL), jB.set(this, (0, fB.j)(this, LB, BB.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, fB.j)(this, gB), BB.DEFAULT_DIELECTRIC_SPECULAR_MODEL), yB.set(this, (0, fB.j)(this, rB, BB.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, fB.j)(this, XB), BB.DEFAULT_CONDUCTOR_SPECULAR_MODEL), JB.set(this, (0, fB.j)(this, wB, BB.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, fB.j)(this, EB), this._internalMarkAllSubMeshesAsMiscDirty = MB._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(BB) {
          BB.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, BB.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, BB.SPHERICAL_HARMONICS = this._useSphericalHarmonics, BB.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, BB.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, BB.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, BB.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, BB.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, BB.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, OB = new WeakMap, GB = new WeakMap, YB = new WeakMap, DB = new WeakMap, QB = new WeakMap, oB = new WeakMap, jB = new WeakMap, yB = new WeakMap, JB = new WeakMap, (() => {
        const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(WB[Symbol.metadata] ?? null) : void 0;
        MB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], PB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], zB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], lB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], pB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], qB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], ZB = [(0, kB.L)("baseDiffuseModel"), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], NB = [(0, kB.L)("dielectricSpecularModel"), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], RB = [(0, kB.L)("conductorSpecularModel"), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], (0, fB.h)(BB, null, MB, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: BB => "useEnergyConservation" in BB,
            get: BB => BB.useEnergyConservation,
            set: (BB, OB) => {
              BB.useEnergyConservation = OB
            }
          },
          metadata: OB
        }, AB, VB), (0, fB.h)(BB, null, PB, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSmithVisibilityHeightCorrelated" in BB,
            get: BB => BB.useSmithVisibilityHeightCorrelated,
            set: (BB, OB) => {
              BB.useSmithVisibilityHeightCorrelated = OB
            }
          },
          metadata: OB
        }, SB, nB), (0, fB.h)(BB, null, zB, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSphericalHarmonics" in BB,
            get: BB => BB.useSphericalHarmonics,
            set: (BB, OB) => {
              BB.useSphericalHarmonics = OB
            }
          },
          metadata: OB
        }, UB, dB), (0, fB.h)(BB, null, lB, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSpecularGlossinessInputEnergyConservation" in BB,
            get: BB => BB.useSpecularGlossinessInputEnergyConservation,
            set: (BB, OB) => {
              BB.useSpecularGlossinessInputEnergyConservation = OB
            }
          },
          metadata: OB
        }, KB, uB), (0, fB.h)(BB, null, pB, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: BB => "mixIblRadianceWithIrradiance" in BB,
            get: BB => BB.mixIblRadianceWithIrradiance,
            set: (BB, OB) => {
              BB.mixIblRadianceWithIrradiance = OB
            }
          },
          metadata: OB
        }, mB, IB), (0, fB.h)(BB, null, qB, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: BB => "useLegacySpecularEnergyConservation" in BB,
            get: BB => BB.useLegacySpecularEnergyConservation,
            set: (BB, OB) => {
              BB.useLegacySpecularEnergyConservation = OB
            }
          },
          metadata: OB
        }, FB, iB), (0, fB.h)(BB, null, ZB, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseDiffuseModel" in BB,
            get: BB => BB.baseDiffuseModel,
            set: (BB, OB) => {
              BB.baseDiffuseModel = OB
            }
          },
          metadata: OB
        }, LB, gB), (0, fB.h)(BB, null, NB, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: BB => "dielectricSpecularModel" in BB,
            get: BB => BB.dielectricSpecularModel,
            set: (BB, OB) => {
              BB.dielectricSpecularModel = OB
            }
          },
          metadata: OB
        }, rB, XB), (0, fB.h)(BB, null, RB, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: BB => "conductorSpecularModel" in BB,
            get: BB => BB.conductorSpecularModel,
            set: (BB, OB) => {
              BB.conductorSpecularModel = OB
            }
          },
          metadata: OB
        }, wB, EB), OB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OB
        })
      })(), BB.DEFAULT_USE_ENERGY_CONSERVATION = !0, BB.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, BB.DEFAULT_USE_SPHERICAL_HARMONICS = !0, BB.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, BB.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, BB.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, BB.DEFAULT_DIFFUSE_MODEL = 0, BB.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, BB.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, BB
    })();
    var eB = GB(41266),
      TB = GB(37894),
      bB = GB(41273),
      CB = GB(41119),
      HB = GB(41346),
      vB = GB(41341),
      sB = GB(41354),
      xB = GB(41325);
    class tB extends EB.c {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let BO = (() => {
      var BB, OB, GB, YB, DB, QB, oB, jB, yB, JB;
      let MB, PB, zB, lB, pB, qB, ZB, NB, RB, WB, AB, VB, SB, nB, UB = cB.c,
        dB = [],
        KB = [],
        uB = [],
        mB = [],
        IB = [],
        FB = [],
        iB = [],
        LB = [],
        gB = [],
        rB = [],
        XB = [],
        wB = [],
        EB = [],
        hB = [],
        aB = [],
        eB = [],
        bB = [],
        CB = [],
        HB = [],
        sB = [],
        BO = [],
        OO = [],
        GO = [],
        YO = [],
        DO = [],
        QO = [],
        oO = [],
        jO = [];
      return BB = class extends UB {
        get isEnabled() {
          return (0, fB.c)(this, OB, "f")
        }
        set isEnabled(BB) {
          (0, fB.d)(this, OB, BB, "f")
        }
        get indexOfRefraction() {
          return (0, fB.c)(this, GB, "f")
        }
        set indexOfRefraction(BB) {
          (0, fB.d)(this, GB, BB, "f")
        }
        get texture() {
          return (0, fB.c)(this, YB, "f")
        }
        set texture(BB) {
          (0, fB.d)(this, YB, BB, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, fB.c)(this, DB, "f")
        }
        set useRoughnessFromMainTexture(BB) {
          (0, fB.d)(this, DB, BB, "f")
        }
        get textureRoughness() {
          return (0, fB.c)(this, QB, "f")
        }
        set textureRoughness(BB) {
          (0, fB.d)(this, QB, BB, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, fB.c)(this, oB, "f")
        }
        set remapF0OnInterfaceChange(BB) {
          (0, fB.d)(this, oB, BB, "f")
        }
        get bumpTexture() {
          return (0, fB.c)(this, jB, "f")
        }
        set bumpTexture(BB) {
          (0, fB.d)(this, jB, BB, "f")
        }
        get isTintEnabled() {
          return (0, fB.c)(this, yB, "f")
        }
        set isTintEnabled(BB) {
          (0, fB.d)(this, yB, BB, "f")
        }
        get tintTexture() {
          return (0, fB.c)(this, JB, "f")
        }
        set tintTexture(BB) {
          (0, fB.d)(this, JB, BB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(MB) {
          let PB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(MB, "PBRClearCoat", 100, new tB, PB), this._isEnabled = !1, OB.set(this, (0, fB.j)(this, dB, !1)), this.intensity = ((0, fB.j)(this, KB), (0, fB.j)(this, uB, 1)), this.roughness = ((0, fB.j)(this, mB), (0, fB.j)(this, IB, 0)), this._indexOfRefraction = ((0, fB.j)(this, FB), BB._DefaultIndexOfRefraction), GB.set(this, (0, fB.j)(this, iB, BB._DefaultIndexOfRefraction)), this._texture = ((0, fB.j)(this, LB), null), YB.set(this, (0, fB.j)(this, gB, null)), this._useRoughnessFromMainTexture = ((0, fB.j)(this, rB), !0), DB.set(this, (0, fB.j)(this, XB, !0)), this._textureRoughness = ((0, fB.j)(this, wB), null), QB.set(this, (0, fB.j)(this, EB, null)), this._remapF0OnInterfaceChange = ((0, fB.j)(this, hB), !0), oB.set(this, (0, fB.j)(this, aB, !0)), this._bumpTexture = ((0, fB.j)(this, eB), null), jB.set(this, (0, fB.j)(this, bB, null)), this._isTintEnabled = ((0, fB.j)(this, CB), !1), yB.set(this, (0, fB.j)(this, HB, !1)), this.tintColor = ((0, fB.j)(this, sB), (0, fB.j)(this, BO, TB.c.White())), this.tintColorAtDistance = ((0, fB.j)(this, OO), (0, fB.j)(this, GO, 1)), this.tintThickness = ((0, fB.j)(this, YO), (0, fB.j)(this, DO, 1)), this._tintTexture = ((0, fB.j)(this, QO), null), JB.set(this, (0, fB.j)(this, oO, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, fB.j)(this, jO), this._internalMarkAllSubMeshesAsTexturesDirty = MB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(BB, OB, GB) {
          if (!this._isEnabled) return !0;
          const YB = this._material._disableBumpMap;
          if (BB._areTexturesDirty && OB.texturesEnabled) {
            if (this._texture && vB.d.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && vB.d.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (GB.getCaps().standardDerivatives && this._bumpTexture && vB.d.ClearCoatBumpTextureEnabled && !YB && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && vB.d.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(OB, GB) {
          this._isEnabled ? (OB.CLEARCOAT = !0, OB.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, OB.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, OB._areTexturesDirty && GB.texturesEnabled && (this._texture && vB.d.ClearCoatTextureEnabled ? (0, xB.ab)(this._texture, OB, "CLEARCOAT_TEXTURE") : OB.CLEARCOAT_TEXTURE = !1, this._textureRoughness && vB.d.ClearCoatTextureEnabled ? (0, xB.ab)(this._textureRoughness, OB, "CLEARCOAT_TEXTURE_ROUGHNESS") : OB.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && vB.d.ClearCoatBumpTextureEnabled ? (0, xB.ab)(this._bumpTexture, OB, "CLEARCOAT_BUMP") : OB.CLEARCOAT_BUMP = !1, OB.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === BB._DefaultIndexOfRefraction, this._isTintEnabled ? (OB.CLEARCOAT_TINT = !0, this._tintTexture && vB.d.ClearCoatTintTextureEnabled ? ((0, xB.ab)(this._tintTexture, OB, "CLEARCOAT_TINT_TEXTURE"), OB.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : OB.CLEARCOAT_TINT_TEXTURE = !1) : (OB.CLEARCOAT_TINT = !1, OB.CLEARCOAT_TINT_TEXTURE = !1))) : (OB.CLEARCOAT = !1, OB.CLEARCOAT_TEXTURE = !1, OB.CLEARCOAT_TEXTURE_ROUGHNESS = !1, OB.CLEARCOAT_BUMP = !1, OB.CLEARCOAT_TINT = !1, OB.CLEARCOAT_TINT_TEXTURE = !1, OB.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, OB.CLEARCOAT_DEFAULTIOR = !1, OB.CLEARCOAT_TEXTUREDIRECTUV = 0, OB.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, OB.CLEARCOAT_BUMPDIRECTUV = 0, OB.CLEARCOAT_REMAP_F0 = !1, OB.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, OB.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(BB, OB, GB, YB) {
          if (!this._isEnabled) return;
          const DB = YB.materialDefines,
            QB = this._material.isFrozen,
            oB = this._material._disableBumpMap,
            jB = this._material._invertNormalMapX,
            yB = this._material._invertNormalMapY;
          if (!BB.useUbo || !QB || !BB.isSync) {
            (this._texture || this._textureRoughness) && vB.d.ClearCoatTextureEnabled && (BB.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, xB.F)(this._texture, BB, "clearCoat"), this._textureRoughness && !DB.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, xB.F)(this._textureRoughness, BB, "clearCoatRoughness")), this._bumpTexture && GB.getCaps().standardDerivatives && vB.d.ClearCoatTextureEnabled && !oB && (BB.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, xB.F)(this._bumpTexture, BB, "clearCoatBump"), OB._mirroredCameraPosition ? BB.updateFloat2("vClearCoatTangentSpaceParams", jB ? 1 : -1, yB ? 1 : -1) : BB.updateFloat2("vClearCoatTangentSpaceParams", jB ? -1 : 1, yB ? -1 : 1)), this._tintTexture && vB.d.ClearCoatTintTextureEnabled && (BB.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, xB.F)(this._tintTexture, BB, "clearCoatTint")), BB.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const YB = 1 - this._indexOfRefraction,
              QB = 1 + this._indexOfRefraction,
              JB = Math.pow(-YB / QB, 2),
              MB = 1 / this._indexOfRefraction;
            BB.updateFloat4("vClearCoatRefractionParams", JB, MB, YB, QB), this._isTintEnabled && (BB.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), BB.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          OB.texturesEnabled && (this._texture && vB.d.ClearCoatTextureEnabled && BB.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !DB.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && vB.d.ClearCoatTextureEnabled && BB.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && GB.getCaps().standardDerivatives && vB.d.ClearCoatBumpTextureEnabled && !oB && BB.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && vB.d.ClearCoatTintTextureEnabled && BB.setTexture("clearCoatTintSampler", this._tintTexture))
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
        addFallbacks(BB, OB, GB) {
          return BB.CLEARCOAT_BUMP && OB.addFallback(GB++, "CLEARCOAT_BUMP"), BB.CLEARCOAT_TINT && OB.addFallback(GB++, "CLEARCOAT_TINT"), BB.CLEARCOAT && OB.addFallback(GB++, "CLEARCOAT"), GB
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
      }, OB = new WeakMap, GB = new WeakMap, YB = new WeakMap, DB = new WeakMap, QB = new WeakMap, oB = new WeakMap, jB = new WeakMap, yB = new WeakMap, JB = new WeakMap, (() => {
        const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(UB[Symbol.metadata] ?? null) : void 0;
        MB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], PB = [(0, kB.L)()], zB = [(0, kB.L)()], lB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], pB = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], qB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], ZB = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], NB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], RB = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], WB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], AB = [(0, kB.n)()], VB = [(0, kB.L)()], SB = [(0, kB.L)()], nB = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], (0, fB.h)(BB, null, MB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, OB) => {
              BB.isEnabled = OB
            }
          },
          metadata: OB
        }, dB, KB), (0, fB.h)(BB, null, lB, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "indexOfRefraction" in BB,
            get: BB => BB.indexOfRefraction,
            set: (BB, OB) => {
              BB.indexOfRefraction = OB
            }
          },
          metadata: OB
        }, iB, LB), (0, fB.h)(BB, null, pB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, OB) => {
              BB.texture = OB
            }
          },
          metadata: OB
        }, gB, rB), (0, fB.h)(BB, null, qB, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRoughnessFromMainTexture" in BB,
            get: BB => BB.useRoughnessFromMainTexture,
            set: (BB, OB) => {
              BB.useRoughnessFromMainTexture = OB
            }
          },
          metadata: OB
        }, XB, wB), (0, fB.h)(BB, null, ZB, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "textureRoughness" in BB,
            get: BB => BB.textureRoughness,
            set: (BB, OB) => {
              BB.textureRoughness = OB
            }
          },
          metadata: OB
        }, EB, hB), (0, fB.h)(BB, null, NB, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: BB => "remapF0OnInterfaceChange" in BB,
            get: BB => BB.remapF0OnInterfaceChange,
            set: (BB, OB) => {
              BB.remapF0OnInterfaceChange = OB
            }
          },
          metadata: OB
        }, aB, eB), (0, fB.h)(BB, null, RB, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "bumpTexture" in BB,
            get: BB => BB.bumpTexture,
            set: (BB, OB) => {
              BB.bumpTexture = OB
            }
          },
          metadata: OB
        }, bB, CB), (0, fB.h)(BB, null, WB, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isTintEnabled" in BB,
            get: BB => BB.isTintEnabled,
            set: (BB, OB) => {
              BB.isTintEnabled = OB
            }
          },
          metadata: OB
        }, HB, sB), (0, fB.h)(BB, null, nB, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintTexture" in BB,
            get: BB => BB.tintTexture,
            set: (BB, OB) => {
              BB.tintTexture = OB
            }
          },
          metadata: OB
        }, oO, jO), (0, fB.h)(null, null, PB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, OB) => {
              BB.intensity = OB
            }
          },
          metadata: OB
        }, uB, mB), (0, fB.h)(null, null, zB, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "roughness" in BB,
            get: BB => BB.roughness,
            set: (BB, OB) => {
              BB.roughness = OB
            }
          },
          metadata: OB
        }, IB, FB), (0, fB.h)(null, null, AB, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintColor" in BB,
            get: BB => BB.tintColor,
            set: (BB, OB) => {
              BB.tintColor = OB
            }
          },
          metadata: OB
        }, BO, OO), (0, fB.h)(null, null, VB, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintColorAtDistance" in BB,
            get: BB => BB.tintColorAtDistance,
            set: (BB, OB) => {
              BB.tintColorAtDistance = OB
            }
          },
          metadata: OB
        }, GO, YO), (0, fB.h)(null, null, SB, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintThickness" in BB,
            get: BB => BB.tintThickness,
            set: (BB, OB) => {
              BB.tintThickness = OB
            }
          },
          metadata: OB
        }, DO, QO), OB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OB
        })
      })(), BB._DefaultIndexOfRefraction = 1.5, BB
    })();
    class OO extends EB.c {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let GO = (() => {
      var BB, OB, GB, YB;
      let DB, QB, oB, jB, yB, JB, MB, PB = cB.c,
        zB = [],
        lB = [],
        pB = [],
        qB = [],
        ZB = [],
        NB = [],
        RB = [],
        WB = [],
        AB = [],
        VB = [],
        SB = [],
        nB = [],
        UB = [],
        dB = [];
      return BB = class extends PB {
        get isEnabled() {
          return (0, fB.c)(this, OB, "f")
        }
        set isEnabled(BB) {
          (0, fB.d)(this, OB, BB, "f")
        }
        get texture() {
          return (0, fB.c)(this, GB, "f")
        }
        set texture(BB) {
          (0, fB.d)(this, GB, BB, "f")
        }
        get thicknessTexture() {
          return (0, fB.c)(this, YB, "f")
        }
        set thicknessTexture(BB) {
          (0, fB.d)(this, YB, BB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(DB) {
          let QB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(DB, "PBRIridescence", 110, new OO, QB), this._isEnabled = !1, OB.set(this, (0, fB.j)(this, zB, !1)), this.intensity = ((0, fB.j)(this, lB), (0, fB.j)(this, pB, 1)), this.minimumThickness = ((0, fB.j)(this, qB), (0, fB.j)(this, ZB, BB._DefaultMinimumThickness)), this.maximumThickness = ((0, fB.j)(this, NB), (0, fB.j)(this, RB, BB._DefaultMaximumThickness)), this.indexOfRefraction = ((0, fB.j)(this, WB), (0, fB.j)(this, AB, BB._DefaultIndexOfRefraction)), this._texture = ((0, fB.j)(this, VB), null), GB.set(this, (0, fB.j)(this, SB, null)), this._thicknessTexture = ((0, fB.j)(this, nB), null), YB.set(this, (0, fB.j)(this, UB, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, fB.j)(this, dB), this._internalMarkAllSubMeshesAsTexturesDirty = DB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(BB, OB) {
          if (!this._isEnabled) return !0;
          if (BB._areTexturesDirty && OB.texturesEnabled) {
            if (this._texture && vB.d.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && vB.d.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(BB, OB) {
          this._isEnabled ? (BB.IRIDESCENCE = !0, BB._areTexturesDirty && OB.texturesEnabled && (this._texture && vB.d.IridescenceTextureEnabled ? (0, xB.ab)(this._texture, BB, "IRIDESCENCE_TEXTURE") : BB.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && vB.d.IridescenceTextureEnabled ? (0, xB.ab)(this._thicknessTexture, BB, "IRIDESCENCE_THICKNESS_TEXTURE") : BB.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (BB.IRIDESCENCE = !1, BB.IRIDESCENCE_TEXTURE = !1, BB.IRIDESCENCE_THICKNESS_TEXTURE = !1, BB.IRIDESCENCE_TEXTUREDIRECTUV = 0, BB.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(BB, OB) {
          if (!this._isEnabled) return;
          const GB = this._material.isFrozen;
          BB.useUbo && GB && BB.isSync || ((this._texture || this._thicknessTexture) && vB.d.IridescenceTextureEnabled && (BB.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, xB.F)(this._texture, BB, "iridescence"), this._thicknessTexture && (0, xB.F)(this._thicknessTexture, BB, "iridescenceThickness")), BB.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), OB.texturesEnabled && (this._texture && vB.d.IridescenceTextureEnabled && BB.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && vB.d.IridescenceTextureEnabled && BB.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
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
        addFallbacks(BB, OB, GB) {
          return BB.IRIDESCENCE && OB.addFallback(GB++, "IRIDESCENCE"), GB
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
      }, OB = new WeakMap, GB = new WeakMap, YB = new WeakMap, (() => {
        const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(PB[Symbol.metadata] ?? null) : void 0;
        DB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], QB = [(0, kB.L)()], oB = [(0, kB.L)()], jB = [(0, kB.L)()], yB = [(0, kB.L)()], JB = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], MB = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], (0, fB.h)(BB, null, DB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, OB) => {
              BB.isEnabled = OB
            }
          },
          metadata: OB
        }, zB, lB), (0, fB.h)(BB, null, JB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, OB) => {
              BB.texture = OB
            }
          },
          metadata: OB
        }, SB, nB), (0, fB.h)(BB, null, MB, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "thicknessTexture" in BB,
            get: BB => BB.thicknessTexture,
            set: (BB, OB) => {
              BB.thicknessTexture = OB
            }
          },
          metadata: OB
        }, UB, dB), (0, fB.h)(null, null, QB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, OB) => {
              BB.intensity = OB
            }
          },
          metadata: OB
        }, pB, qB), (0, fB.h)(null, null, oB, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "minimumThickness" in BB,
            get: BB => BB.minimumThickness,
            set: (BB, OB) => {
              BB.minimumThickness = OB
            }
          },
          metadata: OB
        }, ZB, NB), (0, fB.h)(null, null, jB, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "maximumThickness" in BB,
            get: BB => BB.maximumThickness,
            set: (BB, OB) => {
              BB.maximumThickness = OB
            }
          },
          metadata: OB
        }, RB, WB), (0, fB.h)(null, null, yB, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "indexOfRefraction" in BB,
            get: BB => BB.indexOfRefraction,
            set: (BB, OB) => {
              BB.indexOfRefraction = OB
            }
          },
          metadata: OB
        }, AB, VB), OB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OB
        })
      })(), BB._DefaultMinimumThickness = 100, BB._DefaultMaximumThickness = 400, BB._DefaultIndexOfRefraction = 1.3, BB
    })();
    class YO extends EB.c {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let DO = (() => {
      var BB, OB, GB, YB;
      let DB, QB, oB, jB, yB, JB = cB.c,
        MB = [],
        PB = [],
        zB = [],
        lB = [],
        pB = [],
        qB = [],
        ZB = [],
        NB = [],
        RB = [],
        WB = [];
      return BB = class extends JB {
        get isEnabled() {
          return (0, fB.c)(this, OB, "f")
        }
        set isEnabled(BB) {
          (0, fB.d)(this, OB, BB, "f")
        }
        set angle(BB) {
          this.direction.x = Math.cos(BB), this.direction.y = Math.sin(BB)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, fB.c)(this, GB, "f")
        }
        set texture(BB) {
          (0, fB.d)(this, GB, BB, "f")
        }
        get legacy() {
          return (0, fB.c)(this, YB, "f")
        }
        set legacy(BB) {
          (0, fB.d)(this, YB, BB, "f")
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
          let DB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(BB, "PBRAnisotropic", 110, new YO, DB), this._isEnabled = !1, OB.set(this, (0, fB.j)(this, MB, !1)), this.intensity = ((0, fB.j)(this, PB), (0, fB.j)(this, zB, 1)), this.direction = ((0, fB.j)(this, lB), (0, fB.j)(this, pB, new XB.o(1, 0))), this._texture = ((0, fB.j)(this, qB), null), GB.set(this, (0, fB.j)(this, ZB, null)), this._legacy = ((0, fB.j)(this, NB), !1), YB.set(this, (0, fB.j)(this, RB, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, fB.j)(this, WB), this._internalMarkAllSubMeshesAsTexturesDirty = BB._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = BB._dirtyCallbacks[16]
        }
        isReadyForSubMesh(BB, OB) {
          return !this._isEnabled || !(BB._areTexturesDirty && OB.texturesEnabled && this._texture && vB.d.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(BB, OB, GB) {
          this._isEnabled ? (BB.ANISOTROPIC = this._isEnabled, this._isEnabled && !GB.isVerticesDataPresent(wB.h.TangentKind) && (BB._needUVs = !0, BB.MAINUV1 = !0), BB._areTexturesDirty && OB.texturesEnabled && (this._texture && vB.d.AnisotropicTextureEnabled ? (0, xB.ab)(this._texture, BB, "ANISOTROPIC_TEXTURE") : BB.ANISOTROPIC_TEXTURE = !1), BB._areMiscDirty && (BB.ANISOTROPIC_LEGACY = this._legacy)) : (BB.ANISOTROPIC = !1, BB.ANISOTROPIC_TEXTURE = !1, BB.ANISOTROPIC_TEXTUREDIRECTUV = 0, BB.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(BB, OB) {
          if (!this._isEnabled) return;
          const GB = this._material.isFrozen;
          BB.useUbo && GB && BB.isSync || (this._texture && vB.d.AnisotropicTextureEnabled && (BB.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, xB.F)(this._texture, BB, "anisotropy")), BB.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), OB.texturesEnabled && this._texture && vB.d.AnisotropicTextureEnabled && BB.setTexture("anisotropySampler", this._texture)
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
        addFallbacks(BB, OB, GB) {
          return BB.ANISOTROPIC && OB.addFallback(GB++, "ANISOTROPIC"), GB
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
        parse(BB, OB, GB) {
          super.parse(BB, OB, GB), void 0 === BB.legacy && (this.legacy = !0)
        }
      }, OB = new WeakMap, GB = new WeakMap, YB = new WeakMap, (() => {
        const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(JB[Symbol.metadata] ?? null) : void 0;
        DB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], QB = [(0, kB.L)()], oB = [(0, kB.D)()], jB = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], yB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], (0, fB.h)(BB, null, DB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, OB) => {
              BB.isEnabled = OB
            }
          },
          metadata: OB
        }, MB, PB), (0, fB.h)(BB, null, jB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, OB) => {
              BB.texture = OB
            }
          },
          metadata: OB
        }, ZB, NB), (0, fB.h)(BB, null, yB, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: BB => "legacy" in BB,
            get: BB => BB.legacy,
            set: (BB, OB) => {
              BB.legacy = OB
            }
          },
          metadata: OB
        }, RB, WB), (0, fB.h)(null, null, QB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, OB) => {
              BB.intensity = OB
            }
          },
          metadata: OB
        }, zB, lB), (0, fB.h)(null, null, oB, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: BB => "direction" in BB,
            get: BB => BB.direction,
            set: (BB, OB) => {
              BB.direction = OB
            }
          },
          metadata: OB
        }, pB, qB), OB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OB
        })
      })(), BB
    })();
    class QO extends EB.c {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let oO = (() => {
      var BB, OB, GB, YB, DB, QB, oB, jB;
      let yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB = cB.c,
        RB = [],
        WB = [],
        AB = [],
        VB = [],
        SB = [],
        nB = [],
        UB = [],
        dB = [],
        KB = [],
        uB = [],
        mB = [],
        IB = [],
        FB = [],
        iB = [],
        LB = [],
        gB = [],
        rB = [],
        XB = [];
      return BB = class extends NB {
        get isEnabled() {
          return (0, fB.c)(this, OB, "f")
        }
        set isEnabled(BB) {
          (0, fB.d)(this, OB, BB, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, fB.c)(this, GB, "f")
        }
        set linkSheenWithAlbedo(BB) {
          (0, fB.d)(this, GB, BB, "f")
        }
        get texture() {
          return (0, fB.c)(this, YB, "f")
        }
        set texture(BB) {
          (0, fB.d)(this, YB, BB, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, fB.c)(this, DB, "f")
        }
        set useRoughnessFromMainTexture(BB) {
          (0, fB.d)(this, DB, BB, "f")
        }
        get roughness() {
          return (0, fB.c)(this, QB, "f")
        }
        set roughness(BB) {
          (0, fB.d)(this, QB, BB, "f")
        }
        get textureRoughness() {
          return (0, fB.c)(this, oB, "f")
        }
        set textureRoughness(BB) {
          (0, fB.d)(this, oB, BB, "f")
        }
        get albedoScaling() {
          return (0, fB.c)(this, jB, "f")
        }
        set albedoScaling(BB) {
          (0, fB.d)(this, jB, BB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(BB) {
          let yB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(BB, "Sheen", 120, new QO, yB), this._isEnabled = !1, OB.set(this, (0, fB.j)(this, RB, !1)), this._linkSheenWithAlbedo = ((0, fB.j)(this, WB), !1), GB.set(this, (0, fB.j)(this, AB, !1)), this.intensity = ((0, fB.j)(this, VB), (0, fB.j)(this, SB, 1)), this.color = ((0, fB.j)(this, nB), (0, fB.j)(this, UB, TB.c.White())), this._texture = ((0, fB.j)(this, dB), null), YB.set(this, (0, fB.j)(this, KB, null)), this._useRoughnessFromMainTexture = ((0, fB.j)(this, uB), !0), DB.set(this, (0, fB.j)(this, mB, !0)), this._roughness = ((0, fB.j)(this, IB), null), QB.set(this, (0, fB.j)(this, FB, null)), this._textureRoughness = ((0, fB.j)(this, iB), null), oB.set(this, (0, fB.j)(this, LB, null)), this._albedoScaling = ((0, fB.j)(this, gB), !1), jB.set(this, (0, fB.j)(this, rB, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, fB.j)(this, XB), this._internalMarkAllSubMeshesAsTexturesDirty = BB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(BB, OB) {
          if (!this._isEnabled) return !0;
          if (BB._areTexturesDirty && OB.texturesEnabled) {
            if (this._texture && vB.d.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && vB.d.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(BB, OB) {
          this._isEnabled ? (BB.SHEEN = !0, BB.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, BB.SHEEN_ROUGHNESS = null !== this._roughness, BB.SHEEN_ALBEDOSCALING = this._albedoScaling, BB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, BB._areTexturesDirty && OB.texturesEnabled && (this._texture && vB.d.SheenTextureEnabled ? ((0, xB.ab)(this._texture, BB, "SHEEN_TEXTURE"), BB.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : BB.SHEEN_TEXTURE = !1, this._textureRoughness && vB.d.SheenTextureEnabled ? (0, xB.ab)(this._textureRoughness, BB, "SHEEN_TEXTURE_ROUGHNESS") : BB.SHEEN_TEXTURE_ROUGHNESS = !1)) : (BB.SHEEN = !1, BB.SHEEN_TEXTURE = !1, BB.SHEEN_TEXTURE_ROUGHNESS = !1, BB.SHEEN_LINKWITHALBEDO = !1, BB.SHEEN_ROUGHNESS = !1, BB.SHEEN_ALBEDOSCALING = !1, BB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, BB.SHEEN_GAMMATEXTURE = !1, BB.SHEEN_TEXTUREDIRECTUV = 0, BB.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(BB, OB, GB, YB) {
          if (!this._isEnabled) return;
          const DB = YB.materialDefines,
            QB = this._material.isFrozen;
          BB.useUbo && QB && BB.isSync || ((this._texture || this._textureRoughness) && vB.d.SheenTextureEnabled && (BB.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, xB.F)(this._texture, BB, "sheen"), this._textureRoughness && !DB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, xB.F)(this._textureRoughness, BB, "sheenRoughness")), BB.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && BB.updateFloat("vSheenRoughness", this._roughness)), OB.texturesEnabled && (this._texture && vB.d.SheenTextureEnabled && BB.setTexture("sheenSampler", this._texture), this._textureRoughness && !DB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && vB.d.SheenTextureEnabled && BB.setTexture("sheenRoughnessSampler", this._textureRoughness))
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
        addFallbacks(BB, OB, GB) {
          return BB.SHEEN && OB.addFallback(GB++, "SHEEN"), GB
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
      }, OB = new WeakMap, GB = new WeakMap, YB = new WeakMap, DB = new WeakMap, QB = new WeakMap, oB = new WeakMap, jB = new WeakMap, (() => {
        const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(NB[Symbol.metadata] ?? null) : void 0;
        yB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], JB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], MB = [(0, kB.L)()], PB = [(0, kB.n)()], zB = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], lB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], pB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], qB = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], ZB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], (0, fB.h)(BB, null, yB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, OB) => {
              BB.isEnabled = OB
            }
          },
          metadata: OB
        }, RB, WB), (0, fB.h)(BB, null, JB, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: BB => "linkSheenWithAlbedo" in BB,
            get: BB => BB.linkSheenWithAlbedo,
            set: (BB, OB) => {
              BB.linkSheenWithAlbedo = OB
            }
          },
          metadata: OB
        }, AB, VB), (0, fB.h)(BB, null, zB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, OB) => {
              BB.texture = OB
            }
          },
          metadata: OB
        }, KB, uB), (0, fB.h)(BB, null, lB, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRoughnessFromMainTexture" in BB,
            get: BB => BB.useRoughnessFromMainTexture,
            set: (BB, OB) => {
              BB.useRoughnessFromMainTexture = OB
            }
          },
          metadata: OB
        }, mB, IB), (0, fB.h)(BB, null, pB, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "roughness" in BB,
            get: BB => BB.roughness,
            set: (BB, OB) => {
              BB.roughness = OB
            }
          },
          metadata: OB
        }, FB, iB), (0, fB.h)(BB, null, qB, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "textureRoughness" in BB,
            get: BB => BB.textureRoughness,
            set: (BB, OB) => {
              BB.textureRoughness = OB
            }
          },
          metadata: OB
        }, LB, gB), (0, fB.h)(BB, null, ZB, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: BB => "albedoScaling" in BB,
            get: BB => BB.albedoScaling,
            set: (BB, OB) => {
              BB.albedoScaling = OB
            }
          },
          metadata: OB
        }, rB, XB), (0, fB.h)(null, null, MB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, OB) => {
              BB.intensity = OB
            }
          },
          metadata: OB
        }, SB, nB), (0, fB.h)(null, null, PB, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: BB => "color" in BB,
            get: BB => BB.color,
            set: (BB, OB) => {
              BB.color = OB
            }
          },
          metadata: OB
        }, UB, dB), OB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OB
        })
      })(), BB
    })();
    class jO extends EB.c {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let yO = (() => {
      var BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB;
      let NB, RB, WB, AB, VB, SB, nB, UB, dB, KB, uB, mB, IB, FB, iB, LB, gB, rB, wB, EB, hB, aB, eB, bB, CB, HB, sB, tB, BO, OO, GO = cB.c,
        YO = [],
        DO = [],
        QO = [],
        oO = [],
        yO = [],
        JO = [],
        MO = [],
        PO = [],
        zO = [],
        lO = [],
        pO = [],
        qO = [],
        ZO = [],
        NO = [],
        RO = [],
        WO = [],
        AO = [],
        VO = [],
        SO = [],
        nO = [],
        UO = [],
        fO = [],
        kO = [],
        dO = [],
        KO = [],
        uO = [],
        mO = [],
        IO = [],
        FO = [],
        iO = [],
        LO = [],
        gO = [],
        rO = [],
        XO = [],
        wO = [],
        EO = [],
        cO = [],
        hO = [],
        aO = [],
        eO = [],
        TO = [],
        bO = [],
        CO = [],
        HO = [],
        vO = [],
        sO = [],
        xO = [],
        tO = [],
        BG = [],
        OG = [],
        GG = [],
        YG = [],
        DG = [],
        QG = [],
        oG = [],
        jG = [],
        yG = [],
        JG = [],
        MG = [],
        PG = [];
      return BB = class extends GO {
        get isRefractionEnabled() {
          return (0, fB.c)(this, OB, "f")
        }
        set isRefractionEnabled(BB) {
          (0, fB.d)(this, OB, BB, "f")
        }
        get isTranslucencyEnabled() {
          return (0, fB.c)(this, GB, "f")
        }
        set isTranslucencyEnabled(BB) {
          (0, fB.d)(this, GB, BB, "f")
        }
        get isDispersionEnabled() {
          return (0, fB.c)(this, YB, "f")
        }
        set isDispersionEnabled(BB) {
          (0, fB.d)(this, YB, BB, "f")
        }
        get isScatteringEnabled() {
          return (0, fB.c)(this, DB, "f")
        }
        set isScatteringEnabled(BB) {
          (0, fB.d)(this, DB, BB, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(BB) {
          this._scene.enableSubSurfaceForPrePass() && BB && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(BB))
        }
        get useAlbedoToTintRefraction() {
          return (0, fB.c)(this, QB, "f")
        }
        set useAlbedoToTintRefraction(BB) {
          (0, fB.d)(this, QB, BB, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, fB.c)(this, oB, "f")
        }
        set useAlbedoToTintTranslucency(BB) {
          (0, fB.d)(this, oB, BB, "f")
        }
        get thicknessTexture() {
          return (0, fB.c)(this, jB, "f")
        }
        set thicknessTexture(BB) {
          (0, fB.d)(this, jB, BB, "f")
        }
        get refractionTexture() {
          return (0, fB.c)(this, yB, "f")
        }
        set refractionTexture(BB) {
          (0, fB.d)(this, yB, BB, "f")
        }
        get indexOfRefraction() {
          return (0, fB.c)(this, JB, "f")
        }
        set indexOfRefraction(BB) {
          (0, fB.d)(this, JB, BB, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(BB) {
          const OB = BB >= 1 ? BB : -1;
          this._volumeIndexOfRefraction !== OB && (this._volumeIndexOfRefraction = OB, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, fB.c)(this, MB, "f")
        }
        set invertRefractionY(BB) {
          (0, fB.d)(this, MB, BB, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, fB.c)(this, PB, "f")
        }
        set linkRefractionWithTransparency(BB) {
          (0, fB.d)(this, PB, BB, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, fB.c)(this, zB, "f")
        }
        set useMaskFromThicknessTexture(BB) {
          (0, fB.d)(this, zB, BB, "f")
        }
        get refractionIntensityTexture() {
          return (0, fB.c)(this, lB, "f")
        }
        set refractionIntensityTexture(BB) {
          (0, fB.d)(this, lB, BB, "f")
        }
        get translucencyIntensityTexture() {
          return (0, fB.c)(this, pB, "f")
        }
        set translucencyIntensityTexture(BB) {
          (0, fB.d)(this, pB, BB, "f")
        }
        get translucencyColorTexture() {
          return (0, fB.c)(this, qB, "f")
        }
        set translucencyColorTexture(BB) {
          (0, fB.d)(this, qB, BB, "f")
        }
        get useGltfStyleTextures() {
          return (0, fB.c)(this, ZB, "f")
        }
        set useGltfStyleTextures(BB) {
          (0, fB.d)(this, ZB, BB, "f")
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
        constructor(NB) {
          let RB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(NB, "PBRSubSurface", 130, new jO, RB), this._isRefractionEnabled = !1, OB.set(this, (0, fB.j)(this, YO, !1)), this._isTranslucencyEnabled = ((0, fB.j)(this, DO), !1), GB.set(this, (0, fB.j)(this, QO, !1)), this._isDispersionEnabled = ((0, fB.j)(this, oO), !1), YB.set(this, (0, fB.j)(this, yO, !1)), this._isScatteringEnabled = ((0, fB.j)(this, JO), !1), DB.set(this, (0, fB.j)(this, MO, !1)), this._scatteringDiffusionProfileIndex = ((0, fB.j)(this, PO), (0, fB.j)(this, zO, 0)), this.refractionIntensity = ((0, fB.j)(this, lO), (0, fB.j)(this, pO, 1)), this.translucencyIntensity = ((0, fB.j)(this, qO), (0, fB.j)(this, ZO, 1)), this._useAlbedoToTintRefraction = ((0, fB.j)(this, NO), !1), QB.set(this, (0, fB.j)(this, RO, !1)), this._useAlbedoToTintTranslucency = ((0, fB.j)(this, WO), !1), oB.set(this, (0, fB.j)(this, AO, !1)), this._thicknessTexture = ((0, fB.j)(this, VO), null), jB.set(this, (0, fB.j)(this, SO, null)), this._refractionTexture = ((0, fB.j)(this, nO), null), yB.set(this, (0, fB.j)(this, UO, null)), this._indexOfRefraction = ((0, fB.j)(this, fO), 1.5), JB.set(this, (0, fB.j)(this, kO, 1.5)), this._volumeIndexOfRefraction = ((0, fB.j)(this, dO), (0, fB.j)(this, KO, -1)), this._invertRefractionY = ((0, fB.j)(this, uO), !1), MB.set(this, (0, fB.j)(this, mO, !1)), this._linkRefractionWithTransparency = ((0, fB.j)(this, IO), !1), PB.set(this, (0, fB.j)(this, FO, !1)), this.minimumThickness = ((0, fB.j)(this, iO), (0, fB.j)(this, LO, 0)), this.maximumThickness = ((0, fB.j)(this, gO), (0, fB.j)(this, rO, 1)), this.useThicknessAsDepth = ((0, fB.j)(this, XO), (0, fB.j)(this, wO, !1)), this.tintColor = ((0, fB.j)(this, EO), (0, fB.j)(this, cO, TB.c.White())), this.tintColorAtDistance = ((0, fB.j)(this, hO), (0, fB.j)(this, aO, 1)), this.dispersion = ((0, fB.j)(this, eO), (0, fB.j)(this, TO, 0)), this.diffusionDistance = ((0, fB.j)(this, bO), (0, fB.j)(this, CO, TB.c.White())), this._useMaskFromThicknessTexture = ((0, fB.j)(this, HO), !1), zB.set(this, (0, fB.j)(this, vO, !1)), this._refractionIntensityTexture = ((0, fB.j)(this, sO), null), lB.set(this, (0, fB.j)(this, xO, null)), this._translucencyIntensityTexture = ((0, fB.j)(this, tO), null), pB.set(this, (0, fB.j)(this, BG, null)), this.translucencyColor = ((0, fB.j)(this, OG), (0, fB.j)(this, GG, null)), this._translucencyColorTexture = ((0, fB.j)(this, YG), null), qB.set(this, (0, fB.j)(this, DG, null)), this._useGltfStyleTextures = ((0, fB.j)(this, QG), !0), ZB.set(this, (0, fB.j)(this, oG, !0)), this.applyAlbedoAfterSubSurface = ((0, fB.j)(this, jG), (0, fB.j)(this, yG, BB.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, fB.j)(this, JG), (0, fB.j)(this, MG, BB.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, fB.j)(this, PG), this._scene = NB.JF(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = NB._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = NB._dirtyCallbacks[32]
        }
        isReadyForSubMesh(BB, OB) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (BB._areTexturesDirty && OB.texturesEnabled) {
            if (this._thicknessTexture && vB.d.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && vB.d.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && vB.d.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && vB.d.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const BB = this._getRefractionTexture(OB);
            if (BB && vB.d.RefractionTextureEnabled && !BB.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(BB, OB) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return BB.SUBSURFACE = !1, BB.SS_DISPERSION = !1, BB.SS_TRANSLUCENCY = !1, BB.SS_SCATTERING = !1, BB.SS_REFRACTION = !1, BB.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, BB.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, BB.SS_THICKNESSANDMASK_TEXTURE = !1, BB.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, BB.SS_HAS_THICKNESS = !1, BB.SS_REFRACTIONINTENSITY_TEXTURE = !1, BB.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, BB.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, BB.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, BB.SS_REFRACTIONMAP_3D = !1, BB.SS_REFRACTIONMAP_OPPOSITEZ = !1, BB.SS_LODINREFRACTIONALPHA = !1, BB.SS_GAMMAREFRACTION = !1, BB.SS_RGBDREFRACTION = !1, BB.SS_LINEARSPECULARREFRACTION = !1, BB.SS_LINKREFRACTIONTOTRANSPARENCY = !1, BB.SS_ALBEDOFORREFRACTIONTINT = !1, BB.SS_ALBEDOFORTRANSLUCENCYTINT = !1, BB.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, BB.SS_USE_THICKNESS_AS_DEPTH = !1, BB.SS_USE_GLTF_TEXTURES = !1, BB.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, BB.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, BB.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(BB.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (BB._areTexturesDirty) {
            if (BB.SUBSURFACE = !0, BB.SS_DISPERSION = this._isDispersionEnabled, BB.SS_TRANSLUCENCY = this._isTranslucencyEnabled, BB.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, BB.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, BB.SS_SCATTERING = this._isScatteringEnabled, BB.SS_THICKNESSANDMASK_TEXTURE = !1, BB.SS_REFRACTIONINTENSITY_TEXTURE = !1, BB.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, BB.SS_HAS_THICKNESS = !1, BB.SS_USE_GLTF_TEXTURES = !1, BB.SS_REFRACTION = !1, BB.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, BB.SS_REFRACTIONMAP_3D = !1, BB.SS_GAMMAREFRACTION = !1, BB.SS_RGBDREFRACTION = !1, BB.SS_LINEARSPECULARREFRACTION = !1, BB.SS_REFRACTIONMAP_OPPOSITEZ = !1, BB.SS_LODINREFRACTIONALPHA = !1, BB.SS_LINKREFRACTIONTOTRANSPARENCY = !1, BB.SS_ALBEDOFORREFRACTIONTINT = !1, BB.SS_ALBEDOFORTRANSLUCENCYTINT = !1, BB.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, BB.SS_USE_THICKNESS_AS_DEPTH = !1, BB.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, BB.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, BB._areTexturesDirty && OB.texturesEnabled && (this._thicknessTexture && vB.d.ThicknessTextureEnabled && (0, xB.ab)(this._thicknessTexture, BB, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && vB.d.RefractionIntensityTextureEnabled && (0, xB.ab)(this._refractionIntensityTexture, BB, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && vB.d.TranslucencyIntensityTextureEnabled && (0, xB.ab)(this._translucencyIntensityTexture, BB, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && vB.d.TranslucencyColorTextureEnabled && ((0, xB.ab)(this._translucencyColorTexture, BB, "SS_TRANSLUCENCYCOLOR_TEXTURE"), BB.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), BB.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, BB.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, BB.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, BB.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && OB.texturesEnabled) {
              const GB = this._getRefractionTexture(OB);
              GB && vB.d.RefractionTextureEnabled && (BB.SS_REFRACTION = !0, BB.SS_REFRACTIONMAP_3D = GB.isCube, BB.SS_GAMMAREFRACTION = GB.gammaSpace, BB.SS_RGBDREFRACTION = GB.isRGBD, BB.SS_LINEARSPECULARREFRACTION = GB.linearSpecularLOD, BB.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && GB.isCube ? !GB.invertZ : GB.invertZ, BB.SS_LODINREFRACTIONALPHA = GB.lodLevelInAlpha, BB.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, BB.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, BB.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = GB.isCube && GB.boundingBoxSize, BB.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (BB.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(BB, OB, GB, YB) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) BB.updateFloat2("vThicknessParam", 0, 0);
            else {
              YB.getRenderingMesh().getWorldMatrix().decompose(XB.k.Xp[0]);
              const OB = Math.max(Math.abs(XB.k.Xp[0].x), Math.abs(XB.k.Xp[0].y), Math.abs(XB.k.Xp[0].z));
              BB.updateFloat2("vThicknessParam", this.minimumThickness * OB, (this.maximumThickness - this.minimumThickness) * OB)
            }
        }
        bindForSubMesh(BB, OB, GB, YB) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const DB = YB.materialDefines,
            QB = this._material.isFrozen,
            oB = this._material.realTimeFiltering,
            jB = DB.LODBASEDMICROSFURACE,
            yB = this._getRefractionTexture(OB);
          if (!BB.useUbo || !QB || !BB.isSync) {
            if (this._thicknessTexture && vB.d.ThicknessTextureEnabled && (BB.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, xB.F)(this._thicknessTexture, BB, "thickness")), this._refractionIntensityTexture && vB.d.RefractionIntensityTextureEnabled && DB.SS_REFRACTIONINTENSITY_TEXTURE && (BB.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, xB.F)(this._refractionIntensityTexture, BB, "refractionIntensity")), this._translucencyColorTexture && vB.d.TranslucencyColorTextureEnabled && DB.SS_TRANSLUCENCYCOLOR_TEXTURE && (BB.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, xB.F)(this._translucencyColorTexture, BB, "translucencyColor")), this._translucencyIntensityTexture && vB.d.TranslucencyIntensityTextureEnabled && DB.SS_TRANSLUCENCYINTENSITY_TEXTURE && (BB.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, xB.F)(this._translucencyIntensityTexture, BB, "translucencyIntensity")), yB && vB.d.RefractionTextureEnabled) {
              BB.TBB("refractionMatrix", yB.getRefractionTextureMatrix());
              let OB = 1;
              yB.isCube || yB.depth && (OB = yB.depth);
              const GB = yB.getSize().width,
                YB = this.volumeIndexOfRefraction;
              if (BB.updateFloat4("vRefractionInfos", yB.level, 1 / YB, OB, this._invertRefractionY ? -1 : 1), BB.updateFloat4("vRefractionMicrosurfaceInfos", GB, yB.lodGenerationScale, yB.lodGenerationOffset, 1 / this.indexOfRefraction), oB && BB.updateFloat2("vRefractionFilteringInfo", GB, Math.log2(GB)), yB.boundingBoxSize) {
                const OB = yB;
                BB.updateVector3("vRefractionPosition", OB.boundingBoxPosition), BB.updateVector3("vRefractionSize", OB.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && BB.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), BB.updateColor3("vDiffusionDistance", this.diffusionDistance), BB.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), BB.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), BB.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), BB.updateFloat("dispersion", this.dispersion)
          }
          OB.texturesEnabled && (this._thicknessTexture && vB.d.ThicknessTextureEnabled && BB.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && vB.d.RefractionIntensityTextureEnabled && DB.SS_REFRACTIONINTENSITY_TEXTURE && BB.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && vB.d.TranslucencyIntensityTextureEnabled && DB.SS_TRANSLUCENCYINTENSITY_TEXTURE && BB.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && vB.d.TranslucencyColorTextureEnabled && DB.SS_TRANSLUCENCYCOLOR_TEXTURE && BB.setTexture("translucencyColorSampler", this._translucencyColorTexture), yB && vB.d.RefractionTextureEnabled && (jB ? BB.setTexture("refractionSampler", yB) : (BB.setTexture("refractionSampler", yB._lodTextureMid || yB), BB.setTexture("refractionSamplerLow", yB._lodTextureLow || yB), BB.setTexture("refractionSamplerHigh", yB._lodTextureHigh || yB))))
        }
        _getRefractionTexture(BB) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? BB.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(BB) {
          vB.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && BB.push(this._refractionTexture)
        }
        hasTexture(BB) {
          return this._thicknessTexture === BB || (this._refractionTexture === BB || (this._refractionIntensityTexture === BB || (this._translucencyIntensityTexture === BB || this._translucencyColorTexture === BB)))
        }
        hasRenderTargetTextures() {
          return !!(vB.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
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
        addFallbacks(BB, OB, GB) {
          return BB.SS_SCATTERING && OB.addFallback(GB++, "SS_SCATTERING"), BB.SS_TRANSLUCENCY && OB.addFallback(GB++, "SS_TRANSLUCENCY"), GB
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
      }, OB = new WeakMap, GB = new WeakMap, YB = new WeakMap, DB = new WeakMap, QB = new WeakMap, oB = new WeakMap, jB = new WeakMap, yB = new WeakMap, JB = new WeakMap, MB = new WeakMap, PB = new WeakMap, zB = new WeakMap, lB = new WeakMap, pB = new WeakMap, qB = new WeakMap, ZB = new WeakMap, (() => {
        const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(GO[Symbol.metadata] ?? null) : void 0;
        NB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], RB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], WB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], AB = [(0, kB.L)(), (0, kB.g)("_markScenePrePassDirty")], VB = [(0, kB.L)()], SB = [(0, kB.L)()], nB = [(0, kB.L)()], UB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], dB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], KB = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], uB = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], mB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], IB = [(0, kB.L)()], FB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], iB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], LB = [(0, kB.L)()], gB = [(0, kB.L)()], rB = [(0, kB.L)()], wB = [(0, kB.n)()], EB = [(0, kB.L)()], hB = [(0, kB.L)()], aB = [(0, kB.n)()], eB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], bB = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], CB = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], HB = [(0, kB.n)()], sB = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], tB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], BO = [(0, kB.L)()], OO = [(0, kB.L)()], (0, fB.h)(BB, null, NB, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isRefractionEnabled" in BB,
            get: BB => BB.isRefractionEnabled,
            set: (BB, OB) => {
              BB.isRefractionEnabled = OB
            }
          },
          metadata: OB
        }, YO, DO), (0, fB.h)(BB, null, RB, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isTranslucencyEnabled" in BB,
            get: BB => BB.isTranslucencyEnabled,
            set: (BB, OB) => {
              BB.isTranslucencyEnabled = OB
            }
          },
          metadata: OB
        }, QO, oO), (0, fB.h)(BB, null, WB, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isDispersionEnabled" in BB,
            get: BB => BB.isDispersionEnabled,
            set: (BB, OB) => {
              BB.isDispersionEnabled = OB
            }
          },
          metadata: OB
        }, yO, JO), (0, fB.h)(BB, null, AB, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isScatteringEnabled" in BB,
            get: BB => BB.isScatteringEnabled,
            set: (BB, OB) => {
              BB.isScatteringEnabled = OB
            }
          },
          metadata: OB
        }, MO, PO), (0, fB.h)(BB, null, UB, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAlbedoToTintRefraction" in BB,
            get: BB => BB.useAlbedoToTintRefraction,
            set: (BB, OB) => {
              BB.useAlbedoToTintRefraction = OB
            }
          },
          metadata: OB
        }, RO, WO), (0, fB.h)(BB, null, dB, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAlbedoToTintTranslucency" in BB,
            get: BB => BB.useAlbedoToTintTranslucency,
            set: (BB, OB) => {
              BB.useAlbedoToTintTranslucency = OB
            }
          },
          metadata: OB
        }, AO, VO), (0, fB.h)(BB, null, KB, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "thicknessTexture" in BB,
            get: BB => BB.thicknessTexture,
            set: (BB, OB) => {
              BB.thicknessTexture = OB
            }
          },
          metadata: OB
        }, SO, nO), (0, fB.h)(BB, null, uB, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "refractionTexture" in BB,
            get: BB => BB.refractionTexture,
            set: (BB, OB) => {
              BB.refractionTexture = OB
            }
          },
          metadata: OB
        }, UO, fO), (0, fB.h)(BB, null, mB, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "indexOfRefraction" in BB,
            get: BB => BB.indexOfRefraction,
            set: (BB, OB) => {
              BB.indexOfRefraction = OB
            }
          },
          metadata: OB
        }, kO, dO), (0, fB.h)(BB, null, FB, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: BB => "invertRefractionY" in BB,
            get: BB => BB.invertRefractionY,
            set: (BB, OB) => {
              BB.invertRefractionY = OB
            }
          },
          metadata: OB
        }, mO, IO), (0, fB.h)(BB, null, iB, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: BB => "linkRefractionWithTransparency" in BB,
            get: BB => BB.linkRefractionWithTransparency,
            set: (BB, OB) => {
              BB.linkRefractionWithTransparency = OB
            }
          },
          metadata: OB
        }, FO, iO), (0, fB.h)(BB, null, eB, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useMaskFromThicknessTexture" in BB,
            get: BB => BB.useMaskFromThicknessTexture,
            set: (BB, OB) => {
              BB.useMaskFromThicknessTexture = OB
            }
          },
          metadata: OB
        }, vO, sO), (0, fB.h)(BB, null, bB, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "refractionIntensityTexture" in BB,
            get: BB => BB.refractionIntensityTexture,
            set: (BB, OB) => {
              BB.refractionIntensityTexture = OB
            }
          },
          metadata: OB
        }, xO, tO), (0, fB.h)(BB, null, CB, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "translucencyIntensityTexture" in BB,
            get: BB => BB.translucencyIntensityTexture,
            set: (BB, OB) => {
              BB.translucencyIntensityTexture = OB
            }
          },
          metadata: OB
        }, BG, OG), (0, fB.h)(BB, null, sB, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "translucencyColorTexture" in BB,
            get: BB => BB.translucencyColorTexture,
            set: (BB, OB) => {
              BB.translucencyColorTexture = OB
            }
          },
          metadata: OB
        }, DG, QG), (0, fB.h)(BB, null, tB, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: BB => "useGltfStyleTextures" in BB,
            get: BB => BB.useGltfStyleTextures,
            set: (BB, OB) => {
              BB.useGltfStyleTextures = OB
            }
          },
          metadata: OB
        }, oG, jG), (0, fB.h)(null, null, VB, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: BB => "_scatteringDiffusionProfileIndex" in BB,
            get: BB => BB._scatteringDiffusionProfileIndex,
            set: (BB, OB) => {
              BB._scatteringDiffusionProfileIndex = OB
            }
          },
          metadata: OB
        }, zO, lO), (0, fB.h)(null, null, SB, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "refractionIntensity" in BB,
            get: BB => BB.refractionIntensity,
            set: (BB, OB) => {
              BB.refractionIntensity = OB
            }
          },
          metadata: OB
        }, pO, qO), (0, fB.h)(null, null, nB, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "translucencyIntensity" in BB,
            get: BB => BB.translucencyIntensity,
            set: (BB, OB) => {
              BB.translucencyIntensity = OB
            }
          },
          metadata: OB
        }, ZO, NO), (0, fB.h)(null, null, IB, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "_volumeIndexOfRefraction" in BB,
            get: BB => BB._volumeIndexOfRefraction,
            set: (BB, OB) => {
              BB._volumeIndexOfRefraction = OB
            }
          },
          metadata: OB
        }, KO, uO), (0, fB.h)(null, null, LB, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "minimumThickness" in BB,
            get: BB => BB.minimumThickness,
            set: (BB, OB) => {
              BB.minimumThickness = OB
            }
          },
          metadata: OB
        }, LO, gO), (0, fB.h)(null, null, gB, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "maximumThickness" in BB,
            get: BB => BB.maximumThickness,
            set: (BB, OB) => {
              BB.maximumThickness = OB
            }
          },
          metadata: OB
        }, rO, XO), (0, fB.h)(null, null, rB, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: BB => "useThicknessAsDepth" in BB,
            get: BB => BB.useThicknessAsDepth,
            set: (BB, OB) => {
              BB.useThicknessAsDepth = OB
            }
          },
          metadata: OB
        }, wO, EO), (0, fB.h)(null, null, wB, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintColor" in BB,
            get: BB => BB.tintColor,
            set: (BB, OB) => {
              BB.tintColor = OB
            }
          },
          metadata: OB
        }, cO, hO), (0, fB.h)(null, null, EB, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintColorAtDistance" in BB,
            get: BB => BB.tintColorAtDistance,
            set: (BB, OB) => {
              BB.tintColorAtDistance = OB
            }
          },
          metadata: OB
        }, aO, eO), (0, fB.h)(null, null, hB, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: BB => "dispersion" in BB,
            get: BB => BB.dispersion,
            set: (BB, OB) => {
              BB.dispersion = OB
            }
          },
          metadata: OB
        }, TO, bO), (0, fB.h)(null, null, aB, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "diffusionDistance" in BB,
            get: BB => BB.diffusionDistance,
            set: (BB, OB) => {
              BB.diffusionDistance = OB
            }
          },
          metadata: OB
        }, CO, HO), (0, fB.h)(null, null, HB, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "translucencyColor" in BB,
            get: BB => BB.translucencyColor,
            set: (BB, OB) => {
              BB.translucencyColor = OB
            }
          },
          metadata: OB
        }, GG, YG), (0, fB.h)(null, null, BO, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: BB => "applyAlbedoAfterSubSurface" in BB,
            get: BB => BB.applyAlbedoAfterSubSurface,
            set: (BB, OB) => {
              BB.applyAlbedoAfterSubSurface = OB
            }
          },
          metadata: OB
        }, yG, JG), (0, fB.h)(null, null, OO, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: BB => "legacyTranslucency" in BB,
            get: BB => BB.legacyTranslucency,
            set: (BB, OB) => {
              BB.legacyTranslucency = OB
            }
          },
          metadata: OB
        }, MG, PG), OB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OB
        })
      })(), BB.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, BB.DEFAULT_LEGACY_TRANSLUCENCY = !1, BB
    })();
    var JO = GB(41358),
      MO = GB(41333),
      PO = GB(41368),
      zO = GB(41372),
      lO = GB(41381),
      pO = GB(41385),
      qO = GB(41392),
      ZO = GB(41399),
      NO = GB(40890);
    const RO = {
      effect: null,
      subMesh: null
    };
    class WO extends((0, qO.b)((0, pO.e)(EB.c))) {}
    class AO extends((0, bB.f)(WO)) {
      constructor(BB) {
        super(BB), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class VO extends((0, ZO.d)(HB.d)) {}
    let SO = (() => {
      var BB, OB;
      let YB, DB = VO,
        oB = [],
        jB = [];
      return BB = class extends DB {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(BB) {
          this._realTimeFiltering = BB, this.DYB(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(BB) {
          this._realTimeFilteringQuality = BB, this.DYB(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, fB.c)(this, OB, "f")
        }
        set debugMode(BB) {
          (0, fB.d)(this, OB, BB, "f")
        }
        constructor(GB, YB) {
          super(GB, YB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || BB.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new XB.t(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = BB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = TB.c.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new TB.c(0, 0, 0), this._albedoColor = new TB.c(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new TB.c(1, 1, 1), this._reflectionColor = new TB.c(1, 1, 1), this._emissiveColor = new TB.c(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = BB.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new KB.d(16), this._globalAmbientColor = new TB.c(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, OB.set(this, (0, fB.j)(this, oB, 0)), this.debugLimit = ((0, fB.j)(this, jB), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new aB(this), this.clearCoat = new BO(this), this.iridescence = new GO(this), this.anisotropy = new DO(this), this.sheen = new oO(this), this.subSurface = new yO(this), this.detailMap = new JO.b(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), vB.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = iB(this.JF()), this.prePassConfiguration = new eB.c
        }
        get hasRenderTargetTextures() {
          return !!(vB.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
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
        isReadyForSubMesh(BB, OB, GB) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const YB = OB._drawWrapper;
          if (YB.effect && this.isFrozen && YB._wasPreviouslyReady && YB._wasPreviouslyUsingInstances === GB) return !0;
          OB.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), OB.materialDefines = new AO(this._eventInfo.defineNames));
          const DB = OB.materialDefines;
          if (this._isReadyForSubMesh(OB)) return !0;
          const QB = this.JF(),
            oB = QB.Lp();
          if (DB._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, QB.texturesEnabled)) {
            if (this._albedoTexture && vB.d.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && vB.d.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && vB.d.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && vB.d.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && vB.d.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const BB = this._getReflectionTexture();
            if (BB && vB.d.ReflectionTextureEnabled) {
              if (!BB.isReadyOrNotBlocking()) return !1;
              if (BB.irradianceTexture) {
                if (!BB.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!BB.sphericalPolynomial && BB.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && vB.d.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && vB.d.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (vB.d.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (oB.getCaps().standardDerivatives && this._bumpTexture && vB.d.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && vB.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = DB, this._eventInfo.subMesh = OB, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (DB._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (DB.AREALIGHTUSED || DB.CLUSTLIGHT_BATCH)
            for (let PB = 0; PB < BB.lightSources.length; PB++)
              if (!BB.lightSources[PB]._isReady()) return !1;
          if (oB.getCaps().standardDerivatives || BB.isVerticesDataPresent(wB.h.NormalKind) || (BB.createNormals(!0), dB.b.Warn("PBRMaterial: Normals have been created for the mesh: " + BB.name)), !(0, xB.e)(QB, BB, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const jB = OB.effect,
            yB = DB._areLightsDisposed,
            JB = this._prepareEffect(BB, OB.getRenderingMesh(), DB, this.onCompiled, this.onError, GB, null);
          let MB = !1;
          if (JB)
            if (this._onEffectCreatedObservable && (RO.effect = JB, RO.subMesh = OB, this._onEffectCreatedObservable.notifyObservers(RO)), this.allowShaderHotSwapping && jB && !JB.isReady()) {
              if (DB.markAsUnprocessed(), MB = this.isFrozen, yB) return DB._areLightsDisposed = !0, !1
            } else QB.resetCachedMaterial(), OB.setEffect(JB, DB, this._materialContext);
          return !(!OB.effect || !OB.effect.isReady()) && (DB._renderId = QB.getRenderId(), YB._wasPreviouslyReady = !MB, YB._wasPreviouslyUsingInstances = !!GB, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(OB, GB, YB) {
          let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            jB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(OB, GB, YB, oB, jB), !YB.isDirty) return null;
          YB.markAsProcessed();
          const yB = this.JF().Lp(),
            JB = new sB.c;
          let MB = 0;
          YB.USESPHERICALINVERTEX && JB.addFallback(MB++, "USESPHERICALINVERTEX"), YB.FOG && JB.addFallback(MB, "FOG"), YB.SPECULARAA && JB.addFallback(MB, "SPECULARAA"), YB.POINTSIZE && JB.addFallback(MB, "POINTSIZE"), YB.LOGARITHMICDEPTH && JB.addFallback(MB, "LOGARITHMICDEPTH"), YB.PARALLAX && JB.addFallback(MB, "PARALLAX"), YB.PARALLAX_RHS && JB.addFallback(MB, "PARALLAX_RHS"), YB.PARALLAXOCCLUSION && JB.addFallback(MB++, "PARALLAXOCCLUSION"), YB.ENVIRONMENTBRDF && JB.addFallback(MB++, "ENVIRONMENTBRDF"), YB.TANGENT && JB.addFallback(MB++, "TANGENT"), YB.BUMP && JB.addFallback(MB++, "BUMP"), MB = (0, xB.J)(YB, JB, this._maxSimultaneousLights, MB), YB.SPECULARTERM && JB.addFallback(MB++, "SPECULARTERM"), YB.USESPHERICALFROMREFLECTIONMAP && JB.addFallback(MB++, "USESPHERICALFROMREFLECTIONMAP"), YB.USEIRRADIANCEMAP && JB.addFallback(MB++, "USEIRRADIANCEMAP"), YB.LIGHTMAP && JB.addFallback(MB++, "LIGHTMAP"), YB.NORMAL && JB.addFallback(MB++, "NORMAL"), YB.AMBIENT && JB.addFallback(MB++, "AMBIENT"), YB.EMISSIVE && JB.addFallback(MB++, "EMISSIVE"), YB.VERTEXCOLOR && JB.addFallback(MB++, "VERTEXCOLOR"), YB.MORPHTARGETS && JB.addFallback(MB++, "MORPHTARGETS"), YB.MULTIVIEW && JB.addFallback(0, "MULTIVIEW");
          const PB = [wB.h.PositionKind];
          YB.NORMAL && PB.push(wB.h.NormalKind), YB.TANGENT && PB.push(wB.h.TangentKind);
          for (let BB = 1; BB <= 6; ++BB) YB["UV" + BB] && PB.push(`uv${1===BB?"":BB}`);
          YB.VERTEXCOLOR && PB.push(wB.h.ColorKind), (0, xB.M)(PB, OB, YB, JB), (0, xB.P)(PB, YB), (0, xB.R)(PB, OB, YB), (0, xB.L)(PB, OB, YB);
          let zB = "pbr";
          const lB = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            pB = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, xB.mb)(lB, pB, !0);
          const qB = ["Material", "Scene", "Mesh"],
            ZB = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: YB.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = JB, this._eventInfo.fallbackRank = MB, this._eventInfo.defines = YB, this._eventInfo.uniforms = lB, this._eventInfo.attributes = PB, this._eventInfo.samplers = pB, this._eventInfo.uniformBuffersNames = qB, this._eventInfo.customCode = void 0, this._eventInfo.mesh = OB, this._eventInfo.indexParameters = ZB, this._callbackPluginEventGeneric(128, this._eventInfo), lO.d.AddUniformsAndSamplers(lB, pB), eB.c.AddUniforms(lB), eB.c.AddSamplers(pB), (0, MO.e)(lB), this._useVertexPulling) {
            const BB = GB?.geometry;
            BB && (this._vertexPullingMetadata = (0, PO.e)(BB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, OB) => {
              lB.push(`vp_${OB}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          CB.d && (CB.d.PrepareUniforms(lB, YB), CB.d.PrepareSamplers(pB, YB)), (0, xB.nb)({
            uniformsNames: lB,
            uniformBuffersNames: qB,
            samplers: pB,
            defines: YB,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const NB = {};
          this.customShaderNameResolve && (zB = this.customShaderNameResolve(zB, lB, qB, pB, YB, PB, NB));
          const RB = YB.toString(),
            WB = yB.createEffect(zB, {
              attributes: PB,
              uniformsNames: lB,
              uniformBuffersNames: qB,
              samplers: pB,
              defines: RB,
              fallbacks: JB,
              onCompiled: DB,
              onError: QB,
              indexParameters: ZB,
              processFinalCode: NB.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: YB.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: BB._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, yB);
          return this._eventInfo.customCode = void 0, WB
        }
        _prepareDefines(OB, GB, YB) {
          let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const oB = GB.hasThinInstances,
            jB = this.JF(),
            yB = jB.Lp();
          (0, xB.$)(jB, OB, YB, !0, this._maxSimultaneousLights, this._disableLighting), YB._needNormals = !0, (0, xB.db)(jB, YB);
          const JB = this.needAlphaBlendingForMesh(OB) && this.JF().useOrderIndependentTransparency;
          if ((0, xB.jb)(jB, YB, this.canRenderToMRT && !JB), (0, xB.gb)(jB, YB, JB), lO.d.PrepareDefines(yB.currentRenderPassId, OB, YB), YB.METALLICWORKFLOW = this.isMetallicWorkflow(), YB._areTexturesDirty) {
            YB._needUVs = !1;
            for (let BB = 1; BB <= 6; ++BB) YB["MAINUV" + BB] = !1;
            if (jB.texturesEnabled) {
              YB.ALBEDODIRECTUV = 0, YB.BASE_WEIGHTDIRECTUV = 0, YB.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, YB.AMBIENTDIRECTUV = 0, YB.OPACITYDIRECTUV = 0, YB.EMISSIVEDIRECTUV = 0, YB.REFLECTIVITYDIRECTUV = 0, YB.MICROSURFACEMAPDIRECTUV = 0, YB.METALLIC_REFLECTANCEDIRECTUV = 0, YB.REFLECTANCEDIRECTUV = 0, YB.BUMPDIRECTUV = 0, YB.LIGHTMAPDIRECTUV = 0, yB.getCaps().textureLOD && (YB.LODBASEDMICROSFURACE = !0), this._albedoTexture && vB.d.DiffuseTextureEnabled ? ((0, xB.ab)(this._albedoTexture, YB, "ALBEDO"), YB.GAMMAALBEDO = this._albedoTexture.gammaSpace) : YB.ALBEDO = !1, this._baseWeightTexture && vB.d.BaseWeightTextureEnabled ? (0, xB.ab)(this._baseWeightTexture, YB, "BASE_WEIGHT") : YB.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && vB.d.BaseDiffuseRoughnessTextureEnabled ? (0, xB.ab)(this._baseDiffuseRoughnessTexture, YB, "BASE_DIFFUSE_ROUGHNESS") : YB.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && vB.d.AmbientTextureEnabled ? ((0, xB.ab)(this._ambientTexture, YB, "AMBIENT"), YB.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : YB.AMBIENT = !1, this._opacityTexture && vB.d.OpacityTextureEnabled ? ((0, xB.ab)(this._opacityTexture, YB, "OPACITY"), YB.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : YB.OPACITY = !1;
              const BB = this._getReflectionTexture(),
                OB = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || yB.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, xB._)(jB, BB, YB, this.realTimeFiltering, this.realTimeFilteringQuality, !OB), this._lightmapTexture && vB.d.LightmapTextureEnabled ? ((0, xB.ab)(this._lightmapTexture, YB, "LIGHTMAP"), YB.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, YB.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, YB.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : YB.LIGHTMAP = !1, this._emissiveTexture && vB.d.EmissiveTextureEnabled ? ((0, xB.ab)(this._emissiveTexture, YB, "EMISSIVE"), YB.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : YB.EMISSIVE = !1, vB.d.SpecularTextureEnabled ? (this._metallicTexture ? ((0, xB.ab)(this._metallicTexture, YB, "REFLECTIVITY"), YB.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, YB.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, YB.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, YB.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, YB.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, xB.ab)(this._reflectivityTexture, YB, "REFLECTIVITY"), YB.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, YB.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, YB.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : YB.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (YB.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, xB.ab)(this._metallicReflectanceTexture, YB, "METALLIC_REFLECTANCE"), YB.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : YB.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, xB.ab)(this._reflectanceTexture, YB, "REFLECTANCE"), YB.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : YB.REFLECTANCE = !1) : (YB.METALLIC_REFLECTANCE = !1, YB.REFLECTANCE = !1), this._microSurfaceTexture ? (0, xB.ab)(this._microSurfaceTexture, YB, "MICROSURFACEMAP") : YB.MICROSURFACEMAP = !1) : (YB.REFLECTIVITY = !1, YB.MICROSURFACEMAP = !1), yB.getCaps().standardDerivatives && this._bumpTexture && vB.d.BumpTextureEnabled && !this._disableBumpMap ? ((0, xB.ab)(this._bumpTexture, YB, "BUMP"), this._useParallax && this._albedoTexture && vB.d.DiffuseTextureEnabled ? (YB.PARALLAX = !0, YB.PARALLAX_RHS = jB.useRightHandedSystem, YB.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : YB.PARALLAX = !1, YB.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (YB.BUMP = !1, YB.PARALLAX = !1, YB.PARALLAX_RHS = !1, YB.PARALLAXOCCLUSION = !1, YB.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && vB.d.ReflectionTextureEnabled ? (YB.ENVIRONMENTBRDF = !0, YB.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (YB.ENVIRONMENTBRDF = !1, YB.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? YB.ALPHAFROMALBEDO = !0 : YB.ALPHAFROMALBEDO = !1
            }
            YB.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === BB.LIGHTFALLOFF_STANDARD ? (YB.USEPHYSICALLIGHTFALLOFF = !1, YB.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === BB.LIGHTFALLOFF_GLTF ? (YB.USEPHYSICALLIGHTFALLOFF = !1, YB.USEGLTFLIGHTFALLOFF = !0) : (YB.USEPHYSICALLIGHTFALLOFF = !0, YB.USEGLTFLIGHTFALLOFF = !1), YB.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? YB.TWOSIDEDLIGHTING = !0 : YB.TWOSIDEDLIGHTING = !1, YB.MIRRORED = !!jB._mirroredCameraPosition, YB.SPECULARAA = yB.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(YB._areTexturesDirty || YB._areMiscDirty) && (YB.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, YB.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, YB.ALPHABLEND = this.needAlphaBlendingForMesh(OB), YB.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, YB.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), YB._areTexturesDirty && (YB.TEXTURE_REPETITION_MODE = yB.version > 1 || yB.isWebGPU ? this.textureRepetitionMode : 0), YB._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(YB), YB.FORCENORMALFORWARD = this._forceNormalForward, YB.RADIANCEOCCLUSION = this._useRadianceOcclusion, YB.HORIZONOCCLUSION = this._useHorizonOcclusion, YB._areMiscDirty && ((0, xB.cb)(OB, jB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(OB), YB, this._applyDecalMapAfterDetailMap, this._useVertexPulling, GB, this._isVertexOutputInvariant), YB.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !OB.isVerticesDataPresent(wB.h.NormalKind), YB.DEBUGMODE = this._debugMode), (0, xB.Y)(jB, yB, this, YB, !!DB, QB, oB), this._eventInfo.defines = YB, this._eventInfo.mesh = OB, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, xB.X)(OB, YB, !0, !0, !0, this._transparencyMode !== BB.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(BB, OB, GB) {
          const YB = {
            clipPlane: !1,
            useInstances: !1,
            ...GB
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const GB = new AO(this._eventInfo.defineNames),
              DB = this._prepareEffect(BB, BB, GB, void 0, void 0, YB.useInstances, YB.clipPlane);
            this._onEffectCreatedObservable && (RO.effect = DB, RO.subMesh = null, this._onEffectCreatedObservable.notifyObservers(RO)), DB.isReady() ? OB && OB(this) : DB.onCompileObservable.add((() => {
              OB && OB(this)
            }))
          })()
        }
        buildUniformLayout() {
          const BB = this._uniformBuffer;
          BB.addUniform("vAlbedoInfos", 2), BB.addUniform("vBaseWeightInfos", 2), BB.addUniform("vBaseDiffuseRoughnessInfos", 2), BB.addUniform("vAmbientInfos", 4), BB.addUniform("vOpacityInfos", 2), BB.addUniform("vEmissiveInfos", 2), BB.addUniform("vLightmapInfos", 2), BB.addUniform("vReflectivityInfos", 3), BB.addUniform("vMicroSurfaceSamplerInfos", 2), BB.addUniform("vBumpInfos", 3), BB.addUniform("albedoMatrix", 16), BB.addUniform("baseWeightMatrix", 16), BB.addUniform("baseDiffuseRoughnessMatrix", 16), BB.addUniform("ambientMatrix", 16), BB.addUniform("opacityMatrix", 16), BB.addUniform("emissiveMatrix", 16), BB.addUniform("lightmapMatrix", 16), BB.addUniform("reflectivityMatrix", 16), BB.addUniform("microSurfaceSamplerMatrix", 16), BB.addUniform("bumpMatrix", 16), BB.addUniform("vTangentSpaceParams", 2), BB.addUniform("vAlbedoColor", 4), BB.addUniform("baseWeight", 1), BB.addUniform("baseDiffuseRoughness", 1), BB.addUniform("vLightingIntensity", 4), BB.addUniform("pointSize", 1), BB.addUniform("vReflectivityColor", 4), BB.addUniform("vEmissiveColor", 3), BB.addUniform("vAmbientColor", 3), BB.addUniform("vDebugMode", 2), BB.addUniform("vMetallicReflectanceFactors", 4), BB.addUniform("vMetallicReflectanceInfos", 2), BB.addUniform("metallicReflectanceMatrix", 16), BB.addUniform("vReflectanceInfos", 2), BB.addUniform("reflectanceMatrix", 16), BB.addUniform("cameraInfo", 4), BB.addUniform("vTextureRepetitionHexTilingParams", 4), (0, xB.lb)(BB, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(BB, OB, GB) {
          const YB = this.JF(),
            DB = GB.materialDefines;
          if (!DB) return;
          const QB = GB.effect;
          if (!QB) return;
          this._activeEffect = QB, OB.getMeshUniformBuffer().bindToEffect(QB, "Mesh"), OB.transferToEffect(BB);
          const oB = YB.Lp();
          this._uniformBuffer.bindToEffect(QB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, YB, OB, BB, this.isFrozen), lO.d.Bind(oB.currentRenderPassId, this._activeEffect, OB, BB, this);
          const jB = YB.activeCamera;
          jB ? this._uniformBuffer.updateFloat4("cameraInfo", jB.minZ, jB.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const yB = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", yB[0], yB[1], yB[2], yB[3]), this._eventInfo.subMesh = GB, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), DB.OBJECTSPACE_NORMALMAP && (BB.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const JB = this._mustRebind(YB, QB, GB, OB.visibility),
            MB = oB._features.needToAlwaysBindUniformBuffers;
          (0, xB.i)(OB, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, PO.c)(this._activeEffect, this._vertexPullingMetadata);
          let PB = null;
          const zB = this._uniformBuffer;
          if (JB) {
            if (this.bindViewProjection(QB), PB = this._getReflectionTexture(), !zB.useUbo || !this.isFrozen || !zB.isSync || GB._drawWrapper._forceRebindOnNextCall) {
              if (YB.texturesEnabled && (this._albedoTexture && vB.d.DiffuseTextureEnabled && (zB.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, xB.F)(this._albedoTexture, zB, "albedo")), this._baseWeightTexture && vB.d.BaseWeightTextureEnabled && (zB.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, xB.F)(this._baseWeightTexture, zB, "baseWeight")), this._baseDiffuseRoughnessTexture && vB.d.BaseDiffuseRoughnessTextureEnabled && (zB.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, xB.F)(this._baseDiffuseRoughnessTexture, zB, "baseDiffuseRoughness")), this._ambientTexture && vB.d.AmbientTextureEnabled && (zB.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, xB.F)(this._ambientTexture, zB, "ambient")), this._opacityTexture && vB.d.OpacityTextureEnabled && (zB.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, xB.F)(this._opacityTexture, zB, "opacity")), this._emissiveTexture && vB.d.EmissiveTextureEnabled && (zB.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, xB.F)(this._emissiveTexture, zB, "emissive")), this._lightmapTexture && vB.d.LightmapTextureEnabled && (zB.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, xB.F)(this._lightmapTexture, zB, "lightmap")), vB.d.SpecularTextureEnabled && (this._metallicTexture ? (zB.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, xB.F)(this._metallicTexture, zB, "reflectivity")) : this._reflectivityTexture && (zB.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, xB.F)(this._reflectivityTexture, zB, "reflectivity")), this._metallicReflectanceTexture && (zB.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, xB.F)(this._metallicReflectanceTexture, zB, "metallicReflectance")), this._reflectanceTexture && DB.REFLECTANCE && (zB.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, xB.F)(this._reflectanceTexture, zB, "reflectance")), this._microSurfaceTexture && (zB.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, xB.F)(this._microSurfaceTexture, zB, "microSurfaceSampler"))), this._bumpTexture && oB.getCaps().standardDerivatives && vB.d.BumpTextureEnabled && !this._disableBumpMap && (zB.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, xB.F)(this._bumpTexture, zB, "bump"), YB._mirroredCameraPosition ? zB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : zB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, xB.o)(YB, DB, zB, this._reflectionColor, PB, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && zB.updateFloat("pointSize", this.pointSize), DB.METALLICWORKFLOW) {
                TB.o.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, TB.o.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const BB = this.subSurface?._indexOfRefraction ?? 1.5,
                  OB = 1;
                TB.o.Color4[0].b = BB;
                const GB = Math.pow((BB - OB) / (BB + OB), 2);
                TB.o.Color4[0].a = GB, zB.updateDirectColor4("vReflectivityColor", TB.o.Color4[0]), zB.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else zB.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              zB.updateColor3("vEmissiveColor", vB.d.EmissiveTextureEnabled ? this._emissiveColor : TB.c.BlackReadOnly), !DB.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? zB.updateColor4("vAlbedoColor", this._albedoColor, 1) : zB.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), zB.updateFloat("baseWeight", this._baseWeight), zB.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * YB.environmentIntensity, this._lightingInfos.w = this._specularIntensity, zB.updateVector4("vLightingIntensity", this._lightingInfos), YB.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), zB.updateColor3("vAmbientColor", this._globalAmbientColor), zB.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            YB.texturesEnabled && (this._albedoTexture && vB.d.DiffuseTextureEnabled && zB.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && vB.d.BaseWeightTextureEnabled && zB.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && vB.d.BaseDiffuseRoughnessTextureEnabled && zB.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && vB.d.AmbientTextureEnabled && zB.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && vB.d.OpacityTextureEnabled && zB.setTexture("opacitySampler", this._opacityTexture), (0, xB.q)(YB, DB, zB, PB, this.realTimeFiltering), DB.ENVIRONMENTBRDF && zB.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && vB.d.EmissiveTextureEnabled && zB.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && vB.d.LightmapTextureEnabled && zB.setTexture("lightmapSampler", this._lightmapTexture), vB.d.SpecularTextureEnabled && (this._metallicTexture ? zB.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && zB.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && zB.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && DB.REFLECTANCE && zB.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && zB.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && oB.getCaps().standardDerivatives && vB.d.BumpTextureEnabled && !this._disableBumpMap && zB.setTexture("bumpSampler", this._bumpTexture)), this.JF().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(OB) && this.JF().depthPeelingRenderer.bind(QB), this._eventInfo.subMesh = GB, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, MO.g)(this._activeEffect, this, YB), this.bindEyePosition(QB)
          } else MB && (this._needToBindSceneUbo = !0);
          !JB && this.isFrozen && !MB || !YB.lightsEnabled || this._disableLighting || (0, xB.t)(YB, OB, this._activeEffect, DB, this._maxSimultaneousLights), !JB && this.isFrozen || ((YB.fogEnabled && OB.applyFog && YB.fogMode !== rB.e.FOGMODE_NONE || PB || this.subSurface.refractionTexture || OB.receiveShadows || DB.PREPASS || DB.CLUSTLIGHT_BATCH) && this.bindView(QB), (0, xB.k)(YB, OB, this._activeEffect, !0), DB.NUM_MORPH_INFLUENCERS && (0, xB.A)(OB, this._activeEffect), DB.BAKED_VERTEX_ANIMATION_TEXTURE && OB.bakedVertexAnimationManager?.bind(QB, DB.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, xB.x)(DB, this._activeEffect, YB)), this._afterBind(OB, this._activeEffect, GB), zB.update()
        }
        getAnimatables() {
          const BB = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && BB.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && BB.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && BB.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && BB.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && BB.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && BB.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && BB.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? BB.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && BB.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && BB.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && BB.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && BB.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && BB.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && BB.push(this._microSurfaceTexture), BB
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.JF().environmentTexture
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
          const BB = this.JF().enableSubSurfaceForPrePass();
          return BB && (BB.enabled = !0), !0
        }
        dispose(BB, OB) {
          this._breakShaderLoadedCheck = !0, OB && (this._environmentBRDFTexture && this.JF().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(BB, OB)
        }
      }, OB = new WeakMap, (() => {
        const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(DB[Symbol.metadata] ?? null) : void 0;
        YB = [(0, kB.g)("_markAllSubMeshesAsMiscDirty")], (0, fB.h)(BB, null, YB, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "debugMode" in BB,
            get: BB => BB.debugMode,
            set: (BB, OB) => {
              BB.debugMode = OB
            }
          },
          metadata: OB
        }, oB, jB), OB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OB
        })
      })(), BB.PBRMATERIAL_OPAQUE = QB.b.MATERIAL_OPAQUE, BB.PBRMATERIAL_ALPHATEST = QB.b.MATERIAL_ALPHATEST, BB.PBRMATERIAL_ALPHABLEND = QB.b.MATERIAL_ALPHABLEND, BB.PBRMATERIAL_ALPHATESTANDBLEND = QB.b.MATERIAL_ALPHATESTANDBLEND, BB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, BB.LIGHTFALLOFF_PHYSICAL = 0, BB.LIGHTFALLOFF_GLTF = 1, BB.LIGHTFALLOFF_STANDARD = 2, BB.ForceGLSL = !1, BB._ShaderLoader = new zO.d((() => [Promise.all([GB.e(626), GB.e(637)]).then((() => GB(64111))), Promise.all([GB.e(631), GB.e(627), GB.e(688), GB.e(640), GB.e(687)]).then((() => GB(64124)))]), (() => [Promise.all([GB.e(645), GB.e(647), GB.e(654)]).then((() => GB(64204))), Promise.all([GB.e(645), GB.e(648), GB.e(691), GB.e(658), GB.e(690)]).then((() => GB(64224)))])), BB
    })();
    Object.getOwnPropertyDescriptor(SO.prototype, "decalMap") || Object.defineProperty(SO.prototype, "decalMap", (0, NO.e)("PBRBaseMaterial", "decalMap")), (0, GB(44978).c)();
    var nO = GB(41022);
    var UO = GB(41097),
      fO = GB(44953),
      kO = GB(40837),
      dO = GB(40849),
      KO = GB(40947);
    let uO = !1;
    const mO = new TB.g,
      IO = new TB.g;
    class FO extends fO.d {
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
          for (let OB = 0; OB < this._textures.length; OB++) this._textures[OB].wrapU = BB
      }
      set wrapV(BB) {
        if (this._textures)
          for (let OB = 0; OB < this._textures.length; OB++) this._textures[OB].wrapV = BB
      }
      constructor(BB, OB, GB, YB, DB, QB) {
        const oB = !(!DB || !DB.generateMipMaps) && DB.generateMipMaps,
          jB = !(!DB || !DB.generateDepthTexture) && DB.generateDepthTexture,
          yB = DB && DB.depthTextureFormat ? DB.depthTextureFormat : 15,
          JB = !DB || void 0 === DB.doNotChangeAspectRatio || DB.doNotChangeAspectRatio,
          MB = !(!DB || !DB.drawOnlyOnFirstAttachmentByDefault) && DB.drawOnlyOnFirstAttachmentByDefault;
        if (super(BB, OB, YB, oB, JB, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), uO || (uO = !0, dO.ThinEngine.prototype.restoreSingleAttachment = function() {
            const BB = this._gl;
            this.bindAttachments([BB.BACK])
          }, dO.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const BB = this._gl;
            this.bindAttachments([BB.COLOR_ATTACHMENT0])
          }, dO.ThinEngine.prototype.buildTextureLayout = function(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const GB = this._gl,
              YB = [];
            if (OB) YB.push(GB.BACK);
            else
              for (let DB = 0; DB < BB.length; DB++) BB[DB] ? YB.push(GB["COLOR_ATTACHMENT" + DB]) : YB.push(GB.NONE);
            return YB
          }, dO.ThinEngine.prototype.bindAttachments = function(BB) {
            const OB = this._gl,
              GB = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, GB)
              for (let YB = 0; YB < BB.length; YB++) BB[YB] !== OB.NONE && GB[YB] && (0, KO.j)(GB[YB].format) && (this._integerMRTAttachmentsMask |= 1 << YB);
            OB.drawBuffers(BB)
          }, dO.ThinEngine.prototype.clearAttachments = function(BB, OB, GB, YB) {
            let DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const oB = this._currentRenderTarget?.textures;
            let jB = !1;
            if (GB && BB && oB)
              for (let yB = 0; yB < OB.length; yB++) {
                const BB = oB[yB];
                if (OB[yB] !== this._gl.NONE && BB && (0, KO.j)(BB.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  jB = !0;
                  break
                }
              }
            if (!jB || !BB || !oB) return this.bindAttachments(OB), void this.clear(BB, GB, YB, DB, QB);
            this.bindAttachments(OB), this._applyColorWriteState();
            for (let yB = 0; yB < OB.length; yB++) {
              const GB = oB[yB];
              if (OB[yB] !== this._gl.NONE && GB) {
                let OB = BB;
                if ((0, KO.j)(GB.format)) {
                  const YB = (0, KO.m)(GB.type);
                  OB = YB ? mO : IO;
                  const DB = YB ? 255 : 1;
                  OB.r = Math.round(BB.r * DB), OB.g = Math.round(BB.g * DB), OB.b = Math.round(BB.b * DB), OB.a = Math.round(BB.a * DB)
                }
                this._clearColorAttachment(yB, OB, GB.format, GB.type)
              }
            }
            if (YB || DB) {
              const BB = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, YB, DB, QB)
              } finally {
                this._integerMRTAttachmentsMask = BB
              }
            }
          }, dO.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              GB = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, BB.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(BB), OB || this.generateMipMapsMultiFramebuffer(BB), GB && (BB._MSAAFramebuffer && this._bindUnboundFramebuffer(BB._framebuffer), GB()), this._bindUnboundFramebuffer(null)
          }, dO.ThinEngine.prototype.createMultipleRenderTarget = function(BB, OB) {
            let GB, YB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              DB = !1,
              QB = !0,
              oB = !1,
              jB = !1,
              yB = 1,
              JB = 1,
              MB = [],
              PB = [],
              zB = [],
              lB = [],
              pB = [],
              qB = [],
              ZB = [],
              NB = [],
              RB = [],
              WB = !1;
            const AB = this._createHardwareRenderTargetWrapper(!0, !1, BB);
            void 0 !== OB && (DB = void 0 !== OB.generateMipMaps && OB.generateMipMaps, QB = void 0 === OB.generateDepthBuffer || OB.generateDepthBuffer, oB = void 0 !== OB.generateStencilBuffer && OB.generateStencilBuffer, jB = void 0 !== OB.generateDepthTexture && OB.generateDepthTexture, yB = OB.YyB ?? 1, JB = OB.samples ?? JB, MB = OB.types || MB, PB = OB.samplingModes || PB, zB = OB.useSRGBBuffers || zB, lB = OB.formats || lB, pB = OB.targetTypes || pB, qB = OB.faceIndex || qB, ZB = OB.layerIndex || ZB, NB = OB.layerCounts || NB, RB = OB.labels || RB, WB = OB.dontCreateTextures ?? !1, this.Pq > 1 && (13 === OB.depthTextureFormat || 17 === OB.depthTextureFormat || 16 === OB.depthTextureFormat || 14 === OB.depthTextureFormat || 18 === OB.depthTextureFormat) && (GB = OB.depthTextureFormat)), void 0 === GB && (GB = oB ? 13 : 14);
            const VB = this._gl,
              SB = this._currentFramebuffer,
              nB = VB.createFramebuffer();
            this._bindUnboundFramebuffer(nB);
            const UB = BB.width ?? BB,
              fB = BB.height ?? BB,
              kB = [],
              KB = [],
              uB = this.Pq > 1 && (13 === GB || 17 === GB || 18 === GB);
            AB.label = OB?.label ?? "MultiRenderTargetWrapper", AB._framebuffer = nB, AB._generateDepthBuffer = jB || QB, AB._generateStencilBuffer = jB ? uB : oB, AB._depthStencilBuffer = this._setupFramebufferDepthAttachments(AB._generateStencilBuffer, AB._generateDepthBuffer, UB, fB, 1, GB), AB._attachments = KB;
            for (let mB = 0; mB < yB; mB++) {
              let BB = PB[mB] || 3,
                OB = MB[mB] || 0,
                GB = zB[mB] || !1;
              const YB = lB[mB] || 5,
                QB = pB[mB] || 3553,
                oB = NB[mB] ?? 1;
              (1 !== OB || this._caps.textureFloatLinearFiltering) && (2 !== OB || this._caps.textureHalfFloatLinearFiltering) || (BB = 1);
              const jB = this._getSamplingParameters(BB, DB);
              1 !== OB || this._caps.textureFloat || (OB = 0, dB.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), GB = GB && this._caps.supportSRGBBuffers && (this.Pq > 1 || this.isWebGPU);
              const yB = this.Pq > 1,
                JB = VB[yB ? "COLOR_ATTACHMENT" + mB : "COLOR_ATTACHMENT" + mB + "_WEBGL"];
              if (KB.push(JB), -1 === QB || WB) continue;
              const qB = new kO.b(this, 6);
              kB[mB] = qB, VB.activeTexture(VB["TEXTURE" + mB]), VB.bindTexture(QB, qB._hardwareTexture.underlyingResource), VB.texParameteri(QB, VB.TEXTURE_MAG_FILTER, jB.mag), VB.texParameteri(QB, VB.TEXTURE_MIN_FILTER, jB.min), VB.texParameteri(QB, VB.TEXTURE_WRAP_S, VB.CLAMP_TO_EDGE), VB.texParameteri(QB, VB.TEXTURE_WRAP_T, VB.CLAMP_TO_EDGE);
              const ZB = this._getRGBABufferInternalSizedFormat(OB, YB, GB),
                SB = this._getInternalFormat(YB),
                nB = this._getWebGLTextureType(OB);
              if (!yB || 35866 !== QB && 32879 !== QB)
                if (34067 === QB) {
                  for (let BB = 0; BB < 6; BB++) VB.texImage2D(VB.TEXTURE_CUBE_MAP_POSITIVE_X + BB, 0, ZB, UB, fB, 0, SB, nB, null);
                  qB.isCube = !0
                } else VB.texImage2D(VB.TEXTURE_2D, 0, ZB, UB, fB, 0, SB, nB, null);
              else 35866 === QB ? qB.is2DArray = !0 : qB.is3D = !0, qB.baseDepth = qB.depth = oB, VB.texImage3D(QB, 0, ZB, UB, fB, oB, 0, SB, nB, null);
              DB && VB.generateMipmap(QB), this._bindTextureDirectly(QB, null), qB.baseWidth = UB, qB.baseHeight = fB, qB.width = UB, qB.height = fB, qB.isReady = !0, qB.samples = 1, qB.generateMipMaps = DB, qB.samplingMode = BB, qB.type = OB, qB._useSRGBBuffer = GB, qB.format = YB, qB.label = RB[mB] ?? AB.label + "-Texture" + mB, this._internalTexturesCache.push(qB)
            }
            if (jB && this._caps.depthTextureExtension && !WB) {
              const BB = new kO.b(this, 14);
              let OB = 5,
                YB = VB.DEPTH_COMPONENT16,
                QB = VB.DEPTH_COMPONENT,
                oB = VB.UNSIGNED_SHORT,
                jB = VB.DEPTH_ATTACHMENT;
              this.Pq < 2 ? YB = VB.DEPTH_COMPONENT : 14 === GB ? (OB = 1, oB = VB.FLOAT, YB = VB.DEPTH_COMPONENT32F) : 18 === GB ? (OB = 0, oB = VB.FLOAT_32_UNSIGNED_INT_24_8_REV, YB = VB.DEPTH32F_STENCIL8, QB = VB.DEPTH_STENCIL, jB = VB.DEPTH_STENCIL_ATTACHMENT) : 16 === GB ? (OB = 0, oB = VB.UNSIGNED_INT, YB = VB.DEPTH_COMPONENT24, jB = VB.DEPTH_ATTACHMENT) : 13 !== GB && 17 !== GB || (OB = 12, oB = VB.UNSIGNED_INT_24_8, YB = VB.DEPTH24_STENCIL8, QB = VB.DEPTH_STENCIL, jB = VB.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(VB.TEXTURE_2D, BB, !0), VB.texParameteri(VB.TEXTURE_2D, VB.TEXTURE_MAG_FILTER, VB.NEAREST), VB.texParameteri(VB.TEXTURE_2D, VB.TEXTURE_MIN_FILTER, VB.NEAREST), VB.texParameteri(VB.TEXTURE_2D, VB.TEXTURE_WRAP_S, VB.CLAMP_TO_EDGE), VB.texParameteri(VB.TEXTURE_2D, VB.TEXTURE_WRAP_T, VB.CLAMP_TO_EDGE), VB.texImage2D(VB.TEXTURE_2D, 0, YB, UB, fB, 0, QB, oB, null), VB.framebufferTexture2D(VB.FRAMEBUFFER, jB, VB.TEXTURE_2D, BB._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(VB.TEXTURE_2D, null), AB._depthStencilTexture = BB, AB._depthStencilTextureWithStencil = uB, BB.baseWidth = UB, BB.baseHeight = fB, BB.width = UB, BB.height = fB, BB.isReady = !0, BB.samples = 1, BB.generateMipMaps = DB, BB.samplingMode = 1, BB.format = GB, BB.type = OB, BB.label = AB.label + "-DepthStencil", kB[yB] = BB, this._internalTexturesCache.push(BB)
            }
            if (AB.setTextures(kB), YB && VB.drawBuffers(KB), this._bindUnboundFramebuffer(SB), AB.setLayerAndFaceIndices(ZB, qB), this.resetTextureCache(), WB) {
              if (JB > 1) {
                const BB = VB.createFramebuffer();
                if (!BB) throw new Error("Unable to create multi sampled framebuffer");
                AB._samples = JB, AB._MSAAFramebuffer = BB, yB > 0 && YB && (this._bindUnboundFramebuffer(BB), VB.drawBuffers(KB), this._bindUnboundFramebuffer(SB))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(AB, JB, YB);
            return AB
          }, dO.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(BB, OB) {
            let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.Pq < 2 || !BB) return 1;
            if (BB.samples === OB) return OB;
            const YB = this._gl;
            OB = Math.min(OB, this.getCaps().maxMSAASamples), BB._depthStencilBuffer && (YB.deleteRenderbuffer(BB._depthStencilBuffer), BB._depthStencilBuffer = null), BB._MSAAFramebuffer && (YB.deleteFramebuffer(BB._MSAAFramebuffer), BB._MSAAFramebuffer = null);
            const DB = BB._attachments.length;
            for (let oB = 0; oB < DB; oB++) {
              const OB = BB.textures[oB]._hardwareTexture;
              OB?.releaseMSAARenderBuffers()
            }
            if (OB > 1 && "function" === typeof YB.renderbufferStorageMultisample) {
              const QB = YB.createFramebuffer();
              if (!QB) throw new Error("Unable to create multi sampled framebuffer");
              BB._MSAAFramebuffer = QB, this._bindUnboundFramebuffer(QB);
              const oB = [];
              for (let GB = 0; GB < DB; GB++) {
                const DB = BB.textures[GB],
                  QB = DB._hardwareTexture,
                  jB = YB[this.Pq > 1 ? "COLOR_ATTACHMENT" + GB : "COLOR_ATTACHMENT" + GB + "_WEBGL"],
                  yB = this._createRenderBuffer(DB.width, DB.height, OB, -1, this._getRGBABufferInternalSizedFormat(DB.type, DB.format, DB._useSRGBBuffer), jB);
                if (!yB) throw new Error("Unable to create multi sampled framebuffer");
                QB.addMSAARenderBuffer(yB), DB.samples = OB, oB.push(jB)
              }
              GB && YB.drawBuffers(oB)
            } else this._bindUnboundFramebuffer(BB._framebuffer);
            const QB = BB._depthStencilTexture ? BB._depthStencilTexture.format : void 0;
            return BB._depthStencilBuffer = this._setupFramebufferDepthAttachments(BB._generateStencilBuffer, BB._generateDepthBuffer, BB.width, BB.height, OB, QB), this._bindUnboundFramebuffer(null), BB._samples = OB, OB
          }, dO.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(BB) {
            const OB = BB,
              GB = this._gl;
            if (OB.isMulti)
              for (let YB = 0; YB < OB._attachments.length; YB++) {
                const BB = OB.textures[YB];
                !BB?.generateMipMaps || BB?.isCube || BB?.is3D || (this._bindTextureDirectly(GB.TEXTURE_2D, BB, !0), GB.generateMipmap(GB.TEXTURE_2D), this._bindTextureDirectly(GB.TEXTURE_2D, null))
              }
          }, dO.ThinEngine.prototype.resolveMultiFramebuffer = function(BB) {
            const OB = BB,
              GB = this._gl;
            if (!OB._MSAAFramebuffer || !OB.isMulti) return;
            let YB = OB.resolveMSAAColors ? GB.COLOR_BUFFER_BIT : 0;
            YB |= OB._generateDepthBuffer && OB.resolveMSAADepth ? GB.DEPTH_BUFFER_BIT : 0, YB |= OB._generateStencilBuffer && OB.resolveMSAAStencil ? GB.STENCIL_BUFFER_BIT : 0;
            const DB = OB._attachments,
              QB = DB.length;
            GB.bindFramebuffer(GB.READ_FRAMEBUFFER, OB._MSAAFramebuffer), GB.bindFramebuffer(GB.DRAW_FRAMEBUFFER, OB._framebuffer);
            for (let oB = 0; oB < QB; oB++) {
              const BB = OB.textures[oB];
              for (let OB = 0; OB < QB; OB++) DB[OB] = GB.NONE;
              DB[oB] = GB[this.Pq > 1 ? "COLOR_ATTACHMENT" + oB : "COLOR_ATTACHMENT" + oB + "_WEBGL"], GB.readBuffer(DB[oB]), GB.drawBuffers(DB), GB.blitFramebuffer(0, 0, BB.width, BB.height, 0, 0, BB.width, BB.height, YB, GB.NEAREST)
            }
            for (let oB = 0; oB < QB; oB++) DB[oB] = GB[this.Pq > 1 ? "COLOR_ATTACHMENT" + oB : "COLOR_ATTACHMENT" + oB + "_WEBGL"];
            GB.drawBuffers(DB), GB.bindFramebuffer(this._gl.FRAMEBUFFER, OB._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = QB;
        const PB = [],
          zB = [],
          lB = [],
          pB = [],
          qB = [],
          ZB = [],
          NB = [],
          RB = [];
        this._initTypes(GB, PB, zB, lB, pB, qB, ZB, NB, RB, DB);
        const WB = !DB || void 0 === DB.generateDepthBuffer || DB.generateDepthBuffer,
          AB = !(!DB || void 0 === DB.generateStencilBuffer) && DB.generateStencilBuffer,
          VB = DB && DB.samples ? DB.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: zB,
          generateMipMaps: oB,
          generateDepthBuffer: WB,
          generateStencilBuffer: AB,
          generateDepthTexture: jB,
          depthTextureFormat: yB,
          types: PB,
          YyB: GB,
          useSRGBBuffers: lB,
          samples: VB,
          formats: pB,
          targetTypes: qB,
          faceIndex: ZB,
          layerIndex: NB,
          layerCounts: RB,
          labels: QB,
          label: BB
        }, this._count = GB, this._drawOnlyOnFirstAttachmentByDefault = MB, GB > 0 && (this._createInternalTextures(), this._createTextures(QB))
      }
      _initTypes(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB) {
        for (let MB = 0; MB < BB; MB++) JB && JB.types && void 0 !== JB.types[MB] ? OB.push(JB.types[MB]) : OB.push(JB && JB.defaultType ? JB.defaultType : 0), JB && JB.samplingModes && void 0 !== JB.samplingModes[MB] ? GB.push(JB.samplingModes[MB]) : GB.push(uB.e.BILINEAR_SAMPLINGMODE), JB && JB.useSRGBBuffers && void 0 !== JB.useSRGBBuffers[MB] ? YB.push(JB.useSRGBBuffers[MB]) : YB.push(!1), JB && JB.formats && void 0 !== JB.formats[MB] ? DB.push(JB.formats[MB]) : DB.push(5), JB && JB.targetTypes && void 0 !== JB.targetTypes[MB] ? QB.push(JB.targetTypes[MB]) : QB.push(3553), JB && JB.faceIndex && void 0 !== JB.faceIndex[MB] ? oB.push(JB.faceIndex[MB]) : oB.push(0), JB && JB.layerIndex && void 0 !== JB.layerIndex[MB] ? jB.push(JB.layerIndex[MB]) : jB.push(0), JB && JB.layerCounts && void 0 !== JB.layerCounts[MB] ? yB.push(JB.layerCounts[MB]) : yB.push(1)
      }
      _createInternaTextureIndexMapping() {
        const BB = {},
          OB = [];
        if (!this._renderTarget) return OB;
        const GB = this._renderTarget.textures;
        for (let YB = 0; YB < GB.length; YB++) {
          const DB = GB[YB];
          if (!DB) continue;
          const QB = BB[DB.uniqueId];
          void 0 !== QB ? OB[YB] = QB : BB[DB.uniqueId] = YB
        }
        return OB
      }
      _rebuild() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || BB) return;
        const YB = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), OB && (this._releaseTextures(), this._createTextures(GB));
        const DB = this._renderTarget.textures;
        for (let QB = 0; QB < DB.length; QB++) {
          const BB = this._textures[QB];
          void 0 !== YB[QB] && this._renderTarget.setTexture(DB[YB[QB]], QB), BB._texture = DB[QB], BB._texture && (BB._noMipmap = !BB._texture.useMipMaps, BB._useSRGBBuffer = BB._texture._useSRGBBuffer)
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
        const OB = this._renderTarget.textures;
        this._textures = [];
        for (let GB = 0; GB < OB.length; GB++) {
          const YB = new uB.e(null, this.JF());
          BB?.[GB] && (YB.name = BB[GB]), YB._texture = OB[GB], YB._texture && (YB._noMipmap = !YB._texture.useMipMaps, YB._useSRGBBuffer = YB._texture._useSRGBBuffer), this._textures.push(YB)
        }
      }
      setInternalTexture(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === OB && (this._texture = BB), this.renderTarget.setTexture(BB, OB, GB), this.textures[OB] || (this.textures[OB] = new uB.e(null, this.JF()), this.textures[OB].name = this._textureNames?.[OB] ?? this.textures[OB].name), this.textures[OB]._texture = BB, this.textures[OB]._noMipmap = !BB.useMipMaps, this.textures[OB]._useSRGBBuffer = BB._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[OB] = BB.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[OB] = BB.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[OB] = BB._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[OB])) {
          let GB;
          GB = BB.is2DArray ? 35866 : BB.isCube ? 34067 : BB.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[OB] = GB
        }
      }
      setLayerAndFaceIndex(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[BB] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[BB] = OB), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[BB] = GB), this.renderTarget.setLayerAndFaceIndex(BB, OB, GB))
      }
      setLayerAndFaceIndices(BB, OB) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = BB, this._multiRenderTargetOptions.faceIndex = OB, this.renderTarget.setLayerAndFaceIndices(BB, OB))
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
      updateCount(BB, OB, GB) {
        this._multiRenderTargetOptions.YyB = BB, this._count = BB;
        const YB = [],
          DB = [],
          QB = [],
          oB = [],
          jB = [],
          yB = [],
          JB = [],
          MB = [];
        this._textureNames = GB, this._initTypes(BB, YB, DB, QB, oB, jB, yB, JB, MB, OB), this._multiRenderTargetOptions.types = YB, this._multiRenderTargetOptions.samplingModes = DB, this._multiRenderTargetOptions.useSRGBBuffers = QB, this._multiRenderTargetOptions.formats = oB, this._multiRenderTargetOptions.targetTypes = jB, this._multiRenderTargetOptions.faceIndex = yB, this._multiRenderTargetOptions.layerIndex = JB, this._multiRenderTargetOptions.layerCounts = MB, this._multiRenderTargetOptions.labels = GB, this._rebuild(!1, !0, GB)
      }
      _unbindFrameBuffer(BB, OB) {
        this._renderTarget && BB.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(OB)
        }))
      }
      dispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), BB ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const BB = this._renderTarget?.textures;
        if (BB) {
          for (let OB = BB.length - 1; OB >= 0; OB--) this._textures[OB]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var iO = GB(41183);
    class LO {
      constructor(BB) {
        this.name = iO.b.NAME_GEOMETRYBUFFERRENDERER, this.eq = BB
      }
      register() {
        this.eq._gatherRenderTargetsStage.registerStep(iO.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(BB) {
        this.eq._geometryBufferRenderer && BB.push(this.eq._geometryBufferRenderer.getGBuffer())
      }
    }
    let gO = !1;
    var rO;
    ! function(BB) {
      BB[BB.Small = 0] = "Small", BB[BB.Medium = 1] = "Medium", BB[BB.Large = 2] = "Large", BB[BB.ExtraLarge = 3] = "ExtraLarge"
    }(rO || (rO = {}));
    const XO = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      wO = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class EO {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(BB) {
        if (BB && this._enableMeshBlendTag && !this._scene.Lp().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
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
      _forceTextureType(BB, OB) {
        BB === EO.POSITION_TEXTURE_TYPE ? (this._positionIndex = OB, this._enablePosition = !0) : BB === EO.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = OB, this._enableVelocity = !0) : BB === EO.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = OB, this._enableVelocityLinear = !0) : BB === EO.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = OB, this._enableReflectivity = !0) : BB === EO.DEPTH_TEXTURE_TYPE ? (this._depthIndex = OB, this._enableDepth = !0) : BB === EO.NORMAL_TEXTURE_TYPE ? (this._normalIndex = OB, this._enableNormal = !0) : BB === EO.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = OB, this._enableScreenspaceDepth = !0) : BB === EO.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = OB, this._enableIrradiance = !0) : BB === EO.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = OB, this._enableObjectId = !0) : BB === EO.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = OB, this._enableMeshBlendTag = !0)
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
          case EO.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case EO.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case EO.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case EO.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case EO.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case EO.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case EO.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case EO.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case EO.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case EO.MESH_BLEND_TAG_TEXTURE_TYPE:
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
          const BB = this._scene.Lp(),
            OB = Math.min(BB.getCaps().maxDrawBuffers ?? 1, 8),
            GB = this._assignRenderTargetIndices()[0] + 1;
          if (BB.getCaps().drawBuffersExtension && GB > OB) throw new Error(`GeometryBufferRenderer: ${GB} color attachments were requested, but this engine supports at most ${OB}`)
        }
        this._enableObjectId = BB, BB || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(BB) {
        if (this._enableMeshBlendTag !== BB) {
          if (BB) {
            const BB = this._scene.Lp();
            if (! function(BB) {
                return "NATIVE" !== BB.shaderPlatformName && (BB.isWebGPU || 2 === BB.Pq)
              }(BB)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !BB.isWebGPU && !BB.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const OB = Math.min(BB.getCaps().maxDrawBuffers ?? 1, 8),
                GB = this._assignRenderTargetIndices()[0] + 1;
              if (BB.getCaps().drawBuffersExtension && GB > OB) throw new Error(`GeometryBufferRenderer: ${GB} color attachments were requested, but this engine supports at most ${OB}`)
            }
          }
          this._enableMeshBlendTag = BB, BB || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get eq() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          YB = arguments.length > 3 ? arguments[3] : void 0;
        var DB;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new TB.g(0, 0, 0, 0), this._clearDepthColor = new TB.g(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = BB, this._ratioOrDimensions = OB, this._useUbo = BB.Lp().supportsUniformBuffers, this._depthFormat = GB, this._textureTypesAndFormats = YB || {}, this._initShaderSourceAsync(), DB = EO, gO || (gO = !0, Object.defineProperty(rB.e.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(BB) {
            BB && BB.isSupported && (this._geometryBufferRenderer = BB)
          },
          enumerable: !0,
          configurable: !0
        }), rB.e.prototype.enableGeometryBufferRenderer = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            GB = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new DB(this, BB, OB, GB), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, rB.e.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, DB._SceneComponentInitialization = BB => {
          let OB = BB._getComponent(iO.b.NAME_GEOMETRYBUFFERRENDERER);
          OB || (OB = new LO(BB), BB.pDB(OB))
        }), EO._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.Lp().isWebGPU && !EO.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([GB.e(646).then((() => GB(64410))), Promise.all([GB.e(645), GB.e(657)]).then((() => GB(64414)))])) : await Promise.all([GB.e(629).then((() => GB(64416))), GB.e(628).then((() => GB(64420)))]), this._shadersLoaded = !0
      }
      isReady(BB, OB) {
        if (!this._shadersLoaded) return !1;
        const GB = BB.cp();
        if (GB && GB.disableDepthWrite) return !1;
        if (function(BB) {
            return BB._isGaussianSplatting || "GaussianSplattingMesh" === (OB = BB.getClassName()) || "GaussianSplattingStream" === OB;
            var OB
          }(BB.getMesh())) return !1;
        const YB = [],
          DB = [wB.h.PositionKind],
          QB = BB.getMesh();
        QB.isVerticesDataPresent(wB.h.NormalKind) && (YB.push("#define HAS_NORMAL_ATTRIBUTE"), DB.push(wB.h.NormalKind));
        let oB = !1,
          jB = !1;
        if (GB) {
          let BB = !1;
          if (GB.needAlphaTestingForMesh(QB) && GB.getAlphaTestTexture() && (YB.push("#define ALPHATEST"), YB.push(`#define ALPHATEST_UV${GB.getAlphaTestTexture().coordinatesIndex+1}`), BB = !0), (GB.bumpTexture || GB.normalTexture || GB.geometryNormalTexture) && vB.d.BumpTextureEnabled) {
            const OB = GB.bumpTexture || GB.normalTexture || GB.geometryNormalTexture;
            YB.push("#define BUMP"), YB.push(`#define BUMP_UV${OB.coordinatesIndex+1}`), BB = !0
          }
          if (this._enableReflectivity) {
            let OB = !1;
            if ("PBRMetallicRoughnessMaterial" === GB.getClassName()) GB.metallicRoughnessTexture && (YB.push("#define ORMTEXTURE"), YB.push(`#define REFLECTIVITY_UV${GB.metallicRoughnessTexture.coordinatesIndex+1}`), YB.push("#define METALLICWORKFLOW"), BB = !0, OB = !0), null != GB.metallic && (YB.push("#define METALLIC"), YB.push("#define METALLICWORKFLOW"), OB = !0), null != GB.roughness && (YB.push("#define ROUGHNESS"), YB.push("#define METALLICWORKFLOW"), OB = !0), OB && (GB.baseTexture && (YB.push("#define ALBEDOTEXTURE"), YB.push(`#define ALBEDO_UV${GB.baseTexture.coordinatesIndex+1}`), GB.baseTexture.gammaSpace && YB.push("#define GAMMAALBEDO"), BB = !0), GB.baseColor && YB.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === GB.getClassName()) GB.specularGlossinessTexture ? (YB.push("#define SPECULARGLOSSINESSTEXTURE"), YB.push(`#define REFLECTIVITY_UV${GB.specularGlossinessTexture.coordinatesIndex+1}`), BB = !0, GB.specularGlossinessTexture.gammaSpace && YB.push("#define GAMMAREFLECTIVITYTEXTURE")) : GB.specularColor && YB.push("#define REFLECTIVITYCOLOR"), null != GB.glossiness && YB.push("#define GLOSSINESS");
            else if ("PBRMaterial" === GB.getClassName()) GB.metallicTexture && (YB.push("#define ORMTEXTURE"), YB.push(`#define REFLECTIVITY_UV${GB.metallicTexture.coordinatesIndex+1}`), YB.push("#define METALLICWORKFLOW"), BB = !0, OB = !0), null != GB.metallic && (YB.push("#define METALLIC"), YB.push("#define METALLICWORKFLOW"), OB = !0), null != GB.roughness && (YB.push("#define ROUGHNESS"), YB.push("#define METALLICWORKFLOW"), OB = !0), OB ? (GB.albedoTexture && (YB.push("#define ALBEDOTEXTURE"), YB.push(`#define ALBEDO_UV${GB.albedoTexture.coordinatesIndex+1}`), GB.albedoTexture.gammaSpace && YB.push("#define GAMMAALBEDO"), BB = !0), GB.albedoColor && YB.push("#define ALBEDOCOLOR")) : (GB.reflectivityTexture ? (YB.push("#define SPECULARGLOSSINESSTEXTURE"), YB.push(`#define REFLECTIVITY_UV${GB.reflectivityTexture.coordinatesIndex+1}`), GB.reflectivityTexture.gammaSpace && YB.push("#define GAMMAREFLECTIVITYTEXTURE"), BB = !0) : GB.reflectivityColor && YB.push("#define REFLECTIVITYCOLOR"), null != GB.microSurface && YB.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === GB.getClassName()) GB.specularTexture && (YB.push("#define REFLECTIVITYTEXTURE"), YB.push(`#define REFLECTIVITY_UV${GB.specularTexture.coordinatesIndex+1}`), GB.specularTexture.gammaSpace && YB.push("#define GAMMAREFLECTIVITYTEXTURE"), BB = !0), GB.specularColor && YB.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === GB.getClassName()) {
              const OB = GB;
              YB.push("#define METALLIC"), YB.push("#define ROUGHNESS"), OB._useRoughnessFromMetallicTextureGreen && OB.baseMetalnessTexture ? (YB.push("#define ORMTEXTURE"), YB.push(`#define REFLECTIVITY_UV${OB.baseMetalnessTexture.coordinatesIndex+1}`), BB = !0) : OB.baseMetalnessTexture ? (YB.push("#define METALLIC_TEXTURE"), YB.push(`#define METALLIC_UV${OB.baseMetalnessTexture.coordinatesIndex+1}`), BB = !0) : OB.specularRoughnessTexture && (YB.push("#define ROUGHNESS_TEXTURE"), YB.push(`#define ROUGHNESS_UV${OB.specularRoughnessTexture.coordinatesIndex+1}`), BB = !0), OB.baseColorTexture && (YB.push("#define ALBEDOTEXTURE"), YB.push(`#define ALBEDO_UV${OB.baseColorTexture.coordinatesIndex+1}`), OB.baseColorTexture.gammaSpace && YB.push("#define GAMMAALBEDO"), BB = !0), OB.baseColor && YB.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (YB.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === GB.getClassName())) {
            const OB = GB;
            OB.subsurfaceWeight > 0 && OB.subsurfaceWeightTexture && (YB.push("#define SUBSURFACE_WEIGHT"), YB.push(`#define SUBSURFACEWEIGHT_UV${OB.subsurfaceWeightTexture.coordinatesIndex+1}`), BB = !0), OB.transmissionWeight > 0 && OB.transmissionWeightTexture && (YB.push("#define TRANSMISSION_WEIGHT"), YB.push(`#define TRANSMISSIONWEIGHT_UV${OB.transmissionWeightTexture.coordinatesIndex+1}`), BB = !0)
          }
          BB && (YB.push("#define NEED_UV"), QB.isVerticesDataPresent(wB.h.UVKind) && (DB.push(wB.h.UVKind), YB.push("#define UV1"), oB = !0), QB.isVerticesDataPresent(wB.h.UV2Kind) && (DB.push(wB.h.UV2Kind), YB.push("#define UV2"), jB = !0))
        }
        if (this._enableDepth && (YB.push("#define DEPTH"), YB.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (YB.push("#define NORMAL"), YB.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (YB.push("#define POSITION"), YB.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (YB.push("#define VELOCITY"), YB.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(QB) && YB.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (YB.push("#define VELOCITY_LINEAR"), YB.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(QB) && YB.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (YB.push("#define REFLECTIVITY"), YB.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (YB.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), YB.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          YB.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), YB.push("#define IRRADIANCE");
          const BB = this._scene;
          if (BB.environmentTexture) {
            const OB = {};
            let DB = !1,
              QB = 0;
            "OpenPBRMaterial" !== GB.getClassName() && "StandardMaterial" !== GB.getClassName() && "PBRMetallicRoughnessMaterial" !== GB.getClassName() && "PBRSpecularGlossinessMaterial" !== GB.getClassName() && "PBRMaterial" !== GB.getClassName() || (DB = !!GB.realtimeFiltering, QB = GB.realtimeFilteringQuality || 0), (0, xB._)(BB, BB.environmentTexture, OB, DB, QB, !0);
            for (const BB in OB) OB[BB] && YB.push("#define " + BB);
            OB.USEIRRADIANCEMAP || YB.push("#define SPHERICAL_HARMONICS");
            const oB = BB.postProcessRenderPipelineManager.supportedPipelines.find((BB => "IBLShadowsRenderPipeline" === BB.getClassName()));
            if (oB) {
              const BB = oB;
              BB._getAccumulatedTexture() && (YB.push("#define IBL_SHADOW_TEXTURE"), BB.coloredShadows && YB.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (YB.push("#define OBJECT_ID"), YB.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (YB.push("#define MESH_BLEND_TAG"), YB.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && YB.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && YB.push("#define ENCODE_NORMAL"), QB.useBones && QB.computeBonesUsingShaders && QB.skeleton ? (DB.push(wB.h.MatricesIndicesKind), DB.push(wB.h.MatricesWeightsKind), QB.numBoneInfluencers > 4 && (DB.push(wB.h.MatricesIndicesExtraKind), DB.push(wB.h.MatricesWeightsExtraKind)), YB.push("#define NUM_BONE_INFLUENCERS " + QB.numBoneInfluencers), YB.push("#define BONETEXTURE " + QB.skeleton.isUsingTextureForMatrices), YB.push("#define BonesPerMesh " + (QB.skeleton.bones.length + 1))) : (YB.push("#define NUM_BONE_INFLUENCERS 0"), YB.push("#define BONETEXTURE false"), YB.push("#define BonesPerMesh 0"));
        const yB = QB.morphTargetManager ? (0, xB.V)(QB.morphTargetManager, YB, DB, QB, !0, !0, !1, oB, jB, !1) : 0;
        OB && (YB.push("#define INSTANCES"), (0, xB.rb)(DB, this._enableVelocity || this._enableVelocityLinear), BB.getRenderingMesh().hasThinInstances && YB.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? YB.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : YB.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, MO.o)(GB, this._scene, YB);
        const JB = this._scene.Lp(),
          MB = BB._getDrawWrapper(void 0, !0),
          PB = MB.defines,
          zB = YB.join("\n");
        return PB !== zB && MB.setEffect(JB.createEffect("geometry", {
          attributes: DB,
          uniformsNames: wO,
          samplers: XO,
          defines: zB,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: yB
          },
          shaderLanguage: this.shaderLanguage
        }, JB), zB), MB.effect.isReady()
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
          this._scene.Lp().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.eq.Lp()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.eq.Lp().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const BB = [],
          OB = [];
        let GB = 0;
        return this._enableDepth && (this._depthIndex = GB, GB++, BB.push("gBuffer_Depth"), OB.push(this._textureTypesAndFormats[EO.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = GB, GB++, BB.push("gBuffer_Normal"), OB.push(this._textureTypesAndFormats[EO.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = GB, GB++, BB.push("gBuffer_Position"), OB.push(this._textureTypesAndFormats[EO.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = GB, GB++, BB.push("gBuffer_Velocity"), OB.push(this._textureTypesAndFormats[EO.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = GB, GB++, BB.push("gBuffer_VelocityLinear"), OB.push(this._textureTypesAndFormats[EO.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = GB, GB++, BB.push("gBuffer_Reflectivity"), OB.push(this._textureTypesAndFormats[EO.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = GB, GB++, BB.push("gBuffer_ScreenspaceDepth"), OB.push(this._textureTypesAndFormats[EO.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = GB, GB++, BB.push("gBuffer_Irradiance"), OB.push(this._textureTypesAndFormats[EO.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = GB, GB++, BB.push("gBuffer_ObjectId"), OB.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = GB, GB++, BB.push("gBuffer_MeshBlendTag"), OB.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [GB, BB, OB]
      }
      _createRenderTargets() {
        const BB = this._scene.Lp(),
          [OB, GB, YB] = this._assignRenderTargetIndices(),
          DB = Math.min(BB.getCaps().maxDrawBuffers ?? 1, 8);
        if (BB.getCaps().drawBuffersExtension && OB > DB) throw new Error(`GeometryBufferRenderer: ${OB} color attachments were requested, but this engine supports at most ${DB}`);
        let oB = 0;
        BB._caps.textureFloat && BB._caps.textureFloatLinearFiltering ? oB = 1 : BB._caps.textureHalfFloat && BB._caps.textureHalfFloatLinearFiltering && (oB = 2);
        const jB = this._getRenderTargetDimensions(),
          yB = [],
          JB = [],
          MB = [];
        for (const QB of YB) QB ? (yB.push(QB.textureType), JB.push(QB.textureFormat), MB.push(QB.samplingMode ?? 2)) : (yB.push(oB), JB.push(5), MB.push(2));
        if (this._normalsAreUnsigned = 11 === yB[EO.NORMAL_TEXTURE_TYPE] || 13 === yB[EO.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new FO("gBuffer", jB, OB, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: yB,
            formats: JB,
            samplingModes: MB,
            depthTextureFormat: this._depthFormat
          }, GB.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = uB.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = uB.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const PB = [!0],
          zB = [!1],
          lB = [!0];
        for (let QB = 1; QB < OB; ++QB) PB.push(!0), lB.push(!1), zB.push(!0);
        const pB = BB.buildTextureLayout(PB),
          qB = BB.buildTextureLayout(zB),
          ZB = BB.buildTextureLayout(lB);
        this._multiRenderTarget.onClearObservable.add((BB => {
          const OB = this.useSpecificClearForDepthTexture ? qB : pB;
          BB.clearAttachments(this._clearColor, OB, !0, !0, !0), this.useSpecificClearForDepthTexture && BB.clearAttachments(this._clearDepthColor, ZB, !0, !1, !1), BB.bindAttachments(pB)
        })), this._resizeObserver = BB.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const NB = BB => {
          const OB = BB.getRenderingMesh(),
            GB = BB.getEffectiveMesh(),
            YB = this._scene,
            DB = YB.Lp(),
            oB = BB.cp();
          if (!oB) return;
          if (GB._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[GB.uniqueId] && (this._previousTransformationMatrices[GB.uniqueId] = {
              mP: XB.d.Identity(),
              viewProjection: YB.getTransformMatrix()
            }, OB.skeleton)) {
            const BB = OB.skeleton.getTransformMatrices(OB);
            this._previousBonesTransformationMatrices[OB.uniqueId] = this._copyBonesTransformationMatrices(BB, new Float32Array(BB.length))
          }
          const jB = OB._getInstancesRenderList(BB._id, !!BB.getReplacementMesh());
          if (jB.mustReturn) return;
          const yB = DB.getCaps().instancedArrays && (null !== jB.visibleInstances[BB._id] || OB.hasThinInstances),
            JB = GB.getWorldMatrix();
          if (this.isReady(BB, yB)) {
            const MB = BB._getDrawWrapper();
            if (!MB) return;
            const PB = MB.effect;
            let zB;
            DB.enableEffect(MB), yB || OB._bind(BB, PB, oB.fillMode), this._useUbo ? ((0, xB.E)(PB, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (PB.setMatrix("viewProjection", YB.getTransformMatrix()), PB.setMatrix("view", YB.getViewMatrix()), this._scene.bindEyePosition(PB, "vEyePosition"));
            if (OB._instanceDataStorage.isFrozen || !oB.backFaceCulling && null === oB.sideOrientation) zB = OB._effectiveSideOrientation;
            else {
              const BB = GB._getWorldMatrixDeterminant();
              zB = oB._getEffectiveOrientation(OB), BB < 0 && (zB = zB === QB.b.ClockWiseSideOrientation ? QB.b.CounterClockWiseSideOrientation : QB.b.ClockWiseSideOrientation)
            }
            if (oB._preBind(MB, zB), oB.needAlphaTestingForMesh(GB)) {
              const BB = oB.getAlphaTestTexture();
              BB && (PB.setTexture("diffuseSampler", BB), PB.setMatrix("diffuseMatrix", BB.getTextureMatrix()), PB.setFloat("alphaCutOff", oB.alphaCutOff ?? .4))
            }
            if ((oB.bumpTexture || oB.normalTexture || oB.geometryNormalTexture) && YB.Lp().getCaps().standardDerivatives && vB.d.BumpTextureEnabled) {
              const BB = oB.bumpTexture || oB.normalTexture || oB.geometryNormalTexture;
              PB.setFloat3("vBumpInfos", BB.coordinatesIndex, 1 / BB.level, oB.parallaxScaleBias), PB.setMatrix("bumpMatrix", BB.getTextureMatrix()), PB.setTexture("bumpSampler", BB), PB.setFloat2("vTangentSpaceParams", oB.invertNormalMapX ? -1 : 1, oB.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === oB.getClassName()) null !== oB.metallicRoughnessTexture && (PB.setTexture("reflectivitySampler", oB.metallicRoughnessTexture), PB.setMatrix("reflectivityMatrix", oB.metallicRoughnessTexture.getTextureMatrix())), null !== oB.metallic && PB.setFloat("metallic", oB.metallic), null !== oB.roughness && PB.setFloat("glossiness", 1 - oB.roughness), null !== oB.baseTexture && (PB.setTexture("albedoSampler", oB.baseTexture), PB.setMatrix("albedoMatrix", oB.baseTexture.getTextureMatrix())), null !== oB.baseColor && PB.setColor3("albedoColor", oB.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === oB.getClassName()) null !== oB.specularGlossinessTexture ? (PB.setTexture("reflectivitySampler", oB.specularGlossinessTexture), PB.setMatrix("reflectivityMatrix", oB.specularGlossinessTexture.getTextureMatrix())) : null !== oB.specularColor && PB.setColor3("reflectivityColor", oB.specularColor), null !== oB.glossiness && PB.setFloat("glossiness", oB.glossiness);
            else if ("PBRMaterial" === oB.getClassName()) null !== oB.metallicTexture && (PB.setTexture("reflectivitySampler", oB.metallicTexture), PB.setMatrix("reflectivityMatrix", oB.metallicTexture.getTextureMatrix())), null !== oB.metallic && PB.setFloat("metallic", oB.metallic), null !== oB.roughness && PB.setFloat("glossiness", 1 - oB.roughness), null !== oB.roughness || null !== oB.metallic || null !== oB.metallicTexture ? (null !== oB.albedoTexture && (PB.setTexture("albedoSampler", oB.albedoTexture), PB.setMatrix("albedoMatrix", oB.albedoTexture.getTextureMatrix())), null !== oB.albedoColor && PB.setColor3("albedoColor", oB.albedoColor)) : (null !== oB.reflectivityTexture ? (PB.setTexture("reflectivitySampler", oB.reflectivityTexture), PB.setMatrix("reflectivityMatrix", oB.reflectivityTexture.getTextureMatrix())) : null !== oB.reflectivityColor && PB.setColor3("reflectivityColor", oB.reflectivityColor), null !== oB.microSurface && PB.setFloat("glossiness", oB.microSurface));
            else if ("StandardMaterial" === oB.getClassName()) null !== oB.specularTexture && (PB.setTexture("reflectivitySampler", oB.specularTexture), PB.setMatrix("reflectivityMatrix", oB.specularTexture.getTextureMatrix())), null !== oB.specularColor && PB.setColor3("reflectivityColor", oB.specularColor);
            else if ("OpenPBRMaterial" === oB.getClassName()) {
              const BB = oB;
              BB._useRoughnessFromMetallicTextureGreen && BB.baseMetalnessTexture ? (PB.setTexture("reflectivitySampler", BB.baseMetalnessTexture), PB.setMatrix("reflectivityMatrix", BB.baseMetalnessTexture.getTextureMatrix())) : BB.baseMetalnessTexture ? (PB.setTexture("metallicSampler", BB.baseMetalnessTexture), PB.setMatrix("metallicMatrix", BB.baseMetalnessTexture.getTextureMatrix())) : BB.specularRoughnessTexture && (PB.setTexture("roughnessSampler", BB.specularRoughnessTexture), PB.setMatrix("roughnessMatrix", BB.specularRoughnessTexture.getTextureMatrix())), PB.setFloat("metallic", BB.baseMetalness), PB.setFloat("glossiness", 1 - BB.specularRoughness), null !== BB.baseColorTexture && (PB.setTexture("albedoSampler", BB.baseColorTexture), PB.setMatrix("albedoMatrix", BB.baseColorTexture.getTextureMatrix())), null !== BB.baseColor && PB.setColor3("albedoColor", BB.baseColor)
            }
            if (this._enableIrradiance && YB.environmentTexture) {
              const BB = YB.environmentTexture,
                OB = YB.postProcessRenderPipelineManager.supportedPipelines.find((BB => "IBLShadowsRenderPipeline" === BB.getClassName()));
              if (OB) {
                const BB = OB._getAccumulatedTexture();
                BB && (PB.setTexture("iblShadowSampler", BB), PB.setFloat2("shadowTextureSize", BB.getSize().width, BB.getSize().height))
              }
              if (PB.setMatrix("reflectionMatrix", BB.getReflectionTextureMatrix()), PB.setFloat2("vReflectionInfos", BB.level * YB.iblIntensity, 0), PB.setTexture("reflectionSampler", BB), BB.irradianceTexture && (PB.setTexture("irradianceSampler", BB.irradianceTexture), BB.irradianceTexture._dominantDirection && PB.setVector3("vReflectionDominantDirection", BB.irradianceTexture._dominantDirection)), BB.sphericalPolynomial) {
                const OB = BB.sphericalPolynomial;
                if (OB.preScaledHarmonics) {
                  const BB = OB.preScaledHarmonics;
                  PB.setVector3("vSphericalL00", BB.l00), PB.setVector3("vSphericalL1_1", BB.l1_1), PB.setVector3("vSphericalL10", BB.l10), PB.setVector3("vSphericalL11", BB.l11), PB.setVector3("vSphericalL2_2", BB.l2_2), PB.setVector3("vSphericalL2_1", BB.l2_1), PB.setVector3("vSphericalL20", BB.l20), PB.setVector3("vSphericalL21", BB.l21), PB.setVector3("vSphericalL22", BB.l22)
                } else PB.setFloat3("vSphericalX", OB.x.x, OB.x.y, OB.x.z), PB.setFloat3("vSphericalY", OB.y.x, OB.y.y, OB.y.z), PB.setFloat3("vSphericalZ", OB.z.x, OB.z.y, OB.z.z), PB.setFloat3("vSphericalXX_ZZ", OB.xx.x - OB.zz.x, OB.xx.y - OB.zz.y, OB.xx.z - OB.zz.z), PB.setFloat3("vSphericalYY_ZZ", OB.yy.x - OB.zz.x, OB.yy.y - OB.zz.y, OB.yy.z - OB.zz.z), PB.setFloat3("vSphericalZZ", OB.zz.x, OB.zz.y, OB.zz.z), PB.setFloat3("vSphericalXY", OB.xy.x, OB.xy.y, OB.xy.z), PB.setFloat3("vSphericalYZ", OB.yz.x, OB.yz.y, OB.yz.z), PB.setFloat3("vSphericalZX", OB.zx.x, OB.zx.y, OB.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === oB.getClassName()) {
                const BB = oB;
                PB.setFloat("vSubsurfaceWeight", BB.subsurfaceWeight), BB.subsurfaceWeightTexture && (PB.setTexture("subsurfaceWeightSampler", BB.subsurfaceWeightTexture), PB.setMatrix("subsurfaceWeightMatrix", BB.subsurfaceWeightTexture.getTextureMatrix())), PB.setFloat("vTransmissionWeight", BB.transmissionWeight), BB.transmissionWeightTexture && (PB.setTexture("transmissionWeightSampler", BB.transmissionWeightTexture), PB.setMatrix("transmissionWeightMatrix", BB.transmissionWeightTexture.getTextureMatrix())), PB.setFloat("vTransmissionScatterAnisotropy", BB.transmissionScatterAnisotropy), PB.setFloat("vSubsurfaceScatterAnisotropy", BB.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, MO.g)(PB, oB, this._scene), OB.useBones && OB.computeBonesUsingShaders && OB.skeleton) {
              const BB = OB.skeleton;
              if (BB.isUsingTextureForMatrices && PB.getUniformIndex("boneTextureInfo") > -1) {
                const GB = BB.getTransformMatrixTexture(OB);
                PB.setTexture("boneSampler", GB), PB.setFloat2("boneTextureInfo", BB._textureWidth, BB._textureHeight)
              } else PB.setMatrices("mBones", OB.skeleton.getTransformMatrices(OB));
              (this._enableVelocity || this._enableVelocityLinear) && PB.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[OB.uniqueId])
            }
            if ((0, xB.A)(OB, PB), OB.morphTargetManager && OB.morphTargetManager.isUsingTextureForTargets && OB.morphTargetManager._bind(PB), (this._enableVelocity || this._enableVelocityLinear) && (PB.setMatrix("previousWorld", this._previousTransformationMatrices[GB.uniqueId].mP), PB.setMatrix("previousViewProjection", this._previousTransformationMatrices[GB.uniqueId].viewProjection)), this._enableObjectId) {
              let BB = OB.uniqueId;
              if (this.objectIdProvider) BB = (0, lO.h)(OB, this.objectIdProvider);
              else if (BB > 16777215) throw new Error(`Invalid geometry object ID ${BB} for mesh "${OB.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              PB.setFloat("objectId", BB)
            }
            if (this._enableMeshBlendTag) {
              const BB = this.meshBlendTagProvider ? (0, lO.g)(OB, this.meshBlendTagProvider) : OB.meshBlendingTag;
              PB.setInt("meshBlendTag", BB)
            }
            yB && OB.hasThinInstances && PB.setMatrix("world", JB), OB._processRendering(GB, BB, PB, oB.fillMode, jB, yB, ((BB, OB) => {
              BB || PB.setMatrix("world", OB)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[GB.uniqueId].mP = JB.clone(), this._previousTransformationMatrices[GB.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), OB.skeleton && this._copyBonesTransformationMatrices(OB.skeleton.getTransformMatrices(OB), this._previousBonesTransformationMatrices[GB.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (OB, GB, YB) => {
          if ((YB || 0 === GB) && OB.iW)
            for (let DB = 0; DB < OB.iW.length; ++DB) {
              const GB = OB.iW[DB],
                YB = GB.cp(),
                QB = GB.getRenderingMesh();
              if (!YB) continue;
              const oB = QB._getInstancesRenderList(GB._id, !!GB.getReplacementMesh()),
                jB = BB.getCaps().instancedArrays && (null !== oB.visibleInstances[GB._id] || QB.hasThinInstances);
              if (!this.isReady(GB, jB)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (OB, GB, YB, DB) => {
          let QB;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.Lp().bindAttachments(this._attachmentsFromPrePass)
          }
          if (DB.length) {
            for (BB.setColorWrite(!1), QB = 0; QB < DB.length; QB++) NB(DB.data[QB]);
            BB.setColorWrite(!0)
          }
          for (QB = 0; QB < OB.length; QB++) NB(OB.data[QB]);
          for (BB.setDepthWrite(!1), QB = 0; QB < GB.length; QB++) NB(GB.data[QB]);
          if (this.renderTransparentMeshes)
            for (QB = 0; QB < YB.length; QB++) NB(YB.data[QB]);
          BB.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const BB = this._scene.Lp();
        return {
          width: Math.max(1, Math.floor(BB.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(BB.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(BB, OB) {
        for (let GB = 0; GB < BB.length; GB++) OB[GB] = BB[GB];
        return OB
      }
    }
    EO.ForceGLSL = !1, EO.DEPTH_TEXTURE_TYPE = 0, EO.NORMAL_TEXTURE_TYPE = 1, EO.POSITION_TEXTURE_TYPE = 2, EO.VELOCITY_TEXTURE_TYPE = 3, EO.REFLECTIVITY_TEXTURE_TYPE = 4, EO.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, EO.VELOCITY_LINEAR_TEXTURE_TYPE = 6, EO.IRRADIANCE_TEXTURE_TYPE = 7, EO.OBJECT_ID_TEXTURE_TYPE = 8, EO.MESH_BLEND_TAG_TEXTURE_TYPE = 9, EO._SceneComponentInitialization = BB => {
      throw (0, NO.j)("GeometryBufferRendererSceneComponent")
    };
    var cO = GB(37823);
    const hO = {
      effect: null,
      subMesh: null
    };

    function aO(BB) {
      if ("number" === typeof BB) return 1;
      if (BB instanceof XB.o) return 2;
      if (BB instanceof XB.r || BB instanceof TB.c) return 3;
      if (BB instanceof XB.t || BB instanceof TB.g) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class eO {
      populateVectorFromLinkedProperties(BB) {
        const OB = aO(BB);
        for (const GB in this.linkedProperties) {
          const BB = this.linkedProperties[GB],
            YB = BB.numComponents;
          if (OB < YB || BB.targetUniformComponentOffset > OB - YB) return void(1 == YB ? dB.b.Error(`Float property ${BB.name} has an offset that is too large.`) : dB.b.Error(`Vector${YB} property ${BB.name} won't fit in Vector${OB} or has an offset that is too large.`));
          "number" === typeof BB.value ? eO._tmpArray[BB.targetUniformComponentOffset] = BB.value : BB.value.toArray(eO._tmpArray, BB.targetUniformComponentOffset)
        }
        BB.OP(eO._tmpArray)
      }
      constructor(BB, OB) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = BB, this.numComponents = OB
      }
    }
    eO._tmpArray = [0, 0, 0, 0];
    class TO {
      constructor(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          QB = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = BB, this.targetUniformName = GB, this.defaultValue = OB, this.value = OB, this.targetUniformComponentNum = YB, this.targetUniformComponentOffset = DB, this.requiredDefine = QB
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : aO(this.defaultValue)
      }
    }
    class bO {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(BB, OB, GB) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = BB, this.samplerPrefix = OB, this.textureDefine = GB
      }
    }
    class CO extends((0, qO.b)((0, pO.e)(EB.c))) {}
    class HO extends(function(BB) {
      return class extends BB {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(CO)) {}
    class vO extends((0, bB.f)(HO)) {
      constructor(BB) {
        super(BB), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class sO extends((0, ZO.d)(HB.d)) {}
    let xO = (() => {
        var BB, OB, YB, DB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB, RB, WB, AB, VB, SB, nB, UB, mB, IB, FB, iB, rB, EB, cB, hB, aB, bB, HB, tB, BO, OO, GO, YO, DO, QO, oO, jO, yO, JO, pO, qO, ZO, NO, RO, WO, AO, VO, SO, fO, kO, dO, KO, uO, mO, IO, FO, iO, LO, gO, rO, XO, wO, cO, aO, CO, HO, xO, tO, BG, OG, GG, YG, DG, QG, oG, jG, yG, JG, MG, PG, zG, lG, pG, qG, ZG, NG, RG, WG, AG, VG, SG, nG, UG, fG, kG, dG, KG;
        let uG, mG, IG, FG, iG, LG, gG, rG, XG, wG, EG, cG, hG, aG, eG, TG, bG, CG, HG, vG, sG, xG, tG, BY, OY, GY, YY, DY, QY, oY, jY, yY, JY, MY, PY, zY, lY, pY, qY, ZY, NY, RY, WY, AY, VY, SY, nY, UY, fY, kY, dY, KY, uY, mY, IY, FY, iY, LY, gY, rY, XY, wY, EY, cY, hY, aY, eY, TY, bY, CY, HY, vY, sY, xY, tY, BD, OD, GD, YD, DD, QD, oD, jD, yD, JD, MD, PD, zD, lD, pD, qD, ZD, ND, RD, WD, AD, VD, SD, nD, UD, fD, kD, dD, KD, uD, mD = sO,
          ID = [],
          FD = [],
          iD = [],
          LD = [],
          gD = [],
          rD = [],
          XD = [],
          wD = [],
          ED = [],
          cD = [],
          hD = [],
          aD = [],
          eD = [],
          TD = [],
          bD = [],
          CD = [],
          HD = [],
          vD = [],
          sD = [],
          xD = [],
          tD = [],
          BQ = [],
          OQ = [],
          GQ = [],
          YQ = [],
          DQ = [],
          QQ = [],
          oQ = [],
          jQ = [],
          yQ = [],
          JQ = [],
          MQ = [],
          PQ = [],
          zQ = [],
          lQ = [],
          pQ = [],
          qQ = [],
          ZQ = [],
          NQ = [],
          RQ = [],
          WQ = [],
          AQ = [],
          VQ = [],
          SQ = [],
          nQ = [],
          UQ = [],
          fQ = [],
          kQ = [],
          dQ = [],
          KQ = [],
          uQ = [],
          mQ = [],
          IQ = [],
          FQ = [],
          iQ = [],
          LQ = [],
          gQ = [],
          rQ = [],
          XQ = [],
          wQ = [],
          EQ = [],
          cQ = [],
          hQ = [],
          aQ = [],
          eQ = [],
          TQ = [],
          bQ = [],
          CQ = [],
          HQ = [],
          vQ = [],
          sQ = [],
          xQ = [],
          tQ = [],
          Bo = [],
          Oo = [],
          Go = [],
          Yo = [],
          Do = [],
          Qo = [],
          oo = [],
          jo = [],
          yo = [],
          Jo = [],
          Mo = [],
          Po = [],
          zo = [],
          po = [],
          qo = [],
          Zo = [],
          No = [],
          Ro = [],
          Wo = [],
          Ao = [],
          Vo = [],
          So = [],
          no = [],
          Uo = [],
          fo = [],
          ko = [],
          Ko = [],
          uo = [],
          mo = [],
          Io = [],
          Fo = [],
          io = [],
          Lo = [],
          go = [],
          ro = [],
          Xo = [],
          wo = [],
          Eo = [],
          co = [],
          ho = [],
          ao = [],
          eo = [],
          To = [],
          bo = [],
          Co = [],
          Ho = [],
          vo = [],
          so = [],
          xo = [],
          to = [],
          Bj = [],
          Oj = [],
          Gj = [],
          Yj = [],
          Dj = [],
          Qj = [],
          oj = [],
          jj = [],
          yj = [],
          Jj = [],
          Mj = [],
          Pj = [],
          zj = [],
          lj = [],
          pj = [],
          qj = [],
          Zj = [],
          Nj = [],
          Rj = [],
          Wj = [],
          Aj = [],
          Vj = [],
          Sj = [],
          nj = [],
          Uj = [],
          fj = [],
          kj = [],
          dj = [],
          Kj = [],
          uj = [],
          mj = [],
          Ij = [],
          Fj = [],
          ij = [],
          Lj = [],
          gj = [],
          rj = [],
          Xj = [],
          wj = [],
          Ej = [],
          cj = [],
          hj = [],
          aj = [],
          ej = [],
          Tj = [],
          bj = [],
          Cj = [],
          Hj = [],
          vj = [],
          sj = [],
          xj = [],
          tj = [],
          By = [],
          Oy = [],
          Gy = [],
          Yy = [],
          Dy = [],
          Qy = [],
          oy = [],
          jy = [],
          yy = [],
          Jy = [],
          My = [],
          Py = [],
          zy = [],
          ly = [],
          py = [],
          qy = [],
          Zy = [],
          Ny = [],
          Ry = [],
          Wy = [],
          Ay = [],
          Vy = [],
          Sy = [],
          ny = [],
          Uy = [],
          fy = [],
          ky = [],
          dy = [],
          Ky = [],
          uy = [];
        return BB = class extends mD {
          get baseWeight() {
            return (0, fB.c)(this, OB, "f")
          }
          set baseWeight(BB) {
            (0, fB.d)(this, OB, BB, "f")
          }
          get baseWeightTexture() {
            return (0, fB.c)(this, YB, "f")
          }
          set baseWeightTexture(BB) {
            (0, fB.d)(this, YB, BB, "f")
          }
          get baseColor() {
            return (0, fB.c)(this, DB, "f")
          }
          set baseColor(BB) {
            (0, fB.d)(this, DB, BB, "f")
          }
          get baseColorTexture() {
            return (0, fB.c)(this, oB, "f")
          }
          set baseColorTexture(BB) {
            (0, fB.d)(this, oB, BB, "f")
          }
          get baseDiffuseRoughness() {
            return (0, fB.c)(this, jB, "f")
          }
          set baseDiffuseRoughness(BB) {
            (0, fB.d)(this, jB, BB, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, fB.c)(this, yB, "f")
          }
          set baseDiffuseRoughnessTexture(BB) {
            (0, fB.d)(this, yB, BB, "f")
          }
          get baseMetalness() {
            return (0, fB.c)(this, JB, "f")
          }
          set baseMetalness(BB) {
            (0, fB.d)(this, JB, BB, "f")
          }
          get baseMetalnessTexture() {
            return (0, fB.c)(this, MB, "f")
          }
          set baseMetalnessTexture(BB) {
            (0, fB.d)(this, MB, BB, "f")
          }
          get specularWeight() {
            return (0, fB.c)(this, PB, "f")
          }
          set specularWeight(BB) {
            (0, fB.d)(this, PB, BB, "f")
          }
          get specularWeightTexture() {
            return (0, fB.c)(this, zB, "f")
          }
          set specularWeightTexture(BB) {
            (0, fB.d)(this, zB, BB, "f")
          }
          get specularColor() {
            return (0, fB.c)(this, lB, "f")
          }
          set specularColor(BB) {
            (0, fB.d)(this, lB, BB, "f")
          }
          get specularColorTexture() {
            return (0, fB.c)(this, pB, "f")
          }
          set specularColorTexture(BB) {
            (0, fB.d)(this, pB, BB, "f")
          }
          get specularRoughness() {
            return (0, fB.c)(this, qB, "f")
          }
          set specularRoughness(BB) {
            (0, fB.d)(this, qB, BB, "f")
          }
          get specularRoughnessTexture() {
            return (0, fB.c)(this, ZB, "f")
          }
          set specularRoughnessTexture(BB) {
            (0, fB.d)(this, ZB, BB, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, fB.c)(this, NB, "f")
          }
          set specularRoughnessAnisotropy(BB) {
            (0, fB.d)(this, NB, BB, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, fB.c)(this, RB, "f")
          }
          set specularRoughnessAnisotropyTexture(BB) {
            (0, fB.d)(this, RB, BB, "f")
          }
          get specularIor() {
            return (0, fB.c)(this, WB, "f")
          }
          set specularIor(BB) {
            (0, fB.d)(this, WB, BB, "f")
          }
          get transmissionWeight() {
            return (0, fB.c)(this, AB, "f")
          }
          set transmissionWeight(BB) {
            (0, fB.d)(this, AB, BB, "f")
          }
          get transmissionWeightTexture() {
            return (0, fB.c)(this, VB, "f")
          }
          set transmissionWeightTexture(BB) {
            (0, fB.d)(this, VB, BB, "f")
          }
          get transmissionColor() {
            return (0, fB.c)(this, SB, "f")
          }
          set transmissionColor(BB) {
            (0, fB.d)(this, SB, BB, "f")
          }
          get transmissionColorTexture() {
            return (0, fB.c)(this, nB, "f")
          }
          set transmissionColorTexture(BB) {
            (0, fB.d)(this, nB, BB, "f")
          }
          get transmissionDepth() {
            return (0, fB.c)(this, UB, "f")
          }
          set transmissionDepth(BB) {
            (0, fB.d)(this, UB, BB, "f")
          }
          get transmissionDepthTexture() {
            return (0, fB.c)(this, mB, "f")
          }
          set transmissionDepthTexture(BB) {
            (0, fB.d)(this, mB, BB, "f")
          }
          get transmissionScatter() {
            return (0, fB.c)(this, IB, "f")
          }
          set transmissionScatter(BB) {
            (0, fB.d)(this, IB, BB, "f")
          }
          get transmissionScatterTexture() {
            return (0, fB.c)(this, FB, "f")
          }
          set transmissionScatterTexture(BB) {
            (0, fB.d)(this, FB, BB, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, fB.c)(this, iB, "f")
          }
          set transmissionScatterAnisotropy(BB) {
            (0, fB.d)(this, iB, BB, "f")
          }
          get transmissionDispersionScale() {
            return (0, fB.c)(this, rB, "f")
          }
          set transmissionDispersionScale(BB) {
            (0, fB.d)(this, rB, BB, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, fB.c)(this, EB, "f")
          }
          set transmissionDispersionScaleTexture(BB) {
            (0, fB.d)(this, EB, BB, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, fB.c)(this, cB, "f")
          }
          set transmissionDispersionAbbeNumber(BB) {
            (0, fB.d)(this, cB, BB, "f")
          }
          get subsurfaceWeight() {
            return (0, fB.c)(this, hB, "f")
          }
          set subsurfaceWeight(BB) {
            (0, fB.d)(this, hB, BB, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, fB.c)(this, aB, "f")
          }
          set subsurfaceWeightTexture(BB) {
            (0, fB.d)(this, aB, BB, "f")
          }
          get subsurfaceColor() {
            return (0, fB.c)(this, bB, "f")
          }
          set subsurfaceColor(BB) {
            (0, fB.d)(this, bB, BB, "f")
          }
          get subsurfaceColorTexture() {
            return (0, fB.c)(this, HB, "f")
          }
          set subsurfaceColorTexture(BB) {
            (0, fB.d)(this, HB, BB, "f")
          }
          get subsurfaceRadius() {
            return (0, fB.c)(this, tB, "f")
          }
          set subsurfaceRadius(BB) {
            (0, fB.d)(this, tB, BB, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, fB.c)(this, BO, "f")
          }
          set subsurfaceRadiusScale(BB) {
            (0, fB.d)(this, BO, BB, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, fB.c)(this, OO, "f")
          }
          set subsurfaceRadiusScaleTexture(BB) {
            (0, fB.d)(this, OO, BB, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, fB.c)(this, GO, "f")
          }
          set subsurfaceScatterAnisotropy(BB) {
            (0, fB.d)(this, GO, BB, "f")
          }
          get coatWeight() {
            return (0, fB.c)(this, YO, "f")
          }
          set coatWeight(BB) {
            (0, fB.d)(this, YO, BB, "f")
          }
          get coatWeightTexture() {
            return (0, fB.c)(this, DO, "f")
          }
          set coatWeightTexture(BB) {
            (0, fB.d)(this, DO, BB, "f")
          }
          get coatColor() {
            return (0, fB.c)(this, QO, "f")
          }
          set coatColor(BB) {
            (0, fB.d)(this, QO, BB, "f")
          }
          get coatColorTexture() {
            return (0, fB.c)(this, oO, "f")
          }
          set coatColorTexture(BB) {
            (0, fB.d)(this, oO, BB, "f")
          }
          get coatRoughness() {
            return (0, fB.c)(this, jO, "f")
          }
          set coatRoughness(BB) {
            (0, fB.d)(this, jO, BB, "f")
          }
          get coatRoughnessTexture() {
            return (0, fB.c)(this, yO, "f")
          }
          set coatRoughnessTexture(BB) {
            (0, fB.d)(this, yO, BB, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, fB.c)(this, JO, "f")
          }
          set coatRoughnessAnisotropy(BB) {
            (0, fB.d)(this, JO, BB, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, fB.c)(this, pO, "f")
          }
          set coatRoughnessAnisotropyTexture(BB) {
            (0, fB.d)(this, pO, BB, "f")
          }
          get coatIor() {
            return (0, fB.c)(this, qO, "f")
          }
          set coatIor(BB) {
            (0, fB.d)(this, qO, BB, "f")
          }
          get coatDarkening() {
            return (0, fB.c)(this, ZO, "f")
          }
          set coatDarkening(BB) {
            (0, fB.d)(this, ZO, BB, "f")
          }
          get coatDarkeningTexture() {
            return (0, fB.c)(this, NO, "f")
          }
          set coatDarkeningTexture(BB) {
            (0, fB.d)(this, NO, BB, "f")
          }
          get fuzzWeight() {
            return (0, fB.c)(this, RO, "f")
          }
          set fuzzWeight(BB) {
            (0, fB.d)(this, RO, BB, "f")
          }
          get fuzzWeightTexture() {
            return (0, fB.c)(this, WO, "f")
          }
          set fuzzWeightTexture(BB) {
            (0, fB.d)(this, WO, BB, "f")
          }
          get fuzzColor() {
            return (0, fB.c)(this, AO, "f")
          }
          set fuzzColor(BB) {
            (0, fB.d)(this, AO, BB, "f")
          }
          get fuzzColorTexture() {
            return (0, fB.c)(this, VO, "f")
          }
          set fuzzColorTexture(BB) {
            (0, fB.d)(this, VO, BB, "f")
          }
          get fuzzRoughness() {
            return (0, fB.c)(this, SO, "f")
          }
          set fuzzRoughness(BB) {
            (0, fB.d)(this, SO, BB, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, fB.c)(this, fO, "f")
          }
          set fuzzRoughnessTexture(BB) {
            (0, fB.d)(this, fO, BB, "f")
          }
          get geometryThinWalled() {
            return (0, fB.c)(this, kO, "f")
          }
          set geometryThinWalled(BB) {
            (0, fB.d)(this, kO, BB, "f")
          }
          get geometryNormalTexture() {
            return (0, fB.c)(this, dO, "f")
          }
          set geometryNormalTexture(BB) {
            (0, fB.d)(this, dO, BB, "f")
          }
          get geometryTangent() {
            return (0, fB.c)(this, KO, "f")
          }
          set geometryTangent(BB) {
            (0, fB.d)(this, KO, BB, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(BB) {
            this.geometryTangent = new XB.o(Math.cos(BB), Math.sin(BB))
          }
          get geometryTangentTexture() {
            return (0, fB.c)(this, uO, "f")
          }
          set geometryTangentTexture(BB) {
            (0, fB.d)(this, uO, BB, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, fB.c)(this, mO, "f")
          }
          set geometryCoatNormalTexture(BB) {
            (0, fB.d)(this, mO, BB, "f")
          }
          get geometryCoatTangent() {
            return (0, fB.c)(this, IO, "f")
          }
          set geometryCoatTangent(BB) {
            (0, fB.d)(this, IO, BB, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(BB) {
            this.geometryCoatTangent = new XB.o(Math.cos(BB), Math.sin(BB))
          }
          get geometryCoatTangentTexture() {
            return (0, fB.c)(this, FO, "f")
          }
          set geometryCoatTangentTexture(BB) {
            (0, fB.d)(this, FO, BB, "f")
          }
          get geometryOpacity() {
            return (0, fB.c)(this, iO, "f")
          }
          set geometryOpacity(BB) {
            (0, fB.d)(this, iO, BB, "f")
          }
          get geometryOpacityTexture() {
            return (0, fB.c)(this, LO, "f")
          }
          set geometryOpacityTexture(BB) {
            (0, fB.d)(this, LO, BB, "f")
          }
          get geometryThickness() {
            return (0, fB.c)(this, gO, "f")
          }
          set geometryThickness(BB) {
            (0, fB.d)(this, gO, BB, "f")
          }
          get geometryThicknessTexture() {
            return (0, fB.c)(this, rO, "f")
          }
          set geometryThicknessTexture(BB) {
            (0, fB.d)(this, rO, BB, "f")
          }
          get emissionLuminance() {
            return (0, fB.c)(this, XO, "f")
          }
          set emissionLuminance(BB) {
            (0, fB.d)(this, XO, BB, "f")
          }
          get emissionColor() {
            return (0, fB.c)(this, wO, "f")
          }
          set emissionColor(BB) {
            (0, fB.d)(this, wO, BB, "f")
          }
          get emissionColorTexture() {
            return (0, fB.c)(this, cO, "f")
          }
          set emissionColorTexture(BB) {
            (0, fB.d)(this, cO, BB, "f")
          }
          get thinFilmWeight() {
            return (0, fB.c)(this, aO, "f")
          }
          set thinFilmWeight(BB) {
            (0, fB.d)(this, aO, BB, "f")
          }
          get thinFilmWeightTexture() {
            return (0, fB.c)(this, CO, "f")
          }
          set thinFilmWeightTexture(BB) {
            (0, fB.d)(this, CO, BB, "f")
          }
          get thinFilmThickness() {
            return (0, fB.c)(this, HO, "f")
          }
          set thinFilmThickness(BB) {
            (0, fB.d)(this, HO, BB, "f")
          }
          get thinFilmThicknessMin() {
            return (0, fB.c)(this, xO, "f")
          }
          set thinFilmThicknessMin(BB) {
            (0, fB.d)(this, xO, BB, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, fB.c)(this, tO, "f")
          }
          set thinFilmThicknessTexture(BB) {
            (0, fB.d)(this, tO, BB, "f")
          }
          get thinFilmIor() {
            return (0, fB.c)(this, BG, "f")
          }
          set thinFilmIor(BB) {
            (0, fB.d)(this, BG, BB, "f")
          }
          get ambientOcclusionTexture() {
            return (0, fB.c)(this, OG, "f")
          }
          set ambientOcclusionTexture(BB) {
            (0, fB.d)(this, OG, BB, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(BB) {
            this._sssQuality !== BB && (this._sssQuality = BB, this.DYB(1))
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
            return (0, fB.c)(this, GG, "f")
          }
          set directIntensity(BB) {
            (0, fB.d)(this, GG, BB, "f")
          }
          get environmentIntensity() {
            return (0, fB.c)(this, YG, "f")
          }
          set environmentIntensity(BB) {
            (0, fB.d)(this, YG, BB, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, fB.c)(this, DG, "f")
          }
          set useSpecularWeightFromTextureAlpha(BB) {
            (0, fB.d)(this, DG, BB, "f")
          }
          get forceAlphaTest() {
            return (0, fB.c)(this, QG, "f")
          }
          set forceAlphaTest(BB) {
            (0, fB.d)(this, QG, BB, "f")
          }
          get alphaCutOff() {
            return (0, fB.c)(this, oG, "f")
          }
          set alphaCutOff(BB) {
            (0, fB.d)(this, oG, BB, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, fB.c)(this, jG, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(BB) {
            (0, fB.d)(this, jG, BB, "f")
          }
          get useAmbientInGrayScale() {
            return (0, fB.c)(this, yG, "f")
          }
          set useAmbientInGrayScale(BB) {
            (0, fB.d)(this, yG, BB, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(TB.c.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === QB.b.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(BB) {
            BB !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = BB ? QB.b.LIGHTFALLOFF_PHYSICAL : QB.b.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === QB.b.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(BB) {
            BB !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = BB ? QB.b.LIGHTFALLOFF_GLTF : QB.b.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, fB.c)(this, JG, "f")
          }
          set useObjectSpaceNormalMap(BB) {
            (0, fB.d)(this, JG, BB, "f")
          }
          get useParallax() {
            return (0, fB.c)(this, MG, "f")
          }
          set useParallax(BB) {
            (0, fB.d)(this, MG, BB, "f")
          }
          get useParallaxOcclusion() {
            return (0, fB.c)(this, PG, "f")
          }
          set useParallaxOcclusion(BB) {
            (0, fB.d)(this, PG, BB, "f")
          }
          get parallaxScaleBias() {
            return (0, fB.c)(this, zG, "f")
          }
          set parallaxScaleBias(BB) {
            (0, fB.d)(this, zG, BB, "f")
          }
          get disableLighting() {
            return (0, fB.c)(this, lG, "f")
          }
          set disableLighting(BB) {
            (0, fB.d)(this, lG, BB, "f")
          }
          get forceIrradianceInFragment() {
            return (0, fB.c)(this, pG, "f")
          }
          set forceIrradianceInFragment(BB) {
            (0, fB.d)(this, pG, BB, "f")
          }
          get maxSimultaneousLights() {
            return (0, fB.c)(this, qG, "f")
          }
          set maxSimultaneousLights(BB) {
            (0, fB.d)(this, qG, BB, "f")
          }
          get invertNormalMapX() {
            return (0, fB.c)(this, ZG, "f")
          }
          set invertNormalMapX(BB) {
            (0, fB.d)(this, ZG, BB, "f")
          }
          get invertNormalMapY() {
            return (0, fB.c)(this, NG, "f")
          }
          set invertNormalMapY(BB) {
            (0, fB.d)(this, NG, BB, "f")
          }
          get twoSidedLighting() {
            return (0, fB.c)(this, RG, "f")
          }
          set twoSidedLighting(BB) {
            (0, fB.d)(this, RG, BB, "f")
          }
          get useAlphaFresnel() {
            return (0, fB.c)(this, WG, "f")
          }
          set useAlphaFresnel(BB) {
            (0, fB.d)(this, WG, BB, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, fB.c)(this, AG, "f")
          }
          set useLinearAlphaFresnel(BB) {
            (0, fB.d)(this, AG, BB, "f")
          }
          get environmentBRDFTexture() {
            return (0, fB.c)(this, VG, "f")
          }
          set environmentBRDFTexture(BB) {
            (0, fB.d)(this, VG, BB, "f")
          }
          get forceNormalForward() {
            return (0, fB.c)(this, SG, "f")
          }
          set forceNormalForward(BB) {
            (0, fB.d)(this, SG, BB, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, fB.c)(this, nG, "f")
          }
          set enableSpecularAntiAliasing(BB) {
            (0, fB.d)(this, nG, BB, "f")
          }
          get useHorizonOcclusion() {
            return (0, fB.c)(this, UG, "f")
          }
          set useHorizonOcclusion(BB) {
            (0, fB.d)(this, UG, BB, "f")
          }
          get useRadianceOcclusion() {
            return (0, fB.c)(this, fG, "f")
          }
          set useRadianceOcclusion(BB) {
            (0, fB.d)(this, fG, BB, "f")
          }
          get unlit() {
            return (0, fB.c)(this, kG, "f")
          }
          set unlit(BB) {
            (0, fB.d)(this, kG, BB, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, fB.c)(this, dG, "f")
          }
          set applyDecalMapAfterDetailMap(BB) {
            (0, fB.d)(this, dG, BB, "f")
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
            this._refractionHighQualityBlur !== BB && (this._refractionHighQualityBlur = BB, this.DYB(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(BB) {
            this._realTimeFiltering = BB, this.DYB(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(BB) {
            this._realTimeFilteringQuality = BB, this.DYB(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(BB) {
            this._fuzzSampleNumber = BB, this.DYB(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, fB.c)(this, KG, "f")
          }
          set debugMode(BB) {
            (0, fB.d)(this, KG, BB, "f")
          }
          constructor(GB, kB) {
            super(GB, kB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || BB.ForceGLSL), OB.set(this, ((0, fB.j)(this, ID), (0, fB.j)(this, FD, void 0))), this._baseWeight = ((0, fB.j)(this, iD), new TO("base_weight", 1, "vBaseWeight", 1)), YB.set(this, (0, fB.j)(this, LD, void 0)), this._baseWeightTexture = ((0, fB.j)(this, gD), new bO("base_weight", "baseWeight", "BASE_WEIGHT")), DB.set(this, (0, fB.j)(this, rD, void 0)), this._baseColor = ((0, fB.j)(this, XD), new TO("base_color", TB.c.White(), "vBaseColor", 4)), oB.set(this, (0, fB.j)(this, wD, void 0)), this._baseColorTexture = ((0, fB.j)(this, ED), new bO("base_color", "baseColor", "BASE_COLOR")), jB.set(this, (0, fB.j)(this, cD, void 0)), this._baseDiffuseRoughness = ((0, fB.j)(this, hD), new TO("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), yB.set(this, (0, fB.j)(this, aD, void 0)), this._baseDiffuseRoughnessTexture = ((0, fB.j)(this, eD), new bO("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), JB.set(this, (0, fB.j)(this, TD, void 0)), this._baseMetalness = ((0, fB.j)(this, bD), new TO("base_metalness", 0, "vReflectanceInfo", 4, 0)), MB.set(this, (0, fB.j)(this, CD, void 0)), this._baseMetalnessTexture = ((0, fB.j)(this, HD), new bO("base_metalness", "baseMetalness", "BASE_METALNESS")), PB.set(this, (0, fB.j)(this, vD, void 0)), this._specularWeight = ((0, fB.j)(this, sD), new TO("specular_weight", 1, "vReflectanceInfo", 4, 3)), zB.set(this, (0, fB.j)(this, xD, void 0)), this._specularWeightTexture = ((0, fB.j)(this, tD), new bO("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), lB.set(this, (0, fB.j)(this, BQ, void 0)), this._specularColor = ((0, fB.j)(this, OQ), new TO("specular_color", TB.c.White(), "vSpecularColor", 4)), pB.set(this, (0, fB.j)(this, GQ, void 0)), this._specularColorTexture = ((0, fB.j)(this, YQ), new bO("specular_color", "specularColor", "SPECULAR_COLOR")), qB.set(this, (0, fB.j)(this, DQ, void 0)), this._specularRoughness = ((0, fB.j)(this, QQ), new TO("specular_roughness", .3, "vReflectanceInfo", 4, 1)), ZB.set(this, (0, fB.j)(this, oQ, void 0)), this._specularRoughnessTexture = ((0, fB.j)(this, jQ), new bO("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), NB.set(this, (0, fB.j)(this, yQ, void 0)), this._specularRoughnessAnisotropy = ((0, fB.j)(this, JQ), new TO("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), RB.set(this, (0, fB.j)(this, MQ, void 0)), this._specularRoughnessAnisotropyTexture = ((0, fB.j)(this, PQ), new bO("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), WB.set(this, (0, fB.j)(this, zQ, void 0)), this._specularIor = ((0, fB.j)(this, lQ), new TO("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), AB.set(this, (0, fB.j)(this, pQ, void 0)), this._transmissionWeight = ((0, fB.j)(this, qQ), new TO("transmission_weight", 0, "vTransmissionWeight", 1)), VB.set(this, (0, fB.j)(this, ZQ, void 0)), this._transmissionWeightTexture = ((0, fB.j)(this, NQ), new bO("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), SB.set(this, (0, fB.j)(this, RQ, void 0)), this._transmissionColor = ((0, fB.j)(this, WQ), new TO("transmission_color", TB.c.White(), "vTransmissionColor", 3, 0)), nB.set(this, (0, fB.j)(this, AQ, void 0)), this._transmissionColorTexture = ((0, fB.j)(this, VQ), new bO("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), UB.set(this, (0, fB.j)(this, SQ, void 0)), this._transmissionDepth = ((0, fB.j)(this, nQ), new TO("transmission_depth", 0, "vTransmissionDepth", 1, 0)), mB.set(this, (0, fB.j)(this, UQ, void 0)), this._transmissionDepthTexture = ((0, fB.j)(this, fQ), new bO("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), IB.set(this, (0, fB.j)(this, kQ, void 0)), this._transmissionScatter = ((0, fB.j)(this, dQ), new TO("transmission_scatter", TB.c.Black(), "vTransmissionScatter", 3, 0)), FB.set(this, (0, fB.j)(this, KQ, void 0)), this._transmissionScatterTexture = ((0, fB.j)(this, uQ), new bO("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), iB.set(this, (0, fB.j)(this, mQ, void 0)), this._transmissionScatterAnisotropy = ((0, fB.j)(this, IQ), new TO("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), rB.set(this, (0, fB.j)(this, FQ, void 0)), this._transmissionDispersionScale = ((0, fB.j)(this, iQ), new TO("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), EB.set(this, (0, fB.j)(this, LQ, void 0)), this._transmissionDispersionScaleTexture = ((0, fB.j)(this, gQ), new bO("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), cB.set(this, (0, fB.j)(this, rQ, void 0)), this._transmissionDispersionAbbeNumber = ((0, fB.j)(this, XQ), new TO("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), hB.set(this, (0, fB.j)(this, wQ, void 0)), this._subsurfaceWeight = ((0, fB.j)(this, EQ), new TO("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), aB.set(this, (0, fB.j)(this, cQ, void 0)), this._subsurfaceWeightTexture = ((0, fB.j)(this, hQ), new bO("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), bB.set(this, (0, fB.j)(this, aQ, void 0)), this._subsurfaceColor = ((0, fB.j)(this, eQ), new TO("subsurface_color", new TB.c(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), HB.set(this, (0, fB.j)(this, TQ, void 0)), this._subsurfaceColorTexture = ((0, fB.j)(this, bQ), new bO("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), tB.set(this, (0, fB.j)(this, CQ, void 0)), this._subsurfaceRadius = ((0, fB.j)(this, HQ), new TO("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), BO.set(this, (0, fB.j)(this, vQ, void 0)), this._subsurfaceRadiusScale = ((0, fB.j)(this, sQ), new TO("subsurface_radius_scale", new TB.c(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), OO.set(this, (0, fB.j)(this, xQ, void 0)), this._subsurfaceRadiusScaleTexture = ((0, fB.j)(this, tQ), new bO("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), GO.set(this, (0, fB.j)(this, Bo, void 0)), this._subsurfaceScatterAnisotropy = ((0, fB.j)(this, Oo), new TO("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), YO.set(this, (0, fB.j)(this, Go, void 0)), this._coatWeight = ((0, fB.j)(this, Yo), new TO("coat_weight", 0, "vCoatWeight", 1, 0)), DO.set(this, (0, fB.j)(this, Do, void 0)), this._coatWeightTexture = ((0, fB.j)(this, Qo), new bO("coat_weight", "coatWeight", "COAT_WEIGHT")), QO.set(this, (0, fB.j)(this, oo, void 0)), this._coatColor = ((0, fB.j)(this, jo), new TO("coat_color", TB.c.White(), "vCoatColor", 3, 0)), oO.set(this, (0, fB.j)(this, yo, void 0)), this._coatColorTexture = ((0, fB.j)(this, Jo), new bO("coat_color", "coatColor", "COAT_COLOR")), jO.set(this, (0, fB.j)(this, Mo, void 0)), this._coatRoughness = ((0, fB.j)(this, Po), new TO("coat_roughness", 0, "vCoatRoughness", 1, 0)), yO.set(this, (0, fB.j)(this, zo, void 0)), this._coatRoughnessTexture = ((0, fB.j)(this, po), new bO("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), JO.set(this, (0, fB.j)(this, qo, void 0)), this._coatRoughnessAnisotropy = ((0, fB.j)(this, Zo), new TO("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), pO.set(this, (0, fB.j)(this, No, void 0)), this._coatRoughnessAnisotropyTexture = ((0, fB.j)(this, Ro), new bO("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), qO.set(this, (0, fB.j)(this, Wo, void 0)), this._coatIor = ((0, fB.j)(this, Ao), new TO("coat_ior", 1.5, "vCoatIor", 1, 0)), ZO.set(this, (0, fB.j)(this, Vo, void 0)), this._coatDarkening = ((0, fB.j)(this, So), new TO("coat_darkening", 1, "vCoatDarkening", 1, 0)), NO.set(this, (0, fB.j)(this, no, void 0)), this._coatDarkeningTexture = ((0, fB.j)(this, Uo), new bO("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, RO.set(this, (0, fB.j)(this, fo, void 0)), this._fuzzWeight = ((0, fB.j)(this, ko), new TO("fuzz_weight", 0, "vFuzzWeight", 1, 0)), WO.set(this, (0, fB.j)(this, Ko, void 0)), this._fuzzWeightTexture = ((0, fB.j)(this, uo), new bO("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), AO.set(this, (0, fB.j)(this, mo, void 0)), this._fuzzColor = ((0, fB.j)(this, Io), new TO("fuzz_color", TB.c.White(), "vFuzzColor", 3, 0)), VO.set(this, (0, fB.j)(this, Fo, void 0)), this._fuzzColorTexture = ((0, fB.j)(this, io), new bO("fuzz_color", "fuzzColor", "FUZZ_COLOR")), SO.set(this, (0, fB.j)(this, Lo, void 0)), this._fuzzRoughness = ((0, fB.j)(this, go), new TO("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), fO.set(this, (0, fB.j)(this, ro, void 0)), this._fuzzRoughnessTexture = ((0, fB.j)(this, Xo), new bO("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), kO.set(this, (0, fB.j)(this, wo, void 0)), this._geometryThinWalled = ((0, fB.j)(this, Eo), new TO("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), dO.set(this, (0, fB.j)(this, co, void 0)), this._geometryNormalTexture = ((0, fB.j)(this, ho), new bO("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), KO.set(this, (0, fB.j)(this, ao, void 0)), this._geometryTangent = ((0, fB.j)(this, eo), new TO("geometry_tangent", new XB.o(1, 0), "vSpecularAnisotropy", 3, 0)), uO.set(this, (0, fB.j)(this, To, void 0)), this._geometryTangentTexture = ((0, fB.j)(this, bo), new bO("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), mO.set(this, (0, fB.j)(this, Co, void 0)), this._geometryCoatNormalTexture = ((0, fB.j)(this, Ho), new bO("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), IO.set(this, (0, fB.j)(this, vo, void 0)), this._geometryCoatTangent = ((0, fB.j)(this, so), new TO("geometry_coat_tangent", new XB.o(1, 0), "vGeometryCoatTangent", 2, 0)), FO.set(this, (0, fB.j)(this, xo, void 0)), this._geometryCoatTangentTexture = ((0, fB.j)(this, to), new bO("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), iO.set(this, (0, fB.j)(this, Bj, void 0)), this._geometryOpacity = ((0, fB.j)(this, Oj), new TO("geometry_opacity", 1, "vBaseColor", 4, 3)), LO.set(this, (0, fB.j)(this, Gj, void 0)), this._geometryOpacityTexture = ((0, fB.j)(this, Yj), new bO("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), gO.set(this, (0, fB.j)(this, Dj, void 0)), this._geometryThickness = ((0, fB.j)(this, Qj), new TO("geometry_thickness", 0, "vGeometryThickness", 1, 0)), rO.set(this, (0, fB.j)(this, oj, void 0)), this._geometryThicknessTexture = ((0, fB.j)(this, jj), new bO("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), XO.set(this, (0, fB.j)(this, yj, void 0)), this._emissionLuminance = ((0, fB.j)(this, Jj), new TO("emission_luminance", 1, "vLightingIntensity", 4, 1)), wO.set(this, (0, fB.j)(this, Mj, void 0)), this._emissionColor = ((0, fB.j)(this, Pj), new TO("emission_color", TB.c.Black(), "vEmissionColor", 3)), cO.set(this, (0, fB.j)(this, zj, void 0)), this._emissionColorTexture = ((0, fB.j)(this, lj), new bO("emission_color", "emissionColor", "EMISSION_COLOR")), aO.set(this, (0, fB.j)(this, pj, void 0)), this._thinFilmWeight = ((0, fB.j)(this, qj), new TO("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), CO.set(this, (0, fB.j)(this, Zj, void 0)), this._thinFilmWeightTexture = ((0, fB.j)(this, Nj), new bO("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), HO.set(this, (0, fB.j)(this, Rj, void 0)), this._thinFilmThickness = ((0, fB.j)(this, Wj), new TO("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), xO.set(this, (0, fB.j)(this, Aj, void 0)), this._thinFilmThicknessMin = ((0, fB.j)(this, Vj), new TO("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), tO.set(this, (0, fB.j)(this, Sj, void 0)), this._thinFilmThicknessTexture = ((0, fB.j)(this, nj), new bO("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), BG.set(this, (0, fB.j)(this, Uj, void 0)), this._thinFilmIor = ((0, fB.j)(this, fj), new TO("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), OG.set(this, (0, fB.j)(this, kj, void 0)), this._ambientOcclusionTexture = ((0, fB.j)(this, dj), new bO("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = BB.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, GG.set(this, (0, fB.j)(this, Kj, 1)), YG.set(this, ((0, fB.j)(this, uj), (0, fB.j)(this, mj, 1))), DG.set(this, ((0, fB.j)(this, Ij), (0, fB.j)(this, Fj, !1))), QG.set(this, ((0, fB.j)(this, ij), (0, fB.j)(this, Lj, !1))), oG.set(this, ((0, fB.j)(this, gj), (0, fB.j)(this, rj, .4))), jG.set(this, ((0, fB.j)(this, Xj), (0, fB.j)(this, wj, !1))), yG.set(this, ((0, fB.j)(this, Ej), (0, fB.j)(this, cj, !1))), JG.set(this, ((0, fB.j)(this, hj), (0, fB.j)(this, aj, !1))), MG.set(this, ((0, fB.j)(this, ej), (0, fB.j)(this, Tj, !1))), PG.set(this, ((0, fB.j)(this, bj), (0, fB.j)(this, Cj, !1))), zG.set(this, ((0, fB.j)(this, Hj), (0, fB.j)(this, vj, .05))), lG.set(this, ((0, fB.j)(this, sj), (0, fB.j)(this, xj, !1))), pG.set(this, ((0, fB.j)(this, tj), (0, fB.j)(this, By, !1))), qG.set(this, ((0, fB.j)(this, Oy), (0, fB.j)(this, Gy, 4))), ZG.set(this, ((0, fB.j)(this, Yy), (0, fB.j)(this, Dy, !1))), NG.set(this, ((0, fB.j)(this, Qy), (0, fB.j)(this, oy, !1))), RG.set(this, ((0, fB.j)(this, jy), (0, fB.j)(this, yy, !1))), WG.set(this, ((0, fB.j)(this, Jy), (0, fB.j)(this, My, !1))), AG.set(this, ((0, fB.j)(this, Py), (0, fB.j)(this, zy, !1))), VG.set(this, ((0, fB.j)(this, ly), (0, fB.j)(this, py, null))), SG.set(this, ((0, fB.j)(this, qy), (0, fB.j)(this, Zy, !1))), nG.set(this, ((0, fB.j)(this, Ny), (0, fB.j)(this, Ry, !1))), UG.set(this, ((0, fB.j)(this, Wy), (0, fB.j)(this, Ay, !0))), fG.set(this, ((0, fB.j)(this, Vy), (0, fB.j)(this, Sy, !0))), kG.set(this, ((0, fB.j)(this, ny), (0, fB.j)(this, Uy, !1))), dG.set(this, ((0, fB.j)(this, fy), (0, fB.j)(this, ky, !1))), this._lightingInfos = ((0, fB.j)(this, dy), new XB.t(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = QB.b.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new KB.d(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, KG.set(this, (0, fB.j)(this, Ky, 0)), this.debugLimit = ((0, fB.j)(this, uy), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = QB.b.MATERIAL_OPAQUE, this.JF() && !this.JF()?.Lp().isWebGPU && this.JF().Lp().Pq < 2 && dB.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), BB._noiseTextures[this.JF().uniqueId] || (BB._noiseTextures[this.JF().uniqueId] = new uB.e(UO.j.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.JF(), !1, !0, 1), this.JF().lF.addOnce((() => {
              BB._noiseTextures[this.JF().uniqueId]?.dispose(), delete BB._noiseTextures[this.JF().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), vB.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), vB.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = gB(this.JF()), this._environmentFuzzBRDFTexture = LB(this.JF()), this.prePassConfiguration = new eB.c, this._propertyList = {};
            for (const BB of Object.getOwnPropertyNames(this)) {
              const OB = this[BB];
              OB instanceof TO && (this._propertyList[BB] = OB)
            }
            Object.keys(this._propertyList).forEach((BB => {
              const OB = this._propertyList[BB];
              let GB = this._uniformsList[OB.targetUniformName];
              GB ? GB.numComponents !== OB.targetUniformComponentNum ? dB.b.Error(`Uniform ${OB.targetUniformName} already exists of size ${GB.numComponents}, but trying to set it to ${OB.targetUniformComponentNum}.`) : GB.requiredDefine !== OB.requiredDefine && (GB.requiredDefine = void 0) : (GB = new eO(OB.targetUniformName, OB.targetUniformComponentNum), GB.requiredDefine = OB.requiredDefine, this._uniformsList[OB.targetUniformName] = GB), "" === GB.firstLinkedKey && (GB.firstLinkedKey = OB.name), GB.linkedProperties[OB.name] = OB
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const BB of Object.getOwnPropertyNames(this)) {
              const OB = this[BB];
              OB instanceof bO && (this._samplersList[BB] = OB)
            }
            for (const BB in this._samplersList) {
              const OB = this._samplersList[BB].textureDefine;
              this._samplerDefines[OB] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[OB + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[OB + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(vB.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(vB.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
            return this._hasAlphaChannel() && this._transparencyMode !== QB.b.MATERIAL_OPAQUE && !this.geometryOpacityTexture
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
          clone(OB) {
            let GB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const DB = nO.d.Clone((() => new BB(OB, this.JF())), this, {
              cloneTexturesOnlyOnce: GB
            });
            return DB.id = OB, DB.name = OB, this.stencil.copyTo(DB.stencil), this._clonePlugins(DB, YB), DB
          }
          serialize() {
            const BB = super.serialize();
            return BB.customType = "BABYLON.OpenPBRMaterial", BB
          }
          static Parse(OB, GB, YB) {
            const DB = nO.d.Parse((() => new BB(OB.name, GB)), OB, GB, YB);
            return OB.stencil && DB.stencil.parse(OB.stencil, GB, YB), QB.b._ParsePlugins(OB, DB, GB, YB), DB
          }
          forceCompilation(BB, OB, GB) {
            const YB = {
              clipPlane: !1,
              useInstances: !1,
              ...GB
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const GB = new vO({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                DB = this._prepareEffect(BB, BB, GB, void 0, void 0, YB.useInstances, YB.clipPlane);
              this._onEffectCreatedObservable && (hO.effect = DB, hO.subMesh = null, this._onEffectCreatedObservable.notifyObservers(hO)), DB.isReady() ? OB && OB(this) : DB.onCompileObservable.add((() => {
                OB && OB(this)
              }))
            })()
          }
          isReadyForSubMesh(OB, GB, YB) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const DB = GB._drawWrapper;
            if (DB.effect && this.isFrozen && DB._wasPreviouslyReady && DB._wasPreviouslyUsingInstances === YB) return !0;
            GB.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), GB.materialDefines = new vO({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const QB = GB.materialDefines;
            if (this._isReadyForSubMesh(GB)) return !0;
            const oB = this.JF(),
              jB = oB.Lp();
            if (QB._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, oB.texturesEnabled)) {
              for (const BB in this._samplersList) {
                const OB = this._samplersList[BB];
                if (OB.value && !OB.value.isReadyOrNotBlocking()) return !1
              }
              const OB = this._getRadianceTexture();
              if (OB && vB.d.ReflectionTextureEnabled) {
                if (!OB.isReadyOrNotBlocking()) return !1;
                if (OB.irradianceTexture) {
                  if (!OB.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!OB.sphericalPolynomial && OB.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && vB.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && vB.d.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && vB.d.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (BB._noiseTextures[oB.uniqueId] && !BB._noiseTextures[oB.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = QB, this._eventInfo.subMesh = GB, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (QB._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (QB.AREALIGHTUSED)
              for (let BB = 0; BB < OB.lightSources.length; BB++)
                if (!OB.lightSources[BB]._isReady()) return !1;
            if (jB.getCaps().standardDerivatives || OB.isVerticesDataPresent(wB.h.NormalKind) || (OB.createNormals(!0), dB.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + OB.name)), !(0, xB.e)(oB, OB, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const yB = GB.effect,
              JB = QB._areLightsDisposed,
              MB = this._prepareEffect(OB, GB.getRenderingMesh(), QB, this.onCompiled, this.onError, YB, null);
            let PB = !1;
            if (MB)
              if (this._onEffectCreatedObservable && (hO.effect = MB, hO.subMesh = GB, this._onEffectCreatedObservable.notifyObservers(hO)), this.allowShaderHotSwapping && yB && !MB.isReady()) {
                if (QB.markAsUnprocessed(), PB = this.isFrozen, JB) return QB._areLightsDisposed = !0, !1
              } else oB.resetCachedMaterial(), GB.setEffect(MB, QB, this._materialContext);
            return !(!GB.effect || !GB.effect.isReady()) && (QB._renderId = oB.getRenderId(), DB._wasPreviouslyReady = !PB, DB._wasPreviouslyUsingInstances = !!YB, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const BB = this._uniformBuffer;
            BB.addUniform("vTangentSpaceParams", 2), BB.addUniform("vLightingIntensity", 4), BB.addUniform("pointSize", 1), BB.addUniform("vDebugMode", 2), BB.addUniform("renderTargetSize", 2), BB.addUniform("cameraInfo", 4), BB.addUniform("vTextureRepetitionHexTilingParams", 4), BB.addUniform("backgroundRefractionMatrix", 16), BB.addUniform("vBackgroundRefractionInfos", 3), (0, xB.lb)(BB, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((OB => {
              BB.addUniform(OB.name, OB.numComponents)
            })), Object.values(this._samplersList).forEach((OB => {
              BB.addUniform(OB.samplerInfoName, 2), BB.addUniform(OB.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(BB, OB, GB, YB) {
            if (0 === this.geometryThickness) BB.updateFloat("vGeometryThickness", 0);
            else {
              YB.getRenderingMesh().getWorldMatrix().decompose(XB.k.Xp[0]);
              const OB = Math.max(Math.abs(XB.k.Xp[0].x), Math.abs(XB.k.Xp[0].y), Math.abs(XB.k.Xp[0].z));
              BB.updateFloat("vGeometryThickness", this.geometryThickness * OB)
            }
          }
          bindForSubMesh(OB, GB, YB) {
            const DB = this.JF(),
              QB = YB.materialDefines;
            if (!QB) return;
            const oB = YB.effect;
            if (!oB) return;
            this._activeEffect = oB, GB.getMeshUniformBuffer().bindToEffect(oB, "Mesh"), GB.transferToEffect(OB);
            const jB = DB.Lp();
            this._uniformBuffer.bindToEffect(oB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, DB, GB, OB, this.isFrozen), lO.d.Bind(jB.currentRenderPassId, this._activeEffect, GB, OB, this);
            const yB = DB.activeCamera;
            yB ? this._uniformBuffer.updateFloat4("cameraInfo", yB.minZ, yB.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const JB = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", JB[0], JB[1], JB[2], JB[3]), this._eventInfo.subMesh = YB, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), QB.OBJECTSPACE_NORMALMAP && (OB.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const MB = this._mustRebind(DB, oB, YB, GB.visibility),
              PB = jB._features.needToAlwaysBindUniformBuffers;
            (0, xB.i)(GB, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, PO.c)(this._activeEffect, this._vertexPullingMetadata);
            const zB = this._uniformBuffer;
            if (MB) {
              this.bindViewProjection(oB);
              const OB = this._getRadianceTexture();
              if (!zB.useUbo || !this.isFrozen || !zB.isSync || YB._drawWrapper._forceRebindOnNextCall) {
                if (DB.texturesEnabled) {
                  for (const BB in this._samplersList) {
                    const OB = this._samplersList[BB];
                    OB.value && (zB.updateFloat2(OB.samplerInfoName, OB.value.coordinatesIndex, OB.value.level), (0, xB.F)(OB.value, zB, OB.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (DB._mirroredCameraPosition ? zB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : zB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, xB.o)(DB, QB, zB, TB.c.White(), OB, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && zB.updateFloat("pointSize", this.pointSize);
                const BB = this._uniformsArray;
                for (let OB = 0, GB = BB.length; OB < GB; OB++) {
                  const GB = BB[OB];
                  (void 0 === GB.requiredDefine || QB[GB.requiredDefine]) && (4 === GB.numComponents ? (GB.populateVectorFromLinkedProperties(XB.k.Vector4[0]), zB.updateVector4(GB.name, XB.k.Vector4[0])) : 3 === GB.numComponents ? (GB.populateVectorFromLinkedProperties(XB.k.Xp[0]), zB.updateVector3(GB.name, XB.k.Xp[0])) : 2 === GB.numComponents ? (GB.populateVectorFromLinkedProperties(XB.k.Vector2[0]), zB.updateFloat2(GB.name, XB.k.Vector2[0].x, XB.k.Vector2[0].y)) : 1 === GB.numComponents && zB.updateFloat(GB.name, GB.linkedProperties[GB.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * DB.environmentIntensity, this._lightingInfos.w = 1, zB.updateVector4("vLightingIntensity", this._lightingInfos), zB.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (DB.texturesEnabled) {
                for (const BB in this._samplersList) {
                  const OB = this._samplersList[BB];
                  OB.value && zB.setTexture(OB.samplerName, OB.value)
                }
                if ((0, xB.q)(DB, QB, zB, OB, this.realTimeFiltering), QB.ENVIRONMENTBRDF && zB.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), QB.FUZZENVIRONMENTBRDF && zB.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), QB.REFRACTED_BACKGROUND && (zB.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), zB.TBB("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), XB.k.Xp[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), zB.updateVector3("vBackgroundRefractionInfos", XB.k.Xp[1])), (QB.ANISOTROPIC || QB.FUZZ || QB.REFRACTED_BACKGROUND || QB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && zB.setTexture("blueNoiseSampler", BB._noiseTextures[this.JF().uniqueId]), QB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const BB = this.sssIrradianceTexture.getSize().width,
                    OB = this.sssIrradianceTexture.getSize().height;
                  zB.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), zB.setTexture("sceneDepthSampler", this.sssDepthTexture), zB.updateFloat2("renderTargetSize", BB, OB)
                }
              }
              this.JF().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(GB) && this.JF().depthPeelingRenderer.bind(oB), this._eventInfo.subMesh = YB, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, MO.g)(this._activeEffect, this, DB), this.bindEyePosition(oB)
            } else PB && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, DB, DB.Lp(), YB), !MB && this.isFrozen && !PB || !DB.lightsEnabled || this._disableLighting || (0, xB.t)(DB, GB, this._activeEffect, QB, this._maxSimultaneousLights), !MB && this.isFrozen || (this.bindView(oB), (0, xB.k)(DB, GB, this._activeEffect, !0), QB.NUM_MORPH_INFLUENCERS && (0, xB.A)(GB, this._activeEffect), QB.BAKED_VERTEX_ANIMATION_TEXTURE && GB.bakedVertexAnimationManager?.bind(oB, QB.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, xB.x)(QB, this._activeEffect, DB)), this._afterBind(GB, this._activeEffect, YB), zB.update()
          }
          getAnimatables() {
            const BB = super.getAnimatables();
            for (const OB in this._samplersList) {
              const GB = this._samplersList[OB];
              GB.value && GB.value.animations && GB.value.animations.length > 0 && BB.push(GB.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && BB.push(this._radianceTexture), BB
          }
          getActiveTextures() {
            const BB = super.getActiveTextures();
            for (const OB in this._samplersList) {
              const GB = this._samplersList[OB];
              GB.value && BB.push(GB.value)
            }
            return this._radianceTexture && BB.push(this._radianceTexture), BB
          }
          hasTexture(BB) {
            if (super.hasTexture(BB)) return !0;
            for (const OB in this._samplersList) {
              if (this._samplersList[OB].value === BB) return !0
            }
            return this._radianceTexture === BB
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(BB, OB) {
            if (this._breakShaderLoadedCheck = !0, OB) {
              this._environmentBRDFTexture && this.JF().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.JF().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const BB in this._samplersList) {
                const OB = this._samplersList[BB];
                OB.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(BB, OB)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.JF().environmentTexture
          }
          _prepareEffect(OB, GB, YB) {
            let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              jB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(OB, GB, YB, oB, jB), !YB.isDirty) return null;
            YB.markAsProcessed();
            const yB = this.JF().Lp(),
              JB = new sB.c;
            let MB = 0;
            YB.USESPHERICALINVERTEX && JB.addFallback(MB++, "USESPHERICALINVERTEX"), YB.FOG && JB.addFallback(MB, "FOG"), YB.SPECULARAA && JB.addFallback(MB, "SPECULARAA"), YB.POINTSIZE && JB.addFallback(MB, "POINTSIZE"), YB.LOGARITHMICDEPTH && JB.addFallback(MB, "LOGARITHMICDEPTH"), YB.PARALLAX && JB.addFallback(MB, "PARALLAX"), YB.PARALLAX_RHS && JB.addFallback(MB, "PARALLAX_RHS"), YB.PARALLAXOCCLUSION && JB.addFallback(MB++, "PARALLAXOCCLUSION"), YB.ENVIRONMENTBRDF && JB.addFallback(MB++, "ENVIRONMENTBRDF"), YB.TANGENT && JB.addFallback(MB++, "TANGENT"), MB = (0, xB.J)(YB, JB, this._maxSimultaneousLights, MB), YB.SPECULARTERM && JB.addFallback(MB++, "SPECULARTERM"), YB.USESPHERICALFROMREFLECTIONMAP && JB.addFallback(MB++, "USESPHERICALFROMREFLECTIONMAP"), YB.USEIRRADIANCEMAP && JB.addFallback(MB++, "USEIRRADIANCEMAP"), YB.NORMAL && JB.addFallback(MB++, "NORMAL"), YB.VERTEXCOLOR && JB.addFallback(MB++, "VERTEXCOLOR"), YB.MORPHTARGETS && JB.addFallback(MB++, "MORPHTARGETS"), YB.MULTIVIEW && JB.addFallback(0, "MULTIVIEW");
            const PB = [wB.h.PositionKind];
            YB.NORMAL && PB.push(wB.h.NormalKind), YB.TANGENT && PB.push(wB.h.TangentKind);
            for (let BB = 1; BB <= 6; ++BB) YB["UV" + BB] && PB.push(`uv${1===BB?"":BB}`);
            YB.VERTEXCOLOR && PB.push(wB.h.ColorKind), (0, xB.M)(PB, OB, YB, JB), (0, xB.P)(PB, YB), (0, xB.R)(PB, OB, YB), (0, xB.L)(PB, OB, YB);
            let zB = "openpbr";
            const lB = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const BB in this._uniformsList) lB.push(BB);
            const pB = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            YB.FUZZENVIRONMENTBRDF && pB.push("environmentFuzzBrdfSampler"), YB.REFRACTED_BACKGROUND && pB.push("backgroundRefractionSampler"), (YB.ANISOTROPIC || YB.FUZZ || YB.REFRACTED_BACKGROUND || YB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && pB.push("blueNoiseSampler"), YB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (pB.push("sceneIrradianceSampler"), pB.push("sceneDepthSampler"));
            for (const BB in this._samplersList) {
              const OB = this._samplersList[BB];
              pB.push(OB.samplerName), lB.push(OB.samplerInfoName), lB.push(OB.samplerMatrixName)
            }(0, xB.mb)(lB, pB, !0);
            const qB = ["Material", "Scene", "Mesh"],
              ZB = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: YB.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = JB, this._eventInfo.fallbackRank = MB, this._eventInfo.defines = YB, this._eventInfo.uniforms = lB, this._eventInfo.attributes = PB, this._eventInfo.samplers = pB, this._eventInfo.uniformBuffersNames = qB, this._eventInfo.customCode = void 0, this._eventInfo.mesh = OB, this._eventInfo.indexParameters = ZB, this._callbackPluginEventGeneric(128, this._eventInfo), lO.d.AddUniformsAndSamplers(lB, pB), eB.c.AddUniforms(lB), eB.c.AddSamplers(pB), (0, MO.e)(lB), this._useVertexPulling) {
              const BB = GB?.geometry;
              BB && (this._vertexPullingMetadata = (0, PO.e)(BB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, OB) => {
                lB.push(`vp_${OB}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            CB.d && (CB.d.PrepareUniforms(lB, YB), CB.d.PrepareSamplers(pB, YB)), (0, xB.nb)({
              uniformsNames: lB,
              uniformBuffersNames: qB,
              samplers: pB,
              defines: YB,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const NB = {};
            this.customShaderNameResolve && (zB = this.customShaderNameResolve(zB, lB, qB, pB, YB, PB, NB));
            const RB = YB.toString(),
              WB = yB.createEffect(zB, {
                attributes: PB,
                uniformsNames: lB,
                uniformBuffersNames: qB,
                samplers: pB,
                defines: RB,
                fallbacks: JB,
                onCompiled: DB,
                onError: QB,
                indexParameters: ZB,
                processFinalCode: NB.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: YB.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: BB._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, yB);
            return this._eventInfo.customCode = void 0, WB
          }
          _prepareDefines(OB, GB, YB) {
            let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const jB = GB.hasThinInstances,
              yB = this.JF(),
              JB = yB.Lp();
            (0, xB.$)(yB, OB, YB, !0, this._maxSimultaneousLights, this._disableLighting), YB._needNormals = !0, (0, xB.db)(yB, YB);
            const MB = this.needAlphaBlendingForMesh(OB) && this.JF().useOrderIndependentTransparency;
            if ((0, xB.jb)(yB, YB, this.canRenderToMRT && !MB), (0, xB.gb)(yB, YB, MB), lO.d.PrepareDefines(JB.currentRenderPassId, OB, YB), YB._areTexturesDirty) {
              YB._needUVs = !1;
              for (let BB = 1; BB <= 6; ++BB) YB["MAINUV" + BB] = !1;
              if (yB.texturesEnabled) {
                for (const GB in this._samplersList) {
                  const BB = this._samplersList[GB];
                  BB.value ? ((0, xB.ab)(BB.value, YB, BB.textureDefine), YB[BB.textureDefine + "_GAMMA"] = BB.value.gammaSpace) : YB[BB.textureDefine] = !1
                }
                const BB = this._getRadianceTexture(),
                  OB = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || JB.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, xB._)(yB, BB, YB, this.realTimeFiltering, this.realTimeFilteringQuality, !OB), this._baseMetalnessTexture && (YB.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), YB.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, YB.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, YB.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, YB.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, YB.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, YB.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, YB.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, YB.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, YB.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, YB.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, YB.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && vB.d.DiffuseTextureEnabled ? (YB.PARALLAX = !0, YB.PARALLAX_RHS = yB.useRightHandedSystem, YB.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : YB.PARALLAX = !1, YB.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (YB.PARALLAX = !1, YB.PARALLAX_RHS = !1, YB.PARALLAXOCCLUSION = !1, YB.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && vB.d.ReflectionTextureEnabled ? (YB.ENVIRONMENTBRDF = !0, YB.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (YB.ENVIRONMENTBRDF = !1, YB.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? YB.FUZZENVIRONMENTBRDF = !0 : YB.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  YB.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && vB.d.RefractionTextureEnabled, YB.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, YB.REFRACTED_LIGHTS = !0;
                  const BB = this._getRadianceTexture();
                  BB ? (YB.REFRACTED_ENVIRONMENT = vB.d.RefractionTextureEnabled, YB.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.JF().useRightHandedSystem ? !BB.invertZ : BB.invertZ, YB.REFRACTED_ENVIRONMENT_LOCAL_CUBE = BB.isCube && BB.boundingBoxSize) : YB.REFRACTED_ENVIRONMENT = !1
                } else YB.REFRACTED_BACKGROUND = !1, YB.REFRACTED_LIGHTS = !1, YB.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? YB.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : YB.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === QB.b.LIGHTFALLOFF_STANDARD ? (YB.USEPHYSICALLIGHTFALLOFF = !1, YB.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === QB.b.LIGHTFALLOFF_GLTF ? (YB.USEPHYSICALLIGHTFALLOFF = !1, YB.USEGLTFLIGHTFALLOFF = !0) : (YB.USEPHYSICALLIGHTFALLOFF = !0, YB.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? YB.TWOSIDEDLIGHTING = !0 : YB.TWOSIDEDLIGHTING = !1, YB.MIRRORED = !!yB._mirroredCameraPosition, YB.SPECULARAA = JB.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(YB._areTexturesDirty || YB._areMiscDirty) && (YB.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, YB.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, YB.ALPHABLEND = this.needAlphaBlendingForMesh(OB)), YB._areTexturesDirty && (YB.TEXTURE_REPETITION_MODE = JB.version > 1 || JB.isWebGPU ? this.textureRepetitionMode : 0), YB._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(YB), YB.FORCENORMALFORWARD = this._forceNormalForward, YB.RADIANCEOCCLUSION = this._useRadianceOcclusion, YB.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && BB._noiseTextures[yB.uniqueId] && vB.d.ReflectionTextureEnabled ? (YB.ANISOTROPIC = !0, OB.isVerticesDataPresent(wB.h.TangentKind) || (YB._needUVs = !0, YB.MAINUV1 = !0), this._useGltfStyleAnisotropy && (YB.USE_GLTF_STYLE_ANISOTROPY = !0), YB.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, YB.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (YB.ANISOTROPIC = !1, YB.USE_GLTF_STYLE_ANISOTROPY = !1, YB.ANISOTROPIC_BASE = !1, YB.ANISOTROPIC_COAT = !1), YB.THIN_FILM = this.thinFilmWeight > 0, YB.IRIDESCENCE = this.thinFilmWeight > 0, YB.DISPERSION = this.transmissionDispersionScale > 0, YB.SCATTERING = this.hasScattering;
            if (YB.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, YB.TRANSMISSION_SLAB = this.transmissionWeight > 0, YB.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, YB.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !YB.PREPASS && (YB.SUBSURFACE_SLAB || YB.TRANSMISSION_SLAB_VOLUME)) {
              let BB = !1;
              if (!this.sssIrradianceTexture && yB.geometryBufferRenderer) {
                const OB = yB.geometryBufferRenderer.getTextureIndex(EO.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = yB.geometryBufferRenderer.getGBuffer().textures[OB], BB = !0
              }
              if (!this.sssDepthTexture && yB.geometryBufferRenderer) {
                const OB = yB.geometryBufferRenderer.getTextureIndex(EO.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = yB.geometryBufferRenderer.getGBuffer().textures[OB], BB = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (YB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, BB && (YB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            YB.FUZZ = this.fuzzWeight > 0 && vB.d.ReflectionTextureEnabled, YB.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, YB.FUZZ ? (OB.isVerticesDataPresent(wB.h.TangentKind) || (YB._needUVs = !0, YB.MAINUV1 = !0), this._environmentFuzzBRDFTexture = LB(this.JF()), YB.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, YB.FUZZENVIRONMENTBRDF = !1, YB.FUZZ_IBL_SAMPLES = 0), YB._areMiscDirty && ((0, xB.cb)(OB, yB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(OB), YB, this._applyDecalMapAfterDetailMap, this._useVertexPulling, GB, this._isVertexOutputInvariant), YB.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !OB.isVerticesDataPresent(wB.h.NormalKind), YB.DEBUGMODE = this._debugMode), (0, xB.Y)(yB, JB, this, YB, !!DB, oB, jB), this._eventInfo.defines = YB, this._eventInfo.mesh = OB, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, xB.X)(OB, YB, !0, !0, !0, this._transparencyMode !== QB.b.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, OB = new WeakMap, YB = new WeakMap, DB = new WeakMap, oB = new WeakMap, jB = new WeakMap, yB = new WeakMap, JB = new WeakMap, MB = new WeakMap, PB = new WeakMap, zB = new WeakMap, lB = new WeakMap, pB = new WeakMap, qB = new WeakMap, ZB = new WeakMap, NB = new WeakMap, RB = new WeakMap, WB = new WeakMap, AB = new WeakMap, VB = new WeakMap, SB = new WeakMap, nB = new WeakMap, UB = new WeakMap, mB = new WeakMap, IB = new WeakMap, FB = new WeakMap, iB = new WeakMap, rB = new WeakMap, EB = new WeakMap, cB = new WeakMap, hB = new WeakMap, aB = new WeakMap, bB = new WeakMap, HB = new WeakMap, tB = new WeakMap, BO = new WeakMap, OO = new WeakMap, GO = new WeakMap, YO = new WeakMap, DO = new WeakMap, QO = new WeakMap, oO = new WeakMap, jO = new WeakMap, yO = new WeakMap, JO = new WeakMap, pO = new WeakMap, qO = new WeakMap, ZO = new WeakMap, NO = new WeakMap, RO = new WeakMap, WO = new WeakMap, AO = new WeakMap, VO = new WeakMap, SO = new WeakMap, fO = new WeakMap, kO = new WeakMap, dO = new WeakMap, KO = new WeakMap, uO = new WeakMap, mO = new WeakMap, IO = new WeakMap, FO = new WeakMap, iO = new WeakMap, LO = new WeakMap, gO = new WeakMap, rO = new WeakMap, XO = new WeakMap, wO = new WeakMap, cO = new WeakMap, aO = new WeakMap, CO = new WeakMap, HO = new WeakMap, xO = new WeakMap, tO = new WeakMap, BG = new WeakMap, OG = new WeakMap, GG = new WeakMap, YG = new WeakMap, DG = new WeakMap, QG = new WeakMap, oG = new WeakMap, jG = new WeakMap, yG = new WeakMap, JG = new WeakMap, MG = new WeakMap, PG = new WeakMap, zG = new WeakMap, lG = new WeakMap, pG = new WeakMap, qG = new WeakMap, ZG = new WeakMap, NG = new WeakMap, RG = new WeakMap, WG = new WeakMap, AG = new WeakMap, VG = new WeakMap, SG = new WeakMap, nG = new WeakMap, UG = new WeakMap, fG = new WeakMap, kG = new WeakMap, dG = new WeakMap, KG = new WeakMap, (() => {
          const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(mD[Symbol.metadata] ?? null) : void 0;
          uG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], mG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], IG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], FG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], iG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], LG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], gG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], rG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], XG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], wG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], EG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], cG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], hG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], aG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], eG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], TG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], bG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], CG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], HG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], vG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], sG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], xG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], tG = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], BY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], OY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], GY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], YY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], DY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], QY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], oY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], jY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], yY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], JY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], MY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], PY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], zY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], lY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], pY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], qY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], ZY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], NY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], RY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], WY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], AY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], VY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], SY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], nY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], UY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], fY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], kY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], dY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], KY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], uY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], mY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], IY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], FY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], iY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], LY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], gY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], rY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], XY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], wY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], EY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], cY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], hY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], aY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], eY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], TY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], bY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], CY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], HY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], vY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], sY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], xY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], tY = [(0, kB.e)("_markAllSubMeshesAsTexturesDirty")], BD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], OD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], GD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], YD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], DD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], QD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], oD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], jD = [(0, kB.L)()], yD = [(0, kB.L)()], JD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], MD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], PD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], zD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], lD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsLightsDirty")], pD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], qD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsLightsDirty")], ZD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], ND = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], RD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], WD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], AD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], VD = [(0, kB.g)("_markAllSubMeshesAsTexturesDirty")], SD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], nD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], UD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], fD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], kD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], dD = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], KD = [(0, kB.g)("_markAllSubMeshesAsMiscDirty")], uD = [(0, kB.L)()], (0, fB.h)(BB, null, uG, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseWeight" in BB,
              get: BB => BB.baseWeight,
              set: (BB, OB) => {
                BB.baseWeight = OB
              }
            },
            metadata: OB
          }, FD, iD), (0, fB.h)(BB, null, mG, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseWeightTexture" in BB,
              get: BB => BB.baseWeightTexture,
              set: (BB, OB) => {
                BB.baseWeightTexture = OB
              }
            },
            metadata: OB
          }, LD, gD), (0, fB.h)(BB, null, IG, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseColor" in BB,
              get: BB => BB.baseColor,
              set: (BB, OB) => {
                BB.baseColor = OB
              }
            },
            metadata: OB
          }, rD, XD), (0, fB.h)(BB, null, FG, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseColorTexture" in BB,
              get: BB => BB.baseColorTexture,
              set: (BB, OB) => {
                BB.baseColorTexture = OB
              }
            },
            metadata: OB
          }, wD, ED), (0, fB.h)(BB, null, iG, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseDiffuseRoughness" in BB,
              get: BB => BB.baseDiffuseRoughness,
              set: (BB, OB) => {
                BB.baseDiffuseRoughness = OB
              }
            },
            metadata: OB
          }, cD, hD), (0, fB.h)(BB, null, LG, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseDiffuseRoughnessTexture" in BB,
              get: BB => BB.baseDiffuseRoughnessTexture,
              set: (BB, OB) => {
                BB.baseDiffuseRoughnessTexture = OB
              }
            },
            metadata: OB
          }, aD, eD), (0, fB.h)(BB, null, gG, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseMetalness" in BB,
              get: BB => BB.baseMetalness,
              set: (BB, OB) => {
                BB.baseMetalness = OB
              }
            },
            metadata: OB
          }, TD, bD), (0, fB.h)(BB, null, rG, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseMetalnessTexture" in BB,
              get: BB => BB.baseMetalnessTexture,
              set: (BB, OB) => {
                BB.baseMetalnessTexture = OB
              }
            },
            metadata: OB
          }, CD, HD), (0, fB.h)(BB, null, XG, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularWeight" in BB,
              get: BB => BB.specularWeight,
              set: (BB, OB) => {
                BB.specularWeight = OB
              }
            },
            metadata: OB
          }, vD, sD), (0, fB.h)(BB, null, wG, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularWeightTexture" in BB,
              get: BB => BB.specularWeightTexture,
              set: (BB, OB) => {
                BB.specularWeightTexture = OB
              }
            },
            metadata: OB
          }, xD, tD), (0, fB.h)(BB, null, EG, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularColor" in BB,
              get: BB => BB.specularColor,
              set: (BB, OB) => {
                BB.specularColor = OB
              }
            },
            metadata: OB
          }, BQ, OQ), (0, fB.h)(BB, null, cG, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularColorTexture" in BB,
              get: BB => BB.specularColorTexture,
              set: (BB, OB) => {
                BB.specularColorTexture = OB
              }
            },
            metadata: OB
          }, GQ, YQ), (0, fB.h)(BB, null, hG, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularRoughness" in BB,
              get: BB => BB.specularRoughness,
              set: (BB, OB) => {
                BB.specularRoughness = OB
              }
            },
            metadata: OB
          }, DQ, QQ), (0, fB.h)(BB, null, aG, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularRoughnessTexture" in BB,
              get: BB => BB.specularRoughnessTexture,
              set: (BB, OB) => {
                BB.specularRoughnessTexture = OB
              }
            },
            metadata: OB
          }, oQ, jQ), (0, fB.h)(BB, null, eG, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularRoughnessAnisotropy" in BB,
              get: BB => BB.specularRoughnessAnisotropy,
              set: (BB, OB) => {
                BB.specularRoughnessAnisotropy = OB
              }
            },
            metadata: OB
          }, yQ, JQ), (0, fB.h)(BB, null, TG, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularRoughnessAnisotropyTexture" in BB,
              get: BB => BB.specularRoughnessAnisotropyTexture,
              set: (BB, OB) => {
                BB.specularRoughnessAnisotropyTexture = OB
              }
            },
            metadata: OB
          }, MQ, PQ), (0, fB.h)(BB, null, bG, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularIor" in BB,
              get: BB => BB.specularIor,
              set: (BB, OB) => {
                BB.specularIor = OB
              }
            },
            metadata: OB
          }, zQ, lQ), (0, fB.h)(BB, null, CG, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionWeight" in BB,
              get: BB => BB.transmissionWeight,
              set: (BB, OB) => {
                BB.transmissionWeight = OB
              }
            },
            metadata: OB
          }, pQ, qQ), (0, fB.h)(BB, null, HG, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionWeightTexture" in BB,
              get: BB => BB.transmissionWeightTexture,
              set: (BB, OB) => {
                BB.transmissionWeightTexture = OB
              }
            },
            metadata: OB
          }, ZQ, NQ), (0, fB.h)(BB, null, vG, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionColor" in BB,
              get: BB => BB.transmissionColor,
              set: (BB, OB) => {
                BB.transmissionColor = OB
              }
            },
            metadata: OB
          }, RQ, WQ), (0, fB.h)(BB, null, sG, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionColorTexture" in BB,
              get: BB => BB.transmissionColorTexture,
              set: (BB, OB) => {
                BB.transmissionColorTexture = OB
              }
            },
            metadata: OB
          }, AQ, VQ), (0, fB.h)(BB, null, xG, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDepth" in BB,
              get: BB => BB.transmissionDepth,
              set: (BB, OB) => {
                BB.transmissionDepth = OB
              }
            },
            metadata: OB
          }, SQ, nQ), (0, fB.h)(BB, null, tG, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDepthTexture" in BB,
              get: BB => BB.transmissionDepthTexture,
              set: (BB, OB) => {
                BB.transmissionDepthTexture = OB
              }
            },
            metadata: OB
          }, UQ, fQ), (0, fB.h)(BB, null, BY, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionScatter" in BB,
              get: BB => BB.transmissionScatter,
              set: (BB, OB) => {
                BB.transmissionScatter = OB
              }
            },
            metadata: OB
          }, kQ, dQ), (0, fB.h)(BB, null, OY, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionScatterTexture" in BB,
              get: BB => BB.transmissionScatterTexture,
              set: (BB, OB) => {
                BB.transmissionScatterTexture = OB
              }
            },
            metadata: OB
          }, KQ, uQ), (0, fB.h)(BB, null, GY, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionScatterAnisotropy" in BB,
              get: BB => BB.transmissionScatterAnisotropy,
              set: (BB, OB) => {
                BB.transmissionScatterAnisotropy = OB
              }
            },
            metadata: OB
          }, mQ, IQ), (0, fB.h)(BB, null, YY, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDispersionScale" in BB,
              get: BB => BB.transmissionDispersionScale,
              set: (BB, OB) => {
                BB.transmissionDispersionScale = OB
              }
            },
            metadata: OB
          }, FQ, iQ), (0, fB.h)(BB, null, DY, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDispersionScaleTexture" in BB,
              get: BB => BB.transmissionDispersionScaleTexture,
              set: (BB, OB) => {
                BB.transmissionDispersionScaleTexture = OB
              }
            },
            metadata: OB
          }, LQ, gQ), (0, fB.h)(BB, null, QY, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDispersionAbbeNumber" in BB,
              get: BB => BB.transmissionDispersionAbbeNumber,
              set: (BB, OB) => {
                BB.transmissionDispersionAbbeNumber = OB
              }
            },
            metadata: OB
          }, rQ, XQ), (0, fB.h)(BB, null, oY, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceWeight" in BB,
              get: BB => BB.subsurfaceWeight,
              set: (BB, OB) => {
                BB.subsurfaceWeight = OB
              }
            },
            metadata: OB
          }, wQ, EQ), (0, fB.h)(BB, null, jY, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceWeightTexture" in BB,
              get: BB => BB.subsurfaceWeightTexture,
              set: (BB, OB) => {
                BB.subsurfaceWeightTexture = OB
              }
            },
            metadata: OB
          }, cQ, hQ), (0, fB.h)(BB, null, yY, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceColor" in BB,
              get: BB => BB.subsurfaceColor,
              set: (BB, OB) => {
                BB.subsurfaceColor = OB
              }
            },
            metadata: OB
          }, aQ, eQ), (0, fB.h)(BB, null, JY, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceColorTexture" in BB,
              get: BB => BB.subsurfaceColorTexture,
              set: (BB, OB) => {
                BB.subsurfaceColorTexture = OB
              }
            },
            metadata: OB
          }, TQ, bQ), (0, fB.h)(BB, null, MY, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceRadius" in BB,
              get: BB => BB.subsurfaceRadius,
              set: (BB, OB) => {
                BB.subsurfaceRadius = OB
              }
            },
            metadata: OB
          }, CQ, HQ), (0, fB.h)(BB, null, PY, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceRadiusScale" in BB,
              get: BB => BB.subsurfaceRadiusScale,
              set: (BB, OB) => {
                BB.subsurfaceRadiusScale = OB
              }
            },
            metadata: OB
          }, vQ, sQ), (0, fB.h)(BB, null, zY, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceRadiusScaleTexture" in BB,
              get: BB => BB.subsurfaceRadiusScaleTexture,
              set: (BB, OB) => {
                BB.subsurfaceRadiusScaleTexture = OB
              }
            },
            metadata: OB
          }, xQ, tQ), (0, fB.h)(BB, null, lY, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceScatterAnisotropy" in BB,
              get: BB => BB.subsurfaceScatterAnisotropy,
              set: (BB, OB) => {
                BB.subsurfaceScatterAnisotropy = OB
              }
            },
            metadata: OB
          }, Bo, Oo), (0, fB.h)(BB, null, pY, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatWeight" in BB,
              get: BB => BB.coatWeight,
              set: (BB, OB) => {
                BB.coatWeight = OB
              }
            },
            metadata: OB
          }, Go, Yo), (0, fB.h)(BB, null, qY, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatWeightTexture" in BB,
              get: BB => BB.coatWeightTexture,
              set: (BB, OB) => {
                BB.coatWeightTexture = OB
              }
            },
            metadata: OB
          }, Do, Qo), (0, fB.h)(BB, null, ZY, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatColor" in BB,
              get: BB => BB.coatColor,
              set: (BB, OB) => {
                BB.coatColor = OB
              }
            },
            metadata: OB
          }, oo, jo), (0, fB.h)(BB, null, NY, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatColorTexture" in BB,
              get: BB => BB.coatColorTexture,
              set: (BB, OB) => {
                BB.coatColorTexture = OB
              }
            },
            metadata: OB
          }, yo, Jo), (0, fB.h)(BB, null, RY, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatRoughness" in BB,
              get: BB => BB.coatRoughness,
              set: (BB, OB) => {
                BB.coatRoughness = OB
              }
            },
            metadata: OB
          }, Mo, Po), (0, fB.h)(BB, null, WY, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatRoughnessTexture" in BB,
              get: BB => BB.coatRoughnessTexture,
              set: (BB, OB) => {
                BB.coatRoughnessTexture = OB
              }
            },
            metadata: OB
          }, zo, po), (0, fB.h)(BB, null, AY, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatRoughnessAnisotropy" in BB,
              get: BB => BB.coatRoughnessAnisotropy,
              set: (BB, OB) => {
                BB.coatRoughnessAnisotropy = OB
              }
            },
            metadata: OB
          }, qo, Zo), (0, fB.h)(BB, null, VY, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatRoughnessAnisotropyTexture" in BB,
              get: BB => BB.coatRoughnessAnisotropyTexture,
              set: (BB, OB) => {
                BB.coatRoughnessAnisotropyTexture = OB
              }
            },
            metadata: OB
          }, No, Ro), (0, fB.h)(BB, null, SY, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatIor" in BB,
              get: BB => BB.coatIor,
              set: (BB, OB) => {
                BB.coatIor = OB
              }
            },
            metadata: OB
          }, Wo, Ao), (0, fB.h)(BB, null, nY, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatDarkening" in BB,
              get: BB => BB.coatDarkening,
              set: (BB, OB) => {
                BB.coatDarkening = OB
              }
            },
            metadata: OB
          }, Vo, So), (0, fB.h)(BB, null, UY, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatDarkeningTexture" in BB,
              get: BB => BB.coatDarkeningTexture,
              set: (BB, OB) => {
                BB.coatDarkeningTexture = OB
              }
            },
            metadata: OB
          }, no, Uo), (0, fB.h)(BB, null, fY, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzWeight" in BB,
              get: BB => BB.fuzzWeight,
              set: (BB, OB) => {
                BB.fuzzWeight = OB
              }
            },
            metadata: OB
          }, fo, ko), (0, fB.h)(BB, null, kY, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzWeightTexture" in BB,
              get: BB => BB.fuzzWeightTexture,
              set: (BB, OB) => {
                BB.fuzzWeightTexture = OB
              }
            },
            metadata: OB
          }, Ko, uo), (0, fB.h)(BB, null, dY, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzColor" in BB,
              get: BB => BB.fuzzColor,
              set: (BB, OB) => {
                BB.fuzzColor = OB
              }
            },
            metadata: OB
          }, mo, Io), (0, fB.h)(BB, null, KY, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzColorTexture" in BB,
              get: BB => BB.fuzzColorTexture,
              set: (BB, OB) => {
                BB.fuzzColorTexture = OB
              }
            },
            metadata: OB
          }, Fo, io), (0, fB.h)(BB, null, uY, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzRoughness" in BB,
              get: BB => BB.fuzzRoughness,
              set: (BB, OB) => {
                BB.fuzzRoughness = OB
              }
            },
            metadata: OB
          }, Lo, go), (0, fB.h)(BB, null, mY, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzRoughnessTexture" in BB,
              get: BB => BB.fuzzRoughnessTexture,
              set: (BB, OB) => {
                BB.fuzzRoughnessTexture = OB
              }
            },
            metadata: OB
          }, ro, Xo), (0, fB.h)(BB, null, IY, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryThinWalled" in BB,
              get: BB => BB.geometryThinWalled,
              set: (BB, OB) => {
                BB.geometryThinWalled = OB
              }
            },
            metadata: OB
          }, wo, Eo), (0, fB.h)(BB, null, FY, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryNormalTexture" in BB,
              get: BB => BB.geometryNormalTexture,
              set: (BB, OB) => {
                BB.geometryNormalTexture = OB
              }
            },
            metadata: OB
          }, co, ho), (0, fB.h)(BB, null, iY, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryTangent" in BB,
              get: BB => BB.geometryTangent,
              set: (BB, OB) => {
                BB.geometryTangent = OB
              }
            },
            metadata: OB
          }, ao, eo), (0, fB.h)(BB, null, LY, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryTangentTexture" in BB,
              get: BB => BB.geometryTangentTexture,
              set: (BB, OB) => {
                BB.geometryTangentTexture = OB
              }
            },
            metadata: OB
          }, To, bo), (0, fB.h)(BB, null, gY, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryCoatNormalTexture" in BB,
              get: BB => BB.geometryCoatNormalTexture,
              set: (BB, OB) => {
                BB.geometryCoatNormalTexture = OB
              }
            },
            metadata: OB
          }, Co, Ho), (0, fB.h)(BB, null, rY, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryCoatTangent" in BB,
              get: BB => BB.geometryCoatTangent,
              set: (BB, OB) => {
                BB.geometryCoatTangent = OB
              }
            },
            metadata: OB
          }, vo, so), (0, fB.h)(BB, null, XY, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryCoatTangentTexture" in BB,
              get: BB => BB.geometryCoatTangentTexture,
              set: (BB, OB) => {
                BB.geometryCoatTangentTexture = OB
              }
            },
            metadata: OB
          }, xo, to), (0, fB.h)(BB, null, wY, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryOpacity" in BB,
              get: BB => BB.geometryOpacity,
              set: (BB, OB) => {
                BB.geometryOpacity = OB
              }
            },
            metadata: OB
          }, Bj, Oj), (0, fB.h)(BB, null, EY, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryOpacityTexture" in BB,
              get: BB => BB.geometryOpacityTexture,
              set: (BB, OB) => {
                BB.geometryOpacityTexture = OB
              }
            },
            metadata: OB
          }, Gj, Yj), (0, fB.h)(BB, null, cY, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryThickness" in BB,
              get: BB => BB.geometryThickness,
              set: (BB, OB) => {
                BB.geometryThickness = OB
              }
            },
            metadata: OB
          }, Dj, Qj), (0, fB.h)(BB, null, hY, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryThicknessTexture" in BB,
              get: BB => BB.geometryThicknessTexture,
              set: (BB, OB) => {
                BB.geometryThicknessTexture = OB
              }
            },
            metadata: OB
          }, oj, jj), (0, fB.h)(BB, null, aY, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissionLuminance" in BB,
              get: BB => BB.emissionLuminance,
              set: (BB, OB) => {
                BB.emissionLuminance = OB
              }
            },
            metadata: OB
          }, yj, Jj), (0, fB.h)(BB, null, eY, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissionColor" in BB,
              get: BB => BB.emissionColor,
              set: (BB, OB) => {
                BB.emissionColor = OB
              }
            },
            metadata: OB
          }, Mj, Pj), (0, fB.h)(BB, null, TY, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissionColorTexture" in BB,
              get: BB => BB.emissionColorTexture,
              set: (BB, OB) => {
                BB.emissionColorTexture = OB
              }
            },
            metadata: OB
          }, zj, lj), (0, fB.h)(BB, null, bY, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmWeight" in BB,
              get: BB => BB.thinFilmWeight,
              set: (BB, OB) => {
                BB.thinFilmWeight = OB
              }
            },
            metadata: OB
          }, pj, qj), (0, fB.h)(BB, null, CY, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmWeightTexture" in BB,
              get: BB => BB.thinFilmWeightTexture,
              set: (BB, OB) => {
                BB.thinFilmWeightTexture = OB
              }
            },
            metadata: OB
          }, Zj, Nj), (0, fB.h)(BB, null, HY, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmThickness" in BB,
              get: BB => BB.thinFilmThickness,
              set: (BB, OB) => {
                BB.thinFilmThickness = OB
              }
            },
            metadata: OB
          }, Rj, Wj), (0, fB.h)(BB, null, vY, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmThicknessMin" in BB,
              get: BB => BB.thinFilmThicknessMin,
              set: (BB, OB) => {
                BB.thinFilmThicknessMin = OB
              }
            },
            metadata: OB
          }, Aj, Vj), (0, fB.h)(BB, null, sY, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmThicknessTexture" in BB,
              get: BB => BB.thinFilmThicknessTexture,
              set: (BB, OB) => {
                BB.thinFilmThicknessTexture = OB
              }
            },
            metadata: OB
          }, Sj, nj), (0, fB.h)(BB, null, xY, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmIor" in BB,
              get: BB => BB.thinFilmIor,
              set: (BB, OB) => {
                BB.thinFilmIor = OB
              }
            },
            metadata: OB
          }, Uj, fj), (0, fB.h)(BB, null, tY, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "ambientOcclusionTexture" in BB,
              get: BB => BB.ambientOcclusionTexture,
              set: (BB, OB) => {
                BB.ambientOcclusionTexture = OB
              }
            },
            metadata: OB
          }, kj, dj), (0, fB.h)(BB, null, BD, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: BB => "directIntensity" in BB,
              get: BB => BB.directIntensity,
              set: (BB, OB) => {
                BB.directIntensity = OB
              }
            },
            metadata: OB
          }, Kj, uj), (0, fB.h)(BB, null, OD, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: BB => "environmentIntensity" in BB,
              get: BB => BB.environmentIntensity,
              set: (BB, OB) => {
                BB.environmentIntensity = OB
              }
            },
            metadata: OB
          }, mj, Ij), (0, fB.h)(BB, null, GD, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "useSpecularWeightFromTextureAlpha" in BB,
              get: BB => BB.useSpecularWeightFromTextureAlpha,
              set: (BB, OB) => {
                BB.useSpecularWeightFromTextureAlpha = OB
              }
            },
            metadata: OB
          }, Fj, ij), (0, fB.h)(BB, null, YD, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceAlphaTest" in BB,
              get: BB => BB.forceAlphaTest,
              set: (BB, OB) => {
                BB.forceAlphaTest = OB
              }
            },
            metadata: OB
          }, Lj, gj), (0, fB.h)(BB, null, DD, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: BB => "alphaCutOff" in BB,
              get: BB => BB.alphaCutOff,
              set: (BB, OB) => {
                BB.alphaCutOff = OB
              }
            },
            metadata: OB
          }, rj, Xj), (0, fB.h)(BB, null, QD, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: BB => "useAmbientOcclusionFromMetallicTextureRed" in BB,
              get: BB => BB.useAmbientOcclusionFromMetallicTextureRed,
              set: (BB, OB) => {
                BB.useAmbientOcclusionFromMetallicTextureRed = OB
              }
            },
            metadata: OB
          }, wj, Ej), (0, fB.h)(BB, null, oD, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "useAmbientInGrayScale" in BB,
              get: BB => BB.useAmbientInGrayScale,
              set: (BB, OB) => {
                BB.useAmbientInGrayScale = OB
              }
            },
            metadata: OB
          }, cj, hj), (0, fB.h)(BB, null, jD, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: BB => "usePhysicalLightFalloff" in BB,
              get: BB => BB.usePhysicalLightFalloff
            },
            metadata: OB
          }, null, ID), (0, fB.h)(BB, null, yD, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: BB => "useGLTFLightFalloff" in BB,
              get: BB => BB.useGLTFLightFalloff
            },
            metadata: OB
          }, null, ID), (0, fB.h)(BB, null, JD, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "useObjectSpaceNormalMap" in BB,
              get: BB => BB.useObjectSpaceNormalMap,
              set: (BB, OB) => {
                BB.useObjectSpaceNormalMap = OB
              }
            },
            metadata: OB
          }, aj, ej), (0, fB.h)(BB, null, MD, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: BB => "useParallax" in BB,
              get: BB => BB.useParallax,
              set: (BB, OB) => {
                BB.useParallax = OB
              }
            },
            metadata: OB
          }, Tj, bj), (0, fB.h)(BB, null, PD, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "useParallaxOcclusion" in BB,
              get: BB => BB.useParallaxOcclusion,
              set: (BB, OB) => {
                BB.useParallaxOcclusion = OB
              }
            },
            metadata: OB
          }, Cj, Hj), (0, fB.h)(BB, null, zD, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: BB => "parallaxScaleBias" in BB,
              get: BB => BB.parallaxScaleBias,
              set: (BB, OB) => {
                BB.parallaxScaleBias = OB
              }
            },
            metadata: OB
          }, vj, sj), (0, fB.h)(BB, null, lD, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "disableLighting" in BB,
              get: BB => BB.disableLighting,
              set: (BB, OB) => {
                BB.disableLighting = OB
              }
            },
            metadata: OB
          }, xj, tj), (0, fB.h)(BB, null, pD, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceIrradianceInFragment" in BB,
              get: BB => BB.forceIrradianceInFragment,
              set: (BB, OB) => {
                BB.forceIrradianceInFragment = OB
              }
            },
            metadata: OB
          }, By, Oy), (0, fB.h)(BB, null, qD, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: BB => "maxSimultaneousLights" in BB,
              get: BB => BB.maxSimultaneousLights,
              set: (BB, OB) => {
                BB.maxSimultaneousLights = OB
              }
            },
            metadata: OB
          }, Gy, Yy), (0, fB.h)(BB, null, ZD, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertNormalMapX" in BB,
              get: BB => BB.invertNormalMapX,
              set: (BB, OB) => {
                BB.invertNormalMapX = OB
              }
            },
            metadata: OB
          }, Dy, Qy), (0, fB.h)(BB, null, ND, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertNormalMapY" in BB,
              get: BB => BB.invertNormalMapY,
              set: (BB, OB) => {
                BB.invertNormalMapY = OB
              }
            },
            metadata: OB
          }, oy, jy), (0, fB.h)(BB, null, RD, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "twoSidedLighting" in BB,
              get: BB => BB.twoSidedLighting,
              set: (BB, OB) => {
                BB.twoSidedLighting = OB
              }
            },
            metadata: OB
          }, yy, Jy), (0, fB.h)(BB, null, WD, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: BB => "useAlphaFresnel" in BB,
              get: BB => BB.useAlphaFresnel,
              set: (BB, OB) => {
                BB.useAlphaFresnel = OB
              }
            },
            metadata: OB
          }, My, Py), (0, fB.h)(BB, null, AD, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: BB => "useLinearAlphaFresnel" in BB,
              get: BB => BB.useLinearAlphaFresnel,
              set: (BB, OB) => {
                BB.useLinearAlphaFresnel = OB
              }
            },
            metadata: OB
          }, zy, ly), (0, fB.h)(BB, null, VD, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "environmentBRDFTexture" in BB,
              get: BB => BB.environmentBRDFTexture,
              set: (BB, OB) => {
                BB.environmentBRDFTexture = OB
              }
            },
            metadata: OB
          }, py, qy), (0, fB.h)(BB, null, SD, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceNormalForward" in BB,
              get: BB => BB.forceNormalForward,
              set: (BB, OB) => {
                BB.forceNormalForward = OB
              }
            },
            metadata: OB
          }, Zy, Ny), (0, fB.h)(BB, null, nD, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: BB => "enableSpecularAntiAliasing" in BB,
              get: BB => BB.enableSpecularAntiAliasing,
              set: (BB, OB) => {
                BB.enableSpecularAntiAliasing = OB
              }
            },
            metadata: OB
          }, Ry, Wy), (0, fB.h)(BB, null, UD, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "useHorizonOcclusion" in BB,
              get: BB => BB.useHorizonOcclusion,
              set: (BB, OB) => {
                BB.useHorizonOcclusion = OB
              }
            },
            metadata: OB
          }, Ay, Vy), (0, fB.h)(BB, null, fD, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "useRadianceOcclusion" in BB,
              get: BB => BB.useRadianceOcclusion,
              set: (BB, OB) => {
                BB.useRadianceOcclusion = OB
              }
            },
            metadata: OB
          }, Sy, ny), (0, fB.h)(BB, null, kD, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: BB => "unlit" in BB,
              get: BB => BB.unlit,
              set: (BB, OB) => {
                BB.unlit = OB
              }
            },
            metadata: OB
          }, Uy, fy), (0, fB.h)(BB, null, dD, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "applyDecalMapAfterDetailMap" in BB,
              get: BB => BB.applyDecalMapAfterDetailMap,
              set: (BB, OB) => {
                BB.applyDecalMapAfterDetailMap = OB
              }
            },
            metadata: OB
          }, ky, dy), (0, fB.h)(BB, null, KD, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "debugMode" in BB,
              get: BB => BB.debugMode,
              set: (BB, OB) => {
                BB.debugMode = OB
              }
            },
            metadata: OB
          }, Ky, uy), (0, fB.h)(BB, null, uD, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "transparencyMode" in BB,
              get: BB => BB.transparencyMode
            },
            metadata: OB
          }, null, ID), OB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: OB
          })
        })(), BB.SSS_QUALITY_LOW = 0, BB.SSS_QUALITY_MEDIUM = 1, BB.SSS_QUALITY_HIGH = 2, BB._noiseTextures = {}, BB.ForceGLSL = !1, BB._ShaderLoader = new zO.d((() => [Promise.all([GB.e(626), GB.e(689)]).then((() => GB(64315))), Promise.all([GB.e(631), GB.e(627), GB.e(688), GB.e(693)]).then((() => GB(64327)))]), (() => [Promise.all([GB.e(645), GB.e(647), GB.e(692)]).then((() => GB(64369))), Promise.all([GB.e(645), GB.e(648), GB.e(691), GB.e(694)]).then((() => GB(64382)))])), BB
      })(),
      tO = !1;
    tO || (tO = !0, (0, CB.f)(), (0, cO.f)("BABYLON.OpenPBRMaterial", xO));
    var BG = GB(37802);
    class OG {
      constructor(BB) {
        this.name = iO.b.NAME_PROCEDURALTEXTURE, this.eq = BB
      }
      register() {
        this.eq._beforeClearStage.registerStep(iO.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.eq.proceduralTexturesEnabled) {
          UO.j.StartPerformanceCounter("Procedural textures", this.eq.proceduralTextures.length > 0);
          for (let BB = 0; BB < this.eq.proceduralTextures.length; BB++) {
            const OB = this.eq.proceduralTextures[BB];
            OB._shouldRender() && OB.render()
          }
          UO.j.EndPerformanceCounter("Procedural textures", this.eq.proceduralTextures.length > 0)
        }
      }
    }
    var GG = GB(41323);
    let YG = (() => {
      var BB;
      let OB, YB, DB, oB, jB, yB = uB.e,
        JB = [],
        MB = [],
        PB = [],
        zB = [],
        lB = [],
        pB = [],
        ZB = [],
        NB = [],
        RB = [];
      return BB = class extends yB {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(BB, OB, GB, YB) {
          let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            QB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            jB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, YB, !QB), this.isEnabled = ((0, fB.j)(this, JB), (0, fB.j)(this, MB, !0)), this.autoClear = ((0, fB.j)(this, PB), (0, fB.j)(this, zB, !0)), this.onGenerated = (0, fB.j)(this, lB), this.onGeneratedObservable = new BG.b, this.onBeforeGenerationObservable = new BG.b, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, fB.j)(this, pB, void 0), this._drawWrapper = (0, fB.j)(this, ZB), this._textures = {}, this._size = (0, fB.j)(this, NB, void 0), this._textureType = (0, fB.j)(this, RB), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === DB || DB instanceof uB.e ? (this._options = {}, this._fallbackTexture = DB) : (this._options = DB, this._fallbackTexture = DB.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let yB = (YB = this.JF() || qB.b.LastCreatedScene)._getComponent(iO.b.NAME_PROCEDURALTEXTURE);
          yB || (yB = new OG(YB), YB.pDB(yB)), this._options.skipSceneRegistration || YB.proceduralTextures.push(this), this._fullEngine = YB.Lp(), this.name = BB, this.isRenderTarget = !0, this._size = OB, this._textureType = jB, this._generateMipMaps = QB, this._drawWrapper = new GG.d(this._fullEngine), this.setFragment(GB);
          const WB = this._createRtWrapper(oB, OB, QB, jB);
          this._texture = WB.texture;
          const AB = [];
          AB.push(1, 1), AB.push(-1, 1), AB.push(-1, -1), AB.push(1, -1), this._vertexBuffers[wB.h.PositionKind] = new wB.h(this._fullEngine, AB, wB.h.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(BB, OB, GB, YB) {
          return BB ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(OB, {
            generateMipMaps: GB,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: YB,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(OB, {
            generateMipMaps: GB,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: YB,
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
            OB = [];
          OB.push(0), OB.push(1), OB.push(2), OB.push(0), OB.push(2), OB.push(3), this._indexBuffer = BB.createIndexBuffer(OB)
        }
        _rebuild() {
          const BB = this._vertexBuffers[wB.h.PositionKind];
          BB && BB._rebuild(), this._createIndexBuffer(), this.refreshRate === fO.d.REFRESHRATE_RENDER_ONCE && (this.refreshRate = fO.d.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(BB) {
          if (this.isReady()) return void BB(this);
          const OB = this.getEffect();
          OB && OB.executeWhenCompiled((() => {
            BB(this)
          }))
        }
        isReady() {
          const BB = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const OB = this._getDefines();
          if (this._drawWrapper.effect && OB === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const YB = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== OB && (this._cachedDefines = OB, this._drawWrapper.effect = BB.createEffect(YB, [wB.h.PositionKind], this._uniforms, this._samplers, OB, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([GB.e(697).then((() => GB(64437))), this._options.extraInitializationsAsync()]) : await Promise.all([GB.e(698).then((() => GB(64443))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await GB.e(697).then((() => GB(64437))) : await GB.e(698).then((() => GB(64443)))
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
        resize(BB, OB) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const GB = this._texture.isCube;
          this._rtWrapper.dispose();
          const YB = this._createRtWrapper(GB, BB, OB, this._textureType);
          this._texture = YB.texture, this._size = BB, this._generateMipMaps = OB
        }
        _checkUniform(BB) {
          -1 === this._uniforms.indexOf(BB) && this._uniforms.push(BB)
        }
        setTexture(BB, OB) {
          return -1 === this._samplers.indexOf(BB) && this._samplers.push(BB), this._textures[BB] = OB, this
        }
        setFloat(BB, OB) {
          return this._checkUniform(BB), this._floats[BB] = OB, this
        }
        setInt(BB, OB) {
          return this._checkUniform(BB), this._ints[BB] = OB, this
        }
        setFloats(BB, OB) {
          return this._checkUniform(BB), this._floatsArrays[BB] = OB, this
        }
        setColor3(BB, OB) {
          return this._checkUniform(BB), this._colors3[BB] = OB, this
        }
        setColor4(BB, OB) {
          return this._checkUniform(BB), this._colors4[BB] = OB, this
        }
        setVector2(BB, OB) {
          return this._checkUniform(BB), this._vectors2[BB] = OB, this
        }
        setVector3(BB, OB) {
          return this._checkUniform(BB), this._vectors3[BB] = OB, this
        }
        setVector4(BB, OB) {
          return this._checkUniform(BB), this._vectors4[BB] = OB, this
        }
        setMatrix(BB, OB) {
          return this._checkUniform(BB), this._matrices[BB] = OB, this
        }
        render(BB) {
          const OB = this.JF();
          if (!OB) return;
          const GB = this._fullEngine;
          if (GB.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), GB.setState(!1), !this.nodeMaterialSource) {
            for (const BB in this._textures) this._drawWrapper.effect.setTexture(BB, this._textures[BB]);
            for (const BB in this._ints) this._drawWrapper.effect.setInt(BB, this._ints[BB]);
            for (const BB in this._floats) this._drawWrapper.effect.setFloat(BB, this._floats[BB]);
            for (const BB in this._floatsArrays) this._drawWrapper.effect.setArray(BB, this._floatsArrays[BB]);
            for (const BB in this._colors3) this._drawWrapper.effect.setColor3(BB, this._colors3[BB]);
            for (const BB in this._colors4) {
              const OB = this._colors4[BB];
              this._drawWrapper.effect.setFloat4(BB, OB.r, OB.g, OB.b, OB.a)
            }
            for (const BB in this._vectors2) this._drawWrapper.effect.setVector2(BB, this._vectors2[BB]);
            for (const BB in this._vectors3) this._drawWrapper.effect.setVector3(BB, this._vectors3[BB]);
            for (const BB in this._vectors4) this._drawWrapper.effect.setVector4(BB, this._vectors4[BB]);
            for (const BB in this._matrices) this._drawWrapper.effect.setMatrix(BB, this._matrices[BB])
          }
          if (!this._texture || !this._rtWrapper) return;
          GB._enableGPUDebugMarkers && GB._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const YB = GB.currentViewport;
          if (this.isCube)
            for (let DB = 0; DB < 6; DB++) GB.bindFramebuffer(this._rtWrapper, DB, void 0, void 0, !0), GB.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", DB), this.autoClear && GB.clear(OB.clearColor, !0, !1, !1), GB.drawElementsType(QB.b.TriangleFillMode, 0, 6), GB.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let BB = 1;
            this._rtWrapper.is3D ? BB = this._rtWrapper.depth : this._rtWrapper.is2DArray && (BB = this._rtWrapper.layers);
            for (let YB = 0; YB < BB; YB++) {
              if (GB.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, YB), GB.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== BB ? YB / (BB - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", YB);
                for (const BB in this._textures) this._drawWrapper.effect.setTexture(BB, this._textures[BB])
              }
              this.autoClear && GB.clear(OB.clearColor, !0, !1, !1), GB.drawElementsType(QB.b.TriangleFillMode, 0, 6), GB.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          YB && GB.setViewport(YB), this.isCube && GB.generateMipMapsForCubemap(this._texture, !0), GB._enableGPUDebugMarkers && GB._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const OB = this.getSize(),
            GB = new BB(this.name, OB.width, this._fragment, this.JF(), this._fallbackTexture, this._generateMipMaps);
          return GB.hasAlpha = this.hasAlpha, GB.level = this.level, GB.coordinatesMode = this.coordinatesMode, GB
        }
        dispose() {
          const BB = this.JF();
          if (!BB) return;
          const OB = BB.proceduralTextures.indexOf(this);
          OB >= 0 && BB.proceduralTextures.splice(OB, 1);
          const GB = this._vertexBuffers[wB.h.PositionKind];
          GB && (GB.dispose(), this._vertexBuffers[wB.h.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const GB = "function" === typeof Symbol && Symbol.metadata ? Object.create(yB[Symbol.metadata] ?? null) : void 0;
        OB = [(0, kB.L)()], YB = [(0, kB.L)()], DB = [(0, kB.L)()], oB = [(0, kB.L)()], jB = [(0, kB.L)()], (0, fB.h)(BB, null, jB, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: BB => "refreshRate" in BB,
            get: BB => BB.refreshRate
          },
          metadata: GB
        }, null, JB), (0, fB.h)(null, null, OB, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, OB) => {
              BB.isEnabled = OB
            }
          },
          metadata: GB
        }, MB, PB), (0, fB.h)(null, null, YB, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: BB => "autoClear" in BB,
            get: BB => BB.autoClear,
            set: (BB, OB) => {
              BB.autoClear = OB
            }
          },
          metadata: GB
        }, zB, lB), (0, fB.h)(null, null, DB, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: BB => "_generateMipMaps" in BB,
            get: BB => BB._generateMipMaps,
            set: (BB, OB) => {
              BB._generateMipMaps = OB
            }
          },
          metadata: GB
        }, pB, ZB), (0, fB.h)(null, null, oB, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: BB => "_size" in BB,
            get: BB => BB._size,
            set: (BB, OB) => {
              BB._size = OB
            }
          },
          metadata: GB
        }, NB, RB), GB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: GB
        })
      })(), BB
    })();

    function DG(BB) {
      return "texture" in BB
    }

    function QG(BB) {
      return "value" in BB
    }
    async function oG(BB, OB, YB) {
      const DB = [OB.red, OB.green, OB.blue, OB.alpha],
        QB = [],
        oB = [];
      for (let GB = 0; GB < 4; GB++) {
        const BB = DB[GB];
        if (BB)
          if (DG(BB)) {
            if (BB.sourceChannel < 0 || BB.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let OB = QB.indexOf(BB.texture); - 1 === OB && (OB = QB.length, QB.push(BB.texture)), oB[GB] = OB
          } else {
            if (!QG(BB)) throw new Error("Invalid channel input configuration");
            if (BB.value < 0 || BB.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            oB[GB] = -1
          }
        else oB[GB] = -1
      }
      let jB = OB.outputSize;
      if (!jB && QB.length > 0) {
        let BB = 0;
        for (const OB of QB) {
          const GB = OB.getSize(),
            YB = Math.max(GB.width, GB.height);
          YB > BB && (BB = YB, jB = GB.width === GB.height ? BB : GB)
        }
      }
      jB = jB || 512;
      const yB = [],
        JB = new Set;
      for (let GB = 0; GB < 4; GB++) {
        const BB = DB[GB],
          OB = ["RED", "GREEN", "BLUE", "ALPHA"][GB];
        if (BB && DG(BB)) {
          yB.push(`${OB}_FROM_TEXTURE`);
          const BB = oB[GB];
          JB.add(BB)
        }
      }
      JB.forEach((BB => {
        yB.push(`USE_TEXTURE${BB}`)
      }));
      const MB = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: YB.Lp().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            YB.Lp().isWebGPU ? await Promise.all([GB.e(695).then((() => GB(64422)))]) : await Promise.all([GB.e(696).then((() => GB(64428)))])
          },
          skipSceneRegistration: !0
        },
        PB = new YG(BB, jB, "textureMerger", YB, MB);
      PB.refreshRate = -1, PB.defines = yB.length > 0 ? "#define " + yB.join("\n#define ") + "\n" : "";
      for (let GB = 0; GB < QB.length; GB++) zB = QB[GB], (lB = PB).uOffset = zB.uOffset, lB.vOffset = zB.vOffset, lB.uScale = zB.uScale, lB.vScale = zB.vScale, lB.uAng = zB.uAng, lB.vAng = zB.vAng, lB.wAng = zB.wAng, lB.uRotationCenter = zB.uRotationCenter, lB.vRotationCenter = zB.vRotationCenter, PB.setTexture(`inputTexture${GB}`, QB[GB]);
      var zB, lB;
      for (let GB = 0; GB < 4; GB++) {
        const BB = DB[GB],
          OB = ["red", "green", "blue", "alpha"][GB];
        if (BB && DG(BB)) {
          const YB = oB[GB];
          PB.setInt(`${OB}TextureIndex`, YB), PB.setInt(`${OB}SourceChannel`, BB.sourceChannel)
        } else {
          let YB;
          YB = BB && QG(BB) ? BB.value : 3 === GB ? 1 : 0, PB.setFloat(`${OB}ConstantValue`, YB)
        }
      }
      return await new Promise(((BB, OB) => {
        PB.executeWhenReady((() => {
          try {
            PB.render(), BB(PB)
          } catch (GB) {
            OB(GB instanceof Error ? GB : new Error(String(GB)))
          }
        }))
      }))
    }

    function jG(BB, OB) {
      return {
        texture: BB,
        sourceChannel: OB
      }
    }

    function yG(BB) {
      return {
        value: BB
      }
    }

    function JG(BB, OB, GB, YB) {
      return {
        red: BB,
        green: OB,
        blue: GB,
        alpha: YB
      }
    }
    var MG = GB(40833),
      PG = GB(40929),
      zG = GB(37793),
      lG = GB(40982),
      pG = GB(40918);
    class qG {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class ZG extends MG.c {
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
        return !!this._options?.enableMultiview || this.Pq > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new qG;
        super(null), void 0 === BB.deterministicLockstep && (BB.deterministicLockstep = !1), void 0 !== BB.timeStep && (this._timeStep = BB.timeStep), void 0 === BB.lockstepMaxSteps && (BB.lockstepMaxSteps = 4), this._options = BB, zG.c.SetMatrixPrecision(!!BB.useHighPrecisionMatrix), this._caps = {
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
        }, BB.renderingCanvas && (this._renderingCanvas = BB.renderingCanvas), dB.b.Log(`Babylon.js v${MG.c.Version} - Null engine`);
        const OB = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (OB.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (OB.Blob = function() {})
      }
      createVertexBuffer(BB) {
        const OB = new PG.b;
        return OB.references = 1, OB
      }
      createIndexBuffer(BB) {
        const OB = new PG.b;
        return OB.references = 1, OB
      }
      clear(BB, OB, GB) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(BB, OB, GB) {
        this._cachedViewport = BB
      }
      createUniformBuffer(BB) {
        const OB = new PG.b;
        return OB.references = 1, OB.CP = BB instanceof Array ? BB.length * Float32Array.BYTES_PER_ELEMENT : BB.byteLength, OB
      }
      createDynamicUniformBuffer(BB) {
        return this.createUniformBuffer(BB)
      }
      updateUniformBuffer(BB, OB, GB, YB) {}
      bindUniformBufferBase(BB, OB, GB) {}
      bindUniformBlock(BB, OB, GB) {}
      createShaderProgram(BB, OB, GB, YB, DB) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(BB, OB) {
        return []
      }
      getAttributes(BB, OB) {
        return []
      }
      bindSamplers(BB) {
        this._currentEffect = null
      }
      enableEffect(BB) {
        BB = null !== BB && (0, pG.b)(BB) ? BB.effect : BB, this._currentEffect = BB, BB && (BB.onBind && BB.onBind(BB), BB._onBindObservable && BB._onBindObservable.notifyObservers(BB))
      }
      setStateCullFaceType(BB, OB) {}
      setState(BB) {}
      setIntArray(BB, OB) {
        return !0
      }
      setIntArray2(BB, OB) {
        return !0
      }
      setIntArray3(BB, OB) {
        return !0
      }
      setIntArray4(BB, OB) {
        return !0
      }
      setFloatArray(BB, OB) {
        return !0
      }
      setFloatArray2(BB, OB) {
        return !0
      }
      setFloatArray3(BB, OB) {
        return !0
      }
      setFloatArray4(BB, OB) {
        return !0
      }
      setArray(BB, OB) {
        return !0
      }
      setArray2(BB, OB) {
        return !0
      }
      setArray3(BB, OB) {
        return !0
      }
      setArray4(BB, OB) {
        return !0
      }
      setMatrices(BB, OB) {
        return !0
      }
      setMatrix3x3(BB, OB) {
        return !0
      }
      setMatrix2x2(BB, OB) {
        return !0
      }
      setFloat(BB, OB) {
        return !0
      }
      setFloat2(BB, OB, GB) {
        return !0
      }
      setFloat3(BB, OB, GB, YB) {
        return !0
      }
      setBool(BB, OB) {
        return !0
      }
      setFloat4(BB, OB, GB, YB, DB) {
        return !0
      }
      setAlphaMode(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[GB] !== BB && (this.alphaState.setAlphaBlend(0 !== BB, 0), OB || this.setDepthWrite(0 === BB), this._alphaMode[GB] = BB)
      }
      bindBuffers(BB, OB, GB) {}
      wipeCaches(BB) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, BB && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(BB, OB, GB, YB) {}
      drawElementsType(BB, OB, GB, YB) {}
      drawArraysType(BB, OB, GB, YB) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(BB) {}
      createTexture(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          oB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          jB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const yB = new kO.b(this, 1),
          JB = String(BB);
        return yB.url = JB, yB.generateMipMaps = !OB, yB.samplingMode = DB, yB.invertY = GB, yB.baseWidth = this._options.textureSize, yB.baseHeight = this._options.textureSize, yB.width = this._options.textureSize, yB.height = this._options.textureSize, jB && (yB.format = jB), oB && (yB._buffer = oB), yB.isReady = !0, QB && setTimeout((() => {
          QB(yB)
        })), this._internalTexturesCache.push(yB), yB
      }
      _createHardwareRenderTargetWrapper(BB, OB, GB) {
        const YB = new lG.c(BB, OB, GB, this);
        return this._renderTargetWrapperCache.push(YB), YB
      }
      createRenderTargetTexture(BB, OB) {
        const GB = this._createHardwareRenderTargetWrapper(!1, !1, BB),
          YB = {};
        void 0 !== OB && "object" === typeof OB ? (YB.generateMipMaps = OB.generateMipMaps, YB.generateDepthBuffer = void 0 === OB.generateDepthBuffer || OB.generateDepthBuffer, YB.generateStencilBuffer = YB.generateDepthBuffer && OB.generateStencilBuffer, YB.type = void 0 === OB.type ? 0 : OB.type, YB.samplingMode = void 0 === OB.samplingMode ? 3 : OB.samplingMode) : (YB.generateMipMaps = OB, YB.generateDepthBuffer = !0, YB.generateStencilBuffer = !1, YB.type = 0, YB.samplingMode = 3);
        const DB = new kO.b(this, 5);
        GB.setTexture(DB);
        const QB = BB.width || BB,
          oB = BB.height || BB;
        return GB._generateDepthBuffer = YB.generateDepthBuffer, GB._generateStencilBuffer = !!YB.generateStencilBuffer, DB.baseWidth = QB, DB.baseHeight = oB, DB.width = QB, DB.height = oB, DB.isReady = !0, DB.samples = 1, DB.generateMipMaps = !!YB.generateMipMaps, DB.samplingMode = YB.samplingMode, DB.type = YB.type, this._internalTexturesCache.push(DB), GB
      }
      createMultiviewRenderTargetTexture(BB, OB) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const GB = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: BB,
            height: OB
          }),
          YB = new kO.b(this, 5, !0);
        return YB.baseWidth = BB, YB.baseHeight = OB, YB.width = BB, YB.height = OB, YB.isMultiview = !0, YB.isReady = !0, YB.format = 5, YB.samples = 1, GB.setTextures(YB), GB
      }
      bindMultiviewFramebuffer(BB) {
        this.bindFramebuffer(BB, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(BB, OB) {
        const GB = this._createHardwareRenderTargetWrapper(!1, !0, BB),
          YB = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...OB
          };
        YB.generateStencilBuffer = YB.generateDepthBuffer && YB.generateStencilBuffer, (1 !== YB.type || this._caps.textureFloatLinearFiltering) && (2 !== YB.type || this._caps.textureHalfFloatLinearFiltering) || (YB.samplingMode = 1), GB._generateDepthBuffer = YB.generateDepthBuffer, GB._generateStencilBuffer = !!YB.generateStencilBuffer;
        const DB = new kO.b(this, 5);
        return DB.baseWidth = BB, DB.baseHeight = BB, DB.width = BB, DB.height = BB, DB.isReady = !0, DB.isCube = !0, DB.samples = 1, DB.generateMipMaps = !!YB.generateMipMaps, DB.samplingMode = YB.samplingMode, DB.type = YB.type, this._internalTexturesCache.push(DB), GB
      }
      updateTextureSamplingMode(BB, OB) {
        OB.samplingMode = BB
      }
      createRawTexture(BB, OB, GB, YB, DB, QB, oB) {
        let jB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          yB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          JB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const MB = new kO.b(this, 3);
        return MB.baseWidth = OB, MB.baseHeight = GB, MB.width = OB, MB.height = GB, MB.format = YB, MB.generateMipMaps = DB, MB.samplingMode = oB, MB.invertY = QB, MB._compression = jB, MB.type = yB, MB._useSRGBBuffer = JB, this._doNotHandleContextLost || (MB._bufferView = BB), MB
      }
      updateRawTexture(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        BB && (BB._bufferView = OB, BB.format = GB, BB.invertY = YB, BB._compression = DB, BB.type = QB, BB._useSRGBBuffer = oB)
      }
      bindFramebuffer(BB, OB, GB, YB, DB) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = BB, this._currentFramebuffer = null, this._cachedViewport && !DB && this.setViewport(this._cachedViewport, GB, YB)
      }
      unBindFramebuffer(BB) {
        let OB = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, OB && OB(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(BB) {
        const OB = new PG.b;
        return OB.references = 1, OB.CP = 1, OB
      }
      updateDynamicTexture(BB, OB, GB) {}
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
      updateDynamicIndexBuffer(BB, OB) {}
      updateDynamicVertexBuffer(BB, OB, GB, YB) {}
      _bindTextureDirectly(BB, OB) {
        return this._boundTexturesCache[this._activeChannel] !== OB && (this._boundTexturesCache[this._activeChannel] = OB, !0)
      }
      _bindTexture(BB, OB) {
        BB < 0 || this._bindTextureDirectly(0, OB)
      }
      _deleteBuffer(BB) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(BB) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(BB, OB, GB, YB, DB) {}
      _uploadDataToTextureDirectly(BB, OB) {}
      _uploadArrayBufferViewToTexture(BB, OB) {}
      _uploadImageToTexture(BB, OB) {}
    }
    GB(41030), GB(41079), GB(41026);
    async function NG(BB) {
      const OB = BB.getInternalTexture();
      if (!OB || 1 !== OB.source) return null;
      if (OB.invertY) {
        const OB = BB.JF()?.Lp();
        if (!(OB instanceof ZG)) return null
      }
      const GB = OB._buffer;
      let YB, QB = BB.mimeType;
      try {
        GB ? ArrayBuffer.isView(GB) ? YB = GB.buffer.slice(GB.byteOffset, GB.byteOffset + GB.byteLength) : GB instanceof ArrayBuffer ? YB = GB : GB instanceof Blob ? (YB = await GB.arrayBuffer(), QB = GB.type || QB) : "string" === typeof GB ? (YB = await DB.Tools.LoadFileAsync(GB), QB = (0, yB.b)(GB) || QB) : "undefined" !== typeof HTMLImageElement && GB instanceof HTMLImageElement && (YB = await DB.Tools.LoadFileAsync(GB.src), QB = (0, yB.b)(GB.src) || QB) : (YB = await DB.Tools.LoadFileAsync(OB.url), QB = (0, yB.b)(OB.url) || QB)
      } catch {
        return null
      }
      if (YB && !QB && OB.url) {
        const BB = OB.url.match(/^data:([^;,]+)/);
        QB = BB ? BB[1] : (0, yB.b)(OB.url)
      }
      return YB && QB ? {
        data: YB,
        mimeType: QB
      } : null
    }
    const RG = 1e-6,
      WG = new ZB.Color3(.04, .04, .04),
      AG = 1024,
      VG = ZB.Color3.White(),
      SG = ZB.Color3.BlackReadOnly;

    function nG(BB) {
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

    function UG(BB, OB, GB) {
      if (OB < WG.r) return 0;
      const YB = WG.r,
        DB = BB * GB / (1 - WG.r) + OB - 2 * WG.r,
        QB = DB * DB - 4 * YB * (WG.r - OB);
      return WB.Clamp((-DB + Math.sqrt(QB)) / (2 * YB), 0, 1)
    }

    function fG(BB) {
      const OB = BB.diffuseColor.toLinearSpace(BB.JF().Lp().useExactSrgbConversions).scale(.5),
        GB = BB.alpha,
        YB = function(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new XB.o(0, 1),
            GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new XB.o(0, .1),
            YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new XB.o(0, .1),
            DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new XB.o(1300, .1);
          return function(BB, OB, GB, YB, DB) {
            return (1 - BB) * (1 - BB) * (1 - BB) * OB + 3 * (1 - BB) * (1 - BB) * BB * GB + 3 * (1 - BB) * BB * BB * YB + BB * BB * BB * DB
          }(Math.pow(BB / DB.x, .333333), OB.y, GB.y, YB.y, DB.y)
        }(WB.Clamp(BB.specularPower, 0, AG));
      return {
        baseColorFactor: [OB.r, OB.g, OB.b, GB],
        metallicFactor: 0,
        roughnessFactor: YB
      }
    }

    function kG(BB, OB) {
      OB.needAlphaBlending() ? BB.alphaMode = "BLEND" : OB.needAlphaTesting() && (BB.alphaMode = "MASK", BB.alphaCutoff = OB.alphaCutOff)
    }

    function dG(BB, OB, GB) {
      const YB = new Uint8Array(BB * OB * 4);
      for (let DB = 0; DB < YB.length; DB += 4) YB[DB] = YB[DB + 1] = YB[DB + 2] = YB[DB + 3] = 255;
      return SB.d.CreateRGBATexture(YB, BB, OB, GB)
    }

    function KG(BB) {
      if (BB instanceof Uint8Array) {
        const OB = BB.length,
          GB = new Float32Array(BB.length);
        for (let YB = 0; YB < OB; ++YB) GB[YB] = BB[YB] / 255;
        return GB
      }
      if (BB instanceof Float32Array) return BB;
      throw new Error("Unsupported pixel format!")
    }
    class uG {
      constructor(BB) {
        this._exporter = BB, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(BB) {
        return BB ? this._textureMap.get(BB.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(BB, OB) {
        const GB = fG(BB),
          YB = {
            name: BB.name
          };
        if (null == BB.backFaceCulling || BB.backFaceCulling || (BB.twoSidedLighting || DB.Tools.Warn(BB.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), YB.doubleSided = !0), OB) {
          const OB = [],
            DB = BB.diffuseTexture;
          DB && OB.push(this.exportTextureAsync(DB).then((BB => {
            BB && (GB.baseColorTexture = BB)
          })));
          const QB = BB.bumpTexture;
          QB && OB.push(this.exportTextureAsync(QB).then((BB => {
            BB && (YB.normalTexture = BB, 1 !== QB.level && (YB.normalTexture.scale = QB.level))
          })));
          const oB = BB.emissiveTexture;
          oB && (YB.emissiveFactor = [1, 1, 1], OB.push(this.exportTextureAsync(oB).then((BB => {
            BB && (YB.emissiveTexture = BB)
          }))));
          const jB = BB.ambientTexture;
          jB && OB.push(this.exportTextureAsync(jB).then((BB => {
            if (BB) {
              const OB = {
                index: BB.index
              };
              YB.occlusionTexture = OB
            }
          }))), OB.length > 0 && (this._exporter._materialNeedsUVsSet.add(BB), await Promise.all(OB))
        }(BB.alpha < 1 || BB.opacityTexture) && (BB.alphaMode === nB.b.ALPHA_COMBINE ? YB.alphaMode = "BLEND" : DB.Tools.Warn(BB.name + ": glTF 2.0 does not support alpha mode: " + BB.alphaMode.toString())), BB.emissiveColor && !BB.emissiveColor.equalsWithEpsilon(SG, RG) && (YB.emissiveFactor = BB.emissiveColor.dDB()), YB.pbrMetallicRoughness = GB, kG(YB, BB), await this._finishMaterialAsync(YB, BB);
        const QB = this._exporter._materials;
        return QB.push(YB), QB.length - 1
      }
      async _finishMaterialAsync(BB, OB) {
        const GB = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", BB, OB),
          YB = [];
        for (const DB of GB) YB.push(this.exportTextureAsync(DB));
        await Promise.all(YB), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", BB, OB)
      }
      _resizeTexturesToSameDimensions(BB, OB, GB) {
        const YB = BB ? BB.getSize() : {
            width: 0,
            height: 0
          },
          DB = OB ? OB.getSize() : {
            width: 0,
            height: 0
          };
        let QB, oB;
        return YB.width < DB.width ? (QB = BB && BB instanceof VB.e ? AB.k.CreateResizedCopy(BB, DB.width, DB.height, !0) : dG(DB.width, DB.height, GB), oB = OB) : YB.width > DB.width ? (oB = OB && OB instanceof VB.e ? AB.k.CreateResizedCopy(OB, YB.width, YB.height, !0) : dG(YB.width, YB.height, GB), QB = BB) : (QB = BB, oB = OB), {
          texture1: QB,
          texture2: oB
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(BB, OB, GB) {
        const YB = new Array;
        if (!BB && !OB) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const DB = BB ? BB.JF() : OB ? OB.JF() : null;
        if (DB) {
          const QB = this._resizeTexturesToSameDimensions(BB, OB, DB),
            oB = QB.texture1?.getSize();
          let jB, yB;
          const JB = oB.width,
            MB = oB.height,
            PB = await QB.texture1.readPixels(),
            zB = await QB.texture2.readPixels();
          if (!PB) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (jB = KG(PB), !zB) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          yB = KG(zB);
          const lB = yB.byteLength,
            pB = new Uint8Array(lB),
            qB = new Uint8Array(lB),
            NB = 4,
            RB = new ZB.Color3(0, 0, 0);
          let WB = 0,
            AB = 0;
          for (let BB = 0; BB < MB; ++BB)
            for (let OB = 0; OB < JB; ++OB) {
              const YB = (JB * BB + OB) * NB,
                oB = {
                  diffuseColor: new ZB.Color3(jB[YB], jB[YB + 1], jB[YB + 2]).toLinearSpace(DB.Lp().useExactSrgbConversions).multiply(GB.diffuseColor),
                  specularColor: new ZB.Color3(yB[YB], yB[YB + 1], yB[YB + 2]).toLinearSpace(DB.Lp().useExactSrgbConversions).multiply(GB.specularColor),
                  glossiness: yB[YB + 3] * GB.glossiness
                },
                MB = this._convertSpecularGlossinessToMetallicRoughness(oB);
              RB.r = Math.max(RB.r, MB.baseColor.r), RB.g = Math.max(RB.g, MB.baseColor.g), RB.b = Math.max(RB.b, MB.baseColor.b), WB = Math.max(WB, MB.metallic), AB = Math.max(AB, MB.roughness), qB[YB] = 255 * MB.baseColor.r, qB[YB + 1] = 255 * MB.baseColor.g, qB[YB + 2] = 255 * MB.baseColor.b, qB[YB + 3] = QB.texture1.hasAlpha ? 255 * jB[YB + 3] : 255, pB[YB] = 0, pB[YB + 1] = 255 * MB.roughness, pB[YB + 2] = 255 * MB.metallic, pB[YB + 3] = 255
            }
          const VB = {
            baseColor: RB,
            metallic: WB,
            roughness: AB
          };
          let SB = !1,
            nB = !1;
          for (let BB = 0; BB < MB; ++BB)
            for (let OB = 0; OB < JB; ++OB) {
              const GB = (JB * BB + OB) * NB;
              qB[GB] /= VB.baseColor.r > RG ? VB.baseColor.r : 1, qB[GB + 1] /= VB.baseColor.g > RG ? VB.baseColor.g : 1, qB[GB + 2] /= VB.baseColor.b > RG ? VB.baseColor.b : 1;
              const YB = ZB.Color3.FromInts(qB[GB], qB[GB + 1], qB[GB + 2]).toGammaSpace(DB.Lp().useExactSrgbConversions);
              qB[GB] = 255 * YB.r, qB[GB + 1] = 255 * YB.g, qB[GB + 2] = 255 * YB.b, YB.equalsWithEpsilon(VG, RG) || (nB = !0), pB[GB + 1] /= VB.roughness > RG ? VB.roughness : 1, pB[GB + 2] /= VB.metallic > RG ? VB.metallic : 1;
              ZB.Color3.FromInts(255, pB[GB + 1], pB[GB + 2]).equalsWithEpsilon(VG, RG) || (SB = !0)
            }
          return SB && YB.push((0, UB.EncodeImageAsync)(pB, JB, MB).then((BB => {
            VB.metallicRoughnessTextureData = BB
          }))), nB && YB.push((0, UB.EncodeImageAsync)(qB, JB, MB).then((BB => {
            VB.baseColorTextureData = BB
          }))), await Promise.all(YB).then((() => VB))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(BB) {
        const OB = this._getPerceivedBrightness(BB.diffuseColor),
          GB = this._getPerceivedBrightness(BB.specularColor),
          YB = 1 - this._getMaxComponent(BB.specularColor),
          DB = UG(OB, GB, YB),
          QB = BB.diffuseColor.scale(YB / (1 - WG.r) / Math.max(1 - DB, RG)),
          oB = BB.specularColor.subtract(WG.scale(1 - DB)).scale(1 / Math.max(DB, RG));
        let jB = ZB.Color3.Lerp(QB, oB, DB * DB);
        jB = jB.clampToRef(0, 1, jB);
        return {
          baseColor: jB,
          metallic: DB,
          roughness: 1 - BB.glossiness
        }
      }
      _getPerceivedBrightness(BB) {
        return Math.sqrt(.299 * BB.r * BB.r + .587 * BB.g * BB.g + .114 * BB.b * BB.b)
      }
      _getMaxComponent(BB) {
        return Math.max(BB.r, Math.max(BB.g, BB.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        const JB = [],
          MB = {
            baseColor: BB,
            metallic: OB,
            roughness: GB
          };
        if (yB)
          if (oB instanceof xO) {
            if (oB.geometryOpacityTexture) {
              const BB = YB && YB.getInternalTexture() ? YB.getInternalTexture().uniqueId : 0,
                OB = oB.geometryOpacityTexture && oB.geometryOpacityTexture.getInternalTexture() ? oB.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                GB = Number(`${BB}${OB}`),
                DB = this._textureMap.get(GB);
              DB ? jB.baseColorTexture = DB : JB.push(oG("baseColorOpacityTexture", JG(YB ? jG(YB, 0) : yG(1), YB ? jG(YB, 1) : yG(1), YB ? jG(YB, 2) : yG(1), jG(oB.geometryOpacityTexture, 0)), oB.JF()).then((async BB => {
                const OB = await this.exportTextureAsync(BB, GB);
                OB && (jB.baseColorTexture = OB)
              })))
            } else YB && JB.push(this.exportTextureAsync(YB).then((BB => {
              BB && (jB.baseColorTexture = BB)
            })));
            if (oB._useMetallicFromMetallicTextureBlue && DB) JB.push(this.exportTextureAsync(DB).then((BB => {
              BB && (jB.metallicRoughnessTexture = BB)
            })));
            else if (QB || DB) {
              const BB = DB && DB.getInternalTexture() ? DB.getInternalTexture().uniqueId : 0,
                OB = QB && QB.getInternalTexture() ? QB.getInternalTexture().uniqueId : 0,
                GB = Number(`${BB}${OB}`),
                YB = this._textureMap.get(GB);
              YB ? jB.metallicRoughnessTexture = YB : JB.push(oG("MetalRoughTexture", JG(oB.ambientOcclusionTexture ? jG(oB.ambientOcclusionTexture, 0) : yG(1), QB ? jG(QB, 0) : yG(1), DB ? jG(DB, 0) : yG(1)), oB.JF()).then((async BB => {
                const OB = await this.exportTextureAsync(BB, GB);
                OB && (jB.metallicRoughnessTexture = OB)
              })))
            }
          } else YB && JB.push(this.exportTextureAsync(YB).then((BB => {
            BB && (jB.baseColorTexture = BB)
          }))), DB && JB.push(this.exportTextureAsync(DB).then((BB => {
            BB && (jB.metallicRoughnessTexture = BB)
          })));
        return JB.length > 0 && (this._exporter._materialNeedsUVsSet.add(oB), await Promise.all(JB)), MB
      }
      _getTextureSampler(BB) {
        const OB = {};
        if (!BB || !(BB instanceof VB.e)) return OB;
        const GB = this._getGLTFTextureWrapMode(BB.wrapU);
        10497 !== GB && (OB.wrapS = GB);
        const YB = this._getGLTFTextureWrapMode(BB.wrapV);
        switch (10497 !== YB && (OB.wrapT = YB), BB.samplingMode) {
          case VB.e.LINEAR_LINEAR:
            OB.magFilter = 9729, OB.minFilter = 9729;
            break;
          case VB.e.LINEAR_NEAREST:
            OB.magFilter = 9729, OB.minFilter = 9728;
            break;
          case VB.e.NEAREST_LINEAR:
            OB.magFilter = 9728, OB.minFilter = 9729;
            break;
          case VB.e.NEAREST_LINEAR_MIPLINEAR:
            OB.magFilter = 9728, OB.minFilter = 9987;
            break;
          case VB.e.NEAREST_NEAREST:
            OB.magFilter = 9728, OB.minFilter = 9728;
            break;
          case VB.e.NEAREST_LINEAR_MIPNEAREST:
            OB.magFilter = 9728, OB.minFilter = 9985;
            break;
          case VB.e.LINEAR_NEAREST_MIPNEAREST:
            OB.magFilter = 9729, OB.minFilter = 9984;
            break;
          case VB.e.LINEAR_NEAREST_MIPLINEAR:
            OB.magFilter = 9729, OB.minFilter = 9986;
            break;
          case VB.e.NEAREST_NEAREST_MIPLINEAR:
            OB.magFilter = 9728, OB.minFilter = 9986;
            break;
          case VB.e.LINEAR_LINEAR_MIPLINEAR:
            OB.magFilter = 9729, OB.minFilter = 9987;
            break;
          case VB.e.LINEAR_LINEAR_MIPNEAREST:
            OB.magFilter = 9729, OB.minFilter = 9985;
            break;
          case VB.e.NEAREST_NEAREST_MIPNEAREST:
            OB.magFilter = 9728, OB.minFilter = 9984
        }
        return OB
      }
      _getGLTFTextureWrapMode(BB) {
        switch (BB) {
          case VB.e.WRAP_ADDRESSMODE:
            return 10497;
          case VB.e.CLAMP_ADDRESSMODE:
            return 33071;
          case VB.e.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return DB.Tools.Error(`Unsupported Texture Wrap Mode ${BB}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(BB, OB, GB) {
        const YB = {
            diffuseColor: BB._albedoColor,
            specularColor: BB._reflectivityColor,
            glossiness: BB._microSurface
          },
          DB = BB._albedoTexture,
          QB = BB._reflectivityTexture,
          oB = BB._useMicroSurfaceFromReflectivityMapAlpha;
        if (QB && !oB) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((DB || QB) && GB) {
          this._exporter._materialNeedsUVsSet.add(BB);
          const GB = this._exportTextureSampler(DB || QB),
            oB = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(DB, QB, YB),
            jB = this._exporter._textures;
          if (oB.baseColorTextureData) {
            const BB = await this._exportImageAsync(`baseColor${jB.length}`, oB.baseColorTextureData);
            OB.baseColorTexture = this._exportTextureInfo(BB, GB, DB?.coordinatesIndex)
          }
          if (oB.metallicRoughnessTextureData) {
            const BB = await this._exportImageAsync(`metallicRoughness${jB.length}`, oB.metallicRoughnessTextureData);
            OB.metallicRoughnessTexture = this._exportTextureInfo(BB, GB, QB?.coordinatesIndex)
          }
          return oB
        }
        return this._convertSpecularGlossinessToMetallicRoughness(YB)
      }
      async exportPBRMaterialAsync(BB, OB) {
        const GB = {},
          YB = {
            name: BB.name
          },
          DB = BB.isMetallicWorkflow();
        if (DB) {
          const OB = BB._albedoColor,
            YB = BB.alpha;
          OB && (GB.baseColorFactor = [OB.r, OB.g, OB.b, YB])
        }
        const QB = DB ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(BB._albedoColor, BB._metallic, BB._roughness, BB._albedoTexture, BB._metallicTexture, BB._metallicTexture, BB, GB, OB) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(BB, GB, OB);
        await this._setMetallicRoughnessPbrMaterialAsync(QB, BB, YB, GB, OB), await this._finishMaterialAsync(YB, BB);
        const oB = this._exporter._materials;
        return oB.push(YB), oB.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(BB, OB, GB, YB, QB) {
        if (kG(GB, OB), BB.baseColor.equalsWithEpsilon(VG, RG) && WB.WithinEpsilon(OB.alpha, 1, RG) || (YB.baseColorFactor = [BB.baseColor.r, BB.baseColor.g, BB.baseColor.b, OB.alpha]), null != BB.metallic && 1 !== BB.metallic && (YB.metallicFactor = BB.metallic), null != BB.roughness && 1 !== BB.roughness && (YB.roughnessFactor = BB.roughness), null == OB.backFaceCulling || OB.backFaceCulling || (OB._twoSidedLighting || DB.Tools.Warn(OB.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), GB.doubleSided = !0), QB) {
          const BB = [],
            DB = OB instanceof SO ? OB._bumpTexture : OB.geometryNormalTexture;
          DB && BB.push(this.exportTextureAsync(DB).then((BB => {
            BB && (GB.normalTexture = BB, 1 !== DB.level && (GB.normalTexture.scale = DB.level))
          })));
          const QB = OB instanceof SO ? OB._ambientTexture : OB.ambientOcclusionTexture;
          QB && BB.push(new Promise((async BB => {
            if (OB instanceof xO && YB.metallicRoughnessTexture) {
              const OB = this._exportTextureSampler(QB),
                GB = this._exporter._textures[YB.metallicRoughnessTexture.index].source,
                DB = this._exportTextureInfo(GB, OB, QB.coordinatesIndex);
              return this._textureMap.set(QB.uniqueId, DB), this._exporter._extensionsPostExportTextures("exporter", DB, QB), BB(DB)
            }
            return BB(await this.exportTextureAsync(QB))
          })).then((async BB => {
            if (BB) {
              const YB = {
                index: BB.index,
                texCoord: BB.texCoord,
                extensions: BB.extensions
              };
              GB.occlusionTexture = YB, YB.strength = OB instanceof SO ? OB._ambientTextureStrength : OB.ambientOcclusionTexture.level
            }
          })));
          const oB = OB instanceof SO ? OB._emissiveTexture : OB.emissionColorTexture;
          oB && BB.push(this.exportTextureAsync(oB).then((BB => {
            BB && (GB.emissiveTexture = BB)
          }))), BB.length > 0 && (this._exporter._materialNeedsUVsSet.add(OB), await Promise.all(BB))
        }
        const oB = OB instanceof SO ? OB._emissiveColor : OB.emissionColor;
        oB.equalsWithEpsilon(SG, RG) || (GB.emissiveFactor = oB.dDB()), GB.pbrMetallicRoughness = YB
      }
      async exportOpenPBRMaterialAsync(BB, OB) {
        const GB = {},
          YB = {
            name: BB.name
          },
          DB = BB.baseColor,
          QB = BB.geometryOpacity;
        DB && (GB.baseColorFactor = [DB.r, DB.g, DB.b, QB]);
        const oB = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(BB.baseColor, BB.baseMetalness, BB.specularRoughness, BB.baseColorTexture, BB.baseMetalnessTexture, BB.specularRoughnessTexture, BB, GB, OB);
        await this._setMetallicRoughnessPbrMaterialAsync(oB, BB, YB, GB, OB), await this._finishMaterialAsync(YB, BB);
        const jB = this._exporter._materials;
        return jB.push(YB), jB.length - 1
      }
      async exportTextureAsync(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = this._textureMap.get(OB ?? BB.uniqueId);
        if (GB) return GB;
        const YB = this._exportTextureSampler(BB),
          DB = await this._exportTextureImageAsync(BB);
        return GB = this._exportTextureInfo(DB, YB, BB.coordinatesIndex), this._textureMap.set(OB ?? BB.uniqueId, GB), this._exporter._extensionsPostExportTextures("exporter", GB, BB), GB
      }
      async _exportTextureImageAsync(BB) {
        const OB = BB.mimeType ?? "none",
          GB = this._internalTextureToImage,
          YB = BB.getInternalTexture().uniqueId;
        GB[YB] = GB[YB] || {};
        let QB = GB[YB][OB];
        return void 0 === QB && (QB = (async () => {
          const GB = await NG(BB);
          if (GB && nG(GB.mimeType) && ("none" === OB || GB.mimeType === OB)) return await this._exportImageAsync(BB.name, new Blob([GB.data], {
            type: GB.mimeType
          }));
          let YB = "image/png";
          "none" !== OB && (nG(OB) ? YB = OB : (YB = "image/png", DB.Tools.Warn(`Unsupported media type: ${OB}. Exporting texture as PNG.`)));
          const QB = BB.getSize(),
            oB = await (0, AB.h)(BB),
            jB = await (0, UB.EncodeImageAsync)(oB, QB.width, QB.height, YB);
          return await this._exportImageAsync(BB.name, jB)
        })(), GB[YB][OB] = QB), await QB
      }
      async _exportImageAsync(BB, OB) {
        const GB = this._exporter._images;
        let YB;
        if (this._exporter._shouldUseGlb) {
          YB = {
            name: BB,
            mimeType: OB.type,
            bufferView: void 0
          };
          const GB = await OB.arrayBuffer(),
            DB = this._exporter._bufferManager.createBufferView(new Uint8Array(GB));
          this._exporter._bufferManager.setBufferView(YB, DB)
        } else {
          const QB = BB.replace(/\.\/|\/|\.\\|\\/g, "_"),
            oB = function(BB) {
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
            }(OB.type);
          let jB = QB + oB;
          GB.some((BB => BB.uri === jB)) && (jB = `${QB}_${DB.Tools.RandomId()}${oB}`), YB = {
            name: BB,
            uri: jB
          }, this._exporter._imageData[jB] = OB
        }
        return GB.push(YB), GB.length - 1
      }
      _exportTextureInfo(BB, OB, GB) {
        const YB = this._exporter._textures;
        let DB = YB.findIndex((GB => GB.sampler == OB && GB.source === BB)); - 1 === DB && (DB = YB.length, YB.push({
          source: BB,
          sampler: OB
        }));
        const QB = {
          index: DB
        };
        return GB && (QB.texCoord = GB), QB
      }
      _exportTextureSampler(BB) {
        const OB = this._getTextureSampler(BB),
          GB = this._exporter._samplers,
          YB = GB.findIndex((BB => BB.minFilter === OB.minFilter && BB.magFilter === OB.magFilter && BB.wrapS === OB.wrapS && BB.wrapT === OB.wrapT));
        return -1 !== YB ? YB : (GB.push(OB), GB.length - 1)
      }
    }
    var mG = GB(41067),
      IG = GB(41215);
    (0, IG.d)();
    var FG = GB(37782);
    const iG = YB.Matrix.Compose(new YB.Xp(-1, 1, 1), YB.Quaternion.Identity(), YB.Xp.Zero());

    function LG(BB, OB) {
      if (!(BB instanceof PB.e)) return !1;
      if (OB) {
        if (!BB.getWorldMatrix().equalsWithEpsilon(YB.Matrix.IdentityReadOnly, FG.b)) return !1
      } else {
        if (!BB.getWorldMatrix().multiplyToRef(iG, YB.TmpVectors.Matrix[0]).equalsWithEpsilon(YB.Matrix.IdentityReadOnly, FG.b)) return !1
      }
      return !(BB instanceof zB.b && BB.geometry)
    }
    const gG = YB.Xp.ZeroReadOnly,
      rG = YB.Quaternion.Identity(),
      XG = YB.Xp.OneReadOnly,
      wG = new YB.Xp(-1, 1, 1);

    function EG(BB, OB) {
      const {
        byteOffset: GB,
        byteStride: YB,
        type: DB,
        normalized: QB
      } = BB, oB = BB.getSize(), jB = OB.reduce(((BB, OB) => OB.getTotalVertices() > BB ? OB.getTotalVertices() : BB), -Number.MAX_VALUE);
      return {
        byteOffset: GB,
        byteStride: YB,
        componentCount: oB,
        type: DB,
        count: jB * oB,
        normalized: QB,
        totalVertices: jB,
        kind: BB.getKind()
      }
    }

    function cG(BB) {
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

    function hG(BB) {
      switch (BB) {
        case MB.g.PositionKind:
        case MB.g.NormalKind:
        case MB.g.TangentKind:
        case MB.g.ColorKind:
        case MB.g.MatricesIndicesKind:
        case MB.g.MatricesIndicesExtraKind:
        case MB.g.MatricesWeightsKind:
        case MB.g.MatricesWeightsExtraKind:
        case MB.g.UVKind:
        case MB.g.UV2Kind:
        case MB.g.UV3Kind:
        case MB.g.UV4Kind:
        case MB.g.UV5Kind:
        case MB.g.UV6Kind:
          return !0
      }
      return !1
    }

    function aG(BB) {
      const OB = Math.sqrt(BB.x * BB.x + BB.y * BB.y + BB.z * BB.z);
      OB > 0 && (BB.x /= OB, BB.y /= OB, BB.z /= OB)
    }

    function eG(BB) {
      return BB.x *= -1, BB
    }

    function TG(BB) {
      if (BB.x * BB.x + BB.y * BB.y > .5) {
        const OB = Math.abs(BB.x),
          GB = Math.abs(BB.y);
        if (OB > GB) {
          const GB = Math.sign(BB.x);
          BB.x = OB, BB.y *= -GB, BB.z *= -GB, BB.w *= GB
        } else {
          const OB = Math.sign(BB.y);
          BB.x *= -OB, BB.y = GB, BB.z *= OB, BB.w *= -OB
        }
      } else {
        const OB = Math.abs(BB.z),
          GB = Math.abs(BB.w);
        if (OB > GB) {
          const GB = Math.sign(BB.z);
          BB.x *= -GB, BB.y *= GB, BB.z = OB, BB.w *= -GB
        } else {
          const OB = Math.sign(BB.w);
          BB.x *= OB, BB.y *= -OB, BB.z *= -OB, BB.w = GB
        }
      }
      return BB
    }

    function bG(BB) {
      BB.zOB(-BB.z, BB.w, BB.x, -BB.y)
    }

    function CG(BB, OB) {
      const GB = YB.Xp.FromArrayToRef(OB.translation || [0, 0, 0], 0, YB.TmpVectors.Xp[0]),
        DB = YB.Quaternion.FromArrayToRef(OB.rotation || [0, 0, 0, 1], 0, YB.TmpVectors.Quaternion[0]),
        QB = YB.Matrix.ComposeToRef(XG, DB, GB, YB.TmpVectors.Matrix[0]),
        oB = YB.Xp.FromArrayToRef(BB.translation || [0, 0, 0], 0, YB.TmpVectors.Xp[2]),
        jB = YB.Quaternion.FromArrayToRef(BB.rotation || [0, 0, 0, 1], 0, YB.TmpVectors.Quaternion[1]),
        yB = YB.Matrix.ComposeToRef(XG, jB, oB, YB.TmpVectors.Matrix[1]);
      QB.multiplyToRef(yB, yB), yB.decompose(void 0, DB, GB), GB.equalsWithEpsilon(gG, FG.b) ? delete OB.translation : OB.translation = GB.dDB(), DB.equalsWithEpsilon(rG, FG.b) ? delete OB.rotation : OB.rotation = DB.dDB(), OB.scale && delete OB.scale
    }

    function HG(BB, OB) {
      if (!(OB instanceof PB.e)) return !1;
      if (!(1 === OB.getChildren().length && 0 === BB.getChildren().length && BB.parent === OB)) return !1;
      const GB = BB.JF(),
        YB = BB instanceof IG.h && !GB.useRightHandedSystem ? wG : XG;
      return !!OB.SP.equalsWithEpsilon(YB, FG.b) || (dB.b.Warn(`Cannot collapse node ${BB.name} into parent node ${OB.name} with modified scaling.`), !1)
    }

    function vG(BB) {
      if (BB instanceof Array) {
        const OB = new Float32Array(BB);
        return new Uint8Array(OB.buffer, OB.byteOffset, OB.byteLength)
      }
      return ArrayBuffer.isView(BB) ? new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength) : new Uint8Array(BB)
    }

    function sG(BB, OB) {
      for (const [GB, YB] of Object.entries(BB)) {
        const DB = OB[GB];
        (Array.isArray(YB) && Array.isArray(DB) && xG(YB, DB) || YB === DB) && delete BB[GB]
      }
      return BB
    }

    function xG(BB, OB) {
      return BB.length === OB.length && BB.every(((BB, GB) => BB === OB[GB]))
    }
    const tG = new Map([
      [Int8Array, (BB, OB, GB) => BB.setInt8(OB, GB)],
      [Uint8Array, (BB, OB, GB) => BB.setUint8(OB, GB)],
      [Uint8ClampedArray, (BB, OB, GB) => BB.setUint8(OB, GB)],
      [Int16Array, (BB, OB, GB) => BB.setInt16(OB, GB, !0)],
      [Uint16Array, (BB, OB, GB) => BB.setUint16(OB, GB, !0)],
      [Int32Array, (BB, OB, GB) => BB.setInt32(OB, GB, !0)],
      [Uint32Array, (BB, OB, GB) => BB.setUint32(OB, GB, !0)],
      [Float32Array, (BB, OB, GB) => BB.setFloat32(OB, GB, !0)],
      [Float64Array, (BB, OB, GB) => BB.setFloat64(OB, GB, !0)]
    ]);
    class BY {
      writeTypedArray(BB) {
        this._checkGrowBuffer(BB.byteLength);
        const OB = tG.get(BB.constructor);
        for (let GB = 0; GB < BB.length; GB++) OB(this._dataView, this._byteOffset, BB[GB]), this._byteOffset += BB.BYTES_PER_ELEMENT
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
        const OB = this.byteOffset + BB;
        if (OB > this._data.byteLength) {
          const BB = new Uint8Array(2 * OB);
          BB.set(this._data), this._data = BB, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function OY(BB) {
      return BB % 4 === 0 ? 4 : BB % 2 === 0 ? 2 : 1
    }
    class GY {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(BB) {
        let OB = 0;
        this._bufferViewToData.forEach((BB => {
          OB += BB.byteLength
        }));
        const GB = new BY(OB),
          YB = Array.from(this._bufferViewToData.keys()).sort(((BB, OB) => OY(OB.byteLength) - OY(BB.byteLength)));
        for (const DB of YB) {
          DB.byteOffset = GB.byteOffset, BB.push(DB);
          const OB = BB.length - 1,
            YB = this.getPropertiesWithBufferView(DB);
          for (const BB of YB) BB.bufferView = OB;
          GB.writeTypedArray(this._bufferViewToData.get(DB)), this._bufferViewToData.delete(DB)
        }
        return GB.getOutputData()
      }
      createBufferView(BB, OB) {
        const GB = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: BB.byteLength,
          byteStride: OB
        };
        return this._bufferViewToData.set(GB, BB), GB
      }
      createAccessor(BB, OB, GB, YB, DB, QB, oB) {
        this._verifyBufferView(BB);
        const jB = {
          bufferView: void 0,
          componentType: GB,
          count: YB,
          type: OB,
          min: QB?.min,
          max: QB?.max,
          normalized: oB,
          byteOffset: DB
        };
        return this.setBufferView(jB, BB), this._accessorToBufferView.set(jB, BB), jB
      }
      setBufferView(BB, OB) {
        this._verifyBufferView(OB);
        this.getPropertiesWithBufferView(OB).push(BB)
      }
      removeBufferView(BB) {
        const OB = this.getPropertiesWithBufferView(BB);
        for (const GB of OB) void 0 !== GB.bufferView && delete GB.bufferView;
        this._bufferViewToData.delete(BB), this._bufferViewToProperties.delete(BB), this._accessorToBufferView.forEach(((OB, GB) => {
          OB === BB && (void 0 !== GB.byteOffset && delete GB.byteOffset, this._accessorToBufferView.delete(GB))
        }))
      }
      getBufferView(BB) {
        const OB = this._accessorToBufferView.get(BB);
        return this._verifyBufferView(OB), OB
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
    var YY = GB(41217);
    (0, YY.h)();
    var DY = GB(41446);
    (0, DY.f)();
    var QY = GB(41258),
      oY = GB(42100);
    (0, oY.h)();
    let jY = (() => {
      var BB;
      let OB, GB, YB = [],
        DB = [],
        QB = [],
        oB = [];
      return BB = class {
        get influence() {
          return this._influence
        }
        set influence(BB) {
          if (this._influence === BB) return;
          const OB = this._influence;
          this._influence = BB, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === OB || 0 === BB)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(BB) {
          this._animationPropertiesOverride = BB
        }
        constructor(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            jB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = BB, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new BG.b, this._onDataLayoutChanged = new BG.b, this.id = (0, fB.j)(this, YB, void 0), this.morphTargetManager = ((0, fB.j)(this, DB), (0, fB.j)(this, QB, null)), this._animationPropertiesOverride = ((0, fB.j)(this, oB), null), this.id = BB, this.morphTargetManager = jB, this._scene = GB || qB.b.LastCreatedScene, this.influence = OB, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        DyB(BB) {
          const OB = this.hasPositions;
          this._positions = BB, OB !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(BB) {
          const OB = this.hasNormals;
          this._normals = BB, OB !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(BB) {
          const OB = this.hasTangents;
          this._tangents = BB, OB !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(BB) {
          const OB = this.hasUVs;
          this._uvs = BB, OB !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(BB) {
          const OB = this.hasUV2s;
          this._uv2s = BB, OB !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(BB) {
          const OB = this.hasColors;
          this._colors = BB, OB !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const OB = nO.d.Clone((() => new BB(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return OB._positions = this._positions, OB._normals = this._normals, OB._tangents = this._tangents, OB._uvs = this._uvs, OB._uv2s = this._uv2s, OB._colors = this._colors, OB
        }
        serialize() {
          const BB = {};
          return BB.name = this.name, BB.influence = this.influence, null != this.id && (BB.id = this.id), BB.uniqueId = this.uniqueId, BB.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (BB.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (BB.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (BB.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (BB.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (BB.colors = Array.prototype.slice.call(this.getColors())), nO.d.AppendSerializedAnimations(this, BB), BB
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(OB, GB) {
          let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const DB = new BB(OB.name, OB.influence, GB, YB);
          if (DB.DyB(OB.positions), null != OB.id && (DB.id = OB.id), OB.normals && DB.setNormals(OB.normals), OB.tangents && DB.setTangents(OB.tangents), OB.uvs && DB.setUVs(OB.uvs), OB.uv2s && DB.setUV2s(OB.uv2s), OB.colors && DB.setColors(OB.colors), OB.animations) {
            for (let BB = 0; BB < OB.animations.length; BB++) {
              const GB = OB.animations[BB],
                YB = (0, cO.c)("BABYLON.Animation");
              YB && DB.animations.push(YB.Parse(GB))
            }
            OB.autoAnimate && GB && GB.beginAnimation(DB, OB.autoAnimateFrom, OB.autoAnimateTo, OB.autoAnimateLoop, OB.autoAnimateSpeed || 1)
          }
          return DB
        }
        static FromMesh(OB, GB, YB) {
          GB || (GB = OB.name);
          const DB = new BB(GB, YB, OB.JF(), OB.morphTargetManager);
          return DB.DyB(OB.getVerticesData(wB.h.PositionKind)), OB.isVerticesDataPresent(wB.h.NormalKind) && DB.setNormals(OB.getVerticesData(wB.h.NormalKind)), OB.isVerticesDataPresent(wB.h.TangentKind) && DB.setTangents(OB.getVerticesData(wB.h.TangentKind)), OB.isVerticesDataPresent(wB.h.UVKind) && DB.setUVs(OB.getVerticesData(wB.h.UVKind)), OB.isVerticesDataPresent(wB.h.UV2Kind) && DB.setUV2s(OB.getVerticesData(wB.h.UV2Kind)), OB.isVerticesDataPresent(wB.h.ColorKind) && DB.setColors(OB.getVerticesData(wB.h.ColorKind)), DB
        }
      }, (() => {
        const jB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        OB = [(0, kB.L)()], GB = [(0, kB.L)()], (0, fB.h)(null, null, OB, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: BB => "id" in BB,
            get: BB => BB.id,
            set: (BB, OB) => {
              BB.id = OB
            }
          },
          metadata: jB
        }, YB, DB), (0, fB.h)(null, null, GB, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: BB => "morphTargetManager" in BB,
            get: BB => BB.morphTargetManager,
            set: (BB, OB) => {
              BB.morphTargetManager = OB
            }
          },
          metadata: jB
        }, QB, oB), jB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jB
        })
      })(), BB
    })();
    var yY, JY = GB(42167),
      MY = GB(41250);
    ! function(BB) {
      BB[BB.INTANGENT = 0] = "INTANGENT", BB[BB.OUTTANGENT = 1] = "OUTTANGENT"
    }(yY || (yY = {}));
    class PY {
      static _IsTransformable(BB) {
        return BB && (BB instanceof PB.e || BB instanceof YY.e || BB instanceof MY.d)
      }
      static _CreateNodeAnimation(BB, OB, GB, YB, QB) {
        if (this._IsTransformable(BB)) {
          const oB = [],
            jB = [],
            yB = OB.getKeys(),
            JB = PY._CalculateMinMaxKeyFrames(yB),
            MB = PY._DeduceInterpolation(yB, GB, YB),
            PB = MB.interpolationType,
            zB = MB.shouldBakeAnimation;
          if (zB ? PY._CreateBakedAnimation(BB, OB, GB, JB.min, JB.max, OB.framePerSecond, QB, oB, jB, JB, YB) : "LINEAR" === PB || "STEP" === PB ? PY._CreateLinearOrStepAnimation(BB, OB, GB, oB, jB, YB) : "CUBICSPLINE" === PB ? PY._CreateCubicSplineAnimation(BB, OB, GB, oB, jB, YB) : PY._CreateBakedAnimation(BB, OB, GB, JB.min, JB.max, OB.framePerSecond, QB, oB, jB, JB, YB), oB.length && jB.length) {
            return {
              inputs: oB,
              outputs: jB,
              samplerInterpolation: PB,
              inputsMin: zB ? JB.min : DB.Tools.FloatRound(JB.min / OB.framePerSecond),
              inputsMax: zB ? JB.max : DB.Tools.FloatRound(JB.max / OB.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(BB) {
        let OB = null,
          GB = "VEC3",
          YB = !1;
        const QB = BB.targetProperty.split(".");
        switch (QB[0]) {
          case "SP":
            OB = "scale";
            break;
          case "position":
            OB = "translation";
            break;
          case "rotation":
            GB = "VEC4", OB = "rotation";
            break;
          case "rotationQuaternion":
            GB = "VEC4", YB = !0, OB = "rotation";
            break;
          case "influence":
            GB = "SCALAR", OB = "weights";
            break;
          default:
            DB.Tools.Error(`Unsupported animatable property ${QB[0]}`)
        }
        return OB ? {
          animationChannelTargetPath: OB,
          dataAccessorType: GB,
          useQuaternion: YB
        } : (DB.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB) {
        let PB;
        if (PY._IsTransformable(BB) && BB.animations)
          for (const zB of BB.animations) {
            if (MB && !MB(zB)) continue;
            const DB = PY._DeduceAnimationInfo(zB);
            DB && (PB = {
              name: zB.name,
              samplers: [],
              channels: []
            }, PY._AddAnimation(`${zB.name}`, zB.hasRunningRuntimeAnimations ? OB : PB, BB, zB, DB.dataAccessorType, DB.animationChannelTargetPath, YB, QB, oB, jB, DB.useQuaternion, yB, JB), PB.samplers.length && PB.channels.length && GB.push(PB))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB) {
        let PB;
        if (BB instanceof JY.b) {
          const DB = BB.morphTargetManager;
          if (DB)
            for (let zB = 0; zB < DB.numTargets; ++zB) {
              const lB = DB.getTarget(zB);
              for (const pB of lB.animations) {
                if (MB && !MB(pB)) continue;
                const lB = new oY.d(`${pB.name}`, "influence", pB.framePerSecond, pB.dataType, pB.WG, pB.enableBlending),
                  qB = [],
                  ZB = pB.getKeys();
                for (let BB = 0; BB < ZB.length; ++BB) {
                  const OB = ZB[BB];
                  for (let BB = 0; BB < DB.numTargets; ++BB) BB == zB ? qB.push(OB) : qB.push({
                    frame: OB.frame,
                    value: 0
                  })
                }
                lB.setKeys(qB, !0);
                const NB = PY._DeduceAnimationInfo(lB);
                NB && (PB = {
                  name: lB.name,
                  samplers: [],
                  channels: []
                }, PY._AddAnimation(pB.name, pB.hasRunningRuntimeAnimations ? OB : PB, BB, lB, NB.dataAccessorType, NB.animationChannelTargetPath, YB, QB, oB, jB, NB.useQuaternion, yB, JB, DB.numTargets), PB.samplers.length && PB.channels.length && GB.push(PB))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB) {
        let MB;
        if (BB.animationGroups) {
          const PB = BB.animationGroups;
          for (const zB of PB) {
            const PB = new Map,
              lB = new Map,
              pB = new Set,
              qB = zB.to - zB.from;
            MB = {
              name: zB.name,
              channels: [],
              samplers: []
            };
            for (let OB = 0; OB < zB.targetedAnimations.length; ++OB) {
              const JB = zB.targetedAnimations[OB],
                qB = JB.target,
                ZB = JB.animation;
              if (yB && !yB(ZB)) continue;
              const NB = jB.has(qB);
              if (this._IsTransformable(qB) || 1 === qB.length && this._IsTransformable(qB[0])) {
                const BB = PY._DeduceAnimationInfo(JB.animation);
                if (BB) {
                  const OB = this._IsTransformable(qB) ? qB : this._IsTransformable(qB[0]) ? qB[0] : null;
                  OB && PY._AddAnimation(`${ZB.name}`, MB, OB, ZB, BB.dataAccessorType, BB.animationChannelTargetPath, GB, YB, DB, QB, BB.useQuaternion, oB, NB)
                }
              } else if (qB instanceof jY || 1 === qB.length && qB[0] instanceof jY) {
                if (PY._DeduceAnimationInfo(JB.animation)) {
                  const OB = qB instanceof jY ? qB : qB[0];
                  if (OB) {
                    const GB = BB.morphTargetManagers.find((BB => {
                      for (let GB = 0; GB < BB.numTargets; ++GB)
                        if (BB.getTarget(GB) === OB) return !0;
                      return !1
                    }));
                    if (GB) {
                      const YB = BB.meshes.find((BB => BB.morphTargetManager === GB));
                      YB && (PB.has(YB) || PB.set(YB, new Map), PB.get(YB)?.set(OB, ZB), pB.add(YB), lB.set(YB, ZB))
                    }
                  }
                }
              }
            }
            pB.forEach((BB => {
              const OB = BB.morphTargetManager;
              let jB = null;
              const yB = [],
                JB = lB.get(BB).getKeys(),
                pB = JB.length;
              for (let GB = 0; GB < pB; ++GB)
                for (let YB = 0; YB < OB.numTargets; ++YB) {
                  const DB = OB.getTarget(YB),
                    QB = PB.get(BB);
                  if (QB) {
                    const OB = QB.get(DB);
                    OB ? (jB || (jB = new oY.d(`${zB.name}_${BB.name}_MorphWeightAnimation`, "influence", OB.framePerSecond, oY.d.ANIMATIONTYPE_FLOAT, OB.WG, OB.enableBlending)), yB.push(OB.getKeys()[GB])) : yB.push({
                      frame: zB.from + qB / pB * GB,
                      value: DB.influence,
                      inTangent: JB[0].inTangent ? 0 : void 0,
                      outTangent: JB[0].outTangent ? 0 : void 0
                    })
                  }
                }
              jB.setKeys(yB, !0);
              const ZB = PY._DeduceAnimationInfo(jB);
              ZB && PY._AddAnimation(`${zB.name}_${BB.name}_MorphWeightAnimation`, MB, BB, jB, ZB.dataAccessorType, ZB.animationChannelTargetPath, GB, YB, DB, QB, ZB.useQuaternion, oB, !1, OB?.numTargets)
            })), MB.channels.length && MB.samplers.length && (JB?.set(zB, OB.length), OB.push(MB))
          }
        }
      }
      static _AddAnimation(BB, OB, GB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB, pB) {
        const qB = PY._CreateNodeAnimation(GB, DB, oB, PB, zB);
        let ZB, NB, RB, WB, AB, VB;
        if (qB) {
          if (pB) {
            let BB, OB = 0;
            const GB = [];
            for (; qB.inputs.length > 0;) BB = qB.inputs.shift(), OB % pB == 0 && GB.push(BB), OB++;
            qB.inputs = GB
          }
          const BB = jB.get(GB),
            DB = new Float32Array(qB.inputs);
          ZB = yB.createBufferView(DB), NB = yB.createAccessor(ZB, "SCALAR", 5126, qB.inputs.length, void 0, {
            min: [qB.inputsMin],
            max: [qB.inputsMax]
          }), MB.push(NB), RB = MB.length - 1;
          const JB = new YB.Quaternion,
            PB = new YB.Xp,
            zB = new YB.Xp,
            SB = GB instanceof YY.e,
            nB = cG(QB),
            UB = new Float32Array(qB.outputs.length * nB);
          qB.outputs.forEach((function(BB, OB) {
            let GB = BB;
            switch (oB) {
              case "translation":
                lB && (YB.Xp.FromArrayToRef(BB, 0, zB), eG(zB), zB.toArray(GB));
                break;
              case "rotation":
                4 === BB.length ? YB.Quaternion.FromArrayToRef(BB, 0, JB) : (GB = new Array(4), YB.Xp.FromArrayToRef(BB, 0, PB), YB.Quaternion.FromEulerVectorToRef(PB, JB)), lB && (TG(JB), SB && bG(JB)), JB.toArray(GB)
            }
            UB.set(GB, OB * nB)
          })), ZB = yB.createBufferView(UB), NB = yB.createAccessor(ZB, QB, 5126, qB.outputs.length), MB.push(NB), WB = MB.length - 1, AB = {
            interpolation: qB.samplerInterpolation,
            input: RB,
            output: WB
          }, OB.samplers.push(AB), VB = {
            sampler: OB.samplers.length - 1,
            target: {
              node: BB,
              path: oB
            }
          }, OB.channels.push(VB)
        }
      }
      static _CreateBakedAnimation(BB, OB, GB, QB, oB, jB, yB, JB, MB, PB, zB) {
        let lB;
        const pB = YB.Quaternion.Identity();
        let qB, ZB, NB, RB, WB, AB = null,
          VB = null;
        PB.min = DB.Tools.FloatRound(QB / jB);
        const SB = OB.getKeys();
        for (let YB = 0, nB = SB.length; YB < nB; ++YB) {
          if (ZB = SB[YB], YB + 1 < nB)
            if (NB = SB[YB + 1], ZB.value.equals && ZB.value.equals(NB.value) || ZB.value === NB.value) {
              if (0 !== YB) continue;
              WB = ZB.frame
            } else WB = NB.frame;
          else {
            if (RB = SB[YB - 1], ZB.value.equals && ZB.value.equals(RB.value) || ZB.value === RB.value) continue;
            WB = oB
          }
          if (WB)
            for (let YB = ZB.frame; YB <= WB; YB += yB) {
              if (qB = DB.Tools.FloatRound(YB / jB), qB === AB) continue;
              AB = qB, VB = qB;
              const QB = {
                key: 0,
                repeatCount: 0,
                WG: OB.WG
              };
              lB = OB._interpolate(YB, QB), PY._SetInterpolatedValue(BB, lB, qB, OB, GB, pB, JB, MB, zB)
            }
        }
        VB && (PB.max = VB)
      }
      static _ConvertFactorToVector3OrQuaternion(BB, OB, GB, QB, oB) {
        const jB = PY._GetBasePositionRotationOrScale(OB, QB, oB),
          yB = GB.targetProperty.split("."),
          JB = yB ? yB[1] : "",
          MB = oB ? YB.Quaternion.FromArray(jB).normalize() : YB.Xp.FromArray(jB);
        switch (JB) {
          case "x":
          case "y":
          case "z":
            MB[JB] = BB;
            break;
          case "w":
            MB.w = BB;
            break;
          default:
            DB.Tools.Error(`glTFAnimation: Unsupported component name "${JB}"!`)
        }
        return MB
      }
      static _SetInterpolatedValue(BB, OB, GB, DB, QB, oB, jB, yB, JB) {
        let MB;
        jB.push(GB), "weights" !== QB ? (DB.dataType === oY.d.ANIMATIONTYPE_FLOAT && (OB = this._ConvertFactorToVector3OrQuaternion(OB, BB, DB, QB, JB)), "rotation" === QB ? (JB ? oB = OB : (MB = OB, YB.Quaternion.RotationYawPitchRollToRef(MB.y, MB.x, MB.z, oB)), yB.push(oB.dDB())) : (MB = OB, yB.push(MB.dDB()))) : yB.push([OB])
      }
      static _CreateLinearOrStepAnimation(BB, OB, GB, YB, DB, QB) {
        for (const oB of OB.getKeys()) YB.push(oB.frame / OB.framePerSecond), PY._AddKeyframeValue(oB, OB, DB, GB, BB, QB)
      }
      static _CreateCubicSplineAnimation(BB, OB, GB, YB, DB, QB) {
        OB.getKeys().forEach((function(oB) {
          YB.push(oB.frame / OB.framePerSecond), PY._AddSplineTangent(yY.INTANGENT, DB, GB, "CUBICSPLINE", oB, QB), PY._AddKeyframeValue(oB, OB, DB, GB, BB, QB), PY._AddSplineTangent(yY.OUTTANGENT, DB, GB, "CUBICSPLINE", oB, QB)
        }))
      }
      static _GetBasePositionRotationOrScale(BB, OB, GB) {
        let DB;
        if ("rotation" === OB)
          if (GB) {
            DB = (BB.rotationQuaternion ?? YB.Quaternion.Identity()).dDB()
          } else {
            DB = (BB.rotation ?? YB.Xp.Zero()).dDB()
          }
        else if ("translation" === OB) {
          DB = (BB.position ?? YB.Xp.Zero()).dDB()
        } else {
          DB = (BB.SP ?? YB.Xp.One()).dDB()
        }
        return DB
      }
      static _AddKeyframeValue(BB, OB, GB, QB, oB, jB) {
        let yB;
        const JB = OB.dataType;
        if (JB === oY.d.ANIMATIONTYPE_VECTOR3) {
          let OB = BB.value.dDB();
          if ("rotation" === QB) {
            const BB = YB.Xp.FromArray(OB);
            OB = YB.Quaternion.RotationYawPitchRoll(BB.y, BB.x, BB.z).dDB()
          }
          GB.push(OB)
        } else if (JB === oY.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === QB) GB.push([BB.value]);
          else if (yB = this._ConvertFactorToVector3OrQuaternion(BB.value, oB, OB, QB, jB), yB) {
            if ("rotation" === QB) {
              const BB = jB ? yB : YB.Quaternion.RotationYawPitchRoll(yB.y, yB.x, yB.z).normalize();
              GB.push(BB.dDB())
            }
            GB.push(yB.dDB())
          }
        } else JB === oY.d.ANIMATIONTYPE_QUATERNION ? GB.push(BB.value.normalize().dDB()) : DB.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(BB, OB, GB) {
        let YB, DB, QB = !1;
        if ("rotation" === OB && !GB) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let oB = 0, jB = BB.length; oB < jB; ++oB)
          if (DB = BB[oB], DB.inTangent || DB.outTangent)
            if (YB) {
              if ("CUBICSPLINE" !== YB) {
                YB = "LINEAR", QB = !0;
                break
              }
            } else YB = "CUBICSPLINE";
        else if (YB) {
          if ("CUBICSPLINE" === YB || DB.interpolation && 1 === DB.interpolation && "STEP" !== YB) {
            YB = "LINEAR", QB = !0;
            break
          }
        } else YB = DB.interpolation && 1 === DB.interpolation ? "STEP" : "LINEAR";
        return YB || (YB = "LINEAR"), {
          interpolationType: YB,
          shouldBakeAnimation: QB
        }
      }
      static _AddSplineTangent(BB, OB, GB, DB, QB, oB) {
        let jB;
        const yB = BB === yY.INTANGENT ? QB.inTangent : QB.outTangent;
        if ("CUBICSPLINE" === DB) {
          if ("rotation" === GB)
            if (yB)
              if (oB) jB = yB.dDB();
              else {
                const BB = yB;
                jB = YB.Quaternion.RotationYawPitchRoll(BB.y, BB.x, BB.z).dDB()
              }
          else jB = [0, 0, 0, 0];
          else jB = "weights" === GB ? yB ? [yB] : [0] : yB ? yB.dDB() : [0, 0, 0];
          OB.push(jB)
        }
      }
      static _CalculateMinMaxKeyFrames(BB) {
        let OB = 1 / 0,
          GB = -1 / 0;
        return BB.forEach((function(BB) {
          OB = Math.min(OB, BB.frame), GB = Math.max(GB, BB.frame)
        })), {
          min: OB,
          max: GB
        }
      }
    }

    function zY(BB, OB, GB, QB, oB, jB) {
      const yB = {
          attributes: {},
          influence: BB.influence,
          name: BB.name
        },
        JB = OB.geometry;
      if (!JB) return DB.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), yB;
      const PB = jB ? -1 : 1,
        zB = YB.Xp.Zero();
      let lB, pB;
      if (BB.hasPositions) {
        const QB = BB.getPositions(),
          jB = JB.getVerticesData(MB.g.PositionKind);
        if (jB) {
          const BB = new Float32Array(jB.length),
            OB = [1 / 0, 1 / 0, 1 / 0],
            DB = [-1 / 0, -1 / 0, -1 / 0];
          pB = jB.length / 3, lB = 0;
          for (let GB = lB; GB < pB; ++GB) {
            const oB = YB.Xp.FromArray(jB, 3 * GB);
            YB.Xp.FromArray(QB, 3 * GB).subtractToRef(oB, zB), zB.x *= PB, OB[0] = Math.min(OB[0], zB.x), DB[0] = Math.max(DB[0], zB.x), OB[1] = Math.min(OB[1], zB.y), DB[1] = Math.max(DB[1], zB.y), OB[2] = Math.min(OB[2], zB.z), DB[2] = Math.max(DB[2], zB.z), BB[3 * GB] = zB.x, BB[3 * GB + 1] = zB.y, BB[3 * GB + 2] = zB.z
          }
          const JB = GB.createBufferView(BB, 12),
            MB = GB.createAccessor(JB, "VEC3", 5126, QB.length / 3, 0, {
              min: OB,
              max: DB
            });
          oB.push(MB), yB.attributes.POSITION = oB.length - 1
        } else DB.Tools.Warn(`Morph target positions for mesh ${OB.name} were not exported. Mesh does not have position vertex data`)
      }
      if (BB.hasNormals) {
        const QB = BB.getNormals(),
          jB = JB.getVerticesData(MB.g.NormalKind);
        if (jB) {
          const BB = new Float32Array(jB.length);
          pB = jB.length / 3, lB = 0;
          for (let GB = lB; GB < pB; ++GB) {
            const OB = YB.Xp.FromArray(jB, 3 * GB).normalize();
            YB.Xp.FromArray(QB, 3 * GB).normalize().subtractToRef(OB, zB), BB[3 * GB] = zB.x * PB, BB[3 * GB + 1] = zB.y, BB[3 * GB + 2] = zB.z
          }
          const OB = GB.createBufferView(BB, 12),
            DB = GB.createAccessor(OB, "VEC3", 5126, QB.length / 3, 0);
          oB.push(DB), yB.attributes.NORMAL = oB.length - 1
        } else DB.Tools.Warn(`Morph target normals for mesh ${OB.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (BB.hasTangents) {
        const QB = BB.getTangents(),
          jB = JB.getVerticesData(MB.g.TangentKind);
        if (jB) {
          pB = jB.length / 4;
          const BB = new Float32Array(3 * pB);
          lB = 0;
          for (let GB = lB; GB < pB; ++GB) {
            const OB = YB.Xp.FromArray(jB, 4 * GB);
            aG(OB);
            const DB = YB.Xp.FromArray(QB, 3 * GB);
            aG(DB), DB.subtractToRef(OB, zB), BB[3 * GB] = zB.x * PB, BB[3 * GB + 1] = zB.y, BB[3 * GB + 2] = zB.z
          }
          const OB = GB.createBufferView(BB, 12),
            DB = GB.createAccessor(OB, "VEC3", 5126, pB, 0);
          oB.push(DB), yB.attributes.TANGENT = oB.length - 1
        } else DB.Tools.Warn(`Morph target tangents for mesh ${OB.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (BB.hasColors) {
        const QB = BB.getColors(),
          jB = JB.getVerticesData(MB.g.ColorKind),
          PB = JB.getVertexBuffer(MB.g.ColorKind);
        if (jB && PB) {
          const BB = PB.getSize();
          pB = jB.length / BB;
          const OB = new Float32Array(pB * BB);
          lB = 0;
          for (let GB = lB; GB < pB; ++GB)
            if (3 === BB) {
              const DB = YB.Xp.FromArray(jB, GB * BB);
              YB.Xp.FromArray(QB, GB * BB).subtractToRef(DB, zB), OB[3 * GB] = zB.x, OB[3 * GB + 1] = zB.y, OB[3 * GB + 2] = zB.z
            } else if (4 === BB) {
            const DB = new YB.Vector4,
              oB = YB.Vector4.FromArray(jB, GB * BB);
            YB.Vector4.FromArray(QB, GB * BB).subtractToRef(oB, DB), OB[4 * GB] = DB.x, OB[4 * GB + 1] = DB.y, OB[4 * GB + 2] = DB.z, OB[4 * GB + 3] = DB.w
          } else DB.Tools.Warn(`Unsupported number of components for color attribute: ${BB}`);
          const JB = GB.createBufferView(OB, 4 * BB),
            MB = GB.createAccessor(JB, 3 === BB ? "VEC3" : "VEC4", 5126, pB, 0);
          oB.push(MB), yB.attributes.COLOR_0 = oB.length - 1
        } else DB.Tools.Warn(`Morph target colors for mesh ${OB.name} were not exported. Mesh does not have colors vertex data`)
      }
      return yB
    }
    var lY = GB(44709);
    class pY {}
    pY.DEFAULT_COLOR = TB.c.White(), pY.DEFAULT_WIDTH_ATTENUATED = 1, pY.DEFAULT_WIDTH = .1;
    var qY = GB(42093);
    class ZY {
      constructor(BB) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = BB
      }
      moveTo(BB, OB) {
        this._currentPath = new qY.l(BB, OB), this._tempPaths.push(this._currentPath)
      }
      lineTo(BB, OB) {
        this._currentPath.addLineTo(BB, OB)
      }
      quadraticCurveTo(BB, OB, GB, YB) {
        this._currentPath.addQuadraticCurveTo(BB, OB, GB, YB, this._resolution)
      }
      bezierCurveTo(BB, OB, GB, YB, DB, QB) {
        this._currentPath.addBezierCurveTo(BB, OB, GB, YB, DB, QB, this._resolution)
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

    function NY(BB, OB, GB, YB, DB, QB) {
      const oB = QB.glyphs[BB] || QB.glyphs["?"];
      if (!oB) return null;
      const jB = new ZY(DB);
      if (oB.o) {
        const BB = oB.o.split(" ");
        for (let DB = 0, QB = BB.length; DB < QB;) {
          switch (BB[DB++]) {
            case "m": {
              const QB = parseInt(BB[DB++]) * OB + GB,
                oB = parseInt(BB[DB++]) * OB + YB;
              jB.moveTo(QB, oB);
              break
            }
            case "l": {
              const QB = parseInt(BB[DB++]) * OB + GB,
                oB = parseInt(BB[DB++]) * OB + YB;
              jB.lineTo(QB, oB);
              break
            }
            case "q": {
              const QB = parseInt(BB[DB++]) * OB + GB,
                oB = parseInt(BB[DB++]) * OB + YB,
                yB = parseInt(BB[DB++]) * OB + GB,
                JB = parseInt(BB[DB++]) * OB + YB;
              jB.quadraticCurveTo(yB, JB, QB, oB);
              break
            }
            case "b": {
              const QB = parseInt(BB[DB++]) * OB + GB,
                oB = parseInt(BB[DB++]) * OB + YB,
                yB = parseInt(BB[DB++]) * OB + GB,
                JB = parseInt(BB[DB++]) * OB + YB,
                MB = parseInt(BB[DB++]) * OB + GB,
                PB = parseInt(BB[DB++]) * OB + YB;
              jB.bezierCurveTo(yB, JB, MB, PB, QB, oB);
              break
            }
          }
        }
      }
      return jB.extractHoles(), {
        offsetX: oB.ha * OB,
        shapePath: jB
      }
    }

    function RY(BB, OB, GB, YB) {
      const DB = Array.from(BB),
        QB = OB / YB.resolution,
        oB = (YB.boundingBox.yMax - YB.boundingBox.yMin + YB.underlineThickness) * QB,
        jB = [];
      let yB = 0,
        JB = 0;
      for (let MB = 0; MB < DB.length; MB++) {
        const BB = DB[MB];
        if ("\n" === BB) yB = 0, JB -= oB;
        else {
          const OB = NY(BB, QB, yB, JB, GB, YB);
          OB && (yB += OB.offsetX, jB.push(OB.shapePath))
        }
      }
      return jB
    }
    class WY {
      static ConvertPoints(BB, OB) {
        if (BB.length && Array.isArray(BB) && "number" === typeof BB[0]) return [BB];
        if (BB.length && Array.isArray(BB[0]) && "number" === typeof BB[0][0]) return BB;
        if (BB.length && !Array.isArray(BB[0]) && BB[0] instanceof XB.r) {
          const OB = [];
          for (let GB = 0; GB < BB.length; GB++) {
            const YB = BB[GB];
            OB.push(YB.x, YB.y, YB.z)
          }
          return [OB]
        }
        if (BB.length > 0 && Array.isArray(BB[0]) && BB[0].length > 0 && BB[0][0] instanceof XB.r) {
          const OB = [],
            GB = BB;
          for (const BB of GB) OB.push(BB.flatMap((BB => [BB.x, BB.y, BB.z])));
          return OB
        }
        if (BB instanceof Float32Array) {
          if (OB?.floatArrayStride) {
            const GB = [],
              YB = 3 * OB.floatArrayStride;
            for (let OB = 0; OB < BB.length; OB += YB) {
              const DB = new Array(YB);
              for (let GB = 0; GB < YB; GB++) DB[GB] = BB[OB + GB];
              GB.push(DB)
            }
            return GB
          }
          return [Array.from(BB)]
        }
        if (BB.length && BB[0] instanceof Float32Array) {
          const OB = [];
          for (const GB of BB) OB.push(Array.from(GB));
          return OB
        }
        return []
      }
      static OmitZeroLengthPredicate(BB, OB, GB) {
        const YB = [];
        return OB.subtract(BB).lengthSquared() > 0 && YB.push([BB, OB]), GB.subtract(OB).lengthSquared() > 0 && YB.push([OB, GB]), BB.subtract(GB).lengthSquared() > 0 && YB.push([GB, BB]), 0 === YB.length ? null : YB
      }
      static OmitDuplicatesPredicate(BB, OB, GB, YB) {
        const DB = [];
        return WY._SearchInPoints(BB, OB, YB) || DB.push([BB, OB]), WY._SearchInPoints(OB, GB, YB) || DB.push([OB, GB]), WY._SearchInPoints(GB, BB, YB) || DB.push([GB, BB]), 0 === DB.length ? null : DB
      }
      static _SearchInPoints(BB, OB, GB) {
        for (const YB of GB)
          for (let GB = 0; GB < YB.length; GB++)
            if (YB[GB]?.equals(BB) && (YB[GB + 1]?.equals(OB) || YB[GB - 1]?.equals(OB))) return !0;
        return !1
      }
      static MeshesToLines(BB, OB) {
        const GB = [];
        for (let YB = 0; YB < BB.length; YB++) {
          const DB = BB[YB],
            QB = DB.getVerticesData(wB.h.PositionKind),
            oB = DB.KDB();
          if (QB && oB)
            for (let BB = 0, jB = 0; BB < oB.length; BB++) {
              const yB = 3 * oB[jB++],
                JB = 3 * oB[jB++],
                MB = 3 * oB[jB++],
                PB = new XB.r(QB[yB], QB[yB + 1], QB[yB + 2]),
                zB = new XB.r(QB[JB], QB[JB + 1], QB[JB + 2]),
                lB = new XB.r(QB[MB], QB[MB + 1], QB[MB + 2]);
              if (OB) {
                const jB = OB(PB, zB, lB, GB, BB, yB, DB, YB, QB, oB);
                if (jB)
                  for (const BB of jB) GB.push(BB)
              } else GB.push([PB, zB], [zB, lB], [lB, PB])
            }
        }
        return GB
      }
      static ToVector3Array(BB) {
        if (Array.isArray(BB[0])) {
          const OB = [],
            GB = BB;
          for (const BB of GB) {
            const GB = [];
            for (let OB = 0; OB < BB.length; OB += 3) GB.push(new XB.r(BB[OB], BB[OB + 1], BB[OB + 2]));
            OB.push(GB)
          }
          return OB
        }
        const OB = BB,
          GB = [];
        for (let YB = 0; YB < OB.length; YB += 3) GB.push(new XB.r(OB[YB], OB[YB + 1], OB[YB + 2]));
        return GB
      }
      static ToNumberArray(BB) {
        return BB.flatMap((BB => [BB.x, BB.y, BB.z]))
      }
      static GetPointsCountInfo(BB) {
        const OB = new Array(BB.length);
        let GB = 0;
        for (let YB = BB.length; YB--;) OB[YB] = BB[YB].length / 3, GB += OB[YB];
        return {
          total: GB,
          counts: OB
        }
      }
      static GetLineLength(BB) {
        if (0 === BB.length) return 0;
        let OB;
        OB = "number" === typeof BB[0] ? WY.ToVector3Array(BB) : BB;
        const GB = XB.k.Xp[0];
        let YB = 0;
        for (let DB = 0; DB < OB.length - 1; DB++) {
          const BB = OB[DB];
          YB += OB[DB + 1].subtractToRef(BB, GB).length()
        }
        return YB
      }
      static GetLineLengthArray(BB, OB) {
        const GB = OB ? new Float32Array(OB, 0, BB.length / 3) : new Float32Array(BB.length / 3);
        let YB = 0;
        for (let DB = 0, QB = BB.length / 3 - 1; DB < QB; DB++) {
          let OB = BB[3 * DB + 0],
            QB = BB[3 * DB + 1],
            oB = BB[3 * DB + 2];
          OB -= BB[3 * DB + 3], QB -= BB[3 * DB + 4], oB -= BB[3 * DB + 5];
          YB += Math.sqrt(OB * OB + QB * QB + oB * oB), GB[DB + 1] = YB
        }
        return GB
      }
      static SegmentizeSegmentByCount(BB, OB, GB) {
        const YB = [],
          DB = OB.subtract(BB),
          QB = XB.k.Xp[0];
        QB.uBB(GB);
        const oB = XB.k.Xp[1];
        DB.divideToRef(QB, oB);
        let jB = BB.clone();
        YB.push(jB);
        for (let yB = 0; yB < GB; yB++) jB = jB.clone(), YB.push(jB.addInPlace(oB));
        return YB
      }
      static SegmentizeLineBySegmentLength(BB, OB) {
        const GB = BB[0] instanceof XB.r ? WY.GetLineSegments(BB) : "number" === typeof BB[0] ? WY.GetLineSegments(WY.ToVector3Array(BB)) : BB,
          YB = [];
        for (const DB of GB)
          if (DB.length > OB) {
            const BB = WY.SegmentizeSegmentByCount(DB.point1, DB.point2, Math.ceil(DB.length / OB));
            for (const OB of BB) YB.push(OB)
          } else YB.push(DB.point1), YB.push(DB.point2);
        return YB
      }
      static SegmentizeLineBySegmentCount(BB, OB) {
        const GB = "number" === typeof BB[0] ? WY.ToVector3Array(BB) : BB,
          YB = WY.GetLineLength(GB) / OB;
        return WY.SegmentizeLineBySegmentLength(GB, YB)
      }
      static GetLineSegments(BB) {
        const OB = [];
        for (let GB = 0; GB < BB.length - 1; GB++) {
          const YB = BB[GB],
            DB = BB[GB + 1],
            QB = DB.subtract(YB).length();
          OB.push({
            point1: YB,
            point2: DB,
            length: QB
          })
        }
        return OB
      }
      static GetMinMaxSegmentLength(BB) {
        const OB = WY.GetLineSegments(BB).sort((BB => BB.length));
        return {
          min: OB[0].length,
          max: OB[OB.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const DB = OB * GB;
        let QB = 0,
          oB = 0;
        const jB = BB.length;
        for (let JB = 0; JB < jB; JB++) {
          if (DB <= QB + BB[JB].length) {
            oB = JB;
            break
          }
          QB += BB[JB].length
        }
        const yB = (DB - QB) / BB[oB].length;
        return BB[oB].point2.subtractToRef(BB[oB].point1, XB.k.Xp[0]), XB.k.Xp[0].scaleToRef(yB, XB.k.Xp[1]), YB || XB.k.Xp[1].addInPlace(BB[oB].point1), XB.k.Xp[1].clone()
      }
      static GetCircleLinePoints(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB,
          DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / OB;
        const QB = [];
        for (let oB = 0; oB <= OB; oB++) QB.push(new XB.r(Math.cos(oB * DB) * BB, Math.sin(oB * DB) * YB, GB));
        return QB
      }
      static GetBezierLinePoints(BB, OB, GB, YB) {
        return qY.h.CreateQuadraticBezier(BB, OB, GB, YB).getPoints().flatMap((BB => [BB.x, BB.y, BB.z]))
      }
      static GetArrowCap(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [BB.clone(), BB.add(OB.multiplyByFloats(GB, GB, GB))],
          widths: [YB, DB, QB, oB]
        }
      }
      static GetPointsFromText(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          QB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const oB = [],
          jB = RY(BB, OB, GB, YB);
        for (const yB of jB) {
          for (const BB of yB.paths) {
            const OB = [],
              GB = BB.getPoints();
            for (const BB of GB) OB.push(BB.x, BB.y, DB);
            oB.push(OB)
          }
          if (QB)
            for (const BB of yB.holes) {
              const OB = [],
                GB = BB.getPoints();
              for (const BB of GB) OB.push(BB.x, BB.y, DB);
              oB.push(OB)
            }
        }
        return oB
      }
      static Color3toRGBAUint8(BB) {
        const OB = new Uint8Array(4 * BB.length);
        for (let GB = 0, YB = 0; GB < BB.length; GB++) OB[YB++] = 255 * BB[GB].r, OB[YB++] = 255 * BB[GB].g, OB[YB++] = 255 * BB[GB].b, OB[YB++] = 255;
        return OB
      }
      static CreateColorsTexture(BB, OB, GB, YB) {
        const DB = YB.Lp().getCaps().maxTextureSize ?? 1,
          QB = OB.length > DB ? DB : OB.length,
          oB = Math.ceil(OB.length / DB);
        oB > 1 && (OB = [...OB, ...Array(QB * oB - OB.length).fill(OB[0])]);
        const jB = WY.Color3toRGBAUint8(OB),
          yB = new SB.d(jB, QB, oB, MG.c.TEXTUREFORMAT_RGBA, YB, !1, !0, GB);
        return yB.name = BB, yB
      }
      static PrepareEmptyColorsTexture(BB) {
        if (!pY.EmptyColorsTexture) {
          const OB = new Uint8Array(4);
          pY.EmptyColorsTexture = new SB.d(OB, 1, 1, MG.c.TEXTUREFORMAT_RGBA, BB, !1, !1, SB.d.NEAREST_NEAREST), pY.EmptyColorsTexture.name = "grlEmptyColorsTexture", pY.EmptyColorsTexture.lF.addOnce((() => {
            pY.EmptyColorsTexture = null
          }))
        }
        return pY.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        pY.EmptyColorsTexture?.dispose(), pY.EmptyColorsTexture = null
      }
      static BooleanToNumber(BB) {
        return BB ? 1 : 0
      }
    }
    class AY extends EB.c {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class VY extends cB.c {
      isCompatible(BB) {
        return !0
      }
      constructor(BB, OB, GB) {
        GB = GB || {
          color: pY.DEFAULT_COLOR
        };
        const YB = new AY;
        YB.GREASED_LINE_HAS_COLOR = !!GB.color && !GB.useColors, YB.GREASED_LINE_SIZE_ATTENUATION = GB.sizeAttenuation ?? !1, YB.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === GB.colorDistributionType, YB.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (OB ?? BB.JF()).useRightHandedSystem, YB.GREASED_LINE_CAMERA_FACING = GB.cameraFacing ?? !0, super(BB, VY.GREASED_LINE_MATERIAL_NAME, 200, YB, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = GB?.forceGLSL || VY.ForceGLSL, this._scene = OB ?? BB.JF(), this._engine = this._scene.Lp(), this._cameraFacing = GB.cameraFacing ?? !0, this.visibility = GB.visibility ?? 1, this.useDash = GB.useDash ?? !1, this.dashRatio = GB.dashRatio ?? .5, this.dashOffset = GB.dashOffset ?? 0, this.width = GB.width ? GB.width : GB.sizeAttenuation ? pY.DEFAULT_WIDTH_ATTENUATED : pY.DEFAULT_WIDTH, this._sizeAttenuation = GB.sizeAttenuation ?? !1, this.colorMode = GB.colorMode ?? 0, this._color = GB.color ?? null, this.useColors = GB.useColors ?? !1, this._colorsDistributionType = GB.colorDistributionType ?? 0, this.colorsSampling = GB.colorsSampling ?? SB.d.NEAREST_NEAREST, this._colors = GB.colors ?? null, this.dashCount = GB.dashCount ?? 1, this.resolution = GB.resolution ?? new XB.o(this._engine.getRenderWidth(), this._engine.getRenderHeight()), GB.colorsTexture ? this.colorsTexture = GB.colorsTexture : this._colors ? this.colorsTexture = WY.CreateColorsTexture(`${BB.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? pY.DEFAULT_COLOR, WY.PrepareEmptyColorsTexture(this._scene)), this._engine.lF.add((() => {
          WY.DisposeEmptyColorsTexture()
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
        const OB = [{
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
        return this._cameraFacing && OB.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === BB && OB.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: OB,
          vertex: this._cameraFacing && this._isGLSL(BB) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(BB) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(BB) {
        if (this._cameraFacing) {
          BB.TBB("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || BB.TBB("viewProjection", this._scene.getTransformMatrix());
          const OB = XB.k.Vector4[0];
          OB.x = this._aspect, OB.y = this._resolution.x, OB.z = this._resolution.y, OB.w = this.width, BB.updateVector4("grl_aspect_resolution_lineWidth", OB)
        }
        const OB = XB.k.Vector4[0];
        OB.x = WY.BooleanToNumber(this.useDash), OB.y = this._dashArray, OB.z = this.dashOffset, OB.w = this.dashRatio, BB.updateVector4("grl_dashOptions", OB);
        const GB = XB.k.Vector4[1];
        GB.x = this.colorMode, GB.y = this.visibility, GB.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, GB.w = WY.BooleanToNumber(this.useColors), BB.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", GB), this._color && BB.updateColor3("grl_singleColor", this._color);
        const YB = this.colorsTexture ?? pY.EmptyColorsTexture;
        BB.setTexture("grl_colors", YB), BB.updateFloat2("grl_textureSize", YB?.getSize().width ?? 1, YB?.getSize().height ?? 1)
      }
      prepareDefines(BB, OB, GB) {
        BB.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, BB.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, BB.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, BB.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = OB.useRightHandedSystem, BB.GREASED_LINE_CAMERA_FACING = this._cameraFacing, BB.GREASED_LINE_USE_OFFSETS = !!GB.offsets
      }
      getClassName() {
        return VY.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(OB) ? function(BB, OB) {
          if ("vertex" === BB) {
            const BB = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return OB && (BB["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), BB
          }
          return "fragment" === BB ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(BB, this._cameraFacing) : function(BB, OB) {
          if ("vertex" === BB) {
            const BB = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return OB && (BB["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), BB
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
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const YB = this._colors?.length ?? 0;
        if (this._colors = BB, null !== BB && 0 !== BB.length) {
          if (!OB || GB)
            if (this.colorsTexture && YB === BB.length && !GB) {
              const OB = WY.Color3toRGBAUint8(BB);
              this.colorsTexture.update(OB)
            } else this.colorsTexture?.dispose(), this.colorsTexture = WY.CreateColorsTexture(`${this._material.name}-colors-texture`, BB, this.colorsSampling, this._scene)
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
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== BB || null !== this._color && null === BB ? (this._color = BB, OB || this.markAllDefinesAsDirty()) : this._color = BB
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
          OB = {
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
        return this._colors && (OB.colors = this._colors), this._color && (OB.color = this._color), BB.greasedLineMaterialOptions = OB, BB
      }
      parse(BB, OB, GB) {
        super.parse(BB, OB, GB);
        const YB = BB.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), YB.color && this.setColor(YB.color, !0), YB.colorDistributionType && (this.colorsDistributionType = YB.colorDistributionType), YB.colors && (this.colors = YB.colors), YB.colorsSampling && (this.colorsSampling = YB.colorsSampling), YB.colorMode && (this.colorMode = YB.colorMode), YB.useColors && (this.useColors = YB.useColors), YB.visibility && (this.visibility = YB.visibility), YB.useDash && (this.useDash = YB.useDash), YB.dashCount && (this.dashCount = YB.dashCount), YB.dashRatio && (this.dashRatio = YB.dashRatio), YB.dashOffset && (this.dashOffset = YB.dashOffset), YB.width && (this.width = YB.width), YB.sizeAttenuation && (this.sizeAttenuation = YB.sizeAttenuation), YB.resolution && (this.resolution = YB.resolution), this.colors ? this.colorsTexture = WY.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, OB) : WY.PrepareEmptyColorsTexture(OB), this.markAllDefinesAsDirty()
      }
      copyTo(BB) {
        const OB = BB;
        OB.colorsTexture?.dispose(), this._colors && (OB.colorsTexture = WY.CreateColorsTexture(`${OB._material.name}-colors-texture`, this._colors, OB.colorsSampling, this._scene)), OB.setColor(this.color, !0), OB.colorsDistributionType = this.colorsDistributionType, OB.colorsSampling = this.colorsSampling, OB.colorMode = this.colorMode, OB.useColors = this.useColors, OB.visibility = this.visibility, OB.useDash = this.useDash, OB.dashCount = this.dashCount, OB.dashRatio = this.dashRatio, OB.dashOffset = this.dashOffset, OB.width = this.width, OB.sizeAttenuation = this.sizeAttenuation, OB.resolution = this.resolution, OB.markAllDefinesAsDirty()
      }
      _isGLSL(BB) {
        return 0 === BB || this._forceGLSL
      }
    }
    VY.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", VY.ForceGLSL = !1;
    var SY = GB(41411),
      nY = GB(41423),
      UY = GB(39358),
      fY = GB(41468),
      kY = GB(40844);
    class dY extends fY.k {
      constructor(BB, OB, YB) {
        const DB = OB.Lp(),
          QB = DB.isWebGPU && !(YB.forceGLSL || dY.ForceGLSL),
          oB = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        OB.useRightHandedSystem && oB.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const jB = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        YB.cameraFacing ? (oB.push("GREASED_LINE_CAMERA_FACING"), jB.push("grl_previousAndSide", "grl_nextAndCounters")) : (jB.push("grl_slopes"), jB.push("grl_counters"));
        const yB = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (QB || yB.push("world", "viewProjection", "view", "projection"), super(BB, OB, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: QB ? ["Scene", "Mesh"] : void 0,
            attributes: jB,
            uniforms: yB,
            samplers: QB ? [] : ["grlColors"],
            defines: oB,
            extraInitializationsAsync: async () => {
              QB ? await Promise.all([GB.e(643).then((() => GB(64450))), GB.e(699).then((() => GB(64458)))]) : await Promise.all([GB.e(636).then((() => GB(64462))), GB.e(700).then((() => GB(64469)))])
            },
            shaderLanguage: QB ? 1 : 0
          }), this._color = TB.c.White(), this._colorsDistributionType = 0, this._colorsTexture = null, YB = YB || {
            color: pY.DEFAULT_COLOR
          }, this.visibility = YB.visibility ?? 1, this.useDash = YB.useDash ?? !1, this.dashRatio = YB.dashRatio ?? .5, this.dashOffset = YB.dashOffset ?? 0, this.dashCount = YB.dashCount ?? 1, this.width = YB.width ? YB.width : YB.sizeAttenuation && YB.cameraFacing ? pY.DEFAULT_WIDTH_ATTENUATED : pY.DEFAULT_WIDTH, this.sizeAttenuation = YB.sizeAttenuation ?? !1, this.color = YB.color ?? TB.c.White(), this.useColors = YB.useColors ?? !1, this.colorsDistributionType = YB.colorDistributionType ?? 0, this.colorsSampling = YB.colorsSampling ?? SB.d.NEAREST_NEAREST, this.colorMode = YB.colorMode ?? 0, this._colors = YB.colors ?? null, this._cameraFacing = YB.cameraFacing ?? !0, this.resolution = YB.resolution ?? new XB.o(DB.getRenderWidth(), DB.getRenderHeight()), YB.colorsTexture ? this.colorsTexture = YB.colorsTexture : this._colors ? this.colorsTexture = WY.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, OB) : (this._color = this._color ?? pY.DEFAULT_COLOR, this.colorsTexture = WY.PrepareEmptyColorsTexture(OB)), QB) {
          const BB = new kY.e;
          BB.setParameters(), BB.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", BB)
        }
        DB.lF.add((() => {
          WY.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== pY.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new XB.o(this._colorMode, this._colorsDistributionType))
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
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const YB = this._colors?.length ?? 0;
        if (this._colors = BB, null !== BB && 0 !== BB.length) {
          if (!OB || GB)
            if (this._colorsTexture && YB === BB.length && !GB) {
              const OB = WY.Color3toRGBAUint8(BB);
              this._colorsTexture.update(OB)
            } else this._colorsTexture && this._colorsTexture !== pY.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = WY.CreateColorsTexture(`${this.name}-colors-texture`, BB, this.colorsSampling, this.JF())
        } else {
          this._colorsTexture && this._colorsTexture !== pY.EmptyColorsTexture && this._colorsTexture.dispose();
          const BB = this.JF();
          BB && (this.colorsTexture = WY.PrepareEmptyColorsTexture(BB))
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
        this._useColors = BB, this.setFloat("grlUseColors", WY.BooleanToNumber(BB))
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
        this._useDash = BB, this.setFloat("grlUseDash", WY.BooleanToNumber(BB))
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
        this._sizeAttenuation = BB, this.setFloat("grlSizeAttenuation", WY.BooleanToNumber(BB))
      }
      get color() {
        return this._color
      }
      set color(BB) {
        this.setColor(BB)
      }
      setColor(BB) {
        BB = BB ?? pY.DEFAULT_COLOR, this._color = BB, this.setColor3("grlColor", BB)
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
          OB = {
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
        return this._colors && (OB.colors = this._colors), BB.greasedLineMaterialOptions = OB, BB
      }
      parse(BB, OB, GB) {
        const YB = BB.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), YB.color && (this.color = YB.color), YB.colorDistributionType && (this.colorsDistributionType = YB.colorDistributionType), YB.colorsSampling && (this.colorsSampling = YB.colorsSampling), YB.colorMode && (this.colorMode = YB.colorMode), YB.useColors && (this.useColors = YB.useColors), YB.visibility && (this.visibility = YB.visibility), YB.useDash && (this.useDash = YB.useDash), YB.dashCount && (this.dashCount = YB.dashCount), YB.dashRatio && (this.dashRatio = YB.dashRatio), YB.dashOffset && (this.dashOffset = YB.dashOffset), YB.width && (this.width = YB.width), YB.sizeAttenuation && (this.sizeAttenuation = YB.sizeAttenuation), YB.resolution && (this.resolution = YB.resolution), YB.colors ? this.colorsTexture = WY.CreateColorsTexture(`${this.name}-colors-texture`, YB.colors, this.colorsSampling, this.JF()) : this.colorsTexture = WY.PrepareEmptyColorsTexture(OB), this._cameraFacing = YB.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var KY, uY, mY;
    dY.ForceGLSL = !1,
      function(BB) {
        BB[BB.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", BB[BB.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(KY || (KY = {})),
      function(BB) {
        BB[BB.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", BB[BB.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", BB[BB.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(uY || (uY = {})),
      function(BB) {
        BB[BB.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", BB[BB.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", BB[BB.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", BB[BB.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", BB[BB.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(mY || (mY = {}));
    class IY extends SY.c {
      constructor(BB, OB, GB) {
        super(BB, OB, null, null, !1, !1), this.name = BB, this._options = GB, this._lazy = !1, this._updatable = !1, this._engine = OB.Lp(), this._lazy = GB.lazy ?? !1, this._updatable = GB.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = GB.colorPointers ?? [], this._widths = GB.widths ?? new Array(GB.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(BB) {
        let OB = 0;
        for (const YB of this._points) OB += YB.length;
        const GB = OB / 3 * 2 - this._widths.length;
        for (let YB = 0; YB < GB; YB++) this._widths.push(BB)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.Ep && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(BB, OB) {
        for (const GB of BB) this._points.push(GB);
        this._lazy || this.setPoints(this._points, OB)
      }
      dispose(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(BB, OB)
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
        this.material instanceof dY && this.material.setDefine("GREASED_LINE_USE_OFFSETS", BB?.length > 0), this._offsets = BB, this._offsetsBuffer ? this._offsetsBuffer.update(BB) : this._createOffsetsBuffer(BB)
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
        if (this.material && this.material instanceof dY) return this.material;
        const BB = this.material?.pluginManager?.getPlugin(VY.GREASED_LINE_MATERIAL_NAME);
        return BB || void 0
      }
      get points() {
        const BB = [];
        return UY.b.DeepCopy(this._points, BB), BB
      }
      setPoints(BB, OB) {
        this._points = WY.ConvertPoints(BB, OB?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), OB?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, OB)
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
        const OB = new nY.e;
        return OB.positions = this._vertexPositions, OB.indices = this._indices, OB.uvs = this._uvs, BB && (OB.normals = [], nY.e.ComputeNormals(this._vertexPositions, this._indices, OB.normals)), OB.applyToMesh(this, this._options.updatable), OB
      }
      _createOffsetsBuffer(BB) {
        const OB = this._scene.Lp(),
          GB = new wB.c(OB, BB, this._updatable, 3);
        this.setVerticesBuffer(GB.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = GB
      }
    }
    class FY {
      constructor(BB, OB) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = BB, this.wasAddedByNoopNode = OB
      }
      getIndicesAccessor(BB, OB, GB, YB, DB) {
        return this._indicesAccessorMap.get(BB)?.get(OB)?.get(GB)?.get(YB)?.get(DB)
      }
      setIndicesAccessor(BB, OB, GB, YB, DB, QB) {
        let oB = this._indicesAccessorMap.get(BB);
        oB || (oB = new Map, this._indicesAccessorMap.set(BB, oB));
        let jB = oB.get(OB);
        jB || (jB = new Map, oB.set(OB, jB));
        let yB = jB.get(GB);
        yB || (yB = new Map, jB.set(GB, yB));
        let JB = yB.get(YB);
        JB || (JB = new Map, yB.set(YB, JB)), JB.set(DB, QB)
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
      setVertexBufferView(BB, OB) {
        this._vertexBufferViewMap.set(BB, OB)
      }
      setRemappedBufferView(BB, OB, GB) {
        this._remappedBufferView.set(BB, new Map), this._remappedBufferView.get(BB).set(OB, GB)
      }
      getRemappedBufferView(BB, OB) {
        return this._remappedBufferView.get(BB)?.get(OB)
      }
      getVertexAccessor(BB, OB, GB) {
        return this._vertexAccessorMap.get(BB)?.get(OB)?.get(GB)
      }
      setVertexAccessor(BB, OB, GB, YB) {
        let DB = this._vertexAccessorMap.get(BB);
        DB || (DB = new Map, this._vertexAccessorMap.set(BB, DB));
        let QB = DB.get(OB);
        QB || (QB = new Map, DB.set(OB, QB)), QB.set(GB, YB)
      }
      hasVertexColorAlpha(BB) {
        return this._vertexMapColorAlpha.get(BB) || !1
      }
      setHasVertexColorAlpha(BB, OB) {
        return this._vertexMapColorAlpha.set(BB, OB)
      }
      getMesh(BB) {
        return this._meshMap.get(BB)
      }
      setMesh(BB, OB) {
        this._meshMap.set(BB, OB)
      }
      bindMorphDataToMesh(BB, OB) {
        const GB = this._meshMorphTargetMap.get(BB) || [];
        this._meshMorphTargetMap.set(BB, GB), -1 === GB.indexOf(OB) && GB.push(OB)
      }
      getMorphTargetsFromMesh(BB) {
        return this._meshMorphTargetMap.get(BB)
      }
    }
    class iY {
      _ApplyExtension(BB, OB, GB, YB) {
        if (GB >= OB.length) return Promise.resolve(BB);
        const DB = YB(OB[GB], BB);
        return DB ? DB.then((async BB => BB ? await this._ApplyExtension(BB, OB, GB + 1, YB) : null)) : this._ApplyExtension(BB, OB, GB + 1, YB)
      }
      _ApplyExtensions(BB, OB) {
        const GB = [];
        for (const YB of iY._ExtensionNames) GB.push(this._extensions[YB]);
        return this._ApplyExtension(BB, GB, 0, OB)
      }
      _extensionsPostExportNodeAsync(BB, OB, GB, YB, DB) {
        return this._ApplyExtensions(OB, ((OB, QB) => OB.postExportNodeAsync && OB.postExportNodeAsync(BB, QB, GB, YB, DB, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(BB, OB, GB) {
        return this._ApplyExtensions(OB, ((OB, YB) => OB.postExportMaterialAsync && OB.postExportMaterialAsync(BB, YB, GB)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(BB, OB, GB) {
        const YB = [];
        return await Promise.all(iY._ExtensionNames.map((async DB => {
          const QB = this._extensions[DB];
          if (QB.postExportMaterialAdditionalTexturesAsync) {
            const DB = await QB.postExportMaterialAdditionalTexturesAsync(BB, OB, GB);
            YB.push(...DB)
          }
        }))), YB
      }
      _extensionsPostExportTextures(BB, OB, GB) {
        for (const YB of iY._ExtensionNames) {
          const DB = this._extensions[YB];
          DB.postExportTexture && DB.postExportTexture(BB, OB, GB)
        }
      }
      _extensionsPostExportMeshPrimitive(BB) {
        for (const OB of iY._ExtensionNames) {
          const GB = this._extensions[OB];
          GB.postExportMeshPrimitive && GB.postExportMeshPrimitive(BB, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const BB of iY._ExtensionNames) {
          const OB = this._extensions[BB];
          OB.preGenerateBinaryAsync && await OB.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(BB) {
        for (const OB of iY._ExtensionNames) {
          const GB = this._extensions[OB];
          GB.enabled && BB(GB)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((BB => {
          var OB, GB, YB;
          BB.wasUsed && ((OB = this._glTF).extensionsUsed || (OB.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(BB.name) && this._glTF.extensionsUsed.push(BB.name), BB.required && ((GB = this._glTF).extensionsRequired || (GB.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(BB.name) && this._glTF.extensionsRequired.push(BB.name)), (YB = this._glTF).extensions || (YB.extensions = {}), BB.onExporting && BB.onExporting())
        }))
      }
      _loadExtensions() {
        for (const BB of iY._ExtensionNames) {
          const OB = iY._ExtensionFactories[BB](this);
          this._extensions[BB] = OB
        }
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qB.b.LastCreatedScene,
          OB = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${pB.c.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new uG(this), this._extensions = {}, this._bufferManager = new GY, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !BB) throw new Error("No scene available to export");
        this._babylonScene = BB, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: BB => BB?.Im?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...OB
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
      static RegisterExtension(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        iY.UnregisterExtension(BB) && DB.Tools.Warn(`Extension with the name ${BB} already exists`), iY._ExtensionFactories[BB] = OB;
        const YB = GB ?? 0;
        iY._ExtensionOrders[BB] = YB;
        let QB = iY._ExtensionNames.length;
        for (let DB = 0; DB < iY._ExtensionNames.length; DB++) {
          const BB = iY._ExtensionNames[DB];
          if (YB < iY._ExtensionOrders[BB]) {
            QB = DB;
            break
          }
        }
        iY._ExtensionNames.splice(QB, 0, BB)
      }
      static UnregisterExtension(BB) {
        if (!iY._ExtensionFactories[BB]) return !1;
        delete iY._ExtensionFactories[BB], delete iY._ExtensionOrders[BB];
        const OB = iY._ExtensionNames.indexOf(BB);
        return -1 !== OB && iY._ExtensionNames.splice(OB, 1), !0
      }
      _generateJSON(BB, OB, GB) {
        const YB = {
          byteLength: BB
        };
        return YB.byteLength && (this._glTF.buffers = [YB]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.eq = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (YB.uri = OB + ".bin"), GB ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(BB) {
        const OB = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const GB = this._generateJSON(OB.byteLength, BB, !0),
          YB = new Blob([OB], {
            type: "application/octet-stream"
          }),
          DB = BB + ".gltf",
          QB = BB + ".bin",
          oB = new JB;
        if (oB.files[DB] = GB, oB.files[QB] = YB, this._imageData)
          for (const jB in this._imageData) oB.files[jB] = this._imageData[jB];
        return oB
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(BB) {
        const OB = BB % 4;
        return 0 === OB ? OB : 4 - OB
      }
      async generateGLBAsync(BB) {
        this._shouldUseGlb = !0;
        const OB = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const GB = this._generateJSON(OB.byteLength),
          YB = BB + ".glb";
        let DB, QB = GB.length;
        if ("undefined" !== typeof TextEncoder) {
          DB = (new TextEncoder).encode(GB), QB = DB.length
        }
        const oB = this._getPadding(QB),
          jB = this._getPadding(OB.byteLength),
          yB = 28 + QB + oB + OB.byteLength + jB,
          MB = new BY(yB);
        if (MB.writeUInt32(1179937895), MB.writeUInt32(2), MB.writeUInt32(yB), MB.writeUInt32(QB + oB), MB.writeUInt32(1313821514), DB) MB.writeTypedArray(DB);
        else {
          const BB = "_".charCodeAt(0);
          for (let OB = 0; OB < QB; ++OB) {
            const YB = GB.charCodeAt(OB);
            YB != GB.codePointAt(OB) ? MB.writeUInt8(BB) : MB.writeUInt8(YB)
          }
        }
        for (let JB = 0; JB < oB; ++JB) MB.writeUInt8(32);
        MB.writeUInt32(OB.byteLength + jB), MB.writeUInt32(5130562), MB.writeTypedArray(OB);
        for (let JB = 0; JB < jB; ++JB) MB.writeUInt8(0);
        const PB = new JB;
        return PB.files[YB] = new Blob([MB.getOutputData()], {
          type: "application/octet-stream"
        }), PB
      }
      _setNodeTransformation(BB, OB, GB) {
        if (OB.getPivotPoint().equalsWithEpsilon(gG, FG.b) || DB.Tools.Warn("Pivot points are not supported in the glTF serializer"), !OB.position.equalsWithEpsilon(gG, FG.b)) {
          const DB = YB.TmpVectors.Xp[0].IU(OB.position);
          GB && eG(DB), BB.translation = DB.dDB()
        }
        OB.SP.equalsWithEpsilon(XG, FG.b) || (BB.scale = OB.SP.dDB());
        const QB = OB.rotationQuaternion?.clone() || YB.Quaternion.FromEulerAngles(OB.rotation.x, OB.rotation.y, OB.rotation.z);
        QB.equalsWithEpsilon(rG, FG.b) || (GB && TG(QB), BB.rotation = QB.normalize().dDB())
      }
      _setCameraTransformation(BB, OB, GB) {
        const DB = YB.TmpVectors.Xp[0],
          QB = YB.TmpVectors.Quaternion[0],
          oB = OB.getWorldMatrix();
        if (OB.parent) {
          const BB = OB.parent.getWorldMatrix().invertToRef(YB.TmpVectors.Matrix[0]);
          oB.multiplyToRef(BB, YB.TmpVectors.Matrix[1]).decompose(void 0, QB, DB)
        } else oB.decompose(void 0, QB, DB);
        DB.equalsWithEpsilon(gG, FG.b) || (GB && eG(DB), BB.translation = DB.dDB()), GB && TG(QB), this._babylonScene.useRightHandedSystem || bG(QB), QB.equalsWithEpsilon(rG, FG.b) || (BB.rotation = QB.dDB())
      }
      _listAvailableCameras() {
        for (const BB of this._babylonScene.cameras) {
          const OB = {
            type: BB.mode === YY.e.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (BB.name && (OB.name = BB.name), "perspective" === OB.type) OB.perspective = {
            aspectRatio: BB.Lp().getAspectRatio(BB),
            yfov: BB.fovMode === YY.e.FOVMODE_VERTICAL_FIXED ? BB.fov : BB.fov * BB.Lp().getAspectRatio(BB),
            znear: BB.minZ,
            zfar: BB.maxZ
          };
          else if ("orthographic" === OB.type) {
            const GB = BB.orthoLeft && BB.orthoRight ? .5 * (BB.orthoRight - BB.orthoLeft) : .5 * BB.Lp().getRenderWidth(),
              YB = BB.orthoBottom && BB.orthoTop ? .5 * (BB.orthoTop - BB.orthoBottom) : .5 * BB.Lp().getRenderHeight();
            OB.orthographic = {
              xmag: GB,
              ymag: YB,
              znear: BB.minZ,
              zfar: BB.maxZ
            }
          }
          this._camerasMap.set(BB, OB)
        }
      }
      _exportAndAssignCameras() {
        const BB = Array.from(this._camerasMap.values());
        for (const OB of BB) {
          const BB = this._nodesCameraMap.get(OB);
          if (void 0 !== BB) {
            this._cameras.push(OB);
            for (const OB of BB) OB.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const BB of this._babylonScene.skeletons) {
          if (BB.bones.length <= 0) continue;
          const OB = {
            joints: []
          };
          this._skinMap.set(BB, OB)
        }
      }
      _exportAndAssignSkeletons(BB) {
        for (const GB of this._babylonScene.skeletons) {
          if (GB.bones.length <= 0) continue;
          const QB = this._skinMap.get(GB);
          if (void 0 == QB) continue;
          const oB = {};
          let jB = -1;
          for (let BB = 0; BB < GB.bones.length; ++BB) {
            const OB = GB.bones[BB],
              YB = OB.getIndex() ?? BB; - 1 !== YB && (oB[YB] = OB, YB > jB && (jB = YB))
          }
          const yB = [];
          for (let GB = 0; GB <= jB; ++GB) {
            const jB = oB[GB],
              JB = jB.getTransformNode(),
              MB = JB ? this._nodeMap.get(JB) : void 0;
            if (void 0 === MB) {
              DB.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            QB.joints.push(MB);
            const PB = jB.getAbsoluteInverseBindMatrix().clone();
            BB.has(JB) && (OB = PB, iG.invertToRef(YB.TmpVectors.Matrix[0]).multiplyToRef(OB, OB).multiplyToRef(iG, OB)), yB.push(PB)
          }
          const JB = this._nodesSkinMap.get(QB);
          if (QB.joints.length > 0 && void 0 !== JB) {
            const BB = new Float32Array(16 * yB.length);
            yB.forEach(((OB, GB) => {
              BB.set(OB.m, 16 * GB)
            }));
            const OB = this._bufferManager.createBufferView(BB);
            this._accessors.push(this._bufferManager.createAccessor(OB, "MAT4", 5126, yB.length)), QB.inverseBindMatrices = this._accessors.length - 1, this._skins.push(QB);
            const GB = this._skins.length - 1;
            for (const YB of JB) YB.skin = GB
          }
        }
        var OB
      }
      async _exportSceneAsync() {
        const BB = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const OB = this._options.metadataSelector(this._babylonScene.metadata);
          OB && (BB.extras = OB)
        }
        const OB = new Array,
          GB = new Array,
          YB = new Array,
          DB = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let QB;
        if (DB && !this._options.includeCoordinateSystemConversionNodes)
          for (const JB of this._babylonScene.animationGroups)
            for (const BB of JB.targetedAnimations) {
              const OB = BB.target;
              OB instanceof PB.e && !OB.parent && (QB ?? (QB = new Set)).add(OB)
            }
        for (const JB of this._babylonScene.rootNodes) {
          const BB = JB.animations,
            oB = !!BB && BB.length > 0 || QB?.has(JB);
          DB && !this._options.includeCoordinateSystemConversionNodes && LG(JB, this._babylonScene.useRightHandedSystem) && !oB ? YB.push(...JB.getChildren()) : this._babylonScene.useRightHandedSystem ? OB.push(JB) : GB.push(JB)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const oB = new FY(!0, !1);
        BB.nodes.push(...await this._exportNodesAsync(GB, oB));
        const jB = new FY(!1, !1);
        BB.nodes.push(...await this._exportNodesAsync(OB, jB));
        const yB = new FY(!1, !0);
        BB.nodes.push(...await this._exportNodesAsync(YB, yB)), BB.nodes.length && this._scenes.push(BB), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(oB.getNodesSet()), this._babylonScene.animationGroups.length && PY._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, oB.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(BB) {
        return this._nodeMap.get(BB)
      }
      _getAnimationIndex(BB) {
        return this._animationGroupMap.get(BB)
      }
      _getCameraIndex(BB) {
        const OB = this._camerasMap.get(BB);
        if (!OB) return;
        const GB = this._cameras.indexOf(OB);
        return GB >= 0 ? GB : void 0
      }
      _getMaterialIndex(BB) {
        return this._materialMap.get(BB)
      }
      _getRootIndex(BB, OB) {
        switch (BB) {
          case "nodes":
            return this._getNodeIndex(OB);
          case "animations":
            return this._getAnimationIndex(OB);
          case "cameras":
            return this._getCameraIndex(OB);
          case "materials":
            return this._getMaterialIndex(OB);
          case "meshes": {
            const BB = this._getNodeIndex(OB);
            return void 0 === BB ? void 0 : this._nodes[BB]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(OB)?.index;
          case "images": {
            const BB = this._materialExporter.getTextureInfo(OB)?.index;
            if (void 0 === BB) return;
            const GB = this._textures[BB];
            for (const OB of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const BB = GB?.extensions?.[OB]?.source;
              if ("number" === typeof BB) return BB
            }
            return GB?.source
          }
          case "samplers": {
            const BB = this._materialExporter.getTextureInfo(OB)?.index;
            return void 0 === BB ? void 0 : this._textures[BB]?.sampler
          }
          case "skins": {
            const BB = this._skinMap.get(OB),
              GB = BB ? this._skins.indexOf(BB) : -1;
            return GB >= 0 ? GB : void 0
          }
          case "scenes":
            return OB === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(BB, OB, GB) {
        const YB = this._nodes[BB];
        if (!YB) throw new Error(`Cannot write ${OB}: glTF node ${BB} does not exist.`);
        YB.extensions || (YB.extensions = {}), YB.extensions[OB] = GB
      }
      _shouldExportNode(BB) {
        let OB = this._shouldExportNodeMap.get(BB);
        return void 0 === OB && (OB = this._options.shouldExportNode(BB), this._shouldExportNodeMap.set(BB, OB)), OB
      }
      async _exportNodesAsync(BB, OB) {
        const GB = new Array;
        this._exportBuffers(BB, OB);
        for (const YB of BB) await this._exportNodeAsync(YB, GB, OB);
        return GB
      }
      _collectBuffers(BB, OB, GB, YB, DB) {
        if (this._shouldExportNode(BB) && BB instanceof zB.b && BB.geometry) {
          const QB = BB.geometry.getVertexBuffers();
          if (QB)
            for (const YB in QB) {
              if (!hG(YB)) continue;
              const oB = QB[YB];
              DB.setHasVertexColorAlpha(oB, BB.hasVertexAlpha);
              const jB = oB._buffer,
                yB = OB.get(jB) || [];
              OB.set(jB, yB), -1 === yB.indexOf(oB) && yB.push(oB);
              const JB = GB.get(oB) || [];
              GB.set(oB, JB), -1 === JB.indexOf(BB) && JB.push(BB)
            }
          const oB = BB.morphTargetManager;
          if (oB)
            for (let OB = 0; OB < oB.numTargets; OB++) {
              const GB = oB.getTarget(OB),
                DB = YB.get(GB) || [];
              YB.set(GB, DB), -1 === DB.indexOf(BB) && DB.push(BB)
            }
        }
        for (const QB of BB.getChildren()) this._collectBuffers(QB, OB, GB, YB, DB)
      }
      _exportBuffers(BB, OB) {
        const GB = new Map,
          YB = new Map,
          DB = new Map;
        for (const jB of BB) this._collectBuffers(jB, GB, YB, DB, OB);
        const QB = Array.from(GB.keys());
        for (const jB of QB) {
          const BB = jB.getData();
          if (!BB) throw new Error("Buffer data is not available");
          const DB = GB.get(jB);
          if (!DB) continue;
          const QB = DB[0].byteStride;
          if (DB.some((BB => BB.byteStride !== QB))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const oB = vG(BB).slice();
          for (const OB of DB) {
            const BB = YB.get(OB),
              {
                byteOffset: GB,
                byteStride: DB,
                componentCount: QB,
                type: jB,
                count: yB,
                normalized: JB,
                kind: PB
              } = EG(OB, BB);
            switch (PB) {
              case MB.g.NormalKind:
              case MB.g.TangentKind:
                (0, mG.k)(oB, GB, DB, QB, jB, yB, JB, (BB => {
                  const OB = Math.sqrt(BB[0] * BB[0] + BB[1] * BB[1] + BB[2] * BB[2]);
                  if (OB > 0) {
                    const GB = 1 / OB;
                    BB[0] *= GB, BB[1] *= GB, BB[2] *= GB
                  }
                }));
                break;
              case MB.g.ColorKind: {
                const OB = BB.filter((BB => BB.material instanceof QY.StandardMaterial || null == BB.material)).length;
                if (0 == OB) break;
                if (OB != BB.length) {
                  dB.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                jB == MB.g.UNSIGNED_BYTE && dB.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const YB = new ZB.Color3,
                  PB = new ZB.e,
                  zB = this._babylonScene.Lp().useExactSrgbConversions;
                (0, mG.k)(oB, GB, DB, QB, jB, yB, JB, (BB => {
                  3 === BB.length ? (YB.OP(BB, 0), YB.toLinearSpaceToRef(YB, zB), YB.toArray(BB, 0)) : (PB.OP(BB, 0), PB.toLinearSpaceToRef(PB, zB), PB.toArray(BB, 0))
                }))
              }
            }
          }
          if (OB.convertToRightHanded) {
            for (const BB of DB) {
              const OB = YB.get(BB),
                {
                  byteOffset: GB,
                  byteStride: DB,
                  componentCount: QB,
                  type: jB,
                  count: yB,
                  normalized: JB,
                  kind: PB
                } = EG(BB, OB);
              switch (PB) {
                case MB.g.PositionKind:
                case MB.g.NormalKind:
                case MB.g.TangentKind:
                  (0, mG.k)(oB, GB, DB, QB, jB, yB, JB, (BB => {
                    BB[0] = -BB[0]
                  }))
              }
            }
            OB.convertedToRightHandedBuffers.set(jB, oB)
          }
          const yB = this._bufferManager.createBufferView(oB, QB);
          OB.setVertexBufferView(jB, yB);
          const JB = new Map;
          for (const OB of DB) {
            const BB = YB.get(OB),
              {
                kind: GB,
                totalVertices: DB
              } = EG(OB, BB);
            switch (GB) {
              case MB.g.MatricesIndicesKind:
              case MB.g.MatricesIndicesExtraKind:
                if (OB.type == MB.g.FLOAT) {
                  const BB = OB.getFloatData(DB);
                  null !== BB && JB.set(OB, BB)
                }
            }
          }
          0 !== JB.size && dB.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const PB = Array.from(JB.keys());
          for (const GB of PB) {
            const BB = JB.get(GB);
            if (!BB) continue;
            const YB = BB.some((BB => BB >= 256)),
              DB = new(YB ? Uint16Array : Uint8Array)(BB.length);
            for (let OB = 0; OB < BB.length; OB++) DB[OB] = BB[OB];
            const QB = this._bufferManager.createBufferView(DB, 4 * (YB ? 2 : 1));
            OB.setRemappedBufferView(jB, GB, QB)
          }
        }
        const oB = Array.from(DB.keys());
        for (const jB of oB) {
          const BB = DB.get(jB);
          if (!BB) continue;
          const GB = zY(jB, BB[0], this._bufferManager, this._bufferViews, this._accessors, OB.convertToRightHanded);
          for (const YB of BB) OB.bindMorphDataToMesh(YB, GB)
        }
      }
      async _exportNodeAsync(BB, OB, GB) {
        let YB = this._nodeMap.get(BB);
        if (void 0 !== YB) return void(OB.includes(YB) || OB.push(YB));
        const DB = await this._createNodeAsync(BB, GB);
        if (DB) {
          YB = this._nodes.length, this._nodes.push(DB), this._nodeMap.set(BB, YB), GB.pushExportedNode(BB), OB.push(YB);
          const QB = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            oB = [];
          this._babylonScene.animationGroups.length || (PY._CreateMorphTargetAnimationFromMorphTargetAnimations(BB, QB, oB, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, GB.convertToRightHanded, this._options.shouldExportAnimation), BB.animations.length && PY._CreateNodeAnimationFromNodeAnimations(BB, QB, oB, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, GB.convertToRightHanded, this._options.shouldExportAnimation)), QB.channels.length && QB.samplers.length && this._animations.push(QB), oB.forEach((BB => {
            BB.channels.length && BB.samplers.length && this._animations.push(BB)
          }))
        }
        const QB = DB ? [] : OB;
        for (const oB of BB.getChildren()) await this._exportNodeAsync(oB, QB, GB);
        DB && QB.length && (DB.children = QB)
      }
      async _createNodeAsync(BB, OB) {
        if (!this._shouldExportNode(BB)) return null;
        const GB = {};
        if (BB.name && (GB.name = BB.name), BB.metadata) {
          const OB = this._options.metadataSelector(BB.metadata);
          OB && (GB.extras = OB)
        }
        if (BB instanceof PB.e && (this._setNodeTransformation(GB, BB, OB.convertToRightHanded), BB instanceof zB.b)) {
          const YB = BB instanceof lB.b ? BB.AQB : BB;
          if (YB.iW && YB.iW.length > 0 && (GB.mesh = await this._exportMeshAsync(YB, OB)), BB.skeleton) {
            const OB = this._skinMap.get(BB.skeleton);
            void 0 !== OB && (void 0 === this._nodesSkinMap.get(OB) && this._nodesSkinMap.set(OB, []), this._nodesSkinMap.get(OB)?.push(GB))
          }
        }
        if (BB instanceof IG.h) {
          const YB = this._camerasMap.get(BB);
          if (YB) {
            void 0 === this._nodesCameraMap.get(YB) && this._nodesCameraMap.set(YB, []), this._setCameraTransformation(GB, BB, OB.convertToRightHanded);
            const DB = BB.parent;
            if (null !== DB && HG(BB, DB)) {
              const BB = this._nodeMap.get(DB);
              if (void 0 !== BB) {
                const OB = this._nodes[BB];
                return CG(GB, OB), this._nodesCameraMap.get(YB)?.push(OB), null
              }
            }
            this._nodesCameraMap.get(YB)?.push(GB)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", GB, BB, this._nodeMap, OB.convertToRightHanded) ? GB : (dB.b.Warn(`Not exporting node ${BB.name}`), null)
      }
      _exportIndices(BB, OB, GB, YB, DB, oB, jB, yB, JB) {
        let MB = null;
        JB.mode = function(BB) {
          switch (BB) {
            case QB.b.TriangleFillMode:
              return 4;
            case QB.b.TriangleStripDrawMode:
              return 5;
            case QB.b.TriangleFanDrawMode:
              return 6;
            case QB.b.PointListDrawMode:
            case QB.b.PointFillMode:
              return 0;
            case QB.b.LineLoopDrawMode:
              return 2;
            case QB.b.LineListDrawMode:
              return 1;
            case QB.b.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${BB}`)
        }(oB);
        const PB = jB !== QB.b.CounterClockWiseSideOrientation && function(BB) {
          switch (BB) {
            case QB.b.TriangleFillMode:
            case QB.b.TriangleStripDrawMode:
            case QB.b.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(oB);
        if (PB) {
          if (oB === QB.b.TriangleStripDrawMode || oB === QB.b.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const jB = OB ? new Uint32Array(YB) : new Uint16Array(YB);
          if (BB)
            for (let OB = 0; OB + 2 < YB; OB += 3) jB[OB] = BB[GB + OB] + DB, jB[OB + 1] = BB[GB + OB + 2] + DB, jB[OB + 2] = BB[GB + OB + 1] + DB;
          else
            for (let BB = 0; BB + 2 < YB; BB += 3) jB[BB] = BB, jB[BB + 1] = BB + 2, jB[BB + 2] = BB + 1;
          MB = jB
        } else if (BB && 0 !== DB) {
          const QB = OB ? new Uint32Array(YB) : new Uint16Array(YB);
          for (let OB = 0; OB < YB; OB++) QB[OB] = BB[GB + OB] + DB;
          MB = QB
        } else BB && (MB = function(BB, OB, GB, YB) {
          let DB = BB;
          return 0 === OB && GB === BB.length || (DB = Array.isArray(BB) ? BB.slice(OB, OB + GB) : BB.subarray(OB, OB + GB)), DB instanceof Int32Array ? new Uint32Array(DB.buffer, DB.byteOffset, DB.length) : Array.isArray(DB) ? YB ? new Uint32Array(DB) : new Uint16Array(DB) : DB
        }(BB, GB, YB, OB));
        if (MB) {
          let QB = yB.getIndicesAccessor(BB, GB, YB, DB, PB);
          if (void 0 === QB) {
            const oB = this._bufferManager.createBufferView(MB),
              jB = OB ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(oB, "SCALAR", jB, YB, 0)), QB = this._accessors.length - 1, yB.setIndicesAccessor(BB, GB, YB, DB, PB, QB)
          }
          JB.indices = QB
        }
      }
      _exportVertexBuffer(BB, OB, GB, YB, DB, QB) {
        const oB = BB.getKind();
        if (!hG(oB)) return;
        if (oB.startsWith("uv") && !this._options.exportUnusedUVs && (!OB || !this._materialNeedsUVsSet.has(OB))) return;
        let jB = DB.getVertexAccessor(BB, GB, YB);
        if (void 0 === jB) {
          const OB = DB.convertedToRightHandedBuffers.get(BB._buffer) || BB._buffer.getData(),
            QB = oB === MB.g.PositionKind ? function(BB, OB, GB, YB) {
              const {
                byteOffset: DB,
                byteStride: QB,
                type: oB,
                normalized: jB
              } = OB, yB = OB.getSize(), JB = new Array(yB).fill(1 / 0), MB = new Array(yB).fill(-1 / 0);
              return (0, mG.k)(BB, DB + GB * QB, QB, yB, oB, YB * yB, jB, (BB => {
                for (let OB = 0; OB < yB; OB++) JB[OB] = Math.min(JB[OB], BB[OB]), MB[OB] = Math.max(MB[OB], BB[OB])
              })), {
                min: JB,
                max: MB
              }
            }(OB, BB, GB, YB) : void 0,
            yB = (oB === MB.g.MatricesIndicesKind || oB === MB.g.MatricesIndicesExtraKind) && BB.type === MB.g.FLOAT,
            JB = yB ? MB.g.UNSIGNED_BYTE : BB.type,
            PB = yB ? void 0 : BB.normalized,
            zB = yB ? DB.getRemappedBufferView(BB._buffer, BB) : DB.getVertexBufferView(BB._buffer),
            lB = BB.byteOffset + GB * BB.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(zB, function(BB, OB) {
            if (BB == MB.g.ColorKind) return OB ? "VEC4" : "VEC3";
            switch (BB) {
              case MB.g.PositionKind:
              case MB.g.NormalKind:
                return "VEC3";
              case MB.g.TangentKind:
              case MB.g.MatricesIndicesKind:
              case MB.g.MatricesIndicesExtraKind:
              case MB.g.MatricesWeightsKind:
              case MB.g.MatricesWeightsExtraKind:
                return "VEC4";
              case MB.g.UVKind:
              case MB.g.UV2Kind:
              case MB.g.UV3Kind:
              case MB.g.UV4Kind:
              case MB.g.UV5Kind:
              case MB.g.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${BB}`)
          }(oB, DB.hasVertexColorAlpha(BB)), JB, YB, lB, QB, PB)), jB = this._accessors.length - 1, DB.setVertexAccessor(BB, GB, YB, jB)
        }
        QB.attributes[function(BB) {
          switch (BB) {
            case MB.g.PositionKind:
              return "POSITION";
            case MB.g.NormalKind:
              return "NORMAL";
            case MB.g.TangentKind:
              return "TANGENT";
            case MB.g.ColorKind:
              return "COLOR_0";
            case MB.g.UVKind:
              return "TEXCOORD_0";
            case MB.g.UV2Kind:
              return "TEXCOORD_1";
            case MB.g.UV3Kind:
              return "TEXCOORD_2";
            case MB.g.UV4Kind:
              return "TEXCOORD_3";
            case MB.g.UV5Kind:
              return "TEXCOORD_4";
            case MB.g.UV6Kind:
              return "TEXCOORD_5";
            case MB.g.MatricesIndicesKind:
              return "JOINTS_0";
            case MB.g.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case MB.g.MatricesWeightsKind:
              return "WEIGHTS_0";
            case MB.g.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${BB}`)
        }(oB)] = jB
      }
      async _exportMaterialAsync(BB, OB, GB, YB) {
        let DB = this._materialMap.get(BB);
        if (void 0 === DB) {
          const YB = OB && Object.keys(OB).some((BB => BB.startsWith("uv")));
          if ((BB = BB instanceof DY.d ? BB.jOB[GB.materialIndex] : BB) instanceof SO) DB = await this._materialExporter.exportPBRMaterialAsync(BB, YB);
          else if (BB instanceof QY.StandardMaterial) DB = await this._materialExporter.exportStandardMaterialAsync(BB, YB);
          else {
            if (!(BB instanceof xO)) return void dB.b.Warn(`Unsupported material '${BB.name}' with type ${BB.getClassName()}`);
            DB = await this._materialExporter.exportOpenPBRMaterialAsync(BB, YB)
          }
          this._materialMap.set(BB, DB)
        }
        YB.material = DB
      }
      async _exportMeshAsync(BB, OB) {
        let GB = OB.getMesh(BB);
        if (void 0 !== GB) return GB;
        const YB = {
          primitives: []
        };
        GB = this._meshes.length, this._meshes.push(YB), OB.setMesh(BB, GB);
        const DB = BB.isUnIndexed ? null : BB.KDB(),
          oB = BB.geometry?.getVertexBuffers(),
          jB = OB.getMorphTargetsFromMesh(BB),
          yB = BB instanceof lY.d,
          JB = BB instanceof IY,
          MB = BB.iW;
        if (oB && MB && MB.length > 0)
          for (const PB of MB) {
            const GB = {
                attributes: {}
              },
              MB = PB.cp() || this._babylonScene.defaultMaterial;
            if (JB) {
              const OB = {
                  name: MB.name
                },
                YB = BB,
                DB = ZB.Color3.White(),
                QB = YB.material?.alpha ?? 1,
                oB = YB.greasedLineMaterial?.color ?? DB;
              (!oB.equalsWithEpsilon(DB, FG.b) || QB < 1) && (OB.pbrMetallicRoughness = {
                baseColorFactor: [...oB.dDB(), QB]
              }), this._materials.push(OB), GB.material = this._materials.length - 1
            } else if (yB) {
              const OB = {
                  name: MB.name
                },
                YB = BB;
              (!YB.color.equalsWithEpsilon(ZB.Color3.White(), FG.b) || YB.alpha < 1) && (OB.pbrMetallicRoughness = {
                baseColorFactor: [...YB.color.dDB(), YB.alpha]
              }), this._materials.push(OB), GB.material = this._materials.length - 1
            } else await this._exportMaterialAsync(MB, oB, PB, GB);
            const zB = yB || JB ? QB.b.LineListDrawMode : BB.overrideRenderingFillMode ?? MB.fillMode;
            let lB = MB._getEffectiveOrientation(BB);
            OB.wasAddedByNoopNode && !BB.JF().useRightHandedSystem && (lB = lB === QB.b.ClockWiseSideOrientation ? QB.b.CounterClockWiseSideOrientation : QB.b.ClockWiseSideOrientation), this._exportIndices(DB, DB ? (0, mG.e)(DB, PB.indexCount, PB.indexStart, PB.verticesStart) : PB.verticesCount > 65535, DB ? PB.indexStart : PB.verticesStart, DB ? PB.indexCount : PB.verticesCount, -PB.verticesStart, zB, lB, OB, GB);
            for (const BB of Object.values(oB)) this._exportVertexBuffer(BB, MB, PB.verticesStart, PB.verticesCount, OB, GB);
            if (jB) {
              GB.targets = [];
              for (const BB of jB) GB.targets.push(BB.attributes)
            }
            YB.primitives.push(GB), this._extensionsPostExportMeshPrimitive(GB)
          }
        if (jB) {
          YB.weights = [], YB.extras || (YB.extras = {}), YB.extras.targetNames = [];
          for (const BB of jB) YB.weights.push(BB.influence), YB.extras.targetNames.push(BB.name)
        }
        return GB
      }
    }
    iY._ExtensionNames = new Array, iY._ExtensionFactories = {}, iY._ExtensionOrders = {};
    class LY {
      static async GLTFAsync(BB, OB, GB) {
        GB && GB.exportWithoutWaitingForScene || await BB.whenReadyAsync();
        const YB = new iY(BB, GB),
          DB = await YB.generateGLTFAsync(OB.replace(/\.[^/.]+$/, ""));
        return YB.dispose(), DB
      }
      static async GLBAsync(BB, OB, GB) {
        GB && GB.exportWithoutWaitingForScene || await BB.whenReadyAsync();
        const YB = new iY(BB, GB),
          DB = await YB.generateGLBAsync(OB.replace(/\.[^/.]+$/, ""));
        return YB.dispose(), DB
      }
    }
    const gY = "EXT_mesh_gpu_instancing";

    function rY(BB, OB) {
      const GB = new Float32Array(3 * OB);
      for (let YB = 0; YB < OB; YB++) GB[3 * YB + 0] = BB[4 * YB + 0], GB[3 * YB + 1] = BB[4 * YB + 1], GB[3 * YB + 2] = BB[4 * YB + 2];
      return GB
    }
    class XY {
      constructor(BB) {
        this.name = gY, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(BB, OB, GB, YB, DB, QB) {
        return await new Promise((BB => {
          if (OB && GB instanceof SY.c && GB.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const BB = XB.r.Zero(),
              YB = XB.f.Identity(),
              oB = XB.r.One(),
              jB = GB.thinInstanceGetWorldMatrices(),
              yB = XB.k.Xp[2],
              JB = XB.k.Quaternion[1],
              MB = XB.k.Xp[3];
            let PB = !1,
              zB = !1,
              lB = !1;
            const pB = new Float32Array(3 * GB.rBB),
              qB = new Float32Array(4 * GB.rBB),
              ZB = new Float32Array(3 * GB.rBB);
            let NB = 0;
            for (const OB of jB) OB.decompose(MB, JB, yB), DB && (eG(yB), TG(JB)), pB.set(yB.dDB(), 3 * NB), qB.set(JB.normalize().dDB(), 4 * NB), ZB.set(MB.dDB(), 3 * NB), PB = PB || !yB.equalsWithEpsilon(BB), zB = zB || !JB.equalsWithEpsilon(YB), lB = lB || !MB.equalsWithEpsilon(oB), NB++;
            const RB = {
              attributes: {}
            };
            PB && (RB.attributes.TRANSLATION = this._buildAccessor(pB, "VEC3", GB.rBB, QB)), zB && (RB.attributes.ROTATION = this._buildAccessor(qB, "VEC4", GB.rBB, QB)), lB && (RB.attributes.SCALE = this._buildAccessor(ZB, "VEC3", GB.rBB, QB));
            let WB = GB._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (WB) {
              const BB = GB.rBB,
                OB = "VEC3";
              GB.hasVertexAlpha && WB.length === 4 * BB ? (this._instanceColorWarned || (dB.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), WB = rY(WB, BB)) : WB.length === 4 * BB && (WB = rY(WB, BB)), WB.length === 3 * BB && (RB.attributes._COLOR_0 = this._buildAccessor(WB, OB, BB, QB))
            }
            OB.extensions = OB.extensions || {}, OB.extensions[gY] = RB
          }
          BB(OB)
        }))
      }
      _buildAccessor(BB, OB, GB, YB) {
        const DB = YB.createBufferView(BB),
          QB = YB.createAccessor(DB, OB, 5126, GB);
        return this._exporter._accessors.push(QB), this._exporter._accessors.length - 1
      }
    }
    let wY = !1;

    function EY() {
      wY || (wY = !0, iY.RegisterExtension(gY, (BB => new XY(BB))))
    }
    GB(41472);
    EY();
    var cY = GB(44999);

    function hY(BB, OB, GB, YB) {
      const DB = BB;
      let QB = null,
        oB = null,
        jB = null,
        yB = null;
      const JB = {},
        MB = OB.find((BB => "POSITION" === BB.dracoName));
      if (!MB) throw new Error("Draco: Missing position attribute for encoding.");
      if (!GB) {
        const BB = MB.data.length / MB.size;
        GB = new(BB > 65535 ? Uint32Array : Uint16Array)(BB);
        for (let OB = 0; OB < BB; OB++) GB[OB] = OB
      }
      try {
        QB = new DB.Encoder, oB = new DB.MeshBuilder, jB = new DB.Mesh, oB.AddFacesToMesh(jB, GB.length / 3, GB);
        const BB = new Map([
          [Float32Array, (BB, OB, GB, YB, DB, QB) => BB.AddFloatAttribute(OB, GB, YB, DB, QB)],
          [Uint32Array, (BB, OB, GB, YB, DB, QB) => BB.AddUInt32Attribute(OB, GB, YB, DB, QB)],
          [Uint16Array, (BB, OB, GB, YB, DB, QB) => BB.AddUInt16Attribute(OB, GB, YB, DB, QB)],
          [Uint8Array, (BB, OB, GB, YB, DB, QB) => BB.AddUInt8Attribute(OB, GB, YB, DB, QB)],
          [Int32Array, (BB, OB, GB, YB, DB, QB) => BB.AddInt32Attribute(OB, GB, YB, DB, QB)],
          [Int16Array, (BB, OB, GB, YB, DB, QB) => BB.AddInt16Attribute(OB, GB, YB, DB, QB)],
          [Int8Array, (BB, OB, GB, YB, DB, QB) => BB.AddInt8Attribute(OB, GB, YB, DB, QB)]
        ]);
        for (const GB of OB) {
          GB.data instanceof Uint8ClampedArray && (GB.data = new Uint8Array(GB.data));
          const OB = BB.get(GB.data.constructor),
            yB = GB.data.length / GB.size;
          JB[GB.kind] = OB(oB, jB, DB[GB.dracoName], yB, GB.size, GB.data), YB.quantizationBits && YB.quantizationBits[GB.dracoName] && QB.SetAttributeQuantization(DB[GB.dracoName], YB.quantizationBits[GB.dracoName])
        }
        YB.method && QB.SetEncodingMethod(DB[YB.method]), void 0 !== YB.encodeSpeed && void 0 !== YB.decodeSpeed && QB.SetSpeedOptions(YB.encodeSpeed, YB.decodeSpeed), yB = new DB.DracoInt8Array;
        const MB = QB.EncodeMeshToDracoBuffer(jB, yB);
        if (MB <= 0) throw new Error("Draco: Failed to encode.");
        const PB = new Int8Array(MB);
        for (let OB = 0; OB < MB; OB++) PB[OB] = yB.GetValue(OB);
        return {
          data: PB,
          attributeIds: JB
        }
      } finally {
        jB && DB.destroy(jB), oB && DB.destroy(oB), QB && DB.destroy(QB), yB && DB.destroy(yB)
      }
    }

    function aY() {
      let BB;
      onmessage = OB => {
        const GB = OB.data;
        switch (GB.id) {
          case "init": {
            GB.url && importScripts(GB.url);
            const OB = GB.wasmBinary ? {
              wasmBinary: GB.wasmBinary
            } : {};
            BB = DracoEncoderModule(OB), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!BB) throw new Error("Draco: Encoder module is not available.");
            BB.then((BB => {
              const OB = hY(BB, GB.attributes, GB.indices, GB.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: OB
              }, OB ? [OB.data.buffer] : void 0)
            })).catch((BB => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: BB.message
              })
            }))
        }
      }
    }
    class eY {
      constructor(BB) {
        if (BB.workerPool) return void(this._workerPoolPromise = Promise.resolve(BB.workerPool));
        const OB = BB.wasmBinary,
          GB = BB.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          YB = GB && "function" === typeof Worker && "function" === typeof URL,
          DB = YB || !BB.jsModule,
          QB = BB.wasmUrl && BB.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: DB ? UO.j.GetBabylonScriptURL(BB.wasmUrl, !0) : "",
            wasmBinaryPromise: OB ? Promise.resolve(OB) : UO.j.LoadFileAsync(UO.j.GetBabylonScriptURL(BB.wasmBinaryUrl, !0))
          } : {
            url: DB ? UO.j.GetBabylonScriptURL(BB.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        YB ? this._workerPoolPromise = QB.wasmBinaryPromise.then((BB => {
          const OB = this._getWorkerContent(),
            YB = URL.createObjectURL(new Blob([OB], {
              type: "application/javascript"
            }));
          return new cY.c(GB, (() => async function(BB, OB, GB) {
            return await new Promise(((YB, DB) => {
              const QB = OB => {
                  BB.removeEventListener("error", QB), BB.removeEventListener("message", oB), DB(OB)
                },
                oB = OB => {
                  "initDone" === OB.data.id && (BB.removeEventListener("error", QB), BB.removeEventListener("message", oB), YB(BB))
                };
              if (BB.addEventListener("error", QB), BB.addEventListener("message", oB), OB) {
                const YB = OB.slice(0);
                BB.postMessage({
                  id: "init",
                  url: GB,
                  wasmBinary: YB
                }, [YB])
              } else BB.postMessage({
                id: "init",
                url: GB
              })
            }))
          }(new Worker(YB), BB, QB.url)))
        })) : this._modulePromise = QB.wasmBinaryPromise.then((async OB => {
          if (!this._isModuleAvailable() && !BB.jsModule) {
            if (!QB.url) throw new Error("Draco codec module is not available");
            await UO.j.LoadBabylonScriptAsync(QB.url)
          }
          return await this._createModuleAsync(OB, BB.jsModule)
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

    function TY() {
      const BB = BB => !!BB && "object" === typeof BB;
      for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
      return GB.reduce(((OB, GB) => {
        const YB = Object.keys(GB);
        for (const DB of YB) {
          const YB = OB[DB],
            QB = GB[DB];
          Array.isArray(YB) && Array.isArray(QB) ? OB[DB] = YB.concat(QB) : BB(YB) && BB(QB) ? OB[DB] = TY(YB, QB) : OB[DB] = QB
        }
        return OB
      }), {})
    }

    function bY(BB) {
      return BB === wB.h.PositionKind ? "POSITION" : BB === wB.h.NormalKind ? "NORMAL" : BB === wB.h.ColorKind ? "COLOR" : BB.startsWith(wB.h.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const CY = {
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
    class HY extends eY {
      static get DefaultAvailable() {
        return !!((BB = HY.DefaultConfiguration).wasmUrl && (BB.wasmBinary || BB.wasmBinaryUrl) && "object" === typeof WebAssembly || BB.fallbackUrl);
        var BB
      }
      static get Default() {
        return HY._Default ?? (HY._Default = new HY), HY._Default
      }
      static ResetDefault(BB) {
        HY._Default && (BB || HY._Default.dispose(), HY._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(BB, OB) {
        return {
          module: await (OB || DracoEncoderModule)({
            wasmBinary: BB
          })
        }
      }
      _getWorkerContent() {
        return `${hY}(${aY})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HY.DefaultConfiguration)
      }
      async _encodeAsync(BB, OB, GB) {
        const YB = GB ? TY(CY, GB) : CY;
        if (this._workerPoolPromise) {
          const GB = await this._workerPoolPromise;
          return await new Promise(((DB, QB) => {
            GB.push(((GB, oB) => {
              const jB = BB => {
                  GB.removeEventListener("error", jB), GB.removeEventListener("message", yB), QB(BB), oB()
                },
                yB = BB => {
                  "encodeMeshSuccess" === BB.data.id ? (GB.removeEventListener("error", jB), GB.removeEventListener("message", yB), DB(BB.data.encodedMeshData), oB()) : "encodeMeshError" === BB.data.id && (GB.removeEventListener("error", jB), GB.removeEventListener("message", yB), QB(new Error(BB.data.errorMessage)), oB())
                };
              GB.addEventListener("error", jB), GB.addEventListener("message", yB);
              const JB = [];
              for (const OB of BB) JB.push(OB.data.buffer);
              OB && JB.push(OB.buffer), GB.postMessage({
                id: "encodeMesh",
                attributes: BB,
                indices: OB,
                options: YB
              }, JB)
            }))
          }))
        }
        if (this._modulePromise) {
          return hY((await this._modulePromise).module, BB, OB, YB)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(BB, OB) {
        if (0 == BB.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        BB instanceof SY.c && BB.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === OB?.method && (dB.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), OB.method = "MESH_SEQUENTIAL_ENCODING");
        const GB = function(BB) {
            let OB = BB.KDB(void 0, !0);
            return !OB || OB instanceof Uint32Array || OB instanceof Uint16Array || (OB = ((0, mG.e)(OB, OB.length) ? Uint32Array : Uint16Array).from(OB)), OB
          }(BB),
          YB = function(BB, OB) {
            const GB = [];
            for (const YB of BB.getVerticesDataKinds()) {
              if (OB?.includes(YB)) {
                if (YB === wB.h.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const DB = BB.getVertexBuffer(YB),
                QB = DB.getSize(),
                oB = (0, mG.v)(DB.getData(), QB, DB.type, DB.byteOffset, DB.byteStride, BB.getTotalVertices(), !0);
              GB.push({
                kind: YB,
                dracoName: bY(YB),
                size: QB,
                data: oB
              })
            }
            return GB
          }(BB, OB?.excludedAttributes);
        return await this._encodeAsync(YB, GB, OB)
      }
    }
    HY.DefaultConfiguration = {
      wasmUrl: `${UO.j._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${UO.j._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${UO.j._DefaultCdnUrl}/draco_encoder.js`
    }, HY._Default = null;
    const vY = "KHR_draco_mesh_compression";
    class sY {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(BB) {
        this.name = vY, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === BB.options.meshCompressionMethod && HY.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(BB, OB, GB) {
        if (!this.enabled) return;
        if (4 !== BB.mode && 5 !== BB.mode) return void dB.b.Warn("Cannot compress primitive with mode " + BB.mode + ".");
        const YB = [],
          DB = [];
        let QB = null;
        if (void 0 !== BB.indices) {
          const oB = GB[BB.indices],
            jB = OB.getBufferView(oB);
          QB = OB.getData(jB).slice(), YB.push(jB), DB.push(oB)
        }
        const oB = [];
        for (const [MB, PB] of Object.entries(BB.attributes)) {
          const BB = GB[PB],
            QB = OB.getBufferView(BB),
            yB = cG(BB.type),
            JB = (0, mG.v)(OB.getData(QB), yB, BB.componentType, BB.byteOffset || 0, QB.byteStride || (0, mG.s)(BB.componentType) * yB, BB.count, !0);
          oB.push({
            kind: MB,
            dracoName: (jB = MB, "POSITION" === jB ? "POSITION" : "NORMAL" === jB ? "NORMAL" : jB.startsWith("COLOR") ? "COLOR" : jB.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: cG(BB.type),
            data: JB
          }), YB.push(QB), DB.push(BB)
        }
        var jB;
        const yB = {
            method: BB.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          JB = HY.Default._encodeAsync(oB, QB, yB).then((GB => {
            const QB = {
                bufferView: -1,
                attributes: GB.attributeIds
              },
              oB = OB.createBufferView(GB.data);
            OB.setBufferView(QB, oB);
            for (const BB of YB) this._bufferViewsUsed.add(BB);
            for (const BB of DB) this._accessorsUsed.add(BB);
            BB.extensions || (BB.extensions = {}), BB.extensions[vY] = QB
          })).catch((BB => {
            dB.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + BB.message)
          }));
        this._encodePromises.push(JB), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(BB) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((OB => {
          BB.getPropertiesWithBufferView(OB).every((BB => this._accessorsUsed.has(BB))) && BB.removeBufferView(OB)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let xY = !1;

    function tY() {
      xY || (xY = !0, iY.RegisterExtension(vY, (BB => new sY(BB))))
    }
    tY();
    var BD = GB(44702);
    const OD = "KHR_lights_punctual",
      GD = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      YD = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      DD = XB.r.Backward();
    class QD {
      constructor(BB) {
        this.name = OD, this.enabled = !0, this.required = !1, this._exporter = BB
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[OD] = this._lights
      }
      async postExportNodeAsync(BB, OB, GB, YB, DB) {
        return await new Promise((QB => {
          if (!(GB instanceof MY.d)) return void QB(OB);
          const oB = GB.getTypeID() == MY.d.LIGHTTYPEID_POINTLIGHT ? "point" : GB.getTypeID() == MY.d.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : GB.getTypeID() == MY.d.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!oB || !(GB instanceof BD.d)) return dB.b.Warn(`${BB}: Light ${GB.name} is not supported in ${OD}`), void QB(OB);
          if (GB.falloffType !== MY.d.FALLOFF_GLTF && dB.b.Warn(`${BB}: Light falloff for ${GB.name} does not match the ${OD} specification!`), !GB.position.QyB(0, 0, 0)) {
            const BB = XB.k.Xp[0].IU(GB.position);
            DB && eG(BB), OB.translation = BB.dDB()
          }
          if ("point" !== oB) {
            const BB = GB.direction.normalizeToRef(XB.k.Xp[0]);
            DB && eG(BB);
            const YB = XB.f.FromUnitVectorsToRef(DD, BB, XB.k.Quaternion[0]);
            XB.f.IsIdentity(YB) || (OB.rotation = YB.dDB())
          }
          const jB = {
            type: oB,
            name: GB.name,
            color: GB.diffuse.dDB(),
            intensity: GB.intensity,
            range: GB.range
          };
          if (sG(jB, GD), "spot" === oB) {
            const BB = GB;
            jB.spot = {
              innerConeAngle: BB.innerAngle / 2,
              outerConeAngle: BB.angle / 2
            }, sG(jB.spot, YD)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(jB);
          const yB = {
              light: this._lights.lights.length - 1
            },
            JB = GB.parent;
          if (JB && HG(GB, JB)) {
            const BB = YB.get(JB);
            if (BB) {
              const GB = this._exporter._nodes[BB];
              return CG(OB, GB), GB.extensions || (GB.extensions = {}), GB.extensions[OD] = yB, void QB(null)
            }
          }
          OB.extensions || (OB.extensions = {}), OB.extensions[OD] = yB, QB(OB)
        }))
      }
    }
    let oD = !1;

    function jD() {
      oD || (oD = !0, iY.RegisterExtension(OD, (BB => new QD(BB))))
    }
    jD();
    const yD = "KHR_interactivity";
    class JD {
      constructor(BB) {
        this._exporter = BB, this.name = yD, this.enabled = !!BB.options.khrInteractivity, this.required = BB.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var BB, OB, GB;
        const YB = this._exporter.options.khrInteractivity;
        if (!YB) return;
        const DB = YB.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: BB => this._exporter._getNodeIndex(BB),
          getAnimationIndex: BB => this._exporter._getAnimationIndex(BB),
          getCameraIndex: BB => this._exporter._getCameraIndex(BB),
          getMaterialIndex: BB => this._exporter._getMaterialIndex(BB),
          getRootIndex: (BB, OB) => this._exporter._getRootIndex(BB, OB),
          setNodeExtension: (BB, OB, GB) => this._exporter._setNodeExtension(BB, OB, GB)
        });
        this._exporter._glTF.extensions[yD] = DB;
        for (const QB of YB.additionalExtensionsUsed)(BB = this._exporter._glTF).extensionsUsed || (BB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(QB) && this._exporter._glTF.extensionsUsed.push(QB);
        for (const QB of YB.additionalExtensionsRequired)(OB = this._exporter._glTF).extensionsUsed || (OB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(QB) && this._exporter._glTF.extensionsUsed.push(QB), (GB = this._exporter._glTF).extensionsRequired || (GB.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(QB) && this._exporter._glTF.extensionsRequired.push(QB)
      }
    }
    let MD = !1;

    function PD() {
      MD || (MD = !0, iY.RegisterExtension(yD, (BB => new JD(BB)), 200))
    }
    PD();
    const zD = "EXT_lights_area",
      lD = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      pD = {
        aspect: 1
      },
      qD = XB.r.Backward();
    class ZD {
      constructor(BB) {
        this.name = zD, this.enabled = !0, this.required = !1, this._exporter = BB
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[zD] = this._lights
      }
      async postExportNodeAsync(BB, OB, GB, YB, DB) {
        return await new Promise((QB => {
          if (!(GB instanceof MY.d)) return void QB(OB);
          const oB = GB.getTypeID() == MY.d.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!oB) return dB.b.Warn(`${BB}: Light ${GB.name} is not supported in ${zD}`), void QB(OB);
          const jB = GB;
          if (jB.falloffType !== MY.d.FALLOFF_GLTF && dB.b.Warn(`${BB}: Light falloff for ${GB.name} does not match the ${zD} specification!`), !jB.position.QyB(0, 0, 0)) {
            const BB = XB.k.Xp[0].IU(jB.position);
            DB && eG(BB), OB.translation = BB.dDB()
          }
          const yB = XB.r.Forward();
          DB && eG(yB);
          const JB = XB.f.FromUnitVectorsToRef(qD, yB, XB.k.Quaternion[0]);
          XB.f.IsIdentity(JB) || (OB.rotation = JB.dDB());
          const MB = {
            type: oB,
            name: jB.name,
            color: jB.diffuse.dDB(),
            intensity: jB.intensity,
            size: jB.height,
            rect: {
              aspect: jB.width / jB.height
            }
          };
          sG(MB, lD), MB.rect && sG(MB.rect, pD), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(MB);
          const PB = {
              light: this._lights.lights.length - 1
            },
            zB = GB.parent;
          if (zB && HG(jB, zB)) {
            const BB = YB.get(zB);
            if (BB) {
              const GB = this._exporter._nodes[BB];
              return CG(OB, GB), GB.extensions || (GB.extensions = {}), GB.extensions[zD] = PB, void QB(null)
            }
          }
          OB.extensions || (OB.extensions = {}), OB.extensions[zD] = PB, QB(OB)
        }))
      }
    }
    let ND = !1;

    function RD() {
      ND || (ND = !0, iY.RegisterExtension(zD, (BB => new ZD(BB))))
    }
    RD();
    const WD = "KHR_materials_anisotropy";
    class AD {
      constructor(BB) {
        this.name = WD, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, OB, GB) {
        const YB = [];
        if (GB instanceof SO) {
          if (GB.anisotropy.isEnabled && !GB.anisotropy.legacy) return GB.anisotropy.texture && YB.push(GB.anisotropy.texture), YB
        } else if (GB instanceof xO && GB.specularRoughnessAnisotropy > 0) {
          const BB = function(BB) {
            const OB = BB.specularRoughnessAnisotropyTexture,
              GB = BB.geometryTangentTexture;
            return `${OB&&OB.getInternalTexture()?OB.getInternalTexture().uniqueId:"NoStrength"}_${GB&&GB.getInternalTexture()?GB.getInternalTexture().uniqueId:"NoTangent"}`
          }(GB);
          if (this._anisoTexturesMap[BB]) YB.push(this._anisoTexturesMap[BB]);
          else {
            const OB = await async function(BB) {
              const OB = BB.JF(),
                GB = BB.specularRoughnessAnisotropyTexture,
                YB = BB.geometryTangentTexture;
              return GB || YB ? await oG("AnisotropyTexture", JG(YB ? jG(YB, 0) : yG(1), YB ? jG(YB, 1) : yG(0), GB ? jG(GB, 0) : yG(1)), OB) : null
            }(GB);
            OB && (YB.push(OB), this._anisoTexturesMap[BB] = OB)
          }
          return YB
        }
        return []
      }
      postExportMaterialAsync(BB, OB, GB) {
        return new Promise((BB => {
          var YB;
          if (GB instanceof SO) {
            if (!GB.anisotropy.isEnabled || GB.anisotropy.legacy) return void BB(OB);
            this._wasUsed = !0, OB.extensions = OB.extensions || {};
            const YB = this._exporter._materialExporter.getTextureInfo(GB.anisotropy.texture),
              DB = {
                anisotropyStrength: GB.anisotropy.intensity,
                anisotropyRotation: GB.anisotropy.angle,
                anisotropyTexture: YB ?? void 0
              };
            null !== DB.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(GB), OB.extensions[WD] = DB
          } else if (GB instanceof xO && GB.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, OB.extensions = OB.extensions || {};
            let DB = GB.specularRoughnessTexture;
            GB._useRoughnessFromMetallicTextureGreen && (DB = GB.baseMetalnessTexture);
            const QB = this._anisoTexturesMap[GB.id];
            if (!DB && !QB) {
              let YB = GB.specularRoughness,
                DB = GB.specularRoughnessAnisotropy;
              if (!GB._useGltfStyleAnisotropy) {
                const BB = function(BB, OB) {
                  const GB = BB * BB,
                    YB = GB * Math.sqrt(2 / (1 + (1 - OB) * (1 - OB))),
                    DB = (1 - OB) * YB;
                  return {
                    newBaseRoughness: Math.sqrt(DB),
                    newAnisotropyStrength: Math.min(Math.sqrt((YB - GB) / Math.max(1 - GB, 1e-4)), 1)
                  }
                }(GB.specularRoughness, GB.specularRoughnessAnisotropy);
                YB = BB.newBaseRoughness, DB = BB.newAnisotropyStrength
              }
              OB.pbrMetallicRoughness && (OB.pbrMetallicRoughness.roughnessFactor = YB);
              const QB = {
                anisotropyStrength: DB,
                anisotropyRotation: GB.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return OB.extensions[WD] = QB, BB(OB)
            }
            const oB = QB ? this._exporter._materialExporter.getTextureInfo(QB) : null,
              jB = {
                anisotropyStrength: GB.specularRoughnessAnisotropy,
                anisotropyRotation: GB.geometryTangentAngle,
                anisotropyTexture: oB || void 0,
                extensions: {}
              };
            GB._useGltfStyleAnisotropy || (OB.extensions.KHR_materials_openpbr = {}, (YB = this._exporter._glTF).extensionsUsed || (YB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(GB), OB.extensions[WD] = jB
          }
          BB(OB)
        }))
      }
    }
    let VD = !1;

    function SD() {
      VD || (VD = !0, iY.RegisterExtension(WD, (BB => new AD(BB))))
    }
    SD();
    const nD = "KHR_materials_clearcoat";

    function UD(BB, OB) {
      const GB = new uB.e(OB.name, OB.JF());
      return GB._texture = BB, GB.coordinatesIndex = OB.coordinatesIndex, OB instanceof uB.e && (GB.uOffset = OB.uOffset, GB.vOffset = OB.vOffset, GB.uScale = OB.uScale, GB.vScale = OB.vScale, GB.wAng = OB.wAng), GB.wrapU = OB.wrapU, GB.wrapV = OB.wrapV, GB
    }
    class fD {
      constructor(BB) {
        this.name = nD, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = BB
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
      async postExportMaterialAdditionalTexturesAsync(BB, OB, GB) {
        const YB = [];
        if (GB instanceof SO) {
          if (GB.clearCoat.isEnabled) return GB.clearCoat.texture && YB.push(GB.clearCoat.texture), !GB.clearCoat.useRoughnessFromMainTexture && GB.clearCoat.textureRoughness && YB.push(GB.clearCoat.textureRoughness), GB.clearCoat.bumpTexture && YB.push(GB.clearCoat.bumpTexture), YB
        } else if (GB instanceof xO && GB.coatWeight > 0) {
          let BB = !1;
          if (GB.coatWeightTexture ? GB.coatRoughnessTexture ? GB._useCoatRoughnessFromGreenChannel && GB.coatWeightTexture.getInternalTexture() === GB.coatRoughnessTexture.getInternalTexture() ? (YB.push(GB.coatWeightTexture), YB.push(GB.coatRoughnessTexture)) : BB = !0 : YB.push(GB.coatWeightTexture) : GB.coatRoughnessTexture && (GB._useCoatRoughnessFromGreenChannel ? YB.push(GB.coatRoughnessTexture) : BB = !0), BB) {
            const BB = function(BB) {
              const OB = BB.coatWeightTexture,
                GB = OB && OB.getInternalTexture() ? OB.getInternalTexture().uniqueId : "NoCoat",
                YB = BB.coatRoughnessTexture;
              return `${GB}_${YB&&YB.getInternalTexture()?YB.getInternalTexture().uniqueId:"NoRoughness"}`
            }(GB);
            if (!this._cachedInternalTexturesMap[BB]) {
              const OB = await async function(BB) {
                const OB = BB.JF(),
                  GB = BB.coatWeightTexture,
                  YB = BB.coatRoughnessTexture;
                return GB || YB ? (await oG("CoatTexture", JG(GB ? jG(GB, 0) : yG(1), YB ? jG(YB, BB._useCoatRoughnessFromGreenChannel ? 1 : 0) : yG(1)), OB)).getInternalTexture() : null
              }(GB);
              OB && (this._cachedInternalTexturesMap[BB] = OB)
            }
            this._cachedInternalTexturesMap[BB] && (GB.coatWeightTexture && (this._mergedTexturesMap[GB.coatWeightTexture.uniqueId] = UD(this._cachedInternalTexturesMap[BB], GB.coatWeightTexture), YB.push(this._mergedTexturesMap[GB.coatWeightTexture.uniqueId])), GB.coatRoughnessTexture && (this._mergedTexturesMap[GB.coatRoughnessTexture.uniqueId] = UD(this._cachedInternalTexturesMap[BB], GB.coatRoughnessTexture), YB.push(this._mergedTexturesMap[GB.coatRoughnessTexture.uniqueId])))
          }
          return GB.geometryCoatNormalTexture && YB.push(GB.geometryCoatNormalTexture), YB
        }
        return []
      }
      postExportMaterialAsync(BB, OB, GB) {
        return new Promise((BB => {
          if (GB instanceof SO) {
            if (!GB.clearCoat.isEnabled) return void BB(OB);
            this._wasUsed = !0, OB.extensions = OB.extensions || {};
            const YB = this._exporter._materialExporter.getTextureInfo(GB.clearCoat.texture);
            let DB;
            DB = GB.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(GB.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(GB.clearCoat.textureRoughness), GB.clearCoat.isTintEnabled && UO.j.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${GB.name}`), GB.clearCoat.remapF0OnInterfaceChange && UO.j.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${GB.name}`);
            const QB = this._exporter._materialExporter.getTextureInfo(GB.clearCoat.bumpTexture),
              oB = {
                clearcoatFactor: GB.clearCoat.intensity,
                clearcoatTexture: YB ?? void 0,
                clearcoatRoughnessFactor: GB.clearCoat.roughness,
                clearcoatRoughnessTexture: DB ?? void 0,
                clearcoatNormalTexture: QB ?? void 0
              };
            null === oB.clearcoatTexture && null === oB.clearcoatRoughnessTexture && null === oB.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(GB), OB.extensions[nD] = oB
          } else if (GB instanceof xO) {
            if (0 == GB.coatWeight) return void BB(OB);
            let YB, DB, QB, oB;
            this._wasUsed = !0, OB.extensions = OB.extensions || {}, GB.coatWeightTexture && (YB = this._mergedTexturesMap[GB.coatWeightTexture.uniqueId], DB = this._exporter._materialExporter.getTextureInfo(YB)), GB.coatRoughnessTexture && (QB = this._mergedTexturesMap[GB.coatRoughnessTexture.uniqueId], oB = this._exporter._materialExporter.getTextureInfo(QB)), GB.coatColorTexture && UO.j.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${GB.name}`);
            const jB = this._exporter._materialExporter.getTextureInfo(GB.geometryCoatNormalTexture),
              yB = {
                clearcoatFactor: GB.coatWeight,
                clearcoatTexture: DB ?? void 0,
                clearcoatRoughnessFactor: GB.coatRoughness,
                clearcoatRoughnessTexture: oB ?? void 0,
                clearcoatNormalTexture: jB ?? void 0
              };
            null === yB.clearcoatTexture && null === yB.clearcoatRoughnessTexture && null === yB.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(GB), OB.extensions[nD] = yB
          }
          BB(OB)
        }))
      }
    }
    let kD = !1;

    function dD() {
      kD || (kD = !0, iY.RegisterExtension(nD, (BB => new fD(BB))))
    }
    dD();
    const KD = "KHR_materials_coat";

    function uD(BB) {
      const OB = BB.coatRoughnessAnisotropyTexture,
        GB = BB.geometryCoatTangentTexture;
      return `${OB&&OB.getInternalTexture()?OB.getInternalTexture().uniqueId:"NoStrength"}_${GB&&GB.getInternalTexture()?GB.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function mD(BB, OB) {
      const GB = new uB.e(OB.name, OB.JF());
      return GB._texture = BB, GB.coordinatesIndex = OB.coordinatesIndex, OB instanceof uB.e && (GB.uOffset = OB.uOffset, GB.vOffset = OB.vOffset, GB.uScale = OB.uScale, GB.vScale = OB.vScale, GB.wAng = OB.wAng), GB.wrapU = OB.wrapU, GB.wrapV = OB.wrapV, GB
    }
    class ID {
      constructor(BB) {
        this.name = KD, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = BB
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
      async postExportMaterialAdditionalTexturesAsync(BB, OB, GB) {
        const YB = [];
        if (GB instanceof SO) {
          if (GB.clearCoat.isEnabled) return GB.clearCoat.texture && YB.push(GB.clearCoat.texture), !GB.clearCoat.useRoughnessFromMainTexture && GB.clearCoat.textureRoughness && YB.push(GB.clearCoat.textureRoughness), GB.clearCoat.bumpTexture && YB.push(GB.clearCoat.bumpTexture), GB.clearCoat.tintTexture && YB.push(GB.clearCoat.tintTexture), YB
        } else if (GB instanceof xO && GB.coatWeight > 0) {
          let BB = !1;
          if (GB.coatWeightTexture ? GB.coatRoughnessTexture ? GB._useCoatRoughnessFromGreenChannel && GB.coatWeightTexture.getInternalTexture() === GB.coatRoughnessTexture.getInternalTexture() ? (YB.push(GB.coatWeightTexture), YB.push(GB.coatRoughnessTexture)) : BB = !0 : YB.push(GB.coatWeightTexture) : GB.coatRoughnessTexture && (GB._useCoatRoughnessFromGreenChannel ? YB.push(GB.coatRoughnessTexture) : BB = !0), BB) {
            const BB = function(BB) {
              const OB = BB.coatWeightTexture,
                GB = OB && OB.getInternalTexture() ? OB.getInternalTexture().uniqueId : "NoCoat",
                YB = BB.coatRoughnessTexture;
              return `${GB}_${YB&&YB.getInternalTexture()?YB.getInternalTexture().uniqueId:"NoRoughness"}`
            }(GB);
            if (!this._cachedInternalTexturesMap[BB]) {
              const OB = await async function(BB) {
                const OB = BB.JF(),
                  GB = BB.coatWeightTexture,
                  YB = BB.coatRoughnessTexture;
                return GB || YB ? (await oG("CoatTexture", JG(GB ? jG(GB, 0) : yG(1), YB ? jG(YB, BB._useCoatRoughnessFromGreenChannel ? 1 : 0) : yG(1)), OB)).getInternalTexture() : null
              }(GB);
              OB && (this._cachedInternalTexturesMap[BB] = OB)
            }
            this._cachedInternalTexturesMap[BB] && (GB.coatWeightTexture && (this._mergedTexturesMap[GB.coatWeightTexture.uniqueId] = mD(this._cachedInternalTexturesMap[BB], GB.coatWeightTexture), YB.push(this._mergedTexturesMap[GB.coatWeightTexture.uniqueId])), GB.coatRoughnessTexture && (this._mergedTexturesMap[GB.coatRoughnessTexture.uniqueId] = mD(this._cachedInternalTexturesMap[BB], GB.coatRoughnessTexture), YB.push(this._mergedTexturesMap[GB.coatRoughnessTexture.uniqueId])))
          }
          if (GB.geometryCoatNormalTexture && YB.push(GB.geometryCoatNormalTexture), GB.coatColorTexture && YB.push(GB.coatColorTexture), GB.coatRoughnessAnisotropy > 0) {
            const BB = uD(GB);
            if (this._mergedTexturesMap[BB]) YB.push(this._mergedTexturesMap[BB]);
            else {
              const OB = await async function(BB) {
                const OB = BB.JF(),
                  GB = BB.coatRoughnessAnisotropyTexture,
                  YB = BB.geometryCoatTangentTexture;
                return GB || YB ? await oG("AnisotropyTexture", JG(YB ? jG(YB, 0) : yG(1), YB ? jG(YB, 1) : yG(0), GB ? jG(GB, 0) : yG(1)), OB) : null
              }(GB);
              OB && (YB.push(OB), this._mergedTexturesMap[BB] = OB)
            }
            return YB
          }
          return YB
        }
        return []
      }
      postExportMaterialAsync(BB, OB, GB) {
        return new Promise((BB => {
          var YB;
          if (GB instanceof SO) {
            if (!GB.clearCoat.isEnabled) return void BB(OB);
            this._wasUsed = !0, OB.extensions = OB.extensions || {};
            const YB = this._exporter._materialExporter.getTextureInfo(GB.clearCoat.texture);
            let DB, QB;
            DB = GB.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(GB.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(GB.clearCoat.textureRoughness), GB.clearCoat.isTintEnabled && (QB = this._exporter._materialExporter.getTextureInfo(GB.clearCoat.tintTexture));
            const oB = this._exporter._materialExporter.getTextureInfo(GB.clearCoat.bumpTexture),
              jB = GB.clearCoat.indexOfRefraction,
              yB = {
                coatFactor: GB.clearCoat.intensity,
                coatTexture: YB ?? void 0,
                coatRoughnessFactor: GB.clearCoat.roughness,
                coatRoughnessTexture: DB ?? void 0,
                coatNormalTexture: oB ?? void 0,
                coatColorFactor: GB.clearCoat.tintColor.dDB(),
                coatColorTexture: QB ?? void 0,
                coatIor: 1.5 !== jB ? jB : void 0
              };
            null === yB.coatTexture && null === yB.coatRoughnessTexture && null === yB.coatRoughnessTexture && null === yB.coatColorTexture || this._exporter._materialNeedsUVsSet.add(GB), OB.extensions[KD] = yB
          } else if (GB instanceof xO) {
            if (0 == GB.coatWeight) return void BB(OB);
            let DB, QB, oB, jB;
            this._wasUsed = !0, OB.extensions = OB.extensions || {}, GB.coatWeightTexture && (DB = this._mergedTexturesMap[GB.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[GB.coatWeightTexture.uniqueId] : GB.coatWeightTexture, QB = this._exporter._materialExporter.getTextureInfo(DB)), GB.coatRoughnessTexture && (oB = this._mergedTexturesMap[GB.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[GB.coatRoughnessTexture.uniqueId] : GB.coatRoughnessTexture, jB = this._exporter._materialExporter.getTextureInfo(oB));
            const yB = this._exporter._materialExporter.getTextureInfo(GB.geometryCoatNormalTexture),
              JB = this._exporter._materialExporter.getTextureInfo(GB.coatColorTexture),
              MB = GB.coatIor,
              PB = GB.coatDarkening,
              zB = GB.coatRoughnessTexture,
              lB = uD(GB),
              pB = this._mergedTexturesMap[lB];
            let qB, ZB = 0,
              NB = 0;
            if (GB.coatRoughnessAnisotropy > 0) {
              if (zB || pB) {
                const BB = pB ? this._exporter._materialExporter.getTextureInfo(pB) : null;
                ZB = GB.coatRoughnessAnisotropy, NB = GB.geometryCoatTangentAngle, qB = BB || void 0
              } else {
                let BB = GB.coatRoughness,
                  YB = GB.coatRoughnessAnisotropy;
                if (!GB._useGltfStyleAnisotropy) {
                  const OB = function(BB, OB) {
                    const GB = BB * BB,
                      YB = GB * Math.sqrt(2 / (1 + (1 - OB) * (1 - OB))),
                      DB = (1 - OB) * YB;
                    return {
                      newBaseRoughness: Math.sqrt(DB),
                      newAnisotropyStrength: Math.min(Math.sqrt((YB - GB) / Math.max(1 - GB, 1e-4)), 1)
                    }
                  }(GB.coatRoughness, GB.coatRoughnessAnisotropy);
                  BB = OB.newBaseRoughness, YB = OB.newAnisotropyStrength
                }
                OB.pbrMetallicRoughness && (OB.pbrMetallicRoughness.roughnessFactor = BB), ZB = YB, NB = GB.geometryCoatTangentAngle + .5 * Math.PI, qB = void 0
              }
              GB._useGltfStyleAnisotropy || (OB.extensions.KHR_materials_openpbr = {}, (YB = this._exporter._glTF).extensionsUsed || (YB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const RB = {
              coatFactor: GB.coatWeight,
              coatTexture: QB ?? void 0,
              coatRoughnessFactor: GB.coatRoughness,
              coatRoughnessTexture: jB ?? void 0,
              coatNormalTexture: yB ?? void 0,
              coatColorFactor: GB.coatColor.dDB(),
              coatColorTexture: JB ?? void 0,
              coatIor: 1.5 !== MB ? MB : void 0,
              coatDarkeningFactor: 1 !== PB ? PB : void 0,
              coatAnisotropyRotation: NB,
              coatAnisotropyStrength: ZB,
              coatAnisotropyTexture: qB
            };
            null === RB.coatTexture && null === RB.coatRoughnessTexture && null === RB.coatRoughnessTexture && null === RB.coatAnisotropyTexture && null === RB.coatColorTexture || this._exporter._materialNeedsUVsSet.add(GB), OB.extensions[KD] = RB
          }
          BB(OB)
        }))
      }
    }
    let FD = !1;

    function iD() {
      FD || (FD = !0, iY.RegisterExtension(KD, (BB => new ID(BB))))
    }
    iD();
    let LD = (() => {
      var BB, OB, GB, YB, DB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB, RB, WB, AB, VB, SB, nB, UB, dB, KB, uB, mB, IB, FB, LB, gB, rB, XB, wB, EB, cB, hB, aB, eB, bB, CB, HB, vB, sB, xB, tB, BO, OO, GO, YO, DO, QO, oO, jO, yO, JO, MO, PO, zO, lO, pO, qO, ZO, NO, RO, WO;
      let AO, VO, UO, fO, kO, dO, KO, uO, mO, IO, FO, iO, LO, gO, rO, XO, wO, EO, cO, hO, aO, eO, TO, bO, CO, HO, vO, sO, xO, tO, BG, OG, GG, YG, DG, QG, oG, jG, yG, JG, MG, PG, zG, lG, pG, qG, ZG, NG, RG, WG, AG, VG, SG, nG, UG, fG, kG, dG, KG, uG, mG, IG, FG, iG, LG, gG, rG, XG, wG = SO,
        EG = [],
        cG = [],
        hG = [],
        aG = [],
        eG = [],
        TG = [],
        bG = [],
        CG = [],
        HG = [],
        vG = [],
        sG = [],
        xG = [],
        tG = [],
        BY = [],
        OY = [],
        GY = [],
        YY = [],
        DY = [],
        QY = [],
        oY = [],
        jY = [],
        yY = [],
        JY = [],
        MY = [],
        PY = [],
        zY = [],
        lY = [],
        pY = [],
        qY = [],
        ZY = [],
        NY = [],
        RY = [],
        WY = [],
        AY = [],
        VY = [],
        SY = [],
        nY = [],
        UY = [],
        fY = [],
        kY = [],
        dY = [],
        KY = [],
        uY = [],
        mY = [],
        IY = [],
        FY = [],
        iY = [],
        LY = [],
        gY = [],
        rY = [],
        XY = [],
        wY = [],
        EY = [],
        cY = [],
        hY = [],
        aY = [],
        eY = [],
        TY = [],
        bY = [],
        CY = [],
        HY = [],
        vY = [],
        sY = [],
        xY = [],
        tY = [],
        BD = [],
        OD = [],
        GD = [],
        YD = [],
        DD = [],
        QD = [],
        oD = [],
        jD = [],
        yD = [],
        JD = [],
        MD = [],
        PD = [],
        zD = [],
        lD = [],
        pD = [],
        qD = [],
        ZD = [],
        ND = [],
        RD = [],
        WD = [],
        AD = [],
        VD = [],
        SD = [],
        nD = [],
        UD = [],
        fD = [],
        kD = [],
        dD = [],
        KD = [],
        uD = [],
        mD = [],
        ID = [],
        FD = [],
        iD = [],
        LD = [],
        gD = [],
        rD = [],
        XD = [],
        wD = [],
        ED = [],
        cD = [],
        hD = [],
        aD = [],
        eD = [],
        TD = [],
        bD = [],
        CD = [],
        HD = [],
        vD = [],
        sD = [],
        xD = [],
        tD = [],
        BQ = [],
        OQ = [],
        GQ = [],
        YQ = [],
        DQ = [],
        QQ = [],
        oQ = [],
        jQ = [],
        yQ = [],
        JQ = [],
        MQ = [],
        PQ = [],
        zQ = [],
        lQ = [],
        pQ = [],
        qQ = [];
      return BB = class extends wG {
        get directIntensity() {
          return (0, fB.c)(this, OB, "f")
        }
        set directIntensity(BB) {
          (0, fB.d)(this, OB, BB, "f")
        }
        get emissiveIntensity() {
          return (0, fB.c)(this, GB, "f")
        }
        set emissiveIntensity(BB) {
          (0, fB.d)(this, GB, BB, "f")
        }
        get environmentIntensity() {
          return (0, fB.c)(this, YB, "f")
        }
        set environmentIntensity(BB) {
          (0, fB.d)(this, YB, BB, "f")
        }
        get specularIntensity() {
          return (0, fB.c)(this, DB, "f")
        }
        set specularIntensity(BB) {
          (0, fB.d)(this, DB, BB, "f")
        }
        get disableBumpMap() {
          return (0, fB.c)(this, oB, "f")
        }
        set disableBumpMap(BB) {
          (0, fB.d)(this, oB, BB, "f")
        }
        get albedoTexture() {
          return (0, fB.c)(this, jB, "f")
        }
        set albedoTexture(BB) {
          (0, fB.d)(this, jB, BB, "f")
        }
        get baseWeightTexture() {
          return (0, fB.c)(this, yB, "f")
        }
        set baseWeightTexture(BB) {
          (0, fB.d)(this, yB, BB, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, fB.c)(this, JB, "f")
        }
        set baseDiffuseRoughnessTexture(BB) {
          (0, fB.d)(this, JB, BB, "f")
        }
        get ambientTexture() {
          return (0, fB.c)(this, MB, "f")
        }
        set ambientTexture(BB) {
          (0, fB.d)(this, MB, BB, "f")
        }
        get ambientTextureStrength() {
          return (0, fB.c)(this, PB, "f")
        }
        set ambientTextureStrength(BB) {
          (0, fB.d)(this, PB, BB, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, fB.c)(this, zB, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(BB) {
          (0, fB.d)(this, zB, BB, "f")
        }
        get opacityTexture() {
          return (0, fB.c)(this, lB, "f")
        }
        set opacityTexture(BB) {
          (0, fB.d)(this, lB, BB, "f")
        }
        get reflectionTexture() {
          return (0, fB.c)(this, pB, "f")
        }
        set reflectionTexture(BB) {
          (0, fB.d)(this, pB, BB, "f")
        }
        get emissiveTexture() {
          return (0, fB.c)(this, qB, "f")
        }
        set emissiveTexture(BB) {
          (0, fB.d)(this, qB, BB, "f")
        }
        get reflectivityTexture() {
          return (0, fB.c)(this, ZB, "f")
        }
        set reflectivityTexture(BB) {
          (0, fB.d)(this, ZB, BB, "f")
        }
        get metallicTexture() {
          return (0, fB.c)(this, NB, "f")
        }
        set metallicTexture(BB) {
          (0, fB.d)(this, NB, BB, "f")
        }
        get metallic() {
          return (0, fB.c)(this, RB, "f")
        }
        set metallic(BB) {
          (0, fB.d)(this, RB, BB, "f")
        }
        get roughness() {
          return (0, fB.c)(this, WB, "f")
        }
        set roughness(BB) {
          (0, fB.d)(this, WB, BB, "f")
        }
        get metallicF0Factor() {
          return (0, fB.c)(this, AB, "f")
        }
        set metallicF0Factor(BB) {
          (0, fB.d)(this, AB, BB, "f")
        }
        get metallicReflectanceColor() {
          return (0, fB.c)(this, VB, "f")
        }
        set metallicReflectanceColor(BB) {
          (0, fB.d)(this, VB, BB, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, fB.c)(this, SB, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(BB) {
          (0, fB.d)(this, SB, BB, "f")
        }
        get metallicReflectanceTexture() {
          return (0, fB.c)(this, nB, "f")
        }
        set metallicReflectanceTexture(BB) {
          (0, fB.d)(this, nB, BB, "f")
        }
        get reflectanceTexture() {
          return (0, fB.c)(this, UB, "f")
        }
        set reflectanceTexture(BB) {
          (0, fB.d)(this, UB, BB, "f")
        }
        get microSurfaceTexture() {
          return (0, fB.c)(this, dB, "f")
        }
        set microSurfaceTexture(BB) {
          (0, fB.d)(this, dB, BB, "f")
        }
        get bumpTexture() {
          return (0, fB.c)(this, KB, "f")
        }
        set bumpTexture(BB) {
          (0, fB.d)(this, KB, BB, "f")
        }
        get lightmapTexture() {
          return (0, fB.c)(this, uB, "f")
        }
        set lightmapTexture(BB) {
          (0, fB.d)(this, uB, BB, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(BB) {
          this.subSurface.refractionTexture = BB, BB ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, fB.c)(this, mB, "f")
        }
        set ambientColor(BB) {
          (0, fB.d)(this, mB, BB, "f")
        }
        get albedoColor() {
          return (0, fB.c)(this, IB, "f")
        }
        set albedoColor(BB) {
          (0, fB.d)(this, IB, BB, "f")
        }
        get baseWeight() {
          return (0, fB.c)(this, FB, "f")
        }
        set baseWeight(BB) {
          (0, fB.d)(this, FB, BB, "f")
        }
        get baseDiffuseRoughness() {
          return (0, fB.c)(this, LB, "f")
        }
        set baseDiffuseRoughness(BB) {
          (0, fB.d)(this, LB, BB, "f")
        }
        get reflectivityColor() {
          return (0, fB.c)(this, gB, "f")
        }
        set reflectivityColor(BB) {
          (0, fB.d)(this, gB, BB, "f")
        }
        get reflectionColor() {
          return (0, fB.c)(this, rB, "f")
        }
        set reflectionColor(BB) {
          (0, fB.d)(this, rB, BB, "f")
        }
        get emissiveColor() {
          return (0, fB.c)(this, XB, "f")
        }
        set emissiveColor(BB) {
          (0, fB.d)(this, XB, BB, "f")
        }
        get microSurface() {
          return (0, fB.c)(this, wB, "f")
        }
        set microSurface(BB) {
          (0, fB.d)(this, wB, BB, "f")
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
          return (0, fB.c)(this, EB, "f")
        }
        set useLightmapAsShadowmap(BB) {
          (0, fB.d)(this, EB, BB, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, fB.c)(this, cB, "f")
        }
        set useAlphaFromAlbedoTexture(BB) {
          (0, fB.d)(this, cB, BB, "f")
        }
        get forceAlphaTest() {
          return (0, fB.c)(this, hB, "f")
        }
        set forceAlphaTest(BB) {
          (0, fB.d)(this, hB, BB, "f")
        }
        get alphaCutOff() {
          return (0, fB.c)(this, aB, "f")
        }
        set alphaCutOff(BB) {
          (0, fB.d)(this, aB, BB, "f")
        }
        get useSpecularOverAlpha() {
          return (0, fB.c)(this, eB, "f")
        }
        set useSpecularOverAlpha(BB) {
          (0, fB.d)(this, eB, BB, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, fB.c)(this, bB, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(BB) {
          (0, fB.d)(this, bB, BB, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, fB.c)(this, CB, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(BB) {
          (0, fB.d)(this, CB, BB, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, fB.c)(this, HB, "f")
        }
        set useRoughnessFromMetallicTextureGreen(BB) {
          (0, fB.d)(this, HB, BB, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, fB.c)(this, vB, "f")
        }
        set useMetallnessFromMetallicTextureBlue(BB) {
          (0, fB.d)(this, vB, BB, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, fB.c)(this, sB, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(BB) {
          (0, fB.d)(this, sB, BB, "f")
        }
        get useAmbientInGrayScale() {
          return (0, fB.c)(this, xB, "f")
        }
        set useAmbientInGrayScale(BB) {
          (0, fB.d)(this, xB, BB, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, fB.c)(this, tB, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(BB) {
          (0, fB.d)(this, tB, BB, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === SO.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(BB) {
          BB !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = BB ? SO.LIGHTFALLOFF_PHYSICAL : SO.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === SO.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(BB) {
          BB !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = BB ? SO.LIGHTFALLOFF_GLTF : SO.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, fB.c)(this, BO, "f")
        }
        set useRadianceOverAlpha(BB) {
          (0, fB.d)(this, BO, BB, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, fB.c)(this, OO, "f")
        }
        set useObjectSpaceNormalMap(BB) {
          (0, fB.d)(this, OO, BB, "f")
        }
        get useParallax() {
          return (0, fB.c)(this, GO, "f")
        }
        set useParallax(BB) {
          (0, fB.d)(this, GO, BB, "f")
        }
        get useParallaxOcclusion() {
          return (0, fB.c)(this, YO, "f")
        }
        set useParallaxOcclusion(BB) {
          (0, fB.d)(this, YO, BB, "f")
        }
        get parallaxScaleBias() {
          return (0, fB.c)(this, DO, "f")
        }
        set parallaxScaleBias(BB) {
          (0, fB.d)(this, DO, BB, "f")
        }
        get disableLighting() {
          return (0, fB.c)(this, QO, "f")
        }
        set disableLighting(BB) {
          (0, fB.d)(this, QO, BB, "f")
        }
        get forceIrradianceInFragment() {
          return (0, fB.c)(this, oO, "f")
        }
        set forceIrradianceInFragment(BB) {
          (0, fB.d)(this, oO, BB, "f")
        }
        get maxSimultaneousLights() {
          return (0, fB.c)(this, jO, "f")
        }
        set maxSimultaneousLights(BB) {
          (0, fB.d)(this, jO, BB, "f")
        }
        get invertNormalMapX() {
          return (0, fB.c)(this, yO, "f")
        }
        set invertNormalMapX(BB) {
          (0, fB.d)(this, yO, BB, "f")
        }
        get invertNormalMapY() {
          return (0, fB.c)(this, JO, "f")
        }
        set invertNormalMapY(BB) {
          (0, fB.d)(this, JO, BB, "f")
        }
        get twoSidedLighting() {
          return (0, fB.c)(this, MO, "f")
        }
        set twoSidedLighting(BB) {
          (0, fB.d)(this, MO, BB, "f")
        }
        get useAlphaFresnel() {
          return (0, fB.c)(this, PO, "f")
        }
        set useAlphaFresnel(BB) {
          (0, fB.d)(this, PO, BB, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, fB.c)(this, zO, "f")
        }
        set useLinearAlphaFresnel(BB) {
          (0, fB.d)(this, zO, BB, "f")
        }
        get environmentBRDFTexture() {
          return (0, fB.c)(this, lO, "f")
        }
        set environmentBRDFTexture(BB) {
          (0, fB.d)(this, lO, BB, "f")
        }
        get forceNormalForward() {
          return (0, fB.c)(this, pO, "f")
        }
        set forceNormalForward(BB) {
          (0, fB.d)(this, pO, BB, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, fB.c)(this, qO, "f")
        }
        set enableSpecularAntiAliasing(BB) {
          (0, fB.d)(this, qO, BB, "f")
        }
        get useHorizonOcclusion() {
          return (0, fB.c)(this, ZO, "f")
        }
        set useHorizonOcclusion(BB) {
          (0, fB.d)(this, ZO, BB, "f")
        }
        get useRadianceOcclusion() {
          return (0, fB.c)(this, NO, "f")
        }
        set useRadianceOcclusion(BB) {
          (0, fB.d)(this, NO, BB, "f")
        }
        get unlit() {
          return (0, fB.c)(this, RO, "f")
        }
        set unlit(BB) {
          (0, fB.d)(this, RO, BB, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, fB.c)(this, WO, "f")
        }
        set applyDecalMapAfterDetailMap(BB) {
          (0, fB.d)(this, WO, BB, "f")
        }
        constructor(QB, kB) {
          super(QB, kB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), OB.set(this, ((0, fB.j)(this, EG), (0, fB.j)(this, cG, 1))), GB.set(this, ((0, fB.j)(this, hG), (0, fB.j)(this, aG, 1))), YB.set(this, ((0, fB.j)(this, eG), (0, fB.j)(this, TG, 1))), DB.set(this, ((0, fB.j)(this, bG), (0, fB.j)(this, CG, 1))), oB.set(this, ((0, fB.j)(this, HG), (0, fB.j)(this, vG, !1))), jB.set(this, ((0, fB.j)(this, sG), (0, fB.j)(this, xG, void 0))), yB.set(this, ((0, fB.j)(this, tG), (0, fB.j)(this, BY, void 0))), JB.set(this, ((0, fB.j)(this, OY), (0, fB.j)(this, GY, void 0))), MB.set(this, ((0, fB.j)(this, YY), (0, fB.j)(this, DY, void 0))), PB.set(this, ((0, fB.j)(this, QY), (0, fB.j)(this, oY, 1))), zB.set(this, ((0, fB.j)(this, jY), (0, fB.j)(this, yY, BB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), lB.set(this, ((0, fB.j)(this, JY), (0, fB.j)(this, MY, void 0))), pB.set(this, ((0, fB.j)(this, PY), (0, fB.j)(this, zY, void 0))), qB.set(this, ((0, fB.j)(this, lY), (0, fB.j)(this, pY, void 0))), ZB.set(this, ((0, fB.j)(this, qY), (0, fB.j)(this, ZY, void 0))), NB.set(this, ((0, fB.j)(this, NY), (0, fB.j)(this, RY, void 0))), RB.set(this, ((0, fB.j)(this, WY), (0, fB.j)(this, AY, void 0))), WB.set(this, ((0, fB.j)(this, VY), (0, fB.j)(this, SY, void 0))), AB.set(this, ((0, fB.j)(this, nY), (0, fB.j)(this, UY, 1))), VB.set(this, ((0, fB.j)(this, fY), (0, fB.j)(this, kY, TB.c.White()))), SB.set(this, ((0, fB.j)(this, dY), (0, fB.j)(this, KY, !1))), nB.set(this, ((0, fB.j)(this, uY), (0, fB.j)(this, mY, void 0))), UB.set(this, ((0, fB.j)(this, IY), (0, fB.j)(this, FY, void 0))), dB.set(this, ((0, fB.j)(this, iY), (0, fB.j)(this, LY, void 0))), KB.set(this, ((0, fB.j)(this, gY), (0, fB.j)(this, rY, void 0))), uB.set(this, ((0, fB.j)(this, XY), (0, fB.j)(this, wY, void 0))), mB.set(this, ((0, fB.j)(this, EY), (0, fB.j)(this, cY, new TB.c(0, 0, 0)))), IB.set(this, ((0, fB.j)(this, hY), (0, fB.j)(this, aY, new TB.c(1, 1, 1)))), FB.set(this, ((0, fB.j)(this, eY), (0, fB.j)(this, TY, 1))), LB.set(this, ((0, fB.j)(this, bY), (0, fB.j)(this, CY, void 0))), gB.set(this, ((0, fB.j)(this, HY), (0, fB.j)(this, vY, new TB.c(1, 1, 1)))), rB.set(this, ((0, fB.j)(this, sY), (0, fB.j)(this, xY, new TB.c(1, 1, 1)))), XB.set(this, ((0, fB.j)(this, tY), (0, fB.j)(this, BD, new TB.c(0, 0, 0)))), wB.set(this, ((0, fB.j)(this, OD), (0, fB.j)(this, GD, 1))), EB.set(this, ((0, fB.j)(this, YD), (0, fB.j)(this, DD, !1))), cB.set(this, ((0, fB.j)(this, QD), (0, fB.j)(this, oD, !1))), hB.set(this, ((0, fB.j)(this, jD), (0, fB.j)(this, yD, !1))), aB.set(this, ((0, fB.j)(this, JD), (0, fB.j)(this, MD, .4))), eB.set(this, ((0, fB.j)(this, PD), (0, fB.j)(this, zD, !0))), bB.set(this, ((0, fB.j)(this, lD), (0, fB.j)(this, pD, !1))), CB.set(this, ((0, fB.j)(this, qD), (0, fB.j)(this, ZD, !0))), HB.set(this, ((0, fB.j)(this, ND), (0, fB.j)(this, RD, !1))), vB.set(this, ((0, fB.j)(this, WD), (0, fB.j)(this, AD, !1))), sB.set(this, ((0, fB.j)(this, VD), (0, fB.j)(this, SD, !1))), xB.set(this, ((0, fB.j)(this, nD), (0, fB.j)(this, UD, !1))), tB.set(this, ((0, fB.j)(this, fD), (0, fB.j)(this, kD, !1))), BO.set(this, ((0, fB.j)(this, dD), (0, fB.j)(this, KD, !0))), OO.set(this, ((0, fB.j)(this, uD), (0, fB.j)(this, mD, !1))), GO.set(this, ((0, fB.j)(this, ID), (0, fB.j)(this, FD, !1))), YO.set(this, ((0, fB.j)(this, iD), (0, fB.j)(this, LD, !1))), DO.set(this, ((0, fB.j)(this, gD), (0, fB.j)(this, rD, .05))), QO.set(this, ((0, fB.j)(this, XD), (0, fB.j)(this, wD, !1))), oO.set(this, ((0, fB.j)(this, ED), (0, fB.j)(this, cD, !1))), jO.set(this, ((0, fB.j)(this, hD), (0, fB.j)(this, aD, 4))), yO.set(this, ((0, fB.j)(this, eD), (0, fB.j)(this, TD, !1))), JO.set(this, ((0, fB.j)(this, bD), (0, fB.j)(this, CD, !1))), MO.set(this, ((0, fB.j)(this, HD), (0, fB.j)(this, vD, !1))), PO.set(this, ((0, fB.j)(this, sD), (0, fB.j)(this, xD, !1))), zO.set(this, ((0, fB.j)(this, tD), (0, fB.j)(this, BQ, !1))), lO.set(this, ((0, fB.j)(this, OQ), (0, fB.j)(this, GQ, null))), pO.set(this, ((0, fB.j)(this, YQ), (0, fB.j)(this, DQ, !1))), qO.set(this, ((0, fB.j)(this, QQ), (0, fB.j)(this, oQ, !1))), ZO.set(this, ((0, fB.j)(this, jQ), (0, fB.j)(this, yQ, !0))), NO.set(this, ((0, fB.j)(this, JQ), (0, fB.j)(this, MQ, !0))), RO.set(this, ((0, fB.j)(this, PQ), (0, fB.j)(this, zQ, !1))), WO.set(this, ((0, fB.j)(this, lQ), (0, fB.j)(this, pQ, !1))), (0, fB.j)(this, qQ), this._environmentBRDFTexture = iB(this.JF())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(OB) {
          let GB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const DB = nO.d.Clone((() => new BB(OB, this.JF())), this, {
            cloneTexturesOnlyOnce: GB
          });
          return DB.id = OB, DB.name = OB, this.stencil.copyTo(DB.stencil), this._clonePlugins(DB, YB), DB
        }
        serialize() {
          const BB = super.serialize();
          return BB.customType = "BABYLON.PBRMaterial", BB
        }
        static Parse(OB, GB, YB) {
          const DB = nO.d.Parse((() => new BB(OB.name, GB)), OB, GB, YB);
          return OB.stencil && DB.stencil.parse(OB.stencil, GB, YB), QB.b._ParsePlugins(OB, DB, GB, YB), OB.clearCoat && DB.clearCoat.parse(OB.clearCoat, GB, YB), OB.anisotropy && DB.anisotropy.parse(OB.anisotropy, GB, YB), OB.brdf && DB.brdf.parse(OB.brdf, GB, YB), OB.sheen && DB.sheen.parse(OB.sheen, GB, YB), OB.subSurface && DB.subSurface.parse(OB.subSurface, GB, YB), OB.iridescence && DB.iridescence.parse(OB.iridescence, GB, YB), DB
        }
      }, OB = new WeakMap, GB = new WeakMap, YB = new WeakMap, DB = new WeakMap, oB = new WeakMap, jB = new WeakMap, yB = new WeakMap, JB = new WeakMap, MB = new WeakMap, PB = new WeakMap, zB = new WeakMap, lB = new WeakMap, pB = new WeakMap, qB = new WeakMap, ZB = new WeakMap, NB = new WeakMap, RB = new WeakMap, WB = new WeakMap, AB = new WeakMap, VB = new WeakMap, SB = new WeakMap, nB = new WeakMap, UB = new WeakMap, dB = new WeakMap, KB = new WeakMap, uB = new WeakMap, mB = new WeakMap, IB = new WeakMap, FB = new WeakMap, LB = new WeakMap, gB = new WeakMap, rB = new WeakMap, XB = new WeakMap, wB = new WeakMap, EB = new WeakMap, cB = new WeakMap, hB = new WeakMap, aB = new WeakMap, eB = new WeakMap, bB = new WeakMap, CB = new WeakMap, HB = new WeakMap, vB = new WeakMap, sB = new WeakMap, xB = new WeakMap, tB = new WeakMap, BO = new WeakMap, OO = new WeakMap, GO = new WeakMap, YO = new WeakMap, DO = new WeakMap, QO = new WeakMap, oO = new WeakMap, jO = new WeakMap, yO = new WeakMap, JO = new WeakMap, MO = new WeakMap, PO = new WeakMap, zO = new WeakMap, lO = new WeakMap, pO = new WeakMap, qO = new WeakMap, ZO = new WeakMap, NO = new WeakMap, RO = new WeakMap, WO = new WeakMap, (() => {
        const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(wG[Symbol.metadata] ?? null) : void 0;
        AO = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], VO = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], UO = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], fO = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], kO = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], dO = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], KO = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], uO = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], mO = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], IO = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], FO = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], iO = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], LO = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], gO = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], rO = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], XO = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], wO = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], EO = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], cO = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], hO = [(0, kB.n)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], aO = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], eO = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], TO = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], bO = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], CO = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], HO = [(0, kB.B)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty", null)], vO = [(0, kB.n)("ambient"), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], sO = [(0, kB.n)("albedo"), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], xO = [(0, kB.L)("baseWeight"), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], tO = [(0, kB.L)("baseDiffuseRoughness"), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], BG = [(0, kB.n)("reflectivity"), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], OG = [(0, kB.n)("reflection"), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], GG = [(0, kB.n)("emissive"), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], YG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], DG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], QG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], oG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], jG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], yG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], JG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], MG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], PG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], zG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], lG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], pG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], qG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], ZG = [(0, kB.L)()], NG = [(0, kB.L)()], RG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], WG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], AG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], VG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], SG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], nG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsLightsDirty")], UG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], fG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsLightsDirty")], kG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], dG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], KG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], uG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], mG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], IG = [(0, kB.g)("_markAllSubMeshesAsTexturesDirty")], FG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], iG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], LG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], gG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], rG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], XG = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], (0, fB.h)(BB, null, AO, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "directIntensity" in BB,
            get: BB => BB.directIntensity,
            set: (BB, OB) => {
              BB.directIntensity = OB
            }
          },
          metadata: OB
        }, cG, hG), (0, fB.h)(BB, null, VO, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "emissiveIntensity" in BB,
            get: BB => BB.emissiveIntensity,
            set: (BB, OB) => {
              BB.emissiveIntensity = OB
            }
          },
          metadata: OB
        }, aG, eG), (0, fB.h)(BB, null, UO, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "environmentIntensity" in BB,
            get: BB => BB.environmentIntensity,
            set: (BB, OB) => {
              BB.environmentIntensity = OB
            }
          },
          metadata: OB
        }, TG, bG), (0, fB.h)(BB, null, fO, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "specularIntensity" in BB,
            get: BB => BB.specularIntensity,
            set: (BB, OB) => {
              BB.specularIntensity = OB
            }
          },
          metadata: OB
        }, CG, HG), (0, fB.h)(BB, null, kO, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: BB => "disableBumpMap" in BB,
            get: BB => BB.disableBumpMap,
            set: (BB, OB) => {
              BB.disableBumpMap = OB
            }
          },
          metadata: OB
        }, vG, sG), (0, fB.h)(BB, null, dO, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "albedoTexture" in BB,
            get: BB => BB.albedoTexture,
            set: (BB, OB) => {
              BB.albedoTexture = OB
            }
          },
          metadata: OB
        }, xG, tG), (0, fB.h)(BB, null, KO, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseWeightTexture" in BB,
            get: BB => BB.baseWeightTexture,
            set: (BB, OB) => {
              BB.baseWeightTexture = OB
            }
          },
          metadata: OB
        }, BY, OY), (0, fB.h)(BB, null, uO, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseDiffuseRoughnessTexture" in BB,
            get: BB => BB.baseDiffuseRoughnessTexture,
            set: (BB, OB) => {
              BB.baseDiffuseRoughnessTexture = OB
            }
          },
          metadata: OB
        }, GY, YY), (0, fB.h)(BB, null, mO, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "ambientTexture" in BB,
            get: BB => BB.ambientTexture,
            set: (BB, OB) => {
              BB.ambientTexture = OB
            }
          },
          metadata: OB
        }, DY, QY), (0, fB.h)(BB, null, IO, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: BB => "ambientTextureStrength" in BB,
            get: BB => BB.ambientTextureStrength,
            set: (BB, OB) => {
              BB.ambientTextureStrength = OB
            }
          },
          metadata: OB
        }, oY, jY), (0, fB.h)(BB, null, FO, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: BB => "ambientTextureImpactOnAnalyticalLights" in BB,
            get: BB => BB.ambientTextureImpactOnAnalyticalLights,
            set: (BB, OB) => {
              BB.ambientTextureImpactOnAnalyticalLights = OB
            }
          },
          metadata: OB
        }, yY, JY), (0, fB.h)(BB, null, iO, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "opacityTexture" in BB,
            get: BB => BB.opacityTexture,
            set: (BB, OB) => {
              BB.opacityTexture = OB
            }
          },
          metadata: OB
        }, MY, PY), (0, fB.h)(BB, null, LO, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectionTexture" in BB,
            get: BB => BB.reflectionTexture,
            set: (BB, OB) => {
              BB.reflectionTexture = OB
            }
          },
          metadata: OB
        }, zY, lY), (0, fB.h)(BB, null, gO, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "emissiveTexture" in BB,
            get: BB => BB.emissiveTexture,
            set: (BB, OB) => {
              BB.emissiveTexture = OB
            }
          },
          metadata: OB
        }, pY, qY), (0, fB.h)(BB, null, rO, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectivityTexture" in BB,
            get: BB => BB.reflectivityTexture,
            set: (BB, OB) => {
              BB.reflectivityTexture = OB
            }
          },
          metadata: OB
        }, ZY, NY), (0, fB.h)(BB, null, XO, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallicTexture" in BB,
            get: BB => BB.metallicTexture,
            set: (BB, OB) => {
              BB.metallicTexture = OB
            }
          },
          metadata: OB
        }, RY, WY), (0, fB.h)(BB, null, wO, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallic" in BB,
            get: BB => BB.metallic,
            set: (BB, OB) => {
              BB.metallic = OB
            }
          },
          metadata: OB
        }, AY, VY), (0, fB.h)(BB, null, EO, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "roughness" in BB,
            get: BB => BB.roughness,
            set: (BB, OB) => {
              BB.roughness = OB
            }
          },
          metadata: OB
        }, SY, nY), (0, fB.h)(BB, null, cO, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallicF0Factor" in BB,
            get: BB => BB.metallicF0Factor,
            set: (BB, OB) => {
              BB.metallicF0Factor = OB
            }
          },
          metadata: OB
        }, UY, fY), (0, fB.h)(BB, null, hO, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallicReflectanceColor" in BB,
            get: BB => BB.metallicReflectanceColor,
            set: (BB, OB) => {
              BB.metallicReflectanceColor = OB
            }
          },
          metadata: OB
        }, kY, dY), (0, fB.h)(BB, null, aO, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useOnlyMetallicFromMetallicReflectanceTexture" in BB,
            get: BB => BB.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (BB, OB) => {
              BB.useOnlyMetallicFromMetallicReflectanceTexture = OB
            }
          },
          metadata: OB
        }, KY, uY), (0, fB.h)(BB, null, eO, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallicReflectanceTexture" in BB,
            get: BB => BB.metallicReflectanceTexture,
            set: (BB, OB) => {
              BB.metallicReflectanceTexture = OB
            }
          },
          metadata: OB
        }, mY, IY), (0, fB.h)(BB, null, TO, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectanceTexture" in BB,
            get: BB => BB.reflectanceTexture,
            set: (BB, OB) => {
              BB.reflectanceTexture = OB
            }
          },
          metadata: OB
        }, FY, iY), (0, fB.h)(BB, null, bO, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "microSurfaceTexture" in BB,
            get: BB => BB.microSurfaceTexture,
            set: (BB, OB) => {
              BB.microSurfaceTexture = OB
            }
          },
          metadata: OB
        }, LY, gY), (0, fB.h)(BB, null, CO, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "bumpTexture" in BB,
            get: BB => BB.bumpTexture,
            set: (BB, OB) => {
              BB.bumpTexture = OB
            }
          },
          metadata: OB
        }, rY, XY), (0, fB.h)(BB, null, HO, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "lightmapTexture" in BB,
            get: BB => BB.lightmapTexture,
            set: (BB, OB) => {
              BB.lightmapTexture = OB
            }
          },
          metadata: OB
        }, wY, EY), (0, fB.h)(BB, null, vO, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "ambientColor" in BB,
            get: BB => BB.ambientColor,
            set: (BB, OB) => {
              BB.ambientColor = OB
            }
          },
          metadata: OB
        }, cY, hY), (0, fB.h)(BB, null, sO, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "albedoColor" in BB,
            get: BB => BB.albedoColor,
            set: (BB, OB) => {
              BB.albedoColor = OB
            }
          },
          metadata: OB
        }, aY, eY), (0, fB.h)(BB, null, xO, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseWeight" in BB,
            get: BB => BB.baseWeight,
            set: (BB, OB) => {
              BB.baseWeight = OB
            }
          },
          metadata: OB
        }, TY, bY), (0, fB.h)(BB, null, tO, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseDiffuseRoughness" in BB,
            get: BB => BB.baseDiffuseRoughness,
            set: (BB, OB) => {
              BB.baseDiffuseRoughness = OB
            }
          },
          metadata: OB
        }, CY, HY), (0, fB.h)(BB, null, BG, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectivityColor" in BB,
            get: BB => BB.reflectivityColor,
            set: (BB, OB) => {
              BB.reflectivityColor = OB
            }
          },
          metadata: OB
        }, vY, sY), (0, fB.h)(BB, null, OG, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectionColor" in BB,
            get: BB => BB.reflectionColor,
            set: (BB, OB) => {
              BB.reflectionColor = OB
            }
          },
          metadata: OB
        }, xY, tY), (0, fB.h)(BB, null, GG, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "emissiveColor" in BB,
            get: BB => BB.emissiveColor,
            set: (BB, OB) => {
              BB.emissiveColor = OB
            }
          },
          metadata: OB
        }, BD, OD), (0, fB.h)(BB, null, YG, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: BB => "microSurface" in BB,
            get: BB => BB.microSurface,
            set: (BB, OB) => {
              BB.microSurface = OB
            }
          },
          metadata: OB
        }, GD, YD), (0, fB.h)(BB, null, DG, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: BB => "useLightmapAsShadowmap" in BB,
            get: BB => BB.useLightmapAsShadowmap,
            set: (BB, OB) => {
              BB.useLightmapAsShadowmap = OB
            }
          },
          metadata: OB
        }, DD, QD), (0, fB.h)(BB, null, QG, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAlphaFromAlbedoTexture" in BB,
            get: BB => BB.useAlphaFromAlbedoTexture,
            set: (BB, OB) => {
              BB.useAlphaFromAlbedoTexture = OB
            }
          },
          metadata: OB
        }, oD, jD), (0, fB.h)(BB, null, oG, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: BB => "forceAlphaTest" in BB,
            get: BB => BB.forceAlphaTest,
            set: (BB, OB) => {
              BB.forceAlphaTest = OB
            }
          },
          metadata: OB
        }, yD, JD), (0, fB.h)(BB, null, jG, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: BB => "alphaCutOff" in BB,
            get: BB => BB.alphaCutOff,
            set: (BB, OB) => {
              BB.alphaCutOff = OB
            }
          },
          metadata: OB
        }, MD, PD), (0, fB.h)(BB, null, yG, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSpecularOverAlpha" in BB,
            get: BB => BB.useSpecularOverAlpha,
            set: (BB, OB) => {
              BB.useSpecularOverAlpha = OB
            }
          },
          metadata: OB
        }, zD, lD), (0, fB.h)(BB, null, JG, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "useMicroSurfaceFromReflectivityMapAlpha" in BB,
            get: BB => BB.useMicroSurfaceFromReflectivityMapAlpha,
            set: (BB, OB) => {
              BB.useMicroSurfaceFromReflectivityMapAlpha = OB
            }
          },
          metadata: OB
        }, pD, qD), (0, fB.h)(BB, null, MG, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRoughnessFromMetallicTextureAlpha" in BB,
            get: BB => BB.useRoughnessFromMetallicTextureAlpha,
            set: (BB, OB) => {
              BB.useRoughnessFromMetallicTextureAlpha = OB
            }
          },
          metadata: OB
        }, ZD, ND), (0, fB.h)(BB, null, PG, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRoughnessFromMetallicTextureGreen" in BB,
            get: BB => BB.useRoughnessFromMetallicTextureGreen,
            set: (BB, OB) => {
              BB.useRoughnessFromMetallicTextureGreen = OB
            }
          },
          metadata: OB
        }, RD, WD), (0, fB.h)(BB, null, zG, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: BB => "useMetallnessFromMetallicTextureBlue" in BB,
            get: BB => BB.useMetallnessFromMetallicTextureBlue,
            set: (BB, OB) => {
              BB.useMetallnessFromMetallicTextureBlue = OB
            }
          },
          metadata: OB
        }, AD, VD), (0, fB.h)(BB, null, lG, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAmbientOcclusionFromMetallicTextureRed" in BB,
            get: BB => BB.useAmbientOcclusionFromMetallicTextureRed,
            set: (BB, OB) => {
              BB.useAmbientOcclusionFromMetallicTextureRed = OB
            }
          },
          metadata: OB
        }, SD, nD), (0, fB.h)(BB, null, pG, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAmbientInGrayScale" in BB,
            get: BB => BB.useAmbientInGrayScale,
            set: (BB, OB) => {
              BB.useAmbientInGrayScale = OB
            }
          },
          metadata: OB
        }, UD, fD), (0, fB.h)(BB, null, qG, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAutoMicroSurfaceFromReflectivityMap" in BB,
            get: BB => BB.useAutoMicroSurfaceFromReflectivityMap,
            set: (BB, OB) => {
              BB.useAutoMicroSurfaceFromReflectivityMap = OB
            }
          },
          metadata: OB
        }, kD, dD), (0, fB.h)(BB, null, ZG, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: BB => "usePhysicalLightFalloff" in BB,
            get: BB => BB.usePhysicalLightFalloff
          },
          metadata: OB
        }, null, EG), (0, fB.h)(BB, null, NG, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: BB => "useGLTFLightFalloff" in BB,
            get: BB => BB.useGLTFLightFalloff
          },
          metadata: OB
        }, null, EG), (0, fB.h)(BB, null, RG, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRadianceOverAlpha" in BB,
            get: BB => BB.useRadianceOverAlpha,
            set: (BB, OB) => {
              BB.useRadianceOverAlpha = OB
            }
          },
          metadata: OB
        }, KD, uD), (0, fB.h)(BB, null, WG, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: BB => "useObjectSpaceNormalMap" in BB,
            get: BB => BB.useObjectSpaceNormalMap,
            set: (BB, OB) => {
              BB.useObjectSpaceNormalMap = OB
            }
          },
          metadata: OB
        }, mD, ID), (0, fB.h)(BB, null, AG, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: BB => "useParallax" in BB,
            get: BB => BB.useParallax,
            set: (BB, OB) => {
              BB.useParallax = OB
            }
          },
          metadata: OB
        }, FD, iD), (0, fB.h)(BB, null, VG, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: BB => "useParallaxOcclusion" in BB,
            get: BB => BB.useParallaxOcclusion,
            set: (BB, OB) => {
              BB.useParallaxOcclusion = OB
            }
          },
          metadata: OB
        }, LD, gD), (0, fB.h)(BB, null, SG, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: BB => "parallaxScaleBias" in BB,
            get: BB => BB.parallaxScaleBias,
            set: (BB, OB) => {
              BB.parallaxScaleBias = OB
            }
          },
          metadata: OB
        }, rD, XD), (0, fB.h)(BB, null, nG, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: BB => "disableLighting" in BB,
            get: BB => BB.disableLighting,
            set: (BB, OB) => {
              BB.disableLighting = OB
            }
          },
          metadata: OB
        }, wD, ED), (0, fB.h)(BB, null, UG, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: BB => "forceIrradianceInFragment" in BB,
            get: BB => BB.forceIrradianceInFragment,
            set: (BB, OB) => {
              BB.forceIrradianceInFragment = OB
            }
          },
          metadata: OB
        }, cD, hD), (0, fB.h)(BB, null, fG, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: BB => "maxSimultaneousLights" in BB,
            get: BB => BB.maxSimultaneousLights,
            set: (BB, OB) => {
              BB.maxSimultaneousLights = OB
            }
          },
          metadata: OB
        }, aD, eD), (0, fB.h)(BB, null, kG, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: BB => "invertNormalMapX" in BB,
            get: BB => BB.invertNormalMapX,
            set: (BB, OB) => {
              BB.invertNormalMapX = OB
            }
          },
          metadata: OB
        }, TD, bD), (0, fB.h)(BB, null, dG, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: BB => "invertNormalMapY" in BB,
            get: BB => BB.invertNormalMapY,
            set: (BB, OB) => {
              BB.invertNormalMapY = OB
            }
          },
          metadata: OB
        }, CD, HD), (0, fB.h)(BB, null, KG, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: BB => "twoSidedLighting" in BB,
            get: BB => BB.twoSidedLighting,
            set: (BB, OB) => {
              BB.twoSidedLighting = OB
            }
          },
          metadata: OB
        }, vD, sD), (0, fB.h)(BB, null, uG, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAlphaFresnel" in BB,
            get: BB => BB.useAlphaFresnel,
            set: (BB, OB) => {
              BB.useAlphaFresnel = OB
            }
          },
          metadata: OB
        }, xD, tD), (0, fB.h)(BB, null, mG, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: BB => "useLinearAlphaFresnel" in BB,
            get: BB => BB.useLinearAlphaFresnel,
            set: (BB, OB) => {
              BB.useLinearAlphaFresnel = OB
            }
          },
          metadata: OB
        }, BQ, OQ), (0, fB.h)(BB, null, IG, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "environmentBRDFTexture" in BB,
            get: BB => BB.environmentBRDFTexture,
            set: (BB, OB) => {
              BB.environmentBRDFTexture = OB
            }
          },
          metadata: OB
        }, GQ, YQ), (0, fB.h)(BB, null, FG, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: BB => "forceNormalForward" in BB,
            get: BB => BB.forceNormalForward,
            set: (BB, OB) => {
              BB.forceNormalForward = OB
            }
          },
          metadata: OB
        }, DQ, QQ), (0, fB.h)(BB, null, iG, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: BB => "enableSpecularAntiAliasing" in BB,
            get: BB => BB.enableSpecularAntiAliasing,
            set: (BB, OB) => {
              BB.enableSpecularAntiAliasing = OB
            }
          },
          metadata: OB
        }, oQ, jQ), (0, fB.h)(BB, null, LG, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: BB => "useHorizonOcclusion" in BB,
            get: BB => BB.useHorizonOcclusion,
            set: (BB, OB) => {
              BB.useHorizonOcclusion = OB
            }
          },
          metadata: OB
        }, yQ, JQ), (0, fB.h)(BB, null, gG, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRadianceOcclusion" in BB,
            get: BB => BB.useRadianceOcclusion,
            set: (BB, OB) => {
              BB.useRadianceOcclusion = OB
            }
          },
          metadata: OB
        }, MQ, PQ), (0, fB.h)(BB, null, rG, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: BB => "unlit" in BB,
            get: BB => BB.unlit,
            set: (BB, OB) => {
              BB.unlit = OB
            }
          },
          metadata: OB
        }, zQ, lQ), (0, fB.h)(BB, null, XG, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: BB => "applyDecalMapAfterDetailMap" in BB,
            get: BB => BB.applyDecalMapAfterDetailMap,
            set: (BB, OB) => {
              BB.applyDecalMapAfterDetailMap = OB
            }
          },
          metadata: OB
        }, pQ, qQ), OB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OB
        })
      })(), BB.PBRMATERIAL_OPAQUE = SO.PBRMATERIAL_OPAQUE, BB.PBRMATERIAL_ALPHATEST = SO.PBRMATERIAL_ALPHATEST, BB.PBRMATERIAL_ALPHABLEND = SO.PBRMATERIAL_ALPHABLEND, BB.PBRMATERIAL_ALPHATESTANDBLEND = SO.PBRMATERIAL_ALPHATESTANDBLEND, BB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = SO.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, BB
    })();
    const gD = "KHR_materials_diffuse_transmission";

    function rD(BB, OB) {
      const GB = OB.subSurface;
      let YB = null;
      return GB.translucencyIntensityTexture ? YB = GB.translucencyIntensityTexture : GB.thicknessTexture && GB.useMaskFromThicknessTexture && (YB = GB.thicknessTexture), YB && !GB.useGltfStyleTextures ? (dB.b.Warn(`${BB}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${OB.name}`, 1), null) : YB
    }
    class XD {
      constructor(BB) {
        this.name = gD, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, OB, GB) {
        const YB = [];
        if (GB instanceof LD && this._isExtensionEnabled(GB)) {
          const OB = rD(BB, GB);
          return OB && YB.push(OB), GB.subSurface.translucencyColorTexture && YB.push(GB.subSurface.translucencyColorTexture), YB
        }
        return YB
      }
      _isExtensionEnabled(BB) {
        if (BB.unlit) return !1;
        const OB = BB.subSurface;
        return !!OB.isTranslucencyEnabled && (!BB.unlit && !OB.useAlbedoToTintTranslucency && OB.useGltfStyleTextures && 1 === OB.volumeIndexOfRefraction && 0 === OB.minimumThickness && 0 === OB.maximumThickness)
      }
      postExportMaterialAsync(BB, OB, GB) {
        return new Promise((YB => {
          if (GB instanceof LD && this._isExtensionEnabled(GB)) {
            this._wasUsed = !0;
            const YB = GB.subSurface,
              DB = rD(BB, GB),
              QB = 0 == YB.translucencyIntensity ? void 0 : YB.translucencyIntensity,
              oB = this._exporter._materialExporter.getTextureInfo(DB) ?? void 0,
              jB = !YB.translucencyColor || YB.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : YB.translucencyColor.dDB(),
              yB = this._exporter._materialExporter.getTextureInfo(YB.translucencyColorTexture) ?? void 0,
              JB = {
                diffuseTransmissionFactor: QB,
                diffuseTransmissionTexture: oB,
                diffuseTransmissionColorFactor: jB,
                diffuseTransmissionColorTexture: yB
              };
            (oB || yB) && this._exporter._materialNeedsUVsSet.add(GB), OB.extensions = OB.extensions || {}, OB.extensions[gD] = JB
          }
          YB(OB)
        }))
      }
    }
    let wD = !1;

    function ED() {
      wD || (wD = !0, iY.RegisterExtension(gD, (BB => new XD(BB))))
    }
    ED();
    const cD = "KHR_materials_dispersion";
    class hD {
      constructor() {
        this.name = cD, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(BB) {
        if (BB.unlit) return !1;
        const OB = BB.subSurface;
        return !(!OB.isRefractionEnabled && !OB.isDispersionEnabled)
      }
      postExportMaterialAsync(BB, OB, GB) {
        return new Promise((BB => {
          if (GB instanceof LD && this._isExtensionEnabled(GB)) {
            this._wasUsed = !0;
            const BB = {
              dispersion: GB.subSurface.dispersion
            };
            OB.extensions = OB.extensions || {}, OB.extensions[cD] = BB
          }
          BB(OB)
        }))
      }
    }
    let aD = !1;

    function eD() {
      aD || (aD = !0, iY.RegisterExtension(cD, (() => new hD)))
    }
    eD();
    const TD = "KHR_materials_emissive_strength";
    class bD {
      constructor() {
        this.name = TD, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(BB, OB, GB) {
        return await new Promise((BB => {
          if (!(GB instanceof LD)) return BB(OB);
          const YB = GB.emissiveColor.scale(GB.emissiveIntensity),
            DB = Math.max(...YB.dDB());
          if (DB > 1) {
            OB.emissiveFactor = YB.scale(1 / DB).dDB(), this._wasUsed = !0;
            const BB = {
              emissiveStrength: DB
            };
            OB.extensions || (OB.extensions = {}), OB.extensions[TD] = BB
          } else OB.emissiveFactor = YB.dDB();
          return BB(OB)
        }))
      }
    }
    let CD = !1;

    function HD() {
      CD || (CD = !0, iY.RegisterExtension(TD, (() => new bD)))
    }
    HD();
    const vD = "KHR_materials_ior";
    class sD {
      constructor() {
        this.name = vD, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(BB) {
        return !BB.unlit && (BB instanceof xO ? 1.5 != BB.specularIor : BB instanceof LD && (void 0 != BB.indexOfRefraction && 1.5 != BB.indexOfRefraction))
      }
      postExportMaterialAsync(BB, OB, GB) {
        return new Promise((BB => {
          if (GB instanceof LD && this._isExtensionEnabled(GB)) {
            this._wasUsed = !0;
            const BB = {
              ior: GB.indexOfRefraction
            };
            OB.extensions = OB.extensions || {}, OB.extensions[vD] = BB
          } else if (GB instanceof xO && this._isExtensionEnabled(GB)) {
            this._wasUsed = !0;
            const BB = {
              ior: GB.specularIor
            };
            OB.extensions = OB.extensions || {}, OB.extensions[vD] = BB
          }
          BB(OB)
        }))
      }
    }
    let xD = !1;

    function tD() {
      xD || (xD = !0, iY.RegisterExtension(vD, (() => new sD)))
    }
    tD();
    const BQ = "KHR_materials_iridescence";
    class OQ {
      constructor(BB) {
        this.name = BQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, OB, GB) {
        const YB = [];
        if (GB instanceof SO) {
          if (GB.iridescence.isEnabled) return GB.iridescence.texture && YB.push(GB.iridescence.texture), GB.iridescence.thicknessTexture && GB.iridescence.thicknessTexture !== GB.iridescence.texture && YB.push(GB.iridescence.thicknessTexture), YB
        } else if (GB instanceof xO && GB.thinFilmWeight > 0) return GB.thinFilmWeightTexture && YB.push(GB.thinFilmWeightTexture), GB.thinFilmThicknessTexture && GB.thinFilmThicknessTexture !== GB.thinFilmWeightTexture && YB.push(GB.thinFilmThicknessTexture), YB;
        return []
      }
      postExportMaterialAsync(BB, OB, GB) {
        return new Promise((BB => {
          if (GB instanceof SO) {
            if (!GB.iridescence.isEnabled) return void BB(OB);
            this._wasUsed = !0, OB.extensions = OB.extensions || {};
            const YB = this._exporter._materialExporter.getTextureInfo(GB.iridescence.texture),
              DB = this._exporter._materialExporter.getTextureInfo(GB.iridescence.thicknessTexture),
              QB = {
                iridescenceFactor: GB.iridescence.intensity,
                iridescenceIor: GB.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: GB.iridescence.minimumThickness,
                iridescenceThicknessMaximum: GB.iridescence.maximumThickness,
                iridescenceTexture: YB ?? void 0,
                iridescenceThicknessTexture: DB ?? void 0
              };
            null === QB.iridescenceTexture && null === QB.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(GB), OB.extensions[BQ] = QB
          } else if (GB instanceof xO) {
            if (GB.thinFilmWeight <= 0) return void BB(OB);
            this._wasUsed = !0, OB.extensions = OB.extensions || {};
            const YB = this._exporter._materialExporter.getTextureInfo(GB.thinFilmWeightTexture),
              DB = this._exporter._materialExporter.getTextureInfo(GB.thinFilmThicknessTexture),
              QB = {
                iridescenceFactor: GB.thinFilmWeight,
                iridescenceIor: GB.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * GB.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * GB.thinFilmThickness,
                iridescenceTexture: YB ?? void 0,
                iridescenceThicknessTexture: DB ?? void 0
              };
            null === QB.iridescenceTexture && null === QB.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(GB), OB.extensions[BQ] = QB
          }
          BB(OB)
        }))
      }
    }
    let GQ = !1;

    function YQ() {
      GQ || (GQ = !0, iY.RegisterExtension(BQ, (BB => new OQ(BB))))
    }
    YQ();
    const DQ = "KHR_materials_sheen";
    class QQ {
      constructor(BB) {
        this.name = DQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, OB, GB) {
        return GB instanceof LD && GB.sheen.isEnabled && GB.sheen.texture ? [GB.sheen.texture] : []
      }
      async postExportMaterialAsync(BB, OB, GB) {
        return await new Promise((BB => {
          if (GB instanceof LD) {
            if (!GB.sheen.isEnabled) return void BB(OB);
            this._wasUsed = !0, null == OB.extensions && (OB.extensions = {});
            const YB = {
              sheenColorFactor: GB.sheen.color.dDB(),
              sheenRoughnessFactor: GB.sheen.roughness ?? 0
            };
            null === YB.sheenColorTexture && null === YB.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(GB), GB.sheen.texture && (YB.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(GB.sheen.texture) ?? void 0), GB.sheen.textureRoughness && !GB.sheen.useRoughnessFromMainTexture ? YB.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(GB.sheen.textureRoughness) ?? void 0 : GB.sheen.texture && GB.sheen.useRoughnessFromMainTexture && (YB.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(GB.sheen.texture) ?? void 0), OB.extensions[DQ] = YB
          }
          BB(OB)
        }))
      }
    }
    let oQ = !1;

    function jQ() {
      oQ || (oQ = !0, iY.RegisterExtension(DQ, (BB => new QQ(BB))))
    }
    jQ();
    const yQ = "KHR_materials_fuzz";

    function JQ(BB, OB) {
      const GB = new uB.e(OB.name, OB.JF());
      return GB._texture = BB, GB.coordinatesIndex = OB.coordinatesIndex, OB instanceof uB.e && (GB.uOffset = OB.uOffset, GB.vOffset = OB.vOffset, GB.uScale = OB.uScale, GB.vScale = OB.vScale, GB.wAng = OB.wAng), GB.wrapU = OB.wrapU, GB.wrapV = OB.wrapV, GB
    }
    class MQ {
      constructor(BB) {
        this.name = yQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = BB
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
      async postExportMaterialAdditionalTexturesAsync(BB, OB, GB) {
        if (GB instanceof xO) {
          const BB = [];
          if (GB.fuzzWeight > 0) {
            GB.fuzzWeightTexture && BB.push(GB.fuzzWeightTexture);
            let OB = !1;
            if (GB.fuzzRoughnessTexture && (GB._useFuzzRoughnessFromTextureAlpha ? BB.push(GB.fuzzRoughnessTexture) : OB = !0), GB.fuzzColorTexture && !OB && BB.push(GB.fuzzColorTexture), OB) {
              const OB = function(BB) {
                const OB = BB.fuzzColorTexture,
                  GB = OB && OB.getInternalTexture() ? OB.getInternalTexture().uniqueId : "NoFuzzColor",
                  YB = BB.fuzzRoughnessTexture;
                return `FuzzColor_${GB}_FuzzRoughness_${YB&&YB.getInternalTexture()?YB.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(GB);
              if (!this._cachedInternalTexturesMap[OB]) {
                const BB = await async function(BB) {
                  const OB = BB.JF(),
                    GB = BB.fuzzColorTexture,
                    YB = BB.fuzzRoughnessTexture;
                  return GB || YB ? (await oG("FuzzTexture", JG(GB ? jG(GB, 0) : yG(1), GB ? jG(GB, 1) : yG(1), GB ? jG(GB, 2) : yG(1), YB ? jG(YB, BB._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : yG(1)), OB)).getInternalTexture() : null
                }(GB);
                BB && (this._cachedInternalTexturesMap[OB] = BB)
              }
              this._cachedInternalTexturesMap[OB] && (GB.fuzzColorTexture && (this._mergedTexturesMap[GB.fuzzColorTexture.uniqueId] = JQ(this._cachedInternalTexturesMap[OB], GB.fuzzColorTexture), BB.push(this._mergedTexturesMap[GB.fuzzColorTexture.uniqueId])), GB.fuzzRoughnessTexture && (this._mergedTexturesMap[GB.fuzzRoughnessTexture.uniqueId] = JQ(this._cachedInternalTexturesMap[OB], GB.fuzzRoughnessTexture), BB.push(this._mergedTexturesMap[GB.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return BB
        }
        return []
      }
      async postExportMaterialAsync(BB, OB, GB) {
        return await new Promise((BB => {
          if (GB instanceof xO) {
            if (0 == GB.fuzzWeight) return void BB(OB);
            this._wasUsed = !0, null == OB.extensions && (OB.extensions = {});
            const YB = {
              fuzzFactor: GB.fuzzWeight,
              fuzzColorFactor: GB.fuzzColor.dDB(),
              fuzzRoughnessFactor: GB.fuzzRoughness
            };
            let DB, QB;
            GB.fuzzWeightTexture && (YB.fuzzTexture = this._exporter._materialExporter.getTextureInfo(GB.fuzzWeightTexture) ?? void 0), GB.fuzzColorTexture && (DB = this._mergedTexturesMap[GB.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[GB.fuzzColorTexture.uniqueId] : GB.fuzzColorTexture, YB.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(DB) ?? void 0), GB.fuzzRoughnessTexture && (QB = this._mergedTexturesMap[GB.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[GB.fuzzRoughnessTexture.uniqueId] : GB.fuzzRoughnessTexture, YB.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(QB) ?? void 0), null === YB.fuzzColorTexture && null === YB.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(GB), OB.extensions[yQ] = YB
          }
          BB(OB)
        }))
      }
    }
    let PQ = !1;

    function zQ() {
      PQ || (PQ = !0, iY.RegisterExtension(yQ, (BB => new MQ(BB))))
    }
    zQ();
    const lQ = "KHR_materials_specular";
    class pQ {
      constructor(BB) {
        this.name = lQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, OB, GB) {
        const YB = [];
        return GB instanceof LD && this._isExtensionEnabled(GB) ? (GB.metallicReflectanceTexture && YB.push(GB.metallicReflectanceTexture), GB.reflectanceTexture && YB.push(GB.reflectanceTexture), YB) : YB
      }
      _isExtensionEnabled(BB) {
        return !BB.unlit && (void 0 != BB.metallicF0Factor && 1 != BB.metallicF0Factor || void 0 != BB.metallicReflectanceColor && !BB.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(BB))
      }
      _hasTexturesExtension(BB) {
        return null != BB.metallicReflectanceTexture || null != BB.reflectanceTexture
      }
      postExportMaterialAsync(BB, OB, GB) {
        return new Promise((BB => {
          var YB;
          if (GB instanceof LD && this._isExtensionEnabled(GB)) {
            this._wasUsed = !0, OB.extensions = OB.extensions || {};
            const BB = this._exporter._materialExporter.getTextureInfo(GB.metallicReflectanceTexture) ?? void 0,
              YB = this._exporter._materialExporter.getTextureInfo(GB.reflectanceTexture) ?? void 0,
              DB = {
                specularFactor: 1 == GB.metallicF0Factor ? void 0 : GB.metallicF0Factor,
                specularTexture: BB,
                specularColorFactor: GB.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : GB.metallicReflectanceColor.dDB(),
                specularColorTexture: YB
              };
            this._hasTexturesExtension(GB) && this._exporter._materialNeedsUVsSet.add(GB), OB.extensions[lQ] = DB
          } else if (GB instanceof xO) {
            OB.extensions = OB.extensions || {};
            const DB = this._exporter._materialExporter.getTextureInfo(GB.specularWeightTexture) ?? void 0,
              QB = this._exporter._materialExporter.getTextureInfo(GB.specularColorTexture) ?? void 0,
              oB = 1 == GB.specularWeight ? void 0 : GB.specularWeight,
              jB = GB.specularColor.equalsFloats(1, 1, 1) ? void 0 : GB.specularColor.dDB();
            if (!QB && !DB && void 0 === oB && void 0 === jB) return BB(OB);
            this._wasUsed = !0;
            const yB = {
                specularEdgeColorEnabled: !0
              },
              JB = {
                specularFactor: oB,
                specularTexture: DB,
                specularColorFactor: jB,
                specularColorTexture: QB,
                extensions: {}
              };
            JB.extensions.EXT_materials_specular_edge_color = yB, (YB = this._exporter._glTF).extensionsUsed || (YB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (DB || QB) && this._exporter._materialNeedsUVsSet.add(GB), OB.extensions[lQ] = JB
          }
          BB(OB)
        }))
      }
    }
    let qQ = !1;

    function ZQ() {
      qQ || (qQ = !0, iY.RegisterExtension(lQ, (BB => new pQ(BB))))
    }
    ZQ();
    const NQ = "KHR_materials_transmission";
    class RQ {
      constructor(BB) {
        this.name = NQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, OB, GB) {
        const YB = [];
        if (GB instanceof LD) {
          if (this._isExtensionEnabled(GB)) return GB.subSurface.refractionIntensityTexture && GB.subSurface.useGltfStyleTextures && YB.push(GB.subSurface.refractionIntensityTexture), YB
        } else GB instanceof xO && (GB.transmissionWeight > 0 && GB.transmissionWeightTexture && (YB.push(GB.transmissionWeightTexture), GB.transmissionColorTexture && YB.push(GB.transmissionColorTexture)), GB.subsurfaceWeight > 0 && GB.subsurfaceWeightTexture && YB.push(GB.subsurfaceWeightTexture));
        return YB
      }
      _isExtensionEnabled(BB) {
        if (BB instanceof xO && !BB.unlit) return BB.transmissionWeight > 0 || BB.subsurfaceWeight > 0;
        if (BB instanceof LD && !BB.unlit) {
          const OB = BB.subSurface;
          return OB.isRefractionEnabled && void 0 != OB.refractionIntensity && 0 != OB.refractionIntensity || null != OB.refractionIntensityTexture && OB.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(BB, OB, GB) {
        if (!this._isExtensionEnabled(GB)) return OB;
        if (GB instanceof LD) {
          this._wasUsed = !0;
          const YB = GB.subSurface,
            DB = {
              transmissionFactor: 0 === YB.refractionIntensity ? void 0 : YB.refractionIntensity
            };
          if (YB.refractionIntensityTexture)
            if (YB.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(GB);
              const BB = this._exporter._materialExporter.getTextureInfo(YB.refractionIntensityTexture);
              BB && (DB.transmissionTexture = BB)
            } else dB.b.Warn(`${BB}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          OB.extensions || (OB.extensions = {}), OB.extensions[NQ] = DB
        } else if (GB instanceof xO) {
          this._wasUsed = !0;
          const BB = {
            transmissionFactor: (1 - GB.transmissionWeight) * GB.subsurfaceWeight + GB.transmissionWeight
          };
          if (GB.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(GB);
            const OB = this._exporter._materialExporter.getTextureInfo(GB.transmissionWeightTexture);
            OB && (BB.transmissionTexture = OB)
          } else if (GB.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(GB);
            const OB = this._exporter._materialExporter.getTextureInfo(GB.subsurfaceWeightTexture);
            OB && (BB.transmissionTexture = OB)
          }
          if (0 == GB.transmissionDepth && (!GB.transmissionColor.equals(TB.c.White()) || GB.transmissionColorTexture) && OB.pbrMetallicRoughness && (OB.pbrMetallicRoughness.baseColorFactor || (OB.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), OB.pbrMetallicRoughness.baseColorFactor[0] *= GB.transmissionColor.r, OB.pbrMetallicRoughness.baseColorFactor[1] *= GB.transmissionColor.g, OB.pbrMetallicRoughness.baseColorFactor[2] *= GB.transmissionColor.b, GB.transmissionColorTexture && !OB.pbrMetallicRoughness.baseColorTexture)) {
            const BB = this._exporter._materialExporter.getTextureInfo(GB.transmissionColorTexture);
            BB && (OB.pbrMetallicRoughness.baseColorTexture = BB, this._exporter._materialNeedsUVsSet.add(GB))
          }
          OB.extensions || (OB.extensions = {}), OB.extensions[NQ] = BB
        }
        return OB
      }
    }
    let WQ = !1;

    function AQ() {
      WQ || (WQ = !0, iY.RegisterExtension(NQ, (BB => new RQ(BB))))
    }
    AQ();
    var VQ = GB(41262);
    const SQ = "KHR_materials_unlit";
    class nQ {
      constructor() {
        this.name = SQ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(BB, OB, GB) {
        return new Promise((BB => {
          let YB = !1;
          GB instanceof LD ? YB = GB.unlit : GB instanceof VQ.h && (YB = GB.disableLighting), YB && (this._wasUsed = !0, null == OB.extensions && (OB.extensions = {}), OB.extensions[SQ] = {}), BB(OB)
        }))
      }
    }
    let UQ = !1;

    function fQ() {
      UQ || (UQ = !0, iY.RegisterExtension(SQ, (() => new nQ)))
    }
    fQ();
    const kQ = "KHR_materials_volume";
    class dQ {
      constructor(BB) {
        this.name = kQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, OB, GB) {
        const YB = [];
        if (GB instanceof LD) {
          if (this._isExtensionEnabled(GB)) return GB.subSurface.thicknessTexture && YB.push(GB.subSurface.thicknessTexture), YB
        } else GB instanceof xO && (GB.transmissionWeight > 0 || GB.subsurfaceWeight > 0) && GB.geometryThicknessTexture && YB.push(GB.geometryThicknessTexture);
        return YB
      }
      _isExtensionEnabled(BB) {
        if (BB.unlit) return !1;
        const OB = BB.subSurface;
        return !(!OB.isRefractionEnabled && !OB.isTranslucencyEnabled) && (void 0 != OB.maximumThickness && 0 != OB.maximumThickness || void 0 != OB.tintColorAtDistance && OB.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != OB.tintColor && OB.tintColor != TB.c.White() || this._hasTexturesExtension(BB))
      }
      _hasTexturesExtension(BB) {
        return null != BB.subSurface.thicknessTexture
      }
      postExportMaterialAsync(BB, OB, GB) {
        return new Promise((BB => {
          if (GB instanceof LD && this._isExtensionEnabled(GB)) {
            this._wasUsed = !0;
            const BB = GB.subSurface,
              YB = {
                thicknessFactor: 0 == BB.maximumThickness ? void 0 : BB.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(BB.thicknessTexture) ?? void 0,
                attenuationDistance: BB.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : BB.tintColorAtDistance,
                attenuationColor: BB.tintColor.equalsFloats(1, 1, 1) ? void 0 : BB.tintColor.dDB()
              };
            this._hasTexturesExtension(GB) && this._exporter._materialNeedsUVsSet.add(GB), OB.extensions = OB.extensions || {}, OB.extensions[kQ] = YB
          } else if (GB instanceof xO) {
            const BB = GB.transmissionWeight > 0 && !GB.geometryThinWalled,
              YB = GB.subsurfaceWeight > 0 && !GB.geometryThinWalled;
            if (BB || YB) {
              this._wasUsed = !0;
              const DB = GB.geometryThickness,
                QB = this._exporter._materialExporter.getTextureInfo(GB.geometryThicknessTexture) ?? void 0;
              let oB;
              QB && this._exporter._materialNeedsUVsSet.add(GB);
              const jB = TB.c.White().dDB();
              if (BB && GB.transmissionDepth > 0) {
                const BB = 1 / GB.transmissionDepth;
                let OB = new XB.r(-Math.log(GB.transmissionColor.r) * BB, -Math.log(GB.transmissionColor.g) * BB, -Math.log(GB.transmissionColor.b) * BB);
                const YB = new XB.r(GB.transmissionScatter.r * BB, GB.transmissionScatter.g * BB, GB.transmissionScatter.b * BB),
                  DB = OB.subtract(YB),
                  QB = Math.min(DB.x, DB.y, DB.z);
                QB < 0 && (DB.x = DB.x - QB, DB.y = DB.y - QB, DB.z = DB.z - QB), OB = DB.add(YB);
                oB = 1 / Math.max(OB.x, OB.y, OB.z), jB[0] = Math.exp(-OB.x * oB), jB[1] = Math.exp(-OB.y * oB), jB[2] = Math.exp(-OB.z * oB)
              } else oB = Number.MAX_VALUE, jB[0] = 1, jB[1] = 1, jB[2] = 1;
              let yB = 1;
              const JB = TB.c.White().dDB();
              if (YB) {
                const BB = GB.subsurfaceRadius,
                  OB = GB.subsurfaceRadiusScale,
                  YB = new XB.r(OB.r, OB.g, OB.b).multiplyByFloats(BB, BB, BB),
                  DB = new XB.r(1 / Math.max(YB.x, 1e-6), 1 / Math.max(YB.y, 1e-6), 1 / Math.max(YB.z, 1e-6));
                yB = 1 / Math.max(DB.x, DB.y, DB.z), JB[0] = Math.exp(-DB.x * yB), JB[1] = Math.exp(-DB.y * yB), JB[2] = Math.exp(-DB.z * yB)
              }
              const MB = (1 - GB.transmissionWeight) * GB.subsurfaceWeight,
                PB = MB + GB.transmissionWeight,
                zB = 1 / Math.max(PB, 1e-6),
                lB = GB.transmissionWeight * zB,
                pB = MB * zB,
                qB = jB.map(((BB, OB) => BB * lB + JB[OB] * pB)),
                ZB = {
                  thicknessFactor: DB,
                  thicknessTexture: QB,
                  attenuationDistance: oB * lB + yB * pB,
                  attenuationColor: qB
                };
              OB.extensions = OB.extensions || {}, OB.extensions[kQ] = ZB
            }
          }
          BB(OB)
        }))
      }
    }
    let KQ = !1;

    function uQ() {
      KQ || (KQ = !0, iY.RegisterExtension(kQ, (BB => new dQ(BB))))
    }
    uQ();
    const mQ = "KHR_materials_volume_scatter";
    class IQ {
      constructor(BB) {
        this.name = mQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, OB, GB) {
        const YB = [];
        return GB instanceof xO && (GB.transmissionWeight > 0 && GB.transmissionScatterTexture && YB.push(GB.transmissionScatterTexture), GB.subsurfaceWeight > 0 && GB.subsurfaceColorTexture && YB.push(GB.subsurfaceColorTexture)), YB
      }
      _isExtensionEnabled(BB) {
        if (BB.unlit) return !1;
        const OB = BB.transmissionWeight > 0 && !BB.geometryThinWalled && BB.transmissionDepth > 0 && !BB.transmissionScatter.equals(TB.c.Black()),
          GB = BB.subsurfaceWeight > 0 && !BB.geometryThinWalled;
        return !(!OB && !GB)
      }
      postExportMaterialAsync(BB, OB, GB) {
        return new Promise((BB => {
          if (GB instanceof xO && this._isExtensionEnabled(GB)) {
            this._wasUsed = !0;
            let BB = XB.r.Zero(),
              YB = 0;
            if (GB.transmissionWeight > 0) {
              BB = function(BB) {
                const OB = new XB.r(Math.sqrt(1 - BB.x), Math.sqrt(1 - BB.y), Math.sqrt(1 - BB.z)),
                  GB = new XB.r(1, 1, 1),
                  YB = GB.subtract(OB),
                  DB = GB.subtract(new XB.r(.139, .139, .139).multiplyInPlace(OB)),
                  QB = GB.add(new XB.r(1.17, 1.17, 1.17).multiplyInPlace(OB));
                return YB.multiplyInPlace(DB).divideInPlace(QB)
              }(new XB.r(GB.transmissionScatter.r, GB.transmissionScatter.g, GB.transmissionScatter.b)), YB = GB.transmissionScatterAnisotropy
            }
            const DB = XB.r.Zero();
            let QB = 0;
            GB.subsurfaceWeight > 0 && (DB.set(GB.subsurfaceColor.r, GB.subsurfaceColor.g, GB.subsurfaceColor.b), QB = GB.subsurfaceScatterAnisotropy);
            const oB = (1 - GB.transmissionWeight) * GB.subsurfaceWeight,
              jB = oB + GB.transmissionWeight,
              yB = 1 / Math.max(jB, 1e-6),
              JB = GB.transmissionWeight * yB,
              MB = oB * yB,
              PB = {
                multiscatterColorFactor: BB.multiplyByFloats(JB, JB, JB).addInPlace(DB.multiplyByFloats(MB, MB, MB)).dDB(),
                scatterAnisotropy: YB * JB + QB * MB
              };
            if (GB.subsurfaceWeight > 0 && GB.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(GB);
              const BB = this._exporter._materialExporter.getTextureInfo(GB.subsurfaceColorTexture);
              BB && (PB.multiscatterColorTexture = BB)
            } else if (GB.transmissionWeight > 0 && GB.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(GB);
              const BB = this._exporter._materialExporter.getTextureInfo(GB.transmissionScatterTexture);
              BB && (PB.multiscatterColorTexture = BB)
            }
            OB.extensions = OB.extensions || {}, OB.extensions[mQ] = PB
          }
          BB(OB)
        }))
      }
    }
    let FQ = !1;

    function iQ() {
      FQ || (FQ = !0, iY.RegisterExtension(mQ, (BB => new IQ(BB)), 101))
    }
    iQ();
    const LQ = "KHR_materials_diffuse_roughness";
    class gQ {
      constructor(BB) {
        this.name = LQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, OB, GB) {
        const YB = [];
        if (GB instanceof SO) {
          if (GB._baseDiffuseRoughness) return GB._baseDiffuseRoughnessTexture && YB.push(GB._baseDiffuseRoughnessTexture), YB
        } else if (GB instanceof xO && GB.baseDiffuseRoughness) return GB.baseDiffuseRoughnessTexture && YB.push(GB.baseDiffuseRoughnessTexture), YB;
        return []
      }
      postExportMaterialAsync(BB, OB, GB) {
        return new Promise((BB => {
          let YB = null,
            DB = null;
          if (GB instanceof SO ? (YB = GB._baseDiffuseRoughness, DB = GB._baseDiffuseRoughnessTexture) : GB instanceof xO && (YB = GB.baseDiffuseRoughness, DB = GB.baseDiffuseRoughnessTexture), !YB) return void BB(OB);
          this._wasUsed = !0, OB.extensions = OB.extensions || {};
          const QB = {
            diffuseRoughnessFactor: YB,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(DB) ?? void 0
          };
          null !== QB.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(GB), OB.extensions[LQ] = QB, BB(OB)
        }))
      }
    }
    let rQ = !1;

    function XQ() {
      rQ || (rQ = !0, iY.RegisterExtension(LQ, (BB => new gQ(BB))))
    }
    XQ();
    const wQ = "KHR_materials_openpbr";
    class EQ {
      constructor() {
        this.name = wQ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(BB, OB, GB) {
        return new Promise((BB => {
          GB instanceof xO && (this._wasUsed = !0, OB.extensions = OB.extensions || {}, OB.extensions[wQ] = {}), BB(OB)
        }))
      }
    }
    let cQ = !1;

    function hQ() {
      cQ || (cQ = !0, iY.RegisterExtension(wQ, (() => new EQ)))
    }
    hQ();
    const aQ = "KHR_texture_transform";
    class eQ {
      constructor() {
        this.name = aQ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(BB, OB, GB) {
        if (GB.JF() || UO.j.Warn(`${BB}: "scene" is not defined for Babylon texture ${GB.name}!`), (0 !== GB.uAng || 0 !== GB.vAng) && (UO.j.Warn(`${BB}: Texture ${GB.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== GB.uRotationCenter || 0 !== GB.vRotationCenter)) return;
        const YB = {};
        let DB = !1;
        if (0 === GB.uOffset && 0 === GB.vOffset || (YB.offset = [GB.uOffset, GB.vOffset], DB = !0), 1 === GB.uScale && 1 === GB.vScale || (YB.scale = [GB.uScale, GB.vScale], DB = !0), 0 !== GB.wAng) {
          if (0 !== GB.uRotationCenter || 0 !== GB.vRotationCenter) {
            if (GB.homogeneousRotationInUVTransform && GB.uScale !== GB.vScale) return void UO.j.Warn(`${BB}: Texture ${GB.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${aQ}.`);
            UO.j.Warn(`${BB}: Texture ${GB.name} with non-origin rotation center will be exported using an adjusted offset with ${aQ}.`), YB.offset = function(BB) {
              const {
                uOffset: OB,
                vOffset: GB,
                uRotationCenter: YB,
                vRotationCenter: DB,
                uScale: QB,
                vScale: oB,
                wAng: jB
              } = BB, yB = Math.cos(jB), JB = Math.sin(jB), MB = YB * QB, PB = DB * oB;
              return [OB + (MB * (1 - yB) + PB * JB), GB + (PB * (1 - yB) - MB * JB)]
            }(GB)
          }
          YB.rotation = -GB.wAng, DB = !0
        }
        0 !== GB.coordinatesIndex && (YB.texCoord = GB.coordinatesIndex, DB = !0), DB && (this._wasUsed = !0, OB.extensions || (OB.extensions = {}), OB.extensions[aQ] = YB)
      }
    }
    let TQ = !1;

    function bQ() {
      TQ || (TQ = !0, iY.RegisterExtension(aQ, (() => new eQ)))
    }
    bQ();
    var CQ = GB(41035);
    const HQ = "KHR_texture_basisu";
    class vQ {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(BB) {
        this.name = HQ, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      postExportTexture(BB, OB) {
        const GB = this._exporter._textures[OB.index],
          YB = GB.source;
        if (void 0 === YB) return;
        const DB = this._exporter._images[YB];
        "image/ktx2" === (DB.mimeType || (0, CQ.g)(DB.uri)) && (GB.source = void 0, GB.extensions || (GB.extensions = {}), GB.extensions[HQ] = {
          source: YB
        }, this._wasUsed = !0)
      }
    }
    let sQ = !1;

    function xQ() {
      sQ || (sQ = !0, iY.RegisterExtension(HQ, (BB => new vQ(BB))))
    }
    xQ();
    const tQ = "EXT_texture_webp";
    class Bo {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(BB) {
        this.name = tQ, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      postExportTexture(BB, OB) {
        const GB = this._exporter._textures[OB.index],
          YB = GB.source;
        if (void 0 === YB) return;
        const DB = this._exporter._images[YB];
        "image/webp" === (DB.mimeType || (0, CQ.g)(DB.uri)) && (GB.source = void 0, GB.extensions || (GB.extensions = {}), GB.extensions[tQ] = {
          source: YB
        }, this._wasUsed = !0)
      }
    }
    let Oo = !1;

    function Go() {
      Oo || (Oo = !0, iY.RegisterExtension(tQ, (BB => new Bo(BB))))
    }
    Go();
    const Yo = "EXT_texture_avif";
    class Do {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(BB) {
        this.name = Yo, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      postExportTexture(BB, OB) {
        const GB = this._exporter._textures[OB.index],
          YB = GB.source;
        if (void 0 === YB) return;
        const DB = this._exporter._images[YB];
        "image/avif" === (DB.mimeType || (0, CQ.g)(DB.uri)) && (GB.source = void 0, GB.extensions || (GB.extensions = {}), GB.extensions[Yo] = {
          source: YB
        }, this._wasUsed = !0)
      }
    }
    let Qo = !1;

    function oo() {
      Qo || (Qo = !0, iY.RegisterExtension(Yo, (BB => new Do(BB))))
    }
    oo();
    class jo {
      static CreateSTL(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          DB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          QB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          jB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          yB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const JB = function(BB, OB, GB) {
            const DB = [3 * BB[GB], 3 * BB[GB + 1], 3 * BB[GB + 2]],
              QB = [new YB.Xp(OB[DB[0]], OB[DB[0] + 2], OB[DB[0] + 1]), new YB.Xp(OB[DB[1]], OB[DB[1] + 2], OB[DB[1] + 1]), new YB.Xp(OB[DB[2]], OB[DB[2] + 2], OB[DB[2] + 1])],
              oB = QB[0].subtract(QB[1]),
              jB = QB[2].subtract(QB[1]);
            return {
              v: QB,
              n: YB.Xp.Cross(jB, oB).normalize()
            }
          },
          PB = function(BB, OB, GB, YB) {
            return OB = zB(BB, OB, GB.x, YB), OB = zB(BB, OB, GB.y, YB), zB(BB, OB, GB.z, YB)
          },
          zB = function(BB, OB, GB, YB) {
            return BB.setFloat32(OB, GB, YB), OB + 4
          },
          pB = function(BB) {
            if (jB) {
              let OB = BB;
              BB instanceof lB.b && (OB = BB.AQB);
              const GB = OB.getVerticesData(MB.g.PositionKind, !0, !0);
              if (!GB) return [];
              const DB = YB.Xp.Zero();
              let QB;
              for (QB = 0; QB < GB.length; QB += 3) YB.Xp.TransformCoordinatesFromFloatsToRef(GB[QB], GB[QB + 1], GB[QB + 2], BB.computeWorldMatrix(!0), DB).toArray(GB, QB);
              return GB
            }
            return BB.getVerticesData(MB.g.PositionKind) || []
          };
        jB && (oB = !0);
        let qB = "",
          ZB = 0,
          NB = 0;
        if (DB) {
          for (let GB = 0; GB < BB.length; GB++) {
            const OB = BB[GB].KDB();
            ZB += OB ? OB.length / 3 : 0
          }
          const OB = new ArrayBuffer(84 + 50 * ZB);
          qB = new DataView(OB), NB += 80, qB.setUint32(NB, ZB, QB), NB += 4
        } else yB || (qB = "solid stlmesh\r\n");
        for (let YB = 0; YB < BB.length; YB++) {
          const OB = BB[YB];
          !DB && yB && (qB += "solid " + OB.name + "\r\n"), !oB && OB instanceof JY.b && OB.bakeCurrentTransformIntoVertices();
          const GB = pB(OB),
            jB = OB.KDB() || [];
          for (let BB = 0; BB < jB.length; BB += 3) {
            const OB = JB(jB, GB, BB);
            DB ? (NB = PB(qB, NB, OB.n, QB), NB = PB(qB, NB, OB.v[0], QB), NB = PB(qB, NB, OB.v[1], QB), NB = PB(qB, NB, OB.v[2], QB), NB += 2) : (qB += "\tfacet normal " + OB.n.x + " " + OB.n.y + " " + OB.n.z + "\r\n", qB += "\t\touter loop\r\n", qB += "\t\t\tvertex " + OB.v[0].x + " " + OB.v[0].y + " " + OB.v[0].z + "\r\n", qB += "\t\t\tvertex " + OB.v[1].x + " " + OB.v[1].y + " " + OB.v[1].z + "\r\n", qB += "\t\t\tvertex " + OB.v[2].x + " " + OB.v[2].y + " " + OB.v[2].z + "\r\n", qB += "\t\tendloop\r\n", qB += "\tendfacet\r\n")
          }!DB && yB && (qB += "endsolid " + name + "\r\n")
        }
        if (DB || yB || (qB += "endsolid stlmesh"), OB) {
          const BB = document.createElement("a"),
            OB = new Blob([qB], {
              type: "application/octet-stream"
            });
          BB.href = window.URL.createObjectURL(OB), BB.download = GB + ".stl", BB.click()
        }
        return qB
      }
    }

    function yo(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const DB = [];
      for (let QB = 0; QB < BB.length / GB; QB++) {
        const oB = BB[QB * GB] * (YB ? -1 : 1),
          jB = BB[QB * GB + 1],
          yB = BB[QB * GB + 2];
        DB.push(`(${oB.toPrecision(OB.precision)}, ${jB.toPrecision(OB.precision)}, ${yB.toPrecision(OB.precision)})`)
      }
      return DB.join(", ")
    }

    function Jo(BB, OB) {
      const GB = [];
      for (let YB = 0; YB < BB.length / 2; YB++) {
        const DB = BB[2 * YB],
          QB = BB[2 * YB + 1];
        GB.push(`(${DB.toPrecision(OB.precision)}, ${(1-QB).toPrecision(OB.precision)})`)
      }
      return GB.join(", ")
    }

    function Mo(BB, OB, GB, YB) {
      const DB = BB.getVerticesData(MB.g.PositionKind),
        QB = BB.getVerticesData(MB.g.NormalKind);
      if (DB && QB) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${GB}"\n\t\tint[] faceVertexCounts = [${function(BB){const OB=BB.KDB()?.length?BB.getTotalIndices():BB.getTotalVertices();return Array(OB/3).fill(3).join(", ")}(BB)}]\n\t\tint[] faceVertexIndices = [${function(BB){const OB=BB.KDB(),GB=OB?.length??BB.getTotalVertices(),YB=[];if(null!==OB)for(let DB=0;DB<GB;DB++)YB.push(OB[DB]);else for(let DB=0;DB<GB;DB++)YB.push(DB);return YB.join(", ")}(BB)}]\n\t\tnormal3f[] normals = [${yo(QB,OB,void 0,YB)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${yo(DB,OB,void 0,YB)}]\n        ${function(BB,OB){let GB="";for(let DB=0;DB<4;DB++){const YB=DB>0?DB:"",QB=BB.getVerticesData(MB.g.UVKind+(YB?YB+1:""));QB&&(GB+=`\n\t\ttexCoord2f[] primvars:st${YB} = [${Jo(QB,OB)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const YB=BB.getVerticesData(MB.g.ColorKind);return YB&&(GB+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        yo(YB, OB, YB.length / BB.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),GB}(BB,OB)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function Po(BB, OB, GB, YB) {
      return `\n        def "Geometry"\n        {\n        ${Mo(BB,OB,GB,YB)}\n        }\n        `
    }

    function zo(BB) {
      let OB = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return OB += BB, fflate.strToU8(OB)
    }

    function po(BB) {
      const OB = BB.m;
      return `( ${qo(OB,0)}, ${qo(OB,4)}, ${qo(OB,8)}, ${qo(OB,12)} )`
    }

    function qo(BB, OB) {
      return `(${BB[OB+0]}, ${BB[OB+1]}, ${BB[OB+2]}, ${BB[OB+3]})`
    }

    function Zo(BB, OB) {
      const GB = "Object_" + BB.uniqueId,
        YB = po(OB);
      return `def Xform "${GB}" (\n\tprepend references = @./geometries/Geometry_${BB.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${YB}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${BB.material.uniqueId}>\n}\n\n`
    }

    function No(BB) {
      switch (BB) {
        case nB.b.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case nB.b.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case nB.b.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function Ro(BB) {
      return `(${BB.x}, ${BB.y})`
    }

    function Wo(BB) {
      return `(${BB.r}, ${BB.g}, ${BB.b})`
    }

    function Ao(BB) {
      return "image/jpeg" === BB || "image/png" === BB
    }

    function Vo(BB, OB, GB, DB, QB, oB) {
      const jB = BB.getInternalTexture().uniqueId + "_" + BB.invertY,
        JB = BB.mimeType || (0, yB.b)(BB.getInternalTexture()?.url ?? ""),
        MB = Ao(JB) ? JB : "image/png",
        PB = "image/jpeg" === MB ? "jpg" : "png";
      QB[jB] = {
        texture: BB,
        mimeType: MB,
        ext: PB
      };
      const zB = BB.coordinatesIndex > 0 ? "st" + BB.coordinatesIndex : "st",
        lB = new YB.Vector2(BB.uScale, BB.vScale),
        pB = new YB.Vector2(BB.uOffset, BB.vOffset),
        qB = BB.wAng,
        ZB = Math.sin(qB),
        NB = Math.cos(qB);
      return pB.y = 1 - pB.y - lB.y, pB.x += ZB * lB.x, pB.y += (1 - NB) * lB.y, `\n    def Shader "PrimvarReader_${GB}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${zB}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${GB}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${OB.uniqueId}/PrimvarReader_${GB}.outputs:result>\n        float inputs:rotation = ${(qB*(180/Math.PI)).toFixed(oB.precision)}\n        float2 inputs:scale = ${Ro(lB)}\n        float2 inputs:translation = ${Ro(pB)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${BB.uniqueId}_${GB}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${jB}.${PB}@\n        float2 inputs:st.connect = </Root/Materials/Material_${OB.uniqueId}/Transform2d_${GB}.outputs:result>\n        ${DB?"float4 inputs:scale = "+function(BB){return`(${BB.r}, ${BB.g}, ${BB.b}, 1.0)`}(DB):""}\n        token inputs:sourceColorSpace = "${BB.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${No(BB.wrapU)}"\n        token inputs:wrapT = "${No(BB.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${OB.needAlphaBlending()||OB.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function So(BB, OB, GB) {
      const YB = "\t\t\t",
        DB = [],
        QB = [],
        {
          diffuseMap: oB,
          diffuse: jB,
          alphaCutOff: yB,
          emissiveMap: JB,
          emissive: MB,
          normalMap: PB,
          roughnessMap: zB,
          roughnessChannel: lB,
          roughness: pB,
          metalnessMap: qB,
          metalnessChannel: NB,
          metalness: RB,
          aoMap: WB,
          aoMapChannel: AB,
          aoMapIntensity: VB,
          alphaMap: SB,
          ior: nB,
          clearCoatEnabled: UB,
          clearCoat: fB,
          clearCoatMap: kB,
          clearCoatRoughness: dB,
          clearCoatRoughnessMap: KB
        } = function(BB) {
          const OB = {
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
          return BB instanceof QY.StandardMaterial ? {
            ...OB,
            diffuseMap: BB.diffuseTexture,
            diffuse: BB.diffuseColor,
            alphaCutOff: BB.alphaCutOff,
            emissiveMap: BB.emissiveTexture,
            emissive: BB.emissiveColor,
            roughness: 1,
            alphaMap: BB.opacityTexture
          } : BB instanceof SO ? {
            ...OB,
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
          } : OB
        }(BB);
      return null !== oB ? (DB.push(`${YB}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${oB.uniqueId}_diffuse.outputs:rgb>`), BB.needAlphaBlending() ? DB.push(`${YB}float inputs:opacity.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${oB.uniqueId}_diffuse.outputs:a>`) : BB.needAlphaTesting() && (DB.push(`${YB}float inputs:opacity.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${oB.uniqueId}_diffuse.outputs:a>`), DB.push(`${YB}float inputs:opacityThreshold = ${yB}`)), QB.push(Vo(oB, BB, "diffuse", jB, OB, GB))) : DB.push(`${YB}color3f inputs:diffuseColor = ${Wo(jB||ZB.Color3.White())}`), null !== JB ? (DB.push(`${YB}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${JB.uniqueId}_emissive.outputs:rgb>`), QB.push(Vo(JB, BB, "emissive", MB, OB, GB))) : MB && MB.toLuminance() > 0 && DB.push(`${YB}color3f inputs:emissiveColor = ${Wo(MB)}`), null !== PB && (DB.push(`${YB}normal3f inputs:normal.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${PB.uniqueId}_normal.outputs:rgb>`), QB.push(Vo(PB, BB, "normal", null, OB, GB))), null !== WB && (DB.push(`${YB}float inputs:occlusion.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${WB.uniqueId}_occlusion.outputs:${AB}>`), QB.push(Vo(WB, BB, "occlusion", new ZB.Color3(VB, VB, VB), OB, GB))), null !== zB ? (DB.push(`${YB}float inputs:roughness.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${zB.uniqueId}_roughness.outputs:${lB}>`), QB.push(Vo(zB, BB, "roughness", new ZB.Color3(pB, pB, pB), OB, GB))) : DB.push(`${YB}float inputs:roughness = ${pB}`), null !== qB ? (DB.push(`${YB}float inputs:metallic.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${qB.uniqueId}_metallic.outputs:${NB}>`), QB.push(Vo(qB, BB, "metallic", new ZB.Color3(RB, RB, RB), OB, GB))) : DB.push(`${YB}float inputs:metallic = ${RB}`), null !== SB ? (DB.push(`${YB}float inputs:opacity.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${SB.uniqueId}_opacity.outputs:r>`), DB.push(`${YB}float inputs:opacityThreshold = 0.0001`), QB.push(Vo(SB, BB, "opacity", null, OB, GB))) : DB.push(`${YB}float inputs:opacity = ${BB.alpha}`), UB && (null !== kB ? (DB.push(`${YB}float inputs:clearcoat.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${kB.uniqueId}_clearcoat.outputs:r>`), QB.push(Vo(kB, BB, "clearcoat", new ZB.Color3(fB, fB, fB), OB, GB))) : DB.push(`${YB}float inputs:clearcoat = ${fB}`), null !== KB ? (DB.push(`${YB}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${KB.uniqueId}_clearcoatRoughness.outputs:g>`), QB.push(Vo(KB, BB, "clearcoatRoughness", new ZB.Color3(dB, dB, dB), OB, GB))) : DB.push(`${YB}float inputs:clearcoatRoughness = ${dB}`)), DB.push(`${YB}float inputs:ior = ${nB}`), `\n\tdef Material "Material_${BB.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${DB.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${BB.uniqueId}/PreviewSurface.outputs:surface>\n\n${QB.join("\n")}\n\n\t}\n`
    }

    function no(BB) {
      BB.computeWorldMatrix(!0);
      const OB = BB.getWorldMatrix().clone(),
        GB = BB.JF().useRightHandedSystem;
      let YB = BB.material?._getEffectiveOrientation(BB) ?? BB.sideOrientation,
        oB = !GB,
        jB = BB.parent;
      for (; jB;) {
        if (LG(jB, GB) && null === jB.parent) {
          GB || (OB.multiplyToRef(jB.getWorldMatrix().invert(), OB), YB = YB === QB.b.ClockWiseSideOrientation ? QB.b.CounterClockWiseSideOrientation : QB.b.ClockWiseSideOrientation), oB = !1;
          break
        }
        jB = jB.parent
      }
      return OB.determinant() < 0 && DB.Tools.Warn(`Mesh ${BB.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: OB,
        windingOrder: YB === QB.b.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: oB
      }
    }
    async function Uo(BB, OB, GB) {
      const QB = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...OB
      };
      "undefined" === typeof fflate && await DB.Tools.LoadScriptAsync(QB.fflateUrl);
      const oB = {};
      oB[QB.modelFileName] = null;
      let jB = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      jB += function(BB) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===BB.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${BB.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${BB.planeAnchoringAlignment}"`:""}\n            `
      }(QB);
      const yB = {};
      for (const YB of BB.meshes) {
        if (0 === YB.getTotalVertices()) continue;
        const BB = YB,
          OB = BB.geometry,
          JB = BB.material;
        if (!JB || !OB || GB && !GB(BB)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(JB.getClassName())) {
          const GB = "geometries/Geometry_" + OB.uniqueId + ".usda",
            {
              matrix: YB,
              windingOrder: DB,
              convertToRightHanded: MB
            } = no(BB);
          if (!(GB in oB)) {
            const BB = Po(OB, QB, DB, MB);
            oB[GB] = zo(BB)
          }
          JB.uniqueId in yB || (yB[JB.uniqueId] = JB), jB += Zo(BB, YB)
        } else DB.Tools.Warn("USDZExportAsync does not support this material type: " + JB.getClassName())
      }
      BB.activeCamera && QB.exportCamera && (jB += function(BB, OB) {
        const GB = "Camera_" + BB.uniqueId,
          DB = po(YB.Matrix.RotationY(Math.PI).multiply(BB.getWorldMatrix()));
        if (BB.mode === nB.b.ORTHOGRAPHIC_CAMERA) return `def Camera "${GB}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${DB}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${BB.minZ.toPrecision(OB.precision)}, ${BB.maxZ.toPrecision(OB.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(BB.orthoLeft||1)+Math.abs(BB.orthoRight||1))).toPrecision(OB.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(BB.orthoTop||1)+Math.abs(BB.orthoBottom||1))).toPrecision(OB.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const YB = BB.Lp().getAspectRatio(BB),
            QB = OB.cameraSensorWidth || 35;
          return `def Camera "${GB}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${DB}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${BB.minZ.toPrecision(OB.precision)}, ${BB.maxZ.toPrecision(OB.precision)})\n\t\t\tfloat focalLength = ${(QB/(2*Math.tan(.5*BB.fov))).toPrecision(OB.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(QB*YB).toPrecision(OB.precision)}\n\t\t\tfloat verticalAperture = ${(QB/YB).toPrecision(OB.precision)}            \n\t\t}\n\t\n\t`
        }
      }(BB.activeCamera, QB)), jB += "\n            }\n        }";
      const JB = {};
      jB += function(BB, OB, GB) {
        const YB = [];
        for (const DB in BB) {
          const QB = BB[DB];
          YB.push(So(QB, OB, GB))
        }
        return `\n    def "Materials"\n{\n${YB.join("")}\n}\n\n`
      }(yB, JB, QB), jB += "\n    }", oB[QB.modelFileName] = fflate.strToU8(jB);
      for (const YB in JB) {
        const {
          texture: BB,
          ext: OB,
          mimeType: GB
        } = JB[YB], DB = await NG(BB);
        if (DB && Ao(DB.mimeType) && DB.mimeType === GB) oB[`textures/Texture_${YB}.${OB}`] = new Uint8Array(DB.data);
        else {
          const DB = BB.getSize(),
            QB = await (0, AB.h)(BB),
            jB = await UB.DumpTools.DumpDataAsync(DB.width, DB.height, QB, GB, void 0, !1, !0);
          oB[`textures/Texture_${YB}.${OB}`] = new Uint8Array(jB).slice()
        }
      }
      let MB = 0;
      for (const YB in oB) {
        const BB = oB[YB];
        if (!BB) continue;
        MB += 34 + YB.length;
        const OB = 63 & MB;
        if (4 !== OB) {
          const GB = new Uint8Array(64 - OB);
          oB[YB] = [BB, {
            extra: {
              12345: GB
            }
          }]
        }
        MB = BB.length
      }
      return fflate.zipSync(oB, {
        level: 0
      })
    }
    var fo = GB(42107);
    class ko {
      static Export(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          GB = arguments.length > 2 ? arguments[2] : void 0;
        if (!BB || 0 === BB.bones.length) throw new Error("Invalid or empty skeleton provided");
        let YB = OB;
        OB && 0 !== OB.length || (YB = BB.animations.map((BB => BB.name)));
        let DB = null;
        for (const JB of YB) {
          const OB = BB.getAnimationRange(JB);
          OB && (DB = DB ? new fo.e("animation-range", Math.min(DB.from, OB.from), Math.max(DB.to, OB.to)) : OB)
        }
        if (!DB && (BB.animations.length > 0 && (DB = BB.getAnimationRange(BB.animations[0].name)), !DB)) throw new Error("No animation range found in skeleton");
        const QB = GB || 1 / (BB.animations[0]?.framePerSecond || 30),
          oB = this._BuildBoneHierarchy(BB, YB);
        let jB = 0;
        for (const JB of oB) JB.positionKeys.length > 0 && (jB = Math.max(jB, JB.positionKeys.length)), JB.rotationKeys.length > 0 && (jB = Math.max(jB, JB.rotationKeys.length));
        0 === jB && (jB = Math.floor((DB.to - DB.from) / QB) + 1);
        let yB = "";
        return yB += "HIERARCHY\n", yB += this._ExportHierarchy(oB, 0), yB += "MOTION\n", yB += `Frames: ${jB}\n`, yB += `Frame Time: ${QB.toFixed(6)}\n`, yB += this._ExportMotionData(oB, jB, 0, YB), yB
      }
      static _BuildBoneHierarchy(BB, OB) {
        const GB = new Map,
          YB = [];
        for (const DB of BB.bones) {
          const BB = {
            bone: DB,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          GB.set(DB, BB)
        }
        for (const DB of BB.bones) {
          const BB = GB.get(DB);
          if (DB.animations.length > 0)
            for (const GB of DB.animations) OB.includes(GB.name) && ("position" === GB.targetProperty ? (BB.hasPositionChannels = !0, BB.positionKeys.push(...GB.getKeys())) : "rotationQuaternion" === GB.targetProperty && (BB.hasRotationChannels = !0, BB.rotationKeys.push(...GB.getKeys())));
          if (DB.getParent()) {
            const OB = GB.get(DB.getParent());
            OB && OB.children.push(BB)
          } else YB.push(BB)
        }
        return YB
      }
      static _ExportHierarchy(BB, OB) {
        let GB = "";
        const YB = "    ".repeat(OB);
        for (const DB of BB) {
          const BB = DB.bone;
          if (this._IsEndSite(DB)) {
            GB += `${YB}End Site\n`, GB += `${YB}{\n`;
            const OB = this._GetBoneOffset(BB);
            GB += `${YB}    OFFSET ${OB.x.toFixed(6)} ${OB.y.toFixed(6)} ${OB.z.toFixed(6)}\n`, GB += `${YB}}\n`
          } else {
            GB += `${0===OB?"ROOT":`${YB}JOINT`} ${BB.name}\n`, GB += `${YB}{\n`;
            const QB = this._GetBoneOffset(BB);
            GB += `${YB}    OFFSET ${QB.x.toFixed(6)} ${QB.y.toFixed(6)} ${QB.z.toFixed(6)}\n`;
            const oB = [];
            DB.hasPositionChannels && oB.push("Xposition", "Yposition", "Zposition"), DB.hasRotationChannels && oB.push("Zrotation", "Xrotation", "Yrotation"), oB.length > 0 && (GB += `${YB}    CHANNELS ${oB.length} ${oB.join(" ")}\n`), DB.children.length > 0 && (GB += this._ExportHierarchy(DB.children, OB + 1)), GB += `${YB}}\n`
          }
        }
        return GB
      }
      static _IsEndSite(BB) {
        return 0 === BB.children.length
      }
      static _GetBoneOffset(BB) {
        try {
          if (!BB.getParent()) return BB.getRestMatrix().getTranslation();
          return BB.getLocalMatrix().getTranslation()
        } catch (OB) {
          return YB.Xp.Zero()
        }
      }
      static _ExportMotionData(BB, OB, GB, YB) {
        let DB = "";
        for (let QB = 0; QB < OB; QB++) {
          const OB = [];
          this._CollectFrameValues(BB, QB + GB, OB, YB), DB += OB.map((BB => BB.toFixed(6))).join(" ") + "\n"
        }
        return DB
      }
      static _CollectFrameValues(BB, OB, GB, YB) {
        for (const DB of BB)
          if (!this._IsEndSite(DB)) {
            if (DB.hasPositionChannels) {
              const BB = this._GetPositionAtFrameIndex(DB.positionKeys, OB);
              GB.push(BB.x, BB.y, BB.z)
            }
            if (DB.hasRotationChannels) {
              const BB = this._GetRotationAtFrameIndex(DB.rotationKeys, OB),
                YB = this._QuaternionToEuler(BB);
              GB.push(YB.z, YB.x, YB.y)
            }
            DB.children.length > 0 && this._CollectFrameValues(DB.children, OB, GB, YB)
          }
      }
      static _GetPositionAtFrameIndex(BB, OB) {
        if (0 === BB.length) return YB.Xp.Zero();
        return BB[Math.max(0, Math.min(OB, BB.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(BB, OB) {
        if (0 === BB.length) return YB.Quaternion.Identity();
        return BB[Math.max(0, Math.min(OB, BB.length - 1))].value.clone()
      }
      static _QuaternionToEuler(BB) {
        const OB = new YB.Matrix;
        BB.toRotationMatrix(OB);
        const GB = OB.m;
        let QB, oB, jB;
        const yB = Math.sqrt(GB[0] * GB[0] + GB[1] * GB[1]);
        return yB > FG.b ? (QB = Math.atan2(GB[6], GB[10]), oB = Math.atan2(-GB[2], yB), jB = Math.atan2(GB[1], GB[0])) : (QB = Math.atan2(-GB[9], GB[5]), oB = Math.atan2(-GB[2], yB), jB = 0), new YB.Xp(DB.Tools.ToDegrees(QB), DB.Tools.ToDegrees(oB), DB.Tools.ToDegrees(jB))
      }
    }

    function Ko(BB) {
      return "string" === typeof BB?.name
    }
    const uo = Symbol("__xml:meta$__"),
      mo = Symbol("__xml:name$__");

    function Io(BB, OB) {
      Object.prototype.hasOwnProperty.call(BB.metadata, uo) || (BB.metadata[uo] = []), BB.metadata[uo].push(OB)
    }

    function Fo(BB) {
      return (OB, GB) => {
        OB[mo] = BB
      }
    }

    function io() {
      return (BB, OB) => Io(OB, {
        kind: "none",
        prop: String(OB.name),
        ignore: !0
      })
    }

    function Lo(BB) {
      return (OB, GB) => Io(GB, {
        kind: "attr",
        prop: String(GB.name),
        ...BB
      })
    }

    function go(BB) {
      return (OB, GB) => Io(GB, {
        kind: "elem",
        prop: String(GB.name),
        ...BB
      })
    }

    function ro(BB) {
      const OB = "function" === typeof BB ? BB : BB?.constructor,
        GB = OB?.[Symbol.metadata];
      if (!GB) return [];
      const YB = [];
      let DB = GB;
      for (; DB;) Object.prototype.hasOwnProperty.call(DB, uo) && YB.push(...DB[uo]), DB = Object.getPrototypeOf(DB);
      return YB
    }

    function Xo(BB) {
      const OB = BB?.constructor?.[mo];
      return OB || void 0
    }

    function wo(BB) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(BB)
    }

    function Eo(BB) {
      if (Ko(BB)) return BB;
      const OB = (BB ?? "").trim();
      if (!OB) return {
        name: ""
      };
      const GB = OB.indexOf(":");
      if (-1 === GB) return {
        name: OB
      };
      if (-1 !== OB.indexOf(":", GB + 1)) return {
        name: OB
      };
      const YB = OB.slice(0, GB),
        DB = OB.slice(GB + 1);
      return wo(YB) && wo(DB) ? {
        ns: YB,
        name: DB
      } : {
        name: OB
      }
    }

    function co(BB, OB) {
      return OB ? `${OB}:${BB}` : BB
    }
    const ho = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      ao = Object.freeze({
        number: ho
      });

    function eo(BB) {
      const OB = BB?.eps ?? ho.eps;
      return {
        eps: OB,
        maxDecimalsCap: BB?.maxDecimalsCap ?? ho.maxDecimalsCap,
        trimTrailingZeros: BB?.trimTrailingZeros ?? ho.trimTrailingZeros,
        fixedDecimals: BB?.fixedDecimals,
        allowScientific: BB?.allowScientific ?? ho.allowScientific,
        snapNearZero: BB?.snapNearZero ?? ho.snapNearZero,
        zeroThreshold: BB?.zeroThreshold ?? OB,
        perAttributeEps: BB?.perAttributeEps
      }
    }

    function To(BB) {
      return {
        number: eo(BB?.number)
      }
    }
    class bo {
      constructor(BB) {
        if (this.o = BB, this._o = BB.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(BB) {
        if (!Number.isFinite(BB)) throw new Error(`Cannot format non-finite number: ${BB}`);
        const OB = this._o,
          GB = this._clampInt(OB.maxDecimalsCap ?? 15, 0, 20),
          YB = OB.trimTrailingZeros ?? !0,
          DB = OB.snapNearZero ?? !0,
          QB = OB.zeroThreshold ?? OB.eps,
          oB = 1 / OB.eps;
        let jB, yB = Math.round(BB * oB) / oB;
        if (Object.is(yB, -0) && (yB = 0), DB && Math.abs(yB) <= QB && (yB = 0), jB = void 0 !== OB.fixedDecimals ? this._clampInt(OB.fixedDecimals, 0, GB) : this._clampInt(Math.ceil(-Math.log10(OB.eps)), 0, GB), OB.allowScientific, 0 === jB) return String(Math.trunc(yB));
        let JB = yB.toFixed(jB);
        if (YB && void 0 === OB.fixedDecimals && (JB = JB.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(JB)) throw new Error(`Scientific notation not allowed in XML output: ${JB}`);
        return JB
      }
      _clampInt(BB, OB, GB) {
        return Number.isFinite(BB) ? (BB = Math.trunc(BB), Math.max(OB, Math.min(GB, BB))) : OB
      }
    }

    function Co(BB) {
      return BB instanceof Date
    }

    function Ho(BB) {
      return "string" === typeof BB
    }

    function vo(BB) {
      return "string" === typeof BB || "number" === typeof BB || "boolean" === typeof BB || "bigint" === typeof BB || Co(BB)
    }

    function so(BB) {
      return "number" === typeof BB || "boolean" === typeof BB || "bigint" === typeof BB || Co(BB)
    }
    class xo {
      constructor(BB, OB) {
        this._ns = new Map, this._prefixCount = 0, this._builder = BB, this._format = To(OB), this._nFmt = new bo(this._format)
      }
      withNamespace() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        for (const YB of OB) this._assignNamespace(YB);
        return this
      }
      serialize(BB, OB) {
        if (!(OB = OB ?? Xo(BB))) throw new Error("can not find name for given object");
        const GB = Eo(OB);
        GB.ns && this._assignNamespace(GB.ns, "xmlns"), this._gatherNamespaces(BB, new WeakSet);
        const YB = this._builder.ele(null, GB.name);
        for (const [DB, QB] of Array.from(this._ns.entries())) YB.att("xmlns", QB, DB);
        this._writeObjectContent(YB, BB, (new WeakSet).add(BB)), this._builder.end()
      }
      _writeObject(BB, OB, GB) {
        if (GB.has(OB)) return;
        if (GB.add(OB), Array.isArray(OB)) {
          for (const YB of OB) so(YB) || (Ho(YB) ? this._builder.text(YB) : this._writeObject(BB, YB, GB));
          return
        }
        const YB = Xo(OB);
        if (!YB) return;
        const DB = Eo(YB),
          QB = this._getPrefix(DB),
          oB = co(DB.name, QB);
        BB.ele(null, oB), this._writeObjectContent(BB, OB, GB), this._builder.end()
      }
      _getPrefix(BB) {
        if (BB.ns) {
          const OB = this._ns.get(BB.ns.toLowerCase());
          if ("xmlns" !== OB) return OB
        }
      }
      _writeObjectContent(BB, OB, GB) {
        const YB = ro(OB) ?? [],
          DB = new Map;
        for (const oB of YB) {
          const BB = DB.get(oB.prop) ?? [];
          BB.push(oB), DB.set(oB.prop, BB)
        }
        const QB = Object.keys(OB).sort(((BB, OB) => {
          const GB = (DB.get(BB) ?? []).some((BB => "attr" === BB.kind));
          return GB === (DB.get(OB) ?? []).some((BB => "attr" === BB.kind)) ? 0 : GB ? -1 : 1
        }));
        for (const oB of QB) {
          const YB = OB[oB];
          if (null === YB || void 0 === YB) continue;
          const QB = DB.get(oB);
          if (QB) {
            if (QB.some((BB => !0 === BB.ignore || "none" === BB.kind))) continue;
            for (const OB of QB) {
              const GB = OB.name ?? OB.prop.toLowerCase();
              if (GB) switch (OB.kind) {
                case "attr": {
                  let DB = null;
                  if ("number" === typeof YB && this._nFmt && (DB = this._nFmt.toString(YB)), OB.formatter) {
                    DB = new OB.formatter(this._format).toString(YB)
                  }
                  if (DB = DB ?? YB.toString(), DB) {
                    const OB = Eo(GB),
                      YB = this._getPrefix(OB),
                      QB = co(OB.name, YB);
                    BB.att(null, QB, DB)
                  }
                  break
                }
              }
            }
          } else so(YB) || (Ho(YB) ? this._builder.text(YB) : this._writeObject(BB, YB, GB))
        }
      }
      _gatherNamespaces(BB, OB) {
        if (OB.has(BB)) return;
        if (OB.add(BB), Array.isArray(BB)) {
          for (const GB of BB) vo(GB) || this._gatherNamespaces(GB, OB);
          return
        }
        const GB = Xo(BB);
        GB && this._assignNamespace(GB);
        const YB = ro(BB) ?? [],
          DB = new Map;
        for (const oB of YB) {
          const BB = DB.get(oB.prop) ?? [];
          BB.push(oB), DB.set(oB.prop, BB)
        }
        const QB = [];
        for (const oB of Object.keys(BB)) {
          const OB = BB[oB];
          if (null === OB || void 0 === OB) continue;
          const GB = DB.get(oB);
          if (GB) {
            if (GB.some((BB => !0 === BB.ignore || "none" === BB.kind))) continue;
            for (const BB of GB) BB.name && this._assignNamespace(BB.name)
          }
          QB.push(OB)
        }
        for (const oB of QB) vo(oB) || this._gatherNamespaces(oB, OB)
      }
      _assignNamespace(BB, OB) {
        const GB = Eo(BB);
        if (GB?.ns) {
          const BB = GB.ns.toLowerCase();
          this._ns.get(BB) || this._ns.set(BB, OB ?? this._buildNsPrefix(BB))
        } else if ("xmlns" === OB) {
          const BB = GB.name.toLowerCase();
          this._ns.get(BB) || this._ns.set(BB, OB ?? this._buildNsPrefix(BB))
        }
      }
      _buildNsPrefix(BB) {
        let OB, GB = !1;
        do {
          OB = "ns" + this._prefixCount++;
          for (const BB of Array.from(this._ns.values()))
            if (BB === OB) {
              GB = !0;
              break
            }
        } while (GB);
        return OB
      }
    }
    class to {}
    var Bj;
    to.OpenTag = "<", to.CloseTag = ">", to.Slash = "/", to.Question = "?", to.Quote = '"', to.Equal = "=", to.Space = " ", to.Semicolon = ":", to.Dec = "<?xml", to.Xml = "xml", to.Xmlns = "xmlns", to.Xsi = "xsi", to.VersionKeyword = "version", to.EncodingKeyword = "encoding", to.StandaloneKeyword = "standalone",
      function(BB) {
        BB[BB.Declaration = 0] = "Declaration", BB[BB.Tag = 1] = "Tag", BB[BB.Attribute = 2] = "Attribute", BB[BB.Text = 3] = "Text"
      }(Bj || (Bj = {}));
    class Oj {
      constructor(BB) {
        this._ctxStack = [], this._d = 0, this._w = BB
      }
      dec(BB, OB, GB) {
        return this._w.write(to.Dec), this._writeAttStr(to.VersionKeyword, BB), OB && this._writeAttStr(to.EncodingKeyword, OB), void 0 !== GB && this._writeAttStr(to.StandaloneKeyword, GB ? "yes" : "no"), this._w.write(to.Question, to.CloseTag), this
      }
      att(BB, OB, GB) {
        const YB = this._peekContext();
        if (!YB) throw new Error("att() without open element");
        if (YB.closed) throw new Error(`att() after start tag closed for <${YB.name}>`);
        if (this._isXmlnsDecl(BB, OB)) {
          if (OB === to.Xmlns) YB.defaultNs = GB, this._registerNamespace(YB, "", GB), this._writeAttStr(to.Xmlns, GB);
          else if (BB) this._registerNamespace(YB, OB, GB), this._writeAttStr(`${BB}:${OB}`, GB);
          else {
            const BB = OB.slice(6);
            this._registerNamespace(YB, BB, GB), this._writeAttStr(OB, GB)
          }
          return YB.lastToken = Bj.Attribute, this
        }
        let DB = OB;
        if (BB) {
          DB = `${this._ensurePrefixDeclared(YB,BB)}:${OB}`
        }
        return YB.lastToken = Bj.Attribute, this._writeAttStr(DB, GB), this
      }
      ele(BB, OB) {
        const GB = this._peekContext();
        GB && this._closeOpenTagIfNeeded(GB);
        let YB = OB;
        if (BB) {
          YB = `${this._lookupPrefix(BB)??BB}:${OB}`
        }
        return this._pushContext(YB, ++this._d), this._w.write(to.OpenTag, YB), this
      }
      text(BB) {
        const OB = this._peekContext();
        if (!OB) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(OB), OB.lastToken = Bj.Text, this._w.write(this._escText(BB)), this
      }
      end() {
        const BB = this._popContext();
        return BB && (this._d--, BB.closed ? this._w.write(to.OpenTag, to.Slash, BB.name, to.CloseTag) : this._w.write(to.Slash, to.CloseTag)), this
      }
      _pushContext(BB, OB) {
        const GB = new Oj.Context(BB, OB);
        return this._ctxStack.push(GB), GB
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
      _writeAttStr(BB, OB) {
        this._w.write(to.Space, BB, to.Equal, to.Quote, this._escAttr(OB), to.Quote)
      }
      _lookupPrefix(BB) {
        let OB = this._ctxStack.length - 1;
        if (OB >= 0)
          do {
            const GB = this._ctxStack[OB--],
              YB = GB.ns2prefix?.get(BB);
            if (YB) return YB
          } while (OB >= 0)
      }
      _escText(BB) {
        return BB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(BB) {
        return this._escText(BB).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(BB, OB) {
        if (BB) return BB === to.Xmlns;
        const GB = OB.length,
          YB = to.Xmlns.length;
        return GB >= YB && (OB.startsWith(to.Xmlns) && (OB.length == YB || OB[YB] == to.Semicolon))
      }
      _registerNamespace(BB, OB, GB) {
        if (OB === to.Xml || OB === to.Xmlns) throw new Error(`reserved prefix '${OB}'`);
        const YB = BB.prefix2ns.get(OB);
        if (YB && YB !== GB) throw new Error(`prefix '${OB}' already bound to a different namespace`);
        BB.ns2prefix.get(GB) || BB.ns2prefix.set(GB, OB), BB.prefix2ns.set(OB, GB)
      }
      _allocPrefix(BB) {
        let OB = 1;
        for (;;) {
          const GB = "ns" + OB++;
          if (!BB.prefix2ns.has(GB)) return GB
        }
      }
      _ensurePrefixDeclared(BB, OB) {
        const GB = this._lookupPrefix(OB);
        if (GB) return GB;
        if (BB.closed) throw new Error(`can not declare namespace after start tag closed for <${BB.name}>`);
        const YB = this._allocPrefix(BB);
        return this._writeAttStr(`${to.Xmlns}:${YB}`, OB), this._registerNamespace(BB, YB, OB), YB
      }
      _closeOpenTagIfNeeded(BB) {
        BB.closed || (this._w.write(to.CloseTag), BB.closed = !0)
      }
    }
    Oj.Context = class {
      constructor(BB, OB) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = BB, this.depth = OB
      }
    };
    class Gj {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        if (0 === OB.length) return this;
        const YB = OB.join("");
        return this._chunks.push(YB), this.count += YB.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class Yj {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = BB, this._opts = OB, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        if (0 === OB.length) return this;
        const YB = OB.join("");
        if (0 === YB.length) return this;
        this._pending += YB, this._pendingChars += YB.length;
        const DB = this._opts.flushChars ?? 65536;
        return this._pendingChars >= DB && this.flush(), this
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
    const Dj = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      Qj = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var oj, jj;
    ! function(BB) {
      BB.micron = "micron", BB.millimeter = "millimeter", BB.centimeter = "centimeter", BB.inch = "inch", BB.foot = "foot", BB.meter = "meter"
    }(oj || (oj = {})),
    function(BB) {
      BB.model = "model", BB.solidsupport = "solidsupport", BB.support = "support", BB.surface = "surface", BB.other = "other"
    }(jj || (jj = {}));
    const yj = "http://schemas.openxmlformats.org/package/2006/content-types",
      Jj = "http://schemas.openxmlformats.org/package/2006/relationships";
    var Mj;
    ! function(BB) {
      BB.Relationships = "application/vnd.openxmlformats-package.relationships+xml", BB.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", BB.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", BB.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", BB.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", BB.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", BB.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", BB.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", BB.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", BB.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", BB.Png = "image/png", BB.Jpeg = "image/jpeg", BB.Tiff = "image/tiff", BB.Xml = "application/xml"
    }(Mj || (Mj = {}));
    const Pj = "_rels/",
      zj = "3D/",
      lj = "3dmodel.model",
      pj = ".rels",
      qj = "[Content_Types].xml";
    class Zj {
      static IsKnown(BB) {
        return Zj.Known.has(BB)
      }
      static IsThreeDimModel(BB) {
        return BB === Zj.ThreeDimModel
      }
    }
    Zj.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", Zj.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", Zj.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", Zj.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", Zj.Known = new Set([Zj.ThreeDimModel, Zj.Thumbnail, Zj.PrintTicket, Zj.MustPreserve]);
    let Nj = (() => {
        let BB, OB, GB = [Fo({
            ns: yj,
            name: "Types"
          })],
          YB = [];
        OB = class {
          constructor() {
            this.items = []
          }
        };
        return (0, fB.l)(OB, "ThreeMfContentTypes"), (() => {
          const DB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, fB.h)(null, BB = {
            value: OB
          }, GB, {
            kind: "class",
            name: OB.name,
            metadata: DB
          }, null, YB), OB = BB.value, DB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: DB
          }), (0, fB.j)(OB, YB)
        })(), OB
      })(),
      Rj = (() => {
        let BB, OB, GB, YB, DB = [Fo({
            ns: yj,
            name: "Default"
          })],
          QB = [],
          oB = [],
          jB = [],
          yB = [],
          JB = [];
        OB = class {
          constructor(BB, OB) {
            this.ext = (0, fB.j)(this, oB, void 0), this.ct = ((0, fB.j)(this, jB), (0, fB.j)(this, yB, void 0)), (0, fB.j)(this, JB), this.ext = BB, this.ct = OB
          }
        };
        return (0, fB.l)(OB, "ThreeMfContentType"), (() => {
          const MB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GB = [Lo({
            name: {
              ns: yj,
              name: "Extension"
            }
          })], YB = [Lo({
            name: {
              ns: yj,
              name: "ContentType"
            }
          })], (0, fB.h)(null, null, GB, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: BB => "ext" in BB,
              get: BB => BB.ext,
              set: (BB, OB) => {
                BB.ext = OB
              }
            },
            metadata: MB
          }, oB, jB), (0, fB.h)(null, null, YB, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: BB => "ct" in BB,
              get: BB => BB.ct,
              set: (BB, OB) => {
                BB.ct = OB
              }
            },
            metadata: MB
          }, yB, JB), (0, fB.h)(null, BB = {
            value: OB
          }, DB, {
            kind: "class",
            name: OB.name,
            metadata: MB
          }, null, QB), OB = BB.value, MB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MB
          }), (0, fB.j)(OB, QB)
        })(), OB
      })(),
      Wj = (() => {
        let BB, OB, GB = [Fo({
            ns: Jj,
            name: "Relationships"
          })],
          YB = [];
        OB = class {
          constructor() {
            this.items = []
          }
        };
        return (0, fB.l)(OB, "ThreeMfRelationships"), (() => {
          const DB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, fB.h)(null, BB = {
            value: OB
          }, GB, {
            kind: "class",
            name: OB.name,
            metadata: DB
          }, null, YB), OB = BB.value, DB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: DB
          }), (0, fB.j)(OB, YB)
        })(), OB
      })(),
      Aj = (() => {
        let BB, OB, GB, YB, DB, QB = [Fo({
            ns: Jj,
            name: "Relationship"
          })],
          oB = [],
          jB = [],
          yB = [],
          JB = [],
          MB = [],
          PB = [],
          zB = [];
        OB = class {
          constructor(BB, OB, GB) {
            this.id = (0, fB.j)(this, jB, void 0), this.type = ((0, fB.j)(this, yB), (0, fB.j)(this, JB, void 0)), this.target = ((0, fB.j)(this, MB), (0, fB.j)(this, PB, void 0)), (0, fB.j)(this, zB), this.id = BB, this.type = OB, this.target = GB
          }
        };
        return (0, fB.l)(OB, "ThreeMfRelationship"), (() => {
          const lB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GB = [Lo({
            name: "Id"
          })], YB = [Lo({
            name: "Type"
          })], DB = [Lo({
            name: "Target"
          })], (0, fB.h)(null, null, GB, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: BB => "id" in BB,
              get: BB => BB.id,
              set: (BB, OB) => {
                BB.id = OB
              }
            },
            metadata: lB
          }, jB, yB), (0, fB.h)(null, null, YB, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: BB => "type" in BB,
              get: BB => BB.type,
              set: (BB, OB) => {
                BB.type = OB
              }
            },
            metadata: lB
          }, JB, MB), (0, fB.h)(null, null, DB, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: BB => "target" in BB,
              get: BB => BB.target,
              set: (BB, OB) => {
                BB.target = OB
              }
            },
            metadata: lB
          }, PB, zB), (0, fB.h)(null, BB = {
            value: OB
          }, QB, {
            kind: "class",
            name: OB.name,
            metadata: lB
          }, null, oB), OB = BB.value, lB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lB
          }), (0, fB.j)(OB, oB)
        })(), OB
      })();
    class Vj {
      constructor(BB, OB, GB) {
        this.contentTypes = BB, this.relationships = OB, this.model = GB
      }
    }
    class Sj {
      static Zero() {
        return new Sj([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(BB) {
        this.values = BB
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class nj {
      constructor(BB) {
        this.o = BB, this._f = new bo(BB)
      }
      toString(BB) {
        return BB.values.map((BB => this._f.toString(BB))).join(" ")
      }
    }
    let Uj = (() => {
        let BB, OB, GB, YB, DB, QB = [Fo({
            ns: Dj,
            name: "model"
          })],
          oB = [],
          jB = [],
          yB = [],
          JB = [],
          MB = [],
          PB = [],
          zB = [];
        OB = class {
          constructor() {
            this.unit = (0, fB.j)(this, jB, oj.millimeter), this.requiredextensions = ((0, fB.j)(this, yB), (0, fB.j)(this, JB, void 0)), this.recommendedextensions = ((0, fB.j)(this, MB), (0, fB.j)(this, PB, void 0)), this.metadata = (0, fB.j)(this, zB)
          }
        };
        return (0, fB.l)(OB, "ThreeMfModel"), (() => {
          const lB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GB = [Lo({
            name: "unit"
          })], YB = [Lo({
            name: "requiredextensions"
          })], DB = [Lo({
            name: "recommendedextensions"
          })], (0, fB.h)(null, null, GB, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: BB => "unit" in BB,
              get: BB => BB.unit,
              set: (BB, OB) => {
                BB.unit = OB
              }
            },
            metadata: lB
          }, jB, yB), (0, fB.h)(null, null, YB, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: BB => "requiredextensions" in BB,
              get: BB => BB.requiredextensions,
              set: (BB, OB) => {
                BB.requiredextensions = OB
              }
            },
            metadata: lB
          }, JB, MB), (0, fB.h)(null, null, DB, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: BB => "recommendedextensions" in BB,
              get: BB => BB.recommendedextensions,
              set: (BB, OB) => {
                BB.recommendedextensions = OB
              }
            },
            metadata: lB
          }, PB, zB), (0, fB.h)(null, BB = {
            value: OB
          }, QB, {
            kind: "class",
            name: OB.name,
            metadata: lB
          }, null, oB), OB = BB.value, lB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lB
          })
        })(), OB.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, fB.j)(OB, oB), OB
      })(),
      fj = (() => {
        let BB, OB, GB, YB, DB, QB = [Fo({
            ns: Dj,
            name: "meta"
          })],
          oB = [],
          jB = [],
          yB = [],
          JB = [],
          MB = [],
          PB = [],
          zB = [];
        OB = class {
          constructor(BB, OB, GB, YB) {
            this.name = (0, fB.j)(this, jB, void 0), this.preserve = ((0, fB.j)(this, yB), (0, fB.j)(this, JB, void 0)), this.type = ((0, fB.j)(this, MB), (0, fB.j)(this, PB, void 0)), this.value = (0, fB.j)(this, zB), this.name = BB, this.value = OB, this.preserve = GB, this.type = YB
          }
        };
        return (0, fB.l)(OB, "ThreeMfMeta"), (() => {
          const lB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GB = [Lo({
            name: "name"
          })], YB = [Lo({
            name: "preserve"
          })], DB = [Lo({
            name: "type"
          })], (0, fB.h)(null, null, GB, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name,
              set: (BB, OB) => {
                BB.name = OB
              }
            },
            metadata: lB
          }, jB, yB), (0, fB.h)(null, null, YB, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: BB => "preserve" in BB,
              get: BB => BB.preserve,
              set: (BB, OB) => {
                BB.preserve = OB
              }
            },
            metadata: lB
          }, JB, MB), (0, fB.h)(null, null, DB, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: BB => "type" in BB,
              get: BB => BB.type,
              set: (BB, OB) => {
                BB.type = OB
              }
            },
            metadata: lB
          }, PB, zB), (0, fB.h)(null, BB = {
            value: OB
          }, QB, {
            kind: "class",
            name: OB.name,
            metadata: lB
          }, null, oB), OB = BB.value, lB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lB
          }), (0, fB.j)(OB, oB)
        })(), OB
      })(),
      kj = (() => {
        let BB, OB, GB = [Fo({
            ns: Dj,
            name: "metadatagroup"
          })],
          YB = [];
        OB = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, fB.l)(OB, "ThreeMfMetadataGroup"), (() => {
          const DB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, fB.h)(null, BB = {
            value: OB
          }, GB, {
            kind: "class",
            name: OB.name,
            metadata: DB
          }, null, YB), OB = BB.value, DB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: DB
          }), (0, fB.j)(OB, YB)
        })(), OB
      })(),
      dj = (() => {
        let BB, OB, GB = [Fo({
            ns: Dj,
            name: "resources"
          })],
          YB = [];
        OB = class {
          constructor() {
            this.object = []
          }
        };
        return (0, fB.l)(OB, "ThreeMfResources"), (() => {
          const DB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, fB.h)(null, BB = {
            value: OB
          }, GB, {
            kind: "class",
            name: OB.name,
            metadata: DB
          }, null, YB), OB = BB.value, DB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: DB
          }), (0, fB.j)(OB, YB)
        })(), OB
      })(),
      Kj = (() => {
        let BB, OB, GB, YB, DB, QB, oB, jB, yB, JB = [Fo({
            ns: Dj,
            name: "object"
          })],
          MB = [],
          PB = [],
          zB = [],
          lB = [],
          pB = [],
          qB = [],
          ZB = [],
          NB = [],
          RB = [],
          WB = [],
          AB = [],
          VB = [],
          SB = [],
          nB = [],
          UB = [];
        OB = class {
          constructor(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jj.model;
            this.id = (0, fB.j)(this, PB, void 0), this.type = ((0, fB.j)(this, zB), (0, fB.j)(this, lB, void 0)), this.thumbnail = ((0, fB.j)(this, pB), (0, fB.j)(this, qB, void 0)), this.partnumber = ((0, fB.j)(this, ZB), (0, fB.j)(this, NB, void 0)), this.name = ((0, fB.j)(this, RB), (0, fB.j)(this, WB, void 0)), this.pid = ((0, fB.j)(this, AB), (0, fB.j)(this, VB, void 0)), this.pindex = ((0, fB.j)(this, SB), (0, fB.j)(this, nB, void 0)), this.metadatagroup = (0, fB.j)(this, UB), this.id = BB, this.type = OB
          }
        };
        return (0, fB.l)(OB, "ThreeMfObject"), (() => {
          const kB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GB = [Lo({
            name: "id"
          })], YB = [Lo({
            name: "type"
          })], DB = [Lo({
            name: "thumbnail"
          })], QB = [Lo({
            name: "partnumber"
          })], oB = [Lo({
            name: "name"
          })], jB = [Lo({
            name: "pid"
          })], yB = [Lo({
            name: "pindex"
          })], (0, fB.h)(null, null, GB, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: BB => "id" in BB,
              get: BB => BB.id,
              set: (BB, OB) => {
                BB.id = OB
              }
            },
            metadata: kB
          }, PB, zB), (0, fB.h)(null, null, YB, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: BB => "type" in BB,
              get: BB => BB.type,
              set: (BB, OB) => {
                BB.type = OB
              }
            },
            metadata: kB
          }, lB, pB), (0, fB.h)(null, null, DB, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: BB => "thumbnail" in BB,
              get: BB => BB.thumbnail,
              set: (BB, OB) => {
                BB.thumbnail = OB
              }
            },
            metadata: kB
          }, qB, ZB), (0, fB.h)(null, null, QB, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: BB => "partnumber" in BB,
              get: BB => BB.partnumber,
              set: (BB, OB) => {
                BB.partnumber = OB
              }
            },
            metadata: kB
          }, NB, RB), (0, fB.h)(null, null, oB, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name,
              set: (BB, OB) => {
                BB.name = OB
              }
            },
            metadata: kB
          }, WB, AB), (0, fB.h)(null, null, jB, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: BB => "pid" in BB,
              get: BB => BB.pid,
              set: (BB, OB) => {
                BB.pid = OB
              }
            },
            metadata: kB
          }, VB, SB), (0, fB.h)(null, null, yB, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: BB => "pindex" in BB,
              get: BB => BB.pindex,
              set: (BB, OB) => {
                BB.pindex = OB
              }
            },
            metadata: kB
          }, nB, UB), (0, fB.h)(null, BB = {
            value: OB
          }, JB, {
            kind: "class",
            name: OB.name,
            metadata: kB
          }, null, MB), OB = BB.value, kB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kB
          }), (0, fB.j)(OB, MB)
        })(), OB
      })(),
      uj = (() => {
        let BB, OB, GB = [Fo({
            ns: Dj,
            name: "mesh"
          })],
          YB = [];
        OB = class {
          constructor(BB, OB) {
            this.vertices = BB ?? new mj, this.triangles = OB ?? new Fj
          }
        };
        return (0, fB.l)(OB, "ThreeMfMesh"), (() => {
          const DB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, fB.h)(null, BB = {
            value: OB
          }, GB, {
            kind: "class",
            name: OB.name,
            metadata: DB
          }, null, YB), OB = BB.value, DB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: DB
          }), (0, fB.j)(OB, YB)
        })(), OB
      })(),
      mj = (() => {
        let BB, OB, GB = [Fo({
            ns: Dj,
            name: "vertices"
          })],
          YB = [];
        OB = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, fB.l)(OB, "ThreeMfVertices"), (() => {
          const DB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, fB.h)(null, BB = {
            value: OB
          }, GB, {
            kind: "class",
            name: OB.name,
            metadata: DB
          }, null, YB), OB = BB.value, DB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: DB
          }), (0, fB.j)(OB, YB)
        })(), OB
      })(),
      Ij = (() => {
        let BB, OB, GB, YB, DB, QB = [Fo({
            ns: Dj,
            name: "vertex"
          })],
          oB = [],
          jB = [],
          yB = [],
          JB = [],
          MB = [],
          PB = [],
          zB = [];
        OB = class {
          constructor() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, fB.j)(this, jB, void 0), this.y = ((0, fB.j)(this, yB), (0, fB.j)(this, JB, void 0)), this.z = ((0, fB.j)(this, MB), (0, fB.j)(this, PB, void 0)), (0, fB.j)(this, zB), this.x = BB, this.y = OB, this.z = GB
          }
        };
        return (0, fB.l)(OB, "ThreeMfVertex"), (() => {
          const lB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GB = [Lo({
            name: "x"
          })], YB = [Lo({
            name: "y"
          })], DB = [Lo({
            name: "z"
          })], (0, fB.h)(null, null, GB, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: BB => "x" in BB,
              get: BB => BB.x,
              set: (BB, OB) => {
                BB.x = OB
              }
            },
            metadata: lB
          }, jB, yB), (0, fB.h)(null, null, YB, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: BB => "y" in BB,
              get: BB => BB.y,
              set: (BB, OB) => {
                BB.y = OB
              }
            },
            metadata: lB
          }, JB, MB), (0, fB.h)(null, null, DB, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: BB => "z" in BB,
              get: BB => BB.z,
              set: (BB, OB) => {
                BB.z = OB
              }
            },
            metadata: lB
          }, PB, zB), (0, fB.h)(null, BB = {
            value: OB
          }, QB, {
            kind: "class",
            name: OB.name,
            metadata: lB
          }, null, oB), OB = BB.value, lB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lB
          }), (0, fB.j)(OB, oB)
        })(), OB
      })(),
      Fj = (() => {
        let BB, OB, GB = [Fo({
            ns: Dj,
            name: "triangles"
          })],
          YB = [];
        OB = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, fB.l)(OB, "ThreeMfTriangles"), (() => {
          const DB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, fB.h)(null, BB = {
            value: OB
          }, GB, {
            kind: "class",
            name: OB.name,
            metadata: DB
          }, null, YB), OB = BB.value, DB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: DB
          }), (0, fB.j)(OB, YB)
        })(), OB
      })(),
      ij = (() => {
        let BB, OB, GB, YB, DB, QB, oB, jB, yB, JB = [Fo({
            ns: Dj,
            name: "triangle"
          })],
          MB = [],
          PB = [],
          zB = [],
          lB = [],
          pB = [],
          qB = [],
          ZB = [],
          NB = [],
          RB = [],
          WB = [],
          AB = [],
          VB = [],
          SB = [],
          nB = [],
          UB = [];
        OB = class {
          constructor(BB, OB, GB) {
            this.v1 = (0, fB.j)(this, PB, void 0), this.v2 = ((0, fB.j)(this, zB), (0, fB.j)(this, lB, void 0)), this.v3 = ((0, fB.j)(this, pB), (0, fB.j)(this, qB, void 0)), this.p1 = ((0, fB.j)(this, ZB), (0, fB.j)(this, NB, void 0)), this.p2 = ((0, fB.j)(this, RB), (0, fB.j)(this, WB, void 0)), this.p3 = ((0, fB.j)(this, AB), (0, fB.j)(this, VB, void 0)), this.pid = ((0, fB.j)(this, SB), (0, fB.j)(this, nB, void 0)), (0, fB.j)(this, UB), this.v1 = BB, this.v2 = OB, this.v3 = GB
          }
        };
        return (0, fB.l)(OB, "ThreeMfTriangle"), (() => {
          const kB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GB = [Lo({
            name: "v1"
          })], YB = [Lo({
            name: "v2"
          })], DB = [Lo({
            name: "v3"
          })], QB = [Lo({
            name: "p1"
          })], oB = [Lo({
            name: "p2"
          })], jB = [Lo({
            name: "p3"
          })], yB = [Lo({
            name: "pid"
          })], (0, fB.h)(null, null, GB, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: BB => "v1" in BB,
              get: BB => BB.v1,
              set: (BB, OB) => {
                BB.v1 = OB
              }
            },
            metadata: kB
          }, PB, zB), (0, fB.h)(null, null, YB, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: BB => "v2" in BB,
              get: BB => BB.v2,
              set: (BB, OB) => {
                BB.v2 = OB
              }
            },
            metadata: kB
          }, lB, pB), (0, fB.h)(null, null, DB, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: BB => "v3" in BB,
              get: BB => BB.v3,
              set: (BB, OB) => {
                BB.v3 = OB
              }
            },
            metadata: kB
          }, qB, ZB), (0, fB.h)(null, null, QB, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: BB => "p1" in BB,
              get: BB => BB.p1,
              set: (BB, OB) => {
                BB.p1 = OB
              }
            },
            metadata: kB
          }, NB, RB), (0, fB.h)(null, null, oB, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: BB => "p2" in BB,
              get: BB => BB.p2,
              set: (BB, OB) => {
                BB.p2 = OB
              }
            },
            metadata: kB
          }, WB, AB), (0, fB.h)(null, null, jB, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: BB => "p3" in BB,
              get: BB => BB.p3,
              set: (BB, OB) => {
                BB.p3 = OB
              }
            },
            metadata: kB
          }, VB, SB), (0, fB.h)(null, null, yB, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: BB => "pid" in BB,
              get: BB => BB.pid,
              set: (BB, OB) => {
                BB.pid = OB
              }
            },
            metadata: kB
          }, nB, UB), (0, fB.h)(null, BB = {
            value: OB
          }, JB, {
            kind: "class",
            name: OB.name,
            metadata: kB
          }, null, MB), OB = BB.value, kB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kB
          }), (0, fB.j)(OB, MB)
        })(), OB
      })(),
      Lj = (() => {
        let BB, OB, GB = [Fo({
            ns: Dj,
            name: "components"
          })],
          YB = [];
        OB = class {
          constructor() {
            this.component = []
          }
        };
        return (0, fB.l)(OB, "ThreeMfComponents"), (() => {
          const DB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, fB.h)(null, BB = {
            value: OB
          }, GB, {
            kind: "class",
            name: OB.name,
            metadata: DB
          }, null, YB), OB = BB.value, DB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: DB
          }), (0, fB.j)(OB, YB)
        })(), OB
      })(),
      gj = (() => {
        let BB, OB, GB, YB, DB = [Fo({
            ns: Dj,
            name: "component"
          })],
          QB = [],
          oB = [],
          jB = [],
          yB = [],
          JB = [];
        OB = class {
          constructor(BB, OB) {
            this.objectid = (0, fB.j)(this, oB, void 0), this.transform = ((0, fB.j)(this, jB), (0, fB.j)(this, yB, void 0)), (0, fB.j)(this, JB), this.objectid = BB, this.transform = OB
          }
        };
        return (0, fB.l)(OB, "ThreeMfComponent"), (() => {
          const MB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GB = [Lo({
            name: "objectid"
          })], YB = [Lo({
            name: "transform",
            formatter: nj
          })], (0, fB.h)(null, null, GB, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: BB => "objectid" in BB,
              get: BB => BB.objectid,
              set: (BB, OB) => {
                BB.objectid = OB
              }
            },
            metadata: MB
          }, oB, jB), (0, fB.h)(null, null, YB, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: BB => "transform" in BB,
              get: BB => BB.transform,
              set: (BB, OB) => {
                BB.transform = OB
              }
            },
            metadata: MB
          }, yB, JB), (0, fB.h)(null, BB = {
            value: OB
          }, DB, {
            kind: "class",
            name: OB.name,
            metadata: MB
          }, null, QB), OB = BB.value, MB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MB
          }), (0, fB.j)(OB, QB)
        })(), OB
      })(),
      rj = (() => {
        let BB, OB, GB, YB = [Fo({
            ns: Dj,
            name: "basematerials"
          })],
          DB = [],
          QB = [],
          oB = [];
        OB = class {
          constructor(BB) {
            this.id = (0, fB.j)(this, QB, void 0), this.base = ((0, fB.j)(this, oB), []), this.id = BB
          }
        };
        return (0, fB.l)(OB, "ThreeMfBaseMaterials"), (() => {
          const jB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GB = [Lo({
            name: "id"
          })], (0, fB.h)(null, null, GB, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: BB => "id" in BB,
              get: BB => BB.id,
              set: (BB, OB) => {
                BB.id = OB
              }
            },
            metadata: jB
          }, QB, oB), (0, fB.h)(null, BB = {
            value: OB
          }, YB, {
            kind: "class",
            name: OB.name,
            metadata: jB
          }, null, DB), OB = BB.value, jB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jB
          }), (0, fB.j)(OB, DB)
        })(), OB
      })(),
      Xj = (() => {
        let BB, OB, GB, YB, DB = [Fo({
            ns: Dj,
            name: "base"
          })],
          QB = [],
          oB = [],
          jB = [],
          yB = [],
          JB = [];
        OB = class {
          constructor(BB, OB) {
            this.name = (0, fB.j)(this, oB, void 0), this.displaycolor = ((0, fB.j)(this, jB), (0, fB.j)(this, yB, void 0)), (0, fB.j)(this, JB), this.name = BB, this.displaycolor = OB
          }
        };
        return (0, fB.l)(OB, "ThreeMfBase"), (() => {
          const MB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GB = [Lo({
            name: "name"
          })], YB = [Lo({
            name: "displaycolor"
          })], (0, fB.h)(null, null, GB, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name,
              set: (BB, OB) => {
                BB.name = OB
              }
            },
            metadata: MB
          }, oB, jB), (0, fB.h)(null, null, YB, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: BB => "displaycolor" in BB,
              get: BB => BB.displaycolor,
              set: (BB, OB) => {
                BB.displaycolor = OB
              }
            },
            metadata: MB
          }, yB, JB), (0, fB.h)(null, BB = {
            value: OB
          }, DB, {
            kind: "class",
            name: OB.name,
            metadata: MB
          }, null, QB), OB = BB.value, MB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MB
          }), (0, fB.j)(OB, QB)
        })(), OB
      })(),
      wj = (() => {
        let BB, OB, GB = [Fo({
            ns: Dj,
            name: "build"
          })],
          YB = [];
        OB = class {
          constructor() {
            this.item = []
          }
        };
        return (0, fB.l)(OB, "ThreeMfBuild"), (() => {
          const DB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, fB.h)(null, BB = {
            value: OB
          }, GB, {
            kind: "class",
            name: OB.name,
            metadata: DB
          }, null, YB), OB = BB.value, DB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: DB
          }), (0, fB.j)(OB, YB)
        })(), OB
      })(),
      Ej = (() => {
        let BB, OB, GB, YB, DB, QB = [Fo({
            ns: Dj,
            name: "item"
          })],
          oB = [],
          jB = [],
          yB = [],
          JB = [],
          MB = [],
          PB = [],
          zB = [];
        OB = class {
          constructor(BB, OB, GB) {
            this.objectid = (0, fB.j)(this, jB, void 0), this.transform = ((0, fB.j)(this, yB), (0, fB.j)(this, JB, void 0)), this.partnumber = ((0, fB.j)(this, MB), (0, fB.j)(this, PB, void 0)), this.metadatagroup = (0, fB.j)(this, zB), this.objectid = BB, this.transform = OB, this.partnumber = GB
          }
        };
        return (0, fB.l)(OB, "ThreeMfItem"), (() => {
          const lB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GB = [Lo({
            name: "objectid"
          })], YB = [Lo({
            name: "transform",
            formatter: nj
          })], DB = [Lo({
            name: "partnumber"
          })], (0, fB.h)(null, null, GB, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: BB => "objectid" in BB,
              get: BB => BB.objectid,
              set: (BB, OB) => {
                BB.objectid = OB
              }
            },
            metadata: lB
          }, jB, yB), (0, fB.h)(null, null, YB, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: BB => "transform" in BB,
              get: BB => BB.transform,
              set: (BB, OB) => {
                BB.transform = OB
              }
            },
            metadata: lB
          }, JB, MB), (0, fB.h)(null, null, DB, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: BB => "partnumber" in BB,
              get: BB => BB.partnumber,
              set: (BB, OB) => {
                BB.partnumber = OB
              }
            },
            metadata: lB
          }, PB, zB), (0, fB.h)(null, BB = {
            value: OB
          }, QB, {
            kind: "class",
            name: OB.name,
            metadata: lB
          }, null, oB), OB = BB.value, lB && Object.defineProperty(OB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lB
          }), (0, fB.j)(OB, oB)
        })(), OB
      })();
    class cj {
      constructor(BB, OB) {
        this._object = new Kj(BB, OB)
      }
      withName(BB) {
        return this._object.name = BB, this
      }
      withThumbnail(BB) {
        return this._object.thumbnail = BB, this
      }
      withProperty(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = BB, this._object.id = OB, this
      }
      build() {
        return this._object
      }
      reset(BB, OB) {
        this._object = new Kj(BB, OB)
      }
    }
    class hj extends cj {
      constructor(BB) {
        super(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jj.model), this._object.content = new Lj
      }
      withComponent(BB, OB) {
        return this._object.content.component.push(new gj(BB, OB)), this
      }
    }
    class aj extends cj {
      constructor(BB) {
        super(BB, jj.model)
      }
      withPostProcessHandlers(BB, OB) {
        return this._vh = BB, this._th = OB, this
      }
      withData(BB) {
        return this._object.content = this._buildMesh(BB), this
      }
      withMaterial(BB, OB) {
        return this._object.pid = BB, this._object.pindex = OB, this
      }
      _buildMesh(BB) {
        const OB = this._buildVertices(BB.positions),
          GB = this._buildTriangle(BB.indices);
        return new uj(OB, GB)
      }
      _buildVertices(BB) {
        const OB = new mj;
        if (BB)
          for (let GB = 0; GB < BB.length;) {
            const YB = BB[GB++],
              DB = BB[GB++],
              QB = BB[GB++];
            let oB = new Ij(YB, DB, QB);
            this._vh && (oB = this._vh(oB)), OB.vertex.push(oB)
          }
        return OB
      }
      _buildTriangle(BB) {
        const OB = new Fj;
        if (BB)
          for (let GB = 0; GB < BB.length;) {
            const YB = BB[GB++],
              DB = BB[GB++],
              QB = BB[GB++];
            let oB = new ij(YB, DB, QB);
            this._th && (oB = this._th(oB)), OB.triangle.push(oB)
          }
        return OB
      }
    }
    class ej {
      constructor(BB) {
        this._m = new rj(BB)
      }
      withColor(BB, OB) {
        this._m.base = this._m.base ?? [];
        let GB = this._m.base.find((OB => OB.name.toLowerCase() === BB.toLowerCase()));
        return GB ? (GB.displaycolor = this._rgbaToHex(OB), this) : (GB = new Xj(BB, this._rgbaToHex(OB)), this._m.base.push(GB), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(BB) {
        const OB = BB => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(BB, 1 / 2.2)))),
          GB = OB(BB.r).toString(16).padStart(2, "0").toUpperCase(),
          YB = OB(BB.g).toString(16).padStart(2, "0").toUpperCase(),
          DB = OB(BB.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof BB.a) {
          return `#${GB}${YB}${DB}${Math.round(Math.min(255,Math.max(0,255*BB.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${GB}${YB}${DB}`
      }
    }
    class Tj {
      constructor() {
        this._model = new Uj, this._objects = new Map
      }
      withMetaData(BB, OB, GB, YB) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new fj(BB, OB, GB, YB)), this
      }
      withMaterial(BB) {
        return BB instanceof ej && (BB = BB.build()), BB && (this._model.resources = this._model.resources ?? new dj, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(BB)), this
      }
      withMesh(BB) {
        return BB instanceof aj && (BB = BB.build()), this._model.resources = this._model.resources ?? new dj, this._model.resources.object.push(BB), this
      }
      withComponents(BB) {
        return BB instanceof hj && (BB = BB.build()), this._model.resources = this._model.resources ?? new dj, this._model.resources.object.push(BB), this
      }
      withBuild(BB, OB, GB) {
        return this._model.build = this._model.build ?? new wj, this._model.build.item?.push(new Ej(BB, OB, GB)), this
      }
      withUnit(BB) {
        return this._model.unit = BB, this
      }
      reset() {
        return this._model = new Uj, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    Tj.KnownMetaSet = new Set(Uj.KnownMeta.map((BB => BB.toLowerCase())));
    class bj {
      withContentType(BB) {
        this._cts || (this._cts = new Nj);
        const OB = this._cts.items;
        return OB.some((OB => OB.ext === BB.ext && OB.ct === BB.ct)) || OB.push(BB), this
      }
      withRelationship(BB) {
        this._rs || (this._rs = new Wj);
        const OB = this._rs.items;
        return OB.some((OB => OB.id === BB.id)) || OB.push(BB), this.withContentType(new Rj("rels", Mj.Relationships)), this
      }
      withModel(BB) {
        return BB instanceof Tj && (BB = BB.build()), this._m = BB, this.withContentType(new Rj("model", Mj.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const BB = `${zj}${lj}`;
        if (!this._rs) {
          const OB = `/${BB}`;
          this.withRelationship(new Aj("rel0", Zj.ThreeDimModel, OB))
        }
        return new Vj(this._cts, this._rs, this._m)
      }
    }
    class Cj {
      constructor(BB) {
        this._o = BB
      }
      get options() {
        return this._o
      }
      async serializeAsync(BB) {
        const OB = await this.ensureZipLibReadyAsync();
        if (!OB) return;
        const GB = OB.Zip,
          YB = OB.ZipDeflate;
        if (!GB || !YB) throw new Error("fflate Zip / ZipDeflate not available");
        const DB = function(BB, OB, GB) {
          const DB = new YB(OB, {
            level: 6
          });
          BB.add(DB);
          const QB = function(BB) {
              return {
                push: (OB, GB) => BB.push(OB, GB)
              }
            }(DB),
            oB = new Yj(QB),
            jB = new Oj(oB).dec("1.0", "UTF-8");
          new xo(jB).serialize(GB), oB.finish()
        };
        for (var QB = arguments.length, oB = new Array(QB > 1 ? QB - 1 : 0), jB = 1; jB < QB; jB++) oB[jB - 1] = arguments[jB];
        const yB = this.toDocument(...oB);
        if (!yB) return;
        const JB = new GB(BB);
        DB(JB, qj, yB.contentTypes), DB(JB, `${Pj}${pj}`, yB.relationships), DB(JB, `${zj}${lj}`, yB.model), JB.end()
      }
      toDocument() {
        const BB = (new Tj).withUnit(this._o?.unit ?? oj.millimeter);
        if (this.options.metadata)
          for (const DB in this.options.metadata) BB.withMetaData(DB, this.options.metadata[DB]);
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        return (new bj).withModel(this.toModel(BB, ...GB)).build()
      }
    }
    class Hj {
      static async SerializeToMemoryAsync(BB) {
        const OB = new Array;
        let GB = 0;
        for (var YB = arguments.length, DB = new Array(YB > 1 ? YB - 1 : 0), QB = 1; QB < YB; QB++) DB[QB - 1] = arguments[QB];
        if (await BB.serializeAsync((function(BB, YB, DB) {
            OB.push(YB), GB += YB.length
          }), ...DB), !GB) return;
        const oB = new Uint8Array(GB);
        let jB = 0;
        for (const yB of OB) oB.set(yB, jB), jB += yB.length;
        return oB
      }
    }
    class vj {}
    vj.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class sj {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = BB, this._to = OB, this._step = GB, this._i = BB
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
    class xj extends Cj {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...xj.DefaultOptions,
          ...BB
        })
      }
      toModel(BB) {
        for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
        GB = GB.filter((BB => BB instanceof JY.b || BB instanceof lB.b));
        const DB = new sj,
          QB = BB,
          oB = new Map,
          jB = this.options.exportInstances ? [] : null;
        for (let yB = 0; yB < GB.length; yB++) {
          const BB = GB[yB];
          if (BB instanceof lB.b) {
            jB?.push(BB);
            continue
          }
          const OB = BB.name || `mesh${yB}`,
            YB = BB.getWorldMatrix(),
            JB = this._handleBabylonTo3mfMatrixTransformToRef(YB, Sj.Zero()),
            MB = BB.iW;
          if (void 0 === MB) continue;
          const PB = 1 == MB.length;
          for (let GB = 0; GB < MB.length; GB++) {
            const YB = MB[GB],
              jB = this._extractSubMesh(BB, YB);
            if (jB) {
              const BB = PB ? `${OB}` : `${OB}_${GB}`,
                yB = new aj(DB.next()).withData(jB).withName(BB).build();
              QB.withMesh(yB), QB.withBuild(yB.id, JB), oB.set(YB, yB)
            }
          }
        }
        if (jB && jB.length) {
          const BB = this._groupBy(jB, (BB => BB.AQB));
          for (const [OB, GB] of Array.from(BB.entries()))
            if (GB && GB.length)
              for (let BB = 0; BB < GB.length; BB++) {
                const YB = GB[BB].getWorldMatrix(),
                  DB = OB.iW;
                for (let BB = 0; BB < DB.length; BB++) {
                  const OB = DB[BB],
                    GB = oB.get(OB);
                  GB && QB.withBuild(GB.id, this._handleBabylonTo3mfMatrixTransformToRef(YB, Sj.Zero()))
                }
              }
        }
        return QB.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const BB = globalThis;
          return BB.fflate || await DB.Tools.LoadScriptAsync(vj.FFLATEUrl), BB.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(BB, OB) {
        const GB = BB.KDB();
        if (!GB) return;
        const YB = BB.getVerticesData(xj._PositionKind);
        if (!YB) return;
        if (0 == OB.indexStart && OB.indexCount == GB.length) return {
          positions: YB,
          indices: GB
        };
        const DB = OB.indexStart,
          QB = new Map,
          oB = [],
          jB = new Uint32Array(OB.indexCount);
        for (let yB = 0; yB < OB.indexCount; yB++) {
          const BB = GB[DB + yB];
          let OB = QB.get(BB);
          if (void 0 === OB) {
            OB = QB.size, QB.set(BB, OB);
            const GB = 3 * BB;
            oB.push(YB[GB], YB[GB + 1], YB[GB + 2])
          }
          jB[yB] = OB
        }
        return {
          positions: new Float32Array(oB),
          indices: jB
        }
      }
      _groupBy(BB, OB) {
        const GB = new Map;
        for (const YB of BB) {
          const BB = OB(YB),
            DB = GB.get(BB);
          DB ? DB.push(YB) : GB.set(BB, [YB])
        }
        return GB
      }
      _handleBabylonTo3mfMatrixTransformToRef(BB, OB) {
        const GB = BB.multiplyToRef(xj._R_BJS_TO_3MF, XB.d.Zero()).m;
        return OB.values = [GB[0], GB[1], GB[2], GB[4], GB[5], GB[6], GB[8], GB[9], GB[10], GB[12], GB[13], GB[14]], OB
      }
    }
    xj.DefaultOptions = {
      unit: oj.meter,
      exportInstances: !1
    }, xj._PositionKind = "position", xj._R_BJS_TO_3MF = XB.d.RotationX(Math.PI / 2).multiply(XB.d.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);