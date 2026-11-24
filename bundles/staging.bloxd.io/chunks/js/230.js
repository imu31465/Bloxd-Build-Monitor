export const id = 230;
export const ids = [230, 235];
export const modules = {
  41849: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm
    });
    var hm = fm(41793),
      Am = fm(40111);
    let am = !1;

    function xm() {
      am || (am = !0, Am.b.prototype._sphericalPolynomialTargetSize = 0, Am.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Am.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = hm.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((mm => {
              this._texture._sphericalPolynomial = mm, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(mm) {
          this._texture && (this._texture._sphericalPolynomial = mm)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  37330: (mm, Tm, fm) => {
    fm.d(Tm, {
      Color3: () => hm.b,
      e: () => hm.c
    });
    var hm = fm(37336);
    (0, hm.d)()
  },
  37813: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am
    });
    var hm = fm(37821);
    class Am {
      static GetPlanes(mm) {
        const Tm = [];
        for (let fm = 0; fm < 6; fm++) Tm.push(new hm.d(0, 0, 0, 0));
        return Am.GetPlanesToRef(mm, Tm), Tm
      }
      static GetNearPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] + fm[2], Tm.normal.y = fm[7] + fm[6], Tm.normal.z = fm[11] + fm[10], Tm.d = fm[15] + fm[14], Tm.normalize()
      }
      static GetFarPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] - fm[2], Tm.normal.y = fm[7] - fm[6], Tm.normal.z = fm[11] - fm[10], Tm.d = fm[15] - fm[14], Tm.normalize()
      }
      static GetLeftPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] + fm[0], Tm.normal.y = fm[7] + fm[4], Tm.normal.z = fm[11] + fm[8], Tm.d = fm[15] + fm[12], Tm.normalize()
      }
      static GetRightPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] - fm[0], Tm.normal.y = fm[7] - fm[4], Tm.normal.z = fm[11] - fm[8], Tm.d = fm[15] - fm[12], Tm.normalize()
      }
      static GetTopPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] - fm[1], Tm.normal.y = fm[7] - fm[5], Tm.normal.z = fm[11] - fm[9], Tm.d = fm[15] - fm[13], Tm.normalize()
      }
      static GetBottomPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] + fm[1], Tm.normal.y = fm[7] + fm[5], Tm.normal.z = fm[11] + fm[9], Tm.d = fm[15] + fm[13], Tm.normalize()
      }
      static GetPlanesToRef(mm, Tm) {
        Am.GetNearPlaneToRef(mm, Tm[0]), Am.GetFarPlaneToRef(mm, Tm[1]), Am.GetLeftPlaneToRef(mm, Tm[2]), Am.GetRightPlaneToRef(mm, Tm[3]), Am.GetTopPlaneToRef(mm, Tm[4]), Am.GetBottomPlaneToRef(mm, Tm[5])
      }
      static IsPointInFrustum(mm, Tm) {
        for (let fm = 0; fm < 6; fm++)
          if (Tm[fm].dotCoordinate(mm) < 0) return !1;
        return !0
      }
    }
  },
  37821: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am
    });
    var hm = fm(37185);
    class Am {
      constructor(mm, Tm, fm, Am) {
        this.normal = new hm.p(mm, Tm, fm), this.d = Am
      }
      ahm() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Am(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let mm = this.normal.getHashCode();
        return mm = 397 * mm ^ this.d, mm
      }
      normalize() {
        const mm = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Tm = 0;
        return 0 !== mm && (Tm = 1 / mm), this.normal.x *= Tm, this.normal.y *= Tm, this.normal.z *= Tm, this.d *= Tm, this
      }
      transform(mm) {
        const Tm = Am._TmpMatrix;
        mm.invertToRef(Tm);
        const fm = Tm.m,
          hm = this.normal.x,
          am = this.normal.y,
          xm = this.normal.z,
          wm = this.d,
          Dm = hm * fm[0] + am * fm[1] + xm * fm[2] + wm * fm[3],
          im = hm * fm[4] + am * fm[5] + xm * fm[6] + wm * fm[7],
          Rm = hm * fm[8] + am * fm[9] + xm * fm[10] + wm * fm[11],
          pm = hm * fm[12] + am * fm[13] + xm * fm[14] + wm * fm[15];
        return new Am(Dm, im, Rm, pm)
      }
      dotCoordinate(mm) {
        return this.normal.x * mm.x + this.normal.y * mm.y + this.normal.z * mm.z + this.d
      }
      copyFromPoints(mm, Tm, fm) {
        const hm = Tm.x - mm.x,
          Am = Tm.y - mm.y,
          am = Tm.z - mm.z,
          xm = fm.x - mm.x,
          wm = fm.y - mm.y,
          Dm = fm.z - mm.z,
          im = Am * Dm - am * wm,
          Rm = am * xm - hm * Dm,
          pm = hm * wm - Am * xm,
          Em = Math.sqrt(im * im + Rm * Rm + pm * pm);
        let om;
        return om = 0 !== Em ? 1 / Em : 0, this.normal.x = im * om, this.normal.y = Rm * om, this.normal.z = pm * om, this.d = -(this.normal.x * mm.x + this.normal.y * mm.y + this.normal.z * mm.z), this
      }
      isFrontFacingTo(mm, Tm) {
        return hm.p.Dot(this.normal, mm) <= Tm
      }
      signedDistanceTo(mm) {
        return hm.p.Dot(mm, this.normal) + this.d
      }
      static FromArray(mm) {
        return new Am(mm[0], mm[1], mm[2], mm[3])
      }
      static FromPoints(mm, Tm, fm) {
        const hm = new Am(0, 0, 0, 0);
        return hm.copyFromPoints(mm, Tm, fm), hm
      }
      static FromPositionAndNormal(mm, Tm) {
        const fm = new Am(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(mm, Tm, fm)
      }
      static FromPositionAndNormalToRef(mm, Tm, fm) {
        return fm.normal.ZZ(Tm), fm.normal.normalize(), fm.d = -mm.dot(fm.normal), fm
      }
      static SignedDistanceToPlaneFromPositionAndNormal(mm, Tm, fm) {
        const Am = -(Tm.x * mm.x + Tm.y * mm.y + Tm.z * mm.z);
        return hm.p.Dot(fm, Tm) + Am
      }
    }
    Am._TmpMatrix = hm.e.Identity()
  },
  37181: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      Matrix: () => hm.e,
      Quaternion: () => hm.h,
      RegisterMathVector: () => hm.i,
      TmpVectors: () => hm.j,
      Vector2: () => hm.l,
      WO: () => hm.p,
      Vector4: () => hm.t
    });
    var hm = fm(37185);
    (0, hm.i)()
  },
  38151: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    class hm {
      constructor(mm, Tm, fm, hm) {
        this.x = mm, this.y = Tm, this.width = fm, this.height = hm
      }
      toGlobal(mm, Tm) {
        return new hm(this.x * mm, this.y * Tm, this.width * mm, this.height * Tm)
      }
      toGlobalToRef(mm, Tm, fm) {
        return fm.x = this.x * mm, fm.y = this.y * Tm, fm.width = this.width * mm, fm.height = this.height * Tm, this
      }
      clone() {
        return new hm(this.x, this.y, this.width, this.height)
      }
    }
  },
  41793: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => im
    });
    var hm = fm(37185),
      Am = fm(37208),
      am = fm(40108),
      xm = fm(37191),
      wm = fm(37336);
    class Dm {
      constructor(mm, Tm, fm, hm) {
        this.name = mm, this.worldAxisForNormal = Tm, this.worldAxisForFileX = fm, this.worldAxisForFileY = hm
      }
    }
    class im {
      static _NearestPow2Floor(mm) {
        return mm <= 1 ? 1 : 1 << Math.floor(Math.log2(mm))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(mm) {
        if (!mm.isCube) return null;
        mm.wG()?.dO().flushFramebuffer();
        const Tm = mm.getSize().width,
          fm = mm._sphericalPolynomialTargetSize,
          hm = fm > 0 ? this._NearestPow2Floor(fm) : 0,
          Am = !mm.noMipmap && !0 === mm._texture?.generateMipMaps,
          am = hm > 0 && hm < Tm && Am,
          xm = am ? Math.max(0, Math.round(Math.log2(Tm / hm))) : 0,
          wm = am ? Math.max(1, Math.floor(Tm / Math.pow(2, xm))) : Tm,
          Dm = mm.readPixels(0, xm, void 0, !1),
          im = mm.readPixels(1, xm, void 0, !1);
        let Rm, pm;
        mm.isRenderTarget ? (Rm = mm.readPixels(3, xm, void 0, !1), pm = mm.readPixels(2, xm, void 0, !1)) : (Rm = mm.readPixels(2, xm, void 0, !1), pm = mm.readPixels(3, xm, void 0, !1));
        const Em = mm.readPixels(4, xm, void 0, !1),
          om = mm.readPixels(5, xm, void 0, !1),
          Om = mm.gammaSpace,
          Ym = hm > 0 && hm < Tm && !am;
        return new Promise((mm => {
          Promise.all([im, Dm, Rm, pm, Em, om]).then((fm => {
            let [Am, am, xm, Dm, im, Rm] = fm, pm = wm;
            if (Ym) {
              const mm = 4;
              Am = this._DownsampleFace(Am, Tm, hm, mm), am = this._DownsampleFace(am, Tm, hm, mm), xm = this._DownsampleFace(xm, Tm, hm, mm), Dm = this._DownsampleFace(Dm, Tm, hm, mm), im = this._DownsampleFace(im, Tm, hm, mm), Rm = this._DownsampleFace(Rm, Tm, hm, mm), pm = hm
            }
            const Em = {
              size: pm,
              right: am,
              left: Am,
              up: xm,
              down: Dm,
              front: im,
              back: Rm,
              format: 5,
              type: Am instanceof Float32Array ? 1 : 0,
              gammaSpace: Om
            };
            mm(this.ConvertCubeMapToSphericalPolynomial(Em))
          }))
        }))
      }
      static _AreaElement(mm, Tm) {
        return Math.atan2(mm * Tm, Math.sqrt(mm * mm + Tm * Tm + 1))
      }
      static _DownsampleFace(mm, Tm, fm, hm) {
        const Am = mm instanceof Float32Array ? mm : Float32Array.from(mm),
          am = fm * fm * hm,
          xm = new Float32Array(am),
          wm = Tm / fm,
          Dm = 1 / (wm * wm);
        for (let Rm = 0; Rm < fm; Rm++) {
          const mm = Math.floor(Rm * wm),
            am = Math.floor((Rm + 1) * wm);
          for (let im = 0; im < fm; im++) {
            const pm = Math.floor(im * wm),
              Em = Math.floor((im + 1) * wm),
              om = (Rm * fm + im) * hm;
            for (let fm = 0; fm < hm; fm++) {
              let wm = 0;
              for (let xm = mm; xm < am; xm++)
                for (let mm = pm; mm < Em; mm++) wm += Am[(xm * Tm + mm) * hm + fm];
              xm[om + fm] = wm * Dm
            }
          }
        }
        if (mm instanceof Float32Array) return xm;
        const im = new(0, mm.constructor)(am);
        for (let Rm = 0; Rm < am; Rm++) im[Rm] = xm[Rm] + .5 | 0;
        return im
      }
      static ConvertCubeMapToSphericalPolynomial(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const fm = Tm > 0 ? this._NearestPow2Floor(Tm) : 0;
        if (fm > 0 && mm.size > fm) {
          const Tm = 5 === mm.format ? 4 : 3,
            hm = ["right", "left", "up", "down", "front", "back"],
            Am = {};
          for (const am of hm) Am[am] = this._DownsampleFace(mm[am], mm.size, fm, Tm);
          mm = {
            ...mm,
            ...Am,
            size: fm
          }
        }
        const hm = new am.b;
        let Dm = 0;
        const im = 2 / mm.size,
          Rm = im,
          pm = .5 * im,
          Em = pm - 1;
        for (let am = 0; am < 6; am++) {
          const Tm = this._FileFaces[am],
            fm = mm[Tm.name];
          let om = Em;
          const Om = 5 === mm.format ? 4 : 3;
          for (let am = 0; am < mm.size; am++) {
            let Ym = Em;
            for (let Rm = 0; Rm < mm.size; Rm++) {
              const Em = Tm.worldAxisForFileX.scale(Ym).add(Tm.worldAxisForFileY.scale(om)).add(Tm.worldAxisForNormal);
              Em.normalize();
              const qm = this._AreaElement(Ym - pm, om - pm) - this._AreaElement(Ym - pm, om + pm) - this._AreaElement(Ym + pm, om - pm) + this._AreaElement(Ym + pm, om + pm);
              let jm = fm[am * mm.size * Om + Rm * Om + 0],
                Vm = fm[am * mm.size * Om + Rm * Om + 1],
                Im = fm[am * mm.size * Om + Rm * Om + 2];
              isNaN(jm) && (jm = 0), isNaN(Vm) && (Vm = 0), isNaN(Im) && (Im = 0), 0 === mm.type && (jm /= 255, Vm /= 255, Im /= 255), mm.gammaSpace && (jm = Math.pow((0, Am.Clamp)(jm), xm.g), Vm = Math.pow((0, Am.Clamp)(Vm), xm.g), Im = Math.pow((0, Am.Clamp)(Im), xm.g));
              const Km = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const mm = Math.max(jm, Vm, Im);
                if (mm > Km) {
                  const Tm = Km / mm;
                  jm *= Tm, Vm *= Tm, Im *= Tm
                }
              } else jm = (0, Am.Clamp)(jm, 0, Km), Vm = (0, Am.Clamp)(Vm, 0, Km), Im = (0, Am.Clamp)(Im, 0, Km);
              const Qm = new wm.b(jm, Vm, Im);
              hm.addLight(Em, Qm, qm), Dm += qm, Ym += im
            }
            om += Rm
          }
        }
        const om = 6 * (4 * Math.PI) / 6 / Dm;
        return hm.scaleInPlace(om), hm.convertIncidentRadianceToIrradiance(), hm.convertIrradianceToLambertianRadiance(), am.e.FromHarmonics(hm)
      }
    }
    im._FileFaces = [new Dm("right", new hm.p(1, 0, 0), new hm.p(0, 0, -1), new hm.p(0, -1, 0)), new Dm("left", new hm.p(-1, 0, 0), new hm.p(0, 0, 1), new hm.p(0, -1, 0)), new Dm("up", new hm.p(0, 1, 0), new hm.p(1, 0, 0), new hm.p(0, 0, 1)), new Dm("down", new hm.p(0, -1, 0), new hm.p(1, 0, 0), new hm.p(0, 0, -1)), new Dm("front", new hm.p(0, 0, 1), new hm.p(1, 0, 0), new hm.p(0, -1, 0)), new Dm("back", new hm.p(0, 0, -1), new hm.p(-1, 0, 0), new hm.p(0, -1, 0))], im.MAX_HDRI_VALUE = 4096, im.PRESERVE_CLAMPED_COLORS = !1
  },
  41589: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm.k,
      i: () => hm.u
    });
    var hm = fm(40154);
    (0, hm.A)()
  },
  37970: (mm, Tm, fm) => {
    function hm() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (mm => {
        const Tm = 16 * Math.random() | 0;
        return ("x" === mm ? Tm : 3 & Tm | 8).toString(16)
      }))
    }
    fm.d(Tm, {
      c: () => hm
    })
  },
  41826: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am
    });
    var hm = fm(41820),
      Am = fm(41831);
    class am {
      static ExpandRGBDTexture(mm) {
        const Tm = mm._texture;
        if (!Tm || !mm.isRGBD) return;
        const Am = Tm.dO(),
          am = Am.getCaps(),
          xm = Tm.isReady;
        let wm = !1;
        am.textureHalfFloatRender && am.textureHalfFloatLinearFiltering ? (wm = !0, Tm.type = 2) : am.textureFloatRender && am.textureFloatLinearFiltering && (wm = !0, Tm.type = 1), wm && (Tm.isReady = !1, Tm._isRGBD = !1, Tm.invertY = !1);
        const Dm = async () => {
          const am = Am.isWebGPU,
            xm = am ? 1 : 0;
          Tm.isReady = !1, am ? await fm.e(342).then((() => fm(61459))) : await fm.e(324).then((() => fm(61464)));
          const wm = new hm.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Am, !1, void 0, Tm.type, void 0, null, !1, void 0, xm);
          wm.externalTextureSamplerBinding = !0;
          const Dm = Am.createRenderTargetTexture(Tm.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Tm.samplingMode,
            type: Tm.type,
            format: 5
          });
          wm.onEffectCreatedObservable.addOnce((fm => {
            fm.executeWhenCompiled((() => {
              wm.onApply = mm => {
                mm._bindTexture("textureSampler", Tm), mm.setFloat2("scale", 1, 1)
              }, mm.wG()?.postProcessManager.directRender([wm], Dm, !0), Am.restoreDefaultFramebuffer(), Am._releaseTexture(Tm), wm && wm.dispose(), Dm._swapAndDie(Tm), Tm.isReady = !0
            }))
          }))
        };
        wm && (xm ? Dm() : mm.onLoadObservable.addOnce(Dm))
      }
      static async EncodeTextureToRGBD(mm, Tm) {
        let hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Tm.dO().isWebGPU ? await fm.e(343).then((() => fm(61477))) : await fm.e(325).then((() => fm(61475))), await (0, Am.d)("rgbdEncode", mm, Tm, hm, 1, 5)
      }
    }
  },
  61310: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      AsyncLoop: () => hm.d,
      RegisterTools: () => hm.e,
      Tools: () => hm.h,
      className: () => hm.k
    });
    var hm = fm(40203);
    (0, hm.e)()
  },
  41871: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am
    });
    class hm {
      constructor(mm) {
        this._pendingActions = new Array, this._workerInfos = mm.map((mm => ({
          workerPromise: Promise.resolve(mm),
          idle: !0
        })))
      }
      dispose() {
        for (const mm of this._workerInfos) mm.workerPromise.then((mm => {
          mm.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(mm) {
        this._executeOnIdleWorker(mm) || this._pendingActions.push(mm)
      }
      _executeOnIdleWorker(mm) {
        for (const Tm of this._workerInfos)
          if (Tm.idle) return this._execute(Tm, mm), !0;
        return !1
      }
      _execute(mm, Tm) {
        mm.idle = !1, mm.workerPromise.then((fm => {
          Tm(fm, (() => {
            const Tm = this._pendingActions.shift();
            Tm ? this._execute(mm, Tm) : mm.idle = !0
          }))
        }))
      }
    }
    class Am extends hm {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Am.DefaultOptions;
        super([]), this._maxWorkers = mm, this._createWorkerAsync = Tm, this._options = fm
      }
      push(mm) {
        if (!this._executeOnIdleWorker(mm))
          if (this._workerInfos.length < this._maxWorkers) {
            const Tm = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Tm), this._execute(Tm, mm)
          } else this._pendingActions.push(mm)
      }
      _execute(mm, Tm) {
        mm.timeoutId && (clearTimeout(mm.timeoutId), delete mm.timeoutId), super._execute(mm, ((fm, hm) => {
          Tm(fm, (() => {
            hm(), mm.idle && (mm.timeoutId = setTimeout((() => {
              mm.workerPromise.then((mm => {
                mm.terminate()
              }));
              const Tm = this._workerInfos.indexOf(mm); - 1 !== Tm && this._workerInfos.splice(Tm, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Am.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  61344: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      AbstractThreeMfSerializer: () => dw,
      BVHExporter: () => bx,
      ContentTypeFileName: () => qw,
      DefaultXmlSerializerFormatOptions: () => Bx,
      DefaultXmlSerializerNumberOptions: () => ux,
      EXT_lights_area: () => IA,
      EXT_mesh_gpu_instancing: () => lh,
      EXT_texture_avif: () => wx,
      EXT_texture_webp: () => hx,
      GLTF2Export: () => Ch,
      GLTFData: () => im,
      GetXmlFieldMeta: () => Cx,
      GetXmlName: () => rx,
      IsQualifiedName: () => Sx,
      KHR_draco_mesh_compression: () => mA,
      KHR_interactivity: () => EA,
      KHR_lights_punctual: () => DA,
      KHR_materials_anisotropy: () => JA,
      KHR_materials_clearcoat: () => bA,
      KHR_materials_coat: () => PA,
      KHR_materials_diffuse_roughness: () => ra,
      KHR_materials_diffuse_transmission: () => lA,
      KHR_materials_dispersion: () => LA,
      KHR_materials_emissive_strength: () => dA,
      KHR_materials_fuzz: () => oa,
      KHR_materials_ior: () => ma,
      KHR_materials_iridescence: () => Aa,
      KHR_materials_openpbr: () => ua,
      KHR_materials_sheen: () => Da,
      KHR_materials_specular: () => ja,
      KHR_materials_transmission: () => Qa,
      KHR_materials_unlit: () => Za,
      KHR_materials_volume: () => ea,
      KHR_materials_volume_scatter: () => Pa,
      KHR_texture_basisu: () => Fa,
      KHR_texture_transform: () => ta,
      Known3mfRelationshipTypes: () => jw,
      KnownI3mfContentType: () => pw,
      Matrix3d: () => Jw,
      MatrixFormatter: () => zw,
      ModelFileName: () => Ow,
      NumberFormatter: () => tx,
      OBJExport: () => xm,
      Object3dDirName: () => ow,
      OpenXmlContentTypesNamespace: () => iw,
      OpenXmlRelationshipsNamespace: () => Rw,
      RegisterEXT_lights_area: () => QA,
      RegisterEXT_mesh_gpu_instancing: () => uh,
      RegisterEXT_texture_avif: () => ix,
      RegisterEXT_texture_webp: () => ax,
      RegisterKHR_draco_mesh_compression: () => fA,
      RegisterKHR_interactivity: () => OA,
      RegisterKHR_lights_punctual: () => RA,
      RegisterKHR_materials_anisotropy: () => zA,
      RegisterKHR_materials_clearcoat: () => eA,
      RegisterKHR_materials_coat: () => yA,
      RegisterKHR_materials_diffuse_roughness: () => la,
      RegisterKHR_materials_diffuse_transmission: () => uA,
      RegisterKHR_materials_dispersion: () => tA,
      RegisterKHR_materials_emissive_strength: () => WA,
      RegisterKHR_materials_fuzz: () => Ya,
      RegisterKHR_materials_ior: () => fa,
      RegisterKHR_materials_iridescence: () => xa,
      RegisterKHR_materials_openpbr: () => La,
      RegisterKHR_materials_sheen: () => Ra,
      RegisterKHR_materials_specular: () => Ia,
      RegisterKHR_materials_transmission: () => Ja,
      RegisterKHR_materials_unlit: () => ba,
      RegisterKHR_materials_volume: () => Ga,
      RegisterKHR_materials_volume_scatter: () => ya,
      RegisterKHR_texture_basisu: () => Tx,
      RegisterKHR_texture_transform: () => da,
      RelationshipDirName: () => Ew,
      RelationshipFileName: () => Yw,
      ResolveFormatOptions: () => vx,
      ResolveNumberOptions: () => Lx,
      STLExport: () => Rx,
      ST_ObjectType: () => Dw,
      ST_Unit: () => ww,
      StringXmlWriter: () => hw,
      ThreeDimModelNamespace: () => aw,
      ThreeMf: () => gw,
      ThreeMfBase: () => sw,
      ThreeMfBaseMaterials: () => rw,
      ThreeMfBuild: () => lw,
      ThreeMfComponent: () => Cw,
      ThreeMfComponents: () => yw,
      ThreeMfComponentsBuilder: () => Bw,
      ThreeMfContentType: () => Iw,
      ThreeMfContentTypes: () => Vw,
      ThreeMfDocument: () => nw,
      ThreeMfDocumentBuilder: () => Uw,
      ThreeMfItem: () => Mw,
      ThreeMfMaterialBuilder: () => vw,
      ThreeMfMesh: () => Nw,
      ThreeMfMeshBuilder: () => Lw,
      ThreeMfMeta: () => kw,
      ThreeMfMetadataGroup: () => bw,
      ThreeMfModel: () => Zw,
      ThreeMfModelBuilder: () => tw,
      ThreeMfObject: () => ew,
      ThreeMfObjectBuilder: () => uw,
      ThreeMfRelationship: () => Qw,
      ThreeMfRelationships: () => Kw,
      ThreeMfResources: () => Sw,
      ThreeMfSerializer: () => mD,
      ThreeMfSerializerGlobalConfiguration: () => Ww,
      ThreeMfTriangle: () => Hw,
      ThreeMfTriangles: () => Pw,
      ThreeMfVertex: () => Xw,
      ThreeMfVertices: () => Gw,
      ToQualifiedString: () => Mx,
      TokenType: () => Tw,
      TriangleSetsNamespace: () => xw,
      USDZExportAsync: () => Zx,
      Utf8XmlWriterToBytes: () => Aw,
      XmlAttr: () => Hx,
      XmlBuilder: () => fw,
      XmlElem: () => yx,
      XmlIgnore: () => Px,
      XmlName: () => Xx,
      XmlNameToParts: () => lx,
      XmlSerializer: () => Fx,
      _ConvertToGLTFPBRMetallicRoughness: () => bf,
      _SolveMetallic: () => kf,
      __IGLTFExporterExtension: () => wm
    });
    var hm = fm(37181),
      Am = fm(61310),
      am = fm(40383);
    class xm {
      static OBJ(mm, Tm, fm, xm) {
        const wm = [];
        let Dm = 1,
          im = 1;
        Tm && (fm || (fm = "mat"), wm.push("mtllib " + fm + ".mtl"));
        for (let Rm = 0; Rm < mm.length; Rm++) {
          const fm = mm[Rm],
            pm = fm.name || `mesh${Rm}}`;
          wm.push(`o ${pm}`);
          let Em = null;
          if (xm) {
            const mm = fm.computeWorldMatrix(!0);
            Em = new hm.Matrix, mm.invertToRef(Em), fm.bakeTransformIntoVertices(mm)
          }
          if (Tm) {
            const mm = fm.material;
            mm && wm.push("usemtl " + mm.id)
          }
          const om = fm.geometry;
          if (!om) {
            Am.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const Om = om.getVerticesData("position"),
            Ym = om.getVerticesData("normal"),
            qm = om.getVerticesData("uv"),
            jm = om.xhm();
          let Vm = 0,
            Im = 0;
          if (!Om || !jm) {
            Am.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const Km = mm[0].wG().useRightHandedSystem ? 1 : -1;
          for (let mm = 0; mm < Om.length; mm += 3) wm.push("v " + Om[mm] * Km + " " + Om[mm + 1] + " " + Om[mm + 2]), Vm++;
          if (null != Ym)
            for (let mm = 0; mm < Ym.length; mm += 3) wm.push("vn " + Ym[mm] * Km + " " + Ym[mm + 1] + " " + Ym[mm + 2]);
          if (null != qm)
            for (let mm = 0; mm < qm.length; mm += 2) wm.push("vt " + qm[mm] + " " + qm[mm + 1]), Im++;
          const Qm = ["", "", ""],
            nm = (fm.material || fm.wG().defaultMaterial)._getEffectiveOrientation(fm),
            [Jm, cm] = nm === am.d.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let mm = 0; mm < jm.length; mm += 3) {
            const Tm = [String(jm[mm] + Dm), String(jm[mm + Jm] + Dm), String(jm[mm + cm] + Dm)],
              fm = [String(jm[mm] + im), String(jm[mm + Jm] + im), String(jm[mm + cm] + im)],
              hm = Tm,
              Am = null != qm ? fm : Qm,
              am = null != Ym ? Tm : Qm;
            wm.push("f " + hm[0] + "/" + Am[0] + "/" + am[0] + " " + hm[1] + "/" + Am[1] + "/" + am[1] + " " + hm[2] + "/" + Am[2] + "/" + am[2])
          }
          xm && Em && fm.bakeTransformIntoVertices(Em), Dm += Vm, im += Im
        }
        return wm.join("\n")
      }
      static MTL(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const fm = [],
          hm = mm.material;
        fm.push("newmtl " + Tm), fm.push("  Ns " + hm.specularPower.toFixed(4)), fm.push("  Ni 1.5000"), fm.push("  d " + hm.alpha.toFixed(4)), fm.push("  Tr 0.0000"), fm.push("  Tf 1.0000 1.0000 1.0000"), fm.push("  illum 2"), fm.push("  Ka " + hm.ambientColor.r.toFixed(4) + " " + hm.ambientColor.g.toFixed(4) + " " + hm.ambientColor.b.toFixed(4)), fm.push("  Kd " + hm.diffuseColor.r.toFixed(4) + " " + hm.diffuseColor.g.toFixed(4) + " " + hm.diffuseColor.b.toFixed(4)), fm.push("  Ks " + hm.specularColor.r.toFixed(4) + " " + hm.specularColor.g.toFixed(4) + " " + hm.specularColor.b.toFixed(4)), fm.push("  Ke " + hm.emissiveColor.r.toFixed(4) + " " + hm.emissiveColor.g.toFixed(4) + " " + hm.emissiveColor.b.toFixed(4));
        hm.ambientTexture && fm.push("  map_Ka " + hm.ambientTexture.name), hm.diffuseTexture && fm.push("  map_Kd " + hm.diffuseTexture.name), hm.specularTexture && fm.push("  map_Ks " + hm.specularTexture.name), hm.bumpTexture && fm.push("  map_bump -imfchan z " + hm.bumpTexture.name), hm.opacityTexture && fm.push("  map_d " + hm.opacityTexture.name);
        return fm.join("\n")
      }
    }
    var wm = 0,
      Dm = fm(41589);
    class im {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const mm in this.files) {
          const Tm = this.files[mm],
            fm = new Blob([Tm], {
              type: (0, Dm.e)(mm)
            });
          Am.Tools.Download(fm, mm)
        }
      }
    }
    var Rm = fm(41203),
      pm = fm(41166),
      Em = fm(41664),
      om = fm(41173),
      Om = fm(39930),
      Ym = fm(37201),
      qm = fm(37330),
      jm = fm(37208);
    const Vm = jm.HighestCommonFactor,
      Im = {
        ...jm,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: Vm
      };
    var Km = fm(41831),
      Qm = fm(41194),
      nm = fm(41634),
      Jm = fm(41636),
      cm = fm(41846);
    (0, cm.RegisterDumpTools)();
    var zm = fm(40113),
      Zm = fm(40119),
      km = fm(38766),
      bm = fm(40220),
      Sm = fm(40585),
      em = fm(41826);
    let Nm = 0;
    const Gm = (mm, Tm, fm, hm) => {
        if (!mm[fm]) {
          const Am = mm.useDelayedTextureLoading;
          mm.useDelayedTextureLoading = !1;
          const am = mm._blockEntityCollection;
          mm._blockEntityCollection = !1;
          const xm = Sm.f.CreateFromBase64String(Tm, hm + Nm++, mm, !0, !1, Sm.f.BILINEAR_SAMPLINGMODE);
          mm._blockEntityCollection = am;
          const wm = mm.dO().getLoadedTexturesCache(),
            Dm = wm.indexOf(xm.getInternalTexture()); - 1 !== Dm && wm.splice(Dm, 1), xm.isRGBD = !0, xm.wrapU = Sm.f.CLAMP_ADDRESSMODE, xm.wrapV = Sm.f.CLAMP_ADDRESSMODE, mm[fm] = xm, mm.useDelayedTextureLoading = Am, em.b.ExpandRGBDTexture(xm);
          const im = mm.dO().UO.add((() => {
            xm.isRGBD = !0;
            const Tm = mm.onBeforeRenderObservable.add((() => {
              xm.isReady() && (mm.onBeforeRenderObservable.remove(Tm), em.b.ExpandRGBDTexture(xm))
            }))
          }));
          mm.iG.add((() => {
            mm.dO().UO.remove(im)
          }))
        }
        return mm[fm]
      },
      Xm = mm => Gm(mm, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      Pm = mm => Gm(mm, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      Hm = mm => Gm(mm, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var ym = fm(40199),
      Cm = fm(37185),
      rm = fm(40251),
      sm = fm(40379),
      lm = fm(40458);
    class Mm extends sm.c {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let um = (() => {
      var mm, Tm, fm, hm, Am, am, xm, wm, Dm, im;
      let Rm, pm, Em, om, Om, Ym, qm, jm, Vm, Im = lm.e,
        Km = [],
        Qm = [],
        nm = [],
        Jm = [],
        cm = [],
        km = [],
        bm = [],
        Sm = [],
        em = [],
        Nm = [],
        Gm = [],
        Xm = [],
        Pm = [],
        Hm = [],
        ym = [],
        Cm = [],
        rm = [],
        sm = [];
      return mm = class extends Im {
        get useEnergyConservation() {
          return (0, zm.b)(this, Tm, "f")
        }
        set useEnergyConservation(mm) {
          (0, zm.c)(this, Tm, mm, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, zm.b)(this, fm, "f")
        }
        set useSmithVisibilityHeightCorrelated(mm) {
          (0, zm.c)(this, fm, mm, "f")
        }
        get useSphericalHarmonics() {
          return (0, zm.b)(this, hm, "f")
        }
        set useSphericalHarmonics(mm) {
          (0, zm.c)(this, hm, mm, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, zm.b)(this, Am, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(mm) {
          (0, zm.c)(this, Am, mm, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, zm.b)(this, am, "f")
        }
        set mixIblRadianceWithIrradiance(mm) {
          (0, zm.c)(this, am, mm, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, zm.b)(this, xm, "f")
        }
        set useLegacySpecularEnergyConservation(mm) {
          (0, zm.c)(this, xm, mm, "f")
        }
        get baseDiffuseModel() {
          return (0, zm.b)(this, wm, "f")
        }
        set baseDiffuseModel(mm) {
          (0, zm.c)(this, wm, mm, "f")
        }
        get dielectricSpecularModel() {
          return (0, zm.b)(this, Dm, "f")
        }
        set dielectricSpecularModel(mm) {
          (0, zm.c)(this, Dm, mm, "f")
        }
        get conductorSpecularModel() {
          return (0, zm.b)(this, im, "f")
        }
        set conductorSpecularModel(mm) {
          (0, zm.c)(this, im, mm, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Rm) {
          let pm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Rm, "PBRBRDF", 90, new Mm, pm), this._useEnergyConservation = mm.DEFAULT_USE_ENERGY_CONSERVATION, Tm.set(this, (0, zm.i)(this, Km, mm.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, zm.i)(this, Qm), mm.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), fm.set(this, (0, zm.i)(this, nm, mm.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, zm.i)(this, Jm), mm.DEFAULT_USE_SPHERICAL_HARMONICS), hm.set(this, (0, zm.i)(this, cm, mm.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, zm.i)(this, km), mm.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), Am.set(this, (0, zm.i)(this, bm, mm.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, zm.i)(this, Sm), mm.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), am.set(this, (0, zm.i)(this, em, mm.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, zm.i)(this, Nm), mm.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), xm.set(this, (0, zm.i)(this, Gm, mm.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, zm.i)(this, Xm), mm.DEFAULT_DIFFUSE_MODEL), wm.set(this, (0, zm.i)(this, Pm, mm.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, zm.i)(this, Hm), mm.DEFAULT_DIELECTRIC_SPECULAR_MODEL), Dm.set(this, (0, zm.i)(this, ym, mm.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, zm.i)(this, Cm), mm.DEFAULT_CONDUCTOR_SPECULAR_MODEL), im.set(this, (0, zm.i)(this, rm, mm.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, zm.i)(this, sm), this._internalMarkAllSubMeshesAsMiscDirty = Rm._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(mm) {
          mm.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, mm.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, mm.SPHERICAL_HARMONICS = this._useSphericalHarmonics, mm.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, mm.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, mm.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, mm.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, mm.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, mm.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, Tm = new WeakMap, fm = new WeakMap, hm = new WeakMap, Am = new WeakMap, am = new WeakMap, xm = new WeakMap, wm = new WeakMap, Dm = new WeakMap, im = new WeakMap, (() => {
        const Tm = "function" === typeof Symbol && Symbol.metadata ? Object.create(Im[Symbol.metadata] ?? null) : void 0;
        Rm = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsMiscDirty")], pm = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsMiscDirty")], Em = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsMiscDirty")], om = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsMiscDirty")], Om = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsMiscDirty")], Ym = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsMiscDirty")], qm = [(0, Zm.J)("baseDiffuseModel"), (0, Zm.c)("_markAllSubMeshesAsMiscDirty")], jm = [(0, Zm.J)("dielectricSpecularModel"), (0, Zm.c)("_markAllSubMeshesAsMiscDirty")], Vm = [(0, Zm.J)("conductorSpecularModel"), (0, Zm.c)("_markAllSubMeshesAsMiscDirty")], (0, zm.g)(mm, null, Rm, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: mm => "useEnergyConservation" in mm,
            get: mm => mm.useEnergyConservation,
            set: (mm, Tm) => {
              mm.useEnergyConservation = Tm
            }
          },
          metadata: Tm
        }, Km, Qm), (0, zm.g)(mm, null, pm, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: mm => "useSmithVisibilityHeightCorrelated" in mm,
            get: mm => mm.useSmithVisibilityHeightCorrelated,
            set: (mm, Tm) => {
              mm.useSmithVisibilityHeightCorrelated = Tm
            }
          },
          metadata: Tm
        }, nm, Jm), (0, zm.g)(mm, null, Em, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: mm => "useSphericalHarmonics" in mm,
            get: mm => mm.useSphericalHarmonics,
            set: (mm, Tm) => {
              mm.useSphericalHarmonics = Tm
            }
          },
          metadata: Tm
        }, cm, km), (0, zm.g)(mm, null, om, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: mm => "useSpecularGlossinessInputEnergyConservation" in mm,
            get: mm => mm.useSpecularGlossinessInputEnergyConservation,
            set: (mm, Tm) => {
              mm.useSpecularGlossinessInputEnergyConservation = Tm
            }
          },
          metadata: Tm
        }, bm, Sm), (0, zm.g)(mm, null, Om, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: mm => "mixIblRadianceWithIrradiance" in mm,
            get: mm => mm.mixIblRadianceWithIrradiance,
            set: (mm, Tm) => {
              mm.mixIblRadianceWithIrradiance = Tm
            }
          },
          metadata: Tm
        }, em, Nm), (0, zm.g)(mm, null, Ym, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: mm => "useLegacySpecularEnergyConservation" in mm,
            get: mm => mm.useLegacySpecularEnergyConservation,
            set: (mm, Tm) => {
              mm.useLegacySpecularEnergyConservation = Tm
            }
          },
          metadata: Tm
        }, Gm, Xm), (0, zm.g)(mm, null, qm, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: mm => "baseDiffuseModel" in mm,
            get: mm => mm.baseDiffuseModel,
            set: (mm, Tm) => {
              mm.baseDiffuseModel = Tm
            }
          },
          metadata: Tm
        }, Pm, Hm), (0, zm.g)(mm, null, jm, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: mm => "dielectricSpecularModel" in mm,
            get: mm => mm.dielectricSpecularModel,
            set: (mm, Tm) => {
              mm.dielectricSpecularModel = Tm
            }
          },
          metadata: Tm
        }, ym, Cm), (0, zm.g)(mm, null, Vm, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: mm => "conductorSpecularModel" in mm,
            get: mm => mm.conductorSpecularModel,
            set: (mm, Tm) => {
              mm.conductorSpecularModel = Tm
            }
          },
          metadata: Tm
        }, rm, sm), Tm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tm
        })
      })(), mm.DEFAULT_USE_ENERGY_CONSERVATION = !0, mm.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, mm.DEFAULT_USE_SPHERICAL_HARMONICS = !0, mm.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, mm.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, mm.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, mm.DEFAULT_DIFFUSE_MODEL = 0, mm.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, mm.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, mm
    })();
    var Bm = fm(40369),
      Lm = fm(37336),
      tm = fm(40371),
      Um = fm(40226),
      dm = fm(40445),
      gm = fm(40440),
      Wm = fm(40447),
      Fm = fm(40428);
    class mT extends sm.c {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let TT = (() => {
      var mm, Tm, fm, hm, Am, am, xm, wm, Dm, im;
      let Rm, pm, Em, om, Om, Ym, qm, jm, Vm, Im, Km, Qm, nm, Jm, cm = lm.e,
        km = [],
        bm = [],
        Sm = [],
        em = [],
        Nm = [],
        Gm = [],
        Xm = [],
        Pm = [],
        Hm = [],
        ym = [],
        Cm = [],
        rm = [],
        sm = [],
        Mm = [],
        um = [],
        Bm = [],
        tm = [],
        Um = [],
        dm = [],
        Wm = [],
        TT = [],
        fT = [],
        hT = [],
        AT = [],
        aT = [],
        xT = [],
        wT = [],
        DT = [];
      return mm = class extends cm {
        get isEnabled() {
          return (0, zm.b)(this, Tm, "f")
        }
        set isEnabled(mm) {
          (0, zm.c)(this, Tm, mm, "f")
        }
        get indexOfRefraction() {
          return (0, zm.b)(this, fm, "f")
        }
        set indexOfRefraction(mm) {
          (0, zm.c)(this, fm, mm, "f")
        }
        get texture() {
          return (0, zm.b)(this, hm, "f")
        }
        set texture(mm) {
          (0, zm.c)(this, hm, mm, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, zm.b)(this, Am, "f")
        }
        set useRoughnessFromMainTexture(mm) {
          (0, zm.c)(this, Am, mm, "f")
        }
        get textureRoughness() {
          return (0, zm.b)(this, am, "f")
        }
        set textureRoughness(mm) {
          (0, zm.c)(this, am, mm, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, zm.b)(this, xm, "f")
        }
        set remapF0OnInterfaceChange(mm) {
          (0, zm.c)(this, xm, mm, "f")
        }
        get bumpTexture() {
          return (0, zm.b)(this, wm, "f")
        }
        set bumpTexture(mm) {
          (0, zm.c)(this, wm, mm, "f")
        }
        get isTintEnabled() {
          return (0, zm.b)(this, Dm, "f")
        }
        set isTintEnabled(mm) {
          (0, zm.c)(this, Dm, mm, "f")
        }
        get tintTexture() {
          return (0, zm.b)(this, im, "f")
        }
        set tintTexture(mm) {
          (0, zm.c)(this, im, mm, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Rm) {
          let pm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Rm, "PBRClearCoat", 100, new mT, pm), this._isEnabled = !1, Tm.set(this, (0, zm.i)(this, km, !1)), this.intensity = ((0, zm.i)(this, bm), (0, zm.i)(this, Sm, 1)), this.roughness = ((0, zm.i)(this, em), (0, zm.i)(this, Nm, 0)), this._indexOfRefraction = ((0, zm.i)(this, Gm), mm._DefaultIndexOfRefraction), fm.set(this, (0, zm.i)(this, Xm, mm._DefaultIndexOfRefraction)), this._texture = ((0, zm.i)(this, Pm), null), hm.set(this, (0, zm.i)(this, Hm, null)), this._useRoughnessFromMainTexture = ((0, zm.i)(this, ym), !0), Am.set(this, (0, zm.i)(this, Cm, !0)), this._textureRoughness = ((0, zm.i)(this, rm), null), am.set(this, (0, zm.i)(this, sm, null)), this._remapF0OnInterfaceChange = ((0, zm.i)(this, Mm), !0), xm.set(this, (0, zm.i)(this, um, !0)), this._bumpTexture = ((0, zm.i)(this, Bm), null), wm.set(this, (0, zm.i)(this, tm, null)), this._isTintEnabled = ((0, zm.i)(this, Um), !1), Dm.set(this, (0, zm.i)(this, dm, !1)), this.tintColor = ((0, zm.i)(this, Wm), (0, zm.i)(this, TT, Lm.b.White())), this.tintColorAtDistance = ((0, zm.i)(this, fT), (0, zm.i)(this, hT, 1)), this.tintThickness = ((0, zm.i)(this, AT), (0, zm.i)(this, aT, 1)), this._tintTexture = ((0, zm.i)(this, xT), null), im.set(this, (0, zm.i)(this, wT, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, zm.i)(this, DT), this._internalMarkAllSubMeshesAsTexturesDirty = Rm._dirtyCallbacks[1]
        }
        isReadyForSubMesh(mm, Tm, fm) {
          if (!this._isEnabled) return !0;
          const hm = this._material._disableBumpMap;
          if (mm._areTexturesDirty && Tm.texturesEnabled) {
            if (this._texture && gm.d.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && gm.d.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (fm.getCaps().standardDerivatives && this._bumpTexture && gm.d.ClearCoatBumpTextureEnabled && !hm && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && gm.d.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(Tm, fm) {
          this._isEnabled ? (Tm.CLEARCOAT = !0, Tm.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, Tm.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, Tm._areTexturesDirty && fm.texturesEnabled && (this._texture && gm.d.ClearCoatTextureEnabled ? (0, Fm.$)(this._texture, Tm, "CLEARCOAT_TEXTURE") : Tm.CLEARCOAT_TEXTURE = !1, this._textureRoughness && gm.d.ClearCoatTextureEnabled ? (0, Fm.$)(this._textureRoughness, Tm, "CLEARCOAT_TEXTURE_ROUGHNESS") : Tm.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && gm.d.ClearCoatBumpTextureEnabled ? (0, Fm.$)(this._bumpTexture, Tm, "CLEARCOAT_BUMP") : Tm.CLEARCOAT_BUMP = !1, Tm.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === mm._DefaultIndexOfRefraction, this._isTintEnabled ? (Tm.CLEARCOAT_TINT = !0, this._tintTexture && gm.d.ClearCoatTintTextureEnabled ? ((0, Fm.$)(this._tintTexture, Tm, "CLEARCOAT_TINT_TEXTURE"), Tm.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : Tm.CLEARCOAT_TINT_TEXTURE = !1) : (Tm.CLEARCOAT_TINT = !1, Tm.CLEARCOAT_TINT_TEXTURE = !1))) : (Tm.CLEARCOAT = !1, Tm.CLEARCOAT_TEXTURE = !1, Tm.CLEARCOAT_TEXTURE_ROUGHNESS = !1, Tm.CLEARCOAT_BUMP = !1, Tm.CLEARCOAT_TINT = !1, Tm.CLEARCOAT_TINT_TEXTURE = !1, Tm.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, Tm.CLEARCOAT_DEFAULTIOR = !1, Tm.CLEARCOAT_TEXTUREDIRECTUV = 0, Tm.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, Tm.CLEARCOAT_BUMPDIRECTUV = 0, Tm.CLEARCOAT_REMAP_F0 = !1, Tm.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, Tm.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(mm, Tm, fm, hm) {
          if (!this._isEnabled) return;
          const Am = hm.materialDefines,
            am = this._material.isFrozen,
            xm = this._material._disableBumpMap,
            wm = this._material._invertNormalMapX,
            Dm = this._material._invertNormalMapY;
          if (!mm.useUbo || !am || !mm.isSync) {
            (this._texture || this._textureRoughness) && gm.d.ClearCoatTextureEnabled && (mm.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Fm.x)(this._texture, mm, "clearCoat"), this._textureRoughness && !Am.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Fm.x)(this._textureRoughness, mm, "clearCoatRoughness")), this._bumpTexture && fm.getCaps().standardDerivatives && gm.d.ClearCoatTextureEnabled && !xm && (mm.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, Fm.x)(this._bumpTexture, mm, "clearCoatBump"), Tm._mirroredCameraPosition ? mm.updateFloat2("vClearCoatTangentSpaceParams", wm ? 1 : -1, Dm ? 1 : -1) : mm.updateFloat2("vClearCoatTangentSpaceParams", wm ? -1 : 1, Dm ? -1 : 1)), this._tintTexture && gm.d.ClearCoatTintTextureEnabled && (mm.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, Fm.x)(this._tintTexture, mm, "clearCoatTint")), mm.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const hm = 1 - this._indexOfRefraction,
              am = 1 + this._indexOfRefraction,
              im = Math.pow(-hm / am, 2),
              Rm = 1 / this._indexOfRefraction;
            mm.updateFloat4("vClearCoatRefractionParams", im, Rm, hm, am), this._isTintEnabled && (mm.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), mm.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          Tm.texturesEnabled && (this._texture && gm.d.ClearCoatTextureEnabled && mm.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !Am.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && gm.d.ClearCoatTextureEnabled && mm.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && fm.getCaps().standardDerivatives && gm.d.ClearCoatBumpTextureEnabled && !xm && mm.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && gm.d.ClearCoatTintTextureEnabled && mm.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(mm) {
          return this._texture === mm || (this._textureRoughness === mm || (this._bumpTexture === mm || this._tintTexture === mm))
        }
        getActiveTextures(mm) {
          this._texture && mm.push(this._texture), this._textureRoughness && mm.push(this._textureRoughness), this._bumpTexture && mm.push(this._bumpTexture), this._tintTexture && mm.push(this._tintTexture)
        }
        getAnimatables(mm) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && mm.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && mm.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && mm.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && mm.push(this._tintTexture)
        }
        dispose(mm) {
          mm && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(mm, Tm, fm) {
          return mm.CLEARCOAT_BUMP && Tm.addFallback(fm++, "CLEARCOAT_BUMP"), mm.CLEARCOAT_TINT && Tm.addFallback(fm++, "CLEARCOAT_TINT"), mm.CLEARCOAT && Tm.addFallback(fm++, "CLEARCOAT"), fm
        }
        getSamplers(mm) {
          mm.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, Tm = new WeakMap, fm = new WeakMap, hm = new WeakMap, Am = new WeakMap, am = new WeakMap, xm = new WeakMap, wm = new WeakMap, Dm = new WeakMap, im = new WeakMap, (() => {
        const Tm = "function" === typeof Symbol && Symbol.metadata ? Object.create(cm[Symbol.metadata] ?? null) : void 0;
        Rm = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], pm = [(0, Zm.J)()], Em = [(0, Zm.J)()], om = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Om = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Ym = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], qm = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], jm = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Vm = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Im = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Km = [(0, Zm.k)()], Qm = [(0, Zm.J)()], nm = [(0, Zm.J)()], Jm = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], (0, zm.g)(mm, null, Rm, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: mm => "isEnabled" in mm,
            get: mm => mm.isEnabled,
            set: (mm, Tm) => {
              mm.isEnabled = Tm
            }
          },
          metadata: Tm
        }, km, bm), (0, zm.g)(mm, null, om, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: mm => "indexOfRefraction" in mm,
            get: mm => mm.indexOfRefraction,
            set: (mm, Tm) => {
              mm.indexOfRefraction = Tm
            }
          },
          metadata: Tm
        }, Xm, Pm), (0, zm.g)(mm, null, Om, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: mm => "texture" in mm,
            get: mm => mm.texture,
            set: (mm, Tm) => {
              mm.texture = Tm
            }
          },
          metadata: Tm
        }, Hm, ym), (0, zm.g)(mm, null, Ym, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "useRoughnessFromMainTexture" in mm,
            get: mm => mm.useRoughnessFromMainTexture,
            set: (mm, Tm) => {
              mm.useRoughnessFromMainTexture = Tm
            }
          },
          metadata: Tm
        }, Cm, rm), (0, zm.g)(mm, null, qm, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: mm => "textureRoughness" in mm,
            get: mm => mm.textureRoughness,
            set: (mm, Tm) => {
              mm.textureRoughness = Tm
            }
          },
          metadata: Tm
        }, sm, Mm), (0, zm.g)(mm, null, jm, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: mm => "remapF0OnInterfaceChange" in mm,
            get: mm => mm.remapF0OnInterfaceChange,
            set: (mm, Tm) => {
              mm.remapF0OnInterfaceChange = Tm
            }
          },
          metadata: Tm
        }, um, Bm), (0, zm.g)(mm, null, Vm, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "bumpTexture" in mm,
            get: mm => mm.bumpTexture,
            set: (mm, Tm) => {
              mm.bumpTexture = Tm
            }
          },
          metadata: Tm
        }, tm, Um), (0, zm.g)(mm, null, Im, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: mm => "isTintEnabled" in mm,
            get: mm => mm.isTintEnabled,
            set: (mm, Tm) => {
              mm.isTintEnabled = Tm
            }
          },
          metadata: Tm
        }, dm, Wm), (0, zm.g)(mm, null, Jm, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "tintTexture" in mm,
            get: mm => mm.tintTexture,
            set: (mm, Tm) => {
              mm.tintTexture = Tm
            }
          },
          metadata: Tm
        }, wT, DT), (0, zm.g)(null, null, pm, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: mm => "intensity" in mm,
            get: mm => mm.intensity,
            set: (mm, Tm) => {
              mm.intensity = Tm
            }
          },
          metadata: Tm
        }, Sm, em), (0, zm.g)(null, null, Em, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: mm => "roughness" in mm,
            get: mm => mm.roughness,
            set: (mm, Tm) => {
              mm.roughness = Tm
            }
          },
          metadata: Tm
        }, Nm, Gm), (0, zm.g)(null, null, Km, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: mm => "tintColor" in mm,
            get: mm => mm.tintColor,
            set: (mm, Tm) => {
              mm.tintColor = Tm
            }
          },
          metadata: Tm
        }, TT, fT), (0, zm.g)(null, null, Qm, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: mm => "tintColorAtDistance" in mm,
            get: mm => mm.tintColorAtDistance,
            set: (mm, Tm) => {
              mm.tintColorAtDistance = Tm
            }
          },
          metadata: Tm
        }, hT, AT), (0, zm.g)(null, null, nm, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: mm => "tintThickness" in mm,
            get: mm => mm.tintThickness,
            set: (mm, Tm) => {
              mm.tintThickness = Tm
            }
          },
          metadata: Tm
        }, aT, xT), Tm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tm
        })
      })(), mm._DefaultIndexOfRefraction = 1.5, mm
    })();
    class fT extends sm.c {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let hT = (() => {
      var mm, Tm, fm, hm;
      let Am, am, xm, wm, Dm, im, Rm, pm = lm.e,
        Em = [],
        om = [],
        Om = [],
        Ym = [],
        qm = [],
        jm = [],
        Vm = [],
        Im = [],
        Km = [],
        Qm = [],
        nm = [],
        Jm = [],
        cm = [],
        km = [];
      return mm = class extends pm {
        get isEnabled() {
          return (0, zm.b)(this, Tm, "f")
        }
        set isEnabled(mm) {
          (0, zm.c)(this, Tm, mm, "f")
        }
        get texture() {
          return (0, zm.b)(this, fm, "f")
        }
        set texture(mm) {
          (0, zm.c)(this, fm, mm, "f")
        }
        get thicknessTexture() {
          return (0, zm.b)(this, hm, "f")
        }
        set thicknessTexture(mm) {
          (0, zm.c)(this, hm, mm, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Am) {
          let am = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Am, "PBRIridescence", 110, new fT, am), this._isEnabled = !1, Tm.set(this, (0, zm.i)(this, Em, !1)), this.intensity = ((0, zm.i)(this, om), (0, zm.i)(this, Om, 1)), this.minimumThickness = ((0, zm.i)(this, Ym), (0, zm.i)(this, qm, mm._DefaultMinimumThickness)), this.maximumThickness = ((0, zm.i)(this, jm), (0, zm.i)(this, Vm, mm._DefaultMaximumThickness)), this.indexOfRefraction = ((0, zm.i)(this, Im), (0, zm.i)(this, Km, mm._DefaultIndexOfRefraction)), this._texture = ((0, zm.i)(this, Qm), null), fm.set(this, (0, zm.i)(this, nm, null)), this._thicknessTexture = ((0, zm.i)(this, Jm), null), hm.set(this, (0, zm.i)(this, cm, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, zm.i)(this, km), this._internalMarkAllSubMeshesAsTexturesDirty = Am._dirtyCallbacks[1]
        }
        isReadyForSubMesh(mm, Tm) {
          if (!this._isEnabled) return !0;
          if (mm._areTexturesDirty && Tm.texturesEnabled) {
            if (this._texture && gm.d.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && gm.d.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(mm, Tm) {
          this._isEnabled ? (mm.IRIDESCENCE = !0, mm._areTexturesDirty && Tm.texturesEnabled && (this._texture && gm.d.IridescenceTextureEnabled ? (0, Fm.$)(this._texture, mm, "IRIDESCENCE_TEXTURE") : mm.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && gm.d.IridescenceTextureEnabled ? (0, Fm.$)(this._thicknessTexture, mm, "IRIDESCENCE_THICKNESS_TEXTURE") : mm.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (mm.IRIDESCENCE = !1, mm.IRIDESCENCE_TEXTURE = !1, mm.IRIDESCENCE_THICKNESS_TEXTURE = !1, mm.IRIDESCENCE_TEXTUREDIRECTUV = 0, mm.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(mm, Tm) {
          if (!this._isEnabled) return;
          const fm = this._material.isFrozen;
          mm.useUbo && fm && mm.isSync || ((this._texture || this._thicknessTexture) && gm.d.IridescenceTextureEnabled && (mm.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, Fm.x)(this._texture, mm, "iridescence"), this._thicknessTexture && (0, Fm.x)(this._thicknessTexture, mm, "iridescenceThickness")), mm.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), Tm.texturesEnabled && (this._texture && gm.d.IridescenceTextureEnabled && mm.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && gm.d.IridescenceTextureEnabled && mm.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(mm) {
          return this._texture === mm || this._thicknessTexture === mm
        }
        getActiveTextures(mm) {
          this._texture && mm.push(this._texture), this._thicknessTexture && mm.push(this._thicknessTexture)
        }
        getAnimatables(mm) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && mm.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && mm.push(this._thicknessTexture)
        }
        dispose(mm) {
          mm && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(mm, Tm, fm) {
          return mm.IRIDESCENCE && Tm.addFallback(fm++, "IRIDESCENCE"), fm
        }
        getSamplers(mm) {
          mm.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, Tm = new WeakMap, fm = new WeakMap, hm = new WeakMap, (() => {
        const Tm = "function" === typeof Symbol && Symbol.metadata ? Object.create(pm[Symbol.metadata] ?? null) : void 0;
        Am = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], am = [(0, Zm.J)()], xm = [(0, Zm.J)()], wm = [(0, Zm.J)()], Dm = [(0, Zm.J)()], im = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Rm = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], (0, zm.g)(mm, null, Am, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: mm => "isEnabled" in mm,
            get: mm => mm.isEnabled,
            set: (mm, Tm) => {
              mm.isEnabled = Tm
            }
          },
          metadata: Tm
        }, Em, om), (0, zm.g)(mm, null, im, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: mm => "texture" in mm,
            get: mm => mm.texture,
            set: (mm, Tm) => {
              mm.texture = Tm
            }
          },
          metadata: Tm
        }, nm, Jm), (0, zm.g)(mm, null, Rm, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "thicknessTexture" in mm,
            get: mm => mm.thicknessTexture,
            set: (mm, Tm) => {
              mm.thicknessTexture = Tm
            }
          },
          metadata: Tm
        }, cm, km), (0, zm.g)(null, null, am, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: mm => "intensity" in mm,
            get: mm => mm.intensity,
            set: (mm, Tm) => {
              mm.intensity = Tm
            }
          },
          metadata: Tm
        }, Om, Ym), (0, zm.g)(null, null, xm, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: mm => "minimumThickness" in mm,
            get: mm => mm.minimumThickness,
            set: (mm, Tm) => {
              mm.minimumThickness = Tm
            }
          },
          metadata: Tm
        }, qm, jm), (0, zm.g)(null, null, wm, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: mm => "maximumThickness" in mm,
            get: mm => mm.maximumThickness,
            set: (mm, Tm) => {
              mm.maximumThickness = Tm
            }
          },
          metadata: Tm
        }, Vm, Im), (0, zm.g)(null, null, Dm, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: mm => "indexOfRefraction" in mm,
            get: mm => mm.indexOfRefraction,
            set: (mm, Tm) => {
              mm.indexOfRefraction = Tm
            }
          },
          metadata: Tm
        }, Km, Qm), Tm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tm
        })
      })(), mm._DefaultMinimumThickness = 100, mm._DefaultMaximumThickness = 400, mm._DefaultIndexOfRefraction = 1.3, mm
    })();
    class AT extends sm.c {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let aT = (() => {
      var mm, Tm, fm, hm;
      let Am, am, xm, wm, Dm, im = lm.e,
        Rm = [],
        pm = [],
        Em = [],
        om = [],
        Om = [],
        Ym = [],
        qm = [],
        jm = [],
        Vm = [],
        Im = [];
      return mm = class extends im {
        get isEnabled() {
          return (0, zm.b)(this, Tm, "f")
        }
        set isEnabled(mm) {
          (0, zm.c)(this, Tm, mm, "f")
        }
        set angle(mm) {
          this.direction.x = Math.cos(mm), this.direction.y = Math.sin(mm)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, zm.b)(this, fm, "f")
        }
        set texture(mm) {
          (0, zm.c)(this, fm, mm, "f")
        }
        get legacy() {
          return (0, zm.b)(this, hm, "f")
        }
        set legacy(mm) {
          (0, zm.c)(this, hm, mm, "f")
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
        constructor(mm) {
          let Am = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(mm, "PBRAnisotropic", 110, new AT, Am), this._isEnabled = !1, Tm.set(this, (0, zm.i)(this, Rm, !1)), this.intensity = ((0, zm.i)(this, pm), (0, zm.i)(this, Em, 1)), this.direction = ((0, zm.i)(this, om), (0, zm.i)(this, Om, new Cm.l(1, 0))), this._texture = ((0, zm.i)(this, Ym), null), fm.set(this, (0, zm.i)(this, qm, null)), this._legacy = ((0, zm.i)(this, jm), !1), hm.set(this, (0, zm.i)(this, Vm, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, zm.i)(this, Im), this._internalMarkAllSubMeshesAsTexturesDirty = mm._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = mm._dirtyCallbacks[16]
        }
        isReadyForSubMesh(mm, Tm) {
          return !this._isEnabled || !(mm._areTexturesDirty && Tm.texturesEnabled && this._texture && gm.d.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(mm, Tm, fm) {
          this._isEnabled ? (mm.ANISOTROPIC = this._isEnabled, this._isEnabled && !fm.isVerticesDataPresent(rm.m.TangentKind) && (mm._needUVs = !0, mm.MAINUV1 = !0), mm._areTexturesDirty && Tm.texturesEnabled && (this._texture && gm.d.AnisotropicTextureEnabled ? (0, Fm.$)(this._texture, mm, "ANISOTROPIC_TEXTURE") : mm.ANISOTROPIC_TEXTURE = !1), mm._areMiscDirty && (mm.ANISOTROPIC_LEGACY = this._legacy)) : (mm.ANISOTROPIC = !1, mm.ANISOTROPIC_TEXTURE = !1, mm.ANISOTROPIC_TEXTUREDIRECTUV = 0, mm.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(mm, Tm) {
          if (!this._isEnabled) return;
          const fm = this._material.isFrozen;
          mm.useUbo && fm && mm.isSync || (this._texture && gm.d.AnisotropicTextureEnabled && (mm.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, Fm.x)(this._texture, mm, "anisotropy")), mm.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), Tm.texturesEnabled && this._texture && gm.d.AnisotropicTextureEnabled && mm.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(mm) {
          return this._texture === mm
        }
        getActiveTextures(mm) {
          this._texture && mm.push(this._texture)
        }
        getAnimatables(mm) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && mm.push(this._texture)
        }
        dispose(mm) {
          mm && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(mm, Tm, fm) {
          return mm.ANISOTROPIC && Tm.addFallback(fm++, "ANISOTROPIC"), fm
        }
        getSamplers(mm) {
          mm.push("anisotropySampler")
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
        parse(mm, Tm, fm) {
          super.parse(mm, Tm, fm), void 0 === mm.legacy && (this.legacy = !0)
        }
      }, Tm = new WeakMap, fm = new WeakMap, hm = new WeakMap, (() => {
        const Tm = "function" === typeof Symbol && Symbol.metadata ? Object.create(im[Symbol.metadata] ?? null) : void 0;
        Am = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], am = [(0, Zm.J)()], xm = [(0, Zm.B)()], wm = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Dm = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsMiscDirty")], (0, zm.g)(mm, null, Am, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: mm => "isEnabled" in mm,
            get: mm => mm.isEnabled,
            set: (mm, Tm) => {
              mm.isEnabled = Tm
            }
          },
          metadata: Tm
        }, Rm, pm), (0, zm.g)(mm, null, wm, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: mm => "texture" in mm,
            get: mm => mm.texture,
            set: (mm, Tm) => {
              mm.texture = Tm
            }
          },
          metadata: Tm
        }, qm, jm), (0, zm.g)(mm, null, Dm, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: mm => "legacy" in mm,
            get: mm => mm.legacy,
            set: (mm, Tm) => {
              mm.legacy = Tm
            }
          },
          metadata: Tm
        }, Vm, Im), (0, zm.g)(null, null, am, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: mm => "intensity" in mm,
            get: mm => mm.intensity,
            set: (mm, Tm) => {
              mm.intensity = Tm
            }
          },
          metadata: Tm
        }, Em, om), (0, zm.g)(null, null, xm, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: mm => "direction" in mm,
            get: mm => mm.direction,
            set: (mm, Tm) => {
              mm.direction = Tm
            }
          },
          metadata: Tm
        }, Om, Ym), Tm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tm
        })
      })(), mm
    })();
    class xT extends sm.c {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let wT = (() => {
      var mm, Tm, fm, hm, Am, am, xm, wm;
      let Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm = lm.e,
        Vm = [],
        Im = [],
        Km = [],
        Qm = [],
        nm = [],
        Jm = [],
        cm = [],
        km = [],
        bm = [],
        Sm = [],
        em = [],
        Nm = [],
        Gm = [],
        Xm = [],
        Pm = [],
        Hm = [],
        ym = [],
        Cm = [];
      return mm = class extends jm {
        get isEnabled() {
          return (0, zm.b)(this, Tm, "f")
        }
        set isEnabled(mm) {
          (0, zm.c)(this, Tm, mm, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, zm.b)(this, fm, "f")
        }
        set linkSheenWithAlbedo(mm) {
          (0, zm.c)(this, fm, mm, "f")
        }
        get texture() {
          return (0, zm.b)(this, hm, "f")
        }
        set texture(mm) {
          (0, zm.c)(this, hm, mm, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, zm.b)(this, Am, "f")
        }
        set useRoughnessFromMainTexture(mm) {
          (0, zm.c)(this, Am, mm, "f")
        }
        get roughness() {
          return (0, zm.b)(this, am, "f")
        }
        set roughness(mm) {
          (0, zm.c)(this, am, mm, "f")
        }
        get textureRoughness() {
          return (0, zm.b)(this, xm, "f")
        }
        set textureRoughness(mm) {
          (0, zm.c)(this, xm, mm, "f")
        }
        get albedoScaling() {
          return (0, zm.b)(this, wm, "f")
        }
        set albedoScaling(mm) {
          (0, zm.c)(this, wm, mm, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(mm) {
          let Dm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(mm, "Sheen", 120, new xT, Dm), this._isEnabled = !1, Tm.set(this, (0, zm.i)(this, Vm, !1)), this._linkSheenWithAlbedo = ((0, zm.i)(this, Im), !1), fm.set(this, (0, zm.i)(this, Km, !1)), this.intensity = ((0, zm.i)(this, Qm), (0, zm.i)(this, nm, 1)), this.color = ((0, zm.i)(this, Jm), (0, zm.i)(this, cm, Lm.b.White())), this._texture = ((0, zm.i)(this, km), null), hm.set(this, (0, zm.i)(this, bm, null)), this._useRoughnessFromMainTexture = ((0, zm.i)(this, Sm), !0), Am.set(this, (0, zm.i)(this, em, !0)), this._roughness = ((0, zm.i)(this, Nm), null), am.set(this, (0, zm.i)(this, Gm, null)), this._textureRoughness = ((0, zm.i)(this, Xm), null), xm.set(this, (0, zm.i)(this, Pm, null)), this._albedoScaling = ((0, zm.i)(this, Hm), !1), wm.set(this, (0, zm.i)(this, ym, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, zm.i)(this, Cm), this._internalMarkAllSubMeshesAsTexturesDirty = mm._dirtyCallbacks[1]
        }
        isReadyForSubMesh(mm, Tm) {
          if (!this._isEnabled) return !0;
          if (mm._areTexturesDirty && Tm.texturesEnabled) {
            if (this._texture && gm.d.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && gm.d.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(mm, Tm) {
          this._isEnabled ? (mm.SHEEN = !0, mm.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, mm.SHEEN_ROUGHNESS = null !== this._roughness, mm.SHEEN_ALBEDOSCALING = this._albedoScaling, mm.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, mm._areTexturesDirty && Tm.texturesEnabled && (this._texture && gm.d.SheenTextureEnabled ? ((0, Fm.$)(this._texture, mm, "SHEEN_TEXTURE"), mm.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : mm.SHEEN_TEXTURE = !1, this._textureRoughness && gm.d.SheenTextureEnabled ? (0, Fm.$)(this._textureRoughness, mm, "SHEEN_TEXTURE_ROUGHNESS") : mm.SHEEN_TEXTURE_ROUGHNESS = !1)) : (mm.SHEEN = !1, mm.SHEEN_TEXTURE = !1, mm.SHEEN_TEXTURE_ROUGHNESS = !1, mm.SHEEN_LINKWITHALBEDO = !1, mm.SHEEN_ROUGHNESS = !1, mm.SHEEN_ALBEDOSCALING = !1, mm.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, mm.SHEEN_GAMMATEXTURE = !1, mm.SHEEN_TEXTUREDIRECTUV = 0, mm.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(mm, Tm, fm, hm) {
          if (!this._isEnabled) return;
          const Am = hm.materialDefines,
            am = this._material.isFrozen;
          mm.useUbo && am && mm.isSync || ((this._texture || this._textureRoughness) && gm.d.SheenTextureEnabled && (mm.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Fm.x)(this._texture, mm, "sheen"), this._textureRoughness && !Am.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Fm.x)(this._textureRoughness, mm, "sheenRoughness")), mm.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && mm.updateFloat("vSheenRoughness", this._roughness)), Tm.texturesEnabled && (this._texture && gm.d.SheenTextureEnabled && mm.setTexture("sheenSampler", this._texture), this._textureRoughness && !Am.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && gm.d.SheenTextureEnabled && mm.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(mm) {
          return this._texture === mm || this._textureRoughness === mm
        }
        getActiveTextures(mm) {
          this._texture && mm.push(this._texture), this._textureRoughness && mm.push(this._textureRoughness)
        }
        getAnimatables(mm) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && mm.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && mm.push(this._textureRoughness)
        }
        dispose(mm) {
          mm && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(mm, Tm, fm) {
          return mm.SHEEN && Tm.addFallback(fm++, "SHEEN"), fm
        }
        getSamplers(mm) {
          mm.push("sheenSampler", "sheenRoughnessSampler")
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
      }, Tm = new WeakMap, fm = new WeakMap, hm = new WeakMap, Am = new WeakMap, am = new WeakMap, xm = new WeakMap, wm = new WeakMap, (() => {
        const Tm = "function" === typeof Symbol && Symbol.metadata ? Object.create(jm[Symbol.metadata] ?? null) : void 0;
        Dm = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], im = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Rm = [(0, Zm.J)()], pm = [(0, Zm.k)()], Em = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], om = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Om = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Ym = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], qm = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], (0, zm.g)(mm, null, Dm, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: mm => "isEnabled" in mm,
            get: mm => mm.isEnabled,
            set: (mm, Tm) => {
              mm.isEnabled = Tm
            }
          },
          metadata: Tm
        }, Vm, Im), (0, zm.g)(mm, null, im, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: mm => "linkSheenWithAlbedo" in mm,
            get: mm => mm.linkSheenWithAlbedo,
            set: (mm, Tm) => {
              mm.linkSheenWithAlbedo = Tm
            }
          },
          metadata: Tm
        }, Km, Qm), (0, zm.g)(mm, null, Em, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: mm => "texture" in mm,
            get: mm => mm.texture,
            set: (mm, Tm) => {
              mm.texture = Tm
            }
          },
          metadata: Tm
        }, bm, Sm), (0, zm.g)(mm, null, om, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "useRoughnessFromMainTexture" in mm,
            get: mm => mm.useRoughnessFromMainTexture,
            set: (mm, Tm) => {
              mm.useRoughnessFromMainTexture = Tm
            }
          },
          metadata: Tm
        }, em, Nm), (0, zm.g)(mm, null, Om, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: mm => "roughness" in mm,
            get: mm => mm.roughness,
            set: (mm, Tm) => {
              mm.roughness = Tm
            }
          },
          metadata: Tm
        }, Gm, Xm), (0, zm.g)(mm, null, Ym, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: mm => "textureRoughness" in mm,
            get: mm => mm.textureRoughness,
            set: (mm, Tm) => {
              mm.textureRoughness = Tm
            }
          },
          metadata: Tm
        }, Pm, Hm), (0, zm.g)(mm, null, qm, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: mm => "albedoScaling" in mm,
            get: mm => mm.albedoScaling,
            set: (mm, Tm) => {
              mm.albedoScaling = Tm
            }
          },
          metadata: Tm
        }, ym, Cm), (0, zm.g)(null, null, Rm, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: mm => "intensity" in mm,
            get: mm => mm.intensity,
            set: (mm, Tm) => {
              mm.intensity = Tm
            }
          },
          metadata: Tm
        }, nm, Jm), (0, zm.g)(null, null, pm, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: mm => "color" in mm,
            get: mm => mm.color,
            set: (mm, Tm) => {
              mm.color = Tm
            }
          },
          metadata: Tm
        }, cm, km), Tm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tm
        })
      })(), mm
    })();
    class DT extends sm.c {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let iT = (() => {
      var mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm;
      let jm, Vm, Im, Km, Qm, nm, Jm, cm, km, bm, Sm, em, Nm, Gm, Xm, Pm, Hm, ym, rm, sm, Mm, um, Bm, tm, Um, dm, Wm, mT, TT, fT, hT = lm.e,
        AT = [],
        aT = [],
        xT = [],
        wT = [],
        iT = [],
        RT = [],
        pT = [],
        ET = [],
        oT = [],
        OT = [],
        YT = [],
        qT = [],
        jT = [],
        VT = [],
        IT = [],
        KT = [],
        QT = [],
        nT = [],
        JT = [],
        cT = [],
        zT = [],
        ZT = [],
        kT = [],
        bT = [],
        ST = [],
        eT = [],
        NT = [],
        GT = [],
        XT = [],
        PT = [],
        HT = [],
        yT = [],
        CT = [],
        rT = [],
        sT = [],
        lT = [],
        MT = [],
        uT = [],
        BT = [],
        LT = [],
        vT = [],
        tT = [],
        UT = [],
        dT = [],
        gT = [],
        WT = [],
        FT = [],
        mf = [],
        Tf = [],
        ff = [],
        hf = [],
        Af = [],
        af = [],
        xf = [],
        wf = [],
        Df = [],
        Rf = [],
        pf = [],
        Ef = [],
        of = [];
      return mm = class extends hT {
        get isRefractionEnabled() {
          return (0, zm.b)(this, Tm, "f")
        }
        set isRefractionEnabled(mm) {
          (0, zm.c)(this, Tm, mm, "f")
        }
        get isTranslucencyEnabled() {
          return (0, zm.b)(this, fm, "f")
        }
        set isTranslucencyEnabled(mm) {
          (0, zm.c)(this, fm, mm, "f")
        }
        get isDispersionEnabled() {
          return (0, zm.b)(this, hm, "f")
        }
        set isDispersionEnabled(mm) {
          (0, zm.c)(this, hm, mm, "f")
        }
        get isScatteringEnabled() {
          return (0, zm.b)(this, Am, "f")
        }
        set isScatteringEnabled(mm) {
          (0, zm.c)(this, Am, mm, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(mm) {
          this._scene.enableSubSurfaceForPrePass() && mm && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(mm))
        }
        get useAlbedoToTintRefraction() {
          return (0, zm.b)(this, am, "f")
        }
        set useAlbedoToTintRefraction(mm) {
          (0, zm.c)(this, am, mm, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, zm.b)(this, xm, "f")
        }
        set useAlbedoToTintTranslucency(mm) {
          (0, zm.c)(this, xm, mm, "f")
        }
        get thicknessTexture() {
          return (0, zm.b)(this, wm, "f")
        }
        set thicknessTexture(mm) {
          (0, zm.c)(this, wm, mm, "f")
        }
        get refractionTexture() {
          return (0, zm.b)(this, Dm, "f")
        }
        set refractionTexture(mm) {
          (0, zm.c)(this, Dm, mm, "f")
        }
        get indexOfRefraction() {
          return (0, zm.b)(this, im, "f")
        }
        set indexOfRefraction(mm) {
          (0, zm.c)(this, im, mm, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(mm) {
          const Tm = mm >= 1 ? mm : -1;
          this._volumeIndexOfRefraction !== Tm && (this._volumeIndexOfRefraction = Tm, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, zm.b)(this, Rm, "f")
        }
        set invertRefractionY(mm) {
          (0, zm.c)(this, Rm, mm, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, zm.b)(this, pm, "f")
        }
        set linkRefractionWithTransparency(mm) {
          (0, zm.c)(this, pm, mm, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, zm.b)(this, Em, "f")
        }
        set useMaskFromThicknessTexture(mm) {
          (0, zm.c)(this, Em, mm, "f")
        }
        get refractionIntensityTexture() {
          return (0, zm.b)(this, om, "f")
        }
        set refractionIntensityTexture(mm) {
          (0, zm.c)(this, om, mm, "f")
        }
        get translucencyIntensityTexture() {
          return (0, zm.b)(this, Om, "f")
        }
        set translucencyIntensityTexture(mm) {
          (0, zm.c)(this, Om, mm, "f")
        }
        get translucencyColorTexture() {
          return (0, zm.b)(this, Ym, "f")
        }
        set translucencyColorTexture(mm) {
          (0, zm.c)(this, Ym, mm, "f")
        }
        get useGltfStyleTextures() {
          return (0, zm.b)(this, qm, "f")
        }
        set useGltfStyleTextures(mm) {
          (0, zm.c)(this, qm, mm, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(mm) {
          this.legacyTranslucency = mm
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
        constructor(jm) {
          let Vm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(jm, "PBRSubSurface", 130, new DT, Vm), this._isRefractionEnabled = !1, Tm.set(this, (0, zm.i)(this, AT, !1)), this._isTranslucencyEnabled = ((0, zm.i)(this, aT), !1), fm.set(this, (0, zm.i)(this, xT, !1)), this._isDispersionEnabled = ((0, zm.i)(this, wT), !1), hm.set(this, (0, zm.i)(this, iT, !1)), this._isScatteringEnabled = ((0, zm.i)(this, RT), !1), Am.set(this, (0, zm.i)(this, pT, !1)), this._scatteringDiffusionProfileIndex = ((0, zm.i)(this, ET), (0, zm.i)(this, oT, 0)), this.refractionIntensity = ((0, zm.i)(this, OT), (0, zm.i)(this, YT, 1)), this.translucencyIntensity = ((0, zm.i)(this, qT), (0, zm.i)(this, jT, 1)), this._useAlbedoToTintRefraction = ((0, zm.i)(this, VT), !1), am.set(this, (0, zm.i)(this, IT, !1)), this._useAlbedoToTintTranslucency = ((0, zm.i)(this, KT), !1), xm.set(this, (0, zm.i)(this, QT, !1)), this._thicknessTexture = ((0, zm.i)(this, nT), null), wm.set(this, (0, zm.i)(this, JT, null)), this._refractionTexture = ((0, zm.i)(this, cT), null), Dm.set(this, (0, zm.i)(this, zT, null)), this._indexOfRefraction = ((0, zm.i)(this, ZT), 1.5), im.set(this, (0, zm.i)(this, kT, 1.5)), this._volumeIndexOfRefraction = ((0, zm.i)(this, bT), (0, zm.i)(this, ST, -1)), this._invertRefractionY = ((0, zm.i)(this, eT), !1), Rm.set(this, (0, zm.i)(this, NT, !1)), this._linkRefractionWithTransparency = ((0, zm.i)(this, GT), !1), pm.set(this, (0, zm.i)(this, XT, !1)), this.minimumThickness = ((0, zm.i)(this, PT), (0, zm.i)(this, HT, 0)), this.maximumThickness = ((0, zm.i)(this, yT), (0, zm.i)(this, CT, 1)), this.useThicknessAsDepth = ((0, zm.i)(this, rT), (0, zm.i)(this, sT, !1)), this.tintColor = ((0, zm.i)(this, lT), (0, zm.i)(this, MT, Lm.b.White())), this.tintColorAtDistance = ((0, zm.i)(this, uT), (0, zm.i)(this, BT, 1)), this.dispersion = ((0, zm.i)(this, LT), (0, zm.i)(this, vT, 0)), this.diffusionDistance = ((0, zm.i)(this, tT), (0, zm.i)(this, UT, Lm.b.White())), this._useMaskFromThicknessTexture = ((0, zm.i)(this, dT), !1), Em.set(this, (0, zm.i)(this, gT, !1)), this._refractionIntensityTexture = ((0, zm.i)(this, WT), null), om.set(this, (0, zm.i)(this, FT, null)), this._translucencyIntensityTexture = ((0, zm.i)(this, mf), null), Om.set(this, (0, zm.i)(this, Tf, null)), this.translucencyColor = ((0, zm.i)(this, ff), (0, zm.i)(this, hf, null)), this._translucencyColorTexture = ((0, zm.i)(this, Af), null), Ym.set(this, (0, zm.i)(this, af, null)), this._useGltfStyleTextures = ((0, zm.i)(this, xf), !0), qm.set(this, (0, zm.i)(this, wf, !0)), this.applyAlbedoAfterSubSurface = ((0, zm.i)(this, Df), (0, zm.i)(this, Rf, mm.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, zm.i)(this, pf), (0, zm.i)(this, Ef, mm.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, zm.i)(this, of), this._scene = jm.wG(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = jm._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = jm._dirtyCallbacks[32]
        }
        isReadyForSubMesh(mm, Tm) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (mm._areTexturesDirty && Tm.texturesEnabled) {
            if (this._thicknessTexture && gm.d.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && gm.d.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && gm.d.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && gm.d.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const mm = this._getRefractionTexture(Tm);
            if (mm && gm.d.RefractionTextureEnabled && !mm.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(mm, Tm) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return mm.SUBSURFACE = !1, mm.SS_DISPERSION = !1, mm.SS_TRANSLUCENCY = !1, mm.SS_SCATTERING = !1, mm.SS_REFRACTION = !1, mm.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, mm.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, mm.SS_THICKNESSANDMASK_TEXTURE = !1, mm.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, mm.SS_HAS_THICKNESS = !1, mm.SS_REFRACTIONINTENSITY_TEXTURE = !1, mm.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, mm.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, mm.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, mm.SS_REFRACTIONMAP_3D = !1, mm.SS_REFRACTIONMAP_OPPOSITEZ = !1, mm.SS_LODINREFRACTIONALPHA = !1, mm.SS_GAMMAREFRACTION = !1, mm.SS_RGBDREFRACTION = !1, mm.SS_LINEARSPECULARREFRACTION = !1, mm.SS_LINKREFRACTIONTOTRANSPARENCY = !1, mm.SS_ALBEDOFORREFRACTIONTINT = !1, mm.SS_ALBEDOFORTRANSLUCENCYTINT = !1, mm.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, mm.SS_USE_THICKNESS_AS_DEPTH = !1, mm.SS_USE_GLTF_TEXTURES = !1, mm.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, mm.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, mm.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(mm.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (mm._areTexturesDirty) {
            if (mm.SUBSURFACE = !0, mm.SS_DISPERSION = this._isDispersionEnabled, mm.SS_TRANSLUCENCY = this._isTranslucencyEnabled, mm.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, mm.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, mm.SS_SCATTERING = this._isScatteringEnabled, mm.SS_THICKNESSANDMASK_TEXTURE = !1, mm.SS_REFRACTIONINTENSITY_TEXTURE = !1, mm.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, mm.SS_HAS_THICKNESS = !1, mm.SS_USE_GLTF_TEXTURES = !1, mm.SS_REFRACTION = !1, mm.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, mm.SS_REFRACTIONMAP_3D = !1, mm.SS_GAMMAREFRACTION = !1, mm.SS_RGBDREFRACTION = !1, mm.SS_LINEARSPECULARREFRACTION = !1, mm.SS_REFRACTIONMAP_OPPOSITEZ = !1, mm.SS_LODINREFRACTIONALPHA = !1, mm.SS_LINKREFRACTIONTOTRANSPARENCY = !1, mm.SS_ALBEDOFORREFRACTIONTINT = !1, mm.SS_ALBEDOFORTRANSLUCENCYTINT = !1, mm.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, mm.SS_USE_THICKNESS_AS_DEPTH = !1, mm.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, mm.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, mm._areTexturesDirty && Tm.texturesEnabled && (this._thicknessTexture && gm.d.ThicknessTextureEnabled && (0, Fm.$)(this._thicknessTexture, mm, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && gm.d.RefractionIntensityTextureEnabled && (0, Fm.$)(this._refractionIntensityTexture, mm, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && gm.d.TranslucencyIntensityTextureEnabled && (0, Fm.$)(this._translucencyIntensityTexture, mm, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && gm.d.TranslucencyColorTextureEnabled && ((0, Fm.$)(this._translucencyColorTexture, mm, "SS_TRANSLUCENCYCOLOR_TEXTURE"), mm.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), mm.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, mm.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, mm.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, mm.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && Tm.texturesEnabled) {
              const fm = this._getRefractionTexture(Tm);
              fm && gm.d.RefractionTextureEnabled && (mm.SS_REFRACTION = !0, mm.SS_REFRACTIONMAP_3D = fm.isCube, mm.SS_GAMMAREFRACTION = fm.gammaSpace, mm.SS_RGBDREFRACTION = fm.isRGBD, mm.SS_LINEARSPECULARREFRACTION = fm.linearSpecularLOD, mm.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && fm.isCube ? !fm.invertZ : fm.invertZ, mm.SS_LODINREFRACTIONALPHA = fm.lodLevelInAlpha, mm.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, mm.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, mm.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = fm.isCube && fm.boundingBoxSize, mm.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (mm.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(mm, Tm, fm, hm) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) mm.updateFloat2("vThicknessParam", 0, 0);
            else {
              hm.getRenderingMesh().getWorldMatrix().decompose(Cm.j.WO[0]);
              const Tm = Math.max(Math.abs(Cm.j.WO[0].x), Math.abs(Cm.j.WO[0].y), Math.abs(Cm.j.WO[0].z));
              mm.updateFloat2("vThicknessParam", this.minimumThickness * Tm, (this.maximumThickness - this.minimumThickness) * Tm)
            }
        }
        bindForSubMesh(mm, Tm, fm, hm) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const Am = hm.materialDefines,
            am = this._material.isFrozen,
            xm = this._material.realTimeFiltering,
            wm = Am.LODBASEDMICROSFURACE,
            Dm = this._getRefractionTexture(Tm);
          if (!mm.useUbo || !am || !mm.isSync) {
            if (this._thicknessTexture && gm.d.ThicknessTextureEnabled && (mm.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, Fm.x)(this._thicknessTexture, mm, "thickness")), this._refractionIntensityTexture && gm.d.RefractionIntensityTextureEnabled && Am.SS_REFRACTIONINTENSITY_TEXTURE && (mm.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, Fm.x)(this._refractionIntensityTexture, mm, "refractionIntensity")), this._translucencyColorTexture && gm.d.TranslucencyColorTextureEnabled && Am.SS_TRANSLUCENCYCOLOR_TEXTURE && (mm.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, Fm.x)(this._translucencyColorTexture, mm, "translucencyColor")), this._translucencyIntensityTexture && gm.d.TranslucencyIntensityTextureEnabled && Am.SS_TRANSLUCENCYINTENSITY_TEXTURE && (mm.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, Fm.x)(this._translucencyIntensityTexture, mm, "translucencyIntensity")), Dm && gm.d.RefractionTextureEnabled) {
              mm.K9("refractionMatrix", Dm.getRefractionTextureMatrix());
              let Tm = 1;
              Dm.isCube || Dm.depth && (Tm = Dm.depth);
              const fm = Dm.getSize().width,
                hm = this.volumeIndexOfRefraction;
              if (mm.updateFloat4("vRefractionInfos", Dm.level, 1 / hm, Tm, this._invertRefractionY ? -1 : 1), mm.updateFloat4("vRefractionMicrosurfaceInfos", fm, Dm.lodGenerationScale, Dm.lodGenerationOffset, 1 / this.indexOfRefraction), xm && mm.updateFloat2("vRefractionFilteringInfo", fm, Math.log2(fm)), Dm.boundingBoxSize) {
                const Tm = Dm;
                mm.updateVector3("vRefractionPosition", Tm.boundingBoxPosition), mm.updateVector3("vRefractionSize", Tm.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && mm.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), mm.updateColor3("vDiffusionDistance", this.diffusionDistance), mm.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), mm.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), mm.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), mm.updateFloat("dispersion", this.dispersion)
          }
          Tm.texturesEnabled && (this._thicknessTexture && gm.d.ThicknessTextureEnabled && mm.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && gm.d.RefractionIntensityTextureEnabled && Am.SS_REFRACTIONINTENSITY_TEXTURE && mm.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && gm.d.TranslucencyIntensityTextureEnabled && Am.SS_TRANSLUCENCYINTENSITY_TEXTURE && mm.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && gm.d.TranslucencyColorTextureEnabled && Am.SS_TRANSLUCENCYCOLOR_TEXTURE && mm.setTexture("translucencyColorSampler", this._translucencyColorTexture), Dm && gm.d.RefractionTextureEnabled && (wm ? mm.setTexture("refractionSampler", Dm) : (mm.setTexture("refractionSampler", Dm._lodTextureMid || Dm), mm.setTexture("refractionSamplerLow", Dm._lodTextureLow || Dm), mm.setTexture("refractionSamplerHigh", Dm._lodTextureHigh || Dm))))
        }
        _getRefractionTexture(mm) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? mm.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(mm) {
          gm.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && mm.push(this._refractionTexture)
        }
        hasTexture(mm) {
          return this._thicknessTexture === mm || (this._refractionTexture === mm || (this._refractionIntensityTexture === mm || (this._translucencyIntensityTexture === mm || this._translucencyColorTexture === mm)))
        }
        hasRenderTargetTextures() {
          return !!(gm.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(mm) {
          this._thicknessTexture && mm.push(this._thicknessTexture), this._refractionTexture && mm.push(this._refractionTexture), this._refractionIntensityTexture && mm.push(this._refractionIntensityTexture), this._translucencyColorTexture && mm.push(this._translucencyColorTexture), this._translucencyIntensityTexture && mm.push(this._translucencyIntensityTexture)
        }
        getAnimatables(mm) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && mm.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && mm.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && mm.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && mm.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && mm.push(this._translucencyIntensityTexture)
        }
        dispose(mm) {
          mm && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(mm, Tm, fm) {
          return mm.SS_SCATTERING && Tm.addFallback(fm++, "SS_SCATTERING"), mm.SS_TRANSLUCENCY && Tm.addFallback(fm++, "SS_TRANSLUCENCY"), fm
        }
        getSamplers(mm) {
          mm.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, Tm = new WeakMap, fm = new WeakMap, hm = new WeakMap, Am = new WeakMap, am = new WeakMap, xm = new WeakMap, wm = new WeakMap, Dm = new WeakMap, im = new WeakMap, Rm = new WeakMap, pm = new WeakMap, Em = new WeakMap, om = new WeakMap, Om = new WeakMap, Ym = new WeakMap, qm = new WeakMap, (() => {
        const Tm = "function" === typeof Symbol && Symbol.metadata ? Object.create(hT[Symbol.metadata] ?? null) : void 0;
        jm = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Vm = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Im = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Km = [(0, Zm.J)(), (0, Zm.c)("_markScenePrePassDirty")], Qm = [(0, Zm.J)()], nm = [(0, Zm.J)()], Jm = [(0, Zm.J)()], cm = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], km = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], bm = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Sm = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], em = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Nm = [(0, Zm.J)()], Gm = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Xm = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Pm = [(0, Zm.J)()], Hm = [(0, Zm.J)()], ym = [(0, Zm.J)()], rm = [(0, Zm.k)()], sm = [(0, Zm.J)()], Mm = [(0, Zm.J)()], um = [(0, Zm.k)()], Bm = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], tm = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Um = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], dm = [(0, Zm.k)()], Wm = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], mT = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], TT = [(0, Zm.J)()], fT = [(0, Zm.J)()], (0, zm.g)(mm, null, jm, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: mm => "isRefractionEnabled" in mm,
            get: mm => mm.isRefractionEnabled,
            set: (mm, Tm) => {
              mm.isRefractionEnabled = Tm
            }
          },
          metadata: Tm
        }, AT, aT), (0, zm.g)(mm, null, Vm, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: mm => "isTranslucencyEnabled" in mm,
            get: mm => mm.isTranslucencyEnabled,
            set: (mm, Tm) => {
              mm.isTranslucencyEnabled = Tm
            }
          },
          metadata: Tm
        }, xT, wT), (0, zm.g)(mm, null, Im, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: mm => "isDispersionEnabled" in mm,
            get: mm => mm.isDispersionEnabled,
            set: (mm, Tm) => {
              mm.isDispersionEnabled = Tm
            }
          },
          metadata: Tm
        }, iT, RT), (0, zm.g)(mm, null, Km, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: mm => "isScatteringEnabled" in mm,
            get: mm => mm.isScatteringEnabled,
            set: (mm, Tm) => {
              mm.isScatteringEnabled = Tm
            }
          },
          metadata: Tm
        }, pT, ET), (0, zm.g)(mm, null, cm, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: mm => "useAlbedoToTintRefraction" in mm,
            get: mm => mm.useAlbedoToTintRefraction,
            set: (mm, Tm) => {
              mm.useAlbedoToTintRefraction = Tm
            }
          },
          metadata: Tm
        }, IT, KT), (0, zm.g)(mm, null, km, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: mm => "useAlbedoToTintTranslucency" in mm,
            get: mm => mm.useAlbedoToTintTranslucency,
            set: (mm, Tm) => {
              mm.useAlbedoToTintTranslucency = Tm
            }
          },
          metadata: Tm
        }, QT, nT), (0, zm.g)(mm, null, bm, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "thicknessTexture" in mm,
            get: mm => mm.thicknessTexture,
            set: (mm, Tm) => {
              mm.thicknessTexture = Tm
            }
          },
          metadata: Tm
        }, JT, cT), (0, zm.g)(mm, null, Sm, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "refractionTexture" in mm,
            get: mm => mm.refractionTexture,
            set: (mm, Tm) => {
              mm.refractionTexture = Tm
            }
          },
          metadata: Tm
        }, zT, ZT), (0, zm.g)(mm, null, em, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: mm => "indexOfRefraction" in mm,
            get: mm => mm.indexOfRefraction,
            set: (mm, Tm) => {
              mm.indexOfRefraction = Tm
            }
          },
          metadata: Tm
        }, kT, bT), (0, zm.g)(mm, null, Gm, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: mm => "invertRefractionY" in mm,
            get: mm => mm.invertRefractionY,
            set: (mm, Tm) => {
              mm.invertRefractionY = Tm
            }
          },
          metadata: Tm
        }, NT, GT), (0, zm.g)(mm, null, Xm, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: mm => "linkRefractionWithTransparency" in mm,
            get: mm => mm.linkRefractionWithTransparency,
            set: (mm, Tm) => {
              mm.linkRefractionWithTransparency = Tm
            }
          },
          metadata: Tm
        }, XT, PT), (0, zm.g)(mm, null, Bm, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "useMaskFromThicknessTexture" in mm,
            get: mm => mm.useMaskFromThicknessTexture,
            set: (mm, Tm) => {
              mm.useMaskFromThicknessTexture = Tm
            }
          },
          metadata: Tm
        }, gT, WT), (0, zm.g)(mm, null, tm, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "refractionIntensityTexture" in mm,
            get: mm => mm.refractionIntensityTexture,
            set: (mm, Tm) => {
              mm.refractionIntensityTexture = Tm
            }
          },
          metadata: Tm
        }, FT, mf), (0, zm.g)(mm, null, Um, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "translucencyIntensityTexture" in mm,
            get: mm => mm.translucencyIntensityTexture,
            set: (mm, Tm) => {
              mm.translucencyIntensityTexture = Tm
            }
          },
          metadata: Tm
        }, Tf, ff), (0, zm.g)(mm, null, Wm, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "translucencyColorTexture" in mm,
            get: mm => mm.translucencyColorTexture,
            set: (mm, Tm) => {
              mm.translucencyColorTexture = Tm
            }
          },
          metadata: Tm
        }, af, xf), (0, zm.g)(mm, null, mT, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: mm => "useGltfStyleTextures" in mm,
            get: mm => mm.useGltfStyleTextures,
            set: (mm, Tm) => {
              mm.useGltfStyleTextures = Tm
            }
          },
          metadata: Tm
        }, wf, Df), (0, zm.g)(null, null, Qm, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: mm => "_scatteringDiffusionProfileIndex" in mm,
            get: mm => mm._scatteringDiffusionProfileIndex,
            set: (mm, Tm) => {
              mm._scatteringDiffusionProfileIndex = Tm
            }
          },
          metadata: Tm
        }, oT, OT), (0, zm.g)(null, null, nm, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: mm => "refractionIntensity" in mm,
            get: mm => mm.refractionIntensity,
            set: (mm, Tm) => {
              mm.refractionIntensity = Tm
            }
          },
          metadata: Tm
        }, YT, qT), (0, zm.g)(null, null, Jm, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: mm => "translucencyIntensity" in mm,
            get: mm => mm.translucencyIntensity,
            set: (mm, Tm) => {
              mm.translucencyIntensity = Tm
            }
          },
          metadata: Tm
        }, jT, VT), (0, zm.g)(null, null, Nm, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: mm => "_volumeIndexOfRefraction" in mm,
            get: mm => mm._volumeIndexOfRefraction,
            set: (mm, Tm) => {
              mm._volumeIndexOfRefraction = Tm
            }
          },
          metadata: Tm
        }, ST, eT), (0, zm.g)(null, null, Pm, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: mm => "minimumThickness" in mm,
            get: mm => mm.minimumThickness,
            set: (mm, Tm) => {
              mm.minimumThickness = Tm
            }
          },
          metadata: Tm
        }, HT, yT), (0, zm.g)(null, null, Hm, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: mm => "maximumThickness" in mm,
            get: mm => mm.maximumThickness,
            set: (mm, Tm) => {
              mm.maximumThickness = Tm
            }
          },
          metadata: Tm
        }, CT, rT), (0, zm.g)(null, null, ym, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: mm => "useThicknessAsDepth" in mm,
            get: mm => mm.useThicknessAsDepth,
            set: (mm, Tm) => {
              mm.useThicknessAsDepth = Tm
            }
          },
          metadata: Tm
        }, sT, lT), (0, zm.g)(null, null, rm, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: mm => "tintColor" in mm,
            get: mm => mm.tintColor,
            set: (mm, Tm) => {
              mm.tintColor = Tm
            }
          },
          metadata: Tm
        }, MT, uT), (0, zm.g)(null, null, sm, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: mm => "tintColorAtDistance" in mm,
            get: mm => mm.tintColorAtDistance,
            set: (mm, Tm) => {
              mm.tintColorAtDistance = Tm
            }
          },
          metadata: Tm
        }, BT, LT), (0, zm.g)(null, null, Mm, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: mm => "dispersion" in mm,
            get: mm => mm.dispersion,
            set: (mm, Tm) => {
              mm.dispersion = Tm
            }
          },
          metadata: Tm
        }, vT, tT), (0, zm.g)(null, null, um, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: mm => "diffusionDistance" in mm,
            get: mm => mm.diffusionDistance,
            set: (mm, Tm) => {
              mm.diffusionDistance = Tm
            }
          },
          metadata: Tm
        }, UT, dT), (0, zm.g)(null, null, dm, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: mm => "translucencyColor" in mm,
            get: mm => mm.translucencyColor,
            set: (mm, Tm) => {
              mm.translucencyColor = Tm
            }
          },
          metadata: Tm
        }, hf, Af), (0, zm.g)(null, null, TT, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: mm => "applyAlbedoAfterSubSurface" in mm,
            get: mm => mm.applyAlbedoAfterSubSurface,
            set: (mm, Tm) => {
              mm.applyAlbedoAfterSubSurface = Tm
            }
          },
          metadata: Tm
        }, Rf, pf), (0, zm.g)(null, null, fT, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: mm => "legacyTranslucency" in mm,
            get: mm => mm.legacyTranslucency,
            set: (mm, Tm) => {
              mm.legacyTranslucency = Tm
            }
          },
          metadata: Tm
        }, Ef, of), Tm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tm
        })
      })(), mm.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, mm.DEFAULT_LEGACY_TRANSLUCENCY = !1, mm
    })();
    var RT = fm(40453),
      pT = fm(40432),
      ET = fm(40465),
      oT = fm(40474),
      OT = fm(40483),
      YT = fm(40491),
      qT = fm(40493),
      jT = fm(40498),
      VT = fm(39993);
    const IT = {
      effect: null,
      subMesh: null
    };
    class KT extends((0, qT.b)((0, YT.e)(sm.c))) {}
    class QT extends((0, tm.e)(KT)) {
      constructor(mm) {
        super(mm), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class nT extends((0, jT.c)(dm.d)) {}
    let JT = (() => {
      var mm, Tm;
      let hm, Am = nT,
        xm = [],
        wm = [];
      return mm = class extends Am {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(mm) {
          this._realTimeFiltering = mm, this.HTm(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(mm) {
          this._realTimeFilteringQuality = mm, this.HTm(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, zm.b)(this, Tm, "f")
        }
        set debugMode(mm) {
          (0, zm.c)(this, Tm, mm, "f")
        }
        constructor(fm, hm) {
          super(fm, hm, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || mm.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new Cm.t(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = mm.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = Lm.b.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new Lm.b(0, 0, 0), this._albedoColor = new Lm.b(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new Lm.b(1, 1, 1), this._reflectionColor = new Lm.b(1, 1, 1), this._emissiveColor = new Lm.b(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = mm.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new bm.f(16), this._globalAmbientColor = new Lm.b(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Tm.set(this, (0, zm.i)(this, xm, 0)), this.debugLimit = ((0, zm.i)(this, wm), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new um(this), this.clearCoat = new TT(this), this.iridescence = new hT(this), this.anisotropy = new aT(this), this.sheen = new wT(this), this.subSurface = new iT(this), this.detailMap = new RT.d(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), gm.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Xm(this.wG()), this.prePassConfiguration = new Bm.c
        }
        get hasRenderTargetTextures() {
          return !!(gm.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === mm.PBRMATERIAL_OPAQUE || this._transparencyMode === mm.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === mm.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== mm.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(mm, Tm, fm) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const hm = Tm._drawWrapper;
          if (hm.effect && this.isFrozen && hm._wasPreviouslyReady && hm._wasPreviouslyUsingInstances === fm) return !0;
          Tm.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Tm.materialDefines = new QT(this._eventInfo.defineNames));
          const Am = Tm.materialDefines;
          if (this._isReadyForSubMesh(Tm)) return !0;
          const am = this.wG(),
            xm = am.dO();
          if (Am._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, am.texturesEnabled)) {
            if (this._albedoTexture && gm.d.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && gm.d.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && gm.d.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && gm.d.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && gm.d.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const mm = this._getReflectionTexture();
            if (mm && gm.d.ReflectionTextureEnabled) {
              if (!mm.isReadyOrNotBlocking()) return !1;
              if (mm.irradianceTexture) {
                if (!mm.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!mm.sphericalPolynomial && mm.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && gm.d.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && gm.d.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (gm.d.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (xm.getCaps().standardDerivatives && this._bumpTexture && gm.d.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && gm.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Am, this._eventInfo.subMesh = Tm, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (Am._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (Am.AREALIGHTUSED || Am.CLUSTLIGHT_BATCH)
            for (let pm = 0; pm < mm.lightSources.length; pm++)
              if (!mm.lightSources[pm]._isReady()) return !1;
          if (xm.getCaps().standardDerivatives || mm.isVerticesDataPresent(rm.m.NormalKind) || (mm.createNormals(!0), km.b.Warn("PBRMaterial: Normals have been created for the mesh: " + mm.name)), !(0, Fm.e)(am, mm, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const wm = Tm.effect,
            Dm = Am._areLightsDisposed,
            im = this._prepareEffect(mm, Tm.getRenderingMesh(), Am, this.onCompiled, this.onError, fm, null);
          let Rm = !1;
          if (im)
            if (this._onEffectCreatedObservable && (IT.effect = im, IT.subMesh = Tm, this._onEffectCreatedObservable.notifyObservers(IT)), this.allowShaderHotSwapping && wm && !im.isReady()) {
              if (Am.markAsUnprocessed(), Rm = this.isFrozen, Dm) return Am._areLightsDisposed = !0, !1
            } else am.resetCachedMaterial(), Tm.setEffect(im, Am, this._materialContext);
          return !(!Tm.effect || !Tm.effect.isReady()) && (Am._renderId = am.getRenderId(), hm._wasPreviouslyReady = !Rm, hm._wasPreviouslyUsingInstances = !!fm, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(Tm, fm, hm) {
          let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            xm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            wm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(Tm, fm, hm, xm, wm), !hm.isDirty) return null;
          hm.markAsProcessed();
          const Dm = this.wG().dO(),
            im = new Wm.e;
          let Rm = 0;
          hm.USESPHERICALINVERTEX && im.addFallback(Rm++, "USESPHERICALINVERTEX"), hm.FOG && im.addFallback(Rm, "FOG"), hm.SPECULARAA && im.addFallback(Rm, "SPECULARAA"), hm.POINTSIZE && im.addFallback(Rm, "POINTSIZE"), hm.LOGARITHMICDEPTH && im.addFallback(Rm, "LOGARITHMICDEPTH"), hm.PARALLAX && im.addFallback(Rm, "PARALLAX"), hm.PARALLAX_RHS && im.addFallback(Rm, "PARALLAX_RHS"), hm.PARALLAXOCCLUSION && im.addFallback(Rm++, "PARALLAXOCCLUSION"), hm.ENVIRONMENTBRDF && im.addFallback(Rm++, "ENVIRONMENTBRDF"), hm.TANGENT && im.addFallback(Rm++, "TANGENT"), hm.BUMP && im.addFallback(Rm++, "BUMP"), Rm = (0, Fm.A)(hm, im, this._maxSimultaneousLights, Rm), hm.SPECULARTERM && im.addFallback(Rm++, "SPECULARTERM"), hm.USESPHERICALFROMREFLECTIONMAP && im.addFallback(Rm++, "USESPHERICALFROMREFLECTIONMAP"), hm.USEIRRADIANCEMAP && im.addFallback(Rm++, "USEIRRADIANCEMAP"), hm.LIGHTMAP && im.addFallback(Rm++, "LIGHTMAP"), hm.NORMAL && im.addFallback(Rm++, "NORMAL"), hm.AMBIENT && im.addFallback(Rm++, "AMBIENT"), hm.EMISSIVE && im.addFallback(Rm++, "EMISSIVE"), hm.VERTEXCOLOR && im.addFallback(Rm++, "VERTEXCOLOR"), hm.MORPHTARGETS && im.addFallback(Rm++, "MORPHTARGETS"), hm.MULTIVIEW && im.addFallback(0, "MULTIVIEW");
          const pm = [rm.m.PositionKind];
          hm.NORMAL && pm.push(rm.m.NormalKind), hm.TANGENT && pm.push(rm.m.TangentKind);
          for (let mm = 1; mm <= 6; ++mm) hm["UV" + mm] && pm.push(`uv${1===mm?"":mm}`);
          hm.VERTEXCOLOR && pm.push(rm.m.ColorKind), (0, Fm.F)(pm, Tm, hm, im), (0, Fm.J)(pm, hm), (0, Fm.L)(pm, Tm, hm), (0, Fm.E)(pm, Tm, hm);
          let Em = "pbr";
          const om = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            Om = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, Fm.mb)(om, Om, !0);
          const Ym = ["Material", "Scene", "Mesh"],
            qm = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: hm.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = im, this._eventInfo.fallbackRank = Rm, this._eventInfo.defines = hm, this._eventInfo.uniforms = om, this._eventInfo.attributes = pm, this._eventInfo.samplers = Om, this._eventInfo.uniformBuffersNames = Ym, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Tm, this._eventInfo.indexParameters = qm, this._callbackPluginEventGeneric(128, this._eventInfo), OT.c.AddUniformsAndSamplers(om, Om), Bm.c.AddUniforms(om), Bm.c.AddSamplers(Om), (0, pT.c)(om), this._useVertexPulling) {
            const mm = fm?.geometry;
            mm && (this._vertexPullingMetadata = (0, ET.f)(mm), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((mm, Tm) => {
              om.push(`vp_${Tm}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          Um.c && (Um.c.PrepareUniforms(om, hm), Um.c.PrepareSamplers(Om, hm)), (0, Fm.qb)({
            uniformsNames: om,
            uniformBuffersNames: Ym,
            samplers: Om,
            defines: hm,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const jm = {};
          this.customShaderNameResolve && (Em = this.customShaderNameResolve(Em, om, Ym, Om, hm, pm, jm));
          const Vm = hm.toString(),
            Im = Dm.createEffect(Em, {
              attributes: pm,
              uniformsNames: om,
              uniformBuffersNames: Ym,
              samplers: Om,
              defines: Vm,
              fallbacks: im,
              onCompiled: Am,
              onError: am,
              indexParameters: qm,
              processFinalCode: jm.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: hm.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: mm._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Dm);
          return this._eventInfo.customCode = void 0, Im
        }
        _prepareDefines(Tm, fm, hm) {
          let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const xm = fm.hasThinInstances,
            wm = this.wG(),
            Dm = wm.dO();
          (0, Fm.Z)(wm, Tm, hm, !0, this._maxSimultaneousLights, this._disableLighting), hm._needNormals = !0, (0, Fm.fb)(wm, hm);
          const im = this.needAlphaBlendingForMesh(Tm) && this.wG().useOrderIndependentTransparency;
          if ((0, Fm.ib)(wm, hm, this.canRenderToMRT && !im), (0, Fm.gb)(wm, hm, im), OT.c.PrepareDefines(Dm.currentRenderPassId, Tm, hm), hm.METALLICWORKFLOW = this.isMetallicWorkflow(), hm._areTexturesDirty) {
            hm._needUVs = !1;
            for (let mm = 1; mm <= 6; ++mm) hm["MAINUV" + mm] = !1;
            if (wm.texturesEnabled) {
              hm.ALBEDODIRECTUV = 0, hm.BASE_WEIGHTDIRECTUV = 0, hm.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, hm.AMBIENTDIRECTUV = 0, hm.OPACITYDIRECTUV = 0, hm.EMISSIVEDIRECTUV = 0, hm.REFLECTIVITYDIRECTUV = 0, hm.MICROSURFACEMAPDIRECTUV = 0, hm.METALLIC_REFLECTANCEDIRECTUV = 0, hm.REFLECTANCEDIRECTUV = 0, hm.BUMPDIRECTUV = 0, hm.LIGHTMAPDIRECTUV = 0, Dm.getCaps().textureLOD && (hm.LODBASEDMICROSFURACE = !0), this._albedoTexture && gm.d.DiffuseTextureEnabled ? ((0, Fm.$)(this._albedoTexture, hm, "ALBEDO"), hm.GAMMAALBEDO = this._albedoTexture.gammaSpace) : hm.ALBEDO = !1, this._baseWeightTexture && gm.d.BaseWeightTextureEnabled ? (0, Fm.$)(this._baseWeightTexture, hm, "BASE_WEIGHT") : hm.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && gm.d.BaseDiffuseRoughnessTextureEnabled ? (0, Fm.$)(this._baseDiffuseRoughnessTexture, hm, "BASE_DIFFUSE_ROUGHNESS") : hm.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && gm.d.AmbientTextureEnabled ? ((0, Fm.$)(this._ambientTexture, hm, "AMBIENT"), hm.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : hm.AMBIENT = !1, this._opacityTexture && gm.d.OpacityTextureEnabled ? ((0, Fm.$)(this._opacityTexture, hm, "OPACITY"), hm.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : hm.OPACITY = !1;
              const mm = this._getReflectionTexture(),
                Tm = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Dm.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, Fm.V)(wm, mm, hm, this.realTimeFiltering, this.realTimeFilteringQuality, !Tm), this._lightmapTexture && gm.d.LightmapTextureEnabled ? ((0, Fm.$)(this._lightmapTexture, hm, "LIGHTMAP"), hm.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, hm.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, hm.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : hm.LIGHTMAP = !1, this._emissiveTexture && gm.d.EmissiveTextureEnabled ? ((0, Fm.$)(this._emissiveTexture, hm, "EMISSIVE"), hm.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : hm.EMISSIVE = !1, gm.d.SpecularTextureEnabled ? (this._metallicTexture ? ((0, Fm.$)(this._metallicTexture, hm, "REFLECTIVITY"), hm.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, hm.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, hm.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, hm.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, hm.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, Fm.$)(this._reflectivityTexture, hm, "REFLECTIVITY"), hm.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, hm.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, hm.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : hm.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (hm.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, Fm.$)(this._metallicReflectanceTexture, hm, "METALLIC_REFLECTANCE"), hm.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : hm.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, Fm.$)(this._reflectanceTexture, hm, "REFLECTANCE"), hm.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : hm.REFLECTANCE = !1) : (hm.METALLIC_REFLECTANCE = !1, hm.REFLECTANCE = !1), this._microSurfaceTexture ? (0, Fm.$)(this._microSurfaceTexture, hm, "MICROSURFACEMAP") : hm.MICROSURFACEMAP = !1) : (hm.REFLECTIVITY = !1, hm.MICROSURFACEMAP = !1), Dm.getCaps().standardDerivatives && this._bumpTexture && gm.d.BumpTextureEnabled && !this._disableBumpMap ? ((0, Fm.$)(this._bumpTexture, hm, "BUMP"), this._useParallax && this._albedoTexture && gm.d.DiffuseTextureEnabled ? (hm.PARALLAX = !0, hm.PARALLAX_RHS = wm.useRightHandedSystem, hm.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : hm.PARALLAX = !1, hm.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (hm.BUMP = !1, hm.PARALLAX = !1, hm.PARALLAX_RHS = !1, hm.PARALLAXOCCLUSION = !1, hm.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && gm.d.ReflectionTextureEnabled ? (hm.ENVIRONMENTBRDF = !0, hm.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (hm.ENVIRONMENTBRDF = !1, hm.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? hm.ALPHAFROMALBEDO = !0 : hm.ALPHAFROMALBEDO = !1
            }
            hm.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === mm.LIGHTFALLOFF_STANDARD ? (hm.USEPHYSICALLIGHTFALLOFF = !1, hm.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === mm.LIGHTFALLOFF_GLTF ? (hm.USEPHYSICALLIGHTFALLOFF = !1, hm.USEGLTFLIGHTFALLOFF = !0) : (hm.USEPHYSICALLIGHTFALLOFF = !0, hm.USEGLTFLIGHTFALLOFF = !1), hm.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? hm.TWOSIDEDLIGHTING = !0 : hm.TWOSIDEDLIGHTING = !1, hm.MIRRORED = !!wm._mirroredCameraPosition, hm.SPECULARAA = Dm.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(hm._areTexturesDirty || hm._areMiscDirty) && (hm.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, hm.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, hm.ALPHABLEND = this.needAlphaBlendingForMesh(Tm), hm.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, hm.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), hm._areTexturesDirty && (hm.TEXTURE_REPETITION_MODE = Dm.version > 1 || Dm.isWebGPU ? this.textureRepetitionMode : 0), hm._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(hm), hm.FORCENORMALFORWARD = this._forceNormalForward, hm.RADIANCEOCCLUSION = this._useRadianceOcclusion, hm.HORIZONOCCLUSION = this._useHorizonOcclusion, hm._areMiscDirty && ((0, Fm.db)(Tm, wm, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Tm), hm, this._applyDecalMapAfterDetailMap, this._useVertexPulling, fm, this._isVertexOutputInvariant), hm.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Tm.isVerticesDataPresent(rm.m.NormalKind), hm.DEBUGMODE = this._debugMode), (0, Fm.U)(wm, Dm, this, hm, !!Am, am, xm), this._eventInfo.defines = hm, this._eventInfo.mesh = Tm, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Fm.Q)(Tm, hm, !0, !0, !0, this._transparencyMode !== mm.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(mm, Tm, fm) {
          const hm = {
            clipPlane: !1,
            useInstances: !1,
            ...fm
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const fm = new QT(this._eventInfo.defineNames),
              Am = this._prepareEffect(mm, mm, fm, void 0, void 0, hm.useInstances, hm.clipPlane);
            this._onEffectCreatedObservable && (IT.effect = Am, IT.subMesh = null, this._onEffectCreatedObservable.notifyObservers(IT)), Am.isReady() ? Tm && Tm(this) : Am.onCompileObservable.add((() => {
              Tm && Tm(this)
            }))
          })()
        }
        buildUniformLayout() {
          const mm = this._uniformBuffer;
          mm.addUniform("vAlbedoInfos", 2), mm.addUniform("vBaseWeightInfos", 2), mm.addUniform("vBaseDiffuseRoughnessInfos", 2), mm.addUniform("vAmbientInfos", 4), mm.addUniform("vOpacityInfos", 2), mm.addUniform("vEmissiveInfos", 2), mm.addUniform("vLightmapInfos", 2), mm.addUniform("vReflectivityInfos", 3), mm.addUniform("vMicroSurfaceSamplerInfos", 2), mm.addUniform("vBumpInfos", 3), mm.addUniform("albedoMatrix", 16), mm.addUniform("baseWeightMatrix", 16), mm.addUniform("baseDiffuseRoughnessMatrix", 16), mm.addUniform("ambientMatrix", 16), mm.addUniform("opacityMatrix", 16), mm.addUniform("emissiveMatrix", 16), mm.addUniform("lightmapMatrix", 16), mm.addUniform("reflectivityMatrix", 16), mm.addUniform("microSurfaceSamplerMatrix", 16), mm.addUniform("bumpMatrix", 16), mm.addUniform("vTangentSpaceParams", 2), mm.addUniform("vAlbedoColor", 4), mm.addUniform("baseWeight", 1), mm.addUniform("baseDiffuseRoughness", 1), mm.addUniform("vLightingIntensity", 4), mm.addUniform("pointSize", 1), mm.addUniform("vReflectivityColor", 4), mm.addUniform("vEmissiveColor", 3), mm.addUniform("vAmbientColor", 3), mm.addUniform("vDebugMode", 2), mm.addUniform("vMetallicReflectanceFactors", 4), mm.addUniform("vMetallicReflectanceInfos", 2), mm.addUniform("metallicReflectanceMatrix", 16), mm.addUniform("vReflectanceInfos", 2), mm.addUniform("reflectanceMatrix", 16), mm.addUniform("cameraInfo", 4), mm.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Fm.lb)(mm, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(mm, Tm, fm) {
          const hm = this.wG(),
            Am = fm.materialDefines;
          if (!Am) return;
          const am = fm.effect;
          if (!am) return;
          this._activeEffect = am, Tm.getMeshUniformBuffer().bindToEffect(am, "Mesh"), Tm.transferToEffect(mm);
          const xm = hm.dO();
          this._uniformBuffer.bindToEffect(am, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, hm, Tm, mm, this.isFrozen), OT.c.Bind(xm.currentRenderPassId, this._activeEffect, Tm, mm, this);
          const wm = hm.activeCamera;
          wm ? this._uniformBuffer.updateFloat4("cameraInfo", wm.minZ, wm.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const Dm = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Dm[0], Dm[1], Dm[2], Dm[3]), this._eventInfo.subMesh = fm, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Am.OBJECTSPACE_NORMALMAP && (mm.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const im = this._mustRebind(hm, am, fm, Tm.visibility),
            Rm = xm._features.needToAlwaysBindUniformBuffers;
          (0, Fm.f)(Tm, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, ET.c)(this._activeEffect, this._vertexPullingMetadata);
          let pm = null;
          const Em = this._uniformBuffer;
          if (im) {
            if (this.bindViewProjection(am), pm = this._getReflectionTexture(), !Em.useUbo || !this.isFrozen || !Em.isSync || fm._drawWrapper._forceRebindOnNextCall) {
              if (hm.texturesEnabled && (this._albedoTexture && gm.d.DiffuseTextureEnabled && (Em.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, Fm.x)(this._albedoTexture, Em, "albedo")), this._baseWeightTexture && gm.d.BaseWeightTextureEnabled && (Em.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, Fm.x)(this._baseWeightTexture, Em, "baseWeight")), this._baseDiffuseRoughnessTexture && gm.d.BaseDiffuseRoughnessTextureEnabled && (Em.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, Fm.x)(this._baseDiffuseRoughnessTexture, Em, "baseDiffuseRoughness")), this._ambientTexture && gm.d.AmbientTextureEnabled && (Em.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, Fm.x)(this._ambientTexture, Em, "ambient")), this._opacityTexture && gm.d.OpacityTextureEnabled && (Em.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Fm.x)(this._opacityTexture, Em, "opacity")), this._emissiveTexture && gm.d.EmissiveTextureEnabled && (Em.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Fm.x)(this._emissiveTexture, Em, "emissive")), this._lightmapTexture && gm.d.LightmapTextureEnabled && (Em.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Fm.x)(this._lightmapTexture, Em, "lightmap")), gm.d.SpecularTextureEnabled && (this._metallicTexture ? (Em.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, Fm.x)(this._metallicTexture, Em, "reflectivity")) : this._reflectivityTexture && (Em.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, Fm.x)(this._reflectivityTexture, Em, "reflectivity")), this._metallicReflectanceTexture && (Em.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, Fm.x)(this._metallicReflectanceTexture, Em, "metallicReflectance")), this._reflectanceTexture && Am.REFLECTANCE && (Em.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, Fm.x)(this._reflectanceTexture, Em, "reflectance")), this._microSurfaceTexture && (Em.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, Fm.x)(this._microSurfaceTexture, Em, "microSurfaceSampler"))), this._bumpTexture && xm.getCaps().standardDerivatives && gm.d.BumpTextureEnabled && !this._disableBumpMap && (Em.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, Fm.x)(this._bumpTexture, Em, "bump"), hm._mirroredCameraPosition ? Em.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Em.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Fm.k)(hm, Am, Em, this._reflectionColor, pm, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && Em.updateFloat("pointSize", this.pointSize), Am.METALLICWORKFLOW) {
                Lm.e.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, Lm.e.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const mm = this.subSurface?._indexOfRefraction ?? 1.5,
                  Tm = 1;
                Lm.e.Color4[0].b = mm;
                const fm = Math.pow((mm - Tm) / (mm + Tm), 2);
                Lm.e.Color4[0].a = fm, Em.updateDirectColor4("vReflectivityColor", Lm.e.Color4[0]), Em.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else Em.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              Em.updateColor3("vEmissiveColor", gm.d.EmissiveTextureEnabled ? this._emissiveColor : Lm.b.BlackReadOnly), !Am.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? Em.updateColor4("vAlbedoColor", this._albedoColor, 1) : Em.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), Em.updateFloat("baseWeight", this._baseWeight), Em.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * hm.environmentIntensity, this._lightingInfos.w = this._specularIntensity, Em.updateVector4("vLightingIntensity", this._lightingInfos), hm.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), Em.updateColor3("vAmbientColor", this._globalAmbientColor), Em.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            hm.texturesEnabled && (this._albedoTexture && gm.d.DiffuseTextureEnabled && Em.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && gm.d.BaseWeightTextureEnabled && Em.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && gm.d.BaseDiffuseRoughnessTextureEnabled && Em.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && gm.d.AmbientTextureEnabled && Em.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && gm.d.OpacityTextureEnabled && Em.setTexture("opacitySampler", this._opacityTexture), (0, Fm.o)(hm, Am, Em, pm, this.realTimeFiltering), Am.ENVIRONMENTBRDF && Em.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && gm.d.EmissiveTextureEnabled && Em.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && gm.d.LightmapTextureEnabled && Em.setTexture("lightmapSampler", this._lightmapTexture), gm.d.SpecularTextureEnabled && (this._metallicTexture ? Em.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && Em.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && Em.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && Am.REFLECTANCE && Em.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && Em.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && xm.getCaps().standardDerivatives && gm.d.BumpTextureEnabled && !this._disableBumpMap && Em.setTexture("bumpSampler", this._bumpTexture)), this.wG().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Tm) && this.wG().depthPeelingRenderer.bind(am), this._eventInfo.subMesh = fm, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, pT.d)(this._activeEffect, this, hm), this.bindEyePosition(am)
          } else Rm && (this._needToBindSceneUbo = !0);
          !im && this.isFrozen && !Rm || !hm.lightsEnabled || this._disableLighting || (0, Fm.p)(hm, Tm, this._activeEffect, Am, this._maxSimultaneousLights), !im && this.isFrozen || ((hm.fogEnabled && Tm.applyFog && hm.fogMode !== ym.f.FOGMODE_NONE || pm || this.subSurface.refractionTexture || Tm.receiveShadows || Am.PREPASS || Am.CLUSTLIGHT_BATCH) && this.bindView(am), (0, Fm.j)(hm, Tm, this._activeEffect, !0), Am.NUM_MORPH_INFLUENCERS && (0, Fm.s)(Tm, this._activeEffect), Am.BAKED_VERTEX_ANIMATION_TEXTURE && Tm.bakedVertexAnimationManager?.bind(am, Am.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Fm.r)(Am, this._activeEffect, hm)), this._afterBind(Tm, this._activeEffect, fm), Em.update()
        }
        getAnimatables() {
          const mm = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && mm.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && mm.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && mm.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && mm.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && mm.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && mm.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && mm.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? mm.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && mm.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && mm.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && mm.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && mm.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && mm.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && mm.push(this._microSurfaceTexture), mm
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.wG().environmentTexture
        }
        getActiveTextures() {
          const mm = super.getActiveTextures();
          return this._albedoTexture && mm.push(this._albedoTexture), this._baseWeightTexture && mm.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && mm.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && mm.push(this._ambientTexture), this._opacityTexture && mm.push(this._opacityTexture), this._reflectionTexture && mm.push(this._reflectionTexture), this._emissiveTexture && mm.push(this._emissiveTexture), this._reflectivityTexture && mm.push(this._reflectivityTexture), this._metallicTexture && mm.push(this._metallicTexture), this._metallicReflectanceTexture && mm.push(this._metallicReflectanceTexture), this._reflectanceTexture && mm.push(this._reflectanceTexture), this._microSurfaceTexture && mm.push(this._microSurfaceTexture), this._bumpTexture && mm.push(this._bumpTexture), this._lightmapTexture && mm.push(this._lightmapTexture), mm
        }
        hasTexture(mm) {
          return !!super.hasTexture(mm) || (this._albedoTexture === mm || (this._baseWeightTexture === mm || (this._baseDiffuseRoughnessTexture === mm || (this._ambientTexture === mm || (this._opacityTexture === mm || (this._reflectionTexture === mm || (this._emissiveTexture === mm || (this._reflectivityTexture === mm || (this._metallicTexture === mm || (this._metallicReflectanceTexture === mm || (this._reflectanceTexture === mm || (this._microSurfaceTexture === mm || (this._bumpTexture === mm || this._lightmapTexture === mm)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const mm = this.wG().enableSubSurfaceForPrePass();
          return mm && (mm.enabled = !0), !0
        }
        dispose(mm, Tm) {
          this._breakShaderLoadedCheck = !0, Tm && (this._environmentBRDFTexture && this.wG().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(mm, Tm)
        }
      }, Tm = new WeakMap, (() => {
        const Tm = "function" === typeof Symbol && Symbol.metadata ? Object.create(Am[Symbol.metadata] ?? null) : void 0;
        hm = [(0, Zm.c)("_markAllSubMeshesAsMiscDirty")], (0, zm.g)(mm, null, hm, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: mm => "debugMode" in mm,
            get: mm => mm.debugMode,
            set: (mm, Tm) => {
              mm.debugMode = Tm
            }
          },
          metadata: Tm
        }, xm, wm), Tm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tm
        })
      })(), mm.PBRMATERIAL_OPAQUE = am.d.MATERIAL_OPAQUE, mm.PBRMATERIAL_ALPHATEST = am.d.MATERIAL_ALPHATEST, mm.PBRMATERIAL_ALPHABLEND = am.d.MATERIAL_ALPHABLEND, mm.PBRMATERIAL_ALPHATESTANDBLEND = am.d.MATERIAL_ALPHATESTANDBLEND, mm.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, mm.LIGHTFALLOFF_PHYSICAL = 0, mm.LIGHTFALLOFF_GLTF = 1, mm.LIGHTFALLOFF_STANDARD = 2, mm.ForceGLSL = !1, mm._ShaderLoader = new oT.e((() => [Promise.all([fm.e(317), fm.e(328)]).then((() => fm(61608))), Promise.all([fm.e(322), fm.e(318), fm.e(380), fm.e(331), fm.e(379)]).then((() => fm(61625)))]), (() => [Promise.all([fm.e(336), fm.e(338), fm.e(345)]).then((() => fm(61719))), Promise.all([fm.e(336), fm.e(339), fm.e(383), fm.e(349), fm.e(382)]).then((() => fm(61744)))])), mm
    })();
    Object.getOwnPropertyDescriptor(JT.prototype, "decalMap") || Object.defineProperty(JT.prototype, "decalMap", (0, VT.e)("PBRBaseMaterial", "decalMap")), (0, fm(41849).b)();
    var cT = fm(40129);
    var zT = fm(40203),
      ZT = fm(41834),
      kT = fm(39942),
      bT = fm(39956),
      ST = fm(40064);
    let eT = !1;
    const NT = new Lm.c,
      GT = new Lm.c;
    class XT extends ZT.c {
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
      set wrapU(mm) {
        if (this._textures)
          for (let Tm = 0; Tm < this._textures.length; Tm++) this._textures[Tm].wrapU = mm
      }
      set wrapV(mm) {
        if (this._textures)
          for (let Tm = 0; Tm < this._textures.length; Tm++) this._textures[Tm].wrapV = mm
      }
      constructor(mm, Tm, fm, hm, Am, am) {
        const xm = !(!Am || !Am.generateMipMaps) && Am.generateMipMaps,
          wm = !(!Am || !Am.generateDepthTexture) && Am.generateDepthTexture,
          Dm = Am && Am.depthTextureFormat ? Am.depthTextureFormat : 15,
          im = !Am || void 0 === Am.doNotChangeAspectRatio || Am.doNotChangeAspectRatio,
          Rm = !(!Am || !Am.drawOnlyOnFirstAttachmentByDefault) && Am.drawOnlyOnFirstAttachmentByDefault;
        if (super(mm, Tm, hm, xm, im, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), eT || (eT = !0, bT.ThinEngine.prototype.restoreSingleAttachment = function() {
            const mm = this._gl;
            this.bindAttachments([mm.BACK])
          }, bT.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const mm = this._gl;
            this.bindAttachments([mm.COLOR_ATTACHMENT0])
          }, bT.ThinEngine.prototype.buildTextureLayout = function(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const fm = this._gl,
              hm = [];
            if (Tm) hm.push(fm.BACK);
            else
              for (let Am = 0; Am < mm.length; Am++) mm[Am] ? hm.push(fm["COLOR_ATTACHMENT" + Am]) : hm.push(fm.NONE);
            return hm
          }, bT.ThinEngine.prototype.bindAttachments = function(mm) {
            const Tm = this._gl,
              fm = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, fm)
              for (let hm = 0; hm < mm.length; hm++) mm[hm] !== Tm.NONE && fm[hm] && (0, ST.i)(fm[hm].format) && (this._integerMRTAttachmentsMask |= 1 << hm);
            Tm.drawBuffers(mm)
          }, bT.ThinEngine.prototype.clearAttachments = function(mm, Tm, fm, hm) {
            let Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const xm = this._currentRenderTarget?.textures;
            let wm = !1;
            if (fm && mm && xm)
              for (let Dm = 0; Dm < Tm.length; Dm++) {
                const mm = xm[Dm];
                if (Tm[Dm] !== this._gl.NONE && mm && (0, ST.i)(mm.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  wm = !0;
                  break
                }
              }
            if (!wm || !mm || !xm) return this.bindAttachments(Tm), void this.clear(mm, fm, hm, Am, am);
            this.bindAttachments(Tm), this._applyColorWriteState();
            for (let Dm = 0; Dm < Tm.length; Dm++) {
              const fm = xm[Dm];
              if (Tm[Dm] !== this._gl.NONE && fm) {
                let Tm = mm;
                if ((0, ST.i)(fm.format)) {
                  const hm = (0, ST.j)(fm.type);
                  Tm = hm ? NT : GT;
                  const Am = hm ? 255 : 1;
                  Tm.r = Math.round(mm.r * Am), Tm.g = Math.round(mm.g * Am), Tm.b = Math.round(mm.b * Am), Tm.a = Math.round(mm.a * Am)
                }
                this._clearColorAttachment(Dm, Tm, fm.format, fm.type)
              }
            }
            if (hm || Am) {
              const mm = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, hm, Am, am)
              } finally {
                this._integerMRTAttachmentsMask = mm
              }
            }
          }, bT.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              fm = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, mm.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(mm), Tm || this.generateMipMapsMultiFramebuffer(mm), fm && (mm._MSAAFramebuffer && this._bindUnboundFramebuffer(mm._framebuffer), fm()), this._bindUnboundFramebuffer(null)
          }, bT.ThinEngine.prototype.createMultipleRenderTarget = function(mm, Tm) {
            let fm, hm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Am = !1,
              am = !0,
              xm = !1,
              wm = !1,
              Dm = 1,
              im = 1,
              Rm = [],
              pm = [],
              Em = [],
              om = [],
              Om = [],
              Ym = [],
              qm = [],
              jm = [],
              Vm = [],
              Im = !1;
            const Km = this._createHardwareRenderTargetWrapper(!0, !1, mm);
            void 0 !== Tm && (Am = void 0 !== Tm.generateMipMaps && Tm.generateMipMaps, am = void 0 === Tm.generateDepthBuffer || Tm.generateDepthBuffer, xm = void 0 !== Tm.generateStencilBuffer && Tm.generateStencilBuffer, wm = void 0 !== Tm.generateDepthTexture && Tm.generateDepthTexture, Dm = Tm.sxm ?? 1, im = Tm.samples ?? im, Rm = Tm.types || Rm, pm = Tm.samplingModes || pm, Em = Tm.useSRGBBuffers || Em, om = Tm.formats || om, Om = Tm.targetTypes || Om, Ym = Tm.faceIndex || Ym, qm = Tm.layerIndex || qm, jm = Tm.layerCounts || jm, Vm = Tm.labels || Vm, Im = Tm.dontCreateTextures ?? !1, this.zY > 1 && (13 === Tm.depthTextureFormat || 17 === Tm.depthTextureFormat || 16 === Tm.depthTextureFormat || 14 === Tm.depthTextureFormat || 18 === Tm.depthTextureFormat) && (fm = Tm.depthTextureFormat)), void 0 === fm && (fm = xm ? 13 : 14);
            const Qm = this._gl,
              nm = this._currentFramebuffer,
              Jm = Qm.createFramebuffer();
            this._bindUnboundFramebuffer(Jm);
            const cm = mm.width ?? mm,
              zm = mm.height ?? mm,
              Zm = [],
              bm = [],
              Sm = this.zY > 1 && (13 === fm || 17 === fm || 18 === fm);
            Km.label = Tm?.label ?? "MultiRenderTargetWrapper", Km._framebuffer = Jm, Km._generateDepthBuffer = wm || am, Km._generateStencilBuffer = wm ? Sm : xm, Km._depthStencilBuffer = this._setupFramebufferDepthAttachments(Km._generateStencilBuffer, Km._generateDepthBuffer, cm, zm, 1, fm), Km._attachments = bm;
            for (let em = 0; em < Dm; em++) {
              let mm = pm[em] || 3,
                Tm = Rm[em] || 0,
                fm = Em[em] || !1;
              const hm = om[em] || 5,
                am = Om[em] || 3553,
                xm = jm[em] ?? 1;
              (1 !== Tm || this._caps.textureFloatLinearFiltering) && (2 !== Tm || this._caps.textureHalfFloatLinearFiltering) || (mm = 1);
              const wm = this._getSamplingParameters(mm, Am);
              1 !== Tm || this._caps.textureFloat || (Tm = 0, km.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), fm = fm && this._caps.supportSRGBBuffers && (this.zY > 1 || this.isWebGPU);
              const Dm = this.zY > 1,
                im = Qm[Dm ? "COLOR_ATTACHMENT" + em : "COLOR_ATTACHMENT" + em + "_WEBGL"];
              if (bm.push(im), -1 === am || Im) continue;
              const Ym = new kT.d(this, 6);
              Zm[em] = Ym, Qm.activeTexture(Qm["TEXTURE" + em]), Qm.bindTexture(am, Ym._hardwareTexture.underlyingResource), Qm.texParameteri(am, Qm.TEXTURE_MAG_FILTER, wm.mag), Qm.texParameteri(am, Qm.TEXTURE_MIN_FILTER, wm.min), Qm.texParameteri(am, Qm.TEXTURE_WRAP_S, Qm.CLAMP_TO_EDGE), Qm.texParameteri(am, Qm.TEXTURE_WRAP_T, Qm.CLAMP_TO_EDGE);
              const qm = this._getRGBABufferInternalSizedFormat(Tm, hm, fm),
                nm = this._getInternalFormat(hm),
                Jm = this._getWebGLTextureType(Tm);
              if (!Dm || 35866 !== am && 32879 !== am)
                if (34067 === am) {
                  for (let mm = 0; mm < 6; mm++) Qm.texImage2D(Qm.TEXTURE_CUBE_MAP_POSITIVE_X + mm, 0, qm, cm, zm, 0, nm, Jm, null);
                  Ym.isCube = !0
                } else Qm.texImage2D(Qm.TEXTURE_2D, 0, qm, cm, zm, 0, nm, Jm, null);
              else 35866 === am ? Ym.is2DArray = !0 : Ym.is3D = !0, Ym.baseDepth = Ym.depth = xm, Qm.texImage3D(am, 0, qm, cm, zm, xm, 0, nm, Jm, null);
              Am && Qm.generateMipmap(am), this._bindTextureDirectly(am, null), Ym.baseWidth = cm, Ym.baseHeight = zm, Ym.width = cm, Ym.height = zm, Ym.isReady = !0, Ym.samples = 1, Ym.generateMipMaps = Am, Ym.samplingMode = mm, Ym.type = Tm, Ym._useSRGBBuffer = fm, Ym.format = hm, Ym.label = Vm[em] ?? Km.label + "-Texture" + em, this._internalTexturesCache.push(Ym)
            }
            if (wm && this._caps.depthTextureExtension && !Im) {
              const mm = new kT.d(this, 14);
              let Tm = 5,
                hm = Qm.DEPTH_COMPONENT16,
                am = Qm.DEPTH_COMPONENT,
                xm = Qm.UNSIGNED_SHORT,
                wm = Qm.DEPTH_ATTACHMENT;
              this.zY < 2 ? hm = Qm.DEPTH_COMPONENT : 14 === fm ? (Tm = 1, xm = Qm.FLOAT, hm = Qm.DEPTH_COMPONENT32F) : 18 === fm ? (Tm = 0, xm = Qm.FLOAT_32_UNSIGNED_INT_24_8_REV, hm = Qm.DEPTH32F_STENCIL8, am = Qm.DEPTH_STENCIL, wm = Qm.DEPTH_STENCIL_ATTACHMENT) : 16 === fm ? (Tm = 0, xm = Qm.UNSIGNED_INT, hm = Qm.DEPTH_COMPONENT24, wm = Qm.DEPTH_ATTACHMENT) : 13 !== fm && 17 !== fm || (Tm = 12, xm = Qm.UNSIGNED_INT_24_8, hm = Qm.DEPTH24_STENCIL8, am = Qm.DEPTH_STENCIL, wm = Qm.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(Qm.TEXTURE_2D, mm, !0), Qm.texParameteri(Qm.TEXTURE_2D, Qm.TEXTURE_MAG_FILTER, Qm.NEAREST), Qm.texParameteri(Qm.TEXTURE_2D, Qm.TEXTURE_MIN_FILTER, Qm.NEAREST), Qm.texParameteri(Qm.TEXTURE_2D, Qm.TEXTURE_WRAP_S, Qm.CLAMP_TO_EDGE), Qm.texParameteri(Qm.TEXTURE_2D, Qm.TEXTURE_WRAP_T, Qm.CLAMP_TO_EDGE), Qm.texImage2D(Qm.TEXTURE_2D, 0, hm, cm, zm, 0, am, xm, null), Qm.framebufferTexture2D(Qm.FRAMEBUFFER, wm, Qm.TEXTURE_2D, mm._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(Qm.TEXTURE_2D, null), Km._depthStencilTexture = mm, Km._depthStencilTextureWithStencil = Sm, mm.baseWidth = cm, mm.baseHeight = zm, mm.width = cm, mm.height = zm, mm.isReady = !0, mm.samples = 1, mm.generateMipMaps = Am, mm.samplingMode = 1, mm.format = fm, mm.type = Tm, mm.label = Km.label + "-DepthStencil", Zm[Dm] = mm, this._internalTexturesCache.push(mm)
            }
            if (Km.setTextures(Zm), hm && Qm.drawBuffers(bm), this._bindUnboundFramebuffer(nm), Km.setLayerAndFaceIndices(qm, Ym), this.resetTextureCache(), Im) {
              if (im > 1) {
                const mm = Qm.createFramebuffer();
                if (!mm) throw new Error("Unable to create multi sampled framebuffer");
                Km._samples = im, Km._MSAAFramebuffer = mm, Dm > 0 && hm && (this._bindUnboundFramebuffer(mm), Qm.drawBuffers(bm), this._bindUnboundFramebuffer(nm))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(Km, im, hm);
            return Km
          }, bT.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(mm, Tm) {
            let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.zY < 2 || !mm) return 1;
            if (mm.samples === Tm) return Tm;
            const hm = this._gl;
            Tm = Math.min(Tm, this.getCaps().maxMSAASamples), mm._depthStencilBuffer && (hm.deleteRenderbuffer(mm._depthStencilBuffer), mm._depthStencilBuffer = null), mm._MSAAFramebuffer && (hm.deleteFramebuffer(mm._MSAAFramebuffer), mm._MSAAFramebuffer = null);
            const Am = mm._attachments.length;
            for (let xm = 0; xm < Am; xm++) {
              const Tm = mm.textures[xm]._hardwareTexture;
              Tm?.releaseMSAARenderBuffers()
            }
            if (Tm > 1 && "function" === typeof hm.renderbufferStorageMultisample) {
              const am = hm.createFramebuffer();
              if (!am) throw new Error("Unable to create multi sampled framebuffer");
              mm._MSAAFramebuffer = am, this._bindUnboundFramebuffer(am);
              const xm = [];
              for (let fm = 0; fm < Am; fm++) {
                const Am = mm.textures[fm],
                  am = Am._hardwareTexture,
                  wm = hm[this.zY > 1 ? "COLOR_ATTACHMENT" + fm : "COLOR_ATTACHMENT" + fm + "_WEBGL"],
                  Dm = this._createRenderBuffer(Am.width, Am.height, Tm, -1, this._getRGBABufferInternalSizedFormat(Am.type, Am.format, Am._useSRGBBuffer), wm);
                if (!Dm) throw new Error("Unable to create multi sampled framebuffer");
                am.addMSAARenderBuffer(Dm), Am.samples = Tm, xm.push(wm)
              }
              fm && hm.drawBuffers(xm)
            } else this._bindUnboundFramebuffer(mm._framebuffer);
            const am = mm._depthStencilTexture ? mm._depthStencilTexture.format : void 0;
            return mm._depthStencilBuffer = this._setupFramebufferDepthAttachments(mm._generateStencilBuffer, mm._generateDepthBuffer, mm.width, mm.height, Tm, am), this._bindUnboundFramebuffer(null), mm._samples = Tm, Tm
          }, bT.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(mm) {
            const Tm = mm,
              fm = this._gl;
            if (Tm.isMulti)
              for (let hm = 0; hm < Tm._attachments.length; hm++) {
                const mm = Tm.textures[hm];
                !mm?.generateMipMaps || mm?.isCube || mm?.is3D || (this._bindTextureDirectly(fm.TEXTURE_2D, mm, !0), fm.generateMipmap(fm.TEXTURE_2D), this._bindTextureDirectly(fm.TEXTURE_2D, null))
              }
          }, bT.ThinEngine.prototype.resolveMultiFramebuffer = function(mm) {
            const Tm = mm,
              fm = this._gl;
            if (!Tm._MSAAFramebuffer || !Tm.isMulti) return;
            let hm = Tm.resolveMSAAColors ? fm.COLOR_BUFFER_BIT : 0;
            hm |= Tm._generateDepthBuffer && Tm.resolveMSAADepth ? fm.DEPTH_BUFFER_BIT : 0, hm |= Tm._generateStencilBuffer && Tm.resolveMSAAStencil ? fm.STENCIL_BUFFER_BIT : 0;
            const Am = Tm._attachments,
              am = Am.length;
            fm.bindFramebuffer(fm.READ_FRAMEBUFFER, Tm._MSAAFramebuffer), fm.bindFramebuffer(fm.DRAW_FRAMEBUFFER, Tm._framebuffer);
            for (let xm = 0; xm < am; xm++) {
              const mm = Tm.textures[xm];
              for (let Tm = 0; Tm < am; Tm++) Am[Tm] = fm.NONE;
              Am[xm] = fm[this.zY > 1 ? "COLOR_ATTACHMENT" + xm : "COLOR_ATTACHMENT" + xm + "_WEBGL"], fm.readBuffer(Am[xm]), fm.drawBuffers(Am), fm.blitFramebuffer(0, 0, mm.width, mm.height, 0, 0, mm.width, mm.height, hm, fm.NEAREST)
            }
            for (let xm = 0; xm < am; xm++) Am[xm] = fm[this.zY > 1 ? "COLOR_ATTACHMENT" + xm : "COLOR_ATTACHMENT" + xm + "_WEBGL"];
            fm.drawBuffers(Am), fm.bindFramebuffer(this._gl.FRAMEBUFFER, Tm._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = am;
        const pm = [],
          Em = [],
          om = [],
          Om = [],
          Ym = [],
          qm = [],
          jm = [],
          Vm = [];
        this._initTypes(fm, pm, Em, om, Om, Ym, qm, jm, Vm, Am);
        const Im = !Am || void 0 === Am.generateDepthBuffer || Am.generateDepthBuffer,
          Km = !(!Am || void 0 === Am.generateStencilBuffer) && Am.generateStencilBuffer,
          Qm = Am && Am.samples ? Am.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: Em,
          generateMipMaps: xm,
          generateDepthBuffer: Im,
          generateStencilBuffer: Km,
          generateDepthTexture: wm,
          depthTextureFormat: Dm,
          types: pm,
          sxm: fm,
          useSRGBBuffers: om,
          samples: Qm,
          formats: Om,
          targetTypes: Ym,
          faceIndex: qm,
          layerIndex: jm,
          layerCounts: Vm,
          labels: am,
          label: mm
        }, this._count = fm, this._drawOnlyOnFirstAttachmentByDefault = Rm, fm > 0 && (this._createInternalTextures(), this._createTextures(am))
      }
      _initTypes(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im) {
        for (let Rm = 0; Rm < mm; Rm++) im && im.types && void 0 !== im.types[Rm] ? Tm.push(im.types[Rm]) : Tm.push(im && im.defaultType ? im.defaultType : 0), im && im.samplingModes && void 0 !== im.samplingModes[Rm] ? fm.push(im.samplingModes[Rm]) : fm.push(Sm.f.BILINEAR_SAMPLINGMODE), im && im.useSRGBBuffers && void 0 !== im.useSRGBBuffers[Rm] ? hm.push(im.useSRGBBuffers[Rm]) : hm.push(!1), im && im.formats && void 0 !== im.formats[Rm] ? Am.push(im.formats[Rm]) : Am.push(5), im && im.targetTypes && void 0 !== im.targetTypes[Rm] ? am.push(im.targetTypes[Rm]) : am.push(3553), im && im.faceIndex && void 0 !== im.faceIndex[Rm] ? xm.push(im.faceIndex[Rm]) : xm.push(0), im && im.layerIndex && void 0 !== im.layerIndex[Rm] ? wm.push(im.layerIndex[Rm]) : wm.push(0), im && im.layerCounts && void 0 !== im.layerCounts[Rm] ? Dm.push(im.layerCounts[Rm]) : Dm.push(1)
      }
      _createInternaTextureIndexMapping() {
        const mm = {},
          Tm = [];
        if (!this._renderTarget) return Tm;
        const fm = this._renderTarget.textures;
        for (let hm = 0; hm < fm.length; hm++) {
          const Am = fm[hm];
          if (!Am) continue;
          const am = mm[Am.uniqueId];
          void 0 !== am ? Tm[hm] = am : mm[Am.uniqueId] = hm
        }
        return Tm
      }
      _rebuild() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || mm) return;
        const hm = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), Tm && (this._releaseTextures(), this._createTextures(fm));
        const Am = this._renderTarget.textures;
        for (let am = 0; am < Am.length; am++) {
          const mm = this._textures[am];
          void 0 !== hm[am] && this._renderTarget.setTexture(Am[hm[am]], am), mm._texture = Am[am], mm._texture && (mm._noMipmap = !mm._texture.useMipMaps, mm._useSRGBBuffer = mm._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let mm = 0; mm < this._textures.length; mm++) this._textures[mm]._texture = null, this._textures[mm].dispose()
      }
      _createTextures(mm) {
        const Tm = this._renderTarget.textures;
        this._textures = [];
        for (let fm = 0; fm < Tm.length; fm++) {
          const hm = new Sm.f(null, this.wG());
          mm?.[fm] && (hm.name = mm[fm]), hm._texture = Tm[fm], hm._texture && (hm._noMipmap = !hm._texture.useMipMaps, hm._useSRGBBuffer = hm._texture._useSRGBBuffer), this._textures.push(hm)
        }
      }
      setInternalTexture(mm, Tm) {
        let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === Tm && (this._texture = mm), this.renderTarget.setTexture(mm, Tm, fm), this.textures[Tm] || (this.textures[Tm] = new Sm.f(null, this.wG()), this.textures[Tm].name = this._textureNames?.[Tm] ?? this.textures[Tm].name), this.textures[Tm]._texture = mm, this.textures[Tm]._noMipmap = !mm.useMipMaps, this.textures[Tm]._useSRGBBuffer = mm._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[Tm] = mm.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[Tm] = mm.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[Tm] = mm._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[Tm])) {
          let fm;
          fm = mm.is2DArray ? 35866 : mm.isCube ? 34067 : mm.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[Tm] = fm
        }
      }
      setLayerAndFaceIndex(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[mm] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[mm] = Tm), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[mm] = fm), this.renderTarget.setLayerAndFaceIndex(mm, Tm, fm))
      }
      setLayerAndFaceIndices(mm, Tm) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = mm, this._multiRenderTargetOptions.faceIndex = Tm, this.renderTarget.setLayerAndFaceIndices(mm, Tm))
      }
      get samples() {
        return this._samples
      }
      set samples(mm) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(mm) : this._samples = mm
      }
      resize(mm) {
        this._processSizeParameter(mm), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(mm, Tm, fm) {
        this._multiRenderTargetOptions.sxm = mm, this._count = mm;
        const hm = [],
          Am = [],
          am = [],
          xm = [],
          wm = [],
          Dm = [],
          im = [],
          Rm = [];
        this._textureNames = fm, this._initTypes(mm, hm, Am, am, xm, wm, Dm, im, Rm, Tm), this._multiRenderTargetOptions.types = hm, this._multiRenderTargetOptions.samplingModes = Am, this._multiRenderTargetOptions.useSRGBBuffers = am, this._multiRenderTargetOptions.formats = xm, this._multiRenderTargetOptions.targetTypes = wm, this._multiRenderTargetOptions.faceIndex = Dm, this._multiRenderTargetOptions.layerIndex = im, this._multiRenderTargetOptions.layerCounts = Rm, this._multiRenderTargetOptions.labels = fm, this._rebuild(!1, !0, fm)
      }
      _unbindFrameBuffer(mm, Tm) {
        this._renderTarget && mm.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Tm)
        }))
      }
      dispose() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), mm ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const mm = this._renderTarget?.textures;
        if (mm) {
          for (let Tm = mm.length - 1; Tm >= 0; Tm--) this._textures[Tm]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var PT = fm(40274);
    class HT {
      constructor(mm) {
        this.name = PT.c.NAME_GEOMETRYBUFFERRENDERER, this.Aq = mm
      }
      register() {
        this.Aq._gatherRenderTargetsStage.registerStep(PT.c.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(mm) {
        this.Aq._geometryBufferRenderer && mm.push(this.Aq._geometryBufferRenderer.getGBuffer())
      }
    }
    let yT = !1;
    var CT;
    ! function(mm) {
      mm[mm.Small = 0] = "Small", mm[mm.Medium = 1] = "Medium", mm[mm.Large = 2] = "Large", mm[mm.ExtraLarge = 3] = "ExtraLarge"
    }(CT || (CT = {}));
    const rT = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      sT = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class lT {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(mm) {
        if (mm && this._enableMeshBlendTag && !this._scene.dO().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = mm
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(mm) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = mm, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(mm, Tm) {
        mm === lT.POSITION_TEXTURE_TYPE ? (this._positionIndex = Tm, this._enablePosition = !0) : mm === lT.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = Tm, this._enableVelocity = !0) : mm === lT.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = Tm, this._enableVelocityLinear = !0) : mm === lT.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = Tm, this._enableReflectivity = !0) : mm === lT.DEPTH_TEXTURE_TYPE ? (this._depthIndex = Tm, this._enableDepth = !0) : mm === lT.NORMAL_TEXTURE_TYPE ? (this._normalIndex = Tm, this._enableNormal = !0) : mm === lT.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = Tm, this._enableScreenspaceDepth = !0) : mm === lT.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = Tm, this._enableIrradiance = !0) : mm === lT.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = Tm, this._enableObjectId = !0) : mm === lT.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = Tm, this._enableMeshBlendTag = !0)
      }
      _setAttachments(mm) {
        this._attachmentsFromPrePass = mm
      }
      _linkInternalTexture(mm) {
        this._multiRenderTarget.setInternalTexture(mm, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(mm) {
        this._multiRenderTarget.renderList = mm
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(mm) {
        switch (mm) {
          case lT.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case lT.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case lT.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case lT.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case lT.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case lT.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case lT.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case lT.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case lT.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case lT.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(mm) {
        this._enableDepth = mm, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(mm) {
        this._enableNormal = mm, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(mm) {
        this._enablePosition = mm, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(mm) {
        this._enableVelocity = mm, mm || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = mm
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(mm) {
        this._enableVelocityLinear = mm, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(mm) {
        this._enableReflectivity = mm, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(mm) {
        this._enableScreenspaceDepth = mm, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(mm) {
        this._enableIrradiance = mm, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(mm) {
        if (mm && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (mm && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (mm && !this._enableObjectId && !this._linkedWithPrePass) {
          const mm = this._scene.dO(),
            Tm = Math.min(mm.getCaps().maxDrawBuffers ?? 1, 8),
            fm = this._assignRenderTargetIndices()[0] + 1;
          if (mm.getCaps().drawBuffersExtension && fm > Tm) throw new Error(`GeometryBufferRenderer: ${fm} color attachments were requested, but this engine supports at most ${Tm}`)
        }
        this._enableObjectId = mm, mm || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(mm) {
        if (this._enableMeshBlendTag !== mm) {
          if (mm) {
            const mm = this._scene.dO();
            if (! function(mm) {
                return "NATIVE" !== mm.shaderPlatformName && (mm.isWebGPU || 2 === mm.zY)
              }(mm)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !mm.isWebGPU && !mm.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const Tm = Math.min(mm.getCaps().maxDrawBuffers ?? 1, 8),
                fm = this._assignRenderTargetIndices()[0] + 1;
              if (mm.getCaps().drawBuffersExtension && fm > Tm) throw new Error(`GeometryBufferRenderer: ${fm} color attachments were requested, but this engine supports at most ${Tm}`)
            }
          }
          this._enableMeshBlendTag = mm, mm || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get Aq() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          hm = arguments.length > 3 ? arguments[3] : void 0;
        var Am;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new Lm.c(0, 0, 0, 0), this._clearDepthColor = new Lm.c(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = mm, this._ratioOrDimensions = Tm, this._useUbo = mm.dO().supportsUniformBuffers, this._depthFormat = fm, this._textureTypesAndFormats = hm || {}, this._initShaderSourceAsync(), Am = lT, yT || (yT = !0, Object.defineProperty(ym.f.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(mm) {
            mm && mm.isSupported && (this._geometryBufferRenderer = mm)
          },
          enumerable: !0,
          configurable: !0
        }), ym.f.prototype.enableGeometryBufferRenderer = function() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            fm = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new Am(this, mm, Tm, fm), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, ym.f.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, Am._SceneComponentInitialization = mm => {
          let Tm = mm._getComponent(PT.c.NAME_GEOMETRYBUFFERRENDERER);
          Tm || (Tm = new HT(mm), mm.vfm(Tm))
        }), lT._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.dO().isWebGPU && !lT.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([fm.e(337).then((() => fm(61936))), Promise.all([fm.e(336), fm.e(348)]).then((() => fm(61942)))])) : await Promise.all([fm.e(320).then((() => fm(61951))), fm.e(319).then((() => fm(61953)))]), this._shadersLoaded = !0
      }
      isReady(mm, Tm) {
        if (!this._shadersLoaded) return !1;
        const fm = mm.TY();
        if (fm && fm.disableDepthWrite) return !1;
        if (function(mm) {
            return mm._isGaussianSplatting || "GaussianSplattingMesh" === (Tm = mm.getClassName()) || "GaussianSplattingStream" === Tm;
            var Tm
          }(mm.getMesh())) return !1;
        const hm = [],
          Am = [rm.m.PositionKind],
          am = mm.getMesh();
        am.isVerticesDataPresent(rm.m.NormalKind) && (hm.push("#define HAS_NORMAL_ATTRIBUTE"), Am.push(rm.m.NormalKind));
        let xm = !1,
          wm = !1;
        if (fm) {
          let mm = !1;
          if (fm.needAlphaTestingForMesh(am) && fm.getAlphaTestTexture() && (hm.push("#define ALPHATEST"), hm.push(`#define ALPHATEST_UV${fm.getAlphaTestTexture().coordinatesIndex+1}`), mm = !0), (fm.bumpTexture || fm.normalTexture || fm.geometryNormalTexture) && gm.d.BumpTextureEnabled) {
            const Tm = fm.bumpTexture || fm.normalTexture || fm.geometryNormalTexture;
            hm.push("#define BUMP"), hm.push(`#define BUMP_UV${Tm.coordinatesIndex+1}`), mm = !0
          }
          if (this._enableReflectivity) {
            let Tm = !1;
            if ("PBRMetallicRoughnessMaterial" === fm.getClassName()) fm.metallicRoughnessTexture && (hm.push("#define ORMTEXTURE"), hm.push(`#define REFLECTIVITY_UV${fm.metallicRoughnessTexture.coordinatesIndex+1}`), hm.push("#define METALLICWORKFLOW"), mm = !0, Tm = !0), null != fm.metallic && (hm.push("#define METALLIC"), hm.push("#define METALLICWORKFLOW"), Tm = !0), null != fm.roughness && (hm.push("#define ROUGHNESS"), hm.push("#define METALLICWORKFLOW"), Tm = !0), Tm && (fm.baseTexture && (hm.push("#define ALBEDOTEXTURE"), hm.push(`#define ALBEDO_UV${fm.baseTexture.coordinatesIndex+1}`), fm.baseTexture.gammaSpace && hm.push("#define GAMMAALBEDO"), mm = !0), fm.baseColor && hm.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === fm.getClassName()) fm.specularGlossinessTexture ? (hm.push("#define SPECULARGLOSSINESSTEXTURE"), hm.push(`#define REFLECTIVITY_UV${fm.specularGlossinessTexture.coordinatesIndex+1}`), mm = !0, fm.specularGlossinessTexture.gammaSpace && hm.push("#define GAMMAREFLECTIVITYTEXTURE")) : fm.specularColor && hm.push("#define REFLECTIVITYCOLOR"), null != fm.glossiness && hm.push("#define GLOSSINESS");
            else if ("PBRMaterial" === fm.getClassName()) fm.metallicTexture && (hm.push("#define ORMTEXTURE"), hm.push(`#define REFLECTIVITY_UV${fm.metallicTexture.coordinatesIndex+1}`), hm.push("#define METALLICWORKFLOW"), mm = !0, Tm = !0), null != fm.metallic && (hm.push("#define METALLIC"), hm.push("#define METALLICWORKFLOW"), Tm = !0), null != fm.roughness && (hm.push("#define ROUGHNESS"), hm.push("#define METALLICWORKFLOW"), Tm = !0), Tm ? (fm.albedoTexture && (hm.push("#define ALBEDOTEXTURE"), hm.push(`#define ALBEDO_UV${fm.albedoTexture.coordinatesIndex+1}`), fm.albedoTexture.gammaSpace && hm.push("#define GAMMAALBEDO"), mm = !0), fm.albedoColor && hm.push("#define ALBEDOCOLOR")) : (fm.reflectivityTexture ? (hm.push("#define SPECULARGLOSSINESSTEXTURE"), hm.push(`#define REFLECTIVITY_UV${fm.reflectivityTexture.coordinatesIndex+1}`), fm.reflectivityTexture.gammaSpace && hm.push("#define GAMMAREFLECTIVITYTEXTURE"), mm = !0) : fm.reflectivityColor && hm.push("#define REFLECTIVITYCOLOR"), null != fm.microSurface && hm.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === fm.getClassName()) fm.specularTexture && (hm.push("#define REFLECTIVITYTEXTURE"), hm.push(`#define REFLECTIVITY_UV${fm.specularTexture.coordinatesIndex+1}`), fm.specularTexture.gammaSpace && hm.push("#define GAMMAREFLECTIVITYTEXTURE"), mm = !0), fm.specularColor && hm.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === fm.getClassName()) {
              const Tm = fm;
              hm.push("#define METALLIC"), hm.push("#define ROUGHNESS"), Tm._useRoughnessFromMetallicTextureGreen && Tm.baseMetalnessTexture ? (hm.push("#define ORMTEXTURE"), hm.push(`#define REFLECTIVITY_UV${Tm.baseMetalnessTexture.coordinatesIndex+1}`), mm = !0) : Tm.baseMetalnessTexture ? (hm.push("#define METALLIC_TEXTURE"), hm.push(`#define METALLIC_UV${Tm.baseMetalnessTexture.coordinatesIndex+1}`), mm = !0) : Tm.specularRoughnessTexture && (hm.push("#define ROUGHNESS_TEXTURE"), hm.push(`#define ROUGHNESS_UV${Tm.specularRoughnessTexture.coordinatesIndex+1}`), mm = !0), Tm.baseColorTexture && (hm.push("#define ALBEDOTEXTURE"), hm.push(`#define ALBEDO_UV${Tm.baseColorTexture.coordinatesIndex+1}`), Tm.baseColorTexture.gammaSpace && hm.push("#define GAMMAALBEDO"), mm = !0), Tm.baseColor && hm.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (hm.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === fm.getClassName())) {
            const Tm = fm;
            Tm.subsurfaceWeight > 0 && Tm.subsurfaceWeightTexture && (hm.push("#define SUBSURFACE_WEIGHT"), hm.push(`#define SUBSURFACEWEIGHT_UV${Tm.subsurfaceWeightTexture.coordinatesIndex+1}`), mm = !0), Tm.transmissionWeight > 0 && Tm.transmissionWeightTexture && (hm.push("#define TRANSMISSION_WEIGHT"), hm.push(`#define TRANSMISSIONWEIGHT_UV${Tm.transmissionWeightTexture.coordinatesIndex+1}`), mm = !0)
          }
          mm && (hm.push("#define NEED_UV"), am.isVerticesDataPresent(rm.m.UVKind) && (Am.push(rm.m.UVKind), hm.push("#define UV1"), xm = !0), am.isVerticesDataPresent(rm.m.UV2Kind) && (Am.push(rm.m.UV2Kind), hm.push("#define UV2"), wm = !0))
        }
        if (this._enableDepth && (hm.push("#define DEPTH"), hm.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (hm.push("#define NORMAL"), hm.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (hm.push("#define POSITION"), hm.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (hm.push("#define VELOCITY"), hm.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(am) && hm.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (hm.push("#define VELOCITY_LINEAR"), hm.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(am) && hm.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (hm.push("#define REFLECTIVITY"), hm.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (hm.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), hm.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          hm.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), hm.push("#define IRRADIANCE");
          const mm = this._scene;
          if (mm.environmentTexture) {
            const Tm = {};
            let Am = !1,
              am = 0;
            "OpenPBRMaterial" !== fm.getClassName() && "StandardMaterial" !== fm.getClassName() && "PBRMetallicRoughnessMaterial" !== fm.getClassName() && "PBRSpecularGlossinessMaterial" !== fm.getClassName() && "PBRMaterial" !== fm.getClassName() || (Am = !!fm.realtimeFiltering, am = fm.realtimeFilteringQuality || 0), (0, Fm.V)(mm, mm.environmentTexture, Tm, Am, am, !0);
            for (const mm in Tm) Tm[mm] && hm.push("#define " + mm);
            Tm.USEIRRADIANCEMAP || hm.push("#define SPHERICAL_HARMONICS");
            const xm = mm.postProcessRenderPipelineManager.supportedPipelines.find((mm => "IBLShadowsRenderPipeline" === mm.getClassName()));
            if (xm) {
              const mm = xm;
              mm._getAccumulatedTexture() && (hm.push("#define IBL_SHADOW_TEXTURE"), mm.coloredShadows && hm.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (hm.push("#define OBJECT_ID"), hm.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (hm.push("#define MESH_BLEND_TAG"), hm.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && hm.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && hm.push("#define ENCODE_NORMAL"), am.useBones && am.computeBonesUsingShaders && am.skeleton ? (Am.push(rm.m.MatricesIndicesKind), Am.push(rm.m.MatricesWeightsKind), am.numBoneInfluencers > 4 && (Am.push(rm.m.MatricesIndicesExtraKind), Am.push(rm.m.MatricesWeightsExtraKind)), hm.push("#define NUM_BONE_INFLUENCERS " + am.numBoneInfluencers), hm.push("#define BONETEXTURE " + am.skeleton.isUsingTextureForMatrices), hm.push("#define BonesPerMesh " + (am.skeleton.bones.length + 1))) : (hm.push("#define NUM_BONE_INFLUENCERS 0"), hm.push("#define BONETEXTURE false"), hm.push("#define BonesPerMesh 0"));
        const Dm = am.morphTargetManager ? (0, Fm.P)(am.morphTargetManager, hm, Am, am, !0, !0, !1, xm, wm, !1) : 0;
        Tm && (hm.push("#define INSTANCES"), (0, Fm.ub)(Am, this._enableVelocity || this._enableVelocityLinear), mm.getRenderingMesh().hasThinInstances && hm.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? hm.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : hm.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, pT.k)(fm, this._scene, hm);
        const im = this._scene.dO(),
          Rm = mm._getDrawWrapper(void 0, !0),
          pm = Rm.defines,
          Em = hm.join("\n");
        return pm !== Em && Rm.setEffect(im.createEffect("geometry", {
          attributes: Am,
          uniformsNames: sT,
          samplers: rT,
          defines: Em,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: Dm
          },
          shaderLanguage: this.shaderLanguage
        }, im), Em), Rm.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(mm) {
        if (this._enableObjectId && 1 !== mm) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== mm) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = mm
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.dO().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.Aq.dO()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.Aq.dO().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const mm = [],
          Tm = [];
        let fm = 0;
        return this._enableDepth && (this._depthIndex = fm, fm++, mm.push("gBuffer_Depth"), Tm.push(this._textureTypesAndFormats[lT.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = fm, fm++, mm.push("gBuffer_Normal"), Tm.push(this._textureTypesAndFormats[lT.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = fm, fm++, mm.push("gBuffer_Position"), Tm.push(this._textureTypesAndFormats[lT.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = fm, fm++, mm.push("gBuffer_Velocity"), Tm.push(this._textureTypesAndFormats[lT.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = fm, fm++, mm.push("gBuffer_VelocityLinear"), Tm.push(this._textureTypesAndFormats[lT.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = fm, fm++, mm.push("gBuffer_Reflectivity"), Tm.push(this._textureTypesAndFormats[lT.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = fm, fm++, mm.push("gBuffer_ScreenspaceDepth"), Tm.push(this._textureTypesAndFormats[lT.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = fm, fm++, mm.push("gBuffer_Irradiance"), Tm.push(this._textureTypesAndFormats[lT.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = fm, fm++, mm.push("gBuffer_ObjectId"), Tm.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = fm, fm++, mm.push("gBuffer_MeshBlendTag"), Tm.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [fm, mm, Tm]
      }
      _createRenderTargets() {
        const mm = this._scene.dO(),
          [Tm, fm, hm] = this._assignRenderTargetIndices(),
          Am = Math.min(mm.getCaps().maxDrawBuffers ?? 1, 8);
        if (mm.getCaps().drawBuffersExtension && Tm > Am) throw new Error(`GeometryBufferRenderer: ${Tm} color attachments were requested, but this engine supports at most ${Am}`);
        let xm = 0;
        mm._caps.textureFloat && mm._caps.textureFloatLinearFiltering ? xm = 1 : mm._caps.textureHalfFloat && mm._caps.textureHalfFloatLinearFiltering && (xm = 2);
        const wm = this._getRenderTargetDimensions(),
          Dm = [],
          im = [],
          Rm = [];
        for (const am of hm) am ? (Dm.push(am.textureType), im.push(am.textureFormat), Rm.push(am.samplingMode ?? 2)) : (Dm.push(xm), im.push(5), Rm.push(2));
        if (this._normalsAreUnsigned = 11 === Dm[lT.NORMAL_TEXTURE_TYPE] || 13 === Dm[lT.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new XT("gBuffer", wm, Tm, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: Dm,
            formats: im,
            samplingModes: Rm,
            depthTextureFormat: this._depthFormat
          }, fm.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = Sm.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = Sm.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const pm = [!0],
          Em = [!1],
          om = [!0];
        for (let am = 1; am < Tm; ++am) pm.push(!0), om.push(!1), Em.push(!0);
        const Om = mm.buildTextureLayout(pm),
          Ym = mm.buildTextureLayout(Em),
          qm = mm.buildTextureLayout(om);
        this._multiRenderTarget.onClearObservable.add((mm => {
          const Tm = this.useSpecificClearForDepthTexture ? Ym : Om;
          mm.clearAttachments(this._clearColor, Tm, !0, !0, !0), this.useSpecificClearForDepthTexture && mm.clearAttachments(this._clearDepthColor, qm, !0, !1, !1), mm.bindAttachments(Om)
        })), this._resizeObserver = mm.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const jm = mm => {
          const Tm = mm.getRenderingMesh(),
            fm = mm.getEffectiveMesh(),
            hm = this._scene,
            Am = hm.dO(),
            xm = mm.TY();
          if (!xm) return;
          if (fm._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[fm.uniqueId] && (this._previousTransformationMatrices[fm.uniqueId] = {
              oE: Cm.e.Identity(),
              viewProjection: hm.getTransformMatrix()
            }, Tm.skeleton)) {
            const mm = Tm.skeleton.getTransformMatrices(Tm);
            this._previousBonesTransformationMatrices[Tm.uniqueId] = this._copyBonesTransformationMatrices(mm, new Float32Array(mm.length))
          }
          const wm = Tm._getInstancesRenderList(mm._id, !!mm.getReplacementMesh());
          if (wm.mustReturn) return;
          const Dm = Am.getCaps().instancedArrays && (null !== wm.visibleInstances[mm._id] || Tm.hasThinInstances),
            im = fm.getWorldMatrix();
          if (this.isReady(mm, Dm)) {
            const Rm = mm._getDrawWrapper();
            if (!Rm) return;
            const pm = Rm.effect;
            let Em;
            Am.enableEffect(Rm), Dm || Tm._bind(mm, pm, xm.fillMode), this._useUbo ? ((0, Fm.v)(pm, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (pm.setMatrix("viewProjection", hm.getTransformMatrix()), pm.setMatrix("view", hm.getViewMatrix()), this._scene.bindEyePosition(pm, "vEyePosition"));
            if (Tm._instanceDataStorage.isFrozen || !xm.backFaceCulling && null === xm.sideOrientation) Em = Tm._effectiveSideOrientation;
            else {
              const mm = fm._getWorldMatrixDeterminant();
              Em = xm._getEffectiveOrientation(Tm), mm < 0 && (Em = Em === am.d.ClockWiseSideOrientation ? am.d.CounterClockWiseSideOrientation : am.d.ClockWiseSideOrientation)
            }
            if (xm._preBind(Rm, Em), xm.needAlphaTestingForMesh(fm)) {
              const mm = xm.getAlphaTestTexture();
              mm && (pm.setTexture("diffuseSampler", mm), pm.setMatrix("diffuseMatrix", mm.getTextureMatrix()), pm.setFloat("alphaCutOff", xm.alphaCutOff ?? .4))
            }
            if ((xm.bumpTexture || xm.normalTexture || xm.geometryNormalTexture) && hm.dO().getCaps().standardDerivatives && gm.d.BumpTextureEnabled) {
              const mm = xm.bumpTexture || xm.normalTexture || xm.geometryNormalTexture;
              pm.setFloat3("vBumpInfos", mm.coordinatesIndex, 1 / mm.level, xm.parallaxScaleBias), pm.setMatrix("bumpMatrix", mm.getTextureMatrix()), pm.setTexture("bumpSampler", mm), pm.setFloat2("vTangentSpaceParams", xm.invertNormalMapX ? -1 : 1, xm.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === xm.getClassName()) null !== xm.metallicRoughnessTexture && (pm.setTexture("reflectivitySampler", xm.metallicRoughnessTexture), pm.setMatrix("reflectivityMatrix", xm.metallicRoughnessTexture.getTextureMatrix())), null !== xm.metallic && pm.setFloat("metallic", xm.metallic), null !== xm.roughness && pm.setFloat("glossiness", 1 - xm.roughness), null !== xm.baseTexture && (pm.setTexture("albedoSampler", xm.baseTexture), pm.setMatrix("albedoMatrix", xm.baseTexture.getTextureMatrix())), null !== xm.baseColor && pm.setColor3("albedoColor", xm.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === xm.getClassName()) null !== xm.specularGlossinessTexture ? (pm.setTexture("reflectivitySampler", xm.specularGlossinessTexture), pm.setMatrix("reflectivityMatrix", xm.specularGlossinessTexture.getTextureMatrix())) : null !== xm.specularColor && pm.setColor3("reflectivityColor", xm.specularColor), null !== xm.glossiness && pm.setFloat("glossiness", xm.glossiness);
            else if ("PBRMaterial" === xm.getClassName()) null !== xm.metallicTexture && (pm.setTexture("reflectivitySampler", xm.metallicTexture), pm.setMatrix("reflectivityMatrix", xm.metallicTexture.getTextureMatrix())), null !== xm.metallic && pm.setFloat("metallic", xm.metallic), null !== xm.roughness && pm.setFloat("glossiness", 1 - xm.roughness), null !== xm.roughness || null !== xm.metallic || null !== xm.metallicTexture ? (null !== xm.albedoTexture && (pm.setTexture("albedoSampler", xm.albedoTexture), pm.setMatrix("albedoMatrix", xm.albedoTexture.getTextureMatrix())), null !== xm.albedoColor && pm.setColor3("albedoColor", xm.albedoColor)) : (null !== xm.reflectivityTexture ? (pm.setTexture("reflectivitySampler", xm.reflectivityTexture), pm.setMatrix("reflectivityMatrix", xm.reflectivityTexture.getTextureMatrix())) : null !== xm.reflectivityColor && pm.setColor3("reflectivityColor", xm.reflectivityColor), null !== xm.microSurface && pm.setFloat("glossiness", xm.microSurface));
            else if ("StandardMaterial" === xm.getClassName()) null !== xm.specularTexture && (pm.setTexture("reflectivitySampler", xm.specularTexture), pm.setMatrix("reflectivityMatrix", xm.specularTexture.getTextureMatrix())), null !== xm.specularColor && pm.setColor3("reflectivityColor", xm.specularColor);
            else if ("OpenPBRMaterial" === xm.getClassName()) {
              const mm = xm;
              mm._useRoughnessFromMetallicTextureGreen && mm.baseMetalnessTexture ? (pm.setTexture("reflectivitySampler", mm.baseMetalnessTexture), pm.setMatrix("reflectivityMatrix", mm.baseMetalnessTexture.getTextureMatrix())) : mm.baseMetalnessTexture ? (pm.setTexture("metallicSampler", mm.baseMetalnessTexture), pm.setMatrix("metallicMatrix", mm.baseMetalnessTexture.getTextureMatrix())) : mm.specularRoughnessTexture && (pm.setTexture("roughnessSampler", mm.specularRoughnessTexture), pm.setMatrix("roughnessMatrix", mm.specularRoughnessTexture.getTextureMatrix())), pm.setFloat("metallic", mm.baseMetalness), pm.setFloat("glossiness", 1 - mm.specularRoughness), null !== mm.baseColorTexture && (pm.setTexture("albedoSampler", mm.baseColorTexture), pm.setMatrix("albedoMatrix", mm.baseColorTexture.getTextureMatrix())), null !== mm.baseColor && pm.setColor3("albedoColor", mm.baseColor)
            }
            if (this._enableIrradiance && hm.environmentTexture) {
              const mm = hm.environmentTexture,
                Tm = hm.postProcessRenderPipelineManager.supportedPipelines.find((mm => "IBLShadowsRenderPipeline" === mm.getClassName()));
              if (Tm) {
                const mm = Tm._getAccumulatedTexture();
                mm && (pm.setTexture("iblShadowSampler", mm), pm.setFloat2("shadowTextureSize", mm.getSize().width, mm.getSize().height))
              }
              if (pm.setMatrix("reflectionMatrix", mm.getReflectionTextureMatrix()), pm.setFloat2("vReflectionInfos", mm.level * hm.iblIntensity, 0), pm.setTexture("reflectionSampler", mm), mm.irradianceTexture && (pm.setTexture("irradianceSampler", mm.irradianceTexture), mm.irradianceTexture._dominantDirection && pm.setVector3("vReflectionDominantDirection", mm.irradianceTexture._dominantDirection)), mm.sphericalPolynomial) {
                const Tm = mm.sphericalPolynomial;
                if (Tm.preScaledHarmonics) {
                  const mm = Tm.preScaledHarmonics;
                  pm.setVector3("vSphericalL00", mm.l00), pm.setVector3("vSphericalL1_1", mm.l1_1), pm.setVector3("vSphericalL10", mm.l10), pm.setVector3("vSphericalL11", mm.l11), pm.setVector3("vSphericalL2_2", mm.l2_2), pm.setVector3("vSphericalL2_1", mm.l2_1), pm.setVector3("vSphericalL20", mm.l20), pm.setVector3("vSphericalL21", mm.l21), pm.setVector3("vSphericalL22", mm.l22)
                } else pm.setFloat3("vSphericalX", Tm.x.x, Tm.x.y, Tm.x.z), pm.setFloat3("vSphericalY", Tm.y.x, Tm.y.y, Tm.y.z), pm.setFloat3("vSphericalZ", Tm.z.x, Tm.z.y, Tm.z.z), pm.setFloat3("vSphericalXX_ZZ", Tm.xx.x - Tm.zz.x, Tm.xx.y - Tm.zz.y, Tm.xx.z - Tm.zz.z), pm.setFloat3("vSphericalYY_ZZ", Tm.yy.x - Tm.zz.x, Tm.yy.y - Tm.zz.y, Tm.yy.z - Tm.zz.z), pm.setFloat3("vSphericalZZ", Tm.zz.x, Tm.zz.y, Tm.zz.z), pm.setFloat3("vSphericalXY", Tm.xy.x, Tm.xy.y, Tm.xy.z), pm.setFloat3("vSphericalYZ", Tm.yz.x, Tm.yz.y, Tm.yz.z), pm.setFloat3("vSphericalZX", Tm.zx.x, Tm.zx.y, Tm.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === xm.getClassName()) {
                const mm = xm;
                pm.setFloat("vSubsurfaceWeight", mm.subsurfaceWeight), mm.subsurfaceWeightTexture && (pm.setTexture("subsurfaceWeightSampler", mm.subsurfaceWeightTexture), pm.setMatrix("subsurfaceWeightMatrix", mm.subsurfaceWeightTexture.getTextureMatrix())), pm.setFloat("vTransmissionWeight", mm.transmissionWeight), mm.transmissionWeightTexture && (pm.setTexture("transmissionWeightSampler", mm.transmissionWeightTexture), pm.setMatrix("transmissionWeightMatrix", mm.transmissionWeightTexture.getTextureMatrix())), pm.setFloat("vTransmissionScatterAnisotropy", mm.transmissionScatterAnisotropy), pm.setFloat("vSubsurfaceScatterAnisotropy", mm.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, pT.d)(pm, xm, this._scene), Tm.useBones && Tm.computeBonesUsingShaders && Tm.skeleton) {
              const mm = Tm.skeleton;
              if (mm.isUsingTextureForMatrices && pm.getUniformIndex("boneTextureInfo") > -1) {
                const fm = mm.getTransformMatrixTexture(Tm);
                pm.setTexture("boneSampler", fm), pm.setFloat2("boneTextureInfo", mm._textureWidth, mm._textureHeight)
              } else pm.setMatrices("mBones", Tm.skeleton.getTransformMatrices(Tm));
              (this._enableVelocity || this._enableVelocityLinear) && pm.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[Tm.uniqueId])
            }
            if ((0, Fm.s)(Tm, pm), Tm.morphTargetManager && Tm.morphTargetManager.isUsingTextureForTargets && Tm.morphTargetManager._bind(pm), (this._enableVelocity || this._enableVelocityLinear) && (pm.setMatrix("previousWorld", this._previousTransformationMatrices[fm.uniqueId].oE), pm.setMatrix("previousViewProjection", this._previousTransformationMatrices[fm.uniqueId].viewProjection)), this._enableObjectId) {
              let mm = Tm.uniqueId;
              if (this.objectIdProvider) mm = (0, OT.j)(Tm, this.objectIdProvider);
              else if (mm > 16777215) throw new Error(`Invalid geometry object ID ${mm} for mesh "${Tm.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              pm.setFloat("objectId", mm)
            }
            if (this._enableMeshBlendTag) {
              const mm = this.meshBlendTagProvider ? (0, OT.f)(Tm, this.meshBlendTagProvider) : Tm.meshBlendingTag;
              pm.setInt("meshBlendTag", mm)
            }
            Dm && Tm.hasThinInstances && pm.setMatrix("world", im), Tm._processRendering(fm, mm, pm, xm.fillMode, wm, Dm, ((mm, Tm) => {
              mm || pm.setMatrix("world", Tm)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[fm.uniqueId].oE = im.clone(), this._previousTransformationMatrices[fm.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), Tm.skeleton && this._copyBonesTransformationMatrices(Tm.skeleton.getTransformMatrices(Tm), this._previousBonesTransformationMatrices[fm.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (Tm, fm, hm) => {
          if ((hm || 0 === fm) && Tm.jK)
            for (let Am = 0; Am < Tm.jK.length; ++Am) {
              const fm = Tm.jK[Am],
                hm = fm.TY(),
                am = fm.getRenderingMesh();
              if (!hm) continue;
              const xm = am._getInstancesRenderList(fm._id, !!fm.getReplacementMesh()),
                wm = mm.getCaps().instancedArrays && (null !== xm.visibleInstances[fm._id] || am.hasThinInstances);
              if (!this.isReady(fm, wm)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (Tm, fm, hm, Am) => {
          let am;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.dO().bindAttachments(this._attachmentsFromPrePass)
          }
          if (Am.length) {
            for (mm.setColorWrite(!1), am = 0; am < Am.length; am++) jm(Am.data[am]);
            mm.setColorWrite(!0)
          }
          for (am = 0; am < Tm.length; am++) jm(Tm.data[am]);
          for (mm.setDepthWrite(!1), am = 0; am < fm.length; am++) jm(fm.data[am]);
          if (this.renderTransparentMeshes)
            for (am = 0; am < hm.length; am++) jm(hm.data[am]);
          mm.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const mm = this._scene.dO();
        return {
          width: Math.max(1, Math.floor(mm.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(mm.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(mm, Tm) {
        for (let fm = 0; fm < mm.length; fm++) Tm[fm] = mm[fm];
        return Tm
      }
    }
    lT.ForceGLSL = !1, lT.DEPTH_TEXTURE_TYPE = 0, lT.NORMAL_TEXTURE_TYPE = 1, lT.POSITION_TEXTURE_TYPE = 2, lT.VELOCITY_TEXTURE_TYPE = 3, lT.REFLECTIVITY_TEXTURE_TYPE = 4, lT.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, lT.VELOCITY_LINEAR_TEXTURE_TYPE = 6, lT.IRRADIANCE_TEXTURE_TYPE = 7, lT.OBJECT_ID_TEXTURE_TYPE = 8, lT.MESH_BLEND_TAG_TEXTURE_TYPE = 9, lT._SceneComponentInitialization = mm => {
      throw (0, VT.i)("GeometryBufferRendererSceneComponent")
    };
    var MT = fm(37224);
    const uT = {
      effect: null,
      subMesh: null
    };

    function BT(mm) {
      if ("number" === typeof mm) return 1;
      if (mm instanceof Cm.l) return 2;
      if (mm instanceof Cm.p || mm instanceof Lm.b) return 3;
      if (mm instanceof Cm.t || mm instanceof Lm.c) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class LT {
      populateVectorFromLinkedProperties(mm) {
        const Tm = BT(mm);
        for (const fm in this.linkedProperties) {
          const mm = this.linkedProperties[fm],
            hm = mm.numComponents;
          if (Tm < hm || mm.targetUniformComponentOffset > Tm - hm) return void(1 == hm ? km.b.Error(`Float property ${mm.name} has an offset that is too large.`) : km.b.Error(`Vector${hm} property ${mm.name} won't fit in Vector${Tm} or has an offset that is too large.`));
          "number" === typeof mm.value ? LT._tmpArray[mm.targetUniformComponentOffset] = mm.value : mm.value.toArray(LT._tmpArray, mm.targetUniformComponentOffset)
        }
        mm.UTm(LT._tmpArray)
      }
      constructor(mm, Tm) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = mm, this.numComponents = Tm
      }
    }
    LT._tmpArray = [0, 0, 0, 0];
    class vT {
      constructor(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          am = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = mm, this.targetUniformName = fm, this.defaultValue = Tm, this.value = Tm, this.targetUniformComponentNum = hm, this.targetUniformComponentOffset = Am, this.requiredDefine = am
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : BT(this.defaultValue)
      }
    }
    class tT {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(mm, Tm, fm) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = mm, this.samplerPrefix = Tm, this.textureDefine = fm
      }
    }
    class UT extends((0, qT.b)((0, YT.e)(sm.c))) {}
    class dT extends(function(mm) {
      return class extends mm {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(UT)) {}
    class gT extends((0, tm.e)(dT)) {
      constructor(mm) {
        super(mm), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class WT extends((0, jT.c)(dm.d)) {}
    let FT = (() => {
        var mm, Tm, hm, Am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm, Vm, Im, Km, Qm, nm, Jm, cm, em, Nm, Gm, Xm, ym, sm, lm, Mm, um, tm, dm, mT, TT, fT, hT, AT, aT, xT, wT, DT, iT, RT, YT, qT, jT, VT, IT, KT, QT, nT, JT, ZT, kT, bT, ST, eT, NT, GT, XT, PT, HT, yT, CT, rT, sT, MT, BT, UT, dT, FT, mf, Tf, ff, hf, Af, af, xf, wf, Df, Rf, pf, Ef, of, Of, Yf, qf, jf, Vf, If, Kf, Qf, nf, Jf, zf, Zf, kf, bf, Sf, ef, Nf;
        let Gf, Xf, Pf, Hf, yf, Cf, rf, sf, lf, Mf, uf, Bf, Lf, vf, tf, Uf, df, gf, Wf, Ff, mh, Th, fh, hh, Ah, ah, xh, wh, Dh, ih, Rh, ph, Eh, oh, Oh, Yh, qh, jh, Vh, Ih, Kh, Qh, nh, Jh, ch, zh, Zh, kh, bh, Sh, eh, Nh, Gh, Xh, Ph, Hh, yh, Ch, rh, sh, lh, Mh, uh, Bh, Lh, vh, th, Uh, dh, gh, Wh, Fh, mA, TA, fA, hA, AA, aA, xA, wA, DA, iA, RA, pA, EA, oA, OA, YA, qA, jA, VA, IA, KA, QA, nA, JA, cA, zA, ZA, kA, bA, SA, eA, NA, GA, XA = WT,
          PA = [],
          HA = [],
          yA = [],
          CA = [],
          rA = [],
          sA = [],
          lA = [],
          MA = [],
          uA = [],
          BA = [],
          LA = [],
          vA = [],
          tA = [],
          UA = [],
          dA = [],
          gA = [],
          WA = [],
          FA = [],
          ma = [],
          Ta = [],
          fa = [],
          ha = [],
          Aa = [],
          aa = [],
          xa = [],
          wa = [],
          Da = [],
          ia = [],
          Ra = [],
          pa = [],
          Ea = [],
          oa = [],
          Oa = [],
          Ya = [],
          qa = [],
          ja = [],
          Va = [],
          Ia = [],
          Ka = [],
          Qa = [],
          na = [],
          Ja = [],
          ca = [],
          za = [],
          Za = [],
          ka = [],
          ba = [],
          Sa = [],
          ea = [],
          Na = [],
          Ga = [],
          Xa = [],
          Pa = [],
          Ha = [],
          ya = [],
          Ca = [],
          ra = [],
          sa = [],
          la = [],
          Ma = [],
          ua = [],
          Ba = [],
          La = [],
          va = [],
          ta = [],
          Ua = [],
          da = [],
          ga = [],
          Wa = [],
          Fa = [],
          mx = [],
          Tx = [],
          fx = [],
          hx = [],
          Ax = [],
          ax = [],
          xx = [],
          wx = [],
          Dx = [],
          ix = [],
          Rx = [],
          px = [],
          Ex = [],
          ox = [],
          Ox = [],
          Yx = [],
          qx = [],
          jx = [],
          Vx = [],
          Ix = [],
          Kx = [],
          Qx = [],
          nx = [],
          Jx = [],
          cx = [],
          zx = [],
          Zx = [],
          kx = [],
          bx = [],
          Sx = [],
          ex = [],
          Nx = [],
          Gx = [],
          Xx = [],
          Px = [],
          Hx = [],
          yx = [],
          Cx = [],
          rx = [],
          sx = [],
          lx = [],
          Mx = [],
          ux = [],
          Bx = [],
          Lx = [],
          vx = [],
          tx = [],
          Ux = [],
          dx = [],
          gx = [],
          Wx = [],
          Fx = [],
          mw = [],
          Tw = [],
          fw = [],
          hw = [],
          Aw = [],
          aw = [],
          xw = [],
          ww = [],
          Dw = [],
          iw = [],
          Rw = [],
          pw = [],
          Ew = [],
          ow = [],
          Ow = [],
          Yw = [],
          qw = [],
          jw = [],
          Vw = [],
          Iw = [],
          Kw = [],
          Qw = [],
          nw = [],
          Jw = [],
          zw = [],
          Zw = [],
          kw = [],
          bw = [],
          Sw = [],
          ew = [],
          Nw = [],
          Gw = [],
          Xw = [],
          Pw = [],
          Hw = [],
          yw = [],
          Cw = [],
          rw = [],
          sw = [],
          lw = [],
          Mw = [],
          uw = [],
          Bw = [],
          Lw = [],
          vw = [],
          tw = [],
          Uw = [],
          dw = [],
          gw = [],
          Ww = [],
          Fw = [],
          mD = [],
          TD = [],
          fD = [],
          hD = [],
          AD = [],
          aD = [],
          xD = [],
          wD = [],
          DD = [],
          iD = [],
          RD = [],
          pD = [],
          ED = [],
          oD = [],
          OD = [],
          YD = [],
          qD = [],
          jD = [],
          VD = [],
          ID = [],
          KD = [],
          QD = [],
          nD = [],
          JD = [],
          cD = [],
          zD = [],
          ZD = [],
          kD = [],
          bD = [],
          SD = [],
          eD = [],
          ND = [];
        return mm = class extends XA {
          get baseWeight() {
            return (0, zm.b)(this, Tm, "f")
          }
          set baseWeight(mm) {
            (0, zm.c)(this, Tm, mm, "f")
          }
          get baseWeightTexture() {
            return (0, zm.b)(this, hm, "f")
          }
          set baseWeightTexture(mm) {
            (0, zm.c)(this, hm, mm, "f")
          }
          get baseColor() {
            return (0, zm.b)(this, Am, "f")
          }
          set baseColor(mm) {
            (0, zm.c)(this, Am, mm, "f")
          }
          get baseColorTexture() {
            return (0, zm.b)(this, xm, "f")
          }
          set baseColorTexture(mm) {
            (0, zm.c)(this, xm, mm, "f")
          }
          get baseDiffuseRoughness() {
            return (0, zm.b)(this, wm, "f")
          }
          set baseDiffuseRoughness(mm) {
            (0, zm.c)(this, wm, mm, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, zm.b)(this, Dm, "f")
          }
          set baseDiffuseRoughnessTexture(mm) {
            (0, zm.c)(this, Dm, mm, "f")
          }
          get baseMetalness() {
            return (0, zm.b)(this, im, "f")
          }
          set baseMetalness(mm) {
            (0, zm.c)(this, im, mm, "f")
          }
          get baseMetalnessTexture() {
            return (0, zm.b)(this, Rm, "f")
          }
          set baseMetalnessTexture(mm) {
            (0, zm.c)(this, Rm, mm, "f")
          }
          get specularWeight() {
            return (0, zm.b)(this, pm, "f")
          }
          set specularWeight(mm) {
            (0, zm.c)(this, pm, mm, "f")
          }
          get specularWeightTexture() {
            return (0, zm.b)(this, Em, "f")
          }
          set specularWeightTexture(mm) {
            (0, zm.c)(this, Em, mm, "f")
          }
          get specularColor() {
            return (0, zm.b)(this, om, "f")
          }
          set specularColor(mm) {
            (0, zm.c)(this, om, mm, "f")
          }
          get specularColorTexture() {
            return (0, zm.b)(this, Om, "f")
          }
          set specularColorTexture(mm) {
            (0, zm.c)(this, Om, mm, "f")
          }
          get specularRoughness() {
            return (0, zm.b)(this, Ym, "f")
          }
          set specularRoughness(mm) {
            (0, zm.c)(this, Ym, mm, "f")
          }
          get specularRoughnessTexture() {
            return (0, zm.b)(this, qm, "f")
          }
          set specularRoughnessTexture(mm) {
            (0, zm.c)(this, qm, mm, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, zm.b)(this, jm, "f")
          }
          set specularRoughnessAnisotropy(mm) {
            (0, zm.c)(this, jm, mm, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, zm.b)(this, Vm, "f")
          }
          set specularRoughnessAnisotropyTexture(mm) {
            (0, zm.c)(this, Vm, mm, "f")
          }
          get specularIor() {
            return (0, zm.b)(this, Im, "f")
          }
          set specularIor(mm) {
            (0, zm.c)(this, Im, mm, "f")
          }
          get transmissionWeight() {
            return (0, zm.b)(this, Km, "f")
          }
          set transmissionWeight(mm) {
            (0, zm.c)(this, Km, mm, "f")
          }
          get transmissionWeightTexture() {
            return (0, zm.b)(this, Qm, "f")
          }
          set transmissionWeightTexture(mm) {
            (0, zm.c)(this, Qm, mm, "f")
          }
          get transmissionColor() {
            return (0, zm.b)(this, nm, "f")
          }
          set transmissionColor(mm) {
            (0, zm.c)(this, nm, mm, "f")
          }
          get transmissionColorTexture() {
            return (0, zm.b)(this, Jm, "f")
          }
          set transmissionColorTexture(mm) {
            (0, zm.c)(this, Jm, mm, "f")
          }
          get transmissionDepth() {
            return (0, zm.b)(this, cm, "f")
          }
          set transmissionDepth(mm) {
            (0, zm.c)(this, cm, mm, "f")
          }
          get transmissionDepthTexture() {
            return (0, zm.b)(this, em, "f")
          }
          set transmissionDepthTexture(mm) {
            (0, zm.c)(this, em, mm, "f")
          }
          get transmissionScatter() {
            return (0, zm.b)(this, Nm, "f")
          }
          set transmissionScatter(mm) {
            (0, zm.c)(this, Nm, mm, "f")
          }
          get transmissionScatterTexture() {
            return (0, zm.b)(this, Gm, "f")
          }
          set transmissionScatterTexture(mm) {
            (0, zm.c)(this, Gm, mm, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, zm.b)(this, Xm, "f")
          }
          set transmissionScatterAnisotropy(mm) {
            (0, zm.c)(this, Xm, mm, "f")
          }
          get transmissionDispersionScale() {
            return (0, zm.b)(this, ym, "f")
          }
          set transmissionDispersionScale(mm) {
            (0, zm.c)(this, ym, mm, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, zm.b)(this, sm, "f")
          }
          set transmissionDispersionScaleTexture(mm) {
            (0, zm.c)(this, sm, mm, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, zm.b)(this, lm, "f")
          }
          set transmissionDispersionAbbeNumber(mm) {
            (0, zm.c)(this, lm, mm, "f")
          }
          get subsurfaceWeight() {
            return (0, zm.b)(this, Mm, "f")
          }
          set subsurfaceWeight(mm) {
            (0, zm.c)(this, Mm, mm, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, zm.b)(this, um, "f")
          }
          set subsurfaceWeightTexture(mm) {
            (0, zm.c)(this, um, mm, "f")
          }
          get subsurfaceColor() {
            return (0, zm.b)(this, tm, "f")
          }
          set subsurfaceColor(mm) {
            (0, zm.c)(this, tm, mm, "f")
          }
          get subsurfaceColorTexture() {
            return (0, zm.b)(this, dm, "f")
          }
          set subsurfaceColorTexture(mm) {
            (0, zm.c)(this, dm, mm, "f")
          }
          get subsurfaceRadius() {
            return (0, zm.b)(this, mT, "f")
          }
          set subsurfaceRadius(mm) {
            (0, zm.c)(this, mT, mm, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, zm.b)(this, TT, "f")
          }
          set subsurfaceRadiusScale(mm) {
            (0, zm.c)(this, TT, mm, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, zm.b)(this, fT, "f")
          }
          set subsurfaceRadiusScaleTexture(mm) {
            (0, zm.c)(this, fT, mm, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, zm.b)(this, hT, "f")
          }
          set subsurfaceScatterAnisotropy(mm) {
            (0, zm.c)(this, hT, mm, "f")
          }
          get coatWeight() {
            return (0, zm.b)(this, AT, "f")
          }
          set coatWeight(mm) {
            (0, zm.c)(this, AT, mm, "f")
          }
          get coatWeightTexture() {
            return (0, zm.b)(this, aT, "f")
          }
          set coatWeightTexture(mm) {
            (0, zm.c)(this, aT, mm, "f")
          }
          get coatColor() {
            return (0, zm.b)(this, xT, "f")
          }
          set coatColor(mm) {
            (0, zm.c)(this, xT, mm, "f")
          }
          get coatColorTexture() {
            return (0, zm.b)(this, wT, "f")
          }
          set coatColorTexture(mm) {
            (0, zm.c)(this, wT, mm, "f")
          }
          get coatRoughness() {
            return (0, zm.b)(this, DT, "f")
          }
          set coatRoughness(mm) {
            (0, zm.c)(this, DT, mm, "f")
          }
          get coatRoughnessTexture() {
            return (0, zm.b)(this, iT, "f")
          }
          set coatRoughnessTexture(mm) {
            (0, zm.c)(this, iT, mm, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, zm.b)(this, RT, "f")
          }
          set coatRoughnessAnisotropy(mm) {
            (0, zm.c)(this, RT, mm, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, zm.b)(this, YT, "f")
          }
          set coatRoughnessAnisotropyTexture(mm) {
            (0, zm.c)(this, YT, mm, "f")
          }
          get coatIor() {
            return (0, zm.b)(this, qT, "f")
          }
          set coatIor(mm) {
            (0, zm.c)(this, qT, mm, "f")
          }
          get coatDarkening() {
            return (0, zm.b)(this, jT, "f")
          }
          set coatDarkening(mm) {
            (0, zm.c)(this, jT, mm, "f")
          }
          get coatDarkeningTexture() {
            return (0, zm.b)(this, VT, "f")
          }
          set coatDarkeningTexture(mm) {
            (0, zm.c)(this, VT, mm, "f")
          }
          get fuzzWeight() {
            return (0, zm.b)(this, IT, "f")
          }
          set fuzzWeight(mm) {
            (0, zm.c)(this, IT, mm, "f")
          }
          get fuzzWeightTexture() {
            return (0, zm.b)(this, KT, "f")
          }
          set fuzzWeightTexture(mm) {
            (0, zm.c)(this, KT, mm, "f")
          }
          get fuzzColor() {
            return (0, zm.b)(this, QT, "f")
          }
          set fuzzColor(mm) {
            (0, zm.c)(this, QT, mm, "f")
          }
          get fuzzColorTexture() {
            return (0, zm.b)(this, nT, "f")
          }
          set fuzzColorTexture(mm) {
            (0, zm.c)(this, nT, mm, "f")
          }
          get fuzzRoughness() {
            return (0, zm.b)(this, JT, "f")
          }
          set fuzzRoughness(mm) {
            (0, zm.c)(this, JT, mm, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, zm.b)(this, ZT, "f")
          }
          set fuzzRoughnessTexture(mm) {
            (0, zm.c)(this, ZT, mm, "f")
          }
          get geometryThinWalled() {
            return (0, zm.b)(this, kT, "f")
          }
          set geometryThinWalled(mm) {
            (0, zm.c)(this, kT, mm, "f")
          }
          get geometryNormalTexture() {
            return (0, zm.b)(this, bT, "f")
          }
          set geometryNormalTexture(mm) {
            (0, zm.c)(this, bT, mm, "f")
          }
          get geometryTangent() {
            return (0, zm.b)(this, ST, "f")
          }
          set geometryTangent(mm) {
            (0, zm.c)(this, ST, mm, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(mm) {
            this.geometryTangent = new Cm.l(Math.cos(mm), Math.sin(mm))
          }
          get geometryTangentTexture() {
            return (0, zm.b)(this, eT, "f")
          }
          set geometryTangentTexture(mm) {
            (0, zm.c)(this, eT, mm, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, zm.b)(this, NT, "f")
          }
          set geometryCoatNormalTexture(mm) {
            (0, zm.c)(this, NT, mm, "f")
          }
          get geometryCoatTangent() {
            return (0, zm.b)(this, GT, "f")
          }
          set geometryCoatTangent(mm) {
            (0, zm.c)(this, GT, mm, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(mm) {
            this.geometryCoatTangent = new Cm.l(Math.cos(mm), Math.sin(mm))
          }
          get geometryCoatTangentTexture() {
            return (0, zm.b)(this, XT, "f")
          }
          set geometryCoatTangentTexture(mm) {
            (0, zm.c)(this, XT, mm, "f")
          }
          get geometryOpacity() {
            return (0, zm.b)(this, PT, "f")
          }
          set geometryOpacity(mm) {
            (0, zm.c)(this, PT, mm, "f")
          }
          get geometryOpacityTexture() {
            return (0, zm.b)(this, HT, "f")
          }
          set geometryOpacityTexture(mm) {
            (0, zm.c)(this, HT, mm, "f")
          }
          get geometryThickness() {
            return (0, zm.b)(this, yT, "f")
          }
          set geometryThickness(mm) {
            (0, zm.c)(this, yT, mm, "f")
          }
          get geometryThicknessTexture() {
            return (0, zm.b)(this, CT, "f")
          }
          set geometryThicknessTexture(mm) {
            (0, zm.c)(this, CT, mm, "f")
          }
          get emissionLuminance() {
            return (0, zm.b)(this, rT, "f")
          }
          set emissionLuminance(mm) {
            (0, zm.c)(this, rT, mm, "f")
          }
          get emissionColor() {
            return (0, zm.b)(this, sT, "f")
          }
          set emissionColor(mm) {
            (0, zm.c)(this, sT, mm, "f")
          }
          get emissionColorTexture() {
            return (0, zm.b)(this, MT, "f")
          }
          set emissionColorTexture(mm) {
            (0, zm.c)(this, MT, mm, "f")
          }
          get thinFilmWeight() {
            return (0, zm.b)(this, BT, "f")
          }
          set thinFilmWeight(mm) {
            (0, zm.c)(this, BT, mm, "f")
          }
          get thinFilmWeightTexture() {
            return (0, zm.b)(this, UT, "f")
          }
          set thinFilmWeightTexture(mm) {
            (0, zm.c)(this, UT, mm, "f")
          }
          get thinFilmThickness() {
            return (0, zm.b)(this, dT, "f")
          }
          set thinFilmThickness(mm) {
            (0, zm.c)(this, dT, mm, "f")
          }
          get thinFilmThicknessMin() {
            return (0, zm.b)(this, FT, "f")
          }
          set thinFilmThicknessMin(mm) {
            (0, zm.c)(this, FT, mm, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, zm.b)(this, mf, "f")
          }
          set thinFilmThicknessTexture(mm) {
            (0, zm.c)(this, mf, mm, "f")
          }
          get thinFilmIor() {
            return (0, zm.b)(this, Tf, "f")
          }
          set thinFilmIor(mm) {
            (0, zm.c)(this, Tf, mm, "f")
          }
          get ambientOcclusionTexture() {
            return (0, zm.b)(this, ff, "f")
          }
          set ambientOcclusionTexture(mm) {
            (0, zm.c)(this, ff, mm, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(mm) {
            this._sssQuality !== mm && (this._sssQuality = mm, this.HTm(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(mm) {
            this._sssIrradianceTexture !== mm && (this._sssIrradianceTexture = mm, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(mm) {
            this._sssDepthTexture !== mm && (this._sssDepthTexture = mm, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, zm.b)(this, hf, "f")
          }
          set directIntensity(mm) {
            (0, zm.c)(this, hf, mm, "f")
          }
          get environmentIntensity() {
            return (0, zm.b)(this, Af, "f")
          }
          set environmentIntensity(mm) {
            (0, zm.c)(this, Af, mm, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, zm.b)(this, af, "f")
          }
          set useSpecularWeightFromTextureAlpha(mm) {
            (0, zm.c)(this, af, mm, "f")
          }
          get forceAlphaTest() {
            return (0, zm.b)(this, xf, "f")
          }
          set forceAlphaTest(mm) {
            (0, zm.c)(this, xf, mm, "f")
          }
          get alphaCutOff() {
            return (0, zm.b)(this, wf, "f")
          }
          set alphaCutOff(mm) {
            (0, zm.c)(this, wf, mm, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, zm.b)(this, Df, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(mm) {
            (0, zm.c)(this, Df, mm, "f")
          }
          get useAmbientInGrayScale() {
            return (0, zm.b)(this, Rf, "f")
          }
          set useAmbientInGrayScale(mm) {
            (0, zm.c)(this, Rf, mm, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(Lm.b.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === am.d.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(mm) {
            mm !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = mm ? am.d.LIGHTFALLOFF_PHYSICAL : am.d.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === am.d.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(mm) {
            mm !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = mm ? am.d.LIGHTFALLOFF_GLTF : am.d.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, zm.b)(this, pf, "f")
          }
          set useObjectSpaceNormalMap(mm) {
            (0, zm.c)(this, pf, mm, "f")
          }
          get useParallax() {
            return (0, zm.b)(this, Ef, "f")
          }
          set useParallax(mm) {
            (0, zm.c)(this, Ef, mm, "f")
          }
          get useParallaxOcclusion() {
            return (0, zm.b)(this, of, "f")
          }
          set useParallaxOcclusion(mm) {
            (0, zm.c)(this, of, mm, "f")
          }
          get parallaxScaleBias() {
            return (0, zm.b)(this, Of, "f")
          }
          set parallaxScaleBias(mm) {
            (0, zm.c)(this, Of, mm, "f")
          }
          get disableLighting() {
            return (0, zm.b)(this, Yf, "f")
          }
          set disableLighting(mm) {
            (0, zm.c)(this, Yf, mm, "f")
          }
          get forceIrradianceInFragment() {
            return (0, zm.b)(this, qf, "f")
          }
          set forceIrradianceInFragment(mm) {
            (0, zm.c)(this, qf, mm, "f")
          }
          get maxSimultaneousLights() {
            return (0, zm.b)(this, jf, "f")
          }
          set maxSimultaneousLights(mm) {
            (0, zm.c)(this, jf, mm, "f")
          }
          get invertNormalMapX() {
            return (0, zm.b)(this, Vf, "f")
          }
          set invertNormalMapX(mm) {
            (0, zm.c)(this, Vf, mm, "f")
          }
          get invertNormalMapY() {
            return (0, zm.b)(this, If, "f")
          }
          set invertNormalMapY(mm) {
            (0, zm.c)(this, If, mm, "f")
          }
          get twoSidedLighting() {
            return (0, zm.b)(this, Kf, "f")
          }
          set twoSidedLighting(mm) {
            (0, zm.c)(this, Kf, mm, "f")
          }
          get useAlphaFresnel() {
            return (0, zm.b)(this, Qf, "f")
          }
          set useAlphaFresnel(mm) {
            (0, zm.c)(this, Qf, mm, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, zm.b)(this, nf, "f")
          }
          set useLinearAlphaFresnel(mm) {
            (0, zm.c)(this, nf, mm, "f")
          }
          get environmentBRDFTexture() {
            return (0, zm.b)(this, Jf, "f")
          }
          set environmentBRDFTexture(mm) {
            (0, zm.c)(this, Jf, mm, "f")
          }
          get forceNormalForward() {
            return (0, zm.b)(this, zf, "f")
          }
          set forceNormalForward(mm) {
            (0, zm.c)(this, zf, mm, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, zm.b)(this, Zf, "f")
          }
          set enableSpecularAntiAliasing(mm) {
            (0, zm.c)(this, Zf, mm, "f")
          }
          get useHorizonOcclusion() {
            return (0, zm.b)(this, kf, "f")
          }
          set useHorizonOcclusion(mm) {
            (0, zm.c)(this, kf, mm, "f")
          }
          get useRadianceOcclusion() {
            return (0, zm.b)(this, bf, "f")
          }
          set useRadianceOcclusion(mm) {
            (0, zm.c)(this, bf, mm, "f")
          }
          get unlit() {
            return (0, zm.b)(this, Sf, "f")
          }
          set unlit(mm) {
            (0, zm.c)(this, Sf, mm, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, zm.b)(this, ef, "f")
          }
          set applyDecalMapAfterDetailMap(mm) {
            (0, zm.c)(this, ef, mm, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(mm) {
            this._backgroundRefractionTexture = mm, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(mm) {
            this._refractionHighQualityBlur !== mm && (this._refractionHighQualityBlur = mm, this.HTm(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(mm) {
            this._realTimeFiltering = mm, this.HTm(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(mm) {
            this._realTimeFilteringQuality = mm, this.HTm(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(mm) {
            this._fuzzSampleNumber = mm, this.HTm(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, zm.b)(this, Nf, "f")
          }
          set debugMode(mm) {
            (0, zm.c)(this, Nf, mm, "f")
          }
          constructor(fm, Zm) {
            super(fm, Zm, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || mm.ForceGLSL), Tm.set(this, ((0, zm.i)(this, PA), (0, zm.i)(this, HA, void 0))), this._baseWeight = ((0, zm.i)(this, yA), new vT("base_weight", 1, "vBaseWeight", 1)), hm.set(this, (0, zm.i)(this, CA, void 0)), this._baseWeightTexture = ((0, zm.i)(this, rA), new tT("base_weight", "baseWeight", "BASE_WEIGHT")), Am.set(this, (0, zm.i)(this, sA, void 0)), this._baseColor = ((0, zm.i)(this, lA), new vT("base_color", Lm.b.White(), "vBaseColor", 4)), xm.set(this, (0, zm.i)(this, MA, void 0)), this._baseColorTexture = ((0, zm.i)(this, uA), new tT("base_color", "baseColor", "BASE_COLOR")), wm.set(this, (0, zm.i)(this, BA, void 0)), this._baseDiffuseRoughness = ((0, zm.i)(this, LA), new vT("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), Dm.set(this, (0, zm.i)(this, vA, void 0)), this._baseDiffuseRoughnessTexture = ((0, zm.i)(this, tA), new tT("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), im.set(this, (0, zm.i)(this, UA, void 0)), this._baseMetalness = ((0, zm.i)(this, dA), new vT("base_metalness", 0, "vReflectanceInfo", 4, 0)), Rm.set(this, (0, zm.i)(this, gA, void 0)), this._baseMetalnessTexture = ((0, zm.i)(this, WA), new tT("base_metalness", "baseMetalness", "BASE_METALNESS")), pm.set(this, (0, zm.i)(this, FA, void 0)), this._specularWeight = ((0, zm.i)(this, ma), new vT("specular_weight", 1, "vReflectanceInfo", 4, 3)), Em.set(this, (0, zm.i)(this, Ta, void 0)), this._specularWeightTexture = ((0, zm.i)(this, fa), new tT("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), om.set(this, (0, zm.i)(this, ha, void 0)), this._specularColor = ((0, zm.i)(this, Aa), new vT("specular_color", Lm.b.White(), "vSpecularColor", 4)), Om.set(this, (0, zm.i)(this, aa, void 0)), this._specularColorTexture = ((0, zm.i)(this, xa), new tT("specular_color", "specularColor", "SPECULAR_COLOR")), Ym.set(this, (0, zm.i)(this, wa, void 0)), this._specularRoughness = ((0, zm.i)(this, Da), new vT("specular_roughness", .3, "vReflectanceInfo", 4, 1)), qm.set(this, (0, zm.i)(this, ia, void 0)), this._specularRoughnessTexture = ((0, zm.i)(this, Ra), new tT("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), jm.set(this, (0, zm.i)(this, pa, void 0)), this._specularRoughnessAnisotropy = ((0, zm.i)(this, Ea), new vT("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), Vm.set(this, (0, zm.i)(this, oa, void 0)), this._specularRoughnessAnisotropyTexture = ((0, zm.i)(this, Oa), new tT("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), Im.set(this, (0, zm.i)(this, Ya, void 0)), this._specularIor = ((0, zm.i)(this, qa), new vT("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), Km.set(this, (0, zm.i)(this, ja, void 0)), this._transmissionWeight = ((0, zm.i)(this, Va), new vT("transmission_weight", 0, "vTransmissionWeight", 1)), Qm.set(this, (0, zm.i)(this, Ia, void 0)), this._transmissionWeightTexture = ((0, zm.i)(this, Ka), new tT("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), nm.set(this, (0, zm.i)(this, Qa, void 0)), this._transmissionColor = ((0, zm.i)(this, na), new vT("transmission_color", Lm.b.White(), "vTransmissionColor", 3, 0)), Jm.set(this, (0, zm.i)(this, Ja, void 0)), this._transmissionColorTexture = ((0, zm.i)(this, ca), new tT("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), cm.set(this, (0, zm.i)(this, za, void 0)), this._transmissionDepth = ((0, zm.i)(this, Za), new vT("transmission_depth", 0, "vTransmissionDepth", 1, 0)), em.set(this, (0, zm.i)(this, ka, void 0)), this._transmissionDepthTexture = ((0, zm.i)(this, ba), new tT("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), Nm.set(this, (0, zm.i)(this, Sa, void 0)), this._transmissionScatter = ((0, zm.i)(this, ea), new vT("transmission_scatter", Lm.b.Black(), "vTransmissionScatter", 3, 0)), Gm.set(this, (0, zm.i)(this, Na, void 0)), this._transmissionScatterTexture = ((0, zm.i)(this, Ga), new tT("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), Xm.set(this, (0, zm.i)(this, Xa, void 0)), this._transmissionScatterAnisotropy = ((0, zm.i)(this, Pa), new vT("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), ym.set(this, (0, zm.i)(this, Ha, void 0)), this._transmissionDispersionScale = ((0, zm.i)(this, ya), new vT("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), sm.set(this, (0, zm.i)(this, Ca, void 0)), this._transmissionDispersionScaleTexture = ((0, zm.i)(this, ra), new tT("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), lm.set(this, (0, zm.i)(this, sa, void 0)), this._transmissionDispersionAbbeNumber = ((0, zm.i)(this, la), new vT("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), Mm.set(this, (0, zm.i)(this, Ma, void 0)), this._subsurfaceWeight = ((0, zm.i)(this, ua), new vT("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), um.set(this, (0, zm.i)(this, Ba, void 0)), this._subsurfaceWeightTexture = ((0, zm.i)(this, La), new tT("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), tm.set(this, (0, zm.i)(this, va, void 0)), this._subsurfaceColor = ((0, zm.i)(this, ta), new vT("subsurface_color", new Lm.b(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), dm.set(this, (0, zm.i)(this, Ua, void 0)), this._subsurfaceColorTexture = ((0, zm.i)(this, da), new tT("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), mT.set(this, (0, zm.i)(this, ga, void 0)), this._subsurfaceRadius = ((0, zm.i)(this, Wa), new vT("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), TT.set(this, (0, zm.i)(this, Fa, void 0)), this._subsurfaceRadiusScale = ((0, zm.i)(this, mx), new vT("subsurface_radius_scale", new Lm.b(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), fT.set(this, (0, zm.i)(this, Tx, void 0)), this._subsurfaceRadiusScaleTexture = ((0, zm.i)(this, fx), new tT("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), hT.set(this, (0, zm.i)(this, hx, void 0)), this._subsurfaceScatterAnisotropy = ((0, zm.i)(this, Ax), new vT("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), AT.set(this, (0, zm.i)(this, ax, void 0)), this._coatWeight = ((0, zm.i)(this, xx), new vT("coat_weight", 0, "vCoatWeight", 1, 0)), aT.set(this, (0, zm.i)(this, wx, void 0)), this._coatWeightTexture = ((0, zm.i)(this, Dx), new tT("coat_weight", "coatWeight", "COAT_WEIGHT")), xT.set(this, (0, zm.i)(this, ix, void 0)), this._coatColor = ((0, zm.i)(this, Rx), new vT("coat_color", Lm.b.White(), "vCoatColor", 3, 0)), wT.set(this, (0, zm.i)(this, px, void 0)), this._coatColorTexture = ((0, zm.i)(this, Ex), new tT("coat_color", "coatColor", "COAT_COLOR")), DT.set(this, (0, zm.i)(this, ox, void 0)), this._coatRoughness = ((0, zm.i)(this, Ox), new vT("coat_roughness", 0, "vCoatRoughness", 1, 0)), iT.set(this, (0, zm.i)(this, Yx, void 0)), this._coatRoughnessTexture = ((0, zm.i)(this, qx), new tT("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), RT.set(this, (0, zm.i)(this, jx, void 0)), this._coatRoughnessAnisotropy = ((0, zm.i)(this, Vx), new vT("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), YT.set(this, (0, zm.i)(this, Ix, void 0)), this._coatRoughnessAnisotropyTexture = ((0, zm.i)(this, Kx), new tT("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), qT.set(this, (0, zm.i)(this, Qx, void 0)), this._coatIor = ((0, zm.i)(this, nx), new vT("coat_ior", 1.5, "vCoatIor", 1, 0)), jT.set(this, (0, zm.i)(this, Jx, void 0)), this._coatDarkening = ((0, zm.i)(this, cx), new vT("coat_darkening", 1, "vCoatDarkening", 1, 0)), VT.set(this, (0, zm.i)(this, zx, void 0)), this._coatDarkeningTexture = ((0, zm.i)(this, Zx), new tT("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, IT.set(this, (0, zm.i)(this, kx, void 0)), this._fuzzWeight = ((0, zm.i)(this, bx), new vT("fuzz_weight", 0, "vFuzzWeight", 1, 0)), KT.set(this, (0, zm.i)(this, Sx, void 0)), this._fuzzWeightTexture = ((0, zm.i)(this, ex), new tT("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), QT.set(this, (0, zm.i)(this, Nx, void 0)), this._fuzzColor = ((0, zm.i)(this, Gx), new vT("fuzz_color", Lm.b.White(), "vFuzzColor", 3, 0)), nT.set(this, (0, zm.i)(this, Xx, void 0)), this._fuzzColorTexture = ((0, zm.i)(this, Px), new tT("fuzz_color", "fuzzColor", "FUZZ_COLOR")), JT.set(this, (0, zm.i)(this, Hx, void 0)), this._fuzzRoughness = ((0, zm.i)(this, yx), new vT("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), ZT.set(this, (0, zm.i)(this, Cx, void 0)), this._fuzzRoughnessTexture = ((0, zm.i)(this, rx), new tT("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), kT.set(this, (0, zm.i)(this, sx, void 0)), this._geometryThinWalled = ((0, zm.i)(this, lx), new vT("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), bT.set(this, (0, zm.i)(this, Mx, void 0)), this._geometryNormalTexture = ((0, zm.i)(this, ux), new tT("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), ST.set(this, (0, zm.i)(this, Bx, void 0)), this._geometryTangent = ((0, zm.i)(this, Lx), new vT("geometry_tangent", new Cm.l(1, 0), "vSpecularAnisotropy", 3, 0)), eT.set(this, (0, zm.i)(this, vx, void 0)), this._geometryTangentTexture = ((0, zm.i)(this, tx), new tT("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), NT.set(this, (0, zm.i)(this, Ux, void 0)), this._geometryCoatNormalTexture = ((0, zm.i)(this, dx), new tT("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), GT.set(this, (0, zm.i)(this, gx, void 0)), this._geometryCoatTangent = ((0, zm.i)(this, Wx), new vT("geometry_coat_tangent", new Cm.l(1, 0), "vGeometryCoatTangent", 2, 0)), XT.set(this, (0, zm.i)(this, Fx, void 0)), this._geometryCoatTangentTexture = ((0, zm.i)(this, mw), new tT("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), PT.set(this, (0, zm.i)(this, Tw, void 0)), this._geometryOpacity = ((0, zm.i)(this, fw), new vT("geometry_opacity", 1, "vBaseColor", 4, 3)), HT.set(this, (0, zm.i)(this, hw, void 0)), this._geometryOpacityTexture = ((0, zm.i)(this, Aw), new tT("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), yT.set(this, (0, zm.i)(this, aw, void 0)), this._geometryThickness = ((0, zm.i)(this, xw), new vT("geometry_thickness", 0, "vGeometryThickness", 1, 0)), CT.set(this, (0, zm.i)(this, ww, void 0)), this._geometryThicknessTexture = ((0, zm.i)(this, Dw), new tT("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), rT.set(this, (0, zm.i)(this, iw, void 0)), this._emissionLuminance = ((0, zm.i)(this, Rw), new vT("emission_luminance", 1, "vLightingIntensity", 4, 1)), sT.set(this, (0, zm.i)(this, pw, void 0)), this._emissionColor = ((0, zm.i)(this, Ew), new vT("emission_color", Lm.b.Black(), "vEmissionColor", 3)), MT.set(this, (0, zm.i)(this, ow, void 0)), this._emissionColorTexture = ((0, zm.i)(this, Ow), new tT("emission_color", "emissionColor", "EMISSION_COLOR")), BT.set(this, (0, zm.i)(this, Yw, void 0)), this._thinFilmWeight = ((0, zm.i)(this, qw), new vT("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), UT.set(this, (0, zm.i)(this, jw, void 0)), this._thinFilmWeightTexture = ((0, zm.i)(this, Vw), new tT("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), dT.set(this, (0, zm.i)(this, Iw, void 0)), this._thinFilmThickness = ((0, zm.i)(this, Kw), new vT("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), FT.set(this, (0, zm.i)(this, Qw, void 0)), this._thinFilmThicknessMin = ((0, zm.i)(this, nw), new vT("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), mf.set(this, (0, zm.i)(this, Jw, void 0)), this._thinFilmThicknessTexture = ((0, zm.i)(this, zw), new tT("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), Tf.set(this, (0, zm.i)(this, Zw, void 0)), this._thinFilmIor = ((0, zm.i)(this, kw), new vT("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), ff.set(this, (0, zm.i)(this, bw, void 0)), this._ambientOcclusionTexture = ((0, zm.i)(this, Sw), new tT("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = mm.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, hf.set(this, (0, zm.i)(this, ew, 1)), Af.set(this, ((0, zm.i)(this, Nw), (0, zm.i)(this, Gw, 1))), af.set(this, ((0, zm.i)(this, Xw), (0, zm.i)(this, Pw, !1))), xf.set(this, ((0, zm.i)(this, Hw), (0, zm.i)(this, yw, !1))), wf.set(this, ((0, zm.i)(this, Cw), (0, zm.i)(this, rw, .4))), Df.set(this, ((0, zm.i)(this, sw), (0, zm.i)(this, lw, !1))), Rf.set(this, ((0, zm.i)(this, Mw), (0, zm.i)(this, uw, !1))), pf.set(this, ((0, zm.i)(this, Bw), (0, zm.i)(this, Lw, !1))), Ef.set(this, ((0, zm.i)(this, vw), (0, zm.i)(this, tw, !1))), of.set(this, ((0, zm.i)(this, Uw), (0, zm.i)(this, dw, !1))), Of.set(this, ((0, zm.i)(this, gw), (0, zm.i)(this, Ww, .05))), Yf.set(this, ((0, zm.i)(this, Fw), (0, zm.i)(this, mD, !1))), qf.set(this, ((0, zm.i)(this, TD), (0, zm.i)(this, fD, !1))), jf.set(this, ((0, zm.i)(this, hD), (0, zm.i)(this, AD, 4))), Vf.set(this, ((0, zm.i)(this, aD), (0, zm.i)(this, xD, !1))), If.set(this, ((0, zm.i)(this, wD), (0, zm.i)(this, DD, !1))), Kf.set(this, ((0, zm.i)(this, iD), (0, zm.i)(this, RD, !1))), Qf.set(this, ((0, zm.i)(this, pD), (0, zm.i)(this, ED, !1))), nf.set(this, ((0, zm.i)(this, oD), (0, zm.i)(this, OD, !1))), Jf.set(this, ((0, zm.i)(this, YD), (0, zm.i)(this, qD, null))), zf.set(this, ((0, zm.i)(this, jD), (0, zm.i)(this, VD, !1))), Zf.set(this, ((0, zm.i)(this, ID), (0, zm.i)(this, KD, !1))), kf.set(this, ((0, zm.i)(this, QD), (0, zm.i)(this, nD, !0))), bf.set(this, ((0, zm.i)(this, JD), (0, zm.i)(this, cD, !0))), Sf.set(this, ((0, zm.i)(this, zD), (0, zm.i)(this, ZD, !1))), ef.set(this, ((0, zm.i)(this, kD), (0, zm.i)(this, bD, !1))), this._lightingInfos = ((0, zm.i)(this, SD), new Cm.t(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = am.d.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new bm.f(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Nf.set(this, (0, zm.i)(this, eD, 0)), this.debugLimit = ((0, zm.i)(this, ND), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = am.d.MATERIAL_OPAQUE, this.wG() && !this.wG()?.dO().isWebGPU && this.wG().dO().zY < 2 && km.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), mm._noiseTextures[this.wG().uniqueId] || (mm._noiseTextures[this.wG().uniqueId] = new Sm.f(zT.h.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.wG(), !1, !0, 1), this.wG().iG.addOnce((() => {
              mm._noiseTextures[this.wG().uniqueId]?.dispose(), delete mm._noiseTextures[this.wG().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), gm.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), gm.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Hm(this.wG()), this._environmentFuzzBRDFTexture = Pm(this.wG()), this.prePassConfiguration = new Bm.c, this._propertyList = {};
            for (const mm of Object.getOwnPropertyNames(this)) {
              const Tm = this[mm];
              Tm instanceof vT && (this._propertyList[mm] = Tm)
            }
            Object.keys(this._propertyList).forEach((mm => {
              const Tm = this._propertyList[mm];
              let fm = this._uniformsList[Tm.targetUniformName];
              fm ? fm.numComponents !== Tm.targetUniformComponentNum ? km.b.Error(`Uniform ${Tm.targetUniformName} already exists of size ${fm.numComponents}, but trying to set it to ${Tm.targetUniformComponentNum}.`) : fm.requiredDefine !== Tm.requiredDefine && (fm.requiredDefine = void 0) : (fm = new LT(Tm.targetUniformName, Tm.targetUniformComponentNum), fm.requiredDefine = Tm.requiredDefine, this._uniformsList[Tm.targetUniformName] = fm), "" === fm.firstLinkedKey && (fm.firstLinkedKey = Tm.name), fm.linkedProperties[Tm.name] = Tm
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const mm of Object.getOwnPropertyNames(this)) {
              const Tm = this[mm];
              Tm instanceof tT && (this._samplersList[mm] = Tm)
            }
            for (const mm in this._samplersList) {
              const Tm = this._samplersList[mm].textureDefine;
              this._samplerDefines[Tm] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[Tm + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[Tm + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(gm.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(gm.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(mm) {
            this._transparencyMode !== mm && (this._transparencyMode = mm, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== am.d.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(mm) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(mm)
          }
          clone(Tm) {
            let fm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Am = cT.d.Clone((() => new mm(Tm, this.wG())), this, {
              cloneTexturesOnlyOnce: fm
            });
            return Am.id = Tm, Am.name = Tm, this.stencil.copyTo(Am.stencil), this._clonePlugins(Am, hm), Am
          }
          serialize() {
            const mm = super.serialize();
            return mm.customType = "BABYLON.OpenPBRMaterial", mm
          }
          static Parse(Tm, fm, hm) {
            const Am = cT.d.Parse((() => new mm(Tm.name, fm)), Tm, fm, hm);
            return Tm.stencil && Am.stencil.parse(Tm.stencil, fm, hm), am.d._ParsePlugins(Tm, Am, fm, hm), Am
          }
          forceCompilation(mm, Tm, fm) {
            const hm = {
              clipPlane: !1,
              useInstances: !1,
              ...fm
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const fm = new gT({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                Am = this._prepareEffect(mm, mm, fm, void 0, void 0, hm.useInstances, hm.clipPlane);
              this._onEffectCreatedObservable && (uT.effect = Am, uT.subMesh = null, this._onEffectCreatedObservable.notifyObservers(uT)), Am.isReady() ? Tm && Tm(this) : Am.onCompileObservable.add((() => {
                Tm && Tm(this)
              }))
            })()
          }
          isReadyForSubMesh(Tm, fm, hm) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Am = fm._drawWrapper;
            if (Am.effect && this.isFrozen && Am._wasPreviouslyReady && Am._wasPreviouslyUsingInstances === hm) return !0;
            fm.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), fm.materialDefines = new gT({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const am = fm.materialDefines;
            if (this._isReadyForSubMesh(fm)) return !0;
            const xm = this.wG(),
              wm = xm.dO();
            if (am._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, xm.texturesEnabled)) {
              for (const mm in this._samplersList) {
                const Tm = this._samplersList[mm];
                if (Tm.value && !Tm.value.isReadyOrNotBlocking()) return !1
              }
              const Tm = this._getRadianceTexture();
              if (Tm && gm.d.ReflectionTextureEnabled) {
                if (!Tm.isReadyOrNotBlocking()) return !1;
                if (Tm.irradianceTexture) {
                  if (!Tm.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!Tm.sphericalPolynomial && Tm.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && gm.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && gm.d.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && gm.d.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (mm._noiseTextures[xm.uniqueId] && !mm._noiseTextures[xm.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = am, this._eventInfo.subMesh = fm, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (am._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (am.AREALIGHTUSED)
              for (let mm = 0; mm < Tm.lightSources.length; mm++)
                if (!Tm.lightSources[mm]._isReady()) return !1;
            if (wm.getCaps().standardDerivatives || Tm.isVerticesDataPresent(rm.m.NormalKind) || (Tm.createNormals(!0), km.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + Tm.name)), !(0, Fm.e)(xm, Tm, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const Dm = fm.effect,
              im = am._areLightsDisposed,
              Rm = this._prepareEffect(Tm, fm.getRenderingMesh(), am, this.onCompiled, this.onError, hm, null);
            let pm = !1;
            if (Rm)
              if (this._onEffectCreatedObservable && (uT.effect = Rm, uT.subMesh = fm, this._onEffectCreatedObservable.notifyObservers(uT)), this.allowShaderHotSwapping && Dm && !Rm.isReady()) {
                if (am.markAsUnprocessed(), pm = this.isFrozen, im) return am._areLightsDisposed = !0, !1
              } else xm.resetCachedMaterial(), fm.setEffect(Rm, am, this._materialContext);
            return !(!fm.effect || !fm.effect.isReady()) && (am._renderId = xm.getRenderId(), Am._wasPreviouslyReady = !pm, Am._wasPreviouslyUsingInstances = !!hm, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const mm = this._uniformBuffer;
            mm.addUniform("vTangentSpaceParams", 2), mm.addUniform("vLightingIntensity", 4), mm.addUniform("pointSize", 1), mm.addUniform("vDebugMode", 2), mm.addUniform("renderTargetSize", 2), mm.addUniform("cameraInfo", 4), mm.addUniform("vTextureRepetitionHexTilingParams", 4), mm.addUniform("backgroundRefractionMatrix", 16), mm.addUniform("vBackgroundRefractionInfos", 3), (0, Fm.lb)(mm, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((Tm => {
              mm.addUniform(Tm.name, Tm.numComponents)
            })), Object.values(this._samplersList).forEach((Tm => {
              mm.addUniform(Tm.samplerInfoName, 2), mm.addUniform(Tm.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(mm, Tm, fm, hm) {
            if (0 === this.geometryThickness) mm.updateFloat("vGeometryThickness", 0);
            else {
              hm.getRenderingMesh().getWorldMatrix().decompose(Cm.j.WO[0]);
              const Tm = Math.max(Math.abs(Cm.j.WO[0].x), Math.abs(Cm.j.WO[0].y), Math.abs(Cm.j.WO[0].z));
              mm.updateFloat("vGeometryThickness", this.geometryThickness * Tm)
            }
          }
          bindForSubMesh(Tm, fm, hm) {
            const Am = this.wG(),
              am = hm.materialDefines;
            if (!am) return;
            const xm = hm.effect;
            if (!xm) return;
            this._activeEffect = xm, fm.getMeshUniformBuffer().bindToEffect(xm, "Mesh"), fm.transferToEffect(Tm);
            const wm = Am.dO();
            this._uniformBuffer.bindToEffect(xm, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Am, fm, Tm, this.isFrozen), OT.c.Bind(wm.currentRenderPassId, this._activeEffect, fm, Tm, this);
            const Dm = Am.activeCamera;
            Dm ? this._uniformBuffer.updateFloat4("cameraInfo", Dm.minZ, Dm.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const im = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", im[0], im[1], im[2], im[3]), this._eventInfo.subMesh = hm, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), am.OBJECTSPACE_NORMALMAP && (Tm.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Rm = this._mustRebind(Am, xm, hm, fm.visibility),
              pm = wm._features.needToAlwaysBindUniformBuffers;
            (0, Fm.f)(fm, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, ET.c)(this._activeEffect, this._vertexPullingMetadata);
            const Em = this._uniformBuffer;
            if (Rm) {
              this.bindViewProjection(xm);
              const Tm = this._getRadianceTexture();
              if (!Em.useUbo || !this.isFrozen || !Em.isSync || hm._drawWrapper._forceRebindOnNextCall) {
                if (Am.texturesEnabled) {
                  for (const mm in this._samplersList) {
                    const Tm = this._samplersList[mm];
                    Tm.value && (Em.updateFloat2(Tm.samplerInfoName, Tm.value.coordinatesIndex, Tm.value.level), (0, Fm.x)(Tm.value, Em, Tm.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (Am._mirroredCameraPosition ? Em.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Em.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Fm.k)(Am, am, Em, Lm.b.White(), Tm, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && Em.updateFloat("pointSize", this.pointSize);
                const mm = this._uniformsArray;
                for (let Tm = 0, fm = mm.length; Tm < fm; Tm++) {
                  const fm = mm[Tm];
                  (void 0 === fm.requiredDefine || am[fm.requiredDefine]) && (4 === fm.numComponents ? (fm.populateVectorFromLinkedProperties(Cm.j.Vector4[0]), Em.updateVector4(fm.name, Cm.j.Vector4[0])) : 3 === fm.numComponents ? (fm.populateVectorFromLinkedProperties(Cm.j.WO[0]), Em.updateVector3(fm.name, Cm.j.WO[0])) : 2 === fm.numComponents ? (fm.populateVectorFromLinkedProperties(Cm.j.Vector2[0]), Em.updateFloat2(fm.name, Cm.j.Vector2[0].x, Cm.j.Vector2[0].y)) : 1 === fm.numComponents && Em.updateFloat(fm.name, fm.linkedProperties[fm.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * Am.environmentIntensity, this._lightingInfos.w = 1, Em.updateVector4("vLightingIntensity", this._lightingInfos), Em.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (Am.texturesEnabled) {
                for (const mm in this._samplersList) {
                  const Tm = this._samplersList[mm];
                  Tm.value && Em.setTexture(Tm.samplerName, Tm.value)
                }
                if ((0, Fm.o)(Am, am, Em, Tm, this.realTimeFiltering), am.ENVIRONMENTBRDF && Em.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), am.FUZZENVIRONMENTBRDF && Em.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), am.REFRACTED_BACKGROUND && (Em.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), Em.K9("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), Cm.j.WO[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), Em.updateVector3("vBackgroundRefractionInfos", Cm.j.WO[1])), (am.ANISOTROPIC || am.FUZZ || am.REFRACTED_BACKGROUND || am.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Em.setTexture("blueNoiseSampler", mm._noiseTextures[this.wG().uniqueId]), am.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const mm = this.sssIrradianceTexture.getSize().width,
                    Tm = this.sssIrradianceTexture.getSize().height;
                  Em.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), Em.setTexture("sceneDepthSampler", this.sssDepthTexture), Em.updateFloat2("renderTargetSize", mm, Tm)
                }
              }
              this.wG().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(fm) && this.wG().depthPeelingRenderer.bind(xm), this._eventInfo.subMesh = hm, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, pT.d)(this._activeEffect, this, Am), this.bindEyePosition(xm)
            } else pm && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, Am, Am.dO(), hm), !Rm && this.isFrozen && !pm || !Am.lightsEnabled || this._disableLighting || (0, Fm.p)(Am, fm, this._activeEffect, am, this._maxSimultaneousLights), !Rm && this.isFrozen || (this.bindView(xm), (0, Fm.j)(Am, fm, this._activeEffect, !0), am.NUM_MORPH_INFLUENCERS && (0, Fm.s)(fm, this._activeEffect), am.BAKED_VERTEX_ANIMATION_TEXTURE && fm.bakedVertexAnimationManager?.bind(xm, am.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Fm.r)(am, this._activeEffect, Am)), this._afterBind(fm, this._activeEffect, hm), Em.update()
          }
          getAnimatables() {
            const mm = super.getAnimatables();
            for (const Tm in this._samplersList) {
              const fm = this._samplersList[Tm];
              fm.value && fm.value.animations && fm.value.animations.length > 0 && mm.push(fm.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && mm.push(this._radianceTexture), mm
          }
          getActiveTextures() {
            const mm = super.getActiveTextures();
            for (const Tm in this._samplersList) {
              const fm = this._samplersList[Tm];
              fm.value && mm.push(fm.value)
            }
            return this._radianceTexture && mm.push(this._radianceTexture), mm
          }
          hasTexture(mm) {
            if (super.hasTexture(mm)) return !0;
            for (const Tm in this._samplersList) {
              if (this._samplersList[Tm].value === mm) return !0
            }
            return this._radianceTexture === mm
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(mm, Tm) {
            if (this._breakShaderLoadedCheck = !0, Tm) {
              this._environmentBRDFTexture && this.wG().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.wG().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const mm in this._samplersList) {
                const Tm = this._samplersList[mm];
                Tm.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(mm, Tm)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.wG().environmentTexture
          }
          _prepareEffect(Tm, fm, hm) {
            let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              xm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              wm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(Tm, fm, hm, xm, wm), !hm.isDirty) return null;
            hm.markAsProcessed();
            const Dm = this.wG().dO(),
              im = new Wm.e;
            let Rm = 0;
            hm.USESPHERICALINVERTEX && im.addFallback(Rm++, "USESPHERICALINVERTEX"), hm.FOG && im.addFallback(Rm, "FOG"), hm.SPECULARAA && im.addFallback(Rm, "SPECULARAA"), hm.POINTSIZE && im.addFallback(Rm, "POINTSIZE"), hm.LOGARITHMICDEPTH && im.addFallback(Rm, "LOGARITHMICDEPTH"), hm.PARALLAX && im.addFallback(Rm, "PARALLAX"), hm.PARALLAX_RHS && im.addFallback(Rm, "PARALLAX_RHS"), hm.PARALLAXOCCLUSION && im.addFallback(Rm++, "PARALLAXOCCLUSION"), hm.ENVIRONMENTBRDF && im.addFallback(Rm++, "ENVIRONMENTBRDF"), hm.TANGENT && im.addFallback(Rm++, "TANGENT"), Rm = (0, Fm.A)(hm, im, this._maxSimultaneousLights, Rm), hm.SPECULARTERM && im.addFallback(Rm++, "SPECULARTERM"), hm.USESPHERICALFROMREFLECTIONMAP && im.addFallback(Rm++, "USESPHERICALFROMREFLECTIONMAP"), hm.USEIRRADIANCEMAP && im.addFallback(Rm++, "USEIRRADIANCEMAP"), hm.NORMAL && im.addFallback(Rm++, "NORMAL"), hm.VERTEXCOLOR && im.addFallback(Rm++, "VERTEXCOLOR"), hm.MORPHTARGETS && im.addFallback(Rm++, "MORPHTARGETS"), hm.MULTIVIEW && im.addFallback(0, "MULTIVIEW");
            const pm = [rm.m.PositionKind];
            hm.NORMAL && pm.push(rm.m.NormalKind), hm.TANGENT && pm.push(rm.m.TangentKind);
            for (let mm = 1; mm <= 6; ++mm) hm["UV" + mm] && pm.push(`uv${1===mm?"":mm}`);
            hm.VERTEXCOLOR && pm.push(rm.m.ColorKind), (0, Fm.F)(pm, Tm, hm, im), (0, Fm.J)(pm, hm), (0, Fm.L)(pm, Tm, hm), (0, Fm.E)(pm, Tm, hm);
            let Em = "openpbr";
            const om = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const mm in this._uniformsList) om.push(mm);
            const Om = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            hm.FUZZENVIRONMENTBRDF && Om.push("environmentFuzzBrdfSampler"), hm.REFRACTED_BACKGROUND && Om.push("backgroundRefractionSampler"), (hm.ANISOTROPIC || hm.FUZZ || hm.REFRACTED_BACKGROUND || hm.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Om.push("blueNoiseSampler"), hm.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (Om.push("sceneIrradianceSampler"), Om.push("sceneDepthSampler"));
            for (const mm in this._samplersList) {
              const Tm = this._samplersList[mm];
              Om.push(Tm.samplerName), om.push(Tm.samplerInfoName), om.push(Tm.samplerMatrixName)
            }(0, Fm.mb)(om, Om, !0);
            const Ym = ["Material", "Scene", "Mesh"],
              qm = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: hm.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = im, this._eventInfo.fallbackRank = Rm, this._eventInfo.defines = hm, this._eventInfo.uniforms = om, this._eventInfo.attributes = pm, this._eventInfo.samplers = Om, this._eventInfo.uniformBuffersNames = Ym, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Tm, this._eventInfo.indexParameters = qm, this._callbackPluginEventGeneric(128, this._eventInfo), OT.c.AddUniformsAndSamplers(om, Om), Bm.c.AddUniforms(om), Bm.c.AddSamplers(Om), (0, pT.c)(om), this._useVertexPulling) {
              const mm = fm?.geometry;
              mm && (this._vertexPullingMetadata = (0, ET.f)(mm), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((mm, Tm) => {
                om.push(`vp_${Tm}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            Um.c && (Um.c.PrepareUniforms(om, hm), Um.c.PrepareSamplers(Om, hm)), (0, Fm.qb)({
              uniformsNames: om,
              uniformBuffersNames: Ym,
              samplers: Om,
              defines: hm,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const jm = {};
            this.customShaderNameResolve && (Em = this.customShaderNameResolve(Em, om, Ym, Om, hm, pm, jm));
            const Vm = hm.toString(),
              Im = Dm.createEffect(Em, {
                attributes: pm,
                uniformsNames: om,
                uniformBuffersNames: Ym,
                samplers: Om,
                defines: Vm,
                fallbacks: im,
                onCompiled: Am,
                onError: am,
                indexParameters: qm,
                processFinalCode: jm.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: hm.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: mm._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, Dm);
            return this._eventInfo.customCode = void 0, Im
          }
          _prepareDefines(Tm, fm, hm) {
            let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              xm = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const wm = fm.hasThinInstances,
              Dm = this.wG(),
              im = Dm.dO();
            (0, Fm.Z)(Dm, Tm, hm, !0, this._maxSimultaneousLights, this._disableLighting), hm._needNormals = !0, (0, Fm.fb)(Dm, hm);
            const Rm = this.needAlphaBlendingForMesh(Tm) && this.wG().useOrderIndependentTransparency;
            if ((0, Fm.ib)(Dm, hm, this.canRenderToMRT && !Rm), (0, Fm.gb)(Dm, hm, Rm), OT.c.PrepareDefines(im.currentRenderPassId, Tm, hm), hm._areTexturesDirty) {
              hm._needUVs = !1;
              for (let mm = 1; mm <= 6; ++mm) hm["MAINUV" + mm] = !1;
              if (Dm.texturesEnabled) {
                for (const fm in this._samplersList) {
                  const mm = this._samplersList[fm];
                  mm.value ? ((0, Fm.$)(mm.value, hm, mm.textureDefine), hm[mm.textureDefine + "_GAMMA"] = mm.value.gammaSpace) : hm[mm.textureDefine] = !1
                }
                const mm = this._getRadianceTexture(),
                  Tm = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || im.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, Fm.V)(Dm, mm, hm, this.realTimeFiltering, this.realTimeFilteringQuality, !Tm), this._baseMetalnessTexture && (hm.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), hm.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, hm.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, hm.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, hm.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, hm.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, hm.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, hm.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, hm.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, hm.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, hm.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, hm.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && gm.d.DiffuseTextureEnabled ? (hm.PARALLAX = !0, hm.PARALLAX_RHS = Dm.useRightHandedSystem, hm.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : hm.PARALLAX = !1, hm.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (hm.PARALLAX = !1, hm.PARALLAX_RHS = !1, hm.PARALLAXOCCLUSION = !1, hm.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && gm.d.ReflectionTextureEnabled ? (hm.ENVIRONMENTBRDF = !0, hm.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (hm.ENVIRONMENTBRDF = !1, hm.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? hm.FUZZENVIRONMENTBRDF = !0 : hm.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  hm.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && gm.d.RefractionTextureEnabled, hm.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, hm.REFRACTED_LIGHTS = !0;
                  const mm = this._getRadianceTexture();
                  mm ? (hm.REFRACTED_ENVIRONMENT = gm.d.RefractionTextureEnabled, hm.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.wG().useRightHandedSystem ? !mm.invertZ : mm.invertZ, hm.REFRACTED_ENVIRONMENT_LOCAL_CUBE = mm.isCube && mm.boundingBoxSize) : hm.REFRACTED_ENVIRONMENT = !1
                } else hm.REFRACTED_BACKGROUND = !1, hm.REFRACTED_LIGHTS = !1, hm.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? hm.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : hm.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === am.d.LIGHTFALLOFF_STANDARD ? (hm.USEPHYSICALLIGHTFALLOFF = !1, hm.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === am.d.LIGHTFALLOFF_GLTF ? (hm.USEPHYSICALLIGHTFALLOFF = !1, hm.USEGLTFLIGHTFALLOFF = !0) : (hm.USEPHYSICALLIGHTFALLOFF = !0, hm.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? hm.TWOSIDEDLIGHTING = !0 : hm.TWOSIDEDLIGHTING = !1, hm.MIRRORED = !!Dm._mirroredCameraPosition, hm.SPECULARAA = im.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(hm._areTexturesDirty || hm._areMiscDirty) && (hm.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, hm.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, hm.ALPHABLEND = this.needAlphaBlendingForMesh(Tm)), hm._areTexturesDirty && (hm.TEXTURE_REPETITION_MODE = im.version > 1 || im.isWebGPU ? this.textureRepetitionMode : 0), hm._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(hm), hm.FORCENORMALFORWARD = this._forceNormalForward, hm.RADIANCEOCCLUSION = this._useRadianceOcclusion, hm.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && mm._noiseTextures[Dm.uniqueId] && gm.d.ReflectionTextureEnabled ? (hm.ANISOTROPIC = !0, Tm.isVerticesDataPresent(rm.m.TangentKind) || (hm._needUVs = !0, hm.MAINUV1 = !0), this._useGltfStyleAnisotropy && (hm.USE_GLTF_STYLE_ANISOTROPY = !0), hm.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, hm.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (hm.ANISOTROPIC = !1, hm.USE_GLTF_STYLE_ANISOTROPY = !1, hm.ANISOTROPIC_BASE = !1, hm.ANISOTROPIC_COAT = !1), hm.THIN_FILM = this.thinFilmWeight > 0, hm.IRIDESCENCE = this.thinFilmWeight > 0, hm.DISPERSION = this.transmissionDispersionScale > 0, hm.SCATTERING = this.hasScattering;
            if (hm.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, hm.TRANSMISSION_SLAB = this.transmissionWeight > 0, hm.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, hm.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !hm.PREPASS && (hm.SUBSURFACE_SLAB || hm.TRANSMISSION_SLAB_VOLUME)) {
              let mm = !1;
              if (!this.sssIrradianceTexture && Dm.geometryBufferRenderer) {
                const Tm = Dm.geometryBufferRenderer.getTextureIndex(lT.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = Dm.geometryBufferRenderer.getGBuffer().textures[Tm], mm = !0
              }
              if (!this.sssDepthTexture && Dm.geometryBufferRenderer) {
                const Tm = Dm.geometryBufferRenderer.getTextureIndex(lT.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = Dm.geometryBufferRenderer.getGBuffer().textures[Tm], mm = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (hm.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, mm && (hm.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            hm.FUZZ = this.fuzzWeight > 0 && gm.d.ReflectionTextureEnabled, hm.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, hm.FUZZ ? (Tm.isVerticesDataPresent(rm.m.TangentKind) || (hm._needUVs = !0, hm.MAINUV1 = !0), this._environmentFuzzBRDFTexture = Pm(this.wG()), hm.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, hm.FUZZENVIRONMENTBRDF = !1, hm.FUZZ_IBL_SAMPLES = 0), hm._areMiscDirty && ((0, Fm.db)(Tm, Dm, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Tm), hm, this._applyDecalMapAfterDetailMap, this._useVertexPulling, fm, this._isVertexOutputInvariant), hm.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Tm.isVerticesDataPresent(rm.m.NormalKind), hm.DEBUGMODE = this._debugMode), (0, Fm.U)(Dm, im, this, hm, !!Am, xm, wm), this._eventInfo.defines = hm, this._eventInfo.mesh = Tm, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Fm.Q)(Tm, hm, !0, !0, !0, this._transparencyMode !== am.d.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, Tm = new WeakMap, hm = new WeakMap, Am = new WeakMap, xm = new WeakMap, wm = new WeakMap, Dm = new WeakMap, im = new WeakMap, Rm = new WeakMap, pm = new WeakMap, Em = new WeakMap, om = new WeakMap, Om = new WeakMap, Ym = new WeakMap, qm = new WeakMap, jm = new WeakMap, Vm = new WeakMap, Im = new WeakMap, Km = new WeakMap, Qm = new WeakMap, nm = new WeakMap, Jm = new WeakMap, cm = new WeakMap, em = new WeakMap, Nm = new WeakMap, Gm = new WeakMap, Xm = new WeakMap, ym = new WeakMap, sm = new WeakMap, lm = new WeakMap, Mm = new WeakMap, um = new WeakMap, tm = new WeakMap, dm = new WeakMap, mT = new WeakMap, TT = new WeakMap, fT = new WeakMap, hT = new WeakMap, AT = new WeakMap, aT = new WeakMap, xT = new WeakMap, wT = new WeakMap, DT = new WeakMap, iT = new WeakMap, RT = new WeakMap, YT = new WeakMap, qT = new WeakMap, jT = new WeakMap, VT = new WeakMap, IT = new WeakMap, KT = new WeakMap, QT = new WeakMap, nT = new WeakMap, JT = new WeakMap, ZT = new WeakMap, kT = new WeakMap, bT = new WeakMap, ST = new WeakMap, eT = new WeakMap, NT = new WeakMap, GT = new WeakMap, XT = new WeakMap, PT = new WeakMap, HT = new WeakMap, yT = new WeakMap, CT = new WeakMap, rT = new WeakMap, sT = new WeakMap, MT = new WeakMap, BT = new WeakMap, UT = new WeakMap, dT = new WeakMap, FT = new WeakMap, mf = new WeakMap, Tf = new WeakMap, ff = new WeakMap, hf = new WeakMap, Af = new WeakMap, af = new WeakMap, xf = new WeakMap, wf = new WeakMap, Df = new WeakMap, Rf = new WeakMap, pf = new WeakMap, Ef = new WeakMap, of = new WeakMap, Of = new WeakMap, Yf = new WeakMap, qf = new WeakMap, jf = new WeakMap, Vf = new WeakMap, If = new WeakMap, Kf = new WeakMap, Qf = new WeakMap, nf = new WeakMap, Jf = new WeakMap, zf = new WeakMap, Zf = new WeakMap, kf = new WeakMap, bf = new WeakMap, Sf = new WeakMap, ef = new WeakMap, Nf = new WeakMap, (() => {
          const Tm = "function" === typeof Symbol && Symbol.metadata ? Object.create(XA[Symbol.metadata] ?? null) : void 0;
          Gf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Xf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Pf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Hf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], yf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Cf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], rf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], sf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], lf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Mf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], uf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Bf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Lf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], vf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], tf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Uf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], df = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], gf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Wf = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Ff = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], mh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Th = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], fh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], hh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Ah = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], ah = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], xh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], wh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Dh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], ih = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Rh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], ph = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Eh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], oh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Oh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Yh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], qh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], jh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Vh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Ih = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Kh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Qh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], nh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Jh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], ch = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], zh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Zh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], kh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], bh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Sh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], eh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Nh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Gh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Xh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Ph = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Hh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], yh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Ch = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], rh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], sh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], lh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Mh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], uh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Bh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Lh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], vh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], th = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Uh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], dh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], gh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Wh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], Fh = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], mA = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], TA = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], fA = [(0, Zm.b)("_markAllSubMeshesAsTexturesDirty")], hA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], AA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], aA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], xA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], wA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], DA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], iA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], RA = [(0, Zm.J)()], pA = [(0, Zm.J)()], EA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], oA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], OA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], YA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], qA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsLightsDirty")], jA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], VA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsLightsDirty")], IA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], KA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], QA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], nA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], JA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], cA = [(0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], zA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], ZA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], kA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], bA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], SA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsMiscDirty")], eA = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsMiscDirty")], NA = [(0, Zm.c)("_markAllSubMeshesAsMiscDirty")], GA = [(0, Zm.J)()], (0, zm.g)(mm, null, Gf, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: mm => "baseWeight" in mm,
              get: mm => mm.baseWeight,
              set: (mm, Tm) => {
                mm.baseWeight = Tm
              }
            },
            metadata: Tm
          }, HA, yA), (0, zm.g)(mm, null, Xf, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "baseWeightTexture" in mm,
              get: mm => mm.baseWeightTexture,
              set: (mm, Tm) => {
                mm.baseWeightTexture = Tm
              }
            },
            metadata: Tm
          }, CA, rA), (0, zm.g)(mm, null, Pf, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: mm => "baseColor" in mm,
              get: mm => mm.baseColor,
              set: (mm, Tm) => {
                mm.baseColor = Tm
              }
            },
            metadata: Tm
          }, sA, lA), (0, zm.g)(mm, null, Hf, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "baseColorTexture" in mm,
              get: mm => mm.baseColorTexture,
              set: (mm, Tm) => {
                mm.baseColorTexture = Tm
              }
            },
            metadata: Tm
          }, MA, uA), (0, zm.g)(mm, null, yf, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: mm => "baseDiffuseRoughness" in mm,
              get: mm => mm.baseDiffuseRoughness,
              set: (mm, Tm) => {
                mm.baseDiffuseRoughness = Tm
              }
            },
            metadata: Tm
          }, BA, LA), (0, zm.g)(mm, null, Cf, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "baseDiffuseRoughnessTexture" in mm,
              get: mm => mm.baseDiffuseRoughnessTexture,
              set: (mm, Tm) => {
                mm.baseDiffuseRoughnessTexture = Tm
              }
            },
            metadata: Tm
          }, vA, tA), (0, zm.g)(mm, null, rf, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: mm => "baseMetalness" in mm,
              get: mm => mm.baseMetalness,
              set: (mm, Tm) => {
                mm.baseMetalness = Tm
              }
            },
            metadata: Tm
          }, UA, dA), (0, zm.g)(mm, null, sf, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "baseMetalnessTexture" in mm,
              get: mm => mm.baseMetalnessTexture,
              set: (mm, Tm) => {
                mm.baseMetalnessTexture = Tm
              }
            },
            metadata: Tm
          }, gA, WA), (0, zm.g)(mm, null, lf, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: mm => "specularWeight" in mm,
              get: mm => mm.specularWeight,
              set: (mm, Tm) => {
                mm.specularWeight = Tm
              }
            },
            metadata: Tm
          }, FA, ma), (0, zm.g)(mm, null, Mf, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "specularWeightTexture" in mm,
              get: mm => mm.specularWeightTexture,
              set: (mm, Tm) => {
                mm.specularWeightTexture = Tm
              }
            },
            metadata: Tm
          }, Ta, fa), (0, zm.g)(mm, null, uf, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: mm => "specularColor" in mm,
              get: mm => mm.specularColor,
              set: (mm, Tm) => {
                mm.specularColor = Tm
              }
            },
            metadata: Tm
          }, ha, Aa), (0, zm.g)(mm, null, Bf, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "specularColorTexture" in mm,
              get: mm => mm.specularColorTexture,
              set: (mm, Tm) => {
                mm.specularColorTexture = Tm
              }
            },
            metadata: Tm
          }, aa, xa), (0, zm.g)(mm, null, Lf, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: mm => "specularRoughness" in mm,
              get: mm => mm.specularRoughness,
              set: (mm, Tm) => {
                mm.specularRoughness = Tm
              }
            },
            metadata: Tm
          }, wa, Da), (0, zm.g)(mm, null, vf, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "specularRoughnessTexture" in mm,
              get: mm => mm.specularRoughnessTexture,
              set: (mm, Tm) => {
                mm.specularRoughnessTexture = Tm
              }
            },
            metadata: Tm
          }, ia, Ra), (0, zm.g)(mm, null, tf, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: mm => "specularRoughnessAnisotropy" in mm,
              get: mm => mm.specularRoughnessAnisotropy,
              set: (mm, Tm) => {
                mm.specularRoughnessAnisotropy = Tm
              }
            },
            metadata: Tm
          }, pa, Ea), (0, zm.g)(mm, null, Uf, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "specularRoughnessAnisotropyTexture" in mm,
              get: mm => mm.specularRoughnessAnisotropyTexture,
              set: (mm, Tm) => {
                mm.specularRoughnessAnisotropyTexture = Tm
              }
            },
            metadata: Tm
          }, oa, Oa), (0, zm.g)(mm, null, df, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: mm => "specularIor" in mm,
              get: mm => mm.specularIor,
              set: (mm, Tm) => {
                mm.specularIor = Tm
              }
            },
            metadata: Tm
          }, Ya, qa), (0, zm.g)(mm, null, gf, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: mm => "transmissionWeight" in mm,
              get: mm => mm.transmissionWeight,
              set: (mm, Tm) => {
                mm.transmissionWeight = Tm
              }
            },
            metadata: Tm
          }, ja, Va), (0, zm.g)(mm, null, Wf, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "transmissionWeightTexture" in mm,
              get: mm => mm.transmissionWeightTexture,
              set: (mm, Tm) => {
                mm.transmissionWeightTexture = Tm
              }
            },
            metadata: Tm
          }, Ia, Ka), (0, zm.g)(mm, null, Ff, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: mm => "transmissionColor" in mm,
              get: mm => mm.transmissionColor,
              set: (mm, Tm) => {
                mm.transmissionColor = Tm
              }
            },
            metadata: Tm
          }, Qa, na), (0, zm.g)(mm, null, mh, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "transmissionColorTexture" in mm,
              get: mm => mm.transmissionColorTexture,
              set: (mm, Tm) => {
                mm.transmissionColorTexture = Tm
              }
            },
            metadata: Tm
          }, Ja, ca), (0, zm.g)(mm, null, Th, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: mm => "transmissionDepth" in mm,
              get: mm => mm.transmissionDepth,
              set: (mm, Tm) => {
                mm.transmissionDepth = Tm
              }
            },
            metadata: Tm
          }, za, Za), (0, zm.g)(mm, null, fh, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "transmissionDepthTexture" in mm,
              get: mm => mm.transmissionDepthTexture,
              set: (mm, Tm) => {
                mm.transmissionDepthTexture = Tm
              }
            },
            metadata: Tm
          }, ka, ba), (0, zm.g)(mm, null, hh, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: mm => "transmissionScatter" in mm,
              get: mm => mm.transmissionScatter,
              set: (mm, Tm) => {
                mm.transmissionScatter = Tm
              }
            },
            metadata: Tm
          }, Sa, ea), (0, zm.g)(mm, null, Ah, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "transmissionScatterTexture" in mm,
              get: mm => mm.transmissionScatterTexture,
              set: (mm, Tm) => {
                mm.transmissionScatterTexture = Tm
              }
            },
            metadata: Tm
          }, Na, Ga), (0, zm.g)(mm, null, ah, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: mm => "transmissionScatterAnisotropy" in mm,
              get: mm => mm.transmissionScatterAnisotropy,
              set: (mm, Tm) => {
                mm.transmissionScatterAnisotropy = Tm
              }
            },
            metadata: Tm
          }, Xa, Pa), (0, zm.g)(mm, null, xh, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: mm => "transmissionDispersionScale" in mm,
              get: mm => mm.transmissionDispersionScale,
              set: (mm, Tm) => {
                mm.transmissionDispersionScale = Tm
              }
            },
            metadata: Tm
          }, Ha, ya), (0, zm.g)(mm, null, wh, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "transmissionDispersionScaleTexture" in mm,
              get: mm => mm.transmissionDispersionScaleTexture,
              set: (mm, Tm) => {
                mm.transmissionDispersionScaleTexture = Tm
              }
            },
            metadata: Tm
          }, Ca, ra), (0, zm.g)(mm, null, Dh, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: mm => "transmissionDispersionAbbeNumber" in mm,
              get: mm => mm.transmissionDispersionAbbeNumber,
              set: (mm, Tm) => {
                mm.transmissionDispersionAbbeNumber = Tm
              }
            },
            metadata: Tm
          }, sa, la), (0, zm.g)(mm, null, ih, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: mm => "subsurfaceWeight" in mm,
              get: mm => mm.subsurfaceWeight,
              set: (mm, Tm) => {
                mm.subsurfaceWeight = Tm
              }
            },
            metadata: Tm
          }, Ma, ua), (0, zm.g)(mm, null, Rh, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "subsurfaceWeightTexture" in mm,
              get: mm => mm.subsurfaceWeightTexture,
              set: (mm, Tm) => {
                mm.subsurfaceWeightTexture = Tm
              }
            },
            metadata: Tm
          }, Ba, La), (0, zm.g)(mm, null, ph, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: mm => "subsurfaceColor" in mm,
              get: mm => mm.subsurfaceColor,
              set: (mm, Tm) => {
                mm.subsurfaceColor = Tm
              }
            },
            metadata: Tm
          }, va, ta), (0, zm.g)(mm, null, Eh, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "subsurfaceColorTexture" in mm,
              get: mm => mm.subsurfaceColorTexture,
              set: (mm, Tm) => {
                mm.subsurfaceColorTexture = Tm
              }
            },
            metadata: Tm
          }, Ua, da), (0, zm.g)(mm, null, oh, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: mm => "subsurfaceRadius" in mm,
              get: mm => mm.subsurfaceRadius,
              set: (mm, Tm) => {
                mm.subsurfaceRadius = Tm
              }
            },
            metadata: Tm
          }, ga, Wa), (0, zm.g)(mm, null, Oh, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: mm => "subsurfaceRadiusScale" in mm,
              get: mm => mm.subsurfaceRadiusScale,
              set: (mm, Tm) => {
                mm.subsurfaceRadiusScale = Tm
              }
            },
            metadata: Tm
          }, Fa, mx), (0, zm.g)(mm, null, Yh, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "subsurfaceRadiusScaleTexture" in mm,
              get: mm => mm.subsurfaceRadiusScaleTexture,
              set: (mm, Tm) => {
                mm.subsurfaceRadiusScaleTexture = Tm
              }
            },
            metadata: Tm
          }, Tx, fx), (0, zm.g)(mm, null, qh, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: mm => "subsurfaceScatterAnisotropy" in mm,
              get: mm => mm.subsurfaceScatterAnisotropy,
              set: (mm, Tm) => {
                mm.subsurfaceScatterAnisotropy = Tm
              }
            },
            metadata: Tm
          }, hx, Ax), (0, zm.g)(mm, null, jh, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: mm => "coatWeight" in mm,
              get: mm => mm.coatWeight,
              set: (mm, Tm) => {
                mm.coatWeight = Tm
              }
            },
            metadata: Tm
          }, ax, xx), (0, zm.g)(mm, null, Vh, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "coatWeightTexture" in mm,
              get: mm => mm.coatWeightTexture,
              set: (mm, Tm) => {
                mm.coatWeightTexture = Tm
              }
            },
            metadata: Tm
          }, wx, Dx), (0, zm.g)(mm, null, Ih, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: mm => "coatColor" in mm,
              get: mm => mm.coatColor,
              set: (mm, Tm) => {
                mm.coatColor = Tm
              }
            },
            metadata: Tm
          }, ix, Rx), (0, zm.g)(mm, null, Kh, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "coatColorTexture" in mm,
              get: mm => mm.coatColorTexture,
              set: (mm, Tm) => {
                mm.coatColorTexture = Tm
              }
            },
            metadata: Tm
          }, px, Ex), (0, zm.g)(mm, null, Qh, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: mm => "coatRoughness" in mm,
              get: mm => mm.coatRoughness,
              set: (mm, Tm) => {
                mm.coatRoughness = Tm
              }
            },
            metadata: Tm
          }, ox, Ox), (0, zm.g)(mm, null, nh, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "coatRoughnessTexture" in mm,
              get: mm => mm.coatRoughnessTexture,
              set: (mm, Tm) => {
                mm.coatRoughnessTexture = Tm
              }
            },
            metadata: Tm
          }, Yx, qx), (0, zm.g)(mm, null, Jh, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: mm => "coatRoughnessAnisotropy" in mm,
              get: mm => mm.coatRoughnessAnisotropy,
              set: (mm, Tm) => {
                mm.coatRoughnessAnisotropy = Tm
              }
            },
            metadata: Tm
          }, jx, Vx), (0, zm.g)(mm, null, ch, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "coatRoughnessAnisotropyTexture" in mm,
              get: mm => mm.coatRoughnessAnisotropyTexture,
              set: (mm, Tm) => {
                mm.coatRoughnessAnisotropyTexture = Tm
              }
            },
            metadata: Tm
          }, Ix, Kx), (0, zm.g)(mm, null, zh, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: mm => "coatIor" in mm,
              get: mm => mm.coatIor,
              set: (mm, Tm) => {
                mm.coatIor = Tm
              }
            },
            metadata: Tm
          }, Qx, nx), (0, zm.g)(mm, null, Zh, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: mm => "coatDarkening" in mm,
              get: mm => mm.coatDarkening,
              set: (mm, Tm) => {
                mm.coatDarkening = Tm
              }
            },
            metadata: Tm
          }, Jx, cx), (0, zm.g)(mm, null, kh, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "coatDarkeningTexture" in mm,
              get: mm => mm.coatDarkeningTexture,
              set: (mm, Tm) => {
                mm.coatDarkeningTexture = Tm
              }
            },
            metadata: Tm
          }, zx, Zx), (0, zm.g)(mm, null, bh, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: mm => "fuzzWeight" in mm,
              get: mm => mm.fuzzWeight,
              set: (mm, Tm) => {
                mm.fuzzWeight = Tm
              }
            },
            metadata: Tm
          }, kx, bx), (0, zm.g)(mm, null, Sh, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "fuzzWeightTexture" in mm,
              get: mm => mm.fuzzWeightTexture,
              set: (mm, Tm) => {
                mm.fuzzWeightTexture = Tm
              }
            },
            metadata: Tm
          }, Sx, ex), (0, zm.g)(mm, null, eh, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: mm => "fuzzColor" in mm,
              get: mm => mm.fuzzColor,
              set: (mm, Tm) => {
                mm.fuzzColor = Tm
              }
            },
            metadata: Tm
          }, Nx, Gx), (0, zm.g)(mm, null, Nh, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "fuzzColorTexture" in mm,
              get: mm => mm.fuzzColorTexture,
              set: (mm, Tm) => {
                mm.fuzzColorTexture = Tm
              }
            },
            metadata: Tm
          }, Xx, Px), (0, zm.g)(mm, null, Gh, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: mm => "fuzzRoughness" in mm,
              get: mm => mm.fuzzRoughness,
              set: (mm, Tm) => {
                mm.fuzzRoughness = Tm
              }
            },
            metadata: Tm
          }, Hx, yx), (0, zm.g)(mm, null, Xh, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "fuzzRoughnessTexture" in mm,
              get: mm => mm.fuzzRoughnessTexture,
              set: (mm, Tm) => {
                mm.fuzzRoughnessTexture = Tm
              }
            },
            metadata: Tm
          }, Cx, rx), (0, zm.g)(mm, null, Ph, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: mm => "geometryThinWalled" in mm,
              get: mm => mm.geometryThinWalled,
              set: (mm, Tm) => {
                mm.geometryThinWalled = Tm
              }
            },
            metadata: Tm
          }, sx, lx), (0, zm.g)(mm, null, Hh, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "geometryNormalTexture" in mm,
              get: mm => mm.geometryNormalTexture,
              set: (mm, Tm) => {
                mm.geometryNormalTexture = Tm
              }
            },
            metadata: Tm
          }, Mx, ux), (0, zm.g)(mm, null, yh, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: mm => "geometryTangent" in mm,
              get: mm => mm.geometryTangent,
              set: (mm, Tm) => {
                mm.geometryTangent = Tm
              }
            },
            metadata: Tm
          }, Bx, Lx), (0, zm.g)(mm, null, Ch, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "geometryTangentTexture" in mm,
              get: mm => mm.geometryTangentTexture,
              set: (mm, Tm) => {
                mm.geometryTangentTexture = Tm
              }
            },
            metadata: Tm
          }, vx, tx), (0, zm.g)(mm, null, rh, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "geometryCoatNormalTexture" in mm,
              get: mm => mm.geometryCoatNormalTexture,
              set: (mm, Tm) => {
                mm.geometryCoatNormalTexture = Tm
              }
            },
            metadata: Tm
          }, Ux, dx), (0, zm.g)(mm, null, sh, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: mm => "geometryCoatTangent" in mm,
              get: mm => mm.geometryCoatTangent,
              set: (mm, Tm) => {
                mm.geometryCoatTangent = Tm
              }
            },
            metadata: Tm
          }, gx, Wx), (0, zm.g)(mm, null, lh, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "geometryCoatTangentTexture" in mm,
              get: mm => mm.geometryCoatTangentTexture,
              set: (mm, Tm) => {
                mm.geometryCoatTangentTexture = Tm
              }
            },
            metadata: Tm
          }, Fx, mw), (0, zm.g)(mm, null, Mh, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: mm => "geometryOpacity" in mm,
              get: mm => mm.geometryOpacity,
              set: (mm, Tm) => {
                mm.geometryOpacity = Tm
              }
            },
            metadata: Tm
          }, Tw, fw), (0, zm.g)(mm, null, uh, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "geometryOpacityTexture" in mm,
              get: mm => mm.geometryOpacityTexture,
              set: (mm, Tm) => {
                mm.geometryOpacityTexture = Tm
              }
            },
            metadata: Tm
          }, hw, Aw), (0, zm.g)(mm, null, Bh, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: mm => "geometryThickness" in mm,
              get: mm => mm.geometryThickness,
              set: (mm, Tm) => {
                mm.geometryThickness = Tm
              }
            },
            metadata: Tm
          }, aw, xw), (0, zm.g)(mm, null, Lh, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "geometryThicknessTexture" in mm,
              get: mm => mm.geometryThicknessTexture,
              set: (mm, Tm) => {
                mm.geometryThicknessTexture = Tm
              }
            },
            metadata: Tm
          }, ww, Dw), (0, zm.g)(mm, null, vh, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: mm => "emissionLuminance" in mm,
              get: mm => mm.emissionLuminance,
              set: (mm, Tm) => {
                mm.emissionLuminance = Tm
              }
            },
            metadata: Tm
          }, iw, Rw), (0, zm.g)(mm, null, th, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: mm => "emissionColor" in mm,
              get: mm => mm.emissionColor,
              set: (mm, Tm) => {
                mm.emissionColor = Tm
              }
            },
            metadata: Tm
          }, pw, Ew), (0, zm.g)(mm, null, Uh, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "emissionColorTexture" in mm,
              get: mm => mm.emissionColorTexture,
              set: (mm, Tm) => {
                mm.emissionColorTexture = Tm
              }
            },
            metadata: Tm
          }, ow, Ow), (0, zm.g)(mm, null, dh, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: mm => "thinFilmWeight" in mm,
              get: mm => mm.thinFilmWeight,
              set: (mm, Tm) => {
                mm.thinFilmWeight = Tm
              }
            },
            metadata: Tm
          }, Yw, qw), (0, zm.g)(mm, null, gh, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "thinFilmWeightTexture" in mm,
              get: mm => mm.thinFilmWeightTexture,
              set: (mm, Tm) => {
                mm.thinFilmWeightTexture = Tm
              }
            },
            metadata: Tm
          }, jw, Vw), (0, zm.g)(mm, null, Wh, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: mm => "thinFilmThickness" in mm,
              get: mm => mm.thinFilmThickness,
              set: (mm, Tm) => {
                mm.thinFilmThickness = Tm
              }
            },
            metadata: Tm
          }, Iw, Kw), (0, zm.g)(mm, null, Fh, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: mm => "thinFilmThicknessMin" in mm,
              get: mm => mm.thinFilmThicknessMin,
              set: (mm, Tm) => {
                mm.thinFilmThicknessMin = Tm
              }
            },
            metadata: Tm
          }, Qw, nw), (0, zm.g)(mm, null, mA, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "thinFilmThicknessTexture" in mm,
              get: mm => mm.thinFilmThicknessTexture,
              set: (mm, Tm) => {
                mm.thinFilmThicknessTexture = Tm
              }
            },
            metadata: Tm
          }, Jw, zw), (0, zm.g)(mm, null, TA, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: mm => "thinFilmIor" in mm,
              get: mm => mm.thinFilmIor,
              set: (mm, Tm) => {
                mm.thinFilmIor = Tm
              }
            },
            metadata: Tm
          }, Zw, kw), (0, zm.g)(mm, null, fA, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "ambientOcclusionTexture" in mm,
              get: mm => mm.ambientOcclusionTexture,
              set: (mm, Tm) => {
                mm.ambientOcclusionTexture = Tm
              }
            },
            metadata: Tm
          }, bw, Sw), (0, zm.g)(mm, null, hA, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: mm => "directIntensity" in mm,
              get: mm => mm.directIntensity,
              set: (mm, Tm) => {
                mm.directIntensity = Tm
              }
            },
            metadata: Tm
          }, ew, Nw), (0, zm.g)(mm, null, AA, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: mm => "environmentIntensity" in mm,
              get: mm => mm.environmentIntensity,
              set: (mm, Tm) => {
                mm.environmentIntensity = Tm
              }
            },
            metadata: Tm
          }, Gw, Xw), (0, zm.g)(mm, null, aA, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: mm => "useSpecularWeightFromTextureAlpha" in mm,
              get: mm => mm.useSpecularWeightFromTextureAlpha,
              set: (mm, Tm) => {
                mm.useSpecularWeightFromTextureAlpha = Tm
              }
            },
            metadata: Tm
          }, Pw, Hw), (0, zm.g)(mm, null, xA, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: mm => "forceAlphaTest" in mm,
              get: mm => mm.forceAlphaTest,
              set: (mm, Tm) => {
                mm.forceAlphaTest = Tm
              }
            },
            metadata: Tm
          }, yw, Cw), (0, zm.g)(mm, null, wA, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: mm => "alphaCutOff" in mm,
              get: mm => mm.alphaCutOff,
              set: (mm, Tm) => {
                mm.alphaCutOff = Tm
              }
            },
            metadata: Tm
          }, rw, sw), (0, zm.g)(mm, null, DA, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: mm => "useAmbientOcclusionFromMetallicTextureRed" in mm,
              get: mm => mm.useAmbientOcclusionFromMetallicTextureRed,
              set: (mm, Tm) => {
                mm.useAmbientOcclusionFromMetallicTextureRed = Tm
              }
            },
            metadata: Tm
          }, lw, Mw), (0, zm.g)(mm, null, iA, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: mm => "useAmbientInGrayScale" in mm,
              get: mm => mm.useAmbientInGrayScale,
              set: (mm, Tm) => {
                mm.useAmbientInGrayScale = Tm
              }
            },
            metadata: Tm
          }, uw, Bw), (0, zm.g)(mm, null, RA, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: mm => "usePhysicalLightFalloff" in mm,
              get: mm => mm.usePhysicalLightFalloff
            },
            metadata: Tm
          }, null, PA), (0, zm.g)(mm, null, pA, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: mm => "useGLTFLightFalloff" in mm,
              get: mm => mm.useGLTFLightFalloff
            },
            metadata: Tm
          }, null, PA), (0, zm.g)(mm, null, EA, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: mm => "useObjectSpaceNormalMap" in mm,
              get: mm => mm.useObjectSpaceNormalMap,
              set: (mm, Tm) => {
                mm.useObjectSpaceNormalMap = Tm
              }
            },
            metadata: Tm
          }, Lw, vw), (0, zm.g)(mm, null, oA, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: mm => "useParallax" in mm,
              get: mm => mm.useParallax,
              set: (mm, Tm) => {
                mm.useParallax = Tm
              }
            },
            metadata: Tm
          }, tw, Uw), (0, zm.g)(mm, null, OA, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: mm => "useParallaxOcclusion" in mm,
              get: mm => mm.useParallaxOcclusion,
              set: (mm, Tm) => {
                mm.useParallaxOcclusion = Tm
              }
            },
            metadata: Tm
          }, dw, gw), (0, zm.g)(mm, null, YA, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: mm => "parallaxScaleBias" in mm,
              get: mm => mm.parallaxScaleBias,
              set: (mm, Tm) => {
                mm.parallaxScaleBias = Tm
              }
            },
            metadata: Tm
          }, Ww, Fw), (0, zm.g)(mm, null, qA, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: mm => "disableLighting" in mm,
              get: mm => mm.disableLighting,
              set: (mm, Tm) => {
                mm.disableLighting = Tm
              }
            },
            metadata: Tm
          }, mD, TD), (0, zm.g)(mm, null, jA, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: mm => "forceIrradianceInFragment" in mm,
              get: mm => mm.forceIrradianceInFragment,
              set: (mm, Tm) => {
                mm.forceIrradianceInFragment = Tm
              }
            },
            metadata: Tm
          }, fD, hD), (0, zm.g)(mm, null, VA, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: mm => "maxSimultaneousLights" in mm,
              get: mm => mm.maxSimultaneousLights,
              set: (mm, Tm) => {
                mm.maxSimultaneousLights = Tm
              }
            },
            metadata: Tm
          }, AD, aD), (0, zm.g)(mm, null, IA, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: mm => "invertNormalMapX" in mm,
              get: mm => mm.invertNormalMapX,
              set: (mm, Tm) => {
                mm.invertNormalMapX = Tm
              }
            },
            metadata: Tm
          }, xD, wD), (0, zm.g)(mm, null, KA, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: mm => "invertNormalMapY" in mm,
              get: mm => mm.invertNormalMapY,
              set: (mm, Tm) => {
                mm.invertNormalMapY = Tm
              }
            },
            metadata: Tm
          }, DD, iD), (0, zm.g)(mm, null, QA, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: mm => "twoSidedLighting" in mm,
              get: mm => mm.twoSidedLighting,
              set: (mm, Tm) => {
                mm.twoSidedLighting = Tm
              }
            },
            metadata: Tm
          }, RD, pD), (0, zm.g)(mm, null, nA, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: mm => "useAlphaFresnel" in mm,
              get: mm => mm.useAlphaFresnel,
              set: (mm, Tm) => {
                mm.useAlphaFresnel = Tm
              }
            },
            metadata: Tm
          }, ED, oD), (0, zm.g)(mm, null, JA, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: mm => "useLinearAlphaFresnel" in mm,
              get: mm => mm.useLinearAlphaFresnel,
              set: (mm, Tm) => {
                mm.useLinearAlphaFresnel = Tm
              }
            },
            metadata: Tm
          }, OD, YD), (0, zm.g)(mm, null, cA, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "environmentBRDFTexture" in mm,
              get: mm => mm.environmentBRDFTexture,
              set: (mm, Tm) => {
                mm.environmentBRDFTexture = Tm
              }
            },
            metadata: Tm
          }, qD, jD), (0, zm.g)(mm, null, zA, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: mm => "forceNormalForward" in mm,
              get: mm => mm.forceNormalForward,
              set: (mm, Tm) => {
                mm.forceNormalForward = Tm
              }
            },
            metadata: Tm
          }, VD, ID), (0, zm.g)(mm, null, ZA, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: mm => "enableSpecularAntiAliasing" in mm,
              get: mm => mm.enableSpecularAntiAliasing,
              set: (mm, Tm) => {
                mm.enableSpecularAntiAliasing = Tm
              }
            },
            metadata: Tm
          }, KD, QD), (0, zm.g)(mm, null, kA, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: mm => "useHorizonOcclusion" in mm,
              get: mm => mm.useHorizonOcclusion,
              set: (mm, Tm) => {
                mm.useHorizonOcclusion = Tm
              }
            },
            metadata: Tm
          }, nD, JD), (0, zm.g)(mm, null, bA, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: mm => "useRadianceOcclusion" in mm,
              get: mm => mm.useRadianceOcclusion,
              set: (mm, Tm) => {
                mm.useRadianceOcclusion = Tm
              }
            },
            metadata: Tm
          }, cD, zD), (0, zm.g)(mm, null, SA, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: mm => "unlit" in mm,
              get: mm => mm.unlit,
              set: (mm, Tm) => {
                mm.unlit = Tm
              }
            },
            metadata: Tm
          }, ZD, kD), (0, zm.g)(mm, null, eA, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: mm => "applyDecalMapAfterDetailMap" in mm,
              get: mm => mm.applyDecalMapAfterDetailMap,
              set: (mm, Tm) => {
                mm.applyDecalMapAfterDetailMap = Tm
              }
            },
            metadata: Tm
          }, bD, SD), (0, zm.g)(mm, null, NA, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: mm => "debugMode" in mm,
              get: mm => mm.debugMode,
              set: (mm, Tm) => {
                mm.debugMode = Tm
              }
            },
            metadata: Tm
          }, eD, ND), (0, zm.g)(mm, null, GA, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: mm => "transparencyMode" in mm,
              get: mm => mm.transparencyMode
            },
            metadata: Tm
          }, null, PA), Tm && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tm
          })
        })(), mm.SSS_QUALITY_LOW = 0, mm.SSS_QUALITY_MEDIUM = 1, mm.SSS_QUALITY_HIGH = 2, mm._noiseTextures = {}, mm.ForceGLSL = !1, mm._ShaderLoader = new oT.e((() => [Promise.all([fm.e(317), fm.e(381)]).then((() => fm(61830))), Promise.all([fm.e(322), fm.e(318), fm.e(380), fm.e(385)]).then((() => fm(61835)))]), (() => [Promise.all([fm.e(336), fm.e(338), fm.e(384)]).then((() => fm(61878))), Promise.all([fm.e(336), fm.e(339), fm.e(383), fm.e(386)]).then((() => fm(61895)))])), mm
      })(),
      mf = !1;
    mf || (mf = !0, (0, Um.f)(), (0, MT.d)("BABYLON.OpenPBRMaterial", FT));
    var Tf = fm(37203);
    class ff {
      constructor(mm) {
        this.name = PT.c.NAME_PROCEDURALTEXTURE, this.Aq = mm
      }
      register() {
        this.Aq._beforeClearStage.registerStep(PT.c.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.Aq.proceduralTexturesEnabled) {
          zT.h.StartPerformanceCounter("Procedural textures", this.Aq.proceduralTextures.length > 0);
          for (let mm = 0; mm < this.Aq.proceduralTextures.length; mm++) {
            const Tm = this.Aq.proceduralTextures[mm];
            Tm._shouldRender() && Tm.render()
          }
          zT.h.EndPerformanceCounter("Procedural textures", this.Aq.proceduralTextures.length > 0)
        }
      }
    }
    var hf = fm(40423);
    let Af = (() => {
      var mm;
      let Tm, hm, Am, xm, wm, Dm = Sm.f,
        im = [],
        Rm = [],
        pm = [],
        Em = [],
        om = [],
        Om = [],
        qm = [],
        jm = [],
        Vm = [];
      return mm = class extends Dm {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(mm, Tm, fm, hm) {
          let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            am = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            xm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            wm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, hm, !am), this.isEnabled = ((0, zm.i)(this, im), (0, zm.i)(this, Rm, !0)), this.autoClear = ((0, zm.i)(this, pm), (0, zm.i)(this, Em, !0)), this.onGenerated = (0, zm.i)(this, om), this.onGeneratedObservable = new Tf.c, this.onBeforeGenerationObservable = new Tf.c, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, zm.i)(this, Om, void 0), this._drawWrapper = (0, zm.i)(this, qm), this._textures = {}, this._size = (0, zm.i)(this, jm, void 0), this._textureType = (0, zm.i)(this, Vm), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === Am || Am instanceof Sm.f ? (this._options = {}, this._fallbackTexture = Am) : (this._options = Am, this._fallbackTexture = Am.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let Dm = (hm = this.wG() || Ym.c.LastCreatedScene)._getComponent(PT.c.NAME_PROCEDURALTEXTURE);
          Dm || (Dm = new ff(hm), hm.vfm(Dm)), this._options.skipSceneRegistration || hm.proceduralTextures.push(this), this._fullEngine = hm.dO(), this.name = mm, this.isRenderTarget = !0, this._size = Tm, this._textureType = wm, this._generateMipMaps = am, this._drawWrapper = new hf.b(this._fullEngine), this.setFragment(fm);
          const Im = this._createRtWrapper(xm, Tm, am, wm);
          this._texture = Im.texture;
          const Km = [];
          Km.push(1, 1), Km.push(-1, 1), Km.push(-1, -1), Km.push(1, -1), this._vertexBuffers[rm.m.PositionKind] = new rm.m(this._fullEngine, Km, rm.m.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(mm, Tm, fm, hm) {
          return mm ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(Tm, {
            generateMipMaps: fm,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: hm,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(Tm, {
            generateMipMaps: fm,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: hm,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(mm) {
          this._drawWrapper.effect = mm
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((mm => {
            this._contentData = this.readPixels(0, 0, mm), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const mm = this._fullEngine,
            Tm = [];
          Tm.push(0), Tm.push(1), Tm.push(2), Tm.push(0), Tm.push(2), Tm.push(3), this._indexBuffer = mm.createIndexBuffer(Tm)
        }
        _rebuild() {
          const mm = this._vertexBuffers[rm.m.PositionKind];
          mm && mm._rebuild(), this._createIndexBuffer(), this.refreshRate === ZT.c.REFRESHRATE_RENDER_ONCE && (this.refreshRate = ZT.c.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(mm) {
          if (this.isReady()) return void mm(this);
          const Tm = this.getEffect();
          Tm && Tm.executeWhenCompiled((() => {
            mm(this)
          }))
        }
        isReady() {
          const mm = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const Tm = this._getDefines();
          if (this._drawWrapper.effect && Tm === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const hm = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== Tm && (this._cachedDefines = Tm, this._drawWrapper.effect = mm.createEffect(hm, [rm.m.PositionKind], this._uniforms, this._samplers, Tm, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([fm.e(389).then((() => fm(61967))), this._options.extraInitializationsAsync()]) : await Promise.all([fm.e(390).then((() => fm(61976))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await fm.e(389).then((() => fm(61967))) : await fm.e(390).then((() => fm(61976)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(mm) {
          this._fragment = mm
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(mm) {
          this._refreshRate = mm, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(mm, Tm) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const fm = this._texture.isCube;
          this._rtWrapper.dispose();
          const hm = this._createRtWrapper(fm, mm, Tm, this._textureType);
          this._texture = hm.texture, this._size = mm, this._generateMipMaps = Tm
        }
        _checkUniform(mm) {
          -1 === this._uniforms.indexOf(mm) && this._uniforms.push(mm)
        }
        setTexture(mm, Tm) {
          return -1 === this._samplers.indexOf(mm) && this._samplers.push(mm), this._textures[mm] = Tm, this
        }
        setFloat(mm, Tm) {
          return this._checkUniform(mm), this._floats[mm] = Tm, this
        }
        setInt(mm, Tm) {
          return this._checkUniform(mm), this._ints[mm] = Tm, this
        }
        setFloats(mm, Tm) {
          return this._checkUniform(mm), this._floatsArrays[mm] = Tm, this
        }
        setColor3(mm, Tm) {
          return this._checkUniform(mm), this._colors3[mm] = Tm, this
        }
        setColor4(mm, Tm) {
          return this._checkUniform(mm), this._colors4[mm] = Tm, this
        }
        setVector2(mm, Tm) {
          return this._checkUniform(mm), this._vectors2[mm] = Tm, this
        }
        setVector3(mm, Tm) {
          return this._checkUniform(mm), this._vectors3[mm] = Tm, this
        }
        setVector4(mm, Tm) {
          return this._checkUniform(mm), this._vectors4[mm] = Tm, this
        }
        setMatrix(mm, Tm) {
          return this._checkUniform(mm), this._matrices[mm] = Tm, this
        }
        render(mm) {
          const Tm = this.wG();
          if (!Tm) return;
          const fm = this._fullEngine;
          if (fm.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), fm.setState(!1), !this.nodeMaterialSource) {
            for (const mm in this._textures) this._drawWrapper.effect.setTexture(mm, this._textures[mm]);
            for (const mm in this._ints) this._drawWrapper.effect.setInt(mm, this._ints[mm]);
            for (const mm in this._floats) this._drawWrapper.effect.setFloat(mm, this._floats[mm]);
            for (const mm in this._floatsArrays) this._drawWrapper.effect.setArray(mm, this._floatsArrays[mm]);
            for (const mm in this._colors3) this._drawWrapper.effect.setColor3(mm, this._colors3[mm]);
            for (const mm in this._colors4) {
              const Tm = this._colors4[mm];
              this._drawWrapper.effect.setFloat4(mm, Tm.r, Tm.g, Tm.b, Tm.a)
            }
            for (const mm in this._vectors2) this._drawWrapper.effect.setVector2(mm, this._vectors2[mm]);
            for (const mm in this._vectors3) this._drawWrapper.effect.setVector3(mm, this._vectors3[mm]);
            for (const mm in this._vectors4) this._drawWrapper.effect.setVector4(mm, this._vectors4[mm]);
            for (const mm in this._matrices) this._drawWrapper.effect.setMatrix(mm, this._matrices[mm])
          }
          if (!this._texture || !this._rtWrapper) return;
          fm._enableGPUDebugMarkers && fm._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const hm = fm.currentViewport;
          if (this.isCube)
            for (let Am = 0; Am < 6; Am++) fm.bindFramebuffer(this._rtWrapper, Am, void 0, void 0, !0), fm.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", Am), this.autoClear && fm.clear(Tm.clearColor, !0, !1, !1), fm.drawElementsType(am.d.TriangleFillMode, 0, 6), fm.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let mm = 1;
            this._rtWrapper.is3D ? mm = this._rtWrapper.depth : this._rtWrapper.is2DArray && (mm = this._rtWrapper.layers);
            for (let hm = 0; hm < mm; hm++) {
              if (fm.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, hm), fm.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== mm ? hm / (mm - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", hm);
                for (const mm in this._textures) this._drawWrapper.effect.setTexture(mm, this._textures[mm])
              }
              this.autoClear && fm.clear(Tm.clearColor, !0, !1, !1), fm.drawElementsType(am.d.TriangleFillMode, 0, 6), fm.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          hm && fm.setViewport(hm), this.isCube && fm.generateMipMapsForCubemap(this._texture, !0), fm._enableGPUDebugMarkers && fm._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const Tm = this.getSize(),
            fm = new mm(this.name, Tm.width, this._fragment, this.wG(), this._fallbackTexture, this._generateMipMaps);
          return fm.hasAlpha = this.hasAlpha, fm.level = this.level, fm.coordinatesMode = this.coordinatesMode, fm
        }
        dispose() {
          const mm = this.wG();
          if (!mm) return;
          const Tm = mm.proceduralTextures.indexOf(this);
          Tm >= 0 && mm.proceduralTextures.splice(Tm, 1);
          const fm = this._vertexBuffers[rm.m.PositionKind];
          fm && (fm.dispose(), this._vertexBuffers[rm.m.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const fm = "function" === typeof Symbol && Symbol.metadata ? Object.create(Dm[Symbol.metadata] ?? null) : void 0;
        Tm = [(0, Zm.J)()], hm = [(0, Zm.J)()], Am = [(0, Zm.J)()], xm = [(0, Zm.J)()], wm = [(0, Zm.J)()], (0, zm.g)(mm, null, wm, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: mm => "refreshRate" in mm,
            get: mm => mm.refreshRate
          },
          metadata: fm
        }, null, im), (0, zm.g)(null, null, Tm, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: mm => "isEnabled" in mm,
            get: mm => mm.isEnabled,
            set: (mm, Tm) => {
              mm.isEnabled = Tm
            }
          },
          metadata: fm
        }, Rm, pm), (0, zm.g)(null, null, hm, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: mm => "autoClear" in mm,
            get: mm => mm.autoClear,
            set: (mm, Tm) => {
              mm.autoClear = Tm
            }
          },
          metadata: fm
        }, Em, om), (0, zm.g)(null, null, Am, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: mm => "_generateMipMaps" in mm,
            get: mm => mm._generateMipMaps,
            set: (mm, Tm) => {
              mm._generateMipMaps = Tm
            }
          },
          metadata: fm
        }, Om, qm), (0, zm.g)(null, null, xm, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: mm => "_size" in mm,
            get: mm => mm._size,
            set: (mm, Tm) => {
              mm._size = Tm
            }
          },
          metadata: fm
        }, jm, Vm), fm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fm
        })
      })(), mm
    })();

    function af(mm) {
      return "texture" in mm
    }

    function xf(mm) {
      return "value" in mm
    }
    async function wf(mm, Tm, hm) {
      const Am = [Tm.red, Tm.green, Tm.blue, Tm.alpha],
        am = [],
        xm = [];
      for (let fm = 0; fm < 4; fm++) {
        const mm = Am[fm];
        if (mm)
          if (af(mm)) {
            if (mm.sourceChannel < 0 || mm.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let Tm = am.indexOf(mm.texture); - 1 === Tm && (Tm = am.length, am.push(mm.texture)), xm[fm] = Tm
          } else {
            if (!xf(mm)) throw new Error("Invalid channel input configuration");
            if (mm.value < 0 || mm.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            xm[fm] = -1
          }
        else xm[fm] = -1
      }
      let wm = Tm.outputSize;
      if (!wm && am.length > 0) {
        let mm = 0;
        for (const Tm of am) {
          const fm = Tm.getSize(),
            hm = Math.max(fm.width, fm.height);
          hm > mm && (mm = hm, wm = fm.width === fm.height ? mm : fm)
        }
      }
      wm = wm || 512;
      const Dm = [],
        im = new Set;
      for (let fm = 0; fm < 4; fm++) {
        const mm = Am[fm],
          Tm = ["RED", "GREEN", "BLUE", "ALPHA"][fm];
        if (mm && af(mm)) {
          Dm.push(`${Tm}_FROM_TEXTURE`);
          const mm = xm[fm];
          im.add(mm)
        }
      }
      im.forEach((mm => {
        Dm.push(`USE_TEXTURE${mm}`)
      }));
      const Rm = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: hm.dO().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            hm.dO().isWebGPU ? await Promise.all([fm.e(387).then((() => fm(61959)))]) : await Promise.all([fm.e(388).then((() => fm(61965)))])
          },
          skipSceneRegistration: !0
        },
        pm = new Af(mm, wm, "textureMerger", hm, Rm);
      pm.refreshRate = -1, pm.defines = Dm.length > 0 ? "#define " + Dm.join("\n#define ") + "\n" : "";
      for (let fm = 0; fm < am.length; fm++) Em = am[fm], (om = pm).uOffset = Em.uOffset, om.vOffset = Em.vOffset, om.uScale = Em.uScale, om.vScale = Em.vScale, om.uAng = Em.uAng, om.vAng = Em.vAng, om.wAng = Em.wAng, om.uRotationCenter = Em.uRotationCenter, om.vRotationCenter = Em.vRotationCenter, pm.setTexture(`inputTexture${fm}`, am[fm]);
      var Em, om;
      for (let fm = 0; fm < 4; fm++) {
        const mm = Am[fm],
          Tm = ["red", "green", "blue", "alpha"][fm];
        if (mm && af(mm)) {
          const hm = xm[fm];
          pm.setInt(`${Tm}TextureIndex`, hm), pm.setInt(`${Tm}SourceChannel`, mm.sourceChannel)
        } else {
          let hm;
          hm = mm && xf(mm) ? mm.value : 3 === fm ? 1 : 0, pm.setFloat(`${Tm}ConstantValue`, hm)
        }
      }
      return await new Promise(((mm, Tm) => {
        pm.executeWhenReady((() => {
          try {
            pm.render(), mm(pm)
          } catch (fm) {
            Tm(fm instanceof Error ? fm : new Error(String(fm)))
          }
        }))
      }))
    }

    function Df(mm, Tm) {
      return {
        texture: mm,
        sourceChannel: Tm
      }
    }

    function Rf(mm) {
      return {
        value: mm
      }
    }

    function pf(mm, Tm, fm, hm) {
      return {
        red: mm,
        green: Tm,
        blue: fm,
        alpha: hm
      }
    }
    var Ef = fm(39939),
      of = fm(40045),
      Of = fm(37199),
      Yf = fm(40100),
      qf = fm(40030);
    class jf {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class Vf extends Ef.b {
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
        return !!this._options?.enableMultiview || this.zY > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new jf;
        super(null), void 0 === mm.deterministicLockstep && (mm.deterministicLockstep = !1), void 0 !== mm.timeStep && (this._timeStep = mm.timeStep), void 0 === mm.lockstepMaxSteps && (mm.lockstepMaxSteps = 4), this._options = mm, Of.d.SetMatrixPrecision(!!mm.useHighPrecisionMatrix), this._caps = {
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
        }, mm.enableMultiview && (this._caps.multiview = {
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
        }, mm.renderingCanvas && (this._renderingCanvas = mm.renderingCanvas), km.b.Log(`Babylon.js v${Ef.b.Version} - Null engine`);
        const Tm = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (Tm.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (Tm.Blob = function() {})
      }
      createVertexBuffer(mm) {
        const Tm = new of.e;
        return Tm.references = 1, Tm
      }
      createIndexBuffer(mm) {
        const Tm = new of.e;
        return Tm.references = 1, Tm
      }
      clear(mm, Tm, fm) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(mm, Tm, fm) {
        this._cachedViewport = mm
      }
      createUniformBuffer(mm) {
        const Tm = new of.e;
        return Tm.references = 1, Tm.yp = mm instanceof Array ? mm.length * Float32Array.BYTES_PER_ELEMENT : mm.byteLength, Tm
      }
      createDynamicUniformBuffer(mm) {
        return this.createUniformBuffer(mm)
      }
      updateUniformBuffer(mm, Tm, fm, hm) {}
      bindUniformBufferBase(mm, Tm, fm) {}
      bindUniformBlock(mm, Tm, fm) {}
      createShaderProgram(mm, Tm, fm, hm, Am) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(mm, Tm) {
        return []
      }
      getAttributes(mm, Tm) {
        return []
      }
      bindSamplers(mm) {
        this._currentEffect = null
      }
      enableEffect(mm) {
        mm = null !== mm && (0, qf.c)(mm) ? mm.effect : mm, this._currentEffect = mm, mm && (mm.onBind && mm.onBind(mm), mm._onBindObservable && mm._onBindObservable.notifyObservers(mm))
      }
      setStateCullFaceType(mm, Tm) {}
      setState(mm) {}
      setIntArray(mm, Tm) {
        return !0
      }
      setIntArray2(mm, Tm) {
        return !0
      }
      setIntArray3(mm, Tm) {
        return !0
      }
      setIntArray4(mm, Tm) {
        return !0
      }
      setFloatArray(mm, Tm) {
        return !0
      }
      setFloatArray2(mm, Tm) {
        return !0
      }
      setFloatArray3(mm, Tm) {
        return !0
      }
      setFloatArray4(mm, Tm) {
        return !0
      }
      setArray(mm, Tm) {
        return !0
      }
      setArray2(mm, Tm) {
        return !0
      }
      setArray3(mm, Tm) {
        return !0
      }
      setArray4(mm, Tm) {
        return !0
      }
      setMatrices(mm, Tm) {
        return !0
      }
      setMatrix3x3(mm, Tm) {
        return !0
      }
      setMatrix2x2(mm, Tm) {
        return !0
      }
      setFloat(mm, Tm) {
        return !0
      }
      setFloat2(mm, Tm, fm) {
        return !0
      }
      setFloat3(mm, Tm, fm, hm) {
        return !0
      }
      setBool(mm, Tm) {
        return !0
      }
      setFloat4(mm, Tm, fm, hm, Am) {
        return !0
      }
      setAlphaMode(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[fm] !== mm && (this.alphaState.setAlphaBlend(0 !== mm, 0), Tm || this.setDepthWrite(0 === mm), this._alphaMode[fm] = mm)
      }
      bindBuffers(mm, Tm, fm) {}
      wipeCaches(mm) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, mm && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(mm, Tm, fm, hm) {}
      drawElementsType(mm, Tm, fm, hm) {}
      drawArraysType(mm, Tm, fm, hm) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(mm) {}
      createTexture(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          xm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          wm = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const Dm = new kT.d(this, 1),
          im = String(mm);
        return Dm.url = im, Dm.generateMipMaps = !Tm, Dm.samplingMode = Am, Dm.invertY = fm, Dm.baseWidth = this._options.textureSize, Dm.baseHeight = this._options.textureSize, Dm.width = this._options.textureSize, Dm.height = this._options.textureSize, wm && (Dm.format = wm), xm && (Dm._buffer = xm), Dm.isReady = !0, am && setTimeout((() => {
          am(Dm)
        })), this._internalTexturesCache.push(Dm), Dm
      }
      _createHardwareRenderTargetWrapper(mm, Tm, fm) {
        const hm = new Yf.b(mm, Tm, fm, this);
        return this._renderTargetWrapperCache.push(hm), hm
      }
      createRenderTargetTexture(mm, Tm) {
        const fm = this._createHardwareRenderTargetWrapper(!1, !1, mm),
          hm = {};
        void 0 !== Tm && "object" === typeof Tm ? (hm.generateMipMaps = Tm.generateMipMaps, hm.generateDepthBuffer = void 0 === Tm.generateDepthBuffer || Tm.generateDepthBuffer, hm.generateStencilBuffer = hm.generateDepthBuffer && Tm.generateStencilBuffer, hm.type = void 0 === Tm.type ? 0 : Tm.type, hm.samplingMode = void 0 === Tm.samplingMode ? 3 : Tm.samplingMode) : (hm.generateMipMaps = Tm, hm.generateDepthBuffer = !0, hm.generateStencilBuffer = !1, hm.type = 0, hm.samplingMode = 3);
        const Am = new kT.d(this, 5);
        fm.setTexture(Am);
        const am = mm.width || mm,
          xm = mm.height || mm;
        return fm._generateDepthBuffer = hm.generateDepthBuffer, fm._generateStencilBuffer = !!hm.generateStencilBuffer, Am.baseWidth = am, Am.baseHeight = xm, Am.width = am, Am.height = xm, Am.isReady = !0, Am.samples = 1, Am.generateMipMaps = !!hm.generateMipMaps, Am.samplingMode = hm.samplingMode, Am.type = hm.type, this._internalTexturesCache.push(Am), fm
      }
      createMultiviewRenderTargetTexture(mm, Tm) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const fm = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: mm,
            height: Tm
          }),
          hm = new kT.d(this, 5, !0);
        return hm.baseWidth = mm, hm.baseHeight = Tm, hm.width = mm, hm.height = Tm, hm.isMultiview = !0, hm.isReady = !0, hm.format = 5, hm.samples = 1, fm.setTextures(hm), fm
      }
      bindMultiviewFramebuffer(mm) {
        this.bindFramebuffer(mm, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(mm, Tm) {
        const fm = this._createHardwareRenderTargetWrapper(!1, !0, mm),
          hm = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...Tm
          };
        hm.generateStencilBuffer = hm.generateDepthBuffer && hm.generateStencilBuffer, (1 !== hm.type || this._caps.textureFloatLinearFiltering) && (2 !== hm.type || this._caps.textureHalfFloatLinearFiltering) || (hm.samplingMode = 1), fm._generateDepthBuffer = hm.generateDepthBuffer, fm._generateStencilBuffer = !!hm.generateStencilBuffer;
        const Am = new kT.d(this, 5);
        return Am.baseWidth = mm, Am.baseHeight = mm, Am.width = mm, Am.height = mm, Am.isReady = !0, Am.isCube = !0, Am.samples = 1, Am.generateMipMaps = !!hm.generateMipMaps, Am.samplingMode = hm.samplingMode, Am.type = hm.type, this._internalTexturesCache.push(Am), fm
      }
      updateTextureSamplingMode(mm, Tm) {
        Tm.samplingMode = mm
      }
      createRawTexture(mm, Tm, fm, hm, Am, am, xm) {
        let wm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Dm = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          im = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Rm = new kT.d(this, 3);
        return Rm.baseWidth = Tm, Rm.baseHeight = fm, Rm.width = Tm, Rm.height = fm, Rm.format = hm, Rm.generateMipMaps = Am, Rm.samplingMode = xm, Rm.invertY = am, Rm._compression = wm, Rm.type = Dm, Rm._useSRGBBuffer = im, this._doNotHandleContextLost || (Rm._bufferView = mm), Rm
      }
      updateRawTexture(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          xm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        mm && (mm._bufferView = Tm, mm.format = fm, mm.invertY = hm, mm._compression = Am, mm.type = am, mm._useSRGBBuffer = xm)
      }
      bindFramebuffer(mm, Tm, fm, hm, Am) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = mm, this._currentFramebuffer = null, this._cachedViewport && !Am && this.setViewport(this._cachedViewport, fm, hm)
      }
      unBindFramebuffer(mm) {
        let Tm = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, Tm && Tm(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(mm) {
        const Tm = new of.e;
        return Tm.references = 1, Tm.yp = 1, Tm
      }
      updateDynamicTexture(mm, Tm, fm) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(mm) {}
      updateDynamicIndexBuffer(mm, Tm) {}
      updateDynamicVertexBuffer(mm, Tm, fm, hm) {}
      _bindTextureDirectly(mm, Tm) {
        return this._boundTexturesCache[this._activeChannel] !== Tm && (this._boundTexturesCache[this._activeChannel] = Tm, !0)
      }
      _bindTexture(mm, Tm) {
        mm < 0 || this._bindTextureDirectly(0, Tm)
      }
      _deleteBuffer(mm) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(mm) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(mm, Tm, fm, hm, Am) {}
      _uploadDataToTextureDirectly(mm, Tm) {}
      _uploadArrayBufferViewToTexture(mm, Tm) {}
      _uploadImageToTexture(mm, Tm) {}
    }
    fm(40147), fm(40188), fm(40145);
    async function If(mm) {
      const Tm = mm.getInternalTexture();
      if (!Tm || 1 !== Tm.source) return null;
      if (Tm.invertY) {
        const Tm = mm.wG()?.dO();
        if (!(Tm instanceof Vf)) return null
      }
      const fm = Tm._buffer;
      let hm, am = mm.mimeType;
      try {
        fm ? ArrayBuffer.isView(fm) ? hm = fm.buffer.slice(fm.byteOffset, fm.byteOffset + fm.byteLength) : fm instanceof ArrayBuffer ? hm = fm : fm instanceof Blob ? (hm = await fm.arrayBuffer(), am = fm.type || am) : "string" === typeof fm ? (hm = await Am.Tools.LoadFileAsync(fm), am = (0, Dm.e)(fm) || am) : "undefined" !== typeof HTMLImageElement && fm instanceof HTMLImageElement && (hm = await Am.Tools.LoadFileAsync(fm.src), am = (0, Dm.e)(fm.src) || am) : (hm = await Am.Tools.LoadFileAsync(Tm.url), am = (0, Dm.e)(Tm.url) || am)
      } catch {
        return null
      }
      if (hm && !am && Tm.url) {
        const mm = Tm.url.match(/^data:([^;,]+)/);
        am = mm ? mm[1] : (0, Dm.e)(Tm.url)
      }
      return hm && am ? {
        data: hm,
        mimeType: am
      } : null
    }
    const Kf = 1e-6,
      Qf = new qm.Color3(.04, .04, .04),
      nf = 1024,
      Jf = qm.Color3.White(),
      zf = qm.Color3.BlackReadOnly;

    function Zf(mm) {
      switch (mm) {
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

    function kf(mm, Tm, fm) {
      if (Tm < Qf.r) return 0;
      const hm = Qf.r,
        Am = mm * fm / (1 - Qf.r) + Tm - 2 * Qf.r,
        am = Am * Am - 4 * hm * (Qf.r - Tm);
      return Im.Clamp((-Am + Math.sqrt(am)) / (2 * hm), 0, 1)
    }

    function bf(mm) {
      const Tm = mm.diffuseColor.toLinearSpace(mm.wG().dO().useExactSrgbConversions).scale(.5),
        fm = mm.alpha,
        hm = function(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Cm.l(0, 1),
            fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Cm.l(0, .1),
            hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Cm.l(0, .1),
            Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Cm.l(1300, .1);
          return function(mm, Tm, fm, hm, Am) {
            return (1 - mm) * (1 - mm) * (1 - mm) * Tm + 3 * (1 - mm) * (1 - mm) * mm * fm + 3 * (1 - mm) * mm * mm * hm + mm * mm * mm * Am
          }(Math.pow(mm / Am.x, .333333), Tm.y, fm.y, hm.y, Am.y)
        }(Im.Clamp(mm.specularPower, 0, nf));
      return {
        baseColorFactor: [Tm.r, Tm.g, Tm.b, fm],
        metallicFactor: 0,
        roughnessFactor: hm
      }
    }

    function Sf(mm, Tm) {
      Tm.needAlphaBlending() ? mm.alphaMode = "BLEND" : Tm.needAlphaTesting() && (mm.alphaMode = "MASK", mm.alphaCutoff = Tm.alphaCutOff)
    }

    function ef(mm, Tm, fm) {
      const hm = new Uint8Array(mm * Tm * 4);
      for (let Am = 0; Am < hm.length; Am += 4) hm[Am] = hm[Am + 1] = hm[Am + 2] = hm[Am + 3] = 255;
      return nm.b.CreateRGBATexture(hm, mm, Tm, fm)
    }

    function Nf(mm) {
      if (mm instanceof Uint8Array) {
        const Tm = mm.length,
          fm = new Float32Array(mm.length);
        for (let hm = 0; hm < Tm; ++hm) fm[hm] = mm[hm] / 255;
        return fm
      }
      if (mm instanceof Float32Array) return mm;
      throw new Error("Unsupported pixel format!")
    }
    class Gf {
      constructor(mm) {
        this._exporter = mm, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(mm) {
        return mm ? this._textureMap.get(mm.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(mm, Tm) {
        const fm = bf(mm),
          hm = {
            name: mm.name
          };
        if (null == mm.backFaceCulling || mm.backFaceCulling || (mm.twoSidedLighting || Am.Tools.Warn(mm.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), hm.doubleSided = !0), Tm) {
          const Tm = [],
            Am = mm.diffuseTexture;
          Am && Tm.push(this.exportTextureAsync(Am).then((mm => {
            mm && (fm.baseColorTexture = mm)
          })));
          const am = mm.bumpTexture;
          am && Tm.push(this.exportTextureAsync(am).then((mm => {
            mm && (hm.normalTexture = mm, 1 !== am.level && (hm.normalTexture.scale = am.level))
          })));
          const xm = mm.emissiveTexture;
          xm && (hm.emissiveFactor = [1, 1, 1], Tm.push(this.exportTextureAsync(xm).then((mm => {
            mm && (hm.emissiveTexture = mm)
          }))));
          const wm = mm.ambientTexture;
          wm && Tm.push(this.exportTextureAsync(wm).then((mm => {
            if (mm) {
              const Tm = {
                index: mm.index
              };
              hm.occlusionTexture = Tm
            }
          }))), Tm.length > 0 && (this._exporter._materialNeedsUVsSet.add(mm), await Promise.all(Tm))
        }(mm.alpha < 1 || mm.opacityTexture) && (mm.alphaMode === Jm.b.ALPHA_COMBINE ? hm.alphaMode = "BLEND" : Am.Tools.Warn(mm.name + ": glTF 2.0 does not support alpha mode: " + mm.alphaMode.toString())), mm.emissiveColor && !mm.emissiveColor.equalsWithEpsilon(zf, Kf) && (hm.emissiveFactor = mm.emissiveColor.ahm()), hm.pbrMetallicRoughness = fm, Sf(hm, mm), await this._finishMaterialAsync(hm, mm);
        const am = this._exporter._materials;
        return am.push(hm), am.length - 1
      }
      async _finishMaterialAsync(mm, Tm) {
        const fm = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", mm, Tm),
          hm = [];
        for (const Am of fm) hm.push(this.exportTextureAsync(Am));
        await Promise.all(hm), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", mm, Tm)
      }
      _resizeTexturesToSameDimensions(mm, Tm, fm) {
        const hm = mm ? mm.getSize() : {
            width: 0,
            height: 0
          },
          Am = Tm ? Tm.getSize() : {
            width: 0,
            height: 0
          };
        let am, xm;
        return hm.width < Am.width ? (am = mm && mm instanceof Qm.c ? Km.i.CreateResizedCopy(mm, Am.width, Am.height, !0) : ef(Am.width, Am.height, fm), xm = Tm) : hm.width > Am.width ? (xm = Tm && Tm instanceof Qm.c ? Km.i.CreateResizedCopy(Tm, hm.width, hm.height, !0) : ef(hm.width, hm.height, fm), am = mm) : (am = mm, xm = Tm), {
          texture1: am,
          texture2: xm
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(mm, Tm, fm) {
        const hm = new Array;
        if (!mm && !Tm) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const Am = mm ? mm.wG() : Tm ? Tm.wG() : null;
        if (Am) {
          const am = this._resizeTexturesToSameDimensions(mm, Tm, Am),
            xm = am.texture1?.getSize();
          let wm, Dm;
          const im = xm.width,
            Rm = xm.height,
            pm = await am.texture1.readPixels(),
            Em = await am.texture2.readPixels();
          if (!pm) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (wm = Nf(pm), !Em) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          Dm = Nf(Em);
          const om = Dm.byteLength,
            Om = new Uint8Array(om),
            Ym = new Uint8Array(om),
            jm = 4,
            Vm = new qm.Color3(0, 0, 0);
          let Im = 0,
            Km = 0;
          for (let mm = 0; mm < Rm; ++mm)
            for (let Tm = 0; Tm < im; ++Tm) {
              const hm = (im * mm + Tm) * jm,
                xm = {
                  diffuseColor: new qm.Color3(wm[hm], wm[hm + 1], wm[hm + 2]).toLinearSpace(Am.dO().useExactSrgbConversions).multiply(fm.diffuseColor),
                  specularColor: new qm.Color3(Dm[hm], Dm[hm + 1], Dm[hm + 2]).toLinearSpace(Am.dO().useExactSrgbConversions).multiply(fm.specularColor),
                  glossiness: Dm[hm + 3] * fm.glossiness
                },
                Rm = this._convertSpecularGlossinessToMetallicRoughness(xm);
              Vm.r = Math.max(Vm.r, Rm.baseColor.r), Vm.g = Math.max(Vm.g, Rm.baseColor.g), Vm.b = Math.max(Vm.b, Rm.baseColor.b), Im = Math.max(Im, Rm.metallic), Km = Math.max(Km, Rm.roughness), Ym[hm] = 255 * Rm.baseColor.r, Ym[hm + 1] = 255 * Rm.baseColor.g, Ym[hm + 2] = 255 * Rm.baseColor.b, Ym[hm + 3] = am.texture1.hasAlpha ? 255 * wm[hm + 3] : 255, Om[hm] = 0, Om[hm + 1] = 255 * Rm.roughness, Om[hm + 2] = 255 * Rm.metallic, Om[hm + 3] = 255
            }
          const Qm = {
            baseColor: Vm,
            metallic: Im,
            roughness: Km
          };
          let nm = !1,
            Jm = !1;
          for (let mm = 0; mm < Rm; ++mm)
            for (let Tm = 0; Tm < im; ++Tm) {
              const fm = (im * mm + Tm) * jm;
              Ym[fm] /= Qm.baseColor.r > Kf ? Qm.baseColor.r : 1, Ym[fm + 1] /= Qm.baseColor.g > Kf ? Qm.baseColor.g : 1, Ym[fm + 2] /= Qm.baseColor.b > Kf ? Qm.baseColor.b : 1;
              const hm = qm.Color3.FromInts(Ym[fm], Ym[fm + 1], Ym[fm + 2]).toGammaSpace(Am.dO().useExactSrgbConversions);
              Ym[fm] = 255 * hm.r, Ym[fm + 1] = 255 * hm.g, Ym[fm + 2] = 255 * hm.b, hm.equalsWithEpsilon(Jf, Kf) || (Jm = !0), Om[fm + 1] /= Qm.roughness > Kf ? Qm.roughness : 1, Om[fm + 2] /= Qm.metallic > Kf ? Qm.metallic : 1;
              qm.Color3.FromInts(255, Om[fm + 1], Om[fm + 2]).equalsWithEpsilon(Jf, Kf) || (nm = !0)
            }
          return nm && hm.push((0, cm.EncodeImageAsync)(Om, im, Rm).then((mm => {
            Qm.metallicRoughnessTextureData = mm
          }))), Jm && hm.push((0, cm.EncodeImageAsync)(Ym, im, Rm).then((mm => {
            Qm.baseColorTextureData = mm
          }))), await Promise.all(hm).then((() => Qm))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(mm) {
        const Tm = this._getPerceivedBrightness(mm.diffuseColor),
          fm = this._getPerceivedBrightness(mm.specularColor),
          hm = 1 - this._getMaxComponent(mm.specularColor),
          Am = kf(Tm, fm, hm),
          am = mm.diffuseColor.scale(hm / (1 - Qf.r) / Math.max(1 - Am, Kf)),
          xm = mm.specularColor.subtract(Qf.scale(1 - Am)).scale(1 / Math.max(Am, Kf));
        let wm = qm.Color3.Lerp(am, xm, Am * Am);
        wm = wm.clampToRef(0, 1, wm);
        return {
          baseColor: wm,
          metallic: Am,
          roughness: 1 - mm.glossiness
        }
      }
      _getPerceivedBrightness(mm) {
        return Math.sqrt(.299 * mm.r * mm.r + .587 * mm.g * mm.g + .114 * mm.b * mm.b)
      }
      _getMaxComponent(mm) {
        return Math.max(mm.r, Math.max(mm.g, mm.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
        const im = [],
          Rm = {
            baseColor: mm,
            metallic: Tm,
            roughness: fm
          };
        if (Dm)
          if (xm instanceof FT) {
            if (xm.geometryOpacityTexture) {
              const mm = hm && hm.getInternalTexture() ? hm.getInternalTexture().uniqueId : 0,
                Tm = xm.geometryOpacityTexture && xm.geometryOpacityTexture.getInternalTexture() ? xm.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                fm = Number(`${mm}${Tm}`),
                Am = this._textureMap.get(fm);
              Am ? wm.baseColorTexture = Am : im.push(wf("baseColorOpacityTexture", pf(hm ? Df(hm, 0) : Rf(1), hm ? Df(hm, 1) : Rf(1), hm ? Df(hm, 2) : Rf(1), Df(xm.geometryOpacityTexture, 0)), xm.wG()).then((async mm => {
                const Tm = await this.exportTextureAsync(mm, fm);
                Tm && (wm.baseColorTexture = Tm)
              })))
            } else hm && im.push(this.exportTextureAsync(hm).then((mm => {
              mm && (wm.baseColorTexture = mm)
            })));
            if (xm._useMetallicFromMetallicTextureBlue && Am) im.push(this.exportTextureAsync(Am).then((mm => {
              mm && (wm.metallicRoughnessTexture = mm)
            })));
            else if (am || Am) {
              const mm = Am && Am.getInternalTexture() ? Am.getInternalTexture().uniqueId : 0,
                Tm = am && am.getInternalTexture() ? am.getInternalTexture().uniqueId : 0,
                fm = Number(`${mm}${Tm}`),
                hm = this._textureMap.get(fm);
              hm ? wm.metallicRoughnessTexture = hm : im.push(wf("MetalRoughTexture", pf(xm.ambientOcclusionTexture ? Df(xm.ambientOcclusionTexture, 0) : Rf(1), am ? Df(am, 0) : Rf(1), Am ? Df(Am, 0) : Rf(1)), xm.wG()).then((async mm => {
                const Tm = await this.exportTextureAsync(mm, fm);
                Tm && (wm.metallicRoughnessTexture = Tm)
              })))
            }
          } else hm && im.push(this.exportTextureAsync(hm).then((mm => {
            mm && (wm.baseColorTexture = mm)
          }))), Am && im.push(this.exportTextureAsync(Am).then((mm => {
            mm && (wm.metallicRoughnessTexture = mm)
          })));
        return im.length > 0 && (this._exporter._materialNeedsUVsSet.add(xm), await Promise.all(im)), Rm
      }
      _getTextureSampler(mm) {
        const Tm = {};
        if (!mm || !(mm instanceof Qm.c)) return Tm;
        const fm = this._getGLTFTextureWrapMode(mm.wrapU);
        10497 !== fm && (Tm.wrapS = fm);
        const hm = this._getGLTFTextureWrapMode(mm.wrapV);
        switch (10497 !== hm && (Tm.wrapT = hm), mm.samplingMode) {
          case Qm.c.LINEAR_LINEAR:
            Tm.magFilter = 9729, Tm.minFilter = 9729;
            break;
          case Qm.c.LINEAR_NEAREST:
            Tm.magFilter = 9729, Tm.minFilter = 9728;
            break;
          case Qm.c.NEAREST_LINEAR:
            Tm.magFilter = 9728, Tm.minFilter = 9729;
            break;
          case Qm.c.NEAREST_LINEAR_MIPLINEAR:
            Tm.magFilter = 9728, Tm.minFilter = 9987;
            break;
          case Qm.c.NEAREST_NEAREST:
            Tm.magFilter = 9728, Tm.minFilter = 9728;
            break;
          case Qm.c.NEAREST_LINEAR_MIPNEAREST:
            Tm.magFilter = 9728, Tm.minFilter = 9985;
            break;
          case Qm.c.LINEAR_NEAREST_MIPNEAREST:
            Tm.magFilter = 9729, Tm.minFilter = 9984;
            break;
          case Qm.c.LINEAR_NEAREST_MIPLINEAR:
            Tm.magFilter = 9729, Tm.minFilter = 9986;
            break;
          case Qm.c.NEAREST_NEAREST_MIPLINEAR:
            Tm.magFilter = 9728, Tm.minFilter = 9986;
            break;
          case Qm.c.LINEAR_LINEAR_MIPLINEAR:
            Tm.magFilter = 9729, Tm.minFilter = 9987;
            break;
          case Qm.c.LINEAR_LINEAR_MIPNEAREST:
            Tm.magFilter = 9729, Tm.minFilter = 9985;
            break;
          case Qm.c.NEAREST_NEAREST_MIPNEAREST:
            Tm.magFilter = 9728, Tm.minFilter = 9984
        }
        return Tm
      }
      _getGLTFTextureWrapMode(mm) {
        switch (mm) {
          case Qm.c.WRAP_ADDRESSMODE:
            return 10497;
          case Qm.c.CLAMP_ADDRESSMODE:
            return 33071;
          case Qm.c.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return Am.Tools.Error(`Unsupported Texture Wrap Mode ${mm}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(mm, Tm, fm) {
        const hm = {
            diffuseColor: mm._albedoColor,
            specularColor: mm._reflectivityColor,
            glossiness: mm._microSurface
          },
          Am = mm._albedoTexture,
          am = mm._reflectivityTexture,
          xm = mm._useMicroSurfaceFromReflectivityMapAlpha;
        if (am && !xm) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((Am || am) && fm) {
          this._exporter._materialNeedsUVsSet.add(mm);
          const fm = this._exportTextureSampler(Am || am),
            xm = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(Am, am, hm),
            wm = this._exporter._textures;
          if (xm.baseColorTextureData) {
            const mm = await this._exportImageAsync(`baseColor${wm.length}`, xm.baseColorTextureData);
            Tm.baseColorTexture = this._exportTextureInfo(mm, fm, Am?.coordinatesIndex)
          }
          if (xm.metallicRoughnessTextureData) {
            const mm = await this._exportImageAsync(`metallicRoughness${wm.length}`, xm.metallicRoughnessTextureData);
            Tm.metallicRoughnessTexture = this._exportTextureInfo(mm, fm, am?.coordinatesIndex)
          }
          return xm
        }
        return this._convertSpecularGlossinessToMetallicRoughness(hm)
      }
      async exportPBRMaterialAsync(mm, Tm) {
        const fm = {},
          hm = {
            name: mm.name
          },
          Am = mm.isMetallicWorkflow();
        if (Am) {
          const Tm = mm._albedoColor,
            hm = mm.alpha;
          Tm && (fm.baseColorFactor = [Tm.r, Tm.g, Tm.b, hm])
        }
        const am = Am ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(mm._albedoColor, mm._metallic, mm._roughness, mm._albedoTexture, mm._metallicTexture, mm._metallicTexture, mm, fm, Tm) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(mm, fm, Tm);
        await this._setMetallicRoughnessPbrMaterialAsync(am, mm, hm, fm, Tm), await this._finishMaterialAsync(hm, mm);
        const xm = this._exporter._materials;
        return xm.push(hm), xm.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(mm, Tm, fm, hm, am) {
        if (Sf(fm, Tm), mm.baseColor.equalsWithEpsilon(Jf, Kf) && Im.WithinEpsilon(Tm.alpha, 1, Kf) || (hm.baseColorFactor = [mm.baseColor.r, mm.baseColor.g, mm.baseColor.b, Tm.alpha]), null != mm.metallic && 1 !== mm.metallic && (hm.metallicFactor = mm.metallic), null != mm.roughness && 1 !== mm.roughness && (hm.roughnessFactor = mm.roughness), null == Tm.backFaceCulling || Tm.backFaceCulling || (Tm._twoSidedLighting || Am.Tools.Warn(Tm.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), fm.doubleSided = !0), am) {
          const mm = [],
            Am = Tm instanceof JT ? Tm._bumpTexture : Tm.geometryNormalTexture;
          Am && mm.push(this.exportTextureAsync(Am).then((mm => {
            mm && (fm.normalTexture = mm, 1 !== Am.level && (fm.normalTexture.scale = Am.level))
          })));
          const am = Tm instanceof JT ? Tm._ambientTexture : Tm.ambientOcclusionTexture;
          am && mm.push(new Promise((async mm => {
            if (Tm instanceof FT && hm.metallicRoughnessTexture) {
              const Tm = this._exportTextureSampler(am),
                fm = this._exporter._textures[hm.metallicRoughnessTexture.index].source,
                Am = this._exportTextureInfo(fm, Tm, am.coordinatesIndex);
              return this._textureMap.set(am.uniqueId, Am), this._exporter._extensionsPostExportTextures("exporter", Am, am), mm(Am)
            }
            return mm(await this.exportTextureAsync(am))
          })).then((async mm => {
            if (mm) {
              const hm = {
                index: mm.index,
                texCoord: mm.texCoord,
                extensions: mm.extensions
              };
              fm.occlusionTexture = hm, hm.strength = Tm instanceof JT ? Tm._ambientTextureStrength : Tm.ambientOcclusionTexture.level
            }
          })));
          const xm = Tm instanceof JT ? Tm._emissiveTexture : Tm.emissionColorTexture;
          xm && mm.push(this.exportTextureAsync(xm).then((mm => {
            mm && (fm.emissiveTexture = mm)
          }))), mm.length > 0 && (this._exporter._materialNeedsUVsSet.add(Tm), await Promise.all(mm))
        }
        const xm = Tm instanceof JT ? Tm._emissiveColor : Tm.emissionColor;
        xm.equalsWithEpsilon(zf, Kf) || (fm.emissiveFactor = xm.ahm()), fm.pbrMetallicRoughness = hm
      }
      async exportOpenPBRMaterialAsync(mm, Tm) {
        const fm = {},
          hm = {
            name: mm.name
          },
          Am = mm.baseColor,
          am = mm.geometryOpacity;
        Am && (fm.baseColorFactor = [Am.r, Am.g, Am.b, am]);
        const xm = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(mm.baseColor, mm.baseMetalness, mm.specularRoughness, mm.baseColorTexture, mm.baseMetalnessTexture, mm.specularRoughnessTexture, mm, fm, Tm);
        await this._setMetallicRoughnessPbrMaterialAsync(xm, mm, hm, fm, Tm), await this._finishMaterialAsync(hm, mm);
        const wm = this._exporter._materials;
        return wm.push(hm), wm.length - 1
      }
      async exportTextureAsync(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = this._textureMap.get(Tm ?? mm.uniqueId);
        if (fm) return fm;
        const hm = this._exportTextureSampler(mm),
          Am = await this._exportTextureImageAsync(mm);
        return fm = this._exportTextureInfo(Am, hm, mm.coordinatesIndex), this._textureMap.set(Tm ?? mm.uniqueId, fm), this._exporter._extensionsPostExportTextures("exporter", fm, mm), fm
      }
      async _exportTextureImageAsync(mm) {
        const Tm = mm.mimeType ?? "none",
          fm = this._internalTextureToImage,
          hm = mm.getInternalTexture().uniqueId;
        fm[hm] = fm[hm] || {};
        let am = fm[hm][Tm];
        return void 0 === am && (am = (async () => {
          const fm = await If(mm);
          if (fm && Zf(fm.mimeType) && ("none" === Tm || fm.mimeType === Tm)) return await this._exportImageAsync(mm.name, new Blob([fm.data], {
            type: fm.mimeType
          }));
          let hm = "image/png";
          "none" !== Tm && (Zf(Tm) ? hm = Tm : (hm = "image/png", Am.Tools.Warn(`Unsupported media type: ${Tm}. Exporting texture as PNG.`)));
          const am = mm.getSize(),
            xm = await (0, Km.g)(mm),
            wm = await (0, cm.EncodeImageAsync)(xm, am.width, am.height, hm);
          return await this._exportImageAsync(mm.name, wm)
        })(), fm[hm][Tm] = am), await am
      }
      async _exportImageAsync(mm, Tm) {
        const fm = this._exporter._images;
        let hm;
        if (this._exporter._shouldUseGlb) {
          hm = {
            name: mm,
            mimeType: Tm.type,
            bufferView: void 0
          };
          const fm = await Tm.arrayBuffer(),
            Am = this._exporter._bufferManager.createBufferView(new Uint8Array(fm));
          this._exporter._bufferManager.setBufferView(hm, Am)
        } else {
          const am = mm.replace(/\.\/|\/|\.\\|\\/g, "_"),
            xm = function(mm) {
              switch (mm) {
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
            }(Tm.type);
          let wm = am + xm;
          fm.some((mm => mm.uri === wm)) && (wm = `${am}_${Am.Tools.RandomId()}${xm}`), hm = {
            name: mm,
            uri: wm
          }, this._exporter._imageData[wm] = Tm
        }
        return fm.push(hm), fm.length - 1
      }
      _exportTextureInfo(mm, Tm, fm) {
        const hm = this._exporter._textures;
        let Am = hm.findIndex((fm => fm.sampler == Tm && fm.source === mm)); - 1 === Am && (Am = hm.length, hm.push({
          source: mm,
          sampler: Tm
        }));
        const am = {
          index: Am
        };
        return fm && (am.texCoord = fm), am
      }
      _exportTextureSampler(mm) {
        const Tm = this._getTextureSampler(mm),
          fm = this._exporter._samplers,
          hm = fm.findIndex((mm => mm.minFilter === Tm.minFilter && mm.magFilter === Tm.magFilter && mm.wrapS === Tm.wrapS && mm.wrapT === Tm.wrapT));
        return -1 !== hm ? hm : (fm.push(Tm), fm.length - 1)
      }
    }
    var Xf = fm(40180),
      Pf = fm(40316);
    (0, Pf.c)();
    var Hf = fm(37191);
    const yf = hm.Matrix.Compose(new hm.WO(-1, 1, 1), hm.Quaternion.Identity(), hm.WO.Zero());

    function Cf(mm, Tm) {
      if (!(mm instanceof pm.c)) return !1;
      if (Tm) {
        if (!mm.getWorldMatrix().equalsWithEpsilon(hm.Matrix.IdentityReadOnly, Hf.c)) return !1
      } else {
        if (!mm.getWorldMatrix().multiplyToRef(yf, hm.TmpVectors.Matrix[0]).equalsWithEpsilon(hm.Matrix.IdentityReadOnly, Hf.c)) return !1
      }
      return !(mm instanceof Em.c && mm.geometry)
    }
    const rf = hm.WO.ZeroReadOnly,
      sf = hm.Quaternion.Identity(),
      lf = hm.WO.OneReadOnly,
      Mf = new hm.WO(-1, 1, 1);

    function uf(mm, Tm) {
      const {
        byteOffset: fm,
        byteStride: hm,
        type: Am,
        normalized: am
      } = mm, xm = mm.getSize(), wm = Tm.reduce(((mm, Tm) => Tm.getTotalVertices() > mm ? Tm.getTotalVertices() : mm), -Number.MAX_VALUE);
      return {
        byteOffset: fm,
        byteStride: hm,
        componentCount: xm,
        type: Am,
        count: wm * xm,
        normalized: am,
        totalVertices: wm,
        kind: mm.getKind()
      }
    }

    function Bf(mm) {
      switch (mm) {
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

    function Lf(mm) {
      switch (mm) {
        case Rm.g.PositionKind:
        case Rm.g.NormalKind:
        case Rm.g.TangentKind:
        case Rm.g.ColorKind:
        case Rm.g.MatricesIndicesKind:
        case Rm.g.MatricesIndicesExtraKind:
        case Rm.g.MatricesWeightsKind:
        case Rm.g.MatricesWeightsExtraKind:
        case Rm.g.UVKind:
        case Rm.g.UV2Kind:
        case Rm.g.UV3Kind:
        case Rm.g.UV4Kind:
        case Rm.g.UV5Kind:
        case Rm.g.UV6Kind:
          return !0
      }
      return !1
    }

    function vf(mm) {
      const Tm = Math.sqrt(mm.x * mm.x + mm.y * mm.y + mm.z * mm.z);
      Tm > 0 && (mm.x /= Tm, mm.y /= Tm, mm.z /= Tm)
    }

    function tf(mm) {
      return mm.x *= -1, mm
    }

    function Uf(mm) {
      if (mm.x * mm.x + mm.y * mm.y > .5) {
        const Tm = Math.abs(mm.x),
          fm = Math.abs(mm.y);
        if (Tm > fm) {
          const fm = Math.sign(mm.x);
          mm.x = Tm, mm.y *= -fm, mm.z *= -fm, mm.w *= fm
        } else {
          const Tm = Math.sign(mm.y);
          mm.x *= -Tm, mm.y = fm, mm.z *= Tm, mm.w *= -Tm
        }
      } else {
        const Tm = Math.abs(mm.z),
          fm = Math.abs(mm.w);
        if (Tm > fm) {
          const fm = Math.sign(mm.z);
          mm.x *= -fm, mm.y *= fm, mm.z = Tm, mm.w *= -fm
        } else {
          const Tm = Math.sign(mm.w);
          mm.x *= Tm, mm.y *= -Tm, mm.z *= -Tm, mm.w = fm
        }
      }
      return mm
    }

    function df(mm) {
      mm.Z8(-mm.z, mm.w, mm.x, -mm.y)
    }

    function gf(mm, Tm) {
      const fm = hm.WO.FromArrayToRef(Tm.translation || [0, 0, 0], 0, hm.TmpVectors.WO[0]),
        Am = hm.Quaternion.FromArrayToRef(Tm.rotation || [0, 0, 0, 1], 0, hm.TmpVectors.Quaternion[0]),
        am = hm.Matrix.ComposeToRef(lf, Am, fm, hm.TmpVectors.Matrix[0]),
        xm = hm.WO.FromArrayToRef(mm.translation || [0, 0, 0], 0, hm.TmpVectors.WO[2]),
        wm = hm.Quaternion.FromArrayToRef(mm.rotation || [0, 0, 0, 1], 0, hm.TmpVectors.Quaternion[1]),
        Dm = hm.Matrix.ComposeToRef(lf, wm, xm, hm.TmpVectors.Matrix[1]);
      am.multiplyToRef(Dm, Dm), Dm.decompose(void 0, Am, fm), fm.equalsWithEpsilon(rf, Hf.c) ? delete Tm.translation : Tm.translation = fm.ahm(), Am.equalsWithEpsilon(sf, Hf.c) ? delete Tm.rotation : Tm.rotation = Am.ahm(), Tm.scale && delete Tm.scale
    }

    function Wf(mm, Tm) {
      if (!(Tm instanceof pm.c)) return !1;
      if (!(1 === Tm.getChildren().length && 0 === mm.getChildren().length && mm.parent === Tm)) return !1;
      const fm = mm.wG(),
        hm = mm instanceof Pf.g && !fm.useRightHandedSystem ? Mf : lf;
      return !!Tm.fi.equalsWithEpsilon(hm, Hf.c) || (km.b.Warn(`Cannot collapse node ${mm.name} into parent node ${Tm.name} with modified scaling.`), !1)
    }

    function Ff(mm) {
      if (mm instanceof Array) {
        const Tm = new Float32Array(mm);
        return new Uint8Array(Tm.buffer, Tm.byteOffset, Tm.byteLength)
      }
      return ArrayBuffer.isView(mm) ? new Uint8Array(mm.buffer, mm.byteOffset, mm.byteLength) : new Uint8Array(mm)
    }

    function mh(mm, Tm) {
      for (const [fm, hm] of Object.entries(mm)) {
        const Am = Tm[fm];
        (Array.isArray(hm) && Array.isArray(Am) && Th(hm, Am) || hm === Am) && delete mm[fm]
      }
      return mm
    }

    function Th(mm, Tm) {
      return mm.length === Tm.length && mm.every(((mm, fm) => mm === Tm[fm]))
    }
    const fh = new Map([
      [Int8Array, (mm, Tm, fm) => mm.setInt8(Tm, fm)],
      [Uint8Array, (mm, Tm, fm) => mm.setUint8(Tm, fm)],
      [Uint8ClampedArray, (mm, Tm, fm) => mm.setUint8(Tm, fm)],
      [Int16Array, (mm, Tm, fm) => mm.setInt16(Tm, fm, !0)],
      [Uint16Array, (mm, Tm, fm) => mm.setUint16(Tm, fm, !0)],
      [Int32Array, (mm, Tm, fm) => mm.setInt32(Tm, fm, !0)],
      [Uint32Array, (mm, Tm, fm) => mm.setUint32(Tm, fm, !0)],
      [Float32Array, (mm, Tm, fm) => mm.setFloat32(Tm, fm, !0)],
      [Float64Array, (mm, Tm, fm) => mm.setFloat64(Tm, fm, !0)]
    ]);
    class hh {
      writeTypedArray(mm) {
        this._checkGrowBuffer(mm.byteLength);
        const Tm = fh.get(mm.constructor);
        for (let fm = 0; fm < mm.length; fm++) Tm(this._dataView, this._byteOffset, mm[fm]), this._byteOffset += mm.BYTES_PER_ELEMENT
      }
      constructor(mm) {
        this._data = new Uint8Array(mm), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(mm) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, mm), this._byteOffset++
      }
      writeInt8(mm) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, mm), this._byteOffset++
      }
      writeInt16(mm) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, mm, !0), this._byteOffset += 2
      }
      writeUInt16(mm) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, mm, !0), this._byteOffset += 2
      }
      writeInt32(mm) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, mm, !0), this._byteOffset += 4
      }
      writeUInt32(mm) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, mm, !0), this._byteOffset += 4
      }
      writeFloat32(mm) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, mm, !0), this._byteOffset += 4
      }
      writeFloat64(mm) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, mm, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(mm) {
        const Tm = this.byteOffset + mm;
        if (Tm > this._data.byteLength) {
          const mm = new Uint8Array(2 * Tm);
          mm.set(this._data), this._data = mm, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function Ah(mm) {
      return mm % 4 === 0 ? 4 : mm % 2 === 0 ? 2 : 1
    }
    class ah {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(mm) {
        let Tm = 0;
        this._bufferViewToData.forEach((mm => {
          Tm += mm.byteLength
        }));
        const fm = new hh(Tm),
          hm = Array.from(this._bufferViewToData.keys()).sort(((mm, Tm) => Ah(Tm.byteLength) - Ah(mm.byteLength)));
        for (const Am of hm) {
          Am.byteOffset = fm.byteOffset, mm.push(Am);
          const Tm = mm.length - 1,
            hm = this.getPropertiesWithBufferView(Am);
          for (const mm of hm) mm.bufferView = Tm;
          fm.writeTypedArray(this._bufferViewToData.get(Am)), this._bufferViewToData.delete(Am)
        }
        return fm.getOutputData()
      }
      createBufferView(mm, Tm) {
        const fm = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: mm.byteLength,
          byteStride: Tm
        };
        return this._bufferViewToData.set(fm, mm), fm
      }
      createAccessor(mm, Tm, fm, hm, Am, am, xm) {
        this._verifyBufferView(mm);
        const wm = {
          bufferView: void 0,
          componentType: fm,
          count: hm,
          type: Tm,
          min: am?.min,
          max: am?.max,
          normalized: xm,
          byteOffset: Am
        };
        return this.setBufferView(wm, mm), this._accessorToBufferView.set(wm, mm), wm
      }
      setBufferView(mm, Tm) {
        this._verifyBufferView(Tm);
        this.getPropertiesWithBufferView(Tm).push(mm)
      }
      removeBufferView(mm) {
        const Tm = this.getPropertiesWithBufferView(mm);
        for (const fm of Tm) void 0 !== fm.bufferView && delete fm.bufferView;
        this._bufferViewToData.delete(mm), this._bufferViewToProperties.delete(mm), this._accessorToBufferView.forEach(((Tm, fm) => {
          Tm === mm && (void 0 !== fm.byteOffset && delete fm.byteOffset, this._accessorToBufferView.delete(fm))
        }))
      }
      getBufferView(mm) {
        const Tm = this._accessorToBufferView.get(mm);
        return this._verifyBufferView(Tm), Tm
      }
      getPropertiesWithBufferView(mm) {
        return this._verifyBufferView(mm), this._bufferViewToProperties.set(mm, this._bufferViewToProperties.get(mm) ?? []), this._bufferViewToProperties.get(mm)
      }
      getData(mm) {
        return this._verifyBufferView(mm), this._bufferViewToData.get(mm)
      }
      _verifyBufferView(mm) {
        if (void 0 === mm || !this._bufferViewToData.has(mm)) throw new Error(`BufferView ${mm} not found in BufferManager.`)
      }
    }
    var xh = fm(40319);
    (0, xh.f)();
    var wh = fm(40552);
    (0, wh.h)();
    var Dh = fm(40357),
      ih = fm(41155);
    (0, ih.c)();
    let Rh = (() => {
      var mm;
      let Tm, fm, hm = [],
        Am = [],
        am = [],
        xm = [];
      return mm = class {
        get influence() {
          return this._influence
        }
        set influence(mm) {
          if (this._influence === mm) return;
          const Tm = this._influence;
          this._influence = mm, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === Tm || 0 === mm)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(mm) {
          this._animationPropertiesOverride = mm
        }
        constructor(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            wm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = mm, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new Tf.c, this._onDataLayoutChanged = new Tf.c, this.id = (0, zm.i)(this, hm, void 0), this.morphTargetManager = ((0, zm.i)(this, Am), (0, zm.i)(this, am, null)), this._animationPropertiesOverride = ((0, zm.i)(this, xm), null), this.id = mm, this.morphTargetManager = wm, this._scene = fm || Ym.c.LastCreatedScene, this.influence = Tm, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        lxm(mm) {
          const Tm = this.hasPositions;
          this._positions = mm, Tm !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(mm) {
          const Tm = this.hasNormals;
          this._normals = mm, Tm !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(mm) {
          const Tm = this.hasTangents;
          this._tangents = mm, Tm !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(mm) {
          const Tm = this.hasUVs;
          this._uvs = mm, Tm !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(mm) {
          const Tm = this.hasUV2s;
          this._uv2s = mm, Tm !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(mm) {
          const Tm = this.hasColors;
          this._colors = mm, Tm !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const Tm = cT.d.Clone((() => new mm(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return Tm._positions = this._positions, Tm._normals = this._normals, Tm._tangents = this._tangents, Tm._uvs = this._uvs, Tm._uv2s = this._uv2s, Tm._colors = this._colors, Tm
        }
        serialize() {
          const mm = {};
          return mm.name = this.name, mm.influence = this.influence, null != this.id && (mm.id = this.id), mm.uniqueId = this.uniqueId, mm.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (mm.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (mm.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (mm.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (mm.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (mm.colors = Array.prototype.slice.call(this.getColors())), cT.d.AppendSerializedAnimations(this, mm), mm
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(Tm, fm) {
          let hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const Am = new mm(Tm.name, Tm.influence, fm, hm);
          if (Am.lxm(Tm.positions), null != Tm.id && (Am.id = Tm.id), Tm.normals && Am.setNormals(Tm.normals), Tm.tangents && Am.setTangents(Tm.tangents), Tm.uvs && Am.setUVs(Tm.uvs), Tm.uv2s && Am.setUV2s(Tm.uv2s), Tm.colors && Am.setColors(Tm.colors), Tm.animations) {
            for (let mm = 0; mm < Tm.animations.length; mm++) {
              const fm = Tm.animations[mm],
                hm = (0, MT.c)("BABYLON.Animation");
              hm && Am.animations.push(hm.Parse(fm))
            }
            Tm.autoAnimate && fm && fm.beginAnimation(Am, Tm.autoAnimateFrom, Tm.autoAnimateTo, Tm.autoAnimateLoop, Tm.autoAnimateSpeed || 1)
          }
          return Am
        }
        static FromMesh(Tm, fm, hm) {
          fm || (fm = Tm.name);
          const Am = new mm(fm, hm, Tm.wG(), Tm.morphTargetManager);
          return Am.lxm(Tm.getVerticesData(rm.m.PositionKind)), Tm.isVerticesDataPresent(rm.m.NormalKind) && Am.setNormals(Tm.getVerticesData(rm.m.NormalKind)), Tm.isVerticesDataPresent(rm.m.TangentKind) && Am.setTangents(Tm.getVerticesData(rm.m.TangentKind)), Tm.isVerticesDataPresent(rm.m.UVKind) && Am.setUVs(Tm.getVerticesData(rm.m.UVKind)), Tm.isVerticesDataPresent(rm.m.UV2Kind) && Am.setUV2s(Tm.getVerticesData(rm.m.UV2Kind)), Tm.isVerticesDataPresent(rm.m.ColorKind) && Am.setColors(Tm.getVerticesData(rm.m.ColorKind)), Am
        }
      }, (() => {
        const wm = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Tm = [(0, Zm.J)()], fm = [(0, Zm.J)()], (0, zm.g)(null, null, Tm, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: mm => "id" in mm,
            get: mm => mm.id,
            set: (mm, Tm) => {
              mm.id = Tm
            }
          },
          metadata: wm
        }, hm, Am), (0, zm.g)(null, null, fm, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: mm => "morphTargetManager" in mm,
            get: mm => mm.morphTargetManager,
            set: (mm, Tm) => {
              mm.morphTargetManager = Tm
            }
          },
          metadata: wm
        }, am, xm), wm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wm
        })
      })(), mm
    })();
    var ph, Eh = fm(41212),
      oh = fm(40355);
    ! function(mm) {
      mm[mm.INTANGENT = 0] = "INTANGENT", mm[mm.OUTTANGENT = 1] = "OUTTANGENT"
    }(ph || (ph = {}));
    class Oh {
      static _IsTransformable(mm) {
        return mm && (mm instanceof pm.c || mm instanceof xh.b || mm instanceof oh.e)
      }
      static _CreateNodeAnimation(mm, Tm, fm, hm, am) {
        if (this._IsTransformable(mm)) {
          const xm = [],
            wm = [],
            Dm = Tm.getKeys(),
            im = Oh._CalculateMinMaxKeyFrames(Dm),
            Rm = Oh._DeduceInterpolation(Dm, fm, hm),
            pm = Rm.interpolationType,
            Em = Rm.shouldBakeAnimation;
          if (Em ? Oh._CreateBakedAnimation(mm, Tm, fm, im.min, im.max, Tm.framePerSecond, am, xm, wm, im, hm) : "LINEAR" === pm || "STEP" === pm ? Oh._CreateLinearOrStepAnimation(mm, Tm, fm, xm, wm, hm) : "CUBICSPLINE" === pm ? Oh._CreateCubicSplineAnimation(mm, Tm, fm, xm, wm, hm) : Oh._CreateBakedAnimation(mm, Tm, fm, im.min, im.max, Tm.framePerSecond, am, xm, wm, im, hm), xm.length && wm.length) {
            return {
              inputs: xm,
              outputs: wm,
              samplerInterpolation: pm,
              inputsMin: Em ? im.min : Am.Tools.FloatRound(im.min / Tm.framePerSecond),
              inputsMax: Em ? im.max : Am.Tools.FloatRound(im.max / Tm.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(mm) {
        let Tm = null,
          fm = "VEC3",
          hm = !1;
        const am = mm.targetProperty.split(".");
        switch (am[0]) {
          case "fi":
            Tm = "scale";
            break;
          case "position":
            Tm = "translation";
            break;
          case "rotation":
            fm = "VEC4", Tm = "rotation";
            break;
          case "rotationQuaternion":
            fm = "VEC4", hm = !0, Tm = "rotation";
            break;
          case "influence":
            fm = "SCALAR", Tm = "weights";
            break;
          default:
            Am.Tools.Error(`Unsupported animatable property ${am[0]}`)
        }
        return Tm ? {
          animationChannelTargetPath: Tm,
          dataAccessorType: fm,
          useQuaternion: hm
        } : (Am.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm) {
        let pm;
        if (Oh._IsTransformable(mm) && mm.animations)
          for (const Em of mm.animations) {
            if (Rm && !Rm(Em)) continue;
            const Am = Oh._DeduceAnimationInfo(Em);
            Am && (pm = {
              name: Em.name,
              samplers: [],
              channels: []
            }, Oh._AddAnimation(`${Em.name}`, Em.hasRunningRuntimeAnimations ? Tm : pm, mm, Em, Am.dataAccessorType, Am.animationChannelTargetPath, hm, am, xm, wm, Am.useQuaternion, Dm, im), pm.samplers.length && pm.channels.length && fm.push(pm))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm) {
        let pm;
        if (mm instanceof Eh.c) {
          const Am = mm.morphTargetManager;
          if (Am)
            for (let Em = 0; Em < Am.numTargets; ++Em) {
              const om = Am.getTarget(Em);
              for (const Om of om.animations) {
                if (Rm && !Rm(Om)) continue;
                const om = new ih.b(`${Om.name}`, "influence", Om.framePerSecond, Om.dataType, Om.Ea, Om.enableBlending),
                  Ym = [],
                  qm = Om.getKeys();
                for (let mm = 0; mm < qm.length; ++mm) {
                  const Tm = qm[mm];
                  for (let mm = 0; mm < Am.numTargets; ++mm) mm == Em ? Ym.push(Tm) : Ym.push({
                    frame: Tm.frame,
                    value: 0
                  })
                }
                om.setKeys(Ym, !0);
                const jm = Oh._DeduceAnimationInfo(om);
                jm && (pm = {
                  name: om.name,
                  samplers: [],
                  channels: []
                }, Oh._AddAnimation(Om.name, Om.hasRunningRuntimeAnimations ? Tm : pm, mm, om, jm.dataAccessorType, jm.animationChannelTargetPath, hm, am, xm, wm, jm.useQuaternion, Dm, im, Am.numTargets), pm.samplers.length && pm.channels.length && fm.push(pm))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im) {
        let Rm;
        if (mm.animationGroups) {
          const pm = mm.animationGroups;
          for (const Em of pm) {
            const pm = new Map,
              om = new Map,
              Om = new Set,
              Ym = Em.to - Em.from;
            Rm = {
              name: Em.name,
              channels: [],
              samplers: []
            };
            for (let Tm = 0; Tm < Em.targetedAnimations.length; ++Tm) {
              const im = Em.targetedAnimations[Tm],
                Ym = im.target,
                qm = im.animation;
              if (Dm && !Dm(qm)) continue;
              const jm = wm.has(Ym);
              if (this._IsTransformable(Ym) || 1 === Ym.length && this._IsTransformable(Ym[0])) {
                const mm = Oh._DeduceAnimationInfo(im.animation);
                if (mm) {
                  const Tm = this._IsTransformable(Ym) ? Ym : this._IsTransformable(Ym[0]) ? Ym[0] : null;
                  Tm && Oh._AddAnimation(`${qm.name}`, Rm, Tm, qm, mm.dataAccessorType, mm.animationChannelTargetPath, fm, hm, Am, am, mm.useQuaternion, xm, jm)
                }
              } else if (Ym instanceof Rh || 1 === Ym.length && Ym[0] instanceof Rh) {
                if (Oh._DeduceAnimationInfo(im.animation)) {
                  const Tm = Ym instanceof Rh ? Ym : Ym[0];
                  if (Tm) {
                    const fm = mm.morphTargetManagers.find((mm => {
                      for (let fm = 0; fm < mm.numTargets; ++fm)
                        if (mm.getTarget(fm) === Tm) return !0;
                      return !1
                    }));
                    if (fm) {
                      const hm = mm.meshes.find((mm => mm.morphTargetManager === fm));
                      hm && (pm.has(hm) || pm.set(hm, new Map), pm.get(hm)?.set(Tm, qm), Om.add(hm), om.set(hm, qm))
                    }
                  }
                }
              }
            }
            Om.forEach((mm => {
              const Tm = mm.morphTargetManager;
              let wm = null;
              const Dm = [],
                im = om.get(mm).getKeys(),
                Om = im.length;
              for (let fm = 0; fm < Om; ++fm)
                for (let hm = 0; hm < Tm.numTargets; ++hm) {
                  const Am = Tm.getTarget(hm),
                    am = pm.get(mm);
                  if (am) {
                    const Tm = am.get(Am);
                    Tm ? (wm || (wm = new ih.b(`${Em.name}_${mm.name}_MorphWeightAnimation`, "influence", Tm.framePerSecond, ih.b.ANIMATIONTYPE_FLOAT, Tm.Ea, Tm.enableBlending)), Dm.push(Tm.getKeys()[fm])) : Dm.push({
                      frame: Em.from + Ym / Om * fm,
                      value: Am.influence,
                      inTangent: im[0].inTangent ? 0 : void 0,
                      outTangent: im[0].outTangent ? 0 : void 0
                    })
                  }
                }
              wm.setKeys(Dm, !0);
              const qm = Oh._DeduceAnimationInfo(wm);
              qm && Oh._AddAnimation(`${Em.name}_${mm.name}_MorphWeightAnimation`, Rm, mm, wm, qm.dataAccessorType, qm.animationChannelTargetPath, fm, hm, Am, am, qm.useQuaternion, xm, !1, Tm?.numTargets)
            })), Rm.channels.length && Rm.samplers.length && (im?.set(Em, Tm.length), Tm.push(Rm))
          }
        }
      }
      static _AddAnimation(mm, Tm, fm, Am, am, xm, wm, Dm, im, Rm, pm, Em, om, Om) {
        const Ym = Oh._CreateNodeAnimation(fm, Am, xm, pm, Em);
        let qm, jm, Vm, Im, Km, Qm;
        if (Ym) {
          if (Om) {
            let mm, Tm = 0;
            const fm = [];
            for (; Ym.inputs.length > 0;) mm = Ym.inputs.shift(), Tm % Om == 0 && fm.push(mm), Tm++;
            Ym.inputs = fm
          }
          const mm = wm.get(fm),
            Am = new Float32Array(Ym.inputs);
          qm = Dm.createBufferView(Am), jm = Dm.createAccessor(qm, "SCALAR", 5126, Ym.inputs.length, void 0, {
            min: [Ym.inputsMin],
            max: [Ym.inputsMax]
          }), Rm.push(jm), Vm = Rm.length - 1;
          const im = new hm.Quaternion,
            pm = new hm.WO,
            Em = new hm.WO,
            nm = fm instanceof xh.b,
            Jm = Bf(am),
            cm = new Float32Array(Ym.outputs.length * Jm);
          Ym.outputs.forEach((function(mm, Tm) {
            let fm = mm;
            switch (xm) {
              case "translation":
                om && (hm.WO.FromArrayToRef(mm, 0, Em), tf(Em), Em.toArray(fm));
                break;
              case "rotation":
                4 === mm.length ? hm.Quaternion.FromArrayToRef(mm, 0, im) : (fm = new Array(4), hm.WO.FromArrayToRef(mm, 0, pm), hm.Quaternion.FromEulerVectorToRef(pm, im)), om && (Uf(im), nm && df(im)), im.toArray(fm)
            }
            cm.set(fm, Tm * Jm)
          })), qm = Dm.createBufferView(cm), jm = Dm.createAccessor(qm, am, 5126, Ym.outputs.length), Rm.push(jm), Im = Rm.length - 1, Km = {
            interpolation: Ym.samplerInterpolation,
            input: Vm,
            output: Im
          }, Tm.samplers.push(Km), Qm = {
            sampler: Tm.samplers.length - 1,
            target: {
              node: mm,
              path: xm
            }
          }, Tm.channels.push(Qm)
        }
      }
      static _CreateBakedAnimation(mm, Tm, fm, am, xm, wm, Dm, im, Rm, pm, Em) {
        let om;
        const Om = hm.Quaternion.Identity();
        let Ym, qm, jm, Vm, Im, Km = null,
          Qm = null;
        pm.min = Am.Tools.FloatRound(am / wm);
        const nm = Tm.getKeys();
        for (let hm = 0, Jm = nm.length; hm < Jm; ++hm) {
          if (qm = nm[hm], hm + 1 < Jm)
            if (jm = nm[hm + 1], qm.value.equals && qm.value.equals(jm.value) || qm.value === jm.value) {
              if (0 !== hm) continue;
              Im = qm.frame
            } else Im = jm.frame;
          else {
            if (Vm = nm[hm - 1], qm.value.equals && qm.value.equals(Vm.value) || qm.value === Vm.value) continue;
            Im = xm
          }
          if (Im)
            for (let hm = qm.frame; hm <= Im; hm += Dm) {
              if (Ym = Am.Tools.FloatRound(hm / wm), Ym === Km) continue;
              Km = Ym, Qm = Ym;
              const am = {
                key: 0,
                repeatCount: 0,
                Ea: Tm.Ea
              };
              om = Tm._interpolate(hm, am), Oh._SetInterpolatedValue(mm, om, Ym, Tm, fm, Om, im, Rm, Em)
            }
        }
        Qm && (pm.max = Qm)
      }
      static _ConvertFactorToVector3OrQuaternion(mm, Tm, fm, am, xm) {
        const wm = Oh._GetBasePositionRotationOrScale(Tm, am, xm),
          Dm = fm.targetProperty.split("."),
          im = Dm ? Dm[1] : "",
          Rm = xm ? hm.Quaternion.FromArray(wm).normalize() : hm.WO.FromArray(wm);
        switch (im) {
          case "x":
          case "y":
          case "z":
            Rm[im] = mm;
            break;
          case "w":
            Rm.w = mm;
            break;
          default:
            Am.Tools.Error(`glTFAnimation: Unsupported component name "${im}"!`)
        }
        return Rm
      }
      static _SetInterpolatedValue(mm, Tm, fm, Am, am, xm, wm, Dm, im) {
        let Rm;
        wm.push(fm), "weights" !== am ? (Am.dataType === ih.b.ANIMATIONTYPE_FLOAT && (Tm = this._ConvertFactorToVector3OrQuaternion(Tm, mm, Am, am, im)), "rotation" === am ? (im ? xm = Tm : (Rm = Tm, hm.Quaternion.RotationYawPitchRollToRef(Rm.y, Rm.x, Rm.z, xm)), Dm.push(xm.ahm())) : (Rm = Tm, Dm.push(Rm.ahm()))) : Dm.push([Tm])
      }
      static _CreateLinearOrStepAnimation(mm, Tm, fm, hm, Am, am) {
        for (const xm of Tm.getKeys()) hm.push(xm.frame / Tm.framePerSecond), Oh._AddKeyframeValue(xm, Tm, Am, fm, mm, am)
      }
      static _CreateCubicSplineAnimation(mm, Tm, fm, hm, Am, am) {
        Tm.getKeys().forEach((function(xm) {
          hm.push(xm.frame / Tm.framePerSecond), Oh._AddSplineTangent(ph.INTANGENT, Am, fm, "CUBICSPLINE", xm, am), Oh._AddKeyframeValue(xm, Tm, Am, fm, mm, am), Oh._AddSplineTangent(ph.OUTTANGENT, Am, fm, "CUBICSPLINE", xm, am)
        }))
      }
      static _GetBasePositionRotationOrScale(mm, Tm, fm) {
        let Am;
        if ("rotation" === Tm)
          if (fm) {
            Am = (mm.rotationQuaternion ?? hm.Quaternion.Identity()).ahm()
          } else {
            Am = (mm.rotation ?? hm.WO.Zero()).ahm()
          }
        else if ("translation" === Tm) {
          Am = (mm.position ?? hm.WO.Zero()).ahm()
        } else {
          Am = (mm.fi ?? hm.WO.One()).ahm()
        }
        return Am
      }
      static _AddKeyframeValue(mm, Tm, fm, am, xm, wm) {
        let Dm;
        const im = Tm.dataType;
        if (im === ih.b.ANIMATIONTYPE_VECTOR3) {
          let Tm = mm.value.ahm();
          if ("rotation" === am) {
            const mm = hm.WO.FromArray(Tm);
            Tm = hm.Quaternion.RotationYawPitchRoll(mm.y, mm.x, mm.z).ahm()
          }
          fm.push(Tm)
        } else if (im === ih.b.ANIMATIONTYPE_FLOAT) {
          if ("weights" === am) fm.push([mm.value]);
          else if (Dm = this._ConvertFactorToVector3OrQuaternion(mm.value, xm, Tm, am, wm), Dm) {
            if ("rotation" === am) {
              const mm = wm ? Dm : hm.Quaternion.RotationYawPitchRoll(Dm.y, Dm.x, Dm.z).normalize();
              fm.push(mm.ahm())
            }
            fm.push(Dm.ahm())
          }
        } else im === ih.b.ANIMATIONTYPE_QUATERNION ? fm.push(mm.value.normalize().ahm()) : Am.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(mm, Tm, fm) {
        let hm, Am, am = !1;
        if ("rotation" === Tm && !fm) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let xm = 0, wm = mm.length; xm < wm; ++xm)
          if (Am = mm[xm], Am.inTangent || Am.outTangent)
            if (hm) {
              if ("CUBICSPLINE" !== hm) {
                hm = "LINEAR", am = !0;
                break
              }
            } else hm = "CUBICSPLINE";
        else if (hm) {
          if ("CUBICSPLINE" === hm || Am.interpolation && 1 === Am.interpolation && "STEP" !== hm) {
            hm = "LINEAR", am = !0;
            break
          }
        } else hm = Am.interpolation && 1 === Am.interpolation ? "STEP" : "LINEAR";
        return hm || (hm = "LINEAR"), {
          interpolationType: hm,
          shouldBakeAnimation: am
        }
      }
      static _AddSplineTangent(mm, Tm, fm, Am, am, xm) {
        let wm;
        const Dm = mm === ph.INTANGENT ? am.inTangent : am.outTangent;
        if ("CUBICSPLINE" === Am) {
          if ("rotation" === fm)
            if (Dm)
              if (xm) wm = Dm.ahm();
              else {
                const mm = Dm;
                wm = hm.Quaternion.RotationYawPitchRoll(mm.y, mm.x, mm.z).ahm()
              }
          else wm = [0, 0, 0, 0];
          else wm = "weights" === fm ? Dm ? [Dm] : [0] : Dm ? Dm.ahm() : [0, 0, 0];
          Tm.push(wm)
        }
      }
      static _CalculateMinMaxKeyFrames(mm) {
        let Tm = 1 / 0,
          fm = -1 / 0;
        return mm.forEach((function(mm) {
          Tm = Math.min(Tm, mm.frame), fm = Math.max(fm, mm.frame)
        })), {
          min: Tm,
          max: fm
        }
      }
    }

    function Yh(mm, Tm, fm, am, xm, wm) {
      const Dm = {
          attributes: {},
          influence: mm.influence,
          name: mm.name
        },
        im = Tm.geometry;
      if (!im) return Am.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), Dm;
      const pm = wm ? -1 : 1,
        Em = hm.WO.Zero();
      let om, Om;
      if (mm.hasPositions) {
        const am = mm.getPositions(),
          wm = im.getVerticesData(Rm.g.PositionKind);
        if (wm) {
          const mm = new Float32Array(wm.length),
            Tm = [1 / 0, 1 / 0, 1 / 0],
            Am = [-1 / 0, -1 / 0, -1 / 0];
          Om = wm.length / 3, om = 0;
          for (let fm = om; fm < Om; ++fm) {
            const xm = hm.WO.FromArray(wm, 3 * fm);
            hm.WO.FromArray(am, 3 * fm).subtractToRef(xm, Em), Em.x *= pm, Tm[0] = Math.min(Tm[0], Em.x), Am[0] = Math.max(Am[0], Em.x), Tm[1] = Math.min(Tm[1], Em.y), Am[1] = Math.max(Am[1], Em.y), Tm[2] = Math.min(Tm[2], Em.z), Am[2] = Math.max(Am[2], Em.z), mm[3 * fm] = Em.x, mm[3 * fm + 1] = Em.y, mm[3 * fm + 2] = Em.z
          }
          const im = fm.createBufferView(mm, 12),
            Rm = fm.createAccessor(im, "VEC3", 5126, am.length / 3, 0, {
              min: Tm,
              max: Am
            });
          xm.push(Rm), Dm.attributes.POSITION = xm.length - 1
        } else Am.Tools.Warn(`Morph target positions for mesh ${Tm.name} were not exported. Mesh does not have position vertex data`)
      }
      if (mm.hasNormals) {
        const am = mm.getNormals(),
          wm = im.getVerticesData(Rm.g.NormalKind);
        if (wm) {
          const mm = new Float32Array(wm.length);
          Om = wm.length / 3, om = 0;
          for (let fm = om; fm < Om; ++fm) {
            const Tm = hm.WO.FromArray(wm, 3 * fm).normalize();
            hm.WO.FromArray(am, 3 * fm).normalize().subtractToRef(Tm, Em), mm[3 * fm] = Em.x * pm, mm[3 * fm + 1] = Em.y, mm[3 * fm + 2] = Em.z
          }
          const Tm = fm.createBufferView(mm, 12),
            Am = fm.createAccessor(Tm, "VEC3", 5126, am.length / 3, 0);
          xm.push(Am), Dm.attributes.NORMAL = xm.length - 1
        } else Am.Tools.Warn(`Morph target normals for mesh ${Tm.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (mm.hasTangents) {
        const am = mm.getTangents(),
          wm = im.getVerticesData(Rm.g.TangentKind);
        if (wm) {
          Om = wm.length / 4;
          const mm = new Float32Array(3 * Om);
          om = 0;
          for (let fm = om; fm < Om; ++fm) {
            const Tm = hm.WO.FromArray(wm, 4 * fm);
            vf(Tm);
            const Am = hm.WO.FromArray(am, 3 * fm);
            vf(Am), Am.subtractToRef(Tm, Em), mm[3 * fm] = Em.x * pm, mm[3 * fm + 1] = Em.y, mm[3 * fm + 2] = Em.z
          }
          const Tm = fm.createBufferView(mm, 12),
            Am = fm.createAccessor(Tm, "VEC3", 5126, Om, 0);
          xm.push(Am), Dm.attributes.TANGENT = xm.length - 1
        } else Am.Tools.Warn(`Morph target tangents for mesh ${Tm.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (mm.hasColors) {
        const am = mm.getColors(),
          wm = im.getVerticesData(Rm.g.ColorKind),
          pm = im.getVertexBuffer(Rm.g.ColorKind);
        if (wm && pm) {
          const mm = pm.getSize();
          Om = wm.length / mm;
          const Tm = new Float32Array(Om * mm);
          om = 0;
          for (let fm = om; fm < Om; ++fm)
            if (3 === mm) {
              const Am = hm.WO.FromArray(wm, fm * mm);
              hm.WO.FromArray(am, fm * mm).subtractToRef(Am, Em), Tm[3 * fm] = Em.x, Tm[3 * fm + 1] = Em.y, Tm[3 * fm + 2] = Em.z
            } else if (4 === mm) {
            const Am = new hm.Vector4,
              xm = hm.Vector4.FromArray(wm, fm * mm);
            hm.Vector4.FromArray(am, fm * mm).subtractToRef(xm, Am), Tm[4 * fm] = Am.x, Tm[4 * fm + 1] = Am.y, Tm[4 * fm + 2] = Am.z, Tm[4 * fm + 3] = Am.w
          } else Am.Tools.Warn(`Unsupported number of components for color attribute: ${mm}`);
          const im = fm.createBufferView(Tm, 4 * mm),
            Rm = fm.createAccessor(im, 3 === mm ? "VEC3" : "VEC4", 5126, Om, 0);
          xm.push(Rm), Dm.attributes.COLOR_0 = xm.length - 1
        } else Am.Tools.Warn(`Morph target colors for mesh ${Tm.name} were not exported. Mesh does not have colors vertex data`)
      }
      return Dm
    }
    var qh = fm(41620);
    class jh {}
    jh.DEFAULT_COLOR = Lm.b.White(), jh.DEFAULT_WIDTH_ATTENUATED = 1, jh.DEFAULT_WIDTH = .1;
    var Vh = fm(41150);
    class Ih {
      constructor(mm) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = mm
      }
      moveTo(mm, Tm) {
        this._currentPath = new Vh.k(mm, Tm), this._tempPaths.push(this._currentPath)
      }
      lineTo(mm, Tm) {
        this._currentPath.addLineTo(mm, Tm)
      }
      quadraticCurveTo(mm, Tm, fm, hm) {
        this._currentPath.addQuadraticCurveTo(mm, Tm, fm, hm, this._resolution)
      }
      bezierCurveTo(mm, Tm, fm, hm, Am, am) {
        this._currentPath.addBezierCurveTo(mm, Tm, fm, hm, Am, am, this._resolution)
      }
      extractHoles() {
        for (const mm of this._tempPaths) mm.area() > 0 ? this._holes.push(mm) : this._paths.push(mm);
        if (!this._paths.length && this._holes.length) {
          const mm = this._holes;
          this._holes = this._paths, this._paths = mm
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

    function Kh(mm, Tm, fm, hm, Am, am) {
      const xm = am.glyphs[mm] || am.glyphs["?"];
      if (!xm) return null;
      const wm = new Ih(Am);
      if (xm.o) {
        const mm = xm.o.split(" ");
        for (let Am = 0, am = mm.length; Am < am;) {
          switch (mm[Am++]) {
            case "m": {
              const am = parseInt(mm[Am++]) * Tm + fm,
                xm = parseInt(mm[Am++]) * Tm + hm;
              wm.moveTo(am, xm);
              break
            }
            case "l": {
              const am = parseInt(mm[Am++]) * Tm + fm,
                xm = parseInt(mm[Am++]) * Tm + hm;
              wm.lineTo(am, xm);
              break
            }
            case "q": {
              const am = parseInt(mm[Am++]) * Tm + fm,
                xm = parseInt(mm[Am++]) * Tm + hm,
                Dm = parseInt(mm[Am++]) * Tm + fm,
                im = parseInt(mm[Am++]) * Tm + hm;
              wm.quadraticCurveTo(Dm, im, am, xm);
              break
            }
            case "b": {
              const am = parseInt(mm[Am++]) * Tm + fm,
                xm = parseInt(mm[Am++]) * Tm + hm,
                Dm = parseInt(mm[Am++]) * Tm + fm,
                im = parseInt(mm[Am++]) * Tm + hm,
                Rm = parseInt(mm[Am++]) * Tm + fm,
                pm = parseInt(mm[Am++]) * Tm + hm;
              wm.bezierCurveTo(Dm, im, Rm, pm, am, xm);
              break
            }
          }
        }
      }
      return wm.extractHoles(), {
        offsetX: xm.ha * Tm,
        shapePath: wm
      }
    }

    function Qh(mm, Tm, fm, hm) {
      const Am = Array.from(mm),
        am = Tm / hm.resolution,
        xm = (hm.boundingBox.yMax - hm.boundingBox.yMin + hm.underlineThickness) * am,
        wm = [];
      let Dm = 0,
        im = 0;
      for (let Rm = 0; Rm < Am.length; Rm++) {
        const mm = Am[Rm];
        if ("\n" === mm) Dm = 0, im -= xm;
        else {
          const Tm = Kh(mm, am, Dm, im, fm, hm);
          Tm && (Dm += Tm.offsetX, wm.push(Tm.shapePath))
        }
      }
      return wm
    }
    class nh {
      static ConvertPoints(mm, Tm) {
        if (mm.length && Array.isArray(mm) && "number" === typeof mm[0]) return [mm];
        if (mm.length && Array.isArray(mm[0]) && "number" === typeof mm[0][0]) return mm;
        if (mm.length && !Array.isArray(mm[0]) && mm[0] instanceof Cm.p) {
          const Tm = [];
          for (let fm = 0; fm < mm.length; fm++) {
            const hm = mm[fm];
            Tm.push(hm.x, hm.y, hm.z)
          }
          return [Tm]
        }
        if (mm.length > 0 && Array.isArray(mm[0]) && mm[0].length > 0 && mm[0][0] instanceof Cm.p) {
          const Tm = [],
            fm = mm;
          for (const mm of fm) Tm.push(mm.flatMap((mm => [mm.x, mm.y, mm.z])));
          return Tm
        }
        if (mm instanceof Float32Array) {
          if (Tm?.floatArrayStride) {
            const fm = [],
              hm = 3 * Tm.floatArrayStride;
            for (let Tm = 0; Tm < mm.length; Tm += hm) {
              const Am = new Array(hm);
              for (let fm = 0; fm < hm; fm++) Am[fm] = mm[Tm + fm];
              fm.push(Am)
            }
            return fm
          }
          return [Array.from(mm)]
        }
        if (mm.length && mm[0] instanceof Float32Array) {
          const Tm = [];
          for (const fm of mm) Tm.push(Array.from(fm));
          return Tm
        }
        return []
      }
      static OmitZeroLengthPredicate(mm, Tm, fm) {
        const hm = [];
        return Tm.subtract(mm).lengthSquared() > 0 && hm.push([mm, Tm]), fm.subtract(Tm).lengthSquared() > 0 && hm.push([Tm, fm]), mm.subtract(fm).lengthSquared() > 0 && hm.push([fm, mm]), 0 === hm.length ? null : hm
      }
      static OmitDuplicatesPredicate(mm, Tm, fm, hm) {
        const Am = [];
        return nh._SearchInPoints(mm, Tm, hm) || Am.push([mm, Tm]), nh._SearchInPoints(Tm, fm, hm) || Am.push([Tm, fm]), nh._SearchInPoints(fm, mm, hm) || Am.push([fm, mm]), 0 === Am.length ? null : Am
      }
      static _SearchInPoints(mm, Tm, fm) {
        for (const hm of fm)
          for (let fm = 0; fm < hm.length; fm++)
            if (hm[fm]?.equals(mm) && (hm[fm + 1]?.equals(Tm) || hm[fm - 1]?.equals(Tm))) return !0;
        return !1
      }
      static MeshesToLines(mm, Tm) {
        const fm = [];
        for (let hm = 0; hm < mm.length; hm++) {
          const Am = mm[hm],
            am = Am.getVerticesData(rm.m.PositionKind),
            xm = Am.xhm();
          if (am && xm)
            for (let mm = 0, wm = 0; mm < xm.length; mm++) {
              const Dm = 3 * xm[wm++],
                im = 3 * xm[wm++],
                Rm = 3 * xm[wm++],
                pm = new Cm.p(am[Dm], am[Dm + 1], am[Dm + 2]),
                Em = new Cm.p(am[im], am[im + 1], am[im + 2]),
                om = new Cm.p(am[Rm], am[Rm + 1], am[Rm + 2]);
              if (Tm) {
                const wm = Tm(pm, Em, om, fm, mm, Dm, Am, hm, am, xm);
                if (wm)
                  for (const mm of wm) fm.push(mm)
              } else fm.push([pm, Em], [Em, om], [om, pm])
            }
        }
        return fm
      }
      static ToVector3Array(mm) {
        if (Array.isArray(mm[0])) {
          const Tm = [],
            fm = mm;
          for (const mm of fm) {
            const fm = [];
            for (let Tm = 0; Tm < mm.length; Tm += 3) fm.push(new Cm.p(mm[Tm], mm[Tm + 1], mm[Tm + 2]));
            Tm.push(fm)
          }
          return Tm
        }
        const Tm = mm,
          fm = [];
        for (let hm = 0; hm < Tm.length; hm += 3) fm.push(new Cm.p(Tm[hm], Tm[hm + 1], Tm[hm + 2]));
        return fm
      }
      static ToNumberArray(mm) {
        return mm.flatMap((mm => [mm.x, mm.y, mm.z]))
      }
      static GetPointsCountInfo(mm) {
        const Tm = new Array(mm.length);
        let fm = 0;
        for (let hm = mm.length; hm--;) Tm[hm] = mm[hm].length / 3, fm += Tm[hm];
        return {
          total: fm,
          counts: Tm
        }
      }
      static GetLineLength(mm) {
        if (0 === mm.length) return 0;
        let Tm;
        Tm = "number" === typeof mm[0] ? nh.ToVector3Array(mm) : mm;
        const fm = Cm.j.WO[0];
        let hm = 0;
        for (let Am = 0; Am < Tm.length - 1; Am++) {
          const mm = Tm[Am];
          hm += Tm[Am + 1].subtractToRef(mm, fm).length()
        }
        return hm
      }
      static GetLineLengthArray(mm, Tm) {
        const fm = Tm ? new Float32Array(Tm, 0, mm.length / 3) : new Float32Array(mm.length / 3);
        let hm = 0;
        for (let Am = 0, am = mm.length / 3 - 1; Am < am; Am++) {
          let Tm = mm[3 * Am + 0],
            am = mm[3 * Am + 1],
            xm = mm[3 * Am + 2];
          Tm -= mm[3 * Am + 3], am -= mm[3 * Am + 4], xm -= mm[3 * Am + 5];
          hm += Math.sqrt(Tm * Tm + am * am + xm * xm), fm[Am + 1] = hm
        }
        return fm
      }
      static SegmentizeSegmentByCount(mm, Tm, fm) {
        const hm = [],
          Am = Tm.subtract(mm),
          am = Cm.j.WO[0];
        am.Y5(fm);
        const xm = Cm.j.WO[1];
        Am.divideToRef(am, xm);
        let wm = mm.clone();
        hm.push(wm);
        for (let Dm = 0; Dm < fm; Dm++) wm = wm.clone(), hm.push(wm.addInPlace(xm));
        return hm
      }
      static SegmentizeLineBySegmentLength(mm, Tm) {
        const fm = mm[0] instanceof Cm.p ? nh.GetLineSegments(mm) : "number" === typeof mm[0] ? nh.GetLineSegments(nh.ToVector3Array(mm)) : mm,
          hm = [];
        for (const Am of fm)
          if (Am.length > Tm) {
            const mm = nh.SegmentizeSegmentByCount(Am.point1, Am.point2, Math.ceil(Am.length / Tm));
            for (const Tm of mm) hm.push(Tm)
          } else hm.push(Am.point1), hm.push(Am.point2);
        return hm
      }
      static SegmentizeLineBySegmentCount(mm, Tm) {
        const fm = "number" === typeof mm[0] ? nh.ToVector3Array(mm) : mm,
          hm = nh.GetLineLength(fm) / Tm;
        return nh.SegmentizeLineBySegmentLength(fm, hm)
      }
      static GetLineSegments(mm) {
        const Tm = [];
        for (let fm = 0; fm < mm.length - 1; fm++) {
          const hm = mm[fm],
            Am = mm[fm + 1],
            am = Am.subtract(hm).length();
          Tm.push({
            point1: hm,
            point2: Am,
            length: am
          })
        }
        return Tm
      }
      static GetMinMaxSegmentLength(mm) {
        const Tm = nh.GetLineSegments(mm).sort((mm => mm.length));
        return {
          min: Tm[0].length,
          max: Tm[Tm.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Am = Tm * fm;
        let am = 0,
          xm = 0;
        const wm = mm.length;
        for (let im = 0; im < wm; im++) {
          if (Am <= am + mm[im].length) {
            xm = im;
            break
          }
          am += mm[im].length
        }
        const Dm = (Am - am) / mm[xm].length;
        return mm[xm].point2.subtractToRef(mm[xm].point1, Cm.j.WO[0]), Cm.j.WO[0].scaleToRef(Dm, Cm.j.WO[1]), hm || Cm.j.WO[1].addInPlace(mm[xm].point1), Cm.j.WO[1].clone()
      }
      static GetCircleLinePoints(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mm,
          Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / Tm;
        const am = [];
        for (let xm = 0; xm <= Tm; xm++) am.push(new Cm.p(Math.cos(xm * Am) * mm, Math.sin(xm * Am) * hm, fm));
        return am
      }
      static GetBezierLinePoints(mm, Tm, fm, hm) {
        return Vh.h.CreateQuadraticBezier(mm, Tm, fm, hm).getPoints().flatMap((mm => [mm.x, mm.y, mm.z]))
      }
      static GetArrowCap(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          xm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [mm.clone(), mm.add(Tm.multiplyByFloats(fm, fm, fm))],
          widths: [hm, Am, am, xm]
        }
      }
      static GetPointsFromText(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          am = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const xm = [],
          wm = Qh(mm, Tm, fm, hm);
        for (const Dm of wm) {
          for (const mm of Dm.paths) {
            const Tm = [],
              fm = mm.getPoints();
            for (const mm of fm) Tm.push(mm.x, mm.y, Am);
            xm.push(Tm)
          }
          if (am)
            for (const mm of Dm.holes) {
              const Tm = [],
                fm = mm.getPoints();
              for (const mm of fm) Tm.push(mm.x, mm.y, Am);
              xm.push(Tm)
            }
        }
        return xm
      }
      static Color3toRGBAUint8(mm) {
        const Tm = new Uint8Array(4 * mm.length);
        for (let fm = 0, hm = 0; fm < mm.length; fm++) Tm[hm++] = 255 * mm[fm].r, Tm[hm++] = 255 * mm[fm].g, Tm[hm++] = 255 * mm[fm].b, Tm[hm++] = 255;
        return Tm
      }
      static CreateColorsTexture(mm, Tm, fm, hm) {
        const Am = hm.dO().getCaps().maxTextureSize ?? 1,
          am = Tm.length > Am ? Am : Tm.length,
          xm = Math.ceil(Tm.length / Am);
        xm > 1 && (Tm = [...Tm, ...Array(am * xm - Tm.length).fill(Tm[0])]);
        const wm = nh.Color3toRGBAUint8(Tm),
          Dm = new nm.b(wm, am, xm, Ef.b.TEXTUREFORMAT_RGBA, hm, !1, !0, fm);
        return Dm.name = mm, Dm
      }
      static PrepareEmptyColorsTexture(mm) {
        if (!jh.EmptyColorsTexture) {
          const Tm = new Uint8Array(4);
          jh.EmptyColorsTexture = new nm.b(Tm, 1, 1, Ef.b.TEXTUREFORMAT_RGBA, mm, !1, !1, nm.b.NEAREST_NEAREST), jh.EmptyColorsTexture.name = "grlEmptyColorsTexture", jh.EmptyColorsTexture.iG.addOnce((() => {
            jh.EmptyColorsTexture = null
          }))
        }
        return jh.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        jh.EmptyColorsTexture?.dispose(), jh.EmptyColorsTexture = null
      }
      static BooleanToNumber(mm) {
        return mm ? 1 : 0
      }
    }
    class Jh extends sm.c {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class ch extends lm.e {
      isCompatible(mm) {
        return !0
      }
      constructor(mm, Tm, fm) {
        fm = fm || {
          color: jh.DEFAULT_COLOR
        };
        const hm = new Jh;
        hm.GREASED_LINE_HAS_COLOR = !!fm.color && !fm.useColors, hm.GREASED_LINE_SIZE_ATTENUATION = fm.sizeAttenuation ?? !1, hm.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === fm.colorDistributionType, hm.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (Tm ?? mm.wG()).useRightHandedSystem, hm.GREASED_LINE_CAMERA_FACING = fm.cameraFacing ?? !0, super(mm, ch.GREASED_LINE_MATERIAL_NAME, 200, hm, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = fm?.forceGLSL || ch.ForceGLSL, this._scene = Tm ?? mm.wG(), this._engine = this._scene.dO(), this._cameraFacing = fm.cameraFacing ?? !0, this.visibility = fm.visibility ?? 1, this.useDash = fm.useDash ?? !1, this.dashRatio = fm.dashRatio ?? .5, this.dashOffset = fm.dashOffset ?? 0, this.width = fm.width ? fm.width : fm.sizeAttenuation ? jh.DEFAULT_WIDTH_ATTENUATED : jh.DEFAULT_WIDTH, this._sizeAttenuation = fm.sizeAttenuation ?? !1, this.colorMode = fm.colorMode ?? 0, this._color = fm.color ?? null, this.useColors = fm.useColors ?? !1, this._colorsDistributionType = fm.colorDistributionType ?? 0, this.colorsSampling = fm.colorsSampling ?? nm.b.NEAREST_NEAREST, this._colors = fm.colors ?? null, this.dashCount = fm.dashCount ?? 1, this.resolution = fm.resolution ?? new Cm.l(this._engine.getRenderWidth(), this._engine.getRenderHeight()), fm.colorsTexture ? this.colorsTexture = fm.colorsTexture : this._colors ? this.colorsTexture = nh.CreateColorsTexture(`${mm.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? jh.DEFAULT_COLOR, nh.PrepareEmptyColorsTexture(this._scene)), this._engine.iG.add((() => {
          nh.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(mm) {
        mm.push("grl_offsets"), mm.push("grl_widths"), mm.push("grl_colorPointers"), mm.push("grl_counters"), this._cameraFacing ? (mm.push("grl_previousAndSide"), mm.push("grl_nextAndCounters")) : mm.push("grl_slopes")
      }
      getSamplers(mm) {
        mm.push("grl_colors")
      }
      getActiveTextures(mm) {
        this.colorsTexture && mm.push(this.colorsTexture)
      }
      getUniforms() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const Tm = [{
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
        return this._cameraFacing && Tm.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === mm && Tm.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: Tm,
          vertex: this._cameraFacing && this._isGLSL(mm) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(mm) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(mm) {
        if (this._cameraFacing) {
          mm.K9("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || mm.K9("viewProjection", this._scene.getTransformMatrix());
          const Tm = Cm.j.Vector4[0];
          Tm.x = this._aspect, Tm.y = this._resolution.x, Tm.z = this._resolution.y, Tm.w = this.width, mm.updateVector4("grl_aspect_resolution_lineWidth", Tm)
        }
        const Tm = Cm.j.Vector4[0];
        Tm.x = nh.BooleanToNumber(this.useDash), Tm.y = this._dashArray, Tm.z = this.dashOffset, Tm.w = this.dashRatio, mm.updateVector4("grl_dashOptions", Tm);
        const fm = Cm.j.Vector4[1];
        fm.x = this.colorMode, fm.y = this.visibility, fm.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, fm.w = nh.BooleanToNumber(this.useColors), mm.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", fm), this._color && mm.updateColor3("grl_singleColor", this._color);
        const hm = this.colorsTexture ?? jh.EmptyColorsTexture;
        mm.setTexture("grl_colors", hm), mm.updateFloat2("grl_textureSize", hm?.getSize().width ?? 1, hm?.getSize().height ?? 1)
      }
      prepareDefines(mm, Tm, fm) {
        mm.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, mm.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, mm.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, mm.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = Tm.useRightHandedSystem, mm.GREASED_LINE_CAMERA_FACING = this._cameraFacing, mm.GREASED_LINE_USE_OFFSETS = !!fm.offsets
      }
      getClassName() {
        return ch.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(Tm) ? function(mm, Tm) {
          if ("vertex" === mm) {
            const mm = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return Tm && (mm["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), mm
          }
          return "fragment" === mm ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(mm, this._cameraFacing) : function(mm, Tm) {
          if ("vertex" === mm) {
            const mm = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return Tm && (mm["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), mm
          }
          return "fragment" === mm ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(mm, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(mm) {
        this.setColors(mm)
      }
      setColors(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hm = this._colors?.length ?? 0;
        if (this._colors = mm, null !== mm && 0 !== mm.length) {
          if (!Tm || fm)
            if (this.colorsTexture && hm === mm.length && !fm) {
              const Tm = nh.Color3toRGBAUint8(mm);
              this.colorsTexture.update(Tm)
            } else this.colorsTexture?.dispose(), this.colorsTexture = nh.CreateColorsTexture(`${this._material.name}-colors-texture`, mm, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(mm) {
        this._dashCount = mm, this._dashArray = 1 / mm
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(mm) {
        this._sizeAttenuation = mm, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(mm) {
        this.setColor(mm)
      }
      setColor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== mm || null !== this._color && null === mm ? (this._color = mm, Tm || this.markAllDefinesAsDirty()) : this._color = mm
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(mm) {
        this._colorsDistributionType = mm, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(mm) {
        this._aspect = mm.x / mm.y, this._resolution = mm
      }
      serialize() {
        const mm = super.serialize(),
          Tm = {
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
        return this._colors && (Tm.colors = this._colors), this._color && (Tm.color = this._color), mm.greasedLineMaterialOptions = Tm, mm
      }
      parse(mm, Tm, fm) {
        super.parse(mm, Tm, fm);
        const hm = mm.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), hm.color && this.setColor(hm.color, !0), hm.colorDistributionType && (this.colorsDistributionType = hm.colorDistributionType), hm.colors && (this.colors = hm.colors), hm.colorsSampling && (this.colorsSampling = hm.colorsSampling), hm.colorMode && (this.colorMode = hm.colorMode), hm.useColors && (this.useColors = hm.useColors), hm.visibility && (this.visibility = hm.visibility), hm.useDash && (this.useDash = hm.useDash), hm.dashCount && (this.dashCount = hm.dashCount), hm.dashRatio && (this.dashRatio = hm.dashRatio), hm.dashOffset && (this.dashOffset = hm.dashOffset), hm.width && (this.width = hm.width), hm.sizeAttenuation && (this.sizeAttenuation = hm.sizeAttenuation), hm.resolution && (this.resolution = hm.resolution), this.colors ? this.colorsTexture = nh.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, Tm) : nh.PrepareEmptyColorsTexture(Tm), this.markAllDefinesAsDirty()
      }
      copyTo(mm) {
        const Tm = mm;
        Tm.colorsTexture?.dispose(), this._colors && (Tm.colorsTexture = nh.CreateColorsTexture(`${Tm._material.name}-colors-texture`, this._colors, Tm.colorsSampling, this._scene)), Tm.setColor(this.color, !0), Tm.colorsDistributionType = this.colorsDistributionType, Tm.colorsSampling = this.colorsSampling, Tm.colorMode = this.colorMode, Tm.useColors = this.useColors, Tm.visibility = this.visibility, Tm.useDash = this.useDash, Tm.dashCount = this.dashCount, Tm.dashRatio = this.dashRatio, Tm.dashOffset = this.dashOffset, Tm.width = this.width, Tm.sizeAttenuation = this.sizeAttenuation, Tm.resolution = this.resolution, Tm.markAllDefinesAsDirty()
      }
      _isGLSL(mm) {
        return 0 === mm || this._forceGLSL
      }
    }
    ch.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", ch.ForceGLSL = !1;
    var zh = fm(40513),
      Zh = fm(40527),
      kh = fm(38764),
      bh = fm(40577),
      Sh = fm(39948);
    class eh extends bh.n {
      constructor(mm, Tm, hm) {
        const Am = Tm.dO(),
          am = Am.isWebGPU && !(hm.forceGLSL || eh.ForceGLSL),
          xm = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        Tm.useRightHandedSystem && xm.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const wm = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        hm.cameraFacing ? (xm.push("GREASED_LINE_CAMERA_FACING"), wm.push("grl_previousAndSide", "grl_nextAndCounters")) : (wm.push("grl_slopes"), wm.push("grl_counters"));
        const Dm = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (am || Dm.push("world", "viewProjection", "view", "projection"), super(mm, Tm, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: am ? ["Scene", "Mesh"] : void 0,
            attributes: wm,
            uniforms: Dm,
            samplers: am ? [] : ["grlColors"],
            defines: xm,
            extraInitializationsAsync: async () => {
              am ? await Promise.all([fm.e(334).then((() => fm(61981))), fm.e(391).then((() => fm(61987)))]) : await Promise.all([fm.e(327).then((() => fm(61996))), fm.e(392).then((() => fm(62e3)))])
            },
            shaderLanguage: am ? 1 : 0
          }), this._color = Lm.b.White(), this._colorsDistributionType = 0, this._colorsTexture = null, hm = hm || {
            color: jh.DEFAULT_COLOR
          }, this.visibility = hm.visibility ?? 1, this.useDash = hm.useDash ?? !1, this.dashRatio = hm.dashRatio ?? .5, this.dashOffset = hm.dashOffset ?? 0, this.dashCount = hm.dashCount ?? 1, this.width = hm.width ? hm.width : hm.sizeAttenuation && hm.cameraFacing ? jh.DEFAULT_WIDTH_ATTENUATED : jh.DEFAULT_WIDTH, this.sizeAttenuation = hm.sizeAttenuation ?? !1, this.color = hm.color ?? Lm.b.White(), this.useColors = hm.useColors ?? !1, this.colorsDistributionType = hm.colorDistributionType ?? 0, this.colorsSampling = hm.colorsSampling ?? nm.b.NEAREST_NEAREST, this.colorMode = hm.colorMode ?? 0, this._colors = hm.colors ?? null, this._cameraFacing = hm.cameraFacing ?? !0, this.resolution = hm.resolution ?? new Cm.l(Am.getRenderWidth(), Am.getRenderHeight()), hm.colorsTexture ? this.colorsTexture = hm.colorsTexture : this._colors ? this.colorsTexture = nh.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, Tm) : (this._color = this._color ?? jh.DEFAULT_COLOR, this.colorsTexture = nh.PrepareEmptyColorsTexture(Tm)), am) {
          const mm = new Sh.d;
          mm.setParameters(), mm.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", mm)
        }
        Am.iG.add((() => {
          nh.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== jh.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new Cm.l(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(mm) {
        this.setColors(mm)
      }
      setColors(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hm = this._colors?.length ?? 0;
        if (this._colors = mm, null !== mm && 0 !== mm.length) {
          if (!Tm || fm)
            if (this._colorsTexture && hm === mm.length && !fm) {
              const Tm = nh.Color3toRGBAUint8(mm);
              this._colorsTexture.update(Tm)
            } else this._colorsTexture && this._colorsTexture !== jh.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = nh.CreateColorsTexture(`${this.name}-colors-texture`, mm, this.colorsSampling, this.wG())
        } else {
          this._colorsTexture && this._colorsTexture !== jh.EmptyColorsTexture && this._colorsTexture.dispose();
          const mm = this.wG();
          mm && (this.colorsTexture = nh.PrepareEmptyColorsTexture(mm))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(mm) {
        this._colorsTexture = mm, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(mm) {
        this._width = mm, this.setFloat("grlWidth", mm)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(mm) {
        this._useColors = mm, this.setFloat("grlUseColors", nh.BooleanToNumber(mm))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(mm) {
        this._colorsSampling = mm
      }
      get visibility() {
        return this._visibility
      }
      set visibility(mm) {
        this._visibility = mm, this.setFloat("grlVisibility", mm)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(mm) {
        this._useDash = mm, this.setFloat("grlUseDash", nh.BooleanToNumber(mm))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(mm) {
        this._dashOffset = mm, this.setFloat("grlDashOffset", mm)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(mm) {
        this._dashRatio = mm, this.setFloat("grlDashRatio", mm)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(mm) {
        this._dashCount = mm, this._dashArray = 1 / mm, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(mm) {
        this._sizeAttenuation = mm, this.setFloat("grlSizeAttenuation", nh.BooleanToNumber(mm))
      }
      get color() {
        return this._color
      }
      set color(mm) {
        this.setColor(mm)
      }
      setColor(mm) {
        mm = mm ?? jh.DEFAULT_COLOR, this._color = mm, this.setColor3("grlColor", mm)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(mm) {
        this._colorsDistributionType = mm, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(mm) {
        this._colorMode = mm, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(mm) {
        this._resolution = mm, this.setVector2("grlResolution", mm), this.setFloat("grlAspect", mm.x / mm.y)
      }
      serialize() {
        const mm = super.serialize(),
          Tm = {
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
        return this._colors && (Tm.colors = this._colors), mm.greasedLineMaterialOptions = Tm, mm
      }
      parse(mm, Tm, fm) {
        const hm = mm.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), hm.color && (this.color = hm.color), hm.colorDistributionType && (this.colorsDistributionType = hm.colorDistributionType), hm.colorsSampling && (this.colorsSampling = hm.colorsSampling), hm.colorMode && (this.colorMode = hm.colorMode), hm.useColors && (this.useColors = hm.useColors), hm.visibility && (this.visibility = hm.visibility), hm.useDash && (this.useDash = hm.useDash), hm.dashCount && (this.dashCount = hm.dashCount), hm.dashRatio && (this.dashRatio = hm.dashRatio), hm.dashOffset && (this.dashOffset = hm.dashOffset), hm.width && (this.width = hm.width), hm.sizeAttenuation && (this.sizeAttenuation = hm.sizeAttenuation), hm.resolution && (this.resolution = hm.resolution), hm.colors ? this.colorsTexture = nh.CreateColorsTexture(`${this.name}-colors-texture`, hm.colors, this.colorsSampling, this.wG()) : this.colorsTexture = nh.PrepareEmptyColorsTexture(Tm), this._cameraFacing = hm.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var Nh, Gh, Xh;
    eh.ForceGLSL = !1,
      function(mm) {
        mm[mm.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", mm[mm.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(Nh || (Nh = {})),
      function(mm) {
        mm[mm.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", mm[mm.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", mm[mm.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(Gh || (Gh = {})),
      function(mm) {
        mm[mm.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", mm[mm.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", mm[mm.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", mm[mm.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", mm[mm.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(Xh || (Xh = {}));
    class Ph extends zh.d {
      constructor(mm, Tm, fm) {
        super(mm, Tm, null, null, !1, !1), this.name = mm, this._options = fm, this._lazy = !1, this._updatable = !1, this._engine = Tm.dO(), this._lazy = fm.lazy ?? !1, this._updatable = fm.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = fm.colorPointers ?? [], this._widths = fm.widths ?? new Array(fm.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(mm) {
        let Tm = 0;
        for (const hm of this._points) Tm += hm.length;
        const fm = Tm / 3 * 2 - this._widths.length;
        for (let hm = 0; hm < fm; hm++) this._widths.push(mm)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.mY && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(mm, Tm) {
        for (const fm of mm) this._points.push(fm);
        this._lazy || this.setPoints(this._points, Tm)
      }
      dispose(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(mm, Tm)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(mm) {
        this._uvs = mm instanceof Float32Array ? mm : new Float32Array(mm), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(mm) {
        this.material instanceof eh && this.material.setDefine("GREASED_LINE_USE_OFFSETS", mm?.length > 0), this._offsets = mm, this._offsetsBuffer ? this._offsetsBuffer.update(mm) : this._createOffsetsBuffer(mm)
      }
      get widths() {
        return this._widths
      }
      set widths(mm) {
        this._widths = mm, this._lazy || this._widthsBuffer && this._widthsBuffer.update(mm)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(mm) {
        this._colorPointers = mm, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(mm)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof eh) return this.material;
        const mm = this.material?.pluginManager?.getPlugin(ch.GREASED_LINE_MATERIAL_NAME);
        return mm || void 0
      }
      get points() {
        const mm = [];
        return kh.c.DeepCopy(this._points, mm), mm
      }
      setPoints(mm, Tm) {
        this._points = nh.ConvertPoints(mm, Tm?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), Tm?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, Tm)
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
      serialize(mm) {
        super.serialize(mm), mm.type = this.getClassName(), mm.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Tm = new Zh.c;
        return Tm.positions = this._vertexPositions, Tm.indices = this._indices, Tm.uvs = this._uvs, mm && (Tm.normals = [], Zh.c.ComputeNormals(this._vertexPositions, this._indices, Tm.normals)), Tm.applyToMesh(this, this._options.updatable), Tm
      }
      _createOffsetsBuffer(mm) {
        const Tm = this._scene.dO(),
          fm = new rm.c(Tm, mm, this._updatable, 3);
        this.setVerticesBuffer(fm.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = fm
      }
    }
    class Hh {
      constructor(mm, Tm) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = mm, this.wasAddedByNoopNode = Tm
      }
      getIndicesAccessor(mm, Tm, fm, hm, Am) {
        return this._indicesAccessorMap.get(mm)?.get(Tm)?.get(fm)?.get(hm)?.get(Am)
      }
      setIndicesAccessor(mm, Tm, fm, hm, Am, am) {
        let xm = this._indicesAccessorMap.get(mm);
        xm || (xm = new Map, this._indicesAccessorMap.set(mm, xm));
        let wm = xm.get(Tm);
        wm || (wm = new Map, xm.set(Tm, wm));
        let Dm = wm.get(fm);
        Dm || (Dm = new Map, wm.set(fm, Dm));
        let im = Dm.get(hm);
        im || (im = new Map, Dm.set(hm, im)), im.set(Am, am)
      }
      pushExportedNode(mm) {
        this._exportedNodes.has(mm) || this._exportedNodes.add(mm)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(mm) {
        return this._vertexBufferViewMap.get(mm)
      }
      setVertexBufferView(mm, Tm) {
        this._vertexBufferViewMap.set(mm, Tm)
      }
      setRemappedBufferView(mm, Tm, fm) {
        this._remappedBufferView.set(mm, new Map), this._remappedBufferView.get(mm).set(Tm, fm)
      }
      getRemappedBufferView(mm, Tm) {
        return this._remappedBufferView.get(mm)?.get(Tm)
      }
      getVertexAccessor(mm, Tm, fm) {
        return this._vertexAccessorMap.get(mm)?.get(Tm)?.get(fm)
      }
      setVertexAccessor(mm, Tm, fm, hm) {
        let Am = this._vertexAccessorMap.get(mm);
        Am || (Am = new Map, this._vertexAccessorMap.set(mm, Am));
        let am = Am.get(Tm);
        am || (am = new Map, Am.set(Tm, am)), am.set(fm, hm)
      }
      hasVertexColorAlpha(mm) {
        return this._vertexMapColorAlpha.get(mm) || !1
      }
      setHasVertexColorAlpha(mm, Tm) {
        return this._vertexMapColorAlpha.set(mm, Tm)
      }
      getMesh(mm) {
        return this._meshMap.get(mm)
      }
      setMesh(mm, Tm) {
        this._meshMap.set(mm, Tm)
      }
      bindMorphDataToMesh(mm, Tm) {
        const fm = this._meshMorphTargetMap.get(mm) || [];
        this._meshMorphTargetMap.set(mm, fm), -1 === fm.indexOf(Tm) && fm.push(Tm)
      }
      getMorphTargetsFromMesh(mm) {
        return this._meshMorphTargetMap.get(mm)
      }
    }
    class yh {
      _ApplyExtension(mm, Tm, fm, hm) {
        if (fm >= Tm.length) return Promise.resolve(mm);
        const Am = hm(Tm[fm], mm);
        return Am ? Am.then((async mm => mm ? await this._ApplyExtension(mm, Tm, fm + 1, hm) : null)) : this._ApplyExtension(mm, Tm, fm + 1, hm)
      }
      _ApplyExtensions(mm, Tm) {
        const fm = [];
        for (const hm of yh._ExtensionNames) fm.push(this._extensions[hm]);
        return this._ApplyExtension(mm, fm, 0, Tm)
      }
      _extensionsPostExportNodeAsync(mm, Tm, fm, hm, Am) {
        return this._ApplyExtensions(Tm, ((Tm, am) => Tm.postExportNodeAsync && Tm.postExportNodeAsync(mm, am, fm, hm, Am, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(mm, Tm, fm) {
        return this._ApplyExtensions(Tm, ((Tm, hm) => Tm.postExportMaterialAsync && Tm.postExportMaterialAsync(mm, hm, fm)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(mm, Tm, fm) {
        const hm = [];
        return await Promise.all(yh._ExtensionNames.map((async Am => {
          const am = this._extensions[Am];
          if (am.postExportMaterialAdditionalTexturesAsync) {
            const Am = await am.postExportMaterialAdditionalTexturesAsync(mm, Tm, fm);
            hm.push(...Am)
          }
        }))), hm
      }
      _extensionsPostExportTextures(mm, Tm, fm) {
        for (const hm of yh._ExtensionNames) {
          const Am = this._extensions[hm];
          Am.postExportTexture && Am.postExportTexture(mm, Tm, fm)
        }
      }
      _extensionsPostExportMeshPrimitive(mm) {
        for (const Tm of yh._ExtensionNames) {
          const fm = this._extensions[Tm];
          fm.postExportMeshPrimitive && fm.postExportMeshPrimitive(mm, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const mm of yh._ExtensionNames) {
          const Tm = this._extensions[mm];
          Tm.preGenerateBinaryAsync && await Tm.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(mm) {
        for (const Tm of yh._ExtensionNames) {
          const fm = this._extensions[Tm];
          fm.enabled && mm(fm)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((mm => {
          var Tm, fm, hm;
          mm.wasUsed && ((Tm = this._glTF).extensionsUsed || (Tm.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(mm.name) && this._glTF.extensionsUsed.push(mm.name), mm.required && ((fm = this._glTF).extensionsRequired || (fm.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(mm.name) && this._glTF.extensionsRequired.push(mm.name)), (hm = this._glTF).extensions || (hm.extensions = {}), mm.onExporting && mm.onExporting())
        }))
      }
      _loadExtensions() {
        for (const mm of yh._ExtensionNames) {
          const Tm = yh._ExtensionFactories[mm](this);
          this._extensions[mm] = Tm
        }
      }
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ym.c.LastCreatedScene,
          Tm = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${Om.d.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new Gf(this), this._extensions = {}, this._bufferManager = new ah, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !mm) throw new Error("No scene available to export");
        this._babylonScene = mm, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: mm => mm?.FN?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...Tm
        }, this._loadExtensions()
      }
      dispose() {
        for (const mm in this._extensions) {
          this._extensions[mm].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        yh.UnregisterExtension(mm) && Am.Tools.Warn(`Extension with the name ${mm} already exists`), yh._ExtensionFactories[mm] = Tm;
        const hm = fm ?? 0;
        yh._ExtensionOrders[mm] = hm;
        let am = yh._ExtensionNames.length;
        for (let Am = 0; Am < yh._ExtensionNames.length; Am++) {
          const mm = yh._ExtensionNames[Am];
          if (hm < yh._ExtensionOrders[mm]) {
            am = Am;
            break
          }
        }
        yh._ExtensionNames.splice(am, 0, mm)
      }
      static UnregisterExtension(mm) {
        if (!yh._ExtensionFactories[mm]) return !1;
        delete yh._ExtensionFactories[mm], delete yh._ExtensionOrders[mm];
        const Tm = yh._ExtensionNames.indexOf(mm);
        return -1 !== Tm && yh._ExtensionNames.splice(Tm, 1), !0
      }
      _generateJSON(mm, Tm, fm) {
        const hm = {
          byteLength: mm
        };
        return hm.byteLength && (this._glTF.buffers = [hm]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.Aq = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (hm.uri = Tm + ".bin"), fm ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(mm) {
        const Tm = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const fm = this._generateJSON(Tm.byteLength, mm, !0),
          hm = new Blob([Tm], {
            type: "application/octet-stream"
          }),
          Am = mm + ".gltf",
          am = mm + ".bin",
          xm = new im;
        if (xm.files[Am] = fm, xm.files[am] = hm, this._imageData)
          for (const wm in this._imageData) xm.files[wm] = this._imageData[wm];
        return xm
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(mm) {
        const Tm = mm % 4;
        return 0 === Tm ? Tm : 4 - Tm
      }
      async generateGLBAsync(mm) {
        this._shouldUseGlb = !0;
        const Tm = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const fm = this._generateJSON(Tm.byteLength),
          hm = mm + ".glb";
        let Am, am = fm.length;
        if ("undefined" !== typeof TextEncoder) {
          Am = (new TextEncoder).encode(fm), am = Am.length
        }
        const xm = this._getPadding(am),
          wm = this._getPadding(Tm.byteLength),
          Dm = 28 + am + xm + Tm.byteLength + wm,
          Rm = new hh(Dm);
        if (Rm.writeUInt32(1179937895), Rm.writeUInt32(2), Rm.writeUInt32(Dm), Rm.writeUInt32(am + xm), Rm.writeUInt32(1313821514), Am) Rm.writeTypedArray(Am);
        else {
          const mm = "_".charCodeAt(0);
          for (let Tm = 0; Tm < am; ++Tm) {
            const hm = fm.charCodeAt(Tm);
            hm != fm.codePointAt(Tm) ? Rm.writeUInt8(mm) : Rm.writeUInt8(hm)
          }
        }
        for (let im = 0; im < xm; ++im) Rm.writeUInt8(32);
        Rm.writeUInt32(Tm.byteLength + wm), Rm.writeUInt32(5130562), Rm.writeTypedArray(Tm);
        for (let im = 0; im < wm; ++im) Rm.writeUInt8(0);
        const pm = new im;
        return pm.files[hm] = new Blob([Rm.getOutputData()], {
          type: "application/octet-stream"
        }), pm
      }
      _setNodeTransformation(mm, Tm, fm) {
        if (Tm.getPivotPoint().equalsWithEpsilon(rf, Hf.c) || Am.Tools.Warn("Pivot points are not supported in the glTF serializer"), !Tm.position.equalsWithEpsilon(rf, Hf.c)) {
          const Am = hm.TmpVectors.WO[0].ZZ(Tm.position);
          fm && tf(Am), mm.translation = Am.ahm()
        }
        Tm.fi.equalsWithEpsilon(lf, Hf.c) || (mm.scale = Tm.fi.ahm());
        const am = Tm.rotationQuaternion?.clone() || hm.Quaternion.FromEulerAngles(Tm.rotation.x, Tm.rotation.y, Tm.rotation.z);
        am.equalsWithEpsilon(sf, Hf.c) || (fm && Uf(am), mm.rotation = am.normalize().ahm())
      }
      _setCameraTransformation(mm, Tm, fm) {
        const Am = hm.TmpVectors.WO[0],
          am = hm.TmpVectors.Quaternion[0],
          xm = Tm.getWorldMatrix();
        if (Tm.parent) {
          const mm = Tm.parent.getWorldMatrix().invertToRef(hm.TmpVectors.Matrix[0]);
          xm.multiplyToRef(mm, hm.TmpVectors.Matrix[1]).decompose(void 0, am, Am)
        } else xm.decompose(void 0, am, Am);
        Am.equalsWithEpsilon(rf, Hf.c) || (fm && tf(Am), mm.translation = Am.ahm()), fm && Uf(am), this._babylonScene.useRightHandedSystem || df(am), am.equalsWithEpsilon(sf, Hf.c) || (mm.rotation = am.ahm())
      }
      _listAvailableCameras() {
        for (const mm of this._babylonScene.cameras) {
          const Tm = {
            type: mm.mode === xh.b.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (mm.name && (Tm.name = mm.name), "perspective" === Tm.type) Tm.perspective = {
            aspectRatio: mm.dO().getAspectRatio(mm),
            yfov: mm.fovMode === xh.b.FOVMODE_VERTICAL_FIXED ? mm.fov : mm.fov * mm.dO().getAspectRatio(mm),
            znear: mm.minZ,
            zfar: mm.maxZ
          };
          else if ("orthographic" === Tm.type) {
            const fm = mm.orthoLeft && mm.orthoRight ? .5 * (mm.orthoRight - mm.orthoLeft) : .5 * mm.dO().getRenderWidth(),
              hm = mm.orthoBottom && mm.orthoTop ? .5 * (mm.orthoTop - mm.orthoBottom) : .5 * mm.dO().getRenderHeight();
            Tm.orthographic = {
              xmag: fm,
              ymag: hm,
              znear: mm.minZ,
              zfar: mm.maxZ
            }
          }
          this._camerasMap.set(mm, Tm)
        }
      }
      _exportAndAssignCameras() {
        const mm = Array.from(this._camerasMap.values());
        for (const Tm of mm) {
          const mm = this._nodesCameraMap.get(Tm);
          if (void 0 !== mm) {
            this._cameras.push(Tm);
            for (const Tm of mm) Tm.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const mm of this._babylonScene.skeletons) {
          if (mm.bones.length <= 0) continue;
          const Tm = {
            joints: []
          };
          this._skinMap.set(mm, Tm)
        }
      }
      _exportAndAssignSkeletons(mm) {
        for (const fm of this._babylonScene.skeletons) {
          if (fm.bones.length <= 0) continue;
          const am = this._skinMap.get(fm);
          if (void 0 == am) continue;
          const xm = {};
          let wm = -1;
          for (let mm = 0; mm < fm.bones.length; ++mm) {
            const Tm = fm.bones[mm],
              hm = Tm.getIndex() ?? mm; - 1 !== hm && (xm[hm] = Tm, hm > wm && (wm = hm))
          }
          const Dm = [];
          for (let fm = 0; fm <= wm; ++fm) {
            const wm = xm[fm],
              im = wm.getTransformNode(),
              Rm = im ? this._nodeMap.get(im) : void 0;
            if (void 0 === Rm) {
              Am.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            am.joints.push(Rm);
            const pm = wm.getAbsoluteInverseBindMatrix().clone();
            mm.has(im) && (Tm = pm, yf.invertToRef(hm.TmpVectors.Matrix[0]).multiplyToRef(Tm, Tm).multiplyToRef(yf, Tm)), Dm.push(pm)
          }
          const im = this._nodesSkinMap.get(am);
          if (am.joints.length > 0 && void 0 !== im) {
            const mm = new Float32Array(16 * Dm.length);
            Dm.forEach(((Tm, fm) => {
              mm.set(Tm.m, 16 * fm)
            }));
            const Tm = this._bufferManager.createBufferView(mm);
            this._accessors.push(this._bufferManager.createAccessor(Tm, "MAT4", 5126, Dm.length)), am.inverseBindMatrices = this._accessors.length - 1, this._skins.push(am);
            const fm = this._skins.length - 1;
            for (const hm of im) hm.skin = fm
          }
        }
        var Tm
      }
      async _exportSceneAsync() {
        const mm = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const Tm = this._options.metadataSelector(this._babylonScene.metadata);
          Tm && (mm.extras = Tm)
        }
        const Tm = new Array,
          fm = new Array,
          hm = new Array,
          Am = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let am;
        if (Am && !this._options.includeCoordinateSystemConversionNodes)
          for (const im of this._babylonScene.animationGroups)
            for (const mm of im.targetedAnimations) {
              const Tm = mm.target;
              Tm instanceof pm.c && !Tm.parent && (am ?? (am = new Set)).add(Tm)
            }
        for (const im of this._babylonScene.rootNodes) {
          const mm = im.animations,
            xm = !!mm && mm.length > 0 || am?.has(im);
          Am && !this._options.includeCoordinateSystemConversionNodes && Cf(im, this._babylonScene.useRightHandedSystem) && !xm ? hm.push(...im.getChildren()) : this._babylonScene.useRightHandedSystem ? Tm.push(im) : fm.push(im)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const xm = new Hh(!0, !1);
        mm.nodes.push(...await this._exportNodesAsync(fm, xm));
        const wm = new Hh(!1, !1);
        mm.nodes.push(...await this._exportNodesAsync(Tm, wm));
        const Dm = new Hh(!1, !0);
        mm.nodes.push(...await this._exportNodesAsync(hm, Dm)), mm.nodes.length && this._scenes.push(mm), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(xm.getNodesSet()), this._babylonScene.animationGroups.length && Oh._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, xm.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(mm) {
        return this._nodeMap.get(mm)
      }
      _getAnimationIndex(mm) {
        return this._animationGroupMap.get(mm)
      }
      _getCameraIndex(mm) {
        const Tm = this._camerasMap.get(mm);
        if (!Tm) return;
        const fm = this._cameras.indexOf(Tm);
        return fm >= 0 ? fm : void 0
      }
      _getMaterialIndex(mm) {
        return this._materialMap.get(mm)
      }
      _getRootIndex(mm, Tm) {
        switch (mm) {
          case "nodes":
            return this._getNodeIndex(Tm);
          case "animations":
            return this._getAnimationIndex(Tm);
          case "cameras":
            return this._getCameraIndex(Tm);
          case "materials":
            return this._getMaterialIndex(Tm);
          case "meshes": {
            const mm = this._getNodeIndex(Tm);
            return void 0 === mm ? void 0 : this._nodes[mm]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(Tm)?.index;
          case "images": {
            const mm = this._materialExporter.getTextureInfo(Tm)?.index;
            if (void 0 === mm) return;
            const fm = this._textures[mm];
            for (const Tm of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const mm = fm?.extensions?.[Tm]?.source;
              if ("number" === typeof mm) return mm
            }
            return fm?.source
          }
          case "samplers": {
            const mm = this._materialExporter.getTextureInfo(Tm)?.index;
            return void 0 === mm ? void 0 : this._textures[mm]?.sampler
          }
          case "skins": {
            const mm = this._skinMap.get(Tm),
              fm = mm ? this._skins.indexOf(mm) : -1;
            return fm >= 0 ? fm : void 0
          }
          case "scenes":
            return Tm === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(mm, Tm, fm) {
        const hm = this._nodes[mm];
        if (!hm) throw new Error(`Cannot write ${Tm}: glTF node ${mm} does not exist.`);
        hm.extensions || (hm.extensions = {}), hm.extensions[Tm] = fm
      }
      _shouldExportNode(mm) {
        let Tm = this._shouldExportNodeMap.get(mm);
        return void 0 === Tm && (Tm = this._options.shouldExportNode(mm), this._shouldExportNodeMap.set(mm, Tm)), Tm
      }
      async _exportNodesAsync(mm, Tm) {
        const fm = new Array;
        this._exportBuffers(mm, Tm);
        for (const hm of mm) await this._exportNodeAsync(hm, fm, Tm);
        return fm
      }
      _collectBuffers(mm, Tm, fm, hm, Am) {
        if (this._shouldExportNode(mm) && mm instanceof Em.c && mm.geometry) {
          const am = mm.geometry.getVertexBuffers();
          if (am)
            for (const hm in am) {
              if (!Lf(hm)) continue;
              const xm = am[hm];
              Am.setHasVertexColorAlpha(xm, mm.hasVertexAlpha);
              const wm = xm._buffer,
                Dm = Tm.get(wm) || [];
              Tm.set(wm, Dm), -1 === Dm.indexOf(xm) && Dm.push(xm);
              const im = fm.get(xm) || [];
              fm.set(xm, im), -1 === im.indexOf(mm) && im.push(mm)
            }
          const xm = mm.morphTargetManager;
          if (xm)
            for (let Tm = 0; Tm < xm.numTargets; Tm++) {
              const fm = xm.getTarget(Tm),
                Am = hm.get(fm) || [];
              hm.set(fm, Am), -1 === Am.indexOf(mm) && Am.push(mm)
            }
        }
        for (const am of mm.getChildren()) this._collectBuffers(am, Tm, fm, hm, Am)
      }
      _exportBuffers(mm, Tm) {
        const fm = new Map,
          hm = new Map,
          Am = new Map;
        for (const wm of mm) this._collectBuffers(wm, fm, hm, Am, Tm);
        const am = Array.from(fm.keys());
        for (const wm of am) {
          const mm = wm.getData();
          if (!mm) throw new Error("Buffer data is not available");
          const Am = fm.get(wm);
          if (!Am) continue;
          const am = Am[0].byteStride;
          if (Am.some((mm => mm.byteStride !== am))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const xm = Ff(mm).slice();
          for (const Tm of Am) {
            const mm = hm.get(Tm),
              {
                byteOffset: fm,
                byteStride: Am,
                componentCount: am,
                type: wm,
                count: Dm,
                normalized: im,
                kind: pm
              } = uf(Tm, mm);
            switch (pm) {
              case Rm.g.NormalKind:
              case Rm.g.TangentKind:
                (0, Xf.h)(xm, fm, Am, am, wm, Dm, im, (mm => {
                  const Tm = Math.sqrt(mm[0] * mm[0] + mm[1] * mm[1] + mm[2] * mm[2]);
                  if (Tm > 0) {
                    const fm = 1 / Tm;
                    mm[0] *= fm, mm[1] *= fm, mm[2] *= fm
                  }
                }));
                break;
              case Rm.g.ColorKind: {
                const Tm = mm.filter((mm => mm.material instanceof Dh.StandardMaterial || null == mm.material)).length;
                if (0 == Tm) break;
                if (Tm != mm.length) {
                  km.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                wm == Rm.g.UNSIGNED_BYTE && km.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const hm = new qm.Color3,
                  pm = new qm.e,
                  Em = this._babylonScene.dO().useExactSrgbConversions;
                (0, Xf.h)(xm, fm, Am, am, wm, Dm, im, (mm => {
                  3 === mm.length ? (hm.UTm(mm, 0), hm.toLinearSpaceToRef(hm, Em), hm.toArray(mm, 0)) : (pm.UTm(mm, 0), pm.toLinearSpaceToRef(pm, Em), pm.toArray(mm, 0))
                }))
              }
            }
          }
          if (Tm.convertToRightHanded) {
            for (const mm of Am) {
              const Tm = hm.get(mm),
                {
                  byteOffset: fm,
                  byteStride: Am,
                  componentCount: am,
                  type: wm,
                  count: Dm,
                  normalized: im,
                  kind: pm
                } = uf(mm, Tm);
              switch (pm) {
                case Rm.g.PositionKind:
                case Rm.g.NormalKind:
                case Rm.g.TangentKind:
                  (0, Xf.h)(xm, fm, Am, am, wm, Dm, im, (mm => {
                    mm[0] = -mm[0]
                  }))
              }
            }
            Tm.convertedToRightHandedBuffers.set(wm, xm)
          }
          const Dm = this._bufferManager.createBufferView(xm, am);
          Tm.setVertexBufferView(wm, Dm);
          const im = new Map;
          for (const Tm of Am) {
            const mm = hm.get(Tm),
              {
                kind: fm,
                totalVertices: Am
              } = uf(Tm, mm);
            switch (fm) {
              case Rm.g.MatricesIndicesKind:
              case Rm.g.MatricesIndicesExtraKind:
                if (Tm.type == Rm.g.FLOAT) {
                  const mm = Tm.getFloatData(Am);
                  null !== mm && im.set(Tm, mm)
                }
            }
          }
          0 !== im.size && km.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const pm = Array.from(im.keys());
          for (const fm of pm) {
            const mm = im.get(fm);
            if (!mm) continue;
            const hm = mm.some((mm => mm >= 256)),
              Am = new(hm ? Uint16Array : Uint8Array)(mm.length);
            for (let Tm = 0; Tm < mm.length; Tm++) Am[Tm] = mm[Tm];
            const am = this._bufferManager.createBufferView(Am, 4 * (hm ? 2 : 1));
            Tm.setRemappedBufferView(wm, fm, am)
          }
        }
        const xm = Array.from(Am.keys());
        for (const wm of xm) {
          const mm = Am.get(wm);
          if (!mm) continue;
          const fm = Yh(wm, mm[0], this._bufferManager, this._bufferViews, this._accessors, Tm.convertToRightHanded);
          for (const hm of mm) Tm.bindMorphDataToMesh(hm, fm)
        }
      }
      async _exportNodeAsync(mm, Tm, fm) {
        let hm = this._nodeMap.get(mm);
        if (void 0 !== hm) return void(Tm.includes(hm) || Tm.push(hm));
        const Am = await this._createNodeAsync(mm, fm);
        if (Am) {
          hm = this._nodes.length, this._nodes.push(Am), this._nodeMap.set(mm, hm), fm.pushExportedNode(mm), Tm.push(hm);
          const am = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            xm = [];
          this._babylonScene.animationGroups.length || (Oh._CreateMorphTargetAnimationFromMorphTargetAnimations(mm, am, xm, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, fm.convertToRightHanded, this._options.shouldExportAnimation), mm.animations.length && Oh._CreateNodeAnimationFromNodeAnimations(mm, am, xm, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, fm.convertToRightHanded, this._options.shouldExportAnimation)), am.channels.length && am.samplers.length && this._animations.push(am), xm.forEach((mm => {
            mm.channels.length && mm.samplers.length && this._animations.push(mm)
          }))
        }
        const am = Am ? [] : Tm;
        for (const xm of mm.getChildren()) await this._exportNodeAsync(xm, am, fm);
        Am && am.length && (Am.children = am)
      }
      async _createNodeAsync(mm, Tm) {
        if (!this._shouldExportNode(mm)) return null;
        const fm = {};
        if (mm.name && (fm.name = mm.name), mm.metadata) {
          const Tm = this._options.metadataSelector(mm.metadata);
          Tm && (fm.extras = Tm)
        }
        if (mm instanceof pm.c && (this._setNodeTransformation(fm, mm, Tm.convertToRightHanded), mm instanceof Em.c)) {
          const hm = mm instanceof om.d ? mm.mAm : mm;
          if (hm.jK && hm.jK.length > 0 && (fm.mesh = await this._exportMeshAsync(hm, Tm)), mm.skeleton) {
            const Tm = this._skinMap.get(mm.skeleton);
            void 0 !== Tm && (void 0 === this._nodesSkinMap.get(Tm) && this._nodesSkinMap.set(Tm, []), this._nodesSkinMap.get(Tm)?.push(fm))
          }
        }
        if (mm instanceof Pf.g) {
          const hm = this._camerasMap.get(mm);
          if (hm) {
            void 0 === this._nodesCameraMap.get(hm) && this._nodesCameraMap.set(hm, []), this._setCameraTransformation(fm, mm, Tm.convertToRightHanded);
            const Am = mm.parent;
            if (null !== Am && Wf(mm, Am)) {
              const mm = this._nodeMap.get(Am);
              if (void 0 !== mm) {
                const Tm = this._nodes[mm];
                return gf(fm, Tm), this._nodesCameraMap.get(hm)?.push(Tm), null
              }
            }
            this._nodesCameraMap.get(hm)?.push(fm)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", fm, mm, this._nodeMap, Tm.convertToRightHanded) ? fm : (km.b.Warn(`Not exporting node ${mm.name}`), null)
      }
      _exportIndices(mm, Tm, fm, hm, Am, xm, wm, Dm, im) {
        let Rm = null;
        im.mode = function(mm) {
          switch (mm) {
            case am.d.TriangleFillMode:
              return 4;
            case am.d.TriangleStripDrawMode:
              return 5;
            case am.d.TriangleFanDrawMode:
              return 6;
            case am.d.PointListDrawMode:
            case am.d.PointFillMode:
              return 0;
            case am.d.LineLoopDrawMode:
              return 2;
            case am.d.LineListDrawMode:
              return 1;
            case am.d.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${mm}`)
        }(xm);
        const pm = wm !== am.d.CounterClockWiseSideOrientation && function(mm) {
          switch (mm) {
            case am.d.TriangleFillMode:
            case am.d.TriangleStripDrawMode:
            case am.d.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(xm);
        if (pm) {
          if (xm === am.d.TriangleStripDrawMode || xm === am.d.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const wm = Tm ? new Uint32Array(hm) : new Uint16Array(hm);
          if (mm)
            for (let Tm = 0; Tm + 2 < hm; Tm += 3) wm[Tm] = mm[fm + Tm] + Am, wm[Tm + 1] = mm[fm + Tm + 2] + Am, wm[Tm + 2] = mm[fm + Tm + 1] + Am;
          else
            for (let mm = 0; mm + 2 < hm; mm += 3) wm[mm] = mm, wm[mm + 1] = mm + 2, wm[mm + 2] = mm + 1;
          Rm = wm
        } else if (mm && 0 !== Am) {
          const am = Tm ? new Uint32Array(hm) : new Uint16Array(hm);
          for (let Tm = 0; Tm < hm; Tm++) am[Tm] = mm[fm + Tm] + Am;
          Rm = am
        } else mm && (Rm = function(mm, Tm, fm, hm) {
          let Am = mm;
          return 0 === Tm && fm === mm.length || (Am = Array.isArray(mm) ? mm.slice(Tm, Tm + fm) : mm.subarray(Tm, Tm + fm)), Am instanceof Int32Array ? new Uint32Array(Am.buffer, Am.byteOffset, Am.length) : Array.isArray(Am) ? hm ? new Uint32Array(Am) : new Uint16Array(Am) : Am
        }(mm, fm, hm, Tm));
        if (Rm) {
          let am = Dm.getIndicesAccessor(mm, fm, hm, Am, pm);
          if (void 0 === am) {
            const xm = this._bufferManager.createBufferView(Rm),
              wm = Tm ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(xm, "SCALAR", wm, hm, 0)), am = this._accessors.length - 1, Dm.setIndicesAccessor(mm, fm, hm, Am, pm, am)
          }
          im.indices = am
        }
      }
      _exportVertexBuffer(mm, Tm, fm, hm, Am, am) {
        const xm = mm.getKind();
        if (!Lf(xm)) return;
        if (xm.startsWith("uv") && !this._options.exportUnusedUVs && (!Tm || !this._materialNeedsUVsSet.has(Tm))) return;
        let wm = Am.getVertexAccessor(mm, fm, hm);
        if (void 0 === wm) {
          const Tm = Am.convertedToRightHandedBuffers.get(mm._buffer) || mm._buffer.getData(),
            am = xm === Rm.g.PositionKind ? function(mm, Tm, fm, hm) {
              const {
                byteOffset: Am,
                byteStride: am,
                type: xm,
                normalized: wm
              } = Tm, Dm = Tm.getSize(), im = new Array(Dm).fill(1 / 0), Rm = new Array(Dm).fill(-1 / 0);
              return (0, Xf.h)(mm, Am + fm * am, am, Dm, xm, hm * Dm, wm, (mm => {
                for (let Tm = 0; Tm < Dm; Tm++) im[Tm] = Math.min(im[Tm], mm[Tm]), Rm[Tm] = Math.max(Rm[Tm], mm[Tm])
              })), {
                min: im,
                max: Rm
              }
            }(Tm, mm, fm, hm) : void 0,
            Dm = (xm === Rm.g.MatricesIndicesKind || xm === Rm.g.MatricesIndicesExtraKind) && mm.type === Rm.g.FLOAT,
            im = Dm ? Rm.g.UNSIGNED_BYTE : mm.type,
            pm = Dm ? void 0 : mm.normalized,
            Em = Dm ? Am.getRemappedBufferView(mm._buffer, mm) : Am.getVertexBufferView(mm._buffer),
            om = mm.byteOffset + fm * mm.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(Em, function(mm, Tm) {
            if (mm == Rm.g.ColorKind) return Tm ? "VEC4" : "VEC3";
            switch (mm) {
              case Rm.g.PositionKind:
              case Rm.g.NormalKind:
                return "VEC3";
              case Rm.g.TangentKind:
              case Rm.g.MatricesIndicesKind:
              case Rm.g.MatricesIndicesExtraKind:
              case Rm.g.MatricesWeightsKind:
              case Rm.g.MatricesWeightsExtraKind:
                return "VEC4";
              case Rm.g.UVKind:
              case Rm.g.UV2Kind:
              case Rm.g.UV3Kind:
              case Rm.g.UV4Kind:
              case Rm.g.UV5Kind:
              case Rm.g.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${mm}`)
          }(xm, Am.hasVertexColorAlpha(mm)), im, hm, om, am, pm)), wm = this._accessors.length - 1, Am.setVertexAccessor(mm, fm, hm, wm)
        }
        am.attributes[function(mm) {
          switch (mm) {
            case Rm.g.PositionKind:
              return "POSITION";
            case Rm.g.NormalKind:
              return "NORMAL";
            case Rm.g.TangentKind:
              return "TANGENT";
            case Rm.g.ColorKind:
              return "COLOR_0";
            case Rm.g.UVKind:
              return "TEXCOORD_0";
            case Rm.g.UV2Kind:
              return "TEXCOORD_1";
            case Rm.g.UV3Kind:
              return "TEXCOORD_2";
            case Rm.g.UV4Kind:
              return "TEXCOORD_3";
            case Rm.g.UV5Kind:
              return "TEXCOORD_4";
            case Rm.g.UV6Kind:
              return "TEXCOORD_5";
            case Rm.g.MatricesIndicesKind:
              return "JOINTS_0";
            case Rm.g.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case Rm.g.MatricesWeightsKind:
              return "WEIGHTS_0";
            case Rm.g.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${mm}`)
        }(xm)] = wm
      }
      async _exportMaterialAsync(mm, Tm, fm, hm) {
        let Am = this._materialMap.get(mm);
        if (void 0 === Am) {
          const hm = Tm && Object.keys(Tm).some((mm => mm.startsWith("uv")));
          if ((mm = mm instanceof wh.e ? mm.B3[fm.materialIndex] : mm) instanceof JT) Am = await this._materialExporter.exportPBRMaterialAsync(mm, hm);
          else if (mm instanceof Dh.StandardMaterial) Am = await this._materialExporter.exportStandardMaterialAsync(mm, hm);
          else {
            if (!(mm instanceof FT)) return void km.b.Warn(`Unsupported material '${mm.name}' with type ${mm.getClassName()}`);
            Am = await this._materialExporter.exportOpenPBRMaterialAsync(mm, hm)
          }
          this._materialMap.set(mm, Am)
        }
        hm.material = Am
      }
      async _exportMeshAsync(mm, Tm) {
        let fm = Tm.getMesh(mm);
        if (void 0 !== fm) return fm;
        const hm = {
          primitives: []
        };
        fm = this._meshes.length, this._meshes.push(hm), Tm.setMesh(mm, fm);
        const Am = mm.isUnIndexed ? null : mm.xhm(),
          xm = mm.geometry?.getVertexBuffers(),
          wm = Tm.getMorphTargetsFromMesh(mm),
          Dm = mm instanceof qh.c,
          im = mm instanceof Ph,
          Rm = mm.jK;
        if (xm && Rm && Rm.length > 0)
          for (const pm of Rm) {
            const fm = {
                attributes: {}
              },
              Rm = pm.TY() || this._babylonScene.defaultMaterial;
            if (im) {
              const Tm = {
                  name: Rm.name
                },
                hm = mm,
                Am = qm.Color3.White(),
                am = hm.material?.alpha ?? 1,
                xm = hm.greasedLineMaterial?.color ?? Am;
              (!xm.equalsWithEpsilon(Am, Hf.c) || am < 1) && (Tm.pbrMetallicRoughness = {
                baseColorFactor: [...xm.ahm(), am]
              }), this._materials.push(Tm), fm.material = this._materials.length - 1
            } else if (Dm) {
              const Tm = {
                  name: Rm.name
                },
                hm = mm;
              (!hm.color.equalsWithEpsilon(qm.Color3.White(), Hf.c) || hm.alpha < 1) && (Tm.pbrMetallicRoughness = {
                baseColorFactor: [...hm.color.ahm(), hm.alpha]
              }), this._materials.push(Tm), fm.material = this._materials.length - 1
            } else await this._exportMaterialAsync(Rm, xm, pm, fm);
            const Em = Dm || im ? am.d.LineListDrawMode : mm.overrideRenderingFillMode ?? Rm.fillMode;
            let om = Rm._getEffectiveOrientation(mm);
            Tm.wasAddedByNoopNode && !mm.wG().useRightHandedSystem && (om = om === am.d.ClockWiseSideOrientation ? am.d.CounterClockWiseSideOrientation : am.d.ClockWiseSideOrientation), this._exportIndices(Am, Am ? (0, Xf.d)(Am, pm.indexCount, pm.indexStart, pm.verticesStart) : pm.verticesCount > 65535, Am ? pm.indexStart : pm.verticesStart, Am ? pm.indexCount : pm.verticesCount, -pm.verticesStart, Em, om, Tm, fm);
            for (const mm of Object.values(xm)) this._exportVertexBuffer(mm, Rm, pm.verticesStart, pm.verticesCount, Tm, fm);
            if (wm) {
              fm.targets = [];
              for (const mm of wm) fm.targets.push(mm.attributes)
            }
            hm.primitives.push(fm), this._extensionsPostExportMeshPrimitive(fm)
          }
        if (wm) {
          hm.weights = [], hm.extras || (hm.extras = {}), hm.extras.targetNames = [];
          for (const mm of wm) hm.weights.push(mm.influence), hm.extras.targetNames.push(mm.name)
        }
        return fm
      }
    }
    yh._ExtensionNames = new Array, yh._ExtensionFactories = {}, yh._ExtensionOrders = {};
    class Ch {
      static async GLTFAsync(mm, Tm, fm) {
        fm && fm.exportWithoutWaitingForScene || await mm.whenReadyAsync();
        const hm = new yh(mm, fm),
          Am = await hm.generateGLTFAsync(Tm.replace(/\.[^/.]+$/, ""));
        return hm.dispose(), Am
      }
      static async GLBAsync(mm, Tm, fm) {
        fm && fm.exportWithoutWaitingForScene || await mm.whenReadyAsync();
        const hm = new yh(mm, fm),
          Am = await hm.generateGLBAsync(Tm.replace(/\.[^/.]+$/, ""));
        return hm.dispose(), Am
      }
    }
    const rh = "EXT_mesh_gpu_instancing";

    function sh(mm, Tm) {
      const fm = new Float32Array(3 * Tm);
      for (let hm = 0; hm < Tm; hm++) fm[3 * hm + 0] = mm[4 * hm + 0], fm[3 * hm + 1] = mm[4 * hm + 1], fm[3 * hm + 2] = mm[4 * hm + 2];
      return fm
    }
    class lh {
      constructor(mm) {
        this.name = rh, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = mm
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(mm, Tm, fm, hm, Am, am) {
        return await new Promise((mm => {
          if (Tm && fm instanceof zh.d && fm.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const mm = Cm.p.Zero(),
              hm = Cm.h.Identity(),
              xm = Cm.p.One(),
              wm = fm.thinInstanceGetWorldMatrices(),
              Dm = Cm.j.WO[2],
              im = Cm.j.Quaternion[1],
              Rm = Cm.j.WO[3];
            let pm = !1,
              Em = !1,
              om = !1;
            const Om = new Float32Array(3 * fm.o4),
              Ym = new Float32Array(4 * fm.o4),
              qm = new Float32Array(3 * fm.o4);
            let jm = 0;
            for (const Tm of wm) Tm.decompose(Rm, im, Dm), Am && (tf(Dm), Uf(im)), Om.set(Dm.ahm(), 3 * jm), Ym.set(im.normalize().ahm(), 4 * jm), qm.set(Rm.ahm(), 3 * jm), pm = pm || !Dm.equalsWithEpsilon(mm), Em = Em || !im.equalsWithEpsilon(hm), om = om || !Rm.equalsWithEpsilon(xm), jm++;
            const Vm = {
              attributes: {}
            };
            pm && (Vm.attributes.TRANSLATION = this._buildAccessor(Om, "VEC3", fm.o4, am)), Em && (Vm.attributes.ROTATION = this._buildAccessor(Ym, "VEC4", fm.o4, am)), om && (Vm.attributes.SCALE = this._buildAccessor(qm, "VEC3", fm.o4, am));
            let Im = fm._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (Im) {
              const mm = fm.o4,
                Tm = "VEC3";
              fm.hasVertexAlpha && Im.length === 4 * mm ? (this._instanceColorWarned || (km.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), Im = sh(Im, mm)) : Im.length === 4 * mm && (Im = sh(Im, mm)), Im.length === 3 * mm && (Vm.attributes._COLOR_0 = this._buildAccessor(Im, Tm, mm, am))
            }
            Tm.extensions = Tm.extensions || {}, Tm.extensions[rh] = Vm
          }
          mm(Tm)
        }))
      }
      _buildAccessor(mm, Tm, fm, hm) {
        const Am = hm.createBufferView(mm),
          am = hm.createAccessor(Am, Tm, 5126, fm);
        return this._exporter._accessors.push(am), this._exporter._accessors.length - 1
      }
    }
    let Mh = !1;

    function uh() {
      Mh || (Mh = !0, yh.RegisterExtension(rh, (mm => new lh(mm))))
    }
    fm(40590);
    uh();
    var Bh = fm(41871);

    function Lh(mm, Tm, fm, hm) {
      const Am = mm;
      let am = null,
        xm = null,
        wm = null,
        Dm = null;
      const im = {},
        Rm = Tm.find((mm => "POSITION" === mm.dracoName));
      if (!Rm) throw new Error("Draco: Missing position attribute for encoding.");
      if (!fm) {
        const mm = Rm.data.length / Rm.size;
        fm = new(mm > 65535 ? Uint32Array : Uint16Array)(mm);
        for (let Tm = 0; Tm < mm; Tm++) fm[Tm] = Tm
      }
      try {
        am = new Am.Encoder, xm = new Am.MeshBuilder, wm = new Am.Mesh, xm.AddFacesToMesh(wm, fm.length / 3, fm);
        const mm = new Map([
          [Float32Array, (mm, Tm, fm, hm, Am, am) => mm.AddFloatAttribute(Tm, fm, hm, Am, am)],
          [Uint32Array, (mm, Tm, fm, hm, Am, am) => mm.AddUInt32Attribute(Tm, fm, hm, Am, am)],
          [Uint16Array, (mm, Tm, fm, hm, Am, am) => mm.AddUInt16Attribute(Tm, fm, hm, Am, am)],
          [Uint8Array, (mm, Tm, fm, hm, Am, am) => mm.AddUInt8Attribute(Tm, fm, hm, Am, am)],
          [Int32Array, (mm, Tm, fm, hm, Am, am) => mm.AddInt32Attribute(Tm, fm, hm, Am, am)],
          [Int16Array, (mm, Tm, fm, hm, Am, am) => mm.AddInt16Attribute(Tm, fm, hm, Am, am)],
          [Int8Array, (mm, Tm, fm, hm, Am, am) => mm.AddInt8Attribute(Tm, fm, hm, Am, am)]
        ]);
        for (const fm of Tm) {
          fm.data instanceof Uint8ClampedArray && (fm.data = new Uint8Array(fm.data));
          const Tm = mm.get(fm.data.constructor),
            Dm = fm.data.length / fm.size;
          im[fm.kind] = Tm(xm, wm, Am[fm.dracoName], Dm, fm.size, fm.data), hm.quantizationBits && hm.quantizationBits[fm.dracoName] && am.SetAttributeQuantization(Am[fm.dracoName], hm.quantizationBits[fm.dracoName])
        }
        hm.method && am.SetEncodingMethod(Am[hm.method]), void 0 !== hm.encodeSpeed && void 0 !== hm.decodeSpeed && am.SetSpeedOptions(hm.encodeSpeed, hm.decodeSpeed), Dm = new Am.DracoInt8Array;
        const Rm = am.EncodeMeshToDracoBuffer(wm, Dm);
        if (Rm <= 0) throw new Error("Draco: Failed to encode.");
        const pm = new Int8Array(Rm);
        for (let Tm = 0; Tm < Rm; Tm++) pm[Tm] = Dm.GetValue(Tm);
        return {
          data: pm,
          attributeIds: im
        }
      } finally {
        wm && Am.destroy(wm), xm && Am.destroy(xm), am && Am.destroy(am), Dm && Am.destroy(Dm)
      }
    }

    function vh() {
      let mm;
      onmessage = Tm => {
        const fm = Tm.data;
        switch (fm.id) {
          case "init": {
            fm.url && importScripts(fm.url);
            const Tm = fm.wasmBinary ? {
              wasmBinary: fm.wasmBinary
            } : {};
            mm = DracoEncoderModule(Tm), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!mm) throw new Error("Draco: Encoder module is not available.");
            mm.then((mm => {
              const Tm = Lh(mm, fm.attributes, fm.indices, fm.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: Tm
              }, Tm ? [Tm.data.buffer] : void 0)
            })).catch((mm => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: mm.message
              })
            }))
        }
      }
    }
    class th {
      constructor(mm) {
        if (mm.workerPool) return void(this._workerPoolPromise = Promise.resolve(mm.workerPool));
        const Tm = mm.wasmBinary,
          fm = mm.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          hm = fm && "function" === typeof Worker && "function" === typeof URL,
          Am = hm || !mm.jsModule,
          am = mm.wasmUrl && mm.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: Am ? zT.h.GetBabylonScriptURL(mm.wasmUrl, !0) : "",
            wasmBinaryPromise: Tm ? Promise.resolve(Tm) : zT.h.LoadFileAsync(zT.h.GetBabylonScriptURL(mm.wasmBinaryUrl, !0))
          } : {
            url: Am ? zT.h.GetBabylonScriptURL(mm.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        hm ? this._workerPoolPromise = am.wasmBinaryPromise.then((mm => {
          const Tm = this._getWorkerContent(),
            hm = URL.createObjectURL(new Blob([Tm], {
              type: "application/javascript"
            }));
          return new Bh.c(fm, (() => async function(mm, Tm, fm) {
            return await new Promise(((hm, Am) => {
              const am = Tm => {
                  mm.removeEventListener("error", am), mm.removeEventListener("message", xm), Am(Tm)
                },
                xm = Tm => {
                  "initDone" === Tm.data.id && (mm.removeEventListener("error", am), mm.removeEventListener("message", xm), hm(mm))
                };
              if (mm.addEventListener("error", am), mm.addEventListener("message", xm), Tm) {
                const hm = Tm.slice(0);
                mm.postMessage({
                  id: "init",
                  url: fm,
                  wasmBinary: hm
                }, [hm])
              } else mm.postMessage({
                id: "init",
                url: fm
              })
            }))
          }(new Worker(hm), mm, am.url)))
        })) : this._modulePromise = am.wasmBinaryPromise.then((async Tm => {
          if (!this._isModuleAvailable() && !mm.jsModule) {
            if (!am.url) throw new Error("Draco codec module is not available");
            await zT.h.LoadBabylonScriptAsync(am.url)
          }
          return await this._createModuleAsync(Tm, mm.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((mm => {
          mm.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function Uh() {
      const mm = mm => !!mm && "object" === typeof mm;
      for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
      return fm.reduce(((Tm, fm) => {
        const hm = Object.keys(fm);
        for (const Am of hm) {
          const hm = Tm[Am],
            am = fm[Am];
          Array.isArray(hm) && Array.isArray(am) ? Tm[Am] = hm.concat(am) : mm(hm) && mm(am) ? Tm[Am] = Uh(hm, am) : Tm[Am] = am
        }
        return Tm
      }), {})
    }

    function dh(mm) {
      return mm === rm.m.PositionKind ? "POSITION" : mm === rm.m.NormalKind ? "NORMAL" : mm === rm.m.ColorKind ? "COLOR" : mm.startsWith(rm.m.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const gh = {
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
    class Wh extends th {
      static get DefaultAvailable() {
        return !!((mm = Wh.DefaultConfiguration).wasmUrl && (mm.wasmBinary || mm.wasmBinaryUrl) && "object" === typeof WebAssembly || mm.fallbackUrl);
        var mm
      }
      static get Default() {
        return Wh._Default ?? (Wh._Default = new Wh), Wh._Default
      }
      static ResetDefault(mm) {
        Wh._Default && (mm || Wh._Default.dispose(), Wh._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(mm, Tm) {
        return {
          module: await (Tm || DracoEncoderModule)({
            wasmBinary: mm
          })
        }
      }
      _getWorkerContent() {
        return `${Lh}(${vh})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wh.DefaultConfiguration)
      }
      async _encodeAsync(mm, Tm, fm) {
        const hm = fm ? Uh(gh, fm) : gh;
        if (this._workerPoolPromise) {
          const fm = await this._workerPoolPromise;
          return await new Promise(((Am, am) => {
            fm.push(((fm, xm) => {
              const wm = mm => {
                  fm.removeEventListener("error", wm), fm.removeEventListener("message", Dm), am(mm), xm()
                },
                Dm = mm => {
                  "encodeMeshSuccess" === mm.data.id ? (fm.removeEventListener("error", wm), fm.removeEventListener("message", Dm), Am(mm.data.encodedMeshData), xm()) : "encodeMeshError" === mm.data.id && (fm.removeEventListener("error", wm), fm.removeEventListener("message", Dm), am(new Error(mm.data.errorMessage)), xm())
                };
              fm.addEventListener("error", wm), fm.addEventListener("message", Dm);
              const im = [];
              for (const Tm of mm) im.push(Tm.data.buffer);
              Tm && im.push(Tm.buffer), fm.postMessage({
                id: "encodeMesh",
                attributes: mm,
                indices: Tm,
                options: hm
              }, im)
            }))
          }))
        }
        if (this._modulePromise) {
          return Lh((await this._modulePromise).module, mm, Tm, hm)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(mm, Tm) {
        if (0 == mm.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        mm instanceof zh.d && mm.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === Tm?.method && (km.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), Tm.method = "MESH_SEQUENTIAL_ENCODING");
        const fm = function(mm) {
            let Tm = mm.xhm(void 0, !0);
            return !Tm || Tm instanceof Uint32Array || Tm instanceof Uint16Array || (Tm = ((0, Xf.d)(Tm, Tm.length) ? Uint32Array : Uint16Array).from(Tm)), Tm
          }(mm),
          hm = function(mm, Tm) {
            const fm = [];
            for (const hm of mm.getVerticesDataKinds()) {
              if (Tm?.includes(hm)) {
                if (hm === rm.m.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const Am = mm.getVertexBuffer(hm),
                am = Am.getSize(),
                xm = (0, Xf.u)(Am.getData(), am, Am.type, Am.byteOffset, Am.byteStride, mm.getTotalVertices(), !0);
              fm.push({
                kind: hm,
                dracoName: dh(hm),
                size: am,
                data: xm
              })
            }
            return fm
          }(mm, Tm?.excludedAttributes);
        return await this._encodeAsync(hm, fm, Tm)
      }
    }
    Wh.DefaultConfiguration = {
      wasmUrl: `${zT.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${zT.h._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${zT.h._DefaultCdnUrl}/draco_encoder.js`
    }, Wh._Default = null;
    const Fh = "KHR_draco_mesh_compression";
    class mA {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(mm) {
        this.name = Fh, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === mm.options.meshCompressionMethod && Wh.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(mm, Tm, fm) {
        if (!this.enabled) return;
        if (4 !== mm.mode && 5 !== mm.mode) return void km.b.Warn("Cannot compress primitive with mode " + mm.mode + ".");
        const hm = [],
          Am = [];
        let am = null;
        if (void 0 !== mm.indices) {
          const xm = fm[mm.indices],
            wm = Tm.getBufferView(xm);
          am = Tm.getData(wm).slice(), hm.push(wm), Am.push(xm)
        }
        const xm = [];
        for (const [Rm, pm] of Object.entries(mm.attributes)) {
          const mm = fm[pm],
            am = Tm.getBufferView(mm),
            Dm = Bf(mm.type),
            im = (0, Xf.u)(Tm.getData(am), Dm, mm.componentType, mm.byteOffset || 0, am.byteStride || (0, Xf.s)(mm.componentType) * Dm, mm.count, !0);
          xm.push({
            kind: Rm,
            dracoName: (wm = Rm, "POSITION" === wm ? "POSITION" : "NORMAL" === wm ? "NORMAL" : wm.startsWith("COLOR") ? "COLOR" : wm.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: Bf(mm.type),
            data: im
          }), hm.push(am), Am.push(mm)
        }
        var wm;
        const Dm = {
            method: mm.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          im = Wh.Default._encodeAsync(xm, am, Dm).then((fm => {
            const am = {
                bufferView: -1,
                attributes: fm.attributeIds
              },
              xm = Tm.createBufferView(fm.data);
            Tm.setBufferView(am, xm);
            for (const mm of hm) this._bufferViewsUsed.add(mm);
            for (const mm of Am) this._accessorsUsed.add(mm);
            mm.extensions || (mm.extensions = {}), mm.extensions[Fh] = am
          })).catch((mm => {
            km.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + mm.message)
          }));
        this._encodePromises.push(im), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(mm) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((Tm => {
          mm.getPropertiesWithBufferView(Tm).every((mm => this._accessorsUsed.has(mm))) && mm.removeBufferView(Tm)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let TA = !1;

    function fA() {
      TA || (TA = !0, yh.RegisterExtension(Fh, (mm => new mA(mm))))
    }
    fA();
    var hA = fm(41613);
    const AA = "KHR_lights_punctual",
      aA = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      xA = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      wA = Cm.p.Backward();
    class DA {
      constructor(mm) {
        this.name = AA, this.enabled = !0, this.required = !1, this._exporter = mm
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[AA] = this._lights
      }
      async postExportNodeAsync(mm, Tm, fm, hm, Am) {
        return await new Promise((am => {
          if (!(fm instanceof oh.e)) return void am(Tm);
          const xm = fm.getTypeID() == oh.e.LIGHTTYPEID_POINTLIGHT ? "point" : fm.getTypeID() == oh.e.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : fm.getTypeID() == oh.e.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!xm || !(fm instanceof hA.d)) return km.b.Warn(`${mm}: Light ${fm.name} is not supported in ${AA}`), void am(Tm);
          if (fm.falloffType !== oh.e.FALLOFF_GLTF && km.b.Warn(`${mm}: Light falloff for ${fm.name} does not match the ${AA} specification!`), !fm.position.Mxm(0, 0, 0)) {
            const mm = Cm.j.WO[0].ZZ(fm.position);
            Am && tf(mm), Tm.translation = mm.ahm()
          }
          if ("point" !== xm) {
            const mm = fm.direction.normalizeToRef(Cm.j.WO[0]);
            Am && tf(mm);
            const hm = Cm.h.FromUnitVectorsToRef(wA, mm, Cm.j.Quaternion[0]);
            Cm.h.IsIdentity(hm) || (Tm.rotation = hm.ahm())
          }
          const wm = {
            type: xm,
            name: fm.name,
            color: fm.diffuse.ahm(),
            intensity: fm.intensity,
            range: fm.range
          };
          if (mh(wm, aA), "spot" === xm) {
            const mm = fm;
            wm.spot = {
              innerConeAngle: mm.innerAngle / 2,
              outerConeAngle: mm.angle / 2
            }, mh(wm.spot, xA)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(wm);
          const Dm = {
              light: this._lights.lights.length - 1
            },
            im = fm.parent;
          if (im && Wf(fm, im)) {
            const mm = hm.get(im);
            if (mm) {
              const fm = this._exporter._nodes[mm];
              return gf(Tm, fm), fm.extensions || (fm.extensions = {}), fm.extensions[AA] = Dm, void am(null)
            }
          }
          Tm.extensions || (Tm.extensions = {}), Tm.extensions[AA] = Dm, am(Tm)
        }))
      }
    }
    let iA = !1;

    function RA() {
      iA || (iA = !0, yh.RegisterExtension(AA, (mm => new DA(mm))))
    }
    RA();
    const pA = "KHR_interactivity";
    class EA {
      constructor(mm) {
        this._exporter = mm, this.name = pA, this.enabled = !!mm.options.khrInteractivity, this.required = mm.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var mm, Tm, fm;
        const hm = this._exporter.options.khrInteractivity;
        if (!hm) return;
        const Am = hm.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: mm => this._exporter._getNodeIndex(mm),
          getAnimationIndex: mm => this._exporter._getAnimationIndex(mm),
          getCameraIndex: mm => this._exporter._getCameraIndex(mm),
          getMaterialIndex: mm => this._exporter._getMaterialIndex(mm),
          getRootIndex: (mm, Tm) => this._exporter._getRootIndex(mm, Tm),
          setNodeExtension: (mm, Tm, fm) => this._exporter._setNodeExtension(mm, Tm, fm)
        });
        this._exporter._glTF.extensions[pA] = Am;
        for (const am of hm.additionalExtensionsUsed)(mm = this._exporter._glTF).extensionsUsed || (mm.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(am) && this._exporter._glTF.extensionsUsed.push(am);
        for (const am of hm.additionalExtensionsRequired)(Tm = this._exporter._glTF).extensionsUsed || (Tm.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(am) && this._exporter._glTF.extensionsUsed.push(am), (fm = this._exporter._glTF).extensionsRequired || (fm.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(am) && this._exporter._glTF.extensionsRequired.push(am)
      }
    }
    let oA = !1;

    function OA() {
      oA || (oA = !0, yh.RegisterExtension(pA, (mm => new EA(mm)), 200))
    }
    OA();
    const YA = "EXT_lights_area",
      qA = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      jA = {
        aspect: 1
      },
      VA = Cm.p.Backward();
    class IA {
      constructor(mm) {
        this.name = YA, this.enabled = !0, this.required = !1, this._exporter = mm
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[YA] = this._lights
      }
      async postExportNodeAsync(mm, Tm, fm, hm, Am) {
        return await new Promise((am => {
          if (!(fm instanceof oh.e)) return void am(Tm);
          const xm = fm.getTypeID() == oh.e.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!xm) return km.b.Warn(`${mm}: Light ${fm.name} is not supported in ${YA}`), void am(Tm);
          const wm = fm;
          if (wm.falloffType !== oh.e.FALLOFF_GLTF && km.b.Warn(`${mm}: Light falloff for ${fm.name} does not match the ${YA} specification!`), !wm.position.Mxm(0, 0, 0)) {
            const mm = Cm.j.WO[0].ZZ(wm.position);
            Am && tf(mm), Tm.translation = mm.ahm()
          }
          const Dm = Cm.p.Forward();
          Am && tf(Dm);
          const im = Cm.h.FromUnitVectorsToRef(VA, Dm, Cm.j.Quaternion[0]);
          Cm.h.IsIdentity(im) || (Tm.rotation = im.ahm());
          const Rm = {
            type: xm,
            name: wm.name,
            color: wm.diffuse.ahm(),
            intensity: wm.intensity,
            size: wm.height,
            rect: {
              aspect: wm.width / wm.height
            }
          };
          mh(Rm, qA), Rm.rect && mh(Rm.rect, jA), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Rm);
          const pm = {
              light: this._lights.lights.length - 1
            },
            Em = fm.parent;
          if (Em && Wf(wm, Em)) {
            const mm = hm.get(Em);
            if (mm) {
              const fm = this._exporter._nodes[mm];
              return gf(Tm, fm), fm.extensions || (fm.extensions = {}), fm.extensions[YA] = pm, void am(null)
            }
          }
          Tm.extensions || (Tm.extensions = {}), Tm.extensions[YA] = pm, am(Tm)
        }))
      }
    }
    let KA = !1;

    function QA() {
      KA || (KA = !0, yh.RegisterExtension(YA, (mm => new IA(mm))))
    }
    QA();
    const nA = "KHR_materials_anisotropy";
    class JA {
      constructor(mm) {
        this.name = nA, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = mm
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(mm, Tm, fm) {
        const hm = [];
        if (fm instanceof JT) {
          if (fm.anisotropy.isEnabled && !fm.anisotropy.legacy) return fm.anisotropy.texture && hm.push(fm.anisotropy.texture), hm
        } else if (fm instanceof FT && fm.specularRoughnessAnisotropy > 0) {
          const mm = function(mm) {
            const Tm = mm.specularRoughnessAnisotropyTexture,
              fm = mm.geometryTangentTexture;
            return `${Tm&&Tm.getInternalTexture()?Tm.getInternalTexture().uniqueId:"NoStrength"}_${fm&&fm.getInternalTexture()?fm.getInternalTexture().uniqueId:"NoTangent"}`
          }(fm);
          if (this._anisoTexturesMap[mm]) hm.push(this._anisoTexturesMap[mm]);
          else {
            const Tm = await async function(mm) {
              const Tm = mm.wG(),
                fm = mm.specularRoughnessAnisotropyTexture,
                hm = mm.geometryTangentTexture;
              return fm || hm ? await wf("AnisotropyTexture", pf(hm ? Df(hm, 0) : Rf(1), hm ? Df(hm, 1) : Rf(0), fm ? Df(fm, 0) : Rf(1)), Tm) : null
            }(fm);
            Tm && (hm.push(Tm), this._anisoTexturesMap[mm] = Tm)
          }
          return hm
        }
        return []
      }
      postExportMaterialAsync(mm, Tm, fm) {
        return new Promise((mm => {
          var hm;
          if (fm instanceof JT) {
            if (!fm.anisotropy.isEnabled || fm.anisotropy.legacy) return void mm(Tm);
            this._wasUsed = !0, Tm.extensions = Tm.extensions || {};
            const hm = this._exporter._materialExporter.getTextureInfo(fm.anisotropy.texture),
              Am = {
                anisotropyStrength: fm.anisotropy.intensity,
                anisotropyRotation: fm.anisotropy.angle,
                anisotropyTexture: hm ?? void 0
              };
            null !== Am.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(fm), Tm.extensions[nA] = Am
          } else if (fm instanceof FT && fm.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, Tm.extensions = Tm.extensions || {};
            let Am = fm.specularRoughnessTexture;
            fm._useRoughnessFromMetallicTextureGreen && (Am = fm.baseMetalnessTexture);
            const am = this._anisoTexturesMap[fm.id];
            if (!Am && !am) {
              let hm = fm.specularRoughness,
                Am = fm.specularRoughnessAnisotropy;
              if (!fm._useGltfStyleAnisotropy) {
                const mm = function(mm, Tm) {
                  const fm = mm * mm,
                    hm = fm * Math.sqrt(2 / (1 + (1 - Tm) * (1 - Tm))),
                    Am = (1 - Tm) * hm;
                  return {
                    newBaseRoughness: Math.sqrt(Am),
                    newAnisotropyStrength: Math.min(Math.sqrt((hm - fm) / Math.max(1 - fm, 1e-4)), 1)
                  }
                }(fm.specularRoughness, fm.specularRoughnessAnisotropy);
                hm = mm.newBaseRoughness, Am = mm.newAnisotropyStrength
              }
              Tm.pbrMetallicRoughness && (Tm.pbrMetallicRoughness.roughnessFactor = hm);
              const am = {
                anisotropyStrength: Am,
                anisotropyRotation: fm.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return Tm.extensions[nA] = am, mm(Tm)
            }
            const xm = am ? this._exporter._materialExporter.getTextureInfo(am) : null,
              wm = {
                anisotropyStrength: fm.specularRoughnessAnisotropy,
                anisotropyRotation: fm.geometryTangentAngle,
                anisotropyTexture: xm || void 0,
                extensions: {}
              };
            fm._useGltfStyleAnisotropy || (Tm.extensions.KHR_materials_openpbr = {}, (hm = this._exporter._glTF).extensionsUsed || (hm.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(fm), Tm.extensions[nA] = wm
          }
          mm(Tm)
        }))
      }
    }
    let cA = !1;

    function zA() {
      cA || (cA = !0, yh.RegisterExtension(nA, (mm => new JA(mm))))
    }
    zA();
    const ZA = "KHR_materials_clearcoat";

    function kA(mm, Tm) {
      const fm = new Sm.f(Tm.name, Tm.wG());
      return fm._texture = mm, fm.coordinatesIndex = Tm.coordinatesIndex, Tm instanceof Sm.f && (fm.uOffset = Tm.uOffset, fm.vOffset = Tm.vOffset, fm.uScale = Tm.uScale, fm.vScale = Tm.vScale, fm.wAng = Tm.wAng), fm.wrapU = Tm.wrapU, fm.wrapV = Tm.wrapV, fm
    }
    class bA {
      constructor(mm) {
        this.name = ZA, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = mm
      }
      dispose() {
        for (const mm of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[mm].dispose()
        }
        this._mergedTexturesMap = {};
        for (const mm of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[mm].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(mm, Tm, fm) {
        const hm = [];
        if (fm instanceof JT) {
          if (fm.clearCoat.isEnabled) return fm.clearCoat.texture && hm.push(fm.clearCoat.texture), !fm.clearCoat.useRoughnessFromMainTexture && fm.clearCoat.textureRoughness && hm.push(fm.clearCoat.textureRoughness), fm.clearCoat.bumpTexture && hm.push(fm.clearCoat.bumpTexture), hm
        } else if (fm instanceof FT && fm.coatWeight > 0) {
          let mm = !1;
          if (fm.coatWeightTexture ? fm.coatRoughnessTexture ? fm._useCoatRoughnessFromGreenChannel && fm.coatWeightTexture.getInternalTexture() === fm.coatRoughnessTexture.getInternalTexture() ? (hm.push(fm.coatWeightTexture), hm.push(fm.coatRoughnessTexture)) : mm = !0 : hm.push(fm.coatWeightTexture) : fm.coatRoughnessTexture && (fm._useCoatRoughnessFromGreenChannel ? hm.push(fm.coatRoughnessTexture) : mm = !0), mm) {
            const mm = function(mm) {
              const Tm = mm.coatWeightTexture,
                fm = Tm && Tm.getInternalTexture() ? Tm.getInternalTexture().uniqueId : "NoCoat",
                hm = mm.coatRoughnessTexture;
              return `${fm}_${hm&&hm.getInternalTexture()?hm.getInternalTexture().uniqueId:"NoRoughness"}`
            }(fm);
            if (!this._cachedInternalTexturesMap[mm]) {
              const Tm = await async function(mm) {
                const Tm = mm.wG(),
                  fm = mm.coatWeightTexture,
                  hm = mm.coatRoughnessTexture;
                return fm || hm ? (await wf("CoatTexture", pf(fm ? Df(fm, 0) : Rf(1), hm ? Df(hm, mm._useCoatRoughnessFromGreenChannel ? 1 : 0) : Rf(1)), Tm)).getInternalTexture() : null
              }(fm);
              Tm && (this._cachedInternalTexturesMap[mm] = Tm)
            }
            this._cachedInternalTexturesMap[mm] && (fm.coatWeightTexture && (this._mergedTexturesMap[fm.coatWeightTexture.uniqueId] = kA(this._cachedInternalTexturesMap[mm], fm.coatWeightTexture), hm.push(this._mergedTexturesMap[fm.coatWeightTexture.uniqueId])), fm.coatRoughnessTexture && (this._mergedTexturesMap[fm.coatRoughnessTexture.uniqueId] = kA(this._cachedInternalTexturesMap[mm], fm.coatRoughnessTexture), hm.push(this._mergedTexturesMap[fm.coatRoughnessTexture.uniqueId])))
          }
          return fm.geometryCoatNormalTexture && hm.push(fm.geometryCoatNormalTexture), hm
        }
        return []
      }
      postExportMaterialAsync(mm, Tm, fm) {
        return new Promise((mm => {
          if (fm instanceof JT) {
            if (!fm.clearCoat.isEnabled) return void mm(Tm);
            this._wasUsed = !0, Tm.extensions = Tm.extensions || {};
            const hm = this._exporter._materialExporter.getTextureInfo(fm.clearCoat.texture);
            let Am;
            Am = fm.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(fm.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(fm.clearCoat.textureRoughness), fm.clearCoat.isTintEnabled && zT.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${fm.name}`), fm.clearCoat.remapF0OnInterfaceChange && zT.h.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${fm.name}`);
            const am = this._exporter._materialExporter.getTextureInfo(fm.clearCoat.bumpTexture),
              xm = {
                clearcoatFactor: fm.clearCoat.intensity,
                clearcoatTexture: hm ?? void 0,
                clearcoatRoughnessFactor: fm.clearCoat.roughness,
                clearcoatRoughnessTexture: Am ?? void 0,
                clearcoatNormalTexture: am ?? void 0
              };
            null === xm.clearcoatTexture && null === xm.clearcoatRoughnessTexture && null === xm.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(fm), Tm.extensions[ZA] = xm
          } else if (fm instanceof FT) {
            if (0 == fm.coatWeight) return void mm(Tm);
            let hm, Am, am, xm;
            this._wasUsed = !0, Tm.extensions = Tm.extensions || {}, fm.coatWeightTexture && (hm = this._mergedTexturesMap[fm.coatWeightTexture.uniqueId], Am = this._exporter._materialExporter.getTextureInfo(hm)), fm.coatRoughnessTexture && (am = this._mergedTexturesMap[fm.coatRoughnessTexture.uniqueId], xm = this._exporter._materialExporter.getTextureInfo(am)), fm.coatColorTexture && zT.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${fm.name}`);
            const wm = this._exporter._materialExporter.getTextureInfo(fm.geometryCoatNormalTexture),
              Dm = {
                clearcoatFactor: fm.coatWeight,
                clearcoatTexture: Am ?? void 0,
                clearcoatRoughnessFactor: fm.coatRoughness,
                clearcoatRoughnessTexture: xm ?? void 0,
                clearcoatNormalTexture: wm ?? void 0
              };
            null === Dm.clearcoatTexture && null === Dm.clearcoatRoughnessTexture && null === Dm.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(fm), Tm.extensions[ZA] = Dm
          }
          mm(Tm)
        }))
      }
    }
    let SA = !1;

    function eA() {
      SA || (SA = !0, yh.RegisterExtension(ZA, (mm => new bA(mm))))
    }
    eA();
    const NA = "KHR_materials_coat";

    function GA(mm) {
      const Tm = mm.coatRoughnessAnisotropyTexture,
        fm = mm.geometryCoatTangentTexture;
      return `${Tm&&Tm.getInternalTexture()?Tm.getInternalTexture().uniqueId:"NoStrength"}_${fm&&fm.getInternalTexture()?fm.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function XA(mm, Tm) {
      const fm = new Sm.f(Tm.name, Tm.wG());
      return fm._texture = mm, fm.coordinatesIndex = Tm.coordinatesIndex, Tm instanceof Sm.f && (fm.uOffset = Tm.uOffset, fm.vOffset = Tm.vOffset, fm.uScale = Tm.uScale, fm.vScale = Tm.vScale, fm.wAng = Tm.wAng), fm.wrapU = Tm.wrapU, fm.wrapV = Tm.wrapV, fm
    }
    class PA {
      constructor(mm) {
        this.name = NA, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = mm
      }
      dispose() {
        for (const mm of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[mm].dispose()
        }
        this._mergedTexturesMap = {};
        for (const mm of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[mm].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(mm, Tm, fm) {
        const hm = [];
        if (fm instanceof JT) {
          if (fm.clearCoat.isEnabled) return fm.clearCoat.texture && hm.push(fm.clearCoat.texture), !fm.clearCoat.useRoughnessFromMainTexture && fm.clearCoat.textureRoughness && hm.push(fm.clearCoat.textureRoughness), fm.clearCoat.bumpTexture && hm.push(fm.clearCoat.bumpTexture), fm.clearCoat.tintTexture && hm.push(fm.clearCoat.tintTexture), hm
        } else if (fm instanceof FT && fm.coatWeight > 0) {
          let mm = !1;
          if (fm.coatWeightTexture ? fm.coatRoughnessTexture ? fm._useCoatRoughnessFromGreenChannel && fm.coatWeightTexture.getInternalTexture() === fm.coatRoughnessTexture.getInternalTexture() ? (hm.push(fm.coatWeightTexture), hm.push(fm.coatRoughnessTexture)) : mm = !0 : hm.push(fm.coatWeightTexture) : fm.coatRoughnessTexture && (fm._useCoatRoughnessFromGreenChannel ? hm.push(fm.coatRoughnessTexture) : mm = !0), mm) {
            const mm = function(mm) {
              const Tm = mm.coatWeightTexture,
                fm = Tm && Tm.getInternalTexture() ? Tm.getInternalTexture().uniqueId : "NoCoat",
                hm = mm.coatRoughnessTexture;
              return `${fm}_${hm&&hm.getInternalTexture()?hm.getInternalTexture().uniqueId:"NoRoughness"}`
            }(fm);
            if (!this._cachedInternalTexturesMap[mm]) {
              const Tm = await async function(mm) {
                const Tm = mm.wG(),
                  fm = mm.coatWeightTexture,
                  hm = mm.coatRoughnessTexture;
                return fm || hm ? (await wf("CoatTexture", pf(fm ? Df(fm, 0) : Rf(1), hm ? Df(hm, mm._useCoatRoughnessFromGreenChannel ? 1 : 0) : Rf(1)), Tm)).getInternalTexture() : null
              }(fm);
              Tm && (this._cachedInternalTexturesMap[mm] = Tm)
            }
            this._cachedInternalTexturesMap[mm] && (fm.coatWeightTexture && (this._mergedTexturesMap[fm.coatWeightTexture.uniqueId] = XA(this._cachedInternalTexturesMap[mm], fm.coatWeightTexture), hm.push(this._mergedTexturesMap[fm.coatWeightTexture.uniqueId])), fm.coatRoughnessTexture && (this._mergedTexturesMap[fm.coatRoughnessTexture.uniqueId] = XA(this._cachedInternalTexturesMap[mm], fm.coatRoughnessTexture), hm.push(this._mergedTexturesMap[fm.coatRoughnessTexture.uniqueId])))
          }
          if (fm.geometryCoatNormalTexture && hm.push(fm.geometryCoatNormalTexture), fm.coatColorTexture && hm.push(fm.coatColorTexture), fm.coatRoughnessAnisotropy > 0) {
            const mm = GA(fm);
            if (this._mergedTexturesMap[mm]) hm.push(this._mergedTexturesMap[mm]);
            else {
              const Tm = await async function(mm) {
                const Tm = mm.wG(),
                  fm = mm.coatRoughnessAnisotropyTexture,
                  hm = mm.geometryCoatTangentTexture;
                return fm || hm ? await wf("AnisotropyTexture", pf(hm ? Df(hm, 0) : Rf(1), hm ? Df(hm, 1) : Rf(0), fm ? Df(fm, 0) : Rf(1)), Tm) : null
              }(fm);
              Tm && (hm.push(Tm), this._mergedTexturesMap[mm] = Tm)
            }
            return hm
          }
          return hm
        }
        return []
      }
      postExportMaterialAsync(mm, Tm, fm) {
        return new Promise((mm => {
          var hm;
          if (fm instanceof JT) {
            if (!fm.clearCoat.isEnabled) return void mm(Tm);
            this._wasUsed = !0, Tm.extensions = Tm.extensions || {};
            const hm = this._exporter._materialExporter.getTextureInfo(fm.clearCoat.texture);
            let Am, am;
            Am = fm.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(fm.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(fm.clearCoat.textureRoughness), fm.clearCoat.isTintEnabled && (am = this._exporter._materialExporter.getTextureInfo(fm.clearCoat.tintTexture));
            const xm = this._exporter._materialExporter.getTextureInfo(fm.clearCoat.bumpTexture),
              wm = fm.clearCoat.indexOfRefraction,
              Dm = {
                coatFactor: fm.clearCoat.intensity,
                coatTexture: hm ?? void 0,
                coatRoughnessFactor: fm.clearCoat.roughness,
                coatRoughnessTexture: Am ?? void 0,
                coatNormalTexture: xm ?? void 0,
                coatColorFactor: fm.clearCoat.tintColor.ahm(),
                coatColorTexture: am ?? void 0,
                coatIor: 1.5 !== wm ? wm : void 0
              };
            null === Dm.coatTexture && null === Dm.coatRoughnessTexture && null === Dm.coatRoughnessTexture && null === Dm.coatColorTexture || this._exporter._materialNeedsUVsSet.add(fm), Tm.extensions[NA] = Dm
          } else if (fm instanceof FT) {
            if (0 == fm.coatWeight) return void mm(Tm);
            let Am, am, xm, wm;
            this._wasUsed = !0, Tm.extensions = Tm.extensions || {}, fm.coatWeightTexture && (Am = this._mergedTexturesMap[fm.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[fm.coatWeightTexture.uniqueId] : fm.coatWeightTexture, am = this._exporter._materialExporter.getTextureInfo(Am)), fm.coatRoughnessTexture && (xm = this._mergedTexturesMap[fm.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[fm.coatRoughnessTexture.uniqueId] : fm.coatRoughnessTexture, wm = this._exporter._materialExporter.getTextureInfo(xm));
            const Dm = this._exporter._materialExporter.getTextureInfo(fm.geometryCoatNormalTexture),
              im = this._exporter._materialExporter.getTextureInfo(fm.coatColorTexture),
              Rm = fm.coatIor,
              pm = fm.coatDarkening,
              Em = fm.coatRoughnessTexture,
              om = GA(fm),
              Om = this._mergedTexturesMap[om];
            let Ym, qm = 0,
              jm = 0;
            if (fm.coatRoughnessAnisotropy > 0) {
              if (Em || Om) {
                const mm = Om ? this._exporter._materialExporter.getTextureInfo(Om) : null;
                qm = fm.coatRoughnessAnisotropy, jm = fm.geometryCoatTangentAngle, Ym = mm || void 0
              } else {
                let mm = fm.coatRoughness,
                  hm = fm.coatRoughnessAnisotropy;
                if (!fm._useGltfStyleAnisotropy) {
                  const Tm = function(mm, Tm) {
                    const fm = mm * mm,
                      hm = fm * Math.sqrt(2 / (1 + (1 - Tm) * (1 - Tm))),
                      Am = (1 - Tm) * hm;
                    return {
                      newBaseRoughness: Math.sqrt(Am),
                      newAnisotropyStrength: Math.min(Math.sqrt((hm - fm) / Math.max(1 - fm, 1e-4)), 1)
                    }
                  }(fm.coatRoughness, fm.coatRoughnessAnisotropy);
                  mm = Tm.newBaseRoughness, hm = Tm.newAnisotropyStrength
                }
                Tm.pbrMetallicRoughness && (Tm.pbrMetallicRoughness.roughnessFactor = mm), qm = hm, jm = fm.geometryCoatTangentAngle + .5 * Math.PI, Ym = void 0
              }
              fm._useGltfStyleAnisotropy || (Tm.extensions.KHR_materials_openpbr = {}, (hm = this._exporter._glTF).extensionsUsed || (hm.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const Vm = {
              coatFactor: fm.coatWeight,
              coatTexture: am ?? void 0,
              coatRoughnessFactor: fm.coatRoughness,
              coatRoughnessTexture: wm ?? void 0,
              coatNormalTexture: Dm ?? void 0,
              coatColorFactor: fm.coatColor.ahm(),
              coatColorTexture: im ?? void 0,
              coatIor: 1.5 !== Rm ? Rm : void 0,
              coatDarkeningFactor: 1 !== pm ? pm : void 0,
              coatAnisotropyRotation: jm,
              coatAnisotropyStrength: qm,
              coatAnisotropyTexture: Ym
            };
            null === Vm.coatTexture && null === Vm.coatRoughnessTexture && null === Vm.coatRoughnessTexture && null === Vm.coatAnisotropyTexture && null === Vm.coatColorTexture || this._exporter._materialNeedsUVsSet.add(fm), Tm.extensions[NA] = Vm
          }
          mm(Tm)
        }))
      }
    }
    let HA = !1;

    function yA() {
      HA || (HA = !0, yh.RegisterExtension(NA, (mm => new PA(mm))))
    }
    yA();
    let CA = (() => {
      var mm, Tm, fm, hm, Am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm, Vm, Im, Km, Qm, nm, Jm, cm, km, bm, Sm, em, Nm, Gm, Pm, Hm, ym, Cm, rm, sm, lm, Mm, um, Bm, tm, Um, dm, gm, Wm, Fm, mT, TT, fT, hT, AT, aT, xT, wT, DT, iT, RT, pT, ET, oT, OT, YT, qT, jT, VT, IT, KT;
      let QT, nT, zT, ZT, kT, bT, ST, eT, NT, GT, XT, PT, HT, yT, CT, rT, sT, lT, MT, uT, BT, LT, vT, tT, UT, dT, gT, WT, FT, mf, Tf, ff, hf, Af, af, xf, wf, Df, Rf, pf, Ef, of, Of, Yf, qf, jf, Vf, If, Kf, Qf, nf, Jf, zf, Zf, kf, bf, Sf, ef, Nf, Gf, Xf, Pf, Hf, yf, Cf, rf, sf, lf, Mf = JT,
        uf = [],
        Bf = [],
        Lf = [],
        vf = [],
        tf = [],
        Uf = [],
        df = [],
        gf = [],
        Wf = [],
        Ff = [],
        mh = [],
        Th = [],
        fh = [],
        hh = [],
        Ah = [],
        ah = [],
        xh = [],
        wh = [],
        Dh = [],
        ih = [],
        Rh = [],
        ph = [],
        Eh = [],
        oh = [],
        Oh = [],
        Yh = [],
        qh = [],
        jh = [],
        Vh = [],
        Ih = [],
        Kh = [],
        Qh = [],
        nh = [],
        Jh = [],
        ch = [],
        zh = [],
        Zh = [],
        kh = [],
        bh = [],
        Sh = [],
        eh = [],
        Nh = [],
        Gh = [],
        Xh = [],
        Ph = [],
        Hh = [],
        yh = [],
        Ch = [],
        rh = [],
        sh = [],
        lh = [],
        Mh = [],
        uh = [],
        Bh = [],
        Lh = [],
        vh = [],
        th = [],
        Uh = [],
        dh = [],
        gh = [],
        Wh = [],
        Fh = [],
        mA = [],
        TA = [],
        fA = [],
        hA = [],
        AA = [],
        aA = [],
        xA = [],
        wA = [],
        DA = [],
        iA = [],
        RA = [],
        pA = [],
        EA = [],
        oA = [],
        OA = [],
        YA = [],
        qA = [],
        jA = [],
        VA = [],
        IA = [],
        KA = [],
        QA = [],
        nA = [],
        JA = [],
        cA = [],
        zA = [],
        ZA = [],
        kA = [],
        bA = [],
        SA = [],
        eA = [],
        NA = [],
        GA = [],
        XA = [],
        PA = [],
        HA = [],
        yA = [],
        CA = [],
        rA = [],
        sA = [],
        lA = [],
        MA = [],
        uA = [],
        BA = [],
        LA = [],
        vA = [],
        tA = [],
        UA = [],
        dA = [],
        gA = [],
        WA = [],
        FA = [],
        ma = [],
        Ta = [],
        fa = [],
        ha = [],
        Aa = [],
        aa = [],
        xa = [],
        wa = [],
        Da = [],
        ia = [],
        Ra = [],
        pa = [],
        Ea = [],
        oa = [],
        Oa = [],
        Ya = [],
        qa = [],
        ja = [],
        Va = [];
      return mm = class extends Mf {
        get directIntensity() {
          return (0, zm.b)(this, Tm, "f")
        }
        set directIntensity(mm) {
          (0, zm.c)(this, Tm, mm, "f")
        }
        get emissiveIntensity() {
          return (0, zm.b)(this, fm, "f")
        }
        set emissiveIntensity(mm) {
          (0, zm.c)(this, fm, mm, "f")
        }
        get environmentIntensity() {
          return (0, zm.b)(this, hm, "f")
        }
        set environmentIntensity(mm) {
          (0, zm.c)(this, hm, mm, "f")
        }
        get specularIntensity() {
          return (0, zm.b)(this, Am, "f")
        }
        set specularIntensity(mm) {
          (0, zm.c)(this, Am, mm, "f")
        }
        get disableBumpMap() {
          return (0, zm.b)(this, xm, "f")
        }
        set disableBumpMap(mm) {
          (0, zm.c)(this, xm, mm, "f")
        }
        get albedoTexture() {
          return (0, zm.b)(this, wm, "f")
        }
        set albedoTexture(mm) {
          (0, zm.c)(this, wm, mm, "f")
        }
        get baseWeightTexture() {
          return (0, zm.b)(this, Dm, "f")
        }
        set baseWeightTexture(mm) {
          (0, zm.c)(this, Dm, mm, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, zm.b)(this, im, "f")
        }
        set baseDiffuseRoughnessTexture(mm) {
          (0, zm.c)(this, im, mm, "f")
        }
        get ambientTexture() {
          return (0, zm.b)(this, Rm, "f")
        }
        set ambientTexture(mm) {
          (0, zm.c)(this, Rm, mm, "f")
        }
        get ambientTextureStrength() {
          return (0, zm.b)(this, pm, "f")
        }
        set ambientTextureStrength(mm) {
          (0, zm.c)(this, pm, mm, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, zm.b)(this, Em, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(mm) {
          (0, zm.c)(this, Em, mm, "f")
        }
        get opacityTexture() {
          return (0, zm.b)(this, om, "f")
        }
        set opacityTexture(mm) {
          (0, zm.c)(this, om, mm, "f")
        }
        get reflectionTexture() {
          return (0, zm.b)(this, Om, "f")
        }
        set reflectionTexture(mm) {
          (0, zm.c)(this, Om, mm, "f")
        }
        get emissiveTexture() {
          return (0, zm.b)(this, Ym, "f")
        }
        set emissiveTexture(mm) {
          (0, zm.c)(this, Ym, mm, "f")
        }
        get reflectivityTexture() {
          return (0, zm.b)(this, qm, "f")
        }
        set reflectivityTexture(mm) {
          (0, zm.c)(this, qm, mm, "f")
        }
        get metallicTexture() {
          return (0, zm.b)(this, jm, "f")
        }
        set metallicTexture(mm) {
          (0, zm.c)(this, jm, mm, "f")
        }
        get metallic() {
          return (0, zm.b)(this, Vm, "f")
        }
        set metallic(mm) {
          (0, zm.c)(this, Vm, mm, "f")
        }
        get roughness() {
          return (0, zm.b)(this, Im, "f")
        }
        set roughness(mm) {
          (0, zm.c)(this, Im, mm, "f")
        }
        get metallicF0Factor() {
          return (0, zm.b)(this, Km, "f")
        }
        set metallicF0Factor(mm) {
          (0, zm.c)(this, Km, mm, "f")
        }
        get metallicReflectanceColor() {
          return (0, zm.b)(this, Qm, "f")
        }
        set metallicReflectanceColor(mm) {
          (0, zm.c)(this, Qm, mm, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, zm.b)(this, nm, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(mm) {
          (0, zm.c)(this, nm, mm, "f")
        }
        get metallicReflectanceTexture() {
          return (0, zm.b)(this, Jm, "f")
        }
        set metallicReflectanceTexture(mm) {
          (0, zm.c)(this, Jm, mm, "f")
        }
        get reflectanceTexture() {
          return (0, zm.b)(this, cm, "f")
        }
        set reflectanceTexture(mm) {
          (0, zm.c)(this, cm, mm, "f")
        }
        get microSurfaceTexture() {
          return (0, zm.b)(this, km, "f")
        }
        set microSurfaceTexture(mm) {
          (0, zm.c)(this, km, mm, "f")
        }
        get bumpTexture() {
          return (0, zm.b)(this, bm, "f")
        }
        set bumpTexture(mm) {
          (0, zm.c)(this, bm, mm, "f")
        }
        get lightmapTexture() {
          return (0, zm.b)(this, Sm, "f")
        }
        set lightmapTexture(mm) {
          (0, zm.c)(this, Sm, mm, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(mm) {
          this.subSurface.refractionTexture = mm, mm ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, zm.b)(this, em, "f")
        }
        set ambientColor(mm) {
          (0, zm.c)(this, em, mm, "f")
        }
        get albedoColor() {
          return (0, zm.b)(this, Nm, "f")
        }
        set albedoColor(mm) {
          (0, zm.c)(this, Nm, mm, "f")
        }
        get baseWeight() {
          return (0, zm.b)(this, Gm, "f")
        }
        set baseWeight(mm) {
          (0, zm.c)(this, Gm, mm, "f")
        }
        get baseDiffuseRoughness() {
          return (0, zm.b)(this, Pm, "f")
        }
        set baseDiffuseRoughness(mm) {
          (0, zm.c)(this, Pm, mm, "f")
        }
        get reflectivityColor() {
          return (0, zm.b)(this, Hm, "f")
        }
        set reflectivityColor(mm) {
          (0, zm.c)(this, Hm, mm, "f")
        }
        get reflectionColor() {
          return (0, zm.b)(this, ym, "f")
        }
        set reflectionColor(mm) {
          (0, zm.c)(this, ym, mm, "f")
        }
        get emissiveColor() {
          return (0, zm.b)(this, Cm, "f")
        }
        set emissiveColor(mm) {
          (0, zm.c)(this, Cm, mm, "f")
        }
        get microSurface() {
          return (0, zm.b)(this, rm, "f")
        }
        set microSurface(mm) {
          (0, zm.c)(this, rm, mm, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(mm) {
          this.subSurface.indexOfRefraction = mm
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(mm) {
          this.subSurface.invertRefractionY = mm
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(mm) {
          this.subSurface.linkRefractionWithTransparency = mm, mm && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, zm.b)(this, sm, "f")
        }
        set useLightmapAsShadowmap(mm) {
          (0, zm.c)(this, sm, mm, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, zm.b)(this, lm, "f")
        }
        set useAlphaFromAlbedoTexture(mm) {
          (0, zm.c)(this, lm, mm, "f")
        }
        get forceAlphaTest() {
          return (0, zm.b)(this, Mm, "f")
        }
        set forceAlphaTest(mm) {
          (0, zm.c)(this, Mm, mm, "f")
        }
        get alphaCutOff() {
          return (0, zm.b)(this, um, "f")
        }
        set alphaCutOff(mm) {
          (0, zm.c)(this, um, mm, "f")
        }
        get useSpecularOverAlpha() {
          return (0, zm.b)(this, Bm, "f")
        }
        set useSpecularOverAlpha(mm) {
          (0, zm.c)(this, Bm, mm, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, zm.b)(this, tm, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(mm) {
          (0, zm.c)(this, tm, mm, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, zm.b)(this, Um, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(mm) {
          (0, zm.c)(this, Um, mm, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, zm.b)(this, dm, "f")
        }
        set useRoughnessFromMetallicTextureGreen(mm) {
          (0, zm.c)(this, dm, mm, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, zm.b)(this, gm, "f")
        }
        set useMetallnessFromMetallicTextureBlue(mm) {
          (0, zm.c)(this, gm, mm, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, zm.b)(this, Wm, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(mm) {
          (0, zm.c)(this, Wm, mm, "f")
        }
        get useAmbientInGrayScale() {
          return (0, zm.b)(this, Fm, "f")
        }
        set useAmbientInGrayScale(mm) {
          (0, zm.c)(this, Fm, mm, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, zm.b)(this, mT, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(mm) {
          (0, zm.c)(this, mT, mm, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === JT.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(mm) {
          mm !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = mm ? JT.LIGHTFALLOFF_PHYSICAL : JT.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === JT.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(mm) {
          mm !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = mm ? JT.LIGHTFALLOFF_GLTF : JT.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, zm.b)(this, TT, "f")
        }
        set useRadianceOverAlpha(mm) {
          (0, zm.c)(this, TT, mm, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, zm.b)(this, fT, "f")
        }
        set useObjectSpaceNormalMap(mm) {
          (0, zm.c)(this, fT, mm, "f")
        }
        get useParallax() {
          return (0, zm.b)(this, hT, "f")
        }
        set useParallax(mm) {
          (0, zm.c)(this, hT, mm, "f")
        }
        get useParallaxOcclusion() {
          return (0, zm.b)(this, AT, "f")
        }
        set useParallaxOcclusion(mm) {
          (0, zm.c)(this, AT, mm, "f")
        }
        get parallaxScaleBias() {
          return (0, zm.b)(this, aT, "f")
        }
        set parallaxScaleBias(mm) {
          (0, zm.c)(this, aT, mm, "f")
        }
        get disableLighting() {
          return (0, zm.b)(this, xT, "f")
        }
        set disableLighting(mm) {
          (0, zm.c)(this, xT, mm, "f")
        }
        get forceIrradianceInFragment() {
          return (0, zm.b)(this, wT, "f")
        }
        set forceIrradianceInFragment(mm) {
          (0, zm.c)(this, wT, mm, "f")
        }
        get maxSimultaneousLights() {
          return (0, zm.b)(this, DT, "f")
        }
        set maxSimultaneousLights(mm) {
          (0, zm.c)(this, DT, mm, "f")
        }
        get invertNormalMapX() {
          return (0, zm.b)(this, iT, "f")
        }
        set invertNormalMapX(mm) {
          (0, zm.c)(this, iT, mm, "f")
        }
        get invertNormalMapY() {
          return (0, zm.b)(this, RT, "f")
        }
        set invertNormalMapY(mm) {
          (0, zm.c)(this, RT, mm, "f")
        }
        get twoSidedLighting() {
          return (0, zm.b)(this, pT, "f")
        }
        set twoSidedLighting(mm) {
          (0, zm.c)(this, pT, mm, "f")
        }
        get useAlphaFresnel() {
          return (0, zm.b)(this, ET, "f")
        }
        set useAlphaFresnel(mm) {
          (0, zm.c)(this, ET, mm, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, zm.b)(this, oT, "f")
        }
        set useLinearAlphaFresnel(mm) {
          (0, zm.c)(this, oT, mm, "f")
        }
        get environmentBRDFTexture() {
          return (0, zm.b)(this, OT, "f")
        }
        set environmentBRDFTexture(mm) {
          (0, zm.c)(this, OT, mm, "f")
        }
        get forceNormalForward() {
          return (0, zm.b)(this, YT, "f")
        }
        set forceNormalForward(mm) {
          (0, zm.c)(this, YT, mm, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, zm.b)(this, qT, "f")
        }
        set enableSpecularAntiAliasing(mm) {
          (0, zm.c)(this, qT, mm, "f")
        }
        get useHorizonOcclusion() {
          return (0, zm.b)(this, jT, "f")
        }
        set useHorizonOcclusion(mm) {
          (0, zm.c)(this, jT, mm, "f")
        }
        get useRadianceOcclusion() {
          return (0, zm.b)(this, VT, "f")
        }
        set useRadianceOcclusion(mm) {
          (0, zm.c)(this, VT, mm, "f")
        }
        get unlit() {
          return (0, zm.b)(this, IT, "f")
        }
        set unlit(mm) {
          (0, zm.c)(this, IT, mm, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, zm.b)(this, KT, "f")
        }
        set applyDecalMapAfterDetailMap(mm) {
          (0, zm.c)(this, KT, mm, "f")
        }
        constructor(am, Zm) {
          super(am, Zm, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), Tm.set(this, ((0, zm.i)(this, uf), (0, zm.i)(this, Bf, 1))), fm.set(this, ((0, zm.i)(this, Lf), (0, zm.i)(this, vf, 1))), hm.set(this, ((0, zm.i)(this, tf), (0, zm.i)(this, Uf, 1))), Am.set(this, ((0, zm.i)(this, df), (0, zm.i)(this, gf, 1))), xm.set(this, ((0, zm.i)(this, Wf), (0, zm.i)(this, Ff, !1))), wm.set(this, ((0, zm.i)(this, mh), (0, zm.i)(this, Th, void 0))), Dm.set(this, ((0, zm.i)(this, fh), (0, zm.i)(this, hh, void 0))), im.set(this, ((0, zm.i)(this, Ah), (0, zm.i)(this, ah, void 0))), Rm.set(this, ((0, zm.i)(this, xh), (0, zm.i)(this, wh, void 0))), pm.set(this, ((0, zm.i)(this, Dh), (0, zm.i)(this, ih, 1))), Em.set(this, ((0, zm.i)(this, Rh), (0, zm.i)(this, ph, mm.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), om.set(this, ((0, zm.i)(this, Eh), (0, zm.i)(this, oh, void 0))), Om.set(this, ((0, zm.i)(this, Oh), (0, zm.i)(this, Yh, void 0))), Ym.set(this, ((0, zm.i)(this, qh), (0, zm.i)(this, jh, void 0))), qm.set(this, ((0, zm.i)(this, Vh), (0, zm.i)(this, Ih, void 0))), jm.set(this, ((0, zm.i)(this, Kh), (0, zm.i)(this, Qh, void 0))), Vm.set(this, ((0, zm.i)(this, nh), (0, zm.i)(this, Jh, void 0))), Im.set(this, ((0, zm.i)(this, ch), (0, zm.i)(this, zh, void 0))), Km.set(this, ((0, zm.i)(this, Zh), (0, zm.i)(this, kh, 1))), Qm.set(this, ((0, zm.i)(this, bh), (0, zm.i)(this, Sh, Lm.b.White()))), nm.set(this, ((0, zm.i)(this, eh), (0, zm.i)(this, Nh, !1))), Jm.set(this, ((0, zm.i)(this, Gh), (0, zm.i)(this, Xh, void 0))), cm.set(this, ((0, zm.i)(this, Ph), (0, zm.i)(this, Hh, void 0))), km.set(this, ((0, zm.i)(this, yh), (0, zm.i)(this, Ch, void 0))), bm.set(this, ((0, zm.i)(this, rh), (0, zm.i)(this, sh, void 0))), Sm.set(this, ((0, zm.i)(this, lh), (0, zm.i)(this, Mh, void 0))), em.set(this, ((0, zm.i)(this, uh), (0, zm.i)(this, Bh, new Lm.b(0, 0, 0)))), Nm.set(this, ((0, zm.i)(this, Lh), (0, zm.i)(this, vh, new Lm.b(1, 1, 1)))), Gm.set(this, ((0, zm.i)(this, th), (0, zm.i)(this, Uh, 1))), Pm.set(this, ((0, zm.i)(this, dh), (0, zm.i)(this, gh, void 0))), Hm.set(this, ((0, zm.i)(this, Wh), (0, zm.i)(this, Fh, new Lm.b(1, 1, 1)))), ym.set(this, ((0, zm.i)(this, mA), (0, zm.i)(this, TA, new Lm.b(1, 1, 1)))), Cm.set(this, ((0, zm.i)(this, fA), (0, zm.i)(this, hA, new Lm.b(0, 0, 0)))), rm.set(this, ((0, zm.i)(this, AA), (0, zm.i)(this, aA, 1))), sm.set(this, ((0, zm.i)(this, xA), (0, zm.i)(this, wA, !1))), lm.set(this, ((0, zm.i)(this, DA), (0, zm.i)(this, iA, !1))), Mm.set(this, ((0, zm.i)(this, RA), (0, zm.i)(this, pA, !1))), um.set(this, ((0, zm.i)(this, EA), (0, zm.i)(this, oA, .4))), Bm.set(this, ((0, zm.i)(this, OA), (0, zm.i)(this, YA, !0))), tm.set(this, ((0, zm.i)(this, qA), (0, zm.i)(this, jA, !1))), Um.set(this, ((0, zm.i)(this, VA), (0, zm.i)(this, IA, !0))), dm.set(this, ((0, zm.i)(this, KA), (0, zm.i)(this, QA, !1))), gm.set(this, ((0, zm.i)(this, nA), (0, zm.i)(this, JA, !1))), Wm.set(this, ((0, zm.i)(this, cA), (0, zm.i)(this, zA, !1))), Fm.set(this, ((0, zm.i)(this, ZA), (0, zm.i)(this, kA, !1))), mT.set(this, ((0, zm.i)(this, bA), (0, zm.i)(this, SA, !1))), TT.set(this, ((0, zm.i)(this, eA), (0, zm.i)(this, NA, !0))), fT.set(this, ((0, zm.i)(this, GA), (0, zm.i)(this, XA, !1))), hT.set(this, ((0, zm.i)(this, PA), (0, zm.i)(this, HA, !1))), AT.set(this, ((0, zm.i)(this, yA), (0, zm.i)(this, CA, !1))), aT.set(this, ((0, zm.i)(this, rA), (0, zm.i)(this, sA, .05))), xT.set(this, ((0, zm.i)(this, lA), (0, zm.i)(this, MA, !1))), wT.set(this, ((0, zm.i)(this, uA), (0, zm.i)(this, BA, !1))), DT.set(this, ((0, zm.i)(this, LA), (0, zm.i)(this, vA, 4))), iT.set(this, ((0, zm.i)(this, tA), (0, zm.i)(this, UA, !1))), RT.set(this, ((0, zm.i)(this, dA), (0, zm.i)(this, gA, !1))), pT.set(this, ((0, zm.i)(this, WA), (0, zm.i)(this, FA, !1))), ET.set(this, ((0, zm.i)(this, ma), (0, zm.i)(this, Ta, !1))), oT.set(this, ((0, zm.i)(this, fa), (0, zm.i)(this, ha, !1))), OT.set(this, ((0, zm.i)(this, Aa), (0, zm.i)(this, aa, null))), YT.set(this, ((0, zm.i)(this, xa), (0, zm.i)(this, wa, !1))), qT.set(this, ((0, zm.i)(this, Da), (0, zm.i)(this, ia, !1))), jT.set(this, ((0, zm.i)(this, Ra), (0, zm.i)(this, pa, !0))), VT.set(this, ((0, zm.i)(this, Ea), (0, zm.i)(this, oa, !0))), IT.set(this, ((0, zm.i)(this, Oa), (0, zm.i)(this, Ya, !1))), KT.set(this, ((0, zm.i)(this, qa), (0, zm.i)(this, ja, !1))), (0, zm.i)(this, Va), this._environmentBRDFTexture = Xm(this.wG())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(Tm) {
          let fm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Am = cT.d.Clone((() => new mm(Tm, this.wG())), this, {
            cloneTexturesOnlyOnce: fm
          });
          return Am.id = Tm, Am.name = Tm, this.stencil.copyTo(Am.stencil), this._clonePlugins(Am, hm), Am
        }
        serialize() {
          const mm = super.serialize();
          return mm.customType = "BABYLON.PBRMaterial", mm
        }
        static Parse(Tm, fm, hm) {
          const Am = cT.d.Parse((() => new mm(Tm.name, fm)), Tm, fm, hm);
          return Tm.stencil && Am.stencil.parse(Tm.stencil, fm, hm), am.d._ParsePlugins(Tm, Am, fm, hm), Tm.clearCoat && Am.clearCoat.parse(Tm.clearCoat, fm, hm), Tm.anisotropy && Am.anisotropy.parse(Tm.anisotropy, fm, hm), Tm.brdf && Am.brdf.parse(Tm.brdf, fm, hm), Tm.sheen && Am.sheen.parse(Tm.sheen, fm, hm), Tm.subSurface && Am.subSurface.parse(Tm.subSurface, fm, hm), Tm.iridescence && Am.iridescence.parse(Tm.iridescence, fm, hm), Am
        }
      }, Tm = new WeakMap, fm = new WeakMap, hm = new WeakMap, Am = new WeakMap, xm = new WeakMap, wm = new WeakMap, Dm = new WeakMap, im = new WeakMap, Rm = new WeakMap, pm = new WeakMap, Em = new WeakMap, om = new WeakMap, Om = new WeakMap, Ym = new WeakMap, qm = new WeakMap, jm = new WeakMap, Vm = new WeakMap, Im = new WeakMap, Km = new WeakMap, Qm = new WeakMap, nm = new WeakMap, Jm = new WeakMap, cm = new WeakMap, km = new WeakMap, bm = new WeakMap, Sm = new WeakMap, em = new WeakMap, Nm = new WeakMap, Gm = new WeakMap, Pm = new WeakMap, Hm = new WeakMap, ym = new WeakMap, Cm = new WeakMap, rm = new WeakMap, sm = new WeakMap, lm = new WeakMap, Mm = new WeakMap, um = new WeakMap, Bm = new WeakMap, tm = new WeakMap, Um = new WeakMap, dm = new WeakMap, gm = new WeakMap, Wm = new WeakMap, Fm = new WeakMap, mT = new WeakMap, TT = new WeakMap, fT = new WeakMap, hT = new WeakMap, AT = new WeakMap, aT = new WeakMap, xT = new WeakMap, wT = new WeakMap, DT = new WeakMap, iT = new WeakMap, RT = new WeakMap, pT = new WeakMap, ET = new WeakMap, oT = new WeakMap, OT = new WeakMap, YT = new WeakMap, qT = new WeakMap, jT = new WeakMap, VT = new WeakMap, IT = new WeakMap, KT = new WeakMap, (() => {
        const Tm = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mf[Symbol.metadata] ?? null) : void 0;
        QT = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], nT = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], zT = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], ZT = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], kT = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], bT = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], ST = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], eT = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], NT = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], GT = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], XT = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], PT = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], HT = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], yT = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], CT = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], rT = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], sT = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], lT = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], MT = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], uT = [(0, Zm.k)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], BT = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], LT = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], vT = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], tT = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], UT = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], dT = [(0, Zm.A)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty", null)], gT = [(0, Zm.k)("ambient"), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], WT = [(0, Zm.k)("albedo"), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], FT = [(0, Zm.J)("baseWeight"), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], mf = [(0, Zm.J)("baseDiffuseRoughness"), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Tf = [(0, Zm.k)("reflectivity"), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], ff = [(0, Zm.k)("reflection"), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], hf = [(0, Zm.k)("emissive"), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Af = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], af = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], xf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], wf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], Df = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], Rf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], pf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Ef = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], of = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Of = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Yf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], qf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], jf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Vf = [(0, Zm.J)()], If = [(0, Zm.J)()], Kf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Qf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], nf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Jf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], zf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Zf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsLightsDirty")], kf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], bf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsLightsDirty")], Sf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], ef = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Nf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Gf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Xf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Pf = [(0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Hf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], yf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], Cf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], rf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsTexturesDirty")], sf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsMiscDirty")], lf = [(0, Zm.J)(), (0, Zm.c)("_markAllSubMeshesAsMiscDirty")], (0, zm.g)(mm, null, QT, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: mm => "directIntensity" in mm,
            get: mm => mm.directIntensity,
            set: (mm, Tm) => {
              mm.directIntensity = Tm
            }
          },
          metadata: Tm
        }, Bf, Lf), (0, zm.g)(mm, null, nT, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: mm => "emissiveIntensity" in mm,
            get: mm => mm.emissiveIntensity,
            set: (mm, Tm) => {
              mm.emissiveIntensity = Tm
            }
          },
          metadata: Tm
        }, vf, tf), (0, zm.g)(mm, null, zT, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: mm => "environmentIntensity" in mm,
            get: mm => mm.environmentIntensity,
            set: (mm, Tm) => {
              mm.environmentIntensity = Tm
            }
          },
          metadata: Tm
        }, Uf, df), (0, zm.g)(mm, null, ZT, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: mm => "specularIntensity" in mm,
            get: mm => mm.specularIntensity,
            set: (mm, Tm) => {
              mm.specularIntensity = Tm
            }
          },
          metadata: Tm
        }, gf, Wf), (0, zm.g)(mm, null, kT, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: mm => "disableBumpMap" in mm,
            get: mm => mm.disableBumpMap,
            set: (mm, Tm) => {
              mm.disableBumpMap = Tm
            }
          },
          metadata: Tm
        }, Ff, mh), (0, zm.g)(mm, null, bT, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "albedoTexture" in mm,
            get: mm => mm.albedoTexture,
            set: (mm, Tm) => {
              mm.albedoTexture = Tm
            }
          },
          metadata: Tm
        }, Th, fh), (0, zm.g)(mm, null, ST, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "baseWeightTexture" in mm,
            get: mm => mm.baseWeightTexture,
            set: (mm, Tm) => {
              mm.baseWeightTexture = Tm
            }
          },
          metadata: Tm
        }, hh, Ah), (0, zm.g)(mm, null, eT, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "baseDiffuseRoughnessTexture" in mm,
            get: mm => mm.baseDiffuseRoughnessTexture,
            set: (mm, Tm) => {
              mm.baseDiffuseRoughnessTexture = Tm
            }
          },
          metadata: Tm
        }, ah, xh), (0, zm.g)(mm, null, NT, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "ambientTexture" in mm,
            get: mm => mm.ambientTexture,
            set: (mm, Tm) => {
              mm.ambientTexture = Tm
            }
          },
          metadata: Tm
        }, wh, Dh), (0, zm.g)(mm, null, GT, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: mm => "ambientTextureStrength" in mm,
            get: mm => mm.ambientTextureStrength,
            set: (mm, Tm) => {
              mm.ambientTextureStrength = Tm
            }
          },
          metadata: Tm
        }, ih, Rh), (0, zm.g)(mm, null, XT, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: mm => "ambientTextureImpactOnAnalyticalLights" in mm,
            get: mm => mm.ambientTextureImpactOnAnalyticalLights,
            set: (mm, Tm) => {
              mm.ambientTextureImpactOnAnalyticalLights = Tm
            }
          },
          metadata: Tm
        }, ph, Eh), (0, zm.g)(mm, null, PT, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "opacityTexture" in mm,
            get: mm => mm.opacityTexture,
            set: (mm, Tm) => {
              mm.opacityTexture = Tm
            }
          },
          metadata: Tm
        }, oh, Oh), (0, zm.g)(mm, null, HT, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "reflectionTexture" in mm,
            get: mm => mm.reflectionTexture,
            set: (mm, Tm) => {
              mm.reflectionTexture = Tm
            }
          },
          metadata: Tm
        }, Yh, qh), (0, zm.g)(mm, null, yT, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "emissiveTexture" in mm,
            get: mm => mm.emissiveTexture,
            set: (mm, Tm) => {
              mm.emissiveTexture = Tm
            }
          },
          metadata: Tm
        }, jh, Vh), (0, zm.g)(mm, null, CT, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "reflectivityTexture" in mm,
            get: mm => mm.reflectivityTexture,
            set: (mm, Tm) => {
              mm.reflectivityTexture = Tm
            }
          },
          metadata: Tm
        }, Ih, Kh), (0, zm.g)(mm, null, rT, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "metallicTexture" in mm,
            get: mm => mm.metallicTexture,
            set: (mm, Tm) => {
              mm.metallicTexture = Tm
            }
          },
          metadata: Tm
        }, Qh, nh), (0, zm.g)(mm, null, sT, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: mm => "metallic" in mm,
            get: mm => mm.metallic,
            set: (mm, Tm) => {
              mm.metallic = Tm
            }
          },
          metadata: Tm
        }, Jh, ch), (0, zm.g)(mm, null, lT, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: mm => "roughness" in mm,
            get: mm => mm.roughness,
            set: (mm, Tm) => {
              mm.roughness = Tm
            }
          },
          metadata: Tm
        }, zh, Zh), (0, zm.g)(mm, null, MT, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: mm => "metallicF0Factor" in mm,
            get: mm => mm.metallicF0Factor,
            set: (mm, Tm) => {
              mm.metallicF0Factor = Tm
            }
          },
          metadata: Tm
        }, kh, bh), (0, zm.g)(mm, null, uT, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: mm => "metallicReflectanceColor" in mm,
            get: mm => mm.metallicReflectanceColor,
            set: (mm, Tm) => {
              mm.metallicReflectanceColor = Tm
            }
          },
          metadata: Tm
        }, Sh, eh), (0, zm.g)(mm, null, BT, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "useOnlyMetallicFromMetallicReflectanceTexture" in mm,
            get: mm => mm.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (mm, Tm) => {
              mm.useOnlyMetallicFromMetallicReflectanceTexture = Tm
            }
          },
          metadata: Tm
        }, Nh, Gh), (0, zm.g)(mm, null, LT, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "metallicReflectanceTexture" in mm,
            get: mm => mm.metallicReflectanceTexture,
            set: (mm, Tm) => {
              mm.metallicReflectanceTexture = Tm
            }
          },
          metadata: Tm
        }, Xh, Ph), (0, zm.g)(mm, null, vT, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "reflectanceTexture" in mm,
            get: mm => mm.reflectanceTexture,
            set: (mm, Tm) => {
              mm.reflectanceTexture = Tm
            }
          },
          metadata: Tm
        }, Hh, yh), (0, zm.g)(mm, null, tT, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "microSurfaceTexture" in mm,
            get: mm => mm.microSurfaceTexture,
            set: (mm, Tm) => {
              mm.microSurfaceTexture = Tm
            }
          },
          metadata: Tm
        }, Ch, rh), (0, zm.g)(mm, null, UT, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "bumpTexture" in mm,
            get: mm => mm.bumpTexture,
            set: (mm, Tm) => {
              mm.bumpTexture = Tm
            }
          },
          metadata: Tm
        }, sh, lh), (0, zm.g)(mm, null, dT, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "lightmapTexture" in mm,
            get: mm => mm.lightmapTexture,
            set: (mm, Tm) => {
              mm.lightmapTexture = Tm
            }
          },
          metadata: Tm
        }, Mh, uh), (0, zm.g)(mm, null, gT, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: mm => "ambientColor" in mm,
            get: mm => mm.ambientColor,
            set: (mm, Tm) => {
              mm.ambientColor = Tm
            }
          },
          metadata: Tm
        }, Bh, Lh), (0, zm.g)(mm, null, WT, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: mm => "albedoColor" in mm,
            get: mm => mm.albedoColor,
            set: (mm, Tm) => {
              mm.albedoColor = Tm
            }
          },
          metadata: Tm
        }, vh, th), (0, zm.g)(mm, null, FT, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: mm => "baseWeight" in mm,
            get: mm => mm.baseWeight,
            set: (mm, Tm) => {
              mm.baseWeight = Tm
            }
          },
          metadata: Tm
        }, Uh, dh), (0, zm.g)(mm, null, mf, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: mm => "baseDiffuseRoughness" in mm,
            get: mm => mm.baseDiffuseRoughness,
            set: (mm, Tm) => {
              mm.baseDiffuseRoughness = Tm
            }
          },
          metadata: Tm
        }, gh, Wh), (0, zm.g)(mm, null, Tf, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: mm => "reflectivityColor" in mm,
            get: mm => mm.reflectivityColor,
            set: (mm, Tm) => {
              mm.reflectivityColor = Tm
            }
          },
          metadata: Tm
        }, Fh, mA), (0, zm.g)(mm, null, ff, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: mm => "reflectionColor" in mm,
            get: mm => mm.reflectionColor,
            set: (mm, Tm) => {
              mm.reflectionColor = Tm
            }
          },
          metadata: Tm
        }, TA, fA), (0, zm.g)(mm, null, hf, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: mm => "emissiveColor" in mm,
            get: mm => mm.emissiveColor,
            set: (mm, Tm) => {
              mm.emissiveColor = Tm
            }
          },
          metadata: Tm
        }, hA, AA), (0, zm.g)(mm, null, Af, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: mm => "microSurface" in mm,
            get: mm => mm.microSurface,
            set: (mm, Tm) => {
              mm.microSurface = Tm
            }
          },
          metadata: Tm
        }, aA, xA), (0, zm.g)(mm, null, af, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: mm => "useLightmapAsShadowmap" in mm,
            get: mm => mm.useLightmapAsShadowmap,
            set: (mm, Tm) => {
              mm.useLightmapAsShadowmap = Tm
            }
          },
          metadata: Tm
        }, wA, DA), (0, zm.g)(mm, null, xf, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "useAlphaFromAlbedoTexture" in mm,
            get: mm => mm.useAlphaFromAlbedoTexture,
            set: (mm, Tm) => {
              mm.useAlphaFromAlbedoTexture = Tm
            }
          },
          metadata: Tm
        }, iA, RA), (0, zm.g)(mm, null, wf, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: mm => "forceAlphaTest" in mm,
            get: mm => mm.forceAlphaTest,
            set: (mm, Tm) => {
              mm.forceAlphaTest = Tm
            }
          },
          metadata: Tm
        }, pA, EA), (0, zm.g)(mm, null, Df, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: mm => "alphaCutOff" in mm,
            get: mm => mm.alphaCutOff,
            set: (mm, Tm) => {
              mm.alphaCutOff = Tm
            }
          },
          metadata: Tm
        }, oA, OA), (0, zm.g)(mm, null, Rf, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: mm => "useSpecularOverAlpha" in mm,
            get: mm => mm.useSpecularOverAlpha,
            set: (mm, Tm) => {
              mm.useSpecularOverAlpha = Tm
            }
          },
          metadata: Tm
        }, YA, qA), (0, zm.g)(mm, null, pf, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: mm => "useMicroSurfaceFromReflectivityMapAlpha" in mm,
            get: mm => mm.useMicroSurfaceFromReflectivityMapAlpha,
            set: (mm, Tm) => {
              mm.useMicroSurfaceFromReflectivityMapAlpha = Tm
            }
          },
          metadata: Tm
        }, jA, VA), (0, zm.g)(mm, null, Ef, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: mm => "useRoughnessFromMetallicTextureAlpha" in mm,
            get: mm => mm.useRoughnessFromMetallicTextureAlpha,
            set: (mm, Tm) => {
              mm.useRoughnessFromMetallicTextureAlpha = Tm
            }
          },
          metadata: Tm
        }, IA, KA), (0, zm.g)(mm, null, of, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: mm => "useRoughnessFromMetallicTextureGreen" in mm,
            get: mm => mm.useRoughnessFromMetallicTextureGreen,
            set: (mm, Tm) => {
              mm.useRoughnessFromMetallicTextureGreen = Tm
            }
          },
          metadata: Tm
        }, QA, nA), (0, zm.g)(mm, null, Of, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: mm => "useMetallnessFromMetallicTextureBlue" in mm,
            get: mm => mm.useMetallnessFromMetallicTextureBlue,
            set: (mm, Tm) => {
              mm.useMetallnessFromMetallicTextureBlue = Tm
            }
          },
          metadata: Tm
        }, JA, cA), (0, zm.g)(mm, null, Yf, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: mm => "useAmbientOcclusionFromMetallicTextureRed" in mm,
            get: mm => mm.useAmbientOcclusionFromMetallicTextureRed,
            set: (mm, Tm) => {
              mm.useAmbientOcclusionFromMetallicTextureRed = Tm
            }
          },
          metadata: Tm
        }, zA, ZA), (0, zm.g)(mm, null, qf, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: mm => "useAmbientInGrayScale" in mm,
            get: mm => mm.useAmbientInGrayScale,
            set: (mm, Tm) => {
              mm.useAmbientInGrayScale = Tm
            }
          },
          metadata: Tm
        }, kA, bA), (0, zm.g)(mm, null, jf, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: mm => "useAutoMicroSurfaceFromReflectivityMap" in mm,
            get: mm => mm.useAutoMicroSurfaceFromReflectivityMap,
            set: (mm, Tm) => {
              mm.useAutoMicroSurfaceFromReflectivityMap = Tm
            }
          },
          metadata: Tm
        }, SA, eA), (0, zm.g)(mm, null, Vf, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: mm => "usePhysicalLightFalloff" in mm,
            get: mm => mm.usePhysicalLightFalloff
          },
          metadata: Tm
        }, null, uf), (0, zm.g)(mm, null, If, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: mm => "useGLTFLightFalloff" in mm,
            get: mm => mm.useGLTFLightFalloff
          },
          metadata: Tm
        }, null, uf), (0, zm.g)(mm, null, Kf, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: mm => "useRadianceOverAlpha" in mm,
            get: mm => mm.useRadianceOverAlpha,
            set: (mm, Tm) => {
              mm.useRadianceOverAlpha = Tm
            }
          },
          metadata: Tm
        }, NA, GA), (0, zm.g)(mm, null, Qf, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: mm => "useObjectSpaceNormalMap" in mm,
            get: mm => mm.useObjectSpaceNormalMap,
            set: (mm, Tm) => {
              mm.useObjectSpaceNormalMap = Tm
            }
          },
          metadata: Tm
        }, XA, PA), (0, zm.g)(mm, null, nf, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: mm => "useParallax" in mm,
            get: mm => mm.useParallax,
            set: (mm, Tm) => {
              mm.useParallax = Tm
            }
          },
          metadata: Tm
        }, HA, yA), (0, zm.g)(mm, null, Jf, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: mm => "useParallaxOcclusion" in mm,
            get: mm => mm.useParallaxOcclusion,
            set: (mm, Tm) => {
              mm.useParallaxOcclusion = Tm
            }
          },
          metadata: Tm
        }, CA, rA), (0, zm.g)(mm, null, zf, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: mm => "parallaxScaleBias" in mm,
            get: mm => mm.parallaxScaleBias,
            set: (mm, Tm) => {
              mm.parallaxScaleBias = Tm
            }
          },
          metadata: Tm
        }, sA, lA), (0, zm.g)(mm, null, Zf, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: mm => "disableLighting" in mm,
            get: mm => mm.disableLighting,
            set: (mm, Tm) => {
              mm.disableLighting = Tm
            }
          },
          metadata: Tm
        }, MA, uA), (0, zm.g)(mm, null, kf, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: mm => "forceIrradianceInFragment" in mm,
            get: mm => mm.forceIrradianceInFragment,
            set: (mm, Tm) => {
              mm.forceIrradianceInFragment = Tm
            }
          },
          metadata: Tm
        }, BA, LA), (0, zm.g)(mm, null, bf, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: mm => "maxSimultaneousLights" in mm,
            get: mm => mm.maxSimultaneousLights,
            set: (mm, Tm) => {
              mm.maxSimultaneousLights = Tm
            }
          },
          metadata: Tm
        }, vA, tA), (0, zm.g)(mm, null, Sf, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: mm => "invertNormalMapX" in mm,
            get: mm => mm.invertNormalMapX,
            set: (mm, Tm) => {
              mm.invertNormalMapX = Tm
            }
          },
          metadata: Tm
        }, UA, dA), (0, zm.g)(mm, null, ef, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: mm => "invertNormalMapY" in mm,
            get: mm => mm.invertNormalMapY,
            set: (mm, Tm) => {
              mm.invertNormalMapY = Tm
            }
          },
          metadata: Tm
        }, gA, WA), (0, zm.g)(mm, null, Nf, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: mm => "twoSidedLighting" in mm,
            get: mm => mm.twoSidedLighting,
            set: (mm, Tm) => {
              mm.twoSidedLighting = Tm
            }
          },
          metadata: Tm
        }, FA, ma), (0, zm.g)(mm, null, Gf, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: mm => "useAlphaFresnel" in mm,
            get: mm => mm.useAlphaFresnel,
            set: (mm, Tm) => {
              mm.useAlphaFresnel = Tm
            }
          },
          metadata: Tm
        }, Ta, fa), (0, zm.g)(mm, null, Xf, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: mm => "useLinearAlphaFresnel" in mm,
            get: mm => mm.useLinearAlphaFresnel,
            set: (mm, Tm) => {
              mm.useLinearAlphaFresnel = Tm
            }
          },
          metadata: Tm
        }, ha, Aa), (0, zm.g)(mm, null, Pf, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: mm => "environmentBRDFTexture" in mm,
            get: mm => mm.environmentBRDFTexture,
            set: (mm, Tm) => {
              mm.environmentBRDFTexture = Tm
            }
          },
          metadata: Tm
        }, aa, xa), (0, zm.g)(mm, null, Hf, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: mm => "forceNormalForward" in mm,
            get: mm => mm.forceNormalForward,
            set: (mm, Tm) => {
              mm.forceNormalForward = Tm
            }
          },
          metadata: Tm
        }, wa, Da), (0, zm.g)(mm, null, yf, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: mm => "enableSpecularAntiAliasing" in mm,
            get: mm => mm.enableSpecularAntiAliasing,
            set: (mm, Tm) => {
              mm.enableSpecularAntiAliasing = Tm
            }
          },
          metadata: Tm
        }, ia, Ra), (0, zm.g)(mm, null, Cf, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: mm => "useHorizonOcclusion" in mm,
            get: mm => mm.useHorizonOcclusion,
            set: (mm, Tm) => {
              mm.useHorizonOcclusion = Tm
            }
          },
          metadata: Tm
        }, pa, Ea), (0, zm.g)(mm, null, rf, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: mm => "useRadianceOcclusion" in mm,
            get: mm => mm.useRadianceOcclusion,
            set: (mm, Tm) => {
              mm.useRadianceOcclusion = Tm
            }
          },
          metadata: Tm
        }, oa, Oa), (0, zm.g)(mm, null, sf, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: mm => "unlit" in mm,
            get: mm => mm.unlit,
            set: (mm, Tm) => {
              mm.unlit = Tm
            }
          },
          metadata: Tm
        }, Ya, qa), (0, zm.g)(mm, null, lf, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: mm => "applyDecalMapAfterDetailMap" in mm,
            get: mm => mm.applyDecalMapAfterDetailMap,
            set: (mm, Tm) => {
              mm.applyDecalMapAfterDetailMap = Tm
            }
          },
          metadata: Tm
        }, ja, Va), Tm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tm
        })
      })(), mm.PBRMATERIAL_OPAQUE = JT.PBRMATERIAL_OPAQUE, mm.PBRMATERIAL_ALPHATEST = JT.PBRMATERIAL_ALPHATEST, mm.PBRMATERIAL_ALPHABLEND = JT.PBRMATERIAL_ALPHABLEND, mm.PBRMATERIAL_ALPHATESTANDBLEND = JT.PBRMATERIAL_ALPHATESTANDBLEND, mm.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = JT.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, mm
    })();
    const rA = "KHR_materials_diffuse_transmission";

    function sA(mm, Tm) {
      const fm = Tm.subSurface;
      let hm = null;
      return fm.translucencyIntensityTexture ? hm = fm.translucencyIntensityTexture : fm.thicknessTexture && fm.useMaskFromThicknessTexture && (hm = fm.thicknessTexture), hm && !fm.useGltfStyleTextures ? (km.b.Warn(`${mm}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${Tm.name}`, 1), null) : hm
    }
    class lA {
      constructor(mm) {
        this.name = rA, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = mm
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(mm, Tm, fm) {
        const hm = [];
        if (fm instanceof CA && this._isExtensionEnabled(fm)) {
          const Tm = sA(mm, fm);
          return Tm && hm.push(Tm), fm.subSurface.translucencyColorTexture && hm.push(fm.subSurface.translucencyColorTexture), hm
        }
        return hm
      }
      _isExtensionEnabled(mm) {
        if (mm.unlit) return !1;
        const Tm = mm.subSurface;
        return !!Tm.isTranslucencyEnabled && (!mm.unlit && !Tm.useAlbedoToTintTranslucency && Tm.useGltfStyleTextures && 1 === Tm.volumeIndexOfRefraction && 0 === Tm.minimumThickness && 0 === Tm.maximumThickness)
      }
      postExportMaterialAsync(mm, Tm, fm) {
        return new Promise((hm => {
          if (fm instanceof CA && this._isExtensionEnabled(fm)) {
            this._wasUsed = !0;
            const hm = fm.subSurface,
              Am = sA(mm, fm),
              am = 0 == hm.translucencyIntensity ? void 0 : hm.translucencyIntensity,
              xm = this._exporter._materialExporter.getTextureInfo(Am) ?? void 0,
              wm = !hm.translucencyColor || hm.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : hm.translucencyColor.ahm(),
              Dm = this._exporter._materialExporter.getTextureInfo(hm.translucencyColorTexture) ?? void 0,
              im = {
                diffuseTransmissionFactor: am,
                diffuseTransmissionTexture: xm,
                diffuseTransmissionColorFactor: wm,
                diffuseTransmissionColorTexture: Dm
              };
            (xm || Dm) && this._exporter._materialNeedsUVsSet.add(fm), Tm.extensions = Tm.extensions || {}, Tm.extensions[rA] = im
          }
          hm(Tm)
        }))
      }
    }
    let MA = !1;

    function uA() {
      MA || (MA = !0, yh.RegisterExtension(rA, (mm => new lA(mm))))
    }
    uA();
    const BA = "KHR_materials_dispersion";
    class LA {
      constructor() {
        this.name = BA, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(mm) {
        if (mm.unlit) return !1;
        const Tm = mm.subSurface;
        return !(!Tm.isRefractionEnabled && !Tm.isDispersionEnabled)
      }
      postExportMaterialAsync(mm, Tm, fm) {
        return new Promise((mm => {
          if (fm instanceof CA && this._isExtensionEnabled(fm)) {
            this._wasUsed = !0;
            const mm = {
              dispersion: fm.subSurface.dispersion
            };
            Tm.extensions = Tm.extensions || {}, Tm.extensions[BA] = mm
          }
          mm(Tm)
        }))
      }
    }
    let vA = !1;

    function tA() {
      vA || (vA = !0, yh.RegisterExtension(BA, (() => new LA)))
    }
    tA();
    const UA = "KHR_materials_emissive_strength";
    class dA {
      constructor() {
        this.name = UA, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(mm, Tm, fm) {
        return await new Promise((mm => {
          if (!(fm instanceof CA)) return mm(Tm);
          const hm = fm.emissiveColor.scale(fm.emissiveIntensity),
            Am = Math.max(...hm.ahm());
          if (Am > 1) {
            Tm.emissiveFactor = hm.scale(1 / Am).ahm(), this._wasUsed = !0;
            const mm = {
              emissiveStrength: Am
            };
            Tm.extensions || (Tm.extensions = {}), Tm.extensions[UA] = mm
          } else Tm.emissiveFactor = hm.ahm();
          return mm(Tm)
        }))
      }
    }
    let gA = !1;

    function WA() {
      gA || (gA = !0, yh.RegisterExtension(UA, (() => new dA)))
    }
    WA();
    const FA = "KHR_materials_ior";
    class ma {
      constructor() {
        this.name = FA, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(mm) {
        return !mm.unlit && (mm instanceof FT ? 1.5 != mm.specularIor : mm instanceof CA && (void 0 != mm.indexOfRefraction && 1.5 != mm.indexOfRefraction))
      }
      postExportMaterialAsync(mm, Tm, fm) {
        return new Promise((mm => {
          if (fm instanceof CA && this._isExtensionEnabled(fm)) {
            this._wasUsed = !0;
            const mm = {
              ior: fm.indexOfRefraction
            };
            Tm.extensions = Tm.extensions || {}, Tm.extensions[FA] = mm
          } else if (fm instanceof FT && this._isExtensionEnabled(fm)) {
            this._wasUsed = !0;
            const mm = {
              ior: fm.specularIor
            };
            Tm.extensions = Tm.extensions || {}, Tm.extensions[FA] = mm
          }
          mm(Tm)
        }))
      }
    }
    let Ta = !1;

    function fa() {
      Ta || (Ta = !0, yh.RegisterExtension(FA, (() => new ma)))
    }
    fa();
    const ha = "KHR_materials_iridescence";
    class Aa {
      constructor(mm) {
        this.name = ha, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = mm
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(mm, Tm, fm) {
        const hm = [];
        if (fm instanceof JT) {
          if (fm.iridescence.isEnabled) return fm.iridescence.texture && hm.push(fm.iridescence.texture), fm.iridescence.thicknessTexture && fm.iridescence.thicknessTexture !== fm.iridescence.texture && hm.push(fm.iridescence.thicknessTexture), hm
        } else if (fm instanceof FT && fm.thinFilmWeight > 0) return fm.thinFilmWeightTexture && hm.push(fm.thinFilmWeightTexture), fm.thinFilmThicknessTexture && fm.thinFilmThicknessTexture !== fm.thinFilmWeightTexture && hm.push(fm.thinFilmThicknessTexture), hm;
        return []
      }
      postExportMaterialAsync(mm, Tm, fm) {
        return new Promise((mm => {
          if (fm instanceof JT) {
            if (!fm.iridescence.isEnabled) return void mm(Tm);
            this._wasUsed = !0, Tm.extensions = Tm.extensions || {};
            const hm = this._exporter._materialExporter.getTextureInfo(fm.iridescence.texture),
              Am = this._exporter._materialExporter.getTextureInfo(fm.iridescence.thicknessTexture),
              am = {
                iridescenceFactor: fm.iridescence.intensity,
                iridescenceIor: fm.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: fm.iridescence.minimumThickness,
                iridescenceThicknessMaximum: fm.iridescence.maximumThickness,
                iridescenceTexture: hm ?? void 0,
                iridescenceThicknessTexture: Am ?? void 0
              };
            null === am.iridescenceTexture && null === am.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(fm), Tm.extensions[ha] = am
          } else if (fm instanceof FT) {
            if (fm.thinFilmWeight <= 0) return void mm(Tm);
            this._wasUsed = !0, Tm.extensions = Tm.extensions || {};
            const hm = this._exporter._materialExporter.getTextureInfo(fm.thinFilmWeightTexture),
              Am = this._exporter._materialExporter.getTextureInfo(fm.thinFilmThicknessTexture),
              am = {
                iridescenceFactor: fm.thinFilmWeight,
                iridescenceIor: fm.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * fm.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * fm.thinFilmThickness,
                iridescenceTexture: hm ?? void 0,
                iridescenceThicknessTexture: Am ?? void 0
              };
            null === am.iridescenceTexture && null === am.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(fm), Tm.extensions[ha] = am
          }
          mm(Tm)
        }))
      }
    }
    let aa = !1;

    function xa() {
      aa || (aa = !0, yh.RegisterExtension(ha, (mm => new Aa(mm))))
    }
    xa();
    const wa = "KHR_materials_sheen";
    class Da {
      constructor(mm) {
        this.name = wa, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = mm
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(mm, Tm, fm) {
        return fm instanceof CA && fm.sheen.isEnabled && fm.sheen.texture ? [fm.sheen.texture] : []
      }
      async postExportMaterialAsync(mm, Tm, fm) {
        return await new Promise((mm => {
          if (fm instanceof CA) {
            if (!fm.sheen.isEnabled) return void mm(Tm);
            this._wasUsed = !0, null == Tm.extensions && (Tm.extensions = {});
            const hm = {
              sheenColorFactor: fm.sheen.color.ahm(),
              sheenRoughnessFactor: fm.sheen.roughness ?? 0
            };
            null === hm.sheenColorTexture && null === hm.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(fm), fm.sheen.texture && (hm.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(fm.sheen.texture) ?? void 0), fm.sheen.textureRoughness && !fm.sheen.useRoughnessFromMainTexture ? hm.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(fm.sheen.textureRoughness) ?? void 0 : fm.sheen.texture && fm.sheen.useRoughnessFromMainTexture && (hm.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(fm.sheen.texture) ?? void 0), Tm.extensions[wa] = hm
          }
          mm(Tm)
        }))
      }
    }
    let ia = !1;

    function Ra() {
      ia || (ia = !0, yh.RegisterExtension(wa, (mm => new Da(mm))))
    }
    Ra();
    const pa = "KHR_materials_fuzz";

    function Ea(mm, Tm) {
      const fm = new Sm.f(Tm.name, Tm.wG());
      return fm._texture = mm, fm.coordinatesIndex = Tm.coordinatesIndex, Tm instanceof Sm.f && (fm.uOffset = Tm.uOffset, fm.vOffset = Tm.vOffset, fm.uScale = Tm.uScale, fm.vScale = Tm.vScale, fm.wAng = Tm.wAng), fm.wrapU = Tm.wrapU, fm.wrapV = Tm.wrapV, fm
    }
    class oa {
      constructor(mm) {
        this.name = pa, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = mm
      }
      dispose() {
        for (const mm of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[mm].dispose()
        }
        this._mergedTexturesMap = {};
        for (const mm of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[mm].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(mm, Tm, fm) {
        if (fm instanceof FT) {
          const mm = [];
          if (fm.fuzzWeight > 0) {
            fm.fuzzWeightTexture && mm.push(fm.fuzzWeightTexture);
            let Tm = !1;
            if (fm.fuzzRoughnessTexture && (fm._useFuzzRoughnessFromTextureAlpha ? mm.push(fm.fuzzRoughnessTexture) : Tm = !0), fm.fuzzColorTexture && !Tm && mm.push(fm.fuzzColorTexture), Tm) {
              const Tm = function(mm) {
                const Tm = mm.fuzzColorTexture,
                  fm = Tm && Tm.getInternalTexture() ? Tm.getInternalTexture().uniqueId : "NoFuzzColor",
                  hm = mm.fuzzRoughnessTexture;
                return `FuzzColor_${fm}_FuzzRoughness_${hm&&hm.getInternalTexture()?hm.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(fm);
              if (!this._cachedInternalTexturesMap[Tm]) {
                const mm = await async function(mm) {
                  const Tm = mm.wG(),
                    fm = mm.fuzzColorTexture,
                    hm = mm.fuzzRoughnessTexture;
                  return fm || hm ? (await wf("FuzzTexture", pf(fm ? Df(fm, 0) : Rf(1), fm ? Df(fm, 1) : Rf(1), fm ? Df(fm, 2) : Rf(1), hm ? Df(hm, mm._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : Rf(1)), Tm)).getInternalTexture() : null
                }(fm);
                mm && (this._cachedInternalTexturesMap[Tm] = mm)
              }
              this._cachedInternalTexturesMap[Tm] && (fm.fuzzColorTexture && (this._mergedTexturesMap[fm.fuzzColorTexture.uniqueId] = Ea(this._cachedInternalTexturesMap[Tm], fm.fuzzColorTexture), mm.push(this._mergedTexturesMap[fm.fuzzColorTexture.uniqueId])), fm.fuzzRoughnessTexture && (this._mergedTexturesMap[fm.fuzzRoughnessTexture.uniqueId] = Ea(this._cachedInternalTexturesMap[Tm], fm.fuzzRoughnessTexture), mm.push(this._mergedTexturesMap[fm.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return mm
        }
        return []
      }
      async postExportMaterialAsync(mm, Tm, fm) {
        return await new Promise((mm => {
          if (fm instanceof FT) {
            if (0 == fm.fuzzWeight) return void mm(Tm);
            this._wasUsed = !0, null == Tm.extensions && (Tm.extensions = {});
            const hm = {
              fuzzFactor: fm.fuzzWeight,
              fuzzColorFactor: fm.fuzzColor.ahm(),
              fuzzRoughnessFactor: fm.fuzzRoughness
            };
            let Am, am;
            fm.fuzzWeightTexture && (hm.fuzzTexture = this._exporter._materialExporter.getTextureInfo(fm.fuzzWeightTexture) ?? void 0), fm.fuzzColorTexture && (Am = this._mergedTexturesMap[fm.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[fm.fuzzColorTexture.uniqueId] : fm.fuzzColorTexture, hm.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(Am) ?? void 0), fm.fuzzRoughnessTexture && (am = this._mergedTexturesMap[fm.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[fm.fuzzRoughnessTexture.uniqueId] : fm.fuzzRoughnessTexture, hm.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(am) ?? void 0), null === hm.fuzzColorTexture && null === hm.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(fm), Tm.extensions[pa] = hm
          }
          mm(Tm)
        }))
      }
    }
    let Oa = !1;

    function Ya() {
      Oa || (Oa = !0, yh.RegisterExtension(pa, (mm => new oa(mm))))
    }
    Ya();
    const qa = "KHR_materials_specular";
    class ja {
      constructor(mm) {
        this.name = qa, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = mm
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(mm, Tm, fm) {
        const hm = [];
        return fm instanceof CA && this._isExtensionEnabled(fm) ? (fm.metallicReflectanceTexture && hm.push(fm.metallicReflectanceTexture), fm.reflectanceTexture && hm.push(fm.reflectanceTexture), hm) : hm
      }
      _isExtensionEnabled(mm) {
        return !mm.unlit && (void 0 != mm.metallicF0Factor && 1 != mm.metallicF0Factor || void 0 != mm.metallicReflectanceColor && !mm.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(mm))
      }
      _hasTexturesExtension(mm) {
        return null != mm.metallicReflectanceTexture || null != mm.reflectanceTexture
      }
      postExportMaterialAsync(mm, Tm, fm) {
        return new Promise((mm => {
          var hm;
          if (fm instanceof CA && this._isExtensionEnabled(fm)) {
            this._wasUsed = !0, Tm.extensions = Tm.extensions || {};
            const mm = this._exporter._materialExporter.getTextureInfo(fm.metallicReflectanceTexture) ?? void 0,
              hm = this._exporter._materialExporter.getTextureInfo(fm.reflectanceTexture) ?? void 0,
              Am = {
                specularFactor: 1 == fm.metallicF0Factor ? void 0 : fm.metallicF0Factor,
                specularTexture: mm,
                specularColorFactor: fm.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : fm.metallicReflectanceColor.ahm(),
                specularColorTexture: hm
              };
            this._hasTexturesExtension(fm) && this._exporter._materialNeedsUVsSet.add(fm), Tm.extensions[qa] = Am
          } else if (fm instanceof FT) {
            Tm.extensions = Tm.extensions || {};
            const Am = this._exporter._materialExporter.getTextureInfo(fm.specularWeightTexture) ?? void 0,
              am = this._exporter._materialExporter.getTextureInfo(fm.specularColorTexture) ?? void 0,
              xm = 1 == fm.specularWeight ? void 0 : fm.specularWeight,
              wm = fm.specularColor.equalsFloats(1, 1, 1) ? void 0 : fm.specularColor.ahm();
            if (!am && !Am && void 0 === xm && void 0 === wm) return mm(Tm);
            this._wasUsed = !0;
            const Dm = {
                specularEdgeColorEnabled: !0
              },
              im = {
                specularFactor: xm,
                specularTexture: Am,
                specularColorFactor: wm,
                specularColorTexture: am,
                extensions: {}
              };
            im.extensions.EXT_materials_specular_edge_color = Dm, (hm = this._exporter._glTF).extensionsUsed || (hm.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (Am || am) && this._exporter._materialNeedsUVsSet.add(fm), Tm.extensions[qa] = im
          }
          mm(Tm)
        }))
      }
    }
    let Va = !1;

    function Ia() {
      Va || (Va = !0, yh.RegisterExtension(qa, (mm => new ja(mm))))
    }
    Ia();
    const Ka = "KHR_materials_transmission";
    class Qa {
      constructor(mm) {
        this.name = Ka, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = mm
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(mm, Tm, fm) {
        const hm = [];
        if (fm instanceof CA) {
          if (this._isExtensionEnabled(fm)) return fm.subSurface.refractionIntensityTexture && fm.subSurface.useGltfStyleTextures && hm.push(fm.subSurface.refractionIntensityTexture), hm
        } else fm instanceof FT && (fm.transmissionWeight > 0 && fm.transmissionWeightTexture && (hm.push(fm.transmissionWeightTexture), fm.transmissionColorTexture && hm.push(fm.transmissionColorTexture)), fm.subsurfaceWeight > 0 && fm.subsurfaceWeightTexture && hm.push(fm.subsurfaceWeightTexture));
        return hm
      }
      _isExtensionEnabled(mm) {
        if (mm instanceof FT && !mm.unlit) return mm.transmissionWeight > 0 || mm.subsurfaceWeight > 0;
        if (mm instanceof CA && !mm.unlit) {
          const Tm = mm.subSurface;
          return Tm.isRefractionEnabled && void 0 != Tm.refractionIntensity && 0 != Tm.refractionIntensity || null != Tm.refractionIntensityTexture && Tm.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(mm, Tm, fm) {
        if (!this._isExtensionEnabled(fm)) return Tm;
        if (fm instanceof CA) {
          this._wasUsed = !0;
          const hm = fm.subSurface,
            Am = {
              transmissionFactor: 0 === hm.refractionIntensity ? void 0 : hm.refractionIntensity
            };
          if (hm.refractionIntensityTexture)
            if (hm.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(fm);
              const mm = this._exporter._materialExporter.getTextureInfo(hm.refractionIntensityTexture);
              mm && (Am.transmissionTexture = mm)
            } else km.b.Warn(`${mm}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          Tm.extensions || (Tm.extensions = {}), Tm.extensions[Ka] = Am
        } else if (fm instanceof FT) {
          this._wasUsed = !0;
          const mm = {
            transmissionFactor: (1 - fm.transmissionWeight) * fm.subsurfaceWeight + fm.transmissionWeight
          };
          if (fm.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(fm);
            const Tm = this._exporter._materialExporter.getTextureInfo(fm.transmissionWeightTexture);
            Tm && (mm.transmissionTexture = Tm)
          } else if (fm.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(fm);
            const Tm = this._exporter._materialExporter.getTextureInfo(fm.subsurfaceWeightTexture);
            Tm && (mm.transmissionTexture = Tm)
          }
          if (0 == fm.transmissionDepth && (!fm.transmissionColor.equals(Lm.b.White()) || fm.transmissionColorTexture) && Tm.pbrMetallicRoughness && (Tm.pbrMetallicRoughness.baseColorFactor || (Tm.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), Tm.pbrMetallicRoughness.baseColorFactor[0] *= fm.transmissionColor.r, Tm.pbrMetallicRoughness.baseColorFactor[1] *= fm.transmissionColor.g, Tm.pbrMetallicRoughness.baseColorFactor[2] *= fm.transmissionColor.b, fm.transmissionColorTexture && !Tm.pbrMetallicRoughness.baseColorTexture)) {
            const mm = this._exporter._materialExporter.getTextureInfo(fm.transmissionColorTexture);
            mm && (Tm.pbrMetallicRoughness.baseColorTexture = mm, this._exporter._materialNeedsUVsSet.add(fm))
          }
          Tm.extensions || (Tm.extensions = {}), Tm.extensions[Ka] = mm
        }
        return Tm
      }
    }
    let na = !1;

    function Ja() {
      na || (na = !0, yh.RegisterExtension(Ka, (mm => new Qa(mm))))
    }
    Ja();
    var ca = fm(40364);
    const za = "KHR_materials_unlit";
    class Za {
      constructor() {
        this.name = za, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(mm, Tm, fm) {
        return new Promise((mm => {
          let hm = !1;
          fm instanceof CA ? hm = fm.unlit : fm instanceof ca.h && (hm = fm.disableLighting), hm && (this._wasUsed = !0, null == Tm.extensions && (Tm.extensions = {}), Tm.extensions[za] = {}), mm(Tm)
        }))
      }
    }
    let ka = !1;

    function ba() {
      ka || (ka = !0, yh.RegisterExtension(za, (() => new Za)))
    }
    ba();
    const Sa = "KHR_materials_volume";
    class ea {
      constructor(mm) {
        this.name = Sa, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = mm
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(mm, Tm, fm) {
        const hm = [];
        if (fm instanceof CA) {
          if (this._isExtensionEnabled(fm)) return fm.subSurface.thicknessTexture && hm.push(fm.subSurface.thicknessTexture), hm
        } else fm instanceof FT && (fm.transmissionWeight > 0 || fm.subsurfaceWeight > 0) && fm.geometryThicknessTexture && hm.push(fm.geometryThicknessTexture);
        return hm
      }
      _isExtensionEnabled(mm) {
        if (mm.unlit) return !1;
        const Tm = mm.subSurface;
        return !(!Tm.isRefractionEnabled && !Tm.isTranslucencyEnabled) && (void 0 != Tm.maximumThickness && 0 != Tm.maximumThickness || void 0 != Tm.tintColorAtDistance && Tm.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != Tm.tintColor && Tm.tintColor != Lm.b.White() || this._hasTexturesExtension(mm))
      }
      _hasTexturesExtension(mm) {
        return null != mm.subSurface.thicknessTexture
      }
      postExportMaterialAsync(mm, Tm, fm) {
        return new Promise((mm => {
          if (fm instanceof CA && this._isExtensionEnabled(fm)) {
            this._wasUsed = !0;
            const mm = fm.subSurface,
              hm = {
                thicknessFactor: 0 == mm.maximumThickness ? void 0 : mm.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(mm.thicknessTexture) ?? void 0,
                attenuationDistance: mm.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : mm.tintColorAtDistance,
                attenuationColor: mm.tintColor.equalsFloats(1, 1, 1) ? void 0 : mm.tintColor.ahm()
              };
            this._hasTexturesExtension(fm) && this._exporter._materialNeedsUVsSet.add(fm), Tm.extensions = Tm.extensions || {}, Tm.extensions[Sa] = hm
          } else if (fm instanceof FT) {
            const mm = fm.transmissionWeight > 0 && !fm.geometryThinWalled,
              hm = fm.subsurfaceWeight > 0 && !fm.geometryThinWalled;
            if (mm || hm) {
              this._wasUsed = !0;
              const Am = fm.geometryThickness,
                am = this._exporter._materialExporter.getTextureInfo(fm.geometryThicknessTexture) ?? void 0;
              let xm;
              am && this._exporter._materialNeedsUVsSet.add(fm);
              const wm = Lm.b.White().ahm();
              if (mm && fm.transmissionDepth > 0) {
                const mm = 1 / fm.transmissionDepth;
                let Tm = new Cm.p(-Math.log(fm.transmissionColor.r) * mm, -Math.log(fm.transmissionColor.g) * mm, -Math.log(fm.transmissionColor.b) * mm);
                const hm = new Cm.p(fm.transmissionScatter.r * mm, fm.transmissionScatter.g * mm, fm.transmissionScatter.b * mm),
                  Am = Tm.subtract(hm),
                  am = Math.min(Am.x, Am.y, Am.z);
                am < 0 && (Am.x = Am.x - am, Am.y = Am.y - am, Am.z = Am.z - am), Tm = Am.add(hm);
                xm = 1 / Math.max(Tm.x, Tm.y, Tm.z), wm[0] = Math.exp(-Tm.x * xm), wm[1] = Math.exp(-Tm.y * xm), wm[2] = Math.exp(-Tm.z * xm)
              } else xm = Number.MAX_VALUE, wm[0] = 1, wm[1] = 1, wm[2] = 1;
              let Dm = 1;
              const im = Lm.b.White().ahm();
              if (hm) {
                const mm = fm.subsurfaceRadius,
                  Tm = fm.subsurfaceRadiusScale,
                  hm = new Cm.p(Tm.r, Tm.g, Tm.b).multiplyByFloats(mm, mm, mm),
                  Am = new Cm.p(1 / Math.max(hm.x, 1e-6), 1 / Math.max(hm.y, 1e-6), 1 / Math.max(hm.z, 1e-6));
                Dm = 1 / Math.max(Am.x, Am.y, Am.z), im[0] = Math.exp(-Am.x * Dm), im[1] = Math.exp(-Am.y * Dm), im[2] = Math.exp(-Am.z * Dm)
              }
              const Rm = (1 - fm.transmissionWeight) * fm.subsurfaceWeight,
                pm = Rm + fm.transmissionWeight,
                Em = 1 / Math.max(pm, 1e-6),
                om = fm.transmissionWeight * Em,
                Om = Rm * Em,
                Ym = wm.map(((mm, Tm) => mm * om + im[Tm] * Om)),
                qm = {
                  thicknessFactor: Am,
                  thicknessTexture: am,
                  attenuationDistance: xm * om + Dm * Om,
                  attenuationColor: Ym
                };
              Tm.extensions = Tm.extensions || {}, Tm.extensions[Sa] = qm
            }
          }
          mm(Tm)
        }))
      }
    }
    let Na = !1;

    function Ga() {
      Na || (Na = !0, yh.RegisterExtension(Sa, (mm => new ea(mm))))
    }
    Ga();
    const Xa = "KHR_materials_volume_scatter";
    class Pa {
      constructor(mm) {
        this.name = Xa, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = mm
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(mm, Tm, fm) {
        const hm = [];
        return fm instanceof FT && (fm.transmissionWeight > 0 && fm.transmissionScatterTexture && hm.push(fm.transmissionScatterTexture), fm.subsurfaceWeight > 0 && fm.subsurfaceColorTexture && hm.push(fm.subsurfaceColorTexture)), hm
      }
      _isExtensionEnabled(mm) {
        if (mm.unlit) return !1;
        const Tm = mm.transmissionWeight > 0 && !mm.geometryThinWalled && mm.transmissionDepth > 0 && !mm.transmissionScatter.equals(Lm.b.Black()),
          fm = mm.subsurfaceWeight > 0 && !mm.geometryThinWalled;
        return !(!Tm && !fm)
      }
      postExportMaterialAsync(mm, Tm, fm) {
        return new Promise((mm => {
          if (fm instanceof FT && this._isExtensionEnabled(fm)) {
            this._wasUsed = !0;
            let mm = Cm.p.Zero(),
              hm = 0;
            if (fm.transmissionWeight > 0) {
              mm = function(mm) {
                const Tm = new Cm.p(Math.sqrt(1 - mm.x), Math.sqrt(1 - mm.y), Math.sqrt(1 - mm.z)),
                  fm = new Cm.p(1, 1, 1),
                  hm = fm.subtract(Tm),
                  Am = fm.subtract(new Cm.p(.139, .139, .139).multiplyInPlace(Tm)),
                  am = fm.add(new Cm.p(1.17, 1.17, 1.17).multiplyInPlace(Tm));
                return hm.multiplyInPlace(Am).divideInPlace(am)
              }(new Cm.p(fm.transmissionScatter.r, fm.transmissionScatter.g, fm.transmissionScatter.b)), hm = fm.transmissionScatterAnisotropy
            }
            const Am = Cm.p.Zero();
            let am = 0;
            fm.subsurfaceWeight > 0 && (Am.set(fm.subsurfaceColor.r, fm.subsurfaceColor.g, fm.subsurfaceColor.b), am = fm.subsurfaceScatterAnisotropy);
            const xm = (1 - fm.transmissionWeight) * fm.subsurfaceWeight,
              wm = xm + fm.transmissionWeight,
              Dm = 1 / Math.max(wm, 1e-6),
              im = fm.transmissionWeight * Dm,
              Rm = xm * Dm,
              pm = {
                multiscatterColorFactor: mm.multiplyByFloats(im, im, im).addInPlace(Am.multiplyByFloats(Rm, Rm, Rm)).ahm(),
                scatterAnisotropy: hm * im + am * Rm
              };
            if (fm.subsurfaceWeight > 0 && fm.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(fm);
              const mm = this._exporter._materialExporter.getTextureInfo(fm.subsurfaceColorTexture);
              mm && (pm.multiscatterColorTexture = mm)
            } else if (fm.transmissionWeight > 0 && fm.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(fm);
              const mm = this._exporter._materialExporter.getTextureInfo(fm.transmissionScatterTexture);
              mm && (pm.multiscatterColorTexture = mm)
            }
            Tm.extensions = Tm.extensions || {}, Tm.extensions[Xa] = pm
          }
          mm(Tm)
        }))
      }
    }
    let Ha = !1;

    function ya() {
      Ha || (Ha = !0, yh.RegisterExtension(Xa, (mm => new Pa(mm)), 101))
    }
    ya();
    const Ca = "KHR_materials_diffuse_roughness";
    class ra {
      constructor(mm) {
        this.name = Ca, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = mm
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(mm, Tm, fm) {
        const hm = [];
        if (fm instanceof JT) {
          if (fm._baseDiffuseRoughness) return fm._baseDiffuseRoughnessTexture && hm.push(fm._baseDiffuseRoughnessTexture), hm
        } else if (fm instanceof FT && fm.baseDiffuseRoughness) return fm.baseDiffuseRoughnessTexture && hm.push(fm.baseDiffuseRoughnessTexture), hm;
        return []
      }
      postExportMaterialAsync(mm, Tm, fm) {
        return new Promise((mm => {
          let hm = null,
            Am = null;
          if (fm instanceof JT ? (hm = fm._baseDiffuseRoughness, Am = fm._baseDiffuseRoughnessTexture) : fm instanceof FT && (hm = fm.baseDiffuseRoughness, Am = fm.baseDiffuseRoughnessTexture), !hm) return void mm(Tm);
          this._wasUsed = !0, Tm.extensions = Tm.extensions || {};
          const am = {
            diffuseRoughnessFactor: hm,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(Am) ?? void 0
          };
          null !== am.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(fm), Tm.extensions[Ca] = am, mm(Tm)
        }))
      }
    }
    let sa = !1;

    function la() {
      sa || (sa = !0, yh.RegisterExtension(Ca, (mm => new ra(mm))))
    }
    la();
    const Ma = "KHR_materials_openpbr";
    class ua {
      constructor() {
        this.name = Ma, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(mm, Tm, fm) {
        return new Promise((mm => {
          fm instanceof FT && (this._wasUsed = !0, Tm.extensions = Tm.extensions || {}, Tm.extensions[Ma] = {}), mm(Tm)
        }))
      }
    }
    let Ba = !1;

    function La() {
      Ba || (Ba = !0, yh.RegisterExtension(Ma, (() => new ua)))
    }
    La();
    const va = "KHR_texture_transform";
    class ta {
      constructor() {
        this.name = va, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(mm, Tm, fm) {
        if (fm.wG() || zT.h.Warn(`${mm}: "scene" is not defined for Babylon texture ${fm.name}!`), (0 !== fm.uAng || 0 !== fm.vAng) && (zT.h.Warn(`${mm}: Texture ${fm.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== fm.uRotationCenter || 0 !== fm.vRotationCenter)) return;
        const hm = {};
        let Am = !1;
        if (0 === fm.uOffset && 0 === fm.vOffset || (hm.offset = [fm.uOffset, fm.vOffset], Am = !0), 1 === fm.uScale && 1 === fm.vScale || (hm.scale = [fm.uScale, fm.vScale], Am = !0), 0 !== fm.wAng) {
          if (0 !== fm.uRotationCenter || 0 !== fm.vRotationCenter) {
            if (fm.homogeneousRotationInUVTransform && fm.uScale !== fm.vScale) return void zT.h.Warn(`${mm}: Texture ${fm.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${va}.`);
            zT.h.Warn(`${mm}: Texture ${fm.name} with non-origin rotation center will be exported using an adjusted offset with ${va}.`), hm.offset = function(mm) {
              const {
                uOffset: Tm,
                vOffset: fm,
                uRotationCenter: hm,
                vRotationCenter: Am,
                uScale: am,
                vScale: xm,
                wAng: wm
              } = mm, Dm = Math.cos(wm), im = Math.sin(wm), Rm = hm * am, pm = Am * xm;
              return [Tm + (Rm * (1 - Dm) + pm * im), fm + (pm * (1 - Dm) - Rm * im)]
            }(fm)
          }
          hm.rotation = -fm.wAng, Am = !0
        }
        0 !== fm.coordinatesIndex && (hm.texCoord = fm.coordinatesIndex, Am = !0), Am && (this._wasUsed = !0, Tm.extensions || (Tm.extensions = {}), Tm.extensions[va] = hm)
      }
    }
    let Ua = !1;

    function da() {
      Ua || (Ua = !0, yh.RegisterExtension(va, (() => new ta)))
    }
    da();
    var ga = fm(40154);
    const Wa = "KHR_texture_basisu";
    class Fa {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(mm) {
        this.name = Wa, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = mm
      }
      dispose() {}
      postExportTexture(mm, Tm) {
        const fm = this._exporter._textures[Tm.index],
          hm = fm.source;
        if (void 0 === hm) return;
        const Am = this._exporter._images[hm];
        "image/ktx2" === (Am.mimeType || (0, ga.k)(Am.uri)) && (fm.source = void 0, fm.extensions || (fm.extensions = {}), fm.extensions[Wa] = {
          source: hm
        }, this._wasUsed = !0)
      }
    }
    let mx = !1;

    function Tx() {
      mx || (mx = !0, yh.RegisterExtension(Wa, (mm => new Fa(mm))))
    }
    Tx();
    const fx = "EXT_texture_webp";
    class hx {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(mm) {
        this.name = fx, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = mm
      }
      dispose() {}
      postExportTexture(mm, Tm) {
        const fm = this._exporter._textures[Tm.index],
          hm = fm.source;
        if (void 0 === hm) return;
        const Am = this._exporter._images[hm];
        "image/webp" === (Am.mimeType || (0, ga.k)(Am.uri)) && (fm.source = void 0, fm.extensions || (fm.extensions = {}), fm.extensions[fx] = {
          source: hm
        }, this._wasUsed = !0)
      }
    }
    let Ax = !1;

    function ax() {
      Ax || (Ax = !0, yh.RegisterExtension(fx, (mm => new hx(mm))))
    }
    ax();
    const xx = "EXT_texture_avif";
    class wx {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(mm) {
        this.name = xx, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = mm
      }
      dispose() {}
      postExportTexture(mm, Tm) {
        const fm = this._exporter._textures[Tm.index],
          hm = fm.source;
        if (void 0 === hm) return;
        const Am = this._exporter._images[hm];
        "image/avif" === (Am.mimeType || (0, ga.k)(Am.uri)) && (fm.source = void 0, fm.extensions || (fm.extensions = {}), fm.extensions[xx] = {
          source: hm
        }, this._wasUsed = !0)
      }
    }
    let Dx = !1;

    function ix() {
      Dx || (Dx = !0, yh.RegisterExtension(xx, (mm => new wx(mm))))
    }
    ix();
    class Rx {
      static CreateSTL(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          Am = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          am = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          xm = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          wm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Dm = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const im = function(mm, Tm, fm) {
            const Am = [3 * mm[fm], 3 * mm[fm + 1], 3 * mm[fm + 2]],
              am = [new hm.WO(Tm[Am[0]], Tm[Am[0] + 2], Tm[Am[0] + 1]), new hm.WO(Tm[Am[1]], Tm[Am[1] + 2], Tm[Am[1] + 1]), new hm.WO(Tm[Am[2]], Tm[Am[2] + 2], Tm[Am[2] + 1])],
              xm = am[0].subtract(am[1]),
              wm = am[2].subtract(am[1]);
            return {
              v: am,
              n: hm.WO.Cross(wm, xm).normalize()
            }
          },
          pm = function(mm, Tm, fm, hm) {
            return Tm = Em(mm, Tm, fm.x, hm), Tm = Em(mm, Tm, fm.y, hm), Em(mm, Tm, fm.z, hm)
          },
          Em = function(mm, Tm, fm, hm) {
            return mm.setFloat32(Tm, fm, hm), Tm + 4
          },
          Om = function(mm) {
            if (wm) {
              let Tm = mm;
              mm instanceof om.d && (Tm = mm.mAm);
              const fm = Tm.getVerticesData(Rm.g.PositionKind, !0, !0);
              if (!fm) return [];
              const Am = hm.WO.Zero();
              let am;
              for (am = 0; am < fm.length; am += 3) hm.WO.TransformCoordinatesFromFloatsToRef(fm[am], fm[am + 1], fm[am + 2], mm.computeWorldMatrix(!0), Am).toArray(fm, am);
              return fm
            }
            return mm.getVerticesData(Rm.g.PositionKind) || []
          };
        wm && (xm = !0);
        let Ym = "",
          qm = 0,
          jm = 0;
        if (Am) {
          for (let fm = 0; fm < mm.length; fm++) {
            const Tm = mm[fm].xhm();
            qm += Tm ? Tm.length / 3 : 0
          }
          const Tm = new ArrayBuffer(84 + 50 * qm);
          Ym = new DataView(Tm), jm += 80, Ym.setUint32(jm, qm, am), jm += 4
        } else Dm || (Ym = "solid stlmesh\r\n");
        for (let hm = 0; hm < mm.length; hm++) {
          const Tm = mm[hm];
          !Am && Dm && (Ym += "solid " + Tm.name + "\r\n"), !xm && Tm instanceof Eh.c && Tm.bakeCurrentTransformIntoVertices();
          const fm = Om(Tm),
            wm = Tm.xhm() || [];
          for (let mm = 0; mm < wm.length; mm += 3) {
            const Tm = im(wm, fm, mm);
            Am ? (jm = pm(Ym, jm, Tm.n, am), jm = pm(Ym, jm, Tm.v[0], am), jm = pm(Ym, jm, Tm.v[1], am), jm = pm(Ym, jm, Tm.v[2], am), jm += 2) : (Ym += "\tfacet normal " + Tm.n.x + " " + Tm.n.y + " " + Tm.n.z + "\r\n", Ym += "\t\touter loop\r\n", Ym += "\t\t\tvertex " + Tm.v[0].x + " " + Tm.v[0].y + " " + Tm.v[0].z + "\r\n", Ym += "\t\t\tvertex " + Tm.v[1].x + " " + Tm.v[1].y + " " + Tm.v[1].z + "\r\n", Ym += "\t\t\tvertex " + Tm.v[2].x + " " + Tm.v[2].y + " " + Tm.v[2].z + "\r\n", Ym += "\t\tendloop\r\n", Ym += "\tendfacet\r\n")
          }!Am && Dm && (Ym += "endsolid " + name + "\r\n")
        }
        if (Am || Dm || (Ym += "endsolid stlmesh"), Tm) {
          const mm = document.createElement("a"),
            Tm = new Blob([Ym], {
              type: "application/octet-stream"
            });
          mm.href = window.URL.createObjectURL(Tm), mm.download = fm + ".stl", mm.click()
        }
        return Ym
      }
    }

    function px(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Am = [];
      for (let am = 0; am < mm.length / fm; am++) {
        const xm = mm[am * fm] * (hm ? -1 : 1),
          wm = mm[am * fm + 1],
          Dm = mm[am * fm + 2];
        Am.push(`(${xm.toPrecision(Tm.precision)}, ${wm.toPrecision(Tm.precision)}, ${Dm.toPrecision(Tm.precision)})`)
      }
      return Am.join(", ")
    }

    function Ex(mm, Tm) {
      const fm = [];
      for (let hm = 0; hm < mm.length / 2; hm++) {
        const Am = mm[2 * hm],
          am = mm[2 * hm + 1];
        fm.push(`(${Am.toPrecision(Tm.precision)}, ${(1-am).toPrecision(Tm.precision)})`)
      }
      return fm.join(", ")
    }

    function ox(mm, Tm, fm, hm) {
      const Am = mm.getVerticesData(Rm.g.PositionKind),
        am = mm.getVerticesData(Rm.g.NormalKind);
      if (Am && am) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${fm}"\n\t\tint[] faceVertexCounts = [${function(mm){const Tm=mm.xhm()?.length?mm.getTotalIndices():mm.getTotalVertices();return Array(Tm/3).fill(3).join(", ")}(mm)}]\n\t\tint[] faceVertexIndices = [${function(mm){const Tm=mm.xhm(),fm=Tm?.length??mm.getTotalVertices(),hm=[];if(null!==Tm)for(let Am=0;Am<fm;Am++)hm.push(Tm[Am]);else for(let Am=0;Am<fm;Am++)hm.push(Am);return hm.join(", ")}(mm)}]\n\t\tnormal3f[] normals = [${px(am,Tm,void 0,hm)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${px(Am,Tm,void 0,hm)}]\n        ${function(mm,Tm){let fm="";for(let Am=0;Am<4;Am++){const hm=Am>0?Am:"",am=mm.getVerticesData(Rm.g.UVKind+(hm?hm+1:""));am&&(fm+=`\n\t\ttexCoord2f[] primvars:st${hm} = [${Ex(am,Tm)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const hm=mm.getVerticesData(Rm.g.ColorKind);return hm&&(fm+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        px(hm, Tm, hm.length / mm.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),fm}(mm,Tm)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function Ox(mm, Tm, fm, hm) {
      return `\n        def "Geometry"\n        {\n        ${ox(mm,Tm,fm,hm)}\n        }\n        `
    }

    function Yx(mm) {
      let Tm = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return Tm += mm, fflate.strToU8(Tm)
    }

    function qx(mm) {
      const Tm = mm.m;
      return `( ${jx(Tm,0)}, ${jx(Tm,4)}, ${jx(Tm,8)}, ${jx(Tm,12)} )`
    }

    function jx(mm, Tm) {
      return `(${mm[Tm+0]}, ${mm[Tm+1]}, ${mm[Tm+2]}, ${mm[Tm+3]})`
    }

    function Vx(mm, Tm) {
      const fm = "Object_" + mm.uniqueId,
        hm = qx(Tm);
      return `def Xform "${fm}" (\n\tprepend references = @./geometries/Geometry_${mm.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${hm}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${mm.material.uniqueId}>\n}\n\n`
    }

    function Ix(mm) {
      switch (mm) {
        case Jm.b.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case Jm.b.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case Jm.b.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function Kx(mm) {
      return `(${mm.x}, ${mm.y})`
    }

    function Qx(mm) {
      return `(${mm.r}, ${mm.g}, ${mm.b})`
    }

    function nx(mm) {
      return "image/jpeg" === mm || "image/png" === mm
    }

    function Jx(mm, Tm, fm, Am, am, xm) {
      const wm = mm.getInternalTexture().uniqueId + "_" + mm.invertY,
        im = mm.mimeType || (0, Dm.e)(mm.getInternalTexture()?.url ?? ""),
        Rm = nx(im) ? im : "image/png",
        pm = "image/jpeg" === Rm ? "jpg" : "png";
      am[wm] = {
        texture: mm,
        mimeType: Rm,
        ext: pm
      };
      const Em = mm.coordinatesIndex > 0 ? "st" + mm.coordinatesIndex : "st",
        om = new hm.Vector2(mm.uScale, mm.vScale),
        Om = new hm.Vector2(mm.uOffset, mm.vOffset),
        Ym = mm.wAng,
        qm = Math.sin(Ym),
        jm = Math.cos(Ym);
      return Om.y = 1 - Om.y - om.y, Om.x += qm * om.x, Om.y += (1 - jm) * om.y, `\n    def Shader "PrimvarReader_${fm}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${Em}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${fm}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${Tm.uniqueId}/PrimvarReader_${fm}.outputs:result>\n        float inputs:rotation = ${(Ym*(180/Math.PI)).toFixed(xm.precision)}\n        float2 inputs:scale = ${Kx(om)}\n        float2 inputs:translation = ${Kx(Om)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${mm.uniqueId}_${fm}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${wm}.${pm}@\n        float2 inputs:st.connect = </Root/Materials/Material_${Tm.uniqueId}/Transform2d_${fm}.outputs:result>\n        ${Am?"float4 inputs:scale = "+function(mm){return`(${mm.r}, ${mm.g}, ${mm.b}, 1.0)`}(Am):""}\n        token inputs:sourceColorSpace = "${mm.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${Ix(mm.wrapU)}"\n        token inputs:wrapT = "${Ix(mm.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${Tm.needAlphaBlending()||Tm.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function cx(mm, Tm, fm) {
      const hm = "\t\t\t",
        Am = [],
        am = [],
        {
          diffuseMap: xm,
          diffuse: wm,
          alphaCutOff: Dm,
          emissiveMap: im,
          emissive: Rm,
          normalMap: pm,
          roughnessMap: Em,
          roughnessChannel: om,
          roughness: Om,
          metalnessMap: Ym,
          metalnessChannel: jm,
          metalness: Vm,
          aoMap: Im,
          aoMapChannel: Km,
          aoMapIntensity: Qm,
          alphaMap: nm,
          ior: Jm,
          clearCoatEnabled: cm,
          clearCoat: zm,
          clearCoatMap: Zm,
          clearCoatRoughness: km,
          clearCoatRoughnessMap: bm
        } = function(mm) {
          const Tm = {
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
          return mm instanceof Dh.StandardMaterial ? {
            ...Tm,
            diffuseMap: mm.diffuseTexture,
            diffuse: mm.diffuseColor,
            alphaCutOff: mm.alphaCutOff,
            emissiveMap: mm.emissiveTexture,
            emissive: mm.emissiveColor,
            roughness: 1,
            alphaMap: mm.opacityTexture
          } : mm instanceof JT ? {
            ...Tm,
            diffuseMap: mm._albedoTexture,
            diffuse: mm._albedoColor,
            alphaCutOff: mm._alphaCutOff,
            emissiveMap: mm._emissiveTexture,
            emissive: mm._emissiveColor,
            normalMap: mm._bumpTexture,
            roughnessMap: mm._metallicTexture,
            roughnessChannel: mm._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: mm._roughness ?? 1,
            metalnessMap: mm._metallicTexture,
            metalnessChannel: mm._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: mm._metallic ?? 0,
            aoMap: mm._ambientTexture,
            aoMapChannel: mm._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: mm._ambientTextureStrength,
            alphaMap: mm._opacityTexture,
            ior: mm.subSurface.indexOfRefraction,
            clearCoatEnabled: mm.clearCoat.isEnabled,
            clearCoat: mm.clearCoat.intensity,
            clearCoatMap: mm.clearCoat.texture,
            clearCoatRoughness: mm.clearCoat.roughness,
            clearCoatRoughnessMap: mm.clearCoat.useRoughnessFromMainTexture ? mm.clearCoat.texture : mm.clearCoat.textureRoughness
          } : Tm
        }(mm);
      return null !== xm ? (Am.push(`${hm}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${mm.uniqueId}/Texture_${xm.uniqueId}_diffuse.outputs:rgb>`), mm.needAlphaBlending() ? Am.push(`${hm}float inputs:opacity.connect = </Root/Materials/Material_${mm.uniqueId}/Texture_${xm.uniqueId}_diffuse.outputs:a>`) : mm.needAlphaTesting() && (Am.push(`${hm}float inputs:opacity.connect = </Root/Materials/Material_${mm.uniqueId}/Texture_${xm.uniqueId}_diffuse.outputs:a>`), Am.push(`${hm}float inputs:opacityThreshold = ${Dm}`)), am.push(Jx(xm, mm, "diffuse", wm, Tm, fm))) : Am.push(`${hm}color3f inputs:diffuseColor = ${Qx(wm||qm.Color3.White())}`), null !== im ? (Am.push(`${hm}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${mm.uniqueId}/Texture_${im.uniqueId}_emissive.outputs:rgb>`), am.push(Jx(im, mm, "emissive", Rm, Tm, fm))) : Rm && Rm.toLuminance() > 0 && Am.push(`${hm}color3f inputs:emissiveColor = ${Qx(Rm)}`), null !== pm && (Am.push(`${hm}normal3f inputs:normal.connect = </Root/Materials/Material_${mm.uniqueId}/Texture_${pm.uniqueId}_normal.outputs:rgb>`), am.push(Jx(pm, mm, "normal", null, Tm, fm))), null !== Im && (Am.push(`${hm}float inputs:occlusion.connect = </Root/Materials/Material_${mm.uniqueId}/Texture_${Im.uniqueId}_occlusion.outputs:${Km}>`), am.push(Jx(Im, mm, "occlusion", new qm.Color3(Qm, Qm, Qm), Tm, fm))), null !== Em ? (Am.push(`${hm}float inputs:roughness.connect = </Root/Materials/Material_${mm.uniqueId}/Texture_${Em.uniqueId}_roughness.outputs:${om}>`), am.push(Jx(Em, mm, "roughness", new qm.Color3(Om, Om, Om), Tm, fm))) : Am.push(`${hm}float inputs:roughness = ${Om}`), null !== Ym ? (Am.push(`${hm}float inputs:metallic.connect = </Root/Materials/Material_${mm.uniqueId}/Texture_${Ym.uniqueId}_metallic.outputs:${jm}>`), am.push(Jx(Ym, mm, "metallic", new qm.Color3(Vm, Vm, Vm), Tm, fm))) : Am.push(`${hm}float inputs:metallic = ${Vm}`), null !== nm ? (Am.push(`${hm}float inputs:opacity.connect = </Root/Materials/Material_${mm.uniqueId}/Texture_${nm.uniqueId}_opacity.outputs:r>`), Am.push(`${hm}float inputs:opacityThreshold = 0.0001`), am.push(Jx(nm, mm, "opacity", null, Tm, fm))) : Am.push(`${hm}float inputs:opacity = ${mm.alpha}`), cm && (null !== Zm ? (Am.push(`${hm}float inputs:clearcoat.connect = </Root/Materials/Material_${mm.uniqueId}/Texture_${Zm.uniqueId}_clearcoat.outputs:r>`), am.push(Jx(Zm, mm, "clearcoat", new qm.Color3(zm, zm, zm), Tm, fm))) : Am.push(`${hm}float inputs:clearcoat = ${zm}`), null !== bm ? (Am.push(`${hm}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${mm.uniqueId}/Texture_${bm.uniqueId}_clearcoatRoughness.outputs:g>`), am.push(Jx(bm, mm, "clearcoatRoughness", new qm.Color3(km, km, km), Tm, fm))) : Am.push(`${hm}float inputs:clearcoatRoughness = ${km}`)), Am.push(`${hm}float inputs:ior = ${Jm}`), `\n\tdef Material "Material_${mm.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${Am.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${mm.uniqueId}/PreviewSurface.outputs:surface>\n\n${am.join("\n")}\n\n\t}\n`
    }

    function zx(mm) {
      mm.computeWorldMatrix(!0);
      const Tm = mm.getWorldMatrix().clone(),
        fm = mm.wG().useRightHandedSystem;
      let hm = mm.material?._getEffectiveOrientation(mm) ?? mm.sideOrientation,
        xm = !fm,
        wm = mm.parent;
      for (; wm;) {
        if (Cf(wm, fm) && null === wm.parent) {
          fm || (Tm.multiplyToRef(wm.getWorldMatrix().invert(), Tm), hm = hm === am.d.ClockWiseSideOrientation ? am.d.CounterClockWiseSideOrientation : am.d.ClockWiseSideOrientation), xm = !1;
          break
        }
        wm = wm.parent
      }
      return Tm.determinant() < 0 && Am.Tools.Warn(`Mesh ${mm.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: Tm,
        windingOrder: hm === am.d.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: xm
      }
    }
    async function Zx(mm, Tm, fm) {
      const am = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...Tm
      };
      "undefined" === typeof fflate && await Am.Tools.LoadScriptAsync(am.fflateUrl);
      const xm = {};
      xm[am.modelFileName] = null;
      let wm = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      wm += function(mm) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===mm.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${mm.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${mm.planeAnchoringAlignment}"`:""}\n            `
      }(am);
      const Dm = {};
      for (const hm of mm.meshes) {
        if (0 === hm.getTotalVertices()) continue;
        const mm = hm,
          Tm = mm.geometry,
          im = mm.material;
        if (!im || !Tm || fm && !fm(mm)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(im.getClassName())) {
          const fm = "geometries/Geometry_" + Tm.uniqueId + ".usda",
            {
              matrix: hm,
              windingOrder: Am,
              convertToRightHanded: Rm
            } = zx(mm);
          if (!(fm in xm)) {
            const mm = Ox(Tm, am, Am, Rm);
            xm[fm] = Yx(mm)
          }
          im.uniqueId in Dm || (Dm[im.uniqueId] = im), wm += Vx(mm, hm)
        } else Am.Tools.Warn("USDZExportAsync does not support this material type: " + im.getClassName())
      }
      mm.activeCamera && am.exportCamera && (wm += function(mm, Tm) {
        const fm = "Camera_" + mm.uniqueId,
          Am = qx(hm.Matrix.RotationY(Math.PI).multiply(mm.getWorldMatrix()));
        if (mm.mode === Jm.b.ORTHOGRAPHIC_CAMERA) return `def Camera "${fm}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Am}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${mm.minZ.toPrecision(Tm.precision)}, ${mm.maxZ.toPrecision(Tm.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(mm.orthoLeft||1)+Math.abs(mm.orthoRight||1))).toPrecision(Tm.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(mm.orthoTop||1)+Math.abs(mm.orthoBottom||1))).toPrecision(Tm.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const hm = mm.dO().getAspectRatio(mm),
            am = Tm.cameraSensorWidth || 35;
          return `def Camera "${fm}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Am}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${mm.minZ.toPrecision(Tm.precision)}, ${mm.maxZ.toPrecision(Tm.precision)})\n\t\t\tfloat focalLength = ${(am/(2*Math.tan(.5*mm.fov))).toPrecision(Tm.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(am*hm).toPrecision(Tm.precision)}\n\t\t\tfloat verticalAperture = ${(am/hm).toPrecision(Tm.precision)}            \n\t\t}\n\t\n\t`
        }
      }(mm.activeCamera, am)), wm += "\n            }\n        }";
      const im = {};
      wm += function(mm, Tm, fm) {
        const hm = [];
        for (const Am in mm) {
          const am = mm[Am];
          hm.push(cx(am, Tm, fm))
        }
        return `\n    def "Materials"\n{\n${hm.join("")}\n}\n\n`
      }(Dm, im, am), wm += "\n    }", xm[am.modelFileName] = fflate.strToU8(wm);
      for (const hm in im) {
        const {
          texture: mm,
          ext: Tm,
          mimeType: fm
        } = im[hm], Am = await If(mm);
        if (Am && nx(Am.mimeType) && Am.mimeType === fm) xm[`textures/Texture_${hm}.${Tm}`] = new Uint8Array(Am.data);
        else {
          const Am = mm.getSize(),
            am = await (0, Km.g)(mm),
            wm = await cm.DumpTools.DumpDataAsync(Am.width, Am.height, am, fm, void 0, !1, !0);
          xm[`textures/Texture_${hm}.${Tm}`] = new Uint8Array(wm).slice()
        }
      }
      let Rm = 0;
      for (const hm in xm) {
        const mm = xm[hm];
        if (!mm) continue;
        Rm += 34 + hm.length;
        const Tm = 63 & Rm;
        if (4 !== Tm) {
          const fm = new Uint8Array(64 - Tm);
          xm[hm] = [mm, {
            extra: {
              12345: fm
            }
          }]
        }
        Rm = mm.length
      }
      return fflate.zipSync(xm, {
        level: 0
      })
    }
    var kx = fm(41164);
    class bx {
      static Export(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          fm = arguments.length > 2 ? arguments[2] : void 0;
        if (!mm || 0 === mm.bones.length) throw new Error("Invalid or empty skeleton provided");
        let hm = Tm;
        Tm && 0 !== Tm.length || (hm = mm.animations.map((mm => mm.name)));
        let Am = null;
        for (const im of hm) {
          const Tm = mm.getAnimationRange(im);
          Tm && (Am = Am ? new kx.d("animation-range", Math.min(Am.from, Tm.from), Math.max(Am.to, Tm.to)) : Tm)
        }
        if (!Am && (mm.animations.length > 0 && (Am = mm.getAnimationRange(mm.animations[0].name)), !Am)) throw new Error("No animation range found in skeleton");
        const am = fm || 1 / (mm.animations[0]?.framePerSecond || 30),
          xm = this._BuildBoneHierarchy(mm, hm);
        let wm = 0;
        for (const im of xm) im.positionKeys.length > 0 && (wm = Math.max(wm, im.positionKeys.length)), im.rotationKeys.length > 0 && (wm = Math.max(wm, im.rotationKeys.length));
        0 === wm && (wm = Math.floor((Am.to - Am.from) / am) + 1);
        let Dm = "";
        return Dm += "HIERARCHY\n", Dm += this._ExportHierarchy(xm, 0), Dm += "MOTION\n", Dm += `Frames: ${wm}\n`, Dm += `Frame Time: ${am.toFixed(6)}\n`, Dm += this._ExportMotionData(xm, wm, 0, hm), Dm
      }
      static _BuildBoneHierarchy(mm, Tm) {
        const fm = new Map,
          hm = [];
        for (const Am of mm.bones) {
          const mm = {
            bone: Am,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          fm.set(Am, mm)
        }
        for (const Am of mm.bones) {
          const mm = fm.get(Am);
          if (Am.animations.length > 0)
            for (const fm of Am.animations) Tm.includes(fm.name) && ("position" === fm.targetProperty ? (mm.hasPositionChannels = !0, mm.positionKeys.push(...fm.getKeys())) : "rotationQuaternion" === fm.targetProperty && (mm.hasRotationChannels = !0, mm.rotationKeys.push(...fm.getKeys())));
          if (Am.getParent()) {
            const Tm = fm.get(Am.getParent());
            Tm && Tm.children.push(mm)
          } else hm.push(mm)
        }
        return hm
      }
      static _ExportHierarchy(mm, Tm) {
        let fm = "";
        const hm = "    ".repeat(Tm);
        for (const Am of mm) {
          const mm = Am.bone;
          if (this._IsEndSite(Am)) {
            fm += `${hm}End Site\n`, fm += `${hm}{\n`;
            const Tm = this._GetBoneOffset(mm);
            fm += `${hm}    OFFSET ${Tm.x.toFixed(6)} ${Tm.y.toFixed(6)} ${Tm.z.toFixed(6)}\n`, fm += `${hm}}\n`
          } else {
            fm += `${0===Tm?"ROOT":`${hm}JOINT`} ${mm.name}\n`, fm += `${hm}{\n`;
            const am = this._GetBoneOffset(mm);
            fm += `${hm}    OFFSET ${am.x.toFixed(6)} ${am.y.toFixed(6)} ${am.z.toFixed(6)}\n`;
            const xm = [];
            Am.hasPositionChannels && xm.push("Xposition", "Yposition", "Zposition"), Am.hasRotationChannels && xm.push("Zrotation", "Xrotation", "Yrotation"), xm.length > 0 && (fm += `${hm}    CHANNELS ${xm.length} ${xm.join(" ")}\n`), Am.children.length > 0 && (fm += this._ExportHierarchy(Am.children, Tm + 1)), fm += `${hm}}\n`
          }
        }
        return fm
      }
      static _IsEndSite(mm) {
        return 0 === mm.children.length
      }
      static _GetBoneOffset(mm) {
        try {
          if (!mm.getParent()) return mm.getRestMatrix().getTranslation();
          return mm.getLocalMatrix().getTranslation()
        } catch (Tm) {
          return hm.WO.Zero()
        }
      }
      static _ExportMotionData(mm, Tm, fm, hm) {
        let Am = "";
        for (let am = 0; am < Tm; am++) {
          const Tm = [];
          this._CollectFrameValues(mm, am + fm, Tm, hm), Am += Tm.map((mm => mm.toFixed(6))).join(" ") + "\n"
        }
        return Am
      }
      static _CollectFrameValues(mm, Tm, fm, hm) {
        for (const Am of mm)
          if (!this._IsEndSite(Am)) {
            if (Am.hasPositionChannels) {
              const mm = this._GetPositionAtFrameIndex(Am.positionKeys, Tm);
              fm.push(mm.x, mm.y, mm.z)
            }
            if (Am.hasRotationChannels) {
              const mm = this._GetRotationAtFrameIndex(Am.rotationKeys, Tm),
                hm = this._QuaternionToEuler(mm);
              fm.push(hm.z, hm.x, hm.y)
            }
            Am.children.length > 0 && this._CollectFrameValues(Am.children, Tm, fm, hm)
          }
      }
      static _GetPositionAtFrameIndex(mm, Tm) {
        if (0 === mm.length) return hm.WO.Zero();
        return mm[Math.max(0, Math.min(Tm, mm.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(mm, Tm) {
        if (0 === mm.length) return hm.Quaternion.Identity();
        return mm[Math.max(0, Math.min(Tm, mm.length - 1))].value.clone()
      }
      static _QuaternionToEuler(mm) {
        const Tm = new hm.Matrix;
        mm.toRotationMatrix(Tm);
        const fm = Tm.m;
        let am, xm, wm;
        const Dm = Math.sqrt(fm[0] * fm[0] + fm[1] * fm[1]);
        return Dm > Hf.c ? (am = Math.atan2(fm[6], fm[10]), xm = Math.atan2(-fm[2], Dm), wm = Math.atan2(fm[1], fm[0])) : (am = Math.atan2(-fm[9], fm[5]), xm = Math.atan2(-fm[2], Dm), wm = 0), new hm.WO(Am.Tools.ToDegrees(am), Am.Tools.ToDegrees(xm), Am.Tools.ToDegrees(wm))
      }
    }

    function Sx(mm) {
      return "string" === typeof mm?.name
    }
    const ex = Symbol("__xml:meta$__"),
      Nx = Symbol("__xml:name$__");

    function Gx(mm, Tm) {
      Object.prototype.hasOwnProperty.call(mm.metadata, ex) || (mm.metadata[ex] = []), mm.metadata[ex].push(Tm)
    }

    function Xx(mm) {
      return (Tm, fm) => {
        Tm[Nx] = mm
      }
    }

    function Px() {
      return (mm, Tm) => Gx(Tm, {
        kind: "none",
        prop: String(Tm.name),
        ignore: !0
      })
    }

    function Hx(mm) {
      return (Tm, fm) => Gx(fm, {
        kind: "attr",
        prop: String(fm.name),
        ...mm
      })
    }

    function yx(mm) {
      return (Tm, fm) => Gx(fm, {
        kind: "elem",
        prop: String(fm.name),
        ...mm
      })
    }

    function Cx(mm) {
      const Tm = "function" === typeof mm ? mm : mm?.constructor,
        fm = Tm?.[Symbol.metadata];
      if (!fm) return [];
      const hm = [];
      let Am = fm;
      for (; Am;) Object.prototype.hasOwnProperty.call(Am, ex) && hm.push(...Am[ex]), Am = Object.getPrototypeOf(Am);
      return hm
    }

    function rx(mm) {
      const Tm = mm?.constructor?.[Nx];
      return Tm || void 0
    }

    function sx(mm) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(mm)
    }

    function lx(mm) {
      if (Sx(mm)) return mm;
      const Tm = (mm ?? "").trim();
      if (!Tm) return {
        name: ""
      };
      const fm = Tm.indexOf(":");
      if (-1 === fm) return {
        name: Tm
      };
      if (-1 !== Tm.indexOf(":", fm + 1)) return {
        name: Tm
      };
      const hm = Tm.slice(0, fm),
        Am = Tm.slice(fm + 1);
      return sx(hm) && sx(Am) ? {
        ns: hm,
        name: Am
      } : {
        name: Tm
      }
    }

    function Mx(mm, Tm) {
      return Tm ? `${Tm}:${mm}` : mm
    }
    const ux = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      Bx = Object.freeze({
        number: ux
      });

    function Lx(mm) {
      const Tm = mm?.eps ?? ux.eps;
      return {
        eps: Tm,
        maxDecimalsCap: mm?.maxDecimalsCap ?? ux.maxDecimalsCap,
        trimTrailingZeros: mm?.trimTrailingZeros ?? ux.trimTrailingZeros,
        fixedDecimals: mm?.fixedDecimals,
        allowScientific: mm?.allowScientific ?? ux.allowScientific,
        snapNearZero: mm?.snapNearZero ?? ux.snapNearZero,
        zeroThreshold: mm?.zeroThreshold ?? Tm,
        perAttributeEps: mm?.perAttributeEps
      }
    }

    function vx(mm) {
      return {
        number: Lx(mm?.number)
      }
    }
    class tx {
      constructor(mm) {
        if (this.o = mm, this._o = mm.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(mm) {
        if (!Number.isFinite(mm)) throw new Error(`Cannot format non-finite number: ${mm}`);
        const Tm = this._o,
          fm = this._clampInt(Tm.maxDecimalsCap ?? 15, 0, 20),
          hm = Tm.trimTrailingZeros ?? !0,
          Am = Tm.snapNearZero ?? !0,
          am = Tm.zeroThreshold ?? Tm.eps,
          xm = 1 / Tm.eps;
        let wm, Dm = Math.round(mm * xm) / xm;
        if (Object.is(Dm, -0) && (Dm = 0), Am && Math.abs(Dm) <= am && (Dm = 0), wm = void 0 !== Tm.fixedDecimals ? this._clampInt(Tm.fixedDecimals, 0, fm) : this._clampInt(Math.ceil(-Math.log10(Tm.eps)), 0, fm), Tm.allowScientific, 0 === wm) return String(Math.trunc(Dm));
        let im = Dm.toFixed(wm);
        if (hm && void 0 === Tm.fixedDecimals && (im = im.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(im)) throw new Error(`Scientific notation not allowed in XML output: ${im}`);
        return im
      }
      _clampInt(mm, Tm, fm) {
        return Number.isFinite(mm) ? (mm = Math.trunc(mm), Math.max(Tm, Math.min(fm, mm))) : Tm
      }
    }

    function Ux(mm) {
      return mm instanceof Date
    }

    function dx(mm) {
      return "string" === typeof mm
    }

    function gx(mm) {
      return "string" === typeof mm || "number" === typeof mm || "boolean" === typeof mm || "bigint" === typeof mm || Ux(mm)
    }

    function Wx(mm) {
      return "number" === typeof mm || "boolean" === typeof mm || "bigint" === typeof mm || Ux(mm)
    }
    class Fx {
      constructor(mm, Tm) {
        this._ns = new Map, this._prefixCount = 0, this._builder = mm, this._format = vx(Tm), this._nFmt = new tx(this._format)
      }
      withNamespace() {
        for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
        for (const hm of Tm) this._assignNamespace(hm);
        return this
      }
      serialize(mm, Tm) {
        if (!(Tm = Tm ?? rx(mm))) throw new Error("can not find name for given object");
        const fm = lx(Tm);
        fm.ns && this._assignNamespace(fm.ns, "xmlns"), this._gatherNamespaces(mm, new WeakSet);
        const hm = this._builder.ele(null, fm.name);
        for (const [Am, am] of Array.from(this._ns.entries())) hm.att("xmlns", am, Am);
        this._writeObjectContent(hm, mm, (new WeakSet).add(mm)), this._builder.end()
      }
      _writeObject(mm, Tm, fm) {
        if (fm.has(Tm)) return;
        if (fm.add(Tm), Array.isArray(Tm)) {
          for (const hm of Tm) Wx(hm) || (dx(hm) ? this._builder.text(hm) : this._writeObject(mm, hm, fm));
          return
        }
        const hm = rx(Tm);
        if (!hm) return;
        const Am = lx(hm),
          am = this._getPrefix(Am),
          xm = Mx(Am.name, am);
        mm.ele(null, xm), this._writeObjectContent(mm, Tm, fm), this._builder.end()
      }
      _getPrefix(mm) {
        if (mm.ns) {
          const Tm = this._ns.get(mm.ns.toLowerCase());
          if ("xmlns" !== Tm) return Tm
        }
      }
      _writeObjectContent(mm, Tm, fm) {
        const hm = Cx(Tm) ?? [],
          Am = new Map;
        for (const xm of hm) {
          const mm = Am.get(xm.prop) ?? [];
          mm.push(xm), Am.set(xm.prop, mm)
        }
        const am = Object.keys(Tm).sort(((mm, Tm) => {
          const fm = (Am.get(mm) ?? []).some((mm => "attr" === mm.kind));
          return fm === (Am.get(Tm) ?? []).some((mm => "attr" === mm.kind)) ? 0 : fm ? -1 : 1
        }));
        for (const xm of am) {
          const hm = Tm[xm];
          if (null === hm || void 0 === hm) continue;
          const am = Am.get(xm);
          if (am) {
            if (am.some((mm => !0 === mm.ignore || "none" === mm.kind))) continue;
            for (const Tm of am) {
              const fm = Tm.name ?? Tm.prop.toLowerCase();
              if (fm) switch (Tm.kind) {
                case "attr": {
                  let Am = null;
                  if ("number" === typeof hm && this._nFmt && (Am = this._nFmt.toString(hm)), Tm.formatter) {
                    Am = new Tm.formatter(this._format).toString(hm)
                  }
                  if (Am = Am ?? hm.toString(), Am) {
                    const Tm = lx(fm),
                      hm = this._getPrefix(Tm),
                      am = Mx(Tm.name, hm);
                    mm.att(null, am, Am)
                  }
                  break
                }
              }
            }
          } else Wx(hm) || (dx(hm) ? this._builder.text(hm) : this._writeObject(mm, hm, fm))
        }
      }
      _gatherNamespaces(mm, Tm) {
        if (Tm.has(mm)) return;
        if (Tm.add(mm), Array.isArray(mm)) {
          for (const fm of mm) gx(fm) || this._gatherNamespaces(fm, Tm);
          return
        }
        const fm = rx(mm);
        fm && this._assignNamespace(fm);
        const hm = Cx(mm) ?? [],
          Am = new Map;
        for (const xm of hm) {
          const mm = Am.get(xm.prop) ?? [];
          mm.push(xm), Am.set(xm.prop, mm)
        }
        const am = [];
        for (const xm of Object.keys(mm)) {
          const Tm = mm[xm];
          if (null === Tm || void 0 === Tm) continue;
          const fm = Am.get(xm);
          if (fm) {
            if (fm.some((mm => !0 === mm.ignore || "none" === mm.kind))) continue;
            for (const mm of fm) mm.name && this._assignNamespace(mm.name)
          }
          am.push(Tm)
        }
        for (const xm of am) gx(xm) || this._gatherNamespaces(xm, Tm)
      }
      _assignNamespace(mm, Tm) {
        const fm = lx(mm);
        if (fm?.ns) {
          const mm = fm.ns.toLowerCase();
          this._ns.get(mm) || this._ns.set(mm, Tm ?? this._buildNsPrefix(mm))
        } else if ("xmlns" === Tm) {
          const mm = fm.name.toLowerCase();
          this._ns.get(mm) || this._ns.set(mm, Tm ?? this._buildNsPrefix(mm))
        }
      }
      _buildNsPrefix(mm) {
        let Tm, fm = !1;
        do {
          Tm = "ns" + this._prefixCount++;
          for (const mm of Array.from(this._ns.values()))
            if (mm === Tm) {
              fm = !0;
              break
            }
        } while (fm);
        return Tm
      }
    }
    class mw {}
    var Tw;
    mw.OpenTag = "<", mw.CloseTag = ">", mw.Slash = "/", mw.Question = "?", mw.Quote = '"', mw.Equal = "=", mw.Space = " ", mw.Semicolon = ":", mw.Dec = "<?xml", mw.Xml = "xml", mw.Xmlns = "xmlns", mw.Xsi = "xsi", mw.VersionKeyword = "version", mw.EncodingKeyword = "encoding", mw.StandaloneKeyword = "standalone",
      function(mm) {
        mm[mm.Declaration = 0] = "Declaration", mm[mm.Tag = 1] = "Tag", mm[mm.Attribute = 2] = "Attribute", mm[mm.Text = 3] = "Text"
      }(Tw || (Tw = {}));
    class fw {
      constructor(mm) {
        this._ctxStack = [], this._d = 0, this._w = mm
      }
      dec(mm, Tm, fm) {
        return this._w.write(mw.Dec), this._writeAttStr(mw.VersionKeyword, mm), Tm && this._writeAttStr(mw.EncodingKeyword, Tm), void 0 !== fm && this._writeAttStr(mw.StandaloneKeyword, fm ? "yes" : "no"), this._w.write(mw.Question, mw.CloseTag), this
      }
      att(mm, Tm, fm) {
        const hm = this._peekContext();
        if (!hm) throw new Error("att() without open element");
        if (hm.closed) throw new Error(`att() after start tag closed for <${hm.name}>`);
        if (this._isXmlnsDecl(mm, Tm)) {
          if (Tm === mw.Xmlns) hm.defaultNs = fm, this._registerNamespace(hm, "", fm), this._writeAttStr(mw.Xmlns, fm);
          else if (mm) this._registerNamespace(hm, Tm, fm), this._writeAttStr(`${mm}:${Tm}`, fm);
          else {
            const mm = Tm.slice(6);
            this._registerNamespace(hm, mm, fm), this._writeAttStr(Tm, fm)
          }
          return hm.lastToken = Tw.Attribute, this
        }
        let Am = Tm;
        if (mm) {
          Am = `${this._ensurePrefixDeclared(hm,mm)}:${Tm}`
        }
        return hm.lastToken = Tw.Attribute, this._writeAttStr(Am, fm), this
      }
      ele(mm, Tm) {
        const fm = this._peekContext();
        fm && this._closeOpenTagIfNeeded(fm);
        let hm = Tm;
        if (mm) {
          hm = `${this._lookupPrefix(mm)??mm}:${Tm}`
        }
        return this._pushContext(hm, ++this._d), this._w.write(mw.OpenTag, hm), this
      }
      text(mm) {
        const Tm = this._peekContext();
        if (!Tm) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(Tm), Tm.lastToken = Tw.Text, this._w.write(this._escText(mm)), this
      }
      end() {
        const mm = this._popContext();
        return mm && (this._d--, mm.closed ? this._w.write(mw.OpenTag, mw.Slash, mm.name, mw.CloseTag) : this._w.write(mw.Slash, mw.CloseTag)), this
      }
      _pushContext(mm, Tm) {
        const fm = new fw.Context(mm, Tm);
        return this._ctxStack.push(fm), fm
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
      _writeAttStr(mm, Tm) {
        this._w.write(mw.Space, mm, mw.Equal, mw.Quote, this._escAttr(Tm), mw.Quote)
      }
      _lookupPrefix(mm) {
        let Tm = this._ctxStack.length - 1;
        if (Tm >= 0)
          do {
            const fm = this._ctxStack[Tm--],
              hm = fm.ns2prefix?.get(mm);
            if (hm) return hm
          } while (Tm >= 0)
      }
      _escText(mm) {
        return mm.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(mm) {
        return this._escText(mm).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(mm, Tm) {
        if (mm) return mm === mw.Xmlns;
        const fm = Tm.length,
          hm = mw.Xmlns.length;
        return fm >= hm && (Tm.startsWith(mw.Xmlns) && (Tm.length == hm || Tm[hm] == mw.Semicolon))
      }
      _registerNamespace(mm, Tm, fm) {
        if (Tm === mw.Xml || Tm === mw.Xmlns) throw new Error(`reserved prefix '${Tm}'`);
        const hm = mm.prefix2ns.get(Tm);
        if (hm && hm !== fm) throw new Error(`prefix '${Tm}' already bound to a different namespace`);
        mm.ns2prefix.get(fm) || mm.ns2prefix.set(fm, Tm), mm.prefix2ns.set(Tm, fm)
      }
      _allocPrefix(mm) {
        let Tm = 1;
        for (;;) {
          const fm = "ns" + Tm++;
          if (!mm.prefix2ns.has(fm)) return fm
        }
      }
      _ensurePrefixDeclared(mm, Tm) {
        const fm = this._lookupPrefix(Tm);
        if (fm) return fm;
        if (mm.closed) throw new Error(`can not declare namespace after start tag closed for <${mm.name}>`);
        const hm = this._allocPrefix(mm);
        return this._writeAttStr(`${mw.Xmlns}:${hm}`, Tm), this._registerNamespace(mm, hm, Tm), hm
      }
      _closeOpenTagIfNeeded(mm) {
        mm.closed || (this._w.write(mw.CloseTag), mm.closed = !0)
      }
    }
    fw.Context = class {
      constructor(mm, Tm) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = mm, this.depth = Tm
      }
    };
    class hw {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
        if (0 === Tm.length) return this;
        const hm = Tm.join("");
        return this._chunks.push(hm), this.count += hm.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class Aw {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = mm, this._opts = Tm, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
        if (0 === Tm.length) return this;
        const hm = Tm.join("");
        if (0 === hm.length) return this;
        this._pending += hm, this._pendingChars += hm.length;
        const Am = this._opts.flushChars ?? 65536;
        return this._pendingChars >= Am && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const mm = this._encoder.encode(this._pending);
        return this._sink.push(mm), this.count += mm.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const aw = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      xw = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var ww, Dw;
    ! function(mm) {
      mm.micron = "micron", mm.millimeter = "millimeter", mm.centimeter = "centimeter", mm.inch = "inch", mm.foot = "foot", mm.meter = "meter"
    }(ww || (ww = {})),
    function(mm) {
      mm.model = "model", mm.solidsupport = "solidsupport", mm.support = "support", mm.surface = "surface", mm.other = "other"
    }(Dw || (Dw = {}));
    const iw = "http://schemas.openxmlformats.org/package/2006/content-types",
      Rw = "http://schemas.openxmlformats.org/package/2006/relationships";
    var pw;
    ! function(mm) {
      mm.Relationships = "application/vnd.openxmlformats-package.relationships+xml", mm.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", mm.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", mm.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", mm.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", mm.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", mm.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", mm.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", mm.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", mm.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", mm.Png = "image/png", mm.Jpeg = "image/jpeg", mm.Tiff = "image/tiff", mm.Xml = "application/xml"
    }(pw || (pw = {}));
    const Ew = "_rels/",
      ow = "3D/",
      Ow = "3dmodel.model",
      Yw = ".rels",
      qw = "[Content_Types].xml";
    class jw {
      static IsKnown(mm) {
        return jw.Known.has(mm)
      }
      static IsThreeDimModel(mm) {
        return mm === jw.ThreeDimModel
      }
    }
    jw.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", jw.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", jw.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", jw.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", jw.Known = new Set([jw.ThreeDimModel, jw.Thumbnail, jw.PrintTicket, jw.MustPreserve]);
    let Vw = (() => {
        let mm, Tm, fm = [Xx({
            ns: iw,
            name: "Types"
          })],
          hm = [];
        Tm = class {
          constructor() {
            this.items = []
          }
        };
        return (0, zm.l)(Tm, "ThreeMfContentTypes"), (() => {
          const Am = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, zm.g)(null, mm = {
            value: Tm
          }, fm, {
            kind: "class",
            name: Tm.name,
            metadata: Am
          }, null, hm), Tm = mm.value, Am && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Am
          }), (0, zm.i)(Tm, hm)
        })(), Tm
      })(),
      Iw = (() => {
        let mm, Tm, fm, hm, Am = [Xx({
            ns: iw,
            name: "Default"
          })],
          am = [],
          xm = [],
          wm = [],
          Dm = [],
          im = [];
        Tm = class {
          constructor(mm, Tm) {
            this.ext = (0, zm.i)(this, xm, void 0), this.ct = ((0, zm.i)(this, wm), (0, zm.i)(this, Dm, void 0)), (0, zm.i)(this, im), this.ext = mm, this.ct = Tm
          }
        };
        return (0, zm.l)(Tm, "ThreeMfContentType"), (() => {
          const Rm = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          fm = [Hx({
            name: {
              ns: iw,
              name: "Extension"
            }
          })], hm = [Hx({
            name: {
              ns: iw,
              name: "ContentType"
            }
          })], (0, zm.g)(null, null, fm, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: mm => "ext" in mm,
              get: mm => mm.ext,
              set: (mm, Tm) => {
                mm.ext = Tm
              }
            },
            metadata: Rm
          }, xm, wm), (0, zm.g)(null, null, hm, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: mm => "ct" in mm,
              get: mm => mm.ct,
              set: (mm, Tm) => {
                mm.ct = Tm
              }
            },
            metadata: Rm
          }, Dm, im), (0, zm.g)(null, mm = {
            value: Tm
          }, Am, {
            kind: "class",
            name: Tm.name,
            metadata: Rm
          }, null, am), Tm = mm.value, Rm && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Rm
          }), (0, zm.i)(Tm, am)
        })(), Tm
      })(),
      Kw = (() => {
        let mm, Tm, fm = [Xx({
            ns: Rw,
            name: "Relationships"
          })],
          hm = [];
        Tm = class {
          constructor() {
            this.items = []
          }
        };
        return (0, zm.l)(Tm, "ThreeMfRelationships"), (() => {
          const Am = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, zm.g)(null, mm = {
            value: Tm
          }, fm, {
            kind: "class",
            name: Tm.name,
            metadata: Am
          }, null, hm), Tm = mm.value, Am && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Am
          }), (0, zm.i)(Tm, hm)
        })(), Tm
      })(),
      Qw = (() => {
        let mm, Tm, fm, hm, Am, am = [Xx({
            ns: Rw,
            name: "Relationship"
          })],
          xm = [],
          wm = [],
          Dm = [],
          im = [],
          Rm = [],
          pm = [],
          Em = [];
        Tm = class {
          constructor(mm, Tm, fm) {
            this.id = (0, zm.i)(this, wm, void 0), this.type = ((0, zm.i)(this, Dm), (0, zm.i)(this, im, void 0)), this.target = ((0, zm.i)(this, Rm), (0, zm.i)(this, pm, void 0)), (0, zm.i)(this, Em), this.id = mm, this.type = Tm, this.target = fm
          }
        };
        return (0, zm.l)(Tm, "ThreeMfRelationship"), (() => {
          const om = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          fm = [Hx({
            name: "Id"
          })], hm = [Hx({
            name: "Type"
          })], Am = [Hx({
            name: "Target"
          })], (0, zm.g)(null, null, fm, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: mm => "id" in mm,
              get: mm => mm.id,
              set: (mm, Tm) => {
                mm.id = Tm
              }
            },
            metadata: om
          }, wm, Dm), (0, zm.g)(null, null, hm, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: mm => "type" in mm,
              get: mm => mm.type,
              set: (mm, Tm) => {
                mm.type = Tm
              }
            },
            metadata: om
          }, im, Rm), (0, zm.g)(null, null, Am, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: mm => "target" in mm,
              get: mm => mm.target,
              set: (mm, Tm) => {
                mm.target = Tm
              }
            },
            metadata: om
          }, pm, Em), (0, zm.g)(null, mm = {
            value: Tm
          }, am, {
            kind: "class",
            name: Tm.name,
            metadata: om
          }, null, xm), Tm = mm.value, om && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: om
          }), (0, zm.i)(Tm, xm)
        })(), Tm
      })();
    class nw {
      constructor(mm, Tm, fm) {
        this.contentTypes = mm, this.relationships = Tm, this.model = fm
      }
    }
    class Jw {
      static Zero() {
        return new Jw([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(mm) {
        this.values = mm
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class zw {
      constructor(mm) {
        this.o = mm, this._f = new tx(mm)
      }
      toString(mm) {
        return mm.values.map((mm => this._f.toString(mm))).join(" ")
      }
    }
    let Zw = (() => {
        let mm, Tm, fm, hm, Am, am = [Xx({
            ns: aw,
            name: "model"
          })],
          xm = [],
          wm = [],
          Dm = [],
          im = [],
          Rm = [],
          pm = [],
          Em = [];
        Tm = class {
          constructor() {
            this.unit = (0, zm.i)(this, wm, ww.millimeter), this.requiredextensions = ((0, zm.i)(this, Dm), (0, zm.i)(this, im, void 0)), this.recommendedextensions = ((0, zm.i)(this, Rm), (0, zm.i)(this, pm, void 0)), this.metadata = (0, zm.i)(this, Em)
          }
        };
        return (0, zm.l)(Tm, "ThreeMfModel"), (() => {
          const om = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          fm = [Hx({
            name: "unit"
          })], hm = [Hx({
            name: "requiredextensions"
          })], Am = [Hx({
            name: "recommendedextensions"
          })], (0, zm.g)(null, null, fm, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: mm => "unit" in mm,
              get: mm => mm.unit,
              set: (mm, Tm) => {
                mm.unit = Tm
              }
            },
            metadata: om
          }, wm, Dm), (0, zm.g)(null, null, hm, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: mm => "requiredextensions" in mm,
              get: mm => mm.requiredextensions,
              set: (mm, Tm) => {
                mm.requiredextensions = Tm
              }
            },
            metadata: om
          }, im, Rm), (0, zm.g)(null, null, Am, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: mm => "recommendedextensions" in mm,
              get: mm => mm.recommendedextensions,
              set: (mm, Tm) => {
                mm.recommendedextensions = Tm
              }
            },
            metadata: om
          }, pm, Em), (0, zm.g)(null, mm = {
            value: Tm
          }, am, {
            kind: "class",
            name: Tm.name,
            metadata: om
          }, null, xm), Tm = mm.value, om && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: om
          })
        })(), Tm.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, zm.i)(Tm, xm), Tm
      })(),
      kw = (() => {
        let mm, Tm, fm, hm, Am, am = [Xx({
            ns: aw,
            name: "meta"
          })],
          xm = [],
          wm = [],
          Dm = [],
          im = [],
          Rm = [],
          pm = [],
          Em = [];
        Tm = class {
          constructor(mm, Tm, fm, hm) {
            this.name = (0, zm.i)(this, wm, void 0), this.preserve = ((0, zm.i)(this, Dm), (0, zm.i)(this, im, void 0)), this.type = ((0, zm.i)(this, Rm), (0, zm.i)(this, pm, void 0)), this.value = (0, zm.i)(this, Em), this.name = mm, this.value = Tm, this.preserve = fm, this.type = hm
          }
        };
        return (0, zm.l)(Tm, "ThreeMfMeta"), (() => {
          const om = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          fm = [Hx({
            name: "name"
          })], hm = [Hx({
            name: "preserve"
          })], Am = [Hx({
            name: "type"
          })], (0, zm.g)(null, null, fm, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: mm => "name" in mm,
              get: mm => mm.name,
              set: (mm, Tm) => {
                mm.name = Tm
              }
            },
            metadata: om
          }, wm, Dm), (0, zm.g)(null, null, hm, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: mm => "preserve" in mm,
              get: mm => mm.preserve,
              set: (mm, Tm) => {
                mm.preserve = Tm
              }
            },
            metadata: om
          }, im, Rm), (0, zm.g)(null, null, Am, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: mm => "type" in mm,
              get: mm => mm.type,
              set: (mm, Tm) => {
                mm.type = Tm
              }
            },
            metadata: om
          }, pm, Em), (0, zm.g)(null, mm = {
            value: Tm
          }, am, {
            kind: "class",
            name: Tm.name,
            metadata: om
          }, null, xm), Tm = mm.value, om && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: om
          }), (0, zm.i)(Tm, xm)
        })(), Tm
      })(),
      bw = (() => {
        let mm, Tm, fm = [Xx({
            ns: aw,
            name: "metadatagroup"
          })],
          hm = [];
        Tm = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, zm.l)(Tm, "ThreeMfMetadataGroup"), (() => {
          const Am = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, zm.g)(null, mm = {
            value: Tm
          }, fm, {
            kind: "class",
            name: Tm.name,
            metadata: Am
          }, null, hm), Tm = mm.value, Am && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Am
          }), (0, zm.i)(Tm, hm)
        })(), Tm
      })(),
      Sw = (() => {
        let mm, Tm, fm = [Xx({
            ns: aw,
            name: "resources"
          })],
          hm = [];
        Tm = class {
          constructor() {
            this.object = []
          }
        };
        return (0, zm.l)(Tm, "ThreeMfResources"), (() => {
          const Am = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, zm.g)(null, mm = {
            value: Tm
          }, fm, {
            kind: "class",
            name: Tm.name,
            metadata: Am
          }, null, hm), Tm = mm.value, Am && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Am
          }), (0, zm.i)(Tm, hm)
        })(), Tm
      })(),
      ew = (() => {
        let mm, Tm, fm, hm, Am, am, xm, wm, Dm, im = [Xx({
            ns: aw,
            name: "object"
          })],
          Rm = [],
          pm = [],
          Em = [],
          om = [],
          Om = [],
          Ym = [],
          qm = [],
          jm = [],
          Vm = [],
          Im = [],
          Km = [],
          Qm = [],
          nm = [],
          Jm = [],
          cm = [];
        Tm = class {
          constructor(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dw.model;
            this.id = (0, zm.i)(this, pm, void 0), this.type = ((0, zm.i)(this, Em), (0, zm.i)(this, om, void 0)), this.thumbnail = ((0, zm.i)(this, Om), (0, zm.i)(this, Ym, void 0)), this.partnumber = ((0, zm.i)(this, qm), (0, zm.i)(this, jm, void 0)), this.name = ((0, zm.i)(this, Vm), (0, zm.i)(this, Im, void 0)), this.pid = ((0, zm.i)(this, Km), (0, zm.i)(this, Qm, void 0)), this.pindex = ((0, zm.i)(this, nm), (0, zm.i)(this, Jm, void 0)), this.metadatagroup = (0, zm.i)(this, cm), this.id = mm, this.type = Tm
          }
        };
        return (0, zm.l)(Tm, "ThreeMfObject"), (() => {
          const Zm = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          fm = [Hx({
            name: "id"
          })], hm = [Hx({
            name: "type"
          })], Am = [Hx({
            name: "thumbnail"
          })], am = [Hx({
            name: "partnumber"
          })], xm = [Hx({
            name: "name"
          })], wm = [Hx({
            name: "pid"
          })], Dm = [Hx({
            name: "pindex"
          })], (0, zm.g)(null, null, fm, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: mm => "id" in mm,
              get: mm => mm.id,
              set: (mm, Tm) => {
                mm.id = Tm
              }
            },
            metadata: Zm
          }, pm, Em), (0, zm.g)(null, null, hm, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: mm => "type" in mm,
              get: mm => mm.type,
              set: (mm, Tm) => {
                mm.type = Tm
              }
            },
            metadata: Zm
          }, om, Om), (0, zm.g)(null, null, Am, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: mm => "thumbnail" in mm,
              get: mm => mm.thumbnail,
              set: (mm, Tm) => {
                mm.thumbnail = Tm
              }
            },
            metadata: Zm
          }, Ym, qm), (0, zm.g)(null, null, am, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: mm => "partnumber" in mm,
              get: mm => mm.partnumber,
              set: (mm, Tm) => {
                mm.partnumber = Tm
              }
            },
            metadata: Zm
          }, jm, Vm), (0, zm.g)(null, null, xm, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: mm => "name" in mm,
              get: mm => mm.name,
              set: (mm, Tm) => {
                mm.name = Tm
              }
            },
            metadata: Zm
          }, Im, Km), (0, zm.g)(null, null, wm, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: mm => "pid" in mm,
              get: mm => mm.pid,
              set: (mm, Tm) => {
                mm.pid = Tm
              }
            },
            metadata: Zm
          }, Qm, nm), (0, zm.g)(null, null, Dm, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: mm => "pindex" in mm,
              get: mm => mm.pindex,
              set: (mm, Tm) => {
                mm.pindex = Tm
              }
            },
            metadata: Zm
          }, Jm, cm), (0, zm.g)(null, mm = {
            value: Tm
          }, im, {
            kind: "class",
            name: Tm.name,
            metadata: Zm
          }, null, Rm), Tm = mm.value, Zm && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zm
          }), (0, zm.i)(Tm, Rm)
        })(), Tm
      })(),
      Nw = (() => {
        let mm, Tm, fm = [Xx({
            ns: aw,
            name: "mesh"
          })],
          hm = [];
        Tm = class {
          constructor(mm, Tm) {
            this.vertices = mm ?? new Gw, this.triangles = Tm ?? new Pw
          }
        };
        return (0, zm.l)(Tm, "ThreeMfMesh"), (() => {
          const Am = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, zm.g)(null, mm = {
            value: Tm
          }, fm, {
            kind: "class",
            name: Tm.name,
            metadata: Am
          }, null, hm), Tm = mm.value, Am && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Am
          }), (0, zm.i)(Tm, hm)
        })(), Tm
      })(),
      Gw = (() => {
        let mm, Tm, fm = [Xx({
            ns: aw,
            name: "vertices"
          })],
          hm = [];
        Tm = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, zm.l)(Tm, "ThreeMfVertices"), (() => {
          const Am = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, zm.g)(null, mm = {
            value: Tm
          }, fm, {
            kind: "class",
            name: Tm.name,
            metadata: Am
          }, null, hm), Tm = mm.value, Am && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Am
          }), (0, zm.i)(Tm, hm)
        })(), Tm
      })(),
      Xw = (() => {
        let mm, Tm, fm, hm, Am, am = [Xx({
            ns: aw,
            name: "vertex"
          })],
          xm = [],
          wm = [],
          Dm = [],
          im = [],
          Rm = [],
          pm = [],
          Em = [];
        Tm = class {
          constructor() {
            let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, zm.i)(this, wm, void 0), this.y = ((0, zm.i)(this, Dm), (0, zm.i)(this, im, void 0)), this.z = ((0, zm.i)(this, Rm), (0, zm.i)(this, pm, void 0)), (0, zm.i)(this, Em), this.x = mm, this.y = Tm, this.z = fm
          }
        };
        return (0, zm.l)(Tm, "ThreeMfVertex"), (() => {
          const om = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          fm = [Hx({
            name: "x"
          })], hm = [Hx({
            name: "y"
          })], Am = [Hx({
            name: "z"
          })], (0, zm.g)(null, null, fm, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: mm => "x" in mm,
              get: mm => mm.x,
              set: (mm, Tm) => {
                mm.x = Tm
              }
            },
            metadata: om
          }, wm, Dm), (0, zm.g)(null, null, hm, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: mm => "y" in mm,
              get: mm => mm.y,
              set: (mm, Tm) => {
                mm.y = Tm
              }
            },
            metadata: om
          }, im, Rm), (0, zm.g)(null, null, Am, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: mm => "z" in mm,
              get: mm => mm.z,
              set: (mm, Tm) => {
                mm.z = Tm
              }
            },
            metadata: om
          }, pm, Em), (0, zm.g)(null, mm = {
            value: Tm
          }, am, {
            kind: "class",
            name: Tm.name,
            metadata: om
          }, null, xm), Tm = mm.value, om && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: om
          }), (0, zm.i)(Tm, xm)
        })(), Tm
      })(),
      Pw = (() => {
        let mm, Tm, fm = [Xx({
            ns: aw,
            name: "triangles"
          })],
          hm = [];
        Tm = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, zm.l)(Tm, "ThreeMfTriangles"), (() => {
          const Am = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, zm.g)(null, mm = {
            value: Tm
          }, fm, {
            kind: "class",
            name: Tm.name,
            metadata: Am
          }, null, hm), Tm = mm.value, Am && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Am
          }), (0, zm.i)(Tm, hm)
        })(), Tm
      })(),
      Hw = (() => {
        let mm, Tm, fm, hm, Am, am, xm, wm, Dm, im = [Xx({
            ns: aw,
            name: "triangle"
          })],
          Rm = [],
          pm = [],
          Em = [],
          om = [],
          Om = [],
          Ym = [],
          qm = [],
          jm = [],
          Vm = [],
          Im = [],
          Km = [],
          Qm = [],
          nm = [],
          Jm = [],
          cm = [];
        Tm = class {
          constructor(mm, Tm, fm) {
            this.v1 = (0, zm.i)(this, pm, void 0), this.v2 = ((0, zm.i)(this, Em), (0, zm.i)(this, om, void 0)), this.v3 = ((0, zm.i)(this, Om), (0, zm.i)(this, Ym, void 0)), this.p1 = ((0, zm.i)(this, qm), (0, zm.i)(this, jm, void 0)), this.p2 = ((0, zm.i)(this, Vm), (0, zm.i)(this, Im, void 0)), this.p3 = ((0, zm.i)(this, Km), (0, zm.i)(this, Qm, void 0)), this.pid = ((0, zm.i)(this, nm), (0, zm.i)(this, Jm, void 0)), (0, zm.i)(this, cm), this.v1 = mm, this.v2 = Tm, this.v3 = fm
          }
        };
        return (0, zm.l)(Tm, "ThreeMfTriangle"), (() => {
          const Zm = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          fm = [Hx({
            name: "v1"
          })], hm = [Hx({
            name: "v2"
          })], Am = [Hx({
            name: "v3"
          })], am = [Hx({
            name: "p1"
          })], xm = [Hx({
            name: "p2"
          })], wm = [Hx({
            name: "p3"
          })], Dm = [Hx({
            name: "pid"
          })], (0, zm.g)(null, null, fm, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: mm => "v1" in mm,
              get: mm => mm.v1,
              set: (mm, Tm) => {
                mm.v1 = Tm
              }
            },
            metadata: Zm
          }, pm, Em), (0, zm.g)(null, null, hm, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: mm => "v2" in mm,
              get: mm => mm.v2,
              set: (mm, Tm) => {
                mm.v2 = Tm
              }
            },
            metadata: Zm
          }, om, Om), (0, zm.g)(null, null, Am, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: mm => "v3" in mm,
              get: mm => mm.v3,
              set: (mm, Tm) => {
                mm.v3 = Tm
              }
            },
            metadata: Zm
          }, Ym, qm), (0, zm.g)(null, null, am, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: mm => "p1" in mm,
              get: mm => mm.p1,
              set: (mm, Tm) => {
                mm.p1 = Tm
              }
            },
            metadata: Zm
          }, jm, Vm), (0, zm.g)(null, null, xm, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: mm => "p2" in mm,
              get: mm => mm.p2,
              set: (mm, Tm) => {
                mm.p2 = Tm
              }
            },
            metadata: Zm
          }, Im, Km), (0, zm.g)(null, null, wm, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: mm => "p3" in mm,
              get: mm => mm.p3,
              set: (mm, Tm) => {
                mm.p3 = Tm
              }
            },
            metadata: Zm
          }, Qm, nm), (0, zm.g)(null, null, Dm, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: mm => "pid" in mm,
              get: mm => mm.pid,
              set: (mm, Tm) => {
                mm.pid = Tm
              }
            },
            metadata: Zm
          }, Jm, cm), (0, zm.g)(null, mm = {
            value: Tm
          }, im, {
            kind: "class",
            name: Tm.name,
            metadata: Zm
          }, null, Rm), Tm = mm.value, Zm && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zm
          }), (0, zm.i)(Tm, Rm)
        })(), Tm
      })(),
      yw = (() => {
        let mm, Tm, fm = [Xx({
            ns: aw,
            name: "components"
          })],
          hm = [];
        Tm = class {
          constructor() {
            this.component = []
          }
        };
        return (0, zm.l)(Tm, "ThreeMfComponents"), (() => {
          const Am = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, zm.g)(null, mm = {
            value: Tm
          }, fm, {
            kind: "class",
            name: Tm.name,
            metadata: Am
          }, null, hm), Tm = mm.value, Am && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Am
          }), (0, zm.i)(Tm, hm)
        })(), Tm
      })(),
      Cw = (() => {
        let mm, Tm, fm, hm, Am = [Xx({
            ns: aw,
            name: "component"
          })],
          am = [],
          xm = [],
          wm = [],
          Dm = [],
          im = [];
        Tm = class {
          constructor(mm, Tm) {
            this.objectid = (0, zm.i)(this, xm, void 0), this.transform = ((0, zm.i)(this, wm), (0, zm.i)(this, Dm, void 0)), (0, zm.i)(this, im), this.objectid = mm, this.transform = Tm
          }
        };
        return (0, zm.l)(Tm, "ThreeMfComponent"), (() => {
          const Rm = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          fm = [Hx({
            name: "objectid"
          })], hm = [Hx({
            name: "transform",
            formatter: zw
          })], (0, zm.g)(null, null, fm, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: mm => "objectid" in mm,
              get: mm => mm.objectid,
              set: (mm, Tm) => {
                mm.objectid = Tm
              }
            },
            metadata: Rm
          }, xm, wm), (0, zm.g)(null, null, hm, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: mm => "transform" in mm,
              get: mm => mm.transform,
              set: (mm, Tm) => {
                mm.transform = Tm
              }
            },
            metadata: Rm
          }, Dm, im), (0, zm.g)(null, mm = {
            value: Tm
          }, Am, {
            kind: "class",
            name: Tm.name,
            metadata: Rm
          }, null, am), Tm = mm.value, Rm && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Rm
          }), (0, zm.i)(Tm, am)
        })(), Tm
      })(),
      rw = (() => {
        let mm, Tm, fm, hm = [Xx({
            ns: aw,
            name: "basematerials"
          })],
          Am = [],
          am = [],
          xm = [];
        Tm = class {
          constructor(mm) {
            this.id = (0, zm.i)(this, am, void 0), this.base = ((0, zm.i)(this, xm), []), this.id = mm
          }
        };
        return (0, zm.l)(Tm, "ThreeMfBaseMaterials"), (() => {
          const wm = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          fm = [Hx({
            name: "id"
          })], (0, zm.g)(null, null, fm, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: mm => "id" in mm,
              get: mm => mm.id,
              set: (mm, Tm) => {
                mm.id = Tm
              }
            },
            metadata: wm
          }, am, xm), (0, zm.g)(null, mm = {
            value: Tm
          }, hm, {
            kind: "class",
            name: Tm.name,
            metadata: wm
          }, null, Am), Tm = mm.value, wm && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wm
          }), (0, zm.i)(Tm, Am)
        })(), Tm
      })(),
      sw = (() => {
        let mm, Tm, fm, hm, Am = [Xx({
            ns: aw,
            name: "base"
          })],
          am = [],
          xm = [],
          wm = [],
          Dm = [],
          im = [];
        Tm = class {
          constructor(mm, Tm) {
            this.name = (0, zm.i)(this, xm, void 0), this.displaycolor = ((0, zm.i)(this, wm), (0, zm.i)(this, Dm, void 0)), (0, zm.i)(this, im), this.name = mm, this.displaycolor = Tm
          }
        };
        return (0, zm.l)(Tm, "ThreeMfBase"), (() => {
          const Rm = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          fm = [Hx({
            name: "name"
          })], hm = [Hx({
            name: "displaycolor"
          })], (0, zm.g)(null, null, fm, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: mm => "name" in mm,
              get: mm => mm.name,
              set: (mm, Tm) => {
                mm.name = Tm
              }
            },
            metadata: Rm
          }, xm, wm), (0, zm.g)(null, null, hm, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: mm => "displaycolor" in mm,
              get: mm => mm.displaycolor,
              set: (mm, Tm) => {
                mm.displaycolor = Tm
              }
            },
            metadata: Rm
          }, Dm, im), (0, zm.g)(null, mm = {
            value: Tm
          }, Am, {
            kind: "class",
            name: Tm.name,
            metadata: Rm
          }, null, am), Tm = mm.value, Rm && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Rm
          }), (0, zm.i)(Tm, am)
        })(), Tm
      })(),
      lw = (() => {
        let mm, Tm, fm = [Xx({
            ns: aw,
            name: "build"
          })],
          hm = [];
        Tm = class {
          constructor() {
            this.item = []
          }
        };
        return (0, zm.l)(Tm, "ThreeMfBuild"), (() => {
          const Am = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, zm.g)(null, mm = {
            value: Tm
          }, fm, {
            kind: "class",
            name: Tm.name,
            metadata: Am
          }, null, hm), Tm = mm.value, Am && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Am
          }), (0, zm.i)(Tm, hm)
        })(), Tm
      })(),
      Mw = (() => {
        let mm, Tm, fm, hm, Am, am = [Xx({
            ns: aw,
            name: "item"
          })],
          xm = [],
          wm = [],
          Dm = [],
          im = [],
          Rm = [],
          pm = [],
          Em = [];
        Tm = class {
          constructor(mm, Tm, fm) {
            this.objectid = (0, zm.i)(this, wm, void 0), this.transform = ((0, zm.i)(this, Dm), (0, zm.i)(this, im, void 0)), this.partnumber = ((0, zm.i)(this, Rm), (0, zm.i)(this, pm, void 0)), this.metadatagroup = (0, zm.i)(this, Em), this.objectid = mm, this.transform = Tm, this.partnumber = fm
          }
        };
        return (0, zm.l)(Tm, "ThreeMfItem"), (() => {
          const om = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          fm = [Hx({
            name: "objectid"
          })], hm = [Hx({
            name: "transform",
            formatter: zw
          })], Am = [Hx({
            name: "partnumber"
          })], (0, zm.g)(null, null, fm, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: mm => "objectid" in mm,
              get: mm => mm.objectid,
              set: (mm, Tm) => {
                mm.objectid = Tm
              }
            },
            metadata: om
          }, wm, Dm), (0, zm.g)(null, null, hm, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: mm => "transform" in mm,
              get: mm => mm.transform,
              set: (mm, Tm) => {
                mm.transform = Tm
              }
            },
            metadata: om
          }, im, Rm), (0, zm.g)(null, null, Am, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: mm => "partnumber" in mm,
              get: mm => mm.partnumber,
              set: (mm, Tm) => {
                mm.partnumber = Tm
              }
            },
            metadata: om
          }, pm, Em), (0, zm.g)(null, mm = {
            value: Tm
          }, am, {
            kind: "class",
            name: Tm.name,
            metadata: om
          }, null, xm), Tm = mm.value, om && Object.defineProperty(Tm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: om
          }), (0, zm.i)(Tm, xm)
        })(), Tm
      })();
    class uw {
      constructor(mm, Tm) {
        this._object = new ew(mm, Tm)
      }
      withName(mm) {
        return this._object.name = mm, this
      }
      withThumbnail(mm) {
        return this._object.thumbnail = mm, this
      }
      withProperty(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = mm, this._object.id = Tm, this
      }
      build() {
        return this._object
      }
      reset(mm, Tm) {
        this._object = new ew(mm, Tm)
      }
    }
    class Bw extends uw {
      constructor(mm) {
        super(mm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dw.model), this._object.content = new yw
      }
      withComponent(mm, Tm) {
        return this._object.content.component.push(new Cw(mm, Tm)), this
      }
    }
    class Lw extends uw {
      constructor(mm) {
        super(mm, Dw.model)
      }
      withPostProcessHandlers(mm, Tm) {
        return this._vh = mm, this._th = Tm, this
      }
      withData(mm) {
        return this._object.content = this._buildMesh(mm), this
      }
      withMaterial(mm, Tm) {
        return this._object.pid = mm, this._object.pindex = Tm, this
      }
      _buildMesh(mm) {
        const Tm = this._buildVertices(mm.positions),
          fm = this._buildTriangle(mm.indices);
        return new Nw(Tm, fm)
      }
      _buildVertices(mm) {
        const Tm = new Gw;
        if (mm)
          for (let fm = 0; fm < mm.length;) {
            const hm = mm[fm++],
              Am = mm[fm++],
              am = mm[fm++];
            let xm = new Xw(hm, Am, am);
            this._vh && (xm = this._vh(xm)), Tm.vertex.push(xm)
          }
        return Tm
      }
      _buildTriangle(mm) {
        const Tm = new Pw;
        if (mm)
          for (let fm = 0; fm < mm.length;) {
            const hm = mm[fm++],
              Am = mm[fm++],
              am = mm[fm++];
            let xm = new Hw(hm, Am, am);
            this._th && (xm = this._th(xm)), Tm.triangle.push(xm)
          }
        return Tm
      }
    }
    class vw {
      constructor(mm) {
        this._m = new rw(mm)
      }
      withColor(mm, Tm) {
        this._m.base = this._m.base ?? [];
        let fm = this._m.base.find((Tm => Tm.name.toLowerCase() === mm.toLowerCase()));
        return fm ? (fm.displaycolor = this._rgbaToHex(Tm), this) : (fm = new sw(mm, this._rgbaToHex(Tm)), this._m.base.push(fm), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(mm) {
        const Tm = mm => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(mm, 1 / 2.2)))),
          fm = Tm(mm.r).toString(16).padStart(2, "0").toUpperCase(),
          hm = Tm(mm.g).toString(16).padStart(2, "0").toUpperCase(),
          Am = Tm(mm.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof mm.a) {
          return `#${fm}${hm}${Am}${Math.round(Math.min(255,Math.max(0,255*mm.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${fm}${hm}${Am}`
      }
    }
    class tw {
      constructor() {
        this._model = new Zw, this._objects = new Map
      }
      withMetaData(mm, Tm, fm, hm) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new kw(mm, Tm, fm, hm)), this
      }
      withMaterial(mm) {
        return mm instanceof vw && (mm = mm.build()), mm && (this._model.resources = this._model.resources ?? new Sw, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(mm)), this
      }
      withMesh(mm) {
        return mm instanceof Lw && (mm = mm.build()), this._model.resources = this._model.resources ?? new Sw, this._model.resources.object.push(mm), this
      }
      withComponents(mm) {
        return mm instanceof Bw && (mm = mm.build()), this._model.resources = this._model.resources ?? new Sw, this._model.resources.object.push(mm), this
      }
      withBuild(mm, Tm, fm) {
        return this._model.build = this._model.build ?? new lw, this._model.build.item?.push(new Mw(mm, Tm, fm)), this
      }
      withUnit(mm) {
        return this._model.unit = mm, this
      }
      reset() {
        return this._model = new Zw, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    tw.KnownMetaSet = new Set(Zw.KnownMeta.map((mm => mm.toLowerCase())));
    class Uw {
      withContentType(mm) {
        this._cts || (this._cts = new Vw);
        const Tm = this._cts.items;
        return Tm.some((Tm => Tm.ext === mm.ext && Tm.ct === mm.ct)) || Tm.push(mm), this
      }
      withRelationship(mm) {
        this._rs || (this._rs = new Kw);
        const Tm = this._rs.items;
        return Tm.some((Tm => Tm.id === mm.id)) || Tm.push(mm), this.withContentType(new Iw("rels", pw.Relationships)), this
      }
      withModel(mm) {
        return mm instanceof tw && (mm = mm.build()), this._m = mm, this.withContentType(new Iw("model", pw.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const mm = `${ow}${Ow}`;
        if (!this._rs) {
          const Tm = `/${mm}`;
          this.withRelationship(new Qw("rel0", jw.ThreeDimModel, Tm))
        }
        return new nw(this._cts, this._rs, this._m)
      }
    }
    class dw {
      constructor(mm) {
        this._o = mm
      }
      get options() {
        return this._o
      }
      async serializeAsync(mm) {
        const Tm = await this.ensureZipLibReadyAsync();
        if (!Tm) return;
        const fm = Tm.Zip,
          hm = Tm.ZipDeflate;
        if (!fm || !hm) throw new Error("fflate Zip / ZipDeflate not available");
        const Am = function(mm, Tm, fm) {
          const Am = new hm(Tm, {
            level: 6
          });
          mm.add(Am);
          const am = function(mm) {
              return {
                push: (Tm, fm) => mm.push(Tm, fm)
              }
            }(Am),
            xm = new Aw(am),
            wm = new fw(xm).dec("1.0", "UTF-8");
          new Fx(wm).serialize(fm), xm.finish()
        };
        for (var am = arguments.length, xm = new Array(am > 1 ? am - 1 : 0), wm = 1; wm < am; wm++) xm[wm - 1] = arguments[wm];
        const Dm = this.toDocument(...xm);
        if (!Dm) return;
        const im = new fm(mm);
        Am(im, qw, Dm.contentTypes), Am(im, `${Ew}${Yw}`, Dm.relationships), Am(im, `${ow}${Ow}`, Dm.model), im.end()
      }
      toDocument() {
        const mm = (new tw).withUnit(this._o?.unit ?? ww.millimeter);
        if (this.options.metadata)
          for (const Am in this.options.metadata) mm.withMetaData(Am, this.options.metadata[Am]);
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        return (new Uw).withModel(this.toModel(mm, ...fm)).build()
      }
    }
    class gw {
      static async SerializeToMemoryAsync(mm) {
        const Tm = new Array;
        let fm = 0;
        for (var hm = arguments.length, Am = new Array(hm > 1 ? hm - 1 : 0), am = 1; am < hm; am++) Am[am - 1] = arguments[am];
        if (await mm.serializeAsync((function(mm, hm, Am) {
            Tm.push(hm), fm += hm.length
          }), ...Am), !fm) return;
        const xm = new Uint8Array(fm);
        let wm = 0;
        for (const Dm of Tm) xm.set(Dm, wm), wm += Dm.length;
        return xm
      }
    }
    class Ww {}
    Ww.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Fw {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = mm, this._to = Tm, this._step = fm, this._i = mm
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const mm = this._i;
        return this._i += this._step, mm
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class mD extends dw {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...mD.DefaultOptions,
          ...mm
        })
      }
      toModel(mm) {
        for (var Tm = arguments.length, fm = new Array(Tm > 1 ? Tm - 1 : 0), hm = 1; hm < Tm; hm++) fm[hm - 1] = arguments[hm];
        fm = fm.filter((mm => mm instanceof Eh.c || mm instanceof om.d));
        const Am = new Fw,
          am = mm,
          xm = new Map,
          wm = this.options.exportInstances ? [] : null;
        for (let Dm = 0; Dm < fm.length; Dm++) {
          const mm = fm[Dm];
          if (mm instanceof om.d) {
            wm?.push(mm);
            continue
          }
          const Tm = mm.name || `mesh${Dm}`,
            hm = mm.getWorldMatrix(),
            im = this._handleBabylonTo3mfMatrixTransformToRef(hm, Jw.Zero()),
            Rm = mm.jK;
          if (void 0 === Rm) continue;
          const pm = 1 == Rm.length;
          for (let fm = 0; fm < Rm.length; fm++) {
            const hm = Rm[fm],
              wm = this._extractSubMesh(mm, hm);
            if (wm) {
              const mm = pm ? `${Tm}` : `${Tm}_${fm}`,
                Dm = new Lw(Am.next()).withData(wm).withName(mm).build();
              am.withMesh(Dm), am.withBuild(Dm.id, im), xm.set(hm, Dm)
            }
          }
        }
        if (wm && wm.length) {
          const mm = this._groupBy(wm, (mm => mm.mAm));
          for (const [Tm, fm] of Array.from(mm.entries()))
            if (fm && fm.length)
              for (let mm = 0; mm < fm.length; mm++) {
                const hm = fm[mm].getWorldMatrix(),
                  Am = Tm.jK;
                for (let mm = 0; mm < Am.length; mm++) {
                  const Tm = Am[mm],
                    fm = xm.get(Tm);
                  fm && am.withBuild(fm.id, this._handleBabylonTo3mfMatrixTransformToRef(hm, Jw.Zero()))
                }
              }
        }
        return am.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const mm = globalThis;
          return mm.fflate || await Am.Tools.LoadScriptAsync(Ww.FFLATEUrl), mm.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(mm, Tm) {
        const fm = mm.xhm();
        if (!fm) return;
        const hm = mm.getVerticesData(mD._PositionKind);
        if (!hm) return;
        if (0 == Tm.indexStart && Tm.indexCount == fm.length) return {
          positions: hm,
          indices: fm
        };
        const Am = Tm.indexStart,
          am = new Map,
          xm = [],
          wm = new Uint32Array(Tm.indexCount);
        for (let Dm = 0; Dm < Tm.indexCount; Dm++) {
          const mm = fm[Am + Dm];
          let Tm = am.get(mm);
          if (void 0 === Tm) {
            Tm = am.size, am.set(mm, Tm);
            const fm = 3 * mm;
            xm.push(hm[fm], hm[fm + 1], hm[fm + 2])
          }
          wm[Dm] = Tm
        }
        return {
          positions: new Float32Array(xm),
          indices: wm
        }
      }
      _groupBy(mm, Tm) {
        const fm = new Map;
        for (const hm of mm) {
          const mm = Tm(hm),
            Am = fm.get(mm);
          Am ? Am.push(hm) : fm.set(mm, [hm])
        }
        return fm
      }
      _handleBabylonTo3mfMatrixTransformToRef(mm, Tm) {
        const fm = mm.multiplyToRef(mD._R_BJS_TO_3MF, Cm.e.Zero()).m;
        return Tm.values = [fm[0], fm[1], fm[2], fm[4], fm[5], fm[6], fm[8], fm[9], fm[10], fm[12], fm[13], fm[14]], Tm
      }
    }
    mD.DefaultOptions = {
      unit: ww.meter,
      exportInstances: !1
    }, mD._PositionKind = "position", mD._R_BJS_TO_3MF = Cm.e.RotationX(Math.PI / 2).multiply(Cm.e.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);